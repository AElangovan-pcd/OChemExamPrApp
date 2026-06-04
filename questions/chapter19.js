// ACS Organic Chemistry Exam Preparation - ACS: Nomenclature
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
        "smiles": "CCCC(=O)OC",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "methyl propanoate",
        "smiles": "CCC(=O)OC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "propyl methanoate",
        "smiles": "C(=O)OCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "propyl ethanoate",
        "smiles": "CC(=O)OCCC",
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
        "smiles": "CC(C)C=CC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "2-methyl-3-pentenoic acid",
        "smiles": "CC=CC(C)C(=O)O",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "5-hydroxy-4-methyl-2-penten-5-one",
        "smiles": "CC=CC(C)C(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-hydroxy-2-methyl-3-penten-1-one",
        "smiles": "CC=CC(C)C(=O)O",
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
    "question_smiles": "CC(=O)NCC1=CC=CC=C1",
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
        "smiles": "C1CC2CCC1C2",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "bicyclo[2.1.1]hexane",
        "smiles": "C1CC2CC1C2",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "bicyclo[3.2.0]heptane",
        "smiles": "C1CC2CCC2C1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "bicyclo[3.1.1]heptane",
        "smiles": "C1CC2CC(C1)C2",
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
    "question_smiles": "CC/C(=C\C)/C",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-3-methyl-2-pentene",
        "smiles": "CC/C(=C\C)/C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-3-methyl-2-pentene",
        "smiles": "CC/C(=C/C)/C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)-2-methyl-2-pentene",
        "smiles": "CCC=C(C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(Z)-2-methyl-2-pentene",
        "smiles": "CCC=C(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Applying Cahn-Ingold-Prelog (CIP) priority rules to assign E/Z configuration to double bonds.",
      "process": "Step 1: Assign priorities to groups on C2: methyl (priority 1) vs hydrogen (priority 2).\nStep 2: Assign priorities to groups on C3: ethyl (priority 1) vs methyl (priority 2).\nStep 3: The high-priority groups (ethyl on C3 and methyl on C2) are on opposite sides of the double bond, which corresponds to the (E) configuration.",
      "result": "The correct name is (E)-3-methyl-2-pentene."
    }
  }
,
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
