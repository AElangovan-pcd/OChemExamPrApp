// OChemStudyBuddy - McMurry Chapter 3
// Author: A. Elangovan, PhD
var CH03_QUESTIONS = [
  {
    "question_id": "ch03_q1_functional_group_identification",
    "topic": "Functional Groups",
    "difficulty_level": "Easy",
    "question_text": "Identify the functional group present in the compound represented by the following structure: CH3-CH2-O-CH2-CH3.",
    "question_smiles": "CCOCC",
    "options": [
      {
        "option_id": "A",
        "text": "Ether",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Alcohol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ester",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ketone",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A functional group is identified by which atoms surround a key centre. For oxygen-containing groups the question is always the same: what else is the oxygen attached to, and is there a carbonyl anywhere?",
      "approach": "Step 1: Locate the oxygen. Here it sits in the middle of the chain, bonded to a carbon on each side.\nStep 2: Check for a carbonyl. There is no C=O anywhere in the structure, which rules out esters, ketones, aldehydes and acids at once.\nStep 3: An oxygen with two carbons and no carbonyl is an ether. This one is diethyl ether.",
      "note": "Because the ether oxygen has no O-H, ether molecules cannot hydrogen bond to one another. That single structural fact is why diethyl ether boils at 35 degrees while butan-1-ol, its isomer, boils at 118.",
      "options": {
        "A": "Correct. The oxygen is bonded to two carbons and there is no carbonyl, which is exactly the definition of an ether.",
        "B": "An alcohol requires an O-H bond. This oxygen carries a carbon on each side, with no hydrogen attached to it.",
        "C": "An ester needs a carbonyl carbon bonded to a second oxygen. There is no C=O in this structure at all.",
        "D": "A ketone requires a C=O flanked by two carbons. The central atom here is oxygen, not a carbonyl carbon."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two ethyl groups joined through a central oxygen atom."
  },
  {
    "question_id": "ch03_q2_functional_group_ester",
    "topic": "Functional Groups",
    "difficulty_level": "Easy",
    "question_text": "Which functional group is characterized by a carbonyl carbon bonded to an alkoxy (-OR) group?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Ester",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ether",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Carboxylic acid",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Amide",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Several functional groups share a carbonyl carbon, and they are told apart entirely by what else is attached to it. Working outward from the carbonyl is the reliable way to identify any of them.",
      "approach": "Step 1: Start at the carbonyl carbon, which the question specifies is present.\nStep 2: Ask what the second substituent is. An OH gives a carboxylic acid, an N gives an amide, a carbon gives a ketone, a hydrogen gives an aldehyde.\nStep 3: Here it is an alkoxy group, an oxygen carrying a further carbon. A carbonyl bonded to OR is an ester.",
      "note": "The distinction from a carboxylic acid is one atom: whether that second oxygen carries a hydrogen or a carbon. It is also the distinction that matters practically, since only the acid is deprotonated by bicarbonate.",
      "options": {
        "A": "Correct. A carbonyl carbon bonded to an alkoxy group is an ester, the arrangement written R-CO-OR.",
        "B": "An ether has an oxygen between two carbons but no carbonyl at all, so it lacks the C=O the question specifies.",
        "C": "A carboxylic acid has a carbonyl bonded to a hydroxyl, not an alkoxy. The difference is whether that oxygen carries a hydrogen or a carbon.",
        "D": "An amide has a carbonyl bonded to nitrogen rather than to oxygen."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q3_functional_group_amide",
    "topic": "Functional Groups",
    "difficulty_level": "Easy",
    "question_text": "Which functional group contains a carbonyl carbon bonded directly to a nitrogen atom?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Amide",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Amine",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Imine",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Nitrile",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Nitrogen appears in several functional groups, and the presence or absence of an adjacent carbonyl separates them. An amide is defined by having both together and directly bonded.",
      "approach": "Step 1: Note the two features the question specifies - a carbonyl carbon, and a nitrogen bonded directly to it.\nStep 2: Eliminate the nitrogen groups that lack a carbonyl. An amine has nitrogen bonded only to carbon and hydrogen, and a nitrile has a carbon-nitrogen triple bond with no oxygen.\nStep 3: An imine has a C=N double bond rather than a C=O with nitrogen attached. Only the amide has the carbonyl and the nitrogen adjacent to one another.",
      "note": "That adjacency has a structural consequence worth carrying forward: the nitrogen lone pair delocalizes into the carbonyl, flattening the nitrogen to sp2 and hindering rotation. It is the same delocalization seen in urea in Chapter 1, and it is what makes the peptide bond planar.",
      "options": {
        "A": "Correct. A carbonyl carbon bonded directly to nitrogen is an amide, written R-CO-N.",
        "B": "An amine has nitrogen bonded to carbon and hydrogen with no carbonyl present, which is exactly the feature the question requires.",
        "C": "An imine contains a carbon-nitrogen double bond. There is no oxygen and so no carbonyl in an imine.",
        "D": "A nitrile has a carbon-nitrogen triple bond and no oxygen at all, so it has no carbonyl carbon."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q4_isomers_pentane",
    "topic": "Alkanes and Alkane Isomers",
    "difficulty_level": "Easy",
    "question_text": "How many constitutional isomers exist for the molecular formula C5H12?",
    "question_smiles": "CCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "3 (pentane, isopentane, neopentane)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4",
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
      "context": "Constitutional isomers differ in the order the atoms are connected. For an alkane that means different carbon skeletons, and the way to count them without missing or repeating is to work systematically down from the longest chain.",
      "approach": "Step 1: Start with the longest possible chain - all five carbons in a row, which is pentane.\nStep 2: Shorten the chain to four and place the remaining carbon as a methyl branch. It can only go on C2, since C1 would just extend the chain back to pentane and C3 duplicates C2 from the other end. That gives 2-methylbutane.\nStep 3: Shorten to three and place both remaining carbons as methyls. Both must sit on C2, giving 2,2-dimethylpropane. No further skeletons exist, so there are three.",
      "note": "The count grows explosively with carbon number - 3 for C5, 5 for C6, 9 for C7, and 75 for C10. That growth is exactly why a systematic naming system was needed at all, and it is worth doing the enumeration by hand once to see why the longest-chain rule comes first.",
      "options": {
        "A": "Correct. The three skeletons are the straight chain, the four-carbon chain with one methyl branch, and the three-carbon chain with two.",
        "B": "Four suggests an extra structure has been counted twice - most often 2-methylbutane drawn again as 3-methylbutane, which is the same skeleton numbered from the other end.",
        "C": "Five is the isomer count for C6H14, one carbon larger. For five carbons there are only three distinct skeletons.",
        "D": "Two misses one of the branched forms. Both a single methyl branch and a double methyl branch are possible with five carbons."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unbranched chain of five carbon atoms."
  },
  {
    "question_id": "ch03_q5_isomers_hexane",
    "topic": "Alkanes and Alkane Isomers",
    "difficulty_level": "Medium",
    "question_text": "How many constitutional isomers exist for the molecular formula C6H14?",
    "question_smiles": "CCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "5",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "6",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "7",
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
      "context": "The same systematic enumeration applies as chain length grows: take the longest chain first, then shorten it by one and distribute the freed carbons as branches, checking each new skeleton against those already found.",
      "approach": "Step 1: The six-carbon straight chain gives hexane.\nStep 2: A five-carbon chain with one methyl branch gives two distinct skeletons - the methyl on C2 or on C3. Placing it on C4 simply reproduces the C2 case numbered from the other end.\nStep 3: A four-carbon chain with two methyls gives two more - both on C2, or one each on C2 and C3. That makes five in total, and no six-carbon skeleton is left over.",
      "note": "The trap in this enumeration is counting the same skeleton twice under two numberings. Always renumber a candidate from both ends and take the lower locants before deciding it is new - the same rule that settles naming disputes settles counting ones.",
      "options": {
        "A": "Correct. Hexane, 2-methylpentane, 3-methylpentane, 2,2-dimethylbutane and 2,3-dimethylbutane are the five distinct skeletons.",
        "B": "Six usually comes from counting 4-methylpentane as separate from 2-methylpentane. Numbered from the other end they are the same molecule.",
        "C": "Seven is the count when two or more duplicates slip through. Check each candidate by renumbering from both ends.",
        "D": "Four means one skeleton has been missed, most often 2,3-dimethylbutane, where the two methyls sit on adjacent carbons."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unbranched chain of six carbon atoms."
  },
  {
    "question_id": "ch03_q6_alkyl_group_isobutyl",
    "topic": "Alkyl Groups",
    "difficulty_level": "Medium",
    "question_text": "What is the correct structure of the 'isobutyl' group?",
    "question_smiles": "CC(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "-CH2-CH(CH3)2",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "-CH(CH3)-CH2-CH3",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "-C(CH3)3",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "-CH2-CH2-CH2-CH3",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An alkyl group is named for the alkane it comes from and for which carbon carries the open valence - the point of attachment. For the four-carbon groups, the same skeleton gives different names depending on where that attachment sits.",
      "approach": "Step 1: Recall the isobutyl skeleton - four carbons arranged as a three-carbon chain with a methyl branch, the same skeleton as isobutane.\nStep 2: Place the attachment point. In isobutyl the group connects through a CH2, one carbon away from the branch point.\nStep 3: That gives a CH2 joined to a CH which carries two methyls, written -CH2-CH(CH3)2.",
      "note": "The four butyl groups are worth learning as a set, since they differ only in attachment point: butyl attaches at the end of a straight chain, sec-butyl at an internal carbon of that chain, isobutyl at the CH2 of the branched skeleton, and tert-butyl at the branch carbon itself.",
      "options": {
        "A": "Correct. Isobutyl attaches through a CH2 that is joined to a carbon bearing two methyl groups.",
        "B": "This is the sec-butyl group, which attaches at an internal carbon of a straight four-carbon chain rather than at the CH2 of a branched one.",
        "C": "This is the tert-butyl group, attaching directly at a carbon that carries three methyls.",
        "D": "This is the straight-chain butyl group, with no branch at all."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A central carbon bonded to three methyl groups, the branched four-carbon alkane."
  },
  {
    "question_id": "ch03_q7_alkyl_group_secbutyl",
    "topic": "Alkyl Groups",
    "difficulty_level": "Medium",
    "question_text": "What is the correct structure of the 'sec-butyl' group?",
    "question_smiles": "CC(C)CC",
    "options": [
      {
        "option_id": "A",
        "text": "-CH(CH3)-CH2-CH3",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "-CH2-CH(CH3)2",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "-C(CH3)3",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "-CH2-CH2-CH(CH3)2",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The prefix sec- indicates that the attachment carbon is secondary - bonded to two other carbons. Reading the prefix tells you how many carbons the attachment point must touch before you draw anything.",
      "approach": "Step 1: Take the parent as a straight four-carbon chain, butane.\nStep 2: Apply the prefix. Secondary means the attaching carbon is bonded to two other carbons, so the attachment must be at C2 rather than at the end.\nStep 3: Attaching at C2 of butane gives a carbon bearing a methyl on one side and an ethyl on the other, written -CH(CH3)-CH2-CH3.",
      "note": "Note that these prefixes describe the attachment carbon, not the shape of the group as a whole. tert-Butyl attaches at a tertiary carbon and isobutyl at a primary one, even though isobutyl and tert-butyl share the identical branched skeleton.",
      "options": {
        "A": "Correct. Attachment at the second carbon of a straight four-carbon chain gives a secondary attachment point, bearing a methyl and an ethyl.",
        "B": "This is isobutyl, which attaches through a CH2 - a primary carbon - rather than through a secondary one.",
        "C": "This is tert-butyl, attaching at a carbon bonded to three others, which is tertiary rather than secondary.",
        "D": "This has five carbons rather than four, so it is not a butyl group at all."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a methyl branch on the second carbon."
  },
  {
    "question_id": "ch03_q8_classification_carbons",
    "topic": "Alkyl Groups",
    "difficulty_level": "Medium",
    "question_text": "In 2,2,3-trimethylpentane, how many primary (1\\(\\circ\\)), secondary (2\\(\\circ\\)), tertiary (3\\(\\circ\\)), and quaternary (4\\(\\circ\\)) carbon atoms are present, respectively?",
    "question_smiles": "CCC(C)C(C)(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "5 primary, 1 secondary, 1 tertiary, 1 quaternary",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4 primary, 2 secondary, 1 tertiary, 1 quaternary",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5 primary, 2 secondary, 0 tertiary, 1 quaternary",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "6 primary, 0 secondary, 1 tertiary, 1 quaternary",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carbon is classified by how many other carbons it is attached to - one for primary, two for secondary, three for tertiary and four for quaternary. Hydrogens are irrelevant to the count.",
      "approach": "Step 1: Draw out 2,2,3-trimethylpentane: a five-carbon chain with two methyls on C2 and one on C3, eight carbons in all.\nStep 2: Take the carbons that touch only one other carbon. These are C1, C5, both methyls on C2 and the methyl on C3 - five primary carbons.\nStep 3: Classify the rest. C4 is a CH2 between C3 and C5, so it is secondary. C3 touches C2, C4 and its own methyl - tertiary. C2 touches C1, C3 and its two methyls - quaternary. The tally is 5, 1, 1, 1.",
      "note": "A quaternary carbon has no hydrogen at all, which is why such positions are inert to the radical halogenation of Chapter 10 and cannot be the site of an elimination. Classifying carbons is a habit worth forming early, because reactivity patterns are stated in these terms throughout the course.",
      "options": {
        "A": "Correct. Five carbons touch only one neighbour, one CH2 touches two, C3 touches three and C2 touches four.",
        "B": "Four primary and two secondary miscounts the methyl groups. There are three methyl substituents plus both chain ends, giving five primary carbons and only one CH2.",
        "C": "This assigns no tertiary carbon, but C3 carries a methyl branch as well as two chain neighbours, so it touches three carbons.",
        "D": "Six primary would need another methyl group, and with no secondary carbon at all the five-carbon chain could not be continuous."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-carbon chain carrying a methyl group on one carbon and two methyl groups on the neighbouring carbon."
  },
  {
    "question_id": "ch03_q9_iupac_rules_parent",
    "topic": "Naming Alkanes",
    "difficulty_level": "Easy",
    "question_text": "What is the first step in the IUPAC system for naming branched-chain alkanes?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Find the longest continuous carbon chain to serve as the parent name.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Number the carbon atoms starting from the end closest to a branch.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Identify and list all substituents alphabetically.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Write the name as a single word using hyphens to separate numbers from prefixes.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The IUPAC rules are applied in a fixed order, and that order matters: each step constrains the ones after it. Everything else in the name depends on which chain is chosen as the parent.",
      "approach": "Step 1: Identify the longest continuous carbon chain. This becomes the parent and fixes the root of the name.\nStep 2: Only then number that chain, from whichever end gives the substituents the lower locants.\nStep 3: Finally, name the substituents and cite them alphabetically in front of the parent name.",
      "note": "The longest chain need not be the one drawn in a straight line - it can turn corners on the page. Missing a longer chain that bends is the commonest naming error, and it corrupts everything downstream, since the substituent list depends entirely on which chain was chosen.",
      "options": {
        "A": "Correct. The longest continuous chain is chosen first, because it determines the parent name that every later step depends on.",
        "B": "Numbering comes second. Until the parent chain is chosen there is nothing to number.",
        "C": "Substituents can only be identified once the parent chain is fixed, since what counts as a branch depends on which chain was selected.",
        "D": "Assembling the written name is the last step, after the parent, the numbering and the substituents have all been settled."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q10_iupac_name_isopropyl",
    "topic": "Naming Alkanes",
    "difficulty_level": "Medium",
    "question_text": "What is the correct IUPAC name of the compound CH3-CH(CH3)-CH2-CH2-CH3?",
    "question_smiles": "CC(C)CCC",
    "options": [
      {
        "option_id": "A",
        "text": "2-Methylpentane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-Methylpentane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Methylbutane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Isopropylpropane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Once the parent chain is chosen, the numbering direction is settled by the lowest-locant rule: number from the end that gives the substituents the smaller set of numbers. Two names differing only in numbering direction describe the same molecule, but only one is correct.",
      "approach": "Step 1: Find the longest chain. Counting through the structure gives five carbons, so the parent is pentane.\nStep 2: Locate the substituent - a single methyl group on the carbon next to one end.\nStep 3: Number from the nearer end, which puts the methyl at C2 rather than C4. The name is 2-methylpentane.",
      "note": "Option B is the right molecule under the wrong name - 4-methylpentane denotes exactly this compound, and fails only on the lowest-locant rule. Recognising that a wrong name can still describe the correct structure is the skill this kind of item is really testing.",
      "options": {
        "A": "Correct. A five-carbon parent with a methyl on the second carbon, numbered from the end that gives the lower locant.",
        "B": "This is the same molecule numbered from the wrong end. Both numberings are geometrically possible, but the rule requires the lower locant, so 2 wins over 4.",
        "C": "Butane is a four-carbon parent. This structure has five carbons in its longest continuous chain, so the parent name is wrong.",
        "D": "Isopropylpropane is not an acceptable IUPAC name. It also fails the longest-chain rule, since the full chain here runs to five carbons."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-carbon chain with a methyl group on the second carbon."
  },
  {
    "question_id": "ch03_q11_iupac_tiebreaker_numbering",
    "topic": "Naming Alkanes",
    "difficulty_level": "Hard",
    "question_text": "What is the correct IUPAC name for a seven-carbon parent chain with methyl groups at C3 and C5, and an ethyl group at C4?",
    "question_smiles": "CCC(C)C(CC)C(C)CC",
    "options": [
      {
        "option_id": "A",
        "text": "4-Ethyl-3,5-dimethylheptane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-Ethyl-3,5-dimethylhexane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3,5-Dimethyl-4-ethylheptane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,4-Diethyl-3-methylhexane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When a molecule carries several different substituents, two separate rules apply: numbering is chosen to give the lowest locants, and the substituents are then cited in the name in alphabetical order, which is generally a different order from their positions.",
      "approach": "Step 1: Fix the parent. Seven carbons in the longest chain gives heptane.\nStep 2: Number the chain. The substituents sit at C3, C4 and C5, and this set is symmetric, so numbering from either end gives the same locants.\nStep 3: Cite the substituents alphabetically. Ethyl comes before methyl, so the ethyl at C4 is named first, giving 4-ethyl-3,5-dimethylheptane.",
      "note": "Alphabetical order uses the substituent name itself, ignoring multiplying prefixes: dimethyl is alphabetised under m, not d. That is why ethyl precedes dimethyl here even though d comes before e in the alphabet.",
      "options": {
        "A": "Correct. A heptane parent with substituents at C3, C4 and C5, cited alphabetically so that ethyl precedes methyl.",
        "B": "The locants and the citation order are right, but hexane is a six-carbon parent. This chain has seven carbons.",
        "C": "This is the right molecule under the wrong name. Everything is correct except the citation order, which must be alphabetical - ethyl before methyl, ignoring the di- prefix.",
        "D": "This describes a different substitution pattern entirely, with two ethyl groups on a six-carbon parent rather than one ethyl and two methyls on seven."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A seven-carbon chain carrying a methyl group on the third carbon, an ethyl group on the fourth, and a methyl group on the fifth."
  },
  {
    "question_id": "ch03_q12_iupac_longest_chain_trap",
    "topic": "Naming Alkanes",
    "difficulty_level": "Hard",
    "question_text": "What is the correct IUPAC name of the following structure: (CH3CH2)2CH-CH(CH3)2?",
    "question_smiles": "CCC(CC)C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "3-Ethyl-2-methylpentane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Isopropylbutane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-Isopropylpentane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Ethyl-3-methylpentane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When several chains tie for longest, the choice between them is not free. IUPAC settles it with a tiebreaker: take the chain that carries the greater number of substituents, since that produces the more informative name.",
      "approach": "Step 1: Find the longest chains. Several five-carbon paths run through this eight-carbon skeleton, and none is longer, so the parent is pentane either way.\nStep 2: Apply the tiebreaker. One five-carbon chain leaves a single isopropyl substituent; another leaves an ethyl and a methyl - two substituents. The rule prefers the chain with more, so take the second.\nStep 3: Number for lowest locants. From one end the substituents fall at 3 and 4; from the other at 2 and 3, so the second numbering wins. Cite alphabetically - ethyl before methyl - giving 3-ethyl-2-methylpentane.",
      "note": "Option C is the right molecule under the wrong name: 3-isopropylpentane denotes exactly this compound and fails only on the tiebreaker rule, since it selects the five-carbon chain carrying one substituent rather than two. Recognising that a rejected name can still describe the correct structure is what this item is really testing.",
      "options": {
        "A": "Correct. The five-carbon chain bearing two substituents is preferred, numbered to give locants 2 and 3, with ethyl cited before methyl.",
        "B": "This takes a four-carbon parent when five-carbon chains are available, so it fails the longest-chain rule before any tiebreaker applies.",
        "C": "The right molecule under the wrong name. This picks a valid five-carbon chain, but one carrying a single substituent where an alternative carries two, which the tiebreaker rule rejects.",
        "D": "An ethyl group at C2 of a pentane chain is impossible in a correct name: if a two-carbon substituent sits at the second carbon, a longer chain runs through it and should have been chosen as the parent."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A central carbon bearing an ethyl group on one side and joined to a chain that continues through a carbon carrying a methyl group."
  },
  {
    "question_id": "ch03_q13_heat_of_combustion",
    "topic": "Properties of Alkanes",
    "difficulty_level": "Hard",
    "question_text": "Which of the following isomer structures of C5H12 releases the least heat of combustion (lowest energy content)?",
    "question_smiles": "CCCCC.CC(C)CC.CC(C)(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "2,2-Dimethylpropane (neopentane) (highest branching, most stable)",
        "smiles": "CC(C)(C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Methylbutane (isopentane)",
        "smiles": "CC(C)CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Pentane (straight-chain, least stable isomer)",
        "smiles": "CCCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "They all release the exact same heat because they are isomers.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Heat of combustion measures the energy released in burning each isomer to the same products, carbon dioxide and water. Since the products are identical, any difference in heat released reflects a difference in the starting materials' energies - the more stable isomer starts lower and releases less.",
      "approach": "Step 1: Note that all three isomers have the same formula and burn to the same products, so the comparison isolates their relative stabilities.\nStep 2: Recall the branching trend. More highly branched alkanes are more stable, because branching makes the molecule more compact and increases favourable interactions between atoms held close together.\nStep 3: Rank by branching. Neopentane, with a quaternary carbon and four methyls, is the most branched and therefore the most stable, so it releases the least heat.",
      "note": "The differences are small compared with the totals - a few kJ/mol out of more than three thousand - but they are reproducible and they are how relative alkane stabilities were first measured. Combustion data is a way of comparing energies you cannot measure directly.",
      "options": {
        "A": "Correct. Neopentane is the most branched and most stable of the three, so it sits lowest in energy and releases the least on combustion.",
        "B": "2-Methylbutane has one branch and is intermediate in stability, releasing more than neopentane but less than the straight chain.",
        "C": "Pentane is unbranched and the least stable of the three, so it releases the most heat rather than the least.",
        "D": "Isomers share a formula but not their energies. Their different skeletons put them at measurably different energies, which is exactly what combustion data reveals."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Three separate five-carbon structures shown together: an unbranched chain, a chain with one methyl branch, and a central carbon bearing four methyl groups."
  },
  {
    "question_id": "ch03_q14_conformation_ethane_barrier",
    "topic": "Conformations of Ethane",
    "difficulty_level": "Medium",
    "question_text": "What is the energy barrier to rotation around the C-C bond of ethane?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "12.0 kJ/mol (2.9 kcal/mol)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "11.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "25.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Rotation about a single bond is not entirely free. It passes through a low-energy staggered arrangement and a higher-energy eclipsed one, and the barrier is the difference between them.",
      "approach": "Step 1: Identify the two limiting conformations. Staggered puts each C-H on the front carbon between two on the back carbon; eclipsed aligns them.\nStep 2: The staggered form is the energy minimum and the eclipsed form the maximum, so the barrier is the gap between them.\nStep 3: For ethane that gap is about 12 kJ/mol, or 2.9 kcal/mol, spread across three eclipsing H-H interactions at roughly 4 kJ/mol each.",
      "note": "Twelve kJ/mol is small enough that thermal energy at room temperature clears it easily - ethane rotates millions of times a second, so the conformations cannot be separated. The barrier matters not because it stops rotation but because it tells you where the molecule spends most of its time.",
      "options": {
        "A": "Correct. The staggered-to-eclipsed gap in ethane is about 12 kJ/mol, made up of three H-H eclipsing interactions of roughly 4 kJ/mol each.",
        "B": "4 kJ/mol is the cost of a single eclipsing H-H interaction. Ethane's eclipsed conformation has three of them at once.",
        "C": "11 kJ/mol is the value assigned to one eclipsing methyl-methyl interaction in butane, not to ethane's rotation.",
        "D": "25 kJ/mol is roughly double the true barrier. A barrier that size would begin to slow rotation appreciably at room temperature, which is not what is observed for ethane."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two carbon atoms joined by a single bond, each carrying three hydrogen atoms."
  },
  {
    "question_id": "ch03_q15_torsional_strain_def",
    "topic": "Conformations of Ethane",
    "difficulty_level": "Medium",
    "question_text": "What is the primary cause of torsional strain in the eclipsed conformation of ethane?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "Repulsion between the bonding molecular orbitals of adjacent C-H bonds as they pass close to one another.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Steric clash between the tiny hydrogen atoms.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Electrostatic attraction between opposite dipoles.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Angle strain within the sp3 hybridized carbons.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Torsional strain is often described loosely as atoms bumping into each other, but in ethane the hydrogens never come close enough for that. The strain has an orbital origin rather than a steric one.",
      "approach": "Step 1: Consider the distance involved. In eclipsed ethane the hydrogens on adjacent carbons remain about 2.5 angstroms apart, comfortably outside the range where their van der Waals surfaces would clash.\nStep 2: Look at the bonds instead of the atoms. Eclipsing aligns the filled C-H bonding orbitals on the two carbons so that they lie directly in line with one another.\nStep 3: Two filled orbitals brought into alignment repel, because their electrons cannot occupy the same region. That repulsion raises the energy, and staggering relieves it by putting each C-H bond between two on the opposite carbon.",
      "note": "The distinction matters as soon as the substituents get larger. In butane the methyl-methyl eclipsing interaction really is partly steric, which is why it costs 11 kJ/mol against a hydrogen pair's 4 - torsional strain and steric strain are separate contributions that happen to coincide in eclipsed conformations.",
      "options": {
        "A": "Correct. Aligning the filled C-H bonding orbitals on adjacent carbons brings their electrons into opposition, and that repulsion is what raises the eclipsed conformation's energy.",
        "B": "Hydrogen atoms are far too small for this. At about 2.5 angstroms apart in eclipsed ethane, their van der Waals surfaces do not overlap at all.",
        "C": "Attraction would lower the energy, not raise it, so it cannot explain a barrier. C-H bonds are also barely polar, giving little dipole to work with.",
        "D": "Angle strain comes from bond angles forced away from 109.5 degrees, which happens in small rings. Rotating about a bond does not change any bond angle."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two carbon atoms joined by a single bond, each carrying three hydrogen atoms."
  },
  {
    "question_id": "ch03_q16_conformation_propane_barrier",
    "topic": "Conformations of Propane",
    "difficulty_level": "Hard",
    "question_text": "What is the rotational energy barrier around the C-C bond in propane?",
    "question_smiles": "CCC",
    "options": [
      {
        "option_id": "A",
        "text": "14.0 kJ/mol",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "12.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "18.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "6.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Replacing one hydrogen with a methyl group changes what is eclipsing what. The barrier rises because a methyl-hydrogen interaction costs more than the hydrogen-hydrogen interaction it replaced.",
      "approach": "Step 1: Look at what rotates. Turning about a propane C-C bond swings a methyl group and two hydrogens past three hydrogens on the other carbon.\nStep 2: In the eclipsed conformation there are two H-H eclipsing interactions at about 4 kJ/mol each, plus one CH3-H interaction, which costs somewhat more at about 6.\nStep 3: Adding those gives roughly 14 kJ/mol, slightly above ethane's 12.",
      "note": "The increments are additive and roughly transferable, which is what makes conformational analysis quantitative rather than merely descriptive. Knowing that an H-H eclipse costs about 4, a CH3-H about 6 and a CH3-CH3 about 11 lets you estimate a barrier for a molecule you have never seen.",
      "options": {
        "A": "Correct. Two H-H eclipsing interactions at about 4 kJ/mol plus one methyl-hydrogen interaction at about 6 gives roughly 14 kJ/mol.",
        "B": "12 kJ/mol is ethane's barrier, where all three eclipsing interactions are between hydrogens. Propane's methyl group raises the total.",
        "C": "18 kJ/mol overshoots. That would require a methyl-methyl eclipse, which propane cannot have - only one of its rotating carbons carries a methyl.",
        "D": "6 kJ/mol is roughly the cost of the single methyl-hydrogen interaction alone, leaving out the two H-H interactions that accompany it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unbranched chain of three carbon atoms."
  },
  {
    "question_id": "ch03_q17_butane_gauche_interaction",
    "topic": "Conformations of Butane",
    "difficulty_level": "Medium",
    "question_text": "In the conformational analysis of butane, what name is given to the staggered conformation where the dihedral angle between the two methyl groups is 60 degrees?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Gauche",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Anti",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Fully eclipsed",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Skew",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Butane has two distinct staggered conformations rather than one, because the two methyl groups can be positioned differently relative to each other while all bonds remain staggered. They are distinguished by the dihedral angle between the methyls.",
      "approach": "Step 1: Rotate about the central C2-C3 bond and follow the two methyl groups.\nStep 2: At 180 degrees apart the methyls are as far from one another as possible, and all bonds are staggered. This is the anti conformation, the global minimum.\nStep 3: At 60 degrees the bonds are still staggered, but the two methyls are adjacent rather than opposed. This is the gauche conformation, a local minimum about 3.8 kJ/mol above anti.",
      "note": "Gauche is the more useful of the two names to fix, because gauche interactions reappear throughout Chapter 4. An axial substituent on a cyclohexane ring is gauche to two ring bonds, and that is precisely the strain that makes the equatorial position preferred.",
      "options": {
        "A": "Correct. The staggered conformation with the methyls 60 degrees apart is gauche - staggered, but with the two large groups adjacent.",
        "B": "Anti is the other staggered conformation, with the methyls 180 degrees apart. It is the lowest-energy arrangement of the two.",
        "C": "Fully eclipsed is the highest-energy conformation, at a dihedral angle of 0 degrees with the methyls directly aligned - not staggered at all.",
        "D": "Skew is not the standard term for this conformation. The accepted name for the 60 degree staggered arrangement is gauche."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unbranched chain of four carbon atoms."
  },
  {
    "question_id": "ch03_q18_butane_staggered_stability",
    "topic": "Conformations of Butane",
    "difficulty_level": "Hard",
    "question_text": "What is the energy difference between the anti and gauche conformations of butane?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "3.8 kJ/mol (0.9 kcal/mol)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "19.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "11.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Both anti and gauche are staggered, so neither carries torsional strain from eclipsing. The energy difference between them is purely steric - a consequence of how close the two methyl groups sit.",
      "approach": "Step 1: Compare the two conformations. In anti the methyls are 180 degrees apart; in gauche they are 60 degrees apart, close enough for their van der Waals surfaces to begin to overlap.\nStep 2: That crowding is a single gauche interaction, and it destabilises the gauche form relative to anti.\nStep 3: The measured difference is about 3.8 kJ/mol, or 0.9 kcal/mol - small, but enough that anti is the more populated conformation at room temperature.",
      "note": "3.8 kJ/mol corresponds to roughly a two-to-one preference at room temperature, so butane spends a substantial fraction of its time gauche. A conformational preference this size shifts a population; it does not lock a molecule into one shape.",
      "options": {
        "A": "Correct. A single gauche methyl-methyl interaction costs about 3.8 kJ/mol, which is the entire difference between the two staggered forms.",
        "B": "19.0 kJ/mol is the full barrier to rotation through the fully eclipsed conformation, not the gap between the two staggered minima.",
        "C": "11.0 kJ/mol is the value assigned to an eclipsing methyl-methyl interaction. In gauche the methyls are staggered, not eclipsed.",
        "D": "1.0 kJ/mol is too small to account for the observed population difference between anti and gauche butane."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unbranched chain of four carbon atoms."
  },
  {
    "question_id": "ch03_q19_butane_fully_eclipsed",
    "topic": "Conformations of Butane",
    "difficulty_level": "Hard",
    "question_text": "What is the energy barrier to rotation through the highest-energy conformation (fully eclipsed) of butane?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "19.0 kJ/mol (4.5 kcal/mol)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "16.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "11.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "12.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The rotational barrier is measured from the lowest-energy conformation to the highest. For butane that means from anti, the global minimum, up to the fully eclipsed arrangement where the two methyl groups are directly aligned.",
      "approach": "Step 1: Identify the highest point. At a dihedral angle of 0 degrees the two methyls eclipse each other, and the two remaining hydrogen pairs eclipse as well.\nStep 2: Add the contributions. One methyl-methyl eclipse costs about 11 kJ/mol and the two H-H eclipses about 4 each.\nStep 3: The total is about 19 kJ/mol, or 4.5 kcal/mol, measured relative to the anti conformation.",
      "note": "Even 19 kJ/mol is cleared readily at room temperature, so butane interconverts among all its conformations far too fast to separate them. Conformations are shapes a molecule passes through, not isomers that can be isolated - a distinction worth keeping firm before Chapter 5 introduces stereoisomers, which genuinely can be separated.",
      "options": {
        "A": "Correct. One methyl-methyl eclipse at about 11 kJ/mol plus two H-H eclipses at about 4 each gives roughly 19 kJ/mol above anti.",
        "B": "16.0 kJ/mol falls short. It is close to the total for two H-H eclipses plus a methyl-hydrogen interaction, which describes a different eclipsed arrangement of butane.",
        "C": "11.0 kJ/mol is the cost of the methyl-methyl eclipse alone, omitting the two hydrogen pairs that eclipse at the same time.",
        "D": "12.0 kJ/mol is ethane's rotational barrier. Butane's is higher because it eclipses two methyl groups rather than only hydrogens."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unbranched chain of four carbon atoms."
  },
  {
    "question_id": "ch03_q20_butane_methyl_methyl_eclipsed",
    "topic": "Conformations of Butane",
    "difficulty_level": "Hard",
    "question_text": "Using the total energy of the fully eclipsed conformation of butane (19.0 kJ/mol) and the value of eclipsing H-H interactions (4.0 kJ/mol), what is the steric strain value assigned to a single eclipsing CH3-CH3 interaction?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "11.0 kJ/mol",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "15.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "6.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3.8 kJ/mol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Conformational energies are treated as additive: the total strain of a conformation is the sum of its individual eclipsing and gauche interactions. That additivity lets an unknown interaction be extracted by subtraction once the others are known.",
      "approach": "Step 1: Count the interactions in fully eclipsed butane. The two methyl groups eclipse each other, and the remaining two pairs of hydrogens eclipse as well - one methyl-methyl and two H-H interactions.\nStep 2: Subtract the known contributions from the total. Two H-H eclipses at 4.0 kJ/mol each account for 8.0 of the 19.0.\nStep 3: What remains, 19.0 minus 8.0, is 11.0 kJ/mol, which is the cost assigned to the single eclipsing methyl-methyl interaction.",
      "note": "That a methyl-methyl eclipse costs nearly three times a hydrogen pair is the quantitative statement of a qualitative idea used constantly: larger groups suffer more when forced together. The same number reappears in Chapter 4 to explain why substituents prefer the equatorial position on a cyclohexane ring.",
      "options": {
        "A": "Correct. Subtracting the two H-H eclipses at 4.0 kJ/mol each from the 19.0 kJ/mol total leaves 11.0 for the methyl-methyl interaction.",
        "B": "15.0 kJ/mol comes from subtracting only one H-H interaction. The fully eclipsed conformation has two of them alongside the methyl pair.",
        "C": "6.0 kJ/mol is roughly the cost of a methyl-hydrogen eclipse, which occurs in a different conformation of butane, not the fully eclipsed one.",
        "D": "3.8 kJ/mol is the gauche interaction between staggered methyls. Eclipsing them costs considerably more."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unbranched chain of four carbon atoms."
  },
  {
    "question_id": "ch03_q21_classification_alkanes",
    "topic": "Alkanes and Alkane Isomers",
    "difficulty_level": "Easy",
    "question_text": "What is the general molecular formula for acyclic, saturated alkanes?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "CnH2n+2",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CnH2n",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CnH2n-2",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CnHn",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A general formula follows from counting bonds. In a saturated open-chain alkane every carbon forms four bonds, and every bond not made to another carbon is made to hydrogen.",
      "approach": "Step 1: Take a chain of n carbons. The carbons are joined by n minus 1 carbon-carbon bonds.\nStep 2: Count the bond positions available. The n carbons offer 4n bonds in total, of which twice n minus 1 are used internally, since each C-C bond consumes a position at both ends.\nStep 3: Subtract to get the hydrogens: 4n minus 2n plus 2, which is 2n plus 2. So the formula is CnH2n+2.",
      "note": "Each departure from that maximum costs two hydrogens: adding a ring gives CnH2n, and so does adding a double bond. Comparing a real formula against 2n plus 2 counts the rings and pi bonds together, which is the degrees-of-unsaturation calculation used to narrow down an unknown structure.",
      "options": {
        "A": "Correct. An open-chain saturated alkane carries the maximum possible hydrogens, 2n plus 2 for n carbons.",
        "B": "CnH2n is two hydrogens short of saturation, which corresponds to one ring or one double bond - a cycloalkane or an alkene.",
        "C": "CnH2n-2 is four hydrogens short, indicating two rings, two double bonds, or one triple bond.",
        "D": "CnHn would leave most carbons far short of four bonds and does not correspond to any saturated structure."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q22_saturated_definition",
    "topic": "Alkanes and Alkane Isomers",
    "difficulty_level": "Easy",
    "question_text": "What does the term 'saturated' mean when describing a hydrocarbon?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The molecule contains only single bonds and has the maximum number of hydrogens per carbon.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The molecule contains double or triple bonds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The hydrocarbon is dissolved in water.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The carbon chain is cyclic.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Saturated is a statement about hydrogen content: the molecule holds as many hydrogens as its carbon skeleton allows. Anything that reduces that count - a pi bond or a ring closure - makes the compound unsaturated.",
      "approach": "Step 1: Consider what limits the hydrogen count. Each carbon forms four bonds, and any bond used for a second or third link to another carbon is a bond not available to hydrogen.\nStep 2: A molecule with only single bonds uses the minimum of its bonding capacity on carbon-carbon links, leaving the maximum for hydrogen.\nStep 3: So saturated means all single bonds and the maximum hydrogen count - for an open chain, the formula CnH2n+2.",
      "note": "Strictly, a ring also reduces the hydrogen count without introducing a pi bond, which is why cyclohexane is C6H12 rather than C6H14. Cycloalkanes are still called saturated because they contain no multiple bonds, so the term tracks bond order rather than the raw hydrogen count.",
      "options": {
        "A": "Correct. Only single bonds means the carbon skeleton uses the least of its bonding capacity on itself, leaving the maximum available for hydrogen.",
        "B": "Multiple bonds are precisely what makes a hydrocarbon unsaturated. Each pi bond costs two hydrogens relative to the saturated maximum.",
        "C": "Saturation describes molecular structure, not solubility. Alkanes are in fact famously insoluble in water.",
        "D": "Rings and saturation are separate properties. Cyclohexane is cyclic and saturated; cyclohexene is cyclic and unsaturated."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q23_boiling_point_structure",
    "topic": "Properties of Alkanes",
    "difficulty_level": "Medium",
    "question_text": "Which of the following alkanes has the highest boiling point?",
    "question_smiles": "CCCCCC.CC(C)CC.C(C)(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "Hexane (CCCCCC)",
        "smiles": "CCCCCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Pentane (CCCCC)",
        "smiles": "CCCCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Butane (CCCC)",
        "smiles": "CCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,2-Dimethylpropane",
        "smiles": "CC(C)(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Alkanes are nonpolar, so the only force holding their molecules together is London dispersion. Its strength grows with the number of electrons present and with how much surface two molecules can bring into contact.",
      "approach": "Step 1: Compare the carbon counts first, since size dominates when it differs. Hexane has six carbons against pentane's five, butane's four and neopentane's five.\nStep 2: More carbons means more electrons and a larger polarizable surface, so dispersion attraction is stronger.\nStep 3: Hexane is the largest of the four and also unbranched, so it has both the greatest electron count and the most extended shape. It boils highest, at about 69 degrees.",
      "note": "Chain length matters more than branching when both vary: hexane beats pentane by size alone. Branching only becomes the deciding factor between isomers, where the electron count is held fixed - which is what the next question isolates.",
      "options": {
        "A": "Correct. Six carbons give hexane the largest electron count and, being unbranched, the most contact area, so it boils highest at about 69 degrees.",
        "B": "Pentane boils around 36 degrees. It is unbranched, but one carbon shorter than hexane, and size is the dominant factor here.",
        "C": "Butane is smaller still and boils below room temperature at about minus 0.5 degrees.",
        "D": "2,2-Dimethylpropane has five carbons but is compact and nearly spherical, so it boils lowest of the five-carbon isomers at 9.5 degrees."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Three separate structures shown together: an unbranched six-carbon chain, a four-carbon chain with a methyl branch, and a central carbon bearing three methyl groups."
  },
  {
    "question_id": "ch03_q24_boiling_point_branching",
    "topic": "Properties of Alkanes",
    "difficulty_level": "Medium",
    "question_text": "Which of the following isomers of C5H12 has the lowest boiling point?",
    "question_smiles": "CCCCC.CC(C)CC.CC(C)(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "2,2-Dimethylpropane (neopentane) (bp = 9.5 degrees C)",
        "smiles": "CC(C)(C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Methylbutane (isopentane) (bp = 28 degrees C)",
        "smiles": "CC(C)CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Pentane (bp = 36 degrees C)",
        "smiles": "CCCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "They all have the same boiling point.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Comparing isomers holds the electron count constant, so dispersion strength depends only on shape. The question becomes how much of each molecule's surface can lie against a neighbour.",
      "approach": "Step 1: Note that all three are C5H12, with identical mass and identical numbers of electrons.\nStep 2: Compare shapes. Pentane is an extended chain, 2-methylbutane has one branch, and neopentane is compact and nearly spherical.\nStep 3: A sphere has the least surface available for contact, so neopentane's molecules attract each other least and it boils lowest, at 9.5 degrees against pentane's 36.",
      "note": "Boiling point and stability point in opposite directions here, which is worth keeping straight. Neopentane is the most stable of the three isomers, releasing the least heat on combustion, yet it boils lowest - stability is about the molecule's internal energy, boiling point about attraction between molecules.",
      "options": {
        "A": "Correct. The most branched isomer is the most compact, presents the least surface for contact, and therefore boils lowest at 9.5 degrees.",
        "B": "2-Methylbutane has a single branch and is intermediate in shape, boiling at 28 degrees - between the other two.",
        "C": "Pentane is unbranched and most extended, so its molecules make the most contact and it boils highest of the three at 36 degrees.",
        "D": "Isomers share a formula but not a shape, and shape governs dispersion forces. The three boil across a range of nearly 27 degrees."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Three separate five-carbon structures shown together: an unbranched chain, a chain with one methyl branch, and a central carbon bearing four methyl groups."
  },
  {
    "question_id": "ch03_q25_conformation_butane_energy_profile",
    "topic": "Conformations of Butane",
    "difficulty_level": "Hard",
    "question_text": "During rotation around the C2-C3 bond of butane, how many energy minima (stable conformations) exist in a full 360-degree rotation?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "3 (one anti and two degenerate gauche conformers)",
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
        "text": "4",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "6",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Rotating about a carbon-carbon bond passes alternately through staggered and eclipsed arrangements. Every staggered arrangement is a local energy minimum, and a full turn passes through three of them.",
      "approach": "Step 1: Start at a dihedral angle of 0 degrees, the fully eclipsed conformation, and rotate.\nStep 2: Staggered arrangements occur every 120 degrees, at 60, 180 and 300 degrees - three in a full turn.\nStep 3: Classify them. At 180 degrees the methyls are opposed, giving the anti conformation. At 60 and 300 degrees they are adjacent, giving two gauche conformations that are mirror images and therefore equal in energy.",
      "note": "The two gauche forms are degenerate - identical in energy - because they differ only in which way the rotation went. That is why butane's energy profile has three minima but only two distinct energies among them.",
      "options": {
        "A": "Correct. Three staggered arrangements occur in a full turn: one anti at 180 degrees and two degenerate gauche at 60 and 300.",
        "B": "Two would count only the distinct energy levels, anti and gauche, rather than the number of minima on the curve. There are two gauche positions, not one.",
        "C": "Four minima would require staggered arrangements every 90 degrees. They occur every 120, since three bonds project from each carbon.",
        "D": "Six is the total count of stationary points - three minima and three maxima together - not the number of minima alone."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unbranched chain of four carbon atoms."
  },
  {
    "question_id": "ch03_q26_conformation_butane_maxima",
    "topic": "Conformations of Butane",
    "difficulty_level": "Hard",
    "question_text": "How many energy maxima (transition states) occur during a full 360-degree rotation around the C2-C3 bond of butane?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "3 (one fully eclipsed and two degenerate eclipsed conformers)",
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
        "text": "4",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "6",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Eclipsed arrangements are the maxima on a rotational energy profile, and they alternate with the staggered minima. Since staggered forms occur every 120 degrees, eclipsed ones do too, offset by 60.",
      "approach": "Step 1: Locate the eclipsed arrangements. Starting from 0 degrees they occur at 0, 120 and 240 degrees - three in a full turn.\nStep 2: Identify the highest. At 0 degrees the two methyl groups eclipse each other directly, which is the global maximum at about 19 kJ/mol.\nStep 3: The other two, at 120 and 240 degrees, each eclipse a methyl against a hydrogen. They are mirror images of one another, so they are degenerate and lower than the methyl-methyl maximum, at about 16 kJ/mol.",
      "note": "The three maxima are not equal in height, unlike ethane's, where all three eclipsed arrangements are identical. Butane's profile is asymmetric because its two rotating carbons carry different substituents, and that asymmetry is what makes the anti conformation distinguishable from gauche at all.",
      "options": {
        "A": "Correct. Three eclipsed arrangements occur per full turn: the methyl-methyl eclipse at 0 degrees and two degenerate methyl-hydrogen eclipses at 120 and 240.",
        "B": "Two would miss one of the eclipsed positions. Three bonds project from each carbon, so eclipsing recurs every 120 degrees.",
        "C": "Four maxima would require eclipsing every 90 degrees, which does not match the three-fold symmetry of an sp3 carbon.",
        "D": "Six counts every stationary point on the curve, maxima and minima together. Only half of them are maxima."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unbranched chain of four carbon atoms."
  },
  {
    "question_id": "ch03_q27_iupac_alphabetical_prefixes",
    "topic": "Naming Alkanes",
    "difficulty_level": "Medium",
    "question_text": "Which of the following alkyl prefixes is alphabetized under the letter 'i' when naming complex alkanes?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Isobutyl",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "sec-Butyl",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "tert-Butyl",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "di-Methyl",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Alphabetising substituents follows a specific convention: some prefixes count as part of the name and some do not. The rule turns on whether the prefix is part of the substituent's identity or merely describes how many or how it attaches.",
      "approach": "Step 1: Identify what is ignored. Multiplying prefixes such as di-, tri- and tetra- are never alphabetised, so dimethyl files under m.\nStep 2: Identify the italicised structural prefixes. sec- and tert- are also ignored, so sec-butyl and tert-butyl both file under b.\nStep 3: Identify what counts. The prefix iso is not italicised and is treated as an inseparable part of the substituent name, so isobutyl files under i.",
      "note": "The distinction is that iso- is regarded as part of the substituent's name while sec- and tert- describe the attachment point rather than the group's identity. It is arbitrary-looking but consistent, and it is the sort of detail that decides which of two otherwise identical names is correct.",
      "options": {
        "A": "Correct. Iso is not italicised and counts as part of the substituent name, so isobutyl is alphabetised under i.",
        "B": "The italicised sec- prefix is ignored for alphabetising, so sec-butyl files under b.",
        "C": "Likewise tert- is ignored, so tert-butyl also files under b rather than t.",
        "D": "Di- is a multiplying prefix and is never alphabetised. Dimethyl files under m, which is why ethyl is cited before dimethyl."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q28_iupac_longest_chain_tiebreaker",
    "topic": "Naming Alkanes",
    "difficulty_level": "Hard",
    "question_text": "If a molecule contains two different carbon chains of equal length that could both be selected as the parent chain, how is the parent chain chosen?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Choose the chain that has the greater number of substituents.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Choose the chain with the fewest substituents to simplify the name.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Choose the chain that is straightest when drawn.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It does not matter; both choices yield the same IUPAC name.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The longest-chain rule can end in a tie, since a branched skeleton often contains several chains of the same maximum length. IUPAC provides a tiebreaker so that one name is always correct rather than several being equally acceptable.",
      "approach": "Step 1: Confirm the tie. Both candidate chains have the same number of carbons, so the parent name will be the same either way.\nStep 2: Count what each choice leaves as substituents. Selecting one chain may leave a single large branch; selecting the other may leave two smaller ones.\nStep 3: The rule takes the chain with the greater number of substituents, because naming several simple branches is more informative than naming one complex one.",
      "note": "This is the rule that makes 3-ethyl-2-methylpentane correct and 3-isopropylpentane incorrect for the same molecule - both pick a valid five-carbon chain, but only one leaves two substituents rather than one. Applied consistently, it guarantees a single correct name for any structure.",
      "options": {
        "A": "Correct. Where chains tie for length, IUPAC selects the one carrying more substituents, so the name describes several simple branches rather than one complex branch.",
        "B": "The rule runs the other way. Fewer substituents means a more complex single branch, which needs its own internal naming and is less clear.",
        "C": "How a structure happens to be drawn on paper has no bearing on the name. The same molecule can be drawn in any orientation.",
        "D": "The two choices give genuinely different names, which is exactly why a tiebreaker is needed. Without one, a structure would have several equally valid names."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q29_properties_combustion",
    "topic": "Properties of Alkanes",
    "difficulty_level": "Easy",
    "question_text": "What are the typical products of the complete combustion of any alkane in excess oxygen?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Carbon dioxide (CO2) and water (H2O)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Carbon monoxide (CO) and hydrogen gas (H2)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Carbon black and water",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methane and ozone",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Complete combustion means every carbon is oxidised as far as it can go and every hydrogen is converted to water. With excess oxygen available, nothing is left partly oxidised.",
      "approach": "Step 1: Track the carbon. Fully oxidised carbon is carbon dioxide; carbon monoxide represents incomplete oxidation and appears only when oxygen is limited.\nStep 2: Track the hydrogen. Combined with oxygen it becomes water.\nStep 3: Since an alkane contains only carbon and hydrogen, those two products account for everything, whatever the alkane's structure.",
      "note": "The qualifier complete matters practically. Burning a hydrocarbon in limited oxygen gives carbon monoxide and soot instead, which is why faulty heaters are dangerous - the products change with the oxygen supply, not with the fuel.",
      "options": {
        "A": "Correct. Carbon is fully oxidised to carbon dioxide and hydrogen to water, which between them account for every atom in the alkane.",
        "B": "Carbon monoxide is a product of incomplete combustion, and hydrogen gas is not produced at all - the hydrogen ends up in water.",
        "C": "Carbon black is unburnt carbon, another sign of incomplete combustion where the oxygen supply is insufficient.",
        "D": "Methane is a fuel rather than a product, and ozone is not formed in ordinary combustion."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q30_properties_alkane_density",
    "topic": "Properties of Alkanes",
    "difficulty_level": "Easy",
    "question_text": "Why do liquid alkanes float on top of water?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Alkanes are nonpolar (insoluble in water) and have densities less than 1.0 g/mL.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Alkanes form hydrogen bonds with water that push them upward.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Liquid alkanes are highly volatile and gaseous bubbles carry them up.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Alkanes have higher molecular weights than water.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Whether one liquid floats on another is decided by density alone. That two liquids do not mix is a separate matter, decided by polarity - both conditions must hold for a visible floating layer.",
      "approach": "Step 1: Consider miscibility first. Alkanes are nonpolar and cannot hydrogen bond, so they do not dissolve in water and form a separate layer.\nStep 2: Consider density. Liquid alkanes run about 0.6 to 0.8 g/mL against water's 1.0.\nStep 3: Being less dense and immiscible, the alkane layer sits on top.",
      "note": "This combination is why oil spills spread across a water surface rather than dispersing or sinking, and it is also why a nonpolar solvent forms the upper layer in a separatory funnel - though not always, since halogenated solvents like dichloromethane are denser than water and sink instead.",
      "options": {
        "A": "Correct. Alkanes are both immiscible with water, being nonpolar, and less dense than it, so they form a separate layer on top.",
        "B": "Alkanes have no O-H or N-H bonds and cannot donate hydrogen bonds. It is precisely their inability to hydrogen bond that keeps them from mixing.",
        "C": "Volatility describes how readily a liquid evaporates, not where it sits relative to another liquid. Floating is a matter of density.",
        "D": "Molecular weight and density are different quantities. Hexane's molecular weight is nearly five times water's, yet it is the less dense liquid, because its molecules pack far less tightly."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q31_conformational_analysis_propyl_barrier",
    "topic": "Conformations of Propane",
    "difficulty_level": "Medium",
    "question_text": "What is the steric strain value assigned to a single eclipsing H-CH3 interaction in propane?",
    "question_smiles": "CCC",
    "options": [
      {
        "option_id": "A",
        "text": "6.0 kJ/mol",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "11.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3.8 kJ/mol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Individual eclipsing interactions are assigned energies that add up to a conformation's total strain. Extracting one of them means taking a known total and subtracting the contributions already accounted for.",
      "approach": "Step 1: Take propane's rotational barrier, about 14 kJ/mol.\nStep 2: Identify what eclipses in that conformation - one methyl against a hydrogen, and two hydrogen pairs.\nStep 3: Subtract the two H-H interactions at 4.0 kJ/mol each, leaving 14 minus 8, which is about 6 kJ/mol for the single methyl-hydrogen eclipse.",
      "note": "Placing this value between the H-H interaction at 4 and the methyl-methyl at 11 makes the pattern clear: the cost rises with the size of both groups involved, and not merely with one. A methyl against a hydrogen is only moderately worse than two hydrogens; a methyl against a methyl is far worse.",
      "options": {
        "A": "Correct. Subtracting two H-H eclipses at 4.0 kJ/mol from propane's 14 kJ/mol barrier leaves about 6 for the methyl-hydrogen interaction.",
        "B": "4.0 kJ/mol is the value for an eclipsing hydrogen pair. Replacing one hydrogen with a methyl group raises the cost above that.",
        "C": "11.0 kJ/mol is the methyl-methyl eclipsing interaction found in butane. Propane has only one methyl on the rotating carbons and cannot generate it.",
        "D": "3.8 kJ/mol is the gauche interaction between two staggered methyl groups in butane, which is a steric effect in a staggered conformation rather than an eclipsing one."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unbranched chain of three carbon atoms."
  },
  {
    "question_id": "ch03_q32_butane_partially_eclipsed_value",
    "topic": "Conformations of Butane",
    "difficulty_level": "Hard",
    "question_text": "What is the total energy of the partially eclipsed conformation of butane (where methyl groups eclipse hydrogens)?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "16.0 kJ/mol",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "19.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "12.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "14.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Compute the energy of partially eclipsed butane conformations.",
      "process": "Step 1: Identify the interactions in the partially eclipsed ($120^circ$) butane conformation: one H-H eclipsing interaction and two $H-CH_3$ eclipsing interactions.\nStep 2: Apply the values: H-H eclipsing = 4.0 kJ/mol. $H-CH_3$ eclipsing = 6.0 kJ/mol each.\nStep 3: Sum: 4.0 + 6.0 + 6.0 = 16.0 kJ/mol.",
      "result": "The energy of the partially eclipsed conformation is 16.0 kJ/mol."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q33_iupac_prefix_numbering_tie",
    "topic": "Naming Alkanes",
    "difficulty_level": "Hard",
    "question_text": "What is the correct IUPAC name of the compound CH3-CH(CH3)-CH(CH2CH3)-CH2-CH3?",
    "question_smiles": "CCC(CC)C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "3-Ethyl-2-methylpentane (alphabetical ordering of substituents)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Methyl-3-ethylpentane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-Isopropylpentane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-Ethyl-4-methylpentane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Name a branched heptane or pentane derivative, testing alphabetization in the final name construction.",
      "process": "Step 1: Longest chain is 5 carbons (pentane).\nStep 2: Numbering starts from the left to give substituents at C2 (methyl) and C3 (ethyl). (Numbering from right gives branches at C3 and C4).\nStep 3: List substituents alphabetically: ethyl comes before methyl.\nStep 4: Combine: 3-ethyl-2-methylpentane.",
      "result": "The correct name is 3-ethyl-2-methylpentane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q34_iupac_complex_alkane",
    "topic": "Naming Alkanes",
    "difficulty_level": "Hard",
    "question_text": "What is the correct IUPAC name for (CH3)3C-CH2-CH(CH2CH3)2?",
    "question_smiles": "CCC(CC)CC(C)(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "4-Ethyl-2,2-dimethylhexane (lowest set of locants 2,2,4)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Ethyl-5,5-dimethylhexane (incorrect numbering 3,5,5)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,2-Dimethyl-4-ethylhexane (non-alphabetical substituent order)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5-Ethyl-2,2-dimethylhexane (wrong chain length)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Name a branched alkane resolving numbering direction and alphabetical sorting.",
      "process": "Step 1: Longest continuous chain has 6 carbons (hexane): $(CH_3)_3C-CH_2-CH(CH_2CH_3)_2 \\rightarrow (CH_3)_2C(C_1,C_2)-CH_2(C_3)-CH(C_4)(CH_2CH_3)-CH_2(C_5)-CH_3(C_6)$.\nStep 2: Compare numbering directions. Left-to-right gives locants at 2, 2, and 4. Right-to-left gives locants at 3, 5, and 5. The lowest set at the first point of difference is 2,2,4.\nStep 3: List substituents: 4-ethyl and 2,2-dimethyl. Alphabetize: 'ethyl' comes before 'dimethyl'. This gives 4-ethyl-2,2-dimethylhexane.",
      "result": "The correct IUPAC name is 4-ethyl-2,2-dimethylhexane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q35_iupac_longest_chain_double_tie",
    "topic": "Naming Alkanes",
    "difficulty_level": "Hard",
    "question_text": "What is the correct IUPAC name of the compound (CH3)2CH-CH(CH3)-CH2-CH(CH2CH3)2?",
    "question_smiles": "CCC(CC)CC(C)C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "5-Ethyl-2,3-dimethylheptane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Ethyl-5,6-dimethylheptane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-Ethyl-2,3-dimethylheptane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,3-Dimethyl-5-ethylheptane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Name a multi-branched alkane by resolving parent chain, numbering, and alphabetization.",
      "process": "Step 1: Longest carbon chain is 7 carbons (heptane): start at the isopropyl methyl, go through C2, C3, C4, C5, and down one of the ethyl groups.\nStep 2: Numbering from the left gives substituents at 2, 3, and 5. Numbering from the right gives 3, 5, and 6. The lower set of locants is 2,3,5.\nStep 3: Identify the substituents: 2-methyl, 3-methyl, and 5-ethyl. Alphabetize: ethyl comes before dimethyl.\nStep 4: Combine: 5-ethyl-2,3-dimethylheptane.",
      "result": "The name is 5-ethyl-2,3-dimethylheptane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q36_newman_projection_anti",
    "topic": "Conformational Analysis & Newman Projections",
    "difficulty_level": "Easy",
    "question_text": "Which conformation corresponds to the lowest potential energy state in the conformational analysis of butane?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Anti conformation (dihedral angle = 180 degrees)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Gauche conformation (dihedral angle = 60 degrees)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Partially eclipsed conformation (dihedral angle = 120 degrees)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Fully eclipsed conformation (dihedral angle = 0 degrees)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify the globally most stable conformer of butane.",
      "process": "Step 1: In the anti conformation, the two bulky methyl groups are oriented $180^circ$ apart, minimizing steric strain.\nStep 2: All bonds are staggered, minimizing torsional strain.\nStep 3: This makes it the global energy minimum.",
      "result": "The anti conformation is the lowest energy state."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q37_newman_projection_fully_eclipsed",
    "topic": "Conformational Analysis & Newman Projections",
    "difficulty_level": "Easy",
    "question_text": "Which conformation corresponds to the highest potential energy state in the conformational analysis of butane?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Fully eclipsed conformation (dihedral angle = 0 degrees)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Partially eclipsed conformation (dihedral angle = 120 degrees)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Gauche conformation (dihedral angle = 60 degrees)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Anti conformation (dihedral angle = 180 degrees)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify the globally least stable conformer of butane.",
      "process": "Step 1: The fully eclipsed conformation has a dihedral angle of $0^circ$.\nStep 2: This forces the two bulky methyl groups to directly eclipse each other, maximizing both steric and torsional strain.\nStep 3: This is the global energy maximum on the butane rotational profile.",
      "result": "The fully eclipsed conformation has the highest potential energy."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q38_strain_types",
    "topic": "Conformational Analysis & Newman Projections",
    "difficulty_level": "Medium",
    "question_text": "What type of strain results when non-bonded atoms are forced closer together than their van der Waals radii allow?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Steric strain (or van der Waals strain)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Torsional strain",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Angle strain",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Aromatic strain",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Distinguish between steric, torsional, and angle strain.",
      "process": "Step 1: Steric strain occurs due to spatial crowding of electron clouds of non-bonded atoms.\nStep 2: Torsional strain occurs when bonds are eclipsed.\nStep 3: Angle strain occurs when bond angles deviate from their ideal hybrid geometries (e.g. $109.5^circ$ for $sp^3$).",
      "result": "The correct choice is steric strain."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q39_properties_octane_rating",
    "topic": "Properties of Alkanes",
    "difficulty_level": "Medium",
    "question_text": "What structural feature of alkanes corresponds to a higher octane rating in gasoline?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Highly branched alkanes (which burn more smoothly and prevent engine knocking)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Long straight-chain alkanes",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Alkanes containing double bonds",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Alkanes with high molecular weights",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Relate fuel efficiency and octane rating to alkane structure.",
      "process": "Step 1: Octane rating measures a fuel's resistance to premature ignition (knocking).\nStep 2: Straight-chain heptane is highly prone to knocking (octane rating = 0). Isomeric isooctane ($2,2,4-trimethylpentane$) burns smoothly (octane rating = 100).\nStep 3: Highly branched alkanes are more stable and combust in a controlled, smooth manner, leading to higher octane ratings.",
      "result": "Branching increases the octane rating."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q40_dihedral_angle_def",
    "topic": "Conformational Analysis & Newman Projections",
    "difficulty_level": "Easy",
    "question_text": "What is a dihedral angle (or torsion angle)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The angle between a bond on the front carbon and a bond on the back carbon in a Newman projection.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The angle between two bonds on the same carbon atom.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The angle of rotation in a double bond.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The deviation of a carbon bond from 109.5 degrees.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Define dihedral angle in stereochemistry.",
      "process": "Step 1: Look down a single C-C bond in a Newman projection.\nStep 2: The dihedral angle is the angle formed by a substituent on the front carbon, the C-C axis, and a substituent on the back carbon.\nStep 3: It ranges from $0^circ$ to $360^circ$.",
      "result": "It is the angle between bonds on adjacent carbons in a Newman projection."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q41_isobutyl_secondary_carbon",
    "topic": "Alkyl Groups",
    "difficulty_level": "Medium",
    "question_text": "Which carbon in the isobutyl group is secondary (2\\(\\circ\\))?",
    "question_smiles": "CC(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "The CH2 carbon directly attached to the main parent chain",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The CH carbon in the middle of the group",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The methyl carbons at the end",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "There are no secondary carbons in the group",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify degrees of carbon substitution in the isobutyl group.",
      "process": "Step 1: The isobutyl group is $-CH_2-CH(CH_3)_2$.\nStep 2: The terminal methyl carbons are bonded to 1 carbon (primary). The central $-CH-$ carbon is bonded to 3 carbons (tertiary).\nStep 3: The $-CH_2-$ carbon is bonded to the parent chain carbon and the central $-CH-$ carbon, making it bonded to 2 carbons (secondary).",
      "result": "The direct attachment $-CH_2-$ carbon is secondary."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q42_secbutyl_chiral_center",
    "topic": "Alkyl Groups",
    "difficulty_level": "Medium",
    "question_text": "Why does the sec-butyl group introduce a chiral center to a molecule when attached to a symmetric chain, whereas the isobutyl group does not?",
    "question_smiles": "CC(C)CC.CC(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "The C1 carbon of sec-butyl is bonded to four different groups (H, methyl, ethyl, and the parent chain).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Isobutyl is much larger, preventing chirality.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "sec-Butyl is symmetric.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The sec-butyl group undergoes conformational locking.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyze stereocenter generation in alkyl groups.",
      "process": "Step 1: A chiral center is a carbon bonded to 4 different groups.\nStep 2: The sec-butyl attachment carbon (C1 of the group: $-^*CH(CH_3)CH_2CH_3$) is bonded to: 1) hydrogen, 2) methyl, 3) ethyl, and 4) the parent chain. Since all 4 are different, it is a chiral center.\nStep 3: The isobutyl group attachment carbon ($-CH_2-CH(CH_3)_2$) is bonded to two identical hydrogens, making it achiral.",
      "result": "The attachment carbon of sec-butyl is bonded to 4 different groups, making it chiral."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q43_properties_solubility",
    "topic": "Properties of Alkanes",
    "difficulty_level": "Easy",
    "question_text": "Which of the following solvents is an alkane insoluble in?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Water (H2O)",
        "smiles": "O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Hexane",
        "smiles": "CCCCCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Diethyl ether",
        "smiles": "CCOCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzene",
        "smiles": "c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand the solubility rule 'like dissolves like'.",
      "process": "Step 1: Alkanes are non-polar molecules.\nStep 2: Non-polar solutes dissolve in non-polar solvents (like hexane, ether, benzene).\nStep 3: Water is highly polar and forms strong hydrogen bond networks, which exclude non-polar alkanes.",
      "result": "Alkanes are insoluble in water."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q44_newman_drawing_direction",
    "topic": "Conformational Analysis & Newman Projections",
    "difficulty_level": "Easy",
    "question_text": "When looking at a Newman projection, how are the front and back carbons represented?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The front carbon is a point where three bonds meet, and the back carbon is a large circle.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The front carbon is a large circle, and the back carbon is a point.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both are represented by overlapping circles.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both are represented by points.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify the visual convention of Newman projections.",
      "process": "Step 1: A Newman projection views a molecule directly down a specific carbon-carbon bond axis.\nStep 2: The front carbon is closest to the viewer and is drawn as the intersection of three lines (a Y-shape).\nStep 3: The back carbon is obscured and is drawn as a large circle, with its bonds starting at the circumference of the circle.",
      "result": "Front carbon is a point; back carbon is a circle."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q45_gauche_butane_dihedral",
    "topic": "Conformational Analysis & Newman Projections",
    "difficulty_level": "Medium",
    "question_text": "What is the dihedral angle between the two methyl groups in the gauche conformation of butane?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "60 degrees (or 300 degrees)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "180 degrees",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "120 degrees",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "0 degrees",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Relate conformer names to dihedral angles in butane.",
      "process": "Step 1: Staggered conformations occur at dihedral angles of $60^circ$, $180^circ$, and $300^circ$.\nStep 2: The angle $180^circ$ is anti.\nStep 3: The angles $60^circ$ and $300^circ$ represent gauche conformations.",
      "result": "The dihedral angle is 60 or 300 degrees."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q46_barrier_rotation_butane_partially",
    "topic": "Conformations of Butane",
    "difficulty_level": "Hard",
    "question_text": "What is the energy barrier to rotation when transitioning from the most stable anti conformation of butane to a gauche conformation?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "16.0 kJ/mol (must pass through the partially eclipsed transition state)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "19.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "12.0 kJ/mol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3.8 kJ/mol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand energy barriers between conformational minima in butane.",
      "process": "Step 1: Anti is at $180^circ$, and gauche is at $60^circ$ (or $300^circ$).\nStep 2: To rotate from $180^circ$ to $60^circ$, the molecule must pass through the eclipsed state at $120^circ$ (partially eclipsed, methyl eclipsing hydrogen).\nStep 3: The potential energy of this transition state is 16.0 kJ/mol above the anti state, representing the energy barrier for the transition.",
      "result": "The energy barrier is 16.0 kJ/mol."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q47_alkane_properties_source",
    "topic": "Properties of Alkanes",
    "difficulty_level": "Easy",
    "question_text": "What is the principal natural source of alkanes on Earth?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Petroleum and natural gas",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Coal deposits",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Volcanic emissions",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Photosynthesis products of green plants",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Review industrial sources of hydrocarbons.",
      "process": "Step 1: Natural gas consists mostly of methane with small amounts of ethane, propane, and butane.\nStep 2: Petroleum (crude oil) is a complex mixture of liquid alkanes and other hydrocarbons.\nStep 3: Fractional distillation of petroleum yields gasoline, kerosene, diesel, and other alkane products.",
      "result": "Petroleum and natural gas are the primary sources."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q48_iupac_common_names_alkyl",
    "topic": "Alkyl Groups",
    "difficulty_level": "Medium",
    "question_text": "What is the IUPAC systematic name for the 'neopentyl' group?",
    "question_smiles": "CC(C)(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "2,2-Dimethylpropyl",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,1-Dimethylpropyl",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,2-Dimethylbutyl",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "tert-Butylmethyl",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Name complex alkyl groups systematically under IUPAC.",
      "process": "Step 1: The neopentyl group has the structure $-CH_2-C(CH_3)_3$.\nStep 2: Find the longest chain starting from the attachment carbon (C1): C1 is a $-CH_2-$, C2 is $-C(CH_3)_2-$, and C3 is one of the methyls. This makes it a propyl parent group.\nStep 3: Identify branches on the propyl group: two methyls at C2.\nStep 4: Combine: 2,2-dimethylpropyl.",
      "result": "The systematic name is 2,2-dimethylpropyl."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q49_conformation_barrier_rotation_cause",
    "topic": "Conformational Analysis & Newman Projections",
    "difficulty_level": "Easy",
    "question_text": "The preference for staggered conformations over eclipsed conformations is known as:",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Conformational stability",
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
        "text": "Ring strain",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Stereoisomerism",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand basic conformational preferences.",
      "process": "Step 1: Staggered conformations represent energy minima (stable states).\nStep 2: Eclipsed conformations represent energy maxima (unstable states).\nStep 3: The drive to avoid eclipsing interactions and reside in staggered conformations is the basis of conformational stability.",
      "result": "The preference is called conformational stability."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q50_newman_projection_symmetry_butane",
    "topic": "Conformational Analysis & Newman Projections",
    "difficulty_level": "Hard",
    "question_text": "Which conformation of butane contains a center of inversion (symmetry)?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Anti conformation (dihedral angle = 180 degrees)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Gauche conformation (dihedral angle = 60 degrees)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Fully eclipsed conformation (dihedral angle = 0 degrees)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Partially eclipsed conformation (dihedral angle = 120 degrees)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Examine point-group symmetry in conformations of butane.",
      "process": "Step 1: A center of inversion ($i$) exists if drawing a line from any atom through the center of the molecule to an equal distance on the other side finds an identical atom.\nStep 2: Look at the anti conformation. The two methyls are $180^circ$ apart, C1 balances C4, and all hydrogens on the front carbon are exactly opposite hydrogens on the back carbon.\nStep 3: Gauche, fully eclipsed, and partially eclipsed conformations lack this center of inversion.",
      "result": "The anti conformation has a center of inversion."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q_dynamic_conformational_energy",
    "topic": "Alkanes Conformational Analysis",
    "difficulty_level": "Hard",
    "question_text": "Examine the potential energy curve for rotations around the C2-C3 bond of butane. Identify the correct conformational states for the energy levels.",
    "energy_diagram": {
      "points": [
        {
          "state": "Anti (180°)",
          "energy": 0
        },
        {
          "state": "Eclipsed (120°)",
          "energy": 14
        },
        {
          "state": "Gauche (60°)",
          "energy": 38
        },
        {
          "state": "Fully Eclipsed (0°)",
          "energy": 190
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Anti conformation has the lowest potential energy (0 kJ/mol), while Fully Eclipsed has the highest energy (19 kJ/mol relative to anti).",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Gauche conformation has the highest potential energy.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Anti and Fully Eclipsed conformations have equal energy.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Eclipsed conformations are more stable than Gauche.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing butane conformational energy profiles.",
      "process": "Anti conformation has methyl groups furthest apart (180°), minimizing steric strain (0 kJ/mol). Gauche has methyls at 60° (3.8 kJ/mol). Fully eclipsed has methyls eclipsing each other (19 kJ/mol), maximizing steric and torsional strain.",
      "result": "The order of stability is: Anti > Gauche > Eclipsed > Fully Eclipsed."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q_dynamic_alkane_iupac",
    "topic": "Alkane Nomenclature & Structure",
    "difficulty_level": "Medium",
    "question_text": "Match each branched alkane structure to its correct IUPAC name.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(C)C",
        "correctAnswer": "2-Methylpropane"
      },
      {
        "smiles": "CC(C)(C)C",
        "correctAnswer": "2,2-Dimethylpropane"
      },
      {
        "smiles": "CCC(C)CC",
        "correctAnswer": "3-Methylpentane"
      },
      {
        "smiles": "CC(C)CC(C)C",
        "correctAnswer": "2,4-Dimethylpentane"
      }
    ],
    "match_options": [
      "2-Methylpropane",
      "2,2-Dimethylpropane",
      "3-Methylpentane",
      "2,4-Dimethylpentane",
      "2-Methylbutane",
      "Neopentane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect IUPAC names",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Naming a branched alkane is three decisions in order: find the longest continuous chain, number it from the end giving the lower locants, then cite the substituents alphabetically with their positions. Each of these four structures exercises a different part of that sequence.",
      "approach": "Step 1: The four-carbon structure has a three-carbon longest chain with one methyl on the middle carbon, giving 2-methylpropane. The five-carbon one has a three-carbon chain carrying two methyls on the same central carbon, so 2,2-dimethylpropane.\nStep 2: The six-carbon structure has a five-carbon chain with a methyl at the centre. Numbering from either end gives the same locant, so it is 3-methylpentane.\nStep 3: The seven-carbon structure has a five-carbon chain with methyls on the second and fourth carbons. Numbering from the nearer end gives 2,4 rather than 2,4 reversed, so it is 2,4-dimethylpentane.",
      "note": "Notice that none of these needs an alphabetical decision, because every substituent is a methyl. The locant rule does all the work here; it is only when substituents differ that citation order becomes a separate question.",
      "options": {
        "A": "Correct. 2-Methylpropane, 2,2-dimethylpropane, 3-methylpentane and 2,4-dimethylpentane - each read off by taking the longest chain first and then the lowest locants.",
        "B": "Work through each in the same order every time: longest chain, then numbering direction, then substituent names. The commonest slip is taking a chain that runs straight across the page rather than the genuinely longest one, which may turn a corner."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q_dynamic_ring_strain",
    "topic": "Cycloalkanes Conformational Analysis",
    "difficulty_level": "Hard",
    "question_text": "Match each cycloalkane to its relative ring strain level (total ring strain in kJ/mol).",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CC1",
        "correctAnswer": "High strain (115 kJ/mol)"
      },
      {
        "smiles": "C1CCC1",
        "correctAnswer": "Medium-High strain (110 kJ/mol)"
      },
      {
        "smiles": "C1CCCC1",
        "correctAnswer": "Low-Medium strain (26 kJ/mol)"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Zero strain (0 kJ/mol)"
      }
    ],
    "match_options": [
      "High strain (115 kJ/mol)",
      "Medium-High strain (110 kJ/mol)",
      "Low-Medium strain (26 kJ/mol)",
      "Zero strain (0 kJ/mol)"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect strain levels",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Ring strain has two main sources: angle strain, from bond angles forced away from the ideal tetrahedral 109.5 degrees, and torsional strain, from eclipsed C-H bonds that the ring cannot relieve by rotating. Small rings suffer both at once.",
      "approach": "Step 1: Cyclopropane is flat by geometric necessity, with 60 degree internal angles - the largest angular distortion possible - and every C-H pair eclipsed. Its total strain is about 115 kJ/mol.\nStep 2: Cyclobutane's 90 degree angles are less distorted, but it has four carbons' worth of near-eclipsing, so its strain stays high at about 110 kJ/mol despite a slight pucker.\nStep 3: Cyclopentane puckers into an envelope and its angles are close to ideal, leaving about 26 kJ/mol. Cyclohexane adopts the chair, which achieves 109.5 degree angles with every bond staggered, and is strain-free at 0.",
      "note": "The pattern is not simply smaller ring, more strain: cyclobutane has less angle strain than cyclopropane yet nearly the same total, because its extra carbon adds torsional strain that cancels the gain. This is why cyclohexane chemistry dominates Chapter 4 - the chair is the one common ring with no strain to pay.",
      "options": {
        "A": "Correct. Strain falls from cyclopropane at about 115 kJ/mol, through cyclobutane at 110 and cyclopentane at 26, to zero for cyclohexane's chair.",
        "B": "Rank by how far the ring forces its bond angles from 109.5 degrees, then ask whether puckering can relieve the eclipsing. Three- and four-membered rings cannot escape either problem; five- and six-membered rings largely can."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q2",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC(=O)O",
        "correctAnswer": "Propanoic acid"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      },
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      }
    ],
    "match_options": [
      "Ethylbenzene",
      "Diethyl ether",
      "1-Butanol",
      "Propene",
      "Butanone",
      "Propanoic acid",
      "Ethyl benzoate",
      "3-Pentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The suffix of a name records the highest-priority functional group present, and its locant records where that group sits. Carboxylic acids outrank ketones, which outrank alkenes, and each takes a different ending.",
      "approach": "Step 1: Find the carboxylic acid. A three-carbon chain ending in COOH takes the -oic acid suffix, giving propanoic acid; the carboxyl carbon is always C1, so no locant is needed.\nStep 2: Take the two ketones. A four-carbon chain with the carbonyl at C2 is butanone - unambiguous, so the locant is optional. A five-carbon chain with the carbonyl at the centre is 3-pentanone.\nStep 3: The remaining structure is a three-carbon chain with a double bond, an alkene, named propene.",
      "note": "Butanone needs no locant because there is only one position a ketone carbonyl can occupy in a four-carbon chain - the ends would make it an aldehyde. 3-Pentanone does need one, since a five-carbon chain offers a genuine choice between C2 and C3.",
      "options": {
        "A": "Correct. Propanoic acid by the -oic acid suffix, butanone and 3-pentanone by -one with locants where needed, and propene by -ene.",
        "B": "Identify the highest-priority group first, since it fixes the suffix, then work out whether its position needs a number at all. Not every carbonyl requires a locant."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q3",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      }
    ],
    "match_options": [
      "Acetonitrile",
      "Cyclopentene",
      "Aniline",
      "Chloroform",
      "Cyclopentanone",
      "1-Bromopropane",
      "1-Butanol",
      "Cyclohexane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two of these are open chains and two are rings, and the ring compounds take the cyclo- prefix in front of the chain name they would otherwise have. Whether a ring contains a double bond then decides between -ane and -ene.",
      "approach": "Step 1: Take the chains. A two-carbon chain ending in a nitrile group is acetonitrile, a retained name. A three-carbon chain with bromine at the end is 1-bromopropane, the locant being needed to distinguish it from the 2-isomer.\nStep 2: Take the saturated ring. Six carbons in a ring with no multiple bond gives cyclohexane.\nStep 3: The remaining ring has five carbons and one double bond, so it is cyclopentene. In a ring with a single double bond the locant is unnecessary, since the double bond is understood to start at C1.",
      "note": "1-Bromopropane needs its locant precisely because 2-bromopropane also exists, and the two behave differently in substitution and elimination reactions. Where an isomer exists, the number is not decoration - dropping it makes the name ambiguous.",
      "options": {
        "A": "Correct. Acetonitrile and 1-bromopropane as chains, cyclohexane and cyclopentene as rings distinguished by the presence of a double bond.",
        "B": "Separate rings from chains first, then ask whether a locant is genuinely required - it is when an isomer exists, and it is not when only one arrangement is possible."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q4",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      },
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "CO",
        "correctAnswer": "Methanol"
      }
    ],
    "match_options": [
      "Methanol",
      "3-Pentanone",
      "Dimethyl sulfoxide",
      "Acetic acid",
      "Cyclopentene",
      "Cyclohexane",
      "Propan-2-ol",
      "Toluene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CC=CC1 corresponds to Cyclopentene.\nStructure 2: CC(O)C corresponds to Propan-2-ol.\nStructure 3: CCC(=O)CC corresponds to 3-Pentanone.\nStructure 4: CO corresponds to Methanol.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q3_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      },
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      }
    ],
    "match_options": [
      "Phenol",
      "Dimethyl ether",
      "Butanone",
      "Benzaldehyde",
      "Acetone",
      "Chlorobenzene",
      "Ethanol",
      "1-Butanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Naming oxygen-containing compounds starts with what the oxygen is attached to, and whether the carbon skeleton is a chain or a benzene ring. Those two questions separate all four structures here.",
      "approach": "Step 1: Take the two chain alcohols. Both carry an OH on the end of a saturated chain, so both take the -ol suffix; the chain length distinguishes them, giving ethanol for two carbons and 1-butanol for four.\nStep 2: Take the two aromatic compounds. Both are benzene rings with a single substituent.\nStep 3: A benzene ring bearing chlorine is chlorobenzene, named as a substituted benzene. A benzene ring bearing OH is not called hydroxybenzene - it takes the retained name phenol, which IUPAC keeps.",
      "note": "Phenol is the case worth remembering here. An OH on a saturated carbon makes an alcohol named with -ol, but an OH directly on an aromatic ring makes a phenol, and the two behave very differently - phenol is roughly a million times the stronger acid, for the resonance reason seen in Chapter 2.",
      "options": {
        "A": "Correct. Two chain alcohols distinguished by length, and two monosubstituted benzenes, one named as a substituted benzene and one by its retained name.",
        "B": "Sort first by skeleton - chain or ring - then by what the oxygen or halogen is attached to. An OH on a ring and an OH on a chain do not take the same kind of name."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q4_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      }
    ],
    "match_options": [
      "Butanone",
      "Acetic acid",
      "Cyclohexane",
      "Phenol",
      "Ethanol",
      "Toluene",
      "Ethylbenzene",
      "Ethyl acetate"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Ethylbenzene.\nGrid card 2: Butanone.\nGrid card 3: Cyclohexane.\nGrid card 4: Phenol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q1",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "2-Methylpropene"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      }
    ],
    "match_options": [
      "2-Methylpropene",
      "1-Bromopropane",
      "Cyclohexanone",
      "1-Propanol",
      "3-Pentanone",
      "Chlorobenzene",
      "Benzoyl chloride",
      "2-Pentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCCC(C)=O corresponds to 2-Pentanone.\nStructure 2: CC(C)=C corresponds to Isobutylene.\nStructure 3: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.\nStructure 4: Clc1ccccc1 corresponds to Chlorobenzene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q5",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butanal"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "CCOC(=O)c1ccccc1",
        "correctAnswer": "Ethyl benzoate"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      }
    ],
    "match_options": [
      "Phenol",
      "2-Bromopropane",
      "Cyclopentanone",
      "Ethylbenzene",
      "Butanal",
      "3-Pentanone",
      "Ethyl benzoate",
      "Formic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Aldehydes, esters, ketones and substituted benzenes each carry their own suffix or naming pattern. Sorting the four structures by functional group makes the naming almost mechanical.",
      "approach": "Step 1: The four-carbon chain ending in CHO is an aldehyde, taking the -al suffix: butanal. The carbonyl carbon is necessarily C1, so no locant appears.\nStep 2: The benzene ring bearing an ethyl group is ethylbenzene, named as a substituted benzene.\nStep 3: The remaining two carry carbonyls. The ester of benzoic acid with ethanol is ethyl benzoate, alkyl group first. The five-membered ring with a carbonyl in it is cyclopentanone.",
      "note": "This item previously keyed the aldehyde as butyraldehyde, a trivial name IUPAC does not retain, under a stem asking for the IUPAC name; it has been corrected to butanal. Compare benzaldehyde, which IUPAC does retain - the two look like similar cases but are treated differently.",
      "options": {
        "A": "Correct. Butanal by the -al suffix, ethylbenzene as a substituted ring, ethyl benzoate as an ester, and cyclopentanone as a cyclic ketone.",
        "B": "Work group by group. An aldehyde takes -al with no locant, an ester is named alkyl then acid-derived group, and a carbonyl inside a ring takes cyclo- with -one."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q6",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "2-Methylpropan-2-ol"
      },
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "2-Methylpropene"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      }
    ],
    "match_options": [
      "Benzene",
      "2-Pentanone",
      "1-Propanol",
      "2-Methylpropan-2-ol",
      "2-Methylpropene",
      "Bromobenzene",
      "Dichloromethane",
      "1-Butanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC(C)(C)O corresponds to t-Butyl alcohol.\nStructure 2: ClCCl corresponds to Dichloromethane.\nStructure 3: CC(C)=C corresponds to Isobutylene.\nStructure 4: CCCCO corresponds to 1-Butanol.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q7",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CO",
        "correctAnswer": "Methanol"
      },
      {
        "smiles": "OCc1ccccc1",
        "correctAnswer": "Benzyl alcohol"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "2-Methylpropene"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      }
    ],
    "match_options": [
      "Propanal",
      "2-Pentanone",
      "Methanol",
      "2-Methylpropene",
      "Benzaldehyde",
      "Dimethyl sulfoxide",
      "Benzyl alcohol",
      "Acetone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CO corresponds to Methanol.\nStructure 2: OCc1ccccc1 corresponds to Benzyl alcohol.\nStructure 3: CC(C)=C corresponds to Isobutylene.\nStructure 4: O=Cc1ccccc1 corresponds to Benzaldehyde.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q8",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      },
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      }
    ],
    "match_options": [
      "Tetrahydrofuran",
      "Formic acid",
      "Benzene",
      "Diethyl ether",
      "Ethyl benzoate",
      "Chlorobenzene",
      "3-Pentanone",
      "Acetophenone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCC(=O)CC corresponds to 3-Pentanone.\nStructure 2: C1CCOC1 corresponds to Tetrahydrofuran.\nStructure 3: c1ccccc1 corresponds to Benzene.\nStructure 4: CC(=O)c1ccccc1 corresponds to Acetophenone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q9",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      }
    ],
    "match_options": [
      "Benzaldehyde",
      "Acetic acid",
      "1-Bromopropane",
      "Butanal",
      "Acetophenone",
      "Cyclopentene",
      "Ethylbenzene",
      "Benzyl alcohol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCc1ccccc1 corresponds to Ethylbenzene.\nStructure 2: O=Cc1ccccc1 corresponds to Benzaldehyde.\nStructure 3: CCCBr corresponds to 1-Bromopropane.\nStructure 4: CC(=O)O corresponds to Acetic acid.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q10",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "2-Methylpropene"
      },
      {
        "smiles": "CCCO",
        "correctAnswer": "1-Propanol"
      }
    ],
    "match_options": [
      "Propan-2-ol",
      "1-Propanol",
      "Ethyl acetate",
      "Tetrahydrofuran",
      "2-Methylpropene",
      "Acetic acid",
      "Benzoyl chloride",
      "Cyclohexanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This set contains two alcohols with the same molecular formula, distinguished only by which carbon carries the OH. That single locant is the whole difference between two genuinely different compounds.",
      "approach": "Step 1: Take the two three-carbon alcohols. With the OH on an end carbon the name is 1-propanol; with the OH on the middle carbon it is propan-2-ol. Both are C3H8O.\nStep 2: The four-carbon alkene with a methyl branch is 2-methylpropene - a three-carbon propene chain carrying a methyl on C2.\nStep 3: The remaining structure is the ester formed from acetic acid and ethanol, named ethyl acetate.",
      "note": "1-Propanol and propan-2-ol are constitutional isomers, and the difference is not cosmetic: the first is a primary alcohol that oxidises to an aldehyde and then an acid, while the second is secondary and oxidises to a ketone and stops there. Chapter 17 turns on exactly this distinction.",
      "options": {
        "A": "Correct. The two propanols separated by their OH locant, together with 2-methylpropene and ethyl acetate.",
        "B": "For the two alcohols, count which carbon carries the OH - an end carbon gives 1-propanol, the middle carbon gives propan-2-ol. They share a formula but are different compounds."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q11",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propanal"
      },
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      }
    ],
    "match_options": [
      "3-Pentanone",
      "Aniline",
      "Acetophenone",
      "Propanal",
      "Benzaldehyde",
      "2-Pentanone",
      "Propyne",
      "Butanal"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCC(=O)CC corresponds to 3-Pentanone.\nStructure 2: CC(=O)c1ccccc1 corresponds to Acetophenone.\nStructure 3: CCC=O corresponds to Propionaldehyde.\nStructure 4: CCCC(C)=O corresponds to 2-Pentanone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q12",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "2-Methylpropan-2-ol"
      },
      {
        "smiles": "CCCO",
        "correctAnswer": "1-Propanol"
      },
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      }
    ],
    "match_options": [
      "1-Propanol",
      "2-Methylpropan-2-ol",
      "Ethyl acetate",
      "Propyne",
      "Methyl acetate",
      "Cyclopentanone",
      "Ethylbenzene",
      "Acetophenone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC(C)(C)O corresponds to t-Butyl alcohol.\nStructure 2: CCCO corresponds to 1-Propanol.\nStructure 3: CC(=O)c1ccccc1 corresponds to Acetophenone.\nStructure 4: COC(C)=O corresponds to Methyl acetate.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q13",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      },
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "2-Methylpropene"
      }
    ],
    "match_options": [
      "Aniline",
      "3-Pentanone",
      "Chlorobenzene",
      "Benzoyl chloride",
      "2-Methylpropene",
      "Propanoic acid",
      "Benzene",
      "Formic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.\nStructure 2: C(=O)O corresponds to Formic acid.\nStructure 3: c1ccccc1 corresponds to Benzene.\nStructure 4: CC(C)=C corresponds to Isobutylene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q14",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propanal"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "CC=O",
        "correctAnswer": "Acetaldehyde"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      }
    ],
    "match_options": [
      "Propanal",
      "Cyclopentanone",
      "Acetaldehyde",
      "2-Methylpropene",
      "Cyclopentene",
      "Propan-2-ol",
      "Chloroform",
      "Tetrahydrofuran"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCC=O corresponds to Propionaldehyde.\nStructure 2: C1CCOC1 corresponds to Tetrahydrofuran.\nStructure 3: CC=O corresponds to Acetaldehyde.\nStructure 4: O=C1CCCC1 corresponds to Cyclopentanone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q15",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      }
    ],
    "match_options": [
      "Cyclopentene",
      "Phenol",
      "Cyclohexane",
      "Tetrahydrofuran",
      "Propan-2-ol",
      "1-Butanol",
      "Propene",
      "Benzoyl chloride"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CCOC1 corresponds to Tetrahydrofuran.\nStructure 2: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.\nStructure 3: CC=C corresponds to Propene.\nStructure 4: C1CC=CC1 corresponds to Cyclopentene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q16",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "CO",
        "correctAnswer": "Methanol"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      }
    ],
    "match_options": [
      "Cyclohexene",
      "Propanoic acid",
      "Acetaldehyde",
      "Methanol",
      "Acetic acid",
      "Dimethyl ether",
      "3-Pentanone",
      "1-Bromopropane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCC(=O)CC corresponds to 3-Pentanone.\nStructure 2: C1CCC=CC1 corresponds to Cyclohexene.\nStructure 3: CO corresponds to Methanol.\nStructure 4: CCCBr corresponds to 1-Bromopropane.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q17",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "CC#C",
        "correctAnswer": "Propyne"
      },
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      }
    ],
    "match_options": [
      "Chloroform",
      "Cyclopentene",
      "Cyclohexanone",
      "Dichloromethane",
      "Diethyl ether",
      "Ethylbenzene",
      "Methanol",
      "Propyne"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CC=CC1 corresponds to Cyclopentene.\nStructure 2: CC#C corresponds to Propyne.\nStructure 3: C1CCCCC1=O corresponds to Cyclohexanone.\nStructure 4: CCc1ccccc1 corresponds to Ethylbenzene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q18",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      }
    ],
    "match_options": [
      "Cyclopentene",
      "1-Propanol",
      "Propanal",
      "Ethanol",
      "Benzoyl chloride",
      "Acetone",
      "Acetonitrile",
      "Benzoic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCO corresponds to Ethanol.\nStructure 2: C1CC=CC1 corresponds to Cyclopentene.\nStructure 3: CC#N corresponds to Acetonitrile.\nStructure 4: CC(C)=O corresponds to Acetone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q19",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      },
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      },
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      }
    ],
    "match_options": [
      "Ethyl benzoate",
      "Chlorobenzene",
      "Phenol",
      "Benzene",
      "Ethanol",
      "Cyclohexene",
      "Ethyl acetate",
      "Dichloromethane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: Oc1ccccc1 corresponds to Phenol.\nStructure 2: ClCCl corresponds to Dichloromethane.\nStructure 3: Clc1ccccc1 corresponds to Chlorobenzene.\nStructure 4: CCOC(C)=O corresponds to Ethyl acetate.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q20",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      }
    ],
    "match_options": [
      "Dichloromethane",
      "Dimethyl sulfoxide",
      "Acetic acid",
      "Ethanol",
      "Formic acid",
      "Acetaldehyde",
      "2-Bromopropane",
      "Dimethyl ether"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CS(=O)C corresponds to Dimethyl sulfoxide.\nStructure 2: CC(Br)C corresponds to 2-Bromopropane.\nStructure 3: CCO corresponds to Ethanol.\nStructure 4: ClCCl corresponds to Dichloromethane.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q21",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      },
      {
        "smiles": "ClC(Cl)Cl",
        "correctAnswer": "Chloroform"
      },
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      }
    ],
    "match_options": [
      "1-Propanol",
      "2-Bromopropane",
      "Dimethyl sulfoxide",
      "Benzoic acid",
      "Acetic acid",
      "Chloroform",
      "Propan-2-ol",
      "Butanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC(=O)O corresponds to Acetic acid.\nStructure 2: ClC(Cl)Cl corresponds to Chloroform.\nStructure 3: CC(Br)C corresponds to 2-Bromopropane.\nStructure 4: CCC(C)=O corresponds to Butanone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q22",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butanal"
      },
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      }
    ],
    "match_options": [
      "3-Pentanone",
      "Dimethyl ether",
      "Chlorobenzene",
      "Acetic acid",
      "Acetophenone",
      "Butanal",
      "Cyclohexane",
      "Propan-2-ol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CCCCC1 corresponds to Cyclohexane.\nStructure 2: CC(O)C corresponds to Propan-2-ol.\nStructure 3: CCCC=O corresponds to Butyraldehyde.\nStructure 4: Clc1ccccc1 corresponds to Chlorobenzene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q23",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      },
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      }
    ],
    "match_options": [
      "Cyclopentanone",
      "Propene",
      "Ethyl acetate",
      "Chloroform",
      "Dimethyl ether",
      "Dimethyl sulfoxide",
      "Ethanol",
      "Cyclopentene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC=C corresponds to Propene.\nStructure 2: CCO corresponds to Ethanol.\nStructure 3: O=C1CCCC1 corresponds to Cyclopentanone.\nStructure 4: CCOC(C)=O corresponds to Ethyl acetate.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q24",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "O=C(O)c1ccccc1",
        "correctAnswer": "Benzoic acid"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butanal"
      }
    ],
    "match_options": [
      "Benzoic acid",
      "Propanal",
      "Butanal",
      "Tetrahydrofuran",
      "Ethyl acetate",
      "Cyclopentene",
      "Propanoic acid",
      "Chlorobenzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CCOC1 corresponds to Tetrahydrofuran.\nStructure 2: O=C(O)c1ccccc1 corresponds to Benzoic acid.\nStructure 3: C1CC=CC1 corresponds to Cyclopentene.\nStructure 4: CCCC=O corresponds to Butyraldehyde.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q25",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      }
    ],
    "match_options": [
      "Acetophenone",
      "Acetic acid",
      "2-Bromopropane",
      "Dimethyl sulfoxide",
      "Propyne",
      "Cyclohexanone",
      "Cyclopentene",
      "Diethyl ether"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC(=O)c1ccccc1 corresponds to Acetophenone.\nStructure 2: CS(=O)C corresponds to Dimethyl sulfoxide.\nStructure 3: C1CCCCC1=O corresponds to Cyclohexanone.\nStructure 4: CCOCC corresponds to Diethyl ether.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q26",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCOC(=O)c1ccccc1",
        "correctAnswer": "Ethyl benzoate"
      },
      {
        "smiles": "CCC(=O)O",
        "correctAnswer": "Propanoic acid"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      }
    ],
    "match_options": [
      "Ethyl benzoate",
      "Propanoic acid",
      "2-Bromopropane",
      "1-Butanol",
      "Dimethyl ether",
      "Formic acid",
      "Butanal",
      "1-Bromopropane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCOC(=O)c1ccccc1 corresponds to Ethyl benzoate.\nStructure 2: CCC(=O)O corresponds to Propanoic acid.\nStructure 3: CCCCO corresponds to 1-Butanol.\nStructure 4: C(=O)O corresponds to Formic acid.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q27",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "CO",
        "correctAnswer": "Methanol"
      },
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      }
    ],
    "match_options": [
      "Anisole",
      "Diethyl ether",
      "Phenol",
      "Cyclopentene",
      "Methanol",
      "Ethylbenzene",
      "Dimethyl sulfoxide",
      "Cyclohexene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: Oc1ccccc1 corresponds to Phenol.\nStructure 2: CO corresponds to Methanol.\nStructure 3: C1CCC=CC1 corresponds to Cyclohexene.\nStructure 4: CCOCC corresponds to Diethyl ether.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q28",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "2-Methylpropan-2-ol"
      },
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      }
    ],
    "match_options": [
      "2-Methylpropan-2-ol",
      "Toluene",
      "Bromobenzene",
      "Benzaldehyde",
      "Cyclohexene",
      "Benzoic acid",
      "Acetone",
      "Phenol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A branched alcohol needs both a locant for the OH and locants for its branches, which is where trivial names tend to be substituted instead. The other three here are a substituted ring, a cyclic alkene and a retained ketone name.",
      "approach": "Step 1: Name the branched alcohol systematically. The longest chain through the carbon bearing OH is three carbons, with a methyl branch and the OH both on the central carbon: 2-methylpropan-2-ol.\nStep 2: The benzene ring carrying bromine is bromobenzene, named as a substituted benzene.\nStep 3: The six-membered ring with one double bond is cyclohexene, and the three-carbon ketone is acetone, a name IUPAC retains.",
      "note": "This item previously keyed the alcohol as t-butyl alcohol, a trivial name IUPAC does not retain, while the stem asks for the IUPAC name; it now reads 2-methylpropan-2-ol. Acetone in the same set is retained and stays - the two cases look alike but IUPAC treats them differently.",
      "options": {
        "A": "Correct. 2-Methylpropan-2-ol named systematically, with bromobenzene, cyclohexene and the retained name acetone.",
        "B": "For the branched alcohol, find the longest chain through the carbon carrying the OH and give both the OH and the branch their locants. tert-Butyl alcohol names the right molecule but is not an IUPAC name."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q29",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "CC=O",
        "correctAnswer": "Acetaldehyde"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      }
    ],
    "match_options": [
      "Aniline",
      "Anisole",
      "2-Pentanone",
      "Cyclohexanone",
      "Bromobenzene",
      "Acetaldehyde",
      "Cyclopentanone",
      "Ethyl acetate"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CCCCC1=O corresponds to Cyclohexanone.\nStructure 2: Brc1ccccc1 corresponds to Bromobenzene.\nStructure 3: CC=O corresponds to Acetaldehyde.\nStructure 4: O=C1CCCC1 corresponds to Cyclopentanone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q30",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      },
      {
        "smiles": "CCCO",
        "correctAnswer": "1-Propanol"
      },
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "2-Methylpropan-2-ol"
      }
    ],
    "match_options": [
      "Ethyl benzoate",
      "1-Bromopropane",
      "Propan-2-ol",
      "1-Propanol",
      "Diethyl ether",
      "Acetophenone",
      "Dimethyl sulfoxide",
      "2-Methylpropan-2-ol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCCBr corresponds to 1-Bromopropane.\nStructure 2: CCCO corresponds to 1-Propanol.\nStructure 3: CC(=O)c1ccccc1 corresponds to Acetophenone.\nStructure 4: CC(C)(C)O corresponds to t-Butyl alcohol.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q31",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "COc1ccccc1",
        "correctAnswer": "Anisole"
      },
      {
        "smiles": "OCc1ccccc1",
        "correctAnswer": "Benzyl alcohol"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "O=C(O)c1ccccc1",
        "correctAnswer": "Benzoic acid"
      }
    ],
    "match_options": [
      "Methyl acetate",
      "Anisole",
      "2-Bromopropane",
      "Benzoyl chloride",
      "Benzoic acid",
      "Acetophenone",
      "Benzyl alcohol",
      "Propene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: COc1ccccc1 corresponds to Anisole.\nStructure 2: OCc1ccccc1 corresponds to Benzyl alcohol.\nStructure 3: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.\nStructure 4: O=C(O)c1ccccc1 corresponds to Benzoic acid.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q32",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC(=O)O",
        "correctAnswer": "Propanoic acid"
      },
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      },
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      },
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      }
    ],
    "match_options": [
      "Methyl acetate",
      "Dimethyl ether",
      "Propene",
      "1-Bromopropane",
      "2-Bromopropane",
      "Propanoic acid",
      "2-Pentanone",
      "Tetrahydrofuran"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Three of these four need a locant, and in each case the reason is the same: another isomer exists that the name must exclude. A locant is required exactly when leaving it out would be ambiguous.",
      "approach": "Step 1: The three-carbon acid needs no locant - a carboxyl carbon is always C1 - so it is propanoic acid.\nStep 2: The five-carbon ketone does need one, since the carbonyl could sit at C2 or C3. Here it is next to the end, giving 2-pentanone.\nStep 3: The brominated propane has bromine on the middle carbon, so it is 2-bromopropane rather than 1-. The ester of acetic acid with methanol is methyl acetate, the alkyl group cited first.",
      "note": "Compare 2-pentanone with 3-pentanone, which appears elsewhere in this chapter: same formula, same functional group, different carbonyl position. They are constitutional isomers with different boiling points and different products on reduction, so the locant carries real information.",
      "options": {
        "A": "Correct. Propanoic acid needs no locant, while 2-pentanone and 2-bromopropane do, and methyl acetate is named alkyl group first.",
        "B": "For each structure, ask whether another isomer exists. If it does, the name needs a number; if the group can only sit in one place, as with a carboxyl carbon, it does not."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q33",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butanal"
      },
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      }
    ],
    "match_options": [
      "Propan-2-ol",
      "Propyne",
      "2-Methylpropene",
      "Ethylbenzene",
      "Phenol",
      "Butanal",
      "Propanoic acid",
      "Cyclohexene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCc1ccccc1 corresponds to Ethylbenzene.\nStructure 2: CC(O)C corresponds to Propan-2-ol.\nStructure 3: CCCC=O corresponds to Butyraldehyde.\nStructure 4: Oc1ccccc1 corresponds to Phenol.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q34",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      }
    ],
    "match_options": [
      "Diethyl ether",
      "Acetone",
      "Ethyl acetate",
      "Bromobenzene",
      "Acetic acid",
      "Benzoyl chloride",
      "Cyclopentanone",
      "Propan-2-ol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC(=O)O corresponds to Acetic acid.\nStructure 2: Brc1ccccc1 corresponds to Bromobenzene.\nStructure 3: CCOCC corresponds to Diethyl ether.\nStructure 4: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q35",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "CCCO",
        "correctAnswer": "1-Propanol"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      }
    ],
    "match_options": [
      "Cyclohexene",
      "Cyclohexane",
      "Phenol",
      "Butanone",
      "Benzoyl chloride",
      "Cyclohexanone",
      "Chlorobenzene",
      "1-Propanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: Oc1ccccc1 corresponds to Phenol.\nStructure 2: CCCO corresponds to 1-Propanol.\nStructure 3: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.\nStructure 4: C1CCCCC1=O corresponds to Cyclohexanone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q36",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      },
      {
        "smiles": "OCc1ccccc1",
        "correctAnswer": "Benzyl alcohol"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      }
    ],
    "match_options": [
      "Propene",
      "Ethanol",
      "Benzyl alcohol",
      "1-Butanol",
      "Acetonitrile",
      "Diethyl ether",
      "Acetic acid",
      "Cyclopentene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two of these carry an OH but are named quite differently, because one sits on a saturated chain and the other on a carbon attached to a ring. Where the oxygen is attached decides the naming pattern.",
      "approach": "Step 1: The four-carbon chain with OH at the end is 1-butanol, a straightforward primary alcohol.\nStep 2: The other alcohol has its OH on a CH2 that is attached to a benzene ring. That CH2 is the benzylic position, and the compound is benzyl alcohol.\nStep 3: The three-carbon alkene is propene, and the two-carbon acid is acetic acid, a retained name.",
      "note": "Benzyl alcohol is not a phenol. The OH sits on a saturated carbon one atom away from the ring, so it behaves as an ordinary primary alcohol - it is not appreciably acidic, unlike phenol where the OH is bonded directly to the ring.",
      "options": {
        "A": "Correct. 1-Butanol as a chain alcohol, benzyl alcohol with its OH on the benzylic carbon, plus propene and acetic acid.",
        "B": "For each OH, look at what carbon it sits on. Directly on the ring gives a phenol; on a CH2 next to the ring gives benzyl alcohol; on a plain chain gives an ordinary alkanol."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q37",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "2-Methylpropene"
      },
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      }
    ],
    "match_options": [
      "Benzene",
      "Dimethyl sulfoxide",
      "Ethanol",
      "Ethyl acetate",
      "Diethyl ether",
      "2-Methylpropene",
      "Aniline",
      "3-Pentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCOCC corresponds to Diethyl ether.\nStructure 2: CCO corresponds to Ethanol.\nStructure 3: CC(C)=C corresponds to Isobutylene.\nStructure 4: CCC(=O)CC corresponds to 3-Pentanone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q38",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butanal"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      }
    ],
    "match_options": [
      "3-Pentanone",
      "Phenol",
      "Cyclohexene",
      "Butanal",
      "Acetic acid",
      "Ethylbenzene",
      "Acetone",
      "Ethanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC(C)=O corresponds to Acetone.\nStructure 2: CCCC=O corresponds to Butyraldehyde.\nStructure 3: CCO corresponds to Ethanol.\nStructure 4: CC(=O)O corresponds to Acetic acid.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q39",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      },
      {
        "smiles": "CCCO",
        "correctAnswer": "1-Propanol"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "O=C(O)c1ccccc1",
        "correctAnswer": "Benzoic acid"
      }
    ],
    "match_options": [
      "Propene",
      "Bromobenzene",
      "Benzoic acid",
      "1-Propanol",
      "Ethyl acetate",
      "Ethylbenzene",
      "Acetonitrile",
      "Dichloromethane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC=C corresponds to Propene.\nStructure 2: CCCO corresponds to 1-Propanol.\nStructure 3: CCc1ccccc1 corresponds to Ethylbenzene.\nStructure 4: O=C(O)c1ccccc1 corresponds to Benzoic acid.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q40",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "2-Methylpropene"
      },
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      }
    ],
    "match_options": [
      "Benzyl alcohol",
      "2-Pentanone",
      "Phenol",
      "Cyclopentanone",
      "2-Methylpropene",
      "Propene",
      "Tetrahydrofuran",
      "Benzoic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC(C)=C corresponds to Isobutylene.\nStructure 2: Oc1ccccc1 corresponds to Phenol.\nStructure 3: CC=C corresponds to Propene.\nStructure 4: C1CCOC1 corresponds to Tetrahydrofuran.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q41",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC(=O)O",
        "correctAnswer": "Propanoic acid"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butanal"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      }
    ],
    "match_options": [
      "Ethylbenzene",
      "Acetonitrile",
      "Propanoic acid",
      "2-Bromopropane",
      "Benzaldehyde",
      "Propene",
      "Butanal",
      "Aniline"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCC(=O)O corresponds to Propanoic acid.\nStructure 2: CCCC=O corresponds to Butyraldehyde.\nStructure 3: CCc1ccccc1 corresponds to Ethylbenzene.\nStructure 4: CC#N corresponds to Acetonitrile.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q42",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      }
    ],
    "match_options": [
      "Bromobenzene",
      "2-Methylpropene",
      "Ethylbenzene",
      "Benzaldehyde",
      "Acetic acid",
      "Formic acid",
      "1-Butanol",
      "Toluene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCc1ccccc1 corresponds to Ethylbenzene.\nStructure 2: Cc1ccccc1 corresponds to Toluene.\nStructure 3: C(=O)O corresponds to Formic acid.\nStructure 4: Brc1ccccc1 corresponds to Bromobenzene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q43",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      },
      {
        "smiles": "COc1ccccc1",
        "correctAnswer": "Anisole"
      },
      {
        "smiles": "CCOC(=O)c1ccccc1",
        "correctAnswer": "Ethyl benzoate"
      }
    ],
    "match_options": [
      "Ethyl benzoate",
      "Benzoic acid",
      "Acetic acid",
      "Cyclopentene",
      "Chloroform",
      "Ethanol",
      "Anisole",
      "Chlorobenzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CC=CC1 corresponds to Cyclopentene.\nStructure 2: CC(=O)O corresponds to Acetic acid.\nStructure 3: COc1ccccc1 corresponds to Anisole.\nStructure 4: CCOC(=O)c1ccccc1 corresponds to Ethyl benzoate.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q44",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "2-Methylpropene"
      },
      {
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "correctAnswer": "Nitrobenzene"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      }
    ],
    "match_options": [
      "Cyclohexane",
      "Dichloromethane",
      "2-Methylpropene",
      "Tetrahydrofuran",
      "Propanoic acid",
      "Phenol",
      "Benzaldehyde",
      "Nitrobenzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC(C)=C corresponds to Isobutylene.\nStructure 2: [N+](=O)([O-])c1ccccc1 corresponds to Nitrobenzene.\nStructure 3: C1CCCCC1 corresponds to Cyclohexane.\nStructure 4: C1CCOC1 corresponds to Tetrahydrofuran.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q45",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      },
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propanal"
      }
    ],
    "match_options": [
      "Anisole",
      "Methanol",
      "Propanal",
      "Methyl acetate",
      "1-Bromopropane",
      "Propanoic acid",
      "Cyclohexene",
      "Acetic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CCC=CC1 corresponds to Cyclohexene.\nStructure 2: COC(C)=O corresponds to Methyl acetate.\nStructure 3: CC(=O)O corresponds to Acetic acid.\nStructure 4: CCC=O corresponds to Propionaldehyde.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q46",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      },
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      }
    ],
    "match_options": [
      "Cyclohexanone",
      "Propan-2-ol",
      "Phenol",
      "Bromobenzene",
      "Benzaldehyde",
      "2-Methylpropene",
      "Formic acid",
      "Butanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: O=Cc1ccccc1 corresponds to Benzaldehyde.\nStructure 2: CCC(C)=O corresponds to Butanone.\nStructure 3: CC(O)C corresponds to Propan-2-ol.\nStructure 4: Brc1ccccc1 corresponds to Bromobenzene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q47",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      }
    ],
    "match_options": [
      "Butanone",
      "Tetrahydrofuran",
      "Dimethyl ether",
      "Methyl acetate",
      "Benzoyl chloride",
      "Aniline",
      "Chloroform",
      "Dichloromethane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: ClCCl corresponds to Dichloromethane.\nStructure 2: C1CCOC1 corresponds to Tetrahydrofuran.\nStructure 3: COC(C)=O corresponds to Methyl acetate.\nStructure 4: CCC(C)=O corresponds to Butanone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q48",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "correctAnswer": "Nitrobenzene"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      }
    ],
    "match_options": [
      "Nitrobenzene",
      "Cyclohexene",
      "2-Bromopropane",
      "1-Bromopropane",
      "Diethyl ether",
      "Ethylbenzene",
      "1-Butanol",
      "Cyclohexanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCCCO corresponds to 1-Butanol.\nStructure 2: CCOCC corresponds to Diethyl ether.\nStructure 3: [N+](=O)([O-])c1ccccc1 corresponds to Nitrobenzene.\nStructure 4: CCc1ccccc1 corresponds to Ethylbenzene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q49",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "2-Methylpropene"
      },
      {
        "smiles": "CCCO",
        "correctAnswer": "1-Propanol"
      }
    ],
    "match_options": [
      "2-Methylpropene",
      "Acetic acid",
      "Propene",
      "Dimethyl sulfoxide",
      "Cyclohexane",
      "1-Propanol",
      "Ethanol",
      "Benzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: c1ccccc1 corresponds to Benzene.\nStructure 2: C1CCCCC1 corresponds to Cyclohexane.\nStructure 3: CC(C)=C corresponds to Isobutylene.\nStructure 4: CCCO corresponds to 1-Propanol.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q50",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      },
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propanal"
      }
    ],
    "match_options": [
      "Dimethyl ether",
      "Propanal",
      "Chlorobenzene",
      "Formic acid",
      "2-Methylpropene",
      "Benzaldehyde",
      "Benzene",
      "2-Pentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: c1ccccc1 corresponds to Benzene.\nStructure 2: O=Cc1ccccc1 corresponds to Benzaldehyde.\nStructure 3: C(=O)O corresponds to Formic acid.\nStructure 4: CCC=O corresponds to Propionaldehyde.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q51",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      },
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "2-Methylpropan-2-ol"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butanal"
      }
    ],
    "match_options": [
      "Benzene",
      "2-Methylpropan-2-ol",
      "Acetone",
      "1-Bromopropane",
      "1-Butanol",
      "Toluene",
      "Butanal",
      "Cyclohexane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCCBr corresponds to 1-Bromopropane.\nStructure 2: CC(C)(C)O corresponds to t-Butyl alcohol.\nStructure 3: C1CCCCC1 corresponds to Cyclohexane.\nStructure 4: CCCC=O corresponds to Butyraldehyde.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q52",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC#C",
        "correctAnswer": "Propyne"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      }
    ],
    "match_options": [
      "Propyne",
      "Propan-2-ol",
      "Aniline",
      "Acetic acid",
      "1-Propanol",
      "1-Bromopropane",
      "3-Pentanone",
      "Formic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC#C corresponds to Propyne.\nStructure 2: CCCBr corresponds to 1-Bromopropane.\nStructure 3: CC(=O)O corresponds to Acetic acid.\nStructure 4: C(=O)O corresponds to Formic acid.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q53",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      },
      {
        "smiles": "COc1ccccc1",
        "correctAnswer": "Anisole"
      },
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "Aniline"
      },
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      }
    ],
    "match_options": [
      "Propene",
      "2-Methylpropan-2-ol",
      "Toluene",
      "Phenol",
      "Anisole",
      "Aniline",
      "Chloroform",
      "Ethyl acetate"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: Cc1ccccc1 corresponds to Toluene.\nStructure 2: COc1ccccc1 corresponds to Anisole.\nStructure 3: Nc1ccccc1 corresponds to Aniline.\nStructure 4: CC=C corresponds to Propene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q54",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "2-Methylpropan-2-ol"
      },
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      },
      {
        "smiles": "OCc1ccccc1",
        "correctAnswer": "Benzyl alcohol"
      },
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      }
    ],
    "match_options": [
      "Propyne",
      "Propan-2-ol",
      "2-Methylpropan-2-ol",
      "Tetrahydrofuran",
      "Benzyl alcohol",
      "Butanal",
      "Cyclohexanone",
      "Acetophenone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC(C)(C)O corresponds to t-Butyl alcohol.\nStructure 2: CC(O)C corresponds to Propan-2-ol.\nStructure 3: OCc1ccccc1 corresponds to Benzyl alcohol.\nStructure 4: C1CCCCC1=O corresponds to Cyclohexanone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q55",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "ClC(Cl)Cl",
        "correctAnswer": "Chloroform"
      },
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      }
    ],
    "match_options": [
      "Benzene",
      "Acetic acid",
      "Acetone",
      "Benzoic acid",
      "Chloroform",
      "Toluene",
      "Tetrahydrofuran",
      "Dichloromethane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: ClC(Cl)Cl corresponds to Chloroform.\nStructure 2: c1ccccc1 corresponds to Benzene.\nStructure 3: CC(C)=O corresponds to Acetone.\nStructure 4: CC(=O)O corresponds to Acetic acid.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q56",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "Aniline"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      }
    ],
    "match_options": [
      "Acetic acid",
      "Ethylbenzene",
      "Cyclohexane",
      "Acetonitrile",
      "2-Methylpropan-2-ol",
      "Chlorobenzene",
      "Aniline",
      "Acetaldehyde"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CCCCC1 corresponds to Cyclohexane.\nStructure 2: CC#N corresponds to Acetonitrile.\nStructure 3: Nc1ccccc1 corresponds to Aniline.\nStructure 4: CCc1ccccc1 corresponds to Ethylbenzene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q57",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "ClC(Cl)Cl",
        "correctAnswer": "Chloroform"
      },
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      }
    ],
    "match_options": [
      "Chloroform",
      "Benzoic acid",
      "3-Pentanone",
      "Propanal",
      "2-Bromopropane",
      "Propene",
      "Benzaldehyde",
      "1-Propanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCC(=O)CC corresponds to 3-Pentanone.\nStructure 2: O=Cc1ccccc1 corresponds to Benzaldehyde.\nStructure 3: ClC(Cl)Cl corresponds to Chloroform.\nStructure 4: CC=C corresponds to Propene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q58",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      }
    ],
    "match_options": [
      "1-Butanol",
      "2-Pentanone",
      "Bromobenzene",
      "Ethylbenzene",
      "Acetonitrile",
      "Butanone",
      "Tetrahydrofuran",
      "Benzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCC(C)=O corresponds to Butanone.\nStructure 2: CC#N corresponds to Acetonitrile.\nStructure 3: c1ccccc1 corresponds to Benzene.\nStructure 4: CCc1ccccc1 corresponds to Ethylbenzene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q59",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "2-Methylpropene"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      },
      {
        "smiles": "CCC(=O)O",
        "correctAnswer": "Propanoic acid"
      }
    ],
    "match_options": [
      "Toluene",
      "Ethyl benzoate",
      "2-Methylpropene",
      "Cyclohexane",
      "Tetrahydrofuran",
      "Acetaldehyde",
      "Propanoic acid",
      "1-Bromopropane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CCCCC1 corresponds to Cyclohexane.\nStructure 2: CC(C)=C corresponds to Isobutylene.\nStructure 3: Cc1ccccc1 corresponds to Toluene.\nStructure 4: CCC(=O)O corresponds to Propanoic acid.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q60",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      }
    ],
    "match_options": [
      "Ethylbenzene",
      "Toluene",
      "Nitrobenzene",
      "Chlorobenzene",
      "Acetonitrile",
      "Cyclopentene",
      "Propyne",
      "Acetic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: Cc1ccccc1 corresponds to Toluene.\nStructure 2: CC#N corresponds to Acetonitrile.\nStructure 3: CCc1ccccc1 corresponds to Ethylbenzene.\nStructure 4: CC(=O)O corresponds to Acetic acid.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q61",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC#C",
        "correctAnswer": "Propyne"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "OCc1ccccc1",
        "correctAnswer": "Benzyl alcohol"
      },
      {
        "smiles": "CC=O",
        "correctAnswer": "Acetaldehyde"
      }
    ],
    "match_options": [
      "Acetaldehyde",
      "Propan-2-ol",
      "Benzoyl chloride",
      "Benzyl alcohol",
      "Propyne",
      "Methyl acetate",
      "Ethylbenzene",
      "Cyclopentene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC#C corresponds to Propyne.\nStructure 2: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.\nStructure 3: OCc1ccccc1 corresponds to Benzyl alcohol.\nStructure 4: CC=O corresponds to Acetaldehyde.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q62",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      }
    ],
    "match_options": [
      "Acetophenone",
      "Ethanol",
      "Cyclopentanone",
      "Cyclohexane",
      "Cyclohexene",
      "Butanal",
      "Formic acid",
      "Benzaldehyde"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CCC=CC1 corresponds to Cyclohexene.\nStructure 2: CCO corresponds to Ethanol.\nStructure 3: C(=O)O corresponds to Formic acid.\nStructure 4: C1CCCCC1 corresponds to Cyclohexane.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q63",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propanal"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "CC#C",
        "correctAnswer": "Propyne"
      }
    ],
    "match_options": [
      "Acetophenone",
      "Propyne",
      "Propanal",
      "Butanone",
      "Benzaldehyde",
      "Acetaldehyde",
      "Ethylbenzene",
      "Propan-2-ol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCC=O corresponds to Propionaldehyde.\nStructure 2: CCC(C)=O corresponds to Butanone.\nStructure 3: O=Cc1ccccc1 corresponds to Benzaldehyde.\nStructure 4: CC#C corresponds to Propyne.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q64",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      }
    ],
    "match_options": [
      "Dimethyl ether",
      "Bromobenzene",
      "Benzoic acid",
      "Benzaldehyde",
      "Nitrobenzene",
      "1-Bromopropane",
      "Benzoyl chloride",
      "2-Bromopropane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: Brc1ccccc1 corresponds to Bromobenzene.\nStructure 2: CCCBr corresponds to 1-Bromopropane.\nStructure 3: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.\nStructure 4: O=Cc1ccccc1 corresponds to Benzaldehyde.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q65",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      }
    ],
    "match_options": [
      "Tetrahydrofuran",
      "Cyclohexene",
      "Benzoyl chloride",
      "Dimethyl sulfoxide",
      "Propyne",
      "Propan-2-ol",
      "Cyclopentanone",
      "3-Pentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.\nStructure 2: C1CCC=CC1 corresponds to Cyclohexene.\nStructure 3: CS(=O)C corresponds to Dimethyl sulfoxide.\nStructure 4: CC(O)C corresponds to Propan-2-ol.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q66",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "Aniline"
      },
      {
        "smiles": "CCOC(=O)c1ccccc1",
        "correctAnswer": "Ethyl benzoate"
      },
      {
        "smiles": "OCc1ccccc1",
        "correctAnswer": "Benzyl alcohol"
      },
      {
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "correctAnswer": "Nitrobenzene"
      }
    ],
    "match_options": [
      "Aniline",
      "Nitrobenzene",
      "Propyne",
      "Ethyl benzoate",
      "Benzyl alcohol",
      "Phenol",
      "Ethyl acetate",
      "Cyclopentene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: Nc1ccccc1 corresponds to Aniline.\nStructure 2: CCOC(=O)c1ccccc1 corresponds to Ethyl benzoate.\nStructure 3: OCc1ccccc1 corresponds to Benzyl alcohol.\nStructure 4: [N+](=O)([O-])c1ccccc1 corresponds to Nitrobenzene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q67",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "2-Methylpropene"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      }
    ],
    "match_options": [
      "1-Butanol",
      "2-Bromopropane",
      "Benzaldehyde",
      "2-Methylpropene",
      "3-Pentanone",
      "Acetonitrile",
      "Aniline",
      "Chlorobenzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC#N corresponds to Acetonitrile.\nStructure 2: CCC(=O)CC corresponds to 3-Pentanone.\nStructure 3: CC(C)=C corresponds to Isobutylene.\nStructure 4: O=Cc1ccccc1 corresponds to Benzaldehyde.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q68",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC(=O)O",
        "correctAnswer": "Propanoic acid"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      }
    ],
    "match_options": [
      "Propene",
      "1-Propanol",
      "Tetrahydrofuran",
      "Acetone",
      "Butanone",
      "Propanoic acid",
      "Benzyl alcohol",
      "Acetaldehyde"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCC(=O)O corresponds to Propanoic acid.\nStructure 2: CCC(C)=O corresponds to Butanone.\nStructure 3: C1CCOC1 corresponds to Tetrahydrofuran.\nStructure 4: CC(C)=O corresponds to Acetone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q69",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      },
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "2-Methylpropan-2-ol"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      }
    ],
    "match_options": [
      "Benzoic acid",
      "Methanol",
      "Cyclohexane",
      "Benzene",
      "2-Methylpropan-2-ol",
      "Nitrobenzene",
      "Benzaldehyde",
      "Cyclopentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CCCCC1 corresponds to Cyclohexane.\nStructure 2: O=C1CCCC1 corresponds to Cyclopentanone.\nStructure 3: CC(C)(C)O corresponds to t-Butyl alcohol.\nStructure 4: O=Cc1ccccc1 corresponds to Benzaldehyde.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q70",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "2-Methylpropene"
      },
      {
        "smiles": "CCOC(=O)c1ccccc1",
        "correctAnswer": "Ethyl benzoate"
      }
    ],
    "match_options": [
      "2-Methylpropene",
      "Propanal",
      "Ethyl benzoate",
      "3-Pentanone",
      "Diethyl ether",
      "Formic acid",
      "Ethyl acetate",
      "Acetone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCOC(C)=O corresponds to Ethyl acetate.\nStructure 2: CCOCC corresponds to Diethyl ether.\nStructure 3: CC(C)=C corresponds to Isobutylene.\nStructure 4: CCOC(=O)c1ccccc1 corresponds to Ethyl benzoate.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q71",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "OCc1ccccc1",
        "correctAnswer": "Benzyl alcohol"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      }
    ],
    "match_options": [
      "Tetrahydrofuran",
      "Butanone",
      "1-Butanol",
      "Phenol",
      "3-Pentanone",
      "Acetophenone",
      "Benzyl alcohol",
      "Cyclopentene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CC=CC1 corresponds to Cyclopentene.\nStructure 2: OCc1ccccc1 corresponds to Benzyl alcohol.\nStructure 3: CCCCO corresponds to 1-Butanol.\nStructure 4: CCC(C)=O corresponds to Butanone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q72",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "CO",
        "correctAnswer": "Methanol"
      },
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      },
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      }
    ],
    "match_options": [
      "1-Propanol",
      "Cyclohexanone",
      "Phenol",
      "Methanol",
      "Benzoyl chloride",
      "Methyl acetate",
      "2-Methylpropan-2-ol",
      "Acetophenone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: Oc1ccccc1 corresponds to Phenol.\nStructure 2: CO corresponds to Methanol.\nStructure 3: C1CCCCC1=O corresponds to Cyclohexanone.\nStructure 4: COC(C)=O corresponds to Methyl acetate.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q73",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      },
      {
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "correctAnswer": "Nitrobenzene"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      },
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      }
    ],
    "match_options": [
      "Acetic acid",
      "Acetonitrile",
      "Propene",
      "Methyl acetate",
      "Chlorobenzene",
      "Nitrobenzene",
      "Dimethyl sulfoxide",
      "Formic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC=C corresponds to Propene.\nStructure 2: [N+](=O)([O-])c1ccccc1 corresponds to Nitrobenzene.\nStructure 3: C(=O)O corresponds to Formic acid.\nStructure 4: Clc1ccccc1 corresponds to Chlorobenzene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q74",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      }
    ],
    "match_options": [
      "Propan-2-ol",
      "Cyclohexane",
      "Chloroform",
      "Acetone",
      "Ethanol",
      "Cyclopentene",
      "Tetrahydrofuran",
      "Cyclohexene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CCOC1 corresponds to Tetrahydrofuran.\nStructure 2: CC(C)=O corresponds to Acetone.\nStructure 3: CCO corresponds to Ethanol.\nStructure 4: CC(O)C corresponds to Propan-2-ol.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q75",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "2-Methylpropan-2-ol"
      },
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "CCOC(=O)c1ccccc1",
        "correctAnswer": "Ethyl benzoate"
      }
    ],
    "match_options": [
      "Cyclohexene",
      "Bromobenzene",
      "1-Propanol",
      "Ethyl benzoate",
      "Cyclohexane",
      "Aniline",
      "Benzoyl chloride",
      "2-Methylpropan-2-ol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.\nStructure 2: CC(C)(C)O corresponds to t-Butyl alcohol.\nStructure 3: C1CCC=CC1 corresponds to Cyclohexene.\nStructure 4: CCOC(=O)c1ccccc1 corresponds to Ethyl benzoate.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q76",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      },
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      },
      {
        "smiles": "ClC(Cl)Cl",
        "correctAnswer": "Chloroform"
      }
    ],
    "match_options": [
      "2-Methylpropan-2-ol",
      "Cyclohexene",
      "Nitrobenzene",
      "2-Pentanone",
      "Chloroform",
      "Butanal",
      "Benzene",
      "Cyclopentene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CC=CC1 corresponds to Cyclopentene.\nStructure 2: CCCC(C)=O corresponds to 2-Pentanone.\nStructure 3: c1ccccc1 corresponds to Benzene.\nStructure 4: ClC(Cl)Cl corresponds to Chloroform.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q77",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC(=O)O",
        "correctAnswer": "Propanoic acid"
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "COc1ccccc1",
        "correctAnswer": "Anisole"
      }
    ],
    "match_options": [
      "Cyclohexane",
      "3-Pentanone",
      "Propene",
      "Propanoic acid",
      "Anisole",
      "Dimethyl sulfoxide",
      "Acetophenone",
      "Acetonitrile"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCC(=O)O corresponds to Propanoic acid.\nStructure 2: CC#N corresponds to Acetonitrile.\nStructure 3: C1CCCCC1 corresponds to Cyclohexane.\nStructure 4: COc1ccccc1 corresponds to Anisole.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q78",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      }
    ],
    "match_options": [
      "Acetonitrile",
      "Benzaldehyde",
      "Cyclopentanone",
      "Ethyl acetate",
      "Dimethyl sulfoxide",
      "Acetaldehyde",
      "Methanol",
      "Benzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: O=Cc1ccccc1 corresponds to Benzaldehyde.\nStructure 2: CS(=O)C corresponds to Dimethyl sulfoxide.\nStructure 3: CCOC(C)=O corresponds to Ethyl acetate.\nStructure 4: c1ccccc1 corresponds to Benzene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q79",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "O=C(O)c1ccccc1",
        "correctAnswer": "Benzoic acid"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "2-Methylpropene"
      },
      {
        "smiles": "CC=O",
        "correctAnswer": "Acetaldehyde"
      },
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      }
    ],
    "match_options": [
      "Phenol",
      "Benzoic acid",
      "2-Methylpropene",
      "Acetaldehyde",
      "Acetone",
      "1-Butanol",
      "Formic acid",
      "Tetrahydrofuran"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: O=C(O)c1ccccc1 corresponds to Benzoic acid.\nStructure 2: CC(C)=C corresponds to Isobutylene.\nStructure 3: CC=O corresponds to Acetaldehyde.\nStructure 4: Oc1ccccc1 corresponds to Phenol.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q80",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "COC",
        "correctAnswer": "Dimethyl ether"
      },
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      }
    ],
    "match_options": [
      "Tetrahydrofuran",
      "Acetone",
      "Ethyl acetate",
      "2-Bromopropane",
      "Butanal",
      "Ethyl benzoate",
      "Nitrobenzene",
      "Dimethyl ether"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CCOC1 corresponds to Tetrahydrofuran.\nStructure 2: CCOC(C)=O corresponds to Ethyl acetate.\nStructure 3: COC corresponds to Dimethyl ether.\nStructure 4: CC(Br)C corresponds to 2-Bromopropane.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q81",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "CC#C",
        "correctAnswer": "Propyne"
      },
      {
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "correctAnswer": "Nitrobenzene"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      }
    ],
    "match_options": [
      "Nitrobenzene",
      "Chloroform",
      "2-Bromopropane",
      "Benzene",
      "Toluene",
      "Propyne",
      "Ethylbenzene",
      "3-Pentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Four different functional groups appear here - a ketone, an alkyne, a nitro compound and an alkyl-substituted ring - and each is named by a different mechanism: a suffix, a suffix with a locant, a substituent prefix, and a substituted benzene.",
      "approach": "Step 1: The five-carbon ketone with the carbonyl at the centre is 3-pentanone, the locant distinguishing it from the 2-isomer.\nStep 2: The three-carbon chain with a triple bond is propyne. With only one possible position in a three-carbon chain, no locant is needed.\nStep 3: The ring bearing NO2 is nitrobenzene, the nitro group being cited as a substituent prefix. The ring bearing a two-carbon chain is ethylbenzene.",
      "note": "The nitro group is always a prefix and never a suffix, however important it is to the compound's chemistry. It is also strongly electron-withdrawing, which is why nitrobenzene resists further electrophilic substitution and directs any that occurs to the meta position, as Chapter 16 shows.",
      "options": {
        "A": "Correct. 3-Pentanone with its locant, propyne needing none, and nitrobenzene and ethylbenzene as substituted rings.",
        "B": "Take each functional group in turn and ask how it is expressed - as a suffix, as a prefix, or as a substituent on a ring - and then whether a locant is required to remove ambiguity."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q82",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      },
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      },
      {
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "correctAnswer": "Nitrobenzene"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      }
    ],
    "match_options": [
      "Dimethyl sulfoxide",
      "Toluene",
      "Benzene",
      "Propan-2-ol",
      "Chlorobenzene",
      "Butanal",
      "Diethyl ether",
      "Nitrobenzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: Clc1ccccc1 corresponds to Chlorobenzene.\nStructure 2: CC(O)C corresponds to Propan-2-ol.\nStructure 3: [N+](=O)([O-])c1ccccc1 corresponds to Nitrobenzene.\nStructure 4: CCOCC corresponds to Diethyl ether.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q83",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "ClC(Cl)Cl",
        "correctAnswer": "Chloroform"
      },
      {
        "smiles": "COC",
        "correctAnswer": "Dimethyl ether"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      }
    ],
    "match_options": [
      "Ethylbenzene",
      "Tetrahydrofuran",
      "Propanoic acid",
      "Dimethyl sulfoxide",
      "Chloroform",
      "Cyclopentene",
      "Formic acid",
      "Dimethyl ether"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCc1ccccc1 corresponds to Ethylbenzene.\nStructure 2: ClC(Cl)Cl corresponds to Chloroform.\nStructure 3: COC corresponds to Dimethyl ether.\nStructure 4: C(=O)O corresponds to Formic acid.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q84",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      },
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      }
    ],
    "match_options": [
      "2-Bromopropane",
      "Diethyl ether",
      "Ethyl acetate",
      "Dimethyl sulfoxide",
      "Acetonitrile",
      "Phenol",
      "Ethanol",
      "1-Bromopropane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CS(=O)C corresponds to Dimethyl sulfoxide.\nStructure 2: CCO corresponds to Ethanol.\nStructure 3: CC(Br)C corresponds to 2-Bromopropane.\nStructure 4: CCOC(C)=O corresponds to Ethyl acetate.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q85",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      },
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      },
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      },
      {
        "smiles": "CCC(=O)O",
        "correctAnswer": "Propanoic acid"
      }
    ],
    "match_options": [
      "Propanal",
      "2-Bromopropane",
      "Acetic acid",
      "Anisole",
      "Propan-2-ol",
      "Methyl acetate",
      "Phenol",
      "Propanoic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC(Br)C corresponds to 2-Bromopropane.\nStructure 2: COC(C)=O corresponds to Methyl acetate.\nStructure 3: CC(O)C corresponds to Propan-2-ol.\nStructure 4: CCC(=O)O corresponds to Propanoic acid.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q86",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "CO",
        "correctAnswer": "Methanol"
      }
    ],
    "match_options": [
      "Methanol",
      "Acetophenone",
      "Benzoyl chloride",
      "Cyclohexene",
      "Propanal",
      "Ethanol",
      "Cyclohexanone",
      "Formic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: C1CCC=CC1 corresponds to Cyclohexene.\nStructure 2: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.\nStructure 3: CC(=O)c1ccccc1 corresponds to Acetophenone.\nStructure 4: CO corresponds to Methanol.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q87",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "COC",
        "correctAnswer": "Dimethyl ether"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "CCCO",
        "correctAnswer": "1-Propanol"
      },
      {
        "smiles": "CC#C",
        "correctAnswer": "Propyne"
      }
    ],
    "match_options": [
      "Butanone",
      "Propene",
      "Propyne",
      "Propanoic acid",
      "1-Propanol",
      "Dimethyl ether",
      "2-Methylpropene",
      "Bromobenzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: COC corresponds to Dimethyl ether.\nStructure 2: Brc1ccccc1 corresponds to Bromobenzene.\nStructure 3: CCCO corresponds to 1-Propanol.\nStructure 4: CC#C corresponds to Propyne.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q88",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      }
    ],
    "match_options": [
      "Diethyl ether",
      "Propan-2-ol",
      "Cyclohexane",
      "Phenol",
      "Propanoic acid",
      "3-Pentanone",
      "Methyl acetate",
      "Butanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCC(=O)CC corresponds to 3-Pentanone.\nStructure 2: Oc1ccccc1 corresponds to Phenol.\nStructure 3: C1CCCCC1 corresponds to Cyclohexane.\nStructure 4: COC(C)=O corresponds to Methyl acetate.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q89",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "2-Methylpropan-2-ol"
      },
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      },
      {
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "correctAnswer": "Nitrobenzene"
      },
      {
        "smiles": "CO",
        "correctAnswer": "Methanol"
      }
    ],
    "match_options": [
      "2-Methylpropan-2-ol",
      "Nitrobenzene",
      "Dichloromethane",
      "Methanol",
      "1-Butanol",
      "Benzaldehyde",
      "Propanoic acid",
      "Propan-2-ol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC(C)(C)O corresponds to t-Butyl alcohol.\nStructure 2: ClCCl corresponds to Dichloromethane.\nStructure 3: [N+](=O)([O-])c1ccccc1 corresponds to Nitrobenzene.\nStructure 4: CO corresponds to Methanol.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q90",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butanal"
      }
    ],
    "match_options": [
      "2-Pentanone",
      "Chlorobenzene",
      "Benzaldehyde",
      "1-Butanol",
      "Benzoyl chloride",
      "Butanal",
      "Cyclopentanone",
      "Benzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: c1ccccc1 corresponds to Benzene.\nStructure 2: O=Cc1ccccc1 corresponds to Benzaldehyde.\nStructure 3: O=C1CCCC1 corresponds to Cyclopentanone.\nStructure 4: CCCC=O corresponds to Butyraldehyde.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q91",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      }
    ],
    "match_options": [
      "Benzaldehyde",
      "Toluene",
      "Cyclohexanone",
      "Phenol",
      "Ethylbenzene",
      "3-Pentanone",
      "1-Bromopropane",
      "Methanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCCBr corresponds to 1-Bromopropane.\nStructure 2: O=Cc1ccccc1 corresponds to Benzaldehyde.\nStructure 3: Oc1ccccc1 corresponds to Phenol.\nStructure 4: CCC(=O)CC corresponds to 3-Pentanone.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q92",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "Aniline"
      }
    ],
    "match_options": [
      "Aniline",
      "Dimethyl ether",
      "Benzoyl chloride",
      "3-Pentanone",
      "Chlorobenzene",
      "Ethanol",
      "Acetic acid",
      "Acetonitrile"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCO corresponds to Ethanol.\nStructure 2: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.\nStructure 3: CC#N corresponds to Acetonitrile.\nStructure 4: Nc1ccccc1 corresponds to Aniline.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q93",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "Aniline"
      },
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      },
      {
        "smiles": "OCc1ccccc1",
        "correctAnswer": "Benzyl alcohol"
      },
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      }
    ],
    "match_options": [
      "Benzyl alcohol",
      "Chlorobenzene",
      "Butanal",
      "Cyclopentanone",
      "Dichloromethane",
      "Benzoyl chloride",
      "Aniline",
      "Benzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: Nc1ccccc1 corresponds to Aniline.\nStructure 2: c1ccccc1 corresponds to Benzene.\nStructure 3: OCc1ccccc1 corresponds to Benzyl alcohol.\nStructure 4: ClCCl corresponds to Dichloromethane.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q94",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Easy",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      },
      {
        "smiles": "COC",
        "correctAnswer": "Dimethyl ether"
      }
    ],
    "match_options": [
      "1-Butanol",
      "Toluene",
      "Benzene",
      "Benzoic acid",
      "Acetophenone",
      "Ethanol",
      "Dimethyl ether",
      "Diethyl ether"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CCCCO corresponds to 1-Butanol.\nStructure 2: CCOCC corresponds to Diethyl ether.\nStructure 3: Cc1ccccc1 corresponds to Toluene.\nStructure 4: COC corresponds to Dimethyl ether.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q95",
    "topic": "Nomenclature Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      },
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "2-Methylpropene"
      }
    ],
    "match_options": [
      "Cyclohexene",
      "Benzoyl chloride",
      "Benzyl alcohol",
      "Acetone",
      "Cyclopentene",
      "2-Pentanone",
      "2-Methylpropene",
      "Chloroform"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect matches",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Matching basic chemical structures with their nomenclature terms.",
      "process": "Structure 1: CC(C)=O corresponds to Acetone.\nStructure 2: CCCC(C)=O corresponds to 2-Pentanone.\nStructure 3: O=C(Cl)c1ccccc1 corresponds to Benzoyl chloride.\nStructure 4: CC(C)=C corresponds to Isobutylene.",
      "result": "All structures are correctly matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q1_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "2-Methylpropene"
      },
      {
        "smiles": "ClC(Cl)Cl",
        "correctAnswer": "Chloroform"
      },
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propanal"
      }
    ],
    "match_options": [
      "Nitrobenzene",
      "2-Methylpropene",
      "1-Butanol",
      "Ethyl acetate",
      "2-Pentanone",
      "Propanal",
      "Chloroform",
      "Dimethyl ether"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two of these carry names IUPAC retains and two are named systematically, so the set tests whether you can tell which convention applies. A retained name is not a wrong name - it is one IUPAC has kept in use.",
      "approach": "Step 1: The four-carbon alkene with a methyl branch is named systematically: a three-carbon propene chain with a methyl on C2, giving 2-methylpropene.\nStep 2: The three-carbon aldehyde is likewise systematic - a three-carbon chain ending in CHO takes the -al suffix, so propanal.\nStep 3: The remaining two use retained names. Trichloromethane is universally called chloroform, and the ester of acetic acid with ethanol is ethyl acetate, named as alkyl followed by the acid-derived group.",
      "note": "This item previously keyed the first two as isobutylene and propionaldehyde, which are trivial names IUPAC does not retain, while the stem asks for the IUPAC name. They have been corrected. Chloroform and ethyl acetate stay as they are, because those names IUPAC does keep.",
      "options": {
        "A": "Correct. 2-Methylpropene and propanal are named systematically; chloroform and ethyl acetate are retained names that IUPAC permits.",
        "B": "Ask of each name whether IUPAC retains it. Chloroform and ethyl acetate are on that retained list; isobutylene and propionaldehyde are not, so those two must be named systematically."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q2_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      }
    ],
    "match_options": [
      "Benzoic acid",
      "Propene",
      "Ethyl acetate",
      "Cyclohexane",
      "Dichloromethane",
      "Diethyl ether",
      "Acetophenone",
      "Formic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This set mixes systematic and retained names across four different functional groups. Identify the group first, because that determines both the kind of name used and whether a locant is needed.",
      "approach": "Step 1: The single carbon carrying two chlorines is named systematically as dichloromethane, with the di- prefix counting the substituents.\nStep 2: The oxygen flanked by two ethyl groups is an ether, named by its two alkyl groups: diethyl ether.\nStep 3: The remaining two are retained names. A benzene ring bearing an acetyl group is acetophenone, and the simplest carboxylic acid, a single carbon bearing COOH, is formic acid.",
      "note": "Ethers are commonly named as functional class names - the two alkyl groups followed by the word ether - rather than by a substitutive name like ethoxyethane. Both are acceptable, which is why diethyl ether is not a violation of the IUPAC stem.",
      "options": {
        "A": "Correct. Dichloromethane named systematically, diethyl ether by functional class, and acetophenone and formic acid by retained names.",
        "B": "Identify the functional group before reaching for a naming rule. Ethers, ketones on a ring and the one-carbon acid each follow a different convention here."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q5_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "CC=O",
        "correctAnswer": "Acetaldehyde"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      }
    ],
    "match_options": [
      "Acetaldehyde",
      "Dimethyl sulfoxide",
      "Acetic acid",
      "Toluene",
      "1-Propanol",
      "1-Bromopropane",
      "Cyclohexane",
      "Propan-2-ol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This set spans a saturated ring, a sulfur-containing compound, an aldehyde and an alkyl halide. The sulfoxide is the unfamiliar one, and its name follows the same alkyl-plus-group pattern used for ethers.",
      "approach": "Step 1: The six-membered saturated ring is cyclohexane.\nStep 2: The sulfur bearing a double-bonded oxygen and two methyl groups is a sulfoxide, named from its two alkyl groups: dimethyl sulfoxide.\nStep 3: The two-carbon aldehyde is acetaldehyde, a retained name, and the three-carbon chain with bromine at the end is 1-bromopropane.",
      "note": "Dimethyl sulfoxide is worth recognising on sight because it is a common laboratory solvent - strongly polar but without an O-H, so it dissolves ionic reagents while being unable to donate a hydrogen bond. That combination makes it the standard polar aprotic solvent for the SN2 reactions of Chapter 11.",
      "options": {
        "A": "Correct. Cyclohexane, dimethyl sulfoxide named from its two alkyl groups, acetaldehyde by its retained name, and 1-bromopropane with its locant.",
        "B": "The sulfoxide is named like an ether - the two alkyl groups followed by the group name. The other three follow the ordinary ring, aldehyde and haloalkane patterns."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q6_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "correctAnswer": "Nitrobenzene"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      }
    ],
    "match_options": [
      "Cyclopentene",
      "Ethanol",
      "Chlorobenzene",
      "Nitrobenzene",
      "2-Pentanone",
      "Benzaldehyde",
      "Acetone",
      "2-Methylpropene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Nitrobenzene.\nGrid card 2: Acetone.\nGrid card 3: Benzaldehyde.\nGrid card 4: Chlorobenzene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q7_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      },
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "2-Methylpropene"
      }
    ],
    "match_options": [
      "Acetophenone",
      "Cyclopentanone",
      "Chlorobenzene",
      "Propanal",
      "Formic acid",
      "Diethyl ether",
      "Ethyl benzoate",
      "2-Methylpropene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Diethyl ether.\nGrid card 2: Cyclopentanone.\nGrid card 3: Acetophenone.\nGrid card 4: Isobutylene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q8_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      },
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "Aniline"
      },
      {
        "smiles": "CC=O",
        "correctAnswer": "Acetaldehyde"
      },
      {
        "smiles": "COC",
        "correctAnswer": "Dimethyl ether"
      }
    ],
    "match_options": [
      "Bromobenzene",
      "Cyclopentanone",
      "Acetaldehyde",
      "2-Methylpropan-2-ol",
      "Benzoyl chloride",
      "Aniline",
      "Acetic acid",
      "Dimethyl ether"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Three of these four carry retained names, which is common among the simplest members of each functional group family - they were named before systematic nomenclature and the names stuck.",
      "approach": "Step 1: The five-membered ring containing a carbonyl is cyclopentanone, named systematically with cyclo- and the -one suffix.\nStep 2: The benzene ring bearing NH2 is aniline, not aminobenzene - IUPAC retains the older name.\nStep 3: The two-carbon aldehyde is acetaldehyde and the oxygen between two methyls is dimethyl ether, both names IUPAC accepts.",
      "note": "Aniline is worth singling out because its systematic alternative is essentially never used, and because the compound's chemistry differs sharply from an aliphatic amine - the ring delocalizes the nitrogen lone pair, making aniline a far weaker base, as Chapter 24 develops.",
      "options": {
        "A": "Correct. Cyclopentanone named systematically, and aniline, acetaldehyde and dimethyl ether by names IUPAC retains.",
        "B": "Check each against the retained list. Simple aromatic amines, two-carbon aldehydes and symmetrical small ethers all keep older names in ordinary use."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q9_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "2-Methylpropene"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      }
    ],
    "match_options": [
      "Acetophenone",
      "Methyl acetate",
      "Diethyl ether",
      "Aniline",
      "Benzaldehyde",
      "Toluene",
      "Cyclohexanone",
      "2-Methylpropene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Acetophenone.\nGrid card 2: Cyclohexanone.\nGrid card 3: Isobutylene.\nGrid card 4: Toluene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q10_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "2-Methylpropan-2-ol"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      }
    ],
    "match_options": [
      "1-Bromopropane",
      "Chlorobenzene",
      "2-Methylpropan-2-ol",
      "Propanal",
      "Toluene",
      "Bromobenzene",
      "Methyl acetate",
      "Propanoic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Chlorobenzene.\nGrid card 2: Bromobenzene.\nGrid card 3: t-Butyl alcohol.\nGrid card 4: 1-Bromopropane.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q11_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      },
      {
        "smiles": "O=C(O)c1ccccc1",
        "correctAnswer": "Benzoic acid"
      }
    ],
    "match_options": [
      "Dimethyl sulfoxide",
      "Butanone",
      "Ethyl acetate",
      "Benzoic acid",
      "Toluene",
      "Dimethyl ether",
      "Bromobenzene",
      "Methyl acetate"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Three benzene derivatives and one ester. Among aromatics, whether a name is systematic or retained depends on the substituent, and the three here fall on different sides of that line.",
      "approach": "Step 1: The ring bearing bromine is bromobenzene - named systematically as a substituted benzene, since halogens take ordinary substituent prefixes.\nStep 2: The ring bearing a methyl group is toluene, a retained name; methylbenzene is correct but rarely used.\nStep 3: The ring bearing COOH is benzoic acid, also retained. The remaining structure is ethyl acetate, the ester of acetic acid with ethanol.",
      "note": "Toluene matters beyond its name: the methyl group attached to a ring is a benzylic position, and its C-H bonds are unusually weak because the resulting radical is delocalized into the ring. That reactivity is developed in Chapter 16.",
      "options": {
        "A": "Correct. Bromobenzene named systematically, toluene and benzoic acid by retained names, and ethyl acetate as the ester.",
        "B": "Halogens on a ring take systematic substituent prefixes, but a methyl group and a carboxyl group on benzene both produce compounds with retained names."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q12_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      },
      {
        "smiles": "CCC(=O)O",
        "correctAnswer": "Propanoic acid"
      }
    ],
    "match_options": [
      "Butanal",
      "Toluene",
      "Benzaldehyde",
      "Benzoyl chloride",
      "Propanoic acid",
      "Acetonitrile",
      "Acetone",
      "Acetic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Benzaldehyde.\nGrid card 2: Acetone.\nGrid card 3: Acetic acid.\nGrid card 4: Propanoic acid.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q13_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propanal"
      },
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      },
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      }
    ],
    "match_options": [
      "Propanal",
      "Methanol",
      "Phenol",
      "Acetic acid",
      "Cyclopentene",
      "Acetophenone",
      "Dichloromethane",
      "1-Bromopropane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Propionaldehyde.\nGrid card 2: Phenol.\nGrid card 3: Acetic acid.\nGrid card 4: Dichloromethane.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q14_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "COC",
        "correctAnswer": "Dimethyl ether"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      }
    ],
    "match_options": [
      "2-Methylpropene",
      "Cyclohexanone",
      "Cyclopentene",
      "Dimethyl ether",
      "Butanone",
      "Cyclopentanone",
      "Tetrahydrofuran",
      "Diethyl ether"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Tetrahydrofuran.\nGrid card 2: Dimethyl ether.\nGrid card 3: Cyclopentene.\nGrid card 4: Butanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q15_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "COc1ccccc1",
        "correctAnswer": "Anisole"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      }
    ],
    "match_options": [
      "Ethyl acetate",
      "Anisole",
      "Benzoic acid",
      "Benzoyl chloride",
      "Benzene",
      "Benzaldehyde",
      "Nitrobenzene",
      "Propene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "All four are benzene or a monosubstituted benzene, so the ring is constant and only the substituent varies. Three of the four names are retained rather than systematic, which is characteristic of aromatic chemistry.",
      "approach": "Step 1: The unsubstituted ring is benzene itself.\nStep 2: A ring bearing CHO is benzaldehyde and a ring bearing OCH3 is anisole - both retained names rather than the systematic benzenecarbaldehyde and methoxybenzene.\nStep 3: The ring bearing a carbonyl chloride is benzoyl chloride, named from the benzoyl acyl group.",
      "note": "Aromatic compounds carry a high proportion of retained names because they were characterised and named long before systematic nomenclature existed. Anisole in particular gives no clue to its structure from the name alone, which is why the drawing matters more here than in the aliphatic sets.",
      "options": {
        "A": "Correct. Benzene, plus benzaldehyde, anisole and benzoyl chloride - three retained aromatic names distinguished by their single substituent.",
        "B": "The ring is the same in all four, so identify the substituent and recall its retained name. Systematic alternatives exist for benzaldehyde and anisole but are rarely used."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q16_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "OCc1ccccc1",
        "correctAnswer": "Benzyl alcohol"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butanal"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      }
    ],
    "match_options": [
      "1-Propanol",
      "Acetophenone",
      "Benzyl alcohol",
      "Acetone",
      "Butanal",
      "Benzaldehyde",
      "Chloroform",
      "Toluene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Benzaldehyde.\nGrid card 2: Benzyl alcohol.\nGrid card 3: Butyraldehyde.\nGrid card 4: Toluene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q17_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      }
    ],
    "match_options": [
      "1-Butanol",
      "3-Pentanone",
      "1-Propanol",
      "Cyclohexane",
      "Methyl acetate",
      "Propanal",
      "Butanone",
      "Acetone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: 3-Pentanone.\nGrid card 2: Cyclohexane.\nGrid card 3: Acetone.\nGrid card 4: 1-Butanol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q18_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      },
      {
        "smiles": "ClC(Cl)Cl",
        "correctAnswer": "Chloroform"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      }
    ],
    "match_options": [
      "Methanol",
      "Bromobenzene",
      "Chloroform",
      "Ethanol",
      "Cyclopentanone",
      "Acetaldehyde",
      "Butanone",
      "2-Pentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: 2-Pentanone.\nGrid card 2: Chloroform.\nGrid card 3: Bromobenzene.\nGrid card 4: Cyclopentanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q19_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "CCCO",
        "correctAnswer": "1-Propanol"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      }
    ],
    "match_options": [
      "Cyclohexanone",
      "Acetonitrile",
      "Acetophenone",
      "1-Bromopropane",
      "Benzoyl chloride",
      "Cyclohexane",
      "1-Propanol",
      "Ethylbenzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Acetonitrile.\nGrid card 2: Cyclohexane.\nGrid card 3: 1-Propanol.\nGrid card 4: 1-Bromopropane.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q20_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propanal"
      }
    ],
    "match_options": [
      "Tetrahydrofuran",
      "Bromobenzene",
      "Ethylbenzene",
      "Propanal",
      "Cyclopentene",
      "Benzene",
      "1-Butanol",
      "Butanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Butanone.\nGrid card 2: 1-Butanol.\nGrid card 3: Tetrahydrofuran.\nGrid card 4: Propionaldehyde.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q21_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      }
    ],
    "match_options": [
      "Ethanol",
      "1-Propanol",
      "Formic acid",
      "2-Pentanone",
      "Acetone",
      "Cyclohexane",
      "Phenol",
      "Cyclopentene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Cyclohexane.\nGrid card 2: Ethanol.\nGrid card 3: Acetone.\nGrid card 4: Formic acid.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q22_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "O=C(O)c1ccccc1",
        "correctAnswer": "Benzoic acid"
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      }
    ],
    "match_options": [
      "Methyl acetate",
      "Ethanol",
      "Diethyl ether",
      "1-Bromopropane",
      "2-Bromopropane",
      "Benzoic acid",
      "Acetonitrile",
      "Cyclohexanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Benzoic acid.\nGrid card 2: Acetonitrile.\nGrid card 3: Diethyl ether.\nGrid card 4: 2-Bromopropane.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q23_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "2-Methylpropan-2-ol"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      }
    ],
    "match_options": [
      "Benzyl alcohol",
      "Cyclohexene",
      "Ethylbenzene",
      "1-Butanol",
      "2-Methylpropan-2-ol",
      "Benzaldehyde",
      "Ethanol",
      "Dichloromethane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Ethylbenzene.\nGrid card 2: t-Butyl alcohol.\nGrid card 3: 1-Butanol.\nGrid card 4: Dichloromethane.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q24_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      }
    ],
    "match_options": [
      "Butanone",
      "Chlorobenzene",
      "Tetrahydrofuran",
      "Dimethyl sulfoxide",
      "Cyclopentene",
      "Butanal",
      "2-Pentanone",
      "Diethyl ether"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Diethyl ether.\nGrid card 2: Dimethyl sulfoxide.\nGrid card 3: Tetrahydrofuran.\nGrid card 4: Cyclopentene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q25_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "2-Methylpropan-2-ol"
      }
    ],
    "match_options": [
      "Bromobenzene",
      "Ethyl benzoate",
      "3-Pentanone",
      "Methyl acetate",
      "Acetophenone",
      "Cyclohexane",
      "2-Methylpropan-2-ol",
      "Acetic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Acetophenone.\nGrid card 2: Cyclohexane.\nGrid card 3: 3-Pentanone.\nGrid card 4: t-Butyl alcohol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q26_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      },
      {
        "smiles": "COc1ccccc1",
        "correctAnswer": "Anisole"
      }
    ],
    "match_options": [
      "Cyclohexene",
      "Ethyl benzoate",
      "Benzoyl chloride",
      "Dichloromethane",
      "Anisole",
      "Propanal",
      "Benzyl alcohol",
      "Acetophenone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Acetophenone.\nGrid card 2: Cyclohexene.\nGrid card 3: Dichloromethane.\nGrid card 4: Anisole.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q27_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propanal"
      },
      {
        "smiles": "CC#C",
        "correctAnswer": "Propyne"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      }
    ],
    "match_options": [
      "Methanol",
      "3-Pentanone",
      "Propanal",
      "Propyne",
      "Butanal",
      "Ethanol",
      "Cyclopentene",
      "Toluene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Propionaldehyde.\nGrid card 2: Propyne.\nGrid card 3: Cyclopentene.\nGrid card 4: Ethanol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q28_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "ClC(Cl)Cl",
        "correctAnswer": "Chloroform"
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      }
    ],
    "match_options": [
      "Chloroform",
      "Acetonitrile",
      "Butanone",
      "2-Methylpropene",
      "Toluene",
      "2-Pentanone",
      "Dichloromethane",
      "Benzoyl chloride"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Benzoyl chloride.\nGrid card 2: Chloroform.\nGrid card 3: Acetonitrile.\nGrid card 4: Toluene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q29_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      }
    ],
    "match_options": [
      "2-Pentanone",
      "1-Butanol",
      "Acetonitrile",
      "2-Methylpropan-2-ol",
      "Propene",
      "Benzoic acid",
      "Diethyl ether",
      "Cyclopentene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: 2-Pentanone.\nGrid card 2: 1-Butanol.\nGrid card 3: Propene.\nGrid card 4: Diethyl ether.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q30_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      },
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      }
    ],
    "match_options": [
      "2-Bromopropane",
      "Acetone",
      "Cyclohexane",
      "1-Butanol",
      "Methyl acetate",
      "2-Pentanone",
      "Diethyl ether",
      "Phenol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Methyl acetate.\nGrid card 2: Phenol.\nGrid card 3: 1-Butanol.\nGrid card 4: 2-Pentanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q31_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butanal"
      },
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      }
    ],
    "match_options": [
      "Ethylbenzene",
      "3-Pentanone",
      "Cyclohexanone",
      "Butanal",
      "Benzoic acid",
      "2-Methylpropan-2-ol",
      "Bromobenzene",
      "Ethyl acetate"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Bromobenzene.\nGrid card 2: Butyraldehyde.\nGrid card 3: Ethyl acetate.\nGrid card 4: Ethylbenzene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q32_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      },
      {
        "smiles": "CCCO",
        "correctAnswer": "1-Propanol"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      }
    ],
    "match_options": [
      "Cyclohexanone",
      "1-Bromopropane",
      "1-Propanol",
      "Dimethyl sulfoxide",
      "Toluene",
      "Formic acid",
      "Chlorobenzene",
      "Cyclohexane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Cyclohexanone.\nGrid card 2: 1-Bromopropane.\nGrid card 3: 1-Propanol.\nGrid card 4: Formic acid.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q33_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      },
      {
        "smiles": "CCCO",
        "correctAnswer": "1-Propanol"
      },
      {
        "smiles": "CCOC(=O)c1ccccc1",
        "correctAnswer": "Ethyl benzoate"
      }
    ],
    "match_options": [
      "Cyclopentanone",
      "Ethyl benzoate",
      "Benzoic acid",
      "1-Propanol",
      "1-Bromopropane",
      "Chloroform",
      "Propan-2-ol",
      "Methyl acetate"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Propan-2-ol.\nGrid card 2: 1-Bromopropane.\nGrid card 3: 1-Propanol.\nGrid card 4: Ethyl benzoate.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q34_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      }
    ],
    "match_options": [
      "Ethyl acetate",
      "Cyclopentanone",
      "Acetone",
      "Anisole",
      "1-Propanol",
      "Propyne",
      "Cyclohexene",
      "Tetrahydrofuran"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Ethyl acetate.\nGrid card 2: Cyclohexene.\nGrid card 3: Acetone.\nGrid card 4: Cyclopentanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q35_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      }
    ],
    "match_options": [
      "Formic acid",
      "Acetone",
      "Aniline",
      "Toluene",
      "Cyclopentanone",
      "Butanal",
      "Tetrahydrofuran",
      "Anisole"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Toluene.\nGrid card 2: Acetone.\nGrid card 3: Tetrahydrofuran.\nGrid card 4: Cyclopentanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q36_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      },
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "2-Methylpropan-2-ol"
      },
      {
        "smiles": "CC=O",
        "correctAnswer": "Acetaldehyde"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      }
    ],
    "match_options": [
      "Formic acid",
      "Diethyl ether",
      "Cyclohexane",
      "Dimethyl ether",
      "Bromobenzene",
      "Benzene",
      "Acetaldehyde",
      "2-Methylpropan-2-ol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Formic acid.\nGrid card 2: t-Butyl alcohol.\nGrid card 3: Acetaldehyde.\nGrid card 4: Diethyl ether.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q37_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "CO",
        "correctAnswer": "Methanol"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      }
    ],
    "match_options": [
      "Propanoic acid",
      "Methanol",
      "Formic acid",
      "Butanone",
      "Diethyl ether",
      "Chloroform",
      "Cyclopentanone",
      "Cyclohexene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Formic acid.\nGrid card 2: Diethyl ether.\nGrid card 3: Methanol.\nGrid card 4: Butanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q38_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      }
    ],
    "match_options": [
      "2-Methylpropene",
      "Acetone",
      "1-Butanol",
      "Anisole",
      "Propyne",
      "Toluene",
      "1-Bromopropane",
      "Ethanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Ethanol.\nGrid card 2: 1-Butanol.\nGrid card 3: Toluene.\nGrid card 4: 1-Bromopropane.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q39_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propanal"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butanal"
      }
    ],
    "match_options": [
      "Cyclopentene",
      "Butanal",
      "Propanal",
      "Chlorobenzene",
      "Cyclohexanone",
      "Toluene",
      "Bromobenzene",
      "Benzaldehyde"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Propionaldehyde.\nGrid card 2: Bromobenzene.\nGrid card 3: Benzaldehyde.\nGrid card 4: Butyraldehyde.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q40_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      }
    ],
    "match_options": [
      "Toluene",
      "Dimethyl sulfoxide",
      "Acetophenone",
      "Diethyl ether",
      "Ethyl acetate",
      "2-Pentanone",
      "Methyl acetate",
      "Phenol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Ethyl acetate.\nGrid card 2: Diethyl ether.\nGrid card 3: Dimethyl sulfoxide.\nGrid card 4: Toluene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q41_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "Aniline"
      },
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      },
      {
        "smiles": "CCOC(=O)c1ccccc1",
        "correctAnswer": "Ethyl benzoate"
      }
    ],
    "match_options": [
      "Ethylbenzene",
      "Ethyl benzoate",
      "Methyl acetate",
      "Chlorobenzene",
      "Formic acid",
      "Cyclohexanone",
      "Propanal",
      "Aniline"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Aniline.\nGrid card 2: Methyl acetate.\nGrid card 3: Formic acid.\nGrid card 4: Ethyl benzoate.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q42_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "2-Methylpropan-2-ol"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      },
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      }
    ],
    "match_options": [
      "Chlorobenzene",
      "2-Methylpropan-2-ol",
      "Formic acid",
      "Butanone",
      "3-Pentanone",
      "Methanol",
      "Methyl acetate",
      "Benzaldehyde"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: t-Butyl alcohol.\nGrid card 2: Butanone.\nGrid card 3: 3-Pentanone.\nGrid card 4: Chlorobenzene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q43_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      },
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      },
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      }
    ],
    "match_options": [
      "Ethyl acetate",
      "2-Methylpropene",
      "Butanal",
      "2-Pentanone",
      "2-Bromopropane",
      "Benzyl alcohol",
      "Cyclopentanone",
      "Cyclohexene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Cyclopentanone.\nGrid card 2: 2-Bromopropane.\nGrid card 3: Ethyl acetate.\nGrid card 4: 2-Pentanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q44_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "CC#C",
        "correctAnswer": "Propyne"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "CO",
        "correctAnswer": "Methanol"
      }
    ],
    "match_options": [
      "Toluene",
      "Cyclopentanone",
      "Acetaldehyde",
      "Methanol",
      "Benzoyl chloride",
      "Propyne",
      "Cyclopentene",
      "Propene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Benzoyl chloride.\nGrid card 2: Propyne.\nGrid card 3: Cyclopentene.\nGrid card 4: Methanol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q45_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "COC",
        "correctAnswer": "Dimethyl ether"
      },
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      }
    ],
    "match_options": [
      "Methyl acetate",
      "Benzoic acid",
      "1-Butanol",
      "Cyclopentanone",
      "Dimethyl ether",
      "2-Pentanone",
      "1-Bromopropane",
      "Cyclohexene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: 1-Butanol.\nGrid card 2: Dimethyl ether.\nGrid card 3: Methyl acetate.\nGrid card 4: 1-Bromopropane.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q46_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCC(=O)O",
        "correctAnswer": "Propanoic acid"
      },
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      },
      {
        "smiles": "ClC(Cl)Cl",
        "correctAnswer": "Chloroform"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      }
    ],
    "match_options": [
      "Tetrahydrofuran",
      "Propanoic acid",
      "Cyclohexanone",
      "Methanol",
      "Formic acid",
      "Chloroform",
      "Acetic acid",
      "Bromobenzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Propanoic acid.\nGrid card 2: Cyclohexanone.\nGrid card 3: Chloroform.\nGrid card 4: Acetic acid.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q47_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      },
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      },
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      }
    ],
    "match_options": [
      "Toluene",
      "Dichloromethane",
      "3-Pentanone",
      "Bromobenzene",
      "Dimethyl sulfoxide",
      "Nitrobenzene",
      "Propene",
      "2-Pentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: 2-Pentanone.\nGrid card 2: Propene.\nGrid card 3: Dichloromethane.\nGrid card 4: Bromobenzene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q48_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      },
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      }
    ],
    "match_options": [
      "Cyclohexene",
      "Diethyl ether",
      "Acetone",
      "Acetic acid",
      "1-Bromopropane",
      "1-Propanol",
      "Acetaldehyde",
      "Butanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Acetone.\nGrid card 2: Cyclohexene.\nGrid card 3: Acetic acid.\nGrid card 4: Butanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q49_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      },
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      }
    ],
    "match_options": [
      "Acetic acid",
      "Ethylbenzene",
      "2-Pentanone",
      "Dimethyl sulfoxide",
      "Propene",
      "Propanoic acid",
      "Acetone",
      "3-Pentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: 3-Pentanone.\nGrid card 2: Acetic acid.\nGrid card 3: Dimethyl sulfoxide.\nGrid card 4: Acetone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q50_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      }
    ],
    "match_options": [
      "Dimethyl ether",
      "Cyclohexane",
      "Propanoic acid",
      "Diethyl ether",
      "Ethanol",
      "Chlorobenzene",
      "Ethyl benzoate",
      "Benzoyl chloride"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Diethyl ether.\nGrid card 2: Ethanol.\nGrid card 3: Chlorobenzene.\nGrid card 4: Benzoyl chloride.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q51_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      },
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      },
      {
        "smiles": "COc1ccccc1",
        "correctAnswer": "Anisole"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      }
    ],
    "match_options": [
      "Anisole",
      "2-Bromopropane",
      "Propene",
      "Chlorobenzene",
      "2-Methylpropene",
      "Benzene",
      "Ethylbenzene",
      "Tetrahydrofuran"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: 2-Bromopropane.\nGrid card 2: Propene.\nGrid card 3: Anisole.\nGrid card 4: Ethylbenzene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q52_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      }
    ],
    "match_options": [
      "Ethylbenzene",
      "3-Pentanone",
      "1-Bromopropane",
      "Ethyl benzoate",
      "Cyclohexene",
      "Dimethyl ether",
      "Benzoyl chloride",
      "Dichloromethane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: 3-Pentanone.\nGrid card 2: Cyclohexene.\nGrid card 3: Dichloromethane.\nGrid card 4: Benzoyl chloride.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q53_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      }
    ],
    "match_options": [
      "Tetrahydrofuran",
      "Toluene",
      "Acetonitrile",
      "Ethyl benzoate",
      "Propanoic acid",
      "Propyne",
      "Ethylbenzene",
      "Cyclohexanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Acetonitrile.\nGrid card 2: Ethylbenzene.\nGrid card 3: Toluene.\nGrid card 4: Tetrahydrofuran.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q54_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      }
    ],
    "match_options": [
      "Ethyl benzoate",
      "Anisole",
      "Tetrahydrofuran",
      "Acetonitrile",
      "Butanone",
      "Cyclohexene",
      "Benzoyl chloride",
      "2-Bromopropane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Cyclohexene.\nGrid card 2: Tetrahydrofuran.\nGrid card 3: 2-Bromopropane.\nGrid card 4: Butanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q55_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "CC=O",
        "correctAnswer": "Acetaldehyde"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      }
    ],
    "match_options": [
      "Dimethyl sulfoxide",
      "Acetaldehyde",
      "Tetrahydrofuran",
      "Benzyl alcohol",
      "Benzoyl chloride",
      "Cyclohexanone",
      "Cyclopentene",
      "Benzaldehyde"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Benzaldehyde.\nGrid card 2: Cyclopentene.\nGrid card 3: Acetaldehyde.\nGrid card 4: Tetrahydrofuran.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q56_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "Aniline"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      }
    ],
    "match_options": [
      "Acetaldehyde",
      "Cyclohexene",
      "Propan-2-ol",
      "Diethyl ether",
      "Ethylbenzene",
      "Butanone",
      "Formic acid",
      "Aniline"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Ethylbenzene.\nGrid card 2: Aniline.\nGrid card 3: Formic acid.\nGrid card 4: Diethyl ether.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q57_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "CC#C",
        "correctAnswer": "Propyne"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      }
    ],
    "match_options": [
      "Anisole",
      "Phenol",
      "Propyne",
      "Ethanol",
      "Acetonitrile",
      "Acetophenone",
      "Ethyl acetate",
      "Cyclopentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Phenol.\nGrid card 2: Propyne.\nGrid card 3: Ethanol.\nGrid card 4: Acetonitrile.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q58_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "2-Methylpropene"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butanal"
      }
    ],
    "match_options": [
      "Chloroform",
      "Butanal",
      "Cyclopentene",
      "2-Methylpropene",
      "Benzaldehyde",
      "Acetone",
      "Acetonitrile",
      "Benzyl alcohol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Cyclopentene.\nGrid card 2: Acetonitrile.\nGrid card 3: Isobutylene.\nGrid card 4: Butyraldehyde.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q59_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "correctAnswer": "Nitrobenzene"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      },
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      }
    ],
    "match_options": [
      "Acetaldehyde",
      "Nitrobenzene",
      "Phenol",
      "1-Bromopropane",
      "Cyclopentanone",
      "Acetone",
      "2-Bromopropane",
      "Cyclopentene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Nitrobenzene.\nGrid card 2: Cyclopentanone.\nGrid card 3: 2-Bromopropane.\nGrid card 4: Cyclopentene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q60_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "COc1ccccc1",
        "correctAnswer": "Anisole"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butanal"
      },
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      },
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      }
    ],
    "match_options": [
      "2-Pentanone",
      "Cyclohexene",
      "Propanal",
      "Benzoyl chloride",
      "Anisole",
      "Acetone",
      "Butanal",
      "Benzoic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Anisole.\nGrid card 2: Butyraldehyde.\nGrid card 3: 2-Pentanone.\nGrid card 4: Cyclohexene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q61_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "O=Cc1ccccc1",
        "correctAnswer": "Benzaldehyde"
      }
    ],
    "match_options": [
      "Diethyl ether",
      "Propanoic acid",
      "Acetonitrile",
      "Methyl acetate",
      "3-Pentanone",
      "Benzaldehyde",
      "Dimethyl sulfoxide",
      "Phenol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Dimethyl sulfoxide.\nGrid card 2: Phenol.\nGrid card 3: Diethyl ether.\nGrid card 4: Benzaldehyde.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q62_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      },
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "CO",
        "correctAnswer": "Methanol"
      }
    ],
    "match_options": [
      "Chloroform",
      "Propanal",
      "Tetrahydrofuran",
      "Diethyl ether",
      "Butanal",
      "Cyclohexanone",
      "Acetone",
      "Methanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two ketones, one cyclic and one open-chain, sit alongside a cyclic ether and the simplest alcohol. Whether a functional group is inside a ring changes the name but not the group's identity.",
      "approach": "Step 1: The six-membered ring with a carbonyl in it is cyclohexanone. No locant is needed, since every ring position is equivalent until a second substituent appears.\nStep 2: The open-chain three-carbon ketone is acetone, a retained name; systematically it would be propan-2-one.\nStep 3: The five-membered ring containing an oxygen is tetrahydrofuran, a retained name for what IUPAC would call oxolane. The single carbon bearing OH is methanol.",
      "note": "Tetrahydrofuran shows how a retained name can encode history rather than structure - it is named as furan with four added hydrogens, referring to the aromatic compound it is derived from, even though the saturated ring shares none of furan's aromaticity.",
      "options": {
        "A": "Correct. Cyclohexanone and acetone as the two ketones, with tetrahydrofuran as the cyclic ether and methanol as the simplest alcohol.",
        "B": "Identify the functional group first, then ask whether it sits in a ring. A carbonyl in a ring takes cyclo- with -one; an oxygen in a ring here takes a retained name."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q63_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCC(=O)O",
        "correctAnswer": "Propanoic acid"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      }
    ],
    "match_options": [
      "Propanoic acid",
      "Propene",
      "1-Butanol",
      "Cyclohexene",
      "Benzyl alcohol",
      "Propanal",
      "Cyclopentene",
      "Ethanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Propanoic acid.\nGrid card 2: Ethanol.\nGrid card 3: 1-Butanol.\nGrid card 4: Cyclopentene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q64_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butanal"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      }
    ],
    "match_options": [
      "Ethylbenzene",
      "Butanal",
      "2-Pentanone",
      "Cyclohexanone",
      "Anisole",
      "Cyclopentene",
      "Cyclohexane",
      "2-Methylpropene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Butyraldehyde.\nGrid card 2: Ethylbenzene.\nGrid card 3: Cyclohexane.\nGrid card 4: 2-Pentanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q65_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "COc1ccccc1",
        "correctAnswer": "Anisole"
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      },
      {
        "smiles": "CCCO",
        "correctAnswer": "1-Propanol"
      }
    ],
    "match_options": [
      "Propanoic acid",
      "Anisole",
      "Cyclohexane",
      "Acetonitrile",
      "Cyclopentanone",
      "Cyclohexanone",
      "Cyclohexene",
      "1-Propanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Anisole.\nGrid card 2: Acetonitrile.\nGrid card 3: Cyclopentanone.\nGrid card 4: 1-Propanol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q66_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC#C",
        "correctAnswer": "Propyne"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      },
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propanal"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      }
    ],
    "match_options": [
      "Acetaldehyde",
      "Propyne",
      "Tetrahydrofuran",
      "Formic acid",
      "Propanal",
      "Propanoic acid",
      "Aniline",
      "Butanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Propyne.\nGrid card 2: Formic acid.\nGrid card 3: Propionaldehyde.\nGrid card 4: Butanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q67_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      },
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      }
    ],
    "match_options": [
      "Ethanol",
      "Phenol",
      "2-Pentanone",
      "2-Methylpropene",
      "Benzoyl chloride",
      "Cyclopentanone",
      "2-Bromopropane",
      "Cyclopentene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: 2-Bromopropane.\nGrid card 2: Phenol.\nGrid card 3: Cyclopentanone.\nGrid card 4: Benzoyl chloride.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q68_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      },
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "CCCC(C)=O",
        "correctAnswer": "2-Pentanone"
      },
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      }
    ],
    "match_options": [
      "Dimethyl sulfoxide",
      "Propan-2-ol",
      "Acetonitrile",
      "Acetaldehyde",
      "2-Pentanone",
      "1-Butanol",
      "1-Bromopropane",
      "Butanal"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: 1-Bromopropane.\nGrid card 2: Dimethyl sulfoxide.\nGrid card 3: 2-Pentanone.\nGrid card 4: Propan-2-ol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q69_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC#N",
        "correctAnswer": "Acetonitrile"
      },
      {
        "smiles": "ClC(Cl)Cl",
        "correctAnswer": "Chloroform"
      },
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      },
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      }
    ],
    "match_options": [
      "Chloroform",
      "Dimethyl sulfoxide",
      "Phenol",
      "Acetonitrile",
      "Propan-2-ol",
      "Methyl acetate",
      "2-Methylpropan-2-ol",
      "Diethyl ether"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Acetonitrile.\nGrid card 2: Chloroform.\nGrid card 3: Methyl acetate.\nGrid card 4: Dimethyl sulfoxide.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q70_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "CCCBr",
        "correctAnswer": "1-Bromopropane"
      },
      {
        "smiles": "CC#C",
        "correctAnswer": "Propyne"
      },
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      }
    ],
    "match_options": [
      "3-Pentanone",
      "Propyne",
      "Propan-2-ol",
      "1-Bromopropane",
      "Cyclopentanone",
      "Acetic acid",
      "Phenol",
      "1-Butanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: 1-Butanol.\nGrid card 2: 1-Bromopropane.\nGrid card 3: Propyne.\nGrid card 4: 3-Pentanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q71_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      },
      {
        "smiles": "C(=O)O",
        "correctAnswer": "Formic acid"
      },
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      },
      {
        "smiles": "CC(O)C",
        "correctAnswer": "Propan-2-ol"
      }
    ],
    "match_options": [
      "Acetic acid",
      "Formic acid",
      "Methyl acetate",
      "Benzene",
      "Ethylbenzene",
      "Cyclohexene",
      "Propan-2-ol",
      "3-Pentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Acetic acid.\nGrid card 2: Formic acid.\nGrid card 3: Methyl acetate.\nGrid card 4: Propan-2-ol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q72_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      },
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "CO",
        "correctAnswer": "Methanol"
      },
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "2-Methylpropan-2-ol"
      }
    ],
    "match_options": [
      "Methanol",
      "1-Bromopropane",
      "Acetophenone",
      "Acetic acid",
      "Cyclohexanone",
      "Dimethyl sulfoxide",
      "2-Methylpropan-2-ol",
      "Propanoic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Cyclohexanone.\nGrid card 2: Dimethyl sulfoxide.\nGrid card 3: Methanol.\nGrid card 4: t-Butyl alcohol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q73_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "ClCCl",
        "correctAnswer": "Dichloromethane"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "CC=O",
        "correctAnswer": "Acetaldehyde"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      }
    ],
    "match_options": [
      "Acetaldehyde",
      "Bromobenzene",
      "Dimethyl ether",
      "Dichloromethane",
      "Acetic acid",
      "Chloroform",
      "1-Butanol",
      "Propanal"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Dichloromethane.\nGrid card 2: Bromobenzene.\nGrid card 3: Acetaldehyde.\nGrid card 4: 1-Butanol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q74_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1CCOC1",
        "correctAnswer": "Tetrahydrofuran"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      },
      {
        "smiles": "COC",
        "correctAnswer": "Dimethyl ether"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      }
    ],
    "match_options": [
      "Anisole",
      "1-Butanol",
      "Dimethyl ether",
      "Cyclohexane",
      "Tetrahydrofuran",
      "Butanone",
      "Propanoic acid",
      "Benzoyl chloride"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Tetrahydrofuran.\nGrid card 2: Butanone.\nGrid card 3: Dimethyl ether.\nGrid card 4: 1-Butanol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q75_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      },
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "Aniline"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butanal"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Acetone"
      }
    ],
    "match_options": [
      "Butanal",
      "Chlorobenzene",
      "Aniline",
      "1-Bromopropane",
      "Dimethyl ether",
      "Cyclopentene",
      "Ethyl acetate",
      "Acetone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Chlorobenzene.\nGrid card 2: Aniline.\nGrid card 3: Butyraldehyde.\nGrid card 4: Acetone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q76_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butanal"
      },
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "2-Bromopropane"
      },
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propanal"
      }
    ],
    "match_options": [
      "Benzoyl chloride",
      "Butanal",
      "2-Methylpropan-2-ol",
      "2-Bromopropane",
      "Cyclopentanone",
      "Benzaldehyde",
      "1-Bromopropane",
      "Propanal"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Benzoyl chloride.\nGrid card 2: Butyraldehyde.\nGrid card 3: 2-Bromopropane.\nGrid card 4: Propionaldehyde.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q77_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      },
      {
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "correctAnswer": "Nitrobenzene"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      }
    ],
    "match_options": [
      "Nitrobenzene",
      "Butanal",
      "Ethylbenzene",
      "Acetic acid",
      "Toluene",
      "Acetophenone",
      "Ethanol",
      "Cyclopentanone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Acetophenone.\nGrid card 2: Acetic acid.\nGrid card 3: Nitrobenzene.\nGrid card 4: Cyclopentanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q78_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      }
    ],
    "match_options": [
      "Nitrobenzene",
      "3-Pentanone",
      "Chloroform",
      "Bromobenzene",
      "2-Bromopropane",
      "Cyclohexane",
      "Cyclohexene",
      "Chlorobenzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Cyclohexene.\nGrid card 2: Bromobenzene.\nGrid card 3: Cyclohexane.\nGrid card 4: Chlorobenzene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q79_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "CC=O",
        "correctAnswer": "Acetaldehyde"
      },
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "ClC(Cl)Cl",
        "correctAnswer": "Chloroform"
      }
    ],
    "match_options": [
      "Cyclopentene",
      "Ethyl acetate",
      "Chloroform",
      "Benzoic acid",
      "1-Bromopropane",
      "3-Pentanone",
      "Acetaldehyde",
      "1-Butanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Cyclopentene.\nGrid card 2: Acetaldehyde.\nGrid card 3: 3-Pentanone.\nGrid card 4: Chloroform.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q80_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butanal"
      },
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      }
    ],
    "match_options": [
      "Butanone",
      "Ethyl acetate",
      "Acetophenone",
      "Formic acid",
      "Cyclohexene",
      "Propene",
      "Butanal",
      "Cyclopentene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Butanone.\nGrid card 2: Butyraldehyde.\nGrid card 3: Acetophenone.\nGrid card 4: Propene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q81_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      },
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "Aniline"
      },
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      }
    ],
    "match_options": [
      "Aniline",
      "Acetone",
      "Benzoic acid",
      "Benzene",
      "Toluene",
      "Tetrahydrofuran",
      "Acetonitrile",
      "Ethyl acetate"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Ethyl acetate.\nGrid card 2: Toluene.\nGrid card 3: Aniline.\nGrid card 4: Benzene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q82_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "COC",
        "correctAnswer": "Dimethyl ether"
      },
      {
        "smiles": "CCCO",
        "correctAnswer": "1-Propanol"
      },
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "Aniline"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      }
    ],
    "match_options": [
      "Aniline",
      "Propanal",
      "Phenol",
      "Dimethyl ether",
      "Acetic acid",
      "1-Propanol",
      "Tetrahydrofuran",
      "Cyclopentene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Dimethyl ether.\nGrid card 2: 1-Propanol.\nGrid card 3: Aniline.\nGrid card 4: Cyclopentene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q83_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "correctAnswer": "Nitrobenzene"
      },
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butanal"
      },
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Toluene"
      }
    ],
    "match_options": [
      "Butanal",
      "Ethyl acetate",
      "Dichloromethane",
      "Propyne",
      "Toluene",
      "Aniline",
      "Ethanol",
      "Nitrobenzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Nitrobenzene.\nGrid card 2: Butyraldehyde.\nGrid card 3: Ethyl acetate.\nGrid card 4: Toluene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q84_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "OCc1ccccc1",
        "correctAnswer": "Benzyl alcohol"
      },
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propanal"
      },
      {
        "smiles": "CC(=O)c1ccccc1",
        "correctAnswer": "Acetophenone"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      }
    ],
    "match_options": [
      "3-Pentanone",
      "Ethylbenzene",
      "Propanal",
      "Ethyl benzoate",
      "Benzyl alcohol",
      "Methanol",
      "Acetic acid",
      "Acetophenone"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Benzyl alcohol.\nGrid card 2: Propionaldehyde.\nGrid card 3: Acetophenone.\nGrid card 4: Acetic acid.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q85_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "CCOC(=O)c1ccccc1",
        "correctAnswer": "Ethyl benzoate"
      },
      {
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "correctAnswer": "Nitrobenzene"
      },
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      }
    ],
    "match_options": [
      "Cyclopentene",
      "Diethyl ether",
      "Ethyl benzoate",
      "Dimethyl ether",
      "Benzoic acid",
      "Acetone",
      "Toluene",
      "Nitrobenzene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Diethyl ether.\nGrid card 2: Ethyl benzoate.\nGrid card 3: Nitrobenzene.\nGrid card 4: Cyclopentene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q86_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      },
      {
        "smiles": "CC#C",
        "correctAnswer": "Propyne"
      },
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "CC(C)=C",
        "correctAnswer": "2-Methylpropene"
      }
    ],
    "match_options": [
      "Diethyl ether",
      "Dichloromethane",
      "Benzene",
      "Acetone",
      "Propene",
      "Chlorobenzene",
      "2-Methylpropene",
      "Propyne"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Chlorobenzene.\nGrid card 2: Propyne.\nGrid card 3: Diethyl ether.\nGrid card 4: Isobutylene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q87_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "CCC(=O)CC",
        "correctAnswer": "3-Pentanone"
      },
      {
        "smiles": "C1CCCCC1",
        "correctAnswer": "Cyclohexane"
      },
      {
        "smiles": "CO",
        "correctAnswer": "Methanol"
      }
    ],
    "match_options": [
      "Benzene",
      "1-Propanol",
      "3-Pentanone",
      "Methanol",
      "Ethyl acetate",
      "Chloroform",
      "Nitrobenzene",
      "Cyclohexane"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Ethyl acetate.\nGrid card 2: 3-Pentanone.\nGrid card 3: Cyclohexane.\nGrid card 4: Methanol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q88_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "COC",
        "correctAnswer": "Dimethyl ether"
      },
      {
        "smiles": "O=C1CCCC1",
        "correctAnswer": "Cyclopentanone"
      },
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Phenol"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Acetic acid"
      }
    ],
    "match_options": [
      "Phenol",
      "Cyclohexanone",
      "Cyclopentanone",
      "Ethyl acetate",
      "Propanoic acid",
      "Acetic acid",
      "Dimethyl ether",
      "Aniline"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Dimethyl ether.\nGrid card 2: Cyclopentanone.\nGrid card 3: Phenol.\nGrid card 4: Acetic acid.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q89_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      },
      {
        "smiles": "CCC(C)=O",
        "correctAnswer": "Butanone"
      }
    ],
    "match_options": [
      "2-Bromopropane",
      "1-Butanol",
      "Propene",
      "Cyclohexanone",
      "Ethanol",
      "Phenol",
      "Butanone",
      "Benzoic acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Propene.\nGrid card 2: Ethanol.\nGrid card 3: 1-Butanol.\nGrid card 4: Butanone.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q90_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCOCC",
        "correctAnswer": "Diethyl ether"
      },
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ethyl acetate"
      },
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Chlorobenzene"
      },
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Benzene"
      }
    ],
    "match_options": [
      "2-Methylpropene",
      "Chlorobenzene",
      "2-Bromopropane",
      "Methyl acetate",
      "Propyne",
      "Diethyl ether",
      "Benzene",
      "Ethyl acetate"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Diethyl ether.\nGrid card 2: Ethyl acetate.\nGrid card 3: Chlorobenzene.\nGrid card 4: Benzene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q91_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCO",
        "correctAnswer": "Ethanol"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      },
      {
        "smiles": "CCCCO",
        "correctAnswer": "1-Butanol"
      }
    ],
    "match_options": [
      "Cyclohexanone",
      "Ethanol",
      "Nitrobenzene",
      "Methyl acetate",
      "Benzoyl chloride",
      "Propene",
      "Ethylbenzene",
      "1-Butanol"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Ethanol.\nGrid card 2: Benzoyl chloride.\nGrid card 3: Cyclohexanone.\nGrid card 4: 1-Butanol.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q92_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Medium",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C1CC=CC1",
        "correctAnswer": "Cyclopentene"
      },
      {
        "smiles": "C1CCCCC1=O",
        "correctAnswer": "Cyclohexanone"
      },
      {
        "smiles": "Brc1ccccc1",
        "correctAnswer": "Bromobenzene"
      },
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      }
    ],
    "match_options": [
      "Cyclohexanone",
      "Benzoic acid",
      "3-Pentanone",
      "Aniline",
      "Propene",
      "Bromobenzene",
      "Cyclopentene",
      "Benzaldehyde"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Cyclopentene.\nGrid card 2: Cyclohexanone.\nGrid card 3: Bromobenzene.\nGrid card 4: Propene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q93_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCC=O",
        "correctAnswer": "Propanal"
      },
      {
        "smiles": "CS(=O)C",
        "correctAnswer": "Dimethyl sulfoxide"
      },
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "Aniline"
      },
      {
        "smiles": "CC=C",
        "correctAnswer": "Propene"
      }
    ],
    "match_options": [
      "Dimethyl ether",
      "Dimethyl sulfoxide",
      "Propanal",
      "Propene",
      "Propan-2-ol",
      "Aniline",
      "Butanone",
      "Ethyl benzoate"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Propionaldehyde.\nGrid card 2: Dimethyl sulfoxide.\nGrid card 3: Aniline.\nGrid card 4: Propene.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q94_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(C)(C)O",
        "correctAnswer": "2-Methylpropan-2-ol"
      },
      {
        "smiles": "CCc1ccccc1",
        "correctAnswer": "Ethylbenzene"
      },
      {
        "smiles": "O=C(O)c1ccccc1",
        "correctAnswer": "Benzoic acid"
      },
      {
        "smiles": "COC(C)=O",
        "correctAnswer": "Methyl acetate"
      }
    ],
    "match_options": [
      "Ethylbenzene",
      "Benzoic acid",
      "Methanol",
      "2-Methylpropan-2-ol",
      "1-Butanol",
      "Cyclohexane",
      "Methyl acetate",
      "Ethyl acetate"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: t-Butyl alcohol.\nGrid card 2: Ethylbenzene.\nGrid card 3: Benzoic acid.\nGrid card 4: Methyl acetate.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch03_q95_2",
    "topic": "Stereochemistry Grids",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name for each structural card in this matching grid.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCCC=O",
        "correctAnswer": "Butanal"
      },
      {
        "smiles": "C1CCC=CC1",
        "correctAnswer": "Cyclohexene"
      },
      {
        "smiles": "O=C(Cl)c1ccccc1",
        "correctAnswer": "Benzoyl chloride"
      },
      {
        "smiles": "COC",
        "correctAnswer": "Dimethyl ether"
      }
    ],
    "match_options": [
      "Toluene",
      "Cyclohexene",
      "Dichloromethane",
      "Butanal",
      "Benzoyl chloride",
      "Acetophenone",
      "Dimethyl ether",
      "2-Methylpropene"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect grid matching",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
      "process": "Grid card 1: Butyraldehyde.\nGrid card 2: Cyclohexene.\nGrid card 3: Benzoyl chloride.\nGrid card 4: Dimethyl ether.",
      "result": "Grid mapping successfully matched."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  }
];
