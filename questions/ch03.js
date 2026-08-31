// OChemStudyBuddy - McMurry Chapter 3
// Author: A. Elangovan, PhD
var CH03_QUESTIONS = [
  {
    "question_id": "ch03_q1_functional_group_identification",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q2_functional_group_ester",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q3_functional_group_amide",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q4_isomers_pentane",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q5_isomers_hexane",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q6_alkyl_group_isobutyl",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q7_alkyl_group_secbutyl",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q8_classification_carbons",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q9_iupac_rules_parent",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q10_iupac_name_isopropyl",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q11_iupac_tiebreaker_numbering",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q12_iupac_longest_chain_trap",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q13_heat_of_combustion",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q14_conformation_ethane_barrier",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q15_torsional_strain_def",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q16_conformation_propane_barrier",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q17_butane_gauche_interaction",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q18_butane_staggered_stability",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q19_butane_fully_eclipsed",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q20_butane_methyl_methyl_eclipsed",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q21_classification_alkanes",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q22_saturated_definition",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q23_boiling_point_structure",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q24_boiling_point_branching",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q25_conformation_butane_energy_profile",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q26_conformation_butane_maxima",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q27_iupac_alphabetical_prefixes",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q28_iupac_longest_chain_tiebreaker",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q29_properties_combustion",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q30_properties_alkane_density",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q31_conformational_analysis_propyl_barrier",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q32_butane_partially_eclipsed_value",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q33_iupac_prefix_numbering_tie",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q34_iupac_complex_alkane",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q35_iupac_longest_chain_double_tie",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q36_newman_projection_anti",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q37_newman_projection_fully_eclipsed",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q38_strain_types",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q39_properties_octane_rating",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q40_dihedral_angle_def",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q41_isobutyl_secondary_carbon",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q42_secbutyl_chiral_center",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q43_properties_solubility",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q44_newman_drawing_direction",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q45_gauche_butane_dihedral",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q46_barrier_rotation_butane_partially",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q47_alkane_properties_source",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q48_iupac_common_names_alkyl",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q49_conformation_barrier_rotation_cause",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q50_newman_projection_symmetry_butane",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q_dynamic_conformational_energy",
    "topic": "Alkanes Conformational Analysis",
    "difficulty_level": "Hard",
    "question_text": "Examine the potential energy curve for rotations around the C2-C3 bond of butane. Identify the correct conformational states for the energy levels.",
    "energy_diagram": {
      "points": [
        {
          "state": "Anti (180°)",
          "energy": 0
        },
        {
          "state": "Eclipsed (120°)",
          "energy": 14
        },
        {
          "state": "Gauche (60°)",
          "energy": 38
        },
        {
          "state": "Fully Eclipsed (0°)",
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
      "process": "Anti conformation has methyl groups furthest apart (180°), minimizing steric strain (0 kJ/mol). Gauche has methyls at 60° (3.8 kJ/mol). Fully eclipsed has methyls eclipsing each other (19 kJ/mol), maximizing steric and torsional strain.",
      "result": "The order of stability is: Anti > Gauche > Eclipsed > Fully Eclipsed."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q_dynamic_alkane_iupac",
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
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q_dynamic_ring_strain",
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
      "process": "Cyclopropanes have severe angle strain (60° vs 109.5°). Cyclobutane is slightly less strained (88°). Cyclopentane adopts a puckered envelope shape to relieve strain (26 kJ/mol). Cyclohexane adopts the chair conformation, which has zero angle and torsional strain.",
      "result": "Chair cyclohexane is completely strain-free."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q2",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC(=O)O",
        "correctAnswer": "Propanoic acid"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      },
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      }
    ],
    "match_options": [
      "Ethylbenzene",
      "Diethyl ether",
      "1-Butanol",
      "Propene",
      "Butanone",
      "Propanoic acid",
      "Ethyl benzoate",
      "3-Pentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCC(=O)O corresponds to Propanoic acid.\nStructure 2: CCC(C)=O corresponds to Butanone.\nStructure 3: CCC(=O)CC corresponds to 3-Pentanone.\nStructure 4: CC=C corresponds to Propene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q3",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      }
    ],
    "match_options": [
      "Acetonitrile",
      "Cyclopentene",
      "Aniline",
      "Chloroform",
      "Cyclopentanone",
      "1-Bromopropane",
      "1-Butanol",
      "Cyclohexane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC#N corresponds to Acetonitrile.\nStructure 2: CCCBr corresponds to 1-Bromopropane.\nStructure 3: C1CCCCC1 corresponds to Cyclohexane.\nStructure 4: C1CC=CC1 corresponds to Cyclopentene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q4",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      },
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "CO",
        "correctAnswer": "Methanol"
      }
    ],
    "match_options": [
      "Methanol",
      "3-Pentanone",
      "Dimethyl sulfoxide",
      "Acetic acid",
      "Cyclopentene",
      "Cyclohexane",
      "Propan-2-ol",
      "Toluene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CC=CC1 corresponds to Cyclopentene.\nStructure 2: CC(O)C corresponds to Propan-2-ol.\nStructure 3: CCC(=O)CC corresponds to 3-Pentanone.\nStructure 4: CO corresponds to Methanol.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q3_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      },
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      }
    ],
    "match_options": [
      "Phenol",
      "Dimethyl ether",
      "Butanone",
      "Benzaldehyde",
      "Acetone",
      "Chlorobenzene",
      "Ethanol",
      "1-Butanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Ethanol.\nGrid card 2: 1-Butanol.\nGrid card 3: Chlorobenzene.\nGrid card 4: Phenol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q4_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      }
    ],
    "match_options": [
      "Butanone",
      "Acetic acid",
      "Cyclohexane",
      "Phenol",
      "Ethanol",
      "Toluene",
      "Ethylbenzene",
      "Ethyl acetate"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Ethylbenzene.\nGrid card 2: Butanone.\nGrid card 3: Cyclohexane.\nGrid card 4: Phenol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q1",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "Isobutylene"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      }
    ],
    "match_options": [
      "Isobutylene",
      "1-Bromopropane",
      "Cyclohexanone",
      "1-Propanol",
      "3-Pentanone",
      "Chlorobenzene",
      "Benzoyl chloride",
      "2-Pentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCCC(C)=O corresponds to 2-Pentanone.\nStructure 2: CC(C)=C corresponds to Isobutylene.\nStructure 3: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.\nStructure 4: Clc1ccccc1 corresponds to Chlorobenzene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q5",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butyraldehyde"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "CCOC(=O)c1ccccc1",
        "correctAnswer": "Ethyl benzoate"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      }
    ],
    "match_options": [
      "Phenol",
      "2-Bromopropane",
      "Cyclopentanone",
      "Ethylbenzene",
      "Butyraldehyde",
      "3-Pentanone",
      "Ethyl benzoate",
      "Formic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCCC=O corresponds to Butyraldehyde.\nStructure 2: CCc1ccccc1 corresponds to Ethylbenzene.\nStructure 3: CCOC(=O)c1ccccc1 corresponds to Ethyl benzoate.\nStructure 4: O=C1CCCC1 corresponds to Cyclopentanone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q6",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "t-Butyl alcohol"
      },
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "Isobutylene"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      }
    ],
    "match_options": [
      "Benzene",
      "2-Pentanone",
      "1-Propanol",
      "t-Butyl alcohol",
      "Isobutylene",
      "Bromobenzene",
      "Dichloromethane",
      "1-Butanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC(C)(C)O corresponds to t-Butyl alcohol.\nStructure 2: ClCCl corresponds to Dichloromethane.\nStructure 3: CC(C)=C corresponds to Isobutylene.\nStructure 4: CCCCO corresponds to 1-Butanol.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q7",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CO",
        "correctAnswer": "Methanol"
      },
      {
        "smiles": "OCc1ccccc1",
        "correctAnswer": "Benzyl alcohol"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "Isobutylene"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      }
    ],
    "match_options": [
      "Propionaldehyde",
      "2-Pentanone",
      "Methanol",
      "Isobutylene",
      "Benzaldehyde",
      "Dimethyl sulfoxide",
      "Benzyl alcohol",
      "Acetone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CO corresponds to Methanol.\nStructure 2: OCc1ccccc1 corresponds to Benzyl alcohol.\nStructure 3: CC(C)=C corresponds to Isobutylene.\nStructure 4: O=Cc1ccccc1 corresponds to Benzaldehyde.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q8",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      },
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      }
    ],
    "match_options": [
      "Tetrahydrofuran",
      "Formic acid",
      "Benzene",
      "Diethyl ether",
      "Ethyl benzoate",
      "Chlorobenzene",
      "3-Pentanone",
      "Acetophenone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCC(=O)CC corresponds to 3-Pentanone.\nStructure 2: C1CCOC1 corresponds to Tetrahydrofuran.\nStructure 3: c1ccccc1 corresponds to Benzene.\nStructure 4: CC(=O)c1ccccc1 corresponds to Acetophenone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q9",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      }
    ],
    "match_options": [
      "Benzaldehyde",
      "Acetic acid",
      "1-Bromopropane",
      "Butyraldehyde",
      "Acetophenone",
      "Cyclopentene",
      "Ethylbenzene",
      "Benzyl alcohol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCc1ccccc1 corresponds to Ethylbenzene.\nStructure 2: O=Cc1ccccc1 corresponds to Benzaldehyde.\nStructure 3: CCCBr corresponds to 1-Bromopropane.\nStructure 4: CC(=O)O corresponds to Acetic acid.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q10",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "Isobutylene"
      },
      {
        "smiles": "CCCO",
        "correctAnswer": "1-Propanol"
      }
    ],
    "match_options": [
      "Propan-2-ol",
      "1-Propanol",
      "Ethyl acetate",
      "Tetrahydrofuran",
      "Isobutylene",
      "Acetic acid",
      "Benzoyl chloride",
      "Cyclohexanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCOC(C)=O corresponds to Ethyl acetate.\nStructure 2: CC(O)C corresponds to Propan-2-ol.\nStructure 3: CC(C)=C corresponds to Isobutylene.\nStructure 4: CCCO corresponds to 1-Propanol.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q11",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propionaldehyde"
      },
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      }
    ],
    "match_options": [
      "3-Pentanone",
      "Aniline",
      "Acetophenone",
      "Propionaldehyde",
      "Benzaldehyde",
      "2-Pentanone",
      "Propyne",
      "Butyraldehyde"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCC(=O)CC corresponds to 3-Pentanone.\nStructure 2: CC(=O)c1ccccc1 corresponds to Acetophenone.\nStructure 3: CCC=O corresponds to Propionaldehyde.\nStructure 4: CCCC(C)=O corresponds to 2-Pentanone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q12",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "t-Butyl alcohol"
      },
      {
        "smiles": "CCCO",
        "correctAnswer": "1-Propanol"
      },
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      }
    ],
    "match_options": [
      "1-Propanol",
      "t-Butyl alcohol",
      "Ethyl acetate",
      "Propyne",
      "Methyl acetate",
      "Cyclopentanone",
      "Ethylbenzene",
      "Acetophenone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC(C)(C)O corresponds to t-Butyl alcohol.\nStructure 2: CCCO corresponds to 1-Propanol.\nStructure 3: CC(=O)c1ccccc1 corresponds to Acetophenone.\nStructure 4: COC(C)=O corresponds to Methyl acetate.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q13",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      },
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "Isobutylene"
      }
    ],
    "match_options": [
      "Aniline",
      "3-Pentanone",
      "Chlorobenzene",
      "Benzoyl chloride",
      "Isobutylene",
      "Propanoic acid",
      "Benzene",
      "Formic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.\nStructure 2: C(=O)O corresponds to Formic acid.\nStructure 3: c1ccccc1 corresponds to Benzene.\nStructure 4: CC(C)=C corresponds to Isobutylene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q14",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propionaldehyde"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "CC=O",
        "correctAnswer": "Acetaldehyde"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      }
    ],
    "match_options": [
      "Propionaldehyde",
      "Cyclopentanone",
      "Acetaldehyde",
      "Isobutylene",
      "Cyclopentene",
      "Propan-2-ol",
      "Chloroform",
      "Tetrahydrofuran"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCC=O corresponds to Propionaldehyde.\nStructure 2: C1CCOC1 corresponds to Tetrahydrofuran.\nStructure 3: CC=O corresponds to Acetaldehyde.\nStructure 4: O=C1CCCC1 corresponds to Cyclopentanone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q15",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      }
    ],
    "match_options": [
      "Cyclopentene",
      "Phenol",
      "Cyclohexane",
      "Tetrahydrofuran",
      "Propan-2-ol",
      "1-Butanol",
      "Propene",
      "Benzoyl chloride"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CCOC1 corresponds to Tetrahydrofuran.\nStructure 2: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.\nStructure 3: CC=C corresponds to Propene.\nStructure 4: C1CC=CC1 corresponds to Cyclopentene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q16",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "CO",
        "correctAnswer": "Methanol"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      }
    ],
    "match_options": [
      "Cyclohexene",
      "Propanoic acid",
      "Acetaldehyde",
      "Methanol",
      "Acetic acid",
      "Dimethyl ether",
      "3-Pentanone",
      "1-Bromopropane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCC(=O)CC corresponds to 3-Pentanone.\nStructure 2: C1CCC=CC1 corresponds to Cyclohexene.\nStructure 3: CO corresponds to Methanol.\nStructure 4: CCCBr corresponds to 1-Bromopropane.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q17",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "CC#C",
        "correctAnswer": "Propyne"
      },
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      }
    ],
    "match_options": [
      "Chloroform",
      "Cyclopentene",
      "Cyclohexanone",
      "Dichloromethane",
      "Diethyl ether",
      "Ethylbenzene",
      "Methanol",
      "Propyne"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CC=CC1 corresponds to Cyclopentene.\nStructure 2: CC#C corresponds to Propyne.\nStructure 3: C1CCCCC1=O corresponds to Cyclohexanone.\nStructure 4: CCc1ccccc1 corresponds to Ethylbenzene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q18",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      }
    ],
    "match_options": [
      "Cyclopentene",
      "1-Propanol",
      "Propionaldehyde",
      "Ethanol",
      "Benzoyl chloride",
      "Acetone",
      "Acetonitrile",
      "Benzoic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCO corresponds to Ethanol.\nStructure 2: C1CC=CC1 corresponds to Cyclopentene.\nStructure 3: CC#N corresponds to Acetonitrile.\nStructure 4: CC(C)=O corresponds to Acetone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q19",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      },
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      },
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      }
    ],
    "match_options": [
      "Ethyl benzoate",
      "Chlorobenzene",
      "Phenol",
      "Benzene",
      "Ethanol",
      "Cyclohexene",
      "Ethyl acetate",
      "Dichloromethane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: Oc1ccccc1 corresponds to Phenol.\nStructure 2: ClCCl corresponds to Dichloromethane.\nStructure 3: Clc1ccccc1 corresponds to Chlorobenzene.\nStructure 4: CCOC(C)=O corresponds to Ethyl acetate.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q20",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      }
    ],
    "match_options": [
      "Dichloromethane",
      "Dimethyl sulfoxide",
      "Acetic acid",
      "Ethanol",
      "Formic acid",
      "Acetaldehyde",
      "2-Bromopropane",
      "Dimethyl ether"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CS(=O)C corresponds to Dimethyl sulfoxide.\nStructure 2: CC(Br)C corresponds to 2-Bromopropane.\nStructure 3: CCO corresponds to Ethanol.\nStructure 4: ClCCl corresponds to Dichloromethane.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q21",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      },
      {
        "smiles": "ClC(Cl)Cl",
        "correctAnswer": "Chloroform"
      },
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      }
    ],
    "match_options": [
      "1-Propanol",
      "2-Bromopropane",
      "Dimethyl sulfoxide",
      "Benzoic acid",
      "Acetic acid",
      "Chloroform",
      "Propan-2-ol",
      "Butanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC(=O)O corresponds to Acetic acid.\nStructure 2: ClC(Cl)Cl corresponds to Chloroform.\nStructure 3: CC(Br)C corresponds to 2-Bromopropane.\nStructure 4: CCC(C)=O corresponds to Butanone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q22",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butyraldehyde"
      },
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      }
    ],
    "match_options": [
      "3-Pentanone",
      "Dimethyl ether",
      "Chlorobenzene",
      "Acetic acid",
      "Acetophenone",
      "Butyraldehyde",
      "Cyclohexane",
      "Propan-2-ol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CCCCC1 corresponds to Cyclohexane.\nStructure 2: CC(O)C corresponds to Propan-2-ol.\nStructure 3: CCCC=O corresponds to Butyraldehyde.\nStructure 4: Clc1ccccc1 corresponds to Chlorobenzene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q23",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      },
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      }
    ],
    "match_options": [
      "Cyclopentanone",
      "Propene",
      "Ethyl acetate",
      "Chloroform",
      "Dimethyl ether",
      "Dimethyl sulfoxide",
      "Ethanol",
      "Cyclopentene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC=C corresponds to Propene.\nStructure 2: CCO corresponds to Ethanol.\nStructure 3: O=C1CCCC1 corresponds to Cyclopentanone.\nStructure 4: CCOC(C)=O corresponds to Ethyl acetate.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q24",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "O=C(O)c1ccccc1",
        "correctAnswer": "Benzoic acid"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butyraldehyde"
      }
    ],
    "match_options": [
      "Benzoic acid",
      "Propionaldehyde",
      "Butyraldehyde",
      "Tetrahydrofuran",
      "Ethyl acetate",
      "Cyclopentene",
      "Propanoic acid",
      "Chlorobenzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CCOC1 corresponds to Tetrahydrofuran.\nStructure 2: O=C(O)c1ccccc1 corresponds to Benzoic acid.\nStructure 3: C1CC=CC1 corresponds to Cyclopentene.\nStructure 4: CCCC=O corresponds to Butyraldehyde.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q25",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      }
    ],
    "match_options": [
      "Acetophenone",
      "Acetic acid",
      "2-Bromopropane",
      "Dimethyl sulfoxide",
      "Propyne",
      "Cyclohexanone",
      "Cyclopentene",
      "Diethyl ether"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC(=O)c1ccccc1 corresponds to Acetophenone.\nStructure 2: CS(=O)C corresponds to Dimethyl sulfoxide.\nStructure 3: C1CCCCC1=O corresponds to Cyclohexanone.\nStructure 4: CCOCC corresponds to Diethyl ether.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q26",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCOC(=O)c1ccccc1",
        "correctAnswer": "Ethyl benzoate"
      },
      {
        "smiles": "CCC(=O)O",
        "correctAnswer": "Propanoic acid"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      }
    ],
    "match_options": [
      "Ethyl benzoate",
      "Propanoic acid",
      "2-Bromopropane",
      "1-Butanol",
      "Dimethyl ether",
      "Formic acid",
      "Butyraldehyde",
      "1-Bromopropane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCOC(=O)c1ccccc1 corresponds to Ethyl benzoate.\nStructure 2: CCC(=O)O corresponds to Propanoic acid.\nStructure 3: CCCCO corresponds to 1-Butanol.\nStructure 4: C(=O)O corresponds to Formic acid.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q27",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "CO",
        "correctAnswer": "Methanol"
      },
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      }
    ],
    "match_options": [
      "Anisole",
      "Diethyl ether",
      "Phenol",
      "Cyclopentene",
      "Methanol",
      "Ethylbenzene",
      "Dimethyl sulfoxide",
      "Cyclohexene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: Oc1ccccc1 corresponds to Phenol.\nStructure 2: CO corresponds to Methanol.\nStructure 3: C1CCC=CC1 corresponds to Cyclohexene.\nStructure 4: CCOCC corresponds to Diethyl ether.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q28",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "t-Butyl alcohol"
      },
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      }
    ],
    "match_options": [
      "t-Butyl alcohol",
      "Toluene",
      "Bromobenzene",
      "Benzaldehyde",
      "Cyclohexene",
      "Benzoic acid",
      "Acetone",
      "Phenol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: Brc1ccccc1 corresponds to Bromobenzene.\nStructure 2: CC(C)(C)O corresponds to t-Butyl alcohol.\nStructure 3: C1CCC=CC1 corresponds to Cyclohexene.\nStructure 4: CC(C)=O corresponds to Acetone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q29",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "CC=O",
        "correctAnswer": "Acetaldehyde"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      }
    ],
    "match_options": [
      "Aniline",
      "Anisole",
      "2-Pentanone",
      "Cyclohexanone",
      "Bromobenzene",
      "Acetaldehyde",
      "Cyclopentanone",
      "Ethyl acetate"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CCCCC1=O corresponds to Cyclohexanone.\nStructure 2: Brc1ccccc1 corresponds to Bromobenzene.\nStructure 3: CC=O corresponds to Acetaldehyde.\nStructure 4: O=C1CCCC1 corresponds to Cyclopentanone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q30",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      },
      {
        "smiles": "CCCO",
        "correctAnswer": "1-Propanol"
      },
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "t-Butyl alcohol"
      }
    ],
    "match_options": [
      "Ethyl benzoate",
      "1-Bromopropane",
      "Propan-2-ol",
      "1-Propanol",
      "Diethyl ether",
      "Acetophenone",
      "Dimethyl sulfoxide",
      "t-Butyl alcohol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCCBr corresponds to 1-Bromopropane.\nStructure 2: CCCO corresponds to 1-Propanol.\nStructure 3: CC(=O)c1ccccc1 corresponds to Acetophenone.\nStructure 4: CC(C)(C)O corresponds to t-Butyl alcohol.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q31",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "COc1ccccc1",
        "correctAnswer": "Anisole"
      },
      {
        "smiles": "OCc1ccccc1",
        "correctAnswer": "Benzyl alcohol"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "O=C(O)c1ccccc1",
        "correctAnswer": "Benzoic acid"
      }
    ],
    "match_options": [
      "Methyl acetate",
      "Anisole",
      "2-Bromopropane",
      "Benzoyl chloride",
      "Benzoic acid",
      "Acetophenone",
      "Benzyl alcohol",
      "Propene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: COc1ccccc1 corresponds to Anisole.\nStructure 2: OCc1ccccc1 corresponds to Benzyl alcohol.\nStructure 3: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.\nStructure 4: O=C(O)c1ccccc1 corresponds to Benzoic acid.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q32",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC(=O)O",
        "correctAnswer": "Propanoic acid"
      },
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      },
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      },
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      }
    ],
    "match_options": [
      "Methyl acetate",
      "Dimethyl ether",
      "Propene",
      "1-Bromopropane",
      "2-Bromopropane",
      "Propanoic acid",
      "2-Pentanone",
      "Tetrahydrofuran"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCC(=O)O corresponds to Propanoic acid.\nStructure 2: CCCC(C)=O corresponds to 2-Pentanone.\nStructure 3: CC(Br)C corresponds to 2-Bromopropane.\nStructure 4: COC(C)=O corresponds to Methyl acetate.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q33",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butyraldehyde"
      },
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      }
    ],
    "match_options": [
      "Propan-2-ol",
      "Propyne",
      "Isobutylene",
      "Ethylbenzene",
      "Phenol",
      "Butyraldehyde",
      "Propanoic acid",
      "Cyclohexene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCc1ccccc1 corresponds to Ethylbenzene.\nStructure 2: CC(O)C corresponds to Propan-2-ol.\nStructure 3: CCCC=O corresponds to Butyraldehyde.\nStructure 4: Oc1ccccc1 corresponds to Phenol.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q34",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      }
    ],
    "match_options": [
      "Diethyl ether",
      "Acetone",
      "Ethyl acetate",
      "Bromobenzene",
      "Acetic acid",
      "Benzoyl chloride",
      "Cyclopentanone",
      "Propan-2-ol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC(=O)O corresponds to Acetic acid.\nStructure 2: Brc1ccccc1 corresponds to Bromobenzene.\nStructure 3: CCOCC corresponds to Diethyl ether.\nStructure 4: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q35",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "CCCO",
        "correctAnswer": "1-Propanol"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      }
    ],
    "match_options": [
      "Cyclohexene",
      "Cyclohexane",
      "Phenol",
      "Butanone",
      "Benzoyl chloride",
      "Cyclohexanone",
      "Chlorobenzene",
      "1-Propanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: Oc1ccccc1 corresponds to Phenol.\nStructure 2: CCCO corresponds to 1-Propanol.\nStructure 3: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.\nStructure 4: C1CCCCC1=O corresponds to Cyclohexanone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q36",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      },
      {
        "smiles": "OCc1ccccc1",
        "correctAnswer": "Benzyl alcohol"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      }
    ],
    "match_options": [
      "Propene",
      "Ethanol",
      "Benzyl alcohol",
      "1-Butanol",
      "Acetonitrile",
      "Diethyl ether",
      "Acetic acid",
      "Cyclopentene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC=C corresponds to Propene.\nStructure 2: CC(=O)O corresponds to Acetic acid.\nStructure 3: OCc1ccccc1 corresponds to Benzyl alcohol.\nStructure 4: CCCCO corresponds to 1-Butanol.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q37",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "Isobutylene"
      },
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      }
    ],
    "match_options": [
      "Benzene",
      "Dimethyl sulfoxide",
      "Ethanol",
      "Ethyl acetate",
      "Diethyl ether",
      "Isobutylene",
      "Aniline",
      "3-Pentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCOCC corresponds to Diethyl ether.\nStructure 2: CCO corresponds to Ethanol.\nStructure 3: CC(C)=C corresponds to Isobutylene.\nStructure 4: CCC(=O)CC corresponds to 3-Pentanone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q38",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butyraldehyde"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      }
    ],
    "match_options": [
      "3-Pentanone",
      "Phenol",
      "Cyclohexene",
      "Butyraldehyde",
      "Acetic acid",
      "Ethylbenzene",
      "Acetone",
      "Ethanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC(C)=O corresponds to Acetone.\nStructure 2: CCCC=O corresponds to Butyraldehyde.\nStructure 3: CCO corresponds to Ethanol.\nStructure 4: CC(=O)O corresponds to Acetic acid.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q39",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      },
      {
        "smiles": "CCCO",
        "correctAnswer": "1-Propanol"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "O=C(O)c1ccccc1",
        "correctAnswer": "Benzoic acid"
      }
    ],
    "match_options": [
      "Propene",
      "Bromobenzene",
      "Benzoic acid",
      "1-Propanol",
      "Ethyl acetate",
      "Ethylbenzene",
      "Acetonitrile",
      "Dichloromethane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC=C corresponds to Propene.\nStructure 2: CCCO corresponds to 1-Propanol.\nStructure 3: CCc1ccccc1 corresponds to Ethylbenzene.\nStructure 4: O=C(O)c1ccccc1 corresponds to Benzoic acid.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q40",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "Isobutylene"
      },
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      }
    ],
    "match_options": [
      "Benzyl alcohol",
      "2-Pentanone",
      "Phenol",
      "Cyclopentanone",
      "Isobutylene",
      "Propene",
      "Tetrahydrofuran",
      "Benzoic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC(C)=C corresponds to Isobutylene.\nStructure 2: Oc1ccccc1 corresponds to Phenol.\nStructure 3: CC=C corresponds to Propene.\nStructure 4: C1CCOC1 corresponds to Tetrahydrofuran.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q41",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC(=O)O",
        "correctAnswer": "Propanoic acid"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butyraldehyde"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      }
    ],
    "match_options": [
      "Ethylbenzene",
      "Acetonitrile",
      "Propanoic acid",
      "2-Bromopropane",
      "Benzaldehyde",
      "Propene",
      "Butyraldehyde",
      "Aniline"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCC(=O)O corresponds to Propanoic acid.\nStructure 2: CCCC=O corresponds to Butyraldehyde.\nStructure 3: CCc1ccccc1 corresponds to Ethylbenzene.\nStructure 4: CC#N corresponds to Acetonitrile.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q42",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      }
    ],
    "match_options": [
      "Bromobenzene",
      "Isobutylene",
      "Ethylbenzene",
      "Benzaldehyde",
      "Acetic acid",
      "Formic acid",
      "1-Butanol",
      "Toluene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCc1ccccc1 corresponds to Ethylbenzene.\nStructure 2: Cc1ccccc1 corresponds to Toluene.\nStructure 3: C(=O)O corresponds to Formic acid.\nStructure 4: Brc1ccccc1 corresponds to Bromobenzene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q43",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      },
      {
        "smiles": "COc1ccccc1",
        "correctAnswer": "Anisole"
      },
      {
        "smiles": "CCOC(=O)c1ccccc1",
        "correctAnswer": "Ethyl benzoate"
      }
    ],
    "match_options": [
      "Ethyl benzoate",
      "Benzoic acid",
      "Acetic acid",
      "Cyclopentene",
      "Chloroform",
      "Ethanol",
      "Anisole",
      "Chlorobenzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CC=CC1 corresponds to Cyclopentene.\nStructure 2: CC(=O)O corresponds to Acetic acid.\nStructure 3: COc1ccccc1 corresponds to Anisole.\nStructure 4: CCOC(=O)c1ccccc1 corresponds to Ethyl benzoate.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q44",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "Isobutylene"
      },
      {
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "correctAnswer": "Nitrobenzene"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      }
    ],
    "match_options": [
      "Cyclohexane",
      "Dichloromethane",
      "Isobutylene",
      "Tetrahydrofuran",
      "Propanoic acid",
      "Phenol",
      "Benzaldehyde",
      "Nitrobenzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC(C)=C corresponds to Isobutylene.\nStructure 2: [N+](=O)([O-])c1ccccc1 corresponds to Nitrobenzene.\nStructure 3: C1CCCCC1 corresponds to Cyclohexane.\nStructure 4: C1CCOC1 corresponds to Tetrahydrofuran.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q45",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      },
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propionaldehyde"
      }
    ],
    "match_options": [
      "Anisole",
      "Methanol",
      "Propionaldehyde",
      "Methyl acetate",
      "1-Bromopropane",
      "Propanoic acid",
      "Cyclohexene",
      "Acetic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CCC=CC1 corresponds to Cyclohexene.\nStructure 2: COC(C)=O corresponds to Methyl acetate.\nStructure 3: CC(=O)O corresponds to Acetic acid.\nStructure 4: CCC=O corresponds to Propionaldehyde.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q46",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      },
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      }
    ],
    "match_options": [
      "Cyclohexanone",
      "Propan-2-ol",
      "Phenol",
      "Bromobenzene",
      "Benzaldehyde",
      "Isobutylene",
      "Formic acid",
      "Butanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: O=Cc1ccccc1 corresponds to Benzaldehyde.\nStructure 2: CCC(C)=O corresponds to Butanone.\nStructure 3: CC(O)C corresponds to Propan-2-ol.\nStructure 4: Brc1ccccc1 corresponds to Bromobenzene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q47",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      }
    ],
    "match_options": [
      "Butanone",
      "Tetrahydrofuran",
      "Dimethyl ether",
      "Methyl acetate",
      "Benzoyl chloride",
      "Aniline",
      "Chloroform",
      "Dichloromethane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: ClCCl corresponds to Dichloromethane.\nStructure 2: C1CCOC1 corresponds to Tetrahydrofuran.\nStructure 3: COC(C)=O corresponds to Methyl acetate.\nStructure 4: CCC(C)=O corresponds to Butanone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q48",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "correctAnswer": "Nitrobenzene"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      }
    ],
    "match_options": [
      "Nitrobenzene",
      "Cyclohexene",
      "2-Bromopropane",
      "1-Bromopropane",
      "Diethyl ether",
      "Ethylbenzene",
      "1-Butanol",
      "Cyclohexanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCCCO corresponds to 1-Butanol.\nStructure 2: CCOCC corresponds to Diethyl ether.\nStructure 3: [N+](=O)([O-])c1ccccc1 corresponds to Nitrobenzene.\nStructure 4: CCc1ccccc1 corresponds to Ethylbenzene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q49",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "Isobutylene"
      },
      {
        "smiles": "CCCO",
        "correctAnswer": "1-Propanol"
      }
    ],
    "match_options": [
      "Isobutylene",
      "Acetic acid",
      "Propene",
      "Dimethyl sulfoxide",
      "Cyclohexane",
      "1-Propanol",
      "Ethanol",
      "Benzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: c1ccccc1 corresponds to Benzene.\nStructure 2: C1CCCCC1 corresponds to Cyclohexane.\nStructure 3: CC(C)=C corresponds to Isobutylene.\nStructure 4: CCCO corresponds to 1-Propanol.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q50",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      },
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propionaldehyde"
      }
    ],
    "match_options": [
      "Dimethyl ether",
      "Propionaldehyde",
      "Chlorobenzene",
      "Formic acid",
      "Isobutylene",
      "Benzaldehyde",
      "Benzene",
      "2-Pentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: c1ccccc1 corresponds to Benzene.\nStructure 2: O=Cc1ccccc1 corresponds to Benzaldehyde.\nStructure 3: C(=O)O corresponds to Formic acid.\nStructure 4: CCC=O corresponds to Propionaldehyde.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q51",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      },
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "t-Butyl alcohol"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butyraldehyde"
      }
    ],
    "match_options": [
      "Benzene",
      "t-Butyl alcohol",
      "Acetone",
      "1-Bromopropane",
      "1-Butanol",
      "Toluene",
      "Butyraldehyde",
      "Cyclohexane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCCBr corresponds to 1-Bromopropane.\nStructure 2: CC(C)(C)O corresponds to t-Butyl alcohol.\nStructure 3: C1CCCCC1 corresponds to Cyclohexane.\nStructure 4: CCCC=O corresponds to Butyraldehyde.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q52",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC#C",
        "correctAnswer": "Propyne"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      }
    ],
    "match_options": [
      "Propyne",
      "Propan-2-ol",
      "Aniline",
      "Acetic acid",
      "1-Propanol",
      "1-Bromopropane",
      "3-Pentanone",
      "Formic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC#C corresponds to Propyne.\nStructure 2: CCCBr corresponds to 1-Bromopropane.\nStructure 3: CC(=O)O corresponds to Acetic acid.\nStructure 4: C(=O)O corresponds to Formic acid.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q53",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      },
      {
        "smiles": "COc1ccccc1",
        "correctAnswer": "Anisole"
      },
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "Aniline"
      },
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      }
    ],
    "match_options": [
      "Propene",
      "t-Butyl alcohol",
      "Toluene",
      "Phenol",
      "Anisole",
      "Aniline",
      "Chloroform",
      "Ethyl acetate"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: Cc1ccccc1 corresponds to Toluene.\nStructure 2: COc1ccccc1 corresponds to Anisole.\nStructure 3: Nc1ccccc1 corresponds to Aniline.\nStructure 4: CC=C corresponds to Propene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q54",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "t-Butyl alcohol"
      },
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      },
      {
        "smiles": "OCc1ccccc1",
        "correctAnswer": "Benzyl alcohol"
      },
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      }
    ],
    "match_options": [
      "Propyne",
      "Propan-2-ol",
      "t-Butyl alcohol",
      "Tetrahydrofuran",
      "Benzyl alcohol",
      "Butyraldehyde",
      "Cyclohexanone",
      "Acetophenone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC(C)(C)O corresponds to t-Butyl alcohol.\nStructure 2: CC(O)C corresponds to Propan-2-ol.\nStructure 3: OCc1ccccc1 corresponds to Benzyl alcohol.\nStructure 4: C1CCCCC1=O corresponds to Cyclohexanone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q55",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "ClC(Cl)Cl",
        "correctAnswer": "Chloroform"
      },
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      }
    ],
    "match_options": [
      "Benzene",
      "Acetic acid",
      "Acetone",
      "Benzoic acid",
      "Chloroform",
      "Toluene",
      "Tetrahydrofuran",
      "Dichloromethane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: ClC(Cl)Cl corresponds to Chloroform.\nStructure 2: c1ccccc1 corresponds to Benzene.\nStructure 3: CC(C)=O corresponds to Acetone.\nStructure 4: CC(=O)O corresponds to Acetic acid.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q56",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "Aniline"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      }
    ],
    "match_options": [
      "Acetic acid",
      "Ethylbenzene",
      "Cyclohexane",
      "Acetonitrile",
      "t-Butyl alcohol",
      "Chlorobenzene",
      "Aniline",
      "Acetaldehyde"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CCCCC1 corresponds to Cyclohexane.\nStructure 2: CC#N corresponds to Acetonitrile.\nStructure 3: Nc1ccccc1 corresponds to Aniline.\nStructure 4: CCc1ccccc1 corresponds to Ethylbenzene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q57",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "ClC(Cl)Cl",
        "correctAnswer": "Chloroform"
      },
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      }
    ],
    "match_options": [
      "Chloroform",
      "Benzoic acid",
      "3-Pentanone",
      "Propionaldehyde",
      "2-Bromopropane",
      "Propene",
      "Benzaldehyde",
      "1-Propanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCC(=O)CC corresponds to 3-Pentanone.\nStructure 2: O=Cc1ccccc1 corresponds to Benzaldehyde.\nStructure 3: ClC(Cl)Cl corresponds to Chloroform.\nStructure 4: CC=C corresponds to Propene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q58",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      }
    ],
    "match_options": [
      "1-Butanol",
      "2-Pentanone",
      "Bromobenzene",
      "Ethylbenzene",
      "Acetonitrile",
      "Butanone",
      "Tetrahydrofuran",
      "Benzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCC(C)=O corresponds to Butanone.\nStructure 2: CC#N corresponds to Acetonitrile.\nStructure 3: c1ccccc1 corresponds to Benzene.\nStructure 4: CCc1ccccc1 corresponds to Ethylbenzene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q59",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "Isobutylene"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      },
      {
        "smiles": "CCC(=O)O",
        "correctAnswer": "Propanoic acid"
      }
    ],
    "match_options": [
      "Toluene",
      "Ethyl benzoate",
      "Isobutylene",
      "Cyclohexane",
      "Tetrahydrofuran",
      "Acetaldehyde",
      "Propanoic acid",
      "1-Bromopropane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CCCCC1 corresponds to Cyclohexane.\nStructure 2: CC(C)=C corresponds to Isobutylene.\nStructure 3: Cc1ccccc1 corresponds to Toluene.\nStructure 4: CCC(=O)O corresponds to Propanoic acid.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q60",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      }
    ],
    "match_options": [
      "Ethylbenzene",
      "Toluene",
      "Nitrobenzene",
      "Chlorobenzene",
      "Acetonitrile",
      "Cyclopentene",
      "Propyne",
      "Acetic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: Cc1ccccc1 corresponds to Toluene.\nStructure 2: CC#N corresponds to Acetonitrile.\nStructure 3: CCc1ccccc1 corresponds to Ethylbenzene.\nStructure 4: CC(=O)O corresponds to Acetic acid.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q61",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC#C",
        "correctAnswer": "Propyne"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "OCc1ccccc1",
        "correctAnswer": "Benzyl alcohol"
      },
      {
        "smiles": "CC=O",
        "correctAnswer": "Acetaldehyde"
      }
    ],
    "match_options": [
      "Acetaldehyde",
      "Propan-2-ol",
      "Benzoyl chloride",
      "Benzyl alcohol",
      "Propyne",
      "Methyl acetate",
      "Ethylbenzene",
      "Cyclopentene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC#C corresponds to Propyne.\nStructure 2: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.\nStructure 3: OCc1ccccc1 corresponds to Benzyl alcohol.\nStructure 4: CC=O corresponds to Acetaldehyde.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q62",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      }
    ],
    "match_options": [
      "Acetophenone",
      "Ethanol",
      "Cyclopentanone",
      "Cyclohexane",
      "Cyclohexene",
      "Butyraldehyde",
      "Formic acid",
      "Benzaldehyde"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CCC=CC1 corresponds to Cyclohexene.\nStructure 2: CCO corresponds to Ethanol.\nStructure 3: C(=O)O corresponds to Formic acid.\nStructure 4: C1CCCCC1 corresponds to Cyclohexane.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q63",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propionaldehyde"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "CC#C",
        "correctAnswer": "Propyne"
      }
    ],
    "match_options": [
      "Acetophenone",
      "Propyne",
      "Propionaldehyde",
      "Butanone",
      "Benzaldehyde",
      "Acetaldehyde",
      "Ethylbenzene",
      "Propan-2-ol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCC=O corresponds to Propionaldehyde.\nStructure 2: CCC(C)=O corresponds to Butanone.\nStructure 3: O=Cc1ccccc1 corresponds to Benzaldehyde.\nStructure 4: CC#C corresponds to Propyne.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q64",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      }
    ],
    "match_options": [
      "Dimethyl ether",
      "Bromobenzene",
      "Benzoic acid",
      "Benzaldehyde",
      "Nitrobenzene",
      "1-Bromopropane",
      "Benzoyl chloride",
      "2-Bromopropane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: Brc1ccccc1 corresponds to Bromobenzene.\nStructure 2: CCCBr corresponds to 1-Bromopropane.\nStructure 3: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.\nStructure 4: O=Cc1ccccc1 corresponds to Benzaldehyde.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q65",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      }
    ],
    "match_options": [
      "Tetrahydrofuran",
      "Cyclohexene",
      "Benzoyl chloride",
      "Dimethyl sulfoxide",
      "Propyne",
      "Propan-2-ol",
      "Cyclopentanone",
      "3-Pentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.\nStructure 2: C1CCC=CC1 corresponds to Cyclohexene.\nStructure 3: CS(=O)C corresponds to Dimethyl sulfoxide.\nStructure 4: CC(O)C corresponds to Propan-2-ol.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q66",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "Aniline"
      },
      {
        "smiles": "CCOC(=O)c1ccccc1",
        "correctAnswer": "Ethyl benzoate"
      },
      {
        "smiles": "OCc1ccccc1",
        "correctAnswer": "Benzyl alcohol"
      },
      {
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "correctAnswer": "Nitrobenzene"
      }
    ],
    "match_options": [
      "Aniline",
      "Nitrobenzene",
      "Propyne",
      "Ethyl benzoate",
      "Benzyl alcohol",
      "Phenol",
      "Ethyl acetate",
      "Cyclopentene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: Nc1ccccc1 corresponds to Aniline.\nStructure 2: CCOC(=O)c1ccccc1 corresponds to Ethyl benzoate.\nStructure 3: OCc1ccccc1 corresponds to Benzyl alcohol.\nStructure 4: [N+](=O)([O-])c1ccccc1 corresponds to Nitrobenzene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q67",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "Isobutylene"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      }
    ],
    "match_options": [
      "1-Butanol",
      "2-Bromopropane",
      "Benzaldehyde",
      "Isobutylene",
      "3-Pentanone",
      "Acetonitrile",
      "Aniline",
      "Chlorobenzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC#N corresponds to Acetonitrile.\nStructure 2: CCC(=O)CC corresponds to 3-Pentanone.\nStructure 3: CC(C)=C corresponds to Isobutylene.\nStructure 4: O=Cc1ccccc1 corresponds to Benzaldehyde.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q68",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC(=O)O",
        "correctAnswer": "Propanoic acid"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      }
    ],
    "match_options": [
      "Propene",
      "1-Propanol",
      "Tetrahydrofuran",
      "Acetone",
      "Butanone",
      "Propanoic acid",
      "Benzyl alcohol",
      "Acetaldehyde"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCC(=O)O corresponds to Propanoic acid.\nStructure 2: CCC(C)=O corresponds to Butanone.\nStructure 3: C1CCOC1 corresponds to Tetrahydrofuran.\nStructure 4: CC(C)=O corresponds to Acetone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q69",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      },
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "t-Butyl alcohol"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      }
    ],
    "match_options": [
      "Benzoic acid",
      "Methanol",
      "Cyclohexane",
      "Benzene",
      "t-Butyl alcohol",
      "Nitrobenzene",
      "Benzaldehyde",
      "Cyclopentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CCCCC1 corresponds to Cyclohexane.\nStructure 2: O=C1CCCC1 corresponds to Cyclopentanone.\nStructure 3: CC(C)(C)O corresponds to t-Butyl alcohol.\nStructure 4: O=Cc1ccccc1 corresponds to Benzaldehyde.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q70",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "Isobutylene"
      },
      {
        "smiles": "CCOC(=O)c1ccccc1",
        "correctAnswer": "Ethyl benzoate"
      }
    ],
    "match_options": [
      "Isobutylene",
      "Propionaldehyde",
      "Ethyl benzoate",
      "3-Pentanone",
      "Diethyl ether",
      "Formic acid",
      "Ethyl acetate",
      "Acetone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCOC(C)=O corresponds to Ethyl acetate.\nStructure 2: CCOCC corresponds to Diethyl ether.\nStructure 3: CC(C)=C corresponds to Isobutylene.\nStructure 4: CCOC(=O)c1ccccc1 corresponds to Ethyl benzoate.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q71",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "OCc1ccccc1",
        "correctAnswer": "Benzyl alcohol"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      }
    ],
    "match_options": [
      "Tetrahydrofuran",
      "Butanone",
      "1-Butanol",
      "Phenol",
      "3-Pentanone",
      "Acetophenone",
      "Benzyl alcohol",
      "Cyclopentene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CC=CC1 corresponds to Cyclopentene.\nStructure 2: OCc1ccccc1 corresponds to Benzyl alcohol.\nStructure 3: CCCCO corresponds to 1-Butanol.\nStructure 4: CCC(C)=O corresponds to Butanone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q72",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "CO",
        "correctAnswer": "Methanol"
      },
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      },
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      }
    ],
    "match_options": [
      "1-Propanol",
      "Cyclohexanone",
      "Phenol",
      "Methanol",
      "Benzoyl chloride",
      "Methyl acetate",
      "t-Butyl alcohol",
      "Acetophenone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: Oc1ccccc1 corresponds to Phenol.\nStructure 2: CO corresponds to Methanol.\nStructure 3: C1CCCCC1=O corresponds to Cyclohexanone.\nStructure 4: COC(C)=O corresponds to Methyl acetate.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q73",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      },
      {
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "correctAnswer": "Nitrobenzene"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      },
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      }
    ],
    "match_options": [
      "Acetic acid",
      "Acetonitrile",
      "Propene",
      "Methyl acetate",
      "Chlorobenzene",
      "Nitrobenzene",
      "Dimethyl sulfoxide",
      "Formic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC=C corresponds to Propene.\nStructure 2: [N+](=O)([O-])c1ccccc1 corresponds to Nitrobenzene.\nStructure 3: C(=O)O corresponds to Formic acid.\nStructure 4: Clc1ccccc1 corresponds to Chlorobenzene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q74",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      }
    ],
    "match_options": [
      "Propan-2-ol",
      "Cyclohexane",
      "Chloroform",
      "Acetone",
      "Ethanol",
      "Cyclopentene",
      "Tetrahydrofuran",
      "Cyclohexene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CCOC1 corresponds to Tetrahydrofuran.\nStructure 2: CC(C)=O corresponds to Acetone.\nStructure 3: CCO corresponds to Ethanol.\nStructure 4: CC(O)C corresponds to Propan-2-ol.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q75",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "t-Butyl alcohol"
      },
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "CCOC(=O)c1ccccc1",
        "correctAnswer": "Ethyl benzoate"
      }
    ],
    "match_options": [
      "Cyclohexene",
      "Bromobenzene",
      "1-Propanol",
      "Ethyl benzoate",
      "Cyclohexane",
      "Aniline",
      "Benzoyl chloride",
      "t-Butyl alcohol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.\nStructure 2: CC(C)(C)O corresponds to t-Butyl alcohol.\nStructure 3: C1CCC=CC1 corresponds to Cyclohexene.\nStructure 4: CCOC(=O)c1ccccc1 corresponds to Ethyl benzoate.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q76",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      },
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      },
      {
        "smiles": "ClC(Cl)Cl",
        "correctAnswer": "Chloroform"
      }
    ],
    "match_options": [
      "t-Butyl alcohol",
      "Cyclohexene",
      "Nitrobenzene",
      "2-Pentanone",
      "Chloroform",
      "Butyraldehyde",
      "Benzene",
      "Cyclopentene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CC=CC1 corresponds to Cyclopentene.\nStructure 2: CCCC(C)=O corresponds to 2-Pentanone.\nStructure 3: c1ccccc1 corresponds to Benzene.\nStructure 4: ClC(Cl)Cl corresponds to Chloroform.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q77",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC(=O)O",
        "correctAnswer": "Propanoic acid"
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "COc1ccccc1",
        "correctAnswer": "Anisole"
      }
    ],
    "match_options": [
      "Cyclohexane",
      "3-Pentanone",
      "Propene",
      "Propanoic acid",
      "Anisole",
      "Dimethyl sulfoxide",
      "Acetophenone",
      "Acetonitrile"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCC(=O)O corresponds to Propanoic acid.\nStructure 2: CC#N corresponds to Acetonitrile.\nStructure 3: C1CCCCC1 corresponds to Cyclohexane.\nStructure 4: COc1ccccc1 corresponds to Anisole.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q78",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      }
    ],
    "match_options": [
      "Acetonitrile",
      "Benzaldehyde",
      "Cyclopentanone",
      "Ethyl acetate",
      "Dimethyl sulfoxide",
      "Acetaldehyde",
      "Methanol",
      "Benzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: O=Cc1ccccc1 corresponds to Benzaldehyde.\nStructure 2: CS(=O)C corresponds to Dimethyl sulfoxide.\nStructure 3: CCOC(C)=O corresponds to Ethyl acetate.\nStructure 4: c1ccccc1 corresponds to Benzene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q79",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "O=C(O)c1ccccc1",
        "correctAnswer": "Benzoic acid"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "Isobutylene"
      },
      {
        "smiles": "CC=O",
        "correctAnswer": "Acetaldehyde"
      },
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      }
    ],
    "match_options": [
      "Phenol",
      "Benzoic acid",
      "Isobutylene",
      "Acetaldehyde",
      "Acetone",
      "1-Butanol",
      "Formic acid",
      "Tetrahydrofuran"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: O=C(O)c1ccccc1 corresponds to Benzoic acid.\nStructure 2: CC(C)=C corresponds to Isobutylene.\nStructure 3: CC=O corresponds to Acetaldehyde.\nStructure 4: Oc1ccccc1 corresponds to Phenol.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q80",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "COC",
        "correctAnswer": "Dimethyl ether"
      },
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      }
    ],
    "match_options": [
      "Tetrahydrofuran",
      "Acetone",
      "Ethyl acetate",
      "2-Bromopropane",
      "Butyraldehyde",
      "Ethyl benzoate",
      "Nitrobenzene",
      "Dimethyl ether"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CCOC1 corresponds to Tetrahydrofuran.\nStructure 2: CCOC(C)=O corresponds to Ethyl acetate.\nStructure 3: COC corresponds to Dimethyl ether.\nStructure 4: CC(Br)C corresponds to 2-Bromopropane.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q81",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "CC#C",
        "correctAnswer": "Propyne"
      },
      {
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "correctAnswer": "Nitrobenzene"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      }
    ],
    "match_options": [
      "Nitrobenzene",
      "Chloroform",
      "2-Bromopropane",
      "Benzene",
      "Toluene",
      "Propyne",
      "Ethylbenzene",
      "3-Pentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCC(=O)CC corresponds to 3-Pentanone.\nStructure 2: CC#C corresponds to Propyne.\nStructure 3: [N+](=O)([O-])c1ccccc1 corresponds to Nitrobenzene.\nStructure 4: CCc1ccccc1 corresponds to Ethylbenzene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q82",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      },
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      },
      {
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "correctAnswer": "Nitrobenzene"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      }
    ],
    "match_options": [
      "Dimethyl sulfoxide",
      "Toluene",
      "Benzene",
      "Propan-2-ol",
      "Chlorobenzene",
      "Butyraldehyde",
      "Diethyl ether",
      "Nitrobenzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: Clc1ccccc1 corresponds to Chlorobenzene.\nStructure 2: CC(O)C corresponds to Propan-2-ol.\nStructure 3: [N+](=O)([O-])c1ccccc1 corresponds to Nitrobenzene.\nStructure 4: CCOCC corresponds to Diethyl ether.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q83",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "ClC(Cl)Cl",
        "correctAnswer": "Chloroform"
      },
      {
        "smiles": "COC",
        "correctAnswer": "Dimethyl ether"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      }
    ],
    "match_options": [
      "Ethylbenzene",
      "Tetrahydrofuran",
      "Propanoic acid",
      "Dimethyl sulfoxide",
      "Chloroform",
      "Cyclopentene",
      "Formic acid",
      "Dimethyl ether"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCc1ccccc1 corresponds to Ethylbenzene.\nStructure 2: ClC(Cl)Cl corresponds to Chloroform.\nStructure 3: COC corresponds to Dimethyl ether.\nStructure 4: C(=O)O corresponds to Formic acid.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q84",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      },
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      }
    ],
    "match_options": [
      "2-Bromopropane",
      "Diethyl ether",
      "Ethyl acetate",
      "Dimethyl sulfoxide",
      "Acetonitrile",
      "Phenol",
      "Ethanol",
      "1-Bromopropane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CS(=O)C corresponds to Dimethyl sulfoxide.\nStructure 2: CCO corresponds to Ethanol.\nStructure 3: CC(Br)C corresponds to 2-Bromopropane.\nStructure 4: CCOC(C)=O corresponds to Ethyl acetate.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q85",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      },
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      },
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      },
      {
        "smiles": "CCC(=O)O",
        "correctAnswer": "Propanoic acid"
      }
    ],
    "match_options": [
      "Propionaldehyde",
      "2-Bromopropane",
      "Acetic acid",
      "Anisole",
      "Propan-2-ol",
      "Methyl acetate",
      "Phenol",
      "Propanoic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC(Br)C corresponds to 2-Bromopropane.\nStructure 2: COC(C)=O corresponds to Methyl acetate.\nStructure 3: CC(O)C corresponds to Propan-2-ol.\nStructure 4: CCC(=O)O corresponds to Propanoic acid.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q86",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "CO",
        "correctAnswer": "Methanol"
      }
    ],
    "match_options": [
      "Methanol",
      "Acetophenone",
      "Benzoyl chloride",
      "Cyclohexene",
      "Propionaldehyde",
      "Ethanol",
      "Cyclohexanone",
      "Formic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CCC=CC1 corresponds to Cyclohexene.\nStructure 2: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.\nStructure 3: CC(=O)c1ccccc1 corresponds to Acetophenone.\nStructure 4: CO corresponds to Methanol.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q87",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "COC",
        "correctAnswer": "Dimethyl ether"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "CCCO",
        "correctAnswer": "1-Propanol"
      },
      {
        "smiles": "CC#C",
        "correctAnswer": "Propyne"
      }
    ],
    "match_options": [
      "Butanone",
      "Propene",
      "Propyne",
      "Propanoic acid",
      "1-Propanol",
      "Dimethyl ether",
      "Isobutylene",
      "Bromobenzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: COC corresponds to Dimethyl ether.\nStructure 2: Brc1ccccc1 corresponds to Bromobenzene.\nStructure 3: CCCO corresponds to 1-Propanol.\nStructure 4: CC#C corresponds to Propyne.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q88",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      }
    ],
    "match_options": [
      "Diethyl ether",
      "Propan-2-ol",
      "Cyclohexane",
      "Phenol",
      "Propanoic acid",
      "3-Pentanone",
      "Methyl acetate",
      "Butanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCC(=O)CC corresponds to 3-Pentanone.\nStructure 2: Oc1ccccc1 corresponds to Phenol.\nStructure 3: C1CCCCC1 corresponds to Cyclohexane.\nStructure 4: COC(C)=O corresponds to Methyl acetate.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q89",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "t-Butyl alcohol"
      },
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      },
      {
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "correctAnswer": "Nitrobenzene"
      },
      {
        "smiles": "CO",
        "correctAnswer": "Methanol"
      }
    ],
    "match_options": [
      "t-Butyl alcohol",
      "Nitrobenzene",
      "Dichloromethane",
      "Methanol",
      "1-Butanol",
      "Benzaldehyde",
      "Propanoic acid",
      "Propan-2-ol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC(C)(C)O corresponds to t-Butyl alcohol.\nStructure 2: ClCCl corresponds to Dichloromethane.\nStructure 3: [N+](=O)([O-])c1ccccc1 corresponds to Nitrobenzene.\nStructure 4: CO corresponds to Methanol.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q90",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butyraldehyde"
      }
    ],
    "match_options": [
      "2-Pentanone",
      "Chlorobenzene",
      "Benzaldehyde",
      "1-Butanol",
      "Benzoyl chloride",
      "Butyraldehyde",
      "Cyclopentanone",
      "Benzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: c1ccccc1 corresponds to Benzene.\nStructure 2: O=Cc1ccccc1 corresponds to Benzaldehyde.\nStructure 3: O=C1CCCC1 corresponds to Cyclopentanone.\nStructure 4: CCCC=O corresponds to Butyraldehyde.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q91",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      }
    ],
    "match_options": [
      "Benzaldehyde",
      "Toluene",
      "Cyclohexanone",
      "Phenol",
      "Ethylbenzene",
      "3-Pentanone",
      "1-Bromopropane",
      "Methanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCCBr corresponds to 1-Bromopropane.\nStructure 2: O=Cc1ccccc1 corresponds to Benzaldehyde.\nStructure 3: Oc1ccccc1 corresponds to Phenol.\nStructure 4: CCC(=O)CC corresponds to 3-Pentanone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q92",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "Aniline"
      }
    ],
    "match_options": [
      "Aniline",
      "Dimethyl ether",
      "Benzoyl chloride",
      "3-Pentanone",
      "Chlorobenzene",
      "Ethanol",
      "Acetic acid",
      "Acetonitrile"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCO corresponds to Ethanol.\nStructure 2: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.\nStructure 3: CC#N corresponds to Acetonitrile.\nStructure 4: Nc1ccccc1 corresponds to Aniline.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q93",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "Aniline"
      },
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      },
      {
        "smiles": "OCc1ccccc1",
        "correctAnswer": "Benzyl alcohol"
      },
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      }
    ],
    "match_options": [
      "Benzyl alcohol",
      "Chlorobenzene",
      "Butyraldehyde",
      "Cyclopentanone",
      "Dichloromethane",
      "Benzoyl chloride",
      "Aniline",
      "Benzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: Nc1ccccc1 corresponds to Aniline.\nStructure 2: c1ccccc1 corresponds to Benzene.\nStructure 3: OCc1ccccc1 corresponds to Benzyl alcohol.\nStructure 4: ClCCl corresponds to Dichloromethane.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q94",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      },
      {
        "smiles": "COC",
        "correctAnswer": "Dimethyl ether"
      }
    ],
    "match_options": [
      "1-Butanol",
      "Toluene",
      "Benzene",
      "Benzoic acid",
      "Acetophenone",
      "Ethanol",
      "Dimethyl ether",
      "Diethyl ether"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCCCO corresponds to 1-Butanol.\nStructure 2: CCOCC corresponds to Diethyl ether.\nStructure 3: Cc1ccccc1 corresponds to Toluene.\nStructure 4: COC corresponds to Dimethyl ether.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q95",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      },
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "Isobutylene"
      }
    ],
    "match_options": [
      "Cyclohexene",
      "Benzoyl chloride",
      "Benzyl alcohol",
      "Acetone",
      "Cyclopentene",
      "2-Pentanone",
      "Isobutylene",
      "Chloroform"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC(C)=O corresponds to Acetone.\nStructure 2: CCCC(C)=O corresponds to 2-Pentanone.\nStructure 3: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.\nStructure 4: CC(C)=C corresponds to Isobutylene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q1_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "Isobutylene"
      },
      {
        "smiles": "ClC(Cl)Cl",
        "correctAnswer": "Chloroform"
      },
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propionaldehyde"
      }
    ],
    "match_options": [
      "Nitrobenzene",
      "Isobutylene",
      "1-Butanol",
      "Ethyl acetate",
      "2-Pentanone",
      "Propionaldehyde",
      "Chloroform",
      "Dimethyl ether"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Isobutylene.\nGrid card 2: Chloroform.\nGrid card 3: Ethyl acetate.\nGrid card 4: Propionaldehyde.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q2_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      }
    ],
    "match_options": [
      "Benzoic acid",
      "Propene",
      "Ethyl acetate",
      "Cyclohexane",
      "Dichloromethane",
      "Diethyl ether",
      "Acetophenone",
      "Formic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Dichloromethane.\nGrid card 2: Diethyl ether.\nGrid card 3: Acetophenone.\nGrid card 4: Formic acid.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q5_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "CC=O",
        "correctAnswer": "Acetaldehyde"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      }
    ],
    "match_options": [
      "Acetaldehyde",
      "Dimethyl sulfoxide",
      "Acetic acid",
      "Toluene",
      "1-Propanol",
      "1-Bromopropane",
      "Cyclohexane",
      "Propan-2-ol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Cyclohexane.\nGrid card 2: Dimethyl sulfoxide.\nGrid card 3: Acetaldehyde.\nGrid card 4: 1-Bromopropane.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q6_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "correctAnswer": "Nitrobenzene"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      }
    ],
    "match_options": [
      "Cyclopentene",
      "Ethanol",
      "Chlorobenzene",
      "Nitrobenzene",
      "2-Pentanone",
      "Benzaldehyde",
      "Acetone",
      "Isobutylene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Nitrobenzene.\nGrid card 2: Acetone.\nGrid card 3: Benzaldehyde.\nGrid card 4: Chlorobenzene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q7_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      },
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "Isobutylene"
      }
    ],
    "match_options": [
      "Acetophenone",
      "Cyclopentanone",
      "Chlorobenzene",
      "Propionaldehyde",
      "Formic acid",
      "Diethyl ether",
      "Ethyl benzoate",
      "Isobutylene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Diethyl ether.\nGrid card 2: Cyclopentanone.\nGrid card 3: Acetophenone.\nGrid card 4: Isobutylene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q8_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      },
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "Aniline"
      },
      {
        "smiles": "CC=O",
        "correctAnswer": "Acetaldehyde"
      },
      {
        "smiles": "COC",
        "correctAnswer": "Dimethyl ether"
      }
    ],
    "match_options": [
      "Bromobenzene",
      "Cyclopentanone",
      "Acetaldehyde",
      "t-Butyl alcohol",
      "Benzoyl chloride",
      "Aniline",
      "Acetic acid",
      "Dimethyl ether"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Cyclopentanone.\nGrid card 2: Aniline.\nGrid card 3: Acetaldehyde.\nGrid card 4: Dimethyl ether.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q9_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "Isobutylene"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      }
    ],
    "match_options": [
      "Acetophenone",
      "Methyl acetate",
      "Diethyl ether",
      "Aniline",
      "Benzaldehyde",
      "Toluene",
      "Cyclohexanone",
      "Isobutylene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Acetophenone.\nGrid card 2: Cyclohexanone.\nGrid card 3: Isobutylene.\nGrid card 4: Toluene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q10_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "t-Butyl alcohol"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      }
    ],
    "match_options": [
      "1-Bromopropane",
      "Chlorobenzene",
      "t-Butyl alcohol",
      "Propionaldehyde",
      "Toluene",
      "Bromobenzene",
      "Methyl acetate",
      "Propanoic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Chlorobenzene.\nGrid card 2: Bromobenzene.\nGrid card 3: t-Butyl alcohol.\nGrid card 4: 1-Bromopropane.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q11_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      },
      {
        "smiles": "O=C(O)c1ccccc1",
        "correctAnswer": "Benzoic acid"
      }
    ],
    "match_options": [
      "Dimethyl sulfoxide",
      "Butanone",
      "Ethyl acetate",
      "Benzoic acid",
      "Toluene",
      "Dimethyl ether",
      "Bromobenzene",
      "Methyl acetate"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Ethyl acetate.\nGrid card 2: Bromobenzene.\nGrid card 3: Toluene.\nGrid card 4: Benzoic acid.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q12_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      },
      {
        "smiles": "CCC(=O)O",
        "correctAnswer": "Propanoic acid"
      }
    ],
    "match_options": [
      "Butyraldehyde",
      "Toluene",
      "Benzaldehyde",
      "Benzoyl chloride",
      "Propanoic acid",
      "Acetonitrile",
      "Acetone",
      "Acetic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Benzaldehyde.\nGrid card 2: Acetone.\nGrid card 3: Acetic acid.\nGrid card 4: Propanoic acid.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q13_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propionaldehyde"
      },
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      },
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      }
    ],
    "match_options": [
      "Propionaldehyde",
      "Methanol",
      "Phenol",
      "Acetic acid",
      "Cyclopentene",
      "Acetophenone",
      "Dichloromethane",
      "1-Bromopropane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Propionaldehyde.\nGrid card 2: Phenol.\nGrid card 3: Acetic acid.\nGrid card 4: Dichloromethane.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q14_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "COC",
        "correctAnswer": "Dimethyl ether"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      }
    ],
    "match_options": [
      "Isobutylene",
      "Cyclohexanone",
      "Cyclopentene",
      "Dimethyl ether",
      "Butanone",
      "Cyclopentanone",
      "Tetrahydrofuran",
      "Diethyl ether"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Tetrahydrofuran.\nGrid card 2: Dimethyl ether.\nGrid card 3: Cyclopentene.\nGrid card 4: Butanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q15_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "COc1ccccc1",
        "correctAnswer": "Anisole"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      }
    ],
    "match_options": [
      "Ethyl acetate",
      "Anisole",
      "Benzoic acid",
      "Benzoyl chloride",
      "Benzene",
      "Benzaldehyde",
      "Nitrobenzene",
      "Propene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Benzene.\nGrid card 2: Benzaldehyde.\nGrid card 3: Anisole.\nGrid card 4: Benzoyl chloride.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q16_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "OCc1ccccc1",
        "correctAnswer": "Benzyl alcohol"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butyraldehyde"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      }
    ],
    "match_options": [
      "1-Propanol",
      "Acetophenone",
      "Benzyl alcohol",
      "Acetone",
      "Butyraldehyde",
      "Benzaldehyde",
      "Chloroform",
      "Toluene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Benzaldehyde.\nGrid card 2: Benzyl alcohol.\nGrid card 3: Butyraldehyde.\nGrid card 4: Toluene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q17_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      }
    ],
    "match_options": [
      "1-Butanol",
      "3-Pentanone",
      "1-Propanol",
      "Cyclohexane",
      "Methyl acetate",
      "Propionaldehyde",
      "Butanone",
      "Acetone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: 3-Pentanone.\nGrid card 2: Cyclohexane.\nGrid card 3: Acetone.\nGrid card 4: 1-Butanol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q18_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      },
      {
        "smiles": "ClC(Cl)Cl",
        "correctAnswer": "Chloroform"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      }
    ],
    "match_options": [
      "Methanol",
      "Bromobenzene",
      "Chloroform",
      "Ethanol",
      "Cyclopentanone",
      "Acetaldehyde",
      "Butanone",
      "2-Pentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: 2-Pentanone.\nGrid card 2: Chloroform.\nGrid card 3: Bromobenzene.\nGrid card 4: Cyclopentanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q19_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "CCCO",
        "correctAnswer": "1-Propanol"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      }
    ],
    "match_options": [
      "Cyclohexanone",
      "Acetonitrile",
      "Acetophenone",
      "1-Bromopropane",
      "Benzoyl chloride",
      "Cyclohexane",
      "1-Propanol",
      "Ethylbenzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Acetonitrile.\nGrid card 2: Cyclohexane.\nGrid card 3: 1-Propanol.\nGrid card 4: 1-Bromopropane.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q20_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propionaldehyde"
      }
    ],
    "match_options": [
      "Tetrahydrofuran",
      "Bromobenzene",
      "Ethylbenzene",
      "Propionaldehyde",
      "Cyclopentene",
      "Benzene",
      "1-Butanol",
      "Butanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Butanone.\nGrid card 2: 1-Butanol.\nGrid card 3: Tetrahydrofuran.\nGrid card 4: Propionaldehyde.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q21_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      }
    ],
    "match_options": [
      "Ethanol",
      "1-Propanol",
      "Formic acid",
      "2-Pentanone",
      "Acetone",
      "Cyclohexane",
      "Phenol",
      "Cyclopentene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Cyclohexane.\nGrid card 2: Ethanol.\nGrid card 3: Acetone.\nGrid card 4: Formic acid.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q22_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "O=C(O)c1ccccc1",
        "correctAnswer": "Benzoic acid"
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      }
    ],
    "match_options": [
      "Methyl acetate",
      "Ethanol",
      "Diethyl ether",
      "1-Bromopropane",
      "2-Bromopropane",
      "Benzoic acid",
      "Acetonitrile",
      "Cyclohexanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Benzoic acid.\nGrid card 2: Acetonitrile.\nGrid card 3: Diethyl ether.\nGrid card 4: 2-Bromopropane.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q23_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "t-Butyl alcohol"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      }
    ],
    "match_options": [
      "Benzyl alcohol",
      "Cyclohexene",
      "Ethylbenzene",
      "1-Butanol",
      "t-Butyl alcohol",
      "Benzaldehyde",
      "Ethanol",
      "Dichloromethane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Ethylbenzene.\nGrid card 2: t-Butyl alcohol.\nGrid card 3: 1-Butanol.\nGrid card 4: Dichloromethane.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q24_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      }
    ],
    "match_options": [
      "Butanone",
      "Chlorobenzene",
      "Tetrahydrofuran",
      "Dimethyl sulfoxide",
      "Cyclopentene",
      "Butyraldehyde",
      "2-Pentanone",
      "Diethyl ether"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Diethyl ether.\nGrid card 2: Dimethyl sulfoxide.\nGrid card 3: Tetrahydrofuran.\nGrid card 4: Cyclopentene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q25_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "t-Butyl alcohol"
      }
    ],
    "match_options": [
      "Bromobenzene",
      "Ethyl benzoate",
      "3-Pentanone",
      "Methyl acetate",
      "Acetophenone",
      "Cyclohexane",
      "t-Butyl alcohol",
      "Acetic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Acetophenone.\nGrid card 2: Cyclohexane.\nGrid card 3: 3-Pentanone.\nGrid card 4: t-Butyl alcohol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q26_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      },
      {
        "smiles": "COc1ccccc1",
        "correctAnswer": "Anisole"
      }
    ],
    "match_options": [
      "Cyclohexene",
      "Ethyl benzoate",
      "Benzoyl chloride",
      "Dichloromethane",
      "Anisole",
      "Propionaldehyde",
      "Benzyl alcohol",
      "Acetophenone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Acetophenone.\nGrid card 2: Cyclohexene.\nGrid card 3: Dichloromethane.\nGrid card 4: Anisole.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q27_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propionaldehyde"
      },
      {
        "smiles": "CC#C",
        "correctAnswer": "Propyne"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      }
    ],
    "match_options": [
      "Methanol",
      "3-Pentanone",
      "Propionaldehyde",
      "Propyne",
      "Butyraldehyde",
      "Ethanol",
      "Cyclopentene",
      "Toluene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Propionaldehyde.\nGrid card 2: Propyne.\nGrid card 3: Cyclopentene.\nGrid card 4: Ethanol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q28_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "ClC(Cl)Cl",
        "correctAnswer": "Chloroform"
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      }
    ],
    "match_options": [
      "Chloroform",
      "Acetonitrile",
      "Butanone",
      "Isobutylene",
      "Toluene",
      "2-Pentanone",
      "Dichloromethane",
      "Benzoyl chloride"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Benzoyl chloride.\nGrid card 2: Chloroform.\nGrid card 3: Acetonitrile.\nGrid card 4: Toluene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q29_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      }
    ],
    "match_options": [
      "2-Pentanone",
      "1-Butanol",
      "Acetonitrile",
      "t-Butyl alcohol",
      "Propene",
      "Benzoic acid",
      "Diethyl ether",
      "Cyclopentene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: 2-Pentanone.\nGrid card 2: 1-Butanol.\nGrid card 3: Propene.\nGrid card 4: Diethyl ether.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q30_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      },
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      }
    ],
    "match_options": [
      "2-Bromopropane",
      "Acetone",
      "Cyclohexane",
      "1-Butanol",
      "Methyl acetate",
      "2-Pentanone",
      "Diethyl ether",
      "Phenol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Methyl acetate.\nGrid card 2: Phenol.\nGrid card 3: 1-Butanol.\nGrid card 4: 2-Pentanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q31_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butyraldehyde"
      },
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      }
    ],
    "match_options": [
      "Ethylbenzene",
      "3-Pentanone",
      "Cyclohexanone",
      "Butyraldehyde",
      "Benzoic acid",
      "t-Butyl alcohol",
      "Bromobenzene",
      "Ethyl acetate"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Bromobenzene.\nGrid card 2: Butyraldehyde.\nGrid card 3: Ethyl acetate.\nGrid card 4: Ethylbenzene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q32_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      },
      {
        "smiles": "CCCO",
        "correctAnswer": "1-Propanol"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      }
    ],
    "match_options": [
      "Cyclohexanone",
      "1-Bromopropane",
      "1-Propanol",
      "Dimethyl sulfoxide",
      "Toluene",
      "Formic acid",
      "Chlorobenzene",
      "Cyclohexane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Cyclohexanone.\nGrid card 2: 1-Bromopropane.\nGrid card 3: 1-Propanol.\nGrid card 4: Formic acid.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q33_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      },
      {
        "smiles": "CCCO",
        "correctAnswer": "1-Propanol"
      },
      {
        "smiles": "CCOC(=O)c1ccccc1",
        "correctAnswer": "Ethyl benzoate"
      }
    ],
    "match_options": [
      "Cyclopentanone",
      "Ethyl benzoate",
      "Benzoic acid",
      "1-Propanol",
      "1-Bromopropane",
      "Chloroform",
      "Propan-2-ol",
      "Methyl acetate"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Propan-2-ol.\nGrid card 2: 1-Bromopropane.\nGrid card 3: 1-Propanol.\nGrid card 4: Ethyl benzoate.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q34_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      }
    ],
    "match_options": [
      "Ethyl acetate",
      "Cyclopentanone",
      "Acetone",
      "Anisole",
      "1-Propanol",
      "Propyne",
      "Cyclohexene",
      "Tetrahydrofuran"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Ethyl acetate.\nGrid card 2: Cyclohexene.\nGrid card 3: Acetone.\nGrid card 4: Cyclopentanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q35_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      }
    ],
    "match_options": [
      "Formic acid",
      "Acetone",
      "Aniline",
      "Toluene",
      "Cyclopentanone",
      "Butyraldehyde",
      "Tetrahydrofuran",
      "Anisole"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Toluene.\nGrid card 2: Acetone.\nGrid card 3: Tetrahydrofuran.\nGrid card 4: Cyclopentanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q36_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      },
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "t-Butyl alcohol"
      },
      {
        "smiles": "CC=O",
        "correctAnswer": "Acetaldehyde"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      }
    ],
    "match_options": [
      "Formic acid",
      "Diethyl ether",
      "Cyclohexane",
      "Dimethyl ether",
      "Bromobenzene",
      "Benzene",
      "Acetaldehyde",
      "t-Butyl alcohol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Formic acid.\nGrid card 2: t-Butyl alcohol.\nGrid card 3: Acetaldehyde.\nGrid card 4: Diethyl ether.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q37_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "CO",
        "correctAnswer": "Methanol"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      }
    ],
    "match_options": [
      "Propanoic acid",
      "Methanol",
      "Formic acid",
      "Butanone",
      "Diethyl ether",
      "Chloroform",
      "Cyclopentanone",
      "Cyclohexene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Formic acid.\nGrid card 2: Diethyl ether.\nGrid card 3: Methanol.\nGrid card 4: Butanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q38_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      }
    ],
    "match_options": [
      "Isobutylene",
      "Acetone",
      "1-Butanol",
      "Anisole",
      "Propyne",
      "Toluene",
      "1-Bromopropane",
      "Ethanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Ethanol.\nGrid card 2: 1-Butanol.\nGrid card 3: Toluene.\nGrid card 4: 1-Bromopropane.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q39_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propionaldehyde"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butyraldehyde"
      }
    ],
    "match_options": [
      "Cyclopentene",
      "Butyraldehyde",
      "Propionaldehyde",
      "Chlorobenzene",
      "Cyclohexanone",
      "Toluene",
      "Bromobenzene",
      "Benzaldehyde"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Propionaldehyde.\nGrid card 2: Bromobenzene.\nGrid card 3: Benzaldehyde.\nGrid card 4: Butyraldehyde.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q40_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      }
    ],
    "match_options": [
      "Toluene",
      "Dimethyl sulfoxide",
      "Acetophenone",
      "Diethyl ether",
      "Ethyl acetate",
      "2-Pentanone",
      "Methyl acetate",
      "Phenol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Ethyl acetate.\nGrid card 2: Diethyl ether.\nGrid card 3: Dimethyl sulfoxide.\nGrid card 4: Toluene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q41_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "Aniline"
      },
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      },
      {
        "smiles": "CCOC(=O)c1ccccc1",
        "correctAnswer": "Ethyl benzoate"
      }
    ],
    "match_options": [
      "Ethylbenzene",
      "Ethyl benzoate",
      "Methyl acetate",
      "Chlorobenzene",
      "Formic acid",
      "Cyclohexanone",
      "Propionaldehyde",
      "Aniline"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Aniline.\nGrid card 2: Methyl acetate.\nGrid card 3: Formic acid.\nGrid card 4: Ethyl benzoate.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q42_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "t-Butyl alcohol"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      },
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      }
    ],
    "match_options": [
      "Chlorobenzene",
      "t-Butyl alcohol",
      "Formic acid",
      "Butanone",
      "3-Pentanone",
      "Methanol",
      "Methyl acetate",
      "Benzaldehyde"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: t-Butyl alcohol.\nGrid card 2: Butanone.\nGrid card 3: 3-Pentanone.\nGrid card 4: Chlorobenzene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q43_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      },
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      },
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      }
    ],
    "match_options": [
      "Ethyl acetate",
      "Isobutylene",
      "Butyraldehyde",
      "2-Pentanone",
      "2-Bromopropane",
      "Benzyl alcohol",
      "Cyclopentanone",
      "Cyclohexene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Cyclopentanone.\nGrid card 2: 2-Bromopropane.\nGrid card 3: Ethyl acetate.\nGrid card 4: 2-Pentanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q44_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "CC#C",
        "correctAnswer": "Propyne"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "CO",
        "correctAnswer": "Methanol"
      }
    ],
    "match_options": [
      "Toluene",
      "Cyclopentanone",
      "Acetaldehyde",
      "Methanol",
      "Benzoyl chloride",
      "Propyne",
      "Cyclopentene",
      "Propene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Benzoyl chloride.\nGrid card 2: Propyne.\nGrid card 3: Cyclopentene.\nGrid card 4: Methanol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q45_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "COC",
        "correctAnswer": "Dimethyl ether"
      },
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      }
    ],
    "match_options": [
      "Methyl acetate",
      "Benzoic acid",
      "1-Butanol",
      "Cyclopentanone",
      "Dimethyl ether",
      "2-Pentanone",
      "1-Bromopropane",
      "Cyclohexene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: 1-Butanol.\nGrid card 2: Dimethyl ether.\nGrid card 3: Methyl acetate.\nGrid card 4: 1-Bromopropane.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q46_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCC(=O)O",
        "correctAnswer": "Propanoic acid"
      },
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      },
      {
        "smiles": "ClC(Cl)Cl",
        "correctAnswer": "Chloroform"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      }
    ],
    "match_options": [
      "Tetrahydrofuran",
      "Propanoic acid",
      "Cyclohexanone",
      "Methanol",
      "Formic acid",
      "Chloroform",
      "Acetic acid",
      "Bromobenzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Propanoic acid.\nGrid card 2: Cyclohexanone.\nGrid card 3: Chloroform.\nGrid card 4: Acetic acid.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q47_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      },
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      },
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      }
    ],
    "match_options": [
      "Toluene",
      "Dichloromethane",
      "3-Pentanone",
      "Bromobenzene",
      "Dimethyl sulfoxide",
      "Nitrobenzene",
      "Propene",
      "2-Pentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: 2-Pentanone.\nGrid card 2: Propene.\nGrid card 3: Dichloromethane.\nGrid card 4: Bromobenzene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q48_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      },
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      }
    ],
    "match_options": [
      "Cyclohexene",
      "Diethyl ether",
      "Acetone",
      "Acetic acid",
      "1-Bromopropane",
      "1-Propanol",
      "Acetaldehyde",
      "Butanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Acetone.\nGrid card 2: Cyclohexene.\nGrid card 3: Acetic acid.\nGrid card 4: Butanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q49_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      },
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      }
    ],
    "match_options": [
      "Acetic acid",
      "Ethylbenzene",
      "2-Pentanone",
      "Dimethyl sulfoxide",
      "Propene",
      "Propanoic acid",
      "Acetone",
      "3-Pentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: 3-Pentanone.\nGrid card 2: Acetic acid.\nGrid card 3: Dimethyl sulfoxide.\nGrid card 4: Acetone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q50_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      }
    ],
    "match_options": [
      "Dimethyl ether",
      "Cyclohexane",
      "Propanoic acid",
      "Diethyl ether",
      "Ethanol",
      "Chlorobenzene",
      "Ethyl benzoate",
      "Benzoyl chloride"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Diethyl ether.\nGrid card 2: Ethanol.\nGrid card 3: Chlorobenzene.\nGrid card 4: Benzoyl chloride.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q51_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      },
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      },
      {
        "smiles": "COc1ccccc1",
        "correctAnswer": "Anisole"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      }
    ],
    "match_options": [
      "Anisole",
      "2-Bromopropane",
      "Propene",
      "Chlorobenzene",
      "Isobutylene",
      "Benzene",
      "Ethylbenzene",
      "Tetrahydrofuran"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: 2-Bromopropane.\nGrid card 2: Propene.\nGrid card 3: Anisole.\nGrid card 4: Ethylbenzene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q52_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      }
    ],
    "match_options": [
      "Ethylbenzene",
      "3-Pentanone",
      "1-Bromopropane",
      "Ethyl benzoate",
      "Cyclohexene",
      "Dimethyl ether",
      "Benzoyl chloride",
      "Dichloromethane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: 3-Pentanone.\nGrid card 2: Cyclohexene.\nGrid card 3: Dichloromethane.\nGrid card 4: Benzoyl chloride.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q53_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      }
    ],
    "match_options": [
      "Tetrahydrofuran",
      "Toluene",
      "Acetonitrile",
      "Ethyl benzoate",
      "Propanoic acid",
      "Propyne",
      "Ethylbenzene",
      "Cyclohexanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Acetonitrile.\nGrid card 2: Ethylbenzene.\nGrid card 3: Toluene.\nGrid card 4: Tetrahydrofuran.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q54_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      }
    ],
    "match_options": [
      "Ethyl benzoate",
      "Anisole",
      "Tetrahydrofuran",
      "Acetonitrile",
      "Butanone",
      "Cyclohexene",
      "Benzoyl chloride",
      "2-Bromopropane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Cyclohexene.\nGrid card 2: Tetrahydrofuran.\nGrid card 3: 2-Bromopropane.\nGrid card 4: Butanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q55_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "CC=O",
        "correctAnswer": "Acetaldehyde"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      }
    ],
    "match_options": [
      "Dimethyl sulfoxide",
      "Acetaldehyde",
      "Tetrahydrofuran",
      "Benzyl alcohol",
      "Benzoyl chloride",
      "Cyclohexanone",
      "Cyclopentene",
      "Benzaldehyde"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Benzaldehyde.\nGrid card 2: Cyclopentene.\nGrid card 3: Acetaldehyde.\nGrid card 4: Tetrahydrofuran.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q56_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "Aniline"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      }
    ],
    "match_options": [
      "Acetaldehyde",
      "Cyclohexene",
      "Propan-2-ol",
      "Diethyl ether",
      "Ethylbenzene",
      "Butanone",
      "Formic acid",
      "Aniline"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Ethylbenzene.\nGrid card 2: Aniline.\nGrid card 3: Formic acid.\nGrid card 4: Diethyl ether.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q57_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "CC#C",
        "correctAnswer": "Propyne"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      }
    ],
    "match_options": [
      "Anisole",
      "Phenol",
      "Propyne",
      "Ethanol",
      "Acetonitrile",
      "Acetophenone",
      "Ethyl acetate",
      "Cyclopentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Phenol.\nGrid card 2: Propyne.\nGrid card 3: Ethanol.\nGrid card 4: Acetonitrile.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q58_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "Isobutylene"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butyraldehyde"
      }
    ],
    "match_options": [
      "Chloroform",
      "Butyraldehyde",
      "Cyclopentene",
      "Isobutylene",
      "Benzaldehyde",
      "Acetone",
      "Acetonitrile",
      "Benzyl alcohol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Cyclopentene.\nGrid card 2: Acetonitrile.\nGrid card 3: Isobutylene.\nGrid card 4: Butyraldehyde.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q59_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "correctAnswer": "Nitrobenzene"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      },
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      }
    ],
    "match_options": [
      "Acetaldehyde",
      "Nitrobenzene",
      "Phenol",
      "1-Bromopropane",
      "Cyclopentanone",
      "Acetone",
      "2-Bromopropane",
      "Cyclopentene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Nitrobenzene.\nGrid card 2: Cyclopentanone.\nGrid card 3: 2-Bromopropane.\nGrid card 4: Cyclopentene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q60_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "COc1ccccc1",
        "correctAnswer": "Anisole"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butyraldehyde"
      },
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      },
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      }
    ],
    "match_options": [
      "2-Pentanone",
      "Cyclohexene",
      "Propionaldehyde",
      "Benzoyl chloride",
      "Anisole",
      "Acetone",
      "Butyraldehyde",
      "Benzoic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Anisole.\nGrid card 2: Butyraldehyde.\nGrid card 3: 2-Pentanone.\nGrid card 4: Cyclohexene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q61_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      }
    ],
    "match_options": [
      "Diethyl ether",
      "Propanoic acid",
      "Acetonitrile",
      "Methyl acetate",
      "3-Pentanone",
      "Benzaldehyde",
      "Dimethyl sulfoxide",
      "Phenol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Dimethyl sulfoxide.\nGrid card 2: Phenol.\nGrid card 3: Diethyl ether.\nGrid card 4: Benzaldehyde.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q62_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "CO",
        "correctAnswer": "Methanol"
      }
    ],
    "match_options": [
      "Chloroform",
      "Propionaldehyde",
      "Tetrahydrofuran",
      "Diethyl ether",
      "Butyraldehyde",
      "Cyclohexanone",
      "Acetone",
      "Methanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Cyclohexanone.\nGrid card 2: Acetone.\nGrid card 3: Tetrahydrofuran.\nGrid card 4: Methanol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q63_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCC(=O)O",
        "correctAnswer": "Propanoic acid"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      }
    ],
    "match_options": [
      "Propanoic acid",
      "Propene",
      "1-Butanol",
      "Cyclohexene",
      "Benzyl alcohol",
      "Propionaldehyde",
      "Cyclopentene",
      "Ethanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Propanoic acid.\nGrid card 2: Ethanol.\nGrid card 3: 1-Butanol.\nGrid card 4: Cyclopentene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q64_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butyraldehyde"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      }
    ],
    "match_options": [
      "Ethylbenzene",
      "Butyraldehyde",
      "2-Pentanone",
      "Cyclohexanone",
      "Anisole",
      "Cyclopentene",
      "Cyclohexane",
      "Isobutylene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Butyraldehyde.\nGrid card 2: Ethylbenzene.\nGrid card 3: Cyclohexane.\nGrid card 4: 2-Pentanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q65_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "COc1ccccc1",
        "correctAnswer": "Anisole"
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      },
      {
        "smiles": "CCCO",
        "correctAnswer": "1-Propanol"
      }
    ],
    "match_options": [
      "Propanoic acid",
      "Anisole",
      "Cyclohexane",
      "Acetonitrile",
      "Cyclopentanone",
      "Cyclohexanone",
      "Cyclohexene",
      "1-Propanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Anisole.\nGrid card 2: Acetonitrile.\nGrid card 3: Cyclopentanone.\nGrid card 4: 1-Propanol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q66_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC#C",
        "correctAnswer": "Propyne"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      },
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propionaldehyde"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      }
    ],
    "match_options": [
      "Acetaldehyde",
      "Propyne",
      "Tetrahydrofuran",
      "Formic acid",
      "Propionaldehyde",
      "Propanoic acid",
      "Aniline",
      "Butanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Propyne.\nGrid card 2: Formic acid.\nGrid card 3: Propionaldehyde.\nGrid card 4: Butanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q67_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      },
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      }
    ],
    "match_options": [
      "Ethanol",
      "Phenol",
      "2-Pentanone",
      "Isobutylene",
      "Benzoyl chloride",
      "Cyclopentanone",
      "2-Bromopropane",
      "Cyclopentene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: 2-Bromopropane.\nGrid card 2: Phenol.\nGrid card 3: Cyclopentanone.\nGrid card 4: Benzoyl chloride.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q68_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      },
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      },
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      }
    ],
    "match_options": [
      "Dimethyl sulfoxide",
      "Propan-2-ol",
      "Acetonitrile",
      "Acetaldehyde",
      "2-Pentanone",
      "1-Butanol",
      "1-Bromopropane",
      "Butyraldehyde"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: 1-Bromopropane.\nGrid card 2: Dimethyl sulfoxide.\nGrid card 3: 2-Pentanone.\nGrid card 4: Propan-2-ol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q69_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "ClC(Cl)Cl",
        "correctAnswer": "Chloroform"
      },
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      },
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      }
    ],
    "match_options": [
      "Chloroform",
      "Dimethyl sulfoxide",
      "Phenol",
      "Acetonitrile",
      "Propan-2-ol",
      "Methyl acetate",
      "t-Butyl alcohol",
      "Diethyl ether"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Acetonitrile.\nGrid card 2: Chloroform.\nGrid card 3: Methyl acetate.\nGrid card 4: Dimethyl sulfoxide.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q70_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      },
      {
        "smiles": "CC#C",
        "correctAnswer": "Propyne"
      },
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      }
    ],
    "match_options": [
      "3-Pentanone",
      "Propyne",
      "Propan-2-ol",
      "1-Bromopropane",
      "Cyclopentanone",
      "Acetic acid",
      "Phenol",
      "1-Butanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: 1-Butanol.\nGrid card 2: 1-Bromopropane.\nGrid card 3: Propyne.\nGrid card 4: 3-Pentanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q71_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      },
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      },
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      }
    ],
    "match_options": [
      "Acetic acid",
      "Formic acid",
      "Methyl acetate",
      "Benzene",
      "Ethylbenzene",
      "Cyclohexene",
      "Propan-2-ol",
      "3-Pentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Acetic acid.\nGrid card 2: Formic acid.\nGrid card 3: Methyl acetate.\nGrid card 4: Propan-2-ol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q72_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      },
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "CO",
        "correctAnswer": "Methanol"
      },
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "t-Butyl alcohol"
      }
    ],
    "match_options": [
      "Methanol",
      "1-Bromopropane",
      "Acetophenone",
      "Acetic acid",
      "Cyclohexanone",
      "Dimethyl sulfoxide",
      "t-Butyl alcohol",
      "Propanoic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Cyclohexanone.\nGrid card 2: Dimethyl sulfoxide.\nGrid card 3: Methanol.\nGrid card 4: t-Butyl alcohol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q73_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "CC=O",
        "correctAnswer": "Acetaldehyde"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      }
    ],
    "match_options": [
      "Acetaldehyde",
      "Bromobenzene",
      "Dimethyl ether",
      "Dichloromethane",
      "Acetic acid",
      "Chloroform",
      "1-Butanol",
      "Propionaldehyde"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Dichloromethane.\nGrid card 2: Bromobenzene.\nGrid card 3: Acetaldehyde.\nGrid card 4: 1-Butanol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q74_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      },
      {
        "smiles": "COC",
        "correctAnswer": "Dimethyl ether"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      }
    ],
    "match_options": [
      "Anisole",
      "1-Butanol",
      "Dimethyl ether",
      "Cyclohexane",
      "Tetrahydrofuran",
      "Butanone",
      "Propanoic acid",
      "Benzoyl chloride"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Tetrahydrofuran.\nGrid card 2: Butanone.\nGrid card 3: Dimethyl ether.\nGrid card 4: 1-Butanol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q75_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      },
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "Aniline"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butyraldehyde"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      }
    ],
    "match_options": [
      "Butyraldehyde",
      "Chlorobenzene",
      "Aniline",
      "1-Bromopropane",
      "Dimethyl ether",
      "Cyclopentene",
      "Ethyl acetate",
      "Acetone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Chlorobenzene.\nGrid card 2: Aniline.\nGrid card 3: Butyraldehyde.\nGrid card 4: Acetone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q76_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butyraldehyde"
      },
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      },
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propionaldehyde"
      }
    ],
    "match_options": [
      "Benzoyl chloride",
      "Butyraldehyde",
      "t-Butyl alcohol",
      "2-Bromopropane",
      "Cyclopentanone",
      "Benzaldehyde",
      "1-Bromopropane",
      "Propionaldehyde"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Benzoyl chloride.\nGrid card 2: Butyraldehyde.\nGrid card 3: 2-Bromopropane.\nGrid card 4: Propionaldehyde.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q77_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      },
      {
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "correctAnswer": "Nitrobenzene"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      }
    ],
    "match_options": [
      "Nitrobenzene",
      "Butyraldehyde",
      "Ethylbenzene",
      "Acetic acid",
      "Toluene",
      "Acetophenone",
      "Ethanol",
      "Cyclopentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Acetophenone.\nGrid card 2: Acetic acid.\nGrid card 3: Nitrobenzene.\nGrid card 4: Cyclopentanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q78_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      }
    ],
    "match_options": [
      "Nitrobenzene",
      "3-Pentanone",
      "Chloroform",
      "Bromobenzene",
      "2-Bromopropane",
      "Cyclohexane",
      "Cyclohexene",
      "Chlorobenzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Cyclohexene.\nGrid card 2: Bromobenzene.\nGrid card 3: Cyclohexane.\nGrid card 4: Chlorobenzene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q79_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "CC=O",
        "correctAnswer": "Acetaldehyde"
      },
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "ClC(Cl)Cl",
        "correctAnswer": "Chloroform"
      }
    ],
    "match_options": [
      "Cyclopentene",
      "Ethyl acetate",
      "Chloroform",
      "Benzoic acid",
      "1-Bromopropane",
      "3-Pentanone",
      "Acetaldehyde",
      "1-Butanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Cyclopentene.\nGrid card 2: Acetaldehyde.\nGrid card 3: 3-Pentanone.\nGrid card 4: Chloroform.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q80_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butyraldehyde"
      },
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      }
    ],
    "match_options": [
      "Butanone",
      "Ethyl acetate",
      "Acetophenone",
      "Formic acid",
      "Cyclohexene",
      "Propene",
      "Butyraldehyde",
      "Cyclopentene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Butanone.\nGrid card 2: Butyraldehyde.\nGrid card 3: Acetophenone.\nGrid card 4: Propene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q81_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      },
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "Aniline"
      },
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      }
    ],
    "match_options": [
      "Aniline",
      "Acetone",
      "Benzoic acid",
      "Benzene",
      "Toluene",
      "Tetrahydrofuran",
      "Acetonitrile",
      "Ethyl acetate"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Ethyl acetate.\nGrid card 2: Toluene.\nGrid card 3: Aniline.\nGrid card 4: Benzene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q82_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "COC",
        "correctAnswer": "Dimethyl ether"
      },
      {
        "smiles": "CCCO",
        "correctAnswer": "1-Propanol"
      },
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "Aniline"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      }
    ],
    "match_options": [
      "Aniline",
      "Propionaldehyde",
      "Phenol",
      "Dimethyl ether",
      "Acetic acid",
      "1-Propanol",
      "Tetrahydrofuran",
      "Cyclopentene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Dimethyl ether.\nGrid card 2: 1-Propanol.\nGrid card 3: Aniline.\nGrid card 4: Cyclopentene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q83_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "correctAnswer": "Nitrobenzene"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butyraldehyde"
      },
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      }
    ],
    "match_options": [
      "Butyraldehyde",
      "Ethyl acetate",
      "Dichloromethane",
      "Propyne",
      "Toluene",
      "Aniline",
      "Ethanol",
      "Nitrobenzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Nitrobenzene.\nGrid card 2: Butyraldehyde.\nGrid card 3: Ethyl acetate.\nGrid card 4: Toluene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q84_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "OCc1ccccc1",
        "correctAnswer": "Benzyl alcohol"
      },
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propionaldehyde"
      },
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      }
    ],
    "match_options": [
      "3-Pentanone",
      "Ethylbenzene",
      "Propionaldehyde",
      "Ethyl benzoate",
      "Benzyl alcohol",
      "Methanol",
      "Acetic acid",
      "Acetophenone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Benzyl alcohol.\nGrid card 2: Propionaldehyde.\nGrid card 3: Acetophenone.\nGrid card 4: Acetic acid.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q85_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "CCOC(=O)c1ccccc1",
        "correctAnswer": "Ethyl benzoate"
      },
      {
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "correctAnswer": "Nitrobenzene"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      }
    ],
    "match_options": [
      "Cyclopentene",
      "Diethyl ether",
      "Ethyl benzoate",
      "Dimethyl ether",
      "Benzoic acid",
      "Acetone",
      "Toluene",
      "Nitrobenzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Diethyl ether.\nGrid card 2: Ethyl benzoate.\nGrid card 3: Nitrobenzene.\nGrid card 4: Cyclopentene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q86_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      },
      {
        "smiles": "CC#C",
        "correctAnswer": "Propyne"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "Isobutylene"
      }
    ],
    "match_options": [
      "Diethyl ether",
      "Dichloromethane",
      "Benzene",
      "Acetone",
      "Propene",
      "Chlorobenzene",
      "Isobutylene",
      "Propyne"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Chlorobenzene.\nGrid card 2: Propyne.\nGrid card 3: Diethyl ether.\nGrid card 4: Isobutylene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q87_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "CO",
        "correctAnswer": "Methanol"
      }
    ],
    "match_options": [
      "Benzene",
      "1-Propanol",
      "3-Pentanone",
      "Methanol",
      "Ethyl acetate",
      "Chloroform",
      "Nitrobenzene",
      "Cyclohexane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Ethyl acetate.\nGrid card 2: 3-Pentanone.\nGrid card 3: Cyclohexane.\nGrid card 4: Methanol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q88_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "COC",
        "correctAnswer": "Dimethyl ether"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      },
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      }
    ],
    "match_options": [
      "Phenol",
      "Cyclohexanone",
      "Cyclopentanone",
      "Ethyl acetate",
      "Propanoic acid",
      "Acetic acid",
      "Dimethyl ether",
      "Aniline"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Dimethyl ether.\nGrid card 2: Cyclopentanone.\nGrid card 3: Phenol.\nGrid card 4: Acetic acid.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q89_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      }
    ],
    "match_options": [
      "2-Bromopropane",
      "1-Butanol",
      "Propene",
      "Cyclohexanone",
      "Ethanol",
      "Phenol",
      "Butanone",
      "Benzoic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Propene.\nGrid card 2: Ethanol.\nGrid card 3: 1-Butanol.\nGrid card 4: Butanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q90_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      },
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      }
    ],
    "match_options": [
      "Isobutylene",
      "Chlorobenzene",
      "2-Bromopropane",
      "Methyl acetate",
      "Propyne",
      "Diethyl ether",
      "Benzene",
      "Ethyl acetate"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Diethyl ether.\nGrid card 2: Ethyl acetate.\nGrid card 3: Chlorobenzene.\nGrid card 4: Benzene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q91_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      }
    ],
    "match_options": [
      "Cyclohexanone",
      "Ethanol",
      "Nitrobenzene",
      "Methyl acetate",
      "Benzoyl chloride",
      "Propene",
      "Ethylbenzene",
      "1-Butanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Ethanol.\nGrid card 2: Benzoyl chloride.\nGrid card 3: Cyclohexanone.\nGrid card 4: 1-Butanol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q92_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      }
    ],
    "match_options": [
      "Cyclohexanone",
      "Benzoic acid",
      "3-Pentanone",
      "Aniline",
      "Propene",
      "Bromobenzene",
      "Cyclopentene",
      "Benzaldehyde"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Cyclopentene.\nGrid card 2: Cyclohexanone.\nGrid card 3: Bromobenzene.\nGrid card 4: Propene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q93_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propionaldehyde"
      },
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "Aniline"
      },
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      }
    ],
    "match_options": [
      "Dimethyl ether",
      "Dimethyl sulfoxide",
      "Propionaldehyde",
      "Propene",
      "Propan-2-ol",
      "Aniline",
      "Butanone",
      "Ethyl benzoate"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Propionaldehyde.\nGrid card 2: Dimethyl sulfoxide.\nGrid card 3: Aniline.\nGrid card 4: Propene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q94_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "t-Butyl alcohol"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "O=C(O)c1ccccc1",
        "correctAnswer": "Benzoic acid"
      },
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      }
    ],
    "match_options": [
      "Ethylbenzene",
      "Benzoic acid",
      "Methanol",
      "t-Butyl alcohol",
      "1-Butanol",
      "Cyclohexane",
      "Methyl acetate",
      "Ethyl acetate"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: t-Butyl alcohol.\nGrid card 2: Ethylbenzene.\nGrid card 3: Benzoic acid.\nGrid card 4: Methyl acetate.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q95_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butyraldehyde"
      },
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "COC",
        "correctAnswer": "Dimethyl ether"
      }
    ],
    "match_options": [
      "Toluene",
      "Cyclohexene",
      "Dichloromethane",
      "Butyraldehyde",
      "Benzoyl chloride",
      "Acetophenone",
      "Dimethyl ether",
      "Isobutylene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Butyraldehyde.\nGrid card 2: Cyclohexene.\nGrid card 3: Benzoyl chloride.\nGrid card 4: Dimethyl ether.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  }
];
