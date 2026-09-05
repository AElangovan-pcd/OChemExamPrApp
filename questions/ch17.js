// OChemStudyBuddy - McMurry Chapter 17
// Author: A. Elangovan, PhD
var CH17_QUESTIONS = [
  {
    "question_id": "ch17_q1_iupac_stereochem",
    "topic": "Naming alcohols and phenols",
    "difficulty_level": "Medium",
    "question_text": "What is the correct IUPAC name, including the stereochemical descriptor, for the chiral alcohol shown below?",
    "question_smiles": "CC(C)(C)[C@@H](O)C",
    "options": [
      {
        "option_id": "A",
        "text": "(S)-3,3-dimethylbutan-2-ol",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(R)-3,3-dimethylbutan-2-ol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(S)-2,2-dimethylbutan-3-ol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(R)-2,2-dimethylbutan-3-ol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two rules decide this name. The longest chain that contains the carbon bearing the OH is the parent, numbered from the end that gives the OH the lowest locant, because a suffix group outranks any prefix in the numbering. The descriptor then comes from Cahn-Ingold-Prelog priorities at the carbinol carbon: OH first, then the carbon with the most carbon substituents, then the methyl, with hydrogen last.",
      "approach": "Step 1: Find the parent. The longest chain through the carbinol carbon has four carbons: a butanol. The two extra methyls sit on the same carbon.\nStep 2: Number so the OH gets the lower locant: from the OH end the carbinol carbon is C2 and the quaternary carbon is C3, giving 3,3-dimethylbutan-2-ol. Numbering from the other end would make it butan-3-ol, which the suffix rule forbids.\nStep 3: Rank the groups on C2: OH (O outranks C) > C(CH3)3 (a carbon bearing C,C,C) > CH3 (H,H,H) > H.\nStep 4: View with H pointing away. OH to tert-butyl to methyl runs counterclockwise: (S). The name is (S)-3,3-dimethylbutan-2-ol.",
      "note": "The two wrong numberings here are tempting because they give the substituents the low locants, 2,2 instead of 3,3. The suffix always wins that contest: the OH carbon is numbered first and the prefixes take what is left. The (S) label says nothing about which way the compound rotates plane-polarised light; the sign of rotation is measured, never deduced from the descriptor.",
      "options": {
        "A": "Correct. Four-carbon parent with the OH at C2 and both methyls at C3, and with H away the sequence OH, tert-butyl, methyl runs counterclockwise: (S).",
        "B": "The right name with the wrong handedness. Tracing OH to tert-butyl to methyl gives clockwise, (R), only if the hydrogen is pointing toward you; it must point away when the direction is read.",
        "C": "The right molecule under the wrong name: numbering from the methyl end puts the OH at C3, but the suffix group must take the lowest locant available, which is 2. The substituent locants never override it.",
        "D": "Two errors at once: the chain is numbered from the wrong end, so the OH carries locant 3 instead of 2, and the descriptor is read with the hydrogen toward the viewer, which reverses (S) to (R)."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A carbon chain in which a carbon carrying three methyl groups is joined to a stereocentre drawn with wedge and dash bonds; that stereocentre carries an OH group and a methyl group."
  },
  {
    "question_id": "ch17_q2_iupac_unsaturated",
    "topic": "Naming alcohols and phenols",
    "difficulty_level": "Hard",
    "question_text": "What is the correct IUPAC name, including the double-bond descriptor, for the unsaturated alcohol shown below?",
    "question_smiles": "C/C=C\\C(O)C#C",
    "options": [
      {
        "option_id": "A",
        "text": "(Z)-hex-4-en-1-yn-3-ol",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(E)-hex-4-en-1-yn-3-ol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(Z)-hex-2-en-5-yn-4-ol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(E)-hex-2-en-5-yn-4-ol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When a chain carries an OH, a double bond and a triple bond, the OH is the principal characteristic group: it sets the suffix and takes the lowest locant, before any consideration of the multiple bonds. The multiple bonds are then cited as infixes, with the double bond named first (en before yne) regardless of their locants. E or Z is read from the higher-priority group on each alkene carbon: here the carbinol carbon on one end and the methyl on the other.",
      "approach": "Step 1: The chain has six carbons and contains the OH carbon, the C=C and the C≡C: a hexenynol.\nStep 2: Number for the OH. From the alkyne end the OH carbon is C3; from the methyl end it is C4. The alkyne end wins: C1≡C2, C3-OH, C4=C5, C6.\nStep 3: Assemble: hex-4-en-1-yn-3-ol. The ene is cited before the yne even though the yne has the lower number.\nStep 4: Geometry at C4=C5. On C4 the carbinol carbon outranks H; on C5 the methyl outranks H. Those two groups are on the same side of the double bond in the drawing: (Z). The name is (Z)-hex-4-en-1-yn-3-ol.",
      "note": "The tie-break that gives a double bond the lower locant than a triple bond only comes into play when the suffix does not settle the numbering first, and here it does. C3 is also a stereocentre, and a complete name would carry (3R) or (3S) as well; the drawing leaves it flat, which is why the question asks for the alkene descriptor alone.",
      "options": {
        "A": "Correct. Numbered from the alkyne end so the OH is at C3, the alkyne at C1 and the alkene at C4, and the carbinol carbon and the methyl lie cis across the double bond: (Z).",
        "B": "The right skeleton and numbering with the wrong geometry. (E) would place the carbinol carbon and the methyl on opposite sides of the C4=C5 bond; the drawing has them on the same side.",
        "C": "The right molecule numbered from the wrong end: this puts the OH at C4 when numbering from the alkyne end gives it 3. The suffix group takes the lowest locant, before the ene-before-yne preference is ever consulted.",
        "D": "Wrong on both counts: the numbering starts at the methyl end, giving the OH locant 4 instead of 3, and the (E) descriptor describes the isomer with the chain segments on opposite sides of the double bond."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-carbon chain: a terminal triple bond at one end, next a carbon bearing an OH, then a double bond drawn with the chain continuing on the same side at both ends, and a methyl at the far end."
  },
  {
    "question_id": "ch17_q3_phenol_nomenclature",
    "topic": "Naming alcohols and phenols",
    "difficulty_level": "Medium",
    "question_text": "What is the IUPAC name for the polyfunctional aromatic compound shown below?",
    "question_smiles": "O=Cc1ccc(O)c(Br)c1",
    "options": [
      {
        "option_id": "A",
        "text": "3-bromo-4-hydroxybenzaldehyde",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-bromo-4-formylphenol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-bromo-4-hydroxyphenylaldehyde",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-bromo-4-hydroxybenzaldehyde",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When a benzene ring carries more than one functional group, the most senior group names the compound and the others become prefixes. Aldehydes outrank alcohols and phenols, so this compound is a benzaldehyde with hydroxy and bromo prefixes, not a phenol with a formyl prefix. The ring is numbered from the carbon bearing the senior group, in the direction that gives the prefixes the lowest locants, and the prefixes are cited in alphabetical order.",
      "approach": "Step 1: Rank the groups: CHO (aldehyde) > OH (hydroxy) > Br (halogen prefix). The parent is benzaldehyde and the CHO carbon is C1.\nStep 2: Locate the others relative to C1. The OH is para, C4. The bromine is on the carbon next to the OH, which is C3 when numbering toward it and C5 the other way; choose 3.\nStep 3: Cite alphabetically: bromo before hydroxy.\nStep 4: 3-Bromo-4-hydroxybenzaldehyde.",
      "note": "This is the ranking students most often invert, because phenol is such a familiar parent. A phenol is the parent only when nothing more senior is present: acids, esters, nitriles, aldehydes and ketones all outrank it, and the OH is then hydroxy. Halogens and nitro groups are always prefixes, so they never compete for the parent name at all.",
      "options": {
        "A": "Correct. The aldehyde is the senior group and gives the parent benzaldehyde with C1 at the CHO carbon; OH is para (4) and bromine is next to it (3); bromo is cited before hydroxy.",
        "B": "The right molecule under the wrong parent. Naming it as a phenol with a formyl prefix demotes the senior group; the aldehyde outranks the hydroxyl and must supply the suffix.",
        "C": "Phenylaldehyde is not an IUPAC parent name; the retained name for the aromatic aldehyde is benzaldehyde, and the locants are then counted from its CHO carbon.",
        "D": "A different compound. 2-Bromo-4-hydroxybenzaldehyde puts the bromine next to the CHO group; in the structure shown the bromine is next to the OH, which is position 3."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing an aldehyde group, CHO, and on the opposite side of the ring an OH group with a bromine atom on the ring carbon next to the OH."
  },
  {
    "question_id": "ch17_q4_bicyclic_alcohol",
    "topic": "Naming alcohols and phenols",
    "difficulty_level": "Hard",
    "question_text": "What is the correct IUPAC name for the bicyclic alcohol shown below?",
    "question_smiles": "OC1CC2CCC1C2",
    "options": [
      {
        "option_id": "A",
        "text": "bicyclo[2.2.1]heptan-2-ol",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "bicyclo[2.2.1]heptan-5-ol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "bicyclo[3.1.1]heptan-2-ol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "bicyclo[2.2.2]octan-2-ol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Bridged bicyclic compounds are named by the von Baeyer system: the total ring-atom count gives the alkane name, the bracket lists the number of atoms in each of the three bridges connecting the two bridgeheads in decreasing order, and numbering starts at a bridgehead, runs around the longest bridge to the other bridgehead, continues around the next longest, and finishes with the shortest. A substituent then takes the lowest locant available along that path.",
      "approach": "Step 1: Count the ring atoms: seven, so the parent is heptane.\nStep 2: Identify the bridgeheads, the two carbons shared by every ring, and count the atoms between them along each path: two, two and one. Bicyclo[2.2.1]heptane, the norbornane skeleton.\nStep 3: Number from a bridgehead, C1, around a two-carbon bridge (C2, C3) to the other bridgehead (C4), back along the second two-carbon bridge (C5, C6), then the one-carbon bridge (C7).\nStep 4: The OH sits on a two-carbon bridge next to a bridgehead. Start at that bridgehead and go toward it: locant 2. Bicyclo[2.2.1]heptan-2-ol.",
      "note": "The two-carbon bridges are equivalent, so the choice is only which bridgehead to call C1 and which direction to go; both are made to give the OH the lowest locant. A complete name would also state whether the OH is exo or endo, which the drawing does not specify; the trivial name norbornan-2-ol covers both.",
      "options": {
        "A": "Correct. Seven ring atoms, bridges of 2, 2 and 1 atoms, and the OH on a two-carbon bridge adjacent to the bridgehead chosen as C1, so it is at C2.",
        "B": "The right skeleton with the numbering run the wrong way: heptan-5-ol places the OH on the second two-carbon bridge, but starting at the other bridgehead, or going the other direction, reaches the same carbon as C2.",
        "C": "A bicyclo[3.1.1]heptane has a three-carbon bridge, a one-carbon bridge and a one-carbon bridge; that is the pinane skeleton. No bridge in the drawn compound is three carbons long.",
        "D": "Bicyclo[2.2.2]octane has eight ring atoms and three two-carbon bridges. The drawn compound has seven, one of its bridges being a single CH2."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A bridged bicyclic framework: a six-membered ring with a single carbon bridging across it between two opposite corners, and an OH group on a ring carbon adjacent to one of those bridgehead corners."
  },
  {
    "question_id": "ch17_q5_dinitro_phenol",
    "topic": "Naming alcohols and phenols",
    "difficulty_level": "Medium",
    "question_text": "What is the correct IUPAC name of the phenol derivative shown below?",
    "question_smiles": "Oc1c(C)cc([N+](=O)[O-])cc1[N+](=O)[O-]",
    "options": [
      {
        "option_id": "A",
        "text": "2-methyl-4,6-dinitrophenol",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "6-methyl-2,4-dinitrophenol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-hydroxy-2-methyl-4,6-dinitrobenzene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,4-dinitro-6-methylphenol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "With no group more senior than the OH present, the compound is a phenol and the OH carbon is C1 by definition. Numbering direction is then chosen to give the substituents the lowest set of locants; when both directions give the same set, the tie goes to the substituent cited first in alphabetical order, which gets the lower number. Multiplying prefixes such as di- are ignored when alphabetising.",
      "approach": "Step 1: Parent: phenol, C1 at the OH.\nStep 2: Going one way round the ring the substituents fall at 2 (methyl), 4 (nitro), 6 (nitro); the other way at 2 (nitro), 4 (nitro), 6 (methyl). Both are the set {2,4,6}.\nStep 3: Break the tie alphabetically: methyl precedes nitro, so methyl takes the lower locant, 2.\nStep 4: Cite the prefixes alphabetically: 2-methyl-4,6-dinitrophenol.",
      "note": "This compound is DNOC, an old herbicide, and its trivial name 4,6-dinitro-o-cresol numbers from the methyl-bearing cresol parent, which is why the two names disagree on the locants. In IUPAC nomenclature cresol is not used as a parent for further substitution; the phenol parent is.",
      "options": {
        "A": "Correct. Both directions give locants {2,4,6}; the tie is broken by giving the first-cited prefix, methyl, the lower locant, and the prefixes are listed alphabetically.",
        "B": "The same locant set with the tie broken the wrong way. Methyl, not nitro, is cited first alphabetically, so methyl receives the lower locant.",
        "C": "The right molecule under the wrong parent. Hydroxy is used as a prefix only when a more senior group is present; here nothing outranks the OH, so the compound must be named as a phenol.",
        "D": "The right locants with the prefixes out of order. Alphabetisation ignores the multiplying prefix di-, so nitro is sorted under n and follows methyl."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing an OH group, a methyl group on one of the carbons next to the OH, a nitro group on the other carbon next to the OH, and a second nitro group directly across the ring from the OH."
  },
  {
    "question_id": "ch17_q6_bp_comparison",
    "topic": "physical properties (boiling points, solubility, hydrogen bonding)",
    "difficulty_level": "Easy",
    "question_text": "Which of the following compounds has the highest boiling point?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "pentan-3-ol",
        "smiles": "CCC(O)CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-ethoxypropane",
        "smiles": "CCCOCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "pentan-3-one",
        "smiles": "CCC(=O)CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "pentane",
        "smiles": "CCCCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "These four compounds have almost the same molar mass (86 to 88 g/mol), so dispersion forces are nearly equal and the boiling points are set by the polar forces on top of them. An alcohol hydrogen-bonds to itself; a ketone and an ether have dipoles but no O-H to donate; an alkane has neither. Hydrogen bonding is the strongest of these, so the alcohol boils highest. The measured values are pentan-3-ol 116 °C, pentan-3-one 102 °C, 1-ethoxypropane 64 °C and pentane 36 °C.",
      "approach": "Step 1: List the intermolecular forces available to each: pentane, dispersion only; 1-ethoxypropane, dispersion plus a small C-O-C dipole; pentan-3-one, dispersion plus the large C=O dipole; pentan-3-ol, all of these plus O-H hydrogen bonds.\nStep 2: Rank the forces: hydrogen bonding > dipole-dipole > dispersion at equal size.\nStep 3: Within the dipolar pair, the ketone's C=O dipole is larger than the ether's bent C-O-C dipole, so the ketone boils higher.\nStep 4: Highest boiling point: pentan-3-ol.",
      "note": "The general pattern, alcohol > ketone or aldehyde > ether > alkane at constant carbon count, holds across the whole chapter and is what makes alcohols such poor solvents to remove on a rotary evaporator compared with ethers. The comparison only works at equal size; a long-chain ether outboils a small alcohol on dispersion alone.",
      "options": {
        "A": "Correct. Pentan-3-ol donates and accepts hydrogen bonds, which the other three cannot do, and at equal molar mass that lifts its boiling point above the ketone and the ether.",
        "B": "1-Ethoxypropane has a dipole but no O-H, so it cannot hydrogen-bond to itself; it boils at 64 °C, below both the ketone and the alcohol.",
        "C": "Pentan-3-one's carbonyl gives it a strong dipole and a boiling point of 102 °C, above the ether, but with no O-H it cannot match the hydrogen-bonded alcohol.",
        "D": "Pentane has only dispersion forces and boils at 36 °C, the lowest of the four."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q7_hydrogen_bonding",
    "topic": "physical properties (boiling points, solubility, hydrogen bonding)",
    "difficulty_level": "Hard",
    "question_text": "Compare the boiling points of o-nitrophenol and p-nitrophenol. Which statement correctly explains their difference in boiling points?",
    "question_smiles": "Oc1ccccc1[N+](=O)[O-].Oc1ccc(cc1)[N+](=O)[O-]",
    "options": [
      {
        "option_id": "A",
        "text": "p-Nitrophenol has a higher boiling point because it forms intermolecular hydrogen bonds, while o-nitrophenol forms intramolecular hydrogen bonds.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "o-Nitrophenol has a higher boiling point because it forms stronger intermolecular hydrogen bonds.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "p-Nitrophenol has a lower boiling point because the para-nitro group's steric hindrance prevents hydrogen bonding.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both compounds have identical boiling points since they are structural isomers with the same molecular weight.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A hydrogen bond only raises the boiling point when it links one molecule to another. In o-nitrophenol the OH and an oxygen of the adjacent nitro group are positioned to form a six-membered hydrogen-bonded ring within the same molecule; that O-H is used up internally and contributes nothing to holding the liquid together. In p-nitrophenol the groups are on opposite sides of the ring, so every O-H must bond to a neighbouring molecule. The measured boiling points are 214 °C for the ortho isomer and 279 °C for the para.",
      "approach": "Step 1: Draw the ortho isomer and check the geometry: O-H, ring C, ring C, N, O makes a six-membered ring closed by the hydrogen bond, an unstrained chelate.\nStep 2: Draw the para isomer: the OH and NO2 are too far apart to interact within one molecule, so the OH hydrogen-bonds to the nitro or hydroxyl oxygen of another molecule.\nStep 3: Intermolecular hydrogen bonding must be broken to vaporise the para isomer; the ortho isomer's internal bond survives vaporisation.\nStep 4: The para isomer boils about 65 °C higher.",
      "note": "The same intramolecular bond explains two lab facts about o-nitrophenol: it steam-distils, because it is volatile, and it is far less soluble in water than the para isomer, because its OH is not free to bond to water. Salicylaldehyde and methyl salicylate behave the same way, for the same reason.",
      "options": {
        "A": "Correct. The ortho isomer ties up its O-H in an internal six-membered hydrogen-bonded ring; the para isomer must hydrogen-bond between molecules, so it needs more energy to vaporise.",
        "B": "Backwards. The ortho isomer's hydrogen bond is intramolecular and does not link molecules together, so it lowers rather than raises the boiling point relative to the para isomer.",
        "C": "A para substituent is on the far side of the ring from the OH and cannot hinder it; p-nitrophenol hydrogen-bonds freely between molecules and is the higher-boiling isomer.",
        "D": "Isomers share a formula, not a boiling point. Molecular weight is the same for both, and the 65 °C difference comes entirely from how each isomer hydrogen-bonds."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two nitrophenols drawn side by side. In the one on the left the nitro group is on the ring carbon next to the OH; in the one on the right the nitro group is on the ring carbon directly across from the OH."
  },
  {
    "question_id": "ch17_q8_diol_solubility",
    "topic": "physical properties (boiling points, solubility, hydrogen bonding)",
    "difficulty_level": "Medium",
    "question_text": "Which of the following compounds is the most soluble in water?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Hexane-1,6-diol",
        "smiles": "OCCCCCCO",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Hexan-1-ol",
        "smiles": "CCCCCCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Hexanal",
        "smiles": "CCCCCC=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Hexane",
        "smiles": "CCCCCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Water solubility of a small organic molecule is a contest between the hydrogen-bonding groups, which water solvates readily, and the hydrocarbon that water must cage at a cost. All four compounds carry the same six-carbon chain, so the comparison reduces to what each brings to the water: two OH groups, one OH, one carbonyl oxygen, or nothing. Each OH both donates and accepts hydrogen bonds; a carbonyl only accepts.",
      "approach": "Step 1: Fix the hydrophobic part: six carbons in every case.\nStep 2: Count hydrogen-bonding sites. Hexane-1,6-diol has two OH groups, one at each end of the chain; hexan-1-ol has one; hexanal has an oxygen that accepts hydrogen bonds but cannot donate; hexane has none.\nStep 3: Rank: the diol is by far the most soluble (it dissolves in roughly its own weight of water), hexan-1-ol and hexanal both sit near 6 g per litre, and hexane is essentially insoluble at about 0.01 g per litre.\nStep 4: Most soluble: hexane-1,6-diol.",
      "note": "A rough rule for alcohols is that one OH group carries about four carbons into solution: methanol through propanol are miscible, butanol is partly soluble, and hexanol is not. A second OH doubles the carrying capacity, which is why hexane-1,6-diol dissolves while hexan-1-ol does not, and why sugars, with an OH on nearly every carbon, are so soluble.",
      "options": {
        "A": "Correct. Two hydroxyl groups on a six-carbon chain give twice the hydrogen-bonding of the mono-alcohol against the same hydrocarbon cost, and the diol is freely soluble.",
        "B": "Hexan-1-ol has a single OH against six carbons, past the point where one hydroxyl can carry the chain into water; its solubility is about 6 g per litre.",
        "C": "Hexanal's oxygen accepts hydrogen bonds from water but has no O-H to donate, so it is no more soluble than hexan-1-ol and far less than the diol.",
        "D": "Hexane has no polar group at all; water has nothing to solvate and the alkane is essentially insoluble."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q9_alkoxide_water",
    "topic": "acidity and basicity of alcohols and phenols (substituent effects on phenol acidity, alkoxide formation)",
    "difficulty_level": "Medium",
    "question_text": "When sodium ethoxide is dissolved in water, what is the position of the equilibrium, and which species are favored?",
    "question_smiles": "CC[O-]",
    "options": [
      {
        "option_id": "A",
        "text": "The equilibrium lies to the right, favoring ethanol and hydroxide ion.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The equilibrium lies to the left, favoring ethoxide ion and water.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The equilibrium is exactly at the midpoint, with equal concentrations of ethoxide and hydroxide.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "No reaction occurs because ethoxide is a weaker base than hydroxide.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An acid-base equilibrium settles on the side of the weaker acid and weaker base. Water (pKa 15.74) is a slightly stronger acid than ethanol (pKa 16.00), so ethoxide is the slightly stronger base and the reaction ethoxide + water -> ethanol + hydroxide is favoured. The intrinsic preference is small, a factor of about 2, but water is the solvent at 55 mol per litre, and that excess pushes the conversion essentially to completion.",
      "approach": "Step 1: Write the reaction: CH3CH2O- + H2O <=> CH3CH2OH + HO-.\nStep 2: Identify the acids: water on the left, ethanol on the right. pKa 15.74 versus 16.00.\nStep 3: Equilibrium favours the weaker acid, ethanol, so the reaction runs to the right. K = 10^(16.00 - 15.74), about 1.8.\nStep 4: Fold in the solvent: with water at 55 M, the small K still converts nearly all of the ethoxide to ethanol and hydroxide. An alkoxide cannot survive in water.",
      "note": "This is why alkoxides are prepared and used in the parent alcohol, or in ethers and DMSO, never in water: sodium ethoxide in water is just sodium hydroxide in wet ethanol. The reverse also holds, and hydroxide cannot make ethoxide from ethanol in any useful amount; sodium metal or sodium hydride is needed for that.",
      "options": {
        "A": "Correct. Ethanol is the weaker acid, so its side is favoured, and the huge excess of water as solvent converts the ethoxide almost entirely to ethanol and hydroxide.",
        "B": "This would require ethoxide to be the weaker base, which would make ethanol the stronger acid; ethanol's pKa of 16.00 is higher than water's 15.74, not lower.",
        "C": "An equilibrium constant of 1 would be needed for a midpoint, and even then equal concentrations would require equal starting amounts; with water as the solvent the ethoxide is consumed almost completely.",
        "D": "Ethoxide is the stronger base, the conjugate of the weaker acid, and it reacts with water rather than sitting inert in it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An ethyl group bonded to an oxygen atom that carries a negative charge: the ethoxide ion."
  },
  {
    "question_id": "ch17_q10_phenol_solubility_extraction",
    "topic": "acidity and basicity of alcohols and phenols (substituent effects on phenol acidity, alkoxide formation)",
    "difficulty_level": "Hard",
    "question_text": "Which aqueous reagent can selectively deprotonate phenol to dissolve it in the aqueous phase, leaving cyclohexanol in the organic phase during extraction?",
    "question_smiles": "Oc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "1 M Aqueous sodium hydroxide (NaOH)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1 M Aqueous sodium bicarbonate (NaHCO3)",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1 M Aqueous hydrochloric acid (HCl)",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Pure water",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An acid-base extraction works when the base chosen is strong enough to deprotonate one compound and too weak to deprotonate the other; the ionised compound moves into the water as its salt and the neutral one stays in the organic layer. Phenol (pKa 9.89) and cyclohexanol (pKa about 17) differ by seven pKa units, and hydroxide, whose conjugate acid water has pKa 15.74, sits between them.",
      "approach": "Step 1: Hydroxide + phenol: K = 10^(15.74 - 9.89), about 10^6; phenol is converted quantitatively to sodium phenoxide, an ionic, water-soluble salt.\nStep 2: Hydroxide + cyclohexanol: K = 10^(15.74 - 17), about 0.05; the alcohol is left essentially untouched and stays in the ether layer.\nStep 3: Bicarbonate: its conjugate acid H2CO3 has pKa 6.4, three units below phenol, so it removes less than 0.1% of the phenol; bicarbonate is the base for carboxylic acids.\nStep 4: Acid and plain water ionise neither. Aqueous NaOH is the reagent; acidifying the aqueous layer afterwards returns the phenol.",
      "note": "The full extraction ladder is bicarbonate for carboxylic acids (pKa about 5), hydroxide for phenols (about 10), and dilute HCl for amines; ordinary alcohols, at pKa 16 to 18, are never extracted by any aqueous base. Nitrophenols are the exception to watch: 2,4-dinitrophenol (pKa 4.1) is acidic enough to come out with the carboxylic acids in bicarbonate.",
      "options": {
        "A": "Correct. Hydroxide deprotonates phenol quantitatively (six pKa units of driving force) but not cyclohexanol, so only the phenol crosses into the aqueous layer as its sodium salt.",
        "B": "Bicarbonate is too weak: its conjugate acid, carbonic acid, has pKa 6.4, so the equilibrium with phenol (pKa 9.89) lies far to the phenol side. It is the reagent for carboxylic acids, which are stronger.",
        "C": "Hydrochloric acid cannot deprotonate anything; it would protonate an amine, but neither a phenol nor an alcohol is basic enough to form a salt with it.",
        "D": "Plain water dissolves neither compound to a useful extent (phenol about 8 g per 100 mL, cyclohexanol about 4), and separates nothing."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing an OH group."
  },
  {
    "question_id": "ch17_q11_substituted_phenol_acidity",
    "topic": "acidity and basicity of alcohols and phenols (substituent effects on phenol acidity, alkoxide formation)",
    "difficulty_level": "Medium",
    "question_text": "Arrange the following compounds in order of increasing acidity (least acidic to most acidic): p-aminophenol, p-cresol, phenol, and p-nitrophenol.",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "p-aminophenol < p-cresol < phenol < p-nitrophenol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "p-nitrophenol < phenol < p-cresol < p-aminophenol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "phenol < p-cresol < p-aminophenol < p-nitrophenol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "p-cresol < p-aminophenol < phenol < p-nitrophenol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A phenol's acidity is read from the stability of its phenoxide ion, whose negative charge is delocalised onto the ortho and para ring carbons. A para substituent that withdraws electrons by resonance, such as nitro, takes some of that charge onto itself and stabilises the anion strongly; one that donates by resonance, such as amino, pushes electron density onto the carbon that already carries the charge and destabilises it. A methyl group donates only weakly, by induction and hyperconjugation.",
      "approach": "Step 1: Phenol as the reference: pKa 9.89.\nStep 2: p-Nitrophenol: the para nitro group accepts the ring charge into its own N=O by resonance, so the phenoxide is much more stable; pKa about 7.2, the strongest acid here.\nStep 3: p-Cresol: methyl is a weak donor; pKa about 10.3, slightly weaker than phenol.\nStep 4: p-Aminophenol: NH2 is a strong resonance donor and the strongest destabiliser of the anion; pKa about 10.5, the weakest acid. Increasing acidity: p-aminophenol < p-cresol < phenol < p-nitrophenol.",
      "note": "The gap between p-cresol and p-aminophenol is small, a few tenths of a unit, while the nitro group moves the pKa by nearly three units; resonance withdrawal is the effect that matters. The same substituents placed meta act only by induction, so m-nitrophenol (pKa 8.4) is a weaker acid than the para isomer, and the difference between the two nitrophenols is a direct measure of the resonance contribution.",
      "options": {
        "A": "Correct. Resonance donors (NH2, strongly; CH3, weakly) make the phenol a weaker acid than phenol itself, and the resonance-withdrawing nitro group makes it a much stronger one.",
        "B": "This is the order of decreasing acidity written as if it were increasing. The nitro compound is the strongest acid, not the weakest, and p-aminophenol the weakest.",
        "C": "Phenol is not the weakest acid of the set: the methyl and amino groups both donate electron density and make their phenols weaker acids than the unsubstituted parent.",
        "D": "The two donors are in the wrong order. NH2 donates by resonance and is the stronger destabiliser of the phenoxide, so p-aminophenol, not p-cresol, is the weakest acid."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q12_pka_substituent_phenol",
    "topic": "acidity and basicity of alcohols and phenols (substituent effects on phenol acidity, alkoxide formation)",
    "difficulty_level": "Hard",
    "question_text": "Which of the following phenol derivatives has the lowest pKa value?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "2,4,6-trinitrophenol",
        "smiles": "Oc1c([N+](=O)[O-])cc([N+](=O)[O-])cc1[N+](=O)[O-]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2,4-dinitrophenol",
        "smiles": "Oc1ccc(cc1[N+](=O)[O-])[N+](=O)[O-]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-nitrophenol",
        "smiles": "Oc1ccc(cc1)[N+](=O)[O-]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-nitrophenol",
        "smiles": "Oc1cccc(c1)[N+](=O)[O-]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Each nitro group placed ortho or para to a phenolic OH adds a resonance form in which the phenoxide's negative charge sits on that nitro group's oxygen, and each such group lowers the pKa by roughly three units. A meta nitro group has no resonance path to the charge and acts by induction alone, worth about one and a half units. The lowest pKa therefore belongs to the phenol with the most ortho and para nitro groups.",
      "approach": "Step 1: Phenol itself: pKa 9.89.\nStep 2: One para nitro group: 4-nitrophenol, pKa 7.15. One meta nitro group: 3-nitrophenol, pKa 8.4, the smaller effect because only induction operates.\nStep 3: Two groups, ortho and para: 2,4-dinitrophenol, pKa 4.1.\nStep 4: Three groups at 2, 4 and 6, every position that can carry the charge: picric acid, pKa 0.38, stronger than any carboxylic acid. Lowest pKa: 2,4,6-trinitrophenol.",
      "note": "Picric acid is an old lab test reagent for exactly this reason: it is acidic enough to form salts, picrates, with amines and even with aromatic hydrocarbons, and its yellow crystalline salts served for identification before spectroscopy. Its acidity also made it a military explosive; the ammonium and metal picrates are shock-sensitive.",
      "options": {
        "A": "Correct. Nitro groups at 2, 4 and 6 each delocalise the phenoxide charge by resonance, and together bring the pKa down to 0.38.",
        "B": "Two nitro groups, at 2 and 4, give pKa 4.1: a strong acid for a phenol, but one resonance-withdrawing group short of picric acid.",
        "C": "A single para nitro group lowers the pKa from 9.89 to 7.15; useful, but the least acidic of the ortho/para-substituted phenols offered.",
        "D": "The meta position has no resonance connection to the phenoxide charge, so 3-nitrophenol (pKa 8.4) gains only the inductive effect and is the weakest acid of the four."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q13_fluorinated_alcohol_acidity",
    "topic": "acidity and basicity of alcohols and phenols (substituent effects on phenol acidity, alkoxide formation)",
    "difficulty_level": "Medium",
    "question_text": "Which of the following alcohols is the most acidic?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "1,1,1,3,3,3-hexafluoropropan-2-ol",
        "smiles": "FC(F)(F)C(O)C(F)(F)F",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "propan-2-ol",
        "smiles": "CC(O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,1,1-trifluoropropan-2-ol",
        "smiles": "FC(F)(F)C(O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-methylpropan-2-ol",
        "smiles": "CC(C)(C)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Alkyl alcohols are all weak acids near pKa 16 to 18, and the differences among them come from two effects on the alkoxide: electron-withdrawing groups stabilise the negative charge through the sigma bonds (induction), and bulky groups hinder solvation of the anion. Fluorine is the strongest inductive acceptor, and the effect adds with the number of fluorines and fades with distance from the oxygen.",
      "approach": "Step 1: Propan-2-ol: no acceptor groups; pKa 17.1.\nStep 2: 2-Methylpropan-2-ol: an extra methyl adds electron density and, more importantly, bulk that keeps solvent away from the alkoxide oxygen; pKa 18.0, the weakest acid here.\nStep 3: 1,1,1-Trifluoropropan-2-ol: three fluorines two bonds from the oxygen pull density away from the alkoxide; pKa near 12, close to trifluoroethanol's 12.4.\nStep 4: 1,1,1,3,3,3-Hexafluoropropan-2-ol: six fluorines flanking the carbinol carbon; pKa 9.3, comparable to phenol. Most acidic: the hexafluoro alcohol.",
      "note": "Hexafluoroisopropanol is used as a solvent precisely because of this: it is a strong hydrogen-bond donor and a poor nucleophile, so it stabilises cations and anions without attacking them. The inductive effect is distance-sensitive; a CF3 group three or four bonds from the OH does little, which is why the fluorines must sit on the carbons adjacent to the carbinol to matter.",
      "options": {
        "A": "Correct. Six fluorine atoms on the two carbons flanking the alkoxide withdraw electron density inductively and stabilise the anion, giving a pKa of 9.3, the lowest of the four.",
        "B": "Propan-2-ol has no electron-withdrawing substituent; its alkoxide is stabilised by nothing but solvation, and the pKa is 17.1.",
        "C": "Three fluorines help, bringing the pKa to about 12, but the second CF3 group in the hexafluoro compound roughly triples the stabilisation and lowers the pKa another three units.",
        "D": "The tert-butyl alkoxide is the least stable of the set: alkyl groups donate electron density and their bulk blocks solvation, so 2-methylpropan-2-ol is the weakest acid, pKa 18."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q14_alkoxide_formation_reagents",
    "topic": "acidity and basicity of alcohols and phenols (substituent effects on phenol acidity, alkoxide formation)",
    "difficulty_level": "Medium",
    "question_text": "Which of the following reagents is the most effective for preparing sodium tert-butoxide from tert-butyl alcohol?",
    "question_smiles": "CC(C)(C)O",
    "options": [
      {
        "option_id": "A",
        "text": "Sodium hydride (NaH)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Sodium hydroxide (NaOH)",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Sodium chloride (NaCl)",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Sodium bicarbonate (NaHCO3)",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "To convert an alcohol completely to its alkoxide, the base used must have a conjugate acid far weaker than the alcohol; a few pKa units of margin gives a quantitative reaction. tert-Butyl alcohol, pKa 18.0, is one of the weakest alcohol acids, so hydroxide (conjugate acid water, pKa 15.74) is not enough. Hydride's conjugate acid is H2, pKa about 35, and because the hydrogen gas leaves the flask the deprotonation is also irreversible.",
      "approach": "Step 1: Write the target: (CH3)3C-O- Na+.\nStep 2: Test hydroxide: K = 10^(15.74 - 18.0), about 0.005; less than 1% of the alcohol would be deprotonated, and the alkoxide would simply regenerate water.\nStep 3: Test hydride: K = 10^(35 - 18), enormous, and H2 escapes; the reaction is complete and one-way.\nStep 4: Chloride (conjugate acid HCl, pKa -7) and bicarbonate (conjugate acid H2CO3, pKa 6.4) are far too weak to matter. Sodium hydride is the reagent.",
      "note": "Sodium or potassium metal does the same job by a redox route, giving the alkoxide and hydrogen, and potassium tert-butoxide is usually made that way or bought as the solid. The comparison reverses for phenols: with a pKa near 10, a phenol is deprotonated completely by hydroxide, and hydride is unnecessary.",
      "options": {
        "A": "Correct. Hydride is a far stronger base than tert-butoxide, its conjugate acid H2 having pKa about 35, and the evolved hydrogen makes the deprotonation irreversible.",
        "B": "Hydroxide is a weaker base than tert-butoxide (water pKa 15.74 against the alcohol's 18.0), so the equilibrium lies on the alcohol side and under 1% alkoxide forms.",
        "C": "Chloride is the conjugate base of a strong acid and has no basicity toward an alcohol at all; sodium chloride is a spectator.",
        "D": "Bicarbonate's conjugate acid, carbonic acid, has pKa 6.4, twelve units below the alcohol; it cannot remove the O-H proton to any measurable extent."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A central carbon bearing three methyl groups and an OH group."
  },
  {
    "question_id": "ch17_q15_phenol_vs_cyclohexanol",
    "topic": "acidity and basicity of alcohols and phenols (substituent effects on phenol acidity, alkoxide formation)",
    "difficulty_level": "Easy",
    "question_text": "Phenol is approximately one million times more acidic than cyclohexanol. What is the primary reason for this difference in acidity?",
    "question_smiles": "Oc1ccccc1.OC1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "The phenoxide ion is stabilized by resonance delocalization of the negative charge into the aromatic ring.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Phenol has a higher molecular weight than cyclohexanol.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The cyclohexoxide ion is destabilized by aromaticity.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Phenol is a tertiary alcohol, while cyclohexanol is a secondary alcohol.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Both compounds lose a proton from an oxygen, so the difference in acidity must lie in the stability of the two anions. Cyclohexoxide keeps its negative charge on one oxygen with no way to spread it. Phenoxide's oxygen lone pair is conjugated with the ring, and resonance places the charge on the ortho and para carbons as well as on oxygen; four contributing structures share it. The result is pKa 9.89 for phenol against about 17 for cyclohexanol, a factor of roughly ten million.",
      "approach": "Step 1: Write both deprotonations and compare the anions.\nStep 2: Cyclohexoxide: sp3 carbon next to the oxygen, no pi system; the charge is localised.\nStep 3: Phenoxide: draw the resonance forms. The oxygen lone pair pushes into the ring and the charge appears at C2, C4 and C6 in turn; three carbons and the oxygen share it.\nStep 4: A delocalised anion is the more stable conjugate base, so phenol is the stronger acid by about seven pKa units.",
      "note": "The same resonance forms explain the chemistry of phenoxide as a nucleophile: the charge at the ortho and para carbons is what lets phenoxide attack carbon dioxide at carbon in the Kolbe-Schmitt reaction, and why phenoxide alkylates on oxygen with soft electrophiles but on carbon under other conditions. The ring is not just a spectator that stabilises the charge; it is where much of the charge lives.",
      "options": {
        "A": "Correct. The phenoxide charge is shared between oxygen and the ortho and para ring carbons through resonance, and that delocalisation makes phenoxide the far more stable anion.",
        "B": "Molecular weight has no bearing on acidity, and the two compounds differ by only six mass units anyway; the ten-million-fold difference in Ka comes from resonance.",
        "C": "Cyclohexane has no pi system and no aromaticity to lose or gain; cyclohexoxide is merely a localised alkoxide, weaker than phenoxide only because it has no delocalisation.",
        "D": "Phenol is not an alcohol of any class: its OH sits on an sp2 ring carbon, and the primary/secondary/tertiary classification applies to sp3 carbinol carbons. Even among true alcohols, that classification barely affects acidity."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two six-membered rings side by side, each bearing an OH group: the left ring is aromatic, drawn with alternating double bonds; the right ring is saturated."
  },
  {
    "question_id": "ch17_q16_alkoxide_basicity_sterics",
    "topic": "acidity and basicity of alcohols and phenols (substituent effects on phenol acidity, alkoxide formation)",
    "difficulty_level": "Medium",
    "question_text": "Why is potassium tert-butoxide commonly used as a non-nucleophilic base, whereas sodium ethoxide is commonly used as a nucleophile or base?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The bulkiness of the tert-butyl group hinders nucleophilic attack at a carbon atom, while leaving the basic oxygen accessible for proton removal.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The tert-butyl group is electron-withdrawing, making the oxygen less basic but more reactive.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Sodium ethoxide is a much stronger base than potassium tert-butoxide.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Potassium tert-butoxide cannot dissolve in any organic solvents.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Basicity and nucleophilicity are different properties. Basicity is a thermodynamic measure of how well the anion holds a proton; nucleophilicity is a kinetic measure of how fast it attacks a carbon. Steric bulk barely affects the first, because a proton is tiny and sits on the periphery of a molecule, but it slows the second severely, because backside attack at a carbon requires the nucleophile to approach through a crowded transition state. tert-Butoxide is therefore a strong base (its conjugate acid has pKa 18.0, so it is actually more basic than ethoxide) and a poor nucleophile.",
      "approach": "Step 1: Compare the anions: ethoxide has a CH2 next to the oxygen; tert-butoxide has three methyls on the carbon next to the oxygen.\nStep 2: Nucleophilic substitution needs the oxygen to reach a carbon; the three methyls block that approach, so SN2 by tert-butoxide is slow.\nStep 3: Proton removal needs the oxygen to reach a hydrogen on the outside of a molecule; that is unhindered, so tert-butoxide is a fully effective base (E2 promoter).\nStep 4: Ethoxide, small and equally basic, does both, which is why it competes substitution against elimination on secondary halides.",
      "note": "This is the reagent choice that switches a secondary alkyl halide from mainly SN2 (ethoxide) to essentially all E2 (tert-butoxide), and the bulk has a second consequence: tert-butoxide removes the most accessible proton and favours the less substituted, Hofmann, alkene. The reagent is soluble in tert-butanol, THF and DMSO, and is sold as a solid.",
      "options": {
        "A": "Correct. The three methyls shield the oxygen from carbon but not from a peripheral proton, so tert-butoxide eliminates without substituting; ethoxide, unhindered, does both.",
        "B": "Alkyl groups donate electron density, so tert-butoxide is if anything the more basic of the two (conjugate acid pKa 18.0 against 16.0); the difference is steric, not electronic.",
        "C": "Backwards, and not by much either way: ethanol is the slightly stronger acid, so ethoxide is the slightly weaker base. Basicity is not what separates the two reagents.",
        "D": "Potassium tert-butoxide dissolves readily in tert-butanol, THF and DMSO, which is exactly how it is used; solubility is not the reason it fails as a nucleophile."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q17_nabh4_selectivity",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Medium",
    "question_text": "What is the primary organic product of the reaction of ethyl 4-oxopentanoate with sodium borohydride (NaBH4) in ethanol?",
    "question_smiles": "O=C(C)CCC(=O)OCC",
    "options": [
      {
        "option_id": "A",
        "text": "Ethyl 4-hydroxypentanoate",
        "smiles": "CC(O)CCC(=O)OCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-Oxopentan-1-ol",
        "smiles": "CC(=O)CCCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Pentane-1,4-diol",
        "smiles": "CC(O)CCCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl pentanoate",
        "smiles": "CCCCC(=O)OCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sodium borohydride is a mild hydride donor that reduces aldehydes and ketones but leaves esters, acids and amides untouched; lithium aluminium hydride reduces all of them. The difference follows carbonyl electrophilicity: an ester's alkoxy oxygen donates into the carbonyl by resonance and makes it a poorer electrophile than a ketone. A molecule carrying both groups is therefore reduced selectively at the ketone by NaBH4 and at both by LiAlH4.",
      "approach": "Step 1: Identify the two carbonyls in ethyl 4-oxopentanoate: a methyl ketone at C4 and an ethyl ester at C1.\nStep 2: Choose what NaBH4 in ethanol can attack: the ketone only.\nStep 3: Hydride adds to the ketone carbon, and the alkoxide is protonated by the solvent: a secondary alcohol at C4.\nStep 4: The ester is unchanged. Product: ethyl 4-hydroxypentanoate.",
      "note": "The order of reactivity toward hydride, aldehyde > ketone > ester > acid or amide, is the same order that governs nucleophilic acyl substitution, and for the same reason. The hydroxy ester made here closes to a five-membered lactone on gentle acid treatment, which is one of the standard routes to gamma-valerolactone.",
      "options": {
        "A": "Correct. NaBH4 reduces the ketone to a secondary alcohol and does not react with the ester, so the product keeps the ethyl ester and gains an OH at C4.",
        "B": "This has the ester reduced and the ketone kept, the reverse of the reagent's selectivity: NaBH4 cannot reduce an ester, and a ketone is always the more reactive carbonyl toward hydride.",
        "C": "Pentane-1,4-diol is the LiAlH4 product, both carbonyls reduced; the milder borohydride stops at the ketone and leaves the ester intact.",
        "D": "Removing the ketone oxygen entirely is a Clemmensen or Wolff-Kishner reduction, not a hydride reduction; borohydride converts C=O to CH-OH and goes no further."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-carbon chain with a ketone carbonyl at the second carbon and an ethyl ester group at the far end."
  },
  {
    "question_id": "ch17_q18_lialh4_ester_reduction",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Hard",
    "question_text": "When ethyl benzoate is treated with excess lithium aluminum hydride (LiAlH4) followed by aqueous workup, what are the resulting alcohol products?",
    "question_smiles": "O=C(OCC)c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Benzyl alcohol and ethanol",
        "smiles": "OCc1ccccc1.CCO",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzyl alcohol and methanol",
        "smiles": "OCc1ccccc1.CO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzaldehyde and ethanol",
        "smiles": "O=Cc1ccccc1.CCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Phenol and ethanol",
        "smiles": "Oc1ccccc1.CCO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Lithium aluminium hydride reduces an ester twice. The first hydride adds to the carbonyl and the tetrahedral intermediate expels the alkoxide, giving an aldehyde; the aldehyde is a better electrophile than the ester was and is reduced at once by a second hydride to a primary alkoxide. Workup protonates both alkoxides. An ester RCOOR' therefore gives two alcohols: RCH2OH from the acyl part and R'OH from the alkoxy part.",
      "approach": "Step 1: Split ethyl benzoate into its acyl part (benzoyl, C6H5CO) and its alkoxy part (ethoxy).\nStep 2: First hydride: addition to the carbonyl, then loss of ethoxide, gives benzaldehyde and ethoxide.\nStep 3: Second hydride: benzaldehyde is reduced to the benzyloxide ion; it cannot be isolated at the aldehyde stage because the aldehyde reacts faster than the ester.\nStep 4: Aqueous workup protonates both: benzyl alcohol and ethanol.",
      "note": "Two hydrides are consumed per ester, so half an equivalent of LiAlH4 is the stoichiometric minimum and excess is used. Stopping at the aldehyde needs a different reagent, DIBAL-H at -78 °C, which holds the tetrahedral intermediate until workup. Sodium borohydride does not reduce esters at all under ordinary conditions.",
      "options": {
        "A": "Correct. The acyl carbon of the ester is reduced through the aldehyde to benzyl alcohol, and the ethoxy group leaves as ethoxide, which becomes ethanol on workup.",
        "B": "The alkoxy part of ethyl benzoate is an ethoxy group, so the small alcohol released is ethanol; methanol would come from methyl benzoate.",
        "C": "Benzaldehyde is the intermediate, not the product: it is more reactive toward hydride than the ester it came from and is reduced further before the ester is consumed.",
        "D": "Phenol would require breaking the ring-to-carbonyl carbon bond; hydride attacks the carbonyl carbon and only the C-O bonds change. The benzylic carbon is kept and ends up as CH2OH."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing a carbonyl group whose other bond goes to an oxygen that carries an ethyl group: an ethyl ester of the aromatic acid."
  },
  {
    "question_id": "ch17_q19_carboxylic_acid_reduction",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Medium",
    "question_text": "Which reagent combination will successfully reduce 4-oxocyclohexanecarboxylic acid to 4-hydroxycyclohexanemethanol?",
    "question_smiles": "O=C(O)C1CCC(=O)CC1",
    "options": [
      {
        "option_id": "A",
        "text": "1. Excess LiAlH4, THF\n2. H3O+",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1. NaBH4, EtOH\n2. H3O+",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "H2, Pd/C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "PCC, CH2Cl2",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The target has both carbonyls of the starting material reduced: the ketone to a secondary alcohol and the carboxylic acid to a primary alcohol. Only lithium aluminium hydride reduces a carboxylic acid; borohydride stops at the ketone, catalytic hydrogenation reduces neither carbonyl under ordinary conditions, and PCC is an oxidant. Excess LiAlH4 is needed because the acidic O-H consumes a hydride first, releasing hydrogen, before the carboxylate itself is reduced.",
      "approach": "Step 1: List the changes required: C=O to CH-OH at the ring, and COOH to CH2OH.\nStep 2: NaBH4 can do the first but not the second: the carboxylate anion is far too poor an electrophile for borohydride.\nStep 3: LiAlH4: one hydride deprotonates the acid (H2 evolves), then the aluminium carboxylate is reduced through the aldehyde stage to the primary alkoxide; the ketone is reduced alongside.\nStep 4: Acidic workup gives (4-hydroxycyclohexyl)methanol, as a cis/trans mixture. Excess LiAlH4 then H3O+ is the answer.",
      "note": "Reducing the acid selectively while keeping the ketone is the harder problem and needs borane, BH3-THF, which attacks carboxylic acids faster than ketones; the reverse selectivity, ketone only, is NaBH4. The three reagents together cover every combination, which is why all three appear in this chapter.",
      "options": {
        "A": "Correct. Excess LiAlH4 reduces both the ketone and the carboxylic acid; acidic workup releases the diol.",
        "B": "Borohydride reduces the ketone but cannot touch the carboxylic acid, so the product would be 4-hydroxycyclohexanecarboxylic acid with the COOH still present.",
        "C": "Hydrogen over palladium reduces alkenes and alkynes; ketones and carboxylic acids are inert to it under these conditions, and the starting material is recovered.",
        "D": "PCC oxidises alcohols; it cannot reduce anything, and neither functional group in the starting material is an alcohol for it to act on."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A cyclohexane ring with a ketone carbonyl at one ring carbon and a carboxylic acid group on the ring carbon directly across from it."
  },
  {
    "question_id": "ch17_q20_dibal_ester_reduction",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Hard",
    "question_text": "If ethyl hexanoate is treated with exactly one equivalent of diisobutylaluminum hydride (DIBAL-H) at -78 °C, followed by careful aqueous workup, what is the major organic product?",
    "question_smiles": "CCCCCC(=O)OCC",
    "options": [
      {
        "option_id": "A",
        "text": "Hexanal",
        "smiles": "CCCCCC=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Hexan-1-ol",
        "smiles": "CCCCCCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethyl hexanoate (no reaction)",
        "smiles": "CCCCCC(=O)OCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Hexane",
        "smiles": "CCCCCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Diisobutylaluminium hydride can stop an ester reduction at the aldehyde, which lithium aluminium hydride cannot. The aluminium coordinates the carbonyl oxygen and delivers one hydride to give a tetrahedral aluminium alkoxide; at -78 °C that intermediate does not expel the alkoxide, so no free aldehyde exists in the flask to be reduced again. The aldehyde appears only on aqueous workup, when there is no hydride left.",
      "approach": "Step 1: One equivalent of DIBAL-H, one hydride per ester, at -78 °C.\nStep 2: Hydride adds to the ester carbonyl: a tetrahedral intermediate bearing O-Al(iBu)2 and OEt on the same carbon.\nStep 3: The intermediate is stable at low temperature; it collapses only when water is added.\nStep 4: Workup releases hexanal and ethanol. The major product is hexanal.",
      "note": "This reagent is beyond the chapter's own list but is the standard answer to \"ester to aldehyde\" in the ACS exam and in McMurry's later chapters. The temperature is not decoration: warmed, or with a second equivalent, DIBAL-H reduces the aldehyde as well and gives the same primary alcohol LiAlH4 would.",
      "options": {
        "A": "Correct. One hydride at -78 °C gives a tetrahedral intermediate that survives until workup, which then releases the aldehyde with no reductant left to take it further.",
        "B": "Hexan-1-ol is the over-reduction product, obtained with LiAlH4 or with excess DIBAL-H at higher temperature, when the aldehyde forms in the presence of hydride.",
        "C": "The ester carbonyl is reduced; DIBAL-H is a strong enough hydride donor for esters even at -78 °C. No reaction is not what one equivalent does.",
        "D": "Hexane would require removing both oxygens; hydride reagents add H to a carbonyl carbon and never deoxygenate an ester to an alkane."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-carbon acyl chain ending in a carbonyl bonded to an oxygen that carries an ethyl group: an ethyl ester."
  },
  {
    "question_id": "ch17_q21_dihydroxylation",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Hard",
    "question_text": "Which of the following reaction conditions converts cyclohexene into cis-cyclohexane-1,2-diol?",
    "question_smiles": "C1=CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Cold, alkaline KMnO4 or catalytic OsO4 with NMO",
        "smiles": "O[C@H]1CCCC[C@H]1O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1. mCPBA\n2. Aqueous H3O+",
        "smiles": "O[C@H]1CCCC[C@@H]1O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1. O3\n2. Zn, AcOH",
        "smiles": "O=CCCCCC=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1. BH3·THF\n2. H2O2, NaOH",
        "smiles": "OC1CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A 1,2-diol can be made from an alkene two ways, and they give opposite stereochemistry. Osmium tetroxide (used catalytically with N-methylmorpholine N-oxide as the re-oxidant) and cold, dilute, basic permanganate both add through a five-membered cyclic ester on one face of the alkene, so the two oxygens end up syn: on a ring, cis. Epoxidation followed by acid-catalysed ring opening adds the second oxygen from the face opposite the first, anti, giving the trans diol.",
      "approach": "Step 1: Identify the target stereochemistry: cis-cyclohexane-1,2-diol, both OH groups on the same face.\nStep 2: Match to a syn addition: OsO4/NMO forms a cyclic osmate ester on one face and hydrolysis releases the cis diol; cold basic KMnO4 does the same through a cyclic manganate ester.\nStep 3: Rule out the epoxide route: water opens the protonated epoxide by backside attack, so the diol is trans.\nStep 4: Ozonolysis cleaves the ring to a dialdehyde and hydroboration gives a single OH. Answer: OsO4/NMO or cold alkaline KMnO4.",
      "note": "The cis diol here is the meso compound and the trans diol is a racemate; on an unsymmetrical alkene the same syn/anti distinction shows up as a pair of diastereomers. Permanganate must be kept cold and basic: warm or acidic, it cleaves the diol it has just made to the diacid, which is why the osmium reagent is preferred when the diol is the goal.",
      "options": {
        "A": "Correct. Both reagents add the two oxygens to the same face through a cyclic intermediate, so the diol is cis; the structure drawn is the meso cis diol.",
        "B": "Epoxidation and then hydrolysis is an anti dihydroxylation: water attacks the protonated epoxide from the back, and the product is trans-cyclohexane-1,2-diol, drawn here as one enantiomer.",
        "C": "Ozone cleaves the double bond outright; reductive workup gives hexanedial, an open-chain dialdehyde, with no ring and no OH groups.",
        "D": "Hydroboration-oxidation adds H and OH, not two OH groups; the product is cyclohexanol, a mono-alcohol."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered ring containing one double bond."
  },
  {
    "question_id": "ch17_q22_hydroboration_oxidation",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Medium",
    "question_text": "What is the major product of the hydroboration-oxidation of 1-methylcyclopentene (1. BH3·THF; 2. H2O2, NaOH, H2O)?",
    "question_smiles": "CC1=CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "trans-2-Methylcyclopentan-1-ol",
        "smiles": "C[C@H]1CCC[C@@H]1O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "cis-2-Methylcyclopentan-1-ol",
        "smiles": "C[C@@H]1CCC[C@@H]1O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Methylcyclopentan-1-ol",
        "smiles": "CC1(O)CCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Methylcyclopentan-1-one",
        "smiles": "CC1CCCC1=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hydroboration puts boron on the less substituted alkene carbon and hydrogen on the more substituted one, in a single concerted step that places both on the same face of the double bond. The oxidation then replaces the C-B bond with C-OH with retention of configuration. The net result is anti-Markovnikov addition of water with the H and the OH syn to each other, which on a ring means the OH ends up trans to whatever substituent sits on the carbon that received the hydrogen.",
      "approach": "Step 1: Regiochemistry: boron goes to C2 (CH), hydrogen to C1 (the carbon bearing the methyl). The OH will be on C2, next to the methyl-bearing carbon.\nStep 2: Stereochemistry of the addition: H and B add to the same face. The new H on C1 is cis to the new B on C2.\nStep 3: The methyl on C1 must therefore point to the opposite face from the new H, and hence from the boron.\nStep 4: Oxidation swaps B for OH with retention: the OH is cis to the H and trans to the methyl. Product: trans-2-methylcyclopentan-1-ol, formed as a racemate.",
      "note": "The word syn describes the H and the OH, not the OH and the methyl, and confusing the two is the standard error on this item. The Markovnikov alcohol, 1-methylcyclopentanol, is made from the same alkene by oxymercuration-demercuration or acid-catalysed hydration; the two hydration methods are complementary and the chapter teaches both.",
      "options": {
        "A": "Correct. OH on the less substituted carbon, and because H and OH add syn, the OH lies trans to the methyl group on the neighbouring carbon.",
        "B": "The right carbon but the wrong face. This is what results from reading \"syn addition\" as placing the OH on the same side as the methyl; syn refers to the H and OH, and the methyl is displaced to the far face.",
        "C": "1-Methylcyclopentanol has the OH on the more substituted carbon, the Markovnikov product of oxymercuration or acid-catalysed hydration; boron avoids that carbon.",
        "D": "The peroxide step oxidises the carbon-boron bond to an alcohol; it does not oxidise the alcohol to a ketone. A ketone would need PCC or chromic acid afterwards."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-membered ring containing one double bond; one of the two alkene carbons carries a methyl group."
  },
  {
    "question_id": "ch17_q23_oxymercuration_demercuration",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction of 3,3-dimethylbut-1-ene with 1. Hg(OAc)2, H2O followed by 2. NaBH4?",
    "question_smiles": "CC(C)(C)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "3,3-Dimethylbutan-2-ol",
        "smiles": "CC(C)(C)C(O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2,3-Dimethylbutan-2-ol",
        "smiles": "CC(C)(O)C(C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3,3-Dimethylbutan-1-ol",
        "smiles": "CC(C)(C)CCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,3-Dimethylbutan-1-ol",
        "smiles": "CC(C)C(C)CO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Oxymercuration-demercuration gives the Markovnikov alcohol without rearrangement. Mercury(II) acetate adds to the alkene to form a bridged mercurinium ion; water opens it at the more substituted carbon, and sodium borohydride then replaces the C-Hg bond with C-H. No free carbocation ever forms, so a substrate that would rearrange under acid-catalysed hydration keeps its skeleton here.",
      "approach": "Step 1: Mercurinium ion across C1 and C2 of 3,3-dimethylbut-1-ene; the positive charge is shared, with more on C2 (secondary) than on C1 (primary).\nStep 2: Water attacks C2, the more substituted carbon, opening the bridge; loss of a proton gives the organomercury alcohol.\nStep 3: NaBH4 replaces HgOAc on C1 with H.\nStep 4: The tert-butyl group has not moved: 3,3-dimethylbutan-2-ol.",
      "note": "Acid-catalysed hydration of this same alkene gives the secondary cation at C2, which undergoes a methyl shift to the tertiary cation and delivers 2,3-dimethylbutan-2-ol instead. That rearrangement is the reason the mercury method exists, and the neopentyl-type alkene used here is the classic test case for it.",
      "options": {
        "A": "Correct. Markovnikov addition of water through the mercurinium ion, with the skeleton intact because no carbocation is formed.",
        "B": "2,3-Dimethylbutan-2-ol is the rearranged product of acid-catalysed hydration, where a methyl shift converts the secondary cation to a tertiary one; the mercurinium ion allows no such shift.",
        "C": "3,3-Dimethylbutan-1-ol is the anti-Markovnikov alcohol, made by hydroboration-oxidation; water opens the mercurinium ion at the more substituted carbon.",
        "D": "This has both a rearranged skeleton and the OH on the wrong carbon; neither the methyl shift nor anti-Markovnikov placement occurs in oxymercuration."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A terminal alkene, CH2=CH, attached to a carbon that carries three methyl groups."
  },
  {
    "question_id": "ch17_q24_enone_chemoselective_reduction",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Hard",
    "question_text": "What is the major product when cyclohex-2-en-1-one is treated with NaBH4 in methanol, followed by aqueous acid?",
    "question_smiles": "O=C1C=CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclohex-2-en-1-ol",
        "smiles": "OC1C=CCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclohexanol",
        "smiles": "OC1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclohexanone",
        "smiles": "O=C1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclohexene",
        "smiles": "C1=CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hydride reagents attack polarised carbon-oxygen double bonds and leave carbon-carbon double bonds alone: a C=C has no partial positive carbon for hydride to add to. Sodium borohydride therefore reduces the ketone of an alpha,beta-unsaturated ketone to the alcohol and keeps the alkene, giving an allylic alcohol. Catalytic hydrogenation has the opposite selectivity, reducing the C=C and leaving the C=O.",
      "approach": "Step 1: Identify the two unsaturations in cyclohex-2-en-1-one: a C=O at C1 and a C=C at C2-C3, conjugated.\nStep 2: Hydride from NaBH4 adds to the carbonyl carbon, C1, forming an alkoxide; the alkene is not an electrophile and is untouched.\nStep 3: Methanol and then aqueous acid protonate the alkoxide.\nStep 4: Product: cyclohex-2-en-1-ol, an allylic secondary alcohol, formed as a racemate.",
      "note": "Conjugated enones can also accept hydride at the beta carbon (1,4-addition), which after enol tautomerism gives the saturated ketone and then cyclohexanol; with NaBH4 on cyclohexenone a minor amount of this occurs. Adding cerium(III) chloride (the Luche conditions) suppresses it completely, an ACS-scope refinement of the same 1,2-selectivity. The exam answer for NaBH4 remains the allylic alcohol.",
      "options": {
        "A": "Correct. Borohydride reduces the carbonyl to an alcohol and cannot reduce the isolated or conjugated C=C, so the alkene survives.",
        "B": "Cyclohexanol has both the C=O and the C=C reduced; that needs hydrogenation as well as hydride, or the minor conjugate-addition pathway taken to completion.",
        "C": "Cyclohexanone is the product of catalytic hydrogenation (H2, Pd/C), which reduces the alkene and leaves the ketone; hydride reagents do the reverse.",
        "D": "Cyclohexene would require removing the oxygen entirely, a Wolff-Kishner or Clemmensen deoxygenation; NaBH4 converts C=O to CH-OH and stops."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered ring with a ketone carbonyl; the ring's carbon-carbon double bond is between the two ring carbons adjacent to the carbonyl carbon, conjugated with it."
  },
  {
    "question_id": "ch17_q25_grignard_tertiary",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Medium",
    "question_text": "Which starting material and Grignard reagent combination would yield 2-phenylpropan-2-ol after acidic workup?",
    "question_smiles": "CC(O)(c1ccccc1)C",
    "options": [
      {
        "option_id": "A",
        "text": "Acetophenone and methylmagnesium bromide",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzaldehyde and methylmagnesium bromide",
        "smiles": "O=Cc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzophenone and methylmagnesium bromide",
        "smiles": "O=C(c1ccccc1)c2ccccc2",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzyl alcohol and methylmagnesium bromide",
        "smiles": "OCc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A tertiary alcohol is disconnected retrosynthetically at one of the three carbon-carbon bonds to the carbinol carbon: the fragment removed becomes the Grignard reagent and the rest becomes the ketone. 2-Phenylpropan-2-ol has phenyl, methyl and methyl on that carbon, so two ketone-plus-Grignard pairs work: acetophenone with methylmagnesium bromide, or acetone with phenylmagnesium bromide. Only the first is offered.",
      "approach": "Step 1: Draw the target and mark the carbinol carbon: C(OH)(CH3)(CH3)(C6H5).\nStep 2: Disconnect a methyl: the ketone left is acetophenone, C6H5COCH3, and the reagent is CH3MgBr.\nStep 3: Check the forward reaction: methyl adds to the acetophenone carbonyl, the alkoxide is protonated on workup, and the product is 2-phenylpropan-2-ol.\nStep 4: The alternative disconnection, phenyl, gives acetone plus PhMgBr; it is also correct but not listed.",
      "note": "A third route reaches the same alcohol from an ester: ethyl benzoate with two equivalents of methylmagnesium bromide adds methyl twice and gives the identical product. Any tertiary alcohol with two identical groups on the carbinol carbon can be made that way, which is worth remembering when only the ester is at hand.",
      "options": {
        "A": "Correct. Methyl adds to the acetophenone carbonyl to give a carbinol carbon bearing phenyl and two methyls.",
        "B": "Benzaldehyde plus methylmagnesium bromide gives 1-phenylethanol, a secondary alcohol; an aldehyde has only one carbon substituent to bring to the carbinol carbon.",
        "C": "Benzophenone plus methylmagnesium bromide gives 1,1-diphenylethanol; two phenyls and one methyl, not one phenyl and two methyls.",
        "D": "Benzyl alcohol has an acidic O-H and no carbonyl; the Grignard reagent is simply protonated to methane and the alkoxide forms. No carbon-carbon bond is made."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A carbon bearing an OH group, two methyl groups and a benzene ring."
  },
  {
    "question_id": "ch17_q26_grignard_ester",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Medium",
    "question_text": "What is the product when methyl formate is treated with excess methylmagnesium bromide (2 equivalents) followed by hydronium workup?",
    "question_smiles": "O=COC",
    "options": [
      {
        "option_id": "A",
        "text": "Propan-2-ol",
        "smiles": "CC(O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-methylpropan-2-ol",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethanol",
        "smiles": "CCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propanal",
        "smiles": "CCC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An ester reacts with two equivalents of a Grignard reagent. The first addition gives a tetrahedral intermediate that expels the alkoxide to form a ketone, or, for a formate ester, an aldehyde; that carbonyl is more reactive than the ester and is attacked at once by a second Grignard. Ordinary esters therefore give tertiary alcohols with two identical R groups, and formates, whose carbonyl carries a hydrogen, give secondary alcohols with two identical R groups.",
      "approach": "Step 1: Methyl formate, HCO2CH3: the carbonyl carbon bears H and OCH3.\nStep 2: First CH3MgBr adds; the intermediate loses methoxide to give acetaldehyde, CH3CHO.\nStep 3: Second CH3MgBr adds to acetaldehyde: the isopropoxide ion, (CH3)2CH-O-.\nStep 4: Acidic workup: propan-2-ol, a secondary alcohol with two identical methyls on the carbinol carbon.",
      "note": "The aldehyde intermediate cannot be isolated by using only one equivalent of Grignard: it reacts faster than the ester it came from, so half the ester is left over and the other half goes all the way. The same pattern with an ordinary ester, ethyl acetate plus two equivalents of CH3MgBr, gives tert-butyl alcohol.",
      "options": {
        "A": "Correct. Two methyls add in succession to the formate carbon, which keeps its hydrogen, so the product is the secondary alcohol propan-2-ol.",
        "B": "2-Methylpropan-2-ol has three methyls on the carbinol carbon; that requires an acetate ester, whose carbonyl already carries a methyl, not a formate that carries a hydrogen.",
        "C": "Ethanol would be a reduction product; a Grignard reagent adds carbon, it does not deliver hydride, and each addition lengthens the chain.",
        "D": "Propanal has its carbonyl at the end of a three-carbon chain; the Grignard adds its methyl to the formate carbon, so the oxygen ends up on the central carbon, not a terminal one."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A formate ester: a carbonyl carbon bearing a hydrogen, bonded to an oxygen that carries a methyl group."
  },
  {
    "question_id": "ch17_q27_grignard_compatibility",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Hard",
    "question_text": "Which of the following compounds CANNOT be used to prepare a Grignard reagent directly, due to functional group incompatibility?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "4-bromocyclohexanol",
        "smiles": "OC1CCC(Br)CC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-bromobutane",
        "smiles": "CCCCBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-bromotoluene",
        "smiles": "Cc1ccc(Br)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Bromobenzene",
        "smiles": "c1ccc(Br)cc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Grignard reagent is a carbanion equivalent and one of the strongest bases in routine use; the conjugate acid of a carbanion has a pKa near 50. Any proton more acidic than that, an O-H, N-H, S-H or terminal alkyne C-H, will protonate the reagent as fast as it forms. A molecule that carries both a C-Br and an O-H therefore cannot be converted to a Grignard reagent: each molecule of RMgBr formed is destroyed by the hydroxyl of another.",
      "approach": "Step 1: Scan each halide for acidic hydrogens.\nStep 2: 1-Bromobutane, 4-bromotoluene and bromobenzene have only C-H bonds on sp3 or aromatic carbons, none acidic; all three form Grignard reagents cleanly.\nStep 3: 4-Bromocyclohexanol carries an OH with pKa about 17, some thirty units more acidic than the carbanion.\nStep 4: Magnesium inserts, the new C-Mg bond is protonated by a neighbouring OH, and the yield is cyclohexanol and magnesium alkoxide: 4-bromocyclohexanol cannot be used directly.",
      "note": "The remedy is to mask the OH as a silyl ether first, make the Grignard reagent, use it, and remove the silyl group with fluoride, which is the protecting-group strategy this chapter introduces. The same incompatibility rules out carbonyl, nitrile and nitro groups in the halide, for a different reason: those are electrophiles the reagent would attack.",
      "options": {
        "A": "Correct. The hydroxyl proton is far more acidic than a carbanion's conjugate acid, so any Grignard reagent formed is protonated immediately by another molecule's OH.",
        "B": "1-Bromobutane has no acidic hydrogen and gives butylmagnesium bromide in high yield; it is the textbook primary alkyl Grignard.",
        "C": "The benzylic C-H of 4-bromotoluene is not acidic enough to matter (pKa about 41, still far above an alkoxide's), and 4-methylphenylmagnesium bromide forms normally.",
        "D": "Bromobenzene forms phenylmagnesium bromide in ether; aromatic C-H bonds are not acidic and the reagent is stable."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q28_grignard_epoxide",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Medium",
    "question_text": "What is the major product obtained from the reaction of phenylmagnesium bromide with methyloxirane (propylene oxide), followed by acidic workup?",
    "question_smiles": "CC1CO1",
    "options": [
      {
        "option_id": "A",
        "text": "1-phenylpropan-2-ol",
        "smiles": "CC(O)Cc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-phenylpropan-1-ol",
        "smiles": "OCC(C)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-phenylpropan-1-ol",
        "smiles": "OCCCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-phenylpropan-1-ol",
        "smiles": "CCC(O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Grignard reagent opens an epoxide by SN2 attack, and like any SN2 reaction it prefers the less hindered carbon. On methyloxirane that is the unsubstituted CH2. The carbon-oxygen bond at that carbon breaks, the alkoxide is left on the more substituted carbon, and workup gives an alcohol whose OH is two carbons from the new carbon-carbon bond. This is the standard two-carbon chain extension of the chapter.",
      "approach": "Step 1: Phenyl carbanion equivalent attacks C1 of methyloxirane, the CH2, from the back; the C1-O bond breaks.\nStep 2: The oxygen is now an alkoxide on C2, the carbon that carries the methyl.\nStep 3: Aqueous acid protonates it.\nStep 4: The product is PhCH2-CH(OH)-CH3: 1-phenylpropan-2-ol, with the phenyl on the terminal carbon and the OH on the middle one.",
      "note": "The regiochemistry flips under acid: with a weak nucleophile and an acid catalyst, the protonated epoxide opens at the more substituted carbon, whose partial positive charge is better stabilised. Strong nucleophiles under basic or neutral conditions, Grignard reagents, alkoxides, cyanide, hydride, always take the less hindered end.",
      "options": {
        "A": "Correct. Backside attack at the unsubstituted CH2 of the epoxide leaves the oxygen on the methyl-bearing carbon: 1-phenylpropan-2-ol.",
        "B": "2-Phenylpropan-1-ol has the phenyl on the substituted carbon, the acid-catalysed regiochemistry with a weak nucleophile; a Grignard reagent attacks the less hindered carbon instead.",
        "C": "3-Phenylpropan-1-ol would put the phenyl on the methyl carbon, which was never bonded to oxygen and is not electrophilic; that alcohol comes from ethylene oxide with benzylmagnesium bromide.",
        "D": "1-Phenylpropan-1-ol is the product of phenylmagnesium bromide with propanal, an aldehyde; an epoxide opening puts the OH on the carbon adjacent to the one attacked, not on it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-membered ring containing an oxygen atom, with a methyl group on one of the two ring carbons: a monosubstituted epoxide."
  },
  {
    "question_id": "ch17_q30_retrosynthesis_grignard",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Hard",
    "question_text": "Which of the following starting materials and Grignard reagent combinations will yield 3-methylpentan-3-ol after acidic workup?",
    "question_smiles": "CCC(O)(C)CC",
    "options": [
      {
        "option_id": "A",
        "text": "Pentan-3-one and methylmagnesium bromide",
        "smiles": "CCC(=O)CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Pentan-2-one and ethylmagnesium bromide",
        "smiles": "CCCC(=O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-Methylpentan-2-one and methylmagnesium bromide",
        "smiles": "CCC(C)C(=O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propan-2-one and ethylmagnesium bromide",
        "smiles": "CC(=O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Working backward from a tertiary alcohol, each carbon-carbon bond to the carbinol carbon is a possible last step: the group removed is the Grignard reagent and what remains, with the OH turned into C=O, is the ketone. 3-Methylpentan-3-ol has two ethyls and one methyl on C3, so removing the methyl leaves pentan-3-one, and removing an ethyl leaves butan-2-one. Every wrong pairing here assembles a different carbon skeleton.",
      "approach": "Step 1: Draw the target: CH3CH2-C(OH)(CH3)-CH2CH3, carbinol carbon C3 with ethyl, ethyl, methyl.\nStep 2: Disconnect the methyl: pentan-3-one + CH3MgBr.\nStep 3: Disconnect an ethyl: butan-2-one + CH3CH2MgBr, also valid but not offered.\nStep 4: Check the offered pairs by counting: pentan-3-one (C5) plus methyl (C1) gives the C6 target with the right substitution. Pentan-3-one and methylmagnesium bromide.",
      "note": "An ester route also works, because two of the three groups are identical: ethyl acetate with two equivalents of ethylmagnesium bromide adds ethyl twice to the acetyl carbon and gives the same 3-methylpentan-3-ol. The rule is that a tertiary alcohol with two identical R groups can come from an ester, and one with three identical R groups must.",
      "options": {
        "A": "Correct. Methyl adds to the symmetrical ketone pentan-3-one, giving a carbinol carbon that carries two ethyls and a methyl.",
        "B": "Pentan-2-one plus ethylmagnesium bromide gives 3-methylhexan-3-ol, a seven-carbon alcohol with methyl, ethyl and propyl on the carbinol carbon.",
        "C": "3-Methylpentan-2-one plus methylmagnesium bromide gives 2,3-dimethylpentan-2-ol: the branch on C3 is kept and the carbinol carbon ends up with two methyls and a sec-butyl group.",
        "D": "Acetone plus ethylmagnesium bromide gives 2-methylbutan-2-ol, one carbon short, with two methyls and one ethyl on the carbinol carbon."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A carbon bearing an OH group, a methyl group and two ethyl groups."
  },
  {
    "question_id": "ch17_q31_formaldehyde_grignard",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Easy",
    "question_text": "To synthesize a primary alcohol with the addition of exactly one carbon atom, which electrophile should be reacted with a Grignard reagent?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Formaldehyde",
        "smiles": "O=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetaldehyde",
        "smiles": "CC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethylene oxide",
        "smiles": "C1CO1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Carbon dioxide",
        "smiles": "O=C=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The class of alcohol a Grignard reaction gives is set by the electrophile. Formaldehyde, with two hydrogens on the carbonyl, gives a primary alcohol RCH2OH, one carbon longer than R. Any other aldehyde gives a secondary alcohol, a ketone gives a tertiary one, ethylene oxide gives a primary alcohol two carbons longer, and carbon dioxide gives a carboxylic acid. Adding exactly one carbon to make a primary alcohol is formaldehyde's job alone.",
      "approach": "Step 1: Write the requirement: R-MgX to R-CH2-OH, a one-carbon primary alcohol extension.\nStep 2: The electrophilic carbon must carry two hydrogens and an oxygen: H2C=O, formaldehyde.\nStep 3: Addition gives R-CH2-O- MgX+; workup gives R-CH2-OH.\nStep 4: Formaldehyde.",
      "note": "Formaldehyde is used as the gas cracked from paraformaldehyde, or as its trimer, because the aqueous solution would destroy the Grignard reagent. The one-carbon extension has a partner at the other oxidation level: carbon dioxide, which also adds one carbon but delivers an acid rather than an alcohol.",
      "options": {
        "A": "Correct. Formaldehyde's carbonyl carbon carries two hydrogens, so adding R to it gives RCH2OH, a primary alcohol with one added carbon.",
        "B": "Acetaldehyde gives a secondary alcohol, RCH(OH)CH3, and adds two carbons; the methyl on its carbonyl becomes a substituent on the carbinol carbon.",
        "C": "Ethylene oxide gives a primary alcohol, but a two-carbon extension, RCH2CH2OH: the ring opens at one carbon and the oxygen stays on the other.",
        "D": "Carbon dioxide adds one carbon but gives a carboxylic acid, RCO2H, after workup, not an alcohol."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q32_ethylene_oxide_grignard",
    "topic": "preparation of alcohols (reduction of aldehydes/ketones/esters/carboxylic acids, Grignard reaction mechanisms and synthesis)",
    "difficulty_level": "Medium",
    "question_text": "A chemist wants to synthesize 2-phenylethanol starting from bromobenzene. Which sequence of reagents is correct?",
    "question_smiles": "c1ccc(Br)cc1",
    "options": [
      {
        "option_id": "A",
        "text": "1. Mg, ether\n2. Ethylene oxide\n3. H3O+",
        "smiles": "OCCc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1. Mg, ether\n2. Formaldehyde\n3. H3O+",
        "smiles": "OCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1. Mg, ether\n2. Acetaldehyde\n3. H3O+",
        "smiles": "CC(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1. NaOH, H2O, heat\n2. Ethylene oxide\n3. H3O+",
        "smiles": "OCCOc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "2-Phenylethanol is a primary alcohol with two carbons between the ring and the OH, so the ring carbon must gain a two-carbon unit ending in oxygen. Phenylmagnesium bromide opening ethylene oxide does exactly that: the carbanion attacks one CH2 of the epoxide, the ring opens, and the alkoxide on the other CH2 is protonated on workup. Formaldehyde would add one carbon; acetaldehyde would give a secondary alcohol.",
      "approach": "Step 1: Bromobenzene plus magnesium in dry ether: phenylmagnesium bromide.\nStep 2: Add ethylene oxide: phenyl attacks a ring CH2, the strained C-O bond breaks, and the product is PhCH2CH2O- MgBr+.\nStep 3: Dilute aqueous acid protonates the alkoxide.\nStep 4: 2-Phenylethanol. Sequence A.",
      "note": "Ethylene oxide is the reagent for a two-carbon primary extension in the same way formaldehyde is for one carbon; keeping the two straight is the whole of this item. The epoxide must be added to the Grignard reagent, not the reverse, and the reaction is run cold because ethylene oxide boils at 11 °C.",
      "options": {
        "A": "Correct. The Grignard reagent opens ethylene oxide to a two-carbon alkoxide on the ring, and workup gives the primary alcohol PhCH2CH2OH.",
        "B": "Formaldehyde adds a single carbon: the product is benzyl alcohol, PhCH2OH, one CH2 short of the target.",
        "C": "Acetaldehyde gives 1-phenylethanol, a secondary alcohol with the OH on the carbon attached to the ring; the carbon count is right but the connectivity is not.",
        "D": "Hydroxide does not displace bromide from an unactivated aryl halide under these conditions, and even the phenoxide that route imagines would attack ethylene oxide through oxygen to give the ether 2-phenoxyethanol, not a carbon-carbon bond."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing a bromine atom."
  },
  {
    "question_id": "ch17_q33_socl2_mechanism",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Hard",
    "question_text": "What is the stereochemical outcome of the reaction of (R)-butan-2-ol with thionyl chloride (SOCl2) in the presence of pyridine?",
    "question_smiles": "CC[C@H](O)C",
    "options": [
      {
        "option_id": "A",
        "text": "Inversion of configuration, yielding (S)-2-chlorobutane",
        "smiles": "CC[C@@H](Cl)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Retention of configuration, yielding (R)-2-chlorobutane",
        "smiles": "CC[C@H](Cl)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Racemization, yielding a 1:1 mixture of (R)- and (S)-2-chlorobutane",
        "smiles": "CC(Cl)CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Elimination, yielding primarily (E)-but-2-ene",
        "smiles": "C/C=C/C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Thionyl chloride converts an alcohol to an alkyl chlorosulfite, ROS(O)Cl, an excellent leaving group; with pyridine present the HCl released is captured as pyridinium chloride, and the free chloride ion then displaces the chlorosulfite by an SN2 attack from the back. Because the carbon-oxygen bond of the stereocentre breaks in that backside attack, the configuration inverts. (R)-Butan-2-ol gives (S)-2-chlorobutane.",
      "approach": "Step 1: The alcohol oxygen attacks sulfur; loss of chloride gives the chlorosulfite ester. The C-O bond is untouched, so this step keeps the configuration.\nStep 2: Pyridine removes the O-H proton, generating pyridinium chloride: a source of nucleophilic chloride.\nStep 3: Chloride attacks the secondary carbon from the side opposite the OS(O)Cl group, which leaves as SO2 and Cl-.\nStep 4: Inversion. Priorities are Cl > ethyl > methyl > H in the product and OH > ethyl > methyl > H in the alcohol, the same order, so the descriptor flips: (S)-2-chlorobutane.",
      "note": "Run without pyridine in an ether solvent, thionyl chloride can deliver chloride from the departing chlorosulfite on the same face, the SNi pathway, and retention is observed; the pyridine is what makes the reaction cleanly SN2. The exam-level rule is that SOCl2 and PBr3 both proceed with inversion, and this item, with pyridine specified, sits squarely on it.",
      "options": {
        "A": "Correct. Chloride displaces the chlorosulfite group by backside attack; the stereocentre inverts, and with the same priority order in reactant and product the label changes from (R) to (S).",
        "B": "Retention is the SNi outcome seen without pyridine in dioxane, when chloride is delivered from the leaving group on the front face; with pyridine present, free chloride attacks from the back.",
        "C": "Racemisation needs a planar carbocation, which a secondary alcohol does not form under these neutral conditions; the substitution is concerted and stereospecific.",
        "D": "Pyridine is too weak and too hindered a base to drive E2 on a secondary substrate, and the chlorosulfite is displaced faster than it eliminates; but-2-ene is at most a trace."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with an OH on the second carbon, drawn with a wedge or dash bond to show a single enantiomer."
  },
  {
    "question_id": "ch17_q34_pbr3_stereochem",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Medium",
    "question_text": "What is the major product when trans-2-methylcyclohexan-1-ol is treated with PBr3 in ether at 0 °C?",
    "question_smiles": "C[C@@H]1CCCC[C@H]1O",
    "options": [
      {
        "option_id": "A",
        "text": "cis-1-Bromo-2-methylcyclohexane",
        "smiles": "C[C@@H]1CCCC[C@@H]1Br",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "trans-1-Bromo-2-methylcyclohexane",
        "smiles": "C[C@@H]1CCCC[C@H]1Br",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Bromo-1-methylcyclohexane",
        "smiles": "CC1(Br)CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Methylcyclohexene",
        "smiles": "CC1=CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Phosphorus tribromide turns a hydroxyl into a dibromophosphite group, -OPBr2, which bromide then displaces by SN2. The nucleophile comes in from the face opposite the leaving group, so the carbon that carried the OH is inverted. On a ring that inversion is visible: a bromine that replaces a trans OH ends up cis to the neighbouring methyl. No carbocation forms, so the secondary centre cannot rearrange to the tertiary one next door.",
      "approach": "Step 1: The alcohol oxygen attacks phosphorus and displaces one bromide: R-O-PBr2, with the ring carbon still in the trans configuration.\nStep 2: Bromide attacks the carbinol carbon from the face opposite the OPBr2 group.\nStep 3: The C-O bond breaks as the C-Br bond forms; the stereocentre inverts. OH was trans to the methyl, so Br is cis.\nStep 4: Product: cis-1-bromo-2-methylcyclohexane, as a racemate.",
      "note": "HBr on the same alcohol would go by SN1: the secondary cation shifts a hydride from the adjacent carbon to become tertiary and the product is 1-bromo-1-methylcyclohexane. That contrast, rearrangement and mixed stereochemistry with HX against clean inversion with PBr3 or SOCl2, is the reason the phosphorus and sulfur reagents exist.",
      "options": {
        "A": "Correct. SN2 displacement of the dibromophosphite group by bromide inverts the carbinol carbon, turning the trans relationship of OH and methyl into a cis relationship of Br and methyl.",
        "B": "The trans bromide would mean the bromine took the place of the OH on the same face, retention; SN2 attack from the back face gives the opposite configuration.",
        "C": "1-Bromo-1-methylcyclohexane is the SN1 product with HBr, reached by a hydride shift to the tertiary cation; PBr3 forms no cation and the bromine stays on the carbon that held the OH.",
        "D": "Elimination to the alkene needs acid and heat, or POCl3 with pyridine; with PBr3 the phosphite is displaced by bromide far faster than it is eliminated."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A cyclohexane ring with an OH group on one carbon and a methyl group on the adjacent carbon, the two drawn with wedge and dash bonds on opposite faces of the ring."
  },
  {
    "question_id": "ch17_q35_hx_tertiary",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Medium",
    "question_text": "When 2-methylpropan-2-ol is treated with concentrated hydrochloric acid (HCl) at room temperature, what is the major organic product and the mechanism of its formation?",
    "question_smiles": "CC(C)(C)O",
    "options": [
      {
        "option_id": "A",
        "text": "2-Chloro-2-methylpropane via an SN1 mechanism",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Chloro-2-methylpropane via an SN2 mechanism",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Methylprop-1-ene via an E2 mechanism",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Chloro-2-methylpropane via an SN2 mechanism",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A hydrogen halide converts a tertiary alcohol to a tertiary halide at room temperature, and it does so by SN1. The acid protonates the OH to make water a leaving group, water departs to give the tert-butyl cation, and chloride captures it. Substitution by SN2 is impossible at a carbon bearing three alkyl groups, and the acidic medium contains no base strong enough for E2.",
      "approach": "Step 1: Protonation of 2-methylpropan-2-ol by HCl: an oxonium ion, R3C-OH2+.\nStep 2: Loss of water gives the tertiary carbocation; this is the slow step, fast for a tertiary centre.\nStep 3: Chloride adds to the cation.\nStep 4: 2-Chloro-2-methylpropane, by SN1. Tertiary alcohols react with concentrated HCl in minutes at room temperature; primary ones need zinc chloride and heat.",
      "note": "This reaction is the Lucas test: concentrated HCl with ZnCl2 turns cloudy at once with a tertiary alcohol, within minutes with a secondary one, and not at all with a primary one at room temperature, because the insoluble alkyl chloride separates as fast as the carbocation can form. Some alkene forms reversibly by E1, but under concentrated HCl it re-adds the acid and ends up as the same chloride.",
      "options": {
        "A": "Correct. Protonation, loss of water to the stable tert-butyl cation, and capture by chloride: SN1 at a tertiary centre.",
        "B": "The product is right but the mechanism cannot be: backside attack at a carbon with three alkyl groups is blocked, and tertiary substrates never react by SN2.",
        "C": "Alkene formation would be E1 through the same cation, not E2, which needs a strong base; and in concentrated HCl the alkene simply adds HCl back to give the chloride.",
        "D": "A primary chloride would require the chloride to bond to a methyl carbon that never bore the oxygen; the carbon that loses water is the one that gains the chlorine, and no rearrangement leads away from a tertiary cation."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A carbon carrying three methyl groups and a hydroxyl group."
  },
  {
    "question_id": "ch17_q36_lucas_test",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Easy",
    "question_text": "The Lucas reagent (ZnCl2 in concentrated HCl) is used to distinguish between primary, secondary, and tertiary alcohols. Which alcohol will react fastest, resulting in immediate turbidity?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "2-methylpropan-2-ol",
        "smiles": "CC(C)(C)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "butan-2-ol",
        "smiles": "CCC(O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "butan-1-ol",
        "smiles": "CCCCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "ethanol",
        "smiles": "CCO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Lucas reagent, zinc chloride in concentrated hydrochloric acid, converts alcohols to alkyl chlorides by SN1; the zinc coordinates the oxygen and makes water a better leaving group. The alkyl chloride is insoluble and clouds the solution, and the time it takes to appear reports the stability of the carbocation: tertiary in seconds, secondary in a few minutes, primary not at all at room temperature.",
      "approach": "Step 1: Classify each alcohol: 2-methylpropan-2-ol tertiary, butan-2-ol secondary, butan-1-ol and ethanol primary.\nStep 2: The rate-determining step is carbocation formation, so the rate order is tertiary > secondary > primary.\nStep 3: The tertiary alcohol forms the tert-butyl cation immediately and 2-chloro-2-methylpropane separates at once.\nStep 4: Immediate turbidity: 2-methylpropan-2-ol.",
      "note": "Allylic and benzylic alcohols also react at once, because their cations are resonance-stabilised, so a fast Lucas test does not by itself prove a tertiary centre. The test only works on alcohols small enough to dissolve in the reagent, about six carbons or fewer; larger ones are already insoluble and cloud the mixture before anything reacts.",
      "options": {
        "A": "Correct. The tertiary alcohol ionises to the tert-butyl cation as soon as it is protonated, and the chloride that forms clouds the solution immediately.",
        "B": "Butan-2-ol forms a secondary cation, slower to form; the cloudiness appears after several minutes, which is the test's signature for a secondary alcohol.",
        "C": "Butan-1-ol would need a primary cation and gives no cloudiness at room temperature; heating is required to see any reaction.",
        "D": "Ethanol, primary and small, does not react with the Lucas reagent at room temperature and the solution stays clear."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q37_hx_rearrangement",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product of the reaction of 3-methylbutan-2-ol with concentrated hydrobromic acid (HBr)?",
    "question_smiles": "CC(C)C(O)C",
    "options": [
      {
        "option_id": "A",
        "text": "2-Bromo-2-methylbutane",
        "smiles": "CCC(C)(C)Br",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Bromo-3-methylbutane",
        "smiles": "CC(C)C(Br)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Bromo-3-methylbutane",
        "smiles": "CC(C)CCBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Methylbut-2-ene",
        "smiles": "CC=C(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A secondary alcohol reacts with concentrated HBr by SN1, and a secondary carbocation next to a tertiary carbon does not wait for bromide: a hydride shifts from the adjacent CH to the cationic carbon, converting the secondary cation to a tertiary one. Bromide then captures the rearranged cation, so the bromine ends up on a carbon that never carried the OH. The skeleton is unchanged; only the positions of one hydrogen and the functional group have moved.",
      "approach": "Step 1: Protonate 3-methylbutan-2-ol and lose water: a secondary cation at C2, next to C3 which bears a hydrogen and two methyls.\nStep 2: 1,2-Hydride shift from C3 to C2: the positive charge moves to C3, now tertiary. Renumbered, this is the 2-methylbutan-2-yl cation.\nStep 3: Bromide adds to the tertiary carbon.\nStep 4: 2-Bromo-2-methylbutane is the major product.",
      "note": "The unrearranged bromide is made cleanly from the same alcohol with PBr3, which substitutes by SN2 with no cation and therefore no shift, and that pairing, HX rearranges and PBr3 or SOCl2 does not, is the point of this section. Whenever an alcohol carbon sits next to a more substituted carbon, expect the shift with HX.",
      "options": {
        "A": "Correct. The initial secondary cation rearranges by a hydride shift to the tertiary cation, and bromide adds there.",
        "B": "2-Bromo-3-methylbutane is the unrearranged product, the one PBr3 gives; under SN1 conditions the secondary cation shifts before bromide arrives.",
        "C": "A primary bromide would require the OH carbon's cation to move toward a less stable, primary position, which never happens; shifts go toward the more substituted carbon.",
        "D": "The tertiary cation does lose a proton to give 2-methylbut-2-ene, but in concentrated HBr the alkene re-adds the acid (Markovnikov) and returns to the same tertiary bromide; the halide is the isolated product."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with an OH group on the second carbon and a methyl branch on the third carbon."
  },
  {
    "question_id": "ch17_q38_tosylate_stereochem",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Hard",
    "question_text": "An alcohol undergoes two sequential steps: 1. Treatment with p-toluenesulfonyl chloride (TsCl) in pyridine. 2. Treatment with sodium cyanide (NaCN) in DMSO. What is the stereochemical configuration of the final product starting from (S)-butan-2-ol?",
    "question_smiles": "CC[C@@H](O)C",
    "options": [
      {
        "option_id": "A",
        "text": "(R)-2-methylbutanenitrile, because step 1 occurs with retention of configuration, and step 2 occurs with inversion of configuration.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(S)-2-methylbutanenitrile, because both steps occur with retention of configuration.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(S)-2-methylbutanenitrile, because step 1 occurs with inversion and step 2 occurs with retention of configuration.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A racemic mixture, because step 1 involves a planar carbocation intermediate.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Making a tosylate does not touch the carbon-oxygen bond: the alcohol oxygen attacks the sulfur of TsCl and only the O-H bond is broken, so the stereocentre is untouched and its configuration retained. The tosylate is then a superb leaving group, and cyanide displaces it by SN2 with inversion. The net result over two steps is inversion, and because the priorities keep the same order (CN, like OTs and OH, outranks ethyl and methyl), (S) becomes (R).",
      "approach": "Step 1: (S)-Butan-2-ol + TsCl, pyridine: the oxygen bonds to sulfur, the O-H proton is lost, the C-O bond is intact. (S)-butan-2-yl tosylate, retention.\nStep 2: NaCN in DMSO: cyanide attacks the secondary carbon from the side opposite the tosylate; TsO- leaves.\nStep 3: The carbon is inverted. Product: 2-methylbutanenitrile.\nStep 4: Assign: CN (carbon bearing N,N,N) > ethyl > methyl > H, the same ranking positions OTs occupied, so the inverted centre is (R). (R)-2-methylbutanenitrile.",
      "note": "This is the standard way to get a clean inversion at an alcohol carbon, and the standard way to avoid it is to make the halide with PBr3 (inversion) and then displace again (a second inversion, net retention). Whether the descriptor letter changes on inversion depends on the priorities; here it does because the incoming group outranks the alkyls just as the leaving group did.",
      "options": {
        "A": "Correct. Tosylation retains the configuration because the C-O bond is never broken; the SN2 displacement by cyanide inverts it, and with unchanged priority order (S) becomes (R).",
        "B": "Two retentions would need both steps to leave the stereocentre alone, but the SN2 step breaks the C-O bond by backside attack and must invert.",
        "C": "The roles are reversed: tosylation is the retention step (only O-H breaks) and the cyanide displacement is the inversion step (C-O breaks from the back).",
        "D": "Neither step forms a carbocation. Tosylation happens at oxygen, and cyanide in DMSO displaces the secondary tosylate by a concerted SN2, so the product is a single enantiomer, not a racemate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Butan-2-ol drawn with the hydroxyl on a wedged or dashed bond so that one enantiomer is shown."
  },
  {
    "question_id": "ch17_q39_dehydration_e1",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the acid-catalyzed dehydration of 2-methylpentan-3-ol using concentrated sulfuric acid and heat?",
    "question_smiles": "CCCC(O)C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "2-Methylpent-2-ene",
        "smiles": "CCC=C(C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(E)-4-Methylpent-2-ene",
        "smiles": "C/C=C/C(C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Methylpent-1-ene",
        "smiles": "CCCC(=C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(E)-3-Methylpent-2-ene",
        "smiles": "CC/C(C)=C/C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Acid-catalysed dehydration of a secondary alcohol is E1: protonation, loss of water to a carbocation, and loss of a beta proton to give the more substituted alkene (Zaitsev). When the cation sits next to a tertiary carbon it can also shift a hydride to become tertiary first. For 2-methylpentan-3-ol both paths lead to the same alkene: removing the C2 hydrogen from the unshifted C3 cation, or removing the C3 hydrogen after the shift to C2, gives the trisubstituted 2-methylpent-2-ene.",
      "approach": "Step 1: Protonate the OH and lose water: a secondary cation at C3, flanked by C2 (a CH bearing a methyl) and C4 (a CH2).\nStep 2: Count the alkenes available. Loss of H from C2 gives 2-methylpent-2-ene (trisubstituted); loss of H from C4 gives 4-methylpent-2-ene (disubstituted).\nStep 3: The alternative, a hydride shift from C2 to C3, gives the tertiary cation at C2; its Zaitsev product, from loss of the C3 hydrogen, is again 2-methylpent-2-ene.\nStep 4: The trisubstituted alkene is the major product either way: 2-methylpent-2-ene.",
      "note": "The alkene that carries no E/Z label is the answer for a reason: one of its alkene carbons bears two methyls, so it has no geometric isomers, whereas the disubstituted alternatives do. POCl3 with pyridine on the same alcohol goes by E2 and gives the same major alkene here, but on a substrate where rearrangement changes the skeleton the two reagents part company.",
      "options": {
        "A": "Correct. The trisubstituted alkene, reached by loss of the C2 hydrogen from the secondary cation or via the tertiary cation after a hydride shift; both routes converge on it.",
        "B": "4-Methylpent-2-ene is the disubstituted alkene from loss of a C4 hydrogen; it forms as the minor product because it is less stable than the trisubstituted isomer.",
        "C": "2-Methylpent-1-ene is the disubstituted, terminal alkene from the tertiary cation losing a methyl hydrogen; the Zaitsev preference for the internal, trisubstituted alkene relegates it to a minor product.",
        "D": "3-Methylpent-2-ene has the methyl branch on C3, a different skeleton; making it would need a methyl shift that converts a secondary cation into another secondary cation, which does not compete with the hydride shift to a tertiary one."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-carbon chain with an OH group on the third carbon and a methyl branch on the second carbon."
  },
  {
    "question_id": "ch17_q40_pinacol_rearrangement",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product when 2,3-dimethylbutane-2,3-diol (pinacol) is treated with warm aqueous sulfuric acid?",
    "question_smiles": "CC(C)(O)C(O)(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "3,3-dimethylbutan-2-one (pinacolone)",
        "smiles": "CC(=O)C(C)(C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2,3-dimethylbuta-1,3-diene",
        "smiles": "C=C(C)C(=C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,3-dimethylbut-2-ene",
        "smiles": "CC(C)=C(C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-methylpentan-2-one",
        "smiles": "CCC(C)C(=O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A vicinal diol in acid loses one hydroxyl as water to form a carbocation, and the carbon next door, still carrying an OH, then donates an alkyl group to it. The shift is favourable because the cation left behind sits on the carbon bearing oxygen and is stabilised by the oxygen lone pair; it is really a protonated ketone. Loss of the O-H proton gives the ketone. The overall change is a diol to a ketone with a rearranged skeleton: the pinacol rearrangement.",
      "approach": "Step 1: Protonate one OH of pinacol and lose water: a tertiary cation on C2, with C3 still carrying OH and two methyls.\nStep 2: A methyl migrates from C3 to C2. The positive charge moves to C3, where it is delocalised onto oxygen as an oxocarbenium ion.\nStep 3: Deprotonate the oxygen: a C=O forms at C3.\nStep 4: The product has three methyls on one carbon and an acetyl group on it: 3,3-dimethylbutan-2-one, pinacolone.",
      "note": "The reaction is beyond McMurry's own alcohol chapter but inside ACS scope, and it is worth knowing as the diol counterpart of the hydride and alkyl shifts of this chapter: the same 1,2-shift, driven here by forming a resonance-stabilised cation on oxygen. Simple E1 dehydration of the diol does not compete because the shift to the oxocarbenium ion is faster than proton loss.",
      "options": {
        "A": "Correct. Loss of water, a 1,2-methyl shift to the cation that leaves the charge on the oxygen-bearing carbon, and deprotonation give pinacolone.",
        "B": "2,3-Dimethylbuta-1,3-diene would require both hydroxyls to leave as water with no rearrangement; the methyl shift to the oxocarbenium ion is faster than a second dehydration.",
        "C": "2,3-Dimethylbut-2-ene has lost both oxygens and gained no carbonyl; that is a double dehydration, not what acid does to a 1,2-diol.",
        "D": "3-Methylpentan-2-one has an ethyl group that was not in the starting material; a 1,2-shift moves an existing methyl and cannot join two methyls into an ethyl."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two adjacent carbons, each bearing an OH group and two methyl groups."
  },
  {
    "question_id": "ch17_q41_pocl3_dehydration",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Hard",
    "question_text": "What is the major alkene product when 3,3-dimethylbutan-2-ol is treated with phosphorus oxychloride (POCl3) in pyridine at 0 °C?",
    "question_smiles": "CC(C)(C)C(O)C",
    "options": [
      {
        "option_id": "A",
        "text": "3,3-Dimethylbut-1-ene",
        "smiles": "CC(C)(C)C=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2,3-Dimethylbut-2-ene",
        "smiles": "CC(C)=C(C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,3-Dimethylbut-1-ene",
        "smiles": "CC(C)C(=C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Chloro-3,3-dimethylbutane",
        "smiles": "CC(C)(C)C(Cl)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Phosphorus oxychloride in pyridine dehydrates an alcohol without ever forming a carbocation. The alcohol is converted to a dichlorophosphate ester, a good leaving group, and pyridine removes a beta hydrogen in a concerted E2 step as the phosphate departs. With no cation, no methyl shift can occur, so the alkene has the original skeleton, and with no acid, no re-addition follows. For 3,3-dimethylbutan-2-ol the only beta hydrogens are on C1, so the only alkene possible is 3,3-dimethylbut-1-ene.",
      "approach": "Step 1: The OH attacks POCl3 and loses chloride: R-O-POCl2, the dichlorophosphate.\nStep 2: Find the beta hydrogens. C3 is quaternary and has none; C1, a methyl, has three.\nStep 3: Pyridine removes a C1 hydrogen anti to the leaving group as the C2-O bond breaks: E2.\nStep 4: 3,3-Dimethylbut-1-ene, with the tert-butyl group intact.",
      "note": "Sulfuric acid on the same alcohol gives the opposite result: the C2 cation shifts a methyl from C3, becomes tertiary, and loses a proton to give 2,3-dimethylbut-2-ene as the major product with 2,3-dimethylbut-1-ene as the minor one. When the question is which reagent to choose, this substrate is the cleanest possible test: E2 keeps the skeleton, E1 rearranges it.",
      "options": {
        "A": "Correct. E2 elimination through the dichlorophosphate ester, with the only available beta hydrogens on the methyl carbon and no carbocation to rearrange.",
        "B": "2,3-Dimethylbut-2-ene is the acid-catalysed E1 product, formed after a methyl shift converts the secondary cation to a tertiary one; POCl3/pyridine forms no cation.",
        "C": "2,3-Dimethylbut-1-ene also has a rearranged skeleton, the minor alkene from the same shifted cation, and cannot form under E2 conditions that leave the skeleton alone.",
        "D": "POCl3 is not SOCl2: the dichlorophosphate is used as a leaving group for elimination by pyridine, and chloride does not displace it to give an alkyl chloride under these conditions."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A carbon chain in which the carbon bearing the OH is flanked by a methyl group on one side and a carbon carrying three methyl groups on the other."
  },
  {
    "question_id": "ch17_q42_jones_oxidation",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction of hexan-1-ol with chromic acid (CrO3 in aqueous H2SO4, Jones reagent)?",
    "question_smiles": "CCCCCCO",
    "options": [
      {
        "option_id": "A",
        "text": "hexanoic acid",
        "smiles": "CCCCCC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "hexanal",
        "smiles": "CCCCCC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "hexyl hexanoate",
        "smiles": "CCCCCC(=O)OCCCCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "hexane",
        "smiles": "CCCCCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Chromic acid in aqueous acetone (the Jones reagent) oxidises a primary alcohol past the aldehyde to the carboxylic acid. The alcohol is first converted to a chromate ester, which loses a proton to give the aldehyde; in water the aldehyde forms its hydrate, a gem-diol, and that hydrate is an alcohol again, so it is oxidised a second time to the acid. Without water the second oxidation cannot start, which is why the anhydrous reagents stop at the aldehyde.",
      "approach": "Step 1: Hexan-1-ol + H2CrO4: the chromate ester of the primary alcohol forms.\nStep 2: Loss of the C-H alpha to oxygen, with Cr(VI) leaving as Cr(IV): hexanal.\nStep 3: Water adds to the aldehyde: the hydrate, CH3(CH2)4CH(OH)2.\nStep 4: The hydrate is oxidised like any alcohol, and the second C-H loss gives hexanoic acid, the major product.",
      "note": "The colour change from orange Cr(VI) to green Cr(III) is the basis of the old breathalyser and of the chromic acid test for primary and secondary alcohols; tertiary alcohols do not change the colour because they have no hydrogen on the carbinol carbon. Potassium permanganate does the same job with the same over-oxidation.",
      "options": {
        "A": "Correct. The primary alcohol is oxidised to the aldehyde, which hydrates in the aqueous medium and is oxidised again to hexanoic acid.",
        "B": "Hexanal is the intermediate. It survives only when no water is present to hydrate it, which is the PCC or Dess-Martin result, not the aqueous chromic acid one.",
        "C": "Hexyl hexanoate would require the acid to esterify the remaining alcohol; with excess oxidant the alcohol is consumed as fast as the acid forms, and the ester is at most a trace.",
        "D": "Hexane is a reduction product; chromic acid removes hydrogen from carbon and adds oxygen, and no reagent here could strip the oxygen off."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A straight six-carbon chain ending in an OH group."
  },
  {
    "question_id": "ch17_q43_pcc_dmp_oxidation",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Medium",
    "question_text": "Which reagent will selectively oxidize hexan-1-ol to hexanal without further oxidation to the carboxylic acid?",
    "question_smiles": "CCCCCCO",
    "options": [
      {
        "option_id": "A",
        "text": "Pyridinium chlorochromate (PCC) in anhydrous dichloromethane (CH2Cl2)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Chromic acid (CrO3/H2SO4)",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Potassium permanganate (KMnO4)",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Sodium dichromate (Na2Cr2O7) in aqueous H2SO4",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Stopping the oxidation of a primary alcohol at the aldehyde is a matter of keeping water out. The second oxidation needs the aldehyde hydrate, and the hydrate cannot form in dry dichloromethane; so a chromium(VI) reagent that is soluble in that solvent, pyridinium chlorochromate, oxidises hexan-1-ol to hexanal and goes no further. Every aqueous oxidant listed takes the alcohol through to the acid.",
      "approach": "Step 1: Write the two-stage oxidation: alcohol to aldehyde, then aldehyde hydrate to acid.\nStep 2: Identify the reagents that supply water: chromic acid, aqueous dichromate and permanganate are all used in water and give hexanoic acid.\nStep 3: PCC in anhydrous CH2Cl2 has no water; the aldehyde cannot hydrate and is the final product.\nStep 4: PCC in dichloromethane gives hexanal.",
      "note": "Dess-Martin periodinane, the hypervalent iodine reagent McMurry now favours, does the same job in the same solvent, at room temperature, without chromium waste and without the acidity of PCC. Secondary alcohols are less sensitive to the choice: any of these reagents takes them to the ketone, which has no hydrogen left to lose.",
      "options": {
        "A": "Correct. In dry dichloromethane the aldehyde cannot hydrate, so PCC oxidises the primary alcohol once and stops at hexanal.",
        "B": "Chromic acid is used in aqueous acetone; the aldehyde hydrates and is oxidised again, and the product is hexanoic acid.",
        "C": "Permanganate in water oxidises a primary alcohol all the way to the carboxylate, and acidic workup gives hexanoic acid; it is the least selective oxidant of the four.",
        "D": "Sodium dichromate in aqueous sulfuric acid is chromic acid made in situ; the water present carries the oxidation through to the acid."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-carbon straight chain with a hydroxyl group on the terminal carbon."
  },
  {
    "question_id": "ch17_q44_dmp_oxidation",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Medium",
    "question_text": "What is the major product when 3-methylbutan-1-ol is treated with Dess-Martin periodinane (DMP) in CH2Cl2 at room temperature?",
    "question_smiles": "CC(C)CCO",
    "options": [
      {
        "option_id": "A",
        "text": "3-Methylbutanal",
        "smiles": "CC(C)CC=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Methylbutanoic acid",
        "smiles": "CC(C)CC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-Methylbut-1-ene",
        "smiles": "CC(C)C=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Methylbutanal",
        "smiles": "CCC(C)C=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Dess-Martin periodinane is a hypervalent iodine(V) reagent that oxidises a primary alcohol to the aldehyde and a secondary alcohol to the ketone in dichloromethane at room temperature. The alcohol exchanges onto iodine for an acetate, and a base removes the alpha hydrogen as iodine(V) is reduced to iodine(III). No water is present, so the aldehyde never hydrates and is not oxidised further; it is the modern replacement for PCC, neutral rather than acidic and free of chromium.",
      "approach": "Step 1: Classify the alcohol: 3-methylbutan-1-ol is primary, CH2OH at the end of a branched chain.\nStep 2: DMP removes the two hydrogens of the carbinol carbon's H-C-O-H pair: C=O forms at C1.\nStep 3: The medium is anhydrous, so the aldehyde is the end point.\nStep 4: 3-Methylbutanal (isovaleraldehyde), skeleton unchanged.",
      "note": "The same alcohol in aqueous chromic acid would give 3-methylbutanoic acid, and under hot sulfuric acid it would dehydrate; the reagent, not the substrate, decides which of the three products forms. DMP also tolerates acid-sensitive groups such as acetals and silyl ethers, which is the practical reason it displaced PCC in most laboratories.",
      "options": {
        "A": "Correct. The primary alcohol is oxidised once, to the aldehyde, and the anhydrous reagent cannot take it to the acid.",
        "B": "3-Methylbutanoic acid is the aqueous chromic acid or permanganate product, reached through the aldehyde hydrate; no water, no hydrate, no acid.",
        "C": "3-Methylbut-1-ene is a dehydration product, made with acid and heat or POCl3 and pyridine; DMP is an oxidant and removes hydrogen from the carbinol carbon, not water.",
        "D": "2-Methylbutanal has the methyl branch one carbon from the carbonyl; in the substrate the branch is two carbons from the CH2OH and an oxidation moves no carbon-carbon bonds."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A branched chain: a CH2OH group joined to a CH2, which is joined to a CH bearing two methyl groups."
  },
  {
    "question_id": "ch17_q45_secondary_alcohol_oxidation",
    "topic": "reactions of alcohols (dehydration to alkenes, oxidation to aldehydes/ketones/carboxylic acids with PCC/DMP/chromic acid, conversion to alkyl halides via SOCl2/PBr3/HX, conversion to tosylates/mesylates)",
    "difficulty_level": "Easy",
    "question_text": "What is the product when cyclohexanol is treated with sodium dichromate (Na2Cr2O7) in aqueous sulfuric acid?",
    "question_smiles": "OC1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "cyclohexanone",
        "smiles": "O=C1CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "adipic acid",
        "smiles": "O=C(O)CCCCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "cyclohexene",
        "smiles": "C1=CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "cyclohexyl acetate",
        "smiles": "CC(=O)OC1CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A secondary alcohol has exactly one hydrogen on the carbinol carbon, so oxidation removes it and the O-H hydrogen to form a ketone, and then stops: a ketone has no hydrogen on the carbonyl carbon for a second oxidation to take. Aqueous dichromate in sulfuric acid, which drives primary alcohols to acids, therefore gives the ketone from cyclohexanol in high yield.",
      "approach": "Step 1: Cyclohexanol is secondary: the carbinol carbon bears OH, H and two ring carbons.\nStep 2: Chromate ester formation, then loss of the carbinol C-H: cyclohexanone.\nStep 3: The ketone cannot hydrate to a species with a C-H alpha to two oxygens, so the aqueous medium does not matter here.\nStep 4: Cyclohexanone.",
      "note": "Cyclohexanone is oxidised further only under conditions that break carbon-carbon bonds, hot nitric acid or hot permanganate, which is the industrial route to adipic acid for nylon; the chapter's chromium reagents stop cleanly at the ketone. A tertiary alcohol has no carbinol hydrogen at all and gives no reaction.",
      "options": {
        "A": "Correct. The one carbinol hydrogen is removed with the O-H hydrogen to give the ketone, which is the end of the road for a secondary alcohol.",
        "B": "Adipic acid requires cleaving the ring at the ketone, which takes hot nitric acid or hot permanganate; chromic acid at ordinary temperature stops at cyclohexanone.",
        "C": "Cyclohexene is the dehydration product of the alcohol, formed with acid and heat in the absence of an oxidant; here the alcohol is oxidised before it can eliminate.",
        "D": "Cyclohexyl acetate is an ester and would need acetic acid or acetic anhydride, neither of which is present; dichromate adds no carbon."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A cyclohexane ring bearing an OH group on one carbon."
  },
  {
    "question_id": "ch17_q47_phenol_oxidation_quinone",
    "topic": "chemistry of phenols (preparation, oxidation to quinones, Kolbe-Schmitt reaction, Claisen rearrangement)",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product when phenol is oxidized using Fremy's salt or chromic acid?",
    "question_smiles": "Oc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "p-benzoquinone (1,4-benzoquinone)",
        "smiles": "O=C1C=CC(=O)C=C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "catechol (benzene-1,2-diol)",
        "smiles": "Oc1ccccc1O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "salicylic acid",
        "smiles": "O=C(O)c1ccccc1O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "cyclohexanone",
        "smiles": "O=C1CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Phenols are oxidised far more easily than alcohols because the ring, not the O-H carbon, is what reacts: loss of the phenolic hydrogen gives a phenoxy radical whose unpaired electron is shared with the ortho and para carbons. Fremy's salt, potassium nitrosodisulfonate, is the classic one-electron oxidant for this, and chromic acid does it too. Oxygen is introduced at the para carbon and the ring is oxidised to the cross-conjugated diketone, 1,4-benzoquinone.",
      "approach": "Step 1: Fremy's salt abstracts the O-H hydrogen: a phenoxy radical, delocalised onto C2, C4 and C6.\nStep 2: A second equivalent traps the para radical through oxygen, installing an oxygen substituent at C4.\nStep 3: Elimination of the nitrosodisulfonate fragment and loss of the ring hydrogens leaves two C=O groups para to each other.\nStep 4: p-Benzoquinone, a yellow, non-aromatic diketone.",
      "note": "Quinones are reduced back to hydroquinones by mild reducing agents, and that reversible two-electron couple is how ubiquinone shuttles electrons in the respiratory chain. The same reactivity is why phenols autoxidise in air and why they serve as radical-trapping antioxidants: the phenoxy radical is stable enough to stop a chain.",
      "options": {
        "A": "Correct. One-electron oxidation to the phenoxy radical, oxygen capture at the para carbon, and further oxidation give 1,4-benzoquinone.",
        "B": "Catechol would require adding an OH at the ortho carbon while keeping the ring aromatic; these oxidants oxidise the ring to a quinone rather than hydroxylating it.",
        "C": "Salicylic acid comes from carboxylation of phenoxide with carbon dioxide (Kolbe-Schmitt), an electrophilic substitution, not an oxidation.",
        "D": "Cyclohexanone would require reducing the aromatic ring and losing its unsaturation; an oxidant removes hydrogen and adds oxygen and cannot saturate the ring."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Phenol: an aromatic ring carrying a single OH substituent."
  },
  {
    "question_id": "ch17_q48_silyl_ether_protection",
    "topic": "protecting groups for alcohols (silyl ethers like TMS)",
    "difficulty_level": "Medium",
    "question_text": "A chemist wants to perform a Grignard addition on a ketone that also contains a primary alcohol group (6-hydroxyhexan-2-one, shown). Which protecting group strategy is most appropriate?",
    "question_smiles": "CC(=O)CCCCO",
    "options": [
      {
        "option_id": "A",
        "text": "Protect the alcohol as a trimethylsilyl (TMS) ether using TMSCl and triethylamine, run the Grignard reaction, and deprotect using tetrabutylammonium fluoride (TBAF).",
        "smiles": "CC(=O)CCCCO[Si](C)(C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Protect the alcohol as a benzyl ether using benzyl chloride and NaOH, run the Grignard reaction, and deprotect using LiAlH4.",
        "smiles": "CC(=O)CCCCOCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Protect the alcohol as a tosylate using TsCl in pyridine, run the Grignard reaction, and deprotect using H3O+.",
        "smiles": "CC(=O)CCCCOS(=O)(=O)c1ccc(C)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Protect the alcohol as a methyl ether using methyl iodide and Ag2O, run the Grignard reaction, and deprotect using TBAF.",
        "smiles": "CC(=O)CCCCOC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A free hydroxyl destroys a Grignard reagent by protonating it, so the OH must be masked before the reagent is added and unmasked afterwards. A protecting group has to be easy to put on, inert to the reagent, and easy to take off under conditions that leave the new product intact. A trimethylsilyl ether meets all three: it forms from the alcohol and TMSCl with triethylamine as the base, has no acidic hydrogen and does not react with Grignard reagents, and is cleaved by fluoride (TBAF) or dilute aqueous acid because the Si-F and Si-O bonds are so strong.",
      "approach": "Step 1: Protect: 6-hydroxyhexan-2-one + TMSCl, Et3N: the primary OH becomes an OSiMe3 ether; the ketone is unaffected.\nStep 2: Add RMgBr: it attacks the ketone only, and workup gives the tertiary alkoxide, then alcohol.\nStep 3: Deprotect: TBAF in THF removes the silyl group, releasing the primary OH.\nStep 4: The diol product carries the new tertiary alcohol and the original primary alcohol. Strategy A.",
      "note": "The choice of protecting group is really a choice of deprotection conditions: silyl ethers come off with fluoride, benzyl ethers with hydrogen over palladium, methyl ethers only with HI or BBr3, and a tosylate is not a protecting group at all but a leaving group. Bulkier silyl groups (TBS, TIPS) protect the same way and survive aqueous workup better, at the cost of harder removal.",
      "options": {
        "A": "Correct. The TMS ether has no acidic proton, ignores the Grignard reagent, and is removed cleanly by fluoride afterwards.",
        "B": "A benzyl ether would survive the Grignard step, but LiAlH4 does not cleave benzyl ethers; that group is removed by catalytic hydrogenolysis (H2, Pd), and the hydride would attack the product's other groups instead.",
        "C": "A tosylate is an excellent leaving group, not a protecting group; the Grignard reagent would displace it or attack the sulfonyl, and aqueous acid does not remove a tosylate to regenerate the alcohol.",
        "D": "A methyl ether is stable to Grignard reagents but is not cleaved by fluoride; removing it needs HI or BBr3, conditions that would also damage the tertiary alcohol product."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-carbon chain with a ketone carbonyl at the second carbon and an OH group on the far terminal carbon."
  },
  {
    "question_id": "ch17_q49_kolbe_schmitt",
    "topic": "chemistry of phenols (preparation, oxidation to quinones, Kolbe-Schmitt reaction, Claisen rearrangement)",
    "difficulty_level": "Hard",
    "question_text": "In the Kolbe-Schmitt reaction, sodium phenoxide is heated under pressure with carbon dioxide, followed by acidic workup. What is the major organic product?",
    "question_smiles": "Oc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "salicylic acid (2-hydroxybenzoic acid)",
        "smiles": "O=C(O)c1ccccc1O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "aspirin (acetylsalicylic acid)",
        "smiles": "CC(=O)Oc1ccccc1C(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "catechol (benzene-1,2-diol)",
        "smiles": "Oc1ccccc1O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "phenoxyacetic acid",
        "smiles": "O=C(O)COc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Phenoxide ion is nucleophilic at its ortho and para carbons as well as at oxygen, because those carbons carry part of the negative charge. Carbon dioxide is a weak electrophile, but under pressure and heat the sodium phenoxide attacks it through the ortho carbon, the sodium ion holding the CO2 next to the ring oxygen; the cyclohexadienone intermediate re-aromatises by losing the ring proton, and acidification gives the ortho-hydroxy acid. This is the Kolbe-Schmitt synthesis of salicylic acid.",
      "approach": "Step 1: Sodium phenoxide, with the charge delocalised onto C2, C4 and C6.\nStep 2: CO2 at about 100 atm and 125 °C: the C2 carbon bonds to the CO2 carbon, giving a carboxylate and a non-aromatic dienone.\nStep 3: Loss of the C2 proton restores aromaticity: sodium salicylate.\nStep 4: Acidic workup protonates the carboxylate: salicylic acid, 2-hydroxybenzoic acid.",
      "note": "Acetylation of salicylic acid's phenolic OH with acetic anhydride is the next step, and the product is aspirin; the Kolbe-Schmitt reaction is therefore the industrial front end of one of the most produced drugs. With the potassium phenoxide and higher temperatures the para acid is formed instead, the ortho chelation to the smaller sodium ion being what steers the carbon dioxide.",
      "options": {
        "A": "Correct. Electrophilic attack of carbon dioxide at the ortho carbon of phenoxide, re-aromatisation and acidification give salicylic acid.",
        "B": "Aspirin, acetylsalicylic acid, needs a second reaction: acetylation of salicylic acid's phenolic OH with acetic anhydride. Carbon dioxide alone installs only the carboxyl group.",
        "C": "Catechol would require a second hydroxyl on the ring; carbon dioxide supplies a carboxyl carbon, not an oxygen substituent.",
        "D": "Phenoxyacetic acid has the carbon chain on oxygen and comes from alkylating phenoxide with chloroacetic acid; carbon dioxide is attacked through the ring carbon, not the oxygen, under Kolbe-Schmitt conditions."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An aromatic ring carrying a hydroxyl group."
  },
  {
    "question_id": "ch17_q50_claisen_rearrangement",
    "topic": "chemistry of phenols (preparation, oxidation to quinones, Kolbe-Schmitt reaction, Claisen rearrangement)",
    "difficulty_level": "Hard",
    "question_text": "What is the mechanism and major organic product when allyl phenyl ether is heated to 200 °C?",
    "question_smiles": "C=CCOc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "A [3,3]-sigmatropic rearrangement to yield o-allylphenol after tautomerization",
        "smiles": "C=CCc1ccccc1O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A [1,3]-sigmatropic rearrangement to yield p-allylphenol",
        "smiles": "C=CCc1ccc(O)cc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Homolytic cleavage to yield phenol and propene",
        "smiles": "Oc1ccccc1.C=CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Nucleophilic substitution to yield phenol and allyl alcohol",
        "smiles": "Oc1ccccc1.C=CCO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Heating an allyl aryl ether moves the allyl group from oxygen to the ortho carbon in a single concerted step: six electrons reorganise through a cyclic six-membered transition state, the O-CH2 bond breaks and a new bond forms between the ring's ortho carbon and the far end of the allyl group. Sigma bonds shift across three atoms on each side, so the process is a [3,3]-sigmatropic rearrangement, the aromatic Claisen rearrangement. The immediate product is a cyclohexadienone, which tautomerises to the phenol.",
      "approach": "Step 1: Number the six atoms: O1, C2, C3 (the ring ortho carbon) on one side; C1', C2', C3' of the allyl group on the other.\nStep 2: At about 200 °C the O-C1' bond breaks as the C3-C3' bond forms; the allyl group is transferred with its ends swapped.\nStep 3: The ring has lost aromaticity: a 6-allylcyclohexa-2,4-dien-1-one.\nStep 4: Enolisation restores the aromatic ring: 2-allylphenol, o-allylphenol.",
      "note": "The end-swap of the allyl group is the diagnostic test: an allyl ether labelled at the terminal carbon delivers that label next to the ring, which rules out any dissociative mechanism. When both ortho positions are blocked, the dienone undergoes a second [3,3] shift (a Cope rearrangement) to the para position, and only then does p-allylphenol form, with the allyl group's ends swapped back.",
      "options": {
        "A": "Correct. A concerted [3,3]-sigmatropic shift through a six-membered transition state forms the ortho C-C bond as the O-C bond breaks; tautomerisation of the dienone gives o-allylphenol.",
        "B": "A [1,3] shift is not the thermal pathway, and the para product appears only when both ortho positions are blocked, via a second [3,3] shift after the first.",
        "C": "Homolysis of the O-allyl bond would need a much higher temperature and would give radical-derived mixtures; the clean single product and the end-swap of the allyl group show a concerted process.",
        "D": "There is no nucleophile in a neat thermal reaction, and substitution at oxygen to release allyl alcohol has no driving force; the reaction is intramolecular and pericyclic."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing an oxygen that carries an allyl group, O-CH2-CH=CH2."
  },
  {
    "question_id": "ch17_q_dynamic_alcohol_oxidation",
    "topic": "Alcohols: Oxidation Reactions",
    "difficulty_level": "Medium",
    "question_text": "Match each alcohol to the product it gives with excess CrO3 in aqueous H2SO4 (Jones reagent).",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCCO",
        "correctAnswer": "Propanoic acid",
        "alt": "A three-carbon chain with an OH on the end carbon."
      },
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propanone (acetone)",
        "alt": "A three-carbon chain with the OH on the middle carbon."
      },
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "No reaction",
        "alt": "A carbon that bears three methyl groups and one OH."
      },
      {
        "smiles": "CC(C)CO",
        "correctAnswer": "2-Methylpropanoic acid",
        "alt": "A CH2OH group attached to a carbon that bears two methyl groups."
      }
    ],
    "match_options": [
      "Propanoic acid",
      "Propanone (acetone)",
      "No reaction",
      "2-Methylpropanoic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect oxidation products",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "What an oxidant does to an alcohol depends on how many hydrogens the carbinol carbon carries. Two hydrogens (primary): oxidised to the aldehyde and, in water, on to the carboxylic acid. One hydrogen (secondary): oxidised to the ketone and no further. No hydrogen (tertiary): no oxidation at all, because there is no C-H to remove. Jones reagent is aqueous, so its primary-alcohol product is the acid. Branching elsewhere in the molecule does not enter into it.",
      "approach": "Step 1: Propan-1-ol: CH2OH, primary; aldehyde, then the hydrate, then the acid: propanoic acid.\nStep 2: Propan-2-ol: CH(OH), secondary; one oxidation to the ketone: propanone.\nStep 3: 2-Methylpropan-2-ol: C(OH) with three carbons and no hydrogen; no reaction.\nStep 4: 2-Methylpropan-1-ol: CH2OH again, primary despite the branch on the next carbon; 2-methylpropanoic acid.",
      "note": "The fourth row is the one to get right: the branch next to the carbinol carbon makes the molecule look tertiary at a glance, but only the carbon bearing the oxygen counts. The colour change from orange to green accompanies rows one, two and four and is absent in row three, which is the chromic acid test for distinguishing tertiary alcohols.",
      "options": {
        "A": "Correct. Both primary alcohols go to acids in the aqueous reagent, the secondary alcohol stops at the ketone, and the tertiary alcohol, with no carbinol hydrogen, is untouched.",
        "B": "At least one alcohol is matched to the wrong oxidation level. Count the hydrogens on the carbon that carries the OH: two means acid (with water present), one means ketone, none means no reaction."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q3_roadmap_methylbutanol",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway. Determine the correct compounds matching labels B, C and D.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "C=CC",
          "label": "Compound A",
          "alt": "Propene: a three-carbon chain with a terminal double bond.",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "",
          "label": "Compound C",
          "x": 3,
          "y": 1
        },
        {
          "id": "D",
          "smiles": "",
          "label": "Compound D",
          "x": 4,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "1. Hg(OAc)2, H2O\n2. NaBH4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "Na2Cr2O7, H2SO4, H2O"
        },
        {
          "from": "C",
          "to": "D",
          "reagents": "1. CH3CH2MgBr, ether\n2. H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "B: propan-2-ol, C: propanone (acetone), D: 2-methylbutan-2-ol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "B: propan-2-ol, C: propanal, D: pentan-3-ol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "B: propan-1-ol, C: propanoic acid, D: propanoic acid (the Grignard reagent is destroyed)",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "B: propan-2-ol, C: propanone (acetone), D: propan-2-ol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Three of the chapter's core transformations in a row: Markovnikov hydration of an alkene by oxymercuration-demercuration, oxidation of the resulting secondary alcohol to a ketone, and Grignard addition to that ketone to build a tertiary alcohol. Each step's product is fixed by the reagent's selectivity: the mercury method puts the OH on the more substituted carbon, chromic acid takes a secondary alcohol only to the ketone, and the Grignard reagent adds an ethyl group to the carbonyl carbon.",
      "approach": "Step 1: Propene + Hg(OAc)2/H2O then NaBH4: Markovnikov, no rearrangement; the OH goes to C2. B is propan-2-ol.\nStep 2: Propan-2-ol + Na2Cr2O7/H2SO4: a secondary alcohol is oxidised to the ketone and no further. C is propanone.\nStep 3: Propanone + CH3CH2MgBr, then H3O+: ethyl adds to the carbonyl carbon. D is CH3CH2-C(OH)(CH3)2.\nStep 4: D is 2-methylbutan-2-ol, a tertiary alcohol.",
      "note": "Swapping the first reagent for hydroboration-oxidation would give propan-1-ol, then propanoic acid under the same oxidant, and the third step would then fail: a Grignard reagent is destroyed by a carboxylic acid's O-H. The oxidation level of C decides whether the sequence builds a carbon-carbon bond at all, which is why the regiochemistry of step one matters beyond the naming.",
      "options": {
        "A": "Correct. Markovnikov hydration to propan-2-ol, oxidation to acetone, and ethyl Grignard addition to the tertiary alcohol 2-methylbutan-2-ol.",
        "B": "Propanal cannot come from propan-2-ol: oxidising a secondary alcohol gives a ketone, and an aldehyde would need the primary alcohol. Pentan-3-ol follows from that wrong aldehyde, not from acetone.",
        "C": "Propan-1-ol is the anti-Markovnikov alcohol from hydroboration-oxidation; oxymercuration puts the OH on the central carbon. The rest of the chain follows from the wrong first step.",
        "D": "A Grignard reagent adds carbon, not hydrogen, to a ketone; reducing acetone back to propan-2-ol would take NaBH4, and the ethyl group would have gone nowhere."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q38_roadmap_phenylpropene",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway. Determine the correct compounds matching labels B, C and D.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "alt": "An unsubstituted benzene ring.",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "",
          "label": "Compound C",
          "x": 3,
          "y": 1
        },
        {
          "id": "D",
          "smiles": "",
          "label": "Compound D",
          "x": 4,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2, FeBr3"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1. Mg, ether\n2. Acetone\n3. H3O+"
        },
        {
          "from": "C",
          "to": "D",
          "reagents": "POCl3, pyridine, 0 °C"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "B: bromobenzene, C: 2-phenylpropan-2-ol, D: 2-phenylprop-1-ene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "B: bromobenzene, C: 2-phenylpropan-2-ol, D: 2-chloro-2-phenylpropane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "B: bromobenzene, C: 2-phenylpropan-2-ol, D: 2-phenylpropan-2-ol (tertiary alcohols do not react)",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "B: bromobenzene, C: 1,1-diphenylethanol, D: 1,1-diphenylethene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An aromatic ring is turned into a nucleophile by bromination and Grignard formation, used to build a tertiary alcohol from a ketone, and the alcohol is then dehydrated. Each step has one outcome: bromination of benzene gives bromobenzene; phenylmagnesium bromide adds once to acetone, because a ketone has no leaving group and cannot take a second equivalent; POCl3 in pyridine dehydrates an alcohol by E2, and a tertiary alcohol whose only beta hydrogens are on two equivalent methyls gives a single alkene.",
      "approach": "Step 1: Benzene + Br2/FeBr3: electrophilic bromination. B is bromobenzene.\nStep 2: Mg in ether gives phenylmagnesium bromide; it adds to acetone and workup gives the tertiary alcohol. C is 2-phenylpropan-2-ol.\nStep 3: POCl3/pyridine: the alcohol becomes a dichlorophosphate and pyridine removes a beta hydrogen from a methyl group. D is CH2=C(CH3)Ph.\nStep 4: D is 2-phenylprop-1-ene (alpha-methylstyrene).",
      "note": "The same alkene is made industrially by dehydrogenating cumene, and it is the alkene that gives back 2-phenylpropan-2-ol on acid-catalysed hydration, closing the loop. The tertiary alcohol here would dehydrate just as well in warm sulfuric acid; POCl3/pyridine is chosen when a substrate could rearrange, which this one cannot, or when acid would polymerise the styrene product.",
      "options": {
        "A": "Correct. Bromobenzene, then the Grignard addition to acetone giving 2-phenylpropan-2-ol, then E2 dehydration to 2-phenylprop-1-ene.",
        "B": "POCl3 is not a chlorinating agent for alcohols in the way SOCl2 is: with pyridine present the dichlorophosphate ester eliminates rather than being displaced by chloride.",
        "C": "Tertiary alcohols are the easiest of all to dehydrate; it is oxidation they resist, because they lack a carbinol hydrogen. Confusing the two behaviours is the error here.",
        "D": "A ketone accepts only one Grignard addition: there is no alkoxide leaving group to eject and regenerate a carbonyl, so a second phenyl cannot add. Double addition is the behaviour of esters."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q1_scheme_lialh4_ester",
    "topic": "Reduction to Alcohols",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "COC(=O)CCc1ccccc1"
      ],
      "reagents": "1. LiAlH4 (excess)\n2. H3O+",
      "conditions": "THF, then water",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring joined by a two-carbon chain to an ester carbonyl whose oxygen carries a methyl group."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "3-Phenylpropan-1-ol",
        "smiles": "OCCCc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Phenylpropanal",
        "smiles": "O=CCCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-Phenylpropanoic acid",
        "smiles": "OC(=O)CCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propylbenzene",
        "smiles": "CCCc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Lithium aluminium hydride reduces an ester to a primary alcohol by adding two hydrides to the acyl carbon: the first gives an aldehyde after the methoxide leaves, and the aldehyde is reduced faster than the ester was, so it never accumulates. The methoxy group is released as methanol on workup. The benzene ring and the CH2CH2 chain are untouched.",
      "approach": "Step 1: Locate the ester: methyl 3-phenylpropanoate, acyl carbon C1, methoxy on the oxygen.\nStep 2: First hydride adds to C1; the tetrahedral intermediate expels methoxide: 3-phenylpropanal.\nStep 3: Second hydride adds to the aldehyde: the primary alkoxide.\nStep 4: Aqueous acid protonates it. 3-Phenylpropan-1-ol is the major organic product, with methanol as the by-product.",
      "note": "Stopping at the aldehyde requires a different reagent, DIBAL-H at low temperature, and hydrolysing the ester to the acid requires water and acid or base, not hydride. The phenyl ring survives every hydride reagent; only catalytic hydrogenation under pressure would touch it.",
      "options": {
        "A": "Correct. Two hydrides reduce the ester acyl carbon through the aldehyde to CH2OH; the chain and the ring are unchanged.",
        "B": "3-Phenylpropanal is the intermediate and reacts with hydride faster than the ester does; it cannot be isolated from an LiAlH4 reduction.",
        "C": "The acid would come from hydrolysis of the ester, which needs aqueous acid or base as the reagent; hydride adds to the carbonyl carbon and does not cleave the ester to the acid.",
        "D": "Propylbenzene would require removing the oxygen entirely; hydride reduces C=O to CH-OH and the C-O bond of the resulting alcohol is not broken."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q2_scheme_pcc_cyclohexylmethanol",
    "topic": "Oxidation of Alcohols",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "OCC1CCCCC1"
      ],
      "reagents": "PCC",
      "conditions": "CH2Cl2, 25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A cyclohexane ring bearing a CH2OH group."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Cyclohexanecarbaldehyde",
        "smiles": "O=CC1CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclohexanecarboxylic acid",
        "smiles": "OC(=O)C1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Methylenecyclohexane",
        "smiles": "C=C1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclohexylmethanol (no reaction)",
        "smiles": "OCC1CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Pyridinium chlorochromate is a chromium(VI) oxidant that dissolves in dichloromethane and is used with no water present. A primary alcohol is oxidised once, to the aldehyde, and stops there: the second oxidation to the acid needs the aldehyde hydrate, which cannot form without water. The ring is a spectator; only the CH2OH carbon changes.",
      "approach": "Step 1: Classify the alcohol: the OH is on a CH2 attached to the ring, so it is primary.\nStep 2: PCC forms the chromate ester at that oxygen and removes one carbinol hydrogen: C=O forms on the exocyclic carbon.\nStep 3: No water, no hydrate, no further oxidation.\nStep 4: Cyclohexanecarbaldehyde.",
      "note": "The same alcohol in aqueous chromic acid gives cyclohexanecarboxylic acid, and Dess-Martin periodinane gives the same aldehyde as PCC under neutral conditions. A primary alcohol on a ring carbon's side chain is still primary; the substitution pattern of the carbon next to the carbinol has no bearing on the oxidation level reached.",
      "options": {
        "A": "Correct. One oxidation of the primary alcohol in a dry solvent gives the aldehyde and nothing further.",
        "B": "The carboxylic acid needs a second oxidation through the aldehyde hydrate, which requires water; PCC in dichloromethane supplies none.",
        "C": "Methylenecyclohexane is a dehydration product and needs acid and heat or POCl3 and pyridine; PCC removes hydrogen from the carbinol carbon, not water from the molecule.",
        "D": "A primary alcohol is exactly what PCC is used on. Only a tertiary alcohol, with no hydrogen on the carbinol carbon, is left unchanged."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q5_scheme_dehydration_methylcyclohexanol",
    "topic": "Dehydration of Alcohols",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "CC1CCCCC1O"
      ],
      "reagents": "H2SO4 (conc.)",
      "conditions": "heat",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A cyclohexane ring with an OH group on one carbon and a methyl group on the adjacent carbon."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-Methylcyclohexene",
        "smiles": "CC1=CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Methylcyclohexene",
        "smiles": "CC1CC=CCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Methylenecyclohexane",
        "smiles": "C=C1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Methylcyclohexanone",
        "smiles": "CC1CCCCC1=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Acid-catalysed dehydration of a secondary alcohol goes by E1 and gives the most substituted alkene. The cation from 2-methylcyclohexanol forms at C1, and its beta hydrogens are on C2, the carbon bearing the methyl, and on C6. Losing the C2 hydrogen gives a trisubstituted alkene; losing a C6 hydrogen gives a disubstituted one. A hydride shift to the tertiary C2 cation is also available and leads to the same trisubstituted alkene.",
      "approach": "Step 1: Protonate the OH and lose water: a secondary cation at C1.\nStep 2: Beta hydrogens: one on C2 (tertiary, next to the methyl) and two on C6.\nStep 3: Loss of the C2 hydrogen: the double bond is C1=C2 with the methyl on it, trisubstituted. Loss of a C6 hydrogen: C1=C6, disubstituted.\nStep 4: Zaitsev: the trisubstituted alkene, 1-methylcyclohexene, is the major product, and the tertiary cation reached by a hydride shift gives the same alkene.",
      "note": "Methylenecyclohexane, the exocyclic alkene, does form as a minor product from the tertiary cation by loss of a methyl hydrogen; it is disubstituted and less stable than the endocyclic isomer, and under the acidic conditions it isomerises to 1-methylcyclohexene anyway. POCl3 with pyridine on the same alcohol gives the same major product by E2, because the trisubstituted alkene is available without any rearrangement.",
      "options": {
        "A": "Correct. The trisubstituted, endocyclic alkene is the Zaitsev product, reached directly from the C1 cation or through the tertiary C2 cation.",
        "B": "3-Methylcyclohexene is the disubstituted alkene from loss of a C6 hydrogen; it forms in smaller amount because it is less stable than the trisubstituted isomer.",
        "C": "Methylenecyclohexane is the exocyclic, disubstituted alkene from the tertiary cation losing a methyl hydrogen; minor, and isomerised to the endocyclic alkene by the acid.",
        "D": "2-Methylcyclohexanone is an oxidation product; hot sulfuric acid is a dehydrating agent here and no oxidant is present."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q6_scheme_grignard_cyclohexanone",
    "topic": "Grignard Addition",
    "difficulty_level": "Easy",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "O=C1CCCCC1"
      ],
      "reagents": "1. CH3MgBr\n2. H3O+",
      "conditions": "ether, then water",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A cyclohexane ring bearing a ketone carbonyl."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-Methylcyclohexanol",
        "smiles": "CC1(O)CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclohexanol",
        "smiles": "OC1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Methylcyclohexanone",
        "smiles": "CC1CCCCC1=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclohexylmethanol",
        "smiles": "OCC1CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Grignard reagent is a carbon nucleophile: its methyl carbon adds to the carbonyl carbon of the ketone, the carbonyl oxygen becomes an alkoxide, and workup protonates it. The carbon that was C=O now carries the OH, the new methyl and the two ring bonds: a tertiary alcohol. The reagent adds carbon, not hydrogen, and it adds to the carbonyl carbon, never to the alpha carbon or the oxygen.",
      "approach": "Step 1: Identify the electrophile: the carbonyl carbon of cyclohexanone, polarised delta-plus.\nStep 2: The methyl of CH3MgBr bonds to it; the pi electrons move to oxygen: a magnesium alkoxide on a carbon bearing CH3 and two ring carbons.\nStep 3: Aqueous acid protonates the alkoxide.\nStep 4: 1-Methylcyclohexanol, a tertiary alcohol.",
      "note": "This is the simplest Grignard product to name and the one most often drawn wrong: the methyl and the OH share the same carbon. Reducing the same ketone with NaBH4 gives cyclohexanol, and alkylating it at the alpha carbon (2-methylcyclohexanone) needs an enolate and an alkyl halide, chemistry of a later chapter, not a Grignard reagent.",
      "options": {
        "A": "Correct. Methyl adds to the carbonyl carbon, which becomes the tertiary carbinol carbon bearing OH, CH3 and the ring.",
        "B": "Cyclohexanol is the hydride reduction product; a Grignard reagent delivers a carbon substituent, not hydrogen, so a new carbon-carbon bond must appear.",
        "C": "2-Methylcyclohexanone has the methyl on the carbon next to the carbonyl, which is enolate chemistry with an alkyl halide; a Grignard reagent attacks the carbonyl carbon itself and the C=O is consumed.",
        "D": "Cyclohexylmethanol has the new carbon between the ring and the oxygen; the Grignard carbon bonds to the carbonyl carbon, and the oxygen stays on that same carbon."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q9_scheme_jones_diol",
    "topic": "Oxidation of Alcohols",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "CC(O)CCCO"
      ],
      "reagents": "CrO3, H2SO4 (excess)",
      "conditions": "acetone, H2O, 25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A five-carbon chain with an OH on the terminal carbon and a second OH on the fourth carbon."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "4-Oxopentanoic acid",
        "smiles": "CC(=O)CCC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-Hydroxypentanoic acid",
        "smiles": "CC(O)CCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-Oxopentanal",
        "smiles": "CC(=O)CCC=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5-Hydroxypentan-2-one",
        "smiles": "CC(=O)CCCO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Excess Jones reagent oxidises every alcohol in the molecule that has a carbinol hydrogen, and it takes each to the highest level the aqueous medium allows: a primary alcohol to the carboxylic acid, a secondary alcohol to the ketone. Pentane-1,4-diol has one of each, so both ends change and the product is a keto acid. Neither OH protects the other.",
      "approach": "Step 1: Classify the two hydroxyls: C1 is CH2OH, primary; C4 is CH(OH)CH3, secondary.\nStep 2: The primary alcohol goes to the aldehyde, hydrates in the aqueous acetone, and is oxidised again: a carboxylic acid at C1.\nStep 3: The secondary alcohol goes to the ketone at C4 and stops.\nStep 4: 4-Oxopentanoic acid (levulinic acid).",
      "note": "Selective oxidation of one hydroxyl in a diol is possible, but not with excess chromic acid: PCC or DMP takes the primary alcohol only to the aldehyde and still oxidises the secondary one, and leaving either untouched needs a protecting group. The keto acid made here is levulinic acid, a bulk chemical from cellulose.",
      "options": {
        "A": "Correct. The primary alcohol is oxidised through the aldehyde hydrate to the acid and the secondary alcohol to the ketone; with excess reagent both happen.",
        "B": "This leaves the secondary alcohol untouched. Chromic acid oxidises secondary alcohols readily, and with excess oxidant present nothing shields the C4 hydroxyl.",
        "C": "4-Oxopentanal is what PCC or DMP would give in a dry solvent; in aqueous chromic acid the aldehyde hydrates and is oxidised on to the acid.",
        "D": "This has the secondary alcohol oxidised and the primary one kept. Primary alcohols are oxidised at least as easily as secondary ones, and in excess reagent the CH2OH cannot survive."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q8_2_roadmap_cyclohexylmethanol",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Medium",
    "question_text": "Examine the following multi-step synthetic pathway. Determine the correct compounds matching labels B, C and D.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "O=C1CCCCC1",
          "label": "Compound A",
          "alt": "A six-membered carbon ring bearing a ketone carbonyl.",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "",
          "label": "Compound C",
          "x": 3,
          "y": 1
        },
        {
          "id": "D",
          "smiles": "",
          "label": "Compound D",
          "x": 4,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "NaBH4, CH3OH"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PBr3, ether"
        },
        {
          "from": "C",
          "to": "D",
          "reagents": "1. Mg, ether\n2. H2C=O\n3. H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "B: cyclohexanol, C: bromocyclohexane, D: cyclohexylmethanol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "B: cyclohexanol, C: bromocyclohexane, D: 2-cyclohexylethanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "B: cyclohexanol, C: bromocyclohexane, D: cyclohexanecarbaldehyde",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "B: cyclohexanol, C: bromocyclohexane, D: cyclohexanecarboxylic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A ketone is turned into a one-carbon-longer primary alcohol by going down through the alcohol and the bromide to a Grignard reagent and back up with formaldehyde. Borohydride reduces the ketone to the secondary alcohol; PBr3 converts that alcohol to the bromide by SN2; magnesium inserts; and the Grignard reagent adds to formaldehyde to give, after workup, a CH2OH on the ring. Formaldehyde is the one-carbon primary-alcohol electrophile.",
      "approach": "Step 1: Cyclohexanone + NaBH4 in methanol: hydride adds to the carbonyl. B is cyclohexanol.\nStep 2: Cyclohexanol + PBr3: the OH becomes a leaving group and bromide displaces it. C is bromocyclohexane.\nStep 3: Mg in ether gives cyclohexylmagnesium bromide; it adds to formaldehyde, whose carbonyl carbon carries two hydrogens, and workup gives ring-CH2-OH.\nStep 4: D is cyclohexylmethanol, a primary alcohol with one carbon more than the ring.",
      "note": "The choice of electrophile in the last step sets the whole product class: formaldehyde gives a primary alcohol one carbon longer, ethylene oxide a primary alcohol two carbons longer, another aldehyde a secondary alcohol, a ketone a tertiary alcohol, and carbon dioxide an acid. The first two steps are the standard way to convert a ketone into a halide, since no reagent does it in one.",
      "options": {
        "A": "Correct. Reduction to cyclohexanol, conversion to bromocyclohexane, and Grignard addition to formaldehyde to give the one-carbon extension cyclohexylmethanol.",
        "B": "2-Cyclohexylethanol is the two-carbon extension, which needs ethylene oxide as the electrophile; formaldehyde supplies exactly one carbon.",
        "C": "The aldehyde is the electrophile consumed, not the product: the Grignard carbon bonds to the formaldehyde carbon, and that carbon becomes CH2OH after workup, not CHO.",
        "D": "Cyclohexanecarboxylic acid would come from the Grignard reagent and carbon dioxide; formaldehyde gives an alcohol, one oxidation level lower."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q12_2_roadmap_dimethylcyclohexanol",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway. Determine the correct compounds matching labels B, C and D.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CC1=CCCCC1",
          "label": "Compound A",
          "alt": "A six-membered ring with one double bond; one of the alkene carbons carries a methyl group.",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "",
          "label": "Compound C",
          "x": 3,
          "y": 1
        },
        {
          "id": "D",
          "smiles": "",
          "label": "Compound D",
          "x": 4,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "1. BH3·THF\n2. H2O2, NaOH"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC, CH2Cl2"
        },
        {
          "from": "C",
          "to": "D",
          "reagents": "1. CH3MgBr, ether\n2. H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "B: trans-2-methylcyclohexanol, C: 2-methylcyclohexanone, D: 1,2-dimethylcyclohexanol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "B: 1-methylcyclohexanol, C: no reaction (tertiary alcohol), D: 1-methylcyclohexanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "B: cis-2-methylcyclohexanol, C: 2-methylcyclohexanone, D: 1,2-dimethylcyclohexanol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "B: trans-2-methylcyclohexanol, C: 2-methylcyclohexanone, D: 2,2-dimethylcyclohexanone",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hydroboration-oxidation puts the OH on the less substituted alkene carbon with the H and OH syn, so from 1-methylcyclohexene the OH lands on C2 trans to the methyl. That secondary alcohol is oxidised by PCC to the ketone, whose stereocentre is now gone, and methylmagnesium bromide adds to the ketone carbon to give a tertiary alcohol with two adjacent methyls. Each reagent's selectivity fixes one node.",
      "approach": "Step 1: 1-Methylcyclohexene + BH3 then H2O2/NaOH: anti-Markovnikov, syn addition. B is trans-2-methylcyclohexanol (racemic).\nStep 2: B + PCC: the secondary alcohol goes to the ketone; the C1 stereocentre disappears. C is 2-methylcyclohexanone.\nStep 3: C + CH3MgBr then H3O+: methyl adds to C1, giving OH and CH3 on the same carbon next to the C2 methyl.\nStep 4: D is 1,2-dimethylcyclohexanol, formed as a mixture of cis and trans diastereomers.",
      "note": "The sequence turns a trisubstituted alkene into a tertiary alcohol with a new carbon-carbon bond, a combination that no single hydration can achieve. Acid-catalysed hydration would give 1-methylcyclohexanol directly, a tertiary alcohol that neither oxidises nor accepts a Grignard reagent, and that dead end is the second option.",
      "options": {
        "A": "Correct. Anti-Markovnikov syn hydration to the trans alcohol, oxidation to 2-methylcyclohexanone, and methyl Grignard addition to 1,2-dimethylcyclohexanol.",
        "B": "1-Methylcyclohexanol is the Markovnikov alcohol of oxymercuration or acid-catalysed hydration; boron goes to the less substituted carbon, so the OH ends up on C2, not C1.",
        "C": "The cis alcohol would have the OH on the same face as the methyl; because H and OH add syn, the OH is cis to the new hydrogen at C1 and therefore trans to the methyl.",
        "D": "2,2-Dimethylcyclohexanone has a methyl added to the alpha carbon with the ketone kept; a Grignard reagent attacks the carbonyl carbon and the C=O becomes C-OH. Alpha-alkylation is enolate chemistry, not this."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q1_2_scheme_cresol_bromination",
    "topic": "Reactions of Phenols",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "Cc1ccc(O)cc1"
      ],
      "reagents": "Br2 (1 equiv)",
      "conditions": "CH2Cl2, 0 °C, no catalyst",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring bearing an OH group and, directly across the ring from it, a methyl group."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-Bromo-4-methylphenol",
        "smiles": "Cc1ccc(O)c(Br)c1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Bromo-4-methylphenol",
        "smiles": "Cc1ccc(O)cc1Br",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-(Bromomethyl)phenol",
        "smiles": "BrCc1ccc(O)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,6-Dibromo-4-methylphenol",
        "smiles": "Cc1cc(Br)c(O)c(Br)c1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A phenol's ring is so strongly activated by the OH group that bromine substitutes it with no Lewis acid at all. The OH directs ortho and para; in 4-methylphenol the para position is occupied by the methyl, so the bromine enters ortho to the OH. The methyl also directs ortho and para, but it is a far weaker activator than the hydroxyl, and its ortho positions are the hydroxyl's meta positions, which never compete. One equivalent of bromine at low temperature in a non-polar solvent gives the monobromide.",
      "approach": "Step 1: Rank the two directors: OH (lone pair, strong resonance donor) outranks CH3 (weak). Substitution goes where the OH sends it.\nStep 2: OH directs to positions 2, 4 and 6. Position 4 carries the methyl, so 2 and 6, equivalent by symmetry, are the sites.\nStep 3: One equivalent of Br2 substitutes once; the mild conditions keep it there.\nStep 4: 2-Bromo-4-methylphenol.",
      "note": "The same reaction in water with excess bromine goes on to the 2,6-dibromo compound, because the phenol is partly ionised to the still more reactive phenoxide and nothing moderates the halogen; phenol itself gives 2,4,6-tribromophenol under those conditions. Benzylic bromination of the methyl needs NBS and light, radical conditions that this ionic reaction does not provide.",
      "options": {
        "A": "Correct. The hydroxyl is the controlling director; with its para position blocked by the methyl, bromine goes ortho to the OH, and one equivalent gives monosubstitution.",
        "B": "3-Bromo-4-methylphenol has the bromine ortho to the methyl and meta to the OH; the weak methyl director never outweighs the hydroxyl, which puts nothing meta.",
        "C": "4-(Bromomethyl)phenol is the product of radical benzylic bromination with NBS and light; molecular bromine on a phenol reacts with the ring by electrophilic substitution.",
        "D": "The dibromide needs two equivalents of bromine, or excess bromine in water where the phenol is activated further as its phenoxide; with one equivalent in dichloromethane the reaction stops at the monobromide."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q2_2_scheme_epoxide_grignard",
    "topic": "Grignard Addition",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "C1CCC2OC2C1"
      ],
      "reagents": "1. CH3CH2MgBr\n2. H3O+",
      "conditions": "ether, then water",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A cyclohexane ring fused to a three-membered ring that contains an oxygen atom: cyclohexene oxide."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "trans-2-Ethylcyclohexan-1-ol",
        "smiles": "CC[C@@H]1CCCC[C@H]1O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "cis-2-Ethylcyclohexan-1-ol",
        "smiles": "CC[C@@H]1CCCC[C@@H]1O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Ethylcyclohexan-1-ol",
        "smiles": "CCC1(O)CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Ethylcyclohexan-1-one",
        "smiles": "CCC1CCCCC1=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Grignard reagent opens an epoxide by SN2 attack at a ring carbon, and on a cyclohexene oxide that attack comes from the face opposite the epoxide oxygen. The carbon-oxygen bond at the attacked carbon breaks, the oxygen is left on the neighbouring carbon on the original face, and the new ethyl group is on the other face. The product is therefore the trans-2-substituted cyclohexanol, formed as a racemate: an anti opening, exactly like the opening of an epoxide by hydroxide or by a halide.",
      "approach": "Step 1: The epoxide is symmetrical, so either ring carbon is attacked; the regiochemistry is not an issue.\nStep 2: The ethyl carbanion equivalent attacks C1 from the face anti to the oxygen bridge; the C1-O bond breaks and the alkoxide remains on C2.\nStep 3: The ethyl on C1 and the oxygen on C2 are now on opposite faces of the ring.\nStep 4: Workup protonates the alkoxide: trans-2-ethylcyclohexanol, both enantiomers in equal amount.",
      "note": "Both new groups end up diaxial in the first-formed chair, which then flips to the diequatorial conformer; the trans relationship is fixed by the backside attack and does not depend on which chair is drawn. A ketone would react with the same reagent to give a tertiary alcohol, which is the confusion the third option tests.",
      "options": {
        "A": "Correct. Backside attack on one epoxide carbon puts the ethyl group anti to the oxygen, so the ethyl and the OH are trans on the ring.",
        "B": "The cis isomer would require the ethyl to add on the same face the oxygen occupies, a syn opening; SN2 attack on an epoxide is always anti.",
        "C": "1-Ethylcyclohexanol is the product of ethylmagnesium bromide with cyclohexanone; an epoxide is not a carbonyl, and the ethyl and the OH end up on adjacent carbons, not the same one.",
        "D": "2-Ethylcyclohexanone would need the alcohol to be oxidised afterwards; the Grignard step and the aqueous workup give the alcohol and nothing oxidises it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q15_2_scheme_ester_grignard",
    "topic": "Grignard Addition",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(=O)c1ccccc1"
      ],
      "reagents": "1. CH3MgBr (2 equiv)\n2. H3O+",
      "conditions": "ether, then water",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring bearing an ester carbonyl whose oxygen carries an ethyl group."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-Phenylpropan-2-ol",
        "smiles": "CC(C)(O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetophenone",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Phenylethanol",
        "smiles": "CC(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzyl alcohol",
        "smiles": "OCc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An ester consumes two equivalents of a Grignard reagent. The first addition gives a tetrahedral intermediate that expels ethoxide to form a ketone; the ketone is a better electrophile than the ester and is attacked at once by the second equivalent. The product is a tertiary alcohol carrying the ester's acyl group and two copies of the Grignard's alkyl. Ethyl benzoate with two methyls therefore gives the same alcohol that acetophenone gives with one.",
      "approach": "Step 1: First CH3MgBr adds to the ester carbonyl; loss of ethoxide gives acetophenone.\nStep 2: Acetophenone reacts faster than the remaining ester, so the second CH3MgBr adds to it: a tertiary alkoxide bearing phenyl and two methyls.\nStep 3: Aqueous acid protonates the alkoxide and the ethoxide.\nStep 4: 2-Phenylpropan-2-ol, with ethanol as the by-product.",
      "note": "The intermediate ketone cannot be trapped by using one equivalent, because it out-competes the ester for the reagent; the result is half the ester unreacted and the rest taken to the alcohol. The same reaction on an ester of formic acid gives a secondary alcohol, and on a ketone gives the tertiary alcohol in a single addition.",
      "options": {
        "A": "Correct. Two successive methyl additions, the first replacing ethoxide and the second adding to the resulting ketone, give a carbinol carbon with phenyl and two methyls.",
        "B": "Acetophenone is the intermediate after one addition and elimination of ethoxide; it is more reactive than the ester and is consumed by the second equivalent of Grignard reagent.",
        "C": "1-Phenylethanol would be the reduction product of acetophenone; a Grignard reagent adds carbon to the intermediate ketone, not hydrogen.",
        "D": "Benzyl alcohol is what LiAlH4 gives from ethyl benzoate, two hydrides in place of two methyls; the Grignard reagent puts carbon on the acyl carbon each time."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q51_grignard_ketone",
    "topic": "Organometallic reagents",
    "difficulty_level": "Medium",
    "question_text": "Treatment of pentan-2-one with phenylmagnesium bromide followed by acidic workup yields which of the following compounds?",
    "question_smiles": "CCCC(=O)C",
    "options": [
      {
        "option_id": "A",
        "text": "2-Phenylpentan-2-ol",
        "smiles": "CCCC(O)(C)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Phenylpentan-3-ol",
        "smiles": "CCC(O)(c1ccccc1)CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Phenylpentan-2-ol",
        "smiles": "CCCC(O)Cc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Pentan-2-ol",
        "smiles": "CCCC(O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Grignard reagent adds its carbon to the carbonyl carbon of a ketone, and the carbonyl oxygen becomes the OH of a tertiary alcohol whose three substituents are the ketone's two groups plus the Grignard's R. Pentan-2-one has a methyl and a propyl on its carbonyl carbon; adding phenyl gives a carbinol carbon bearing methyl, propyl and phenyl. The oxygen stays on C2 throughout.",
      "approach": "Step 1: Locate the electrophilic carbon: C2 of pentan-2-one, bearing CH3 and CH2CH2CH3.\nStep 2: Phenyl from PhMgBr adds to C2; the oxygen becomes a magnesium alkoxide.\nStep 3: Aqueous acid protonates the alkoxide.\nStep 4: The product is CH3-C(OH)(Ph)-CH2CH2CH3: 2-phenylpentan-2-ol.",
      "note": "Retrosynthetically the same alcohol can be made by the other two disconnections: 1-phenylbutan-1-one with methylmagnesium bromide, or acetophenone with propylmagnesium bromide. Whichever ketone is used, the position of the OH in the product is fixed by where the carbonyl was.",
      "options": {
        "A": "Correct. Phenyl adds to the C2 carbonyl of pentan-2-one; the product carries OH, methyl, propyl and phenyl on C2.",
        "B": "3-Phenylpentan-3-ol has the OH and phenyl on the middle carbon with two ethyls; that is the product from pentan-3-one, the symmetrical isomer, not pentan-2-one.",
        "C": "1-Phenylpentan-2-ol has the phenyl on C1 and an H on C2; that would come from benzylmagnesium bromide adding to butanal, not from phenyl adding to a ketone.",
        "D": "Pentan-2-ol is the hydride reduction product; a Grignard reagent adds a carbon substituent, not hydrogen, so the product must be a tertiary alcohol."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-carbon chain with a ketone carbonyl at the second carbon."
  },
  {
    "question_id": "ch17_q52_elucidation_phenylethanol",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound Q is a liquid that dissolves in ether but not in aqueous NaOH, gives no colour with $\\text{FeCl}_3$, turns Jones reagent from orange to green, and gives cloudiness with the Lucas reagent within a minute. Combustion analysis gives C 78.7% and H 8.2% by mass. IR: 3350 (broad, strong), 3030, 2975, 1495, 1450 and $1080\\text{ cm}^{-1}$, with strong bands at 760 and $700\\text{ cm}^{-1}$ and nothing between 1650 and $1800\\text{ cm}^{-1}$. Mass spectrum: $\\text{M}^+$ at $m/z = 122$, base peak at 107, and peaks at 104, 79 and 77. The $^1\\text{H}$ NMR spectrum is shown; the signal at 2.0 ppm disappears when the sample is shaken with $\\text{D}_2\\text{O}$. Which structure is Q?",
    "question_smiles": "",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 7.32,
          "y": 5,
          "label": "multiplet"
        },
        {
          "x": 4.88,
          "y": 1,
          "label": "quartet"
        },
        {
          "x": 2,
          "y": 1,
          "label": "singlet"
        },
        {
          "x": 1.48,
          "y": 3,
          "label": "doublet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-Phenylethanol",
        "smiles": "CC(O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Phenylethanol",
        "smiles": "OCCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-Methylbenzyl alcohol",
        "smiles": "Cc1ccc(CO)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-Ethylphenol",
        "smiles": "CCc1ccc(O)cc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The chemical tests sort the four isomers before a spectrum is read: insoluble in NaOH and no FeCl3 colour rules out a phenol; a positive Jones test says primary or secondary alcohol; a fast Lucas test on a small molecule says the carbocation is stabilised, here benzylic. The spectra then place the atoms: a broad 3350 band is the O-H, the 760/700 pair is a monosubstituted ring, and a one-proton quartet at 4.88 ppm coupled to a three-proton doublet is a CH(O)-CH3 unit. Only 1-phenylethanol has all of it.",
      "approach": "Step 1: Formula. Per 100 g: C 78.7/12.01 = 6.55, H 8.2/1.008 = 8.13, O by difference 13.1/16.00 = 0.82. Divide by 0.82: C 8, H 10, O 1. C8H10O, M = 122, matching the molecular ion. Unsaturation = (2 x 8 + 2 - 10)/2 = 4: a benzene ring, and the IR shows no C=O.\nStep 2: Functional group. Broad 3350: O-H. NaOH-insoluble and FeCl3-negative: not a phenol, so an alcohol. Jones positive: the carbinol carbon has a hydrogen. Lucas fast: benzylic.\nStep 3: Ring pattern. A five-proton multiplet at 7.32 and strong bands at 760 and 700: monosubstituted, so all of C2H5O is one side chain.\nStep 4: Side chain. One-proton quartet at 4.88 (a CH bearing oxygen and coupled to three hydrogens), three-proton doublet at 1.48, exchangeable singlet at 2.0: Ph-CH(OH)-CH3. The base peak at 107 is M - 15, loss of the methyl by alpha cleavage to the resonance-stabilised PhCH=OH+; 104 is M - 18. Q is 1-phenylethanol.",
      "note": "Alpha cleavage is the mass-spectral signature of an alcohol: the bond next to the carbinol carbon breaks so the charge sits on an oxygen-stabilised cation, and the largest alkyl group is lost preferentially. Here the only alkyl is methyl, and the benzylic, oxygen-stabilised cation at m/z 107 dominates the spectrum. The 2-phenyl isomer breaks the other way and shows the tropylium ion at 91 as its base peak.",
      "options": {
        "A": "Correct. A monosubstituted ring, a secondary benzylic alcohol with a CH(OH)CH3 quartet-doublet pair, an exchangeable OH, and a base peak from loss of methyl next to the carbinol carbon.",
        "B": "2-Phenylethanol would show two two-proton triplets near 3.85 and 2.87 instead of a quartet and a doublet, a base peak at 91 from benzylic cleavage, and a slow Lucas test, because its cation would be primary, not benzylic.",
        "C": "4-Methylbenzyl alcohol is a para-disubstituted ring: two doublets near 7.2 and 7.1 with a strong band near 815, not a five-proton multiplet with 760 and 700, and its side chain gives two singlets (CH2 at 4.6, CH3 at 2.35), never a quartet-doublet pair.",
        "D": "4-Ethylphenol is a phenol: soluble in aqueous NaOH, a colour with FeCl3, no reaction with Jones reagent, and an ethyl quartet near 2.6 with a triplet near 1.2 on a para-substituted ring."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch17_q53_elucidation_methylpentanol",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound R has the composition C 70.5% and H 13.8% by mass. Its mass spectrum shows no molecular ion; the highest peak is at $m/z = 87$, the base peak is at 73, and there is a smaller peak at 84. R is insoluble in aqueous NaOH, gives immediate cloudiness with the Lucas reagent, and leaves Jones reagent orange. IR: 3400 (broad, strong), 2970, 2880, 1460, 1375 and $1140\\text{ cm}^{-1}$; nothing between 1650 and $1800\\text{ cm}^{-1}$. The $^1\\text{H}$ NMR spectrum is shown; the singlet at 1.75 ppm exchanges with $\\text{D}_2\\text{O}$. Which structure is R?",
    "question_smiles": "",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 1.75,
          "y": 1,
          "label": "singlet"
        },
        {
          "x": 1.47,
          "y": 4,
          "label": "quartet"
        },
        {
          "x": 1.12,
          "y": 3,
          "label": "singlet"
        },
        {
          "x": 0.88,
          "y": 6,
          "label": "triplet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "3-Methylpentan-3-ol",
        "smiles": "CCC(C)(O)CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Methylpentan-2-ol",
        "smiles": "CCCC(C)(O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,3-Dimethylbutan-2-ol",
        "smiles": "CC(C)C(C)(O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Hexan-3-ol",
        "smiles": "CCCC(O)CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two lab tests settle the class of alcohol: immediate Lucas cloudiness with no Jones colour change is a tertiary alcohol, one that ionises at once but has no carbinol hydrogen to oxidise. C6H14O has three tertiary alcohols, and the NMR tells them apart by symmetry: two equivalent ethyl groups give one quartet and one six-proton triplet, and a lone methyl on the carbinol carbon gives a three-proton singlet. The mass spectrum agrees, losing an ethyl by alpha cleavage to give the base peak.",
      "approach": "Step 1: Formula. Per 100 g: C 70.5/12.01 = 5.87, H 13.8/1.008 = 13.69, O by difference 15.7/16.00 = 0.98. Divide by 0.98: C 6, H 14, O 1. C6H14O, M = 102. Unsaturation = (2 x 6 + 2 - 14)/2 = 0: no ring, no double bond, and the IR shows no C=O.\nStep 2: Class. Broad 3400: O-H. Lucas immediate and Jones negative: tertiary. That leaves 3-methylpentan-3-ol, 2-methylpentan-2-ol and 2,3-dimethylbutan-2-ol.\nStep 3: NMR symmetry. A four-proton quartet at 1.47 coupled to a six-proton triplet at 0.88: two identical ethyls. A three-proton singlet at 1.12: one methyl on a carbon with no hydrogens. Exchangeable singlet at 1.75: the OH. Total 14 H. Only 3-methylpentan-3-ol fits.\nStep 4: Mass spectrum. Tertiary alcohols rarely show M+; alpha cleavage loses the larger alkyl first, so loss of ethyl (M - 29) gives the base peak at 73, loss of methyl gives 87, and loss of water gives 84. R is 3-methylpentan-3-ol.",
      "note": "The absence of a molecular ion is itself a clue: tertiary and many secondary alcohols fragment so readily by alpha cleavage and dehydration that the parent ion never survives, and the highest visible peak is M minus a small group. Reading M from the highest peak would have given a C5 formula, contradicting the analysis, which is why the two are always cross-checked.",
      "options": {
        "A": "Correct. A tertiary alcohol with two equivalent ethyls (quartet and six-proton triplet) and one methyl singlet, losing an ethyl by alpha cleavage to the base peak at 73.",
        "B": "2-Methylpentan-2-ol is tertiary but has two equivalent methyls on the carbinol carbon: a six-proton singlet near 1.2, a three-proton triplet, and alpha cleavage that loses the propyl group to give a base peak at 59, not 73.",
        "C": "2,3-Dimethylbutan-2-ol would show a one-proton septet near 1.65 with a six-proton doublet, plus a six-proton singlet; it has no ethyl group and no quartet, and its base peak from loss of isopropyl would be at 59.",
        "D": "Hexan-3-ol is secondary: it turns Jones reagent green, reacts with the Lucas reagent only over several minutes, and shows a one-proton multiplet near 3.5 ppm for the CH-O hydrogen, which R lacks."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  }
];
