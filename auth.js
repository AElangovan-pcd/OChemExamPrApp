// Access gate for OChemStudyBuddy.
//
// WHAT THIS IS FOR: keeping the general public out of the hosted app, exactly as the CHEM 131
// StudyBuddy does (instructor, 2026-09-05: "as done for the CHEM 131"). It stores NOTHING about any
// student -- no name, no email, no per-student record, nothing that could be FERPA-protected. A
// visitor either presents the term's access code once or they do not get in.
//
// WHY IT GATES THE DATA AND NOT JUST THE UI: the whole question bank ships as questions/ch01.js
// through ch31.js, plain files the browser downloads. Hiding the interface behind a modal would leave
// every one of them a URL away, so the gate runs in front of every request except the login itself.
//
// ZERO DEPENDENCIES, deliberately: package.json has none and this adds none. Node's own crypto does
// the signing, so there is no supply chain to audit and nothing to keep patched.
//
// Author: A. Elangovan, PhD
const crypto = require('crypto');

const COOKIE_NAME = 'ochem_access';
const SESSION_DAYS = Number(process.env.STUDYBUDDY_SESSION_DAYS || 120);
// SameSite=Lax is right for the ordinary case (a student opens the app in a tab) and is NOT sent in
// a cross-site iframe, so a Canvas page that embeds the app with <iframe> cannot log anyone in.
// Canvas "External URL" module items open top-level and work. Set this to None to try the iframe
// route; note Safari blocks third-party cookies outright, so it will still fail there.
const SAMESITE = process.env.STUDYBUDDY_COOKIE_SAMESITE || 'Lax';

// Attempts are counted per IP in a fixed window. In memory on purpose: the service restarts often on
// Render's free tier, and a restart clearing the counters is not worth a database. It raises the cost
// of guessing a short code from trivial to impractical, which is all it needs to do.
const MAX_ATTEMPTS = 10;
const WINDOW_MS = 15 * 60 * 1000;
const attempts = new Map();

const studentCode = () => process.env.STUDYBUDDY_ACCESS_CODE || '';
const instructorCode = () => process.env.STUDYBUDDY_INSTRUCTOR_CODE || '';
const onRender = () => Boolean(process.env.RENDER);

// THE WAY BACK OUT, and it is deliberately not "delete the access code".
//
// A deployed instance with no code set refuses to serve, because the overwhelmingly likely reason
// for a missing code is that someone forgot to set one, and serving the whole bank to the public is
// the wrong way to fail. But that leaves no dashboard-only route back to an open site if the gate
// itself turns out to be the problem mid-term -- and there has to be one, because the alternative
// is editing code under pressure while students are locked out.
//
// So: STUDYBUDDY_OPEN=true turns the gate off completely. It is an explicit act, which is what makes
// it different from a missing variable, and it is announced at startup so it cannot sit forgotten.
const isOpen = () => /^(1|true|yes|on)$/i.test(process.env.STUDYBUDDY_OPEN || '');

// The signing key. If SESSION_SECRET is not set it is derived from the access codes, which has a
// useful consequence worth keeping: changing the term's code invalidates every cookie signed with the
// old one, so rotating the code at the start of a term logs the previous term's devices out. Set
// SESSION_SECRET explicitly if you ever want sessions to survive a code change.
function signingKey() {
  if (process.env.SESSION_SECRET) return process.env.SESSION_SECRET;
  return crypto.createHash('sha256')
    .update('ochemstudybuddy|' + studentCode() + '|' + instructorCode())
    .digest('hex');
}

function sign(payload) {
  return crypto.createHmac('sha256', signingKey()).update(payload).digest('base64url');
}

function issueCookie(role) {
  const expires = Date.now() + SESSION_DAYS * 86400000;
  const payload = role + '.' + expires;
  const value = payload + '.' + sign(payload);
  const flags = [
    COOKIE_NAME + '=' + value,
    'Path=/',
    'Max-Age=' + Math.floor(SESSION_DAYS * 86400),
    'HttpOnly',
    'SameSite=' + SAMESITE
  ];
  // Render terminates TLS in front of the app, so Secure is right there and wrong on plain-HTTP
  // localhost, where the browser would silently drop the cookie and the login would appear to fail.
  if (onRender() || SAMESITE === 'None') flags.push('Secure');
  return flags.join('; ');
}

