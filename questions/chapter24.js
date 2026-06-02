// ACS Organic Chemistry Exam Preparation - ACS: Electrophilic Additions
const CHAPTER_24_QUESTIONS = [
  {
    "question_id": "ch24_acs_q1_bromination",
    "topic": "ACS: Electrophilic Additions",
    "difficulty_level": "Medium",
    "question_text": "What is the major product of the addition of molecular bromine (Br2) to cyclohexene in dichloromethane?",
    "question_smiles": "C1CCC=CC1",
    "options": [
      {
        "option_id": "A",
        "text": "trans-1,2-dibromocyclohexane",
        "smiles": "C1CC[C@@H](Br)[C@H](Br)C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "cis-1,2-dibromocyclohexane",
        "smiles": "C1CC[C@@H](Br)[C@@H](Br)C1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,1-dibromocyclohexane",
        "smiles": "C1CCCC(Br)(Br)C1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-bromocyclohexene",
        "smiles": "C1C=CC(Br)CC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding the mechanism and stereochemical outcome of electrophilic halogen addition to alkenes.",
      "process": "Step 1: Bromine attacks cyclohexene to form a cyclic, three-membered bromonium ion intermediate.\nStep 2: The bromide ion attacks this intermediate from the opposite face (backside attack, anti-addition).\nStep 3: This anti-addition results in a trans-1,2-disubstituted product.",
      "result": "The product is trans-1,2-dibromocyclohexane."
    }
  },
  {
    "question_id": "ch24_acs_q2_hydroboration",
    "topic": "ACS: Electrophilic Additions",
    "difficulty_level": "Medium",
    "question_text": "Predict the stereochemical outcome and structure of the major product when 1-methylcyclopentene is treated with BH3-THF followed by basic H2O2.",
    "question_smiles": "CC1=CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "trans-2-methylcyclopentanol (syn-addition of H and OH)",
        "smiles": "C[C@@H]1CCC[C@@H]1O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "cis-2-methylcyclopentanol (anti-addition of H and OH)",
        "smiles": "C[C@H]1CCC[C@@H]1O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-methylcyclopentanol (Markovnikov product)",
        "smiles": "CC1(O)CCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "trans-1,2-cyclopentanediol",
        "smiles": "OC1CCCC1O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Examining regiochemistry and stereospecificity of the hydroboration-oxidation reaction.",
      "process": "Step 1: Hydroboration is anti-Markovnikov selective, placing boron on the less substituted carbon (C2) and hydrogen on the more substituted carbon (C1).\nStep 2: The mechanism is concerted, requiring a syn-addition where H and B add to the same face of the double bond.\nStep 3: Oxidation replaces the C-B bond with a C-OH bond with retention of stereochemistry. The resulting methyl and hydroxyl groups will end up in a trans relationship.",
      "result": "The major product is trans-2-methylcyclopentanol."
    }
  },
  {
    "question_id": "ch24_acs_q3_oxymercuration",
    "topic": "ACS: Electrophilic Additions",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction of 3,3-dimethyl-1-butene with mercuric acetate in water, followed by treatment with sodium borohydride?",
    "question_smiles": "CC(C)(C)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "3,3-dimethyl-2-butanol (no rearrangement)",
        "smiles": "CC(C)(C)C(O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2,3-dimethyl-2-butanol (rearranged alcohol)",
        "smiles": "CC(C)(O)C(C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3,3-dimethyl-1-butanol (anti-Markovnikov)",
        "smiles": "CC(C)(C)CCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,3-dimethyl-2-butene (elimination product)",
        "smiles": "CC(C)=C(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Comparing acid-catalyzed hydration (prone to carbocation rearrangement) with oxymercuration-demercuration (which avoids rearrangements).",
      "process": "Step 1: Alkene addition of Hg(OAc)2 forms a cyclic mercurinium ion, avoiding free carbocation intermediates.\nStep 2: Nucleophilic attack of water occurs at the more substituted C2 carbon without skeletal rearrangement.\nStep 3: NaBH4 reduces the C-Hg bond, leaving the original carbon skeleton intact.",
      "result": "The product is 3,3-dimethyl-2-butanol."
    }
  },
  {
    "question_id": "ch24_acs_q4_rearrangement",
    "topic": "ACS: Electrophilic Additions",
    "difficulty_level": "Hard",
    "question_text": "Identify the major organic product of the reaction between methylenecyclobutane and dilute aqueous sulfuric acid.",
    "question_smiles": "C=C1CCC1",
    "options": [
      {
        "option_id": "A",
        "text": "1-methylcyclopentanol (via ring expansion)",
        "smiles": "CC1(O)CCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(1-methylcyclobutyl)methanol (direct addition)",
        "smiles": "CC1(CO)CCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-methylcyclobutanol (rearranged cyclobutanol)",
        "smiles": "CC1(O)CCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "cyclopentylmethanol (ring expansion to aldehyde)",
        "smiles": "OC1CCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing carbocation-mediated reactions involving ring expansion to relieve angle strain.",
      "process": "Step 1: Protonation of the exocyclic double bond forms a secondary carbocation at the ring-adjacent carbon: C1-cyclobutyl.\nStep 2: A 1,2-alkyl shift occurs to expand the four-membered ring to a more stable, less strained five-membered ring, forming a secondary cyclopentyl carbocation.\nStep 3: A 1,2-hydride shift converts it to a highly stable tertiary cyclopentyl carbocation.\nStep 4: Water attacks, yielding 1-methylcyclopentanol.",
      "result": "The major product is 1-methylcyclopentanol."
    }
  },
  {
    "question_id": "ch24_acs_q5_stereospecific",
    "topic": "ACS: Electrophilic Additions",
    "difficulty_level": "Hard",
    "question_text": "Predict the stereochemical nature of the product formed from the addition of Cl2 to trans-2-butene in CH2Cl2.",
    "question_smiles": "C/C=C/C",
    "options": [
      {
        "option_id": "A",
        "text": "A single meso compound: (2R,3S)-2,3-dichlorobutane",
        "smiles": "C[C@@H](Cl)[C@H](Cl)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A racemic mixture of (2R,3R) and (2S,3S)-2,3-dichlorobutane",
        "smiles": "C[C@@H](Cl)[C@@H](Cl)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A mixture of diastereomers",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "An optically active single enantiomer",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding the stereospecificity of halogen additions to symmetric alkenes.",
      "process": "Step 1: Addition of Cl2 is stereospecifically anti, proceeding through a chloronium ion.\nStep 2: Addition of identical groups (Cl) to trans-2-butene via an anti mechanism yields the symmetric meso compound.\nStep 3: cis starting material + anti addition = racemic product; trans starting material + anti addition = meso product.",
      "result": "The product is the optically inactive meso-2,3-dichlorobutane."
    }
  },
  {
    "question_id": "ch24_acs_q6_epoxidation",
    "topic": "ACS: Electrophilic Additions",
    "difficulty_level": "Medium",
    "question_text": "What is the stereochemical outcome when cis-2-butene is reacted with meta-chloroperbenzoic acid (mCPBA) in dichloromethane?",
    "question_smiles": "C/C=CC",
    "options": [
      {
        "option_id": "A",
        "text": "cis-2,3-dimethyloxirane (stereochemistry is preserved)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "trans-2,3-dimethyloxirane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A 1:1 racemic mixture of cis and trans-2,3-dimethyloxirane",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "meso-2,3-butanediol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding the stereospecificity of alkene epoxidation.",
      "process": "Step 1: Epoxidation with mCPBA is a concerted reaction.\nStep 2: Since the transition state forms both C-O bonds simultaneously, the relative stereochemistry of the substituents on the alkene is preserved in the product.\nStep 3: Thus, cis-2-butene yields the cis-epoxide (cis-2,3-dimethyloxirane).",
      "result": "The product is cis-2,3-dimethyloxirane."
    }
  },
  {
    "question_id": "ch24_acs_q7_ozonolysis_cleavage",
    "topic": "ACS: Electrophilic Additions",
    "difficulty_level": "Medium",
    "question_text": "Ozonolysis of 1-methylcyclohexene followed by zinc/acetic acid workup yields which compound?",
    "question_smiles": "CC1=CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "6-oxoheptanal",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-heptanone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "heptanedial",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "6-methylhexanal",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Predicting products of alkene cleavage via ozonolysis.",
      "process": "Step 1: Ozonolysis cleaves the C=C double bond and places a carbonyl oxygen on each carbon.\nStep 2: 1-methylcyclohexene has C1 with a methyl group and C2 unsubstituted.\nStep 3: Cleavage opens the ring, converting C1 into a ketone and C2 into an aldehyde (6-oxoheptanal).",
      "result": "The product is 6-oxoheptanal."
    }
  },
  {
    "question_id": "ch24_acs_q8_halohydrin",
    "topic": "ACS: Electrophilic Additions",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product and stereochemistry when cyclohexene is treated with molecular bromine (Br2) in water?",
    "question_smiles": "C1CCC=CC1",
    "options": [
      {
        "option_id": "A",
        "text": "trans-2-bromocyclohexanol (anti-addition)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "cis-2-bromocyclohexanol (syn-addition)",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "trans-1,2-dibromocyclohexane",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "cyclohexene oxide",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding halohydrin formation mechanism and stereochemistry.",
      "process": "Step 1: Electrophilic addition of Br2 forms a cyclic bromonium ion intermediate.\nStep 2: Water is present in high concentration and attacks from the opposite face (backside attack, anti-addition).\nStep 3: This yields the trans-halohydrin: trans-2-bromocyclohexanol.",
      "result": "The product is trans-2-bromocyclohexanol."
    }
  },
  {
    "question_id": "ch24_acs_q9_cyclopropanation",
    "topic": "ACS: Electrophilic Additions",
    "difficulty_level": "Medium",
    "question_text": "Predict the product of the reaction of cyclohexene with diiodomethane (CH2I2) in the presence of a zinc-copper couple.",
    "question_smiles": "C1CCC=CC1",
    "options": [
      {
        "option_id": "A",
        "text": "Bicyclo[4.1.0]heptane (norcarane)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,2-dimethylcyclohexane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-iodocyclohexene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "trans-1,2-diiodocyclohexane",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Investigating the Simmons-Smith cyclopropanation reaction.",
      "process": "Step 1: Diiodomethane reacts with Zn-Cu to form a carbenoid reagent (ICH2ZnI).\nStep 2: The carbenoid transfers a CH2 group to the double bond in a concerted syn-addition.\nStep 3: This forms a cyclopropane ring fused to the cyclohexane ring (bicyclo[4.1.0]heptane).",
      "result": "The product is bicyclo[4.1.0]heptane."
    }
  },
  {
    "question_id": "ch24_acs_q10_dienes_addition",
    "topic": "ACS: Electrophilic Additions",
    "difficulty_level": "Hard",
    "question_text": "Reaction of 1,3-butadiene with 1 equivalent of HBr at -80 °C yields 3-bromo-1-butene, whereas at 40 °C, the major product is 1-bromo-2-butene. Why?",
    "question_smiles": "C=CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "3-bromo-1-butene is the kinetic product, whereas 1-bromo-2-butene is the thermodynamic product.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-bromo-2-butene is less stable than 3-bromo-1-butene.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Low temperature favors the 1,4-addition product.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The reaction mechanism changes from electrophilic addition to radical addition.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing kinetic vs thermodynamic control in additions to conjugated dienes.",
      "process": "Step 1: Protonation of 1,3-butadiene yields a resonance-stabilized allylic carbocation.\nStep 2: Attack at C2 (1,2-addition) has a lower activation energy, yielding the kinetic product 3-bromo-1-butene.\nStep 3: Attack at C4 (1,4-addition) yields 1-bromo-2-butene, which is a disubstituted alkene and thermodynamically more stable. High temperature allows equilibration.",
      "result": "The temperature determines whether the reaction is under kinetic (-80 °C) or thermodynamic (40 °C) control."
    }
  }
];
