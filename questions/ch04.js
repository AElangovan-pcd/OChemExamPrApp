// OChemStudyBuddy - McMurry Chapter 4
// Author: A. Elangovan, PhD
var CH04_QUESTIONS = [
  {
    "question_id": "ch04_q1_iupac_lowest_locant",
    "topic": "Cycloalkane Nomenclature",
    "difficulty_level": "Medium",
    "question_text": "What is the correct IUPAC name for the following trisubstituted cyclohexane?",
    "question_smiles": "CC1CCC(CC)C(C)C1",
    "options": [
      {
        "option_id": "A",
        "text": "1-Ethyl-2,4-dimethylcyclohexane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-Ethyl-1,2-dimethylcyclohexane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Ethyl-3,4-dimethylcyclohexane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5-Ethyl-1,2-dimethylcyclohexane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the lowest-locant and alphabetical tie-breaker rules for naming cycloalkanes with three or more substituents.",
      "process": "Step 1: Identify all substituents on the cyclohexane ring: two methyl groups and one ethyl group.\nStep 2: Compare possible numbering schemes to obtain the lowest locant set. Starting at either the ethyl group or the C1-methyl group yields an identical set of locants: (1, 2, 4). Other schemes like (1, 2, 5) or (1, 3, 4) are numerically higher and eliminated.\nStep 3: Apply the tie-breaker rule. When two numbering schemes yield the same set of locants, the lower locant is assigned to the substituent cited first alphabetically. Since 'ethyl' comes before 'methyl' alphabetically, the ethyl group receives locant 1.\nStep 4: Numbering starts at the ethyl group (C1) and proceeds towards the closer methyl group (C2), placing the second methyl at C4. This yields 1-ethyl-2,4-dimethylcyclohexane.",
      "result": "The correct IUPAC name is 1-ethyl-2,4-dimethylcyclohexane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q2_ring_vs_chain_priority",
    "topic": "Cycloalkane Nomenclature",
    "difficulty_level": "Easy",
    "question_text": "Determine the correct IUPAC name for the compound shown below, where a cyclobutyl ring is attached to a six-carbon chain.",
    "question_smiles": "CCCC(C1CCC1)CC",
    "options": [
      {
        "option_id": "A",
        "text": "3-Cyclobutylhexane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Hexylcyclobutane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(1-Ethylbutyl)cyclobutane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-Cyclobutylhexane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the IUPAC naming convention when a cycloalkyl group is attached to an open-chain alkane.",
      "process": "Step 1: Count the number of carbons in the ring (4 carbons) and the longest continuous carbon chain (6 carbons).\nStep 2: Since the alkyl chain has more carbons than the ring (6 vs 4), the chain is the parent alkane (hexane) and the ring is named as a substituent (cyclobutyl).\nStep 3: Number the chain from the end closer to the substituent to give the lowest locant. Numbering from right to left gives the substituent at C3 (3-cyclobutylhexane), whereas from left to right gives it at C4.",
      "result": "The correct name is 3-cyclobutylhexane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q3_alphabetical_numbering_tiebreaker",
    "topic": "Cycloalkane Nomenclature",
    "difficulty_level": "Medium",
    "question_text": "Assign the correct IUPAC name for a disubstituted cyclohexane containing a methyl group and an isopropyl group at the 1 and 3 positions.",
    "question_smiles": "CC(C)C1CCCC(C)C1",
    "options": [
      {
        "option_id": "A",
        "text": "1-Isopropyl-3-methylcyclohexane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Isopropyl-1-methylcyclohexane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Methyl-3-(1-methylethyl)cyclohexane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Methyl-5-isopropylcyclohexane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the tiebreaker rule for numbering disubstituted cycloalkanes when the locant set is identical from either direction.",
      "process": "Step 1: Numbering from either substituent gives the locant set 1,3.\nStep 2: In a tiebreaker scenario, assign the lower number (1) to the substituent that comes first alphabetically.\nStep 3: Compare 'isopropyl' (alphabetized under 'i') and 'methyl' (alphabetized under 'm'). Since 'i' precedes 'm', the isopropyl group gets C1 and the methyl group gets C3.\nStep 4: Assemble the name as 1-isopropyl-3-methylcyclohexane.",
      "result": "The correct name is 1-isopropyl-3-methylcyclohexane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q4_lowest_locant_dimethyl",
    "topic": "Cycloalkane Nomenclature",
    "difficulty_level": "Medium",
    "question_text": "What is the IUPAC name of the following compound?",
    "question_smiles": "CC1(C)CC(C)CC1",
    "options": [
      {
        "option_id": "A",
        "text": "1,1,3-Trimethylcyclopentane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,3,3-Trimethylcyclopentane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,4,4-Trimethylcyclopentane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,1,4-Trimethylcyclopentane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question addresses numbering rules when multiple substituents are present on a single carbon atom of a cycloalkane.",
      "process": "Step 1: Identify substituents: two methyls at one carbon, one methyl at another carbon. The ring is a cyclopentane.\nStep 2: Compare numbering options. Starting at the carbon with two methyls gives the locant set 1,1,3. Starting at the carbon with one methyl gives 1,3,3.\nStep 3: Compare the sets 1,1,3 and 1,3,3 term-by-term. At the second term, 1 is lower than 3. Thus, 1,1,3-trimethylcyclopentane is the correct locant set.",
      "result": "The IUPAC name is 1,1,3-trimethylcyclopentane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q5_bicyclo_heptane_norbornane",
    "topic": "Cycloalkane Nomenclature",
    "difficulty_level": "Hard",
    "question_text": "Select the correct IUPAC name for the bridged bicyclic compound known commonly as norbornane.",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Bicyclo[2.2.1]heptane",
        "smiles": "C1CC2CCC1C2",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Bicyclo[2.2.2]octane",
        "smiles": "C1CC2CCC1(CC2)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Bicyclo[3.2.0]heptane",
        "smiles": "C1CC2C1CCC2",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Bicyclo[2.1.1]hexane",
        "smiles": "C1CC2CC1C2",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the IUPAC rules for naming bridged bicyclic alkanes.",
      "process": "Step 1: Identify the bridgehead carbon atoms (the two carbons where the rings join). They are C1 and C4 in this 7-carbon system.\nStep 2: Count the number of carbons in each of the three bridges connecting the bridgeheads. The bridges contain 2, 2, and 1 carbon atoms.\nStep 3: Write the name format: Bicyclo[x.y.z]alkane, where x, y, and z are the bridge lengths ordered from largest to smallest. Here, it is [2.2.1].\nStep 4: Count the total number of carbon atoms in the bicyclic system (7 carbons), which corresponds to the parent alkane name 'heptane'. Combine to get Bicyclo[2.2.1]heptane.",
      "result": "The IUPAC name is Bicyclo[2.2.1]heptane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q6_alphabetical_prefix_cyclopentane",
    "topic": "Cycloalkane Nomenclature",
    "difficulty_level": "Medium",
    "question_text": "What is the systematic IUPAC name for a cyclopentane ring substituted with a tert-butyl group and a methyl group in a 1,3-relationship?",
    "question_smiles": "CC(C)(C)C1CCC(C)C1",
    "options": [
      {
        "option_id": "A",
        "text": "1-tert-Butyl-3-methylcyclopentane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-tert-Butyl-1-methylcyclopentane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Methyl-3-tert-butylcyclopentane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Butyl-3-methylcyclopentane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests how prefix names like 'tert-' are treated when determining alphabetical priority for numbering cycloalkanes.",
      "process": "Step 1: Identify the substituents: 'tert-butyl' and 'methyl'.\nStep 2: In alphabetizing, prefixes like 'sec-' and 'tert-' are ignored (except in 'isobutyl', 'isopropyl', etc., where 'iso' is part of the name). Thus, 'tert-butyl' is alphabetized under 'b' for butyl.\nStep 3: Compare 'b' (butyl) and 'm' (methyl). Since 'b' comes first, the carbon bearing the tert-butyl group is numbered C1 and the carbon bearing the methyl group is numbered C3.",
      "result": "The correct name is 1-tert-butyl-3-methylcyclopentane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q7_decalin_iupac",
    "topic": "Cycloalkane Nomenclature",
    "difficulty_level": "Hard",
    "question_text": "What is the systematic IUPAC name for decalin, a fused bicyclic alkane consisting of two conjoined six-membered rings?",
    "question_smiles": "C1CCC2CCCCC2C1",
    "options": [
      {
        "option_id": "A",
        "text": "Bicyclo[4.4.0]decane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Bicyclo[4.4.1]undecane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Bicyclo[3.3.0]octane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Bicyclo[4.3.0]nonane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests naming conventions for fused bicyclic ring systems.",
      "process": "Step 1: Identify the bridgehead carbons where the two six-membered rings fuse.\nStep 2: Determine the three pathways (bridges) that connect these two bridgeheads. Two of the pathways contain 4 carbons each. The third pathway is the direct bond between the bridgeheads, which contains 0 carbons.\nStep 3: Format the bridge sizes: [4.4.0].\nStep 4: Count the total number of carbon atoms. Decalin has 10 carbons. The parent name is decane. Thus, the name is Bicyclo[4.4.0]decane.",
      "result": "The systematic name is Bicyclo[4.4.0]decane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q8_ring_assembled_cycloalkyl",
    "topic": "Cycloalkane Nomenclature",
    "difficulty_level": "Easy",
    "question_text": "What is the IUPAC name for the compound composed of two cyclobutane rings connected by a single carbon-carbon covalent bond?",
    "question_smiles": "C1CC(C1)C2CCC2",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclobutylcyclobutane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Bicyclobutyl",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,1'-Bicyclobutane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Cyclobutylcyclobutane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the IUPAC naming rules for assembly systems consisting of two identical rings.",
      "process": "Step 1: Identify the two rings. They are both cyclobutane rings.\nStep 2: One ring is treated as the parent cycloalkane (cyclobutane) and the other is treated as a substituent (cyclobutyl).\nStep 3: For a single linkage between two identical rings, the locant '1-' is redundant and omitted from the name. Thus, the correct IUPAC name is simply cyclobutylcyclobutane.",
      "result": "The correct systematic name is cyclobutylcyclobutane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q9_cis_trans_naming_cyclobutane",
    "topic": "Cycloalkane Nomenclature",
    "difficulty_level": "Medium",
    "question_text": "Identify the systematic name for the cyclobutane derivative that has ethyl groups on C1 and C2 pointing to the same face of the ring.",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "cis-1,2-Diethylcyclobutane",
        "smiles": "CC[C@@H]1CC[C@@H]1CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "trans-1,2-Diethylcyclobutane",
        "smiles": "CC[C@H]1CC[C@@H]1CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "cis-1,3-Diethylcyclobutane",
        "smiles": "CC[C@@H]1C[C@@H](CC)C1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "trans-1,3-Diethylcyclobutane",
        "smiles": "CC[C@H]1C[C@@H](CC)C1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the stereochemical descriptors 'cis' and 'trans' in cycloalkanes.",
      "process": "Step 1: Identify the parent ring: cyclobutane.\nStep 2: Identify the substituents and their positions: ethyl groups at C1 and C2.\nStep 3: Determine the relative stereochemistry. Since the two groups point to the same face of the ring, the prefix is 'cis-'.\nStep 4: Combine the components: cis-1,2-diethylcyclobutane.",
      "result": "The correct systematic name is cis-1,2-diethylcyclobutane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q10_polysubstituted_cyclohexane_locants",
    "topic": "Cycloalkane Nomenclature",
    "difficulty_level": "Hard",
    "question_text": "What is the systematic IUPAC name for the cyclohexane derivative shown below?",
    "question_smiles": "CC(C)C1CCC(C)C(C)C1",
    "options": [
      {
        "option_id": "A",
        "text": "4-Isopropyl-1,2-dimethylcyclohexane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Isopropyl-3,4-dimethylcyclohexane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5-Isopropyl-1,2-dimethylcyclohexane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-Isopropyl-2,3-dimethylcyclohexane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests numbering rules when three substituents are present and we must select the lowest locant set.",
      "process": "Step 1: Identify substituents: two methyls and one isopropyl.\nStep 2: List potential numbering paths to find the lowest locants:\n- Path 1 (starting at C1 of one methyl and going towards the other): locants 1,2,4.\n- Path 2 (starting at C1 of the other methyl): locants 1,2,5.\n- Path 3 (starting at isopropyl): locants 1,3,4.\nStep 3: The locant set 1,2,4 is the lowest set. The substituents are at positions 1, 2, and 4.\nStep 4: Numbering: methyls at 1 and 2, isopropyl at 4. Alphabetizing: 'isopropyl' comes before 'methyl'. Thus: 4-isopropyl-1,2-dimethylcyclohexane.",
      "result": "The correct systematic name is 4-isopropyl-1,2-dimethylcyclohexane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q11_highest_ring_strain",
    "topic": "Ring Strain & Heats of Combustion",
    "difficulty_level": "Easy",
    "question_text": "Which of the following cycloalkanes possesses the greatest total ring strain?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclopropane",
        "smiles": "C1CC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclobutane",
        "smiles": "C1CCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclopentane",
        "smiles": "C1CCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclohexane",
        "smiles": "C1CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests basic understanding of total ring strain in small and common rings.",
      "process": "Step 1: Review total ring strain values: Cyclopropane (~115 kJ/mol), Cyclobutane (~110 kJ/mol), Cyclopentane (~26 kJ/mol), Cyclohexane (~0 kJ/mol).\nStep 2: Compare values. Cyclopropane has the highest total ring strain due to extreme angle strain (60° bond angles) and high torsional strain (eclipsed C-H bonds).",
      "result": "Cyclopropane has the highest total ring strain."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q12_ring_strain_per_ch2",
    "topic": "Ring Strain & Heats of Combustion",
    "difficulty_level": "Medium",
    "question_text": "Rank the following cycloalkanes in order of decreasing ring strain per methylene (CH2) group: cyclopropane, cyclobutane, cyclopentane, cyclohexane.",
    "question_smiles": "C1CC1",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclopropane > Cyclobutane > Cyclopentane > Cyclohexane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclobutane > Cyclopropane > Cyclopentane > Cyclohexane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclopropane > Cyclopentane > Cyclobutane > Cyclohexane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclohexane > Cyclopentane > Cyclobutane > Cyclopropane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the relative ring strain normalized per carbon atom, which indicates structural stability.",
      "process": "Step 1: Calculate strain per CH2 group: \n- Cyclopropane: 115 kJ/mol / 3 = 38.3 kJ/mol\n- Cyclobutane: 110 kJ/mol / 4 = 27.5 kJ/mol\n- Cyclopentane: 26 kJ/mol / 5 = 5.2 kJ/mol\n- Cyclohexane: 0 kJ/mol / 6 = 0 kJ/mol\nStep 2: Order these values from largest to smallest: Cyclopropane > Cyclobutane > Cyclopentane > Cyclohexane.",
      "result": "The correct order of decreasing ring strain per CH2 group is Cyclopropane > Cyclobutane > Cyclopentane > Cyclohexane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q13_heat_of_combustion_stability",
    "topic": "Ring Strain & Heats of Combustion",
    "difficulty_level": "Medium",
    "question_text": "Which statement best explains why cyclohexane has the lowest heat of combustion per CH2 group (~658.7 kJ/mol) among the cycloalkanes?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "It is virtually free of both angle strain and torsional strain.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It has planar geometry which maximizes orbital overlap.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Its C-C-C angles are forced to be exactly 120 degrees.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It has significant transannular strain which stabilizes the C-C bonds.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the relationship between ring strain and the heat of combustion.",
      "process": "Step 1: Recall that the heat of combustion per CH2 group is a measure of thermodynamic stability. The lower the heat of combustion, the more stable the cycloalkane.\nStep 2: Cyclohexane is non-planar and adopts a chair conformation.\nStep 3: In the chair conformation, C-C-C bond angles are 111.5° (nearly 109.5°), eliminating angle strain, and all adjacent C-H bonds are fully staggered, eliminating torsional strain.",
      "result": "Cyclohexane has the lowest heat of combustion because it is virtually strain-free."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q14_torsional_strain_definition",
    "topic": "Ring Strain & Heats of Combustion",
    "difficulty_level": "Easy",
    "question_text": "What type of strain is defined as the destabilization caused by the eclipsing of C-H or C-C bonds on adjacent carbon atoms?",
    "question_smiles": "C1CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Torsional strain",
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
        "text": "Steric strain",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Transannular strain",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the definition and physical origin of torsional strain.",
      "process": "Step 1: Review the three main components of ring strain: angle strain (deviation from ideal bond angles), torsional strain (eclipsing of bonds on adjacent carbons), and steric strain (spatial crowding of non-bonded atoms).\nStep 2: Identify the strain arising specifically from eclipsed bonds as torsional strain.",
      "result": "Torsional strain is the strain due to the eclipsing of adjacent bonds."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q15_baeyer_theory_flaw",
    "topic": "Ring Strain & Heats of Combustion",
    "difficulty_level": "Medium",
    "question_text": "Adolf von Baeyer proposed that cyclopentane would be the most stable cycloalkane because its internal angles (108°) are closest to the tetrahedral angle (109.5°). Why was his theory fundamentally flawed?",
    "question_smiles": "C1CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "He assumed that all cycloalkanes are planar.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "He did not know the tetrahedral angle of carbon.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "He overestimated the angle strain of cyclopropane.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "He failed to consider carbon-carbon double bonds.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question examines the historical development and limitations of Baeyer's strain theory.",
      "process": "Step 1: Recall Baeyer's hypothesis: Cycloalkanes are planar polygons.\nStep 2: Under this assumption, cyclopentane would have little angle strain, while cyclohexane (120°) and larger rings would have significant angle strain.\nStep 3: However, rings larger than cyclopropane pucker out of plane to relieve torsional strain, which Baeyer's planar model completely ignored.",
      "result": "The flaw in Baeyer's theory was the assumption that all rings are planar."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q16_heat_of_combustion_cis_trans",
    "topic": "Ring Strain & Heats of Combustion",
    "difficulty_level": "Hard",
    "question_text": "The heat of combustion of cis-1,2-dimethylcyclopropane is 3293 kJ/mol, while that of trans-1,2-dimethylcyclopropane is 3288 kJ/mol. What is the physical basis for this difference?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The cis-isomer possesses additional steric strain due to methyl-methyl repulsion on the same face.",
        "smiles": "C[C@@H]1C[C@@H]1C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The trans-isomer has additional angle strain because the methyl groups are opposite.",
        "smiles": "C[C@H]1C[C@@H]1C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The cis-isomer has lower torsional strain.",
        "smiles": "C[C@@H]1C[C@@H]1C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The trans-isomer experiences transannular strain.",
        "smiles": "C[C@H]1C[C@@H]1C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question relates thermodynamic properties (heat of combustion) to the relative steric stability of cis/trans stereoisomers.",
      "process": "Step 1: Identify that a higher heat of combustion means the starting compound is less stable (higher in energy).\nStep 2: The cis-isomer is 5 kJ/mol higher in energy than the trans-isomer.\nStep 3: This difference arises because the cis-isomer has two methyl groups pointing to the same face of the rigid cyclopropane ring, causing steric (van der Waals) repulsion. The trans-isomer keeps the methyl groups on opposite faces, minimizing steric clash.",
      "result": "The cis-isomer has a higher heat of combustion due to steric strain between the cis-methyl groups."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q17_cyclobutane_strain_breakdown",
    "topic": "Ring Strain & Heats of Combustion",
    "difficulty_level": "Medium",
    "question_text": "Which statement accurately describes the components of ring strain in cyclobutane?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "It puckers to decrease torsional strain, which slightly increases angle strain.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It is completely planar, which minimizes all angle strain.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It has no torsional strain because all C-H bonds are staggered.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It has less angle strain than cyclopentane.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the structural conformation of cyclobutane and how it balances different components of ring strain.",
      "process": "Step 1: If cyclobutane were planar, its internal C-C-C angles would be 90° and all 8 C-H bonds would be eclipsed.\nStep 2: To minimize this severe torsional strain, the molecule adopts a puckered (non-planar) conformation.\nStep 3: Puckering reduces the eclipsing of C-H bonds (dihedral angles become ~25°), but compresses the C-C-C angles to ~88°, which increases angle strain. The final shape is a thermodynamic compromise.",
      "result": "Cyclobutane puckers to trade off a significant reduction in torsional strain for a minor increase in angle strain."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q18_transannular_strain_concept",
    "topic": "Ring Strain & Heats of Combustion",
    "difficulty_level": "Hard",
    "question_text": "In medium-sized rings (such as cyclooctane or cyclononane), steric strain occurs due to crowding of hydrogen atoms pointing across the ring. What is the specific term for this strain?",
    "question_smiles": "C1CCCCCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Transannular strain",
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
        "text": "1,3-Diaxial strain",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Eclipsing strain",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests nomenclature of steric strain specific to medium-sized rings.",
      "process": "Step 1: Identify that medium rings (C8-C11) have conformations where hydrogen atoms on opposite sides of the ring are forced close to one another.\nStep 2: This steric interaction across a ring is defined as 'transannular' strain (literally 'across the ring').",
      "result": "The correct term is transannular strain."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q19_lowest_strain_among_options",
    "topic": "Ring Strain & Heats of Combustion",
    "difficulty_level": "Medium",
    "question_text": "Which of the following cycloalkanes has the lowest total ring strain?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclohexane",
        "smiles": "C1CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclooctane",
        "smiles": "C1CCCCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclodecane",
        "smiles": "C1CCCCCCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclopropane",
        "smiles": "C1CC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests relative stabilities across a wide range of ring sizes.",
      "process": "Step 1: Check total ring strain values: Cyclopropane (~115 kJ/mol), Cyclooctane (~41 kJ/mol), Cyclodecane (~50 kJ/mol), Cyclohexane (~0 kJ/mol).\nStep 2: Cyclohexane's chair conformation is exceptionally stable and strain-free. Larger rings cannot achieve complete freedom from strain because of transannular steric interactions.",
      "result": "Cyclohexane has the lowest total ring strain."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q20_cyclopropane_ring_opening",
    "topic": "Ring Strain & Heats of Combustion",
    "difficulty_level": "Hard",
    "question_text": "Cyclopropane reacts with H2 in the presence of a Pd/C catalyst at 80 °C to yield propane, whereas cyclohexane remains unreactive under these conditions. What drives this difference in chemical reactivity?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The high ring strain of cyclopropane (~115 kJ/mol) makes the ring-opening reaction thermodynamically very favorable.",
        "smiles": "C1CC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclopropane is an unsaturated hydrocarbon containing bent double bonds.",
        "smiles": "C1CC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclohexane has more steric hindrance, preventing the Pd catalyst from coordinating.",
        "smiles": "C1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The C-C bonds in cyclopropane are weaker because the carbon atoms are sp2-hybridized.",
        "smiles": "C1CC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question relates physical ring strain to chemical reactivity and ring-opening reactions.",
      "process": "Step 1: Recognize that the C-C bonds in cyclopropane are weak and under immense angle strain (60° compared to the tetrahedral 109.5°).\nStep 2: Ring opening releases this 115 kJ/mol of strain energy, acting as a powerful thermodynamic driving force.\nStep 3: Cyclohexane lacks ring strain, so there is no thermodynamic driving force for it to undergo ring-opening hydrogenation under mild conditions.",
      "result": "The high ring strain in cyclopropane drives its ring-opening reactivity."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q21_banana_bonds_cyclopropane",
    "topic": "Conformations of Small Rings",
    "difficulty_level": "Medium",
    "question_text": "The carbon-carbon bonds in cyclopropane are often described as 'bent' or 'banana' bonds. What is the physical cause of this description?",
    "question_smiles": "C1CC1",
    "options": [
      {
        "option_id": "A",
        "text": "The sp3 hybrid orbitals cannot point directly at each other, resulting in less effective, non-linear overlap.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The carbon atoms undergo sp2 hybridization to form pi-like bonds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The hydrogen atoms push the C-C bonds inward via steric repulsion.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The bonds are bent to accommodate the ring flip of cyclopropane.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the molecular orbital description of the C-C bonds in cyclopropane.",
      "process": "Step 1: In a regular equilateral triangle, the C-C-C angles are 60°.\nStep 2: If the sp3 orbitals pointed directly at each other, the angle would have to be 109.5°.\nStep 3: The orbitals instead compromise: they point outward at a larger angle (~104°), overlap at an angle, and create 'bent bonds' that are weaker and have more p-character than normal sp3-sp3 sigma bonds.",
      "result": "Bent bonds result from the inability of hybrid orbitals to overlap directly along the internuclear axis."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q22_hybridization_cyclopropane",
    "topic": "Conformations of Small Rings",
    "difficulty_level": "Hard",
    "question_text": "Which statement best describes the hybridization and bonding character of carbon in cyclopropane?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The carbons are sp3 hybridized, but the C-C bonds have increased p-character while the C-H bonds have increased s-character.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The carbons are sp2 hybridized, leaving a perpendicular unhybridized p-orbital on each carbon.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The carbons are sp3 hybridized, and all orbital overlaps are identical to those in propane.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The C-C bonds are pure p-p overlaps, while C-H bonds are sp2 hybrid overlaps.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests advanced orbital details of strained rings.",
      "process": "Step 1: In cyclopropane, the C-C bonds are bent, requiring orbital overlap that utilizes orbitals with greater p-character (close to sp3.5 or sp4) to allow for bending.\nStep 2: Because the carbon uses more p-character for C-C bonding, the remaining orbitals used for C-H bonding must have greater s-character (close to sp2.5).\nStep 3: This explains why C-H bonds in cyclopropane are shorter and more acidic than those in acyclic alkanes.",
      "result": "Cyclopropane carbons use orbitals with more p-character for C-C bonds and more s-character for C-H bonds."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q23_cyclobutane_dihedral_angle",
    "topic": "Conformations of Small Rings",
    "difficulty_level": "Medium",
    "question_text": "In its most stable puckered conformation, cyclobutane adopts a non-planar structure. What is the approximate dihedral angle (pucker angle) of the ring?",
    "question_smiles": "C1CCC1",
    "options": [
      {
        "option_id": "A",
        "text": "25 degrees",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "0 degrees",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "45 degrees",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "60 degrees",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests quantitative details of cyclobutane's puckered conformation.",
      "process": "Step 1: In a planar cyclobutane, the dihedral angle is 0°.\nStep 2: When cyclobutane puckers, one carbon is bent out of the plane of the other three by about 25°.\nStep 3: This value represents the optimal balance between minimizing torsional strain and keeping angle strain manageable.",
      "result": "The dihedral angle of puckered cyclobutane is approximately 25°."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q24_cyclopentane_envelope",
    "topic": "Conformations of Small Rings",
    "difficulty_level": "Medium",
    "question_text": "Which of the following descriptions accurately depicts the envelope conformation of cyclopentane?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Four carbon atoms are coplanar, and one carbon atom is bent out of the plane.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Three carbon atoms are coplanar, and two adjacent carbon atoms are bent in opposite directions.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "All five carbon atoms lie in a single plane, but the bonds are bent.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Five carbon atoms form a chair-like conformation with axial and equatorial positions.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the geometric description of the envelope conformation of cyclopentane.",
      "process": "Step 1: Planar cyclopentane has internal angles of 108° (very close to 109.5°), but suffers from severe torsional strain because all 10 hydrogens are eclipsed.\nStep 2: To relieve this, it puckers into the 'envelope' conformation.\nStep 3: In the envelope conformation, four carbons form a plane, and the fifth carbon is out of that plane, resembling the flap of an envelope. This reduces eclipsing of C-H bonds.",
      "result": "The envelope conformation consists of four coplanar carbons and one out-of-plane carbon."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q25_cyclobutane_bond_angles",
    "topic": "Conformations of Small Rings",
    "difficulty_level": "Hard",
    "question_text": "Why are the internal C-C-C bond angles in the puckered conformation of cyclobutane (~88°) smaller than those in a planar cyclobutane (90°)?",
    "question_smiles": "C1CCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Puckering the ring pulls the bridgehead carbons closer, sacrificing angle strain to minimize torsional strain.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The sp3 orbitals are compressed by transannular hydrogen interactions.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The ring carbon atoms undergo sp-hybridization.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Angle strain is minimized when the internal angle is exactly 88 degrees.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question addresses the energetic trade-off between angle strain and torsional strain in cyclobutane.",
      "process": "Step 1: Start with a flat square (planar cyclobutane, angles = 90°).\nStep 2: Bend one corner out of plane. The internal angles must decrease slightly to maintain C-C bond lengths (compressing to ~88°).\nStep 3: This compression increases angle strain. However, the non-planar dihedral angle of ~25° staggers the adjacent C-H bonds, significantly lowering torsional strain. The system lowers its overall free energy.",
      "result": "The C-C-C angles are smaller than 90° because the system trades increased angle strain for a larger reduction in torsional strain."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q26_cyclopentane_planar_vs_envelope",
    "topic": "Conformations of Small Rings",
    "difficulty_level": "Medium",
    "question_text": "If cyclopentane were to adopt a perfectly planar conformation, which type of strain would be at its maximum?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Torsional strain",
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
        "text": "Steric strain",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Transannular strain",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the primary source of instability in a planar cyclopentane model.",
      "process": "Step 1: A planar cyclopentane has internal C-C-C angles of 108°, which is extremely close to the ideal 109.5° tetrahedral angle. Therefore, angle strain is virtually zero in the planar form.\nStep 2: However, planarity forces all 5 C-C bonds to be fully eclipsed, resulting in 10 pairs of eclipsing H-H interactions.\nStep 3: This creates a large amount of torsional strain (~40 kJ/mol), which forces the ring to pucker.",
      "result": "Torsional strain would be at its maximum in a planar cyclopentane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q27_cyclopentane_eclipsing_pairs",
    "topic": "Conformations of Small Rings",
    "difficulty_level": "Hard",
    "question_text": "How many individual pairs of eclipsing C-H bond interactions would exist in a hypothetically planar conformation of cyclopentane?",
    "question_smiles": "C1CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "10 pairs",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "5 pairs",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "8 pairs",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "20 pairs",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question quantitative analyzes eclipsing interactions in a flat cyclopentane model.",
      "process": "Step 1: Cyclopentane has 5 C-C bonds.\nStep 2: Across each C-C bond, if the ring is flat, the two hydrogens on the front carbon eclipse the two hydrogens on the back carbon.\nStep 3: This results in 2 eclipsing H-H interactions per C-C bond.\nStep 4: Total interactions = 5 bonds * 2 interactions/bond = 10 pairs.",
      "result": "There are 10 pairs of eclipsing C-H interactions in planar cyclopentane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q28_cyclopropane_dihedral_angle",
    "topic": "Conformations of Small Rings",
    "difficulty_level": "Easy",
    "question_text": "Why are all C-H bonds in cyclopropane fully eclipsed (dihedral angle of approximately 0 degrees)?",
    "question_smiles": "C1CC1",
    "options": [
      {
        "option_id": "A",
        "text": "The ring is geometrically constrained to be planar because three points define a plane.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The bent C-C bonds force the C-H bonds to align to maximize orbital overlap.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The hydrogens are hydrogen-bonded to each other across the ring.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A ring flip in cyclopropane dynamically eclipses the C-H bonds.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the geometric constraint of the three-membered ring.",
      "process": "Step 1: Any three points in space define a flat plane. Therefore, the three carbon atoms of cyclopropane must lie in a single plane.\nStep 2: In a planar system, all substituents on adjacent carbons are locked in an eclipsed conformation.\nStep 3: Consequently, cyclopropane cannot pucker to relieve torsional strain, locking its dihedral angles at 0°.",
      "result": "The planar constraint of a three-carbon ring makes eclipsing unavoidable."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q29_cyclohexane_conformations_stability",
    "topic": "Cyclohexane Conformations",
    "difficulty_level": "Easy",
    "question_text": "Which of the following correctly ranks the conformations of cyclohexane in order of decreasing stability (most stable first)?",
    "question_smiles": "C1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Chair > Twist-boat > Boat > Half-chair",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Chair > Boat > Twist-boat > Half-chair",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Twist-boat > Chair > Boat > Half-chair",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Chair > Twist-boat > Half-chair > Boat",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the energy hierarchy of cyclohexane's conformations.",
      "process": "Step 1: Recall the relative energies of cyclohexane conformations:\n- Chair: 0 kJ/mol (global minimum)\n- Twist-boat: ~23 kJ/mol (local minimum)\n- Boat: ~29 kJ/mol (transition state/local maximum)\n- Half-chair: ~45 kJ/mol (global maximum)\nStep 2: Arrange in order of decreasing stability (lowest energy to highest energy): Chair > Twist-boat > Boat > Half-chair.",
      "result": "The correct order is Chair > Twist-boat > Boat > Half-chair."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q30_twist_boat_vs_boat_energy",
    "topic": "Cyclohexane Conformations",
    "difficulty_level": "Medium",
    "question_text": "The twist-boat conformation of cyclohexane is approximately 6 kJ/mol (1.4 kcal/mol) lower in energy than the boat conformation. What accounts for this stabilization?",
    "question_smiles": "C1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "The twist-boat reduces flagpole steric interactions and relieves eclipsing torsional strain.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The twist-boat has perfectly planar C-C bonds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The twist-boat increases angle strain to achieve a staggered arrangement.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The twist-boat is stabilized by transannular hydrogen bonding.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question examines the conformational differences between the boat and twist-boat structures.",
      "process": "Step 1: Identify sources of strain in the boat conformation: 1) Eclipsing C-H bonds along the sides of the boat. 2) Flagpole steric interactions between the C1 and C4 hydrogens pointing inward.\nStep 2: When the boat twists to form the twist-boat conformation, the C1 and C4 hydrogens move away from each other, reducing flagpole strain.\nStep 3: Additionally, twisting staggers the side C-H bonds, reducing torsional strain. This lowers the energy by ~6 kJ/mol.",
      "result": "The twist-boat is more stable because it relieves both flagpole steric interactions and eclipsing torsional strain."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q31_flagpole_interaction_positions",
    "topic": "Cyclohexane Conformations",
    "difficulty_level": "Easy",
    "question_text": "In the boat conformation of cyclohexane, which carbon atoms bear the hydrogens that participate in the destabilizing 'flagpole' steric interaction?",
    "question_smiles": "C1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "C1 and C4",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "C1 and C2",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "C1 and C3",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "C2 and C5",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question identifies the specific atoms involved in flagpole interactions.",
      "process": "Step 1: Visualize the boat conformation of cyclohexane.\nStep 2: The 'bow' and 'stern' of the boat are C1 and C4, which point upward.\nStep 3: The hydrogens attached to C1 and C4 that point inward towards each other are forced within their van der Waals radii, creating steric clash. These are the flagpole hydrogens.",
      "result": "The flagpole interaction occurs between hydrogens at C1 and C4."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q32_half_chair_transition_state",
    "topic": "Cyclohexane Conformations",
    "difficulty_level": "Hard",
    "question_text": "What is the energy barrier (activation energy) required for a chair conformation of cyclohexane to undergo a ring flip to the other chair conformation?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Approximately 45 kJ/mol (10.8 kcal/mol)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Approximately 23 kJ/mol (5.5 kcal/mol)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Approximately 6 kJ/mol (1.4 kcal/mol)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Approximately 80 kJ/mol (19.1 kcal/mol)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the quantitative energy barrier of the cyclohexane ring flip.",
      "process": "Step 1: The ring flip from one chair to the other is a multi-step conformational equilibrium.\nStep 2: The highest-energy point on the potential energy diagram is the half-chair conformation, which is a transition state.\nStep 3: The energy of the half-chair is 45 kJ/mol above the chair conformation, representing the activation energy barrier for the ring-flipping process.",
      "result": "The activation energy barrier is approximately 45 kJ/mol."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q33_zero_torsional_strain_cyclohexane",
    "topic": "Cyclohexane Conformations",
    "difficulty_level": "Medium",
    "question_text": "Why does the chair conformation of cyclohexane have virtually zero torsional strain?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "All adjacent C-H bonds are staggered with dihedral angles of approximately 60 degrees.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The ring is planar, allowing the bonds to spread out.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The C-C-C bond angles are compressed to exactly 90 degrees.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The axial and equatorial positions undergo rapid degenerate exchange.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the conformational basis for cyclohexane's stability.",
      "process": "Step 1: Look down any C-C bond of a chair cyclohexane in a Newman projection.\nStep 2: Observe that all C-H and C-C bonds on adjacent carbons are perfectly staggered.\nStep 3: Staggered bonds have dihedral angles of 60° (gauche or anti), which minimizes electron-electron repulsion between bond orbitals, resulting in zero torsional strain.",
      "result": "Staggered C-H bonds with 60° dihedral angles eliminate torsional strain."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q34_ring_flip_conformations_path",
    "topic": "Cyclohexane Conformations",
    "difficulty_level": "Hard",
    "question_text": "Trace the step-by-step pathway that a cyclohexane molecule undergoes during a complete ring flip from one chair to the other. Which sequence correctly lists the intermediates and transition states in order of appearance?",
    "question_smiles": "C1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Chair -> Half-Chair -> Twist-Boat -> Boat -> Twist-Boat -> Half-Chair -> Chair",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Chair -> Boat -> Half-Chair -> Twist-Boat -> Half-Chair -> Boat -> Chair",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Chair -> Twist-Boat -> Half-Chair -> Boat -> Half-Chair -> Twist-Boat -> Chair",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Chair -> Half-Chair -> Boat -> Twist-Boat -> Boat -> Half-Chair -> Chair",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the dynamic path of a ring flip and its energy coordinates.",
      "process": "Step 1: Starting at the chair, bending one carbon up yields the high-energy transition state, the half-chair.\nStep 2: The half-chair relaxes into a local minimum, the twist-boat.\nStep 3: Bending the other end up yields the boat conformation (a transition state between two twist-boats).\nStep 4: The boat twists to the other twist-boat, which then passes through a second half-chair transition state to relax into the flipped chair.",
      "result": "The correct sequence is Chair -> Half-Chair -> Twist-Boat -> Boat -> Twist-Boat -> Half-Chair -> Chair."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q35_cyclohexane_angle_strain",
    "topic": "Cyclohexane Conformations",
    "difficulty_level": "Medium",
    "question_text": "The C-C-C bond angles in the chair conformation of cyclohexane are measured to be 111.5°. Why does this not cause significant angle strain?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "It is extremely close to the ideal tetrahedral angle of 109.5 degrees, causing negligible strain.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The carbon atoms are sp2-hybridized, making 111.5 degrees very stable.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The angle strain is offset by a strong intramolecular hydrogen bond.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The bond angles are dynamic and average to exactly 90 degrees over time.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the relationship between bond angle deviation and angle strain in cyclohexane.",
      "process": "Step 1: The ideal tetrahedral bond angle for sp3-hybridized carbon is 109.5°.\nStep 2: In chair cyclohexane, the angle is 111.5°, representing a deviation of only 2°.\nStep 3: This minor deviation results in a virtually undetectable amount of angle strain (< 1 kJ/mol), which is why cyclohexane is considered essentially free of angle strain.",
      "result": "An angle of 111.5° is close enough to 109.5° to result in negligible angle strain."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q36_ring_flip_substituent_behavior",
    "topic": "Monosubstituted Cyclohexanes",
    "difficulty_level": "Easy",
    "question_text": "When methylcyclohexane undergoes a ring flip, what is the spatial fate of the methyl group?",
    "question_smiles": "CC1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "An equatorial methyl group becomes axial, but remains on the same face (up/down) of the ring.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "An equatorial methyl group becomes axial and switches from the top face to the bottom face.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "An equatorial methyl group remains equatorial, but changes its carbon location.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The methyl group detaches and reattaches on the opposite face.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the structural consequences of a chair-chair interconversion (ring flip) on substituents.",
      "process": "Step 1: Define the ring flip. A ring flip converts all axial positions to equatorial and all equatorial positions to axial.\nStep 2: Observe the face of the ring. If a substituent is 'up' (pointing above the average plane of the ring), it must remain 'up' after the flip.\nStep 3: Therefore, an 'up-equatorial' substituent becomes 'up-axial', and a 'down-equatorial' substituent becomes 'down-axial'. The relative face (up/down) is conserved.",
      "result": "The substituent changes from equatorial to axial (or vice versa) but stays on the same face of the ring."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q37_a_value_definition",
    "topic": "Monosubstituted Cyclohexanes",
    "difficulty_level": "Medium",
    "question_text": "The A-value of a substituent on a cyclohexane ring represents the free energy difference (delta G) between the axial and equatorial conformations. What is the thermodynamic sign and meaning of a positive A-value (+delta G for equatorial to axial)?",
    "question_smiles": "CC1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "The equatorial conformation is lower in energy and thermodynamically favored.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The axial conformation is lower in energy and thermodynamically favored.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The two conformations have identical energy and exist in a 1:1 equilibrium.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The transition state between the conformations is extremely stable.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the thermodynamic definition and sign convention of A-values.",
      "process": "Step 1: A-values are defined as the free energy difference: A-value = G_axial - G_equatorial.\nStep 2: Because placing a group in the equatorial position avoids 1,3-diaxial interactions, G_equatorial is lower than G_axial.\nStep 3: Therefore, G_axial - G_equatorial is positive. A positive A-value means the equatorial conformation is more stable (lower in energy) than the axial conformation.",
      "result": "A positive A-value indicates that the equatorial conformation is more stable."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q38_equilibrium_calculation",
    "topic": "Monosubstituted Cyclohexanes",
    "difficulty_level": "Hard",
    "question_text": "Given that the A-value of a methyl group is 7.3 kJ/mol at 298 K, calculate the approximate ratio of equatorial to axial conformations at equilibrium. (R = 8.314 J/(mol*K))",
    "question_smiles": "CC1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "95 : 5 (19:1 ratio)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "50 : 50 (1:1 ratio)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "75 : 25 (3:1 ratio)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "99.9 : 0.1 (1000:1 ratio)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question applies the thermodynamic equation delta G = -RT * ln(K) to calculate the equilibrium ratio of cyclohexane chair conformers.",
      "process": "Step 1: Identify the values: delta G° (axial -> equatorial) = -7300 J/mol. Temperature T = 298 K. R = 8.314 J/(mol*K).\nStep 2: Set up the equation: K = exp(-delta G° / RT) = exp(7300 / (8.314 * 298)).\nStep 3: Calculate the exponent: 7300 / 2477.57 = 2.946.\nStep 4: Calculate K: K = exp(2.946) ≈ 19.0.\nStep 5: The ratio is 19:1 equatorial:axial. Expressed as percentages: 19/(19+1) = 95% equatorial, 5% axial.",
      "result": "The equilibrium ratio is approximately 95% equatorial to 5% axial."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q39_largest_a_value",
    "topic": "Monosubstituted Cyclohexanes",
    "difficulty_level": "Medium",
    "question_text": "Which of the following substituents has the largest A-value (greatest preference for the equatorial position)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "tert-Butyl, -C(CH3)3",
        "smiles": "CC(C)(C)C1CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methyl, -CH3",
        "smiles": "CC1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Halogen, -Br",
        "smiles": "BrC1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyano, -CN",
        "smiles": "N#CC1CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the relative steric bulk (A-values) of common organic substituents.",
      "process": "Step 1: Review the A-values (in kJ/mol):\n- tert-Butyl: ~21 kJ/mol (extremely large steric demand)\n- Methyl: ~7.3 kJ/mol\n- Bromine: ~2.0 kJ/mol\n- Cyano: ~0.8 kJ/mol\nStep 2: The tert-butyl group is so bulky that its axial conformation experiences severe steric clash with C3 and C5 axial hydrogens, locking it almost exclusively in the equatorial position.",
      "result": "The tert-butyl group has the largest A-value."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q40_gauche_butane_equivalence",
    "topic": "Monosubstituted Cyclohexanes",
    "difficulty_level": "Hard",
    "question_text": "An axial methyl group in methylcyclohexane participates in two 1,3-diaxial interactions. These interactions are sterically equivalent to which conformation of butane?",
    "question_smiles": "CC1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Two gauche-butane interactions",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Two anti-butane interactions",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "One eclipsed butane interaction",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "One gauche and one anti interaction",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question correlates the steric strain in cyclohexane chairs to acyclic alkane conformations (butane).",
      "process": "Step 1: Trace the carbon path in axial methylcyclohexane. The methyl carbon (C_methyl), C1, C2, and C3 form a four-carbon butane unit.\nStep 2: In the axial conformation, the dihedral angle between C_methyl and C3 is 60°, which matches a gauche relationship in butane (3.8 kJ/mol of strain).\nStep 3: Trace the other pathway: C_methyl, C1, C6, and C5 also form a butane unit with a 60° dihedral angle (another gauche interaction).\nStep 4: Thus, the axial methyl group is destabilized by two gauche-butane interactions (2 * 3.8 kJ/mol = 7.6 kJ/mol, which is very close to the measured A-value of 7.3 kJ/mol).",
      "result": "An axial methyl group experiences steric strain equivalent to two gauche-butane interactions."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q41_cyano_small_a_value",
    "topic": "Monosubstituted Cyclohexanes",
    "difficulty_level": "Hard",
    "question_text": "Despite containing two atoms, the cyano group (-CN) has an exceptionally small A-value of 0.8 kJ/mol (0.2 kcal/mol). What is the molecular explanation for this low value?",
    "question_smiles": "N#CC1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "The cyano group is linear and points straight up and away from the ring, minimizing steric clash with C3/C5 axial hydrogens.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The nitrogen atom forms a hydrogen bond with the axial C3 hydrogen.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The cyano group undergoes a rapid chemical reaction with the solvent.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The sp-hybridized carbon has no steric radius.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the impact of substituent geometry (hybridization and shape) on steric strain in chair conformations.",
      "process": "Step 1: Consider the structure of the cyano group: -C≡N. Both the carbon and nitrogen are sp-hybridized.\nStep 2: This hybridization dictates a linear geometry (180° bond angle).\nStep 3: When in the axial position, the cyano group is oriented vertically, pointing straight away from the ring. This narrow, linear shape prevents it from projecting over the ring toward the C3 and C5 axial hydrogens, resulting in very little steric clash.",
      "result": "The linear geometry of the cyano group minimizes 1,3-diaxial interactions, resulting in a very low A-value."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q42_halogen_a_value_trend",
    "topic": "Monosubstituted Cyclohexanes",
    "difficulty_level": "Hard",
    "question_text": "The A-values for the halogens are relatively small and do not vary significantly: F (0.25 kcal/mol), Cl (0.52 kcal/mol), Br (0.55 kcal/mol), I (0.46 kcal/mol). Why does iodine have a smaller A-value than chlorine or bromine, despite being much larger?",
    "question_smiles": "IC1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "The C-I bond length is significantly longer, placing the iodine atom further away from the C3/C5 axial hydrogens.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Iodine is highly polarizable and forms attractive London dispersion forces with the ring.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Iodine is less electronegative and does not repel the electron density of the C-H bonds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The C-I bond is unstable and undergoes rapid homolytic cleavage.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question addresses the counter-intuitive trend in halogen A-values by looking at bond length effects.",
      "process": "Step 1: Identify two competing factors as you go down Group 17: atomic radius increases (increases steric size), and C-X bond length increases (moves the atom further from the ring).\nStep 2: From Cl to Br to I, the bond length increases significantly (C-Cl = 1.78 Å, C-Br = 1.93 Å, C-I = 2.14 Å).\nStep 3: The longer C-I bond places the bulky iodine atom far enough away from the axial hydrogens on C3 and C5 to decrease the steric overlap, resulting in a slightly lower A-value for iodine than for chlorine or bromine.",
      "result": "The longer C-I bond length projects the iodine atom further away from the ring, reducing steric clash."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q43_trans_12_dimethyl_chair",
    "topic": "Disubstituted Cyclohexanes",
    "difficulty_level": "Medium",
    "question_text": "For trans-1,2-dimethylcyclohexane, what are the spatial orientations of the two methyl groups in the most stable chair conformation?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Both methyl groups are equatorial (diequatorial).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Both methyl groups are axial (diaxial).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "One methyl group is axial and the other is equatorial.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "One methyl group is axial and the other is in a flagpole position.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests conformational analysis of trans-1,2-disubstituted cyclohexanes.",
      "process": "Step 1: Understand that 'trans' means the two substituents point to opposite faces of the ring (one up, one down).\nStep 2: On adjacent carbons (1,2-relationship), the orientations are:\n- C1: up is axial, down is equatorial.\n- C2: up is equatorial, down is axial.\nStep 3: Thus, trans can be achieved by having either both groups axial (C1 up-axial, C2 down-axial) OR both groups equatorial (C1 down-equatorial, C2 up-equatorial).\nStep 4: The diequatorial conformation avoids all 1,3-diaxial interactions and is much more stable than the diaxial conformation.",
      "result": "The most stable chair conformation has both methyl groups in equatorial positions."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q44_cis_12_dimethyl_chair",
    "topic": "Disubstituted Cyclohexanes",
    "difficulty_level": "Medium",
    "question_text": "Which statement correctly describes the chair conformations of cis-1,2-dimethylcyclohexane?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Both chair conformations have one axial methyl group and one equatorial methyl group, and are equal in energy.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The most stable chair conformation has both methyl groups equatorial.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The most stable chair conformation has both methyl groups axial.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "One chair conformation is diequatorial and is more stable than the other which is diaxial.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question evaluates the chair conformations of cis-1,2-disubstituted cyclohexanes.",
      "process": "Step 1: 'cis' means both groups point to the same face of the ring (both up or both down).\nStep 2: On adjacent carbons (1,2-relationship):\n- If both are up: C1 is up-axial, C2 is up-equatorial (axial-equatorial).\n- If both are down: C1 is down-equatorial, C2 is down-axial (equatorial-axial).\nStep 3: A ring flip converts one axial-equatorial chair into another equatorial-axial chair. Because both contain exactly one axial and one equatorial methyl group, the two conformations are degenerate (equal in energy).",
      "result": "Both chair conformations of cis-1,2-dimethylcyclohexane are axial-equatorial and equal in energy."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q45_meso_dimethylcyclohexane",
    "topic": "Disubstituted Cyclohexanes",
    "difficulty_level": "Hard",
    "question_text": "Which of the following dimethylcyclohexane isomers contains chiral centers but possesses a plane of symmetry, making the overall molecule achiral (meso)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "cis-1,2-Dimethylcyclohexane",
        "smiles": "C[C@H]1CCCC[C@@H]1C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "trans-1,2-Dimethylcyclohexane",
        "smiles": "C[C@@H]1CCCC[C@@H]1C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "trans-1,3-Dimethylcyclohexane",
        "smiles": "C[C@@H]1CC[C@H](C)CC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "trans-1,4-Dimethylcyclohexane",
        "smiles": "C1CC[C@H](C)CC[C@@H]1C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the relationship between stereochemical configuration and symmetry in disubstituted cyclohexanes.",
      "process": "Step 1: Examine the flat representation of cis-1,2-dimethylcyclohexane. A plane of symmetry bisects the C1-C2 bond and C4-C5 bond.\nStep 2: Because it has a plane of symmetry in its planar representation, the molecule is achiral overall (meso).\nStep 3: Note: While individual chair conformations are chiral and enantiomeric to each other, they interconvert via a ring flip so rapidly at room temperature that the compound behaves as an optically inactive meso mixture.",
      "result": "cis-1,2-Dimethylcyclohexane is a meso compound."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q46_cis_13_dimethyl_chair",
    "topic": "Disubstituted Cyclohexanes",
    "difficulty_level": "Medium",
    "question_text": "For cis-1,3-dimethylcyclohexane, what are the positions of the two methyl groups in the most stable chair conformation?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Both methyl groups are equatorial (diequatorial).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Both methyl groups are axial (diaxial).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "One methyl group is axial and the other is equatorial.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "One methyl group is equatorial and the other is in a twist-boat conformation.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests conformational analysis of cis-1,3-disubstituted cyclohexanes.",
      "process": "Step 1: 'cis' means both groups point to the same face (both up or both down).\nStep 2: On C1 and C3:\n- C1: up is axial, down is equatorial.\n- C3: up is axial, down is equatorial.\nStep 3: If both are up, the conformation is diaxial. If both are down, the conformation is diequatorial.\nStep 4: The diequatorial conformation has no 1,3-diaxial interactions and is highly stable, making it the dominant conformation at equilibrium.",
      "result": "The most stable chair conformation of cis-1,3-dimethylcyclohexane has both methyl groups equatorial."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q47_trans_14_dimethyl_energy_diff",
    "topic": "Disubstituted Cyclohexanes",
    "difficulty_level": "Hard",
    "question_text": "What is the energy difference between the two chair conformations of trans-1,4-dimethylcyclohexane? (Assume each H-methyl 1,3-diaxial interaction costs 3.8 kJ/mol or 0.9 kcal/mol).",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "15.2 kJ/mol (3.6 kcal/mol)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "7.6 kJ/mol (1.8 kcal/mol)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "0 kJ/mol (degenerate conformations)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "11.4 kJ/mol (2.7 kcal/mol)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the quantitative calculation of energy differences between two chair conformations of a disubstituted cyclohexane.",
      "process": "Step 1: Draw the two conformations of trans-1,4-dimethylcyclohexane. One chair has both methyls equatorial (diequatorial), and the other has both methyls axial (diaxial).\nStep 2: The diequatorial conformation has 0 kJ/mol of steric strain from the methyls.\nStep 3: The diaxial conformation has two axial methyl groups. Each axial methyl group has two 1,3-diaxial H-methyl interactions.\nStep 4: Total interactions in the diaxial conformer = 4 H-methyl interactions.\nStep 5: Energy cost = 4 * 3.8 kJ/mol = 15.2 kJ/mol (or 4 * 0.9 kcal/mol = 3.6 kcal/mol). Since the diequatorial conformation is 0 kJ/mol, the energy difference is 15.2 kJ/mol.",
      "result": "The energy difference between the two chairs is 15.2 kJ/mol (3.6 kcal/mol)."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q48_trans_1_tertbutyl_3_methyl",
    "topic": "Polysubstituted Cyclohexanes",
    "difficulty_level": "Hard",
    "question_text": "Identify the most stable chair conformation for trans-1-tert-butyl-3-methylcyclohexane.",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The tert-butyl group is equatorial and the methyl group is axial.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The tert-butyl group is axial and the methyl group is equatorial.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both the tert-butyl and methyl groups are equatorial.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both the tert-butyl and methyl groups are axial.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the thermodynamic control of chair conformation stability when two different-sized groups compete.",
      "process": "Step 1: 'trans' 1,3-relationship means one substituent is 'up' and one is 'down'.\nStep 2: On C1 and C3, one position is axial and the other is equatorial for any trans-1,3 layout:\n- Conformation A: C1 (tert-butyl) is equatorial (down), C3 (methyl) is axial (up).\n- Conformation B: C1 (tert-butyl) is axial (down), C3 (methyl) is equatorial (up).\nStep 3: Compare A-values: tert-butyl = 21 kJ/mol, methyl = 7.3 kJ/mol.\nStep 4: Because the A-value of tert-butyl is much larger, the conformation keeping tert-butyl equatorial (Conformation A) is highly favored, forcing the smaller methyl group into the axial position.",
      "result": "The most stable conformation has the bulky tert-butyl group equatorial and the methyl group axial."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q49_cis_1_isopropyl_4_methyl",
    "topic": "Polysubstituted Cyclohexanes",
    "difficulty_level": "Medium",
    "question_text": "Determine the orientation of substituents in the more stable chair conformation of cis-1-isopropyl-4-methylcyclohexane.",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The isopropyl group is equatorial and the methyl group is axial.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The isopropyl group is axial and the methyl group is equatorial.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both substituents are equatorial.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both substituents are axial.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question addresses the conformation of a cis-1,4-disubstituted cyclohexane with two different alkyl groups.",
      "process": "Step 1: 'cis' 1,4-relationship means both groups are on the same face (both up or both down).\nStep 2: On C1 and C4, one position must be axial and the other equatorial in a cis relationship:\n- Chair 1: C1 (isopropyl) is equatorial, C4 (methyl) is axial.\n- Chair 2: C1 (isopropyl) is axial, C4 (methyl) is equatorial.\nStep 3: Compare A-values: isopropyl (~8.8 kJ/mol) > methyl (~7.3 kJ/mol).\nStep 4: To minimize energy, the group with the larger A-value (isopropyl) is placed in the equatorial position, which forces the smaller group (methyl) to be axial.",
      "result": "The more stable conformation places the larger isopropyl group in the equatorial position and the methyl group in the axial position."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q50_menthol_conformation",
    "topic": "Polysubstituted Cyclohexanes",
    "difficulty_level": "Hard",
    "question_text": "Menthol, (1R,2S,5R)-2-isopropyl-5-methylcyclohexanol, is a natural product with three substituents on a cyclohexane ring. In its most stable chair conformation, what are the spatial orientations of the isopropyl, methyl, and hydroxyl groups?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "All three substituents are equatorial.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The isopropyl and methyl groups are equatorial, while the hydroxyl group is axial.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The isopropyl group is equatorial, while the methyl and hydroxyl groups are axial.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "All three substituents are axial.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question applies conformational analysis to a biologically important trisubstituted cyclohexane molecule.",
      "process": "Step 1: Analyze the structure of menthol. The cyclohexane ring has an -OH group at C1, an isopropyl group at C2, and a methyl group at C5.\nStep 2: Note the stereochemical relationships:\n- The -OH at C1 and the isopropyl at C2 are trans (trans-1,2).\n- The -OH at C1 and the methyl at C5 are trans (trans-1,3, which translates to C1-C5 cis? Let's check: C1-C2-C3-C4-C5 is a 1,3-relationship if we count C1 as 1, C5 as 3. In (1R,2S,5R)-menthol, the substituents are arranged such that all three can simultaneously occupy equatorial positions).\nStep 3: Let's verify: C1-OH (equatorial, e.g., down-equatorial). C2-isopropyl (trans to OH, so it must be up-equatorial). C5-methyl is trans to OH? If OH is down-equatorial, then C5 is C3 if numbering from C1 in opposite direction. Let's trace: C1 (down) -> C6 -> C5 (up is axial, down is equatorial). So if C5 is down, it is down-equatorial. Thus C1-OH (down) and C5-methyl (down) are cis.\nStep 4: Indeed, in this configuration, all three groups (hydroxyl, isopropyl, and methyl) can be equatorial at the same time, making this conformation exceptionally stable.",
      "result": "In its most stable chair conformation, all three substituents are in equatorial positions."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q_dynamic_chair_energy",
    "topic": "Cycloalkanes Conformational Analysis",
    "difficulty_level": "Hard",
    "question_text": "Consider the potential energy diagram of cyclohexane conformations during a ring flip. Match each point to its corresponding conformation.",
    "energy_diagram": {
      "points": [
        {
          "state": "Chair (lowest energy)",
          "energy": 0
        },
        {
          "state": "Half-Chair (highest energy transition)",
          "energy": 45
        },
        {
          "state": "Twist-Boat (local minimum)",
          "energy": 23
        },
        {
          "state": "Boat (local maximum transition)",
          "energy": 30
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Chair conformation is the most stable (0 kJ/mol), Half-Chair is the least stable transition state (45 kJ/mol), and Twist-Boat is a stable intermediate (23 kJ/mol).",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Boat conformation is more stable than Chair.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Half-chair is a stable intermediate state.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "All conformations have equal energy.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding cyclohexane ring-flip energetics.",
      "process": "Chair is the ground state. Half-chair requires severe angle and torsional strain (45 kJ/mol). Twist-boat relieves some eclipsing strain (23 kJ/mol). Boat is a transition state between twist-boats (30 kJ/mol).",
      "result": "Order of stability: Chair > Twist-Boat > Boat > Half-Chair."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q_dynamic_cis_trans_cyclo",
    "topic": "Cycloalkane Stereochemistry",
    "difficulty_level": "Medium",
    "question_text": "Match each cycloalkane configuration to its correct stereochemical description.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1[C@@H](C)C[C@@H](C)CC1",
        "correctAnswer": "cis-1,3-Dimethylcyclohexane"
      },
      {
        "smiles": "C1[C@@H](C)C[C@H](C)CC1",
        "correctAnswer": "trans-1,3-Dimethylcyclohexane"
      },
      {
        "smiles": "C1[C@@H](C)[C@@H](C)CCC1",
        "correctAnswer": "cis-1,2-Dimethylcyclohexane"
      },
      {
        "smiles": "C1[C@@H](C)[C@H](C)CCC1",
        "correctAnswer": "trans-1,2-Dimethylcyclohexane"
      }
    ],
    "match_options": [
      "cis-1,3-Dimethylcyclohexane",
      "trans-1,3-Dimethylcyclohexane",
      "cis-1,2-Dimethylcyclohexane",
      "trans-1,2-Dimethylcyclohexane",
      "1,1-Dimethylcyclohexane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect cis/trans mapping",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing cis/trans isomers in dimethylcyclohexanes.",
      "process": "Item 1 has both methyls on the same face (wedges/wedges) at 1,3 positions: cis. Item 2 has one wedge and one dash at 1,3: trans. Item 3 has both wedges at 1,2: cis. Item 4 has wedge/dash at 1,2: trans.",
      "result": "Cis/trans naming depends on whether substituents point to same or opposite faces."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  }
];
