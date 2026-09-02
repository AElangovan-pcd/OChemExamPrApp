// OChemStudyBuddy - Core Logic
// Author: A. Elangovan, PhD

// App State
let state = {
  questions: [],          // All loaded questions
  filteredQuestions: [],  // Questions in selected topic
  currentQuestionIndex: 0,// Index in current active quiz
  answersSubmitted: {},   // Maps question index -> selected option_id
  selectedTopic: 'All Topics',
  score: 0,
  stats: {
    correct: 0,
    attempted: 0
  },
  appMode: 'practice',          // 'practice' or 'mock',
  topicSortMode: 'chapter',     // 'chapter' or 'alpha'
  mockExam: {
    active: false,
    questions: [],
    currentIndex: 0,
    answers: {},
    flags: {},
    timeRemaining: 110 * 60,
    timerId: null,
    completed: false,
    startTime: null,
    endTime: null,
    history: []
  }
};

// Selections made in matching questions (Practice Mode)
let matchingSelections = {};

// Preprocess loaded questions to assign consistent OER chapter numbers matching McMurry OpenStax
// McMurry OpenStax Organic Chemistry Textbook Chapter Titles
const OER_CHAPTER_TOPICS = {
  1: "Structure and Bonding",
  2: "Polar Covalent Bonds; Acids and Bases",
  3: "Organic Compounds: Alkanes and Their Stereochemistry",
  4: "Organic Compounds: Cycloalkanes and Their Stereochemistry",
  5: "Stereochemistry at Tetrahedral Centers",
  6: "An Overview of Organic Reactions",
  7: "Alkenes: Structure and Reactivity",
  8: "Alkenes: Reactions and Synthesis",
  9: "Alkynes: An Introduction to Organic Synthesis",
  10: "Organohalides",
  11: "Reactions of Alkyl Halides: Nucleophilic Substitutions and Eliminations",
  12: "Structure Determination: Mass Spectrometry and Infrared Spectroscopy",
  13: "Structure Determination: Nuclear Magnetic Resonance Spectroscopy",
  14: "Conjugated Dienes and Ultraviolet Spectroscopy",
  15: "Benzene and Aromaticity",
  16: "Chemistry of Benzene: Electrophilic Aromatic Substitution",
  17: "Alcohols and Phenols",
  18: "Ethers and Epoxides; Thiols and Sulfides",
  19: "Aldehydes and Ketones: Nucleophilic Addition Reactions",
  20: "Carboxylic Acids and Nitriles",
  21: "Carboxylic Acid Derivatives: Nucleophilic Acyl Substitution Reactions",
  22: "Carbonyl Alpha-Substitution Reactions",
  23: "Carbonyl Condensation Reactions",
  24: "Amines and Heterocycles",
  25: "Biomolecules: Carbohydrates",
  26: "Biomolecules: Amino Acids, Peptides, and Proteins",
  27: "Biomolecules: Lipids",
  28: "Biomolecules: Nucleic Acids",
  29: "The Organic Chemistry of Metabolic Pathways",
  30: "Orbitals and Organic Chemistry: Pericyclic Reactions",
  31: "Synthetic Polymers"
};

function assignOERChapterNumbers() {
  // The chapter is the question_id prefix, which tools/validate.js guarantees agrees
  // with the filename. No lookup table: there is nothing left to disagree.
  state.questions.forEach(q => {
    const m = q.question_id.match(/^ch(\d+)_/i);
    q.chapterNum = m ? Number(m[1]) : 1;
  });
}

function setTopicSort(mode) {
  state.topicSortMode = mode;
  
  // Update button active classes
  const btnChapter = document.getElementById('sort-by-chapter');
  const btnAlpha = document.getElementById('sort-by-alpha');
  
  if (btnChapter && btnAlpha) {
    if (mode === 'chapter') {
      btnChapter.classList.add('active');
      btnAlpha.classList.remove('active');
    } else {
      btnChapter.classList.remove('active');
      btnAlpha.classList.add('active');
    }
  }
  
  buildTopicList();
}

// SmilesDrawer Settings
let smilesDrawer = null;
const smilesDrawerOptions = {
  width: 320,
  height: 200,
  bondThickness: 1.6,
  // ACS-style fixed geometry (instructor, 2026-09-02): a 28-unit bond with an 11-pt label
  // keeps atom symbols at ChemDraw proportions, and the updateViewbox patch below stops
  // SmilesDrawer from enlarging a small molecule to fill its canvas, so a three-carbon
  // ring and a substituted benzene draw at the same scale with the same symbol size.
  bondLength: 28,
  shortBondLength: 0.85,
  fontSizeLarge: 11,
  fontSizeSmall: 8,
  padding: 10,
  terminalCarbons: true,
  explicitHydrogens: false,
  // SmilesDrawer's compact mode collapses a small molecule into a condensed text
  // formula - Cl[C@H](F)C renders as the string "CHClFHCH3", with no bonds and no
  // wedges, which makes every stereochemistry item on a short chain unanswerable.
  // Larger structures draw identically either way, so this is off everywhere.
  compactDrawing: false
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  // Load the question bank. Chapter files declare `var CH<NN>_QUESTIONS`, which
  // attaches to globalThis; a `const` would stay a lexical binding, this loop would
  // find nothing, and the app would silently load an empty bank.
  for (let n = 1; n <= 31; n++) {
    const name = `CH${String(n).padStart(2, '0')}_QUESTIONS`;
    if (Array.isArray(globalThis[name])) {
      state.questions = [...state.questions, ...globalThis[name]];
    }
  }

  // Assign OER chapter numbers to all loaded questions
  assignOERChapterNumbers();

  // Initialize Smiles Drawer
  if (typeof SmilesDrawer !== 'undefined') {
    if (SmilesDrawer.SvgDrawer && !SmilesDrawer.SvgDrawer.prototype._customLayoutPatchApplied) {
      SmilesDrawer.SvgDrawer.prototype._customLayoutPatchApplied = true;

      // 1. Skip drawing disconnected '.' pseudo-bonds
      const origDrawEdge = SmilesDrawer.SvgDrawer.prototype.drawEdge;
      SmilesDrawer.SvgDrawer.prototype.drawEdge = function(edgeId, debug) {
        const edge = this.preprocessor && this.preprocessor.graph && this.preprocessor.graph.edges[edgeId];
        if (edge && edge.bondType === '.') {
          return;
        }
        return origDrawEdge.call(this, edgeId, debug);
      };

      // 1b. Never scale a drawing up. SmilesDrawer sets a square viewBox equal to the
      // molecule's bounds, and toCanvas then stretches that to the canvas, so a small
      // ion drew its bonds and labels three times larger than a substituted benzene's.
      // Expanding the viewBox to at least the canvas height after the SVG is drawn pins
      // the scale at 1:1; molecules larger than the canvas still scale down as before.
      // (SvgWrapper is not exported, so the hook sits on SvgDrawer.draw.)
      const origSvgDraw = SmilesDrawer.SvgDrawer.prototype.draw;
      SmilesDrawer.SvgDrawer.prototype.draw = function(data, target, themeName, infoOnly) {
        const result = origSvgDraw.call(this, data, target, themeName, infoOnly);
        const svg = (typeof target === 'string') ? document.getElementById(target) : target;
        if (svg && !infoOnly && !(this.opts && this.opts.scale > 0)) {
          const vb = (svg.getAttribute('viewBox') || '').split(' ').map(Number);
          const min = this.minViewBox || (this.opts && this.opts.height) || 200;
          if (vb.length === 4 && vb.every(n => !isNaN(n)) && vb[2] < min) {
            const grow = (min - vb[2]) / 2;
            svg.setAttributeNS(null, 'viewBox', `${vb[0] - grow} ${vb[1] - grow} ${min} ${min}`);
          }
        }
        return result;
      };

      // 1c. The viewBox is square and toCanvas maps it to the canvas height, and the app
      // then displays the canvas at a CSS size (0.7x for a question, 0.47x for an option),
      // so the minimum has to be the canvas's displayed height for a bond to be the same
      // number of screen pixels in every canvas. Drawer.draw sees the canvas; stash it.
      const origDrawerDraw = SmilesDrawer.Drawer.prototype.draw;
      SmilesDrawer.Drawer.prototype.draw = function(data, target, themeName, infoOnly) {
        const canvas = (typeof target === 'string') ? document.getElementById(target) : target;
        // drawSMILESCanvas has already given the element its final attribute size, so the
        // displayed height is the one the drawing will be shown at.
        this.svgDrawer.minViewBox = (canvas && canvas.offsetHeight) || 0;
        return origDrawerDraw.call(this, data, target, themeName, infoOnly);
      };

      // 2. Mark explicit charges in multi-component molecules (e.g. A.B)
      const origDrawVertices = SmilesDrawer.SvgDrawer.prototype.drawVertices;
      SmilesDrawer.SvgDrawer.prototype.drawVertices = function(debug) {
        if (this.preprocessor && this.preprocessor.graph && this.preprocessor.graph.vertices) {
          const graph = this.preprocessor.graph;

          // Mark explicit charges for carbocations/ions
          graph.vertices.forEach(v => {
            const atom = v.value;
            const hasCharge = (atom && ((atom.charge && atom.charge !== 0) || (atom.bracket && atom.bracket.charge && atom.bracket.charge !== 0)));
            if (hasCharge) {
              atom.drawExplicit = true;
            }
          });

          // (An earlier version also shifted later fragments of a dot-disconnected string to
          // the right. SmilesDrawer 2.0.1 already lays fragments out side by side, so that
          // shift moved every label of the second fragment one fragment-width past its ring.
          // Found and removed in the Ch 15 pass.)
        }
        return origDrawVertices.call(this, debug);
      };
    }
    smilesDrawer = new SmilesDrawer.Drawer(smilesDrawerOptions);
  } else {
    showToast('SmilesDrawer chemical renderer not loaded', 'error');
  }

  // Load Saved Stats from LocalStorage if available
  loadStats();
  loadMockHistory();

  // Set up Event Listeners
  setupEventListeners();

  // Build Topic List Sidebar
  buildTopicList();

  // Select Default Topic
  selectTopic('All Topics');
});

// Setup Events
function setupEventListeners() {
  // Reset Stats button
  const resetBtn = document.getElementById('btn-reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetStats);
  }

  // Mock Exam submit / quit buttons
  const mockSubmitBtn = document.getElementById('btn-mock-submit');
  if (mockSubmitBtn) {
    mockSubmitBtn.addEventListener('click', () => submitMockExam(false));
  }
  
  const mockQuitBtn = document.getElementById('btn-mock-quit');
  if (mockQuitBtn) {
    mockQuitBtn.addEventListener('click', quitMockExam);
  }

  // Topic sorting buttons
  const btnChapter = document.getElementById('sort-by-chapter');
  const btnAlpha = document.getElementById('sort-by-alpha');
  if (btnChapter) {
    btnChapter.addEventListener('click', () => setTopicSort('chapter'));
  }
  if (btnAlpha) {
    btnAlpha.addEventListener('click', () => setTopicSort('alpha'));
  }
}

// Stats persistence
function saveStats() {
  localStorage.setItem('ochem_pr_stats', JSON.stringify(state.stats));
  updateStatsDisplay();
}

function loadStats() {
  const saved = localStorage.getItem('ochem_pr_stats');
  if (saved) {
    try {
      state.stats = JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse saved stats', e);
    }
  }
  updateStatsDisplay();
}

function resetStats() {
  state.stats = { correct: 0, attempted: 0 };
  state.score = 0;
  saveStats();
  showToast('Statistics reset successfully', 'success');
  renderQuestion();
}

function updateStatsDisplay() {
  const correctEl = document.getElementById('stat-correct');
  const attemptedEl = document.getElementById('stat-attempted');
  const accuracyEl = document.getElementById('stat-accuracy');

  if (correctEl) correctEl.textContent = state.stats.correct;
  if (attemptedEl) attemptedEl.textContent = state.stats.attempted;
  
  if (accuracyEl) {
    const accuracy = state.stats.attempted > 0 
      ? Math.round((state.stats.correct / state.stats.attempted) * 100) 
      : 0;
    accuracyEl.textContent = `${accuracy}%`;
  }
}

