// ACS Organic Chemistry Exam Preparation - ACS: EAS & NAS (Aromatics)
const CHAPTER_28_QUESTIONS = [
  {
    "question_id": "ch28_acs_q1_eas",
    "topic": "ACS: EAS & NAS (Aromatics)",
    "difficulty_level": "Hard",
    "question_text": "Predict the major product of the nitration of m-nitrotoluene.",
    "question_smiles": "CC1=CC(=CC=C1)[N+](=O)[O-]",
    "options": [
      {
        "option_id": "A",
        "text": "1-methyl-2,3-dinitrobenzene",
        "smiles": "CC1=C([N+](=O)[O-])C([N+](=O)[O-])=CC=C1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "1-methyl-3,4-dinitrobenzene",
        "smiles": "CC1=CC(=C([N+](=O)[O-])C=C1)[N+](=O)[O-]",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "1-methyl-2,5-dinitrobenzene",
        "smiles": "CC1=C([N+](=O)[O-])C=CC(=C1)[N+](=O)[O-]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-methyl-1,3-dinitrobenzene",
        "smiles": "CC1=C([N+](=O)[O-])C=CC=C1[N+](=O)[O-]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Evaluating directing group effects in Electrophilic Aromatic Substitution (EAS) on disubstituted benzene rings.",
      "process": "Step 1: Identify the two substituents on the ring: a methyl group (activating, ortho/para directing) and a nitro group (deactivating, meta directing).\nStep 2: The stronger activating group (methyl) dominates the regiochemical directing control.\nStep 3: Analyze the positions directed by the methyl group: C2 (ortho, but sterically hindered between methyl and nitro), C4 (para), and C6 (ortho). The nitro group directs to C5 (meta). The position C4 is directed ortho to the methyl and meta to the nitro, making it the most favored site.",
      "result": "The major product is 1-methyl-3,4-dinitrobenzene (nitration at C4)."
    }
  },
  {
    "question_id": "ch28_acs_q2_fc_rearr",
    "topic": "ACS: EAS & NAS (Aromatics)",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the Friedel-Crafts alkylation of benzene with 1-chloropropane in the presence of AlCl3?",
    "question_smiles": "c1ccccc1.CCCCl",
    "options": [
      {
        "option_id": "A",
        "text": "Isopropylbenzene (cumene, via carbocation rearrangement)",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propylbenzene (direct alkylation)",
        "smiles": "CCCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,2-dipropylbenzene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Chlorobenzene",
        "smiles": "Clc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Investigating carbocation rearrangements in Friedel-Crafts alkylation reactions.",
      "process": "Step 1: 1-chloropropane complexes with AlCl3 to generate a primary-like carbocation complex.\nStep 2: A 1,2-hydride shift occurs immediately to convert the primary complex into the much more stable secondary isopropyl carbocation.\nStep 3: Benzene performs a electrophilic attack on the isopropyl carbocation, yielding isopropylbenzene as the major product.",
      "result": "The major product is isopropylbenzene."
    }
  },
  {
    "question_id": "ch28_acs_q3_nas",
    "topic": "ACS: EAS & NAS (Aromatics)",
    "difficulty_level": "Hard",
    "question_text": "Which of the following chlorobenzene derivatives undergoes Nucleophilic Aromatic Substitution (NAS) at the fastest rate when heated with aqueous sodium hydroxide?",
    "question_smiles": "Clc1ccccc1.Clc1ccc([N+](=O)[O-])cc1.Clc1c([N+](=O)[O-])cc([N+](=O)[O-])cc1[N+](=O)[O-].Clc1cc([N+](=O)[O-])cc([N+](=O)[O-])c1",
    "options": [
      {
        "option_id": "A",
        "text": "1-chloro-2,4,6-trinitrobenzene (picryl chloride)",
        "smiles": "Clc1c([N+](=O)[O-])cc([N+](=O)[O-])cc1[N+](=O)[O-]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-chloro-4-nitrobenzene",
        "smiles": "Clc1ccc([N+](=O)[O-])cc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-chloro-3,5-dinitrobenzene",
        "smiles": "Clc1cc([N+](=O)[O-])cc([N+](=O)[O-])c1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Chlorobenzene",
        "smiles": "Clc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding the addition-elimination (SnAr) mechanism of nucleophilic aromatic substitution.",
      "process": "Step 1: SnAr reactions proceed via a nucleophilic addition to form a resonance-stabilized anionic Meisenheimer complex.\nStep 2: Strongly electron-withdrawing groups (like -NO2) ortho and para to the leaving group stabilize the negative charge of the intermediate complex.\nStep 3: 1-chloro-2,4,6-trinitrobenzene has three nitro groups positioned ortho/para to the chlorine, stabilizing the complex extremely well and enabling reaction at room temperature.",
      "result": "1-chloro-2,4,6-trinitrobenzene reacts at the fastest rate."
    }
  },
  {
    "question_id": "ch28_acs_q4_directing_strength",
    "topic": "ACS: EAS & NAS (Aromatics)",
    "difficulty_level": "Medium",
    "question_text": "Predict the major product of the bromination (Br2/FeBr3) of acetanilide.",
    "question_smiles": "CC(=O)Nc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "p-bromoacetanilide (due to steric and directing group properties)",
        "smiles": "CC(=O)Nc1ccc(Br)cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "o-bromoacetanilide",
        "smiles": "CC(=O)Nc1ccccc1Br",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "m-bromoacetanilide",
        "smiles": "CC(=O)Nc1cccc(Br)c1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,4-dibromoacetanilide",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Assessing directing group strength and steric hindrance in mono-substituted benzenes.",
      "process": "Step 1: The nitrogen of the acetamido group (-NHCOCH3) has lone pairs that donate into the ring, making it an activating, ortho/para directing group.\nStep 2: The acetamido group is sterically bulky.\nStep 3: Electrophilic attack occurs preferentially at the less hindered para position over the sterically crowded ortho position.",
      "result": "The major product is p-bromoacetanilide."
    }
  },
  {
    "question_id": "ch28_acs_q5_benzyne",
    "topic": "ACS: EAS & NAS (Aromatics)",
    "difficulty_level": "Hard",
    "question_text": "Reaction of o-chlorotoluene with sodium amide (NaNH2) in liquid ammonia yields a mixture of which products?",
    "question_smiles": "Cc1ccccc1Cl",
    "options": [
      {
        "option_id": "A",
        "text": "o-methylaniline and m-methylaniline",
        "smiles": "Cc1ccccc1N.Cc2cccc(N)c2",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "o-methylaniline and p-methylaniline",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "o-methylaniline only",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "m-methylaniline and p-methylaniline",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding the elimination-addition (benzyne) mechanism of aromatic substitution.",
      "process": "Step 1: The strong base NH2- abstracts an ortho proton from o-chlorotoluene, causing elimination of chloride to form a benzyne intermediate.\nStep 2: The triple bond of the benzyne intermediate is located between C1 and C2.\nStep 3: Attack of NH2- can occur at either C1 (yielding o-methylaniline) or C2 (yielding m-methylaniline).",
      "result": "A mixture of ortho and meta methylanilines is formed."
    }
  },
  {
    "question_id": "ch28_acs_q6_acylation",
    "topic": "ACS: EAS & NAS (Aromatics)",
    "difficulty_level": "Easy",
    "question_text": "What is the product when benzene is reacted with acetyl chloride in the presence of AlCl3?",
    "question_smiles": "c1ccccc1.CC(=O)Cl",
    "options": [
      {
        "option_id": "A",
        "text": "Acetophenone",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethylbenzene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Chlorobenzene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzaldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding Friedel-Crafts acylation of benzene.",
      "process": "Step 1: Acetyl chloride complexes with AlCl3 to generate the stable electrophilic acylium ion.\nStep 2: Benzene attacks the acylium ion.\nStep 3: Deprotonation restores aromaticity, yielding acetophenone. Unlike alkylation, acylation does not undergo rearrangement.",
      "result": "The product is acetophenone."
    }
  },
  {
    "question_id": "ch28_acs_q7_relative_rates",
    "topic": "ACS: EAS & NAS (Aromatics)",
    "difficulty_level": "Medium",
    "question_text": "Rank the following compounds in order of decreasing reactivity toward Electrophilic Aromatic Substitution (EAS) (fastest to slowest):\nI. Benzene\nII. Toluene\nIII. Chlorobenzene\nIV. Nitrobenzene",
    "question_smiles": "c1ccccc1.Cc1ccccc1.Clc1ccccc1.[O-][N+](=O)c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "II > I > III > IV",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "I > II > III > IV",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "II > I > IV > III",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "IV > III > I > II",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Evaluating substituent effects on benzene reactivity in EAS.",
      "process": "Step 1: Toluene (II) has a methyl group (activating). It reacts faster than benzene (I).\nStep 2: Chlorobenzene (III) has a chlorine atom (deactivating), so it reacts slower than benzene.\nStep 3: Nitrobenzene (IV) has a nitro group (strongly deactivating), making it the least reactive.",
      "result": "The reactivity order is II > I > III > IV."
    }
  },
  {
    "question_id": "ch28_acs_q8_sulfonation",
    "topic": "ACS: EAS & NAS (Aromatics)",
    "difficulty_level": "Medium",
    "question_text": "What is the active electrophile in the sulfonation of benzene using fuming sulfuric acid?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Sulfur trioxide (SO3)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "HSO4-",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "H3O+",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "SO2",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identifying electrophiles in EAS reactions.",
      "process": "Step 1: Fuming sulfuric acid contains dissolved sulfur trioxide (SO3).\nStep 2: The sulfur atom in SO3 is highly electrophilic due to three highly electronegative oxygen atoms.\nStep 3: Benzene attacks the sulfur atom directly. Sulfonation is unique because it is fully reversible.",
      "result": "The active electrophile is SO3."
    }
  },
  {
    "question_id": "ch28_acs_q9_heterocycles",
    "topic": "ACS: EAS & NAS (Aromatics)",
    "difficulty_level": "Hard",
    "question_text": "Which heterocyclic aromatic compound undergoes Electrophilic Aromatic Substitution (EAS) at the fastest rate?",
    "question_smiles": "c1cc[nH]c1.c1ccncc1",
    "options": [
      {
        "option_id": "A",
        "text": "Pyrrole",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Pyridine",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Furan",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Thiophene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Comparing EAS reactivity of heterocyclic rings.",
      "process": "Step 1: Pyrrole is a 5-membered pi-rich heterocycle. Pyridine is a 6-membered pi-deficient heterocycle.\nStep 2: In pyrrole, the nitrogen lone pair is delocalized into the ring, making it extremely electron-rich.\nStep 3: Pyrrole is more reactive than furan and thiophene because nitrogen is less electronegative than oxygen or sulfur, sharing its lone pair more readily.",
      "result": "Pyrrole is the most reactive toward EAS."
    }
  },
  {
    "question_id": "ch28_acs_q10_gattermann",
    "topic": "ACS: EAS & NAS (Aromatics)",
    "difficulty_level": "Medium",
    "question_text": "What is the product of the Gattermann-Koch reaction applied to benzene?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Benzaldehyde",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzoic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Toluene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Chlorobenzene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding the Gattermann-Koch formylation reaction.",
      "process": "Step 1: The Gattermann-Koch reaction uses carbon monoxide (CO), hydrogen chloride (HCl), and an AlCl3 catalyst.\nStep 2: These reagents generate a formyl cation source.\nStep 3: EAS of benzene with this formyl source yields benzaldehyde.",
      "result": "The product is benzaldehyde."
    }
  }
];
