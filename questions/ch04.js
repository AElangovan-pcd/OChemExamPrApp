// OChemStudyBuddy - McMurry Chapter 4
// Author: A. Elangovan, PhD
var CH04_QUESTIONS = [
  {
    "question_id": "ch04_q1_iupac_lowest_locant",
    "topic": "Cycloalkane Nomenclature",
    "difficulty_level": "Medium",
    "question_text": "What is the correct IUPAC name for the following trisubstituted cyclohexane?",
    "question_smiles": "CC1CCC(CC)C(C)C1",
    "options": [
      {
        "option_id": "A",
        "text": "1-Ethyl-2,4-dimethylcyclohexane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-Ethyl-1,2-dimethylcyclohexane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Ethyl-3,4-dimethylcyclohexane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5-Ethyl-1,2-dimethylcyclohexane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A ring has no ends, so numbering can start at any substituted carbon and run in either direction. Every one of those options must be compared, and the lowest locant set as a whole decides - not the lowest first number.",
      "approach": "Step 1: Identify the substituents and their relative spacing round the ring: an ethyl, a methyl adjacent to it, and a second methyl two carbons further on.\nStep 2: Work through the numberings. Starting at each substituted carbon and going both ways gives sets including 1,4,5 and 1,3,4 and 1,2,5 - and, starting at the ethyl and running toward the nearer methyl, 1,2,4.\nStep 3: Compare term by term. 1,2,4 wins at the second term against every alternative, so the ethyl takes C1, one methyl C2 and the other C4. Cite alphabetically: 1-ethyl-2,4-dimethylcyclohexane.",
      "note": "Twelve numberings exist for a trisubstituted six-ring - six starting points times two directions - and it is worth writing out the plausible ones rather than trusting the first that looks small. A set beginning 1,2 always beats one beginning 1,3, whatever the third number turns out to be.",
      "options": {
        "A": "Correct. The locant set 1,2,4 is the lowest available, and ethyl precedes methyl alphabetically in the citation.",
        "B": "The right molecule under the wrong name. The set 1,2,4 was available but this numbering produces 1,2,4 assigned to the wrong carbons, placing the ethyl at C4 rather than taking the set that starts at the ethyl.",
        "C": "The right molecule under the wrong name, numbered to give 1,3,4. Compared with 1,2,4 it loses at the second term.",
        "D": "The right molecule under the wrong name, numbered to give 1,2,5 - which ties 1,2,4 for two terms and then loses at the third."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered carbon ring carrying an ethyl group, with a methyl group on the ring carbon next to it and a second methyl two positions further round."
  },
  {
    "question_id": "ch04_q2_ring_vs_chain_priority",
    "topic": "Cycloalkane Nomenclature",
    "difficulty_level": "Easy",
    "question_text": "Determine the correct IUPAC name for the compound shown below, where a cyclobutyl ring is attached to a six-carbon chain.",
    "question_smiles": "CCCC(C1CCC1)CC",
    "options": [
      {
        "option_id": "A",
        "text": "3-Cyclobutylhexane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Hexylcyclobutane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(1-Ethylbutyl)cyclobutane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-Cyclobutylhexane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When a molecule contains both a ring and a chain, one becomes the parent and the other a substituent. The choice is made by size: whichever has more carbons is the parent.",
      "approach": "Step 1: Count both. The chain runs to six carbons and the ring has four.\nStep 2: Six beats four, so the chain is the parent - hexane - and the ring becomes a cyclobutyl substituent.\nStep 3: Number the chain for the lowest locant. The ring sits on the third carbon counting from the nearer end, giving 3-cyclobutylhexane.",
      "note": "The convention differs between sources and older texts sometimes made the ring the parent regardless. The modern rule is the size comparison, so a small ring on a long chain is a substituent, while the same ring carrying a short chain would be the parent instead.",
      "options": {
        "A": "Correct. The six-carbon chain outranks the four-membered ring, so hexane is the parent and the ring is a cyclobutyl substituent at C3.",
        "B": "This makes the smaller ring the parent, which reverses the size rule. It would also require a hexyl substituent, and the chain here attaches through an internal carbon rather than an end.",
        "C": "This too treats the ring as parent. The chain attaches through its third carbon, so naming it as a 1-ethylbutyl substituent is both awkward and the wrong way round.",
        "D": "The right molecule under the wrong name. Numbering the chain from the far end gives locant 4 where 3 is available."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-carbon chain with a four-membered carbon ring attached to its third carbon."
  },
  {
    "question_id": "ch04_q3_alphabetical_numbering_tiebreaker",
    "topic": "Cycloalkane Nomenclature",
    "difficulty_level": "Medium",
    "question_text": "Assign the correct IUPAC name for a disubstituted cyclohexane containing a methyl group and an isopropyl group at the 1 and 3 positions.",
    "question_smiles": "CC(C)C1CCCC(C)C1",
    "options": [
      {
        "option_id": "A",
        "text": "1-Isopropyl-3-methylcyclohexane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Isopropyl-1-methylcyclohexane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Methyl-3-(1-methylethyl)cyclohexane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Methyl-5-isopropylcyclohexane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When two substituents can be given the same pair of locants either way round, the locant set cannot decide between them. IUPAC breaks that tie alphabetically: the substituent cited first gets the lower number.",
      "approach": "Step 1: Establish the locants. The two groups sit in a 1,3 relationship, and that set is the same whichever substituent is called C1.\nStep 2: Since the sets tie, apply the alphabetical tiebreaker.\nStep 3: Isopropyl files under i and methyl under m, so isopropyl is cited first and takes C1, giving 1-isopropyl-3-methylcyclohexane.",
      "note": "Option C is not simply wrong. It uses the older systematic substituent name 1-methylethyl, which alphabetises under m - and since methyl sorts before methylethyl, that name legitimately assigns C1 to the methyl instead. Both describe the same compound and each is internally consistent; this item expects the retained name isopropyl, and current IUPAC would prefer propan-2-yl over either.",
      "options": {
        "A": "Correct. With the locant set tied at 1,3, the alphabetical tiebreaker gives C1 to isopropyl, which precedes methyl.",
        "B": "The right molecule under the wrong name. The locants are the correct pair but assigned the wrong way round, giving the lower number to methyl rather than to the alphabetically earlier isopropyl.",
        "C": "Defensible rather than wrong: written as 1-methylethyl the substituent alphabetises under m, and methyl then sorts first and takes C1. The name expected here uses the retained form isopropyl.",
        "D": "The right molecule under the wrong name. A 1,5 relationship on a six-membered ring is the same as 1,3 counted the other way, and 1,3 is the lower set."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered carbon ring carrying a methyl group and, two ring carbons away, a three-carbon branched substituent."
  },
  {
    "question_id": "ch04_q4_lowest_locant_dimethyl",
    "topic": "Cycloalkane Nomenclature",
    "difficulty_level": "Medium",
    "question_text": "What is the IUPAC name of the following compound?",
    "question_smiles": "CC1(C)CC(C)CC1",
    "options": [
      {
        "option_id": "A",
        "text": "1,1,3-Trimethylcyclopentane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,3,3-Trimethylcyclopentane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,4,4-Trimethylcyclopentane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,1,4-Trimethylcyclopentane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two substituents on the same ring carbon both take that carbon's number, so the locant appears twice. The numbering is still chosen to make the whole set as low as possible.",
      "approach": "Step 1: Note the arrangement - a carbon bearing two methyls, and a third methyl two positions away round a five-membered ring.\nStep 2: Start numbering at the doubly substituted carbon, since giving it C1 puts two of the three locants at their minimum immediately.\nStep 3: Choose the direction. Going toward the lone methyl reaches it at C3; going the other way reaches it at C4. The set 1,1,3 beats 1,1,4, giving 1,1,3-trimethylcyclopentane.",
      "note": "Starting at the doubly substituted carbon is not itself a rule - it happens to produce the lowest set here because two locants are fixed at once. The rule remains to compare complete sets, and a case with substituents at 1,1,4 against 2,2,3 would need that comparison made properly rather than assumed.",
      "options": {
        "A": "Correct. Numbering from the doubly substituted carbon toward the nearer lone methyl gives the set 1,1,3.",
        "B": "The right molecule under the wrong name. This starts at the lone methyl, pushing the pair to C3 and giving 1,3,3, which loses at the second term.",
        "C": "The right molecule under the wrong name. Beginning at an unsubstituted ring carbon wastes C1 entirely, and no substituent should carry a locant higher than necessary.",
        "D": "The right molecule under the wrong name. Numbering from the doubly substituted carbon in the other direction reaches the lone methyl at C4 rather than C3."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-membered carbon ring with two methyl groups on one ring carbon and a third methyl two carbons away."
  },
  {
    "question_id": "ch04_q5_bicyclo_heptane_norbornane",
    "topic": "Cycloalkane Nomenclature",
    "difficulty_level": "Hard",
    "question_text": "Select the correct IUPAC name for the bridged bicyclic compound known commonly as norbornane.",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Bicyclo[2.2.1]heptane",
        "smiles": "C1CC2CCC1C2",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Bicyclo[2.2.2]octane",
        "smiles": "C1CC2CCC1(CC2)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Bicyclo[3.2.0]heptane",
        "smiles": "C1CC2C1CCC2",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Bicyclo[2.1.1]hexane",
        "smiles": "C1CC2CC1C2",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A bicyclic name has two parts to get right: the bracketed numbers count the carbons in each bridge between the two bridgehead atoms, and the parent name counts every carbon in the system.",
      "approach": "Step 1: Count the total carbons. Norbornane has seven, so the parent is heptane and the name ends in heptane.\nStep 2: Identify the bridgeheads - the two carbons shared by both rings - and count the carbons in each bridge connecting them, ignoring the bridgeheads themselves.\nStep 3: The three bridges hold two, two and one carbon, cited in decreasing order, giving bicyclo[2.2.1]heptane. Check the arithmetic: 2 plus 2 plus 1 plus the two bridgeheads is seven.",
      "note": "That arithmetic check catches most errors: the bracketed numbers plus 2 for the bridgeheads must equal the parent's carbon count. Norbornane's rigid bicyclic cage also makes it a favourite substrate in mechanism studies, since its geometry blocks reaction pathways that are open to ordinary rings.",
      "options": {
        "A": "Correct. Bridges of two, two and one carbon plus two bridgeheads gives seven carbons, matching the heptane parent.",
        "B": "Bicyclo[2.2.2]octane has bridges summing to six, which with two bridgeheads makes eight carbons - one more than norbornane.",
        "C": "Bicyclo[3.2.0]heptane has the right carbon count but a different arrangement: a zero bridge means the rings are fused at adjacent carbons rather than bridged.",
        "D": "Bicyclo[2.1.1]hexane sums to four bridge carbons plus two bridgeheads, giving six rather than seven."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q6_alphabetical_prefix_cyclopentane",
    "topic": "Cycloalkane Nomenclature",
    "difficulty_level": "Medium",
    "question_text": "What is the systematic IUPAC name for a cyclopentane ring substituted with a tert-butyl group and a methyl group in a 1,3-relationship?",
    "question_smiles": "CC(C)(C)C1CCC(C)C1",
    "options": [
      {
        "option_id": "A",
        "text": "1-tert-Butyl-3-methylcyclopentane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-tert-Butyl-1-methylcyclopentane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Methyl-3-tert-butylcyclopentane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Butyl-3-methylcyclopentane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Italicised structural prefixes such as tert- and sec- are ignored when alphabetising, so a tert-butyl group files under b. That is what decides which substituent takes the lower locant when the sets tie.",
      "approach": "Step 1: Fix the locants. The two groups sit 1,3 to each other on the five-membered ring, and that set is the same either way round.\nStep 2: Alphabetise. Strip the italicised tert- and the group files under b for butyl; methyl files under m. So b precedes m.\nStep 3: The alphabetically earlier substituent takes C1, giving 1-tert-butyl-3-methylcyclopentane.",
      "note": "Contrast this with isobutyl, where the iso prefix is not italicised and does count, filing the group under i. The distinction is that tert- and sec- describe the attachment carbon while iso- is treated as part of the substituent's name - arbitrary-looking, but it decides cases like this one.",
      "options": {
        "A": "Correct. Ignoring the italicised tert-, butyl files under b and precedes methyl, so it takes C1.",
        "B": "The right molecule under the wrong name. The locants are correct but assigned the wrong way round, giving C1 to methyl when butyl sorts earlier.",
        "C": "The right molecule under the wrong name. The substituents are cited in the wrong order - tert-butyl alphabetises under b and must be written first.",
        "D": "This names a different compound. A plain butyl group is an unbranched four-carbon chain, not the branched tert-butyl group shown."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-membered carbon ring carrying a methyl group and, two ring carbons away, a carbon bearing three methyl groups."
  },
  {
    "question_id": "ch04_q7_decalin_iupac",
    "topic": "Cycloalkane Nomenclature",
    "difficulty_level": "Hard",
    "question_text": "What is the systematic IUPAC name for decalin, a fused bicyclic alkane consisting of two conjoined six-membered rings?",
    "question_smiles": "C1CCC2CCCCC2C1",
    "options": [
      {
        "option_id": "A",
        "text": "Bicyclo[4.4.0]decane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Bicyclo[4.4.1]undecane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Bicyclo[3.3.0]octane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Bicyclo[4.3.0]nonane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Fused bicyclic systems, where the two rings share an edge rather than a longer bridge, are still named with bicyclo notation. A shared edge means the third bridge contains no carbons at all, which is written as zero.",
      "approach": "Step 1: Count the total carbons. Decalin has ten, so the parent is decane.\nStep 2: Identify the bridgeheads - the two carbons shared between the rings - and count the bridges between them. Each ring contributes four carbons, and the direct bond between the bridgeheads is the third bridge with zero carbons.\nStep 3: Cite in decreasing order: bicyclo[4.4.0]decane. Check: 4 plus 4 plus 0 plus two bridgeheads makes ten.",
      "note": "A zero in the brackets is the signature of a fused system as opposed to a bridged one. Decalin also exists as cis and trans ring-fusion isomers that differ markedly in shape and stability, which is where this chapter's conformational analysis of cyclohexane becomes directly useful.",
      "options": {
        "A": "Correct. Two four-carbon bridges plus a zero bridge and two bridgeheads gives ten carbons, matching decane.",
        "B": "Bicyclo[4.4.1]undecane has a one-carbon third bridge, making eleven carbons and a genuinely bridged rather than fused system.",
        "C": "Bicyclo[3.3.0]octane is the fused system built from two five-membered rings, with eight carbons rather than ten.",
        "D": "Bicyclo[4.3.0]nonane fuses a six-membered ring to a five-membered one, totalling nine carbons."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two six-membered carbon rings sharing an edge, so that two carbons belong to both rings."
  },
  {
    "question_id": "ch04_q8_ring_assembled_cycloalkyl",
    "topic": "Cycloalkane Nomenclature",
    "difficulty_level": "Easy",
    "question_text": "What is the IUPAC name for the compound composed of two cyclobutane rings connected by a single carbon-carbon covalent bond?",
    "question_smiles": "C1CC(C1)C2CCC2",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclobutylcyclobutane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Bicyclobutyl",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,1'-Bicyclobutane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Cyclobutylcyclobutane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two rings joined by a single bond share no atoms at all, which makes this a quite different case from fused or bridged bicyclics. With no shared carbons, bicyclo notation does not apply.",
      "approach": "Step 1: Check whether any atoms are shared. Here they are not - one carbon of each ring is joined by an ordinary single bond.\nStep 2: Rule out bicyclo naming, which describes systems where two rings share two or more atoms.\nStep 3: Treat one ring as the parent and the other as a substituent on it, giving cyclobutylcyclobutane.",
      "note": "The count in a bicyclo name refers to atoms in the ring system as a whole, so a bicyclo[n.n.n] name always implies shared atoms. Reserving that notation for genuinely fused or bridged systems keeps the distinction visible in the name itself.",
      "options": {
        "A": "Correct. The rings share no atoms, so one is named as a substituent on the other in ordinary substitutive fashion.",
        "B": "Bicyclobutyl leaves the parent unnamed - a substituent name standing alone rather than a complete compound name.",
        "C": "The bicyclo prefix implies shared atoms between the rings. These two share none, being joined only by a single bond.",
        "D": "The locant is superfluous. With only one substituent on the parent ring, there is nothing for the number to distinguish."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two four-membered carbon rings joined to each other by a single bond between one carbon of each."
  },
  {
    "question_id": "ch04_q9_cis_trans_naming_cyclobutane",
    "topic": "Cycloalkane Nomenclature",
    "difficulty_level": "Medium",
    "question_text": "Identify the systematic name for the cyclobutane derivative that has ethyl groups on C1 and C2 pointing to the same face of the ring.",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "cis-1,2-Diethylcyclobutane",
        "smiles": "CC[C@@H]1CC[C@@H]1CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "trans-1,2-Diethylcyclobutane",
        "smiles": "CC[C@H]1CC[C@@H]1CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "cis-1,3-Diethylcyclobutane",
        "smiles": "CC[C@@H]1C[C@@H](CC)C1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "trans-1,3-Diethylcyclobutane",
        "smiles": "CC[C@H]1C[C@@H](CC)C1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A ring cannot rotate about its own bonds, so substituents are locked either above or below the mean plane of the ring. That locking creates stereoisomers that a chain of the same connectivity would not have.",
      "approach": "Step 1: Read the locants from the description - the two ethyl groups sit on adjacent ring carbons, so 1,2.\nStep 2: Read the relative stereochemistry. Both point to the same face of the ring.\nStep 3: Same face is cis and opposite faces is trans, giving cis-1,2-diethylcyclobutane.",
      "note": "These are genuine stereoisomers, separable and with different physical properties, unlike the conformations of butane that interconvert freely by rotation. Ring closure is what converts a rotational freedom into a fixed stereochemical relationship.",
      "options": {
        "A": "Correct. Adjacent carbons give the 1,2 locants and the same face gives cis.",
        "B": "Trans would put the two ethyl groups on opposite faces of the ring, which is the other stereoisomer of the same constitution.",
        "C": "A 1,3 relationship places the substituents with one ring carbon between them, not on adjacent carbons.",
        "D": "This has both the locants and the stereochemistry wrong relative to the description given."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q10_polysubstituted_cyclohexane_locants",
    "topic": "Cycloalkane Nomenclature",
    "difficulty_level": "Hard",
    "question_text": "What is the systematic IUPAC name for the cyclohexane derivative shown below?",
    "question_smiles": "CC(C)C1CCC(C)C(C)C1",
    "options": [
      {
        "option_id": "A",
        "text": "4-Isopropyl-1,2-dimethylcyclohexane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Isopropyl-3,4-dimethylcyclohexane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5-Isopropyl-1,2-dimethylcyclohexane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-Isopropyl-2,3-dimethylcyclohexane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "With three substituents on a ring, the lowest locant set is found by testing every starting point and direction. Only after the numbering is settled does alphabetical order come into play, and it governs the citation rather than the numbers.",
      "approach": "Step 1: Note the arrangement - two methyls on adjacent carbons, and a branched three-carbon group separated from them.\nStep 2: Test the numberings. Starting at one of the adjacent methyls and running toward the other gives methyls at 1 and 2 and the isopropyl at 4, the set 1,2,4. Alternatives give 1,3,4 and 1,2,5, both of which lose on comparison.\nStep 3: With numbering fixed, cite the substituents alphabetically: isopropyl before methyl, giving 4-isopropyl-1,2-dimethylcyclohexane.",
      "note": "Notice that the alphabetically first substituent here carries the highest locant. Alphabetical order controls only the order of writing; it never overrides a locant set that has already been chosen as the lowest. The two rules operate at different stages.",
      "options": {
        "A": "Correct. The set 1,2,4 is the lowest available, and isopropyl is written first because citation order is alphabetical.",
        "B": "The right molecule under the wrong name, numbered to give 1,3,4, which loses to 1,2,4 at the second term.",
        "C": "The right molecule under the wrong name, numbered to give 1,2,5. It ties 1,2,4 for two terms and then loses at the third.",
        "D": "The right molecule under the wrong name. This assigns the methyls 2 and 3 where 1 and 2 are available, giving a higher set overall."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered carbon ring carrying a three-carbon branched substituent, with two methyl groups on adjacent ring carbons positioned away from it."
  },
  {
    "question_id": "ch04_q11_highest_ring_strain",
    "topic": "Ring Strain & Heats of Combustion",
    "difficulty_level": "Easy",
    "question_text": "Which of the following cycloalkanes possesses the greatest total ring strain?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclopropane",
        "smiles": "C1CC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclobutane",
        "smiles": "C1CCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclopentane",
        "smiles": "C1CCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclohexane",
        "smiles": "C1CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Total ring strain combines angle strain, from bond angles forced away from 109.5 degrees, and torsional strain, from eclipsed bonds the ring cannot relieve. Small rings suffer both at once and cannot escape either by puckering.",
      "approach": "Step 1: Consider angle strain. A planar three-membered ring forces 60 degree internal angles, the largest possible distortion from the tetrahedral ideal.\nStep 2: Consider torsional strain. Cyclopropane must be planar, since three points define a plane, so every pair of C-H bonds on adjacent carbons is fully eclipsed.\nStep 3: Both maxima coincide, giving about 115 kJ/mol - the greatest of the four, ahead of cyclobutane's 110, cyclopentane's 26 and cyclohexane's zero.",
      "note": "Cyclobutane runs cyclopropane surprisingly close despite its less distorted 90 degree angles, because it has an extra carbon's worth of eclipsing and only a slight pucker to relieve it. Total strain per ring and strain per CH2 group tell different stories, and it is worth being clear which is being compared.",
      "options": {
        "A": "Correct. The 60 degree angles are the most distorted possible and the enforced planarity eclipses every adjacent C-H pair, giving about 115 kJ/mol.",
        "B": "Cyclobutane is close behind at about 110 kJ/mol, its lower angle strain offset by more eclipsing interactions, but it does not exceed cyclopropane.",
        "C": "Cyclopentane puckers into an envelope that relieves most of its strain, leaving only about 26 kJ/mol.",
        "D": "Cyclohexane adopts a chair with ideal tetrahedral angles and every bond staggered, so it is essentially strain-free."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q12_ring_strain_per_ch2",
    "topic": "Ring Strain & Heats of Combustion",
    "difficulty_level": "Medium",
    "question_text": "Rank the following cycloalkanes in order of decreasing ring strain per methylene (CH2) group: cyclopropane, cyclobutane, cyclopentane, cyclohexane.",
    "question_smiles": "C1CC1",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclopropane > Cyclobutane > Cyclopentane > Cyclohexane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclobutane > Cyclopropane > Cyclopentane > Cyclohexane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclopropane > Cyclopentane > Cyclobutane > Cyclohexane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclohexane > Cyclopentane > Cyclobutane > Cyclopropane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Strain per methylene group divides a ring's total strain by the number of CH2 units it contains. It answers a different question from total strain: how badly is each carbon compromised, rather than how much strain the whole ring carries.",
      "approach": "Step 1: Take the total strains - about 115 kJ/mol for cyclopropane, 110 for cyclobutane, 26 for cyclopentane and zero for cyclohexane.\nStep 2: Divide each by its number of carbons: 115 over 3 is about 38, 110 over 4 is about 27.5, 26 over 5 is about 5, and zero over 6 is zero.\nStep 3: The order falls steadily from cyclopropane down to cyclohexane, the same ranking the totals give in this case.",
      "note": "The two measures agree here but need not in general. Cyclopropane and cyclobutane have nearly equal totals yet clearly different per-CH2 values, because the strain is shared among a different number of carbons - which is why the per-group figure is the fairer comparison of how strained an individual carbon actually is.",
      "options": {
        "A": "Correct. Dividing each total by its carbon count gives roughly 38, 27.5, 5 and 0 kJ/mol per CH2, falling steadily with ring size.",
        "B": "This places cyclobutane first, but its total is slightly lower than cyclopropane's and it is spread over four carbons rather than three, so its per-CH2 figure is clearly smaller.",
        "C": "This puts cyclopentane ahead of cyclobutane. Cyclopentane puckers to relieve most of its strain and carries only about 5 kJ/mol per CH2 against cyclobutane's 27.5.",
        "D": "This is the ranking reversed. Cyclohexane is strain-free and cyclopropane the most strained, so it cannot head the list."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-membered carbon ring."
  },
  {
    "question_id": "ch04_q13_heat_of_combustion_stability",
    "topic": "Ring Strain & Heats of Combustion",
    "difficulty_level": "Medium",
    "question_text": "Which statement best explains why cyclohexane has the lowest heat of combustion per CH2 group (~658.7 kJ/mol) among the cycloalkanes?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "It is virtually free of both angle strain and torsional strain.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It has planar geometry which maximizes orbital overlap.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Its C-C-C angles are forced to be exactly 120 degrees.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It has significant transannular strain which stabilizes the C-C bonds.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Heat of combustion per CH2 group is a way of comparing rings of different sizes on equal terms. A ring free of strain releases the least energy per group, since it started from the lowest energy.",
      "approach": "Step 1: Ask what would make a ring strain-free. Bond angles at the tetrahedral value remove angle strain, and staggered bonds throughout remove torsional strain.\nStep 2: Check whether cyclohexane achieves both. Its chair conformation has C-C-C angles of about 111 degrees, essentially tetrahedral, and every adjacent pair of bonds staggered.\nStep 3: With neither source of strain present, cyclohexane sits at the baseline, which is why its value per CH2 defines the strain-free reference.",
      "note": "Achieving both at once requires the ring to be non-planar - the chair puckers precisely so that it can hold tetrahedral angles and stagger its bonds simultaneously. A flat six-membered ring would have 120 degree angles and every bond eclipsed, which is far worse.",
      "options": {
        "A": "Correct. The chair conformation achieves near-tetrahedral angles and fully staggered bonds at the same time, leaving essentially no strain of either kind.",
        "B": "Cyclohexane is not planar. Its chair is puckered, and it is precisely that puckering which lets it avoid both angle and torsional strain.",
        "C": "120 degree angles belong to a planar hexagon, which cyclohexane avoids. Its actual C-C-C angles are close to the tetrahedral 111 degrees.",
        "D": "Transannular strain is a destabilising interaction across a ring, and in any case cyclohexane is too small to suffer it. Strain never stabilises anything."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q14_torsional_strain_definition",
    "topic": "Ring Strain & Heats of Combustion",
    "difficulty_level": "Easy",
    "question_text": "What type of strain is defined as the destabilization caused by the eclipsing of C-H or C-C bonds on adjacent carbon atoms?",
    "question_smiles": "C1CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Torsional strain",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Angle strain",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Steric strain",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Transannular strain",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Three kinds of strain are distinguished in ring chemistry, and each has its own physical origin. Naming them precisely matters because a given ring can suffer from more than one at once.",
      "approach": "Step 1: Match the description given - bonds on adjacent atoms brought into alignment.\nStep 2: Recall the cause. Aligning filled bonding orbitals on neighbouring carbons brings their electrons into opposition, and the repulsion raises the energy.\nStep 3: That is torsional strain, the same effect that makes eclipsed ethane higher in energy than staggered ethane.",
      "note": "Torsional strain is about bonds, not atoms - the hydrogens in eclipsed ethane never come close enough to touch. Steric strain, by contrast, requires atoms actually pushed inside their van der Waals radii, which is a separate condition that can occur in staggered arrangements too.",
      "options": {
        "A": "Correct. Eclipsing aligns filled bonding orbitals on adjacent carbons, and the resulting electron repulsion is torsional strain.",
        "B": "Angle strain is distortion of bond angles from the ideal tetrahedral value, which depends on ring size rather than on rotation.",
        "C": "Steric strain requires non-bonded atoms forced closer than their van der Waals radii allow, which is a different condition from bonds being aligned.",
        "D": "Transannular strain is crowding between groups on opposite sides of a medium-sized ring, not between adjacent atoms."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-membered carbon ring."
  },
  {
    "question_id": "ch04_q15_baeyer_theory_flaw",
    "topic": "Ring Strain & Heats of Combustion",
    "difficulty_level": "Medium",
    "question_text": "Adolf von Baeyer proposed that cyclopentane would be the most stable cycloalkane because its internal angles (108°) are closest to the tetrahedral angle (109.5°). Why was his theory fundamentally flawed?",
    "question_smiles": "C1CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "He assumed that all cycloalkanes are planar.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "He did not know the tetrahedral angle of carbon.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "He overestimated the angle strain of cyclopropane.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "He failed to consider carbon-carbon double bonds.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Baeyer's angle strain theory was sound in its central idea - that forcing bond angles away from tetrahedral costs energy - but it rested on a geometric assumption that turns out to be false for all but the smallest rings.",
      "approach": "Step 1: Identify the assumption. Baeyer calculated internal angles from regular planar polygons, which fixes cyclopentane at 108 degrees and cyclohexane at 120.\nStep 2: Test it against reality. Rings larger than cyclopropane are not planar; they pucker, and puckering changes the angles from the planar values entirely.\nStep 3: Cyclohexane's chair achieves about 111 degrees rather than 120, so it is less strained than cyclopentane rather than more - the opposite of Baeyer's prediction.",
      "note": "Cyclopropane is the one ring where the assumption holds, since three points necessarily define a plane. That is also why it is the only ring whose strain Baeyer's approach estimates at all well, and it makes a useful check on any theory - the case it gets right shows exactly what it assumed.",
      "options": {
        "A": "Correct. Baeyer assumed planar rings, so his angles came from regular polygons. Every ring from cyclobutane upward puckers, which invalidates those angles.",
        "B": "The tetrahedral angle was well established and Baeyer used 109.5 degrees correctly. His error was in the ring geometry, not in the reference value.",
        "C": "His estimate for cyclopropane is actually the closest of any, because a three-membered ring genuinely is planar.",
        "D": "Cycloalkanes are saturated and contain no double bonds. The theory concerned angle strain in saturated rings."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-membered carbon ring."
  },
  {
    "question_id": "ch04_q16_heat_of_combustion_cis_trans",
    "topic": "Ring Strain & Heats of Combustion",
    "difficulty_level": "Hard",
    "question_text": "The heat of combustion of cis-1,2-dimethylcyclopropane is 3293 kJ/mol, while that of trans-1,2-dimethylcyclopropane is 3288 kJ/mol. What is the physical basis for this difference?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The cis-isomer possesses additional steric strain due to methyl-methyl repulsion on the same face.",
        "smiles": "C[C@@H]1C[C@@H]1C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The trans-isomer has additional angle strain because the methyl groups are opposite.",
        "smiles": "C[C@H]1C[C@@H]1C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The cis-isomer has lower torsional strain.",
        "smiles": "C[C@@H]1C[C@@H]1C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The trans-isomer experiences transannular strain.",
        "smiles": "C[C@H]1C[C@@H]1C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two stereoisomers of the same ring have identical bond angles and identical numbers of eclipsing interactions, so neither angle nor torsional strain can distinguish them. What differs is how close the substituents sit to one another.",
      "approach": "Step 1: Compare the values. The cis isomer releases 3293 kJ/mol against the trans isomer's 3288, so cis releases more and therefore starts higher in energy.\nStep 2: Ask what differs structurally. In cis both methyl groups sit on the same face of the ring, adjacent to one another; in trans they are on opposite faces and well separated.\nStep 3: Two methyls crowded on the same face repel, which is steric strain. That extra 5 kJ/mol is the cis isomer's penalty.",
      "note": "The difference is small in absolute terms - 5 kJ/mol out of nearly 3300 - which is why combustion measurements had to be extremely precise to establish it. Yet the same interaction, scaled up, is what governs substituent preferences on cyclohexane later in this chapter.",
      "options": {
        "A": "Correct. Both methyls on the same face are close enough to repel, and that steric strain puts the cis isomer about 5 kJ/mol higher in energy.",
        "B": "The trans isomer has the lower heat of combustion, so it is the more stable of the two. Its methyls are also further apart, not more strained.",
        "C": "Both isomers have the same ring geometry and therefore the same torsional strain. If cis were lower in torsional strain it would be the more stable one, which it is not.",
        "D": "Transannular strain requires a medium-sized ring where groups can reach across the interior. A three-membered ring has no interior to speak of."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q17_cyclobutane_strain_breakdown",
    "topic": "Ring Strain & Heats of Combustion",
    "difficulty_level": "Medium",
    "question_text": "Which statement accurately describes the components of ring strain in cyclobutane?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "It puckers to decrease torsional strain, which slightly increases angle strain.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It is completely planar, which minimizes all angle strain.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It has no torsional strain because all C-H bonds are staggered.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It has less angle strain than cyclopentane.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A ring's shape settles at the compromise that minimises total strain, and the two components can pull in opposite directions. Cyclobutane is the clearest case: relieving one kind of strain costs a little of the other.",
      "approach": "Step 1: Consider the planar form. A flat four-membered ring would have 90 degree angles and every adjacent C-H pair fully eclipsed.\nStep 2: Consider what puckering does. Folding the ring slightly - about 25 degrees out of plane - rotates the C-H bonds away from full eclipse, relieving torsional strain.\nStep 3: Note the cost. Puckering compresses the internal angles below 90 degrees, adding a little angle strain. The molecule adopts the pucker because the torsional saving outweighs that cost.",
      "note": "This trade-off is the general principle behind every ring conformation, cyclohexane's chair included. A ring does not minimise angle strain or torsional strain separately; it settles wherever their sum is lowest, which is why predicting shapes from angle strain alone - Baeyer's error - fails.",
      "options": {
        "A": "Correct. Puckering rotates the C-H bonds out of full eclipse at the cost of compressing the angles slightly further, and the net effect is stabilising.",
        "B": "Cyclobutane is not planar. It puckers by roughly 25 degrees, which is what relieves part of its torsional strain.",
        "C": "The bonds are not staggered even in the puckered form; the pucker only reduces the eclipsing. Substantial torsional strain remains.",
        "D": "Cyclobutane's angles are near 90 degrees against cyclopentane's near 105, so cyclobutane has considerably more angle strain, not less."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q18_transannular_strain_concept",
    "topic": "Ring Strain & Heats of Combustion",
    "difficulty_level": "Hard",
    "question_text": "In medium-sized rings (such as cyclooctane or cyclononane), steric strain occurs due to crowding of hydrogen atoms pointing across the ring. What is the specific term for this strain?",
    "question_smiles": "C1CCCCCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Transannular strain",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Angle strain",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,3-Diaxial strain",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Eclipsing strain",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Medium-sized rings are large enough to have a genuine interior but too small for the hydrogens pointing inward to avoid one another. That gives them a source of strain that neither small nor large rings share.",
      "approach": "Step 1: Rule out angle strain. Rings of eight or nine carbons can adopt conformations with near-tetrahedral angles, so that is not the problem.\nStep 2: Look inside the ring. Hydrogens on carbons across the ring from each other point into the same interior space and are forced together.\nStep 3: That crowding across the ring is transannular strain, from the Latin for across the ring.",
      "note": "It explains a distinctive size dependence: strain falls from cyclopropane to cyclohexane, rises again through the medium rings of about eight to twelve carbons, and falls once more for large rings that are flexible enough to keep their interiors clear.",
      "options": {
        "A": "Correct. Transannular means across the ring, and it names exactly this crowding between groups on opposite sides of a medium-sized ring interior.",
        "B": "Angle strain concerns distorted bond angles. Medium rings can achieve near-tetrahedral angles, so it is not their main difficulty.",
        "C": "1,3-Diaxial strain is a specific interaction between axial substituents on a cyclohexane chair, not a general medium-ring effect.",
        "D": "Eclipsing strain is another name for torsional strain, which comes from aligned bonds on adjacent atoms rather than from groups meeting across a ring."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A nine-membered carbon ring."
  },
  {
    "question_id": "ch04_q19_lowest_strain_among_options",
    "topic": "Ring Strain & Heats of Combustion",
    "difficulty_level": "Medium",
    "question_text": "Which of the following cycloalkanes has the lowest total ring strain?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclohexane",
        "smiles": "C1CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclooctane",
        "smiles": "C1CCCCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclodecane",
        "smiles": "C1CCCCCCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclopropane",
        "smiles": "C1CC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Ring strain does not simply fall as rings get larger. It reaches a minimum at six carbons, rises again through the medium rings, and only falls once more for large flexible rings.",
      "approach": "Step 1: Take cyclohexane. Its chair achieves tetrahedral angles with every bond staggered, so it is essentially strain-free at zero.\nStep 2: Take the medium rings. Cyclooctane and cyclodecane carry roughly 40 and 50 kJ/mol respectively, mostly transannular crowding between hydrogens across the ring.\nStep 3: Cyclopropane is the most strained of all at about 115 kJ/mol. Cyclohexane is therefore the lowest of the four.",
      "note": "The non-monotonic pattern is worth remembering because it contradicts the intuition that bigger means more relaxed. Six is a genuinely special case, which is why six-membered rings are so common in nature and why cyclohexane conformational analysis gets a chapter of its own.",
      "options": {
        "A": "Correct. Cyclohexane's chair conformation is essentially strain-free, the minimum of the whole series.",
        "B": "Cyclooctane carries roughly 40 kJ/mol, largely from hydrogens crowding across the ring interior.",
        "C": "Cyclodecane is more strained still at about 50 kJ/mol, since a ten-membered ring has more inward-pointing hydrogens to accommodate.",
        "D": "Cyclopropane is the most strained ring of all at about 115 kJ/mol, combining maximum angle strain with enforced eclipsing."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q20_cyclopropane_ring_opening",
    "topic": "Ring Strain & Heats of Combustion",
    "difficulty_level": "Hard",
    "question_text": "Cyclopropane reacts with H2 in the presence of a Pd/C catalyst at 80 °C to yield propane, whereas cyclohexane remains unreactive under these conditions. What drives this difference in chemical reactivity?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The high ring strain of cyclopropane (~115 kJ/mol) makes the ring-opening reaction thermodynamically very favorable.",
        "smiles": "C1CC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclopropane is an unsaturated hydrocarbon containing bent double bonds.",
        "smiles": "C1CC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclohexane has more steric hindrance, preventing the Pd catalyst from coordinating.",
        "smiles": "C1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The C-C bonds in cyclopropane are weaker because the carbon atoms are sp2-hybridized.",
        "smiles": "C1CC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Ring strain is stored energy. A reaction that opens a strained ring releases it, which makes the reaction thermodynamically favourable in a way that the same reaction on an unstrained ring is not.",
      "approach": "Step 1: Compare the starting materials. Cyclopropane carries about 115 kJ/mol of ring strain; cyclohexane carries none.\nStep 2: Consider the products. Both would give an open-chain alkane with no strain, so the strain difference appears directly in the reaction energy.\nStep 3: Opening cyclopropane therefore releases its stored 115 kJ/mol on top of any other energy change, while opening cyclohexane offers no such reward and does not occur under these conditions.",
      "note": "Cyclopropane's reactivity toward hydrogenation is worth distinguishing from an alkene's. An alkene reacts because it has a pi bond available; cyclopropane has no pi bond and reacts because its sigma bonds are strained and poorly overlapping - the same outcome for a different reason.",
      "options": {
        "A": "Correct. Relieving about 115 kJ/mol of stored ring strain makes the ring-opening strongly favourable, where cyclohexane has no strain to release.",
        "B": "Cyclopropane is saturated, with the formula C3H6 accounted for entirely by the ring. The bent bond description refers to poor sigma overlap, not to a double bond.",
        "C": "Cyclopropane is the smaller and less hindered of the two. Steric access is not what distinguishes them.",
        "D": "The carbons are sp3 hybridized. Their C-C bonds do carry increased p character because of the ring geometry, but that is not the same as sp2 hybridization."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q21_banana_bonds_cyclopropane",
    "topic": "Conformations of Small Rings",
    "difficulty_level": "Medium",
    "question_text": "The carbon-carbon bonds in cyclopropane are often described as 'bent' or 'banana' bonds. What is the physical cause of this description?",
    "question_smiles": "C1CC1",
    "options": [
      {
        "option_id": "A",
        "text": "The sp3 hybrid orbitals cannot point directly at each other, resulting in less effective, non-linear overlap.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The carbon atoms undergo sp2 hybridization to form pi-like bonds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The hydrogen atoms push the C-C bonds inward via steric repulsion.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The bonds are bent to accommodate the ring flip of cyclopropane.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A normal sigma bond forms when two hybrid orbitals point directly at each other along the internuclear axis. A three-membered ring makes that impossible, because the 60 degree internal angles are far from what sp3 orbitals can accommodate.",
      "approach": "Step 1: Note the geometry. The carbons sit at the corners of an equilateral triangle, so the lines joining nuclei meet at 60 degrees.\nStep 2: Note what the orbitals want. sp3 hybrids are directed at about 109.5 degrees to one another and cannot be bent to 60.\nStep 3: The compromise is that the orbitals overlap off-axis, outside the line joining the nuclei. The resulting electron density bulges outward from the ring, which is what bent or banana describes.",
      "note": "Off-axis overlap is less effective than head-on overlap, so these bonds are weaker and longer than ordinary C-C bonds, and their electron density is unusually exposed on the outside of the ring. That exposure is part of why cyclopropane reacts with electrophiles in ways an ordinary alkane never would.",
      "options": {
        "A": "Correct. The 60 degree geometry prevents the sp3 hybrids from pointing at each other, so they overlap off-axis and the electron density bulges outside the ring.",
        "B": "The carbons remain sp3 hybridized. There is no unhybridized p orbital and no pi bond in cyclopropane.",
        "C": "The hydrogens point outward, away from the ring, and are far too small to distort the carbon framework. The cause is the ring's own geometry.",
        "D": "Cyclopropane does not undergo a ring flip - it is rigidly planar. The bent bonds are a consequence of its fixed geometry, not of any conformational change."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-membered carbon ring."
  },
  {
    "question_id": "ch04_q22_hybridization_cyclopropane",
    "topic": "Conformations of Small Rings",
    "difficulty_level": "Hard",
    "question_text": "Which statement best describes the hybridization and bonding character of carbon in cyclopropane?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The carbons are sp3 hybridized, but the C-C bonds have increased p-character while the C-H bonds have increased s-character.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The carbons are sp2 hybridized, leaving a perpendicular unhybridized p-orbital on each carbon.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The carbons are sp3 hybridized, and all orbital overlaps are identical to those in propane.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The C-C bonds are pure p-p overlaps, while C-H bonds are sp2 hybrid overlaps.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hybridization need not be distributed evenly among an atom's four orbitals. When geometry constrains some bonds, an atom can redistribute s and p character between them, keeping the overall sp3 count while making individual bonds differ.",
      "approach": "Step 1: Establish the baseline. Each cyclopropane carbon forms four sigma bonds and has no lone pairs, so it is sp3 overall.\nStep 2: Consider what the ring demands. The C-C bonds must span 60 degree angles, and orbitals with more p character are directed at smaller angles, so the ring bonds take extra p character.\nStep 3: The s character displaced from those bonds has to go somewhere, so it concentrates in the C-H bonds. Those become shorter and stronger, and their hydrogens more acidic than an ordinary alkane's.",
      "note": "The consequence is measurable: cyclopropane's C-H bonds behave as though the carbon were closer to sp2, with a coupling constant and an acidity intermediate between an alkane and an alkene. Hybridization is a continuous description rather than a set of four fixed labels.",
      "options": {
        "A": "Correct. The carbons remain sp3 overall, but p character concentrates in the strained C-C bonds and s character in the C-H bonds.",
        "B": "sp2 hybridization would leave an unhybridized p orbital on each carbon and make the compound unsaturated. Cyclopropane is saturated with four sigma bonds per carbon.",
        "C": "The overlaps are not identical to propane's. Propane's C-C bonds are head-on and unstrained, while cyclopropane's are bent and off-axis.",
        "D": "Pure p-p overlap would require 90 degree angles between the ring bonds, and the C-H bonds are not sp2. Both descriptions misstate the hybridization."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q23_cyclobutane_dihedral_angle",
    "topic": "Conformations of Small Rings",
    "difficulty_level": "Medium",
    "question_text": "In its most stable puckered conformation, cyclobutane adopts a non-planar structure. What is the approximate dihedral angle (pucker angle) of the ring?",
    "question_smiles": "C1CCC1",
    "options": [
      {
        "option_id": "A",
        "text": "25 degrees",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "0 degrees",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "45 degrees",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "60 degrees",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A ring's shape settles where the sum of its strains is lowest, and for cyclobutane that means bending slightly out of plane. The pucker is a compromise rather than a large distortion.",
      "approach": "Step 1: Consider the planar alternative. A flat four-membered ring has 90 degree angles and every adjacent C-H pair fully eclipsed, so torsional strain is at its maximum.\nStep 2: Fold the ring about a diagonal. Even a small fold rotates the C-H bonds away from full eclipse, cutting torsional strain sharply.\nStep 3: The fold also compresses the internal angles slightly, adding a little angle strain. The two effects balance at a pucker of about 25 degrees.",
      "note": "Twenty-five degrees is modest - cyclobutane is nearly flat, and the pucker is easily reversed, so the ring flips rapidly between two equivalent folded forms. That distinguishes it from cyclohexane, whose much deeper chair pucker gives genuinely distinct axial and equatorial positions.",
      "options": {
        "A": "Correct. About 25 degrees is where the torsional relief from folding stops outweighing the angle strain it costs.",
        "B": "Zero degrees is the planar form, which has maximum torsional strain and is not the preferred conformation.",
        "C": "45 degrees would fold the ring far more than is favourable, compressing the internal angles well past what the torsional saving repays.",
        "D": "60 degrees is a severe fold that would introduce more angle strain than any torsional relief could justify."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-membered carbon ring."
  },
  {
    "question_id": "ch04_q24_cyclopentane_envelope",
    "topic": "Conformations of Small Rings",
    "difficulty_level": "Medium",
    "question_text": "Which of the following descriptions accurately depicts the envelope conformation of cyclopentane?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Four carbon atoms are coplanar, and one carbon atom is bent out of the plane.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Three carbon atoms are coplanar, and two adjacent carbon atoms are bent in opposite directions.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "All five carbon atoms lie in a single plane, but the bonds are bent.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Five carbon atoms form a chair-like conformation with axial and equatorial positions.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Cyclopentane's internal angles in a planar pentagon are 108 degrees, almost exactly tetrahedral, so angle strain is nearly absent. Its only real problem is torsional, and the ring puckers to address that.",
      "approach": "Step 1: Note what is not the problem. At 108 degrees the angles need almost no correction, so the ring is not puckering to fix them.\nStep 2: Note what is. A flat pentagon eclipses every adjacent C-H pair around the ring.\nStep 3: Lifting one carbon out of the plane of the other four rotates the bonds at that carbon and its neighbours away from eclipse. The resulting shape - four coplanar carbons and one raised - is the envelope.",
      "note": "The raised carbon is not fixed: the pucker migrates rapidly around the ring, so all five carbons take turns being the flap. That motion is called pseudorotation, and it means the five positions are equivalent on any ordinary timescale.",
      "options": {
        "A": "Correct. Four carbons stay coplanar while the fifth lifts out of that plane, which relieves the eclipsing without disturbing the near-ideal bond angles.",
        "B": "This describes a half-chair or twist arrangement rather than an envelope. The envelope displaces one carbon, not two in opposite directions.",
        "C": "A fully planar ring is exactly what the envelope avoids, since planarity is what causes the eclipsing in the first place.",
        "D": "Axial and equatorial positions are a feature of the six-membered chair. A five-membered ring has no such distinct sets of positions."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q25_cyclobutane_bond_angles",
    "topic": "Conformations of Small Rings",
    "difficulty_level": "Hard",
    "question_text": "Why are the internal C-C-C bond angles in the puckered conformation of cyclobutane (~88°) smaller than those in a planar cyclobutane (90°)?",
    "question_smiles": "C1CCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Puckering the ring pulls the bridgehead carbons closer, sacrificing angle strain to minimize torsional strain.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The sp3 orbitals are compressed by transannular hydrogen interactions.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The ring carbon atoms undergo sp-hybridization.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Angle strain is minimized when the internal angle is exactly 88 degrees.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "It looks perverse for a ring to adopt angles further from tetrahedral than it needs to. The resolution is that angle strain is only one term in the total, and a molecule minimises the sum rather than any single component.",
      "approach": "Step 1: Compare the two candidates. Planar cyclobutane has 90 degree angles; the puckered form has about 88.\nStep 2: Note that 90 is closer to the tetrahedral 109.5 than 88 is, so on angle strain alone the planar form would win.\nStep 3: But planarity eclipses every adjacent C-H pair. Puckering costs a couple of degrees of angle strain and buys a much larger reduction in torsional strain, so the puckered form is lower in total energy.",
      "note": "This is the same trade-off Baeyer's theory missed. Judging ring stability by angle strain alone predicts flat rings with ideal angles; real rings give up some angular perfection to escape eclipsing, which is why cyclohexane beats cyclopentane despite the planar-pentagon angles looking better on paper.",
      "options": {
        "A": "Correct. The fold costs about two degrees of additional angle strain and repays it with a much larger torsional saving, so the total is lower.",
        "B": "A four-membered ring has no interior to speak of, and its hydrogens point outward. Transannular interactions require a medium-sized ring.",
        "C": "The carbons remain sp3, forming four sigma bonds each. sp hybridization would require only two groups per carbon.",
        "D": "There is nothing special about 88 degrees for angle strain - the ideal remains 109.5, and 88 is worse than 90. The angle is set by the torsional compromise, not by an angular optimum."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-membered carbon ring."
  },
  {
    "question_id": "ch04_q26_cyclopentane_planar_vs_envelope",
    "topic": "Conformations of Small Rings",
    "difficulty_level": "Medium",
    "question_text": "If cyclopentane were to adopt a perfectly planar conformation, which type of strain would be at its maximum?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Torsional strain",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Angle strain",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Steric strain",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Transannular strain",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Asking which strain a hypothetical planar ring would maximise means asking which strain the real puckering exists to relieve. For cyclopentane the answer follows from how close its planar angles already are to ideal.",
      "approach": "Step 1: Evaluate angle strain in a planar pentagon. The internal angles are 108 degrees against a tetrahedral ideal of 109.5, a discrepancy of well under two degrees - essentially negligible.\nStep 2: Evaluate torsional strain. Flatness aligns the C-H bonds on all five pairs of adjacent carbons, so every one is eclipsed.\nStep 3: With angle strain near zero and eclipsing complete, torsional strain is what a planar cyclopentane would maximise - and it is what the envelope pucker relieves.",
      "note": "This is the case that most directly refutes angle-strain-only reasoning. By Baeyer's measure cyclopentane should be the most stable cycloalkane of all, since 108 degrees is nearer 109.5 than cyclohexane's planar 120. It is not, because the torsional term he ignored dominates.",
      "options": {
        "A": "Correct. A flat pentagon has near-ideal angles but eclipses every adjacent C-H pair, so torsional strain is the term at its maximum.",
        "B": "Angle strain would be almost absent, since 108 degrees is within two degrees of tetrahedral. That is precisely why it is not the answer.",
        "C": "Steric strain needs non-bonded atoms pushed inside their van der Waals radii. On a five-membered ring the substituents are not forced that close.",
        "D": "Transannular strain requires a ring large enough for groups to crowd across its interior, which begins around eight carbons."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q27_cyclopentane_eclipsing_pairs",
    "topic": "Conformations of Small Rings",
    "difficulty_level": "Hard",
    "question_text": "How many individual pairs of eclipsing C-H bond interactions would exist in a hypothetically planar conformation of cyclopentane?",
    "question_smiles": "C1CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "10 pairs",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "5 pairs",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "8 pairs",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "20 pairs",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Counting eclipsing interactions is a matter of working bond by bond rather than atom by atom. Each carbon-carbon bond in a flat ring generates its own set of eclipsed hydrogen pairs.",
      "approach": "Step 1: Count the carbon-carbon bonds. A five-membered ring has five.\nStep 2: Count the eclipsed pairs each bond generates. Each ring carbon carries two hydrogens, one above the ring plane and one below, so across any C-C bond the two upper hydrogens eclipse each other and the two lower ones do as well - two pairs per bond.\nStep 3: Multiply: five bonds times two pairs gives ten eclipsing interactions in total.",
      "note": "At roughly 4 kJ/mol per eclipsed hydrogen pair, ten pairs would cost about 40 kJ/mol - well above cyclopentane's measured 26. The gap is what the envelope pucker recovers, and it shows the counting is doing real work rather than being an exercise.",
      "options": {
        "A": "Correct. Five carbon-carbon bonds, each eclipsing an upper and a lower hydrogen pair, gives ten interactions.",
        "B": "Five counts one pair per bond, which misses that each carbon carries two hydrogens and both eclipse across the bond.",
        "C": "Eight would correspond to four bonds rather than five. A five-membered ring has five carbon-carbon bonds.",
        "D": "Twenty double-counts each interaction, most often by counting from both carbons of every bond. Each eclipsing pair should be counted once."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-membered carbon ring."
  },
  {
    "question_id": "ch04_q28_cyclopropane_dihedral_angle",
    "topic": "Conformations of Small Rings",
    "difficulty_level": "Easy",
    "question_text": "Why are all C-H bonds in cyclopropane fully eclipsed (dihedral angle of approximately 0 degrees)?",
    "question_smiles": "C1CC1",
    "options": [
      {
        "option_id": "A",
        "text": "The ring is geometrically constrained to be planar because three points define a plane.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The bent C-C bonds force the C-H bonds to align to maximize orbital overlap.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The hydrogens are hydrogen-bonded to each other across the ring.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A ring flip in cyclopropane dynamically eclipses the C-H bonds.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Every other cycloalkane can pucker to escape eclipsing. Cyclopropane cannot, and the reason is geometric rather than chemical - it has no choice about being flat.",
      "approach": "Step 1: Consider what puckering requires. A ring must have at least four atoms for any of them to move out of the plane defined by the others.\nStep 2: Apply that to three carbons. Any three points define a plane, so the three carbons of cyclopropane are necessarily coplanar whatever they might prefer.\nStep 3: With the ring locked flat, the C-H bonds on adjacent carbons are held at a dihedral angle of zero - fully eclipsed, with no conformational escape available.",
      "note": "This is why cyclopropane carries both maximum angle strain and maximum torsional strain at once, and why its total of about 115 kJ/mol is the highest of any common ring. Every larger ring can trade one strain against the other; cyclopropane can trade nothing.",
      "options": {
        "A": "Correct. Three points define a plane, so the ring cannot pucker and its C-H bonds are locked in the fully eclipsed arrangement.",
        "B": "The bent bonds are a consequence of the same rigid geometry, not a cause of the eclipsing. Bent overlap is in fact less effective, not maximised.",
        "C": "Hydrogen bonding requires a hydrogen on nitrogen, oxygen or fluorine. Cyclopropane's C-H hydrogens cannot hydrogen bond at all.",
        "D": "Cyclopropane has no ring flip. It is rigidly planar, which is precisely why the eclipsing cannot be relieved."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-membered carbon ring."
  },
  {
    "question_id": "ch04_q29_cyclohexane_conformations_stability",
    "topic": "Cyclohexane Conformations",
    "difficulty_level": "Easy",
    "question_text": "Which of the following correctly ranks the conformations of cyclohexane in order of decreasing stability (most stable first)?",
    "question_smiles": "C1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Chair > Twist-boat > Boat > Half-chair",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Chair > Boat > Twist-boat > Half-chair",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Twist-boat > Chair > Boat > Half-chair",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Chair > Twist-boat > Half-chair > Boat",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Cyclohexane passes through four named shapes. Two are energy minima the molecule occupies, and two are transition states it crosses, so the ranking mixes stable forms with fleeting ones.",
      "approach": "Step 1: Place the chair. It achieves tetrahedral angles with every bond staggered and no significant steric crowding, so it is the global minimum at zero.\nStep 2: Place the twist-boat next, about 23 kJ/mol above the chair. It is a genuine shallow minimum, twisted to reduce both eclipsing and flagpole crowding.\nStep 3: The boat sits about 6 kJ/mol above the twist-boat, at roughly 29, with eclipsed bonds and flagpole interactions. The half-chair is the highest at about 45 kJ/mol, the transition state for the ring flip itself.",
      "note": "Only the chair is meaningfully populated at room temperature - the twist-boat lies far enough above it that fewer than one molecule in ten thousand occupies it. When a problem says cyclohexane, it means the chair unless it says otherwise.",
      "options": {
        "A": "Correct. Chair at 0, twist-boat at about 23, boat at about 29 and half-chair at about 45 kJ/mol.",
        "B": "This puts the boat above the twist-boat in stability. The twist is lower, because twisting relieves some of the boat's eclipsing and flagpole strain.",
        "C": "The chair is by a wide margin the most stable form; no other conformation approaches it.",
        "D": "This places the half-chair above the boat. The half-chair is the highest point on the profile, being the transition state for the flip."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered carbon ring."
  },
  {
    "question_id": "ch04_q30_twist_boat_vs_boat_energy",
    "topic": "Cyclohexane Conformations",
    "difficulty_level": "Medium",
    "question_text": "The twist-boat conformation of cyclohexane is approximately 6 kJ/mol (1.4 kcal/mol) lower in energy than the boat conformation. What accounts for this stabilization?",
    "question_smiles": "C1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "The twist-boat reduces flagpole steric interactions and relieves eclipsing torsional strain.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The twist-boat has perfectly planar C-C bonds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The twist-boat increases angle strain to achieve a staggered arrangement.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The twist-boat is stabilized by transannular hydrogen bonding.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The boat suffers two problems at once, and the twist relieves part of each. Understanding the stabilisation means identifying both, since neither alone accounts for the 6 kJ/mol.",
      "approach": "Step 1: Identify the boat's steric problem. Its two upward-pointing flagpole hydrogens, on carbons across the ring from one another, are forced uncomfortably close.\nStep 2: Identify its torsional problem. Along the two flat sides of the boat the C-H bonds are eclipsed.\nStep 3: Twisting the ring slightly moves the flagpole hydrogens apart and rotates the eclipsed bonds partly out of alignment. Both improvements together lower the energy by about 6 kJ/mol.",
      "note": "The twist-boat is a shallow minimum rather than a transition state, so it is a real conformation with a measurable, if tiny, population. It matters chiefly as the intermediate the ring passes through during a chair-to-chair flip.",
      "options": {
        "A": "Correct. Twisting separates the flagpole hydrogens and rotates the eclipsed bonds partly out of alignment, relieving steric and torsional strain together.",
        "B": "No conformation of cyclohexane is planar, and planarity would raise the energy sharply by forcing 120 degree angles and full eclipsing.",
        "C": "The twist does not increase angle strain to buy staggering. Bond angles stay near tetrahedral throughout; what changes is the torsional and steric arrangement.",
        "D": "Hydrogen bonding requires a hydrogen bonded to nitrogen, oxygen or fluorine. Cyclohexane is a hydrocarbon and has none."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered carbon ring."
  },
  {
    "question_id": "ch04_q31_flagpole_interaction_positions",
    "topic": "Cyclohexane Conformations",
    "difficulty_level": "Easy",
    "question_text": "In the boat conformation of cyclohexane, which carbon atoms bear the hydrogens that participate in the destabilizing 'flagpole' steric interaction?",
    "question_smiles": "C1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "C1 and C4",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "C1 and C2",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "C1 and C3",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "C2 and C5",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The boat conformation is shaped like its name: four carbons form the base and two are lifted at either end. The hydrogens pointing upward from those two raised carbons are the flagpoles.",
      "approach": "Step 1: Identify the raised carbons. In a boat, two carbons directly across the ring from one another are both bent upward.\nStep 2: On a six-membered ring, directly across means separated by two carbons in each direction - a 1,4 relationship.\nStep 3: The hydrogens pointing up from C1 and C4 are therefore aimed at each other across the ring's interior, close enough to repel.",
      "note": "The 1,4 relationship is what makes the interaction possible at all: 1,2 or 1,3 positions cannot both be raised in a boat. The same geometry appears in the chair as the 1,3-diaxial interaction between axial substituents, which is where this idea does most of its work.",
      "options": {
        "A": "Correct. The two carbons lifted at either end of the boat are across the ring from each other, in a 1,4 relationship, and their upward hydrogens crowd.",
        "B": "C1 and C2 are adjacent, so their hydrogens point away from one another rather than converging over the ring.",
        "C": "A 1,3 relationship in the chair does produce diaxial crowding, but the boat's flagpole interaction is specifically between the two raised prow-and-stern carbons.",
        "D": "C2 and C5 are also 1,4 to each other, but in the standard boat it is C1 and C4 that are raised; C2 and C5 lie in the flat base."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered carbon ring."
  },
  {
    "question_id": "ch04_q32_half_chair_transition_state",
    "topic": "Cyclohexane Conformations",
    "difficulty_level": "Hard",
    "question_text": "What is the energy barrier (activation energy) required for a chair conformation of cyclohexane to undergo a ring flip to the other chair conformation?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Approximately 45 kJ/mol (10.8 kcal/mol)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Approximately 23 kJ/mol (5.5 kcal/mol)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Approximately 6 kJ/mol (1.4 kcal/mol)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Approximately 80 kJ/mol (19.1 kcal/mol)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A ring flip converts one chair into the other, exchanging every axial position for an equatorial one. The barrier is the height of the highest point on that path, which is the half-chair.",
      "approach": "Step 1: Identify the starting point and the summit. The molecule begins in a chair at zero and must reach the half-chair transition state, where five of the six carbons become coplanar.\nStep 2: Read off the half-chair's energy, about 45 kJ/mol above the chair.\nStep 3: That difference is the activation energy for the flip. The twist-boat at 23 kJ/mol is an intermediate along the way, not the barrier.",
      "note": "Forty-five kJ/mol is low enough that the flip happens roughly a hundred thousand times a second at room temperature, so axial and equatorial positions interconvert far too fast to separate. Cool the sample enough and the flip slows until the two environments can be resolved separately by NMR - which is how the barrier was measured.",
      "options": {
        "A": "Correct. The half-chair is the highest point on the flip pathway, about 45 kJ/mol above the chair.",
        "B": "23 kJ/mol is the twist-boat, an intermediate part-way along the path rather than the summit the molecule must clear.",
        "C": "6 kJ/mol is the gap between the boat and the twist-boat, a difference between two high-energy forms rather than a barrier from the chair.",
        "D": "80 kJ/mol would be high enough to slow the flip dramatically at room temperature, which is not what is observed - cyclohexane's conformers interconvert rapidly."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q33_zero_torsional_strain_cyclohexane",
    "topic": "Cyclohexane Conformations",
    "difficulty_level": "Medium",
    "question_text": "Why does the chair conformation of cyclohexane have virtually zero torsional strain?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "All adjacent C-H bonds are staggered with dihedral angles of approximately 60 degrees.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The ring is planar, allowing the bonds to spread out.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The C-C-C bond angles are compressed to exactly 90 degrees.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The axial and equatorial positions undergo rapid degenerate exchange.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Torsional strain is measured by the dihedral angle between bonds on adjacent atoms. Zero degrees is fully eclipsed and costly; sixty degrees is fully staggered and costs nothing.",
      "approach": "Step 1: Look along any carbon-carbon bond of the chair, as though drawing a Newman projection of it.\nStep 2: Read the arrangement. The bonds on the front carbon sit exactly between those on the back carbon - a dihedral angle of about 60 degrees.\nStep 3: That holds for every one of the six ring bonds simultaneously, which is what the chair's particular pucker achieves. With nothing eclipsed anywhere, torsional strain is essentially zero.",
      "note": "Achieving this at the same time as near-tetrahedral bond angles is the chair's remarkable feature, and it is why six-membered rings are so common. No smaller ring can satisfy both conditions at once, which is why every one of them carries strain.",
      "options": {
        "A": "Correct. Every pair of adjacent carbons is perfectly staggered at about 60 degrees, so no bond anywhere in the ring is eclipsed.",
        "B": "The chair is decidedly not planar. A planar ring would force 120 degree angles and eclipse every bond, which is the opposite of the chair's situation.",
        "C": "The chair's angles are about 111.5 degrees, close to tetrahedral. Ninety degrees would introduce severe angle strain.",
        "D": "Rapid ring flipping exchanges axial and equatorial positions, but that motion is a consequence of the low barrier rather than the reason any single chair is strain-free."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q34_ring_flip_conformations_path",
    "topic": "Cyclohexane Conformations",
    "difficulty_level": "Hard",
    "question_text": "Trace the step-by-step pathway that a cyclohexane molecule undergoes during a complete ring flip from one chair to the other. Which sequence correctly lists the intermediates and transition states in order of appearance?",
    "question_smiles": "C1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Chair -> Half-Chair -> Twist-Boat -> Boat -> Twist-Boat -> Half-Chair -> Chair",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Chair -> Boat -> Half-Chair -> Twist-Boat -> Half-Chair -> Boat -> Chair",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Chair -> Twist-Boat -> Half-Chair -> Boat -> Half-Chair -> Twist-Boat -> Chair",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Chair -> Half-Chair -> Boat -> Twist-Boat -> Boat -> Half-Chair -> Chair",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A ring flip is a journey across an energy landscape with two summits and a shallow valley between them. The order of the conformations follows from their energies: transition states are crossed and minima are rested in.",
      "approach": "Step 1: Leave the chair, the global minimum. The first obstacle is the half-chair at about 45 kJ/mol, the highest point and therefore the rate-limiting transition state.\nStep 2: Descend into the twist-boat at about 23 kJ/mol, a shallow minimum, then over the boat at about 29 - a small local maximum - and into the second twist-boat.\nStep 3: Cross the second half-chair and descend into the other chair. The path is symmetric about the boat at its midpoint.",
      "note": "Reading the sequence tells you which species can be observed. Only the chairs, and marginally the twist-boats, are minima that molecules occupy; the half-chairs and the boat are crossed and never populated. That is why the flip is described as a two-barrier process rather than a single hop.",
      "options": {
        "A": "Correct. Half-chair and boat are maxima, twist-boat is a shallow minimum, and the path is symmetric about the boat at its centre.",
        "B": "This places the boat immediately after the chair. The half-chair is the first barrier, and the boat sits at the midpoint of the path rather than near its start.",
        "C": "This reaches the twist-boat before the half-chair, but the half-chair is the barrier that must be crossed to leave the chair at all.",
        "D": "This puts the boat before the twist-boat on the descent. The twist-boat is the lower of the two and is reached first, with the boat as the small maximum between the pair."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered carbon ring."
  },
  {
    "question_id": "ch04_q35_cyclohexane_angle_strain",
    "topic": "Cyclohexane Conformations",
    "difficulty_level": "Medium",
    "question_text": "The C-C-C bond angles in the chair conformation of cyclohexane are measured to be 111.5°. Why does this not cause significant angle strain?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "It is extremely close to the ideal tetrahedral angle of 109.5 degrees, causing negligible strain.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The carbon atoms are sp2-hybridized, making 111.5 degrees very stable.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The angle strain is offset by a strong intramolecular hydrogen bond.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The bond angles are dynamic and average to exactly 90 degrees over time.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Angle strain grows with the square of the deviation from the ideal angle, so small departures cost very little. The relevant comparison is always against the tetrahedral 109.5 degrees, not against any ring geometry.",
      "approach": "Step 1: Take the measured value of 111.5 degrees.\nStep 2: Compare it to the tetrahedral ideal of 109.5, giving a deviation of just 2 degrees.\nStep 3: A deviation that small carries negligible energy cost - compare cyclopropane's 60 degree angles, nearly 50 degrees away from ideal, which cost about 115 kJ/mol.",
      "note": "The angles open slightly beyond tetrahedral rather than closing below it, which is worth noticing: the chair's pucker is chosen to keep every bond staggered, and the small angular opening is the price. Once again the ring optimises the total rather than any single term.",
      "options": {
        "A": "Correct. Two degrees from the tetrahedral ideal is a negligible distortion, which is why the chair is treated as free of angle strain.",
        "B": "The carbons are sp3, with four sigma bonds each and no pi bonds. An sp2 carbon would prefer 120 degrees and be part of a double bond.",
        "C": "Cyclohexane is a hydrocarbon with no hydrogen bonded to nitrogen, oxygen or fluorine, so it can form no hydrogen bonds at all.",
        "D": "The angles are not dynamic in that sense, and 90 degrees would be severely strained. The chair holds its angles near 111.5 degrees throughout."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q36_ring_flip_substituent_behavior",
    "topic": "Monosubstituted Cyclohexanes",
    "difficulty_level": "Easy",
    "question_text": "When methylcyclohexane undergoes a ring flip, what is the spatial fate of the methyl group?",
    "question_smiles": "CC1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "An equatorial methyl group becomes axial, but remains on the same face (up/down) of the ring.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "An equatorial methyl group becomes axial and switches from the top face to the bottom face.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "An equatorial methyl group remains equatorial, but changes its carbon location.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The methyl group detaches and reattaches on the opposite face.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A ring flip changes conformation, not configuration. It rotates about single bonds only, so it can move a substituent between axial and equatorial but can never move it from one face of the ring to the other.",
      "approach": "Step 1: Note what the flip does to positions. Every carbon that pointed its substituent axially now points it equatorially, and the reverse.\nStep 2: Note what it cannot do. Moving a group from the top face to the bottom would require breaking and remaking a bond, which rotation cannot achieve.\nStep 3: So an equatorial methyl on the upper face becomes an axial methyl still on the upper face. The orientation changes; the face does not.",
      "note": "This is exactly why cis and trans disubstituted cyclohexanes are separable compounds while axial and equatorial forms are not. The flip interconverts conformations of one molecule; changing faces would produce a different stereoisomer, which the flip cannot reach.",
      "options": {
        "A": "Correct. The flip exchanges axial for equatorial while leaving the substituent on the same face of the ring, since only rotations are involved.",
        "B": "Switching faces would change the configuration, which no amount of bond rotation can do. That would be a different stereoisomer.",
        "C": "The flip converts every equatorial position to axial. A substituent cannot remain equatorial through a flip, and the carbons themselves do not move.",
        "D": "No bond breaks during a ring flip. It is a conformational change achieved entirely by rotation about single bonds."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered carbon ring bearing a single methyl group."
  },
  {
    "question_id": "ch04_q37_a_value_definition",
    "topic": "Monosubstituted Cyclohexanes",
    "difficulty_level": "Medium",
    "question_text": "The A-value of a substituent on a cyclohexane ring represents the free energy difference (delta G) between the axial and equatorial conformations. What is the thermodynamic sign and meaning of a positive A-value (+delta G for equatorial to axial)?",
    "question_smiles": "CC1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "The equatorial conformation is lower in energy and thermodynamically favored.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The axial conformation is lower in energy and thermodynamically favored.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The two conformations have identical energy and exist in a 1:1 equilibrium.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The transition state between the conformations is extremely stable.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The sign convention follows directly from how the quantity is defined. A-value is the free energy change for moving a substituent from equatorial to axial, so its sign says which direction costs energy.",
      "approach": "Step 1: Read the definition carefully - delta G measured for the equatorial to axial conversion.\nStep 2: A positive delta G means the change is uphill, so going to axial costs energy.\nStep 3: If axial is uphill from equatorial, then equatorial is the lower-energy conformation and the favoured one at equilibrium.",
      "note": "Every common substituent has a positive A-value, so equatorial is essentially always preferred. What varies is by how much - from a fraction of a kilojoule for a small linear group up to about 21 for tert-butyl, which is enough to lock the ring in one conformation.",
      "options": {
        "A": "Correct. A positive delta G for equatorial to axial means axial is uphill, so equatorial is lower in energy and predominates.",
        "B": "This reverses the sign convention. If axial were the lower-energy form, the A-value defined this way would be negative.",
        "C": "Equal energies would give an A-value of zero. A positive value is precisely a statement that they differ.",
        "D": "The A-value compares two conformational minima. It says nothing about the transition state between them, which is the ring-flip barrier."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered carbon ring bearing a single methyl group."
  },
  {
    "question_id": "ch04_q38_equilibrium_calculation",
    "topic": "Monosubstituted Cyclohexanes",
    "difficulty_level": "Hard",
    "question_text": "Given that the A-value of a methyl group is 7.3 kJ/mol at 298 K, calculate the approximate ratio of equatorial to axial conformations at equilibrium. (R = 8.314 J/(mol*K))",
    "question_smiles": "CC1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "95 : 5 (19:1 ratio)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "50 : 50 (1:1 ratio)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "75 : 25 (3:1 ratio)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "99.9 : 0.1 (1000:1 ratio)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The link between an energy difference and a population ratio is the standard thermodynamic relation, delta G equals minus RT times the natural log of the equilibrium constant. Rearranged, it converts an A-value directly into a conformer ratio.",
      "approach": "Step 1: Assemble the quantities. Delta G is 7.3 kJ/mol, or 7300 J/mol; R is 8.314 J per mol per kelvin; T is 298 K.\nStep 2: Compute RT: 8.314 times 298 is about 2478 J/mol.\nStep 3: The equilibrium constant favouring equatorial is the exponential of 7300 divided by 2478, which is the exponential of about 2.95, or roughly 19. A ratio of 19 to 1 is about 95 to 5.",
      "note": "Worth internalising the scale: at room temperature roughly 5.7 kJ/mol buys a ten-to-one preference, and each further 5.7 multiplies it by ten again. That rule of thumb lets you convert any A-value into an approximate population without a calculator.",
      "options": {
        "A": "Correct. RT is about 2478 J/mol, so the constant is exp(7300/2478), roughly 19, giving about 95 to 5.",
        "B": "A one-to-one ratio would require a delta G of zero. An energy difference of 7.3 kJ/mol is far too large for that.",
        "C": "A three-to-one ratio corresponds to about 2.7 kJ/mol, well below the methyl group's A-value.",
        "D": "A thousand-to-one ratio would need roughly 17 kJ/mol - closer to a tert-butyl group than a methyl."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered carbon ring bearing a single methyl group."
  },
  {
    "question_id": "ch04_q39_largest_a_value",
    "topic": "Monosubstituted Cyclohexanes",
    "difficulty_level": "Medium",
    "question_text": "Which of the following substituents has the largest A-value (greatest preference for the equatorial position)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "tert-Butyl, -C(CH3)3",
        "smiles": "CC(C)(C)C1CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methyl, -CH3",
        "smiles": "CC1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Halogen, -Br",
        "smiles": "BrC1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyano, -CN",
        "smiles": "N#CC1CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An A-value measures how badly a substituent suffers in the axial position, where it points directly at the axial hydrogens on the two carbons across the ring. Bulk close to the ring matters most, since that is where the clash occurs.",
      "approach": "Step 1: Consider what an axial substituent encounters - two 1,3-diaxial hydrogens aimed straight at it.\nStep 2: Compare how much room each candidate needs at the attachment point. tert-Butyl presents three methyl groups immediately around its attaching carbon, so it cannot avoid those hydrogens by rotating.\nStep 3: Methyl is far smaller, and the halogens and cyano group are smaller still in the relevant direction. tert-Butyl's A-value of about 21 kJ/mol is much the largest.",
      "note": "That value is large enough to be a synthetic tool. A tert-butyl group is effectively locked equatorial, holding the whole ring in one chair, which lets chemists fix a ring's conformation deliberately in order to study how other substituents behave.",
      "options": {
        "A": "Correct. Three methyl groups crowded around the attachment carbon cannot rotate out of the way, giving an A-value near 21 kJ/mol.",
        "B": "Methyl's A-value is about 7.3 kJ/mol - significant, but roughly a third of tert-butyl's.",
        "C": "Halogen A-values are small, around 1 to 2.3 kJ/mol, because a single atom on a long bond sits well away from the ring.",
        "D": "The cyano group is unusually small at about 0.8 kJ/mol, since its linear shape points it away from the 1,3-diaxial hydrogens."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q40_gauche_butane_equivalence",
    "topic": "Monosubstituted Cyclohexanes",
    "difficulty_level": "Hard",
    "question_text": "An axial methyl group in methylcyclohexane participates in two 1,3-diaxial interactions. These interactions are sterically equivalent to which conformation of butane?",
    "question_smiles": "CC1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Two gauche-butane interactions",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Two anti-butane interactions",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "One eclipsed butane interaction",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "One gauche and one anti interaction",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The 1,3-diaxial interaction is not a new kind of strain. It is the gauche interaction from open-chain conformational analysis, appearing in a ring where the geometry holds it in place.",
      "approach": "Step 1: Take an axial methyl and follow the chain of carbons through the ring to one of the axial hydrogens three positions away.\nStep 2: Sight along the relevant carbon-carbon bond. The methyl and that part of the ring are found at a dihedral angle of about 60 degrees - the gauche relationship.\nStep 3: The same holds for the axial hydrogen on the other side, so an axial methyl experiences two such interactions, one on each flank.",
      "note": "The arithmetic confirms the identification. A single gauche-butane interaction costs about 3.8 kJ/mol, and two of them come to 7.6 - almost exactly methyl's measured A-value of 7.3. The ring is not introducing new physics, only holding an already familiar interaction in a fixed geometry.",
      "options": {
        "A": "Correct. Each 1,3-diaxial contact is a gauche-butane relationship, and two of them at about 3.8 kJ/mol each account for methyl's A-value of 7.3.",
        "B": "Anti is the relaxed 180 degree arrangement and costs nothing. If the interactions were anti there would be no axial penalty at all.",
        "C": "Eclipsing would require a dihedral angle near zero. The chair is fully staggered everywhere, so nothing in it is eclipsed.",
        "D": "Both flanks are equivalent by the ring's symmetry, so the two interactions are the same. One cannot be gauche and the other anti."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered carbon ring bearing a single methyl group."
  },
  {
    "question_id": "ch04_q41_cyano_small_a_value",
    "topic": "Monosubstituted Cyclohexanes",
    "difficulty_level": "Hard",
    "question_text": "Despite containing two atoms, the cyano group (-CN) has an exceptionally small A-value of 0.8 kJ/mol (0.2 kcal/mol). What is the molecular explanation for this low value?",
    "question_smiles": "N#CC1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "The cyano group is linear and points straight up and away from the ring, minimizing steric clash with C3/C5 axial hydrogens.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The nitrogen atom forms a hydrogen bond with the axial C3 hydrogen.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The cyano group undergoes a rapid chemical reaction with the solvent.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The sp-hybridized carbon has no steric radius.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Steric bulk is directional. What matters for an axial substituent is not the group's total size but how much of it lies in the path of the two 1,3-diaxial hydrogens, close to the ring.",
      "approach": "Step 1: Establish the geometry of the group. The cyano carbon is sp hybridized, so the C-C-N unit is perfectly linear.\nStep 2: Consider where that puts the atoms. Attached axially, the group projects straight up along the axis, with the nitrogen furthest away and nothing splayed out to the sides.\nStep 3: The 1,3-diaxial hydrogens point up alongside it rather than into it, so there is almost nothing to clash with. The A-value is accordingly tiny at about 0.8 kJ/mol.",
      "note": "Compare a methyl group, which has the same one heavy atom at the attachment point but carries three hydrogens splayed outward at tetrahedral angles - and an A-value nine times larger. Shape governs the axial penalty far more than atom count or molecular weight does.",
      "options": {
        "A": "Correct. The linear sp geometry projects the group straight along the axial direction, so it presents almost no width where the diaxial hydrogens are.",
        "B": "A hydrogen bond needs a hydrogen on nitrogen, oxygen or fluorine. The relevant hydrogens here are on carbon and cannot donate one.",
        "C": "The A-value is a thermodynamic property of a stable molecule at equilibrium. No reaction with solvent is involved.",
        "D": "Every atom has a finite van der Waals radius. The cyano group's small penalty comes from its shape and orientation, not from having no size."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered carbon ring bearing a carbon triple bonded to a nitrogen."
  },
  {
    "question_id": "ch04_q42_halogen_a_value_trend",
    "topic": "Monosubstituted Cyclohexanes",
    "difficulty_level": "Hard",
    "question_text": "The A-values for the halogens are relatively small and do not vary significantly: F (0.25 kcal/mol), Cl (0.52 kcal/mol), Br (0.55 kcal/mol), I (0.46 kcal/mol). Why does iodine have a smaller A-value than chlorine or bromine, despite being much larger?",
    "question_smiles": "IC1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "The C-I bond length is significantly longer, placing the iodine atom further away from the C3/C5 axial hydrogens.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Iodine is highly polarizable and forms attractive London dispersion forces with the ring.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Iodine is less electronegative and does not repel the electron density of the C-H bonds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The C-I bond is unstable and undergoes rapid homolytic cleavage.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Steric strain depends on the distance between the atoms involved, not on atomic size alone. A larger atom held further away can interfere less than a smaller one held close.",
      "approach": "Step 1: Note the two competing factors as the halogen group is descended - the atom's van der Waals radius grows, but so does the carbon-halogen bond length.\nStep 2: Compare the magnitudes. From chlorine to iodine the bond lengthens from about 1.79 to 2.14 angstroms, a substantial increase.\nStep 3: That extra length carries the iodine further from the 1,3-diaxial hydrogens, and the increased distance more than offsets its greater bulk. The A-value therefore peaks at bromine and falls slightly for iodine.",
      "note": "This is why the halogen A-values are so tightly bunched, from 0.25 to 0.55 kcal/mol, when the atoms themselves differ enormously in size. Two opposing trends nearly cancel, which is a reminder that steric arguments need geometry and not just a size ranking.",
      "options": {
        "A": "Correct. The C-I bond is long enough to carry the iodine clear of the diaxial hydrogens, outweighing its larger radius.",
        "B": "Dispersion forces are attractive and would lower the axial energy, but they are far too weak to account for the trend and would not explain the peak at bromine.",
        "C": "Electronegativity governs bond polarity, not steric bulk. A-values measure how much room a group needs, which is a geometric question.",
        "D": "Iodocyclohexane is a stable, isolable compound. Its C-I bond is the weakest of the carbon-halogen series but does not cleave spontaneously at room temperature."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered carbon ring bearing an iodine atom."
  },
  {
    "question_id": "ch04_q43_trans_12_dimethyl_chair",
    "topic": "Disubstituted Cyclohexanes",
    "difficulty_level": "Medium",
    "question_text": "For trans-1,2-dimethylcyclohexane, what are the spatial orientations of the two methyl groups in the most stable chair conformation?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Both methyl groups are equatorial (diequatorial).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Both methyl groups are axial (diaxial).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "One methyl group is axial and the other is equatorial.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "One methyl group is axial and the other is in a flagpole position.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests conformational analysis of trans-1,2-disubstituted cyclohexanes.",
      "process": "Step 1: Understand that 'trans' means the two substituents point to opposite faces of the ring (one up, one down).\nStep 2: On adjacent carbons (1,2-relationship), the orientations are:\n- C1: up is axial, down is equatorial.\n- C2: up is equatorial, down is axial.\nStep 3: Thus, trans can be achieved by having either both groups axial (C1 up-axial, C2 down-axial) OR both groups equatorial (C1 down-equatorial, C2 up-equatorial).\nStep 4: The diequatorial conformation avoids all 1,3-diaxial interactions and is much more stable than the diaxial conformation.",
      "result": "The most stable chair conformation has both methyl groups in equatorial positions."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q44_cis_12_dimethyl_chair",
    "topic": "Disubstituted Cyclohexanes",
    "difficulty_level": "Medium",
    "question_text": "Which statement correctly describes the chair conformations of cis-1,2-dimethylcyclohexane?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Both chair conformations have one axial methyl group and one equatorial methyl group, and are equal in energy.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The most stable chair conformation has both methyl groups equatorial.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The most stable chair conformation has both methyl groups axial.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "One chair conformation is diequatorial and is more stable than the other which is diaxial.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question evaluates the chair conformations of cis-1,2-disubstituted cyclohexanes.",
      "process": "Step 1: 'cis' means both groups point to the same face of the ring (both up or both down).\nStep 2: On adjacent carbons (1,2-relationship):\n- If both are up: C1 is up-axial, C2 is up-equatorial (axial-equatorial).\n- If both are down: C1 is down-equatorial, C2 is down-axial (equatorial-axial).\nStep 3: A ring flip converts one axial-equatorial chair into another equatorial-axial chair. Because both contain exactly one axial and one equatorial methyl group, the two conformations are degenerate (equal in energy).",
      "result": "Both chair conformations of cis-1,2-dimethylcyclohexane are axial-equatorial and equal in energy."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q45_meso_dimethylcyclohexane",
    "topic": "Disubstituted Cyclohexanes",
    "difficulty_level": "Hard",
    "question_text": "Which of the following dimethylcyclohexane isomers contains chiral centers but possesses a plane of symmetry, making the overall molecule achiral (meso)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "cis-1,2-Dimethylcyclohexane",
        "smiles": "C[C@H]1CCCC[C@@H]1C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "trans-1,2-Dimethylcyclohexane",
        "smiles": "C[C@@H]1CCCC[C@@H]1C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "trans-1,3-Dimethylcyclohexane",
        "smiles": "C[C@@H]1CC[C@H](C)CC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "trans-1,4-Dimethylcyclohexane",
        "smiles": "C1CC[C@H](C)CC[C@@H]1C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the relationship between stereochemical configuration and symmetry in disubstituted cyclohexanes.",
      "process": "Step 1: Examine the flat representation of cis-1,2-dimethylcyclohexane. A plane of symmetry bisects the C1-C2 bond and C4-C5 bond.\nStep 2: Because it has a plane of symmetry in its planar representation, the molecule is achiral overall (meso).\nStep 3: Note: While individual chair conformations are chiral and enantiomeric to each other, they interconvert via a ring flip so rapidly at room temperature that the compound behaves as an optically inactive meso mixture.",
      "result": "cis-1,2-Dimethylcyclohexane is a meso compound."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q46_cis_13_dimethyl_chair",
    "topic": "Disubstituted Cyclohexanes",
    "difficulty_level": "Medium",
    "question_text": "For cis-1,3-dimethylcyclohexane, what are the positions of the two methyl groups in the most stable chair conformation?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Both methyl groups are equatorial (diequatorial).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Both methyl groups are axial (diaxial).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "One methyl group is axial and the other is equatorial.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "One methyl group is equatorial and the other is in a twist-boat conformation.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests conformational analysis of cis-1,3-disubstituted cyclohexanes.",
      "process": "Step 1: 'cis' means both groups point to the same face (both up or both down).\nStep 2: On C1 and C3:\n- C1: up is axial, down is equatorial.\n- C3: up is axial, down is equatorial.\nStep 3: If both are up, the conformation is diaxial. If both are down, the conformation is diequatorial.\nStep 4: The diequatorial conformation has no 1,3-diaxial interactions and is highly stable, making it the dominant conformation at equilibrium.",
      "result": "The most stable chair conformation of cis-1,3-dimethylcyclohexane has both methyl groups equatorial."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q47_trans_14_dimethyl_energy_diff",
    "topic": "Disubstituted Cyclohexanes",
    "difficulty_level": "Hard",
    "question_text": "What is the energy difference between the two chair conformations of trans-1,4-dimethylcyclohexane? (Assume each H-methyl 1,3-diaxial interaction costs 3.8 kJ/mol or 0.9 kcal/mol).",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "15.2 kJ/mol (3.6 kcal/mol)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "7.6 kJ/mol (1.8 kcal/mol)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "0 kJ/mol (degenerate conformations)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "11.4 kJ/mol (2.7 kcal/mol)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the quantitative calculation of energy differences between two chair conformations of a disubstituted cyclohexane.",
      "process": "Step 1: Draw the two conformations of trans-1,4-dimethylcyclohexane. One chair has both methyls equatorial (diequatorial), and the other has both methyls axial (diaxial).\nStep 2: The diequatorial conformation has 0 kJ/mol of steric strain from the methyls.\nStep 3: The diaxial conformation has two axial methyl groups. Each axial methyl group has two 1,3-diaxial H-methyl interactions.\nStep 4: Total interactions in the diaxial conformer = 4 H-methyl interactions.\nStep 5: Energy cost = 4 * 3.8 kJ/mol = 15.2 kJ/mol (or 4 * 0.9 kcal/mol = 3.6 kcal/mol). Since the diequatorial conformation is 0 kJ/mol, the energy difference is 15.2 kJ/mol.",
      "result": "The energy difference between the two chairs is 15.2 kJ/mol (3.6 kcal/mol)."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q48_trans_1_tertbutyl_3_methyl",
    "topic": "Polysubstituted Cyclohexanes",
    "difficulty_level": "Hard",
    "question_text": "Identify the most stable chair conformation for trans-1-tert-butyl-3-methylcyclohexane.",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The tert-butyl group is equatorial and the methyl group is axial.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The tert-butyl group is axial and the methyl group is equatorial.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both the tert-butyl and methyl groups are equatorial.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both the tert-butyl and methyl groups are axial.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the thermodynamic control of chair conformation stability when two different-sized groups compete.",
      "process": "Step 1: 'trans' 1,3-relationship means one substituent is 'up' and one is 'down'.\nStep 2: On C1 and C3, one position is axial and the other is equatorial for any trans-1,3 layout:\n- Conformation A: C1 (tert-butyl) is equatorial (down), C3 (methyl) is axial (up).\n- Conformation B: C1 (tert-butyl) is axial (down), C3 (methyl) is equatorial (up).\nStep 3: Compare A-values: tert-butyl = 21 kJ/mol, methyl = 7.3 kJ/mol.\nStep 4: Because the A-value of tert-butyl is much larger, the conformation keeping tert-butyl equatorial (Conformation A) is highly favored, forcing the smaller methyl group into the axial position.",
      "result": "The most stable conformation has the bulky tert-butyl group equatorial and the methyl group axial."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q49_cis_1_isopropyl_4_methyl",
    "topic": "Polysubstituted Cyclohexanes",
    "difficulty_level": "Medium",
    "question_text": "Determine the orientation of substituents in the more stable chair conformation of cis-1-isopropyl-4-methylcyclohexane.",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The isopropyl group is equatorial and the methyl group is axial.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The isopropyl group is axial and the methyl group is equatorial.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both substituents are equatorial.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both substituents are axial.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question addresses the conformation of a cis-1,4-disubstituted cyclohexane with two different alkyl groups.",
      "process": "Step 1: 'cis' 1,4-relationship means both groups are on the same face (both up or both down).\nStep 2: On C1 and C4, one position must be axial and the other equatorial in a cis relationship:\n- Chair 1: C1 (isopropyl) is equatorial, C4 (methyl) is axial.\n- Chair 2: C1 (isopropyl) is axial, C4 (methyl) is equatorial.\nStep 3: Compare A-values: isopropyl (~8.8 kJ/mol) > methyl (~7.3 kJ/mol).\nStep 4: To minimize energy, the group with the larger A-value (isopropyl) is placed in the equatorial position, which forces the smaller group (methyl) to be axial.",
      "result": "The more stable conformation places the larger isopropyl group in the equatorial position and the methyl group in the axial position."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q50_menthol_conformation",
    "topic": "Polysubstituted Cyclohexanes",
    "difficulty_level": "Hard",
    "question_text": "Menthol, (1R,2S,5R)-2-isopropyl-5-methylcyclohexanol, is a natural product with three substituents on a cyclohexane ring. In its most stable chair conformation, what are the spatial orientations of the isopropyl, methyl, and hydroxyl groups?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "All three substituents are equatorial.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The isopropyl and methyl groups are equatorial, while the hydroxyl group is axial.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The isopropyl group is equatorial, while the methyl and hydroxyl groups are axial.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "All three substituents are axial.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question applies conformational analysis to a biologically important trisubstituted cyclohexane molecule.",
      "process": "Step 1: Analyze the structure of menthol. The cyclohexane ring has an -OH group at C1, an isopropyl group at C2, and a methyl group at C5.\nStep 2: Note the stereochemical relationships:\n- The -OH at C1 and the isopropyl at C2 are trans (trans-1,2).\n- The -OH at C1 and the methyl at C5 are trans (trans-1,3, which translates to C1-C5 cis? Let's check: C1-C2-C3-C4-C5 is a 1,3-relationship if we count C1 as 1, C5 as 3. In (1R,2S,5R)-menthol, the substituents are arranged such that all three can simultaneously occupy equatorial positions).\nStep 3: Let's verify: C1-OH (equatorial, e.g., down-equatorial). C2-isopropyl (trans to OH, so it must be up-equatorial). C5-methyl is trans to OH? If OH is down-equatorial, then C5 is C3 if numbering from C1 in opposite direction. Let's trace: C1 (down) -> C6 -> C5 (up is axial, down is equatorial). So if C5 is down, it is down-equatorial. Thus C1-OH (down) and C5-methyl (down) are cis.\nStep 4: Indeed, in this configuration, all three groups (hydroxyl, isopropyl, and methyl) can be equatorial at the same time, making this conformation exceptionally stable.",
      "result": "In its most stable chair conformation, all three substituents are in equatorial positions."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q_dynamic_chair_energy",
    "topic": "Cycloalkanes Conformational Analysis",
    "difficulty_level": "Hard",
    "question_text": "Consider the potential energy diagram of cyclohexane conformations during a ring flip. Match each point to its corresponding conformation.",
    "energy_diagram": {
      "points": [
        {
          "state": "Chair (lowest energy)",
          "energy": 0
        },
        {
          "state": "Half-Chair (highest energy transition)",
          "energy": 45
        },
        {
          "state": "Twist-Boat (local minimum)",
          "energy": 23
        },
        {
          "state": "Boat (local maximum transition)",
          "energy": 30
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Chair conformation is the most stable (0 kJ/mol), Half-Chair is the least stable transition state (45 kJ/mol), and Twist-Boat is a stable intermediate (23 kJ/mol).",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Boat conformation is more stable than Chair.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Half-chair is a stable intermediate state.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "All conformations have equal energy.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding cyclohexane ring-flip energetics.",
      "process": "Chair is the ground state. Half-chair requires severe angle and torsional strain (45 kJ/mol). Twist-boat relieves some eclipsing strain (23 kJ/mol). Boat is a transition state between twist-boats (30 kJ/mol).",
      "result": "Order of stability: Chair > Twist-Boat > Boat > Half-Chair."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch04_q_dynamic_cis_trans_cyclo",
    "topic": "Cycloalkane Stereochemistry",
    "difficulty_level": "Medium",
    "question_text": "Match each cycloalkane configuration to its correct stereochemical description.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1[C@@H](C)C[C@@H](C)CC1",
        "correctAnswer": "cis-1,3-Dimethylcyclohexane"
      },
      {
        "smiles": "C1[C@@H](C)C[C@H](C)CC1",
        "correctAnswer": "trans-1,3-Dimethylcyclohexane"
      },
      {
        "smiles": "C1[C@@H](C)[C@@H](C)CCC1",
        "correctAnswer": "cis-1,2-Dimethylcyclohexane"
      },
      {
        "smiles": "C1[C@@H](C)[C@H](C)CCC1",
        "correctAnswer": "trans-1,2-Dimethylcyclohexane"
      }
    ],
    "match_options": [
      "cis-1,3-Dimethylcyclohexane",
      "trans-1,3-Dimethylcyclohexane",
      "cis-1,2-Dimethylcyclohexane",
      "trans-1,2-Dimethylcyclohexane",
      "1,1-Dimethylcyclohexane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect cis/trans mapping",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguishing cis/trans isomers in dimethylcyclohexanes.",
      "process": "Item 1 has both methyls on the same face (wedges/wedges) at 1,3 positions: cis. Item 2 has one wedge and one dash at 1,3: trans. Item 3 has both wedges at 1,2: cis. Item 4 has wedge/dash at 1,2: trans.",
      "result": "Cis/trans naming depends on whether substituents point to same or opposite faces."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  }
];
