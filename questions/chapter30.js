// ACS Organic Chemistry Exam Preparation - ACS: Oxidations & Reductions
const CHAPTER_30_QUESTIONS = [
  {
    "question_id": "ch30_acs_q1_ozonolysis",
    "topic": "ACS: Oxidations & Reductions",
    "difficulty_level": "Hard",
    "question_text": "Treatment of the diene shown (1-methyl-4-(propan-2-ylidene)cyclohexene) with excess ozone followed by a reductive work-up produces which final products?",
    "question_smiles": "CC1=CCC(CC1)=C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "A single dialdehyde-diketone chain with no cleavage",
        "smiles": "CC(=O)CCCCC(=O)C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "4-methyl-3-cyclohexen-1-one and acetone",
        "smiles": "CC1=CC(=O)CCC1.CC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-methylcyclohexanone and 2-hydroxypropan-2-yl radical",
        "smiles": "CC1CCCCC1=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acetone and 4-oxopentanal",
        "smiles": "CC(C)=O.CC(=O)CCC=O",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Analyzing the cleavage of endocyclic and exocyclic double bonds under ozonolysis conditions.",
      "process": "Step 1: The starting diene contains two double bonds: one endocyclic (within the cyclohexene ring) and one exocyclic (attached to the isopropylidene group).\nStep 2: Excess ozone (O3) cleaves both double bonds. Cleavage of the exocyclic double bond yields acetone.\nStep 3: Cleavage of the endocyclic double bond breaks the ring, yielding a carbonyl at each end. The ring carbon with the methyl substituent is oxidized to a methyl ketone, and the unsubstituted alkene carbon is oxidized to an aldehyde, resulting in 4-oxopentanal.",
      "result": "The final products are acetone (CC(C)=O) and 4-oxopentanal (CC(=O)CCC=O)."
    }
  },
  {
    "question_id": "ch30_acs_q2_reduction_alkyne",
    "topic": "ACS: Oxidations & Reductions",
    "difficulty_level": "Medium",
    "question_text": "Determine the stereochemical identity of the alkene product when 2-butyne is reduced using sodium metal in liquid ammonia.",
    "question_smiles": "CC#CC",
    "options": [
      {
        "option_id": "A",
        "text": "trans-2-butene (anti-addition of hydrogen)",
        "smiles": "C/C=C/C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "cis-2-butene (syn-addition of hydrogen)",
        "smiles": "C/C=CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "butane (complete reduction)",
        "smiles": "CCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A 1:1 mixture of cis and trans-2-butene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Comparing dissolving metal reduction (yielding trans alkenes) vs catalytic hydrogenation (yielding cis alkenes).",
      "process": "Step 1: Sodium in liquid ammonia reduces alkynes via a radical anion mechanism.\nStep 2: Proton transfer from ammonia generates a radical intermediate, which equilibrates to the thermodynamically more stable trans configuration to minimize steric interactions of the methyl groups.\nStep 3: Subsequent reduction and protonation yields the trans-alkene, trans-2-butene.",
      "result": "The product is trans-2-butene."
    }
  },
  {
    "question_id": "ch30_acs_q3_mcpba",
    "topic": "ACS: Oxidations & Reductions",
    "difficulty_level": "Easy",
    "question_text": "Predict the structure of the product formed when cyclohexene is treated with meta-chloroperbenzoic acid (mCPBA) in dichloromethane.",
    "question_smiles": "C1CCC=CC1",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclohexene oxide (1,2-epoxycyclohexane)",
        "smiles": "C1CCC2C(C1)O2",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "trans-1,2-cyclohexanediol",
        "smiles": "OC1CCCC1O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "cis-1,2-cyclohexanediol",
        "smiles": "OC1CCCC1O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Adipic acid",
        "smiles": "OC(=O)CCCCC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding the epoxidation of alkenes using peroxycarboxylic acids.",
      "process": "Step 1: mCPBA is a peroxy acid containing a weak O-O bond.\nStep 2: Reaction with cyclohexene proceeds via a concerted butterfly mechanism where oxygen is transferred directly to the double bond.\nStep 3: This stereospecific addition forms a three-membered cyclic ether (epoxide), cyclohexene oxide.",
      "result": "The major product is cyclohexene oxide."
    }
  },
  {
    "question_id": "ch30_acs_q4_chromium",
    "topic": "ACS: Oxidations & Reductions",
    "difficulty_level": "Medium",
    "question_text": "Which reagent combination should be used to convert 1-pentanol into pentanoic acid?",
    "question_smiles": "CCCCCO",
    "options": [
      {
        "option_id": "A",
        "text": "Na2Cr2O7, H2SO4, H2O (Jones Reagent)",
        "smiles": "Na2Cr2O7",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Pyridinium chlorochromate (PCC) in CH2Cl2",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "LiAlH4 in ether",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "DMP (Dess-Martin periodinane)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Selecting the appropriate oxidizing agent for complete oxidation vs partial oxidation of primary alcohols.",
      "process": "Step 1: 1-pentanol is a primary alcohol.\nStep 2: Weak oxidizing agents (PCC, DMP, Swern) oxidize primary alcohols to aldehydes (pentanal) and stop there.\nStep 3: Strong aqueous oxidizing agents (Jones reagent, KMnO4) oxidize primary alcohols to aldehydes, which are immediately hydrated in water and oxidized further to carboxylic acids (pentanoic acid).",
      "result": "Jones Reagent (aqueous chromic acid) completes the oxidation to pentanoic acid."
    }
  },
  {
    "question_id": "ch30_acs_q5_syn_diol",
    "topic": "ACS: Oxidations & Reductions",
    "difficulty_level": "Medium",
    "question_text": "What is the product of the reaction of cyclopentene with osmium tetroxide (OsO4) followed by treatment with aqueous NaHSO3?",
    "question_smiles": "C1CC=CC1",
    "options": [
      {
        "option_id": "A",
        "text": "cis-1,2-cyclopentanediol (syn-dihydroxylation)",
        "smiles": "OC1CCC[C@H]1O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "trans-1,2-cyclopentanediol (anti-dihydroxylation)",
        "smiles": "OC1CCC[C@@H]1O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "cyclopentanone",
        "smiles": "O=C1CCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "glutaric acid",
        "smiles": "OC(=O)CCCC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding the stereospecificity of dihydroxylation reactions using metal oxides.",
      "process": "Step 1: OsO4 undergoes a concerted [3+2] cycloaddition with the double bond of cyclopentene to form a cyclic osmate ester intermediate.\nStep 2: This intermediate is formed by adding both oxygens to the same face of the alkene (syn-addition).\nStep 3: Treatment with NaHSO3 hydrolyzes the cyclic osmate ester, retaining the stereocenter configurations, to yield cis-1,2-cyclopentanediol.",
      "result": "The product is cis-1,2-cyclopentanediol."
    }
  },
  {
    "question_id": "ch30_acs_q6_secondary_oxidation",
    "topic": "ACS: Oxidations & Reductions",
    "difficulty_level": "Easy",
    "question_text": "Which of the following reagent combinations is best suited to oxidize cyclohexanol to cyclohexanone?",
    "question_smiles": "OC1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Pyridinium chlorochromate (PCC) in CH2Cl2",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "LiAlH4 in ether",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "NaBH4 in ethanol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "H2 and Pd/C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Selecting oxidizing agents for secondary alcohols.",
      "process": "Step 1: Cyclohexanol is a secondary alcohol.\nStep 2: Secondary alcohols are oxidized to ketones. Since ketones cannot be oxidized further without breaking C-C bonds, both weak and strong oxidizing agents work.\nStep 3: PCC is a standard mild reagent that carries out this transformation cleanly in anhydrous solvent.",
      "result": "PCC in CH2Cl2 oxidizes cyclohexanol to cyclohexanone."
    }
  },
  {
    "question_id": "ch30_acs_q7_ketone_reduction",
    "topic": "ACS: Oxidations & Reductions",
    "difficulty_level": "Medium",
    "question_text": "Which reagent is most appropriate for the selective reduction of a ketone in the presence of an ester?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Sodium borohydride (NaBH4) in methanol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Lithium aluminum hydride (LiAlH4) in ether",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "DIBAL-H at -78 °C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Jones reagent",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Evaluating chemoselectivity of reducing agents.",
      "process": "Step 1: NaBH4 is a mild reducing agent that reduces aldehydes and ketones but does not react with esters.\nStep 2: LiAlH4 is a strong, non-selective reducing agent that reduces both.\nStep 3: Thus, NaBH4 in methanol allows selective reduction of the ketone.",
      "result": "NaBH4 is selective for ketones over esters."
    }
  },
  {
    "question_id": "ch30_acs_q8_dibal_esters",
    "topic": "ACS: Oxidations & Reductions",
    "difficulty_level": "Hard",
    "question_text": "What is the product when methyl benzoate is treated with one equivalent of DIBAL-H at -78 °C, followed by water workup?",
    "question_smiles": "COC(=O)c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Benzaldehyde",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzyl alcohol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzoic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Toluene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding DIBAL-H reduction of esters.",
      "process": "Step 1: DIBAL-H is a bulky hydride donor.\nStep 2: At -78 °C, it adds one hydride to the ester carbonyl, forming a stable aluminum complex.\nStep 3: This complex does not collapse until water is added during workup, preventing further reduction to the alcohol.",
      "result": "The product is benzaldehyde."
    }
  },
  {
    "question_id": "ch30_acs_q9_amide_reduction",
    "topic": "ACS: Oxidations & Reductions",
    "difficulty_level": "Medium",
    "question_text": "Reduction of acetamide (CH3CONH2) with lithium aluminum hydride (LiAlH4) in ether followed by water workup yields which product?",
    "question_smiles": "CC(=O)N",
    "options": [
      {
        "option_id": "A",
        "text": "Ethylamine (CH3CH2NH2)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetaldehyde",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethylacetamide",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding the reduction of amides with LiAlH4.",
      "process": "Step 1: LiAlH4 reduces amides to amines.\nStep 2: In amides, the carbonyl oxygen is coordinated to aluminum and leaves, while the nitrogen remains attached.\nStep 3: This replaces the carbonyl group directly with a methylene group, yielding ethylamine.",
      "result": "The reduction yields ethylamine."
    }
  },
  {
    "question_id": "ch30_acs_q10_clem_wolff",
    "topic": "ACS: Oxidations & Reductions",
    "difficulty_level": "Medium",
    "question_text": "Which reduction method is best suited to convert acetophenone into ethylbenzene when the molecule also contains an acid-sensitive acetal group?",
    "question_smiles": "CC(=O)c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Wolff-Kishner reduction (H2NNH2, KOH, heat)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Clemmensen reduction (Zn(Hg), HCl, heat)",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "LiAlH4 in ether",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "NaBH4 in methanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Selecting appropriate deoxygenation reactions based on functional group compatibility.",
      "process": "Step 1: Both Clemmensen and Wolff-Kishner reduce ketones to alkanes.\nStep 2: Clemmensen uses strong acid (HCl), which would hydrolyze the acid-sensitive acetal group.\nStep 3: Wolff-Kishner uses strongly basic conditions, which do not affect acetals.",
      "result": "Wolff-Kishner reduction is used under basic conditions."
    }
  }
];
