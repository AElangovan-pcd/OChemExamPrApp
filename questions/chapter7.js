// McMurry Chapter 7 questions
const CHAPTER_7_QUESTIONS = [
  {
    "question_id": "ch7_q1_ethylene_hybridization",
    "topic": "Alkene Structure",
    "difficulty_level": "Easy",
    "question_text": "What is the hybridization of the carbon atoms in ethylene (\\(C_2H_4\\)), and what is the approximate \\(H-C-H\\) bond angle?",
    "question_smiles": "C=C",
    "options": [
      {
        "option_id": "A",
        "text": "\\(sp^2\\); \\(117.4^\\circ\\)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "\\(sp^3\\); \\(109.5^\\circ\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "\\(sp\\); \\(180^\\circ\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "\\(sp^2\\); \\(120.0^\\circ\\)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests basic understanding of hybridization and molecular geometry in alkenes.",
      "process": "Step 1: Identify the bonding in ethylene. Each carbon has 3 electron domains (two single bonds to H, one double bond to C).\nStep 2: A system with 3 electron domains corresponds to \\(sp^2\\) hybridization and trigonal planar geometry.\nStep 3: While an ideal trigonal planar geometry has bond angles of \\(120^\\circ\\), the greater electron density of the carbon-carbon double bond exerts steric repulsion on the C-H bonds, compressing the \\(H-C-H\\) bond angle to approximately \\(117.4^\\circ\\).",
      "result": "The carbons are \\(sp^2\\)-hybridized, and the \\(H-C-H\\) angle is approximately \\(117.4^\\circ\\)."
    }
  },
  {
    "question_id": "ch7_q2_double_bond_orbitals",
    "topic": "Alkene Structure",
    "difficulty_level": "Easy",
    "question_text": "Which of the following orbital descriptions correctly characterizes the \\(\\pi\\) bond in a carbon-carbon double bond?",
    "question_smiles": "C=C",
    "options": [
      {
        "option_id": "A",
        "text": "Side-by-side overlap of two unhybridized \\(2p\\) orbitals.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "End-on overlap of two \\(sp^2\\) hybrid orbitals.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Side-by-side overlap of two \\(sp^2\\) hybrid orbitals.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "End-on overlap of two unhybridized \\(2p\\) orbitals.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question deals with valence bond theory and molecular orbital overlap in alkenes.",
      "process": "Step 1: In a double bond, there is one \\(\\sigma\\) bond and one \\(\\pi\\) bond.\nStep 2: The \\(\\sigma\\) bond is formed by the head-on (end-on) overlap of \\(sp^2\\) hybrid orbitals along the internuclear axis.\nStep 3: The \\(\\pi\\) bond is formed by the lateral (side-by-side) overlap of the remaining unhybridized parallel \\(2p\\) orbitals, which lies above and below the plane of the \\(\\sigma\\) framework.",
      "result": "The \\(\\pi\\) bond is formed by side-by-side overlap of unhybridized \\(2p\\) orbitals."
    }
  },
  {
    "question_id": "ch7_q3_bond_length_strength",
    "topic": "Alkene Structure",
    "difficulty_level": "Easy",
    "question_text": "How do the carbon-carbon bond length and bond dissociation energy (BDE) of ethylene compare to those of ethane?",
    "question_smiles": "C=C",
    "options": [
      {
        "option_id": "A",
        "text": "Ethylene has a shorter and stronger C-C bond than ethane.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethylene has a longer and weaker C-C bond than ethane.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethylene has a shorter and weaker C-C bond than ethane.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethylene has a longer and stronger C-C bond than ethane.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question relates hybridization and bond order to bond length and strength.",
      "process": "Step 1: Ethane (\\(C_2H_6\\)) has a single carbon-carbon bond (bond order 1) with a length of 1.54 \u00c5 and BDE of ~376 kJ/mol.\nStep 2: Ethylene (\\(C_2H_4\\)) has a double carbon-carbon bond (bond order 2) consisting of a \\(\\sigma\\) and a \\(\\pi\\) bond, with a length of 1.34 \u00c5 and BDE of ~611 kJ/mol.\nStep 3: Higher bond order and greater s-character of the \\(sp^2\\) hybrid orbitals in ethylene pull the nuclei closer together, making the bond shorter and stronger.",
      "result": "Ethylene's double bond is shorter and stronger than ethane's single bond."
    }
  },
  {
    "question_id": "ch7_q4_rotation_barrier",
    "topic": "Alkene Structure",
    "difficulty_level": "Medium",
    "question_text": "What is the approximate thermodynamic barrier to rotation around the carbon-carbon double bond in ethylene, and why does it exist?",
    "question_smiles": "C=C",
    "options": [
      {
        "option_id": "A",
        "text": "~268 kJ/mol; due to the necessity of breaking the parallel overlap of the \\(\\pi\\) bond.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "~376 kJ/mol; due to the necessity of breaking the underlying \\(\\sigma\\) bond.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "~12 kJ/mol; due to steric hindrance between cis-hydrogens.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "~80 kJ/mol; due to the torsional strain of passing through the eclipsed transition state.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests knowledge of rotation barriers in single vs. double bonds.",
      "process": "Step 1: Rotational energy barrier in alkanes is very small (~12 kJ/mol for ethane) because \\(\\sigma\\) bonds can rotate without breaking orbital overlap.\nStep 2: In alkenes, rotation about the double bond requires the unhybridized \\(p\\) orbitals to rotate \\(90^\\circ\\) relative to each other, completely breaking the \\(\\pi\\) overlap.\nStep 3: The strength of the \\(\\pi\\) bond alone is approximately 268 kJ/mol, which represents the activation energy barrier for this rotation.",
      "result": "The barrier is ~268 kJ/mol, corresponding to the energy needed to break the \\(\\pi\\) bond overlap."
    }
  },
  {
    "question_id": "ch7_q5_ethylene_lumo",
    "topic": "Alkene Structure",
    "difficulty_level": "Hard",
    "question_text": "Which of the following molecular orbitals represents the lowest unoccupied molecular orbital (LUMO) of ethylene in its ground state?",
    "question_smiles": "C=C",
    "options": [
      {
        "option_id": "A",
        "text": "The \\(\\pi^*\\) antibonding molecular orbital, which has a nodal plane perpendicular to the C-C axis.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The \\(\\pi\\) bonding molecular orbital, which has a single nodal plane in the molecular plane.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The \\(\\sigma^*\\) antibonding molecular orbital, which has a nodal plane along the molecular plane.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The unhybridized \\(2p\\) atomic orbital on one of the carbons.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests molecular orbital (MO) theory concepts applied to ethylene.",
      "process": "Step 1: Ethylene contains two carbon \\(2p\\) orbitals that combine to form two molecular orbitals: a bonding \\(\\pi\\) orbital and an antibonding \\(\\pi^*\\) orbital.\nStep 2: In the ground state, the two \\(\\pi\\) electrons occupy the lower energy \\(\\pi\\) bonding orbital (HOMO).\nStep 3: The higher energy \\(\\pi^*\\) antibonding orbital remains vacant and is the LUMO. It features a vertical nodal plane perpendicular to the internuclear axis in addition to the horizontal node containing the nuclei.",
      "result": "The LUMO of ethylene is the \\(\\pi^*\\) antibonding molecular orbital."
    }
  },
  {
    "question_id": "ch7_q6_propene_density",
    "topic": "Alkene Structure",
    "difficulty_level": "Medium",
    "question_text": "If you analyze the electrostatic potential map of propene (\\(CH_3CH=CH_2\\)), where is the region of most negative electrostatic potential (highest electron density) located?",
    "question_smiles": "CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "Above and below the carbon-carbon \\(\\pi\\) bond plane.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Directly along the C-C \\(\\sigma\\) bond axis.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "In the center of the \\(sp^3\\)-hybridized methyl group.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Surrounding the terminal hydrogens of the double bond.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the relationship between electron distribution in molecular orbitals and electrostatic potential maps.",
      "process": "Step 1: The \\(\\pi\\) bond consists of loosely held electron density located in lobes above and below the plane of the carbon atoms.\nStep 2: Unlike \\(\\sigma\\) electrons, which are concentrated between the nuclei, \\(\\pi\\) electrons are more exposed and readily available to electrophiles.\nStep 3: Consequently, the electrostatic potential map shows a red, electron-rich region located above and below the double bond.",
      "result": "The highest electron density is found in the \\(\\pi\\) cloud above and below the double bond plane."
    }
  },
  {
    "question_id": "ch7_q7_nonpolar_alkene",
    "topic": "Alkene Structure",
    "difficulty_level": "Medium",
    "question_text": "Which of the following isomeric alkenes is completely nonpolar, having a net molecular dipole moment of zero (\\(\\mu = 0\\) D)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-but-2-ene",
        "smiles": "C/C=C/C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-but-2-ene",
        "smiles": "C/C=C\\C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "propene",
        "smiles": "CC=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-methylpropene",
        "smiles": "CC(C)=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question relates molecular symmetry to dipole moments in geometric isomers.",
      "process": "Step 1: Identify polar bonds and alkyl group electron-donating effects (weakly electron-donating relative to \\(sp^2\\) carbons).\nStep 2: In (Z)-but-2-ene, the two methyl groups are on the same side, creating a net dipole pointing toward the double bond.\nStep 3: In (E)-but-2-ene, the two methyl groups are trans to each other. Due to its inversion center of symmetry, the dipole vectors from the two methyl groups cancel out completely.",
      "result": "(E)-but-2-ene has a net dipole moment of zero due to its symmetrical trans structure."
    }
  },
  {
    "question_id": "ch7_q8_propene_bond_angle",
    "topic": "Alkene Structure",
    "difficulty_level": "Hard",
    "question_text": "What is the approximate \\(C-C=C\\) bond angle in propene (\\(CH_3-CH=CH_2\\)) and why does it deviate from the ideal \\(120^\\circ\\)?",
    "question_smiles": "CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "\\(124.3^\\circ\\); due to steric repulsion between the methyl group and the cis-hydrogen on the double bond.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "\\(117.4^\\circ\\); due to the methyl group pulling electron density away.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "\\(109.5^\\circ\\); due to the \\(sp^3\\) hybridization of the middle carbon.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "\\(120.0^\\circ\\); because steric effects do not influence bond angles of \\(sp^2\\) carbons.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests understanding of steric and electronic influences on bond angles.",
      "process": "Step 1: The central carbon in propene is bonded to three groups: a methyl group, a hydrogen, and the terminal methylene carbon via a double bond.\nStep 2: The methyl group is bulkier than a hydrogen atom.\nStep 3: Steric repulsion between the bulky methyl group and the cis-hydrogen on the terminal carbon opens up the C-C=C angle to \\(124.3^\\circ\\), compressing the H-C=C angle.",
      "result": "The \\(C-C=C\\) bond angle is pushed open to \\(124.3^\\circ\\) due to steric repulsion."
    }
  },
  {
    "question_id": "ch7_q9_ihd_hexene",
    "topic": "Degrees of Unsaturation",
    "difficulty_level": "Easy",
    "question_text": "What is the Index of Hydrogen Deficiency (IHD), or degree of unsaturation, for a compound with the molecular formula \\(C_6H_{10}\\)?",
    "question_smiles": "C1=CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "2",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "0",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the calculation of the degree of unsaturation (IHD) for a simple hydrocarbon.",
      "process": "Step 1: Use the standard formula for a saturated alkane: \\(C_nH_{2n+2}\\). For \\(n = 6\\), the saturated number of hydrogens is \\(2(6) + 2 = 14\\).\nStep 2: The given formula has 10 hydrogens. The hydrogen deficiency is \\(14 - 10 = 4\\) hydrogens.\nStep 3: Since each degree of unsaturation corresponds to a deficiency of 2 hydrogens (a pair), divide by 2: \\(4 / 2 = 2\\).",
      "result": "The IHD of \\(C_6H_{10}\\) is 2, indicating the presence of two rings, two double bonds, or one triple bond."
    }
  },
  {
    "question_id": "ch7_q10_ihd_dopamine",
    "topic": "Degrees of Unsaturation",
    "difficulty_level": "Medium",
    "question_text": "Determine the degree of unsaturation (IHD) for the neurochemical dopamine, which has the molecular formula \\(C_8H_{11}NO_2\\).",
    "question_smiles": "NCCc1ccc(O)c(O)c1",
    "options": [
      {
        "option_id": "A",
        "text": "4",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the application of the IHD formula for compounds containing nitrogen and oxygen.",
      "process": "Step 1: Recall the rules for heteroatoms: oxygens are ignored, and nitrogens count as -1 hydrogen (or add 1 to the denominator/adjust the saturated count: each nitrogen increases the saturated hydrogen limit by 1).\nStep 2: The adjusted formula for IHD is \\(IHD = \\frac{2C + 2 + N - H - X}{2}\\).\nStep 3: Substitute the values: \\(IHD = \\frac{2(8) + 2 + 1 - 11}{2} = \\frac{16 + 2 + 1 - 11}{2} = \\frac{8}{2} = 4\\).",
      "result": "Dopamine has a degree of unsaturation of 4 (corresponding to its benzene ring)."
    }
  },
  {
    "question_id": "ch7_q11_ihd_halogens",
    "topic": "Degrees of Unsaturation",
    "difficulty_level": "Medium",
    "question_text": "Calculate the degree of unsaturation (IHD) for a halogenated alkene with the molecular formula \\(C_5H_6Br_2Cl F\\).",
    "question_smiles": "C=CC(Br)(Cl)C(F)CBr",
    "options": [
      {
        "option_id": "A",
        "text": "1",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "0",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the effect of halogens on the degree of unsaturation calculation.",
      "process": "Step 1: Halogens (F, Cl, Br, I) are monovalent and replace hydrogens in a hydrocarbon skeleton. Therefore, add the number of halogens to the count of hydrogens.\nStep 2: Total effective hydrogens (H + X) = \\(6 + 2\\text{ (Br)} + 1\\text{ (Cl)} + 1\\text{ (F)} = 10\\).\nStep 3: For 5 carbons, the saturated alkane would have \\(2(5) + 2 = 12\\) hydrogens. The deficiency is \\(12 - 10 = 2\\) hydrogens. Thus, \\(IHD = 2 / 2 = 1\\).",
      "result": "The IHD of \\(C_5H_6Br_2Cl F\\) is 1."
    }
  },
  {
    "question_id": "ch7_q12_ihd_terpene",
    "topic": "Degrees of Unsaturation",
    "difficulty_level": "Medium",
    "question_text": "A natural sesquiterpene has the molecular formula \\(C_{15}H_{22}O_3\\). Spectroscopic analysis reveals the presence of exactly two rings and one ketone carbonyl group. How many carbon-carbon double bonds must be present in this molecule?",
    "question_smiles": "CC1=C2C(CC(=O)C1)C(C)(C)CC2",
    "options": [
      {
        "option_id": "A",
        "text": "2",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question applies IHD calculations to determine specific structural features of a complex molecule.",
      "process": "Step 1: Compute total IHD for \\(C_{15}H_{22}O_3\\). Saturated count for 15 carbons is \\(2(15) + 2 = 32\\).\nStep 2: Total IHD = \\(\\frac{32 - 22}{2} = 5\\). Oxygen is ignored in the IHD calculation.\nStep 3: Each ring accounts for 1 degree of unsaturation (2 rings = 2 IHD). The ketone carbonyl (C=O double bond) accounts for 1 IHD. Subtract these from the total: \\(5 - 2\\text{ (rings)} - 1\\text{ (carbonyl)} = 2\\) remaining degrees of unsaturation, which must be carbon-carbon double bonds.",
      "result": "There must be 2 carbon-carbon double bonds present in the molecule."
    }
  },
  {
    "question_id": "ch7_q13_ihd_formula_matching",
    "topic": "Degrees of Unsaturation",
    "difficulty_level": "Hard",
    "question_text": "Which of the following molecular formulas corresponds to a stable, neutral organic compound that contains at least one nitrogen atom and has a degree of unsaturation (IHD) of exactly 3?",
    "question_smiles": "C1CCCCC1C#N",
    "options": [
      {
        "option_id": "A",
        "text": "\\(C_7H_{11}N\\)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "\\(C_6H_8N_2\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "\\(C_5H_9N\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "\\(C_8H_{15}N\\)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the ability to calculate and match degrees of unsaturation to chemical formulas with nitrogen.",
      "process": "Step 1: For each formula, calculate the IHD using \\(IHD = \\frac{2C + 2 + N - H}{2}\\).\nStep 2: For \\(C_7H_{11}N\\): \\(IHD = \\frac{2(7) + 2 + 1 - 11}{2} = \\frac{6}{2} = 3\\). This works.\nStep 3: Verify the other choices: \\(C_6H_8N_2\\) has \\(IHD = \\frac{12 + 2 + 2 - 8}{2} = 4\\). \\(C_5H_9N\\) has \\(IHD = \\frac{10 + 2 + 1 - 9}{2} = 2\\). \\(C_8H_{15}N\\) has \\(IHD = \\frac{16 + 2 + 1 - 15}{2} = 2\\).",
      "result": "\\(C_7H_{11}N\\) has an IHD of 3."
    }
  },
  {
    "question_id": "ch7_q14_ihd_hydrogenation",
    "topic": "Degrees of Unsaturation",
    "difficulty_level": "Hard",
    "question_text": "A compound with the molecular formula \\(C_9H_9ClO\\) is subjected to catalytic hydrogenation over palladium on carbon (\\(Pd/C\\)) at room temperature and absorbs two molar equivalents of hydrogen to yield a compound with the formula \\(C_9H_{13}ClO\\). What does this result indicate about the starting material?",
    "question_smiles": "CC1C2CC3C1C3C=C(Cl)C2=O",
    "options": [
      {
        "option_id": "A",
        "text": "The starting material has a total IHD of 5, containing three rings/non-reducible groups and two reducible \\(\\pi\\) bonds.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The starting material has a total IHD of 5, containing one ring and two reducible \\(\\pi\\) bonds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The starting material has a total IHD of 4, containing two rings and two reducible \\(\\pi\\) bonds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The starting material has a total IHD of 6, containing four rings and two reducible \\(\\pi\\) bonds.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question links hydrogenation experiments with the determination of rings and pi bonds.",
      "process": "Step 1: Calculate the IHD of the starting material \\(C_9H_9ClO\\): \\(IHD = \\frac{2(9) + 2 - 9 - 1\\text{ (Cl)}}{2} = 5\\).\nStep 2: The starting material absorbs 2 equivalents of \\(H_2\\) to form \\(C_9H_{13}ClO\\), which has \\(IHD = \\frac{18 + 2 - 13 - 1}{2} = 3\\).\nStep 3: Absorption of 2 equivalents of \\(H_2\\) shows the presence of 2 reducible \\(\\pi\\) bonds. The remaining 3 degrees of unsaturation must correspond to rings or non-reducible carbonyl groups.",
      "result": "The compound has a total IHD of 5, with 2 reducible \\(\\pi\\) bonds and 3 rings/non-reducible groups."
    }
  },
  {
    "question_id": "ch7_q15_ihd_diazepam",
    "topic": "Degrees of Unsaturation",
    "difficulty_level": "Medium",
    "question_text": "Diazepam (Valium) has the molecular formula \\(C_{16}H_{13}ClN_2O\\). How many degrees of unsaturation (IHD) does this molecule possess?",
    "question_smiles": "CN1C(=O)CN=C(C2=CC=CC=C2)C3=C1C=CC(Cl)=C3",
    "options": [
      {
        "option_id": "A",
        "text": "11",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "10",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "12",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "9",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This is a standard calculation of IHD for a complex pharmaceutical agent.",
      "process": "Step 1: Utilize the full IHD formula: \\(IHD = \\frac{2C + 2 + N - H - X}{2}\\).\nStep 2: Plug in: C = 16, H = 13, Cl = 1 (halogens count as X), N = 2, O is ignored.\nStep 3: \\(IHD = \\frac{2(16) + 2 + 2 - 13 - 1}{2} = \\frac{32 + 2 + 2 - 14}{2} = \\frac{22}{2} = 11\\).",
      "result": "Diazepam has 11 degrees of unsaturation."
    }
  },
  {
    "question_id": "ch7_q16_hydrocarbon_hydrogenation",
    "topic": "Degrees of Unsaturation",
    "difficulty_level": "Medium",
    "question_text": "A hydrocarbon with the molecular formula \\(C_{10}H_{16}\\) reacts with excess hydrogen gas in the presence of a platinum catalyst to yield a compound of formula \\(C_{10}H_{20}\\). What is the ring/double bond composition of the starting hydrocarbon?",
    "question_smiles": "CC1=CCC(CC1)=C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "It is monocyclic and contains two double bonds.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It is bicyclic and contains one double bond.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It is acyclic and contains three double bonds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It is bicyclic and contains two double bonds.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question helps deduce structural features (rings vs. double bonds) from hydrogenation data.",
      "process": "Step 1: Calculate IHD for starting material \\(C_{10}H_{16}\\): \\(\\frac{2(10) + 2 - 16}{2} = 3\\).\nStep 2: Calculate IHD for the hydrogenated product \\(C_{10}H_{20}\\): \\(\\frac{2(10) + 2 - 20}{2} = 1\\).\nStep 3: Hydrogenation reduces double bonds but does not affect rings. The reaction consumed 2 moles of \\(H_2\\) (reducing IHD from 3 to 1), meaning there were 2 double bonds. The remaining IHD of 1 in the product represents 1 ring.",
      "result": "The starting material is monocyclic and contains two double bonds (like limonene)."
    }
  },
  {
    "question_id": "ch7_q17_branched_diene_iupac",
    "topic": "Naming Alkenes",
    "difficulty_level": "Medium",
    "question_text": "What is the correct IUPAC name for the following branched diene: \\(CH_2=C(CH_3)-CH(CH_3)-CH=CH_2\\)?",
    "question_smiles": "C=C(C)C(C)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "2,3-dimethylpenta-1,4-diene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3,4-dimethylpenta-1,4-diene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,3-dimethylpenta-2,4-diene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-methyl-4-methylenepent-1-ene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the basic rules of IUPAC nomenclature for dienes.",
      "process": "Step 1: Identify the longest carbon chain containing both double bonds. This chain is 5 carbons long (a pentadiene).\nStep 2: Number the chain to give the double bonds the lowest possible locants. Numbering from either end gives double bonds at C1 and C4.\nStep 3: To break the tie, choose the direction that gives substituents the lowest possible numbers. Numbering from left to right yields substituents at C2 and C3 (2,3-dimethyl), whereas right to left yields substituents at C3 and C4 (3,4-dimethyl). Therefore, 2,3-dimethylpenta-1,4-diene is correct.",
      "result": "The correct IUPAC name is 2,3-dimethylpenta-1,4-diene."
    }
  },
  {
    "question_id": "ch7_q18_dimethylcyclopentene_iupac",
    "topic": "Naming Alkenes",
    "difficulty_level": "Easy",
    "question_text": "What is the correct IUPAC name for the cyclic alkene shown below?",
    "question_smiles": "CC1=C(C)CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "1,2-dimethylcyclopentene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2,3-dimethylcyclopentene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,5-dimethylcyclopentene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,2-dimethylcyclopent-2-ene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests IUPAC rules for naming cycloalkenes.",
      "process": "Step 1: The double bond carbons of a cycloalkene are always numbered C1 and C2.\nStep 2: Number in the direction around the ring that gives substituents the lowest possible locants.\nStep 3: Numbering through the double bond starting with either carbon yields methyl groups at positions C1 and C2. Thus, the name is 1,2-dimethylcyclopentene.",
      "result": "The IUPAC name is 1,2-dimethylcyclopentene."
    }
  },
  {
    "question_id": "ch7_q19_cip_rules",
    "topic": "Naming Alkenes",
    "difficulty_level": "Hard",
    "question_text": "According to the Cahn-Ingold-Prelog (CIP) priority rules, what is the correct priority sequence (from highest to lowest priority) for the following four groups?",
    "question_smiles": "CC(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "\\(-CH_2OH > -C\\equiv N > -CH=CH_2 > -CH(CH_3)_2\\)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "\\(-CH_2OH > -CH=CH_2 > -C\\equiv N > -CH(CH_3)_2\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "\\(-C\\equiv N > -CH_2OH > -CH(CH_3)_2 > -CH=CH_2\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "\\(-C\\equiv N > -CH_2OH > -CH=CH_2 > -CH(CH_3)_2\\)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests priority assignments under the CIP system for alkene configuration determination.",
      "process": "Step 1: Compare the first atoms attached. All four groups have carbon (C) as the first atom.\nStep 2: Compare atoms attached to the first carbon: \n- \\(-CH_2OH\\): attached to (O, H, H). Since O has atomic number 8, this is the highest priority group.\n- \\(-C\\equiv N\\): treated as carbon attached to (N, N, N). N has atomic number 7, making it second.\n- \\(-CH=CH_2\\): treated as carbon attached to (C, C, H).\n- \\(-CH(CH_3)_2\\): carbon attached to (C, C, H).\nStep 3: Compare C2 atoms to break the tie between \\(-CH=CH_2\\) and \\(-CH(CH_3)_2\\). In \\(-CH=CH_2\\), the C2 is double-bonded back to C1, making it equivalent to being attached to (C, H, H). In \\(-CH(CH_3)_2\\), the C2/C3 atoms are methyl groups attached only to (H, H, H). Thus, \\(-CH=CH_2\\) has higher priority than \\(-CH(CH_3)_2\\).",
      "result": "The priority order is \\(-CH_2OH > -C\\equiv N > -CH=CH_2 > -CH(CH_3)_2\\)."
    }
  },
  {
    "question_id": "ch7_q20_ez_naming",
    "topic": "Naming Alkenes",
    "difficulty_level": "Hard",
    "question_text": "What is the correct IUPAC name, including the (E)/(Z) configuration, for the alkene represented by the SMILES \\(C/C(Br)=C(/Cl)C\\)?",
    "question_smiles": "C/C(Br)=C(/Cl)C",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-2-bromo-3-chlorobut-2-ene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-2-bromo-3-chlorobut-2-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)-3-bromo-2-chlorobut-2-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(Z)-3-bromo-2-chlorobut-2-ene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests IUPAC nomenclature combined with stereochemical assignments (E/Z) using Cahn-Ingold-Prelog priority rules.",
      "process": "Step 1: Identify the substituents at C2: a bromine atom (atomic number 35) and a methyl group (carbon, atomic number 6). Bromine has higher priority.\nStep 2: Identify the substituents at C3: a chlorine atom (atomic number 17) and a methyl group (carbon, atomic number 6). Chlorine has higher priority.\nStep 3: Analyze the stereochemistry in the given SMILES. The methyl group C1 is UP, and C4 is DOWN (trans methyl groups). This means Br (on C2) is DOWN, and Cl (on C3) is UP. Because Br and Cl are on opposite sides of the double bond, and they are the high-priority groups on their respective carbons, the configuration is (E).",
      "result": "The correct name is (E)-2-bromo-3-chlorobut-2-ene."
    }
  },
  {
    "question_id": "ch7_q21_no_ez_stereochem",
    "topic": "Naming Alkenes",
    "difficulty_level": "Easy",
    "question_text": "Which of the following alkenes cannot be classified as having either (E) or (Z) configuration?",
    "question_smiles": "CC(C)=CC",
    "options": [
      {
        "option_id": "A",
        "text": "2-methylbut-2-ene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "pent-2-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-chloroprop-1-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-methylpent-2-ene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question addresses the fundamental structural requirements for geometric isomerism in alkenes.",
      "process": "Step 1: A double bond can only display (E) or (Z) stereochemistry if both carbons of the alkene are bonded to two different groups.\nStep 2: Examine 2-methylbut-2-ene. C2 is bonded to two identical methyl groups.\nStep 3: Because C2 does not have two different substituents, it is impossible to assign priority 1 and 2 to them. Thus, geometric isomerism cannot exist.",
      "result": "2-methylbut-2-ene cannot be designated as (E) or (Z)."
    }
  },
  {
    "question_id": "ch7_q22_bromopentene_iupac",
    "topic": "Naming Alkenes",
    "difficulty_level": "Medium",
    "question_text": "What is the correct IUPAC name of the halogenated alkene represented by the SMILES \\(C/C=C/C(Br)C\\)?",
    "question_smiles": "C/C=C/C(Br)C",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-4-bromopent-2-ene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-4-bromopent-2-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)-2-bromopent-3-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(Z)-2-bromopent-3-ene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests chain-numbering priority when both double bonds and halogens are present.",
      "process": "Step 1: The longest carbon chain containing the double bond has 5 carbons (pentene).\nStep 2: Under IUPAC rules, a double bond has numbering priority over a halogen substituent. We must number from left to right to give the double bond the lowest possible locant (C2 rather than C3).\nStep 3: This puts the bromine at C4, giving the name 4-bromopent-2-ene. The trans double bond geometry designates it as the (E) isomer.",
      "result": "The correct name is (E)-4-bromopent-2-ene."
    }
  },
  {
    "question_id": "ch7_q23_methylpentenol_ez",
    "topic": "Naming Alkenes",
    "difficulty_level": "Hard",
    "question_text": "Determine the correct IUPAC name and configuration for the compound represented by the SMILES \\(CC/C(C)=C(\\\\CO)H\\).",
    "question_smiles": "CC/C(C)=C(/CO)",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-3-methylpent-2-en-1-ol",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-3-methylpent-2-en-1-ol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)-3-ethylbut-2-en-1-ol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(Z)-3-ethylbut-2-en-1-ol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests geometric isomer naming for alkenes containing principal functional groups like alcohols.",
      "process": "Step 1: Find the longest carbon chain containing the double bond and the principal functional group (alcohol). It is a 5-carbon chain starting at the alcohol carbon: \\(HO-CH_2-CH=C(CH_3)-CH_2-CH_3\\) (pent-2-en-1-ol).\nStep 2: Determine priorities at C2: \\(-CH_2OH\\) (priority 1) vs \\(-H\\) (priority 2). At C3: \\(-CH_2CH_3\\) (priority 1) vs \\(-CH_3\\) (priority 2).\nStep 3: Examine the geometry. The ethyl group at C3 is UP, and the hydroxymethyl group at C2 is DOWN (trans). Because these priority 1 groups are on opposite sides, the configuration is (E).",
      "result": "The IUPAC name is (E)-3-methylpent-2-en-1-ol."
    }
  },
  {
    "question_id": "ch7_q24_norbornene_naming",
    "topic": "Naming Alkenes",
    "difficulty_level": "Medium",
    "question_text": "What is the correct IUPAC name of the bicyclic alkene represented by the SMILES \\(C1C2CC1C=C2\\)?",
    "question_smiles": "C1C2CC1C=C2",
    "options": [
      {
        "option_id": "A",
        "text": "bicyclo[2.2.1]hept-2-ene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "bicyclo[2.2.1]hept-1-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "bicyclo[2.2.2]oct-2-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "bicyclo[3.2.1]oct-2-ene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the IUPAC naming system for bridged bicyclic systems with unsaturation.",
      "process": "Step 1: Count the total number of carbons in the bicyclic system. There are 7 carbons (heptene).\nStep 2: Identify the bridgehead carbons and the sizes of the three bridges. The bridges contain 2, 2, and 1 carbon atoms, which gives the prefix bicyclo[2.2.1].\nStep 3: Number starting from a bridgehead, along the longest path to the second bridgehead, then down the next longest path containing the double bond. The double bond is at C2. Thus, the name is bicyclo[2.2.1]hept-2-ene.",
      "result": "The compound is bicyclo[2.2.1]hept-2-ene."
    }
  },
  {
    "question_id": "ch7_q25_triene_nomenclature",
    "topic": "Naming Alkenes",
    "difficulty_level": "Hard",
    "question_text": "What is the correct IUPAC name of the branched triene represented by the SMILES \\(C=CC(=C)C=C\\)?",
    "question_smiles": "C=CC(=C)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "3-methylenepenta-1,4-diene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-vinylbuta-1,3-diene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-vinylpenta-1,4-diene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-ethenylpenta-1,4-diene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests how to name multiple double bonds and choose the primary carbon chain when branching occurs.",
      "process": "Step 1: Select the longest continuous carbon chain containing the maximum number of double bonds. Here, the longest chain containing two double bonds has 5 carbons (a pentadiene).\nStep 2: Number from either end. The double bonds are at C1 and C4. The substituent is at C3.\nStep 3: The substituent is a double-bonded single carbon \\(=CH_2\\), which is named a 'methylene' group. Therefore, the IUPAC name is 3-methylenepenta-1,4-diene.",
      "result": "The correct name is 3-methylenepenta-1,4-diene."
    }
  },
  {
    "question_id": "ch7_q26_alkene_stability_order",
    "topic": "Alkene Stability",
    "difficulty_level": "Easy",
    "question_text": "Arrange the following isomeric alkenes in order of increasing thermodynamic stability (least stable to most stable):\nI. (Z)-hex-2-ene\nII. (E)-hex-2-ene\nIII. 2-methylpent-2-ene\nIV. 2,3-dimethylbut-2-ene",
    "question_smiles": "CC(C)=C(C)C",
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
        "text": "II < I < III < IV",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "I < II < IV < III",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the rules of alkene stability based on substitution level and stereochemistry.",
      "process": "Step 1: Determine the degree of substitution of each alkene. I and II are disubstituted. III is trisubstituted. IV is tetrasubstituted.\nStep 2: More highly substituted double bonds are more stable due to hyperconjugation and inductive effects (IV > III > I, II).\nStep 3: For the disubstituted alkenes, the trans isomer (II) is more stable than the cis isomer (I) because trans minimizes steric strain between the alkyl groups. Thus, I < II < III < IV.",
      "result": "The correct stability order is I < II < III < IV."
    }
  },
  {
    "question_id": "ch7_q27_heat_of_hydrogenation_highest",
    "topic": "Alkene Stability",
    "difficulty_level": "Medium",
    "question_text": "Which of the following isomeric alkenes releases the GREATEST amount of heat per mole upon catalytic hydrogenation (has the most exothermic \\(\\Delta H_{hydro}\\))?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "hex-1-ene",
        "smiles": "CCCCC=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-hex-2-ene",
        "smiles": "CC/C=C\\CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)-hex-2-ene",
        "smiles": "CC/C=C/CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-methylpent-2-ene",
        "smiles": "CC(C)=CCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question relates the experimental heat of hydrogenation to starting alkene stability.",
      "process": "Step 1: Catalytic hydrogenation of all these isomers yields the same product: hexane.\nStep 2: The heat of hydrogenation (\\(\\Delta H_{hydro}\\)) measures the energy difference between the starting alkene and hexane. A less stable, higher-energy starting material will release more energy (more exothermic).\nStep 3: Hex-1-ene is monosubstituted (least stable). The others are disubstituted (Z and E) or trisubstituted (2-methylpent-2-ene), which are more stable. Thus, hex-1-ene releases the most heat.",
      "result": "Hex-1-ene, being the least stable isomer, has the highest heat of hydrogenation."
    }
  },
  {
    "question_id": "ch7_q28_heat_of_hydrogenation_lowest",
    "topic": "Alkene Stability",
    "difficulty_level": "Medium",
    "question_text": "Which of the following isomeric alkenes releases the LEAST amount of heat per mole upon catalytic hydrogenation?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "2,3-dimethylbut-2-ene",
        "smiles": "CC(C)=C(C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-methylbut-2-ene",
        "smiles": "CC(C)=CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)-but-2-ene",
        "smiles": "C/C=C/C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(Z)-but-2-ene",
        "smiles": "C/C=C\\C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question is the converse of the previous one, identifying the most stable alkene via lowest heat of hydrogenation.",
      "process": "Step 1: The most stable starting alkene is lowest in potential energy.\nStep 2: Upon reduction to the corresponding alkane, it will release the least amount of heat.\nStep 3: Compare substitution levels: 2,3-dimethylbut-2-ene is tetrasubstituted (most stable), 2-methylbut-2-ene is trisubstituted, and the but-2-enes are disubstituted. Therefore, 2,3-dimethylbut-2-ene releases the least heat.",
      "result": "2,3-dimethylbut-2-ene releases the least heat because it is the most stable isomer."
    }
  },
  {
    "question_id": "ch7_q29_hyperconjugation_stability",
    "topic": "Alkene Stability",
    "difficulty_level": "Medium",
    "question_text": "What is the primary electronic reason why highly alkyl-substituted alkenes are thermodynamically more stable than less substituted ones?",
    "question_smiles": "CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "Hyperconjugation, which involves the stabilizing overlap of adjacent \\(C-H\\) or \\(C-C\\) \\(\\sigma\\) bonds with the empty \\(\\pi^*\\) antibonding molecular orbital of the double bond.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Inductive electron withdrawal by the alkyl groups, which decreases electronic repulsion in the \\(\\pi\\) cloud.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Steric strain of the alkyl groups which increases the s-character of the carbon-carbon double bond.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The greater electronegativity of \\(sp^3\\)-hybridized carbons relative to \\(sp^2\\)-hybridized carbons, which strengthens the bonds.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests theoretical understanding of hyperconjugation in alkenes.",
      "process": "Step 1: Alkyl groups are electron-donating. This stabilizing effect occurs through hyperconjugation.\nStep 2: Hyperconjugation involves the delocalization of electron density from the filled \\(sp^3\\) \\(C-H\\) (or \\(C-C\\)) \\(\\sigma\\) bond of the alkyl substituent into the empty \\(\\pi^*\\) molecular orbital of the double bond.\nStep 3: The more alkyl groups attached, the more hyperconjugative interactions exist, resulting in a more stable molecular orbital system.",
      "result": "Hyperconjugation stabilizes alkenes via \\(\\sigma\\)-to-\\(\\pi^*\\) orbital overlap."
    }
  },
  {
    "question_id": "ch7_q30_trans_cycloalkene_limit",
    "topic": "Alkene Stability",
    "difficulty_level": "Medium",
    "question_text": "What is the smallest cycloalkene ring size that is stable enough at room temperature to allow isolation of the trans geometric isomer?",
    "question_smiles": "C1=CCCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "An 8-membered ring (cyclooctene)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A 6-membered ring (cyclohexene)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A 5-membered ring (cyclopentene)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A 10-membered ring (cyclodecene)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question examines ring strain limitations on trans double bonds in cyclic systems.",
      "process": "Step 1: Small cycloalkenes (3- to 7-membered rings) cannot accommodate a trans double bond because the carbon chain is not long enough to bridge the opposite ends of the trans-alkene unit without introducing severe angle and torsional strain.\nStep 2: In trans-cyclooctene, the 8-membered ring provides sufficient flexibility to bridge the trans double bond, though it is still highly strained compared to the cis isomer.\nStep 3: Thus, trans-cyclooctene is the smallest stable trans-cycloalkene that can be isolated under ordinary conditions.",
      "result": "An 8-membered ring is the minimum size for a stable trans-cycloalkene."
    }
  },
  {
    "question_id": "ch7_q31_bredts_rule",
    "topic": "Alkene Stability",
    "difficulty_level": "Hard",
    "question_text": "Which of the following bridged bicyclic alkenes contains a double bond that violates Bredt's rule, making it highly unstable and unable to exist under normal conditions?",
    "question_smiles": "C1C2CCC1(=C2)",
    "options": [
      {
        "option_id": "A",
        "text": "bicyclo[2.2.1]hept-1-ene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "bicyclo[3.3.1]non-1-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "bicyclo[4.4.0]dec-1-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "bicyclo[2.2.2]oct-2-ene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests Bredt's rule, which restricts double bonds at bridgeheads of small bridged rings.",
      "process": "Step 1: Bredt's rule states that a double bond cannot reside at a bridgehead carbon of a bridged bicyclic system unless the total number of carbons in the rings is at least 8.\nStep 2: A bridgehead double bond is equivalent to a trans double bond within one of the rings. The rings must be large enough to accommodate this trans geometry without causing excessive strain.\nStep 3: Bicyclo[2.2.1]hept-1-ene has a bridgehead double bond at C1 in a system with only 7 carbons, violating Bredt's rule. The others either have larger rings (e.g., bicyclo[3.3.1]non-1-ene has 9 carbons) or do not place the double bond at a bridgehead (e.g., bicyclo[2.2.2]oct-2-ene).",
      "result": "Bicyclo[2.2.1]hept-1-ene is highly unstable due to violating Bredt's rule."
    }
  },
  {
    "question_id": "ch7_q32_heat_of_combustion",
    "topic": "Alkene Stability",
    "difficulty_level": "Medium",
    "question_text": "Two isomeric alkenes, A and B, share the molecular formula \\(C_5H_{10}\\). Complete combustion of 1 mole of isomer A in excess oxygen releases 3268 kJ of heat, whereas combustion of 1 mole of isomer B releases 3273 kJ of heat. Which statement is correct?",
    "question_smiles": "CC=CC",
    "options": [
      {
        "option_id": "A",
        "text": "Isomer A is thermodynamically more stable than isomer B by 5 kJ/mol.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Isomer B is thermodynamically more stable than isomer A by 5 kJ/mol.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Isomer A has a higher degree of unsaturation than isomer B.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Isomer B must be a trans-alkene, and isomer A must be a cis-alkene.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question applies combustion energy concepts to determine relative organic molecule stability.",
      "process": "Step 1: Combustion of isomeric hydrocarbons yields the same products: \\(CO_2\\) and \\(H_2O\\).\nStep 2: The isomer that is higher in potential energy (less stable) will release more energy when converted to the products. The isomer that is lower in potential energy (more stable) will release less energy.\nStep 3: Isomer A releases 3268 kJ, which is less than the 3273 kJ released by isomer B. Therefore, isomer A is more stable than isomer B by \\(3273 - 3268 = 5\\) kJ/mol.",
      "result": "Isomer A is more stable than isomer B by 5 kJ/mol."
    }
  },
  {
    "question_id": "ch7_q33_dimethylcyclohexenes_stability",
    "topic": "Alkene Stability",
    "difficulty_level": "Hard",
    "question_text": "What is the correct thermodynamic stability order for the three isomeric dimethylcyclohexenes:\nI. 1,2-dimethylcyclohexene\nII. 1,4-dimethylcyclohexene (specifically, 1,4-dimethylcyclohexene has a trisubstituted double bond: \\(C1(CH_3)=CH-CH_2-CH(CH_3)-CH_2-CH_2\\))\nIII. 3,3-dimethylcyclohexene (disubstituted double bond)",
    "question_smiles": "CC1=C(C)CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "III < II < I (least stable to most stable)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "I < II < III",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "II < III < I",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "III < I < II",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question analyzes relative stability of cyclic alkenes with different substitution patterns.",
      "process": "Step 1: Classify the substitution level of the double bond in each molecule.\nStep 2: 1,2-dimethylcyclohexene (I) has a tetrasubstituted double bond (stabilized by four alkyl groups). 1,4-dimethylcyclohexene (II) has a trisubstituted double bond. 3,3-dimethylcyclohexene (III) has a disubstituted double bond.\nStep 3: Thermodynamic stability increases with increasing alkyl substitution of the double bond. Therefore, the stability order is III < II < I.",
      "result": "The stability order is III < II < I."
    }
  },
  {
    "question_id": "ch7_q34_exo_vs_endo",
    "topic": "Alkene Stability",
    "difficulty_level": "Hard",
    "question_text": "Compare the thermodynamic stability of methylenecyclohexane and 1-methylcyclohexene. Which isomer is more stable and why?",
    "question_smiles": "CC1=CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "1-Methylcyclohexene is more stable because its double bond is trisubstituted and endocyclic, whereas methylenecyclohexane has a disubstituted exocyclic double bond.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methylenecyclohexane is more stable because its exocyclic double bond has less steric hindrance with the ring hydrogens.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "They have equal stability because they are structural isomers with the same molecular weight.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methylenecyclohexane is more stable because exocyclic double bonds are inherently thermodynamically favored in six-membered rings.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question compares the stability of exocyclic and endocyclic double bonds in cyclohexanes.",
      "process": "Step 1: Identify the substitution level. 1-methylcyclohexene is a trisubstituted alkene. Methylenecyclohexane is a disubstituted alkene.\nStep 2: Trisubstituted alkenes are thermodynamically more stable than disubstituted ones due to hyperconjugation.\nStep 3: Furthermore, for six-membered rings, endocyclic double bonds are generally more stable than exocyclic double bonds because the exocyclic geometry introduces more ring strain. Both factors favor 1-methylcyclohexene.",
      "result": "1-Methylcyclohexene is more stable due to its higher substitution and endocyclic position."
    }
  },
  {
    "question_id": "ch7_q35_addition_mechanism_rds",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Easy",
    "question_text": "What is the rate-determining step in the electrophilic addition of a hydrogen halide (\\(HX\\)) to an alkene?",
    "question_smiles": "CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "Protonation of the alkene double bond to generate a carbocation intermediate.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Attack of the halide anion on the carbocation intermediate.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Heterolytic cleavage of the \\(H-X\\) bond prior to alkene interaction.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Deprotonation of the carbocation to form the alkyl halide.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question focuses on the energy profile and kinetics of electrophilic addition.",
      "process": "Step 1: The mechanism of electrophilic addition consists of two main steps.\nStep 2: Step 1 involves electrophilic attack by the proton (from \\(HX\\)) on the \\(\\pi\\) electrons of the alkene, breaking the \\(\\pi\\) bond and forming a carbocation. This step is highly endothermic and has a high activation energy, making it the rate-determining step.\nStep 3: Step 2 is the fast attack of the halide nucleophile on the electrophilic carbocation to yield the alkyl halide.",
      "result": "Protonation of the alkene to form the carbocation is the rate-determining step."
    }
  },
  {
    "question_id": "ch7_q36_carbocation_stability",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Easy",
    "question_text": "Which of the following orders correctly lists carbocations in order of DECREASING stability (most stable to least stable)?",
    "question_smiles": "CC(C)(C)[C+]",
    "options": [
      {
        "option_id": "A",
        "text": "Tertiary (\\(3^\\circ\\)) > Secondary (\\(2^\\circ\\)) > Primary (\\(1^\\circ\\)) > Methyl",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methyl > Primary (\\(1^\\circ\\)) > Secondary (\\(2^\\circ\\)) > Tertiary (\\(3^\\circ\\))",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Secondary (\\(2^\\circ\\)) > Tertiary (\\(3^\\circ\\)) > Primary (\\(1^\\circ\\)) > Methyl",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Tertiary (\\(3^\\circ\\)) > Primary (\\(1^\\circ\\)) > Secondary (\\(2^\\circ\\)) > Methyl",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the relative stability of carbocation intermediates.",
      "process": "Step 1: Carbocations are electron-deficient species (6 electrons in valence shell) with a positive charge.\nStep 2: Alkyl groups stabilize carbocations through two mechanisms: inductive electron donation (releasing electron density through \\(\\sigma\\) bonds) and hyperconjugation (overlapping adjacent filled \\(C-H\\) or \\(C-C\\) \\(\\sigma\\) bonds with the vacant \\(p\\) orbital of the carbocation).\nStep 3: More alkyl groups mean more stabilization. Thus, tertiary carbocations are the most stable, and methyl carbocations are the least stable.",
      "result": "The correct order of stability is \\(3^\\circ > 2^\\circ > 1^\\circ > \\text{methyl}\\)."
    }
  },
  {
    "question_id": "ch7_q37_allyl_carbocation",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Hard",
    "question_text": "Which of the following carbocations is the MOST stable due to electronic delocalization?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Allyl carbocation (\\(CH_2=CH-CH_2^+\\))",
        "smiles": "C=C[CH2+]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Isopropyl carbocation (\\((CH_3)_2CH^+\\))",
        "smiles": "CC[CH+]C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Isobutyl carbocation (\\((CH_3)_2CHCH_2^+\\))",
        "smiles": "CC(C)[CH2+]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl carbocation (\\(CH_3CH_2^+\\))",
        "smiles": "C[CH2+]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests resonance stabilization compared to inductive/hyperconjugative stabilization of carbocations.",
      "process": "Step 1: Evaluate the stabilization mechanisms. Ethyl is primary (unstable). Isobutyl is primary (unstable). Isopropyl is secondary (moderately stable by hyperconjugation).\nStep 2: The allyl carbocation (\\(CH_2=CH-CH_2^+\\)) is primary but has a adjacent double bond. This allows delocalization of the positive charge via resonance: \\(CH_2=CH-CH_2^+ \\leftrightarrow ^+CH_2-CH=CH_2\\).\nStep 3: Resonance delocalization distributes the positive charge over multiple atoms, which stabilizes the intermediate far more than simple hyperconjugation. This makes the allyl cation comparable to or more stable than a secondary alkyl carbocation.",
      "result": "The allyl carbocation is the most stable because the positive charge is delocalized by resonance."
    }
  },
  {
    "question_id": "ch7_q38_markovnikov_modern",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Easy",
    "question_text": "What is the modern formulation of Markovnikov's rule regarding the addition of unsymmetrical reagents to unsymmetrical alkenes?",
    "question_smiles": "CC(C)=C",
    "options": [
      {
        "option_id": "A",
        "text": "The electrophilic addition proceeds via the formation of the more stable carbocation intermediate.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The nucleophile always adds to the double-bonded carbon with more hydrogen atoms.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The hydrogen atom always adds to the carbon with fewer hydrogen atoms.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The reaction proceeds to give a thermodynamic product that has no carbocation intermediates.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the mechanistic rationale behind Markovnikov's empirical rule.",
      "process": "Step 1: Markovnikov originally observed that hydrogen adds to the carbon with more hydrogens.\nStep 2: Mechanistically, adding the electrophile (hydrogen) to the carbon with more hydrogens leaves the positive charge on the more substituted carbon.\nStep 3: This more substituted carbon forms a more stable carbocation (lower activation energy). The modern formulation is that electrophilic addition proceeds to yield the more stable carbocation intermediate.",
      "result": "Markovnikov's rule is explained by the preferential formation of the more stable carbocation intermediate."
    }
  },
  {
    "question_id": "ch7_q39_hcl_addition",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product obtained from the reaction of 2-methylbut-2-ene with aqueous hydrochloric acid (\\(HCl\\))?",
    "question_smiles": "CC=C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "2-chloro-2-methylbutane",
        "smiles": "CCC(C)(Cl)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-chloro-3-methylbutane",
        "smiles": "CC(Cl)C(C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-chloro-2-methylbutane",
        "smiles": "CCC(C)CCl",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,3-dichlorobutane",
        "smiles": "CC(Cl)C(Cl)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question applies Markovnikov's rule to the addition of HCl to an unsymmetrical alkene.",
      "process": "Step 1: Protonation of the alkene can occur at C2 or C3. If protonated at C3, it forms a tertiary carbocation at C2: \\((CH_3)_2C^+-CH_2CH_3\\). If protonated at C2, it forms a secondary carbocation at C3: \\((CH_3)_2CH-C^+HCH_3\\).\nStep 2: The tertiary carbocation is more stable and forms faster.\nStep 3: Chloride ion attacks the tertiary carbocation at C2, giving 2-chloro-2-methylbutane.",
      "result": "The major product is 2-chloro-2-methylbutane."
    }
  },
  {
    "question_id": "ch7_q40_hbr_rearrangement",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Hard",
    "question_text": "When 3-methylbut-1-ene is treated with hydrogen bromide (\\(HBr\\)), the major product obtained is 2-bromo-2-methylbutane. Which of the following mechanistic steps explains this result?",
    "question_smiles": "CC(C)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "A 1,2-hydride shift from the tertiary C3 carbon to the secondary C2 carbocation.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A 1,2-methyl shift from the tertiary C3 carbon to the secondary C2 carbocation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Direct nucleophilic attack of bromide on the C3 carbon.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A 1,3-hydride shift from the methyl group to the primary carbon.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests carbocation rearrangements (hydride shifts) during electrophilic addition.",
      "process": "Step 1: Protonation of 3-methylbut-1-ene (\\((CH_3)_2CH-CH=CH_2\\)) at C1 yields a secondary carbocation at C2: \\((CH_3)_2CH-C^+H-CH_3\\).\nStep 2: This secondary carbocation is adjacent to a tertiary carbon C3. A 1,2-hydride shift occurs, migrating a hydrogen with its electron pair from C3 to C2.\nStep 3: This generates a more stable tertiary carbocation: \\((CH_3)_2C^+-CH_2-CH_3\\). Attack of bromide on this tertiary carbocation gives 2-bromo-2-methylbutane.",
      "result": "A 1,2-hydride shift converts the secondary carbocation into a more stable tertiary carbocation, leading to the rearranged product."
    }
  },
  {
    "question_id": "ch7_q41_methyl_shift",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product of the reaction of 3,3-dimethylbut-1-ene with hydrobromic acid (\\(HBr\\))?",
    "question_smiles": "CC(C)(C)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "2-bromo-2,3-dimethylbutane",
        "smiles": "CC(C)C(C)(C)Br",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-bromo-2,2-dimethylbutane",
        "smiles": "CC(C)(C)C(Br)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-bromo-3,3-dimethylbutane",
        "smiles": "CC(C)(C)CCBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-bromo-3,3-dimethylbutane",
        "smiles": "CC(C)(C)C(C)Br",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests carbocation rearrangements via methyl shifts.",
      "process": "Step 1: Protonation of 3,3-dimethylbut-1-ene (\\((CH_3)_3C-CH=CH_2\\)) at C1 gives a secondary carbocation at C2: \\((CH_3)_3C-C^+H-CH_3\\).\nStep 2: C3 is a quaternary carbon with three methyl groups. To form a more stable carbocation, one of the methyl groups undergoes a 1,2-methyl shift (along with its pair of bonding electrons) to C2.\nStep 3: This produces a tertiary carbocation: \\((CH_3)_2C^+-CH(CH_3)_2\\). Nucleophilic attack of bromide on this tertiary carbocation yields 2-bromo-2,3-dimethylbutane.",
      "result": "A 1,2-methyl shift generates the tertiary carbocation, yielding 2-bromo-2,3-dimethylbutane as the major product."
    }
  },
  {
    "question_id": "ch7_q42_ring_expansion",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed when methylenecyclobutane is treated with aqueous acid (\\(H_3O^+\\))?",
    "question_smiles": "C1CC(=C)C1",
    "options": [
      {
        "option_id": "A",
        "text": "1-methylcyclopentanol",
        "smiles": "CC1(O)CCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(1-methylcyclobutyl)methanol",
        "smiles": "CC1(CO)CCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "cyclopentanol",
        "smiles": "OC1CCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-methylcyclobutanol",
        "smiles": "CC1(O)CCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question examines carbocation rearrangement involving ring expansion to relieve ring strain.",
      "process": "Step 1: Protonation of the exocyclic double bond of methylenecyclobutane gives a tertiary 1-methylcyclobutyl carbocation.\nStep 2: While tertiary, this carbocation is part of a strained four-membered ring. A 1,2-alkyl shift (ring expansion) occurs, migrating a ring bond to relieve ring strain, producing a 5-membered secondary cyclopentyl carbocation.\nStep 3: A subsequent 1,2-hydride shift occurs to convert the secondary carbocation into a more stable tertiary 1-methylcyclopentyl carbocation. Attack by water and subsequent deprotonation yields 1-methylcyclopentanol.",
      "result": "The reaction proceeds via ring expansion to form 1-methylcyclopentanol."
    }
  },
  {
    "question_id": "ch7_q43_stereochemistry_addition",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Medium",
    "question_text": "Why does the electrophilic addition of hydrogen halides (\\(HX\\)) to an achiral acyclic alkene yield a racemic mixture of enantiomers when a new stereocenter is created?",
    "question_smiles": "CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "The carbocation intermediate is planar and \\(sp^2\\)-hybridized, allowing the halide nucleophile to attack with equal probability from either the top or bottom face.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The reaction is a concerted syn-addition that forces the halide and hydrogen to add to the same face.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The alkene exists as an equal mixture of enantiomeric conformations.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The reaction goes through a chiral bridged halonium ion intermediate.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question addresses the stereochemical consequences of planar carbocation intermediates.",
      "process": "Step 1: The rate-determining step forms an acyclic carbocation intermediate.\nStep 2: The carbocation carbon is \\(sp^2\\)-hybridized and planar, with an empty \\(p\\) orbital extending vertically on both faces.\nStep 3: Because the starting materials and environment are achiral, there is no energetic difference between attack from the top face vs. the bottom face. This results in a 50:50 mixture of both enantiomers (a racemic mixture).",
      "result": "The planarity of the carbocation intermediate leads to equal attack from either face, producing a racemic mixture."
    }
  },
  {
    "question_id": "ch7_q44_hydration_nucleophile",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Medium",
    "question_text": "In the acid-catalyzed hydration of alkenes, which species acts as the nucleophile in the step that forms the carbon-oxygen bond?",
    "question_smiles": "CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "A water molecule (\\(H_2O\\))",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A hydronium ion (\\(H_3O^+\\))",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A bisulfate ion (\\(HSO_4^-\\))",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The carbocation intermediate",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the role of reactants in the acid-catalyzed hydration mechanism.",
      "process": "Step 1: The alkene is first protonated by the acid catalyst to form a carbocation intermediate.\nStep 2: In the next step, water (\\(H_2O\\)), which is present in large excess and possesses lone pairs on oxygen, acts as a weak nucleophile and attacks the carbocation.\nStep 3: This forms a protonated alcohol intermediate, which is subsequently deprotonated by water to yield the alcohol product and regenerate the hydronium catalyst.",
      "result": "Water (\\(H_2O\\)) acts as the nucleophile that attacks the carbocation intermediate."
    }
  },
  {
    "question_id": "ch7_q45_halogenation_stereochem",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Medium",
    "question_text": "Reaction of cyclohexene with bromine (\\(Br_2\\)) in a non-nucleophilic solvent like dichloromethane yields trans-1,2-dibromocyclohexane. Which intermediate explains this anti stereochemistry?",
    "question_smiles": "C1=CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "A cyclic bromonium ion intermediate",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A planar carbocation intermediate",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A free radical intermediate",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A carbanion intermediate",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question focuses on the stereochemical outcome (anti-addition) of alkene halogenation.",
      "process": "Step 1: The reaction begins with electrophilic attack of \\(Br_2\\) on cyclohexene.\nStep 2: The bromine atom forms a three-membered bridged cyclic bromonium ion, blocking one face of the ring.\nStep 3: The remaining bromide ion must attack from the opposite face (backside attack), leading exclusively to trans-1,2-dibromocyclohexane (anti addition).",
      "result": "The cyclic bromonium ion intermediate prevents syn-addition and results in the trans product."
    }
  },
  {
    "question_id": "ch7_q46_halohydrin_regiochem",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product and its regiochemical orientation when 2-methylpropene is treated with bromine (\\(Br_2\\)) in water?",
    "question_smiles": "CC(C)=C",
    "options": [
      {
        "option_id": "A",
        "text": "1-bromo-2-methylpropan-2-ol (bromine at C1, hydroxyl at C2)",
        "smiles": "CC(C)(O)CBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-bromo-2-methylpropan-1-ol (bromine at C2, hydroxyl at C1)",
        "smiles": "CC(C)(Br)CO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,2-dibromo-2-methylpropane",
        "smiles": "CC(C)(Br)CBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-methylpropan-2-ol",
        "smiles": "CC(C)(C)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the regioselectivity of halohydrin formation.",
      "process": "Step 1: The alkene reacts with bromine to form a cyclic bromonium ion intermediate.\nStep 2: Water acts as the nucleophile to open the ring. It attacks the more substituted carbon (C2) because C2 can better stabilize the partial positive charge in the transition state (having tertiary carbocation-like character).\nStep 3: This results in the hydroxyl group adding to C2 and the bromine atom to C1, forming 1-bromo-2-methylpropan-2-ol.",
      "result": "The major product is 1-bromo-2-methylpropan-2-ol, with the OH at the more substituted position."
    }
  },
  {
    "question_id": "ch7_q47_evidence_against_carbocation",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Hard",
    "question_text": "Which of the following experimental observations provides the strongest evidence AGAINST a simple planar carbocation intermediate in the bromination of cyclopentene?",
    "question_smiles": "C1=CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "The reaction yields exclusively trans-1,2-dibromocyclopentane.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The reaction rate increases with increasing alkyl substitution on the double bond.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The reaction is carried out in dark conditions and does not require light.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The product obtained is a racemic mixture of enantiomers.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests how experimental stereochemical data can distinguish between competing mechanistic pathways.",
      "process": "Step 1: If the reaction proceeded through a simple carbocation intermediate, the intermediate would be planar and C-C single bond rotation could occur.\nStep 2: The bromide nucleophile could attack from either the top or bottom face, yielding a mixture of cis- and trans-1,2-dibromocyclopentane (both syn and anti addition products).\nStep 3: The observation of exclusive anti-addition (trans product) indicates that the intermediate is bridged (cyclic bromonium ion) and blocks one face, preventing rotation and syn attack.",
      "result": "Exclusive formation of the trans isomer (anti-addition) rules out a free, planar carbocation intermediate."
    }
  },
  {
    "question_id": "ch7_q48_hbr_addition_reactivity",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Medium",
    "question_text": "Rank the following alkenes in order of increasing reactivity toward the electrophilic addition of \\(HBr\\) (slowest to fastest):\nI. Ethylene (\\(CH_2=CH_2\\))\nII. Propene (\\(CH_3CH=CH_2\\))\nIII. 2-Methylpropene (\\((CH_3)_2C=CH_2\\))",
    "question_smiles": "C=C",
    "options": [
      {
        "option_id": "A",
        "text": "I < II < III",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "III < II < I",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "II < I < III",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "I < III < II",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the relationship between alkene structure, nucleophilicity, and the activation barrier for carbocation formation.",
      "process": "Step 1: The rate-determining step is protonation to form a carbocation intermediate. Alkenes that form more stable carbocations react faster.\nStep 2: Ethylene (I) forms a primary carbocation (very high activation energy, slowest). Propene (II) forms a secondary carbocation (moderate activation energy). 2-Methylpropene (III) forms a tertiary carbocation (lowest activation energy, fastest).\nStep 3: Additionally, alkyl groups are electron-donating, making the double bond in 2-methylpropene more nucleophilic than that in propene, which is more nucleophilic than ethylene. Thus, the order is I < II < III.",
      "result": "Reactivity increases with alkyl substitution on the double bond: I < II < III."
    }
  },
  {
    "question_id": "ch7_q49_rearrangement_susceptibility",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Medium",
    "question_text": "Which of the following alkenes is highly susceptible to carbocation rearrangement when treated with aqueous hydrochloric acid?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "3-methylbut-1-ene",
        "smiles": "CC(C)C=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-methylbut-2-ene",
        "smiles": "CC=C(C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-methylbut-1-ene",
        "smiles": "CCC(C)=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "but-2-ene",
        "smiles": "CC=CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question identifies structures that undergo carbocation rearrangement.",
      "process": "Step 1: Examine the carbocation formed upon protonation of each alkene.\n- 3-methylbut-1-ene: forms a secondary carbocation adjacent to a tertiary carbon, which undergoes a hydride shift.\n- 2-methylbut-2-ene: forms a tertiary carbocation directly, which is stable and does not rearrange.\n- 2-methylbut-1-ene: forms a tertiary carbocation directly, which does not rearrange.\n- but-2-ene: forms a secondary carbocation adjacent to primary and secondary positions; no thermodynamic driving force for rearrangement.\nStep 2: 3-methylbut-1-ene will undergo rearrangement.",
      "result": "3-methylbut-1-ene undergoes rearrangement via a 1,2-hydride shift to form a tertiary alkyl chloride."
    }
  },
  {
    "question_id": "ch7_q50_deuterium_labeling",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Hard",
    "question_text": "If propene is reacted with deuterium chloride (\\(DCl\\)) in methanol, where will the deuterium atom reside in the major organic product?",
    "question_smiles": "CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "Exclusively at C1 (yielding 2-chloro-1-deuteriopropane)",
        "smiles": "CC(Cl)C[2H]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Exclusively at C2 (yielding 2-chloro-2-deuteriopropane)",
        "smiles": "CC(Cl)([2H])C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "An equal 50:50 mixture at C1 and C2",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Exclusively at C3",
        "smiles": "[2H]CC(Cl)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests mechanistic understanding of regioselective deuteration during electrophilic addition.",
      "process": "Step 1: Deuterium (\\(D\\)) acts as an isotope of hydrogen (\\(H\\)) and behaves as the electrophile (\\(D^+\\)).\nStep 2: According to Markovnikov's rule, the electrophile (\\(D^+\\)) adds to the less-substituted carbon (C1) of propene to form the more stable secondary carbocation intermediate: \\(CH_3-C^+H-CH_2D\\).\nStep 3: The chloride nucleophile (\\(Cl^-\\)) then attacks the carbocation at C2 to form 2-chloro-1-deuteriopropane. The deuterium is located exclusively at C1.",
      "result": "Deuterium adds to the terminal C1, yielding 2-chloro-1-deuteriopropane as the major product."
    }
  },
  {
    "question_id": "ch7_q_dynamic_ez_alkene",
    "topic": "Alkene Stereochemistry: E/Z",
    "difficulty_level": "Medium",
    "question_text": "Match each alkene structure to its correct stereochemical description.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C/C=C/C",
        "correctAnswer": "(E)-2-butene"
      },
      {
        "smiles": "C/C=C\\C",
        "correctAnswer": "(Z)-2-butene"
      },
      {
        "smiles": "C/C(C)=C/Cl",
        "correctAnswer": "(E)-1-chloro-2-methylpropene"
      },
      {
        "smiles": "C/C(C)=C\\Cl",
        "correctAnswer": "(Z)-1-chloro-2-methylpropene"
      }
    ],
    "match_options": [
      "(E)-2-butene",
      "(Z)-2-butene",
      "(E)-1-chloro-2-methylpropene",
      "(Z)-1-chloro-2-methylpropene",
      "Isobutene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect E/Z mapping",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Applying E/Z rules based on priority of substituents on double bonds.",
      "process": "In 2-butene, methyls are on opposite sides for E, and same side for Z. In 1-chloro-2-methylpropene, Cl (priority 1) vs H (priority 2) on C1, and Methyl (priority 1) vs Methyl (priority 2) on C2 determines configuration.",
      "result": "E/Z nomenclature resolved."
    }
  }
];
