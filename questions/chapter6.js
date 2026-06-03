// McMurry Chapter 6 questions
const CHAPTER_6_QUESTIONS = [
  {
    "question_id": "ch6_q1_pericyclic_mechanism",
    "topic": "Reaction Mechanisms",
    "difficulty_level": "Easy",
    "question_text": "The thermal [4+2] cycloaddition (Diels-Alder reaction) of 1,3-butadiene with ethene to form cyclohexene occurs in a single concerted step with no intermediates. How is this type of reaction mechanism classified?",
    "question_smiles": "C=CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "Polar reaction",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Radical reaction",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Pericyclic reaction",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Ligand exchange reaction",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the classification of organic reactions based on their mechanism of bond-making and bond-breaking.",
      "process": "Step 1: Identify that the reaction is concerted (occurs in a single step) and involves a cyclic transition state of reorganizing $\\pi$ electrons.\nStep 2: Compare with polar reactions (involving electron pairs moving from nucleophiles to electrophiles), radical reactions (involving unpaired electrons), and ligand exchange reactions (substitution at transition metals).\nStep 3: Conclude that reactions proceeding via a concerted cyclic rearrangement of electrons are pericyclic reactions.",
      "result": "The Diels-Alder reaction is a pericyclic reaction."
    }
  },
  {
    "question_id": "ch6_q2_radical_propagation",
    "topic": "Reaction Mechanisms",
    "difficulty_level": "Medium",
    "question_text": "In the light-initiated chlorination of methane, which of the following represents a propagation step?",
    "question_smiles": "C",
    "options": [
      {
        "option_id": "A",
        "text": "$Cl_2 \\rightarrow 2\\ Cl\\cdot$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "$CH_4 + Cl\\cdot \\rightarrow \\cdot CH_3 + HCl$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "$\\cdot CH_3 + Cl\\cdot \\rightarrow CH_3Cl$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$2\\ \\cdot CH_3 \\rightarrow CH_3CH_3$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the understanding of the steps in a radical chain reaction mechanism.",
      "process": "Step 1: Identify the three phases of radical chain reactions: initiation (produces radicals from non-radicals), propagation (consumes a radical to generate a new radical, maintaining the chain), and termination (combines two radicals to form a stable non-radical molecule).\nStep 2: Analyze Option A: initiation step. Analyze Options C and D: termination steps.\nStep 3: Analyze Option B: reactant radical ($Cl\\cdot$) reacts with a non-radical ($CH_4$) to produce a new radical ($\\cdot CH_3$) and a non-radical ($HCl$). This is a propagation step.",
      "result": "The propagation step is $CH_4 + Cl\\cdot \\rightarrow \\cdot CH_3 + HCl$."
    }
  },
  {
    "question_id": "ch6_q3_polar_addition",
    "topic": "Reaction Mechanisms",
    "difficulty_level": "Easy",
    "question_text": "The addition of hydrogen bromide to cyclohexene to form bromocyclohexane involves the attack of the alkene $\\pi$ bond on a proton, forming a carbocation intermediate, followed by bromide attack. What class of mechanism is this?",
    "question_smiles": "C1=CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Polar reaction",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Radical reaction",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Pericyclic reaction",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ligand exchange reaction",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the classification of reactions involving electrophiles and nucleophiles.",
      "process": "Step 1: Identify that the reaction proceeds via the movement of electron pairs from electron-rich species ($\\pi$ bond and bromide ion) to electron-poor species (proton and carbocation).\nStep 2: Recall that mechanisms involving the transfer of electron pairs between electron-rich and electron-poor centers are classified as polar reactions.",
      "result": "This is a polar reaction."
    }
  },
  {
    "question_id": "ch6_q4_ligand_exchange",
    "topic": "Reaction Mechanisms",
    "difficulty_level": "Hard",
    "question_text": "During the catalytic cycle of the Heck reaction, an organopalladium intermediate coordinates to an alkene, which subsequently inserts into the palladium-carbon bond. In a preceding step, the halide ligand on palladium is substituted by a phosphine ligand. What type of mechanism does this ligand substitution represent?",
    "question_smiles": "C=C",
    "options": [
      {
        "option_id": "A",
        "text": "Polar addition",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Pericyclic rearrangement",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ligand exchange",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Homolytic cleavage",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests organometallic mechanism steps, specifically ligand substitution/exchange at transition metal centers.",
      "process": "Step 1: Identify the transition metal complex undergoing reaction.\nStep 2: Recognize that replacing one ligand (halide) bonded to palladium with another ligand (phosphine) is a substitution at the metal center.\nStep 3: Classify this as a ligand exchange reaction, which is distinct from polar organic mechanisms, radical mechanisms, or pericyclic mechanisms.",
      "result": "This represents ligand exchange."
    }
  },
  {
    "question_id": "ch6_q5_arrow_direction",
    "topic": "Curved Arrows",
    "difficulty_level": "Medium",
    "question_text": "When drawing a curved arrow to represent a step in a polar mechanism, which of the following correctly describes the starting and ending points of the arrow?",
    "question_smiles": "CC(=O)C",
    "options": [
      {
        "option_id": "A",
        "text": "The arrow tail starts at an electrophilic atom and the head points to a nucleophilic lone pair.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "The arrow tail starts at an electron-rich site (lone pair or bond) and the head points to an electrophilic atom or bond.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "The arrow tail starts at a positive charge and the head points to a negative charge.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The arrow tail starts at a proton and the head points to a Lewis base.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the fundamental convention of using curved arrows to represent electron-pair movement in polar mechanisms.",
      "process": "Step 1: Recall that curved arrows in polar mechanisms track the movement of electron pairs.\nStep 2: The tail of the arrow must always start at the source of electrons (a lone pair, a $\\sigma$ bond, or a $\\pi$ bond).\nStep 3: The head of the arrow must point to the destination of the electron pair (an electrophilic atom, or a bond being formed/broken).",
      "result": "The tail starts at an electron-rich site and the head points to an electrophilic atom or bond."
    }
  },
  {
    "question_id": "ch6_q6_fishhook_arrows",
    "topic": "Curved Arrows",
    "difficulty_level": "Easy",
    "question_text": "What do single-barbed curved arrows ('fishhook' arrows) represent in organic reaction mechanisms?",
    "question_smiles": "OO",
    "options": [
      {
        "option_id": "A",
        "text": "The movement of a pair of electrons.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "The movement of a single electron.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "The transfer of a hydrogen atom ($H\\cdot$) as a proton ($H^+$).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The change in formal charge of an atom from neutral to positive.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the distinction between single-electron and double-electron curved arrow conventions.",
      "process": "Step 1: Double-barbed arrows represent the movement of an electron pair.\nStep 2: Single-barbed arrows (fishhook arrows) represent the movement of a single electron, which is the standard notation in radical (homolytic) reaction steps.",
      "result": "Single-barbed arrows represent the movement of a single electron."
    }
  },
  {
    "question_id": "ch6_q7_homolytic_vs_heterolytic",
    "topic": "Homolytic vs Heterolytic Cleavage",
    "difficulty_level": "Medium",
    "question_text": "Which statement correctly describes the difference between homolytic and heterolytic bond cleavage?",
    "question_smiles": "CC(C)(C)Cl",
    "options": [
      {
        "option_id": "A",
        "text": "Homolytic cleavage produces ions, whereas heterolytic cleavage produces radicals.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Homolytic cleavage produces radicals, whereas heterolytic cleavage produces ions.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Homolytic cleavage requires energy, whereas heterolytic cleavage releases energy.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Homolytic cleavage occurs only in polar solvents, whereas heterolytic cleavage occurs only in the gas phase.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question compares the two modes of covalent bond cleavage: homolysis and heterolysis.",
      "process": "Step 1: In homolytic cleavage, the bond breaks symmetrically; each fragment receives one of the two bonding electrons, generating neutral radicals.\nStep 2: In heterolytic cleavage, the bond breaks unsymmetrically; one fragment retains both bonding electrons, yielding a cation and an anion.",
      "result": "Homolytic cleavage produces radicals, and heterolytic cleavage produces ions."
    }
  },
  {
    "question_id": "ch6_q8_bde_definition",
    "topic": "Homolytic vs Heterolytic Cleavage",
    "difficulty_level": "Medium",
    "question_text": "Bond dissociation energy (BDE) is specifically defined as the enthalpy change ($\\Delta H^\\circ$) required to cleave a covalent bond by which process?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "Heterolytic cleavage in a polar solvent to yield a carbocation and a halide.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Heterolytic cleavage in the gas phase to yield a carbanion and a proton.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Homolytic cleavage in the gas phase to yield two radicals.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Thermolytic elimination to yield an alkene and a small molecule.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the thermodynamic definition of bond dissociation energy.",
      "process": "Step 1: Recall that BDE is a standard thermodynamic property measured under gas-phase conditions.\nStep 2: The chemical process defined by BDE is the homolytic cleavage of a specific bond: $A-B \\rightarrow A\\cdot + B\\cdot$.\nStep 3: Consequently, BDE values are always positive (endothermic) and refer specifically to gas-phase homolytic cleavage.",
      "result": "It is the energy required for homolytic cleavage in the gas phase to yield two radicals."
    }
  },
  {
    "question_id": "ch6_q9_bde_calculation_simple",
    "topic": "Homolytic vs Heterolytic Cleavage",
    "difficulty_level": "Hard",
    "question_text": "Given the bond dissociation energies: $H-H$ (436 kJ/mol), $Cl-Cl$ (243 kJ/mol), and $H-Cl$ (432 kJ/mol), calculate the reaction enthalpy ($\\Delta H^\\circ$) for the reaction: $H_2 + Cl_2 \\rightarrow 2\\ HCl$.",
    "question_smiles": "ClCl",
    "options": [
      {
        "option_id": "A",
        "text": "$-185\\text{ kJ/mol}$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$+185\\text{ kJ/mol}$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$-370\\text{ kJ/mol}$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$+370\\text{ kJ/mol}$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the calculation of reaction enthalpy using bond dissociation energies.",
      "process": "Step 1: Write down the bonds broken and bonds formed in the reaction.\nStep 2: Bonds broken: 1 mol of $H-H$ (436 kJ/mol) + 1 mol of $Cl-Cl$ (243 kJ/mol) = 679 kJ/mol (endothermic, positive energy input).\nStep 3: Bonds formed: 2 mol of $H-Cl$ (2 $\\times$ 432 = 864 kJ/mol) (exothermic, energy released).\nStep 4: Use the formula: $\\Delta H^\\circ = \\sum \\text{BDE(bonds broken)} - \\sum \\text{BDE(bonds formed)} = 679 - 864 = -185\\text{ kJ/mol}$.",
      "result": "The enthalpy of reaction is $-185\\text{ kJ/mol}$."
    }
  },
  {
    "question_id": "ch6_q10_radical_stability_bde",
    "topic": "Homolytic vs Heterolytic Cleavage",
    "difficulty_level": "Hard",
    "question_text": "Based on carbon-hydrogen bond dissociation energies, which of the following hydrocarbons has the lowest BDE for homolytic cleavage of a C\u2013H bond?",
    "question_smiles": "CC(C)C1=CC=CC=C1",
    "options": [
      {
        "option_id": "A",
        "text": "Ethane ($CH_3-CH_3$)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Propane ($CH_3-CH_2-CH_3$ at C2)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Isobutane ($(CH_3)_3C-H$)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Isopropylbenzene (cumene, $C_6H_5-CH(CH_3)_2$ at the benzylic position)",
        "smiles": "",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "This question relates C\u2013H bond dissociation energy to the stability of the resulting radical intermediate.",
      "process": "Step 1: Recall that the weaker the C\u2013H bond (lower BDE), the more stable the resulting radical.\nStep 2: Compare the radicals formed: primary ethyl radical (from ethane), secondary propyl radical (from propane), tertiary tert-butyl radical (from isobutane), and tertiary benzylic radical (from isopropylbenzene).\nStep 3: The tertiary benzylic radical is exceptionally stable because the unpaired electron is delocalized over the aromatic ring via resonance, in addition to being stabilized by two alkyl groups. Therefore, the benzylic C\u2013H bond of cumene has the lowest BDE.",
      "result": "Isopropylbenzene (cumene) has the lowest C\u2013H BDE at the benzylic position."
    }
  },
  {
    "question_id": "ch6_q11_nucleophile_definition",
    "topic": "Electrophiles vs Nucleophiles",
    "difficulty_level": "Easy",
    "question_text": "Which of the following is the most accurate definition of a nucleophile?",
    "question_smiles": "N",
    "options": [
      {
        "option_id": "A",
        "text": "A Lewis acid that accepts an electron pair to form a bond.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A Lewis base that donates an electron pair to form a bond.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A species with an unpaired electron that attacks positive centers.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "An electron-deficient molecule containing a polarizable double bond.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the definitions of electrophiles and nucleophiles in polar reactions.",
      "process": "Step 1: A nucleophile is an electron-rich species (neutral or negatively charged) containing a reactive lone pair or $\\pi$ bond.\nStep 2: By donating an electron pair, it acts as a Lewis base.\nStep 3: Thus, nucleophiles are defined as electron pair donors (Lewis bases).",
      "result": "A nucleophile is a Lewis base that donates an electron pair."
    }
  },
  {
    "question_id": "ch6_q12_electrophile_definition",
    "topic": "Electrophiles vs Nucleophiles",
    "difficulty_level": "Easy",
    "question_text": "Which of the following is the most accurate definition of an electrophile?",
    "question_smiles": "OB(O)O",
    "options": [
      {
        "option_id": "A",
        "text": "A Lewis acid that accepts an electron pair to form a bond.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A Lewis base that donates an electron pair to form a bond.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A species that donates proton ($H^+$) in a Bronsted acid-base reaction.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "An electron-rich atom that seeks out nuclei.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question defines electrophiles in organic chemistry.",
      "process": "Step 1: Electrophiles ('electron-lovers') are electron-deficient species that have an empty orbital or polar bond.\nStep 2: They react by accepting an electron pair from a nucleophile, which corresponds to the definition of a Lewis acid.",
      "result": "An electrophile is a Lewis acid that accepts an electron pair."
    }
  },
  {
    "question_id": "ch6_q13_nucleophile_id",
    "topic": "Electrophiles vs Nucleophiles",
    "difficulty_level": "Medium",
    "question_text": "Which of the following species is NOT a nucleophile?",
    "question_smiles": "CC(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "$NH_3$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "$CN^-$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$BF_3$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "$CH_3CH_2OH$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the ability to distinguish nucleophiles from electrophiles.",
      "process": "Step 1: Nucleophiles must have a lone pair or $\\pi$ bond to donate. Ammonia ($NH_3$), cyanide ($CN^-$), and ethanol ($CH_3CH_2OH$) all possess reactive lone pairs.\nStep 2: $BF_3$ (boron trifluoride) has a boron atom with only 6 valence electrons and a vacant $p$ orbital. It cannot donate electrons; instead, it is a strong Lewis acid (electrophile).",
      "result": "$BF_3$ is not a nucleophile; it is an electrophile."
    }
  },
  {
    "question_id": "ch6_q14_electrophile_id",
    "topic": "Electrophiles vs Nucleophiles",
    "difficulty_level": "Medium",
    "question_text": "Which of the following species acts as an electrophile in polar organic reactions?",
    "question_smiles": "COS(=O)(=O)C",
    "options": [
      {
        "option_id": "A",
        "text": "$H_2S$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "$CH_3CH_2NH_2$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$CH_3^+$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "$I^-$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question requires identifying electrophilic species.",
      "process": "Step 1: Analyze the electronic structure of each option.\nStep 2: $H_2S$, $CH_3CH_2NH_2$, and $I^-$ all have lone pairs and are electron-rich, making them nucleophiles.\nStep 3: $CH_3^+$ is a carbocation with a vacant $p$ orbital and a positive formal charge, making it a strong electrophile.",
      "result": "$CH_3^+$ is the electrophile."
    }
  },
  {
    "question_id": "ch6_q15_esp_map_polarity",
    "topic": "Electrophiles vs Nucleophiles",
    "difficulty_level": "Medium",
    "question_text": "On an electrostatic potential (ESP) map of methylamine ($CH_3NH_2$), a region of high electron density (colored red) is located near the nitrogen atom. What does this indicate about the reactivity of the nitrogen atom?",
    "question_smiles": "CN",
    "options": [
      {
        "option_id": "A",
        "text": "The nitrogen atom is electrophilic because it has a high electron density.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "The nitrogen atom is nucleophilic because the red color indicates a partial negative charge ($\\delta^-$) and an accessible lone pair.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "The nitrogen atom is a strong radical initiator because it is electron-poor.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The nitrogen atom is chemically inert.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question relates electrostatic potential maps to chemical reactivity (nucleophilicity/electrophilicity).",
      "process": "Step 1: In ESP maps, red colors represent negative electrostatic potential (high electron density), and blue colors represent positive potential (low electron density).\nStep 2: The nitrogen atom in methylamine is electronegative and has a lone pair, giving it a partial negative charge ($\\delta^-$), represented in red.\nStep 3: This high electron density makes nitrogen nucleophilic (capable of donating its lone pair).",
      "result": "The nitrogen atom is nucleophilic."
    }
  },
  {
    "question_id": "ch6_q16_gibbs_equation",
    "topic": "Thermodynamics",
    "difficulty_level": "Easy",
    "question_text": "For a reaction at constant pressure and temperature, under what thermodynamic conditions will the reaction ALWAYS be spontaneous ($\\Delta G^\\circ < 0$)?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "Exothermic ($\\Delta H^\\circ < 0$) and order-increasing ($\\Delta S^\\circ < 0$).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Endothermic ($\\Delta H^\\circ > 0$) and disorder-increasing ($\\Delta S^\\circ > 0$).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Exothermic ($\\Delta H^\\circ < 0$) and disorder-increasing ($\\Delta S^\\circ > 0$).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Endothermic ($\\Delta H^\\circ > 0$) and order-increasing ($\\Delta S^\\circ < 0$).",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the signs of enthalpy and entropy on Gibbs free energy spontaneity.",
      "process": "Step 1: Use the equation $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$.\nStep 2: If $\\Delta H^\\circ$ is negative (exothermic) and $\\Delta S^\\circ$ is positive (disorder-increasing), then both terms contribute negatively to $\\Delta G^\\circ$.\nStep 3: Under these conditions, $\\Delta G^\\circ$ is negative at all temperatures, making the reaction always spontaneous.",
      "result": "An exothermic reaction with positive entropy change is always spontaneous."
    }
  },
  {
    "question_id": "ch6_q17_keq_spontaneity",
    "topic": "Chemical Equilibrium",
    "difficulty_level": "Medium",
    "question_text": "If an organic reaction has an equilibrium constant $K_{\\text{eq}} = 0.001$ at 298 K, what are the characteristics of its standard free energy change ($\\Delta G^\\circ$) and the equilibrium mixture?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "$\\Delta G^\\circ < 0$ and the products are favored at equilibrium.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "$\\Delta G^\\circ > 0$ and the reactants are favored at equilibrium.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "$\\Delta G^\\circ = 0$ and the reactants and products are in equal concentrations.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$\\Delta G^\\circ > 0$ and the reaction is extremely fast.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question connects the equilibrium constant ($K_{\\text{eq}}$) to the change in Gibbs free energy ($\\Delta G^\\circ$).",
      "process": "Step 1: Use the equation $\\Delta G^\\circ = -RT \\ln K_{\\text{eq}}$.\nStep 2: Since $K_{\\text{eq}} < 1$ ($K_{\\text{eq}} = 10^{-3}$), $\\ln K_{\\text{eq}}$ is negative, making $\\Delta G^\\circ$ positive.\nStep 3: A positive $\\Delta G^\\circ$ indicates that the reaction is endergonic and favors reactants at equilibrium.",
      "result": "$\\Delta G^\\circ$ is positive and reactants are favored at equilibrium."
    }
  },
  {
    "question_id": "ch6_q18_entropy_factors",
    "topic": "Thermodynamics",
    "difficulty_level": "Medium",
    "question_text": "Which of the following reaction types is expected to have the most positive entropy change ($\\Delta S^\\circ > 0$)?",
    "question_smiles": "CC(C)(C)OC(C)(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "The addition of water to an alkene to form an alcohol.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "The dimerization of two molecules of cyclopentadiene.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The fragmentation of a tertiary alkyl halide into an alkene and a hydrogen halide.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "The ring-closing of a hexenyl radical to form a cyclohexyl radical.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests factors affecting entropy changes in organic reactions.",
      "process": "Step 1: Entropy measures disorder. Reactions that increase the number of independent molecules increase entropy ($\\Delta S^\\circ > 0$).\nStep 2: Addition (A) and dimerization (B) reduce the number of molecules (two molecules become one), so $\\Delta S^\\circ < 0$. Ring closure (D) restricts molecular rotation, reducing degrees of freedom ($\\Delta S^\\circ < 0$).\nStep 3: Fragmentation (C) splits one molecule into two molecules ($R-X \\rightarrow \\text{alkene} + HX$), increasing translational freedom and thus increasing entropy ($\\Delta S^\\circ > 0$).",
      "result": "The fragmentation reaction has the most positive entropy change."
    }
  },
  {
    "question_id": "ch6_q19_deltaH_bde_calculation",
    "topic": "Thermodynamics",
    "difficulty_level": "Hard",
    "question_text": "For the addition of $HBr$ to ethene to form bromoethane ($CH_2=CH_2 + HBr \\rightarrow CH_3CH_2Br$), estimate the enthalpy of the reaction ($\\Delta H^\\circ$) using the following average BDE values: C=C $\\pi$ bond only (240 kJ/mol), H\u2013Br (366 kJ/mol), C\u2013H (410 kJ/mol), C\u2013Br (285 kJ/mol). Note: The carbon-carbon $\\sigma$ bond remains intact; only the $\\pi$ bond is broken.",
    "question_smiles": "C=C",
    "options": [
      {
        "option_id": "A",
        "text": "$-89\\text{ kJ/mol}$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$+89\\text{ kJ/mol}$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$-606\\text{ kJ/mol}$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$+606\\text{ kJ/mol}$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests how to calculate reaction enthalpy using bond dissociation energies for addition reactions.",
      "process": "Step 1: Identify bonds broken and bonds formed.\nStep 2: Bonds broken: C=C $\\pi$ bond (240 kJ/mol) + H\u2013Br bond (366 kJ/mol) = 606 kJ/mol.\nStep 3: Bonds formed: C\u2013H bond (410 kJ/mol) + C\u2013Br bond (285 kJ/mol) = 695 kJ/mol.\nStep 4: Calculate enthalpy: $\\Delta H^\\circ = \\sum \\text{BDE(broken)} - \\sum \\text{BDE(formed)} = 606 - 695 = -89\\text{ kJ/mol}$.",
      "result": "The estimated reaction enthalpy is $-89\\text{ kJ/mol}$."
    }
  },
  {
    "question_id": "ch6_q20_keq_calculation_math",
    "topic": "Chemical Equilibrium",
    "difficulty_level": "Hard",
    "question_text": "Under standard conditions at 298 K, an isomerization reaction $A \\rightleftharpoons B$ has a $\\Delta G^\\circ = -11.4\\text{ kJ/mol}$. What is the approximate equilibrium constant ($K_{\\text{eq}}$) for this reaction? (Use $R = 8.314\\text{ J/(mol}\\cdot\\text{K)}$)",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "10",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "100",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "0.01",
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
      "context": "This question involves using the thermodynamic relation $\\Delta G^\\circ = -RT \\ln K_{\\text{eq}}$ to solve for $K_{\\text{eq}}$.",
      "process": "Step 1: Convert $\\Delta G^\\circ$ to J/mol: $-11400\\text{ J/mol}$.\nStep 2: Rearrange the equation: $\\ln K_{\\text{eq}} = -\\Delta G^\\circ / RT = -(-11400) / (8.314 \\times 298) = 11400 / 2477.57 \\approx 4.60$.\nStep 3: Exponentiate to find $K_{\\text{eq}}$: $K_{\\text{eq}} = e^{4.60} \\approx 100$.",
      "result": "The equilibrium constant is approximately 100."
    }
  },
  {
    "question_id": "ch6_q21_le_chatelier_concentration",
    "topic": "Chemical Equilibrium",
    "difficulty_level": "Easy",
    "question_text": "According to Le Chatelier's principle, what happens to the position of equilibrium for a reaction if a high concentration of reactant is added?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "The equilibrium constant $K_{\\text{eq}}$ increases.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "The reaction shifts toward the products to consume the added reactant.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "The activation energy of the forward reaction decreases.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The reaction shifts toward the reactants to produce more starting materials.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the qualitative application of Le Chatelier's principle.",
      "process": "Step 1: Note that adding reactants does not change the value of $K_{\\text{eq}}$, which is temperature-dependent.\nStep 2: The reaction quotient $Q$ becomes less than $K_{\\text{eq}}$.\nStep 3: To restore equilibrium, the reaction must shift to the right, converting reactants to products.",
      "result": "The reaction shifts toward products."
    }
  },
  {
    "question_id": "ch6_q22_activation_energy_kinetics",
    "topic": "Kinetics",
    "difficulty_level": "Easy",
    "question_text": "Which of the following statements about activation energy ($E_a$) is correct?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "Reactions with high activation energies proceed rapidly because the barrier is high.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "The activation energy is equal to the net free energy change ($\\Delta G^\\circ$) of the reaction.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Activation energy represents the energy required to reach the transition state from the reactants.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Activation energy is negative for exothermic reactions and positive for endothermic reactions.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests basic kinetic terminology regarding the energy barrier.",
      "process": "Step 1: Activation energy ($E_a$) is the energy barrier that must be overcome for reactants to transform into products.\nStep 2: It is always a positive quantity ($E_a > 0$) because it represents climbing an energy hill from reactants to the transition state.",
      "result": "$E_a$ is the energy required to reach the transition state."
    }
  },
  {
    "question_id": "ch6_q23_rate_law_determination",
    "topic": "Kinetics",
    "difficulty_level": "Medium",
    "question_text": "For the nucleophilic substitution reaction: $CH_3Br + OH^- \\rightarrow CH_3OH + Br^-$, the rate law is determined to be $\\text{Rate} = k[CH_3Br][OH^-]$. What is the overall reaction order?",
    "question_smiles": "CBr",
    "options": [
      {
        "option_id": "A",
        "text": "First-order",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Second-order",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Third-order",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Zero-order",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the determination of overall reaction order from a rate law.",
      "process": "Step 1: The rate law is $\\text{Rate} = k[CH_3Br]^1 [OH^-]^1$.\nStep 2: The order with respect to $CH_3Br$ is 1, and with respect to $OH^-$ is 1.\nStep 3: The overall reaction order is the sum of the exponents in the rate law: $1 + 1 = 2$ (second-order).",
      "result": "The reaction is second-order overall."
    }
  },
  {
    "question_id": "ch6_q24_rate_determining_step",
    "topic": "Kinetics",
    "difficulty_level": "Medium",
    "question_text": "In a multi-step reaction mechanism, how is the rate-determining step identified on a reaction coordinate diagram?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "The step that corresponds to the transition state with the lowest absolute energy.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "The step that corresponds to the transition state with the highest energy relative to the starting reactants.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "The step that leads to the most stable intermediate.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The step that is fastest and has the lowest activation energy.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question relates reaction coordinate diagrams to the rate-determining step.",
      "process": "Step 1: The rate-determining step is the bottleneck step of the reaction.\nStep 2: It is characterized by having the highest energy transition state along the path relative to the initial starting materials.\nStep 3: This peak represents the highest activation barrier that must be overcome for the overall reaction to proceed.",
      "result": "It is the step with the transition state of highest energy relative to the reactants."
    }
  },
  {
    "question_id": "ch6_q25_arrhenius_kinetics",
    "topic": "Kinetics",
    "difficulty_level": "Medium",
    "question_text": "According to the Arrhenius equation ($k = A e^{-E_a/RT}$), what happens to the rate constant ($k$) if the activation energy ($E_a$) is decreased?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "The rate constant $k$ decreases exponentially.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "The rate constant $k$ increases exponentially.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "The rate constant $k$ remains constant because only temperature changes $k$.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The rate constant $k$ decreases linearly.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the mathematical relationship between activation energy and the rate constant.",
      "process": "Step 1: Look at the Arrhenius equation: $k = A e^{-E_a/RT}$.\nStep 2: Since $E_a$ is in the exponent with a negative sign, a decrease in $E_a$ decreases the magnitude of the negative term (makes it closer to 0), which exponentially increases $e^{-E_a/RT}$.\nStep 3: Therefore, decreasing $E_a$ (e.g. by using a catalyst) causes an exponential increase in the rate constant $k$.",
      "result": "The rate constant $k$ increases exponentially."
    }
  },
  {
    "question_id": "ch6_q26_transition_state_definition",
    "topic": "Kinetics",
    "difficulty_level": "Easy",
    "question_text": "Which of the following best describes a transition state?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "A transient species at an energy minimum that can be trapped and studied at low temperatures.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "An unstable arrangement of atoms at an energy maximum along the reaction coordinate.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "The final state of the reaction mixture after equilibrium is reached.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A stable complex formed between the reactant and the solvent.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question defines the concept of a transition state.",
      "process": "Step 1: Transition states are local energy maxima along the reaction pathway.\nStep 2: They represent unstable, partially bonded structures that cannot be isolated or directly observed, having a lifetime of zero.\nStep 3: Thus, they are unstable arrangements of atoms at an energy maximum.",
      "result": "It is an unstable arrangement of atoms at an energy maximum."
    }
  },
  {
    "question_id": "ch6_q27_reaction_intermediate_definition",
    "topic": "Reaction Intermediates",
    "difficulty_level": "Easy",
    "question_text": "What is a reaction intermediate?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "A high-energy state representing bond-breaking and bond-making that cannot be isolated.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A stable, isolable molecule that is formed in one step and consumed in a subsequent step of a reaction.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A substance added to the reaction to lower the activation energy.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The state where reactants and products are in equilibrium.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question defines a reaction intermediate.",
      "process": "Step 1: Unlike transition states, intermediates are located in energy wells (local minima) on a reaction coordinate diagram.\nStep 2: They have fully formed bonds and a finite lifetime, meaning they can sometimes be detected, trapped, or even isolated under specific conditions.\nStep 3: They are formed in one step of a mechanism and consumed in a later step.",
      "result": "An intermediate is a species formed in one step and consumed in a subsequent step, corresponding to an energy minimum."
    }
  },
  {
    "question_id": "ch6_q28_ts_vs_intermediate",
    "topic": "Reaction Intermediates",
    "difficulty_level": "Medium",
    "question_text": "Which of the following is the key difference between a transition state and a reaction intermediate?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "Transition states are located at local energy minima, while intermediates are located at local maxima.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Transition states have a lifetime of zero and cannot be isolated, while intermediates have a finite lifetime and can potentially be detected or isolated.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Intermediates represent the highest energy points of a reaction, while transition states are stable.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Transition states only occur in radical reactions, while intermediates only occur in polar reactions.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question directly compares transition states and reaction intermediates.",
      "process": "Step 1: Review energy coordinate diagrams. Transition states are energy maxima (peaks) representing the transition from one species to another.\nStep 2: Intermediates are energy minima (valleys) representing transient but real chemical species.\nStep 3: Consequently, transition states cannot be isolated and have no lifetime, whereas intermediates have a non-zero lifetime.",
      "result": "Transition states have zero lifetime and cannot be isolated; intermediates have a finite lifetime."
    }
  },
  {
    "question_id": "ch6_q29_hammond_postulate_concept",
    "topic": "Kinetics",
    "difficulty_level": "Medium",
    "question_text": "What is the primary assertion of the Hammond Postulate?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "The rate of a reaction is inversely proportional to its equilibrium constant.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Two species that are close in energy on a reaction coordinate are also close in structure.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Endothermic reactions proceed faster than exothermic reactions because they are higher in energy.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Carbocations are stabilized by hyperconjugation and induction.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the conceptual formulation of the Hammond Postulate.",
      "process": "Step 1: The Hammond Postulate states that the transition state of a reaction step resembles the structure of the species closest to it in energy.\nStep 2: If the transition state and another species (reactant or product) are close in energy, they will be close in structure.\nStep 3: This allows organic chemists to estimate the structural features of transition states based on reactant or product/intermediate stabilities.",
      "result": "Species close in energy on a reaction coordinate are close in structure."
    }
  },
  {
    "question_id": "ch6_q30_hammond_postulate_exothermic",
    "topic": "Kinetics",
    "difficulty_level": "Hard",
    "question_text": "Based on the Hammond Postulate, what type of transition state is expected for a highly exothermic reaction step?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "A late transition state that structurally resembles the products.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "An early transition state that structurally resembles the reactants.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A symmetric transition state that lies exactly halfway between reactants and products.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "No transition state exists because exothermic reactions are instantaneous.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question applies the Hammond Postulate to exothermic steps.",
      "process": "Step 1: In a highly exothermic step, the products are much lower in energy than the reactants.\nStep 2: The transition state lies close in energy to the reactants.\nStep 3: According to the Hammond Postulate, the transition state structure will closely resemble the reactants. This is called an 'early' transition state.",
      "result": "It is an early transition state that structurally resembles the reactants."
    }
  },
  {
    "question_id": "ch6_q31_carbocation_hybridization",
    "topic": "Reaction Intermediates",
    "difficulty_level": "Easy",
    "question_text": "A tertiary carbocation, such as the tert-butyl cation, has what carbon hybridization, molecular geometry, and bond angles at the cationic carbon?",
    "question_smiles": "CC(C)(C)Br",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^3$, tetrahedral, $109.5^\\circ$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "$sp^2$, trigonal planar, $120^\\circ$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "$sp$, linear, $180^\\circ$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$sp^2$, bent, $105^\\circ$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the structural characteristics of carbocation intermediates.",
      "process": "Step 1: A carbocation carbon has three $\\sigma$ bonds and a vacant $p$ orbital, with a formal charge of $+1$.\nStep 2: The valence shell electron pair repulsion (VSEPR) theory dictates that three electron domains arrange themselves to minimize repulsion.\nStep 3: This results in an $sp^2$ hybridization, trigonal planar geometry, and bond angles of approximately $120^\\circ$.",
      "result": "The carbocation has $sp^2$ hybridization, trigonal planar geometry, and $120^\\circ$ bond angles."
    }
  },
  {
    "question_id": "ch6_q32_carbocation_stabilization",
    "topic": "Reaction Intermediates",
    "difficulty_level": "Hard",
    "question_text": "What are the two primary electronic factors that stabilize carbocations, and how do they operate?",
    "question_smiles": "CC(C)(C)Br",
    "options": [
      {
        "option_id": "A",
        "text": "Resonance and steric hindrance; they block nucleophilic access.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Inductive effect (polarization of electron density through $\\sigma$ bonds) and hyperconjugation (orbital overlap of adjacent filled C\u2013H or C\u2013C $\\sigma$ bonds with the empty $p$ orbital).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Electronegativity and aromaticity; they pull positive charge away.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Torsional strain and angle strain; they push the carbon into a planar shape.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the physical organic principles behind carbocation stability.",
      "process": "Step 1: Alkyl groups are electron-donating relative to hydrogen. They polarize electron density through $\\sigma$ bonds toward the positive carbon, which is the inductive effect.\nStep 2: Alkyl groups also stabilize carbocations via hyperconjugation: the filled C\u2013H (or C\u2013C) $\\sigma$ bond on an adjacent carbon can overlap with the vacant, unhybridized $p$ orbital of the carbocation.\nStep 3: Together, these factors explain why tertiary carbocations are much more stable than secondary, primary, or methyl carbocations.",
      "result": "Inductive effect and hyperconjugation stabilize carbocations."
    }
  },
  {
    "question_id": "ch6_q33_carbanion_hybridization",
    "topic": "Reaction Intermediates",
    "difficulty_level": "Medium",
    "question_text": "What is the hybridization, molecular geometry (including the lone pair), and relative stability trend for simple alkyl carbanions?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^2$, trigonal planar, stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{methyl}$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "$sp^3$, trigonal pyramidal, stability: $\\text{methyl} > 1^\\circ > 2^\\circ > 3^\\circ$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "$sp^3$, tetrahedral, stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{methyl}$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$sp$, linear, stability: $\\text{methyl} > 3^\\circ > 2^\\circ > 1^\\circ$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the structure and stability of carbanions.",
      "process": "Step 1: A carbanion carbon has three bonds and one lone pair, giving it a formal charge of $-1$ and a steric number of 4.\nStep 2: This corresponds to an $sp^3$ hybridization and a trigonal pyramidal molecular geometry.\nStep 3: Alkyl groups are electron-donating. Introducing electron density to a carbon that is already negatively charged is destabilizing. Therefore, more alkyl substituents decrease stability, making methyl carbanion the most stable and tertiary the least stable.",
      "result": "Carbanions are $sp^3$ hybridized, trigonal pyramidal, and follow the stability trend: $\\text{methyl} > 1^\\circ > 2^\\circ > 3^\\circ$."
    }
  },
  {
    "question_id": "ch6_q34_radical_structure",
    "topic": "Reaction Intermediates",
    "difficulty_level": "Medium",
    "question_text": "Which of the following statements about carbon radicals is correct?",
    "question_smiles": "CC(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "They are $sp^3$-hybridized and are stabilized by electron-withdrawing groups.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "They are planar or rapidly inverting pyramidal species, effectively $sp^2$-hybridized, and follow the stability trend $3^\\circ > 2^\\circ > 1^\\circ > \\text{methyl}$.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "They are stable, non-reactive species that do not undergo further reaction.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "They are stabilized by polar solvents through strong ion-dipole interactions.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the structure and stability of free radicals.",
      "process": "Step 1: Carbon radicals have seven valence electrons (three bonding pairs and one unpaired electron). The geometry is planar or near-planar, meaning they are effectively $sp^2$-hybridized.\nStep 2: Radicals are electron-deficient. Like carbocations, they are stabilized by electron-donating alkyl groups through hyperconjugation. This makes tertiary radicals the most stable.\nStep 3: Thus, the stability trend is $3^\\circ > 2^\\circ > 1^circ > \\text{methyl}$.",
      "result": "Carbon radicals are effectively $sp^2$-hybridized and have the stability order $3^\\circ > 2^\\circ > 1^\\circ > \\text{methyl}$."
    }
  },
  {
    "question_id": "ch6_q35_carbene_singlet_triplet",
    "topic": "Reaction Intermediates",
    "difficulty_level": "Hard",
    "question_text": "Carbenes ($:CR_2$) can exist in singlet or triplet ground states. Which of the following correctly describes the electronic configuration of a triplet carbene?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^2$-hybridized carbon with a lone pair in an $sp^2$ orbital and an empty $p$ orbital.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "$sp^2$-hybridized carbon with two unpaired electrons of parallel spins in different orbitals (one $sp^2$ and one $p$).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "$sp$-hybridized carbon with two lone pairs of electrons.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$sp^3$-hybridized carbon with two covalent bonds and two vacant orbitals.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question distinguishes between singlet and triplet carbenes.",
      "process": "Step 1: A singlet carbene has its two non-bonding electrons paired in a single orbital (usually $sp^2$), leaving an empty $p$ orbital.\nStep 2: A triplet carbene has two non-bonding electrons with parallel spins in different orbitals (satisfying Hund's rule). Usually, the carbon is $sp^2$-hybridized, with one electron in an $sp^2$ orbital and one electron in a $p$ orbital.\nStep 3: This results in a biradical-like electronic structure.",
      "result": "A triplet carbene has two unpaired electrons with parallel spins in different orbitals."
    }
  },
  {
    "question_id": "ch6_q36_reaction_coordinate_exothermic",
    "topic": "Energy Diagrams",
    "difficulty_level": "Easy",
    "question_text": "For a single-step, exothermic reaction, what is the relative energy of the transition state and the products compared to the reactants?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "The transition state is lower in energy than the reactants, and the products are higher.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "The transition state is higher in energy than the reactants, and the products are lower.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Both the transition state and products are lower in energy than the reactants.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both the transition state and products are higher in energy than the reactants.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the interpretation of simple reaction energy diagrams.",
      "process": "Step 1: A reaction always goes through a transition state at an energy maximum, so the transition state is always higher in energy than the reactants.\nStep 2: For an exothermic reaction, heat is released, so the products are lower in energy than the reactants ($\\Delta H^\\circ < 0$).",
      "result": "The transition state is higher in energy than reactants, and products are lower."
    }
  },
  {
    "question_id": "ch6_q37_reaction_coordinate_two_step",
    "topic": "Energy Diagrams",
    "difficulty_level": "Medium",
    "question_text": "A reaction has a two-step mechanism where the first step is endothermic and the second step is exothermic. Which of the following describes the correct order of energy states from left to right along the reaction coordinate?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "Reactants $\\rightarrow$ Transition State 1 $\\rightarrow$ Intermediate $\\rightarrow$ Transition State 2 $\\rightarrow$ Products (where the Intermediate is higher in energy than both reactants and products).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Reactants $\\rightarrow$ Intermediate $\\rightarrow$ Transition State 1 $\\rightarrow$ Transition State 2 $\\rightarrow$ Products.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Reactants $\\rightarrow$ Transition State $\\rightarrow$ Products (with no intermediate).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Reactants $\\rightarrow$ Transition State 1 $\\rightarrow$ Transition State 2 $\\rightarrow$ Intermediate $\\rightarrow$ Products.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the sequence of features on a multi-step reaction coordinate diagram.",
      "process": "Step 1: Every step begins at a stable or meta-stable state (reactants or intermediate) and goes through a transition state (energy maximum) before arriving at another state.\nStep 2: In a two-step reaction, the path is: Reactants $\\rightarrow$ Transition State 1 $\\rightarrow$ Intermediate $\\rightarrow$ Transition State 2 $\\rightarrow$ Products.\nStep 3: Because the first step is endothermic, the intermediate must be higher in energy than the reactants. Because the overall reaction must end with products, the products are lower in energy than reactants.",
      "result": "The path is Reactants $\\rightarrow$ TS1 $\\rightarrow$ Intermediate $\\rightarrow$ TS2 $\\rightarrow$ Products."
    }
  },
  {
    "question_id": "ch6_q38_rate_determining_step_math",
    "topic": "Energy Diagrams",
    "difficulty_level": "Medium",
    "question_text": "A two-step reaction has the following energy values relative to reactants (0 kJ/mol): Transition State 1 = +75 kJ/mol; Intermediate = +40 kJ/mol; Transition State 2 = +60 kJ/mol; Products = -30 kJ/mol. Which step is the rate-determining step, and what is the activation energy of the forward reaction?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "Step 2, $E_a = 20\\text{ kJ/mol}$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Step 1, $E_a = 75\\text{ kJ/mol}$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Step 1, $E_a = 35\\text{ kJ/mol}$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Step 2, $E_a = 60\\text{ kJ/mol}$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests quantitative analysis of reaction coordinate diagrams.",
      "process": "Step 1: Calculate the activation energy for each step.\nStep 2: Step 1 starts at Reactants (0 kJ/mol) and goes to TS1 (+75 kJ/mol). $E_{a1} = 75 - 0 = 75\\text{ kJ/mol}$.\nStep 3: Step 2 starts at Intermediate (+40 kJ/mol) and goes to TS2 (+60 kJ/mol). $E_{a2} = 60 - 40 = 20\\text{ kJ/mol}$.\nStep 4: The rate-determining step is the step with the highest transition state relative to the starting reactants, which is Step 1 ($E_{a,\\text{overall}} = 75\\text{ kJ/mol}$).",
      "result": "Step 1 is the rate-determining step, with $E_a = 75\\text{ kJ/mol}$."
    }
  },
  {
    "question_id": "ch6_q39_kinetic_vs_thermodynamic_control",
    "topic": "Energy Diagrams",
    "difficulty_level": "Hard",
    "question_text": "In a reaction that can produce two isomeric products, Product A is formed faster (lower activation energy) but is less stable than Product B. Under what conditions will Product B be the major product?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "Low temperature and short reaction time (kinetic control).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "High temperature and long reaction time (thermodynamic control).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "In the presence of a radical initiator.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Under all possible conditions, because Product B is more stable.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the conditions for kinetic versus thermodynamic control.",
      "process": "Step 1: Product A is formed faster, so it is the kinetic product.\nStep 2: Product B is more stable, so it is the thermodynamic product.\nStep 3: At high temperatures and long reaction times, the reaction becomes reversible (reaches equilibrium), allowing the molecules to cross the higher activation barrier of Product B and settle in the lower-energy product state. This is thermodynamic control, favoring Product B.",
      "result": "High temperature and long reaction time favor Product B."
    }
  },
  {
    "question_id": "ch6_q40_addition_mechanism_steps",
    "topic": "Reaction Mechanisms",
    "difficulty_level": "Medium",
    "question_text": "The reaction of 2-methylpropene with $HCl$ yields 2-chloro-2-methylpropane. What is the correct order of mechanistic events in this polar addition?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Protonation of the alkene to form a tertiary carbocation, followed by nucleophilic attack of chloride.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Attack of chloride on the alkene to form a carbanion, followed by protonation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Concerted addition of $H$ and $Cl$ across the double bond in a single step.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Homolytic cleavage of $HCl$ followed by radical addition.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the mechanistic steps of electrophilic addition to alkenes.",
      "process": "Step 1: The alkene $\\pi$ bond acts as a nucleophile and attacks the electrophilic proton of $HCl$.\nStep 2: Protonation occurs at the less substituted carbon (Markovnikov's rule) to yield the more stable tertiary carbocation intermediate.\nStep 3: The chloride ion (nucleophile) then attacks the carbocation to form the final alkyl chloride product.",
      "result": "The mechanism is protonation to form a tertiary carbocation, followed by chloride attack."
    }
  },
  {
    "question_id": "ch6_q41_radical_initiation_peroxides",
    "topic": "Reaction Mechanisms",
    "difficulty_level": "Easy",
    "question_text": "Why are peroxides ($R-O-O-R$) frequently used to initiate radical reactions?",
    "question_smiles": "OO",
    "options": [
      {
        "option_id": "A",
        "text": "They are strong polar solvents that stabilize carbocations.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "They possess a weak oxygen-oxygen covalent bond that undergoes homolytic cleavage at relatively low temperatures or under UV light.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "They act as strong Lewis bases to donate electron pairs.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "They lower the activation energy of polar addition steps.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the role of initiators in radical mechanisms.",
      "process": "Step 1: Radical reactions require an initiation step to generate free radicals from neutral molecules.\nStep 2: Peroxides have an O\u2013O single bond with a very low bond dissociation energy (about 150 kJ/mol compared to ~410 kJ/mol for C\u2013H).\nStep 3: This weak bond undergoes homolytic cleavage easily upon heating or exposure to light, generating alkoxy radicals that initiate the chain.",
      "result": "Peroxides possess a weak O\u2013O bond that undergoes homolytic cleavage easily."
    }
  },
  {
    "question_id": "ch6_q42_radical_termination",
    "topic": "Reaction Mechanisms",
    "difficulty_level": "Easy",
    "question_text": "Which of the following reaction steps in radical chlorination represents a termination step?",
    "question_smiles": "C",
    "options": [
      {
        "option_id": "A",
        "text": "$Cl_2 \\rightarrow 2\\ Cl\\cdot$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "$CH_4 + Cl\\cdot \\rightarrow \\cdot CH_3 + HCl$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$\\cdot CH_3 + Cl_2 \\rightarrow CH_3Cl + Cl\\cdot$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$2\\ \\cdot CH_3 \\rightarrow CH_3CH_3$",
        "smiles": "",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "This question tests identification of termination steps in radical chain reactions.",
      "process": "Step 1: Radical initiation generates radicals. Propagation steps consume one radical and make a new one.\nStep 2: Termination steps involve the combination of two radicals to form a stable covalent bond, reducing the concentration of active radicals in the mixture.\nStep 3: $2\\ \\cdot CH_3 \\rightarrow CH_3CH_3$ combines two methyl radicals to form ethane, which has no radicals.",
      "result": "The termination step is $2\\ \\cdot CH_3 \\rightarrow CH_3CH_3$."
    }
  },
  {
    "question_id": "ch6_q43_organometallic_transmetalation",
    "topic": "Reaction Mechanisms",
    "difficulty_level": "Hard",
    "question_text": "In transition-metal-catalyzed cross-coupling reactions, the step in which an organic group is transferred from one metal (such as boron or tin) to the transition metal catalyst (such as palladium) is known as:",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Oxidative addition",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Reductive elimination",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Transmetalation",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Carbometalation",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests ligand exchange/organometallic mechanisms.",
      "process": "Step 1: Identify the components: an organometallic donor (e.g. organoboron in Suzuki coupling) and a palladium complex.\nStep 2: The transfer of the organic group from boron to palladium is a ligand exchange between two metals.\nStep 3: This process is known as transmetalation.",
      "result": "The step is transmetalation."
    }
  },
  {
    "question_id": "ch6_q44_curved_arrow_formal_charge",
    "topic": "Curved Arrows",
    "difficulty_level": "Hard",
    "question_text": "A curved arrow starts at a lone pair on a neutral nitrogen atom of ammonia ($NH_3$) and points to the boron atom of boron trifluoride ($BF_3$). After this step, what are the formal charges on the nitrogen and boron atoms, respectively?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Nitrogen is $+1$, Boron is $-1$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Nitrogen is $-1$, Boron is $+1$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both remain neutral (0)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Nitrogen is $+1$, Boron is neutral (0)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests tracking of formal charges during polar bond formation.",
      "process": "Step 1: Ammonia ($NH_3$) is neutral. When nitrogen donates its lone pair to form a new bond, it effectively shares two electrons that it previously owned completely. Its formal charge becomes: $5 - (8/2) - 0 = +1$.\nStep 2: Boron trifluoride ($BF_3$) is neutral. When boron accepts the electron pair to form a fourth bond, its formal charge becomes: $3 - (8/2) - 0 = -1$.\nStep 3: This forms a Lewis acid-base adduct ($H_3N^+-B^-F_3$).",
      "result": "Nitrogen is $+1$, Boron is $-1$."
    }
  },
  {
    "question_id": "ch6_q45_metal_cation_electrophile",
    "topic": "Electrophiles vs Nucleophiles",
    "difficulty_level": "Medium",
    "question_text": "Why do transition metal cations, such as $Fe^{3+}$ or $Al^{3+}$, behave as strong electrophiles in organic reactions like Friedel-Crafts alkylation?",
    "question_smiles": "C1=CC=CC=C1",
    "options": [
      {
        "option_id": "A",
        "text": "They have filled d-orbitals that easily donate electrons.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "They are highly electron-deficient species with vacant orbitals that can accept electron pairs from Lewis bases.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "They undergo homolytic cleavage to generate radical species.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "They act as proton donors in aqueous solutions.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the Lewis acidity of metal cations as electrophiles.",
      "process": "Step 1: Electrophiles are electron pair acceptors (Lewis acids).\nStep 2: Metal cations like $Fe^{3+}$ or $Al^{3+}$ have positive charges and accessible empty valence orbitals.\nStep 3: They strongly attract and accept electron pairs from nucleophiles (like alkyl halides), making them powerful electrophiles/Lewis acids.",
      "result": "They are electron-deficient with vacant orbitals that accept electron pairs."
    }
  },
  {
    "question_id": "ch6_q46_nucleophilicity_solvent",
    "topic": "Electrophiles vs Nucleophiles",
    "difficulty_level": "Hard",
    "question_text": "In a polar protic solvent such as methanol ($CH_3OH$), what is the correct order of nucleophilicity for the halide anions?",
    "question_smiles": "CO",
    "options": [
      {
        "option_id": "A",
        "text": "$F^- > Cl^- > Br^- > I^-$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "$I^- > Br^- > Cl^- > F^-$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "$Cl^- > F^- > I^- > Br^-$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "All halides have equal nucleophilicity in protic solvents.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests solvent effects on nucleophilicity.",
      "process": "Step 1: Polar protic solvents can form strong hydrogen bonds to anions.\nStep 2: Small, highly electronegative anions (like $F^-$) are strongly solvated by hydrogen bonding, which shields their lone pairs and reduces their reactivity.\nStep 3: Large, polarizable anions (like $I^-$) are weakly solvated because their charge is spread over a large volume, leaving them free to react. Thus, in polar protic solvents, nucleophilicity increases down the periodic table: $I^- > Br^- > Cl^- > F^-$.",
      "result": "The order is $I^- > Br^- > Cl^- > F^-$."
    }
  },
  {
    "question_id": "ch6_q47_early_vs_late_ts",
    "topic": "Kinetics",
    "difficulty_level": "Hard",
    "question_text": "For an endothermic reaction step, the Hammond Postulate predicts a 'late' transition state. Which of the following is a physical consequence of this prediction?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "Factors that stabilize the starting reactants will have a major stabilizing effect on the transition state.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Factors that stabilize the products/intermediates of that step will have a major stabilizing effect on the transition state.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "The transition state will have bond lengths that are identical to the starting materials.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The activation energy of the step will be zero.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question applies the Hammond Postulate to explain the relationship between product stability and transition state energy.",
      "process": "Step 1: A late transition state resembles the products of that step structurally and energetically.\nStep 2: Because the transition state is close in energy to the products, any structural or electronic factor that stabilizes the products will also stabilize the transition state.\nStep 3: This lowers the activation energy of the step, making the formation of a more stable intermediate/product faster.",
      "result": "Factors stabilizing the products also stabilize the transition state."
    }
  },
  {
    "question_id": "ch6_q48_polarization_effects",
    "topic": "Electrophiles vs Nucleophiles",
    "difficulty_level": "Medium",
    "question_text": "In the molecule chloromethane ($CH_3Cl$), which atom is electrophilic, and how does the concept of polarizability affect its reactivity?",
    "question_smiles": "CCl",
    "options": [
      {
        "option_id": "A",
        "text": "The chlorine atom is electrophilic because it has high polarizability.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "The carbon atom is electrophilic because the electronegative chlorine polarizes the C\u2013Cl bond, and the carbon becomes more reactive toward polarizable nucleophiles.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "The hydrogen atoms are electrophilic because they are on the exterior.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The carbon is nucleophilic because it has a high polarizability.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests polarization and electrophilicity in alkyl halides.",
      "process": "Step 1: Chlorine is more electronegative than carbon, pulling electron density away to create a partial positive charge ($\\delta^+$) on carbon.\nStep 2: This makes the carbon atom electrophilic.\nStep 3: The C-Cl bond is polar, and the carbon is susceptible to attack by nucleophiles. Polarizability of the leaving group (chlorine) also assists in bond-breaking.",
      "result": "The carbon is electrophilic due to C-Cl polarization."
    }
  },
  {
    "question_id": "ch6_q49_entropy_ring_strain",
    "topic": "Thermodynamics",
    "difficulty_level": "Hard",
    "question_text": "When cyclohexene reacts with bromine ($Br_2$) to form trans-1,2-dibromocyclohexane, the reaction is highly exothermic ($\\Delta H^\\circ \\approx -96\\text{ kJ/mol}$). What is the primary contributor to this large negative enthalpy change?",
    "question_smiles": "C1=CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "The relief of ring strain in the cyclohexene ring.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "The conversion of a relatively weak carbon-carbon $\\pi$ bond and a bromine-bromine $\\sigma$ bond into two stronger carbon-bromine $\\sigma$ bonds.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "The large increase in molecular disorder (entropy).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The formation of a gaseous product from liquid reactants.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the thermodynamic basis of addition reactions.",
      "process": "Step 1: Enthalpy change ($\\Delta H^\\circ$) depends on the relative strengths of bonds broken and bonds formed.\nStep 2: Bonds broken: C=C $\\pi$ bond and Br\u2013Br $sigma$ bond.\nStep 3: Bonds formed: two C\u2013Br $\\sigma$ bonds.\nStep 4: $\\sigma$ bonds are significantly stronger than $\\pi$ bonds. Thus, forming two strong $\\sigma$ bonds at the expense of a weak $\\pi$ bond and a weak Br\u2013Br bond is highly exothermic.",
      "result": "The conversion of weaker bonds to stronger $\\sigma$ bonds makes the reaction highly exothermic."
    }
  },
  {
    "question_id": "ch6_q50_multi_step_diagram_intermediates",
    "topic": "Energy Diagrams",
    "difficulty_level": "Hard",
    "question_text": "A reaction coordinate diagram has three peaks and two valleys. How many steps are in this reaction mechanism, and how many intermediates are formed?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "Two steps and three intermediates.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Three steps and two intermediates.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Three steps and three intermediates.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Four steps and two intermediates.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the identification of steps and intermediates in multi-step energy diagrams.",
      "process": "Step 1: Each peak represents a transition state, which corresponds to one step in the mechanism. Therefore, three peaks mean there are three steps.\nStep 2: Each valley between the peaks represents a stable intermediate. For three steps, there are two valleys between them, indicating two reaction intermediates.\nStep 3: Thus, a reaction with three peaks and two valleys is a three-step reaction with two intermediates.",
      "result": "The reaction has three steps and two intermediates."
    }
  },
  {
    "question_id": "ch6_q_dynamic_reaction_energy",
    "topic": "Reaction Energetics & Kinetics",
    "difficulty_level": "Medium",
    "question_text": "Consider the potential energy diagram of an addition reaction. Match the states to their corresponding kinetic features.",
    "energy_diagram": {
      "points": [
        {
          "state": "Reactants",
          "energy": 10
        },
        {
          "state": "Transition State 1",
          "energy": 80
        },
        {
          "state": "Intermediate (Carbocation)",
          "energy": 40
        },
        {
          "state": "Transition State 2",
          "energy": 60
        },
        {
          "state": "Products",
          "energy": -30
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "The reaction is exergonic (delta H = -40 kJ/mol) with the first step being rate-limiting (Ea = 70 kJ/mol).",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The reaction is endergonic with a single transition state.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The second step is rate-determining.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The intermediate is more stable than the product.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing two-step reaction coordinates.",
      "process": "Reactant energy = 10. TS1 = 80. Ea1 = 80 - 10 = 70 kJ/mol. TS2 = 60. Ea2 = 60 - 40 = 20 kJ/mol. Since Ea1 > Ea2, the first step is rate-limiting. Product energy = -30. delta H = -30 - 10 = -40 kJ/mol (exergonic).",
      "result": "Exergonic reaction with rate-determining first step."
    }
  }
];
