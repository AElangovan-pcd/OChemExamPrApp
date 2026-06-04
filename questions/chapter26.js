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
