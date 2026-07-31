// McMurry Chapter 18 questions
const CHAPTER_18_QUESTIONS = [
  {
    "question_id": "ch18_q1_ethanol_1hnmr",
    "topic": "Spectroscopy (SDBS/ChemicalBook)",
    "difficulty_level": "Medium",
    "question_text": "Below is the $^1\\text{H}$ NMR spectrum of an organic compound with molecular formula $C_2H_6O$ from AIST-SDBS. Identify the compound.\\n<img src='https://www.chemicalbook.com/Spectrum/64-17-5_1HNMR.gif' class='spectroscopy-img' />",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Ethanol",
        "smiles": "CCO",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Dimethyl ether",
        "smiles": "COC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetaldehyde",
        "smiles": "CC=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethylene glycol",
        "smiles": "OCCO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the interpretation of a basic 1H NMR spectrum for a simple molecule.",
      "process": "Step 1: The molecular formula $C_2H_6O$ has a degree of unsaturation (Index of Hydrogen Deficiency, IHD) of 0. Thus, there are no double bonds or rings.\nStep 2: Examine the splitting patterns. The spectrum shows a triplet at $1.2\\text{ ppm}$ integrating to $3\\text{H}$ (typical for a methyl group next to a $CH_2$), a broad singlet at $2.6\\text{ ppm}$ integrating to $1\\text{H}$ (typical for an alcohol $OH$ proton), and a quartet at $3.7\\text{ ppm}$ integrating to $2\\text{H}$ (typical for a $CH_2$ group next to a methyl and bonded to an electronegative oxygen atom).\nStep 3: Combine these fragments: $-CH_3$ (triplet) and $-CH_2-$ (quartet) form an ethyl group, $-CH_2-CH_3$. The oxygen is present as a hydroxyl group $-OH$. This corresponds uniquely to ethanol.",
      "result": "The compound is ethanol ($CCO$). The triplet-quartet coupling pattern is a classic indicator of an ethyl group bonded to an oxygen."
    }
  },
  {
    "question_id": "ch18_q2_toluene_13cnmr",
    "topic": "Spectroscopy (SDBS/ChemicalBook)",
    "difficulty_level": "Medium",
    "question_text": "Below is the $^{13}\\text{C}$ NMR spectrum of a hydrocarbon with molecular formula $C_7H_8$ from SDBS. How many signals are observed in the $sp^2$ aromatic region, and what is the identity of this compound?\\n<img src='https://www.chemicalbook.com/Spectrum/108-88-3_13CNMR.gif' class='spectroscopy-img' />",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Toluene: 4 $sp^2$ signals and 1 $sp^3$ signal",
        "smiles": "Cc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Toluene: 5 $sp^2$ signals and 1 $sp^3$ signal",
        "smiles": "Cc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cycloheptatriene: 3 $sp^2$ signals and 1 $sp^3$ signal",
        "smiles": "C1=CC=CCC=C1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "o-Xylene: 3 $sp^2$ signals and 2 $sp^3$ signals",
        "smiles": "Cc1ccccc1C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question requires analyzing carbon-13 chemical shifts and molecular symmetry to deduce structure.",
      "process": "Step 1: Calculate IHD for $C_7H_8$. $\\text{IHD} = 7 - 8/2 + 1 = 4$. This is highly indicative of a benzene ring (1 ring + 3 double bonds = 4 unsaturations).\nStep 2: Determine carbon types from the spectrum. There is one peak in the aliphatic region ($~21\\text{ ppm}$) corresponding to a methyl carbon ($sp^3$). There are four distinct peaks in the aromatic region ($120-140\\text{ ppm}$), representing the benzene ring carbons.\nStep 3: Evaluate symmetry. A mono-substituted benzene ring (like toluene) has a plane of symmetry passing through C1 and C4. Thus, C1 is unique (1 signal), C2 and C6 are equivalent (1 signal), C3 and C5 are equivalent (1 signal), and C4 is unique (1 signal). This yields a total of 4 distinct $sp^2$ aromatic signals, plus 1 $sp^3$ signal for the methyl group.",
      "result": "The compound is toluene, displaying 4 aromatic signals and 1 methyl signal."
    }
  },
  {
    "question_id": "ch18_q3_benzaldehyde_ir",
    "topic": "Spectroscopy (SDBS/ChemicalBook)",
    "difficulty_level": "Medium",
    "question_text": "Analyze the Fourier Transform Infrared (FT-IR) spectrum below of a compound with the formula $C_7H_6O$ from SDBS. Note the sharp peak near $1701\\text{ cm}^{-1}$ and the doublet near $2730$ and $2820\\text{ cm}^{-1}$. Identify the functional group and compound.\\n<img src='https://www.chemicalbook.com/Spectrum/100-52-7_IR1.gif' class='spectroscopy-img' />",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Benzaldehyde (aldehyde carbonyl + Fermi doublet)",
        "smiles": "O=Cc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzyl alcohol (alcohol O-H stretch)",
        "smiles": "OCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetophenone (ketone carbonyl stretch)",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyl benzoate (ester carbonyl stretch)",
        "smiles": "COC(=O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests functional group identification using IR spectroscopy signature bands.",
      "process": "Step 1: Identify the main bands in the IR spectrum. The peak at $1701\\text{ cm}^{-1}$ is a strong, sharp stretch characteristic of a carbonyl group ($C=O$). The frequency is slightly lower than aliphatic aldehydes due to conjugation with the benzene ring.\nStep 2: Identify the bands at $2730$ and $2820\\text{ cm}^{-1}$. This pair of moderate intensity bands is the Fermi doublet, which arises from the interaction between the aldehyde $C-H$ stretch and the overtone of the aldehyde $C-H$ bending vibration. This is a definitive signature for an aldehyde group.\nStep 3: Match the formula $C_7H_6O$ with a conjugated aldehyde. Benzaldehyde has a benzene ring ($C_6H_5-$) and an aldehyde group ($-CHO$), which perfectly fits the formula $C_7H_6O$.",
      "result": "The spectrum represents benzaldehyde, characterized by the conjugated carbonyl stretch and the unique Fermi doublet."
    }
  },
  {
    "question_id": "ch18_q4_isopropanol_1hnmr",
    "topic": "Spectroscopy (SDBS/ChemicalBook)",
    "difficulty_level": "Medium",
    "question_text": "A compound with molecular formula $C_3H_8O$ shows the following $^1\\text{H}$ NMR spectrum from ChemicalBook. Identify the compound based on the characteristic doublet at $1.2\\text{ ppm}$ ($6\\text{H}$), septet at $4.0\\text{ ppm}$ ($1\\text{H}$), and broad singlet at $2.2\\text{ ppm}$ ($1\\text{H}$).\\n<img src='https://www.chemicalbook.com/Spectrum/67-63-0_1HNMR_0.jpg' class='spectroscopy-img' />",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Isopropanol (2-propanol)",
        "smiles": "CC(C)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Propanol",
        "smiles": "CCCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethyl methyl ether",
        "smiles": "COCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propylene glycol",
        "smiles": "CC(O)CO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question asks you to identify an alcohol based on splitting patterns and integrations in 1H NMR.",
      "process": "Step 1: Analyze the integrations. The signal at $1.2\\text{ ppm}$ integrates to $6\\text{H}$, representing two equivalent methyl groups ($-CH_3$). Its doublet splitting indicates these methyls are adjacent to a single proton ($CH$).\nStep 2: Analyze the septet. The multiplet at $4.0\\text{ ppm}$ integrates to $1\\text{H}$, which is a methine proton ($-CH-$). Its splitting into a septet confirms it has 6 neighboring protons (the two methyl groups: $n+1 = 6+1 = 7$). Its downfield shift (~4.0 ppm) indicates it is directly attached to the oxygen.\nStep 3: The singlet at $2.2\\text{ ppm}$ ($1\\text{H}$) represents the $-OH$ proton, which does not couple due to rapid proton exchange. This pattern corresponds to 2-propanol.",
      "result": "The compound is isopropanol (2-propanol). The $6\\text{H}$ doublet and $1\\text{H}$ septet represent an isopropyl group, $(CH_3)_2CH-$."
    }
  },
  {
    "question_id": "ch18_q5_ethanol_ms",
    "topic": "Spectroscopy (SDBS/ChemicalBook)",
    "difficulty_level": "Hard",
    "question_text": "The Electron Impact Mass Spectrum (EI-MS) below of a small alcohol shows the molecular ion peak at $m/z = 46$ and a base peak at $m/z = 31$. Which fragment represents the base peak, and what is the alcohol?\\n<img src='https://www.chemicalbook.com/Spectrum/64-17-5_MS.gif' class='spectroscopy-img' />",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The oxocarbenium ion ($[CH_2=OH]^+$) from Ethanol",
        "smiles": "[CH2+]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The methoxy radical cation ($[CH_3-O]^{\\bullet+}$) from Dimethyl ether",
        "smiles": "[O+]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The ethyl radical ($[CH_3-CH_2]^{\\bullet+}$) from Ethanol",
        "smiles": "[CH2+]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The acetyl cation ($[CH_3-C=O]^+$) from Acetaldehyde",
        "smiles": "[CH3+]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the understanding of fragmentation mechanisms in mass spectrometry, specifically $\\alpha$-cleavage of alcohols.",
      "process": "Step 1: Identify the molecular weight of the alcohol. The molecular ion $M^+$ is at $m/z = 46$, which corresponds to the molecular formula $C_2H_6O$ (Ethanol = 46 g/mol).\nStep 2: Analyze the primary fragmentation of primary alcohols. Primary alcohols undergo $\\alpha$-cleavage, where the bond between the $\\alpha$-carbon (bearing the hydroxyl group) and the adjacent $\\beta$-carbon is cleaved. For ethanol, this involves loss of a methyl radical ($\\cdot CH_3$, mass 15).\nStep 3: Calculate the resulting ion mass: $M - 15 = 46 - 15 = 31$. The resulting cation is stabilized by resonance: $[H_2C-OH]^+ \\leftrightarrow [H_2C=O^+-H]$. This resonance-stabilized oxocarbenium ion is highly stable, giving rise to the base peak at $m/z = 31$.",
      "result": "The base peak at $m/z = 31$ represents the resonance-stabilized oxocarbenium ion ($[CH_2=OH]^+$) formed via $\\alpha$-cleavage of ethanol."
    }
  },
  {
    "question_id": "ch18_q6_benzoic_acid_ir",
    "topic": "Spectroscopy (SDBS/ChemicalBook)",
    "difficulty_level": "Medium",
    "question_text": "An organic compound with formula $C_7H_6O_2$ has the following FT-IR spectrum from SDBS. Note the extremely broad absorption band extending from $2500\\text{ to }3300\\text{ cm}^{-1}$ and the strong band at $1685\\text{ cm}^{-1}$. Identify the compound.\\n<img src='https://www.chemicalbook.com/Spectrum/65-85-0_IR1.gif' class='spectroscopy-img' />",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Benzoic acid (carboxylic acid O-H and C=O stretches)",
        "smiles": "O=C(O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzyl alcohol (alcohol O-H stretch)",
        "smiles": "OCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzaldehyde (aldehyde carbonyl stretch)",
        "smiles": "O=Cc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyl benzoate (ester carbonyl stretch)",
        "smiles": "COC(=O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question focuses on diagnosing a carboxylic acid functional group using key IR bands.",
      "process": "Step 1: Analyze the unsaturation. For $C_7H_6O_2$, $\\text{IHD} = 7 - 6/2 + 1 = 5$, indicating a benzene ring (4) + a double bond (1).\nStep 2: Examine the IR regions. The extremely broad, jagged absorption band spanning $2500-3300\\text{ cm}^{-1}$ is characteristic of a carboxylic acid $O-H$ stretching vibration, which is broadened significantly by strong dimeric hydrogen bonding.\nStep 3: Look for the carbonyl stretch. The intense peak at $1685\\text{ cm}^{-1}$ corresponds to the carbonyl group ($C=O$), conjugated with the aromatic ring. These two features together uniquely indicate a carboxylic acid. Conjugated benzoic acid matches the formula $C_7H_6O_2$.",
      "result": "The spectrum represents benzoic acid, with the broad carboxylic acid O-H stretch overlapping the C-H region, and a conjugated carbonyl peak."
    }
  },
  {
    "question_id": "ch18_q7_ethyl_acetate_1hnmr",
    "topic": "Spectroscopy (SDBS/ChemicalBook)",
    "difficulty_level": "Medium",
    "question_text": "An ester with molecular formula $C_4H_8O_2$ exhibits the following $^1\\text{H}$ NMR spectrum from ChemicalBook. Identify the compound that gives a triplet at $1.25\\text{ ppm}$ ($3\\text{H}$), singlet at $2.0\\text{ ppm}$ ($3\\text{H}$), and quartet at $4.1\\text{ ppm}$ ($2\\text{H}$).\\n<img src='https://www.chemicalbook.com/Spectrum/141-78-6_1HNMR.gif' class='spectroscopy-img' />",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Ethyl acetate",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methyl propanoate",
        "smiles": "CCC(=O)OC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Propyl formate",
        "smiles": "CCCOC=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Isopropyl formate",
        "smiles": "CC(C)OC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question requires matching splitting patterns, chemical shifts, and integrations to identify an ester isomer.",
      "process": "Step 1: The molecular formula $C_4H_8O_2$ has $\\text{IHD} = 1$, representing a carbonyl group ($C=O$).\nStep 2: Deconstruct the NMR signals. The singlet at $2.0\\text{ ppm}$ ($3\\text{H}$) represents an isolated methyl group adjacent to a carbonyl: $CH_3-C(=O)-$. The triplet at $1.25\\text{ ppm}$ ($3\\text{H}$) and quartet at $4.1\\text{ ppm}$ ($2\\text{H}$) represent an ethyl group bonded to an oxygen: $-O-CH_2-CH_3$. The significant downfield shift of the quartet ($4.1\\text{ ppm}$) confirms the $CH_2$ is directly bonded to the highly electronegative ester oxygen.\nStep 3: Assemble the pieces: $CH_3-C(=O)-O-CH_2-CH_3$, which is ethyl acetate.",
      "result": "The compound is ethyl acetate, characterized by the acetyl singlet at 2.0 ppm and the ethyl ester quartet/triplet pair."
    }
  },
  {
    "question_id": "ch18_q8_acetone_13cnmr",
    "topic": "Spectroscopy (SDBS/ChemicalBook)",
    "difficulty_level": "Medium",
    "question_text": "An organic solvent with molecular formula $C_3H_6O$ has the following $^{13}\\text{C}$ NMR spectrum from ChemicalBook. Note the signals at $31\\text{ ppm}$ and $206\\text{ ppm}$. Identify the compound.\\n<img src='https://www.chemicalbook.com/Spectrum/67-64-1_13CNMR_0.jpg' class='spectroscopy-img' />",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Acetone (propanone)",
        "smiles": "CC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propanal",
        "smiles": "CCC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Allyl alcohol",
        "smiles": "C=CCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propylene oxide",
        "smiles": "CC1CO1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests interpretation of carbon-13 chemical shifts and symmetry.",
      "process": "Step 1: Check the formula and symmetry. $C_3H_6O$ with $\\text{IHD} = 1$. The 13C NMR spectrum has only two peaks. This indicates the compound has symmetry, meaning two of the three carbons are equivalent.\nStep 2: Analyze the chemical shifts. The peak at $31\\text{ ppm}$ is in the $sp^3$ region and corresponds to equivalent methyl carbons. The peak at $206\\text{ ppm}$ is extremely downfield, characteristic of a ketone or aldehyde carbonyl carbon.\nStep 3: Match the shifts and symmetry: a symmetric ketone with three carbons must have the carbonyl in the center and two methyl groups on the sides. This is acetone ($CH_3-C(=O)-CH_3$).",
      "result": "The compound is acetone. The 206 ppm peak represents the ketone carbonyl, and the 31 ppm peak represents the two equivalent methyl carbons."
    }
  },
  {
    "question_id": "ch18_q9_cyclohexanone_raman",
    "topic": "Spectroscopy (SDBS/ChemicalBook)",
    "difficulty_level": "Hard",
    "question_text": "The Laser Raman spectrum of cyclohexanone ($C_6H_{10}O$) from SDBS is shown below. Note the strong Raman scattering peak at $1711\\text{ cm}^{-1}$. What molecular vibration does this peak correspond to?\\n<img src='https://www.chemicalbook.com/Spectrum/108-94-1_Raman.gif' class='spectroscopy-img' />",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "$C=O$ carbonyl stretching vibration",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$C-H$ stretching vibration",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$C-C$ skeletal ring breathing vibration",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$C-O$ single bond stretching vibration",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question links Infrared and Raman spectroscopy frequencies for carbonyl groups.",
      "process": "Step 1: Raman spectroscopy measures the scattering of light due to changes in molecular polarizability during vibration.\nStep 2: Carbonyl groups ($C=O$), while highly polar and active in IR, also undergo significant changes in bond polarizability during stretching, making them Raman active as well.\nStep 3: The frequency of $1711\\text{ cm}^{-1}$ is the exact stretching frequency of an aliphatic six-membered ring ketone ($C=O$ stretch), which matches cyclohexanone.",
      "result": "The peak at $1711\\text{ cm}^{-1}$ in the Raman spectrum represents the $C=O$ carbonyl stretching vibration of cyclohexanone."
    }
  },
  {
    "question_id": "ch18_q10_aniline_esr",
    "topic": "Spectroscopy (SDBS/ChemicalBook)",
    "difficulty_level": "Hard",
    "question_text": "The Electron Spin Resonance (ESR/EPR) spectrum below represents the radical cation of aniline ($C_6H_7N$), from SDBS. Which nuclei in the aniline radical cation are primary sources of the isotropic hyperfine splitting observed in ESR?\\n<img src='https://www.chemicalbook.com/Spectrum/62-53-3_ESR_0.jpg' class='spectroscopy-img' />",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The nitrogen-14 nucleus ($I=1$) and the ortho/para/amino protons ($I=1/2$)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The carbon-12 nuclei ($I=0$) and nitrogen-14 nucleus",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The oxygen-16 nuclei ($I=0$)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The meta protons only ($I=1/2$)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question covers the principles of Electron Spin Resonance (ESR) and hyperfine coupling in organic radical ions.",
      "process": "Step 1: ESR detects species with unpaired electrons, such as radical cations. The unpaired electron interacts with magnetic nuclei in its vicinity, leading to hyperfine splitting.\nStep 2: The isotropic hyperfine splitting ($a$) is proportional to the unpaired electron spin density at the nucleus. For the aniline radical cation, the nitrogen-14 nucleus has a nuclear spin of $I=1$, causing a major triplet splitting (intensity 1:1:1).\nStep 3: Further coupling occurs with protons ($I=1/2$). The spin density is highest at the amino protons ($-NH_2$), and the ortho and para positions of the benzene ring due to resonance. Carbon-12 ($I=0$) has no nuclear spin and does not cause hyperfine splitting.",
      "result": "The major hyperfine splittings in the aniline radical cation ESR arise from the nitrogen-14 nucleus and the amino, ortho, and para protons."
    }
  },
  {
    "question_id": "ch18_q11_aniline_ir",
    "topic": "Spectroscopy (SDBS/ChemicalBook)",
    "difficulty_level": "Medium",
    "question_text": "Observe the FT-IR spectrum of aniline ($C_6H_7N$) from SDBS. The doublet observed at $3350$ and $3430\\text{ cm}^{-1}$ is highly characteristic of which functional group?\\n<img src='https://www.chemicalbook.com/Spectrum/62-53-3_IR1.gif' class='spectroscopy-img' />",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "A primary amine (symmetric and asymmetric $N-H$ stretching)",
        "smiles": "Nc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A secondary amine (single $N-H$ stretch)",
        "smiles": "N(C)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "An amide (carbonyl + $N-H$ stretch)",
        "smiles": "CC(=O)Nc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "An alcohol (broad $O-H$ stretch)",
        "smiles": "Oc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests identification of amine classes using FT-IR.",
      "process": "Step 1: Primary amines ($-NH_2$) have two hydrogens attached to the nitrogen. This results in two distinct stretching vibrations in the IR spectrum: a symmetric stretch and an asymmetric stretch, typically appearing as a doublet in the $3300-3500\\text{ cm}^{-1}$ region.\nStep 2: Secondary amines ($R_2NH$) have only one hydrogen, showing only a single stretching band in this region.\nStep 3: Tertiary amines ($R_3N$) have no N-H bonds and do not show any bands in this region. This doublet at $3350$ and $3430\\text{ cm}^{-1}$ confirms a primary amine, matching aniline.",
      "result": "A primary amine (like aniline) is characterized by a doublet in the $N-H$ stretch region representing symmetric and asymmetric stretching modes."
    }
  },
  {
    "question_id": "ch18_q12_toluene_1hnmr",
    "topic": "Spectroscopy (SDBS/ChemicalBook)",
    "difficulty_level": "Easy",
    "question_text": "The $^1\\text{H}$ NMR spectrum below belongs to toluene ($C_7H_8$) from SDBS. What are the integration values and splitting patterns of the two main signals observed?\\n<img src='https://www.chemicalbook.com/Spectrum/108-88-3_1HNMR.gif' class='spectroscopy-img' />",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "A singlet at $2.3\\text{ ppm}$ ($3\\text{H}$) and a multiplet at $7.2\\text{ ppm}$ ($5\\text{H}$)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A doublet at $2.3\\text{ ppm}$ ($3\\text{H}$) and a triplet at $7.2\\text{ ppm}$ ($5\\text{H}$)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A singlet at $1.5\\text{ ppm}$ ($6\\text{H}$) and a multiplet at $7.2\\text{ ppm}$ ($2\\text{H}$)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A triplet at $2.3\\text{ ppm}$ ($3\\text{H}$) and a quartet at $7.2\\text{ ppm}$ ($5\\text{H}$)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the 1H NMR splitting and shifts of monosubstituted benzenes.",
      "process": "Step 1: Toluene contains a methyl group attached to a benzene ring.\nStep 2: The methyl protons ($-CH_3$, $3H$) are isolated with no neighboring protons, so they appear as a singlet at $2.3\\text{ ppm}$ (shifted slightly downfield due to the adjacent aromatic ring).\nStep 3: The 5 aromatic ring protons are chemically similar and couple with each other, appearing as a complex multiplet integrating to $5H$ in the region of $7.0-7.3\\text{ ppm}$.",
      "result": "The correct spectrum contains a $3H$ singlet at $2.3\\text{ ppm}$ and a $5H$ multiplet at $7.2\\text{ ppm}$."
    }
  },
  {
    "question_id": "ch18_q13_acetophenone_ir",
    "topic": "Spectroscopy (SDBS/ChemicalBook)",
    "difficulty_level": "Medium",
    "question_text": "Observe the FT-IR spectrum of acetophenone ($C_8H_8O$) from ChemicalBook. The strong, sharp absorption band at $1685\\text{ cm}^{-1}$ is shifted to a lower wavenumber than the typical aliphatic ketone carbonyl stretch ($1715\\text{ cm}^{-1}$). Why does this occur?\\n<img src='https://www.chemicalbook.com/Spectrum/98-86-2_IR1.gif' class='spectroscopy-img' />",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Conjugation with the aromatic ring increases single-bond character of the carbonyl bond, lowering its force constant.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Conjugation increases the double-bond character of the carbonyl bond, increasing its force constant.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The methyl group acts as a strong inductive electron-withdrawing group.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ring strain in the six-membered ring shifts the wavenumber to lower values.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question links chemical structure resonance properties to physical infrared absorption frequencies.",
      "process": "Step 1: Infrared absorption frequencies depend on the bond force constant ($k$) and reduced mass ($\\mu$) per Hooke's Law: $\\nu \\propto \\sqrt{k/\\mu}$.\nStep 2: When a carbonyl is conjugated with a double bond or aromatic ring, resonance delocalization places a partial negative charge on oxygen and a positive charge on carbon/ring: $C=O \\leftrightarrow C^+-O^-$. This resonance increases the single-bond character of the $C-O$ bond.\nStep 3: Single bonds are weaker than double bonds (lower force constant $k$). A lower force constant results in a lower vibrational frequency (wavenumber). Therefore, conjugated carbonyls absorb at lower wavenumbers ($1685\\text{ cm}^{-1}$) than aliphatic carbonyls ($1715\\text{ cm}^{-1}$).",
      "result": "Conjugation with the benzene ring stabilizes the polar resonance form, increasing single-bond character and lowering the stretching frequency to $1685\\text{ cm}^{-1}$."
    }
  },
  {
    "question_id": "ch18_q14_phenol_1hnmr",
    "topic": "Spectroscopy (SDBS/ChemicalBook)",
    "difficulty_level": "Medium",
    "question_text": "The $^1\\text{H}$ NMR spectrum of phenol ($C_6H_6O$) is shown below. Note the signal near $5.3\\text{ ppm}$ ($1\\text{H}$) that disappears upon addition of deuterium oxide ($D_2O$). What proton does this represent?\\n<img src='https://www.chemicalbook.com/Spectrum/108-95-2_1HNMR.gif' class='spectroscopy-img' />",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The acidic hydroxyl ($OH$) proton undergoing rapid chemical exchange with deuterium",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The para proton of the aromatic ring",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The meta protons of the aromatic ring",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The carbon-bonded aldehyde proton",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question covers the D2O exchange technique used to identify exchangeable protons (hydroxyl, amine, amide) in 1H NMR.",
      "process": "Step 1: Protons bonded to heteroatoms (O, N, S) are exchangeable. Phenol has a hydroxyl group ($-OH$).\nStep 2: Upon addition of $D_2O$, a rapid chemical exchange reaction occurs: $R-OH + D_2O \\rightleftharpoons R-OD + HOD$.\nStep 3: Because deuterium ($D$, $^2H$) does not absorb in the $^1H$ frequency range of the NMR spectrometer, the signal for the hydroxyl proton disappears. This confirms the signal at $5.3\\text{ ppm}$ belongs to the hydroxyl group.",
      "result": "The exchange of the $-OH$ proton with deuterium from $D_2O$ causes the signal to disappear, identifying it as the hydroxyl proton."
    }
  },
  {
    "question_id": "ch18_q15_phenol_13cnmr",
    "topic": "Spectroscopy (SDBS/ChemicalBook)",
    "difficulty_level": "Hard",
    "question_text": "The $^{13}\\text{C}$ NMR spectrum of phenol ($C_6H_6O$) from SDBS is shown below. How many unique carbon signals are expected, and which carbon is shifted furthest downfield?\\n<img src='https://www.chemicalbook.com/Spectrum/108-95-2_13CNMR.gif' class='spectroscopy-img' />",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "4 signals; the C1 carbon bonded to the oxygen atom (~155 ppm)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "6 signals; the C4 para carbon (~120 ppm)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4 signals; the C4 para carbon (~120 ppm)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "6 signals; the C1 carbon bonded to the oxygen atom (~155 ppm)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the analysis of 13C NMR signals based on molecular symmetry and chemical shielding.",
      "process": "Step 1: Analyze symmetry. Phenol has a plane of symmetry passing through C1 and C4. This makes C2/C6 equivalent and C3/C5 equivalent. Therefore, there are 4 unique carbon environments in the aromatic ring: C1, C2/6, C3/5, and C4.\nStep 2: Analyze chemical shielding. The oxygen atom attached to C1 is highly electronegative and deshields the C1 carbon via induction, shifting it downfield. Resonance electron-donation also occurs (oxygen lone pairs donate into the ring, shielding ortho/para positions), but the inductive effect dominates at the C1 position, shifting it to $~155\\text{ ppm}$.\nStep 3: Combine: 4 signals, with the C1 carbon being the most deshielded and shifted downfield.",
      "result": "Phenol exhibits 4 signals in the 13C NMR spectrum due to symmetry, and the oxygen-bearing carbon (C1) is furthest downfield at ~155 ppm."
    }
  },
  {
    "question_id": "ch18_q_dynamic_epoxide_opening",
    "topic": "Epoxide Ring Opening Reactions",
    "difficulty_level": "Hard",
    "question_text": "Determine the regiochemical outcome of epoxide ring opening under acidic vs basic conditions.",
    "reaction_scheme": {
      "reactants": [
        "CC1(C)OC1"
      ],
      "reagents": "1) Acidic (H3O+) vs 2) Basic (NaOCH3/CH3OH)",
      "conditions": "regioselectivity paths",
      "products": [
        "CC(C)(O)CO",
        "CC(C)(OCH3)CO"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Under acidic conditions, nucleophiles attack the more substituted carbon; under basic conditions, nucleophiles attack the less substituted carbon.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Nucleophiles attack the more substituted carbon under all conditions.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Nucleophiles attack the less substituted carbon under all conditions.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "No ring opening occurs in base.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing transition states of epoxide ring openings.",
      "process": "In acid, protonation of oxygen creates carbocation-like character at the carbon most able to stabilize positive charge (more substituted). In base, steric hindrance dominates, directing the nucleophile to the less substituted carbon (backside attack).",
      "result": "Regiochemical pathways identified."
    }
  }
];
