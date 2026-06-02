// McMurry Chapter 1: Structure and Bonding
const CHAPTER_1_QUESTIONS = [
  {
    "question_id": "ch1_q1_electron_config",
    "topic": "Atomic Structure & Electron Configurations",
    "difficulty_level": "Easy",
    "question_text": "What is the ground-state electron configuration of a neutral carbon atom?",
    "question_smiles": "[C]",
    "options": [
      {
        "option_id": "A",
        "text": "$1s^2 2s^2 2p^2$ (Hund's rule satisfied)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$1s^2 2s^1 2p^3$ (excited state configuration)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$1s^2 2s^2 2p^4$ (neutral oxygen configuration)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$1s^2 2s^2 2p^1$ (neutral boron configuration)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the understanding of ground-state electron configurations for carbon, which is the foundational element of organic chemistry.",
      "process": "Step 1: Identify the atomic number of carbon, which is 6. A neutral carbon atom has 6 electrons.\nStep 2: Fill orbitals in order of increasing energy (Aufbau principle): $1s$ first, then $2s$, then $2p$.\nStep 3: Distribute the 6 electrons: 2 in $1s$, 2 in $2s$, and the remaining 2 in the three degenerate $2p$ orbitals (singly, with parallel spins, per Hund's rule). This results in $1s^2 2s^2 2p^2$.",
      "result": "The correct ground-state electron configuration is $1s^2 2s^2 2p^2$."
    }
  },
  {
    "question_id": "ch1_q2_nitrogen_config",
    "topic": "Atomic Structure & Electron Configurations",
    "difficulty_level": "Easy",
    "question_text": "What is the ground-state electron configuration of a nitrogen atom?",
    "question_smiles": "[N]",
    "options": [
      {
        "option_id": "A",
        "text": "$1s^2 2s^2 2p^3$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$1s^2 2s^2 2p^2$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$1s^2 2s^1 2p^4$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$1s^2 2s^2 2p^4$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the ground-state electron configuration of nitrogen (atomic number 7).",
      "process": "Step 1: Nitrogen has atomic number 7, meaning 7 electrons in a neutral atom.\nStep 2: Apply Aufbau principle: fill $1s$ (2e-), $2s$ (2e-), and then $2p$ (3e-).\nStep 3: This gives $1s^2 2s^2 2p^3$, with three unpaired electrons in the $2p$ subshell.",
      "result": "The ground-state configuration is $1s^2 2s^2 2p^3$."
    }
  },
  {
    "question_id": "ch1_q3_oxygen_config",
    "topic": "Atomic Structure & Electron Configurations",
    "difficulty_level": "Easy",
    "question_text": "What is the ground-state electron configuration of an oxygen atom?",
    "question_smiles": "[O]",
    "options": [
      {
        "option_id": "A",
        "text": "$1s^2 2s^2 2p^4$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$1s^2 2s^2 2p^3$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$1s^2 2s^2 2p^5$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$1s^2 2s^1 2p^5$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify the ground-state configuration of oxygen (atomic number 8).",
      "process": "Step 1: Oxygen has 8 electrons.\nStep 2: Fill $1s$ (2e-), $2s$ (2e-), and $2p$ (4e-).\nStep 3: This gives $1s^2 2s^2 2p^4$.",
      "result": "The ground-state configuration is $1s^2 2s^2 2p^4$."
    }
  },
  {
    "question_id": "ch1_q4_phosphorus_config",
    "topic": "Atomic Structure & Electron Configurations",
    "difficulty_level": "Medium",
    "question_text": "Which of the following represents the valence electron configuration of a ground-state phosphorus atom (Z = 15)?",
    "question_smiles": "[P]",
    "options": [
      {
        "option_id": "A",
        "text": "$3s^2 3p^3$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$2s^2 2p^3$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$3s^2 3p^5$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$3s^1 3p^4$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the ability to determine valence electron configurations for third-row elements like phosphorus.",
      "process": "Step 1: Identify the total electron configuration of phosphorus (Z = 15): $1s^2 2s^2 2p^6 3s^2 3p^3$.\nStep 2: The valence shell is the outermost shell (n = 3).\nStep 3: The electrons in n = 3 are $3s^2 3p^3$.",
      "result": "The valence configuration is $3s^2 3p^3$."
    }
  },
  {
    "question_id": "ch1_q5_carbon_excited",
    "topic": "Atomic Structure & Electron Configurations",
    "difficulty_level": "Medium",
    "question_text": "Which configuration represents an excited state of a neutral carbon atom?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "$1s^2 2s^1 2p^3$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$1s^2 2s^2 2p^2$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$1s^2 2s^2 2p^1$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$1s^2 2s^2 2p^3$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguish between ground states, excited states, and different elements.",
      "process": "Step 1: A neutral carbon atom must have exactly 6 electrons.\nStep 2: Check configurations with 6 electrons. $1s^2 2s^2 2p^2$ is the ground state. $1s^2 2s^1 2p^3$ also has 6 electrons but one electron has been promoted from the $2s$ orbital to a higher energy $2p$ orbital.\nStep 3: This represents an excited state.",
      "result": "The correct option is $1s^2 2s^1 2p^3$."
    }
  },
  {
    "question_id": "ch1_q6_hybrid_methane",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Easy",
    "question_text": "What is the hybridization and bond angle around the carbon atom in methane (CH4)?",
    "question_smiles": "C",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^3$, $109.5^\\circ$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$sp^2$, $120^\\circ$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$sp$, $180^\\circ$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$sp^3$, $120^\\circ$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Evaluate hybridization and geometry of methane ($CH_4$).",
      "process": "Step 1: Count electron groups around carbon. Carbon has 4 single bonds to hydrogen and 0 lone pairs. Total steric number = 4.\nStep 2: A steric number of 4 corresponds to $sp^3$ hybridization.\nStep 3: The geometry is tetrahedral, which has an ideal bond angle of $109.5^\\circ$.",
      "result": "The carbon is $sp^3$ hybridized with a bond angle of $109.5^\\circ$."
    }
  },
  {
    "question_id": "ch1_q7_hybrid_ethylene",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Easy",
    "question_text": "What is the hybridization and molecular geometry around the carbons in ethylene (H2C=CH2)?",
    "question_smiles": "C=C",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^2$, trigonal planar",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$sp^3$, tetrahedral",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$sp$, linear",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$sp^2$, linear",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify hybridization and geometry of ethylene carbons.",
      "process": "Step 1: Each carbon has 3 attached groups (two hydrogens and one carbon). Steric number = 3.\nStep 2: A steric number of 3 indicates $sp^2$ hybridization.\nStep 3: The geometry around each carbon is trigonal planar with bond angles of approximately $120^\\circ$.",
      "result": "The carbons are $sp^2$ hybridized with trigonal planar geometry."
    }
  },
  {
    "question_id": "ch1_q8_hybrid_acetylene",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Easy",
    "question_text": "What is the hybridization and bond angle of the carbon atoms in acetylene (HC#CH)?",
    "question_smiles": "C#C",
    "options": [
      {
        "option_id": "A",
        "text": "$sp$, $180^\\circ$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$sp^2$, $120^\\circ$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$sp^3$, $109.5^\\circ$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$sp$, $120^\\circ$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify hybridization and geometry of acetylene carbons.",
      "process": "Step 1: Each carbon is bonded to one hydrogen and one carbon (via triple bond). Steric number = 2.\nStep 2: A steric number of 2 corresponds to $sp$ hybridization.\nStep 3: The geometry is linear, which corresponds to a bond angle of $180^\\circ$.",
      "result": "The carbons are $sp$ hybridized with bond angles of $180^\\circ$."
    }
  },
  {
    "question_id": "ch1_q9_hybrid_allene_center",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Hard",
    "question_text": "What is the hybridization of the central carbon in allene (H2C=C=CH2)?",
    "question_smiles": "C=C=C",
    "options": [
      {
        "option_id": "A",
        "text": "$sp$ (bonded to two atoms, no lone pairs)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$sp^2$ (shares two double bonds)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$sp^3$ (shares four bonds total)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$sp^2d$ (expanded octet geometry)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determine the hybridization of the central carbon in allene, a molecule containing two adjacent double bonds.",
      "process": "Step 1: Look at the central carbon (C2) in allene ($H_2C=C=CH_2$). It forms two $\\sigma$ bonds (one to each adjacent carbon) and has 0 lone pairs. Steric number = 2.\nStep 2: A steric number of 2 corresponds to $sp$ hybridization.\nStep 3: Note that C1 and C3 are each bonded to 2 hydrogens and 1 carbon, making them $sp^2$ hybridized. The central carbon uses two orthogonal $p$ orbitals to form two orthogonal $\\pi$ bonds.",
      "result": "The central carbon is $sp$ hybridized."
    }
  },
  {
    "question_id": "ch1_q10_hybrid_allene_terminal",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Medium",
    "question_text": "What is the hybridization of the terminal carbons in allene (H2C=C=CH2)?",
    "question_smiles": "C=C=C",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^2$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$sp$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$sp^3$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$sp^3d$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify the hybridization of the terminal carbons in allene.",
      "process": "Step 1: Check the terminal carbons (C1 and C3). Each is bonded to two hydrogens and the central carbon. Total steric groups = 3.\nStep 2: Steric number 3 indicates $sp^2$ hybridization.\nStep 3: This allows them to have one unhybridized $p$ orbital to form a double bond with the central carbon.",
      "result": "The terminal carbons are $sp^2$ hybridized."
    }
  },
  {
    "question_id": "ch1_q11_lone_pair_effect",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Medium",
    "question_text": "Why is the bond angle in water (H2O) (104.5 degrees) smaller than the bond angle in ammonia (NH3) (107.3 degrees)?",
    "question_smiles": "O",
    "options": [
      {
        "option_id": "A",
        "text": "Oxygen has two lone pairs which repel bonding pairs more strongly than nitrogen's single lone pair.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Oxygen is less electronegative than nitrogen.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ammonia undergoes $sp^2$ hybridization while water is $sp^3$ hybridized.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The hydrogen atoms in water are smaller than those in ammonia.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Compare the geometries and bond angles of water and ammonia, focusing on VSEPR theory.",
      "process": "Step 1: Both oxygen in water and nitrogen in ammonia are $sp^3$ hybridized with steric number 4.\nStep 2: Nitrogen has 1 lone pair, and oxygen has 2 lone pairs.\nStep 3: Valence Shell Electron Pair Repulsion (VSEPR) theory states that lone pairs occupy more space than bonding pairs. The two lone pairs in water exert greater repulsive force on the O-H bonds than the single lone pair in ammonia, squeezing the H-O-H angle down to $104.5^\\circ$.",
      "result": "The correct choice is A."
    }
  },
  {
    "question_id": "ch1_q12_hybrid_acetonitrile",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Medium",
    "question_text": "In acetonitrile (CH3C#N), what is the hybridization of the methyl carbon, nitrile carbon, and nitrogen atom, respectively?",
    "question_smiles": "CC#N",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^3$, $sp$, $sp$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$sp^3$, $sp^2$, $sp$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$sp^2$, $sp$, $sp$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$sp^3$, $sp$, $sp^2$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Assign hybridization states to atoms in acetonitrile ($CH_3CN$).",
      "process": "Step 1: Methyl carbon (C1) is bonded to 3 hydrogens and 1 carbon. Steric number = 4 ($sp^3$).\nStep 2: Nitrile carbon (C2) is bonded to 1 carbon and 1 nitrogen. Steric number = 2 ($sp$).\nStep 3: Nitrile nitrogen (N) is bonded to 1 carbon and has 1 lone pair. Steric number = 2 ($sp$).",
      "result": "The hybridizations are $sp^3$, $sp$, and $sp$ respectively."
    }
  },
  {
    "question_id": "ch1_q13_hybrid_carbonyl",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Easy",
    "question_text": "What is the hybridization and bond angle around the carbonyl carbon in formaldehyde (H2C=O)?",
    "question_smiles": "C=O",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^2$, $120^\\circ$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$sp^3$, $109.5^\\circ$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$sp$, $180^\\circ$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$sp^2$, $109.5^\\circ$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify the hybridization of carbonyl carbons.",
      "process": "Step 1: The carbon is bonded to 2 hydrogens and double-bonded to 1 oxygen. Steric groups = 3.\nStep 2: Steric number 3 indicates $sp^2$ hybridization.\nStep 3: Ideal bond angle for trigonal planar geometry is $120^\\circ$.",
      "result": "The carbonyl carbon is $sp^2$ hybridized with a bond angle of $120^\\circ$."
    }
  },
  {
    "question_id": "ch1_q14_hybrid_oxygen",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Medium",
    "question_text": "What is the hybridization of the oxygen atom in dimethyl ether (CH3-O-CH3)?",
    "question_smiles": "COC",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^3$ (2 bonds, 2 lone pairs)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$sp^2$ (delocalized lone pair)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$sp$ (linear configuration)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Unhybridized (pure $p$ orbitals used for bonding)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determine hybridization of ether oxygens.",
      "process": "Step 1: Oxygen has 2 single bonds (to methyl carbons) and 2 lone pairs.\nStep 2: Total steric number = 2 + 2 = 4.\nStep 3: Steric number 4 corresponds to $sp^3$ hybridization (bent molecular geometry).",
      "result": "The oxygen is $sp^3$ hybridized."
    }
  },
  {
    "question_id": "ch1_q15_hybrid_urea",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Hard",
    "question_text": "In urea (NH2CONH2), considering resonance delocalization, what is the best description of the hybridization of the nitrogen atoms?",
    "question_smiles": "NC(N)=O",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^2$ (lone pair is delocalized into the carbonyl $\\pi$ system)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$sp^3$ (3 single bonds, 1 lone pair)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$sp$ (linear resonance contributor)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "One is $sp^2$ and the other is $sp^3$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the effect of resonance conjugation on atom hybridization in amides/urea.",
      "process": "Step 1: Normally, a nitrogen with three single bonds and one lone pair appears $sp^3$ hybridized.\nStep 2: However, urea has key resonance contributors where the nitrogen lone pair forms a double bond with carbon ($H_2N^+=C(-O^-)NH_2$).\nStep 3: To participate in this $\\pi$ delocalization, the nitrogen lone pair must reside in a $p$ orbital, which requires the nitrogen to adopt $sp^2$ hybridization with trigonal planar geometry.",
      "result": "The nitrogen atoms are $sp^2$ hybridized due to resonance conjugation."
    }
  },
  {
    "question_id": "ch1_q16_sigma_pi_ethylene",
    "topic": "Sigma & Pi Bonding",
    "difficulty_level": "Easy",
    "question_text": "How many sigma (\\(\\sigma\\)) and pi (\\(\\pi\\)) bonds are in one molecule of ethylene (H2C=CH2)?",
    "question_smiles": "C=C",
    "options": [
      {
        "option_id": "A",
        "text": "5 \\(\\sigma\\) and 1 \\(\\pi\\)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4 \\(\\sigma\\) and 2 \\(\\pi\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "6 \\(\\sigma\\) and 0 \\(\\pi\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5 \\(\\sigma\\) and 2 \\(\\pi\\)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Count the total number of $\\sigma$ and $\\pi$ bonds in ethylene.",
      "process": "Step 1: Count single bonds. There are 4 C-H single bonds, each representing a $\\sigma$ bond.\nStep 2: Identify double bonds. There is 1 C=C double bond, which consists of 1 $\\sigma$ bond and 1 $\\pi$ bond.\nStep 3: Sum them up: $\\sigma$ bonds = 4 + 1 = 5. $\\pi$ bonds = 1.",
      "result": "Ethylene contains 5 $\\sigma$ and 1 $\\pi$ bonds."
    }
  },
  {
    "question_id": "ch1_q17_sigma_pi_acetylene",
    "topic": "Sigma & Pi Bonding",
    "difficulty_level": "Easy",
    "question_text": "How many sigma (\\(\\sigma\\)) and pi (\\(\\pi\\)) bonds are present in one molecule of acetylene (HC#CH)?",
    "question_smiles": "C#C",
    "options": [
      {
        "option_id": "A",
        "text": "3 \\(\\sigma\\) and 2 \\(\\pi\\)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2 \\(\\sigma\\) and 3 \\(\\pi\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4 \\(\\sigma\\) and 1 \\(\\pi\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3 \\(\\sigma\\) and 1 \\(\\pi\\)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify bond counts in acetylene.",
      "process": "Step 1: There are 2 C-H single bonds (2 $\\sigma$).\nStep 2: There is 1 C#C triple bond (1 $\\sigma$ + 2 $\\pi$).\nStep 3: Total: 3 $\\sigma$ and 2 $\\pi$ bonds.",
      "result": "Acetylene contains 3 $\\sigma$ and 2 $\\pi$ bonds."
    }
  },
  {
    "question_id": "ch1_q18_sigma_pi_acrylonitrile",
    "topic": "Sigma & Pi Bonding",
    "difficulty_level": "Medium",
    "question_text": "How many sigma (\\(\\sigma\\)) and pi (\\(\\pi\\)) bonds are present in acrylonitrile (H2C=CH-C#N)?",
    "question_smiles": "C=CC#N",
    "options": [
      {
        "option_id": "A",
        "text": "6 \\(\\sigma\\) and 3 \\(\\pi\\)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "6 \\(\\sigma\\) and 2 \\(\\pi\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5 \\(\\sigma\\) and 4 \\(\\pi\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "7 \\(\\sigma\\) and 3 \\(\\pi\\)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Count bonds in a conjugated nitrile.",
      "process": "Step 1: Count single bonds first. C-H bonds = 3. C-C single bond = 1. Total single bonds = 4 (4 $\\sigma$).\nStep 2: Add double bond components: C=C double bond (1 $\\sigma$ + 1 $\\pi$).\nStep 3: Add triple bond components: C#N triple bond (1 $\\sigma$ + 2 $\\pi$).\nStep 4: Sum: $\\sigma$ = 4 + 1 + 1 = 6. $\\pi$ = 1 + 2 = 3.",
      "result": "Acrylonitrile contains 6 $\\sigma$ and 3 $\\pi$ bonds."
    }
  },
  {
    "question_id": "ch1_q19_allene_pi_overlap",
    "topic": "Sigma & Pi Bonding",
    "difficulty_level": "Hard",
    "question_text": "Which orbitals overlap to form the two pi (\\(\\pi\\)) bonds in allene (H2C=C=CH2)?",
    "question_smiles": "C=C=C",
    "options": [
      {
        "option_id": "A",
        "text": "The central carbon uses orthogonal \\(2p_y\\) and \\(2p_z\\) orbitals to overlap with terminal carbon \\(2p\\) orbitals.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The central carbon uses hybrid \\(sp^2\\) orbitals to form the \\(\\pi\\) bonds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The terminal carbons overlap their \\(sp^2\\) orbitals directly with each other.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The \\(\\pi\\) bonds are formed by \\(sp\\)-\\(sp\\) overlap.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Explain the orbital orbital overlap structure that leads to adjacent double bonds in allene.",
      "process": "Step 1: The central carbon C2 is $sp$ hybridized, leaving two unhybridized $p$ orbitals ($p_y$ and $p_z$) which are perpendicular (orthogonal) to each other.\nStep 2: One terminal carbon (C1) is in a plane that allows its $p_y$ orbital to overlap with C2's $p_y$ orbital, forming the first $\\pi$ bond.\nStep 3: The other terminal carbon (C3) must align its $p_z$ orbital with C2's $p_z$ orbital, forming the second $\\pi$ bond. This forces the two terminal $CH_2$ groups to be perpendicular to each other.",
      "result": "The central carbon uses orthogonal $2p_y$ and $2p_z$ orbitals to overlap with terminal $p$ orbitals."
    }
  },
  {
    "question_id": "ch1_q20_orbital_overlap_single",
    "topic": "Sigma & Pi Bonding",
    "difficulty_level": "Medium",
    "question_text": "What type of orbital overlap describes the C-C single bond in propene (CH3-CH=CH2)?",
    "question_smiles": "CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "\\(sp^3\\)-\\(sp^2\\)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "\\(sp^3\\)-\\(sp^3\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "\\(sp^2\\)-\\(sp^2\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "\\(sp^3\\)-\\(p\\)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify the hybridization of the two carbons forming the C-C single bond in propene.",
      "process": "Step 1: Identify the methyl carbon (C3), which is bonded to 3 hydrogens and C2. It is $sp^3$ hybridized.\nStep 2: Identify the alkene carbon (C2), which is bonded to C1, C3, and H. It is $sp^2$ hybridized.\nStep 3: The single bond connecting C2 and C3 is formed by the head-on overlap of an $sp^3$ orbital from C3 and an $sp^2$ orbital from C2.",
      "result": "The overlap is $sp^3$-$sp^2$."
    }
  },
  {
    "question_id": "ch1_q21_bond_strength_order",
    "topic": "Bond Properties",
    "difficulty_level": "Medium",
    "question_text": "Which of the following correctly orders the carbon-carbon bonds in terms of increasing bond dissociation energy (weakest first)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Ethane < Ethylene < Acetylene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetylene < Ethylene < Ethane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethane < Acetylene < Ethylene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethylene < Ethane < Acetylene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Compare C-C bond strengths across single, double, and triple bonds.",
      "process": "Step 1: A single bond (ethane, C-C) consists of one $\\sigma$ bond. It is the easiest to break.\nStep 2: A double bond (ethylene, C=C) contains a $\\sigma$ and a $\\pi$ bond, requiring more energy to break.\nStep 3: A triple bond (acetylene, C#C) contains a $\\sigma$ and two $\\pi$ bonds, requiring the highest energy to break.",
      "result": "The order of increasing bond dissociation energy is Ethane < Ethylene < Acetylene."
    }
  },
  {
    "question_id": "ch1_q22_bond_length_order",
    "topic": "Bond Properties",
    "difficulty_level": "Medium",
    "question_text": "Which of the following correctly orders the carbon-carbon bonds in terms of increasing bond length (shortest first)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Acetylene < Ethylene < Ethane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethane < Ethylene < Acetylene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethylene < Acetylene < Ethane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acetylene < Ethane < Ethylene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Compare bond lengths for single, double, and triple C-C bonds.",
      "process": "Step 1: Triple bonds pull atoms closest together due to sharing of six electrons (shortest).\nStep 2: Double bonds are intermediate.\nStep 3: Single bonds share only two electrons and are the longest.",
      "result": "The order of increasing length is Acetylene < Ethylene < Ethane."
    }
  },
  {
    "question_id": "ch1_q23_hybrid_character_length",
    "topic": "Bond Properties",
    "difficulty_level": "Hard",
    "question_text": "Why is the C-H bond in acetylene (HC#CH) shorter and stronger than the C-H bond in ethane (CH3CH3)?",
    "question_smiles": "C#C",
    "options": [
      {
        "option_id": "A",
        "text": "The carbon in acetylene is \\(sp\\) hybridized, which has more \\(s\\) character (50%), holding electrons closer to the nucleus.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetylene has a smaller steric number on carbon, reducing steric hindrance with hydrogen.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethane's carbon has a higher electronegativity, pushing hydrogen further away.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The hydrogen in acetylene is positively charged.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Explain how hybridization affects C-H bond length and strength.",
      "process": "Step 1: Carbon in acetylene is $sp$ hybridized (50% $s$-character). Carbon in ethane is $sp^3$ hybridized (25% $s$-character).\nStep 2: $s$ orbitals are closer to the nucleus than $p$ orbitals. Higher $s$-character means valence electrons are held closer to the carbon nucleus.\nStep 3: This results in a shorter, tighter, and stronger covalent C-H bond in acetylene compared to ethane.",
      "result": "The correct choice is A."
    }
  },
  {
    "question_id": "ch1_q24_pi_bond_nature",
    "topic": "Sigma & Pi Bonding",
    "difficulty_level": "Medium",
    "question_text": "Which of the following statements best describes a pi (\\(\\pi\\)) bond?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "It is formed by the side-to-side overlap of parallel \\(p\\) orbitals, with electron density above and below the internuclear axis.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It is formed by head-on overlap of hybrid orbitals directly along the internuclear axis.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It is stronger than a sigma bond because of greater orbital overlap.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It allows free rotation of the bonded atoms.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Review the definition and properties of a $\\pi$ bond.",
      "process": "Step 1: Check how a $\\pi$ bond is formed: parallel side-to-side overlap of unhybridized $p$ orbitals.\nStep 2: Identify where electron density is located: above and below the line connecting the nuclei (internuclear axis).\nStep 3: Compare with $\\sigma$ bonds: $\\pi$ bonds are weaker due to less effective side-to-side overlap and restrict rotation.",
      "result": "The correct definition is A."
    }
  },
  {
    "question_id": "ch1_q25_homo_lumo_ethylene",
    "topic": "Molecular Orbital Theory",
    "difficulty_level": "Hard",
    "question_text": "In the molecular orbital description of the pi (\\(\\pi\\)) system of ethylene, what is the nature of the HOMO (Highest Occupied Molecular Orbital) in the ground state?",
    "question_smiles": "C=C",
    "options": [
      {
        "option_id": "A",
        "text": "A bonding \\(\\pi\\) orbital with zero vertical nodes between the carbons.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "An antibonding \\(\\pi^*\\) orbital with one vertical node.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A non-bonding orbital centered on one carbon.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A sigma bonding orbital.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Evaluate the MO diagram of ethylene.",
      "process": "Step 1: Two $p$ orbitals combine to form two $\\pi$ MOs: $\\psi_1$ (bonding, lower energy) and $\\psi_2^*$ (antibonding, higher energy).\nStep 2: Ethylene has two $\\pi$ electrons. In the ground state, both reside in $\\psi_1$.\nStep 3: Therefore, $\\psi_1$ is the HOMO. It has constructive side-to-side overlap with zero nodes between the carbon nuclei.",
      "result": "The HOMO is the bonding $\\pi$ orbital ($\\psi_1$) with zero vertical nodes."
    }
  },
  {
    "question_id": "ch1_q26_formal_charge_ammonium",
    "topic": "Formal Charges & Lewis Structures",
    "difficulty_level": "Easy",
    "question_text": "What is the formal charge on the nitrogen atom in the ammonium ion (NH4+)?",
    "question_smiles": "[NH4+]",
    "options": [
      {
        "option_id": "A",
        "text": "+1",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "0",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "-1",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "+2",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Calculate the formal charge on nitrogen in $NH_4^+$.",
      "process": "Step 1: Formal charge formula: $FC = (valence \\ e^-) - (nonbonding \\ e^-) - 0.5 * (bonding \\ e^-)$.\nStep 2: Nitrogen has 5 valence electrons. In $NH_4^+$, it has 0 nonbonding electrons (no lone pairs) and 8 bonding electrons (4 single bonds).\nStep 3: Calculate: $5 - 0 - 4 = +1$.",
      "result": "The formal charge is +1."
    }
  },
  {
    "question_id": "ch1_q27_formal_charge_hydronium",
    "topic": "Formal Charges & Lewis Structures",
    "difficulty_level": "Easy",
    "question_text": "What is the formal charge on the oxygen atom in the hydronium ion (H3O+)?",
    "question_smiles": "[OH3+]",
    "options": [
      {
        "option_id": "A",
        "text": "+1",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "0",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "+2",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "-1",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determine oxygen's formal charge in $H_3O^+$.",
      "process": "Step 1: Oxygen has 6 valence electrons.\nStep 2: In $H_3O^+$, oxygen has 1 lone pair (2 nonbonding $e^-$) and 3 single bonds (6 bonding $e^-$).\nStep 3: Calculate: $6 - 2 - 3 = +1$.",
      "result": "The formal charge is +1."
    }
  },
  {
    "question_id": "ch1_q28_formal_charge_nitromethane_N",
    "topic": "Formal Charges & Lewis Structures",
    "difficulty_level": "Medium",
    "question_text": "What is the formal charge on the nitrogen atom in nitromethane (CH3NO2)?",
    "question_smiles": "C[N+](=O)[O-]",
    "options": [
      {
        "option_id": "A",
        "text": "+1",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "0",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "-1",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "+2",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyze formal charges in nitromethane ($CH_3NO_2$).",
      "process": "Step 1: Draw the Lewis structure of nitromethane. Nitrogen forms 4 bonds (one single bond to methyl C, one single bond to a negative oxygen, and one double bond to a neutral oxygen). It has 0 lone pairs.\nStep 2: Nitrogen valence = 5.\nStep 3: Calculate: $5 - 0 - 4 = +1$.",
      "result": "The nitrogen carries a +1 formal charge."
    }
  },
  {
    "question_id": "ch1_q29_formal_charge_nitromethane_O",
    "topic": "Formal Charges & Lewis Structures",
    "difficulty_level": "Medium",
    "question_text": "In the major resonance contributor of nitromethane (CH3NO2), what is the formal charge on the oxygen atom that is single-bonded to nitrogen?",
    "question_smiles": "C[N+](=O)[O-]",
    "options": [
      {
        "option_id": "A",
        "text": "-1",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "0",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "+1",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "-2",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Find the formal charge on the single-bonded oxygen in a nitro group.",
      "process": "Step 1: Oxygen valence = 6.\nStep 2: The single-bonded oxygen has 3 lone pairs (6 nonbonding electrons) and 1 single bond (2 bonding electrons).\nStep 3: Calculate: $6 - 6 - 1 = -1$.",
      "result": "The single-bonded oxygen carries a -1 formal charge."
    }
  },
  {
    "question_id": "ch1_q30_formal_charge_carbocation",
    "topic": "Formal Charges & Lewis Structures",
    "difficulty_level": "Easy",
    "question_text": "What is the formal charge on the central carbon in a methyl carbocation (CH3+)?",
    "question_smiles": "[CH3+]",
    "options": [
      {
        "option_id": "A",
        "text": "+1",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "0",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "-1",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "+2",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determine carbon's formal charge in a carbocation.",
      "process": "Step 1: Carbon valence = 4.\nStep 2: In a carbocation ($CH_3^+$), carbon has 0 lone pairs and 3 single bonds (6 bonding electrons).\nStep 3: Calculate: $4 - 0 - 3 = +1$.",
      "result": "The central carbon has a formal charge of +1."
    }
  },
  {
    "question_id": "ch1_q31_formal_charge_carbanion",
    "topic": "Formal Charges & Lewis Structures",
    "difficulty_level": "Easy",
    "question_text": "What is the formal charge on the central carbon in a methyl carbanion (CH3:-)?",
    "question_smiles": "[CH3-]",
    "options": [
      {
        "option_id": "A",
        "text": "-1",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "0",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "+1",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "-2",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determine carbon's formal charge in a carbanion.",
      "process": "Step 1: Carbon valence = 4.\nStep 2: In a carbanion ($CH_3^-$), carbon has 1 lone pair (2 nonbonding electrons) and 3 single bonds (6 bonding electrons).\nStep 3: Calculate: $4 - 2 - 3 = -1$.",
      "result": "The carbon atom has a formal charge of -1."
    }
  },
  {
    "question_id": "ch1_q32_formal_charge_radical",
    "topic": "Formal Charges & Lewis Structures",
    "difficulty_level": "Medium",
    "question_text": "What is the formal charge on the central carbon in a methyl radical (CH3.)?",
    "question_smiles": "[CH3]",
    "options": [
      {
        "option_id": "A",
        "text": "0 (neutral radical species)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "+1",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "-1",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "+0.5",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyze formal charges in radicals.",
      "process": "Step 1: Carbon valence = 4.\nStep 2: In a methyl radical ($CH_3^\\bullet$), carbon has 1 unpaired electron (1 nonbonding electron) and 3 single bonds (6 bonding electrons).\nStep 3: Calculate: $4 - 1 - 3 = 0$.",
      "result": "The carbon has a formal charge of 0."
    }
  },
  {
    "question_id": "ch1_q33_formal_charge_diazomethane",
    "topic": "Formal Charges & Lewis Structures",
    "difficulty_level": "Hard",
    "question_text": "In the standard Lewis representation of diazomethane (H2C=N+=N-), what are the formal charges on the carbon, central nitrogen, and terminal nitrogen, respectively?",
    "question_smiles": "C=[N+]=[N-]",
    "options": [
      {
        "option_id": "A",
        "text": "0, +1, -1",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "-1, +1, 0",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "0, 0, 0",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "-1, +2, -1",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Find formal charges in the cumulene-like resonance contributor of diazomethane ($CH_2N_2$).",
      "process": "Step 1: Carbon has 2 bonds to hydrogen and double-bonded to nitrogen (4 total bonds, 0 lone pairs). $FC = 4 - 0 - 4 = 0$.\nStep 2: Central nitrogen has double bonds to carbon and terminal nitrogen (4 total bonds, 0 lone pairs). $FC = 5 - 0 - 4 = +1$.\nStep 3: Terminal nitrogen has a double bond to central nitrogen and 2 lone pairs (4 nonbonding electrons). $FC = 5 - 4 - 2 = -1$.",
      "result": "The formal charges are 0, +1, and -1, respectively."
    }
  },
  {
    "question_id": "ch1_q34_formal_charge_co",
    "topic": "Formal Charges & Lewis Structures",
    "difficulty_level": "Hard",
    "question_text": "What are the formal charges on carbon and oxygen in carbon monoxide (:C#O:)?",
    "question_smiles": "[C-]#[O+]",
    "options": [
      {
        "option_id": "A",
        "text": "-1 on Carbon, +1 on Oxygen",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "0 on Carbon, 0 on Oxygen",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "+1 on Carbon, -1 on Oxygen",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "-2 on Carbon, +2 on Oxygen",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Calculate formal charges for the stable Lewis structure of carbon monoxide.",
      "process": "Step 1: The stable octet structure is $:C\\equiv O:$.\nStep 2: Carbon has 1 lone pair (2 nonbonding) and a triple bond (3 bonding). Valence = 4. $FC = 4 - 2 - 3 = -1$.\nStep 3: Oxygen has 1 lone pair (2 nonbonding) and a triple bond (3 bonding). Valence = 6. $FC = 6 - 2 - 3 = +1$.",
      "result": "Carbon is -1 and oxygen is +1."
    }
  },
  {
    "question_id": "ch1_q35_formal_charge_boron",
    "topic": "Formal Charges & Lewis Structures",
    "difficulty_level": "Medium",
    "question_text": "What is the formal charge on the boron atom in sodium borohydride (NaBH4)?",
    "question_smiles": "[BH4-]",
    "options": [
      {
        "option_id": "A",
        "text": "-1",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "+1",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "0",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "-3",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Find the formal charge on boron in a tetrahydroborate anion.",
      "process": "Step 1: Boron has 3 valence electrons.\nStep 2: In $BH_4^-$, boron is bonded to 4 hydrogens (8 bonding electrons) and has 0 lone pairs.\nStep 3: Calculate: $3 - 0 - 4 = -1$.",
      "result": "The boron carries a -1 formal charge."
    }
  },
  {
    "question_id": "ch1_q36_resonance_rule",
    "topic": "Resonance Theory",
    "difficulty_level": "Medium",
    "question_text": "Which of the following statements is a fundamental rule of drawing valid resonance structures?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Only pi (\\(\\pi\\)) electrons and lone pairs may move; sigma (\\(\\sigma\\)) bonds must remain intact.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Atoms can be moved to maximize bond stability.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The number of unpaired electrons can change between resonance structures.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Second-row elements can expand their octet to fit additional double bonds.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Review the rules of resonance representation.",
      "process": "Step 1: Resonance structures represent different layouts of the same molecule. The nuclear scaffold (positions of nuclei and $\\sigma$ bonds) must not change.\nStep 2: This means only non-bonding valence electrons (lone pairs) and $\\pi$ bonding electrons can be repositioned.\nStep 3: Total net charge and number of unpaired electrons must also remain constant.",
      "result": "Only $\\pi$ electrons and lone pairs can move."
    }
  },
  {
    "question_id": "ch1_q37_resonance_stability",
    "topic": "Resonance Theory",
    "difficulty_level": "Hard",
    "question_text": "Which resonance structure is the major contributor to the hybrid of the conjugate base of acetone?",
    "question_smiles": "CC(=O)[CH2-]",
    "options": [
      {
        "option_id": "A",
        "text": "The enolate structure where the negative charge resides on oxygen: CH3-C(O-)=CH2",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The carbanion structure where the negative charge resides on carbon: CH3-CO-CH2-",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "They contribute equally because they are identical.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A carbocation contributor with separated charges.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determine the relative stability of resonance contributors for an enolate ion.",
      "process": "Step 1: Compare the electronegativity of carbon and oxygen. Oxygen (3.5) is more electronegative than carbon (2.5).\nStep 2: Structures placing negative formal charges on more electronegative atoms are more stable and contribute more to the overall resonance hybrid.\nStep 3: Therefore, the enolate structure ($CH_3-C(O^-)=CH_2$) is more stable than the carbanion ($CH_3-CO-CH_2^-$).",
      "result": "The oxygen-centered anion is the major contributor."
    }
  },
  {
    "question_id": "ch1_q38_resonance_non_valid",
    "topic": "Resonance Theory",
    "difficulty_level": "Medium",
    "question_text": "Why is a structure with five bonds to carbon (such as a pentavalent carbon) an invalid resonance contributor?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Carbon is a second-row element and has a maximum of four valence orbitals, restricting it to 8 valence electrons.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Carbon cannot form sigma bonds with hydrogen in resonance structures.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Pentavalent carbons are highly positive.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It violates Hund's rule of spin conservation.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand the octet rule limitation for second-row elements.",
      "process": "Step 1: Carbon is in the second row of the periodic table, possessing only $2s$ and three $2p$ valence orbitals (4 total orbitals).\nStep 2: Each orbital can hold up to 2 electrons, limiting carbon to a maximum of 8 valence electrons (an octet).\nStep 3: Five covalent bonds would require 10 valence electrons, which carbon cannot accommodate since it lacks low-energy $d$ orbitals.",
      "result": "The correct choice is A."
    }
  },
  {
    "question_id": "ch1_q39_electronegativity_polar",
    "topic": "Bond Properties",
    "difficulty_level": "Easy",
    "question_text": "Which of the following bonds is the most polar covalent bond?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "C-O",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "C-N",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "C-C",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "C-H",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Compare polarities based on electronegativity values ($C=2.5, H=2.1, N=3.0, O=3.5$).",
      "process": "Step 1: Calculate electronegativity difference (\\(\\Delta EN\\)) for each bond.\nStep 2: C-C = 0. C-H = 0.4. C-N = 0.5. C-O = 1.0.\nStep 3: The C-O bond has the largest difference in electronegativity, making it the most polar covalent bond.",
      "result": "The C-O bond is the most polar."
    }
  },
  {
    "question_id": "ch1_q40_dipole_moment",
    "topic": "Bond Properties",
    "difficulty_level": "Medium",
    "question_text": "Which of the following molecules has a net dipole moment of zero?",
    "question_smiles": "ClC(Cl)(Cl)Cl",
    "options": [
      {
        "option_id": "A",
        "text": "Carbon tetrachloride (CCl4)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Dichloromethane (CH2Cl2)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Chloroform (CHCl3)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Chloromethane (CH3Cl)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify how molecular symmetry affects net molecular dipole moments.",
      "process": "Step 1: Each C-Cl bond is polar due to the electronegativity difference between carbon (2.5) and chlorine (3.0).\nStep 2: In carbon tetrachloride ($CCl_4$), the four C-Cl polar bonds are arranged symmetrically in a tetrahedral geometry.\nStep 3: Because of this perfect tetrahedral symmetry, the four individual bond dipole vectors cancel each other out completely, resulting in a net dipole moment of zero.",
      "result": "Carbon tetrachloride has a net dipole moment of zero."
    }
  },
  {
    "question_id": "ch1_q41_carbon_dioxide_dipole",
    "topic": "Bond Properties",
    "difficulty_level": "Medium",
    "question_text": "Why does carbon dioxide (CO2) have a net dipole moment of zero despite having highly polar C=O bonds?",
    "question_smiles": "O=C=O",
    "options": [
      {
        "option_id": "A",
        "text": "The molecule is linear, and the two polar C=O bond dipoles point in opposite directions, canceling each other out.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Carbon and oxygen have identical electronegativities.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The bond angles are tetrahedral, leading to cancellation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CO2 forms ionic pairs which lack molecular dipoles.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Explain the zero net dipole in carbon dioxide.",
      "process": "Step 1: Carbon dioxide ($O=C=O$) contains a carbon double-bonded to two oxygens.\nStep 2: The hybridization of carbon is $sp$, making the geometry linear ($180^\\circ$ angle).\nStep 3: The two dipole vectors of the C=O bonds point in exact opposite directions along the linear axis, resulting in complete cancellation.",
      "result": "Linear geometry leads to cancellation of the dipoles."
    }
  },
  {
    "question_id": "ch1_q42_formal_charge_oxygen_radical",
    "topic": "Formal Charges & Lewis Structures",
    "difficulty_level": "Medium",
    "question_text": "What is the formal charge on the oxygen atom in the hydroxyl radical (.OH)?",
    "question_smiles": "[OH]",
    "options": [
      {
        "option_id": "A",
        "text": "0",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "-1",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "+1",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "-2",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Calculate the formal charge on oxygen in the hydroxyl radical.",
      "process": "Step 1: Oxygen valence = 6.\nStep 2: In a hydroxyl radical, oxygen has 1 single bond to hydrogen (2 bonding electrons) and 5 non-bonding electrons (2 lone pairs and 1 unpaired electron).\nStep 3: Calculate: $6 - 5 - 1 = 0$.",
      "result": "The oxygen carries a formal charge of 0."
    }
  },
  {
    "question_id": "ch1_q43_mo_antibonding",
    "topic": "Molecular Orbital Theory",
    "difficulty_level": "Medium",
    "question_text": "Which of the following is true regarding an antibonding molecular orbital?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "It is higher in energy than the starting atomic orbitals and contains a node between the nuclei.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It is lower in energy than the starting atomic orbitals.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It is formed by constructive interference of wave functions.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It can never be occupied by electrons.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Explain the concept of antibonding molecular orbitals.",
      "process": "Step 1: Antibonding orbitals are formed by destructive interference (subtraction) of atomic wave functions.\nStep 2: This destructive interference leads to a nodal plane (zero electron density) between the nuclei.\nStep 3: Electrons placed here experience repulsion between the nuclei, making the orbital less stable (higher in energy) than the initial isolated atomic orbitals.",
      "result": "An antibonding orbital is higher in energy and contains a node."
    }
  },
  {
    "question_id": "ch1_q44_hybrid_oxygen_water",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Easy",
    "question_text": "What is the hybridization of the oxygen atom in water (H2O)?",
    "question_smiles": "O",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^3$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$sp^2$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$sp$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Unhybridized",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determine oxygen's hybridization in water.",
      "process": "Step 1: Oxygen forms 2 single bonds to hydrogens and has 2 lone pairs.\nStep 2: Steric number = 2 (bonds) + 2 (lone pairs) = 4.\nStep 3: Steric number of 4 corresponds to $sp^3$ hybridization.",
      "result": "The oxygen in water is $sp^3$ hybridized."
    }
  },
  {
    "question_id": "ch1_q45_skeletal_translation",
    "topic": "Drawing Chemical Structures",
    "difficulty_level": "Easy",
    "question_text": "What is the molecular formula of benzene (skeletal structure: a six-membered ring with three alternating double bonds)?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "C6H6",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "C6H12",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "C6H8",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "C6H10",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Translate the skeletal representation of benzene to its molecular formula.",
      "process": "Step 1: Benzene consists of 6 carbon atoms in a ring.\nStep 2: Each carbon forms 3 bonds within the ring (one double bond and one single bond). Therefore, each carbon requires exactly 1 bond to a hydrogen atom to satisfy its valency.\nStep 3: This results in 6 carbons and 6 hydrogens: $C_6H_6$.",
      "result": "The formula of benzene is $C_6H_6$."
    }
  },
  {
    "question_id": "ch1_q46_skeletal_cyclohexane",
    "topic": "Drawing Chemical Structures",
    "difficulty_level": "Easy",
    "question_text": "What is the molecular formula of cyclohexane?",
    "question_smiles": "C1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "C6H12",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "C6H6",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "C6H14",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "C5H10",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determine cyclohexane's molecular formula.",
      "process": "Step 1: Cyclohexane is a saturated cyclic alkane with 6 carbons.\nStep 2: Each carbon has 2 bonds to adjacent carbons in the ring, requiring 2 bonds to hydrogens to reach tetravalency.\nStep 3: Total hydrogens = 6 carbons * 2 hydrogens/carbon = 12 hydrogens. Molecular formula = $C_6H_{12}$.",
      "result": "The molecular formula is $C_6H_{12}$."
    }
  },
  {
    "question_id": "ch1_q47_skeletal_diethyl_ether",
    "topic": "Drawing Chemical Structures",
    "difficulty_level": "Easy",
    "question_text": "What is the molecular formula of diethyl ether?",
    "question_smiles": "CCOCC",
    "options": [
      {
        "option_id": "A",
        "text": "C4H10O",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "C4H8O",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "C4H10O2",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "C3H8O",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Translate diethyl ether to its molecular formula.",
      "process": "Step 1: Diethyl ether ($CH_3-CH_2-O-CH_2-CH_3$) contains two ethyl groups attached to an oxygen.\nStep 2: Total carbons = 4. The carbon chain is fully saturated.\nStep 3: Count hydrogens: $(3 + 2) * 2 = 10$. Total formula = $C_4H_{10}O$.",
      "result": "The molecular formula is $C_4H_{10}O$."
    }
  },
  {
    "question_id": "ch1_q48_sp2_nitrogen_pyridine",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Hard",
    "question_text": "In pyridine (C5H5N), in which orbital does the nitrogen lone pair reside?",
    "question_smiles": "c1ccncc1",
    "options": [
      {
        "option_id": "A",
        "text": "An \\(sp^2\\) hybrid orbital (in the plane of the ring)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "An unhybridized \\(2p\\) orbital (perpendicular to the ring)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "An \\(sp^3\\) hybrid orbital",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A \\(1s\\) core orbital",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Examine the orbital alignment and aromaticity of pyridine.",
      "process": "Step 1: Nitrogen in pyridine is part of a conjugated aromatic system. It is bonded to two carbons via one double and one single bond. Steric number = 3 ($sp^2$).\nStep 2: The nitrogen uses its unhybridized $2p$ orbital to contribute one electron to the $\\pi$ system, maintaining aromaticity.\nStep 3: Consequently, the lone pair must occupy one of the hybrid $sp^2$ orbitals, which lies in the plane of the ring, perpendicular to the aromatic $\\pi$ cloud.",
      "result": "The lone pair resides in an $sp^2$ hybrid orbital."
    }
  },
  {
    "question_id": "ch1_q49_sp2_nitrogen_pyrrole",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Hard",
    "question_text": "In pyrrole (C4H5N, a five-membered heterocyclic ring), in which orbital does the nitrogen lone pair reside?",
    "question_smiles": "c1cc[nH]c1",
    "options": [
      {
        "option_id": "A",
        "text": "An unhybridized \\(2p\\) orbital (contributing to the aromatic pi cloud)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "An \\(sp^2\\) hybrid orbital (in the plane of the ring)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "An \\(sp^3\\) hybrid orbital",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A hybrid \\(sp\\) orbital",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Compare the lone pair localization in pyrrole vs. pyridine.",
      "process": "Step 1: Pyrrole contains a nitrogen bonded to 2 carbons and 1 hydrogen via single bonds. To make the 5-membered ring aromatic, we need 6 $\\pi$ electrons.\nStep 2: Each of the 4 carbons provides 1 $\\pi$ electron. Nitrogen must contribute its lone pair (2 electrons) to the aromatic cloud.\nStep 3: To do this, the nitrogen lone pair must reside in an unhybridized $p$ orbital perpendicular to the ring. Nitrogen adopts $sp^2$ hybridization.",
      "result": "The lone pair resides in an unhybridized $2p$ orbital."
    }
  },
  {
    "question_id": "ch1_q50_huckel_rule_intro",
    "topic": "Molecular Orbital Theory",
    "difficulty_level": "Medium",
    "question_text": "What is the key orbital requirement for a planar, monocyclic ring to be aromatic according to Huckel's rule?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "It must have a continuous, overlapping ring of unhybridized \\(p\\) orbitals containing \\(4n + 2\\) pi electrons.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It must have exactly 6 carbons in the ring.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It must have alternating single and double bonds only.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It must consist entirely of \\(sp^3\\) hybridized carbons.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Introduce the orbital criteria for aromaticity.",
      "process": "Step 1: Check the electronic rules for aromaticity. The system must be cyclic, planar, and fully conjugated (continuous ring of $p$ orbitals).\nStep 2: The number of $\\pi$ electrons in the closed loop of overlapping $p$ orbitals must satisfy Huckel's formula: $4n+2$ where n is an integer (2, 6, 10, 14, etc.).\nStep 3: This allows for complete filling of all bonding molecular orbitals in the $\\pi$ system.",
      "result": "It must have a continuous ring of overlapping $p$ orbitals containing $4n+2$ $\\pi$ electrons."
    }
  }
];
