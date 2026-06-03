// McMurry Chapter 3 questions
const CHAPTER_3_QUESTIONS = [
  {
    "question_id": "ch3_q1_functional_group_identification",
    "topic": "Functional Groups",
    "difficulty_level": "Easy",
    "question_text": "Identify the functional group present in the compound represented by the following structure: CH3-CH2-O-CH2-CH3.",
    "question_smiles": "CCOCC",
    "options": [
      {
        "option_id": "A",
        "text": "Ether",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Alcohol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ester",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ketone",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the basic identification of oxygen-containing functional groups.",
      "process": "Step 1: Locate the oxygen atom in the structure. It is bonded to two alkyl (ethyl) groups.\nStep 2: Compare this structure ($R-O-R$) with standard functional group classes.\nStep 3: A compound with an oxygen atom bridged between two carbon chains is classified as an ether.",
      "result": "The functional group is an ether."
    }
  },
  {
    "question_id": "ch3_q2_functional_group_ester",
    "topic": "Functional Groups",
    "difficulty_level": "Easy",
    "question_text": "Which functional group is characterized by a carbonyl carbon bonded to an alkoxy (-OR) group?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Ester",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ether",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Carboxylic acid",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Amide",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify functional groups containing carbonyls.",
      "process": "Step 1: A carbonyl is a carbon-oxygen double bond ($C=O$).\nStep 2: When the carbonyl carbon is bonded to an $-OR$ group, the layout is $R-CO-OR$.\nStep 3: This specific layout characterizes an ester.",
      "result": "The correct functional group is an ester."
    }
  },
  {
    "question_id": "ch3_q3_functional_group_amide",
    "topic": "Functional Groups",
    "difficulty_level": "Easy",
    "question_text": "Which functional group contains a carbonyl carbon bonded directly to a nitrogen atom?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Amide",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Amine",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Imine",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Nitrile",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguish between nitrogen-containing functional groups.",
      "process": "Step 1: An amine contains nitrogen bonded to alkyl groups or hydrogens ($R-NH_2$) with no adjacent carbonyl.\nStep 2: An amide ($R-CONH_2$) contains a nitrogen atom directly bonded to the carbon of a carbonyl group ($C=O$).\nStep 3: This carbonyl-nitrogen link is key to peptide/protein backbones.",
      "result": "The functional group is an amide."
    }
  },
  {
    "question_id": "ch3_q4_isomers_pentane",
    "topic": "Alkanes and Alkane Isomers",
    "difficulty_level": "Easy",
    "question_text": "How many constitutional isomers exist for the molecular formula C5H12?",
    "question_smiles": "CCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "3 (pentane, isopentane, neopentane)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Find the number of constitutional isomers for pentane.",
      "process": "Step 1: Constitutional isomers have the same molecular formula but different connectivity.\nStep 2: Draw the straight chain: pentane ($CH_3-CH_2-CH_2-CH_2-CH_3$).\nStep 3: Draw a 4-carbon chain with a methyl branch: 2-methylbutane (isopentane, $CH_3-CH(CH_3)-CH_2-CH_3$).\nStep 4: Draw a 3-carbon chain with two methyl branches: 2,2-dimethylpropane (neopentane, $CH_3-C(CH_3)_2-CH_3$). No other unique connectivities are possible.",
      "result": "There are exactly 3 constitutional isomers."
    }
  },
  {
    "question_id": "ch3_q5_isomers_hexane",
    "topic": "Alkanes and Alkane Isomers",
    "difficulty_level": "Medium",
    "question_text": "How many constitutional isomers exist for the molecular formula C6H14?",
    "question_smiles": "CCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "5",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "6",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "7",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determine the constitutional isomers of hexane.",
      "process": "Step 1: Draw the 6-carbon straight chain: hexane.\nStep 2: Draw 5-carbon chains with 1 methyl branch: 2-methylpentane and 3-methylpentane (2 isomers).\nStep 3: Draw 4-carbon chains with 2 methyl branches: 2,2-dimethylbutane and 2,3-dimethylbutane (2 isomers).\nStep 4: Sum them up: 1 + 2 + 2 = 5 unique isomers.",
      "result": "Hexane has 5 constitutional isomers."
    }
  },
  {
    "question_id": "ch3_q6_alkyl_group_isobutyl",
    "topic": "Alkyl Groups",
    "difficulty_level": "Medium",
    "question_text": "What is the correct structure of the 'isobutyl' group?",
    "question_smiles": "CC(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "-CH2-CH(CH3)2",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "-CH(CH3)-CH2-CH3",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "-C(CH3)3",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "-CH2-CH2-CH2-CH3",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguish between the 4-carbon alkyl group isomers.",
      "process": "Step 1: A butyl group has 4 carbons. Isomers include butyl, sec-butyl, isobutyl, and tert-butyl.\nStep 2: Isobutyl has a branching methyl on the second carbon of a three-carbon chain: $-CH_2-CH(CH_3)_2$.\nStep 3: Compare: $-CH(CH_3)-CH_2-CH_3$ is sec-butyl; $-C(CH_3)_3$ is tert-butyl; $-CH_2-CH_2-CH_2-CH_3$ is butyl.",
      "result": "The isobutyl group is $-CH_2-CH(CH_3)_2$."
    }
  },
  {
    "question_id": "ch3_q7_alkyl_group_secbutyl",
    "topic": "Alkyl Groups",
    "difficulty_level": "Medium",
    "question_text": "What is the correct structure of the 'sec-butyl' group?",
    "question_smiles": "CC(C)CC",
    "options": [
      {
        "option_id": "A",
        "text": "-CH(CH3)-CH2-CH3",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "-CH2-CH(CH3)2",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "-C(CH3)3",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "-CH2-CH2-CH(CH3)2",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify the sec-butyl group structure.",
      "process": "Step 1: 'sec' stands for secondary, meaning the attachment point is on a secondary carbon (bonded to two other carbons).\nStep 2: A 4-carbon chain attached at C2 has the structure $-CH(CH_3)CH_2CH_3$.\nStep 3: This matches option A.",
      "result": "The sec-butyl group is $-CH(CH_3)-CH_2-CH_3$."
    }
  },
  {
    "question_id": "ch3_q8_classification_carbons",
    "topic": "Alkyl Groups",
    "difficulty_level": "Medium",
    "question_text": "In 2,2,3-trimethylpentane, how many primary (1\\(\\circ\\)), secondary (2\\(\\circ\\)), tertiary (3\\(\\circ\\)), and quaternary (4\\(\\circ\\)) carbon atoms are present, respectively?",
    "question_smiles": "CCC(C)C(C)(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "5 primary, 1 secondary, 1 tertiary, 1 quaternary",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4 primary, 2 secondary, 1 tertiary, 1 quaternary",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5 primary, 2 secondary, 0 tertiary, 1 quaternary",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "6 primary, 0 secondary, 1 tertiary, 1 quaternary",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Classify carbons based on their degree of substitution.",
      "process": "Step 1: Draw the structure of 2,2,3-trimethylpentane: $(CH_3)_3C-CH(CH_3)-CH_2-CH_3$.\nStep 2: Identify each carbon: \n- The 5 methyl groups (carbons 1, 5, 2-methyls, 3-methyl) are primary ($1^\\circ$) because they are bonded to only 1 carbon.\n- C4 is a $-CH_2-$ group, bonded to C3 and C5, making it secondary ($2^\\circ$).\n- C3 is a $-CH-$ group, bonded to C2, C4, and a methyl carbon, making it tertiary ($3^\\circ$).\n- C2 is a quaternary ($4^\\circ$) carbon because it is bonded to four carbons (C1, C3, and two methyls).\nStep 3: This sums to 5 primary, 1 secondary, 1 tertiary, and 1 quaternary carbon.",
      "result": "The counts are 5 primary, 1 secondary, 1 tertiary, and 1 quaternary carbon."
    }
  },
  {
    "question_id": "ch3_q9_iupac_rules_parent",
    "topic": "Naming Alkanes",
    "difficulty_level": "Easy",
    "question_text": "What is the first step in the IUPAC system for naming branched-chain alkanes?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Find the longest continuous carbon chain to serve as the parent name.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Number the carbon atoms starting from the end closest to a branch.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Identify and list all substituents alphabetically.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Write the name as a single word using hyphens to separate numbers from prefixes.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Recall standard IUPAC nomenclature rules.",
      "process": "Step 1: The foundation of any IUPAC name is the parent chain.\nStep 2: Identify the longest continuous chain of carbon atoms. Even if it curves or bends, it defines the root name (e.g. hexane, heptane).\nStep 3: Subsequent steps involve numbering and labeling branches.",
      "result": "First step is to find the longest continuous carbon chain."
    }
  },
  {
    "question_id": "ch3_q10_iupac_name_isopropyl",
    "topic": "Naming Alkanes",
    "difficulty_level": "Medium",
    "question_text": "What is the correct IUPAC name of the compound CH3-CH(CH3)-CH2-CH2-CH3?",
    "question_smiles": "CC(C)CCC",
    "options": [
      {
        "option_id": "A",
        "text": "2-Methylpentane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-Methylpentane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Methylbutane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Isopropylpropane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Name a simple branched alkane using IUPAC rules.",
      "process": "Step 1: Find the parent chain. The longest continuous chain has 5 carbons (pentane).\nStep 2: Number the parent chain from the end closest to the branch. Numbering from left to right gives the branch at C2. (Right to left would give it at C4).\nStep 3: Name and locate the substituent: 2-methyl.\nStep 4: Combine: 2-methylpentane.",
      "result": "The correct name is 2-methylpentane."
    }
  },
  {
    "question_id": "ch3_q11_iupac_tiebreaker_numbering",
    "topic": "Naming Alkanes",
    "difficulty_level": "Hard",
    "question_text": "What is the correct IUPAC name for a seven-carbon parent chain with methyl groups at C3 and C5, and an ethyl group at C4?",
    "question_smiles": "CCC(C)C(CC)C(C)CC",
    "options": [
      {
        "option_id": "A",
        "text": "4-Ethyl-3,5-dimethylheptane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-Ethyl-3,5-dimethylhexane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3,5-Dimethyl-4-ethylheptane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,4-Diethyl-3-methylhexane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Apply numbering and alphabetical sorting rules to substituted heptanes.",
      "process": "Step 1: Longest chain is 7 carbons (heptane).\nStep 2: Numbering from either end gives substituents at positions 3, 4, and 5 (a tie).\nStep 3: Identify the substituents: ethyl (at C4) and methyls (at C3 and C5). List them alphabetically: ethyl precedes methyl.\nStep 4: Combine prefixes: 4-ethyl-3,5-dimethylheptane. (Note: numerical prefixes like 'di-' are ignored in alphabetical sorting).",
      "result": "The name is 4-ethyl-3,5-dimethylheptane."
    }
  },
  {
    "question_id": "ch3_q12_iupac_longest_chain_trap",
    "topic": "Naming Alkanes",
    "difficulty_level": "Hard",
    "question_text": "What is the correct IUPAC name of the following structure: (CH3CH2)2CH-CH(CH3)2?",
    "question_smiles": "CCC(CC)C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "3-Ethyl-2-methylpentane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Isopropylbutane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-Isopropylpentane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Ethyl-3-methylpentane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify the parent chain when drawn in a condensed, potentially misleading format.",
      "process": "Step 1: Expand the structure: $CH_3-CH_2-CH(CH_2-CH_3)-CH(CH_3)_2$.\nStep 2: Find the longest chain. It goes from the isopropyl methyl through the CH, C3-CH, and down the ethyl group: $C_1(methyl)-C_2(CH)-C_3(CH)-C_4(CH_2)-C_5(methyl)$. This is a pentane chain.\nStep 3: Number from the end closest to a branch: start at the isopropyl end to place branches at C2 and C3 (numbering from the other side places them at C3 and C4).\nStep 4: Identify substituents: methyl at C2, ethyl at C3. Alphabetize: 3-ethyl-2-methylpentane.",
      "result": "The correct IUPAC name is 3-ethyl-2-methylpentane."
    }
  },
  {
    "question_id": "ch3_q13_heat_of_combustion",
    "topic": "Properties of Alkanes",
    "difficulty_level": "Hard",
    "question_text": "Which of the following isomer structures of C5H12 releases the least heat of combustion (lowest energy content)?",
    "question_smiles": "CCCCC.CC(C)CC.CC(C)(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "2,2-Dimethylpropane (neopentane) (highest branching, most stable)",
        "smiles": "CC(C)(C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Methylbutane (isopentane)",
        "smiles": "CC(C)CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Pentane (straight-chain, least stable isomer)",
        "smiles": "CCCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "They all release the exact same heat because they are isomers.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand how structural branching relates to thermodynamic stability and heat of combustion.",
      "process": "Step 1: Alkanes release heat when combusted ($\\Delta H_c$). A lower heat of combustion indicates a more stable (lower potential energy) starting material.\nStep 2: Branching increases the thermodynamic stability of alkanes because branched molecules are more compact and have stronger internal van der Waals attractions.\nStep 3: Neopentane ($2,2-dimethylpropane$) is the most branched isomer of $C_5H_{12}$, making it the most stable isomer with the lowest potential energy. Therefore, it releases the least heat upon combustion.",
      "result": "Neopentane releases the least heat of combustion."
    }
  },
  {
    "question_id": "ch3_q14_conformation_ethane_barrier",
    "topic": "Conformations of Ethane",
    "difficulty_level": "Medium",
    "question_text": "What is the energy barrier to rotation around the C-C bond of ethane?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "12.0 kJ/mol (2.9 kcal/mol)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "11.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "25.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Recall the rotational energy barrier of ethane.",
      "process": "Step 1: In ethane ($CH_3-CH_3$), rotation around the C-C single bond transitions between staggered (most stable) and eclipsed (least stable) conformations.\nStep 2: The eclipsed conformation contains three eclipsing H-H interactions.\nStep 3: Each eclipsing H-H interaction incurs a torsional strain of 4.0 kJ/mol. Total energy barrier = 3 * 4.0 kJ/mol = 12.0 kJ/mol.",
      "result": "The energy barrier is 12.0 kJ/mol."
    }
  },
  {
    "question_id": "ch3_q15_torsional_strain_def",
    "topic": "Conformations of Ethane",
    "difficulty_level": "Medium",
    "question_text": "What is the primary cause of torsional strain in the eclipsed conformation of ethane?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "Repulsion between the bonding molecular orbitals of adjacent C-H bonds as they pass close to one another.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Steric clash between the tiny hydrogen atoms.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Electrostatic attraction between opposite dipoles.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Angle strain within the sp3 hybridized carbons.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguish between torsional strain and steric strain.",
      "process": "Step 1: Steric strain occurs when atoms are forced physically too close to one another (van der Waals repulsion), which is not the case for small hydrogens in ethane.\nStep 2: Torsional strain arises from the repulsion between electron clouds in the C-H $\\sigma$ bonding orbitals of adjacent carbons when they align (dihedral angle = $0^\\circ$).\nStep 3: This orbital-orbital repulsion destabilizes the eclipsed conformer.",
      "result": "Torsional strain is caused by orbital-orbital repulsions in eclipsed bonds."
    }
  },
  {
    "question_id": "ch3_q16_conformation_propane_barrier",
    "topic": "Conformations of Propane",
    "difficulty_level": "Hard",
    "question_text": "What is the rotational energy barrier around the C-C bond in propane?",
    "question_smiles": "CCC",
    "options": [
      {
        "option_id": "A",
        "text": "14.0 kJ/mol",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "12.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "18.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "6.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Calculate the energy barrier in propane using specific conformational values.",
      "process": "Step 1: Look at the eclipsed conformation of propane viewed down a C1-C2 bond.\nStep 2: The eclipsing interactions are: two H-H eclipsing interactions and one $H-CH_3$ eclipsing interaction.\nStep 3: Assign energy values: H-H eclipsing = 4.0 kJ/mol each. $H-CH_3$ eclipsing = 6.0 kJ/mol.\nStep 4: Sum: 4.0 + 4.0 + 6.0 = 14.0 kJ/mol.",
      "result": "The energy barrier is 14.0 kJ/mol."
    }
  },
  {
    "question_id": "ch3_q17_butane_gauche_interaction",
    "topic": "Conformations of Butane",
    "difficulty_level": "Medium",
    "question_text": "In the conformational analysis of butane, what name is given to the staggered conformation where the dihedral angle between the two methyl groups is 60 degrees?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Gauche",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Anti",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Fully eclipsed",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Skew",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify conformers of butane.",
      "process": "Step 1: Staggered conformations have dihedral angles of $60^\\circ$, $180^\\circ$, or $300^\\circ$.\nStep 2: When methyls are opposite ($180^\\circ$), it is the anti conformation (most stable).\nStep 3: When methyls are adjacent ($60^\\circ$), it is the gauche conformation. It is slightly less stable due to steric strain between the methyl groups.",
      "result": "The conformation is gauche."
    }
  },
  {
    "question_id": "ch3_q18_butane_staggered_stability",
    "topic": "Conformations of Butane",
    "difficulty_level": "Hard",
    "question_text": "What is the energy difference between the anti and gauche conformations of butane?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "3.8 kJ/mol (0.9 kcal/mol)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "19.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "11.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Assess the steric cost of a gauche interaction in butane.",
      "process": "Step 1: The anti conformation has zero steric strain between the methyls.\nStep 2: The gauche conformation forces the two bulky methyl groups close together, resulting in steric strain.\nStep 3: The thermodynamic cost of this $CH_3-CH_3$ gauche interaction is 3.8 kJ/mol.",
      "result": "The energy difference is 3.8 kJ/mol."
    }
  },
  {
    "question_id": "ch3_q19_butane_fully_eclipsed",
    "topic": "Conformations of Butane",
    "difficulty_level": "Hard",
    "question_text": "What is the energy barrier to rotation through the highest-energy conformation (fully eclipsed) of butane?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "19.0 kJ/mol (4.5 kcal/mol)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "16.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "11.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "12.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determine the energy value of the fully eclipsed conformation of butane.",
      "process": "Step 1: The fully eclipsed conformation occurs when the dihedral angle between the two methyl groups is $0^\\circ$.\nStep 2: The interactions are: two H-H eclipsing interactions and one $CH_3-CH_3$ eclipsing interaction.\nStep 3: Assign energy values: H-H eclipsing = 4.0 kJ/mol each. The remaining energy to reach 19.0 kJ/mol is the steric/torsional strain of eclipsing two methyls.\nStep 4: Total energy = 19.0 kJ/mol.",
      "result": "The energy of the fully eclipsed conformation is 19.0 kJ/mol."
    }
  },
  {
    "question_id": "ch3_q20_butane_methyl_methyl_eclipsed",
    "topic": "Conformations of Butane",
    "difficulty_level": "Hard",
    "question_text": "Using the total energy of the fully eclipsed conformation of butane (19.0 kJ/mol) and the value of eclipsing H-H interactions (4.0 kJ/mol), what is the steric strain value assigned to a single eclipsing CH3-CH3 interaction?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "11.0 kJ/mol",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "15.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "6.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3.8 kJ/mol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Isolate the value of a methyl-methyl eclipsing interaction.",
      "process": "Step 1: Total energy of fully eclipsed butane = 19.0 kJ/mol.\nStep 2: Identify the components: two H-H eclipsing interactions ($2 * 4.0 = 8.0$ kJ/mol) plus one $CH_3-CH_3$ eclipsing interaction.\nStep 3: Subtract: $19.0 - 8.0 = 11.0$ kJ/mol.",
      "result": "The eclipsing methyl-methyl interaction is valued at 11.0 kJ/mol."
    }
  },
  {
    "question_id": "ch3_q21_classification_alkanes",
    "topic": "Alkanes and Alkane Isomers",
    "difficulty_level": "Easy",
    "question_text": "What is the general molecular formula for acyclic, saturated alkanes?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "CnH2n+2",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CnH2n",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CnH2n-2",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CnHn",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Review general formulas for hydrocarbons.",
      "process": "Step 1: Alkanes are saturated hydrocarbons containing only single bonds.\nStep 2: An acyclic alkane with $n$ carbons has $2n$ hydrogens to satisfy valence, plus 2 capping hydrogens at the ends of the chain.\nStep 3: This gives the formula $C_nH_{2n+2}$.",
      "result": "The general formula is CnH2n+2."
    }
  },
  {
    "question_id": "ch3_q22_saturated_definition",
    "topic": "Alkanes and Alkane Isomers",
    "difficulty_level": "Easy",
    "question_text": "What does the term 'saturated' mean when describing a hydrocarbon?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The molecule contains only single bonds and has the maximum number of hydrogens per carbon.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The molecule contains double or triple bonds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The hydrocarbon is dissolved in water.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The carbon chain is cyclic.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand saturation in organic structures.",
      "process": "Step 1: Saturation refers to the hydrogen content.\nStep 2: A hydrocarbon is saturated if it cannot accept any more hydrogen atoms (no double/triple bonds, no rings that reduce hydrogen count).\nStep 3: This corresponds to a chain of carbons bonded by single bonds, filled with hydrogens.",
      "result": "A saturated hydrocarbon contains only single bonds."
    }
  },
  {
    "question_id": "ch3_q23_boiling_point_structure",
    "topic": "Properties of Alkanes",
    "difficulty_level": "Medium",
    "question_text": "Which of the following alkanes has the highest boiling point?",
    "question_smiles": "CCCCCC.CC(C)CC.C(C)(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "Hexane (CCCCCC)",
        "smiles": "CCCCCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Pentane (CCCCC)",
        "smiles": "CCCCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Butane (CCCC)",
        "smiles": "CCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,2-Dimethylpropane",
        "smiles": "CC(C)(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Compare boiling points of alkanes based on molecular weight.",
      "process": "Step 1: Alkanes are non-polar and interact only via London dispersion forces.\nStep 2: Dispersion forces increase with molecular weight (surface area and polarizability).\nStep 3: Among the choices, hexane ($C_6H_{14}$) has the largest molecular weight and surface area, resulting in the highest boiling point.",
      "result": "Hexane has the highest boiling point."
    }
  },
  {
    "question_id": "ch3_q24_boiling_point_branching",
    "topic": "Properties of Alkanes",
    "difficulty_level": "Medium",
    "question_text": "Which of the following isomers of C5H12 has the lowest boiling point?",
    "question_smiles": "CCCCC.CC(C)CC.CC(C)(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "2,2-Dimethylpropane (neopentane) (bp = 9.5 degrees C)",
        "smiles": "CC(C)(C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Methylbutane (isopentane) (bp = 28 degrees C)",
        "smiles": "CC(C)CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Pentane (bp = 36 degrees C)",
        "smiles": "CCCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "They all have the same boiling point.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand the effect of branching on alkane boiling points.",
      "process": "Step 1: Isomers have the same molecular weight, so we must analyze molecular shape.\nStep 2: Straight-chain pentane has a cylindrical shape with large surface area. Branching makes neopentane spherical and compact.\nStep 3: A compact shape reduces surface area contact, weakening intermolecular London dispersion forces. Therefore, neopentane has the lowest boiling point.",
      "result": "Neopentane has the lowest boiling point."
    }
  },
  {
    "question_id": "ch3_q25_conformation_butane_energy_profile",
    "topic": "Conformations of Butane",
    "difficulty_level": "Hard",
    "question_text": "During rotation around the C2-C3 bond of butane, how many energy minima (stable conformations) exist in a full 360-degree rotation?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "3 (one anti and two degenerate gauche conformers)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "6",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyze the potential energy curve of butane rotation.",
      "process": "Step 1: Energy minima correspond to staggered conformations.\nStep 2: In a $360^circ$ rotation, there are three staggered states: one anti conformation ($180^circ$ dihedral angle) and two gauche conformations ($60^circ$ and $300^circ$ dihedral angles).\nStep 3: The gauche conformations are degenerate (identical in energy) but represent distinct spatial arrangements.",
      "result": "There are 3 energy minima."
    }
  },
  {
    "question_id": "ch3_q26_conformation_butane_maxima",
    "topic": "Conformations of Butane",
    "difficulty_level": "Hard",
    "question_text": "How many energy maxima (transition states) occur during a full 360-degree rotation around the C2-C3 bond of butane?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "3 (one fully eclipsed and two degenerate eclipsed conformers)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "6",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify energy maxima in the butane rotational profile.",
      "process": "Step 1: Energy maxima correspond to eclipsed conformations.\nStep 2: In a $360^circ$ rotation, there are three eclipsed states: one fully eclipsed ($0^circ$, methyls eclipsing) and two partially eclipsed ($120^circ$ and $240^circ$, methyls eclipsing hydrogens).\nStep 3: These three states act as energy barriers between the three staggered minima.",
      "result": "There are 3 energy maxima."
    }
  },
  {
    "question_id": "ch3_q27_iupac_alphabetical_prefixes",
    "topic": "Naming Alkanes",
    "difficulty_level": "Medium",
    "question_text": "Which of the following alkyl prefixes is alphabetized under the letter 'i' when naming complex alkanes?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Isobutyl",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "sec-Butyl",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "tert-Butyl",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "di-Methyl",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Review IUPAC alphabetizing rules for prefixes.",
      "process": "Step 1: Italicized prefixes indicating substitution position (like *sec-* and *tert-*) are ignored in alphabetical ordering (sec-butyl is alphabetized under 'b').\nStep 2: Multiplying prefixes (like di-, tri-, tetra-) are also ignored in alphabetizing.\nStep 3: Iso- (and cyclo-) are not separated by hyphens and are treated as part of the alkyl name, so isobutyl is alphabetized under 'i'.",
      "result": "Isobutyl is alphabetized under 'i'."
    }
  },
  {
    "question_id": "ch3_q28_iupac_longest_chain_tiebreaker",
    "topic": "Naming Alkanes",
    "difficulty_level": "Hard",
    "question_text": "If a molecule contains two different carbon chains of equal length that could both be selected as the parent chain, how is the parent chain chosen?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Choose the chain that has the greater number of substituents.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Choose the chain with the fewest substituents to simplify the name.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Choose the chain that is straightest when drawn.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It does not matter; both choices yield the same IUPAC name.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Resolve parent chain ties in complex alkanes.",
      "process": "Step 1: When two chains compete for parent length, IUPAC rules state a tiebreaker is required.\nStep 2: The tiebreaker rule selects the chain with the maximum number of substituents (branches).\nStep 3: This ensures that substituents are smaller and simpler to name, avoiding highly nested branching labels where possible.",
      "result": "Choose the chain with the greater number of substituents."
    }
  },
  {
    "question_id": "ch3_q29_properties_combustion",
    "topic": "Properties of Alkanes",
    "difficulty_level": "Easy",
    "question_text": "What are the typical products of the complete combustion of any alkane in excess oxygen?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Carbon dioxide (CO2) and water (H2O)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Carbon monoxide (CO) and hydrogen gas (H2)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Carbon black and water",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methane and ozone",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Review the products of alkane oxidation.",
      "process": "Step 1: Combustion is a rapid oxidation of hydrocarbons.\nStep 2: Complete combustion refers to full oxidation of carbon to its maximum state ($CO_2$) and hydrogen to water ($H_2O$).\nStep 3: Incomplete combustion yields carbon monoxide ($CO$) or soot ($C$).",
      "result": "The products are carbon dioxide and water."
    }
  },
  {
    "question_id": "ch3_q30_properties_alkane_density",
    "topic": "Properties of Alkanes",
    "difficulty_level": "Easy",
    "question_text": "Why do liquid alkanes float on top of water?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Alkanes are nonpolar (insoluble in water) and have densities less than 1.0 g/mL.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Alkanes form hydrogen bonds with water that push them upward.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Liquid alkanes are highly volatile and gaseous bubbles carry them up.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Alkanes have higher molecular weights than water.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand the solubility and density properties of alkanes.",
      "process": "Step 1: Alkanes are hydrophobic (non-polar) and do not dissolve in water.\nStep 2: The density of liquid alkanes typically ranges between 0.6 and 0.8 g/mL.\nStep 3: Since their density is less than water (1.0 g/mL), they form a separate layer that floats on top.",
      "result": "Alkanes are less dense than water and insoluble, causing them to float."
    }
  },
  {
    "question_id": "ch3_q31_conformational_analysis_propyl_barrier",
    "topic": "Conformations of Propane",
    "difficulty_level": "Medium",
    "question_text": "What is the steric strain value assigned to a single eclipsing H-CH3 interaction in propane?",
    "question_smiles": "CCC",
    "options": [
      {
        "option_id": "A",
        "text": "6.0 kJ/mol",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "11.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3.8 kJ/mol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify energy values for eclipsing interactions.",
      "process": "Step 1: Total eclipsed propane barrier is 14.0 kJ/mol.\nStep 2: Propane contains two H-H eclipsing interactions ($2 * 4.0 = 8.0$ kJ/mol) and one $H-CH_3$ eclipsing interaction.\nStep 3: Subtract: $14.0 - 8.0 = 6.0$ kJ/mol.",
      "result": "The H-CH3 eclipsing interaction is 6.0 kJ/mol."
    }
  },
  {
    "question_id": "ch3_q32_butane_partially_eclipsed_value",
    "topic": "Conformations of Butane",
    "difficulty_level": "Hard",
    "question_text": "What is the total energy of the partially eclipsed conformation of butane (where methyl groups eclipse hydrogens)?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "16.0 kJ/mol",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "19.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "12.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "14.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Compute the energy of partially eclipsed butane conformations.",
      "process": "Step 1: Identify the interactions in the partially eclipsed ($120^circ$) butane conformation: one H-H eclipsing interaction and two $H-CH_3$ eclipsing interactions.\nStep 2: Apply the values: H-H eclipsing = 4.0 kJ/mol. $H-CH_3$ eclipsing = 6.0 kJ/mol each.\nStep 3: Sum: 4.0 + 6.0 + 6.0 = 16.0 kJ/mol.",
      "result": "The energy of the partially eclipsed conformation is 16.0 kJ/mol."
    }
  },
  {
    "question_id": "ch3_q33_iupac_prefix_numbering_tie",
    "topic": "Naming Alkanes",
    "difficulty_level": "Hard",
    "question_text": "What is the correct IUPAC name of the compound CH3-CH(CH3)-CH(CH2CH3)-CH2-CH3?",
    "question_smiles": "CCC(CC)C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "3-Ethyl-2-methylpentane (alphabetical ordering of substituents)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Methyl-3-ethylpentane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-Isopropylpentane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-Ethyl-4-methylpentane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Name a branched heptane or pentane derivative, testing alphabetization in the final name construction.",
      "process": "Step 1: Longest chain is 5 carbons (pentane).\nStep 2: Numbering starts from the left to give substituents at C2 (methyl) and C3 (ethyl). (Numbering from right gives branches at C3 and C4).\nStep 3: List substituents alphabetically: ethyl comes before methyl.\nStep 4: Combine: 3-ethyl-2-methylpentane.",
      "result": "The correct name is 3-ethyl-2-methylpentane."
    }
  },
  {
    "question_id": "ch3_q34_iupac_complex_alkane",
    "topic": "Naming Alkanes",
    "difficulty_level": "Hard",
    "question_text": "What is the correct IUPAC name for (CH3)3C-CH2-CH(CH2CH3)2?",
    "question_smiles": "CCC(CC)CC(C)(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "4-Ethyl-2,2-dimethylhexane (lowest set of locants 2,2,4)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Ethyl-5,5-dimethylhexane (incorrect numbering 3,5,5)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,2-Dimethyl-4-ethylhexane (non-alphabetical substituent order)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5-Ethyl-2,2-dimethylhexane (wrong chain length)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Name a branched alkane resolving numbering direction and alphabetical sorting.",
      "process": "Step 1: Longest continuous chain has 6 carbons (hexane): $(CH_3)_3C-CH_2-CH(CH_2CH_3)_2 \\rightarrow (CH_3)_2C(C_1,C_2)-CH_2(C_3)-CH(C_4)(CH_2CH_3)-CH_2(C_5)-CH_3(C_6)$.\nStep 2: Compare numbering directions. Left-to-right gives locants at 2, 2, and 4. Right-to-left gives locants at 3, 5, and 5. The lowest set at the first point of difference is 2,2,4.\nStep 3: List substituents: 4-ethyl and 2,2-dimethyl. Alphabetize: 'ethyl' comes before 'dimethyl'. This gives 4-ethyl-2,2-dimethylhexane.",
      "result": "The correct IUPAC name is 4-ethyl-2,2-dimethylhexane."
    }
  },
  {
    "question_id": "ch3_q35_iupac_longest_chain_double_tie",
    "topic": "Naming Alkanes",
    "difficulty_level": "Hard",
    "question_text": "What is the correct IUPAC name of the compound (CH3)2CH-CH(CH3)-CH2-CH(CH2CH3)2?",
    "question_smiles": "CCC(CC)CC(C)C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "5-Ethyl-2,3-dimethylheptane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Ethyl-5,6-dimethylheptane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-Ethyl-2,3-dimethylheptane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,3-Dimethyl-5-ethylheptane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Name a multi-branched alkane by resolving parent chain, numbering, and alphabetization.",
      "process": "Step 1: Longest carbon chain is 7 carbons (heptane): start at the isopropyl methyl, go through C2, C3, C4, C5, and down one of the ethyl groups.\nStep 2: Numbering from the left gives substituents at 2, 3, and 5. Numbering from the right gives 3, 5, and 6. The lower set of locants is 2,3,5.\nStep 3: Identify the substituents: 2-methyl, 3-methyl, and 5-ethyl. Alphabetize: ethyl comes before dimethyl.\nStep 4: Combine: 5-ethyl-2,3-dimethylheptane.",
      "result": "The name is 5-ethyl-2,3-dimethylheptane."
    }
  },
  {
    "question_id": "ch3_q36_newman_projection_anti",
    "topic": "Conformational Analysis & Newman Projections",
    "difficulty_level": "Easy",
    "question_text": "Which conformation corresponds to the lowest potential energy state in the conformational analysis of butane?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Anti conformation (dihedral angle = 180 degrees)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Gauche conformation (dihedral angle = 60 degrees)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Partially eclipsed conformation (dihedral angle = 120 degrees)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Fully eclipsed conformation (dihedral angle = 0 degrees)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify the globally most stable conformer of butane.",
      "process": "Step 1: In the anti conformation, the two bulky methyl groups are oriented $180^circ$ apart, minimizing steric strain.\nStep 2: All bonds are staggered, minimizing torsional strain.\nStep 3: This makes it the global energy minimum.",
      "result": "The anti conformation is the lowest energy state."
    }
  },
  {
    "question_id": "ch3_q37_newman_projection_fully_eclipsed",
    "topic": "Conformational Analysis & Newman Projections",
    "difficulty_level": "Easy",
    "question_text": "Which conformation corresponds to the highest potential energy state in the conformational analysis of butane?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Fully eclipsed conformation (dihedral angle = 0 degrees)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Partially eclipsed conformation (dihedral angle = 120 degrees)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Gauche conformation (dihedral angle = 60 degrees)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Anti conformation (dihedral angle = 180 degrees)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify the globally least stable conformer of butane.",
      "process": "Step 1: The fully eclipsed conformation has a dihedral angle of $0^circ$.\nStep 2: This forces the two bulky methyl groups to directly eclipse each other, maximizing both steric and torsional strain.\nStep 3: This is the global energy maximum on the butane rotational profile.",
      "result": "The fully eclipsed conformation has the highest potential energy."
    }
  },
  {
    "question_id": "ch3_q38_strain_types",
    "topic": "Conformational Analysis & Newman Projections",
    "difficulty_level": "Medium",
    "question_text": "What type of strain results when non-bonded atoms are forced closer together than their van der Waals radii allow?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Steric strain (or van der Waals strain)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Torsional strain",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Angle strain",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Aromatic strain",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguish between steric, torsional, and angle strain.",
      "process": "Step 1: Steric strain occurs due to spatial crowding of electron clouds of non-bonded atoms.\nStep 2: Torsional strain occurs when bonds are eclipsed.\nStep 3: Angle strain occurs when bond angles deviate from their ideal hybrid geometries (e.g. $109.5^circ$ for $sp^3$).",
      "result": "The correct choice is steric strain."
    }
  },
  {
    "question_id": "ch3_q39_properties_octane_rating",
    "topic": "Properties of Alkanes",
    "difficulty_level": "Medium",
    "question_text": "What structural feature of alkanes corresponds to a higher octane rating in gasoline?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Highly branched alkanes (which burn more smoothly and prevent engine knocking)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Long straight-chain alkanes",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Alkanes containing double bonds",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Alkanes with high molecular weights",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Relate fuel efficiency and octane rating to alkane structure.",
      "process": "Step 1: Octane rating measures a fuel's resistance to premature ignition (knocking).\nStep 2: Straight-chain heptane is highly prone to knocking (octane rating = 0). Isomeric isooctane ($2,2,4-trimethylpentane$) burns smoothly (octane rating = 100).\nStep 3: Highly branched alkanes are more stable and combust in a controlled, smooth manner, leading to higher octane ratings.",
      "result": "Branching increases the octane rating."
    }
  },
  {
    "question_id": "ch3_q40_dihedral_angle_def",
    "topic": "Conformational Analysis & Newman Projections",
    "difficulty_level": "Easy",
    "question_text": "What is a dihedral angle (or torsion angle)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The angle between a bond on the front carbon and a bond on the back carbon in a Newman projection.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The angle between two bonds on the same carbon atom.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The angle of rotation in a double bond.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The deviation of a carbon bond from 109.5 degrees.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Define dihedral angle in stereochemistry.",
      "process": "Step 1: Look down a single C-C bond in a Newman projection.\nStep 2: The dihedral angle is the angle formed by a substituent on the front carbon, the C-C axis, and a substituent on the back carbon.\nStep 3: It ranges from $0^circ$ to $360^circ$.",
      "result": "It is the angle between bonds on adjacent carbons in a Newman projection."
    }
  },
  {
    "question_id": "ch3_q41_isobutyl_secondary_carbon",
    "topic": "Alkyl Groups",
    "difficulty_level": "Medium",
    "question_text": "Which carbon in the isobutyl group is secondary (2\\(\\circ\\))?",
    "question_smiles": "CC(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "The CH2 carbon directly attached to the main parent chain",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The CH carbon in the middle of the group",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The methyl carbons at the end",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "There are no secondary carbons in the group",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify degrees of carbon substitution in the isobutyl group.",
      "process": "Step 1: The isobutyl group is $-CH_2-CH(CH_3)_2$.\nStep 2: The terminal methyl carbons are bonded to 1 carbon (primary). The central $-CH-$ carbon is bonded to 3 carbons (tertiary).\nStep 3: The $-CH_2-$ carbon is bonded to the parent chain carbon and the central $-CH-$ carbon, making it bonded to 2 carbons (secondary).",
      "result": "The direct attachment $-CH_2-$ carbon is secondary."
    }
  },
  {
    "question_id": "ch3_q42_secbutyl_chiral_center",
    "topic": "Alkyl Groups",
    "difficulty_level": "Medium",
    "question_text": "Why does the sec-butyl group introduce a chiral center to a molecule when attached to a symmetric chain, whereas the isobutyl group does not?",
    "question_smiles": "CC(C)CC.CC(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "The C1 carbon of sec-butyl is bonded to four different groups (H, methyl, ethyl, and the parent chain).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Isobutyl is much larger, preventing chirality.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "sec-Butyl is symmetric.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The sec-butyl group undergoes conformational locking.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyze stereocenter generation in alkyl groups.",
      "process": "Step 1: A chiral center is a carbon bonded to 4 different groups.\nStep 2: The sec-butyl attachment carbon (C1 of the group: $-^*CH(CH_3)CH_2CH_3$) is bonded to: 1) hydrogen, 2) methyl, 3) ethyl, and 4) the parent chain. Since all 4 are different, it is a chiral center.\nStep 3: The isobutyl group attachment carbon ($-CH_2-CH(CH_3)_2$) is bonded to two identical hydrogens, making it achiral.",
      "result": "The attachment carbon of sec-butyl is bonded to 4 different groups, making it chiral."
    }
  },
  {
    "question_id": "ch3_q43_properties_solubility",
    "topic": "Properties of Alkanes",
    "difficulty_level": "Easy",
    "question_text": "Which of the following solvents is an alkane insoluble in?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Water (H2O)",
        "smiles": "O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Hexane",
        "smiles": "CCCCCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Diethyl ether",
        "smiles": "CCOCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzene",
        "smiles": "c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand the solubility rule 'like dissolves like'.",
      "process": "Step 1: Alkanes are non-polar molecules.\nStep 2: Non-polar solutes dissolve in non-polar solvents (like hexane, ether, benzene).\nStep 3: Water is highly polar and forms strong hydrogen bond networks, which exclude non-polar alkanes.",
      "result": "Alkanes are insoluble in water."
    }
  },
  {
    "question_id": "ch3_q44_newman_drawing_direction",
    "topic": "Conformational Analysis & Newman Projections",
    "difficulty_level": "Easy",
    "question_text": "When looking at a Newman projection, how are the front and back carbons represented?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The front carbon is a point where three bonds meet, and the back carbon is a large circle.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The front carbon is a large circle, and the back carbon is a point.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both are represented by overlapping circles.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both are represented by points.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify the visual convention of Newman projections.",
      "process": "Step 1: A Newman projection views a molecule directly down a specific carbon-carbon bond axis.\nStep 2: The front carbon is closest to the viewer and is drawn as the intersection of three lines (a Y-shape).\nStep 3: The back carbon is obscured and is drawn as a large circle, with its bonds starting at the circumference of the circle.",
      "result": "Front carbon is a point; back carbon is a circle."
    }
  },
  {
    "question_id": "ch3_q45_gauche_butane_dihedral",
    "topic": "Conformational Analysis & Newman Projections",
    "difficulty_level": "Medium",
    "question_text": "What is the dihedral angle between the two methyl groups in the gauche conformation of butane?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "60 degrees (or 300 degrees)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "180 degrees",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "120 degrees",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "0 degrees",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Relate conformer names to dihedral angles in butane.",
      "process": "Step 1: Staggered conformations occur at dihedral angles of $60^circ$, $180^circ$, and $300^circ$.\nStep 2: The angle $180^circ$ is anti.\nStep 3: The angles $60^circ$ and $300^circ$ represent gauche conformations.",
      "result": "The dihedral angle is 60 or 300 degrees."
    }
  },
  {
    "question_id": "ch3_q46_barrier_rotation_butane_partially",
    "topic": "Conformations of Butane",
    "difficulty_level": "Hard",
    "question_text": "What is the energy barrier to rotation when transitioning from the most stable anti conformation of butane to a gauche conformation?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "16.0 kJ/mol (must pass through the partially eclipsed transition state)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "19.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "12.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3.8 kJ/mol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand energy barriers between conformational minima in butane.",
      "process": "Step 1: Anti is at $180^circ$, and gauche is at $60^circ$ (or $300^circ$).\nStep 2: To rotate from $180^circ$ to $60^circ$, the molecule must pass through the eclipsed state at $120^circ$ (partially eclipsed, methyl eclipsing hydrogen).\nStep 3: The potential energy of this transition state is 16.0 kJ/mol above the anti state, representing the energy barrier for the transition.",
      "result": "The energy barrier is 16.0 kJ/mol."
    }
  },
  {
    "question_id": "ch3_q47_alkane_properties_source",
    "topic": "Properties of Alkanes",
    "difficulty_level": "Easy",
    "question_text": "What is the principal natural source of alkanes on Earth?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Petroleum and natural gas",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Coal deposits",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Volcanic emissions",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Photosynthesis products of green plants",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Review industrial sources of hydrocarbons.",
      "process": "Step 1: Natural gas consists mostly of methane with small amounts of ethane, propane, and butane.\nStep 2: Petroleum (crude oil) is a complex mixture of liquid alkanes and other hydrocarbons.\nStep 3: Fractional distillation of petroleum yields gasoline, kerosene, diesel, and other alkane products.",
      "result": "Petroleum and natural gas are the primary sources."
    }
  },
  {
    "question_id": "ch3_q48_iupac_common_names_alkyl",
    "topic": "Alkyl Groups",
    "difficulty_level": "Medium",
    "question_text": "What is the IUPAC systematic name for the 'neopentyl' group?",
    "question_smiles": "CC(C)(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "2,2-Dimethylpropyl",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,1-Dimethylpropyl",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,2-Dimethylbutyl",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "tert-Butylmethyl",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Name complex alkyl groups systematically under IUPAC.",
      "process": "Step 1: The neopentyl group has the structure $-CH_2-C(CH_3)_3$.\nStep 2: Find the longest chain starting from the attachment carbon (C1): C1 is a $-CH_2-$, C2 is $-C(CH_3)_2-$, and C3 is one of the methyls. This makes it a propyl parent group.\nStep 3: Identify branches on the propyl group: two methyls at C2.\nStep 4: Combine: 2,2-dimethylpropyl.",
      "result": "The systematic name is 2,2-dimethylpropyl."
    }
  },
  {
    "question_id": "ch3_q49_conformation_barrier_rotation_cause",
    "topic": "Conformational Analysis & Newman Projections",
    "difficulty_level": "Easy",
    "question_text": "The preference for staggered conformations over eclipsed conformations is known as:",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Conformational stability",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Angle strain",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ring strain",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Stereoisomerism",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand basic conformational preferences.",
      "process": "Step 1: Staggered conformations represent energy minima (stable states).\nStep 2: Eclipsed conformations represent energy maxima (unstable states).\nStep 3: The drive to avoid eclipsing interactions and reside in staggered conformations is the basis of conformational stability.",
      "result": "The preference is called conformational stability."
    }
  },
  {
    "question_id": "ch3_q50_newman_projection_symmetry_butane",
    "topic": "Conformational Analysis & Newman Projections",
    "difficulty_level": "Hard",
    "question_text": "Which conformation of butane contains a center of inversion (symmetry)?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Anti conformation (dihedral angle = 180 degrees)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Gauche conformation (dihedral angle = 60 degrees)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Fully eclipsed conformation (dihedral angle = 0 degrees)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Partially eclipsed conformation (dihedral angle = 120 degrees)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Examine point-group symmetry in conformations of butane.",
      "process": "Step 1: A center of inversion ($i$) exists if drawing a line from any atom through the center of the molecule to an equal distance on the other side finds an identical atom.\nStep 2: Look at the anti conformation. The two methyls are $180^circ$ apart, C1 balances C4, and all hydrogens on the front carbon are exactly opposite hydrogens on the back carbon.\nStep 3: Gauche, fully eclipsed, and partially eclipsed conformations lack this center of inversion.",
      "result": "The anti conformation has a center of inversion."
    }
  },
  {
    "question_id": "ch3_q_dynamic_conformational_energy",
    "topic": "Alkanes Conformational Analysis",
    "difficulty_level": "Hard",
    "question_text": "Examine the potential energy curve for rotations around the C2-C3 bond of butane. Identify the correct conformational states for the energy levels.",
    "energy_diagram": {
      "points": [
        {
          "state": "Anti (180\u00b0)",
          "energy": 0
        },
        {
          "state": "Eclipsed (120\u00b0)",
          "energy": 14
        },
        {
          "state": "Gauche (60\u00b0)",
          "energy": 38
        },
        {
          "state": "Fully Eclipsed (0\u00b0)",
          "energy": 190
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Anti conformation has the lowest potential energy (0 kJ/mol), while Fully Eclipsed has the highest energy (19 kJ/mol relative to anti).",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Gauche conformation has the highest potential energy.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Anti and Fully Eclipsed conformations have equal energy.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Eclipsed conformations are more stable than Gauche.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing butane conformational energy profiles.",
      "process": "Anti conformation has methyl groups furthest apart (180\u00b0), minimizing steric strain (0 kJ/mol). Gauche has methyls at 60\u00b0 (3.8 kJ/mol). Fully eclipsed has methyls eclipsing each other (19 kJ/mol), maximizing steric and torsional strain.",
      "result": "The order of stability is: Anti > Gauche > Eclipsed > Fully Eclipsed."
    }
  },
  {
    "question_id": "ch3_q_dynamic_alkane_iupac",
    "topic": "Alkane Nomenclature & Structure",
    "difficulty_level": "Medium",
    "question_text": "Match each branched alkane structure to its correct IUPAC name.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(C)C",
        "correctAnswer": "2-Methylpropane"
      },
      {
        "smiles": "CC(C)(C)C",
        "correctAnswer": "2,2-Dimethylpropane"
      },
      {
        "smiles": "CCC(C)CC",
        "correctAnswer": "3-Methylpentane"
      },
      {
        "smiles": "CC(C)CC(C)C",
        "correctAnswer": "2,4-Dimethylpentane"
      }
    ],
    "match_options": [
      "2-Methylpropane",
      "2,2-Dimethylpropane",
      "3-Methylpentane",
      "2,4-Dimethylpentane",
      "2-Methylbutane",
      "Neopentane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect IUPAC names",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Applying IUPAC rules to name branched alkanes.",
      "process": "Item 1: Isopropane or 2-methylpropane. Item 2: Neopentane or 2,2-dimethylpropane. Item 3: 5-carbon chain with methyl at C3 is 3-methylpentane. Item 4: 5-carbon chain with methyls at C2 and C4 is 2,4-dimethylpentane.",
      "result": "IUPAC rules ensure unique, unambiguous names for chemical structures."
    }
  },
  {
    "question_id": "ch3_q_dynamic_ring_strain",
    "topic": "Cycloalkanes Conformational Analysis",
    "difficulty_level": "Hard",
    "question_text": "Match each cycloalkane to its relative ring strain level (total ring strain in kJ/mol).",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CC1",
        "correctAnswer": "High strain (115 kJ/mol)"
      },
      {
        "smiles": "C1CCC1",
        "correctAnswer": "Medium-High strain (110 kJ/mol)"
      },
      {
        "smiles": "C1CCCC1",
        "correctAnswer": "Low-Medium strain (26 kJ/mol)"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Zero strain (0 kJ/mol)"
      }
    ],
    "match_options": [
      "High strain (115 kJ/mol)",
      "Medium-High strain (110 kJ/mol)",
      "Low-Medium strain (26 kJ/mol)",
      "Zero strain (0 kJ/mol)"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect strain levels",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Assessing ring strain in cycloalkanes based on angle strain and torsional strain.",
      "process": "Cyclopropanes have severe angle strain (60\u00b0 vs 109.5\u00b0). Cyclobutane is slightly less strained (88\u00b0). Cyclopentane adopts a puckered envelope shape to relieve strain (26 kJ/mol). Cyclohexane adopts the chair conformation, which has zero angle and torsional strain.",
      "result": "Chair cyclohexane is completely strain-free."
    }
  }
];
