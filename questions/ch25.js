// OChemStudyBuddy - McMurry Chapter 25
// Author: A. Elangovan, PhD
var CH25_QUESTIONS = [
  {
    "question_id": "ch25_q_dynamic_monosaccharides",
    "topic": "Biomolecules: Carbohydrates",
    "difficulty_level": "Hard",
    "question_text": "Identify each cyclic D-aldohexose anomeric form from its structure.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:alpha-D-Glucose",
        "correctAnswer": "alpha-D-Glucopyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Glucose",
        "correctAnswer": "beta-D-Glucopyranose"
      }
    ],
    "match_options": [
      "alpha-D-Glucopyranose",
      "beta-D-Glucopyranose",
      "alpha-D-Galactopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect anomer mapping",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing alpha/beta pyranose conformations.",
      "process": "Alpha has the C1 anomeric hydroxyl down (trans to C6). Beta has the C1 hydroxyl up (cis to C6).",
      "result": "Anomers mapped successfully."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q1",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Idose",
        "correctAnswer": "D-Idose"
      },
      {
        "smiles": "FISCHER:D-Altrose",
        "correctAnswer": "D-Altrose"
      },
      {
        "smiles": "FISCHER:D-Arabinose",
        "correctAnswer": "D-Arabinose"
      },
      {
        "smiles": "FISCHER:D-Glucose",
        "correctAnswer": "D-Glucose"
      }
    ],
    "match_options": [
      "D-Gulose",
      "D-Xylose",
      "D-Idose",
      "D-Arabinose",
      "D-Glucose",
      "D-Allose",
      "D-Galactose",
      "D-Altrose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Idose.\nSugar 2: D-Altrose.\nSugar 3: D-Arabinose.\nSugar 4: D-Glucose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q2",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:alpha-D-Altrose",
        "correctAnswer": "α-D-Altropyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Altrose",
        "correctAnswer": "β-D-Altropyranose"
      }
    ],
    "match_options": [
      "β-D-Altropyranose",
      "β-D-Glucopyranose",
      "β-D-Talopyranose",
      "β-D-Gulopyranose",
      "α-D-Galactopyranose",
      "α-D-Altropyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: α-D-Altropyranose.\nSugar 2: β-D-Altropyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q3",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Lyxose",
        "correctAnswer": "D-Lyxose"
      },
      {
        "smiles": "FISCHER:D-Allose",
        "correctAnswer": "D-Allose"
      },
      {
        "smiles": "FISCHER:D-Glucose",
        "correctAnswer": "D-Glucose"
      },
      {
        "smiles": "FISCHER:D-Xylose",
        "correctAnswer": "D-Xylose"
      }
    ],
    "match_options": [
      "D-Arabinose",
      "D-Lyxose",
      "D-Altrose",
      "D-Allose",
      "D-Gulose",
      "D-Xylose",
      "D-Glucose",
      "D-Talose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Lyxose.\nSugar 2: D-Allose.\nSugar 3: D-Glucose.\nSugar 4: D-Xylose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q4",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:beta-D-Allose",
        "correctAnswer": "β-D-Allopyranose"
      },
      {
        "smiles": "HAWORTH:alpha-D-Altrose",
        "correctAnswer": "α-D-Altropyranose"
      }
    ],
    "match_options": [
      "β-D-Allopyranose",
      "α-D-Altropyranose",
      "β-D-Talopyranose",
      "β-D-Mannopyranose",
      "β-D-Glucopyranose",
      "β-D-Idopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: β-D-Allopyranose.\nSugar 2: α-D-Altropyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q5",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Idose",
        "correctAnswer": "D-Idose"
      },
      {
        "smiles": "FISCHER:D-Mannose",
        "correctAnswer": "D-Mannose"
      },
      {
        "smiles": "FISCHER:D-Talose",
        "correctAnswer": "D-Talose"
      },
      {
        "smiles": "FISCHER:D-Arabinose",
        "correctAnswer": "D-Arabinose"
      }
    ],
    "match_options": [
      "D-Glucose",
      "D-Mannose",
      "D-Galactose",
      "D-Arabinose",
      "D-Gulose",
      "D-Idose",
      "D-Altrose",
      "D-Talose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Idose.\nSugar 2: D-Mannose.\nSugar 3: D-Talose.\nSugar 4: D-Arabinose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q6",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:beta-D-Glucose",
        "correctAnswer": "β-D-Glucopyranose"
      },
      {
        "smiles": "HAWORTH:alpha-D-Mannose",
        "correctAnswer": "α-D-Mannopyranose"
      }
    ],
    "match_options": [
      "α-D-Mannopyranose",
      "β-D-Allopyranose",
      "β-D-Altropyranose",
      "β-D-Glucopyranose",
      "α-D-Idopyranose",
      "α-D-Glucopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: β-D-Glucopyranose.\nSugar 2: α-D-Mannopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q7",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Gulose",
        "correctAnswer": "D-Gulose"
      },
      {
        "smiles": "FISCHER:D-Idose",
        "correctAnswer": "D-Idose"
      },
      {
        "smiles": "FISCHER:D-Lyxose",
        "correctAnswer": "D-Lyxose"
      },
      {
        "smiles": "FISCHER:D-Arabinose",
        "correctAnswer": "D-Arabinose"
      }
    ],
    "match_options": [
      "D-Altrose",
      "D-Glucose",
      "D-Gulose",
      "D-Allose",
      "D-Idose",
      "D-Ribose",
      "D-Lyxose",
      "D-Arabinose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Gulose.\nSugar 2: D-Idose.\nSugar 3: D-Lyxose.\nSugar 4: D-Arabinose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q8",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:beta-D-Allose",
        "correctAnswer": "β-D-Allopyranose"
      },
      {
        "smiles": "HAWORTH:alpha-D-Gulose",
        "correctAnswer": "α-D-Gulopyranose"
      }
    ],
    "match_options": [
      "α-D-Galactopyranose",
      "β-D-Mannopyranose",
      "α-D-Mannopyranose",
      "α-D-Gulopyranose",
      "β-D-Altropyranose",
      "β-D-Allopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: β-D-Allopyranose.\nSugar 2: α-D-Gulopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q9",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Galactose",
        "correctAnswer": "D-Galactose"
      },
      {
        "smiles": "FISCHER:D-Allose",
        "correctAnswer": "D-Allose"
      },
      {
        "smiles": "FISCHER:D-Talose",
        "correctAnswer": "D-Talose"
      },
      {
        "smiles": "FISCHER:D-Altrose",
        "correctAnswer": "D-Altrose"
      }
    ],
    "match_options": [
      "D-Allose",
      "D-Arabinose",
      "D-Altrose",
      "D-Talose",
      "D-Glucose",
      "D-Galactose",
      "D-Ribose",
      "D-Gulose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Galactose.\nSugar 2: D-Allose.\nSugar 3: D-Talose.\nSugar 4: D-Altrose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q10",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:beta-D-Idose",
        "correctAnswer": "β-D-Idopyranose"
      },
      {
        "smiles": "HAWORTH:alpha-D-Galactose",
        "correctAnswer": "α-D-Galactopyranose"
      }
    ],
    "match_options": [
      "β-D-Idopyranose",
      "α-D-Altropyranose",
      "α-D-Galactopyranose",
      "β-D-Altropyranose",
      "α-D-Mannopyranose",
      "α-D-Gulopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: β-D-Idopyranose.\nSugar 2: α-D-Galactopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q11",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Ribose",
        "correctAnswer": "D-Ribose"
      },
      {
        "smiles": "FISCHER:D-Talose",
        "correctAnswer": "D-Talose"
      },
      {
        "smiles": "FISCHER:D-Mannose",
        "correctAnswer": "D-Mannose"
      },
      {
        "smiles": "FISCHER:D-Arabinose",
        "correctAnswer": "D-Arabinose"
      }
    ],
    "match_options": [
      "D-Altrose",
      "D-Mannose",
      "D-Arabinose",
      "D-Talose",
      "D-Gulose",
      "D-Galactose",
      "D-Ribose",
      "D-Xylose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Ribose.\nSugar 2: D-Talose.\nSugar 3: D-Mannose.\nSugar 4: D-Arabinose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q12",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:alpha-D-Galactose",
        "correctAnswer": "α-D-Galactopyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Galactose",
        "correctAnswer": "β-D-Galactopyranose"
      }
    ],
    "match_options": [
      "β-D-Galactopyranose",
      "β-D-Allopyranose",
      "α-D-Galactopyranose",
      "β-D-Talopyranose",
      "β-D-Idopyranose",
      "β-D-Mannopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: α-D-Galactopyranose.\nSugar 2: β-D-Galactopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q13",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Mannose",
        "correctAnswer": "D-Mannose"
      },
      {
        "smiles": "FISCHER:D-Allose",
        "correctAnswer": "D-Allose"
      },
      {
        "smiles": "FISCHER:D-Arabinose",
        "correctAnswer": "D-Arabinose"
      },
      {
        "smiles": "FISCHER:D-Xylose",
        "correctAnswer": "D-Xylose"
      }
    ],
    "match_options": [
      "D-Mannose",
      "D-Gulose",
      "D-Allose",
      "D-Idose",
      "D-Glucose",
      "D-Talose",
      "D-Arabinose",
      "D-Xylose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Mannose.\nSugar 2: D-Allose.\nSugar 3: D-Arabinose.\nSugar 4: D-Xylose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q14",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:beta-D-Glucose",
        "correctAnswer": "β-D-Glucopyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Allose",
        "correctAnswer": "β-D-Allopyranose"
      }
    ],
    "match_options": [
      "α-D-Galactopyranose",
      "β-D-Allopyranose",
      "β-D-Idopyranose",
      "α-D-Talopyranose",
      "β-D-Glucopyranose",
      "α-D-Allopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: β-D-Glucopyranose.\nSugar 2: β-D-Allopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q15",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Xylose",
        "correctAnswer": "D-Xylose"
      },
      {
        "smiles": "FISCHER:D-Galactose",
        "correctAnswer": "D-Galactose"
      },
      {
        "smiles": "FISCHER:D-Talose",
        "correctAnswer": "D-Talose"
      },
      {
        "smiles": "FISCHER:D-Ribose",
        "correctAnswer": "D-Ribose"
      }
    ],
    "match_options": [
      "D-Allose",
      "D-Xylose",
      "D-Galactose",
      "D-Glucose",
      "D-Ribose",
      "D-Gulose",
      "D-Talose",
      "D-Idose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Xylose.\nSugar 2: D-Galactose.\nSugar 3: D-Talose.\nSugar 4: D-Ribose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q16",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:alpha-D-Allose",
        "correctAnswer": "α-D-Allopyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Talose",
        "correctAnswer": "β-D-Talopyranose"
      }
    ],
    "match_options": [
      "β-D-Talopyranose",
      "β-D-Altropyranose",
      "α-D-Idopyranose",
      "β-D-Idopyranose",
      "α-D-Gulopyranose",
      "α-D-Allopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: α-D-Allopyranose.\nSugar 2: β-D-Talopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q17",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Glucose",
        "correctAnswer": "D-Glucose"
      },
      {
        "smiles": "FISCHER:D-Galactose",
        "correctAnswer": "D-Galactose"
      },
      {
        "smiles": "FISCHER:D-Ribose",
        "correctAnswer": "D-Ribose"
      },
      {
        "smiles": "FISCHER:D-Talose",
        "correctAnswer": "D-Talose"
      }
    ],
    "match_options": [
      "D-Xylose",
      "D-Talose",
      "D-Ribose",
      "D-Idose",
      "D-Allose",
      "D-Glucose",
      "D-Galactose",
      "D-Altrose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Glucose.\nSugar 2: D-Galactose.\nSugar 3: D-Ribose.\nSugar 4: D-Talose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q18",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:alpha-D-Glucose",
        "correctAnswer": "α-D-Glucopyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Galactose",
        "correctAnswer": "β-D-Galactopyranose"
      }
    ],
    "match_options": [
      "β-D-Glucopyranose",
      "α-D-Altropyranose",
      "α-D-Glucopyranose",
      "β-D-Galactopyranose",
      "α-D-Gulopyranose",
      "β-D-Gulopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: α-D-Glucopyranose.\nSugar 2: β-D-Galactopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q19",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Lyxose",
        "correctAnswer": "D-Lyxose"
      },
      {
        "smiles": "FISCHER:D-Xylose",
        "correctAnswer": "D-Xylose"
      },
      {
        "smiles": "FISCHER:D-Ribose",
        "correctAnswer": "D-Ribose"
      },
      {
        "smiles": "FISCHER:D-Gulose",
        "correctAnswer": "D-Gulose"
      }
    ],
    "match_options": [
      "D-Arabinose",
      "D-Allose",
      "D-Gulose",
      "D-Galactose",
      "D-Altrose",
      "D-Xylose",
      "D-Lyxose",
      "D-Ribose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Lyxose.\nSugar 2: D-Xylose.\nSugar 3: D-Ribose.\nSugar 4: D-Gulose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q20",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:beta-D-Gulose",
        "correctAnswer": "β-D-Gulopyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Mannose",
        "correctAnswer": "β-D-Mannopyranose"
      }
    ],
    "match_options": [
      "β-D-Allopyranose",
      "α-D-Altropyranose",
      "α-D-Glucopyranose",
      "β-D-Mannopyranose",
      "β-D-Altropyranose",
      "β-D-Gulopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: β-D-Gulopyranose.\nSugar 2: β-D-Mannopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q21",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Lyxose",
        "correctAnswer": "D-Lyxose"
      },
      {
        "smiles": "FISCHER:D-Talose",
        "correctAnswer": "D-Talose"
      },
      {
        "smiles": "FISCHER:D-Altrose",
        "correctAnswer": "D-Altrose"
      },
      {
        "smiles": "FISCHER:D-Allose",
        "correctAnswer": "D-Allose"
      }
    ],
    "match_options": [
      "D-Talose",
      "D-Galactose",
      "D-Altrose",
      "D-Allose",
      "D-Mannose",
      "D-Xylose",
      "D-Idose",
      "D-Lyxose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Lyxose.\nSugar 2: D-Talose.\nSugar 3: D-Altrose.\nSugar 4: D-Allose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q22",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:beta-D-Allose",
        "correctAnswer": "β-D-Allopyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Mannose",
        "correctAnswer": "β-D-Mannopyranose"
      }
    ],
    "match_options": [
      "β-D-Idopyranose",
      "β-D-Allopyranose",
      "α-D-Idopyranose",
      "β-D-Talopyranose",
      "β-D-Gulopyranose",
      "β-D-Mannopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: β-D-Allopyranose.\nSugar 2: β-D-Mannopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q23",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Mannose",
        "correctAnswer": "D-Mannose"
      },
      {
        "smiles": "FISCHER:D-Ribose",
        "correctAnswer": "D-Ribose"
      },
      {
        "smiles": "FISCHER:D-Arabinose",
        "correctAnswer": "D-Arabinose"
      },
      {
        "smiles": "FISCHER:D-Idose",
        "correctAnswer": "D-Idose"
      }
    ],
    "match_options": [
      "D-Arabinose",
      "D-Xylose",
      "D-Talose",
      "D-Ribose",
      "D-Idose",
      "D-Mannose",
      "D-Lyxose",
      "D-Galactose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Mannose.\nSugar 2: D-Ribose.\nSugar 3: D-Arabinose.\nSugar 4: D-Idose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q24",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:alpha-D-Altrose",
        "correctAnswer": "α-D-Altropyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Idose",
        "correctAnswer": "β-D-Idopyranose"
      }
    ],
    "match_options": [
      "β-D-Gulopyranose",
      "α-D-Altropyranose",
      "α-D-Galactopyranose",
      "β-D-Idopyranose",
      "β-D-Glucopyranose",
      "β-D-Altropyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: α-D-Altropyranose.\nSugar 2: β-D-Idopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q25",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Ribose",
        "correctAnswer": "D-Ribose"
      },
      {
        "smiles": "FISCHER:D-Arabinose",
        "correctAnswer": "D-Arabinose"
      },
      {
        "smiles": "FISCHER:D-Talose",
        "correctAnswer": "D-Talose"
      },
      {
        "smiles": "FISCHER:D-Galactose",
        "correctAnswer": "D-Galactose"
      }
    ],
    "match_options": [
      "D-Lyxose",
      "D-Xylose",
      "D-Idose",
      "D-Arabinose",
      "D-Ribose",
      "D-Galactose",
      "D-Gulose",
      "D-Talose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Ribose.\nSugar 2: D-Arabinose.\nSugar 3: D-Talose.\nSugar 4: D-Galactose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q26",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:beta-D-Galactose",
        "correctAnswer": "β-D-Galactopyranose"
      },
      {
        "smiles": "HAWORTH:alpha-D-Glucose",
        "correctAnswer": "α-D-Glucopyranose"
      }
    ],
    "match_options": [
      "β-D-Talopyranose",
      "β-D-Gulopyranose",
      "β-D-Allopyranose",
      "α-D-Gulopyranose",
      "β-D-Galactopyranose",
      "α-D-Glucopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: β-D-Galactopyranose.\nSugar 2: α-D-Glucopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q27",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Glucose",
        "correctAnswer": "D-Glucose"
      },
      {
        "smiles": "FISCHER:D-Lyxose",
        "correctAnswer": "D-Lyxose"
      },
      {
        "smiles": "FISCHER:D-Talose",
        "correctAnswer": "D-Talose"
      },
      {
        "smiles": "FISCHER:D-Ribose",
        "correctAnswer": "D-Ribose"
      }
    ],
    "match_options": [
      "D-Glucose",
      "D-Lyxose",
      "D-Talose",
      "D-Idose",
      "D-Mannose",
      "D-Altrose",
      "D-Galactose",
      "D-Ribose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Glucose.\nSugar 2: D-Lyxose.\nSugar 3: D-Talose.\nSugar 4: D-Ribose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q29",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Glucose",
        "correctAnswer": "D-Glucose"
      },
      {
        "smiles": "FISCHER:D-Mannose",
        "correctAnswer": "D-Mannose"
      },
      {
        "smiles": "FISCHER:D-Gulose",
        "correctAnswer": "D-Gulose"
      },
      {
        "smiles": "FISCHER:D-Galactose",
        "correctAnswer": "D-Galactose"
      }
    ],
    "match_options": [
      "D-Altrose",
      "D-Mannose",
      "D-Ribose",
      "D-Gulose",
      "D-Arabinose",
      "D-Glucose",
      "D-Galactose",
      "D-Xylose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Glucose.\nSugar 2: D-Mannose.\nSugar 3: D-Gulose.\nSugar 4: D-Galactose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q30",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:beta-D-Galactose",
        "correctAnswer": "β-D-Galactopyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Gulose",
        "correctAnswer": "β-D-Gulopyranose"
      }
    ],
    "match_options": [
      "α-D-Talopyranose",
      "β-D-Gulopyranose",
      "α-D-Idopyranose",
      "β-D-Talopyranose",
      "β-D-Galactopyranose",
      "α-D-Gulopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: β-D-Galactopyranose.\nSugar 2: β-D-Gulopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q31",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Galactose",
        "correctAnswer": "D-Galactose"
      },
      {
        "smiles": "FISCHER:D-Glucose",
        "correctAnswer": "D-Glucose"
      },
      {
        "smiles": "FISCHER:D-Idose",
        "correctAnswer": "D-Idose"
      },
      {
        "smiles": "FISCHER:D-Xylose",
        "correctAnswer": "D-Xylose"
      }
    ],
    "match_options": [
      "D-Idose",
      "D-Gulose",
      "D-Glucose",
      "D-Lyxose",
      "D-Galactose",
      "D-Ribose",
      "D-Xylose",
      "D-Mannose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Galactose.\nSugar 2: D-Glucose.\nSugar 3: D-Idose.\nSugar 4: D-Xylose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q32",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:beta-D-Talose",
        "correctAnswer": "β-D-Talopyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Altrose",
        "correctAnswer": "β-D-Altropyranose"
      }
    ],
    "match_options": [
      "α-D-Glucopyranose",
      "β-D-Altropyranose",
      "α-D-Gulopyranose",
      "β-D-Talopyranose",
      "α-D-Idopyranose",
      "α-D-Altropyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: β-D-Talopyranose.\nSugar 2: β-D-Altropyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q33",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Arabinose",
        "correctAnswer": "D-Arabinose"
      },
      {
        "smiles": "FISCHER:D-Galactose",
        "correctAnswer": "D-Galactose"
      },
      {
        "smiles": "FISCHER:D-Ribose",
        "correctAnswer": "D-Ribose"
      },
      {
        "smiles": "FISCHER:D-Idose",
        "correctAnswer": "D-Idose"
      }
    ],
    "match_options": [
      "D-Galactose",
      "D-Lyxose",
      "D-Arabinose",
      "D-Gulose",
      "D-Ribose",
      "D-Xylose",
      "D-Idose",
      "D-Talose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Arabinose.\nSugar 2: D-Galactose.\nSugar 3: D-Ribose.\nSugar 4: D-Idose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q34",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:beta-D-Mannose",
        "correctAnswer": "β-D-Mannopyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Talose",
        "correctAnswer": "β-D-Talopyranose"
      }
    ],
    "match_options": [
      "α-D-Gulopyranose",
      "α-D-Altropyranose",
      "β-D-Galactopyranose",
      "β-D-Gulopyranose",
      "β-D-Mannopyranose",
      "β-D-Talopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: β-D-Mannopyranose.\nSugar 2: β-D-Talopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q35",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Ribose",
        "correctAnswer": "D-Ribose"
      },
      {
        "smiles": "FISCHER:D-Mannose",
        "correctAnswer": "D-Mannose"
      },
      {
        "smiles": "FISCHER:D-Idose",
        "correctAnswer": "D-Idose"
      },
      {
        "smiles": "FISCHER:D-Gulose",
        "correctAnswer": "D-Gulose"
      }
    ],
    "match_options": [
      "D-Ribose",
      "D-Altrose",
      "D-Mannose",
      "D-Arabinose",
      "D-Glucose",
      "D-Gulose",
      "D-Galactose",
      "D-Idose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Ribose.\nSugar 2: D-Mannose.\nSugar 3: D-Idose.\nSugar 4: D-Gulose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q36",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:alpha-D-Allose",
        "correctAnswer": "α-D-Allopyranose"
      },
      {
        "smiles": "HAWORTH:alpha-D-Galactose",
        "correctAnswer": "α-D-Galactopyranose"
      }
    ],
    "match_options": [
      "α-D-Mannopyranose",
      "β-D-Idopyranose",
      "β-D-Gulopyranose",
      "α-D-Galactopyranose",
      "β-D-Altropyranose",
      "α-D-Allopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: α-D-Allopyranose.\nSugar 2: α-D-Galactopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q37",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Glucose",
        "correctAnswer": "D-Glucose"
      },
      {
        "smiles": "FISCHER:D-Talose",
        "correctAnswer": "D-Talose"
      },
      {
        "smiles": "FISCHER:D-Allose",
        "correctAnswer": "D-Allose"
      },
      {
        "smiles": "FISCHER:D-Altrose",
        "correctAnswer": "D-Altrose"
      }
    ],
    "match_options": [
      "D-Altrose",
      "D-Ribose",
      "D-Glucose",
      "D-Talose",
      "D-Gulose",
      "D-Allose",
      "D-Mannose",
      "D-Idose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Glucose.\nSugar 2: D-Talose.\nSugar 3: D-Allose.\nSugar 4: D-Altrose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q39",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Glucose",
        "correctAnswer": "D-Glucose"
      },
      {
        "smiles": "FISCHER:D-Xylose",
        "correctAnswer": "D-Xylose"
      },
      {
        "smiles": "FISCHER:D-Gulose",
        "correctAnswer": "D-Gulose"
      },
      {
        "smiles": "FISCHER:D-Idose",
        "correctAnswer": "D-Idose"
      }
    ],
    "match_options": [
      "D-Talose",
      "D-Idose",
      "D-Lyxose",
      "D-Glucose",
      "D-Galactose",
      "D-Xylose",
      "D-Allose",
      "D-Gulose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Glucose.\nSugar 2: D-Xylose.\nSugar 3: D-Gulose.\nSugar 4: D-Idose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q40",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:alpha-D-Gulose",
        "correctAnswer": "α-D-Gulopyranose"
      },
      {
        "smiles": "HAWORTH:alpha-D-Mannose",
        "correctAnswer": "α-D-Mannopyranose"
      }
    ],
    "match_options": [
      "α-D-Gulopyranose",
      "α-D-Mannopyranose",
      "β-D-Allopyranose",
      "α-D-Altropyranose",
      "β-D-Gulopyranose",
      "β-D-Mannopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: α-D-Gulopyranose.\nSugar 2: α-D-Mannopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q41",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Glucose",
        "correctAnswer": "D-Glucose"
      },
      {
        "smiles": "FISCHER:D-Xylose",
        "correctAnswer": "D-Xylose"
      },
      {
        "smiles": "FISCHER:D-Altrose",
        "correctAnswer": "D-Altrose"
      },
      {
        "smiles": "FISCHER:D-Allose",
        "correctAnswer": "D-Allose"
      }
    ],
    "match_options": [
      "D-Talose",
      "D-Arabinose",
      "D-Allose",
      "D-Altrose",
      "D-Glucose",
      "D-Xylose",
      "D-Galactose",
      "D-Mannose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Glucose.\nSugar 2: D-Xylose.\nSugar 3: D-Altrose.\nSugar 4: D-Allose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q42",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:alpha-D-Gulose",
        "correctAnswer": "α-D-Gulopyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Gulose",
        "correctAnswer": "β-D-Gulopyranose"
      }
    ],
    "match_options": [
      "α-D-Idopyranose",
      "β-D-Gulopyranose",
      "α-D-Gulopyranose",
      "β-D-Idopyranose",
      "α-D-Talopyranose",
      "β-D-Mannopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: α-D-Gulopyranose.\nSugar 2: β-D-Gulopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q43",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Lyxose",
        "correctAnswer": "D-Lyxose"
      },
      {
        "smiles": "FISCHER:D-Mannose",
        "correctAnswer": "D-Mannose"
      },
      {
        "smiles": "FISCHER:D-Altrose",
        "correctAnswer": "D-Altrose"
      },
      {
        "smiles": "FISCHER:D-Arabinose",
        "correctAnswer": "D-Arabinose"
      }
    ],
    "match_options": [
      "D-Altrose",
      "D-Idose",
      "D-Mannose",
      "D-Allose",
      "D-Talose",
      "D-Lyxose",
      "D-Arabinose",
      "D-Ribose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Lyxose.\nSugar 2: D-Mannose.\nSugar 3: D-Altrose.\nSugar 4: D-Arabinose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q45",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Idose",
        "correctAnswer": "D-Idose"
      },
      {
        "smiles": "FISCHER:D-Allose",
        "correctAnswer": "D-Allose"
      },
      {
        "smiles": "FISCHER:D-Gulose",
        "correctAnswer": "D-Gulose"
      },
      {
        "smiles": "FISCHER:D-Lyxose",
        "correctAnswer": "D-Lyxose"
      }
    ],
    "match_options": [
      "D-Lyxose",
      "D-Mannose",
      "D-Glucose",
      "D-Ribose",
      "D-Idose",
      "D-Altrose",
      "D-Gulose",
      "D-Allose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Idose.\nSugar 2: D-Allose.\nSugar 3: D-Gulose.\nSugar 4: D-Lyxose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q46",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:beta-D-Altrose",
        "correctAnswer": "β-D-Altropyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Glucose",
        "correctAnswer": "β-D-Glucopyranose"
      }
    ],
    "match_options": [
      "α-D-Gulopyranose",
      "α-D-Mannopyranose",
      "β-D-Glucopyranose",
      "β-D-Galactopyranose",
      "β-D-Talopyranose",
      "β-D-Altropyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: β-D-Altropyranose.\nSugar 2: β-D-Glucopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q47",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Allose",
        "correctAnswer": "D-Allose"
      },
      {
        "smiles": "FISCHER:D-Idose",
        "correctAnswer": "D-Idose"
      },
      {
        "smiles": "FISCHER:D-Arabinose",
        "correctAnswer": "D-Arabinose"
      },
      {
        "smiles": "FISCHER:D-Altrose",
        "correctAnswer": "D-Altrose"
      }
    ],
    "match_options": [
      "D-Ribose",
      "D-Idose",
      "D-Galactose",
      "D-Allose",
      "D-Mannose",
      "D-Altrose",
      "D-Arabinose",
      "D-Glucose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Allose.\nSugar 2: D-Idose.\nSugar 3: D-Arabinose.\nSugar 4: D-Altrose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q48",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:beta-D-Idose",
        "correctAnswer": "β-D-Idopyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Talose",
        "correctAnswer": "β-D-Talopyranose"
      }
    ],
    "match_options": [
      "β-D-Galactopyranose",
      "β-D-Idopyranose",
      "β-D-Talopyranose",
      "α-D-Mannopyranose",
      "β-D-Mannopyranose",
      "β-D-Altropyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: β-D-Idopyranose.\nSugar 2: β-D-Talopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q49",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Mannose",
        "correctAnswer": "D-Mannose"
      },
      {
        "smiles": "FISCHER:D-Altrose",
        "correctAnswer": "D-Altrose"
      },
      {
        "smiles": "FISCHER:D-Arabinose",
        "correctAnswer": "D-Arabinose"
      },
      {
        "smiles": "FISCHER:D-Glucose",
        "correctAnswer": "D-Glucose"
      }
    ],
    "match_options": [
      "D-Idose",
      "D-Arabinose",
      "D-Altrose",
      "D-Lyxose",
      "D-Xylose",
      "D-Glucose",
      "D-Talose",
      "D-Mannose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Mannose.\nSugar 2: D-Altrose.\nSugar 3: D-Arabinose.\nSugar 4: D-Glucose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q50",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:beta-D-Talose",
        "correctAnswer": "β-D-Talopyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Mannose",
        "correctAnswer": "β-D-Mannopyranose"
      }
    ],
    "match_options": [
      "β-D-Allopyranose",
      "β-D-Talopyranose",
      "β-D-Altropyranose",
      "β-D-Idopyranose",
      "β-D-Mannopyranose",
      "α-D-Idopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: β-D-Talopyranose.\nSugar 2: β-D-Mannopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q51",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Xylose",
        "correctAnswer": "D-Xylose"
      },
      {
        "smiles": "FISCHER:D-Arabinose",
        "correctAnswer": "D-Arabinose"
      },
      {
        "smiles": "FISCHER:D-Allose",
        "correctAnswer": "D-Allose"
      },
      {
        "smiles": "FISCHER:D-Galactose",
        "correctAnswer": "D-Galactose"
      }
    ],
    "match_options": [
      "D-Ribose",
      "D-Gulose",
      "D-Idose",
      "D-Xylose",
      "D-Arabinose",
      "D-Allose",
      "D-Glucose",
      "D-Galactose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Xylose.\nSugar 2: D-Arabinose.\nSugar 3: D-Allose.\nSugar 4: D-Galactose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q52",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:beta-D-Allose",
        "correctAnswer": "β-D-Allopyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Galactose",
        "correctAnswer": "β-D-Galactopyranose"
      }
    ],
    "match_options": [
      "β-D-Talopyranose",
      "β-D-Altropyranose",
      "α-D-Idopyranose",
      "β-D-Allopyranose",
      "α-D-Altropyranose",
      "β-D-Galactopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: β-D-Allopyranose.\nSugar 2: β-D-Galactopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q53",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Idose",
        "correctAnswer": "D-Idose"
      },
      {
        "smiles": "FISCHER:D-Galactose",
        "correctAnswer": "D-Galactose"
      },
      {
        "smiles": "FISCHER:D-Lyxose",
        "correctAnswer": "D-Lyxose"
      },
      {
        "smiles": "FISCHER:D-Talose",
        "correctAnswer": "D-Talose"
      }
    ],
    "match_options": [
      "D-Arabinose",
      "D-Ribose",
      "D-Talose",
      "D-Idose",
      "D-Xylose",
      "D-Altrose",
      "D-Lyxose",
      "D-Galactose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Idose.\nSugar 2: D-Galactose.\nSugar 3: D-Lyxose.\nSugar 4: D-Talose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q54",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:beta-D-Galactose",
        "correctAnswer": "β-D-Galactopyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Talose",
        "correctAnswer": "β-D-Talopyranose"
      }
    ],
    "match_options": [
      "β-D-Allopyranose",
      "β-D-Galactopyranose",
      "β-D-Glucopyranose",
      "β-D-Talopyranose",
      "β-D-Mannopyranose",
      "α-D-Idopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: β-D-Galactopyranose.\nSugar 2: β-D-Talopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q55",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Mannose",
        "correctAnswer": "D-Mannose"
      },
      {
        "smiles": "FISCHER:D-Glucose",
        "correctAnswer": "D-Glucose"
      },
      {
        "smiles": "FISCHER:D-Talose",
        "correctAnswer": "D-Talose"
      },
      {
        "smiles": "FISCHER:D-Ribose",
        "correctAnswer": "D-Ribose"
      }
    ],
    "match_options": [
      "D-Ribose",
      "D-Mannose",
      "D-Gulose",
      "D-Lyxose",
      "D-Talose",
      "D-Glucose",
      "D-Galactose",
      "D-Arabinose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Mannose.\nSugar 2: D-Glucose.\nSugar 3: D-Talose.\nSugar 4: D-Ribose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q57",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Gulose",
        "correctAnswer": "D-Gulose"
      },
      {
        "smiles": "FISCHER:D-Allose",
        "correctAnswer": "D-Allose"
      },
      {
        "smiles": "FISCHER:D-Glucose",
        "correctAnswer": "D-Glucose"
      },
      {
        "smiles": "FISCHER:D-Lyxose",
        "correctAnswer": "D-Lyxose"
      }
    ],
    "match_options": [
      "D-Arabinose",
      "D-Galactose",
      "D-Gulose",
      "D-Ribose",
      "D-Xylose",
      "D-Lyxose",
      "D-Glucose",
      "D-Allose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Gulose.\nSugar 2: D-Allose.\nSugar 3: D-Glucose.\nSugar 4: D-Lyxose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q58",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:beta-D-Mannose",
        "correctAnswer": "β-D-Mannopyranose"
      },
      {
        "smiles": "HAWORTH:alpha-D-Talose",
        "correctAnswer": "α-D-Talopyranose"
      }
    ],
    "match_options": [
      "β-D-Mannopyranose",
      "β-D-Glucopyranose",
      "α-D-Gulopyranose",
      "β-D-Talopyranose",
      "β-D-Idopyranose",
      "α-D-Talopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: β-D-Mannopyranose.\nSugar 2: α-D-Talopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q59",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Gulose",
        "correctAnswer": "D-Gulose"
      },
      {
        "smiles": "FISCHER:D-Lyxose",
        "correctAnswer": "D-Lyxose"
      },
      {
        "smiles": "FISCHER:D-Xylose",
        "correctAnswer": "D-Xylose"
      },
      {
        "smiles": "FISCHER:D-Ribose",
        "correctAnswer": "D-Ribose"
      }
    ],
    "match_options": [
      "D-Arabinose",
      "D-Glucose",
      "D-Allose",
      "D-Ribose",
      "D-Lyxose",
      "D-Xylose",
      "D-Idose",
      "D-Gulose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Gulose.\nSugar 2: D-Lyxose.\nSugar 3: D-Xylose.\nSugar 4: D-Ribose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q60",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:alpha-D-Gulose",
        "correctAnswer": "α-D-Gulopyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Allose",
        "correctAnswer": "β-D-Allopyranose"
      }
    ],
    "match_options": [
      "β-D-Allopyranose",
      "α-D-Mannopyranose",
      "α-D-Idopyranose",
      "α-D-Galactopyranose",
      "α-D-Gulopyranose",
      "β-D-Galactopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: α-D-Gulopyranose.\nSugar 2: β-D-Allopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q61",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Mannose",
        "correctAnswer": "D-Mannose"
      },
      {
        "smiles": "FISCHER:D-Talose",
        "correctAnswer": "D-Talose"
      },
      {
        "smiles": "FISCHER:D-Xylose",
        "correctAnswer": "D-Xylose"
      },
      {
        "smiles": "FISCHER:D-Allose",
        "correctAnswer": "D-Allose"
      }
    ],
    "match_options": [
      "D-Xylose",
      "D-Arabinose",
      "D-Altrose",
      "D-Allose",
      "D-Mannose",
      "D-Lyxose",
      "D-Talose",
      "D-Galactose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Mannose.\nSugar 2: D-Talose.\nSugar 3: D-Xylose.\nSugar 4: D-Allose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q62",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:alpha-D-Altrose",
        "correctAnswer": "α-D-Altropyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Gulose",
        "correctAnswer": "β-D-Gulopyranose"
      }
    ],
    "match_options": [
      "α-D-Talopyranose",
      "β-D-Mannopyranose",
      "β-D-Altropyranose",
      "β-D-Gulopyranose",
      "α-D-Altropyranose",
      "α-D-Idopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: α-D-Altropyranose.\nSugar 2: β-D-Gulopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q63",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Ribose",
        "correctAnswer": "D-Ribose"
      },
      {
        "smiles": "FISCHER:D-Lyxose",
        "correctAnswer": "D-Lyxose"
      },
      {
        "smiles": "FISCHER:D-Idose",
        "correctAnswer": "D-Idose"
      },
      {
        "smiles": "FISCHER:D-Arabinose",
        "correctAnswer": "D-Arabinose"
      }
    ],
    "match_options": [
      "D-Glucose",
      "D-Idose",
      "D-Ribose",
      "D-Gulose",
      "D-Allose",
      "D-Lyxose",
      "D-Arabinose",
      "D-Xylose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Ribose.\nSugar 2: D-Lyxose.\nSugar 3: D-Idose.\nSugar 4: D-Arabinose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q64",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:alpha-D-Gulose",
        "correctAnswer": "α-D-Gulopyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Talose",
        "correctAnswer": "β-D-Talopyranose"
      }
    ],
    "match_options": [
      "α-D-Galactopyranose",
      "α-D-Glucopyranose",
      "α-D-Mannopyranose",
      "α-D-Gulopyranose",
      "α-D-Allopyranose",
      "β-D-Talopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: α-D-Gulopyranose.\nSugar 2: β-D-Talopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q65",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Lyxose",
        "correctAnswer": "D-Lyxose"
      },
      {
        "smiles": "FISCHER:D-Galactose",
        "correctAnswer": "D-Galactose"
      },
      {
        "smiles": "FISCHER:D-Altrose",
        "correctAnswer": "D-Altrose"
      },
      {
        "smiles": "FISCHER:D-Allose",
        "correctAnswer": "D-Allose"
      }
    ],
    "match_options": [
      "D-Lyxose",
      "D-Talose",
      "D-Xylose",
      "D-Glucose",
      "D-Galactose",
      "D-Altrose",
      "D-Ribose",
      "D-Allose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Lyxose.\nSugar 2: D-Galactose.\nSugar 3: D-Altrose.\nSugar 4: D-Allose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q66",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:alpha-D-Idose",
        "correctAnswer": "α-D-Idopyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Glucose",
        "correctAnswer": "β-D-Glucopyranose"
      }
    ],
    "match_options": [
      "β-D-Allopyranose",
      "β-D-Gulopyranose",
      "α-D-Idopyranose",
      "β-D-Glucopyranose",
      "β-D-Idopyranose",
      "α-D-Allopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: α-D-Idopyranose.\nSugar 2: β-D-Glucopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q67",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Mannose",
        "correctAnswer": "D-Mannose"
      },
      {
        "smiles": "FISCHER:D-Altrose",
        "correctAnswer": "D-Altrose"
      },
      {
        "smiles": "FISCHER:D-Xylose",
        "correctAnswer": "D-Xylose"
      },
      {
        "smiles": "FISCHER:D-Galactose",
        "correctAnswer": "D-Galactose"
      }
    ],
    "match_options": [
      "D-Talose",
      "D-Mannose",
      "D-Xylose",
      "D-Glucose",
      "D-Allose",
      "D-Galactose",
      "D-Altrose",
      "D-Ribose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Mannose.\nSugar 2: D-Altrose.\nSugar 3: D-Xylose.\nSugar 4: D-Galactose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q68",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:alpha-D-Talose",
        "correctAnswer": "α-D-Talopyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Gulose",
        "correctAnswer": "β-D-Gulopyranose"
      }
    ],
    "match_options": [
      "β-D-Idopyranose",
      "α-D-Talopyranose",
      "β-D-Altropyranose",
      "β-D-Mannopyranose",
      "α-D-Altropyranose",
      "β-D-Gulopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: α-D-Talopyranose.\nSugar 2: β-D-Gulopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q69",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Galactose",
        "correctAnswer": "D-Galactose"
      },
      {
        "smiles": "FISCHER:D-Talose",
        "correctAnswer": "D-Talose"
      },
      {
        "smiles": "FISCHER:D-Gulose",
        "correctAnswer": "D-Gulose"
      },
      {
        "smiles": "FISCHER:D-Xylose",
        "correctAnswer": "D-Xylose"
      }
    ],
    "match_options": [
      "D-Galactose",
      "D-Xylose",
      "D-Talose",
      "D-Idose",
      "D-Arabinose",
      "D-Allose",
      "D-Gulose",
      "D-Altrose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Galactose.\nSugar 2: D-Talose.\nSugar 3: D-Gulose.\nSugar 4: D-Xylose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q71",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Glucose",
        "correctAnswer": "D-Glucose"
      },
      {
        "smiles": "FISCHER:D-Galactose",
        "correctAnswer": "D-Galactose"
      },
      {
        "smiles": "FISCHER:D-Talose",
        "correctAnswer": "D-Talose"
      },
      {
        "smiles": "FISCHER:D-Allose",
        "correctAnswer": "D-Allose"
      }
    ],
    "match_options": [
      "D-Glucose",
      "D-Galactose",
      "D-Mannose",
      "D-Ribose",
      "D-Altrose",
      "D-Allose",
      "D-Lyxose",
      "D-Talose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Glucose.\nSugar 2: D-Galactose.\nSugar 3: D-Talose.\nSugar 4: D-Allose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q72",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:beta-D-Mannose",
        "correctAnswer": "β-D-Mannopyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Allose",
        "correctAnswer": "β-D-Allopyranose"
      }
    ],
    "match_options": [
      "β-D-Altropyranose",
      "α-D-Mannopyranose",
      "β-D-Galactopyranose",
      "β-D-Mannopyranose",
      "β-D-Allopyranose",
      "α-D-Altropyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: β-D-Mannopyranose.\nSugar 2: β-D-Allopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q73",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Idose",
        "correctAnswer": "D-Idose"
      },
      {
        "smiles": "FISCHER:D-Allose",
        "correctAnswer": "D-Allose"
      },
      {
        "smiles": "FISCHER:D-Talose",
        "correctAnswer": "D-Talose"
      },
      {
        "smiles": "FISCHER:D-Galactose",
        "correctAnswer": "D-Galactose"
      }
    ],
    "match_options": [
      "D-Mannose",
      "D-Idose",
      "D-Talose",
      "D-Ribose",
      "D-Gulose",
      "D-Glucose",
      "D-Allose",
      "D-Galactose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Idose.\nSugar 2: D-Allose.\nSugar 3: D-Talose.\nSugar 4: D-Galactose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q75",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Altrose",
        "correctAnswer": "D-Altrose"
      },
      {
        "smiles": "FISCHER:D-Mannose",
        "correctAnswer": "D-Mannose"
      },
      {
        "smiles": "FISCHER:D-Arabinose",
        "correctAnswer": "D-Arabinose"
      },
      {
        "smiles": "FISCHER:D-Lyxose",
        "correctAnswer": "D-Lyxose"
      }
    ],
    "match_options": [
      "D-Arabinose",
      "D-Lyxose",
      "D-Xylose",
      "D-Galactose",
      "D-Allose",
      "D-Mannose",
      "D-Ribose",
      "D-Altrose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Altrose.\nSugar 2: D-Mannose.\nSugar 3: D-Arabinose.\nSugar 4: D-Lyxose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q76",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:beta-D-Mannose",
        "correctAnswer": "β-D-Mannopyranose"
      },
      {
        "smiles": "HAWORTH:alpha-D-Glucose",
        "correctAnswer": "α-D-Glucopyranose"
      }
    ],
    "match_options": [
      "α-D-Glucopyranose",
      "β-D-Gulopyranose",
      "β-D-Talopyranose",
      "β-D-Altropyranose",
      "β-D-Mannopyranose",
      "α-D-Idopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: β-D-Mannopyranose.\nSugar 2: α-D-Glucopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q77",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Xylose",
        "correctAnswer": "D-Xylose"
      },
      {
        "smiles": "FISCHER:D-Mannose",
        "correctAnswer": "D-Mannose"
      },
      {
        "smiles": "FISCHER:D-Arabinose",
        "correctAnswer": "D-Arabinose"
      },
      {
        "smiles": "FISCHER:D-Glucose",
        "correctAnswer": "D-Glucose"
      }
    ],
    "match_options": [
      "D-Mannose",
      "D-Idose",
      "D-Xylose",
      "D-Glucose",
      "D-Talose",
      "D-Arabinose",
      "D-Lyxose",
      "D-Allose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Xylose.\nSugar 2: D-Mannose.\nSugar 3: D-Arabinose.\nSugar 4: D-Glucose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q78",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:alpha-D-Altrose",
        "correctAnswer": "α-D-Altropyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Glucose",
        "correctAnswer": "β-D-Glucopyranose"
      }
    ],
    "match_options": [
      "β-D-Galactopyranose",
      "α-D-Altropyranose",
      "α-D-Idopyranose",
      "β-D-Glucopyranose",
      "β-D-Mannopyranose",
      "α-D-Gulopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: α-D-Altropyranose.\nSugar 2: β-D-Glucopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q79",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Gulose",
        "correctAnswer": "D-Gulose"
      },
      {
        "smiles": "FISCHER:D-Glucose",
        "correctAnswer": "D-Glucose"
      },
      {
        "smiles": "FISCHER:D-Mannose",
        "correctAnswer": "D-Mannose"
      },
      {
        "smiles": "FISCHER:D-Ribose",
        "correctAnswer": "D-Ribose"
      }
    ],
    "match_options": [
      "D-Ribose",
      "D-Glucose",
      "D-Lyxose",
      "D-Arabinose",
      "D-Gulose",
      "D-Xylose",
      "D-Talose",
      "D-Mannose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Gulose.\nSugar 2: D-Glucose.\nSugar 3: D-Mannose.\nSugar 4: D-Ribose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q80",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:alpha-D-Galactose",
        "correctAnswer": "α-D-Galactopyranose"
      },
      {
        "smiles": "HAWORTH:alpha-D-Glucose",
        "correctAnswer": "α-D-Glucopyranose"
      }
    ],
    "match_options": [
      "β-D-Altropyranose",
      "α-D-Galactopyranose",
      "β-D-Glucopyranose",
      "β-D-Mannopyranose",
      "α-D-Allopyranose",
      "α-D-Glucopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: α-D-Galactopyranose.\nSugar 2: α-D-Glucopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q81",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Idose",
        "correctAnswer": "D-Idose"
      },
      {
        "smiles": "FISCHER:D-Arabinose",
        "correctAnswer": "D-Arabinose"
      },
      {
        "smiles": "FISCHER:D-Glucose",
        "correctAnswer": "D-Glucose"
      },
      {
        "smiles": "FISCHER:D-Ribose",
        "correctAnswer": "D-Ribose"
      }
    ],
    "match_options": [
      "D-Arabinose",
      "D-Gulose",
      "D-Idose",
      "D-Glucose",
      "D-Allose",
      "D-Ribose",
      "D-Altrose",
      "D-Talose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Idose.\nSugar 2: D-Arabinose.\nSugar 3: D-Glucose.\nSugar 4: D-Ribose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q83",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Xylose",
        "correctAnswer": "D-Xylose"
      },
      {
        "smiles": "FISCHER:D-Altrose",
        "correctAnswer": "D-Altrose"
      },
      {
        "smiles": "FISCHER:D-Arabinose",
        "correctAnswer": "D-Arabinose"
      },
      {
        "smiles": "FISCHER:D-Ribose",
        "correctAnswer": "D-Ribose"
      }
    ],
    "match_options": [
      "D-Mannose",
      "D-Altrose",
      "D-Allose",
      "D-Xylose",
      "D-Arabinose",
      "D-Ribose",
      "D-Glucose",
      "D-Gulose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Xylose.\nSugar 2: D-Altrose.\nSugar 3: D-Arabinose.\nSugar 4: D-Ribose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q84",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:alpha-D-Galactose",
        "correctAnswer": "α-D-Galactopyranose"
      },
      {
        "smiles": "HAWORTH:alpha-D-Mannose",
        "correctAnswer": "α-D-Mannopyranose"
      }
    ],
    "match_options": [
      "α-D-Allopyranose",
      "β-D-Mannopyranose",
      "α-D-Mannopyranose",
      "α-D-Gulopyranose",
      "α-D-Galactopyranose",
      "β-D-Gulopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: α-D-Galactopyranose.\nSugar 2: α-D-Mannopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q85",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Altrose",
        "correctAnswer": "D-Altrose"
      },
      {
        "smiles": "FISCHER:D-Allose",
        "correctAnswer": "D-Allose"
      },
      {
        "smiles": "FISCHER:D-Galactose",
        "correctAnswer": "D-Galactose"
      },
      {
        "smiles": "FISCHER:D-Idose",
        "correctAnswer": "D-Idose"
      }
    ],
    "match_options": [
      "D-Ribose",
      "D-Arabinose",
      "D-Xylose",
      "D-Idose",
      "D-Altrose",
      "D-Galactose",
      "D-Gulose",
      "D-Allose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Altrose.\nSugar 2: D-Allose.\nSugar 3: D-Galactose.\nSugar 4: D-Idose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q86",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:alpha-D-Mannose",
        "correctAnswer": "α-D-Mannopyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Mannose",
        "correctAnswer": "β-D-Mannopyranose"
      }
    ],
    "match_options": [
      "β-D-Mannopyranose",
      "α-D-Altropyranose",
      "α-D-Mannopyranose",
      "α-D-Talopyranose",
      "α-D-Galactopyranose",
      "α-D-Idopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: α-D-Mannopyranose.\nSugar 2: β-D-Mannopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q87",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Lyxose",
        "correctAnswer": "D-Lyxose"
      },
      {
        "smiles": "FISCHER:D-Ribose",
        "correctAnswer": "D-Ribose"
      },
      {
        "smiles": "FISCHER:D-Mannose",
        "correctAnswer": "D-Mannose"
      },
      {
        "smiles": "FISCHER:D-Xylose",
        "correctAnswer": "D-Xylose"
      }
    ],
    "match_options": [
      "D-Talose",
      "D-Glucose",
      "D-Ribose",
      "D-Idose",
      "D-Xylose",
      "D-Allose",
      "D-Lyxose",
      "D-Mannose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Lyxose.\nSugar 2: D-Ribose.\nSugar 3: D-Mannose.\nSugar 4: D-Xylose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q89",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Galactose",
        "correctAnswer": "D-Galactose"
      },
      {
        "smiles": "FISCHER:D-Gulose",
        "correctAnswer": "D-Gulose"
      },
      {
        "smiles": "FISCHER:D-Lyxose",
        "correctAnswer": "D-Lyxose"
      },
      {
        "smiles": "FISCHER:D-Altrose",
        "correctAnswer": "D-Altrose"
      }
    ],
    "match_options": [
      "D-Gulose",
      "D-Ribose",
      "D-Arabinose",
      "D-Galactose",
      "D-Idose",
      "D-Talose",
      "D-Altrose",
      "D-Lyxose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Galactose.\nSugar 2: D-Gulose.\nSugar 3: D-Lyxose.\nSugar 4: D-Altrose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q90",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:alpha-D-Galactose",
        "correctAnswer": "α-D-Galactopyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Idose",
        "correctAnswer": "β-D-Idopyranose"
      }
    ],
    "match_options": [
      "β-D-Idopyranose",
      "α-D-Galactopyranose",
      "β-D-Altropyranose",
      "α-D-Gulopyranose",
      "α-D-Altropyranose",
      "α-D-Glucopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: α-D-Galactopyranose.\nSugar 2: β-D-Idopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q91",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Galactose",
        "correctAnswer": "D-Galactose"
      },
      {
        "smiles": "FISCHER:D-Ribose",
        "correctAnswer": "D-Ribose"
      },
      {
        "smiles": "FISCHER:D-Lyxose",
        "correctAnswer": "D-Lyxose"
      },
      {
        "smiles": "FISCHER:D-Gulose",
        "correctAnswer": "D-Gulose"
      }
    ],
    "match_options": [
      "D-Talose",
      "D-Ribose",
      "D-Altrose",
      "D-Mannose",
      "D-Lyxose",
      "D-Galactose",
      "D-Gulose",
      "D-Glucose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Galactose.\nSugar 2: D-Ribose.\nSugar 3: D-Lyxose.\nSugar 4: D-Gulose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q92",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:beta-D-Altrose",
        "correctAnswer": "β-D-Altropyranose"
      },
      {
        "smiles": "HAWORTH:beta-D-Talose",
        "correctAnswer": "β-D-Talopyranose"
      }
    ],
    "match_options": [
      "β-D-Mannopyranose",
      "β-D-Gulopyranose",
      "β-D-Altropyranose",
      "β-D-Talopyranose",
      "α-D-Allopyranose",
      "α-D-Idopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: β-D-Altropyranose.\nSugar 2: β-D-Talopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q93",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Idose",
        "correctAnswer": "D-Idose"
      },
      {
        "smiles": "FISCHER:D-Allose",
        "correctAnswer": "D-Allose"
      },
      {
        "smiles": "FISCHER:D-Altrose",
        "correctAnswer": "D-Altrose"
      },
      {
        "smiles": "FISCHER:D-Lyxose",
        "correctAnswer": "D-Lyxose"
      }
    ],
    "match_options": [
      "D-Gulose",
      "D-Altrose",
      "D-Galactose",
      "D-Xylose",
      "D-Allose",
      "D-Idose",
      "D-Mannose",
      "D-Lyxose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Idose.\nSugar 2: D-Allose.\nSugar 3: D-Altrose.\nSugar 4: D-Lyxose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q94",
    "topic": "Carbohydrates & Haworth Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:beta-D-Talose",
        "correctAnswer": "β-D-Talopyranose"
      },
      {
        "smiles": "HAWORTH:alpha-D-Galactose",
        "correctAnswer": "α-D-Galactopyranose"
      }
    ],
    "match_options": [
      "α-D-Gulopyranose",
      "β-D-Allopyranose",
      "α-D-Altropyranose",
      "β-D-Talopyranose",
      "α-D-Glucopyranose",
      "α-D-Galactopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
      "process": "Sugar 1: β-D-Talopyranose.\nSugar 2: α-D-Galactopyranose.",
      "result": "All Haworth structures matched correctly."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q95",
    "topic": "Carbohydrates & Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown.",
    "interaction_type": "matching-grid",
    "grid_columns": 4,
    "match_items": [
      {
        "smiles": "FISCHER:D-Arabinose",
        "correctAnswer": "D-Arabinose"
      },
      {
        "smiles": "FISCHER:D-Lyxose",
        "correctAnswer": "D-Lyxose"
      },
      {
        "smiles": "FISCHER:D-Talose",
        "correctAnswer": "D-Talose"
      },
      {
        "smiles": "FISCHER:D-Glucose",
        "correctAnswer": "D-Glucose"
      }
    ],
    "match_options": [
      "D-Glucose",
      "D-Altrose",
      "D-Arabinose",
      "D-Gulose",
      "D-Talose",
      "D-Ribose",
      "D-Idose",
      "D-Lyxose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect carbohydrate matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
      "process": "Sugar 1: D-Arabinose.\nSugar 2: D-Lyxose.\nSugar 3: D-Talose.\nSugar 4: D-Glucose.",
      "result": "All carbohydrate configurations matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  }
];