// Build Sidebar Topics list
function buildTopicList() {
  const listContainer = document.getElementById('topic-list');
  if (!listContainer) return;

  // Extract unique OER chapters present in the loaded questions
  const chaptersSet = new Set();
  state.questions.forEach(q => {
    if (q.chapterNum) {
      chaptersSet.add(q.chapterNum);
    }
  });
  const chapters = Array.from(chaptersSet);

  // Map each chapter number to its textbook name
  const topics = chapters.map(chNum => {
    return {
      chNum: chNum,
      name: OER_CHAPTER_TOPICS[chNum] || `Chapter ${chNum}`
    };
  });

  // Sort based on sort mode
  if (state.topicSortMode === 'alpha') {
    // Sort topics alphabetically A-Z
    topics.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    // Sort topics by OER Chapter number
    topics.sort((a, b) => a.chNum - b.chNum);
  }

  // Clear list
  listContainer.innerHTML = '';

  // Add 'All Topics' item
  const allItem = document.createElement('li');
  allItem.className = `topic-item ${state.selectedTopic === 'All Topics' ? 'active' : ''}`;
  allItem.setAttribute('data-topic', 'All Topics');
  allItem.textContent = 'All Topics';
  allItem.addEventListener('click', () => selectTopic('All Topics'));
  listContainer.appendChild(allItem);

  // Add sorted topics
  topics.forEach(topic => {
    const item = document.createElement('li');
    item.className = `topic-item ${state.selectedTopic === topic.name ? 'active' : ''}`;
    item.setAttribute('data-topic', topic.name);
    item.textContent = `Ch ${topic.chNum}: ${topic.name}`;
    
    item.addEventListener('click', () => selectTopic(topic.name));
    listContainer.appendChild(item);
  });
}

// Helper to dynamically adjust option letter references in feedback text
function replaceOptionLettersInText(text, letterMap) {
  if (!text) return '';
  let updatedText = text;
  
  // Replace "Option [A-D]", "Choice [A-D]", "option [A-D]", "choice [A-D]"
  updatedText = updatedText.replace(/\b(options?|choices?|correct equation)\s+([A-D])\b/gi, (match, word, letter) => {
    const upperLetter = letter.toUpperCase();
    if (letterMap[upperLetter]) {
      const mappedLetter = letterMap[upperLetter];
      const isLowercase = (letter === letter.toLowerCase());
      const finalLetter = isLowercase ? mappedLetter.toLowerCase() : mappedLetter;
      return `${word} ${finalLetter}`;
    }
    return match;
  });
  
  return updatedText;
}

// Helper to clone a list of questions and shuffle their options, rewriting option_ids and feedback references
function shuffleQuestionsOptions(questions) {
  if (!questions || !Array.isArray(questions)) return [];
  
  return questions.map(q => {
    // Deep clone the question structure to avoid side effects on the base dataset
    const clonedQ = {
      ...q,
      options: q.options.map(opt => ({ ...opt }))
    };
    
    const options = clonedQ.options;
    
    // Fisher-Yates shuffle the options array
    let m = options.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      const t = options[m];
      options[m] = options[i];
      options[i] = t;
    }
    
    // Map original option letters (A, B, C, etc.) to their new randomized positions
    const optionLetterMap = {};
    const letters = ['A', 'B', 'C', 'D'];
    options.forEach((opt, index) => {
      const newLetter = letters[index] || String.fromCharCode(65 + index);
      optionLetterMap[opt.option_id] = newLetter;
      opt.option_id = newLetter;
    });
    
    // If the question has feedback, update option letter references inside feedback strings
    if (clonedQ.feedback) {
      const fb = { ...clonedQ.feedback };
      for (const part of ['context', 'process', 'result', 'approach', 'note']) {
        if (fb[part]) fb[part] = replaceOptionLettersInText(fb[part], optionLetterMap);
      }

      // Per-option rationales are keyed by the option_id as authored. The shuffle above
      // has just relabelled the options, so these keys must travel with their option -
      // leave them alone and every rationale attaches to the wrong answer.
      if (fb.options) {
        const remapped = {};
        for (const [authoredId, text] of Object.entries(fb.options)) {
          const newLetter = optionLetterMap[authoredId];
          if (newLetter) remapped[newLetter] = replaceOptionLettersInText(text, optionLetterMap);
        }
        fb.options = remapped;
      }
      clonedQ.feedback = fb;
    }
    
    return clonedQ;
  });
}

// Select a Topic
function selectTopic(topic) {
  state.selectedTopic = topic;
  
  // Filter questions and shuffle their options to avoid Choice A always being correct
  let baseQuestions = [];
  if (topic === 'All Topics') {
    baseQuestions = [...state.questions];
  } else {
    baseQuestions = state.questions.filter(q => {
      const qChapterName = OER_CHAPTER_TOPICS[q.chapterNum] || `Chapter ${q.chapterNum}`;
      return qChapterName === topic;
    });
  }
  
  state.filteredQuestions = shuffleQuestionsOptions(baseQuestions);

  // Update active styling in sidebar
  const items = document.querySelectorAll('.topic-item');
  items.forEach(item => {
    if (item.getAttribute('data-topic') === topic) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Reset quiz progress
  state.currentQuestionIndex = 0;
  state.score = 0;
  state.answersSubmitted = {};
  
  // Render
  renderQuestion();
  showToast(`Loaded ${state.filteredQuestions.length} questions for: ${topic}`, 'success');
}

// Render Current Question
function renderQuestion() {
  const container = document.getElementById('question-area');
  if (!container) return;

  const isAnswered = state.answersSubmitted.hasOwnProperty(state.currentQuestionIndex);
  if (!isAnswered) {
    matchingSelections = {};
  }

  if (state.filteredQuestions.length === 0) {
    container.innerHTML = `
      <div class="panel-card text-center" style="padding: 3rem;">
        <i class="fas fa-flask" style="font-size: 3rem; color: var(--text-secondary); margin-bottom: 1rem;"></i>
        <h3>No Questions Loaded</h3>
        <p style="color: var(--text-secondary); margin-top: 0.5rem; margin-bottom: 1.5rem;">
          Select a different topic to begin practicing.
        </p>
      </div>
    `;
    updateProgressBar(0);
    return;
  }

  const q = state.filteredQuestions[state.currentQuestionIndex];
  const selectedOptionId = state.answersSubmitted[state.currentQuestionIndex];

  // Update Progress
  updateProgressBar(((state.currentQuestionIndex + 1) / state.filteredQuestions.length) * 100);
  document.getElementById('progress-desc').textContent = `Question ${state.currentQuestionIndex + 1} of ${state.filteredQuestions.length}`;

  // Assemble HTML Structure
  let html = `
    <div class="panel-card question-card">
      <div class="question-meta">
        <span class="tag tag-topic">Ch ${q.chapterNum}: ${OER_CHAPTER_TOPICS[q.chapterNum] || "General"}</span>
        <span class="tag tag-subtopic" style="background: rgba(255, 255, 255, 0.04); color: var(--text-secondary); border: 1px solid rgba(255, 255, 255, 0.05);">${q.topic}</span>
        <span class="tag tag-difficulty ${q.difficulty_level}">${q.difficulty_level}</span>
      </div>
      
      <div class="question-text" id="q-text-box">
        ${formatChemicalText(q.question_text)}
      </div>
  `;

  // Draw 2D chemical structure or reaction schemes
  html += renderQuestionChemicals(q);

  // Render Visual engines (spectroscopy charts, energy diagrams, roadmaps)
  html += renderVisualEngines(q);

  // Draw options grid or matching matching-list/matching-grid
  html += renderChoicesArea(q, selectedOptionId, isAnswered);

  html += `</div>`; // Close panel-card

  // Render Feedback Block if answered
  if (isAnswered) {
    const isCorrect = q.options.find(o => o.option_id === selectedOptionId).is_correct;
    
    html += `
      <div class="feedback-panel">
        <div class="feedback-status ${isCorrect ? 'correct' : 'incorrect'}">
          <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
          <span>${isCorrect ? 'Correct Answer!' : 'Incorrect'}</span>
        </div>
        
        
        <div class="feedback-content" id="feedback-content-area">
          ${getFeedbackContent(q.feedback)}
        </div>

        ${getPerOptionFeedback(q, selectedOptionId)}
        
        <div class="feedback-actions">
          ${state.currentQuestionIndex < state.filteredQuestions.length - 1 
            ? `<button class="btn btn-primary" onclick="nextQuestion()">Next Question <i class="fas fa-arrow-right"></i></button>`
            : `<button class="btn btn-primary" onclick="finishQuiz()">Finish Set <i class="fas fa-flag-checkered"></i></button>`
          }
        </div>
      </div>
    `;
  }

  container.innerHTML = html;

  // The canvases exist the moment innerHTML lands, so these draws run now rather than
  // on a timer. A setTimeout here is clamped to ~1s in a background tab, which made
  // every automated UAT sweep report blank canvases that a student never sees.
  {
    // 1. Draw standard question Smiles canvas
    if (q.question_smiles && document.getElementById('q-smiles-canvas')) {
      drawSMILESCanvas(q.question_smiles, 'q-smiles-canvas', 'light', q.structure_alt || '');
    }

    // 2. Draw standard options Smiles canvases
    q.options.forEach(opt => {
      const canvasId = `opt-canvas-${opt.option_id}`;
      if (opt.smiles && document.getElementById(canvasId)) {
        drawSMILESCanvas(opt.smiles, canvasId, 'light', opt.text || '');
      }
    });

    // 3. Initialize visual engines (Charts, roadmaps, reaction schemes, matching structures)
    initVisualEngines(q);

    // Bind matching events programmatically
    bindMatchingEvents(container, false);

    // 4. Trigger KaTeX parsing
    if (typeof renderMathInElement !== 'undefined') {
      renderMathInElement(container, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true }
        ],
        throwOnError: false
      });
    }
  }
}

// Wrapper for SmilesDrawer execution with standard checks
function drawSMILESCanvas(smiles, canvasId, theme = 'light', alt = '') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  // A <canvas> exposes nothing to assistive technology without an explicit role and
  // name, which made every structural question unanswerable non-visually. Describe
  // what a sighted student sees; never supply the answer - on a nomenclature item the
  // compound name is the leak, on a stereochemistry item the R/S descriptor is.
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', alt || 'Chemical structure diagram');

  const container = canvas.closest('.matching-structure') || canvas.parentElement;

  if (smiles && smiles.startsWith('FISCHER:')) {
    if (container) {
      container.style.background = 'transparent';
      container.style.border = 'none';
      container.style.boxShadow = 'none';
    }
    drawFischerProjection(canvas, smiles.substring(8));
    return;
  }

  if (smiles && smiles.startsWith('HAWORTH:')) {
    if (container) {
      container.style.background = 'transparent';
      container.style.border = 'none';
      container.style.boxShadow = 'none';
    }
    drawHaworthProjection(canvas, smiles.substring(8));
    return;
  }

  // Restore defaults for standard SmilesDrawer
  if (container) {
    container.style.background = 'var(--bg-structure)';
    container.style.border = '1px solid rgba(0, 0, 0, 0.1)';
  }

  if (!smilesDrawer) return;

  // toCanvas resizes the element to the drawer's width and height after drawing. Set them
  // now, so the size hook on Drawer.draw reads the layout the drawing will be displayed at;
  // a bare grid or scheme canvas otherwise reports its pre-draw size and draws twice too big.
  canvas.width = smilesDrawerOptions.width;
  canvas.height = smilesDrawerOptions.height;

  try {
    SmilesDrawer.parse(smiles, function(tree) {
      smilesDrawer.draw(tree, canvasId, theme, false);
    }, function(err) {
      console.warn(`Could not parse SMILES: ${smiles}`, err);
    });
  } catch (e) {
    console.error(`SMILES parser crash for: ${smiles}`, e);
  }
}

