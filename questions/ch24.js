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
  },
  {
    "question_id": "ch24_q43_pyrrole_electrophilic_substitution",
    "topic": "Aromatic Heterocycles",
    "difficulty_level": "Hard",
    "question_text": "Pyrrole undergoes electrophilic aromatic substitution (EArS) preferentially at the C2 ($\\alpha$) position rather than the C3 ($\\beta$) position. What is the mechanistic explanation for this regioselectivity?",
    "question_smiles": "c1cc[nH]c1",
    "options": [
      {
        "option_id": "A",
        "text": "Substitution at C2 leads to an intermediate carbocation with three resonance contributors, whereas substitution at C3 leads to an intermediate with only two resonance contributors.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Substitution at C3 is sterically hindered by the hydrogen on the nitrogen atom.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The nitrogen atom directs electrophiles to the C2 position via its inductive electron-withdrawing effect.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The C3 position is more electronegative than the C2 position, resisting electrophile attack.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question addresses the regiochemistry of EArS on pyrrole.",
      "process": "Step 1: Write the mechanism for electrophile ($E^+$) addition at C2. The positive charge in the intermediate carbocation can be delocalized onto C3, C5, and the nitrogen (three resonance structures).\nStep 2: Write the mechanism for addition at C3. The positive charge can only be delocalized onto C2 and the nitrogen (two resonance structures).\nStep 3: Since the transition state leading to the C2-substituted intermediate is lower in energy due to greater charge delocalization, the C2 product is formed preferentially.",
      "result": "C2 substitution is preferred because its carbocation intermediate has more resonance stabilization (3 structures vs. 2)."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q44_pyridine_electrophilic_substitution",
    "topic": "Aromatic Heterocycles",
    "difficulty_level": "Hard",
    "question_text": "Why is pyridine highly unreactive toward electrophilic aromatic substitution (EArS) compared to benzene, and where does substitution occur if forced under harsh conditions?",
    "question_smiles": "c1ccncc1",
    "options": [
      {
        "option_id": "A",
        "text": "The electronegative nitrogen withdraws electron density inductively and by resonance, and reacts with the electrophile or acid to form a positively charged pyridinium ion; substitution is directed to the C3 (meta) position.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The nitrogen activates the C2 and C4 positions, but makes them stericly blocked; substitution occurs at C3.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The nitrogen is electron-donating by resonance, but the ring undergoes addition instead of substitution.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Pyridine is completely inert to EArS because it lacks C-H bonds at the active positions.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "EArS reactivity of pyridine.",
      "process": "Step 1: Nitrogen is highly electronegative and withdraws electron density, strongly deactivating the ring.\nStep 2: In acidic EArS conditions, the basic nitrogen is protonated or coordinates to the electrophile, forming a pyridinium cation, which is even more deactivated.\nStep 3: If forced to react, substitution occurs at C3 because attack at C2 or C4 would place the positive charge directly on the electronegative nitrogen in one of the resonance structures, which is highly unstable.",
      "result": "Pyridine is deactivated and undergoes substitution at the C3 (meta) position under harsh conditions."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  }
];
