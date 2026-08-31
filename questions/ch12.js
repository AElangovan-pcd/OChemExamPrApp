// OChemStudyBuddy - McMurry Chapter 12
// Author: A. Elangovan, PhD
var CH12_QUESTIONS = [
  {
    "question_id": "ch12_q1_ei_energy",
    "topic": "Mass Spectrometry Basics",
    "difficulty_level": "Easy",
    "question_text": "In electron ionization mass spectrometry (EI-MS), the gaseous sample is bombarded with high-energy electrons, typically at 70 eV. Why is this specific energy standardly used?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "This energy corresponds to the maximum ionization cross-section for most organic molecules, ensuring efficient and reproducible ionization.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It matches the exact ionization potential of carbon, preventing fragmentation of C-H bonds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It is the minimum energy required to excite valence electrons to their Rydberg states without ejecting them.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "This high energy is required to ionize the helium carrier gas, which then transfers its charge to the sample.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question covers the fundamental ionization mechanism of Electron Ionization (EI).",
      "process": "Step 1: The typical ionization potential of organic molecules is around 9–12 eV.\nStep 2: A 70 eV electron beam provides sufficient energy to not only ionize the molecule but also leave it with significant excess internal energy, promoting reproducible fragmentation patterns.\nStep 3: This energy is standard because it maximizes the probability of ionization (ionization cross-section).",
      "result": "Therefore, 70 eV is the standard energy used to achieve stable, reproducible mass spectra with rich fragmentation details."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q2_deflection",
    "topic": "Mass Spectrometry Basics",
    "difficulty_level": "Medium",
    "question_text": "In a magnetic-sector mass spectrometer, ions are accelerated by a voltage $V$ and then deflected in a magnetic field $B$. What is the relationship between the radius of curvature $r$ of the ion's path and its mass-to-charge ratio ($m/z$)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "$r = \\sqrt{\\frac{2Vm}{zB^2}}$; thus, heavier ions (higher $m/z$) have a larger radius of curvature and are deflected less.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$r = \\frac{2Vm}{zB^2}$; thus, heavier ions have a smaller radius of curvature and are deflected more.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$r = \\sqrt{\\frac{2VB^2}{m/z}}$; thus, lighter ions have a larger radius of curvature.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$r$ is completely independent of the mass of the ion and only depends on its velocity.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question addresses the physics governing ion separation in a magnetic-sector mass analyzer.",
      "process": "Step 1: The kinetic energy of the accelerated ion is given by $qV = \\frac{1}{2}mv^2$.\nStep 2: The magnetic force acting on the ion is $F = qvB$, which provides the centripetal force $\\frac{mv^2}{r}$.\nStep 3: Solving for $r$ yields $r = \\frac{mv}{qB}$. Substituting $v = \\sqrt{\\frac{2qV}{m}}$ gives $r = \\sqrt{\\frac{2Vm}{qB^2}}$.\nStep 4: Since $q = z e$, $r$ is proportional to $\\sqrt{m/z}$, meaning larger $m/z$ ions have a larger radius of curvature (less deflection).",
      "result": "Heavier ions are deflected less (larger radius of curvature) than lighter ions for a given magnetic field."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q3_detection_species",
    "topic": "Mass Spectrometry Basics",
    "difficulty_level": "Easy",
    "question_text": "A standard electron ionization mass spectrometer operating in positive-ion mode detects which of the following species?",
    "question_smiles": "C",
    "options": [
      {
        "option_id": "A",
        "text": "Positively charged radical cations and cationic fragments.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Neutral molecules and radicals that hit the detector.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Anionic fragments and radical anions.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "All particles regardless of charge, as long as they are volatile.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question clarifies the selective detection of charged species in mass spectrometry.",
      "process": "Step 1: Mass spectrometers use electric and magnetic fields to manipulate, focus, and accelerate ions.\nStep 2: Neutral molecules and radicals cannot be manipulated by these fields and are removed by the vacuum pump.\nStep 3: Anions are repelled by the acceleration plates in positive-ion mode.\nStep 4: Only positively charged species (radical cations and cations) reach the detector.",
      "result": "Only positive ions (cationic fragments and radical cations) are detected in positive-ion EI-MS."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q4_base_peak",
    "topic": "Mass Spectrometry Basics",
    "difficulty_level": "Easy",
    "question_text": "In mass spectrometry, the 'molecular ion peak' ($M^{\\bullet+}$) and the 'base peak' are fundamental terms. Which of the following statements is correct regarding these peaks?",
    "question_smiles": "CC(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "The base peak is the most intense peak in the spectrum and is assigned a relative abundance of 100%, whereas the molecular ion peak represents the intact radical cation of the analyte.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The base peak and the molecular ion peak must always be the same peak.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The base peak is always the peak with the lowest $m/z$ ratio.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The molecular ion peak represents the most stable carbocation formed after fragmentation.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Define and distinguish the terms 'base peak' and 'molecular ion peak' in MS.",
      "process": "Step 1: The molecular ion ($M^{\\bullet+}$) corresponds to the ionized analyte molecule before any bond cleavage.\nStep 2: The base peak is the simplest or most abundant ion detected, which is arbitrarily set to 100% relative abundance.\nStep 3: The base peak is set to 100% intensity, and all other peak intensities are scaled relative to it. They can be the same peak if the molecular ion is highly stable.",
      "result": "The base peak is the reference peak at 100% relative abundance, while the molecular ion represents the intact molecule."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q5_ci_mechanism",
    "topic": "Mass Spectrometry Basics",
    "difficulty_level": "Hard",
    "question_text": "Chemical ionization (CI-MS) is a 'soft' ionization technique. Which of the following reactions describes the primary ionization event that occurs in CI-MS using methane ($CH_4$) as the reagent gas?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "The reagent gas is ionized by EI to form $CH_4^{\\bullet+}$, which reacts with neutral $CH_4$ to form $CH_5^+$; then $CH_5^+$ transfers a proton to the analyte $M$ to form $[M+H]^+$.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The analyte $M$ is directly bombarded with methane radicals, causing homolytic cleavage of all C-H bonds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Methane undergoes thermal pyrolysis to yield carbene ($:CH_2$), which inserts into the analyte's C-C bonds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methane acts as a carrier gas that slows down the electron beam, allowing the analyte to absorb an electron and form $[M-H]^-$.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand the mechanism of Chemical Ionization (CI), a soft ionization technique.",
      "process": "Step 1: Methane reagent gas is present in high excess and is ionized by electron impact: $CH_4 + e^- \\rightarrow CH_4^{\\bullet+} + 2e^-$.\nStep 2: The $CH_4^{\\bullet+}$ ion reacts with neutral methane: $CH_4^{\\bullet+} + CH_4 \\rightarrow CH_5^+ + \\cdot CH_3$.\nStep 3: The reactive Brønsted-Lowry acid $CH_5^+$ then transfers a proton to the analyte $M$: $M + CH_5^+ \\rightarrow [M+H]^+ + CH_4$.\nStep 4: This proton transfer is exothermic but low-energy, resulting in very little fragmentation.",
      "result": "CI-MS generates the protonated molecular ion $[M+H]^+$ via proton transfer from a reagent ion like $CH_5^+$."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q6_nitrogen_rule",
    "topic": "Molecular Ion Peak",
    "difficulty_level": "Medium",
    "question_text": "According to the Nitrogen Rule, what must be true for an organic compound containing only C, H, N, O, S, and halogens that has an odd molecular weight?",
    "question_smiles": "C1=CC=C(C=C1)N",
    "options": [
      {
        "option_id": "A",
        "text": "It must contain an odd number of nitrogen atoms.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It must contain an even number of nitrogen atoms.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It must contain at least one halogen atom.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It cannot contain any oxygen or sulfur atoms.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand the nitrogen rule and its application to determining molecular formulas.",
      "process": "Step 1: Nitrogen is unique because it has an even atomic mass (14) but an odd valence (3).\nStep 2: Carbon (mass 12, valence 4), Oxygen (mass 16, valence 2), and Hydrogen (mass 1, valence 1) have masses and valences of the same parity.\nStep 3: Thus, a neutral molecule with an odd number of nitrogen atoms will always have an odd molecular mass.\nStep 4: Zero or an even number of nitrogen atoms results in an even molecular mass.",
      "result": "An odd molecular weight requires an odd number of nitrogen atoms."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q7_nitrogen_rule_application",
    "topic": "Molecular Ion Peak",
    "difficulty_level": "Medium",
    "question_text": "A compound has a molecular ion peak ($M^{\\bullet+}$) at $m/z = 116$. Which of the following molecular formulas is inconsistent with this mass and the Nitrogen Rule?",
    "question_smiles": "CCNCCN",
    "options": [
      {
        "option_id": "A",
        "text": "$C_5H_{12}N_2O$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "$C_6H_{16}N_2$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$C_5H_{14}N_3$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "$C_6H_{12}O_2$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the application of the Nitrogen Rule to molecular formulas and their masses.",
      "process": "Step 1: A molecular ion of $m/z = 116$ is an even number.\nStep 2: According to the Nitrogen Rule, a neutral compound with an even molecular mass must have an even number of nitrogen atoms (0, 2, 4, etc.).\nStep 3: Formula $C_5H_{14}N_3$ has a nominal mass of $5(12) + 14(1) + 3(14) = 116$. However, since it contains 3 nitrogen atoms (an odd number), a stable neutral molecule of this formula cannot have an even mass of 116. Thus, this formula is chemically impossible for a stable, neutral molecule of mass 116.",
      "result": "The formula $C_5H_{14}N_3$ violates the Nitrogen Rule because an odd number of nitrogens (3) must have an odd molecular weight."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q8_hrms_formula",
    "topic": "Molecular Ion Peak",
    "difficulty_level": "Hard",
    "question_text": "A high-resolution mass spectrometer (HRMS) measures the molecular ion of an unknown organic compound to be $m/z = 84.0581$. Given the exact isotopic masses: $^{12}\\text{C} = 12.0000$, $^{1}\\text{H} = 1.0078$, $^{14}\\text{N} = 14.0031$, and $^{16}\\text{O} = 15.9949$, what is the molecular formula of the compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "$C_5H_8O$ (exact mass: 84.0573)",
        "smiles": "O=C1CCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$C_4H_8N_2$ (exact mass: 84.0686)",
        "smiles": "C1CNCCN1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$C_6H_{12}$ (exact mass: 84.0936)",
        "smiles": "CCCCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$C_3H_4N_2O$ (exact mass: 84.0323)",
        "smiles": "O=C1CNC=N1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "High-resolution mass spectrometry (HRMS) distinguishes between different molecular formulas with the same nominal mass by measuring precise mass.",
      "process": "Step 1: The nominal mass is 84. Let's calculate the exact mass for each candidate formula:\n- $C_5H_8O$: $5(12.0000) + 8(1.0078) + 15.9949 = 84.0573$ (matches 84.0581 within experimental error).\n- $C_4H_8N_2$: $4(12.0000) + 8(1.0078) + 2(14.0031) = 84.0686$.\n- $C_6H_{12}$: $6(12.0000) + 12(1.0078) = 84.0936$.\n- $C_3H_4N_2O$: $3(12.0000) + 4(1.0078) + 2(14.0031) + 15.9949 = 84.0323$.\nStep 2: Comparing these values, only $C_5H_8O$ is within a few ppm of the observed mass of 84.0581.",
      "result": "The molecular formula is $C_5H_8O$."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q9_m_plus_one_abundance",
    "topic": "Molecular Ion Peak",
    "difficulty_level": "Medium",
    "question_text": "An unknown compound has a molecular ion peak ($M^{\\bullet+}$) at $m/z = 150$ with a relative intensity of 84.2%. The $M+1$ peak at $m/z = 151$ has a relative intensity of 10.2%. Estimate the number of carbon atoms present in this compound, assuming the $M+1$ peak is due solely to the natural abundance of $^{13}\\text{C}$ (1.11%).",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "11",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "8",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "15",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "6",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question uses the $M+1$ peak relative intensity to estimate the number of carbon atoms in a molecule.",
      "process": "Step 1: The formula relating the intensity of the $M+1$ peak to the molecular ion peak $M$ is:\n$\\text{Number of Carbon Atoms} = \\frac{\\text{Intensity of } M+1}{\\text{Intensity of } M \\times 1.11\\%}$.\nStep 2: Substitute the given values:\n$\\text{Number of Carbon Atoms} = \\frac{10.2}{84.2 \\times 0.0111} = \\frac{10.2}{0.93462} \\approx 10.91$.\nStep 3: Round to the nearest whole number, which is 11.",
      "result": "The compound contains approximately 11 carbon atoms."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q10_deuterium_m_plus_one",
    "topic": "Molecular Ion Peak",
    "difficulty_level": "Medium",
    "question_text": "Why is the contribution of hydrogen isotopes ($^2\\text{H}$, deuterium) to the $M+1$ peak of a typical hydrocarbon generally ignored, while the contribution of carbon isotopes ($^{13}\\text{C}$) is heavily relied upon?",
    "question_smiles": "C",
    "options": [
      {
        "option_id": "A",
        "text": "The natural abundance of deuterium is extremely low (~0.015%), making its contribution to $M+1$ negligible compared to $^{13}\\text{C}$ (~1.11%).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Deuterium does not ionize in positive-ion mode mass spectrometry.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Deuterium atoms are selectively lost during fragmentation as neutral radicals.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The mass of deuterium is exactly the same as protium in mass spectrometry.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Explain the isotopic abundances that determine the $M+1$ peak size.",
      "process": "Step 1: Protium ($^1\\text{H}$) has a natural abundance of 99.985%, while deuterium ($^2\\text{H}$) is only 0.015%.\nStep 2: Carbon-12 ($^{12}\\text{C}$) has a natural abundance of 98.89%, while carbon-13 ($^{13}\\text{C}$) is 1.11%.\nStep 3: Because $^{13}\\text{C}$ is nearly 74 times more abundant than deuterium, the $M+1$ peak height is dominated by $^{13}\\text{C}$.",
      "result": "Deuterium's low natural abundance (~0.015%) means it contributes minimally to the $M+1$ peak compared to $^{13}\\text{C}$."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q11_monochloro_ratio",
    "topic": "Isotopes (Cl and Br ratios)",
    "difficulty_level": "Easy",
    "question_text": "A mass spectrum displays a molecular ion cluster with two peaks at $m/z = 78$ and $m/z = 80$ in a $3:1$ intensity ratio. What structural feature does this pattern indicate?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The presence of a single chlorine atom.",
        "smiles": "CCCl",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The presence of a single bromine atom.",
        "smiles": "CCBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The presence of two chlorine atoms.",
        "smiles": "ClCCCl",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The presence of a single sulfur atom.",
        "smiles": "CCS",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Recognize the signature isotope pattern for a monochlorinated compound.",
      "process": "Step 1: Chlorine exists in nature as two stable isotopes: $^{35}\\text{Cl}$ (~75.8%) and $^{37}\\text{Cl}$ (~24.2%).\nStep 2: This is approximately a $3:1$ ratio.\nStep 3: Thus, a compound containing one chlorine atom shows two molecular ion peaks separated by 2 mass units ($M$ and $M+2$) in a $3:1$ ratio.",
      "result": "A $3:1$ ratio of $M : M+2$ indicates the presence of a single chlorine atom."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q12_monobromo_ratio",
    "topic": "Isotopes (Cl and Br ratios)",
    "difficulty_level": "Easy",
    "question_text": "If an organic compound contains exactly one bromine atom and no other halogens, what is the expected ratio of the molecular ion peak ($M$) to the $M+2$ peak in its mass spectrum?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Approximately $1:1$ (equal intensity).",
        "smiles": "CCBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Approximately $3:1$.",
        "smiles": "CCCl",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Approximately $1:2$.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Approximately $1:2:1$.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Recognize the signature isotope pattern for a monobrominated compound.",
      "process": "Step 1: Bromine has two major naturally occurring stable isotopes: $^{79}\\text{Br}$ (50.69%) and $^{81}\\text{Br}$ (49.31%).\nStep 2: Since their abundances are nearly equal, a compound with one bromine atom will exhibit two molecular ion peaks ($M$ and $M+2$) of nearly equal height.",
      "result": "A $1:1$ ratio of $M : M+2$ indicates the presence of a single bromine atom."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q13_dibromo_ratio",
    "topic": "Isotopes (Cl and Br ratios)",
    "difficulty_level": "Hard",
    "question_text": "An organic compound contains exactly two bromine atoms. What is the expected intensity ratio of the molecular ion cluster peaks ($M : M+2 : M+4$)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Approximately $1:2:1$.",
        "smiles": "CC(Br)CBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Approximately $9:6:1$.",
        "smiles": "ClCCCl",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Approximately $3:4:1$.",
        "smiles": "ClCCBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Approximately $1:1:1$.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Derive the isotope pattern for a compound containing two bromine atoms.",
      "process": "Step 1: Let the probability of finding $^{79}\\text{Br}$ be $p = 0.5$ and $^{81}\\text{Br}$ be $q = 0.5$.\nStep 2: The distribution of isotopes for two bromine atoms is given by the expansion of $(p + q)^2 = p^2 + 2pq + q^2$.\nStep 3: Substituting the probabilities:\n- $M$ ($^{79}\\text{Br}^{79}\\text{Br}$): $p^2 = (0.5)^2 = 0.25$\n- $M+2$ ($^{79}\\text{Br}^{81}\\text{Br}$ and $^{81}\\text{Br}^{79}\\text{Br}$): $2pq = 2(0.5)(0.5) = 0.50$\n- $M+4$ ($^{81}\\text{Br}^{81}\\text{Br}$): $q^2 = (0.5)^2 = 0.25$\nStep 4: This gives a ratio of $0.25 : 0.50 : 0.25$, which simplifies to $1 : 2 : 1$.",
      "result": "A compound with two bromine atoms exhibits an $M : M+2 : M+4$ ratio of $1:2:1$."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q14_dichloro_ratio",
    "topic": "Isotopes (Cl and Br ratios)",
    "difficulty_level": "Hard",
    "question_text": "An organic compound contains exactly two chlorine atoms. What is the expected intensity ratio of the molecular ion cluster peaks ($M : M+2 : M+4$)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Approximately $9:6:1$.",
        "smiles": "ClCCCl",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Approximately $3:4:1$.",
        "smiles": "ClCCBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Approximately $1:2:1$.",
        "smiles": "CC(Br)CBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Approximately $3:1:0.1$.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Derive the isotope pattern for a compound containing two chlorine atoms.",
      "process": "Step 1: Let the probability of $^{35}\\text{Cl}$ be $p = 0.75$ and $^{37}\\text{Cl}$ be $q = 0.25$ (simplified $3:1$ ratio).\nStep 2: The distribution for two chlorine atoms is given by the expansion of $(p + q)^2 = p^2 + 2pq + q^2$.\nStep 3: Substitute the values:\n- $M$ ($^{35}\\text{Cl}^{35}\\text{Cl}$): $p^2 = (3/4)^2 = 9/16$\n- $M+2$ ($^{35}\\text{Cl}^{37}\\text{Cl}$): $2pq = 2(3/4)(1/4) = 6/16$\n- $M+4$ ($^{37}\\text{Cl}^{37}\\text{Cl}$): $q^2 = (1/4)^2 = 1/16$\nStep 4: This yields an intensity ratio of $9 : 6 : 1$.",
      "result": "A compound with two chlorine atoms exhibits an $M : M+2 : M+4$ ratio of $9:6:1$."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q15_mixed_halogen_ratio",
    "topic": "Isotopes (Cl and Br ratios)",
    "difficulty_level": "Hard",
    "question_text": "A mass spectrum displays a molecular ion cluster with peaks at $M$, $M+2$, and $M+4$. If the compound contains exactly one chlorine atom and one bromine atom, what is the theoretical intensity ratio of these peaks ($M : M+2 : M+4$)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Approximately $3:4:1$.",
        "smiles": "ClCCBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Approximately $9:6:1$.",
        "smiles": "ClCCCl",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Approximately $1:2:1$.",
        "smiles": "CC(Br)CBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Approximately $3:1:1$.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determine the isotope distribution for a mixed halogen compound containing one Cl and one Br.",
      "process": "Step 1: Let the chlorine isotopes be represented as $(3\\cdot^{35}\\text{Cl} + 1\\cdot^{37}\\text{Cl})$ and bromine isotopes as $(1\\cdot^{79}\\text{Br} + 1\\cdot^{81}\\text{Br})$.\nStep 2: Multiply the binomials to find the combinations:\n$(3\\cdot^{35}\\text{Cl} + 1\\cdot^{37}\\text{Cl}) \\times (1\\cdot^{79}\\text{Br} + 1\\cdot^{81}\\text{Br}) = 3(^{35}\\text{Cl}^{79}\\text{Br}) + 3(^{35}\\text{Cl}^{81}\\text{Br}) + 1(^{37}\\text{Cl}^{79}\\text{Br}) + 1(^{37}\\text{Cl}^{81}\\text{Br})$.\nStep 3: Group by total mass addition:\n- $M$ (no addition, $^{35}\\text{Cl}^{79}\\text{Br}$): term has coefficient 3.\n- $M+2$ (2 mass units addition, $^{35}\\text{Cl}^{81}\\text{Br}$ and $^{37}\\text{Cl}^{79}\\text{Br}$): coefficients are $3 + 1 = 4$.\n- $M+4$ (4 mass units addition, $^{37}\\text{Cl}^{81}\\text{Br}$): term has coefficient 1.\nStep 4: This gives the ratio $3 : 4 : 1$.",
      "result": "The expected molecular ion peak ratio is $3:4:1$."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q16_sulfur_isotope",
    "topic": "Isotopes (Cl and Br ratios)",
    "difficulty_level": "Medium",
    "question_text": "A compound has a molecular ion peak at $m/z = 62$ with 100% relative abundance, and a peak at $m/z = 64$ with 4.4% relative abundance. What heteroatom is likely present?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Sulfur, due to the $^{34}\\text{S}$ isotope (natural abundance ~4.21%).",
        "smiles": "CCS",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Oxygen, due to the $^{18}\\text{O}$ isotope.",
        "smiles": "CCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Chlorine, due to the $^{37}\\text{Cl}$ isotope.",
        "smiles": "CCCl",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Phosphorus, due to the $^{32}\\text{P}$ isotope.",
        "smiles": "CCP",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify other elements with distinctive $M+2$ isotope signatures.",
      "process": "Step 1: A peak at $M+2$ that is 4.4% of the molecular ion peak is a classic indicator of a sulfur atom.\nStep 2: Sulfur has a stable isotope $^{34}\\text{S}$ with a natural abundance of 4.21%.\nStep 3: Oxygen has $^{18}\\text{O}$ (abundance ~0.20%).\nStep 4: Chlorine has $^{37}\\text{Cl}$ (abundance ~24.2%, which would give a 33% relative peak).",
      "result": "A 4.4% $M+2$ peak is characteristic of a single sulfur atom."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q17_alkane_spacing",
    "topic": "Fragmentation patterns (alkanes)",
    "difficulty_level": "Medium",
    "question_text": "In the EI mass spectrum of undecane ($C_{11}H_{24}$), a series of peaks are observed at $m/z = 99, 85, 71, 57, 43$, and $29$. What is the cause of this pattern?",
    "question_smiles": "CCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Homolytic cleavage of the straight-chain alkane skeleton, resulting in the loss of successive alkyl radicals, leaving carbocations that differ by a $-CH_2-$ group (14 g/mol).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Loss of hydrogen molecules ($H_2$) sequentially from the parent ion.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Sequential loss of methyl radicals from the ends of the molecule.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Rearrangement reactions forming cyclic carbocations of varying sizes.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyze the fragmentation behavior of straight-chain alkanes.",
      "process": "Step 1: In straight-chain alkanes, cleavage can occur at any C-C bond.\nStep 2: Cleavage of the molecular ion ($M^{\\bullet+}$) yields a neutral radical and a carbocation: $[R-CH_2-CH_2-R']^{\\bullet+} \\rightarrow R-CH_2^+ + \\cdot CH_2-R'$.\nStep 3: Since alkyl groups differ by a methylene ($CH_2$, 14 amu) unit, the resulting carbocations ($C_nH_{2n+1}^+$) appear at $m/z = 29$ ($C_2H_5^+$), $43$ ($C_3H_7^+$), $57$ ($C_4H_9^+$), $71$ ($C_5H_{11}^+$), $85$ ($C_6H_{13}^+$), $99$ ($C_7H_{15}^+$), etc.",
      "result": "The 14-unit spacing represents the difference between homologous alkyl carbocations ($C_nH_{2n+1}^+$)."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q18_branched_vs_linear",
    "topic": "Fragmentation patterns (alkanes)",
    "difficulty_level": "Medium",
    "question_text": "Compare the mass spectra of hexane and its isomer, 2,2-dimethylbutane. Why is the molecular ion peak ($M^{\\bullet+} = 86$) much weaker in 2,2-dimethylbutane than in hexane?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "2,2-Dimethylbutane has a quaternary carbon, which rapidly cleaves to yield a highly stable tertiary carbocation (tert-butyl cation, $m/z = 57$), making the molecular ion extremely short-lived.",
        "smiles": "CC(C)(C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2,2-Dimethylbutane undergoes a McLafferty rearrangement that hexane cannot undergo.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The branched alkane is more resistant to electron bombardment, resulting in less ionization.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The quaternary carbon prevents any fragmentation, causing the molecular ion to be lost to the vacuum pumps.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand how branching affects the stability and fragmentation of alkanes.",
      "process": "Step 1: Mass spectrometer ionization creates a radical cation.\nStep 2: The ease of fragmentation is determined by the stability of the resulting carbocation and radical.\nStep 3: 2,2-Dimethylbutane has a quaternary carbon. Cleavage of a ethyl group ($M-29$) yields a tertiary carbocation (tert-butyl, $m/z = 57$), which is highly stable.\nStep 4: This cleavage is extremely rapid, leaving very few intact molecular ions ($m/z = 86$) to reach the detector. Hexane only forms less stable primary or secondary carbocations, so its molecular ion is more prominent.",
      "result": "Quaternary and tertiary carbons in branched alkanes lead to rapid cleavage to form stable carbocations, severely reducing the molecular ion intensity."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q19_carbocation_stability",
    "topic": "Fragmentation patterns (alkanes)",
    "difficulty_level": "Medium",
    "question_text": "When 2-methylhexane is ionized, which C-C bond is most likely to cleave to yield the base peak at $m/z = 43$?",
    "question_smiles": "CCCCC(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "The $C2-C3$ bond, yielding an isopropyl cation ($m/z = 43$, secondary carbocation) and a butyl radical.",
        "smiles": "[CH+](C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The $C1-C2$ bond, yielding a primary methyl carbocation ($m/z = 15$) and a hexyl radical.",
        "smiles": "[CH3+]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The $C5-C6$ bond, yielding a primary ethyl carbocation ($m/z = 29$) and a pentyl radical.",
        "smiles": "[CH2+]C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The $C4-C5$ bond, yielding a primary butyl carbocation ($m/z = 57$) and a propyl radical.",
        "smiles": "[CH2+]CCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Predict the major fragmentation site of branched alkanes based on carbocation stability.",
      "process": "Step 1: 2-Methylhexane is `CH3-CH(CH3)-CH2-CH2-CH2-CH3`.\nStep 2: Cleavage of the $C2-C3$ bond yields a secondary isopropyl cation ($CH_3-\\text{CH}^+-CH_3$, $m/z = 43$) and a butyl radical. This carbocation is relatively stable compared to primary carbocations.\nStep 3: Other cleavages would yield primary carbocations like methyl ($m/z = 15$) or ethyl ($m/z = 29$), which are highly unstable.",
      "result": "Cleavage of the C2-C3 bond is favored because it generates the stable secondary isopropyl cation ($m/z = 43$)."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q20_tropylium_ion",
    "topic": "Fragmentation patterns (alkanes)",
    "difficulty_level": "Medium",
    "question_text": "In the mass spectrum of alkylbenzenes, such as propylbenzene, a prominent fragment is observed at $m/z = 91$. This fragment undergoes rearrangement to form a highly stable, aromatic species. What is the name and structure of this rearranged ion?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Tropylium ion; a cycloheptatrienyl cation ($C_7H_7^+$).",
        "smiles": "[C+]1=CC=CC=CC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzyl carbocation; a phenylmethyl cation ($C_6H_5CH_2^+$) without rearrangement.",
        "smiles": "[CH2+]c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Phenyl cation ($C_6H_5^+$).",
        "smiles": "[c+]1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Phenonium ion; a bridged benzene intermediate.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand benzylic cleavage and the formation of the tropylium ion in alkylbenzenes.",
      "process": "Step 1: Alkylbenzenes undergo benzylic cleavage (cleavage of the $\\beta$-bond relative to the aromatic ring) to form the benzyl cation ($C_6H_5-CH_2^+$, $m/z = 91$).\nStep 2: The benzyl cation rapidly rearranges to the more stable tropylium ion, which is a cycloheptatrienyl cation ($C_7H_7^+$).\nStep 3: The tropylium ion is aromatic because it is planar, cyclic, fully conjugated, and has $6\\ \\pi$ electrons (satisfying Huckel's rule $4n+2$ where $n=1$).",
      "result": "The $m/z = 91$ peak corresponds to the tropylium ion (cycloheptatrienyl cation)."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q21_allylic_cleavage",
    "topic": "Fragmentation patterns (alkanes)",
    "difficulty_level": "Medium",
    "question_text": "Alkenes undergo a characteristic fragmentation pathway known as allylic cleavage. For 1-pentene ($CH_2=CH-CH_2-CH_2-CH_3$), which bond is cleaved, and what is the $m/z$ value of the resulting resonance-stabilized cation?",
    "question_smiles": "CCC=C",
    "options": [
      {
        "option_id": "A",
        "text": "The $C3-C4$ bond (allylic bond), yielding the allyl cation ($[CH_2=CH-CH_2]^+$) at $m/z = 41$.",
        "smiles": "[CH2+]C=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The $C2-C3$ bond, yielding the vinyl cation at $m/z = 27$.",
        "smiles": "[CH+]=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The $C1-C2$ double bond, yielding a carbene radical.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The $C4-C5$ bond, yielding a butyl carbocation at $m/z = 57$.",
        "smiles": "[CH2+]CCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify the mechanism and product of allylic cleavage in alkenes.",
      "process": "Step 1: 1-Pentene is `CH2=CH-CH2-CH2-CH3`.\nStep 2: The bond between $C3$ and $C4$ is allylic (one single bond away from the double bond).\nStep 3: Cleavage of this bond yields the allyl radical/cation system. If the charge remains on the allyl fragment, it forms the allyl cation $[CH_2-CH=CH_2 \\leftrightarrow CH_2=CH-CH_2]^+$.\nStep 4: The mass of $[C_3H_5]^+$ is $3(12) + 5(1) = 41$ g/mol.",
      "result": "Allylic cleavage of the C3-C4 bond in 1-pentene yields the resonance-stabilized allyl cation at $m/z = 41$."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q22_alcohol_alpha_cleavage",
    "topic": "Fragmentation patterns (alcohols)",
    "difficulty_level": "Hard",
    "question_text": "Under electron ionization conditions, 2-butanol ($CH_3-CH(OH)-CH_2-CH_3$) undergoes $\\alpha$-cleavage. Which of the following describes the most favorable $\\alpha$-cleavage pathway and the $m/z$ of the resulting peak?",
    "question_smiles": "CCC(C)O",
    "options": [
      {
        "option_id": "A",
        "text": "Cleavage of the $C2-C3$ bond to lose an ethyl radical, yielding the resonance-stabilized oxocarbenium ion $[CH_3-CH=OH]^+$ at $m/z = 45$.",
        "smiles": "CC=[OH+]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cleavage of the $C1-C2$ bond to lose a methyl radical, yielding the oxocarbenium ion $[CH_3-CH_2-CH=OH]^+$ at $m/z = 59$.",
        "smiles": "CCC=[OH+]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cleavage of the $C2-O$ bond to lose a hydroxyl radical, yielding the sec-butyl cation at $m/z = 57$.",
        "smiles": "[CH+]C(C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cleavage of the C-H bond on $C2$ to lose a hydrogen atom, yielding the oxocarbenium ion $[CH_3-C(OH)=CH-CH_3]^{\\bullet+}$ at $m/z = 73$.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question addresses the competitive pathways of $\\alpha$-cleavage in asymmetric secondary alcohols.",
      "process": "Step 1: Alpha-cleavage of alcohols involves the homolytic cleavage of a bond to the carbon bearing the hydroxyl group (the $\\alpha$-carbon, $C2$).\nStep 2: The $\\alpha$-carbon in 2-butanol has three groups attached: a methyl group ($C1$), an ethyl group ($C3$), and a hydrogen atom.\nStep 3: Cleavage can lose a methyl radical (to give $m/z = 59$), an ethyl radical (to give $m/z = 45$), or a hydrogen atom (to give $m/z = 73$).\nStep 4: Loss of the larger, more stable radical (ethyl radical vs. methyl radical vs. H radical) is generally favored. Loss of the ethyl radical yields $[CH_3-CH=OH]^+$ at $m/z = 45$.",
      "result": "The most favorable pathway is the loss of the ethyl radical, yielding the base peak at $m/z = 45$."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q23_primary_alcohol_alpha_cleavage",
    "topic": "Fragmentation patterns (alcohols)",
    "difficulty_level": "Medium",
    "question_text": "Primary, unbranched alcohols such as 1-butanol show a highly characteristic fragment peak at $m/z = 31$. What is the structure of the cation responsible for this peak?",
    "question_smiles": "CCCCO",
    "options": [
      {
        "option_id": "A",
        "text": "$[H_2C=OH]^+$ (oxocarbenium ion)",
        "smiles": "C=[OH+]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$[CH_3-O]^+$ (methoxyl cation)",
        "smiles": "C[O+]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$[CH_3-OH]^{\\bullet+}$ (methanol radical cation)",
        "smiles": "C[OH+]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$[CH_2-OH]^{\\bullet}$ (hydroxymethyl radical)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify the characteristic $\\alpha$-cleavage product of primary alcohols.",
      "process": "Step 1: Primary alcohols ($R-CH_2-OH$) undergo $\\alpha$-cleavage where the C-C bond adjacent to the $\\alpha$-carbon is cleaved.\nStep 2: Homolytic cleavage of the $R-CH_2OH$ bond yields the alkyl radical ($R^{\\bullet}$) and the protonated formaldehyde-like fragment $[H_2C=OH]^+$.\nStep 3: The mass of $[CH_3O]^+$ is $12 (C) + 2(1)(H) + 16(O) + 1(H) = 31$ g/mol.\nStep 4: This ion is stabilized by resonance between $^+CH_2-OH$ and $CH_2=O^+-H$.",
      "result": "The $m/z = 31$ peak corresponds to the resonance-stabilized oxocarbenium ion $[H_2C=OH]^+$."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q24_alcohol_dehydration",
    "topic": "Fragmentation patterns (alcohols)",
    "difficulty_level": "Medium",
    "question_text": "The mass spectrum of 1-pentanol ($C_5H_{12}O$, MW = 88) displays a prominent peak at $m/z = 70$. Which of the following processes explains the formation of this fragment?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Elimination of water ($M-18$) via a cyclic transition state, yielding a pentene radical cation $[C_5H_{10}]^{\\bullet+}$.",
        "smiles": "C=CCCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Alpha-cleavage yielding the $[CH_2=OH]^+$ fragment at $m/z = 31$.",
        "smiles": "C=[OH+]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Loss of a methyl radical followed by hydroxyl radical loss ($M-32$).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Direct cleavage of the C-O bond to yield the pentyl cation $[C_5H_{11}]^+$ at $m/z = 71$.",
        "smiles": "[CH2+]CCCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand the dehydration fragmentation pathway of alcohols in mass spectrometry.",
      "process": "Step 1: Alcohols, particularly primary and secondary alcohols with hydrogens on the $\\beta$, $\\gamma$, or $\\delta$ carbons, undergo thermal or electron-impact-induced dehydration.\nStep 2: This elimination of water ($H_2O$, mass 18) occurs via a cyclic 5- or 6-membered transition state (often a 1,4-elimination).\nStep 3: The resulting fragment is an alkene-like radical cation $[M-18]^{\\bullet+}$.\nStep 4: For 1-pentanol, $M^{\\bullet+} = 88$. Loss of water ($88 - 18 = 70$) yields the pentene radical cation $[C_5H_{10}]^{\\bullet+}$ at $m/z = 70$.",
      "result": "The peak at $m/z = 70$ represents the loss of water ($M-18$) from the molecular ion."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q25_tertiary_alcohol_cleavage",
    "topic": "Fragmentation patterns (alcohols)",
    "difficulty_level": "Hard",
    "question_text": "In the mass spectrum of 2-methyl-2-butanol, what is the structure and $m/z$ value of the base peak formed via $\\alpha$-cleavage?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "$[(CH_3)_2C=OH]^+$ at $m/z = 59$, formed by loss of an ethyl radical.",
        "smiles": "CC(C)=[OH+]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$[CH_3CH_2C(CH_3)=OH]^+$ at $m/z = 73$, formed by loss of a methyl radical.",
        "smiles": "CCC(C)=[OH+]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$[C_5H_{10}]^{\\bullet+}$ at $m/z = 70$, formed by water loss.",
        "smiles": "C=C(C)CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$[C_4H_9]^+$ at $m/z = 57$, formed by cleavage of the C-O bond.",
        "smiles": "[C+](C)(C)CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Predict the preferred alpha-cleavage pathway for a tertiary alcohol.",
      "process": "Step 1: 2-Methyl-2-butanol is `CH3-CH2-C(OH)(CH3)2`.\nStep 2: The $\\alpha$-carbon is $C2$, which has two methyl groups and one ethyl group attached.\nStep 3: Alpha-cleavage can result in the loss of a methyl radical (to yield a fragment at $m/z = 73$) or the loss of an ethyl radical (to yield a fragment at $m/z = 59$).\nStep 4: Since the ethyl radical is larger and more stable than the methyl radical, its loss is highly favored.\nStep 5: The resulting ion is the resonance-stabilized oxocarbenium ion $[(CH_3)_2C=OH]^+$, which has a mass of $59$ g/mol.",
      "result": "The base peak is $[(CH_3)_2C=OH]^+$ at $m/z = 59$."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q26_cyclohexanol_fragmentation",
    "topic": "Fragmentation patterns (alcohols)",
    "difficulty_level": "Hard",
    "question_text": "The EI mass spectrum of cyclohexanol ($M^{\\bullet+} = 100$) exhibits a significant peak at $m/z = 57$. Which of the following sequences of events explains the formation of this fragment?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Alpha-cleavage of a ring C-C bond, followed by a hydrogen shift and cleavage of a C-C bond to lose a propyl radical ($C_3H_7^{\bullet}$), forming $[CH_2=CH-CH=OH]^+$.",
        "smiles": "C=CC=[OH+]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Simultaneous loss of a water molecule ($M-18$) and a methyl radical ($M-15$).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Direct ring contraction to cyclopentyl cation and loss of a propyl radical.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Loss of a $C_3H_5^{\bullet}$ radical directly from the intact ring.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Explain the complex ring-opening fragmentation of cyclic alcohols.",
      "process": "Step 1: Ionization of cyclohexanol yields the molecular ion at $m/z = 100$.\nStep 2: Alpha-cleavage of the $C1-C2$ bond opens the ring, giving a radical cation: $\\cdot CH_2-CH_2-CH_2-CH_2-CH=OH^+$.\nStep 3: A hydrogen transfer (1,5-H shift) occurs to move the radical site.\nStep 4: Subsequent cleavage of the $C4-C5$ bond results in the loss of a neutral propyl radical ($\\cdot CH_2CH_2CH_3$, mass 43) and leaves a stable, resonance-stabilized oxocarbenium fragment $[CH_2=CH-CH=OH]^+$ with $m/z = 57$ ($100 - 43 = 57$).",
      "result": "The $m/z = 57$ peak is formed via ring-opening alpha-cleavage, hydrogen transfer, and loss of a propyl radical."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q27_mclafferty_butanal",
    "topic": "Fragmentation patterns (ketones/aldehydes)",
    "difficulty_level": "Hard",
    "question_text": "Butanal ($CH_3CH_2CH_2CHO$, MW = 72) undergoes a McLafferty rearrangement. What are the structures and masses of the neutral alkene and the radical cation product formed?",
    "question_smiles": "CCCC=O",
    "options": [
      {
        "option_id": "A",
        "text": "Neutral ethylene ($CH_2=CH_2$, MW = 28) and the enol radical cation of acetaldehyde ($[CH_2=CH-OH]^{\\bullet+}$, $m/z = 44$).",
        "smiles": "C=C[OH+]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Neutral propene ($CH_3CH=CH_2$, MW = 42) and the enol radical cation of formaldehyde ($[CH_2=OH]^{\\bullet+}$, $m/z = 30$).",
        "smiles": "C=[OH+]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Neutral acetaldehyde ($CH_3CHO$, MW = 44) and the ethylene radical cation ($[CH_2=CH_2]^{\\bullet+}$, $m/z = 28$).",
        "smiles": "C=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Neutral ketene ($CH_2=C=O$, MW = 42) and the ethane radical cation ($[C_2H_6]^{\\bullet+}$, $m/z = 30$).",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand the mechanism and products of the McLafferty rearrangement in aldehydes.",
      "process": "Step 1: The McLafferty rearrangement requires a carbonyl compound with a hydrogen on the $\\gamma$-carbon. Butanal has a $\\gamma$-carbon ($C4$) with three hydrogens.\nStep 2: The reaction goes through a cyclic 6-membered transition state: the carbonyl oxygen abstracts a hydrogen from the $\\gamma$-carbon.\nStep 3: This is followed by $\\beta$-cleavage (cleavage of the $C2-C3$ bond, which is the $\\alpha$-$\\beta$ bond).\nStep 4: This cleavage yields neutral ethylene ($CH_2=CH_2$, MW = 28) from the $\\beta$- and $\\gamma$-carbons, and the enol radical cation of acetaldehyde ($[CH_2=CH-OH]^{\\bullet+}$, MW = 44) from the remaining fragment.",
      "result": "The products are neutral ethylene (MW = 28) and $[CH_2=CH-OH]^{\\bullet+}$ ($m/z = 44$)."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q28_mclafferty_pentanone",
    "topic": "Fragmentation patterns (ketones/aldehydes)",
    "difficulty_level": "Hard",
    "question_text": "In the mass spectrum of 2-pentanone ($CH_3COCH_2CH_2CH_3$, MW = 86), a prominent peak is observed at $m/z = 58$. What is the identity of this fragment?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The enol radical cation of acetone, $[CH_2=C(OH)CH_3]^{\\bullet+}$, formed by McLafferty rearrangement with loss of ethylene.",
        "smiles": "CC(O)=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The acylium ion, $[CH_3CO]^+$, formed by alpha-cleavage.",
        "smiles": "C[C+]=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The propyl carbocation, $[CH_3CH_2CH_2]^+$, formed by alpha-cleavage.",
        "smiles": "[CH2+]CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The enol radical cation of acetaldehyde, $[CH_2=CH(OH)]^{\\bullet+}$, formed by loss of propene.",
        "smiles": "C=C[OH+]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Apply the McLafferty rearrangement mechanism to a ketone.",
      "process": "Step 1: 2-Pentanone has a $\\gamma$-carbon ($C5$) with three hydrogens.\nStep 2: Under EI-MS, the molecular ion undergoes McLafferty rearrangement.\nStep 3: The carbonyl oxygen abstracts a hydrogen from $C5$, followed by cleavage of the $C3-C4$ ($\\alpha$-$\\beta$) bond.\nStep 4: The fragments are neutral ethylene ($CH_2=CH_2$, MW = 28) and the enol radical cation of acetone, $[CH_2=C(OH)CH_3]^{\\bullet+}$, which has a mass of $86 - 28 = 58$ g/mol.",
      "result": "The peak at $m/z = 58$ is the enol radical cation of acetone."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q29_mclafferty_requirements",
    "topic": "Fragmentation patterns (ketones/aldehydes)",
    "difficulty_level": "Medium",
    "question_text": "Which of the following carbonyl compounds is structurally INCAPABLE of undergoing a McLafferty rearrangement?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "3-Methyl-2-butanone",
        "smiles": "CC(C)C(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Methylpentanal",
        "smiles": "CCC(C)CC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Hexanone",
        "smiles": "CCCCC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Butanoic acid",
        "smiles": "CCCC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify the structural requirements for the McLafferty rearrangement.",
      "process": "Step 1: The McLafferty rearrangement requires a carbonyl group ($C=O$), an $\\alpha$-carbon, a $\\beta$-carbon, a $\\gamma$-carbon, and at least one hydrogen atom on the $\\gamma$-carbon (a $\\gamma$-H).\nStep 2: Let's analyze the compounds:\n- 3-Methyl-2-butanone: `CH3-CO-CH(CH3)2`. The carbonyl is at $C2$. The carbons attached are $C1$ (methyl) and $C3$ (CH). $C3$ has two methyl groups attached ($C4$ and $C4'$). Thus, $C3$ is the $\\alpha$-carbon, and the methyl groups are $\\beta$-carbons. There is no $\\gamma$-carbon, so it has no $\\gamma$-H.\n- 3-Methylpentanal: `H-CO-CH2-CH(CH3)-CH2-CH3`. Carbonyl is $C1$. $\\alpha$ is $C2$, $\\beta$ is $C3$, $\\gamma$ is $C4$. $C4$ has hydrogens.\n- 2-Hexanone: `CH3-CO-CH2-CH2-CH2-CH3`. $\\alpha$ is $C3$, $\\beta$ is $C4$, $\\gamma$ is $C5$ (has hydrogens).\n- Butanoic acid: `HO-CO-CH2-CH2-CH3`. $\\alpha$ is $C2$, $\\beta$ is $C3$, $\\gamma$ is $C4$ (has hydrogens).",
      "result": "3-Methyl-2-butanone cannot undergo McLafferty rearrangement due to the absence of a $\\gamma$-hydrogen."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q30_ketone_alpha_cleavage",
    "topic": "Fragmentation patterns (ketones/aldehydes)",
    "difficulty_level": "Medium",
    "question_text": "When 3-pentanone ($CH_3CH_2COCH_2CH_3$, MW = 86) undergoes electron ionization, it yields a major fragment peak at $m/z = 57$. What is the structure and name of this fragment?",
    "question_smiles": "CCC(=O)CC",
    "options": [
      {
        "option_id": "A",
        "text": "$[CH_3CH_2C\\equiv O]^+$; the propanoyl acylium ion.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$[CH_3CH_2CH_2CH_2]^+$; the butyl carbocation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$[CH_2=C(OH)CH_3]^{\\bullet+}$; the acetone enol radical cation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$[CH_3CH_2]^+$; the ethyl carbocation.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand alpha-cleavage of ketones to form acylium ions.",
      "process": "Step 1: In ketones, alpha-cleavage is a dominant pathway. The bond between the carbonyl carbon and the $\\alpha$-carbon is cleaved.\nStep 2: For 3-pentanone, cleavage of either $C2-C3$ bond yields an ethyl radical ($\\cdot CH_2CH_3$, mass 29) and the propanoyl acylium ion ($[CH_3CH_2C\\equiv O]^+$, mass 57).\nStep 3: The acylium ion is highly stable due to resonance: $R-\\text{C}^+=O \\leftrightarrow R-C\\equiv O^+$, where all atoms satisfy the octet rule in the major resonance contributor.",
      "result": "The $m/z = 57$ peak corresponds to the resonance-stabilized propanoyl acylium ion $[CH_3CH_2C\\equiv O]^+$."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q31_mclafferty_esters",
    "topic": "Fragmentation patterns (ketones/aldehydes)",
    "difficulty_level": "Hard",
    "question_text": "Ethyl butyrate ($CH_3CH_2CH_2COOCH_2CH_3$, MW = 116) can undergo a McLafferty rearrangement. Which of the following represents the $m/z$ and structure of the radical cation product formed when the rearrangement occurs on the acyl (butyrate) side of the ester?",
    "question_smiles": "CCCC(=O)OCC",
    "options": [
      {
        "option_id": "A",
        "text": "$m/z = 88$; the enol radical cation of ethyl acetate, $[CH_2=C(OH)OCH_2CH_3]^{\\bullet+}$.",
        "smiles": "CCOC(O)=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$m/z = 60$; the enol radical cation of acetic acid, $[CH_2=C(OH)OH]^{\\bullet+}$.",
        "smiles": "OC(O)=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$m/z = 74$; the enol radical cation of methyl acetate, $[CH_2=C(OH)OCH_3]^{\\bullet+}$.",
        "smiles": "COC(O)=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$m/z = 28$; the ethylene radical cation, $[CH_2=CH_2]^{\\bullet+}$.",
        "smiles": "C=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Explain the McLafferty rearrangement in esters.",
      "process": "Step 1: Ethyl butyrate is an ester. The acyl chain has a $\\gamma$-carbon ($C4$) relative to the carbonyl group.\nStep 2: The carbonyl oxygen abstracts a hydrogen from the $\\gamma$-carbon ($C4$), and the $C2-C3$ ($\\alpha$-$\\beta$) bond of the butyrate chain is cleaved.\nStep 3: This leads to the elimination of neutral ethylene ($CH_2=CH_2$, MW = 28).\nStep 4: The remaining radical cation is the enol of ethyl acetate: $[CH_2=C(OH)OCH_2CH_3]^{\\bullet+}$. Its mass is $116 - 28 = 88$ g/mol.",
      "result": "The product is $[CH_2=C(OH)OCH_2CH_3]^{\\bullet+}$ at $m/z = 88$."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q32_cyclic_ketone_cleavage",
    "topic": "Fragmentation patterns (ketones/aldehydes)",
    "difficulty_level": "Hard",
    "question_text": "Cyclohexanone ($M^{\\bullet+} = 98$) undergoes alpha-cleavage followed by hydrogen transfer and fragmentation to yield a significant peak at $m/z = 55$. What is the structure of this ion?",
    "question_smiles": "O=C1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "$[CH_2=CH-C\\equiv O]^+$; the acryloyl cation.",
        "smiles": "C=CC#[O+]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$[CH_3-CH_2-CH=CH]^+$; a secondary carbocation.",
        "smiles": "[CH+]=CCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$[CH_2=C(OH)CH_3]^{\\bullet+}$; the enol radical cation of acetone.",
        "smiles": "CC(O)=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$[C_4H_7]^+$; the cyclobutyl carbocation.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyze the ring-opening fragmentation of cyclic ketones.",
      "process": "Step 1: Cyclohexanone molecular ion ($m/z = 98$) undergoes alpha-cleavage at the $C1-C2$ bond to yield a ring-opened acyl radical/cation: $\\cdot CH_2-CH_2-CH_2-CH_2-CH_2-C\\equiv O^+$.\nStep 2: A hydrogen shift occurs, transferring a hydrogen to the radical site, which sets up a cleavage.\nStep 3: Cleavage of the C-C bond adjacent to the radical site results in the loss of a propyl radical ($\\cdot C_3H_7$, mass 43) and forms a conjugated, resonance-stabilized acylium ion $[CH_2=CH-C\\equiv O]^+$ ($m/z = 55$).",
      "result": "The $m/z = 55$ fragment is the acryloyl cation $[CH_2=CH-C\\equiv O]^+$."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q33_ir_active_dipole",
    "topic": "Infrared Spectroscopy Basics",
    "difficulty_level": "Easy",
    "question_text": "Why is the carbon-carbon triple bond stretch in symmetrical trans-3-hexene or symmetrical 3-hexyne not observed in an infrared (IR) spectrum?",
    "question_smiles": "CCC#CCC",
    "options": [
      {
        "option_id": "A",
        "text": "The vibration is symmetric, meaning there is no change in the molecular dipole moment during the stretching vibration, making it IR-inactive.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The triple bond is too strong to absorb infrared radiation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The absorption occurs in the fingerprint region, where it is obscured by C-C single bonds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Symmetrical alkenes and alkynes only absorb ultraviolet radiation.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand the fundamental selection rule for infrared absorption.",
      "process": "Step 1: Infrared light consists of alternating electric fields.\nStep 2: For an electromagnetic wave to transfer energy to a molecular vibration, the vibration must generate an oscillating dipole moment that can couple with the electric field.\nStep 3: If a vibration is completely symmetric and does not change the dipole moment (e.g., symmetric stretch of trans-3-hexene or 3-hexyne), it cannot absorb IR radiation (it is IR-inactive).",
      "result": "A change in the molecular dipole moment during vibration is required for IR activity."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q34_hookes_law_decrease",
    "topic": "Infrared Spectroscopy Basics",
    "difficulty_level": "Medium",
    "question_text": "According to Hooke's Law, the stretching vibrational frequency ($\\tilde{\\nu}$) of a diatomic system depends on the bond force constant ($f$) and the reduced mass ($\\mu$). Which of the following changes will result in a DECREASE in the stretching frequency?",
    "question_smiles": "C",
    "options": [
      {
        "option_id": "A",
        "text": "Decreasing the bond strength (force constant $f$) or increasing the masses of the bonded atoms (increasing reduced mass $\\mu$).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Increasing the bond strength or decreasing the masses of the bonded atoms.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Increasing the masses of the bonded atoms and decreasing the bond strength.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Increasing the concentration of the analyte in the solvent.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Apply Hooke's Law to relate physical properties of bonds to their IR absorption frequencies.",
      "process": "Step 1: The frequency $\\tilde{\\nu}$ is directly proportional to $\\sqrt{f}$ (force constant, representing bond strength).\nStep 2: It is inversely proportional to $\\sqrt{\\mu}$ (reduced mass).\nStep 3: Therefore, to decrease $\\tilde{\\nu}$, we must decrease $f$ (weaker bond) or increase $\\mu$ (bond to heavier atoms).",
      "result": "Decreasing bond strength or increasing atomic mass decreases the stretching wavenumber."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q35_deuterium_shift",
    "topic": "Infrared Spectroscopy Basics",
    "difficulty_level": "Medium",
    "question_text": "Given that deuterium ($^{2}\\text{H}$ or $\\text{D}$) has twice the atomic mass of protium ($^{1}\\text{H}$), how does the stretching frequency of a $C-D$ bond compare to that of a $C-H$ bond, assuming their bond strengths are nearly identical?",
    "question_smiles": "[2H]C(C)(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "The $C-D$ bond stretches at a lower wavenumber ($\\sim 2100-2200\\text{ cm}^{-1}$) compared to the $C-H$ bond ($\\sim 2850-3000\\text{ cm}^{-1}$) because of its larger reduced mass.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The $C-D$ bond stretches at a higher wavenumber ($\\sim 4000\\text{ cm}^{-1}$) because of its greater density.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both bonds stretch at the exact same wavenumber because they have the same force constant.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The $C-D$ bond is IR-inactive because of its symmetry.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Use Hooke's Law to calculate the isotopic shift in vibrational frequency.",
      "process": "Step 1: The reduced mass of a C-H bond is $\\mu_{CH} = \\frac{12 \\times 1}{12 + 1} = 0.923$.\nStep 2: The reduced mass of a C-D bond is $\\mu_{CD} = \\frac{12 \\times 2}{12 + 2} = 1.714$.\nStep 3: The ratio of the frequencies is:\n$\\frac{\\tilde{\\nu}_{CD}}{\\tilde{\\nu}_{CH}} = \\sqrt{\\frac{\\mu_{CH}}{\\mu_{CD}}} = \\sqrt{\\frac{0.923}{1.714}} \\approx \\sqrt{0.538} \\approx 0.73$.\nStep 4: Multiply this by the C-H wavenumber: $2900 \\times 0.73 \\approx 2120\\text{ cm}^{-1}$.",
      "result": "The C-D bond stretches at approximately $2100\\text{ cm}^{-1}$ due to the heavier mass of deuterium."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q36_stretching_vs_bending",
    "topic": "Infrared Spectroscopy Basics",
    "difficulty_level": "Easy",
    "question_text": "In infrared spectroscopy, why do stretching vibrations generally require higher energy (absorb at higher wavenumbers) than bending vibrations for the same group of atoms?",
    "question_smiles": "O",
    "options": [
      {
        "option_id": "A",
        "text": "It requires more energy to compress or stretch a chemical bond along its axis (greater force constant) than it does to change the bond angle (lower force constant).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Bending vibrations involve heavier atoms than stretching vibrations.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Stretching vibrations always result in a larger dipole moment change.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Bending vibrations are forbidden by quantum mechanical selection rules.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand the energetic differences between stretching and bending modes.",
      "process": "Step 1: The force constant $f$ represents the stiffness of the bond.\nStep 2: Resistance to changing bond lengths (stretching) is significantly higher than resistance to changing bond angles (bending).\nStep 3: Since $\\tilde{\\nu}$ is proportional to $\\sqrt{f}$, a larger force constant for stretching results in a higher frequency (wavenumber) than bending.",
      "result": "Stretching has a higher force constant than bending, resulting in higher absorption wavenumbers."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q37_vibrational_modes_count",
    "topic": "Infrared Spectroscopy Basics",
    "difficulty_level": "Medium",
    "question_text": "A non-linear molecule containing $N$ atoms has how many fundamental vibrational modes, and how many are stretching vs bending?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "$3N-6$ total modes; of these, $N-1$ are stretching modes and $2N-5$ are bending modes.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$3N-5$ total modes; all are stretching modes.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$3N$ total modes; half are stretching and half are bending.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$2N+2$ total modes; all are bending modes.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand the degrees of freedom and vibrational modes of non-linear molecules.",
      "process": "Step 1: A non-linear molecule has $3N$ total degrees of freedom, where 3 are translational and 3 are rotational. This leaves $3N-6$ vibrational modes.\nStep 2: For any molecule with $N$ atoms, there are exactly $N-1$ chemical bonds (for acyclic structures) or $N-1$ independent stretching degrees of freedom.\nStep 3: The remaining vibrational modes must be bending modes: $(3N-6) - (N-1) = 2N-5$.",
      "result": "A non-linear molecule has $3N-6$ total vibrational modes, split into $N-1$ stretches and $2N-5$ bends."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q38_hydroxyl_hydrogen_bonding",
    "topic": "Infrared stretching frequencies",
    "difficulty_level": "Medium",
    "question_text": "A dilute solution of cyclohexanol in carbon tetrachloride ($CCl_4$) exhibits a sharp IR absorption band at $3620\\text{ cm}^{-1}$. As the concentration of cyclohexanol is increased, a broad, intense band at $3300\\text{ cm}^{-1}$ emerges. Which statement correctly explains this observation?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The band at $3620\\text{ cm}^{-1}$ corresponds to 'free' (non-hydrogen-bonded) O-H stretching, while the broad band at $3300\\text{ cm}^{-1}$ corresponds to hydrogen-bonded O-H stretching, which weakens the O-H bond.",
        "smiles": "C1CCC(CC1)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The cyclohexanol undergoes dehydration at higher concentrations to form cyclohexene.",
        "smiles": "C1=CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The C-H bonds undergo hydrogen bonding with $CCl_4$, shifting the absorption to lower frequency.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclohexanol dimers undergo ring-opening, exposing more C-O single bonds.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand the effect of concentration and hydrogen bonding on O-H stretching frequencies.",
      "process": "Step 1: In concentrated solutions, cyclohexanol molecules form hydrogen-bonded networks. Hydrogen bonding weakens the O-H covalent bond, reducing its force constant and shifting the stretch to a lower wavenumber ($3300\\text{ cm}^{-1}$).\nStep 2: The distribution of different hydrogen-bonding configurations causes a wide range of frequencies, resulting in a broad band.\nStep 3: Upon extreme dilution, molecules are separated by $CCl_4$ molecules, preventing hydrogen bonding. The O-H group remains 'free' and behaves as an isolated bond, which is stronger (higher force constant) and absorbs at a higher, sharp wavenumber ($3620\\text{ cm}^{-1}$).",
      "result": "Hydrogen bonding weakens the O-H bond, shifting it to lower, broader wavenumbers; dilution restores the free, sharp O-H stretch at higher wavenumbers."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q39_amine_stretching",
    "topic": "Infrared stretching frequencies",
    "difficulty_level": "Medium",
    "question_text": "How can IR spectroscopy be used to distinguish between a primary amine ($R-NH_2$) and a secondary amine ($R_2NH$)?",
    "question_smiles": "CCN",
    "options": [
      {
        "option_id": "A",
        "text": "Primary amines show two distinct N-H stretching bands (symmetric and asymmetric) in the $3300-3500\\text{ cm}^{-1}$ region, whereas secondary amines show only a single N-H stretching band.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Primary amines absorb at $1700\\text{ cm}^{-1}$, whereas secondary amines absorb at $2100\\text{ cm}^{-1}$.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Secondary amines show a broad band at $3300\\text{ cm}^{-1}$ that disappears upon dilution, whereas primary amines do not.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Primary amines show no N-H stretch due to symmetry, while secondary amines show a strong bend.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguish primary and secondary amines based on N-H stretching patterns.",
      "process": "Step 1: Both primary and secondary amines have N-H stretching vibrations in the $3300-3500\\text{ cm}^{-1}$ region.\nStep 2: A primary amine ($R-NH_2$) has two N-H bonds. These vibrate in two modes: symmetric (both bonds stretching together) and asymmetric (one stretching while the other compresses). These modes have slightly different energies, producing two separate peaks.\nStep 3: A secondary amine ($R_2NH$) has only one N-H bond, so it can only undergo a single stretching vibration, producing a single peak.",
      "result": "Primary amines show two N-H stretching peaks, whereas secondary amines show only one."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q40_alkyne_stretching",
    "topic": "Infrared stretching frequencies",
    "difficulty_level": "Medium",
    "question_text": "A hydrocarbon sample exhibits sharp, strong IR absorption bands at $3300\\text{ cm}^{-1}$ and $2120\\text{ cm}^{-1}$. What functional group is indicated by these bands?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "A terminal alkyne (sp C-H stretch at $3300\\text{ cm}^{-1}$ and $C\\equiv C$ stretch at $2120\\text{ cm}^{-1}$).",
        "smiles": "C#CCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "An internal alkyne.",
        "smiles": "CC#CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A terminal alkene.",
        "smiles": "C=CCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A nitrile.",
        "smiles": "CC#N",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify the IR signatures of terminal alkynes.",
      "process": "Step 1: The band at $3300\\text{ cm}^{-1}$ is sharp and strong, which is characteristic of an $sp$ hybridized C-H stretch.\nStep 2: The band at $2120\\text{ cm}^{-1}$ is characteristic of a triple bond ($C\\equiv C$) stretch.\nStep 3: Together, these two bands indicate a terminal alkyne group ($-C\\equiv C-H$).\nStep 4: An internal alkyne (like 2-butyne) has no $sp$ C-H bond, so it would lack the $3300\\text{ cm}^{-1}$ peak, and its $C\\equiv C$ stretch would be very weak or silent due to symmetry.",
      "result": "A terminal alkyne shows both the $sp$ C-H stretch at $3300\\text{ cm}^{-1}$ and the $C\\equiv C$ stretch at $2120\\text{ cm}^{-1}$."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q41_aldehyde_fermi_doublet",
    "topic": "Infrared stretching frequencies",
    "difficulty_level": "Hard",
    "question_text": "Which of the following sets of IR absorption bands is diagnostic for an aldehyde, distinguishing it from ketones, esters, and other carbonyl-containing compounds?",
    "question_smiles": "CC=O",
    "options": [
      {
        "option_id": "A",
        "text": "A strong carbonyl stretch at $\\sim 1725\\text{ cm}^{-1}$ along with a doublet of weak-to-medium intensity bands at $\\sim 2720\\text{ cm}^{-1}$ and $\\sim 2820\\text{ cm}^{-1}$ (due to C-H stretching of the formyl group).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A single sharp band at $3300\\text{ cm}^{-1}$ and a strong stretch at $1715\\text{ cm}^{-1}$.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A strong stretch at $1680\\text{ cm}^{-1}$ and a broad peak at $3400\\text{ cm}^{-1}$.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A doublet at $1760\\text{ cm}^{-1}$ and $1820\\text{ cm}^{-1}$.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Explain the origin of the aldehyde C-H stretching doublet (Fermi resonance).",
      "process": "Step 1: The aldehyde $sp^2$ C-H bond has a fundamental stretching vibration around $2800\\text{ cm}^{-1}$.\nStep 2: The aldehyde C-H bending vibration has a fundamental frequency around $1390\\text{ cm}^{-1}$.\nStep 3: The first overtone of this bending vibration is approximately $2 \\times 1390 = 2780\\text{ cm}^{-1}$.\nStep 4: Because the fundamental stretch and the overtone of the bend are very close in energy and have the same symmetry, they couple quantum mechanically (Fermi resonance). This interaction splits the single absorption into two peaks: one shifted to higher energy ($2820\\text{ cm}^{-1}$) and one shifted to lower energy ($2720\\text{ cm}^{-1}$).",
      "result": "The doublet is caused by Fermi resonance between the C-H stretch and the bending overtone."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q42_nitrile_vs_alkyne",
    "topic": "Infrared stretching frequencies",
    "difficulty_level": "Medium",
    "question_text": "An unknown compound is known to contain either a nitrile ($C\\equiv N$) or an alkyne ($C\\equiv C$) group. How can these two functional groups be differentiated by IR spectroscopy?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The nitrile stretch occurs at a slightly higher frequency ($\\sim 2230-2260\\text{ cm}^{-1}$) and is much more intense because of the highly polar C-N bond, whereas the alkyne stretch occurs at $\\sim 2100-2260\\text{ cm}^{-1}$ and is weaker or inactive.",
        "smiles": "CC#N",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The alkyne stretch is broad and occurs at $3300\\text{ cm}^{-1}$, while the nitrile stretch is sharp and occurs at $1650\\text{ cm}^{-1}$.",
        "smiles": "C#CCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Nitriles show no absorption in the triple bond region, but show a strong band at $1500\\text{ cm}^{-1}$.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Alkynes show a strong C-N single bond stretch at $1200\\text{ cm}^{-1}$.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguish between nitrile and alkyne triple bond stretches based on peak intensity and frequency.",
      "process": "Step 1: The carbon-nitrogen triple bond ($C\\equiv N$) is highly polar due to the electronegativity difference between C and N.\nStep 2: A vibration of a polar bond produces a large change in dipole moment, leading to a strong, sharp absorption peak at $2230-2260\\text{ cm}^{-1}$.\nStep 3: The carbon-carbon triple bond ($C\\equiv C$) is nonpolar (or weakly polar in unsymmetric alkynes). Its stretch produces a very small dipole change, resulting in a weak peak at $2100-2260\\text{ cm}^{-1}$. If symmetric, it is completely silent.",
      "result": "Nitriles show a strong, intense band at $2230-2260\\text{ cm}^{-1}$, whereas alkynes show a weak or silent band."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q43_carbonyl_substituent_effects",
    "topic": "Effect of conjugation and substituents on carbonyls",
    "difficulty_level": "Hard",
    "question_text": "Substituents attached to a carbonyl group alter its stretching frequency by either inductive (electron-withdrawing) or resonance (electron-donating) effects. Arrange the following compounds in order of decreasing carbonyl stretching frequency ($C=O$ wavenumber, highest to lowest):\n  I. Ethyl acetate ($CH_3COOCH_2CH_3$)\n  II. Acetone ($CH_3COCH_3$)\n  III. N,N-Dimethylacetamide ($CH_3CON(CH_3)_2$)",
    "question_smiles": "CC(=O)OCC",
    "options": [
      {
        "option_id": "A",
        "text": "I > II > III",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "III > II > I",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "II > I > III",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "I > III > II",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand the competing inductive and resonance effects of substituents on carbonyl stretching frequencies.",
      "process": "Step 1: Let's analyze the effects:\n- Esters (I): The oxygen atom is electronegative and withdraws electron density inductively from the carbonyl carbon ($R-C(=O)-OR$). This increases the double-bond character of the carbonyl by destabilizing the polar resonance structure ($R-C(O^-)=O^+-R$). Thus, the C=O bond is stronger and absorbs at a higher frequency (~1735 cm$^{-1}$).\n- Ketones (II): Alkyl groups are weakly electron-donating inductively, showing a standard ketone frequency of ~1715 cm$^{-1}$ .\n- Amides (III): Nitrogen is less electronegative than oxygen and is an excellent $\\pi$-donor. The resonance contributor ($R-C(O^-)=N^+(CH_3)_2$) is highly stable, which significantly increases the single-bond character of the C=O bond. This reduces the force constant and lowers the wavenumber dramatically to ~1660 cm$^{-1}$.",
      "result": "The correct order is Ester (I) > Ketone (II) > Amide (III)."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q44_conjugation_shift",
    "topic": "Effect of conjugation on carbonyls",
    "difficulty_level": "Hard",
    "question_text": "Why does the carbonyl stretching frequency of 2-cyclohexenone ($1685\\text{ cm}^{-1}$) occur at a lower wavenumber than that of cyclohexanone ($1715\\text{ cm}^{-1}$)?",
    "question_smiles": "O=C1C=CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Conjugation with the C=C double bond allows resonance donation of $\\pi$-electrons, which increases the single-bond character of the C=O bond, thereby lowering its force constant.",
        "smiles": "O=C1C=CCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The ring strain of 2-cyclohexenone is lower due to the planar sp2 carbon atoms.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The reduced mass of the vibrating system is increased because of the double bond.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Conjugation increases the electronegativity of the oxygen atom, making the bond harder to stretch.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Explain the effect of conjugation on carbonyl stretching frequencies.",
      "process": "Step 1: 2-Cyclohexenone is an $\\alpha,\\beta$-unsaturated ketone.\nStep 2: Resonance structures can be drawn where the $\\pi$ electrons of the C=C double bond are delocalized into the carbonyl:\n$O=C-C=C \\leftrightarrow ^{-}O-C=C-C^+$.\nStep 3: This resonance contributor increases the single-bond character of the C=O bond (decreasing the force constant $f$).\nStep 4: Since $\\tilde{\\nu}$ is proportional to $\\sqrt{f}$, a weaker bond results in a lower stretching frequency (from $1715\\text{ cm}^{-1}$ to $1685\\text{ cm}^{-1}$).",
      "result": "Conjugation decreases the carbonyl stretching frequency by increasing its single-bond character via resonance."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q45_ring_strain_ketones",
    "topic": "Effect of conjugation and substituents on carbonyls",
    "difficulty_level": "Hard",
    "question_text": "Consider the cyclic ketones: cyclohexanone, cyclopentanone, and cyclobutanone. What is the correct order of their carbonyl stretching frequencies, and what is the physical explanation?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclobutanone ($1780\\text{ cm}^{-1}$) > cyclopentanone ($1745\\text{ cm}^{-1}$) > cyclohexanone ($1715\\text{ cm}^{-1}$); decreasing ring size increases the internal C-C-C angle compression, which increases the s-character of the C=O bond, making it stronger and harder to stretch.",
        "smiles": "O=C1CCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclohexanone > cyclopentanone > cyclobutanone; larger rings have more atoms, increasing the force constant of the C=O bond.",
        "smiles": "O=C1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclobutanone = cyclopentanone = cyclohexanone; ring strain only affects C-C bonds, not the C=O bond.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclopentanone > cyclohexanone > cyclobutanone; five-membered rings have unique aromatic-like resonance stabilization.",
        "smiles": "O=C1CCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand how ring strain affects exocyclic double bond stretching frequencies.",
      "process": "Step 1: In cyclic systems, ring size dictates the bond angles. In cyclohexanone, the angle is close to the ideal $120^{\\circ}$ for $sp^2$ carbons.\nStep 2: As ring size decreases (cyclopentanone to cyclobutanone), the internal C-C-C angle is compressed (forced to be smaller than $120^{\\circ}$).\nStep 3: To accommodate this compression, the carbons use orbitals with more $p$-character for the internal ring bonds.\nStep 4: This leaves the exocyclic C=O bond with more $s$-character. Because $s$ orbitals are closer to the nucleus, a bond with higher $s$-character is shorter, stronger, and has a higher force constant, shifting the stretching frequency to higher wavenumbers (1715 $\\rightarrow$ 1745 $\\rightarrow$ 1780 cm$^{-1}$).",
      "result": "Decreasing ring size increases the carbonyl stretching frequency due to increased s-character of the exocyclic C=O bond."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q46_lactone_ring_strain",
    "topic": "Effect of conjugation and substituents on carbonyls",
    "difficulty_level": "Hard",
    "question_text": "Compare the carbonyl stretching frequencies of $\\gamma$-butyrolactone (a 5-membered cyclic ester) and $\\delta$-valerolactone (a 6-membered cyclic ester). Which lactone has the higher stretching frequency and why?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "$\\gamma$-butyrolactone absorbs at a higher frequency ($\\sim 1770\\text{ cm}^{-1}$) than $\\delta$-valerolactone ($\\sim 1735\\text{ cm}^{-1}$) because of increased ring strain in the 5-membered ring.",
        "smiles": "O=C1CCCO1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$\\delta$-valerolactone absorbs at a higher frequency because of greater hyperconjugation from the extra methylene group.",
        "smiles": "O=C1CCCCO1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both absorb at the same frequency because they are both esters.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$\\gamma$-butyrolactone absorbs at a lower frequency because it undergoes rapid ring-opening.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyze ring strain effects in cyclic esters (lactones).",
      "process": "Step 1: An acyclic ester typically absorbs at ~1735 cm$^{-1}$.\nStep 2: A 6-membered lactone ($\\delta$-valerolactone) has little ring strain and absorbs close to the acyclic ester value (~1735 cm$^{-1}$).\nStep 3: A 5-membered lactone ($\\gamma$-butyrolactone) has significant ring strain.\nStep 4: Decreasing the ring size increases the exocyclic C=O bond strength (similar to cyclic ketones) due to increased s-character. Thus, its carbonyl stretch shifts to a higher frequency (~1770 cm$^{-1}$).",
      "result": "$\\gamma$-butyrolactone has a higher stretching frequency (~1770 cm$^{-1}$) due to ring strain."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q47_conjugated_esters",
    "topic": "Effect of conjugation on carbonyls",
    "difficulty_level": "Hard",
    "question_text": "Which of the following compounds will exhibit the LOWEST carbonyl stretching frequency in its IR spectrum?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Methyl 4-aminobenzoate",
        "smiles": "COC(=O)C1=CC=C(N)C=C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methyl benzoate",
        "smiles": "COC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Methyl cyclohexanecarboxylate",
        "smiles": "COC(=O)C1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyl acetate",
        "smiles": "COC(=O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Assess the impact of conjugation and electron-donating substituents on ester carbonyl stretching frequencies.",
      "process": "Step 1: Normal aliphatic esters (methyl acetate, methyl cyclohexanecarboxylate) stretch at ~1735–1740 cm$^{-1}$.\nStep 2: Conjugated esters (methyl benzoate) show a lower frequency (~1720 cm$^{-1}$) due to conjugation with the benzene ring.\nStep 3: Methyl 4-aminobenzoate has an amino group ($-NH_2$) para to the ester. The nitrogen lone pair is strongly electron-donating by resonance and can delocalize all the way into the carbonyl oxygen:\n$H_2N-C_6H_4-C(=O)OCH_3 \\leftrightarrow H_2N^+=C_6H_4=C(O^-)OCH_3$.\nStep 4: This greatly increases the single-bond character of the carbonyl C-O, lowering the force constant and shifting the wavenumber to ~1700–1705 cm$^{-1}$.",
      "result": "Methyl 4-aminobenzoate has the lowest carbonyl stretching frequency due to strong para-resonance donation."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q48_fingerprint_region",
    "topic": "Fingerprint region",
    "difficulty_level": "Easy",
    "question_text": "The IR spectrum of an organic molecule is typically divided into the functional group region and the fingerprint region. Which of the following correctly describes the fingerprint region?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "It spans from $400\\text{ cm}^{-1}$ to $1500\\text{ cm}^{-1}$ and contains complex bending and single-bond stretching vibrations that are unique to the specific compound's skeleton.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It spans from $1500\\text{ cm}^{-1}$ to $3000\\text{ cm}^{-1}$ and is highly predictable based solely on functional groups.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It is only useful for identifying molecules containing heavy halogens like Br and I.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It contains only stretching vibrations of hydrogen-bonded heteroatoms.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand the utility of the fingerprint region in IR spectroscopy.",
      "process": "Step 1: The region below $1500\\text{ cm}^{-1}$ contains C-C, C-O, and C-N single-bond stretching and various bending vibrations.\nStep 2: Because these bonds have similar strengths and masses, their vibrations couple extensively, leading to a highly complex set of peaks.\nStep 3: This pattern is unique to each molecule (like a human fingerprint). Even closely related isomers that have the same functional groups will have different fingerprint regions.",
      "result": "The fingerprint region is unique to each compound and is used for definitive identification."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q49_reaction_monitoring",
    "topic": "Fingerprint region and applications",
    "difficulty_level": "Medium",
    "question_text": "A student performs the oxidation of cyclohexanol to cyclohexanone using pyridinium chlorochromate (PCC). How can the student most easily confirm the completion of the reaction using IR spectroscopy?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The disappearance of a broad O-H stretch at $\\sim 3300\\text{ cm}^{-1}$ and the appearance of a strong carbonyl stretch at $\\sim 1715\\text{ cm}^{-1}$.",
        "smiles": "O=C1CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The disappearance of a sharp sp3 C-H stretch at $2950\\text{ cm}^{-1}$ and the appearance of a C=C stretch at $1650\\text{ cm}^{-1}$.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The appearance of a sharp nitrile band at $2250\\text{ cm}^{-1}$.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The appearance of a broad carboxylic acid O-H band at $2500-3000\\text{ cm}^{-1}$.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Apply IR spectroscopy to monitor chemical reactions.",
      "process": "Step 1: The starting material is cyclohexanol, which has an alcohol group. The IR spectrum will show a prominent, broad O-H stretch at $\\sim 3300\\text{ cm}^{-1}$.\nStep 2: The product is cyclohexanone, a ketone. The ketone will show a strong C=O stretch at $\\sim 1715\\text{ cm}^{-1}$ and no O-H stretch.\nStep 3: If the reaction is complete, the broad O-H band must completely disappear, and the C=O band must appear.",
      "result": "Disappearance of O-H (~3300 cm$^{-1}$) and appearance of C=O (~1715 cm$^{-1}$) confirms complete oxidation."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q50_isomer_differentiation",
    "topic": "Fingerprint region and applications",
    "difficulty_level": "Hard",
    "question_text": "Two isomeric compounds with the molecular formula $C_5H_{10}O$ are 3-pentanone and 3-penten-1-ol. Which of the following is the most definitive way to distinguish them using BOTH IR and MS?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "In IR, 3-pentanone shows a strong $C=O$ stretch at $1715\\text{ cm}^{-1}$ and no $O-H$ stretch, while 3-penten-1-ol shows a broad $O-H$ stretch at $3300\\text{ cm}^{-1}$ and a weak $C=C$ stretch at $1650\\text{ cm}^{-1}$. In MS, 3-pentanone undergoes $\\alpha$-cleavage to give a major peak at $m/z = 57$ (loss of ethyl), while 3-penten-1-ol shows alpha-cleavage and water loss peaks.",
        "smiles": "CCC(=O)CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "In IR, 3-pentanone shows a C-H stretch at $3300\\text{ cm}^{-1}$, while 3-penten-1-ol does not. In MS, both show identical fragmentation patterns.",
        "smiles": "CCCOCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-penten-1-ol shows a strong nitrile stretch at $2250\\text{ cm}^{-1}$, while 3-pentanone shows an anhydride doublet.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-pentanone contains nitrogen, so its mass spectrum molecular ion is odd, while 3-penten-1-ol is even.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Use complementary spectroscopic techniques (IR and MS) to distinguish structural isomers.",
      "process": "Step 1: Analyze 3-pentanone ($CH_3CH_2COCH_2CH_3$):\n- IR: ketone carbonyl stretch at $1715\\text{ cm}^{-1}$, no O-H or C=C stretches.\n- MS: alpha-cleavage of ethyl radical ($M-29$) gives a propanoyl acylium ion ($[CH_3CH_2CO]^+$) at $m/z = 57$.\nStep 2: Analyze 3-penten-1-ol ($HO-CH_2CH_2CH=CHCH_3$):\n- IR: broad alcohol O-H stretch at $3300\\text{ cm}^{-1}$, weak alkene C=C stretch at $1650\\text{ cm}^{-1}$.\n- MS: undergoes dehydration to lose water ($M-18$), giving $m/z = 70$. Alpha-cleavage of the $CH_2-OH$ bond yields $[H_2C=OH]^+$ at $m/z = 31$.",
      "result": "Comparing carbonyl vs. hydroxyl stretches in IR, and acylium ion vs. dehydration/alpha-cleavage in MS, distinguishes these isomers."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q_dynamic_ir_dips",
    "topic": "Infrared Spectroscopy",
    "difficulty_level": "Medium",
    "question_text": "Match each functional group to its characteristic IR absorption wavenumber.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCO",
        "correctAnswer": "Broad 3300 cm-1 (O-H stretch)"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Sharp 1715 cm-1 (C=O stretch)"
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Sharp 2250 cm-1 (C#N stretch)"
      },
      {
        "smiles": "CC#C",
        "correctAnswer": "Sharp 2120 cm-1 (C#C stretch)"
      }
    ],
    "match_options": [
      "Broad 3300 cm-1 (O-H stretch)",
      "Sharp 1715 cm-1 (C=O stretch)",
      "Sharp 2250 cm-1 (C#N stretch)",
      "Sharp 2120 cm-1 (C#C stretch)",
      "Broad 1100 cm-1 (C-O stretch)"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect IR bands",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identifying functional groups via IR key frequencies.",
      "process": "Alcohols exhibit broad O-H stretch at 3300. Ketones show strong, sharp carbonyl stretch at 1715. Nitriles absorb around 2250 (triple bond). Terminal alkynes absorb around 2120.",
      "result": "Wavenumbers correctly mapped."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q2",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 44$ and a base peak at $m/z = 29$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 29,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 44,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Propionaldehyde",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Propene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetaldehyde",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Chlorobenzene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is Acetaldehyde.",
      "result": "The compound is Acetaldehyde."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q4",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 74$ and a base peak at $m/z = 59$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 59,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 74,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "3-Pentanone",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Diethyl ether",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Propyne",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Chlorobenzene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is Diethyl ether.",
      "result": "The compound is Diethyl ether."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q6",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 1725,
          "w": 20,
          "d": 85
        },
        {
          "xc": 2720,
          "w": 30,
          "d": 30
        },
        {
          "xc": 2820,
          "w": 30,
          "d": 30
        },
        {
          "xc": 2950,
          "w": 40,
          "d": 50
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Acetaldehyde",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Bromobenzene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetonitrile",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclohexane",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Acetaldehyde.",
      "result": "The compound is Acetaldehyde."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q1",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 119$ and a base peak at $m/z = 83$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 83,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 119,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Propanoic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Chloroform",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Ethyl acetate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propionaldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is Chloroform.",
      "result": "The compound is Chloroform."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q5",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 122$ and a base peak at $m/z = 43$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 43,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 122,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Chloroform",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Bromobenzene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Anisole",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Bromopropane",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is 1-Bromopropane.",
      "result": "The compound is 1-Bromopropane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q7",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 1790,
          "w": 20,
          "d": 85
        },
        {
          "xc": 700,
          "w": 40,
          "d": 55
        },
        {
          "xc": 1600,
          "w": 20,
          "d": 30
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Ethylbenzene",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Cyclohexanone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Bromopropane",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzoyl chloride",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Benzoyl chloride.",
      "result": "The compound is Benzoyl chloride."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q9",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 78$ and a base peak at $m/z = 63$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 63,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 78,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Tetrahydrofuran",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Cyclopentene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dimethyl sulfoxide",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Dichloromethane",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is Dimethyl sulfoxide.",
      "result": "The compound is Dimethyl sulfoxide."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q11",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3030,
          "w": 20,
          "d": 25
        },
        {
          "xc": 1600,
          "w": 20,
          "d": 30
        },
        {
          "xc": 1500,
          "w": 20,
          "d": 30
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Benzene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Phenol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Chlorobenzene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Aniline",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Benzene.",
      "result": "The compound is Benzene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q13",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3020,
          "w": 20,
          "d": 25
        },
        {
          "xc": 1650,
          "w": 20,
          "d": 20
        },
        {
          "xc": 2920,
          "w": 40,
          "d": 50
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Aniline",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Acetaldehyde",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclopentene",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Methyl acetate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Cyclopentene.",
      "result": "The compound is Cyclopentene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q15",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 72$ and a base peak at $m/z = 44$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 44,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 72,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Propan-2-ol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Butyraldehyde",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Nitrobenzene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is Butyraldehyde.",
      "result": "The compound is Butyraldehyde."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q16",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 74$ and a base peak at $m/z = 59$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 59,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 74,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Acetophenone",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "t-Butyl alcohol",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Cyclohexene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Phenol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is t-Butyl alcohol.",
      "result": "The compound is t-Butyl alcohol."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q17",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 123$ and a base peak at $m/z = 77$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 77,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 123,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Propyne",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Cyclopentene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Nitrobenzene",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is Nitrobenzene.",
      "result": "The compound is Nitrobenzene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q19",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 112$ and a base peak at $m/z = 77$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 77,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 112,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Chlorobenzene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Bromopropane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Propene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-Pentanone",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is Chlorobenzene.",
      "result": "The compound is Chlorobenzene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q20",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3000,
          "w": 300,
          "d": 75
        },
        {
          "xc": 1710,
          "w": 20,
          "d": 85
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Acetic acid",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetaldehyde",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Toluene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Isobutylene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Acetic acid.",
      "result": "The compound is Acetic acid."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q22",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 72$ and a base peak at $m/z = 43$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 43,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 72,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-Bromopropane",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Propyne",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Butanone",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Tetrahydrofuran",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is Butanone.",
      "result": "The compound is Butanone."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q23",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3050,
          "w": 20,
          "d": 20
        },
        {
          "xc": 700,
          "w": 40,
          "d": 50
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Chlorobenzene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "t-Butyl alcohol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzaldehyde",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Isobutylene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Chlorobenzene.",
      "result": "The compound is Chlorobenzene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q25",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 2950,
          "w": 40,
          "d": 50
        },
        {
          "xc": 650,
          "w": 40,
          "d": 40
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Methanol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "1-Bromopropane",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Propan-2-ol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propyne",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is 1-Bromopropane.",
      "result": "The compound is 1-Bromopropane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q26",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 2950,
          "w": 40,
          "d": 50
        },
        {
          "xc": 650,
          "w": 40,
          "d": 40
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-Bromopropane",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Dimethyl ether",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethyl benzoate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acetophenone",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is 1-Bromopropane.",
      "result": "The compound is 1-Bromopropane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q28",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 60$ and a base peak at $m/z = 43$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 43,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 60,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Acetic acid",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Aniline",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Chlorobenzene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is Acetic acid.",
      "result": "The compound is Acetic acid."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q29",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3300,
          "w": 150,
          "d": 70
        },
        {
          "xc": 3050,
          "w": 20,
          "d": 20
        },
        {
          "xc": 1600,
          "w": 20,
          "d": 30
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Phenol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclohexanone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Propanol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethylbenzene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Phenol.",
      "result": "The compound is Phenol."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q31",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 1725,
          "w": 20,
          "d": 85
        },
        {
          "xc": 2720,
          "w": 30,
          "d": 30
        },
        {
          "xc": 2820,
          "w": 30,
          "d": 30
        },
        {
          "xc": 2950,
          "w": 40,
          "d": 50
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-Bromopropane",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Butyraldehyde",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Acetaldehyde",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Bromopropane",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Butyraldehyde.",
      "result": "The compound is Butyraldehyde."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q34",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 2950,
          "w": 40,
          "d": 50
        },
        {
          "xc": 650,
          "w": 40,
          "d": 40
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-Bromopropane",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethylbenzene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetophenone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is 1-Bromopropane.",
      "result": "The compound is 1-Bromopropane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q35",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3300,
          "w": 150,
          "d": 70
        },
        {
          "xc": 2950,
          "w": 40,
          "d": 50
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Aniline",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "3-Pentanone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethyl acetate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methanol",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Methanol.",
      "result": "The compound is Methanol."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q36",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 60$ and a base peak at $m/z = 31$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 31,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 60,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "t-Butyl alcohol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Ethylbenzene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Butyraldehyde",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Propanol",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is 1-Propanol.",
      "result": "The compound is 1-Propanol."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q38",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 58$ and a base peak at $m/z = 43$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 43,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 58,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Dimethyl ether",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Acetone",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Dichloromethane",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propionaldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is Acetone.",
      "result": "The compound is Acetone."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q39",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3020,
          "w": 20,
          "d": 25
        },
        {
          "xc": 1650,
          "w": 20,
          "d": 20
        },
        {
          "xc": 2920,
          "w": 40,
          "d": 50
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Propanoic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Cyclopentene",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Propionaldehyde",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclohexene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Cyclopentene.",
      "result": "The compound is Cyclopentene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q40",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 112$ and a base peak at $m/z = 77$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 77,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 112,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Chlorobenzene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclohexene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Propan-2-ol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-Pentanone",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is Chlorobenzene.",
      "result": "The compound is Chlorobenzene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q41",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 106$ and a base peak at $m/z = 105$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 105,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 106,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Propionaldehyde",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "1-Butanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzaldehyde",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Methanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is Benzaldehyde.",
      "result": "The compound is Benzaldehyde."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q42",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 1250,
          "w": 40,
          "d": 80
        },
        {
          "xc": 3050,
          "w": 20,
          "d": 20
        },
        {
          "xc": 1600,
          "w": 20,
          "d": 30
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Methyl acetate",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Benzene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Anisole",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Propionaldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Anisole.",
      "result": "The compound is Anisole."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q44",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 74$ and a base peak at $m/z = 43$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 43,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 74,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Formic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Propyne",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Methanol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyl acetate",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is Methyl acetate.",
      "result": "The compound is Methyl acetate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q47",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 2920,
          "w": 40,
          "d": 65
        },
        {
          "xc": 2850,
          "w": 40,
          "d": 65
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Dimethyl ether",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Propyne",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclohexane",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "1-Butanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Cyclohexane.",
      "result": "The compound is Cyclohexane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q48",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 1715,
          "w": 20,
          "d": 85
        },
        {
          "xc": 2950,
          "w": 40,
          "d": 50
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Dimethyl sulfoxide",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "1-Bromopropane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetone",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Cyclopentanone",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Acetone.",
      "result": "The compound is Acetone."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q49",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 1715,
          "w": 20,
          "d": 85
        },
        {
          "xc": 2950,
          "w": 40,
          "d": 50
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Cyclohexene",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Butanone",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Acetonitrile",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Bromopropane",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Butanone.",
      "result": "The compound is Butanone."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q52",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 60$ and a base peak at $m/z = 45$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 45,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 60,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Propan-2-ol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propyne",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetonitrile",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzyl alcohol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is Propan-2-ol.",
      "result": "The compound is Propan-2-ol."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q53",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 2950,
          "w": 40,
          "d": 50
        },
        {
          "xc": 650,
          "w": 40,
          "d": 40
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-Bromopropane",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methyl acetate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Chloroform",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propionaldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is 1-Bromopropane.",
      "result": "The compound is 1-Bromopropane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q54",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 78$ and a base peak at $m/z = 63$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 63,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 78,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Dimethyl sulfoxide",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Butanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Pentanone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acetonitrile",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is Dimethyl sulfoxide.",
      "result": "The compound is Dimethyl sulfoxide."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q55",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 122$ and a base peak at $m/z = 43$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 43,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 122,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Acetaldehyde",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Methyl acetate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzyl alcohol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Bromopropane",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is 2-Bromopropane.",
      "result": "The compound is 2-Bromopropane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q56",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 122$ and a base peak at $m/z = 43$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 43,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 122,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Ethyl benzoate",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Cyclohexanone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Chloroform",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Bromopropane",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is 1-Bromopropane.",
      "result": "The compound is 1-Bromopropane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q57",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 72$ and a base peak at $m/z = 44$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 44,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 72,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Cyclohexane",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "3-Pentanone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Butyraldehyde",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Chlorobenzene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is Butyraldehyde.",
      "result": "The compound is Butyraldehyde."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q58",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3400,
          "w": 30,
          "d": 40
        },
        {
          "xc": 3300,
          "w": 30,
          "d": 40
        },
        {
          "xc": 3050,
          "w": 20,
          "d": 20
        },
        {
          "xc": 1600,
          "w": 20,
          "d": 30
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Acetic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Aniline",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Acetophenone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Butyraldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Aniline.",
      "result": "The compound is Aniline."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q59",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3000,
          "w": 30,
          "d": 30
        },
        {
          "xc": 740,
          "w": 45,
          "d": 75
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Cyclohexene",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Propyne",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dichloromethane",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Propanoic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Dichloromethane.",
      "result": "The compound is Dichloromethane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q60",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 140$ and a base peak at $m/z = 105$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 105,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 140,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Benzoyl chloride",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Propanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Bromopropane",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyl acetate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is Benzoyl chloride.",
      "result": "The compound is Benzoyl chloride."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q61",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 150$ and a base peak at $m/z = 105$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 105,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 150,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Diethyl ether",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Acetonitrile",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethyl benzoate",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Butyraldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is Ethyl benzoate.",
      "result": "The compound is Ethyl benzoate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q62",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3000,
          "w": 300,
          "d": 75
        },
        {
          "xc": 1710,
          "w": 20,
          "d": 85
        },
        {
          "xc": 1240,
          "w": 50,
          "d": 60
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Dimethyl sulfoxide",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Propionaldehyde",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Tetrahydrofuran",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propanoic acid",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Propanoic acid.",
      "result": "The compound is Propanoic acid."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q63",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3000,
          "w": 300,
          "d": 75
        },
        {
          "xc": 1710,
          "w": 20,
          "d": 85
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Acetic acid",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Bromopropane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Butyraldehyde",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl benzoate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Acetic acid.",
      "result": "The compound is Acetic acid."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q66",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 122$ and a base peak at $m/z = 43$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 43,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 122,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-Pentanone",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Diethyl ether",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Propene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Bromopropane",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is 2-Bromopropane.",
      "result": "The compound is 2-Bromopropane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q67",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 1715,
          "w": 20,
          "d": 85
        },
        {
          "xc": 2920,
          "w": 40,
          "d": 55
        },
        {
          "xc": 2850,
          "w": 40,
          "d": 55
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Methanol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "3-Pentanone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclohexene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclohexanone",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Cyclohexanone.",
      "result": "The compound is Cyclohexanone."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q69",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3000,
          "w": 300,
          "d": 75
        },
        {
          "xc": 1710,
          "w": 20,
          "d": 85
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Acetaldehyde",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Butanone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Tetrahydrofuran",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Formic acid",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Formic acid.",
      "result": "The compound is Formic acid."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q70",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 72$ and a base peak at $m/z = 42$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 42,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 72,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-Butanol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Ethanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Tetrahydrofuran",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Bromobenzene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is Tetrahydrofuran.",
      "result": "The compound is Tetrahydrofuran."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q72",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 1725,
          "w": 20,
          "d": 85
        },
        {
          "xc": 2720,
          "w": 30,
          "d": 30
        },
        {
          "xc": 2820,
          "w": 30,
          "d": 30
        },
        {
          "xc": 2950,
          "w": 40,
          "d": 50
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Chlorobenzene",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Propionaldehyde",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Dimethyl ether",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Nitrobenzene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Propionaldehyde.",
      "result": "The compound is Propionaldehyde."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q73",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 1070,
          "w": 40,
          "d": 70
        },
        {
          "xc": 2950,
          "w": 40,
          "d": 50
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Toluene",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Tetrahydrofuran",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Methanol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Butanone",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Tetrahydrofuran.",
      "result": "The compound is Tetrahydrofuran."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q76",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 1715,
          "w": 20,
          "d": 85
        },
        {
          "xc": 2950,
          "w": 40,
          "d": 50
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Formic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "2-Pentanone",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Ethyl benzoate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclohexane",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is 2-Pentanone.",
      "result": "The compound is 2-Pentanone."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q78",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3020,
          "w": 20,
          "d": 25
        },
        {
          "xc": 1650,
          "w": 20,
          "d": 20
        },
        {
          "xc": 2920,
          "w": 40,
          "d": 50
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Diethyl ether",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Benzoic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclopentene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclohexene",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Cyclohexene.",
      "result": "The compound is Cyclohexene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q79",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 40$ and a base peak at $m/z = 39$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 39,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 40,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Methanol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Propyne",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Acetaldehyde",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Butyraldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is Propyne.",
      "result": "The compound is Propyne."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q82",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 112$ and a base peak at $m/z = 77$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 77,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 112,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Chlorobenzene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Pentanone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Propanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is Chlorobenzene.",
      "result": "The compound is Chlorobenzene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q84",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3080,
          "w": 20,
          "d": 25
        },
        {
          "xc": 1650,
          "w": 20,
          "d": 35
        },
        {
          "xc": 2950,
          "w": 40,
          "d": 50
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Tetrahydrofuran",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Benzoyl chloride",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Bromopropane",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Isobutylene",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Isobutylene.",
      "result": "The compound is Isobutylene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q85",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3080,
          "w": 20,
          "d": 25
        },
        {
          "xc": 1640,
          "w": 20,
          "d": 35
        },
        {
          "xc": 2950,
          "w": 40,
          "d": 45
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Propene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Butyraldehyde",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Toluene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Propene.",
      "result": "The compound is Propene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q86",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands.",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 1530,
          "w": 30,
          "d": 80
        },
        {
          "xc": 1350,
          "w": 30,
          "d": 80
        },
        {
          "xc": 3050,
          "w": 20,
          "d": 20
        },
        {
          "xc": 1600,
          "w": 20,
          "d": 30
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Benzoic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Propyne",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Phenol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Nitrobenzene",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic IR data.",
      "process": "Analyze coordinates/absorption features: target compound is Nitrobenzene.",
      "result": "The compound is Nitrobenzene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q87",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 68$ and a base peak at $m/z = 67$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 67,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 68,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Cyclohexanone",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Cyclopentene",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "2-Bromopropane",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl acetate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is Cyclopentene.",
      "result": "The compound is Cyclopentene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q88",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 60$ and a base peak at $m/z = 43$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 43,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 60,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Cyclohexene",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Cyclohexanone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzoyl chloride",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acetic acid",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is Acetic acid.",
      "result": "The compound is Acetic acid."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q90",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 74$ and a base peak at $m/z = 31$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 31,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 74,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Chloroform",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "1-Butanol",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Chlorobenzene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzaldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is 1-Butanol.",
      "result": "The compound is 1-Butanol."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q92",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = 72$ and a base peak at $m/z = 44$.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20,
          "label": "methyl segment"
        },
        {
          "x": 44,
          "y": 100,
          "label": "base peak"
        },
        {
          "x": 72,
          "y": 60,
          "label": "molecular ion [M+]"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "t-Butyl alcohol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Aniline",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Butyraldehyde",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "2-Pentanone",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elucidating organic structures from dynamic MS data.",
      "process": "Analyze coordinates/absorption features: target compound is Butyraldehyde.",
      "result": "The compound is Butyraldehyde."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  }
];
