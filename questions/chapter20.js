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
    "question_smiles": "CC(=O)[NH-].CC([O-])=NH",
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
    "question_smiles": "",
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
    "question_smiles": "F/C=CF.F/C=C/F.C=C(F)F",
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
        "smiles": "F/C=CF",
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
  },
  {
    "question_id": "ch20_acs_q6_butadiene_mos",
    "topic": "ACS: Structure & Hybridization",
    "difficulty_level": "Hard",
    "question_text": "In the molecular orbital description of 1,3-butadiene, how many pi molecular orbitals exist, and how many nodes does the HOMO (Highest Occupied Molecular Orbital) have in its ground state?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "4 pi MOs, 1 node",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4 pi MOs, 2 nodes",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2 pi MOs, 1 node",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "8 pi MOs, 2 nodes",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Applying Molecular Orbital (MO) theory to conjugated dienes.",
      "process": "Step 1: The number of molecular orbitals equals the number of atomic p-orbitals contributing to the system (4 carbons = 4 pi MOs).\nStep 2: In the ground state, the 4 pi electrons occupy the two lowest energy levels. The HOMO is the second orbital (Psi-2).\nStep 3: The number of nodes in orbital Psi-n is n-1. For Psi-2, it is 2-1 = 1 node.",
      "result": "There are 4 pi MOs and the HOMO has 1 node."
    }
  },
  {
    "question_id": "ch20_acs_q7_alkene_stability",
    "topic": "ACS: Structure & Hybridization",
    "difficulty_level": "Medium",
    "question_text": "Rank the following isomeric alkenes in order of decreasing stability (most stable to least stable):\nI. cis-2-butene\nII. trans-2-butene\nIII. 2-methyl-2-butene\nIV. 1-butene",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "III > II > I > IV",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "II > III > I > IV",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "III > II > IV > I",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "IV > I > II > III",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Evaluating alkene stability based on substitution degree and stereochemical steric strain.",
      "process": "Step 1: More substituted alkenes are more stable due to hyperconjugation. 2-methyl-2-butene (trisubstituted, III) is the most stable.\nStep 2: Disubstituted alkenes are next: trans-2-butene (II) is more stable than cis-2-butene (I) because trans minimizes steric clash between methyl groups.\nStep 3: Monosubstituted alkenes (1-butene, IV) are the least stable.",
      "result": "The stability order is III > II > I > IV."
    }
  },
  {
    "question_id": "ch20_acs_q8_furan_aromaticity",
    "topic": "ACS: Structure & Hybridization",
    "difficulty_level": "Medium",
    "question_text": "Explain why furan is aromatic according to Huckel's rule.",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "One of the lone pairs on the oxygen atom resides in a p-orbital and participates in the 6 pi-electron aromatic system.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Both lone pairs on the oxygen atom participate in the pi system, giving 8 pi-electrons.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The oxygen atom is sp3 hybridized, preventing conjugation.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Furan is not aromatic because oxygen is highly electronegative.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding aromaticity in heterocyclic compounds.",
      "process": "Step 1: For furan to be aromatic, it must be planar, cyclic, fully conjugated, and have 4n+2 pi electrons.\nStep 2: The ring contains two double bonds (4 pi electrons).\nStep 3: One of oxygen's lone pairs resides in a p-orbital conjugated with the ring, contributing 2 electrons to make a total of 6 pi electrons (aromatic). The other lone pair resides in an sp2 orbital in the plane of the ring.",
      "result": "Furan is aromatic with 6 pi electrons, utilizing one oxygen lone pair."
    }
  },
  {
    "question_id": "ch20_acs_q9_tautomerism",
    "topic": "ACS: Structure & Hybridization",
    "difficulty_level": "Medium",
    "question_text": "Which of the following compounds contains the highest percentage of enol tautomer at equilibrium?",
    "question_smiles": "CC(=O)CC(=O)C",
    "options": [
      {
        "option_id": "A",
        "text": "2,4-pentanedione (acetylacetone)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclohexanone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl acetate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Evaluating keto-enol tautomerism stability.",
      "process": "Step 1: Standard monocarbonyls exist almost entirely in the keto form (>99.9%).\nStep 2: 2,4-pentanedione is a beta-dicarbonyl.\nStep 3: Its enol form is stabilized by a conjugated pi system (double bond conjugated with carbonyl) and a strong intramolecular hydrogen bond, making it comprise about 76% of the mixture at room temperature.",
      "result": "2,4-pentanedione has the highest enol percentage."
    }
  },
  {
    "question_id": "ch20_acs_q10_boiling_point",
    "topic": "ACS: Structure & Hybridization",
    "difficulty_level": "Easy",
    "question_text": "Why is the boiling point of ethanol (78 °C) significantly higher than that of its constitutional isomer, dimethyl ether (-24 °C)?",
    "question_smiles": "CCO.COC",
    "options": [
      {
        "option_id": "A",
        "text": "Ethanol forms strong intermolecular hydrogen bonds, whereas dimethyl ether only forms weak dipole-dipole interactions.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethanol is more symmetric than dimethyl ether.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dimethyl ether undergoes intramolecular hydrogen bonding.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethanol has a much higher molecular weight than dimethyl ether.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding intermolecular forces and their effects on physical properties.",
      "process": "Step 1: Both isomers have the same molecular formula (C2H6O) and molecular weight (46 g/mol).\nStep 2: Ethanol contains an O-H bond, which enables it to participate in hydrogen bonding with neighboring molecules.\nStep 3: Dimethyl ether contains C-O-C bonds with no hydrogen attached to oxygen, preventing hydrogen bonding.",
      "result": "Hydrogen bonding in ethanol results in a much higher boiling point."
    }
  }
];
