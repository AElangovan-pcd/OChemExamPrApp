// McMurry Chapter 10 questions
const CHAPTER_10_QUESTIONS = [
  {
    "question_id": "ch10_q1_iupac_branched",
    "topic": "Structure and naming of alkyl halides",
    "difficulty_level": "Easy",
    "question_text": "What is the correct IUPAC name for the branched alkyl halide shown below?",
    "question_smiles": "CC(C)C(Br)C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "3-bromo-2,4-dimethylpentane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-bromo-1,3,4-trimethylbutane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-bromo-1,3-diisopropylpropane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-bromo-2-methyl-4-methylpentane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the fundamentals of IUPAC nomenclature for branched alkyl halides.",
      "process": "Step 1: Identify the longest continuous carbon chain, which contains 5 carbons (pentane).\nStep 2: Number the chain to give substituents the lowest possible locants. Numbering from either side gives 2,4-dimethyl and 3-bromo.\nStep 3: Assemble the name alphabetically (bromo before methyl): 3-bromo-2,4-dimethylpentane.",
      "result": "The correct IUPAC name is 3-bromo-2,4-dimethylpentane."
    }
  },
  {
    "question_id": "ch10_q2_iupac_stereocenter",
    "topic": "Structure and naming of alkyl halides",
    "difficulty_level": "Medium",
    "question_text": "What is the IUPAC name, including the stereochemical descriptor, of the chiral alkyl halide shown below?",
    "question_smiles": "CC(C)(C)[C@@H](Cl)C",
    "options": [
      {
        "option_id": "A",
        "text": "(R)-2-chloro-3,3-dimethylbutane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(S)-2-chloro-3,3-dimethylbutane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(R)-3-chloro-2,2-dimethylbutane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(S)-3-chloro-2,2-dimethylbutane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests IUPAC nomenclature including stereocenter assignment using the Cahn-Ingold-Prelog (CIP) priority rules.",
      "process": "Step 1: Find the longest carbon chain, which is 4 carbons (butane), numbered starting from the right to give the chlorine at C2: 2-chloro-3,3-dimethylbutane.\nStep 2: Determine stereocenter priority at C2: -Cl is 1st, -C(CH3)3 is 2nd, -CH3 is 3rd, and -H is 4th.\nStep 3: Track the direction of 1 -> 2 -> 3. In the (R) configuration, the path is clockwise with H in the back.",
      "result": "The correct name is (R)-2-chloro-3,3-dimethylbutane."
    }
  },
  {
    "question_id": "ch10_q3_iupac_alkene",
    "topic": "Structure and naming of alkyl halides",
    "difficulty_level": "Hard",
    "question_text": "What is the correct IUPAC name for the haloalkene shown below?",
    "question_smiles": "CC(C)C/C(C)=C/Br",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-1-bromo-2,4-dimethylpent-1-ene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-1-bromo-2,4-dimethylpent-1-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)-5-bromo-2,4-dimethylpent-4-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(Z)-5-bromo-2,4-dimethylpent-4-ene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the IUPAC naming of alkenes containing a halogen substituent, focusing on numbering priority and E/Z stereocentered alkene notation.",
      "process": "Step 1: The alkene double bond has priority over the alkyl and halide substituents for numbering. The longest chain containing the double bond has 5 carbons, starting at the carbon with bromine (C1) to give the double bond the lowest locant (1-ene).\nStep 2: Substituents are 1-bromo, 2-methyl, and 4-methyl. This yields 1-bromo-2,4-dimethylpent-1-ene.\nStep 3: For E/Z assignment, at C1, -Br > -H. At C2, -CH2CH(CH3)2 > -CH3. The high priority groups (-Br and -CH2CH(CH3)2) are on opposite sides of the double bond, making it the (E) isomer.",
      "result": "The correct IUPAC name is (E)-1-bromo-2,4-dimethylpent-1-ene."
    }
  },
  {
    "question_id": "ch10_q4_classification_allylic",
    "topic": "Structure and naming of alkyl halides",
    "difficulty_level": "Easy",
    "question_text": "Which of the following compounds is classified as a secondary allylic halide?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "3-bromobut-1-ene",
        "smiles": "CC(Br)C=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-bromobut-1-ene",
        "smiles": "C=CCCBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-bromo-3-methylbut-1-ene",
        "smiles": "CC(C)(Br)C=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-bromobut-2-ene",
        "smiles": "CC(Br)=CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the classification of alkyl halides based on the hybridization of the carbon bearing the halogen and its neighboring atoms.",
      "process": "Step 1: An allylic halide has the halogen atom bonded to an sp3-hybridized carbon adjacent to a C=C double bond.\nStep 2: A secondary allylic halide has two alkyl/alkenyl groups attached to the halogen-bearing carbon.\nStep 3: 3-bromobut-1-ene has the bromine on C3, which is bonded to one hydrogen, a methyl group, and a vinyl group, making it secondary and allylic.",
      "result": "3-bromobut-1-ene is a secondary allylic halide."
    }
  },
  {
    "question_id": "ch10_q5_boiling_point_trends",
    "topic": "Structure and naming of alkyl halides",
    "difficulty_level": "Medium",
    "question_text": "Arrange the following alkyl halides in order of increasing boiling point:\nI. 2-chloro-2-methylpropane\nII. 2-chlorobutane\nIII. 1-chlorobutane\nIV. 1-bromobutane",
    "question_smiles": "CCCCCl",
    "options": [
      {
        "option_id": "A",
        "text": "I < II < III < IV",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "IV < III < II < I",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "I < III < II < IV",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "II < I < III < IV",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the relationship between molecular structure, intermolecular forces, and physical properties (boiling point) of alkyl halides.",
      "process": "Step 1: Among isomers (I, II, and III), branching reduces surface area, making the molecule more spherical. This decreases London dispersion forces and lowers the boiling point: 2-chloro-2-methylpropane (I) < 2-chlorobutane (II) < 1-chlorobutane (III).\nStep 2: Comparing 1-chlorobutane (III) and 1-bromobutane (IV), the heavier and more polarizable bromine atom creates stronger dispersion forces than chlorine, leading to a higher boiling point for 1-bromobutane.\nStep 3: Combining these trends gives the order: I < II < III < IV.",
      "result": "The correct order of increasing boiling point is I < II < III < IV."
    }
  },
  {
    "question_id": "ch10_q6_bond_strength_trends",
    "topic": "Structure and naming of alkyl halides",
    "difficulty_level": "Medium",
    "question_text": "Which of the following statements correctly describes the trend in carbon-halogen bond length and bond dissociation energy (BDE) going from fluoromethane ($CH_3F$) to iodomethane ($CH_3I$)?",
    "question_smiles": "CI",
    "options": [
      {
        "option_id": "A",
        "text": "Bond length increases and BDE decreases from $CH_3F$ to $CH_3I$.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Bond length decreases and BDE increases from $CH_3F$ to $CH_3I$.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both bond length and BDE increase from $CH_3F$ to $CH_3I$.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both bond length and BDE decrease from $CH_3F$ to $CH_3I$.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the periodic trends of carbon-halogen bonds as atomic size increases down the halogen group.",
      "process": "Step 1: As you go down Group 17 from F to I, the atomic radius of the halogen increases significantly.\nStep 2: The larger atomic size leads to a longer distance between the carbon and halogen nuclei, so bond length increases.\nStep 3: Due to the longer bond and poorer overlap between the carbon 2p orbital and the larger halogen valence orbitals (e.g., 5p for iodine), the C-X bond becomes weaker, which decreases the bond dissociation energy (BDE).",
      "result": "Going from fluoromethane to iodomethane, bond length increases and BDE decreases."
    }
  },
  {
    "question_id": "ch10_q7_bicyclic_nomenclature",
    "topic": "Structure and naming of alkyl halides",
    "difficulty_level": "Hard",
    "question_text": "What is the correct IUPAC name for the bicyclic organohalide shown below?",
    "question_smiles": "ClC1CC2CCC1C2",
    "options": [
      {
        "option_id": "A",
        "text": "2-chlorobicyclo[2.2.1]heptane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-chlorobicyclo[2.2.2]octane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5-chlorobicyclo[2.2.1]heptane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-chlorobicyclo[3.2.0]heptane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests IUPAC rules for naming bridged bicyclic systems with halogen substituents.",
      "process": "Step 1: Count the total number of carbons in the bicyclic system. The compound has 7 carbons, hence 'heptane'.\nStep 2: Determine the bridge lengths between the bridgehead carbons: there are two bridges of 2 carbons and one bridge of 1 carbon. This makes it a bicyclo[2.2.1]heptane.\nStep 3: Number starting from a bridgehead carbon, going along the longest bridge first, then the next longest bridge. Minimizing the substituent number gives the chlorine position at C2.",
      "result": "The correct IUPAC name is 2-chlorobicyclo[2.2.1]heptane."
    }
  },
  {
    "question_id": "ch10_q8_dipole_moments",
    "topic": "Structure and naming of alkyl halides",
    "difficulty_level": "Hard",
    "question_text": "Although fluorine is more electronegative than chlorine, chloromethane ($CH_3Cl$, $\\mu = 1.87\\text{ D}$) has a larger dipole moment than fluoromethane ($CH_3F$, $\\mu = 1.85\\text{ D}$). Which of the following statements explains this phenomenon?",
    "question_smiles": "CF",
    "options": [
      {
        "option_id": "A",
        "text": "The dipole moment is the product of charge separation and bond length; the C-Cl bond is sufficiently longer than the C-F bond to outweigh the difference in electronegativity.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The fluorine atom in fluoromethane donates electron density back to carbon via resonance, reducing the dipole moment.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Fluoromethane exists as a dimer in the gas phase, which cancels out its net dipole moment.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The C-F bond has more covalent character than the C-Cl bond, resulting in less actual charge separation.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the physical principles governing molecular polarity and dipole moments in halomethanes.",
      "process": "Step 1: Dipole moment ($\\mu$) is mathematically defined as $\\mu = q \\times d$, where $q$ is the magnitude of the separated charge and $d$ is the distance (bond length).\nStep 2: Fluorine is more electronegative than chlorine, meaning $q$ is larger for the C-F bond.\nStep 3: However, the C-Cl bond (1.78 \u00c5) is significantly longer than the C-F bond (1.39 \u00c5). The greater bond distance $d$ in $CH_3Cl$ outweighs the larger charge separation $q$ in $CH_3F$, resulting in a slightly higher dipole moment for $CH_3Cl$.",
      "result": "The longer C-Cl bond length increases the distance factor of the dipole moment equation, outweighing the electronegativity difference."
    }
  },
  {
    "question_id": "ch10_q9_density_trends",
    "topic": "Structure and naming of alkyl halides",
    "difficulty_level": "Medium",
    "question_text": "Which of the following organohalides is less dense than water ($d < 1.00\\text{ g/mL}$) at room temperature?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "1-chlorobutane",
        "smiles": "CCCCCl",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-bromobutane",
        "smiles": "CCCCBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dichloromethane",
        "smiles": "ClCCl",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Iodomethane",
        "smiles": "CI",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests practical knowledge of the physical properties (specifically density) of organohalides relative to water.",
      "process": "Step 1: Compare the density of different classes of organohalides. Monochloroalkanes generally have densities less than 1.00 g/mL (e.g., 1-chlorobutane is ~0.88 g/mL).\nStep 2: Monobromoalkanes, monoiodoalkanes, and polyhalogenated alkanes (such as $CH_2Cl_2$ or $CHCl_3$) contain heavy halogen atoms that make them significantly denser than water.\nStep 3: Thus, 1-chlorobutane is the only option that will float on water.",
      "result": "1-chlorobutane is less dense than water."
    }
  },
  {
    "question_id": "ch10_q10_gem_vic_dihalides",
    "topic": "Structure and naming of alkyl halides",
    "difficulty_level": "Medium",
    "question_text": "Which of the following IUPAC names represents a geminal dihalide?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "1,1-dichlorobutane",
        "smiles": "CCCC(Cl)Cl",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,2-dichlorobutane",
        "smiles": "CCC(Cl)CCl",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,3-dichlorobutane",
        "smiles": "CC(Cl)CCCl",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,4-dichlorobutane",
        "smiles": "ClCCCCCl",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the chemical terminology used to describe the relative positions of halogens in dihalogenated alkanes.",
      "process": "Step 1: Understand the definitions. 'Geminal' (gem-) refers to substituents on the same carbon atom. 'Vicinal' (vic-) refers to substituents on adjacent carbon atoms.\nStep 2: Look at the locants in the names. 1,1-dichlorobutane has both chlorine atoms on C1, which fits the definition of geminal.\nStep 3: The other options (1,2-, 1,3-, and 1,4-) have chlorines on different carbons; 1,2-dichlorobutane is a vicinal dihalide.",
      "result": "1,1-dichlorobutane is a geminal dihalide."
    }
  },
  {
    "question_id": "ch10_q11_initiation_step_bde",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Medium",
    "question_text": "In the radical chlorination of methane, why does initiation involve the homolytic cleavage of the $Cl-Cl$ bond rather than a $C-H$ bond of methane?",
    "question_smiles": "C",
    "options": [
      {
        "option_id": "A",
        "text": "The $Cl-Cl$ bond is significantly weaker (BDE $\\approx 243\\text{ kJ/mol}$) than the $C-H$ bond (BDE $\\approx 439\\text{ kJ/mol}$), requiring less energy to undergo homolysis.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The $C-H$ bond is polar, which favors heterolytic cleavage over homolytic cleavage.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Chlorine is more electronegative than carbon, which stabilizes the resulting radical intermediate.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methane lacks chromophores and cannot absorb light of any wavelength.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the mechanistic understanding and bond energetics involved in the initiation step of radical halogenations.",
      "process": "Step 1: Radical reactions begin with an initiation step where a bond is homolytically cleaved by light or heat.\nStep 2: The bond that cleaves first is always the weakest one available. The $Cl-Cl$ bond has a BDE of ~243 kJ/mol, while the $C-H$ bond has a BDE of ~439 kJ/mol.\nStep 3: Consequently, the $Cl-Cl$ bond homolytically cleaves under mild irradiation/heating, whereas the $C-H$ bond remains intact.",
      "result": "The lower bond dissociation energy of the $Cl-Cl$ bond causes it to cleave selectively during initiation."
    }
  },
  {
    "question_id": "ch10_q12_propagation_thermodynamics",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Hard",
    "question_text": "Consider the two propagation steps in the radical chlorination of methane:\n1) $\\cdot Cl + CH_4 \\rightarrow \\cdot CH_3 + HCl$\n2) $\\cdot CH_3 + Cl_2 \\rightarrow CH_3Cl + \\cdot Cl$\nWhich of the following statements correctly describes the thermodynamics of these steps?",
    "question_smiles": "C",
    "options": [
      {
        "option_id": "A",
        "text": "Step 1 is slightly endothermic, and Step 2 is highly exothermic, resulting in an overall exothermic propagation cycle.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Step 1 is highly exothermic, and Step 2 is slightly endothermic, resulting in an overall endothermic propagation cycle.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both Step 1 and Step 2 are endothermic, requiring constant energy input to sustain propagation.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both Step 1 and Step 2 are highly exothermic, causing the reaction to run at extremely high rates.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests thermodynamic calculations of individual radical propagation steps using bond dissociation energies.",
      "process": "Step 1: Calculate $\\Delta H$ for Step 1. We break a $C-H$ bond (+439 kJ/mol) and form an $H-Cl$ bond (-431 kJ/mol). $\\Delta H_1 = +439 - 431 = +8\\text{ kJ/mol}$ (slightly endothermic).\nStep 2: Calculate $\\Delta H$ for Step 2. We break a $Cl-Cl$ bond (+243 kJ/mol) and form a $C-Cl$ bond (-351 kJ/mol). $\\Delta H_2 = +243 - 351 = -108\\text{ kJ/mol}$ (highly exothermic).\nStep 3: Sum the steps: $\\Delta H_{\\text{overall}} = +8 - 108 = -100\\text{ kJ/mol}$. Step 1 is endothermic, and Step 2 is highly exothermic.",
      "result": "Step 1 is slightly endothermic, and Step 2 is highly exothermic, driving the overall process exothermically."
    }
  },
  {
    "question_id": "ch10_q13_chlorination_selectivity",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Hard",
    "question_text": "Under free-radical conditions, monochlorination of 2-methylbutane yields a mixture of isomers. Given that the relative reactivity of primary ($1^\\circ$), secondary ($2^\\circ$), and tertiary ($3^\\circ$) $C-H$ bonds toward chlorination at $25^\\circ\\text{C}$ is $1.0 : 3.9 : 5.2$, what is the predicted percentage of 2-chloro-2-methylbutane in the product mixture?",
    "question_smiles": "CCC(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "24%",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "41%",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "50%",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "8%",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the quantitative calculation of product distribution in alkane chlorination using statistical factors and relative reactivities.",
      "process": "Step 1: Identify the types and counts of $C-H$ bonds in 2-methylbutane:\n- $1^\\circ$ hydrogens: 9 (six on the C1/C2-methyls, three on the C4-methyl). Relative rate = $9 \\times 1.0 = 9.0$.\n- $2^\\circ$ hydrogens: 2 (on C3). Relative rate = $2 \\times 3.9 = 7.8$.\n- $3^\\circ$ hydrogens: 1 (on C2). Relative rate = $1 \\times 5.2 = 5.2$.\nStep 2: Calculate total reactivity: $9.0 + 7.8 + 5.2 = 22.0$.\nStep 3: Calculate the proportion of 2-chloro-2-methylbutane (tertiary product): $5.2 / 22.0 \\approx 23.6\\%$. rounding to 24%.",
      "result": "The predicted percentage of 2-chloro-2-methylbutane is 24%."
    }
  },
  {
    "question_id": "ch10_q14_bromination_selectivity",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Medium",
    "question_text": "Reaction of 2-methylbutane with $Br_2$ in the presence of light yields one major monobrominated product. Given the relative reactivity of $1^\\circ : 2^\\circ : 3^\\circ$ hydrogens toward bromination is $1 : 82 : 1600$, what is this major product?",
    "question_smiles": "CCC(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "2-bromo-2-methylbutane",
        "smiles": "CCC(Br)(C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-bromo-3-methylbutane",
        "smiles": "CC(Br)C(C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-bromo-2-methylbutane",
        "smiles": "CCC(C)CBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-bromo-3-methylbutane",
        "smiles": "CC(C)CCBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the extreme selectivity of radical bromination for tertiary positions compared to chlorination.",
      "process": "Step 1: Identify C-H bonds in 2-methylbutane and multiply by relative bromination rates:\n- $1^\\circ$ H: $9 \\times 1 = 9$\n- $2^\\circ$ H: $2 \\times 82 = 164$\n- $3^\\circ$ H: $1 \\times 1600 = 1600$\nStep 2: Total reactivity: $9 + 164 + 1600 = 1773$.\nStep 3: Yield of tertiary product (2-bromo-2-methylbutane): $1600 / 1773 \\approx 90.2\\%$. It is the dominant product by far.",
      "result": "The major product is 2-bromo-2-methylbutane."
    }
  },
  {
    "question_id": "ch10_q15_hammond_postulate",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Hard",
    "question_text": "According to the Hammond Postulate, why is radical bromination of alkanes highly selective for tertiary positions compared to radical chlorination?",
    "question_smiles": "C",
    "options": [
      {
        "option_id": "A",
        "text": "Hydrogen abstraction by a bromine radical is endothermic, leading to a late, product-like transition state where the radical character is highly developed and stabilized by alkyl groups.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Hydrogen abstraction by a chlorine radical is endothermic, leading to an early, reactant-like transition state where alkyl substituents have no effect.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Bromine is a larger radical and cannot access primary hydrogens due to steric hindrance.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The transition state of chlorination is late and resembles the carbocation intermediate, which has lower stability requirements.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the application of the Hammond Postulate to explain the differences in selectivity between radical chlorination and bromination.",
      "process": "Step 1: Check the energetics. Hydrogen abstraction by a bromine radical is endothermic ($\\Delta H \\approx +42\\text{ kJ/mol}$), whereas hydrogen abstraction by a chlorine radical is exothermic ($\\Delta H \\approx -8\\text{ kJ/mol}$).\nStep 2: According to the Hammond Postulate, endothermic steps have 'late' transition states that resemble the products (the alkyl radical intermediate).\nStep 3: Consequently, the transition state for bromination has substantial radical character, and its energy is heavily affected by radical stability ($3^\\circ > 2^\\circ > 1^\\circ$). Chlorination has an 'early' transition state with little radical character developed, showing low selectivity.",
      "result": "The endothermic hydrogen abstraction by bromine radical creates a late, highly selective transition state."
    }
  },
  {
    "question_id": "ch10_q16_stereochemistry_butane_chlorination",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Medium",
    "question_text": "Photochemical monochlorination of butane yields 2-chlorobutane. Which of the following statements correctly describes the stereochemistry of the 2-chlorobutane obtained?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "It is a 1:1 racemic mixture of (R)- and (S)-2-chlorobutane because the intermediate sec-butyl radical is planar and achiral.",
        "smiles": "CC(Cl)CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It is optically active (S)-2-chlorobutane due to asymmetric induction by the neighboring methyl group.",
        "smiles": "C[C@H](Cl)CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It is a meso compound because the starting material is symmetric.",
        "smiles": "CC(Cl)CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It is optically active (R)-2-chlorobutane because chlorine attacks from the less hindered face.",
        "smiles": "C[C@@H](Cl)CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the stereochemical outcome of radical substitution at an achiral carbon atom.",
      "process": "Step 1: Hydrogen abstraction at C2 of butane yields a secondary butyl radical intermediate.\nStep 2: The radical carbon is $sp^2$-hybridized, planar, and achiral.\nStep 3: Chlorine molecules ($Cl_2$) can react with equal probability from either the top or bottom face of this planar intermediate, producing a 50:50 (racemic) mixture of (R)- and (S)-2-chlorobutane.",
      "result": "The product is a racemic mixture of (R)- and (S)-2-chlorobutane."
    }
  },
  {
    "question_id": "ch10_q17_diastereotopic_chlorination",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Hard",
    "question_text": "Photochemical monochlorination of (S)-2-fluorobutane at C3 yields a mixture of 2-chloro-3-fluorobutanes. Which of the following statements describes the product distribution at C3?",
    "question_smiles": "CC[C@@H](F)C",
    "options": [
      {
        "option_id": "A",
        "text": "An unequal mixture of diastereomers is formed because the pre-existing stereocenter at C2 makes the two faces of the C3 radical intermediate diastereotopic.",
        "smiles": "C[C@H](Cl)[C@@H](F)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A 1:1 racemic mixture of enantiomers is formed because the C3 radical intermediate is planar and achiral.",
        "smiles": "C[C@H](Cl)[C@@H](F)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A single meso compound is formed exclusively.",
        "smiles": "C[C@@H](Cl)[C@@H](F)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "No reaction occurs at C3 because the electronegative fluorine atom deactivates the adjacent position entirely.",
        "smiles": "CC[C@@H](F)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests stereochemical principles when a new stereocenter is generated in a molecule that already contains a chiral center.",
      "process": "Step 1: Radical formation at C3 yields a planar radical. However, the molecule is chiral due to the fixed (S)-stereocenter at C2.\nStep 2: Because of the chiral center at C2, the two faces (top and bottom) of the C3 radical are diastereotopic.\nStep 3: Chlorine attacks the two faces at different rates due to steric and electronic differences, resulting in an unequal mixture of diastereomers (e.g., (2S,3R)- and (2S,3S)-2-chloro-3-fluorobutane).",
      "result": "An unequal mixture of diastereomers is formed due to the diastereotopic faces of the radical intermediate."
    }
  },
  {
    "question_id": "ch10_q18_radical_stability_ranking",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Medium",
    "question_text": "Which of the following lists carbon radicals in order of decreasing stability?",
    "question_smiles": "C=C",
    "options": [
      {
        "option_id": "A",
        "text": "allylic > tertiary ($3^\\circ$) > secondary ($2^\\circ$) > vinylic",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "tertiary ($3^\\circ$) > allylic > secondary ($2^\\circ$) > vinylic",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "vinylic > secondary ($2^\\circ$) > tertiary ($3^\\circ$) > allylic",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "allylic > secondary ($2^\\circ$) > tertiary ($3^\\circ$) > vinylic",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the relative thermodynamic stabilities of carbon-centered radicals.",
      "process": "Step 1: Allylic radicals are stabilized by resonance delocalization of the unpaired electron across a $\\pi$ system, making them more stable than tertiary radicals.\nStep 2: Alkyl radicals are stabilized by hyperconjugation and inductive donation from alkyl groups ($3^\\circ > 2^\\circ > 1^\\circ$).\nStep 3: Vinylic radicals have the unpaired electron in an $sp^2$ orbital, which has more s-character and holds the electron closer to the nucleus. This is highly unstable compared to $sp^3$-hybridized radicals.",
      "result": "The correct stability order is: allylic > tertiary > secondary > vinylic."
    }
  },
  {
    "question_id": "ch10_q19_bromination_methylcyclohexane",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Medium",
    "question_text": "What is the major monobrominated product of the reaction of methylcyclohexane with $Br_2$ in the presence of light?",
    "question_smiles": "CC1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "1-bromo-1-methylcyclohexane",
        "smiles": "CC1(Br)CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(bromomethyl)cyclohexane",
        "smiles": "BrCC1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "trans-1-bromo-2-methylcyclohexane",
        "smiles": "C[C@@H]1CCCC[C@H]1Br",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "trans-1-bromo-4-methylcyclohexane",
        "smiles": "C[C@@H]1CC[C@H]1Br",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the selectivity of radical bromination on a cyclic alkane containing a tertiary carbon.",
      "process": "Step 1: Identify all hydrogen types in methylcyclohexane. There are primary, secondary, and one tertiary hydrogen.\nStep 2: Radical bromination is highly selective for tertiary C-H bonds (reactivity ratio is 1600:82:1).\nStep 3: The tertiary hydrogen is located at C1. Abstraction yields a stable tertiary radical intermediate, which reacts with $Br_2$ to form 1-bromo-1-methylcyclohexane.",
      "result": "The major product is 1-bromo-1-methylcyclohexane."
    }
  },
  {
    "question_id": "ch10_q20_radical_initiators",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Medium",
    "question_text": "Which of the following compounds is a common radical initiator containing a weak peroxide ($O-O$) bond?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Benzoyl peroxide",
        "smiles": "O=C(OOC(=O)c1ccccc1)c2ccccc2",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Azobisisobutyronitrile (AIBN)",
        "smiles": "CC(C)(C#N)/N=N/C(C)(C)C#N",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dimethyl sulfoxide (DMSO)",
        "smiles": "CS(=O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "N-bromosuccinimide (NBS)",
        "smiles": "O=C1CCC(=O)N1Br",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the structures and chemical properties of common reagents used to initiate radical reactions.",
      "process": "Step 1: Radical initiators must have bonds that easily undergo homolytic cleavage.\nStep 2: Benzoyl peroxide contains a weak $O-O$ single bond (BDE $\\approx 150\\text{ kJ/mol}$) that breaks homolytically upon mild heating or light exposure.\nStep 3: AIBN is also a radical initiator, but it contains a weak carbon-nitrogen bond and releases nitrogen gas, not a peroxide bond.",
      "result": "Benzoyl peroxide is a peroxide-based radical initiator."
    }
  },
  {
    "question_id": "ch10_q21_ether_autooxidation",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Hard",
    "question_text": "Diisopropyl ether is notoriously prone to forming explosive peroxides when exposed to air and light. Which of the following intermediates is responsible for the initiation of this autooxidation?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "A carbon radical at the tertiary carbon adjacent to the oxygen atom",
        "smiles": "CC(C)O[C](C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A carbon radical at one of the primary methyl carbons",
        "smiles": "CC(C)OC(C)[CH2]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "An oxygen radical formed by homolytic cleavage of the C-O ether bond",
        "smiles": "CC(C)[O]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A carbon radical at the central oxygen atom",
        "smiles": "CC(C)OC(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests radical reactions that occur during the degradation of common lab solvents (autooxidation of ethers).",
      "process": "Step 1: Ethers have C-H bonds adjacent to the oxygen atom ($\\alpha$-hydrogens) that are weakened by resonance stabilization from the oxygen lone pair.\nStep 2: In diisopropyl ether, this carbon is tertiary, making it particularly weak and susceptible to radical abstraction.\nStep 3: Radical abstraction at this position yields a tertiary carbon-centered radical adjacent to oxygen, which reacts with triplet oxygen ($O_2$) to start the peroxide cascade.",
      "result": "The autooxidation initiates at the tertiary carbon adjacent to the oxygen atom."
    }
  },
  {
    "question_id": "ch10_q22_neopentane_equivalence",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Easy",
    "question_text": "Why does the radical chlorination of 2,2-dimethylpropane (neopentane) yield only a single monochlorinated product?",
    "question_smiles": "CC(C)(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "All 12 hydrogens in the molecule are chemically equivalent.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The intermediate radical is too sterically hindered to react at other positions.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Chlorine radicals are highly selective and only target the central carbon.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The central carbon lacks any C-H bonds, preventing substitution there.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the concept of chemical equivalence and symmetry in determining radical halogenation product outcomes.",
      "process": "Step 1: Examine the structure of neopentane, $C(CH_3)_4$.\nStep 2: There are 4 methyl groups attached to a quaternary carbon. The quaternary carbon has no hydrogens.\nStep 3: All 12 hydrogens on the 4 methyl groups are chemically equivalent by symmetry. Abstraction of any of these hydrogens yields the same primary radical and thus a single monochlorination product (1-chloro-2,2-dimethylpropane).",
      "result": "Symmetry and equivalence of all 12 hydrogens lead to a single monochlorinated product."
    }
  },
  {
    "question_id": "ch10_q23_ethylbenzene_bromination",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the photochemical reaction of ethylbenzene with $Br_2$?",
    "question_smiles": "CCc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "(1-bromoethyl)benzene",
        "smiles": "CC(Br)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2-bromoethyl)benzene",
        "smiles": "CCC(Br)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-bromo-4-ethylbenzene",
        "smiles": "CCc1ccc(Br)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-bromo-2-ethylbenzene",
        "smiles": "CCc1ccccc1Br",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests selectivity in radical halogenations when a highly stabilized benzylic position is present.",
      "process": "Step 1: Identify the C-H bonds in ethylbenzene: aromatic, primary aliphatic, and secondary benzylic.\nStep 2: Benzylic C-H bonds have lower bond dissociation energies (BDE $\\approx 356\\text{ kJ/mol}$) than standard aliphatic C-H bonds because the resulting radical is resonance-stabilized by the benzene ring.\nStep 3: Bromine radical selectively abstracts the secondary benzylic hydrogen to form the stable (1-phenylethyl) radical, which then reacts with $Br_2$ to form (1-bromoethyl)benzene.",
      "result": "The major product is (1-bromoethyl)benzene."
    }
  },
  {
    "question_id": "ch10_q24_nbs_role_mechanism",
    "topic": "Allylic bromination using NBS",
    "difficulty_level": "Hard",
    "question_text": "During the allylic bromination of cyclohexene with N-bromosuccinimide (NBS), what is the primary role of the NBS reagent?",
    "question_smiles": "C1=CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "It reacts with trace $HBr$ to generate a constant, very low concentration of $Br_2$, preventing electrophilic addition across the double bond.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It undergoes homolytic cleavage of its N-Br bond to act as the primary hydrogen abstracting species.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It acts as a phase-transfer catalyst to solubilize the bromine radicals in $CCl_4$.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It undergoes syn-addition to the double bond, followed by elimination of succinimide.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the mechanistic role of NBS in allylic brominations, explaining how the competing ionic addition reaction is bypassed.",
      "process": "Step 1: Ionic electrophilic addition of $Br_2$ to alkenes requires high concentration of $Br_2$.\nStep 2: NBS reacts rapidly with $HBr$ formed in the propagation step to produce succinimide and $Br_2$.\nStep 3: This keeps the concentration of $Br_2$ extremely low, which suppresses the electrophilic addition rate (a bimolecular reaction in bromine/alkene) and allows the radical propagation pathway (allylic bromination) to dominate.",
      "result": "NBS maintains a low concentration of $Br_2$ by reacting with trace $HBr$."
    }
  },
  {
    "question_id": "ch10_q25_cyclohexene_nbs",
    "topic": "Allylic bromination using NBS",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product obtained when cyclohexene is reacted with NBS in $CCl_4$ under irradiation with light?",
    "question_smiles": "C1=CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "3-bromocyclohexene",
        "smiles": "BrC1C=CCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "trans-1,2-dibromocyclohexane",
        "smiles": "Br[C@@H]1CCCC[C@H]1Br",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-bromocyclohexene",
        "smiles": "BrC1=CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-bromocyclohexene",
        "smiles": "BrC1CC=CCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the product identification in allylic bromination of a simple symmetric cyclic alkene.",
      "process": "Step 1: Locate the allylic positions in cyclohexene. C3 and C6 are the two equivalent allylic positions.\nStep 2: Radical abstraction of a hydrogen from C3/C6 yields a resonance-stabilized allylic radical.\nStep 3: Reaction of this radical with $Br_2$ gives 3-bromocyclohexene.",
      "result": "The major product is 3-bromocyclohexene."
    }
  },
  {
    "question_id": "ch10_q26_butene_nbs",
    "topic": "Allylic bromination using NBS",
    "difficulty_level": "Hard",
    "question_text": "Allylic bromination of 1-butene with NBS and light yields a mixture of 3-bromobut-1-ene and 1-bromobut-2-ene. Which of the following statements explains this result?",
    "question_smiles": "CCC=C",
    "options": [
      {
        "option_id": "A",
        "text": "The allylic radical intermediate is stabilized by resonance, delocalizing the unpaired electron between C1 and C3.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The reaction proceeds via a carbocation intermediate that undergoes a 1,2-hydride shift.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "NBS reacts via both radical and ionic mechanisms simultaneously.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-bromobut-2-ene is formed by the radical addition of $HBr$ to the double bond.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests resonance stabilization of allylic radicals and its impact on product mixtures.",
      "process": "Step 1: Radical abstraction of the allylic hydrogen at C3 of 1-butene yields an allylic radical.\nStep 2: The radical is resonance-stabilized: $CH_2=CH-\\dot{C}H-CH_3 \\leftrightarrow \\dot{C}H_2-CH=CH-CH_3$.\nStep 3: Bromine transfer can occur at either C3 (yielding 3-bromobut-1-ene) or C1 (yielding 1-bromobut-2-ene).",
      "result": "Resonance delocalization of the radical intermediate between C1 and C3 yields both products."
    }
  },
  {
    "question_id": "ch10_q27_methylcyclohexene_nbs",
    "topic": "Allylic bromination using NBS",
    "difficulty_level": "Hard",
    "question_text": "Considering the resonance structures of allylic radical intermediates, which of the following compounds is NOT formed when 3-methylcyclohexene is treated with NBS and light?",
    "question_smiles": "CC1C=CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "4-bromo-3-methylcyclohexene",
        "smiles": "CC1C(Br)C=CCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-bromo-3-methylcyclohexene",
        "smiles": "CC1(Br)C=CCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-bromo-1-methylcyclohexene",
        "smiles": "CC1=CCCC(Br)C1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "6-bromo-3-methylcyclohexene",
        "smiles": "CC1C=CCC(Br)C1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the identification of allylic positions and resonance-stabilized intermediates in unsymmetrical cyclohexene derivatives.",
      "process": "Step 1: Identify allylic positions in 3-methylcyclohexene (double bond at C1-C2, methyl at C3). The allylic positions are C3 (tertiary) and C6 (secondary).\nStep 2: Abstraction of H from C3 yields a radical at C3, which has resonance to C1 (yielding 3-bromo-3-methylcyclohexene and 3-bromo-1-methylcyclohexene).\nStep 3: Abstraction of H from C6 yields a radical at C6, which has resonance to C2 (yielding 6-bromo-3-methylcyclohexene and 2-bromo-3-methylcyclohexene).\nStep 4: C4 is a homoallylic position, not an allylic position. A radical cannot be stabilized there directly by the double bond, so 4-bromo-3-methylcyclohexene is not formed.",
      "result": "4-bromo-3-methylcyclohexene is not formed because C4 is not an allylic position."
    }
  },
  {
    "question_id": "ch10_q28_methylenecyclohexane_nbs",
    "topic": "Allylic bromination using NBS",
    "difficulty_level": "Hard",
    "question_text": "Allylic bromination of methylenecyclohexane with NBS and light yields a mixture of products. Which of the following is the major product under thermodynamic control?",
    "question_smiles": "C=C1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "1-(bromomethyl)cyclohexene",
        "smiles": "BrCC1=CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-bromomethylenecyclohexane",
        "smiles": "C=C1CCCC(Br)C1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-bromomethylcyclohexane",
        "smiles": "BrCC1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-bromomethylenecyclohexane",
        "smiles": "C=C1CCC(Br)CC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the concept of thermodynamic stability of alkene isomers in radical allylic brominations.",
      "process": "Step 1: Abstraction of an allylic hydrogen from the ring C2 of methylenecyclohexane yields an allylic radical.\nStep 2: This radical has two resonance contributors: one with an exocyclic double bond and one with an endocyclic double bond.\nStep 3: Bromination of the endocyclic contributor yields 1-(bromomethyl)cyclohexene, which has a more stable, trisubstituted endocyclic double bond. Bromination of the exocyclic contributor yields 3-bromomethylenecyclohexane, which has a less stable, disubstituted exocyclic double bond.",
      "result": "Under thermodynamic control, the major product is the more stable isomer 1-(bromomethyl)cyclohexene."
    }
  },
  {
    "question_id": "ch10_q29_pentene_nbs",
    "topic": "Allylic bromination using NBS",
    "difficulty_level": "Hard",
    "question_text": "Treatment of (E)-pent-2-ene with NBS and light gives a mixture of allylic bromides. Which of the following compounds is NOT a product of this reaction?",
    "question_smiles": "CC=CCC",
    "options": [
      {
        "option_id": "A",
        "text": "5-bromopent-2-ene",
        "smiles": "BrCCC=CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-bromopent-2-ene",
        "smiles": "BrCC=CCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-bromopent-1-ene",
        "smiles": "CCC(Br)C=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-bromopent-2-ene",
        "smiles": "CC(Br)C=CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the ability to map allylic radicals and their resonance hybrids to specific brominated products for unsymmetric alkenes.",
      "process": "Step 1: The allylic positions of (E)-pent-2-ene ($CH_3-CH=CH-CH_2-CH_3$) are C1 and C4.\nStep 2: Abstraction at C1 gives a radical that resonance delocalizes to C3, yielding 1-bromopent-2-ene and 3-bromopent-1-ene.\nStep 3: Abstraction at C4 gives a radical that resonance delocalizes to C2, yielding 4-bromopent-2-ene.\nStep 4: C5 is a homoallylic carbon. Radicals do not form there readily, so 5-bromopent-2-ene is not produced.",
      "result": "5-bromopent-2-ene is not formed because C5 is not an allylic position."
    }
  },
  {
    "question_id": "ch10_q30_methylcyclopentene_nbs",
    "topic": "Allylic bromination using NBS",
    "difficulty_level": "Hard",
    "question_text": "What is the major allylic bromide product formed when 1-methylcyclopentene is treated with NBS and light?",
    "question_smiles": "CC1=CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "3-bromo-1-methylcyclopentene",
        "smiles": "CC1=CC(Br)CC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-bromo-1-methylcyclopentene",
        "smiles": "CC1(Br)C=CCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-bromo-1-methylcyclopentene",
        "smiles": "CC1=C(Br)CCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-bromo-1-methylcyclopentene",
        "smiles": "CC1=CCC(Br)C1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests regiochemical preferences in allylic brominations of methylcyclopentenes.",
      "process": "Step 1: Identify allylic positions in 1-methylcyclopentene: C3 (secondary), C5 (secondary), and the methyl group (primary).\nStep 2: Abstraction at C3 (secondary allylic) gives a stable radical that maintains the trisubstituted double bond framework.\nStep 3: Reaction of this C3 radical intermediate with bromine source gives 3-bromo-1-methylcyclopentene as the major product.",
      "result": "The major allylic bromide is 3-bromo-1-methylcyclopentene."
    }
  },
  {
    "question_id": "ch10_q31_methylenecyclobutane_nbs",
    "topic": "Allylic bromination using NBS",
    "difficulty_level": "Hard",
    "question_text": "Allylic bromination of methylenecyclobutane with NBS yields a compound with the formula $C_5H_7Br$. What is the IUPAC name of the major product under thermodynamic control?",
    "question_smiles": "C=C1CCC1",
    "options": [
      {
        "option_id": "A",
        "text": "1-(bromomethyl)cyclobutene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-bromomethylenecyclobutane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Bromo-2-methylcyclobutene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-bromomethylenecyclobutane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the thermodynamic stabilization of double bonds in small rings following radical resonance pathways.",
      "process": "Step 1: Abstraction of allylic hydrogen from C2 of methylenecyclobutane yields an allylic radical.\nStep 2: The radical has resonance delocalization between C2 and the exocyclic carbon.\nStep 3: Bromination at the exocyclic carbon yields 1-(bromomethyl)cyclobutene, which possesses a more stable, trisubstituted endocyclic double bond that reduces ring strain compared to exocyclic alkenes.",
      "result": "The thermodynamic major product is 1-(bromomethyl)cyclobutene."
    }
  },
  {
    "question_id": "ch10_q32_grignard_solvent",
    "topic": "Organometallic reagents",
    "difficulty_level": "Medium",
    "question_text": "In the preparation of a Grignard reagent, anhydrous diethyl ether or tetrahydrofuran (THF) must be used as the solvent. What is the key role of the ether solvent?",
    "question_smiles": "CCCCBr",
    "options": [
      {
        "option_id": "A",
        "text": "The lone pairs on the ether oxygen coordinate to the magnesium atom, stabilizing the Lewis acidic organometallic complex.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The ether solvent acts as a radical inhibitor to prevent coupling of the alkyl radicals.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The ether protonates the magnesium metal to initiate the reaction.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The ether solvent increases the electrophilicity of the alkyl halide.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the coordination chemistry and solvation requirements of Grignard reagents.",
      "process": "Step 1: Grignard reagents ($RMgX$) feature a highly polar C-Mg bond where Mg is electron-deficient (a Lewis acid).\nStep 2: Ethers (like diethyl ether or THF) have oxygen atoms with lone pairs that act as Lewis bases.\nStep 3: Two ether molecules coordinate to the magnesium atom, forming a stable tetrahedral complex that keeps the Grignard reagent soluble and active.",
      "result": "Ether coordinates to and stabilizes the magnesium center via Lewis acid-base interactions."
    }
  },
  {
    "question_id": "ch10_q33_grignard_oxidation_states",
    "topic": "Organometallic reagents",
    "difficulty_level": "Medium",
    "question_text": "During the formation of phenylmagnesium bromide from bromobenzene and magnesium metal, what are the changes in the oxidation states of the carbon atom bonded to bromine and the magnesium atom?",
    "question_smiles": "Brc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Carbon is reduced and magnesium is oxidized from $Mg(0)$ to $Mg(II)$.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Carbon is oxidized and magnesium is reduced from $Mg(II)$ to $Mg(0)$.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both carbon and magnesium are oxidized.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both carbon and magnesium are reduced.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the redox nature of organometallic reagent formation.",
      "process": "Step 1: In bromobenzene, the ipso carbon is bonded to a more electronegative bromine (C has a positive formal oxidation state in C-Br).\nStep 2: In phenylmagnesium bromide, the carbon is bonded to magnesium, which is electropositive ($chi = 1.31$ vs $2.55$ for C), giving carbon a negative formal charge (reduction).\nStep 3: Magnesium metal starts as $Mg(0)$ and is oxidized to $Mg(II)$ in the organometallic species.",
      "result": "Carbon is reduced and magnesium is oxidized during Grignard formation."
    }
  },
  {
    "question_id": "ch10_q34_grignard_protonation",
    "topic": "Organometallic reagents",
    "difficulty_level": "Easy",
    "question_text": "Treatment of cyclopentylmagnesium bromide with deuterium oxide ($D_2O$) yields which of the following compounds?",
    "question_smiles": "C1CCC(C1)[Mg]Br",
    "options": [
      {
        "option_id": "A",
        "text": "monodeuteriocyclopentane",
        "smiles": "[2H]C1CCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "cyclopentanol",
        "smiles": "OC1CCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "cyclopentene",
        "smiles": "C1=CCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,1-dideuteriocyclopentane",
        "smiles": "[2H]C1([2H])CCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the strong basicity of Grignard reagents and their reaction with weak acids (deuterium oxide).",
      "process": "Step 1: Grignard reagents are extremely strong bases (conjugate bases of alkanes, $pK_a \\approx 50$).\nStep 2: They react instantly with proton/deuteron donors such as water or $D_2O$.\nStep 3: Protonation/deuteration of cyclopentylmagnesium bromide with $D_2O$ replaces the $-MgBr$ group with a deuterium atom, yielding monodeuteriocyclopentane.",
      "result": "The reaction yields monodeuteriocyclopentane."
    }
  },
  {
    "question_id": "ch10_q35_grignard_compatibility",
    "topic": "Organometallic reagents",
    "difficulty_level": "Medium",
    "question_text": "Which of the following compounds CANNOT be successfully converted into a Grignard reagent because of an incompatible functional group?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "4-bromobutan-1-ol",
        "smiles": "OCCCCBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-bromobutane",
        "smiles": "CCCCBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-bromobut-1-ene",
        "smiles": "C=CCCBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "bromobenzene",
        "smiles": "Brc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the compatibility of functional groups with Grignard reagents.",
      "process": "Step 1: Grignard reagents are highly basic and nucleophilic.\nStep 2: They are incompatible with acidic protons (such as those in -OH, -NH2, -COOH groups) or electrophilic groups (such as carbonyls, epoxides, nitriles).\nStep 3: 4-bromobutan-1-ol contains an acidic alcohol (-OH) group. As soon as the Grignard reagent starts to form, it will deprotonate the hydroxyl group of another molecule, destroying the reagent.",
      "result": "4-bromobutan-1-ol is incompatible due to its acidic hydroxyl group."
    }
  },
  {
    "question_id": "ch10_q36_organolithium_stoichiometry",
    "topic": "Organometallic reagents",
    "difficulty_level": "Medium",
    "question_text": "How many equivalents of lithium metal are required to completely convert 1 mole of 1-bromobutane into 1 mole of butyllithium?",
    "question_smiles": "CCCCBr",
    "options": [
      {
        "option_id": "A",
        "text": "2 equivalents",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1 equivalent",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3 equivalents",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4 equivalents",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the stoichiometry of the preparation of organolithium reagents from alkyl halides.",
      "process": "Step 1: Write down the balanced chemical equation for the formation of organolithium reagents:\n$R-X + 2\\text{ Li} \\rightarrow R-\\text{Li} + \\text{LiX}$.\nStep 2: For every mole of alkyl halide, 2 moles of lithium metal are required: one mole to form the carbon-lithium bond and one mole to form the lithium halide salt.\nStep 3: Thus, 2 equivalents of lithium metal are required.",
      "result": "2 equivalents of lithium metal are required."
    }
  },
  {
    "question_id": "ch10_q37_lithium_vs_magnesium",
    "topic": "Organometallic reagents",
    "difficulty_level": "Medium",
    "question_text": "Which of the following statements correctly compares the reactivity of organolithium reagents ($R-Li$) and Grignard reagents ($R-MgX$)?",
    "question_smiles": "CCCC[Li]",
    "options": [
      {
        "option_id": "A",
        "text": "Organolithium reagents are more basic and nucleophilic because the C-Li bond is more polar (ionic) than the C-Mg bond.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Grignard reagents are more nucleophilic because magnesium has a higher atomic number than lithium.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Organolithium reagents are weaker bases because lithium is more electronegative than magnesium.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both reagents have identical reactivity toward carbonyl compounds.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the electronic properties and reactivity differences of different organometallic reagents.",
      "process": "Step 1: Check electronegativity values: $\\chi(\\text{Li}) = 0.98$, $\\chi(\\text{Mg}) = 1.31$, and $\\chi(\\text{C}) = 2.55$.\nStep 2: The electronegativity difference in C-Li (1.57) is greater than in C-Mg (1.24), meaning the C-Li bond has more ionic character.\nStep 3: The greater partial negative charge on the carbon in organolithium reagents makes them more reactive nucleophiles and stronger bases.",
      "result": "Organolithium reagents are more polar and therefore more reactive than Grignard reagents."
    }
  },
  {
    "question_id": "ch10_q38_gilman_stoichiometry",
    "topic": "Organometallic reagents",
    "difficulty_level": "Medium",
    "question_text": "Lithium dialkylcopper reagents (Gilman reagents) are prepared by reacting an organolithium reagent with copper(I) iodide. What is the stoichiometry of this reaction?",
    "question_smiles": "CCCC[Li]",
    "options": [
      {
        "option_id": "A",
        "text": "$2\\text{ RLi} + \\text{CuI} \\rightarrow \\text{R}_2\\text{CuLi} + \\text{LiI}$",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$\\text{RLi} + \\text{CuI} \\rightarrow \\text{RCu} + \\text{LiI}$",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$2\\text{ RLi} + 2\\text{ CuI} \\rightarrow \\text{R}_2\\text{Cu}_2 + 2\\text{ LiI}$",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$3\\text{ RLi} + \\text{CuI} \\rightarrow \\text{R}_3\\text{CuLi}_2 + \\text{LiI}$",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the stoichiometry and preparation of Gilman reagents.",
      "process": "Step 1: The preparation of Gilman reagents ($R_2CuLi$) is a two-step transmetalation.\nStep 2: First, 1 equivalent of $RLi$ reacts with $CuI$ to form the alkylcopper intermediate ($RCu$).\nStep 3: A second equivalent of $RLi$ coordinates to the copper atom to form the soluble cuprate complex: $RCu + RLi \\rightarrow R_2CuLi$. Thus, the ratio is 2 RLi to 1 CuI.",
      "result": "The correct stoichiometry is 2 RLi + 1 CuI -> R2CuLi + LiI."
    }
  },
  {
    "question_id": "ch10_q39_gilman_coupling",
    "topic": "Organometallic reagents",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product obtained from the reaction of lithium dimethylcopper with 1-iodooctane?",
    "question_smiles": "CCCCCCCCI",
    "options": [
      {
        "option_id": "A",
        "text": "nonane",
        "smiles": "CCCCCCCCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "decane",
        "smiles": "CCCCCCCCCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "octane",
        "smiles": "CCCCCCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-methyloctane",
        "smiles": "CCCCCC(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the coupling reaction of Gilman reagents with primary alkyl halides (Corey-Posner, Whitesides-House reaction).",
      "process": "Step 1: Gilman reagents ($R_2CuLi$) react with primary or secondary alkyl halides ($R'-X$) to form carbon-carbon bonds ($R-R'$).\nStep 2: Here, lithium dimethylcopper (delivers a methyl group) reacts with 1-iodooctane (8 carbons).\nStep 3: The methyl group replaces the iodine atom, yielding a 9-carbon straight chain: nonane.",
      "result": "The coupling yields nonane."
    }
  },
  {
    "question_id": "ch10_q40_gilman_stereospecificity",
    "topic": "Organometallic reagents",
    "difficulty_level": "Hard",
    "question_text": "The coupling of a Gilman reagent with a vinylic halide is stereospecific. If lithium diethylcopper is reacted with (E)-1-iodohex-1-ene, what is the configuration of the double bond in the product?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-oct-3-ene",
        "smiles": "CCCC/C=C/CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-oct-3-ene",
        "smiles": "CCCC/C=C\\CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A 1:1 mixture of (E)- and (Z)-oct-3-ene",
        "smiles": "CCCC/C=C/CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "oct-4-yne",
        "smiles": "CCCC#CCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the stereochemical course of organocuprate coupling reactions with vinylic halides.",
      "process": "Step 1: Gilman coupling with vinyl halides proceeds with retention of double bond stereochemistry.\nStep 2: (E)-1-iodohex-1-ene has the (E) configuration.\nStep 3: Replacing the iodine atom with an ethyl group from the diethylcuprate reagent yields oct-3-ene while retaining the (E) stereochemistry: (E)-oct-3-ene.",
      "result": "The reaction proceeds with retention of configuration to yield (E)-oct-3-ene."
    }
  },
  {
    "question_id": "ch10_q41_gilman_vs_grignard_conjugate",
    "topic": "Organometallic reagents",
    "difficulty_level": "Hard",
    "question_text": "Which of the following statements correctly describes the difference in reactivity between a Grignard reagent and a Gilman reagent when reacted with cyclohex-2-en-1-one?",
    "question_smiles": "O=C1C=CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "The Grignard reagent undergoes 1,2-addition to the carbonyl carbon, whereas the Gilman reagent undergoes 1,4-addition to the $\\beta$-carbon.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The Grignard reagent undergoes 1,4-addition, whereas the Gilman reagent undergoes 1,2-addition.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both reagents undergo 1,2-addition to yield tertiary allylic alcohols.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both reagents undergo 1,4-addition to yield saturated ketones.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the differing regiochemistry of organometallic additions to $\\alpha,\\beta$-unsaturated carbonyl systems.",
      "process": "Step 1: Grignard reagents are highly polar and act as 'hard' nucleophiles, which attack the carbon of the carbonyl group directly (1,2-addition).\nStep 2: Gilman reagents have less polar carbon-copper bonds and act as 'soft' nucleophiles, which selectively attack the conjugate position at the $\\beta$-carbon (1,4-addition).\nStep 3: Thus, Grignard reagents yield allylic alcohols, while Gilman reagents yield substituted ketones.",
      "result": "Grignard reagents undergo 1,2-addition, whereas Gilman reagents undergo 1,4-addition."
    }
  },
  {
    "question_id": "ch10_q42_gilman_aryl_coupling",
    "topic": "Organometallic reagents",
    "difficulty_level": "Medium",
    "question_text": "Which of the following combinations of reagents will successfully undergo coupling to form toluene?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Lithium dimethylcopper and iodobenzene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methylmagnesium bromide and chlorobenzene (without catalyst)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Bromomethane and chlorobenzene in aqueous base",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyllithium and bromobenzene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the synthetic utility of Gilman reagents in coupling with aryl halides.",
      "process": "Step 1: Standard organolithium and Grignard reagents do not undergo nucleophilic substitution coupling with aryl halides due to the high barrier to $S_N2$ on $sp^2$ carbons.\nStep 2: Gilman reagents ($R_2CuLi$) are transition metal reagents that can couple with aryl and vinyl halides through a non-classical mechanism.\nStep 3: Reacting lithium dimethylcopper with iodobenzene successfully couples the methyl group to the benzene ring, forming toluene.",
      "result": "Lithium dimethylcopper couples with iodobenzene to form toluene."
    }
  },
  {
    "question_id": "ch10_q43_zinc_acid_reduction",
    "topic": "Reduction of alkyl halides",
    "difficulty_level": "Medium",
    "question_text": "Treatment of 1-bromobutane with zinc metal in hydrochloric acid ($Zn, HCl$) yields which of the following products?",
    "question_smiles": "CCCCBr",
    "options": [
      {
        "option_id": "A",
        "text": "butane",
        "smiles": "CCCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-butene",
        "smiles": "C=CCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "butyl chloride",
        "smiles": "CCCCCl",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "dibutylzinc",
        "smiles": "CCCC[Zn]CCCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the reduction of alkyl halides using active metals in acidic media.",
      "process": "Step 1: Zinc metal undergoes oxidative insertion into the C-Br bond of 1-bromobutane to form an organozinc intermediate ($R-Zn-Br$).\nStep 2: Organozinc reagents are polar and basic, and are protonated by the surrounding acid ($HCl$).\nStep 3: Protonation replaces the carbon-metal bond with a carbon-hydrogen bond, yielding butane.",
      "result": "The reaction reduces the alkyl halide to butane."
    }
  },
  {
    "question_id": "ch10_q44_grignard_reduction_stereo",
    "topic": "Reduction of alkyl halides",
    "difficulty_level": "Medium",
    "question_text": "An alkyl halide is reduced to an alkane in two steps: first by reaction with magnesium in ether, and then by reaction with water. If (R)-2-bromobutane is subjected to this sequence, what is the stereochemical nature of the product?",
    "question_smiles": "C[C@@H](Br)CC",
    "options": [
      {
        "option_id": "A",
        "text": "It is butane, which is achiral and optically inactive.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It is optically active (R)-butane.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It is optically active (S)-butane.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It is a racemic mixture of (R)- and (S)-butane.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests conceptual understanding of stereochemical outcomes when a stereocenter is destroyed during a chemical reaction.",
      "process": "Step 1: (R)-2-bromobutane has a stereocenter at C2.\nStep 2: Formation of the Grignard reagent ($RMgBr$) followed by protonation ($H_2O$) replaces the C-MgBr bond with a C-H bond.\nStep 3: The C2 carbon is now bonded to two identical hydrogen atoms, which destroys the stereocenter and yields butane. Butane is achiral and optically inactive.",
      "result": "The product is achiral butane, which is optically inactive."
    }
  },
  {
    "question_id": "ch10_q45_lah_reduction",
    "topic": "Reduction of alkyl halides",
    "difficulty_level": "Medium",
    "question_text": "Which of the following reagents can reduce a primary alkyl halide to an alkane via an $S_N2$ substitution mechanism?",
    "question_smiles": "CCCCBr",
    "options": [
      {
        "option_id": "A",
        "text": "Lithium aluminum hydride ($LiAlH_4$)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Sodium borohydride ($NaBH_4$)",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Zinc metal in hydrochloric acid ($Zn, HCl$)",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Hydrogen gas over palladium on carbon ($H_2, Pd/C$)",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the substitution reduction of alkyl halides using hydride reagents.",
      "process": "Step 1: Primary alkyl halides are good substrates for nucleophilic substitution reactions.\nStep 2: Lithium aluminum hydride ($LiAlH_4$) is a powerful nucleophilic source of hydride ($H^-$) ions.\nStep 3: Hydride attacks the primary carbon, displacing the halide leaving group via an $S_N2$ mechanism to yield the reduced alkane. $NaBH_4$ is not nucleophilic enough for this transformation.",
      "result": "$LiAlH_4$ reduces primary alkyl halides to alkanes via an $S_N2$ pathway."
    }
  },
  {
    "question_id": "ch10_q46_zinc_reduction_mechanism",
    "topic": "Reduction of alkyl halides",
    "difficulty_level": "Hard",
    "question_text": "In the reduction of alkyl halides using zinc in aqueous acid ($Zn, H_3O^+$), what is the role of the zinc metal?",
    "question_smiles": "CCCCBr",
    "options": [
      {
        "option_id": "A",
        "text": "It acts as a reducing agent, transferring two electrons to the carbon-halogen bond to form an organozinc species.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It acts as a Lewis acid catalyst to coordinate to the halogen, making it a better leaving group for water attack.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It undergoes homolytic cleavage with the alkyl halide to generate alkyl radicals.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It is oxidized to $Zn^{2+}$ by the halide, which then acts as a nucleophile.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the electron-transfer mechanism involved in active metal reductions.",
      "process": "Step 1: Zinc metal ($Zn^0$) is a strong reducing agent.\nStep 2: It transfers two electrons to the C-X bond, inserting into the bond to form an alkylzinc halide ($R-Zn-X$) intermediate.\nStep 3: The C-Zn bond is polarized with a partial negative charge on carbon, allowing rapid protonation by acid.",
      "result": "Zinc acts as a reducing agent by transferring electrons to form an organozinc intermediate."
    }
  },
  {
    "question_id": "ch10_q47_gilman_structure",
    "topic": "Organometallic reagents",
    "difficulty_level": "Easy",
    "question_text": "Which of the following chemical formulas represents a Gilman reagent?",
    "question_smiles": "C[Cu](C)[Li]",
    "options": [
      {
        "option_id": "A",
        "text": "$R_2CuLi$",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$RCu$",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$RMgX$",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$RLi$",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the identification and general chemical formulas of organometallic reagents.",
      "process": "Step 1: Grignard reagents have the general formula $RMgX$.\nStep 2: Organolithium reagents have the general formula $RLi$.\nStep 3: Gilman reagents are lithium dialkylcopper complexes with the general formula $R_2CuLi$.",
      "result": "The general formula of a Gilman reagent is $R_2CuLi$."
    }
  },
  {
    "question_id": "ch10_q48_grignard_carboxylation",
    "topic": "Organometallic reagents",
    "difficulty_level": "Medium",
    "question_text": "Reaction of ethylmagnesium bromide with carbon dioxide ($CO_2$), followed by acidic workup, yields which of the following compounds?",
    "question_smiles": "CC[Mg]Br",
    "options": [
      {
        "option_id": "A",
        "text": "propanoic acid",
        "smiles": "CCC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "ethanoic acid",
        "smiles": "CC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "butanoic acid",
        "smiles": "CCCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "propan-1-ol",
        "smiles": "CCCO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the reaction of Grignard reagents with carbon dioxide to synthesize carboxylic acids.",
      "process": "Step 1: The nucleophilic ethyl group attacks the electrophilic carbon of $CO_2$.\nStep 2: This forms a carboxylate salt intermediate: $CH_3CH_2-COO^- [^+MgBr]$.\nStep 3: Acidic workup protonates the carboxylate to yield propanoic acid, adding one carbon to the original alkyl chain.",
      "result": "The reaction yields propanoic acid."
    }
  },
  {
    "question_id": "ch10_q49_allylic_chlorination_temp",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Hard",
    "question_text": "When propene is treated with $Cl_2$ at low temperature, 1,2-dichloropropane is obtained. However, at $400^\\circ\\text{C}$ in the gas phase, 3-chloropropene is the major product. Why is the radical substitution pathway favored at high temperature?",
    "question_smiles": "CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "Electrophilic addition is reversible and thermodynamically unfavorable at high temperature due to negative entropy ($\\Delta S < 0$).",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Chlorine radicals cannot exist at low temperatures.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The allylic C-H bond is stronger at high temperatures.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The cyclic chloronium ion intermediate becomes more stable at high temperatures.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the thermodynamic and kinetic factors governing addition vs substitution reactions in alkenes at different temperatures.",
      "process": "Step 1: Electrophilic addition of $Cl_2$ to propene combines two molecules into one ($\\Delta S < 0$).\nStep 2: According to $\\Delta G = \\Delta H - T\\Delta S$, at high temperatures ($T$), the $-T\\Delta S$ term becomes large and positive, making addition thermodynamically unfavorable and reversible.\nStep 3: Radical substitution (which has $\\Delta S \\approx 0$) remains favorable, allowing 3-chloropropene to accumulate as the major product.",
      "result": "High temperatures thermodynamically disfavor addition reactions due to entropy, favoring radical substitution."
    }
  },
  {
    "question_id": "ch10_q50_grignard_ketone",
    "topic": "Organometallic reagents",
    "difficulty_level": "Medium",
    "question_text": "Treatment of pentan-2-one with phenylmagnesium bromide followed by acidic workup yields which of the following compounds?",
    "question_smiles": "CCCC(=O)C",
    "options": [
      {
        "option_id": "A",
        "text": "2-phenylpentan-2-ol",
        "smiles": "CCCC(O)(C)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-phenylpentan-3-ol",
        "smiles": "CCC(O)(c1ccccc1)CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-phenylpentan-2-ol",
        "smiles": "CCCC(O)Cc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "pentan-2-ol",
        "smiles": "CCCC(O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the addition of Grignard reagents to ketones to synthesize tertiary alcohols.",
      "process": "Step 1: Phenylmagnesium bromide acts as a phenyl nucleophile ($Ph^-$).\nStep 2: Nucleophilic attack occurs at the carbonyl carbon of pentan-2-one, yielding an alkoxide intermediate.\nStep 3: Protonation of the alkoxide during acidic workup yields the tertiary alcohol 2-phenylpentan-2-ol.",
      "result": "The product is 2-phenylpentan-2-ol."
    }
  },
  {
    "question_id": "ch10_q_dynamic_radical_bromination",
    "topic": "Radical Halogenation",
    "difficulty_level": "Hard",
    "question_text": "Identify the major monobromination product of propane under light.",
    "reaction_scheme": {
      "reactants": [
        "CCC"
      ],
      "reagents": "Br2, light",
      "conditions": "radical pathway",
      "products": [
        "CC(Br)C"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-Bromopropane is the major product due to the higher stability of secondary radicals.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Bromopropane is the major product due to statistical probability.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,2-Dibromopropane is the primary product.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propene is formed via elimination.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Assessing regiochemistry of radical halogenations.",
      "process": "Bromine radicals are highly selective. Propane contains primary and secondary hydrogens. Abstraction of secondary hydrogen yields a secondary radical (stable), which reacts with Br2 to give 2-bromopropane.",
      "result": "The major product is 2-bromopropane."
    }
  }
];
