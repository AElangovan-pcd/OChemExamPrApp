// Generated extra questions for Chapter 50
const CHAPTER_50_QUESTIONS = [
  {
    "question_id": "ch50_q1",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Compare the molecular structures of adenosine and adenosine monophosphate (AMP). Identify which statement correctly distinguishes between a nucleoside and a nucleotide.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H](O)[C@H]3O.NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](COP(=O)(O)O)[C@@H](O)[C@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "AMP is a nucleoside because it has no phosphate group.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "AMP is a nucleotide because it contains a phosphate group esterified at C5' of the ribose ring.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Adenosine is a nucleotide because it is phosphorylated.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Adenosine is a nucleotide because it contains a purine base linked to a ribose ring.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing nucleosides and nucleotides.",
      "process": "Step 1: A nucleoside consists of a nitrogenous purine or pyrimidine base linked via a beta-N-glycosidic bond to a pentose sugar (ribose or deoxyribose).\\nStep 2: A nucleotide is a nucleoside that has a phosphate group esterified to one of the sugar hydroxyl groups (typically C5' or C3').\\nStep 3: Adenosine is a nucleoside, while AMP (with a phosphate at C5') is a nucleotide.",
      "result": "Phosphorylation of the sugar makes a nucleoside into a nucleotide."
    }
  },
  {
    "question_id": "ch50_q2",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Easy",
    "question_text": "If a template strand of DNA has the sequence 5'-A-C-G-T-A-G-C-3', what is the sequence of the complementary strand, written in the standard 5' to 3' direction?",
    "options": [
      {
        "option_id": "A",
        "text": "5'-T-G-C-A-T-C-G-3'",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "5'-A-C-G-T-A-G-C-3'",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5'-G-C-T-A-C-G-T-3'",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "5'-C-G-T-A-C-G-T-3'",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determining DNA complementary strand sequence.",
      "process": "Step 1: Write down the complementary bases for each position (A-T, C-G, G-C, T-A). The complementary sequence is 3'-T-G-C-A-T-C-G-5'.\\nStep 2: Reverse the sequence to write it in the standard 5' to 3' direction.\\nStep 3: This yields 5'-G-C-T-A-C-G-T-3'.",
      "result": "The complementary sequence is 5'-G-C-T-A-C-G-T-3'."
    }
  },
  {
    "question_id": "ch50_q3",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "Explain how dideoxynucleotides (ddNTPs) function to terminate DNA synthesis in the Sanger dideoxy sequencing method.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Dideoxynucleotides (ddNTPs) lack the 3'-OH group, preventing further phosphodiester bond formation and terminating the chain.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Dideoxynucleotides lack the nitrogenous base, creating abasic sites.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dideoxynucleotides carry a triphosphate group on the 3' position.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Dideoxynucleotides lack the 2'-OH group, converting DNA into RNA.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sanger sequencing mechanism.",
      "process": "Step 1: DNA polymerase requires a free 3'-OH group on the growing primer strand to perform nucleophilic attack on incoming dNTPs.\\nStep 2: Sanger sequencing introduces dideoxynucleotides (ddNTPs) which lack oxygen at both C2' and C3'.\\nStep 3: Incorporation of a ddNTP terminates the chain because there is no 3'-OH to link to the next nucleotide.",
      "result": "Lack of a 3'-OH terminates the DNA chain."
    }
  },
  {
    "question_id": "ch50_q4",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "In solid-phase DNA synthesis using the phosphoramidite method, what is the first step of each coupling cycle?",
    "question_smiles": "COc1ccc(cc1)C(c2ccccc2)(c3ccc(cc3)OC)OCC4OC(N5C=NC6=C5N=CN=C6N)C(O)C4",
    "options": [
      {
        "option_id": "A",
        "text": "Activation of the phosphoramidite phosphorus atom using a strong Lewis base.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Deprotection of the cyanoethyl protecting group using liquid ammonia.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Oxidation of the phosphite triester intermediate using sulfur dioxide.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acid-catalyzed cleavage of the dimethoxytrityl (DMT) ether protecting group on C5' using trichloroacetic acid.",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Chemical DNA synthesis coupling cycle.",
      "process": "Step 1: The solid-phase support holds a nucleoside protected at C5' with a dimethoxytrityl (DMT) group.\\nStep 2: The cycle begins with deprotection of C5' by treatment with an acid (like trichloroacetic acid) to yield a free C5'-OH group.\\nStep 3: This is followed by coupling with a protected phosphoramidite monomer activated by tetrazole.",
      "result": "The cycle starts with acid-catalyzed DMT cleavage at C5'."
    }
  },
  {
    "question_id": "ch50_q5",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Determine the correct Watson-Crick base-pairing partners and their corresponding hydrogen bond counts in a DNA double helix.",
    "question_smiles": "Nc1ncnc2[nH]cnc12.O=C1NC(=O)C(C)=CN1",
    "options": [
      {
        "option_id": "A",
        "text": "Adenine pairs with Thymine via 3 hydrogen bonds; Guanine pairs with Cytosine via 2 hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Adenine pairs with Uracil via 3 hydrogen bonds in double-stranded DNA.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Adenine pairs with Thymine via 2 hydrogen bonds; Guanine pairs with Cytosine via 3 hydrogen bonds.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Adenine pairs with Cytosine via 2 hydrogen bonds; Guanine pairs with Thymine via 3 hydrogen bonds.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Watson-Crick base pairing hydrogen bonds.",
      "process": "Step 1: The purine base Adenine pairs specifically with the pyrimidine base Thymine.\\nStep 2: The purine base Guanine pairs specifically with the pyrimidine base Cytosine.\\nStep 3: G-C pairs are held together by three hydrogen bonds (NH2 to C=O, ring N to ring NH, C=O to NH2), whereas A-T pairs have only two hydrogen bonds.",
      "result": "G-C pairs have 3 H-bonds, A-T pairs have 2 H-bonds."
    }
  },
  {
    "question_id": "ch50_q6",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Compare the molecular structures of adenosine and adenosine monophosphate (AMP). Identify which statement correctly distinguishes between a nucleoside and a nucleotide.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H](O)[C@H]3O.NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](COP(=O)(O)O)[C@@H](O)[C@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "AMP is a nucleotide because it contains a phosphate group esterified at C5' of the ribose ring.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Adenosine is a nucleotide because it is phosphorylated.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "AMP is a nucleoside because it has no phosphate group.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Adenosine is a nucleotide because it contains a purine base linked to a ribose ring.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing nucleosides and nucleotides.",
      "process": "Step 1: A nucleoside consists of a nitrogenous purine or pyrimidine base linked via a beta-N-glycosidic bond to a pentose sugar (ribose or deoxyribose).\\nStep 2: A nucleotide is a nucleoside that has a phosphate group esterified to one of the sugar hydroxyl groups (typically C5' or C3').\\nStep 3: Adenosine is a nucleoside, while AMP (with a phosphate at C5') is a nucleotide.",
      "result": "Phosphorylation of the sugar makes a nucleoside into a nucleotide."
    }
  },
  {
    "question_id": "ch50_q7",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Easy",
    "question_text": "If a template strand of DNA has the sequence 5'-A-C-G-T-A-G-C-3', what is the sequence of the complementary strand, written in the standard 5' to 3' direction?",
    "options": [
      {
        "option_id": "A",
        "text": "5'-G-C-T-A-C-G-T-3'",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "5'-T-G-C-A-T-C-G-3'",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5'-A-C-G-T-A-G-C-3'",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5'-C-G-T-A-C-G-T-3'",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determining DNA complementary strand sequence.",
      "process": "Step 1: Write down the complementary bases for each position (A-T, C-G, G-C, T-A). The complementary sequence is 3'-T-G-C-A-T-C-G-5'.\\nStep 2: Reverse the sequence to write it in the standard 5' to 3' direction.\\nStep 3: This yields 5'-G-C-T-A-C-G-T-3'.",
      "result": "The complementary sequence is 5'-G-C-T-A-C-G-T-3'."
    }
  },
  {
    "question_id": "ch50_q8",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "Explain how dideoxynucleotides (ddNTPs) function to terminate DNA synthesis in the Sanger dideoxy sequencing method.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Dideoxynucleotides carry a triphosphate group on the 3' position.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Dideoxynucleotides (ddNTPs) lack the 3'-OH group, preventing further phosphodiester bond formation and terminating the chain.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Dideoxynucleotides lack the 2'-OH group, converting DNA into RNA.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Dideoxynucleotides lack the nitrogenous base, creating abasic sites.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sanger sequencing mechanism.",
      "process": "Step 1: DNA polymerase requires a free 3'-OH group on the growing primer strand to perform nucleophilic attack on incoming dNTPs.\\nStep 2: Sanger sequencing introduces dideoxynucleotides (ddNTPs) which lack oxygen at both C2' and C3'.\\nStep 3: Incorporation of a ddNTP terminates the chain because there is no 3'-OH to link to the next nucleotide.",
      "result": "Lack of a 3'-OH terminates the DNA chain."
    }
  },
  {
    "question_id": "ch50_q9",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "In solid-phase DNA synthesis using the phosphoramidite method, what is the first step of each coupling cycle?",
    "question_smiles": "COc1ccc(cc1)C(c2ccccc2)(c3ccc(cc3)OC)OCC4OC(N5C=NC6=C5N=CN=C6N)C(O)C4",
    "options": [
      {
        "option_id": "A",
        "text": "Oxidation of the phosphite triester intermediate using sulfur dioxide.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Activation of the phosphoramidite phosphorus atom using a strong Lewis base.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acid-catalyzed cleavage of the dimethoxytrityl (DMT) ether protecting group on C5' using trichloroacetic acid.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Deprotection of the cyanoethyl protecting group using liquid ammonia.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Chemical DNA synthesis coupling cycle.",
      "process": "Step 1: The solid-phase support holds a nucleoside protected at C5' with a dimethoxytrityl (DMT) group.\\nStep 2: The cycle begins with deprotection of C5' by treatment with an acid (like trichloroacetic acid) to yield a free C5'-OH group.\\nStep 3: This is followed by coupling with a protected phosphoramidite monomer activated by tetrazole.",
      "result": "The cycle starts with acid-catalyzed DMT cleavage at C5'."
    }
  },
  {
    "question_id": "ch50_q10",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Determine the correct Watson-Crick base-pairing partners and their corresponding hydrogen bond counts in a DNA double helix.",
    "question_smiles": "Nc1ncnc2[nH]cnc12.O=C1NC(=O)C(C)=CN1",
    "options": [
      {
        "option_id": "A",
        "text": "Adenine pairs with Thymine via 2 hydrogen bonds; Guanine pairs with Cytosine via 3 hydrogen bonds.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Adenine pairs with Cytosine via 2 hydrogen bonds; Guanine pairs with Thymine via 3 hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Adenine pairs with Uracil via 3 hydrogen bonds in double-stranded DNA.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Adenine pairs with Thymine via 3 hydrogen bonds; Guanine pairs with Cytosine via 2 hydrogen bonds.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Watson-Crick base pairing hydrogen bonds.",
      "process": "Step 1: The purine base Adenine pairs specifically with the pyrimidine base Thymine.\\nStep 2: The purine base Guanine pairs specifically with the pyrimidine base Cytosine.\\nStep 3: G-C pairs are held together by three hydrogen bonds (NH2 to C=O, ring N to ring NH, C=O to NH2), whereas A-T pairs have only two hydrogen bonds.",
      "result": "G-C pairs have 3 H-bonds, A-T pairs have 2 H-bonds."
    }
  },
  {
    "question_id": "ch50_q11",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Compare the molecular structures of adenosine and adenosine monophosphate (AMP). Identify which statement correctly distinguishes between a nucleoside and a nucleotide.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H](O)[C@H]3O.NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](COP(=O)(O)O)[C@@H](O)[C@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "AMP is a nucleoside because it has no phosphate group.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Adenosine is a nucleotide because it is phosphorylated.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "AMP is a nucleotide because it contains a phosphate group esterified at C5' of the ribose ring.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Adenosine is a nucleotide because it contains a purine base linked to a ribose ring.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing nucleosides and nucleotides.",
      "process": "Step 1: A nucleoside consists of a nitrogenous purine or pyrimidine base linked via a beta-N-glycosidic bond to a pentose sugar (ribose or deoxyribose).\\nStep 2: A nucleotide is a nucleoside that has a phosphate group esterified to one of the sugar hydroxyl groups (typically C5' or C3').\\nStep 3: Adenosine is a nucleoside, while AMP (with a phosphate at C5') is a nucleotide.",
      "result": "Phosphorylation of the sugar makes a nucleoside into a nucleotide."
    }
  },
  {
    "question_id": "ch50_q12",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Easy",
    "question_text": "If a template strand of DNA has the sequence 5'-A-C-G-T-A-G-C-3', what is the sequence of the complementary strand, written in the standard 5' to 3' direction?",
    "options": [
      {
        "option_id": "A",
        "text": "5'-C-G-T-A-C-G-T-3'",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "5'-T-G-C-A-T-C-G-3'",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5'-G-C-T-A-C-G-T-3'",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "5'-A-C-G-T-A-G-C-3'",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determining DNA complementary strand sequence.",
      "process": "Step 1: Write down the complementary bases for each position (A-T, C-G, G-C, T-A). The complementary sequence is 3'-T-G-C-A-T-C-G-5'.\\nStep 2: Reverse the sequence to write it in the standard 5' to 3' direction.\\nStep 3: This yields 5'-G-C-T-A-C-G-T-3'.",
      "result": "The complementary sequence is 5'-G-C-T-A-C-G-T-3'."
    }
  },
  {
    "question_id": "ch50_q13",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "Explain how dideoxynucleotides (ddNTPs) function to terminate DNA synthesis in the Sanger dideoxy sequencing method.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Dideoxynucleotides (ddNTPs) lack the 3'-OH group, preventing further phosphodiester bond formation and terminating the chain.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Dideoxynucleotides carry a triphosphate group on the 3' position.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dideoxynucleotides lack the 2'-OH group, converting DNA into RNA.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Dideoxynucleotides lack the nitrogenous base, creating abasic sites.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sanger sequencing mechanism.",
      "process": "Step 1: DNA polymerase requires a free 3'-OH group on the growing primer strand to perform nucleophilic attack on incoming dNTPs.\\nStep 2: Sanger sequencing introduces dideoxynucleotides (ddNTPs) which lack oxygen at both C2' and C3'.\\nStep 3: Incorporation of a ddNTP terminates the chain because there is no 3'-OH to link to the next nucleotide.",
      "result": "Lack of a 3'-OH terminates the DNA chain."
    }
  },
  {
    "question_id": "ch50_q14",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "In solid-phase DNA synthesis using the phosphoramidite method, what is the first step of each coupling cycle?",
    "question_smiles": "COc1ccc(cc1)C(c2ccccc2)(c3ccc(cc3)OC)OCC4OC(N5C=NC6=C5N=CN=C6N)C(O)C4",
    "options": [
      {
        "option_id": "A",
        "text": "Activation of the phosphoramidite phosphorus atom using a strong Lewis base.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Deprotection of the cyanoethyl protecting group using liquid ammonia.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Oxidation of the phosphite triester intermediate using sulfur dioxide.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acid-catalyzed cleavage of the dimethoxytrityl (DMT) ether protecting group on C5' using trichloroacetic acid.",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Chemical DNA synthesis coupling cycle.",
      "process": "Step 1: The solid-phase support holds a nucleoside protected at C5' with a dimethoxytrityl (DMT) group.\\nStep 2: The cycle begins with deprotection of C5' by treatment with an acid (like trichloroacetic acid) to yield a free C5'-OH group.\\nStep 3: This is followed by coupling with a protected phosphoramidite monomer activated by tetrazole.",
      "result": "The cycle starts with acid-catalyzed DMT cleavage at C5'."
    }
  },
  {
    "question_id": "ch50_q15",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Determine the correct Watson-Crick base-pairing partners and their corresponding hydrogen bond counts in a DNA double helix.",
    "question_smiles": "Nc1ncnc2[nH]cnc12.O=C1NC(=O)C(C)=CN1",
    "options": [
      {
        "option_id": "A",
        "text": "Adenine pairs with Uracil via 3 hydrogen bonds in double-stranded DNA.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Adenine pairs with Thymine via 2 hydrogen bonds; Guanine pairs with Cytosine via 3 hydrogen bonds.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Adenine pairs with Thymine via 3 hydrogen bonds; Guanine pairs with Cytosine via 2 hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Adenine pairs with Cytosine via 2 hydrogen bonds; Guanine pairs with Thymine via 3 hydrogen bonds.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Watson-Crick base pairing hydrogen bonds.",
      "process": "Step 1: The purine base Adenine pairs specifically with the pyrimidine base Thymine.\\nStep 2: The purine base Guanine pairs specifically with the pyrimidine base Cytosine.\\nStep 3: G-C pairs are held together by three hydrogen bonds (NH2 to C=O, ring N to ring NH, C=O to NH2), whereas A-T pairs have only two hydrogen bonds.",
      "result": "G-C pairs have 3 H-bonds, A-T pairs have 2 H-bonds."
    }
  },
  {
    "question_id": "ch50_q16",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Compare the molecular structures of adenosine and adenosine monophosphate (AMP). Identify which statement correctly distinguishes between a nucleoside and a nucleotide.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H](O)[C@H]3O.NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](COP(=O)(O)O)[C@@H](O)[C@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Adenosine is a nucleotide because it is phosphorylated.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Adenosine is a nucleotide because it contains a purine base linked to a ribose ring.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "AMP is a nucleotide because it contains a phosphate group esterified at C5' of the ribose ring.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "AMP is a nucleoside because it has no phosphate group.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing nucleosides and nucleotides.",
      "process": "Step 1: A nucleoside consists of a nitrogenous purine or pyrimidine base linked via a beta-N-glycosidic bond to a pentose sugar (ribose or deoxyribose).\\nStep 2: A nucleotide is a nucleoside that has a phosphate group esterified to one of the sugar hydroxyl groups (typically C5' or C3').\\nStep 3: Adenosine is a nucleoside, while AMP (with a phosphate at C5') is a nucleotide.",
      "result": "Phosphorylation of the sugar makes a nucleoside into a nucleotide."
    }
  },
  {
    "question_id": "ch50_q17",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Easy",
    "question_text": "If a template strand of DNA has the sequence 5'-A-C-G-T-A-G-C-3', what is the sequence of the complementary strand, written in the standard 5' to 3' direction?",
    "options": [
      {
        "option_id": "A",
        "text": "5'-T-G-C-A-T-C-G-3'",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "5'-A-C-G-T-A-G-C-3'",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5'-C-G-T-A-C-G-T-3'",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5'-G-C-T-A-C-G-T-3'",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Determining DNA complementary strand sequence.",
      "process": "Step 1: Write down the complementary bases for each position (A-T, C-G, G-C, T-A). The complementary sequence is 3'-T-G-C-A-T-C-G-5'.\\nStep 2: Reverse the sequence to write it in the standard 5' to 3' direction.\\nStep 3: This yields 5'-G-C-T-A-C-G-T-3'.",
      "result": "The complementary sequence is 5'-G-C-T-A-C-G-T-3'."
    }
  },
  {
    "question_id": "ch50_q18",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "Explain how dideoxynucleotides (ddNTPs) function to terminate DNA synthesis in the Sanger dideoxy sequencing method.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Dideoxynucleotides lack the nitrogenous base, creating abasic sites.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Dideoxynucleotides (ddNTPs) lack the 3'-OH group, preventing further phosphodiester bond formation and terminating the chain.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Dideoxynucleotides carry a triphosphate group on the 3' position.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Dideoxynucleotides lack the 2'-OH group, converting DNA into RNA.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sanger sequencing mechanism.",
      "process": "Step 1: DNA polymerase requires a free 3'-OH group on the growing primer strand to perform nucleophilic attack on incoming dNTPs.\\nStep 2: Sanger sequencing introduces dideoxynucleotides (ddNTPs) which lack oxygen at both C2' and C3'.\\nStep 3: Incorporation of a ddNTP terminates the chain because there is no 3'-OH to link to the next nucleotide.",
      "result": "Lack of a 3'-OH terminates the DNA chain."
    }
  },
  {
    "question_id": "ch50_q19",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "In solid-phase DNA synthesis using the phosphoramidite method, what is the first step of each coupling cycle?",
    "question_smiles": "COc1ccc(cc1)C(c2ccccc2)(c3ccc(cc3)OC)OCC4OC(N5C=NC6=C5N=CN=C6N)C(O)C4",
    "options": [
      {
        "option_id": "A",
        "text": "Oxidation of the phosphite triester intermediate using sulfur dioxide.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Activation of the phosphoramidite phosphorus atom using a strong Lewis base.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acid-catalyzed cleavage of the dimethoxytrityl (DMT) ether protecting group on C5' using trichloroacetic acid.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Deprotection of the cyanoethyl protecting group using liquid ammonia.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Chemical DNA synthesis coupling cycle.",
      "process": "Step 1: The solid-phase support holds a nucleoside protected at C5' with a dimethoxytrityl (DMT) group.\\nStep 2: The cycle begins with deprotection of C5' by treatment with an acid (like trichloroacetic acid) to yield a free C5'-OH group.\\nStep 3: This is followed by coupling with a protected phosphoramidite monomer activated by tetrazole.",
      "result": "The cycle starts with acid-catalyzed DMT cleavage at C5'."
    }
  },
  {
    "question_id": "ch50_q20",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Determine the correct Watson-Crick base-pairing partners and their corresponding hydrogen bond counts in a DNA double helix.",
    "question_smiles": "Nc1ncnc2[nH]cnc12.O=C1NC(=O)C(C)=CN1",
    "options": [
      {
        "option_id": "A",
        "text": "Adenine pairs with Thymine via 3 hydrogen bonds; Guanine pairs with Cytosine via 2 hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Adenine pairs with Cytosine via 2 hydrogen bonds; Guanine pairs with Thymine via 3 hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Adenine pairs with Thymine via 2 hydrogen bonds; Guanine pairs with Cytosine via 3 hydrogen bonds.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Adenine pairs with Uracil via 3 hydrogen bonds in double-stranded DNA.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Watson-Crick base pairing hydrogen bonds.",
      "process": "Step 1: The purine base Adenine pairs specifically with the pyrimidine base Thymine.\\nStep 2: The purine base Guanine pairs specifically with the pyrimidine base Cytosine.\\nStep 3: G-C pairs are held together by three hydrogen bonds (NH2 to C=O, ring N to ring NH, C=O to NH2), whereas A-T pairs have only two hydrogen bonds.",
      "result": "G-C pairs have 3 H-bonds, A-T pairs have 2 H-bonds."
    }
  },
  {
    "question_id": "ch50_q21",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Compare the molecular structures of adenosine and adenosine monophosphate (AMP). Identify which statement correctly distinguishes between a nucleoside and a nucleotide.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H](O)[C@H]3O.NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](COP(=O)(O)O)[C@@H](O)[C@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "AMP is a nucleoside because it has no phosphate group.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "AMP is a nucleotide because it contains a phosphate group esterified at C5' of the ribose ring.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Adenosine is a nucleotide because it is phosphorylated.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Adenosine is a nucleotide because it contains a purine base linked to a ribose ring.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing nucleosides and nucleotides.",
      "process": "Step 1: A nucleoside consists of a nitrogenous purine or pyrimidine base linked via a beta-N-glycosidic bond to a pentose sugar (ribose or deoxyribose).\\nStep 2: A nucleotide is a nucleoside that has a phosphate group esterified to one of the sugar hydroxyl groups (typically C5' or C3').\\nStep 3: Adenosine is a nucleoside, while AMP (with a phosphate at C5') is a nucleotide.",
      "result": "Phosphorylation of the sugar makes a nucleoside into a nucleotide."
    }
  },
  {
    "question_id": "ch50_q22",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Easy",
    "question_text": "If a template strand of DNA has the sequence 5'-A-C-G-T-A-G-C-3', what is the sequence of the complementary strand, written in the standard 5' to 3' direction?",
    "options": [
      {
        "option_id": "A",
        "text": "5'-C-G-T-A-C-G-T-3'",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "5'-A-C-G-T-A-G-C-3'",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5'-T-G-C-A-T-C-G-3'",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5'-G-C-T-A-C-G-T-3'",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Determining DNA complementary strand sequence.",
      "process": "Step 1: Write down the complementary bases for each position (A-T, C-G, G-C, T-A). The complementary sequence is 3'-T-G-C-A-T-C-G-5'.\\nStep 2: Reverse the sequence to write it in the standard 5' to 3' direction.\\nStep 3: This yields 5'-G-C-T-A-C-G-T-3'.",
      "result": "The complementary sequence is 5'-G-C-T-A-C-G-T-3'."
    }
  },
  {
    "question_id": "ch50_q23",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "Explain how dideoxynucleotides (ddNTPs) function to terminate DNA synthesis in the Sanger dideoxy sequencing method.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Dideoxynucleotides lack the nitrogenous base, creating abasic sites.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Dideoxynucleotides lack the 2'-OH group, converting DNA into RNA.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dideoxynucleotides (ddNTPs) lack the 3'-OH group, preventing further phosphodiester bond formation and terminating the chain.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Dideoxynucleotides carry a triphosphate group on the 3' position.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sanger sequencing mechanism.",
      "process": "Step 1: DNA polymerase requires a free 3'-OH group on the growing primer strand to perform nucleophilic attack on incoming dNTPs.\\nStep 2: Sanger sequencing introduces dideoxynucleotides (ddNTPs) which lack oxygen at both C2' and C3'.\\nStep 3: Incorporation of a ddNTP terminates the chain because there is no 3'-OH to link to the next nucleotide.",
      "result": "Lack of a 3'-OH terminates the DNA chain."
    }
  },
  {
    "question_id": "ch50_q24",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "In solid-phase DNA synthesis using the phosphoramidite method, what is the first step of each coupling cycle?",
    "question_smiles": "COc1ccc(cc1)C(c2ccccc2)(c3ccc(cc3)OC)OCC4OC(N5C=NC6=C5N=CN=C6N)C(O)C4",
    "options": [
      {
        "option_id": "A",
        "text": "Oxidation of the phosphite triester intermediate using sulfur dioxide.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Activation of the phosphoramidite phosphorus atom using a strong Lewis base.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acid-catalyzed cleavage of the dimethoxytrityl (DMT) ether protecting group on C5' using trichloroacetic acid.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Deprotection of the cyanoethyl protecting group using liquid ammonia.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Chemical DNA synthesis coupling cycle.",
      "process": "Step 1: The solid-phase support holds a nucleoside protected at C5' with a dimethoxytrityl (DMT) group.\\nStep 2: The cycle begins with deprotection of C5' by treatment with an acid (like trichloroacetic acid) to yield a free C5'-OH group.\\nStep 3: This is followed by coupling with a protected phosphoramidite monomer activated by tetrazole.",
      "result": "The cycle starts with acid-catalyzed DMT cleavage at C5'."
    }
  },
  {
    "question_id": "ch50_q25",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Determine the correct Watson-Crick base-pairing partners and their corresponding hydrogen bond counts in a DNA double helix.",
    "question_smiles": "Nc1ncnc2[nH]cnc12.O=C1NC(=O)C(C)=CN1",
    "options": [
      {
        "option_id": "A",
        "text": "Adenine pairs with Thymine via 3 hydrogen bonds; Guanine pairs with Cytosine via 2 hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Adenine pairs with Cytosine via 2 hydrogen bonds; Guanine pairs with Thymine via 3 hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Adenine pairs with Thymine via 2 hydrogen bonds; Guanine pairs with Cytosine via 3 hydrogen bonds.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Adenine pairs with Uracil via 3 hydrogen bonds in double-stranded DNA.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Watson-Crick base pairing hydrogen bonds.",
      "process": "Step 1: The purine base Adenine pairs specifically with the pyrimidine base Thymine.\\nStep 2: The purine base Guanine pairs specifically with the pyrimidine base Cytosine.\\nStep 3: G-C pairs are held together by three hydrogen bonds (NH2 to C=O, ring N to ring NH, C=O to NH2), whereas A-T pairs have only two hydrogen bonds.",
      "result": "G-C pairs have 3 H-bonds, A-T pairs have 2 H-bonds."
    }
  },
  {
    "question_id": "ch50_q26",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Compare the molecular structures of adenosine and adenosine monophosphate (AMP). Identify which statement correctly distinguishes between a nucleoside and a nucleotide.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H](O)[C@H]3O.NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](COP(=O)(O)O)[C@@H](O)[C@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "AMP is a nucleoside because it has no phosphate group.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "AMP is a nucleotide because it contains a phosphate group esterified at C5' of the ribose ring.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Adenosine is a nucleotide because it is phosphorylated.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Adenosine is a nucleotide because it contains a purine base linked to a ribose ring.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing nucleosides and nucleotides.",
      "process": "Step 1: A nucleoside consists of a nitrogenous purine or pyrimidine base linked via a beta-N-glycosidic bond to a pentose sugar (ribose or deoxyribose).\\nStep 2: A nucleotide is a nucleoside that has a phosphate group esterified to one of the sugar hydroxyl groups (typically C5' or C3').\\nStep 3: Adenosine is a nucleoside, while AMP (with a phosphate at C5') is a nucleotide.",
      "result": "Phosphorylation of the sugar makes a nucleoside into a nucleotide."
    }
  },
  {
    "question_id": "ch50_q27",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Easy",
    "question_text": "If a template strand of DNA has the sequence 5'-A-C-G-T-A-G-C-3', what is the sequence of the complementary strand, written in the standard 5' to 3' direction?",
    "options": [
      {
        "option_id": "A",
        "text": "5'-G-C-T-A-C-G-T-3'",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "5'-C-G-T-A-C-G-T-3'",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5'-T-G-C-A-T-C-G-3'",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5'-A-C-G-T-A-G-C-3'",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determining DNA complementary strand sequence.",
      "process": "Step 1: Write down the complementary bases for each position (A-T, C-G, G-C, T-A). The complementary sequence is 3'-T-G-C-A-T-C-G-5'.\\nStep 2: Reverse the sequence to write it in the standard 5' to 3' direction.\\nStep 3: This yields 5'-G-C-T-A-C-G-T-3'.",
      "result": "The complementary sequence is 5'-G-C-T-A-C-G-T-3'."
    }
  },
  {
    "question_id": "ch50_q28",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "Explain how dideoxynucleotides (ddNTPs) function to terminate DNA synthesis in the Sanger dideoxy sequencing method.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Dideoxynucleotides (ddNTPs) lack the 3'-OH group, preventing further phosphodiester bond formation and terminating the chain.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Dideoxynucleotides carry a triphosphate group on the 3' position.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dideoxynucleotides lack the 2'-OH group, converting DNA into RNA.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Dideoxynucleotides lack the nitrogenous base, creating abasic sites.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sanger sequencing mechanism.",
      "process": "Step 1: DNA polymerase requires a free 3'-OH group on the growing primer strand to perform nucleophilic attack on incoming dNTPs.\\nStep 2: Sanger sequencing introduces dideoxynucleotides (ddNTPs) which lack oxygen at both C2' and C3'.\\nStep 3: Incorporation of a ddNTP terminates the chain because there is no 3'-OH to link to the next nucleotide.",
      "result": "Lack of a 3'-OH terminates the DNA chain."
    }
  },
  {
    "question_id": "ch50_q29",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "In solid-phase DNA synthesis using the phosphoramidite method, what is the first step of each coupling cycle?",
    "question_smiles": "COc1ccc(cc1)C(c2ccccc2)(c3ccc(cc3)OC)OCC4OC(N5C=NC6=C5N=CN=C6N)C(O)C4",
    "options": [
      {
        "option_id": "A",
        "text": "Activation of the phosphoramidite phosphorus atom using a strong Lewis base.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Oxidation of the phosphite triester intermediate using sulfur dioxide.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acid-catalyzed cleavage of the dimethoxytrityl (DMT) ether protecting group on C5' using trichloroacetic acid.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Deprotection of the cyanoethyl protecting group using liquid ammonia.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Chemical DNA synthesis coupling cycle.",
      "process": "Step 1: The solid-phase support holds a nucleoside protected at C5' with a dimethoxytrityl (DMT) group.\\nStep 2: The cycle begins with deprotection of C5' by treatment with an acid (like trichloroacetic acid) to yield a free C5'-OH group.\\nStep 3: This is followed by coupling with a protected phosphoramidite monomer activated by tetrazole.",
      "result": "The cycle starts with acid-catalyzed DMT cleavage at C5'."
    }
  },
  {
    "question_id": "ch50_q30",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Determine the correct Watson-Crick base-pairing partners and their corresponding hydrogen bond counts in a DNA double helix.",
    "question_smiles": "Nc1ncnc2[nH]cnc12.O=C1NC(=O)C(C)=CN1",
    "options": [
      {
        "option_id": "A",
        "text": "Adenine pairs with Thymine via 2 hydrogen bonds; Guanine pairs with Cytosine via 3 hydrogen bonds.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Adenine pairs with Thymine via 3 hydrogen bonds; Guanine pairs with Cytosine via 2 hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Adenine pairs with Uracil via 3 hydrogen bonds in double-stranded DNA.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Adenine pairs with Cytosine via 2 hydrogen bonds; Guanine pairs with Thymine via 3 hydrogen bonds.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Watson-Crick base pairing hydrogen bonds.",
      "process": "Step 1: The purine base Adenine pairs specifically with the pyrimidine base Thymine.\\nStep 2: The purine base Guanine pairs specifically with the pyrimidine base Cytosine.\\nStep 3: G-C pairs are held together by three hydrogen bonds (NH2 to C=O, ring N to ring NH, C=O to NH2), whereas A-T pairs have only two hydrogen bonds.",
      "result": "G-C pairs have 3 H-bonds, A-T pairs have 2 H-bonds."
    }
  },
  {
    "question_id": "ch50_q31",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Compare the molecular structures of adenosine and adenosine monophosphate (AMP). Identify which statement correctly distinguishes between a nucleoside and a nucleotide.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H](O)[C@H]3O.NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](COP(=O)(O)O)[C@@H](O)[C@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "AMP is a nucleotide because it contains a phosphate group esterified at C5' of the ribose ring.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "AMP is a nucleoside because it has no phosphate group.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Adenosine is a nucleotide because it is phosphorylated.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Adenosine is a nucleotide because it contains a purine base linked to a ribose ring.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing nucleosides and nucleotides.",
      "process": "Step 1: A nucleoside consists of a nitrogenous purine or pyrimidine base linked via a beta-N-glycosidic bond to a pentose sugar (ribose or deoxyribose).\\nStep 2: A nucleotide is a nucleoside that has a phosphate group esterified to one of the sugar hydroxyl groups (typically C5' or C3').\\nStep 3: Adenosine is a nucleoside, while AMP (with a phosphate at C5') is a nucleotide.",
      "result": "Phosphorylation of the sugar makes a nucleoside into a nucleotide."
    }
  },
  {
    "question_id": "ch50_q32",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Easy",
    "question_text": "If a template strand of DNA has the sequence 5'-A-C-G-T-A-G-C-3', what is the sequence of the complementary strand, written in the standard 5' to 3' direction?",
    "options": [
      {
        "option_id": "A",
        "text": "5'-A-C-G-T-A-G-C-3'",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "5'-G-C-T-A-C-G-T-3'",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "5'-T-G-C-A-T-C-G-3'",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5'-C-G-T-A-C-G-T-3'",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determining DNA complementary strand sequence.",
      "process": "Step 1: Write down the complementary bases for each position (A-T, C-G, G-C, T-A). The complementary sequence is 3'-T-G-C-A-T-C-G-5'.\\nStep 2: Reverse the sequence to write it in the standard 5' to 3' direction.\\nStep 3: This yields 5'-G-C-T-A-C-G-T-3'.",
      "result": "The complementary sequence is 5'-G-C-T-A-C-G-T-3'."
    }
  },
  {
    "question_id": "ch50_q33",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "Explain how dideoxynucleotides (ddNTPs) function to terminate DNA synthesis in the Sanger dideoxy sequencing method.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Dideoxynucleotides lack the 2'-OH group, converting DNA into RNA.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Dideoxynucleotides lack the nitrogenous base, creating abasic sites.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dideoxynucleotides (ddNTPs) lack the 3'-OH group, preventing further phosphodiester bond formation and terminating the chain.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Dideoxynucleotides carry a triphosphate group on the 3' position.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sanger sequencing mechanism.",
      "process": "Step 1: DNA polymerase requires a free 3'-OH group on the growing primer strand to perform nucleophilic attack on incoming dNTPs.\\nStep 2: Sanger sequencing introduces dideoxynucleotides (ddNTPs) which lack oxygen at both C2' and C3'.\\nStep 3: Incorporation of a ddNTP terminates the chain because there is no 3'-OH to link to the next nucleotide.",
      "result": "Lack of a 3'-OH terminates the DNA chain."
    }
  },
  {
    "question_id": "ch50_q34",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "In solid-phase DNA synthesis using the phosphoramidite method, what is the first step of each coupling cycle?",
    "question_smiles": "COc1ccc(cc1)C(c2ccccc2)(c3ccc(cc3)OC)OCC4OC(N5C=NC6=C5N=CN=C6N)C(O)C4",
    "options": [
      {
        "option_id": "A",
        "text": "Deprotection of the cyanoethyl protecting group using liquid ammonia.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Activation of the phosphoramidite phosphorus atom using a strong Lewis base.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acid-catalyzed cleavage of the dimethoxytrityl (DMT) ether protecting group on C5' using trichloroacetic acid.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Oxidation of the phosphite triester intermediate using sulfur dioxide.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Chemical DNA synthesis coupling cycle.",
      "process": "Step 1: The solid-phase support holds a nucleoside protected at C5' with a dimethoxytrityl (DMT) group.\\nStep 2: The cycle begins with deprotection of C5' by treatment with an acid (like trichloroacetic acid) to yield a free C5'-OH group.\\nStep 3: This is followed by coupling with a protected phosphoramidite monomer activated by tetrazole.",
      "result": "The cycle starts with acid-catalyzed DMT cleavage at C5'."
    }
  },
  {
    "question_id": "ch50_q35",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Determine the correct Watson-Crick base-pairing partners and their corresponding hydrogen bond counts in a DNA double helix.",
    "question_smiles": "Nc1ncnc2[nH]cnc12.O=C1NC(=O)C(C)=CN1",
    "options": [
      {
        "option_id": "A",
        "text": "Adenine pairs with Thymine via 2 hydrogen bonds; Guanine pairs with Cytosine via 3 hydrogen bonds.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Adenine pairs with Thymine via 3 hydrogen bonds; Guanine pairs with Cytosine via 2 hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Adenine pairs with Uracil via 3 hydrogen bonds in double-stranded DNA.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Adenine pairs with Cytosine via 2 hydrogen bonds; Guanine pairs with Thymine via 3 hydrogen bonds.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Watson-Crick base pairing hydrogen bonds.",
      "process": "Step 1: The purine base Adenine pairs specifically with the pyrimidine base Thymine.\\nStep 2: The purine base Guanine pairs specifically with the pyrimidine base Cytosine.\\nStep 3: G-C pairs are held together by three hydrogen bonds (NH2 to C=O, ring N to ring NH, C=O to NH2), whereas A-T pairs have only two hydrogen bonds.",
      "result": "G-C pairs have 3 H-bonds, A-T pairs have 2 H-bonds."
    }
  },
  {
    "question_id": "ch50_q36",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Compare the molecular structures of adenosine and adenosine monophosphate (AMP). Identify which statement correctly distinguishes between a nucleoside and a nucleotide.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H](O)[C@H]3O.NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](COP(=O)(O)O)[C@@H](O)[C@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Adenosine is a nucleotide because it contains a purine base linked to a ribose ring.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Adenosine is a nucleotide because it is phosphorylated.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "AMP is a nucleoside because it has no phosphate group.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "AMP is a nucleotide because it contains a phosphate group esterified at C5' of the ribose ring.",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Distinguishing nucleosides and nucleotides.",
      "process": "Step 1: A nucleoside consists of a nitrogenous purine or pyrimidine base linked via a beta-N-glycosidic bond to a pentose sugar (ribose or deoxyribose).\\nStep 2: A nucleotide is a nucleoside that has a phosphate group esterified to one of the sugar hydroxyl groups (typically C5' or C3').\\nStep 3: Adenosine is a nucleoside, while AMP (with a phosphate at C5') is a nucleotide.",
      "result": "Phosphorylation of the sugar makes a nucleoside into a nucleotide."
    }
  },
  {
    "question_id": "ch50_q37",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Easy",
    "question_text": "If a template strand of DNA has the sequence 5'-A-C-G-T-A-G-C-3', what is the sequence of the complementary strand, written in the standard 5' to 3' direction?",
    "options": [
      {
        "option_id": "A",
        "text": "5'-T-G-C-A-T-C-G-3'",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "5'-C-G-T-A-C-G-T-3'",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5'-G-C-T-A-C-G-T-3'",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "5'-A-C-G-T-A-G-C-3'",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determining DNA complementary strand sequence.",
      "process": "Step 1: Write down the complementary bases for each position (A-T, C-G, G-C, T-A). The complementary sequence is 3'-T-G-C-A-T-C-G-5'.\\nStep 2: Reverse the sequence to write it in the standard 5' to 3' direction.\\nStep 3: This yields 5'-G-C-T-A-C-G-T-3'.",
      "result": "The complementary sequence is 5'-G-C-T-A-C-G-T-3'."
    }
  },
  {
    "question_id": "ch50_q38",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "Explain how dideoxynucleotides (ddNTPs) function to terminate DNA synthesis in the Sanger dideoxy sequencing method.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Dideoxynucleotides (ddNTPs) lack the 3'-OH group, preventing further phosphodiester bond formation and terminating the chain.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Dideoxynucleotides lack the 2'-OH group, converting DNA into RNA.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dideoxynucleotides lack the nitrogenous base, creating abasic sites.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Dideoxynucleotides carry a triphosphate group on the 3' position.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sanger sequencing mechanism.",
      "process": "Step 1: DNA polymerase requires a free 3'-OH group on the growing primer strand to perform nucleophilic attack on incoming dNTPs.\\nStep 2: Sanger sequencing introduces dideoxynucleotides (ddNTPs) which lack oxygen at both C2' and C3'.\\nStep 3: Incorporation of a ddNTP terminates the chain because there is no 3'-OH to link to the next nucleotide.",
      "result": "Lack of a 3'-OH terminates the DNA chain."
    }
  },
  {
    "question_id": "ch50_q39",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "In solid-phase DNA synthesis using the phosphoramidite method, what is the first step of each coupling cycle?",
    "question_smiles": "COc1ccc(cc1)C(c2ccccc2)(c3ccc(cc3)OC)OCC4OC(N5C=NC6=C5N=CN=C6N)C(O)C4",
    "options": [
      {
        "option_id": "A",
        "text": "Activation of the phosphoramidite phosphorus atom using a strong Lewis base.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Deprotection of the cyanoethyl protecting group using liquid ammonia.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Oxidation of the phosphite triester intermediate using sulfur dioxide.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acid-catalyzed cleavage of the dimethoxytrityl (DMT) ether protecting group on C5' using trichloroacetic acid.",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Chemical DNA synthesis coupling cycle.",
      "process": "Step 1: The solid-phase support holds a nucleoside protected at C5' with a dimethoxytrityl (DMT) group.\\nStep 2: The cycle begins with deprotection of C5' by treatment with an acid (like trichloroacetic acid) to yield a free C5'-OH group.\\nStep 3: This is followed by coupling with a protected phosphoramidite monomer activated by tetrazole.",
      "result": "The cycle starts with acid-catalyzed DMT cleavage at C5'."
    }
  },
  {
    "question_id": "ch50_q40",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Determine the correct Watson-Crick base-pairing partners and their corresponding hydrogen bond counts in a DNA double helix.",
    "question_smiles": "Nc1ncnc2[nH]cnc12.O=C1NC(=O)C(C)=CN1",
    "options": [
      {
        "option_id": "A",
        "text": "Adenine pairs with Thymine via 2 hydrogen bonds; Guanine pairs with Cytosine via 3 hydrogen bonds.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Adenine pairs with Cytosine via 2 hydrogen bonds; Guanine pairs with Thymine via 3 hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Adenine pairs with Thymine via 3 hydrogen bonds; Guanine pairs with Cytosine via 2 hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Adenine pairs with Uracil via 3 hydrogen bonds in double-stranded DNA.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Watson-Crick base pairing hydrogen bonds.",
      "process": "Step 1: The purine base Adenine pairs specifically with the pyrimidine base Thymine.\\nStep 2: The purine base Guanine pairs specifically with the pyrimidine base Cytosine.\\nStep 3: G-C pairs are held together by three hydrogen bonds (NH2 to C=O, ring N to ring NH, C=O to NH2), whereas A-T pairs have only two hydrogen bonds.",
      "result": "G-C pairs have 3 H-bonds, A-T pairs have 2 H-bonds."
    }
  },
  {
    "question_id": "ch50_q41",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Compare the molecular structures of adenosine and adenosine monophosphate (AMP). Identify which statement correctly distinguishes between a nucleoside and a nucleotide.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H](O)[C@H]3O.NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](COP(=O)(O)O)[C@@H](O)[C@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Adenosine is a nucleotide because it contains a purine base linked to a ribose ring.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "AMP is a nucleotide because it contains a phosphate group esterified at C5' of the ribose ring.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Adenosine is a nucleotide because it is phosphorylated.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "AMP is a nucleoside because it has no phosphate group.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing nucleosides and nucleotides.",
      "process": "Step 1: A nucleoside consists of a nitrogenous purine or pyrimidine base linked via a beta-N-glycosidic bond to a pentose sugar (ribose or deoxyribose).\\nStep 2: A nucleotide is a nucleoside that has a phosphate group esterified to one of the sugar hydroxyl groups (typically C5' or C3').\\nStep 3: Adenosine is a nucleoside, while AMP (with a phosphate at C5') is a nucleotide.",
      "result": "Phosphorylation of the sugar makes a nucleoside into a nucleotide."
    }
  },
  {
    "question_id": "ch50_q42",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Easy",
    "question_text": "If a template strand of DNA has the sequence 5'-A-C-G-T-A-G-C-3', what is the sequence of the complementary strand, written in the standard 5' to 3' direction?",
    "options": [
      {
        "option_id": "A",
        "text": "5'-T-G-C-A-T-C-G-3'",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "5'-A-C-G-T-A-G-C-3'",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5'-G-C-T-A-C-G-T-3'",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "5'-C-G-T-A-C-G-T-3'",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determining DNA complementary strand sequence.",
      "process": "Step 1: Write down the complementary bases for each position (A-T, C-G, G-C, T-A). The complementary sequence is 3'-T-G-C-A-T-C-G-5'.\\nStep 2: Reverse the sequence to write it in the standard 5' to 3' direction.\\nStep 3: This yields 5'-G-C-T-A-C-G-T-3'.",
      "result": "The complementary sequence is 5'-G-C-T-A-C-G-T-3'."
    }
  },
  {
    "question_id": "ch50_q43",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "Explain how dideoxynucleotides (ddNTPs) function to terminate DNA synthesis in the Sanger dideoxy sequencing method.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Dideoxynucleotides lack the 2'-OH group, converting DNA into RNA.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Dideoxynucleotides (ddNTPs) lack the 3'-OH group, preventing further phosphodiester bond formation and terminating the chain.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Dideoxynucleotides carry a triphosphate group on the 3' position.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Dideoxynucleotides lack the nitrogenous base, creating abasic sites.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sanger sequencing mechanism.",
      "process": "Step 1: DNA polymerase requires a free 3'-OH group on the growing primer strand to perform nucleophilic attack on incoming dNTPs.\\nStep 2: Sanger sequencing introduces dideoxynucleotides (ddNTPs) which lack oxygen at both C2' and C3'.\\nStep 3: Incorporation of a ddNTP terminates the chain because there is no 3'-OH to link to the next nucleotide.",
      "result": "Lack of a 3'-OH terminates the DNA chain."
    }
  },
  {
    "question_id": "ch50_q44",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "In solid-phase DNA synthesis using the phosphoramidite method, what is the first step of each coupling cycle?",
    "question_smiles": "COc1ccc(cc1)C(c2ccccc2)(c3ccc(cc3)OC)OCC4OC(N5C=NC6=C5N=CN=C6N)C(O)C4",
    "options": [
      {
        "option_id": "A",
        "text": "Deprotection of the cyanoethyl protecting group using liquid ammonia.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Acid-catalyzed cleavage of the dimethoxytrityl (DMT) ether protecting group on C5' using trichloroacetic acid.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Oxidation of the phosphite triester intermediate using sulfur dioxide.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Activation of the phosphoramidite phosphorus atom using a strong Lewis base.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Chemical DNA synthesis coupling cycle.",
      "process": "Step 1: The solid-phase support holds a nucleoside protected at C5' with a dimethoxytrityl (DMT) group.\\nStep 2: The cycle begins with deprotection of C5' by treatment with an acid (like trichloroacetic acid) to yield a free C5'-OH group.\\nStep 3: This is followed by coupling with a protected phosphoramidite monomer activated by tetrazole.",
      "result": "The cycle starts with acid-catalyzed DMT cleavage at C5'."
    }
  },
  {
    "question_id": "ch50_q45",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Determine the correct Watson-Crick base-pairing partners and their corresponding hydrogen bond counts in a DNA double helix.",
    "question_smiles": "Nc1ncnc2[nH]cnc12.O=C1NC(=O)C(C)=CN1",
    "options": [
      {
        "option_id": "A",
        "text": "Adenine pairs with Thymine via 2 hydrogen bonds; Guanine pairs with Cytosine via 3 hydrogen bonds.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Adenine pairs with Cytosine via 2 hydrogen bonds; Guanine pairs with Thymine via 3 hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Adenine pairs with Uracil via 3 hydrogen bonds in double-stranded DNA.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Adenine pairs with Thymine via 3 hydrogen bonds; Guanine pairs with Cytosine via 2 hydrogen bonds.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Watson-Crick base pairing hydrogen bonds.",
      "process": "Step 1: The purine base Adenine pairs specifically with the pyrimidine base Thymine.\\nStep 2: The purine base Guanine pairs specifically with the pyrimidine base Cytosine.\\nStep 3: G-C pairs are held together by three hydrogen bonds (NH2 to C=O, ring N to ring NH, C=O to NH2), whereas A-T pairs have only two hydrogen bonds.",
      "result": "G-C pairs have 3 H-bonds, A-T pairs have 2 H-bonds."
    }
  },
  {
    "question_id": "ch50_q46",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Compare the molecular structures of adenosine and adenosine monophosphate (AMP). Identify which statement correctly distinguishes between a nucleoside and a nucleotide.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H](O)[C@H]3O.NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](COP(=O)(O)O)[C@@H](O)[C@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Adenosine is a nucleotide because it is phosphorylated.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "AMP is a nucleotide because it contains a phosphate group esterified at C5' of the ribose ring.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "AMP is a nucleoside because it has no phosphate group.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Adenosine is a nucleotide because it contains a purine base linked to a ribose ring.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing nucleosides and nucleotides.",
      "process": "Step 1: A nucleoside consists of a nitrogenous purine or pyrimidine base linked via a beta-N-glycosidic bond to a pentose sugar (ribose or deoxyribose).\\nStep 2: A nucleotide is a nucleoside that has a phosphate group esterified to one of the sugar hydroxyl groups (typically C5' or C3').\\nStep 3: Adenosine is a nucleoside, while AMP (with a phosphate at C5') is a nucleotide.",
      "result": "Phosphorylation of the sugar makes a nucleoside into a nucleotide."
    }
  },
  {
    "question_id": "ch50_q47",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Easy",
    "question_text": "If a template strand of DNA has the sequence 5'-A-C-G-T-A-G-C-3', what is the sequence of the complementary strand, written in the standard 5' to 3' direction?",
    "options": [
      {
        "option_id": "A",
        "text": "5'-C-G-T-A-C-G-T-3'",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "5'-T-G-C-A-T-C-G-3'",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5'-A-C-G-T-A-G-C-3'",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5'-G-C-T-A-C-G-T-3'",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Determining DNA complementary strand sequence.",
      "process": "Step 1: Write down the complementary bases for each position (A-T, C-G, G-C, T-A). The complementary sequence is 3'-T-G-C-A-T-C-G-5'.\\nStep 2: Reverse the sequence to write it in the standard 5' to 3' direction.\\nStep 3: This yields 5'-G-C-T-A-C-G-T-3'.",
      "result": "The complementary sequence is 5'-G-C-T-A-C-G-T-3'."
    }
  },
  {
    "question_id": "ch50_q48",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "Explain how dideoxynucleotides (ddNTPs) function to terminate DNA synthesis in the Sanger dideoxy sequencing method.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Dideoxynucleotides carry a triphosphate group on the 3' position.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Dideoxynucleotides lack the 2'-OH group, converting DNA into RNA.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dideoxynucleotides lack the nitrogenous base, creating abasic sites.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Dideoxynucleotides (ddNTPs) lack the 3'-OH group, preventing further phosphodiester bond formation and terminating the chain.",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Sanger sequencing mechanism.",
      "process": "Step 1: DNA polymerase requires a free 3'-OH group on the growing primer strand to perform nucleophilic attack on incoming dNTPs.\\nStep 2: Sanger sequencing introduces dideoxynucleotides (ddNTPs) which lack oxygen at both C2' and C3'.\\nStep 3: Incorporation of a ddNTP terminates the chain because there is no 3'-OH to link to the next nucleotide.",
      "result": "Lack of a 3'-OH terminates the DNA chain."
    }
  },
  {
    "question_id": "ch50_q49",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "In solid-phase DNA synthesis using the phosphoramidite method, what is the first step of each coupling cycle?",
    "question_smiles": "COc1ccc(cc1)C(c2ccccc2)(c3ccc(cc3)OC)OCC4OC(N5C=NC6=C5N=CN=C6N)C(O)C4",
    "options": [
      {
        "option_id": "A",
        "text": "Activation of the phosphoramidite phosphorus atom using a strong Lewis base.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Acid-catalyzed cleavage of the dimethoxytrityl (DMT) ether protecting group on C5' using trichloroacetic acid.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Deprotection of the cyanoethyl protecting group using liquid ammonia.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Oxidation of the phosphite triester intermediate using sulfur dioxide.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Chemical DNA synthesis coupling cycle.",
      "process": "Step 1: The solid-phase support holds a nucleoside protected at C5' with a dimethoxytrityl (DMT) group.\\nStep 2: The cycle begins with deprotection of C5' by treatment with an acid (like trichloroacetic acid) to yield a free C5'-OH group.\\nStep 3: This is followed by coupling with a protected phosphoramidite monomer activated by tetrazole.",
      "result": "The cycle starts with acid-catalyzed DMT cleavage at C5'."
    }
  },
  {
    "question_id": "ch50_q50",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Determine the correct Watson-Crick base-pairing partners and their corresponding hydrogen bond counts in a DNA double helix.",
    "question_smiles": "Nc1ncnc2[nH]cnc12.O=C1NC(=O)C(C)=CN1",
    "options": [
      {
        "option_id": "A",
        "text": "Adenine pairs with Thymine via 2 hydrogen bonds; Guanine pairs with Cytosine via 3 hydrogen bonds.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Adenine pairs with Cytosine via 2 hydrogen bonds; Guanine pairs with Thymine via 3 hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Adenine pairs with Uracil via 3 hydrogen bonds in double-stranded DNA.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Adenine pairs with Thymine via 3 hydrogen bonds; Guanine pairs with Cytosine via 2 hydrogen bonds.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Watson-Crick base pairing hydrogen bonds.",
      "process": "Step 1: The purine base Adenine pairs specifically with the pyrimidine base Thymine.\\nStep 2: The purine base Guanine pairs specifically with the pyrimidine base Cytosine.\\nStep 3: G-C pairs are held together by three hydrogen bonds (NH2 to C=O, ring N to ring NH, C=O to NH2), whereas A-T pairs have only two hydrogen bonds.",
      "result": "G-C pairs have 3 H-bonds, A-T pairs have 2 H-bonds."
    }
  },
  {
    "question_id": "ch50_q51",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Compare the molecular structures of adenosine and adenosine monophosphate (AMP). Identify which statement correctly distinguishes between a nucleoside and a nucleotide.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H](O)[C@H]3O.NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](COP(=O)(O)O)[C@@H](O)[C@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "AMP is a nucleoside because it has no phosphate group.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "AMP is a nucleotide because it contains a phosphate group esterified at C5' of the ribose ring.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Adenosine is a nucleotide because it contains a purine base linked to a ribose ring.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Adenosine is a nucleotide because it is phosphorylated.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing nucleosides and nucleotides.",
      "process": "Step 1: A nucleoside consists of a nitrogenous purine or pyrimidine base linked via a beta-N-glycosidic bond to a pentose sugar (ribose or deoxyribose).\\nStep 2: A nucleotide is a nucleoside that has a phosphate group esterified to one of the sugar hydroxyl groups (typically C5' or C3').\\nStep 3: Adenosine is a nucleoside, while AMP (with a phosphate at C5') is a nucleotide.",
      "result": "Phosphorylation of the sugar makes a nucleoside into a nucleotide."
    }
  },
  {
    "question_id": "ch50_q52",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Easy",
    "question_text": "If a template strand of DNA has the sequence 5'-A-C-G-T-A-G-C-3', what is the sequence of the complementary strand, written in the standard 5' to 3' direction?",
    "options": [
      {
        "option_id": "A",
        "text": "5'-C-G-T-A-C-G-T-3'",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "5'-T-G-C-A-T-C-G-3'",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5'-G-C-T-A-C-G-T-3'",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "5'-A-C-G-T-A-G-C-3'",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determining DNA complementary strand sequence.",
      "process": "Step 1: Write down the complementary bases for each position (A-T, C-G, G-C, T-A). The complementary sequence is 3'-T-G-C-A-T-C-G-5'.\\nStep 2: Reverse the sequence to write it in the standard 5' to 3' direction.\\nStep 3: This yields 5'-G-C-T-A-C-G-T-3'.",
      "result": "The complementary sequence is 5'-G-C-T-A-C-G-T-3'."
    }
  },
  {
    "question_id": "ch50_q53",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "Explain how dideoxynucleotides (ddNTPs) function to terminate DNA synthesis in the Sanger dideoxy sequencing method.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Dideoxynucleotides carry a triphosphate group on the 3' position.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Dideoxynucleotides lack the nitrogenous base, creating abasic sites.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dideoxynucleotides lack the 2'-OH group, converting DNA into RNA.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Dideoxynucleotides (ddNTPs) lack the 3'-OH group, preventing further phosphodiester bond formation and terminating the chain.",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Sanger sequencing mechanism.",
      "process": "Step 1: DNA polymerase requires a free 3'-OH group on the growing primer strand to perform nucleophilic attack on incoming dNTPs.\\nStep 2: Sanger sequencing introduces dideoxynucleotides (ddNTPs) which lack oxygen at both C2' and C3'.\\nStep 3: Incorporation of a ddNTP terminates the chain because there is no 3'-OH to link to the next nucleotide.",
      "result": "Lack of a 3'-OH terminates the DNA chain."
    }
  },
  {
    "question_id": "ch50_q54",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "In solid-phase DNA synthesis using the phosphoramidite method, what is the first step of each coupling cycle?",
    "question_smiles": "COc1ccc(cc1)C(c2ccccc2)(c3ccc(cc3)OC)OCC4OC(N5C=NC6=C5N=CN=C6N)C(O)C4",
    "options": [
      {
        "option_id": "A",
        "text": "Activation of the phosphoramidite phosphorus atom using a strong Lewis base.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Deprotection of the cyanoethyl protecting group using liquid ammonia.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Oxidation of the phosphite triester intermediate using sulfur dioxide.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acid-catalyzed cleavage of the dimethoxytrityl (DMT) ether protecting group on C5' using trichloroacetic acid.",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Chemical DNA synthesis coupling cycle.",
      "process": "Step 1: The solid-phase support holds a nucleoside protected at C5' with a dimethoxytrityl (DMT) group.\\nStep 2: The cycle begins with deprotection of C5' by treatment with an acid (like trichloroacetic acid) to yield a free C5'-OH group.\\nStep 3: This is followed by coupling with a protected phosphoramidite monomer activated by tetrazole.",
      "result": "The cycle starts with acid-catalyzed DMT cleavage at C5'."
    }
  },
  {
    "question_id": "ch50_q55",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Determine the correct Watson-Crick base-pairing partners and their corresponding hydrogen bond counts in a DNA double helix.",
    "question_smiles": "Nc1ncnc2[nH]cnc12.O=C1NC(=O)C(C)=CN1",
    "options": [
      {
        "option_id": "A",
        "text": "Adenine pairs with Cytosine via 2 hydrogen bonds; Guanine pairs with Thymine via 3 hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Adenine pairs with Uracil via 3 hydrogen bonds in double-stranded DNA.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Adenine pairs with Thymine via 3 hydrogen bonds; Guanine pairs with Cytosine via 2 hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Adenine pairs with Thymine via 2 hydrogen bonds; Guanine pairs with Cytosine via 3 hydrogen bonds.",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Watson-Crick base pairing hydrogen bonds.",
      "process": "Step 1: The purine base Adenine pairs specifically with the pyrimidine base Thymine.\\nStep 2: The purine base Guanine pairs specifically with the pyrimidine base Cytosine.\\nStep 3: G-C pairs are held together by three hydrogen bonds (NH2 to C=O, ring N to ring NH, C=O to NH2), whereas A-T pairs have only two hydrogen bonds.",
      "result": "G-C pairs have 3 H-bonds, A-T pairs have 2 H-bonds."
    }
  },
  {
    "question_id": "ch50_q56",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Compare the molecular structures of adenosine and adenosine monophosphate (AMP). Identify which statement correctly distinguishes between a nucleoside and a nucleotide.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H](O)[C@H]3O.NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](COP(=O)(O)O)[C@@H](O)[C@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Adenosine is a nucleotide because it contains a purine base linked to a ribose ring.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "AMP is a nucleoside because it has no phosphate group.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Adenosine is a nucleotide because it is phosphorylated.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "AMP is a nucleotide because it contains a phosphate group esterified at C5' of the ribose ring.",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Distinguishing nucleosides and nucleotides.",
      "process": "Step 1: A nucleoside consists of a nitrogenous purine or pyrimidine base linked via a beta-N-glycosidic bond to a pentose sugar (ribose or deoxyribose).\\nStep 2: A nucleotide is a nucleoside that has a phosphate group esterified to one of the sugar hydroxyl groups (typically C5' or C3').\\nStep 3: Adenosine is a nucleoside, while AMP (with a phosphate at C5') is a nucleotide.",
      "result": "Phosphorylation of the sugar makes a nucleoside into a nucleotide."
    }
  },
  {
    "question_id": "ch50_q57",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Easy",
    "question_text": "If a template strand of DNA has the sequence 5'-A-C-G-T-A-G-C-3', what is the sequence of the complementary strand, written in the standard 5' to 3' direction?",
    "options": [
      {
        "option_id": "A",
        "text": "5'-G-C-T-A-C-G-T-3'",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "5'-T-G-C-A-T-C-G-3'",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5'-C-G-T-A-C-G-T-3'",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5'-A-C-G-T-A-G-C-3'",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determining DNA complementary strand sequence.",
      "process": "Step 1: Write down the complementary bases for each position (A-T, C-G, G-C, T-A). The complementary sequence is 3'-T-G-C-A-T-C-G-5'.\\nStep 2: Reverse the sequence to write it in the standard 5' to 3' direction.\\nStep 3: This yields 5'-G-C-T-A-C-G-T-3'.",
      "result": "The complementary sequence is 5'-G-C-T-A-C-G-T-3'."
    }
  },
  {
    "question_id": "ch50_q58",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "Explain how dideoxynucleotides (ddNTPs) function to terminate DNA synthesis in the Sanger dideoxy sequencing method.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Dideoxynucleotides carry a triphosphate group on the 3' position.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Dideoxynucleotides lack the nitrogenous base, creating abasic sites.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dideoxynucleotides lack the 2'-OH group, converting DNA into RNA.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Dideoxynucleotides (ddNTPs) lack the 3'-OH group, preventing further phosphodiester bond formation and terminating the chain.",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Sanger sequencing mechanism.",
      "process": "Step 1: DNA polymerase requires a free 3'-OH group on the growing primer strand to perform nucleophilic attack on incoming dNTPs.\\nStep 2: Sanger sequencing introduces dideoxynucleotides (ddNTPs) which lack oxygen at both C2' and C3'.\\nStep 3: Incorporation of a ddNTP terminates the chain because there is no 3'-OH to link to the next nucleotide.",
      "result": "Lack of a 3'-OH terminates the DNA chain."
    }
  },
  {
    "question_id": "ch50_q59",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "In solid-phase DNA synthesis using the phosphoramidite method, what is the first step of each coupling cycle?",
    "question_smiles": "COc1ccc(cc1)C(c2ccccc2)(c3ccc(cc3)OC)OCC4OC(N5C=NC6=C5N=CN=C6N)C(O)C4",
    "options": [
      {
        "option_id": "A",
        "text": "Deprotection of the cyanoethyl protecting group using liquid ammonia.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Oxidation of the phosphite triester intermediate using sulfur dioxide.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acid-catalyzed cleavage of the dimethoxytrityl (DMT) ether protecting group on C5' using trichloroacetic acid.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Activation of the phosphoramidite phosphorus atom using a strong Lewis base.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Chemical DNA synthesis coupling cycle.",
      "process": "Step 1: The solid-phase support holds a nucleoside protected at C5' with a dimethoxytrityl (DMT) group.\\nStep 2: The cycle begins with deprotection of C5' by treatment with an acid (like trichloroacetic acid) to yield a free C5'-OH group.\\nStep 3: This is followed by coupling with a protected phosphoramidite monomer activated by tetrazole.",
      "result": "The cycle starts with acid-catalyzed DMT cleavage at C5'."
    }
  },
  {
    "question_id": "ch50_q60",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Determine the correct Watson-Crick base-pairing partners and their corresponding hydrogen bond counts in a DNA double helix.",
    "question_smiles": "Nc1ncnc2[nH]cnc12.O=C1NC(=O)C(C)=CN1",
    "options": [
      {
        "option_id": "A",
        "text": "Adenine pairs with Thymine via 3 hydrogen bonds; Guanine pairs with Cytosine via 2 hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Adenine pairs with Thymine via 2 hydrogen bonds; Guanine pairs with Cytosine via 3 hydrogen bonds.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Adenine pairs with Uracil via 3 hydrogen bonds in double-stranded DNA.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Adenine pairs with Cytosine via 2 hydrogen bonds; Guanine pairs with Thymine via 3 hydrogen bonds.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Watson-Crick base pairing hydrogen bonds.",
      "process": "Step 1: The purine base Adenine pairs specifically with the pyrimidine base Thymine.\\nStep 2: The purine base Guanine pairs specifically with the pyrimidine base Cytosine.\\nStep 3: G-C pairs are held together by three hydrogen bonds (NH2 to C=O, ring N to ring NH, C=O to NH2), whereas A-T pairs have only two hydrogen bonds.",
      "result": "G-C pairs have 3 H-bonds, A-T pairs have 2 H-bonds."
    }
  },
  {
    "question_id": "ch50_q61",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Compare the molecular structures of adenosine and adenosine monophosphate (AMP). Identify which statement correctly distinguishes between a nucleoside and a nucleotide.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H](O)[C@H]3O.NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](COP(=O)(O)O)[C@@H](O)[C@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Adenosine is a nucleotide because it is phosphorylated.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Adenosine is a nucleotide because it contains a purine base linked to a ribose ring.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "AMP is a nucleotide because it contains a phosphate group esterified at C5' of the ribose ring.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "AMP is a nucleoside because it has no phosphate group.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing nucleosides and nucleotides.",
      "process": "Step 1: A nucleoside consists of a nitrogenous purine or pyrimidine base linked via a beta-N-glycosidic bond to a pentose sugar (ribose or deoxyribose).\\nStep 2: A nucleotide is a nucleoside that has a phosphate group esterified to one of the sugar hydroxyl groups (typically C5' or C3').\\nStep 3: Adenosine is a nucleoside, while AMP (with a phosphate at C5') is a nucleotide.",
      "result": "Phosphorylation of the sugar makes a nucleoside into a nucleotide."
    }
  },
  {
    "question_id": "ch50_q62",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Easy",
    "question_text": "If a template strand of DNA has the sequence 5'-A-C-G-T-A-G-C-3', what is the sequence of the complementary strand, written in the standard 5' to 3' direction?",
    "options": [
      {
        "option_id": "A",
        "text": "5'-A-C-G-T-A-G-C-3'",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "5'-T-G-C-A-T-C-G-3'",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5'-C-G-T-A-C-G-T-3'",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5'-G-C-T-A-C-G-T-3'",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Determining DNA complementary strand sequence.",
      "process": "Step 1: Write down the complementary bases for each position (A-T, C-G, G-C, T-A). The complementary sequence is 3'-T-G-C-A-T-C-G-5'.\\nStep 2: Reverse the sequence to write it in the standard 5' to 3' direction.\\nStep 3: This yields 5'-G-C-T-A-C-G-T-3'.",
      "result": "The complementary sequence is 5'-G-C-T-A-C-G-T-3'."
    }
  },
  {
    "question_id": "ch50_q63",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "Explain how dideoxynucleotides (ddNTPs) function to terminate DNA synthesis in the Sanger dideoxy sequencing method.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Dideoxynucleotides carry a triphosphate group on the 3' position.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Dideoxynucleotides lack the nitrogenous base, creating abasic sites.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dideoxynucleotides (ddNTPs) lack the 3'-OH group, preventing further phosphodiester bond formation and terminating the chain.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Dideoxynucleotides lack the 2'-OH group, converting DNA into RNA.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sanger sequencing mechanism.",
      "process": "Step 1: DNA polymerase requires a free 3'-OH group on the growing primer strand to perform nucleophilic attack on incoming dNTPs.\\nStep 2: Sanger sequencing introduces dideoxynucleotides (ddNTPs) which lack oxygen at both C2' and C3'.\\nStep 3: Incorporation of a ddNTP terminates the chain because there is no 3'-OH to link to the next nucleotide.",
      "result": "Lack of a 3'-OH terminates the DNA chain."
    }
  },
  {
    "question_id": "ch50_q64",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "In solid-phase DNA synthesis using the phosphoramidite method, what is the first step of each coupling cycle?",
    "question_smiles": "COc1ccc(cc1)C(c2ccccc2)(c3ccc(cc3)OC)OCC4OC(N5C=NC6=C5N=CN=C6N)C(O)C4",
    "options": [
      {
        "option_id": "A",
        "text": "Oxidation of the phosphite triester intermediate using sulfur dioxide.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Activation of the phosphoramidite phosphorus atom using a strong Lewis base.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acid-catalyzed cleavage of the dimethoxytrityl (DMT) ether protecting group on C5' using trichloroacetic acid.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Deprotection of the cyanoethyl protecting group using liquid ammonia.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Chemical DNA synthesis coupling cycle.",
      "process": "Step 1: The solid-phase support holds a nucleoside protected at C5' with a dimethoxytrityl (DMT) group.\\nStep 2: The cycle begins with deprotection of C5' by treatment with an acid (like trichloroacetic acid) to yield a free C5'-OH group.\\nStep 3: This is followed by coupling with a protected phosphoramidite monomer activated by tetrazole.",
      "result": "The cycle starts with acid-catalyzed DMT cleavage at C5'."
    }
  },
  {
    "question_id": "ch50_q65",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Determine the correct Watson-Crick base-pairing partners and their corresponding hydrogen bond counts in a DNA double helix.",
    "question_smiles": "Nc1ncnc2[nH]cnc12.O=C1NC(=O)C(C)=CN1",
    "options": [
      {
        "option_id": "A",
        "text": "Adenine pairs with Thymine via 2 hydrogen bonds; Guanine pairs with Cytosine via 3 hydrogen bonds.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Adenine pairs with Cytosine via 2 hydrogen bonds; Guanine pairs with Thymine via 3 hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Adenine pairs with Thymine via 3 hydrogen bonds; Guanine pairs with Cytosine via 2 hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Adenine pairs with Uracil via 3 hydrogen bonds in double-stranded DNA.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Watson-Crick base pairing hydrogen bonds.",
      "process": "Step 1: The purine base Adenine pairs specifically with the pyrimidine base Thymine.\\nStep 2: The purine base Guanine pairs specifically with the pyrimidine base Cytosine.\\nStep 3: G-C pairs are held together by three hydrogen bonds (NH2 to C=O, ring N to ring NH, C=O to NH2), whereas A-T pairs have only two hydrogen bonds.",
      "result": "G-C pairs have 3 H-bonds, A-T pairs have 2 H-bonds."
    }
  },
  {
    "question_id": "ch50_q66",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Compare the molecular structures of adenosine and adenosine monophosphate (AMP). Identify which statement correctly distinguishes between a nucleoside and a nucleotide.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H](O)[C@H]3O.NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](COP(=O)(O)O)[C@@H](O)[C@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Adenosine is a nucleotide because it is phosphorylated.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "AMP is a nucleotide because it contains a phosphate group esterified at C5' of the ribose ring.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Adenosine is a nucleotide because it contains a purine base linked to a ribose ring.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "AMP is a nucleoside because it has no phosphate group.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing nucleosides and nucleotides.",
      "process": "Step 1: A nucleoside consists of a nitrogenous purine or pyrimidine base linked via a beta-N-glycosidic bond to a pentose sugar (ribose or deoxyribose).\\nStep 2: A nucleotide is a nucleoside that has a phosphate group esterified to one of the sugar hydroxyl groups (typically C5' or C3').\\nStep 3: Adenosine is a nucleoside, while AMP (with a phosphate at C5') is a nucleotide.",
      "result": "Phosphorylation of the sugar makes a nucleoside into a nucleotide."
    }
  },
  {
    "question_id": "ch50_q67",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Easy",
    "question_text": "If a template strand of DNA has the sequence 5'-A-C-G-T-A-G-C-3', what is the sequence of the complementary strand, written in the standard 5' to 3' direction?",
    "options": [
      {
        "option_id": "A",
        "text": "5'-A-C-G-T-A-G-C-3'",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "5'-G-C-T-A-C-G-T-3'",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "5'-T-G-C-A-T-C-G-3'",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5'-C-G-T-A-C-G-T-3'",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determining DNA complementary strand sequence.",
      "process": "Step 1: Write down the complementary bases for each position (A-T, C-G, G-C, T-A). The complementary sequence is 3'-T-G-C-A-T-C-G-5'.\\nStep 2: Reverse the sequence to write it in the standard 5' to 3' direction.\\nStep 3: This yields 5'-G-C-T-A-C-G-T-3'.",
      "result": "The complementary sequence is 5'-G-C-T-A-C-G-T-3'."
    }
  },
  {
    "question_id": "ch50_q68",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "Explain how dideoxynucleotides (ddNTPs) function to terminate DNA synthesis in the Sanger dideoxy sequencing method.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Dideoxynucleotides (ddNTPs) lack the 3'-OH group, preventing further phosphodiester bond formation and terminating the chain.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Dideoxynucleotides lack the 2'-OH group, converting DNA into RNA.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dideoxynucleotides carry a triphosphate group on the 3' position.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Dideoxynucleotides lack the nitrogenous base, creating abasic sites.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sanger sequencing mechanism.",
      "process": "Step 1: DNA polymerase requires a free 3'-OH group on the growing primer strand to perform nucleophilic attack on incoming dNTPs.\\nStep 2: Sanger sequencing introduces dideoxynucleotides (ddNTPs) which lack oxygen at both C2' and C3'.\\nStep 3: Incorporation of a ddNTP terminates the chain because there is no 3'-OH to link to the next nucleotide.",
      "result": "Lack of a 3'-OH terminates the DNA chain."
    }
  },
  {
    "question_id": "ch50_q69",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "In solid-phase DNA synthesis using the phosphoramidite method, what is the first step of each coupling cycle?",
    "question_smiles": "COc1ccc(cc1)C(c2ccccc2)(c3ccc(cc3)OC)OCC4OC(N5C=NC6=C5N=CN=C6N)C(O)C4",
    "options": [
      {
        "option_id": "A",
        "text": "Oxidation of the phosphite triester intermediate using sulfur dioxide.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Activation of the phosphoramidite phosphorus atom using a strong Lewis base.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Deprotection of the cyanoethyl protecting group using liquid ammonia.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acid-catalyzed cleavage of the dimethoxytrityl (DMT) ether protecting group on C5' using trichloroacetic acid.",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Chemical DNA synthesis coupling cycle.",
      "process": "Step 1: The solid-phase support holds a nucleoside protected at C5' with a dimethoxytrityl (DMT) group.\\nStep 2: The cycle begins with deprotection of C5' by treatment with an acid (like trichloroacetic acid) to yield a free C5'-OH group.\\nStep 3: This is followed by coupling with a protected phosphoramidite monomer activated by tetrazole.",
      "result": "The cycle starts with acid-catalyzed DMT cleavage at C5'."
    }
  },
  {
    "question_id": "ch50_q70",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Determine the correct Watson-Crick base-pairing partners and their corresponding hydrogen bond counts in a DNA double helix.",
    "question_smiles": "Nc1ncnc2[nH]cnc12.O=C1NC(=O)C(C)=CN1",
    "options": [
      {
        "option_id": "A",
        "text": "Adenine pairs with Uracil via 3 hydrogen bonds in double-stranded DNA.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Adenine pairs with Thymine via 3 hydrogen bonds; Guanine pairs with Cytosine via 2 hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Adenine pairs with Cytosine via 2 hydrogen bonds; Guanine pairs with Thymine via 3 hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Adenine pairs with Thymine via 2 hydrogen bonds; Guanine pairs with Cytosine via 3 hydrogen bonds.",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Watson-Crick base pairing hydrogen bonds.",
      "process": "Step 1: The purine base Adenine pairs specifically with the pyrimidine base Thymine.\\nStep 2: The purine base Guanine pairs specifically with the pyrimidine base Cytosine.\\nStep 3: G-C pairs are held together by three hydrogen bonds (NH2 to C=O, ring N to ring NH, C=O to NH2), whereas A-T pairs have only two hydrogen bonds.",
      "result": "G-C pairs have 3 H-bonds, A-T pairs have 2 H-bonds."
    }
  },
  {
    "question_id": "ch50_q71",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Compare the molecular structures of adenosine and adenosine monophosphate (AMP). Identify which statement correctly distinguishes between a nucleoside and a nucleotide.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H](O)[C@H]3O.NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](COP(=O)(O)O)[C@@H](O)[C@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "AMP is a nucleoside because it has no phosphate group.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Adenosine is a nucleotide because it is phosphorylated.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Adenosine is a nucleotide because it contains a purine base linked to a ribose ring.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "AMP is a nucleotide because it contains a phosphate group esterified at C5' of the ribose ring.",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Distinguishing nucleosides and nucleotides.",
      "process": "Step 1: A nucleoside consists of a nitrogenous purine or pyrimidine base linked via a beta-N-glycosidic bond to a pentose sugar (ribose or deoxyribose).\\nStep 2: A nucleotide is a nucleoside that has a phosphate group esterified to one of the sugar hydroxyl groups (typically C5' or C3').\\nStep 3: Adenosine is a nucleoside, while AMP (with a phosphate at C5') is a nucleotide.",
      "result": "Phosphorylation of the sugar makes a nucleoside into a nucleotide."
    }
  },
  {
    "question_id": "ch50_q72",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Easy",
    "question_text": "If a template strand of DNA has the sequence 5'-A-C-G-T-A-G-C-3', what is the sequence of the complementary strand, written in the standard 5' to 3' direction?",
    "options": [
      {
        "option_id": "A",
        "text": "5'-G-C-T-A-C-G-T-3'",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "5'-T-G-C-A-T-C-G-3'",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5'-C-G-T-A-C-G-T-3'",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5'-A-C-G-T-A-G-C-3'",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determining DNA complementary strand sequence.",
      "process": "Step 1: Write down the complementary bases for each position (A-T, C-G, G-C, T-A). The complementary sequence is 3'-T-G-C-A-T-C-G-5'.\\nStep 2: Reverse the sequence to write it in the standard 5' to 3' direction.\\nStep 3: This yields 5'-G-C-T-A-C-G-T-3'.",
      "result": "The complementary sequence is 5'-G-C-T-A-C-G-T-3'."
    }
  },
  {
    "question_id": "ch50_q73",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "Explain how dideoxynucleotides (ddNTPs) function to terminate DNA synthesis in the Sanger dideoxy sequencing method.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Dideoxynucleotides (ddNTPs) lack the 3'-OH group, preventing further phosphodiester bond formation and terminating the chain.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Dideoxynucleotides lack the nitrogenous base, creating abasic sites.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dideoxynucleotides lack the 2'-OH group, converting DNA into RNA.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Dideoxynucleotides carry a triphosphate group on the 3' position.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sanger sequencing mechanism.",
      "process": "Step 1: DNA polymerase requires a free 3'-OH group on the growing primer strand to perform nucleophilic attack on incoming dNTPs.\\nStep 2: Sanger sequencing introduces dideoxynucleotides (ddNTPs) which lack oxygen at both C2' and C3'.\\nStep 3: Incorporation of a ddNTP terminates the chain because there is no 3'-OH to link to the next nucleotide.",
      "result": "Lack of a 3'-OH terminates the DNA chain."
    }
  },
  {
    "question_id": "ch50_q74",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "In solid-phase DNA synthesis using the phosphoramidite method, what is the first step of each coupling cycle?",
    "question_smiles": "COc1ccc(cc1)C(c2ccccc2)(c3ccc(cc3)OC)OCC4OC(N5C=NC6=C5N=CN=C6N)C(O)C4",
    "options": [
      {
        "option_id": "A",
        "text": "Oxidation of the phosphite triester intermediate using sulfur dioxide.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Acid-catalyzed cleavage of the dimethoxytrityl (DMT) ether protecting group on C5' using trichloroacetic acid.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Activation of the phosphoramidite phosphorus atom using a strong Lewis base.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Deprotection of the cyanoethyl protecting group using liquid ammonia.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Chemical DNA synthesis coupling cycle.",
      "process": "Step 1: The solid-phase support holds a nucleoside protected at C5' with a dimethoxytrityl (DMT) group.\\nStep 2: The cycle begins with deprotection of C5' by treatment with an acid (like trichloroacetic acid) to yield a free C5'-OH group.\\nStep 3: This is followed by coupling with a protected phosphoramidite monomer activated by tetrazole.",
      "result": "The cycle starts with acid-catalyzed DMT cleavage at C5'."
    }
  },
  {
    "question_id": "ch50_q75",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Determine the correct Watson-Crick base-pairing partners and their corresponding hydrogen bond counts in a DNA double helix.",
    "question_smiles": "Nc1ncnc2[nH]cnc12.O=C1NC(=O)C(C)=CN1",
    "options": [
      {
        "option_id": "A",
        "text": "Adenine pairs with Uracil via 3 hydrogen bonds in double-stranded DNA.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Adenine pairs with Cytosine via 2 hydrogen bonds; Guanine pairs with Thymine via 3 hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Adenine pairs with Thymine via 2 hydrogen bonds; Guanine pairs with Cytosine via 3 hydrogen bonds.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Adenine pairs with Thymine via 3 hydrogen bonds; Guanine pairs with Cytosine via 2 hydrogen bonds.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Watson-Crick base pairing hydrogen bonds.",
      "process": "Step 1: The purine base Adenine pairs specifically with the pyrimidine base Thymine.\\nStep 2: The purine base Guanine pairs specifically with the pyrimidine base Cytosine.\\nStep 3: G-C pairs are held together by three hydrogen bonds (NH2 to C=O, ring N to ring NH, C=O to NH2), whereas A-T pairs have only two hydrogen bonds.",
      "result": "G-C pairs have 3 H-bonds, A-T pairs have 2 H-bonds."
    }
  },
  {
    "question_id": "ch50_q76",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Compare the molecular structures of adenosine and adenosine monophosphate (AMP). Identify which statement correctly distinguishes between a nucleoside and a nucleotide.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H](O)[C@H]3O.NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](COP(=O)(O)O)[C@@H](O)[C@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Adenosine is a nucleotide because it is phosphorylated.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "AMP is a nucleotide because it contains a phosphate group esterified at C5' of the ribose ring.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Adenosine is a nucleotide because it contains a purine base linked to a ribose ring.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "AMP is a nucleoside because it has no phosphate group.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing nucleosides and nucleotides.",
      "process": "Step 1: A nucleoside consists of a nitrogenous purine or pyrimidine base linked via a beta-N-glycosidic bond to a pentose sugar (ribose or deoxyribose).\\nStep 2: A nucleotide is a nucleoside that has a phosphate group esterified to one of the sugar hydroxyl groups (typically C5' or C3').\\nStep 3: Adenosine is a nucleoside, while AMP (with a phosphate at C5') is a nucleotide.",
      "result": "Phosphorylation of the sugar makes a nucleoside into a nucleotide."
    }
  },
  {
    "question_id": "ch50_q77",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Easy",
    "question_text": "If a template strand of DNA has the sequence 5'-A-C-G-T-A-G-C-3', what is the sequence of the complementary strand, written in the standard 5' to 3' direction?",
    "options": [
      {
        "option_id": "A",
        "text": "5'-C-G-T-A-C-G-T-3'",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "5'-T-G-C-A-T-C-G-3'",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5'-A-C-G-T-A-G-C-3'",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5'-G-C-T-A-C-G-T-3'",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Determining DNA complementary strand sequence.",
      "process": "Step 1: Write down the complementary bases for each position (A-T, C-G, G-C, T-A). The complementary sequence is 3'-T-G-C-A-T-C-G-5'.\\nStep 2: Reverse the sequence to write it in the standard 5' to 3' direction.\\nStep 3: This yields 5'-G-C-T-A-C-G-T-3'.",
      "result": "The complementary sequence is 5'-G-C-T-A-C-G-T-3'."
    }
  },
  {
    "question_id": "ch50_q78",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "Explain how dideoxynucleotides (ddNTPs) function to terminate DNA synthesis in the Sanger dideoxy sequencing method.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Dideoxynucleotides (ddNTPs) lack the 3'-OH group, preventing further phosphodiester bond formation and terminating the chain.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Dideoxynucleotides lack the nitrogenous base, creating abasic sites.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dideoxynucleotides carry a triphosphate group on the 3' position.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Dideoxynucleotides lack the 2'-OH group, converting DNA into RNA.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sanger sequencing mechanism.",
      "process": "Step 1: DNA polymerase requires a free 3'-OH group on the growing primer strand to perform nucleophilic attack on incoming dNTPs.\\nStep 2: Sanger sequencing introduces dideoxynucleotides (ddNTPs) which lack oxygen at both C2' and C3'.\\nStep 3: Incorporation of a ddNTP terminates the chain because there is no 3'-OH to link to the next nucleotide.",
      "result": "Lack of a 3'-OH terminates the DNA chain."
    }
  },
  {
    "question_id": "ch50_q79",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "In solid-phase DNA synthesis using the phosphoramidite method, what is the first step of each coupling cycle?",
    "question_smiles": "COc1ccc(cc1)C(c2ccccc2)(c3ccc(cc3)OC)OCC4OC(N5C=NC6=C5N=CN=C6N)C(O)C4",
    "options": [
      {
        "option_id": "A",
        "text": "Deprotection of the cyanoethyl protecting group using liquid ammonia.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Acid-catalyzed cleavage of the dimethoxytrityl (DMT) ether protecting group on C5' using trichloroacetic acid.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Oxidation of the phosphite triester intermediate using sulfur dioxide.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Activation of the phosphoramidite phosphorus atom using a strong Lewis base.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Chemical DNA synthesis coupling cycle.",
      "process": "Step 1: The solid-phase support holds a nucleoside protected at C5' with a dimethoxytrityl (DMT) group.\\nStep 2: The cycle begins with deprotection of C5' by treatment with an acid (like trichloroacetic acid) to yield a free C5'-OH group.\\nStep 3: This is followed by coupling with a protected phosphoramidite monomer activated by tetrazole.",
      "result": "The cycle starts with acid-catalyzed DMT cleavage at C5'."
    }
  },
  {
    "question_id": "ch50_q80",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Determine the correct Watson-Crick base-pairing partners and their corresponding hydrogen bond counts in a DNA double helix.",
    "question_smiles": "Nc1ncnc2[nH]cnc12.O=C1NC(=O)C(C)=CN1",
    "options": [
      {
        "option_id": "A",
        "text": "Adenine pairs with Cytosine via 2 hydrogen bonds; Guanine pairs with Thymine via 3 hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Adenine pairs with Uracil via 3 hydrogen bonds in double-stranded DNA.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Adenine pairs with Thymine via 2 hydrogen bonds; Guanine pairs with Cytosine via 3 hydrogen bonds.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Adenine pairs with Thymine via 3 hydrogen bonds; Guanine pairs with Cytosine via 2 hydrogen bonds.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Watson-Crick base pairing hydrogen bonds.",
      "process": "Step 1: The purine base Adenine pairs specifically with the pyrimidine base Thymine.\\nStep 2: The purine base Guanine pairs specifically with the pyrimidine base Cytosine.\\nStep 3: G-C pairs are held together by three hydrogen bonds (NH2 to C=O, ring N to ring NH, C=O to NH2), whereas A-T pairs have only two hydrogen bonds.",
      "result": "G-C pairs have 3 H-bonds, A-T pairs have 2 H-bonds."
    }
  },
  {
    "question_id": "ch50_q81",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Compare the molecular structures of adenosine and adenosine monophosphate (AMP). Identify which statement correctly distinguishes between a nucleoside and a nucleotide.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H](O)[C@H]3O.NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](COP(=O)(O)O)[C@@H](O)[C@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Adenosine is a nucleotide because it is phosphorylated.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "AMP is a nucleotide because it contains a phosphate group esterified at C5' of the ribose ring.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Adenosine is a nucleotide because it contains a purine base linked to a ribose ring.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "AMP is a nucleoside because it has no phosphate group.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing nucleosides and nucleotides.",
      "process": "Step 1: A nucleoside consists of a nitrogenous purine or pyrimidine base linked via a beta-N-glycosidic bond to a pentose sugar (ribose or deoxyribose).\\nStep 2: A nucleotide is a nucleoside that has a phosphate group esterified to one of the sugar hydroxyl groups (typically C5' or C3').\\nStep 3: Adenosine is a nucleoside, while AMP (with a phosphate at C5') is a nucleotide.",
      "result": "Phosphorylation of the sugar makes a nucleoside into a nucleotide."
    }
  },
  {
    "question_id": "ch50_q82",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Easy",
    "question_text": "If a template strand of DNA has the sequence 5'-A-C-G-T-A-G-C-3', what is the sequence of the complementary strand, written in the standard 5' to 3' direction?",
    "options": [
      {
        "option_id": "A",
        "text": "5'-C-G-T-A-C-G-T-3'",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "5'-A-C-G-T-A-G-C-3'",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5'-T-G-C-A-T-C-G-3'",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5'-G-C-T-A-C-G-T-3'",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Determining DNA complementary strand sequence.",
      "process": "Step 1: Write down the complementary bases for each position (A-T, C-G, G-C, T-A). The complementary sequence is 3'-T-G-C-A-T-C-G-5'.\\nStep 2: Reverse the sequence to write it in the standard 5' to 3' direction.\\nStep 3: This yields 5'-G-C-T-A-C-G-T-3'.",
      "result": "The complementary sequence is 5'-G-C-T-A-C-G-T-3'."
    }
  },
  {
    "question_id": "ch50_q83",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "Explain how dideoxynucleotides (ddNTPs) function to terminate DNA synthesis in the Sanger dideoxy sequencing method.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Dideoxynucleotides (ddNTPs) lack the 3'-OH group, preventing further phosphodiester bond formation and terminating the chain.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Dideoxynucleotides carry a triphosphate group on the 3' position.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dideoxynucleotides lack the nitrogenous base, creating abasic sites.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Dideoxynucleotides lack the 2'-OH group, converting DNA into RNA.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sanger sequencing mechanism.",
      "process": "Step 1: DNA polymerase requires a free 3'-OH group on the growing primer strand to perform nucleophilic attack on incoming dNTPs.\\nStep 2: Sanger sequencing introduces dideoxynucleotides (ddNTPs) which lack oxygen at both C2' and C3'.\\nStep 3: Incorporation of a ddNTP terminates the chain because there is no 3'-OH to link to the next nucleotide.",
      "result": "Lack of a 3'-OH terminates the DNA chain."
    }
  },
  {
    "question_id": "ch50_q84",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "In solid-phase DNA synthesis using the phosphoramidite method, what is the first step of each coupling cycle?",
    "question_smiles": "COc1ccc(cc1)C(c2ccccc2)(c3ccc(cc3)OC)OCC4OC(N5C=NC6=C5N=CN=C6N)C(O)C4",
    "options": [
      {
        "option_id": "A",
        "text": "Acid-catalyzed cleavage of the dimethoxytrityl (DMT) ether protecting group on C5' using trichloroacetic acid.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Deprotection of the cyanoethyl protecting group using liquid ammonia.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Oxidation of the phosphite triester intermediate using sulfur dioxide.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Activation of the phosphoramidite phosphorus atom using a strong Lewis base.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Chemical DNA synthesis coupling cycle.",
      "process": "Step 1: The solid-phase support holds a nucleoside protected at C5' with a dimethoxytrityl (DMT) group.\\nStep 2: The cycle begins with deprotection of C5' by treatment with an acid (like trichloroacetic acid) to yield a free C5'-OH group.\\nStep 3: This is followed by coupling with a protected phosphoramidite monomer activated by tetrazole.",
      "result": "The cycle starts with acid-catalyzed DMT cleavage at C5'."
    }
  },
  {
    "question_id": "ch50_q85",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Determine the correct Watson-Crick base-pairing partners and their corresponding hydrogen bond counts in a DNA double helix.",
    "question_smiles": "Nc1ncnc2[nH]cnc12.O=C1NC(=O)C(C)=CN1",
    "options": [
      {
        "option_id": "A",
        "text": "Adenine pairs with Cytosine via 2 hydrogen bonds; Guanine pairs with Thymine via 3 hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Adenine pairs with Uracil via 3 hydrogen bonds in double-stranded DNA.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Adenine pairs with Thymine via 2 hydrogen bonds; Guanine pairs with Cytosine via 3 hydrogen bonds.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Adenine pairs with Thymine via 3 hydrogen bonds; Guanine pairs with Cytosine via 2 hydrogen bonds.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Watson-Crick base pairing hydrogen bonds.",
      "process": "Step 1: The purine base Adenine pairs specifically with the pyrimidine base Thymine.\\nStep 2: The purine base Guanine pairs specifically with the pyrimidine base Cytosine.\\nStep 3: G-C pairs are held together by three hydrogen bonds (NH2 to C=O, ring N to ring NH, C=O to NH2), whereas A-T pairs have only two hydrogen bonds.",
      "result": "G-C pairs have 3 H-bonds, A-T pairs have 2 H-bonds."
    }
  },
  {
    "question_id": "ch50_q86",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Compare the molecular structures of adenosine and adenosine monophosphate (AMP). Identify which statement correctly distinguishes between a nucleoside and a nucleotide.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H](O)[C@H]3O.NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](COP(=O)(O)O)[C@@H](O)[C@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "AMP is a nucleoside because it has no phosphate group.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Adenosine is a nucleotide because it contains a purine base linked to a ribose ring.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "AMP is a nucleotide because it contains a phosphate group esterified at C5' of the ribose ring.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Adenosine is a nucleotide because it is phosphorylated.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing nucleosides and nucleotides.",
      "process": "Step 1: A nucleoside consists of a nitrogenous purine or pyrimidine base linked via a beta-N-glycosidic bond to a pentose sugar (ribose or deoxyribose).\\nStep 2: A nucleotide is a nucleoside that has a phosphate group esterified to one of the sugar hydroxyl groups (typically C5' or C3').\\nStep 3: Adenosine is a nucleoside, while AMP (with a phosphate at C5') is a nucleotide.",
      "result": "Phosphorylation of the sugar makes a nucleoside into a nucleotide."
    }
  },
  {
    "question_id": "ch50_q87",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Easy",
    "question_text": "If a template strand of DNA has the sequence 5'-A-C-G-T-A-G-C-3', what is the sequence of the complementary strand, written in the standard 5' to 3' direction?",
    "options": [
      {
        "option_id": "A",
        "text": "5'-C-G-T-A-C-G-T-3'",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "5'-A-C-G-T-A-G-C-3'",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5'-G-C-T-A-C-G-T-3'",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "5'-T-G-C-A-T-C-G-3'",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determining DNA complementary strand sequence.",
      "process": "Step 1: Write down the complementary bases for each position (A-T, C-G, G-C, T-A). The complementary sequence is 3'-T-G-C-A-T-C-G-5'.\\nStep 2: Reverse the sequence to write it in the standard 5' to 3' direction.\\nStep 3: This yields 5'-G-C-T-A-C-G-T-3'.",
      "result": "The complementary sequence is 5'-G-C-T-A-C-G-T-3'."
    }
  },
  {
    "question_id": "ch50_q88",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "Explain how dideoxynucleotides (ddNTPs) function to terminate DNA synthesis in the Sanger dideoxy sequencing method.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Dideoxynucleotides (ddNTPs) lack the 3'-OH group, preventing further phosphodiester bond formation and terminating the chain.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Dideoxynucleotides lack the 2'-OH group, converting DNA into RNA.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dideoxynucleotides carry a triphosphate group on the 3' position.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Dideoxynucleotides lack the nitrogenous base, creating abasic sites.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sanger sequencing mechanism.",
      "process": "Step 1: DNA polymerase requires a free 3'-OH group on the growing primer strand to perform nucleophilic attack on incoming dNTPs.\\nStep 2: Sanger sequencing introduces dideoxynucleotides (ddNTPs) which lack oxygen at both C2' and C3'.\\nStep 3: Incorporation of a ddNTP terminates the chain because there is no 3'-OH to link to the next nucleotide.",
      "result": "Lack of a 3'-OH terminates the DNA chain."
    }
  },
  {
    "question_id": "ch50_q89",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "In solid-phase DNA synthesis using the phosphoramidite method, what is the first step of each coupling cycle?",
    "question_smiles": "COc1ccc(cc1)C(c2ccccc2)(c3ccc(cc3)OC)OCC4OC(N5C=NC6=C5N=CN=C6N)C(O)C4",
    "options": [
      {
        "option_id": "A",
        "text": "Deprotection of the cyanoethyl protecting group using liquid ammonia.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Oxidation of the phosphite triester intermediate using sulfur dioxide.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Activation of the phosphoramidite phosphorus atom using a strong Lewis base.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acid-catalyzed cleavage of the dimethoxytrityl (DMT) ether protecting group on C5' using trichloroacetic acid.",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Chemical DNA synthesis coupling cycle.",
      "process": "Step 1: The solid-phase support holds a nucleoside protected at C5' with a dimethoxytrityl (DMT) group.\\nStep 2: The cycle begins with deprotection of C5' by treatment with an acid (like trichloroacetic acid) to yield a free C5'-OH group.\\nStep 3: This is followed by coupling with a protected phosphoramidite monomer activated by tetrazole.",
      "result": "The cycle starts with acid-catalyzed DMT cleavage at C5'."
    }
  },
  {
    "question_id": "ch50_q90",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Determine the correct Watson-Crick base-pairing partners and their corresponding hydrogen bond counts in a DNA double helix.",
    "question_smiles": "Nc1ncnc2[nH]cnc12.O=C1NC(=O)C(C)=CN1",
    "options": [
      {
        "option_id": "A",
        "text": "Adenine pairs with Thymine via 2 hydrogen bonds; Guanine pairs with Cytosine via 3 hydrogen bonds.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Adenine pairs with Uracil via 3 hydrogen bonds in double-stranded DNA.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Adenine pairs with Thymine via 3 hydrogen bonds; Guanine pairs with Cytosine via 2 hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Adenine pairs with Cytosine via 2 hydrogen bonds; Guanine pairs with Thymine via 3 hydrogen bonds.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Watson-Crick base pairing hydrogen bonds.",
      "process": "Step 1: The purine base Adenine pairs specifically with the pyrimidine base Thymine.\\nStep 2: The purine base Guanine pairs specifically with the pyrimidine base Cytosine.\\nStep 3: G-C pairs are held together by three hydrogen bonds (NH2 to C=O, ring N to ring NH, C=O to NH2), whereas A-T pairs have only two hydrogen bonds.",
      "result": "G-C pairs have 3 H-bonds, A-T pairs have 2 H-bonds."
    }
  },
  {
    "question_id": "ch50_q91",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Compare the molecular structures of adenosine and adenosine monophosphate (AMP). Identify which statement correctly distinguishes between a nucleoside and a nucleotide.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H](O)[C@H]3O.NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](COP(=O)(O)O)[C@@H](O)[C@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Adenosine is a nucleotide because it contains a purine base linked to a ribose ring.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "AMP is a nucleoside because it has no phosphate group.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Adenosine is a nucleotide because it is phosphorylated.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "AMP is a nucleotide because it contains a phosphate group esterified at C5' of the ribose ring.",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Distinguishing nucleosides and nucleotides.",
      "process": "Step 1: A nucleoside consists of a nitrogenous purine or pyrimidine base linked via a beta-N-glycosidic bond to a pentose sugar (ribose or deoxyribose).\\nStep 2: A nucleotide is a nucleoside that has a phosphate group esterified to one of the sugar hydroxyl groups (typically C5' or C3').\\nStep 3: Adenosine is a nucleoside, while AMP (with a phosphate at C5') is a nucleotide.",
      "result": "Phosphorylation of the sugar makes a nucleoside into a nucleotide."
    }
  },
  {
    "question_id": "ch50_q92",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Easy",
    "question_text": "If a template strand of DNA has the sequence 5'-A-C-G-T-A-G-C-3', what is the sequence of the complementary strand, written in the standard 5' to 3' direction?",
    "options": [
      {
        "option_id": "A",
        "text": "5'-C-G-T-A-C-G-T-3'",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "5'-T-G-C-A-T-C-G-3'",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5'-G-C-T-A-C-G-T-3'",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "5'-A-C-G-T-A-G-C-3'",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determining DNA complementary strand sequence.",
      "process": "Step 1: Write down the complementary bases for each position (A-T, C-G, G-C, T-A). The complementary sequence is 3'-T-G-C-A-T-C-G-5'.\\nStep 2: Reverse the sequence to write it in the standard 5' to 3' direction.\\nStep 3: This yields 5'-G-C-T-A-C-G-T-3'.",
      "result": "The complementary sequence is 5'-G-C-T-A-C-G-T-3'."
    }
  },
  {
    "question_id": "ch50_q93",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "Explain how dideoxynucleotides (ddNTPs) function to terminate DNA synthesis in the Sanger dideoxy sequencing method.",
    "question_smiles": "NC1=NC=NC2=C1N=CN2[C@@H]3O[C@H](CO)[C@@H]3O",
    "options": [
      {
        "option_id": "A",
        "text": "Dideoxynucleotides lack the nitrogenous base, creating abasic sites.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Dideoxynucleotides lack the 2'-OH group, converting DNA into RNA.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dideoxynucleotides (ddNTPs) lack the 3'-OH group, preventing further phosphodiester bond formation and terminating the chain.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Dideoxynucleotides carry a triphosphate group on the 3' position.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sanger sequencing mechanism.",
      "process": "Step 1: DNA polymerase requires a free 3'-OH group on the growing primer strand to perform nucleophilic attack on incoming dNTPs.\\nStep 2: Sanger sequencing introduces dideoxynucleotides (ddNTPs) which lack oxygen at both C2' and C3'.\\nStep 3: Incorporation of a ddNTP terminates the chain because there is no 3'-OH to link to the next nucleotide.",
      "result": "Lack of a 3'-OH terminates the DNA chain."
    }
  },
  {
    "question_id": "ch50_q94",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Hard",
    "question_text": "In solid-phase DNA synthesis using the phosphoramidite method, what is the first step of each coupling cycle?",
    "question_smiles": "COc1ccc(cc1)C(c2ccccc2)(c3ccc(cc3)OC)OCC4OC(N5C=NC6=C5N=CN=C6N)C(O)C4",
    "options": [
      {
        "option_id": "A",
        "text": "Deprotection of the cyanoethyl protecting group using liquid ammonia.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Activation of the phosphoramidite phosphorus atom using a strong Lewis base.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acid-catalyzed cleavage of the dimethoxytrityl (DMT) ether protecting group on C5' using trichloroacetic acid.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Oxidation of the phosphite triester intermediate using sulfur dioxide.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Chemical DNA synthesis coupling cycle.",
      "process": "Step 1: The solid-phase support holds a nucleoside protected at C5' with a dimethoxytrityl (DMT) group.\\nStep 2: The cycle begins with deprotection of C5' by treatment with an acid (like trichloroacetic acid) to yield a free C5'-OH group.\\nStep 3: This is followed by coupling with a protected phosphoramidite monomer activated by tetrazole.",
      "result": "The cycle starts with acid-catalyzed DMT cleavage at C5'."
    }
  },
  {
    "question_id": "ch50_q95",
    "topic": "Biomolecules: Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Determine the correct Watson-Crick base-pairing partners and their corresponding hydrogen bond counts in a DNA double helix.",
    "question_smiles": "Nc1ncnc2[nH]cnc12.O=C1NC(=O)C(C)=CN1",
    "options": [
      {
        "option_id": "A",
        "text": "Adenine pairs with Thymine via 2 hydrogen bonds; Guanine pairs with Cytosine via 3 hydrogen bonds.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Adenine pairs with Uracil via 3 hydrogen bonds in double-stranded DNA.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Adenine pairs with Thymine via 3 hydrogen bonds; Guanine pairs with Cytosine via 2 hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Adenine pairs with Cytosine via 2 hydrogen bonds; Guanine pairs with Thymine via 3 hydrogen bonds.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Watson-Crick base pairing hydrogen bonds.",
      "process": "Step 1: The purine base Adenine pairs specifically with the pyrimidine base Thymine.\\nStep 2: The purine base Guanine pairs specifically with the pyrimidine base Cytosine.\\nStep 3: G-C pairs are held together by three hydrogen bonds (NH2 to C=O, ring N to ring NH, C=O to NH2), whereas A-T pairs have only two hydrogen bonds.",
      "result": "G-C pairs have 3 H-bonds, A-T pairs have 2 H-bonds."
    }
  }
];
