// McMurry Chapter 5 questions
const CHAPTER_5_QUESTIONS = [
  {
    "question_id": "ch5_q1_allene_chirality",
    "topic": "Chirality & Symmetry",
    "difficulty_level": "Hard",
    "question_text": "Which of the following substituted allenes is chiral and can be resolved into stable enantiomers?",
    "question_smiles": "CC=C=CC",
    "options": [
      {
        "option_id": "A",
        "text": "2,3-Pentadiene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Methyl-1,2-butadiene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,2-Butadiene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,2-Propadiene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the structural requirements for chirality in allenes (cumulated dienes), which lack a typical tetrahedral stereocenter but possess an axis of chirality.",
      "process": "Step 1: In an allene ($R_1R_2C=C=CR_3R_4$), the central carbon is $sp$-hybridized and forms two perpendicular $\\pi$-bonds with the adjacent $sp^2$-hybridized carbons. This forces the substituents on one terminal carbon to lie in a plane perpendicular to the substituents on the other terminal carbon.\nStep 2: If both terminal carbons have two different groups attached ($R_1 \\neq R_2$ and $R_3 \\neq R_4$), the molecule lacks a plane of symmetry or center of inversion, making it chiral.\nStep 3: Analyze the options. 2,3-Pentadiene ($CH_3CH=C=CHCH_3$) has a methyl and a hydrogen on both C2 and C4, so it is chiral. 3-Methyl-1,2-butadiene has two methyl groups on one end, making it achiral. 1,2-Butadiene has two hydrogens on one end, making it achiral. 1,2-Propadiene is completely unsubstituted and achiral.",
      "result": "2,3-Pentadiene is a chiral allene that can be resolved into stable enantiomers because it has different groups on both terminal carbons."
    }
  },
  {
    "question_id": "ch5_q2_biphenyl_atropisomerism",
    "topic": "Chirality & Symmetry",
    "difficulty_level": "Hard",
    "question_text": "Which of the following biphenyl derivatives is chiral at room temperature due to restricted rotation about the single bond (atropisomerism)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "6,6'-Dinitrobiphenyl-2,2'-dicarboxylic acid",
        "smiles": "O=[N+]([O-])c1c(C(=O)O)cccc1-c2cccc(C(=O)O)c2[N+](=O)[O-]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Biphenyl-2,2'-dicarboxylic acid",
        "smiles": "O=C(O)c1ccccc1-c2ccccc2C(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Biphenyl-4,4'-dicarboxylic acid",
        "smiles": "O=C(O)c1ccc(cc1)-c2ccc(cc2)C(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4,4'-Dinitrobiphenyl",
        "smiles": "O=[N+]([O-])c1ccc(cc1)-c2ccc(cc2)[N+](=O)[O-]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests atropisomerism, which is conformational chirality arising from restricted rotation around a single bond due to steric hindrance.",
      "process": "Step 1: For a biphenyl to exhibit atropisomerism at room temperature, it must have bulky ortho substituents that prevent the two rings from becoming coplanar. If they cannot become coplanar, the molecule is locked in a perpendicular conformation.\nStep 2: If the perpendicular conformation lacks a plane of symmetry (which requires each ring to be unsymmetrically substituted), the molecule is chiral.\nStep 3: 6,6'-dinitrobiphenyl-2,2'-dicarboxylic acid has bulky nitro ($-NO_2$) and carboxylic acid ($-COOH$) groups at all four ortho positions. The steric clash prevents rotation about the central C-C bond at room temperature, and since each ring is unsymmetrical, the molecule is chiral. Other options either lack bulky ortho groups or have symmetrical substitution.",
      "result": "6,6'-Dinitrobiphenyl-2,2'-dicarboxylic acid is chiral at room temperature because steric hindrance between the ortho substituents prevents rotation, locking it in a chiral perpendicular conformation."
    }
  },
  {
    "question_id": "ch5_q3_meso_butanediol",
    "topic": "Chirality & Symmetry",
    "difficulty_level": "Medium",
    "question_text": "Which of the following stereoisomers of 2,3-butanediol is achiral overall despite containing tetrahedral stereocenters?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "meso-2,3-Butanediol",
        "smiles": "C[C@H](O)[C@@H](O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2R,3R)-2,3-Butanediol",
        "smiles": "C[C@H](O)[C@H](O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2S,3S)-2,3-Butanediol",
        "smiles": "C[C@@H](O)[C@@H](O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,4-Butanediol",
        "smiles": "OCCCCO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the concept of meso compounds, which contain multiple stereocenters but are achiral due to internal symmetry.",
      "process": "Step 1: A meso compound must have two or more stereocenters and an internal plane of symmetry (or center of inversion) that renders it achiral.\nStep 2: 2,3-Butanediol has stereocenters at C2 and C3. If the configuration is (2R,3S), the top half of the molecule is the mirror image of the bottom half.\nStep 3: This symmetry gives rise to an internal plane of symmetry, making it achiral and optically inactive. (2R,3R) and (2S,3S) are chiral enantiomers, while 1,4-butanediol is achiral because it has no stereocenters.",
      "result": "meso-2,3-Butanediol is achiral because it contains a plane of symmetry that bisects the C2-C3 bond, neutralizing the optical activity of its two stereocenters."
    }
  },
  {
    "question_id": "ch5_q4_cis_dimethylcyclohexane_conformations",
    "topic": "Chirality & Symmetry",
    "difficulty_level": "Medium",
    "question_text": "Which of the following conformations of cis-1,2-dimethylcyclohexane has an internal plane of symmetry, rendering it achiral in that specific geometry?",
    "question_smiles": "C1CC[C@@H](C)[C@@H](C)C1",
    "options": [
      {
        "option_id": "A",
        "text": "The planar conformation",
        "smiles": "C1CC(C)C(C)CC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The chair conformation with one equatorial and one axial methyl group",
        "smiles": "C1CC[C@@H](C)[C@@H](C)C1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The twist-boat conformation",
        "smiles": "C1CC[C@@H](C)[C@@H](C)C1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "None of the above; all conformations are chiral",
        "smiles": "C1CC[C@@H](C)[C@@H](C)C1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests conformational analysis of cyclic compounds and how conformational flexibility affects overall molecular chirality.",
      "process": "Step 1: In the planar conformation of cis-1,2-dimethylcyclohexane, a plane of symmetry passes perpendicular to the C1-C2 bond, splitting the molecule into identical halves.\nStep 2: When the molecule adopts a chair conformation, it must place one methyl group in an axial position and the other in an equatorial position. This conformation lacks a plane of symmetry and is chiral.\nStep 3: However, because the two chair conformations are enantiomers that interconvert rapidly via chair-chair flips at room temperature, the bulk sample is achiral on average (meso). The planar conformation represents the transition state or high-energy form that is symmetric.",
      "result": "The planar conformation of cis-1,2-dimethylcyclohexane has an internal plane of symmetry, which is why the molecule is considered meso on average."
    }
  },
  {
    "question_id": "ch5_q5_nitrogen_inversion",
    "topic": "Chirality & Symmetry",
    "difficulty_level": "Hard",
    "question_text": "Why is it generally impossible to resolve a tertiary amine such as ethylmethylpropylamine into stable enantiomers at room temperature?",
    "question_smiles": "CCN(C)CCC",
    "options": [
      {
        "option_id": "A",
        "text": "Rapid nitrogen pyramidal inversion interconverts the enantiomers.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The nitrogen atom is sp2-hybridized and flat, making the molecule achiral.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Tertiary amines form strong dimers that have a plane of symmetry.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The alkyl groups undergo rapid thermodynamic elimination at room temperature.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests nitrogen inversion (pyramidal inversion) and its impact on the stability of chiral nitrogen centers.",
      "process": "Step 1: Nitrogen in tertiary amines is $sp^3$-hybridized and pyramidal, with the lone pair acting as the fourth group. Because there are three different alkyl groups, the nitrogen is a stereocenter.\nStep 2: However, nitrogen undergoes rapid pyramidal inversion, where the lone pair moves from one side of the nitrogen to the other through a flat, $sp^2$-hybridized transition state. The activation barrier is very low (~25 kJ/mol).\nStep 3: This inversion occurs millions of times per second at room temperature, rapidly interconverting the two enantiomeric forms. Thus, the amine cannot be resolved.",
      "result": "Rapid nitrogen pyramidal inversion at room temperature prevents the resolution of chiral tertiary amines because the enantiomers interconvert extremely fast."
    }
  },
  {
    "question_id": "ch5_q6_enantiomer_relationship",
    "topic": "Enantiomers",
    "difficulty_level": "Easy",
    "question_text": "What is the stereochemical relationship between (2R,3S)-2-bromo-3-chlorobutane and (2S,3R)-2-bromo-3-chlorobutane?",
    "question_smiles": "C[C@@H](Br)[C@H](Cl)C",
    "options": [
      {
        "option_id": "A",
        "text": "Enantiomers",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Diastereomers",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Meso compounds",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Constitutional isomers",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the ability to recognize the relationship between two stereoisomers when all stereocenters are inverted.",
      "process": "Step 1: Identify the stereocenters. The compound has two stereocenters: C2 (with Br) and C3 (with Cl).\nStep 2: In (2R,3S)-2-bromo-3-chlorobutane, C2 is (R) and C3 is (S). In the second compound, C2 is (S) and C3 is (R). All stereocenters are inverted.\nStep 3: Check for symmetry. Because the substituents at C2 (Br, H, CH3) are different from C3 (Cl, H, CH3), the molecule is unsymmetrical. There is no internal plane of symmetry. Therefore, the mirror image is non-superimposable. This makes them enantiomers.",
      "result": "Because all stereocenters are inverted and the molecule is unsymmetrical, (2R,3S)-2-bromo-3-chlorobutane and (2S,3R)-2-bromo-3-chlorobutane are enantiomers."
    }
  },
  {
    "question_id": "ch5_q7_enantiomer_rotation",
    "topic": "Enantiomers",
    "difficulty_level": "Easy",
    "question_text": "If a pure sample of the enantiomer (S)-lactic acid has a specific rotation of +3.8 degrees, what is the specific rotation of pure (R)-lactic acid under identical experimental conditions?",
    "question_smiles": "C[C@@H](O)C(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "-3.8 degrees",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "+3.8 degrees",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "0.0 degrees",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "-7.6 degrees",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the fundamental property of enantiomers regarding optical rotation.",
      "process": "Step 1: Enantiomers have identical physical properties in achiral environments, but they rotate plane-polarized light in equal magnitude and opposite directions.\nStep 2: The given compound (S)-lactic acid has a specific rotation of +3.8 degrees.\nStep 3: Its enantiomer, (R)-lactic acid, must have a specific rotation of exactly -3.8 degrees under the same temperature, solvent, and wavelength.",
      "result": "Pure (R)-lactic acid will have a specific rotation of -3.8 degrees, which is equal in magnitude and opposite in sign to that of (S)-lactic acid."
    }
  },
  {
    "question_id": "ch5_q8_enantiomer_properties",
    "topic": "Enantiomers",
    "difficulty_level": "Medium",
    "question_text": "Which of the following physical properties differs between a pair of pure enantiomers under achiral conditions?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The direction of rotation of plane-polarized light",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Boiling point at 1 atm",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Solubility in water",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Retention factor (Rf) on standard silica gel thin-layer chromatography",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the physical behavior of enantiomers in achiral vs. chiral environments.",
      "process": "Step 1: Enantiomers have identical thermodynamic properties (boiling point, melting point, density, free energy) in achiral environments.\nStep 2: They also have identical interactions with achiral solvents (like water) and achiral stationary phases (like standard silica gel). Therefore, solubility and Rf values are identical.\nStep 3: They differ only in how they interact with chiral forces, such as plane-polarized light (which is chiral because it propagates as a helix) or chiral reagents/receptors.",
      "result": "The direction of rotation of plane-polarized light is the only physical property listed that differs between enantiomers under achiral conditions."
    }
  },
  {
    "question_id": "ch5_q9_thalidomide_stereochemistry",
    "topic": "Enantiomers",
    "difficulty_level": "Medium",
    "question_text": "The drug thalidomide was prescribed in the 1950s as a sedative, but its enantiomer was a potent teratogen. Why did administering the pure, active (R)-enantiomer fail to prevent the birth defects?",
    "question_smiles": "O=C1N(C(=O)c2ccccc2C1=O)C3CCC(=O)NC3=O",
    "options": [
      {
        "option_id": "A",
        "text": "The (R)-enantiomer racemizes rapidly in vivo under physiological conditions.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The active (R)-enantiomer was actually the teratogen, not the (S)-enantiomer.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The body converts the (R)-enantiomer into a meso compound.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The (R)-enantiomer is not absorbed by the body, whereas the (S)-enantiomer is.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question explores the biological relevance of enantiomers and the phenomenon of in vivo racemization.",
      "process": "Step 1: Thalidomide has a single stereocenter with an acidic hydrogen adjacent to a carbonyl group (an alpha-proton).\nStep 2: Under physiological pH, basic species in the blood can deprotonate this stereocenter to form a planar, achiral enol/enolate intermediate.\nStep 3: Reprotonation of this enol intermediate can occur from either face with equal probability, leading to rapid in vivo racemization. Thus, even if pure (R)-thalidomide is administered, it quickly becomes a 50:50 mixture of (R) and (S) in the patient's bloodstream.",
      "result": "Administering pure (R)-thalidomide failed because it undergoes rapid in vivo racemization to produce the teratogenic (S)-enantiomer."
    }
  },
  {
    "question_id": "ch5_q10_mirror_image_assignment",
    "topic": "Enantiomers",
    "difficulty_level": "Medium",
    "question_text": "Which of the following corresponds to the enantiomer of (2R,3R)-3-chloro-2-butanol?",
    "question_smiles": "C[C@@H](O)[C@@H](Cl)C",
    "options": [
      {
        "option_id": "A",
        "text": "(2S,3S)-3-chloro-2-butanol",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2S,3R)-3-chloro-2-butanol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2R,3S)-3-chloro-2-butanol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "meso-3-chloro-2-butanol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the relationship between configuration labels of stereocenters and enantiomeric structures.",
      "process": "Step 1: The starting material is (2R,3R)-3-chloro-2-butanol. It has two stereocenters at C2 and C3.\nStep 2: To obtain the enantiomer (the non-superimposable mirror image) of a molecule, the configurations of all stereocenters must be inverted.\nStep 3: Inverting C2 from (R) to (S) and C3 from (R) to (S) gives (2S,3S)-3-chloro-2-butanol. The other combinations represent diastereomers.",
      "result": "The enantiomer of (2R,3R)-3-chloro-2-butanol is (2S,3S)-3-chloro-2-butanol, obtained by inverting all stereocenters."
    }
  },
  {
    "question_id": "ch5_q11_max_stereoisomers",
    "topic": "Diastereomers",
    "difficulty_level": "Easy",
    "question_text": "What is the maximum number of stereoisomers possible for 2,3,4-trichlorohexane?",
    "question_smiles": "CCC(Cl)C(Cl)C(Cl)C",
    "options": [
      {
        "option_id": "A",
        "text": "8",
        "smiles": "CCC(Cl)C(Cl)C(Cl)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "6",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "16",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the application of the $2^n$ rule to determine the maximum number of stereoisomers.",
      "process": "Step 1: Identify the number of tetrahedral stereocenters ($n$) in 2,3,4-trichlorohexane. The stereocenters are C2, C3, and C4.\nStep 2: Evaluate the symmetry of the molecule. Since it is an unsymmetrical hexane chain (one end is methyl, the other is ethyl), there is no symmetry. Thus, no meso compounds can exist to reduce the number of stereoisomers.\nStep 3: Apply the formula $2^n$ where $n = 3$: $2^3 = 8$ stereoisomers.",
      "result": "There are 8 possible stereoisomers for 2,3,4-trichlorohexane because it has 3 stereocenters and lacks symmetry."
    }
  },
  {
    "question_id": "ch5_q12_diastereomer_definition",
    "topic": "Diastereomers",
    "difficulty_level": "Easy",
    "question_text": "Which statement best defines diastereomers?",
    "question_smiles": "C[C@@H](Cl)[C@H](Cl)C",
    "options": [
      {
        "option_id": "A",
        "text": "Stereoisomers that are not mirror images of each other.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Stereoisomers that are non-superimposable mirror images.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Isomers that differ only in the connectivity of their atoms.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Conformational variants that interconvert by rotation around single bonds.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the fundamental definition of diastereomers as a class of stereoisomers.",
      "process": "Step 1: Compare the definitions of isomers. Constitutional isomers have different connectivity. Stereoisomers have the same connectivity but different 3D arrangements.\nStep 2: Within stereoisomers, if they are mirror images, they are enantiomers.\nStep 3: If they are stereoisomers but NOT mirror images, they are diastereomers. This class includes cis/trans isomers and compounds with multiple stereocenters where some, but not all, centers are inverted.",
      "result": "Diastereomers are stereoisomers that are not mirror images of one another."
    }
  },
  {
    "question_id": "ch5_q13_tartaric_acid_diastereomers",
    "topic": "Diastereomers",
    "difficulty_level": "Medium",
    "question_text": "Which of the following pairs of tartaric acid stereoisomers are diastereomers?",
    "question_smiles": "O=C(O)C(O)C(O)C(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "(2R,3R)-Tartaric acid and meso-tartaric acid",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2R,3R)-Tartaric acid and (2S,3S)-Tartaric acid",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2S,3S)-Tartaric acid and its mirror image",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "All of the above are diastereomeric pairs",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests stereochemical relationships in the classic tartaric acid system.",
      "process": "Step 1: Identify the configurations. (2R,3R)-Tartaric acid has both centers in (R) configuration. meso-Tartaric acid has one (R) and one (S) configuration.\nStep 2: Compare the two structures. Since C2 is (R) in both, but C3 is (R) in the first and (S) in the second, they are stereoisomers that are not mirror images.\nStep 3: Thus, they are diastereomers. Comparing (2R,3R) and (2S,3S) shows they are enantiomers (mirror images).",
      "result": "(2R,3R)-Tartaric acid and meso-tartaric acid are diastereomers because they differ in configuration at one but not all stereocenters."
    }
  },
  {
    "question_id": "ch5_q14_diastereomer_separation",
    "topic": "Diastereomers",
    "difficulty_level": "Medium",
    "question_text": "Why can a mixture of diastereomers be separated by common physical techniques (such as recrystallization or column chromatography on silica gel), whereas enantiomers cannot?",
    "question_smiles": "C[C@H](O)[C@@H](F)C",
    "options": [
      {
        "option_id": "A",
        "text": "Diastereomers have different physical properties (boiling points, solubilities) because their shapes are different.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Diastereomers are constitutional isomers and have different connectivity.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "One diastereomer is always chiral while the other is always achiral.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Diastereomers do not have stereocenters.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the physical basis for separating diastereomers versus enantiomers.",
      "process": "Step 1: Enantiomers have identical physical properties in achiral environments because their spatial relationships between atoms are identical (just mirrored).\nStep 2: Diastereomers have different spatial arrangements of their atoms relative to one another (e.g. cis vs. trans, or R,R vs. R,S). Their dipole moments, molecular shapes, and intermolecular forces differ.\nStep 3: Consequently, they have different boiling points, melting points, solubilities, and chromatographic retention times, allowing easy separation.",
      "result": "Diastereomers have different physical properties because they have different 3D shapes and spatial arrangements of substituents."
    }
  },
  {
    "question_id": "ch5_q15_epimer_definition",
    "topic": "Diastereomers",
    "difficulty_level": "Medium",
    "question_text": "What is the term used to describe two diastereomers that differ in configuration at only one of several stereocenters?",
    "question_smiles": "OC[C@@H](O)[C@@H](O)[C@H](O)[C@@H](O)C=O",
    "options": [
      {
        "option_id": "A",
        "text": "Epimers",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Anomers",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Enantiomers",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Constitutional isomers",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests organic chemistry terminology related to carbohydrate and sugar stereochemistry.",
      "process": "Step 1: Diastereomers can differ at one or more stereocenters. If they differ at all stereocenters, they are enantiomers.\nStep 2: If they differ at only one stereocenter out of multiple, they are a special subclass of diastereomers known as epimers.\nStep 3: For example, D-glucose and D-galactose are C4-epimers. Anomers are a specific type of epimer at the hemiacetal/hemiketal carbon of cyclic sugars.",
      "result": "Two diastereomers that differ at only a single stereocenter are called epimers."
    }
  },
  {
    "question_id": "ch5_q16_meso_tartaric_acid",
    "topic": "Meso Compounds",
    "difficulty_level": "Medium",
    "question_text": "Which of the following configurations of tartaric acid represents a meso compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "(2R,3S)-Tartaric acid",
        "smiles": "O=C(O)[C@@H](O)[C@H](O)C(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2R,3R)-Tartaric acid",
        "smiles": "O=C(O)[C@@H](O)[C@@H](O)C(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2S,3S)-Tartaric acid",
        "smiles": "O=C(O)[C@H](O)[C@H](O)C(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "None of the above; tartaric acid cannot be meso",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the identification of the meso form of tartaric acid.",
      "process": "Step 1: Examine the structure of tartaric acid ($HOOC-CH(OH)-CH(OH)-COOH$). It is a symmetrical molecule with stereocenters at C2 and C3.\nStep 2: For a meso compound, the configurations must be opposite at the two equivalent stereocenters. Thus, one must be (R) and the other (S).\nStep 3: In (2R,3S)-tartaric acid, C2 is (R) and C3 is (S). This creates an internal plane of symmetry that bisects the C2-C3 bond, making the molecule achiral (meso).",
      "result": "(2R,3S)-Tartaric acid is a meso compound due to its internal symmetry, which cancels its optical activity."
    }
  },
  {
    "question_id": "ch5_q17_identify_meso_structure",
    "topic": "Meso Compounds",
    "difficulty_level": "Medium",
    "question_text": "Which of the following compounds is a meso compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "(2R,3S)-2,3-dichlorobutane",
        "smiles": "C[C@@H](Cl)[C@H](Cl)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2R,3R)-2,3-dichlorobutane",
        "smiles": "C[C@@H](Cl)[C@@H](Cl)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2R,3S)-2,3-dichloropentane",
        "smiles": "CC[C@H](Cl)[C@@H](Cl)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(2S,3S)-2,3-dichlorobutane",
        "smiles": "C[C@H](Cl)[C@H](Cl)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the ability to distinguish between meso compounds and chiral diastereomers.",
      "process": "Step 1: Check for asymmetric carbons (stereocenters). All options except the pentane have C2 and C3 as stereocenters.\nStep 2: Check for symmetry. (2R,3S)-2,3-dichlorobutane is symmetrical (both ends are $-CH_3$), and the stereocenters have opposite configurations (R and S), yielding a plane of symmetry.\nStep 3: Why is (2R,3S)-2,3-dichloropentane NOT meso? Although it has opposite configurations (R,S), it is unsymmetrical (one end is $-CH_3$, the other is $-CH_2CH_3$). Thus, it lacks a plane of symmetry and is chiral.",
      "result": "(2R,3S)-2,3-dichlorobutane is meso because it is symmetrical and has opposite stereochemical configurations that cancel each other out."
    }
  },
  {
    "question_id": "ch5_q18_symmetrical_diols",
    "topic": "Meso Compounds",
    "difficulty_level": "Hard",
    "question_text": "Which of the following statements is correct regarding the stereoisomers of 2,4-pentanediol?",
    "question_smiles": "CC(O)CC(O)C",
    "options": [
      {
        "option_id": "A",
        "text": "The (2R,4S) isomer is a meso compound, while the (2R,4R) isomer is chiral.",
        "smiles": "C[C@@H](O)C[C@H](O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Both the (2R,4S) and (2R,4R) isomers are meso.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The (2R,4S) isomer is chiral, while the (2R,4R) isomer is meso.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "There are no meso isomers because C3 is a methylene group ($CH_2$).",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the stereocenter and symmetry relations in a 1,3-relationship (2,4-pentanediol).",
      "process": "Step 1: Identify the stereocenters of 2,4-pentanediol. They are C2 and C4. C3 is achiral because it has two identical hydrogen atoms.\nStep 2: Draw the (2R,4S) isomer. It has a plane of symmetry passing through C3 (splitting the C3 carbon and its two H atoms). Therefore, (2R,4S) is a meso compound.\nStep 3: Draw the (2R,4R) isomer. The two methyl ends are equivalent, but because both stereocenters have the same configuration, they do not mirror each other across C3. The molecule lacks symmetry and is chiral.",
      "result": "The (2R,4S)-2,4-pentanediol is a meso compound, while the (2R,4R) isomer is chiral."
    }
  },
  {
    "question_id": "ch5_q19_center_of_inversion_meso",
    "topic": "Meso Compounds",
    "difficulty_level": "Hard",
    "question_text": "In its anti conformation, meso-2,3-dichlorobutane is achiral. What symmetry element is present in this specific conformation that demonstrates its achirality?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "A center of inversion ($i$)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A plane of symmetry ($\\sigma$)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A C2 rotational axis of symmetry ($C_2$)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "No symmetry element is present; it is achiral only on a time-average.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests advanced symmetry concepts, specifically identifying a center of inversion ($i$) versus a plane of symmetry ($\\sigma$) in conformationally flexible systems.",
      "process": "Step 1: Look at the Newman projection of meso-2,3-dichlorobutane in the anti conformation (where the two $-CH_3$ groups are 180 degrees apart).\nStep 2: In this conformation, if you draw a line from any atom (e.g. Cl) through the center of the C2-C3 bond and extend it an equal distance on the other side, you find an identical atom (Cl). This is a center of inversion ($i$).\nStep 3: There is no plane of symmetry in this staggered conformation. (In the eclipsed conformation, there is a plane of symmetry but no center of inversion). Since it contains a symmetry element in every conformation, the molecule is achiral overall.",
      "result": "In the anti conformation, meso-2,3-dichlorobutane possesses a center of inversion ($i$) which renders it achiral."
    }
  },
  {
    "question_id": "ch5_q20_average_symmetry_cis_cyclohexane",
    "topic": "Meso Compounds",
    "difficulty_level": "Hard",
    "question_text": "Why is cis-1,2-dimethylcyclohexane optically inactive at room temperature?",
    "question_smiles": "C1CC[C@@H](C)[C@@H](C)C1",
    "options": [
      {
        "option_id": "A",
        "text": "It is a meso compound whose individual chair conformations rapidly interconvert, resulting in a time-averaged achiral mixture.",
        "smiles": "C1CC[C@@H](C)[C@@H](C)C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It is a mixture of two constitutional isomers in equilibrium.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It lacks stereocenters, so it cannot rotate plane-polarized light.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The methyl groups are in equatorial-equatorial positions, which cancels optical activity.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the relationship between conformational dynamics (ring flip) and optical activity in cis-cyclohexane systems.",
      "process": "Step 1: cis-1,2-Dimethylcyclohexane has two chair conformations. Each conformation has one axial methyl and one equatorial methyl group.\nStep 2: These two chair conformations are non-superimposable mirror images (enantiomers) of each other. Individual chair conformations are chiral.\nStep 3: However, ring flipping is extremely rapid at room temperature, meaning they interconvert instantly. Because they are equal in energy, they exist in a 50:50 ratio (a conformational racemate), resulting in a time-averaged plane of symmetry and optical inactivity.",
      "result": "cis-1,2-Dimethylcyclohexane is optically inactive because it undergoes rapid ring flipping to form a 50:50 conformational racemic mixture of chiral chairs."
    }
  },
  {
    "question_id": "ch5_q21_rs_simple_butanol",
    "topic": "R/S Assignment",
    "difficulty_level": "Easy",
    "question_text": "Determine the configuration of the stereocenter in (S)-2-butanol using the Cahn-Ingold-Prelog rules.",
    "question_smiles": "CC[C@@H](O)C",
    "options": [
      {
        "option_id": "A",
        "text": "(S)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(R)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(Z)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests basic R/S assignment on a standard secondary alcohol.",
      "process": "Step 1: Identify the four groups attached to the C2 stereocenter: $-OH$, $-CH_2CH_3$ (ethyl), $-CH_3$ (methyl), and $-H$.\nStep 2: Assign priorities based on atomic numbers: $-OH$ (priority 1, O=8), $-CH_2CH_3$ (priority 2, C bonded to C,H,H), $-CH_3$ (priority 3, C bonded to H,H,H), and $-H$ (priority 4, H=1).\nStep 3: With the lowest priority group ($-H$) pointing away (on a dash in `CC[C@@H](O)C`), trace the path from 1 -> 2 -> 3. The direction is counter-clockwise, which corresponds to (S) configuration.",
      "result": "The configuration is (S) because the priority path 1 ($-OH$) -> 2 ($-CH_2CH_3$) -> 3 ($-CH_3$) runs counter-clockwise with H pointing away."
    }
  },
  {
    "question_id": "ch5_q22_rs_isotope_deuterium",
    "topic": "R/S Assignment",
    "difficulty_level": "Medium",
    "question_text": "Assign the R/S configuration to the chiral center in the deuterated compound shown below: (R)-1-deuterioethanol.",
    "question_smiles": "O[C@@H](D)C",
    "options": [
      {
        "option_id": "A",
        "text": "(R)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(S)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Achiral",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(E)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests priority rules for isotopes under the Cahn-Ingold-Prelog system.",
      "process": "Step 1: The stereocenter has four groups: $-OH$, $-CH_3$, $-D$ (deuterium), and $-H$ (hydrogen).\nStep 2: Assign priorities. Oxygen has the highest atomic number (priority 1). Carbon (priority 2) beats deuterium and hydrogen. For the isotopes deuterium ($^2H$) and hydrogen ($^1H$), priority is determined by atomic mass: Deuterium is priority 3, and Hydrogen is priority 4.\nStep 3: Trace the path 1 ($-OH$) -> 2 ($-CH_3$) -> 3 ($-D$). In the (R) configuration with H in the back, the path runs clockwise.",
      "result": "The configuration is (R) because isotopes of the same element are prioritized by mass number (D > H), making D priority 3 and H priority 4."
    }
  },
  {
    "question_id": "ch5_q23_rs_vinyl_vs_isopropyl",
    "topic": "R/S Assignment",
    "difficulty_level": "Hard",
    "question_text": "Under Cahn-Ingold-Prelog rules, what is the correct priority order (highest to lowest) for the following groups?\n-C\u2261CH, -CH=CH2, -CH(CH3)2, -CH2CH2CH3",
    "question_smiles": "C[C@@H](C#C)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "-C\u2261CH > -CH=CH2 > -CH(CH3)2 > -CH2CH2CH3",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "-C\u2261CH > -CH(CH3)2 > -CH=CH2 > -CH2CH2CH3",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "-CH=CH2 > -C\u2261CH > -CH(CH3)2 > -CH2CH2CH3",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "-CH(CH3)2 > -C\u2261CH > -CH=CH2 > -CH2CH2CH3",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests how double and triple bonds are treated when assigning CIP priorities.",
      "process": "Step 1: Convert multiple bonds to equivalent single bonds. A triple bond carbon $-C\\equiv CH$ is treated as bonded to three carbons: (C, C, C). A double bond carbon $-CH=CH_2$ is treated as bonded to two carbons and one hydrogen: (C, C, H).\nStep 2: Compare C1 atoms: $-C\\equiv CH$ is (C,C,C) vs. $-CH=CH_2$ which is (C,C,H) vs. $-CH(CH_3)_2$ which is (C,C,H) vs. $-CH_2CH_2CH_3$ which is (C,H,H).\nStep 3: Comparing: (C,C,C) wins immediately, so $-C\\equiv CH$ is priority 1. $-CH_2CH_2CH_3$ is (C,H,H), so it is priority 4.\nStep 4: Now compare $-CH=CH_2$ (vinyl) and $-CH(CH_3)_2$ (isopropyl). Both have C1 bonded to (C,C,H). Go to the next atoms: for vinyl, the next carbon is double bonded, treated as bonded to (C,H,H). For isopropyl, the methyl carbons are bonded to (H,H,H). Since (C,H,H) beats (H,H,H), vinyl has higher priority than isopropyl. Thus, priority is $-C\\equiv CH > -CH=CH_2 > -CH(CH_3)_2 > -CH_2CH_2CH_3$.",
      "result": "The priority order is -C\u2261CH > -CH=CH2 > -CH(CH3)2 > -CH2CH2CH3. Double and triple bonds are treated as multiple single bonds to phantom carbons."
    }
  },
  {
    "question_id": "ch5_q24_rs_cysteine_anomaly",
    "topic": "R/S Assignment",
    "difficulty_level": "Hard",
    "question_text": "Nineteen of the twenty standard amino acids have the (S) configuration at the alpha-carbon. However, L-cysteine is (R). Why?",
    "question_smiles": "N[C@@H](CS)C(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "The sulfur atom in the side chain (-CH2SH) gives it priority over the carboxyl group (-COOH).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cysteine is a D-amino acid, unlike the others.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The nitrogen atom is protonated, changing its priority.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The carboxylic acid group of cysteine has lower priority than a methyl group.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests a famous anomaly in biochem/organic stereochemistry: why cysteine is R while other L-amino acids are S.",
      "process": "Step 1: Identify the four groups on the alpha-carbon of L-cysteine: $-NH_2$, $-COOH$, $-CH_2SH$, and $-H$.\nStep 2: Assign priorities: Nitrogen (atomic number 7) is priority 1. Hydrogen is priority 4.\nStep 3: Compare $-COOH$ and $-CH_2SH$ at C-alpha. The carbon of $-COOH$ is bonded to (O, O, O) (treating the carbonyl as two single bonds). The C-beta of $-CH_2SH$ is bonded to (S, H, H). Since sulfur (atomic number 16) has a higher atomic number than oxygen (atomic number 8), the $-CH_2SH$ group has higher priority (priority 2) than the $-COOH$ group (priority 3). For other amino acids, the side chain carbon is bonded to (C,H,H) or (H,H,H), making $-COOH$ priority 2 and side chain priority 3.",
      "result": "L-Cysteine is (R) because the side chain carbon is bonded to sulfur, which has a higher atomic number (16) than oxygen (8), prioritizing -CH2SH over -COOH."
    }
  },
  {
    "question_id": "ch5_q25_rs_3_methylcyclohexene",
    "topic": "R/S Assignment",
    "difficulty_level": "Medium",
    "question_text": "Assign the R/S configuration to the stereocenter (C3) in (R)-3-methylcyclohexene.",
    "question_smiles": "C1[C@@H](C)C=CCC1",
    "options": [
      {
        "option_id": "A",
        "text": "(R)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(S)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(Z)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests R/S assignment on a stereocenter within a cycloalkene ring system.",
      "process": "Step 1: Identify the groups attached to C3: the methyl group ($-CH_3$), hydrogen ($-H$), C2 (part of the double bond), and C4 (part of the ring).\nStep 2: Assign priorities. C2 is an $sp^2$ carbon double-bonded to C1, so it is treated as bonded to (C,C,H). C4 is an $sp^3$ carbon bonded to C5, H, H, so it is treated as (C,H,H).\nStep 3: Comparing C2 and C4: (C,C,H) beats (C,H,H), so C2 has priority 1. C4 has priority 2. The methyl group ($-CH_3$) is bonded to (H,H,H), so it is priority 3. Hydrogen is priority 4.\nStep 4: Looking at `C1[C@@H](C)C=CCC1` (with the methyl group on a wedge, meaning H is in the back on a dash), tracing from C2 (1) -> C4 (2) -> Methyl (3) runs clockwise, which is (R).",
      "result": "C3 of the structure shown has the (R) configuration because the double-bonded C2 path has higher priority than the sp3 C4 path."
    }
  },
  {
    "question_id": "ch5_q26_rs_glyceraldehyde",
    "topic": "R/S Assignment",
    "difficulty_level": "Medium",
    "question_text": "What is the R/S configuration of the central carbon in D-glyceraldehyde?",
    "question_smiles": "OC[C@@H](O)C=O",
    "options": [
      {
        "option_id": "A",
        "text": "(R)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(S)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(D)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(L)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests configuration assignment for the reference monosaccharide glyceraldehyde.",
      "process": "Step 1: The chiral center C2 of glyceraldehyde is bonded to $-OH$, $-CHO$ (aldehyde), $-CH_2OH$ (hydroxymethyl), and $-H$.\nStep 2: Assign priorities: $-OH$ is priority 1. $-CHO$ carbon is bonded to (O,O,H). $-CH_2OH$ carbon is bonded to (O,H,H). Comparing (O,O,H) to (O,H,H), $-CHO$ is priority 2, and $-CH_2OH$ is priority 3. $-H$ is priority 4.\nStep 3: For D-glyceraldehyde, when drawn in standard Fischer projection, $-OH$ is on the right, $-H$ is on the left, $-CHO$ is at the top, and $-CH_2OH$ is at the bottom. This translates to the (R) configuration.",
      "result": "D-Glyceraldehyde has the (R) configuration because the aldehyde carbon (-CHO) has priority over the hydroxymethyl carbon (-CH2OH)."
    }
  },
  {
    "question_id": "ch5_q27_rs_wedge_h",
    "topic": "R/S Assignment",
    "difficulty_level": "Medium",
    "question_text": "Determine the configuration of the chiral center in a molecule where the priorities are 1: -Cl, 2: -F, 3: -CH3, 4: -H, and the hydrogen atom (-H) is on a wedge pointing towards you, and tracing 1 -> 2 -> 3 goes clockwise.",
    "question_smiles": "Cl[C@H](F)C",
    "options": [
      {
        "option_id": "A",
        "text": "(S)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(R)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Achiral",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(Z)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests how to handle a chiral center where the lowest priority group is pointing towards the viewer.",
      "process": "Step 1: The Cahn-Ingold-Prelog system requires the lowest priority group (4) to point away from the viewer (on a dash).\nStep 2: If group 4 is pointing towards the viewer (on a wedge), the apparent configuration obtained by tracing 1 -> 2 -> 3 must be reversed.\nStep 3: The apparent direction is clockwise (which would normally be R). Since H is on a wedge, reverse this result to get (S).",
      "result": "The configuration is (S) because the lowest priority group (-H) is on a wedge, meaning the clockwise apparent rotation must be inverted."
    }
  },
  {
    "question_id": "ch5_q28_rs_two_centers_assignment",
    "topic": "R/S Assignment",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name, including stereochemical descriptors, for the compound represented by the SMILES `C[C@@H](Br)[C@H](Cl)C`.",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "(2R,3S)-2-bromo-3-chlorobutane",
        "smiles": "C[C@@H](Br)[C@H](Cl)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2S,3R)-2-bromo-3-chlorobutane",
        "smiles": "C[C@H](Br)[C@@H](Cl)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2R,3R)-2-bromo-3-chlorobutane",
        "smiles": "C[C@@H](Br)[C@@H](Cl)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(2S,3S)-2-bromo-3-chlorobutane",
        "smiles": "C[C@H](Br)[C@H](Cl)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests assignment of R/S configuration to multiple stereocenters in a single molecule.",
      "process": "Step 1: Number the chain to give substituents the lowest possible locants: C2 gets Br and C3 gets Cl (2-bromo-3-chlorobutane).\nStep 2: Assign C2 configuration. Groups are $-Br$ (1), C3 (2), $-CH_3$ (3), $-H$ (4). With H in the back, the path from $-Br$ (1) -> C3 (2) -> $-CH_3$ (3) is clockwise, which is (2R).\nStep 3: Assign C3 configuration. Groups are $-Cl$ (1), C2 (2), $-CH_3$ (3), $-H$ (4). In `C[C@@H](Br)[C@H](Cl)C`, C3 has Cl on a dash or wedge. Tracing 1 -> 2 -> 3 counter-clockwise with H in the back gives (3S).",
      "result": "The IUPAC name of the structure is (2R,3S)-2-bromo-3-chlorobutane."
    }
  },
  {
    "question_id": "ch5_q29_rs_group_four_in_plane",
    "topic": "R/S Assignment",
    "difficulty_level": "Hard",
    "question_text": "If the lowest priority group (4) at a stereocenter lies in the plane of the page, what is the most reliable method to assign its R/S configuration?",
    "question_smiles": "CC[C@H](C)O",
    "options": [
      {
        "option_id": "A",
        "text": "Perform a double swap of substituents to place group 4 in the back while keeping configuration intact, then assign.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Assign the configuration directly based on the apparent direction of 1 -> 2 -> 3, without adjusting.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Swap group 4 with group 1 and invert the final result.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Assume it is (R) if the highest priority group is on a wedge.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests 3D manipulation techniques for stereocenters, specifically handling groups in the plane.",
      "process": "Step 1: Swapping any two groups on a stereocenter inverts the configuration. Swapping a second pair inverts it again, returning it to the original configuration.\nStep 2: To keep the stereocenter intact, swap group 4 with the group currently in the back (on the dash). Then swap the remaining two groups (double swap).\nStep 3: Now, since group 4 is in the back, assign the configuration directly. This avoids spatial rotation mistakes.",
      "result": "A double swap of substituents is the most reliable method because it places group 4 in the back without altering the configuration."
    }
  },
  {
    "question_id": "ch5_q30_rs_carboxyl_complex_priority",
    "topic": "R/S Assignment",
    "difficulty_level": "Medium",
    "question_text": "Using Cahn-Ingold-Prelog rules, what is the priority order (highest to lowest) of the following carbonyl and carboxyl derivatives?\n-COOCH3, -COOH, -CHO, -CH2OH",
    "question_smiles": "CC(C)OC(=O)C",
    "options": [
      {
        "option_id": "A",
        "text": "-COOCH3 > -COOH > -CHO > -CH2OH",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "-COOH > -COOCH3 > -CHO > -CH2OH",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "-COOCH3 > -CHO > -COOH > -CH2OH",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "-CHO > -COOCH3 > -COOH > -CH2OH",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests CIP priority determination when multiple oxygenated carbon functional groups are compared.",
      "process": "Step 1: Analyze C1 of each group.\n- $-COOCH_3$ and $-COOH$ are carbonyl carbons bonded to a double bond O and a single bond O. They are treated as bonded to (O, O, O).\n- $-CHO$ (aldehyde) is a carbonyl carbon double bonded to O and single bonded to H. It is treated as bonded to (O, O, H).\n- $-CH_2OH$ is an $sp^3$ carbon bonded to (O, H, H).\nStep 2: Compare $(O, O, O)$ groups ($-COOCH_3$ vs $-COOH$) with $(O, O, H)$ ($-CHO$) and $(O, H, H)$ ($-CH_2OH$). Clearly, $-COOCH_3$ and $-COOH$ have higher priority than $-CHO$, which is higher than $-CH_2OH$.\nStep 3: Compare $-COOCH_3$ and $-COOH$. Go to the next atom: for $-COOCH_3$, it is Carbon (atomic number 6). For $-COOH$, it is Hydrogen (atomic number 1). Since Carbon beats Hydrogen, $-COOCH_3$ is priority 1 and $-COOH$ is priority 2.",
      "result": "The priority order is -COOCH3 > -COOH > -CHO > -CH2OH."
    }
  },
  {
    "question_id": "ch5_q31_fischer_lines",
    "topic": "Fischer Projections",
    "difficulty_level": "Easy",
    "question_text": "In a Fischer projection, what spatial orientation is represented by the horizontal and vertical bonds?",
    "question_smiles": "OC[C@@H](O)C=O",
    "options": [
      {
        "option_id": "A",
        "text": "Horizontal bonds point towards the viewer (wedges); vertical bonds point away from the viewer (dashes).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Horizontal bonds point away from the viewer; vertical bonds point towards the viewer.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "All bonds lie flat in the plane of the page.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Vertical bonds represent C-C bonds, and horizontal bonds represent C-H bonds only.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the 3D interpretation of Fischer projections.",
      "process": "Step 1: Recall the definition of a Fischer projection. It is a 2D representation of a 3D molecule.\nStep 2: By convention, horizontal lines represent bonds that project out of the page (wedges), resembling a bow tie.\nStep 3: Vertical lines represent bonds that project back into the page (dashes).",
      "result": "Horizontal bonds point towards the viewer (wedges), and vertical bonds point away from the viewer (dashes)."
    }
  },
  {
    "question_id": "ch5_q32_fischer_rotation_180",
    "topic": "Fischer Projections",
    "difficulty_level": "Medium",
    "question_text": "Which of the following operations on a Fischer projection preserves the original configuration of the stereocenter?",
    "question_smiles": "C[C@H](O)C(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "Rotating the projection 180 degrees in the plane of the page.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Rotating the projection 90 degrees in the plane of the page.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Flipping the projection over like a pancake (out of the page).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Swapping any two groups at a single stereocenter.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the rules of manipulating Fischer projections without altering stereochemistry.",
      "process": "Step 1: A 180-degree rotation keeps the vertical groups vertical and horizontal groups horizontal. Although their positions are inverted, the wedges remain wedges and dashes remain dashes, preserving configuration.\nStep 2: A 90-degree rotation swaps horizontal and vertical bonds. What was in the back is now in the front, which inverts the configuration.\nStep 3: Swapping two groups inverts the configuration. Flipping the projection out of the page is equivalent to a reflection (mirroring), which inverts the configuration.",
      "result": "Rotating a Fischer projection by 180 degrees in the plane of the page preserves the configuration, whereas 90-degree rotations or single swaps invert it."
    }
  },
  {
    "question_id": "ch5_q33_fischer_rs_assignment",
    "topic": "Fischer Projections",
    "difficulty_level": "Medium",
    "question_text": "Assign the R/S configuration to the chiral center in the following Fischer projection:\nTop = -CHO, Bottom = -CH2OH, Left = -H, Right = -OH.",
    "question_smiles": "OC[C@@H](O)C=O",
    "options": [
      {
        "option_id": "A",
        "text": "(R)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(S)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Achiral",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(D)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the method for assigning R/S configuration directly from a Fischer projection.",
      "process": "Step 1: Assign priorities to the groups: $-OH$ (1), $-CHO$ (2), $-CH_2OH$ (3), $-H$ (4).\nStep 2: Trace the path 1 -> 2 -> 3. From $-OH$ (right) -> $-CHO$ (top) -> $-CH_2OH$ (bottom), the path is counter-clockwise.\nStep 3: Identify the position of the lowest priority group ($-H$). It is on a horizontal bond. By Fischer rules, if group 4 is horizontal, the apparent configuration (S) is reversed. Thus, the configuration is (R).",
      "result": "The configuration is (R) because the apparent counter-clockwise direction is reversed since the lowest priority group (-H) is on a horizontal bond."
    }
  },
  {
    "question_id": "ch5_q34_fischer_rotation_90",
    "topic": "Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "What is the stereochemical relationship between a Fischer projection of a molecule and the structure obtained by rotating it 90 degrees in the plane of the page?",
    "question_smiles": "C[C@H](O)C(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "Enantiomers",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Diastereomers",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Identical compounds",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Constitutional isomers",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the stereochemical consequence of a 90-degree rotation of a Fischer projection.",
      "process": "Step 1: Understand that a 90-degree rotation in the plane of the page changes vertical groups (which project away) to horizontal groups (which project towards you), and vice versa.\nStep 2: This changes the spatial orientation of all substituents, effectively mirroring the chiral center and inverting its configuration.\nStep 3: Because the configuration is inverted and the molecule has a single chiral center, the resulting structure is the enantiomer.",
      "result": "A 90-degree rotation of a Fischer projection in the plane of the page inverts the configuration, producing the enantiomer."
    }
  },
  {
    "question_id": "ch5_q35_fischer_meso_identification",
    "topic": "Fischer Projections",
    "difficulty_level": "Medium",
    "question_text": "Which of the following Fischer projections represents an achiral (meso) diastereomer of 2,3-dibromobutane?",
    "question_smiles": "C[C@@H](Br)[C@@H](Br)C",
    "options": [
      {
        "option_id": "A",
        "text": "Top = -CH3, Bottom = -CH3; C2 has -H on left, -Br on right; C3 has -H on left, -Br on right.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Top = -CH3, Bottom = -CH3; C2 has -H on left, -Br on right; C3 has -Br on left, -H on right.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Top = -CH3, Bottom = -CH2CH3; C2 has -H on left, -Br on right; C3 has -H on left, -Br on right.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "None of the above are meso.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests how to recognize meso compounds in Fischer projections.",
      "process": "Step 1: For a Fischer projection to represent a meso compound, there must be a plane of symmetry that cuts the projection in half horizontally.\nStep 2: In Option A, the top and bottom groups are identical ($-CH_3$). C2 has H (left) and Br (right), and C3 has H (left) and Br (right). A horizontal line bisecting the C2-C3 bond reflects the top half onto the bottom half exactly. This is a meso compound.\nStep 3: Option B has H/Br on opposite sides, lacking a plane of symmetry (this is the chiral (2R,3R) or (2S,3S) isomer). Option C has different end groups ($-CH_3$ vs. $-CH_2CH_3$), so it cannot have a plane of symmetry.",
      "result": "The projection with identical substituents reflecting across a horizontal mirror plane represents the meso compound."
    }
  },
  {
    "question_id": "ch5_q36_specific_rotation_calc",
    "topic": "Optical Activity",
    "difficulty_level": "Medium",
    "question_text": "A solution of a pure chiral compound (concentration = 0.20 g/mL) placed in a 2.0 dm polarimeter tube exhibits an observed rotation of -6.0 degrees. Calculate the specific rotation $[\\alpha]_D$ of this compound.",
    "question_smiles": "CC(O)C",
    "options": [
      {
        "option_id": "A",
        "text": "-15 degrees",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "-6.0 degrees",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "-60 degrees",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "+15 degrees",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the calculation of specific rotation using the standard polarimetry equation.",
      "process": "Step 1: Write down the specific rotation formula: $[\\alpha] = \\alpha / (c \\cdot l)$, where $\\alpha$ is the observed rotation in degrees (-6.0), $c$ is the concentration in g/mL (0.20), and $l$ is the path length in decimeters (2.0).\nStep 2: Plug in the values: $[\\alpha] = -6.0 / (0.20 \\cdot 2.0) = -6.0 / 0.40$.\nStep 3: Solve the division: $-6.0 / 0.40 = -15$ degrees.",
      "result": "The specific rotation of the compound is -15 degrees."
    }
  },
  {
    "question_id": "ch5_q37_ee_enantiomeric_excess",
    "topic": "Optical Activity",
    "difficulty_level": "Easy",
    "question_text": "A sample of a chiral compound has an enantiomeric excess (ee) of 70% of the levorotatory (-) enantiomer. What is the actual percentage of the (+) and (-) enantiomers in the mixture?",
    "question_smiles": "CC(O)C",
    "options": [
      {
        "option_id": "A",
        "text": "85% (-) and 15% (+)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "70% (-) and 30% (+)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "90% (-) and 10% (+)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "75% (-) and 25% (+)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the calculation of individual enantiomer percentages from enantiomeric excess (ee).",
      "process": "Step 1: Enantiomeric excess (ee) is defined as the difference in percentages of the two enantiomers: $ee = \\% \\text{major} - \\% \\text{minor}$.\nStep 2: Let $x$ be the percentage of the (-) enantiomer and $y$ be the percentage of the (+) enantiomer. We have $x + y = 100\\%$ and $x - y = 70\\%$.\nStep 3: Add the two equations: $2x = 170\\% \\implies x = 85\\%$. Solve for $y$: $y = 15\\%$.",
      "result": "The mixture contains 85% of the (-) enantiomer and 15% of the (+) enantiomer."
    }
  },
  {
    "question_id": "ch5_q38_optical_purity_calc",
    "topic": "Optical Activity",
    "difficulty_level": "Medium",
    "question_text": "Pure (R)-2-bromobutane has a specific rotation of -23.1 degrees. A mixture of (R)- and (S)-2-bromobutane has a specific rotation of -11.55 degrees. What is the enantiomeric excess (ee) and composition of the mixture?",
    "question_smiles": "CC[C@H](Br)C",
    "options": [
      {
        "option_id": "A",
        "text": "50% ee of (R); composition is 75% (R) and 25% (S)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "50% ee of (R); composition is 50% (R) and 50% (S)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "25% ee of (R); composition is 62.5% (R) and 37.5% (S)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "75% ee of (R); composition is 87.5% (R) and 12.5% (S)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the relationship between specific rotation, optical purity (ee), and molecular composition.",
      "process": "Step 1: Calculate the enantiomeric excess (optical purity): $ee = |\\text{observed rotation}| / |\\text{specific rotation of pure enantiomer}| = 11.55 / 23.1 = 0.50$ or $50\\%$.\nStep 2: Since the observed rotation is negative, the (R) enantiomer is in excess. So we have 50% ee of (R).\nStep 3: Calculate the composition. 50% of the mixture is pure (R), and the remaining 50% is a racemic mixture of (R) and (S) (which contains 25% R and 25% S). Thus, total (R) = 50% + 25% = 75%, and total (S) = 25%.",
      "result": "The mixture has a 50% ee of (R), corresponding to a composition of 75% (R) and 25% (S)."
    }
  },
  {
    "question_id": "ch5_q39_no_rs_polarimetry_correlation",
    "topic": "Optical Activity",
    "difficulty_level": "Easy",
    "question_text": "Which of the following statements is true regarding the relationship between the configuration (R/S) and the direction of optical rotation (+/-) of a molecule?",
    "question_smiles": "CC(O)C",
    "options": [
      {
        "option_id": "A",
        "text": "There is no direct correlation between R/S configuration and the direction of optical rotation.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "All (R)-enantiomers are dextrorotatory (+), and all (S)-enantiomers are levorotatory (-).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "An (R)-enantiomer can only be (-) if it contains a halogen atom.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The configuration must be (S) if the observed rotation is positive.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question clarifies the distinction between nomenclatural designation (R/S) and physical property (+/-).",
      "process": "Step 1: R/S configurations are determined by Cahn-Ingold-Prelog priority rules, which are based on atomic numbers and rules of nomenclature.\nStep 2: The direction of optical rotation (+/-) is an experimental physical property determined by how the molecule interacts with plane-polarized light in a polarimeter.\nStep 3: There is no mathematical or direct correlation between them. A molecule with (R) configuration can be either (+) or (-), depending on its structure, solvent, and temperature.",
      "result": "There is no direct correlation between the R/S configuration and the direction of optical rotation; they represent two different concepts."
    }
  },
  {
    "question_id": "ch5_q40_diastereomer_optical_rotation",
    "topic": "Optical Activity",
    "difficulty_level": "Medium",
    "question_text": "What is the relationship between the specific rotations of two diastereomers?",
    "question_smiles": "C[C@H](O)[C@@H](Cl)C",
    "options": [
      {
        "option_id": "A",
        "text": "They have different magnitudes and signs, with no simple relationship between them.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "They have equal magnitudes but opposite signs.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "They have the exact same magnitude and sign.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "One diastereomer is always optically active, while the other is always optically inactive.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests how diastereomeric relationships affect optical activity properties.",
      "process": "Step 1: Enantiomers must have equal and opposite optical rotations because they are mirror images.\nStep 2: Diastereomers are not mirror images. They have different physical properties including melting points, solubilities, and dipole moments.\nStep 3: Consequently, their interactions with plane-polarized light are completely different. Their specific rotations differ in both magnitude and direction, and there is no formula to predict one from the other.",
      "result": "Diastereomers have different specific rotations with no simple or predictable relationship between them."
    }
  },
  {
    "question_id": "ch5_q41_racemization_thermodynamics",
    "topic": "Racemic Mixtures & Resolution",
    "difficulty_level": "Medium",
    "question_text": "Thermodynamically, why is the spontaneous racemization of a pure enantiomer favored over time in solution?",
    "question_smiles": "CC(O)C",
    "options": [
      {
        "option_id": "A",
        "text": "It is driven by an increase in entropy (entropy of mixing, $\\Delta S > 0$).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A racemic mixture has lower enthalpy than a pure enantiomer ($\\Delta H < 0$).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The activation energy of racemization is always zero.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The racemic mixture forms stronger hydrogen bonds with the solvent.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the thermodynamic principles behind racemization.",
      "process": "Step 1: Racemization converts a pure enantiomer into a 50:50 mixture of enantiomers.\nStep 2: In terms of enthalpy ($\\Delta H$), enantiomers have identical bond energies and solvent interactions, so the enthalpy of mixing is close to zero ($\\Delta H \\approx 0$).\nStep 3: In terms of entropy ($\\Delta S$), mixing two different species (the two enantiomers) increases the disorder of the system, making $\\Delta S_\\text{mix} > 0$. Since $\\Delta G = \\Delta H - T\\Delta S$, a positive entropy change makes the free energy change negative ($\\Delta G < 0$), driving spontaneous racemization.",
      "result": "Spontaneous racemization is thermodynamically driven by the positive entropy of mixing."
    }
  },
  {
    "question_id": "ch5_q42_resolving_agent_mechanism",
    "topic": "Racemic Mixtures & Resolution",
    "difficulty_level": "Hard",
    "question_text": "How does a chiral resolving agent (such as (+)-tartaric acid) allow the separation of a racemic mixture of amines?",
    "question_smiles": "CC(N)c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "It reacts with the enantiomeric amines to form a pair of diastereomeric salts that have different solubilities.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It selectively destroys the (-)-amine, leaving the (+)-amine untouched.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It acts as an achiral catalyst that speeds up the crystallization of one enantiomer.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It forms a covalent meso compound with both amines.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the chemical mechanism of resolving enantiomers via salt formation.",
      "process": "Step 1: Enantiomers cannot be separated by standard physical methods because they have identical physical properties.\nStep 2: Reacting a racemic mixture of amines, (\u00b1)-A, with a pure enantiomer of an acid, (+)-B, results in the formation of two salts: ((+)-A\u00b7(+)-B) and ((-)-A\u00b7(+)-B).\nStep 3: These two salts are diastereomers of each other (not mirror images). Because they are diastereomers, they have different solubilities, allowing them to be separated by selective recrystallization. The free amines are then recovered by adding a base.",
      "result": "Chiral resolving agents work by converting enantiomers into diastereomeric salts which possess different solubilities and can be separated by recrystallization."
    }
  },
  {
    "question_id": "ch5_q43_chiral_stationary_phase",
    "topic": "Racemic Mixtures & Resolution",
    "difficulty_level": "Hard",
    "question_text": "How does chiral HPLC (high-performance liquid chromatography) separate a racemic mixture of enantiomers without chemical modification?",
    "question_smiles": "CC(O)C",
    "options": [
      {
        "option_id": "A",
        "text": "The stationary phase is coated with a single pure enantiomer of a chiral selector, creating transient diastereomeric complexes with different binding affinities.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The mobile phase contains a chiral solvent that selectively dissolves one enantiomer.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The column packing contains a magnetic core that aligns one enantiomer.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The column physically separates enantiomers by their different molecular weights.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the physical principles of chromatographic resolution using a chiral stationary phase.",
      "process": "Step 1: In chiral HPLC, the column stationary phase is bonded to a single enantiomer of a chiral compound (the chiral selector).\nStep 2: When the racemic mixture passes through the column, each enantiomer interacts with the chiral selector. These interactions form transient, non-covalent diastereomeric complexes.\nStep 3: Because diastereomeric complexes have different stabilities and binding energies, one enantiomer binds more tightly and moves slower, while the other elutes faster, achieving separation.",
      "result": "Chiral HPLC separates enantiomers by utilizing a chiral stationary phase that forms diastereomeric complexes of differing stability with each enantiomer."
    }
  },
  {
    "question_id": "ch5_q44_kinetic_resolution_enzyme",
    "topic": "Racemic Mixtures & Resolution",
    "difficulty_level": "Hard",
    "question_text": "In a kinetic resolution of a racemic ester using a lipase enzyme, one enantiomer is hydrolyzed to an alcohol, while the other remains unreacted. What is the fundamental cause of this selectivity?",
    "question_smiles": "CC(OC(=O)C)C",
    "options": [
      {
        "option_id": "A",
        "text": "The transition states for the reaction of the two enantiomers with the chiral enzyme are diastereomeric and have different activation energies.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The enzyme is achiral and only reacts with the thermodynamic product.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "One enantiomer is a competitive inhibitor that permanently deactivates the enzyme.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The reaction is conducted under conditions where only one enantiomer is soluble in water.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the biochemical basis of kinetic resolution.",
      "process": "Step 1: Enzymes are chiral proteins that form chiral active sites.\nStep 2: When a racemic substrate binds to the active site, the transition states for the hydrolysis of the (R) and (S) enantiomers are diastereomeric.\nStep 3: Diastereomeric transition states have different free energies of activation ($\\Delta G^\\ddagger$). This causes one enantiomer to react much faster than the other, yielding selective hydrolysis.",
      "result": "Kinetic resolution relies on the difference in activation energy between the diastereomeric transition states formed when each enantiomer binds to the chiral enzyme."
    }
  },
  {
    "question_id": "ch5_q45_resolution_vs_separation",
    "topic": "Racemic Mixtures & Resolution",
    "difficulty_level": "Medium",
    "question_text": "Why is resolving enantiomers more difficult than separating diastereomers?",
    "question_smiles": "CC(O)C",
    "options": [
      {
        "option_id": "A",
        "text": "Enantiomers have identical physical properties in an achiral environment, whereas diastereomers have different physical properties.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Enantiomers are unstable and spontaneously explode when separated.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Diastereomers contain no carbon-carbon bonds, making them easier to break.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Enantiomers can only be separated by changing their elemental formula.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question compares the basic separation challenges of enantiomers vs. diastereomers.",
      "process": "Step 1: Diastereomers differ in their 3D shape and have different physical properties (boiling point, solubility, etc.). They can be separated by standard techniques like distillation.\nStep 2: Enantiomers are identical in all physical properties in an achiral environment. They have the same boiling point, melting point, density, and solubility in achiral solvents.\nStep 3: Consequently, separation of enantiomers (resolution) requires introducing a chiral environment (chiral auxiliary, chiral solvent, chiral column, or chiral resolving agent) to break the symmetry.",
      "result": "Enantiomers have identical physical properties in an achiral environment, making their resolution significantly more challenging than separating diastereomers."
    }
  },
  {
    "question_id": "ch5_q46_dimethylcyclohexane_1_2",
    "topic": "Stereocenters in Cycloalkanes",
    "difficulty_level": "Medium",
    "question_text": "Which of the following statements is correct regarding the isomerism of 1,2-dimethylcyclohexane?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The cis isomer is a meso compound, and the trans isomer is a pair of enantiomers.",
        "smiles": "C1CC[C@@H](C)[C@@H](C)C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The cis isomer is chiral, and the trans isomer is a meso compound.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both the cis and trans isomers are meso compounds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both the cis and trans isomers are chiral and can be resolved.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests stereochemical relationships in 1,2-disubstituted cycloalkanes.",
      "process": "Step 1: Identify the stereocenters in 1,2-dimethylcyclohexane. They are C1 and C2.\nStep 2: Analyze cis-1,2-dimethylcyclohexane. Although the chair conformations are chiral, they interconvert rapidly by ring flipping. The time-averaged structure (or planar representation) has a plane of symmetry, making it an achiral meso compound.\nStep 3: Analyze trans-1,2-dimethylcyclohexane. It has no plane of symmetry or center of inversion. It exists as a pair of non-superimposable, stable enantiomers: (1R,2R) and (1S,2S).",
      "result": "For 1,2-dimethylcyclohexane, the cis isomer is a meso compound and the trans isomer exists as a pair of resolvable enantiomers."
    }
  },
  {
    "question_id": "ch5_q47_conformational_enantiomers",
    "topic": "Stereocenters in Cycloalkanes",
    "difficulty_level": "Hard",
    "question_text": "At -100 degrees Celsius, ring flipping in cis-1,2-dimethylcyclohexane is frozen. What would be observed under these conditions?",
    "question_smiles": "C1CC[C@@H](C)[C@@H](C)C1",
    "options": [
      {
        "option_id": "A",
        "text": "The mixture can be resolved into two stable, chiral enantiomers.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The compound remains an achiral, homogeneous meso compound.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The molecule decomposes into 1,2-dimethylcyclohexene.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The conformation changes to a planar structure to maintain symmetry.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests how temperature-dependent conformational mobility affects chirality and resolution.",
      "process": "Step 1: At room temperature, the two chair conformations of cis-1,2-dimethylcyclohexane interconvert rapidly. These conformations are enantiomers of each other.\nStep 2: At very low temperatures (like -100 \u00b0C), the thermal energy is insufficient to overcome the barrier for the chair flip, freezing the conformations.\nStep 3: This stops the interconversion, locking the molecules into their individual chiral chair forms. Under these conditions, the two enantiomers can theoretically be resolved and would rotate plane-polarized light.",
      "result": "Freezing the ring flip of cis-1,2-dimethylcyclohexane at low temperatures allows the isolation of the two stable, chiral chair conformers as enantiomers."
    }
  },
  {
    "question_id": "ch5_q48_dimethylcyclohexane_1_3",
    "topic": "Stereocenters in Cycloalkanes",
    "difficulty_level": "Medium",
    "question_text": "Which of the following statements is correct regarding the stereoisomers of 1,3-dimethylcyclohexane?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The cis isomer is a meso compound, and the trans isomer is a pair of enantiomers.",
        "smiles": "C1CC[C@@H](C)C[C@@H](C)1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The trans isomer is a meso compound, and the cis isomer is a pair of enantiomers.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both cis and trans isomers are chiral and can be resolved.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both cis and trans isomers are achiral.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests stereochemical relationships in 1,3-disubstituted cycloalkanes.",
      "process": "Step 1: Identify the stereocenters in 1,3-dimethylcyclohexane. They are C1 and C3.\nStep 2: Analyze cis-1,3-dimethylcyclohexane. In the diequatorial conformation, a plane of symmetry passes directly through C2 and C5. Thus, the cis isomer has a plane of symmetry and is a meso compound.\nStep 3: Analyze trans-1,3-dimethylcyclohexane. The two methyl groups must be cis-trans relative to one another (one axial, one equatorial). This conformation lacks a plane of symmetry. It exists as a pair of enantiomers: (1R,3R) and (1S,3S).",
      "result": "For 1,3-dimethylcyclohexane, the cis isomer is meso because it has a plane of symmetry, and the trans isomer is chiral."
    }
  },
  {
    "question_id": "ch5_q49_dimethylcyclohexane_1_4",
    "topic": "Stereocenters in Cycloalkanes",
    "difficulty_level": "Hard",
    "question_text": "Why are both the cis and trans isomers of 1,4-dimethylcyclohexane achiral (optically inactive)?",
    "question_smiles": "CC1CCC(C)CC1",
    "options": [
      {
        "option_id": "A",
        "text": "The molecules possess planes of symmetry, and C1 and C4 are not asymmetric stereocenters.",
        "smiles": "CC1CCC(C)CC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "They undergo rapid racemization via carbon-carbon bond cleavage.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "They exist as a pair of diastereomers that cancel each other's rotation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The methyl groups are placed 180 degrees apart, which destroys all carbons.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the criteria for asymmetric carbons and overall molecular chirality in 1,4-disubstituted cyclohexanes.",
      "process": "Step 1: Examine C1 and C4 of 1,4-dimethylcyclohexane. For a carbon to be an asymmetric stereocenter, it must be bonded to four different groups.\nStep 2: C1 is bonded to: 1) $-CH_3$, 2) $-H$, 3) the C2-C3 path around the ring, and 4) the C6-C5 path around the ring. Since the path from C1 to C4 is identical in both directions (C1-C2-C3-C4 vs C1-C6-C5-C4), paths 3 and 4 are identical.\nStep 3: Consequently, C1 and C4 are not stereocenters. Both the cis and trans isomers have planes of symmetry passing through C1 and C4 and contain no stereocenters, making them achiral.",
      "result": "Both cis and trans isomers of 1,4-dimethylcyclohexane are achiral because they possess planes of symmetry and lack asymmetric carbons."
    }
  },
  {
    "question_id": "ch5_q50_cyclopropane_isomers",
    "topic": "Stereocenters in Cycloalkanes",
    "difficulty_level": "Hard",
    "question_text": "How many stereoisomers exist for 1-bromo-2-chlorocyclopropane?",
    "question_smiles": "C1[C@@H](Br)[C@H](Cl)1",
    "options": [
      {
        "option_id": "A",
        "text": "4",
        "smiles": "C1[C@@H](Br)[C@H](Cl)1",
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
        "text": "2",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "8",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the number of stereoisomers for an unsymmetrically disubstituted cyclic system.",
      "process": "Step 1: Identify the stereocenters. The stereocenters are C1 (bonded to Br, H, and ring paths) and C2 (bonded to Cl, H, and ring paths).\nStep 2: Evaluate the symmetry of the molecule. Because the two substituents are different (Br and Cl), the molecule is unsymmetrical. There is no plane of symmetry in any isomer (neither cis nor trans).\nStep 3: Apply the $2^n$ rule where $n = 2$: $2^2 = 4$ stereoisomers. This corresponds to a pair of cis enantiomers: ((1R,2S) and (1S,2R)) and a pair of trans enantiomers: ((1R,2R) and (1S,2S)).",
      "result": "There are 4 stereoisomers of 1-bromo-2-chlorocyclopropane since there are two stereocenters and no internal symmetry is possible."
    }
  },
  {
    "question_id": "ch5_q_dynamic_rs_assign",
    "topic": "Stereochemistry: R/S Configurations",
    "difficulty_level": "Hard",
    "question_text": "Identify the stereocenter configurations for the following chiral molecules.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C[C@@H](O)C(=O)O",
        "correctAnswer": "S-Lactic Acid"
      },
      {
        "smiles": "C[C@H](O)C(=O)O",
        "correctAnswer": "R-Lactic Acid"
      },
      {
        "smiles": "N[C@@H](C)C(=O)O",
        "correctAnswer": "S-Alanine"
      },
      {
        "smiles": "N[C@H](C)C(=O)O",
        "correctAnswer": "R-Alanine"
      }
    ],
    "match_options": [
      "S-Lactic Acid",
      "R-Lactic Acid",
      "S-Alanine",
      "R-Alanine",
      "Meso-Tartaric Acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect R/S assignments",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Assigning Cahn-Ingold-Prelog priorities to configure stereocenters.",
      "process": "For lactic acid, -OH is 1, -COOH is 2, -CH3 is 3, -H is 4. If the lowest priority group H is on a wedge, reverse configuration. This correctly yields S for C@@H and R for C@H.",
      "result": "Stereocenter configurations assigned."
    }
  }
];