// Progress Bar update helper
function updateProgressBar(percentage) {
  const bar = document.getElementById('progress-fill');
  if (bar) {
    bar.style.width = `${percentage}%`;
  }
}

// Parse chemical text formatting helpers (e.g. sub/superscripts if LaTeX is not parsed yet)
function formatChemicalText(text) {
  if (!text) return '';
  // Convert newlines to linebreaks
  let formatted = text.replace(/\\n/g, '<br>');
  // Protect LaTeX math blocks ($$...$$, $...$, \(...\), \[...\]) from HTML sub/sup tag injection
  const mathRegex = /(\$\$.*?\$\$|\$.*?\$|\\\(.*?\\\)|\\\[.*?\\\])/gs;
  const parts = formatted.split(mathRegex);
  return parts.map(part => {
    if (/^(\$\$.*?\$\$|\$.*?\$|\\\(.*?\\\)|\\\[.*?\\\])$/s.test(part)) {
      return part;
    } else {
      let res = part.replace(/\bsp(\d)\b/g, 'sp<sup>$1</sup>');
      res = res.replace(/(?<=[A-Za-z)])\d+/g, '<sub>$&</sub>');
      return res;
    }
  }).join('');
}

// Handle Tab Switching in feedback card
// Render the whole explanation as one continuous flow rather than behind tabs.
// Two feedback shapes coexist: items authored in Phase 2 carry approach/note, and the
// not-yet-reviewed remainder carries the older process/result. Read whichever is present.
// Headings avoid mechanism-specific wording, since much of the bank is nomenclature,
// structure and conformational analysis.
function getFeedbackContent(feedback) {
  if (!feedback) return '';
  const section = (heading, body) => body
    ? `<div style="margin-bottom: 1.1rem;">
         <div style="font-weight: 700; color: var(--text-primary); font-size: 0.8rem; letter-spacing: 0.04em; text-transform: uppercase; margin-bottom: 0.4rem;">${heading}</div>
         ${body}
       </div>`
    : '';

  const steps = (text) => {
    const parts = String(text).split('\n').filter(s => s.trim());
    if (parts.length < 2) return `<p style="line-height: 1.7; color: #cbd5e1;">${text}</p>`;
    return '<ul style="list-style-position: outside; padding-left: 1.1rem; display: flex; flex-direction: column; gap: 0.55rem;">'
      + parts.map(s => `<li style="line-height: 1.7; color: #cbd5e1;">${s}</li>`).join('')
      + '</ul>';
  };

  return section('The principle', feedback.context
        ? `<p style="line-height: 1.7; color: #cbd5e1;">${feedback.context}</p>` : '')
    + section('Working through it', (feedback.approach || feedback.process)
        ? steps(feedback.approach || feedback.process) : '')
    + section(feedback.note ? 'Worth knowing' : 'Takeaway', (feedback.note || feedback.result)
        ? `<p style="line-height: 1.7; color: #cbd5e1;">${feedback.note || feedback.result}</p>` : '');
}

// Per-option rationales, rendered beside the options themselves rather than behind a
// tab: the option a student just chose is where they are actually looking. Returns
// empty for items that have not been authored yet.
function getPerOptionFeedback(q, selectedOptionId) {
  const rationales = q.feedback && q.feedback.options;
  if (!rationales) return '';

  const rows = (q.options || []).map(opt => {
    const text = rationales[opt.option_id];
    if (!text) return '';
    const isKey = opt.is_correct;
    const isChosen = opt.option_id === selectedOptionId;
    const accent = isKey ? 'var(--success-color)' : (isChosen ? 'var(--error-color)' : 'var(--border-color)');
    return `
      <div style="border-left: 3px solid ${accent}; padding: 0.5rem 0 0.5rem 0.85rem; margin-bottom: 0.85rem;">
        <div style="font-weight: 700; color: ${isKey ? 'var(--success-color)' : 'var(--text-secondary)'}; font-size: 0.8rem; margin-bottom: 0.25rem;">
          ${opt.option_id}${isKey ? ' — correct' : ''}${isChosen && !isKey ? ' — your answer' : ''}
        </div>
        <div style="line-height: 1.6; color: #cbd5e1;">${formatChemicalText(text)}</div>
      </div>`;
  }).join('');

  if (!rows) return '';
  return `
    <div style="margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
      <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.85rem;">Why each answer</div>
      ${rows}
    </div>`;
}

// Answer Selection Handler
function handleOptionSelect(optionId) {
  if (state.answersSubmitted.hasOwnProperty(state.currentQuestionIndex)) return;

  state.answersSubmitted[state.currentQuestionIndex] = optionId;
  const q = state.filteredQuestions[state.currentQuestionIndex];
  const selectedOpt = q.options.find(o => o.option_id === optionId);
  
  // Track accuracy stats
  state.stats.attempted++;
  if (selectedOpt.is_correct) {
    state.stats.correct++;
    state.score++;
  }
  
  saveStats();
  renderQuestion();
}

// Navigate to Next Question
function nextQuestion() {
  if (state.currentQuestionIndex < state.filteredQuestions.length - 1) {
    state.currentQuestionIndex++;
    renderQuestion();
  }
}

// Finish Quiz Set
function finishQuiz() {
  const container = document.getElementById('question-area');
  const percent = Math.round((state.score / state.filteredQuestions.length) * 100);
  
  container.innerHTML = `
    <div class="panel-card text-center" style="padding: 3.5rem 2rem; animation: fadeIn 0.4s ease-out;">
      <i class="fas fa-award" style="font-size: 4rem; color: #f59e0b; margin-bottom: 1.5rem;"></i>
      <h2 style="font-size: 2rem; font-weight: 800; margin-bottom: 0.5rem;">Topic Completed!</h2>
      <p style="color: var(--text-secondary); font-size: 1.1rem; margin-bottom: 2rem;">
        You answered <strong>${state.score}</strong> out of <strong>${state.filteredQuestions.length}</strong> questions correctly.
      </p>
      
      <div style="max-width: 300px; margin: 0 auto 2.5rem; background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem;">
        <div style="font-size: 2.5rem; font-weight: 800; color: ${percent >= 70 ? 'var(--success-color)' : 'var(--error-color)'}">${percent}%</div>
        <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.25rem; text-transform: uppercase; font-weight: 600;">Accuracy Rate</div>
      </div>
      
      <div style="display: flex; gap: 1rem; justify-content: center;">
        <button class="btn btn-primary" onclick="restartTopic()"><i class="fas fa-redo"></i> Practice Again</button>
        <button class="btn" onclick="selectTopic('All Topics')"><i class="fas fa-home"></i> Back to Dashboard</button>
      </div>
    </div>
  `;
}

function restartTopic() {
  selectTopic(state.selectedTopic);
}

// Custom JSON Import parsing
// Toast notification helper
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let iconClass = 'fa-info-circle';
  if (type === 'success') iconClass = 'fa-check-circle';
  if (type === 'error') iconClass = 'fa-exclamation-circle';

  toast.innerHTML = `
    <i class="fas ${iconClass}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Auto-remove toast after 4s
  setTimeout(() => {
    toast.style.animation = 'slideInRight 0.3s reverse forwards';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}

// ==========================================================================
// Mock Exam Mode Implementation
// ==========================================================================

// Switch app mode between 'practice' and 'mock'
// Performance is practice-mode only and now lives in the header rather than a third
// grid rail, so hiding it no longer has to change the layout - the workspace is already
// full width in both modes, which is what a roadmap or reaction scheme needs.
function setRightSidebarVisible(visible) {
  const stats = document.getElementById('header-stats');
  if (stats) stats.style.display = visible ? '' : 'none';
}

function setAppMode(mode) {
  state.appMode = mode;

  // Toggle active styling on header tab buttons
  const practiceTab = document.getElementById('tab-btn-practice');
  const mockTab = document.getElementById('tab-btn-mock');
  
  if (practiceTab && mockTab) {
    if (mode === 'practice') {
      practiceTab.classList.add('active');
      mockTab.classList.remove('active');
    } else {
      practiceTab.classList.remove('active');
      mockTab.classList.add('active');
    }
  }

  // Toggle visibility of sidebar and workspace panels
  const practiceSidebar = document.getElementById('sidebar-practice-content');
  const mockSidebar = document.getElementById('sidebar-mock-content');
  const practiceWorkspace = document.getElementById('workspace-practice-content');
  const mockWorkspace = document.getElementById('workspace-mock-content');

  if (practiceSidebar && mockSidebar && practiceWorkspace && mockWorkspace) {
    if (mode === 'practice') {
      practiceSidebar.style.display = 'block';
      mockSidebar.style.display = 'none';
      practiceWorkspace.style.display = 'block';
      mockWorkspace.style.display = 'none';
      setRightSidebarVisible(true);

      // Render normal practice question
      renderQuestion();
    } else {
      practiceSidebar.style.display = 'none';
      mockSidebar.style.display = 'block';
      practiceWorkspace.style.display = 'none';
      mockWorkspace.style.display = 'block';
      setRightSidebarVisible(false);

      // Show mock exam dashboard or active exam
      if (state.mockExam.active) {
        renderMockExamQuestion();
        renderMockExamGrid();
      } else if (state.mockExam.completed) {
        renderMockExamResults();
      } else {
        renderMockExamHome();
      }
    }
  }
}

// Load Mock Exam History from LocalStorage
function loadMockHistory() {
  const saved = localStorage.getItem('ochem_mock_history');
  if (saved) {
    try {
      state.mockExam.history = JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse mock history', e);
    }
  }
}

// Save Mock Exam History to LocalStorage
function saveMockHistory() {
  localStorage.setItem('ochem_mock_history', JSON.stringify(state.mockExam.history));
}

// Render Mock Exam Start Screen (Home)
function renderMockExamHome() {
  const activeArea = document.getElementById('mock-exam-active-area');
  const resultsArea = document.getElementById('mock-exam-results-area');
  if (!activeArea || !resultsArea) return;

  activeArea.style.display = 'block';
  resultsArea.style.display = 'none';

  loadMockHistory();

  let historyHtml = '';
  if (state.mockExam.history && state.mockExam.history.length > 0) {
    historyHtml = `
      <div class="panel-card" style="margin-top: 2rem; padding: 1.5rem;">
        <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem;"><i class="fas fa-history" style="color: var(--accent-color); margin-right: 0.5rem;"></i> Past Attempt History</h3>
        <div style="overflow-x: auto;">
          <table class="history-table">
            <thead>
              <tr>
                <th>Date / Time</th>
                <th>Score</th>
                <th>Accuracy</th>
                <th>Time Spent</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
    `;

    // Show history in reverse chronological order (newest first)
    [...state.mockExam.history].reverse().forEach((attempt, index) => {
      const actualIndex = state.mockExam.history.length - 1 - index;
      const formattedDate = new Date(attempt.date).toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
      const durationMin = Math.floor(attempt.timeSpent / 60);
      const durationSec = attempt.timeSpent % 60;
      const isPassed = attempt.percentage >= 60; // Standard passing score is 60%
      
      historyHtml += `
        <tr>
          <td>${formattedDate}</td>
          <td style="font-weight: 600;">${attempt.score} / 70</td>
          <td style="font-weight: 600; color: ${isPassed ? 'var(--success-color)' : 'var(--error-color)'}">${attempt.percentage}%</td>
          <td>${durationMin}m ${durationSec}s</td>
          <td>
            <span class="history-badge ${isPassed ? 'pass' : 'fail'}">
              ${isPassed ? 'PASSED' : 'RETRY'}
            </span>
          </td>
          <td>
            <button class="btn" style="padding: 0.3rem 0.6rem; font-size: 0.8rem;" onclick="viewPastMockAttempt(${actualIndex})">
              <i class="fas fa-eye"></i> Review
            </button>
          </td>
        </tr>
      `;
    });

    historyHtml += `
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else {
    historyHtml = `
      <div class="panel-card text-center" style="margin-top: 2rem; padding: 2rem; color: var(--text-secondary);">
        <i class="fas fa-history" style="font-size: 2rem; margin-bottom: 0.75rem; opacity: 0.5;"></i>
        <p>No past mock exam attempts recorded yet. Take your first attempt to begin tracking progress!</p>
      </div>
    `;
  }

  activeArea.innerHTML = `
    <div class="panel-card text-center" style="padding: 3rem 2rem; animation: fadeIn 0.4s ease-out; background: linear-gradient(145deg, var(--bg-card) 0%, rgba(99, 102, 241, 0.03) 100%); border: 1px solid rgba(255,255,255,0.04);">
      <i class="fas fa-stopwatch" style="font-size: 4.5rem; background: var(--accent-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 1.5rem; filter: drop-shadow(0 0 15px rgba(99, 102, 241, 0.2));"></i>
      <h2 style="font-size: 2.25rem; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 0.75rem;">ACS-Style 70-Question Mock Exam</h2>
      <p style="color: var(--text-secondary); max-width: 600px; margin: 0 auto 2rem; line-height: 1.6; font-size: 1.05rem;">
        Test your readiness for the American Chemical Society (ACS) standardized organic chemistry examination. This comprehensive practice exam contains exactly <strong>70 multiple-choice questions</strong> distributed balanced across all chapters, including specialized questions on structural elucidation spectroscopy with <strong>actual spectra from AIST-SDBS & ChemicalBook</strong>.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.25rem; max-width: 750px; margin: 0 auto 2.5rem; text-align: left;">
        <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.25rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
            <i class="fas fa-list-ol" style="color: var(--accent-color); font-size: 1.2rem;"></i>
            <span style="font-weight: 700; font-size: 1rem;">70 Questions</span>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">Comprehensive coverage spanning Nomenclature, Stereochemistry, Mechanisms, Reactions, and Spectroscopy.</p>
        </div>
        <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.25rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
            <i class="fas fa-hourglass-half" style="color: var(--accent-color); font-size: 1.2rem;"></i>
            <span style="font-weight: 700; font-size: 1rem;">110 Minutes</span>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">Strict countdown timer simulating official testing conditions. Approximately 94 seconds per question.</p>
        </div>
        <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.25rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
            <i class="fas fa-eye-slash" style="color: var(--accent-color); font-size: 1.2rem;"></i>
            <span style="font-weight: 700; font-size: 1rem;">Blind Feedback</span>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">No immediate grading or answer reviews. Complete solutions and structural reviews are displayed post-submission.</p>
        </div>
      </div>
      
      <button class="btn btn-primary" onclick="startMockExam()" style="padding: 0.8rem 2.5rem; font-size: 1.1rem; font-weight: 700; margin: 0 auto; box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4); border-radius: 12px;">
        <i class="fas fa-play"></i> Begin New Mock Exam
      </button>
    </div>

    ${historyHtml}
  `;
}

