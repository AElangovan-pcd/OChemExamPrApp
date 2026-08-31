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
        "smiles": "C=CC=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Stronger steric repulsion between the methyl groups in butane forces its C-C bond to elongate compared to the unhindered C2-C3 bond of 1,3-butadiene.",
        "smiles": "CCCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Hyperconjugation from the terminal methyl groups in butane weakens and lengthens its C-C bond relative to 1,3-butadiene.",
        "smiles": "CCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The C2-C3 bond in 1,3-butadiene has pure double-bond character ($sp^2$-$sp^2$) with no rotation allowed at any temperature.",
        "smiles": "C=CC=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the structural features and hybridization differences between conjugated systems and saturated hydrocarbons.",
      "process": "Step 1: Compare hybridization. The carbons in butane are $sp^3$ hybridized, while the carbons in 1,3-butadiene are $sp^2$ hybridized.\nStep 2: Compare orbital s-character. $sp^2$ orbitals have 33% s-character, whereas $sp^3$ orbitals have 25% s-character. More s-character means the electrons are held closer to the nucleus, resulting in a shorter bond.\nStep 3: Analyze delocalization. In 1,3-butadiene, the $\\pi$ molecular orbitals show that there is partial double-bond character across the C2-C3 bond (bond order > 1), which further shortens the bond compared to a pure $sp^3$-$sp^3$ single bond.",
      "result": "The bond shortening is due to both the higher s-character of the $sp^2$-$sp^2$ orbital overlap and the partial double-bond character arising from conjugation."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "This question tests basic Molecular Orbital (MO) theory concepts for a conjugated diene system.",
      "process": "Step 1: Determine the number of molecular orbitals. 1,3-Butadiene has four conjugated $p$ orbitals, generating four $\\pi$ molecular orbitals ($\\psi_1$, $\\psi_2$, $\\psi_3$, and $\\psi_4$) in order of increasing energy.\nStep 2: Identify the ground state electronic configuration. The four $\\pi$ electrons occupy the lowest two orbitals: two in $\\psi_1$ and two in $\\psi_2$. Thus, the HOMO is $\\psi_2$ and the LUMO is $\\psi_3$.\nStep 3: Count the vertical nodes. The number of nodes in orbital $\\psi_n$ is always $n - 1$. Therefore, $\\psi_2$ (HOMO) has $2 - 1 = 1$ node, and $\\psi_3$ (LUMO) has $3 - 1 = 2$ nodes.",
      "result": "The HOMO ($\\psi_2$) contains 1 node and the LUMO ($\\psi_3$) contains 2 nodes."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question probes the wave function signs and symmetries of the second molecular orbital of 1,3-butadiene.",
      "process": "Step 1: Recall the signs of the phases of the $p$ orbitals on C1, C2, C3, and C4 in the $\\psi_2$ molecular orbital. The phases are (+, +, -, -) or (up, up, down, down).\nStep 2: Determine bonding and antibonding relationships. The sign does not change between C1 and C2 (both are +), meaning C1-C2 is a bonding interaction. Similarly, the sign does not change between C3 and C4 (both are -), meaning C3-C4 is a bonding interaction.\nStep 3: Analyze C2-C3. The phase changes from C2 (+) to C3 (-), which means there is a node between C2 and C3. This constitutes an antibonding interaction.",
      "result": "The $\\psi_2$ orbital is bonding between C1-C2 and C3-C4, but antibonding between C2-C3, corresponding to one nodal plane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q4_isomer_stability",
    "topic": "Stability of Conjugated Dienes",
    "difficulty_level": "Easy",
    "question_text": "Which of the following isomeric dienes of formula $\\text{C}_5\\text{H}_8$ is thermodynamically the most stable?",
    "question_smiles": "CC=CC=C",
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
      "context": "This question requires ranking the thermodynamic stability of different classes of dienes (conjugated, isolated, and cumulated).",
      "process": "Step 1: Classify the dienes. (E)-1,3-pentadiene has alternating double and single bonds, making it conjugated. 1,4-pentadiene has double bonds separated by an $sp^3$ carbon, making it isolated. 1,2-pentadiene and 3-methyl-1,2-butadiene have adjacent double bonds, making them cumulated (allenes).\nStep 2: Compare stability. Conjugated dienes are stabilized by resonance and $sp^2$-$sp^2$ single bonds. Isolated dienes behave like typical individual alkenes. Cumulated dienes (allenes) are highly strained and the least stable.\nStep 3: Analyze substituents. (E)-1,3-pentadiene is trans-substituted, which reduces steric strain compared to cis isomers.",
      "result": "(E)-1,3-pentadiene is the most stable because it is a conjugated diene in the more stable trans configuration."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The s-cis conformation is more stable because it allows better overlap of the $p$ orbitals.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The transition state for rotation about the C2-C3 single bond has a planar geometry where conjugation is maximized.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The 's' in s-cis and s-trans refers to the stereochemical configuration (R/S) of the stereocenter at C2.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question reviews the conformational analysis of 1,3-butadiene and the structural reasons for the stability differences.",
      "process": "Step 1: Understand 's' nomenclature. The 's' stands for 'single' bond. s-cis and s-trans designate the relative orientation of the two double bonds about the connecting single bond.\nStep 2: Assess stability. In the s-cis conformation, the two double bonds lie on the same side of the C-C single bond, which brings the hydrogen atoms at C1 and C4 close together, creating steric strain.\nStep 3: Analyze the rotational barrier. Rotation around the C2-C3 single bond passes through a transition state where the double bonds are perpendicular (non-planar). In this transition state, the $\\pi$ orbitals are orthogonal, which breaks the conjugation and increases the activation energy barrier.",
      "result": "The s-trans conformation is more stable because of steric hindrance between terminal hydrogens in the s-cis conformation."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q6_scis_locked",
    "topic": "Stability of Conjugated Dienes: Conformers",
    "difficulty_level": "Medium",
    "question_text": "Which of the following cyclic dienes is locked in an s-cis conformation, making it extremely reactive in the Diels-Alder cycloaddition?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "1,3-cyclopentadiene",
        "smiles": "C1=CC=CC1",
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
        "text": "1,4-cyclohexadiene",
        "smiles": "C1=CCC=CC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclooctatetraene",
        "smiles": "C1=CC=CC=CC=C1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the concept of s-cis vs s-trans conformations in cyclic dienes and their impact on Diels-Alder reactivity.",
      "process": "Step 1: Examine structures. 1,3-cyclopentadiene and 1,3-cyclohexadiene are conjugated cyclic dienes. 1,4-cyclohexadiene is an isolated diene. Cyclooctatetraene is non-planar and not a simple diene.\nStep 2: Check s-cis conformation. In 1,3-cyclopentadiene, the five-membered ring forces the two double bonds to be permanently held on the same side of the single bond (s-cis). The ring strain prevents any rotation.\nStep 3: Compare reactivity. Because it is permanently locked in the ideal s-cis conformation, 1,3-cyclopentadiene reacts exceptionally fast in Diels-Alder reactions, even dimerizing with itself at room temperature.",
      "result": "1,3-cyclopentadiene is locked in the s-cis conformation, making it highly reactive."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "This question evaluates the structural criteria that prevent a diene from participating in a Diels-Alder reaction.",
      "process": "Step 1: Recall the conformation requirement. The Diels-Alder reaction requires a diene to adopt the s-cis conformation to allow the terminal carbons (C1 and C4) to bond with the dienophile concurrently.\nStep 2: Analyze 3-methylenecyclohexene. The endocyclic double bond and the exocyclic double bond are conjugated. However, because they are integrated into a rigid cyclohexene ring in a trans-like orientation, they are locked in the s-trans conformation and cannot rotate to s-cis without breaking the ring.\nStep 3: Contrast with others. 1,3-cyclohexadiene is locked s-cis. 1,2-dimethylenecyclohexane has two exocyclic double bonds that can achieve s-cis easily. (2E,4E)-2,4-hexadiene is acyclic and can rotate around the central single bond.",
      "result": "3-methylenecyclohexene is locked s-trans due to the constraints of the ring system, preventing Diels-Alder reactivity."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q8_heats_of_hydrogenation",
    "topic": "Stability of Conjugated Dienes",
    "difficulty_level": "Medium",
    "question_text": "Arrange the following hydrocarbons in order of decreasing heat of hydrogenation (most heat released, least stable to least heat released, most stable): 1,4-pentadiene, (E)-1,3-pentadiene, and 1,2-pentadiene.",
    "question_smiles": "CC=CC=C",
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
      "context": "This question tests the relative stability of diene classes using heats of hydrogenation data.",
      "process": "Step 1: Recall the correlation between heat of hydrogenation and stability. A lower heat of hydrogenation (less negative $\\Delta H$) indicates a more stable starting material.\nStep 2: Order stability. Conjugated dienes (e.g. (E)-1,3-pentadiene) are stabilized by orbital overlap and are the most stable (lowest heat released). Isolated dienes (e.g. 1,4-pentadiene) are less stable (medium heat released). Cumulated dienes (e.g. 1,2-pentadiene) are highly strained and are the least stable (highest heat released).\nStep 3: Arrange in decreasing order of heat released (least stable to most stable): 1,2-pentadiene > 1,4-pentadiene > (E)-1,3-pentadiene.",
      "result": "The correct order from highest heat released to lowest heat released is: 1,2-pentadiene > 1,4-pentadiene > (E)-1,3-pentadiene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "This question requires the calculation of conjugation (resonance) stabilization energy based on thermodynamic data.",
      "process": "Step 1: Calculate the expected heat of hydrogenation for two isolated terminal double bonds. Using 1-butene as a model, the value is $2 \\times (-127\\text{ kJ/mol}) = -254\\text{ kJ/mol}$.\nStep 2: Obtain the actual heat of hydrogenation for the conjugated 1,3-butadiene, which is $-236\\text{ kJ/mol}$.\nStep 3: Compute the difference: $-254\\text{ kJ/mol} - (-236\\text{ kJ/mol}) = -18\\text{ kJ/mol}$. This difference represents the resonance/conjugation energy that stabilizes the diene, making its hydrogenation less exothermic than expected.",
      "result": "The resonance stabilization energy of 1,3-butadiene is 18 kJ/mol."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question evaluates the structural basis for the stability of allylic carbocations.",
      "process": "Step 1: Recall the structure of an allylic carbocation ($[CH_2-CH-CH_2]^+$). The vacant $p$ orbital on the carbocation carbon is adjacent to the $\\pi$ bond of the alkene.\nStep 2: Apply resonance theory. The three $p$ orbitals form a conjugated system, allowing the two $\\pi$ electrons to be delocalized across all three carbon atoms, effectively splitting the +1 charge between the two terminal carbons.\nStep 3: Relate delocalization to stability. Charge delocalization decreases electrostatic potential energy, making allylic carbocations significantly more stable than typical primary or secondary alkyl carbocations.",
      "result": "The stability of allylic carbocations is due to charge delocalization via resonance overlap."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
        "smiles": "C=CC=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The transition state for rotation is destabilized by aromatic antiaromaticity.",
        "smiles": "C=CC=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethane has a lower rotational barrier because it undergoes fast radical dissociation.",
        "smiles": "CCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The terminal methyl groups in 1,3-butadiene undergo steric clashes in the transition state.",
        "smiles": "C=CC=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question explores the relationship between orbital conjugation and physical properties like the rotational barrier.",
      "process": "Step 1: Compare the rotation in ethane and 1,3-butadiene. Ethane's barrier is due only to torsional strain (eclipsing C-H bonds).\nStep 2: Analyze butadiene's planar conformers. Both s-cis and s-trans conformers are planar, permitting continuous overlap of the four $p$ orbitals, which gives the central C2-C3 bond partial double-bond character.\nStep 3: Analyze the transition state. To rotate, the diene must pass through a perpendicular conformation (90 degrees). In this geometry, the two $\\pi$ bonds are orthogonal, completely breaking conjugation. The barrier is therefore higher because it requires inputting the energy needed to temporarily destroy the conjugation.",
      "result": "The larger rotational barrier is a direct result of losing the partial double-bond character (conjugation) in the non-planar transition state."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "This question tests the electronic structure of the allylic carbocation intermediate using molecular orbital theory.",
      "process": "Step 1: Identify the allylic system. Protonation of 1,3-butadiene at C1 leaves an allylic carbocation system involving C2, C3, and C4. This is a 3-carbon, 3-orbital $\\pi$ system.\nStep 2: Count the $\\pi$ electrons. The starting diene has 4 $\\pi$ electrons. Two are used to form the new C1-H $\\sigma$ bond, leaving 2 $\\pi$ electrons in the allylic system.\nStep 3: Assign electrons to orbitals. The 3 MOs are $\\psi_1$ (bonding), $\\psi_2$ (non-bonding), and $\\psi_3$ (antibonding). The 2 electrons go into $\\psi_1$. Thus, the lowest unoccupied orbital (LUMO) is the empty non-bonding orbital $\\psi_2$.",
      "result": "The allylic carbocation has 2 $\\pi$ electrons, and its LUMO is the non-bonding orbital $\\psi_2$."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "This question links bond dissociation energies (BDE) directly to the thermodynamic stability of the radicals formed.",
      "process": "Step 1: Define BDE. A lower BDE means a weaker bond, which corresponds to the formation of a more stable radical.\nStep 2: Analyze the allyl radical. Homolysis of an allylic C-H bond in propene yields the allyl radical ($[CH_2-CH-CH_2]^\\bullet$). This radical is resonance-stabilized, with the unpaired electron shared between two terminal carbons.\nStep 3: Compare values. The stabilization energy of the allyl radical (~40 kJ/mol) lowers the energy of the radical product, thereby reducing the BDE of the allylic C-H bond below that of even a tertiary alkyl C-H bond.",
      "result": "The allylic C-H bond is exceptionally weak (364 kJ/mol) because the resulting radical is stabilized by resonance."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests the relationship between the extent of conjugation and the observed UV-Vis absorption properties.",
      "process": "Step 1: Understand orbital interactions. Each additional conjugated double bond adds two $p$ orbitals to the system, creating two new $\\pi$ molecular orbitals.\nStep 2: Examine energy spacing. As the number of molecular orbitals increases, the energy spacing between all adjacent levels decreases. Consequently, the energy gap between the HOMO and LUMO ($Delta E$) becomes smaller.\nStep 3: Relate to wavelength. Since $Delta E = hc/\\lambda$, a smaller energy gap requires lower energy light (longer wavelength) to promote an electron from the HOMO to the LUMO. This shift to a longer wavelength is called a bathochromic (or red) shift.",
      "result": "Longer conjugated systems have smaller HOMO-LUMO energy gaps and absorb at longer wavelengths (bathochromic shift)."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q15_hbr_addition_low_temp",
    "topic": "Electrophilic Addition: Kinetic vs Thermodynamic Control",
    "difficulty_level": "Medium",
    "question_text": "Reaction of 1,3-butadiene with 1 equivalent of HBr at $-80\\ ^\\circ\\text{C}$ yields a mixture of products. What is the major product, and under which type of control is it formed?",
    "question_smiles": "C=CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "3-bromo-1-butene; kinetic control",
        "smiles": "CC(Br)C=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "trans-1-bromo-2-butene; thermodynamic control",
        "smiles": "C/C=C/CBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-bromo-1-butene; thermodynamic control",
        "smiles": "CC(Br)C=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "trans-1-bromo-2-butene; kinetic control",
        "smiles": "C/C=C/CBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question explores the outcome of electrophilic addition to a conjugated diene under low-temperature (kinetic) conditions.",
      "process": "Step 1: Analyze reaction steps. Protonation of 1,3-butadiene at C1 yields a resonance-stabilized allylic carbocation intermediate ($[CH_3-CH-CH=CH_2]^+$).\nStep 2: Contrast pathways. The bromide ion can attack at C2 (1,2-addition) to give 3-bromo-1-butene, or at C4 (1,4-addition) to give 1-bromo-2-butene.\nStep 3: Apply kinetic control principles. At $-80\\ ^\\circ\\text{C}$, the reaction is irreversible because the system lacks thermal energy to overcome the activation barrier of the reverse reaction. The product that forms faster (has lower $E_a$) dominates. The 1,2-addition product forms faster due to the proximity of the bromide ion to C2 immediately after C1 protonation (proximity effect).",
      "result": "Under kinetic control ($-80\\ ^\\circ\\text{C}$), the major product is 3-bromo-1-butene (1,2-addition)."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q16_hbr_addition_high_temp",
    "topic": "Electrophilic Addition: Kinetic vs Thermodynamic Control",
    "difficulty_level": "Medium",
    "question_text": "Reaction of 1,3-butadiene with 1 equivalent of HBr at $40\\ ^\\circ\\text{C}$ yields a mixture of products. What is the major product, and under which type of control is it formed?",
    "question_smiles": "C=CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "trans-1-bromo-2-butene; thermodynamic control",
        "smiles": "C/C=C/CBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-bromo-1-butene; kinetic control",
        "smiles": "CC(Br)C=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "trans-1-bromo-2-butene; kinetic control",
        "smiles": "C/C=C/CBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-bromo-1-butene; thermodynamic control",
        "smiles": "CC(Br)C=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question explores the outcome of electrophilic addition to a conjugated diene under high-temperature (thermodynamic) conditions.",
      "process": "Step 1: Identify reaction intermediates. Protonation at C1 forms the allylic carbocation intermediate.\nStep 2: Contrast stability of products. 3-bromo-1-butene is a monosubstituted alkene. trans-1-bromo-2-butene is a disubstituted, trans-alkene, which is thermodynamically more stable.\nStep 3: Apply thermodynamic control principles. At $40\\ ^\\circ\\text{C}$, the addition is reversible. The bromide ion can leave, regenerating the carbocation. Under equilibrium, the more stable product (lower free energy, $\\Delta G^\\circ$) will predominate, regardless of which was formed faster.",
      "result": "Under thermodynamic control ($40\\ ^\\circ\\text{C}$), the major product is the more stable trans-1-bromo-2-butene (1,4-addition)."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question evaluates the regiochemistry of electrophilic addition (protonation) to an unsymmetrical conjugated diene.",
      "process": "Step 1: Write down the structures resulting from protonation at each position of 2-methyl-1,3-butadiene ($CH_2=C(CH_3)-CH=CH_2$).\nStep 2: Analyze protonation at C1. This yields $[CH_3-C^+(CH_3)-CH=CH_2 \\leftrightarrow CH_3-C(CH_3)=CH-C^+H_2]$. This allylic carbocation has a tertiary carbocation contributor and a primary carbocation contributor.\nStep 3: Analyze protonation at C4. This yields $[CH_2=C(CH_3)-C^+H-CH_3 \\leftrightarrow C^+H_2-C(CH_3)=CH-CH_3]$. This allylic carbocation has a secondary contributor and a primary contributor.\nStep 4: Compare stability. The C1-protonated carbocation is significantly more stable because of the tertiary contributor, making it the preferred intermediate.",
      "result": "Protonation occurs preferentially at C1 to generate the more stable tertiary-containing allylic carbocation."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q18_13pentadiene_hbr_addition",
    "topic": "Electrophilic Addition to Conjugated Dienes: Allylic Carbocations",
    "difficulty_level": "Hard",
    "question_text": "Identify the major organic product formed when (E)-1,3-pentadiene is reacted with 1 equivalent of HBr at $-80\\ ^\\circ\\text{C}$.",
    "question_smiles": "C=CC=CC",
    "options": [
      {
        "option_id": "A",
        "text": "4-bromopent-2-ene (via protonation at C1 to form a highly stable secondary-secondary allylic carbocation)",
        "smiles": "CC(Br)C=CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-bromopent-1-ene (via protonation at C4 to form a secondary-primary allylic carbocation)",
        "smiles": "CCC(Br)C=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5-bromopent-2-ene (via anti-Markovnikov addition)",
        "smiles": "CC=CCCBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-bromopent-2-ene",
        "smiles": "CCC=CCBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the regioselectivity of electrophilic addition to an unsymmetrical conjugated diene.",
      "process": "Step 1: Analyze protonation options. (E)-1,3-pentadiene is $CH_2=CH-CH=CH-CH_3$. Protonation can occur at C1 or C4.\nStep 2: Compare intermediate carbocations. Protonation at C1 yields a secondary-secondary allylic carbocation: $[CH_3-C^+H-CH=CH-CH_3 \\leftrightarrow CH_3-CH=CH-C^+H-CH_3]$. Protonation at C4 yields a secondary-primary allylic carbocation: $[CH_2=CH-C^+H-CH_2-CH_3 \\leftrightarrow C^+H_2-CH=CH-CH_2-CH_3]$. The secondary-secondary allylic carbocation is more stable and is formed preferentially.\nStep 3: Attack of bromide. Bromide attacks either C2 or C4 of the symmetric intermediate. Under both 1,2-addition (attack at C2) and 1,4-addition (attack at C4), the product is 4-bromopent-2-ene (historically numbered 4-bromo-2-pentene).",
      "result": "The major product is 4-bromopent-2-ene, derived from the highly stable secondary-secondary allylic carbocation intermediate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
        "text": "The reaction proceeds through a cyclic halonium ion (bromonium ion) intermediate that is in resonance with an allylic carbocation, allowing nucleophilic attack of bromide at either the C2 or C4 positions.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The reaction is a concerted [2+2] cycloaddition followed by a thermal ring-opening rearrangement.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Free radical intermediates are formed that undergo fast regioselective coupling with bromine atoms.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The thermodynamic product is cis-1,4-dibromo-2-butene because cis double bonds have less steric strain than trans double bonds.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question focuses on the mechanism of halogenation of conjugated dienes.",
      "process": "Step 1: Electrophilic attack. $\\text{Br}_2$ reacts with the diene, and $\\text{Br}^+$ is added to one of the double bonds to form a cyclic bromonium ion.\nStep 2: Resonance stabilization. Because the bromonium ring is adjacent to the remaining double bond, it can open to form a resonance-stabilized allylic carbocation where the positive charge is shared between C2 and C4.\nStep 3: Nucleophilic attack. The bromide ion ($Br^-$) attacks C2 to yield the 1,2-addition product (3,4-dibromo-1-butene) or C4 to yield the 1,4-addition product (trans-1,4-dibromo-2-butene).",
      "result": "The mechanism involves a cyclic bromonium ion in resonance with an allylic carbocation, yielding both 1,2- and 1,4-addition products."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "This question tests the prediction of the kinetic product for the hydrohalogenation of isoprene.",
      "process": "Step 1: Protonate isoprene. Protonation occurs at C1 (the terminal carbon of the methyl-substituted double bond) to form the tertiary allylic carbocation intermediate: $[CH_3-C^+(CH_3)-CH=CH_2]$.\nStep 2: Assess kinetic control. At $-80\\ ^\\circ\\text{C}$, the reaction is kinetically controlled. The nucleophile ($Br^-$) attacks the carbocation carbon that holds the higher positive charge density and is closest to the site of protonation (C2).\nStep 3: Write down the product structure. Attack at C2 gives 3-bromo-3-methyl-1-butene, which is the 1,2-addition product.",
      "result": "The major product under kinetic conditions is 3-bromo-3-methyl-1-butene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests the symmetry and structural features of cyclic diene additions.",
      "process": "Step 1: Protonate 1,3-cyclohexadiene. Protonation at C1 yields a symmetric allylic carbocation in a six-membered ring: $[C1(H_2)-C2^+(H)-C3(H)=C4(H)-C5(H_2)-C6(H_2) \\leftrightarrow C1(H_2)-C2(H)=C3(H)-C4^+(H)-C5(H_2)-C6(H_2)]$.\nStep 2: Trace addition pathways. 1,2-addition occurs when chloride attacks C2, giving 3-chlorocyclohexene.\nStep 3: 1,4-addition occurs when chloride attacks C4, giving 3-chlorocyclohexene (numbering from the other side of the double bond yields the exact same IUPAC name and structure). Thus, the 1,2- and 1,4-addition products are identical.",
      "result": "Because of the symmetry of the cyclic intermediate, both 1,2- and 1,4-addition yield 3-chlorocyclohexene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests the regioselectivity of electrophilic attack on an unsymmetrical conjugated diene.",
      "process": "Step 1: Write down the structure of 4-methyl-1,3-pentadiene: $(CH_3)_2C=CH-CH=CH_2$.\nStep 2: Evaluate electrophilic attack. The electrophile $Cl^+$ will add to one of the terminal positions (C1 or C4) to yield a conjugated allylic carbocation.\nStep 3: Compare carbocations. Adding $Cl^+$ to C1 yields the allylic carbocation $[(CH_3)_2C^+-CH=CH-CH_2Cl \\leftrightarrow (CH_3)_2C=CH-C^+H-CH_2Cl]$. This has a tertiary carbocation contributor.\nStep 4: Adding $Cl^+$ to C4 yields $[(CH_3)_2C(Cl)-C^+H-CH=CH_2 \\leftrightarrow (CH_3)_2C(Cl)-CH=CH-C^+H_2]$. This is a secondary/primary allylic carbocation, which is less stable. Thus, attack occurs at C1.",
      "result": "Initial electrophilic attack by $Cl^+$ occurs at C1 to generate the more stable tertiary-containing allylic carbocation intermediate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question explores $S_N1$ solvolysis pathways of allylic halides.",
      "process": "Step 1: Identify the substrate structures. 3-chlorobut-1-ene is $CH_3-CH(Cl)-CH=CH_2$. 1-chlorobut-2-ene is $CH_3-CH=CH-CH_2Cl$.\nStep 2: Trace ionization. Under polar solvolytic conditions ($S_N1$), chloride leaves both substrates. Ionization of 3-chlorobut-1-ene yields the carbocation $[CH_3-C^+H-CH=CH_2]$. Ionization of 1-chlorobut-2-ene yields $[CH_3-CH=CH-C^+H_2]$.\nStep 3: Analyze resonance. These two representations are resonance structures of the same allylic carbocation: $[CH_3-CH\\dots CH\\dots CH_2]^+$. Nucleophilic attack on this common intermediate by ethanol or water yields the same mixture of products.",
      "result": "The common resonance-stabilized carbocation intermediate accounts for the identical product mixture."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
        "text": "The halide ion is closer to C2 immediately after C1 protonation (the proximity effect), leading to a lower activation energy for the second step.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The 1,2-addition product has a more substituted double bond and is therefore more stable.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The 1,2-addition transition state is stabilized by hyperconjugation from the nucleophile.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The 1,4-addition product requires a higher activation energy for the initial protonation step.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question probes the physical basis of the kinetic preference for 1,2-addition.",
      "process": "Step 1: Detail the first step of hydrohalogenation. Protonation of 1,3-butadiene at C1 by H-Br leaves a bromide ion ($Br^-$) directly next to the newly formed carbocation.\nStep 2: Evaluate the proximity. The bromide ion is physically closer to the C2 carbocation center than to the C4 carbocation center.\nStep 3: Connect to kinetics. Because the nucleophile has a shorter distance to travel, the collision occurs more rapidly, resulting in a lower activation energy ($E_a$) for the C2 attack compared to the C4 attack.",
      "result": "The proximity effect explains why the 1,2-addition product is formed faster and is the kinetic product."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The product ratio depends only on the relative energies of the transition states ($TS_{1,2}$ vs $TS_{1,4}$).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The kinetic product must always be less stable than the thermodynamic product.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Equilibrium is reached because the kinetic transition state is higher in energy than the thermodynamic transition state.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the physical chemistry principles of kinetic versus thermodynamic control.",
      "process": "Step 1: Define thermodynamic control. Under thermodynamic control, there is sufficient thermal energy for the reaction to be reversible. All pathways can go forward and backward.\nStep 2: Relate to equilibrium. Reversibility allows the system to reach chemical equilibrium. At equilibrium, the ratio of products is determined by the equilibrium constant ($K_{eq}$), which is governed by the difference in free energy ($\\Delta G^\\circ$) between the products.\nStep 3: Contrast with kinetics. The transition state energies only dictate the speed of the forward/reverse steps, not the position of the equilibrium.",
      "result": "Under thermodynamic control, the reaction is reversible and the product ratio depends strictly on product stability ($\\Delta G^\\circ$)."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
        "smiles": "C/C=C/CBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It remains completely unchanged because the activation energy for C-Br bond cleavage is too high.",
        "smiles": "CC(Br)C=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It undergoes E2 elimination to yield 1,3-butadiene exclusively.",
        "smiles": "C=CC=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It polymerizes rapidly via a cationic mechanism to form synthetic rubber.",
        "smiles": "C=CC=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the reversibility of allylic addition reactions and proof of thermodynamic control.",
      "process": "Step 1: Examine the starting material: 3-bromo-1-butene (the kinetic product).\nStep 2: Analyze the role of heating and catalyst. Heating to $40\\ ^\\circ\\text{C}$ in the presence of HBr allows the bromine atom to act as a leaving group. Dissociation of $Br^-$ is catalyzed/promoted by acid, reforming the resonance-stabilized allylic carbocation intermediate.\nStep 3: Re-attack. When the bromide ion re-attacks the carbocation, it can attack C2 (reforming 3-bromo-1-butene) or C4. Attack at C4 yields the more stable trans-1-bromo-2-butene. Over time, the mixture equilibrates to favor the more stable thermodynamic product.",
      "result": "The kinetic product isomerizes to the thermodynamic product (trans-1-bromo-2-butene) via reversible carbocation formation."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question focuses on the thermodynamic mechanism behind the temperature dependence of kinetic vs thermodynamic control.",
      "process": "Step 1: Understand low-temperature conditions. At $-80\\ ^\\circ\\text{C}$, the forward reaction is fast but there is not enough energy to undergo the reverse reaction (loss of $Br^-$ to reform carbocation). The reaction is irreversible.\nStep 2: Understand high-temperature conditions. At $40\\ ^\\circ\\text{C}$, there is enough thermal energy to overcome the activation barrier of the reverse reaction for both products. The reaction becomes reversible.\nStep 3: Analyze equilibrium. In a reversible system, the products interconvert. The system will accumulate the thermodynamic product (trans-1-bromo-2-butene) because it lies in a deeper energy well.",
      "result": "Higher temperatures make the reaction steps reversible, causing the product mixture to equilibrate toward the more stable 1,4-addition product."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
        "text": "trans-1-bromo-2-butene contains a disubstituted, trans-configured double bond, which is lower in energy than the monosubstituted double bond in 3-bromo-1-butene.",
        "smiles": "C/C=C/CBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The carbon-bromine bond in trans-1-bromo-2-butene is stronger due to $sp^2$ hybridization of the carbon bonded to bromine.",
        "smiles": "C/C=C/CBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-bromo-1-butene has severe steric hindrance between the methyl group and the bromine atom.",
        "smiles": "CC(Br)C=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The bromine atom in trans-1-bromo-2-butene is tertiary, which increases its stability.",
        "smiles": "C/C=C/CBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question probes the structural reasons for the thermodynamic stability differences between 1,2- and 1,4-addition products.",
      "process": "Step 1: Analyze the structure of 3-bromo-1-butene: $CH_3-CH(Br)-CH=CH_2$. The double bond is monosubstituted (terminal).\nStep 2: Analyze the structure of trans-1-bromo-2-butene: $Br-CH_2-CH=CH-CH_3$. The double bond is disubstituted (internal) and has a trans configuration.\nStep 3: Compare alkene stability. Internal, more highly substituted alkenes are more stable than terminal alkenes due to hyperconjugation and $sp^2$-$sp^3$ bond strengths. The trans configuration also minimizes steric strain compared to the cis configuration.",
      "result": "trans-1-bromo-2-butene is more stable because it contains a disubstituted trans double bond."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question requires interpreting a reaction coordinate energy diagram for kinetic vs thermodynamic control.",
      "process": "Step 1: Identify the intermediate. Both pathways share a single intermediate: the allylic carbocation.\nStep 2: Compare the second step transition states. $TS_{1,2}$ (attack at C2) is lower in energy than $TS_{1,4}$ (attack at C4) due to the proximity effect.\nStep 3: Compare product energies. The 1,4-addition product (trans-1-bromo-2-butene) is more stable (lower in energy) than the 1,2-addition product (3-bromo-1-butene) because it has a more substituted double bond.",
      "result": "The diagram features one intermediate where the kinetic path has a lower transition state ($TS_{1,2}$) and the thermodynamic path yields the lower energy product (1,4-product)."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question reviews the kinetic parameters of electrophilic addition to conjugated dienes.",
      "process": "Step 1: Analyze the mechanism. Step 1 is protonation: $diene + HBr \\rightarrow carbocation + Br^-$. This step breaks a $\\pi$ bond and an H-Br bond to form a high-energy carbocation, which is highly endothermic (high $E_a$).\nStep 2: Analyze Step 2: $carbocation + Br^- \\rightarrow product$. This step combines a cation and an anion to form a $\\sigma$ bond, which is highly exothermic (low $E_a$).\nStep 3: Identify the rate-determining step. The step with the highest activation barrier is Step 1.",
      "result": "The first step (protonation to form the carbocation intermediate) is the rate-determining step."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests the prediction of the thermodynamic product for the hydrohalogenation of isoprene.",
      "process": "Step 1: Protonate isoprene at C1 to yield $[CH_3-C^+(CH_3)-CH=CH_2 \\leftrightarrow CH_3-C(CH_3)=CH-C^+H_2]$.\nStep 2: Compare product stabilities. Attack at C2 (1,2-addition) yields 3-bromo-3-methyl-1-butene (a monosubstituted alkene). Attack at C4 (1,4-addition) yields 1-bromo-3-methyl-2-butene (a trisubstituted alkene).\nStep 3: Apply thermodynamic control. At $40\\ ^\\circ\\text{C}$, the system is under thermodynamic control, which favors the more stable product. The trisubstituted alkene is much more stable than the monosubstituted alkene.",
      "result": "The major product under thermodynamic conditions is 1-bromo-3-methyl-2-butene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question requires ranking the rate of $S_N1$ solvolysis based on the stability of the intermediate allylic carbocations.",
      "process": "Step 1: Draw the intermediate carbocation for each substrate.\n- 3-chloro-3-methyl-1-butene yields $[(CH_3)_2C^+-CH=CH_2 \\leftrightarrow (CH_3)_2C=CH-C^+H_2]$, a tertiary/primary allylic carbocation.\n- 3-chloro-1-butene and 1-chlorobut-2-ene both yield $[CH_3-C^+H-CH=CH_2 \\leftrightarrow CH_3-CH=CH-C^+H_2]$, a secondary/primary allylic carbocation.\n- 3-chloropropene yields $[CH_2=CH-C^+H_2]$, a primary/primary allylic carbocation.\nStep 2: Rank carbocation stability: tertiary/primary > secondary/primary > primary/primary.\nStep 3: Connect to rate. The substrate that forms the most stable carbocation has the lowest transition state energy for ionization and thus solvolyzes fastest.",
      "result": "3-chloro-3-methyl-1-butene solvolyzes fastest because it forms a highly stable tertiary-substituted allylic carbocation."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q33_diels_alder_mechanism_concerted",
    "topic": "Diels-Alder Cycloaddition: Mechanism",
    "difficulty_level": "Easy",
    "question_text": "The Diels-Alder reaction is classified as a:",
    "question_smiles": "C=CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "Concerted, [4+2] pericyclic cycloaddition reaction.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Stepwise, radical-mediated addition reaction.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Nucleophilic substitution reaction at a vinyl carbon.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Concerted, [2+2] photochemical cycloaddition reaction.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question reviews the basic classification and mechanism of the Diels-Alder reaction.",
      "process": "Step 1: Identify components. The reaction occurs between a conjugated diene ($4\\ \\pi$ electrons) and a dienophile ($2\\ \\pi$ electrons).\nStep 2: Define concerted and pericyclic. The bonds are formed and broken simultaneously in a single step via a cyclic transition state containing 6 $\\pi$ electrons.\nStep 3: Classify. This makes it a concerted, [4+2] pericyclic cycloaddition.",
      "result": "The Diels-Alder reaction is a concerted, [4+2] pericyclic cycloaddition."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q34_diels_alder_stereospecific_maleate",
    "topic": "Diels-Alder Cycloaddition: Stereospecificity",
    "difficulty_level": "Medium",
    "question_text": "Reaction of 1,3-butadiene with dimethyl maleate (a cis-alkene ester) yields a cyclohexene product. What is the stereochemical configuration of the ester groups in the product?",
    "question_smiles": "C=CC=C",
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
      "context": "This question tests the stereospecificity of the Diels-Alder reaction with respect to the dienophile.",
      "process": "Step 1: Check mechanism. The Diels-Alder reaction is a concerted mechanism. No intermediates (carbocations or radicals) are formed that would allow rotation around carbon-carbon bonds.\nStep 2: Determine stereochemistry. Because it is concerted, the relative stereochemistry of the starting material is preserved in the product. The cis configuration of the two ester groups in dimethyl maleate is directly maintained in the cyclohexene product.\nStep 3: Identify the product. The product is dimethyl cis-cyclohex-4-ene-1,2-dicarboxylate.",
      "result": "The cis-dienophile yields a cis-substituted cyclohexene product due to the concerted nature of the cycloaddition."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q35_diels_alder_stereospecific_fumarate",
    "topic": "Diels-Alder Cycloaddition: Stereospecificity",
    "difficulty_level": "Medium",
    "question_text": "Reaction of 1,3-butadiene with dimethyl fumarate (a trans-alkene ester) yields a cyclohexene product. What is the stereochemical configuration of the ester groups in the product?",
    "question_smiles": "C=CC=C",
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
      "context": "This question tests the stereospecificity of the Diels-Alder reaction with respect to trans-dienophiles.",
      "process": "Step 1: Check mechanism. The concerted pericyclic mechanism means that bond formation occurs simultaneously at both ends.\nStep 2: Analyze stereocenter development. The trans configuration of the two ester groups in dimethyl fumarate is locked in during the transition state.\nStep 3: Determine the product. The product has one ester group pointing 'up' (wedged) and the other pointing 'down' (dashed), resulting in a trans-substituted cyclohexene product (racemic trans-dimethyl cyclohex-4-ene-1,2-dicarboxylate).",
      "result": "The trans-dienophile yields a trans-substituted cyclohexene product due to stereospecific retention of configuration."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
        "smiles": "O=C1OC(=O)[C@@H]2[C@H]1[C@@H]3C=C[C@H]2C3",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The endo product is thermodynamically more stable than the exo product.",
        "smiles": "O=C1OC(=O)[C@H]2[C@@H]1[C@@H]3C=C[C@H]2C3",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Steric hindrance between the anhydride ring and the cyclopentadiene methylene bridge is minimized in the endo transition state.",
        "smiles": "O=C1OC(=O)[C@@H]2[C@H]1[C@@H]3C=C[C@H]2C3",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The exo product is formed through a higher energy carbocation intermediate.",
        "smiles": "O=C1OC(=O)[C@H]2[C@@H]1[C@@H]3C=C[C@H]2C3",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the endo rule (Alder endo rule) and its molecular orbital explanation.",
      "process": "Step 1: Define endo and exo. In bicyclic systems, endo refers to the substituent pointing toward the double bond bridge, while exo refers to the substituent pointing away from the double bond bridge (toward the shorter methylene bridge).\nStep 2: Contrast stability vs rate. The exo product is actually thermodynamically more stable because the bulky anhydride group is oriented away from the methylene bridge, minimizing steric strain. However, the endo product is formed much faster (kinetic product).\nStep 3: Analyze orbital interactions. In the endo transition state, the carbonyl $\\pi$ systems of the maleic anhydride lie directly underneath the diene $\\pi$ system. This spatial alignment allows favorable secondary orbital overlap (between the LUMO of the carbonyls and the HOMO of the diene), which lowers the activation energy ($E_a$).",
      "result": "The endo product is favored kinetically due to stabilizing secondary orbital interactions in the transition state."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
        "text": "(1E,3Z)-2,4-hexadiene, because the methyl group at the cis-double bond sterically hinders the diene from adopting the necessary s-cis conformation.",
        "smiles": "C/C=C/C=C\\C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,3-butadiene, because it lacks stabilizing alkyl groups to activate it.",
        "smiles": "C=CC=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,3-cyclopentadiene, because it is locked in the s-cis conformation.",
        "smiles": "C1=CC=CC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(1E,3E)-2,4-hexadiene, because the methyl groups are too electron-withdrawing.",
        "smiles": "C/C=C/C=C/C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question evaluates the steric factors that dictate diene reactivity by affecting the s-cis/s-trans conformational equilibrium.",
      "process": "Step 1: Check s-cis conformation of each diene. 1,3-cyclopentadiene is locked s-cis (most reactive). 1,3-butadiene is acyclic and can easily rotate to s-cis.\nStep 2: Contrast (1E,3E)-2,4-hexadiene and (1E,3Z)-2,4-hexadiene. For (1E,3E)-2,4-hexadiene, the methyl groups point outward in the s-cis conformation, resulting in minimal steric clashes.\nStep 3: Analyze (1E,3Z)-2,4-hexadiene ($C/C=C/C=C\\C$). When it rotates around the central single bond to adopt the s-cis conformation, the cis-methyl group points inward, colliding directly with the hydrogen atom at C1. This severe steric hindrance disfavors the s-cis conformation, making it extremely unreactive.",
      "result": "(1E,3Z)-2,4-hexadiene is the least reactive due to steric clashes that prevent it from adopting the s-cis conformation."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "This question tests the electronic factors that influence the reactivity of dienophiles in Diels-Alder reactions.",
      "process": "Step 1: Analyze demand type. Standard Diels-Alder cycloadditions are governed by the interaction of the diene HOMO and the dienophile LUMO.\nStep 2: Relate substituents to orbital energy. Electron-withdrawing groups (EWGs) on the dienophile lower the energy of its LUMO, bringing it closer in energy to the diene HOMO. A smaller energy gap results in a faster reaction.\nStep 3: Analyze the options. Tetracyanoethylene has four highly electron-withdrawing cyano ($-C\\equiv N$) groups, making it an exceptionally reactive dienophile. Alkyl groups (propene) and alkoxy groups (methyl vinyl ether) are electron-donating, which raises the LUMO energy and slows the reaction.",
      "result": "Tetracyanoethylene is the most reactive dienophile because its four electron-withdrawing cyano groups lower the LUMO energy."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
        "text": "Methyl 2-methoxycyclohex-3-ene-1-carboxylate ('ortho' product)",
        "smiles": "COC(=O)C1CC=CCC1OC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methyl 3-methoxycyclohex-4-ene-1-carboxylate ('meta' product)",
        "smiles": "COC(=O)C1CCC(OC)C=C1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Methyl 4-methoxycyclohex-2-ene-1-carboxylate ('para' product)",
        "smiles": "COC(=O)C1CC(OC)CC=C1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "An equal 1:1 mixture of the 'ortho' and 'meta' products.",
        "smiles": "COC(=O)C1CC=CCC1OC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the regioselectivity ('ortho/para' rules) of Diels-Alder cycloadditions between unsymmetrical dienes and unsymmetrical dienophiles.",
      "process": "Step 1: Identify the substituents. The diene has an electron-donating group (EDG) at C1 (methoxy, $-OCH_3$). The dienophile has an electron-withdrawing group (EWG) on the double bond (ester, $-COOCH_3$).\nStep 2: Draw resonance structures to find partial charges. For 1-methoxybutadiene, resonance donation from oxygen places a partial negative charge on C4: $[CH_2(OMe)-CH=CH-CH_2 \\leftrightarrow C^-H_2(OMe)-CH=CH-C^-H_2...]$. Specifically, C4 has the highest electron density (partial negative charge).\nStep 3: For methyl acrylate, resonance places a partial positive charge on the terminal $\\beta$-carbon: $[CH_2=CH-COOMe \\leftrightarrow C^+H_2-CH=C(O^-)OMe]$.\nStep 4: Align charges. The partial negative C4 of the diene bonds with the partial positive $\\beta$-carbon of the dienophile. This alignment yields the 1,2-substituted (known as the 'ortho') product.",
      "result": "The major product is the 'ortho' isomer (methyl 2-methoxycyclohex-3-ene-1-carboxylate) due to charge polarization alignment in the transition state."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
        "text": "Methyl 4-methylcyclohex-3-ene-1-carboxylate ('para'-like product)",
        "smiles": "CC1=CCC(CC1)C(=O)OC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methyl 3-methylcyclohex-3-ene-1-carboxylate ('meta'-like product)",
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
        "text": "An equal 1:1 mixture of the 1,3- and 1,4-isomers.",
        "smiles": "CC1=CCC(CC1)C(=O)OC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the regioselectivity of a 2-substituted diene reacting with an unsymmetrical dienophile.",
      "process": "Step 1: Identify substituents. Isoprene has an electron-donating methyl group at C2. Methyl acrylate has an electron-withdrawing ester group.\nStep 2: Determine polarization using resonance. In 2-methyl-1,3-butadiene, the electron-donating methyl group at C2 directs the partial negative charge to C4 (terminal carbon farthest from the methyl group).\nStep 3: In methyl acrylate, the terminal $\\beta$-carbon carries a partial positive charge.\nStep 4: Align charges. The C4 of the diene (partial negative) bonds to the $\\beta$-carbon of the dienophile (partial positive). This yields the 1,4-disubstituted cyclohexene derivative, commonly referred to as the 'para'-like product.",
      "result": "The major product is the 'para'-like isomer (methyl 4-methylcyclohex-3-ene-1-carboxylate)."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q41_retro_diels_alder",
    "topic": "Diels-Alder Cycloaddition: Retro-Diels-Alder",
    "difficulty_level": "Medium",
    "question_text": "When dicyclopentadiene is heated to high temperatures, it undergoes a retro-Diels-Alder reaction. What is the product of this thermal cracking process?",
    "question_smiles": "C1=CC2CC1C=C2",
    "options": [
      {
        "option_id": "A",
        "text": "Two molecules of 1,3-cyclopentadiene",
        "smiles": "C1=CC=CC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "One molecule of cyclooctatetraene",
        "smiles": "C1=CC=CC=CC=C1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "One molecule of cyclopentene and one molecule of acetylene",
        "smiles": "C1=CCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "One molecule of norbornene",
        "smiles": "C1C2CC1C=C2",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the reversibility of the Diels-Alder reaction (retro-Diels-Alder) under thermal conditions.",
      "process": "Step 1: Understand dicyclopentadiene structure. Dicyclopentadiene is a dimer formed by the Diels-Alder reaction of two cyclopentadiene molecules (where one acts as the diene and the other acts as the dienophile).\nStep 2: Apply thermal cracking mechanism. High temperatures shift the equilibrium toward the starting materials due to entropy (2 molecules of reactant are favored over 1 molecule of product: $\\Delta G = \\Delta H - T\\Delta S$).\nStep 3: Trace retro-Diels-Alder arrows. The cyclohexene ring in the dimer breaks apart, reversing the [4+2] cycloaddition to yield two separate cyclopentadiene molecules.",
      "result": "Thermal cracking of dicyclopentadiene undergoes a retro-Diels-Alder reaction to yield two molecules of 1,3-cyclopentadiene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q42_intramolecular_diels_alder",
    "topic": "Diels-Alder Cycloaddition: Intramolecular",
    "difficulty_level": "Hard",
    "question_text": "What is the structure of the bicyclic product obtained when (E)-deca-1,3,9-triene is heated to undergo an intramolecular Diels-Alder reaction?",
    "question_smiles": "C=CC=CCCC=C",
    "options": [
      {
        "option_id": "A",
        "text": "A fused hydrindane (bicyclo[4.3.0]nonene) derivative.",
        "smiles": "C1CC2CC=CCC2C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A fused decalin (bicyclo[4.4.0]decene) derivative.",
        "smiles": "C1CCC2CC=CCC2C1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A bridged norbornene derivative.",
        "smiles": "C1C2CC1C=C2",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A spirocyclic hydrocarbon.",
        "smiles": "CC1(CCCC1)C=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the capability to trace ring systems in intramolecular Diels-Alder reactions.",
      "process": "Step 1: Identify diene and dienophile in the triene structure: $CH_2=CH-CH=CH-CH_2-CH_2-CH_2-CH_2-CH=CH_2$.\n- The diene is at C1-C4 (4 carbons).\n- The dienophile is the terminal alkene at C9-C10 (2 carbons).\n- The linker between C4 of the diene and C9 of the dienophile contains 4 carbons ($sp^3$ methylene chain).\nStep 2: Fold the molecule into the transition state. The diene adopts s-cis. The C9-C10 double bond coordinates with the diene.\nStep 3: Build the rings. The Diels-Alder cycloaddition always forms a new 6-membered ring (consisting of the 4 diene carbons and 2 dienophile carbons). The 4-carbon linker connects C4 and C9. This creates a second, fused ring. Counting the atoms in this second ring: C4-linker carbons (4 atoms) + C9 = a 5-membered ring. Thus, the system is a fused 6-5 bicyclic system (hydrindane system).",
      "result": "The intramolecular Diels-Alder of (E)-deca-1,3,9-triene yields a fused hydrindane (6-5 ring system) derivative."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests the foundational molecular orbital principles of pericyclic reactions (FMO theory).",
      "process": "Step 1: Identify donor and acceptor. The diene is electron-rich and acts as the electron donor. The dienophile is electron-poor and acts as the electron acceptor.\nStep 2: Assign orbitals. The electron donor uses its highest occupied molecular orbital (HOMO) to donate electrons. The electron acceptor uses its lowest unoccupied molecular orbital (LUMO) to receive electrons.\nStep 3: Confirm match. FMO theory dictates that the HOMO of the diene and the LUMO of the dienophile must have the correct symmetry (matching phases at terminal carbons) to interact constructively.",
      "result": "The principal interaction in a standard Diels-Alder reaction is between the diene HOMO and the dienophile LUMO."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "This question tests the stereochemical rules of diene substituents in Diels-Alder reactions.",
      "process": "Step 1: Analyze the substituents of the diene. (2E,4E)-2,4-hexadiene has two methyl groups pointing 'outwards' in the s-cis conformation.\nStep 2: Apply the stereochemical rule for diene substituents. Substituents that are both 'outer' (or both 'inner') will end up cis to each other in the cyclohexene product. Since both methyl groups are outer groups, they will be pushed to the same face of the developing ring (both wedged or both dashed).\nStep 3: Combine with dienophile stereochemistry. Dimethyl maleate is a cis-dienophile, so the two ester groups are also cis to each other.",
      "result": "The two methyl groups end up cis to each other (cis-1,4-dimethyl substitution) in the cyclohexene ring."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests diene polymerization pathways and the structural properties of polybutadiene.",
      "process": "Step 1: Analyze addition pathways. Radical addition to 1,3-butadiene can occur at C2 (1,2-addition) or C4 (1,4-addition).\nStep 2: Contrast 1,2- and 1,4-addition. 1,4-addition generates an internal double bond which is more stable than the terminal double bond generated in 1,2-addition.\nStep 3: Analyze stereochemistry. The internal double bond can be cis or trans. The trans configuration has less steric hindrance between the polymer chain segments and is thermodynamically more stable, making it the major isomer under standard polymerization conditions.",
      "result": "The polymer contains predominantly trans-1,4-polybutadiene units because of its thermodynamic stability."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question evaluates the correlation between polymer stereochemistry and physical properties using natural rubber and gutta-percha as examples.",
      "process": "Step 1: Identify the monomer. Both polymers are formed from isoprene (2-methyl-1,3-butadiene).\nStep 2: Contrast configurations. In natural rubber, the double bonds are exclusively in the cis configuration (cis-1,4-polyisoprene). This makes the polymer chains highly irregular/coiled, preventing crystallization and allowing high elasticity.\nStep 3: Gutta-percha has the trans configuration (trans-1,4-polyisoprene). The trans chains are linear and can pack closely together, leading to a highly crystalline, tough, and non-elastic material.",
      "result": "Natural rubber is cis-1,4-polyisoprene, while gutta-percha is trans-1,4-polyisoprene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question reviews the industrial application of diene polymers (vulcanization).",
      "process": "Step 1: Understand the structure of raw rubber. Raw rubber consists of long cis-polyisoprene chains that slide past each other, making it soft, sticky, and weak when warm.\nStep 2: Introduce sulfur. Heating with sulfur ($S_8$) causes reaction at the allylic positions of the polymer chains.\nStep 3: Analyze cross-linking. Sulfur atoms form covalent cross-links between adjacent chains. This holds the chains in a three-dimensional network, preventing them from slipping, which greatly increases elasticity, strength, and thermal stability.",
      "result": "Vulcanization involves heating rubber with sulfur to create disulfide/polysulfide cross-links, rendering it tough and elastic."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question evaluates the physical basis of ultraviolet-visible spectroscopy for conjugated hydrocarbons.",
      "process": "Step 1: Identify the orbitals present. Conjugated dienes contain only $\\sigma$ and $\\pi$ bonds, with no non-bonding lone pairs ($n$).\nStep 2: Compare transition energies. $\\sigma \\rightarrow \\sigma^*$ transitions require very high energy vacuum UV light (< 150 nm). $\\pi \\rightarrow \\pi^*$ transitions require less energy and occur in the standard UV region (200-400 nm).\nStep 3: Identify the transition. The absorption of a photon promotes an electron from the bonding $\\pi$ orbital (specifically the HOMO) to the antibonding $\\pi^*$ orbital (specifically the LUMO).",
      "result": "The $\\pi \\rightarrow \\pi^*$ transition is responsible for UV absorption in conjugated dienes."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "This question applies the Woodward-Fieser rules to calculate the $\\lambda_{\\text{max}}$ of a conjugated diene in a ring system.",
      "process": "Step 1: Determine the base value. The diene is heteroannular/acyclic in nature (not in the same ring, but rather exocyclic to one ring). The base value for an acyclic/heteroannular diene is $217\\text{ nm}$.\nStep 2: Add increments for ring residues. The diene carbons are C=C-C=C. C1 and C2 of the diene are connected to C3 and C6 of the cyclohexane ring. This counts as two ring residues: $2 \\times 5\\text{ nm} = +10\\text{ nm}$.\nStep 3: Add increments for exocyclic double bonds. Both C=C bonds are exocyclic to the cyclohexane ring. This counts as two exocyclic double bonds: $2 \\times 5\\text{ nm} = +10\\text{ nm}$.\nStep 4: Sum all values: $\\lambda_{\\text{max}} = 217\\text{ (base)} + 10\\text{ (ring residues)} + 10\\text{ (exocyclic bonds)} = 237\\text{ nm}$.",
      "result": "The calculated $\\lambda_{\\text{max}}$ value is 237 nm."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q50_woodward_fieser_homo_hetero",
    "topic": "Ultraviolet Spectroscopy: Woodward-Fieser Rules",
    "difficulty_level": "Hard",
    "question_text": "According to the Woodward-Fieser rules, why do homoannular (cisoid) conjugated dienes have a higher base $\\lambda_{\\text{max}}$ value (253 nm) compared to heteroannular (transoid) conjugated dienes (214/217 nm)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Homoannular dienes are locked in a cisoid conformation, which is higher in ground-state energy (less stable) due to steric strain, resulting in a smaller HOMO-LUMO energy gap.",
        "smiles": "C1=CC=CCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Heteroannular dienes have more s-character, which lowers the ground state energy and increases the energy gap.",
        "smiles": "C=C1C=CCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Homoannular dienes are more highly substituted with alkyl groups by definition.",
        "smiles": "C1=CC=CCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Homoannular dienes do not undergo $\\pi \\rightarrow \\pi^*$ transitions, so they absorb at longer wavelengths via forbidden transitions.",
        "smiles": "C1=CC=CCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question explores the physical organic reasoning behind the different base values of homoannular vs heteroannular dienes in Woodward-Fieser rules.",
      "process": "Step 1: Understand the geometries. A homoannular diene has both double bonds in the same ring, forcing it into a cisoid conformation. A heteroannular diene has double bonds in different rings (transoid).\nStep 2: Evaluate thermodynamics. The cisoid conformation is less stable (higher in energy) than the transoid conformation due to steric repulsion between the ends of the diene.\nStep 3: Relate to transition energy. This higher ground-state energy narrows the HOMO-LUMO energy gap compared to the more stable transoid conformation. A smaller energy gap means absorption shifts to a longer wavelength (253 nm vs 217 nm).",
      "result": "The cisoid conformation of homoannular dienes has a smaller HOMO-LUMO gap due to its higher ground-state energy, leading to a higher base absorption wavelength (253 nm)."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch14_q_dynamic_addition_14",
    "topic": "Conjugated Dienes: Electrophilic Additions",
    "difficulty_level": "Hard",
    "question_text": "Identify the major products of the reaction of 1,3-butadiene with 1 equivalent of HBr.",
    "reaction_scheme": {
      "reactants": [
        "C=CC=C"
      ],
      "reagents": "HBr (1 eq)",
      "conditions": "0°C vs 40°C",
      "products": [
        "CC(Br)C=C",
        "CC=CCC"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "At 0°C, the 1,2-addition kinetic product is favored; at 40°C, the 1,4-addition thermodynamic product is favored.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Only 1,2-addition occurs at both temperatures.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Only 1,4-addition occurs at both temperatures.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "No reaction occurs under these conditions.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Evaluating thermodynamic vs kinetic control in conjugated systems.",
      "process": "Protonation yields an allylic carbocation. At low temperature (0°C), nucleophilic attack occurs rapidly at C2 (closer to charge) to give the kinetic 1,2-product. At high temperature (40°C), equilibrium is reached, yielding the more substituted, stable internal alkene (thermodynamic 1,4-product).",
      "result": "Product distributions are temperature-dependent."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  }
];
