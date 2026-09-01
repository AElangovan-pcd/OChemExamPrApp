// OChemStudyBuddy - McMurry Chapter 24
// Author: A. Elangovan, PhD
var CH24_QUESTIONS = [
  {
    "question_id": "ch24_q_dynamic_amine_basicity",
    "topic": "Amines: Basicities",
    "difficulty_level": "Hard",
    "question_text": "Match each amine structure to its relative basicity level (pKb of conjugate acid).",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCN",
        "correctAnswer": "Strong Base (pKa of CA ~ 10.8)"
      },
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "Weak Base (pKa of CA ~ 4.6)"
      },
      {
        "smiles": "c1cc[nH]c1",
        "correctAnswer": "Extremely Weak Base (pKa of CA ~ -3.8)"
      },
      {
        "smiles": "C1=CC=NC=C1",
        "correctAnswer": "Moderate Base (pKa of CA ~ 5.25)"
      }
    ],
    "match_options": [
      "Strong Base (pKa of CA ~ 10.8)",
      "Weak Base (pKa of CA ~ 4.6)",
      "Extremely Weak Base (pKa of CA ~ -3.8)",
      "Moderate Base (pKa of CA ~ 5.25)"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect basicities",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Assessing amine basicity based on hybridization and resonance.",
      "process": "Ethylamine has localized lone pair: strong base. Aniline lone pair is delocalized into benzene ring: weak base. Pyrrole lone pair is part of aromatic sextet; protonation destroys aromaticity: extremely weak. Pyridine lone pair is in sp2 orbital outside aromatic ring: moderate base.",
      "result": "Amine basicity trends mapped."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  }
];