// Start a new 70-question Mock Exam
function startMockExam() {
  // 1. Reset Mock Exam State
  state.mockExam = {
    active: true,
    questions: [],
    currentIndex: 0,
    answers: {},
    flags: {},
    timeRemaining: 110 * 60, // 110 minutes
    timerId: null,
    completed: false,
    startTime: Date.now(),
    endTime: null,
    history: state.mockExam.history || []
  };

  // 2. Select 70 Balanced Questions across all chapters (excluding matching lists/grids for Mock Exam)
  const questionsByChapter = {};
  state.questions.forEach(q => {
    // Exclude matching-list and matching-grid from Mock Exam
    if (q.interaction_type === 'matching-list' || q.interaction_type === 'matching-grid') {
      return;
    }
    const ch = q.chapterNum || 1;
    if (!questionsByChapter[ch]) {
      questionsByChapter[ch] = [];
    }
    questionsByChapter[ch].push(q);
  });

  const activeChapters = Object.keys(questionsByChapter).map(Number).sort((a,b) => a-b);
  
  // Fisher-Yates Shuffle helper
  const shuffle = (array) => {
    let m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  };

  // Shuffle pool for each chapter
  activeChapters.forEach(ch => {
    shuffle(questionsByChapter[ch]);
  });

  const selectedQuestions = [];
  let addedAny = true;

  // Round-robin selection until we reach 70
  while (selectedQuestions.length < 70 && addedAny) {
    addedAny = false;
    for (let i = 0; i < activeChapters.length; i++) {
      const ch = activeChapters[i];
      if (questionsByChapter[ch] && questionsByChapter[ch].length > 0) {
        selectedQuestions.push(questionsByChapter[ch].pop());
        addedAny = true;
        if (selectedQuestions.length === 70) break;
      }
    }
  }

  // Fallback to top off to exactly 70 questions if needed
  if (selectedQuestions.length < 70) {
    const allUniqueIds = new Set(selectedQuestions.map(q => q.question_id));
    const generalPool = deduplicatedPool.filter(q => {
      return !allUniqueIds.has(q.question_id) &&
             q.interaction_type !== 'matching-list' &&
             q.interaction_type !== 'matching-grid';
    });
    shuffle(generalPool);
    while (selectedQuestions.length < 70 && generalPool.length > 0) {
      selectedQuestions.push(generalPool.pop());
    }
  }

  // Shuffle final 70 questions and then shuffle their options
  const finalQuestions = shuffle(selectedQuestions).slice(0, 70);
  state.mockExam.questions = shuffleQuestionsOptions(finalQuestions);

  // 3. Setup Timer
  document.getElementById('mock-timer-display').textContent = "110:00";
  document.getElementById('mock-timer-display').classList.remove('warning');
  state.mockExam.timerId = setInterval(updateMockTimer, 1000);

  // 4. Render Active Exam
  renderMockExamQuestion();
  renderMockExamGrid();

  // Show Sidebar and workspace tabs
  document.getElementById('sidebar-practice-content').style.display = 'none';
  document.getElementById('sidebar-mock-content').style.display = 'block';
  document.getElementById('workspace-practice-content').style.display = 'none';
  document.getElementById('workspace-mock-content').style.display = 'block';
  setRightSidebarVisible(false);

  // Set tab active
  document.getElementById('tab-btn-practice').classList.remove('active');
  document.getElementById('tab-btn-mock').classList.add('active');

  showToast("Mock Exam started! Good luck!", "success");
}

// Countdown timer function
function updateMockTimer() {
  if (!state.mockExam.active) {
    clearInterval(state.mockExam.timerId);
    return;
  }

  state.mockExam.timeRemaining--;

  const display = document.getElementById('mock-timer-display');
  if (!display) return;

  if (state.mockExam.timeRemaining <= 0) {
    clearInterval(state.mockExam.timerId);
    display.textContent = "00:00";
    showToast("Time's up! Submitting exam...", "error");
    submitMockExam(true);
    return;
  }

  // Format MM:SS
  const minutes = Math.floor(state.mockExam.timeRemaining / 60);
  const seconds = state.mockExam.timeRemaining % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  display.textContent = formattedTime;

  // Visual warning if less than 10 minutes (600 seconds)
  if (state.mockExam.timeRemaining < 600) {
    display.classList.add('warning');
  }
}

// Render active mock exam question
function renderMockExamQuestion() {
  const container = document.getElementById('mock-exam-active-area');
  if (!container) return;

  const idx = state.mockExam.currentIndex;
  const q = state.mockExam.questions[idx];
  const selectedOptionId = state.mockExam.answers[idx];
  const isFlagged = state.mockExam.flags[idx] === true;

  let html = `
    <div class="panel-card question-card" style="animation: fadeIn 0.25s ease-out;">
      <div class="question-meta">
        <span class="tag tag-topic" style="background: rgba(99, 102, 241, 0.1); color: var(--accent-color); font-weight: 700;">Question ${idx + 1} of 70</span>
        <span class="tag tag-difficulty ${q.difficulty_level}">${q.difficulty_level}</span>
        ${isFlagged ? '<span class="tag" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; font-weight: 700; display: flex; align-items: center; gap: 0.25rem;"><i class="fas fa-flag"></i> Flagged</span>' : ''}
      </div>
      
      <div class="question-text" id="mock-q-text-box">
        ${formatChemicalText(q.question_text)}
      </div>
  `;

  // Draw 2D chemical structure or reaction schemes
  html += renderQuestionChemicals(q, 'mock-');

  // Render Visual engines (spectroscopy charts, energy diagrams, roadmaps)
  html += renderVisualEngines(q, 'mock-');

  // Draw options grid or matching matching-list/matching-grid
  html += renderChoicesArea(q, selectedOptionId, false, 'mock-');

  html += `
      <!-- Mock Navigation actions -->
      <div class="mock-nav-actions" style="margin-top: 1.5rem;">
        <button class="btn" onclick="prevMockQuestion()" ${idx === 0 ? 'disabled' : ''}>
          <i class="fas fa-chevron-left"></i> Previous
        </button>
        
        <button class="btn" style="border-color: #f59e0b; color: #f59e0b;" onclick="toggleMockFlag()">
          <i class="fas fa-flag"></i> ${isFlagged ? 'Unflag Question' : 'Flag Question'}
        </button>
        
        <button class="btn btn-primary" onclick="nextMockQuestion()">
          ${idx === 69 ? 'Go to First' : 'Next <i class="fas fa-chevron-right"></i>'}
        </button>
      </div>
    </div>
  `;

  container.innerHTML = html;

  // Draw structures on canvas
  {
    if (q.question_smiles && document.getElementById('mock-q-smiles-canvas')) {
      drawSMILESCanvas(q.question_smiles, 'mock-q-smiles-canvas', 'light', q.structure_alt || '');
    }

    q.options.forEach(opt => {
      const canvasId = `mock-opt-canvas-${opt.option_id}`;
      if (opt.smiles && document.getElementById(canvasId)) {
        drawSMILESCanvas(opt.smiles, canvasId, 'light', opt.text || '');
      }
    });

    initVisualEngines(q, 'mock-');

    // Bind matching events programmatically
    bindMatchingEvents(container, true);

    if (typeof renderMathInElement !== 'undefined') {
      renderMathInElement(container, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true }
        ],
        throwOnError: false
      });
    }
  }
}

// Option selection handler in mock exam
function selectMockOption(optionId) {
  const idx = state.mockExam.currentIndex;
  state.mockExam.answers[idx] = optionId;
  
  // Re-render to show selection and update status map
  renderMockExamQuestion();
  renderMockExamGrid();
}

// Toggle flagging of current question
function toggleMockFlag() {
  const idx = state.mockExam.currentIndex;
  state.mockExam.flags[idx] = !state.mockExam.flags[idx];
  
  renderMockExamQuestion();
  renderMockExamGrid();
}

// Next question
function nextMockQuestion() {
  if (state.mockExam.currentIndex < 69) {
    state.mockExam.currentIndex++;
  } else {
    state.mockExam.currentIndex = 0; // Wrap around to first
  }
  renderMockExamQuestion();
  renderMockExamGrid();
}

// Previous question
function prevMockQuestion() {
  if (state.mockExam.currentIndex > 0) {
    state.mockExam.currentIndex--;
    renderMockExamQuestion();
    renderMockExamGrid();
  }
}

// Select specific question from map grid
function jumpToMockQuestion(idx) {
  state.mockExam.currentIndex = idx;
  renderMockExamQuestion();
  renderMockExamGrid();
}

