// OChemStudyBuddy - McMurry Chapter 22
// Author: A. Elangovan, PhD
var CH22_QUESTIONS = [
  {
    "question_id": "ch22_q_dynamic_kinetic_enolates",
    "topic": "Enols and Enolates",
    "difficulty_level": "Hard",
    "question_text": "Match the reaction conditions to the preferred enolate form (kinetic vs thermodynamic).",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(=O)C(C)C.C1COCCN1",
        "correctAnswer": "Kinetic Enolate (LDA, THF, -78°C)"
      },
      {
        "smiles": "CC(=O)C(C)C.O=C([O-])C",
        "correctAnswer": "Thermodynamic Enolate (NaOEt, EtOH, 25°C)"
      }
    ],
    "match_options": [
      "Kinetic Enolate (LDA, THF, -78°C)",
      "Thermodynamic Enolate (NaOEt, EtOH, 25°C)"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect enolate conditions",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing kinetic and thermodynamic enolate formation.",
      "process": "Kinetic enolates are formed by rapid, irreversible deprotonation at the less hindered carbon using a strong, bulky base (LDA) at low temperatures (-78°C). Thermodynamic enolates are formed under equilibrating conditions (NaOEt, room temp) favoring the more substituted, stable double bond.",
      "result": "Enolates matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  }
];
