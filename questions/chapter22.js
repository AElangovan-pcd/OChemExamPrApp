// ACS Organic Chemistry Exam Preparation - ACS: Stereochemistry
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
    "question_smiles": "",
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
    "question_id": "ch22_acs_q6_stereoisomers",
    "topic": "ACS: Stereochemistry",
    "difficulty_level": "Easy",
    "question_text": "How many stereoisomers are possible for 2-bromo-3-chlorobutane?",
    "question_smiles": "CC(Br)C(Cl)C",
    "options": [
      {
        "option_id": "A",
        "text": "4",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "8",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determining maximum number of stereoisomers for compounds with asymmetric carbons.",
      "process": "Step 1: Identify the chiral centers: C2 has a bromine (chiral), and C3 has a chlorine (chiral). Total chiral centers n = 2.\nStep 2: The molecule is unsymmetric because the substituents at C2 and C3 are different.\nStep 3: Apply the 2^n rule: 2^2 = 4 stereoisomers.",
      "result": "There are 4 possible stereoisomers."
    }
  },
  {
    "question_id": "ch22_acs_q7_diastereomers",
    "topic": "ACS: Stereochemistry",
    "difficulty_level": "Easy",
    "question_text": "What is the stereochemical relationship between cis-1,2-dimethylcyclopentane and trans-1,2-dimethylcyclopentane?",
    "question_smiles": "CC1CCCC1C.C[C@@H]1CCC[C@H]1C",
    "options": [
      {
        "option_id": "A",
        "text": "Diastereomers",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Enantiomers",
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
      "context": "Comparing stereochemical relationships of cyclic compounds.",
      "process": "Step 1: Both isomers have the same connectivity (1,2-dimethylcyclopentane).\nStep 2: Cis has both methyls on the same face. Trans has methyls on opposite faces.\nStep 3: Since they are stereoisomers that are not mirror images of each other, they are diastereomers.",
      "result": "The relationship is diastereomers."
    }
  },
  {
    "question_id": "ch22_acs_q8_fischer",
    "topic": "ACS: Stereochemistry",
    "difficulty_level": "Medium",
    "question_text": "A Fischer projection has a vertical chain with an aldehyde (CHO) at top, C2 has H on the left and OH on the right, and a methyl group (CH3) at the bottom. What is the absolute configuration at C2?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "(2S)-2-hydroxypropanal",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2R)-2-hydroxypropanal",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "meso-2-hydroxypropanal",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "achiral",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Assigning stereocenter configurations in Fischer projections.",
      "process": "Step 1: Assign priorities at C2: -OH (1), -CHO (2), -CH3 (3), -H (4).\nStep 2: In a Fischer projection, horizontal bonds point out (wedges). H is on a horizontal bond on the left.\nStep 3: Tracing 1 -> 2 -> 3 goes clockwise, which would be (R) if H was in back. Since H is on a horizontal bond, we invert the result to get (S).",
      "result": "The configuration is (2S)."
    }
  },
  {
    "question_id": "ch22_acs_q9_allenes",
    "topic": "ACS: Stereochemistry",
    "difficulty_level": "Hard",
    "question_text": "Which of the following compounds is chiral despite not containing a tetrahedral carbon with four different groups?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "2,3-pentadiene (an allene)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,2-propadiene (allene)",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,3-pentadiene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "trans-2-butene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding chirality resulting from an axis of asymmetry (axial chirality) in allenes.",
      "process": "Step 1: Allenes contain adjacent double bonds (C=C=C).\nStep 2: The terminal groups are in perpendicular planes due to the central sp carbon.\nStep 3: Since both ends are unsymmetrically substituted (each has H and CH3), the molecule is chiral and has no internal plane of symmetry.",
      "result": "2,3-pentadiene is chiral."
    }
  },
  {
    "question_id": "ch22_acs_q10_resolution",
    "topic": "ACS: Stereochemistry",
    "difficulty_level": "Medium",
    "question_text": "How is a racemic mixture of enantiomers typically resolved into pure enantiomers?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "By reacting the mixture with a pure chiral reagent to form diastereomers, which can be separated.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "By fractional distillation, since enantiomers have different boiling points.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "By recrystallization from an achiral solvent.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "By adding a strong acid to selectively destroy one enantiomer.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding the chemical process of enantiomer resolution.",
      "process": "Step 1: Enantiomers have identical physical properties in achiral environments, making physical separation impossible.\nStep 2: Diastereomers have different physical properties.\nStep 3: Reacting the racemate with a chiral resolving agent creates a pair of diastereomers, which can be separated and converted back to pure enantiomers.",
      "result": "Enantiomers are separated by temporary conversion into diastereomers."
    }
  }
];