// Render the 70-button question navigator grid in the sidebar
function renderMockExamGrid() {
  const grid = document.getElementById('mock-question-grid');
  if (!grid) return;

  grid.innerHTML = '';
  
  for (let i = 0; i < 70; i++) {
    const btn = document.createElement('button');
    btn.className = 'mock-grid-btn';
    btn.textContent = i + 1;
    
    // Determine status classes
    const isCurrent = i === state.mockExam.currentIndex;
    const isAnswered = state.mockExam.answers.hasOwnProperty(i);
    const isFlagged = state.mockExam.flags[i] === true;
    
    if (isCurrent) btn.classList.add('current');
    if (isAnswered) btn.classList.add('answered');
    if (isFlagged) btn.classList.add('flagged');
    if (!isCurrent && !isAnswered && !isFlagged) btn.classList.add('unvisited');
    
    btn.addEventListener('click', () => jumpToMockQuestion(i));
    grid.appendChild(btn);
  }
}

// Quit Mock Exam (with confirmation)
function quitMockExam() {
  if (confirm("Are you sure you want to quit the Mock Exam? Your current progress will be lost.")) {
    clearInterval(state.mockExam.timerId);
    state.mockExam.active = false;
    renderMockExamHome();
  }
}

// Submit Mock Exam
function submitMockExam(autoSubmit = false) {
  if (!autoSubmit && !confirm("Are you sure you want to submit your Mock Exam? You have answered " + Object.keys(state.mockExam.answers).length + " out of 70 questions.")) {
    return;
  }

  // Stop Timer
  clearInterval(state.mockExam.timerId);
  state.mockExam.active = false;
  state.mockExam.completed = true;
  state.mockExam.endTime = Date.now();

  // Calculate scores
  let correctCount = 0;
  state.mockExam.questions.forEach((q, idx) => {
    const selected = state.mockExam.answers[idx];
    if (selected) {
      const correctOpt = q.options.find(o => o.is_correct);
      if (correctOpt && correctOpt.option_id === selected) {
        correctCount++;
      }
    }
  });

  const percentage = Math.round((correctCount / 70) * 100);
  const timeSpent = Math.round((state.mockExam.endTime - state.mockExam.startTime) / 1000);

  // Compile topic stats for breakdown
  const topicStats = {};
  state.mockExam.questions.forEach((q, idx) => {
    const topic = OER_CHAPTER_TOPICS[q.chapterNum] || "General Organic Chemistry";
    if (!topicStats[topic]) {
      topicStats[topic] = { correct: 0, total: 0 };
    }
    topicStats[topic].total++;
    
    const selected = state.mockExam.answers[idx];
    if (selected) {
      const correctOpt = q.options.find(o => o.is_correct);
      if (correctOpt && correctOpt.option_id === selected) {
        topicStats[topic].correct++;
      }
    }
  });

  // Create Attempt Object
  const attempt = {
    date: Date.now(),
    score: correctCount,
    percentage: percentage,
    timeSpent: timeSpent,
    topicStats: topicStats,
    answers: {...state.mockExam.answers},
    matchingAnswers: {...(state.mockExam.matchingAnswers || {})},
    questions: state.mockExam.questions 
  };

  // Add to History
  if (!state.mockExam.history) state.mockExam.history = [];
  state.mockExam.history.push(attempt);
  saveMockHistory();

  // Set active review attempt
  state.mockExam.activeReviewAttempt = attempt;

  // Show results view
  renderMockExamResults();
}

// Render detailed Mock Exam Results Dashboard
function renderMockExamResults() {
  const activeArea = document.getElementById('mock-exam-active-area');
  const resultsArea = document.getElementById('mock-exam-results-area');
  if (!activeArea || !resultsArea) return;

  activeArea.style.display = 'none';
  resultsArea.style.display = 'block';

  // Get active review attempt details
  const attempt = state.mockExam.activeReviewAttempt;
  if (!attempt) return;

  const durationMin = Math.floor(attempt.timeSpent / 60);
  const durationSec = attempt.timeSpent % 60;
  const isPassed = attempt.percentage >= 60;

  // Metadata summary
  let sdbsQuestionsCount = attempt.questions.filter(q => q.topic === "Spectroscopy (SDBS/ChemicalBook)").length;

  // Topic breakdown HTML
  let topicBreakdownHtml = '';
  Object.keys(attempt.topicStats).forEach(topic => {
    const stats = attempt.topicStats[topic];
    const pct = Math.round((stats.correct / stats.total) * 100);
    let displayChapter = 1;
    for (const [chNum, name] of Object.entries(OER_CHAPTER_TOPICS)) {
      if (name === topic) {
        displayChapter = chNum;
        break;
      }
    }
    topicBreakdownHtml += `
      <div class="topic-breakdown-item">
        <div class="topic-breakdown-info">
          <span style="color: var(--text-primary); font-weight: 500;">Ch ${displayChapter}: ${topic}</span>
          <span style="color: var(--text-secondary);">${stats.correct} / ${stats.total} (${pct}%)</span>
        </div>
        <div class="topic-breakdown-track">
          <div class="topic-breakdown-fill" style="width: ${pct}%; background: ${pct >= 60 ? 'var(--success-color)' : pct >= 40 ? '#f59e0b' : 'var(--error-color)'};"></div>
        </div>
      </div>
    `;
  });

  // Question navigation list in results
  let qListHtml = '';
  attempt.questions.forEach((q, idx) => {
    const selected = attempt.answers[idx];
    const correctOpt = q.options.find(o => o.is_correct);
    let statusClass = 'unanswered';
    let icon = '<i class="fas fa-minus"></i>';

    if (selected) {
      if (correctOpt && correctOpt.option_id === selected) {
        statusClass = 'correct';
        icon = '<i class="fas fa-check"></i>';
      } else {
        statusClass = 'incorrect';
        icon = '<i class="fas fa-times"></i>';
      }
    }

    const mainChTopic = OER_CHAPTER_TOPICS[q.chapterNum] || "General";
    qListHtml += `
      <button class="results-q-btn ${statusClass}" onclick="reviewMockQuestion(${idx})">
        <div style="font-size: 0.7rem; text-transform: uppercase; color: var(--text-secondary);">Q${idx + 1}</div>
        <div style="font-size: 1.1rem; font-weight: 800; margin: 0.15rem 0;">${icon}</div>
        <div style="font-size: 0.65rem; color: var(--text-secondary); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">Ch ${q.chapterNum}: ${mainChTopic}</div>
      </button>
    `;
  });

  resultsArea.innerHTML = `
    <div class="panel-card" style="padding: 2.5rem; animation: fadeIn 0.4s ease-out;">
      
      <!-- Award title banner -->
      <div class="text-center" style="margin-bottom: 2rem;">
        <i class="fas ${isPassed ? 'fa-award' : 'fa-redo-alt'}" style="font-size: 4rem; color: ${isPassed ? '#f59e0b' : 'var(--text-secondary)'}; margin-bottom: 1rem;"></i>
        <h2 style="font-size: 2rem; font-weight: 800; letter-spacing: -0.02em;">${isPassed ? 'Exam Passed!' : 'Exam Completed'}</h2>
        <p style="color: var(--text-secondary); margin-top: 0.25rem;">ACS Standard Organic Chemistry Practice Examination</p>
      </div>

      <!-- Core score metrics grid -->
      <div class="results-header-summary">
        <!-- Circular Dial -->
        <div style="background: rgba(255,255,255,0.01); border: 1px solid var(--border-color); border-radius: 16px; padding: 2rem; display: flex; align-items: center; justify-content: center;">
          <div class="metric-circle ${isPassed ? 'pass' : 'fail'}" style="--percentage: ${attempt.percentage}">
            <div class="metric-circle-val">${attempt.percentage}%</div>
            <div class="metric-circle-label">${attempt.score} / 70 Correct</div>
          </div>
        </div>

        <!-- Metric Details -->
        <div style="background: rgba(255,255,255,0.01); border: 1px solid var(--border-color); border-radius: 16px; padding: 1.5rem; display: flex; flex-direction: column; justify-content: center; gap: 1rem;">
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">
            <span style="color: var(--text-secondary);"><i class="fas fa-hourglass-half" style="margin-right: 0.5rem;"></i> Time Elapsed:</span>
            <span style="font-weight: 600; color: var(--text-primary);">${durationMin}m ${durationSec}s</span>
          </div>
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">
            <span style="color: var(--text-secondary);"><i class="fas fa-check-circle" style="margin-right: 0.5rem; color: var(--success-color);"></i> Correct Answers:</span>
            <span style="font-weight: 600; color: var(--success-color);">${attempt.score}</span>
          </div>
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">
            <span style="color: var(--text-secondary);"><i class="fas fa-times-circle" style="margin-right: 0.5rem; color: var(--error-color);"></i> Incorrect Answers:</span>
            <span style="font-weight: 600; color: var(--error-color);">${70 - attempt.score}</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding-bottom: 0.5rem;">
            <span style="color: var(--text-secondary);"><i class="fas fa-vial" style="margin-right: 0.5rem; color: #a855f7;"></i> Spectroscopy (SDBS):</span>
            <span style="font-weight: 600; color: #a855f7;">${sdbsQuestionsCount} Questions Taken</span>
          </div>
        </div>
      </div>

      <!-- Topic Performance breakdown bar graphs -->
      <div style="margin-bottom: 2.5rem;">
        <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;"><i class="fas fa-chart-bar" style="color: var(--accent-color); margin-right: 0.5rem;"></i> Performance by Topic</h3>
        <div class="topic-breakdown-list">
          ${topicBreakdownHtml}
        </div>
      </div>

      <!-- Action buttons -->
      <div style="display: flex; gap: 1rem; justify-content: center; margin-bottom: 2.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border-color);">
        <button class="btn btn-primary" onclick="startMockExam()" style="padding: 0.7rem 1.8rem; border-radius: 10px; font-weight: 600;"><i class="fas fa-redo"></i> Retake Mock Exam</button>
        <button class="btn" onclick="renderMockExamHome()" style="padding: 0.7rem 1.8rem; border-radius: 10px;"><i class="fas fa-home"></i> Back to Mock Dashboard</button>
      </div>

      <!-- Individual Question Review Panel -->
      <div>
        <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;"><i class="fas fa-magnifying-glass" style="color: var(--accent-color); margin-right: 0.5rem;"></i> Detailed Question Review</h3>
        <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 1.5rem;">Click on any question below to view the detailed explanation, starting material structure, and correct mechanisms.</p>
        <div class="results-question-list">
          ${qListHtml}
        </div>
      </div>

      <!-- Placeholder container for question review details when clicked -->
      <div id="mock-review-question-detail" style="margin-top: 2rem; display: none;"></div>

    </div>
  `;
}

