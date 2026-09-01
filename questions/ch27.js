// OChemStudyBuddy - McMurry Chapter 27
// Author: A. Elangovan, PhD
var CH27_QUESTIONS = [
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
        "smiles": "CCCCC/C=C\\C/C=C\\CCCCCCCC(=O)O",
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
      "process": "Saturated fatty acids (like palmitic acid) pack tightly: high melting point (63°C). Polyunsaturated fatty acids (like linoleic acid) have cis-kinks preventing packing: liquid at room temp.",
      "result": "Lipid properties mapped."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q1",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Analyze the terpene molecule Limonene. Apply the isoprene rule to identify how many isoprene units make up its skeleton and determine its classification.",
    "question_smiles": "CC1=CCC(CC1)C(=C)C",
    "options": [
      {
        "option_id": "A",
        "text": "2 units, classifying it as a monoterpene (10 carbons).",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1 units, classifying it as a sesquiterpene.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3 units, classifying it as a diterpene.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4 units, classifying it as a polyterpene.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Applying the isoprene rule to classify terpenes.",
      "process": "Step 1: Skeletons of terpenes are built from isoprene (2-methyl-1,3-butadiene, C5) units connected in a head-to-tail fashion.\\nStep 2: Divide the total carbon count of Limonene by 5 to find the number of units: it has 2 isoprene units.\\nStep 3: Terpenes with 10 carbons (2 units) are monoterpenes, while 30 carbons (6 units) are triterpenes.",
      "result": "Limonene is composed of 2 isoprene units."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q2",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Determine the products formed when glyceryl tristearate is heated in the presence of aqueous sodium hydroxide (saponification).",
    "question_smiles": "O=C(CCCCCCCCCCCCCCCCC)OCC(OC(=O)CCCCCCCCCCCCCCCCC)COC(=O)CCCCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Ethyl stearate and glycerol",
        "smiles": "CCOC(=O)CC(O)C.OCC(O)CO",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Adipic acid and sodium propanoate",
        "smiles": "OC(=O)CCCCC(=O)O.CCC(=O)O[Na]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Stearic acid and sodium hydroxide",
        "smiles": "CCCCCCCCCCCCCCCCCC(=O)O.[Na+].[OH-]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Glycerol and sodium stearate (soap)",
        "smiles": "OCC(O)CO.[Na+].[O-]C(=O)CCCCCCCCCCCCCCCCC",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Understanding saponification of triacylglycerols.",
      "process": "Step 1: Saponification is the base-catalyzed ester hydrolysis of a triacylglycerol.\\nStep 2: Hydrolysis of the three ester linkages yields glycerol (1,2,3-propanetriol) and three fatty acid carboxylate salts.\\nStep 3: Since the starting fat is glyceryl tristearate, the fatty acid salt obtained is sodium stearate.",
      "result": "Hydrolysis yields glycerol and sodium stearate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q3",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Describe the core structural skeleton common to all steroids (such as cholesterol, testosterone, and estradiol).",
    "question_smiles": "CC(C)CCCC(C)C1CCC2C1(CCC3C2CC=C4C3(CCC(C4)O)C)C",
    "options": [
      {
        "option_id": "A",
        "text": "Four cyclohexane rings fused linearly in a row.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A fused tricyclic ring system containing three cyclohexane rings.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A macrocyclic ring of 17 carbon atoms containing various heteroatoms.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A fused tetracyclic ring system consisting of three cyclohexane rings and one cyclopentane ring.",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Analyzing steroid core structures.",
      "process": "Step 1: All steroids contain the cyclopentanoperhydrophenanthrene ring system.\\nStep 2: This consists of three 6-membered rings (A, B, and C) and one 5-membered ring (D) fused together.\\nStep 3: This tetracyclic carbon skeleton contains 17 carbons in total before substituents are added.",
      "result": "The steroid skeleton consists of three 6-membered rings and one 5-membered ring."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q4",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Identify the lipid class of the structure shown below, which features a glycerol backbone, two fatty acid esters, and a phosphate group esterified to choline.",
    "question_smiles": "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)([O-])OCC[N+](C)(C)C)OC(=O)CCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Phosphoglyceride (lecithin), which forms lipid bilayers due to its amphipathic nature.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Sphingomyelin, which contains an ester-linked glycerol backbone.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Prostaglandin, which acts as a hydrophobic signalling lipid.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Triacylglycerol, which forms micelles to store energy in adipose tissue.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identifying phospholipid classes and amphipathic properties.",
      "process": "Step 1: The structure shows a glycerol backbone esterified to palmitate and stearate tails at C1 and C2, and a phosphocholine polar head group at C3.\\nStep 2: This makes it a phosphoglyceride (phosphatidylcholine, or lecithin).\\nStep 3: These lipids are amphipathic, containing both polar heads and nonpolar tails, which drives bilayer self-assembly in membranes.",
      "result": "The structure is a phosphoglyceride, key to cell membranes."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q5",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Between stearic acid (C18:0) and oleic acid (cis-C18:1), which fatty acid has a lower melting point, and why?",
    "question_smiles": "CCCCCCCCCCCCCCCCCC(=O)O.CCCCCCCCC/C=C\\CCCCCCCC(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "Oleic acid, because the cis double bond introduces a rigid bend that prevents efficient packing.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Stearic acid, because saturated chains pack less efficiently than unsaturated ones.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Oleic acid, because it has a higher molecular weight than stearic acid.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Stearic acid, because the trans double bond increases packing density.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Comparing melting points of saturated vs. unsaturated fatty acids.",
      "process": "Step 1: Stearic acid is a saturated fatty acid with a straight-chain hydrocarbon tail. Oleic acid is monounsaturated with a cis double bond.\\nStep 2: The cis double bond introduces a kink/bend in the carbon chain.\\nStep 3: This kink prevents the molecules from packing closely together in a crystalline lattice, lowering van der Waals interactions and resulting in a lower melting point.",
      "result": "Oleic acid has a lower melting point due to the cis-kink preventing close packing."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q6",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Analyze the terpene molecule Menthol. Apply the isoprene rule to identify how many isoprene units make up its skeleton and determine its classification.",
    "question_smiles": "CC1CCC(C(C1)O)C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "1 units, classifying it as a sesquiterpene.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "3 units, classifying it as a diterpene.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4 units, classifying it as a polyterpene.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2 units, classifying it as a monoterpene (10 carbons).",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Applying the isoprene rule to classify terpenes.",
      "process": "Step 1: Skeletons of terpenes are built from isoprene (2-methyl-1,3-butadiene, C5) units connected in a head-to-tail fashion.\\nStep 2: Divide the total carbon count of Menthol by 5 to find the number of units: it has 2 isoprene units.\\nStep 3: Terpenes with 10 carbons (2 units) are monoterpenes, while 30 carbons (6 units) are triterpenes.",
      "result": "Menthol is composed of 2 isoprene units."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q7",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Determine the products formed when glyceryl tristearate is heated in the presence of aqueous sodium hydroxide (saponification).",
    "question_smiles": "O=C(CCCCCCCCCCCCCCCCC)OCC(OC(=O)CCCCCCCCCCCCCCCCC)COC(=O)CCCCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Glycerol and sodium stearate (soap)",
        "smiles": "OCC(O)CO.[Na+].[O-]C(=O)CCCCCCCCCCCCCCCCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Stearic acid and sodium hydroxide",
        "smiles": "CCCCCCCCCCCCCCCCCC(=O)O.[Na+].[OH-]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Adipic acid and sodium propanoate",
        "smiles": "OC(=O)CCCCC(=O)O.CCC(=O)O[Na]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl stearate and glycerol",
        "smiles": "CCOC(=O)CC(O)C.OCC(O)CO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding saponification of triacylglycerols.",
      "process": "Step 1: Saponification is the base-catalyzed ester hydrolysis of a triacylglycerol.\\nStep 2: Hydrolysis of the three ester linkages yields glycerol (1,2,3-propanetriol) and three fatty acid carboxylate salts.\\nStep 3: Since the starting fat is glyceryl tristearate, the fatty acid salt obtained is sodium stearate.",
      "result": "Hydrolysis yields glycerol and sodium stearate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q8",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Describe the core structural skeleton common to all steroids (such as cholesterol, testosterone, and estradiol).",
    "question_smiles": "CC(C)CCCC(C)C1CCC2C1(CCC3C2CC=C4C3(CCC(C4)O)C)C",
    "options": [
      {
        "option_id": "A",
        "text": "A macrocyclic ring of 17 carbon atoms containing various heteroatoms.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Four cyclohexane rings fused linearly in a row.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A fused tetracyclic ring system consisting of three cyclohexane rings and one cyclopentane ring.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A fused tricyclic ring system containing three cyclohexane rings.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing steroid core structures.",
      "process": "Step 1: All steroids contain the cyclopentanoperhydrophenanthrene ring system.\\nStep 2: This consists of three 6-membered rings (A, B, and C) and one 5-membered ring (D) fused together.\\nStep 3: This tetracyclic carbon skeleton contains 17 carbons in total before substituents are added.",
      "result": "The steroid skeleton consists of three 6-membered rings and one 5-membered ring."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q9",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Identify the lipid class of the structure shown below, which features a glycerol backbone, two fatty acid esters, and a phosphate group esterified to choline.",
    "question_smiles": "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)([O-])OCC[N+](C)(C)C)OC(=O)CCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Triacylglycerol, which forms micelles to store energy in adipose tissue.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Phosphoglyceride (lecithin), which forms lipid bilayers due to its amphipathic nature.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Prostaglandin, which acts as a hydrophobic signalling lipid.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Sphingomyelin, which contains an ester-linked glycerol backbone.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identifying phospholipid classes and amphipathic properties.",
      "process": "Step 1: The structure shows a glycerol backbone esterified to palmitate and stearate tails at C1 and C2, and a phosphocholine polar head group at C3.\\nStep 2: This makes it a phosphoglyceride (phosphatidylcholine, or lecithin).\\nStep 3: These lipids are amphipathic, containing both polar heads and nonpolar tails, which drives bilayer self-assembly in membranes.",
      "result": "The structure is a phosphoglyceride, key to cell membranes."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q10",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Between stearic acid (C18:0) and oleic acid (cis-C18:1), which fatty acid has a lower melting point, and why?",
    "question_smiles": "CCCCCCCCCCCCCCCCCC(=O)O.CCCCCCCCC/C=C\\CCCCCCCC(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "Oleic acid, because the cis double bond introduces a rigid bend that prevents efficient packing.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Oleic acid, because it has a higher molecular weight than stearic acid.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Stearic acid, because the trans double bond increases packing density.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Stearic acid, because saturated chains pack less efficiently than unsaturated ones.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Comparing melting points of saturated vs. unsaturated fatty acids.",
      "process": "Step 1: Stearic acid is a saturated fatty acid with a straight-chain hydrocarbon tail. Oleic acid is monounsaturated with a cis double bond.\\nStep 2: The cis double bond introduces a kink/bend in the carbon chain.\\nStep 3: This kink prevents the molecules from packing closely together in a crystalline lattice, lowering van der Waals interactions and resulting in a lower melting point.",
      "result": "Oleic acid has a lower melting point due to the cis-kink preventing close packing."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q11",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Analyze the terpene molecule Squalene. Apply the isoprene rule to identify how many isoprene units make up its skeleton and determine its classification.",
    "question_smiles": "CC(C)=CCCC(C)=CCCC(C)=CCCC=C(C)CCC=C(C)CCC=C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "12 units, classifying it as a polyterpene.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "6 units, classifying it as a triterpene (30 carbons).",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "5 units, classifying it as a sesquiterpene.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "7 units, classifying it as a diterpene.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Applying the isoprene rule to classify terpenes.",
      "process": "Step 1: Skeletons of terpenes are built from isoprene (2-methyl-1,3-butadiene, C5) units connected in a head-to-tail fashion.\\nStep 2: Divide the total carbon count of Squalene by 5 to find the number of units: it has 6 isoprene units.\\nStep 3: Terpenes with 10 carbons (2 units) are monoterpenes, while 30 carbons (6 units) are triterpenes.",
      "result": "Squalene is composed of 6 isoprene units."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q12",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Determine the products formed when glyceryl tristearate is heated in the presence of aqueous sodium hydroxide (saponification).",
    "question_smiles": "O=C(CCCCCCCCCCCCCCCCC)OCC(OC(=O)CCCCCCCCCCCCCCCCC)COC(=O)CCCCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Adipic acid and sodium propanoate",
        "smiles": "OC(=O)CCCCC(=O)O.CCC(=O)O[Na]",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Stearic acid and sodium hydroxide",
        "smiles": "CCCCCCCCCCCCCCCCCC(=O)O.[Na+].[OH-]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethyl stearate and glycerol",
        "smiles": "CCOC(=O)CC(O)C.OCC(O)CO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Glycerol and sodium stearate (soap)",
        "smiles": "OCC(O)CO.[Na+].[O-]C(=O)CCCCCCCCCCCCCCCCC",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Understanding saponification of triacylglycerols.",
      "process": "Step 1: Saponification is the base-catalyzed ester hydrolysis of a triacylglycerol.\\nStep 2: Hydrolysis of the three ester linkages yields glycerol (1,2,3-propanetriol) and three fatty acid carboxylate salts.\\nStep 3: Since the starting fat is glyceryl tristearate, the fatty acid salt obtained is sodium stearate.",
      "result": "Hydrolysis yields glycerol and sodium stearate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q13",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Describe the core structural skeleton common to all steroids (such as cholesterol, testosterone, and estradiol).",
    "question_smiles": "CC(C)CCCC(C)C1CCC2C1(CCC3C2CC=C4C3(CCC(C4)O)C)C",
    "options": [
      {
        "option_id": "A",
        "text": "A fused tetracyclic ring system consisting of three cyclohexane rings and one cyclopentane ring.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A macrocyclic ring of 17 carbon atoms containing various heteroatoms.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Four cyclohexane rings fused linearly in a row.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A fused tricyclic ring system containing three cyclohexane rings.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing steroid core structures.",
      "process": "Step 1: All steroids contain the cyclopentanoperhydrophenanthrene ring system.\\nStep 2: This consists of three 6-membered rings (A, B, and C) and one 5-membered ring (D) fused together.\\nStep 3: This tetracyclic carbon skeleton contains 17 carbons in total before substituents are added.",
      "result": "The steroid skeleton consists of three 6-membered rings and one 5-membered ring."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q14",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Identify the lipid class of the structure shown below, which features a glycerol backbone, two fatty acid esters, and a phosphate group esterified to choline.",
    "question_smiles": "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)([O-])OCC[N+](C)(C)C)OC(=O)CCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Sphingomyelin, which contains an ester-linked glycerol backbone.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Prostaglandin, which acts as a hydrophobic signalling lipid.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Phosphoglyceride (lecithin), which forms lipid bilayers due to its amphipathic nature.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Triacylglycerol, which forms micelles to store energy in adipose tissue.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identifying phospholipid classes and amphipathic properties.",
      "process": "Step 1: The structure shows a glycerol backbone esterified to palmitate and stearate tails at C1 and C2, and a phosphocholine polar head group at C3.\\nStep 2: This makes it a phosphoglyceride (phosphatidylcholine, or lecithin).\\nStep 3: These lipids are amphipathic, containing both polar heads and nonpolar tails, which drives bilayer self-assembly in membranes.",
      "result": "The structure is a phosphoglyceride, key to cell membranes."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q15",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Between stearic acid (C18:0) and oleic acid (cis-C18:1), which fatty acid has a lower melting point, and why?",
    "question_smiles": "CCCCCCCCCCCCCCCCCC(=O)O.CCCCCCCCC/C=C\\CCCCCCCC(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "Oleic acid, because the cis double bond introduces a rigid bend that prevents efficient packing.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Stearic acid, because the trans double bond increases packing density.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Oleic acid, because it has a higher molecular weight than stearic acid.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Stearic acid, because saturated chains pack less efficiently than unsaturated ones.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Comparing melting points of saturated vs. unsaturated fatty acids.",
      "process": "Step 1: Stearic acid is a saturated fatty acid with a straight-chain hydrocarbon tail. Oleic acid is monounsaturated with a cis double bond.\\nStep 2: The cis double bond introduces a kink/bend in the carbon chain.\\nStep 3: This kink prevents the molecules from packing closely together in a crystalline lattice, lowering van der Waals interactions and resulting in a lower melting point.",
      "result": "Oleic acid has a lower melting point due to the cis-kink preventing close packing."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q16",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Analyze the terpene molecule Limonene. Apply the isoprene rule to identify how many isoprene units make up its skeleton and determine its classification.",
    "question_smiles": "CC1=CCC(CC1)C(=C)C",
    "options": [
      {
        "option_id": "A",
        "text": "3 units, classifying it as a diterpene.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "2 units, classifying it as a monoterpene (10 carbons).",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "4 units, classifying it as a polyterpene.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1 units, classifying it as a sesquiterpene.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Applying the isoprene rule to classify terpenes.",
      "process": "Step 1: Skeletons of terpenes are built from isoprene (2-methyl-1,3-butadiene, C5) units connected in a head-to-tail fashion.\\nStep 2: Divide the total carbon count of Limonene by 5 to find the number of units: it has 2 isoprene units.\\nStep 3: Terpenes with 10 carbons (2 units) are monoterpenes, while 30 carbons (6 units) are triterpenes.",
      "result": "Limonene is composed of 2 isoprene units."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q17",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Determine the products formed when glyceryl tristearate is heated in the presence of aqueous sodium hydroxide (saponification).",
    "question_smiles": "O=C(CCCCCCCCCCCCCCCCC)OCC(OC(=O)CCCCCCCCCCCCCCCCC)COC(=O)CCCCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Stearic acid and sodium hydroxide",
        "smiles": "CCCCCCCCCCCCCCCCCC(=O)O.[Na+].[OH-]",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Glycerol and sodium stearate (soap)",
        "smiles": "OCC(O)CO.[Na+].[O-]C(=O)CCCCCCCCCCCCCCCCC",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Adipic acid and sodium propanoate",
        "smiles": "OC(=O)CCCCC(=O)O.CCC(=O)O[Na]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl stearate and glycerol",
        "smiles": "CCOC(=O)CC(O)C.OCC(O)CO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding saponification of triacylglycerols.",
      "process": "Step 1: Saponification is the base-catalyzed ester hydrolysis of a triacylglycerol.\\nStep 2: Hydrolysis of the three ester linkages yields glycerol (1,2,3-propanetriol) and three fatty acid carboxylate salts.\\nStep 3: Since the starting fat is glyceryl tristearate, the fatty acid salt obtained is sodium stearate.",
      "result": "Hydrolysis yields glycerol and sodium stearate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q18",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Describe the core structural skeleton common to all steroids (such as cholesterol, testosterone, and estradiol).",
    "question_smiles": "CC(C)CCCC(C)C1CCC2C1(CCC3C2CC=C4C3(CCC(C4)O)C)C",
    "options": [
      {
        "option_id": "A",
        "text": "A macrocyclic ring of 17 carbon atoms containing various heteroatoms.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A fused tricyclic ring system containing three cyclohexane rings.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Four cyclohexane rings fused linearly in a row.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A fused tetracyclic ring system consisting of three cyclohexane rings and one cyclopentane ring.",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Analyzing steroid core structures.",
      "process": "Step 1: All steroids contain the cyclopentanoperhydrophenanthrene ring system.\\nStep 2: This consists of three 6-membered rings (A, B, and C) and one 5-membered ring (D) fused together.\\nStep 3: This tetracyclic carbon skeleton contains 17 carbons in total before substituents are added.",
      "result": "The steroid skeleton consists of three 6-membered rings and one 5-membered ring."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q19",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Identify the lipid class of the structure shown below, which features a glycerol backbone, two fatty acid esters, and a phosphate group esterified to choline.",
    "question_smiles": "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)([O-])OCC[N+](C)(C)C)OC(=O)CCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Prostaglandin, which acts as a hydrophobic signalling lipid.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Triacylglycerol, which forms micelles to store energy in adipose tissue.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Sphingomyelin, which contains an ester-linked glycerol backbone.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Phosphoglyceride (lecithin), which forms lipid bilayers due to its amphipathic nature.",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Identifying phospholipid classes and amphipathic properties.",
      "process": "Step 1: The structure shows a glycerol backbone esterified to palmitate and stearate tails at C1 and C2, and a phosphocholine polar head group at C3.\\nStep 2: This makes it a phosphoglyceride (phosphatidylcholine, or lecithin).\\nStep 3: These lipids are amphipathic, containing both polar heads and nonpolar tails, which drives bilayer self-assembly in membranes.",
      "result": "The structure is a phosphoglyceride, key to cell membranes."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q20",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Between stearic acid (C18:0) and oleic acid (cis-C18:1), which fatty acid has a lower melting point, and why?",
    "question_smiles": "CCCCCCCCCCCCCCCCCC(=O)O.CCCCCCCCC/C=C\\CCCCCCCC(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "Stearic acid, because the trans double bond increases packing density.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Oleic acid, because the cis double bond introduces a rigid bend that prevents efficient packing.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Stearic acid, because saturated chains pack less efficiently than unsaturated ones.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Oleic acid, because it has a higher molecular weight than stearic acid.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Comparing melting points of saturated vs. unsaturated fatty acids.",
      "process": "Step 1: Stearic acid is a saturated fatty acid with a straight-chain hydrocarbon tail. Oleic acid is monounsaturated with a cis double bond.\\nStep 2: The cis double bond introduces a kink/bend in the carbon chain.\\nStep 3: This kink prevents the molecules from packing closely together in a crystalline lattice, lowering van der Waals interactions and resulting in a lower melting point.",
      "result": "Oleic acid has a lower melting point due to the cis-kink preventing close packing."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q21",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Analyze the terpene molecule Menthol. Apply the isoprene rule to identify how many isoprene units make up its skeleton and determine its classification.",
    "question_smiles": "CC1CCC(C(C1)O)C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "2 units, classifying it as a monoterpene (10 carbons).",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1 units, classifying it as a sesquiterpene.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3 units, classifying it as a diterpene.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4 units, classifying it as a polyterpene.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Applying the isoprene rule to classify terpenes.",
      "process": "Step 1: Skeletons of terpenes are built from isoprene (2-methyl-1,3-butadiene, C5) units connected in a head-to-tail fashion.\\nStep 2: Divide the total carbon count of Menthol by 5 to find the number of units: it has 2 isoprene units.\\nStep 3: Terpenes with 10 carbons (2 units) are monoterpenes, while 30 carbons (6 units) are triterpenes.",
      "result": "Menthol is composed of 2 isoprene units."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q22",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Determine the products formed when glyceryl tristearate is heated in the presence of aqueous sodium hydroxide (saponification).",
    "question_smiles": "O=C(CCCCCCCCCCCCCCCCC)OCC(OC(=O)CCCCCCCCCCCCCCCCC)COC(=O)CCCCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Adipic acid and sodium propanoate",
        "smiles": "OC(=O)CCCCC(=O)O.CCC(=O)O[Na]",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Glycerol and sodium stearate (soap)",
        "smiles": "OCC(O)CO.[Na+].[O-]C(=O)CCCCCCCCCCCCCCCCC",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Ethyl stearate and glycerol",
        "smiles": "CCOC(=O)CC(O)C.OCC(O)CO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Stearic acid and sodium hydroxide",
        "smiles": "CCCCCCCCCCCCCCCCCC(=O)O.[Na+].[OH-]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding saponification of triacylglycerols.",
      "process": "Step 1: Saponification is the base-catalyzed ester hydrolysis of a triacylglycerol.\\nStep 2: Hydrolysis of the three ester linkages yields glycerol (1,2,3-propanetriol) and three fatty acid carboxylate salts.\\nStep 3: Since the starting fat is glyceryl tristearate, the fatty acid salt obtained is sodium stearate.",
      "result": "Hydrolysis yields glycerol and sodium stearate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q23",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Describe the core structural skeleton common to all steroids (such as cholesterol, testosterone, and estradiol).",
    "question_smiles": "CC(C)CCCC(C)C1CCC2C1(CCC3C2CC=C4C3(CCC(C4)O)C)C",
    "options": [
      {
        "option_id": "A",
        "text": "A macrocyclic ring of 17 carbon atoms containing various heteroatoms.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Four cyclohexane rings fused linearly in a row.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A fused tricyclic ring system containing three cyclohexane rings.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A fused tetracyclic ring system consisting of three cyclohexane rings and one cyclopentane ring.",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Analyzing steroid core structures.",
      "process": "Step 1: All steroids contain the cyclopentanoperhydrophenanthrene ring system.\\nStep 2: This consists of three 6-membered rings (A, B, and C) and one 5-membered ring (D) fused together.\\nStep 3: This tetracyclic carbon skeleton contains 17 carbons in total before substituents are added.",
      "result": "The steroid skeleton consists of three 6-membered rings and one 5-membered ring."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q24",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Identify the lipid class of the structure shown below, which features a glycerol backbone, two fatty acid esters, and a phosphate group esterified to choline.",
    "question_smiles": "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)([O-])OCC[N+](C)(C)C)OC(=O)CCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Phosphoglyceride (lecithin), which forms lipid bilayers due to its amphipathic nature.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Sphingomyelin, which contains an ester-linked glycerol backbone.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Triacylglycerol, which forms micelles to store energy in adipose tissue.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Prostaglandin, which acts as a hydrophobic signalling lipid.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identifying phospholipid classes and amphipathic properties.",
      "process": "Step 1: The structure shows a glycerol backbone esterified to palmitate and stearate tails at C1 and C2, and a phosphocholine polar head group at C3.\\nStep 2: This makes it a phosphoglyceride (phosphatidylcholine, or lecithin).\\nStep 3: These lipids are amphipathic, containing both polar heads and nonpolar tails, which drives bilayer self-assembly in membranes.",
      "result": "The structure is a phosphoglyceride, key to cell membranes."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q25",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Between stearic acid (C18:0) and oleic acid (cis-C18:1), which fatty acid has a lower melting point, and why?",
    "question_smiles": "CCCCCCCCCCCCCCCCCC(=O)O.CCCCCCCCC/C=C\\CCCCCCCC(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "Stearic acid, because saturated chains pack less efficiently than unsaturated ones.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Stearic acid, because the trans double bond increases packing density.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Oleic acid, because it has a higher molecular weight than stearic acid.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Oleic acid, because the cis double bond introduces a rigid bend that prevents efficient packing.",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Comparing melting points of saturated vs. unsaturated fatty acids.",
      "process": "Step 1: Stearic acid is a saturated fatty acid with a straight-chain hydrocarbon tail. Oleic acid is monounsaturated with a cis double bond.\\nStep 2: The cis double bond introduces a kink/bend in the carbon chain.\\nStep 3: This kink prevents the molecules from packing closely together in a crystalline lattice, lowering van der Waals interactions and resulting in a lower melting point.",
      "result": "Oleic acid has a lower melting point due to the cis-kink preventing close packing."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q26",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Analyze the terpene molecule Squalene. Apply the isoprene rule to identify how many isoprene units make up its skeleton and determine its classification.",
    "question_smiles": "CC(C)=CCCC(C)=CCCC(C)=CCCC=C(C)CCC=C(C)CCC=C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "5 units, classifying it as a sesquiterpene.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "7 units, classifying it as a diterpene.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "12 units, classifying it as a polyterpene.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "6 units, classifying it as a triterpene (30 carbons).",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Applying the isoprene rule to classify terpenes.",
      "process": "Step 1: Skeletons of terpenes are built from isoprene (2-methyl-1,3-butadiene, C5) units connected in a head-to-tail fashion.\\nStep 2: Divide the total carbon count of Squalene by 5 to find the number of units: it has 6 isoprene units.\\nStep 3: Terpenes with 10 carbons (2 units) are monoterpenes, while 30 carbons (6 units) are triterpenes.",
      "result": "Squalene is composed of 6 isoprene units."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q27",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Determine the products formed when glyceryl tristearate is heated in the presence of aqueous sodium hydroxide (saponification).",
    "question_smiles": "O=C(CCCCCCCCCCCCCCCCC)OCC(OC(=O)CCCCCCCCCCCCCCCCC)COC(=O)CCCCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Ethyl stearate and glycerol",
        "smiles": "CCOC(=O)CC(O)C.OCC(O)CO",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Glycerol and sodium stearate (soap)",
        "smiles": "OCC(O)CO.[Na+].[O-]C(=O)CCCCCCCCCCCCCCCCC",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Stearic acid and sodium hydroxide",
        "smiles": "CCCCCCCCCCCCCCCCCC(=O)O.[Na+].[OH-]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Adipic acid and sodium propanoate",
        "smiles": "OC(=O)CCCCC(=O)O.CCC(=O)O[Na]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding saponification of triacylglycerols.",
      "process": "Step 1: Saponification is the base-catalyzed ester hydrolysis of a triacylglycerol.\\nStep 2: Hydrolysis of the three ester linkages yields glycerol (1,2,3-propanetriol) and three fatty acid carboxylate salts.\\nStep 3: Since the starting fat is glyceryl tristearate, the fatty acid salt obtained is sodium stearate.",
      "result": "Hydrolysis yields glycerol and sodium stearate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q28",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Describe the core structural skeleton common to all steroids (such as cholesterol, testosterone, and estradiol).",
    "question_smiles": "CC(C)CCCC(C)C1CCC2C1(CCC3C2CC=C4C3(CCC(C4)O)C)C",
    "options": [
      {
        "option_id": "A",
        "text": "A macrocyclic ring of 17 carbon atoms containing various heteroatoms.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A fused tetracyclic ring system consisting of three cyclohexane rings and one cyclopentane ring.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A fused tricyclic ring system containing three cyclohexane rings.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Four cyclohexane rings fused linearly in a row.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing steroid core structures.",
      "process": "Step 1: All steroids contain the cyclopentanoperhydrophenanthrene ring system.\\nStep 2: This consists of three 6-membered rings (A, B, and C) and one 5-membered ring (D) fused together.\\nStep 3: This tetracyclic carbon skeleton contains 17 carbons in total before substituents are added.",
      "result": "The steroid skeleton consists of three 6-membered rings and one 5-membered ring."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q29",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Identify the lipid class of the structure shown below, which features a glycerol backbone, two fatty acid esters, and a phosphate group esterified to choline.",
    "question_smiles": "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)([O-])OCC[N+](C)(C)C)OC(=O)CCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Phosphoglyceride (lecithin), which forms lipid bilayers due to its amphipathic nature.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Triacylglycerol, which forms micelles to store energy in adipose tissue.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Sphingomyelin, which contains an ester-linked glycerol backbone.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Prostaglandin, which acts as a hydrophobic signalling lipid.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identifying phospholipid classes and amphipathic properties.",
      "process": "Step 1: The structure shows a glycerol backbone esterified to palmitate and stearate tails at C1 and C2, and a phosphocholine polar head group at C3.\\nStep 2: This makes it a phosphoglyceride (phosphatidylcholine, or lecithin).\\nStep 3: These lipids are amphipathic, containing both polar heads and nonpolar tails, which drives bilayer self-assembly in membranes.",
      "result": "The structure is a phosphoglyceride, key to cell membranes."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q30",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Between stearic acid (C18:0) and oleic acid (cis-C18:1), which fatty acid has a lower melting point, and why?",
    "question_smiles": "CCCCCCCCCCCCCCCCCC(=O)O.CCCCCCCCC/C=C\\CCCCCCCC(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "Stearic acid, because saturated chains pack less efficiently than unsaturated ones.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Oleic acid, because the cis double bond introduces a rigid bend that prevents efficient packing.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Stearic acid, because the trans double bond increases packing density.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Oleic acid, because it has a higher molecular weight than stearic acid.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Comparing melting points of saturated vs. unsaturated fatty acids.",
      "process": "Step 1: Stearic acid is a saturated fatty acid with a straight-chain hydrocarbon tail. Oleic acid is monounsaturated with a cis double bond.\\nStep 2: The cis double bond introduces a kink/bend in the carbon chain.\\nStep 3: This kink prevents the molecules from packing closely together in a crystalline lattice, lowering van der Waals interactions and resulting in a lower melting point.",
      "result": "Oleic acid has a lower melting point due to the cis-kink preventing close packing."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q31",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Analyze the terpene molecule Limonene. Apply the isoprene rule to identify how many isoprene units make up its skeleton and determine its classification.",
    "question_smiles": "CC1=CCC(CC1)C(=C)C",
    "options": [
      {
        "option_id": "A",
        "text": "3 units, classifying it as a diterpene.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "1 units, classifying it as a sesquiterpene.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4 units, classifying it as a polyterpene.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2 units, classifying it as a monoterpene (10 carbons).",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Applying the isoprene rule to classify terpenes.",
      "process": "Step 1: Skeletons of terpenes are built from isoprene (2-methyl-1,3-butadiene, C5) units connected in a head-to-tail fashion.\\nStep 2: Divide the total carbon count of Limonene by 5 to find the number of units: it has 2 isoprene units.\\nStep 3: Terpenes with 10 carbons (2 units) are monoterpenes, while 30 carbons (6 units) are triterpenes.",
      "result": "Limonene is composed of 2 isoprene units."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q33",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Describe the core structural skeleton common to all steroids (such as cholesterol, testosterone, and estradiol).",
    "question_smiles": "CC(C)CCCC(C)C1CCC2C1(CCC3C2CC=C4C3(CCC(C4)O)C)C",
    "options": [
      {
        "option_id": "A",
        "text": "A fused tetracyclic ring system consisting of three cyclohexane rings and one cyclopentane ring.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Four cyclohexane rings fused linearly in a row.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A fused tricyclic ring system containing three cyclohexane rings.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A macrocyclic ring of 17 carbon atoms containing various heteroatoms.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing steroid core structures.",
      "process": "Step 1: All steroids contain the cyclopentanoperhydrophenanthrene ring system.\\nStep 2: This consists of three 6-membered rings (A, B, and C) and one 5-membered ring (D) fused together.\\nStep 3: This tetracyclic carbon skeleton contains 17 carbons in total before substituents are added.",
      "result": "The steroid skeleton consists of three 6-membered rings and one 5-membered ring."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q34",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Identify the lipid class of the structure shown below, which features a glycerol backbone, two fatty acid esters, and a phosphate group esterified to choline.",
    "question_smiles": "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)([O-])OCC[N+](C)(C)C)OC(=O)CCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Sphingomyelin, which contains an ester-linked glycerol backbone.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Phosphoglyceride (lecithin), which forms lipid bilayers due to its amphipathic nature.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Prostaglandin, which acts as a hydrophobic signalling lipid.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Triacylglycerol, which forms micelles to store energy in adipose tissue.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identifying phospholipid classes and amphipathic properties.",
      "process": "Step 1: The structure shows a glycerol backbone esterified to palmitate and stearate tails at C1 and C2, and a phosphocholine polar head group at C3.\\nStep 2: This makes it a phosphoglyceride (phosphatidylcholine, or lecithin).\\nStep 3: These lipids are amphipathic, containing both polar heads and nonpolar tails, which drives bilayer self-assembly in membranes.",
      "result": "The structure is a phosphoglyceride, key to cell membranes."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q36",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Analyze the terpene molecule Menthol. Apply the isoprene rule to identify how many isoprene units make up its skeleton and determine its classification.",
    "question_smiles": "CC1CCC(C(C1)O)C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "3 units, classifying it as a diterpene.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "4 units, classifying it as a polyterpene.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1 units, classifying it as a sesquiterpene.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2 units, classifying it as a monoterpene (10 carbons).",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Applying the isoprene rule to classify terpenes.",
      "process": "Step 1: Skeletons of terpenes are built from isoprene (2-methyl-1,3-butadiene, C5) units connected in a head-to-tail fashion.\\nStep 2: Divide the total carbon count of Menthol by 5 to find the number of units: it has 2 isoprene units.\\nStep 3: Terpenes with 10 carbons (2 units) are monoterpenes, while 30 carbons (6 units) are triterpenes.",
      "result": "Menthol is composed of 2 isoprene units."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q37",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Determine the products formed when glyceryl tristearate is heated in the presence of aqueous sodium hydroxide (saponification).",
    "question_smiles": "O=C(CCCCCCCCCCCCCCCCC)OCC(OC(=O)CCCCCCCCCCCCCCCCC)COC(=O)CCCCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Stearic acid and sodium hydroxide",
        "smiles": "CCCCCCCCCCCCCCCCCC(=O)O.[Na+].[OH-]",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Glycerol and sodium stearate (soap)",
        "smiles": "OCC(O)CO.[Na+].[O-]C(=O)CCCCCCCCCCCCCCCCC",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Ethyl stearate and glycerol",
        "smiles": "CCOC(=O)CC(O)C.OCC(O)CO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Adipic acid and sodium propanoate",
        "smiles": "OC(=O)CCCCC(=O)O.CCC(=O)O[Na]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding saponification of triacylglycerols.",
      "process": "Step 1: Saponification is the base-catalyzed ester hydrolysis of a triacylglycerol.\\nStep 2: Hydrolysis of the three ester linkages yields glycerol (1,2,3-propanetriol) and three fatty acid carboxylate salts.\\nStep 3: Since the starting fat is glyceryl tristearate, the fatty acid salt obtained is sodium stearate.",
      "result": "Hydrolysis yields glycerol and sodium stearate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q38",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Describe the core structural skeleton common to all steroids (such as cholesterol, testosterone, and estradiol).",
    "question_smiles": "CC(C)CCCC(C)C1CCC2C1(CCC3C2CC=C4C3(CCC(C4)O)C)C",
    "options": [
      {
        "option_id": "A",
        "text": "Four cyclohexane rings fused linearly in a row.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A fused tricyclic ring system containing three cyclohexane rings.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A fused tetracyclic ring system consisting of three cyclohexane rings and one cyclopentane ring.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A macrocyclic ring of 17 carbon atoms containing various heteroatoms.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing steroid core structures.",
      "process": "Step 1: All steroids contain the cyclopentanoperhydrophenanthrene ring system.\\nStep 2: This consists of three 6-membered rings (A, B, and C) and one 5-membered ring (D) fused together.\\nStep 3: This tetracyclic carbon skeleton contains 17 carbons in total before substituents are added.",
      "result": "The steroid skeleton consists of three 6-membered rings and one 5-membered ring."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q40",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Between stearic acid (C18:0) and oleic acid (cis-C18:1), which fatty acid has a lower melting point, and why?",
    "question_smiles": "CCCCCCCCCCCCCCCCCC(=O)O.CCCCCCCCC/C=C\\CCCCCCCC(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "Stearic acid, because saturated chains pack less efficiently than unsaturated ones.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Oleic acid, because it has a higher molecular weight than stearic acid.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Stearic acid, because the trans double bond increases packing density.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Oleic acid, because the cis double bond introduces a rigid bend that prevents efficient packing.",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Comparing melting points of saturated vs. unsaturated fatty acids.",
      "process": "Step 1: Stearic acid is a saturated fatty acid with a straight-chain hydrocarbon tail. Oleic acid is monounsaturated with a cis double bond.\\nStep 2: The cis double bond introduces a kink/bend in the carbon chain.\\nStep 3: This kink prevents the molecules from packing closely together in a crystalline lattice, lowering van der Waals interactions and resulting in a lower melting point.",
      "result": "Oleic acid has a lower melting point due to the cis-kink preventing close packing."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q41",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Analyze the terpene molecule Squalene. Apply the isoprene rule to identify how many isoprene units make up its skeleton and determine its classification.",
    "question_smiles": "CC(C)=CCCC(C)=CCCC(C)=CCCC=C(C)CCC=C(C)CCC=C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "12 units, classifying it as a polyterpene.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "7 units, classifying it as a diterpene.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5 units, classifying it as a sesquiterpene.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "6 units, classifying it as a triterpene (30 carbons).",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Applying the isoprene rule to classify terpenes.",
      "process": "Step 1: Skeletons of terpenes are built from isoprene (2-methyl-1,3-butadiene, C5) units connected in a head-to-tail fashion.\\nStep 2: Divide the total carbon count of Squalene by 5 to find the number of units: it has 6 isoprene units.\\nStep 3: Terpenes with 10 carbons (2 units) are monoterpenes, while 30 carbons (6 units) are triterpenes.",
      "result": "Squalene is composed of 6 isoprene units."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q44",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Identify the lipid class of the structure shown below, which features a glycerol backbone, two fatty acid esters, and a phosphate group esterified to choline.",
    "question_smiles": "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)([O-])OCC[N+](C)(C)C)OC(=O)CCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Prostaglandin, which acts as a hydrophobic signalling lipid.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Sphingomyelin, which contains an ester-linked glycerol backbone.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Phosphoglyceride (lecithin), which forms lipid bilayers due to its amphipathic nature.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Triacylglycerol, which forms micelles to store energy in adipose tissue.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identifying phospholipid classes and amphipathic properties.",
      "process": "Step 1: The structure shows a glycerol backbone esterified to palmitate and stearate tails at C1 and C2, and a phosphocholine polar head group at C3.\\nStep 2: This makes it a phosphoglyceride (phosphatidylcholine, or lecithin).\\nStep 3: These lipids are amphipathic, containing both polar heads and nonpolar tails, which drives bilayer self-assembly in membranes.",
      "result": "The structure is a phosphoglyceride, key to cell membranes."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q45",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Between stearic acid (C18:0) and oleic acid (cis-C18:1), which fatty acid has a lower melting point, and why?",
    "question_smiles": "CCCCCCCCCCCCCCCCCC(=O)O.CCCCCCCCC/C=C\\CCCCCCCC(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "Oleic acid, because it has a higher molecular weight than stearic acid.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Stearic acid, because the trans double bond increases packing density.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Oleic acid, because the cis double bond introduces a rigid bend that prevents efficient packing.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Stearic acid, because saturated chains pack less efficiently than unsaturated ones.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Comparing melting points of saturated vs. unsaturated fatty acids.",
      "process": "Step 1: Stearic acid is a saturated fatty acid with a straight-chain hydrocarbon tail. Oleic acid is monounsaturated with a cis double bond.\\nStep 2: The cis double bond introduces a kink/bend in the carbon chain.\\nStep 3: This kink prevents the molecules from packing closely together in a crystalline lattice, lowering van der Waals interactions and resulting in a lower melting point.",
      "result": "Oleic acid has a lower melting point due to the cis-kink preventing close packing."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q46",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Analyze the terpene molecule Limonene. Apply the isoprene rule to identify how many isoprene units make up its skeleton and determine its classification.",
    "question_smiles": "CC1=CCC(CC1)C(=C)C",
    "options": [
      {
        "option_id": "A",
        "text": "2 units, classifying it as a monoterpene (10 carbons).",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1 units, classifying it as a sesquiterpene.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4 units, classifying it as a polyterpene.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3 units, classifying it as a diterpene.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Applying the isoprene rule to classify terpenes.",
      "process": "Step 1: Skeletons of terpenes are built from isoprene (2-methyl-1,3-butadiene, C5) units connected in a head-to-tail fashion.\\nStep 2: Divide the total carbon count of Limonene by 5 to find the number of units: it has 2 isoprene units.\\nStep 3: Terpenes with 10 carbons (2 units) are monoterpenes, while 30 carbons (6 units) are triterpenes.",
      "result": "Limonene is composed of 2 isoprene units."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q47",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Determine the products formed when glyceryl tristearate is heated in the presence of aqueous sodium hydroxide (saponification).",
    "question_smiles": "O=C(CCCCCCCCCCCCCCCCC)OCC(OC(=O)CCCCCCCCCCCCCCCCC)COC(=O)CCCCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Adipic acid and sodium propanoate",
        "smiles": "OC(=O)CCCCC(=O)O.CCC(=O)O[Na]",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Glycerol and sodium stearate (soap)",
        "smiles": "OCC(O)CO.[Na+].[O-]C(=O)CCCCCCCCCCCCCCCCC",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Stearic acid and sodium hydroxide",
        "smiles": "CCCCCCCCCCCCCCCCCC(=O)O.[Na+].[OH-]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl stearate and glycerol",
        "smiles": "CCOC(=O)CC(O)C.OCC(O)CO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding saponification of triacylglycerols.",
      "process": "Step 1: Saponification is the base-catalyzed ester hydrolysis of a triacylglycerol.\\nStep 2: Hydrolysis of the three ester linkages yields glycerol (1,2,3-propanetriol) and three fatty acid carboxylate salts.\\nStep 3: Since the starting fat is glyceryl tristearate, the fatty acid salt obtained is sodium stearate.",
      "result": "Hydrolysis yields glycerol and sodium stearate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q48",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Describe the core structural skeleton common to all steroids (such as cholesterol, testosterone, and estradiol).",
    "question_smiles": "CC(C)CCCC(C)C1CCC2C1(CCC3C2CC=C4C3(CCC(C4)O)C)C",
    "options": [
      {
        "option_id": "A",
        "text": "A fused tricyclic ring system containing three cyclohexane rings.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A fused tetracyclic ring system consisting of three cyclohexane rings and one cyclopentane ring.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Four cyclohexane rings fused linearly in a row.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A macrocyclic ring of 17 carbon atoms containing various heteroatoms.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing steroid core structures.",
      "process": "Step 1: All steroids contain the cyclopentanoperhydrophenanthrene ring system.\\nStep 2: This consists of three 6-membered rings (A, B, and C) and one 5-membered ring (D) fused together.\\nStep 3: This tetracyclic carbon skeleton contains 17 carbons in total before substituents are added.",
      "result": "The steroid skeleton consists of three 6-membered rings and one 5-membered ring."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q49",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Identify the lipid class of the structure shown below, which features a glycerol backbone, two fatty acid esters, and a phosphate group esterified to choline.",
    "question_smiles": "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)([O-])OCC[N+](C)(C)C)OC(=O)CCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Triacylglycerol, which forms micelles to store energy in adipose tissue.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Prostaglandin, which acts as a hydrophobic signalling lipid.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Sphingomyelin, which contains an ester-linked glycerol backbone.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Phosphoglyceride (lecithin), which forms lipid bilayers due to its amphipathic nature.",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Identifying phospholipid classes and amphipathic properties.",
      "process": "Step 1: The structure shows a glycerol backbone esterified to palmitate and stearate tails at C1 and C2, and a phosphocholine polar head group at C3.\\nStep 2: This makes it a phosphoglyceride (phosphatidylcholine, or lecithin).\\nStep 3: These lipids are amphipathic, containing both polar heads and nonpolar tails, which drives bilayer self-assembly in membranes.",
      "result": "The structure is a phosphoglyceride, key to cell membranes."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q51",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Analyze the terpene molecule Menthol. Apply the isoprene rule to identify how many isoprene units make up its skeleton and determine its classification.",
    "question_smiles": "CC1CCC(C(C1)O)C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "1 units, classifying it as a sesquiterpene.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "3 units, classifying it as a diterpene.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2 units, classifying it as a monoterpene (10 carbons).",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "4 units, classifying it as a polyterpene.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Applying the isoprene rule to classify terpenes.",
      "process": "Step 1: Skeletons of terpenes are built from isoprene (2-methyl-1,3-butadiene, C5) units connected in a head-to-tail fashion.\\nStep 2: Divide the total carbon count of Menthol by 5 to find the number of units: it has 2 isoprene units.\\nStep 3: Terpenes with 10 carbons (2 units) are monoterpenes, while 30 carbons (6 units) are triterpenes.",
      "result": "Menthol is composed of 2 isoprene units."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q52",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Determine the products formed when glyceryl tristearate is heated in the presence of aqueous sodium hydroxide (saponification).",
    "question_smiles": "O=C(CCCCCCCCCCCCCCCCC)OCC(OC(=O)CCCCCCCCCCCCCCCCC)COC(=O)CCCCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Stearic acid and sodium hydroxide",
        "smiles": "CCCCCCCCCCCCCCCCCC(=O)O.[Na+].[OH-]",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Ethyl stearate and glycerol",
        "smiles": "CCOC(=O)CC(O)C.OCC(O)CO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Adipic acid and sodium propanoate",
        "smiles": "OC(=O)CCCCC(=O)O.CCC(=O)O[Na]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Glycerol and sodium stearate (soap)",
        "smiles": "OCC(O)CO.[Na+].[O-]C(=O)CCCCCCCCCCCCCCCCC",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Understanding saponification of triacylglycerols.",
      "process": "Step 1: Saponification is the base-catalyzed ester hydrolysis of a triacylglycerol.\\nStep 2: Hydrolysis of the three ester linkages yields glycerol (1,2,3-propanetriol) and three fatty acid carboxylate salts.\\nStep 3: Since the starting fat is glyceryl tristearate, the fatty acid salt obtained is sodium stearate.",
      "result": "Hydrolysis yields glycerol and sodium stearate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q53",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Describe the core structural skeleton common to all steroids (such as cholesterol, testosterone, and estradiol).",
    "question_smiles": "CC(C)CCCC(C)C1CCC2C1(CCC3C2CC=C4C3(CCC(C4)O)C)C",
    "options": [
      {
        "option_id": "A",
        "text": "A fused tetracyclic ring system consisting of three cyclohexane rings and one cyclopentane ring.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A macrocyclic ring of 17 carbon atoms containing various heteroatoms.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A fused tricyclic ring system containing three cyclohexane rings.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Four cyclohexane rings fused linearly in a row.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing steroid core structures.",
      "process": "Step 1: All steroids contain the cyclopentanoperhydrophenanthrene ring system.\\nStep 2: This consists of three 6-membered rings (A, B, and C) and one 5-membered ring (D) fused together.\\nStep 3: This tetracyclic carbon skeleton contains 17 carbons in total before substituents are added.",
      "result": "The steroid skeleton consists of three 6-membered rings and one 5-membered ring."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q54",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Identify the lipid class of the structure shown below, which features a glycerol backbone, two fatty acid esters, and a phosphate group esterified to choline.",
    "question_smiles": "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)([O-])OCC[N+](C)(C)C)OC(=O)CCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Triacylglycerol, which forms micelles to store energy in adipose tissue.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Sphingomyelin, which contains an ester-linked glycerol backbone.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Phosphoglyceride (lecithin), which forms lipid bilayers due to its amphipathic nature.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Prostaglandin, which acts as a hydrophobic signalling lipid.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identifying phospholipid classes and amphipathic properties.",
      "process": "Step 1: The structure shows a glycerol backbone esterified to palmitate and stearate tails at C1 and C2, and a phosphocholine polar head group at C3.\\nStep 2: This makes it a phosphoglyceride (phosphatidylcholine, or lecithin).\\nStep 3: These lipids are amphipathic, containing both polar heads and nonpolar tails, which drives bilayer self-assembly in membranes.",
      "result": "The structure is a phosphoglyceride, key to cell membranes."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q56",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Analyze the terpene molecule Squalene. Apply the isoprene rule to identify how many isoprene units make up its skeleton and determine its classification.",
    "question_smiles": "CC(C)=CCCC(C)=CCCC(C)=CCCC=C(C)CCC=C(C)CCC=C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "5 units, classifying it as a sesquiterpene.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "12 units, classifying it as a polyterpene.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "6 units, classifying it as a triterpene (30 carbons).",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "7 units, classifying it as a diterpene.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Applying the isoprene rule to classify terpenes.",
      "process": "Step 1: Skeletons of terpenes are built from isoprene (2-methyl-1,3-butadiene, C5) units connected in a head-to-tail fashion.\\nStep 2: Divide the total carbon count of Squalene by 5 to find the number of units: it has 6 isoprene units.\\nStep 3: Terpenes with 10 carbons (2 units) are monoterpenes, while 30 carbons (6 units) are triterpenes.",
      "result": "Squalene is composed of 6 isoprene units."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q61",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Analyze the terpene molecule Limonene. Apply the isoprene rule to identify how many isoprene units make up its skeleton and determine its classification.",
    "question_smiles": "CC1=CCC(CC1)C(=C)C",
    "options": [
      {
        "option_id": "A",
        "text": "4 units, classifying it as a polyterpene.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "2 units, classifying it as a monoterpene (10 carbons).",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "3 units, classifying it as a diterpene.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1 units, classifying it as a sesquiterpene.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Applying the isoprene rule to classify terpenes.",
      "process": "Step 1: Skeletons of terpenes are built from isoprene (2-methyl-1,3-butadiene, C5) units connected in a head-to-tail fashion.\\nStep 2: Divide the total carbon count of Limonene by 5 to find the number of units: it has 2 isoprene units.\\nStep 3: Terpenes with 10 carbons (2 units) are monoterpenes, while 30 carbons (6 units) are triterpenes.",
      "result": "Limonene is composed of 2 isoprene units."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q62",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Determine the products formed when glyceryl tristearate is heated in the presence of aqueous sodium hydroxide (saponification).",
    "question_smiles": "O=C(CCCCCCCCCCCCCCCCC)OCC(OC(=O)CCCCCCCCCCCCCCCCC)COC(=O)CCCCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Adipic acid and sodium propanoate",
        "smiles": "OC(=O)CCCCC(=O)O.CCC(=O)O[Na]",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Ethyl stearate and glycerol",
        "smiles": "CCOC(=O)CC(O)C.OCC(O)CO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Stearic acid and sodium hydroxide",
        "smiles": "CCCCCCCCCCCCCCCCCC(=O)O.[Na+].[OH-]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Glycerol and sodium stearate (soap)",
        "smiles": "OCC(O)CO.[Na+].[O-]C(=O)CCCCCCCCCCCCCCCCC",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Understanding saponification of triacylglycerols.",
      "process": "Step 1: Saponification is the base-catalyzed ester hydrolysis of a triacylglycerol.\\nStep 2: Hydrolysis of the three ester linkages yields glycerol (1,2,3-propanetriol) and three fatty acid carboxylate salts.\\nStep 3: Since the starting fat is glyceryl tristearate, the fatty acid salt obtained is sodium stearate.",
      "result": "Hydrolysis yields glycerol and sodium stearate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q66",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Analyze the terpene molecule Menthol. Apply the isoprene rule to identify how many isoprene units make up its skeleton and determine its classification.",
    "question_smiles": "CC1CCC(C(C1)O)C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "2 units, classifying it as a monoterpene (10 carbons).",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3 units, classifying it as a diterpene.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1 units, classifying it as a sesquiterpene.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4 units, classifying it as a polyterpene.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Applying the isoprene rule to classify terpenes.",
      "process": "Step 1: Skeletons of terpenes are built from isoprene (2-methyl-1,3-butadiene, C5) units connected in a head-to-tail fashion.\\nStep 2: Divide the total carbon count of Menthol by 5 to find the number of units: it has 2 isoprene units.\\nStep 3: Terpenes with 10 carbons (2 units) are monoterpenes, while 30 carbons (6 units) are triterpenes.",
      "result": "Menthol is composed of 2 isoprene units."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q67",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Determine the products formed when glyceryl tristearate is heated in the presence of aqueous sodium hydroxide (saponification).",
    "question_smiles": "O=C(CCCCCCCCCCCCCCCCC)OCC(OC(=O)CCCCCCCCCCCCCCCCC)COC(=O)CCCCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Adipic acid and sodium propanoate",
        "smiles": "OC(=O)CCCCC(=O)O.CCC(=O)O[Na]",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Ethyl stearate and glycerol",
        "smiles": "CCOC(=O)CC(O)C.OCC(O)CO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Glycerol and sodium stearate (soap)",
        "smiles": "OCC(O)CO.[Na+].[O-]C(=O)CCCCCCCCCCCCCCCCC",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Stearic acid and sodium hydroxide",
        "smiles": "CCCCCCCCCCCCCCCCCC(=O)O.[Na+].[OH-]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding saponification of triacylglycerols.",
      "process": "Step 1: Saponification is the base-catalyzed ester hydrolysis of a triacylglycerol.\\nStep 2: Hydrolysis of the three ester linkages yields glycerol (1,2,3-propanetriol) and three fatty acid carboxylate salts.\\nStep 3: Since the starting fat is glyceryl tristearate, the fatty acid salt obtained is sodium stearate.",
      "result": "Hydrolysis yields glycerol and sodium stearate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q68",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Describe the core structural skeleton common to all steroids (such as cholesterol, testosterone, and estradiol).",
    "question_smiles": "CC(C)CCCC(C)C1CCC2C1(CCC3C2CC=C4C3(CCC(C4)O)C)C",
    "options": [
      {
        "option_id": "A",
        "text": "Four cyclohexane rings fused linearly in a row.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A fused tetracyclic ring system consisting of three cyclohexane rings and one cyclopentane ring.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A macrocyclic ring of 17 carbon atoms containing various heteroatoms.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A fused tricyclic ring system containing three cyclohexane rings.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing steroid core structures.",
      "process": "Step 1: All steroids contain the cyclopentanoperhydrophenanthrene ring system.\\nStep 2: This consists of three 6-membered rings (A, B, and C) and one 5-membered ring (D) fused together.\\nStep 3: This tetracyclic carbon skeleton contains 17 carbons in total before substituents are added.",
      "result": "The steroid skeleton consists of three 6-membered rings and one 5-membered ring."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q69",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Identify the lipid class of the structure shown below, which features a glycerol backbone, two fatty acid esters, and a phosphate group esterified to choline.",
    "question_smiles": "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)([O-])OCC[N+](C)(C)C)OC(=O)CCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Sphingomyelin, which contains an ester-linked glycerol backbone.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Triacylglycerol, which forms micelles to store energy in adipose tissue.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Prostaglandin, which acts as a hydrophobic signalling lipid.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Phosphoglyceride (lecithin), which forms lipid bilayers due to its amphipathic nature.",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Identifying phospholipid classes and amphipathic properties.",
      "process": "Step 1: The structure shows a glycerol backbone esterified to palmitate and stearate tails at C1 and C2, and a phosphocholine polar head group at C3.\\nStep 2: This makes it a phosphoglyceride (phosphatidylcholine, or lecithin).\\nStep 3: These lipids are amphipathic, containing both polar heads and nonpolar tails, which drives bilayer self-assembly in membranes.",
      "result": "The structure is a phosphoglyceride, key to cell membranes."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q71",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Analyze the terpene molecule Squalene. Apply the isoprene rule to identify how many isoprene units make up its skeleton and determine its classification.",
    "question_smiles": "CC(C)=CCCC(C)=CCCC(C)=CCCC=C(C)CCC=C(C)CCC=C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "12 units, classifying it as a polyterpene.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "6 units, classifying it as a triterpene (30 carbons).",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "7 units, classifying it as a diterpene.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5 units, classifying it as a sesquiterpene.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Applying the isoprene rule to classify terpenes.",
      "process": "Step 1: Skeletons of terpenes are built from isoprene (2-methyl-1,3-butadiene, C5) units connected in a head-to-tail fashion.\\nStep 2: Divide the total carbon count of Squalene by 5 to find the number of units: it has 6 isoprene units.\\nStep 3: Terpenes with 10 carbons (2 units) are monoterpenes, while 30 carbons (6 units) are triterpenes.",
      "result": "Squalene is composed of 6 isoprene units."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q72",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Determine the products formed when glyceryl tristearate is heated in the presence of aqueous sodium hydroxide (saponification).",
    "question_smiles": "O=C(CCCCCCCCCCCCCCCCC)OCC(OC(=O)CCCCCCCCCCCCCCCCC)COC(=O)CCCCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Adipic acid and sodium propanoate",
        "smiles": "OC(=O)CCCCC(=O)O.CCC(=O)O[Na]",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Stearic acid and sodium hydroxide",
        "smiles": "CCCCCCCCCCCCCCCCCC(=O)O.[Na+].[OH-]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Glycerol and sodium stearate (soap)",
        "smiles": "OCC(O)CO.[Na+].[O-]C(=O)CCCCCCCCCCCCCCCCC",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Ethyl stearate and glycerol",
        "smiles": "CCOC(=O)CC(O)C.OCC(O)CO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding saponification of triacylglycerols.",
      "process": "Step 1: Saponification is the base-catalyzed ester hydrolysis of a triacylglycerol.\\nStep 2: Hydrolysis of the three ester linkages yields glycerol (1,2,3-propanetriol) and three fatty acid carboxylate salts.\\nStep 3: Since the starting fat is glyceryl tristearate, the fatty acid salt obtained is sodium stearate.",
      "result": "Hydrolysis yields glycerol and sodium stearate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q74",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Identify the lipid class of the structure shown below, which features a glycerol backbone, two fatty acid esters, and a phosphate group esterified to choline.",
    "question_smiles": "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)([O-])OCC[N+](C)(C)C)OC(=O)CCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Triacylglycerol, which forms micelles to store energy in adipose tissue.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Prostaglandin, which acts as a hydrophobic signalling lipid.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Phosphoglyceride (lecithin), which forms lipid bilayers due to its amphipathic nature.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Sphingomyelin, which contains an ester-linked glycerol backbone.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identifying phospholipid classes and amphipathic properties.",
      "process": "Step 1: The structure shows a glycerol backbone esterified to palmitate and stearate tails at C1 and C2, and a phosphocholine polar head group at C3.\\nStep 2: This makes it a phosphoglyceride (phosphatidylcholine, or lecithin).\\nStep 3: These lipids are amphipathic, containing both polar heads and nonpolar tails, which drives bilayer self-assembly in membranes.",
      "result": "The structure is a phosphoglyceride, key to cell membranes."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q76",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Analyze the terpene molecule Limonene. Apply the isoprene rule to identify how many isoprene units make up its skeleton and determine its classification.",
    "question_smiles": "CC1=CCC(CC1)C(=C)C",
    "options": [
      {
        "option_id": "A",
        "text": "1 units, classifying it as a sesquiterpene.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "4 units, classifying it as a polyterpene.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2 units, classifying it as a monoterpene (10 carbons).",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "3 units, classifying it as a diterpene.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Applying the isoprene rule to classify terpenes.",
      "process": "Step 1: Skeletons of terpenes are built from isoprene (2-methyl-1,3-butadiene, C5) units connected in a head-to-tail fashion.\\nStep 2: Divide the total carbon count of Limonene by 5 to find the number of units: it has 2 isoprene units.\\nStep 3: Terpenes with 10 carbons (2 units) are monoterpenes, while 30 carbons (6 units) are triterpenes.",
      "result": "Limonene is composed of 2 isoprene units."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q77",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Determine the products formed when glyceryl tristearate is heated in the presence of aqueous sodium hydroxide (saponification).",
    "question_smiles": "O=C(CCCCCCCCCCCCCCCCC)OCC(OC(=O)CCCCCCCCCCCCCCCCC)COC(=O)CCCCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Glycerol and sodium stearate (soap)",
        "smiles": "OCC(O)CO.[Na+].[O-]C(=O)CCCCCCCCCCCCCCCCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Adipic acid and sodium propanoate",
        "smiles": "OC(=O)CCCCC(=O)O.CCC(=O)O[Na]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Stearic acid and sodium hydroxide",
        "smiles": "CCCCCCCCCCCCCCCCCC(=O)O.[Na+].[OH-]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl stearate and glycerol",
        "smiles": "CCOC(=O)CC(O)C.OCC(O)CO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding saponification of triacylglycerols.",
      "process": "Step 1: Saponification is the base-catalyzed ester hydrolysis of a triacylglycerol.\\nStep 2: Hydrolysis of the three ester linkages yields glycerol (1,2,3-propanetriol) and three fatty acid carboxylate salts.\\nStep 3: Since the starting fat is glyceryl tristearate, the fatty acid salt obtained is sodium stearate.",
      "result": "Hydrolysis yields glycerol and sodium stearate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q79",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Identify the lipid class of the structure shown below, which features a glycerol backbone, two fatty acid esters, and a phosphate group esterified to choline.",
    "question_smiles": "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)([O-])OCC[N+](C)(C)C)OC(=O)CCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Sphingomyelin, which contains an ester-linked glycerol backbone.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Phosphoglyceride (lecithin), which forms lipid bilayers due to its amphipathic nature.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Triacylglycerol, which forms micelles to store energy in adipose tissue.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Prostaglandin, which acts as a hydrophobic signalling lipid.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identifying phospholipid classes and amphipathic properties.",
      "process": "Step 1: The structure shows a glycerol backbone esterified to palmitate and stearate tails at C1 and C2, and a phosphocholine polar head group at C3.\\nStep 2: This makes it a phosphoglyceride (phosphatidylcholine, or lecithin).\\nStep 3: These lipids are amphipathic, containing both polar heads and nonpolar tails, which drives bilayer self-assembly in membranes.",
      "result": "The structure is a phosphoglyceride, key to cell membranes."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q82",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Determine the products formed when glyceryl tristearate is heated in the presence of aqueous sodium hydroxide (saponification).",
    "question_smiles": "O=C(CCCCCCCCCCCCCCCCC)OCC(OC(=O)CCCCCCCCCCCCCCCCC)COC(=O)CCCCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Stearic acid and sodium hydroxide",
        "smiles": "CCCCCCCCCCCCCCCCCC(=O)O.[Na+].[OH-]",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Adipic acid and sodium propanoate",
        "smiles": "OC(=O)CCCCC(=O)O.CCC(=O)O[Na]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Glycerol and sodium stearate (soap)",
        "smiles": "OCC(O)CO.[Na+].[O-]C(=O)CCCCCCCCCCCCCCCCC",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Ethyl stearate and glycerol",
        "smiles": "CCOC(=O)CC(O)C.OCC(O)CO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding saponification of triacylglycerols.",
      "process": "Step 1: Saponification is the base-catalyzed ester hydrolysis of a triacylglycerol.\\nStep 2: Hydrolysis of the three ester linkages yields glycerol (1,2,3-propanetriol) and three fatty acid carboxylate salts.\\nStep 3: Since the starting fat is glyceryl tristearate, the fatty acid salt obtained is sodium stearate.",
      "result": "Hydrolysis yields glycerol and sodium stearate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q84",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Identify the lipid class of the structure shown below, which features a glycerol backbone, two fatty acid esters, and a phosphate group esterified to choline.",
    "question_smiles": "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)([O-])OCC[N+](C)(C)C)OC(=O)CCCCCCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Triacylglycerol, which forms micelles to store energy in adipose tissue.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Phosphoglyceride (lecithin), which forms lipid bilayers due to its amphipathic nature.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Sphingomyelin, which contains an ester-linked glycerol backbone.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Prostaglandin, which acts as a hydrophobic signalling lipid.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identifying phospholipid classes and amphipathic properties.",
      "process": "Step 1: The structure shows a glycerol backbone esterified to palmitate and stearate tails at C1 and C2, and a phosphocholine polar head group at C3.\\nStep 2: This makes it a phosphoglyceride (phosphatidylcholine, or lecithin).\\nStep 3: These lipids are amphipathic, containing both polar heads and nonpolar tails, which drives bilayer self-assembly in membranes.",
      "result": "The structure is a phosphoglyceride, key to cell membranes."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q86",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Analyze the terpene molecule Squalene. Apply the isoprene rule to identify how many isoprene units make up its skeleton and determine its classification.",
    "question_smiles": "CC(C)=CCCC(C)=CCCC(C)=CCCC=C(C)CCC=C(C)CCC=C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "7 units, classifying it as a diterpene.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "12 units, classifying it as a polyterpene.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5 units, classifying it as a sesquiterpene.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "6 units, classifying it as a triterpene (30 carbons).",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Applying the isoprene rule to classify terpenes.",
      "process": "Step 1: Skeletons of terpenes are built from isoprene (2-methyl-1,3-butadiene, C5) units connected in a head-to-tail fashion.\\nStep 2: Divide the total carbon count of Squalene by 5 to find the number of units: it has 6 isoprene units.\\nStep 3: Terpenes with 10 carbons (2 units) are monoterpenes, while 30 carbons (6 units) are triterpenes.",
      "result": "Squalene is composed of 6 isoprene units."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q88",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Describe the core structural skeleton common to all steroids (such as cholesterol, testosterone, and estradiol).",
    "question_smiles": "CC(C)CCCC(C)C1CCC2C1(CCC3C2CC=C4C3(CCC(C4)O)C)C",
    "options": [
      {
        "option_id": "A",
        "text": "Four cyclohexane rings fused linearly in a row.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A macrocyclic ring of 17 carbon atoms containing various heteroatoms.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A fused tetracyclic ring system consisting of three cyclohexane rings and one cyclopentane ring.",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A fused tricyclic ring system containing three cyclohexane rings.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing steroid core structures.",
      "process": "Step 1: All steroids contain the cyclopentanoperhydrophenanthrene ring system.\\nStep 2: This consists of three 6-membered rings (A, B, and C) and one 5-membered ring (D) fused together.\\nStep 3: This tetracyclic carbon skeleton contains 17 carbons in total before substituents are added.",
      "result": "The steroid skeleton consists of three 6-membered rings and one 5-membered ring."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q90",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Between stearic acid (C18:0) and oleic acid (cis-C18:1), which fatty acid has a lower melting point, and why?",
    "question_smiles": "CCCCCCCCCCCCCCCCCC(=O)O.CCCCCCCCC/C=C\\CCCCCCCC(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "Oleic acid, because the cis double bond introduces a rigid bend that prevents efficient packing.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Stearic acid, because saturated chains pack less efficiently than unsaturated ones.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Stearic acid, because the trans double bond increases packing density.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Oleic acid, because it has a higher molecular weight than stearic acid.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Comparing melting points of saturated vs. unsaturated fatty acids.",
      "process": "Step 1: Stearic acid is a saturated fatty acid with a straight-chain hydrocarbon tail. Oleic acid is monounsaturated with a cis double bond.\\nStep 2: The cis double bond introduces a kink/bend in the carbon chain.\\nStep 3: This kink prevents the molecules from packing closely together in a crystalline lattice, lowering van der Waals interactions and resulting in a lower melting point.",
      "result": "Oleic acid has a lower melting point due to the cis-kink preventing close packing."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q91",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Hard",
    "question_text": "Analyze the terpene molecule Limonene. Apply the isoprene rule to identify how many isoprene units make up its skeleton and determine its classification.",
    "question_smiles": "CC1=CCC(CC1)C(=C)C",
    "options": [
      {
        "option_id": "A",
        "text": "2 units, classifying it as a monoterpene (10 carbons).",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3 units, classifying it as a diterpene.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1 units, classifying it as a sesquiterpene.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4 units, classifying it as a polyterpene.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Applying the isoprene rule to classify terpenes.",
      "process": "Step 1: Skeletons of terpenes are built from isoprene (2-methyl-1,3-butadiene, C5) units connected in a head-to-tail fashion.\\nStep 2: Divide the total carbon count of Limonene by 5 to find the number of units: it has 2 isoprene units.\\nStep 3: Terpenes with 10 carbons (2 units) are monoterpenes, while 30 carbons (6 units) are triterpenes.",
      "result": "Limonene is composed of 2 isoprene units."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q93",
    "topic": "Biomolecules: Lipids",
    "difficulty_level": "Medium",
    "question_text": "Describe the core structural skeleton common to all steroids (such as cholesterol, testosterone, and estradiol).",
    "question_smiles": "CC(C)CCCC(C)C1CCC2C1(CCC3C2CC=C4C3(CCC(C4)O)C)C",
    "options": [
      {
        "option_id": "A",
        "text": "A fused tricyclic ring system containing three cyclohexane rings.",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A fused tetracyclic ring system consisting of three cyclohexane rings and one cyclopentane ring.",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A macrocyclic ring of 17 carbon atoms containing various heteroatoms.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Four cyclohexane rings fused linearly in a row.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing steroid core structures.",
      "process": "Step 1: All steroids contain the cyclopentanoperhydrophenanthrene ring system.\\nStep 2: This consists of three 6-membered rings (A, B, and C) and one 5-membered ring (D) fused together.\\nStep 3: This tetracyclic carbon skeleton contains 17 carbons in total before substituents are added.",
      "result": "The steroid skeleton consists of three 6-membered rings and one 5-membered ring."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  }
];
