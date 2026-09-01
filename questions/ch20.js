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
  },
  {
    "question_id": "ch20_q48_grignard_carboxylation",
    "topic": "Organometallic reagents",
    "difficulty_level": "Medium",
    "question_text": "Reaction of ethylmagnesium bromide with carbon dioxide ($CO_2$), followed by acidic workup, yields which of the following compounds?",
    "question_smiles": "CC[Mg]Br",
    "options": [
      {
        "option_id": "A",
        "text": "propanoic acid",
        "smiles": "CCC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "ethanoic acid",
        "smiles": "CC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "butanoic acid",
        "smiles": "CCCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "propan-1-ol",
        "smiles": "CCCO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the reaction of Grignard reagents with carbon dioxide to synthesize carboxylic acids.",
      "process": "Step 1: The nucleophilic ethyl group attacks the electrophilic carbon of $CO_2$.\nStep 2: This forms a carboxylate salt intermediate: $CH_3CH_2-COO^- [^+MgBr]$.\nStep 3: Acidic workup protonates the carboxylate to yield propanoic acid, adding one carbon to the original alkyl chain.",
      "result": "The reaction yields propanoic acid."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  }
];
