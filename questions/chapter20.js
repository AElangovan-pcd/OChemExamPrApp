// ACS Organic Chemistry Exam Preparation - ACS: Structure & Hybridization
const CHAPTER_20_QUESTIONS = [
  {
    "question_id": "ch20_acs_q1_benzonitrile",
    "topic": "ACS: Structure & Hybridization",
    "difficulty_level": "Easy",
    "question_text": "Identify the hybridization of the designated nitrogen and carbon atoms in the nitrile group of benzonitrile.",
    "question_smiles": "C1=CC=C(C=C1)C#N",
    "options": [
      {
        "option_id": "A",
        "text": "Nitrogen: sp3, Carbon: sp2",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Nitrogen: sp, Carbon: sp",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Nitrogen: sp2, Carbon: sp2",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Nitrogen: sp2, Carbon: sp",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding orbital hybridization in nitriles.",
      "process": "Step 1: Locate the nitrile group (-C#N).\nStep 2: The carbon atom has one triple bond and one single bond (2 electron domains), which corresponds to sp hybridization.\nStep 3: The nitrogen atom has one triple bond and one lone pair (2 electron domains), which also corresponds to sp hybridization.",
      "result": "Both the nitrogen and carbon in the nitrile group are sp hybridized."
    }
  },
  {
    "question_id": "ch20_acs_q2_resonance",
    "topic": "ACS: Structure & Hybridization",
    "difficulty_level": "Medium",
    "question_text": "Which resonance structure of the acetamide anion contributes most significantly to the hybrid structure?",
    "question_smiles": "CC(=O)[NH-].CC([O-])=[NH]",
    "options": [
      {
        "option_id": "A",
        "text": "Structure with negative charge on oxygen: CH3-C(O-)=NH",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Structure with negative charge on nitrogen: CH3-C(=O)-NH-",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Structure with charges on both oxygen and nitrogen",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "All resonance structures contribute equally",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Evaluating the relative stability of resonance structures based on electronegativity.",
      "process": "Step 1: Write down the resonance structures of the deprotonated acetamide anion.\nStep 2: Structure A places the negative charge on the oxygen atom, whereas Structure B places the negative charge on the nitrogen atom.\nStep 3: Since oxygen is more electronegative than nitrogen (3.5 vs 3.0), the structure with the negative charge on oxygen is more stable and contributes more to the resonance hybrid.",
      "result": "The structure with the negative charge on oxygen is the major contributor."
    }
  },
  {
    "question_id": "ch20_acs_q3_aromaticity",
    "topic": "ACS: Structure & Hybridization",
    "difficulty_level": "Medium",
    "question_text": "Which of the following monocyclic compounds is antiaromatic according to Huckel's rule?",
    "question_smiles": "C1=CC=C1.[C-]1C=CC=C1.C1=CC=CC=C1.C1=CNC=C1",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclobutadiene",
        "smiles": "C1=CC=C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclopentadienyl anion",
        "smiles": "[C-]1C=CC=C1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzene",
        "smiles": "C1=CC=CC=C1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Pyrrole",
        "smiles": "C1=CNC=C1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Applying Huckel's rules of aromaticity (4n+2 pi electrons) vs antiaromaticity (4n pi electrons).",
      "process": "Step 1: All structures are monocyclic, planar, and fully conjugated.\nStep 2: Count the pi electrons in cyclobutadiene (4 pi electrons, matches 4n antiaromatic rule).\nStep 3: Count the pi electrons in cyclopentadienyl anion, benzene, and pyrrole (each has 6 pi electrons, matching 4n+2 aromatic rule).",
      "result": "Cyclobutadiene is antiaromatic."
    }
  },
  {
    "question_id": "ch20_acs_q4_formal_charge",
    "topic": "ACS: Structure & Hybridization",
    "difficulty_level": "Easy",
    "question_text": "Calculate the formal charges on the nitrogen and both oxygen atoms in nitromethane, CH3NO2.",
    "question_smiles": "C[N+](=O)[O-]",
    "options": [
      {
        "option_id": "A",
        "text": "Nitrogen: +1, Single-bonded Oxygen: -1, Double-bonded Oxygen: 0",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Nitrogen: 0, Single-bonded Oxygen: -1, Double-bonded Oxygen: +1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Nitrogen: +1, Single-bonded Oxygen: 0, Double-bonded Oxygen: -1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Nitrogen: 0, Single-bonded Oxygen: 0, Double-bonded Oxygen: 0",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Calculating formal charge using valence electrons, bonding electrons, and non-bonding electrons.",
      "process": "Step 1: Formula: Formal Charge = [Valence] - [Lone Pair Electrons] - 0.5 * [Shared Electrons].\nStep 2: Nitrogen (Group 5): 5 - 0 - 4 = +1.\nStep 3: Double-bonded Oxygen (Group 6): 6 - 4 - 2 = 0.\nStep 4: Single-bonded Oxygen (Group 6): 6 - 6 - 1 = -1.",
      "result": "The formal charges are: N = +1, double-bonded O = 0, single-bonded O = -1."
    }
  },
  {
    "question_id": "ch20_acs_q5_dipole",
    "topic": "ACS: Structure & Hybridization",
    "difficulty_level": "Medium",
    "question_text": "Which of the following isomers of difluoroethylene has a net dipole moment of zero?",
    "question_smiles": "F/C=C\F.F/C=C/F.C=C(F)F",
    "options": [
      {
        "option_id": "A",
        "text": "(trans)-1,2-difluoroethylene",
        "smiles": "F/C=C/F",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(cis)-1,2-difluoroethylene",
        "smiles": "F/C=C\F",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,1-difluoroethylene",
        "smiles": "C=C(F)F",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "All of them have a net dipole moment greater than zero",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Evaluating molecular symmetry and vector addition of individual bond dipoles.",
      "process": "Step 1: Draw the structure of the isomers. Both C-F bonds are highly polar.\nStep 2: In trans-1,2-difluoroethylene, the two C-F bond dipoles point in exactly opposite directions.\nStep 3: Because of the molecular symmetry (C2h point group), these vectors cancel out, resulting in a net dipole moment of zero.",
      "result": "The trans isomer has a net dipole moment of zero."
    }
  }
,
{
  "question_id": "ch20_q_dynamic_inductive_acidity",
  "topic": "Carboxylic Acids: Acidities",
  "difficulty_level": "Medium",
  "question_text": "Match each carboxylic acid to its relative acidity based on inductive electron-withdrawing effects.",
  "interaction_type": "matching-list",
  "match_items": [
    {
      "smiles": "CC(=O)O",
      "correctAnswer": "pKa = 4.76 (Weakest Acid)"
    },
    {
      "smiles": "ClCC(=O)O",
      "correctAnswer": "pKa = 2.86 (Medium Acid)"
    },
    {
      "smiles": "FC(F)(F)C(=O)O",
      "correctAnswer": "pKa = 0.23 (Strongest Acid)"
    },
    {
      "smiles": "CCC(=O)O",
      "correctAnswer": "pKa = 4.88 (Extremely Weak Acid)"
    }
  ],
  "match_options": [
    "pKa = 4.76 (Weakest Acid)",
    "pKa = 2.86 (Medium Acid)",
    "pKa = 0.23 (Strongest Acid)",
    "pKa = 4.88 (Extremely Weak Acid)"
  ],
  "options": [
    {
      "option_id": "A",
      "text": "All matched correctly",
      "is_correct": true
    },
    {
      "option_id": "B",
      "text": "Incorrect pKa relative mapping",
      "is_correct": false
    }
  ],
  "feedback": {
    "context": "Evaluating inductive stabilization of conjugate bases.",
    "process": "Electronegative atoms (like fluorine or chlorine) pull electron density away from the carboxylate group, stabilizing the negative charge of the conjugate base. More halogens and higher electronegativity increase acidity.",
    "result": "TFA (trifluoroacetic acid) is the strongest."
  }
}
];
