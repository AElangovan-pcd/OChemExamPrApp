// OChemStudyBuddy - McMurry Chapter 21
// Author: A. Elangovan, PhD
var CH21_QUESTIONS = [
  {
    "question_id": "ch21_q_dynamic_acyl_substitution",
    "topic": "Nucleophilic Acyl Substitutions",
    "difficulty_level": "Hard",
    "question_text": "Match each carboxylic acid derivative to its relative reactivity towards nucleophiles.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(=O)Cl",
        "correctAnswer": "Most Reactive (Acid Chloride)"
      },
      {
        "smiles": "CC(=O)OC(C)=O",
        "correctAnswer": "Highly Reactive (Anhydride)"
      },
      {
        "smiles": "CC(=O)OC",
        "correctAnswer": "Moderately Reactive (Ester)"
      },
      {
        "smiles": "CC(=O)N",
        "correctAnswer": "Least Reactive (Amide)"
      }
    ],
    "match_options": [
      "Most Reactive (Acid Chloride)",
      "Highly Reactive (Anhydride)",
      "Moderately Reactive (Ester)",
      "Least Reactive (Amide)"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect derivative reactivity mapping",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Assessing leaving group ability and resonance stabilization in acyl derivatives.",
      "process": "Chloride is an excellent leaving group with minimal resonance: most reactive. Carboxylate in anhydrides is good. Alkoxide in esters is poor. Amide nitrogen donates electron density strongly via resonance, stabilizing the carbonyl: least reactive.",
      "result": "Reactivity order: Acid Chloride > Anhydride > Ester > Amide."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q1",
    "topic": "Fischer Esterification",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCO"
      ],
      "reagents": "H+",
      "conditions": "heat, Dean-Stark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(C)(O)C",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Fischer Esterification.",
      "process": "Acid-catalyzed Fischer esterification of acetic acid and ethanol yields ethyl acetate.",
      "result": "The product is CCOC(C)=O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q3",
    "topic": "Fischer Esterification",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCO"
      ],
      "reagents": "H+",
      "conditions": "heat, Dean-Stark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC1OC1",
        "smiles": "CC1OC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Fischer Esterification.",
      "process": "Acid-catalyzed Fischer esterification of acetic acid and ethanol yields ethyl acetate.",
      "result": "The product is CCOC(C)=O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q4",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "O=CC1CC=CCC1",
        "smiles": "O=CC1CC=CCC1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC(O)C",
        "smiles": "CC(O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(C)(O)C",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q5",
    "topic": "Fischer Esterification",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCO"
      ],
      "reagents": "H+",
      "conditions": "heat, Dean-Stark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC1OC1",
        "smiles": "CC1OC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CCC(=O)O",
        "smiles": "CCC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Fischer Esterification.",
      "process": "Acid-catalyzed Fischer esterification of acetic acid and ethanol yields ethyl acetate.",
      "result": "The product is CCOC(C)=O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q6",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCCBr",
        "smiles": "CCCBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q7",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "O=CC1CC=CCC1",
        "smiles": "O=CC1CC=CCC1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CCO",
        "smiles": "CCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC=C",
        "smiles": "CC=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q8",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(C)(O)C",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CCC(=O)O",
        "smiles": "CCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "CC(Br)C(Br)",
        "smiles": "CC(Br)C(Br)",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q10",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CC(Br)C(Br)",
        "smiles": "CC(Br)C(Br)",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(O)C(Br)",
        "smiles": "CC(O)C(Br)",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q11",
    "topic": "Fischer Esterification",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCO"
      ],
      "reagents": "H+",
      "conditions": "heat, Dean-Stark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CCC(=O)O",
        "smiles": "CCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Fischer Esterification.",
      "process": "Acid-catalyzed Fischer esterification of acetic acid and ethanol yields ethyl acetate.",
      "result": "The product is CCOC(C)=O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q14",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCCO",
        "smiles": "CCCO",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC(O)C",
        "smiles": "CC(O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CCCBr",
        "smiles": "CCCBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q17",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC1OC1",
        "smiles": "CC1OC1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC(C#N)C",
        "smiles": "CC(C#N)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q21",
    "topic": "Fischer Esterification",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCO"
      ],
      "reagents": "H+",
      "conditions": "heat, Dean-Stark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(C)=C",
        "smiles": "CC(C)=C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CCO",
        "smiles": "CCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Fischer Esterification.",
      "process": "Acid-catalyzed Fischer esterification of acetic acid and ethanol yields ethyl acetate.",
      "result": "The product is CCOC(C)=O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q23",
    "topic": "Fischer Esterification",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCO"
      ],
      "reagents": "H+",
      "conditions": "heat, Dean-Stark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(C#N)C",
        "smiles": "CC(C#N)C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CCCO",
        "smiles": "CCCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC=C",
        "smiles": "CC=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Fischer Esterification.",
      "process": "Acid-catalyzed Fischer esterification of acetic acid and ethanol yields ethyl acetate.",
      "result": "The product is CCOC(C)=O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q24",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(O)c1ccccc1",
        "smiles": "CC(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CCCO",
        "smiles": "CCCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "C(Br)CBr",
        "smiles": "C(Br)CBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q26",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(O)c1ccccc1",
        "smiles": "CC(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(C)=C",
        "smiles": "CC(C)=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q28",
    "topic": "Fischer Esterification",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCO"
      ],
      "reagents": "H+",
      "conditions": "heat, Dean-Stark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(C)(O)C",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "C(Br)CBr",
        "smiles": "C(Br)CBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "C1CC=CCC1",
        "smiles": "C1CC=CCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Fischer Esterification.",
      "process": "Acid-catalyzed Fischer esterification of acetic acid and ethanol yields ethyl acetate.",
      "result": "The product is CCOC(C)=O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q30",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CC(C)(O)C",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCCBr",
        "smiles": "CCCBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CCC",
        "smiles": "CCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q31",
    "topic": "Fischer Esterification",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCO"
      ],
      "reagents": "H+",
      "conditions": "heat, Dean-Stark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(Br)C(Br)",
        "smiles": "CC(Br)C(Br)",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "COCC",
        "smiles": "COCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "CC(O)CC=O",
        "smiles": "CC(O)CC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Fischer Esterification.",
      "process": "Acid-catalyzed Fischer esterification of acetic acid and ethanol yields ethyl acetate.",
      "result": "The product is CCOC(C)=O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q34",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCC(=O)O",
        "smiles": "CCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(O)c1ccccc1",
        "smiles": "CC(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "CC(C)(O)C",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q35",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(C)=O",
        "smiles": "CC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CCCBr",
        "smiles": "CCCBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "CC(C#N)C",
        "smiles": "CC(C#N)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q36",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(O)C(Br)",
        "smiles": "CC(O)C(Br)",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(O)C",
        "smiles": "CC(O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q39",
    "topic": "Fischer Esterification",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCO"
      ],
      "reagents": "H+",
      "conditions": "heat, Dean-Stark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "O=CC1CC=CCC1",
        "smiles": "O=CC1CC=CCC1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC1OC1",
        "smiles": "CC1OC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "CC(O)C(Br)",
        "smiles": "CC(O)C(Br)",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Fischer Esterification.",
      "process": "Acid-catalyzed Fischer esterification of acetic acid and ethanol yields ethyl acetate.",
      "result": "The product is CCOC(C)=O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q41",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "C1CC=CCC1",
        "smiles": "C1CC=CCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(C)=C",
        "smiles": "CC(C)=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q42",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "C(Br)CBr",
        "smiles": "C(Br)CBr",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC(Br)C(Br)",
        "smiles": "CC(Br)C(Br)",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q43",
    "topic": "Fischer Esterification",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCO"
      ],
      "reagents": "H+",
      "conditions": "heat, Dean-Stark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "C(Br)CBr",
        "smiles": "C(Br)CBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(Br)(C)C",
        "smiles": "CC(Br)(C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(O)C(Br)",
        "smiles": "CC(O)C(Br)",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Fischer Esterification.",
      "process": "Acid-catalyzed Fischer esterification of acetic acid and ethanol yields ethyl acetate.",
      "result": "The product is CCOC(C)=O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q44",
    "topic": "Fischer Esterification",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCO"
      ],
      "reagents": "H+",
      "conditions": "heat, Dean-Stark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CC1OC1",
        "smiles": "CC1OC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(Br)(C)C",
        "smiles": "CC(Br)(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Fischer Esterification.",
      "process": "Acid-catalyzed Fischer esterification of acetic acid and ethanol yields ethyl acetate.",
      "result": "The product is CCOC(C)=O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q45",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(C)=O",
        "smiles": "CC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CCO",
        "smiles": "CCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "C(Br)CBr",
        "smiles": "C(Br)CBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q46",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC1OC1",
        "smiles": "CC1OC1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "COCC",
        "smiles": "COCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC=O",
        "smiles": "CC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q47",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(O)C",
        "smiles": "CC(O)C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "C(Br)CBr",
        "smiles": "C(Br)CBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "CC=O",
        "smiles": "CC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q49",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(Br)C(Br)",
        "smiles": "CC(Br)C(Br)",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "COCC",
        "smiles": "COCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q50",
    "topic": "Fischer Esterification",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCO"
      ],
      "reagents": "H+",
      "conditions": "heat, Dean-Stark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CCC=O",
        "smiles": "CCC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(C)(O)C",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CCO",
        "smiles": "CCO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Fischer Esterification.",
      "process": "Acid-catalyzed Fischer esterification of acetic acid and ethanol yields ethyl acetate.",
      "result": "The product is CCOC(C)=O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q51",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CC=O",
        "smiles": "CC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCO",
        "smiles": "CCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q52",
    "topic": "Fischer Esterification",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCO"
      ],
      "reagents": "H+",
      "conditions": "heat, Dean-Stark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC1OC1",
        "smiles": "CC1OC1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(O)c1ccccc1",
        "smiles": "CC(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(C#N)C",
        "smiles": "CC(C#N)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Fischer Esterification.",
      "process": "Acid-catalyzed Fischer esterification of acetic acid and ethanol yields ethyl acetate.",
      "result": "The product is CCOC(C)=O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q54",
    "topic": "Fischer Esterification",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCO"
      ],
      "reagents": "H+",
      "conditions": "heat, Dean-Stark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "O=CC1CC=CCC1",
        "smiles": "O=CC1CC=CCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCO",
        "smiles": "CCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Fischer Esterification.",
      "process": "Acid-catalyzed Fischer esterification of acetic acid and ethanol yields ethyl acetate.",
      "result": "The product is CCOC(C)=O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q55",
    "topic": "Fischer Esterification",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCO"
      ],
      "reagents": "H+",
      "conditions": "heat, Dean-Stark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(Br)(C)C",
        "smiles": "CC(Br)(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Fischer Esterification.",
      "process": "Acid-catalyzed Fischer esterification of acetic acid and ethanol yields ethyl acetate.",
      "result": "The product is CCOC(C)=O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q58",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC=O",
        "smiles": "CC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(O)C",
        "smiles": "CC(O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q60",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CC=C",
        "smiles": "CC=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(O)c1ccccc1",
        "smiles": "CC(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(O)CC=O",
        "smiles": "CC(O)CC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q61",
    "topic": "Fischer Esterification",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCO"
      ],
      "reagents": "H+",
      "conditions": "heat, Dean-Stark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "C(Br)CBr",
        "smiles": "C(Br)CBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(Br)C(Br)",
        "smiles": "CC(Br)C(Br)",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(O)C(Br)",
        "smiles": "CC(O)C(Br)",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Fischer Esterification.",
      "process": "Acid-catalyzed Fischer esterification of acetic acid and ethanol yields ethyl acetate.",
      "result": "The product is CCOC(C)=O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q62",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "COCC",
        "smiles": "COCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q63",
    "topic": "Fischer Esterification",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCO"
      ],
      "reagents": "H+",
      "conditions": "heat, Dean-Stark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCC=O",
        "smiles": "CCC=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(O)C(Br)",
        "smiles": "CC(O)C(Br)",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(C)=C",
        "smiles": "CC(C)=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Fischer Esterification.",
      "process": "Acid-catalyzed Fischer esterification of acetic acid and ethanol yields ethyl acetate.",
      "result": "The product is CCOC(C)=O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q64",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(O)CC=O",
        "smiles": "CC(O)CC=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CCCO",
        "smiles": "CCCO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q65",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "COCC",
        "smiles": "COCC",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCC",
        "smiles": "CCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q67",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CCC",
        "smiles": "CCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q71",
    "topic": "Fischer Esterification",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCO"
      ],
      "reagents": "H+",
      "conditions": "heat, Dean-Stark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "C1CC=CCC1",
        "smiles": "C1CC=CCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "CC=O",
        "smiles": "CC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Fischer Esterification.",
      "process": "Acid-catalyzed Fischer esterification of acetic acid and ethanol yields ethyl acetate.",
      "result": "The product is CCOC(C)=O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q72",
    "topic": "Fischer Esterification",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCO"
      ],
      "reagents": "H+",
      "conditions": "heat, Dean-Stark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CC(O)C",
        "smiles": "CC(O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "O=CC1CC=CCC1",
        "smiles": "O=CC1CC=CCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Fischer Esterification.",
      "process": "Acid-catalyzed Fischer esterification of acetic acid and ethanol yields ethyl acetate.",
      "result": "The product is CCOC(C)=O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q73",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CC(O)c1ccccc1",
        "smiles": "CC(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "C1CC=CCC1",
        "smiles": "C1CC=CCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q74",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(C#N)C",
        "smiles": "CC(C#N)C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(C)=C",
        "smiles": "CC(C)=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q75",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC=C",
        "smiles": "CC=C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "C1CC=CCC1",
        "smiles": "C1CC=CCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q77",
    "topic": "Fischer Esterification",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCO"
      ],
      "reagents": "H+",
      "conditions": "heat, Dean-Stark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCC(=O)O",
        "smiles": "CCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(O)CC=O",
        "smiles": "CC(O)CC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "CC(Br)C(Br)",
        "smiles": "CC(Br)C(Br)",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Fischer Esterification.",
      "process": "Acid-catalyzed Fischer esterification of acetic acid and ethanol yields ethyl acetate.",
      "result": "The product is CCOC(C)=O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q78",
    "topic": "Fischer Esterification",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCO"
      ],
      "reagents": "H+",
      "conditions": "heat, Dean-Stark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "C(Br)CBr",
        "smiles": "C(Br)CBr",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC(O)C",
        "smiles": "CC(O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(O)C(Br)",
        "smiles": "CC(O)C(Br)",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Fischer Esterification.",
      "process": "Acid-catalyzed Fischer esterification of acetic acid and ethanol yields ethyl acetate.",
      "result": "The product is CCOC(C)=O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q79",
    "topic": "Fischer Esterification",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCO"
      ],
      "reagents": "H+",
      "conditions": "heat, Dean-Stark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCCO",
        "smiles": "CCCO",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "C1CC=CCC1",
        "smiles": "C1CC=CCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC=C",
        "smiles": "CC=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Fischer Esterification.",
      "process": "Acid-catalyzed Fischer esterification of acetic acid and ethanol yields ethyl acetate.",
      "result": "The product is CCOC(C)=O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q83",
    "topic": "Fischer Esterification",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCO"
      ],
      "reagents": "H+",
      "conditions": "heat, Dean-Stark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CCCO",
        "smiles": "CCCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(Br)(C)C",
        "smiles": "CC(Br)(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Fischer Esterification.",
      "process": "Acid-catalyzed Fischer esterification of acetic acid and ethanol yields ethyl acetate.",
      "result": "The product is CCOC(C)=O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q85",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCC(=O)O",
        "smiles": "CCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q86",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "O=CC1CC=CCC1",
        "smiles": "O=CC1CC=CCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(C)=C",
        "smiles": "CC(C)=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "C(Br)CBr",
        "smiles": "C(Br)CBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q87",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CC(O)c1ccccc1",
        "smiles": "CC(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCCBr",
        "smiles": "CCCBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC=O",
        "smiles": "CC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q88",
    "topic": "Fischer Esterification",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCO"
      ],
      "reagents": "H+",
      "conditions": "heat, Dean-Stark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(Br)C(Br)",
        "smiles": "CC(Br)C(Br)",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC=O",
        "smiles": "CC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "CC(C)(O)C",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Fischer Esterification.",
      "process": "Acid-catalyzed Fischer esterification of acetic acid and ethanol yields ethyl acetate.",
      "result": "The product is CCOC(C)=O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q90",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CC(C#N)C",
        "smiles": "CC(C#N)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(O)C",
        "smiles": "CC(O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "C(Br)CBr",
        "smiles": "C(Br)CBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q93",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(O)C(Br)",
        "smiles": "CC(O)C(Br)",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "C(Br)CBr",
        "smiles": "C(Br)CBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(O)CC=O",
        "smiles": "CC(O)CC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q94",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCC(=O)O",
        "smiles": "CCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "CC(C)(O)C",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q95",
    "topic": "Ester Hydrolysis",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat, then H+",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CCCO",
        "smiles": "CCCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(O)C(Br)",
        "smiles": "CC(O)C(Br)",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Ester Hydrolysis.",
      "process": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup).",
      "result": "The product is CC(=O)O."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q2",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCC(=O)O",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CCCOC(CC)=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Na2Cr2O7, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1-propanol, H+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: 1-propanol, B: propanoic acid, C: propyl propanoate",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: 1-propanol, B: propanoic acid, C: ethyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: propan-2-ol, B: propanoic acid, C: isopropyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: 1-propanol, B: propanal, C: propyl acetate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: 1-propanol, B: propanoic acid, C: propyl propanoate.",
      "result": "The labels correspond to A: 1-propanol, B: propanoic acid, C: propyl propanoate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q10_2",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCC(=O)O",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CCCOC(CC)=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Na2Cr2O7, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1-propanol, H+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: 1-propanol, B: propanoic acid, C: ethyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: propan-2-ol, B: propanoic acid, C: isopropyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: 1-propanol, B: propanal, C: propyl acetate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: 1-propanol, B: propanoic acid, C: propyl propanoate",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: 1-propanol, B: propanoic acid, C: propyl propanoate.",
      "result": "The labels correspond to A: 1-propanol, B: propanoic acid, C: propyl propanoate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q16",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q18",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q24_2",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCC(=O)O",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CCCOC(CC)=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Na2Cr2O7, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1-propanol, H+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: 1-propanol, B: propanoic acid, C: propyl propanoate",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: 1-propanol, B: propanoic acid, C: ethyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: 1-propanol, B: propanal, C: propyl acetate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: propan-2-ol, B: propanoic acid, C: isopropyl propanoate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: 1-propanol, B: propanoic acid, C: propyl propanoate.",
      "result": "The labels correspond to A: 1-propanol, B: propanoic acid, C: propyl propanoate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q26_2",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCC(=O)O",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CCCOC(CC)=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Na2Cr2O7, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1-propanol, H+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: 1-propanol, B: propanoic acid, C: ethyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: 1-propanol, B: propanal, C: propyl acetate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: 1-propanol, B: propanoic acid, C: propyl propanoate",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: propan-2-ol, B: propanoic acid, C: isopropyl propanoate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: 1-propanol, B: propanoic acid, C: propyl propanoate.",
      "result": "The labels correspond to A: 1-propanol, B: propanoic acid, C: propyl propanoate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q35_2",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCC(=O)O",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CCCOC(CC)=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Na2Cr2O7, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1-propanol, H+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propan-2-ol, B: propanoic acid, C: isopropyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: 1-propanol, B: propanoic acid, C: propyl propanoate",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: 1-propanol, B: propanoic acid, C: ethyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: 1-propanol, B: propanal, C: propyl acetate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: 1-propanol, B: propanoic acid, C: propyl propanoate.",
      "result": "The labels correspond to A: 1-propanol, B: propanoic acid, C: propyl propanoate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q37",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCC(=O)O",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CCCOC(CC)=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Na2Cr2O7, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1-propanol, H+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: 1-propanol, B: propanoic acid, C: ethyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: 1-propanol, B: propanoic acid, C: propyl propanoate",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: propan-2-ol, B: propanoic acid, C: isopropyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: 1-propanol, B: propanal, C: propyl acetate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: 1-propanol, B: propanoic acid, C: propyl propanoate.",
      "result": "The labels correspond to A: 1-propanol, B: propanoic acid, C: propyl propanoate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q43_2",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q52_2",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q54_2",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q74_2",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q76",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q6_2",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCC(=O)O",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CCCOC(CC)=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Na2Cr2O7, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1-propanol, H+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propan-2-ol, B: propanoic acid, C: isopropyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: 1-propanol, B: propanal, C: propyl acetate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: 1-propanol, B: propanoic acid, C: ethyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: 1-propanol, B: propanoic acid, C: propyl propanoate",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: 1-propanol, B: propanoic acid, C: propyl propanoate.",
      "result": "The labels correspond to A: 1-propanol, B: propanoic acid, C: propyl propanoate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q8_2",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCC(=O)O",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CCCOC(CC)=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Na2Cr2O7, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1-propanol, H+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: 1-propanol, B: propanal, C: propyl acetate",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: 1-propanol, B: propanoic acid, C: propyl propanoate",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: propan-2-ol, B: propanoic acid, C: isopropyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: 1-propanol, B: propanoic acid, C: ethyl propanoate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: 1-propanol, B: propanoic acid, C: propyl propanoate.",
      "result": "The labels correspond to A: 1-propanol, B: propanoic acid, C: propyl propanoate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q10_3",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q13",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCC(=O)O",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CCCOC(CC)=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Na2Cr2O7, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1-propanol, H+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: 1-propanol, B: propanoic acid, C: propyl propanoate",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: 1-propanol, B: propanal, C: propyl acetate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: propan-2-ol, B: propanoic acid, C: isopropyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: 1-propanol, B: propanoic acid, C: ethyl propanoate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: 1-propanol, B: propanoic acid, C: propyl propanoate.",
      "result": "The labels correspond to A: 1-propanol, B: propanoic acid, C: propyl propanoate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q20",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q28_2",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q39_2",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q47_2",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q59",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q60_2",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q73_2",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  }
];
