// McMurry Chapter 22 questions
const CHAPTER_22_QUESTIONS = [
  {
    "question_id": "ch22_acs_q1_stereochemistry",
    "topic": "ACS: Stereochemistry",
    "difficulty_level": "Easy",
    "question_text": "Determine the stereochemical relationship between these two structures of alanine.",
    "question_smiles": "N[C@@H](C)C(=O)O.N[C@H](C)C(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "Enantiomers",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Diastereomers",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Constitutional isomers",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Identical compounds",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Classifying stereoisomers by comparing spatial configurations.",
      "process": "Step 1: Compare the connectivity of the two molecules. They both represent alanine (2-aminopropanoic acid), so they are stereoisomers, not constitutional isomers.\nStep 2: Identify the configuration of the stereocenter at C2. Structure 1 is (S)-alanine and Structure 2 is (R)-alanine.\nStep 3: Since they are non-superimposable mirror images with inverted stereocenters, they are enantiomers.",
      "result": "The relationship between the two structures is enantiomers."
    }
  },
  {
    "question_id": "ch22_acs_q2_rs_assignment",
    "topic": "ACS: Stereochemistry",
    "difficulty_level": "Medium",
    "question_text": "Assign the absolute configuration of the chiral center in the compound shown below.",
    "question_smiles": "N[C@H](C)O",
    "options": [
      {
        "option_id": "A",
        "text": "(R)-aminoethanol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(S)-aminoethanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Achromic compound",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Meso compound",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Applying CIP rules to assign R/S configurations to tetrahedral chiral stereocenters.",
      "process": "Step 1: Assign priorities to substituents: -OH (priority 1), -NH2 (priority 2), -CH3 (priority 3), -H (priority 4).\nStep 2: Locate the position of the lowest priority group (-H). It is pointing away on a dashed bond.\nStep 3: Trace the path from priority 1 -> 2 -> 3. The direction is clockwise, which designates (R).",
      "result": "The chiral carbon has the (R) configuration."
    }
  },
  {
    "question_id": "ch22_acs_q3_meso",
    "topic": "ACS: Stereochemistry",
    "difficulty_level": "Medium",
    "question_text": "Which of the following compounds is a meso compound?",
    "question_smiles": "C[C@@H](O)[C@H](O)C.C[C@@H](O)[C@@H](O)C.C[C@H](O)CCO",
    "options": [
      {
        "option_id": "A",
        "text": "(2R,3S)-2,3-butanediol",
        "smiles": "C[C@@H](O)[C@H](O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2R,3R)-2,3-butanediol",
        "smiles": "C[C@@H](O)[C@@H](O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2S,3S)-2,3-butanediol",
        "smiles": "C[C@H](O)[C@H](O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,3-butanediol",
        "smiles": "C[C@H](O)CCO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identifying meso compounds using symmetry planes and chiral centers.",
      "process": "Step 1: A meso compound must have two or more chiral centers and an internal plane of symmetry.\nStep 2: 2,3-butanediol has two chiral centers (C2 and C3).\nStep 3: The (2R,3S) stereoisomer has opposite configurations at its two symmetric centers, creating an internal plane of symmetry that cancels net optical activity.",
      "result": "(2R,3S)-2,3-butanediol is a meso compound."
    }
  },
  {
    "question_id": "ch22_acs_q4_conformations",
    "topic": "ACS: Stereochemistry",
    "difficulty_level": "Hard",
    "question_text": "Which cyclohexene-like chair conformation represents the most stable state of cis-1,3-dimethylcyclohexane?",
    "question_smiles": "CC1CC(C)CCC1",
    "options": [
      {
        "option_id": "A",
        "text": "The chair conformation with both methyl groups in equatorial positions",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The chair conformation with both methyl groups in axial positions",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The chair conformation with one axial and one equatorial methyl group",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A twist-boat conformation",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing relative conformational stabilities of disubstituted cyclohexanes.",
      "process": "Step 1: Cis-1,3-dimethylcyclohexane has the substituents on the same face of the ring.\nStep 2: In a chair conformation, C1-cis and C3-cis can both be equatorial (1e, 3e) or both be axial (1a, 3a).\nStep 3: Equatorial placement avoids steric strain from 1,3-diaxial interactions. Thus, the (1e, 3e) conformation is highly stable (approx. 5.4 kcal/mol more stable than the diaxial form).",
      "result": "The diequatorial chair conformation is the most stable form."
    }
  },
  {
    "question_id": "ch22_acs_q5_enantiomeric_excess",
    "topic": "ACS: Stereochemistry",
    "difficulty_level": "Medium",
    "question_text": "A mixture containing two enantiomers has a specific rotation of +12 degrees. If the pure major enantiomer has a specific rotation of +40 degrees, calculate the enantiomeric excess (ee) and ratio of the enantiomers.",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "ee: 30%, Ratio: 65% major / 35% minor",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "ee: 30%, Ratio: 70% major / 30% minor",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "ee: 40%, Ratio: 60% major / 40% minor",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "ee: 12%, Ratio: 56% major / 44% minor",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Calculating enantiomeric excess (optical purity) and compound ratio calculations.",
      "process": "Step 1: Formula: ee = (observed rotation / pure major rotation) * 100.\nStep 2: ee = (12 / 40) * 100 = 30% ee.\nStep 3: To find enantiomer ratio: % major = ee + (100 - ee)/2 = 30 + 35 = 65% major. The minor enantiomer makes up 35%.",
      "result": "The ee is 30% and the enantiomeric ratio is 65:35."
    }
  },
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
        "correctAnswer": "Kinetic Enolate (LDA, THF, -78\u00b0C)"
      },
      {
        "smiles": "CC(=O)C(C)C.O=C([O-])C",
        "correctAnswer": "Thermodynamic Enolate (NaOEt, EtOH, 25\u00b0C)"
      }
    ],
    "match_options": [
      "Kinetic Enolate (LDA, THF, -78\u00b0C)",
      "Thermodynamic Enolate (NaOEt, EtOH, 25\u00b0C)"
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
      "process": "Kinetic enolates are formed by rapid, irreversible deprotonation at the less hindered carbon using a strong, bulky base (LDA) at low temperatures (-78\u00b0C). Thermodynamic enolates are formed under equilibrating conditions (NaOEt, room temp) favoring the more substituted, stable double bond.",
      "result": "Enolates matched."
    }
  }
];
