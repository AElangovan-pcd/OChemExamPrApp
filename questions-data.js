// Default organic chemistry question dataset grounded in OpenStax Organic Chemistry
const OCHEM_QUESTIONS = [
  {
    "question_id": "q1_carbocation_rearrangement",
    "topic": "Alkenes: Electrophilic Addition & Rearrangement",
    "difficulty_level": "Hard",
    "question_text": "Identify the major organic product formed when 3-methyl-1-butene undergoes hydration in dilute aqueous sulfuric acid.",
    "question_smiles": "CC(C)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "2-Methyl-2-butanol (via carbocation rearrangement)",
        "smiles": "CCC(C)(O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Methyl-2-butanol (direct Markovnikov hydration)",
        "smiles": "CC(C)C(O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-Methyl-1-butanol (anti-Markovnikov hydration)",
        "smiles": "CC(C)CCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Methylbutane (alkene reduction)",
        "smiles": "CCC(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question asks for the major hydration product of 3-methyl-1-butene under acidic conditions. You must evaluate the electrophilic addition mechanism, Markovnikov's rule, and the susceptibility of intermediate carbocations to rearrange to more stable forms.",
      "process": "Step 1: Protonation of the alkene double bond by the hydronium ion ($H_3O^+$) occurs regioselectively at the less substituted carbon (C1) to generate the more stable secondary carbocation at C2: $CC(C)[CH+]C$.\nStep 2: The adjacent C3 carbon is tertiary and carries a hydrogen atom. A 1,2-hydride shift occurs from C3 to C2, transforming the secondary carbocation into a much more stable tertiary carbocation: $CC([C+](C)C)C$.\nStep 3: Water ($H_2O$) acts as a nucleophile, attacking the tertiary carbocation to form an alkyloxonium ion, which is subsequently deprotonated by another water molecule to yield the neutral tertiary alcohol.",
      "result": "The final product is 2-methyl-2-butanol ($CCC(C)(O)C$). This demonstrates that acid-catalyzed alkene hydration is subject to skeletal rearrangements if a more stable carbocation intermediate can be accessed."
    }
  },
  {
    "question_id": "q2_sn2_stereochemistry",
    "topic": "Nucleophilic Substitution (SN2)",
    "difficulty_level": "Medium",
    "question_text": "Predict the major organic product of the reaction between (S)-2-bromobutane and sodium cyanide (NaCN) in dimethylformamide (DMF) solvent.",
    "question_smiles": "CC[C@@H](C)Br",
    "options": [
      {
        "option_id": "A",
        "text": "(R)-2-Methylbutanenitrile (concerted backside attack)",
        "smiles": "CC[C@H](C)C#N",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(S)-2-Methylbutanenitrile (retention of configuration)",
        "smiles": "CC[C@@H](C)C#N",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Racemic 2-Methylbutanenitrile (carbocation intermediate)",
        "smiles": "CCC(C)C#N",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(E)-2-Butene (competing E2 elimination)",
        "smiles": "C/C=C/C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The problem presents a secondary alkyl halide substrate reacting with a strong nucleophile ($CN^-$) in a polar aprotic solvent (DMF). This setup requires analyzing competing substitution ($S_N1$/$S_N2$) and elimination paths, along with their stereochemical consequences.",
      "process": "Step 1: Analyze the reaction conditions. (S)-2-bromobutane is a secondary alkyl halide, which can undergo both $S_N1$ and $S_N2$. Cyanide ($CN^-$) is a strong, sterically unhindered nucleophile. DMF is a polar aprotic solvent, which solvates the counter-cation ($Na^+$) but leaves the nucleophile highly active. These conditions strongly favor the bimolecular $S_N2$ mechanism.\nStep 2: Apply the stereochemical rule of the $S_N2$ pathway. The nucleophile must perform a concerted, backside attack on the C-Br carbon, leading to a transition state that inverts the configuration at the stereocenter (Walden inversion).\nStep 3: Convert the configuration. Since the priority order of the groups attached to the stereocenter is preserved (Br is priority 1, CN becomes priority 1; Ethyl is priority 2; Methyl is priority 3; H is priority 4), the stereochemical inversion converts the (S) starting material directly into the (R) product.",
      "result": "The final product is (R)-2-methylbutanenitrile ($CC[C@H](C)C#N$). Backside attack during a concerted $S_N2$ mechanism guarantees complete inversion of stereochemical configuration at the reactive carbon."
    }
  },
  {
    "question_id": "q3_e2_regioselectivity",
    "topic": "Elimination Reactions (E2)",
    "difficulty_level": "Medium",
    "question_text": "Determine the major organic product when 2-bromo-2-methylbutane is heated in the presence of potassium tert-butoxide (t-BuOK) in tert-butanol.",
    "question_smiles": "CC(C)(Br)CC",
    "options": [
      {
        "option_id": "A",
        "text": "2-Methyl-1-butene (Hofmann product)",
        "smiles": "CC(=C)CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Methyl-2-butene (Zaitsev product)",
        "smiles": "CC(C)=CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Methyl-2-butanol (nucleophilic substitution)",
        "smiles": "CCC(C)(O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-Methyl-1-butene (rearranged alkene)",
        "smiles": "CC(C)C=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question asks for the major elimination product of a tertiary alkyl halide reacting with a strong, sterically hindered base. You must evaluate the regiochemistry of the E2 elimination, contrasting the formation of Zaitsev (more substituted) versus Hofmann (less substituted) products.",
      "process": "Step 1: Identify the substrate and reagent class. 2-bromo-2-methylbutane is a tertiary alkyl halide, which cannot undergo substitution ($S_N2$) due to steric hindrance. The presence of a strong base ($t-BuO^-$) at elevated temperature forces a bimolecular elimination ($E2$) mechanism.\nStep 2: Assess the steric demands of the base. Potassium tert-butoxide ($t-BuOK$) is a highly hindered, bulky base. When abstracting a $\\beta$-proton, the bulky base is sterically repelled by the substituents surrounding the secondary $\\beta$-carbons (which would lead to the more substituted Zaitsev alkene, 2-methyl-2-butene).\nStep 3: Target the less hindered protons. The base easily accesses and abstracts a proton from one of the primary $\\beta$-hydrogens (the methyl groups). Deprotonation here leads to the formation of the terminal, less substituted alkene, 2-methyl-1-butene.",
      "result": "The major product is 2-methyl-1-butene ($CC(=C)CC$). Strong, sterically hindered bases preferentially abstract the most accessible primary protons, yielding the thermodynamic Hofmann (less substituted) alkene."
    }
  },
  {
    "question_id": "q4_oxymercuration",
    "topic": "Alkenes: Hydration & Regioselectivity",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product of the following two-step reaction sequence applied to 3,3-dimethyl-1-butene? \\n1) Hg(OAc)2, H2O \\n2) NaBH4",
    "question_smiles": "CC(C)(C)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "3,3-Dimethyl-2-butanol (Markovnikov, no rearrangement)",
        "smiles": "CC(C)(C)C(O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2,3-Dimethyl-2-butanol (Markovnikov, rearranged)",
        "smiles": "CC(C)(O)C(C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3,3-Dimethyl-1-butanol (anti-Markovnikov)",
        "smiles": "CC(C)(C)CCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,3-Dimethyl-2-butene (elimination product)",
        "smiles": "CC(C)=C(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question requires identifying the product of the oxymercuration-demercuration sequence on 3,3-dimethyl-1-butene. You must compare this pathway to standard acid-catalyzed hydration, focusing on carbocation behavior.",
      "process": "Step 1: Electrophilic addition of mercuric acetate ($Hg(OAc)_2$) to the double bond forms a bridge-like cyclic mercurinium ion intermediate. The charge is shared, but a partial positive charge resides primarily on the more substituted carbon (C2).\nStep 2: Water ($H_2O$) acts as the nucleophile and attacks the more substituted carbon (C2) of the mercurinium ion in a Markovnikov-selective manner. Crucially, because the positive charge is stabilized in the three-membered ring, a full carbocation is never formed, completely preventing any 1,2-methyl shifts (rearrangements).\nStep 3: Sodium borohydride ($NaBH_4$) reduces the organomercury intermediate, replacing the C-Hg bond with a C-H bond, leaving the skeleton intact.",
      "result": "The final product is 3,3-dimethyl-2-butanol ($CC(C)(C)C(O)C$). Oxymercuration-demercuration is the standard method for achieving Markovnikov hydration of alkenes without skeletal rearrangements."
    }
  },
  {
    "question_id": "q5_stereospecific_halogenation",
    "topic": "Alkenes: Halogenation & Stereochemistry",
    "difficulty_level": "Hard",
    "question_text": "Determine the stereochemical identity of the product(s) formed when trans-2-butene reacts with molecular bromine (Br2) in dichloromethane (CH2Cl2).",
    "question_smiles": "C/C=C/C",
    "options": [
      {
        "option_id": "A",
        "text": "A single optically inactive meso compound: (2R,3S)-2,3-dibromobutane",
        "smiles": "C[C@@H](Br)[C@H](Br)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A racemic mixture of (2R,3R)- and (2S,3S)-2,3-dibromobutane",
        "smiles": "C[C@@H](Br)[C@@H](Br)C.C[C@H](Br)[C@H](Br)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A mixture of constitutionally isomeric dibromobutanes",
        "smiles": "CC(Br)C(Br)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A diastereomeric mixture of meso and racemic compounds",
        "smiles": "C[C@@H](Br)[C@H](Br)C.C[C@@H](Br)[C@@H](Br)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the stereochemical outcome of electrophilic halogen addition across a symmetric alkene. You must combine knowledge of the reaction's stereospecificity (anti-addition) with the geometry of the starting material (trans).",
      "process": "Step 1: Recall the mechanism of alkene halogenation. Bromine attacks the double bond to form a cyclic, three-membered bromonium ion intermediate. In the second step, the bromide counter-ion ($Br^-$) attacks from the opposite face (anti-addition) in a backside attack.\nStep 2: Set up the stereochemical coordinates. Since the starting material is trans-2-butene (symmetric) and the addition is strictly *anti*, the two bromines will add on opposite faces of the double bond.\nStep 3: Analyze the stereochemical symmetry of the product. Adding two identical bromine atoms across a symmetric trans double bond via anti-addition results in a product with a plane of symmetry in its eclipsed conformation. Specifically, it yields the (2R,3S) isomer, which is a meso compound.",
      "result": "The product is a single, optically inactive meso compound: (2R,3S)-2,3-dibromobutane ($C[C@@H](Br)[C@H](Br)C$). This reaction exemplifies stereospecific anti-addition where trans starting material + anti addition = meso product."
    }
  }
];
