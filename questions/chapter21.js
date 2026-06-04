// McMurry Chapter 21 questions
const CHAPTER_21_QUESTIONS = [
  {
    "question_id": "ch21_acs_q1_acidity",
    "topic": "ACS: Acids and Bases",
    "difficulty_level": "Medium",
    "question_text": "Rank the following compounds in order of decreasing acidity (most acidic to least acidic): \nI. Ethanol \nII. Phenol \nIII. Acetic acid \nIV. Trifluoroacetic acid",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "IV > III > II > I",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "III > IV > II > I",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "IV > III > I > II",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "I > II > III > IV",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Evaluating acidity based on structural factors like inductive effects and resonance stabilization of the conjugate base.",
      "process": "Step 1: Trifluoroacetic acid (CF3COOH) is the most acidic due to the strong electron-withdrawing inductive effect of the three fluorine atoms stabilizing the carboxylate.\nStep 2: Acetic acid (CH3COOH) is next, having resonance stabilization of the carboxylate charge.\nStep 3: Phenol (C6H5OH) is weakly acidic, stabilized by resonance delocalization of the phenoxide charge into the aromatic ring.\nStep 4: Ethanol (CH3CH2OH) is the least acidic since its conjugate base is an alkoxide with no resonance stabilization.",
      "result": "The order of decreasing acidity is IV > III > II > I."
    }
  },
  {
    "question_id": "ch21_acs_q2_basicity",
    "topic": "ACS: Acids and Bases",
    "difficulty_level": "Medium",
    "question_text": "Rank the following amines in order of increasing basicity (weakest base to strongest base): \nI. Aniline \nII. Cyclohexylamine \nIII. p-Nitroaniline \nIV. p-Anisidine",
    "question_smiles": "NC1=CC=CC=C1.NC1CCCCC1.NC1=CC=C(C=C1)[N+](=O)[O-].COC1=CC=C(N)C=C1",
    "options": [
      {
        "option_id": "A",
        "text": "III < I < IV < II",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "I < III < IV < II",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "III < I < II < IV",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "II < IV < I < III",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing basicity of aliphatic vs aromatic amines, and substituent effects on aniline derivatives.",
      "process": "Step 1: Aliphatic amines are much more basic than aromatic amines because their nitrogen lone pair is not delocalized into an aromatic system. Thus, Cyclohexylamine (II) is the strongest base.\nStep 2: Aniline (I) is weakly basic due to lone pair delocalization.\nStep 3: p-Nitroaniline (III) is de-activated by the strong electron-withdrawing nitro group, which stabilizes the lone pair further, making it the weakest base.\nStep 4: p-Anisidine (IV) is activated by the electron-donating methoxy group (-OCH3), rendering it more basic than aniline.",
      "result": "The increasing basicity order is III < I < IV < II."
    }
  },
  {
    "question_id": "ch21_acs_q3_hybrid_acidity",
    "topic": "ACS: Acids and Bases",
    "difficulty_level": "Easy",
    "question_text": "Rank the following hydrocarbons in order of decreasing acidity: \nI. Ethane \nII. Ethylene \nIII. Acetylene",
    "question_smiles": "CC.C=C.C#C",
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
        "text": "II > III > I",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Evaluating carbon acidity based on orbital s-character of the conjugate base anion.",
      "process": "Step 1: Acetylene (sp carbon) has 50% s-character. Ethylene (sp2 carbon) has 33% s-character. Ethane (sp3 carbon) has 25% s-character.\nStep 2: Higher s-character means the negative charge of the conjugate base resides in an orbital closer to the nucleus, increasing its electrostatic stability.\nStep 3: Therefore, the conjugate base of acetylene (acetylide) is highly stable, making acetylene the most acidic.",
      "result": "The order of decreasing acidity is III (acetylene) > II (ethylene) > I (ethane)."
    }
  },
  {
    "question_id": "ch21_acs_q4_equilibrium",
    "topic": "ACS: Acids and Bases",
    "difficulty_level": "Medium",
    "question_text": "Given the pKa of phenol is 10 and the pKa of carbonic acid is 6.4, in which direction will the equilibrium lie for the reaction between sodium phenoxide and carbonic acid?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Highly favors the products (right side)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Highly favors the reactants (left side)",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Equilibrium constant will be close to 1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "No reaction will take place",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Predicting the direction of acid-base reactions based on relative pKa values.",
      "process": "Step 1: Identify the acids in the system: reactants contain carbonic acid (pKa = 6.4); products contain phenol (pKa = 10).\nStep 2: Acid-base equilibria always favor the formation of the weaker acid and weaker base (higher pKa value).\nStep 3: Since phenol (pKa = 10) is a much weaker acid than carbonic acid (pKa = 6.4), the equilibrium lies heavily toward the products.",
      "result": "The equilibrium heavily favors the product side (right)."
    }
  },
  {
    "question_id": "ch21_acs_q5_salicylic",
    "topic": "ACS: Acids and Bases",
    "difficulty_level": "Hard",
    "question_text": "Why is o-hydroxybenzoic acid (salicylic acid, pKa = 2.97) significantly more acidic than its isomer, p-hydroxybenzoic acid (pKa = 4.54)?",
    "question_smiles": "OC(=O)C1=CC=CC=C1O.OC(=O)C1=CC=C(O)C=C1",
    "options": [
      {
        "option_id": "A",
        "text": "Intramolecular hydrogen bonding stabilizes the conjugate base of the ortho isomer.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The para isomer undergoes resonance donation that destabilizes the starting acid.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The ortho isomer has less steric hindrance than the para isomer.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The phenolic hydroxyl group of the ortho isomer is strongly basic.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Investigating how intramolecular structural interactions stabilize carboxylate anions.",
      "process": "Step 1: Draw the conjugate base of both isomers.\nStep 2: In the deprotonated ortho-hydroxybenzoate, the carboxylate oxygen is positioned adjacent to the phenolic hydroxyl group.\nStep 3: A strong intramolecular hydrogen bond forms between the carboxylate anion (-COO-) and the hydroxyl hydrogen (-OH), which greatly stabilizes the negative charge.\nStep 4: No such stabilization is possible in the para isomer due to distance.",
      "result": "Intramolecular hydrogen bonding stabilizes the conjugate base of the ortho isomer, dramatically increasing its acidity."
    }
  },
  {
    "question_id": "ch21_q_dynamic_acyl_substitution",
    "topic": "Nucleophilic Acyl Substitutions",
    "difficulty_level": "Hard",
    "question_text": "Match each carboxylic acid derivative to its relative reactivity towards nucleophiles.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(=O)Cl",
        "correctAnswer": "Most Reactive (Acid Chloride)"
      },
      {
        "smiles": "CC(=O)OC(C)=O",
        "correctAnswer": "Highly Reactive (Anhydride)"
      },
      {
        "smiles": "CC(=O)OC",
        "correctAnswer": "Moderately Reactive (Ester)"
      },
      {
        "smiles": "CC(=O)N",
        "correctAnswer": "Least Reactive (Amide)"
      }
    ],
    "match_options": [
      "Most Reactive (Acid Chloride)",
      "Highly Reactive (Anhydride)",
      "Moderately Reactive (Ester)",
      "Least Reactive (Amide)"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect derivative reactivity mapping",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Assessing leaving group ability and resonance stabilization in acyl derivatives.",
      "process": "Chloride is an excellent leaving group with minimal resonance: most reactive. Carboxylate in anhydrides is good. Alkoxide in esters is poor. Amide nitrogen donates electron density strongly via resonance, stabilizing the carbonyl: least reactive.",
      "result": "Reactivity order: Acid Chloride > Anhydride > Ester > Amide."
    }
  }
];
