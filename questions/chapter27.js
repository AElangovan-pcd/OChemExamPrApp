// McMurry Chapter 27 questions
const CHAPTER_27_QUESTIONS = [
  {
    "question_id": "ch27_acs_q1_enolate_alkylation",
    "topic": "ACS: Enols & Enolate Reactions",
    "difficulty_level": "Hard",
    "question_text": "Reaction of 2-methylcyclohexanone with LDA at -78 degrees C in THF, followed by the addition of iodomethane, yields which major product?",
    "question_smiles": "CC1CCCCC1=O",
    "options": [
      {
        "option_id": "A",
        "text": "2,6-dimethylcyclohexanone",
        "smiles": "CC1CCCC(C)C1=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2,2-dimethylcyclohexanone",
        "smiles": "CC1(C)CCCCC1=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,3-dimethylcyclohexanone",
        "smiles": "CC1CCC(C)CC1=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-methylcyclohexene",
        "smiles": "CC1=CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Investigating kinetic vs thermodynamic control in enolate formation.",
      "process": "Step 1: Lithium diisopropylamide (LDA) is a strong, sterically hindered base. At low temperatures (-78 degrees C), it abstracts the most accessible, less hindered proton.\nStep 2: The proton is removed from C6 (primary/secondary enolate) rather than C2 (which is sterically crowded by the methyl group). This forms the kinetic enolate.\nStep 3: Subsequent nucleophilic attack on iodomethane (CH3I) alkylates at the C6 position, yielding 2,6-dimethylcyclohexanone.",
      "result": "The kinetic product, 2,6-dimethylcyclohexanone, is formed."
    }
  },
  {
    "question_id": "ch27_acs_q2_aldol",
    "topic": "ACS: Enols & Enolate Reactions",
    "difficulty_level": "Medium",
    "question_text": "Predict the major organic product formed when benzaldehyde is reacted with acetone in the presence of aqueous sodium hydroxide at elevated temperatures.",
    "question_smiles": "O=CC1=CC=CC=C1.CC(=O)C",
    "options": [
      {
        "option_id": "A",
        "text": "4-phenyl-3-buten-2-one (benzalacetone)",
        "smiles": "CC(=O)C=Cc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-hydroxy-4-phenyl-2-butanone",
        "smiles": "CC(=O)CC(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,5-diphenyl-1,4-pentadien-3-one (dibenzalacetone)",
        "smiles": "O=C(C=Cc1ccccc1)C=Cc2ccccc2",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzyl alcohol and sodium acetate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Reviewing the crossed aldol condensation mechanism and dehydration conditions.",
      "process": "Step 1: Sodium hydroxide deprotonates acetone to form its nucleophilic enolate.\nStep 2: The enolate attacks benzaldehyde (which has no alpha-hydrogens, preventing self-condensation) to form a beta-hydroxy ketone intermediate.\nStep 3: Under elevated temperatures, dehydration (elimination of water) occurs rapidly to yield the conjugated alpha,beta-unsaturated ketone, 4-phenyl-3-buten-2-one.",
      "result": "The dehydrated condensation product, 4-phenyl-3-buten-2-one, is formed."
    }
  },
  {
    "question_id": "ch27_acs_q3_claisen",
    "topic": "ACS: Enols & Enolate Reactions",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed when ethyl acetate is treated with sodium ethoxide in ethanol, followed by acidic workup?",
    "question_smiles": "CCOC(=O)C",
    "options": [
      {
        "option_id": "A",
        "text": "Ethyl acetoacetate (a beta-keto ester)",
        "smiles": "CCOC(=O)CC(=O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Diethyl malonate",
        "smiles": "CCOC(=O)CC(=O)OCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethyl 3-hydroxybutanoate",
        "smiles": "CCOC(=O)CC(O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl propanoate",
        "smiles": "CCOC(=O)CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding the Claisen self-condensation mechanism of esters.",
      "process": "Step 1: Ethoxide deprotonates ethyl acetate to form its ester enolate.\nStep 2: The enolate attacks a second molecule of ethyl acetate to form a tetrahedral intermediate.\nStep 3: Expulsion of ethoxide yields ethyl acetoacetate.\nStep 4: The basic solution deprotonates the highly acidic methylene carbon between the two carbonyls. Acidic workup protonates this carbon back to yield the neutral beta-keto ester.",
      "result": "The product is the beta-keto ester, ethyl acetoacetate."
    }
  },
  {
    "question_id": "ch27_acs_q4_haloform",
    "topic": "ACS: Enols & Enolate Reactions",
    "difficulty_level": "Easy",
    "question_text": "Which of the following compounds yields a yellow precipitate of iodoform (CHI3) when treated with iodine in aqueous sodium hydroxide?",
    "question_smiles": "CC(=O)C1=CC=CC=C1.CC(=O)CC.O=CC1=CC=CC=C1.CCOCC",
    "options": [
      {
        "option_id": "A",
        "text": "Acetophenone (a methyl ketone)",
        "smiles": "CC(=O)C1=CC=CC=C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-pentanone",
        "smiles": "CCC(=O)CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzaldehyde",
        "smiles": "O=CC1=CC=CC=C1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Diethyl ether",
        "smiles": "CCOCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Applying the haloform reaction test to detect methyl ketones or secondary alcohols oxidizable to methyl ketones.",
      "process": "Step 1: The haloform reaction requires a methyl ketone (-COCH3) structural unit.\nStep 2: Base-promoted halogenation replaces all three alpha-hydrogens of the methyl group with iodine, forming a -COCI3 group.\nStep 3: Hydroxide attacks the carbonyl carbon, expelling the stable -CI3 anion, which protonates to form yellow iodoform (CHI3) precipitate.\nStep 4: Acetophenone contains the -COCH3 group and gives a positive test.",
      "result": "Acetophenone yields a positive iodoform test."
    }
  },
  {
    "question_id": "ch27_acs_q5_acetoacetic",
    "topic": "ACS: Enols & Enolate Reactions",
    "difficulty_level": "Hard",
    "question_text": "What is the final organic product of the acetoacetic ester synthesis using ethyl acetoacetate, sodium ethoxide, 1-bromopropane, followed by heating in dilute aqueous acid?",
    "question_smiles": "CCOC(=O)CC(=O)C.CCCBr",
    "options": [
      {
        "option_id": "A",
        "text": "2-pentanone (substituted methyl ketone)",
        "smiles": "CCCC(=O)C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "2-hexanone (substituted methyl ketone)",
        "smiles": "CCCCC(=O)C",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Hexanoic acid",
        "smiles": "CCCCCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl 2-propylacetoacetate",
        "smiles": "CCCC(C(=O)C)C(=O)OCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing the steps of acetoacetic ester synthesis: alkylation, hydrolysis, and decarboxylation.",
      "process": "Step 1: Ethoxide deprotonates the active methylene of ethyl acetoacetate.\nStep 2: Nucleophilic substitution of 1-bromopropane alkylates the C2 position, adding a propyl group (3 carbons).\nStep 3: Heating in aqueous acid hydrolyzes the ester group to a beta-keto carboxylic acid.\nStep 4: Decarboxylation (loss of CO2) occurs via a cyclic transition state, leaving behind a methyl ketone with the added propyl group: 2-hexanone.",
      "result": "The final product is 2-hexanone."
    }
  },
  {
    "question_id": "ch27_q_dynamic_lipids_melting",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Match each fatty acid structure to its melting point characteristics.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCCCCCCCCCCCCCCC(=O)O",
        "correctAnswer": "High Melting Point (Saturated C16)"
      },
      {
        "smiles": "CCCC/C=C\\C/C=C\\CCCCCCCC(=O)O",
        "correctAnswer": "Low Melting Point (Polyunsaturated C18)"
      }
    ],
    "match_options": [
      "High Melting Point (Saturated C16)",
      "Low Melting Point (Polyunsaturated C18)",
      "Medium Melting Point (Unsaturated C18)"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect lipid mapping",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Evaluating melting points based on fatty acid saturation and packing.",
      "process": "Saturated fatty acids (like palmitic acid) pack tightly: high melting point (63\u00b0C). Polyunsaturated fatty acids (like linoleic acid) have cis-kinks preventing packing: liquid at room temp.",
      "result": "Lipid properties mapped."
    }
  }
];