// Show a specific question in review mode
function reviewMockQuestion(idx) {
  const detailContainer = document.getElementById('mock-review-question-detail');
  if (!detailContainer) return;

  const attempt = state.mockExam.activeReviewAttempt;
  if (!attempt) return;

  const q = attempt.questions[idx];
  const selectedOptionId = attempt.answers[idx];
  const correctOpt = q.options.find(o => o.is_correct);
  const isCorrect = selectedOptionId === correctOpt.option_id;

  // Temp state updates to render the question details
  state.filteredQuestions = attempt.questions;
  state.currentQuestionIndex = idx;
  state.answersSubmitted = {[idx]: selectedOptionId};

  let html = `
    <div class="panel-card" style="border-color: ${isCorrect ? 'var(--success-color)' : selectedOptionId ? 'var(--error-color)' : 'var(--text-secondary)'}; background: rgba(255,255,255,0.01); padding: 1.5rem; margin-top: 1.5rem; animation: slideInUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
        <span style="font-weight: 700; color: var(--text-primary); font-size: 1.1rem;">Reviewing Question ${idx + 1}</span>
        <span class="tag" style="background: ${isCorrect ? 'var(--success-bg)' : selectedOptionId ? 'var(--error-bg)' : 'rgba(255,255,255,0.05)'}; color: ${isCorrect ? 'var(--success-color)' : selectedOptionId ? 'var(--error-color)' : 'var(--text-secondary)'}; font-weight: 700;">
          ${isCorrect ? 'CORRECT' : selectedOptionId ? 'INCORRECT' : 'UNANSWERED'}
        </span>
      </div>

      <div class="question-meta" style="margin-bottom: 1rem;">
        <span class="tag tag-topic">Ch ${q.chapterNum}: ${OER_CHAPTER_TOPICS[q.chapterNum] || "General"}</span>
        <span class="tag tag-subtopic" style="background: rgba(255, 255, 255, 0.04); color: var(--text-secondary); border: 1px solid rgba(255, 255, 255, 0.05);">${q.topic}</span>
        <span class="tag tag-difficulty ${q.difficulty_level}">${q.difficulty_level}</span>
      </div>

      <div class="question-text" style="font-size: 1.05rem; margin-bottom: 1.25rem; line-height: 1.6;">
        ${formatChemicalText(q.question_text)}
      </div>
  `;

  // Draw 2D chemical structure or reaction schemes
  html += renderQuestionChemicals(q, 'review-');

  // Render Visual engines (spectroscopy charts, energy diagrams, roadmaps)
  html += renderVisualEngines(q, 'review-');

  // Draw options grid or matching matching-list/matching-grid
  html += renderChoicesArea(q, selectedOptionId, true, 'review-');

  html += `
      <div class="feedback-panel" style="margin-top: 1.5rem; background: var(--bg-card);">
        
        <div class="feedback-content" id="review-feedback-content-area" style="padding: 1.25rem 0.5rem 0;">
          ${getFeedbackContent(q.feedback)}
        </div>

        ${getPerOptionFeedback(q, selectedOptionId)}
      </div>
      
      <div style="display: flex; justify-content: flex-end; margin-top: 1rem;">
        <button class="btn" onclick="document.getElementById('mock-review-question-detail').style.display='none';"><i class="fas fa-times"></i> Close Review</button>
      </div>
    </div>
  `;

  detailContainer.innerHTML = html;
  detailContainer.style.display = 'block';

  // Draw Smiley canvases
  {
    if (q.question_smiles && document.getElementById('review-q-smiles-canvas')) {
      drawSMILESCanvas(q.question_smiles, 'review-q-smiles-canvas', 'light', q.structure_alt || '');
    }

    q.options.forEach(opt => {
      const canvasId = `review-opt-canvas-${opt.option_id}`;
      if (opt.smiles && document.getElementById(canvasId)) {
        drawSMILESCanvas(opt.smiles, canvasId, 'light', opt.text || '');
      }
    });

    initVisualEngines(q, 'review-');

    if (typeof renderMathInElement !== 'undefined') {
      renderMathInElement(detailContainer, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true }
        ],
        throwOnError: false
      });
    }

    detailContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Tab switcher inside the active question review block
// Function to view a past mock exam attempt directly from dashboard
function viewPastMockAttempt(historyIndex) {
  loadMockHistory();
  const attempt = state.mockExam.history[historyIndex];
  if (!attempt) return;

  // Set active review attempt
  state.mockExam.activeReviewAttempt = attempt;
  
  renderMockExamResults();
}

// CUSTOM RENDER HELPERS AND DYNAMIC ENGINES FOR NEW QUESTION TYPES

function selectMatchOption(index, val) {
  matchingSelections[index] = val;
}

function selectMockMatchOption(itemIndex, val) {
  const idx = state.mockExam.currentIndex;
  if (!state.mockExam.matchingAnswers) state.mockExam.matchingAnswers = {};
  if (!state.mockExam.matchingAnswers[idx]) state.mockExam.matchingAnswers[idx] = {};
  state.mockExam.matchingAnswers[idx][itemIndex] = val;
  
  // Update answered status
  const q = state.mockExam.questions[idx];
  const allSelected = q.match_items.every((item, i) => {
    const ans = state.mockExam.matchingAnswers[idx];
    return ans && ans[i];
  });
  
  if (allSelected) {
    const isCorrect = q.match_items.every((item, i) => {
      const chosen = state.mockExam.matchingAnswers[idx][i];
      return chosen === (item.correctAnswer || item.correct_answer);
    });
    state.mockExam.answers[idx] = isCorrect ? 'A' : 'B';
  } else {
    delete state.mockExam.answers[idx];
  }
  
  renderMockExamGrid();
}

function submitMatchingAnswer() {
  const q = state.filteredQuestions[state.currentQuestionIndex];
  const allSelected = q.match_items.every((item, i) => matchingSelections[i]);
  if (!allSelected) {
    showToast('Please select matches for all items', 'error');
    return;
  }
  
  const isCorrect = q.match_items.every((item, i) => {
    const chosen = matchingSelections[i];
    return chosen === (item.correctAnswer || item.correct_answer);
  });
  
  handleOptionSelect(isCorrect ? 'A' : 'B');
}

function renderQuestionChemicals(q, prefix = '') {
  if (q.image) {
    return `
      <div class="question-image-container" style="text-align: center; margin: 1.5rem 0; padding: 1rem; background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-color); border-radius: 12px; display: flex; justify-content: center; align-items: center;">
        <img src="${q.image}" alt="Exam Figure / Spectrum" style="max-width: 100%; max-height: 280px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.1); background: #fdfdfd; padding: 6px; box-shadow: var(--shadow-md);">
      </div>
    `;
  }
  if (q.reaction_scheme) {
    let rHtml = '';
    q.reaction_scheme.reactants.forEach((sm, index) => {
      rHtml += `<div class="scheme-reactant-tile">
        <canvas id="${prefix}scheme-reactant-${index}" width="160" height="110"></canvas>
      </div>`;
      if (index < q.reaction_scheme.reactants.length - 1) {
        rHtml += `<div class="scheme-plus">+</div>`;
      }
    });

    let pHtml = '';
    const isMockActive = (prefix === 'mock-');
    const isAnswered = state.answersSubmitted.hasOwnProperty(state.currentQuestionIndex);
    const showProduct = (!isMockActive && (isAnswered || prefix === 'review-')) || (q.reaction_scheme.products && q.reaction_scheme.products[0] !== '?');

    if (!showProduct) {
      pHtml = `<div class="scheme-product-placeholder">?</div>`;
    } else {
      q.reaction_scheme.products.forEach((sm, index) => {
        pHtml += `<div class="scheme-product-tile">
          <canvas id="${prefix}scheme-product-${index}" width="160" height="110"></canvas>
        </div>`;
        if (index < q.reaction_scheme.products.length - 1) {
          pHtml += `<div class="scheme-plus">+</div>`;
        }
      });
    }

    return `
      <div class="reaction-scheme-container">
        <div class="reactants-side">${rHtml}</div>
        <div class="reaction-arrow-container">
          <div class="reagents-text">${q.reaction_scheme.reagents ? formatChemicalText(q.reaction_scheme.reagents) : ''}</div>
          <div class="arrow-line">➔</div>
          <div class="conditions-text">${q.reaction_scheme.conditions ? formatChemicalText(q.reaction_scheme.conditions) : ''}</div>
        </div>
        <div class="products-side">${pHtml}</div>
      </div>
    `;
  } else if (q.question_smiles) {
    return `
      <div class="chemical-container">
        <canvas id="${prefix}q-smiles-canvas" width="360" height="150"></canvas>
        <div class="smiles-string-display" title="SMILES Notation">${q.question_smiles}</div>
      </div>
    `;
  }
  return '';
}

function renderVisualEngines(q, prefix = '') {
  let html = '';
  if (q.dynamic_spectroscopy) {
    html += `
      <div class="spectroscopy-container">
        <canvas id="${prefix}spec-chart" style="width: 100%; height: 260px; max-height: 260px;"></canvas>
      </div>
    `;
  }
  if (q.energy_diagram) {
    html += `
      <div class="energy-diagram-container">
        <canvas id="${prefix}energy-chart" style="width: 100%; height: 240px; max-height: 240px;"></canvas>
      </div>
    `;
  }
  if (q.synthetic_roadmap) {
    html += `
      <div class="roadmap-container">
        <div class="roadmap-grid" id="${prefix}roadmap-grid"></div>
      </div>
    `;
  }
  return html;
}

function initVisualEngines(q, prefix = '') {
  // 1. Draw scheme reactants and products
  if (q.reaction_scheme) {
    const reactantAlts = q.reaction_scheme.reactant_alts || [];
    q.reaction_scheme.reactants.forEach((sm, index) => {
      // A generic "Reactant 1 structure" tells a screen reader nothing. Authored chapters
      // supply reactant_alts; unauthored ones fall back until their own pass reaches them.
      drawSMILESCanvas(sm, `${prefix}scheme-reactant-${index}`, 'light',
        reactantAlts[index] || `Reactant ${index + 1} structure`);
    });
    
    const isMockActive = (prefix === 'mock-');
    const isAnswered = state.answersSubmitted.hasOwnProperty(state.currentQuestionIndex);
    const showProduct = (!isMockActive && (isAnswered || prefix === 'review-')) || (q.reaction_scheme.products && q.reaction_scheme.products[0] !== '?');
    
    if (showProduct) {
      const productAlts = q.reaction_scheme.product_alts || [];
      q.reaction_scheme.products.forEach((sm, index) => {
        drawSMILESCanvas(sm, `${prefix}scheme-product-${index}`, 'light',
          productAlts[index] || `Product ${index + 1} structure`);
      });
    }
  }

  // 2. Draw match item structures
  if (q.interaction_type === 'matching-list' || q.interaction_type === 'matching-grid') {
    q.match_items.forEach((item, index) => {
      // Prefer the item's own description; "Structure N to match" names nothing a screen
      // reader could answer from. Items without one still get the positional fallback.
      drawSMILESCanvas(item.smiles, `${prefix}match-canvas-${index}`, 'light',
        item.alt || `Structure ${index + 1} to match`);
    });
  }

  // 3. Draw dynamic charts using Chart.js
  if (q.dynamic_spectroscopy) {
    const canvas = document.getElementById(`${prefix}spec-chart`);
    if (canvas) {
      drawSpectroscopyChart(canvas.getContext('2d'), q.dynamic_spectroscopy);
    }
  }
  
  if (q.energy_diagram) {
    const canvas = document.getElementById(`${prefix}energy-chart`);
    if (canvas) {
      drawEnergyChart(canvas.getContext('2d'), q.energy_diagram);
    }
  }
  
  if (q.synthetic_roadmap) {
    drawSyntheticRoadmap(`${prefix}roadmap-grid`, q.synthetic_roadmap);
  }
}

// Build the accessible name for a simulated spectrum from its own data. This is the
// same information a sighted student reads off the plot - peak positions and
// intensities - and stops short of naming the compound, which is the answer.
function describeSpectrum(spec) {
  if (spec.spec_type === 'ir') {
    const bands = (spec.dips || []).map(d => `${d.xc} cm-1`).join(', ');
    return `Simulated infrared spectrum with absorption bands at ${bands}.`;
  }
  if (spec.spec_type === 'ms') {
    // data_points carry labels like "molecular ion [M+]" and "base peak", but the MS
    // chart draws bare bars - no annotations, no tooltip, legend off. A sighted
    // student sees only positions and heights and must work out which peak is M+.
    // Including those labels here would hand over the interpretation, so they are
    // deliberately dropped.
    const peaks = (spec.data_points || [])
      .map(p => `m/z ${p.x} at ${p.y}% relative abundance`).join('; ');
    return `Simulated mass spectrum with peaks at ${peaks}.`;
  }
  if (spec.spec_type === 'nmr') {
    // Unlike MS, the NMR label IS rendered: it selects the splitting pattern drawn on
    // the curve (singlet/doublet/triplet/quartet) and shows in the tooltip. Naming the
    // multiplicity is therefore describing what is on screen, not supplying the answer.
    const sig = (spec.data_points || [])
      .map(p => `${p.x} ppm integrating to ${p.y}H${p.label ? ', ' + p.label : ''}`).join('; ');
    return `Simulated proton NMR spectrum with signals at ${sig}.`;
  }
  return 'Simulated spectrum.';
}

