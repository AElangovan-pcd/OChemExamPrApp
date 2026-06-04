// McMurry Chapter 30 questions
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
        "text": "DIBAL-H at -78 \u00b0C",
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
    "question_text": "What is the product when methyl benzoate is treated with one equivalent of DIBAL-H at -78 \u00b0C, followed by water workup?",
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
      "process": "Step 1: DIBAL-H is a bulky hydride donor.\nStep 2: At -78 \u00b0C, it adds one hydride to the ester carbonyl, forming a stable aluminum complex.\nStep 3: This complex does not collapse until water is added during workup, preventing further reduction to the alcohol.",
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
  },
  {
    "question_id": "ch30_q_dynamic_diels_alder",
    "topic": "Orbitals & Pericyclic Reactions",
    "difficulty_level": "Hard",
    "question_text": "Predict the product of the thermal [4+2] cycloaddition (Diels-Alder reaction) of 1,3-butadiene and maleic anhydride.",
    "reaction_scheme": {
      "reactants": [
        "C=CC=C",
        "O=C1C=CC(=O)O1"
      ],
      "reagents": "Diels-Alder Reaction",
      "conditions": "thermal heat",
      "products": [
        "O=C1[C@@H]2CC=CC[C@@H]2C(=O)O1"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "The [4+2] cycloaddition occurs in a concerted, stereospecific manner to yield the cis-anhydride cyclohexene derivative.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The reaction yields a polymer.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A substitution product is formed.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A [2+2] cyclobutane ring is formed.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing thermal Diels-Alder cycloadditions.",
      "process": "thermal [4+2] cycloadditions are symmetry-allowed. Conjugated diene (4 pi electrons) reacts with dienophile (2 pi electrons) to form a new six-membered ring with stereochemical retention of the cis dienophile.",
      "result": "The final product is a cis-fused cyclohexene anhydride."
    }
  }
,
  {
    "question_id": "ch30_acs_q11_steroid_oxidation",
    "topic": "ACS: Oxidations & Reductions",
    "difficulty_level": "Medium",
    "question_text": "Which reagent would be best for carrying out this transformation?",
    "image": "images/or1_steroid_scheme.png",
    "options": [
      {"option_id": "A", "text": "KOH(aq) / heat", "is_correct": false},
      {"option_id": "B", "text": "K2Cr2O7(aq), H2SO4", "is_correct": true},
      {"option_id": "C", "text": "LiAlH4 in ether", "is_correct": false},
      {"option_id": "D", "text": "H3O+, heat", "is_correct": false}
    ],
    "feedback": {
      "context": "Selecting mild vs strong oxidizing reagents to oxidize secondary alcohols to ketones.",
      "process": "Step 1: Examine the starting material and product structures. The substrate has two secondary alcohol groups on a steroid skeleton.\nStep 2: The product shows both secondary alcohols oxidized to ketone groups.\nStep 3: Aqueous potassium dichromate in acid (K2Cr2O7/H2SO4, Jones conditions) is a strong oxidizing agent that will cleanly convert secondary alcohols to ketones without skeletal degradation.",
      "result": "The best reagent is aqueous potassium dichromate in sulfuric acid (K2Cr2O7, H2SO4)."
    }
  },
  {
    "question_id": "ch30_acs_q12_chemoselective_pcc",
    "topic": "ACS: Oxidations & Reductions",
    "difficulty_level": "Hard",
    "question_text": "Which reagent would be best for carrying out this transformation?",
    "image": "images/or2_oxidation_scheme.png",
    "options": [
      {"option_id": "A", "text": "KMnO4, -OH", "is_correct": false},
      {"option_id": "B", "text": "H3O+, heat", "is_correct": false},
      {"option_id": "C", "text": "HIO4", "is_correct": false},
      {"option_id": "D", "text": "PCC (pyridinium chlorochromate) in CH2Cl2", "is_correct": true}
    ],
    "feedback": {
      "context": "Selecting a chemoselective oxidizing agent that oxidizes secondary alcohols without reacting with alkenes.",
      "process": "Step 1: The starting material contains two functional groups: a secondary alcohol and an isolated alkene.\nStep 2: The product shows the secondary alcohol oxidized to a ketone, while the double bond remains completely untouched.\nStep 3: Potassium permanganate (KMnO4) is a strong oxidizer that would rapidly dihydroxylate or cleave the alkene. Periodic acid (HIO4) cleaves 1,2-diols. Aqueous acid (H3O+) causes hydration of the alkene.\nStep 4: Pyridinium chlorochromate (PCC) in anhydrous dichloromethane (CH2Cl2) selectively oxidizes secondary alcohols to ketones without affecting carbon-carbon double (or triple) bonds.",
      "result": "The correct reagent is PCC (pyridinium chlorochromate)."
    }
  },
  {
    "question_id": "ch30_acs_q13_deuterated_reduction",
    "topic": "ACS: Oxidations & Reductions",
    "difficulty_level": "Hard",
    "question_text": "Which of these reagents would be best to accomplish this conversion?",
    "image": "images/or_q12_deuterated_reduction.png",
    "options": [
      {"option_id": "A", "text": "D2O, catalytic HCl", "is_correct": false},
      {"option_id": "B", "text": "D2O2 in CH3COOH", "is_correct": false},
      {"option_id": "C", "text": "NaOD in CH3CH2OD, then aqueous work-up", "is_correct": false},
      {"option_id": "D", "text": "NaBD4 in CH3CH2OH, then aqueous work-up", "is_correct": true}
    ],
    "feedback": {
      "context": "Understanding nucleophilic hydride delivery and deuterium incorporation during carbonyl reduction.",
      "process": "Step 1: The reaction converts an aldehyde (-CHO) into a deuterated secondary alcohol (-CD(OH)-) attached to a cyclopentyl ring.\nStep 2: The carbon atom of the alcohol carries a deuterium atom, indicating that the nucleophilic species delivering the hydride equivalent must be deuterated (D-).\nStep 3: Sodium borodeuteride (NaBD4) acts as a source of nucleophilic deuteride (D-), which attacks the carbonyl carbon. Subsequent aqueous workup protonates the alkoxide oxygen (O-) to yield the neutral deuterated alcohol.",
      "result": "The best reagent is NaBD4 followed by aqueous work-up."
    }
  },
  {
    "question_id": "ch30_acs_q14_dihydroxylation",
    "topic": "ACS: Oxidations & Reductions",
    "difficulty_level": "Medium",
    "question_text": "Which set of reagents could be used to effect this conversion?",
    "image": "images/or_q13_dihydroxylation.png",
    "options": [
      {"option_id": "A", "text": "BH3, then H2O2 and NaOH", "is_correct": false},
      {"option_id": "B", "text": "HIO4", "is_correct": false},
      {"option_id": "C", "text": "cold KMnO4, NaOH", "is_correct": true},
      {"option_id": "D", "text": "H2O2, NaOH", "is_correct": false}
    ],
    "feedback": {
      "context": "Recognizing syn-dihydroxylation reagents that convert alkenes to cis-1,2-diols.",
      "process": "Step 1: The reaction converts cis-2-butene (or a symmetric cis-alkene) into a cis-1,2-diol (syn-addition of two hydroxyl groups).\nStep 2: Hydroboration-oxidation (BH3, then H2O2/NaOH) adds water across a double bond to form a mono-alcohol, not a diol.\nStep 3: Cold, alkaline potassium permanganate (cold KMnO4, NaOH) or osmium tetroxide (OsO4) achieves stereospecific syn-dihydroxylation of alkenes to yield cis-1,2-diols.",
      "result": "The correct set of reagents is cold KMnO4, NaOH."
    }
  },
  {
    "question_id": "ch30_acs_q15_triol_cleavage",
    "topic": "ACS: Oxidations & Reductions",
    "difficulty_level": "Hard",
    "question_text": "What are the products when the triol shown is treated with excess HIO4?",
    "image": "images/or_q14_triol_cleavage.png",
    "options": [
      {"option_id": "A", "text": "CH3CH(OH)CH2COCH3 + HCHO", "is_correct": true},
      {"option_id": "B", "text": "CH3CH(OH)CH2COCH3 + HCOOH", "is_correct": false},
      {"option_id": "C", "text": "CH3CHO + CH3COCH3 + HCHO", "is_correct": false},
      {"option_id": "D", "text": "CH3CHO + CH3COCH3 + HCOOH", "is_correct": false}
    ],
    "feedback": {
      "context": "Analyzing the regioselectivity and requirements of periodic acid (HIO4) cleavage of polyols.",
      "process": "Step 1: Periodic acid (HIO4) specifically cleaves carbon-carbon bonds between adjacent carbons that both bear hydroxyl (-OH) groups (vicinal diols).\nStep 2: Identify the hydroxyl locations in the triol CH3-CH(OH)-CH2-C(OH)(CH3)-CH2OH. The adjacent hydroxyl groups are located on the tertiary carbon C4 and the primary carbon C5 (CH2OH). The secondary alcohol at C2 is separated from the tertiary alcohol by an unsubstituted methylene group (CH2), so it is not vicinal and will not be cleaved.\nStep 3: Cleavage of the C4-C5 bond oxidizes the tertiary alcohol at C4 to a ketone (CH3CH(OH)CH2COCH3) and the primary alcohol at C5 to formaldehyde (HCHO).",
      "result": "The products are CH3CH(OH)CH2COCH3 and HCHO."
    }
  }
];
