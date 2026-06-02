// OpenStax Organic Chemistry Chapter 9: Alkynes: An Introduction to Organic Synthesis
const CHAPTER_9_QUESTIONS = [
  {
    "question_id": "ch9_q1_hybridization",
    "topic": "Alkyne Structure & Bonding",
    "difficulty_level": "Easy",
    "question_text": "What is the orbital hybridization and geometry of the carbon atoms in the triple bond of acetylene (ethyne)?",
    "question_smiles": "C#C",
    "options": [
      {
        "option_id": "A",
        "text": "sp, linear",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "sp², trigonal planar",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "sp³, tetrahedral",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "sp³d, linear",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the understanding of orbital hybridization and geometry in alkynes.",
      "process": "Step 1: Identify that each carbon in acetylene is bonded to one hydrogen and one other carbon.\nStep 2: Carbon needs two hybrid orbitals to form two sigma (σ) bonds. This requires the mixing of one s and one p orbital, resulting in sp hybridization.\nStep 3: The two sp hybrid orbitals are oriented 180° apart to minimize electron repulsion, leading to a linear geometry. The remaining two unhybridized p orbitals on each carbon overlap to form two pi (π) bonds.",
      "result": "The carbon atoms are sp-hybridized and the geometry is linear."
    }
  },
  {
    "question_id": "ch9_q2_bond_properties",
    "topic": "Alkyne Structure & Bonding",
    "difficulty_level": "Easy",
    "question_text": "How does the carbon-carbon triple bond in propyne compare to the carbon-carbon double bond in propene in terms of bond length and bond strength?",
    "question_smiles": "CC#C",
    "options": [
      {
        "option_id": "A",
        "text": "The triple bond in propyne is shorter and stronger than the double bond in propene.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The triple bond in propyne is longer and stronger than the double bond in propene.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The triple bond in propyne is shorter and weaker than the double bond in propene.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The triple bond in propyne is longer and weaker than the double bond in propene.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the correlation between bond order, orbital hybridization, and bond properties (length/strength).",
      "process": "Step 1: Analyze the hybridization of the carbons in each bond. In propyne, the triple-bonded carbons are sp-hybridized (50% s-character). In propene, the double-bonded carbons are sp²-hybridized (33.3% s-character).\nStep 2: Higher s-character means the hybrid orbitals are held closer to the nucleus, resulting in a shorter bond.\nStep 3: A triple bond consists of one sigma and two pi bonds (bond energy ~837 kJ/mol), which is much stronger than a double bond consisting of one sigma and one pi bond (bond energy ~611 kJ/mol).",
      "result": "The carbon-carbon triple bond is shorter and stronger than the double bond."
    }
  },
  {
    "question_id": "ch9_q3_orbital_overlap",
    "topic": "Alkyne Structure & Bonding",
    "difficulty_level": "Medium",
    "question_text": "What is the geometric relationship and origin of the two pi (π) bonds in a carbon-carbon triple bond?",
    "question_smiles": "C#C",
    "options": [
      {
        "option_id": "A",
        "text": "They are perpendicular to each other, formed by the overlap of two orthogonal pairs of unhybridized 2p orbitals.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "They are parallel to each other, formed by the overlap of sp hybrid orbitals.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "They are coplanar with the C-H sigma bonds, formed by sp² hybrid orbitals.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "They are oriented at 120° relative to each other, formed by unhybridized d orbitals.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question evaluates the spatial orientation and orbital origin of pi bonds in alkynes.",
      "process": "Step 1: Identify that each carbon in the triple bond has two sp hybrid orbitals (used for sigma bonding) and two unhybridized p orbitals (e.g., px and py).\nStep 2: The px orbital on one carbon overlaps with the px orbital on the adjacent carbon to form one pi bond.\nStep 3: The py orbital on one carbon overlaps with the py orbital on the adjacent carbon to form the second pi bond.\nStep 4: Since px and py orbitals are perpendicular (orthogonal) to each other, the two pi bonds are also perpendicular to each other.",
      "result": "The two pi bonds are perpendicular to each other and arise from the overlap of two orthogonal pairs of unhybridized 2p orbitals."
    }
  },
  {
    "question_id": "ch9_q4_naming_terminal",
    "topic": "IUPAC Naming",
    "difficulty_level": "Easy",
    "question_text": "What is the systematic IUPAC name for the following terminal alkyne?",
    "question_smiles": "CC(C)C#C",
    "options": [
      {
        "option_id": "A",
        "text": "3-methylbut-1-yne",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-methylbut-3-yne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "isopropylacetylene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-methylbutyne",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests basic IUPAC rules for naming terminal alkynes.",
      "process": "Step 1: Find the longest continuous carbon chain containing the triple bond. Here it is a 4-carbon chain (butyne).\nStep 2: Number the chain starting from the end closer to the triple bond to give the alkyne carbons the lowest numbers. This makes the triple bond C1-C2, so the suffix is '1-yne'.\nStep 3: Identify substituents and their positions. A methyl group is at C3.\nStep 4: Combine the parts: 3-methyl + but + 1-yne = 3-methylbut-1-yne.",
      "result": "The IUPAC name is 3-methylbut-1-yne."
    }
  },
  {
    "question_id": "ch9_q5_naming_enyne",
    "topic": "IUPAC Naming",
    "difficulty_level": "Medium",
    "question_text": "What is the systematic IUPAC name for the following enyne?",
    "question_smiles": "C=CC#CC",
    "options": [
      {
        "option_id": "A",
        "text": "pent-1-en-3-yne",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "pent-4-en-2-yne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "pent-3-yn-1-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-penten-3-yne",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the IUPAC naming rules for compounds containing both double and triple bonds (enynes).",
      "process": "Step 1: Find the longest continuous carbon chain containing both double and triple bonds. In this case, it is 5 carbons (pent-en-yne).\nStep 2: Number the chain from the end that gives the lower locants to the double and triple bonds. Numbering from left-to-right gives locants (1, 3). Numbering from right-to-left gives locants (2, 4). The set (1, 3) is lower than (2, 4), so we number from left to right.\nStep 3: The double bond is at C1 ('1-en') and the triple bond is at C3 ('3-yne'). According to IUPAC rules, the 'e' from 'ene' is dropped before 'yne'.",
      "result": "The IUPAC name is pent-1-en-3-yne."
    }
  },
  {
    "question_id": "ch9_q6_naming_enyne_tie",
    "topic": "IUPAC Naming",
    "difficulty_level": "Medium",
    "question_text": "What is the systematic IUPAC name for the following enyne?",
    "question_smiles": "C=CCC#C",
    "options": [
      {
        "option_id": "A",
        "text": "pent-1-en-4-yne",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "pent-4-en-1-yne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-penten-4-yne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-pentyn-1-ene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the IUPAC tie-breaker rule for naming enynes when numbering from either direction yields the same locants.",
      "process": "Step 1: Identify the 5-carbon chain containing both double and triple bonds.\nStep 2: Numbering from the left gives the double bond at C1 and the triple bond at C4 (locants 1, 4). Numbering from the right gives the triple bond at C1 and the double bond at C4 (locants 1, 4).\nStep 3: Apply the tie-breaker rule: when double and triple bonds have the same locant numbers from opposite ends, the double bond is given the lower number.\nStep 4: Therefore, number from left to right: C1 is the alkene carbon, C4 is the alkyne carbon. The name is pent-1-en-4-yne.",
      "result": "The IUPAC name is pent-1-en-4-yne."
    }
  },
  {
    "question_id": "ch9_q7_naming_substituted",
    "topic": "IUPAC Naming",
    "difficulty_level": "Hard",
    "question_text": "What is the systematic IUPAC name for the following compound?",
    "question_smiles": "CC(Cl)C#CC(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "2-chloro-5-methylhex-3-yne",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "5-chloro-2-methylhex-3-yne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5-chloro-2,2-dimethylpent-3-yne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-methyl-5-chlorohex-3-yne",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests IUPAC rules for numbering a chain containing an internal alkyne with substituents.",
      "process": "Step 1: The longest carbon chain containing the triple bond has 6 carbons, making it a hex-3-yne.\nStep 2: Numbering from either end puts the triple bond at C3 (C3-C4). We must break the tie using substituents.\nStep 3: Numbering from left-to-right gives substituents at C2 (chloro) and C5 (methyl). Numbering from right-to-left gives substituents at C2 (methyl) and C5 (chloro).\nStep 4: Since the locant set is (2,5) in both directions, we apply the alphabetical priority rule to determine the lower number. Chloro comes alphabetically before methyl, so the chlorine atom is assigned the lower number (2).\nStep 5: The name is 2-chloro-5-methylhex-3-yne.",
      "result": "The correct IUPAC name is 2-chloro-5-methylhex-3-yne."
    }
  },
  {
    "question_id": "ch9_q8_naming_cyclohexyl",
    "topic": "IUPAC Naming",
    "difficulty_level": "Medium",
    "question_text": "What is the systematic IUPAC name for the following alkyne?",
    "question_smiles": "C#CCC1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "3-cyclohexylprop-1-yne",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-cyclohexylprop-2-yne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-cyclohexylpropyne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "prop-2-yn-1-ylcyclohexane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests naming alkynes that have cyclic substituents.",
      "process": "Step 1: Identify the principal chain containing the triple bond. The chain has 3 carbons (prop-1-yne), which takes priority over the cyclohexyl ring.\nStep 2: Number the chain starting from the terminal alkyne carbon: C1 is the alkyne carbon, C3 is the carbon bonded to the cyclohexyl group.\nStep 3: Name the cyclohexyl group as a substituent at C3: 3-cyclohexylprop-1-yne.",
      "result": "The IUPAC name is 3-cyclohexylprop-1-yne."
    }
  },
  {
    "question_id": "ch9_q9_naming_diyne",
    "topic": "IUPAC Naming",
    "difficulty_level": "Medium",
    "question_text": "What is the systematic IUPAC name for the following diyne?",
    "question_smiles": "C#CCC#C",
    "options": [
      {
        "option_id": "A",
        "text": "penta-1,4-diyne",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "penta-1,3-diyne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "pentadiyne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,4-pentadiyne",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests IUPAC rules for naming compounds with two triple bonds.",
      "process": "Step 1: Identify the longest continuous chain containing both triple bonds. The chain has 5 carbons (penta-diyne).\nStep 2: Number the chain from the end that gives the triple bonds the lowest possible locants. Here, it is symmetric, so numbering from either end yields 1 and 4.\nStep 3: Combine the locants, chain name, and suffix: penta-1,4-diyne. Note that the 'a' in 'penta' is retained because the suffix 'diyne' starts with a consonant.",
      "result": "The IUPAC name is penta-1,4-diyne."
    }
  },
  {
    "question_id": "ch9_q10_acidity_trend",
    "topic": "Alkyne Acidity & Acetylide Anions",
    "difficulty_level": "Medium",
    "question_text": "Arrange the following in order of increasing acidity (lowest acidity first, highest acidity last):",
    "question_smiles": "C#C",
    "options": [
      {
        "option_id": "A",
        "text": "ethane < ethylene < ammonia < acetylene < ethanol",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "ethane < ammonia < ethylene < acetylene < ethanol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "ammonia < ethane < ethylene < ethanol < acetylene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "ethanol < acetylene < ethylene < ammonia < ethane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the relative acidities of various functional groups, focusing on terminal alkynes.",
      "process": "Step 1: Estimate or recall the pKa values of the conjugate acids: ethane (~50), ethylene (~44), ammonia (~36), acetylene (~25), ethanol (~16).\nStep 2: A lower pKa value corresponds to a higher acidity.\nStep 3: Order the compounds from highest pKa (lowest acidity) to lowest pKa (highest acidity): ethane (pKa ~50) < ethylene (pKa ~44) < ammonia (pKa ~36) < acetylene (pKa ~25) < ethanol (pKa ~16).",
      "result": "The correct order of increasing acidity is ethane < ethylene < ammonia < acetylene < ethanol."
    }
  },
  {
    "question_id": "ch9_q11_base_selection",
    "topic": "Alkyne Acidity & Acetylide Anions",
    "difficulty_level": "Medium",
    "question_text": "Which of the following bases is strong enough to quantitatively deprotonate a terminal alkyne (pKa ≈ 25) in liquid ammonia?",
    "question_smiles": "CC#C",
    "options": [
      {
        "option_id": "A",
        "text": "Sodium amide (NaNH₂)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Sodium hydroxide (NaOH)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Sodium ethoxide (NaOEt)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Potassium tert-butoxide (KOtBu)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the selection of a suitable base for the deprotonation of terminal alkynes based on pKa values.",
      "process": "Step 1: The pKa of a terminal alkyne is approximately 25. To deprotonate it quantitatively, the conjugate acid of the base must have a pKa greater than 25 (preferably by several units).\nStep 2: Evaluate the pKa values of the conjugate acids of each option:\n- NaNH₂: conjugate acid is NH₃, pKa ≈ 36.\n- NaOH: conjugate acid is H₂O, pKa ≈ 15.7.\n- NaOEt: conjugate acid is EtOH, pKa ≈ 16.\n- KOtBu: conjugate acid is tBuOH, pKa ≈ 18.\nStep 3: Only NH₃ has a pKa (36) greater than 25, meaning sodium amide is strong enough to shift the equilibrium completely to the deprotonated acetylide form.",
      "result": "Sodium amide (NaNH₂) is the only base listed capable of quantitatively deprotonating a terminal alkyne."
    }
  },
  {
    "question_id": "ch9_q12_alkylation_primary",
    "topic": "Alkyne Acidity & Acetylide Anions",
    "difficulty_level": "Medium",
    "question_text": "Predict the major organic product when propyne is treated with sodium amide in liquid ammonia, followed by the addition of 1-bromobutane.",
    "question_smiles": "CC#C",
    "options": [
      {
        "option_id": "A",
        "text": "hept-2-yne",
        "smiles": "CCCCC#CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "hept-3-yne",
        "smiles": "CCCC#CCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "hex-2-yne",
        "smiles": "CCCC#CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-methylhex-3-yne",
        "smiles": "CC(C)C#CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the alkylation of terminal alkynes via an SN2 substitution.",
      "process": "Step 1: Propyne (CH₃-C≡C-H) is treated with NaNH₂ to form the propynyl anion (CH₃-C≡C⁻).\nStep 2: The propynyl anion acts as a nucleophile in an SN2 reaction, attacking the primary carbon of 1-bromobutane (Br-CH₂-CH₂-CH₂-CH₃) and displacing bromide.\nStep 3: The resulting product has a 7-carbon chain with a triple bond starting at C2: hept-2-yne (CH₃-C≡C-CH₂-CH₂-CH₂-CH₃).",
      "result": "The major product is hept-2-yne."
    }
  },
  {
    "question_id": "ch9_q13_alkylation_tertiary",
    "topic": "Alkyne Acidity & Acetylide Anions",
    "difficulty_level": "Hard",
    "question_text": "What are the major organic products when sodium acetylide is treated with 2-bromo-2-methylpropane (tert-butyl bromide)?",
    "question_smiles": "C#C",
    "options": [
      {
        "option_id": "A",
        "text": "Acetylene and 2-methylpropene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3,3-dimethylbut-1-yne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,2-dimethylbut-3-yne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acetylene and 2-methylpropan-2-ol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question highlights the limitations of acetylide alkylation when using tertiary alkyl halides.",
      "process": "Step 1: Sodium acetylide (HC≡C⁻ Na⁺) is both a strong nucleophile and a strong base.\nStep 2: 2-bromo-2-methylpropane is a tertiary alkyl halide, which is highly sterically hindered and cannot undergo back-side attack (SN2 is blocked).\nStep 3: Because SN2 is prevented, the highly basic acetylide anion acts as a base and undergoes an E2 elimination reaction with the tertiary halide.\nStep 4: Elimination of HBr from tert-butyl bromide produces 2-methylpropene (isobutylene) and regenerates acetylene.",
      "result": "The products are acetylene and 2-methylpropene."
    }
  },
  {
    "question_id": "ch9_q14_reaction_carbonyl",
    "topic": "Alkyne Acidity & Acetylide Anions",
    "difficulty_level": "Medium",
    "question_text": "What is the structure of the product obtained when sodium acetylide is reacted with acetone (propan-2-one), followed by aqueous acid workup?",
    "question_smiles": "CC(=O)C",
    "options": [
      {
        "option_id": "A",
        "text": "2-methylbut-3-yn-2-ol",
        "smiles": "CC(C)(O)C#C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-methylbut-3-yn-2-ol",
        "smiles": "CC(C)(O)C=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-methylbut-3-en-2-ol",
        "smiles": "CC(C)(O)C=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "pent-3-yn-2-ol",
        "smiles": "CC(O)C#CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the nucleophilic addition of acetylide anions to carbonyl compounds (ketones).",
      "process": "Step 1: The acetylide anion (HC≡C⁻) attacks the electrophilic carbonyl carbon of acetone (CH₃COCH₃).\nStep 2: This forms an alkoxide intermediate: (CH₃)₂C(O⁻)C≡CH.\nStep 3: Protonation of the alkoxide with aqueous acid during workup yields the tertiary alcohol 2-methylbut-3-yn-2-ol.",
      "result": "The reaction yields the alkynyl alcohol 2-methylbut-3-yn-2-ol."
    }
  },
  {
    "question_id": "ch9_q15_reaction_epoxide",
    "topic": "Alkyne Acidity & Acetylide Anions",
    "difficulty_level": "Hard",
    "question_text": "Predict the major organic product when sodium prop-1-yn-1-ylide is reacted with oxirane (ethylene oxide), followed by mild aqueous acid workup.",
    "question_smiles": "C1CO1",
    "options": [
      {
        "option_id": "A",
        "text": "pent-3-yn-1-ol",
        "smiles": "CC#CCCO",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "pent-4-yn-1-ol",
        "smiles": "C#CCCCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "pent-2-yn-1-ol",
        "smiles": "CCC#CCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-methylbut-3-yn-1-ol",
        "smiles": "C#CC(C)CO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the nucleophilic ring opening of epoxides by acetylide anions.",
      "process": "Step 1: The propynyl anion (CH₃-C≡C⁻) attacks the less hindered carbon of the epoxide (oxirane is symmetric, so either carbon is equivalent).\nStep 2: Ring-opening occurs via an SN2 mechanism, producing an alkoxide intermediate: CH₃-C≡C-CH₂-CH₂-O⁻.\nStep 3: Acidic workup protonates the alkoxide to give the corresponding alcohol, pent-3-yn-1-ol.",
      "result": "The final product is pent-3-yn-1-ol."
    }
  },
  {
    "question_id": "ch9_q16_elimination_vicinal",
    "topic": "Alkyne Synthesis via Elimination",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product when 1,2-dibromobutane is treated with excess sodium amide (NaNH₂) in liquid ammonia, followed by a water workup?",
    "question_smiles": "CCC(Br)CBr",
    "options": [
      {
        "option_id": "A",
        "text": "but-1-yne",
        "smiles": "CCC#C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "but-2-yne",
        "smiles": "CC#CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "buta-1,3-diene",
        "smiles": "C=CC=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-bromobut-1-ene",
        "smiles": "CCC(Br)=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the double dehydrohalogenation of vicinal dihalides to form terminal alkynes.",
      "process": "Step 1: 1,2-dibromobutane is treated with a strong base (NaNH₂).\nStep 2: The first E2 elimination removes a proton from C1 or C2 to form a vinyl halide intermediate.\nStep 3: The second E2 elimination removes another proton and bromide to form the terminal alkyne but-1-yne.\nStep 4: Because terminal alkynes have an acidic proton (pKa ~ 25) and NaNH₂ is present in excess, the but-1-yne is immediately deprotonated to form sodium but-1-yn-1-ylide. This drives the reaction to completion.\nStep 5: Water workup protonates the acetylide salt to yield neutral but-1-yne.",
      "result": "The major product is but-1-yne."
    }
  },
  {
    "question_id": "ch9_q17_elimination_geminal",
    "topic": "Alkyne Synthesis via Elimination",
    "difficulty_level": "Hard",
    "question_text": "Predict the major product when 2,2-dichloropentane is treated with excess sodium amide (NaNH₂) in liquid ammonia, followed by water workup.",
    "question_smiles": "CCCC(Cl)(Cl)C",
    "options": [
      {
        "option_id": "A",
        "text": "pent-1-yne",
        "smiles": "CCCC#C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "pent-2-yne",
        "smiles": "CCC#CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "penta-1,2-diene",
        "smiles": "C=C=CCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "penta-1,3-diene",
        "smiles": "C=CC=CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the regioselectivity of double dehydrohalogenation in geminal dihalides to form alkynes.",
      "process": "Step 1: 2,2-dichloropentane has acidic protons on C1 (methyl group) and C3 (methylene group).\nStep 2: Elimination towards C3 would give the internal alkyne pent-2-yne. Elimination towards C1 would give the terminal alkyne pent-1-yne.\nStep 3: Since sodium amide is a very strong base, any terminal alkyne formed is immediately deprotonated to form a stable acetylide salt (pentynyl sodium). This irreversible deprotonation shifts the equilibrium completely to the terminal alkyne (pent-1-yne).\nStep 4: Aqueous workup protonates the sodium acetylide, yielding pent-1-yne.",
      "result": "The major product is the terminal alkyne pent-1-yne."
    }
  },
  {
    "question_id": "ch9_q18_base_internal_elimination",
    "topic": "Alkyne Synthesis via Elimination",
    "difficulty_level": "Medium",
    "question_text": "Which of the following reaction conditions is most suitable to synthesize the internal alkyne but-2-yne from 2,3-dibromobutane?",
    "question_smiles": "CC(Br)C(Br)C",
    "options": [
      {
        "option_id": "A",
        "text": "Molten KOH at high temperature (200 °C) or NaNH₂ (2 equivalents) in mineral oil with heat",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Sodium bicarbonate (NaHCO₃) in water at room temperature",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Sodium metal in liquid ammonia (Na / NH₃)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Dilute sulfuric acid in water (H₂SO₄ / H₂O)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question covers the specific reagents and conditions required for the double dehydrohalogenation to form internal alkynes.",
      "process": "Step 1: Internal alkynes do not have an acidic terminal proton, so we do not have the thermodynamic sink of acetylide formation to drive the reaction at room temperature.\nStep 2: The second elimination (from a vinyl halide intermediate) has a high activation energy.\nStep 3: Therefore, very strong bases (like KOH or NaNH₂) and high heat (e.g. 200 °C) are required to force the double elimination to completion and obtain the internal alkyne.",
      "result": "Molten KOH at high temperatures or NaNH₂ in mineral oil with heat is the correct answer."
    }
  },
  {
    "question_id": "ch9_q19_elimination_intermediate",
    "topic": "Alkyne Synthesis via Elimination",
    "difficulty_level": "Easy",
    "question_text": "What is the functional group of the intermediate that is formed after the first elimination step when a geminal or vicinal dihalide is treated with a base to form an alkyne?",
    "question_smiles": "CC(Br)C(Br)C",
    "options": [
      {
        "option_id": "A",
        "text": "Vinyl halide",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Allyl halide",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Haloalkyne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Allene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the understanding of the stepwise mechanism of double dehydrohalogenation.",
      "process": "Step 1: The starting dihalide (vicinal or geminal) undergoes a first E2 elimination reaction.\nStep 2: This elimination removes one hydrogen and one halogen atom, forming a double bond.\nStep 3: The halogen atom remains attached directly to one of the double-bonded carbons, which defines a vinyl halide (or haloalkene) functional group.",
      "result": "The intermediate is a vinyl halide."
    }
  },
  {
    "question_id": "ch9_q20_hydrohalogenation_one_eq",
    "topic": "Electrophilic Additions",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product when pent-1-yne is treated with 1 equivalent of hydrobromic acid (HBr)?",
    "question_smiles": "CCCC#C",
    "options": [
      {
        "option_id": "A",
        "text": "2-bromopent-1-ene",
        "smiles": "CCCC(Br)=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(E)-1-bromopent-1-ene",
        "smiles": "CCCC=CBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,2-dibromopentane",
        "smiles": "CCCC(Br)(Br)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,2-dibromopentane",
        "smiles": "CCCC(Br)CBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the regiochemical outcome of the electrophilic addition of HX to terminal alkynes.",
      "process": "Step 1: Protonation of pent-1-yne by HBr occurs at the terminal carbon (C1) to form the more stable secondary vinylic carbocation at C2 rather than a primary vinylic carbocation at C1.\nStep 2: Bromide ion attacks the vinylic carbocation at C2.\nStep 3: This results in the Markovnikov addition product, 2-bromopent-1-ene.",
      "result": "The product is 2-bromopent-1-ene."
    }
  },
  {
    "question_id": "ch9_q21_hydrohalogenation_excess",
    "topic": "Electrophilic Additions",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product when pent-1-yne is treated with excess (2 equivalents) hydrobromic acid (HBr)?",
    "question_smiles": "CCCC#C",
    "options": [
      {
        "option_id": "A",
        "text": "2,2-dibromopentane",
        "smiles": "CCCC(Br)(Br)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,2-dibromopentane",
        "smiles": "CCCC(Br)CBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,1-dibromopentane",
        "smiles": "CCCCC(Br)Br",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,3-dibromopentane",
        "smiles": "CCC(Br)C(Br)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the electrophilic addition of excess HX to terminal alkynes.",
      "process": "Step 1: The first equivalent of HBr adds to pent-1-yne to yield the Markovnikov product, 2-bromopent-1-ene.\nStep 2: The second equivalent of HBr adds to 2-bromopent-1-ene. Protonation of the alkene double bond occurs at the terminal C1 carbon to form a carbocation at C2.\nStep 3: The carbocation at C2 is highly stabilized by resonance through electron-donation from the adjacent bromine lone pairs (oxocarbocation-like stabilization).\nStep 4: Bromide ion attacks C2, yielding the geminal dihalide, 2,2-dibromopentane.",
      "result": "The major product is 2,2-dibromopentane."
    }
  },
  {
    "question_id": "ch9_q22_hydrohalogenation_peroxides",
    "topic": "Electrophilic Additions",
    "difficulty_level": "Hard",
    "question_text": "Predict the major product(s) when 1-hexyne is treated with HBr in the presence of organic peroxides (ROOR).",
    "question_smiles": "CCCCC#C",
    "options": [
      {
        "option_id": "A",
        "text": "A mixture of (E)- and (Z)-1-bromohex-1-ene",
        "smiles": "CCCCC=CBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-bromohex-1-ene",
        "smiles": "CCCCC(Br)=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,2-dibromohexane",
        "smiles": "CCCCC(Br)(Br)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,1-dibromohexane",
        "smiles": "CCCCCC(Br)Br",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the radical-mediated addition of HBr to alkynes, which exhibits anti-Markovnikov regioselectivity.",
      "process": "Step 1: Peroxides initiate the homolytic cleavage of HBr to generate bromine radicals.\nStep 2: The bromine radical attacks the terminal alkyne (1-hexyne). Attack occurs at C1 to form the more stable secondary vinylic radical at C2.\nStep 3: The vinylic radical abstracts a hydrogen atom from HBr to yield the vinyl bromide, 1-bromohex-1-ene, and regenerates the bromine radical.\nStep 4: Because the intermediate vinylic radical can equilibrate between stereoisomers, the product is obtained as a mixture of (E) and (Z) isomers.",
      "result": "A mixture of (E)- and (Z)-1-bromohex-1-ene is formed."
    }
  },
  {
    "question_id": "ch9_q23_halogenation_one_eq",
    "topic": "Electrophilic Additions",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product when but-2-yne is treated with 1 equivalent of bromine (Br₂) in CH₂Cl₂ at low temperature?",
    "question_smiles": "CC#CC",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-2,3-dibromobut-2-ene",
        "smiles": "C/C(Br)=C(\\\\Br)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-2,3-dibromobut-2-ene",
        "smiles": "C/C(Br)=C(/Br)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,2-dibromobutane",
        "smiles": "CC(Br)(Br)CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,2,3,3-tetrabromobutane",
        "smiles": "CC(Br)(Br)C(Br)(Br)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the stereochemistry of halogenation of alkynes.",
      "process": "Step 1: Bromine reacts with the triple bond of but-2-yne to form a cyclic bromonium ion intermediate.\nStep 2: The bromide ion attacks the three-membered ring from the opposite side (anti-addition).\nStep 3: This anti-addition results in the trans-dihalide, (E)-2,3-dibromobut-2-ene.",
      "result": "The major product is (E)-2,3-dibromobut-2-ene."
    }
  },
  {
    "question_id": "ch9_q24_halogenation_excess",
    "topic": "Electrophilic Additions",
    "difficulty_level": "Easy",
    "question_text": "What is the major product when hex-3-yne is treated with excess chlorine gas (Cl₂)?",
    "question_smiles": "CCC#CCC",
    "options": [
      {
        "option_id": "A",
        "text": "3,3,4,4-tetrachlorohexane",
        "smiles": "CCC(Cl)(Cl)C(Cl)(Cl)CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3,4-dichlorohex-3-ene",
        "smiles": "CCC(Cl)=C(Cl)CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,2,3,4-tetrachlorohexane",
        "smiles": "CCC(Cl)C(Cl)C(Cl)CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,2,3,3-tetrachlorohexane",
        "smiles": "CC(Cl)(Cl)C(Cl)(Cl)CCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the reaction of alkynes with excess halogen.",
      "process": "Step 1: One equivalent of Cl₂ adds across the triple bond of hex-3-yne to form 3,4-dichlorohex-3-ene.\nStep 2: The remaining double bond of 3,4-dichlorohex-3-ene reacts with a second equivalent of Cl₂.\nStep 3: Chlorine addition across the double bond yields the tetrahalogenated alkane, 3,3,4,4-tetrachlorohexane.",
      "result": "The product is 3,3,4,4-tetrachlorohexane."
    }
  },
  {
    "question_id": "ch9_q25_reactivity_rational",
    "topic": "Electrophilic Additions",
    "difficulty_level": "Hard",
    "question_text": "Despite having a higher density of pi electrons, alkynes are generally less reactive than alkenes toward electrophilic additions. Which of the following is the primary thermodynamic reason for this behavior?",
    "question_smiles": "C#C",
    "options": [
      {
        "option_id": "A",
        "text": "The intermediate vinylic carbocation is less stable than an alkyl carbocation due to the higher electronegativity of the sp-hybridized carbon.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The triple bond is shorter, which sterically prevents electrophilic attack.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The pi electrons in alkynes are held more tightly than in alkenes, making them poorer nucleophiles.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Electrophilic addition to alkynes is endothermic overall, while addition to alkenes is exothermic.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the conceptual understanding of the relative rates of electrophilic additions to alkynes versus alkenes.",
      "process": "Step 1: Electrophilic addition to an alkyne goes through a vinylic carbocation intermediate (R-C⁺=CH₂), where the positive charge is on an sp-hybridized carbon.\nStep 2: An sp-hybridized carbon has 50% s-character and is more electronegative than an sp²-hybridized carbon (33.3% s-character). Therefore, an sp carbon does not stabilize a positive charge well.\nStep 3: Since the intermediate vinylic carbocation is highly unstable (high energy), the transition state leading to it is also high in energy, resulting in a slower reaction rate compared to alkenes.",
      "result": "The instability of the vinylic carbocation intermediate is the primary reason for the lower reactivity of alkynes."
    }
  },
  {
    "question_id": "ch9_q26_hydration_terminal",
    "topic": "Hydration",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product when hex-1-yne is treated with aqueous sulfuric acid in the presence of mercuric sulfate (HgSO₄)?",
    "question_smiles": "CCCCC#C",
    "options": [
      {
        "option_id": "A",
        "text": "hexan-2-one",
        "smiles": "CCCCC(=O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "hexanal",
        "smiles": "CCCCCC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "hexan-3-one",
        "smiles": "CCCC(=O)CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "hex-1-en-2-ol",
        "smiles": "CCCCC(O)=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the acid-catalyzed hydration of terminal alkynes, which yields ketones via Markovnikov addition.",
      "process": "Step 1: Hg²⁺ coordinates to the triple bond of hex-1-yne, activating it towards nucleophilic attack by water.\nStep 2: Water attacks the more substituted carbon (C2), forming a mercurinium-enol intermediate.\nStep 3: Protonolysis of the C-Hg bond gives the enol intermediate hex-1-en-2-ol.\nStep 4: Under the acidic conditions, the enol rapidly tautomerizes to its more stable keto form, hexan-2-one.",
      "result": "The major product is hexan-2-one."
    }
  },
  {
    "question_id": "ch9_q27_hydration_symmetrical",
    "topic": "Hydration",
    "difficulty_level": "Medium",
    "question_text": "Predict the major organic product when hex-3-yne is reacted with water, sulfuric acid, and mercuric sulfate.",
    "question_smiles": "CCC#CCC",
    "options": [
      {
        "option_id": "A",
        "text": "hexan-3-one",
        "smiles": "CCC(=O)CCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "hexan-2-one",
        "smiles": "CCCC(=O)CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "hexanal",
        "smiles": "CCCCCC=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A mixture of hexan-2-one and hexan-3-one",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the hydration of symmetrical internal alkynes.",
      "process": "Step 1: Hex-3-yne is a symmetrical alkyne. Nucleophilic attack by water on either C3 or C4 yields the same enol intermediate: hex-3-en-3-ol.\nStep 2: Tautomerization of hex-3-en-3-ol yields the ketone hexan-3-one.\nStep 3: Because the starting material is symmetrical, only one product is formed.",
      "result": "The product is hexan-3-one."
    }
  },
  {
    "question_id": "ch9_q28_hydration_unsymmetrical",
    "topic": "Hydration",
    "difficulty_level": "Hard",
    "question_text": "What is the outcome of reacting pent-2-yne with aqueous sulfuric acid in the presence of mercuric sulfate?",
    "question_smiles": "CCC#CC",
    "options": [
      {
        "option_id": "A",
        "text": "A roughly equal mixture of pentan-2-one and pentan-3-one",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "pentan-2-one only",
        "smiles": "CCCC(=O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "pentan-3-one only",
        "smiles": "CCC(=O)CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "pentanal only",
        "smiles": "CCCCC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests hydration of unsymmetrical internal alkynes, which lack regiochemical preference.",
      "process": "Step 1: Pent-2-yne is unsymmetrical, with methyl on one side of the triple bond and ethyl on the other.\nStep 2: Both triple-bonded carbons (C2 and C3) are similarly substituted (both are internal and connected to carbon chains), so the mercuric-catalyzed hydration has no strong regiochemical preference.\nStep 3: Attack at C2 yields the enol pent-2-en-2-ol, which tautomerizes to pentan-2-one.\nStep 4: Attack at C3 yields the enol pent-2-en-3-ol, which tautomerizes to pentan-3-one. A mixture of both ketones is obtained.",
      "result": "A mixture of pentan-2-one and pentan-3-one is formed."
    }
  },
  {
    "question_id": "ch9_q29_hydroboration_terminal",
    "topic": "Hydration",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the hydroboration-oxidation of hex-1-yne using disiamylborane, followed by hydrogen peroxide and sodium hydroxide?",
    "question_smiles": "CCCCC#C",
    "options": [
      {
        "option_id": "A",
        "text": "hexanal",
        "smiles": "CCCCCC=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "hexan-2-one",
        "smiles": "CCCCC(=O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "hexan-1-ol",
        "smiles": "CCCCCCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "hexan-3-one",
        "smiles": "CCCC(=O)CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the hydroboration-oxidation of terminal alkynes, which yields aldehydes.",
      "process": "Step 1: Disiamylborane is a sterically hindered borane. It adds to the terminal carbon of hex-1-yne (anti-Markovnikov addition) to form a vinylborane intermediate.\nStep 2: Oxidation of the vinylborane with H₂O₂ and NaOH replaces the boron atom with a hydroxyl group, forming a terminal enol intermediate.\nStep 3: The terminal enol rapidly tautomerizes to the more stable aldehyde form, hexanal.",
      "result": "The final product is hexanal."
    }
  },
  {
    "question_id": "ch9_q30_hydroboration_intermediate",
    "topic": "Hydration",
    "difficulty_level": "Hard",
    "question_text": "What is the structure of the enol intermediate formed upon basic peroxide oxidation of the vinylborane intermediate in the hydroboration of propyne?",
    "question_smiles": "CC#C",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-prop-1-en-1-ol",
        "smiles": "C/C=C/O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "prop-1-en-2-ol",
        "smiles": "CC(O)=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "prop-2-en-1-ol",
        "smiles": "C=CCO",
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
      "context": "This question tests the structural and stereochemical details of the enol intermediate in alkyne hydroboration.",
      "process": "Step 1: Hydroboration of propyne (CH₃-C≡C-H) involves the syn-addition of H-B across the triple bond. The bulky boron atom adds to the less hindered terminal carbon (C1) and the hydrogen adds to C2.\nStep 2: In the syn-addition transition state, the hydrogen and boron add to the same side of the triple bond, placing the methyl group (C3) and boron trans to each other.\nStep 3: Oxidation with basic H₂O₂ replaces the boron atom with OH with retention of configuration, resulting in (E)-prop-1-en-1-ol.",
      "result": "The intermediate is (E)-prop-1-en-1-ol."
    }
  },
  {
    "question_id": "ch9_q31_acid_tautomerism_mech",
    "topic": "Hydration",
    "difficulty_level": "Medium",
    "question_text": "Which of the following describes the first step of the mechanism for the acid-catalyzed tautomerization of the enol prop-1-en-2-ol to acetone?",
    "question_smiles": "CC(O)=C",
    "options": [
      {
        "option_id": "A",
        "text": "Protonation of the double bond carbon (CH₂) to form a resonance-stabilized oxocarbocation.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Deprotonation of the oxygen atom by water to form an enolate.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Protonation of the oxygen atom to form a protonated enol.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Nucleophilic attack by water on the double bond.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the mechanistic details of acid-catalyzed keto-enol tautomerism.",
      "process": "Step 1: In acidic solution, the double bond of the enol acts as a nucleophile. It is protonated at the terminal carbon (CH₂) to generate a carbocation at the carbon bearing the hydroxyl group (C2).\nStep 2: The positive charge at C2 is stabilized by resonance from the lone pair of the oxygen atom, forming a highly stable oxocarbocation.\nStep 3: Subsequent deprotonation of the oxygen by water yields acetone.",
      "result": "The first step is protonation of the double bond carbon."
    }
  },
  {
    "question_id": "ch9_q32_base_tautomerism_mech",
    "topic": "Hydration",
    "difficulty_level": "Medium",
    "question_text": "What is the key intermediate formed in the first step of the base-catalyzed tautomerization of an enol to its keto form?",
    "question_smiles": "CC(O)=C",
    "options": [
      {
        "option_id": "A",
        "text": "Enolate anion",
        "smiles": "CC([O-])=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Oxocarbocation",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Vinylic carbocation",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Vinylic radical",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the base-catalyzed mechanism of keto-enol tautomerism.",
      "process": "Step 1: Under basic conditions, the base removes the acidic proton from the hydroxyl group (-OH) of the enol.\nStep 2: This deprotonation yields a resonance-stabilized enolate anion (CH₂=C(O⁻)-CH₃ ↔ ⁻CH₂-C(=O)-CH₃).\nStep 3: Protonation of the enolate carbon by water then yields the keto form (acetone).",
      "result": "The intermediate is the enolate anion."
    }
  },
  {
    "question_id": "ch9_q33_complete_hydrogenation",
    "topic": "Reduction",
    "difficulty_level": "Easy",
    "question_text": "What is the major organic product when dec-4-yne is treated with excess hydrogen gas (H₂) in the presence of a palladium on carbon (Pd/C) catalyst?",
    "question_smiles": "CCCCCC#CCC",
    "options": [
      {
        "option_id": "A",
        "text": "decane",
        "smiles": "CCCCCCCCCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-dec-4-ene",
        "smiles": "CCCCC/C=C\\CCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)-dec-4-ene",
        "smiles": "CCCCC/C=C/CCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "dec-4-yne (no reaction occurs)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests complete catalytic reduction of alkynes to alkanes.",
      "process": "Step 1: Catalytic hydrogenation using a strong transition metal catalyst like Pd/C reduces alkynes to alkanes.\nStep 2: Although the reaction proceeds stepwise through an alkene intermediate, the alkene is more reactive toward hydrogenation than the alkyne and is immediately reduced further to the alkane.\nStep 3: Complete reduction of the 10-carbon alkyne (dec-4-yne) yields decane.",
      "result": "The major product is decane."
    }
  },
  {
    "question_id": "ch9_q34_lindlar_reduction",
    "topic": "Reduction",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product when hex-3-yne is reduced using hydrogen gas in the presence of Lindlar's catalyst?",
    "question_smiles": "CCC#CCC",
    "options": [
      {
        "option_id": "A",
        "text": "(Z)-hex-3-ene",
        "smiles": "CC/C=C\\\\CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(E)-hex-3-ene",
        "smiles": "CC/C=C/CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "hexane",
        "smiles": "CCCCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "hexan-3-ol",
        "smiles": "CCC(O)CCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the partial reduction of alkynes to cis-alkenes using a poisoned catalyst.",
      "process": "Step 1: Lindlar's catalyst is palladium poisoned with lead acetate and quinoline, which decreases its catalytic activity.\nStep 2: This poisoned catalyst is active enough to reduce the triple bond of an alkyne to a double bond, but inactive towards reducing alkenes to alkanes.\nStep 3: The hydrogen atoms add to the same face of the triple bond (syn-addition), yielding the cis-alkene, (Z)-hex-3-ene.",
      "result": "The product is (Z)-hex-3-ene."
    }
  },
  {
    "question_id": "ch9_q35_dissolving_metal_reduction",
    "topic": "Reduction",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product when hex-3-yne is treated with sodium metal in liquid ammonia (Na / NH₃)?",
    "question_smiles": "CCC#CCC",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-hex-3-ene",
        "smiles": "CC/C=C/CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-hex-3-ene",
        "smiles": "CC/C=C\\\\CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "hexane",
        "smiles": "CCCCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-sodiohex-3-ene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the partial reduction of alkynes to trans-alkenes using dissolving metal conditions.",
      "process": "Step 1: Sodium in liquid ammonia represents a dissolving metal reduction.\nStep 2: The reaction proceeds via single-electron transfer from sodium to the alkyne to form a radical anion, followed by protonation by ammonia. This sequence is repeated to yield the alkene.\nStep 3: The addition of hydrogens occurs in an anti-fashion, yielding the trans-alkene, (E)-hex-3-ene.",
      "result": "The major product is (E)-hex-3-ene."
    }
  },
  {
    "question_id": "ch9_q36_metal_reduction_selectivity",
    "topic": "Reduction",
    "difficulty_level": "Hard",
    "question_text": "What is the key factor that determines the trans-stereoselectivity in the dissolving metal reduction of internal alkynes?",
    "question_smiles": "CC#CC",
    "options": [
      {
        "option_id": "A",
        "text": "The trans-radical anion intermediate is thermodynamically more stable than the cis-radical because the alkyl groups are further apart.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ammonia forces a stereochemical inversion at the carbon-carbon triple bond.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The sodium metal coordinates to both sides of the triple bond, forcing the trans configuration.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The reaction occurs on a metal surface that only allows anti-addition.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the mechanistic understanding of stereoselectivity in dissolving metal reductions.",
      "process": "Step 1: The first step of the reduction is the transfer of an electron from Na to the alkyne, forming a radical anion.\nStep 2: The radical anion has a negative charge and a radical electron on the two carbons, which can adopt a cis-like or trans-like configuration.\nStep 3: The trans-configuration is significantly lower in energy because it minimizes steric repulsion between the two alkyl groups.\nStep 4: Protonation of this stable trans-radical anion leads to the trans-vinylic radical, which eventually yields the trans-alkene.",
      "result": "The thermodynamic stability of the trans-radical anion intermediate dictates the trans-selectivity."
    }
  },
  {
    "question_id": "ch9_q37_terminal_alkyne_metal_reduction",
    "topic": "Reduction",
    "difficulty_level": "Hard",
    "question_text": "What is the outcome when the terminal alkyne 1-hexyne is treated with sodium in liquid ammonia (Na / NH₃), followed by an aqueous workup?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The starting material (1-hexyne) is recovered largely unchanged.",
        "smiles": "CCCCC#C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-hexene is formed in high yield.",
        "smiles": "CCCCC=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "trans-hex-2-ene is formed.",
        "smiles": "CCCC/C=C/C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "hexane is formed.",
        "smiles": "CCCCCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the acid-base side reaction that competes in dissolving metal reductions of terminal alkynes.",
      "process": "Step 1: Terminal alkynes are relatively acidic (pKa ≈ 25).\nStep 2: Sodium metal in liquid ammonia generates solvated electrons and amide ions, which are highly basic.\nStep 3: Instead of undergoing reduction, the terminal alkyne is deprotonated by the basic medium to form a sodium acetylide salt.\nStep 4: The acetylide anion has a negative charge, which makes it resistant to accepting another electron (since like charges repel). Thus, reduction is arrested.\nStep 5: During aqueous workup, the acetylide salt is protonated back to recover the terminal alkyne, 1-hexyne.",
      "result": "The terminal alkyne is not reduced; starting material is recovered."
    }
  },
  {
    "question_id": "ch9_q38_ozonolysis_internal",
    "topic": "Oxidative Cleavage",
    "difficulty_level": "Medium",
    "question_text": "What are the major organic products when oct-4-yne is treated with ozone (O₃), followed by a water workup (H₂O)?",
    "question_smiles": "CCCC#CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Two molecules of butanoic acid",
        "smiles": "CCCC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Two molecules of butanal",
        "smiles": "CCCC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "One molecule of octan-4-one",
        "smiles": "CCCC(=O)CCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Octane-4,5-dione",
        "smiles": "CCCC(=O)C(=O)CCCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the ozonolysis of internal alkynes.",
      "process": "Step 1: Ozone cleaves the carbon-carbon triple bond of the alkyne.\nStep 2: Under aqueous workup, the triple-bonded carbons are oxidized to carboxylic acids.\nStep 3: Since oct-4-yne is a symmetrical alkyne, cleavage at C4-C5 yields two identical 4-carbon carboxylic acid molecules: butanoic acid.",
      "result": "The products are two molecules of butanoic acid."
    }
  },
  {
    "question_id": "ch9_q39_ozonolysis_terminal",
    "topic": "Oxidative Cleavage",
    "difficulty_level": "Hard",
    "question_text": "What are the major organic products when hex-1-yne is treated with ozone (O₃), followed by a water workup?",
    "question_smiles": "CCCCC#C",
    "options": [
      {
        "option_id": "A",
        "text": "Pentanoic acid and carbon dioxide (CO₂)",
        "smiles": "CCCCC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Pentanoic acid and formic acid",
        "smiles": "OC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Pentanal and formaldehyde",
        "smiles": "CCCCCC=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Hexanoic acid and water",
        "smiles": "CCCCCC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the ozonolysis of terminal alkynes.",
      "process": "Step 1: Ozonolysis cleaves the triple bond of hex-1-yne between C1 and C2.\nStep 2: The C2 carbon (bearing the alkyl chain) is oxidized to a carboxylic acid, pentanoic acid (5 carbons).\nStep 3: The terminal C1 carbon is oxidized to carbonic acid, which is unstable and decomposes into carbon dioxide (CO₂) and water.",
      "result": "The products are pentanoic acid and carbon dioxide."
    }
  },
  {
    "question_id": "ch9_q40_kmno4_harsh",
    "topic": "Oxidative Cleavage",
    "difficulty_level": "Medium",
    "question_text": "What are the major organic products when hept-3-yne is treated with hot, basic potassium permanganate (KMnO₄, NaOH, heat), followed by acid workup?",
    "question_smiles": "CCCC#CCC",
    "options": [
      {
        "option_id": "A",
        "text": "Propanoic acid and butanoic acid",
        "smiles": "CCC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propanal and butanal",
        "smiles": "CCC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Heptan-3-one and heptan-4-one",
        "smiles": "CCCC(=O)CCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Heptane-3,4-dione",
        "smiles": "CCC(=O)C(=O)CCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the harsh oxidative cleavage of internal alkynes using hot KMnO₄.",
      "process": "Step 1: Hot, basic KMnO₄ cleaves the triple bond of hept-3-yne.\nStep 2: The alkyne carbons are oxidized to carboxylate salts.\nStep 3: Acid workup protonates the carboxylate salts to yield carboxylic acids.\nStep 4: Cleavage of hept-3-yne (which has a 3-carbon ethyl group on one side and a 4-carbon propyl group on the other) yields propanoic acid and butanoic acid.",
      "result": "The reaction yields propanoic acid and butanoic acid."
    }
  },
  {
    "question_id": "ch9_q41_kmno4_mild",
    "topic": "Oxidative Cleavage",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product when oct-4-yne is treated with aqueous potassium permanganate (KMnO₄) under mild, neutral conditions?",
    "question_smiles": "CCCC#CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "octane-4,5-dione",
        "smiles": "CCCC(=O)C(=O)CCCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Two molecules of butanoic acid",
        "smiles": "CCCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)-oct-4-ene-4,5-diol",
        "smiles": "CCC/C(O)=C(\\\\O)CCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "octan-4-one",
        "smiles": "CCCC(=O)CCCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the oxidation of alkynes under mild, neutral KMnO₄ conditions.",
      "process": "Step 1: Under mild, neutral conditions (neutral pH, dilute, cool KMnO₄), potassium permanganate does not cleave the carbon-carbon sigma bond of the alkyne.\nStep 2: Instead, the triple bond is oxidized to a 1,2-diketone (vicinal diketone).\nStep 3: For the symmetrical alkyne oct-4-yne, this oxidation yields octane-4,5-dione.",
      "result": "The major product is octane-4,5-dione."
    }
  },
  {
    "question_id": "ch9_q42_synthesis_cis_alkene",
    "topic": "Synthesis",
    "difficulty_level": "Medium",
    "question_text": "What is the final major product of the following reaction sequence?",
    "question_text_list": [
      "1. propyne + NaNH₂ in NH₃(l)",
      "2. 1-bromopropane",
      "3. H₂ / Lindlar's catalyst"
    ],
    "question_smiles": "CC#C",
    "options": [
      {
        "option_id": "A",
        "text": "(Z)-hex-2-ene",
        "smiles": "CC/C=C\\\\CCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(E)-hex-2-ene",
        "smiles": "CC/C=C/CCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "hexane",
        "smiles": "CCCCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(Z)-hex-3-ene",
        "smiles": "CCC/C=C\\\\CCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests a multi-step synthesis combining acetylide alkylation with a stereoselective alkyne reduction.",
      "process": "Step 1: Propyne is deprotonated by NaNH₂ to form the propynyl anion (CH₃-C≡C⁻).\nStep 2: Alkylation of the propynyl anion with 1-bromopropane via an SN2 reaction yields the internal alkyne hex-2-yne (CH₃-C≡C-CH₂-CH₂-CH₃).\nStep 3: Reduction of hex-2-yne with hydrogen gas in the presence of Lindlar's catalyst undergoes syn-addition to yield the cis-alkene, (Z)-hex-2-ene.",
      "result": "The major product is (Z)-hex-2-ene."
    }
  },
  {
    "question_id": "ch9_q43_synthesis_trans_alkene",
    "topic": "Synthesis",
    "difficulty_level": "Medium",
    "question_text": "What is the final major product of the following reaction sequence?",
    "question_text_list": [
      "1. 1-butyne + NaNH₂ in NH₃(l)",
      "2. 1-bromopropane",
      "3. Na / liquid NH₃"
    ],
    "question_smiles": "CCC#C",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-hept-3-ene",
        "smiles": "CC/C=C/CCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-hept-3-ene",
        "smiles": "CC/C=C\\\\CCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "heptane",
        "smiles": "CCCCCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(E)-hept-2-ene",
        "smiles": "C/C=C/CCCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests a multi-step synthesis involving acetylide alkylation and stereoselective reduction to a trans-alkene.",
      "process": "Step 1: 1-butyne is deprotonated by NaNH₂ to form the butynyl anion (CH₃-CH₂-C≡C⁻).\nStep 2: Alkylation with 1-bromopropane via SN2 yields hept-3-yne (CH₃-CH₂-C≡C-CH₂-CH₂-CH₃).\nStep 3: Reduction of hept-3-yne with Na in liquid NH₃ performs an anti-addition of hydrogen to yield the trans-alkene, (E)-hept-3-ene.",
      "result": "The major product is (E)-hept-3-ene."
    }
  },
  {
    "question_id": "ch9_q44_synthesis_ketone",
    "topic": "Synthesis",
    "difficulty_level": "Medium",
    "question_text": "What is the final major organic product of the following reaction sequence?",
    "question_text_list": [
      "1. propyne + NaNH₂ in NH₃(l)",
      "2. iodomethane",
      "3. H₂O, H₂SO₄, HgSO₄"
    ],
    "question_smiles": "CC#C",
    "options": [
      {
        "option_id": "A",
        "text": "butan-2-one",
        "smiles": "CC(=O)CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "butanal",
        "smiles": "CCCC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "but-2-en-2-ol",
        "smiles": "CC(O)=CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "acetone",
        "smiles": "CC(=O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests a multi-step synthesis combining alkylation of a terminal alkyne with hydration.",
      "process": "Step 1: Propyne is deprotonated to the propynyl anion and alkylated with iodomethane to yield the symmetrical alkyne but-2-yne (CH₃-C≡C-CH₃).\nStep 2: Hydration of but-2-yne with aqueous H₂SO₄/HgSO₄ yields the enol but-2-en-2-ol.\nStep 3: Tautomerization of the enol yields the ketone butan-2-one.",
      "result": "The final product is butan-2-one."
    }
  },
  {
    "question_id": "ch9_q45_synthesis_aldehyde",
    "topic": "Synthesis",
    "difficulty_level": "Hard",
    "question_text": "What is the final major organic product of the following reaction sequence?",
    "question_text_list": [
      "1. acetylene + NaNH₂ in NH₃(l)",
      "2. 1-bromobutane",
      "3. disiamylborane, then H₂O₂, NaOH"
    ],
    "question_smiles": "C#C",
    "options": [
      {
        "option_id": "A",
        "text": "hexanal",
        "smiles": "CCCCCC=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "hexan-2-one",
        "smiles": "CCCCC(=O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "hexan-1-ol",
        "smiles": "CCCCCCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "pentanal",
        "smiles": "CCCCCO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests a multi-step synthesis combining monoalkylation of acetylene with hydroboration-oxidation to yield an aldehyde.",
      "process": "Step 1: Acetylene is treated with 1 equivalent of NaNH₂ to form sodium acetylide, which is then alkylated with 1-bromobutane to yield the terminal alkyne hex-1-yne.\nStep 2: Hydroboration of hex-1-yne with disiamylborane results in anti-Markovnikov addition of boron to C1.\nStep 3: Basic peroxide oxidation replaces boron with a hydroxyl group, giving the terminal enol hex-1-en-1-ol.\nStep 4: Tautomerization of this enol yields the aldehyde, hexanal.",
      "result": "The final major product is hexanal."
    }
  },
  {
    "question_id": "ch9_q46_chemoselectivity_halogenation",
    "topic": "Electrophilic Additions",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product when 1-hexen-5-yne is treated with 1 equivalent of bromine (Br₂) in CH₂Cl₂ at low temperature?",
    "question_smiles": "C=CCCC#C",
    "options": [
      {
        "option_id": "A",
        "text": "5,6-dibromohex-1-yne",
        "smiles": "C#CCCC(Br)CBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,2-dibromohex-5-yne",
        "smiles": "C=CCCC(Br)CBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,2,5,6-tetrabromohexane",
        "smiles": "BrCC(Br)CCC(Br)CBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5,6-dibromohex-1-ene",
        "smiles": "BrCC(Br)CCC=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the chemoselectivity of electrophilic addition to compounds containing both alkene and alkyne functional groups.",
      "process": "Step 1: Alkenes are generally more reactive than alkynes toward electrophilic addition because the carbocation (or bromonium ion) intermediate from an alkene is much more stable than that from an alkyne.\nStep 2: Therefore, 1 equivalent of Br₂ will add selectively to the double bond, leaving the triple bond intact.\nStep 3: The double bond at C1-C2 of 1-hexen-5-yne reacts to form a dibromo alkane, while the C5-C6 triple bond remains unchanged.\nStep 4: To name the product, we number the chain from the end closer to the remaining unsaturation (the triple bond at C1). The bromines are thus at C5 and C6, yielding 5,6-dibromohex-1-yne.",
      "result": "The major product is 5,6-dibromohex-1-yne."
    }
  },
  {
    "question_id": "ch9_q47_heat_of_hydrogenation",
    "topic": "Alkyne Structure & Bonding",
    "difficulty_level": "Hard",
    "question_text": "Which of the following isomeric hydrocarbons releases the greatest amount of heat (i.e. has the most exothermic heat of hydrogenation) upon complete catalytic hydrogenation to hexane?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "hex-1-yne",
        "smiles": "CCCCC#C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "hex-3-yne",
        "smiles": "CCC#CCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)-hexa-1,3-diene",
        "smiles": "C=CC=CCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "hexa-1,5-diene",
        "smiles": "C=CCCC=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the relative thermodynamic stabilities of alkynes and dienes using heats of hydrogenation.",
      "process": "Step 1: Complete hydrogenation of all four compounds yields the same product, hexane. Thus, the heat of hydrogenation is directly proportional to the potential energy of the starting material.\nStep 2: The least stable (highest energy) isomer will release the greatest amount of heat.\nStep 3: Compare stabilities:\n- Conjugated dienes ((E)-hexa-1,3-diene) are the most stable due to resonance conjugation.\n- Isolated dienes (hexa-1,5-diene) are less stable than conjugated ones but more stable than alkynes.\n- Alkynes are less stable (higher energy) than isomeric dienes due to the high energy of two pi bonds on the same carbon-carbon linkage.\n- Within alkynes, terminal alkynes (hex-1-yne) are less stable than internal alkynes (hex-3-yne) due to less hyperconjugative stabilization.\nStep 4: Therefore, hex-1-yne is the least stable isomer and has the highest heat of hydrogenation.",
      "result": "The compound with the highest heat of hydrogenation is hex-1-yne."
    }
  },
  {
    "question_id": "ch9_q48_enol_tautomer_identification",
    "topic": "Hydration",
    "difficulty_level": "Easy",
    "question_text": "What is the major keto tautomer of the enol 3-methylbut-2-en-2-ol?",
    "question_smiles": "CC(O)=C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "3-methylbutan-2-one",
        "smiles": "CC(=O)C(C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-methylbutanal",
        "smiles": "CC(C)CC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "pentan-2-one",
        "smiles": "CCCC(=O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-methylbut-3-en-2-one",
        "smiles": "CC(=O)C(=C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the ability to convert an enol structure to its corresponding keto tautomer.",
      "process": "Step 1: Analyze the enol structure: 3-methylbut-2-en-2-ol has a double bond between C2 and C3, and a hydroxyl group at C2.\nStep 2: Protonate the alkene carbon that does not bear the -OH group (C3).\nStep 3: Deprotonate the hydroxyl group at C2, converting the C-O single bond to a C=O double bond.\nStep 4: This yields 3-methylbutan-2-one.",
      "result": "The keto tautomer is 3-methylbutan-2-one."
    }
  },
  {
    "question_id": "ch9_q49_retrosynthesis_cis",
    "topic": "Synthesis",
    "difficulty_level": "Hard",
    "question_text": "Which of the following sequences represents the most efficient synthesis of (Z)-hex-3-ene starting from acetylene?",
    "question_smiles": "CC/C=C\\\\CC",
    "options": [
      {
        "option_id": "A",
        "text": "1. NaNH₂ (2 eq); 2. bromoethane (2 eq); 3. H₂ / Lindlar's catalyst",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1. NaNH₂ (2 eq); 2. bromoethane (2 eq); 3. Na / liquid NH₃",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1. NaNH₂ (1 eq); 2. bromoethane (1 eq); 3. H₂ / Lindlar's catalyst",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1. bromoethane (2 eq); 2. H₂ / Pd-C",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests retrosynthetic planning for a cis-alkene.",
      "process": "Step 1: Disconnect the target molecule (Z)-hex-3-ene. The cis-alkene is best prepared by the partial hydrogenation of the corresponding internal alkyne, hex-3-yne, using H₂ and Lindlar's catalyst.\nStep 2: Hex-3-yne can be synthesized by the double alkylation of acetylene.\nStep 3: Treat acetylene with 2 equivalents of sodium amide (NaNH₂) to deprotonate both ends, and react with 2 equivalents of bromoethane to form hex-3-yne.\nStep 4: Finally, reduce hex-3-yne with H₂/Lindlar to get the (Z) product.",
      "result": "The correct sequence is: NaNH₂ (2 eq), bromoethane (2 eq), then H₂ / Lindlar's catalyst."
    }
  },
  {
    "question_id": "ch9_q50_retrosynthesis_ozonolysis",
    "topic": "Oxidative Cleavage",
    "difficulty_level": "Hard",
    "question_text": "An unknown alkyne undergoes oxidative cleavage with ozone followed by water to yield propanoic acid and 2-methylpropanoic acid. What is the systematic IUPAC name of the starting alkyne?",
    "question_smiles": "CCC#CC(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "5-methylhex-3-yne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "2-methylhex-3-yne (correct IUPAC name)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "2-methylhex-2-yne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "hept-3-yne",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests retrosynthetic analysis of an alkyne based on oxidative cleavage products.",
      "process": "Step 1: Ozonolysis cleaves the C≡C triple bond of the starting alkyne, converting each alkyne carbon to a carboxylic acid group (-COOH).\nStep 2: The products are:\n- Propanoic acid: CH₃-CH₂-COOH (a 3-carbon straight chain fragment).\n- 2-Methylpropanoic acid: (CH₃)₂CH-COOH (a 4-carbon branched fragment).\nStep 3: Join the carboxyl carbons of these two acids via a triple bond to reassemble the starting alkyne: CH₃-CH₂-C≡C-CH(CH₃)₂.\nStep 4: Name the resulting alkyne: the longest chain containing the triple bond has 6 carbons. We must number from the end that gives substituents the lowest possible numbers. Numbering from right-to-left puts the methyl group at C2 and the triple bond at C3, yielding 2-methylhex-3-yne. Numbering from left-to-right would yield 5-methylhex-3-yne, which is incorrect because 2 is lower than 5.",
      "result": "The starting alkyne is 2-methylhex-3-yne."
    }
  }
];
