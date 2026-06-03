// McMurry Chapter 26 questions
const CHAPTER_26_QUESTIONS = [
  {
    "question_id": "ch26_acs_q1_carbonyl_substitution",
    "topic": "ACS: Nucleophilic Substitution at Carbonyls",
    "difficulty_level": "Medium",
    "question_text": "Rank the following carboxylic acid derivatives in order of decreasing reactivity toward nucleophilic acyl substitution (most reactive to least reactive): \nI. Ethyl acetate \nII. Acetyl chloride \nIII. Acetamide \nIV. Acetic anhydride",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "II > IV > I > III",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "II > I > IV > III",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "IV > II > I > III",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "III > I > IV > II",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Assessing carbonyl reactivity based on the leaving group ability and resonance donation of the substituent.",
      "process": "Step 1: The chloride ion (Cl-) is a very weak base and an excellent leaving group, making acetyl chloride (II) the most reactive.\nStep 2: Acetate (CH3COO-) is a moderately weak base and leaving group, making acetic anhydride (IV) next.\nStep 3: Ethoxide (CH3CH2O-) is a strong base and poor leaving group, making ethyl acetate (I) less reactive.\nStep 4: Amide (NH2-) is an extremely strong base, and resonance donation from the nitrogen stabilizes the carbonyl, making acetamide (III) the least reactive.",
      "result": "The correct sequence of decreasing reactivity is II > IV > I > III."
    }
  },
  {
    "question_id": "ch26_acs_q2_fischer",
    "topic": "ACS: Nucleophilic Substitution at Carbonyls",
    "difficulty_level": "Medium",
    "question_text": "In the acid-catalyzed Fischer esterification of benzoic acid with methanol, which step represents the rate-determining step?",
    "question_smiles": "OC(=O)C1=CC=CC=C1.CO",
    "options": [
      {
        "option_id": "A",
        "text": "Nucleophilic attack of methanol on the protonated carbonyl carbon to form the tetrahedral intermediate.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Protonation of the benzoic acid carbonyl oxygen.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Proton transfer from the alcohol oxygen to one of the hydroxyl oxygens.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Loss of water from the tetrahedral intermediate to form the ester carbonyl.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing the energy profile and steps of nucleophilic acyl substitution mechanisms.",
      "process": "Step 1: The reaction begins with rapid protonation of the carbonyl oxygen.\nStep 2: Methanol, a weak nucleophile, attacks the highly electrophilic carbon.\nStep 3: This step breaks the aromatic carbon-oxygen double bond and forms a tetrahedral intermediate. This is the step with the highest activation energy (rate-determining step) because it involves a neutral nucleophile attacking a sterically hindered center.",
      "result": "The rate-determining step is the nucleophilic attack of methanol."
    }
  },
  {
    "question_id": "ch26_acs_q3_saponification",
    "topic": "ACS: Nucleophilic Substitution at Carbonyls",
    "difficulty_level": "Easy",
    "question_text": "What are the final products of the base-catalyzed hydrolysis (saponification) of ethyl benzoate, followed by acidic workup?",
    "question_smiles": "CCOC(=O)C1=CC=CC=C1",
    "options": [
      {
        "option_id": "A",
        "text": "Benzoic acid and ethanol",
        "smiles": "OC(=O)C1=CC=CC=C1.CCO",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Sodium benzoate and ethyl ether",
        "smiles": "[Na+].[O-]C(=O)C1=CC=CC=C1.CCOCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzyl alcohol and acetic acid",
        "smiles": "OCC1=CC=CC=C1.CC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl salicylate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Reviewing base-promoted ester hydrolysis mechanisms.",
      "process": "Step 1: Hydroxide ion (OH-) attacks the ester carbonyl carbon to form a tetrahedral intermediate.\nStep 2: Ethoxide (CH3CH2O-) is expelled, yielding benzoic acid.\nStep 3: The strong base immediately deprotonates the benzoic acid to form a stable carboxylate (sodium benzoate) and ethanol. This step is irreversible.\nStep 4: Acidic workup protonates the carboxylate to yield benzoic acid.",
      "result": "The final neutral products are benzoic acid and ethanol."
    }
  },
  {
    "question_id": "ch26_acs_q4_lactone",
    "topic": "ACS: Nucleophilic Substitution at Carbonyls",
    "difficulty_level": "Hard",
    "question_text": "Rank the cyclic esters (lactones) in order of decreasing rate of nucleophilic hydrolysis (fastest to slowest): \nI. gamma-butyrolactone (5-membered) \nII. delta-valerolactone (6-membered) \nIII. beta-propiolactone (4-membered)",
    "question_smiles": "O=C1CCO1.O=C1CCCO1.O=C1CCCCO1",
    "options": [
      {
        "option_id": "A",
        "text": "III > II > I",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "I > II > III",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "III > I > II",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "II > I > III",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Evaluating lactone ring strain effects on carbonyl reactivity.",
      "process": "Step 1: The rate of ring-opening hydrolysis is driven by the relief of ring strain.\nStep 2: Beta-propiolactone (III) is a highly strained four-membered ring (bond angles near 90 degrees compared to ideal 109.5/120 degrees). Thus, it is extremely reactive to relieve this strain.\nStep 3: Delta-valerolactone (II) has moderate ring strain compared to the highly stable, nearly strain-free five-membered gamma-butyrolactone (I). Additionally, six-membered cyclic esters are slightly more strained than five-membered ones in their transition states.",
      "result": "The rate order is III (4-membered) > II (6-membered) > I (5-membered)."
    }
  },
  {
    "question_id": "ch26_acs_q5_transesterification",
    "topic": "ACS: Nucleophilic Substitution at Carbonyls",
    "difficulty_level": "Medium",
    "question_text": "What is the key intermediate formed in the acid-catalyzed transesterification of methyl acetate with excess ethanol?",
    "question_smiles": "COC(=O)C.CCO",
    "options": [
      {
        "option_id": "A",
        "text": "A protonated tetrahedral intermediate",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A carbocation intermediate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "An enolate intermediate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "An acylium ion intermediate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding transesterification mechanisms under acidic conditions.",
      "process": "Step 1: The carbonyl oxygen of methyl acetate is protonated.\nStep 2: Ethanol attacks the carbonyl carbon to form a protonated tetrahedral adduct.\nStep 3: A proton transfer occurs from the ethyl oxygen to the methoxy oxygen, converting it into a good leaving group (methanol).\nStep 4: Collapse of the tetrahedral intermediate expels methanol, yielding ethyl acetate.",
      "result": "The reaction proceeds through a protonated tetrahedral intermediate."
    }
  },
  {
    "question_id": "ch26_acs_q6_ester_hydrolysis",
    "topic": "ACS: Nucleophilic Substitution at Carbonyls",
    "difficulty_level": "Medium",
    "question_text": "Which of the following describes the mechanism of the base-catalyzed hydrolysis of methyl benzoate (saponification)?",
    "question_smiles": "COC(=O)c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Nucleophilic addition of hydroxide to form a tetrahedral intermediate, followed by elimination of methoxide.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "SN2 substitution at the methyl carbon, displacing benzoate.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "SN1 dissociation to form an acylium ion.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "E2 elimination to form a benzyne intermediate.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding nucleophilic acyl substitution mechanisms under basic conditions.",
      "process": "Step 1: Hydroxide ion attacks the carbonyl carbon, forming a tetrahedral intermediate.\nStep 2: The tetrahedral intermediate collapses, expelling the methoxide leaving group.\nStep 3: A rapid acid-base reaction occurs where methoxide deprotonates benzoic acid, making the reaction irreversible.",
      "result": "The reaction proceeds via a tetrahedral addition-elimination intermediate."
    }
  },
  {
    "question_id": "ch26_acs_q7_grignard_ester",
    "topic": "ACS: Nucleophilic Substitution at Carbonyls",
    "difficulty_level": "Hard",
    "question_text": "What is the final organic product when ethyl benzoate is reacted with excess phenylmagnesium bromide, followed by acidic workup?",
    "question_smiles": "CCOC(=O)c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Triphenylmethanol (a tertiary alcohol)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzophenone (a ketone)",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Phenol and benzyl alcohol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl phenyl ketone",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing Grignard additions to esters.",
      "process": "Step 1: Phenylmagnesium bromide attacks the ester, forming a tetrahedral intermediate that expels ethoxide to yield benzophenone.\nStep 2: Ketones are more reactive than esters. The excess Grignard reagent immediately attacks benzophenone.\nStep 3: Acidic workup protonates the salt to yield the tertiary alcohol, triphenylmethanol.",
      "result": "The final product is triphenylmethanol."
    }
  },
  {
    "question_id": "ch26_acs_q8_reduction",
    "topic": "ACS: Nucleophilic Substitution at Carbonyls",
    "difficulty_level": "Medium",
    "question_text": "What is the product when methyl benzoate is reduced with lithium aluminum hydride (LiAlH4), followed by aqueous workup?",
    "question_smiles": "COC(=O)c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Benzyl alcohol and methanol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzaldehyde and methanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Toluene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzoic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Investigating ester reductions with hydride reagents.",
      "process": "Step 1: LiAlH4 reduces esters completely to primary alcohols.\nStep 2: Hydride attacks to form benzaldehyde, which is immediately reduced further.\nStep 3: Workup yields benzyl alcohol.",
      "result": "The reduction yields benzyl alcohol."
    }
  },
  {
    "question_id": "ch26_acs_q9_dibal",
    "topic": "ACS: Nucleophilic Substitution at Carbonyls",
    "difficulty_level": "Hard",
    "question_text": "Which reagent combination is best suited to convert ethyl benzoate into benzaldehyde in high yield?",
    "question_smiles": "CCOC(=O)c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "1) DIBAL-H, toluene, -78 \u00b0C; 2) H2O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1) LiAlH4, ether; 2) H2O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1) NaBH4, methanol; 2) H2O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1) PCC, CH2Cl2; 2) H2O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Selecting selective reducing agents for partial reduction of esters.",
      "process": "Step 1: LiAlH4 reduces esters completely to primary alcohols. NaBH4 does not reduce esters.\nStep 2: DIBAL-H is a bulky, mild reducing agent.\nStep 3: At -78 \u00b0C, DIBAL-H reduces the ester to a stable aluminum complex that does not collapse until water is added, yielding the aldehyde.",
      "result": "DIBAL-H at -78 \u00b0C is the reagent of choice for ester-to-aldehyde reduction."
    }
  },
  {
    "question_id": "ch26_acs_q10_anhydride",
    "topic": "ACS: Nucleophilic Substitution at Carbonyls",
    "difficulty_level": "Easy",
    "question_text": "What is the product of the reaction between acetyl chloride and sodium acetate?",
    "question_smiles": "CC(=O)Cl.CC(=O)[O-]",
    "options": [
      {
        "option_id": "A",
        "text": "Acetic anhydride",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethyl acetate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetophenone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acetaldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Synthesizing acid anhydrides via nucleophilic acyl substitution.",
      "process": "Step 1: Acetate ion is a good nucleophile.\nStep 2: It attacks the highly reactive carbonyl of acetyl chloride.\nStep 3: Collapse of the tetrahedral intermediate expels chloride to yield acetic anhydride.",
      "result": "The reaction yields acetic anhydride."
    }
  },
  {
    "question_id": "ch26_q_dynamic_isoelectric_points",
    "topic": "Biomolecules: Amino Acids",
    "difficulty_level": "Hard",
    "question_text": "Match each amino acid to its general classification and isoelectric point (pI).",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C(C(=O)O)[C@@H](C(=O)O)N",
        "correctAnswer": "Acidic Side Chain (pI ~ 3.0)"
      },
      {
        "smiles": "NCCCC[C@@H](C(=O)O)N",
        "correctAnswer": "Basic Side Chain (pI ~ 9.7)"
      },
      {
        "smiles": "C[C@@H](C(=O)O)N",
        "correctAnswer": "Neutral Side Chain (pI ~ 6.0)"
      }
    ],
    "match_options": [
      "Acidic Side Chain (pI ~ 3.0)",
      "Basic Side Chain (pI ~ 9.7)",
      "Neutral Side Chain (pI ~ 6.0)"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect amino acid properties",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Assessing isoelectric points of acidic, basic, and neutral amino acids.",
      "process": "Aspartic Acid has carboxylic side chain: acidic (low pI). Lysine has amine side chain: basic (high pI). Alanine has hydrocarbon side chain: neutral (middle pI).",
      "result": "Amino acids classified."
    }
  }
];
