// ACS Organic Chemistry Exam Preparation - ACS: Spectroscopy
const CHAPTER_31_QUESTIONS = [
  {
    "question_id": "ch31_acs_q1_nmr_ester",
    "topic": "ACS: Spectroscopy",
    "difficulty_level": "Hard",
    "question_text": "An organic compound shows a 1H NMR spectrum consisting of: \n- A quartet at delta 4.2 ppm (2H) \n- A triplet at delta 3.8 ppm (2H) \n- A triplet at delta 2.8 ppm (2H) \n- A triplet at delta 1.3 ppm (3H)\nWhich structure is consistent with this spectrum?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Ethyl 3-chloropropanoate",
        "smiles": "ClCCC(=O)OCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-chloro-3-pentanone",
        "smiles": "ClCCC(=O)CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-chloroethyl propanoate",
        "smiles": "ClCCOC(=O)CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-chloropropyl acetate",
        "smiles": "ClCCCOC(=O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Interpreting chemical shifts and splitting patterns to elucidate ester structures.",
      "process": "Step 1: The quartet at delta 4.2 and triplet at delta 1.3 form an ethyl ester pattern (-OCH2CH3), shifted downfield because the methylene is directly attached to the ester oxygen.\nStep 2: The remaining signals are two coupled methylenes (two triplets at delta 3.8 and 2.8). The triplet at delta 3.8 is shifted downfield due to the electronegative chlorine atom (-CH2Cl), and the triplet at delta 2.8 is adjacent to the carbonyl (-CH2CO-).\nStep 3: This matches ethyl 3-chloropropanoate (ClCH2CH2COOCH2CH3).",
      "result": "The correct structure is ethyl 3-chloropropanoate."
    }
  },
  {
    "question_id": "ch31_acs_q2_c13_signals",
    "topic": "ACS: Spectroscopy",
    "difficulty_level": "Medium",
    "question_text": "How many signals would you expect in the proton-decoupled 13C NMR spectrum for 4-methylacetophenone?",
    "question_smiles": "CC(=O)C1=CC=C(C)C=C1",
    "options": [
      {
        "option_id": "A",
        "text": "5",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "6",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "7",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "9",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding chemical equivalence and symmetry in Carbon-13 NMR.",
      "process": "Step 1: Identify all carbons: CH3-C6H4-C(=O)CH3.\nStep 2: The ring is 1,4-disubstituted (para-disubstituted) and possesses a plane of symmetry passing through C1 and C4.\nStep 3: Count the distinct carbon environments: carbonyl carbon (1), acetyl methyl (1), ring methyl (1), ring C1 (1), ring C4 (1), ring C2/C6 (1), ring C3/C5 (1). Total = 7 distinct carbon signals.",
      "result": "The compound shows 7 signals in its carbon-13 NMR spectrum."
    }
  },
  {
    "question_id": "ch31_acs_q3_diethy_malonate",
    "topic": "ACS: Spectroscopy",
    "difficulty_level": "Hard",
    "question_text": "An organic compound has a 1H NMR spectrum with three signals: a quartet at delta 4.1, a singlet at delta 3.4, and a triplet at delta 1.25. Which compound matches this spectrum?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Diethyl malonate",
        "smiles": "CCOC(=O)CC(=O)OCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methyl propanoate",
        "smiles": "CCC(=O)OC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethyl acetoacetate",
        "smiles": "CCOC(=O)CC(=O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Butanone",
        "smiles": "CCC(=O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Interpreting coupling and shifts in complex ester-carbonyl systems.",
      "process": "Step 1: The quartet at delta 4.1 and triplet at 1.25 represent an ethyl ester group (-OCH2CH3).\nStep 2: The singlet at delta 3.4 represents a methylene group between two electron-withdrawing carbonyls (-CO-CH2-CO-).\nStep 3: Diethyl malonate contains two equivalent ethyl ester groups and one central methylene group, matching all three signals.",
      "result": "The compound is diethyl malonate."
    }
  },
  {
    "question_id": "ch31_acs_q4_ms_heptanone",
    "topic": "ACS: Spectroscopy",
    "difficulty_level": "Medium",
    "question_text": "Which compound would show a molecular ion at m/z 114 and a major fragment ion at m/z 71?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "4-heptanone",
        "smiles": "CCCC(=O)CCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-heptanone",
        "smiles": "CCCCC(=O)CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-hexanone",
        "smiles": "CCCCC(=O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-heptanol",
        "smiles": "CCCC(O)CCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing fragmentations in mass spectrometry, specifically alpha-cleavage of ketones.",
      "process": "Step 1: Calculate molecular weights: 4-heptanone is C7H14O, MW = 114. 3-heptanone is C7H14O, MW = 114. 2-hexanone is C6H12O, MW = 100. 4-heptanol is C7H16O, MW = 116. This narrows it down to the two heptanone isomers.\nStep 2: Identify the fragment at m/z 71. The fragment represents the acylium ion (R-C#O+) formed by alpha-cleavage.\nStep 3: For 4-heptanone, alpha-cleavage on either side loses a propyl radical (mass 43) to yield the propylacylium ion (CH3CH2CH2-C#O+) at m/z 71.\nStep 4: For 3-heptanone, alpha-cleavage yields either ethylacylium (m/z 57) or butylacylium (m/z 85).",
      "result": "The correct compound is 4-heptanone."
    }
  },
  {
    "question_id": "ch31_acs_q5_ir_functional",
    "topic": "ACS: Spectroscopy",
    "difficulty_level": "Easy",
    "question_text": "An unknown organic compound shows a strong, broad absorption band at 3300 cm-1 and a sharp absorption band at 1715 cm-1 in its IR spectrum. What functional group is present?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Carboxylic acid",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Alcohol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ketone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ester",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identifying functional groups based on characteristic IR absorption frequencies.",
      "process": "Step 1: The absorption at 1715 cm-1 corresponds to a carbonyl stretch (C=O).\nStep 2: The very broad absorption around 3300 cm-1 is characteristic of an O-H stretch.\nStep 3: The combination of a carbonyl stretch and a broad hydroxyl stretch is characteristic of a carboxylic acid functional group.",
      "result": "The functional group is a carboxylic acid."
    }
  }
];
