// OChemStudyBuddy - McMurry Chapter 17
// Author: A. Elangovan, PhD
var CH17_QUESTIONS = [
  {
    "question_id": "ch17_q1_iupac_stereochem",
    "topic": "Naming alcohols and phenols",
    "difficulty_level": "Medium",
    "question_text": "What is the correct IUPAC name, including the stereochemical descriptor, for the chiral alcohol shown below?",
    "question_smiles": "CC(C)(C)[C@H](O)C",
    "options": [
      {
        "option_id": "A",
        "text": "(S)-3,3-dimethylbutan-2-ol",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(R)-3,3-dimethylbutan-2-ol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(S)-2,2-dimethylbutan-3-ol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(R)-2,2-dimethylbutan-3-ol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the rules of IUPAC nomenclature for branched chiral alcohols and the assignment of stereocenters using the Cahn-Ingold-Prelog (CIP) priority rules.",
      "process": "Step 1: Identify the longest carbon chain containing the hydroxyl group. This is a 4-carbon chain (butane).\nStep 2: Number the chain from the end closest to the hydroxyl group. The OH is at C2, and the methyl groups are at C3, giving 3,3-dimethylbutan-2-ol.\nStep 3: Assign configuration at C2. Priority: -OH (1), -C(CH3)3 (2), -CH3 (3), -H (4). With -H pointing away (implicit in the representation of [C@H]), tracing 1 -> 2 -> 3 goes counter-clockwise, which corresponds to the (S) configuration.",
      "result": "The correct IUPAC name is (S)-3,3-dimethylbutan-2-ol."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q2_iupac_unsaturated",
    "topic": "Naming alcohols and phenols",
    "difficulty_level": "Hard",
    "question_text": "What is the correct IUPAC name, including stereochemistry, for the unsaturated alcohol shown below?",
    "question_smiles": "C/C=C\\C(O)C#C",
    "options": [
      {
        "option_id": "A",
        "text": "(Z)-hex-4-en-1-yn-3-ol",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(E)-hex-4-en-1-yn-3-ol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(Z)-hex-2-en-5-yn-4-ol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(E)-hex-2-en-5-yn-4-ol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the IUPAC naming rules for molecules containing multiple functional groups (alkene, alkyne, and alcohol) and double bond geometry.",
      "process": "Step 1: Determine the principal functional group. Hydroxyl (-OH) has higher priority than double or triple bonds, so it gets the lowest possible locant.\nStep 2: Number the 6-carbon chain starting from the right (alkyne end) to give the OH group carbon 3: C1#C2-C3(OH)-C4=C5-C6. This makes the parent chain hex-4-en-1-yn-3-ol.\nStep 3: Determine double bond stereochemistry. The substituents at C4 and C5 are cis (Z) because the main chain carbons are on the same side of the double bond.",
      "result": "The correct name is (Z)-hex-4-en-1-yn-3-ol."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q3_phenol_nomenclature",
    "topic": "Naming alcohols and phenols",
    "difficulty_level": "Medium",
    "question_text": "What is the IUPAC name for the polyfunctional aromatic compound shown below?",
    "question_smiles": "O=Cc1ccc(O)c(Br)c1",
    "options": [
      {
        "option_id": "A",
        "text": "3-bromo-4-hydroxybenzaldehyde",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-bromo-4-formylphenol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-bromo-4-hydroxyphenylaldehyde",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-bromo-4-hydroxybenzaldehyde",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests functional group priority in benzene derivatives.",
      "process": "Step 1: Identify the main functional groups: aldehyde (-CHO), phenol/alcohol (-OH), and halogen (-Br).\nStep 2: According to IUPAC priority rules, aldehyde (-CHO) has a higher priority than alcohol (-OH). Thus, the parent name is benzaldehyde, and C1 is the carbon attached to the -CHO group.\nStep 3: Number the ring to give the lowest possible locants to substituents: C3 has bromine and C4 has the hydroxyl group. Alphabetical ordering dictates 3-bromo before 4-hydroxy.",
      "result": "The correct name is 3-bromo-4-hydroxybenzaldehyde."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q4_bicyclic_alcohol",
    "topic": "Naming alcohols and phenols",
    "difficulty_level": "Hard",
    "question_text": "What is the correct IUPAC name for the bicyclic alcohol shown below?",
    "question_smiles": "OC1CC2CCC1C2",
    "options": [
      {
        "option_id": "A",
        "text": "bicyclo[2.2.1]heptan-2-ol",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "bicyclo[2.2.1]heptan-5-ol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "bicyclo[3.1.1]heptan-2-ol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "bicyclo[2.2.2]octan-2-ol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the IUPAC naming of bicyclic ring systems containing a functional group.",
      "process": "Step 1: Count the total number of carbon atoms in the bicyclic system (7 carbons = heptane).\nStep 2: Identify the bridgehead carbons and count the number of carbons in each of the three bridges: two bridges have 2 carbons, and one bridge has 1 carbon. This gives the prefix [2.2.1].\nStep 3: Number the system starting from a bridgehead carbon, going along the longest path to the second bridgehead, then the next longest path, and finally the shortest path. The substituent (-OH) is located at position 2, yielding bicyclo[2.2.1]heptan-2-ol.",
      "result": "The correct name is bicyclo[2.2.1]heptan-2-ol."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q5_dinitro_phenol",
    "topic": "Naming alcohols and phenols",
    "difficulty_level": "Medium",
    "question_text": "What is the correct IUPAC name of the phenol derivative shown below?",
    "question_smiles": "Oc1c(C)cc([N+](=O)[O-])cc1[N+](=O)[O-]",
    "options": [
      {
        "option_id": "A",
        "text": "2-methyl-4,6-dinitrophenol",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "6-methyl-2,4-dinitrophenol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-hydroxy-2-methyl-4,6-dinitrobenzene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,4-dinitro-6-methylphenol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the IUPAC rules for numbering polysubstituted phenols, specifically comparing alphabetical priority when locant sets are identical.",
      "process": "Step 1: The parent structure is phenol, so the carbon with the -OH group is automatically assigned C1.\nStep 2: Numbering clockwise or counter-clockwise gives the substituent locant sets of (2,4,6). Going clockwise places the methyl group at C2 and nitro groups at C4 and C6. Going counter-clockwise places the methyl group at C6 and nitro groups at C2 and C4.\nStep 3: Compare substituents alphabetically: 'methyl' starts with 'm' and 'nitro' starts with 'n'. Because 'methyl' precedes 'nitro' alphabetically, we assign the lower number (C2) to the methyl group. This results in 2-methyl-4,6-dinitrophenol.",
      "result": "The correct name is 2-methyl-4,6-dinitrophenol."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q6_bp_comparison",
    "topic": "physical properties (boiling points, solubility, hydrogen bonding)",
    "difficulty_level": "Easy",
    "question_text": "Which of the following compounds has the highest boiling point?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "pentan-3-ol",
        "smiles": "CCC(O)CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-ethoxypropane",
        "smiles": "CCCOCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "pentan-3-one",
        "smiles": "CCC(=O)CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "pentane",
        "smiles": "CCCCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests how intermolecular forces affect the physical properties of organic molecules, specifically boiling point.",
      "process": "Step 1: Identify the main intermolecular forces for each molecule: pentane has only weak London dispersion forces; ethoxypropane and pentan-3-one have dipole-dipole interactions; pentan-3-ol has strong hydrogen bonding.\nStep 2: Compare the strength of these forces. Hydrogen bonding is significantly stronger than dipole-dipole interactions and London dispersion forces, requiring much more thermal energy to break during vaporization.",
      "result": "Pentan-3-ol has the highest boiling point due to intermolecular hydrogen bonding."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q7_hydrogen_bonding",
    "topic": "physical properties (boiling points, solubility, hydrogen bonding)",
    "difficulty_level": "Hard",
    "question_text": "Compare the boiling points of o-nitrophenol and p-nitrophenol. Which statement correctly explains their difference in boiling points?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "p-Nitrophenol has a higher boiling point because it forms intermolecular hydrogen bonds, while o-nitrophenol forms intramolecular hydrogen bonds.",
        "smiles": "Oc1ccc(cc1)[N+](=O)[O-]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "o-Nitrophenol has a higher boiling point because it forms stronger intermolecular hydrogen bonds.",
        "smiles": "Oc1ccccc1[N+](=O)[O-]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "p-Nitrophenol has a lower boiling point because the para-nitro group steric hindrance prevents hydrogen bonding.",
        "smiles": "Oc1ccc(cc1)[N+](=O)[O-]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both compounds have identical boiling points since they are structural isomers with the same molecular weight.",
        "smiles": "Oc1ccccc1[N+](=O)[O-]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the differences between intramolecular and intermolecular hydrogen bonding and their effects on physical properties.",
      "process": "Step 1: Examine the structure of o-nitrophenol. The -OH and -NO2 groups are adjacent, allowing them to form a stable six-membered ring via intramolecular hydrogen bonding.\nStep 2: Examine the structure of p-nitrophenol. The groups are too far apart for intramolecular hydrogen bonding, forcing the molecule to form extensive intermolecular hydrogen bonds with neighboring molecules.\nStep 3: Intermolecular hydrogen bonding increases the cohesion between separate molecules, raising the boiling point, whereas intramolecular hydrogen bonding limits external interactions, lowering the boiling point.",
      "result": "p-Nitrophenol has a higher boiling point due to intermolecular hydrogen bonding."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q8_diol_solubility",
    "topic": "physical properties (boiling points, solubility, hydrogen bonding)",
    "difficulty_level": "Medium",
    "question_text": "Which of the following hexanediol isomers is expected to have the highest solubility in water, and why?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Hexane-1,6-diol, because it contains two polar hydroxyl groups capable of forming hydrogen bonds at both ends of the carbon chain.",
        "smiles": "OCCCCCCO",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Hexan-1-ol, because it has only one hydroxyl group and thus experiences less steric hindrance to hydration.",
        "smiles": "CCCCCCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Hexane-3,4-diol, because the adjacent hydroxyl groups form a strong intramolecular hydrogen bond that prevents interaction with water.",
        "smiles": "CCC(O)C(O)CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Hexane, because it lacks polar groups and can disperse water molecules more efficiently.",
        "smiles": "CCCCCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests factors influencing solubility in water, emphasizing the ratio of polar (hydrophilic) to nonpolar (hydrophobic) areas in a molecule.",
      "process": "Step 1: Identify that water solubility of organic molecules depends on their ability to form hydrogen bonds with water.\nStep 2: Diols contain two -OH groups, making them much more hydrophilic than mono-alcohols of similar molecular weight.\nStep 3: Hexane-1,6-diol has the two polar -OH groups separated at opposite ends of the hydrophobic 6-carbon chain, which allows both groups to engage in intermolecular hydrogen bonding with water molecules, maximizing solubility.",
      "result": "Hexane-1,6-diol is the most soluble due to two terminal hydroxyl groups."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q9_alkoxide_water",
    "topic": "acidity and basicity of alcohols and phenols (substituent effects on phenol acidity, alkoxide formation)",
    "difficulty_level": "Medium",
    "question_text": "When sodium ethoxide is dissolved in water, what is the position of the equilibrium, and which species are favored?",
    "question_smiles": "CC[O-]",
    "options": [
      {
        "option_id": "A",
        "text": "The equilibrium lies heavily to the right, favoring ethanol and hydroxide ion.",
        "smiles": "CCO",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The equilibrium lies heavily to the left, favoring ethoxide ion and water.",
        "smiles": "CC[O-]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The equilibrium is exactly at the midpoint, with equal concentrations of ethoxide and hydroxide.",
        "smiles": "CCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "No reaction occurs because ethoxide is a weaker base than hydroxide.",
        "smiles": "CC[O-]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the relative acid-base strengths of alcohols and water, and the equilibrium position of their acid-base reactions.",
      "process": "Step 1: Identify the acids involved: water (conjugate acid of hydroxide, pKa = 15.7) and ethanol (conjugate acid of ethoxide, pKa = 16).\nStep 2: Compare acid strengths. Water is a stronger acid than ethanol (lower pKa value).\nStep 3: In acid-base reactions, equilibrium always favors the side with the weaker acid/base pair. Since ethanol is the weaker acid, the equilibrium will lie to the right, favoring the formation of ethanol and hydroxide.",
      "result": "The equilibrium favors ethanol and hydroxide because water is a stronger acid than ethanol."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q10_phenol_solubility_extraction",
    "topic": "acidity and basicity of alcohols and phenols (substituent effects on phenol acidity, alkoxide formation)",
    "difficulty_level": "Hard",
    "question_text": "Which aqueous reagent can selectively deprotonate phenol to dissolve it in the aqueous phase, leaving cyclohexanol in the organic phase during extraction?",
    "question_smiles": "Oc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "1 M Aqueous sodium hydroxide (NaOH)",
        "smiles": "[O-]c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1 M Aqueous sodium bicarbonate (NaHCO3)",
        "smiles": "Oc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1 M Aqueous hydrochloric acid (HCl)",
        "smiles": "Oc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Pure water",
        "smiles": "Oc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the application of acidity differences (pKa values) to separate organic compounds via acid-base extraction.",
      "process": "Step 1: Determine the pKa values of the compounds. Phenol has a pKa of ~10, while cyclohexanol has a pKa of ~16.\nStep 2: Choose a base that is strong enough to deprotonate phenol (conjugate acid pKa > 10) but too weak to deprotonate cyclohexanol (conjugate acid pKa < 16).\nStep 3: Sodium hydroxide (conjugate acid H2O, pKa = 15.7) fits this range: it is strong enough to deprotonate phenol (forming water-soluble sodium phenoxide) but cannot significantly deprotonate cyclohexanol. Sodium bicarbonate (conjugate acid H2CO3, pKa = 6.4) is too weak to deprotonate phenol.",
      "result": "Aqueous NaOH selectively extracts phenol by converting it to water-soluble sodium phenoxide."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q11_substituted_phenol_acidity",
    "topic": "acidity and basicity of alcohols and phenols (substituent effects on phenol acidity, alkoxide formation)",
    "difficulty_level": "Medium",
    "question_text": "Arrange the following compounds in order of increasing acidity (least acidic to most acidic): p-aminophenol, p-cresol, phenol, and p-nitrophenol.",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "p-aminophenol < p-cresol < phenol < p-nitrophenol",
        "smiles": "Oc1ccc(cc1)N",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "p-nitrophenol < phenol < p-cresol < p-aminophenol",
        "smiles": "Oc1ccc(cc1)[N+](=O)[O-]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "phenol < p-cresol < p-aminophenol < p-nitrophenol",
        "smiles": "Oc1ccc(cc1)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "p-cresol < p-aminophenol < phenol < p-nitrophenol",
        "smiles": "Oc1ccc(cc1)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the effect of substituents on the acidity of phenols.",
      "process": "Step 1: Understand that acidity is determined by the stability of the conjugate phenoxide ion.\nStep 2: Electron-withdrawing groups (EWGs) stabilize the negative charge and increase acidity, while electron-donating groups (EDGs) destabilize the charge and decrease acidity.\nStep 3: The amino group (-NH2) is a strong EDG due to resonance (+M), making p-aminophenol the least acidic. The methyl group (-CH3) is weakly donating (+I), making p-cresol slightly less acidic than phenol. The nitro group (-NO2) is a strong EWG (-M, -I), making p-nitrophenol the most acidic.",
      "result": "The correct order of increasing acidity is p-aminophenol < p-cresol < phenol < p-nitrophenol."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q12_pka_substituent_phenol",
    "topic": "acidity and basicity of alcohols and phenols (substituent effects on phenol acidity, alkoxide formation)",
    "difficulty_level": "Hard",
    "question_text": "Which of the following phenol derivatives has the lowest pKa value?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "2,4,6-trinitrophenol",
        "smiles": "Oc1cc([N+](=O)[O-])cc([N+](=O)[O-])c1[N+](=O)[O-]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2,4-dinitrophenol",
        "smiles": "Oc1ccc(cc1[N+](=O)[O-])[N+](=O)[O-]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-nitrophenol",
        "smiles": "Oc1ccc(cc1)[N+](=O)[O-]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-nitrophenol",
        "smiles": "Oc1cccc(c1)[N+](=O)[O-]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the cumulative resonance and inductive effects of multiple electron-withdrawing groups on the acidity of phenol.",
      "process": "Step 1: Identify that a lower pKa value corresponds to a stronger acid.\nStep 2: Analyze the role of the nitro groups (-NO2). Nitro groups at ortho (2,6) and para (4) positions participate in resonance delocalization of the negative charge on the phenoxide oxygen.\nStep 3: 2,4,6-trinitrophenol (picric acid) has three nitro groups directly stabilizing the conjugate base through both strong resonance and inductive withdrawal, bringing its pKa down to ~0.38.",
      "result": "2,4,6-trinitrophenol has the lowest pKa because of three nitro groups stabilizing the conjugate base."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q13_fluorinated_alcohol_acidity",
    "topic": "acidity and basicity of alcohols and phenols (substituent effects on phenol acidity, alkoxide formation)",
    "difficulty_level": "Medium",
    "question_text": "Which of the following alcohols is the most acidic?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "1,1,1,3,3,3-hexafluoropropan-2-ol",
        "smiles": "FC(F)(F)C(O)C(F)(F)F",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "propan-2-ol",
        "smiles": "CC(O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,1,1-trifluoropropan-2-ol",
        "smiles": "FC(F)(F)C(O)C",
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
      "context": "This question tests the inductive effect of halogen substituents on the acidity of alcohols.",
      "process": "Step 1: Evaluate how electronegative fluorine atoms pull electron density through sigma bonds (inductive effect).\nStep 2: Inductive electron withdrawal stabilizes the negative charge on the oxygen of the alkoxide conjugate base.\nStep 3: The greater the number of fluorine atoms close to the hydroxyl group, the stronger the inductive effect and the higher the acidity. 1,1,1,3,3,3-hexafluoropropan-2-ol contains six fluorine atoms and is highly acidic (pKa ~ 9.3) compared to propan-2-ol (pKa ~ 16.5).",
      "result": "1,1,1,3,3,3-hexafluoropropan-2-ol is the most acidic due to the strong inductive effect of six fluorine atoms."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q14_alkoxide_formation_reagents",
    "topic": "acidity and basicity of alcohols and phenols (substituent effects on phenol acidity, alkoxide formation)",
    "difficulty_level": "Medium",
    "question_text": "Which of the following reagents is the most effective for preparing sodium tert-butoxide from tert-butyl alcohol?",
    "question_smiles": "CC(C)(C)O",
    "options": [
      {
        "option_id": "A",
        "text": "Sodium hydride (NaH)",
        "smiles": "CC(C)(C)[O-]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Sodium hydroxide (NaOH)",
        "smiles": "CC(C)(C)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Sodium chloride (NaCl)",
        "smiles": "CC(C)(C)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Sodium bicarbonate (NaHCO3)",
        "smiles": "CC(C)(C)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the appropriate choice of base for the quantitative formation of an alkoxide from a sterically hindered alcohol.",
      "process": "Step 1: Identify that tert-butyl alcohol has a pKa of ~18, making it a very weak acid.\nStep 2: In order to drive the deprotonation to completion, we must use a base much stronger than the conjugate base of the alcohol (alkoxide). Hydroxide (from NaOH, conjugate acid pKa = 15.7) is too weak to deprotonate tert-butyl alcohol.\nStep 3: Sodium hydride (NaH) contains the hydride ion (H-), which is an extremely strong, non-nucleophilic base (conjugate acid H2 has a pKa ~ 35). Deprotonation produces H2 gas, which escapes the reaction mixture and drives the reaction irreversibly to the right.",
      "result": "Sodium hydride (NaH) quantitatively converts tert-butyl alcohol to sodium tert-butoxide."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q15_phenol_vs_cyclohexanol",
    "topic": "acidity and basicity of alcohols and phenols (substituent effects on phenol acidity, alkoxide formation)",
    "difficulty_level": "Easy",
    "question_text": "Phenol is approximately one million times more acidic than cyclohexanol. What is the primary reason for this difference in acidity?",
    "question_smiles": "OC1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "The phenoxide ion is stabilized by resonance delocalization of the negative charge into the aromatic ring.",
        "smiles": "Oc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Phenol has a higher molecular weight than cyclohexanol.",
        "smiles": "Oc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The cyclohexoxide ion is destabilized by aromaticity.",
        "smiles": "[O-]C1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Phenol is a tertiary alcohol, while cyclohexanol is a secondary alcohol.",
        "smiles": "OC1CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the fundamental resonance stabilization concept in phenols vs aliphatic alcohols.",
      "process": "Step 1: Write the deprotonation equation for both compounds.\nStep 2: Cyclohexanol yields cyclohexoxide, where the negative charge is localized on a single oxygen atom.\nStep 3: Phenol yields phenoxide, where the negative charge is delocalized onto the ortho and para positions of the aromatic ring, making it much more stable and facilitating deprotonation.",
      "result": "Resonance delocalization of the negative charge in the phenoxide ion increases phenol acidity."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q16_alkoxide_basicity_sterics",
    "topic": "acidity and basicity of alcohols and phenols (substituent effects on phenol acidity, alkoxide formation)",
    "difficulty_level": "Medium",
    "question_text": "Why is potassium tert-butoxide commonly used as a non-nucleophilic base, whereas sodium ethoxide is commonly used as a nucleophile or base?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The bulkiness of the tert-butyl group hinders nucleophilic attack at a carbon atom, while leaving the basic oxygen accessible for proton removal.",
        "smiles": "CC(C)(C)[O-]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The tert-butyl group is electron-withdrawing, making the oxygen less basic but more reactive.",
        "smiles": "CC(C)(C)[O-]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Sodium ethoxide is a much stronger base than potassium tert-butoxide.",
        "smiles": "CC[O-]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Potassium tert-butoxide cannot dissolve in any organic solvents.",
        "smiles": "CC(C)(C)[O-]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the relationship between steric hindrance, basicity, and nucleophilicity in alkoxide ions.",
      "process": "Step 1: Compare the structures of ethoxide and tert-butoxide. The tert-butoxide ion has three methyl groups on the central carbon, creating significant steric bulk.\nStep 2: While both are strong bases (conjugate acid pKa ~16-18), the bulky group in tert-butoxide hinders backside attack at a carbon atom (SN2 pathway).\nStep 3: The basic oxygen can still easily abstract a small proton from the periphery of a molecule, making it an excellent base for E2 reactions while avoiding competing substitution reactions.",
      "result": "Steric hindrance of the tert-butyl group makes potassium tert-butoxide non-nucleophilic."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q17_nabh4_selectivity",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Medium",
    "question_text": "What is the primary organic product of the reaction of ethyl 4-oxopentanoate with sodium borohydride (NaBH4) in ethanol?",
    "question_smiles": "O=C(C)CCC(=O)OCC",
    "options": [
      {
        "option_id": "A",
        "text": "ethyl 4-hydroxypentanoate",
        "smiles": "CC(O)CCC(=O)OCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "5-hydroxypentanoic acid",
        "smiles": "O=C(O)CCCC(O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "pentane-1,4-diol",
        "smiles": "CC(O)CCCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "ethyl 4-hydroxypent-4-enoate",
        "smiles": "C=C(O)CCC(=O)OCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the chemoselectivity of reducing agents, specifically comparing NaBH4 and LiAlH4 reactivity with ketones and esters.",
      "process": "Step 1: Identify the functional groups in ethyl 4-oxopentanoate: a ketone and an ester.\nStep 2: Recall the reactivity of NaBH4. It is a mild reducing agent that easily reduces aldehydes and ketones but does not react with esters.\nStep 3: The ketone is selectively reduced to a secondary alcohol (yielding a hydroxyl group at C4), while the ester remains unchanged.",
      "result": "The product is ethyl 4-hydroxypentanoate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q18_lialh4_ester_reduction",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Hard",
    "question_text": "When ethyl benzoate is treated with excess lithium aluminum hydride (LiAlH4) followed by aqueous workup, what are the resulting alcohol products?",
    "question_smiles": "O=C(OCC)c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Benzyl alcohol and ethanol",
        "smiles": "OCc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzyl alcohol and methanol",
        "smiles": "OCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzaldehyde and ethanol",
        "smiles": "O=Cc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Phenol and ethanol",
        "smiles": "Oc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the mechanism and products of the reduction of esters by lithium aluminum hydride.",
      "process": "Step 1: LiAlH4 is a powerful hydride donor. Hydride attacks the carbonyl carbon of the ester (ethyl benzoate), forming a tetrahedral intermediate.\nStep 2: The intermediate collapses, ejecting the ethoxide leaving group to form benzaldehyde.\nStep 3: Benzaldehyde is further reduced by another equivalent of hydride to form benzyl alkoxide.\nStep 4: Protonation during the workup step converts benzyl alkoxide to benzyl alcohol, and ethoxide to ethanol.",
      "result": "The products are benzyl alcohol and ethanol."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q19_carboxylic_acid_reduction",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Medium",
    "question_text": "Which reagent combination will successfully reduce 4-oxocyclohexanecarboxylic acid to 4-hydroxycyclohexanemethanol?",
    "question_smiles": "O=C(O)C1CCC(=O)CC1",
    "options": [
      {
        "option_id": "A",
        "text": "1. Excess LiAlH4, THF / 2. H3O+",
        "smiles": "OCC1CCC(O)CC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1. NaBH4, EtOH / 2. H3O+",
        "smiles": "O=C(O)C1CCC(O)CC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "H2, Pd/C",
        "smiles": "O=C(O)C1CCC(=O)CC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "PCC, CH2Cl2",
        "smiles": "O=C(O)C1CCC(=O)CC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the selective reduction of carboxylic acids versus ketones.",
      "process": "Step 1: The starting material contains a ketone (C=O) and a carboxylic acid (-COOH).\nStep 2: NaBH4 reduces ketones but is not reactive enough to reduce carboxylic acids.\nStep 3: A strong reducing agent like LiAlH4 is required to reduce both functional groups: the ketone is reduced to a secondary alcohol, and the carboxylic acid is reduced to a primary alcohol (yielding 4-hydroxycyclohexanemethanol).",
      "result": "Excess LiAlH4 reduces both the ketone and carboxylic acid to alcohols."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q20_dibal_ester_reduction",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Hard",
    "question_text": "If ethyl hexanoate is treated with exactly one equivalent of diisobutylaluminum hydride (DIBAL-H) at -78 °C, followed by careful aqueous workup, what is the major organic product?",
    "question_smiles": "CCCCCC(=O)OCC",
    "options": [
      {
        "option_id": "A",
        "text": "Hexanal",
        "smiles": "CCCCCC=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Hexan-1-ol",
        "smiles": "CCCCCCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethyl hexanoate (no reaction)",
        "smiles": "CCCCCC(=O)OCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Hexane",
        "smiles": "CCCCCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the controlled reduction of esters to aldehydes using DIBAL-H at low temperature.",
      "process": "Step 1: DIBAL-H is a bulky, electrophilic reducing agent. At -78 °C, it reacts with the ester carbonyl to form a stable tetrahedral hemiacetal-like intermediate.\nStep 2: The low temperature prevents the collapse of this intermediate, meaning no aldehyde is free in solution to be further reduced.\nStep 3: During the aqueous workup, the intermediate is hydrolyzed to release the aldehyde (hexanal) and ethanol.",
      "result": "The reaction yields hexanal."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q21_dihydroxylation",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Hard",
    "question_text": "Which of the following reaction conditions converts cyclohexene into cis-cyclohexane-1,2-diol?",
    "question_smiles": "C1=CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Cold, alkaline KMnO4 or catalytic OsO4 with NMO",
        "smiles": "OC1CCCCC1O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1. mCPBA / 2. Aqueous H3O+",
        "smiles": "OC1CCCCC1O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1. O3 / 2. Zn, AcOH",
        "smiles": "O=CCCCCC=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1. BH3·THF / 2. H2O2, NaOH",
        "smiles": "OC1CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the stereochemical control of dihydroxylation reactions on alkenes to form 1,2-diols.",
      "process": "Step 1: Check the stereochemistry of the target product (cis-cyclohexane-1,2-diol). This is a syn-dihydroxylation product.\nStep 2: OsO4 (catalytic with NMO) and cold, basic KMnO4 react via a concerted cyclic intermediate to add two oxygen atoms to the same face of the double bond (syn-addition).\nStep 3: Treatment with mCPBA forms an epoxide, which undergoes acid-catalyzed nucleophilic ring opening via backside attack, yielding trans-cyclohexane-1,2-diol (anti-dihydroxylation).",
      "result": "OsO4/NMO or cold KMnO4 gives syn-addition to yield the cis-diol."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q22_hydroboration_oxidation",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Medium",
    "question_text": "What is the stereochemical outcome and regiochemical preference for the hydroboration-oxidation of 1-methylcyclopentene?",
    "question_smiles": "CC1=CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "trans-2-methylcyclopentanol via overall syn-addition of H and OH",
        "smiles": "C[C@@H]1CCC[C@@H]1O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "cis-2-methylcyclopentanol via overall anti-addition of H and OH",
        "smiles": "C[C@H]1CCC[C@@H]1O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-methylcyclopentanol via Markovnikov addition",
        "smiles": "CC1(O)CCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "trans-2-methylcyclopentanol via overall anti-addition of H and OH",
        "smiles": "C[C@@H]1CCC[C@H]1O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the regiochemistry (Markovnikov vs anti-Markovnikov) and stereochemistry (syn vs anti addition) of hydroboration-oxidation.",
      "process": "Step 1: Hydroboration of 1-methylcyclopentene proceeds with anti-Markovnikov regioselectivity, adding boron to the less substituted carbon (C2) and hydrogen to the more substituted carbon (C1).\nStep 2: The addition of BH3 occurs in a concerted, syn manner: both H and BH2 add to the same face of the alkene.\nStep 3: Oxidation replaces the carbon-boron bond with a carbon-hydroxyl (-OH) bond with retention of configuration. Thus, the H at C1 and OH at C2 are syn to each other, forcing the methyl group at C1 and the OH group at C2 to be trans.",
      "result": "The reaction produces trans-2-methylcyclopentanol."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q23_oxymercuration_demercuration",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction of 3,3-dimethylbut-1-ene with 1. Hg(OAc)2, H2O followed by 2. NaBH4?",
    "question_smiles": "CC(C)(C)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "3,3-dimethylbutan-2-ol (without rearrangement)",
        "smiles": "CC(C)(C)C(O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2,3-dimethylbutan-2-ol (with rearrangement)",
        "smiles": "CC(C)(O)C(C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3,3-dimethylbutan-1-ol (anti-Markovnikov)",
        "smiles": "CC(C)(C)CCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,3-dimethylbutan-1-ol",
        "smiles": "CC(C)C(C)CO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the difference in product distribution between oxymercuration-demercuration and acid-catalyzed hydration, specifically regarding carbocation rearrangements.",
      "process": "Step 1: Identify that oxymercuration-demercuration gives Markovnikov addition of water across the alkene.\nStep 2: The reaction proceeds via a cyclic mercurinium ion intermediate rather than a free carbocation.\nStep 3: Because no free carbocation is formed, skeleton rearrangements (such as methyl or hydride shifts) do not occur. The nucleophile (H2O) attacks the more substituted carbon of the mercurinium ring, yielding 3,3-dimethylbutan-2-ol.",
      "result": "The reaction yields 3,3-dimethylbutan-2-ol without rearrangement."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q24_luche_reduction",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Hard",
    "question_text": "Which reaction conditions are best suited to selectively reduce the ketone carbonyl group of cyclohex-2-en-1-one to cyclohex-2-en-1-ol, without reducing the carbon-carbon double bond?",
    "question_smiles": "O=C1C=CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "NaBH4 with CeCl3 (Luche reduction)",
        "smiles": "OC1C=CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "LiAlH4 in THF",
        "smiles": "OC1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "H2, Pd/C",
        "smiles": "OC1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "DIBAL-H at 0 °C",
        "smiles": "OC1C=CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the selective reduction of alpha,beta-unsaturated ketones to allylic alcohols.",
      "process": "Step 1: Normal NaBH4 or LiAlH4 reduction of alpha,beta-unsaturated ketones can result in a mixture of 1,2-reduction (yielding allylic alcohol) and 1,4-reduction (yielding saturated ketone/alcohol).\nStep 2: The Luche reduction (NaBH4 in the presence of CeCl3) uses the oxophilic Ce3+ ion to coordinate to the carbonyl oxygen, increasing its electrophilicity and favoring exclusive 1,2-addition.\nStep 3: This leaves the alkene untouched, yielding the allylic alcohol cyclohex-2-en-1-ol.",
      "result": "The Luche reduction (NaBH4/CeCl3) selectively yields the allylic alcohol."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q25_grignard_tertiary",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Medium",
    "question_text": "Which starting material and Grignard reagent combination would yield 2-phenylpropan-2-ol after acidic workup?",
    "question_smiles": "CC(O)(c1ccccc1)C",
    "options": [
      {
        "option_id": "A",
        "text": "Acetophenone and methylmagnesium bromide",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzaldehyde and methylmagnesium bromide",
        "smiles": "O=Cc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzophenone and methylmagnesium bromide",
        "smiles": "O=C(c1ccccc1)c2ccccc2",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzyl alcohol and methylmagnesium bromide",
        "smiles": "OCc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests retrosynthetic planning for tertiary alcohols via Grignard addition to ketones.",
      "process": "Step 1: Break down the target tertiary alcohol (2-phenylpropan-2-ol, Ph-C(OH)(CH3)2) into potential precursor ketones and Grignard reagents.\nStep 2: The C-O carbon is bonded to one phenyl group and two methyl groups. This implies a reaction between acetophenone (Ph-CO-CH3) and a methyl Grignard reagent (CH3MgBr), or acetone (CH3-CO-CH3) and a phenyl Grignard reagent (PhMgBr).\nStep 3: Check options: Acetophenone and methylmagnesium bromide is a listed, correct pair.",
      "result": "Acetophenone and methylmagnesium bromide react to give 2-phenylpropan-2-ol."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q26_grignard_ester",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Medium",
    "question_text": "What is the product when methyl formate is treated with excess methylmagnesium bromide (2 equivalents) followed by hydronium workup?",
    "question_smiles": "O=COC",
    "options": [
      {
        "option_id": "A",
        "text": "Propan-2-ol",
        "smiles": "CC(O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-methylpropan-2-ol",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethanol",
        "smiles": "CCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propanal",
        "smiles": "CCC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the reaction of Grignard reagents with esters, emphasizing the unique outcome when using formate esters.",
      "process": "Step 1: A Grignard reagent reacts with esters by attacking the carbonyl carbon twice. The first addition replaces the alkoxide group (-OCH3) to form an intermediate carbonyl compound.\nStep 2: For methyl formate, the carbonyl carbon has a hydrogen atom. Thus, the intermediate formed after the first addition and collapse of the tetrahedral intermediate is acetaldehyde (CH3CHO).\nStep 3: The second equivalent of methylmagnesium bromide attacks acetaldehyde to give propan-2-ol (a secondary alcohol) after protonation.",
      "result": "Formate esters react with excess Grignard reagents to yield secondary alcohols (propan-2-ol)."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q27_grignard_compatibility",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Hard",
    "question_text": "Which of the following compounds CANNOT be used to prepare a Grignard reagent directly, due to functional group incompatibility?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "4-bromocyclohexanol",
        "smiles": "OC1CCC(Br)CC1",
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
        "text": "4-bromotoluene",
        "smiles": "Cc1ccc(Br)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Bromobenzene",
        "smiles": "c1ccc(Br)cc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the limitations of Grignard reagents due to functional group incompatibility, specifically the presence of acidic protons.",
      "process": "Step 1: Grignard reagents (RMgX) are extremely strong bases and will react instantly with any acidic protons (O-H, N-H, S-H, C#C-H).\nStep 2: 4-bromocyclohexanol contains both a C-Br bond (which would react with Mg) and a hydroxyl group (-OH).\nStep 3: If magnesium is added, any Grignard reagent formed would be immediately protonated and destroyed by the hydroxyl group of another molecule.",
      "result": "4-bromocyclohexanol cannot form a Grignard reagent because its acidic OH group is incompatible."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q28_grignard_epoxide",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Medium",
    "question_text": "What is the major product obtained from the reaction of phenylmagnesium bromide with methyloxirane (propylene oxide), followed by acidic workup?",
    "question_smiles": "CC1CO1",
    "options": [
      {
        "option_id": "A",
        "text": "1-phenylpropan-2-ol",
        "smiles": "CC(O)Cc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-phenylpropan-1-ol",
        "smiles": "OCC(C)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-phenylpropan-1-ol",
        "smiles": "OCCCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-phenylpropan-1-ol",
        "smiles": "CCC(O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the regiochemical outcome of Grignard nucleophilic attack on unsymmetrical epoxides.",
      "process": "Step 1: Epoxide opening under basic or neutral conditions (such as reaction with a Grignard reagent) is driven by steric hindrance.\nStep 2: Phenylmagnesium bromide acts as a phenyl nucleophile (Ph-) and attacks the less substituted carbon of methyloxirane (the CH2 carbon, not the CH carbon).\nStep 3: This SN2-like opening yields an alkoxide intermediate at the more substituted carbon, which is protonated during workup to yield 1-phenylpropan-2-ol.",
      "result": "The nucleophile attacks the less substituted ring carbon to yield 1-phenylpropan-2-ol."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q29_grignard_co2",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Easy",
    "question_text": "When bromobenzene is treated first with magnesium in ether, then reacted with dry ice (solid carbon dioxide) followed by aqueous acid workup, what is the major organic product?",
    "question_smiles": "c1ccc(Br)cc1",
    "options": [
      {
        "option_id": "A",
        "text": "benzoic acid",
        "smiles": "O=C(O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "benzyl alcohol",
        "smiles": "OCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "benzophenone",
        "smiles": "O=C(c1ccccc1)c2ccccc2",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "phenol",
        "smiles": "Oc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the carboxylation of Grignard reagents to yield carboxylic acids.",
      "process": "Step 1: Bromobenzene reacts with Mg in ether to form phenylmagnesium bromide (PhMgBr).\nStep 2: PhMgBr nucleophilically attacks carbon dioxide (CO2) to form a benzoate salt intermediate.\nStep 3: Acidic workup protonates the carboxylate ion to yield benzoic acid.",
      "result": "The reaction sequence yields benzoic acid."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q30_retrosynthesis_grignard",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Hard",
    "question_text": "Which of the following starting materials and Grignard reagent combinations will yield 3-methylpentan-3-ol after acidic workup?",
    "question_smiles": "CCC(O)(C)CC",
    "options": [
      {
        "option_id": "A",
        "text": "Pentan-3-one and methylmagnesium bromide",
        "smiles": "CCC(=O)CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Pentan-2-one and ethylmagnesium bromide",
        "smiles": "CCCC(=O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-methylpentan-2-one and methylmagnesium bromide",
        "smiles": "CC(C)C(=O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propan-2-one and ethylmagnesium bromide",
        "smiles": "CC(=O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests retrosynthetic analysis of tertiary alcohols.",
      "process": "Step 1: Analyze the structure of 3-methylpentan-3-ol: the central carbon (C3) is bonded to an -OH group, a methyl group (-CH3), and two ethyl groups (-CH2CH3).\nStep 2: Consider the disconnections: Disconnecting one of the ethyl groups yields butan-2-one and ethylmagnesium bromide (not listed). Disconnecting the methyl group yields pentan-3-one and methylmagnesium bromide.\nStep 3: Evaluate Option A: Pentan-3-one (CH3CH2COCH2CH3) + CH3MgBr yields 3-methylpentan-3-ol after protonation.",
      "result": "Pentan-3-one and methylmagnesium bromide is the correct combination."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q31_formaldehyde_grignard",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Easy",
    "question_text": "To synthesize a primary alcohol with the addition of exactly one carbon atom, which electrophile should be reacted with a Grignard reagent?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Formaldehyde",
        "smiles": "O=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetaldehyde",
        "smiles": "CC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethylene oxide",
        "smiles": "C1CO1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Carbon dioxide",
        "smiles": "O=C=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the relationship between starting carbonyl compounds (or electrophiles) and the resulting class of alcohol (primary, secondary, tertiary) in Grignard reactions.",
      "process": "Step 1: Formaldehyde (HCHO) has two hydrogen atoms on the carbonyl carbon.\nStep 2: Nucleophilic attack by RMgX yields R-CH2-O-, which is protonated to R-CH2-OH (a primary alcohol with one more carbon than R).\nStep 3: Other aldehydes yield secondary alcohols; ketones yield tertiary alcohols; ethylene oxide yields primary alcohols with a two-carbon extension.",
      "result": "Formaldehyde is used to prepare primary alcohols with a one-carbon extension."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q32_ethylene_oxide_grignard",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Medium",
    "question_text": "A chemist wants to synthesize 2-phenylethanol starting from bromobenzene. Which sequence of reagents is correct?",
    "question_smiles": "c1ccc(Br)cc1",
    "options": [
      {
        "option_id": "A",
        "text": "1. Mg, ether / 2. Ethylene oxide / 3. H3O+",
        "smiles": "OCCc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1. Mg, ether / 2. Formaldehyde / 3. H3O+",
        "smiles": "OCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1. Mg, ether / 2. Acetaldehyde / 3. H3O+",
        "smiles": "CC(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1. HNO3, H2SO4 / 2. NaOH, heat",
        "smiles": "Oc1ccc(cc1)[N+](=O)[O-]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests chain-extension strategies via the reaction of Grignard reagents with epoxides.",
      "process": "Step 1: Convert bromobenzene to phenylmagnesium bromide using Mg in ether.\nStep 2: Phenylmagnesium bromide needs to add two carbons to form Ph-CH2-CH2-OH.\nStep 3: Reaction with ethylene oxide (oxirane) opens the ring to form a 2-phenylethoxide intermediate, which is protonated to 2-phenylethanol.",
      "result": "The correct sequence is Mg/ether, followed by ethylene oxide, then H3O+."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q33_socl2_mechanism",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Hard",
    "question_text": "What is the stereochemical outcome of the reaction of (R)-butan-2-ol with thionyl chloride (SOCl2) in the presence of pyridine?",
    "question_smiles": "CC[C@H](O)C",
    "options": [
      {
        "option_id": "A",
        "text": "Inversion of configuration, yielding (S)-2-chlorobutane",
        "smiles": "CC[C@@H](Cl)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Retention of configuration, yielding (R)-2-chlorobutane",
        "smiles": "CC[C@H](Cl)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Racemization, yielding a 1:1 mixture of (R)- and (S)-2-chlorobutane",
        "smiles": "CC(Cl)CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Elimination, yielding primarily (E)-but-2-ene",
        "smiles": "C/C=C/C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the mechanism and stereochemical outcome of converting secondary alcohols to alkyl chlorides using SOCl2 in the presence of pyridine.",
      "process": "Step 1: In the presence of pyridine, the reaction of an alcohol with SOCl2 proceeds via an SN2 mechanism. Pyridine acts as a base, deprotonating the chlorosulfite intermediate and generating free chloride ions.\nStep 2: Chloride ions then perform a backside attack on the chiral carbon, displacing the chlorosulfite leaving group.\nStep 3: Backside attack results in complete inversion of configuration, converting (R)-butan-2-ol to (S)-2-chlorobutane.",
      "result": "The reaction proceeds with inversion of configuration to give (S)-2-chlorobutane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q34_pbr3_mechanism",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Medium",
    "question_text": "What is the primary stereochemical and structural outcome when (S)-1-phenylethanol is treated with phosphorus tribromide (PBr3) at low temperature?",
    "question_smiles": "C[C@H](O)c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Inversion of configuration to yield (R)-1-bromo-1-phenylethane with no rearrangement",
        "smiles": "C[C@@H](Br)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Retention of configuration to yield (S)-1-bromo-1-phenylethane",
        "smiles": "C[C@H](Br)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Racemization to yield a mixture of enantiomers via a carbocation intermediate",
        "smiles": "CC(Br)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Elimination to yield styrene as the major product",
        "smiles": "C=Cc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the mechanism of converting secondary alcohols to alkyl bromides using PBr3.",
      "process": "Step 1: The alcohol oxygen attacks the phosphorus of PBr3, displacing a bromide ion to form a dibromophosphite leaving group.\nStep 2: The displaced bromide ion acts as a nucleophile and attacks the stereocenter carbon from the backside in a classic SN2 step.\nStep 3: This concerted backside attack results in inversion of configuration from (S) to (R) with no carbocation intermediate, preventing rearrangements.",
      "result": "The reaction proceeds via an SN2 mechanism with inversion of configuration, yielding (R)-1-bromo-1-phenylethane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q35_hx_tertiary",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Medium",
    "question_text": "When 2-methylpropan-2-ol is treated with concentrated hydrochloric acid (HCl) at room temperature, what is the major organic product and the mechanism of its formation?",
    "question_smiles": "CC(C)(C)O",
    "options": [
      {
        "option_id": "A",
        "text": "2-chloro-2-methylpropane via an SN1 mechanism",
        "smiles": "CC(C)(C)Cl",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-chloro-2-methylpropane via an SN2 mechanism",
        "smiles": "CC(C)(C)Cl",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-methylprop-1-ene via an E2 mechanism",
        "smiles": "CC(=C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-chloro-2-methylpropane via an SN2 mechanism",
        "smiles": "CC(C)CCl",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the reaction of tertiary alcohols with hydrogen halides.",
      "process": "Step 1: The tertiary alcohol is protonated by HCl to form a good leaving group (-OH2+).\nStep 2: Water leaves to form a stable tertiary carbocation (tert-butyl cation) in the rate-determining step (SN1 pathway).\nStep 3: Chloride ion rapidly attacks the carbocation to yield 2-chloro-2-methylpropane.",
      "result": "The reaction yields 2-chloro-2-methylpropane via an SN1 mechanism."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q36_lucas_test",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Easy",
    "question_text": "The Lucas reagent (ZnCl2 in concentrated HCl) is used to distinguish between primary, secondary, and tertiary alcohols. Which alcohol will react fastest, resulting in immediate turbidity?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "2-methylpropan-2-ol",
        "smiles": "CC(C)(C)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "butan-2-ol",
        "smiles": "CCC(O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "butan-1-ol",
        "smiles": "CCCCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "ethanol",
        "smiles": "CCO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the mechanism and utility of the Lucas test for identifying alcohol types.",
      "process": "Step 1: The Lucas test operates via an SN1 mechanism where ZnCl2 coordinates to the hydroxyl group, making it an excellent leaving group.\nStep 2: The rate of reaction depends on carbocation stability: tertiary > secondary > primary.\nStep 3: Tertiary alcohols (like 2-methylpropan-2-ol) form stable tertiary carbocations immediately, leading to the rapid formation of insoluble alkyl chlorides that cloud the solution.",
      "result": "2-methylpropan-2-ol reacts fastest due to tertiary carbocation stability."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q37_hx_rearrangement",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product of the reaction of 3-methylbutan-2-ol with concentrated hydrobromic acid (HBr)?",
    "question_smiles": "CC(C)C(O)C",
    "options": [
      {
        "option_id": "A",
        "text": "2-bromo-2-methylbutane",
        "smiles": "CCC(C)(C)Br",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-bromo-3-methylbutane",
        "smiles": "CC(C)C(Br)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-bromo-3-methylbutane",
        "smiles": "CC(C)CCBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-methylbut-2-ene",
        "smiles": "C/C=C(\\C)/C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests carbocation rearrangements (specifically hydride shifts) during the reaction of secondary alcohols with HX.",
      "process": "Step 1: Protonation of 3-methylbutan-2-ol followed by loss of water yields a secondary carbocation at C2: (CH3)2CH-C+H-CH3.\nStep 2: A 1,2-hydride shift occurs from the tertiary carbon (C3) to the secondary carbocation carbon (C2) to form a more stable tertiary carbocation: (CH3)2C+-CH2-CH3.\nStep 3: Bromide ion attacks the tertiary carbocation, yielding the rearranged product 2-bromo-2-methylbutane.",
      "result": "The major product is 2-bromo-2-methylbutane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q38_tosylate_stereochem",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Hard",
    "question_text": "An alcohol undergoes two sequential steps: 1. Treatment with p-toluenesulfonyl chloride (TsCl) in pyridine. 2. Treatment with sodium cyanide (NaCN) in DMSO. What is the stereochemical configuration of the final product starting from (S)-butan-2-ol?",
    "question_smiles": "CC[C@H](O)C",
    "options": [
      {
        "option_id": "A",
        "text": "(R)-2-methylbutanenitrile, because step 1 occurs with retention of configuration, and step 2 occurs with inversion of configuration.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(S)-2-methylbutanenitrile, because both steps occur with retention of configuration.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(S)-2-methylbutanenitrile, because step 1 occurs with inversion and step 2 occurs with retention of configuration.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A racemic mixture, because step 1 involves a planar carbocation intermediate.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the stereochemical pathways of tosylate formation followed by nucleophilic substitution.",
      "process": "Step 1: Tosylate formation (Step 1) occurs by nucleophilic attack of the alcohol oxygen on the sulfur atom of TsCl, breaking the O-H bond but leaving the C-O stereocenter carbon untouched. This step occurs with complete retention of configuration.\nStep 2: The resulting alkyl tosylate is a highly reactive substrate with a good leaving group. Nucleophilic substitution with cyanide (Step 2) occurs via an SN2 mechanism.\nStep 3: Backside attack of the cyanide ion on the stereocenter carbon results in complete inversion of configuration, giving (R)-2-methylbutanenitrile.",
      "result": "(R)-2-methylbutanenitrile is formed due to retention in tosylation and inversion in SN2 substitution."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q39_dehydration_e1",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the acid-catalyzed dehydration of 2-methylpentan-3-ol using concentrated sulfuric acid and heat?",
    "question_smiles": "CCCC(O)C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "2-methylpent-2-ene",
        "smiles": "CC/C=C(\\C)/C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-methylpent-2-ene",
        "smiles": "C/C=C/C(C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-methylpent-1-ene",
        "smiles": "CCCC(=C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-methylpent-2-ene",
        "smiles": "CC/C(C)=C/C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests carbocation rearrangement and Zaitsev's rule during the E1 acid-catalyzed dehydration of alcohols.",
      "process": "Step 1: Protonation of 2-methylpentan-3-ol followed by loss of water yields a secondary carbocation at C3.\nStep 2: A 1,2-hydride shift occurs from C2 (which has a tertiary carbon hydrogen) to C3, converting the secondary carbocation into a more stable tertiary carbocation at C2.\nStep 3: Deprotonation follows Zaitsev's rule, removing a proton from C3 to yield the most substituted and stable alkene: 2-methylpent-2-ene (trisubstituted).",
      "result": "The major product is 2-methylpent-2-ene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q40_pinacol_rearrangement",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product when 2,3-dimethylbutane-2,3-diol (pinacol) is treated with warm aqueous sulfuric acid?",
    "question_smiles": "CC(C)(O)C(O)(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "3,3-dimethylbutan-2-one (pinacolone)",
        "smiles": "CC(=O)C(C)(C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2,3-dimethylbuta-1,3-diene",
        "smiles": "C=C(C)C(=C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,3-dimethylbut-2-ene",
        "smiles": "CC(C)=C(C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-methylpentan-2-one",
        "smiles": "CCC(C)C(=O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the Pinacol Rearrangement mechanism of 1,2-diols under acidic conditions.",
      "process": "Step 1: One of the tertiary hydroxyl groups is protonated and leaves as water, generating a tertiary carbocation.\nStep 2: A 1,2-methyl shift occurs from the adjacent carbon to the carbocation center. This shift is driven by the formation of a highly stable resonance-stabilized oxocarbocation (protonated ketone).\nStep 3: Loss of the proton from the oxygen yields the ketone product, 3,3-dimethylbutan-2-one (pinacolone).",
      "result": "The product of the pinacol rearrangement is 3,3-dimethylbutan-2-one."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q41_pocl3_dehydration",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Hard",
    "question_text": "What is the major alkene product when 3,3-dimethylbutan-2-ol is treated with phosphorus oxychloride (POCl3) in pyridine at 0 °C?",
    "question_smiles": "CC(C)(C)C(O)C",
    "options": [
      {
        "option_id": "A",
        "text": "3,3-dimethylbut-1-ene",
        "smiles": "CC(C)(C)C=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2,3-dimethylbut-2-ene",
        "smiles": "CC(C)=C(C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,3-dimethylbut-1-ene",
        "smiles": "CC(C)C(=C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3,3-dimethylbutan-2-yl phosphate",
        "smiles": "CC(C)(C)C(OP(=O)(O)O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the utility and E2 mechanism of POCl3/pyridine dehydration, contrasting it with acid-catalyzed E1 dehydration which involves carbocation rearrangements.",
      "process": "Step 1: The alcohol oxygen attacks the phosphorus of POCl3, displacing chloride to form a dichlorophosphate group (-O-POCl2), which is an exceptionally good leaving group.\nStep 2: Pyridine acts as a base and abstracts a beta-proton in a concerted E2 elimination.\nStep 3: Because the elimination occurs in a single concerted step, no carbocation intermediate is formed, preventing methyl shifts. This yields the unrearranged alkene 3,3-dimethylbut-1-ene.",
      "result": "Dehydration with POCl3/pyridine occurs via E2 and yields the unrearranged product 3,3-dimethylbut-1-ene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q42_jones_oxidation",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction of hexan-1-ol with chromic acid (CrO3 in aqueous H2SO4, Jones reagent)?",
    "question_smiles": "CCCCCCO",
    "options": [
      {
        "option_id": "A",
        "text": "hexanoic acid",
        "smiles": "CCCCCC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "hexanal",
        "smiles": "CCCCCC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "hexyl hexanoate",
        "smiles": "CCCCCC(=O)OCCCCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "hexane",
        "smiles": "CCCCCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the oxidation of primary alcohols with strong aqueous oxidizing agents.",
      "process": "Step 1: Jones reagent (chromic acid in water) oxidizes primary alcohols to aldehydes.\nStep 2: Because water is present in the reaction mixture, the aldehyde exists in equilibrium with its hydrate (gem-diol).\nStep 3: The hydrate is rapidly oxidized by the chromic acid to form the carboxylic acid (hexanoic acid).",
      "result": "The primary alcohol is oxidized to hexanoic acid."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q43_pcc_dmp_oxidation",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Medium",
    "question_text": "Which reagent will selectively oxidize hexan-1-ol to hexanal without further oxidation to the carboxylic acid?",
    "question_smiles": "CCCCCCO",
    "options": [
      {
        "option_id": "A",
        "text": "Pyridinium chlorochromate (PCC) in anhydrous dichloromethane (CH2Cl2)",
        "smiles": "CCCCCC=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Chromic acid (CrO3/H2SO4)",
        "smiles": "CCCCCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Potassium permanganate (KMnO4)",
        "smiles": "CCCCCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Sodium dichromate (Na2Cr2O7) in aqueous H2SO4",
        "smiles": "CCCCCC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the selective oxidation of primary alcohols to aldehydes using anhydrous reagents.",
      "process": "Step 1: Primary alcohols are oxidized to aldehydes, which can undergo further oxidation to carboxylic acids if water is present.\nStep 2: To prevent further oxidation, an anhydrous chromium reagent like PCC or a hypervalent iodine reagent like DMP in an anhydrous solvent (CH2Cl2) must be used.\nStep 3: Lacking water, the aldehyde cannot form a hydrate (gem-diol), halting the oxidation at the aldehyde stage.",
      "result": "PCC in anhydrous CH2Cl2 selectively yields hexanal."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q44_dmp_advantages",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Medium",
    "question_text": "What is a primary practical advantage of using Dess-Martin Periodinane (DMP) over PCC for the oxidation of sensitive primary alcohols to aldehydes?",
    "question_smiles": "CC(C)CCO",
    "options": [
      {
        "option_id": "A",
        "text": "DMP reactions are run under milder, non-acidic conditions, avoiding acid-catalyzed side reactions.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "DMP is a chromium-based reagent that is highly toxic but highly efficient.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "DMP can oxidize tertiary alcohols to ketones.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "DMP does not require any organic solvents and is performed in water.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the differences between different mild oxidizing agents, focusing on reaction conditions and functional group compatibility.",
      "process": "Step 1: PCC contains pyridinium chloride, which is acidic. Acidic conditions can cause sensitive functional groups (like acetals or silyl ethers) to undergo hydrolysis or rearrangement.\nStep 2: Dess-Martin Periodinane (DMP) is a hypervalent iodine reagent that operates under neutral conditions at room temperature.\nStep 3: This makes DMP ideal for complex syntheses with acid-sensitive substrates, and it avoids toxic chromium waste.",
      "result": "DMP offers mild, non-acidic reaction conditions for alcohol oxidation."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q45_secondary_alcohol_oxidation",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Easy",
    "question_text": "What is the product when cyclohexanol is treated with sodium dichromate (Na2Cr2O7) in aqueous sulfuric acid?",
    "question_smiles": "OC1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "cyclohexanone",
        "smiles": "O=C1CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "adipic acid",
        "smiles": "O=C(O)CCCCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "cyclohexene",
        "smiles": "C1=CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "cyclohexyl acetate",
        "smiles": "CC(=O)OC1CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the oxidation of secondary alcohols.",
      "process": "Step 1: Identify that secondary alcohols have only one hydrogen on the carbon bearing the hydroxyl group.\nStep 2: Oxidation of secondary alcohols leads to ketones.\nStep 3: Unlike primary alcohols, ketones cannot undergo further oxidation under normal conditions because they lack a carbonyl hydrogen. Thus, cyclohexanol is oxidized to cyclohexanone.",
      "result": "The secondary alcohol is oxidized to cyclohexanone."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q46_swern_oxidation",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Hard",
    "question_text": "The Swern oxidation converts alcohols to aldehydes or ketones using dimethyl sulfoxide (DMSO) and oxalyl chloride, followed by the addition of triethylamine. Which volatile, foul-smelling byproduct is formed in this reaction?",
    "question_smiles": "CC(O)CCC",
    "options": [
      {
        "option_id": "A",
        "text": "dimethyl sulfide (DMS)",
        "smiles": "CSC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "sulfur dioxide",
        "smiles": "O=S=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "carbon monoxide",
        "smiles": "[C-]#[O+]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "formaldehyde",
        "smiles": "C=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the mechanism and byproduct profile of the Swern oxidation.",
      "process": "Step 1: DMSO and oxalyl chloride react to form the active dimethylchlorosulfonium chloride intermediate.\nStep 2: The alcohol attacks the sulfonium ion, displacing chloride to form an alkoxysulfonium salt.\nStep 3: Addition of triethylamine deprotonates the sulfur-bound methyl group, generating a sulfur ylide. This ylide undergoes an intramolecular elimination to yield the carbonyl product and dimethyl sulfide (DMS, (CH3)2S) as the volatile, foul-smelling byproduct.",
      "result": "Dimethyl sulfide (DMS) is the characteristic byproduct of a Swern oxidation."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q47_phenol_oxidation_quinone",
    "topic": "chemistry of phenols (preparation, oxidation to quinones, Kolbe-Schmitt reaction, Claisen rearrangement)",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product when phenol is oxidized using Fremy's salt or chromic acid?",
    "question_smiles": "Oc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "p-benzoquinone (1,4-benzoquinone)",
        "smiles": "O=C1C=CC(=O)C=C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "catechol (benzene-1,2-diol)",
        "smiles": "Oc1ccccc1O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "salicylic acid",
        "smiles": "O=C(O)c1ccccc1O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "cyclohexanone",
        "smiles": "O=C1CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the oxidation chemistry of phenols, which differs significantly from that of aliphatic alcohols.",
      "process": "Step 1: Note that phenols are much more easily oxidized than alcohols due to the highly electron-rich aromatic ring.\nStep 2: Strong oxidants or radicals like Fremy's salt [potassium nitrosodisulfonate, (KSO3)2NO] or chromic acid oxidize phenol to 1,4-benzoquinone (p-benzoquinone).\nStep 3: This oxidation proceeds via a phenoxy radical intermediate and involves addition of oxygen at the para position followed by oxidation to the diketone system.",
      "result": "The oxidation of phenol yields p-benzoquinone."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q48_silyl_ether_protection",
    "topic": "protecting groups for alcohols (silyl ethers like TMS)",
    "difficulty_level": "Medium",
    "question_text": "A chemist wants to perform a Grignard addition on an ester that also contains a primary alcohol group. Which protecting group strategy is most appropriate?",
    "question_smiles": "CC(=O)CCCCO",
    "options": [
      {
        "option_id": "A",
        "text": "Protect the alcohol as a trimethylsilyl (TMS) ether using TMSCl and triethylamine, run the Grignard reaction, and deprotect using tetrabutylammonium fluoride (TBAF).",
        "smiles": "CC(=O)CCCCO[Si](C)(C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Protect the alcohol as a benzyl ether using benzyl chloride and NaOH, run the Grignard reaction, and deprotect using LiAlH4.",
        "smiles": "CC(=O)CCCCOCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Protect the alcohol as a tosylate using TsCl in pyridine, run the Grignard reaction, and deprotect using H3O+.",
        "smiles": "CC(=O)CCCCOS(=O)(=O)c1ccc(C)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Protect the alcohol as a methyl ether using methyl iodide and Ag2O, run the Grignard reaction, and deprotect using TBAF.",
        "smiles": "CC(=O)CCCCOC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the use of protecting groups for alcohols, specifically silyl ethers, during Grignard reactions.",
      "process": "Step 1: Alcohols contain acidic protons that react with Grignard reagents, destroying them. They must be protected.\nStep 2: Silyl ethers (like TMS or TBS ethers) are stable to basic reagents (like Grignard reagents) and nucleophiles.\nStep 3: Silyl ethers are easily removed afterwards using fluoride ions (TBAF) due to the extremely high affinity of fluorine for silicon (Si-F bond energy ~ 560 kJ/mol), which allows mild, selective deprotection without affecting other groups.",
      "result": "The TMS ether protection/TBAF deprotection sequence is standard for protecting alcohols during Grignard reactions."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q49_kolbe_schmitt",
    "topic": "chemistry of phenols (preparation, oxidation to quinones, Kolbe-Schmitt reaction, Claisen rearrangement)",
    "difficulty_level": "Hard",
    "question_text": "In the Kolbe-Schmitt reaction, sodium phenoxide is heated under pressure with carbon dioxide, followed by acidic workup. What is the major organic product?",
    "question_smiles": "Oc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "salicylic acid (2-hydroxybenzoic acid)",
        "smiles": "O=C(O)c1ccccc1O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "aspirin (acetylsalicylic acid)",
        "smiles": "CC(=O)Oc1ccccc1C(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "catechol (benzene-1,2-diol)",
        "smiles": "Oc1ccccc1O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "phenoxyacetic acid",
        "smiles": "O=C(O)COc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the Kolbe-Schmitt reaction, which is a key industrial reaction of phenols.",
      "process": "Step 1: Sodium phenoxide is an electron-rich aromatic nucleophile.\nStep 2: Carbon dioxide acts as a weak electrophile. Sodium coordinates both the phenoxide oxygen and the carbon dioxide, directing electrophilic aromatic substitution to the ortho position.\nStep 3: Tautomerization restores aromaticity, and acidic workup yields salicylic acid (2-hydroxybenzoic acid).",
      "result": "The major product is salicylic acid."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q50_claisen_rearrangement",
    "topic": "chemistry of phenols (preparation, oxidation to quinones, Kolbe-Schmitt reaction, Claisen rearrangement)",
    "difficulty_level": "Hard",
    "question_text": "What is the mechanism and major organic product when allyl phenyl ether is heated to 200 °C?",
    "question_smiles": "C=CCOc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "A [3,3]-sigmatropic rearrangement to yield o-allylphenol after tautomerization",
        "smiles": "C=CCc1ccccc1O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A [1,3]-sigmatropic rearrangement to yield p-allylphenol",
        "smiles": "C=CCc1ccc(O)cc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Homolytic cleavage to yield phenol and propene",
        "smiles": "Oc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Nucleophilic substitution to yield phenol and allyl alcohol",
        "smiles": "Oc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the Claisen rearrangement of allyl aryl ethers.",
      "process": "Step 1: Heating allyl phenyl ether initiates a concerted pericyclic [3,3]-sigmatropic rearrangement.\nStep 2: The migration of the allyl group to the ortho position of the benzene ring forms a non-aromatic cyclohexadienone intermediate.\nStep 3: This intermediate rapidly tautomerizes (keto-enol tautomerism) to restore aromaticity, yielding o-allylphenol.",
      "result": "The Claisen rearrangement proceeds via a [3,3]-sigmatropic mechanism to yield o-allylphenol."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q_dynamic_alcohol_oxidation",
    "topic": "Alcohols: Oxidation Reactions",
    "difficulty_level": "Medium",
    "question_text": "Predict the correct products of the following alcohol oxidation reactions.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCCO.O=C=[Cr](=O)(O)O",
        "correctAnswer": "CCC(=O)O (Primary alcohol + Chromic acid)"
      },
      {
        "smiles": "CCCO.C1=CC=C[NH+]=C1.Cl[Cr](=O)(=O)[O-]",
        "correctAnswer": "CCC=O (Primary alcohol + PCC)"
      },
      {
        "smiles": "CC(O)C.O=C=[Cr](=O)(O)O",
        "correctAnswer": "CC(C)=O (Secondary alcohol + Chromic acid)"
      },
      {
        "smiles": "CC(C)(O)C.O=C=[Cr](=O)(O)O",
        "correctAnswer": "No Reaction (Tertiary alcohol)"
      }
    ],
    "match_options": [
      "CCC(=O)O (Primary alcohol + Chromic acid)",
      "CCC=O (Primary alcohol + PCC)",
      "CC(C)=O (Secondary alcohol + Chromic acid)",
      "No Reaction (Tertiary alcohol)"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect oxidation products",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing oxidation levels of primary, secondary, and tertiary alcohols.",
      "process": "Primary alcohols oxidize to carboxylic acids with strong oxidizers (Chromic acid) and aldehydes with mild ones (PCC). Secondary alcohols oxidize to ketones. Tertiary alcohols have no alpha-hydrogens and do not oxidize.",
      "result": "Oxidation products mapped."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q3",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CC=C",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CC(O)C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(=O)C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2O, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propyne, B: acetone, C: acetaldehyde",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: propane, B: 1-propanol, C: propanoic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: propene, B: 1-propanol, C: propanal",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: propene, B: 2-propanol, C: acetone",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: propene, B: 2-propanol, C: acetone.",
      "result": "The labels correspond to A: propene, B: 2-propanol, C: acetone."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q38",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "Brc1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(O)(c1ccccc1)C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2, FeBr3"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1) Mg, ether\n2) Acetone\n3) H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: bromobenzene, C: acetophenone",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: toluene, B: bromobenzene, C: benzoic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: benzene, B: chlorobenzene, C: benzyl alcohol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol.",
      "result": "The labels correspond to A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  }
];
