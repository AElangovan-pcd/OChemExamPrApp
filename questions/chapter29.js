// McMurry Chapter 29 questions
const CHAPTER_29_QUESTIONS = [
  {
    "question_id": "ch29_acs_q1_radical",
    "topic": "ACS: Free Radicals",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed when cyclohexene is heated with N-bromosuccinimide (NBS) in the presence of benzoyl peroxide?",
    "question_smiles": "C1CCC=CC1",
    "options": [
      {
        "option_id": "A",
        "text": "3-bromocyclohexene",
        "smiles": "C1C=CC(Br)CC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,2-dibromocyclohexane",
        "smiles": "C1CC(Br)C(Br)CC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-bromocyclohexene",
        "smiles": "C1C=CCC(Br)C1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3,6-dibromocyclohexene",
        "smiles": "C1C(Br)C=CC(Br)C1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Reviewing allylic bromination via a free radical chain mechanism.",
      "process": "Step 1: Benzoyl peroxide initiates radical formation. A bromine radical abstracts an allylic hydrogen from cyclohexene to form a resonance-stabilized allylic radical.\nStep 2: The allylic radical reacts with Br2 (generated in low concentrations by NBS) to form the product, 3-bromocyclohexene.\nStep 3: Addition across the double bond is suppressed due to the low concentration of molecular bromine.",
      "result": "The major product is 3-bromocyclohexene."
    }
  },
  {
    "question_id": "ch29_acs_q2_selectivity",
    "topic": "ACS: Free Radicals",
    "difficulty_level": "Easy",
    "question_text": "Explain why free radical bromination of propane is highly selective for 2-bromopropane (approx. 97%), whereas chlorination yields a nearly 1:1 mixture of 1-chloropropane and 2-chloropropane.",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Bromination is endothermic and has a late transition state, making it highly sensitive to radical stability.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Chlorine radicals are larger and experience more steric hindrance.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Bromine is a stronger oxidizing agent than chlorine.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propane has a higher activation energy for hydrogen abstraction by chlorine.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Applying the Hammond Postulate to explain radical halogenation selectivity.",
      "process": "Step 1: Radical bromination is endothermic. According to the Hammond Postulate, its transition state is 'late' (resembles the radical intermediate).\nStep 2: Thus, the stability of the forming radical (secondary vs primary) strongly influences the activation energy.\nStep 3: Radical chlorination is exothermic and has an 'early' transition state (resembles starting materials), making it less sensitive to intermediate stability and resulting in lower selectivity.",
      "result": "Bromination is highly selective because it has a late transition state."
    }
  },
  {
    "question_id": "ch29_acs_q3_anti_markovnikov",
    "topic": "ACS: Free Radicals",
    "difficulty_level": "Medium",
    "question_text": "Predict the structure of the major product of the reaction of 1-butene with HBr in the presence of di-tert-butyl peroxide.",
    "question_smiles": "CCC=C",
    "options": [
      {
        "option_id": "A",
        "text": "1-bromobutane (anti-Markovnikov addition)",
        "smiles": "CCCCBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-bromobutane (Markovnikov addition)",
        "smiles": "CCC(Br)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,2-dibromobutane",
        "smiles": "CCC(Br)COBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-butanol",
        "smiles": "CCCCO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding free-radical-mediated addition of HBr to alkenes.",
      "process": "Step 1: Peroxides thermally homolyze to generate alkoxy radicals, which abstract H from HBr to form bromine radicals (Br*).\nStep 2: The Br* radical attacks the double bond of 1-butene, adding regioselectively to the less substituted carbon (C1) to generate the more stable secondary radical at C2.\nStep 3: The C2 radical abstracts H from HBr to complete the chain, yielding 1-bromobutane.",
      "result": "The reaction yields the anti-Markovnikov product, 1-bromobutane."
    }
  },
  {
    "question_id": "ch29_acs_q4_polymer",
    "topic": "ACS: Free Radicals",
    "difficulty_level": "Easy",
    "question_text": "Which of the following monomers readily undergoes free-radical polymerization when heated with a radical initiator like AIBN?",
    "question_smiles": "C=CC1=CC=CC=C1.CC=CC.CCOCC.O=C1OCCO1",
    "options": [
      {
        "option_id": "A",
        "text": "Styrene (phenylethylene)",
        "smiles": "C=CC1=CC=CC=C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-butene",
        "smiles": "CC=CC",
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
        "text": "Ethylene carbonate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identifying monomers suitable for radical chain-growth polymerization.",
      "process": "Step 1: Radical polymerization requires monomers that form stable radical intermediates during chain propagation.\nStep 2: Styrene contains an alkene group conjugated with a benzene ring.\nStep 3: Attack of a radical on the double bond forms a benzylic radical, which is highly stabilized by resonance delocalization into the aromatic ring, driving rapid polymerization.",
      "result": "Styrene polymerizes rapidly under radical conditions."
    }
  },
  {
    "question_id": "ch29_acs_q5_autoox",
    "topic": "ACS: Free Radicals",
    "difficulty_level": "Hard",
    "question_text": "What is the primary danger associated with storing ethers (such as tetrahydrofuran or diethyl ether) in the presence of oxygen and light for extended periods?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Formation of explosive hydroperoxides via free radical auto-oxidation.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acid-catalyzed hydrolysis to ethanol and acetaldehyde.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Polymerization into high-density plastics.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Spontaneous combustion at room temperature.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Investigating free radical auto-oxidation mechanisms of ethers.",
      "process": "Step 1: Light initiates radical formation. A radical abstracts a hydrogen from the carbon adjacent to the ether oxygen (alpha-carbon, which has a weak C-H bond due to oxygen lone pair stabilization).\nStep 2: The resulting carbon radical reacts with molecular oxygen (O2) to form a peroxy radical.\nStep 3: The peroxy radical abstracts another hydrogen to yield a hydroperoxide. These compounds are highly unstable and explosive.",
      "result": "The danger is the formation of explosive hydroperoxides."
    }
  },
  {
    "question_id": "ch29_q_dynamic_metabolism_steps",
    "topic": "Organic Chemistry of Metabolic Pathways",
    "difficulty_level": "Hard",
    "question_text": "Match the biological conversion to its organic chemistry classification.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "COP(=O)(O)O",
        "correctAnswer": "Nucleophilic Substitution (Phosphoryl transfer)"
      },
      {
        "smiles": "CC(=O)C(=O)O",
        "correctAnswer": "Decarboxylation (Beta-keto cleavage)"
      }
    ],
    "match_options": [
      "Nucleophilic Substitution (Phosphoryl transfer)",
      "Decarboxylation (Beta-keto cleavage)",
      "Aldol Cleavage",
      "Reduction"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect pathways classifications",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Mapping biochemical conversions to classic organic reaction mechanisms.",
      "process": "Glucose phosphorylation is nucleophilic substitution at phosphorus. Decarboxylation of pyruvate is standard decarboxylation.",
      "result": "Metabolic reactions classified."
    }
  }
];
