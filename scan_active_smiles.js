const fs = require('fs');
const path = require('path');
const vm = require('vm');

const workspaceDir = "C:\\Users\\easam\\Documents\\Gemini\\OChemExamPrApp";
const questionsDir = path.join(workspaceDir, "questions");

function loadQuestionsFromFile(filePath) {
  try {
    let code = fs.readFileSync(filePath, 'utf8');
    code = code.replace(/\bconst\b/g, 'var').replace(/\blet\b/g, 'var');
    const sandbox = {};
    vm.createContext(sandbox);
    vm.runInContext(code, sandbox);
    for (const key in sandbox) {
      if (Array.isArray(sandbox[key])) {
        return sandbox[key];
      }
    }
  } catch (err) {}
  return null;
}

function scan() {
  const files = [path.join(workspaceDir, 'questions-data.js')];
  if (fs.existsSync(questionsDir)) {
    fs.readdirSync(questionsDir)
      .filter(f => f.endsWith('.js') && f.startsWith('chapter'))
      .forEach(f => files.push(path.join(questionsDir, f)));
  }

  const results = [];

  files.forEach(filePath => {
    const questions = loadQuestionsFromFile(filePath);
    if (!questions) return;

    questions.forEach((q, idx) => {
      const qSmiles = q.question_smiles ? q.question_smiles.trim() : '';
      if (!qSmiles) return;

      const correctOpt = q.options ? q.options.find(opt => opt.is_correct === true) : null;
      
      results.push({
        file: path.basename(filePath),
        id: q.question_id,
        text: q.question_text,
        question_smiles: qSmiles,
        correct_option: correctOpt ? {
          option_id: correctOpt.option_id,
          text: correctOpt.text,
          smiles: correctOpt.smiles || ''
        } : null,
        all_options: q.options ? q.options.map(opt => ({
          option_id: opt.option_id,
          text: opt.text,
          smiles: opt.smiles || '',
          is_correct: opt.is_correct
        })) : []
      });
    });
  });

  fs.writeFileSync(path.join(workspaceDir, 'active_smiles.json'), JSON.stringify(results, null, 2));
  console.log(`Saved ${results.length} questions with active question_smiles to active_smiles.json`);
}

scan();
