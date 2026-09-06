// Zero-dependency Node.js HTTP server for the Render Web Service (and local preview).
//
// Mirrors the CHEM 131 StudyBuddy's server.js (instructor, 2026-09-05: authentication "as done for
// the CHEM 131"). The access gate in auth.js runs before anything is served, so an unauthenticated
// request never reaches a chapter file. Two deliberate differences from the sibling: the text
// assets are gzipped on the fly with Node's zlib rather than from pre-compressed twins (no build
// step here to keep them fresh), and an unknown path is a 404, since this app has no client-side
// routes to fall back to.
//
// Author: A. Elangovan, PhD
const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const auth = require('./auth');

const PORT = process.env.PORT || 10000;
const PUBLIC_DIR = path.resolve(__dirname);

// Text worth compressing. Images are already compressed; gzipping them costs time and saves nothing.
const COMPRESSIBLE = new Set(['.html', '.css', '.js', '.json', '.svg']);

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  // The gate answers 401 (or 503 when misconfigured on Render) and returns true when it has done so.
  if (auth.handle(req, res)) return;

  let reqPath = decodeURIComponent(req.url.split('?')[0]);
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

  // Stay inside the repo directory whatever the request says.
  const safePath = path.normalize(reqPath).replace(/^(\.\.[\\/])+/, '');
  const filePath = path.join(PUBLIC_DIR, safePath);
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Freshness: every text asset revalidates on each load (the Static Site served max-age=0 for the
    // same reason, so a student can never hold a stale chapter file), and an unchanged file costs a
    // 304 rather than a transfer. Images may be cached for a day.
    const lastModified = new Date(stats.mtimeMs);
    lastModified.setMilliseconds(0);
    const since = req.headers['if-modified-since'] ? new Date(req.headers['if-modified-since']) : null;
    if (since && !Number.isNaN(since.getTime()) && lastModified <= since) {
      res.writeHead(304, { 'Last-Modified': lastModified.toUTCString() });
      res.end();
      return;
    }

    const headers = {
      'Content-Type': contentType,
      'Last-Modified': lastModified.toUTCString(),
      'Cache-Control': /^\.(png|jpe?g|gif|ico|woff2?|ttf)$/.test(ext) ? 'public, max-age=86400' : 'no-cache'
    };
    // No wildcard CORS: behind the access gate the bank is not something any other origin should be
    // able to fetch, and nothing in this app makes a cross-origin request to itself.

    const stream = fs.createReadStream(filePath);
    if (COMPRESSIBLE.has(ext)) {
      // Unconditional on anything compressible, not just on the compressed reply: a plain response
      // cached without it would be handed back to a client that could have had the small version.
      headers['Vary'] = 'Accept-Encoding';
      if (/\bgzip\b/.test(req.headers['accept-encoding'] || '')) {
        headers['Content-Encoding'] = 'gzip';
        res.writeHead(200, headers);
        stream.pipe(zlib.createGzip()).pipe(res);
        return;
      }
    }
    res.writeHead(200, headers);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`[OChemStudyBuddy] Server listening on http://localhost:${PORT}`);
  console.log(`[OChemStudyBuddy] Access: ${auth.describeMode()}`);
});
