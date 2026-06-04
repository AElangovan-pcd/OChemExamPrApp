// ACS Organic Chemistry Exam Preparation - ACS: Synthesis & Qualitative Analysis
const CHAPTER_32_QUESTIONS = [
  {
    "question_id": "ch32_acs_q1_synthesis_bromobenzoic",
    "topic": "ACS: Synthesis & Qualitative Analysis",
    "difficulty_level": "Hard",
    "question_text": "Choose the best reaction sequence to synthesize m-bromobenzoic acid starting from toluene.",
    "question_smiles": "Cc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "1) KMnO4, NaOH, heat; 2) H3O+; 3) Br2, FeBr3",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1) Br2, FeBr3; 2) KMnO4, NaOH, heat; 3) H3O+",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1) Br2, light; 2) Mg, ether; 3) CO2, then H3O+",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1) HNO3, H2SO4; 2) Br2, FeBr3; 3) H2, Pd/C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Designing multi-step aromatic synthesis by controlling directing effects of substituents.",
      "process": "Step 1: Toluene has a methyl group (-CH3) which is ortho/para directing. Brominating first (choice B) would place bromine at the ortho/para positions.\nStep 2: Oxidation of toluene with KMnO4 yields benzoic acid, which has a carboxylic acid group (-COOH).\nStep 3: The -COOH group is a meta-director. Subsequent bromination of benzoic acid yields m-bromobenzoic acid.",
      "result": "The correct sequence is oxidation first, followed by bromination."
    }
  },
  {
    "question_id": "ch32_acs_q2_lucas",
    "topic": "ACS: Synthesis & Qualitative Analysis",
    "difficulty_level": "Easy",
    "question_text": "Which of the following alcohols reacts fastest with the Lucas reagent (HCl/ZnCl2) at room temperature to form an insoluble alkyl chloride?",
    "question_smiles": "CC(C)(O)C.CC(C)O.CCCO",
    "options": [
      {
        "option_id": "A",
        "text": "t-Butyl alcohol (tertiary)",
        "smiles": "CC(C)(O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Isopropyl alcohol (secondary)",
        "smiles": "CC(C)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-propanol (primary)",
        "smiles": "CCCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methanol",
        "smiles": "CO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Applying qualitative tests (Lucas test) to distinguish between alcohol classes based on carbocation stability.",
      "process": "Step 1: Lucas reagent converts alcohols to alkyl chlorides via an SN1 mechanism.\nStep 2: The rate-determining step is the formation of a carbocation.\nStep 3: Tertiary alcohols (like t-butyl alcohol) form highly stable tertiary carbocations and react almost instantly (turbidity within seconds).\nStep 4: Secondary alcohols take 5-10 minutes, and primary alcohols do not react at room temperature.",
      "result": "t-Butyl alcohol reacts fastest."
    }
  },
  {
    "question_id": "ch32_acs_q3_tollens",
    "topic": "ACS: Synthesis & Qualitative Analysis",
    "difficulty_level": "Easy",
    "question_text": "Which of the following compounds gives a positive Tollens' test (formation of a silver mirror)?",
    "question_smiles": "O=CC1=CC=CC=C1.CC(=O)C1=CC=CC=C1.O=C1CCCCC1.CCOCC",
    "options": [
      {
        "option_id": "A",
        "text": "Benzaldehyde (an aldehyde)",
        "smiles": "O=CC1=CC=CC=C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetophenone (a ketone)",
        "smiles": "CC(=O)C1=CC=CC=C1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclohexanone (a ketone)",
        "smiles": "O=C1CCCCC1",
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
      "context": "Using Tollens' test to distinguish aldehydes from ketones based on oxidation susceptibility.",
      "process": "Step 1: Tollens' reagent [Ag(NH3)2+] is a mild oxidizing agent that selectively oxidizes aldehydes to carboxylate ions.\nStep 2: During this oxidation, Ag+ is reduced to metallic silver (Ag0), which deposits on the glass forming a silver mirror.\nStep 3: Ketones and ethers are not oxidized by Tollens' reagent, giving a negative test. Benzaldehyde is an aldehyde and yields a positive test.",
      "result": "Benzaldehyde gives a positive Tollens' test."
    }
  },
  {
    "question_id": "ch32_acs_q4_synthesis_aniline",
    "topic": "ACS: Synthesis & Qualitative Analysis",
    "difficulty_level": "Medium",
    "question_text": "Choose the best reaction sequence to synthesize aniline starting from benzene.",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "1) HNO3, H2SO4; 2) Fe, HCl, then NaOH",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1) NH3, heat; 2) H2, Pd/C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1) Cl2, FeCl3; 2) NaNH2, liquid NH3",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1) KMnO4, NaOH; 2) NH3, DCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Applying electrophilic aromatic substitution and subsequent functional group reductions.",
      "process": "Step 1: Benzene cannot undergo nucleophilic attack directly by ammonia. Thus, direct amination (choice B) is impossible.\nStep 2: Nitration of benzene using HNO3/H2SO4 introduces a nitro group, forming nitrobenzene.\nStep 3: Reduction of the nitro group to an amino group is standardly performed using iron (Fe) or tin (Sn) in acid, followed by basic workup to deprotonate the ammonium salt, yielding aniline.",
      "result": "The correct sequence is nitration followed by reduction."
    }
  },
  {
    "question_id": "ch32_acs_q5_acetoacetate_synthesis",
    "topic": "ACS: Synthesis & Qualitative Analysis",
    "difficulty_level": "Hard",
    "question_text": "A student wants to synthesize ethyl 2-methylacetoacetate starting from ethyl acetoacetate. Which reaction sequence is the most appropriate?",
    "question_smiles": "CCOC(=O)CC(=O)C",
    "options": [
      {
        "option_id": "A",
        "text": "1) NaOEt, EtOH; 2) CH3I",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1) LDA, THF, -78 C; 2) CH3I",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1) NaOH, H2O; 2) CH3I",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1) H3O+, heat; 2) CH3I",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Choosing the correct base and conditions for selective alkylation of beta-keto esters.",
      "process": "Step 1: The protons on the central methylene carbon (C2) of ethyl acetoacetate are highly acidic (pKa ~ 11) because the resulting enolate is stabilized by two adjacent carbonyls.\nStep 2: Sodium ethoxide (NaOEt) in ethanol is a strong enough base to completely deprotonate this position, without hydrolyzing the ester (using NaOH would cause ester hydrolysis).\nStep 3: Subsequent addition of iodomethane (CH3I) alkylates C2 to yield ethyl 2-methylacetoacetate.",
      "result": "The correct sequence is sodium ethoxide followed by iodomethane."
    }
  },
  {
    "question_id": "ch32_acs_q6_tests",
    "topic": "ACS: Synthesis & Qualitative Analysis",
    "difficulty_level": "Easy",
    "question_text": "Which simple chemical test can be used to distinguish cyclohexene from cyclohexane?",
    "question_smiles": "C1CCC=CC1.C1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Decolorization of bromine water (Br2/H2O) without the release of hydrogen bromide gas.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Tollens' test (silver mirror formation).",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Lucas test (formation of insoluble chloride).",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Addition of sodium metal.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Using qualitative organic tests to identify functional groups.",
      "process": "Step 1: Cyclohexene is an alkene. Cyclohexane is an alkane.\nStep 2: Bromine adds across the double bond of cyclohexene, decolorizing the brown bromine solution instantly.\nStep 3: Alkanes do not react with bromine in the dark without radical initiators.",
      "result": "Decolorization of bromine water distinguishes the alkene."
    }
  },
  {
    "question_id": "ch32_acs_q7_iodoform_ketone",
    "topic": "ACS: Synthesis & Qualitative Analysis",
    "difficulty_level": "Easy",
    "question_text": "Which ketone yields a positive iodoform test (yellow precipitate of CHI3) upon treatment with iodine in aqueous sodium hydroxide?",
    "question_smiles": "CC(=O)CCC.CCC(=O)CC",
    "options": [
      {
        "option_id": "A",
        "text": "2-pentanone",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-pentanone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclohexanone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzophenone",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Applying the qualitative iodoform test to identify methyl ketones.",
      "process": "Step 1: The iodoform test is positive for methyl ketones (R-CO-CH3).\nStep 2: 2-pentanone contains a methyl group attached directly to the carbonyl carbon.\nStep 3: 3-pentanone has ethyl groups on both sides of the carbonyl and is negative.",
      "result": "2-pentanone yields a positive iodoform test."
    }
  },
  {
    "question_id": "ch32_acs_q8_hinsberg",
    "topic": "ACS: Synthesis & Qualitative Analysis",
    "difficulty_level": "Medium",
    "question_text": "A student treats an unknown amine with benzenesulfonyl chloride in aqueous base (Hinsberg test). A clear solution forms, which yields a precipitate upon acidification. What class of amine is the unknown?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Primary amine",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Secondary amine",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Tertiary amine",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Quaternary ammonium salt",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Interpreting the Hinsberg test to classify amines.",
      "process": "Step 1: Primary amines react with benzenesulfonyl chloride to form a sulfonamide with an acidic N-H proton, which dissolves in base as a soluble salt (clear solution).\nStep 2: Acidification protonates it back, causing precipitation.\nStep 3: Secondary amines form insoluble precipitates in both base and acid, while tertiary amines do not react and remain insoluble in base.",
      "result": "The unknown is a primary amine."
    }
  },
  {
    "question_id": "ch32_acs_q9_williamson",
    "topic": "ACS: Synthesis & Qualitative Analysis",
    "difficulty_level": "Medium",
    "question_text": "Which reaction sequence is best suited to synthesize diethyl ether starting from ethanol?",
    "question_smiles": "CCO",
    "options": [
      {
        "option_id": "A",
        "text": "1) Na metal; 2) Ethyl bromide (Williamson ether synthesis)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1) H2SO4, 180 °C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1) PCC; 2) ethylmagnesium bromide",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1) NaOH; 2) Ethyl chloride",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Designing ether synthesis reactions.",
      "process": "Step 1: Treating ethanol with sodium metal deprotonates it to form sodium ethoxide.\nStep 2: Adding ethyl bromide (a primary halide) drives an SN2 substitution where ethoxide nucleophilically attacks ethyl bromide.\nStep 3: This yields diethyl ether (Williamson ether synthesis). NaOH is not strong enough to deprotonate ethanol.",
      "result": "Williamson ether synthesis is the best route."
    }
  },
  {
    "question_id": "ch32_acs_q10_chromic",
    "topic": "ACS: Synthesis & Qualitative Analysis",
    "difficulty_level": "Easy",
    "question_text": "An unknown compound gives a positive chromic acid test (Jones oxidation, turning from orange-red to blue-green) within 2 seconds. Which functional group is NOT consistent with this result?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Tertiary alcohol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Primary alcohol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Secondary alcohol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Aldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Using the chromic acid (Jones) test to identify oxidizable functional groups.",
      "process": "Step 1: Chromic acid is a strong oxidizing agent.\nStep 2: It oxidizes primary alcohols, secondary alcohols, and aldehydes, changing from Cr(VI) (orange) to Cr(III) (blue-green).\nStep 3: Tertiary alcohols cannot be oxidized because they have no alpha-hydrogens, resulting in a negative test (no color change).",
      "result": "A tertiary alcohol is not consistent with a positive chromic acid test."
    }
  }
