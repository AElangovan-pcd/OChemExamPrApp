// OChemStudyBuddy - McMurry Chapter 30
// Author: A. Elangovan, PhD
var CH30_QUESTIONS = [
  {
    "question_id": "ch30_q_dynamic_diels_alder",
    "topic": "Cycloaddition Reactions",
    "difficulty_level": "Medium",
    "question_text": "Buta-1,3-diene and maleic anhydride are heated together in toluene. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "C=CC=C",
        "O=C1C=CC(=O)O1"
      ],
      "reagents": "toluene",
      "conditions": "100 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A four-carbon chain with two double bonds, C=C-C=C: buta-1,3-diene.",
        "A five-membered ring containing one oxygen flanked by two carbonyl carbons, with a double bond between the other two ring carbons: maleic anhydride."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "cis-Cyclohex-4-ene-1,2-dicarboxylic anhydride (the ring-fusion hydrogens on the same face)",
        "smiles": "O=C1OC(=O)[C@@H]2CC=CC[C@H]12",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "trans-Cyclohex-4-ene-1,2-dicarboxylic anhydride (the ring-fusion hydrogens on opposite faces)",
        "smiles": "O=C1OC(=O)[C@@H]2CC=CC[C@@H]12",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "cis-Cyclohex-4-ene-1,2-dicarboxylic acid",
        "smiles": "O=C(O)[C@@H]1CC=CC[C@@H]1C(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "cis-Cyclohexane-1,2-dicarboxylic anhydride",
        "smiles": "O=C1OC(=O)[C@@H]2CCCC[C@H]12",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Diels-Alder reaction is a thermal [4+2] cycloaddition: the four pi electrons of the diene and the two of the dienophile reorganise in one concerted step through a cyclic transition state, forming two new sigma bonds and one new pi bond. Because both new bonds form at once, on the same face of each component (suprafacially), whatever is cis on the dienophile stays cis in the product. Maleic anhydride is a cis dienophile locked by its ring, so the two ring-fusion hydrogens of the product are cis, and the new double bond sits between the two carbons that were the middle of the diene.",
      "approach": "Step 1: Count the electrons: four from the diene, two from the anhydride C=C, six in all, three pairs, so the thermal reaction is suprafacial on both partners.\nStep 2: Bond changes: the diene termini C1 and C4 bond to the two alkene carbons of maleic anhydride; the diene's C2=C3 becomes the new ring double bond; the anhydride's C=C becomes a single bond.\nStep 3: Stereochemistry: the anhydride's two carbonyl groups are cis and remain cis, so the fusion hydrogens are cis and the product is a single meso diastereomer.\nStep 4: No water is present, so the anhydride ring survives; and only the dienophile's pi bond is used up, so the cyclohexene double bond remains.",
      "note": "McMurry 30.5 (Cycloaddition Reactions) gives the maleate/fumarate pair as the test of stereospecificity: butadiene with diethyl maleate (cis) gives only the cis-disubstituted cyclohexene and with diethyl fumarate (trans) only the trans. McMurry 30.6 (Stereochemistry of Cycloadditions) explains why the thermal [4+2] is suprafacial: the diene LUMO and the alkene HOMO have terminal lobes of matching sign on the same face (Figure 30.10). The Diels-Alder reaction itself, with its s-cis requirement and endo rule, is taught in McMurry 14.4 and 14.5.",
      "options": {
        "A": "Correct. The concerted suprafacial [4+2] cycloaddition keeps the anhydride's cis carbonyls cis, giving the cis-fused cyclohexene anhydride as a single meso product.",
        "B": "A trans product would need the two new sigma bonds to form in separate steps with rotation in between. The concerted cycloaddition forms both at once on one face of the dienophile, so the cis relationship of the anhydride carbons is preserved.",
        "C": "This is the diacid the anhydride gives on hydrolysis. Nothing in the reaction supplies water: the cycloaddition is run in toluene, and the anhydride ring is untouched by the diene.",
        "D": "The cyclohexene double bond is not consumed. The diene's two pi bonds become one new sigma bond at each end plus one new pi bond in the middle; only the dienophile's pi bond disappears. Saturating the ring would require a hydrogenation that is not part of a cycloaddition."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q1_hexatriene_frontier_orbitals",
    "topic": "Molecular Orbitals of Conjugated Pi Systems",
    "difficulty_level": "Medium",
    "question_text": "1,3,5-Hexatriene has six pi molecular orbitals, psi1 through psi6*. In the ground state, which orbital is the HOMO and which is the LUMO?",
    "options": [
      {
        "option_id": "A",
        "text": "HOMO psi3, LUMO psi4*",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "HOMO psi2, LUMO psi3",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "HOMO psi4*, LUMO psi5*",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "HOMO psi1, LUMO psi6*",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Six p orbitals on the six sp2 carbons of a conjugated triene combine into six pi molecular orbitals. Their energies rise with the number of nodes between nuclei: psi1 has none and psi6* has five. The three with fewer nodes than an isolated p orbital are bonding and the three with more are antibonding (marked with an asterisk). Six pi electrons fill the three bonding orbitals two at a time, so the highest orbital that holds electrons, the HOMO, is psi3, and the lowest empty one, the LUMO, is psi4*. Frontier orbital theory predicts pericyclic stereochemistry from these two orbitals alone.",
      "approach": "Step 1: Count the pi electrons: three double bonds, six electrons.\nStep 2: Fill from the bottom, two per orbital: psi1, psi2, psi3 take all six.\nStep 3: The highest filled orbital is psi3, the HOMO; the next one up, psi4*, is empty and is the LUMO.\nStep 4: Check with nodes: psi3 has two nodes (bonding), psi4* has three (antibonding), so the HOMO/LUMO boundary falls exactly at the bonding/antibonding boundary, as it does for any neutral even polyene.",
      "note": "McMurry 30.1 (Molecular Orbitals of Conjugated Pi Systems) shows the six MOs of 1,3,5-hexatriene in Figure 30.3, with psi1, psi2 and psi3 filled in the ground state, and states that ground-state hexatriene has psi3 as HOMO and psi4* as LUMO. The same section introduces Fukui's frontier-orbital simplification of the Woodward-Hoffmann rules. Compare Problem 30-1, which asks the same question for ethylene and butadiene.",
      "options": {
        "A": "Correct. Six pi electrons fill psi1 to psi3; psi3 is the highest occupied orbital and psi4* the lowest unoccupied one.",
        "B": "psi2 and psi3 are the HOMO and LUMO of butadiene, which has four pi electrons and four orbitals. Hexatriene has two more electrons, which occupy psi3.",
        "C": "psi4* and psi5* are the HOMO and LUMO of the excited state, after ultraviolet light has promoted one electron from psi3 to psi4*. In the ground state psi4* is empty.",
        "D": "psi1 is the lowest bonding orbital and psi6* the highest antibonding one. The frontier orbitals are the ones at the boundary between filled and empty, not the extremes of the stack."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q2_butadiene_excited_state",
    "topic": "Molecular Orbitals of Conjugated Pi Systems",
    "difficulty_level": "Medium",
    "question_text": "1,3-Butadiene absorbs ultraviolet light and one electron is promoted. In the resulting excited state, which pi orbitals are the HOMO and the LUMO?",
    "options": [
      {
        "option_id": "A",
        "text": "HOMO psi3*, LUMO psi4*",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "HOMO psi2, LUMO psi3*",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "HOMO psi2, LUMO psi4*",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "HOMO psi1, LUMO psi2",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Butadiene's four p orbitals give four pi MOs: bonding psi1 and psi2, antibonding psi3* and psi4*. In the ground state the four pi electrons fill psi1 and psi2. Ultraviolet absorption promotes one electron from the ground-state HOMO, psi2, into the ground-state LUMO, psi3*, so that psi2 and psi3* are each half-filled. The highest orbital that now contains an electron is psi3*, which becomes the excited-state HOMO, and the next one up, psi4*, is the excited-state LUMO. Because psi3* has a different terminal-lobe symmetry from psi2, photochemical pericyclic reactions run with the opposite stereochemistry to thermal ones.",
      "approach": "Step 1: Ground state: psi1 and psi2 filled; HOMO psi2, LUMO psi3*.\nStep 2: Absorb a photon: one electron moves psi2 to psi3*. Now psi1 is full, psi2 and psi3* each hold one electron.\nStep 3: The excited-state HOMO is the highest orbital with any electron in it, psi3*; the LUMO is the lowest completely empty orbital, psi4*.\nStep 4: The terminal lobes of psi3* have the symmetry that psi2 lacked, which is why the photochemical electrocyclic closure of a diene is disrotatory while the thermal one is conrotatory.",
      "note": "McMurry 30.1 (Molecular Orbitals of Conjugated Pi Systems) describes the excited state as one in which an electron has been promoted from the highest filled orbital to the lowest unfilled one so that both are half-filled, and Problem 30-1 asks for the HOMO and LUMO of ethylene and butadiene in both ground and excited states. The ultraviolet absorption itself is treated in McMurry 14.7.",
      "options": {
        "A": "Correct. After promotion psi3* holds an electron and is the highest such orbital; psi4* is the lowest orbital still empty.",
        "B": "These are the ground-state frontier orbitals. After absorption psi3* is no longer unoccupied, so it cannot be the LUMO.",
        "C": "psi4* is the excited-state LUMO, but psi2 is not the excited-state HOMO: the promoted electron sits in psi3*, which lies above psi2 and is now occupied.",
        "D": "psi1 stays doubly occupied in both states and psi2 still holds an electron after excitation. Neither is at the frontier; the promotion moves the boundary up, not down."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q3_nodes_and_energy",
    "topic": "Molecular Orbitals of Conjugated Pi Systems",
    "difficulty_level": "Medium",
    "question_text": "How many nodes between nuclei does the psi4* orbital of 1,3,5-hexatriene have, and is it bonding or antibonding?",
    "options": [
      {
        "option_id": "A",
        "text": "Three nodes; antibonding, because it lies above the energy of an isolated p orbital",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Four nodes; antibonding",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Three nodes; bonding, because it still has more bonding than antibonding interactions",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Two nodes; bonding",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "In a linear conjugated polyene the nth pi molecular orbital has n minus 1 nodes between the nuclei: psi1 has none, psi2 has one, and so on up to psi6* with five. Energy rises with node count. An orbital with fewer nodes than there are bonding interactions to lose lies below the energy of an isolated p orbital and is bonding; one with more lies above and is antibonding. For hexatriene the split falls between psi3 (two nodes) and psi4* (three nodes), which is why exactly three orbitals are bonding and three antibonding, and why psi4* carries the asterisk.",
      "approach": "Step 1: Apply the node rule: psi4* is the fourth orbital, so it has 4 - 1 = 3 nodes between nuclei.\nStep 2: Locate them: for psi4* the nodes fall between C1-C2, C3-C4 and C5-C6, so the three original double-bond positions are antibonding and only C2-C3 and C4-C5 are bonding.\nStep 3: Three antibonding interactions against two bonding leaves the orbital net antibonding, above the energy of an isolated p orbital.\nStep 4: Consistency check: psi4* is empty in the ground state; it becomes the LUMO, and its terminal lobes have the opposite relative sign to those of psi3.",
      "note": "McMurry 30.1 (Molecular Orbitals of Conjugated Pi Systems) states that the energies of the pi MOs depend on the number of nodes between nuclei, that orbitals with fewer nodes are lower in energy than isolated p orbitals and bonding while those with more nodes are higher and antibonding, and draws all six hexatriene orbitals in Figure 30.3. The same counting for butadiene's psi2 (one node, between C2 and C3) is in McMurry 14.1.",
      "options": {
        "A": "Correct. The fourth orbital has three nodes, more antibonding interactions than bonding, and sits above an isolated p orbital in energy.",
        "B": "Four nodes belong to psi5*. The node count is one less than the orbital's index, so psi4* has three.",
        "C": "The node count is right but the bookkeeping of interactions is not: three nodes in a five-bond chain leave only two bonding interactions against three antibonding, so the orbital is net antibonding.",
        "D": "Two nodes is psi3, the ground-state HOMO, which is bonding. psi4* has one more node and lies on the other side of the energy of an isolated p orbital."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q4_symmetry_disallowed_consequence",
    "topic": "Molecular Orbitals of Conjugated Pi Systems",
    "difficulty_level": "Medium",
    "question_text": "Orbital analysis shows that a particular pericyclic reaction is symmetry-disallowed under thermal conditions. What does this imply about how the reaction can occur?",
    "options": [
      {
        "option_id": "A",
        "text": "It cannot proceed by a concerted path; it either goes by a higher-energy nonconcerted (stepwise) route, occurs under photochemical conditions where the orbital symmetries differ, or does not occur at all",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It cannot occur under any conditions, thermal or photochemical",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It proceeds concertedly but only in polar solvents that stabilise the transition state",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It proceeds concertedly with the opposite regiochemistry",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Woodward-Hoffmann rules say a pericyclic reaction can take place in a single concerted step only if the symmetries of the reactant orbitals correlate with those of the product orbitals, meaning the lobes that must overlap in the transition state have the same algebraic sign. When they do not, the concerted cyclic transition state is not available. That does not forbid the overall transformation: the molecule may reach the same product by a stepwise route through a diradical or ionic intermediate, which costs more energy and usually loses the stereospecificity, or light may promote an electron and change the frontier-orbital symmetry so that a concerted path opens. Symmetry-allowed reactions, by contrast, tend to run under mild conditions.",
      "approach": "Step 1: Recognise what the rule governs: the availability of a concerted, cyclic transition state, not the thermodynamics of the reaction.\nStep 2: A disallowed thermal path leaves three outcomes: a nonconcerted path with a higher barrier, a photochemical path with different frontier orbitals, or no reaction.\nStep 3: Example: the thermal [2+2] cycloaddition of two alkenes is disallowed and is not observed as a concerted process, yet the same cyclobutane forms readily on irradiation.\nStep 4: A nonconcerted route, if it runs, need not be stereospecific, because bonds form one at a time with an intermediate that can rotate.",
      "note": "McMurry 30.1 (Molecular Orbitals of Conjugated Pi Systems) states that if the symmetries of reactant and product orbitals correlate the reaction is symmetry-allowed, that symmetry-disallowed reactions cannot occur by concerted paths and either take place by nonconcerted, higher-energy pathways or do not take place at all, and that symmetry-allowed reactions often occur under relatively mild conditions. McMurry 30.5 repeats the point for cycloadditions: disallowed processes take place with difficulty, if at all, and then only by nonconcerted pathways.",
      "options": {
        "A": "Correct. Symmetry forbids only the concerted route; a stepwise path, a photochemical path, or no reaction are what remain.",
        "B": "Photochemical excitation changes which orbital is the HOMO and so changes the symmetry match; many thermally disallowed reactions, the [2+2] cycloaddition among them, run photochemically.",
        "C": "Solvent polarity can stabilise charged intermediates in a stepwise reaction, but it cannot change the sign pattern of orbital lobes. A concerted disallowed path stays disallowed in any solvent.",
        "D": "Regiochemistry is about which ends join; orbital symmetry is about whether the lobes can overlap in phase at all. Swapping the orientation does not change the sign mismatch."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q5_classify_electrocyclic",
    "topic": "Electrocyclic Reactions",
    "difficulty_level": "Medium",
    "question_text": "Which of the following transformations is an electrocyclic reaction?",
    "options": [
      {
        "option_id": "A",
        "text": "Hexa-1,3,5-triene, on heating, gives cyclohexa-1,3-diene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Buta-1,3-diene and ethylene, on heating, give cyclohexene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Hexa-1,5-diene, on heating, gives an isomeric hexa-1,5-diene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5-Methylcyclopenta-1,3-diene, at room temperature, gives 1-methylcyclopenta-1,3-diene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The three classes of pericyclic reaction are told apart by what happens to sigma bonds. An electrocyclic reaction converts one pi bond of a single conjugated acyclic polyene into one new sigma bond between its termini (or the reverse), so a ring closes or opens within one molecule. A cycloaddition joins two separate unsaturated molecules through two new sigma bonds. A sigmatropic rearrangement moves an existing sigma bond from one position to another across a pi system, with no change in the number of sigma bonds. Triene to cyclohexadiene is the textbook electrocyclic case.",
      "approach": "Step 1: Option A: one molecule, one pi bond lost, one sigma bond gained between C1 and C6, a ring formed: electrocyclic.\nStep 2: Option B: two molecules join, two new sigma bonds: a [4+2] cycloaddition.\nStep 3: Option C: the sigma bond between C3 and C4 breaks and a new one forms between C1 and C6, the pi bonds shift, the count of sigma bonds is unchanged: a [3,3] sigmatropic (Cope) rearrangement.\nStep 4: Option D: a hydrogen's sigma bond moves from C5 to C1 across the diene: a [1,5] sigmatropic shift.",
      "note": "McMurry 30.2 (Electrocyclic Reactions) defines an electrocyclic reaction as a pericyclic process involving the cyclization of a conjugated acyclic polyene, in which one pi bond is broken, the other pi bonds change position, a new sigma bond is formed and a cyclic compound results, with triene to cyclohexadiene and diene to cyclobutene as the examples. The other three options are the chapter's own examples of cycloaddition (McMurry 30.5) and sigmatropic rearrangement (McMurry 30.7 and 30.8).",
      "options": {
        "A": "Correct. A conjugated triene cyclising to a cyclohexadiene trades one pi bond for a new sigma bond between its ends, the definition of an electrocyclic reaction.",
        "B": "Two molecules combining to make a ring with two new sigma bonds is a cycloaddition, the Diels-Alder reaction. An electrocyclic reaction happens within a single polyene.",
        "C": "A 1,5-diene giving an isomeric 1,5-diene is the Cope rearrangement, a [3,3] sigmatropic shift: one sigma bond breaks and another forms, but no ring closes.",
        "D": "Moving a hydrogen from C5 to C1 of a cyclopentadiene is a [1,5] sigmatropic hydrogen shift. The ring is already there; nothing cyclises."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q6_cyclobutene_equilibrium",
    "topic": "Electrocyclic Reactions",
    "difficulty_level": "Medium",
    "question_text": "Thermal electrocyclic closure of a conjugated triene to a cyclohexadiene is easily observed, but the corresponding closure of a conjugated diene to a cyclobutene is not; instead, cyclobutenes are observed to open to dienes. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "Both are allowed and reversible; the position of equilibrium decides which direction is seen, and ring strain in the cyclobutene puts the diene equilibrium on the open-chain side while the six-membered ring lies on the cyclic side",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The closure of a diene is symmetry-forbidden thermally while its opening is allowed",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Closure of a diene would require an antarafacial twist that a four-carbon chain cannot achieve, so only the ring-opening, which needs no twist, is possible",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A diene has too few pi electrons to form a ring in a concerted step",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Pericyclic reactions are reversible, and a closure and its reverse opening go through the same transition state, so if one is symmetry-allowed so is the other. Which direction you observe is a matter of thermodynamics. A cyclobutene carries about 30 kcal/mol of ring strain that the acyclic diene does not, so the diene/cyclobutene equilibrium lies far to the diene side and the thermal reaction is seen only as ring-opening. A cyclohexadiene is unstrained and has one sigma bond in place of a pi bond, so the triene/cyclohexadiene equilibrium lies on the cyclic side and that reaction is seen as ring-closure.",
      "approach": "Step 1: Both closures are allowed: the diene closes (and the cyclobutene opens) conrotatory, the triene disrotatory, through the same transition state in each direction.\nStep 2: Compare product stabilities: a four-membered ring is strained; a six-membered ring is not.\nStep 3: For the diene, the strain-free open chain is the thermodynamic sink, so heating a cyclobutene gives the diene and heating the diene gives nothing new.\nStep 4: For the triene, the sigma bond gained outweighs the pi bond lost with no strain penalty, so the ring is favoured and closure is observed.",
      "note": "McMurry 30.2 (Electrocyclic Reactions) states that pericyclic reactions are reversible, that the position of the equilibrium depends on the specific case, and that in general the triene/cyclohexadiene equilibrium favours the cyclic product whereas the diene/cyclobutene equilibrium favours the less strained open-chain product. McMurry 30.3 adds that the conjugated diene reaction can be observed only in the reverse direction, cyclobutene to diene, because of the position of the equilibrium. Ring strain in cyclobutane is quantified in McMurry 4.3 and 4.4.",
      "options": {
        "A": "Correct. Allowedness is the same in both directions; strain in the four-membered ring puts the diene equilibrium on the open side and the strain-free six-membered ring puts the triene equilibrium on the cyclic side.",
        "B": "A reaction and its microscopic reverse share a transition state, so they cannot differ in whether they are allowed. Diene closure is conrotatory-allowed; it is simply uphill.",
        "C": "Suprafacial and antarafacial describe cycloadditions and sigmatropic shifts. An electrocyclic reaction is conrotatory or disrotatory, and the conrotatory twist a diene needs is exactly the motion the cyclobutene performs in reverse when it opens, so geometry does not block the closure; thermodynamics does.",
        "D": "Four pi electrons close a ring perfectly well in a concerted step; that is exactly the conrotatory process the cyclobutene runs in reverse. The number of electrons sets the stereochemistry, not whether a ring can form."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q7_scheme_octatriene_thermal",
    "topic": "Stereochemistry of Thermal Electrocyclic Reactions",
    "difficulty_level": "Hard",
    "question_text": "(2E,4Z,6E)-Octa-2,4,6-triene is heated. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "C/C=C/C=C\\C=C\\C"
      ],
      "reagents": "heat",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "An eight-carbon chain with three conjugated double bonds at C2, C4 and C6; the outer two are drawn trans and the middle one cis, with a methyl at each end."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "cis-5,6-Dimethylcyclohexa-1,3-diene",
        "smiles": "C[C@H]1C=CC=C[C@H]1C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "trans-5,6-Dimethylcyclohexa-1,3-diene (racemic; one enantiomer drawn)",
        "smiles": "C[C@H]1C=CC=C[C@@H]1C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2E,4E,6E)-Octa-2,4,6-triene",
        "smiles": "C/C=C/C=C/C=C/C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,6-Dimethylcyclohexa-1,3-diene (racemic)",
        "smiles": "CC1=CC=CCC1C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A conjugated triene closes thermally by a disrotatory motion: the ground-state HOMO psi3 has terminal lobes of like sign on the same face, so bonding overlap requires the two termini to rotate in opposite senses. The stereochemical result follows from where the terminal substituents start. In the (2E,4Z,6E) isomer both methyl groups point outward (each is trans to the chain across its double bond). Disrotatory rotation of two outward groups turns them both onto the same face of the new ring, so the product is the cis-5,6-dimethylcyclohexadiene, formed as a single diastereomer.",
      "approach": "Step 1: Count the electrons: six, three pairs, odd; thermal, so disrotatory (the ground-state HOMO psi3 is symmetric at its termini).\nStep 2: Locate the terminal groups: at C2 the methyl is trans to C4 (E), at C7 the methyl is trans to C5 (E); both are outside groups.\nStep 3: Rotate C2 and C7 in opposite directions so that the like-sign lobes meet. Two outside groups rotating disrotatory end up on the same face: cis.\nStep 4: The new sigma bond is C2-C7 and the remaining pi bonds move to C3=C4 and C5=C6, giving cis-5,6-dimethylcyclohexa-1,3-diene, which is meso.",
      "note": "McMurry 30.2 (Electrocyclic Reactions) reports exactly this experiment: (2E,4Z,6E)-2,4,6-octatriene yields only cis-5,6-dimethyl-1,3-cyclohexadiene when heated, while the (2E,4Z,6Z) isomer yields only the trans product (Figure 30.4), and McMurry 30.3 (Stereochemistry of Thermal Electrocyclic Reactions) explains both results by the disrotatory closure demanded by the triene HOMO (Figure 30.6). Irradiating the same triene gives the trans isomer, the subject of McMurry 30.4.",
      "options": {
        "A": "Correct. Disrotatory closure of a triene whose two methyls both point outward brings them onto the same face, giving the cis (meso) product.",
        "B": "The trans product is what the (2E,4Z,6Z) isomer gives thermally, or what the (2E,4Z,6E) isomer gives photochemically. With both methyls outside and disrotatory motion, the two cannot end on opposite faces.",
        "C": "Simple heating does not isomerise an isolated double bond from Z to E; that needs light or a catalyst. And even if it did, the all-E triene would still cyclise on heating, so a triene is not the final product.",
        "D": "Placing one methyl on a double bond would require a hydrogen to migrate after closure. A [1,5] hydrogen shift can do that on stronger heating, but the electrocyclic closure itself leaves both methyls on the two new sp3 carbons, C5 and C6."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q8_scheme_dimethylcyclobutene_thermal",
    "topic": "Stereochemistry of Thermal Electrocyclic Reactions",
    "difficulty_level": "Hard",
    "question_text": "trans-3,4-Dimethylcyclobutene is heated. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "C[C@H]1C=C[C@@H]1C"
      ],
      "reagents": "heat",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A four-membered ring with one double bond; each of the two saturated ring carbons carries a methyl, one on a wedge and one on a dash, so the methyls are on opposite faces."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "(2E,4E)-Hexa-2,4-diene",
        "smiles": "C/C=C/C=C/C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2E,4Z)-Hexa-2,4-diene",
        "smiles": "C/C=C/C=C\\C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2Z,4Z)-Hexa-2,4-diene",
        "smiles": "C/C=C\\C=C/C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "cis-3,4-Dimethylcyclobutene",
        "smiles": "C[C@H]1C=C[C@H]1C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A cyclobutene opening is the reverse of a diene closure and follows the diene's rules: four electrons, two pairs, thermal, so the motion is conrotatory. In a conrotatory opening both ring carbons turn in the same sense, one methyl swinging outward and the other, being on the opposite face, also swinging outward. Two outward methyls give two E double bonds. The other conrotatory sense would swing both methyls inward to the (2Z,4Z) diene, which is also symmetry-allowed but is not formed because the methyls collide on the way in.",
      "approach": "Step 1: Count: the breaking sigma bond and the pi bond supply four electrons, two pairs, even; thermal, so conrotatory.\nStep 2: In trans-3,4-dimethylcyclobutene the methyls are on opposite faces. Rotating C3 and C4 in the same direction moves both methyls outward (or both inward).\nStep 3: Outward-outward gives a methyl trans to the chain at each new double bond: (2E,4E)-hexa-2,4-diene.\nStep 4: Inward-inward would give (2Z,4Z), but the two methyls would pass through each other's space in the transition state, so only the E,E isomer is isolated.",
      "note": "McMurry 30.3 (Stereochemistry of Thermal Electrocyclic Reactions) states that cis-3,4-dimethylcyclobutene yields (2E,4Z)-2,4-hexadiene and trans-3,4-dimethylcyclobutene yields (2E,4E)-2,4-hexadiene by conrotatory opening (Figure 30.7), and Problem 30-3 asks why the trans isomer's other allowed conrotatory path, to (2Z,4Z)-2,4-hexadiene, is not taken in practice. The photochemical reverse, (2E,4E)-hexadiene closing to the cis cyclobutene, is in McMurry 30.4.",
      "options": {
        "A": "Correct. Conrotatory opening turns both methyls of the trans isomer outward, so each double bond is E.",
        "B": "One E and one Z double bond is what the cis isomer gives, because there one methyl is carried outward and the other inward by the same rotation. From the trans isomer the two methyls move in step, both out or both in.",
        "C": "The Z,Z diene is the product of the inward conrotatory path. That path is symmetry-allowed but sterically blocked: both methyls would have to pass through the middle of the opening ring at once.",
        "D": "Turning the trans isomer into the cis isomer would need one stereocentre to invert without any bond to the ring breaking. Heating opens the strained ring instead; it does not epimerise it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q9_two_conrotatory_paths",
    "topic": "Stereochemistry of Thermal Electrocyclic Reactions",
    "difficulty_level": "Hard",
    "question_text": "trans-3,4-Dimethylcyclobutene can in principle open by two different conrotatory motions, one giving (2E,4E)-hexa-2,4-diene and the other giving (2Z,4Z)-hexa-2,4-diene. Which statement is right?",
    "options": [
      {
        "option_id": "A",
        "text": "Both paths are symmetry-allowed; only the (2E,4E) isomer forms because the (2Z,4Z) path rotates both methyls inward, where they clash sterically in the transition state and give the less stable product",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Only the (2E,4E) path is symmetry-allowed; the (2Z,4Z) path is disrotatory and forbidden",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both form in equal amounts because the two rotations are equally probable",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The (2Z,4Z) isomer forms first and then isomerises to the (2E,4E) isomer by a [1,5] hydrogen shift",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Orbital symmetry decides only whether the two termini rotate in the same sense (conrotatory) or opposite senses (disrotatory). For a conrotatory opening there are still two choices: both carbons turn clockwise, or both turn counterclockwise. From a trans-disubstituted cyclobutene one choice carries both substituents outward, the other carries both inward, and both choices satisfy the orbital-symmetry requirement equally. What separates them is sterics: rotating two methyls inward forces them toward each other in the transition state and produces the crowded (2Z,4Z) diene, so the outward path, leading to the more stable (2E,4E) isomer, is taken.",
      "approach": "Step 1: Conrotatory means same sense of rotation. Clockwise-clockwise and counterclockwise-counterclockwise are both conrotatory and both allowed.\nStep 2: For the trans isomer, one sense sends both methyls outward (E,E), the other sends both inward (Z,Z).\nStep 3: The inward path has the two methyls converging on the same region of space; its transition state is higher and its product is the Z,Z diene, which is itself destabilised by its cis substituents.\nStep 4: Under kinetic control the lower barrier wins, so the E,E diene is the only product observed.",
      "note": "McMurry 30.3 (Stereochemistry of Thermal Electrocyclic Reactions), Problem 30-3, asks the student to explain why both products are symmetry-allowed and then to account for the fact that only the 2E,4E isomer is obtained in practice; the answer is the steric clash of the inward-rotating methyls. The same reasoning is why the cis isomer gives only (2E,4Z): its two rotations are related by symmetry and give the same product.",
      "options": {
        "A": "Correct. Orbital symmetry allows either conrotatory sense; steric hindrance between the inward-rotating methyls selects the outward path and the E,E product.",
        "B": "Both rotations in the same sense are conrotatory. Whether the methyls go in or out does not change the sense of rotation, so symmetry cannot distinguish the two paths.",
        "C": "The two rotations are symmetry-equivalent only when the substituents are identical and cis. For the trans isomer they lead to sterically different transition states, and the inward one is much higher in energy.",
        "D": "A [1,5] hydrogen shift moves a hydrogen along a conjugated system; it does not interconvert E and Z isomers of an acyclic diene. The E,E product is formed directly."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q10_zzz_octatriene",
    "topic": "Stereochemistry of Thermal Electrocyclic Reactions",
    "difficulty_level": "Hard",
    "question_text": "(2Z,4Z,6Z)-Octa-2,4,6-triene is heated. Which isomer of 5,6-dimethylcyclohexa-1,3-diene forms, and by which motion?",
    "options": [
      {
        "option_id": "A",
        "text": "The cis isomer, by disrotatory closure",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The trans isomer, by disrotatory closure",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The cis isomer, by conrotatory closure",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The trans isomer, by conrotatory closure",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The motion is fixed by electron count and conditions: six electrons, thermal, disrotatory. The product stereochemistry then depends only on whether each terminal methyl starts inside or outside. In the all-Z triene both methyls are cis to the chain, so both are inside groups. Disrotatory rotation moves the two termini in opposite senses, which sends two like-positioned groups to the same face of the ring: inside-inside gives cis just as outside-outside does. Only when one methyl is inside and the other outside does disrotatory closure give trans.",
      "approach": "Step 1: Six pi electrons, three pairs, thermal: disrotatory.\nStep 2: Terminal groups: at C2 the methyl is cis to C4 (Z) and at C7 the methyl is cis to C5 (Z), so both are inside.\nStep 3: Disrotatory closure puts two inside groups on the same face: cis-5,6-dimethylcyclohexa-1,3-diene.\nStep 4: A conrotatory closure would have given the trans isomer, but that is the photochemical outcome, not the thermal one.",
      "note": "McMurry 30.3 (Stereochemistry of Thermal Electrocyclic Reactions), Problem 30-2, asks for the products of both conrotatory and disrotatory cyclisation of (2Z,4Z,6Z)-2,4,6-octatriene and which path the thermal reaction follows. The general pattern from Figure 30.6 is that (2E,4Z,6E) and (2Z,4Z,6Z) both give cis product thermally while (2E,4Z,6Z), with one inside and one outside methyl, gives trans. The all-Z triene must first adopt the crowded s-cis,s-cis conformation, which slows it but does not change the outcome.",
      "options": {
        "A": "Correct. Both methyls are inside groups, and disrotatory closure sends two inside groups to the same face, the cis product.",
        "B": "Disrotatory motion gives trans only from a triene with one inside and one outside methyl, the (2E,4Z,6Z) isomer. Here both methyls are inside.",
        "C": "The cis product is right but the motion is not: a six-electron thermal closure is disrotatory. Conrotatory motion from this triene would give the trans isomer.",
        "D": "Conrotatory closure of two inside groups would indeed give trans, but a thermal six-electron closure is disrotatory. This is the photochemical result, not the thermal one."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q11_homo_terminal_lobes",
    "topic": "Stereochemistry of Thermal Electrocyclic Reactions",
    "difficulty_level": "Medium",
    "question_text": "Why does a conjugated triene close thermally by a disrotatory motion while a conjugated diene reacts by a conrotatory motion?",
    "options": [
      {
        "option_id": "A",
        "text": "The triene's ground-state HOMO (psi3) has like-sign terminal lobes on the same face, so the termini must rotate in opposite senses to overlap in phase; the diene's HOMO (psi2) has like-sign lobes on opposite faces, so both termini must rotate in the same sense",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The triene closes through its LUMO and the diene through its HOMO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The six-membered ring being formed by the triene is less strained, which permits the gentler disrotatory motion",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The triene has more electrons, and more electrons always favour disrotatory motion regardless of orbital symmetry",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Frontier orbital theory locates the decision in the terminal lobes of the HOMO, whose electrons are the most loosely held and are the ones that form the new sigma bond. Whether those two lobes of like sign sit on the same face of the polyene or on opposite faces alternates with the orbital's index: psi2 of butadiene is antisymmetric at its ends (like signs on opposite faces), psi3 of hexatriene is symmetric (like signs on the same face). To bring like signs together, same-face lobes need the two termini to rotate in opposite directions (disrotatory) and opposite-face lobes need them to rotate the same way (conrotatory). That alternation is the origin of the even/odd electron-pair rule.",
      "approach": "Step 1: Identify the thermal frontier orbital: the ground-state HOMO, psi2 for a diene and psi3 for a triene.\nStep 2: Read the terminal lobes: psi2 has one node and its end lobes are of like sign on opposite faces; psi3 has two nodes and its end lobes are of like sign on the same face.\nStep 3: Match motion to lobes: same-face like signs demand opposite rotations (disrotatory); opposite-face like signs demand the same rotation (conrotatory).\nStep 4: Generalise: each added double bond adds one node and flips the terminal symmetry, so even numbers of pairs are conrotatory and odd numbers disrotatory in thermal reactions.",
      "note": "McMurry 30.2 (Electrocyclic Reactions) defines disrotatory and conrotatory motion in terms of whether the two outermost lobes of like sign are on the same or opposite sides of the molecule, and McMurry 30.3 (Stereochemistry of Thermal Electrocyclic Reactions) states that the ground-state HOMO of a conjugated triene has lobes of like sign on the same side, predicting disrotatory closure, while the diene HOMO predicts conrotatory closure, and that the difference is due to the different symmetries of the diene and triene HOMOs. Figure 30.2 draws the butadiene orbitals and Figure 30.3 the hexatriene ones.",
      "options": {
        "A": "Correct. The terminal-lobe symmetry of the HOMO alternates between diene and triene, and the rotation that brings like signs together alternates with it.",
        "B": "Thermal electrocyclic stereochemistry is read from the HOMO in both cases; the LUMO is not involved in a one-component reaction. The two HOMOs simply differ in symmetry.",
        "C": "Ring strain affects the position of equilibrium, not the sense of rotation. A four-electron closure is conrotatory whether the ring is strained or not, and the six-electron cyclononatriene closure is disrotatory in a strained bicyclic frame.",
        "D": "Electron count matters only through orbital symmetry: an eight-electron tetraene, with even more electrons, closes conrotatory. The rule alternates with each added pair rather than trending one way."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q12_cyclononatriene_bicyclic",
    "topic": "Stereochemistry of Thermal Electrocyclic Reactions",
    "difficulty_level": "Hard",
    "question_text": "Heating (1Z,3Z,5Z)-cyclonona-1,3,5-triene to 100 °C gives a bicyclic diene, bicyclo[4.3.0]nona-2,4-diene. Is the closure conrotatory or disrotatory, and are the two hydrogens at the ring junction cis or trans?",
    "options": [
      {
        "option_id": "A",
        "text": "Disrotatory; the ring-junction hydrogens are cis",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Conrotatory; the ring-junction hydrogens are trans",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Disrotatory; the ring-junction hydrogens are trans",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Conrotatory; the ring-junction hydrogens are cis",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The triene unit of the nine-membered ring is a six-electron system, so its thermal closure is disrotatory. The substituents on the two termini are the ring's CH2 chain, and because every double bond is Z those two chain carbons are both cis to the triene, that is, both are inside groups. Disrotatory motion carries two inside groups onto the same face of the new six-membered ring, so the two hydrogens left on the junction carbons are also on one face: a cis ring fusion. That is also the only fusion a five-membered ring bridging the two termini can tolerate.",
      "approach": "Step 1: Electron count: six pi electrons in C1 to C6, three pairs, thermal: disrotatory.\nStep 2: Terminal groups: C1 carries C9 and C6 carries C7, the ends of the three-carbon bridge. With Z geometry at C1=C2 and C5=C6 both bridge carbons lie inside the diene curve.\nStep 3: Disrotatory closure sends two inside groups to the same face, so C7 and C9 end up cis, and the junction hydrogens, on the other face, are cis to each other.\nStep 4: The product is cis-bicyclo[4.3.0]nona-2,4-diene, the cyclohexadiene fused cis to a cyclopentane.",
      "note": "McMurry 30.3 (Stereochemistry of Thermal Electrocyclic Reactions), Problem 30-23, gives the cyclisation of (1Z,3Z,5Z)-1,3,5-cyclononatriene at 100 °C and asks whether it is conrotatory or disrotatory and whether the junction hydrogens are cis or trans. The inside/outside bookkeeping is the same as for the open-chain octatriene of Figure 30.6, with the ring's own carbons playing the part of the methyls.",
      "options": {
        "A": "Correct. Six electrons close disrotatory, and two inside substituents (the bridge carbons) end up on one face, leaving the junction hydrogens cis.",
        "B": "Conrotatory motion is for four- or eight-electron systems. A cyclic triene closes with six electrons, thermally disrotatory, and gives a cis fusion, which is also the only fusion a three-carbon bridge can span.",
        "C": "Disrotatory is right, but two inside groups moving disrotatory finish on the same face. A trans junction would need one inside and one outside terminus, impossible when both are tied into the same Z,Z,Z ring.",
        "D": "The cis fusion is right, but it arises from disrotatory motion of two inside groups. Conrotatory closure of the same termini would have forced them trans."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q13_decatetraene",
    "topic": "Stereochemistry of Thermal Electrocyclic Reactions",
    "difficulty_level": "Hard",
    "question_text": "(2E,4Z,6Z,8E)-Deca-2,4,6,8-tetraene cyclises to 7,8-dimethylcycloocta-1,3,5-triene. What are the mode of ring closure and the product stereochemistry under thermal and under photochemical conditions?",
    "options": [
      {
        "option_id": "A",
        "text": "Thermal: conrotatory, giving the trans-7,8-dimethyl product; photochemical: disrotatory, giving the cis product",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Thermal: disrotatory, giving the cis product; photochemical: conrotatory, giving the trans product",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Thermal: conrotatory, giving the cis product; photochemical: disrotatory, giving the trans product",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both thermal and photochemical: disrotatory, giving the cis product",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A conjugated tetraene has eight pi electrons, four pairs, an even number, so its thermal closure is conrotatory and its photochemical closure disrotatory, the reverse of the triene. The terminal methyls of the (2E,4Z,6Z,8E) isomer are both trans to the chain, so both are outside groups. Conrotatory motion of two outside groups puts them on opposite faces (trans); disrotatory motion of the same two groups puts them on the same face (cis). Each added double bond flips the rule, which is why a tetraene behaves like a diene rather than like a triene.",
      "approach": "Step 1: Count: four double bonds, eight electrons, four pairs, even. Thermal: conrotatory. Photochemical: disrotatory.\nStep 2: Terminal groups: C2=C3 is E so the C1 methyl is outside; C8=C9 is E so the C10 methyl is outside.\nStep 3: Thermal conrotatory closure of two outside groups: opposite faces, trans-7,8-dimethylcycloocta-1,3,5-triene.\nStep 4: Photochemical disrotatory closure of the same groups: same face, the cis product.",
      "note": "McMurry 30.4 (Photochemical Electrocyclic Reactions), Table 30.1, gives conrotatory for thermal reactions with an even number of electron pairs and disrotatory for the photochemical ones, and Problem 30-24 asks for both modes and both product stereochemistries for this decatetraene. Problem 30-25 repeats it for the (2E,4Z,6Z,8Z) isomer, where one methyl is inside and the answers reverse. The eight-membered triene is itself strained toward tub shapes, which the problem ignores.",
      "options": {
        "A": "Correct. Four electron pairs: conrotatory on heating (outside-outside gives trans) and disrotatory on irradiation (outside-outside gives cis).",
        "B": "This is the triene rule. A tetraene has one more electron pair, an even number, and the mode of closure reverses with it.",
        "C": "The modes are right but the products are swapped: conrotatory motion of two outside groups places them on opposite faces, trans, and disrotatory motion places them on the same face, cis.",
        "D": "Thermal and photochemical electrocyclic reactions never share a mode, because promoting an electron changes the terminal symmetry of the frontier orbital. One of the two must be conrotatory."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q14_fused_cyclobutene_ring_size",
    "topic": "Stereochemistry of Thermal Electrocyclic Reactions",
    "difficulty_level": "Hard",
    "question_text": "A cyclobutene fused to a five-membered ring (cis-bicyclo[3.2.0]hept-6-ene) opens on strong heating to (1Z,3Z)-cyclohepta-1,3-diene. A cyclobutene fused to an eight-membered ring (cis-bicyclo[6.2.0]dec-9-ene) opens at a much lower temperature to (1E,3Z)-cyclodeca-1,3-diene. What accounts for both the products and the temperatures?",
    "options": [
      {
        "option_id": "A",
        "text": "The allowed thermal opening is conrotatory, and for a cis-fused cyclobutene that necessarily makes one E and one Z double bond in the new ring. A ten-membered ring can hold an E double bond, so the eight-fused compound uses the allowed path at low temperature; a seven-membered ring cannot, so the five-fused compound must take a higher-energy forbidden or stepwise route to the Z,Z diene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Both open by the allowed conrotatory path to an E,Z diene; in the seven-membered ring the E double bond then isomerises to Z on further heating",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The cyclobutene fused to the larger ring is more strained, so its opening has the larger driving force and needs less heat",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The five-membered ring adds two more electrons to the pericyclic system, making the opening a six-electron disrotatory process that gives Z,Z directly",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Thermal opening of a cyclobutene is a four-electron process and is conrotatory. In a cis-fused bicyclic cyclobutene the two ring-junction substituents are the two ends of the other ring, on the same face. Conrotatory rotation carries one of them outward and the other inward, so one new double bond is E and the other Z, and both are inside the ring that was fused. A ten-membered ring accommodates a trans double bond, so the allowed reaction simply happens, at low temperature. A seven-membered ring cannot contain a trans double bond, so the allowed product is impossible; the molecule can react only by a symmetry-forbidden disrotatory path or a stepwise diradical route, both of which cost far more energy and show up as a much higher reaction temperature.",
      "approach": "Step 1: Four electrons, thermal: conrotatory. Two cis junction substituents rotating the same way go one out, one in, giving one E and one Z alkene in the new ring.\nStep 2: Ten-membered ring: (1E,3Z)-cyclodeca-1,3-diene is a stable molecule, so the allowed path is open and the barrier is low.\nStep 3: Seven-membered ring: (1E,3Z)-cyclohepta-1,3-diene is far too strained to exist, so the conrotatory path leads nowhere.\nStep 4: The only route left is disrotatory (forbidden) or nonconcerted; either is much higher in energy, hence the higher temperature and the Z,Z product.",
      "note": "McMurry 30.3 (Stereochemistry of Thermal Electrocyclic Reactions), Problem 30-42, gives exactly these two ring-openings and asks for an explanation and for a reason why the eight-membered case opens at a lower temperature. Problem 30-43 then asks why a mixture forms in a related case. The conrotatory rule for cyclobutenes comes from Figure 30.7 in the same section.",
      "options": {
        "A": "Correct. The allowed conrotatory opening of a cis-fused cyclobutene must place one E double bond in the other ring; only the ten-membered ring can hold it, so only that compound reacts by the low-energy path.",
        "B": "A trans double bond in a seven-membered ring is not a compound that forms and then isomerises; it is too strained to be reached at all. The Z,Z product arises from a different, higher-energy path, which is why the temperature is so much higher.",
        "C": "The strain being released is the cyclobutene's, and it is about the same in both compounds. Ring size matters here for a different reason: whether the fused ring can tolerate the E double bond that the allowed path creates.",
        "D": "The saturated carbons of the fused ring carry no pi electrons and are not part of the pericyclic system. Both openings involve the same four electrons, one sigma and one pi bond of the cyclobutene."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q15_dewar_benzene",
    "topic": "Stereochemistry of Thermal Electrocyclic Reactions",
    "difficulty_level": "Hard",
    "question_text": "Bicyclo[2.2.0]hexa-2,5-diene (Dewar benzene) is about 60 kcal/mol higher in energy than benzene, yet it survives for days at room temperature. Why is its rearrangement to benzene so slow?",
    "options": [
      {
        "option_id": "A",
        "text": "Rearrangement is an electrocyclic opening of a cyclobutene ring, which must be conrotatory thermally; conrotatory opening of the cis-fused bicyclic would put a trans double bond into the six-membered ring, so the only path to benzene is the symmetry-forbidden disrotatory one",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Dewar benzene is itself aromatic, so there is no driving force for the rearrangement",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The central sigma bond is unusually strong because it is made from sp2 hybrid orbitals",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The rearrangement is endothermic because the strain released is smaller than the resonance energy gained",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Dewar benzene is two cyclobutene rings sharing a bond. Converting it to benzene means opening one cyclobutene: the shared sigma bond breaks and the electrons redistribute into the aromatic sextet. A cyclobutene opening is a four-electron electrocyclic reaction, thermally conrotatory. But the two junction carbons of a cis-fused bicyclic must, under conrotatory motion, turn one substituent outward and one inward, which would leave a trans double bond in the newly formed six-membered ring. That is impossible, so the allowed path is blocked, and the disrotatory path that would give ordinary benzene is symmetry-forbidden. The reaction proceeds only slowly, by a high-energy route, despite being enormously exothermic.",
      "approach": "Step 1: Identify the pericyclic step: a cyclobutene ring-opening, four electrons, two pairs, thermal: conrotatory.\nStep 2: Apply it to the cis-fused framework: conrotatory opening generates one E double bond inside the six-membered ring.\nStep 3: A six-membered ring cannot hold a trans double bond, so the allowed product is inaccessible.\nStep 4: The geometrically possible product, benzene, would require disrotatory opening, which is thermally forbidden, so the barrier is high and the half-life is long even though delta G is very negative.",
      "note": "McMurry 30.3 (Stereochemistry of Thermal Electrocyclic Reactions), Problem 30-36, states that bicyclohexadiene, also known as Dewar benzene, is extremely stable despite the fact that its rearrangement to benzene is energetically favoured, and asks why the rearrangement is so slow. The same compound appears in McMurry 15.2 as a valence isomer of benzene. The argument is the same one that governs the fused cyclobutenes of Problem 30-42: the allowed conrotatory path is blocked by ring geometry.",
      "options": {
        "A": "Correct. The allowed conrotatory opening would need a trans double bond in a six-membered ring; the path to benzene is disrotatory and forbidden, so the exothermic reaction has a high barrier.",
        "B": "Dewar benzene has two isolated double bonds and no cyclic conjugation; it is not aromatic. The 60 kcal/mol gap is exactly the driving force the question says exists. The barrier, not the thermodynamics, is what slows it.",
        "C": "The central bond is an ordinary strained sigma bond between two sp3 carbons, and it is weaker than a normal C-C bond, not stronger. Kinetics here is a matter of orbital symmetry, not bond strength.",
        "D": "The reaction is strongly exothermic: benzene lies about 60 kcal/mol below Dewar benzene. A slow reaction can be very favourable; the two things are independent."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q16_scheme_octatriene_photochemical",
    "topic": "Photochemical Electrocyclic Reactions",
    "difficulty_level": "Hard",
    "question_text": "(2E,4Z,6E)-Octa-2,4,6-triene is irradiated with ultraviolet light. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "C/C=C/C=C\\C=C\\C"
      ],
      "reagents": "hv",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "An eight-carbon chain with conjugated double bonds at C2, C4 and C6, the outer two trans and the middle one cis; a methyl at each end."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "trans-5,6-Dimethylcyclohexa-1,3-diene (racemic; one enantiomer drawn)",
        "smiles": "C[C@H]1C=CC=C[C@@H]1C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "cis-5,6-Dimethylcyclohexa-1,3-diene",
        "smiles": "C[C@H]1C=CC=C[C@H]1C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2E,4E,6E)-Octa-2,4,6-triene",
        "smiles": "C/C=C/C=C/C=C/C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,6-Dimethylcyclohexa-1,3-diene (racemic)",
        "smiles": "CC1=CC=CCC1C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Ultraviolet light promotes one electron from psi3 to psi4*, so the orbital whose terminal lobes now control the closure is psi4*, the excited-state HOMO. Its end lobes of like sign lie on opposite faces, the reverse of psi3, so the photochemical closure of a triene is conrotatory. The starting material is the same one that gives the cis product on heating: both methyls are outside groups. Rotating two outside groups in the same sense puts them on opposite faces of the new ring, so irradiation gives the trans-5,6-dimethylcyclohexadiene, as a racemate.",
      "approach": "Step 1: Six electrons, three pairs, photochemical: conrotatory (Table 30.1 reverses the thermal rule).\nStep 2: Both methyls are outside (each E double bond places its methyl trans to the chain).\nStep 3: Conrotatory rotation of two outside groups places one on each face: trans.\nStep 4: The product has two stereocentres of like descriptor, (R,R) or (S,S), formed in equal amounts, so the trans diene is racemic.",
      "note": "McMurry 30.2 (Electrocyclic Reactions) reports that irradiation of (2E,4Z,6E)-2,4,6-octatriene with ultraviolet light yields trans-5,6-dimethyl-1,3-cyclohexadiene (Figure 30.4), and McMurry 30.4 (Photochemical Electrocyclic Reactions) explains it as a conrotatory closure through the excited-state HOMO (Figure 30.8), with Problem 30-4 asking for the photochemical products of both the (2E,4Z,6E) and the (2E,4Z,6Z) isomers.",
      "options": {
        "A": "Correct. Conrotatory closure of two outside methyls, the photochemical mode for a six-electron system, puts them on opposite faces.",
        "B": "The cis product is the thermal result, from disrotatory closure. Light changes the frontier orbital and so reverses the sense of rotation.",
        "C": "Photochemical E/Z isomerisation is a real process, but the observed outcome in this system is the electrocyclic closure. And an all-E triene would still close on irradiation, this time to the cis product.",
        "D": "Placing a methyl on a double bond would require a hydrogen shift after closure. The electrocyclic step leaves both methyls on the new sp3 carbons, C5 and C6."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q17_photochemical_reason",
    "topic": "Photochemical Electrocyclic Reactions",
    "difficulty_level": "Medium",
    "question_text": "Thermal and photochemical electrocyclic reactions of the same polyene always take place with opposite stereochemistry. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "Irradiation promotes an electron from the ground-state HOMO to the ground-state LUMO, so the excited-state HOMO is the orbital that was the LUMO; its terminal lobes have the opposite symmetry, so the required rotation reverses",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Light supplies enough energy to overcome the barrier of the forbidden path, so the photochemical reaction goes by the mode that heat cannot",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Photochemical reactions proceed through a diradical intermediate, so orbital symmetry no longer applies and the more stable stereoisomer forms",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Irradiation first isomerises a Z double bond to E, and the all-E polyene then closes by the ordinary thermal mode",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Frontier orbital theory reads the stereochemistry off the HOMO, the orbital holding the most loosely held electrons. Absorbing a photon moves one electron up one orbital, so the excited-state HOMO is the orbital that was the ground-state LUMO. Adjacent orbitals in a conjugated system differ by one node, and one extra node flips the relative sign of the two terminal lobes. Same-face like signs become opposite-face like signs, or the reverse, and with that flip the rotation needed for bonding overlap changes from disrotatory to conrotatory or back. The reversal is therefore built into every electrocyclic reaction, whatever the electron count.",
      "approach": "Step 1: Ground state: the HOMO is psi_n, the highest filled orbital.\nStep 2: Photon absorbed: one electron goes from psi_n to psi_(n+1)*; the excited-state HOMO is psi_(n+1)*.\nStep 3: psi_(n+1)* has one more node than psi_n, so its terminal lobes have the opposite relative sign.\nStep 4: Opposite terminal symmetry demands the opposite motion, so the photochemical stereochemistry is the reverse of the thermal one, as Table 30.1 shows for every electron count.",
      "note": "McMurry 30.4 (Photochemical Electrocyclic Reactions) states that ultraviolet irradiation of a polyene causes excitation of one electron from the ground-state HOMO to the ground-state LUMO, thus changing their symmetries, and that because electronic excitation changes the symmetries of HOMO and LUMO it also changes the reaction stereochemistry; thermal and photochemical electrocyclic reactions always take place with opposite stereochemistry because the symmetries of the frontier orbitals are always different (Figure 30.8, Table 30.1).",
      "options": {
        "A": "Correct. Excitation makes the former LUMO the HOMO, and the extra node in that orbital reverses the terminal-lobe symmetry and with it the sense of rotation.",
        "B": "Light does not push a reaction over the forbidden barrier; it changes which orbital is at the frontier, so that a different concerted path becomes allowed. The photochemical reaction is stereospecific, which a barrier-hopping picture would not predict.",
        "C": "Photochemical electrocyclic reactions are stereospecific: the (2E,4Z,6E) triene gives only the trans diene on irradiation. A diradical that could rotate freely would give a mixture, and it would not systematically give the less stable stereoisomer.",
        "D": "Photochemical E/Z isomerisation exists but is not the explanation: the observed products are the ones predicted by the excited-state HOMO acting on the original geometry, and an all-E triene closing thermally would give the cis product, not the trans one that is observed."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q18_scheme_hexadiene_photochemical",
    "topic": "Photochemical Electrocyclic Reactions",
    "difficulty_level": "Hard",
    "question_text": "(2E,4E)-Hexa-2,4-diene is irradiated with ultraviolet light. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "C/C=C/C=C/C"
      ],
      "reagents": "hv",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-carbon chain with conjugated double bonds at C2 and C4, both drawn trans, and a methyl at each end."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "cis-3,4-Dimethylcyclobutene",
        "smiles": "C[C@H]1C=C[C@H]1C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "trans-3,4-Dimethylcyclobutene (racemic; one enantiomer drawn)",
        "smiles": "C[C@H]1C=C[C@@H]1C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2E,4Z)-Hexa-2,4-diene",
        "smiles": "C/C=C/C=C\\C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,2-Dimethylcyclobutene",
        "smiles": "CC1=C(C)CC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A diene closure uses four electrons, two pairs, and is conrotatory thermally; under irradiation the excited-state HOMO psi3* takes over and the closure becomes disrotatory. This is also the direction in which the diene/cyclobutene reaction can be made to run, because light drives the system away from the thermal equilibrium that favours the open chain. In (2E,4E)-hexa-2,4-diene both methyls are outside groups, and disrotatory rotation of two outside groups puts them on the same face of the ring: cis-3,4-dimethylcyclobutene, a meso compound.",
      "approach": "Step 1: Four electrons, even number of pairs, photochemical: disrotatory.\nStep 2: Both methyls are outside (E at each double bond).\nStep 3: Outside-outside with disrotatory motion: same face, cis.\nStep 4: Bonds: new sigma bond C2-C5, new pi bond C3=C4; the methyls sit on the sp3 carbons C3 and C4 of the cyclobutene numbering.",
      "note": "McMurry 30.4 (Photochemical Electrocyclic Reactions) states that (2E,4E)-2,4-hexadiene undergoes photochemical cyclization by a disrotatory path whereas the thermal reaction is conrotatory (Figure 30.8), and McMurry 30.2 (Figure 30.5) shows the same closure giving the cis cyclobutene. The reverse thermal opening of the cis cyclobutene gives (2E,4Z)-hexadiene by conrotatory motion, the pairing in Figure 30.7.",
      "options": {
        "A": "Correct. Photochemical closure of a diene is disrotatory, and two outside methyls rotating in opposite senses finish cis.",
        "B": "The trans cyclobutene would come from conrotatory closure, the thermal mode, and the thermal closure is not observed anyway because the equilibrium favours the diene. Under light the rule is disrotatory.",
        "C": "Light can isomerise an alkene, but a conjugated diene absorbs and cyclises; the observed photochemical product here is the cyclobutene. In any case the E,Z diene would itself close on further irradiation.",
        "D": "The double bond of the product forms between C3 and C4 of the original diene, the carbons that were the inner ends of the two pi bonds. The methyl-bearing carbons become sp3 and cannot be the alkene carbons."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q19_scheme_hexadiene_ethylene",
    "topic": "Stereochemistry of Cycloadditions",
    "difficulty_level": "Hard",
    "question_text": "(2E,4E)-Hexa-2,4-diene and ethylene are heated under pressure. What is the cycloaddition product?",
    "reaction_scheme": {
      "reactants": [
        "C/C=C/C=C/C",
        "C=C"
      ],
      "reagents": "heat",
      "conditions": "pressure",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-carbon chain with conjugated double bonds at C2 and C4, both drawn trans, and a methyl at each end.",
        "Two carbons joined by a double bond: ethylene."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "cis-3,6-Dimethylcyclohexene",
        "smiles": "C[C@H]1CC[C@@H](C)C=C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "trans-3,6-Dimethylcyclohexene (racemic; one enantiomer drawn)",
        "smiles": "C[C@H]1CC[C@H](C)C=C1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "cis-4,5-Dimethylcyclohexene",
        "smiles": "C[C@H]1CC=CC[C@H]1C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "trans-4,5-Dimethylcyclohexene (racemic; one enantiomer drawn)",
        "smiles": "C[C@H]1CC=CC[C@@H]1C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Diels-Alder reaction is suprafacial on the diene as well as on the dienophile, so the geometry of the diene's termini is carried into the product just as the dienophile's is. The diene must react in its s-cis conformation. In (2E,4E)-hexa-2,4-diene both methyls are outside groups in that conformation, and two outside groups end up on the same face of the new ring: cis. The methyls are on the diene's terminal carbons, which become the two sp3 carbons flanking the new double bond, C3 and C6 of the cyclohexene; the ethylene carbons become C4 and C5.",
      "approach": "Step 1: Six electrons, three pairs, thermal: suprafacial on both components.\nStep 2: Draw the diene s-cis: with E,E geometry both methyls point away from the diene's concave side, both outside.\nStep 3: The dienophile approaches one face; both outside groups are swept to the same side: cis-3,6-dimethylcyclohexene, which is meso.\nStep 4: Regiochemistry of the skeleton: the diene's C2=C3 pi bond becomes the ring double bond and the methyl-bearing termini become the allylic sp3 carbons; the ethylene carbons are the two remaining sp3 carbons.",
      "note": "McMurry 30.6 (Stereochemistry of Cycloadditions), Problem 30-5, asks what stereochemistry to expect from the Diels-Alder reaction of (2E,4E)-2,4-hexadiene with ethylene and of (2E,4Z)-2,4-hexadiene, which gives the trans product. The suprafacial geometry of the thermal [4+2] is Figure 30.10. McMurry 14.5 covers the same stereospecificity from the dienophile's side and the s-cis requirement of the diene.",
      "options": {
        "A": "Correct. Suprafacial addition to the s-cis E,E diene delivers both outside methyls to the same face, giving the cis (meso) product.",
        "B": "Trans-3,6-dimethylcyclohexene is what the (2E,4Z) diene gives: there one methyl is inside and one outside in the s-cis conformation. With two outside methyls a suprafacial process cannot separate them onto different faces.",
        "C": "The methyls are on the diene, not the dienophile, so they end up on the carbons that came from the diene's ends, C3 and C6, which are allylic to the new double bond. C4 and C5 come from ethylene and carry only hydrogens.",
        "D": "Both the position and the relationship are wrong here: the dienophile carbons carry no substituents, and the diene's outside methyls finish cis, not trans."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q20_thermal_2plus2_forbidden",
    "topic": "Stereochemistry of Cycloadditions",
    "difficulty_level": "Medium",
    "question_text": "Two alkenes do not combine to give a cyclobutane when heated, but do so readily when irradiated. What is the orbital explanation?",
    "options": [
      {
        "option_id": "A",
        "text": "Thermally, the ground-state HOMO of one alkene and the LUMO of the other can overlap in phase only antarafacially, a twist a two-carbon pi system cannot manage; on irradiation the excited-state HOMO (psi2*) of one alkene matches the other's LUMO suprafacially",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The thermal reaction is endothermic; light supplies the energy that makes it favourable",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Four electrons are too few for any concerted cyclic transition state, so a ring cannot form without a photochemical diradical",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Thermally the two HOMOs would have to interact, which is forbidden; light empties one HOMO so that a HOMO-LUMO interaction becomes possible",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A cycloaddition is analysed as the HOMO of one component donating into the LUMO of the other. For ethylene the ground-state HOMO is the bonding pi orbital, with both lobes of the same sign on each face, and the LUMO is pi*, with one node. Bringing the two termini of a pi HOMO to the two termini of a pi* LUMO on one face of each puts a like-sign lobe against an opposite-sign lobe at one end: no bonding. Only if one component presents its top face at one end and its bottom face at the other, an antarafacial twist, do the signs match, and a two-carbon pi system is far too short to twist that way. Irradiation moves an electron into pi*, which becomes the HOMO of the excited alkene; pi* against the partner's pi* matches on one face of each, suprafacially, so the photochemical [2+2] is allowed and is a standard cyclobutane synthesis.",
      "approach": "Step 1: Thermal: HOMO (pi, no node) of alkene 1 against LUMO (pi*, one node) of alkene 2; suprafacial-suprafacial overlap is in phase at one end and out of phase at the other.\nStep 2: The in-phase alternative requires antarafacial geometry on one alkene, which is geometrically impossible for such a small pi system. No concerted thermal [2+2].\nStep 3: Photochemical: excite alkene 1 so that pi* is its HOMO; pi* against pi* of alkene 2 is in phase at both ends suprafacially.\nStep 4: Hence [2+2] cycloadditions are photochemical, in line with the even-pairs rule: two pairs, thermal antarafacial, photochemical suprafacial.",
      "note": "McMurry 30.6 (Stereochemistry of Cycloadditions) states that a thermal [2+2] cycloaddition must take place by an antarafacial pathway, that geometric constraints make the antarafacial transition state difficult so concerted thermal [2+2] cycloadditions are not observed, and that irradiation excites an electron from psi1 to psi2*, which becomes the excited-state HOMO, whose interaction with the other alkene's LUMO allows a suprafacial photochemical [2+2] (Figure 30.11). The section calls the photochemical [2+2] of alpha,beta-unsaturated carbonyl compounds one of the best methods for making cyclobutane rings. Table 30.2 gives the general rule.",
      "options": {
        "A": "Correct. The ground-state pi/pi* pair matches only with an antarafacial twist that ethylene cannot make; the excited-state pi*/pi* pair matches suprafacially.",
        "B": "Cyclobutane formation from two alkenes is exothermic: two pi bonds become two sigma bonds. The problem is the barrier to a concerted path, not the thermodynamics.",
        "C": "Four electrons form rings perfectly well in concerted steps; the conrotatory closure of a diene is a four-electron process. The issue is the specific geometry the [2+2] requires, not the electron count.",
        "D": "Cycloadditions always pair a HOMO with a LUMO; two filled HOMOs would give no net bonding in any case. Light does not empty a HOMO, it promotes an electron so that a different orbital becomes the HOMO, one whose symmetry matches suprafacially."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q21_scheme_enone_photocycloaddition",
    "topic": "Stereochemistry of Cycloadditions",
    "difficulty_level": "Hard",
    "question_text": "Cyclohex-2-en-1-one is irradiated in the presence of ethylene. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "O=C1C=CCCC1",
        "C=C"
      ],
      "reagents": "hv",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-membered ring with a ketone carbonyl and a double bond conjugated to it on the adjacent ring carbons: cyclohex-2-en-1-one.",
        "Two carbons joined by a double bond: ethylene."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Bicyclo[4.2.0]octan-2-one, cis-fused (racemic; one enantiomer drawn)",
        "smiles": "O=C1CCC[C@H]2CC[C@@H]12",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Ethylcyclohexan-1-one (racemic)",
        "smiles": "CCC1CCCC(=O)C1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Ethylcyclohexan-1-one (racemic)",
        "smiles": "CCC1CCCCC1=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3,4,4a,5,6,7-Hexahydro-2H-chromene, the cyclic enol ether (racemic)",
        "smiles": "O1CCC2CCCC1=C2",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Irradiation of an alpha,beta-unsaturated ketone excites the enone; its excited-state HOMO has the symmetry that lets its C=C add suprafacially to the C=C of a ground-state alkene, the photochemical [2+2] cycloaddition. The two alkene carbons of ethylene bond to the alpha and beta carbons of the enone, building a cyclobutane fused to the cyclohexanone. Because both new bonds form on one face of the enone's ring double bond, the fusion is cis, and the carbonyl survives untouched. This photocycloaddition is one of the most reliable ways to make a cyclobutane ring.",
      "approach": "Step 1: Two pi bonds, four electrons, two pairs; photochemical, so suprafacial: allowed.\nStep 2: The enone's C2=C3 bonds to ethylene's two carbons: C2-CH2 and C3-CH2, closing a four-membered ring on the alpha and beta carbons.\nStep 3: Suprafacial addition to a ring alkene leaves the two junction hydrogens cis; the product is racemic because either face of the enone reacts.\nStep 4: The carbonyl is a spectator: bicyclo[4.2.0]octan-2-one, C8H12O, the sum of C6H8O and C2H4.",
      "note": "McMurry 30.6 (Stereochemistry of Cycloadditions) states that the photochemical [2+2] cycloaddition reaction occurs smoothly, particularly with alpha,beta-unsaturated carbonyl compounds, and represents one of the best methods known for synthesizing cyclobutane rings, and gives an enone plus alkene example. The cis fusion follows from the suprafacial rule of Table 30.2. Conjugate (1,4) addition to enones, the thermal chemistry these reagents would otherwise show with nucleophiles, is McMurry 19.13.",
      "options": {
        "A": "Correct. The photoexcited enone adds ethylene across its C=C suprafacially, giving the cis-fused cyclobutane with the ketone intact.",
        "B": "An ethyl group on the beta carbon is the product of a conjugate addition of an ethyl nucleophile, such as a Gilman reagent. Ethylene is not a nucleophile and light does not make it one; both of its carbons bond to the enone.",
        "C": "Alkylation at the alpha carbon would need an enolate and an alkyl halide. Nothing here forms an enolate, and the ethylene keeps both of its carbons attached to the ring in the cycloadduct.",
        "D": "This is the product of the enone acting as a four-electron component in a [4+2] with ethylene, a hetero-Diels-Alder that would be thermal and needs an electron-rich alkene. Under irradiation the enone's C=C reacts as a two-electron partner in a [2+2]."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q22_tropone_cyclopentadiene",
    "topic": "Stereochemistry of Cycloadditions",
    "difficulty_level": "Hard",
    "question_text": "Cyclopenta-1,3-diene and cyclohepta-2,4,6-trien-1-one (tropone) react on heating to give a 1:1 adduct in which C1 and C4 of the cyclopentadiene have bonded to C2 and C7 of the tropone (the two carbons flanking the carbonyl across the triene). How should the cycloaddition be classified, and is it suprafacial or antarafacial?",
    "options": [
      {
        "option_id": "A",
        "text": "A [6+4] cycloaddition: ten electrons, five pairs, an odd number, so the thermal reaction is suprafacial on both components",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A [4+2] cycloaddition in which the tropone's C2=C3 acts as dienophile: six electrons, suprafacial",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A [6+4] cycloaddition: five pairs, so the thermal reaction must be antarafacial",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A [6+2] cycloaddition: four pairs, an even number, thermally antarafacial",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The bracketed numbers in a cycloaddition are the numbers of pi electrons each component contributes, and the stereochemical rule depends only on their total. The bonding pattern given, diene termini to the two ends of the tropone's triene unit, means the cyclopentadiene uses all four of its pi electrons and the tropone uses the six of its three conjugated double bonds: a [6+4] cycloaddition. Ten electrons make five pairs, an odd number, so like the Diels-Alder reaction it is thermally allowed with suprafacial geometry on both partners. Higher-order cycloadditions of this kind are rare simply because two long pi systems seldom align, not because the rules forbid them.",
      "approach": "Step 1: Count the electrons from the bonds formed: the diene's C1 and C4 are its termini, so it contributes four; the tropone's C2 and C7 are the ends of the C2=C3-C4=C5-C6=C7 triene, so it contributes six.\nStep 2: [6+4], ten electrons, five pairs, odd.\nStep 3: Thermal with an odd number of pairs: suprafacial (Table 30.2, the same line as [4+2]).\nStep 4: Check the alternative: a [4+2] would join the diene to only one tropone double bond and would leave C7 unbonded, which is not the adduct described.",
      "note": "McMurry 30.6 (Stereochemistry of Cycloadditions), Problem 30-6, gives the reaction of 1,3-cyclopentadiene with cycloheptatrienone and asks what kind of reaction is involved, why the observed product forms, and whether it is suprafacial or antarafacial. Table 30.2 assigns odd numbers of electron pairs to suprafacial thermal cycloadditions. Problem 30-35b poses the parallel thermal [4+6] case in words.",
      "options": {
        "A": "Correct. Four electrons from the diene and six from the triene make five pairs; thermal, odd, suprafacial.",
        "B": "A [4+2] adduct would have the diene bonded to C2 and C3 of the tropone, adjacent carbons. The adduct described has the diene spanning C2 and C7, the ends of the six-electron system.",
        "C": "The count is right but the rule is inverted. An odd number of pairs (five) is suprafacial thermally; even numbers are the antarafacial ones.",
        "D": "The cyclopentadiene bonds through both of its termini, using four electrons, not two. [6+2] would be an eight-electron process, but that is not what the bonding pattern shows."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q23_thermal_suprafacial_cycloadditions",
    "topic": "Stereochemistry of Cycloadditions",
    "difficulty_level": "Medium",
    "question_text": "Which of the following cycloadditions is expected to proceed readily as a concerted, suprafacial process on heating?",
    "options": [
      {
        "option_id": "A",
        "text": "A [6+4] cycloaddition of a triene with a diene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A [4+4] cycloaddition of two dienes",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A [2+2] cycloaddition of two alkenes",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A [2+6] cycloaddition of an alkene with a triene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "For a thermal cycloaddition the deciding number is the total count of electron pairs. An odd number (three in [4+2], five in [6+4]) gives suprafacial-suprafacial bonding, which is geometrically easy and is why such reactions run under mild conditions. An even number (two in [2+2], four in [4+4] and in [2+6]) can be concerted only with one component antarafacial, a twist that is very hard to achieve, so those reactions either need light or go stepwise. The rule is the cycloaddition half of TECA: thermal, even, antarafacial.",
      "approach": "Step 1: Convert each bracket to pairs: [6+4] is 10 electrons, 5 pairs; [4+4] is 8, 4 pairs; [2+2] is 4, 2 pairs; [2+6] is 8, 4 pairs.\nStep 2: Odd pairs, thermal: suprafacial, allowed and easy. That is [6+4] only.\nStep 3: Even pairs, thermal: antarafacial required, geometrically difficult; these are the photochemical cases.\nStep 4: So the [6+4] reaction, like the Diels-Alder, is the one that proceeds readily on heating.",
      "note": "McMurry 30.6 (Stereochemistry of Cycloadditions), Table 30.2, gives suprafacial for thermal cycloadditions with an odd number of electron pairs and antarafacial for an even number, with the photochemical rules reversed; McMurry 30.9 (A Summary of Rules for Pericyclic Reactions), Problem 30-12, asks about a photochemical [4+4] and a thermal [2+6], and Problem 30-35 about a thermal [4+6] and a photochemical [2+6]. The [6+4] reaction of cyclopentadiene with tropone in Problem 30-6 is the working example.",
      "options": {
        "A": "Correct. Five electron pairs, an odd number, so the thermal reaction is suprafacial on both partners, like the Diels-Alder reaction.",
        "B": "Four pairs, even: thermally antarafacial and so not observed as a concerted process. [4+4] cycloadditions are photochemical reactions, anthracene dimerisation being the classic case.",
        "C": "Two pairs, even: the thermal [2+2] would need an antarafacial alkene, which is impossible, so it is the photochemical [2+2] that makes cyclobutanes.",
        "D": "Eight electrons, four pairs, even: thermally antarafacial. Under irradiation the rule flips and a [2+6] becomes suprafacial."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q24_scheme_pyrone_da_retro_da",
    "topic": "Cycloaddition Reactions",
    "difficulty_level": "Hard",
    "question_text": "2H-Pyran-2-one (2-pyrone) is heated with dimethyl acetylenedicarboxylate. The isolated organic product is dimethyl benzene-1,2-dicarboxylate (dimethyl phthalate), and carbon dioxide is evolved. Which two pericyclic reactions occur, in what order?",
    "reaction_scheme": {
      "reactants": [
        "O=c1cccco1",
        "COC(=O)C#CC(=O)OC"
      ],
      "reagents": "heat",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-membered ring containing one oxygen, with a lactone carbonyl next to the oxygen and two conjugated double bonds in the rest of the ring: 2-pyrone.",
        "Two ester groups, each CO2CH3, on the two ends of a carbon-carbon triple bond: dimethyl acetylenedicarboxylate."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A [4+2] Diels-Alder cycloaddition of the alkyne across the pyrone's diene, giving a bicyclic lactone; then a retro-Diels-Alder that expels CO2 from the bicyclic adduct and leaves the aromatic ring",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "An electrocyclic ring-opening of the pyrone to a ketene, then a [2+2] cycloaddition of the ketene with the alkyne",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A [2+2] cycloaddition of the alkyne with the pyrone's C5=C6 bond, then a retro-[2+2] that loses CO2",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A Claisen rearrangement of the pyrone, then decarboxylation of the resulting acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A 2-pyrone contains a cis-locked diene, C3=C4-C5=C6, so it is a Diels-Alder diene; the electron-poor alkyne is a good dienophile. The [4+2] adduct is a bicyclic lactone in which the lactone's O-C(=O) unit bridges the new six-membered ring. That bridge is itself the dienophile of a Diels-Alder reaction run backwards: a retro-[4+2] expels O=C=O and turns the cyclohexadiene into a benzene ring. The aromatisation and the loss of a gas together make the second step irreversible, so the sequence is an efficient way to build a substituted benzene from an alkyne.",
      "approach": "Step 1: Diene: the pyrone's C3 to C6. Dienophile: the alkyne. A thermal [4+2], three pairs, suprafacial, allowed.\nStep 2: The adduct is a 2-oxabicyclo[2.2.2]octadienone: a cyclohexa-1,4-diene bridged by O-C(=O).\nStep 3: Retro-Diels-Alder: the C-O and C-C(=O) sigma bonds of the bridge break and CO2 leaves; six electrons again, allowed.\nStep 4: The ring left behind has three double bonds, benzene, with the two ester groups on adjacent carbons: dimethyl phthalate.",
      "note": "McMurry 30.5 (Cycloaddition Reactions), Problem 30-28, describes a reaction that takes place in two steps, one of which is a cycloaddition while the other is a reverse cycloaddition, and asks the student to identify and draw both; Problem 30-29 uses the same pattern for a furan synthesis. Retro-Diels-Alder reactions are introduced in McMurry 14.4 and 14.5. The text does not use 2-pyrone as its example; the pyrone case is the standard one and is inside ACS scope.",
      "options": {
        "A": "Correct. Diels-Alder across the pyrone diene, then a retro-Diels-Alder that expels CO2 and aromatises the ring.",
        "B": "Opening the lactone ring to a ketene would break the ring's aromatising path and is not a low-energy pericyclic step for a 2-pyrone. And a ketene plus alkyne [2+2] would give a cyclobutenone, not a benzene ring.",
        "C": "Thermal [2+2] cycloadditions are symmetry-forbidden and are not observed, and a cyclobutene adduct could not lose CO2 to give a six-membered aromatic ring. The bonds formed and broken here are those of a [4+2] in both directions.",
        "D": "The pyrone has no allyl vinyl ether or 1,5-diene unit, so there is no [3,3] shift available. Decarboxylation of an acid would also require an acid to be present; here CO2 leaves as part of a pericyclic fragmentation."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q25_sigmatropic_notation",
    "topic": "Sigmatropic Rearrangements",
    "difficulty_level": "Medium",
    "question_text": "Allyl vinyl ether, CH2=CH-O-CH2-CH=CH2, rearranges on heating to pent-4-enal. How is this sigmatropic rearrangement classified, and how is the order worked out?",
    "options": [
      {
        "option_id": "A",
        "text": "[3,3]: the sigma bond that breaks is O-CH2; numbering each fragment from that bond, the new C-C bond forms between position 3 of the allyl fragment and position 3 of the vinyloxy fragment",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "[1,3]: the allyl group migrates from oxygen to the carbon three atoms away",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "[1,5]: five atoms take part in the cyclic transition state",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "[2,3]: the ether oxygen is position 2 of one fragment and the new bond forms at position 3 of the other",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The order of a sigmatropic rearrangement is written [i,j], where the two numbers locate the ends of the new sigma bond within the two fragments that the old sigma bond joined. Each fragment is numbered from its atom in the breaking bond as position 1. In allyl vinyl ether the breaking bond is O-CH2. The allyl fragment is CH2(1)-CH(2)=CH2(3), the vinyloxy fragment is O(1)-CH(2)=CH2(3), and the new bond joins the two position-3 atoms, so the reaction is a [3,3] shift, the Claisen rearrangement. A [1,5] shift, by contrast, has a hydrogen (position 1, its only atom) moving to position 5 of a pentadienyl chain.",
      "approach": "Step 1: Find the sigma bond that breaks: O-CH2 of the allyl group.\nStep 2: Number the allyl fragment from that CH2: 1, 2, 3. The terminal CH2 is 3.\nStep 3: Number the vinyloxy fragment from oxygen: O is 1, CH is 2, terminal CH2 is 3.\nStep 4: The new C-C bond joins allyl C3 to vinyl C3: [3,3]. Six atoms form the cyclic transition state, and the product is CH2=CH-CH2-CH2-CH=O, pent-4-enal, with the allyl group transposed.",
      "note": "McMurry 30.7 (Sigmatropic Rearrangements) explains the notation with these two examples: in the [1,5] shift of a 1,3-diene the sigma bond joins a hydrogen and a pentadienyl group, and migration occurs to position 1 of the H and position 5 of the pentadienyl; in the [3,3] rearrangement of an allylic vinylic ether the two groups are an allyl group and the vinyl ether, and migration occurs to position 3 of each. Problem 30-7 asks for the order of a given rearrangement. The Claisen reaction itself is McMurry 30.8 and, for phenols, McMurry 17.10.",
      "options": {
        "A": "Correct. Numbering both fragments from the O-CH2 bond, the new bond forms between the two position-3 atoms; a six-atom cyclic transition state and a [3,3] shift.",
        "B": "A [1,3] shift would keep the allyl group intact and move its attachment atom. Here the allyl group is transposed: the carbon that was bonded to oxygen becomes the terminal =CH2, which only a bond to position 3 explains.",
        "C": "The numbers are not a count of atoms in the ring; they are positions in the two fragments. Six atoms take part here (three from each fragment), and the shift is [3,3].",
        "D": "The oxygen is position 1 of its fragment, because it is the atom in the bond that breaks. A [2,3] shift is a different reaction, one in which a two-atom fragment such as a sulfonium ylide is involved."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q26_claisen_label_transposition",
    "topic": "Some Examples of Sigmatropic Rearrangements",
    "difficulty_level": "Medium",
    "question_text": "Allyl phenyl ether labelled with 14C at the carbon bonded to oxygen (Ph-O-14CH2-CH=CH2) is heated to give 2-allylphenol. Where is the label in the product?",
    "options": [
      {
        "option_id": "A",
        "text": "On the terminal vinylic carbon: Ph(OH)-CH2-CH=14CH2",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "On the carbon attached to the ring: Ph(OH)-14CH2-CH=CH2",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "On the central carbon: Ph(OH)-CH2-14CH=CH2",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Distributed equally over all three allyl carbons",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Claisen rearrangement is a concerted [3,3] shift through a six-membered cyclic transition state: the C-O bond to the allyl CH2 breaks as a new C-C bond forms between the ring's ortho carbon and the far end of the allyl group, while the allyl double bond shifts. The allyl group is therefore attached through the carbon that was its terminal =CH2, and the carbon that was bonded to oxygen becomes the new terminal =CH2. This inversion, or transposition, of the allyl group is the fingerprint of the mechanism, and an isotopic label at the O-CH2 carbon reports it directly by turning up at the vinylic terminus. The dienone formed first tautomerises to the phenol.",
      "approach": "Step 1: Number the allyl fragment from the O-14CH2 carbon: 14C is position 1, the CH is 2, the terminal CH2 is 3.\nStep 2: The [3,3] shift forms the bond from allyl position 3 to the ortho carbon and breaks the O-position 1 bond.\nStep 3: The allyl pi bond moves to positions 1-2, so the labelled carbon is now the =14CH2 at the end of the chain.\nStep 4: Tautomerisation of the 6-allylcyclohexa-2,4-dienone restores the aromatic ring and gives 2-allylphenol with the label on the terminal vinylic carbon.",
      "note": "McMurry 30.8 (Some Examples of Sigmatropic Rearrangements) states that evidence for the mechanism comes from the observation that the rearrangement takes place with transposition of the allyl group: allyl phenyl ether containing a 14C label on the allyl ether carbon atom yields o-allylphenol in which the label is on the terminal vinylic carbon (Figure 30.14). The aromatic Claisen rearrangement is also treated with the chemistry of phenols in McMurry 17.10.",
      "options": {
        "A": "Correct. The [3,3] shift bonds the far end of the allyl group to the ring and turns the former O-CH2 carbon into the terminal =CH2.",
        "B": "The label would stay on the ring-attached carbon only if the allyl group migrated intact, a [1,3] shift. The concerted [3,3] path attaches the other end of the allyl group.",
        "C": "The central carbon is position 2 of the allyl fragment; it is neither the atom whose bond breaks nor the one that forms the new bond, so the label cannot move there.",
        "D": "A concerted pericyclic reaction has no free allyl radical or cation that could scramble the label. The label ends up in a single position, which is what the experiment shows."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q27_scheme_crotyl_phenyl_ether",
    "topic": "Some Examples of Sigmatropic Rearrangements",
    "difficulty_level": "Hard",
    "question_text": "(E)-But-2-en-1-yl phenyl ether (crotyl phenyl ether) is heated at 200 °C. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "C/C=C/COc1ccccc1"
      ],
      "reagents": "heat",
      "conditions": "200 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring bearing an oxygen that carries a four-carbon chain: O-CH2, then a trans double bond, then a methyl."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-(But-3-en-2-yl)phenol, the branched allyl group on the ortho carbon (racemic)",
        "smiles": "C=CC(C)c1ccccc1O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-[(E)-But-2-en-1-yl]phenol, the crotyl group moved intact to the ortho carbon",
        "smiles": "C/C=C/Cc1ccccc1O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-(But-3-en-2-yl)phenol, the branched allyl group on the para carbon (racemic)",
        "smiles": "C=CC(C)c1ccc(O)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Phenol and buta-1,3-diene",
        "smiles": "Oc1ccccc1.C=CC=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An allyl aryl ether undergoes the Claisen rearrangement, a [3,3] sigmatropic shift through a six-membered transition state in which the O-CH2 bond breaks while the ring's ortho carbon bonds to the far end of the allyl group. A substituent on that far end therefore ends up on the carbon attached to the ring: the crotyl group (CH2-CH=CH-CH3) is delivered through its CH(CH3) terminus, giving a 1-methylallyl, that is, but-3-en-2-yl, substituent. The cyclohexadienone formed first tautomerises to the phenol, and the new benzylic stereocentre is created as a racemate.",
      "approach": "Step 1: Number the allyl fragment from the O-CH2 carbon: position 1 is CH2, position 2 is CH, position 3 is CH(CH3).\nStep 2: [3,3] shift: ortho C bonds to position 3, the methyl-bearing carbon; the O-C1 bond breaks; the double bond moves to C1=C2.\nStep 3: The intermediate is 6-(but-3-en-2-yl)cyclohexa-2,4-dien-1-one; tautomerisation gives 2-(but-3-en-2-yl)phenol.\nStep 4: The product's chain reads ring-CH(CH3)-CH=CH2: the methyl sits next to the ring and the vinyl group is terminal, the transposition signature.",
      "note": "McMurry 30.8 (Some Examples of Sigmatropic Rearrangements), Problem 30-10, asks what product to expect from Claisen rearrangement of 2-butenyl phenyl ether; the mechanism with the 6-allyl-2,4-cyclohexadienone intermediate is Figure 30.14, and the 14C-labelling experiment in the same section proves that the allyl group is inverted. The reaction of the parent allyl phenyl ether is also covered under phenols in McMurry 17.10.",
      "options": {
        "A": "Correct. The ortho carbon bonds to the methyl-bearing end of the crotyl group, so the product carries a but-3-en-2-yl (1-methylallyl) substituent ortho to OH.",
        "B": "Moving the crotyl group intact would be a [1,3] shift, which is thermally forbidden. The concerted [3,3] path attaches the allyl group through its other end, and the labelling experiment in the text rules the intact migration out.",
        "C": "Para migration happens only when both ortho positions are blocked, and then only through a second [3,3] shift. With free ortho positions the first Claisen product tautomerises directly to the ortho phenol.",
        "D": "The ether does not simply fragment; the C-O bond breaks only as the new C-C bond forms, in one concerted step. Phenol and butadiene would need a retro-ene or elimination that has no low-energy path here."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q28_para_claisen_blocked",
    "topic": "Some Examples of Sigmatropic Rearrangements",
    "difficulty_level": "Hard",
    "question_text": "Allyl 2,6-dimethylphenyl ether is heated. Instead of an ortho product it gives 4-allyl-2,6-dimethylphenol, with the allyl group para to the OH. How does the allyl group reach the para position?",
    "options": [
      {
        "option_id": "A",
        "text": "A Claisen [3,3] shift moves the allyl group to a blocked ortho carbon, giving a dienone that cannot tautomerise; a Cope [3,3] shift then moves the allyl group from the ortho to the para carbon, and tautomerisation gives the phenol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A single [1,5] sigmatropic shift carries the allyl group directly from oxygen to the para carbon across the ring",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The ether dissociates to a phenoxide and an allyl cation, which recombine at the para carbon because the ortho positions are hindered",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The ortho product forms first, and the allyl group then walks around the ring by successive [1,2] shifts to the para position",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Claisen rearrangement itself is unchanged by ortho substituents: the [3,3] shift still delivers the allyl group to an ortho carbon, giving a 6-allyl-6-methylcyclohexa-2,4-dienone. What changes is that this carbon now carries a methyl in place of the hydrogen that would normally be lost in tautomerisation, so the dienone is stuck. It does, however, contain a 1,5-diene unit: the allyl group and the ring's C=C system. A Cope rearrangement, another [3,3] shift, moves the allyl group from C6 across to C4, the para carbon, which does carry a hydrogen. Tautomerisation then gives the para-allylphenol. Two successive [3,3] shifts each invert the allyl group, so it arrives at the para position in its original orientation.",
      "approach": "Step 1: Claisen: O-CH2 breaks, ortho C bonds to the allyl terminus; product is a 2,4-dienone with allyl and methyl both on C6.\nStep 2: No H on C6, so no tautomerisation; the dienone persists long enough to react again.\nStep 3: Cope: the C6-allyl sigma bond and the C4=C5 double bond form a 1,5-diene; a [3,3] shift moves the allyl group to C4 and inverts it back.\nStep 4: C4 carries a hydrogen; tautomerisation aromatises the ring and gives 4-allyl-2,6-dimethylphenol.",
      "note": "McMurry 30.8 (Some Examples of Sigmatropic Rearrangements), Problem 30-11, states that when a 2,6-disubstituted allyl phenyl ether is heated in an attempted Claisen rearrangement, migration occurs to give the p-allyl product as the result of two sequential pericyclic reactions, and asks for the explanation. The Cope rearrangement of a 1,5-diene is defined in the same section (Figure 30.15).",
      "options": {
        "A": "Correct. Claisen to the blocked ortho carbon, then Cope from ortho to para, then tautomerisation; two [3,3] shifts in sequence.",
        "B": "A [1,5] shift moves a group at the end of a pentadienyl system, not from oxygen across a ring to a carbon four atoms away. The observed process is two six-electron [3,3] steps, each through a six-membered transition state.",
        "C": "An allyl cation and phenoxide would recombine at oxygen or at ortho as readily as at para, and would scramble any label. The reaction is concerted and stereospecific, with no ionic intermediates.",
        "D": "[1,2] shifts of alkyl groups occur in carbocations, not in neutral dienones. And the ortho phenol never forms, because the blocked ortho dienone has no hydrogen to lose."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q29_scheme_cope_dimethylhexadiene",
    "topic": "Some Examples of Sigmatropic Rearrangements",
    "difficulty_level": "Hard",
    "question_text": "3,3-Dimethylhexa-1,5-diene is heated. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "C=CC(C)(C)CC=C"
      ],
      "reagents": "heat",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-carbon chain with terminal double bonds at each end; the carbon next to one of them carries two methyl groups."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "6-Methylhepta-1,5-diene",
        "smiles": "CC(C)=CCCC=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4,4-Dimethylcyclohexene",
        "smiles": "CC1(C)CC=CCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Methylhepta-1,6-diene",
        "smiles": "C=C(C)CCCC=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(E)-3,3-Dimethylhexa-1,4-diene",
        "smiles": "C=CC(C)(C)/C=C/C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A 1,5-diene heated alone undergoes the Cope rearrangement, a [3,3] sigmatropic shift: the C3-C4 sigma bond breaks, a new C1-C6 sigma bond forms, and the two double bonds move inward to C2=C3 and C4=C5, all in one concerted six-electron step through a cyclic transition state. The product is an isomeric 1,5-diene. When C3 carries two methyls, the rearrangement is driven forward: the quaternary sp3 carbon becomes a trisubstituted alkene carbon, and a more substituted double bond is more stable than a monosubstituted one.",
      "approach": "Step 1: Number the 1,5-diene: C1=C2-C3(CH3)2-C4-C5=C6.\nStep 2: Break C3-C4; form C1-C6; shift the pi bonds to C2=C3 and C4=C5.\nStep 3: Write the product: (CH3)2C=CH-CH2-CH2-CH=CH2, six-methylhepta-1,5-diene, renumbered so that the terminal alkene is C1.\nStep 4: Check the driving force: reactant has two monosubstituted alkenes; product has one monosubstituted and one trisubstituted, so the equilibrium lies to the right.",
      "note": "McMurry 30.8 (Some Examples of Sigmatropic Rearrangements) defines the Cope rearrangement as the conversion of a 1,5-hexadiene to an isomeric 1,5-diene, calls it, with the Claisen and Diels-Alder reactions, among the most generally useful pericyclic reactions for synthesis, and shows the suprafacial [3,3] orbital picture in Figure 30.15; Problem 30-8 asks for the curved-arrow mechanism. The unsubstituted parent is a degenerate rearrangement (product identical to reactant), which is why a substituent is needed to see it.",
      "options": {
        "A": "Correct. C3-C4 breaks, C1-C6 forms and the double bonds move inward; the dimethylated carbon becomes the trisubstituted alkene carbon of 6-methylhepta-1,5-diene.",
        "B": "Forming the C1-C6 bond without breaking C3-C4 would need both pi bonds to be consumed and would give a cyclohexene from a six-electron ring closure. A 1,5-diene is not a conjugated triene; its two double bonds are not conjugated and cannot close a ring electrocyclically. The Cope reaction breaks one sigma bond for every one it makes.",
        "C": "This keeps the methyls on an alkene carbon at C2, which would require breaking the C2-C3 bond, one that is not allylic to both alkenes. Only the sigma bond between the two allyl halves, C3-C4, breaks in a [3,3] shift.",
        "D": "Moving one double bond by a hydrogen shift would be a [1,3] sigmatropic H shift, which is thermally forbidden. Heat alone does not isomerise an isolated terminal alkene inward."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q30_scheme_oxy_cope",
    "topic": "Some Examples of Sigmatropic Rearrangements",
    "difficulty_level": "Hard",
    "question_text": "Racemic hexa-1,5-dien-3-ol is treated with potassium hydride in THF, heated, and then worked up with aqueous acid. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "C=CC(O)CC=C"
      ],
      "reagents": "1. KH, THF, heat; 2. H3O+",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-carbon chain with a terminal double bond at each end and a hydroxyl on C3, the carbon next to one of the double bonds."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Hex-5-enal",
        "smiles": "C=CCCCC=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Hexa-1,5-dien-3-one",
        "smiles": "C=CC(=O)CC=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(3E)-Hexa-1,3,5-triene",
        "smiles": "C=C/C=C/C=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(E)-Hex-4-enal",
        "smiles": "C/C=C/CCC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A 1,5-diene bearing a hydroxyl on C3 is a substrate for the oxy-Cope rearrangement. Potassium hydride removes the O-H proton to give an alkoxide, and the anion accelerates the [3,3] shift enormously. The Cope step is the ordinary one: the C3-C4 sigma bond breaks, C1 bonds to C6, and the pi bonds move to C2=C3 and C4=C5. Because C3 carried the oxygen, the new C2=C3 double bond is an enolate; protonation on work-up gives the enol, which tautomerises to the carbonyl compound. From a secondary alcohol the carbonyl carbon carries a hydrogen, so the product is an aldehyde, hex-5-enal.",
      "approach": "Step 1: KH: O-H to O- K+, the alkoxide of hexa-1,5-dien-3-ol.\nStep 2: [3,3] shift: break C3-C4, form C1-C6, pi bonds to C2=C3 and C4=C5. C3 now bears O- on a double bond: an enolate, CH2=CH-CH2-CH2-CH=CH-O-.\nStep 3: H3O+ protonates to the enol, CH=CH-OH, which tautomerises to CH2-CH=O.\nStep 4: Product: CH2=CH-CH2-CH2-CH2-CHO, hex-5-enal. The alcohol carbon has become the aldehyde carbon.",
      "note": "McMurry 30.8 (Some Examples of Sigmatropic Rearrangements) introduces the oxy-Cope rearrangement as a modification wider in scope than the Cope: a 1,5-diene with an OH next to the double bond is converted into an oxy-anion by a strong base such as potassium hydride, a Cope rearrangement occurs, and reaction with aqueous acid gives an enol that tautomerises to an aldehyde. Keto-enol tautomerism is McMurry 22.1. The anionic acceleration, of many powers of ten, is beyond the text's treatment but is the reason KH rather than heat alone is used.",
      "options": {
        "A": "Correct. Alkoxide formation, [3,3] shift to an enolate, then protonation and tautomerisation give the aldehyde whose carbonyl carbon was the original carbinol carbon.",
        "B": "Potassium hydride is a base, not an oxidant: it removes the O-H proton and leaves the C-H. No hydride is lost from carbon, so no ketone forms, and the carbon skeleton is rearranged in any case.",
        "C": "Dehydration would need the alcohol to leave as water under acid, and here the alcohol has already been converted to its alkoxide and rearranged before any acid is added. The aqueous work-up is dilute and only protonates the enolate.",
        "D": "A double bond at C4 would mean the pi bonds moved by one carbon rather than by the [3,3] pattern. In the Cope product the two double bonds sit at C2=C3 (the future carbonyl) and C4=C5 (renumbered C5=C6 in the aldehyde), never at C4 of hexenal."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q31_15_versus_13_hydrogen_shift",
    "topic": "Some Examples of Sigmatropic Rearrangements",
    "difficulty_level": "Medium",
    "question_text": "5-Methylcyclopenta-1,3-diene rearranges at room temperature to a mixture with 1-methyl- and 2-methylcyclopenta-1,3-diene, whereas propene shows no thermal migration of a hydrogen from C3 to C1. Why does one hydrogen shift occur readily and the other not at all?",
    "options": [
      {
        "option_id": "A",
        "text": "The cyclopentadiene shift is a [1,3] shift driven by relief of ring strain; propene has no strain to drive the same shift",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "The cyclopentadiene shift is a [1,5] shift involving three electron pairs (two pi bonds and one sigma bond), thermally suprafacial and geometrically easy; the propene shift would be a [1,3] shift of two pairs, which must be antarafacial thermally, a geometry a migrating hydrogen cannot reach",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "The ring holds the migrating hydrogen close to C1, while in propene the C3 hydrogen is too far from C1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The methyl group makes the cyclopentadiene's C5-H acidic enough to ionise, and the proton then adds back at C1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sigmatropic hydrogen shifts obey the same electron-pair rule as cycloadditions. A [1,5] shift uses the C-H sigma bond plus two pi bonds: six electrons, three pairs, an odd number, so the thermal reaction is suprafacial, the hydrogen leaving one face and arriving on the same face, which a short C-H bond can do comfortably. A [1,3] shift uses one sigma and one pi bond: four electrons, two pairs, even, so the thermal reaction would have to be antarafacial, with the hydrogen crossing from one face of the allyl system to the other. Its 1s orbital has no second lobe to reach the far face, so thermal [1,3] hydrogen shifts are unknown. In 5-methylcyclopentadiene the C5-H sits at the end of a pentadienyl unit and [1,5] shifts carry it round the ring.",
      "approach": "Step 1: Cyclopentadiene: the sigma-bonded H on C5 and the diene C1=C2-C3=C4 form a pentadienyl unit; H moves from position 5 to position 1: [1,5].\nStep 2: Count: one sigma pair plus two pi pairs, three, odd, thermal: suprafacial, allowed, low barrier; hence room-temperature isomerisation to the 1-methyl and 2-methyl isomers.\nStep 3: Propene: H on C3 moving to C1 across one pi bond is [1,3]: one sigma pair plus one pi pair, even, thermal: antarafacial required.\nStep 4: A hydrogen atom's spherical orbital cannot bond to opposite faces of the allyl system at once, so no concerted thermal [1,3] H shift exists.",
      "note": "McMurry 30.8 (Some Examples of Sigmatropic Rearrangements) states that because a [1,5] sigmatropic rearrangement involves three electron pairs (two pi bonds and one sigma bond) the rules predict a suprafacial reaction, that the [1,5] suprafacial shift of a hydrogen across two double bonds is a commonly observed rearrangement, with 5-methyl-1,3-cyclopentadiene rearranging rapidly at room temperature to a mixture of 1-methyl, 2-methyl and 5-methyl isomers (Figure 30.13), and that thermal [1,3] hydrogen shifts are unknown because they would have to proceed by a strained antarafacial pathway. Table 30.3 gives the rule.",
      "options": {
        "A": "The hydrogen on C5 moves across two double bonds to C1, five atoms away along the pentadienyl path: a [1,5] shift, not [1,3]. And a cyclopentadiene is barely strained; the isomers formed have the same ring, so strain relief is not a driving force here.",
        "B": "Correct. Three pairs make the [1,5] shift suprafacial and easy; two pairs make the [1,3] shift antarafacial, a geometry a hydrogen with a single 1s lobe cannot adopt.",
        "C": "Distance is not the issue: the C3-H of propene lies about as far from C1 as the C5-H of cyclopentadiene lies from C1. What differs is the orbital-symmetry requirement, suprafacial for [1,5] and antarafacial for [1,3].",
        "D": "The C5-H of cyclopentadiene is acidic (pKa about 16) for aromatic reasons, but that is deprotonation by a base, not the neutral thermal process observed. The isomerisation runs in the absence of base, by the concerted [1,5] shift."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q32_deuterium_scrambling_pentadiene",
    "topic": "Some Examples of Sigmatropic Rearrangements",
    "difficulty_level": "Hard",
    "question_text": "Heating (3Z)-5,5,5-trideuteriopenta-1,3-diene (CD3-CH=CH-CH=CH2, cis at C3=C4) scrambles deuterium between C1 and C5. Under the same conditions the (3E) isomer does not. Which explanation fits?",
    "options": [
      {
        "option_id": "A",
        "text": "A suprafacial [1,5] deuterium shift from C5 to C1 requires C5 to lie close to C1, which only the s-cis conformation of the Z isomer allows; in the E isomer the CD3 group points away from C1 and the cyclic transition state cannot form",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The Z isomer is less stable, so it has the energy to undergo a [1,3] deuterium shift; the E isomer does not",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Deuterium is exchanged with trace water in the Z isomer through an allylic anion, which the E isomer cannot form",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The Z isomer first isomerises to the E isomer, which then scrambles deuterium by a radical chain",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A [1,5] hydrogen (or deuterium) shift is a concerted process through a six-membered cyclic transition state: the migrating atom must be within bonding distance of both C5 and C1 at once. That requires the pentadienyl chain to curl into an s-cis arrangement with the CD3 carbon near the terminal CH2. In the (3Z) isomer the CD3 group is on the same side as the rest of the chain and can reach C1 when the C2-C3 bond adopts s-cis. In the (3E) isomer the CD3 group points away from the diene, and no rotation about single bonds can bring it near C1 without breaking a double bond. The shift moves a D from C5 to C1, turning CD3 into CD2 and CH2 into CHD, and repeated shifts scramble the label between the two ends.",
      "approach": "Step 1: Identify the process: D on C5 moving to C1 across C4=C3-C2=C1 is a [1,5] shift, three pairs, thermally suprafacial and allowed.\nStep 2: Geometry: the six-membered transition state needs C5 and C1 close; draw the Z isomer s-cis and the CD3 sits over C1.\nStep 3: In the E isomer the C3=C4 geometry holds C5 on the far side from C1; the transition state is unreachable.\nStep 4: After one shift the product is (3Z)-1-deuterio-5,5-dideuteriopenta-1,3-diene, and further shifts equilibrate D over C1 and C5 without touching C2, C3 or C4.",
      "note": "McMurry 30.8 (Some Examples of Sigmatropic Rearrangements) states that heating 5,5,5-trideuterio-(3Z)-1,3-pentadiene causes scrambling of deuterium between positions 1 and 5 and shows the suprafacial [1,5] orbital picture in Figure 30.13. The geometric requirement that the Z isomer meets and the E isomer does not is the same s-cis argument used for the Diels-Alder diene in McMurry 14.5, and Problem 30-40 uses a related labelled system to prove the suprafacial stereochemistry.",
      "options": {
        "A": "Correct. Only the Z isomer can fold into the s-cis geometry that puts the CD3 carbon over C1, so only it reaches the cyclic [1,5] transition state.",
        "B": "A [1,3] deuterium shift is thermally forbidden regardless of the reactant's energy, and the E isomer is in any case the more stable one. The process is a [1,5] shift, and what the Z isomer has is not extra energy but the right shape.",
        "C": "The allylic C-H of a diene is far too weakly acidic (pKa well above 40) to ionise in hot hydrocarbon, and any ionic exchange would depend on the base, not on the alkene geometry. The scrambling is concerted and intramolecular.",
        "D": "The E isomer is stated not to scramble, so an E-isomer pathway cannot be the route. And a radical chain would also exchange hydrogens at C3 and C4, which stay unlabelled."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q33_deuterioindene",
    "topic": "Some Examples of Sigmatropic Rearrangements",
    "difficulty_level": "Hard",
    "question_text": "Heating 1-deuterioindene (deuterium on the sp3 carbon of the five-membered ring) scrambles the label over all three carbons of the five-membered ring. What mechanism accounts for this?",
    "options": [
      {
        "option_id": "A",
        "text": "Successive thermal [1,5] sigmatropic shifts of D (and H) around the five-membered ring, passing through the non-aromatic isoindene in which the migrating atom sits on C2",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A [1,3] shift of deuterium from C1 to C3, back and forth",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Homolysis of the C1-D bond to give an indenyl radical, which recombines at any of the three positions",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A reversible electrocyclic opening of the five-membered ring that lets the label migrate along the resulting chain",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Indene's five-membered ring is a cyclopentadiene fused to benzene, so the same [1,5] hydrogen shifts that isomerise 5-methylcyclopentadiene operate here. From C1, a suprafacial [1,5] shift of D across the C2=C3 bond and one of the benzene double bonds delivers it to C2, giving isoindene, in which the aromatic sextet has been disrupted and the two ring-fusion carbons carry exocyclic double bonds. Isoindene is high in energy but is reached reversibly; a second [1,5] shift from C2 sends the deuterium on to C3 and restores the aromatic ring. Repeated shifts, of D and of H, distribute the label over C1, C2 and C3. Each step is a three-pair, thermally suprafacial process.",
      "approach": "Step 1: Indene: C1 is sp3 with H and D; C2=C3 and the benzene ring form the pentadienyl system ending at C1.\nStep 2: [1,5] shift of D from C1 to C2 (counting C1, C7a, C3a, C3, C2 around the pentadienyl path): isoindene, non-aromatic, the D now on C2.\nStep 3: A second [1,5] shift, from C2 to C3, re-forms the aromatic ring with D on C3.\nStep 4: Hydrogens move by the same shifts, so at equilibrium D is spread over C1, C2 and C3; the benzene positions are never involved.",
      "note": "McMurry 30.8 (Some Examples of Sigmatropic Rearrangements), Problem 30-9, asks for a mechanism to account for the fact that heating 1-deuterioindene scrambles the isotope label to all three positions on the five-membered ring. The 5-methylcyclopentadiene isomerisation in the same section is the model, and the isoindene intermediate is the ring-fused counterpart of the 2-methyl isomer. The energetic cost of losing benzene's aromaticity in isoindene is why indene needs heating where cyclopentadiene isomerises at room temperature.",
      "options": {
        "A": "Correct. Two successive suprafacial [1,5] shifts move the deuterium C1 to C2 to C3 through isoindene, and the same shifts move hydrogens, scrambling the label over all three positions.",
        "B": "A thermal [1,3] hydrogen or deuterium shift would have to be antarafacial and is not observed. Besides, a C1 to C3 shift alone would never put the label on C2, which the experiment shows.",
        "C": "The C-D bond of an sp3 carbon is far too strong to homolyse under ordinary heating, and a free radical would also abstract hydrogen from other molecules, scrambling the label intermolecularly. The process is intramolecular and concerted.",
        "D": "Opening the five-membered ring would break a C-C sigma bond and destroy the indene skeleton; no such isomer is observed. The skeleton is intact throughout, and only the hydrogens and deuterium move."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q34_aza_claisen_anilinium",
    "topic": "Some Examples of Sigmatropic Rearrangements",
    "difficulty_level": "Hard",
    "question_text": "Heating the N-allyl-N,N-dimethylanilinium ion converts it into 2-allyl-N,N-dimethylanilinium ion (the allyl group on the ring carbon ortho to nitrogen). What is the mechanism?",
    "options": [
      {
        "option_id": "A",
        "text": "A [3,3] sigmatropic shift, the nitrogen analogue of the Claisen rearrangement: the N-CH2 bond breaks as the ortho carbon bonds to the allyl terminus, and the resulting iminium-dienone-type intermediate tautomerises by loss of the ring proton to restore aromaticity",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Heterolysis of the N-allyl bond to an allyl cation and dimethylaniline, followed by Friedel-Crafts alkylation at the ortho position",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A [1,3] shift of the allyl group from nitrogen to the ortho carbon",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A Cope rearrangement of the allyl group with the benzene ring's C1=C2 bond",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An N-allyl anilinium ion has the same connectivity as an allyl aryl ether, with N+ in place of O: the aromatic ring's C1=C2 bond, the heteroatom and the allyl group form the six-atom array of a [3,3] shift. Heating breaks the N-CH2 bond while the ortho carbon bonds to the far end of the allyl group, exactly as in the Claisen rearrangement of allyl phenyl ether. The first-formed intermediate has lost the aromatic sextet and carries the allyl group on an sp3 ring carbon that also bears a hydrogen; loss of that proton (and reprotonation of the amine nitrogen, which is now neutral) restores aromaticity and gives the ortho-allyl product. The allyl group is transposed on the way, as a labelling experiment would show.",
      "approach": "Step 1: Map the atoms onto the Claisen pattern: ring C2=C1-N+(CH3)2-CH2-CH=CH2; the N-CH2 sigma bond is the one that breaks.\nStep 2: [3,3] shift: ortho carbon C2 bonds to the allyl terminus; the ring's C1=N+ iminium character develops as C1-C2 aromaticity is lost; six electrons, three pairs, suprafacial.\nStep 3: The intermediate carries H and allyl on C2 and a C=N+ at C1; tautomerisation removes the C2-H and re-forms the aromatic ring.\nStep 4: Product: 2-allyl-N,N-dimethylaniline, protonated on nitrogen under the reaction conditions.",
      "note": "McMurry 30.8 (Some Examples of Sigmatropic Rearrangements), Problem 30-15, gives the rearrangement of N-allyl-N,N-dimethylanilinium ion and asks for a mechanism; the answer is the nitrogen analogue of the Claisen rearrangement of allyl phenyl ether shown in Figure 30.14. The positive charge on nitrogen is what makes the N-C bond weak enough to take part; a neutral N-allylaniline needs much more forcing conditions. Aza-Claisen reactions are beyond the text's named examples but inside ACS scope.",
      "options": {
        "A": "Correct. The anilinium ion is the aza version of allyl phenyl ether, and it rearranges by the same [3,3] shift followed by rearomatisation.",
        "B": "A free allyl cation would alkylate para as readily as ortho and would give a mixture with N-alkylation products; the concerted [3,3] shift delivers the allyl group specifically ortho, with transposition of the allyl group.",
        "C": "A [1,3] shift is thermally forbidden for the same reason as in the oxygen series, and it would move the allyl group without inverting it. The observed reaction is a six-electron [3,3] process.",
        "D": "A Cope rearrangement is a [3,3] shift of an all-carbon 1,5-diene. Here the sigma bond that breaks is to nitrogen, so the reaction is the Claisen type; the name Cope is reserved for carbon-carbon bond migration."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q35_bullvalene_nmr",
    "topic": "Some Examples of Sigmatropic Rearrangements",
    "difficulty_level": "Hard",
    "question_text": "The 1H NMR spectrum of bullvalene (shown), C10H10, at 100 °C consists of a single peak at 4.22 ppm, although the molecule as drawn has four different kinds of hydrogen. Why?",
    "question_smiles": "C12C=CC3C(C=C1)C3C=C2",
    "structure_alt": "A cage-like C10H10 hydrocarbon: a cyclopropane ring whose three carbons are each linked by a CH=CH bridge to one common CH carbon at the apex, giving three seven-membered rings that share the cyclopropane and the apex.",
    "options": [
      {
        "option_id": "A",
        "text": "Bullvalene undergoes rapid, degenerate Cope ([3,3] sigmatropic) rearrangements; each shift moves the cyclopropane and the double bonds so that every carbon and hydrogen visits every position, and at 100 °C the exchange is fast on the NMR timescale, averaging all ten hydrogens to one signal",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Bullvalene is aromatic, so all ten hydrogens are equivalent by symmetry",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "At 100 °C the molecule dissociates into a symmetric C10H10 radical pair that recombines randomly",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Rapid [1,5] hydrogen shifts around the seven-membered rings move every hydrogen to every carbon",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Bullvalene contains many 1,5-diene units in which a cyclopropane sigma bond is the central bond of the diene. A Cope rearrangement breaks that cyclopropane bond, forms a new one between the ends of two vinyl bridges, and moves the double bonds, regenerating a molecule with exactly the same structure but with the atoms permuted. Because reactant and product are identical, the rearrangement is degenerate and has no thermodynamic preference, and it is fast even at moderate temperatures. Repeated rearrangements interconvert all 1.2 million labelled arrangements of the ten CH units, so on the NMR timescale at 100 °C every hydrogen spends equal time in every environment and a single averaged signal is observed. Cooling slows the process and the separate signals appear.",
      "approach": "Step 1: Find a 1,5-diene: a cyclopropane C-C bond flanked by two vinyl bridges, C=C-C(cyclopropane)-C(cyclopropane)-C=C.\nStep 2: Apply the [3,3] shift: the cyclopropane bond breaks, a new sigma bond joins the two vinyl termini, forming a new cyclopropane, and the double bonds move.\nStep 3: The product is bullvalene again with a different set of atoms in the cyclopropane, at the apex, and in the bridges: degenerate.\nStep 4: At 100 °C the shifts are far faster than the NMR frequency difference between the sites, so the spectrum shows the time average, one peak at 4.22 ppm, between the olefinic and aliphatic values.",
      "note": "McMurry 30.8 (Some Examples of Sigmatropic Rearrangements), Problem 30-39, states that the 1H NMR spectrum of bullvalene at 100 °C consists only of a single peak at 4.22 ppm and asks for an explanation; Problem 30-14 poses the same puzzle for homotropilidene, whose 13C spectrum shows three peaks. The Cope rearrangement is defined in the same section. Time-averaging in NMR, the reason a fast exchange gives one peak, is the same effect that makes cyclohexane's axial and equatorial hydrogens one signal at room temperature (McMurry 13.13).",
      "options": {
        "A": "Correct. Degenerate Cope rearrangements shuffle every CH through every site faster than NMR can resolve them at 100 °C, so one averaged peak appears.",
        "B": "Bullvalene has three isolated double bonds, a cyclopropane and an sp3 apex; there is no cyclic conjugated array and it is not aromatic. Its static structure has four distinct hydrogen environments, which is the puzzle.",
        "C": "No bonds are broken irreversibly and no radicals are involved; the process is a concerted, reversible pericyclic rearrangement. Radical dissociation of a C-C bond would need far more than 100 °C and would give other products.",
        "D": "A [1,5] hydrogen shift would move hydrogens but leave the carbon skeleton, the cyclopropane and the apex, in place, so the carbons would not become equivalent and the 13C spectrum would still show several peaks. The Cope process permutes the carbons themselves."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q36_chorismate_prephenate",
    "topic": "Some Examples of Sigmatropic Rearrangements",
    "difficulty_level": "Hard",
    "question_text": "Chorismate (shown) is converted by the enzyme chorismate mutase into prephenate on the biosynthetic route to phenylalanine and tyrosine. Which pericyclic reaction is this, and which bonds change?",
    "question_smiles": "C=C(C(=O)O)O[C@@H]1C=C(C=C[C@H]1O)C(=O)O",
    "structure_alt": "A cyclohexadiene ring bearing a carboxylic acid on one alkene carbon; one sp3 ring carbon carries a hydroxyl and the adjacent sp3 ring carbon carries an oxygen linked to a C(=CH2)CO2H group, an enol ether of pyruvic acid.",
    "options": [
      {
        "option_id": "A",
        "text": "A Claisen [3,3] sigmatropic rearrangement of the allyl vinyl ether unit: the ring C-O bond to the enol ether oxygen breaks while the terminal CH2 of the enolpyruvyl group bonds to the ring carbon bearing the carboxylate, giving a ketone (the pyruvate side chain) on a cyclohexadiene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A Cope [3,3] rearrangement between the ring diene and the exocyclic C=CH2",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "An electrocyclic ring-opening of the cyclohexadiene followed by reclosure with the side chain",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "An SN2' displacement in which the enolate carbon attacks the ring and expels the ether oxygen as a leaving group",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Chorismate contains an allyl vinyl ether: the ring's C1=C2 double bond, the sp3 carbon C3 that carries the ether oxygen, the oxygen, and the enolpyruvyl C(=CH2)CO2- group. That is the six-atom array of a Claisen rearrangement. The [3,3] shift breaks the C3-O bond and forms a new C-C bond from the enol ether's terminal CH2 to ring C1, the carbon bearing the carboxylate, while the ring double bond moves to C2=C3 and the enol ether C=CH2 becomes a C=O. The product, prephenate, has a pyruvate side chain (CH2-CO-CO2-) attached to a quaternary ring carbon that also holds the original carboxylate, on a cyclohexa-2,5-diene ring. Decarboxylation with loss of water then aromatises the ring to phenylpyruvate, which is transaminated to phenylalanine.",
      "approach": "Step 1: Number the vinyl ether fragment: O is 1, the C(CO2-) is 2, the CH2 is 3. Number the allyl fragment from the ring carbon bonded to O: C3 is 1, C2 is 2, C1 (bearing CO2-) is 3.\nStep 2: [3,3]: break O-C3; form CH2-C1; move the pi bonds to C2=C3 and C=O.\nStep 3: Product: a ring carbon C1 now quaternary with CO2- and CH2-C(=O)-CO2-, a cyclohexa-2,5-diene with the OH still on C4: prephenate.\nStep 4: The enzyme accelerates the same concerted reaction that occurs slowly in solution, by binding the chair-like transition state; no intermediate is involved.",
      "note": "McMurry 30.8 (Some Examples of Sigmatropic Rearrangements) states that although biological examples of pericyclic reactions are relatively rare, phenylalanine arises from the precursor chorismate through a Claisen rearrangement to prephenate, followed by decarboxylation to phenylpyruvate and reductive amination (Figure 30.16), and Problem 30-44 asks for the structure of prephenate from the enzyme chorismate mutase's Claisen rearrangement. The reductive amination step is the reverse of the transamination in McMurry 29.9.",
      "options": {
        "A": "Correct. The allyl vinyl ether unit undergoes a [3,3] Claisen shift: C-O breaks, a new C-C bond forms to the carboxylate-bearing ring carbon, and the enol ether becomes a ketone.",
        "B": "A Cope rearrangement needs a 1,5-diene with a carbon-carbon sigma bond at its centre. Here the central sigma bond is C-O, so the process is the Claisen type, and the ring diene is not the reacting pi system.",
        "C": "The cyclohexadiene ring stays intact; prephenate is still a six-membered carbocycle. Only the C-O bond of the ether and the C=CH2 of the side chain are reorganised.",
        "D": "An SN2' reaction would need an external nucleophile and a leaving group; here the nucleophilic carbon and the oxygen that departs are parts of the same molecule joined through the six-atom pericyclic array, and the enzyme-catalysed reaction is concerted."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q37_vitamin_d_steps",
    "topic": "A Summary of Rules for Pericyclic Reactions",
    "difficulty_level": "Hard",
    "question_text": "In skin, 7-dehydrocholesterol (a steroid with a 5,7-diene in ring B) is converted to vitamin D3 in two steps: sunlight first opens ring B to a hexatriene (previtamin D3), and the previtamin then isomerises at body temperature to vitamin D3, an isomeric hexatriene in which a hydrogen has moved from the C19 methyl group to C9 across the seven-atom conjugated array. Classify the two steps.",
    "options": [
      {
        "option_id": "A",
        "text": "Step 1: a photochemical six-electron electrocyclic ring-opening, conrotatory. Step 2: a thermal [1,7] sigmatropic hydrogen shift, four electron pairs, antarafacial",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Step 1: a thermal six-electron electrocyclic ring-opening, disrotatory. Step 2: a photochemical [1,7] hydrogen shift, suprafacial",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Step 1: a photochemical retro-[4+2] cycloaddition. Step 2: a thermal [1,5] hydrogen shift, suprafacial",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Step 1: a photochemical [2+2] cycloreversion. Step 2: a thermal [1,3] hydrogen shift, antarafacial",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Ring B of 7-dehydrocholesterol is a cyclohexa-1,3-diene, and its opening to a hexatriene is the reverse of a six-electron electrocyclic closure. Three electron pairs, photochemical: conrotatory (the thermal opening would be disrotatory, and heat alone does not open it). The previtamin is a Z-hexatriene, C10=C5-C6=C7-C8=C9, in which the C19 methyl on C10 sits at one end of a seven-atom array, C19-C10=C5-C6=C7-C8=C9, whose other end is C9. Moving a hydrogen from C19 (position 1) to C9 (position 7) of that heptatrienyl chain is a [1,7] sigmatropic shift; it turns C19 into the exocyclic =CH2 of vitamin D3 and C9 into a ring CH2: one sigma pair plus three pi pairs, four pairs, even, so the thermal reaction is antarafacial. The long, flexible triene can twist enough for the hydrogen to leave one face and arrive on the other, which is why the shift proceeds spontaneously at 37 °C. Only the first step needs UVB light.",
      "approach": "Step 1: Step 1 electrons: the ring's two double bonds plus the sigma bond that breaks, six, three pairs; photochemical, so conrotatory.\nStep 2: Step 2 bookkeeping: the migrating H is position 1 of its own fragment; the chain C19-C10=C5-C6=C7-C8=C9 is seven atoms, and the new C-H forms at position 7, C9: [1,7].\nStep 3: Count: one sigma pair and three pi pairs, four pairs, even; thermal, so antarafacial (TECA).\nStep 4: Antarafacial is feasible here because the acyclic triene is long enough to twist; it is not feasible for the short chain of a [1,3] shift.",
      "note": "McMurry 30 Chemistry Matters (Vitamin D, the Sunshine Vitamin) states that the photochemical synthesis of vitamin D takes place in two steps, an electrocyclic ring-opening of a cyclohexadiene to yield an open-chain hexatriene, followed by a sigmatropic [1,7] H shift to yield an isomeric hexatriene, that only the initial electrocyclic ring-opening requires irradiation by UVB light of 295 to 300 nm, and that the subsequent [1,7] shift occurs spontaneously by a thermal isomerization. The antarafacial assignment follows from Table 30.3 and is the subject of Problem 30-35c. The steroid skeleton is McMurry 27.6.",
      "options": {
        "A": "Correct. Photochemical six-electron opening is conrotatory; the thermal [1,7] shift has four pairs and is antarafacial, which a long flexible triene can manage.",
        "B": "The order of conditions is reversed. The text is explicit that only the ring-opening needs light and the hydrogen shift is spontaneous and thermal; a photochemical [1,7] shift would be suprafacial, but that is not the step that occurs.",
        "C": "Opening a cyclohexadiene ring within one molecule is electrocyclic, not a retro-cycloaddition, which would split the molecule in two. And the hydrogen travels seven atoms, a [1,7] shift, not five.",
        "D": "A [2+2] cycloreversion would break the ring into two alkene fragments; the ring opens to a single conjugated triene instead. A thermal [1,3] hydrogen shift is unknown, and the distance moved is seven carbons, not three."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q38_thermal_17_and_55_shifts",
    "topic": "A Summary of Rules for Pericyclic Reactions",
    "difficulty_level": "Medium",
    "question_text": "What stereochemistry, suprafacial or antarafacial, is expected for a thermal [1,7] sigmatropic hydrogen shift and for a thermal [5,5] sigmatropic rearrangement?",
    "options": [
      {
        "option_id": "A",
        "text": "[1,7]: antarafacial; [5,5]: suprafacial",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "[1,7]: suprafacial; [5,5]: suprafacial",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "[1,7]: antarafacial; [5,5]: antarafacial",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "[1,7]: suprafacial; [5,5]: antarafacial",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "For a sigmatropic rearrangement the electron count is the sigma bond that breaks plus the pi bonds that take part, and the number of pi bonds follows from the order: an [i,j] shift involves (i + j - 2)/2 pi bonds. A [1,7] shift uses one sigma bond and three pi bonds, eight electrons, four pairs, even; TECA makes the thermal reaction antarafacial. A [5,5] shift uses one sigma bond and four pi bonds (two on each side), ten electrons, five pairs, odd, so the thermal reaction is suprafacial. The even/odd alternation is the whole rule; whether an antarafacial process is geometrically feasible is a separate question, answered yes for a long triene and no for a short one.",
      "approach": "Step 1: [1,7]: pi bonds = (1 + 7 - 2)/2 = 3; plus one sigma = 4 pairs, even; thermal: antarafacial.\nStep 2: [5,5]: pi bonds = (5 + 5 - 2)/2 = 4; plus one sigma = 5 pairs, odd; thermal: suprafacial.\nStep 3: Cross-check with the familiar cases: [1,5] is 3 pairs, suprafacial; [3,3] is 3 pairs, suprafacial; [1,3] is 2 pairs, antarafacial (and so unobserved for H).\nStep 4: The [1,7] antarafacial H shift is real in the vitamin D system because the heptatrienyl chain can twist; a [5,5] shift is suprafacial like a Cope.",
      "note": "McMurry 30.7 (Sigmatropic Rearrangements), Table 30.3, gives antarafacial for thermal shifts with an even number of electron pairs and suprafacial for an odd number, with the photochemical rules reversed; McMurry 30.9 (A Summary of Rules for Pericyclic Reactions) compresses all three tables into TECA. Problem 30-30 asks whether a [5,5] shift is suprafacial or antarafacial and Problem 30-35c asks the same for a thermal [1,7] shift; the Chemistry Matters essay on vitamin D is the [1,7] example.",
      "options": {
        "A": "Correct. Four pairs (even) make the thermal [1,7] shift antarafacial; five pairs (odd) make the thermal [5,5] shift suprafacial.",
        "B": "The [5,5] assignment is right, but a [1,7] shift has four electron pairs, an even number, and the thermal rule for even is antarafacial. Suprafacial [1,7] is the photochemical case.",
        "C": "The [1,7] assignment is right, but a [5,5] shift has five pairs, an odd number, and odd thermal processes are suprafacial, like the [3,3] Cope and Claisen reactions.",
        "D": "Both are reversed. Count the pairs: [1,7] has four (even, antarafacial thermally) and [5,5] has five (odd, suprafacial thermally)."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch30_q39_23_shift_electron_pairs",
    "topic": "A Summary of Rules for Pericyclic Reactions",
    "difficulty_level": "Medium",
    "question_text": "A [2,3] sigmatropic rearrangement (for example, the rearrangement of an allyl sulfonium ylide, R2S+-CH(-)-R with an allyl group on sulfur, to a homoallyl sulfide) is a thermal process. How many electron pairs are involved, and is it suprafacial or antarafacial?",
    "options": [
      {
        "option_id": "A",
        "text": "Three pairs (one sigma bond, one pi bond, and the ylide carbanion lone pair); thermally suprafacial",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Two pairs (the sigma bond and the pi bond); thermally antarafacial",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Five pairs, one for each of the 2 + 3 atoms; thermally suprafacial",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Three pairs; thermally antarafacial, because the order is not symmetric",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The order of a sigmatropic shift counts atoms in the two fragments, not electrons. In a [2,3] shift the two-atom fragment is S-C(-), the sulfur bonded to a carbanion; the three-atom fragment is the allyl group. The electrons that move are the S-CH2 sigma bond pair, the allyl pi bond pair and the carbanion lone pair, which becomes the new C-C bond: six electrons, three pairs. An odd number of pairs is thermally suprafacial, the same count and the same geometry as the [1,5] hydrogen shift and the [3,3] Cope and Claisen rearrangements, and it proceeds through a five-membered cyclic transition state. The lone pair is what makes a [2,3] shift a six-electron process even though it involves only one pi bond.",
      "approach": "Step 1: Identify the moving electrons: the sigma bond between the fragments (S-CH2 of the allyl), the allyl C=C, and the carbanion lone pair.\nStep 2: Three pairs, odd.\nStep 3: Thermal with an odd number of pairs: suprafacial (TECA: only even thermal counts are antarafacial).\nStep 4: The product is the homoallyl sulfide with the allyl group transposed, the new C-C bond having formed at the former terminal CH2.",
      "note": "McMurry 30.7 (Sigmatropic Rearrangements), Table 30.3, gives suprafacial for thermal sigmatropic shifts with an odd number of electron pairs, and Problem 30-41 states that a given reaction is an example of a [2,3] sigmatropic rearrangement and asks whether it should be suprafacial or antarafacial. The sulfonium ylide example is beyond the text's own list of rearrangements but inside ACS scope; the counting is the point.",
      "options": {
        "A": "Correct. Sigma bond, pi bond and the ylide lone pair make three pairs; odd, so thermally suprafacial.",
        "B": "This forgets the lone pair on the ylide carbon, which is the pair that forms the new C-C bond. With it the count is three, odd, and the thermal reaction is suprafacial, not antarafacial.",
        "C": "The bracket numbers count atoms in the two fragments, not electron pairs. Adding 2 and 3 gives the size of the cyclic transition state (five atoms), not the electron count, which is three pairs.",
        "D": "The symmetry of the order is irrelevant; [1,5] is equally unsymmetric and is suprafacial. Only the parity of the electron-pair count and the conditions matter, and three pairs thermal is suprafacial."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  }
];