function readCookie(header, name) {
  if (!header) return '';
  for (const part of header.split(';')) {
    const eq = part.indexOf('=');
    if (eq < 0) continue;
    if (part.slice(0, eq).trim() === name) return part.slice(eq + 1).trim();
  }
  return '';
}

function cookieIsValid(raw) {
  if (!raw) return false;
  const bits = raw.split('.');
  if (bits.length !== 3) return false;
  const [role, expires, mac] = bits;
  const expected = sign(role + '.' + expires);
  // Compare in constant time, and only after a length check -- timingSafeEqual throws on a mismatch.
  if (mac.length !== expected.length) return false;
  if (!crypto.timingSafeEqual(Buffer.from(mac), Buffer.from(expected))) return false;
  return Number(expires) > Date.now();
}

// Constant-time comparison of a submitted code against a configured one. Returns the role that
// matched, or '' for no match. An unset code never matches, so leaving the instructor code blank
// simply means there is no instructor code -- not that the empty string opens the door.
function matchCode(submitted) {
  const candidates = [['student', studentCode()], ['instructor', instructorCode()]];
  let matched = '';
  for (const [role, configured] of candidates) {
    if (!configured) continue;
    const a = Buffer.from(String(submitted));
    const b = Buffer.from(configured);
    if (a.length !== b.length) continue;
    if (crypto.timingSafeEqual(a, b)) matched = role;
  }
  return matched;
}

function clientIp(req) {
  const fwd = req.headers['x-forwarded-for'];
  return (fwd ? String(fwd).split(',')[0] : req.socket.remoteAddress || '').trim();
}

function tooManyAttempts(ip) {
  const now = Date.now();
  const rec = attempts.get(ip);
  if (!rec || now - rec.start > WINDOW_MS) return false;
  return rec.count >= MAX_ATTEMPTS;
}

function noteAttempt(ip) {
  const now = Date.now();
  const rec = attempts.get(ip);
  if (!rec || now - rec.start > WINDOW_MS) attempts.set(ip, { start: now, count: 1 });
  else rec.count += 1;
  // Keep the map from growing without bound on a long-lived process.
  if (attempts.size > 5000) {
    for (const [key, value] of attempts) if (now - value.start > WINDOW_MS) attempts.delete(key);
  }
}

