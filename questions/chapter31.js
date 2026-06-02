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
    "question_smiles": "",
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
  },
  {
    "question_id": "ch31_acs_q6_ir_carbonyls",
    "topic": "ACS: Spectroscopy",
    "difficulty_level": "Medium",
    "question_text": "Rank the following carbonyl compounds in order of decreasing IR carbonyl stretching frequency (highest frequency to lowest frequency):\nI. Acetyl chloride\nII. Ethyl acetate\nIII. Acetone\nIV. N,N-dimethylacetamide",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "I > II > III > IV",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "IV > III > II > I",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "I > III > II > IV",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "II > I > III > IV",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing structural effects (resonance vs induction) on carbonyl IR stretching frequencies.",
      "process": "Step 1: Carbonyl stretching frequency depends on double-bond character. Stronger bonds stretch at higher frequencies.\nStep 2: Acetyl chloride (I) has a highly electronegative chlorine pulling electron density via induction, increasing double-bond character (~1800 cm-1).\nStep 3: Esters (II) are higher than ketones (III) due to ester oxygen induction. Amides (IV) are lowest due to resonance donation.",
      "result": "The stretching frequency order is I > II > III > IV."
    }
  },
  {
    "question_id": "ch31_acs_q7_acid_proton",
    "topic": "ACS: Spectroscopy",
    "difficulty_level": "Easy",
    "question_text": "At what chemical shift (delta) would you expect to find the resonance signal for a carboxylic acid proton (-COOH) in a 1H NMR spectrum?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "10 - 12 ppm",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2 - 3 ppm",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "7 - 8 ppm",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4 - 5 ppm",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identifying characteristic chemical shifts in Proton NMR.",
      "process": "Step 1: Carboxylic acid protons are highly deshielded due to the strongly electron-withdrawing carbonyl group and hydrogen bonding.\nStep 2: Carboxylic acid protons appear extremely far downfield, typically between 10 and 12 ppm.\nStep 3: These signals are often broad due to exchange.",
      "result": "The chemical shift is in the 10 - 12 ppm range."
    }
  },
  {
    "question_id": "ch31_acs_q8_ms_halogens",
    "topic": "ACS: Spectroscopy",
    "difficulty_level": "Medium",
    "question_text": "A mass spectrum of an unknown compound shows a molecular ion peak (M+) at m/z 156 and an M+2 peak of nearly equal intensity at m/z 158. What does this indicate?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The compound contains one bromine atom.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The compound contains one chlorine atom.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The compound contains two nitrogen atoms.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The compound has undergone fragmentation.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Detecting halogens using mass spectrometry isotopic patterns.",
      "process": "Step 1: Bromine exists as two stable isotopes: 79Br (50.7%) and 81Br (49.3%).\nStep 2: A monobrominated compound will show two molecular ion peaks separated by 2 mass units (M and M+2) in a 1:1 ratio.\nStep 3: Chlorine has isotopes 35Cl and 37Cl, yielding a 3:1 ratio of M to M+2.",
      "result": "A 1:1 ratio of M to M+2 indicates the presence of a bromine atom."
    }
  },
  {
    "question_id": "ch31_acs_q9_uv_vis",
    "topic": "ACS: Spectroscopy",
    "difficulty_level": "Medium",
    "question_text": "Which of the following compounds has the longest wavelength of maximum absorption (lambda max) in its UV-Vis spectrum?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "1,3,5-hexatriene (three conjugated double bonds)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,3-butadiene (two conjugated double bonds)",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,4-pentadiene (two isolated double bonds)",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethylene (one double bond)",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding conjugation effects on UV-Vis absorption wavelengths.",
      "process": "Step 1: Conjugation decreases the energy gap between the HOMO and LUMO orbitals.\nStep 2: A smaller energy gap corresponds to absorption of longer wavelengths of light (lower energy).\nStep 3: 1,3,5-hexatriene has the most extended conjugated pi system and therefore the longest lambda max.",
      "result": "The compound with the longest wavelength is 1,3,5-hexatriene."
    }
  },
  {
    "question_id": "ch31_acs_q10_splitting_isopropyl",
    "topic": "ACS: Spectroscopy",
    "difficulty_level": "Medium",
    "question_text": "What splitting pattern is observed in the 1H NMR spectrum for the protons of an isopropyl group attached to an electronegative atom (like in 2-bromopropane)?",
    "question_smiles": "CC(Br)C",
    "options": [
      {
        "option_id": "A",
        "text": "A doublet integrating to 6H, and a septet integrating to 1H.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A triplet integrating to 6H, and a quartet integrating to 1H.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A singlet integrating to 6H, and a doublet integrating to 1H.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A doublet integrating to 3H, and a quartet integrating to 1H.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Interpreting spin-spin coupling and splitting patterns of alkyl groups.",
      "process": "Step 1: An isopropyl group (-CH(CH3)2) has two equivalent methyl groups (6 protons) adjacent to one methine proton (1 proton).\nStep 2: The 6 methyl protons are split into a doublet (n+1 rule: 1+1=2) by the methine.\nStep 3: The 1 methine proton is split into a septet (6+1=7) by the methyl protons.",
      "result": "The pattern consists of a 6H doublet and a 1H septet."
    }
  }
];
