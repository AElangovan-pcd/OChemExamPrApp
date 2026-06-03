// McMurry Chapter 13 questions
const CHAPTER_13_QUESTIONS = [
  {
    "question_id": "ch13_q1_equivalence_2_bromobutane",
    "topic": "1H NMR: Chemical Equivalence",
    "difficulty_level": "Medium",
    "question_text": "In the $^1\\text{H}$ NMR spectrum of 2-bromobutane, how are the two protons on the C3 carbon chemically classified, and how many total signals are observed for the molecule (neglecting hydroxyl or amine exchange)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Diastereotopic; 5 signals",
        "smiles": "CC(Br)CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Enantiotopic; 4 signals",
        "smiles": "CC(Br)CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Homotopic; 4 signals",
        "smiles": "CC(Br)CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Diastereotopic; 4 signals",
        "smiles": "CC(Br)CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the concepts of chemical equivalence and stereotopicity (homotopic, enantiotopic, and diastereotopic protons) in 1H NMR.",
      "process": "Step 1: Identify that C2 is a stereocenter. The C3 carbon has two protons (Ha and Hb) adjacent to this stereocenter.\nStep 2: Perform the substitution test: replacing Ha with deuterium yields a stereoisomer, and replacing Hb yields another. Because C2 is already a stereocenter, these two substitution products are diastereomers. Thus, the protons on C3 are diastereotopic and chemically non-equivalent.\nStep 3: Count the distinct proton environments: C1-methyl (3H, singlet/doublet), C2-methine (1H, multiplet), C3-methylene (2 diastereotopic protons, 2 signals), and C4-methyl (3H, triplet). This yields a total of 5 distinct proton signals.",
      "result": "The C3 protons are diastereotopic, resulting in 5 distinct signals in the 1H NMR spectrum of 2-bromobutane."
    }
  },
  {
    "question_id": "ch13_q2_equivalence_cyclopropane",
    "topic": "1H NMR: Chemical Equivalence",
    "difficulty_level": "Hard",
    "question_text": "How many distinct $^1\\text{H}$ NMR signals are exhibited by trans-1,2-dichlorocyclopropane at room temperature?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "2 signals",
        "smiles": "Cl[C@@H]1C[C@@H]1Cl",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "3 signals",
        "smiles": "Cl[C@@H]1C[C@@H]1Cl",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "4 signals",
        "smiles": "Cl[C@@H]1C[C@@H]1Cl",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5 signals",
        "smiles": "Cl[C@@H]1C[C@@H]1Cl",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question evaluates the effect of molecular symmetry on chemical equivalence in a small ring system.",
      "process": "Step 1: Identify the symmetry elements of trans-1,2-dichlorocyclopropane. The molecule possesses a C2 rotational axis but lacks a plane of symmetry, making it chiral (C2 symmetry).\nStep 2: Analyze the protons on C1 and C2. The C2 axis relates the C1-H and C2-H, making them homotopic and thus equivalent (1 signal).\nStep 3: Analyze the protons on C3 (methylene group). One proton (cis to both chlorines) and one proton (trans to both chlorines) lie in completely different chemical environments and cannot be interconverted by any symmetry operation of the molecule. They are diastereotopic and thus chemically non-equivalent, giving 2 separate signals. Total signals = 1 (CH-Cl) + 2 (CH2) = 3 signals.",
      "result": "trans-1,2-Dichlorocyclopropane exhibits 3 distinct 1H NMR signals due to its C2 symmetry and diastereotopic C3 protons."
    }
  },
  {
    "question_id": "ch13_q3_chemical_shifts_ester",
    "topic": "1H NMR: Chemical Shifts",
    "difficulty_level": "Easy",
    "question_text": "Which of the following correctly orders the chemical shifts ($\\delta$, ppm) of the proton groups in methyl propanoate from most downfield (highest ppm) to most upfield (lowest ppm)?",
    "question_smiles": "CCC(=O)OC",
    "options": [
      {
        "option_id": "A",
        "text": "$-\\text{OCH}_3 > -\\text{CH}_2\\text{C}=\\text{O} > -\\text{CH}_2\\text{CH}_3$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$-\\text{CH}_2\\text{C}=\\text{O} > -\\text{OCH}_3 > -\\text{CH}_2\\text{CH}_3$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$-\\text{CH}_2\\text{CH}_3 > -\\text{OCH}_3 > -\\text{CH}_2\\text{C}=\\text{O}$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$-\\text{OCH}_3 > -\\text{CH}_2\\text{CH}_3 > -\\text{CH}_2\\text{C}=\\text{O}$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the understanding of inductive effects and proximity to electronegative atoms or carbonyl groups on 1H NMR chemical shifts.",
      "process": "Step 1: Locate the three proton environments: methyl ester (-OCH3), C2 methylene (-CH2-), and C3 methyl (-CH3).\nStep 2: Assess inductive deshielding. The -OCH3 protons are directly attached to an electronegative oxygen atom, placing them most downfield (~3.7 ppm).\nStep 3: The C2 methylene protons are adjacent to the electron-withdrawing carbonyl group, placing them intermediate (~2.3 ppm). The C3 methyl protons are furthest from any electronegative group, placing them most upfield (~1.1 ppm).",
      "result": "The downfield-to-upfield order is -OCH3 > -CH2C=O > -CH2CH3."
    }
  },
  {
    "question_id": "ch13_q4_diastereotopic_methyls",
    "topic": "1H NMR: Chemical Equivalence",
    "difficulty_level": "Hard",
    "question_text": "In the $^1\\text{H}$ NMR spectrum of 3-methyl-2-butanol, the two methyl groups attached to C3 appear as two distinct doublets. What is the fundamental stereochemical reason for this observation?",
    "question_smiles": "CC(C)[C@@H](C)O",
    "options": [
      {
        "option_id": "A",
        "text": "The adjacent C2 carbon is a stereocenter, which makes the two methyl groups diastereotopic and chemically non-equivalent.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The molecule exists as a stable mixture of cis and trans conformations that interconvert slowly on the NMR timescale.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Steric hindrance around the C3 carbon prevents rotation of the C-C bond, trapping the methyl groups in different environments.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Spin-spin coupling between the two methyl groups splits their signals into two doublets.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the concept of diastereotopic methyl groups and their recognition in 1H NMR spectra.",
      "process": "Step 1: Identify that C2 is a stereocenter with an absolute configuration (e.g., R or S).\nStep 2: Perform the replacement test on the two C3 methyl groups. Replacing one methyl group with a CD3 group creates a second stereocenter at C3, yielding diastereomers. Therefore, the two methyl groups are diastereotopic.\nStep 3: Because diastereotopic groups are in different chemical environments, they have different chemical shifts and appear as two separate signals. Each is split into a doublet by the single proton on C3.",
      "result": "The presence of the C2 stereocenter makes the C3 methyl groups diastereotopic, resolving them into two separate doublets."
    }
  },
  {
    "question_id": "ch13_q5_citric_acid_methylene",
    "topic": "1H NMR: Spin-Spin Splitting",
    "difficulty_level": "Hard",
    "question_text": "In the $^1\\text{H}$ NMR spectrum of citric acid in $\\text{D}_2\\text{O}$, the methylene ($-\\text{CH}_2-$) protons appear as an AB quartet (four lines) rather than a single singlet. What does this indicate about these protons?",
    "question_smiles": "OC(=O)CC(O)(CC(=O)O)C(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "They are diastereotopic due to the pro-chiral central carbon, making them non-equivalent and subject to geminal coupling.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "They are enantiotopic, but couple with the carboxylic acid protons.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "They are homotopic, but split by long-range allylic coupling.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "They are chemically equivalent but undergo slow rotational interconversion.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question examines the symmetry of citric acid and how it affects the equivalence of methylene protons.",
      "process": "Step 1: Identify that citric acid is achiral, but the central carbon (C3) is a prochiral center because it is bonded to two identical -CH2COOH groups, one -OH, and one -COOH.\nStep 2: Examine the two protons on one of the -CH2- groups. Replacing one proton with deuterium makes the central carbon chiral, generating diastereomers due to the presence of the other prochiral/chiral group. Thus, the two protons on each -CH2- carbon are diastereotopic.\nStep 3: Being diastereotopic, they have different chemical shifts (A and B) and couple with each other (geminal coupling, J ~ 15 Hz), forming an AB quartet.",
      "result": "The methylene protons are diastereotopic, appearing as an AB quartet due to geminal coupling."
    }
  },
  {
    "question_id": "ch13_q6_equivalence_cyclobutanol",
    "topic": "1H NMR: Chemical Equivalence",
    "difficulty_level": "Medium",
    "question_text": "What is the stereochemical relationship between the two protons attached to C3 (the carbon opposite to the $-\\text{OH}$ group) in cyclobutanol?",
    "question_smiles": "OC1CCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Diastereotopic",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Enantiotopic",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Homotopic",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Constitutional",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question explores chemical equivalence in cyclic systems where stereocenters or pseudo-stereocenters exist.",
      "process": "Step 1: Identify that cyclobutanol has a stereocenter at C1 bearing the hydroxyl group.\nStep 2: Analyze C3, which has two protons. One proton is cis to the -OH group, while the other is trans to the -OH group.\nStep 3: Perform the substitution test. Replacing the cis proton with deuterium gives cis-3-deuteriocyclobutanol. Replacing the trans proton gives trans-3-deuteriocyclobutanol. These two compounds are cis/trans diastereomers. Therefore, the two protons on C3 are diastereotopic.",
      "result": "The two protons on C3 of cyclobutanol are diastereotopic because one is cis and the other is trans to the hydroxyl group."
    }
  },
  {
    "question_id": "ch13_q7_benzene_anisotropy",
    "topic": "1H NMR: Chemical Shifts",
    "difficulty_level": "Medium",
    "question_text": "Benzene exhibits a $^1\\text{H}$ NMR signal at $\\delta \\approx 7.27\\text{ ppm}$. Which statement best explains this downfield chemical shift compared to typical alkenes ($\\delta \\approx 4.5\\text{-}6.0\\text{ ppm}$)?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "The ring current induced by the external magnetic field generates a local magnetic field that reinforces the external field outside the ring, deshielding the aromatic protons.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The high electronegativity of the $sp^2$ hybridized carbons deshields the protons solely through inductive electron withdrawal.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Strong intermolecular hydrogen bonding between benzene rings deshields the aromatic protons.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The ring current generates a local magnetic field that opposes the external field outside the ring, causing the protons to feel a stronger effective magnetic field.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the concept of magnetic anisotropy and ring currents in aromatic compounds.",
      "process": "Step 1: Recognize that benzene has a conjugated ring of 6 pi electrons. In an external magnetic field ($B_0$), these pi electrons circulate to create a ring current.\nStep 2: This ring current generates an induced magnetic field ($B_i$). According to electromagnetic induction, the lines of $B_i$ oppose $B_0$ inside the ring but reinforce $B_0$ outside the ring.\nStep 3: Aromatic protons are on the periphery (outside the ring). Since the induced field reinforces the external field, the effective field ($B_{\\text{eff}} = B_0 + B_i$) felt by these protons is larger, causing them to resonate downfield (deshielded).",
      "result": "Magnetic anisotropy due to the induced ring current deshields the benzene protons, shifting them to ~7.27 ppm."
    }
  },
  {
    "question_id": "ch13_q8_deshielding_aldehyde",
    "topic": "1H NMR: Chemical Shifts",
    "difficulty_level": "Easy",
    "question_text": "The formyl proton of an aldehyde ($-\\text{CH}=\\text{O}$) typically appears at a very downfield chemical shift of $\\delta \\approx 9\\text{-}10\\text{ ppm}$. What two primary factors contribute to this extreme deshielding?",
    "question_smiles": "CC=O",
    "options": [
      {
        "option_id": "A",
        "text": "Strong inductive electron withdrawal by the electronegative oxygen atom and magnetic anisotropy from the C=O pi bond.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Intermolecular hydrogen bonding and the allylic coupling effect.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The presence of a nearby quaternary carbon and the heavy atom effect of the carbonyl.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "High $s$-character of the carbonyl carbon and the nuclear Zeeman spin-spin interaction.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question covers the origins of chemical deshielding in carbonyl groups.",
      "process": "Step 1: Identify that the aldehyde proton is directly bound to a carbonyl carbon.\nStep 2: Note the inductive effect: the highly electronegative oxygen polarizes the C=O bond, withdrawing electron density from the carbonyl carbon and the attached hydrogen, which deshields the proton.\nStep 3: Note the anisotropic effect: the pi electrons of the carbonyl group circulate in the external magnetic field, producing an induced field that reinforces the external field at the location of the formyl proton, deshielding it further.",
      "result": "Inductive electron withdrawal and magnetic anisotropy combine to shift the aldehyde proton downfield to 9-10 ppm."
    }
  },
  {
    "question_id": "ch13_q9_alkyne_shielding",
    "topic": "1H NMR: Chemical Shifts",
    "difficulty_level": "Medium",
    "question_text": "Protons attached to $sp$ hybridized carbons in terminal alkynes appear at $\\delta \\approx 2.5\\text{ ppm}$, which is significantly more shielded than vinylic protons ($\\delta \\approx 4.5\\text{-}6.0\\text{ ppm}$), despite $sp$ carbons being more electronegative than $sp^2$ carbons. What is the explanation for this phenomenon?",
    "question_smiles": "C#CC",
    "options": [
      {
        "option_id": "A",
        "text": "The cylindrical cloud of pi electrons in the alkyne induces a local magnetic field that opposes the external field along the molecular axis, shielding the acetylenic proton.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The terminal alkyne proton is highly acidic and undergoes rapid exchange, which shifts its signal upfield.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The $sp$ hybridized carbon has lower electronegativity than expected due to orbital hybridization mismatch.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The C-H bond length in alkynes is exceptionally short, resulting in a large homolytic bond dissociation energy that shields the nucleus.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question addresses the anomalous chemical shift of alkyne protons using magnetic anisotropy.",
      "process": "Step 1: Recall that alkynes have a triple bond with a cylindrical cloud of pi electrons along the C-C axis.\nStep 2: When aligned with the external magnetic field, the pi electrons circulate around the C-C axis. This circulation induces a magnetic field that opposes the external field along the axis where the acetylenic proton is located.\nStep 3: This local shielding effect counteracts the strong inductive deshielding of the electronegative sp carbon, shifting the acetylenic proton upfield (~2.5 ppm) relative to alkene protons.",
      "result": "Cylindrical magnetic anisotropy shields acetylenic protons along the molecular axis, shifting them upfield."
    }
  },
  {
    "question_id": "ch13_q10_haloalkanes_inductive",
    "topic": "1H NMR: Chemical Shifts",
    "difficulty_level": "Easy",
    "question_text": "Consider the series of ethyl halides: fluoroethane, chloroethane, bromoethane, and iodoethane. Which of the following trends correctly describes the chemical shift ($\\delta$, ppm) of the methylene ($-\\text{CH}_2-$) protons?",
    "question_smiles": "CCF",
    "options": [
      {
        "option_id": "A",
        "text": "Fluoride ($\\delta \\approx 4.4$) > Chloride ($\\delta \\approx 3.5$) > Bromide ($\\delta \\approx 3.4$) > Iodide ($\\delta \\approx 3.2$)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Iodide > Bromide > Chloride > Fluoride",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Chloride > Fluoride > Bromide > Iodide",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "All methylene protons appear at the same chemical shift because the halogen is too far removed.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question highlights the relationship between electronegativity and chemical shift.",
      "process": "Step 1: Identify that the electronegativity of the halogens decreases down the periodic table: F (4.0) > Cl (3.0) > Br (2.8) > I (2.5).\nStep 2: The more electronegative the halogen, the more electron density it withdraws from the neighboring -CH2- group through inductive effects.\nStep 3: Lower electron density (deshielding) results in resonance at higher chemical shift (larger ppm value). Therefore, fluoroethane methylene protons are most deshielded and iodoethane methylene protons are least deshielded.",
      "result": "The chemical shift of the methylene protons decreases in the order: fluoroethane > chloroethane > bromoethane > iodoethane."
    }
  },
  {
    "question_id": "ch13_q11_oh_shift_concentration",
    "topic": "1H NMR: Chemical Shifts",
    "difficulty_level": "Medium",
    "question_text": "The chemical shift of the hydroxyl ($-\\text{OH}$) proton in ethanol is highly variable ($\\delta \\approx 1\\text{-}5\\text{ ppm}$) and depends strongly on concentration, solvent, and temperature. What is the molecular basis for this variability?",
    "question_smiles": "CCO",
    "options": [
      {
        "option_id": "A",
        "text": "Hydrogen bonding decreases the electron density around the hydroxyl proton, causing it to appear downfield at higher concentrations.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethanol undergoes rapid unimolecular decomposition at high temperatures, producing acetaldehyde.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The oxygen atom changes its hybridization from $sp^3$ to $sp^2$ upon dilution, shielding the proton.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Intermolecular proton exchange is slower at lower concentrations, leading to a constant chemical shift.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the effect of hydrogen bonding on 1H NMR chemical shifts.",
      "process": "Step 1: Identify that alcohol hydroxyl protons engage in intermolecular hydrogen bonding.\nStep 2: Understand that hydrogen bonding involves a donor oxygen drawing the proton away, which polarizes the O-H bond and decreases the electron density surrounding the hydrogen nucleus.\nStep 3: Dilution or temperature increases disrupt these hydrogen-bonded networks, returning electron density to the proton and shifting the signal upfield. Conversely, higher concentrations promote hydrogen bonding, deshielding the proton and shifting it downfield.",
      "result": "Hydrogen bonding deshields the hydroxyl proton, making its chemical shift highly concentration-dependent."
    }
  },
  {
    "question_id": "ch13_q12_d2o_shake",
    "topic": "1H NMR: Practical Methods",
    "difficulty_level": "Easy",
    "question_text": "When a drop of heavy water ($\\text{D}_2\\text{O}$) is added to a solution of an alcohol in $\\text{CDCl}_3$ and the $^1\\text{H}$ NMR spectrum is re-recorded, the $-\\text{OH}$ signal disappears. What chemical process is responsible for this observation?",
    "question_smiles": "CCO",
    "options": [
      {
        "option_id": "A",
        "text": "Rapid, reversible exchange of the acidic hydroxyl proton with deuterium, forming $\\text{R-OD}$ and $\\text{HOD}$, where deuterium ($^2\\text{H}$) does not resonate at the proton frequency.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Nucleophilic attack of deuterium oxide on the carbon bearing the hydroxyl group, displacing the $-\\text{OH}$ group.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The physical separation of the organic and aqueous layers, which extracts the alcohol into the aqueous phase.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The quenching of the magnetic field of the NMR spectrometer by the highly paramagnetic deuterium nucleus.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question explains the utility of the 'D2O shake' in identifying exchangeable protons (like OH, NH, COOH).",
      "process": "Step 1: Hydroxyl protons (R-OH) are weakly acidic and undergo rapid intermolecular exchange.\nStep 2: Adding D2O establishes an equilibrium: R-OH + D2O <=> R-OD + HOD. Because D2O is present in vast excess, the equilibrium lies far to the right, converting almost all R-OH to R-OD.\nStep 3: Deuterium (2H) has a different spin quantum number (I = 1) and gyromagnetic ratio than protium (1H). Consequently, R-OD does not absorb radiofrequency energy at the 1H resonance frequency, causing the 1H hydroxyl signal to disappear.",
      "result": "Proton-deuterium exchange replaces the OH proton with deuterium, removing the signal from the 1H spectrum."
    }
  },
  {
    "question_id": "ch13_q13_integration_dimethoxybenzene",
    "topic": "1H NMR: Integration",
    "difficulty_level": "Easy",
    "question_text": "In the $^1\\text{H}$ NMR spectrum of 1,4-dimethoxybenzene, two singlets are observed. What is the ratio of the integrations of these two signals (aromatic signal : methoxy signal)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "2 : 3",
        "smiles": "COc1ccc(OC)cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1 : 1",
        "smiles": "COc1ccc(OC)cc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3 : 2",
        "smiles": "COc1ccc(OC)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4 : 3",
        "smiles": "COc1ccc(OC)cc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question applies the concept of symmetry and peak integration in 1H NMR spectroscopy.",
      "process": "Step 1: Identify the plane of symmetry in 1,4-dimethoxybenzene.\nStep 2: Count the equivalent protons in each environment. The 4 aromatic ring protons are chemically equivalent due to the symmetric para-substitution, yielding a single singlet integrating to 4H.\nStep 3: The 2 methoxy groups (-OCH3) are also equivalent, containing a total of 6 protons (2 x 3H), yielding a singlet integrating to 6H. The ratio of the integrations is 4H (aromatic) : 6H (methoxy) = 2 : 3.",
      "result": "The integration ratio of the aromatic signal to the methoxy signal is 2 : 3."
    }
  },
  {
    "question_id": "ch13_q14_pxylene_structure",
    "topic": "1H NMR: Structure Elucidation",
    "difficulty_level": "Medium",
    "question_text": "A hydrocarbon with molecular formula $\\text{C}_8\\text{H}_{10}$ displays exactly two singlets in its $^1\\text{H}$ NMR spectrum with an integration ratio of 2:3. What is the correct IUPAC name of this compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "1,4-Dimethylbenzene",
        "smiles": "Cc1ccc(C)cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,2-Dimethylbenzene",
        "smiles": "Cc1ccccc1C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethylbenzene",
        "smiles": "CCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,3-Dimethylbenzene",
        "smiles": "Cc1cccc(C)c1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question uses molecular formulas and 1H NMR symmetry to distinguish between isomers of C8H10.",
      "process": "Step 1: Calculate the degrees of unsaturation: (2*8 + 2 - 10)/2 = 4 (suggests a benzene ring).\nStep 2: Examine the integration ratio. Total protons = 10. A ratio of 2:3 corresponds to 4H and 6H respectively.\nStep 3: Assess the symmetry of the options. 1,4-Dimethylbenzene (p-xylene) has a highly symmetric structure: all 4 aromatic protons are equivalent (4H, singlet), and both methyl groups are equivalent (6H, singlet). Ethylbenzene would show 5 signals, o-xylene would show 3 signals (2H multiplet, 2H multiplet, 6H singlet), and m-xylene would show 4 signals.",
      "result": "The highly symmetric 1,4-dimethylbenzene matches the 2-singlet spectrum with a 4H:6H (2:3) integration."
    }
  },
  {
    "question_id": "ch13_q15_dichlorocyclohexane_symmetry",
    "topic": "1H NMR: Spin-Spin Splitting",
    "difficulty_level": "Hard",
    "question_text": "Why does trans-1,4-dichlorocyclohexane exhibit three distinct signals in its $^1\\text{H}$ NMR spectrum at room temperature, even though it undergoes rapid ring-flipping on the NMR timescale?",
    "question_smiles": "Cl[C@H]1CC[C@@H](Cl)CC1",
    "options": [
      {
        "option_id": "A",
        "text": "The two chair conformations are unequal in energy (diequatorial is favored over diaxial), so ring-flipping does not average the axial and equatorial methylene protons to equivalence.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ring flipping is completely frozen at room temperature due to the steric bulk of the chlorine atoms.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The chlorine atoms undergo rapid ionization, creating a dynamic mixture of carbocations.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The molecule is planar at room temperature, making all protons homotopic.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question probes the relationship between ring-flipping dynamics, conformational energy, and the NMR timescale.",
      "process": "Step 1: Identify the two chair conformations of trans-1,4-dichlorocyclohexane: one is diequatorial (very stable) and the other is diaxial (unstable).\nStep 2: Understand that because the two chair conformations have different energies, the molecule spends the vast majority of its time in the diequatorial conformation. The time-average conformation is heavily weighted towards this conformer.\nStep 3: In the diequatorial conformation, the axial and equatorial protons on the methylene carbons (C2, C3, C5, C6) remain in distinct environments (diastereotopic). Therefore, they are not averaged to chemical equivalence by ring-flipping and give separate signals. The three signals correspond to: C1/C4-H (2H), C2/C3/C5/C6 axial protons (4H), and C2/C3/C5/C6 equatorial protons (4H).",
      "result": "The energy difference between the diequatorial and diaxial chair conformers prevents the axial and equatorial methylene protons from averaging to equivalence, yielding 3 signals."
    }
  },
  {
    "question_id": "ch13_q16_tert_butyl_acetate",
    "topic": "1H NMR: Structure Elucidation",
    "difficulty_level": "Medium",
    "question_text": "A compound with molecular formula $\\text{C}_6\\text{H}_{12}\\text{O}_2$ exhibits exactly two singlets in its $^1\\text{H}$ NMR spectrum with an integration ratio of 3:1. Which compound is consistent with this data?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "tert-Butyl acetate",
        "smiles": "CC(C)(C)OC(=O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Isopropyl propanoate",
        "smiles": "CCC(=O)OC(C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethyl isobutyrate",
        "smiles": "CC(C)C(=O)OCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyl 3-methylbutanoate",
        "smiles": "CC(C)CC(=O)OC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the ability to determine structural features of an ester from 1H NMR integration and splitting patterns.",
      "process": "Step 1: Calculate total protons = 12. A 3:1 integration ratio corresponds to 9H and 3H.\nStep 2: Identify the functional groups that yield 9H and 3H singlets. A 9H singlet is highly characteristic of a tert-butyl group, -C(CH3)3. A 3H singlet adjacent to an electron-withdrawing carbonyl is characteristic of an acetyl group, -C(=O)CH3.\nStep 3: Connect these fragments via the ester oxygen: (CH3)3C-O-C(=O)CH3, which is tert-butyl acetate. The other options contain ethyl, isopropyl, or isobutyl groups which would show multiplets (doublets, triplets, quartets, septets) due to spin-spin coupling.",
      "result": "tert-Butyl acetate matches the criteria, showing a 9H singlet (tert-butyl) and a 3H singlet (acetyl methyl)."
    }
  },
  {
    "question_id": "ch13_q17_splitting_2_chloropropane",
    "topic": "1H NMR: Spin-Spin Splitting",
    "difficulty_level": "Easy",
    "question_text": "Predict the spin-spin splitting patterns and integrations for the signals in the $^1\\text{H}$ NMR spectrum of 2-chloropropane.",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "A doublet integrating for 6H, and a septet integrating for 1H.",
        "smiles": "CC(Cl)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A triplet integrating for 6H, and a quartet integrating for 1H.",
        "smiles": "CC(Cl)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Two doublets, each integrating for 3H, and a multiplet integrating for 1H.",
        "smiles": "CC(Cl)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A singlet integrating for 6H, and a singlet integrating for 1H.",
        "smiles": "CC(Cl)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question applies the n+1 rule to predict the splitting patterns in an isopropyl halide.",
      "process": "Step 1: Identify the symmetry in 2-chloropropane: (CH3)2CH-Cl. The two methyl groups are equivalent, containing 6 protons. The methine carbon has 1 proton.\nStep 2: Apply the n+1 rule to the methyl protons. They are adjacent to 1 methine proton, so they split into a doublet (1+1 = 2) integrating for 6H.\nStep 3: Apply the n+1 rule to the methine proton. It is adjacent to 6 equivalent methyl protons, so it splits into a septet (6+1 = 7) integrating for 1H.",
      "result": "The 1H NMR spectrum of 2-chloropropane consists of a 6H doublet and a 1H septet."
    }
  },
  {
    "question_id": "ch13_q18_pascal_ethyl_intensities",
    "topic": "1H NMR: Spin-Spin Splitting",
    "difficulty_level": "Easy",
    "question_text": "The ethyl group ($-\\text{CH}_2\\text{CH}_3$) exhibits a characteristic spin-spin coupling pattern. What are the splitting patterns and relative peak intensities within each multiplet for the $-\\text{CH}_2-$ and $-\\text{CH}_3$ groups respectively?",
    "question_smiles": "CCO",
    "options": [
      {
        "option_id": "A",
        "text": "$-\\text{CH}_2-$: quartet (1:3:3:1 ratio); $-\\text{CH}_3$: triplet (1:2:1 ratio)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$-\\text{CH}_2-$: triplet (1:2:1 ratio); $-\\text{CH}_3$: quartet (1:3:3:1 ratio)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$-\\text{CH}_2-$: doublet (1:1 ratio); $-\\text{CH}_3$: triplet (1:2:1 ratio)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$-\\text{CH}_2-$: quartet (1:4:4:1 ratio); $-\\text{CH}_3$: triplet (1:3:1 ratio)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the application of Pascal's triangle in predicting peak intensities of multiplets in first-order coupling.",
      "process": "Step 1: Locate the coupling partners. In a -CH2CH3 group, the -CH2- protons are coupled to the 3 protons of the -CH3 group, and the -CH3 protons are coupled to the 2 protons of the -CH2- group.\nStep 2: Predict the splitting for -CH2-. Adjacent to 3 equivalent protons, n=3. Splitting = n+1 = 4 (quartet). According to Pascal's triangle, the intensity ratio for a quartet is 1:3:3:1.\nStep 3: Predict the splitting for -CH3. Adjacent to 2 equivalent protons, n=2. Splitting = n+1 = 3 (triplet). The intensity ratio for a triplet is 1:2:1.",
      "result": "The -CH2- group is a 1:3:3:1 quartet, and the -CH3 group is a 1:2:1 triplet."
    }
  },
  {
    "question_id": "ch13_q19_complex_splitting_allyl_chloride",
    "topic": "1H NMR: Spin-Spin Splitting",
    "difficulty_level": "Hard",
    "question_text": "In the $^1\\text{H}$ NMR spectrum of allyl chloride (3-chloroprop-1-ene), the C2 vinylic proton ($-\\text{CH}=$, between the methylene and terminal vinyl group) couples to the two diastereotopic terminal protons (cis and trans) and the two equivalent protons of the $-\\text{CH}_2\\text{Cl}$ group. Assuming all coupling constants are fully resolved, what is the theoretical splitting pattern of the C2 proton?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Doublet of doublet of triplets (ddt)",
        "smiles": "C=CCCl",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Triplet of triplets (tt)",
        "smiles": "C=CCCl",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Multiplet of 16 lines with 1:1:1:1:1:1:1:1:1:1:1:1:1:1:1:1 intensity ratios",
        "smiles": "C=CCCl",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Doublet of doublets of doublets (ddd)",
        "smiles": "C=CCCl",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question explores complex coupling where different coupling partners have distinct coupling constants (non-first-order patterns).",
      "process": "Step 1: Identify the coupling partners of the C2 proton: the trans-vinylic proton (J_trans ~ 17 Hz), the cis-vinylic proton (J_cis ~ 10 Hz), and the two equivalent protons on C3 (J_allylic ~ 6 Hz).\nStep 2: Because the coupling constants are distinct (J_trans > J_cis > J_allylic), the signals do not overlap to form simple multiplets. \nStep 3: Start with the largest coupling: splitting by the trans proton yields a doublet (d). Splitting by the cis proton yields a doublet of doublets (dd). Finally, splitting by the two equivalent C3 protons yields a doublet of doublet of triplets (ddt).",
      "result": "The coupling with three distinct sets of protons (1 trans, 1 cis, 2 allylic) yields a doublet of doublet of triplets (ddt) containing 12 lines total."
    }
  },
  {
    "question_id": "ch13_q20_coupling_tree_math",
    "topic": "1H NMR: Spin-Spin Splitting",
    "difficulty_level": "Hard",
    "question_text": "In a $^1\\text{H}$ NMR spectrum recorded on a $500\\text{ MHz}$ spectrometer, a proton appears as a doublet of doublets (dd) centered at $\\delta = 3.0\\text{ ppm}$ with coupling constants $J_1 = 12\\text{ Hz}$ and $J_2 = 4\\text{ Hz}$. What is the separation (in Hz) between the two outermost peaks, and the two innermost peaks, of this multiplet?",
    "question_smiles": "CC(Cl)C(Br)C",
    "options": [
      {
        "option_id": "A",
        "text": "Outermost separation: $16\\text{ Hz}$; Innermost separation: $8\\text{ Hz}$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Outermost separation: $12\\text{ Hz}$; Innermost separation: $4\\text{ Hz}$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Outermost separation: $8\\text{ Hz}$; Innermost separation: $4\\text{ Hz}$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Outermost separation: $20\\text{ Hz}$; Innermost separation: $12\\text{ Hz}$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the construction and mathematical analysis of a spin-spin splitting coupling tree.",
      "process": "Step 1: Construct the splitting tree starting from the central chemical shift (0 Hz difference).\nStep 2: Apply the first splitting ($J_1 = 12$ Hz): this yields two lines at $+6$ Hz and $-6$ Hz relative to the center.\nStep 3: Apply the second splitting ($J_2 = 4$ Hz) to each line: the $+6$ Hz line splits into $+8$ Hz and $+4$ Hz. The $-6$ Hz line splits into $-4$ Hz and $-8$ Hz. The four peaks are at $+8$, $+4$, $-4$, and $-8$ Hz relative to the center.\nStep 4: Calculate the separations: Outermost separation is between $+8$ and $-8$ Hz, which is $8 - (-8) = 16$ Hz (equal to $J_1 + J_2$). Innermost separation is between $+4$ and $-4$ Hz, which is $4 - (-4) = 8$ Hz (equal to $J_1 - J_2$).",
      "result": "The outermost peaks are separated by $16\\text{ Hz}$ and the innermost peaks by $8\\text{ Hz}$."
    }
  },
  {
    "question_id": "ch13_q21_spectrometer_frequency_effect",
    "topic": "1H NMR: Practical Methods",
    "difficulty_level": "Medium",
    "question_text": "The coupling constant ($J$) between two adjacent protons is measured as $8.0\\text{ Hz}$ on a $300\\text{ MHz}$ spectrometer. If the sample is re-analyzed on a $600\\text{ MHz}$ spectrometer, what will be the value of the coupling constant (in Hz) and the chemical shift difference (in ppm) between these two protons?",
    "question_smiles": "CCO",
    "options": [
      {
        "option_id": "A",
        "text": "$J = 8.0\\text{ Hz}$; the chemical shift difference (in ppm) remains constant.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$J = 16.0\\text{ Hz}$; the chemical shift difference (in ppm) doubles.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$J = 4.0\\text{ Hz}$; the chemical shift difference (in ppm) halves.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$J = 8.0\\text{ Hz}$; the chemical shift difference (in ppm) doubles.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question distinguishes between coupling constants (in Hz) and chemical shifts (in ppm) as a function of spectrometer frequency.",
      "process": "Step 1: Define coupling constant ($J$). $J$ represents the magnetic interaction between nuclear spins, which is an intrinsic property of the chemical bond and does not depend on the strength of the external magnetic field ($B_0$). Thus, $J$ remains $8.0$ Hz.\nStep 2: Define chemical shift ($\\delta$, ppm). The chemical shift in Hz increases proportionally with spectrometer frequency, but when divided by the spectrometer frequency to obtain ppm (parts per million), it remains constant ($\\delta = \\text{Hz difference} / \\text{spectrometer frequency in MHz}$). Hence, the chemical shift difference in ppm remains constant.\nStep 3: Note that because the chemical shift difference in Hz doubles while the coupling constant in Hz remains constant, spectra recorded at higher frequencies are less crowded and exhibit less overlap (making them closer to first-order).",
      "result": "The coupling constant ($8.0\\text{ Hz}$) and the chemical shift difference (in ppm) both remain constant when changing the spectrometer frequency."
    }
  },
  {
    "question_id": "ch13_q22_karplus_equation",
    "topic": "1H NMR: Spin-Spin Splitting",
    "difficulty_level": "Medium",
    "question_text": "According to the Karplus equation, which of the following vicinal proton dihedral angles ($\\theta$) typically results in the smallest coupling constant ($^3J_{\\text{HH}}$)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "$90^\\circ$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$0^\\circ$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$180^\\circ$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$60^\\circ$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the relationship between dihedral angle and vicinal coupling constants ($^3J$) described by the Karplus relationship.",
      "process": "Step 1: The Karplus equation mathematically relates the vicinal coupling constant $^3J_{\\text{HH}}$ to the dihedral angle $\\theta$ between the C-H bonds: $^3J(\\theta) = A \\cos^2(\\theta) + B \\cos(\\theta) + C$.\nStep 2: Evaluate the orbital overlap. The coupling is mediated by the overlap of the C-H $\\sigma$ orbitals with the C-C $\\sigma$ bond. When the dihedral angle is $90^\\circ$, the C-H orbitals are perpendicular to each other, minimizing orbital overlap.\nStep 3: At $\\theta = 90^\\circ$, the term $\\cos(\\theta)$ goes to zero, resulting in the minimum value of $^3J_{\\text{HH}} \\approx 0\\text{ Hz}$. In contrast, $0^\\circ$ (syn-coplanar) and $180^\\circ$ (anti-coplanar) maximize orbital overlap, giving coupling constants of ~8-10 Hz and ~12-15 Hz respectively.",
      "result": "A dihedral angle of $90^\\circ$ results in the smallest vicinal coupling constant ($^3J_{\\text{HH}} \\approx 0\\text{ Hz}$)."
    }
  },
  {
    "question_id": "ch13_q23_allylic_coupling",
    "topic": "1H NMR: Spin-Spin Splitting",
    "difficulty_level": "Medium",
    "question_text": "In 2-methylprop-1-ene, the methyl protons show a small splitting ($J \\approx 1.5\\text{ Hz}$) due to coupling with the terminal alkene protons. What is the name of this type of long-range coupling?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Allylic coupling ($^4J$)",
        "smiles": "CC(=C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Vicinal coupling ($^3J$)",
        "smiles": "CC(=C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Geminal coupling ($^2J$)",
        "smiles": "CC(=C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Homoallylic coupling ($^5J$)",
        "smiles": "CC(=C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question covers long-range coupling across more than three bonds in unsaturated systems.",
      "process": "Step 1: Trace the path between the coupling nuclei in 2-methylprop-1-ene. The methyl protons are connected to the alkene protons through 4 bonds: H-C(methyl)-C(sp2)=C(sp2)-H.\nStep 2: This is a four-bond coupling, designated as $^4J$.\nStep 3: In allylic systems, the pi system facilitates the transmission of spin information over longer distances, leading to a small but resolvable coupling ($J = 1\\text{-}3\\text{ Hz}$) known as allylic coupling.",
      "result": "The long-range 4-bond coupling between methyl and vinylic protons is allylic coupling ($^4J$)."
    }
  },
  {
    "question_id": "ch13_q24_geminal_coupling_range",
    "topic": "1H NMR: Spin-Spin Splitting",
    "difficulty_level": "Hard",
    "question_text": "What is the typical range of a geminal coupling constant ($^2J_{\\text{HH}}$) between diastereotopic $sp^3$ methylene protons?",
    "question_smiles": "CC(Cl)CCl",
    "options": [
      {
        "option_id": "A",
        "text": "$12\\text{-}18\\text{ Hz}$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$0\\text{-}2\\text{ Hz}$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$6\\text{-}8\\text{ Hz}$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$20\\text{-}25\\text{ Hz}$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the typical magnitude of geminal ($^2J$) coupling constants in organic chemistry.",
      "process": "Step 1: Identify that geminal coupling ($^2J_{\\text{HH}}$) occurs between two non-equivalent protons attached to the same carbon atom (e.g., diastereotopic methylene protons).\nStep 2: Recall that for $sp^3$ hybridized carbons, the bond angle H-C-H is ~109.5 degrees. The magnitude of $^2J_{\\text{HH}}$ is highly dependent on this angle and is typically large, ranging from $12$ to $18$ Hz (often with a negative sign, though usually reported as an absolute value).\nStep 3: Contrast this with $sp^2$ geminal coupling (vinylic, e.g., H2C=), which is much smaller ($0\\text{-}3$ Hz).",
      "result": "The geminal coupling constant ($^2J_{\\text{HH}}$) between diastereotopic $sp^3$ methylene protons is typically in the range of $12\\text{-}18\\text{ Hz}$."
    }
  },
  {
    "question_id": "ch13_q25_13c_equivalence_pxylene",
    "topic": "13C NMR: Chemical Equivalence",
    "difficulty_level": "Easy",
    "question_text": "How many signals are observed in the proton-decoupled $^{13}\\text{C}$ NMR spectrum of p-xylene (1,4-dimethylbenzene)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "3 signals",
        "smiles": "Cc1ccc(C)cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4 signals",
        "smiles": "Cc1ccc(C)cc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5 signals",
        "smiles": "Cc1ccc(C)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "8 signals",
        "smiles": "Cc1ccc(C)cc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question applies symmetry principles to determine the number of signals in a 13C NMR spectrum.",
      "process": "Step 1: Identify the symmetry in 1,4-dimethylbenzene. It has two internal planes of symmetry and a C2 axis.\nStep 2: Group the 8 carbons into equivalent sets:\n- The two methyl carbons are equivalent (1 signal).\n- The two aromatic carbons bearing the methyl groups (C1 and C4) are equivalent (1 signal).\n- The four unsubstituted aromatic carbons (C2, C3, C5, C6) are equivalent (1 signal).\nStep 3: Sum the unique environments: 1 + 1 + 1 = 3 signals.",
      "result": "p-Xylene exhibits exactly 3 signals in its 13C NMR spectrum."
    }
  },
  {
    "question_id": "ch13_q26_13c_equivalence_mxylene",
    "topic": "13C NMR: Chemical Equivalence",
    "difficulty_level": "Medium",
    "question_text": "How many signals are observed in the proton-decoupled $^{13}\\text{C}$ NMR spectrum of m-xylene (1,3-dimethylbenzene)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "3 signals",
        "smiles": "Cc1cccc(C)c1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "4 signals",
        "smiles": "Cc1cccc(C)c1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5 signals",
        "smiles": "Cc1cccc(C)c1",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "6 signals",
        "smiles": "Cc1cccc(C)c1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question examines the number of 13C NMR signals for m-xylene based on symmetry.",
      "process": "Step 1: Identify the symmetry in 1,3-dimethylbenzene. A single plane of symmetry passes through C2 and C5, bisecting the molecule.\nStep 2: Group the 8 carbons into equivalent sets:\n- The two methyl carbons are equivalent (1 signal).\n- C1 and C3 (bearing methyl groups) are equivalent (1 signal).\n- C2 (between the two methyl groups) is unique (1 signal).\n- C4 and C6 are equivalent (1 signal).\n- C5 (opposite C2) is unique (1 signal).\nStep 3: Sum the unique environments: 1 + 1 + 1 + 1 + 1 = 5 signals.",
      "result": "m-Xylene exhibits exactly 5 signals in its 13C NMR spectrum."
    }
  },
  {
    "question_id": "ch13_q27_13c_equivalence_norbornane",
    "topic": "13C NMR: Chemical Equivalence",
    "difficulty_level": "Hard",
    "question_text": "How many signals are observed in the proton-decoupled $^{13}\\text{C}$ NMR spectrum of bicyclo[2.2.1]heptane (norbornane)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "3 signals",
        "smiles": "C1CC2CCC1C2",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4 signals",
        "smiles": "C1CC2CCC1C2",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5 signals",
        "smiles": "C1CC2CCC1C2",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "7 signals",
        "smiles": "C1CC2CCC1C2",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests chemical equivalence in rigid bicyclic ring systems.",
      "process": "Step 1: Identify the symmetry elements of norbornane (bicyclo[2.2.1]heptane). It possesses C2v symmetry with two perpendicular planes of symmetry.\nStep 2: Map the 7 carbons to their symmetry-equivalent partners:\n- C7 (the single-carbon bridge) lies on both symmetry planes (1 signal).\n- C1 and C4 (bridgehead carbons) are related by symmetry (1 signal).\n- C2, C3, C5, and C6 (the two two-carbon bridges) are all mutually equivalent (1 signal).\nStep 3: Sum the unique environments: 1 + 1 + 1 = 3 signals.",
      "result": "Due to its high symmetry (C2v), norbornane shows only 3 signals in its 13C NMR spectrum."
    }
  },
  {
    "question_id": "ch13_q28_diastereotopic_carbons",
    "topic": "13C NMR: Chemical Equivalence",
    "difficulty_level": "Hard",
    "question_text": "Why does 3-methyl-2-butanol exhibit 5 distinct signals in its $^{13}\\text{C}$ NMR spectrum, even though it has two methyl groups attached to the same carbon (C3)?",
    "question_smiles": "CC(C)[C@@H](C)O",
    "options": [
      {
        "option_id": "A",
        "text": "The adjacent C2 carbon is a stereocenter, making the two C3-methyl carbons diastereotopic and chemically non-equivalent.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The molecule exists as a mixture of enantiomers that are resolved by the achiral NMR solvent.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Spin-spin coupling between carbon nuclei ($^{13}\\text{C}$-$^{13}\\text{C}$) splits the methyl signal into two peaks.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Slow rotation around the C2-C3 bond resolves the two methyl groups.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question applies the concept of diastereotopic groups to 13C NMR spectroscopy.",
      "process": "Step 1: Identify that C2 is a chiral center. The two methyl groups on C3 are adjacent to this chiral center.\nStep 2: Use the substitution test. Replacing one C3-methyl carbon with 13C (or another isotope) generates a diastereomer relative to replacing the other. Therefore, the two methyl carbons are diastereotopic.\nStep 3: Unlike enantiotopic groups, diastereotopic groups are chemically non-equivalent in all media (achiral and chiral). Consequently, they have different chemical shifts and produce distinct signals in both 1H and 13C NMR spectra.",
      "result": "The two C3-methyl carbons are diastereotopic due to the C2 stereocenter, yielding separate 13C NMR signals and resulting in 5 total signals."
    }
  },
  {
    "question_id": "ch13_q29_13c_limonene",
    "topic": "13C NMR: Chemical Equivalence",
    "difficulty_level": "Medium",
    "question_text": "How many signals are observed in the proton-decoupled $^{13}\\text{C}$ NMR spectrum of limonene?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "10 signals",
        "smiles": "CC1=CCC(CC1)C(=C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "8 signals",
        "smiles": "CC1=CCC(CC1)C(=C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "6 signals",
        "smiles": "CC1=CCC(CC1)C(=C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "9 signals",
        "smiles": "CC1=CCC(CC1)C(=C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question evaluates chemical equivalence in an unsymmetrical monoterpene.",
      "process": "Step 1: Limonene contains 10 carbons (formula C10H16).\nStep 2: Identify symmetry. The molecule contains a single chiral center at C4 and has no planes, centers, or axes of symmetry.\nStep 3: Because there is no symmetry, all 10 carbons are chemically non-equivalent. Each carbon atom will produce a distinct signal in the 13C NMR spectrum.",
      "result": "Limonene has no symmetry, resulting in 10 distinct signals in its 13C NMR spectrum."
    }
  },
  {
    "question_id": "ch13_q30_13c_bicyclopropyl",
    "topic": "13C NMR: Chemical Equivalence",
    "difficulty_level": "Hard",
    "question_text": "How many signals does bicyclopropyl exhibit in its proton-decoupled $^{13}\\text{C}$ NMR spectrum?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "2 signals",
        "smiles": "C1CC1C2CC2",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3 signals",
        "smiles": "C1CC1C2CC2",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4 signals",
        "smiles": "C1CC1C2CC2",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "6 signals",
        "smiles": "C1CC1C2CC2",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests chemical equivalence in a symmetrical hydrocarbon dimer.",
      "process": "Step 1: Analyze the symmetry of bicyclopropyl (two connected cyclopropane rings). The molecule has a plane of symmetry cutting through both bridgehead carbons and bisecting the C-C bond between the rings.\nStep 2: Classify the carbons:\n- The two bridgehead carbons (C1 and C1') are equivalent to each other (1 signal).\n- The four methylene carbons (C2, C3, C2', C3') are all equivalent due to the planes of symmetry passing through each ring and between the rings (1 signal).\nStep 3: Sum the unique signals: 1 (bridgehead CH) + 1 (methylene CH2) = 2 signals.",
      "result": "Bicyclopropyl has 2 unique carbon environments, yielding exactly 2 signals in its 13C NMR spectrum."
    }
  },
  {
    "question_id": "ch13_q31_13c_carbonyl_shift",
    "topic": "13C NMR: Chemical Shifts",
    "difficulty_level": "Easy",
    "question_text": "In the $^{13}\\text{C}$ NMR spectrum of 2-butanone, at what approximate chemical shift range ($\\delta$, ppm) would you expect the carbonyl carbon signal to appear?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "$\\delta \\approx 200\\text{-}220\\text{ ppm}$",
        "smiles": "CCC(=O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$\\delta \\approx 160\\text{-}180\\text{ ppm}$",
        "smiles": "CCC(=O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$\\delta \\approx 110\\text{-}140\\text{ ppm}$",
        "smiles": "CCC(=O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$\\delta \\approx 50\\text{-}80\\text{ ppm}$",
        "smiles": "CCC(=O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the characteristic 13C chemical shift regions for different functional groups.",
      "process": "Step 1: Identify that 2-butanone is a ketone.\nStep 2: Recognize that ketone and aldehyde carbonyl carbons are highly deshielded due to both the strong electronegativity of the oxygen and the resonance contribution of the polar C=O bond, leaving a partial positive charge on carbon.\nStep 3: Recall the characteristic chemical shift regions: ketones/aldehydes appear at 200-220 ppm; esters, amides, and carboxylic acids appear at 160-180 ppm.",
      "result": "The carbonyl carbon of a ketone like 2-butanone appears downfield in the range of $200\\text{-}220\\text{ ppm}$."
    }
  },
  {
    "question_id": "ch13_q32_carbonyl_ester_vs_ketone",
    "topic": "13C NMR: Chemical Shifts",
    "difficulty_level": "Hard",
    "question_text": "Why does the carbonyl carbon of methyl acetate appear at $\\delta \\approx 170\\text{ ppm}$, which is significantly upfield of the carbonyl carbon of acetone ($\\delta \\approx 206\\text{ ppm}$)?",
    "question_smiles": "CC(=O)OC",
    "options": [
      {
        "option_id": "A",
        "text": "Resonance donation of the ester oxygen's lone pair into the carbonyl pi system increases electron density on the carbonyl carbon, shielding it relative to a ketone.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The ester oxygen is highly electronegative and deshields the carbonyl carbon inductively.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetone has greater steric hindrance, which forces the carbonyl carbon to hybridize as $sp$.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The methyl group in methyl acetate is electron-withdrawing, whereas the methyl groups in acetone are electron-donating.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question analyzes the electronic differences between esters and ketones and their effect on 13C chemical shifts.",
      "process": "Step 1: Write down the resonance structures of an ester: R-C(=O)-OR' <-> R-C(O-)=O+R'.\nStep 2: Notice that the oxygen atom can donate its lone pair to the carbonyl carbon by resonance, increasing the electron density at the carbonyl carbon.\nStep 3: In a ketone, no such resonance donation is possible (only weak inductive donation by alkyl groups). Therefore, the carbonyl carbon of the ester is more shielded (lower chemical shift, ~170 ppm) compared to the ketone (more deshielded, ~206 ppm).",
      "result": "Resonance donation by the ester oxygen shields the carbonyl carbon relative to that of a ketone."
    }
  },
  {
    "question_id": "ch13_q33_13c_shift_hybridization",
    "topic": "13C NMR: Chemical Shifts",
    "difficulty_level": "Medium",
    "question_text": "What is the correct order of chemical shifts ($\\delta$, ppm) for the different types of carbons in hex-1-en-5-yne?",
    "question_smiles": "C#CCCC=C",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^3 \\text{ carbons} < sp \\text{ carbons} < sp^2 \\text{ carbons}$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$sp^3 \\text{ carbons} < sp^2 \\text{ carbons} < sp \\text{ carbons}$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$sp \\text{ carbons} < sp^3 \\text{ carbons} < sp^2 \\text{ carbons}$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$sp^2 \\text{ carbons} < sp \\text{ carbons} < sp^3 \\text{ carbons}$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the effect of carbon hybridization on 13C chemical shifts.",
      "process": "Step 1: Identify the hybridization of all carbons in hex-1-en-5-yne (HC#C-CH2-CH2-CH=CH2):\n- C3 and C4 are $sp^3$ hybridized.\n- C5 and C6 are $sp$ hybridized (alkyne).\n- C1 and C2 are $sp^2$ hybridized (alkene).\nStep 2: Recall chemical shift ranges:\n- $sp^3$ aliphatic carbons: 10-40 ppm.\n- $sp$ alkyne carbons: 65-90 ppm (shielded due to cylindrical anisotropy, similar to 1H NMR).\n- $sp^2$ alkene carbons: 110-140 ppm.\nStep 3: Arrange in order: $sp^3$ (lowest ppm) < $sp$ < $sp^2$ (highest ppm).",
      "result": "The order of 13C chemical shifts is $sp^3 < sp < sp^2$."
    }
  },
  {
    "question_id": "ch13_q34_aromatic_13c_range",
    "topic": "13C NMR: Chemical Shifts",
    "difficulty_level": "Easy",
    "question_text": "At what approximate chemical shift range ($\\delta$, ppm) do the aromatic carbons of benzene and its derivatives typically appear in a proton-decoupled $^{13}\\text{C}$ NMR spectrum?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "$\\delta \\approx 110\\text{-}160\\text{ ppm}$",
        "smiles": "c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$\\delta \\approx 60\\text{-}90\\text{ ppm}$",
        "smiles": "c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$\\delta \\approx 10\\text{-}50\\text{ ppm}$",
        "smiles": "c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$\\delta \\approx 180\\text{-}220\\text{ ppm}$",
        "smiles": "c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests knowledge of the characteristic 13C NMR chemical shift region for aromatic carbons.",
      "process": "Step 1: Identify that aromatic ring carbons are $sp^2$ hybridized.\nStep 2: Recall that $sp^2$ hybridized carbons (alkenes and aromatics) appear downfield due to hybridization and local deshielding effects.\nStep 3: Aromatic carbons typically resonate in the range of 110-160 ppm, overlap significantly with alkenes, but are usually distinguishable by their chemical shifts and number of signals.",
      "result": "Aromatic carbons typically appear in the range of $110\\text{-}160\\text{ ppm}$."
    }
  },
  {
    "question_id": "ch13_q35_cdcl3_solvent_splitting",
    "topic": "13C NMR: Practical Methods",
    "difficulty_level": "Medium",
    "question_text": "When recording a $^{13}\\text{C}$ NMR spectrum in deuterated chloroform ($\\text{CDCl}_3$), a characteristic solvent signal is observed as a triplet (1:1:1 ratio) centered at $\\delta \\approx 77\\text{ ppm}$. Why does this signal appear as a triplet?",
    "question_smiles": "ClC(Cl)Cl",
    "options": [
      {
        "option_id": "A",
        "text": "Spin-spin coupling between the $^{13}\\text{C}$ nucleus and the deuterium ($^2\\text{H}$) nucleus, which has a spin quantum number $I = 1$.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Coupling between the $^{13}\\text{C}$ nucleus and three equivalent chlorine nuclei ($I = 3/2$).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The presence of three different conformation isomers of chloroform in solution.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The nuclear Zeeman splitting of chloroform in the presence of a strong radiofrequency field.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question explains the origin of the CDCl3 solvent signal splitting in 13C NMR spectra.",
      "process": "Step 1: Note that the solvent is CDCl3. The carbon atom is directly bonded to one deuterium (2H) nucleus.\nStep 2: Recall the formula for splitting by a nucleus with spin I: number of peaks = 2nI + 1. Here, n = 1 (one deuterium) and I = 1 for deuterium.\nStep 3: Calculate the splitting: 2(1)(1) + 1 = 3 (triplet). Because the three spin states of deuterium (m_I = -1, 0, +1) are equally populated, the triplet exhibits a 1:1:1 intensity ratio.",
      "result": "Coupling to the deuterium nucleus (I = 1) splits the carbon signal into a 1:1:1 triplet at 77 ppm."
    }
  },
  {
    "question_id": "ch13_q36_dept135_theory",
    "topic": "13C NMR: DEPT Experiments",
    "difficulty_level": "Easy",
    "question_text": "Which of the following statements correctly describes the signals observed in a DEPT-135 $^{13}\\text{C}$ NMR experiment?",
    "question_smiles": "CCC",
    "options": [
      {
        "option_id": "A",
        "text": "$\\text{CH}_3$ and $\\text{CH}$ carbons appear as positive signals; $\\text{CH}_2$ carbons appear as negative (inverted) signals; quaternary carbons do not appear.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$\\text{CH}_3$, $\\text{CH}_2$, and $\\text{CH}$ carbons all appear as positive signals; quaternary carbons appear as negative signals.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Only $\\text{CH}$ carbons appear (positive); all other carbons are suppressed.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Only quaternary carbons appear (positive); all proton-bearing carbons are suppressed.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the basic theory and output interpretation of a DEPT-135 experiment.",
      "process": "Step 1: Define the purpose of DEPT (Distortionless Enhancement by Polarization Transfer) NMR: it distinguishes carbons based on the number of attached protons.\nStep 2: Recall that quaternary carbons (no attached protons) are completely absent in all DEPT spectra.\nStep 3: In DEPT-135, CH3 and CH carbons point upward (positive), while CH2 carbons point downward (inverted/negative). This allows immediate identification of methylene carbons.",
      "result": "In DEPT-135, CH3/CH are positive, CH2 is negative, and quaternary carbons are absent."
    }
  },
  {
    "question_id": "ch13_q37_dept90_theory",
    "topic": "13C NMR: DEPT Experiments",
    "difficulty_level": "Easy",
    "question_text": "What type of carbon signals are selectively observed in a DEPT-90 $^{13}\\text{C}$ NMR spectrum?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Only $\\text{CH}$ carbons.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Only $\\text{CH}_2$ carbons.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Only $\\text{CH}_3$ carbons.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both $\\text{CH}$ and $\\text{CH}_3$ carbons.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the selectivity of the DEPT-90 NMR experiment.",
      "process": "Step 1: Review the pulse sequences for DEPT.\nStep 2: Recall that the DEPT-90 experiment utilizes a 90-degree read pulse for the proton channel.\nStep 3: This specific angle suppresses the magnetization transfer for CH3 and CH2 groups, leaving only methine (CH) carbons visible in the spectrum.",
      "result": "Only CH (methine) carbons appear in a DEPT-90 spectrum."
    }
  },
  {
    "question_id": "ch13_q38_dept_tert_butanol",
    "topic": "13C NMR: DEPT Experiments",
    "difficulty_level": "Medium",
    "question_text": "In the $^{13}\\text{C}$ NMR analysis of tert-butanol, two signals are observed in the standard broadband-decoupled spectrum. What behavior is expected for these two signals in DEPT-90 and DEPT-135 experiments?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The methyl signal ($\\delta \\approx 31\\text{ ppm}$) is positive in DEPT-135 and absent in DEPT-90; the quaternary carbon signal ($\\delta \\approx 69\\text{ ppm}$) is absent in both.",
        "smiles": "CC(C)(C)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The methyl signal is positive in both DEPT-135 and DEPT-90; the quaternary carbon signal is negative in DEPT-135.",
        "smiles": "CC(C)(C)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The quaternary carbon signal is positive in DEPT-90; the methyl signal is absent in DEPT-135.",
        "smiles": "CC(C)(C)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both signals are absent in DEPT-135 but present in DEPT-90.",
        "smiles": "CC(C)(C)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question applies DEPT-90 and DEPT-135 principles to a specific molecule (tert-butanol).",
      "process": "Step 1: Identify the two carbon environments in tert-butanol: three equivalent methyl groups (CH3, ~31 ppm) and one central quaternary carbon (C, ~69 ppm).\nStep 2: Analyze the central quaternary carbon. It has no attached protons, so it is absent in all DEPT experiments (both DEPT-90 and DEPT-135).\nStep 3: Analyze the methyl carbons (CH3). Since they are CH3 carbons, they are absent in DEPT-90 (which only shows CH) and appear as a positive (upright) peak in DEPT-135.",
      "result": "The CH3 carbon is positive in DEPT-135 and absent in DEPT-90; the quaternary carbon is absent in both."
    }
  },
  {
    "question_id": "ch13_q39_dept_2_butanone",
    "topic": "13C NMR: DEPT Experiments",
    "difficulty_level": "Medium",
    "question_text": "How many signals are observed in the DEPT-135 spectrum of 2-butanone, and what are their orientations (upright/positive vs inverted/negative)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "3 signals: 2 positive and 1 negative.",
        "smiles": "CCC(=O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4 signals: 3 positive and 1 negative.",
        "smiles": "CCC(=O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2 signals: 1 positive and 1 negative.",
        "smiles": "CCC(=O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3 signals: all positive.",
        "smiles": "CCC(=O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests interpretation of DEPT-135 spectra for a simple ketone.",
      "process": "Step 1: Identify the carbon types in 2-butanone: C1 is CH3, C2 is C=O (quaternary), C3 is CH2, and C4 is CH3.\nStep 2: Apply the DEPT-135 rules: CH3 and CH are positive (upright); CH2 is negative (inverted); quaternary is absent.\nStep 3: Evaluate each carbon:\n- C1 (CH3) -> positive.\n- C2 (quaternary) -> absent.\n- C3 (CH2) -> negative.\n- C4 (CH3) -> positive.\nTotal visible signals = 3 (2 positive, 1 negative).",
      "result": "The DEPT-135 spectrum shows 3 signals: 2 positive (methyls) and 1 negative (methylene)."
    }
  },
  {
    "question_id": "ch13_q40_dept_cyclohexanone",
    "topic": "13C NMR: DEPT Experiments",
    "difficulty_level": "Hard",
    "question_text": "For cyclohexanone, how many signals are expected in the proton-decoupled $^{13}\\text{C}$ NMR spectrum, the DEPT-90 spectrum, and the DEPT-135 spectrum, respectively?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "$^{13}\\text{C}$ decoupled: 4 signals; DEPT-90: 0 signals; DEPT-135: 3 negative signals.",
        "smiles": "O=C1CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$^{13}\\text{C}$ decoupled: 4 signals; DEPT-90: 1 signal; DEPT-135: 3 positive signals.",
        "smiles": "O=C1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$^{13}\\text{C}$ decoupled: 6 signals; DEPT-90: 0 signals; DEPT-135: 5 negative signals.",
        "smiles": "O=C1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$^{13}\\text{C}$ decoupled: 4 signals; DEPT-90: 0 signals; DEPT-135: 4 negative signals.",
        "smiles": "O=C1CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question applies chemical shift and DEPT concepts to a symmetric cyclic ketone.",
      "process": "Step 1: Determine the number of carbon signals in decoupled 13C NMR. Cyclohexanone has a plane of symmetry passing through C1 (carbonyl) and C4. This yields 4 signals: C1 (quaternary carbonyl), C2/C6 (equivalent CH2), C3/C5 (equivalent CH2), and C4 (CH2).\nStep 2: Determine DEPT-90 signals. DEPT-90 only shows CH carbons. Cyclohexanone contains only CH2 carbons and a quaternary carbon, so it has 0 CH carbons. DEPT-90 will show 0 signals.\nStep 3: Determine DEPT-135 signals. DEPT-135 shows CH3/CH as positive, CH2 as negative, and quaternary as absent. Cyclohexanone has 3 unique CH2 environments (C2/C6, C3/C5, C4) and no CH/CH3. Thus, it will display 3 negative signals.",
      "result": "Decoupled shows 4 signals, DEPT-90 shows 0 signals, and DEPT-135 shows 3 negative signals."
    }
  },
  {
    "question_id": "ch13_q41_elucidation_ethyl_acetate",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Medium",
    "question_text": "An unknown compound has the molecular formula $\\text{C}_4\\text{H}_8\\text{O}_2$. Its IR spectrum shows a strong absorption at $1740\\text{ cm}^{-1}$ and no absorptions in the $3200\\text{-}3600\\text{ cm}^{-1}$ region. The $^1\\text{H}$ NMR spectrum displays a triplet at $\\delta = 1.25\\text{ ppm}$ ($J = 7.0\\text{ Hz}$, 3H), a singlet at $\\delta = 2.04\\text{ ppm}$ (3H), and a quartet at $\\delta = 4.12\\text{ ppm}$ ($J = 7.0\\text{ Hz}$, 2H). What is the structure of this compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Ethyl acetate",
        "smiles": "CC(=O)OCC",
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
        "text": "Butanoic acid",
        "smiles": "CCCC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question represents a classic multi-spectral structure elucidation problem combining IR and 1H NMR data.",
      "process": "Step 1: Calculate degrees of unsaturation: (2*4 + 2 - 8)/2 = 1. The IR band at 1740 cm-1 indicates a carbonyl group (C=O). The lack of OH absorption (3200-3600 cm-1) rules out carboxylic acids (butanoic acid), suggesting an ester.\nStep 2: Analyze the 1H NMR splitting patterns:\n- Triplet (3H, 1.25 ppm) and Quartet (2H, 4.12 ppm) indicate an ethyl group (-CH2CH3) attached to an electronegative atom. The downfield shift of the quartet (4.12 ppm) specifies that the -CH2- is directly attached to the ester oxygen (-OCH2CH3).\n- Singlet (3H, 2.04 ppm) indicates a methyl group adjacent to the carbonyl (-C(=O)CH3).\nStep 3: Assemble the pieces: CH3-C(=O)-OCH2CH3 (ethyl acetate).",
      "result": "The spectral data uniquely identifies the structure as ethyl acetate."
    }
  },
  {
    "question_id": "ch13_q42_elucidation_3_pentanone",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Medium",
    "question_text": "A compound with molecular formula $\\text{C}_5\\text{H}_{10}\\text{O}$ exhibits a strong IR absorption at $1715\\text{ cm}^{-1}$. Its $^1\\text{H}$ NMR spectrum shows a quartet at $\\delta = 2.42\\text{ ppm}$ ($J = 7.2\\text{ Hz}$, 4H) and a triplet at $\\delta = 1.05\\text{ ppm}$ ($J = 7.2\\text{ Hz}$, 6H). The proton-decoupled $^{13}\\text{C}$ NMR spectrum displays three signals at $\\delta = 211$, $35$, and $8\\text{ ppm}$. What is the structure of the compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "3-Pentanone",
        "smiles": "CCC(=O)CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Pentanone",
        "smiles": "CCCC(=O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Methyl isobutyl ketone",
        "smiles": "CC(C)CC(=O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Pentanal",
        "smiles": "CCCCC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the identification of a symmetrical ketone using IR, 1H, and 13C NMR.",
      "process": "Step 1: Degree of unsaturation = 1. The IR absorption at 1715 cm-1 suggests an aliphatic ketone or aldehyde carbonyl.\nStep 2: Analyze 1H NMR. The quartet (4H) and triplet (6H) indicate two equivalent ethyl groups (-CH2CH3). The chemical shift of the quartet (2.42 ppm) is consistent with methylene groups adjacent to a carbonyl.\nStep 3: Analyze 13C NMR. Only three signals are observed: 211 ppm (carbonyl C), 35 ppm (CH2 carbons), and 8 ppm (CH3 carbons). This confirms a highly symmetrical ketone. Connecting the two equivalent ethyl groups to the carbonyl carbon gives 3-pentanone.",
      "result": "The structure is 3-pentanone."
    }
  },
  {
    "question_id": "ch13_q43_elucidation_isobutanol",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Medium",
    "question_text": "An unknown compound of formula $\\text{C}_4\\text{H}_{10}\\text{O}$ shows a broad IR stretch at $3350\\text{ cm}^{-1}$. The $^1\\text{H}$ NMR spectrum features a doublet at $\\delta = 0.90\\text{ ppm}$ ($J = 6.7\\text{ Hz}$, 6H), a multiplet at $\\delta = 1.75\\text{ ppm}$ (1H), a broad singlet at $\\delta = 2.15\\text{ ppm}$ (1H, exchanges with $\\text{D}_2\\text{O}$), and a doublet at $\\delta = 3.38\\text{ ppm}$ ($J = 6.5\\text{ Hz}$, 2H). What is the structure of this compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "2-Methyl-1-propanol",
        "smiles": "CC(C)CO",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Butanol",
        "smiles": "CCCCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Butanol",
        "smiles": "CCC(C)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Methyl-2-propanol",
        "smiles": "CC(C)(C)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question requires elucidating the structure of an alcohol from IR and 1H NMR coupling constants.",
      "process": "Step 1: Degree of unsaturation = 0. The broad IR band at 3350 cm-1 indicates an alcohol (-OH). The exchangeable singlet at 2.15 ppm confirms the presence of the hydroxyl proton.\nStep 2: Analyze 1H NMR splitting:\n- 6H doublet at 0.90 ppm coupled to a 1H multiplet at 1.75 ppm indicates an isopropyl group, -CH(CH3)2.\n- 2H doublet at 3.38 ppm indicates a methylene group adjacent to the electronegative oxygen (-CH2OH), split by the methine proton of the isopropyl group.\nStep 3: Combine: (CH3)2CH-CH2OH, which is 2-methyl-1-propanol (isobutanol).",
      "result": "The spectral data corresponds to 2-methyl-1-propanol."
    }
  },
  {
    "question_id": "ch13_q44_elucidation_acetophenone",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Medium",
    "question_text": "A compound with molecular formula $\\text{C}_8\\text{H}_8\\text{O}$ exhibits a strong IR absorption at $1685\\text{ cm}^{-1}$. The $^1\\text{H}$ NMR spectrum shows a 3H singlet at $\\delta = 2.6\\text{ ppm}$ and a 5H multiplet at $\\delta = 7.4\\text{-}7.9\\text{ ppm}$. The $^{13}\\text{C}$ NMR spectrum displays signals at $\\delta = 198$, $137$, $133$, $129$, $128$, and $26\\text{ ppm}$. What is the structure of this compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Acetophenone",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Phenylacetaldehyde",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Methyl benzoate",
        "smiles": "COC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzyl methyl ether",
        "smiles": "COCc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question focuses on aromatic ketones and conjugate effects on carbonyl chemical shifts and IR values.",
      "process": "Step 1: Degree of unsaturation = 5. A benzene ring accounts for 4 degrees, leaving 1 degree for a carbonyl group. The IR absorption at 1685 cm-1 is lower than the typical 1715 cm-1 value, indicating conjugation of the carbonyl with the benzene ring.\nStep 2: Analyze 1H NMR. The 5H multiplet in the 7.4-7.9 ppm region confirms a monosubstituted benzene ring. The 3H singlet at 2.6 ppm indicates a methyl group attached directly to the carbonyl carbon (-C(=O)CH3).\nStep 3: Analyze 13C NMR. The signal at 198 ppm is a conjugated carbonyl carbon. The signal at 26 ppm is the methyl carbon. The four signals in the 128-137 ppm range correspond to the 6 aromatic carbons. This matches acetophenone.",
      "result": "The compound is acetophenone."
    }
  },
  {
    "question_id": "ch13_q45_elucidation_1_4_dioxane",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Medium",
    "question_text": "A compound with molecular formula $\\text{C}_4\\text{H}_8\\text{O}_2$ has no IR absorption near $1700\\text{ cm}^{-1}$ or $3300\\text{ cm}^{-1}$. Its $^1\\text{H}$ NMR spectrum shows only a single singlet at $\\delta = 3.69\\text{ ppm}$, and its $^{13}\\text{C}$ NMR spectrum displays a single signal at $\\delta = 67.2\\text{ ppm}$. What is the structure of this compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "1,4-Dioxane",
        "smiles": "C1COCCO1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethyl acetate",
        "smiles": "CC(=O)OCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-Hydroxybutanal",
        "smiles": "CC(O)CC=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyl propanoate",
        "smiles": "CCC(=O)OC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests structure determination for a highly symmetrical molecule with no carbonyl or hydroxyl groups.",
      "process": "Step 1: Degree of unsaturation = 1. The lack of IR bands near 1700 (carbonyl) and 3300 cm-1 (hydroxyl) indicates the absence of C=O and O-H groups. The degree of unsaturation must represent a ring.\nStep 2: Evaluate NMR simplicity. The presence of only 1 signal in both 1H NMR (singlet at 3.69 ppm) and 13C NMR (67.2 ppm) indicates a highly symmetric cyclic ether where all protons and carbons are equivalent.\nStep 3: Check 1,4-dioxane. It is a symmetric 6-membered cyclic diether. All 8 protons are equivalent (3.69 ppm) and all 4 carbons are equivalent (67.2 ppm, deshielded by neighboring oxygen atoms). This matches perfectly.",
      "result": "The compound is 1,4-dioxane."
    }
  },
  {
    "question_id": "ch13_q46_elucidation_chloropropanoic_acid",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Medium",
    "question_text": "A compound with molecular formula $\\text{C}_3\\text{H}_5\\text{ClO}_2$ exhibits a broad IR band spanning $2500\\text{-}3300\\text{ cm}^{-1}$ and a strong band at $1715\\text{ cm}^{-1}$. Its $^1\\text{H}$ NMR spectrum features a broad singlet at $\\delta = 11.8\\text{ ppm}$ (1H), a quartet at $\\delta = 4.41\\text{ ppm}$ ($J = 7.0\\text{ Hz}$, 1H), and a doublet at $\\delta = 1.70\\text{ ppm}$ ($J = 7.0\\text{ Hz}$, 3H). What is the structure of this compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "2-Chloropropanoic acid",
        "smiles": "CC(Cl)C(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Chloropropanoic acid",
        "smiles": "ClCCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Methyl chloroacetate",
        "smiles": "ClCC(=O)OC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl chloroformate",
        "smiles": "CCOC(=O)Cl",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests identification of chlorinated carboxylic acids using 1H NMR splitting patterns.",
      "process": "Step 1: Degree of unsaturation = 1. The broad IR band from 2500-3300 cm-1 and C=O stretch at 1715 cm-1 specify a carboxylic acid. The peak at 11.8 ppm in 1H NMR confirms the carboxylic acid proton (-COOH).\nStep 2: Analyze the remaining 1H NMR signals. The quartet (1H, 4.41 ppm) and doublet (3H, 1.70 ppm) indicate a -CH(Cl)-CH3 fragment. The significant downfield shift of the quartet (4.41 ppm) is due to both the chlorine atom and the adjacent carbonyl group.\nStep 3: Combine the fragments: CH3-CH(Cl)-COOH, which is 2-chloropropanoic acid. 3-Chloropropanoic acid would instead show two triplets in the 1H NMR spectrum.",
      "result": "The spectral data corresponds to 2-chloropropanoic acid."
    }
  },
  {
    "question_id": "ch13_q47_elucidation_butanenitrile",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Medium",
    "question_text": "An unknown compound of formula $\\text{C}_4\\text{H}_7\\text{N}$ exhibits a sharp IR absorption at $2250\\text{ cm}^{-1}$. Its $^1\\text{H}$ NMR spectrum displays a triplet at $\\delta = 2.33\\text{ ppm}$ ($J = 7.1\\text{ Hz}$, 2H), a multiplet/sextet at $\\delta = 1.68\\text{ ppm}$ (2H), and a triplet at $\\delta = 1.02\\text{ ppm}$ ($J = 7.3\\text{ Hz}$, 3H). What is the structure of this compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Butanenitrile",
        "smiles": "CCCC#N",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Methylpropanenitrile",
        "smiles": "CC(C)C#N",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclobutanecarbonitrile",
        "smiles": "C1CC(C1)C#N",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Butenenitrile",
        "smiles": "CC=CC#N",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question focuses on structure elucidation of nitriles using IR and 1H NMR coupling patterns.",
      "process": "Step 1: Degree of unsaturation = 2. The sharp IR band at 2250 cm-1 is diagnostic of a nitrile group (-C#N).\nStep 2: Analyze the 1H NMR spectrum:\n- Triplet (3H, 1.02 ppm) represents a methyl group coupled to a methylene group (-CH2-CH3).\n- Multiplet/sextet (2H, 1.68 ppm) represents a methylene group adjacent to both a methyl and a methylene group (-CH2-CH2-CH3).\n- Triplet (2H, 2.33 ppm) represents a methylene group adjacent to the nitrile group (-CH2-CN), split by the middle methylene group.\nStep 3: Combine these fragments: CH3-CH2-CH2-CN, which is butanenitrile.",
      "result": "The compound is butanenitrile."
    }
  },
  {
    "question_id": "ch13_q48_elucidation_pbromotoluene",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Medium",
    "question_text": "A compound with molecular formula $\\text{C}_7\\text{H}_7\\text{Br}$ exhibits a $^1\\text{H}$ NMR spectrum consisting of two doublets at $\\delta = 7.30\\text{ ppm}$ ($J = 8.0\\text{ Hz}$, 2H) and $\\delta = 7.08\\text{ ppm}$ ($J = 8.0\\text{ Hz}$, 2H), and a singlet at $\\delta = 2.28\\text{ ppm}$ (3H). What is the structure of this compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "1-Bromo-4-methylbenzene",
        "smiles": "Cc1ccc(Br)cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Bromo-2-methylbenzene",
        "smiles": "Cc1ccccc1Br",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzyl bromide",
        "smiles": "BrCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Bromo-3-methylbenzene",
        "smiles": "Cc1cccc(Br)c1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question applies aromatic splitting patterns to identify the substitution isomer of a bromotoluene.",
      "process": "Step 1: Degree of unsaturation = 4. The presence of signals in the aromatic region (~7 ppm) indicates a benzene ring.\nStep 2: Analyze the aromatic region: two doublets with $J = 8.0$ Hz, each integrating for 2H, represent a characteristic AA'BB' splitting pattern of a 1,4-disubstituted (para) benzene ring.\nStep 3: Identify the substituents. The singlet at 2.28 ppm (3H) indicates a methyl group attached to the aromatic ring. The remaining substituent is bromine. This matches 1-bromo-4-methylbenzene (p-bromotoluene). Benzyl bromide would instead show a 5H aromatic multiplet and a 2H singlet at ~4.5 ppm.",
      "result": "The AA'BB' doublet pattern confirms a para-substituted benzene ring, identifying the molecule as 1-bromo-4-methylbenzene."
    }
  },
  {
    "question_id": "ch13_q49_elucidation_isopropyl_bromide",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Medium",
    "question_text": "A halogenated compound with molecular formula $\\text{C}_3\\text{H}_7\\text{Br}$ displays molecular ion peaks in mass spectrometry at $m/z = 122$ and $124$ in a 1:1 ratio. The $^1\\text{H}$ NMR spectrum shows a doublet at $\\delta = 1.71\\text{ ppm}$ ($J = 6.8\\text{ Hz}$, 6H) and a septet at $\\delta = 4.30\\text{ ppm}$ ($J = 6.8\\text{ Hz}$, 1H). What is the structure of this compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "2-Bromopropane",
        "smiles": "CC(Br)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Bromopropane",
        "smiles": "CCCBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Bromocyclopropane",
        "smiles": "C1CC1Br",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Allyl bromide",
        "smiles": "C=CCBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question combines Mass Spectrometry isotopic patterns with 1H NMR splitting to identify an alkyl halide.",
      "process": "Step 1: The MS peaks at m/z 122 and 124 in a 1:1 ratio are characteristic of a compound containing a single bromine atom (79Br and 81Br isotopes in equal abundance).\nStep 2: Analyze 1H NMR. The 6H doublet and 1H septet indicate a symmetric isopropyl group, -CH(CH3)2.\nStep 3: Combine the fragments: (CH3)2CH-Br, which is 2-bromopropane. 1-Bromopropane would show a triplet, multiplet, and triplet.",
      "result": "The 1:1 isotope ratio and isopropyl splitting pattern confirm the structure is 2-bromopropane."
    }
  },
  {
    "question_id": "ch13_q50_elucidation_anisole",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "An unknown ether has the molecular formula $\\text{C}_{11}\\text{H}_{16}\\text{O}$. Its IR spectrum shows strong bands at $1250$ and $1040\\text{ cm}^{-1}$ and no bands above $3100\\text{ cm}^{-1}$. The $^1\\text{H}$ NMR spectrum features a singlet at $\\delta = 1.30\\text{ ppm}$ (9H), a singlet at $\\delta = 3.78\\text{ ppm}$ (3H), a doublet at $\\delta = 6.82\\text{ ppm}$ ($J = 8.8\\text{ Hz}$, 2H), and a doublet at $\\delta = 7.30\\text{ ppm}$ ($J = 8.8\\text{ Hz}$, 2H). What is the structure of this compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "1-tert-Butyl-4-methoxybenzene",
        "smiles": "COc1ccc(cc1)C(C)(C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-tert-Butyl-5-methylphenol",
        "smiles": "Cc1ccc(C(C)(C)C)c(O)c1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-tert-Butylbenzyl alcohol",
        "smiles": "CC(C)(C)c1ccc(CO)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-Isopropylphenetole",
        "smiles": "CCOc1ccc(cc1)C(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question requires solving a multi-spectral problem for a para-substituted phenyl ether.",
      "process": "Step 1: Degree of unsaturation = 4. The 4H aromatic doublets confirm a para-disubstituted benzene ring.\nStep 2: Analyze substituents from 1H NMR:\n- 9H singlet at 1.30 ppm indicates a tert-butyl group, -C(CH3)3.\n- 3H singlet at 3.78 ppm represents a methoxy group, -OCH3. The downfield shift is typical for an aryl ether.\n- The two doublets at 6.82 and 7.30 ppm confirm a para-disubstituted benzene ring.\nStep 3: Check IR bands: 1250 and 1040 cm-1 are characteristic of aryl-alkyl ether C-O stretches. No OH band exists, ruling out phenol (2-tert-butyl-5-methylphenol) and alcohol (4-tert-butylbenzyl alcohol) derivatives. Thus, the structure is 1-tert-butyl-4-methoxybenzene (4-tert-butylanisole).",
      "result": "The spectral data matches 1-tert-butyl-4-methoxybenzene."
    }
  },
  {
    "question_id": "ch13_q_dynamic_nmr_shifts",
    "topic": "NMR Spectroscopy",
    "difficulty_level": "Hard",
    "question_text": "Match each proton highlight in the structures to its approximate 1H-NMR chemical shift.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCO",
        "correctAnswer": "3.5 - 4.5 ppm (adjacent to O)"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "7.2 ppm (aromatic ring protons)"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "2.1 ppm (adjacent to C=O)"
      },
      {
        "smiles": "CCC",
        "correctAnswer": "0.9 ppm (sp3 alkyl methyl)"
      }
    ],
    "match_options": [
      "3.5 - 4.5 ppm (adjacent to O)",
      "7.2 ppm (aromatic ring protons)",
      "2.1 ppm (adjacent to C=O)",
      "0.9 ppm (sp3 alkyl methyl)",
      "9.8 ppm (aldehyde)"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect chemical shifts",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Assessing shielding/deshielding effects on proton chemical shifts.",
      "process": "Alkoxy protons are deshielded by electronegative oxygen (3.5-4.5). Aromatic ring currents shift protons downfield (7.2). Carbonyl allylic/alpha protons are slightly deshielded (2.1). Regular alkane sp3 protons are shielded (0.9).",
      "result": "Protons matched to expected NMR shift ranges."
    }
  }
];
