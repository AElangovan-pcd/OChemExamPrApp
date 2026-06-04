// McMurry Chapter 24 questions
const CHAPTER_24_QUESTIONS = [
  {
    "question_id": "ch24_acs_q1_bromination",
    "topic": "ACS: Electrophilic Additions",
    "difficulty_level": "Medium",
    "question_text": "What is the major product of the addition of molecular bromine (Br2) to cyclohexene in dichloromethane?",
    "question_smiles": "C1CCC=CC1",
    "options": [
      {
        "option_id": "A",
        "text": "trans-1,2-dibromocyclohexane",
        "smiles": "C1CC[C@@H](Br)[C@H](Br)C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "cis-1,2-dibromocyclohexane",
        "smiles": "C1CC[C@@H](Br)[C@@H](Br)C1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,1-dibromocyclohexane",
        "smiles": "C1CCCC(Br)(Br)C1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-bromocyclohexene",
        "smiles": "C1C=CC(Br)CC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding the mechanism and stereochemical outcome of electrophilic halogen addition to alkenes.",
      "process": "Step 1: Bromine attacks cyclohexene to form a cyclic, three-membered bromonium ion intermediate.\nStep 2: The bromide ion attacks this intermediate from the opposite face (backside attack, anti-addition).\nStep 3: This anti-addition results in a trans-1,2-disubstituted product.",
      "result": "The product is trans-1,2-dibromocyclohexane."
    }
  },
  {
    "question_id": "ch24_acs_q2_hydroboration",
    "topic": "ACS: Electrophilic Additions",
    "difficulty_level": "Medium",
    "question_text": "Predict the stereochemical outcome and structure of the major product when 1-methylcyclopentene is treated with BH3-THF followed by basic H2O2.",
    "question_smiles": "CC1=CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "trans-2-methylcyclopentanol (syn-addition of H and OH)",
        "smiles": "C[C@@H]1CCC[C@@H]1O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "cis-2-methylcyclopentanol (anti-addition of H and OH)",
        "smiles": "C[C@H]1CCC[C@@H]1O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-methylcyclopentanol (Markovnikov product)",
        "smiles": "CC1(O)CCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "trans-1,2-cyclopentanediol",
        "smiles": "OC1CCCC1O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Examining regiochemistry and stereospecificity of the hydroboration-oxidation reaction.",
      "process": "Step 1: Hydroboration is anti-Markovnikov selective, placing boron on the less substituted carbon (C2) and hydrogen on the more substituted carbon (C1).\nStep 2: The mechanism is concerted, requiring a syn-addition where H and B add to the same face of the double bond.\nStep 3: Oxidation replaces the C-B bond with a C-OH bond with retention of stereochemistry. The resulting methyl and hydroxyl groups will end up in a trans relationship.",
      "result": "The major product is trans-2-methylcyclopentanol."
    }
  },
  {
    "question_id": "ch24_acs_q3_oxymercuration",
    "topic": "ACS: Electrophilic Additions",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction of 3,3-dimethyl-1-butene with mercuric acetate in water, followed by treatment with sodium borohydride?",
    "question_smiles": "CC(C)(C)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "3,3-dimethyl-2-butanol (no rearrangement)",
        "smiles": "CC(C)(C)C(O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2,3-dimethyl-2-butanol (rearranged alcohol)",
        "smiles": "CC(C)(O)C(C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3,3-dimethyl-1-butanol (anti-Markovnikov)",
        "smiles": "CC(C)(C)CCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,3-dimethyl-2-butene (elimination product)",
        "smiles": "CC(C)=C(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Comparing acid-catalyzed hydration (prone to carbocation rearrangement) with oxymercuration-demercuration (which avoids rearrangements).",
      "process": "Step 1: Alkene addition of Hg(OAc)2 forms a cyclic mercurinium ion, avoiding free carbocation intermediates.\nStep 2: Nucleophilic attack of water occurs at the more substituted C2 carbon without skeletal rearrangement.\nStep 3: NaBH4 reduces the C-Hg bond, leaving the original carbon skeleton intact.",
      "result": "The product is 3,3-dimethyl-2-butanol."
    }
  },
  {
    "question_id": "ch24_acs_q4_rearrangement",
    "topic": "ACS: Electrophilic Additions",
    "difficulty_level": "Hard",
    "question_text": "Identify the major organic product of the reaction between methylenecyclobutane and dilute aqueous sulfuric acid.",
    "question_smiles": "C=C1CCC1",
    "options": [
      {
        "option_id": "A",
        "text": "1-methylcyclopentanol (via ring expansion)",
        "smiles": "CC1(O)CCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(1-methylcyclobutyl)methanol (direct addition)",
        "smiles": "CC1(CO)CCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-methylcyclobutanol (rearranged cyclobutanol)",
        "smiles": "CC1(O)CCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "cyclopentylmethanol (ring expansion to aldehyde)",
        "smiles": "OC1CCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing carbocation-mediated reactions involving ring expansion to relieve angle strain.",
      "process": "Step 1: Protonation of the exocyclic double bond forms a secondary carbocation at the ring-adjacent carbon: C1-cyclobutyl.\nStep 2: A 1,2-alkyl shift occurs to expand the four-membered ring to a more stable, less strained five-membered ring, forming a secondary cyclopentyl carbocation.\nStep 3: A 1,2-hydride shift converts it to a highly stable tertiary cyclopentyl carbocation.\nStep 4: Water attacks, yielding 1-methylcyclopentanol.",
      "result": "The major product is 1-methylcyclopentanol."
    }
  },
  {
    "question_id": "ch24_acs_q5_stereospecific",
    "topic": "ACS: Electrophilic Additions",
    "difficulty_level": "Hard",
    "question_text": "Predict the stereochemical nature of the product formed from the addition of Cl2 to trans-2-butene in CH2Cl2.",
    "question_smiles": "C/C=C/C",
    "options": [
      {
        "option_id": "A",
        "text": "A single meso compound: (2R,3S)-2,3-dichlorobutane",
        "smiles": "C[C@@H](Cl)[C@H](Cl)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A racemic mixture of (2R,3R) and (2S,3S)-2,3-dichlorobutane",
        "smiles": "C[C@@H](Cl)[C@@H](Cl)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A mixture of diastereomers",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "An optically active single enantiomer",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding the stereospecificity of halogen additions to symmetric alkenes.",
      "process": "Step 1: Addition of Cl2 is stereospecifically anti, proceeding through a chloronium ion.\nStep 2: Addition of identical groups (Cl) to trans-2-butene via an anti mechanism yields the symmetric meso compound.\nStep 3: cis starting material + anti addition = racemic product; trans starting material + anti addition = meso product.",
      "result": "The product is the optically inactive meso-2,3-dichlorobutane."
    }
  },
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
    }
  }
];
