# -*- coding: utf-8 -*-
import json
import os

questions = [
  # --- TOPIC 1: NAMING AROMATIC COMPOUNDS (Q1-Q6) ---
  {
    "question_id": "ch15_q1_nomenclature_priority",
    "topic": "Naming Aromatic Compounds",
    "difficulty_level": "Easy",
    "question_text": "What is the IUPAC name for the following disubstituted benzene derivative?",
    "question_smiles": "Oc1ccc(C=O)cc1",
    "options": [
      {
        "option_id": "A",
        "text": "4-hydroxybenzaldehyde",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "4-formylphenol",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "1-hydroxy-4-benzaldehyde",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "p-phenolaldehyde",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question addresses the priority of functional groups in IUPAC nomenclature for benzene derivatives.",
      "process": "Step 1: Identify the two substituents on the benzene ring: a hydroxyl group (-OH) and a formyl group (-CHO).\nStep 2: Determine the priority of the functional groups. The aldehyde group (-CHO) has higher priority than the hydroxyl group (-OH), so the parent chain is named 'benzaldehyde' with the aldehyde carbon as C1.\nStep 3: Number the ring to give the substituent (-OH) the lowest possible locant. Numbering from C1 to C4 gives 4-hydroxybenzaldehyde.",
      "result": "The IUPAC name is 4-hydroxybenzaldehyde."
    }
  },
  {
    "question_id": "ch15_q2_nomenclature_benzoic_acid",
    "topic": "Naming Aromatic Compounds",
    "difficulty_level": "Easy",
    "question_text": "What is the correct IUPAC name of the compound shown below?",
    "question_smiles": "Cc1ccc(C(=O)O)cc1",
    "options": [
      {
        "option_id": "A",
        "text": "4-methylbenzoic acid",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "4-carboxytoluene",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "1-carboxy-4-methylbenzene",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "p-methylbenzoic acid (incorrect capitalization/format)",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question tests functional group priority when naming benzoic acid derivatives.",
      "process": "Step 1: The carboxylic acid (-COOH) group has priority over the methyl (-CH3) group.\nStep 2: The parent name is benzoic acid, with the C-COOH carbon defined as C1.\nStep 3: The methyl group is at C4, leading to the name 4-methylbenzoic acid.",
      "result": "The correct IUPAC name is 4-methylbenzoic acid."
    }
  },
  {
    "question_id": "ch15_q3_nomenclature_trisubstituted",
    "topic": "Naming Aromatic Compounds",
    "difficulty_level": "Medium",
    "question_text": "Assign the correct IUPAC name to the following substituted aromatic compound:",
    "question_smiles": "Nc1cc(Br)c(O)c(Br)c1",
    "options": [
      {
        "option_id": "A",
        "text": "4-amino-2,6-dibromophenol",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "2,6-dibromo-4-hydroxyaniline",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "3,5-dibromo-4-hydroxyphenol",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "4-hydroxy-3,5-dibromoaniline",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question tests the IUPAC naming rules for trisubstituted benzenes where common names can be parents.",
      "process": "Step 1: Identify functional groups: amine (-NH2), bromine (-Br) atoms, and hydroxyl (-OH).\nStep 2: The hydroxyl group (-OH) has higher nomenclature priority than the amino group (-NH2), making the parent ring 'phenol' with C1 at the carbon bearing the -OH.\nStep 3: Number the ring to give substituents the lowest possible numbers: C2 and C6 have bromines, C4 has the amino group. Alphabetical ordering puts 'amino' before 'dibromo'.",
      "result": "The IUPAC name is 4-amino-2,6-dibromophenol."
    }
  },
  {
    "question_id": "ch15_q4_nomenclature_ester",
    "topic": "Naming Aromatic Compounds",
    "difficulty_level": "Medium",
    "question_text": "What is the correct IUPAC name of the following ester derivative of a benzoic acid?",
    "question_smiles": "COC(=O)c1cccc([N+](=O)[O-])c1",
    "options": [
      {
        "option_id": "A",
        "text": "methyl 3-nitrobenzoate",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "3-carbomoxynitrobenzene",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "methyl m-nitrophenyl ester",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "3-nitrobenzoic methyl ester",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question tests naming of aromatic esters.",
      "process": "Step 1: An ester is named by first stating the alkyl group attached to the oxygen (methyl) followed by the name of the carboxylic acid parent with the ending '-ic acid' replaced by '-ate' (benzoate).\nStep 2: The benzoic acid ring has a nitro group at position 3 (meta).\nStep 3: Thus, the full name is methyl 3-nitrobenzoate.",
      "result": "The correct name is methyl 3-nitrobenzoate."
    }
  },
  {
    "question_id": "ch15_q5_nomenclature_acetophenone",
    "topic": "Naming Aromatic Compounds",
    "difficulty_level": "Medium",
    "question_text": "Name the following aromatic compound using IUPAC rules:",
    "question_smiles": "CC(=O)c1ccc(C)c(Br)c1",
    "options": [
      {
        "option_id": "A",
        "text": "3-bromo-4-methylacetophenone",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "5-bromo-4-methylacetophenone",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "2-bromo-1-methyl-4-acetylbenzene",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "3-bromo-4-methylphenyl methyl ketone",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question requires naming an acetophenone derivative with multiple substituents.",
      "process": "Step 1: The acetyl group (-COCH3) has priority, making the parent 'acetophenone' with the acetyl carbon at C1.\nStep 2: Number around the ring toward the substituents to give them the lowest possible numbers: C3 has bromine, C4 has methyl.\nStep 3: Alphabetize the substituents: 'bromo' before 'methyl'. Thus, 3-bromo-4-methylacetophenone.",
      "result": "The IUPAC name is 3-bromo-4-methylacetophenone."
    }
  },
  {
    "question_id": "ch15_q6_nomenclature_styrene",
    "topic": "Naming Aromatic Compounds",
    "difficulty_level": "Hard",
    "question_text": "What is the IUPAC name for the following molecule?",
    "question_smiles": "N#Cc1ccc(C=C)cc1",
    "options": [
      {
        "option_id": "A",
        "text": "4-ethenylbenzonitrile",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "4-cyanostyrene",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "1-cyano-4-vinylbenzene",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "p-styrenecarbonitrile",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question tests priority between cyano and alkene substituents on a benzene ring.",
      "process": "Step 1: The cyano (-CN) group has higher priority than the ethenyl (vinyl) group.\nStep 2: The parent is benzonitrile, with the cyano carbon at C1.\nStep 3: The ethenyl group is at position 4. In IUPAC, 'ethenyl' is preferred over the common name 'vinyl'.",
      "result": "The IUPAC name is 4-ethenylbenzonitrile."
    }
  },

  # --- TOPIC 2: STRUCTURE AND STABILITY OF BENZENE (Q7-Q12) ---
  {
    "question_id": "ch15_q7_heats_of_hydrogenation",
    "topic": "Structure and Stability of Benzene",
    "difficulty_level": "Easy",
    "question_text": "When 1 mole of cyclohexene is hydrogenated to cyclohexane, 120 kJ/mol of heat is released. The heat of hydrogenation of benzene is measured to be -208 kJ/mol. What does this indicate about the stability of benzene?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Benzene is about 152 kJ/mol more stable than a hypothetical localized 1,3,5-cyclohexatriene due to resonance stabilization.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "Benzene is unstable because it releases more heat than cyclohexene during hydrogenation.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "Benzene behaves exactly like three isolated double bonds, releasing about 360 kJ/mol of heat.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "The low heat of hydrogenation is due to the high angle strain of the six-membered ring.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question examines the experimental evidence for the resonance stabilization energy of benzene.",
      "process": "Step 1: Calculate the expected heat of hydrogenation for a hypothetical localized 1,3,5-cyclohexatriene: 3 * (-120 kJ/mol) = -360 kJ/mol.\nStep 2: Compare this with the actual heat of hydrogenation of benzene (-208 kJ/mol).\nStep 3: The difference: -360 - (-208) = -152 kJ/mol. This represents the stabilization energy (resonance energy) of benzene.",
      "result": "Benzene is 152 kJ/mol more stable than expected due to resonance stabilization."
    }
  },
  {
    "question_id": "ch15_q8_resonance_energy_concept",
    "topic": "Structure and Stability of Benzene",
    "difficulty_level": "Medium",
    "question_text": "Which of the following statements best describes the thermodynamic concept of resonance energy (delocalization energy) in aromatic systems?",
    "question_smiles": "C1=CC=CC=C1",
    "options": [
      {
        "option_id": "A",
        "text": "It is the extra stability gained by a conjugated cyclic system compared to a hypothetical localized structure with the same geometry.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "It is the activation energy barrier that must be overcome to interconvert the two Kekulé structures of benzene.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "It is the energy required to excite a $\\pi$ electron from the HOMO to the LUMO in benzene.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "It is the energy released when benzene undergoes electrophilic addition rather than substitution.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "Understanding what resonance energy physically represents.",
      "process": "Step 1: Resonance energy is a thermodynamic term comparing a real molecule with a hypothetical model.\nStep 2: The real molecule has delocalized electrons, whereas the hypothetical Kekulé structure has localized double bonds.\nStep 3: This difference in energy represents the stabilization due to electron delocalization.",
      "result": "Resonance energy is the extra stability of the delocalized system."
    }
  },
  {
    "question_id": "ch15_q9_bond_lengths",
    "topic": "Structure and Stability of Benzene",
    "difficulty_level": "Easy",
    "question_text": "What did X-ray diffraction experiments reveal about the carbon-carbon bond lengths in benzene?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "All six C-C bonds are identical in length (139 pm), intermediate between a typical C-C single bond (154 pm) and a C=C double bond (134 pm).",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "The bonds alternate between three short C=C double bonds (134 pm) and three long C-C single bonds (154 pm).",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "The bond lengths oscillate dynamically between 134 pm and 154 pm at a rate faster than can be resolved by X-ray diffraction.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "All six bonds are identical in length to a typical C=C double bond (134 pm).",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question addresses the physical geometry of benzene.",
      "process": "Step 1: In a localized cyclohexatriene, we would expect alternating short (134 pm) and long (154 pm) bonds.\nStep 2: Because benzene is symmetric and aromatic, all C-C bonds are completely equivalent.\nStep 3: The measured bond length is 139 pm, which is intermediate between single and double bonds.",
      "result": "All six C-C bonds are equivalent and measure 139 pm."
    }
  },
  {
    "question_id": "ch15_q10_carbon_hybridization",
    "topic": "Structure and Stability of Benzene",
    "difficulty_level": "Easy",
    "question_text": "Which set of hybridization, molecular geometry, and bond angles correctly describes the carbons in a benzene ring?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^2$, trigonal planar, $120^\\circ$",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "$sp^3$, tetrahedral (distorted), $109.5^\\circ$",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "$sp$, linear (distorted), $180^\\circ$",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "Alternating $sp^2$ and $sp^3$, $120^\\circ$ and $109.5^\\circ$",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question reinforces the orbital hybridization and geometry of benzene.",
      "process": "Step 1: Each carbon in benzene is bonded to two other carbons and one hydrogen (three $\\sigma$ bonds, zero lone pairs).\nStep 2: Three steric domains correspond to $sp^2$ hybridization.\nStep 3: $sp^2$ hybridized atoms exhibit trigonal planar geometry with ideal $120^\\circ$ bond angles.",
      "result": "Carbons in benzene are $sp^2$ hybridized with trigonal planar geometry and $120^\\circ$ bond angles."
    }
  },
  {
    "question_id": "ch15_q11_hydrogenation_kinetics",
    "topic": "Structure and Stability of Benzene",
    "difficulty_level": "Medium",
    "question_text": "Under what conditions does the catalytic hydrogenation of benzene occur, and what is the final product?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Excess $H_2$, metal catalyst (e.g., Ni, Pt, or Rh), high pressure (100 atm), and high temperature ($150^\\circ\\text{C}$); product: cyclohexane.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "$H_2$, $Pd/C$ at room temperature and atmospheric pressure; product: cyclohexane.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "$H_2$, $Pd/C$ at room temperature and atmospheric pressure; product: 1,3-cyclohexadiene.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "Benzene cannot be hydrogenated because the aromatic stabilization energy cannot be overcome by catalytic hydrogenation.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question highlights the contrast in reactivity between isolated alkenes and aromatic systems.",
      "process": "Step 1: Normal alkenes are hydrogenated with $H_2$ and $Pd/C$ under mild conditions (room temperature, 1 atm).\nStep 2: Benzene has high thermodynamic stability (aromatic resonance energy) and requires much harsher conditions (high temperature, high pressure, active catalysts) to undergo hydrogenation.\nStep 3: Once the first double bond is hydrogenated, the remaining diene is much easier to hydrogenate than benzene, so the reaction proceeds all the way to cyclohexane; it cannot be stopped at the diene stage.",
      "result": "Benzene requires high pressure and temperature with a metal catalyst to yield cyclohexane."
    }
  },
  {
    "question_id": "ch15_q12_thermodynamic_vs_kinetic",
    "topic": "Structure and Stability of Benzene",
    "difficulty_level": "Medium",
    "question_text": "Why does benzene undergo electrophilic substitution (EArS) rather than electrophilic addition (like typical alkenes) when reacted with electrophiles?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Substitution preserves the highly stable aromatic system ($6\\pi$ electrons), whereas addition would destroy the aromaticity to give a non-aromatic product.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "Substitution is kinetically faster because it does not go through a carbocation intermediate.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "Addition is thermodynamically impossible because it has a positive free energy change (endergonic).",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "The electrophile is too steric to add to the C=C double bonds in the planar ring.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "Understanding the fundamental driving force of Electrophilic Aromatic Substitution.",
      "process": "Step 1: Electrophilic addition to an alkene yields an addition product. For benzene, addition would lead to a cyclohexadiene derivative, which has lost its aromatic stabilization (resonance energy loss of 152 kJ/mol).\nStep 2: Electrophilic substitution involves electrophile addition to form a cyclohexadienyl cation (sigma complex), followed by deprotonation to regenerate the double bond and restore the aromatic ring.\nStep 3: Thus, substitution is highly thermodynamically favored over addition because it retains the aromatic resonance stabilization.",
      "result": "Substitution is favored because it preserves aromaticity."
    }
  },

  # --- TOPIC 3: MOLECULAR ORBITAL DESCRIPTION OF BENZENE (Q13-Q18) ---
  {
    "question_id": "ch15_q13_mo_diagram_shape",
    "topic": "Molecular Orbital Description of Benzene",
    "difficulty_level": "Medium",
    "question_text": "According to molecular orbital (MO) theory, how many $\\pi$ molecular orbitals does benzene possess, and what is their relative energy arrangement?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Six $\\pi$ MOs: three bonding ($\\psi_1$ lowest, degenerate $\\psi_2, \\psi_3$) and three antibonding (degenerate $\\psi_4^*, \\psi_5^*$, and $\\psi_6^*$ highest).",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "Six $\\pi$ MOs: two bonding, two nonbonding, and two antibonding.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "Three $\\pi$ MOs: all of which are degenerate bonding orbitals.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "Six $\\pi$ MOs: three bonding and three antibonding, all of which are non-degenerate (distinct energy levels).",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question tests the $\\pi$ molecular orbital diagram of benzene.",
      "process": "Step 1: Benzene has six $sp^2$ carbons, each contributing one p orbital to the $\\pi$ system. Combining six atomic p orbitals yields six molecular orbitals.\nStep 2: Because of the hexagonal symmetry of benzene, the MOs are arranged as: one lowest energy bonding MO ($\\psi_1$), a degenerate pair of bonding MOs ($\\psi_2, \\psi_3$), a degenerate pair of antibonding MOs ($\\psi_4^*, \\psi_5^*$), and one highest energy antibonding MO ($\\psi_6^*$).",
      "result": "Benzene has 6 $\\pi$ MOs arranged as one bonding, two degenerate bonding, two degenerate antibonding, and one antibonding."
    }
  },
  {
    "question_id": "ch15_q14_frost_circle_construction",
    "topic": "Molecular Orbital Description of Benzene",
    "difficulty_level": "Medium",
    "question_text": "Which of the following correctly describes the execution of a 'Frost circle' (Frost-Musulin diagram) to determine the energy levels of a monocyclic, planar, conjugated polyene?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Draw a circle. Inscribe the regular polygon inside the circle with one vertex pointing directly down. The positions of the vertices correspond to the relative energy levels of the $\\pi$ MOs.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "Draw a circle. Inscribe the polygon with one side horizontal at the bottom. The midpoints of the sides correspond to the MO energy levels.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "Draw a circle, place the polygon inside with one vertex pointing directly up, and use the y-coordinates of the sides to find bonding vs. antibonding character.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "A graphical method that only works for benzene to calculate the overlap integral.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "The Frost circle is a useful mnemonic for qualitative MO energy levels of cyclic conjugated systems.",
      "process": "Step 1: To use the Frost circle, draw a circle and inscribe the polygon representing the ring system vertex-down.\nStep 2: The center of the circle represents the energy of an isolated p orbital (alpha). Vertices below the center are bonding MOs; vertices above are antibonding MOs; vertices on the center line are nonbonding MOs.\nStep 3: For benzene (a hexagon), the vertex-down arrangement yields one vertex at the bottom, two on the lower half, two on the upper half, and one at the top.",
      "result": "The polygon is inscribed vertex-down in a circle; vertices give the relative MO energies."
    }
  },
  {
    "question_id": "ch15_q15_mo_node_count",
    "topic": "Molecular Orbital Description of Benzene",
    "difficulty_level": "Hard",
    "question_text": "In the molecular orbital description of benzene, how many nodal planes perpendicular to the ring plane are present in the lowest energy bonding orbital ($\\psi_1$) and the highest energy antibonding orbital ($\\psi_6^*$), respectively?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "$\\psi_1$ has 0 nodal planes; $\\psi_6^*$ has 3 nodal planes.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "$\\psi_1$ has 1 nodal plane; $\\psi_6^*$ has 3 nodal planes.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "$\\psi_1$ has 0 nodal planes; $\\psi_6^*$ has 6 nodal planes.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "$\\psi_1$ has 2 nodal planes; $\\psi_6^*$ has 4 nodal planes.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question addresses the nodal properties of benzene $\\pi$ MOs.",
      "process": "Step 1: The lowest energy MO ($\\psi_1$) has all p orbitals in phase (all positive lobes up, negative lobes down). Thus, it has 0 vertical nodal planes (only the horizontal nodal plane in the molecular plane itself, which is common to all $\\pi$ orbitals).\nStep 2: As energy increases, the number of nodes increases. For the highest energy MO ($\\psi_6^*$), adjacent p orbitals are completely out of phase, creating a vertical nodal plane between every adjacent pair of carbons.\nStep 3: This results in 3 vertical nodal planes (passing through the bonds or atoms) for $\\psi_6^*$.",
      "result": "$\\psi_1$ has 0 vertical nodes, and $\\psi_6^*$ has 3 vertical nodes."
    }
  },
  {
    "question_id": "ch15_q16_mo_occupancy",
    "topic": "Molecular Orbital Description of Benzene",
    "difficulty_level": "Easy",
    "question_text": "In the ground state of benzene, how are the six $\\pi$ electrons distributed among the molecular orbitals?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Two electrons occupy the lowest-energy $\\psi_1$ orbital, and four electrons occupy the degenerate $\\psi_2$ and $\\psi_3$ orbitals.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "One electron occupies each of the six molecular orbitals $\\psi_1$ through $\\psi_6^*$.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "Two electrons occupy $\\psi_1$, two occupy $\\psi_2$, and two occupy the nonbonding $\\psi_3$ orbital.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "Two electrons occupy $\\psi_1$, two occupy $\\psi_2$, and two occupy the antibonding $\\psi_4^*$ orbital.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question tests electron distribution in the ground state MOs.",
      "process": "Step 1: Benzene has six $\\pi$ electrons.\nStep 2: According to the Aufbau principle, electrons fill the lowest energy MOs first.\nStep 3: The lowest is $\\psi_1$ (holds 2 electrons). The next higher energy orbitals are the degenerate pair $\\psi_2$ and $\\psi_3$, which together hold the remaining 4 electrons.",
      "result": "The six $\\pi$ electrons fully occupy the three bonding MOs ($\\psi_1, \\psi_2, \\psi_3$)."
    }
  },
  {
    "question_id": "ch15_q17_degenerate_orbitals_nodes",
    "topic": "Molecular Orbital Description of Benzene",
    "difficulty_level": "Hard",
    "question_text": "Consider the degenerate bonding molecular orbitals $\\psi_2$ and $\\psi_3$ of benzene. How do they differ in terms of their nodal planes and electron density distributions?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Both have exactly one vertical nodal plane, but these planes are perpendicular to each other; one nodal plane passes through two carbon atoms, while the other passes through two C-C bonds.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "$\\psi_2$ has zero vertical nodal planes, while $\\psi_3$ has one vertical nodal plane.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "$\\psi_2$ has one vertical nodal plane, while $\\psi_3$ has two vertical nodal planes.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "Both have two vertical nodal planes, but they are oriented at a $45^\\circ$ angle to each other.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question tests detailed knowledge of the degenerate bonding MOs in benzene.",
      "process": "Step 1: In the degenerate bonding pair, both orbitals must have the same energy and the same number of nodes (1 vertical node).\nStep 2: $\\psi_2$ has a nodal plane that bisects the ring, passing through C1 and C4. Thus, it has zero electron density at C1 and C4.\nStep 3: $\\psi_3$ has a nodal plane perpendicular to that of $\\psi_2$, passing between C2-C3 and C5-C6. This ensures the total electron density of $\\psi_2 + \\psi_3$ is cylindrically symmetric.",
      "result": "Both degenerate bonding MOs have 1 node, but their nodal planes are perpendicular."
    }
  },
  {
    "question_id": "ch15_q18_lumo_benzene",
    "topic": "Molecular Orbital Description of Benzene",
    "difficulty_level": "Medium",
    "question_text": "What is/are the Lowest Unoccupied Molecular Orbital(s) (LUMO) of benzene in its ground state?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "The degenerate pair of antibonding orbitals $\\psi_4^*$ and $\\psi_5^*$.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "The single highest energy antibonding orbital $\\psi_6^*$.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "The degenerate pair of bonding orbitals $\\psi_2$ and $\\psi_3$.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "A nonbonding orbital lying exactly at the zero-energy level.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "Identifying the LUMO of benzene is critical for understanding its redox chemistry and UV-Vis spectroscopy.",
      "process": "Step 1: The six $\\pi$ electrons fill $\\psi_1, \\psi_2,$ and $\\psi_3$ (which are the HOMOs).\nStep 2: The next energy level up consists of the degenerate pair $\\psi_4^*$ and $\\psi_5^*$.\nStep 3: Since these orbitals are empty in the ground state, they represent the LUMO.",
      "result": "The degenerate pair $\\psi_4^*$ and $\\psi_5^*$ represents the LUMO of benzene."
    }
  },

  # --- TOPIC 4: AROMATICITY CRITERIA & HUCKEL'S 4n+2 RULE (Q19-Q28) ---
  {
    "question_id": "ch15_q19_aromaticity_criteria",
    "topic": "Aromaticity Criteria",
    "difficulty_level": "Easy",
    "question_text": "Which of the following describes the complete set of criteria required for a compound to be classified as aromatic?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "The molecule must be cyclic, planar, completely conjugated (every ring atom must possess a p orbital), and contain $(4n+2)$ $\\pi$ electrons (where $n$ is an integer).",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "The molecule must be cyclic, planar, contain alternating single and double bonds, and contain $4n$ $\\pi$ electrons.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "The molecule must be cyclic, contain at least one heteroatom, have $sp^2$ hybridized atoms, and have an odd number of double bonds.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "The molecule must be a planar, fully conjugated monocyclic or polycyclic system with any number of $\\pi$ electrons.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question covers the four criteria of aromaticity.",
      "process": "Step 1: Cyclic - allows continuous loop of orbitals.\nStep 2: Planar - allows parallel alignment of p orbitals for overlap.\nStep 3: Completely conjugated - every ring atom must have a p orbital.\nStep 4: Hückel's Rule - the number of $\\pi$ electrons must equal $4n+2$, where $n = 0, 1, 2, \\dots$.",
      "result": "The correct criteria are cyclic, planar, completely conjugated, and $(4n+2)$ $\\pi$ electrons."
    }
  },
  {
    "question_id": "ch15_q20_annulene_10",
    "topic": "Aromaticity Criteria",
    "difficulty_level": "Medium",
    "question_text": "Why is [10]annulene (cyclodeca-1,3,5,7,9-pentaene) non-aromatic despite having 10 $\\pi$ electrons, which fits Hückel's $(4n+2)$ rule for $n=2$?",
    "question_smiles": "C1=CC=CC=CC=CC=C1",
    "options": [
      {
        "option_id": "A",
        "text": "Steric hindrance between the two internal hydrogens forces the ring to twist out of planarity, preventing effective parallel p-orbital overlap.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "It violates Hückel's rule because 10 $\\pi$ electrons is not a Hückel number.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "It is antiaromatic because it has a $4n$ number of $\\pi$ electrons.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "The ring is too small and suffers from excessive angle strain that prevents conjugation.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question highlights the planarity requirement for aromaticity.",
      "process": "Step 1: [10]annulene has 10 $\\pi$ electrons, satisfying Hückel's rule ($4(2)+2 = 10$).\nStep 2: In its monocyclic cis/trans isomer, two hydrogen atoms point inside the ring.\nStep 3: The steric clash between these internal hydrogens prevents the molecule from adopting a flat, planar conformation.\nStep 4: Without planarity, p-orbitals cannot align parallelly, and the compound is non-aromatic.",
      "result": "Steric clash of internal hydrogens forces a non-planar conformation, making it non-aromatic."
    }
  },
  {
    "question_id": "ch15_q21_cot_conformation",
    "topic": "Aromaticity Criteria",
    "difficulty_level": "Medium",
    "question_text": "Cyclooctatetraene (COT) has 8 $\\pi$ electrons. What conformation does it adopt, and how is it classified with respect to aromaticity?",
    "question_smiles": "C1=CC=CC=CC=C1",
    "options": [
      {
        "option_id": "A",
        "text": "It adopts a non-planar 'tub' conformation and is non-aromatic.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "It is planar and antiaromatic.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "It is planar and aromatic.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "It adopts a chair-like conformation and is antiaromatic.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question addresses cyclooctatetraene (COT) and the avoidance of antiaromaticity.",
      "process": "Step 1: COT has 8 $\\pi$ electrons ($4n$ where $n=2$). If it were planar, it would be antiaromatic (highly unstable).\nStep 2: To avoid this destabilization, the ring twists into a non-planar 'tub' conformation.\nStep 3: Because it is non-planar, there is no continuous conjugation, and it behaves like an ordinary polyene (non-aromatic).",
      "result": "COT adopts a non-planar 'tub' conformation and is non-aromatic."
    }
  },
  {
    "question_id": "ch15_q22_aromatic_vs_antiaromatic_vs_non",
    "topic": "Aromaticity Criteria",
    "difficulty_level": "Hard",
    "question_text": "Classify the following three compounds: benzene, cyclobutadiene (planar), and 1,3-cyclohexadiene.",
    "question_smiles": "C1=CC=C1",
    "options": [
      {
        "option_id": "A",
        "text": "Benzene is aromatic; cyclobutadiene is antiaromatic; 1,3-cyclohexadiene is non-aromatic.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "Benzene is aromatic; cyclobutadiene is non-aromatic; 1,3-cyclohexadiene is antiaromatic.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "Benzene is aromatic; cyclobutadiene is aromatic; 1,3-cyclohexadiene is non-aromatic.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "Benzene is antiaromatic; cyclobutadiene is aromatic; 1,3-cyclohexadiene is non-aromatic.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question tests the ability to distinguish between aromatic, antiaromatic, and non-aromatic compounds.",
      "process": "Step 1: Benzene is cyclic, planar, conjugated, and has 6 $\\pi$ electrons ($4n+2$). Hence, it is aromatic.\nStep 2: Cyclobutadiene is cyclic, planar, conjugated, and has 4 $\pi$ electrons ($4n$). Hence, it is antiaromatic.\nStep 3: 1,3-cyclohexadiene has an $sp^3$ carbon in the ring, interrupting the conjugation. Hence, it is non-aromatic.",
      "result": "Benzene: aromatic; Cyclobutadiene: antiaromatic; 1,3-cyclohexadiene: non-aromatic."
    }
  },
  {
    "question_id": "ch15_q23_huckel_definition_limits",
    "topic": "Aromaticity Criteria",
    "difficulty_level": "Easy",
    "question_text": "Hückel's $(4n+2)$ rule strictly applies to which class of compounds?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Monocyclic, planar, fully conjugated systems.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "All polycyclic aromatic hydrocarbons.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "Acyclic conjugated polyenes.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "Only heterocyclic compounds.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "Understanding the theoretical boundary conditions of Hückel's rule.",
      "process": "Step 1: Hückel's rule was derived using Hückel Molecular Orbital (HMO) theory specifically for monocyclic planar rings.\nStep 2: Polycyclic systems (like naphthalene) and heterocycles can be aromatic, but Hückel's rule is not strictly rigorous for them (though it often works qualitatively for polycyclics by counting the total $\\pi$ electrons).",
      "result": "Hückel's rule strictly applies to monocyclic, planar, fully conjugated systems."
    }
  },
  {
    "question_id": "ch15_q24_annulene_14",
    "topic": "Aromaticity Criteria",
    "difficulty_level": "Medium",
    "question_text": "What is the aromaticity classification of [14]annulene?",
    "question_smiles": "C1=CC=CC=CC=CC=CC=CC=C1",
    "options": [
      {
        "option_id": "A",
        "text": "Aromatic; it has 14 $\\pi$ electrons ($4n+2$ where $n=3$) and is flexible enough to maintain a planar conformation.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "Antiaromatic; it has 14 $\\pi$ electrons, which is a $4n$ number.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "Non-aromatic; it is non-planar due to extreme steric clash of internal hydrogens.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "Non-aromatic; it contains $sp^3$ hybridized carbons in the ring.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question covers [14]annulene, a larger annulene.",
      "process": "Step 1: [14]annulene has 14 $\\pi$ electrons, which fits $4n+2$ where $n=3$.\nStep 2: Unlike [10]annulene, [14]annulene is large enough that the cavity inside the ring allows the internal hydrogens to reside with less steric crowding.\nStep 3: This allows it to achieve a planar conformation and exhibit aromatic properties.",
      "result": "[14]annulene is aromatic."
    }
  },
  {
    "question_id": "ch15_q25_annulene_18",
    "topic": "Aromaticity Criteria",
    "difficulty_level": "Medium",
    "question_text": "Describe [18]annulene and its classification.",
    "question_smiles": "C1=CC=CC=CC=CC=CC=CC=CC=CC=C1",
    "options": [
      {
        "option_id": "A",
        "text": "Aromatic; it has 18 $\\pi$ electrons ($4n+2$ where $n=4$) and is a stable, planar molecule.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "Antiaromatic; it has 18 $\\pi$ electrons.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "Non-aromatic; it is too large to maintain conjugation.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "Non-aromatic; it does not contain a cyclic loop of p orbitals.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "Evaluating large annulenes.",
      "process": "Step 1: [18]annulene has 18 $\\pi$ electrons, satisfying Hückel's rule for $n=4$.\nStep 2: The ring is large and has negligible steric hindrance from internal hydrogens, allowing it to be planar.\nStep 3: NMR shows distinct interior and exterior hydrogen chemical shifts, confirming a ring current (aromaticity).",
      "result": "[18]annulene is aromatic."
    }
  },
  {
    "question_id": "ch15_q26_antiaromaticity_criteria",
    "topic": "Aromaticity Criteria",
    "difficulty_level": "Medium",
    "question_text": "Which of the following describes the thermodynamic stability and electronic configuration of a planar, cyclic, conjugated molecule with $4n$ $\\pi$ electrons?",
    "question_smiles": "C1=CC=C1",
    "options": [
      {
        "option_id": "A",
        "text": "It is antiaromatic and represents a highly unstable state, typically containing unpaired electrons in degenerate orbitals (a diradical state) if forced planar.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "It is non-aromatic, meaning its stability is equal to its open-chain counterpart.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "It is aromatic because the conjugation provides stabilization.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "It is stable because all of its bonding molecular orbitals are completely filled.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question explores the theoretical basis of antiaromaticity.",
      "process": "Step 1: Planar, cyclic, conjugated systems with $4n$ $\\pi$ electrons have a molecular orbital diagram where the last two electrons must occupy a degenerate pair of nonbonding molecular orbitals (per Hund's rule).\nStep 2: This creates a diradical electronic state in the planar geometry, making it highly unstable.\nStep 3: Consequently, such systems are called antiaromatic.",
      "result": "Antiaromatic compounds are highly unstable and often have diradical character if forced planar."
    }
  },
  {
    "question_id": "ch15_q27_p_orbital_check",
    "topic": "Aromaticity Criteria",
    "difficulty_level": "Easy",
    "question_text": "Why is 1,3,5-cycloheptatriene classified as non-aromatic?",
    "question_smiles": "C1=CC=CC=CC1",
    "options": [
      {
        "option_id": "A",
        "text": "It contains an $sp^3$ hybridized carbon ($CH_2$) in the ring, which lacks a p orbital, breaking the continuous conjugate loop.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "It has 6 $\\pi$ electrons, which is a $4n$ number.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "The ring is too strained to be planar.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "It is antiaromatic because it has 8 $\\pi$ electrons.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "Checking the requirement for a continuous ring of p-orbitals.",
      "process": "Step 1: Check the hybridization of all atoms in the ring.\nStep 2: Six of the carbons in 1,3,5-cycloheptatriene are $sp^2$ hybridized, but one carbon is $sp^3$ hybridized (-CH2-).\nStep 3: Because the $sp^3$ carbon has no unhybridized p orbital, the conjugation is not cyclic (continuous). Hence, it is non-aromatic.",
      "result": "The presence of an $sp^3$ carbon breaks conjugation, making the molecule non-aromatic."
    }
  },
  {
    "question_id": "ch15_q28_dewar_benzene",
    "topic": "Aromaticity Criteria",
    "difficulty_level": "Medium",
    "question_text": "What is the aromaticity classification of Dewar benzene (bicyclo[2.2.0]hexa-2,5-diene)?",
    "question_smiles": "C1=CC2C1C=C2",
    "options": [
      {
        "option_id": "A",
        "text": "Non-aromatic; it has two isolated alkene double bonds and lacks a continuous cyclic conjugation of p orbitals.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "Aromatic; it is an isomer of benzene with 6 $\\pi$ electrons.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "Antiaromatic; it has 4 $\\pi$ electrons in a cyclic system.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "Aromatic; it can easily interconvert to benzene at room temperature.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "Distinguishing between constitutional isomers of benzene and aromaticity.",
      "process": "Step 1: Dewar benzene contains two double bonds, but they are in a bicyclic system.\nStep 2: The bridgehead carbons are $sp^3$ hybridized and break any possible monocyclic conjugation.\nStep 3: The double bonds are isolated from each other. Thus, it is non-aromatic.",
      "result": "Dewar benzene is non-aromatic because it lacks continuous cyclic conjugation."
    }
  },

  # --- TOPIC 5: AROMATIC IONS (Q29-Q36) ---
  {
    "question_id": "ch15_q29_cyclopropenyl_cation",
    "topic": "Aromatic Ions",
    "difficulty_level": "Medium",
    "question_text": "The cyclopropenyl cation is the smallest aromatic system. Why is it stable?",
    "question_smiles": "C1=C[CH+]1",
    "options": [
      {
        "option_id": "A",
        "text": "It is cyclic, planar, fully conjugated, and has 2 $\\pi$ electrons ($4n+2$ where $n=0$).",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "It is stabilized by the positive charge being localized on a single carbon atom.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "It has 4 $\\pi$ electrons, satisfying Hückel's rule.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "The ring strain is relieved by the planar structure.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "Understanding the cyclopropenyl cation.",
      "process": "Step 1: The cyclopropenyl cation is a three-membered ring.\nStep 2: Two carbons are $sp^2$ hybridized (double bond), and the third is a carbocation (also $sp^2$ hybridized, with an empty p orbital).\nStep 3: This allows a continuous loop of three p orbitals.\nStep 4: The double bond contributes 2 $\pi$ electrons. 2 is a Hückel number ($4(0)+2 = 2$). Thus, it is aromatic.",
      "result": "The cyclopropenyl cation is aromatic with 2 $\pi$ electrons."
    }
  },
  {
    "question_id": "ch15_q30_cyclopropenyl_anion",
    "topic": "Aromatic Ions",
    "difficulty_level": "Medium",
    "question_text": "What is the classification of the cyclopropenyl anion?",
    "question_smiles": "C1=C[CH-]1",
    "options": [
      {
        "option_id": "A",
        "text": "Antiaromatic; it is cyclic, planar, conjugated, and has 4 $\pi$ electrons ($4n$ where $n=1$).",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "Aromatic; it has 4 $\pi$ electrons.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "Non-aromatic; it has an $sp^3$ carbon.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "Aromatic; it has 6 $\pi$ electrons due to the lone pair.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "Comparing cyclopropenyl cation and anion.",
      "process": "Step 1: The cyclopropenyl anion has a carbanion carbon with a lone pair in addition to the C=C double bond.\nStep 2: If the lone pair occupies a p orbital to allow conjugation, the system has 4 $\pi$ electrons (2 from the double bond + 2 from the lone pair).\nStep 3: A planar, conjugated 4 $\pi$ system is antiaromatic (highly unstable).",
      "result": "The cyclopropenyl anion is antiaromatic."
    }
  },
  {
    "question_id": "ch15_q31_cyclopentadienyl_anion_acidity",
    "topic": "Aromatic Ions",
    "difficulty_level": "Medium",
    "question_text": "Cyclopentadiene has an unusually low $pK_a$ of 16 compared to cyclopentane ($pK_a > 50$). What is the reason for this high acidity?",
    "question_smiles": "C1=CC=CC1",
    "options": [
      {
        "option_id": "A",
        "text": "Loss of a proton from the $sp^3$ carbon generates the cyclopentadienyl anion, which is a highly stable aromatic system with 6 $\pi$ electrons.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "Cyclopentadiene is antiaromatic, and deprotonation makes it non-aromatic.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "The conjugate base is stabilized by inductive electron withdrawal of the two double bonds.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "The C-H bond of cyclopentadiene is weak because of the small size of the ring.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question connects acidity to aromaticity.",
      "process": "Step 1: Deprotonation of cyclopentadiene removes a proton ($H^+$) from the $sp^3$ carbon ($CH_2$).\nStep 2: The remaining carbon becomes $sp^2$ hybridized and houses its lone pair in a p orbital.\nStep 3: This completes the ring of p orbitals. The $\pi$ electrons now total 6 (4 from the two double bonds + 2 from the lone pair).\nStep 4: A 6 $\pi$ system is aromatic, which provides a massive thermodynamic driving force for proton loss.",
      "result": "Deprotonation yields the stable, aromatic cyclopentadienyl anion ($6\\pi$ electrons)."
    }
  },
  {
    "question_id": "ch15_q32_cyclopentadienyl_cation",
    "topic": "Aromatic Ions",
    "difficulty_level": "Medium",
    "question_text": "Why is the cyclopentadienyl cation extremely unstable and difficult to prepare?",
    "question_smiles": "C1=CC=C[CH+]1",
    "options": [
      {
        "option_id": "A",
        "text": "It is antiaromatic, having 4 $\pi$ electrons in a planar, cyclic, conjugated ring.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "The carbocation cannot be stabilized by resonance.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "It is non-aromatic because of the $sp^3$ carbon.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "The five-membered ring has too much angle strain to accommodate a carbocation.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "Exploring the cyclopentadienyl cation.",
      "process": "Step 1: The cyclopentadienyl cation is formed by removing a hydride ion ($H^-$) or leaving group from cyclopentadiene.\nStep 2: The positive carbon has an empty p orbital, completing the conjugation.\nStep 3: The total number of $\pi$ electrons is 4 (from the two double bonds).\nStep 4: A cyclic, planar, conjugated 4 $\pi$ system is antiaromatic, hence extremely unstable.",
      "result": "The cyclopentadienyl cation is antiaromatic and highly unstable."
    }
  },
  {
    "question_id": "ch15_q33_tropylium_cation",
    "topic": "Aromatic Ions",
    "difficulty_level": "Easy",
    "question_text": "The cycloheptatrienyl cation is commonly known as the tropylium cation. What is its classification and why?",
    "question_smiles": "C1=CC=C[CH+]C=C1",
    "options": [
      {
        "option_id": "A",
        "text": "Aromatic; it is cyclic, planar, fully conjugated, and has 6 $\pi$ electrons.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "Antiaromatic; it has 8 $\pi$ electrons.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "Non-aromatic; the 7-membered ring is non-planar due to angle strain.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "Non-aromatic; it contains an $sp^3$ hybridized carbon.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "Understanding the tropylium cation.",
      "process": "Step 1: The tropylium cation has 7 carbons in a ring, each of which is $sp^2$ hybridized (6 from double bonds, 1 carbocation with an empty p orbital).\nStep 2: The system is cyclic, planar, and fully conjugated.\nStep 3: The three double bonds contribute 6 $\pi$ electrons ($4n+2$ where $n=1$).\nStep 4: It is therefore aromatic and highly stable.",
      "result": "The tropylium cation is aromatic with 6 $\pi$ electrons."
    }
  },
  {
    "question_id": "ch15_q34_cycloheptatrienyl_anion",
    "topic": "Aromatic Ions",
    "difficulty_level": "Medium",
    "question_text": "How does the cycloheptatrienyl anion differ from the tropylium cation?",
    "question_smiles": "C1=CC=C[CH-]C=C1",
    "options": [
      {
        "option_id": "A",
        "text": "The tropylium cation is aromatic with 6 $\pi$ electrons; the cycloheptatrienyl anion has 8 $\pi$ electrons and is antiaromatic if planar.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "The cation is antiaromatic; the anion is aromatic.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "Both are aromatic because they contain 6 and 8 $\pi$ electrons respectively.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "Both are non-aromatic due to the 7-membered ring structure.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "Comparing tropylium cation and cycloheptatrienyl anion.",
      "process": "Step 1: The tropylium cation has 6 $\pi$ electrons and is aromatic.\nStep 2: The cycloheptatrienyl anion has a carbanion carbon with a lone pair in a p orbital, totaling 8 $\pi$ electrons (6 from double bonds + 2 from lone pair).\nStep 3: 8 $\pi$ electrons is a $4n$ number ($n=2$), making the planar conformation antiaromatic. (In reality, it adopts a non-planar conformation to avoid antiaromaticity, making it non-aromatic).",
      "result": "The cation is aromatic ($6\\pi$); the anion has 8 $\pi$ electrons and is antiaromatic/non-aromatic."
    }
  },
  {
    "question_id": "ch15_q35_cyclooctatetraenyl_dianion",
    "topic": "Aromatic Ions",
    "difficulty_level": "Hard",
    "question_text": "When cyclooctatetraene (COT) is treated with potassium metal, it forms a stable dianion ($C_8H_8^{2-}$). What chemical change occurs?",
    "question_smiles": "C1=CC=CC=CC=C1",
    "options": [
      {
        "option_id": "A",
        "text": "Potassium reduces COT by donating two electrons, forming a planar 10 $\pi$ electron aromatic dianion.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "Potassium acts as a Lewis acid to coordinate to the neutral COT ring.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "The ring is oxidized to form a dication with 6 $\pi$ electrons.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "The dianion remains in a tub conformation and is antiaromatic.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question addresses the conversion of a non-aromatic molecule into an aromatic ion.",
      "process": "Step 1: Neutral COT has 8 $\pi$ electrons and is non-planar (non-aromatic).\nStep 2: Treatment with potassium metal (a strong reducing agent) adds two electrons, giving a dianion with 10 $\pi$ electrons.\nStep 3: 10 $\pi$ electrons satisfies Hückel's rule ($4n+2$ where $n=2$).\nStep 4: The ring flattens into a planar conformation to gain aromatic stabilization.",
      "result": "The COT dianion is planar and aromatic with 10 $\pi$ electrons."
    }
  },
  {
    "question_id": "ch15_q36_calicene_dipole",
    "topic": "Aromatic Ions",
    "difficulty_level": "Hard",
    "question_text": "Calicene (shown below) has a remarkably high dipole moment of 4.6 D for a hydrocarbon. Which resonance description best explains this polarity?",
    "question_smiles": "C1=CC=C(C2=CC2)C1",
    "options": [
      {
        "option_id": "A",
        "text": "A major dipolar resonance contributor consists of a cyclopentadienyl anion (aromatic $6\\pi$ system) linked to a cyclopropenyl cation (aromatic $2\\pi$ system).",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "The cyclopropene ring is negatively charged and the cyclopentadiene ring is positively charged.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "The molecule is highly polarized because of the electronegativity difference between $sp^2$ and $sp^3$ carbons.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "The double bond between the two rings is homolytically cleaved into two radicals.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question tests the application of aromaticity to dipolar resonance forms.",
      "process": "Step 1: If we polarize the central exocyclic double bond, we can place the negative charge on the 5-membered ring and the positive charge on the 3-membered ring.\nStep 2: The 5-membered ring becomes a cyclopentadienyl anion, which has 6 $\pi$ electrons and is aromatic.\nStep 3: The 3-membered ring becomes a cyclopropenyl cation, which has 2 $\pi$ electrons and is also aromatic.\nStep 4: Because both rings gain aromatic stabilization in this dipolar form, this resonance structure contributes significantly to the ground state hybrid, resulting in a large dipole moment.",
      "result": "The large dipole moment arises from the stable aromaticity of both the cyclopropenyl cation and cyclopentadienyl anion parts."
    }
  },

  # --- TOPIC 6: AROMATIC HETEROCYCLES (Q37-Q44) ---
  {
    "question_id": "ch15_q37_pyridine_lone_pair",
    "topic": "Aromatic Heterocycles",
    "difficulty_level": "Easy",
    "question_text": "Pyridine is basic ($pK_a = 5.25$), whereas pyrrole is extremely weakly basic ($pK_a = -3.8$). Why is there such a massive difference in basicity?",
    "question_smiles": "c1ccncc1",
    "options": [
      {
        "option_id": "A",
        "text": "The nitrogen lone pair in pyridine resides in an $sp^2$ orbital in the plane of the ring and is not part of the aromatic system; in pyrrole, the nitrogen lone pair is in a p orbital and is required to complete the 6 $\pi$ aromatic system.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "Pyridine is more basic because nitrogen is $sp^3$ hybridized.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "Pyrrole is less basic because its conjugate acid is aromatic.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "The lone pair in pyridine is part of the aromatic system, which stabilizes the conjugate acid.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question contrasts the basicity of pyridine and pyrrole based on lone pair availability.",
      "process": "Step 1: In pyridine, nitrogen is $sp^2$ hybridized. It contributes 1 electron to the aromatic $\pi$ system from its p orbital. Its lone pair is in an $sp^2$ orbital perpendicular to the p system (in the ring plane). Thus, the lone pair is available for protonation without destroying aromaticity.\nStep 2: In pyrrole, nitrogen is also $sp^2$ hybridized. To make the ring aromatic, nitrogen must contribute both electrons of its lone pair (in a p orbital) to the $\pi$ system (completing the 6 $\pi$ count). Protonation of this lone pair destroys the aromaticity, which is thermodynamically highly unfavorable.",
      "result": "Pyridine's lone pair is not part of the aromatic system, making it much more basic than pyrrole."
    }
  },
  {
    "question_id": "ch15_q38_pyrrole_structure",
    "topic": "Aromatic Heterocycles",
    "difficulty_level": "Easy",
    "question_text": "What is the hybridization and orbital occupancy of the nitrogen atom in pyrrole?",
    "question_smiles": "c1cc[nH]c1",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^2$ hybridized; the nitrogen lone pair occupies a p orbital perpendicular to the ring plane.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "$sp^3$ hybridized; the nitrogen lone pair occupies an $sp^3$ orbital.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "$sp^2$ hybridized; the nitrogen lone pair occupies an $sp^2$ orbital in the plane of the ring.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "$sp$ hybridized; the nitrogen lone pair occupies a p orbital.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "Understanding the geometry and orbital structure of pyrrole.",
      "process": "Step 1: Pyrrole is a flat, 5-membered aromatic heterocycle.\nStep 2: The nitrogen atom forms three $\\sigma$ bonds (to two carbons and one hydrogen).\nStep 3: To allow aromaticity, the nitrogen lone pair must reside in a p orbital perpendicular to the ring to overlap with the four p orbitals of the carbons, making a total of 6 $\pi$ electrons. This requires the nitrogen to be $sp^2$ hybridized.",
      "result": "The nitrogen is $sp^2$ hybridized with the lone pair in a p orbital."
    }
  },
  {
    "question_id": "ch15_q39_furan_lone_pairs",
    "topic": "Aromatic Heterocycles",
    "difficulty_level": "Medium",
    "question_text": "Furan has two lone pairs on the oxygen atom. How do they participate in the electronic structure of the molecule?",
    "question_smiles": "c1ccoc1",
    "options": [
      {
        "option_id": "A",
        "text": "One lone pair is in a p orbital perpendicular to the ring plane, contributing to the 6 $\pi$ aromatic system; the other lone pair is in an $sp^2$ orbital in the plane of the ring and is not part of the $\pi$ system.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "Both lone pairs are in p orbitals perpendicular to the ring, making it a 10 $\pi$ aromatic system.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "Both lone pairs are in $sp^2$ orbitals and do not participate in aromaticity.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "One lone pair is in a d orbital and the other is in a p orbital.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question addresses heterocycles with multiple lone pairs on a single heteroatom.",
      "process": "Step 1: Oxygen in furan is $sp^2$ hybridized to allow aromaticity.\nStep 2: One lone pair resides in a p orbital perpendicular to the ring. Together with the 4 electrons from the two double bonds, this completes the 6 $\pi$ electron requirement.\nStep 3: The second lone pair resides in an $sp^2$ hybrid orbital that lies in the plane of the ring. This lone pair cannot overlap with the $\pi$ system and does not contribute to aromaticity.",
      "result": "Only one oxygen lone pair is part of the aromatic $\pi$ system; the other is in an $sp^2$ orbital."
    }
  },
  {
    "question_id": "ch15_q40_thiophene_vs_furan",
    "topic": "Aromatic Heterocycles",
    "difficulty_level": "Medium",
    "question_text": "Why does thiophene have a higher resonance energy (is more aromatic) than furan?",
    "question_smiles": "c1ccsc1",
    "options": [
      {
        "option_id": "A",
        "text": "Sulfur is less electronegative than oxygen, so it holds its lone pair less tightly, allowing more effective $\pi$ delocalization.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "Sulfur uses its 3d orbitals to expand its octet and create a 10 $\pi$ system.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "The C-S bond is shorter than the C-O bond, allowing better overlap.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "Thiophene is a 6-membered ring whereas furan is a 5-membered ring.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "Comparing aromatic stabilization energy in different heterocycles.",
      "process": "Step 1: Both thiophene and furan are 5-membered heterocycles with 6 $\pi$ electrons.\nStep 2: Oxygen is highly electronegative (3.44) and holds its lone pair tightly, resisting delocalization.\nStep 3: Sulfur is less electronegative (2.58) and more polarizable, which leads to better sharing of the lone pair into the ring and a higher resonance energy.",
      "result": "The lower electronegativity of sulfur results in greater resonance stabilization."
    }
  },
  {
    "question_id": "ch15_q41_imidazole_protonation",
    "topic": "Aromatic Heterocycles",
    "difficulty_level": "Hard",
    "question_text": "Imidazole contains two nitrogen atoms: N1 (with the hydrogen attached) and N3 (the double-bonded nitrogen). Which nitrogen is protonated first, and why?",
    "question_smiles": "c1c[nH]cn1",
    "options": [
      {
        "option_id": "A",
        "text": "N3 is protonated because its lone pair resides in an $sp^2$ orbital in the plane of the ring and is not part of the aromatic system; protonating N3 preserves the aromaticity.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "N1 is protonated because its lone pair is in a p orbital, making it more basic.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "Both nitrogens are equally basic, resulting in a mixture of protonated species.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "Protonation occurs on the carbon atom between the two nitrogens due to resonance stabilization.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "Understanding basicity in heterocycles with multiple nitrogen atoms.",
      "process": "Step 1: Identify the hybridization and lone pair location for both nitrogens.\nStep 2: N1 is like pyrrole: its lone pair is in a p orbital perpendicular to the ring, contributing to the 6 $\pi$ aromatic system. Protonating N1 destroys aromaticity.\nStep 3: N3 is like pyridine: its lone pair is in an $sp^2$ orbital in the plane of the ring and is not part of the $\pi$ system. Protonation of N3 yields a symmetric, resonance-stabilized imidazolium cation that remains aromatic.",
      "result": "N3 is protonated because its lone pair is not part of the aromatic system, and protonation preserves aromaticity."
    }
  },
  {
    "question_id": "ch15_q42_indole_aromaticity",
    "topic": "Aromatic Heterocycles",
    "difficulty_level": "Medium",
    "question_text": "Which of the following describes the aromatic system of indole?",
    "question_smiles": "c1ccc2[nH]ccc2c1",
    "options": [
      {
        "option_id": "A",
        "text": "A 10 $\pi$ electron aromatic system consisting of a benzene ring fused to a pyrrole ring, where the nitrogen lone pair participates in the $\pi$ system.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "A 12 $\pi$ electron system because the nitrogen lone pair and the double bonds are all conjugated.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "An 8 $\pi$ electron system that is antiaromatic in its ground state.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "A system consisting of a separate 6 $\pi$ benzene ring and a non-aromatic pyrrole ring.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "Understanding polycyclic heterocycles.",
      "process": "Step 1: Indole consists of a 6-membered benzene ring fused to a 5-membered pyrrole ring.\nStep 2: Count the $\pi$ electrons: 6 from the benzene ring (including the shared double bond) and 2 from the pyrrole double bond, plus 2 from the nitrogen lone pair.\nStep 3: This totals 10 $\pi$ electrons, which satisfies $(4n+2)$ for $n=2$.\nStep 4: The entire bicyclic system is conjugated, planar, and aromatic.",
      "result": "Indole is a 10 $\pi$ electron aromatic system."
    }
  },
  {
    "question_id": "ch15_q43_pyrrole_electrophilic_substitution",
    "topic": "Aromatic Heterocycles",
    "difficulty_level": "Hard",
    "question_text": "Pyrrole undergoes electrophilic aromatic substitution (EArS) preferentially at the C2 ($\\alpha$) position rather than the C3 ($\\beta$) position. What is the mechanistic explanation for this regioselectivity?",
    "question_smiles": "c1cc[nH]c1",
    "options": [
      {
        "option_id": "A",
        "text": "Substitution at C2 leads to an intermediate carbocation with three resonance contributors, whereas substitution at C3 leads to an intermediate with only two resonance contributors.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "Substitution at C3 is sterically hindered by the hydrogen on the nitrogen atom.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "The nitrogen atom directs electrophiles to the C2 position via its inductive electron-withdrawing effect.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "The C3 position is more electronegative than the C2 position, resisting electrophile attack.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question addresses the regiochemistry of EArS on pyrrole.",
      "process": "Step 1: Write the mechanism for electrophile ($E^+$) addition at C2. The positive charge in the intermediate carbocation can be delocalized onto C3, C5, and the nitrogen (three resonance structures).\nStep 2: Write the mechanism for addition at C3. The positive charge can only be delocalized onto C2 and the nitrogen (two resonance structures).\nStep 3: Since the transition state leading to the C2-substituted intermediate is lower in energy due to greater charge delocalization, the C2 product is formed preferentially.",
      "result": "C2 substitution is preferred because its carbocation intermediate has more resonance stabilization (3 structures vs. 2)."
    }
  },
  {
    "question_id": "ch15_q44_pyridine_electrophilic_substitution",
    "topic": "Aromatic Heterocycles",
    "difficulty_level": "Hard",
    "question_text": "Why is pyridine highly unreactive toward electrophilic aromatic substitution (EArS) compared to benzene, and where does substitution occur if forced under harsh conditions?",
    "question_smiles": "c1ccncc1",
    "options": [
      {
        "option_id": "A",
        "text": "The electronegative nitrogen withdraws electron density inductively and by resonance, and reacts with the electrophile or acid to form a positively charged pyridinium ion; substitution is directed to the C3 (meta) position.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "The nitrogen activates the C2 and C4 positions, but makes them stericly blocked; substitution occurs at C3.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "The nitrogen is electron-donating by resonance, but the ring undergoes addition instead of substitution.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "Pyridine is completely inert to EArS because it lacks C-H bonds at the active positions.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "EArS reactivity of pyridine.",
      "process": "Step 1: Nitrogen is highly electronegative and withdraws electron density, strongly deactivating the ring.\nStep 2: In acidic EArS conditions, the basic nitrogen is protonated or coordinates to the electrophile, forming a pyridinium cation, which is even more deactivated.\nStep 3: If forced to react, substitution occurs at C3 because attack at C2 or C4 would place the positive charge directly on the electronegative nitrogen in one of the resonance structures, which is highly unstable.",
      "result": "Pyridine is deactivated and undergoes substitution at the C3 (meta) position under harsh conditions."
    }
  },

  # --- TOPIC 7: POLYCYCLIC AROMATIC HYDROCARBONS (Q45-Q50) ---
  {
    "question_id": "ch15_q45_naphthalene_resonance_energy",
    "topic": "Polycyclic Aromatic Hydrocarbons",
    "difficulty_level": "Medium",
    "question_text": "The resonance stabilization energy of benzene is 152 kJ/mol, while that of naphthalene is 252 kJ/mol. Why is the resonance energy of naphthalene less than twice that of benzene?",
    "question_smiles": "c1ccc2ccccc2c1",
    "options": [
      {
        "option_id": "A",
        "text": "The two rings share a common carbon-carbon bond, meaning the two aromatic systems are not independent and cannot both have full individual benzene resonance stabilization simultaneously.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "Naphthalene is antiaromatic and therefore undergoes destabilization.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "Naphthalene is non-planar, which decreases the orbital overlap between the rings.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "The central bond in naphthalene is a single bond, preventing resonance between the two rings.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "Understanding the resonance energy of polycyclic aromatic hydrocarbons.",
      "process": "Step 1: Benzene has a resonance energy of 152 kJ/mol.\nStep 2: Naphthalene consists of two fused rings. If they were independent, the resonance energy would be 2 * 152 = 304 kJ/mol.\nStep 3: However, because they share a C-C double bond, we cannot draw a resonance contributor where both rings are simultaneously identical to benzene. The delocalization is shared across the 10-carbon system, resulting in a lower resonance energy of 252 kJ/mol.",
      "result": "The shared central bond prevents the two rings from acting as independent, fully stabilized benzene rings."
    }
  },
  {
    "question_id": "ch15_q46_naphthalene_substitution",
    "topic": "Polycyclic Aromatic Hydrocarbons",
    "difficulty_level": "Hard",
    "question_text": "Naphthalene undergoes electrophilic aromatic substitution preferentially at the C1 ($\\alpha$) position over the C2 ($\\beta$) position. What is the thermodynamic/kinetic basis for this regioselectivity?",
    "question_smiles": "c1ccc2ccccc2c1",
    "options": [
      {
        "option_id": "A",
        "text": "Electrophilic attack at C1 yields an intermediate carbocation with two resonance structures that preserve a fully intact benzene ring; attack at C2 yields an intermediate with only one such structure.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "The C1 position is less sterically hindered than the C2 position.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "The C2 position places the positive charge on the bridgehead carbon, which violates Bredt's rule.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "The C1 position is more nucleophilic because it is directly bonded to the bridgehead carbon.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "Regiochemical preference of naphthalene in EArS.",
      "process": "Step 1: Draw the carbocation intermediate for attack at C1. The positive charge is delocalized, and we can write 5 resonance structures. In 2 of these structures, the second ring remains a fully intact benzene ring (aromatic stabilization is preserved in that ring).\nStep 2: Draw the carbocation intermediate for attack at C2. We can also write 5 resonance structures, but in only 1 of these structures does the second ring remain a fully intact benzene ring.\nStep 3: The C1-substituted intermediate is more stable because it preserves more aromatic character in the non-reacting ring during the reaction.",
      "result": "C1 substitution is preferred because the intermediate has more resonance contributors that preserve a benzene ring."
    }
  },
  {
    "question_id": "ch15_q47_anthracene_vs_phenanthrene",
    "topic": "Polycyclic Aromatic Hydrocarbons",
    "difficulty_level": "Hard",
    "question_text": "Anthracene and phenanthrene are constitutional isomers containing three fused benzene rings. Which isomer is more stable and why?",
    "question_smiles": "c1ccc2cc3ccccc3cc2c1",
    "options": [
      {
        "option_id": "A",
        "text": "Phenanthrene is more stable because its angular structure allows it to have resonance contributors with more intact benzene rings (aromatic sextets) than the linear structure of anthracene.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "Anthracene is more stable because its linear structure minimizes steric hindrance between the hydrogens.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "Both isomers have identical stability because they have the same molecular formula and the same number of double bonds.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "Anthracene is more stable because its high symmetry leads to greater entropy of stabilization.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "Comparing linear and angular polycyclic aromatic hydrocarbons.",
      "process": "Step 1: Anthracene is linear, and phenanthrene is angular.\nStep 2: According to Clar's Sextet Rule, the stability of polycyclic aromatic hydrocarbons can be predicted by the number of disjoint aromatic sextets (benzene-like rings) that can be drawn in a resonance contributor.\nStep 3: For phenanthrene, we can draw a resonance structure with two separate aromatic sextets (the two outer rings). For anthracene, we can only draw structures with one aromatic sextet.\nStep 4: This makes phenanthrene more stable (resonance energy = 381 kJ/mol) than anthracene (resonance energy = 347 kJ/mol).",
      "result": "Phenanthrene is more stable than anthracene due to its angular geometry, which accommodates more aromatic sextets."
    }
  },
  {
    "question_id": "ch15_q48_anthracene_addition",
    "topic": "Polycyclic Aromatic Hydrocarbons",
    "difficulty_level": "Hard",
    "question_text": "Anthracene undergoes addition reactions (such as Diels-Alder reactions or electrophilic additions) much more readily than benzene. At which positions does addition occur, and what is the driving force?",
    "question_smiles": "c1ccc2cc3ccccc3cc2c1",
    "options": [
      {
        "option_id": "A",
        "text": "Addition occurs at C9 and C10 (the middle ring) because this leaves two separate, fully aromatic benzene rings (total resonance energy = 304 kJ/mol), which is thermodynamically very favorable.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "Addition occurs at C1 and C4 because they are the most reactive double bonds.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "Addition occurs at the bridgehead carbons (C4a and C8a) to relieve ring strain.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "Anthracene does not undergo addition reactions because it is aromatic and behaves exactly like benzene.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "Understanding addition reactions in polycyclic aromatic hydrocarbons.",
      "process": "Step 1: Anthracene has a resonance energy of 347 kJ/mol.\nStep 2: If an addition reaction occurs at the C9 and C10 positions of the middle ring, the middle ring loses its conjugation, but the two outer rings become independent benzene rings.\nStep 3: Two independent benzene rings have a combined resonance energy of 2 * 152 = 304 kJ/mol.\nStep 4: The net loss of resonance energy is only 347 - 304 = 43 kJ/mol, which is very small. This explains why anthracene behaves as a diene in Diels-Alder reactions and easily undergoes additions at the 9,10-positions.",
      "result": "Addition occurs at C9/C10 because it preserves two fully aromatic benzene rings, minimizing the loss of resonance energy."
    }
  },
  {
    "question_id": "ch15_q49_azulene_dipole",
    "topic": "Polycyclic Aromatic Hydrocarbons",
    "difficulty_level": "Hard",
    "question_text": "Azulene is a beautiful blue hydrocarbon that is a structural isomer of naphthalene. Unlike naphthalene, azulene has a substantial dipole moment of 1.08 D. How can this polarity be explained?",
    "question_smiles": "C1=CC=CC2=CC=CC12",
    "options": [
      {
        "option_id": "A",
        "text": "Azulene has a major resonance contributor in which the 7-membered ring carries a positive charge (aromatic tropylium cation) and the 5-membered ring carries a negative charge (aromatic cyclopentadienyl anion).",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "Azulene is polar due to the presence of an $sp^3$ hybridized carbon in the 5-membered ring.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "The dipole moment is caused by the steric repulsion between the rings forcing the molecule into a polar envelope conformation.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "The dipole moment is due to the presence of alternating single and double bonds in a non-conjugated system.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "Azulene's unusual properties explained by aromaticity.",
      "process": "Step 1: Azulene is a fused system of a 5-membered ring and a 7-membered ring.\nStep 2: By shifting one pair of $\\pi$ electrons from the 7-membered ring to the 5-membered ring, we can draw a zwitterionic resonance contributor.\nStep 3: In this resonance contributor, the 7-membered ring has 6 $\pi$ electrons (tropylium cation, aromatic) and the 5-membered ring has 6 $\pi$ electrons (cyclopentadienyl anion, aromatic).\nStep 4: The stabilization gained by having two aromatic rings makes this zwitterionic structure contribute significantly to the resonance hybrid, leading to a large dipole moment with the negative end on the 5-membered ring.",
      "result": "The dipole moment is due to a resonance contributor containing a tropylium cation and a cyclopentadienyl anion."
    }
  },
  {
    "question_id": "ch15_q50_huckel_rule_polycyclic",
    "topic": "Polycyclic Aromatic Hydrocarbons",
    "difficulty_level": "Medium",
    "question_text": "Does Hückel's $(4n+2)$ rule strictly apply to polycyclic aromatic hydrocarbons like naphthalene, anthracene, and phenanthrene?",
    "question_smiles": "c1ccc2ccccc2c1",
    "options": [
      {
        "option_id": "A",
        "text": "No, Hückel's rule strictly applies only to monocyclic systems, although naphthalene (10 $\\pi$ electrons) and anthracene (14 $\\pi$ electrons) happen to fit the $(4n+2)$ formula numerically.",
        "smiles": "",
        "is_correct": True
      },
      {
        "option_id": "B",
        "text": "Yes, Hückel's rule is a universal law that applies to all planar conjugated systems, regardless of the number of rings.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "C",
        "text": "No, Hückel's rule applies only to heterocyclic systems.",
        "smiles": "",
        "is_correct": False
      },
      {
        "option_id": "D",
        "text": "Yes, because all polycyclic systems are classified by their Clar structures rather than the number of $\\pi$ electrons.",
        "smiles": "",
        "is_correct": False
      }
    ],
    "feedback": {
      "context": "This question clarifies the limits of Hückel's rule.",
      "process": "Step 1: Hückel's $(4n+2)$ rule is derived specifically for monocyclic conjugated systems.\nStep 2: For polycyclic aromatic hydrocarbons, the rules for aromaticity are more complex (e.g., Platt's perimeter rule or Clar's sextet rule).\nStep 3: Naphthalene (10 $\\pi$ electrons) and anthracene (14 $\\pi$ electrons) fit the $4n+2$ pattern, but pyrene (16 $\\pi$ electrons) is also aromatic despite having a non-Hückel number of electrons for a monocycle. This proves that Hückel's rule does not strictly apply to polycyclic systems.",
      "result": "Hückel's rule is strictly for monocyclic systems, even though some polycyclic systems numerically fit it."
    }
  }
]

# Write to chapter15.js in the same directory
file_path = os.path.join(os.path.dirname(__file__), "chapter15.js")
with open(file_path, "w", encoding="utf-8") as f:
    f.write("const CHAPTER_15_QUESTIONS = ")
    json.dump(questions, f, indent=2, ensure_ascii=False)
    f.write(";\n")
print(f"Successfully generated {file_path} with {len(questions)} questions.")

