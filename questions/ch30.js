// OChemStudyBuddy - McMurry Chapter 30
// Author: A. Elangovan, PhD
var CH30_QUESTIONS = [
  {
    "question_id": "ch30_q_dynamic_diels_alder",
    "topic": "Orbitals & Pericyclic Reactions",
    "difficulty_level": "Hard",
    "question_text": "Predict the product of the thermal [4+2] cycloaddition (Diels-Alder reaction) of 1,3-butadiene and maleic anhydride.",
    "reaction_scheme": {
      "reactants": [
        "C=CC=C",
        "O=C1C=CC(=O)O1"
      ],
      "reagents": "Diels-Alder Reaction",
      "conditions": "thermal heat",
      "products": [
        "O=C1[C@@H]2CC=CC[C@@H]2C(=O)O1"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "The [4+2] cycloaddition occurs in a concerted, stereospecific manner to yield the cis-anhydride cyclohexene derivative.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The reaction yields a polymer.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A substitution product is formed.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A [2+2] cyclobutane ring is formed.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing thermal Diels-Alder cycloadditions.",
      "process": "thermal [4+2] cycloadditions are symmetry-allowed. Conjugated diene (4 pi electrons) reacts with dienophile (2 pi electrons) to form a new six-membered ring with stereochemical retention of the cis dienophile.",
      "result": "The final product is a cis-fused cyclohexene anhydride."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  }
];
