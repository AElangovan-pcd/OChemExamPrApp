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
    "question_id": "ch29_acs_q6_stability",
    "topic": "ACS: Free Radicals",
    "difficulty_level": "Easy",
    "question_text": "Rank the following free radicals in order of decreasing stability (most stable to least stable):\nI. Allyl radical\nII. Methyl radical\nIII. t-Butyl radical\nIV. Isopropyl radical",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "I > III > IV > II",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "III > I > IV > II",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "I > IV > III > II",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "IV > III > I > II",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Evaluating carbon radical stability based on resonance and hyperconjugation.",
      "process": "Step 1: Allyl radical (I) is stabilized by resonance over three carbons, making it more stable than alkyl radicals.\nStep 2: Alkyl radical stability increases with substitution due to hyperconjugation.\nStep 3: This results in the order: tertiary (III) > secondary (IV) > methyl (II).",
      "result": "The stability order is I > III > IV > II."
    }
  },
  {
    "question_id": "ch29_acs_q7_steps",
    "topic": "ACS: Free Radicals",
    "difficulty_level": "Easy",
    "question_text": "In the free radical chlorination of methane, which of the following steps is classified as a propagation step?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Cl* + CH4 -> HCl + *CH3",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cl2 -> 2 Cl*",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cl* + *CH3 -> CH3Cl",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2 *CH3 -> CH3CH3",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Classifying steps in free radical chain mechanisms.",
      "process": "Step 1: Initiation generates radicals from non-radicals.\nStep 2: Propagation steps react a radical with a non-radical to yield a new radical and a new non-radical.\nStep 3: Termination steps combine two radicals to form a non-radical.",
      "result": "The step Cl* + CH4 -> HCl + *CH3 is a propagation step."
    }
  },
  {
    "question_id": "ch29_acs_q8_reduction",
    "topic": "ACS: Free Radicals",
    "difficulty_level": "Medium",
    "question_text": "Reaction of 1-bromooctane with tributyltin hydride (Bu3SnH) in the presence of AIBN yields octane. What is the role of AIBN in this reaction?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Radical initiator",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Reducing agent",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Leaving group",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acid catalyst",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding radical reductions of alkyl halides.",
      "process": "Step 1: Alkyl halides can be reduced to alkanes using tributyltin hydride via a radical mechanism.\nStep 2: AIBN is a radical initiator.\nStep 3: Heating AIBN drives homolytic cleavage, releasing nitrogen gas and forming radicals that initiate the tin radical chain.",
      "result": "AIBN acts as the radical initiator."
    }
  },
  {
    "question_id": "ch29_acs_q9_biradical",
    "topic": "ACS: Free Radicals",
    "difficulty_level": "Medium",
    "question_text": "Which common diatomic molecule exists as a stable biradical in its electronic ground state?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Molecular oxygen (O2)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Molecular nitrogen (N2)",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Molecular chlorine (Cl2)",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Carbon monoxide (CO)",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Investigating molecular orbital electronic configurations of simple molecules.",
      "process": "Step 1: Draw the molecular orbital diagram for O2.\nStep 2: The highest occupied orbitals are two degenerate antibonding pi* orbitals.\nStep 3: By Hund's rule, the two remaining electrons occupy these orbitals singly with parallel spins, making ground state oxygen a biradical.",
      "result": "Molecular oxygen (O2) is a ground state biradical."
    }
  },
  {
    "question_id": "ch29_acs_q10_cyclization",
    "topic": "ACS: Free Radicals",
    "difficulty_level": "Hard",
    "question_text": "Reaction of 5-hexenyl radical yields methylcyclopentyl radical via radical cyclization. Which ring size is kinetically favored in this intramolecular radical addition?",
    "question_smiles": "C=CCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Five-membered ring (5-hexenyl cyclizes to methylcyclopentyl radical)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Six-membered ring (cyclizes to cyclohexyl radical)",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Four-membered ring",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Three-membered ring",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Investigating kinetic control in intramolecular radical additions.",
      "process": "Step 1: The 5-hexenyl radical can cyclize via 5-hex-endo attack or 5-hex-exo attack.\nStep 2: The 5-exo-trig cyclization is kinetically faster because of better orbital overlap in the transition state.\nStep 3: This results in the preferential formation of the five-membered ring.",
      "result": "The five-membered ring is kinetically favored."
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
,
  {
    "question_id": "ch29_acs_q11_bromination_fastest",
    "topic": "ACS: Free Radicals",
    "difficulty_level": "Hard",
    "question_text": "At which of the indicated positions would the bromine radical react at the fastest rate?",
    "image": "images/rad10_benzene_positions.png",
    "options": [
      {"option_id": "A", "text": "1", "is_correct": false},
      {"option_id": "B", "text": "2", "is_correct": true},
      {"option_id": "C", "text": "3", "is_correct": false},
      {"option_id": "D", "text": "4", "is_correct": false}
    ],
    "feedback": {
      "context": "Comparing carbon-hydrogen bond dissociation energies and radical stability (benzylic vs aliphatic/aromatic).",
      "process": "Step 1: Free radical bromination proceeds via hydrogen abstraction by a bromine radical to form a carbon radical.\nStep 2: Identify the types of C-H bonds in propylbenzene: position 1 (aromatic sp2 C-H, extremely strong), position 2 (benzylic sp3 C-H, very weak), position 3 (secondary aliphatic sp3 C-H, medium), and position 4 (primary aliphatic sp3 C-H, strong).\nStep 3: The benzylic radical formed by abstraction at position 2 is stabilized by resonance with the aromatic ring, making this C-H bond the weakest and the abstraction step the fastest.",
      "result": "Bromine radical reacts fastest at position 2 (benzylic)."
    }
  }
];
