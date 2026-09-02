// OChemStudyBuddy - McMurry Chapter 14
// Author: A. Elangovan, PhD
var CH14_QUESTIONS = [
  {
    "question_id": "ch14_q1_bond_lengths",
    "topic": "Conjugated Dienes: Structure and Hybridization",
    "difficulty_level": "Medium",
    "question_text": "The C2-C3 single bond in 1,3-butadiene is experimentally determined to be 1.48 Å, which is significantly shorter than the C-C single bond in butane (1.54 Å). Which of the following factors best accounts for this bond shortening?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The C2-C3 bond in 1,3-butadiene involves $sp^2$-$sp^2$ hybridized carbon overlap, which has more s-character than the $sp^3$-$sp^3$ overlap in butane, and the bond has partial double-bond character due to $\\pi$ electron delocalization.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Stronger steric repulsion between the methyl groups in butane forces its C-C bond to elongate compared to the unhindered C2-C3 bond of 1,3-butadiene.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Hyperconjugation from the terminal methyl groups in butane weakens and lengthens its C-C bond relative to 1,3-butadiene.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The C2-C3 bond in 1,3-butadiene has pure double-bond character ($sp^2$-$sp^2$) with no rotation allowed at any temperature.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A bond length reports on the orbitals that make the bond. Two effects shorten the central bond of butadiene relative to butane, and a good answer names both: the sigma bond is built from sp2 orbitals, which are smaller and hold electrons closer to the nucleus than sp3 orbitals, and the four p orbitals overlap continuously in the planar molecule, so the pi system contributes some bonding between C2 and C3 as well.",
      "approach": "Step 1: Compare hybridization. Every carbon in butadiene is sp2 (33% s character); every carbon in butane is sp3 (25% s character). More s character means a shorter, stronger sigma bond, which is the same reason an sp-sp single bond in a diyne (1.38 A) is shorter still.\nStep 2: Add the pi contribution. In planar butadiene the p orbitals on C2 and C3 are parallel and overlap. The lowest pi MO is bonding across all three C-C bonds, so C2-C3 gains some double-bond character.\nStep 3: Weigh them. McMurry presents hybridization as the larger effect and delocalization as a smaller additional one, which is why the bond (1.48 A) is far closer to a single bond (1.54 A) than to a double bond (1.34 A).",
      "note": "The delocalization that shortens C2-C3 is also what gives butadiene its rotational barrier of about 30 kJ/mol around that bond, roughly twice ethane's, and its 16 to 18 kJ/mol of extra stability by heat of hydrogenation. Those three numbers are one fact seen three ways. Do not overstate it: the bond is still essentially single, and butadiene rotates freely between s-trans and s-cis at room temperature.",
      "options": {
        "A": "Correct. sp2-sp2 sigma overlap is inherently shorter than sp3-sp3, and pi overlap between C2 and C3 in the planar molecule adds partial double-bond character.",
        "B": "Butane's C2-C3 bond is a normal 1.54 A alkane bond; its anti conformer has no methyl-methyl strain at all. Steric effects change conformations, not equilibrium bond lengths of this size.",
        "C": "Hyperconjugation is a stabilizing donation into an empty or partly filled orbital; there is none in neutral butane. It does not lengthen ordinary alkane bonds.",
        "D": "The C2-C3 bond is not a double bond. Its length (1.48 A) is far closer to 1.54 than to 1.34, and rotation about it is fast at room temperature, with a barrier of only about 30 kJ/mol."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q2_homo_lumo_nodes",
    "topic": "Conjugated Dienes: Molecular Orbital Theory",
    "difficulty_level": "Hard",
    "question_text": "For the $\\pi$ molecular orbitals of 1,3-butadiene in its ground state, how many vertical nodal planes (nodes) are present in the Highest Occupied Molecular Orbital (HOMO) and the Lowest Unoccupied Molecular Orbital (LUMO), respectively?",
    "question_smiles": "C=CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "HOMO ($\\psi_2$) has 1 node; LUMO ($\\psi_3$) has 2 nodes.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "HOMO ($\\psi_2$) has 2 nodes; LUMO ($\\psi_3$) has 3 nodes.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "HOMO ($\\psi_1$) has 0 nodes; LUMO ($\\psi_2$) has 1 node.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "HOMO ($\\psi_3$) has 2 nodes; LUMO ($\\psi_4$) has 3 nodes.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Combining n parallel p orbitals gives n pi molecular orbitals whose energies rise with the number of nodes: the lowest has none, the next has one, and so on up to n minus 1. Butadiene's four p orbitals give four pi MOs with 0, 1, 2 and 3 nodes. Filling four pi electrons two per orbital puts the highest pair in the one-node orbital and leaves the two-node orbital empty.",
      "approach": "Step 1: Four p orbitals give psi1 through psi4, with 0, 1, 2 and 3 nodes between the carbons.\nStep 2: Count electrons: each of the two original C=C bonds contributes two pi electrons, four in all.\nStep 3: Fill from the bottom: two in psi1 (0 nodes), two in psi2 (1 node). psi2 is the HOMO.\nStep 4: The next orbital, psi3 with 2 nodes, is empty: the LUMO. The answer is 1 node and 2 nodes.",
      "note": "The node count is the key to everything the chapter does with these orbitals. The HOMO's one node sits between C2 and C3, so psi2 is antibonding there; the LUMO's two nodes sit between C1-C2 and C3-C4, so psi3 is bonding across C2-C3. Promoting an electron from psi2 to psi3 with UV light therefore strengthens the central bond and weakens the terminal ones, and the HOMO is what butadiene offers a dienophile's LUMO in a Diels-Alder reaction.",
      "options": {
        "A": "Correct. Four pi electrons fill psi1 and psi2, so the HOMO is psi2 with one node and the LUMO is psi3 with two.",
        "B": "psi2 has one node, not two; two nodes belong to psi3. Assigning two and three nodes to the frontier orbitals describes the excited configuration of a hexatriene, not ground-state butadiene.",
        "C": "psi1, with no nodes, holds the lowest pair of electrons but is not the highest occupied orbital; psi2 is also filled. This answer stops one orbital too early.",
        "D": "psi3 is empty in the ground state, so it cannot be the HOMO. Labelling psi3 and psi4 the frontier orbitals would require six pi electrons, which butadiene does not have."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "1,3-Butadiene drawn as a four-carbon chain with a double bond between the first two carbons and between the last two."
  },
  {
    "question_id": "ch14_q3_psi2_symmetry",
    "topic": "Conjugated Dienes: Molecular Orbital Theory",
    "difficulty_level": "Hard",
    "question_text": "In the $\\psi_2$ molecular orbital (HOMO) of 1,3-butadiene, which carbon-carbon interactions are bonding, and which are antibonding?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Bonding between C1-C2 and C3-C4; antibonding between C2-C3.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Antibonding between C1-C2 and C3-C4; bonding between C2-C3.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Bonding between C1-C2, C2-C3, and C3-C4 with no antibonding interactions.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Antibonding between C1-C2, C2-C3, and C3-C4.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Whether an orbital is bonding or antibonding between two atoms depends on whether the p-orbital lobes on those atoms have the same sign (constructive overlap) or opposite signs (a node between them). In butadiene's HOMO the signs run plus, plus, minus, minus along the chain, so the one node falls in the middle of the molecule and the two terminal interactions are bonding.",
      "approach": "Step 1: Write the phases of psi2 on C1 to C4: (+, +, -, -). One sign change means one node.\nStep 2: C1-C2: both plus, bonding. C3-C4: both minus, bonding. C2-C3: plus next to minus, antibonding.\nStep 3: Check against the ground-state structure: bonding at the ends and a node in the middle matches two C=C bonds joined by a single bond, which is what the Lewis structure shows.",
      "note": "psi1 (+, +, +, +) is bonding everywhere, so in the ground state C2-C3 receives bonding from psi1 and antibonding from psi2, which nets out to the weak partial double-bond character seen in its 1.48 A length. The Diels-Alder reaction uses the phases at the two ends of psi2: C1 and C4 have opposite signs, which is exactly what is needed to overlap in phase with the two ends of a dienophile's LUMO.",
      "options": {
        "A": "Correct. With phases (+, +, -, -) the single node lies between C2 and C3, so the terminal bonds are bonding and the central one antibonding.",
        "B": "This is the phase pattern of psi3, (+, -, -, +), with nodes between C1-C2 and C3-C4 and bonding across C2-C3. That orbital is the LUMO, empty in the ground state.",
        "C": "An orbital bonding across all three bonds has no nodes; that is psi1, the lowest pi MO, not the HOMO.",
        "D": "Antibonding everywhere means three nodes and alternating signs (+, -, +, -): psi4, the highest and empty orbital."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q4_isomer_stability",
    "topic": "Stability of Conjugated Dienes",
    "difficulty_level": "Easy",
    "question_text": "Which of the following isomeric dienes of formula $\\text{C}_5\\text{H}_8$ is thermodynamically the most stable?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-1,3-pentadiene (conjugated diene)",
        "smiles": "C/C=C/C=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,4-pentadiene (isolated diene)",
        "smiles": "C=CCC=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,2-pentadiene (cumulated diene)",
        "smiles": "C=C=CCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-methyl-1,2-butadiene (cumulated diene)",
        "smiles": "CC(C)=C=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Dienes come in three classes by the spacing of their double bonds. Conjugated dienes (C=C-C=C) are the most stable because their p orbitals overlap continuously; isolated dienes (C=C-C-C=C) behave like two independent alkenes; cumulated dienes, the allenes (C=C=C), are the least stable because the central carbon is sp hybridized and its two pi bonds are perpendicular and cannot interact. Heats of hydrogenation put the three classes in that order.",
      "approach": "Step 1: Classify. (E)-1,3-pentadiene is conjugated. 1,4-pentadiene has an sp3 CH2 between its double bonds: isolated. 1,2-pentadiene and 3-methyl-1,2-butadiene have a shared central carbon: cumulated.\nStep 2: Rank: conjugated beats isolated by the extra pi overlap (about 16 to 18 kJ/mol for butadiene-type systems), and both beat the allenes, which sit some 40 kJ/mol above an isolated diene.\nStep 3: Among the two allenes, extra alkyl substitution helps a little, but neither approaches the conjugated isomer. (E)-1,3-Pentadiene is the most stable.",
      "note": "Stability here means lower heat of hydrogenation to the same pentane, so the comparison is fair because all four isomers end at one product. The E geometry matters too: (Z)-1,3-pentadiene would be a few kJ/mol less stable than the E isomer because of a methyl-hydrogen clash, but still conjugated and still ahead of the other classes.",
      "options": {
        "A": "Correct. The conjugated diene, with continuous p-orbital overlap across all four carbons, has the lowest heat of hydrogenation of the four.",
        "B": "1,4-Pentadiene's two alkenes are separated by a CH2 and cannot overlap; its heat of hydrogenation is simply that of two terminal alkenes, about 254 kJ/mol.",
        "C": "1,2-Pentadiene is an allene: the central sp carbon holds two perpendicular pi bonds that gain nothing from each other, and allenes are the least stable diene class.",
        "D": "3-Methyl-1,2-butadiene is also an allene. Its extra methyl on the double bond helps slightly relative to 1,2-pentadiene, but a cumulated diene cannot overtake a conjugated one."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q5_scis_strans_energy",
    "topic": "Stability of Conjugated Dienes: Conformers",
    "difficulty_level": "Medium",
    "question_text": "Which of the following statements regarding the s-cis and s-trans conformations of 1,3-butadiene is true?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The s-trans conformation is more stable than the s-cis conformation by approximately 12 kJ/mol due to steric repulsion between the C1 and C4 hydrogens in the s-cis form.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The s-cis conformation is more stable because it allows better overlap of the $p$ orbitals.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The transition state for rotation about the C2-C3 single bond has a planar geometry where conjugation is maximized.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The s-cis conformation must be the more stable one, because it is the conformation that reacts in the Diels-Alder reaction.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The prefix s- refers to the single bond: s-cis and s-trans describe how the two double bonds are arranged about the C2-C3 sigma bond, not the geometry of either double bond. Both planar conformers keep the p orbitals parallel and conjugated; they differ in sterics. In s-cis the inside hydrogens on C1 and C4 point at each other, and that clash makes s-cis the minor conformer.",
      "approach": "Step 1: Draw both planar conformers. In s-trans the two double bonds point away from each other; in s-cis they lie on the same side of the single bond.\nStep 2: Look at C1 and C4 in s-cis: one hydrogen on each is aimed into the other across a short gap. s-trans has no such contact.\nStep 3: The result is that s-trans is favoured by roughly 12 kJ/mol, so at room temperature butadiene is almost entirely s-trans, with a small, rapidly equilibrating s-cis population.\nStep 4: The transition state between them is the perpendicular geometry, where the two pi systems are orthogonal and conjugation is lost; that costs about 30 kJ/mol.",
      "note": "The Diels-Alder reaction needs the s-cis conformer, because only then are C1 and C4 close enough to bond simultaneously to a dienophile. The small s-cis population of an acyclic diene is drawn off continuously as it reacts, so the equilibrium is not a barrier to reaction, but any structural feature that raises the cost of s-cis slows the cycloaddition, and a diene that cannot reach s-cis at all does not react.",
      "options": {
        "A": "Correct. Both planar conformers are conjugated; s-cis pays a steric penalty from its inside C1 and C4 hydrogens, and s-trans is favoured by about 12 kJ/mol.",
        "B": "Both planar conformers have the same p-orbital overlap; conjugation does not distinguish them. What distinguishes them is the steric clash present only in s-cis.",
        "C": "The rotational transition state is the perpendicular arrangement, in which the two pi systems are orthogonal and conjugation is lost, which is why the barrier is higher than in an alkane.",
        "D": "Reactivity and stability are different questions. s-cis is the reactive conformer for a Diels-Alder reaction and also the less stable one; the reaction draws on the small s-cis population as it is replenished."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q6_scis_locked",
    "topic": "Stability of Conjugated Dienes: Conformers",
    "difficulty_level": "Medium",
    "question_text": "Which of the following dienes is held permanently in the s-cis conformation, making it exceptionally reactive in the Diels-Alder reaction?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "1,3-Cyclopentadiene",
        "smiles": "C1=CCC=C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,4-Cyclohexadiene",
        "smiles": "C1=CCC=CC1",
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
        "text": "3-Methylenecyclohexene",
        "smiles": "C=C1C=CCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A diene must be s-cis to react in a Diels-Alder cycloaddition, so anything that fixes it in that shape makes it a better diene and anything that keeps it out of that shape makes it a worse one. A ring that contains both double bonds holds them cisoid with no rotation possible; an acyclic diene has to pay to reach s-cis; and a diene whose double bonds are fixed transoid cannot react at all.",
      "approach": "Step 1: Check that each candidate is conjugated. 1,4-Cyclohexadiene is not: its double bonds are separated by a CH2 and it is not a Diels-Alder diene of any kind.\nStep 2: For the conjugated ones, ask whether the s-cis geometry is enforced, reachable, or blocked. Cyclopentadiene's five-membered ring holds C1 and C4 permanently on the same side of the C2-C3 bond: enforced.\nStep 3: (2Z,4Z)-Hexa-2,4-diene can rotate, but its s-cis conformer puts both methyls inside, pointing at each other, so it almost never adopts it: reachable only at great cost.\nStep 4: 3-Methylenecyclohexene has its ring alkene and exocyclic alkene fixed on opposite sides of the connecting bond: blocked. The answer is cyclopentadiene.",
      "note": "Cyclopentadiene is so reactive that it dimerizes with itself at room temperature, one molecule acting as diene and the other as dienophile, and is stored as the dimer and cracked back by heating just before use. 1,3-Cyclohexadiene is also permanently s-cis and is a good diene too; it is left out of this list because the question asks for one answer, not because it fails the test.",
      "options": {
        "A": "Correct. The five-membered ring locks the two double bonds cisoid about the C2-C3 bond, and cyclopentadiene is among the most reactive dienes known.",
        "B": "1,4-Cyclohexadiene is an isolated diene, not a conjugated one; the question of s-cis versus s-trans does not arise, and it does not undergo Diels-Alder reactions as the diene.",
        "C": "This acyclic diene is free to rotate but its s-cis conformer forces the two Z methyls into each other. It reacts extremely slowly, the opposite of the exceptionally reactive case asked for.",
        "D": "3-Methylenecyclohexene is conjugated but its double bonds are held s-trans by the ring; it is McMurry's example of a diene that cannot undergo the Diels-Alder reaction."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q7_strans_locked",
    "topic": "Stability of Conjugated Dienes: Conformers",
    "difficulty_level": "Hard",
    "question_text": "Which of the following conjugated dienes is held exclusively in an s-trans conformation and is completely inert toward Diels-Alder cycloadditions?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "3-methylenecyclohexene",
        "smiles": "C=C1C=CCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,3-cyclohexadiene",
        "smiles": "C1=CC=CCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,2-dimethylenecyclohexane",
        "smiles": "C=C1CCCCC1=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(2E,4E)-2,4-hexadiene",
        "smiles": "C/C=C/C=C/C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A diene fixed in the s-trans conformation cannot bring C1 and C4 to the two carbons of a dienophile at the same time, so it does not undergo the Diels-Alder reaction however strong the dienophile. The test is geometric: draw the diene, find the single bond between the two double bonds, and ask whether the ring allows the two double bonds to be on the same side of it.",
      "approach": "Step 1: 3-Methylenecyclohexene: the ring C=C and the exocyclic C=CH2 are conjugated through the ring carbon that bears the methylene, and the six-membered ring holds them on opposite sides of that bond. Permanently s-trans, unreactive.\nStep 2: 1,3-Cyclohexadiene: both double bonds are in the ring, so they are held s-cis. Reactive.\nStep 3: 1,2-Dimethylenecyclohexane: both double bonds are exocyclic on adjacent ring carbons and point the same way, an s-cis diene locked by the ring. Very reactive.\nStep 4: (2E,4E)-2,4-Hexadiene is acyclic and rotates freely into s-cis, with its methyls pointing outward. Reactive. Only the first is inert.",
      "note": "McMurry contrasts exactly these cases: a diene fixed s-cis reacts fastest, one fixed s-trans not at all, and an acyclic diene sits in between. The word inert here is specific to the Diels-Alder reaction; 3-methylenecyclohexene still undergoes electrophilic addition and every other alkene reaction, and it could act as a dienophile through one of its alkenes.",
      "options": {
        "A": "Correct. The ring holds the endocyclic and exocyclic double bonds on opposite sides of the bond joining them; the diene can never reach s-cis and does not undergo Diels-Alder reactions.",
        "B": "1,3-Cyclohexadiene is a homoannular diene, held permanently s-cis by its ring, and it reacts readily with dienophiles.",
        "C": "1,2-Dimethylenecyclohexane is the opposite case: both exocyclic double bonds are fixed on the same side, an enforced s-cis, and it is an excellent diene.",
        "D": "(2E,4E)-2,4-Hexadiene is acyclic and reaches s-cis with both methyls on the outside; it is a normal, reactive diene."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q8_heats_of_hydrogenation",
    "topic": "Stability of Conjugated Dienes",
    "difficulty_level": "Medium",
    "question_text": "Arrange the following hydrocarbons in order of decreasing heat of hydrogenation (most heat released, least stable to least heat released, most stable): 1,4-pentadiene, (E)-1,3-pentadiene, and 1,2-pentadiene.",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "1,2-pentadiene > 1,4-pentadiene > (E)-1,3-pentadiene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(E)-1,3-pentadiene > 1,4-pentadiene > 1,2-pentadiene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,4-pentadiene > 1,2-pentadiene > (E)-1,3-pentadiene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,2-pentadiene > (E)-1,3-pentadiene > 1,4-pentadiene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Heat of hydrogenation measures how far above the fully saturated product a molecule sits: the more heat released on adding hydrogen, the less stable the starting alkene or diene. Because all three of these pentadienes hydrogenate to pentane, their heats of hydrogenation rank their stabilities directly, and the ranking follows the diene classes: cumulated releases the most, then isolated, then conjugated the least.",
      "approach": "Step 1: Identify the classes. 1,2-Pentadiene is cumulated (an allene), 1,4-pentadiene is isolated, (E)-1,3-pentadiene is conjugated.\nStep 2: Attach approximate values. An isolated diene releases twice a terminal alkene's heat, about 254 kJ/mol. The conjugated diene releases about 16 to 28 kJ/mol less, near 226 kJ/mol for (E)-1,3-pentadiene. An allene releases roughly 295 kJ/mol, well above the isolated diene.\nStep 3: Order from most heat released to least: 1,2-pentadiene, then 1,4-pentadiene, then (E)-1,3-pentadiene.",
      "note": "The sign convention trips students up: the heats are all negative (exothermic), and the most negative value belongs to the least stable compound. The stem's phrase most heat released fixes the direction. The conjugated diene's advantage over the isolated one is the same 16 to 18 kJ/mol delocalization energy measured for butadiene, plus a little from its internal, disubstituted double bond.",
      "options": {
        "A": "Correct. Cumulated, then isolated, then conjugated: the allene is least stable and releases the most heat; the conjugated diene is most stable and releases the least.",
        "B": "This order is exactly reversed: it lists the conjugated diene first, as if the most stable compound released the most heat. Heat released falls as stability rises.",
        "C": "Placing the isolated diene above the allene is wrong: the allene's perpendicular pi bonds gain nothing from each other and its sp carbon strains the geometry, so it releases the most heat of the three.",
        "D": "The conjugated diene cannot release more heat than the isolated one; its delocalization puts it below the isolated isomer in energy, so it should come last, not second."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q9_resonance_energy",
    "topic": "Stability of Conjugated Dienes",
    "difficulty_level": "Medium",
    "question_text": "The heat of hydrogenation ($\\Delta H^\\circ$) of two moles of 1-butene is $-254\\text{ kJ/mol}$, whereas the experimental heat of hydrogenation of one mole of 1,3-butadiene is $-236\\text{ kJ/mol}$. What is the resonance stabilization energy of 1,3-butadiene?",
    "question_smiles": "C=CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "18 kJ/mol",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "490 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "36 kJ/mol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Resonance (delocalization) energy is measured as a shortfall: predict the heat of hydrogenation a molecule would have if its double bonds were independent, measure the real value, and the difference is the stabilization conjugation provides. For butadiene the model for an independent double bond is 1-butene, since it has the same monosubstituted terminal alkene.",
      "approach": "Step 1: Expected value for two isolated terminal alkenes: 2 x (-127) = -254 kJ/mol.\nStep 2: Observed value for butadiene: -236 kJ/mol. Less heat is released than predicted, so the real molecule sits lower in energy than the model.\nStep 3: Difference: 254 - 236 = 18 kJ/mol. That is the resonance stabilization energy of 1,3-butadiene.\nStep 4: Sanity check: it is a small fraction of a pi bond's strength (about 260 kJ/mol), which is why butadiene still behaves like an alkene in most of its chemistry.",
      "note": "With McMurry's own table (1-butene -126.8 and butadiene -236.4 kJ/mol) the figure comes out near 16 to 17 kJ/mol; textbooks quote anywhere from 15 to 18 depending on the model alkene chosen. The idea matters more than the last digit: the number is small, real, and the same quantity that shows up as a shortened C2-C3 bond and a raised barrier to rotation.",
      "options": {
        "A": "Correct. The predicted value for two independent terminal alkenes exceeds the measured value by 254 - 236 = 18 kJ/mol; that shortfall is the delocalization energy.",
        "B": "490 kJ/mol is the two values added rather than subtracted. Resonance energy is a difference between a predicted and an observed heat, never a sum.",
        "C": "Zero would mean butadiene hydrogenates exactly like two isolated alkenes. It releases 18 kJ/mol less, so conjugation has lowered its energy by that amount.",
        "D": "36 kJ/mol doubles the difference, as if each double bond were separately stabilized by 18. The measurement is for the whole molecule; the difference is taken once."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "1,3-Butadiene drawn as a four-carbon chain with a double bond between the first two carbons and between the last two."
  },
  {
    "question_id": "ch14_q10_allylic_carbocation_resonance",
    "topic": "Electrophilic Addition to Conjugated Dienes: Allylic Carbocations",
    "difficulty_level": "Easy",
    "question_text": "Which of the following factors is primarily responsible for the thermodynamic stability of allylic carbocations?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Delocalization of the positive charge over two carbon atoms via $\\pi$-orbital resonance overlap.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Inductive donation of electron density from the adjacent $sp^3$-hybridized carbon atom.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Hyperconjugation from adjacent C-H bonds to the vacant $sp^2$ hybridized orbital.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The presence of a highly electronegative atom that stabilizes the positive charge.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An allylic carbocation has its empty p orbital next to a C=C pi bond, so the three p orbitals form one continuous pi system and the two pi electrons spread over all three carbons. The positive charge is then shared between the two terminal carbons rather than concentrated on one, and that delocalization is the dominant reason allylic cations are so much more stable than an alkyl cation of the same substitution level.",
      "approach": "Step 1: Draw the allyl cation and its second resonance form: the charge moves from one end to the other while the double bond shifts. The two structures are equivalent, which is the most stabilizing case.\nStep 2: In orbital terms, the three parallel p orbitals give a bonding, a nonbonding and an antibonding MO; the two electrons fill the bonding MO, which is delocalized over all three carbons.\nStep 3: Compare the alternatives offered. Inductive donation and hyperconjugation from alkyl groups stabilize every carbocation modestly; only resonance can lower the energy by enough to make a primary allylic cation roughly as stable as a secondary alkyl cation.",
      "note": "The same argument explains allylic radicals (weaker allylic C-H bonds, Chapter 10) and why allylic halides undergo SN1 far faster than their saturated analogues (Chapter 11). It also predicts where a nucleophile attacks: at either terminus, never at the central carbon, because the empty nonbonding orbital has no coefficient there. That is the origin of 1,2- versus 1,4-addition in this chapter.",
      "options": {
        "A": "Correct. The empty p orbital overlaps the adjacent pi bond, delocalizing the positive charge over the two terminal carbons; resonance is the dominant stabilizing effect.",
        "B": "Inductive donation from a neighbouring sp3 carbon is present in every alkyl cation and is worth only a few kJ/mol per group; it cannot account for the large extra stability of an allylic system.",
        "C": "Hyperconjugation from adjacent C-H bonds stabilizes all carbocations somewhat, but the allyl cation's defining feature is a full pi bond next to the empty orbital, which is resonance, not hyperconjugation.",
        "D": "There is no electronegative atom in an allyl cation, and an electronegative atom next to a cationic centre would withdraw density inductively and destabilize it unless it carried a lone pair to donate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q11_rotation_barrier",
    "topic": "Stability of Conjugated Dienes: Conformers",
    "difficulty_level": "Hard",
    "question_text": "Rotation about the central C2-C3 single bond in 1,3-butadiene has a barrier of approximately 30 kJ/mol, which is substantially higher than the rotation barrier of ethane (12 kJ/mol). Why is this barrier significantly larger?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The C2-C3 bond has partial double-bond character due to conjugation of the two $\\pi$ systems, which is maximized when the molecule is planar and lost in the perpendicular transition state.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "In the perpendicular transition state the two $\\pi$ systems overlap in an antibonding sense, which raises its energy well above that of the planar conformers.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Eclipsing of the vinyl C-H bonds in the planar conformers raises their energy, so more energy is needed to rotate between them.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The C2-C3 bond is shorter than the C-C bond of ethane (1.48 versus 1.54 A), and a shorter sigma bond always has a higher torsional barrier.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A rotational barrier is the energy difference between the most and least stable geometries along the rotation. In ethane the only cost is torsional strain in the eclipsed form. In butadiene the planar conformers enjoy conjugation between the two pi systems, and rotating the C2-C3 bond by 90 degrees switches that overlap off entirely; the barrier is therefore ethane-like torsional strain plus the delocalization energy that the perpendicular geometry gives up.",
      "approach": "Step 1: Identify the ground states: the planar s-trans (major) and s-cis (minor) conformers, both with all four p orbitals parallel.\nStep 2: Identify the transition state: the perpendicular geometry, where the p orbitals on C2 and C3 are at right angles and have zero overlap. The molecule is now two isolated vinyl groups.\nStep 3: Cost: the delocalization energy of butadiene, 16 to 18 kJ/mol by heats of hydrogenation, plus ordinary torsional effects of roughly ethane's size. Together they account for a barrier near 30 kJ/mol.\nStep 4: The barrier is still low. Rotation is fast at room temperature; the s-cis and s-trans forms interconvert billions of times a second.",
      "note": "The barrier, the shortened C2-C3 bond and the extra stability by hydrogenation are three measurements of one quantity. Note the direction of the argument in option D: the bond is short because of the conjugation that also creates the barrier; the short bond is a symptom, not the cause. Contrast a true double bond, where the pi bond must break to rotate and the barrier is about 260 kJ/mol.",
      "options": {
        "A": "Correct. Planar butadiene gains delocalization across C2-C3; the perpendicular transition state loses it, so that energy is added to the ordinary torsional barrier.",
        "B": "At 90 degrees the two pi systems are orthogonal and have zero overlap, neither bonding nor antibonding. The transition state is high because it has lost bonding overlap, not because it has gained antibonding overlap.",
        "C": "The planar conformers are the energy minima, not maxima. If eclipsing raised their energy the barrier would be lower than ethane's, the opposite of what is observed.",
        "D": "Bond length does not set a torsional barrier; the barrier reflects what is lost or gained on rotation. The short bond and the high barrier are both consequences of conjugation, and one does not cause the other."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q12_allyl_mo_electrons",
    "topic": "Electrophilic Addition to Conjugated Dienes: Allylic Carbocations",
    "difficulty_level": "Hard",
    "question_text": "In the allylic carbocation intermediate formed during the electrophilic addition of HBr to 1,3-butadiene, how many electrons occupy the $\\pi$ molecular system, and which orbital is the Lowest Unoccupied Molecular Orbital (LUMO)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "2 electrons; the non-bonding molecular orbital ($\\psi_2$) is the LUMO.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3 electrons; the antibonding molecular orbital ($\\psi_3$) is the LUMO.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2 electrons; the bonding molecular orbital ($\\psi_1$) is the LUMO.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4 electrons; the non-bonding molecular orbital ($\\psi_2$) is the LUMO.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Three parallel p orbitals combine into three pi molecular orbitals: a bonding MO with no nodes, a nonbonding MO with one node passing through the central carbon, and an antibonding MO with two nodes. How many electrons they hold depends on the species. The allyl cation has two pi electrons, the radical three, the anion four; the cation's electrons fill only the bonding MO, and the nonbonding orbital is its LUMO.",
      "approach": "Step 1: Form the intermediate. HBr protonates C1 of butadiene; the new C-H sigma bond uses two of the diene's four pi electrons, leaving two pi electrons over C2, C3 and C4.\nStep 2: Build the MOs for those three p orbitals: psi1 bonding (0 nodes), psi2 nonbonding (1 node, at the central carbon), psi3 antibonding (2 nodes).\nStep 3: Fill: two electrons go into psi1. psi1 is the HOMO; psi2, empty, is the LUMO.\nStep 4: Read the LUMO. Its node sits on the central carbon, so its lobes are entirely on the two terminal carbons. That is where a nucleophile must bond.",
      "note": "This picture is the orbital version of the two resonance forms: the charge (the empty orbital's density) is shared by the terminal carbons and absent from the middle one. It explains why bromide gives 1,2- and 1,4-adducts and never a 1,3-product, and the same nonbonding orbital, filled with two more electrons, describes the allyl anion, which is nucleophilic at its ends for the same reason.",
      "options": {
        "A": "Correct. Two pi electrons remain after protonation; they fill the bonding MO, leaving the nonbonding MO empty as the LUMO with its density on the terminal carbons.",
        "B": "Three pi electrons describe the allyl radical, not the cation, and in the radical the singly occupied nonbonding orbital is the SOMO; the antibonding orbital is the LUMO of the radical, not of the cation.",
        "C": "The bonding MO holds the cation's two electrons, so it is occupied; it cannot be the LUMO. The lowest empty orbital is the next one up, the nonbonding psi2.",
        "D": "Four pi electrons describe the allyl anion, in which the nonbonding MO is filled and becomes the HOMO. The cation lost two electrons to the new C-H bond."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q13_bde_allylic_ch",
    "topic": "Stability of Conjugated Dienes",
    "difficulty_level": "Medium",
    "question_text": "The homolytic bond dissociation energy (BDE) of an allylic C-H bond in propene is approximately 364 kJ/mol (87 kcal/mol). How does this compare to typical primary and tertiary alkyl C-H bonds, and why?",
    "question_smiles": "CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "It is weaker than both primary (410 kJ/mol) and tertiary (381 kJ/mol) alkyl C-H bonds because the resulting allyl radical is resonance-stabilized.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It is stronger than primary C-H bonds but weaker than tertiary C-H bonds because of $sp^2$ hybridization of the adjacent carbons.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It is stronger than both primary and tertiary C-H bonds because $sp^2$-hybridized carbons hold hydrogens more tightly.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It has the exact same strength as a primary alkyl C-H bond because both homolytic cleavages generate a primary radical.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A bond dissociation energy measures the cost of breaking a bond homolytically, and that cost falls when the radical left behind is stabilized. Breaking an allylic C-H bond gives an allylic radical whose unpaired electron is delocalized over both terminal carbons, so the allylic C-H bond is weaker than any ordinary alkyl C-H bond, weaker even than a tertiary one, whose radical is stabilized only by hyperconjugation.",
      "approach": "Step 1: Write the homolysis: propene gives H and the allyl radical, whose two resonance forms place the odd electron on either terminal carbon.\nStep 2: Compare typical BDEs: primary alkyl C-H about 410 kJ/mol, tertiary about 381 to 390, allylic about 364. The allylic bond is the weakest of the three.\nStep 3: Connect to structure: lower BDE means a more stable radical. Resonance delocalization is a larger effect than the hyperconjugation that makes a tertiary radical more stable than a primary one, so the allyl radical lies below both.",
      "note": "The allylic C-H bond is weak, but the vinylic C-H bonds on the same molecule are among the strongest in organic chemistry (about 464 kJ/mol), because breaking one gives a vinyl radical with the odd electron in an sp2 orbital and no delocalization at all. The allylic and vinylic hydrogens sit on adjacent carbons and differ by 100 kJ/mol, which is why radical halogenation of an alkene (NBS, Chapter 10) touches only the allylic position.",
      "options": {
        "A": "Correct. The allyl radical is resonance stabilized, so its C-H bond (about 364 kJ/mol) is weaker than a primary (410) or tertiary (381 to 390) alkyl C-H bond.",
        "B": "Placing allylic between primary and tertiary treats the radical as if it were merely secondary. Resonance delocalization outweighs the hyperconjugative stabilization of a tertiary radical, so allylic is below both.",
        "C": "The adjacent sp2 carbon does not strengthen the allylic C-H bond; the bond in question is to an sp3 carbon, and its product radical is stabilized by the neighbouring pi bond, which weakens the bond.",
        "D": "Both cleavages formally give a primary radical, but the allyl radical is delocalized and the propyl radical is not; identical formal substitution does not mean identical stability."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Propene, drawn as a three-carbon chain with a double bond between the first two carbons and a methyl group at the end."
  },
  {
    "question_id": "ch14_q14_homo_lumo_conjugation_length",
    "topic": "Ultraviolet Spectroscopy: Principles",
    "difficulty_level": "Easy",
    "question_text": "As the number of conjugated double bonds in a polyene system increases, what occurs to the energy gap between the HOMO and the LUMO, and how does this affect the UV-Vis absorption wavelength ($\\lambda_{\\text{max}}$)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The energy gap decreases, shifting the absorption to longer wavelengths (bathochromic shift).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The energy gap increases, shifting the absorption to shorter wavelengths (hypsochromic shift).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The energy gap decreases, shifting the absorption to shorter wavelengths (hypsochromic shift).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The energy gap remains constant, but the intensity of the absorption (molar absorptivity) increases.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Each additional conjugated double bond adds two p orbitals and therefore two pi molecular orbitals to the set. As the number of MOs grows within roughly the same energy span, their spacing shrinks, and in particular the gap between the highest filled orbital and the lowest empty one narrows. UV absorption promotes an electron across exactly that gap, so a smaller gap means a lower-energy photon and a longer wavelength.",
      "approach": "Step 1: Ethylene, one double bond: HOMO psi1 to LUMO psi2, a large gap, lambda-max 165 nm (below the range of ordinary spectrometers).\nStep 2: Butadiene, two conjugated double bonds: four MOs, HOMO psi2 to LUMO psi3, lambda-max 217 nm.\nStep 3: 1,3,5-Hexatriene, three: six MOs, a smaller gap still, lambda-max 258 nm.\nStep 4: The trend continues into the visible: beta-carotene, with eleven conjugated double bonds, absorbs at 455 nm and is orange. Longer conjugation, smaller gap, longer wavelength.",
      "note": "The wavelength shift is the reliable observable; the intensity also tends to rise with conjugation length, but that is a separate effect (a larger transition dipole) and not the answer to a question about the energy gap. Alkyl groups on the diene add about 5 nm each, which is why isoprene (220 nm) and 2,3-dimethylbutadiene (226 nm) absorb a little beyond butadiene without being any more conjugated.",
      "options": {
        "A": "Correct. More conjugated double bonds mean more closely spaced pi MOs, a smaller HOMO-LUMO gap, and absorption at longer wavelength, from 217 nm for butadiene to 455 nm for beta-carotene.",
        "B": "The gap shrinks with conjugation; it does not grow. A widening gap would push absorption toward shorter wavelengths, the opposite of the observed march from the UV into the visible.",
        "C": "The first half is right and the second contradicts it: a smaller gap means a lower-energy photon, which is a longer wavelength, not a shorter one.",
        "D": "The gap does change; that is the whole basis of using UV to gauge conjugation. Molar absorptivity often rises too, but the wavelength shift is the primary effect the question asks about."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q15_hbr_addition_low_temp",
    "topic": "Electrophilic Addition: Kinetic vs Thermodynamic Control",
    "difficulty_level": "Medium",
    "question_text": "1,3-Butadiene reacts with one equivalent of HBr at $-80\\ ^\\circ\\text{C}$. Which compound is the major product?",
    "question_smiles": "C=CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "3-Bromo-1-butene",
        "smiles": "C=CC(C)Br",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(E)-1-Bromo-2-butene",
        "smiles": "C/C=C/CBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-Bromo-1-butene",
        "smiles": "C=CCCBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(Z)-1-Bromo-2-butene",
        "smiles": "C/C=C\\CBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "HBr adds to a conjugated diene through an allylic carbocation, and the outcome depends on temperature because the two possible adducts differ in both rate of formation and stability. At low temperature nothing reverses, so the product that forms fastest is the one isolated: the 1,2-adduct, in which bromide bonds to the carbon next to the site of protonation. This is kinetic control.",
      "approach": "Step 1: Protonate the terminal carbon C1, not C2: protonation at C1 gives the resonance-stabilized allylic cation CH3-CH(+)-CH=CH2, while protonation at C2 would give an unstabilized primary cation.\nStep 2: The cation's charge is shared by C2 (secondary) and C4 (primary). Bromide can bond at either.\nStep 3: At -80 C bonding at C2 is faster: bromide is generated beside C2, and C2 carries more of the positive charge. The 1,2-adduct, 3-bromo-1-butene, is the major product (about 80%), with the rest 1,4-adduct.\nStep 4: The mixture is frozen because at -80 C neither alkyl bromide can re-ionize, so the ratio reflects rates alone.",
      "note": "The same reaction at 40 C gives mainly the 1,4-adduct, and warming the -80 C mixture in the presence of HBr converts it to the 40 C mixture: the kinetic product is not destroyed, it re-ionizes and re-equilibrates. McMurry's figures are 71:29 (1,2 to 1,4) at 0 C and 15:85 at 40 C. Kinetic and thermodynamic are labels for conditions and refer to the same two compounds.",
      "options": {
        "A": "Correct. Protonation at C1 gives the allylic cation; bromide bonds fastest at the adjacent secondary carbon C2, and at -80 C that 1,2-adduct cannot revert, so it predominates.",
        "B": "(E)-1-Bromo-2-butene is the 1,4-adduct: the more stable isomer (disubstituted internal alkene) and the major product at 40 C, but at -80 C it is the minor product because it forms more slowly and nothing equilibrates.",
        "C": "4-Bromo-1-butene would require bromide at C1 after protonation at C2, an unstabilized primary cation, or an anti-Markovnikov radical addition. Neither operates under these ionic conditions.",
        "D": "(Z)-1-Bromo-2-butene is also a 1,4-adduct, and the minor geometric isomer of one; the allylic cation adopts the extended W shape, so the E alkene dominates the 1,4 fraction, and the 1,4 fraction itself is minor at -80 C."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "1,3-Butadiene drawn as a four-carbon chain with a double bond between the first two carbons and between the last two."
  },
  {
    "question_id": "ch14_q16_hbr_addition_high_temp",
    "topic": "Electrophilic Addition: Kinetic vs Thermodynamic Control",
    "difficulty_level": "Medium",
    "question_text": "1,3-Butadiene reacts with one equivalent of HBr at $40\\ ^\\circ\\text{C}$, or the $-80\\ ^\\circ\\text{C}$ product mixture is warmed to $40\\ ^\\circ\\text{C}$ with a trace of HBr present. Which compound is the major product?",
    "question_smiles": "C=CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-1-Bromo-2-butene",
        "smiles": "C/C=C/CBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Bromo-1-butene",
        "smiles": "C=CC(C)Br",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(Z)-1-Bromo-2-butene",
        "smiles": "C/C=C\\CBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-Bromo-1-butene",
        "smiles": "C=CCCBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "At higher temperature the allylic bromides formed from butadiene re-ionize: the C-Br bond of either adduct heterolyzes back to the same allylic cation, which recaptures bromide at either end. Once that exchange is fast, the mixture reaches equilibrium and its composition is set by product stability, not by how fast each formed. The more stable adduct, the one with the more substituted alkene, predominates: thermodynamic control.",
      "approach": "Step 1: Both adducts, 3-bromo-1-butene and 1-bromo-2-butene, ionize at 40 C to the same allylic cation, CH3-CH(+)-CH=CH2 with charge shared at C4.\nStep 2: Recombination at C2 or C4 is now reversible, so the adducts interconvert and the ratio drifts toward the lower-energy compound.\nStep 3: Compare stabilities. 3-Bromo-1-butene has a monosubstituted terminal alkene; 1-bromo-2-butene has a disubstituted internal one, and its E isomer has no cis methyl-CH2Br clash. It is the more stable adduct.\nStep 4: At 40 C the mixture is about 85% 1,4-adduct, mostly E, and the same ratio is reached whether one starts from the diene or from the pure 1,2-adduct.",
      "note": "That the pure 1,2-adduct gives the 40 C mixture on warming with HBr is the experimental proof that the 1,4 preference is thermodynamic rather than kinetic: no new bonds to the diene are formed, only the existing product re-equilibrates. Without HBr, or with the bromide removed, the 1,2-adduct is stable indefinitely at 40 C; ionization is what opens the door to equilibrium.",
      "options": {
        "A": "Correct. Under reversible conditions the more stable adduct accumulates, and (E)-1-bromo-2-butene, with a disubstituted trans alkene, is the most stable of the possible products.",
        "B": "3-Bromo-1-butene is the kinetic product, major at -80 C. At 40 C it re-ionizes and drains into the more stable 1,4-adduct, ending up as about 15% of the mixture.",
        "C": "(Z)-1-Bromo-2-butene is a 1,4-adduct, but its cis alkene puts the methyl and CH2Br on the same side; the E isomer is lower in energy and dominates once the system equilibrates.",
        "D": "4-Bromo-1-butene has a terminal alkene and a primary bromide; it is neither the fastest-formed nor the most stable adduct, and it is not formed from the allylic cation at all."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "1,3-Butadiene drawn as a four-carbon chain with a double bond between the first two carbons and between the last two."
  },
  {
    "question_id": "ch14_q17_isoprene_protonation_regio",
    "topic": "Electrophilic Addition to Conjugated Dienes: Allylic Carbocations",
    "difficulty_level": "Hard",
    "question_text": "When 2-methyl-1,3-butadiene (isoprene) reacts with 1 equivalent of HCl, which allylic carbocation intermediate is formed preferentially, and why?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The allylic carbocation formed by protonation at C1, because it possesses a resonance contributor that is a tertiary carbocation.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The allylic carbocation formed by protonation at C4, because it possesses a resonance contributor that is a secondary carbocation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The non-allylic carbocation formed by protonation at C2, because it is tertiary.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The allylic carbocation formed by protonation at C3, because it minimizes steric hindrance.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "With an unsymmetrical diene the first question is which end the proton goes to, and the answer is the end that produces the more stable allylic cation. Protonation at a terminal carbon always gives an allylic cation; the two termini differ in how substituted the two resonance forms of that cation are. For isoprene, protonating C1 places the positive charge on the methyl-bearing C2 in one resonance form, a tertiary allylic cation, and that is the intermediate that forms.",
      "approach": "Step 1: Number isoprene CH2=C(CH3)-CH=CH2 as C1 to C4.\nStep 2: Protonate C1: the cation is CH3-C(+)(CH3)-CH=CH2, resonance form CH3-C(CH3)=CH-CH2(+). Tertiary plus primary contributors.\nStep 3: Protonate C4: the cation is CH2=C(CH3)-CH(+)-CH3, resonance form (+)CH2-C(CH3)=CH-CH3. Secondary plus primary contributors.\nStep 4: Protonation at C2 or C3 gives a cation that is not allylic at all. The tertiary allylic cation from C1 protonation is the most stable and forms preferentially.",
      "note": "This choice fixes the whole product set: everything downstream, whether 1,2 or 1,4 and whether kinetic or thermodynamic, comes from the cation with charge shared between the tertiary C2 and the primary C4. The products of isoprene and HX are therefore 3-halo-3-methyl-1-butene (1,2) and 1-halo-3-methyl-2-butene (1,4), and never the isomers that would come from C4 protonation.",
      "options": {
        "A": "Correct. Protonation at C1 gives an allylic cation with a tertiary resonance contributor, the most stable intermediate available, so it forms fastest.",
        "B": "Protonation at C4 gives an allylic cation, but its best contributor is only secondary; it is less stable than the tertiary allylic cation from C1 protonation and forms more slowly.",
        "C": "Protonation at C2 would break the C1=C2 pi bond and leave the charge on C1, a primary cation with no allylic stabilization; a tertiary cation is not produced by adding H to C2.",
        "D": "Protonation at C3 gives a non-allylic secondary cation at C4 and destroys the conjugation; steric hindrance does not enter, and this is the least favourable site."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q18_13pentadiene_hbr_addition",
    "topic": "Electrophilic Addition to Conjugated Dienes: Allylic Carbocations",
    "difficulty_level": "Hard",
    "question_text": "Identify the major organic product formed when (E)-1,3-pentadiene is reacted with 1 equivalent of HBr at $-80\\ ^\\circ\\text{C}$.",
    "question_smiles": "C=C/C=C/C",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-4-Bromopent-2-ene",
        "smiles": "C/C=C/C(C)Br",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Bromopent-1-ene",
        "smiles": "CCC(Br)C=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)-5-Bromopent-2-ene",
        "smiles": "C/C=C/CCBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(E)-1-Bromopent-2-ene",
        "smiles": "CC/C=C/CBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The regiochemistry of HBr addition to an unsymmetrical diene is settled in two stages: first, which terminus is protonated (the one giving the more stable allylic cation), and second, which end of that cation bromide bonds to. (E)-1,3-Pentadiene has a special feature: protonating C1 gives a cation that is secondary at both ends and symmetrical, so bromide gives the same compound whichever end it bonds to.",
      "approach": "Step 1: Protonate C1: CH3-CH(+)-CH=CH-CH3, resonance form CH3-CH=CH-CH(+)-CH3. Both contributors are secondary; the cation is symmetrical.\nStep 2: Protonate C4 instead: CH2=CH-CH(+)-CH2CH3, resonance form (+)CH2-CH=CH-CH2CH3. Secondary plus primary, less stable. C1 protonation wins.\nStep 3: Bromide bonds to either end of the symmetrical cation. Both ends give CH3-CH(Br)-CH=CH-CH3, 4-bromopent-2-ene; the W-shaped cation delivers mainly the E alkene.\nStep 4: So at -80 C, and equally at 40 C, the major product is (E)-4-bromopent-2-ene, formed as a racemate.",
      "note": "This diene is the case where the kinetic and thermodynamic products are the same compound, which is why the temperature in the stem does not change the answer. The distinction between 1,2- and 1,4-addition is real in the mechanism (bromide bonds at C2 or at C4 of the diene) but invisible in the product. Only the 2,4-dideuterio experiment could tell the two pathways apart.",
      "options": {
        "A": "Correct. Protonation at C1 gives a symmetrical secondary-secondary allylic cation, and bromide at either end gives 4-bromopent-2-ene, mainly as the E isomer.",
        "B": "3-Bromopent-1-ene would come from protonating C4 and capturing bromide at C3. That pathway goes through the less stable secondary-primary allylic cation and is minor.",
        "C": "5-Bromopent-2-ene has bromine on a primary carbon that was never cationic; it would require anti-Markovnikov addition, which HBr does not give under ionic conditions.",
        "D": "1-Bromopent-2-ene is the 1,4-adduct of the cation formed by protonating C4 (the less stable choice). It is a minor product; the major pathway goes through the symmetrical cation from C1 protonation."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "(E)-1,3-Pentadiene: a five-carbon chain with a terminal double bond and an internal trans double bond, ending in a methyl group."
  },
  {
    "question_id": "ch14_q19_br2_addition_mechanism",
    "topic": "Electrophilic Addition to Conjugated Dienes",
    "difficulty_level": "Medium",
    "question_text": "The electrophilic addition of 1 equivalent of $\\text{Br}_2$ to 1,3-butadiene yields a mixture of 3,4-dibromo-1-butene and trans-1,4-dibromo-2-butene. Which statement correctly describes the mechanistic pathway of this reaction?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "$\\text{Br}^+$ adds to a terminal carbon to give a bromonium ion that opens to a resonance-stabilized allylic cation; bromide then bonds at C2 (1,2-addition) or C4 (1,4-addition).",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$\\text{Br}_2$ adds across C1 and C4 of the s-cis diene in a single concerted step through a six-membered cyclic transition state, and the 1,2-dibromide arises by a separate 1,2-addition.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The reaction is a concerted [2+2] cycloaddition of $\\text{Br}_2$ to one double bond, followed by a thermal ring-opening rearrangement.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The thermodynamic product is cis-1,4-dibromo-2-butene, because bromide is delivered anti to the bromonium ion and the anti relationship translates into a cis double bond.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Bromine adds to a conjugated diene by the same two-step electrophilic mechanism as HBr, with Br+ in place of H+. Whatever cyclic bromonium ion forms initially is next to a C=C bond, and opening it gives an allylic carbocation whose charge is shared between C2 and C4; bromide bonds at either. The two products, 3,4-dibromo-1-butene and 1,4-dibromo-2-butene, are the 1,2- and 1,4-adducts, and their ratio shows the same temperature dependence as the HBr adducts.",
      "approach": "Step 1: Br2 is polarized by the diene's pi system; Br+ adds to C1 of butadiene, the terminal carbon, because the resulting cation is allylic.\nStep 2: The bridged bromonium ion is opened by the adjacent double bond, delocalizing the charge onto C2 and C4: BrCH2-CH(+)-CH=CH2 and BrCH2-CH=CH-CH2(+).\nStep 3: Bromide bonds at C2 to give 3,4-dibromo-1-butene or at C4 to give 1,4-dibromo-2-butene, mainly the E isomer.\nStep 4: The 1,2-adduct predominates at low temperature and the 1,4-adduct at higher temperature or on standing, as the dibromides re-ionize and equilibrate.",
      "note": "The statement in the old key that the bromonium ion is in resonance with the allylic cation was loose: a bridged ion and an open cation are distinct structures, not resonance forms, and the open allylic cation is the species that gives 1,4-addition. In a simple alkene the bromonium ion stays closed and delivers anti stereochemistry; the neighbouring pi bond in a diene is what opens it.",
      "options": {
        "A": "Correct. Electrophilic attack at C1, opening of the bromonium ion to the allylic cation, and capture at C2 or C4 account for both dibromides and their temperature dependence.",
        "B": "There is no concerted 1,4-addition of Br2; both products come from the same allylic cation, which is why heating the 1,2-dibromide converts it to the 1,4-dibromide.",
        "C": "A thermal [2+2] cycloaddition of Br2 to an alkene is not a known pathway; bromine reacts with alkenes as an electrophile, and the diene is no exception.",
        "D": "The 1,4-adduct's geometry is set by the open allylic cation, which prefers the extended W shape and gives mainly the E (trans) alkene; the trans isomer is also the more stable, so it is the thermodynamic product."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q20_isoprene_hbr_low_temp",
    "topic": "Electrophilic Addition: Kinetic vs Thermodynamic Control",
    "difficulty_level": "Hard",
    "question_text": "When 2-methyl-1,3-butadiene (isoprene) reacts with 1 equivalent of HBr at $-80\\ ^\\circ\\text{C}$, what is the major organic product?",
    "question_smiles": "CC(=C)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "3-bromo-3-methyl-1-butene (kinetic product)",
        "smiles": "CC(C)(Br)C=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-bromo-3-methyl-2-butene (thermodynamic product)",
        "smiles": "CC(C)=CCBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-bromo-2-methyl-1-butene",
        "smiles": "CC(=C)C(Br)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-bromo-2-methyl-2-butene",
        "smiles": "CC=C(C)CBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two decisions give the product: the proton goes to the terminus that produces the more stable allylic cation, and at low temperature bromide bonds at the cation carbon that is closest and carries most of the charge, with no later equilibration. For isoprene the first decision is protonation at C1, giving a cation that is tertiary at C2 and primary at C4; the second, under kinetic control, is capture at C2.",
      "approach": "Step 1: Protonate C1 of CH2=C(CH3)-CH=CH2. The cation is CH3-C(+)(CH3)-CH=CH2 with resonance form CH3-C(CH3)=CH-CH2(+): tertiary and primary contributors.\nStep 2: At -80 C the reaction is irreversible. Bromide bonds where the charge is greatest and where it was generated, the tertiary C2.\nStep 3: The product is (CH3)2C(Br)-CH=CH2, 3-bromo-3-methyl-1-butene: a tertiary bromide with a terminal alkene.\nStep 4: It is the kinetic product only; at 40 C it re-ionizes and the 1,4-adduct, 1-bromo-3-methyl-2-butene, takes over.",
      "note": "In butadiene the kinetic preference for C2 is modest (about 70:30 at 0 C); in isoprene it is stronger, because C2 is tertiary and holds more of the charge, while C4 is primary. The general rule survives: the 1,2-adduct is the kinetic product, and the 1,4-adduct, with its trisubstituted alkene here, is the thermodynamic one.",
      "options": {
        "A": "Correct. C1 protonation gives the tertiary allylic cation; at -80 C bromide bonds at the tertiary C2 and the 1,2-adduct is isolated.",
        "B": "1-Bromo-3-methyl-2-butene is the 1,4-adduct with a trisubstituted alkene, the thermodynamic product and the major product at 40 C; at -80 C it is minor because the mixture cannot equilibrate.",
        "C": "3-Bromo-2-methyl-1-butene would come from protonating C4 and capturing bromide at C3, through the less stable secondary allylic cation; that cation is not the one that forms.",
        "D": "1-Bromo-2-methyl-2-butene is the 1,4-adduct of the C4-protonated cation. Both its regiochemistry of protonation and its 1,4 mode make it a minor product at low temperature."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Isoprene (2-methyl-1,3-butadiene): a four-carbon diene with a methyl group on the second carbon."
  },
  {
    "question_id": "ch14_q21_13cyclohexadiene_hcl",
    "topic": "Electrophilic Addition to Conjugated Dienes",
    "difficulty_level": "Medium",
    "question_text": "When 1,3-cyclohexadiene is treated with 1 equivalent of HCl, what is the relationship between the major product formed via 1,2-addition and that formed via 1,4-addition?",
    "question_smiles": "C1=CC=CCC1",
    "options": [
      {
        "option_id": "A",
        "text": "They are identical; both addition pathways yield 3-chlorocyclohexene.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "They are constitutional isomers: 3-chlorocyclohexene (1,2-addition) and 4-chlorocyclohexene (1,4-addition).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "They are diastereomers of each other.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "They undergo rapid retro-Diels-Alder elimination to yield benzene and chloromethane.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The 1,2 and 1,4 labels describe where the nucleophile bonds relative to the proton, and they only produce different compounds when the two ends of the allylic cation are in different environments. In 1,3-cyclohexadiene protonation at C1 gives a cyclic allylic cation whose two cationic carbons are related by the ring's symmetry, so chloride at either end gives the same compound.",
      "approach": "Step 1: Protonate C1 of the ring. The allylic cation has its charge on C2 and C4, with C3 between them in the alkene.\nStep 2: Chloride at C2 (1,2-addition) gives a ring with Cl on the carbon next to the new CH2, and a double bond C3=C4.\nStep 3: Chloride at C4 (1,4-addition) gives Cl on C4 and a double bond C2=C3.\nStep 4: Number each product from the chlorine-bearing carbon: both are 3-chlorocyclohexene. The ring's symmetry makes the two pathways indistinguishable.",
      "note": "This is the cyclic version of the (E)-1,3-pentadiene case: a symmetrical allylic cation erases the 1,2 versus 1,4 distinction in the product, so the temperature has no effect on which compound is isolated. Isotopic labelling (a deuterium on C1) would reveal that both pathways still occur.",
      "options": {
        "A": "Correct. The cyclic allylic cation is symmetrical, so chloride at either cationic carbon gives 3-chlorocyclohexene; the two pathways converge on one product.",
        "B": "4-Chlorocyclohexene would need the chloride on a carbon that was never part of the allylic cation; it is not a 1,4-adduct of this diene, and numbering the real 1,4-product from its chlorine gives 3-chlorocyclohexene.",
        "C": "The two pathways do not give diastereomers; they give the same constitution and, from an achiral diene and HCl, the same racemate. There is no second stereocentre to differ at.",
        "D": "3-Chlorocyclohexene is a cyclohexene, not a Diels-Alder adduct, and has no bridge to expel. Retro-Diels-Alder fragmentation applies to bicyclic adducts, not to this product."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "1,3-Cyclohexadiene: a six-membered ring with two conjugated double bonds and two adjacent CH2 groups."
  },
  {
    "question_id": "ch14_q22_4methyl_13pentadiene_chlorination",
    "topic": "Electrophilic Addition to Conjugated Dienes",
    "difficulty_level": "Hard",
    "question_text": "In the reaction of 4-methyl-1,3-pentadiene with 1 equivalent of $\\text{Cl}_2$, where does the initial electrophilic attack by $\\text{Cl}^+$ occur, and why?",
    "question_smiles": "CC(C)=CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "At C1, because it generates an allylic carbocation with a tertiary carbocation resonance contributor at C4.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "At C4, because it forms a tertiary carbocation directly.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "At C3, because it forms a secondary carbocation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "At C2, because it forms a secondary carbocation.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An electrophile adds to whichever terminal carbon of a conjugated diene leaves the more stable allylic cation. In 4-methyl-1,3-pentadiene, (CH3)2C=CH-CH=CH2, the two termini are C1 (a CH2) and C4 (bearing two methyls). Adding Cl+ to C1 leaves the charge shared between C2 (secondary) and C4 (tertiary); adding it to C4 leaves the charge shared between C3 (secondary) and C1 (primary). The first is better on both counts.",
      "approach": "Step 1: Cl+ at C1: ClCH2-CH(+)-CH=C(CH3)2, resonance form ClCH2-CH=CH-C(+)(CH3)2. Secondary and tertiary contributors: a very good allylic cation.\nStep 2: Cl+ at C4: (CH3)2C(Cl)-CH(+)-CH=CH2, resonance form (CH3)2C(Cl)-CH=CH-CH2(+). Secondary and primary contributors: worse.\nStep 3: Cl+ at C2 or C3 would give a cation with no allylic stabilization (charge on C1 or C4 next to an sp3 carbon).\nStep 4: The electrophile therefore attacks C1, and the products are the 1,2-dichloride (Cl at C1 and C2) and the 1,4-dichloride (Cl at C1 and C4), the latter with a trisubstituted alkene.",
      "note": "Students often want to put the electrophile on the more substituted end because Markovnikov's rule says the electrophile goes to the less substituted carbon of an alkene, which places the cation on the more substituted carbon. Here the same logic applies but to the whole diene: attack the terminus that leaves the charge on the most substituted carbons, which for this diene is the CH2 end.",
      "options": {
        "A": "Correct. Attack at C1 leaves an allylic cation with a tertiary contributor at C4 and a secondary one at C2, the most stable intermediate available.",
        "B": "Attack at C4 does not give a tertiary cation; it puts the charge on C3, a secondary allylic position whose other resonance form is primary. The tertiary carbon becomes an sp3 C-Cl carbon instead.",
        "C": "Attack at C3 would leave a cation on C4 that is tertiary but not allylic: the remaining double bond, C1=C2, is not adjacent to C4. Losing the allylic stabilization costs far more than a tertiary centre gains.",
        "D": "Attack at C2 leaves the charge on C1, a primary carbon with no adjacent pi bond: the least stable option of the four sites."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "4-Methyl-1,3-pentadiene: a five-carbon diene chain with a terminal double bond and an internal double bond that carries a second methyl at its far carbon, so that carbon bears two methyl groups."
  },
  {
    "question_id": "ch14_q23_allylic_solvolysis_rate",
    "topic": "Electrophilic Addition to Conjugated Dienes: Allylic Carbocations",
    "difficulty_level": "Medium",
    "question_text": "Solvolysis of either 3-chlorobut-1-ene or 1-chlorobut-2-ene in aqueous ethanol leads to the same mixture of ethyl ether and alcohol products. What is the reason for this observation?",
    "question_smiles": "CC(Cl)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "Both substrates dissociate to form the same resonance-stabilized allylic carbocation intermediate.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The reaction proceeds via a concerted $S_N2'$ mechanism where no intermediate is formed.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both compounds undergo rapid thermal tautomerization prior to nucleophilic substitution.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "They are enantiomers of each other and behave identically under chiral conditions.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two allylic halides that ionize to the same delocalized cation must give the same products in the same ratio, because after the leaving group departs the system has no memory of which isomer it came from. 3-Chlorobut-1-ene and 1-chlorobut-2-ene are related by an allylic shift of the chlorine, and both lose chloride to the but-2-en-1-yl/but-3-en-2-yl cation.",
      "approach": "Step 1: Ionize 3-chlorobut-1-ene: CH3-CH(+)-CH=CH2. Ionize 1-chlorobut-2-ene: CH3-CH=CH-CH2(+).\nStep 2: These two structures are the two resonance forms of a single allylic cation; they are not different intermediates.\nStep 3: Water or ethanol bonds at C2 or at C4 of that cation, giving the secondary and primary alcohols (or ethers) in a ratio set by the cation alone.\nStep 4: Hence identical product mixtures from both substrates: the signature of an SN1 process through a common intermediate.",
      "note": "A concerted SN2 or SN2' substitution would carry the substrate's structure into the product and give different mixtures from the two halides, so identical mixtures are evidence against a concerted pathway under these solvolytic conditions. The experiment is the substitution analogue of showing that 3-bromo-1-butene and 1-bromo-2-butene equilibrate through the same cation when heated with HBr.",
      "options": {
        "A": "Correct. Both substrates ionize to the same allylic cation, and everything after that step is common to both, so the products and their ratio are the same.",
        "B": "A concerted SN2' mechanism would give a product whose structure depends on which halide reacted (the nucleophile always bonding at the far end of the alkene), so the two substrates would give different mixtures.",
        "C": "Alkyl halides do not tautomerize; there is no acidic proton adjacent to a carbonyl here. The interconversion that does occur is ionization to a common cation, not a proton shift.",
        "D": "The two chlorides are constitutional isomers, not enantiomers; 1-chlorobut-2-ene has no stereocentre at all. Their common behaviour comes from a shared intermediate, not from mirror symmetry."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "3-Chloro-1-butene: a four-carbon chain with a terminal double bond and a chlorine on the carbon that also bears the methyl group."
  },
  {
    "question_id": "ch14_q24_kinetic_control_proximity",
    "topic": "Kinetic vs Thermodynamic Control of Reactions",
    "difficulty_level": "Medium",
    "question_text": "Which of the following statements best explains why the 1,2-addition product is favored under kinetic conditions?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "After protonation at C1 the bromide ion is generated next to C2, and more of the cation's positive charge resides on the secondary carbon C2 than on the primary carbon C4, so the transition state for bonding at C2 is lower in energy.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The 1,2-addition product has a more substituted double bond and is therefore more stable, and the more stable product forms faster.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The 1,2-addition product is less stable, and by the Hammond postulate the less stable product is always reached through the lower-energy transition state.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The 1,4-addition product requires a higher activation energy for the initial protonation step, so its formation is slower from the start.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Kinetic control means the product ratio reflects the relative energies of the transition states for the product-forming step, and both adducts of butadiene form from the same allylic cation in the same step type: bromide bonding to a cationic carbon. The 1,2-transition state is the lower one for two reasons that point the same way: the nucleophile is already beside C2 when it is formed, and C2, being secondary, carries the larger share of the positive charge.",
      "approach": "Step 1: The rate-determining step, protonation, is common to both products and cannot differentiate them.\nStep 2: The product-forming step is bromide bonding at C2 or C4 of CH3-CH(+)-CH=CH2. Compare those two transition states.\nStep 3: Proximity: HBr delivers H+ to C1, so Br- is released adjacent to C2. Charge: the secondary C2 bears more positive character than the primary C4, so a nucleophile is more strongly attracted there.\nStep 4: Both factors lower the C2 transition state, so the 1,2-adduct forms faster even though the 1,4-adduct is the more stable compound.",
      "note": "McMurry presents the 1,2 preference as a kinetic fact and attributes it to the greater positive charge on the secondary carbon; other texts stress the proximity of the ion pair. The two are not in competition and both are consistent with the data. What matters for the exam is the structure of the argument: rates come from transition states, stabilities from products, and the two need not agree.",
      "options": {
        "A": "Correct. The product-forming transition state at C2 is lower because the bromide is generated there and because C2 holds more of the delocalized charge; rate follows the transition state, not the product.",
        "B": "The facts are reversed: the 1,2-adduct has the less substituted (terminal) alkene and is the less stable isomer. It forms faster despite being less stable, which is the whole point of kinetic control.",
        "C": "The Hammond postulate relates a transition state's structure to whichever species it resembles in energy; it does not say the less stable product forms faster. Here the less stable product does form faster, but for reasons specific to this cation.",
        "D": "Protonation is the first step for both products and is identical: a single allylic cation is formed and only then partitioned. The two pathways differ only in the second step."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q25_thermodynamic_control_equilibrium",
    "topic": "Kinetic vs Thermodynamic Control of Reactions",
    "difficulty_level": "Hard",
    "question_text": "In a reaction under thermodynamic control, which of the following is true regarding the relationship between the transition states ($TS$) and the products ($P$)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The reaction is reversible; the product ratio depends only on the relative free energy ($\\Delta G^\\circ$) of the products, regardless of the transition state energies.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The product ratio depends only on the relative energies of the transition states ($TS_{1,2}$ vs $TS_{1,4}$).",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The kinetic product cannot form at all under thermodynamic conditions, because the system bypasses its transition state.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Equilibrium is reached because the kinetic transition state is higher in energy than the thermodynamic transition state.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Thermodynamic control is the regime in which the products can revert to the intermediate (or to the reactants) fast enough that the system reaches equilibrium. At equilibrium the ratio of two products is fixed by their difference in free energy through K = exp(-delta G / RT), and the heights of the barriers that were crossed to get there play no part. Barriers set how fast equilibrium is reached, not where it lies.",
      "approach": "Step 1: Define the condition: the reverse reactions (product back to allylic cation) must be fast on the timescale of the experiment. Heat supplies that.\nStep 2: With every step reversible, the mixture relaxes to the lowest total free energy: the more stable product predominates.\nStep 3: Write the ratio: [1,4]/[1,2] = exp(-(G(1,4) - G(1,2))/RT). Only product energies appear.\nStep 4: Confirm the transition states are irrelevant to the position of equilibrium: raising or lowering a barrier changes the time to reach the same ratio, nothing else.",
      "note": "The kinetic product is still formed under thermodynamic conditions, and usually first; it simply does not survive, because it reverts and the system settles where energy is lowest. That is why heating the pure kinetic product with a trace of acid gives the same final mixture as running the addition hot. Thermodynamic control is a statement about reversibility and time, not about which step is skipped.",
      "options": {
        "A": "Correct. Under reversible conditions the product ratio is an equilibrium constant, and equilibrium constants depend only on the free-energy difference between the products.",
        "B": "Transition-state energies determine the ratio under kinetic control, when nothing reverses; once the products interconvert, their own energies take over.",
        "C": "The kinetic product forms just as readily under thermodynamic conditions; it then re-ionizes and drains into the more stable product. Nothing is bypassed; it is formed and then undone.",
        "D": "The kinetic transition state is by definition the lower one, which is why the kinetic product forms faster. Equilibrium is reached because the temperature makes the product-to-intermediate step fast, not because of the ordering of the two barriers."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q26_isomerization_kinetic_thermo",
    "topic": "Kinetic vs Thermodynamic Control of Reactions",
    "difficulty_level": "Hard",
    "question_text": "If pure 3-bromo-1-butene (the 1,2-addition product of HBr and 1,3-butadiene) is heated to $40\\ ^\\circ\\text{C}$ in the presence of a trace amount of HBr, what is observed, and why?",
    "question_smiles": "CC(Br)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "It isomerizes to trans-1-bromo-2-butene because the C-Br bond can dissociate reversibly to reform the allylic carbocation, allowing equilibration to the more stable thermodynamic product.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It remains completely unchanged because the activation energy for C-Br bond cleavage is too high.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It undergoes E2 elimination to yield 1,3-butadiene exclusively.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It polymerizes rapidly via a cationic mechanism to form synthetic rubber.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This experiment is the proof that the 1,4-adduct's dominance at higher temperature is thermodynamic. Starting from the pure 1,2-adduct with no diene present, the only way to reach 1-bromo-2-butene is to break the C-Br bond, regenerate the allylic cation, and recapture bromide at the other end. If that happens, the product must be equilibrating, and the 40 C ratio must be an equilibrium ratio.",
      "approach": "Step 1: 3-Bromo-1-butene is a secondary allylic bromide; its C-Br bond ionizes readily, especially with HBr present to assist and to supply bromide.\nStep 2: Ionization gives CH3-CH(+)-CH=CH2, the same cation formed from butadiene and HBr.\nStep 3: Bromide recaptures at C4 as well as C2. Capture at C4 gives 1-bromo-2-butene, mainly E, which is more stable and accumulates.\nStep 4: The final mixture at 40 C is about 85% 1,4-adduct, identical to the mixture from butadiene and HBr at 40 C.",
      "note": "McMurry describes exactly this observation: the 1,2-adduct, heated in the presence of HBr, is converted to the equilibrium mixture. The reverse test also works: the 1,4-adduct under the same conditions gives the same mixture from the other side. Neither elimination to the diene nor polymerization competes at 40 C with catalytic HBr.",
      "options": {
        "A": "Correct. Reversible ionization of the allylic C-Br bond returns the delocalized cation, and recapture at the far end funnels the mixture toward the more stable 1,4-adduct.",
        "B": "A secondary allylic C-Br bond ionizes easily; that is why allylic halides undergo SN1 so readily. At 40 C with HBr present the exchange is fast.",
        "C": "E2 elimination needs a strong base, and HBr is the opposite; moreover elimination would consume the product, whereas the observation is isomerization to another bromide.",
        "D": "Cationic polymerization of a bromoalkene is not what happens under these conditions; the allylic cation is captured by bromide far faster than by another alkene molecule."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "3-Bromo-1-butene: a four-carbon chain with a terminal double bond and a bromine on the carbon that also bears the methyl group."
  },
  {
    "question_id": "ch14_q27_temperature_effect_reversible",
    "topic": "Kinetic vs Thermodynamic Control of Reactions",
    "difficulty_level": "Hard",
    "question_text": "For the electrophilic addition of HBr to 1,3-butadiene, why does raising the temperature increase the proportion of the 1,4-addition product?",
    "question_smiles": "C=CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "Higher temperature provides the thermal energy required for the 1,2-addition product to eliminate bromide and revert to the carbocation intermediate, driving the reaction toward the thermodynamic product.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Higher temperature changes the rate-determining step to the protonation step.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Raising the temperature selectively lowers the activation barrier of the 1,4-addition transition state.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The 1,4-addition is endothermic, so it is favored at higher temperatures according to Le Chatelier's principle.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Temperature does not change which transition state is lower or which product is more stable; those are fixed by the molecules. What it changes is whether the products can go backward. At low temperature the adducts are formed and stay put. At higher temperature the C-Br bonds of the allylic bromides re-ionize, the products interconvert through the cation, and the mixture drifts toward the more stable 1,4-adduct.",
      "approach": "Step 1: At -80 C, capture of bromide is effectively irreversible; the ratio is set by the two capture rates and favours the 1,2-adduct.\nStep 2: At 40 C, the reverse reaction, ionization of the allylic bromide back to the cation, becomes fast enough to matter.\nStep 3: With ionization and recapture both fast, the system reaches equilibrium, and the equilibrium favours the 1,4-adduct with its more substituted alkene.\nStep 4: Hence a larger 1,4 fraction at higher temperature, not because 1,4-addition became faster but because the 1,2-adduct stopped being permanent.",
      "note": "The barrier for the reverse step is what distinguishes the two regimes: from the 1,2-adduct back to the cation is uphill by roughly the energy released in forming it, and at -80 C that hill is not climbed on any practical timescale. A useful diagnostic is that the pure 1,2-adduct isomerizes at 40 C with HBr and is stable at -80 C; the temperature acts on the products, not on the addition itself.",
      "options": {
        "A": "Correct. Higher temperature makes the products' ionization back to the allylic cation fast, turning an irreversible capture into an equilibrium that favours the more stable 1,4-adduct.",
        "B": "Protonation is rate-determining at both temperatures. Changing the rate-determining step would not, in any case, alter which of two products accumulates from a shared intermediate.",
        "C": "Temperature does not lower one barrier selectively; it raises the rate of every step. The change in outcome comes from the reverse step becoming fast, not from a shift in the forward barriers.",
        "D": "Formation of the 1,4-adduct is exothermic, not endothermic, and Le Chatelier's principle applied to an exothermic step would predict less product at higher temperature, not more."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "1,3-Butadiene drawn as a four-carbon chain with a double bond between the first two carbons and between the last two."
  },
  {
    "question_id": "ch14_q28_thermodynamic_stability_reasons",
    "topic": "Kinetic vs Thermodynamic Control of Reactions",
    "difficulty_level": "Medium",
    "question_text": "Why is trans-1-bromo-2-butene thermodynamically more stable than 3-bromo-1-butene?",
    "question_smiles": "C=CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "trans-1-Bromo-2-butene contains a disubstituted, trans-configured double bond, which is lower in energy than the monosubstituted double bond in 3-bromo-1-butene.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The carbon-bromine bond in trans-1-bromo-2-butene is stronger due to $sp^2$ hybridization of the carbon bonded to bromine.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-Bromo-1-butene has severe steric hindrance between the methyl group and the bromine atom.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The bromine atom in trans-1-bromo-2-butene is tertiary, which increases its stability.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The stability difference between the two adducts is an alkene stability difference. Both compounds contain one C-Br bond and one C=C bond; what differs is how substituted the alkene is. Alkene stability rises with substitution (Chapter 7, from heats of hydrogenation), and a trans disubstituted alkene is about 4 kJ/mol more stable than its cis isomer and several kJ/mol more stable than a monosubstituted one.",
      "approach": "Step 1: Draw both. 3-Bromo-1-butene: CH3-CH(Br)-CH=CH2, a terminal monosubstituted alkene. trans-1-Bromo-2-butene: BrCH2-CH=CH-CH3, an internal disubstituted alkene with E geometry.\nStep 2: Apply the alkene stability order: tetra > tri > di (trans > cis) > mono. The 1,4-adduct is one rung up.\nStep 3: Check the C-Br bonds: secondary allylic in the 1,2-adduct, primary allylic in the 1,4-adduct. A primary C-Br bond is if anything slightly stronger, which points the same way but is minor.\nStep 4: The disubstituted trans alkene is the deciding factor, and it is why the 1,4-adduct wins at equilibrium.",
      "note": "The distractors here describe things that are not in the molecules: neither compound has a vinylic bromine, a tertiary carbon, or a serious steric clash. The habit worth building is to draw both structures and compare feature by feature; the alkene substitution pattern is the only difference that matters, and it is the same reason internal alkenes are favoured in E1 and E2 eliminations.",
      "options": {
        "A": "Correct. A disubstituted trans alkene is more stable than a monosubstituted one, and that alkene difference is the energy gap between the two adducts.",
        "B": "Bromine in 1-bromo-2-butene is on an sp3 CH2 carbon, not on the alkene; there is no vinylic C-Br bond in either product.",
        "C": "A methyl and a bromine on the same sp3 carbon are a normal secondary alkyl bromide arrangement, as in 2-bromobutane; there is no severe strain.",
        "D": "The bromine in 1-bromo-2-butene is on a primary carbon (CH2Br). Nothing in either adduct is tertiary."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "1,3-Butadiene drawn as a four-carbon chain with a double bond between the first two carbons and between the last two."
  },
  {
    "question_id": "ch14_q29_reaction_coordinate_diagram",
    "topic": "Kinetic vs Thermodynamic Control of Reactions",
    "difficulty_level": "Hard",
    "question_text": "On a reaction coordinate diagram for the addition of HBr to 1,3-butadiene, what is the relative positioning of the transition states ($TS$) and intermediate ($INT$)?",
    "question_smiles": "C=CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "There is a single allylic carbocation intermediate. The transition state leading to 1,2-addition ($TS_{1,2}$) is lower in energy than the transition state leading to 1,4-addition ($TS_{1,4}$), while the 1,4-product is lower in energy than the 1,2-product.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "There are two separate carbocation intermediates. The intermediate leading to 1,2-addition is lower in energy than the one leading to 1,4-addition.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The transition state for the first step (protonation) is lower in energy than both transition states for the second step (nucleophilic attack).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The transition state leading to 1,4-addition ($TS_{1,4}$) is lower in energy than $TS_{1,2}$, but the 1,2-product is lower in energy than the 1,4-product.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The energy diagram for HBr addition to butadiene has one high first barrier (protonation), one well for the allylic cation, and then two branches from that well, one to each adduct. The whole kinetic-versus-thermodynamic story is in how those branches are drawn: the barrier to the 1,2-adduct is lower, but the 1,2-adduct itself sits higher than the 1,4-adduct.",
      "approach": "Step 1: One intermediate. Protonation at C1 gives a single allylic cation; there is no separate intermediate for each product.\nStep 2: Two second-step transition states from that well. TS(1,2), bromide at C2, is lower than TS(1,4), bromide at C4.\nStep 3: Two product wells. The 1,4-adduct (disubstituted alkene) is lower than the 1,2-adduct (monosubstituted).\nStep 4: The barrier ordering gives kinetic control at low temperature (1,2 major); the product ordering gives thermodynamic control when the system can climb back out of the 1,2 well (1,4 major).",
      "note": "Draw the first barrier highest of all: protonation is rate-determining, and the second steps, cation plus anion, are fast and low. The reverse barrier out of the 1,2 well is the height from that well back up to TS(1,2), and it is the barrier temperature has to overcome to switch regimes. Two intermediates would imply the two products do not interconvert, contradicting the isomerization experiment.",
      "options": {
        "A": "Correct. A single allylic cation, a lower barrier toward the 1,2-adduct, and a lower final energy for the 1,4-adduct: those three features generate both control regimes.",
        "B": "Both products come from one delocalized cation; drawing two intermediates would mean the 1,2- and 1,4-adducts could not interconvert, yet heating the 1,2-adduct with HBr does convert it.",
        "C": "Protonation is the slow, endergonic step that creates a carbocation; its transition state is the highest on the diagram. Capture of the cation by bromide is fast and its barriers are low.",
        "D": "This inverts both orderings: it makes the 1,4-adduct the kinetic product and the 1,2-adduct the thermodynamic one, the opposite of what the temperature study shows."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "1,3-Butadiene drawn as a four-carbon chain with a double bond between the first two carbons and between the last two."
  },
  {
    "question_id": "ch14_q30_rate_determining_step",
    "topic": "Kinetic vs Thermodynamic Control of Reactions",
    "difficulty_level": "Easy",
    "question_text": "What is the rate-determining step in the electrophilic addition of HBr to 1,3-butadiene under kinetic conditions?",
    "question_smiles": "C=CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "Protonation of the diene to form the allylic carbocation intermediate.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Attack of the bromide ion on the allylic carbocation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Deprotonation of the carbocation to regenerate the acid catalyst.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Heterolytic dissociation of the H-Br bond to form free ions.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "In every electrophilic addition of HX to a C=C bond the slow step is the one that creates the carbocation: breaking a pi bond and an H-X bond to make one new sigma bond and a high-energy cation is strongly uphill. The second step, in which the halide anion combines with the cation, is fast and downhill. Conjugation makes the cation allylic and lowers the first barrier, but does not change which step is slow.",
      "approach": "Step 1: Step one: butadiene + HBr gives the allylic cation + Br-. A pi bond and an H-Br bond are broken; one C-H sigma bond is made. Endergonic, high barrier.\nStep 2: Step two: cation + Br- gives the alkyl bromide. Two ions combine to form a sigma bond with no bond broken. Exergonic, low barrier.\nStep 3: The higher barrier is rate-determining: protonation. The kinetic versus thermodynamic question is decided in the fast second step, but the overall rate is set by the first.",
      "note": "Two consequences follow. First, the rate of addition depends on how stable the cation is, which is why conjugated dienes react with HBr faster than simple alkenes: an allylic cation is easier to form. Second, since the product-determining step is not the rate-determining one, product ratio and overall rate are governed by different transition states, and they can be discussed separately.",
      "options": {
        "A": "Correct. Forming the carbocation is the endergonic, high-barrier step; the diene's conjugation lowers that barrier relative to a simple alkene but keeps it rate-limiting.",
        "B": "Bromide attack on the allylic cation is a fast ion-ion combination with a low barrier. It decides which product forms, not how fast the overall reaction goes.",
        "C": "No deprotonation occurs; addition consumes HBr rather than regenerating it. Deprotonation of a cation is the last step of an E1 elimination, not of an addition.",
        "D": "HBr does not dissociate into free ions before reacting; the proton is transferred directly from H-Br to the diene, with bromide released in the same step."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "1,3-Butadiene drawn as a four-carbon chain with a double bond between the first two carbons and between the last two."
  },
  {
    "question_id": "ch14_q31_isoprene_hbr_high_temp",
    "topic": "Kinetic vs Thermodynamic Control of Reactions",
    "difficulty_level": "Medium",
    "question_text": "What is the major product of the reaction of 2-methyl-1,3-butadiene with 1 equivalent of HBr under thermodynamic control (at $40\\ ^\\circ\\text{C}$)?",
    "question_smiles": "CC(=C)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "1-bromo-3-methyl-2-butene (trisubstituted alkene)",
        "smiles": "CC(C)=CCBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-bromo-3-methyl-1-butene (kinetic product)",
        "smiles": "CC(C)(Br)C=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-bromo-2-methyl-2-butene",
        "smiles": "CC=C(C)CBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-bromo-2-methyl-1-butene",
        "smiles": "CC(=C)C(Br)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Under thermodynamic control the question reduces to which of the possible adducts is most stable, and for HBr and isoprene that is decided by alkene substitution. Both adducts come from the cation formed by protonating C1 (tertiary at C2, primary at C4); 1,2-capture gives a terminal alkene, 1,4-capture gives a trisubstituted one. At 40 C the two interconvert through the cation and the trisubstituted alkene wins.",
      "approach": "Step 1: Protonate C1: CH3-C(+)(CH3)-CH=CH2, resonance form CH3-C(CH3)=CH-CH2(+).\nStep 2: Products from this cation: 3-bromo-3-methyl-1-butene (Br at C2, terminal alkene) and 1-bromo-3-methyl-2-butene (Br at C4, trisubstituted alkene).\nStep 3: At 40 C the tertiary allylic bromide ionizes easily, so the two products equilibrate.\nStep 4: The trisubstituted alkene is more stable than the monosubstituted one by a wide margin, so 1-bromo-3-methyl-2-butene (prenyl bromide) is the thermodynamic product.",
      "note": "The gap between the two isoprene adducts is larger than for butadiene, because trisubstituted versus monosubstituted is a bigger step than disubstituted versus monosubstituted, and because the tertiary allylic 1,2-adduct ionizes even more readily than a secondary one. Prenyl bromide is the same C5 unit that terpenes are built from, which is why this addition is a standard way to make it.",
      "options": {
        "A": "Correct. Under reversible conditions the adduct with the trisubstituted alkene, 1-bromo-3-methyl-2-butene, is the most stable and predominates.",
        "B": "3-Bromo-3-methyl-1-butene is the kinetic product, favoured at -80 C; at 40 C its tertiary allylic C-Br bond ionizes and it drains into the 1,4-adduct.",
        "C": "1-Bromo-2-methyl-2-butene is a 1,4-adduct of the cation formed by protonating C4, the less stable secondary allylic cation. That cation is not the one formed, so this product is minor at any temperature.",
        "D": "3-Bromo-2-methyl-1-butene is the 1,2-adduct of the C4-protonated cation: wrong protonation site and a terminal alkene, so it is neither the kinetic nor the thermodynamic product."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Isoprene (2-methyl-1,3-butadiene): a four-carbon diene with a methyl group on the second carbon."
  },
  {
    "question_id": "ch14_q32_fastest_solvolysis_structure",
    "topic": "Electrophilic Addition to Conjugated Dienes: Allylic Carbocations",
    "difficulty_level": "Hard",
    "question_text": "Which of the following allylic chlorides undergoes the fastest solvolysis in aqueous acetone?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "3-chloro-3-methyl-1-butene",
        "smiles": "CC(C)(Cl)C=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-chloro-1-butene",
        "smiles": "CC(Cl)C=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-chlorobut-2-ene",
        "smiles": "CC=CCCl",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-chloropropene (allyl chloride)",
        "smiles": "C=CCCl",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "SN1 solvolysis rate tracks carbocation stability, and for allylic halides the cation to compare is the delocalized one, judged by its better resonance contributor. All four substrates give allylic cations; the one whose cation has a tertiary contributor ionizes fastest, the ones whose cations are secondary-primary come next, and the parent allyl cation, primary at both ends, is slowest.",
      "approach": "Step 1: 3-Chloro-3-methyl-1-butene gives (CH3)2C(+)-CH=CH2, resonance form (CH3)2C=CH-CH2(+): tertiary and primary.\nStep 2: 3-Chloro-1-butene and 1-chlorobut-2-ene both give CH3-CH(+)-CH=CH2 / CH3-CH=CH-CH2(+): secondary and primary. Same cation, so nearly the same rate, with the secondary chloride a little faster because it ionizes directly to the better-stabilized end.\nStep 3: Allyl chloride gives CH2=CH-CH2(+), primary at both ends.\nStep 4: Fastest: the tertiary allylic chloride.",
      "note": "Two features add up in 3-chloro-3-methyl-1-butene: the tertiary centre and the allylic delocalization. Either alone (tert-butyl chloride, or allyl chloride) gives a workable SN1 substrate; together they give a compound that solvolyzes essentially on contact with water. Note also that both secondary substrates give the same product mixture, since they share the cation.",
      "options": {
        "A": "Correct. Its cation has a tertiary resonance contributor as well as allylic delocalization, the most stable of the four intermediates, so it ionizes fastest.",
        "B": "3-Chloro-1-butene gives the secondary-primary allylic cation, stable but a full substitution level below the tertiary allylic cation from option A.",
        "C": "1-Chlorobut-2-ene ionizes to the same secondary-primary allylic cation as option B, from its primary end; it is slower than A and similar to or slightly slower than B.",
        "D": "Allyl chloride gives the parent allyl cation, delocalized but primary at both ends; it is the slowest of the four."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q33_diels_alder_mechanism_concerted",
    "topic": "Diels-Alder Cycloaddition: Mechanism",
    "difficulty_level": "Easy",
    "question_text": "Which experimental observation is direct evidence that the Diels-Alder reaction is concerted, forming both new sigma bonds in a single step with no intermediate?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "A cis-disubstituted dienophile gives only the cis-disubstituted cyclohexene and a trans dienophile gives only the trans one; the two never cross over.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The rate law is second order overall, first order in diene and first order in dienophile.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Electron-withdrawing groups on the dienophile make the reaction faster.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The reaction goes faster when the mixture is heated.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A mechanism is tested by predictions that would fail if it were wrong. A stepwise addition through a diradical or zwitterion would leave a moment in which the former dienophile carbons are joined by a single bond and free to rotate, so some of a cis dienophile's substituents would end up trans in the product. A concerted reaction has no such moment. Complete retention of dienophile geometry is therefore the observation that rules out an intermediate.",
      "approach": "Step 1: Ask of each observation: would it be different if there were an intermediate?\nStep 2: Stereospecificity: yes. Dimethyl maleate gives only the cis diester and dimethyl fumarate only the trans; a stepwise path would scramble at least part of each. This discriminates.\nStep 3: Second-order kinetics: no. Any bimolecular first step, concerted or not, gives a second-order rate law.\nStep 4: Rate enhancement by electron-withdrawing groups and by heat: no. Both are expected whether the bonds form together or in sequence. Only the stereochemical result is diagnostic.",
      "note": "The stereospecificity that proves the mechanism is also the rule students use to predict products: what is cis on the dienophile is cis on the ring. A second line of evidence, not offered here, is the reaction's insensitivity to solvent polarity, which argues against a charged intermediate; that argument is weaker on its own because a diradical intermediate would also be insensitive to solvent.",
      "options": {
        "A": "Correct. Retention of the dienophile's cis or trans relationship, with no crossover, is incompatible with any intermediate in which the former alkene carbons could rotate.",
        "B": "Second-order kinetics show that one molecule of each reactant is involved up to the rate-determining step; a stepwise mechanism whose first step is bimolecular gives the same rate law.",
        "C": "Rate acceleration by electron-withdrawing groups shows the dienophile acts as the electron acceptor, which is true of the concerted mechanism and would be equally true of a stepwise one.",
        "D": "Almost every reaction speeds up on heating; the temperature dependence says nothing about whether one step or two are involved."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q34_diels_alder_stereospecific_maleate",
    "topic": "Diels-Alder Cycloaddition: Stereospecificity",
    "difficulty_level": "Medium",
    "question_text": "Reaction of 1,3-butadiene with dimethyl maleate (a cis-alkene ester) yields a cyclohexene product. What is the stereochemical configuration of the ester groups in the product?",
    "question_smiles": "COC(=O)/C=C\\C(=O)OC",
    "options": [
      {
        "option_id": "A",
        "text": "The two ester groups are cis to each other because the Diels-Alder reaction is stereospecific and retains the stereochemistry of the dienophile.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The two ester groups are trans to each other due to thermodynamic equilibration.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A 1:1 racemic mixture of cis and trans isomers is obtained because of a carbocation intermediate.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The reaction does not occur because maleic esters are too electron-rich to act as dienophiles.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Diels-Alder reaction is a suprafacial addition on the dienophile: the diene's two termini bond to the same face of the dienophile's pi bond at the same time. Groups that were cis on the dienophile alkene are therefore on the same face of the new ring, and groups that were trans are on opposite faces. Dimethyl maleate is the cis diester, so its adduct with butadiene has the two esters cis.",
      "approach": "Step 1: Identify the dienophile geometry: maleate is the cis isomer of the butenedioate diesters (fumarate is trans).\nStep 2: Bond formation: both new sigma bonds form in one transition state, on one face of the dienophile, so the two ester-bearing carbons never rotate relative to each other.\nStep 3: The product is dimethyl cyclohex-4-ene-1,2-dicarboxylate with the esters cis; because the ring has a mirror plane through that arrangement it is the meso diastereomer.\nStep 4: No trans diester is formed; the reaction is stereospecific, not merely stereoselective.",
      "note": "Stereospecific means different stereoisomers of the reactant give different stereoisomers of the product, which is exactly the maleate/fumarate pair. A carbocation or radical intermediate would allow rotation and give a mixture from either ester; the absence of that mixture is the classic evidence that the cycloaddition is concerted. Maleic anhydride behaves identically, its ring simply enforcing the cis geometry.",
      "options": {
        "A": "Correct. Both bonds form on one face of the cis dienophile in a single step, so the esters that were cis on the alkene are cis on the cyclohexene.",
        "B": "No thermodynamic equilibration occurs; the reaction is under kinetic control and the product's configuration is fixed as the bonds form. The trans diester is not formed at all.",
        "C": "There is no carbocation intermediate; the concerted mechanism leaves no opportunity for rotation, so no cis/trans mixture forms. (A cis/trans mixture would be diastereomers, not a racemate, in any case.)",
        "D": "The two ester groups make maleate electron-poor, which is what a good dienophile should be; maleate and maleic anhydride are among the most reactive dienophiles in common use."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Dimethyl maleate: a C=C double bond with a methyl ester group on each carbon, the two ester groups on the same side of the double bond (cis)."
  },
  {
    "question_id": "ch14_q35_diels_alder_stereospecific_fumarate",
    "topic": "Diels-Alder Cycloaddition: Stereospecificity",
    "difficulty_level": "Medium",
    "question_text": "Reaction of 1,3-butadiene with dimethyl fumarate (a trans-alkene ester) yields a cyclohexene product. What is the stereochemical configuration of the ester groups in the product?",
    "question_smiles": "COC(=O)/C=C/C(=O)OC",
    "options": [
      {
        "option_id": "A",
        "text": "The two ester groups are trans to each other because the Diels-Alder reaction is stereospecific and retains the stereochemistry of the dienophile.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The two ester groups are cis to each other because of stereochemical inversion.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A 1:1 mixture of cis and trans isomers is obtained because of a free-radical intermediate.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The reaction fails because trans-alkenes cannot fit into the s-cis cavity of the diene.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The same suprafacial rule that keeps cis groups cis keeps trans groups trans. Dimethyl fumarate's two esters are on opposite sides of its double bond, so in the transition state, as the diene bonds to one face of the alkene, one ester points toward the diene and the other away. In the cyclohexene product one ester is up and the other down: the trans diester.",
      "approach": "Step 1: Identify the geometry: fumarate is the trans diester (E configuration).\nStep 2: Both new bonds form on one face of the dienophile in one step; the ester-bearing carbons cannot rotate.\nStep 3: An ester that was above the alkene plane stays on the top face of the ring; the one that was below stays on the bottom face. The product is trans-dimethyl cyclohex-4-ene-1,2-dicarboxylate.\nStep 4: The trans product is chiral and forms as a racemate, because the achiral diene can approach either face of the dienophile with equal probability.",
      "note": "Maleate gives the meso cis diester; fumarate gives the racemic trans diester. That pairing, each dienophile isomer giving its own product diastereomer and neither giving the other, is what stereospecific means and is the standard proof that no intermediate intervenes. Note also that a trans dienophile reacts perfectly well: only the diene must be s-cis, and there is no geometric requirement on the dienophile.",
      "options": {
        "A": "Correct. The trans relationship of the esters survives the concerted, single-face addition; the product has one ester on each face of the ring.",
        "B": "There is no inversion step in a cycloaddition; inversion is a feature of SN2 reactions. The dienophile's geometry is carried through unchanged.",
        "C": "A free-radical intermediate would allow bond rotation and scramble the stereochemistry, but the reaction gives only the trans diester; that clean result is the evidence against any intermediate.",
        "D": "Trans dienophiles react readily; the s-cis requirement applies to the diene, not the dienophile. Fumarate and maleate react at comparable rates."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Dimethyl fumarate: a C=C double bond with a methyl ester group on each carbon, the two ester groups on opposite sides of the double bond (trans)."
  },
  {
    "question_id": "ch14_q36_diels_alder_endo_rule",
    "topic": "Diels-Alder Cycloaddition: Endo Rule",
    "difficulty_level": "Hard",
    "question_text": "The reaction of 1,3-cyclopentadiene with maleic anhydride yields the endo adduct as the major product. What is the primary reason for this endo selectivity?",
    "question_smiles": "C1=CC=CC1",
    "options": [
      {
        "option_id": "A",
        "text": "Secondary orbital interactions between the carbonyl $\\pi$ systems of the dienophile and the developing double bond of the diene in the transition state.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The endo product is thermodynamically more stable than the exo product.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Steric hindrance between the anhydride ring and the cyclopentadiene methylene bridge is minimized in the endo transition state.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The exo product is formed through a higher energy carbocation intermediate.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When cyclopentadiene reacts with a dienophile that carries an unsaturated substituent, two adducts are possible: endo, with the substituent tucked under the diene's developing double bond, and exo, with it pointing away toward the CH2 bridge. The endo adduct forms faster even though it is the more crowded and less stable isomer. The accepted explanation is a stabilizing overlap in the endo transition state between the substituent's pi system (here the two carbonyls) and the diene's C2-C3 p orbitals, a secondary orbital interaction that does not form a bond but lowers the transition-state energy.",
      "approach": "Step 1: Draw both transition states with the anhydride under the diene (endo) and away from it (exo).\nStep 2: In the endo arrangement the carbonyl carbons lie over C2 and C3 of the diene, close enough for their p orbitals to overlap with the developing pi bond. In the exo arrangement they are far from the diene.\nStep 3: That extra overlap is stabilizing, so the endo transition state is lower and the endo adduct forms faster: kinetic control.\nStep 4: The exo adduct is nonetheless more stable (less steric crowding), and heating the endo adduct long enough, through retro-Diels-Alder and re-addition, converts it to exo.",
      "note": "This is the Alder endo rule, and McMurry's framing of it is the one given here. Two cautions: the rule holds under kinetic control, and it applies to dienophile substituents with pi systems (carbonyl, nitrile, aryl) rather than to alkyl groups, which have nothing to overlap. The endo/exo distinction concerns the substituent's orientation relative to the longer bridge; it is separate from the cis/trans stereospecificity, which is retained in both adducts.",
      "options": {
        "A": "Correct. Overlap between the carbonyl pi orbitals and the diene's C2-C3 orbitals stabilizes the endo transition state; the endo adduct is the kinetic product.",
        "B": "The exo adduct is the more stable one, because the anhydride sits away from the crowded region under the double bond. The endo preference is kinetic and is reversed by prolonged heating.",
        "C": "Steric hindrance points the other way: the endo transition state is the more crowded of the two. The endo adduct forms faster despite sterics, not because of them.",
        "D": "The Diels-Alder reaction is concerted and involves no carbocation; the endo/exo choice is made between two concerted transition states, not between intermediates."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "1,3-Cyclopentadiene: a five-membered ring with two conjugated double bonds and one CH2 group."
  },
  {
    "question_id": "ch14_q37_diels_alder_diene_stereochem_rate",
    "topic": "Diels-Alder Cycloaddition: Diene Reactivity",
    "difficulty_level": "Hard",
    "question_text": "Which of the following dienes is the least reactive in a Diels-Alder reaction, and why?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "(2E,4Z)-2,4-Hexadiene, because the methyl group on its Z double bond must point inward in the s-cis conformation and clashes with the hydrogen at the other end of the diene.",
        "smiles": "C/C=C/C=C\\C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,3-Butadiene, because it lacks alkyl groups to activate it.",
        "smiles": "C=CC=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,3-Cyclopentadiene, because it is locked in the s-cis conformation.",
        "smiles": "C1=CCC=C1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(2E,4E)-2,4-Hexadiene, because its two methyl groups make it the most sterically hindered diene of the four.",
        "smiles": "C/C=C/C=C/C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An acyclic diene reacts through its s-cis conformer, so anything that raises the energy of that conformer slows the reaction. Substituents on the terminal carbons can point outward or inward; in the s-cis conformer an inward substituent on C1 points straight at the inward position on C4. A Z double bond at the end of a diene puts its substituent inward, so (E,Z)-dienes react slowly and (Z,Z)-dienes, with two inward groups colliding, essentially not at all.",
      "approach": "Step 1: Cyclopentadiene is permanently s-cis: fastest.\nStep 2: Butadiene rotates freely into s-cis, with two inward hydrogens that clash only mildly: normal reactivity.\nStep 3: (2E,4E)-2,4-Hexadiene: in s-cis both methyls point outward (the E geometry puts each methyl trans to the chain), so the inward positions are hydrogens as in butadiene. It reacts about as readily as butadiene, and its alkyl groups even raise the HOMO a little.\nStep 4: (2E,4Z)-2,4-Hexadiene: the Z end forces one methyl inward, where it clashes with the inward hydrogen at the other end in s-cis. That conformer is scarce and strained; this is the least reactive of the four.",
      "note": "The E/Z geometry of a diene also shows up in the product: outward groups end up cis to each other on the ring and an inward/outward pair ends up trans. So the same feature that makes an (E,Z)-diene slow also changes the stereochemistry of what little product it gives. McMurry's example of an unreactive acyclic diene is (2Z,4Z)-2,4-hexadiene, the extreme case of this effect.",
      "options": {
        "A": "Correct. The Z-configured end puts a methyl in the inward position of the s-cis conformer, where it clashes across the diene; the reactive conformer is destabilized and the rate falls.",
        "B": "Butadiene needs no activation; it is a standard, reactive diene. Alkyl groups help slightly by raising the HOMO, but their absence does not make butadiene the slowest here.",
        "C": "Being locked s-cis is what makes cyclopentadiene the most reactive diene of the set, not the least; it dimerizes at room temperature.",
        "D": "In the (E,E) isomer both methyls point outward in s-cis and cause no clash; it reacts about as fast as butadiene. Counting methyl groups is not the test; their inward or outward position is."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q38_diels_alder_dienophile_reactivity",
    "topic": "Diels-Alder Cycloaddition: Dienophile Reactivity",
    "difficulty_level": "Medium",
    "question_text": "Which of the following alkenes is the most reactive dienophile in a standard Diels-Alder reaction with 1,3-cyclopentadiene, and why?",
    "question_smiles": "C1=CC=CC1",
    "options": [
      {
        "option_id": "A",
        "text": "Tetracyanoethylene (TCNE), because four strong electron-withdrawing cyano groups lower the energy of the LUMO, increasing the rate of orbital interaction with the diene HOMO.",
        "smiles": "N#CC(=C(C#N)C#N)C#N",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methyl vinyl ether, because the electron-donating methoxy group lowers the activation energy of the transition state.",
        "smiles": "COC=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethylene, because it is sterically unhindered.",
        "smiles": "C=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propene, because the methyl group activates the double bond by inductive electron donation.",
        "smiles": "CC=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "In a normal Diels-Alder reaction the diene supplies electrons from its HOMO and the dienophile accepts them into its LUMO, so the reaction is fastest when that gap is smallest. Electron-withdrawing groups conjugated to the dienophile's double bond lower its LUMO; the more of them and the stronger they are, the faster the reaction. Electron-donating groups raise the LUMO and slow it.",
      "approach": "Step 1: Classify each dienophile's substituents. Tetracyanoethylene: four nitrile groups, all strongly withdrawing. Methyl vinyl ether: one methoxy group, donating by resonance. Ethylene: none. Propene: one methyl, weakly donating.\nStep 2: Rank LUMO energies from lowest to highest: TCNE, then ethylene, then propene, then methyl vinyl ether.\nStep 3: The lowest LUMO gives the smallest gap to the diene HOMO and the fastest reaction. TCNE reacts with cyclopentadiene essentially instantly at room temperature; ethylene needs high temperature and pressure.",
      "note": "This is the ranking McMurry builds around: ethylene and propene are poor dienophiles, and useful ones carry C=O, C=N, NO2 or similar groups conjugated to the alkene. The reverse case, an electron-rich dienophile with an electron-poor diene, does react (an inverse-electron-demand Diels-Alder, with the roles of HOMO and LUMO swapped), but it is outside the normal pattern this question describes.",
      "options": {
        "A": "Correct. Four conjugated nitrile groups make TCNE's LUMO the lowest of the four, closest to the diene HOMO, and it is among the fastest dienophiles known.",
        "B": "A methoxy group donates electron density by resonance, raising the dienophile LUMO and widening the gap; methyl vinyl ether is a poor dienophile in the normal reaction.",
        "C": "Ethylene is unhindered but unactivated: its LUMO is high and it reacts with butadiene only at about 200 C under pressure, in low yield.",
        "D": "A methyl group is weakly electron-donating and slightly raises the LUMO; propene is, if anything, a marginally worse dienophile than ethylene."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "1,3-Cyclopentadiene: a five-membered ring with two conjugated double bonds and one CH2 group."
  },
  {
    "question_id": "ch14_q39_diels_alder_regio_1methoxy",
    "topic": "Diels-Alder Cycloaddition: Regiochemistry",
    "difficulty_level": "Hard",
    "question_text": "Predict the major product of the Diels-Alder reaction between 1-methoxy-1,3-butadiene and methyl acrylate.",
    "question_smiles": "CO/C=C/C=C",
    "options": [
      {
        "option_id": "A",
        "text": "Methyl 2-methoxycyclohex-3-ene-1-carboxylate (the 'ortho' product)",
        "smiles": "COC(=O)C1CCC=CC1OC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methyl 5-methoxycyclohex-3-ene-1-carboxylate (the 'meta' product)",
        "smiles": "COC(=O)C1CC(OC)C=CC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Methyl 4-methoxycyclohex-2-ene-1-carboxylate",
        "smiles": "COC(=O)C1C=CC(OC)CC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyl 2-methoxycyclohex-2-ene-1-carboxylate",
        "smiles": "COC(=O)C1CCCC=C1OC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A 1-substituted diene with an electron-donating group and a monosubstituted electron-poor dienophile give mainly the 1,2 (\"ortho\") adduct. The reason is the same charge-matching argument that governs 2-substituted dienes: resonance donation from the methoxy oxygen puts the greatest electron density on C4 of the diene, the ester makes the dienophile's beta carbon (its CH2) the most electron-poor, and those two carbons bond. The methoxy-bearing C1 then bonds to the ester-bearing carbon, placing the two substituents on adjacent ring carbons.",
      "approach": "Step 1: Push the methoxy lone pair into the diene: O=C1-C2=C3-C4(-), so C4 is the nucleophilic terminus.\nStep 2: The ester withdraws from methyl acrylate: the CH2 (beta carbon) carries the partial positive charge.\nStep 3: Bond C4 of the diene to the acrylate CH2 and C1 to the ester-bearing carbon. The methoxy and ester end up 1,2, and the ring alkene is the diene's old C2=C3, adjacent to the methoxy carbon.\nStep 4: Name it from the ester carbon: methyl 2-methoxycyclohex-3-ene-1-carboxylate. The methoxy carbon is allylic; the ester carbon is homoallylic.",
      "note": "The old key drew the ring alkene between the two CH2 groups, a position no Diels-Alder adduct can have. In every adduct the alkene is the diene's former C2=C3, flanked on each side by a carbon that was a diene terminus; the two dienophile carbons are next to those and never adjacent to the alkene. Checking that rule against a drawn product catches most regiochemistry and connectivity mistakes at once.",
      "options": {
        "A": "Correct. Donor on C1 and acceptor on the dienophile give the ortho adduct; the methoxy carbon sits next to the ring alkene and the ester carbon next to it.",
        "B": "The meta adduct, from bonding the diene's C4 to the ester-bearing carbon instead. It is the minor regioisomer; the charge-matching pattern disfavours it.",
        "C": "This puts the ester on a carbon adjacent to the ring alkene. The two carbons that came from methyl acrylate are never next to the alkene, so this is not a Diels-Alder adduct of these partners at all; it comes from misapplying the para rule for 2-substituted dienes.",
        "D": "The ortho connectivity is right but the alkene has been moved next to the ester. A Diels-Alder product's alkene is fixed where the diene's C2 and C3 were, one bond removed from the methoxy carbon and two from the ester carbon."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "(E)-1-Methoxy-1,3-butadiene: a four-carbon diene with a methoxy group on the first carbon, the internal double bond drawn trans."
  },
  {
    "question_id": "ch14_q40_diels_alder_regio_isoprene",
    "topic": "Diels-Alder Cycloaddition: Regiochemistry",
    "difficulty_level": "Hard",
    "question_text": "Predict the major product of the Diels-Alder reaction between 2-methyl-1,3-butadiene (isoprene) and methyl acrylate.",
    "question_smiles": "CC(=C)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "Methyl 4-methylcyclohex-3-ene-1-carboxylate (the 'para' product)",
        "smiles": "CC1=CCC(CC1)C(=O)OC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methyl 3-methylcyclohex-3-ene-1-carboxylate (the 'meta' product)",
        "smiles": "CC1=CCCC(C1)C(=O)OC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Methyl 5-methylcyclohex-3-ene-1-carboxylate",
        "smiles": "CC1CC(CC=C1)C(=O)OC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyl 2-methylcyclohex-3-ene-1-carboxylate",
        "smiles": "COC(=O)C1C(C)C=CCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A 2-substituted diene carrying an electron-donating group gives mainly the 1,4 (\"para\") adduct with a monosubstituted electron-poor dienophile. The methyl on C2 makes C1, the terminus attached to the substituted carbon, the most electron-rich end of the diene; the ester makes the acrylate CH2 the most electron-poor carbon of the dienophile; and the new bond between those two carbons fixes the regiochemistry.",
      "approach": "Step 1: Locate the donor: a methyl on C2 of isoprene. Its hyperconjugative donation concentrates on C1.\nStep 2: Locate the acceptor site on the dienophile: the beta CH2 of methyl acrylate.\nStep 3: Bond C1 (diene) to CH2 (acrylate) and C4 (diene) to the ester-bearing carbon. The methyl stays on the ring alkene (old C2=C3) and the ester carbon is bonded to old C4.\nStep 4: Numbering from the ester carbon: C2 and C6 are CH2 groups, C3=C4 is the alkene, and the methyl is on C4, para to the ester. Methyl 4-methylcyclohex-3-ene-1-carboxylate.",
      "note": "The 1,3-isomer is formed too, roughly 30% under purely thermal conditions; a Lewis acid catalyst polarizes the acrylate further and raises the para selectivity above 95%. Two structural checks eliminate most wrong drawings: the methyl must be on an alkene carbon (it was on C2 of the diene), and the ester carbon must not be adjacent to the alkene (it came from the dienophile).",
      "options": {
        "A": "Correct. The methyl-activated C1 of isoprene bonds to the acrylate's CH2, leaving the ester carbon para to the methyl-bearing alkene carbon.",
        "B": "The meta adduct, from the diene's C1 bonding to the ester-bearing carbon. It is the minor regioisomer of the thermal reaction and nearly absent under Lewis acid catalysis.",
        "C": "The methyl is on an sp3 carbon here. It was on C2 of the diene, which becomes one of the alkene carbons, so it must be attached to the ring double bond in any adduct.",
        "D": "This bonds the diene through C2, the methyl-bearing carbon. Only the termini C1 and C4 form new bonds; the methyl carbon becomes part of the product alkene instead."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Isoprene (2-methyl-1,3-butadiene): a four-carbon diene with a methyl group on the second carbon."
  },
  {
    "question_id": "ch14_q41_retro_diels_alder",
    "topic": "Diels-Alder Cycloaddition: Retro-Diels-Alder",
    "difficulty_level": "Medium",
    "question_text": "When dicyclopentadiene is heated to high temperatures, it undergoes a retro-Diels-Alder reaction. What is the product of this thermal cracking process?",
    "question_smiles": "C1C=CC2C1C3CC2C=C3",
    "options": [
      {
        "option_id": "A",
        "text": "Two molecules of 1,3-cyclopentadiene",
        "smiles": "C1=CCC=C1.C1=CCC=C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,3-Cyclopentadiene and cyclopentene",
        "smiles": "C1=CCC=C1.C1=CCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Norbornadiene and propyne",
        "smiles": "C1=CC2C=CC1C2.CC#C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,3-Cyclohexadiene and 1,3-butadiene",
        "smiles": "C1=CCCC=C1.C=CC=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Diels-Alder reaction is reversible, and the reverse reaction is favoured by heat because it turns one molecule into two (an entropy gain) and because the forward reaction is exothermic. A retro-Diels-Alder reaction breaks the two sigma bonds that were formed and regenerates the diene and dienophile exactly. Dicyclopentadiene is the Diels-Alder dimer of cyclopentadiene, so cracking it returns two molecules of cyclopentadiene, which is how the monomer is prepared for use.",
      "approach": "Step 1: Recognize the structure: one cyclopentadiene acted as the diene and a second, through one of its double bonds, as the dienophile. The product contains a norbornene (the diene's five carbons plus two of the dienophile's) fused to the rest of the dienophile ring.\nStep 2: Find the ring alkene of the cyclohexene formed in the dimerization, and cut the two sigma bonds one bond away from it on either side.\nStep 3: Each half regains a second double bond: two C5H6 molecules of cyclopentadiene. Mass balance: C10H12 gives 2 x C5H6.\nStep 4: Distilling dicyclopentadiene at about 170 C cracks it; the monomer distils out and must be used quickly because it re-dimerizes at room temperature within hours.",
      "note": "A retro-Diels-Alder always returns a conjugated diene and an alkene (or alkyne); it never gives two saturated fragments or fragments of the wrong total formula. That is a quick test for any proposed answer: the pieces must add up to the starting formula and one of them must be a 1,3-diene. The same fragmentation shows up in mass spectrometry, where cyclohexene rings lose a neutral alkene to give a diene radical cation.",
      "options": {
        "A": "Correct. Breaking the two sigma bonds formed in the dimerization regenerates the diene and the dienophile, both of which are cyclopentadiene.",
        "B": "Cyclopentadiene plus cyclopentene is C10H14, two hydrogens more than dicyclopentadiene. A retro-Diels-Alder returns the dienophile with its double bond restored, not as a saturated ring.",
        "C": "Norbornadiene plus propyne balances the formula but would require breaking bonds inside the norbornene unit rather than the two that the dimerization formed; it is not a retro-Diels-Alder of this molecule.",
        "D": "Cyclohexadiene plus butadiene is C10H14 and shares no ring with dicyclopentadiene's two five-membered rings; no fragmentation of this skeleton produces six-membered rings."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Dicyclopentadiene: a norbornene (bicyclo[2.2.1]heptene) unit fused along one of its saturated edges to a cyclopentene ring, ten carbons in all with two double bonds."
  },
  {
    "question_id": "ch14_q42_intramolecular_diels_alder",
    "topic": "Diels-Alder Cycloaddition: Intramolecular",
    "difficulty_level": "Hard",
    "question_text": "What is the structure of the bicyclic product obtained when (E)-deca-1,3,9-triene is heated to undergo an intramolecular Diels-Alder reaction?",
    "question_smiles": "C=C/C=C/CCCCC=C",
    "options": [
      {
        "option_id": "A",
        "text": "A fused hydrindane (bicyclo[4.3.0]nonene) skeleton.",
        "smiles": "C1=CCC2CCCC2C1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A fused decalin (bicyclo[4.4.0]decene) skeleton.",
        "smiles": "C1=CCC2CCCCC2C1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A bridged norbornene (bicyclo[2.2.1]heptene) skeleton.",
        "smiles": "C1CC2CC1C=C2",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A spiro[4.5]decene skeleton.",
        "smiles": "C1CCC2(C1)CC=CCC2",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An intramolecular Diels-Alder reaction makes two rings at once: the cyclohexene that every Diels-Alder forms, and a second ring made of the tether that links the diene to the dienophile. The size of that second ring is the tether length plus two, since it also contains the diene terminus and the dienophile carbon that bond to each other. Count the tether carefully; the answer changes with every CH2.",
      "approach": "Step 1: Number the triene: C1=C2-C3=C4 is the diene, C5 to C8 are the tether (four CH2 groups), C9=C10 is the dienophile.\nStep 2: Bonds form C4 to C9 and C1 to C10. The new cyclohexene is C1, C2, C3, C4, C9, C10, with the alkene at C2=C3.\nStep 3: The second ring is C4, C5, C6, C7, C8, C9: four tether carbons plus the two bonded atoms, six in all.\nStep 4: Two fused six-membered rings sharing the C4-C9 bond: a bicyclo[4.4.0]decene (an octahydronaphthalene), C10H16, the same formula as the triene.",
      "note": "The shipped version of this item drew an eight-carbon triene and keyed the nine-carbon hydrindane, neither of which matches the ten-carbon name in the stem; a formula check (the product must be C10H16) would have caught both. A three-carbon tether (nona-1,3,8-triene) is what gives the hydrindane. Fused products are the rule for tethers of three or four carbons; the alternative bridged mode would close a strained seven-membered ring here and is not observed.",
      "options": {
        "A": "A bicyclo[4.3.0] skeleton has nine carbons and would come from a three-carbon tether. This triene has four CH2 groups between the diene and the dienophile, and its product must keep all ten carbons.",
        "B": "Correct. The four-carbon tether plus the two carbons it joins closes a six-membered ring fused to the new cyclohexene: a decalin-type bicyclo[4.4.0]decene, C10H16.",
        "C": "A norbornene is a bridged bicyclo[2.2.1] system with seven carbons; it arises from cyclopentadiene as the diene, not from an acyclic triene, and it does not account for ten carbons.",
        "D": "A spiro compound shares one atom between two rings. An intramolecular Diels-Alder shares a bond (the diene terminus bonded to the dienophile carbon), so its rings are fused, not spiro."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "(E)-Deca-1,3,9-triene: a ten-carbon chain with a conjugated diene at one end (terminal double bond plus a trans internal one) and an isolated terminal double bond at the other end, joined by four CH2 groups."
  },
  {
    "question_id": "ch14_q43_fmo_homo_lumo",
    "topic": "Diels-Alder Cycloaddition: FMO Theory",
    "difficulty_level": "Medium",
    "question_text": "According to Frontier Molecular Orbital (FMO) theory, which orbitals interact to form the new C-C bonds in a standard Diels-Alder reaction between an electron-rich diene and an electron-poor dienophile?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The HOMO of the diene and the LUMO of the dienophile.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The LUMO of the diene and the HOMO of the dienophile.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The HOMO of the diene and the HOMO of the dienophile.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The LUMO of the diene and the LUMO of the dienophile.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Frontier molecular orbital theory describes a reaction as a flow of electrons from the highest occupied orbital of the donor into the lowest unoccupied orbital of the acceptor. In a normal Diels-Alder reaction the diene, electron-rich, is the donor and the dienophile, made electron-poor by its withdrawing group, is the acceptor; the interaction that matters is diene HOMO with dienophile LUMO, and the reaction is fast when those two orbitals are close in energy and match in symmetry.",
      "approach": "Step 1: Assign roles: the diene donates (its filled HOMO, psi2 of butadiene, is high in energy); the dienophile accepts (its empty LUMO, pi*, is lowered by the electron-withdrawing group).\nStep 2: Check symmetry: the terminal lobes of butadiene's HOMO have opposite phases, and so do the two lobes of the dienophile's pi* LUMO. Both new bonds can form with in-phase overlap at once, which is why the concerted reaction is allowed thermally.\nStep 3: Predict trends: withdrawing groups on the dienophile lower its LUMO and speed the reaction; donating groups on the diene raise its HOMO and do the same.",
      "note": "The other filled/empty pairing, dienophile HOMO with diene LUMO, also has the right symmetry and contributes a little; it becomes the dominant interaction only when the roles are reversed (an electron-poor diene with an electron-rich dienophile, the inverse-electron-demand case). Two filled orbitals or two empty orbitals cannot form a bond: filled-filled overlap is net repulsive and empty-empty involves no electrons.",
      "options": {
        "A": "Correct. The electron-rich diene donates from its HOMO into the electron-poor dienophile's LUMO; those two orbitals are closest in energy and have matching symmetry.",
        "B": "Diene LUMO with dienophile HOMO is the pairing for the inverse-electron-demand reaction, in which the diene carries withdrawing groups and the dienophile donating ones; it is the minor interaction in the normal case described.",
        "C": "Two filled orbitals cannot form new bonds; overlapping them puts four electrons into a bonding and an antibonding combination, which is net destabilizing.",
        "D": "Two empty orbitals contain no electrons and their interaction has no energetic consequence in the ground state; it cannot drive bond formation."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q44_diels_alder_diene_stereocenter",
    "topic": "Diels-Alder Cycloaddition: Stereochemistry",
    "difficulty_level": "Hard",
    "question_text": "When (2E,4E)-2,4-hexadiene reacts with dimethyl maleate (cis-dienophile), what is the stereochemical relationship between the two methyl groups (originally on the diene) in the resulting cyclohexene adduct?",
    "question_smiles": "C/C=C/C=C/C",
    "options": [
      {
        "option_id": "A",
        "text": "They end up cis to each other (both pointing in the same direction, cis-1,4).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "They end up trans to each other.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "They undergo racemization to yield a mixture of cis and trans isomers.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "One methyl group is converted into an ethyl group via a hydride shift.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The diene's substituents obey a stereochemical rule of their own, separate from the dienophile's. In the s-cis conformation each terminal substituent points either outward (away from the diene) or inward. Because both new bonds form on the same face of the diene at once, two outward substituents end up cis to each other on the ring, two inward ones also end up cis, and an outward/inward pair ends up trans. For (2E,4E)-hexa-2,4-diene both methyls are outward, so they are cis in the product.",
      "approach": "Step 1: Draw the diene s-cis. With E geometry at both double bonds, each methyl is trans to the chain and points outward.\nStep 2: Both new sigma bonds form on one face of the diene as the termini pyramidalize; the two outward groups rotate the same way and land on the same face of the new ring.\nStep 3: Result: the two methyls are cis (1,4 across the ring alkene). The maleate esters are cis to each other by the dienophile rule.\nStep 4: The product is a single diastereomer, and because the all-cis arrangement has a mirror plane it is the meso compound.",
      "note": "The (2E,4Z) isomer of the diene would give the trans-dimethyl product, and the (2Z,4Z) isomer would give cis again but reacts far too slowly to be useful. These rules mean that a Diels-Alder reaction can set up to four stereocentres in one step with complete control from the geometries of the two starting alkenes, which is the main reason the reaction is so valuable in synthesis.",
      "options": {
        "A": "Correct. Both methyls are outward in the s-cis (E,E)-diene, and outward substituents end up cis to each other in the cyclohexene.",
        "B": "A trans relationship would need one methyl outward and one inward, which is the (2E,4Z) diene. Both double bonds here are E, so both methyls are outward.",
        "C": "No mixture forms; the cycloaddition is stereospecific with respect to the diene as well as the dienophile, and no intermediate exists that could racemize or epimerize.",
        "D": "No hydride shift is possible in a concerted cycloaddition; there is no carbocation, and the methyl groups are carried through unchanged."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "(2E,4E)-Hexa-2,4-diene: a six-carbon chain with two conjugated trans double bonds and a methyl group at each end."
  },
  {
    "question_id": "ch14_q45_butadiene_polymerization",
    "topic": "Polymerizations of Dienes",
    "difficulty_level": "Easy",
    "question_text": "Free-radical polymerization of 1,3-butadiene primarily occurs via 1,4-addition. What is the structure of the predominant repeating unit in the resulting polymer, and why?",
    "question_smiles": "C=CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "$-\\text{CH}_2-\\text{CH}=\\text{CH}-\\text{CH}_2-$ (trans); because the trans configuration is thermodynamically more stable than the cis configuration.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$-\\text{CH}_2-\\text{CH}(\\text{CH}=\\text{CH}_2)-$ (1,2-addition); because the secondary radical intermediate is more reactive.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$-\\text{CH}_2-\\text{CH}=\\text{CH}-\\text{CH}_2-$ (cis); because cis is favored by steric factors.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$-\\text{CH}_2-\\text{CH}_2-\\text{CH}_2-\\text{CH}_2-$ (completely reduced); because of the high concentration of radical initiator.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A conjugated diene polymerizes the way it adds electrophiles: the growing chain end adds to C1 of a monomer, producing an allylic radical (or cation, or anion, depending on the initiator) delocalized over C2 and C4, and the next monomer bonds at C2 (1,2-addition) or C4 (1,4-addition). Radical polymerization of butadiene proceeds mainly by 1,4-addition, leaving one double bond in each repeating unit, and most of those internal double bonds are trans because the extended allylic radical prefers that geometry.",
      "approach": "Step 1: Initiation: a radical adds to C1 of butadiene, giving an allylic radical with spin at C2 and C4.\nStep 2: Propagation at C4 (1,4-addition) builds a -CH2-CH=CH-CH2- unit with the double bond in the chain; propagation at C2 (1,2-addition) leaves a pendant vinyl group.\nStep 3: 1,4-Addition predominates because it yields the more substituted, internal alkene and because the radical's terminal carbon is less hindered.\nStep 4: Of the 1,4 units, trans outnumber cis, so the predominant repeat unit is trans-1,4-polybutadiene.",
      "note": "Free-radical polybutadiene is a mixture: roughly 60% trans-1,4, 20% cis-1,4 and 20% 1,2 units, with the exact figures depending on temperature. Ziegler-Natta catalysts can make nearly pure cis-1,4-polybutadiene, the elastomer used in tyres, which is why the industrial material is not made by radical initiation. Whatever the method, every repeat unit keeps one C=C, and those double bonds are where vulcanization cross-links form.",
      "options": {
        "A": "Correct. 1,4-Addition to the allylic radical gives an internal double bond in every repeat unit, and the trans geometry is favoured for the same stability reasons as in small alkenes.",
        "B": "1,2-Addition does occur (about 20% of units) and leaves a pendant vinyl group, but it is not the major mode; the internal 1,4 alkene is more stable and the C4 end of the radical is more accessible.",
        "C": "cis-1,4 units are formed, but as the minority; the extended allylic radical prefers the transoid geometry. Nearly pure cis-1,4 requires a Ziegler-Natta catalyst, not a radical initiator.",
        "D": "A fully saturated chain would need one double bond of each monomer to be consumed without leaving another, which polymerization of a diene cannot do; each repeat unit keeps one C=C, and initiator concentration does not change that."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "1,3-Butadiene drawn as a four-carbon chain with a double bond between the first two carbons and between the last two."
  },
  {
    "question_id": "ch14_q46_natural_rubber_isoprene",
    "topic": "Polymerizations of Dienes",
    "difficulty_level": "Medium",
    "question_text": "Natural rubber and gutta-percha are both natural polymers of 2-methyl-1,3-butadiene (isoprene). What is the structural difference between them?",
    "question_smiles": "CC(=C)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "Natural rubber is cis-1,4-polyisoprene, which is highly elastic; gutta-percha is trans-1,4-polyisoprene, which is crystalline and non-elastic.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Natural rubber is trans-1,4-polyisoprene; gutta-percha is cis-1,4-polyisoprene.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Natural rubber is a 1,2-addition polymer; gutta-percha is a 1,4-addition polymer.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Natural rubber is synthesized via anionic polymerization; gutta-percha is synthesized via radical polymerization.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Natural rubber and gutta-percha are both 1,4-polyisoprene and differ only in the geometry of the double bond in every repeat unit. In rubber each double bond is Z (cis), which kinks the chain, prevents the chains from packing, and gives an amorphous, elastic material. In gutta-percha each double bond is E (trans), the chains are extended and regular, they pack into crystalline domains, and the material is hard and inelastic.",
      "approach": "Step 1: Write the 1,4 repeat unit of polyisoprene: -CH2-C(CH3)=CH-CH2-. Each unit has one trisubstituted double bond that can be cis or trans.\nStep 2: All-cis chains cannot straighten out; they coil, and stretching straightens them temporarily before entropy pulls them back. That is elasticity: natural rubber.\nStep 3: All-trans chains lie flat, pack closely, and crystallize; the solid is tough and rigid. That is gutta-percha, historically used for golf balls and cable insulation.\nStep 4: Same monomer, same connectivity, opposite stereochemistry at every double bond; the physical properties follow from packing.",
      "note": "Both polymers are made in plants by enzymes that control the alkene geometry completely; no laboratory radical polymerization achieves that, though Ziegler-Natta catalysts come close for cis-1,4-polyisoprene (synthetic natural rubber). The comparison is McMurry's illustration that stereochemistry at the molecular level sets bulk properties: cis and trans here differ as much as an elastic band differs from a golf ball.",
      "options": {
        "A": "Correct. Rubber is all-cis 1,4-polyisoprene, coiled and elastic; gutta-percha is all-trans, extended, crystalline and rigid.",
        "B": "This reverses the assignment. It is the cis double bonds that kink the chain and prevent crystallization; the trans polymer is the hard, inelastic one.",
        "C": "Both natural polymers are 1,4-linked; neither is a 1,2-polymer. A 1,2-polyisoprene would carry pendant isopropenyl groups and is not made by plants.",
        "D": "Both are made enzymatically in plants, not by anionic or radical polymerization; and the polymerization mechanism would not by itself dictate a uniform cis or trans geometry."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Isoprene (2-methyl-1,3-butadiene): a four-carbon diene with a methyl group on the second carbon."
  },
  {
    "question_id": "ch14_q47_vulcanization_mechanism",
    "topic": "Polymerizations of Dienes",
    "difficulty_level": "Easy",
    "question_text": "What chemical process is used to vulcanize natural rubber, and how does it alter its properties?",
    "question_smiles": "CC(=C)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "Heating with elemental sulfur introduces disulfide or polysulfide cross-links between the polymer chains, converting a sticky elastomer into a durable material.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Treating rubber with oxygen to break the double bonds and form diols, making it more soluble in water.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Adding plasticizers to make the rubber more flexible and fluid.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Undergoing acid-catalyzed hydration to convert the alkene groups to tertiary alcohols.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Raw natural rubber is a tangle of independent cis-polyisoprene chains that slide past each other, so it is sticky when warm and brittle when cold and does not fully recover its shape. Vulcanization heats the rubber with sulfur, which reacts at the allylic positions of the chains and forms short sulfur bridges (disulfide and polysulfide links) between neighbouring chains. The cross-links tie the network together: the chains can still uncoil and recoil, but they can no longer flow past one another.",
      "approach": "Step 1: Identify the reactive site: every repeat unit of polyisoprene has a C=C with allylic C-H bonds next to it.\nStep 2: Heat with S8. Sulfur inserts at those allylic positions and links one chain to another through -S-S- or longer -Sn- bridges.\nStep 3: A few cross-links per hundred repeat units convert a viscous, sticky mass into a resilient elastomer that snaps back after stretching; more cross-links give a harder material (ebonite at high sulfur loadings).\nStep 4: The double bonds of the chain are consumed only where the links form; most remain, which is why vulcanized rubber still ages by oxidation and ozone attack.",
      "note": "Goodyear's discovery (1839) is the historical fact; the chemistry to remember is that cross-linking is what separates an elastomer from a viscous polymer. Left alone, linear chains store little elastic energy because they can rearrange; cross-linked chains must stretch their bonds and lose entropy, and both effects pull the material back to its original shape. The diene's retained double bonds are what make this chemistry possible for polydienes and not for polyethylene.",
      "options": {
        "A": "Correct. Heating with sulfur forms disulfide and polysulfide bridges at the allylic positions between chains; the cross-linked network is resilient instead of sticky.",
        "B": "Oxygen does attack the double bonds of rubber, but that is oxidative degradation (the cracking of old rubber), not vulcanization, and it makes the material weaker, not tougher or water-soluble.",
        "C": "Plasticizers make a polymer softer and more fluid by getting between the chains; vulcanization does the opposite, restricting chain motion by bonding the chains together.",
        "D": "Acid-catalysed hydration would convert the alkenes to alcohols and destroy the diene character, and it introduces no cross-links; it is not part of rubber processing."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Isoprene (2-methyl-1,3-butadiene): a four-carbon diene with a methyl group on the second carbon."
  },
  {
    "question_id": "ch14_q48_uv_electronic_transitions",
    "topic": "Ultraviolet Spectroscopy: Principles",
    "difficulty_level": "Easy",
    "question_text": "Which type of electronic transition is primarily responsible for the UV-Vis absorption band observed in conjugated dienes in the 200–400 nm region?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "$\\pi \\rightarrow \\pi^*$ transition",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$n \\rightarrow \\pi^*$ transition",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$\\sigma \\rightarrow \\sigma^*$ transition",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$d \\rightarrow d$ orbital transition",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Ultraviolet absorption promotes an electron from a filled orbital to an empty one, and the wavelength depends on the energy gap. In a hydrocarbon the only filled orbitals are sigma and pi and the only empty ones are sigma* and pi*. Sigma to sigma* gaps are so large that they absorb below 200 nm, out of the range of ordinary instruments; pi to pi* gaps in conjugated systems are smaller and fall in the 200 to 400 nm window. A conjugated diene shows one strong band there, and it is a pi to pi* transition.",
      "approach": "Step 1: List the orbitals a diene has: sigma bonding, pi bonding (psi1, psi2), pi antibonding (psi3, psi4), sigma antibonding. No lone pairs, so no n orbitals.\nStep 2: The lowest-energy allowed excitation is from the HOMO (psi2) to the LUMO (psi3): pi to pi*. For butadiene that gap corresponds to 217 nm.\nStep 3: Sigma to sigma* would require far more energy (near 150 nm). n to pi* needs a lone pair on a heteroatom (a carbonyl oxygen, for example); d to d transitions need a transition metal.",
      "note": "The pi to pi* band of a diene is intense (molar absorptivity around 20,000) because the transition is allowed. Carbonyl compounds show a weak n to pi* band near 280 to 300 nm in addition to their pi to pi* band; it is weak (epsilon about 10 to 100) because it is symmetry-forbidden. Telling the two apart by intensity is a routine part of reading a UV spectrum, and it is why Chapter 19 carbonyl compounds and Chapter 14 dienes look different in the UV even when their wavelengths overlap.",
      "options": {
        "A": "Correct. The HOMO to LUMO excitation of a conjugated pi system is pi to pi*; it is allowed, intense, and falls between 200 and 400 nm for dienes and longer polyenes.",
        "B": "An n to pi* transition needs a nonbonding lone pair, which a hydrocarbon diene lacks; it is the weak long-wavelength band of carbonyl and nitro compounds.",
        "C": "Sigma to sigma* transitions require vacuum-UV photons below about 200 nm and are not observed in the 200 to 400 nm region; they are also present in every molecule, so they carry no structural information about conjugation.",
        "D": "d to d transitions belong to transition-metal complexes and give the colours of many inorganic salts; an organic hydrocarbon has no d electrons."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q49_woodward_fieser_12dimethylene",
    "topic": "Ultraviolet Spectroscopy: Woodward-Fieser Rules",
    "difficulty_level": "Hard",
    "question_text": "Using the Woodward-Fieser rules, calculate the predicted UV absorption maximum ($\\lambda_{\\text{max}}$) for 1,2-dimethylenecyclohexane (a molecule with two exocyclic double bonds conjugated to each other on a single cyclohexane ring).",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "237 nm",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "227 nm",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "247 nm",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "253 nm",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Woodward-Fieser rules estimate a diene's lambda-max by adding increments to a base value: 217 nm for an acyclic or heteroannular (transoid) diene, 253 nm for a homoannular (cisoid) diene held in one ring, then plus 5 nm for each alkyl substituent or ring residue on a diene carbon, plus 5 nm for each double bond that is exocyclic to a ring, and plus 30 nm for each additional conjugated double bond. Apply them by first classifying the diene and then counting substituents and exocyclic bonds carefully.",
      "approach": "Step 1: Classify. In 1,2-dimethylenecyclohexane neither double bond is inside the ring, so the diene is not homoannular; use the 217 nm base.\nStep 2: Ring residues. Each internal diene carbon (the two ring carbons that carry the =CH2 groups) is bonded to one ring CH2 outside the diene: two residues, plus 10 nm.\nStep 3: Exocyclic double bonds. Each C=CH2 has one carbon in the ring and one outside, so each is exocyclic to the cyclohexane: two, plus 10 nm.\nStep 4: Total: 217 + 10 + 10 = 237 nm.",
      "note": "McMurry does not teach the Woodward-Fieser increments, but the qualitative content is his: alkyl groups and ring strain each nudge lambda-max to longer wavelength, and a cisoid diene absorbs well beyond a transoid one. The rules are an ACS-scope extension worth knowing for the two-diene comparisons that do appear on exams; the common errors are to use the 253 nm homoannular base for a diene that merely touches a ring, and to forget that an exocyclic double bond counts once for each ring it is exocyclic to.",
      "options": {
        "A": "Correct. Acyclic base 217, two ring residues (10) and two exocyclic double bonds (10) give 237 nm.",
        "B": "227 nm counts either the ring residues or the exocyclic double bonds but not both. Both corrections apply here, because each ring carbon of the diene carries a ring residue and each double bond is exocyclic.",
        "C": "247 nm would need a third correction, for example a fourth alkyl group or a further exocyclic bond; the molecule has only two ring residues and two exocyclic alkenes.",
        "D": "253 nm is the homoannular base value, for a diene with both double bonds inside one ring. Here both double bonds are outside the ring, so the transoid base applies."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q50_woodward_fieser_homo_hetero",
    "topic": "Ultraviolet Spectroscopy: Conjugation and Absorption",
    "difficulty_level": "Hard",
    "question_text": "Which of the following hydrocarbons has its $\\pi \\rightarrow \\pi^*$ absorption maximum at the longest wavelength?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "1,3-Cyclohexadiene",
        "smiles": "C1=CCCC=C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2E,4E)-Hexa-2,4-diene",
        "smiles": "C/C=C/C=C/C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,4-Cyclohexadiene",
        "smiles": "C1=CCC=CC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,3-Dimethyl-1,3-butadiene",
        "smiles": "C=C(C)C(C)=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Three things move a diene's lambda-max: conjugation (without it there is no absorption above 200 nm at all), alkyl substitution (about 5 nm per group), and geometry. A diene held s-cis inside a ring, a homoannular diene, absorbs some 35 to 40 nm beyond an open-chain diene with the same substitution, because in the cisoid geometry the terminal p orbitals interact through space in a way that raises the HOMO and lowers the LUMO. Among candidates that are all conjugated and similarly substituted, the ring-locked cisoid diene wins.",
      "approach": "Step 1: Eliminate the unconjugated candidate. 1,4-Cyclohexadiene has isolated double bonds and absorbs only below 200 nm.\nStep 2: Compare the acyclic dienes. Both hexa-2,4-diene and 2,3-dimethylbutadiene carry two methyl groups on the diene: 217 + 10 gives about 227 nm, and McMurry's table lists 227 and 226 nm respectively.\nStep 3: 1,3-Cyclohexadiene has two ring residues (also about plus 10) but is homoannular, so its base is 253 nm rather than 217; McMurry lists its lambda-max as 256 nm.\nStep 4: Longest wavelength: 1,3-cyclohexadiene.",
      "note": "The values are from McMurry's table of diene absorptions: 1,3-butadiene 217, 2-methyl-1,3-butadiene 220, 2,3-dimethyl-1,3-butadiene 226, 2,4-hexadiene 227, 1,3-cyclohexadiene 256, 1,3,5-hexatriene 258 nm. Note that the cisoid geometry alone is worth about as much as adding a third conjugated double bond, and that alkyl groups matter far less. This is the qualitative form of the Woodward-Fieser rules.",
      "options": {
        "A": "Correct. It is the only homoannular (ring-locked cisoid) diene in the set, and its 256 nm maximum lies about 30 nm beyond the substituted acyclic dienes.",
        "B": "A conjugated acyclic diene with two methyl groups: about 227 nm. The two methyls add roughly 10 nm to butadiene's 217, well short of the cisoid ring diene.",
        "C": "The two double bonds of 1,4-cyclohexadiene are separated by a CH2 and are not conjugated; it has no pi to pi* absorption above 200 nm and absorbs at the shortest wavelength of the four.",
        "D": "Also an acyclic diene with two alkyl groups, at 226 nm; its two methyls are on the internal carbons rather than the termini, but that makes almost no difference to the increment."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q_dynamic_addition_14",
    "topic": "Conjugated Dienes: Electrophilic Additions",
    "difficulty_level": "Hard",
    "question_text": "1,3-Butadiene is treated with one equivalent of HBr, once at 0 C and once at 40 C. The two possible monoaddition products are shown. How does the product distribution differ between the two runs?",
    "reaction_scheme": {
      "reactants": [
        "C=CC=C"
      ],
      "reactant_alts": [
        "1,3-Butadiene, drawn as a four-carbon chain with double bonds at each end."
      ],
      "reagents": "HBr (1 equiv)",
      "conditions": "0 C, or 40 C",
      "products": [
        "C=CC(C)Br",
        "C/C=C/CBr"
      ],
      "product_alts": [
        "The 1,2-adduct, 3-bromo-1-butene: a four-carbon chain with a terminal double bond and a bromine on the carbon next to it, which also carries the methyl group.",
        "The 1,4-adduct, (E)-1-bromo-2-butene: a four-carbon chain with an internal trans double bond and a bromine on the terminal CH2."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "At 0 C the 1,2-adduct, 3-bromo-1-butene, predominates (kinetic control); at 40 C the 1,4-adduct, 1-bromo-2-butene, predominates (thermodynamic control).",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Only the 1,2-adduct forms at either temperature, because bromide attacks the carbon nearest the site of protonation.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Only the 1,4-adduct forms at either temperature, because it has the more substituted alkene.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "At 0 C the 1,4-adduct predominates and at 40 C the 1,2-adduct predominates, because heat favours the faster-forming product.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Electrophilic addition to a conjugated diene goes through an allylic carbocation, and bromide can bond to either end of it. The two adducts form at different rates and have different stabilities, and which one you isolate depends on whether the reaction is allowed to reverse. At low temperature the products cannot re-ionize, so the faster-formed 1,2-adduct accumulates. At higher temperature the C-Br bond of either adduct re-ionizes to the same cation, the mixture equilibrates, and the more stable 1,4-adduct wins.",
      "approach": "Step 1: Protonation at C1 gives the allylic cation CH3-CH(+)-CH=CH2, whose charge is shared with C4.\nStep 2: Bromide at C2 gives 3-bromo-1-butene (1,2-addition); bromide at C4 gives 1-bromo-2-butene (1,4-addition).\nStep 3: At 0 C the mixture is about 71% 1,2 and 29% 1,4: the 1,2-adduct forms faster, through the lower-energy transition state, and nothing reverses.\nStep 4: At 40 C the mixture is about 15% 1,2 and 85% 1,4, and heating the pure 1,2-adduct with a trace of HBr gives the same ratio. The reaction has become reversible, and the ratio now reflects product stability: a disubstituted internal alkene beats a monosubstituted terminal one.",
      "note": "These are McMurry's own figures for HBr and butadiene. The words attach to conditions, not to compounds: the 1,2-adduct is the kinetic product only because it forms faster here, and the 1,4-adduct is the thermodynamic product only because it is more stable here. With 1,3-cyclohexadiene the two pathways give the same compound, and with some substituted dienes the faster-forming product is also the more stable one.",
      "options": {
        "A": "Correct. Low temperature freezes in the faster-formed 1,2-adduct; higher temperature lets the adducts re-ionize and equilibrate to the more stable 1,4-adduct.",
        "B": "Proximity does favour the 1,2-adduct kinetically, but the allylic cation is a single delocalized intermediate and bromide reaches both ends; the 1,4-adduct is 29% of the mixture even at 0 C and 85% at 40 C.",
        "C": "The 1,4-adduct is the more stable isomer, but stability only decides the ratio when the reaction can reverse. At 0 C it cannot, and the less stable 1,2-adduct is the major product.",
        "D": "This assigns the two products to the wrong temperatures. Heat does not favour the faster-forming product; it supplies the energy for the products to re-ionize, which hands control to stability and so to the 1,4-adduct."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q1_scheme_butadiene_mvk",
    "topic": "Diels-Alder Cycloaddition: Product Prediction",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the following Diels-Alder reaction?",
    "reaction_scheme": {
      "reactants": [
        "C=CC=C",
        "CC(=O)C=C"
      ],
      "reactant_alts": [
        "1,3-Butadiene, drawn as a four-carbon chain with double bonds at each end.",
        "Methyl vinyl ketone (but-3-en-2-one): a vinyl group attached to a C=O that carries a methyl group."
      ],
      "reagents": "heat",
      "conditions": "toluene, 100 C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-(Cyclohex-3-en-1-yl)ethan-1-one",
        "smiles": "CC(=O)C1CCC=CC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-(Cyclohex-1-en-1-yl)ethan-1-one",
        "smiles": "CC(=O)C1=CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Cyclohexylethan-1-one",
        "smiles": "CC(=O)C1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-(2-Vinylcyclobutyl)ethan-1-one",
        "smiles": "CC(=O)C1CCC1C=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Diels-Alder reaction joins the two ends of an s-cis diene to the two carbons of a dienophile alkene, making a six-membered ring in one step. Three things happen at once: two new sigma bonds form at the diene termini, the two old pi bonds of the diene become one new pi bond between its middle carbons, and the dienophile pi bond becomes a sigma bond. Every product structure follows from placing those bonds and nothing else.",
      "approach": "Step 1: Number the diene C1 to C4 and the dienophile carbons Ca (bearing the acetyl group) and Cb.\nStep 2: New sigma bonds form C1 to Cb and C4 to Ca. The ring is C1-C2-C3-C4-Ca-Cb.\nStep 3: The diene's two pi bonds are replaced by one pi bond between C2 and C3. The dienophile's pi bond is gone, so Ca and Cb are both sp3 in the product.\nStep 4: Read the product: a cyclohexene whose acetyl group sits on Ca, which is bonded to the allylic CH2 (C4). Counting from the acetyl carbon as C1, the ring alkene is C3=C4: 1-(cyclohex-3-en-1-yl)ethan-1-one.",
      "note": "The template this item replaced paired butadiene with ethylene at 150 C. McMurry is explicit that ethylene and other simple alkenes are poor dienophiles; that reaction needs about 200 C under pressure and gives low yields. An electron-withdrawing group conjugated to the dienophile alkene, here the ketone, lowers its LUMO and is what makes the cycloaddition practical. The acetyl-bearing carbon is a stereocentre, but the product forms as a racemate from these achiral reactants.",
      "options": {
        "A": "Correct. Bonds form at both diene termini, the new ring alkene is between the old C2 and C3, and the acetyl group sits on a ring carbon two bonds away from that alkene.",
        "B": "This puts the ring alkene in conjugation with the ketone. A Diels-Alder product's alkene is always between the diene's former C2 and C3, which is never the carbon that came from the dienophile; conjugated products need a separate isomerization.",
        "C": "The alkene has been lost. The diene starts with two pi bonds and the dienophile with one; the product keeps one of the three, always between the diene's middle carbons. A saturated ring would need an extra H2.",
        "D": "This is the [2+2] adduct of methyl vinyl ketone with only one alkene of butadiene. Thermal [2+2] cycloadditions of simple alkenes are forbidden; the concerted, thermally allowed pathway uses all four carbons of the diene."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q2_scheme_butadiene_acrolein",
    "topic": "Diels-Alder Cycloaddition: Product Prediction",
    "difficulty_level": "Medium",
    "question_text": "1,3-Butadiene is heated with propenal (acrolein). What is the major organic product?",
    "reaction_scheme": {
      "reactants": [
        "C=CC=C",
        "C=CC=O"
      ],
      "reactant_alts": [
        "1,3-Butadiene, drawn as a four-carbon chain with double bonds at each end.",
        "Propenal (acrolein): a vinyl group bonded directly to an aldehyde carbon."
      ],
      "reagents": "heat",
      "conditions": "100 C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Cyclohex-3-ene-1-carbaldehyde",
        "smiles": "O=CC1CCC=CC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclohex-1-ene-1-carbaldehyde",
        "smiles": "O=CC1=CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclohex-2-ene-1-carbaldehyde",
        "smiles": "O=CC1CCCC=C1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzaldehyde",
        "smiles": "O=Cc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The position of the ring alkene is the part of a Diels-Alder product students most often draw wrong, and it is fixed by the mechanism: the new double bond is between the diene's two internal carbons, so it is always two bonds away from each carbon that came from the dienophile. Whatever substituent the dienophile carried ends up on an sp3 ring carbon that is homoallylic, not allylic and not vinylic.",
      "approach": "Step 1: Diene: butadiene, C1 to C4. Dienophile: acrolein, with the CHO on Ca.\nStep 2: Form C1-Cb and C4-Ca; the ring is C1-C2-C3-C4-Ca-Cb, and the surviving pi bond is C2=C3.\nStep 3: Number the product from the CHO-bearing carbon (Ca = ring C1). Its neighbours are C4 and Cb, both CH2; the alkene is the next pair: ring C3=C4. The product is cyclohex-3-ene-1-carbaldehyde, C7H10O.\nStep 4: Check the count: seven carbons from four plus three, two units of unsaturation from the ring and the alkene plus one from the C=O, which matches the formula.",
      "note": "Acrolein is one of McMurry's standard dienophiles because the conjugated aldehyde withdraws electron density from the alkene. The unconjugated aldehyde in the product can be told from the conjugated isomer in option B by IR (1725 versus about 1685 per centimetre) and by the aldehyde proton, a doublet near 9.7 ppm here rather than a singlet near 9.4.",
      "options": {
        "A": "Correct. The CHO sits on a former dienophile carbon, both of its ring neighbours are CH2, and the alkene is between the diene's former C2 and C3.",
        "B": "Here the alkene has migrated into conjugation with the aldehyde. That isomer is more stable, but a concerted cycloaddition has no intermediate that could move the double bond; it forms where the diene's C2 and C3 were.",
        "C": "The alkene is only one carbon out of place, but that carbon came from the dienophile and is sp3 in the product. An allylic aldehyde would need the diene's C4 to be part of the alkene, which the electron flow does not allow.",
        "D": "Benzaldehyde is C7H6O, four hydrogens short of the C7H10O adduct. A Diels-Alder product is a cyclohexene, not an arene; aromatization needs a separate oxidation."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q3_scheme_dimethylbutadiene_maleic_anhydride",
    "topic": "Diels-Alder Cycloaddition: Stereospecificity",
    "difficulty_level": "Hard",
    "question_text": "2,3-Dimethyl-1,3-butadiene reacts with maleic anhydride in refluxing benzene. Which structure, including the relative configuration at the ring fusion, is the product?",
    "reaction_scheme": {
      "reactants": [
        "C=C(C)C(C)=C",
        "O=C1OC(=O)C=C1"
      ],
      "reactant_alts": [
        "2,3-Dimethyl-1,3-butadiene: a butadiene with a methyl group on each of the two central carbons.",
        "Maleic anhydride: a five-membered ring containing a cis C=C flanked by two carbonyl groups that share an oxygen."
      ],
      "reagents": "heat",
      "conditions": "benzene, reflux",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "cis-4,5-Dimethylcyclohex-4-ene-1,2-dicarboxylic anhydride (ring-fusion hydrogens cis)",
        "smiles": "CC1=C(C)C[C@@H]2C(=O)OC(=O)[C@@H]2C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "trans-4,5-Dimethylcyclohex-4-ene-1,2-dicarboxylic anhydride (ring-fusion hydrogens trans)",
        "smiles": "CC1=C(C)C[C@@H]2C(=O)OC(=O)[C@H]2C1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4,5-Dimethylphthalic anhydride",
        "smiles": "Cc1cc2c(cc1C)C(=O)OC2=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4,5-Dimethylcyclohexa-1,4-diene-1,2-dicarboxylic anhydride",
        "smiles": "CC1=C(C)CC2=C(C1)C(=O)OC2=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Diels-Alder reaction is stereospecific with respect to the dienophile: because both new sigma bonds form in the same transition state, there is no moment at which the dienophile carbons can rotate, so substituents that were cis on the dienophile alkene are cis on the product ring. Maleic anhydride is a cis dienophile, so the two carbonyl carbons, and equally the two ring-fusion hydrogens, end up on the same face of the cyclohexene.",
      "approach": "Step 1: Diene termini are the two CH2 groups; the methyls sit on C2 and C3, which become the product's alkene carbons. So the product has a tetrasubstituted ring alkene carrying both methyls.\nStep 2: The dienophile is the anhydride C=C. Its two carbons become the ring-fusion carbons, each still bonded to its carbonyl and to one hydrogen.\nStep 3: Stereochemistry. The C=C of maleic anhydride is cis (it is in a five-membered ring), so the two carbonyls stay cis and the two fusion hydrogens stay cis: a cis-fused bicyclic, which is a meso compound.\nStep 4: The product is the anhydride of cis-4,5-dimethylcyclohex-4-ene-1,2-dicarboxylic acid, C10H12O3.",
      "note": "The same logic run with dimethyl fumarate, the trans dienophile, gives the trans diester. McMurry's rule is worth stating in both directions: cis dienophile gives cis product and trans gives trans, and the reaction never scrambles the two. A trans-fused five-membered anhydride on a six-membered ring is also badly strained, which is a second reason to reject option B, but the stereospecificity argument is the one a Diels-Alder question is testing.",
      "options": {
        "A": "Correct. Both methyls sit on the new ring alkene (from C2 and C3 of the diene), and the cis geometry of maleic anhydride is carried into a cis ring fusion.",
        "B": "The connectivity is right but the ring fusion is trans. Maleic anhydride's alkene is cis, and a concerted cycloaddition preserves that relationship; a trans fusion would have to come from fumaric-type geometry.",
        "C": "This is the aromatic anhydride, four hydrogens short of the adduct. A Diels-Alder reaction gives a cyclohexene; converting it to an arene would need a separate dehydrogenation.",
        "D": "This keeps the dienophile's C=C in the product. The dienophile pi bond is one of the three pi bonds consumed in forming the two new sigma bonds; only the diene's central C=C survives. The count is two hydrogens short of C10H12O3."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q4_scheme_cyclopentadiene_acrylate",
    "topic": "Diels-Alder Cycloaddition: Cyclic Dienes",
    "difficulty_level": "Medium",
    "question_text": "Freshly cracked cyclopentadiene is mixed with methyl acrylate at room temperature. What is the constitution of the major product?",
    "reaction_scheme": {
      "reactants": [
        "C1=CCC=C1",
        "COC(=O)C=C"
      ],
      "reactant_alts": [
        "1,3-Cyclopentadiene: a five-membered ring with two conjugated double bonds and one CH2.",
        "Methyl acrylate: a vinyl group bonded to a methyl ester carbonyl."
      ],
      "reagents": "",
      "conditions": "25 C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Methyl bicyclo[2.2.1]hept-5-ene-2-carboxylate",
        "smiles": "COC(=O)C1CC2C=CC1C2",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methyl cyclohex-3-ene-1-carboxylate",
        "smiles": "COC(=O)C1CCC=CC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Methyl bicyclo[2.2.1]hept-2-ene-2-carboxylate",
        "smiles": "COC(=O)C1=CC2CCC1C2",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyl bicyclo[2.2.1]heptane-2-carboxylate",
        "smiles": "COC(=O)C1CC2CCC1C2",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When the diene is cyclic, the new six-membered ring is built across it and the carbons that were not part of the diene become a bridge. Cyclopentadiene's one CH2 becomes a one-carbon bridge between the two former diene termini, so every cyclopentadiene adduct is a bicyclo[2.2.1]heptene (a norbornene). The diene's central carbons still become the surviving alkene, now the two-carbon unsaturated bridge.",
      "approach": "Step 1: Cyclopentadiene is held s-cis by its ring, which is why it reacts at room temperature; the diene is C1 to C4 and the CH2 is C5.\nStep 2: Bonds form from C1 and C4 to the two acrylate carbons, giving the new six-membered ring C1-C2-C3-C4-Ca-Cb. C5 stays bonded to both C1 and C4, so it bridges them.\nStep 3: The surviving alkene is C2=C3, in the two-carbon bridge opposite the ester-bearing bridge. Name: bicyclo[2.2.1]hept-5-ene with the ester at C2.\nStep 4: Formula check: C5H6 + C4H6O2 = C9H12O2, which fits the bicyclic but not the six-membered ring in option B (C8).",
      "note": "The stem asks for the constitution because two stereoisomeric adducts form. The endo isomer, with the ester pointing toward the alkene bridge, is the major product under kinetic conditions (Alder's endo rule, credited to secondary orbital overlap between the ester carbonyl and the developing alkene), and the exo isomer is minor. Both share the connectivity drawn here.",
      "options": {
        "A": "Correct. The five ring carbons of cyclopentadiene plus the two acrylate carbons give a bicyclo[2.2.1] skeleton whose alkene is the diene's former C2=C3.",
        "B": "This is the product butadiene would give. Cyclopentadiene brings five carbons, and its CH2 cannot vanish; it becomes the one-carbon bridge. The formula, C8H12O2, is one carbon short.",
        "C": "The alkene has been moved next to the ester into the same bridge. In the adduct the ester carbon is sp3 and the alkene is in the opposite two-carbon bridge, where the diene's C2 and C3 were.",
        "D": "The bicyclic skeleton is right but the alkene is missing. One pi bond of the three survives every Diels-Alder reaction; this saturated ester would need a separate hydrogenation."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q5_scheme_butadiene_dmad",
    "topic": "Diels-Alder Cycloaddition: Alkyne Dienophiles",
    "difficulty_level": "Hard",
    "question_text": "1,3-Butadiene is heated with dimethyl acetylenedicarboxylate (dimethyl but-2-ynedioate). What is the product?",
    "reaction_scheme": {
      "reactants": [
        "C=CC=C",
        "COC(=O)C#CC(=O)OC"
      ],
      "reactant_alts": [
        "1,3-Butadiene, drawn as a four-carbon chain with double bonds at each end.",
        "Dimethyl acetylenedicarboxylate: a carbon-carbon triple bond with a methyl ester on each end."
      ],
      "reagents": "heat",
      "conditions": "",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Dimethyl cyclohexa-1,4-diene-1,2-dicarboxylate",
        "smiles": "COC(=O)C1=C(C(=O)OC)CC=CC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Dimethyl cyclohexa-1,3-diene-1,2-dicarboxylate",
        "smiles": "COC(=O)C1=C(C(=O)OC)C=CCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dimethyl phthalate",
        "smiles": "COC(=O)c1ccccc1C(=O)OC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Dimethyl cyclohex-4-ene-1,2-dicarboxylate",
        "smiles": "COC(=O)C1CC=CCC1C(=O)OC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An alkyne can serve as the dienophile because only one of its two pi bonds is used. The carbons that were triply bonded end up doubly bonded in the ring, so the product of a diene plus an alkyne is a 1,4-cyclohexadiene: one alkene from the diene's central carbons and one from the dienophile, separated by the two new sp3 CH2 groups. The two alkenes are not conjugated with each other, and the ring is not aromatic.",
      "approach": "Step 1: Diene C1 to C4; dienophile carbons Ca and Cb, each carrying an ester.\nStep 2: New bonds C1-Cb and C4-Ca; the diene's central C2=C3 survives.\nStep 3: The alkyne loses one pi bond and keeps one, so Ca=Cb is a double bond in the ring, carrying both esters.\nStep 4: Ring: Ca(=Cb)-C1H2-C2=C3-C4H2, a 1,4-diene with the esters on the same double bond. Formula C10H12O4 from C4H6 plus C6H6O4.",
      "note": "Dimethyl acetylenedicarboxylate is a strong dienophile because two ester groups pull on the same pi bond. The 1,4-cyclohexadiene product is two hydrogens away from dimethyl phthalate, and a mild oxidant will aromatize it in a second step; that two-step diene plus alkyne then oxidation sequence is a standard route to substituted benzenes, but the cycloaddition itself stops at the diene.",
      "options": {
        "A": "Correct. The alkyne keeps one pi bond, so both esters sit on a ring alkene, and the diene's former C2=C3 is the other alkene, across the ring and out of conjugation.",
        "B": "A 1,3-diene would have the two alkenes conjugated. The alkene from the diene is always separated from the dienophile carbons by a CH2 on each side, so it cannot be adjacent to the ester-bearing alkene.",
        "C": "Dimethyl phthalate is aromatic and has the formula C10H10O4, two hydrogens fewer than the adduct. It is what the product becomes after a separate dehydrogenation, not the cycloaddition product.",
        "D": "This treats the alkyne as an alkene: the ester-bearing carbons are drawn sp3. A triple bond gives up only one pi bond in the cycloaddition, so those carbons stay doubly bonded; this structure has two hydrogens too many."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q6_scheme_isoprene_acrylonitrile",
    "topic": "Diels-Alder Cycloaddition: Regiochemistry",
    "difficulty_level": "Hard",
    "question_text": "2-Methyl-1,3-butadiene (isoprene) is heated with acrylonitrile. Which constitutional isomer is the major product?",
    "reaction_scheme": {
      "reactants": [
        "C=CC(C)=C",
        "C=CC#N"
      ],
      "reactant_alts": [
        "Isoprene: 1,3-butadiene with a methyl group on C2.",
        "Acrylonitrile: a vinyl group bonded to a nitrile carbon."
      ],
      "reagents": "heat",
      "conditions": "",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "4-Methylcyclohex-3-ene-1-carbonitrile",
        "smiles": "CC1=CCC(C#N)CC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Methylcyclohex-3-ene-1-carbonitrile",
        "smiles": "CC1=CCCC(C#N)C1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5-Methylcyclohex-3-ene-1-carbonitrile",
        "smiles": "CC1CC(C#N)CC=C1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Methylcyclohex-3-ene-1-carbonitrile",
        "smiles": "CC1C=CCCC1C#N",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When both partners are unsymmetrical, two constitutional isomers are possible and one dominates. The working rule: a 2-substituted diene gives mainly the 1,4-disubstituted (\"para\") cyclohexene, and a 1-substituted diene gives mainly the 1,2 (\"ortho\") product. The reason is electronic. An electron-donating group on C2 of the diene makes C1 the most nucleophilic terminus, and the dienophile's beta carbon (the CH2 of acrylonitrile) is its most electrophilic; the largest coefficients pair up in the transition state.",
      "approach": "Step 1: The methyl on C2 of isoprene donates into the diene, and the resonance form that matters puts negative character on C1 (the CH2 attached to the methyl-bearing carbon).\nStep 2: In acrylonitrile the nitrile withdraws from the alkene, leaving the terminal CH2 (the beta carbon) electron-poor.\nStep 3: Bond the electron-rich C1 of the diene to the electron-poor beta carbon of acrylonitrile; C4 then bonds to the nitrile-bearing alpha carbon.\nStep 4: The methyl stays on the ring alkene (old C2=C3) and the nitrile-bearing carbon is bonded to old C4, which puts it 1,4 to the methyl carbon: 4-methylcyclohex-3-ene-1-carbonitrile.",
      "note": "Thermal reactions of isoprene with monosubstituted dienophiles typically give the para and meta isomers in about a 70:30 ratio; a Lewis acid such as AlCl3 sharpens the selectivity to above 95:5 by polarizing the dienophile further. McMurry presents the outcome as the ortho/para rule; the orbital-coefficient argument above is why the rule holds.",
      "options": {
        "A": "Correct. The diene's electron-rich C1 bonds to the dienophile's electron-poor CH2, which places the nitrile carbon 1,4 to the methyl-bearing alkene carbon.",
        "B": "The meta isomer, from bonding the diene's C1 to the nitrile-bearing carbon instead. It is the minor regioisomer, roughly 30% in the thermal reaction, and a Lewis acid suppresses it further.",
        "C": "Here the methyl sits on an sp3 carbon. In any adduct of isoprene the methyl is on C2 of the diene, which becomes one of the alkene carbons, so it must be attached to the ring double bond.",
        "D": "This bonds the diene through its methyl-bearing C2, which is not a terminus. Only C1 and C4 of a diene form new sigma bonds; C2 and C3 become the product's alkene."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q8_scheme_cyclohexadiene_maleic_anhydride",
    "topic": "Diels-Alder Cycloaddition: Cyclic Dienes",
    "difficulty_level": "Hard",
    "question_text": "1,3-Cyclohexadiene is heated with maleic anhydride. What is the skeleton of the product?",
    "reaction_scheme": {
      "reactants": [
        "C1=CCCC=C1",
        "O=C1OC(=O)C=C1"
      ],
      "reactant_alts": [
        "1,3-Cyclohexadiene: a six-membered ring with two conjugated double bonds and two adjacent CH2 groups.",
        "Maleic anhydride: a five-membered ring containing a cis C=C flanked by two carbonyl groups that share an oxygen."
      ],
      "reagents": "heat",
      "conditions": "",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Bicyclo[2.2.2]oct-5-ene-2,3-dicarboxylic anhydride",
        "smiles": "O=C1OC(=O)C2C1C1CCC2C=C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Bicyclo[2.2.1]hept-5-ene-2,3-dicarboxylic anhydride",
        "smiles": "O=C1OC(=O)C2C1C1C=CC2C1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclohex-4-ene-1,2-dicarboxylic anhydride",
        "smiles": "O=C1OC(=O)C2CC=CCC12",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Bicyclo[2.2.2]octane-2,3-dicarboxylic anhydride",
        "smiles": "O=C1OC(=O)C2C1C1CCC2CC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A cyclic diene turns its non-diene carbons into a bridge, and the bridge length is simply the number of ring carbons that were not part of the diene. Cyclopentadiene has one such carbon and gives bicyclo[2.2.1] adducts; 1,3-cyclohexadiene has two and gives bicyclo[2.2.2] adducts, in which all three bridges between the former diene termini are two carbons long.",
      "approach": "Step 1: Diene C1 to C4 in the ring; C5 and C6 are the two CH2 groups, bonded to C4 and C1 respectively.\nStep 2: The maleic anhydride carbons bond to C1 and C4, forming the new six-membered ring C1-C2-C3-C4-Ca-Cb.\nStep 3: C5-C6 still connects C4 to C1, so it is a two-carbon bridge; C2=C3 is the unsaturated two-carbon bridge; Ca-Cb, carrying the anhydride, is the third. That is bicyclo[2.2.2]oct-5-ene.\nStep 4: The cis anhydride gives a cis (endo, as the major kinetic isomer) fusion, and the formula is C6H8 + C4H2O3 = C10H10O3.",
      "note": "1,3-Cyclohexadiene is a homoannular diene, permanently s-cis, and reacts readily; it is less reactive than cyclopentadiene mainly because its termini are farther apart and the bicyclo[2.2.2] transition state is more crowded. The product's alkene is a strained bridgehead-flanked double bond and a good handle for later chemistry, but it survives the cycloaddition intact.",
      "options": {
        "A": "Correct. Two CH2 carbons outside the diene become a two-carbon bridge, so the adduct is bicyclo[2.2.2]octene with the anhydride on one two-carbon bridge and the alkene on another.",
        "B": "This is the cyclopentadiene adduct, with a one-carbon bridge. 1,3-Cyclohexadiene has two carbons outside its diene, both of which must appear in the product; the formula here is one carbon short.",
        "C": "This is the butadiene adduct. It discards the two CH2 groups of the cyclohexadiene ring; a Diels-Alder reaction breaks no carbon-carbon bonds, so all six ring carbons stay.",
        "D": "The skeleton is right but the alkene is gone. The diene's former C2=C3 always survives as the new ring alkene; a fully saturated bicyclooctane would require a separate hydrogenation."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q39_kinetic_vs_thermodynamic_control",
    "topic": "Kinetic vs Thermodynamic Control: Energy Diagrams",
    "difficulty_level": "Hard",
    "question_text": "The energy diagram shows a common intermediate that can go on to Product A (to the left) or Product B (to the right). Product A forms over the lower barrier but lies higher in energy; Product B forms over the higher barrier but lies lower. Under what conditions is Product B the major product?",
    "question_smiles": "",
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
      "context": "A reaction that can give two products from one intermediate has two questions hidden in it: which product forms faster, and which is more stable. On the diagram the first is read from the barrier heights and the second from the depths of the product wells, and in the interesting cases they disagree. Which one decides the outcome depends on whether the products can climb back out of their wells: if they cannot, rates decide; if they can, stability decides.",
      "approach": "Step 1: Read the barriers from the intermediate: 15 units to reach Product A, 30 to reach Product B. A forms faster; it is the kinetic product.\nStep 2: Read the product energies: A at 20, B at 5. B is more stable; it is the thermodynamic product.\nStep 3: For B to predominate, the system must reach equilibrium: Product A must be able to return over its 40-unit reverse barrier to the intermediate and try again. That needs enough thermal energy and enough time.\nStep 4: High temperature and long reaction time give thermodynamic control, and Product B is the major product.",
      "note": "This is the shape of the HBr and butadiene diagram, where A is the 1,2-adduct and B the 1,4-adduct, and the same shape recurs in enolate formation (Chapter 22), sulfonation of naphthalene, and many others. Low temperature and short time trap A; a radical initiator is irrelevant to an ionic branching; and no set of conditions makes the more stable product form faster, because rates are governed by transition states, not products.",
      "options": {
        "A": "Low temperature and a short time freeze the system on the kinetic side of the diagram: Product A forms over the lower barrier and cannot revert, so A, not B, predominates.",
        "B": "Correct. With enough heat and time Product A re-crosses its barrier back to the intermediate, the branches equilibrate, and the mixture settles into the deeper well, Product B.",
        "C": "A radical initiator changes the mechanism, not the relative energies on this diagram; the branching shown is between two pathways from the same intermediate, and initiators do not select between them.",
        "D": "Stability alone does not make a product major. Under conditions where Product A cannot revert, the faster-formed A dominates even though B is more stable; B wins only once the system can equilibrate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "energy_diagram": {
      "points": [
        {
          "state": "Product A",
          "energy": 20
        },
        {
          "state": "TS to A",
          "energy": 60
        },
        {
          "state": "Intermediate",
          "energy": 45
        },
        {
          "state": "TS to B",
          "energy": 75
        },
        {
          "state": "Product B",
          "energy": 5
        }
      ]
    }
  },
  {
    "question_id": "ch14_q7_retro_diels_alder_analysis",
    "topic": "Diels-Alder Cycloaddition: Retrosynthetic Analysis",
    "difficulty_level": "Hard",
    "question_text": "The cyclohexene shown was made in one step by a Diels-Alder reaction. Which diene and dienophile were used?",
    "question_smiles": "CC1=CCC(C=O)CC1",
    "structure_alt": "A cyclohexene ring. One alkene carbon carries a methyl group; the ring carbon across the ring from it (1,4) carries a CHO group.",
    "options": [
      {
        "option_id": "A",
        "text": "2-Methyl-1,3-butadiene and propenal",
        "smiles": "C=CC(C)=C.C=CC=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(E)-1,3-Pentadiene and propenal",
        "smiles": "C/C=C/C=C.C=CC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Methyl-1,3-butadiene and but-3-en-2-one",
        "smiles": "C=CC(C)=C.CC(=O)C=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,3-Butadiene and (E)-but-2-enal",
        "smiles": "C=CC=C.C/C=C/C=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "To take a Diels-Alder product apart, find the ring alkene. Its two carbons plus their two ring neighbours were the diene, and the remaining two ring carbons, the ones opposite the alkene, were the dienophile. Whatever hangs on the alkene carbons was on C2 or C3 of the diene; whatever hangs on the two carbons opposite was on the dienophile. Regiochemistry then serves as a check: the disconnection you propose must be the one the ortho/para rule would have produced.",
      "approach": "Step 1: Locate the ring C=C. It carries the methyl, so the methyl was on an internal carbon (C2) of the diene: the diene is 2-methyl-1,3-butadiene, isoprene.\nStep 2: The two ring carbons farthest from the alkene are the CH2 and the CH(CHO) that are bonded to each other. They came from the dienophile, so the dienophile is CH2=CH-CHO, propenal.\nStep 3: Check the regiochemistry. A 2-substituted diene with a monosubstituted dienophile gives mainly the para (1,4) product, and the methyl and CHO here are 1,4. The disconnection is consistent.\nStep 4: Check the count: C5H8 + C3H4O = C8H12O, the formula of the target.",
      "note": "This is McMurry's retrosynthetic use of the reaction: cut the two sigma bonds that are each one bond removed from the alkene and redraw the diene's two double bonds. When two of the answer choices share the right partners but differ in which bears the substituent, as B and D do here, the ring alkene settles it: a substituent on an alkene carbon came from C2 or C3 of the diene, and one on an sp3 ring carbon came from the dienophile or from C1/C4 of the diene.",
      "options": {
        "A": "Correct. The methyl is on the ring alkene, so it was on C2 of the diene; the CHO is on a saturated carbon opposite the alkene, so it was on the dienophile; and the 1,4 relationship is what the para rule predicts.",
        "B": "(E)-1,3-Pentadiene carries its methyl on C1, a terminus, so in its adduct the methyl would sit on an sp3 ring carbon adjacent to the alkene, not on the alkene itself.",
        "C": "But-3-en-2-one (methyl vinyl ketone) would put a CH3-C(=O) group on the ring, a methyl ketone rather than an aldehyde, and the product would have nine carbons, not eight.",
        "D": "(E)-But-2-enal has the formula to give C8H12O with butadiene, but its methyl would end up on the sp3 ring carbon next to the CHO-bearing carbon, and the ring alkene would be unsubstituted."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q51_molar_absorptivity",
    "topic": "Ultraviolet Spectroscopy: Beer-Lambert Law",
    "difficulty_level": "Medium",
    "question_text": "A $2.50 \\times 10^{-5}\\ \\text{M}$ solution of a conjugated diene in hexane, measured in a 1.00 cm cell, has an absorbance of 0.525 at its $\\lambda_{\\text{max}}$ of 217 nm. What is the molar absorptivity ($\\varepsilon$) of the diene at that wavelength?",
    "options": [
      {
        "option_id": "A",
        "text": "$2.10 \\times 10^{4}\\ \\text{L mol}^{-1}\\text{cm}^{-1}$",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$1.31 \\times 10^{-5}\\ \\text{L mol}^{-1}\\text{cm}^{-1}$",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$4.76 \\times 10^{-5}\\ \\text{L mol}^{-1}\\text{cm}^{-1}$",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$5.25 \\times 10^{-1}\\ \\text{L mol}^{-1}\\text{cm}^{-1}$",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Beer-Lambert law, A = epsilon c l, says absorbance is proportional to how much absorbing material the light passes through. Absorbance is unitless, concentration is in mol/L and path length in cm, so the molar absorptivity epsilon has units of L per mol per cm and is a property of the compound at that wavelength. A pi to pi* band of a conjugated diene is intense, with epsilon in the range 10,000 to 25,000; a value far outside that range signals an arithmetic slip.",
      "approach": "Step 1: Rearrange: epsilon = A / (c x l).\nStep 2: Substitute: epsilon = 0.525 / (2.50 x 10^-5 mol/L x 1.00 cm).\nStep 3: Divide: 0.525 / 2.50 x 10^-5 = 2.10 x 10^4 L mol^-1 cm^-1.\nStep 4: Check the size: 21,000 is exactly the value McMurry quotes for 1,3-butadiene at 217 nm, and it is typical of an allowed pi to pi* transition.",
      "note": "Because epsilon is fixed for a given compound and wavelength, the same equation is used the other way round to measure an unknown concentration from a measured absorbance, which is the routine use of UV spectroscopy in kinetics and analysis. Keep the concentration in mol/L when solving; a value entered in mmol/L or in g/L gives an answer off by a power of ten or by the molar mass.",
      "options": {
        "A": "Correct. epsilon = A / (c l) = 0.525 / (2.50 x 10^-5 x 1.00) = 2.10 x 10^4 L mol^-1 cm^-1, the expected size for a conjugated diene's pi to pi* band.",
        "B": "1.31 x 10^-5 is A multiplied by c rather than divided by it. Absorbance rises with concentration, so epsilon, the proportionality constant, must be A divided by c and l.",
        "C": "4.76 x 10^-5 is c divided by A, the reciprocal of the right quotient. A molar absorptivity smaller than one would mean an almost transparent compound, not one with a strong 217 nm band.",
        "D": "0.525 is the absorbance itself. Absorbance depends on how concentrated the solution is and how long the cell is; epsilon removes both and is thousands of times larger here."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q52_elucidation_dimethylbutadiene",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound X is a volatile liquid. Combustion analysis gives C 87.7% and H 12.3% by mass. It rapidly decolorizes bromine in $\\text{CH}_2\\text{Cl}_2$, consuming two equivalents, and gives no precipitate with ammoniacal silver nitrate. Its UV spectrum shows a strong band at $\\lambda_{\\text{max}} = 226\\text{ nm}$ ($\\varepsilon \\approx 21{,}000$). IR: $3090\\text{ cm}^{-1}$ (medium), 2970, $1605\\text{ cm}^{-1}$ (weak) and a strong band at $895\\text{ cm}^{-1}$; nothing near 3300, 2120 or $2230\\text{ cm}^{-1}$. The mass spectrum shows $\\text{M}^+$ at $m/z = 82$, a base peak at 67 and peaks at 54 and 39. The $^1\\text{H}$ NMR spectrum is shown. Which structure is X?",
    "question_smiles": "",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 1.88,
          "y": 6,
          "label": "singlet"
        },
        {
          "x": 4.93,
          "y": 2,
          "label": "singlet"
        },
        {
          "x": 5.03,
          "y": 2,
          "label": "singlet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2,3-Dimethyl-1,3-butadiene",
        "smiles": "C=C(C)C(C)=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2E,4E)-Hexa-2,4-diene",
        "smiles": "C/C=C/C=C/C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,5-Hexadiene",
        "smiles": "C=CCCC=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclohexene",
        "smiles": "C1CCC=CC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A structure problem for a hydrocarbon leans on three things: the formula and its unsaturation count, the UV spectrum (which says whether any double bonds are conjugated), and the proton NMR (which says how the carbons are connected and how symmetrical the molecule is). Here the UV does the sorting early: a strong band above 200 nm means a conjugated diene, which removes every isolated diene and every simple alkene before a single NMR signal is read.",
      "approach": "Step 1: Formula. Per 100 g: C 87.7/12.01 = 7.30 mol, H 12.3/1.008 = 12.2 mol; the ratio 1 : 1.67 is 3 : 5, so the empirical formula is C3H5 (41). The molecular ion at 82 doubles it: C6H10. Unsaturation = (2 x 6 + 2 - 10)/2 = 2.\nStep 2: Nature of the unsaturation. Two equivalents of Br2 means two C=C bonds and no ring; no Ag(NH3)2+ precipitate and no 3300 or 2120 band means no terminal alkyne. Two double bonds, and the strong 226 nm absorption says they are conjugated (an isolated diene absorbs below 200 nm).\nStep 3: NMR. Every signal is a singlet, so no proton has a proton neighbour. A 6H singlet at 1.88 is two equivalent methyls on carbons that carry no hydrogen: two methyl groups on the internal carbons of the diene. Two 2H singlets at 4.93 and 5.03 are two =CH2 groups; within each CH2 the two protons are non-equivalent (one cis to a methyl, one trans) and appear separately with only a tiny geminal coupling.\nStep 4: Assemble: CH2=C(CH3)-C(CH3)=CH2, 2,3-dimethyl-1,3-butadiene. IR agrees: 3090 (=C-H), 1605 (conjugated C=C, weak), 895 (out-of-plane bend of a 1,1-disubstituted alkene). Mass spectrum: 67 is M - CH3, the allylic loss of a methyl, and 54 is C4H6+.",
      "note": "The UV value is itself a small piece of structure: McMurry's table gives 2,3-dimethyl-1,3-butadiene at 226 nm, about 9 nm beyond butadiene's 217 because of the two alkyl groups. Hexa-2,4-diene absorbs at almost the same wavelength (227 nm), so the UV alone cannot separate the two conjugated candidates; the NMR does, because the terminal methyls of hexa-2,4-diene sit on CH carbons and must appear as a doublet.",
      "options": {
        "A": "Correct. C6H10 with two conjugated C=C bonds by UV, no ring by bromine uptake, and an NMR of three singlets (6H, 2H, 2H) that only two equivalent methyls on the internal carbons and two terminal =CH2 groups can give.",
        "B": "(2E,4E)-Hexa-2,4-diene is conjugated and absorbs at 227 nm, but its methyls are attached to CH carbons and appear as a 6H doublet near 1.7, and its four vinyl protons are coupled multiplets between 5.5 and 6.1; it has no singlets at all.",
        "C": "1,5-Hexadiene has the formula and takes up two equivalents of bromine, but its double bonds are isolated: no absorption above 200 nm, a 4H allylic multiplet near 2.1, and a 1H multiplet near 5.8 for each =CH. Nothing in it is a singlet.",
        "D": "Cyclohexene is C6H10 with one ring and one C=C: it consumes only one equivalent of bromine, has no UV band above 200 nm, and shows a 2H vinyl multiplet at 5.65 with allylic and homoallylic CH2 multiplets at 2.0 and 1.6; it has no methyl groups."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q53_elucidation_cyclohexenecarbaldehyde",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound Y is a liquid with a sharp odour. Combustion analysis gives C 76.3% and H 9.2% by mass, the remainder oxygen. It gives a silver mirror with Tollens' reagent and an orange precipitate with 2,4-dinitrophenylhydrazine, and it decolorizes one equivalent of bromine in $\\text{CH}_2\\text{Cl}_2$. Its UV spectrum shows no strong absorption above 210 nm, only a very weak band near 290 nm ($\\varepsilon \\approx 20$). IR: $3025\\text{ cm}^{-1}$ (medium), a pair of weak bands at 2820 and $2720\\text{ cm}^{-1}$, a strong band at $1725\\text{ cm}^{-1}$, a weak band at $1650\\text{ cm}^{-1}$, and nothing between 3200 and $3600\\text{ cm}^{-1}$. The mass spectrum shows $\\text{M}^+$ at $m/z = 110$ and prominent fragments at 81, 79 and 54. The $^1\\text{H}$ NMR spectrum is shown. Which structure is Y?",
    "question_smiles": "",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 1.65,
          "y": 2,
          "label": "multiplet"
        },
        {
          "x": 2.15,
          "y": 4,
          "label": "multiplet"
        },
        {
          "x": 2.5,
          "y": 1,
          "label": "multiplet"
        },
        {
          "x": 5.68,
          "y": 2,
          "label": "multiplet"
        },
        {
          "x": 9.68,
          "y": 1,
          "label": "doublet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Cyclohex-3-ene-1-carbaldehyde",
        "smiles": "O=CC1CCC=CC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclohex-1-ene-1-carbaldehyde",
        "smiles": "O=CC1=CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2E,4E)-Hepta-2,4-dienal",
        "smiles": "CC/C=C/C=C/C=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Bicyclo[2.2.1]heptan-2-one (norcamphor)",
        "smiles": "O=C1CC2CCC1C2",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When a molecule contains both a carbonyl group and a carbon-carbon double bond, the UV spectrum answers the one question the IR and NMR answer only indirectly: are the two conjugated? A conjugated enal shows an intense pi to pi* band near 220 to 240 nm; an unconjugated one shows nothing strong above 210 nm and only the weak, forbidden n to pi* band of an isolated carbonyl near 290 nm. That single observation places the alkene away from the aldehyde and turns the rest of the problem into counting.",
      "approach": "Step 1: Formula. Per 100 g: C 76.3/12.01 = 6.35 mol, H 9.2/1.008 = 9.1 mol, O 14.5/16.00 = 0.91 mol; dividing by 0.91 gives C7H10O, mass 110, which is the molecular ion. Unsaturation = (2 x 7 + 2 - 10)/2 = 3.\nStep 2: Functional groups. Tollens positive and DNP positive: an aldehyde. IR confirms it: 1725 (an unconjugated aldehyde C=O) with the 2820/2720 aldehyde C-H pair; no O-H. One equivalent of Br2 and the 1650 and 3025 bands: one C=C. That accounts for two of the three unsaturations; the third must be a ring.\nStep 3: Conjugation. No strong UV band above 210 nm, so the C=C and the C=O are not conjugated, and the 1725 (rather than about 1685) agrees.\nStep 4: NMR. The aldehyde proton at 9.68 is a doublet, so the CHO is on a carbon that bears one hydrogen (the 1H multiplet at 2.50), not on the alkene. Two vinyl protons at 5.68 are a cis-disubstituted ring alkene. Six more ring protons appear as multiplets at 2.15 (4H, the two allylic CH2 groups) and 1.65 (2H).\nStep 5: Assemble: a cyclohexene ring carrying a CHO on a saturated carbon that is not adjacent to the alkene: cyclohex-3-ene-1-carbaldehyde. Mass spectrum: 81 is M - CHO; 54 is C4H6+, the butadiene radical cation from a retro-Diels-Alder fragmentation of the cyclohexene ring, with acrolein (56) as the neutral partner.",
      "note": "Y is the Diels-Alder adduct of butadiene and acrolein, and its mass spectrum falls apart along the same lines the reaction assembled it: the retro-Diels-Alder fragmentation of cyclohexene rings, giving a diene radical cation and a neutral alkene, is one of the most reliable fragmentations in mass spectrometry. The UV result is the same rule from the other side: a Diels-Alder adduct's alkene is never conjugated with the dienophile's carbonyl.",
      "options": {
        "A": "Correct. C7H10O with an unconjugated aldehyde (Tollens, 1725, 2720/2820, a CHO doublet at 9.68), one cis-disubstituted ring alkene (2H at 5.68) and no UV band above 210 nm, fragmenting to m/z 54 by retro-Diels-Alder loss of acrolein.",
        "B": "Cyclohex-1-ene-1-carbaldehyde has the formula but is a conjugated enal: a strong UV band near 231 nm, a carbonyl near 1685, a CHO singlet near 9.4 (no proton on the neighbouring carbon), and a single vinyl proton as a triplet near 6.8.",
        "C": "(2E,4E)-Hepta-2,4-dienal has the formula and an aldehyde, but its extended conjugation gives an intense UV band above 270 nm and four vinyl protons between 6.0 and 7.1, and its ethyl group would show a 3H triplet near 1.05; it also takes up two equivalents of bromine.",
        "D": "Norcamphor is a saturated bicyclic ketone: no Tollens reaction, no aldehyde proton near 9.7 or C-H bands at 2720/2820, a strained-ketone carbonyl near 1750, no vinyl protons, and no bromine uptake."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  }
];
