// McMurry Chapter 25 questions
const CHAPTER_25_QUESTIONS = [
  {
    "question_id": "ch25_acs_q1_grignard",
    "topic": "ACS: Nucleophilic Additions at Carbonyls",
    "difficulty_level": "Easy",
    "question_text": "What is the product of the reaction of methylmagnesium bromide with cyclohexanone, followed by mild acidic workup?",
    "question_smiles": "O=C1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "1-Methylcyclohexanol",
        "smiles": "CC1(O)CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Methylcyclohexene",
        "smiles": "CC1=CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Methoxycyclohexane",
        "smiles": "COC1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyl cyclohexyl ether",
        "smiles": "CC1CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Examining Grignard addition to ketones to form tertiary alcohols.",
      "process": "Step 1: The methyl nucleophile (CH3-) from the Grignard reagent attacks the electrophilic carbonyl carbon of cyclohexanone.\nStep 2: This forms a tetrahedral magnesium alkoxide intermediate.\nStep 3: Acidic workup protonates the alkoxide to yield the neutral tertiary alcohol, 1-methylcyclohexanol.",
      "result": "The major product is 1-methylcyclohexanol."
    }
  },
  {
    "question_id": "ch25_acs_q2_acetal",
    "topic": "ACS: Nucleophilic Additions at Carbonyls",
    "difficulty_level": "Medium",
    "question_text": "Predict the structure of the product formed when benzaldehyde is heated with ethylene glycol (1,2-ethanediol) in the presence of p-toluenesulfonic acid (TsOH) catalyst.",
    "question_smiles": "O=CC1=CC=CC=C1.OCCO",
    "options": [
      {
        "option_id": "A",
        "text": "A cyclic acetal (1,3-dioxolane derivative)",
        "smiles": "C1CO[CH](O1)c2ccccc2",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A hemiacetal",
        "smiles": "OC(c1ccccc1)OCCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "An ester (glycol benzoate)",
        "smiles": "CCOC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzyl ethyl ether",
        "smiles": "CCOCc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing acid-catalyzed acetal formation mechanisms used for protecting carbonyl groups.",
      "process": "Step 1: Protonation of the aldehyde carbonyl oxygen enhances its electrophilicity.\nStep 2: One alcohol group of ethylene glycol attacks the carbonyl carbon to form a hemiacetal.\nStep 3: Acid-catalyzed loss of water generates a highly reactive resonance-stabilized oxocarbenium ion.\nStep 4: Intramolecular attack by the second hydroxyl group closes the ring to form a stable cyclic acetal (1,3-dioxolane).",
      "result": "The cyclic acetal is formed."
    }
  },
  {
    "question_id": "ch25_acs_q3_wittig",
    "topic": "ACS: Nucleophilic Additions at Carbonyls",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction between cyclohexanone and methylenetriphenylphosphorane (a Wittig reagent)?",
    "question_smiles": "O=C1CCCCC1.C=P(c2ccccc2)(c3ccccc3)c4ccccc4",
    "options": [
      {
        "option_id": "A",
        "text": "Methylenecyclohexane (alkene formation)",
        "smiles": "C=C1CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-methylcyclohexanol (substitution/addition)",
        "smiles": "CC1(O)CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclohexyl methyl ketone (rearrangement)",
        "smiles": "CC(=O)C1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "7-oxabicyclo[4.1.0]heptane (epoxide)",
        "smiles": "C1CCC2C(C1)O2",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding the Wittig reaction for converting carbonyls into alkenes with defined regiochemistry.",
      "process": "Step 1: The nucleophilic carbon of the Wittig ylide (Ph3P=CH2) attacks the carbonyl carbon of cyclohexanone.\nStep 2: This forms a four-membered cyclic oxaphosphetane intermediate.\nStep 3: The oxaphosphetane undergoes thermal elimination, driven by the formation of a strong phosphorus-oxygen double bond (Ph3P=O), yielding methylenecyclohexane.",
      "result": "The product is methylenecyclohexane."
    }
  },
  {
    "question_id": "ch25_acs_q4_cyanohydrin",
    "topic": "ACS: Nucleophilic Additions at Carbonyls",
    "difficulty_level": "Easy",
    "question_text": "Identify the product formed when acetone is treated with HCN in the presence of a catalytic amount of NaCN.",
    "question_smiles": "CC(=O)C",
    "options": [
      {
        "option_id": "A",
        "text": "Acetone cyanohydrin",
        "smiles": "CC(C)(O)C#N",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Isopropylamine",
        "smiles": "CC(C)N",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-methylpropanamide",
        "smiles": "CC(C)C(=O)N",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-hydroxy-2-methylpropanoic acid",
        "smiles": "CC(C)(O)C(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding the nucleophilic addition of cyanide to ketones.",
      "process": "Step 1: Cyanide ion (CN-) acts as a nucleophile and attacks the carbonyl carbon of acetone.\nStep 2: The resulting alkoxide intermediate is protonated by HCN to yield the cyanohydrin product.\nStep 3: The NaCN provides the active nucleophile to initiate the catalytic cycle.",
      "result": "Acetone cyanohydrin is the final product."
    }
  },
  {
    "question_id": "ch25_acs_q5_hemiacetal",
    "topic": "ACS: Nucleophilic Additions at Carbonyls",
    "difficulty_level": "Hard",
    "question_text": "Which of the following compounds exists primarily in a cyclic hemiacetal form at equilibrium?",
    "question_smiles": "O=CCCCCO.O=CCCCO.O=CCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "5-hydroxypentanal (forms a stable 6-membered tetrahydopyran ring)",
        "smiles": "O=CCCCCO",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-hydroxybutanal (forms a 5-membered tetrahydrofuran ring, slightly less stable)",
        "smiles": "O=CCCCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Hexanal (lacks an internal nucleophile)",
        "smiles": "O=CCCCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-hydroxypentanal (forms a strained 4-membered ring)",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Evaluating thermodynamic stability of cyclic hemiacetals (pyranose/furanose analogues).",
      "process": "Step 1: Compounds containing both a hydroxyl group and a carbonyl group in the same molecule can undergo intramolecular cyclization.\nStep 2: 5-hydroxypentanal has the hydroxyl oxygen 5 carbons away from the carbonyl.\nStep 3: Intramolecular attack forms a stable, strain-free six-membered ring (tetrahydopyran system) which makes up >99% of the mixture at equilibrium.",
      "result": "5-hydroxypentanal exists primarily as a cyclic hemiacetal."
    }
  },
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
    }
  }
];