,
  {
    "question_id": "ch32_acs_q11_alkyne_alkylation",
    "topic": "ACS: Synthesis & Qual",
    "difficulty_level": "Hard",
    "question_text": "What is the major product of this reaction sequence?",
    "image": "images/sa1_synthesis_scheme.png",
    "options": [
      {"option_id": "A", "text": "(Z)-1-phenyl-1-pentene", "is_correct": true},
      {"option_id": "B", "text": "1-phenylpentane", "is_correct": false},
      {"option_id": "C", "text": "(E)-1-phenyl-1-pentene", "is_correct": false},
      {"option_id": "D", "text": "(Z)-4-methyl-1-phenyl-1-pentene", "is_correct": false}
    ],
    "feedback": {
      "context": "Analyzing multi-step synthesis pathways involving alkyne alkylation and stereoselective reduction.",
      "process": "Step 1: Phenylacetylene (C6H5-C#CH) is treated with a strong base, sodium amide (NaNH2), to deprotonate the terminal alkyne, forming a nucleophilic sodium acetylide organometallic species.\nStep 2: The acetylide anion undergoes an SN2 substitution with 1-bromopropane (CH3CH2CH2Br) to yield 1-phenyl-1-pentyne (C6H5-C#C-CH2CH2CH3).\nStep 3: The internal alkyne is reduced via catalytic hydrogenation in the presence of Lindlar's catalyst (a deactivated palladium catalyst). Lindlar's catalyst selectively reduces alkynes to alkenes via a stereospecific syn-addition of hydrogen, resulting in the cis-alkene, (Z)-1-phenyl-1-pentene.",
      "result": "The major product is (Z)-1-phenyl-1-pentene."
    }
  }
]];
