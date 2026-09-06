// OChemStudyBuddy - McMurry Chapter 7
// Author: A. Elangovan, PhD
var CH07_QUESTIONS = [
  {
    "question_id": "ch07_q1_ethylene_hybridization",
    "topic": "Alkene Structure",
    "difficulty_level": "Easy",
    "question_text": "What is the hybridization of the carbon atoms in ethylene (\\(C_2H_4\\)), and what is the approximate \\(H-C-H\\) bond angle?",
    "question_smiles": "C=C",
    "options": [
      {
        "option_id": "A",
        "text": "\\(sp^2\\); \\(117.4^\\circ\\)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "\\(sp^3\\); \\(109.5^\\circ\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "\\(sp\\); \\(180^\\circ\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "\\(sp^2\\); \\(120.0^\\circ\\)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hybridization is fixed by counting electron groups, but the angle that count predicts and the angle a molecule actually adopts are two different numbers, and this question turns on the gap between them.",
      "approach": "Step 1: Count the electron groups on either carbon of ethylene - two C-H bonds and one C=C. That is three groups, so three hybrid orbitals, so sp2.\nStep 2: Three equivalent sp2 orbitals point at the corners of a triangle, which predicts 120 degrees.\nStep 3: Compare with measurement. The H-C-H angle in ethylene is 117.4 degrees and H-C-C is 121.3 degrees, so the two C-H bonds are pinched slightly together because the double bond demands more room than a single bond does.",
      "note": "120 degrees is the prediction from three equivalent groups; the groups here are not equivalent, since one of them is a double bond. Whenever a trigonal centre carries one bond of higher order, expect the angle opposite it to open and the other two to close.",
      "options": {
        "A": "Correct. Three electron groups on each carbon give sp2 hybridization, and the measured H-C-H angle is 117.4 degrees, a little under trigonal because the C=C spreads wider.",
        "B": "sp3 at 109.5 degrees is the four-group case - ethane, not ethylene. A carbon using four sp3 orbitals has no unhybridized p orbital left to make a pi bond with.",
        "C": "sp at 180 degrees belongs to a carbon pointing at only two groups, as at either carbon of an alkyne. Ethylene's carbons point at three.",
        "D": "The hybridization is right and the angle is the idealized one. 120 degrees is what three equivalent groups would give; ethylene's three groups are not equivalent, and the measured H-C-H angle is 117.4 degrees."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two carbon atoms joined by a double bond, each carbon carrying two hydrogen atoms."
  },
  {
    "question_id": "ch07_q2_double_bond_orbitals",
    "topic": "Alkene Structure",
    "difficulty_level": "Easy",
    "question_text": "Which of the following orbital descriptions correctly characterizes the \\(\\pi\\) bond in a carbon-carbon double bond?",
    "question_smiles": "C=C",
    "options": [
      {
        "option_id": "A",
        "text": "Side-by-side overlap of two unhybridized \\(2p\\) orbitals.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "End-on overlap of two \\(sp^2\\) hybrid orbitals.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Side-by-side overlap of two \\(sp^2\\) hybrid orbitals.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "End-on overlap of two unhybridized \\(2p\\) orbitals.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A double bond is not two of the same thing. It is one sigma bond and one pi bond, and the two are built from different orbitals overlapping in different geometries, which is why they behave so differently.",
      "approach": "Step 1: Assign the sigma bond first. It comes from head-on overlap of one sp2 orbital on each carbon, along the line joining the nuclei.\nStep 2: That leaves one unhybridized 2p orbital on each carbon, standing perpendicular to the sp2 plane.\nStep 3: Those two p orbitals lie parallel to one another, so they can only overlap sideways, above and below the plane. That sideways overlap is the pi bond.",
      "note": "Sideways overlap is less effective than head-on overlap, which is why the pi bond is the weaker half of a double bond and the half that breaks first in an addition reaction.",
      "options": {
        "A": "Correct. The two unhybridized 2p orbitals stand parallel and perpendicular to the molecular plane, so they overlap side by side to form the pi bond.",
        "B": "End-on overlap of two sp2 orbitals does occur in a double bond, but that overlap is the sigma bond, not the pi bond.",
        "C": "sp2 orbitals point along the internuclear axis and towards the substituents; they are not oriented to overlap sideways with each other.",
        "D": "The 2p orbitals are perpendicular to the internuclear axis, not pointing along it, so they cannot meet end-on while the sigma framework holds the carbons in place."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A carbon-carbon double bond drawn as two parallel lines, with two hydrogens on each of the two carbons."
  },
  {
    "question_id": "ch07_q3_bond_length_strength",
    "topic": "Alkene Structure",
    "difficulty_level": "Easy",
    "question_text": "How do the carbon-carbon bond length and bond dissociation energy (BDE) of ethylene compare to those of ethane?",
    "question_smiles": "C=C",
    "options": [
      {
        "option_id": "A",
        "text": "Ethylene has a shorter and stronger C-C bond than ethane.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethylene has a longer and weaker C-C bond than ethane.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethylene has a shorter and weaker C-C bond than ethane.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethylene has a longer and stronger C-C bond than ethane.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Bond order, bond length and bond strength move together. Adding a second pair of electrons between two nuclei pulls them closer and holds them there more firmly, so the comparison between ethylene and ethane runs in one direction on both counts.",
      "approach": "Step 1: Identify the bond orders. Ethane's carbon-carbon bond is order 1; ethylene's is order 2.\nStep 2: More bonding electron density between the nuclei means a shorter bond. Ethylene's C=C is 134 pm against 153 pm for ethane's C-C.\nStep 3: More bonding electron density also means more energy is needed to pull the carbons apart. Ethylene's C=C is 728 kJ/mol against 377 kJ/mol for ethane's C-C.",
      "note": "The double bond is not twice as strong as the single bond, only about 1.9 times. The sigma half is worth roughly the full single-bond strength, and the pi half, built from weaker sideways overlap, contributes less.",
      "options": {
        "A": "Correct. Ethylene's C=C is both shorter (134 pm versus 153 pm) and stronger (728 kJ/mol versus 377 kJ/mol) than ethane's C-C.",
        "B": "This reverses both trends. Adding a second bonding pair cannot lengthen and weaken the bond it is added to.",
        "C": "Shorter is right, but a shorter bond between the same two atoms is a stronger one, not a weaker one. The two properties do not move in opposite directions here.",
        "D": "Stronger is right, but a stronger bond between the same two atoms is a shorter one. A longer C=C than C-C would leave the extra electron pair doing nothing."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Ethylene: a two-carbon skeleton with a double bond between the carbons and four hydrogens in all."
  },
  {
    "question_id": "ch07_q4_rotation_barrier",
    "topic": "Alkene Structure",
    "difficulty_level": "Medium",
    "question_text": "What is the approximate thermodynamic barrier to rotation around the carbon-carbon double bond in ethylene, and why does it exist?",
    "question_smiles": "C=C",
    "options": [
      {
        "option_id": "A",
        "text": "\\(\\sim 350\\) kJ/mol; due to the necessity of breaking the parallel overlap of the \\(\\pi\\) bond.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "\\(\\sim 377\\) kJ/mol; due to the necessity of breaking the underlying \\(\\sigma\\) bond.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "~12 kJ/mol; due to steric hindrance between cis-hydrogens.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "~80 kJ/mol; due to the torsional strain of passing through the eclipsed transition state.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Free rotation about a single bond and locked geometry about a double bond come from the same fact seen twice: what happens to orbital overlap as one end turns relative to the other.",
      "approach": "Step 1: Rotate about a C-C single bond. The sigma overlap is cylindrical about the internuclear axis, so turning one end changes nothing about the overlap and the barrier is tiny - 12 kJ/mol in ethane.\nStep 2: Rotate about a C=C. The pi bond comes from two parallel p orbitals; turning one carbon by 90 degrees takes them perpendicular and destroys that overlap entirely.\nStep 3: The barrier must therefore be at least as large as the pi bond is strong, an estimated 350 kJ/mol.",
      "note": "This is why cis and trans alkenes are separable compounds rather than conformers. At room temperature nothing in solution supplies 350 kJ/mol, so the two isomers never interconvert on their own.",
      "options": {
        "A": "Correct. Rotation forces the two parallel p orbitals out of alignment, so the barrier is set by the strength of the pi bond, estimated at 350 kJ/mol.",
        "B": "377 kJ/mol is the strength of ethane's carbon-carbon sigma bond. Rotation about a double bond does not touch the sigma bond, which stays intact throughout.",
        "C": "12 kJ/mol is ethane's rotational barrier, and its origin is torsional strain between C-H bonds, not steric contact across a double bond. No pi bond is involved.",
        "D": "An eclipsed transition state and torsional strain describe conformational analysis of single bonds. A double bond has no eclipsed conformer to pass through - it has a pi bond to break."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "The ethylene skeleton: two carbons joined by a double bond, hydrogens on both ends."
  },
  {
    "question_id": "ch07_q5_ethylene_lumo",
    "topic": "Alkene Structure",
    "difficulty_level": "Hard",
    "question_text": "Which of the following molecular orbitals represents the lowest unoccupied molecular orbital (LUMO) of ethylene in its ground state?",
    "question_smiles": "C=C",
    "options": [
      {
        "option_id": "A",
        "text": "The \\(\\pi^*\\) antibonding molecular orbital, which has a nodal plane perpendicular to the C-C axis.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The \\(\\pi\\) bonding molecular orbital, which has a single nodal plane in the molecular plane.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The \\(\\sigma^*\\) antibonding molecular orbital, which has a nodal plane along the molecular plane.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The unhybridized \\(2p\\) atomic orbital on one of the carbons.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Combining two atomic orbitals always produces two molecular orbitals, one bonding and one antibonding. Which of them is the LUMO is settled by counting electrons into the set from the bottom up.",
      "approach": "Step 1: Take the two parallel 2p orbitals of ethylene. In phase they give the bonding pi orbital; out of phase they give the antibonding pi-star orbital, which carries a node between the two carbons.\nStep 2: Ethylene has two pi electrons. Both go into the lower orbital, filling pi and leaving pi-star empty.\nStep 3: The lowest empty orbital in the molecule is therefore pi-star, whose node sits perpendicular to the C-C axis, between the nuclei.",
      "note": "Naming pi-star as the LUMO is what makes an alkene an electrophile as well as a nucleophile. Its filled pi orbital donates to electrophiles, and its empty pi-star accepts from things like the C-H sigma bonds responsible for hyperconjugation.",
      "options": {
        "A": "Correct. Pi-star is the lowest-energy orbital that ethylene's two pi electrons do not reach, and its extra node lies between the carbons, perpendicular to the C-C axis.",
        "B": "The pi bonding orbital is described correctly, but it is occupied by both pi electrons. An orbital holding electrons cannot be the lowest unoccupied one - pi is the HOMO.",
        "C": "Sigma-star is unoccupied, but it lies well above pi-star in energy, so it is not the lowest empty orbital. Its node also cuts across the C-C axis rather than lying in the molecular plane.",
        "D": "An isolated 2p orbital on one carbon is an atomic orbital. The two p orbitals have already combined into pi and pi-star, and it is those molecular orbitals that hold or fail to hold the electrons."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Ethylene drawn flat, a pair of carbons sharing a double bond with two hydrogens each."
  },
  {
    "question_id": "ch07_q6_propene_density",
    "topic": "Alkene Structure",
    "difficulty_level": "Medium",
    "question_text": "If you analyze the electrostatic potential map of propene (\\(CH_3CH=CH_2\\)), where is the region of most negative electrostatic potential (highest electron density) located?",
    "question_smiles": "CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "Above and below the carbon-carbon \\(\\pi\\) bond plane.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Directly along the C-C \\(\\sigma\\) bond axis.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "In the center of the \\(sp^3\\)-hybridized methyl group.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Surrounding the terminal hydrogens of the double bond.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An electrostatic potential map colours the surface of a molecule by the potential a test positive charge would feel there. Reading one means asking which electrons are furthest out and least tightly held.",
      "approach": "Step 1: Locate the loosely held electrons in propene. They are the two pi electrons, sitting in p orbitals that project above and below the plane of the carbons.\nStep 2: Ask where those electrons reach the molecular surface. The pi lobes are exposed on both faces of the double bond, not buried between the nuclei.\nStep 3: A test positive charge is therefore most stabilized on those faces, which is where the map shows its deepest negative potential.",
      "note": "That exposed pi density is not just a colour on a picture. It is the reason the first step of every electrophilic addition in this chapter is the alkene attacking something, rather than the other way round.",
      "options": {
        "A": "Correct. The pi electrons occupy lobes above and below the plane of the double-bond carbons, where they are exposed at the surface and least tightly held.",
        "B": "Sigma-bond electrons lie directly between the two nuclei, screened by both of them. They are held tightly and do not produce the most negative surface region.",
        "C": "The methyl carbon is sp3 and saturated, with all its electrons in sigma bonds. It is if anything slightly electron-poor, since alkyl groups donate density towards the double bond.",
        "D": "Hydrogens bonded to carbon carry a small partial positive charge, so the regions around them appear at the positive end of the scale, not the negative end."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-carbon chain whose first two carbons are joined by a double bond, with a methyl group on the far end."
  },
  {
    "question_id": "ch07_q7_nonpolar_alkene",
    "topic": "Alkene Structure",
    "difficulty_level": "Medium",
    "question_text": "Which of the following isomeric alkenes is completely nonpolar, having a net molecular dipole moment of zero (\\(\\mu = 0\\) D)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-but-2-ene",
        "smiles": "C/C=C/C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-but-2-ene",
        "smiles": "C/C=C\\C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "propene",
        "smiles": "CC=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-methylpropene",
        "smiles": "CC(C)=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A molecular dipole is the vector sum of the individual bond moments. It vanishes only when symmetry makes those vectors cancel exactly, so the question is really about the symmetry of each isomer, not about which bonds are polar.",
      "approach": "Step 1: Identify the bond moments. An sp3 alkyl group donates weakly towards an sp2 carbon, so each C-CH3 bond carries a small moment pointing from the methyl into the double bond.\nStep 2: Place them for each candidate. In (E)-but-2-ene the two methyls sit on opposite carbons and opposite sides, so their moments point in exactly opposite directions.\nStep 3: Opposite and equal vectors sum to zero, so the E isomer has no net dipole. In every other structure offered, the substituents sit on the same side or on only one carbon, so nothing cancels.",
      "note": "The cancellation depends on the two groups being identical as well as opposed. (E)-2-chlorobut-2-ene is trans-substituted too, but a chlorine and a methyl pull by different amounts, so it retains a dipole.",
      "options": {
        "A": "Correct. The E isomer has a centre of symmetry: the two methyl groups sit on opposite carbons and opposite faces, so their equal bond moments cancel and the molecule is nonpolar.",
        "B": "In the Z isomer both methyls are on the same side of the double bond. Their moments add rather than cancel, giving a small but real dipole - about 0.33 D.",
        "C": "Propene carries a methyl at one end and nothing to oppose it at the other, so there is no second moment available to cancel the first.",
        "D": "2-Methylpropene puts both methyls on the same carbon. Their resultant points along the axis of the double bond towards the CH2 end, with nothing opposing it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q8_propene_bond_angle",
    "topic": "Alkene Structure",
    "difficulty_level": "Hard",
    "question_text": "What is the approximate \\(C-C=C\\) bond angle in propene (\\(CH_3-CH=CH_2\\)) and why does it deviate from the ideal \\(120^\\circ\\)?",
    "question_smiles": "CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "\\(124.3^\\circ\\); due to steric repulsion between the methyl group and the cis-hydrogen on the double bond.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "\\(117.4^\\circ\\); due to the methyl group pulling electron density away.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "\\(109.5^\\circ\\); due to the \\(sp^3\\) hybridization of the middle carbon.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "\\(120.0^\\circ\\); because steric effects do not influence bond angles of \\(sp^2\\) carbons.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hybridization predicts an idealized angle; the substituents a centre actually carries decide how far the real angle strays from it and in which direction. This question asks for the direction and the reason, not for a value to be derived.",
      "approach": "Step 1: Identify the centre. C2 of propene carries three groups - a methyl, a hydrogen, and the doubly bonded CH2 - so it is sp2 and the idealized angle is 120 degrees.\nStep 2: Compare the sizes of the two single-bonded groups. A methyl group is far bulkier than a hydrogen.\nStep 3: The bulky methyl pushes away from the cis hydrogen across the double bond, which opens the C-C=C angle past 120 degrees rather than closing it. The measured value is about 124 degrees.",
      "note": "The number itself is experimental, not something the model derives - what the reasoning fixes is the sign of the deviation. Any option quoting an angle below 120 degrees for this centre has the steric argument running backwards.",
      "options": {
        "A": "Correct. The methyl is bulkier than a hydrogen, so it swings away from the cis hydrogen on the far carbon and widens the C-C=C angle beyond the trigonal 120 degrees.",
        "B": "117.4 degrees is ethylene's H-C-H angle, and the reasoning is wrong twice over: an alkyl group donates electron density towards a double bond rather than withdrawing it, and that would not narrow this angle in any case.",
        "C": "109.5 degrees would require C2 to be sp3, which it cannot be while it is part of a double bond. A doubly bonded carbon has only three electron groups.",
        "D": "Steric effects certainly do influence angles at sp2 carbons; 120 degrees is the idealized value that applies only when the three groups are identical, which they are not in propene."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Propene: a methyl group attached to one end of a two-carbon double bond."
  },
  {
    "question_id": "ch07_q9_ihd_hexene",
    "topic": "Degrees of Unsaturation",
    "difficulty_level": "Easy",
    "question_text": "What is the Index of Hydrogen Deficiency (IHD), or degree of unsaturation, for a compound with the molecular formula \\(C_6H_{10}\\)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "2",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "0",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The degree of unsaturation counts how many hydrogens a formula is missing relative to the saturated acyclic alkane with the same number of carbons. Every ring and every pi bond costs two hydrogens, so the shortfall divided by two is the count.",
      "approach": "Step 1: Write the saturated reference for six carbons. An acyclic alkane is CnH2n+2, so C6H14.\nStep 2: Subtract the hydrogens actually present: 14 minus 10 leaves a shortfall of 4.\nStep 3: Divide by two, because closing a ring or forming a pi bond each removes two hydrogens. 4 divided by 2 gives 2 degrees of unsaturation.",
      "note": "The answer says two, but it does not say which two. C6H10 fits cyclohexene, hexa-1,3-diene, methylenecyclopentane and bicyclo[2.2.0]hexane equally well - the formula fixes the total, never the mixture of rings and pi bonds.",
      "options": {
        "A": "Correct. C6H14 is the saturated reference, the compound is four hydrogens short, and four divided by two gives two degrees of unsaturation.",
        "B": "One degree would correspond to C6H12, two hydrogens short of saturation. C6H10 is short by four.",
        "C": "Three degrees would mean a shortfall of six hydrogens, which is C6H8. The formula given has ten hydrogens, not eight.",
        "D": "Zero degrees means fully saturated and acyclic, C6H14 for six carbons. Any formula with fewer hydrogens than that must contain a ring or a pi bond."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q10_ihd_dopamine",
    "topic": "Degrees of Unsaturation",
    "difficulty_level": "Medium",
    "question_text": "Determine the degree of unsaturation (IHD) for the neurochemical dopamine, which has the molecular formula \\(C_8H_{11}NO_2\\).",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "4",
        "smiles": "",
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
        "text": "5",
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
      "context": "Heteroatoms change the saturated reference by different amounts. Divalent oxygen slots into a chain without altering the hydrogen count at all, while trivalent nitrogen carries an extra hydrogen with it, and the formula has to be adjusted accordingly.",
      "approach": "Step 1: Handle the oxygens. Inserting -O- between two atoms does not change how many hydrogens the skeleton holds, so both oxygens in dopamine are simply ignored.\nStep 2: Handle the nitrogen. A trivalent nitrogen raises the saturated hydrogen count by one, so the reference for C8 with one N is 2(8) + 2 + 1 = 19 hydrogens.\nStep 3: Subtract and halve: 19 minus 11 leaves 8, and 8 divided by 2 gives 4.",
      "note": "Four is exactly what a benzene ring costs - one ring plus three pi bonds - so a result of four in a formula this size is a standing hint that an aromatic ring is present, though the number alone can never prove it.",
      "options": {
        "A": "Correct. Ignoring both oxygens and adding one to the reference for the nitrogen gives C8H19 as saturated, an 8-hydrogen shortfall, and four degrees of unsaturation.",
        "B": "Three would follow from forgetting to add the nitrogen to the reference count, which lowers the shortfall by two hydrogens and the answer by one.",
        "C": "Five would follow from also counting the oxygens. Divalent oxygen inserts into a chain without displacing any hydrogen, so it never affects the calculation.",
        "D": "Two is what you get by subtracting rather than adding for the nitrogen and mishandling the oxygens as well; it leaves far too few degrees to accommodate the ring dopamine is built on."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q11_ihd_halogens",
    "topic": "Degrees of Unsaturation",
    "difficulty_level": "Medium",
    "question_text": "Calculate the degree of unsaturation (IHD) for a halogenated alkene with the molecular formula \\(C_5H_6Br_2Cl F\\).",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "1",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "0",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Halogens are monovalent, exactly like hydrogen. Each one occupies a site a hydrogen would otherwise fill, so for the purpose of counting unsaturation a halogen simply is a hydrogen.",
      "approach": "Step 1: Total the halogens in C5H6Br2ClF: two bromines, one chlorine and one fluorine make four.\nStep 2: Add them to the hydrogen count. The effective hydrogen total is 6 + 4 = 10.\nStep 3: Compare with the saturated reference for five carbons, C5H12: 12 minus 10 leaves 2, and 2 divided by 2 gives one degree of unsaturation.",
      "note": "The three different halogens are a distraction. Nothing in the calculation depends on which halogen it is, only on how many bonds it can make - all four count the same because all four are monovalent.",
      "options": {
        "A": "Correct. Counting all four halogens as hydrogens gives an effective C5H10 against a saturated C5H12, a shortfall of two, and one degree of unsaturation.",
        "B": "Two would require an effective hydrogen count of 8. Adding the four halogens to the six hydrogens gives 10, not 8.",
        "C": "Three would mean the compound is six hydrogens short of C5H12, which no formula with four monovalent halogens and six hydrogens on five carbons can be.",
        "D": "Zero would require the effective count to reach 12. It reaches 10, so one ring or pi bond must be present - as the single carbon-carbon double bond in the name confirms."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q12_ihd_terpene",
    "topic": "Degrees of Unsaturation",
    "difficulty_level": "Medium",
    "question_text": "A natural sesquiterpene has the molecular formula \\(C_{15}H_{22}O_3\\). Spectroscopic analysis reveals the presence of exactly two rings and one ketone carbonyl group. How many carbon-carbon double bonds must be present in this molecule?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "2",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Once the total degrees of unsaturation are known, spectroscopic evidence for particular features can be subtracted from that total. Whatever remains has to be accounted for by something, and here the only candidate left is carbon-carbon double bonds.",
      "approach": "Step 1: Compute the total for C15H22O3. The saturated reference is 2(15) + 2 = 32 hydrogens, oxygens are ignored, so the total is (32 - 22) / 2 = 5.\nStep 2: Subtract what the spectroscopy has already identified: two rings account for 2, and the ketone C=O accounts for 1. That is 3 of the 5.\nStep 3: Two degrees are unassigned, and every remaining unit must be a pi bond, so there are two carbon-carbon double bonds.",
      "note": "The oxygens are ignored when totalling but the carbonyl is subtracted afterwards - those are two different steps, and doing only one of them is the usual error. The oxygen atom is invisible to the formula; the C=O pi bond it forms is not.",
      "options": {
        "A": "Correct. Five total degrees minus two rings minus one carbonyl leaves two, and the only remaining way to spend a degree is a carbon-carbon pi bond.",
        "B": "One would follow from subtracting the three oxygens somewhere in the accounting. Oxygen atoms are ignored in the total; only the carbonyl pi bond is subtracted, and there is one of those.",
        "C": "Three would follow from forgetting to subtract the ketone. The C=O is a pi bond and consumes a degree of unsaturation exactly as a C=C would.",
        "D": "Four would leave nothing for the two rings, which the spectroscopic evidence has already established are present. Rings and pi bonds draw on the same total."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q13_ihd_formula_matching",
    "topic": "Degrees of Unsaturation",
    "difficulty_level": "Hard",
    "question_text": "Which of the following molecular formulas corresponds to a stable, neutral organic compound that contains at least one nitrogen atom and has a degree of unsaturation (IHD) of exactly 3?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "\\(C_7H_{11}N\\)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "\\(C_6H_8N_2\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "\\(C_5H_9N\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "\\(C_8H_{15}N\\)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Screening several formulas against a target degree of unsaturation is the same one-line calculation repeated, and the nitrogen correction is the only place the four candidates differ in how they must be handled.",
      "approach": "Step 1: Use the general form, degrees = (2C + 2 + N - H) / 2, adding one to the reference for every trivalent nitrogen.\nStep 2: Evaluate each candidate. C7H11N gives (14 + 2 + 1 - 11) / 2 = 3. C6H8N2 gives (12 + 2 + 2 - 8) / 2 = 4. C5H9N gives (10 + 2 + 1 - 9) / 2 = 2. C8H15N gives (16 + 2 + 1 - 15) / 2 = 2.\nStep 3: Only C7H11N returns exactly 3.",
      "note": "Two of the candidates return the same value, 2, from quite different formulas - a reminder that this number is a constraint on a structure, not a fingerprint for one. Cyclohexanecarbonitrile fits the winning formula, but so does any other C7H11N with three rings and pi bonds between them.",
      "options": {
        "A": "Correct. (2 x 7 + 2 + 1 - 11) / 2 = 3, the only one of the four candidates that lands on the target.",
        "B": "C6H8N2 returns 4, not 3. With two nitrogens the reference rises by two, and this formula is eight hydrogens short of it.",
        "C": "C5H9N returns 2. It is two hydrogens richer than a formula with three degrees on five carbons and one nitrogen would be.",
        "D": "C8H15N returns 2 as well. Eight carbons and one nitrogen give a saturated reference of 19 hydrogens, and 15 falls four short, not six."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q14_ihd_hydrogenation",
    "topic": "Degrees of Unsaturation",
    "difficulty_level": "Hard",
    "question_text": "A compound with the molecular formula \\(C_9H_9ClO\\) is subjected to catalytic hydrogenation over palladium on carbon (\\(Pd/C\\)) at room temperature and absorbs two molar equivalents of hydrogen to yield a compound with the formula \\(C_9H_{13}ClO\\). What does this result indicate about the starting material?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The starting material has a total IHD of 5, containing three rings/non-reducible groups and two reducible \\(\\pi\\) bonds.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The starting material has a total IHD of 5, containing one ring and two reducible \\(\\pi\\) bonds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The starting material has a total IHD of 4, containing two rings and two reducible \\(\\pi\\) bonds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The starting material has a total IHD of 6, containing four rings and two reducible \\(\\pi\\) bonds.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Catalytic hydrogenation is a counting experiment. Each equivalent of hydrogen absorbed reduces exactly one pi bond that the catalyst can reach, so the uptake splits the total degrees of unsaturation into a reducible part and an unreducible remainder.",
      "approach": "Step 1: Total the degrees for C9H9ClO. Chlorine counts as a hydrogen, giving an effective H count of 10 against a saturated reference of 20, so (20 - 10) / 2 = 5.\nStep 2: Read the uptake. Two equivalents of H2 were absorbed, so two of the five degrees are pi bonds that palladium on carbon reduces at room temperature.\nStep 3: Subtract. The other three degrees survive hydrogenation and must be rings or pi bonds the catalyst leaves alone.",
      "note": "Rings are not the only things that survive. A ketone C=O and, under these mild conditions, an aromatic ring both consume degrees of unsaturation without taking up hydrogen, so the surviving three cannot be read as three rings on this evidence alone.",
      "options": {
        "A": "Correct. Five total degrees, two of them removed by two equivalents of hydrogen, leaving three as rings or groups the catalyst does not touch.",
        "B": "The total of 5 is right but the bookkeeping is not: taking away two reducible pi bonds leaves three degrees, not one.",
        "C": "A total of 4 would require an effective hydrogen count of 12. Counting the chlorine as a hydrogen gives 10, so the total is 5.",
        "D": "A total of 6 would mean C9H9ClO is twelve hydrogens short of saturation. It is ten short, and in any case six minus two reducible bonds is four, not four rings plus two."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q15_ihd_diazepam",
    "topic": "Degrees of Unsaturation",
    "difficulty_level": "Medium",
    "question_text": "Diazepam (Valium) has the molecular formula \\(C_{16}H_{13}ClN_2O\\). How many degrees of unsaturation (IHD) does this molecule possess?",
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
        "text": "10",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "12",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "9",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A drug-sized formula uses the same arithmetic as a five-carbon one; what changes is that three kinds of heteroatom appear at once and each is handled differently. Sorting them before calculating is what keeps the count straight.",
      "approach": "Step 1: Sort the heteroatoms in C16H13ClN2O. The oxygen is ignored, the chlorine counts as a hydrogen, and each of the two nitrogens adds one to the saturated reference.\nStep 2: Build the reference: 2(16) + 2 + 2 = 36 hydrogens for sixteen carbons and two nitrogens.\nStep 3: Build the effective count and subtract: 13 hydrogens plus 1 chlorine is 14, and (36 - 14) / 2 = 11.",
      "note": "Eleven is a large number, and it is worth checking it against the structure: two benzene rings supply 8, the seven-membered ring supplies 1, and the C=O and C=N pi bonds supply the last 2. The arithmetic and the drawing agree.",
      "options": {
        "A": "Correct. A reference of 36 hydrogens against an effective count of 14 leaves a shortfall of 22, and half of that is 11.",
        "B": "Ten would follow from crediting only one of the two nitrogens, which lowers the reference by one hydrogen and the answer by half a degree in each direction.",
        "C": "Twelve would follow from counting the oxygen as well as the nitrogens. Divalent oxygen never changes the hydrogen a skeleton can carry.",
        "D": "Nine would follow from ignoring the nitrogens entirely and treating the chlorine wrongly; it leaves too few degrees to accommodate the two aromatic rings diazepam contains."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q16_hydrocarbon_hydrogenation",
    "topic": "Degrees of Unsaturation",
    "difficulty_level": "Medium",
    "question_text": "A hydrocarbon with the molecular formula \\(C_{10}H_{16}\\) reacts with excess hydrogen gas in the presence of a platinum catalyst to yield a compound of formula \\(C_{10}H_{20}\\). What is the ring/double bond composition of the starting hydrocarbon?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "It is monocyclic and contains two double bonds.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It is bicyclic and contains one double bond.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It is acyclic and contains three double bonds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It is bicyclic and contains two double bonds.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "With excess hydrogen and a platinum catalyst, every carbon-carbon pi bond in a hydrocarbon is reduced and every ring survives. That makes the formula of the product a direct readout of how many rings the starting material had.",
      "approach": "Step 1: Total the degrees in C10H16. The saturated reference is 22 hydrogens, so (22 - 16) / 2 = 3.\nStep 2: Count the hydrogen taken up. The product C10H20 has four more hydrogens than the substrate, which is two equivalents of H2 and therefore two pi bonds reduced.\nStep 3: Subtract. One degree survives exhaustive hydrogenation, and in a hydrocarbon the only thing that can survive is a ring - so the compound is monocyclic with two double bonds.",
      "note": "The product still has one degree of unsaturation, which is the check on the answer: C10H20 is not C10H22, so hydrogenation cannot have removed everything. A fully saturated acyclic product would have been the signal that there was no ring.",
      "options": {
        "A": "Correct. Three degrees in total, two of them removed by the two equivalents of hydrogen taken up, leaving one ring.",
        "B": "Bicyclic would use two of the three degrees on rings, leaving only one pi bond - but two equivalents of hydrogen were absorbed, which requires two.",
        "C": "Acyclic with three double bonds would take up three equivalents of hydrogen and give C10H22. The product stops at C10H20.",
        "D": "Two rings and two double bonds is four degrees of unsaturation, which needs C10H14 as the starting formula. The substrate is C10H16."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q17_branched_diene_iupac",
    "topic": "Naming Alkenes",
    "difficulty_level": "Medium",
    "question_text": "What is the correct IUPAC name for the following branched diene: \\(CH_2=C(CH_3)-CH(CH_3)-CH=CH_2\\)?",
    "question_smiles": "C=C(C)C(C)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "2,3-dimethylpenta-1,4-diene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3,4-dimethylpenta-1,4-diene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,3-dimethylpenta-2,4-diene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-methyl-4-methylenepent-1-ene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Naming a branched diene is a sequence of tie-breaks. Pick the parent, number it so the double bonds get the lowest locants, and only if that leaves a tie do the substituents get a say.",
      "approach": "Step 1: Choose the parent. The longest chain containing both double bonds runs five carbons end to end, so the parent is a pentadiene.\nStep 2: Number for the double bonds. Both start at a chain terminus, so from either direction the locant set is 1 and 4 - a genuine tie.\nStep 3: Break the tie on the substituents. Numbering from one end puts the methyls at 2 and 3; from the other end they fall at 3 and 4. The set 2,3 is lower, so the name is 2,3-dimethylpenta-1,4-diene.",
      "note": "Substituent locants only get consulted after the unsaturation locants tie. Reaching for them first is the commonest way to number an unsymmetrical diene from the wrong end.",
      "options": {
        "A": "Correct. Penta-1,4-diene is the parent either way round, and the tie is broken by the methyl locants, which are 2 and 3 rather than 3 and 4.",
        "B": "This is the same molecule numbered from the other end. The diene locants tie at 1 and 4, so the methyls decide, and 3,4 loses to 2,3.",
        "C": "Penta-2,4-diene would require a double bond between the second and third carbons. Both double bonds here start at a chain terminus, so neither can be at position 2.",
        "D": "This treats one terminal CH2 as a methylidene substituent on a pent-1-ene parent. The parent chain must carry as many of the double bonds as possible, and a pentadiene carries two where a pentene carries one."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A chain of five carbons with a terminal double bond at each end; the second carbon from one end carries a methyl group and the middle carbon carries another."
  },
  {
    "question_id": "ch07_q18_dimethylcyclopentene_iupac",
    "topic": "Naming Alkenes",
    "difficulty_level": "Easy",
    "question_text": "What is the correct IUPAC name for the cyclic alkene shown below?",
    "question_smiles": "CC1=C(C)CCC1",
    "options": [
      {
        "option_id": "A",
        "text": "1,2-dimethylcyclopentene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2,3-dimethylcyclopentene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,5-dimethylcyclopentene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,2-dimethylcyclopent-2-ene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "In a cycloalkene the ring has no ends, so the double bond itself fixes where numbering starts: the two carbons it joins are always C1 and C2. Everything else is numbered around from there.",
      "approach": "Step 1: Count the ring. Five carbons make it a cyclopentene.\nStep 2: Assign C1 and C2 to the two carbons of the double bond - this is forced, not chosen.\nStep 3: Choose the direction that gives the substituents the lower locants. Both methyls sit on the double-bond carbons themselves, so they are at 1 and 2 whichever way round the ring you go: 1,2-dimethylcyclopentene.",
      "note": "Because C1 and C2 are always the doubly bonded pair, a simple cycloalkene needs no locant for the double bond at all - which is why an added 2-ene in a name of this shape is a sign the numbering has gone wrong.",
      "options": {
        "A": "Correct. The double-bond carbons take numbers 1 and 2 by rule, and both methyls sit on those carbons.",
        "B": "Numbers 2 and 3 would place one methyl on a saturated ring carbon adjacent to the double bond. Both methyls are on the double bond itself.",
        "C": "Position 5 is the ring carbon on the far side of C1 from the double bond. Numbering that skips C2 to reach a substituent contradicts the rule that fixes C1 and C2.",
        "D": "The substituent locants are right, but cyclopent-2-ene names a double bond between C2 and C3. In a cycloalkene the double bond is between C1 and C2 by definition, so no such locant exists."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-membered carbon ring containing one double bond, with a methyl group attached to each of the two carbons of that double bond."
  },
  {
    "question_id": "ch07_q19_cip_rules",
    "topic": "Naming Alkenes",
    "difficulty_level": "Hard",
    "question_text": "According to the Cahn-Ingold-Prelog (CIP) priority rules, what is the correct priority sequence (from highest to lowest priority) for the following four groups?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "\\(-CH_2OH > -C\\equiv N > -CH=CH_2 > -CH(CH_3)_2\\)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "\\(-CH_2OH > -CH=CH_2 > -C\\equiv N > -CH(CH_3)_2\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "\\(-C\\equiv N > -CH_2OH > -CH(CH_3)_2 > -CH=CH_2\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "\\(-C\\equiv N > -CH_2OH > -CH=CH_2 > -CH(CH_3)_2\\)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "CIP priority is decided atom by atom, moving outwards only when a comparison ties. What matters at each step is the single highest atomic number encountered, not how many high atoms there are.",
      "approach": "Step 1: Compare first atoms. All four groups begin with carbon, so nothing is settled and the comparison moves out one sphere.\nStep 2: List what each first carbon holds. CH2OH holds (O,H,H); C-triple-bond-N holds (N,N,N) once the triple bond is duplicated; CH=CH2 holds (C,C,H); CH(CH3)2 holds (C,C,H). Ranking on the highest atom in each set puts O above N above C, so CH2OH beats the nitrile and both beat the two carbon-only groups.\nStep 3: Break the remaining tie one sphere further. The vinyl group's real CH2 carries (C,H,H) through its duplicate, while every branch of the isopropyl group is a methyl carrying (H,H,H). Carbon beats hydrogen, so vinyl outranks isopropyl.",
      "note": "The nitrile is the trap: three nitrogens look impressive, but the rule compares the sets one position at a time, and a single oxygen in the first position defeats any number of nitrogens behind it.",
      "options": {
        "A": "Correct. Oxygen in the first position outranks nitrogen, nitrogen outranks carbon, and the vinyl-versus-isopropyl tie breaks one sphere out in the vinyl group's favour.",
        "B": "The first two are placed correctly, but a vinyl group cannot outrank a nitrile: (C,C,H) loses to (N,N,N) at the very first point of difference.",
        "C": "This puts the nitrile above CH2OH, which reverses the O-versus-N comparison, and then ranks isopropyl above vinyl, which reverses the tie-break as well.",
        "D": "The nitrile's three nitrogens do not outrank CH2OH's single oxygen. Duplicated atoms raise a group's rank, but only against groups whose highest atom is no larger."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q20_ez_naming",
    "topic": "Naming Alkenes",
    "difficulty_level": "Hard",
    "question_text": "What is the correct IUPAC name, including the (E)/(Z) configuration, for the alkene represented by the SMILES \\(C/C(Br)=C(/Cl)C\\)?",
    "question_smiles": "C/C(Br)=C(/Cl)C",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-2-bromo-3-chlorobut-2-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "(Z)-2-bromo-3-chlorobut-2-ene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "(E)-3-bromo-2-chlorobut-2-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(Z)-3-bromo-2-chlorobut-2-ene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An E or Z label is not read off the drawing directly. It compares the two higher-priority groups, one chosen on each double-bond carbon, so CIP has to be applied twice before the geometry means anything.",
      "approach": "Step 1: Name the skeleton. Four carbons with a central double bond give but-2-ene, and the halogens sit on C2 and C3. The locant set is 2,3 from either direction, so alphabetical citation decides: bromo is cited first and takes the lower number, giving 2-bromo-3-chloro.\nStep 2: Rank at each carbon. On C2, bromine outranks the methyl; on C3, chlorine outranks the methyl.\nStep 3: Read the geometry. The bromine and the chlorine are on the same side, so the two higher-priority groups are on the same side, which is Z.",
      "note": "Alphabetical order settles the locants but has nothing to do with the descriptor. Bromine is cited first in the name and outranks carbon in the CIP comparison for entirely separate reasons.",
      "options": {
        "A": "The name is right but the descriptor is not. Bromine on one carbon and chlorine on the other are the higher-priority groups, and they are drawn on the same side.",
        "B": "Correct. Bromine beats methyl on one carbon and chlorine beats methyl on the other, and the two halogens sit on the same side of the double bond, so the alkene is Z.",
        "C": "Numbering that gives chlorine the lower locant is wrong: with the locant set tied at 2,3, the substituent cited first alphabetically takes the lower number, and bromo precedes chloro.",
        "D": "The descriptor is right but the numbering is not. Putting chloro at 2 and bromo at 3 breaks the alphabetical tie-break that applies when the locant set is the same from either end."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a double bond in the middle; one of the doubly bonded carbons carries a bromine and the other carries a chlorine, drawn on the same side of the double bond, with a methyl group on each carbon on the opposite side."
  },
  {
    "question_id": "ch07_q21_no_ez_stereochem",
    "topic": "Naming Alkenes",
    "difficulty_level": "Easy",
    "question_text": "Which of the following alkenes cannot be classified as having either (E) or (Z) configuration?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "2-methylbut-2-ene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "pent-2-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-chloroprop-1-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-methylpent-2-ene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Cis-trans isomerism about a double bond requires something to distinguish the two sides at both ends. If either doubly bonded carbon carries two identical groups, swapping them changes nothing and no stereochemistry exists.",
      "approach": "Step 1: Draw each candidate and inspect both carbons of the double bond in turn.\nStep 2: In 2-methylbut-2-ene the double bond runs between C2 and C3, and C2 carries two methyl groups. Two identical substituents on one end means there is no distinguishable arrangement.\nStep 3: Check the others. Pent-2-ene, 1-chloroprop-1-ene and 3-methylpent-2-ene each carry two different groups on both doubly bonded carbons, so each has an E and a Z form.",
      "note": "The test is per carbon, and it only takes one failure to kill the isomerism. A double bond can be heavily substituted and still have no E or Z form, as any 1,1-disubstituted alkene shows.",
      "options": {
        "A": "Correct. One carbon of the double bond carries two methyl groups, so the two sides of that carbon are indistinguishable and no E or Z form exists.",
        "B": "Pent-2-ene has a methyl and a hydrogen on one carbon and an ethyl and a hydrogen on the other, so both ends are distinguishable and both isomers exist.",
        "C": "1-Chloroprop-1-ene carries a chlorine and a hydrogen on one carbon and a methyl and a hydrogen on the other. Both ends discriminate, so E and Z forms are real.",
        "D": "3-Methylpent-2-ene has a methyl and a hydrogen on one doubly bonded carbon and a methyl and an ethyl on the other; an ethyl and a methyl differ, so the isomerism survives."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q22_bromopentene_iupac",
    "topic": "Naming Alkenes",
    "difficulty_level": "Medium",
    "question_text": "What is the correct IUPAC name of the halogenated alkene represented by the SMILES \\(C/C=C/C(Br)C\\)?",
    "question_smiles": "C/C=C/C(Br)C",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-4-bromopent-2-ene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-4-bromopent-2-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)-2-bromopent-3-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(Z)-2-bromopent-3-ene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When a chain carries both unsaturation and a halogen prefix, the two compete for low locants and the contest is not a draw. The double bond is part of the parent name and takes precedence.",
      "approach": "Step 1: Set the parent. Five carbons in the chain make it a pentene, with the bromine as a prefix.\nStep 2: Number for the double bond first. From one end it starts at C2 and the bromine lands on C4; from the other end the double bond starts at C3. Two is lower than three, so the first numbering wins and the name is 4-bromopent-2-ene.\nStep 3: Assign the geometry. On one doubly bonded carbon a methyl outranks a hydrogen; on the other, the CHBrCH3 group outranks a hydrogen. The chain continues on opposite sides, so those two higher-priority groups are opposed and the alkene is E.",
      "note": "The carbon bearing the bromine is a stereocentre, but the name does not specify it: addition of HBr of this kind gives both configurations, so the compound is a racemate and only the double-bond geometry is defined.",
      "options": {
        "A": "Correct. The double bond takes the lower locant, putting it at C2 and the bromine at C4, and the two higher-priority groups lie on opposite sides, which is E.",
        "B": "The numbering is right but the geometry is not. The chain continues on opposite sides of the double bond, which places the higher-priority groups anti, not syn.",
        "C": "Numbering to give the bromine the lower locant puts the double bond at C3. A halogen prefix does not outrank the unsaturation of the parent when locants are assigned.",
        "D": "Both parts are wrong: the numbering favours the substituent over the double bond, and the descriptor contradicts the trans arrangement drawn."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-carbon chain with a double bond between the second and third carbons, drawn with the chain continuing on opposite sides of that bond; the fourth carbon carries a bromine atom."
  },
  {
    "question_id": "ch07_q23_methylpentenol_ez",
    "topic": "Naming Alkenes",
    "difficulty_level": "Hard",
    "question_text": "Determine the correct IUPAC name, including the (E)/(Z) configuration, for the unsaturated alcohol shown.",
    "question_smiles": "CC/C(C)=C(/CO)",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-3-methylpent-2-en-1-ol",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-3-methylpent-2-en-1-ol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)-3-ethylbut-2-en-1-ol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(Z)-3-ethylbut-2-en-1-ol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An alcohol outranks a double bond as a principal characteristic group, so the hydroxyl decides which chain is the parent and where numbering begins. Only then does the geometry get assigned.",
      "approach": "Step 1: Anchor on the OH. The parent chain must contain the carbon bearing it, and that carbon must get the lowest possible locant, so it becomes C1. The longest such chain runs five carbons, giving pent-2-en-1-ol with a methyl on C3.\nStep 2: Rank the groups at the double bond. On C2, the CH2OH outranks the hydrogen. On C3, the ethyl outranks the methyl, because its first atom carries (C,H,H) against the methyl's (H,H,H).\nStep 3: Read the drawing. The CH2OH and the ethyl are on opposite sides, so the higher-priority groups are opposed and the alkene is E.",
      "note": "The ethyl-versus-methyl comparison is the whole item. Both substituents are alkyl and both begin with carbon, so the decision is made one bond further out, where the ethyl still has a carbon and the methyl has run out.",
      "options": {
        "A": "Correct. The five-carbon chain carrying the OH gives 3-methylpent-2-en-1-ol, and the higher-priority CH2OH and ethyl groups lie on opposite sides, so the descriptor is E.",
        "B": "The name is right and the descriptor is not. The two groups that win their CIP comparisons are drawn across the double bond from each other, which is E rather than Z.",
        "C": "A butenol parent shortens the chain by one carbon and demotes it to an ethyl substituent. The parent must be the longest chain containing the hydroxyl carbon, and that chain has five carbons.",
        "D": "This makes both errors at once: it shortens the parent chain to four carbons and reads the geometry as Z when the higher-priority groups are opposed."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-carbon chain with a double bond in the middle. One doubly bonded carbon carries a methyl branch and an ethyl group; the other carries a hydrogen and a CH2 group ending in an OH. The ethyl group is drawn on the same side as the hydrogen, and the methyl branch on the same side as the CH2OH."
  },
  {
    "question_id": "ch07_q24_norbornene_naming",
    "topic": "Naming Alkenes",
    "difficulty_level": "Medium",
    "question_text": "What is the correct IUPAC name of the bicyclic alkene shown?",
    "question_smiles": "C1=CC2CCC1C2",
    "options": [
      {
        "option_id": "A",
        "text": "bicyclo[2.2.1]hept-2-ene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "bicyclo[2.2.1]hept-1-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "bicyclo[2.2.2]oct-2-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "bicyclo[3.2.1]oct-2-ene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A bicyclic name is built from three counts: the total ring atoms, and the lengths of the three bridges joining the two shared carbons. The brackets carry the bridge lengths in decreasing order.",
      "approach": "Step 1: Count the carbons. There are seven in the ring system, so the parent is a bicycloheptane skeleton.\nStep 2: Identify the two bridgehead carbons and the three bridges between them. Two bridges carry two carbons each and the third carries one, giving bicyclo[2.2.1] in decreasing order.\nStep 3: Number and place the double bond. Numbering starts at a bridgehead and travels the longest bridge first, so the double bond in that bridge falls between C2 and C3, giving bicyclo[2.2.1]hept-2-ene.",
      "note": "The bracket numbers must decrease and must sum to two less than the ring-atom count: 2 + 2 + 1 = 5, plus the two bridgeheads, gives the seven carbons of a heptane skeleton. That sum is a fast check on any bicyclic name.",
      "options": {
        "A": "Correct. Seven ring carbons, bridges of 2, 2 and 1, and a double bond in the first bridge starting at C2.",
        "B": "Hept-1-ene would place the double bond at a bridgehead. That is not what is drawn, and in a ring system this small such a double bond cannot exist.",
        "C": "Bicyclo[2.2.2]octene has eight ring carbons: 2 + 2 + 2 bridges plus two bridgeheads. The structure shown has seven.",
        "D": "Bicyclo[3.2.1]octene also totals eight carbons and requires a three-carbon bridge. The longest bridge here carries two."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A bridged bicyclic hydrocarbon: a six-membered ring closed across the middle by a one-carbon bridge, with a double bond in the ring between two carbons that are not bridgeheads."
  },
  {
    "question_id": "ch07_q25_triene_nomenclature",
    "topic": "Naming Alkenes",
    "difficulty_level": "Hard",
    "question_text": "What is the correct IUPAC name of the branched triene represented by the SMILES \\(C=CC(=C)C=C\\)?",
    "question_smiles": "C=CC(=C)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "3-methylenepenta-1,4-diene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-vinylbuta-1,3-diene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-vinylpenta-1,4-diene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-ethenylpenta-1,4-diene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When three double bonds meet at one carbon, no chain can contain all of them. The parent is the longest chain available, and whichever double bond is left outside becomes a substituent.",
      "approach": "Step 1: Find the longest chain. Running through the central carbon from one vinyl group to the other gives five carbons; any path that uses the exocyclic CH2 instead is only four.\nStep 2: Number that five-carbon chain. Both double bonds within it begin at a terminus, so the parent is penta-1,4-diene and the central carbon is C3.\nStep 3: Name what is left. The third double bond runs from C3 out to a single CH2, and a CH2 attached by a double bond is a methylene (methylidene) substituent, giving 3-methylenepenta-1,4-diene.",
      "note": "Methylene and ethenyl name different things: methylene is one carbon joined by a double bond, ethenyl is two carbons joined by a single bond. Confusing them changes the molecular formula.",
      "options": {
        "A": "Correct. The five-carbon chain carrying two of the double bonds is the parent, and the remaining CH2 is a methylene substituent on the central carbon.",
        "B": "A butadiene parent uses only four carbons when five are available in one chain. The longest chain rule settles this before any substituent is named.",
        "C": "The parent chain is right, but the substituent is misidentified as a vinyl and misplaced at C2. It is a one-carbon methylene group and it hangs from the middle carbon, C3.",
        "D": "Ethenyl is another name for vinyl, a two-carbon group attached through a single bond. What hangs off C3 is a single CH2 attached through a double bond, which would make this name a different compound."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A central carbon joined by a double bond to a CH2 group and by single bonds to two vinyl groups, so three double bonds radiate from one centre."
  },
  {
    "question_id": "ch07_q26_alkene_stability_order",
    "topic": "Alkene Stability",
    "difficulty_level": "Easy",
    "question_text": "Arrange the following isomeric alkenes in order of increasing thermodynamic stability (least stable to most stable):\nI. (Z)-hex-2-ene\nII. (E)-hex-2-ene\nIII. 2-methylpent-2-ene\nIV. 2,3-dimethylbut-2-ene",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "I < II < III < IV",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "IV < III < II < I",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "II < I < III < IV",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "I < II < IV < III",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Alkene stability tracks two things in order: how many alkyl groups sit on the double bond, and, for a tie at the same substitution level, whether the two larger groups are forced onto the same side.",
      "approach": "Step 1: Classify each isomer by substitution. The two hex-2-enes are disubstituted, 2-methylpent-2-ene is trisubstituted and 2,3-dimethylbut-2-ene is tetrasubstituted.\nStep 2: Order the classes. More alkyl substituents means more stable, so disubstituted comes below trisubstituted, which comes below tetrasubstituted.\nStep 3: Split the tie between the two disubstituted isomers. Cis places the two propyl-side chains on the same face, where they crowd each other; trans separates them. The trans isomer is the more stable of the pair, so the increasing order is Z, then E, then tri, then tetra.",
      "note": "The cis-trans gap is small next to the substitution gaps - about 3 kJ/mol between the 2-butenes, against roughly 5 kJ/mol per added alkyl group. Substitution decides first; geometry only breaks ties.",
      "options": {
        "A": "Correct. The cis-disubstituted isomer is least stable, the trans-disubstituted next, then the trisubstituted alkene, and the tetrasubstituted alkene is the most stable of the four.",
        "B": "This is the correct sequence read backwards. It places the tetrasubstituted alkene as least stable, which reverses the substitution trend entirely.",
        "C": "This puts the trans isomer below the cis one. Trans keeps the two chains apart and is the more stable of a cis-trans pair, not the less stable.",
        "D": "The two disubstituted isomers are ordered correctly, but the tetrasubstituted alkene is placed below the trisubstituted one. Four alkyl groups on the double bond beat three."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q27_heat_of_hydrogenation_highest",
    "topic": "Alkene Stability",
    "difficulty_level": "Medium",
    "question_text": "Which of the following isomeric alkenes releases the GREATEST amount of heat per mole upon catalytic hydrogenation (has the most exothermic \\(\\Delta H_{hydro}\\))?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "hex-1-ene",
        "smiles": "CCCCC=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-hex-2-ene",
        "smiles": "CC/C=C\\CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)-hex-2-ene",
        "smiles": "CC/C=C/CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-methylpent-2-ene",
        "smiles": "CC(C)=CCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hydrogenating a set of isomers sends all of them to the same saturated alkane. The products are therefore at a common energy, and the heat released measures only how high each alkene started.",
      "approach": "Step 1: Note that all four isomers are C6H12 and all give hexane or a methylpentane of the same energy class on hydrogenation, so the finish line is effectively shared.\nStep 2: Recognise that the most exothermic reaction belongs to the alkene sitting highest above that finish line - that is, the least stable one.\nStep 3: Rank by substitution. Hex-1-ene is monosubstituted, the two hex-2-enes are disubstituted and 2-methylpent-2-ene is trisubstituted, so hex-1-ene is least stable and releases the most heat.",
      "note": "McMurry's measured values make the size of the effect concrete: about -125 kJ/mol for a monosubstituted alkene against -112 kJ/mol for a trisubstituted one, a spread of some 13 kJ/mol across this question's four entries.",
      "options": {
        "A": "Correct. A terminal, monosubstituted double bond is the least stable of the four, so it sits highest above the common product and gives up the most heat.",
        "B": "The cis-disubstituted isomer is less stable than its trans partner but more stable than the terminal alkene, so it releases less heat than hex-1-ene does.",
        "C": "The trans-disubstituted isomer is the more stable member of the cis-trans pair, which puts it lower still and makes its hydrogenation less exothermic, not more.",
        "D": "A trisubstituted alkene is the most stable of the four listed. It starts closest to the product and therefore releases the least heat, not the most."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q28_heat_of_hydrogenation_lowest",
    "topic": "Alkene Stability",
    "difficulty_level": "Medium",
    "question_text": "Which of the following isomeric alkenes releases the LEAST amount of heat per mole upon catalytic hydrogenation?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "2,3-dimethylbut-2-ene",
        "smiles": "CC(C)=C(C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-methylbut-2-ene",
        "smiles": "CC(C)=CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)-but-2-ene",
        "smiles": "C/C=C/C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(Z)-but-2-ene",
        "smiles": "C/C=C\\C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Reading heats of hydrogenation the other way round is the same argument run in reverse: the alkene that gives up the least heat is the one that had least energy to give, which is the most stable of the set.",
      "approach": "Step 1: Count alkyl substituents on each double bond. 2,3-Dimethylbut-2-ene carries four, 2-methylbut-2-ene three, and both but-2-enes two.\nStep 2: Order by stability. Tetrasubstituted sits lowest in energy, then trisubstituted, then trans-disubstituted, then cis-disubstituted.\nStep 3: Convert to heat released. The lowest-energy alkene has the shortest distance to fall to the saturated alkane, so 2,3-dimethylbut-2-ene releases the least heat.",
      "note": "The comparison is only meaningful because the products are equivalent. Heats of hydrogenation rank stabilities across isomers; they say nothing when the alkenes lead to different alkanes.",
      "options": {
        "A": "Correct. Four alkyl groups on the double bond make this the most stable alkene of the four, so its hydrogenation is the least exothermic.",
        "B": "Three alkyl substituents make this alkene stable, but not as stable as the tetrasubstituted one, so it still releases slightly more heat.",
        "C": "A trans-disubstituted alkene carries only two alkyl groups. It sits well above the more highly substituted entries and releases correspondingly more heat.",
        "D": "The cis isomer is the least stable of these four and therefore the one that releases the most heat, which is the opposite of what the question asks for."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q29_hyperconjugation_stability",
    "topic": "Alkene Stability",
    "difficulty_level": "Medium",
    "question_text": "What is the primary electronic reason why highly alkyl-substituted alkenes are thermodynamically more stable than less substituted ones?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Hyperconjugation, which involves the stabilizing overlap of adjacent \\(C-H\\) or \\(C-C\\) \\(\\sigma\\) bonds with the empty \\(\\pi^*\\) antibonding molecular orbital of the double bond.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Inductive electron withdrawal by the alkyl groups, which decreases electronic repulsion in the \\(\\pi\\) cloud.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Steric strain of the alkyl groups which increases the s-character of the carbon-carbon double bond.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The greater electronegativity of \\(sp^3\\)-hybridized carbons relative to \\(sp^2\\)-hybridized carbons, which strengthens the bonds.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Alkyl groups stabilise a double bond, and the question is by what mechanism. The answer has to be an interaction that grows with the number of alkyl groups attached and that involves the pi system itself.",
      "approach": "Step 1: Identify what an alkyl substituent brings to the double bond: C-H and C-C sigma bonds oriented roughly parallel to the p orbitals of the pi system.\nStep 2: Recognise that a filled sigma orbital and the pi system can overlap in that geometry, spreading electron density over a four-atom C=C-C-H unit and lowering the energy. This is hyperconjugation.\nStep 3: Note that the effect scales with opportunity - each additional alkyl group brings more suitably aligned sigma bonds, so more substituted alkenes are more stable.",
      "note": "McMurry frames the same interaction as one between the C=C pi orbital and adjacent C-H sigma bonds, and adds a second, separate factor: an sp2-sp3 carbon-carbon bond is stronger than an sp3-sp3 one, and more substituted alkenes have a higher proportion of them.",
      "options": {
        "A": "Correct. Sigma bonds on the alkyl substituents overlap with the pi system of the double bond, delocalising electron density and lowering the energy; more substituents mean more of these interactions.",
        "B": "Alkyl groups are weakly electron-donating towards an sp2 carbon, not electron-withdrawing, and repulsion within the pi cloud is not what distinguishes these isomers.",
        "C": "Steric strain raises energy rather than lowering it, and substituents do not alter the s character of a double bond, which is fixed by the sp2 hybridization of its carbons.",
        "D": "The electronegativity comparison runs the wrong way: an sp2 carbon holds its electrons more tightly than an sp3 carbon, which is why the alkyl group donates towards the double bond rather than away from it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q30_trans_cycloalkene_limit",
    "topic": "Alkene Stability",
    "difficulty_level": "Medium",
    "question_text": "What is the smallest cycloalkene ring size that is stable enough at room temperature to allow isolation of the trans geometric isomer?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "An 8-membered ring (cyclooctene)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A 6-membered ring (cyclohexene)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A 5-membered ring (cyclopentene)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A 10-membered ring (cyclodecene)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A trans double bond inside a ring forces the chain to leave one alkene carbon on one face and rejoin the other from the opposite face. The ring has to be long enough to reach around, and the smallest ring that manages it defines the limit.",
      "approach": "Step 1: Picture the geometric demand. The two substituents on a trans double bond point in opposite directions, so the connecting chain must twist through and span both faces.\nStep 2: Test small rings. In a five- or six-membered ring there are far too few atoms to make that span, so the trans isomer cannot be built at all at ordinary conditions.\nStep 3: Increase the ring until the strain becomes bearable. Eight carbons is the first ring size that lets a trans alkene be isolated and handled at room temperature.",
      "note": "McMurry's Chapter 7 does not treat trans-cycloalkenes; the item is kept for ACS exam coverage. Trans-cyclooctene is strained enough to be far more reactive than its cis isomer, which is exactly why it is a useful reagent.",
      "options": {
        "A": "Correct. An eight-membered ring is the smallest that can accommodate a trans double bond and still be isolated at room temperature.",
        "B": "A six-membered ring cannot span both faces of a trans double bond. Cyclohexene exists only in the cis form.",
        "C": "A five-membered ring is smaller still, and the geometric demand only becomes harder as the ring shrinks.",
        "D": "A trans-cyclodecene is perfectly isolable, but the question asks for the smallest such ring, and an eight-membered ring already works."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q31_bredts_rule",
    "topic": "Alkene Stability",
    "difficulty_level": "Hard",
    "question_text": "Which of the following bridged bicyclic alkenes contains a double bond that violates Bredt's rule, making it highly unstable and unable to exist under normal conditions?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "bicyclo[2.2.1]hept-1-ene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "bicyclo[3.3.1]non-1-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "bicyclo[4.4.0]dec-1-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "bicyclo[2.2.2]oct-2-ene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A double bond needs its two carbons and their four substituents to lie in one plane. At the bridgehead of a small bridged bicyclic system that plane cannot be reached, because the bridges pull the substituents in three different directions.",
      "approach": "Step 1: Locate the double bond in each candidate and ask whether either of its carbons is a bridgehead, a carbon shared by all the rings.\nStep 2: In bicyclo[2.2.1]hept-1-ene the C1 position is a bridgehead, and the bridges around it are short - 2, 2 and 1 carbons. Forcing that carbon planar twists the pi system badly out of alignment.\nStep 3: Check the others. The bridgehead alkene in the [3.3.1] system sits in a much larger ring and is isolable; the [4.4.0] compound is a fused, not bridged, system; and the [2.2.2] alkene is not at a bridgehead at all.",
      "note": "McMurry's Chapter 7 does not state Bredt's rule; the item is kept for ACS exam coverage. The rule is a statement about strain rather than a prohibition - as bridge sizes grow, bridgehead alkenes become ordinary compounds.",
      "options": {
        "A": "Correct. The double bond sits at a bridgehead of a small bicyclic cage whose short bridges cannot let that carbon become planar, so the compound is not isolable.",
        "B": "This is also a bridgehead alkene, but its rings are large enough to reach a workable geometry. It is a known, isolable compound and the standard counterexample to reading Bredt's rule too strictly.",
        "C": "A [4.4.0] system is two fused rings sharing an edge, not a bridged cage. A double bond at a ring-fusion carbon there is unexceptional.",
        "D": "In bicyclo[2.2.2]oct-2-ene the double bond lies inside a bridge, between two ordinary carbons. Neither of its carbons is shared by all the rings."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q32_heat_of_combustion",
    "topic": "Alkene Stability",
    "difficulty_level": "Medium",
    "question_text": "Two isomeric alkenes, A and B, share the molecular formula \\(C_5H_{10}\\). Complete combustion of 1 mole of isomer A in excess oxygen releases 3268 kJ of heat, whereas combustion of 1 mole of isomer B releases 3273 kJ of heat. Which statement is correct?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Isomer A is thermodynamically more stable than isomer B by 5 kJ/mol.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Isomer B is thermodynamically more stable than isomer A by 5 kJ/mol.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Isomer A has a higher degree of unsaturation than isomer B.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Isomer B must be a trans-alkene, and isomer A must be a cis-alkene.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Combustion, like hydrogenation, sends isomers to a common destination - carbon dioxide and water in identical amounts. The heat released therefore measures starting energy alone, and less heat means a more stable starting material.",
      "approach": "Step 1: Confirm the comparison is legitimate. Both isomers are C5H10, so both burn to five CO2 and five H2O and the products are identical.\nStep 2: Compare the heats released: 3268 kJ for A and 3273 kJ for B.\nStep 3: Interpret. B gives up 5 kJ more per mole, so B began 5 kJ/mol higher in energy. A is therefore the more stable isomer, by 5 kJ/mol.",
      "note": "The sign convention is the trap. A larger heat released is a more negative enthalpy of combustion and marks a less stable compound, so the isomer with the bigger number in this stem is the weaker one.",
      "options": {
        "A": "Correct. A releases 5 kJ/mol less, so it started 5 kJ/mol lower in energy and is the more stable of the two isomers.",
        "B": "This reads the numbers the wrong way round. Releasing more heat means starting from higher energy, which is what a less stable isomer does.",
        "C": "Both isomers share the formula C5H10 and therefore have the same degree of unsaturation, one. Combustion data could not reveal a difference that does not exist.",
        "D": "Nothing in the data identifies either isomer as a cis-trans pair; C5H10 also covers terminal alkenes, branched alkenes and cyclopentane. The measurement gives a relative energy, not a structure."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q33_dimethylcyclohexenes_stability",
    "topic": "Alkene Stability",
    "difficulty_level": "Hard",
    "question_text": "What is the correct thermodynamic stability order for the three isomeric dimethylcyclohexenes:\nI. 1,2-dimethylcyclohexene\nII. 1,4-dimethylcyclohexene (specifically, 1,4-dimethylcyclohexene has a trisubstituted double bond: \\(C1(CH_3)=CH-CH_2-CH(CH_3)-CH_2-CH_2\\))\nIII. 3,3-dimethylcyclohexene (disubstituted double bond)",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "III < II < I (least stable to most stable)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "I < II < III",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "II < III < I",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "III < I < II",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Within one ring size the ordering reduces to a single count: how many carbon substituents are attached directly to the two carbons of the double bond. Where the methyl groups sit on the ring is what changes that count.",
      "approach": "Step 1: Count for 1,2-dimethylcyclohexene. Each doubly bonded carbon carries a methyl and a ring carbon, so all four positions are alkyl - tetrasubstituted.\nStep 2: Count for 1,4-dimethylcyclohexene. One doubly bonded carbon carries a methyl and a ring carbon, the other carries a hydrogen and a ring carbon - trisubstituted, since the second methyl is out on C4, away from the double bond.\nStep 3: Count for 3,3-dimethylcyclohexene. Both methyls sit on a saturated ring carbon, so the double bond carries only its two ring neighbours - disubstituted, and the least stable of the three.",
      "note": "A methyl group only counts if it is bonded to a carbon of the double bond. The gem-dimethyl pair in the third isomer is a substituent on the ring, and contributes nothing to the stability of the alkene.",
      "options": {
        "A": "Correct. The disubstituted 3,3-isomer is least stable, the trisubstituted 1,4-isomer next, and the tetrasubstituted 1,2-isomer is the most stable.",
        "B": "This is the ordering reversed. It ranks the tetrasubstituted alkene as least stable, which contradicts the substitution trend.",
        "C": "This places the trisubstituted isomer below the disubstituted one. Three alkyl groups on a double bond stabilise it more than two.",
        "D": "The least stable isomer is identified correctly, but the last two are swapped: the 1,2-isomer is tetrasubstituted and outranks the trisubstituted 1,4-isomer."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q34_exo_vs_endo",
    "topic": "Alkene Stability",
    "difficulty_level": "Hard",
    "question_text": "Compare the thermodynamic stability of methylenecyclohexane and 1-methylcyclohexene. Which isomer is more stable and why?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "1-Methylcyclohexene is more stable because its double bond is trisubstituted and endocyclic, whereas methylenecyclohexane has a disubstituted exocyclic double bond.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methylenecyclohexane is more stable because its exocyclic double bond has less steric hindrance with the ring hydrogens.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "They have equal stability because they are structural isomers with the same molecular weight.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methylenecyclohexane is more stable because exocyclic double bonds are inherently thermodynamically favored in six-membered rings.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Endocyclic and exocyclic describe where a double bond sits relative to a ring, but the stability difference they produce is not a separate rule. It comes from how many carbon substituents each arrangement puts on the double bond.",
      "approach": "Step 1: Count for 1-methylcyclohexene. The double bond lies inside the ring, so each of its carbons carries a ring neighbour, and one of them carries the methyl as well - three alkyl substituents.\nStep 2: Count for methylenecyclohexane. The double bond runs from a ring carbon out to a CH2. The ring carbon supplies two alkyl neighbours; the exocyclic CH2 supplies only hydrogens - two alkyl substituents.\nStep 3: Compare. Three beats two, so 1-methylcyclohexene is the more stable isomer.",
      "note": "This is why acid-catalysed isomerisation of an exocyclic alkene in a six-membered ring drives the double bond into the ring: the endocyclic isomer is the thermodynamic sink for exactly the substitution reason above.",
      "options": {
        "A": "Correct. The endocyclic double bond is trisubstituted while the exocyclic one is only disubstituted, and the more substituted alkene is the more stable.",
        "B": "Steric contact with ring hydrogens is not what separates these isomers, and it would not outweigh the difference of one alkyl substituent on the double bond in any case.",
        "C": "Structural isomers share a molecular formula but not an energy. That is precisely why heats of hydrogenation can rank them at all.",
        "D": "There is no general preference for exocyclic double bonds in six-membered rings; the reverse is true, and it follows from the substitution count rather than from the ring size."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q35_addition_mechanism_rds",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Easy",
    "question_text": "What is the rate-determining step in the electrophilic addition of a hydrogen halide (\\(HX\\)) to an alkene?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Protonation of the alkene double bond to generate a carbocation intermediate.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Attack of the halide anion on the carbocation intermediate.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Heterolytic cleavage of the \\(H-X\\) bond prior to alkene interaction.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Deprotonation of the carbocation to form the alkyl halide.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "In a two-step mechanism the rate-determining step is the one with the highest barrier, and that is normally the step that builds the least stable species rather than the one that consumes it.",
      "approach": "Step 1: Lay out the two steps. The alkene's pi electrons attack H-X, putting the proton on one carbon and leaving a carbocation on the other; then the halide ion bonds to that carbocation.\nStep 2: Weigh the first step. It converts a neutral alkene and a neutral acid into two ions, one of them an electron-deficient carbocation, so it climbs uphill and its transition state sits high.\nStep 3: Weigh the second step. Two oppositely charged ions combine, which is strongly downhill and has almost no barrier. The first step therefore controls the rate.",
      "note": "Because the slow step is the one that makes the carbocation, everything that changes the rate of an electrophilic addition - alkene substitution, solvent, the acid used - works by changing how easily that cation forms.",
      "options": {
        "A": "Correct. Making the carbocation is endergonic and has the higher barrier, so this first step sets the rate of the whole addition.",
        "B": "Combining a carbocation with a halide ion is a fast, strongly downhill step. It happens after the rate has already been decided.",
        "C": "H-X does not ionise on its own before meeting the alkene; in the solvents used for this reaction it stays molecular until the pi electrons attack it.",
        "D": "Removing a proton from the carbocation is an elimination step and would destroy the addition product rather than form it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q36_carbocation_stability",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Easy",
    "question_text": "Which of the following orders correctly lists carbocations in order of DECREASING stability (most stable to least stable)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Tertiary (\\(3^\\circ\\)) > Secondary (\\(2^\\circ\\)) > Primary (\\(1^\\circ\\)) > Methyl",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methyl > Primary (\\(1^\\circ\\)) > Secondary (\\(2^\\circ\\)) > Tertiary (\\(3^\\circ\\))",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Secondary (\\(2^\\circ\\)) > Tertiary (\\(3^\\circ\\)) > Primary (\\(1^\\circ\\)) > Methyl",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Tertiary (\\(3^\\circ\\)) > Primary (\\(1^\\circ\\)) > Secondary (\\(2^\\circ\\)) > Methyl",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carbocation is planar and electron-deficient, with an empty p orbital on the positive carbon. Anything that pushes electron density towards that orbital lowers the energy, and alkyl groups do it better than hydrogens.",
      "approach": "Step 1: Note what changes across the series. Going from methyl to primary to secondary to tertiary replaces hydrogens on the cationic carbon with alkyl groups.\nStep 2: Apply the inductive effect. An alkyl group is larger and more polarisable than a hydrogen, so its sigma electrons shift more readily towards the positive centre.\nStep 3: Add hyperconjugation. Each alkyl group brings C-H bonds that can align with the empty p orbital and donate into it, and more alkyl groups mean more such bonds. Both effects run the same way, giving tertiary above secondary above primary above methyl.",
      "note": "The evidence McMurry cites is gas-phase: the energy needed to pull an alkyl halide apart into a carbocation and a halide ion falls steadily from primary to tertiary. Solvation lowers all of those numbers, but it does not change their order.",
      "options": {
        "A": "Correct. Each alkyl group replacing a hydrogen on the cationic carbon adds inductive donation and further hyperconjugation, so stability rises with substitution.",
        "B": "This is the series reversed. A methyl cation has no alkyl groups at all to stabilise its empty p orbital and is the least stable of the four.",
        "C": "Placing secondary above tertiary contradicts the trend; a third alkyl group adds stabilisation rather than removing it.",
        "D": "Primary and secondary are interchanged. Two alkyl groups stabilise a cation more than one does, so secondary must sit above primary."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q37_allyl_carbocation",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Medium",
    "question_text": "Which of the following carbocations is the MOST stable due to electronic delocalization?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Allyl carbocation (\\(CH_2=CH-CH_2^+\\))",
        "smiles": "C=C[CH2+]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propyl carbocation (\\(CH_3CH_2CH_2^+\\))",
        "smiles": "CC[CH2+]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Isobutyl carbocation (\\((CH_3)_2CHCH_2^+\\))",
        "smiles": "CC(C)[CH2+]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl carbocation (\\(CH_3CH_2^+\\))",
        "smiles": "C[CH2+]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Induction and hyperconjugation spread positive charge a little way through sigma bonds. Resonance does something categorically different: it puts the charge on two atoms at once, and no amount of alkyl substitution reproduces that.",
      "approach": "Step 1: Sort the four cations by how many alkyl groups sit on the positive carbon. The propyl, isobutyl and ethyl cations are all primary, so all three depend on a single alkyl group's donation.\nStep 2: Look at the allyl cation. Its cationic carbon is next to a double bond, so the pi electrons can shift over to make a new pi bond and leave the charge on the far carbon.\nStep 3: Recognise what that means. The two resonance forms are equivalent, so the charge is genuinely shared between two carbons rather than concentrated on one, and the allyl cation is the most stable of the four.",
      "note": "Resonance here buys roughly the stabilisation that one extra alkyl group would, which puts an allyl cation near the level of a secondary one - so the comparison is only clean against primary cations, as it is here. McMurry develops allylic cations in the chapter on conjugated systems, not this one.",
      "options": {
        "A": "Correct. The positive charge is delocalised over two carbons through the adjacent pi bond, and the two resonance forms are equivalent.",
        "B": "A propyl cation is primary, with the charge fixed on one carbon and only a single alkyl chain donating into the empty orbital.",
        "C": "An isobutyl cation is also primary. Branching further down the chain does not reach the cationic carbon, so it adds very little.",
        "D": "An ethyl cation is primary and the smallest of the group, with just one methyl available to donate. It is the least stabilised of the four."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q38_markovnikov_modern",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Easy",
    "question_text": "What is the modern formulation of Markovnikov's rule regarding the addition of unsymmetrical reagents to unsymmetrical alkenes?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The electrophilic addition proceeds via the formation of the more stable carbocation intermediate.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The nucleophile always adds to the double-bonded carbon with more hydrogen atoms.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The hydrogen atom always adds to the carbon with fewer hydrogen atoms.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The reaction proceeds to give a thermodynamic product that has no carbocation intermediates.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Markovnikov's original statement was a pattern spotted in products. The modern version replaces the pattern with the reason for it, which is why it still works on substrates the original wording cannot describe.",
      "approach": "Step 1: Recall the mechanism. The proton adds first and the choice of which carbon it lands on decides which carbocation forms.\nStep 2: Compare the two possible cations. Protonating the less substituted carbon leaves the charge on the more substituted one, which is the more stable option.\nStep 3: State the rule in those terms: the addition goes through whichever carbocation is more stable, and the nucleophile ends up wherever that cation put the charge.",
      "note": "Stating the rule this way is what lets it survive rearrangement. When a hydride or methyl shift intervenes, the product no longer matches the original hydrogen-counting version, but it still matches the more-stable-carbocation version.",
      "options": {
        "A": "Correct. The regiochemistry follows from which of the two possible carbocations is more stable, and everything else about the outcome follows from that.",
        "B": "This inverts the outcome. The nucleophile ends up on the carbon that had fewer hydrogens, because that is where the more stable cation put the positive charge.",
        "C": "The hydrogen adds to the carbon that already has more hydrogens, not fewer - which is the origin of the old mnemonic about the rich getting richer.",
        "D": "The reaction is under kinetic control and its whole mechanism runs through a carbocation. Denying the intermediate removes the explanation for the regiochemistry."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q39_hcl_addition",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product obtained from the reaction of 2-methylbut-2-ene with hydrogen chloride (\\(HCl\\)) in diethyl ether?",
    "question_smiles": "CC=C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "2-chloro-2-methylbutane",
        "smiles": "CCC(C)(Cl)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-chloro-3-methylbutane",
        "smiles": "CC(Cl)C(C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-chloro-2-methylbutane",
        "smiles": "CCC(C)CCl",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-methylbutan-2-ol",
        "smiles": "CCC(C)(C)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Working out an addition product means choosing where the proton lands, because that choice fixes the carbocation, and the carbocation fixes where the nucleophile ends up.",
      "approach": "Step 1: Examine the double bond. One carbon carries a methyl branch and a chain carbon; the other carries a hydrogen and a methyl.\nStep 2: Protonate to give the better cation. Adding H to the carbon bearing the hydrogen leaves the charge on the disubstituted carbon, a tertiary cation. Adding H the other way would leave a secondary cation.\nStep 3: Capture the tertiary cation with chloride. The chlorine ends up on the carbon that held the charge, giving 2-chloro-2-methylbutane.",
      "note": "The solvent matters here. In diethyl ether the only nucleophile present is chloride; run the same reaction in water and the same tertiary cation would be trapped by water instead, giving the alcohol.",
      "options": {
        "A": "Correct. Markovnikov protonation gives the tertiary carbocation, and chloride bonds to that carbon.",
        "B": "This is the product from protonating the other carbon, which would require the reaction to pass through the less stable secondary cation.",
        "C": "The chlorine here sits on a terminal carbon that was never part of the double bond and never carried a positive charge.",
        "D": "This is the right carbocation captured by the wrong nucleophile. Diethyl ether is anhydrous, so no water is available and chloride is the only nucleophile in the flask."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a double bond between the second and third carbons and a methyl branch on the second carbon."
  },
  {
    "question_id": "ch07_q40_hbr_rearrangement",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Hard",
    "question_text": "When 3-methylbut-1-ene is treated with hydrogen bromide (\\(HBr\\)), the major product obtained is 2-bromo-2-methylbutane. Which of the following mechanistic steps explains this result?",
    "question_smiles": "CC(C)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "A 1,2-hydride shift from the tertiary C3 carbon to the secondary C2 carbocation.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A 1,2-methyl shift from the tertiary C3 carbon to the secondary C2 carbocation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Direct nucleophilic attack of bromide on the C3 carbon.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A 1,3-hydride shift from the methyl group to the primary carbon.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A product that does not match the carbocation you first drew is evidence that the cation moved before it was captured. Identifying the rearrangement means finding a neighbouring group whose migration produces a more stable cation.",
      "approach": "Step 1: Protonate. Markovnikov addition to the terminal double bond puts H on C1 and the charge on C2, a secondary cation.\nStep 2: Look at the neighbour. C3 carries a hydrogen and is attached to three carbons, so moving that hydrogen with its electron pair to C2 leaves the charge on C3.\nStep 3: Check the result. C3 bears three alkyl groups, so the shift converts a secondary cation into a tertiary one, and bromide capture there gives 2-bromo-2-methylbutane.",
      "note": "The migrating hydrogen travels as a hydride, taking its bonding pair with it, and it moves only one carbon. Rearrangement happens because it is downhill in energy, not because the product would be tidier.",
      "options": {
        "A": "Correct. A hydride moves from C3 to the adjacent secondary cation at C2, generating a tertiary cation that bromide then captures.",
        "B": "Moving a methyl from C3 instead would leave the charge on a carbon bearing only two alkyl groups - a secondary cation, no better than the one it started from - and would give a different skeleton.",
        "C": "There is no positive charge at C3 for bromide to attack. Bromide bonds to the carbon that actually carries the charge after the rearrangement.",
        "D": "Shifts in carbocation chemistry are 1,2 - between adjacent carbons. A 1,3 shift is not observed, and moving charge onto a primary carbon would be uphill in any case."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a double bond at one end; the third carbon carries a methyl branch."
  },
  {
    "question_id": "ch07_q41_methyl_shift",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product of the reaction of 3,3-dimethylbut-1-ene with hydrobromic acid (\\(HBr\\))?",
    "question_smiles": "CC(C)(C)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "2-bromo-2,3-dimethylbutane",
        "smiles": "CC(C)C(C)(C)Br",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2,3-dimethylbut-2-ene",
        "smiles": "CC(C)=C(C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-bromo-3,3-dimethylbutane",
        "smiles": "CC(C)(C)CCBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-bromo-3,3-dimethylbutane",
        "smiles": "CC(C)(C)C(C)Br",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When the neighbour of a carbocation has no hydrogen to give, an alkyl group migrates instead. The driving force is the same - reach a more stable cation - but the skeleton changes as well as the charge.",
      "approach": "Step 1: Protonate at the terminal carbon, leaving a secondary cation on the next carbon along.\nStep 2: Inspect the neighbour. It is a quaternary carbon carrying three methyl groups and no hydrogen, so a hydride shift is simply unavailable.\nStep 3: Migrate a methyl group with its bonding pair to the cationic carbon. The charge moves to the carbon the methyl left, which now carries three alkyl groups, and bromide capture there gives 2-bromo-2,3-dimethylbutane.",
      "note": "The quaternary neighbour is what forces the methyl shift. Compare the hydride case, where the neighbouring carbon still has a hydrogen and takes the lower-energy route of moving that instead.",
      "options": {
        "A": "Correct. A methyl migrates from the quaternary carbon to the adjacent secondary cation, giving a tertiary cation that bromide traps.",
        "B": "The tertiary cation can lose a proton to give this alkene, but with bromide present in the same flask, capture of the cation is far faster than elimination.",
        "C": "Bromine on the terminal carbon is the anti-Markovnikov product, which requires radical conditions with peroxides, not the ionic addition described here.",
        "D": "This is the unrearranged product, from bromide capturing the secondary cation before it can rearrange. The rearrangement is fast because it converts secondary to tertiary."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a double bond at one end and two methyl groups on the third carbon."
  },
  {
    "question_id": "ch07_q43_stereochemistry_addition",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Medium",
    "question_text": "Why does the electrophilic addition of hydrogen halides (\\(HX\\)) to an achiral acyclic alkene yield a racemic mixture of enantiomers when a new stereocenter is created?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The carbocation intermediate is planar and \\(sp^2\\)-hybridized, allowing the halide nucleophile to attack with equal probability from either the top or bottom face.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The reaction is a concerted syn-addition that forces the halide and hydrogen to add to the same face.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The alkene exists as an equal mixture of enantiomeric conformations.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The reaction goes through a chiral bridged halonium ion intermediate.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A reaction can only produce a single enantiomer if something in it distinguishes one face of the reacting centre from the other. With achiral starting materials and an achiral solvent, nothing does.",
      "approach": "Step 1: Identify the intermediate. Protonating the alkene gives a carbocation whose positive carbon is sp2 and trigonal planar.\nStep 2: Consider the two faces of that plane. They are mirror images and, in an achiral environment, are exactly equivalent in energy.\nStep 3: Let the halide attack. Approach from the top and approach from the bottom happen at identical rates and give the two enantiomers in equal amounts - a racemic mixture.",
      "note": "The same argument fixes the boundary: introduce a stereocentre elsewhere in the substrate, or a chiral catalyst, and the two faces are no longer equivalent, so the product is no longer racemic.",
      "options": {
        "A": "Correct. The planar sp2 carbocation presents two equivalent faces to the halide, so both enantiomers form at the same rate.",
        "B": "Addition of a hydrogen halide is stepwise, not concerted, and a syn addition would set a defined relationship between the two new bonds rather than give a racemate.",
        "C": "Conformers of an achiral acyclic alkene interconvert freely and are not enantiomers. The stereochemistry is decided at the carbocation, after the alkene is gone.",
        "D": "A bridged halonium ion is the intermediate when a halogen molecule adds, and it enforces anti addition. Adding H-X gives an open carbocation instead."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q48_hbr_addition_reactivity",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Medium",
    "question_text": "Rank the following alkenes in order of increasing reactivity toward the electrophilic addition of \\(HBr\\) (slowest to fastest):\nI. Ethylene (\\(CH_2=CH_2\\))\nII. Propene (\\(CH_3CH=CH_2\\))\nIII. 2-Methylpropene (\\((CH_3)_2C=CH_2\\))",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "I < II < III",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "III < II < I",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "II < I < III",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "I < III < II",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Rates are decided by transition-state energies, not by product energies. For an electrophilic addition the slow step is endergonic, so its transition state resembles the carbocation being formed and inherits that cation's stability.",
      "approach": "Step 1: Work out which cation each alkene gives on Markovnikov protonation. Ethylene can only give a primary cation, propene gives a secondary one, and 2-methylpropene gives a tertiary one.\nStep 2: Rank those cations: tertiary is most stable, then secondary, then primary.\nStep 3: Transfer the ranking to the transition states. Because the transition state for the slow step looks like the cation, the same order applies to the barriers, so reactivity rises ethylene, propene, 2-methylpropene.",
      "note": "This is the Hammond postulate doing the work: it is what licenses using the stability of an intermediate, which is not on the reaction coordinate maximum, to predict the height of a barrier, which is.",
      "options": {
        "A": "Correct. Each added alkyl group stabilises the carbocation and, through it, the rate-determining transition state, so reactivity rises in this order.",
        "B": "This is the ranking reversed. Ethylene gives the least stable cation of the three and is the slowest, not the fastest.",
        "C": "Propene cannot be slower than ethylene: its secondary cation is more stable than ethylene's primary one, so its barrier is lower.",
        "D": "2-Methylpropene gives a tertiary cation, the most stable of the three, so it must be the fastest rather than sitting in the middle."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q49_rearrangement_susceptibility",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Medium",
    "question_text": "Which of the following alkenes is highly susceptible to carbocation rearrangement when treated with hydrogen chloride (\\(HCl\\))?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "3-methylbut-1-ene",
        "smiles": "CC(C)C=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-methylbut-2-ene",
        "smiles": "CC=C(C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-methylbut-1-ene",
        "smiles": "CCC(C)=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "but-2-ene",
        "smiles": "CC=CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Rearrangement is not a property of an alkene on its own. It happens when the cation formed on protonation is not the best one available and a single 1,2 shift can reach a better one.",
      "approach": "Step 1: Protonate each alkene according to Markovnikov and note the cation produced.\nStep 2: Ask, for each cation, whether an adjacent carbon can supply a hydride or an alkyl group that leaves the charge better placed.\nStep 3: Only 3-methylbut-1-ene qualifies. It gives a secondary cation whose neighbour is a carbon bonded to three other carbons, so a hydride shift converts it straight to a tertiary cation.",
      "note": "Two of the alternatives give a tertiary cation on the first protonation, so there is nothing better to rearrange to; the third gives a secondary cation whose only neighbours are methyls, and shifting a hydride from a methyl would produce a primary cation.",
      "options": {
        "A": "Correct. Protonation gives a secondary cation next door to a carbon carrying three alkyl groups, so a single hydride shift produces a tertiary cation.",
        "B": "Markovnikov protonation of this alkene gives a tertiary cation immediately. Nothing better is reachable, so no rearrangement occurs.",
        "C": "This alkene also protonates directly to a tertiary cation, since the double bond is terminal on a carbon that already carries two alkyl groups.",
        "D": "The secondary cation from but-2-ene has only methyl groups beside it. A shift from a methyl would leave the charge on a primary carbon, which is uphill."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch07_q50_deuterium_labeling",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Hard",
    "question_text": "But-1-ene is treated with deuterium chloride (\\(DCl\\)) in dichloromethane. Where does the deuterium end up in the major organic product?",
    "question_smiles": "CCC=C",
    "options": [
      {
        "option_id": "A",
        "text": "Exclusively at C1, giving 2-chloro-1-deuteriobutane",
        "smiles": "CCC(Cl)C[2H]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Exclusively at C2, giving 2-chloro-2-deuteriobutane",
        "smiles": "CCC(Cl)([2H])C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "An equal 50:50 mixture at C1 and C2",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Exclusively at C4, giving 2-chloro-4-deuteriobutane",
        "smiles": "[2H]CCC(Cl)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An isotopic label is a way of watching a mechanism rather than a product. Because deuterium adds exactly where a proton would, its position in the product reports which carbon the electrophile attacked.",
      "approach": "Step 1: Treat DCl as HCl with a heavier hydrogen. The mechanism is unchanged: the alkene attacks D-Cl, placing D on one carbon and the charge on the other.\nStep 2: Choose the carbon by Markovnikov. Putting D on the terminal CH2 leaves a secondary cation at C2; putting it on C2 would leave a primary cation at C1.\nStep 3: Follow through. The secondary cation is captured by chloride at C2, so the product carries chlorine at C2 and the deuterium at C1.",
      "note": "The solvent is chosen to protect the experiment. In a protic solvent such as methanol, DCl would exchange its deuterium with the solvent's O-H hydrogens faster than it added, and the label would be lost before it reached the alkene.",
      "options": {
        "A": "Correct. Deuterium adds to the terminal carbon to give the more stable secondary cation, and chloride then bonds to C2.",
        "B": "Deuterium on C2 would mean the electrophile attacked the internal carbon, leaving a primary cation on C1 - the less stable of the two possibilities.",
        "C": "An even split would require both protonation modes to have the same barrier. They do not: one gives a secondary cation and the other a primary one.",
        "D": "Nothing in the mechanism carries the label to the far end of the chain. Deuterium bonds to a carbon of the double bond and stays there."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a double bond between the first and second carbons."
  },
  {
    "question_id": "ch07_q_dynamic_ez_alkene",
    "topic": "Alkene Stereochemistry: E/Z",
    "difficulty_level": "Medium",
    "question_text": "Match each alkene structure to its correct stereochemical description.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C/C=C/C",
        "correctAnswer": "(E)-but-2-ene",
        "alt": "A four-carbon chain with a double bond in the middle, drawn with the two methyl groups on opposite sides of it."
      },
      {
        "smiles": "C/C=C\\C",
        "correctAnswer": "(Z)-but-2-ene",
        "alt": "A four-carbon chain with a double bond in the middle, drawn with the two methyl groups on the same side of it."
      },
      {
        "smiles": "C/C=C/Cl",
        "correctAnswer": "(E)-1-chloroprop-1-ene",
        "alt": "A three-carbon chain with a double bond at one end; a chlorine sits on the terminal doubly bonded carbon, drawn on the opposite side from the methyl group."
      },
      {
        "smiles": "C/C=C\\Cl",
        "correctAnswer": "(Z)-1-chloroprop-1-ene",
        "alt": "A three-carbon chain with a double bond at one end; a chlorine sits on the terminal doubly bonded carbon, drawn on the same side as the methyl group."
      }
    ],
    "match_options": [
      "(E)-but-2-ene",
      "(Z)-but-2-ene",
      "(E)-1-chloroprop-1-ene",
      "(Z)-1-chloroprop-1-ene",
      "2-methylprop-1-ene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect E/Z mapping",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "E and Z are not synonyms for trans and cis. They are the outcome of a priority comparison run separately at each doubly bonded carbon, and the same picture can carry different labels once the substituents change.",
      "approach": "Step 1: For each structure, take one doubly bonded carbon at a time and decide which of its two groups outranks the other.\nStep 2: In the butenes, each carbon holds a methyl and a hydrogen, so carbon beats hydrogen and the winners are the two methyls.\nStep 3: In the chloropropenes, one carbon holds a chlorine and a hydrogen, where chlorine wins, and the other holds a methyl and a hydrogen, where the methyl wins. In every case, higher-priority groups on the same side means Z and on opposite sides means E.",
      "note": "The unused name in the list, 2-methylprop-1-ene, has two identical methyls on one doubly bonded carbon, so no priority comparison is possible there and it has neither an E nor a Z form.",
      "options": {
        "A": "Correct. Each structure is matched by running the priority comparison at both carbons and then reading which side the two winners are on.",
        "B": "At least one structure has been given the wrong descriptor. Recheck each doubly bonded carbon separately, since the winning group can be a halogen at one end and an alkyl group at the other."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  }
];