function drawSpectroscopyChart(ctx, spec) {
  const specType = spec.spec_type;
  const dataPoints = spec.data_points;

  if (ctx && ctx.canvas) {
    ctx.canvas.setAttribute('role', 'img');
    ctx.canvas.setAttribute('aria-label', describeSpectrum(spec));
  }

  if (specType === 'ms') {
    const maxMass = Math.max(...dataPoints.map(p => p.x)) + 10;
    const allLabels = [];
    for (let i = 0; i <= maxMass; i++) allLabels.push(i);

    const dataMap = {};
    dataPoints.forEach(p => { dataMap[p.x] = p.y; });
    const fullData = allLabels.map(x => dataMap[x] || 0);

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: allLabels,
        datasets: [{
          data: fullData,
          backgroundColor: '#38bdf8',
          borderColor: '#0284c7',
          borderWidth: 1,
          barThickness: 2,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            title: { display: true, text: 'm/z (Mass-to-Charge Ratio)', color: '#94a3b8' },
            ticks: { color: '#64748b', callback: function(v, i) { return i % 10 === 0 ? i : ''; } },
            grid: { color: 'rgba(255,255,255,0.03)' }
          },
          y: {
            beginAtZero: true,
            max: 100,
            title: { display: true, text: 'Relative Abundance (%)', color: '#94a3b8' },
            ticks: { color: '#64748b' },
            grid: { color: 'rgba(255,255,255,0.03)' }
          }
        }
      }
    });
  } else if (specType === 'nmr') {
    const xValues = [];
    for (let x = 12.0; x >= 0.0; x -= 0.01) {
      xValues.push(parseFloat(x.toFixed(2)));
    }

    const yValues = xValues.map(x => {
      let sum = 0;
      dataPoints.forEach(sig => {
        const xc = sig.x;
        const area = sig.y;
        // n lines J apart, heights from Pascal's triangle (1:2:1, 1:3:3:1, ...).
        // A "multiplet" is drawn as a five-line hump; an unknown label draws a singlet.
        const LINES = { singlet: 1, doublet: 2, triplet: 3, quartet: 4, quintet: 5,
                        sextet: 6, septet: 7, multiplet: 5 };
        const n = LINES[sig.label] || 1;
        const J = 0.05;
        let peaks = [], c = 1;
        for (let k = 0; k < n; k++) {
          peaks.push({ x: xc + (k - (n - 1) / 2) * J, h: area * c / Math.pow(2, n - 1) });
          c = c * (n - 1 - k) / (k + 1);
        }

        peaks.forEach(p => {
          sum += p.h * Math.exp(-0.5 * Math.pow((x - p.x)/0.015, 2));
        });
      });
      return sum;
    });

    const scatterPoints = dataPoints.map(sig => ({ x: sig.x, y: sig.y + 0.5 }));

    new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Spectrum',
            data: xValues.map((x, i) => ({ x: x, y: yValues[i] })),
            borderColor: '#6366f1',
            borderWidth: 2,
            pointRadius: 0,
            fill: false
          },
          {
            label: 'Signals',
            data: scatterPoints,
            backgroundColor: '#ef4444',
            borderColor: '#ef4444',
            pointRadius: 5,
            showLine: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function(ctx) {
                if (ctx.datasetIndex === 1) {
                  const sig = dataPoints[ctx.dataIndex];
                  return `${sig.label} (${sig.y}H) at ${sig.x} ppm`;
                }
                return `Intensity: ${ctx.parsed.y.toFixed(1)}`;
              }
            }
          }
        },
        scales: {
          x: {
            type: 'linear',
            min: 0,
            max: 12,
            reverse: true,
            title: { display: true, text: 'Chemical Shift (ppm)', color: '#94a3b8' },
            ticks: { color: '#64748b' },
            grid: { color: 'rgba(255,255,255,0.03)' }
          },
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Intensity', color: '#94a3b8' },
            ticks: { color: '#64748b' },
            grid: { color: 'rgba(255,255,255,0.03)' }
          }
        }
      }
    });
  } else if (specType === 'ir') {
    const xValues = [];
    for (let x = 4000; x >= 400; x -= 10) {
      xValues.push(x);
    }

    const dips = spec.dips || spec.data_points || [
      { xc: 3300, w: 180, d: 40 },
      { xc: 2950, w: 40, d: 50 },
      { xc: 1715, w: 20, d: 80 },
      { xc: 1600, w: 30, d: 20 }
    ];

    const yValues = xValues.map(x => {
      let val = 98;
      dips.forEach(d => {
        val -= d.d * Math.exp(-0.5 * Math.pow((x - d.xc) / d.w, 2));
      });
      return Math.max(val, 2);
    });

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: xValues,
        datasets: [{
          data: xValues.map((x, i) => ({ x: x, y: yValues[i] })),
          borderColor: '#10b981',
          borderWidth: 2,
          pointRadius: 0,
          fill: false,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            type: 'linear',
            min: 400,
            max: 4000,
            reverse: true,
            title: { display: true, text: 'Wavenumber (cm-1)', color: '#94a3b8' },
            ticks: { color: '#64748b' },
            grid: { color: 'rgba(255,255,255,0.03)' }
          },
          y: {
            min: 0,
            max: 100,
            title: { display: true, text: 'Transmittance (%)', color: '#94a3b8' },
            ticks: { color: '#64748b' },
            grid: { color: 'rgba(255,255,255,0.03)' }
          }
        }
      }
    });
  }
}

function drawEnergyChart(ctx, diag) {
  const points = diag.points;
  const data = points.map((p, i) => ({ x: i, y: p.energy }));

  // The plotted energies are what the question asks the student to read off; giving
  // them in text is equivalent access, not the answer (which is Ea and dH).
  // Kept unit-free and generic on purpose: this same renderer draws reaction
  // coordinate diagrams, MO diagrams and conformational energy profiles, and the
  // data carries no units of its own - the question text supplies them.
  if (ctx && ctx.canvas) {
    ctx.canvas.setAttribute('role', 'img');
    ctx.canvas.setAttribute('aria-label',
      'Energy diagram showing: '
      + points.map(p => `${p.state} at ${p.energy}`).join(', ') + '.');
  }

  new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        {
          data: data,
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.05)',
          fill: true,
          tension: 0.4,
          borderWidth: 3,
          pointRadius: 6,
          pointHoverRadius: 8
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            title: function(ctx) { return points[ctx[0].parsed.x].state; },
            label: function(ctx) { return `Energy: ${ctx.parsed.y} kJ/mol`; }
          }
        }
      },
      scales: {
        x: {
          type: 'linear',
          min: 0,
          max: points.length - 1,
          title: { display: true, text: 'Reaction Progress', color: '#94a3b8' },
          ticks: {
            color: '#64748b',
            callback: function(v) {
              const val = Math.round(v);
              if (val === v && points[val]) return points[val].state;
              return '';
            }
          },
          grid: { color: 'rgba(255,255,255,0.03)' }
        },
        y: {
          title: { display: true, text: 'Potential Energy (kJ/mol)', color: '#94a3b8' },
          ticks: { color: '#64748b' },
          grid: { color: 'rgba(255,255,255,0.03)' }
        }
      }
    }
  });
}

