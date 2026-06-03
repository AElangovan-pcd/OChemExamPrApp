// McMurry Chapter 19 questions
const CHAPTER_19_QUESTIONS = [
  {
    "question_id": "ch19_acs_q1_propyl_ethanoate",
    "topic": "ACS: Nomenclature",
    "difficulty_level": "Easy",
    "question_text": "What is the IUPAC name for this compound?",
    "question_smiles": "CC(=O)OCCC",
    "options": [
      {
        "option_id": "A",
        "text": "methyl butanoate",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "methyl propanoate",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "propyl methanoate",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "propyl ethanoate",
        "smiles": "",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Naming esters according to IUPAC rules, identifying the alcohol and carboxylic acid components.",
      "process": "Step 1: Identify the alkyl group attached to the oxygen atom, which is a propyl group (3 carbons).\nStep 2: Identify the acyl group, which is derived from ethanoic acid (2 carbons, including the carbonyl).\nStep 3: Combine the names, listing the alkyl group first followed by the carboxylate name: propyl ethanoate.",
      "result": "The correct name is propyl ethanoate."
    }
  },
  {
    "question_id": "ch19_acs_q2_pentenoic_acid",
    "topic": "ACS: Nomenclature",
    "difficulty_level": "Medium",
    "question_text": "What is the IUPAC name for this compound?",
    "question_smiles": "C/C=C/C(C)C(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "4-methyl-2-pentenoic acid",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "2-methyl-3-pentenoic acid",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "5-hydroxy-4-methyl-2-penten-5-one",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-hydroxy-2-methyl-3-penten-1-one",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Naming carboxylic acids containing an alkene group and substituents.",
      "process": "Step 1: Identify the principal functional group, which is the carboxylic acid (-COOH). It receives priority 1 in numbering, so C1 is the carbonyl carbon.\nStep 2: Find the longest chain containing both the acid and double bond (5 carbons: pent-3-enoic acid).\nStep 3: Identify the substituent at C2 (a methyl group).\nStep 4: Combine to get 2-methyl-3-pentenoic acid.",
      "result": "The correct name is 2-methyl-3-pentenoic acid."
    }
  },
  {
    "question_id": "ch19_acs_q3_benzylethanamide",
    "topic": "ACS: Nomenclature",
    "difficulty_level": "Medium",
    "question_text": "Which is the structure of N-benzylethanamide?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Structure A",
        "smiles": "CC(=O)NCC1=CC=CC=C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Structure B",
        "smiles": "CCNCC1=CC=CC=C1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Structure C",
        "smiles": "CCNC1=CC=CC=C1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Structure D",
        "smiles": "CC(=O)NC1=CC=CC=C1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identifying amide structures based on IUPAC nomenclature, specifically distinguishing between benzyl and phenyl substituents on nitrogen.",
      "process": "Step 1: The parent chain is ethanamide (CH3CONH2).\nStep 2: The prefix 'N-benzyl' indicates a benzyl group (C6H5CH2-) is attached to the nitrogen atom.\nStep 3: Structure A shows the acetyl group connected to an amide nitrogen, which is further attached to a benzyl group.",
      "result": "The correct structure is A (N-benzylethanamide)."
    }
  },
  {
    "question_id": "ch19_acs_q4_bicyclo",
    "topic": "ACS: Nomenclature",
    "difficulty_level": "Hard",
    "question_text": "Determine the correct IUPAC name for the bicyclic alkane shown below.",
    "question_smiles": "C1CC2CCC1C2",
    "options": [
      {
        "option_id": "A",
        "text": "bicyclo[2.2.1]heptane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "bicyclo[2.1.1]hexane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "bicyclo[3.2.0]heptane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "bicyclo[3.1.1]heptane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Naming bicyclic alkanes using the von Baeyer system.",
      "process": "Step 1: Identify the bridgehead carbon atoms.\nStep 2: Count the carbons in the three paths connecting the bridgehead carbons. The three paths have 2, 2, and 1 carbon, respectively.\nStep 3: Count the total number of carbon atoms in the bicyclic skeleton (7 carbons: heptane).\nStep 4: Arrange the path lengths in descending order inside brackets: [2.2.1] and prefix with 'bicyclo': bicyclo[2.2.1]heptane.",
      "result": "The correct IUPAC name is bicyclo[2.2.1]heptane."
    }
  },
  {
    "question_id": "ch19_acs_q5_pentene",
    "topic": "ACS: Nomenclature",
    "difficulty_level": "Medium",
    "question_text": "Assign the stereochemical configuration and name this alkene.",
    "question_smiles": "CC/C(=CC)/C",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-3-methyl-2-pentene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-3-methyl-2-pentene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)-2-methyl-2-pentene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(Z)-2-methyl-2-pentene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Applying Cahn-Ingold-Prelog (CIP) priority rules to assign E/Z configuration to double bonds.",
      "process": "Step 1: Assign priorities to groups on C2: methyl (priority 1) vs hydrogen (priority 2).\nStep 2: Assign priorities to groups on C3: ethyl (priority 1) vs methyl (priority 2).\nStep 3: The high-priority groups (ethyl on C3 and methyl on C2) are on opposite sides of the double bond, which corresponds to the (E) configuration.",
      "result": "The correct name is (E)-3-methyl-2-pentene."
    }
  },
  {
    "question_id": "ch19_acs_q6_ether",
    "topic": "ACS: Nomenclature",
    "difficulty_level": "Medium",
    "question_text": "What is the IUPAC name for this compound?",
    "question_smiles": "CC(C)(C)OCC",
    "options": [
      {
        "option_id": "A",
        "text": "2-ethoxy-2-methylpropane",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "ethyl tert-butyl ether",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,1-dimethyl-1-ethoxyethane",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-oxa-4,4-dimethylpentane",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "IUPAC naming of ethers, identifying the alkoxy group and parent alkane.",
      "process": "Step 1: Find the longest carbon chain (3 carbons: propane).\nStep 2: Identify substituents on the chain: a methyl group at C2 and an ethoxy group at C2.\nStep 3: Combine alphabetically: 2-ethoxy-2-methylpropane.",
      "result": "The IUPAC name is 2-ethoxy-2-methylpropane."
    }
  },
  {
    "question_id": "ch19_acs_q7_amine",
    "topic": "ACS: Nomenclature",
    "difficulty_level": "Medium",
    "question_text": "Identify the correct IUPAC name for this compound.",
    "question_smiles": "CC(C)C(C)N",
    "options": [
      {
        "option_id": "A",
        "text": "3-methyl-2-butanamine",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,2-dimethylpropanamine",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "isopropylmethylamine",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-amino-3-methylbutane",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Amine nomenclature under IUPAC rules.",
      "process": "Step 1: Find the longest carbon chain containing the amine nitrogen (4 carbons: butane).\nStep 2: Number starting from the end closest to the nitrogen (C2 carries the amine: 2-butanamine).\nStep 3: C3 carries a methyl group. Combine to get 3-methyl-2-butanamine.",
      "result": "The correct name is 3-methyl-2-butanamine."
    }
  },
  {
    "question_id": "ch19_acs_q8_ketoaldehyde",
    "topic": "ACS: Nomenclature",
    "difficulty_level": "Medium",
    "question_text": "What is the correct IUPAC name for the following compound?",
    "question_smiles": "CC(=O)CC=O",
    "options": [
      {
        "option_id": "A",
        "text": "3-oxobutanal",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-oxobutanal",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-ketobutanal",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "butanal-3-one",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Naming compounds containing multiple functional groups (aldehyde vs ketone).",
      "process": "Step 1: Aldehyde has priority over ketone, so the principal suffix is -al, and the aldehyde carbon is C1.\nStep 2: The ketone carbonyl at C3 is named using the prefix 'oxo'.\nStep 3: The 4-carbon chain is 3-oxobutanal.",
      "result": "The correct name is 3-oxobutanal."
    }
  },
  {
    "question_id": "ch19_acs_q9_hydroxyketone",
    "topic": "ACS: Nomenclature",
    "difficulty_level": "Medium",
    "question_text": "Name this compound according to IUPAC rules.",
    "question_smiles": "CC(O)CCC(=O)C",
    "options": [
      {
        "option_id": "A",
        "text": "5-hydroxy-2-hexanone",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-hydroxy-5-hexanone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5-hydroxyhexan-2-one",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-oxohexan-5-ol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Priority rules for naming compounds with hydroxyl and carbonyl groups.",
      "process": "Step 1: Ketones have higher priority than alcohols. The parent suffix is -one and numbering begins from the end closer to the ketone carbonyl (C2).\nStep 2: The chain length is 6 carbons.\nStep 3: The hydroxyl group at C5 is named as a 'hydroxy' prefix: 5-hydroxy-2-hexanone.",
      "result": "The correct IUPAC name is 5-hydroxy-2-hexanone."
    }
  },
  {
    "question_id": "ch19_acs_q10_cyclopentylethanone",
    "topic": "ACS: Nomenclature",
    "difficulty_level": "Medium",
    "question_text": "What is the correct IUPAC name for this compound?",
    "question_smiles": "CC(=O)C1CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "1-cyclopentylethan-1-one",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "cyclopentyl methyl ketone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "cyclopentylethanone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-cyclopentylethanone",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Nomenclature of ketones containing cyclic substituents.",
      "process": "Step 1: The parent chain is the acyclic portion containing the carbonyl (ethanone).\nStep 2: The ring is named as a substituent (cyclopentyl) on C1.\nStep 3: Combine to get 1-cyclopentylethan-1-one.",
      "result": "The correct name is 1-cyclopentylethan-1-one."
    }
  },
  {
    "question_id": "ch19_q_dynamic_wittig_reaction",
    "topic": "Aldehydes & Ketones: Nucleophilic Additions",
    "difficulty_level": "Hard",
    "question_text": "Predict the alkene product formed in the Wittig reaction of benzaldehyde and methylenetriphenylphosphorane.",
    "reaction_scheme": {
      "reactants": [
        "O=Cc1ccccc1",
        "C=P(c2ccccc2)(c3ccccc3)c4ccccc4"
      ],
      "reagents": " Wittig Reaction",
      "conditions": "THF",
      "products": [
        "C=Cc1ccccc1"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "The Wittig reaction converts the C=O carbonyl double bond directly into a C=C alkene double bond, yielding styrene.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The reaction yields benzyl alcohol.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Stilbene (C/C=C/c1ccccc1) is formed.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "No reaction occurs due to steric hindrance.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Converting carbonyl groups to alkenes using phosphorus ylides.",
      "process": "The nucleophilic ylide carbon attacks the carbonyl carbon to form a betaine, which collapses into an oxaphosphetane intermediate. This collapses to release triphenylphosphine oxide (Ph3P=O) and form the carbon-carbon double bond (styrene).",
      "result": "Styrene is synthesized."
    }
  }
];
