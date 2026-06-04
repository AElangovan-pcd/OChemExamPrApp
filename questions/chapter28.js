// McMurry Chapter 28 questions
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
    "question_id": "ch28_q_dynamic_base_pairing",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Match each purine/pyrimidine base to its complementary hydrogen-bonding partner in double-stranded DNA.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "Nc1ncnc2[nH]cnc12",
        "correctAnswer": "Thymine (Adenine pairs with Thymine)"
      },
      {
        "smiles": "Cc1c[nH]c(=O)[nH]c1=O",
        "correctAnswer": "Adenine (Thymine pairs with Adenine)"
      },
      {
        "smiles": "Nc1cc[nH]c(=O)n1",
        "correctAnswer": "Guanine (Cytosine pairs with Guanine)"
      }
    ],
    "match_options": [
      "Thymine (Adenine pairs with Thymine)",
      "Adenine (Thymine pairs with Adenine)",
      "Guanine (Cytosine pairs with Guanine)",
      "Uracil"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect base pairing",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identifying Watson-Crick hydrogen-bonding base pairs.",
      "process": "Adenine (purine) forms 2 hydrogen bonds with Thymine (pyrimidine). Cytosine forms 3 hydrogen bonds with Guanine.",
      "result": "Complementary base pairs identified."
    }
  }
];