function drawSyntheticRoadmap(containerId, roadmap) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  const grid = document.createElement('div');
  grid.className = 'roadmap-grid';
  
  const xs = roadmap.nodes.map(n => n.x);
  const ys = roadmap.nodes.map(n => n.y);
  const maxX = Math.max(...xs, 1);
  const maxY = Math.max(...ys, 1);
  
  // drawSMILESCanvas resizes the canvas to 320x200, so a 160px column left every
  // roadmap structure overflowing halfway into the next node's cell. The column is
  // wider now and .roadmap-structure canvas scales the drawing down to fit it.
  grid.style.gridTemplateColumns = `repeat(${maxX}, 200px)`;
  grid.style.gridTemplateRows = `repeat(${maxY}, minmax(130px, auto))`;
  
  roadmap.nodes.forEach(node => {
    const nodeEl = document.createElement('div');
    nodeEl.className = 'roadmap-node';
    nodeEl.style.gridColumn = node.x;
    nodeEl.style.gridRow = node.y;
    
    let structureHtml = '';
    if (node.smiles) {
      structureHtml = `<div class="roadmap-structure"><canvas id="${containerId}-node-${node.id}" width="140" height="80"></canvas></div>`;
    }
    
    // roadmap.edges carries the reagent for each step. It was parsed and never drawn, so
    // every roadmap in the bank rendered as unlabelled boxes with no transformation between
    // them - unanswerable except by reading the structures, which on an "identify A, B and C"
    // item is the answer. Each node now states the step that reached it.
    const incoming = (roadmap.edges || [])
      .filter(e => e.to === node.id && e.reagents)
      .map(e => e.reagents)
      .join('; ');

    nodeEl.innerHTML = `
      ${incoming ? `<div class="roadmap-edge-label">&#8594; ${incoming}</div>` : ''}
      <div class="roadmap-node-label">${node.label}</div>
      ${structureHtml}
    `;
    grid.appendChild(nodeEl);
  });
  
  container.appendChild(grid);
  
  setTimeout(() => {
    roadmap.nodes.forEach(node => {
      if (node.smiles) {
        // node.id is the roadmap label ("A", "B", "C"), never the compound's name,
        // so this identifies the structure without answering the question.
        drawSMILESCanvas(node.smiles, `${containerId}-node-${node.id}`, 'light', `Compound ${node.id} structure`);
      }
    });
  }, 20);
}

function bindMatchingEvents(container, isMockActive) {
  const drops = container.querySelectorAll('.matching-drop');
  drops.forEach(selectEl => {
    const idx = parseInt(selectEl.getAttribute('data-index'));
    selectEl.addEventListener('change', (e) => {
      if (isMockActive) {
        selectMockMatchOption(idx, e.target.value);
      } else {
        selectMatchOption(idx, e.target.value);
      }
    });
  });

  const submitBtn = container.querySelector('#btn-submit-matching');
  if (submitBtn) {
    submitBtn.addEventListener('click', submitMatchingAnswer);
  }
}

function renderChoicesArea(q, selectedOptionId, isAnswered, prefix = '') {
  let html = '';
  
  if (q.interaction_type === 'matching-list' || q.interaction_type === 'matching-grid') {
    const isMockActive = (prefix === 'mock-');
    let matchingAns = {};
    if (isMockActive) {
      const idx = state.mockExam.currentIndex;
      matchingAns = (state.mockExam.matchingAnswers && state.mockExam.matchingAnswers[idx]) ? state.mockExam.matchingAnswers[idx] : {};
    } else if (prefix === 'review-') {
      const idx = state.currentQuestionIndex;
      matchingAns = (state.mockExam.activeReviewAttempt && state.mockExam.activeReviewAttempt.matchingAnswers && state.mockExam.activeReviewAttempt.matchingAnswers[idx]) ? state.mockExam.activeReviewAttempt.matchingAnswers[idx] : {};
    } else {
      matchingAns = matchingSelections;
    }
    
    const isGrid = q.interaction_type === 'matching-grid';
    let itemsHtml = '';
    
    q.match_items.forEach((item, index) => {
      const chosenVal = matchingAns[index] || '';
      const isCorrectMatch = chosenVal === (item.correctAnswer || item.correct_answer);
      
      let itemStyle = '';
      if (isAnswered) {
        itemStyle = isCorrectMatch ? 'border-color: var(--success-color); background: rgba(16, 185, 129, 0.05);' : 'border-color: var(--error-color); background: rgba(244, 63, 94, 0.05);';
      }
      
      const selectHtml = `
        <select class="matching-drop" 
                data-index="${index}" 
                ${isAnswered ? 'disabled' : ''}
                style="${isAnswered ? (isCorrectMatch ? 'border-color: var(--success-color); color: var(--success-color);' : 'border-color: var(--error-color); color: var(--error-color);') : ''}">
          <option value="">-- Choose Name --</option>
          ${q.match_options.map(opt => {
            const isSel = (isAnswered && opt === (item.correctAnswer || item.correct_answer)) || (!isAnswered && chosenVal === opt);
            return `<option value="${opt}" ${isSel ? 'selected' : ''}>${opt}</option>`;
          }).join('')}
        </select>
      `;
      
      if (isGrid) {
        itemsHtml += `
          <div class="matching-grid-card" style="${itemStyle}">
            <div class="matching-structure">
              <canvas id="${prefix}match-canvas-${index}" width="150" height="90"></canvas>
            </div>
            ${selectHtml}
            ${isAnswered ? `<div style="font-size: 0.8rem; font-weight: 600; color: ${isCorrectMatch ? 'var(--success-color)' : 'var(--error-color)'};">
              ${isCorrectMatch ? 'Correct' : `Correct: ${item.correctAnswer || item.correct_answer}`}
            </div>` : ''}
          </div>
        `;
      } else {
        itemsHtml += `
          <div class="matching-item" style="${itemStyle}">
            <div class="matching-structure">
              <canvas id="${prefix}match-canvas-${index}" width="150" height="90"></canvas>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; align-items: flex-end;">
              ${selectHtml}
              ${isAnswered ? `<div style="font-size: 0.8rem; font-weight: 600; color: ${isCorrectMatch ? 'var(--success-color)' : 'var(--error-color)'};">
                ${isCorrectMatch ? 'Correct' : `Correct: ${item.correctAnswer || item.correct_answer}`}
              </div>` : ''}
            </div>
          </div>
        `;
      }
    });
    
    if (isGrid) {
      html += `<div class="matching-grid-container" style="grid-template-columns: repeat(${q.grid_columns || 2}, 1fr);">${itemsHtml}</div>`;
    } else {
      html += `<div class="matching-container">${itemsHtml}</div>`;
    }
    
    if (!isAnswered && !isMockActive) {
      html += `
        <div class="text-center" style="margin-top: 1.5rem;">
          <button class="btn btn-primary" id="btn-submit-matching" style="padding: 0.6rem 2rem; font-weight: 600; border-radius: 8px;">
            <i class="fas fa-check-double"></i> Submit Matches
          </button>
        </div>
      `;
    }
  } else {
    html += `<div class="choices-grid">`;
    q.options.forEach(opt => {
      let optClass = '';
      let isDisabled = isAnswered ? 'disabled' : '';
      const isSelected = opt.option_id === selectedOptionId;
      
      if (isAnswered) {
        if (opt.is_correct) {
          optClass = 'correct';
        } else if (isSelected) {
          optClass = 'incorrect';
        } else {
          optClass = 'disabled';
        }
      } else if (prefix === 'mock-') {
        optClass = isSelected ? 'correct' : '';
      }
      
      const clickHandler = isAnswered ? '' : (prefix === 'mock-' ? `selectMockOption('${opt.option_id}')` : `handleOptionSelect('${opt.option_id}')`);
      const btnStyle = (prefix === 'mock-' && isSelected) ? 'border-color: var(--border-active); background: rgba(99, 102, 241, 0.05);' : '';
      const letterStyle = (prefix === 'mock-' && isSelected) ? 'background: var(--accent-color); color: #fff;' : '';
      
      html += `
        <button class="choice-button ${optClass} ${isDisabled}" 
                onclick="${clickHandler}" 
                ${isAnswered ? 'disabled' : ''}
                style="${btnStyle}">
          <div class="choice-header">
            <span class="choice-letter" style="${letterStyle}">${opt.option_id}</span>
            ${isAnswered && opt.is_correct ? '<i class="fas fa-check" style="color: var(--success-color)"></i>' : ''}
            ${isAnswered && isSelected && !opt.is_correct ? '<i class="fas fa-times" style="color: var(--error-color)"></i>' : ''}
          </div>
          <div class="choice-text">${formatChemicalText(opt.text)}</div>
      `;
      
      if (opt.smiles) {
        html += `
          <div class="choice-structure">
            <canvas id="${prefix}opt-canvas-${opt.option_id}" width="160" height="85"></canvas>
          </div>
        `;
      }
      
      html += `</button>`;
    });
    html += `</div>`;
  }
  
  return html;
}

function drawFischerProjection(canvas, dataStr) {
  const ctx = canvas.getContext('2d');
  
  // Set larger size for Fischer projections
  canvas.width = 180;
  canvas.height = 240;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Determine configurations
  const SUGAR_CONFIGS = {
    'd-allose': { type: 'hexose', oh: ['R', 'R', 'R', 'R'] },
    'd-altrose': { type: 'hexose', oh: ['L', 'R', 'R', 'R'] },
    'd-glucose': { type: 'hexose', oh: ['R', 'L', 'R', 'R'] },
    'd-mannose': { type: 'hexose', oh: ['L', 'L', 'R', 'R'] },
    'd-gulose': { type: 'hexose', oh: ['R', 'R', 'L', 'R'] },
    'd-idose': { type: 'hexose', oh: ['L', 'R', 'L', 'R'] },
    'd-galactose': { type: 'hexose', oh: ['R', 'L', 'L', 'R'] },
    'd-talose': { type: 'hexose', oh: ['L', 'L', 'L', 'R'] },
    'd-ribose': { type: 'pentose', oh: ['R', 'R', 'R'] },
    'd-arabinose': { type: 'pentose', oh: ['L', 'R', 'R'] },
    'd-xylose': { type: 'pentose', oh: ['R', 'L', 'R'] },
    'd-lyxose': { type: 'pentose', oh: ['L', 'L', 'R'] },
  };

  const key = dataStr.toLowerCase().trim();
  let ohs = ['R', 'L', 'R', 'R']; // Default to D-Glucose if not found
  if (SUGAR_CONFIGS[key]) {
    ohs = SUGAR_CONFIGS[key].oh;
  } else if (dataStr.includes(',')) {
    ohs = dataStr.split(',').map(s => s.trim().toUpperCase());
  }

  const n = ohs.length;
  
  // Design spacing
  const cx = canvas.width / 2;
  const topY = 30;
  const bottomY = canvas.height - 30;
  
  // Draw vertical line
  ctx.strokeStyle = '#f8fafc';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(cx, topY + 12);
  ctx.lineTo(cx, bottomY - 12);
  ctx.stroke();
  
  // Draw C1 text
  ctx.fillStyle = '#f8fafc';
  ctx.font = 'bold 13px Outfit, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('CHO', cx, topY);
  
  // Draw C6 text
  ctx.fillText('CH₂OH', cx, bottomY);
  
  // Draw horizontal lines & substituents
  ctx.font = 'bold 12px Outfit, sans-serif';
  for (let i = 0; i < n; i++) {
    const y = topY + (i + 1) * (bottomY - topY) / (n + 1);
    
    // Draw horizontal line
    ctx.beginPath();
    ctx.moveTo(cx - 24, y);
    ctx.lineTo(cx + 24, y);
    ctx.stroke();
    
    // Determine configuration at this carbon
    const config = ohs[i];
    if (config === 'R') {
      // H on left, OH on right
      ctx.textAlign = 'right';
      ctx.fillText('H', cx - 28, y);
      ctx.textAlign = 'left';
      ctx.fillText('OH', cx + 28, y);
    } else {
      // OH on left (written as HO), H on right
      ctx.textAlign = 'right';
      ctx.fillText('HO', cx - 28, y);
      ctx.textAlign = 'left';
      ctx.fillText('H', cx + 28, y);
    }
  }
}

function drawHaworthProjection(canvas, dataStr) {
  const ctx = canvas.getContext('2d');
  
  // Set size for Haworth projections
  canvas.width = 180;
  canvas.height = 140;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const SUGAR_CONFIGS = {
    'd-allose': ['R', 'R', 'R', 'R'],
    'd-altrose': ['L', 'R', 'R', 'R'],
    'd-glucose': ['R', 'L', 'R', 'R'],
    'd-mannose': ['L', 'L', 'R', 'R'],
    'd-gulose': ['R', 'R', 'L', 'R'],
    'd-idose': ['L', 'R', 'L', 'R'],
    'd-galactose': ['R', 'L', 'L', 'R'],
    'd-talose': ['L', 'L', 'L', 'R']
  };

  // Parse: e.g. "alpha-D-Glucose" or "beta-D-Idose"
  let anomer = 'alpha';
  let sugarName = 'd-glucose';
  
  const parts = dataStr.split('-');
  if (parts.length >= 3) {
    anomer = parts[0].toLowerCase().trim();
    sugarName = (parts[1] + '-' + parts[2]).toLowerCase().trim();
  } else if (parts.length === 2) {
    anomer = parts[0].toLowerCase().trim();
    sugarName = parts[1].toLowerCase().trim();
  }

  let config = SUGAR_CONFIGS[sugarName] || SUGAR_CONFIGS['d-glucose'];
  
  // Calculate center of drawing
  const cx = canvas.width / 2;
  const cy = canvas.height / 2 - 5;
  
  // Define vertices of the pyranose ring
  const vO = { x: cx + 30, y: cy - 20 };
  const v1 = { x: cx + 55, y: cy };
  const v2 = { x: cx + 30, y: cy + 20 };
  const v3 = { x: cx - 30, y: cy + 20 };
  const v4 = { x: cx - 55, y: cy };
  const v5 = { x: cx - 30, y: cy - 20 };
  
  // 1. Draw back lines (thin)
  ctx.strokeStyle = '#f8fafc';
  ctx.lineWidth = 1.5;
  
  // V4 -> V5
  ctx.beginPath();
  ctx.moveTo(v4.x, v4.y);
  ctx.lineTo(v5.x, v5.y);
  ctx.stroke();
  
  // V5 -> V_O (stop before O text)
  ctx.beginPath();
  ctx.moveTo(v5.x, v5.y);
  ctx.lineTo(vO.x - 10, vO.y);
  ctx.stroke();
  
  // V_O -> V1 (start after O text)
  ctx.beginPath();
  ctx.moveTo(vO.x + 3, vO.y + 6);
  ctx.lineTo(v1.x, v1.y);
  ctx.stroke();
  
  // 2. Draw front lines (thick)
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  // V4 -> V3 -> V2 -> V1
  ctx.beginPath();
  ctx.moveTo(v4.x, v4.y);
  ctx.lineTo(v3.x, v3.y);
  ctx.lineTo(v2.x, v2.y);
  ctx.lineTo(v1.x, v1.y);
  ctx.stroke();
  
  // 3. Draw Oxygen label
  ctx.fillStyle = '#f8fafc';
  ctx.font = 'bold 14px Outfit, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('O', vO.x, vO.y);
  
  // 4. Draw substituents at C1 - C5
  const subs = {
    c1: anomer === 'alpha' ? { up: 'H', down: 'OH' } : { up: 'OH', down: 'H' },
    c2: config[0] === 'L' ? { up: 'OH', down: 'H' } : { up: 'H', down: 'OH' },
    c3: config[1] === 'L' ? { up: 'OH', down: 'H' } : { up: 'H', down: 'OH' },
    c4: config[2] === 'L' ? { up: 'OH', down: 'H' } : { up: 'H', down: 'OH' },
    c5: { up: 'CH₂OH', down: 'H' }
  };
  
  const vertices = [
    { v: v1, labels: subs.c1 },
    { v: v2, labels: subs.c2 },
    { v: v3, labels: subs.c3 },
    { v: v4, labels: subs.c4 },
    { v: v5, labels: subs.c5 }
  ];
  
  ctx.lineWidth = 1.25;
  ctx.font = 'bold 11px Outfit, sans-serif';
  
  vertices.forEach(({ v, labels }) => {
    // Draw vertical substituent line
    ctx.beginPath();
    ctx.moveTo(v.x, v.y - 18);
    ctx.lineTo(v.x, v.y + 18);
    ctx.stroke();
    
    // Draw UP substituent
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillText(labels.up, v.x, v.y - 21);
    
    // Draw DOWN substituent
    ctx.textBaseline = 'top';
    ctx.fillText(labels.down, v.x, v.y + 21);
  });
}

