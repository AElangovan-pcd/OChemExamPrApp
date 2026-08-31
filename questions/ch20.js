// OChemStudyBuddy - McMurry Chapter 20
// Author: A. Elangovan, PhD
var CH20_QUESTIONS = [
  {
    "question_id": "ch20_q_dynamic_inductive_acidity",
    "topic": "Carboxylic Acids: Acidities",
    "difficulty_level": "Medium",
    "question_text": "Match each carboxylic acid to its relative acidity based on inductive electron-withdrawing effects.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "pKa = 4.76 (Weakest Acid)"
      },
      {
        "smiles": "ClCC(=O)O",
        "correctAnswer": "pKa = 2.86 (Medium Acid)"
      },
      {
        "smiles": "FC(F)(F)C(=O)O",
        "correctAnswer": "pKa = 0.23 (Strongest Acid)"
      },
      {
        "smiles": "CCC(=O)O",
        "correctAnswer": "pKa = 4.88 (Extremely Weak Acid)"
      }
    ],
    "match_options": [
      "pKa = 4.76 (Weakest Acid)",
      "pKa = 2.86 (Medium Acid)",
      "pKa = 0.23 (Strongest Acid)",
      "pKa = 4.88 (Extremely Weak Acid)"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect pKa relative mapping",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Evaluating inductive stabilization of conjugate bases.",
      "process": "Electronegative atoms (like fluorine or chlorine) pull electron density away from the carboxylate group, stabilizing the negative charge of the conjugate base. More halogens and higher electronegativity increase acidity.",
      "result": "TFA (trifluoroacetic acid) is the strongest."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  }
];