const page = (body) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="A. Elangovan, PhD">
<title>OChemStudyBuddy</title>
<style>
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  body { margin:0; min-height:100vh; display:flex; align-items:center; justify-content:center;
         background:#08090f; color:#e2e8f0; padding:1.5rem;
         font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; }
  .card { width:100%; max-width:26rem; background:#121422; border:1px solid #2a2f4a;
          border-radius:14px; padding:2rem; box-shadow:0 18px 40px rgba(0,0,0,.35); }
  h1 { margin:0 0 .35rem; font-size:1.3rem; }
  p  { margin:0 0 1.25rem; color:#94a3b8; font-size:.92rem; line-height:1.5; }
  label { display:block; font-size:.8rem; text-transform:uppercase; letter-spacing:.05em;
          color:#94a3b8; margin-bottom:.4rem; }
  input { width:100%; padding:.7rem .85rem; font-size:1rem; border-radius:8px;
          border:1px solid #475569; background:#08090f; color:#e2e8f0; }
  input:focus { outline:2px solid #6366f1; outline-offset:1px; }
  button { width:100%; margin-top:1rem; padding:.75rem; font-size:1rem; font-weight:700;
           border:0; border-radius:8px; background:#6366f1; color:#fff; cursor:pointer; }
  button:hover { background:#818cf8; }
  .err { background:rgba(244,63,94,.12); border:1px solid rgba(244,63,94,.4); color:#fecdd3;
         padding:.6rem .8rem; border-radius:8px; margin-bottom:1rem; font-size:.88rem; }
  .foot { margin:1.25rem 0 0; font-size:.78rem; color:#64748b; }
</style></head>
<body><main class="card">${body}</main></body></html>`;

function loginPage(message) {
  return page(`
  <h1>&#9879; OChemStudyBuddy</h1>
  <p>This practice site is for students enrolled in CHEM 261, 262 and 263. Enter the access code from our Canvas course to continue.</p>
  ${message ? `<div class="err" role="alert">${message}</div>` : ''}
  <form method="POST" action="/auth">
    <label for="code">Access code</label>
    <input id="code" name="code" type="password" autocomplete="current-password"
           autocapitalize="none" autocorrect="off" spellcheck="false" required autofocus>
    <button type="submit">Enter</button>
  </form>
  <p class="foot">You will stay signed in on this device for the rest of the term.
  Organic Chemistry &copy; A. Elangovan, PhD</p>`);
}

const misconfiguredPage = () => page(`
  <h1>Not configured</h1>
  <p>This deployment has no access code set, so it is refusing to serve the app.
  Set <strong>STUDYBUDDY_ACCESS_CODE</strong> in the hosting environment and redeploy.</p>`);

// The gate. Returns true when it has handled the request, false to let the static server carry on.
function handle(req, res) {
  // Explicitly unrestricted: serve everything, exactly as the Render Static Site did.
  if (isOpen()) return false;

  // Fail closed in the deployed environment: an unset code there means a misconfiguration, and
  // serving the whole bank to the public is the one outcome worth refusing to start for. Locally it
  // stays open so `npm start`, the tests and the browser UAT all still work.
  if (!studentCode() && !instructorCode()) {
    if (onRender()) {
      res.writeHead(503, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.end(misconfiguredPage());
      return true;
    }
    return false;
  }

  const url = req.url.split('?')[0];

  if (url === '/auth' && req.method === 'POST') {
    const ip = clientIp(req);
    if (tooManyAttempts(ip)) {
      res.writeHead(429, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.end(loginPage('Too many attempts. Please wait about fifteen minutes and try again.'));
      return true;
    }
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 2048) req.destroy();       // a code is short; nothing else belongs here
    });
    req.on('end', () => {
      const submitted = decodeURIComponent(
        (body.split('&').find(p => p.startsWith('code=')) || '').slice(5).replace(/\+/g, ' ')
      ).trim();
      const role = matchCode(submitted);
      if (!role) {
        noteAttempt(ip);
        res.writeHead(401, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(loginPage('That code was not recognised. Check the announcement in Canvas.'));
        return;
      }
      attempts.delete(ip);
      res.writeHead(302, { 'Set-Cookie': issueCookie(role), 'Location': '/' });
      res.end();
    });
    return true;
  }

  if (cookieIsValid(readCookie(req.headers.cookie, COOKIE_NAME))) return false;

  // Not signed in. Everything gets the login page -- including every questions/ch<NN>.js, which is
  // the whole point. 401 rather than 200 so an automated fetch cannot mistake the gate for content,
  // and no-store so a shared browser does not keep it.
  res.writeHead(401, { 'Content-Type': 'text/html; charset=UTF-8', 'Cache-Control': 'no-store' });
  res.end(loginPage(''));
  return true;
}

// Say out loud which mode this process is in. A gate that is silently off is worse than no gate,
// because nobody goes looking for it.
function describeMode() {
  if (isOpen()) return 'OPEN - STUDYBUDDY_OPEN is set, so the access gate is DISABLED and anyone with the URL can read everything.';
  if (studentCode() || instructorCode()) {
    const which = [studentCode() && 'student', instructorCode() && 'instructor'].filter(Boolean).join(' + ');
    return 'GATED - an access code is required (' + which + ').';
  }
  return onRender()
    ? 'REFUSING TO SERVE - no access code is set on a deployed instance. Set STUDYBUDDY_ACCESS_CODE, or STUDYBUDDY_OPEN=true to run without a gate.'
    : 'open (local development - no access code set).';
}

module.exports = { handle, COOKIE_NAME, describeMode };
