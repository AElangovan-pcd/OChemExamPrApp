// OChemStudyBuddy - McMurry Chapter 10
// Author: A. Elangovan, PhD
var CH10_QUESTIONS = [
  {
    "question_id": "ch10_q1_iupac_branched",
    "topic": "Structure and naming of alkyl halides",
    "difficulty_level": "Easy",
    "question_text": "What is the correct IUPAC name for the branched alkyl halide shown below?",
    "question_smiles": "CC(C)C(Br)C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "3-bromo-2,4-dimethylpentane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-bromo-1,3,4-trimethylbutane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-bromo-1,3-diisopropylpropane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-bromo-2-methyl-4-methylpentane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "IUPAC naming begins with the longest continuous carbon chain, not with the way the structure happens to be drawn on the page. A halogen is cited as a prefix and takes its locant from that chain.",
      "approach": "Step 1: Trace the longest chain. Running through one isopropyl CH, across the C-Br carbon, and out through the other isopropyl CH gives five carbons - pentane, not butane or propane.\nStep 2: Number from whichever end reaches a substituent first. Both ends are equivalent here, so bromine lands on C3 either way.\nStep 3: Place the remaining substituents. A methyl sits on C2 and another on C4.\nStep 4: Assemble the name with identical prefixes collected and cited alphabetically: 3-bromo-2,4-dimethylpentane.",
      "note": "Two methyls on different carbons are collected as 'dimethyl' with both locants; they are never cited as two separate methyl prefixes.",
      "options": {
        "A": "Correct. Pentane is the longest chain, bromine is at C3, and the two methyls at C2 and C4 are collected as 2,4-dimethyl.",
        "B": "This picks a four-carbon parent and then has to invent a methyl at C1 to account for the fifth carbon. A substituent at C1 of the parent chain is a signal the chain was drawn too short - extend it instead.",
        "C": "This names the compound as a substituted propane with two isopropyl groups. Propane is not the longest chain available, and a name built on a chain shorter than the longest is wrong however consistently it is constructed.",
        "D": "The right molecule under the wrong name. Identical substituents on a chain must be collected into one prefix with a multiplying prefix, so 2-methyl-4-methyl has to be written 2,4-dimethyl."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A seven-carbon skeleton: a central carbon carrying a bromine, flanked on each side by a CH group that itself carries two methyl groups."
  },
  {
    "question_id": "ch10_q2_iupac_stereocenter",
    "topic": "Structure and naming of alkyl halides",
    "difficulty_level": "Medium",
    "question_text": "What is the IUPAC name, including the stereochemical descriptor, of the chiral alkyl halide shown below?",
    "question_smiles": "CC(C)(C)[C@@H](Cl)C",
    "options": [
      {
        "option_id": "A",
        "text": "(R)-2-chloro-3,3-dimethylbutane",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "(S)-2-chloro-3,3-dimethylbutane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(R)-3-chloro-2,2-dimethylbutane",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(S)-3-chloro-2,2-dimethylbutane",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "This item needs two independent decisions: which numbering the locant rule requires, and which descriptor the drawn configuration carries. Getting one right and the other wrong still gives a wrong name.",
      "approach": "Step 1: Find the chain. Butane, with two methyls on one carbon and a chlorine on the next.\nStep 2: Choose the numbering. Counting from the chlorine end gives the locant set {2,3,3}; counting from the other end gives {2,2,3}. Compare term by term - the first two agree, then 2 beats 3, so {2,2,3} wins and the name is built as 3-chloro-2,2-dimethylbutane.\nStep 3: Assign the descriptor at the C-Cl carbon. Priorities run Cl > C(CH3)3 > CH3 > H, because the tert-butyl carbon duplicates to (C,C,C) while the methyl duplicates to (H,H,H). With the drawn configuration the sequence traces counterclockwise with hydrogen pointing away, giving S.",
      "note": "The lowest-locant rule compares the whole set of prefix locants at the first point of difference; it does not simply give the halogen the lowest number it can reach.",
      "options": {
        "A": "Wrong on both counts. The locant set {2,3,3} loses to {2,2,3}, and the drawn configuration is S rather than R.",
        "B": "The descriptor is right but the numbering is not: 2-chloro-3,3-dimethyl carries the locant set {2,3,3}, which the lowest-locant rule rejects in favour of {2,2,3}.",
        "C": "The numbering is right and the descriptor is not. With hydrogen pointing away the priority sequence Cl to tert-butyl to methyl runs counterclockwise, which is S.",
        "D": "Correct. The locant set {2,2,3} is lower than {2,3,3}, and the drawn stereocentre is S once tert-butyl is ranked above methyl."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "Structure is (S) per rdCIPLabeler, and {2,2,3} beats {2,3,3} so the locants are 3-chloro-2,2-dimethyl. Key moves A -> D. The 2x2 descriptor-by-locant option set is sound; only the key cell was wrong.",
    "structure_alt": "A six-carbon skeleton: a carbon bearing a chlorine and a methyl group, bonded to a carbon that carries three methyl groups. The bond to chlorine is drawn with wedge-and-dash stereochemistry."
  },
  {
    "question_id": "ch10_q3_iupac_alkene",
    "topic": "Structure and naming of alkyl halides",
    "difficulty_level": "Hard",
    "question_text": "What is the correct IUPAC name for the haloalkene shown below?",
    "question_smiles": "CC(C)C/C(C)=C/Br",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-1-bromo-2,4-dimethylpent-1-ene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-1-bromo-2,4-dimethylpent-1-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)-5-bromo-2,4-dimethylpent-4-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(Z)-5-bromo-2,4-dimethylpent-4-ene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "In an alkene the double bond, not the halogen, controls the numbering, and the geometric descriptor is decided by CIP priority on each alkene carbon separately rather than by which groups look bigger.",
      "approach": "Step 1: Number so the double bond gets the lowest possible locant. Starting at the bromine-bearing alkene carbon makes it C1 and the double bond pent-1-ene; starting at the other end would push the double bond to C4.\nStep 2: Place the substituents on that numbering - bromine at C1, methyl at C2, methyl at C4.\nStep 3: Assign geometry. On C1 the contest is bromine against hydrogen, so bromine wins. On C2 it is the isopropyl-bearing CH2 against a methyl, so the CH2 branch wins. Those two higher-priority groups sit on opposite sides, which is E.",
      "note": "Alkene numbering outranks the halogen prefix, which is why a name that gives bromine the higher locant can still be the correct one.",
      "options": {
        "A": "Correct. Numbering toward the bromine end gives pent-1-ene, and the two CIP-preferred groups lie on opposite sides of the double bond, so the geometry is E.",
        "B": "The skeleton and locants are right but the geometry is inverted. Bromine on C1 and the chain branch on C2 are on opposite sides, not the same side.",
        "C": "This numbers from the wrong end, putting the double bond at C4 when C1 is reachable. The double bond takes priority over the halogen when the numbering direction is chosen.",
        "D": "Wrong on both counts: the double bond is numbered from the wrong end, and the geometry is reported as Z when the priority groups are on opposite sides."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-carbon chain with a branching methyl near one end. At the far end a carbon-carbon double bond carries a bromine on its terminal carbon and a methyl on the internal carbon; the double bond is drawn with defined geometry."
  },
  {
    "question_id": "ch10_q4_classification_allylic",
    "topic": "Structure and naming of alkyl halides",
    "difficulty_level": "Easy",
    "question_text": "Which of the following compounds is classified as a secondary allylic halide?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "3-bromobut-1-ene",
        "smiles": "CC(Br)C=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-bromobut-1-ene",
        "smiles": "C=CCCBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-bromo-3-methylbut-1-ene",
        "smiles": "CC(C)(Br)C=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-bromobut-2-ene",
        "smiles": "CC(Br)=CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two independent labels are being asked for at once. Allylic describes where the halogen sits relative to the double bond; primary, secondary or tertiary describes how many carbons are attached to the carbon holding the halogen.",
      "approach": "Step 1: Locate the alkene, then look at the saturated carbon immediately next to it - that carbon is the allylic position.\nStep 2: Confirm the halogen actually occupies it. A halogen one carbon further out is homoallylic, and a halogen on the double bond itself is vinylic.\nStep 3: Count the carbon substituents on that carbon. In 3-bromobut-1-ene the C-Br carbon carries a methyl and the vinyl group, so it is secondary as well as allylic.",
      "note": "Allylic halides are reactive out of proportion to their structure because the radical or cation formed on ionisation is resonance-delocalised over both ends of the allyl unit.",
      "options": {
        "A": "Correct. The bromine sits on the carbon next to the double bond, and that carbon bears two other carbons, making it a secondary allylic halide.",
        "B": "The bromine here is two carbons from the alkene, not one. That is a homoallylic primary halide, and it gains none of the resonance stabilisation an allylic position confers.",
        "C": "This is allylic, but the carbon bearing bromine also carries two methyls plus the vinyl group, so it is tertiary rather than secondary.",
        "D": "The bromine is attached directly to a carbon of the double bond, which makes it vinylic. Vinylic halides are notably unreactive, the opposite of the allylic case."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch10_q5_boiling_point_trends",
    "topic": "Structure and naming of alkyl halides",
    "difficulty_level": "Medium",
    "question_text": "Arrange the following alkyl halides in order of increasing boiling point:\nI. 2-chloro-2-methylpropane\nII. 2-chlorobutane\nIII. 1-chlorobutane\nIV. 1-bromobutane",
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
        "text": "I < III < II < IV",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "II < I < III < IV",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Boiling point in this series is set by two things working together: how many electrons the molecule has, which controls the strength of its London dispersion forces, and how much surface the molecules can present to each other.",
      "approach": "Step 1: Separate the three chlorides from the bromide. Bromine is far more polarisable than chlorine, so 1-bromobutane boils highest of the four.\nStep 2: Order the three C4 chlorides by shape. All three have the same formula, so only branching separates them.\nStep 3: Branching makes a molecule more spherical and cuts the contact area, which lowers the boiling point. 2-chloro-2-methylpropane is the most compact and boils lowest at about 51 degrees, 2-chlorobutane follows near 68, and the unbranched 1-chlorobutane reaches about 78.\nStep 4: Combining gives I < II < III < IV.",
      "note": "Branching lowers boiling point but raises melting point, because a compact symmetric molecule packs into a crystal lattice more readily even as it loses surface contact in the liquid.",
      "options": {
        "A": "Correct. The two chlorobutanes are separated by branching, and 1-bromobutane tops the list because the larger, more polarisable bromine gives the strongest dispersion forces.",
        "B": "This is the correct sequence read backwards. It would require branching to raise boiling point and the heavier halogen to lower it, and both of those run the wrong way.",
        "C": "This puts the straight-chain 1-chlorobutane below the branched 2-chlorobutane. More branching means less surface contact and a lower boiling point, so the unbranched isomer must be the higher of the two.",
        "D": "This ranks 2-chlorobutane below the doubly branched 2-chloro-2-methylpropane. The more heavily branched compound is the more compact one and boils lower, not higher."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "question_smiles dropped: it drew only compound III of the four being compared, which mis-signals that the item is about that one molecule (the Ch 7 decorative-structure cut)."
  },
  {
    "question_id": "ch10_q6_bond_strength_trends",
    "topic": "Structure and naming of alkyl halides",
    "difficulty_level": "Medium",
    "question_text": "Which of the following statements correctly describes the trend in carbon-halogen bond length and bond dissociation energy (BDE) going from fluoromethane ($CH_3F$) to iodomethane ($CH_3I$)?",
    "question_smiles": "CF.CI",
    "options": [
      {
        "option_id": "A",
        "text": "Bond length increases and BDE decreases from $CH_3F$ to $CH_3I$.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Bond length decreases and BDE increases from $CH_3F$ to $CH_3I$.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both bond length and BDE increase from $CH_3F$ to $CH_3I$.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both bond length and BDE decrease from $CH_3F$ to $CH_3I$.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Descending a group of the periodic table, the halogen's valence shell lies further from its nucleus and is more diffuse. Both the length of the bond it forms to carbon and the energy needed to break that bond follow from this.",
      "approach": "Step 1: Track atomic size. Fluorine to iodine is a steady increase in covalent radius, so the C-X bond lengthens all the way down.\nStep 2: Ask what a longer bond does to overlap. The halogen's valence orbital is larger and more diffuse, so it overlaps the compact carbon 2p orbital more poorly at greater distance.\nStep 3: Weaker overlap means a weaker bond, so the bond dissociation energy falls as the length rises - roughly 460 kJ/mol for C-F down to about 240 for C-I.\nStep 4: Length up, BDE down.",
      "note": "This inverse relationship is why alkyl iodides are the best substrates and alkyl fluorides the worst in reactions that require the carbon-halogen bond to break.",
      "options": {
        "A": "Correct. The C-X bond lengthens from fluorine to iodine while orbital overlap deteriorates, so the dissociation energy falls as the bond grows.",
        "B": "Both halves are inverted. Iodine is much larger than fluorine, so its bond to carbon is the longer one, and the longer bond is the weaker one.",
        "C": "The bond length is right but the energy is not. A bond cannot get both longer and stronger across this series - the poorer orbital overlap at longer distance is exactly what weakens it.",
        "D": "This has the bond shortening toward iodine, which contradicts the increase in atomic radius down the group, even though the falling BDE is correctly stated."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "question_smiles was CH3I alone, one endpoint of a CH3F-to-CH3I comparison. Dot-disconnected so the drawing shows the comparison the stem actually makes.",
    "structure_alt": "Two separate one-carbon molecules drawn side by side: a carbon bonded to fluorine, and a carbon bonded to iodine."
  },
  {
    "question_id": "ch10_q7_bicyclic_nomenclature",
    "topic": "Structure and naming of alkyl halides",
    "difficulty_level": "Hard",
    "question_text": "What is the correct IUPAC name for the bicyclic organohalide shown below?",
    "question_smiles": "ClC1CC2CCC1C2",
    "options": [
      {
        "option_id": "A",
        "text": "2-chlorobicyclo[2.2.1]heptane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-chlorobicyclo[2.2.2]octane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5-chlorobicyclo[2.2.1]heptane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-chlorobicyclo[3.2.0]heptane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A bicyclic name is built from the total number of ring atoms and the sizes of the three bridges joining the two bridgehead carbons, cited in descending order inside the brackets.",
      "approach": "Step 1: Count the ring carbons. Seven, so the parent is a heptane.\nStep 2: Find the two bridgeheads - the atoms shared by both rings - and count the carbons in each of the three bridges between them: two, two, and one.\nStep 3: Cite those in descending order to get bicyclo[2.2.1]heptane.\nStep 4: Number from a bridgehead, around the longest bridge first, then the next longest, and take the direction that gives the chlorine the lower locant. That direction reaches it at C2.",
      "note": "The one-carbon bridge is always numbered last, which is why the bridging carbon in this skeleton is C7 no matter which bridgehead the numbering starts from.",
      "options": {
        "A": "Correct. Seven ring carbons with bridges of two, two and one make bicyclo[2.2.1]heptane, and numbering around the longer bridges first reaches the chlorine at C2.",
        "B": "The bracket descriptor here sums to eight ring carbons plus the bridgeheads, describing a larger cage than the seven-carbon skeleton drawn.",
        "C": "The right molecule under the wrong name. Numbering may start at either bridgehead and run in either direction, so the direction that reaches the chlorine at C2 must be chosen over one that reaches it at C5.",
        "D": "The bracket describes a fused three-and-two bridge arrangement with a zero bridge, which is a four-membered ring fused to a five-membered one - not the bridged cage shown."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A rigid two-ring cage of seven carbons sharing two bridgehead atoms, with a one-carbon bridge across the top. A chlorine is attached to one of the carbons in a two-carbon bridge."
  },
  {
    "question_id": "ch10_q8_dipole_moments",
    "topic": "Structure and naming of alkyl halides",
    "difficulty_level": "Hard",
    "question_text": "Although fluorine is more electronegative than chlorine, chloromethane ($CH_3Cl$, $\\mu = 1.87\\text{ D}$) has a larger dipole moment than fluoromethane ($CH_3F$, $\\mu = 1.85\\text{ D}$). Which of the following statements explains this phenomenon?",
    "question_smiles": "CF.CCl",
    "options": [
      {
        "option_id": "A",
        "text": "The dipole moment is the product of charge separation and bond length; the C-Cl bond is sufficiently longer than the C-F bond to outweigh the difference in electronegativity.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The fluorine atom in fluoromethane donates electron density back to carbon via resonance, reducing the dipole moment.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Fluoromethane exists as a dimer in the gas phase, which cancels out its net dipole moment.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The C-F bond has more covalent character than the C-Cl bond, resulting in less actual charge separation.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A bond dipole is not electronegativity alone. It is the magnitude of the separated charge multiplied by the distance over which that charge is separated, so a bond can be less polarised per unit length and still carry the larger moment.",
      "approach": "Step 1: Write the definition, dipole moment equals charge times distance. Two factors, not one.\nStep 2: Compare the charge term. Fluorine is the more electronegative atom, so the C-F bond does separate charge more effectively.\nStep 3: Compare the distance term. The C-Cl bond is roughly 1.78 angstroms against about 1.39 for C-F, a difference of nearly thirty percent.\nStep 4: The longer bond length in chloromethane more than compensates for its smaller charge separation, so its dipole moment edges ahead at 1.87 D against 1.85 D.",
      "note": "The two values differ by barely one percent, so this is a near-tie in which the length term only just wins - not a reversal of the electronegativity trend itself.",
      "options": {
        "A": "Correct. The dipole moment is a product of charge and distance, and the substantially longer C-Cl bond outweighs fluorine's advantage in charge separation.",
        "B": "Fluorine has no pi system to donate into here; the carbon of a saturated methyl group has no empty p orbital to accept density. Back-donation of this kind requires an adjacent unsaturated centre.",
        "C": "Fluoromethane is a gas that shows no such association, and dimerisation would not be invoked to explain a measured molecular dipole in any case.",
        "D": "This has the polarity backwards. The C-F bond is the more ionic of the two, not the more covalent, which is precisely why the explanation has to rest on bond length instead."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "question_smiles was CH3F alone; the stem compares CH3F with CH3Cl, so both are now drawn.",
    "structure_alt": "Two separate one-carbon molecules drawn side by side: a carbon bonded to fluorine, and a carbon bonded to chlorine."
  },
  {
    "question_id": "ch10_q9_density_trends",
    "topic": "Structure and naming of alkyl halides",
    "difficulty_level": "Medium",
    "question_text": "Which of the following organohalides is less dense than water ($d < 1.00\\text{ g/mL}$) at room temperature?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "1-chlorobutane",
        "smiles": "CCCCCl",
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
        "text": "Dichloromethane",
        "smiles": "ClCCl",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Iodomethane",
        "smiles": "CI",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Whether an organohalide sinks or floats in water is decided almost entirely by which halogen it carries and how much hydrocarbon is attached to dilute that halogen's mass.",
      "approach": "Step 1: Sort by halogen. Bromine and iodine are heavy enough that essentially every simple alkyl bromide and iodide exceeds the density of water.\nStep 2: Among the chlorides, weigh the chlorine against the carbon skeleton. Dichloromethane packs two chlorines onto a single carbon and reaches about 1.33 g/mL.\nStep 3: 1-chlorobutane spreads one chlorine over four carbons, which dilutes it to roughly 0.89 g/mL - below water.",
      "note": "This is why a dichloromethane extraction forms the lower layer while a diethyl ether extraction forms the upper one, a distinction worth knowing before reaching for a separatory funnel.",
      "options": {
        "A": "Correct. One chlorine spread over a four-carbon chain gives about 0.89 g/mL, so this is the only one of the four that floats on water.",
        "B": "Swapping chlorine for bromine on the same butyl skeleton takes the density to roughly 1.28 g/mL. Bromine is heavy enough that four carbons cannot dilute it below water.",
        "C": "Two chlorines on a single carbon give about 1.33 g/mL. There is almost no hydrocarbon here to offset the halogen mass.",
        "D": "Iodine is the heaviest halogen in the set and it sits on a single carbon, giving roughly 2.28 g/mL - the densest of the four by a wide margin."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch10_q10_gem_vic_dihalides",
    "topic": "Structure and naming of alkyl halides",
    "difficulty_level": "Medium",
    "question_text": "Which of the following IUPAC names represents a geminal dihalide?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "1,1-dichlorobutane",
        "smiles": "CCCC(Cl)Cl",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,2-dichlorobutane",
        "smiles": "CCC(Cl)CCl",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,3-dichlorobutane",
        "smiles": "CC(Cl)CCCl",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,4-dichlorobutane",
        "smiles": "ClCCCCCl",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Geminal and vicinal are positional terms borrowed from Latin - geminal for twins on one carbon, vicinal for neighbours on adjacent carbons. The locants in the name are what settle which applies.",
      "approach": "Step 1: Read the two locants in each name and ask whether they are the same number or different.\nStep 2: Identical locants mean both halogens sit on one carbon, which is geminal. In 1,1-dichlorobutane both chlorines are on C1.\nStep 3: Locants differing by one mean adjacent carbons, which is vicinal. Anything further apart carries neither label.",
      "note": "The distinction earns its keep in synthesis: a geminal dihalide comes from adding two equivalents of HX to an alkyne, whereas a vicinal dihalide comes from adding one equivalent of X2 across an alkene.",
      "options": {
        "A": "Correct. The repeated locant 1,1 places both chlorines on the same carbon, which is what geminal means.",
        "B": "Locants 1 and 2 put the chlorines on adjacent carbons. That is the vicinal arrangement, the one produced by adding bromine or chlorine across a double bond.",
        "C": "Chlorines on C1 and C3 are separated by an intervening carbon, so this is neither geminal nor vicinal - the terms only cover the same-carbon and adjacent-carbon cases.",
        "D": "Locants 1 and 4 place the chlorines at opposite ends of the butane chain, about as far from a geminal relationship as this skeleton allows."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch10_q11_initiation_step_bde",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Medium",
    "question_text": "In the radical chlorination of methane, why does initiation involve the homolytic cleavage of the $Cl-Cl$ bond rather than a $C-H$ bond of methane?",
    "question_smiles": "C",
    "options": [
      {
        "option_id": "A",
        "text": "The $Cl-Cl$ bond is significantly weaker (BDE $\\approx 243\\text{ kJ/mol}$) than the $C-H$ bond (BDE $\\approx 439\\text{ kJ/mol}$), requiring less energy to undergo homolysis.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The $C-H$ bond is polar, which favors heterolytic cleavage over homolytic cleavage.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Chlorine is more electronegative than carbon, which stabilizes the resulting radical intermediate.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methane lacks chromophores and cannot absorb light of any wavelength.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Initiation is the step that manufactures the first radicals from a closed-shell precursor, and light or heat will break whichever bond in the mixture needs the least energy to homolyse.",
      "approach": "Step 1: List the bonds available to break: Cl-Cl in chlorine and C-H in methane.\nStep 2: Compare their homolytic bond dissociation energies. Cl-Cl is about 243 kJ/mol; a methane C-H is about 439 kJ/mol, nearly twice as much.\nStep 3: Ultraviolet light supplies enough energy per photon to cleave the weaker bond readily while the stronger one is essentially untouched. Two chlorine radicals form, and everything after that is propagation.",
      "note": "Initiation happens only a handful of times; each chlorine radical it creates goes on to drive thousands of propagation cycles before termination removes it.",
      "options": {
        "A": "Correct. Homolysis of the halogen-halogen bond costs roughly 243 kJ/mol against about 439 for a methane C-H, so light breaks the chlorine molecule and leaves methane intact.",
        "B": "A radical chain reaction proceeds entirely by homolysis; heterolytic cleavage of a C-H bond in the gas phase under light is not on the table, and the polarity of the bond is not why it survives.",
        "C": "Electronegativity is not a stabilising influence on a radical, and it has nothing to do with which bond breaks first. The question is one of bond strength, not radical stability.",
        "D": "The absence of a chromophore in methane is true but beside the point. Chlorine absorbs the light and provides the radicals; methane is consumed in propagation, not initiation."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A single carbon atom with four hydrogens, drawn as the simplest alkane."
  },
  {
    "question_id": "ch10_q12_propagation_thermodynamics",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Hard",
    "question_text": "Consider the two propagation steps in the radical chlorination of methane:\n1) $\\cdot Cl + CH_4 \\rightarrow \\cdot CH_3 + HCl$\n2) $\\cdot CH_3 + Cl_2 \\rightarrow CH_3Cl + \\cdot Cl$\nWhich of the following statements correctly describes the thermodynamics of these steps?",
    "question_smiles": "C",
    "options": [
      {
        "option_id": "A",
        "text": "Step 1 is slightly endothermic, and Step 2 is highly exothermic, resulting in an overall exothermic propagation cycle.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Step 1 is highly exothermic, and Step 2 is slightly endothermic, resulting in an overall endothermic propagation cycle.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both Step 1 and Step 2 are endothermic, requiring constant energy input to sustain propagation.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both Step 1 and Step 2 are highly exothermic, causing the reaction to run at extremely high rates.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The enthalpy of any step is the total energy of the bonds broken minus the total energy of the bonds formed. Each propagation step breaks one bond and makes one, so its sign is set by which of the two is stronger.",
      "approach": "Step 1: Step 1 breaks a methane C-H at about 439 kJ/mol and forms H-Cl at about 432. Net roughly +7 kJ/mol, a slightly uphill abstraction.\nStep 2: Step 2 breaks Cl-Cl at about 243 kJ/mol and forms a C-Cl bond at about 351. Net roughly -108 kJ/mol, strongly downhill.\nStep 3: Add the two steps. The sum is about -101 kJ/mol, so the propagation cycle as a whole releases energy and, once started, sustains itself.",
      "note": "The small uphill cost of the first step is what makes chlorination fast but unselective; it is the same step that becomes strongly endothermic for bromine, and that difference is the whole story of bromine's selectivity.",
      "options": {
        "A": "Correct. Hydrogen abstraction is marginally endothermic while the chlorine-transfer step releases over 100 kJ/mol, so the cycle is exothermic overall and self-propagating.",
        "B": "This swaps the two signs. Breaking a 439 kJ/mol C-H bond to form a 432 kJ/mol H-Cl bond cannot be highly exothermic, and forming a strong C-Cl bond from a weak Cl-Cl bond cannot be endothermic.",
        "C": "The second step forms a C-Cl bond that is about 108 kJ/mol stronger than the Cl-Cl bond it breaks. That step is strongly exothermic, not endothermic, and it is what pays for the cycle.",
        "D": "The first step breaks a bond slightly stronger than the one it makes and is therefore mildly endothermic, not highly exothermic. The rate of chlorination is high, but not for this reason."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A single carbon atom with four hydrogens, drawn as the simplest alkane."
  },
  {
    "question_id": "ch10_q13_chlorination_selectivity",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Hard",
    "question_text": "Under free-radical conditions, monochlorination of 2-methylbutane yields a mixture of isomers. Given that the relative reactivity of primary ($1^\\circ$), secondary ($2^\\circ$), and tertiary ($3^\\circ$) $C-H$ bonds toward chlorination at $25^\\circ\\text{C}$ is $1.0 : 3.9 : 5.2$, what is the predicted percentage of 2-chloro-2-methylbutane in the product mixture?",
    "question_smiles": "CCC(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "24%",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "41%",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "50%",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "8%",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The product distribution from a radical halogenation combines two factors: how many hydrogens of each kind are present, and how reactive each kind is. Leaving out either factor gives a wrong number.",
      "approach": "Step 1: Count the hydrogens by type in 2-methylbutane. Three methyls give nine primary, the CH2 gives two secondary, and the branch CH gives one tertiary - twelve in all.\nStep 2: Weight each count by its relative reactivity: primary 9 x 1.0 = 9.0, secondary 2 x 3.9 = 7.8, tertiary 1 x 5.2 = 5.2.\nStep 3: Add the weighted values to 22.0, then take the tertiary share. 5.2 divided by 22.0 is 0.236, so 2-chloro-2-methylbutane is about 24 percent of the mixture.",
      "note": "The single tertiary hydrogen accounts for nearly a quarter of the product despite being one hydrogen in twelve - and the same calculation for bromine, with its 1600-to-1 preference, puts that product at about 90 percent.",
      "options": {
        "A": "Correct. Weighting one tertiary hydrogen at 5.2 against nine primary at 1.0 and two secondary at 3.9 gives 5.2 out of 22.0, which is 24 percent.",
        "B": "This is the combined share of the two primary chlorides, 9.0 out of 22.0. It lumps both primary products together and answers a question that was not asked.",
        "C": "This treats the reactivity ratios as if there were one hydrogen of each kind - 5.2 out of 10.1 - and ignores that primary hydrogens outnumber the tertiary one nine to one.",
        "D": "This is one tertiary hydrogen out of twelve total, pure statistics with the reactivity difference ignored. It underestimates the tertiary product by a factor of three."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a methyl branch on the second carbon."
  },
  {
    "question_id": "ch10_q14_bromination_selectivity",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Medium",
    "question_text": "Reaction of 2-methylbutane with $Br_2$ in the presence of light yields one major monobrominated product. Given the relative reactivity of $1^\\circ : 2^\\circ : 3^\\circ$ hydrogens toward bromination is $1 : 82 : 1600$, what is this major product?",
    "question_smiles": "CCC(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "2-bromo-2-methylbutane",
        "smiles": "CCC(Br)(C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-bromo-3-methylbutane",
        "smiles": "CC(Br)C(C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-bromo-2-methylbutane",
        "smiles": "CCC(C)CBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-bromo-3-methylbutane",
        "smiles": "CC(C)CCBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Bromine radical is far more selective than chlorine radical because its hydrogen abstraction is endothermic and its transition state resembles the alkyl radical. A single tertiary hydrogen therefore outcompetes every other position in the molecule.",
      "approach": "Step 1: Identify every distinct kind of hydrogen in 2-methylbutane: nine primary, two secondary, one tertiary.\nStep 2: Apply the bromination weighting of 1 : 82 : 1600. The tertiary position scores 1600, the secondary 164, the primary 9.\nStep 3: Bromine ends up on the branch carbon in about 90 percent of the product, giving 2-bromo-2-methylbutane as the single major product.",
      "note": "The same substrate under chlorination gives four products with no majority; the reagent, not the substrate, decides whether radical halogenation is a clean synthesis or a mixture.",
      "options": {
        "A": "Correct. The tertiary C-H is the weakest bond in the molecule and bromine's 1600-fold preference for it makes the tertiary bromide the overwhelming product.",
        "B": "Bromine on the secondary carbon is the second most favoured outcome, but even with two hydrogens there its weighted score of 164 is dwarfed by the tertiary position's 1600.",
        "C": "This is a primary bromide from one of the methyls next to the branch. With a relative reactivity of 1, primary positions contribute a fraction of a percent under bromination.",
        "D": "This is the primary bromide from the far methyl. Three hydrogens at a relative reactivity of 1 cannot compete with a single hydrogen weighted at 1600."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a methyl branch on the second carbon."
  },
  {
    "question_id": "ch10_q15_hammond_postulate",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Hard",
    "question_text": "According to the Hammond Postulate, why is radical bromination of alkanes highly selective for tertiary positions compared to radical chlorination?",
    "question_smiles": "C",
    "options": [
      {
        "option_id": "A",
        "text": "Hydrogen abstraction by a bromine radical is endothermic, leading to a late, product-like transition state where the radical character is highly developed and stabilized by alkyl groups.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Hydrogen abstraction by a chlorine radical is endothermic, leading to an early, reactant-like transition state where alkyl substituents have no effect.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Bromine is a larger radical and cannot access primary hydrogens due to steric hindrance.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The transition state of chlorination is late and resembles the carbocation intermediate, which has lower stability requirements.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Hammond postulate states that a transition state resembles whichever species it is closer to in energy. For an endothermic step that is the product, so the transition state carries most of the product's character - including its stability differences.",
      "approach": "Step 1: Compare the abstraction thermochemistry. H-Br at about 366 kJ/mol is too weak to pay for breaking a C-H bond, so abstraction by bromine radical is endothermic; H-Cl at about 432 kJ/mol nearly does, so chlorine's abstraction is close to thermoneutral.\nStep 2: Apply Hammond. The endothermic bromine step has a late transition state that looks like the alkyl radical, with the C-H bond mostly broken.\nStep 3: Radical stability now matters in the transition state itself. A tertiary radical is more stable than a primary one, so the tertiary transition state is lower, and bromine chooses it decisively.",
      "note": "This is the reactivity-selectivity principle in its cleanest form: the reagent that is less reactive is the more selective, because it must wait for the best transition state rather than take the first one.",
      "options": {
        "A": "Correct. Endothermic abstraction means a late, radical-like transition state, and a late transition state feels the full difference between tertiary and primary radical stability.",
        "B": "Abstraction by chlorine is nearly thermoneutral, not endothermic, and its early transition state is exactly why alkyl substitution has little effect - but that explains chlorine's lack of selectivity, not bromine's selectivity.",
        "C": "Sterics are not the mechanism. Primary hydrogens are the most exposed in the molecule, and bromine's radius is not what keeps it away from them; the selectivity is energetic.",
        "D": "Chlorination has an early transition state, not a late one, and a radical halogenation has no carbocation intermediate anywhere in it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A single carbon atom with four hydrogens, drawn as the simplest alkane."
  },
  {
    "question_id": "ch10_q16_stereochemistry_butane_chlorination",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Medium",
    "question_text": "Photochemical monochlorination of butane yields 2-chlorobutane. Which of the following statements correctly describes the stereochemistry of the 2-chlorobutane obtained?",
    "question_smiles": "CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "It is a 1:1 racemic mixture of (R)- and (S)-2-chlorobutane because the intermediate sec-butyl radical is planar and achiral.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It is optically active (S)-2-chlorobutane due to asymmetric induction by the neighboring methyl group.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It is a meso compound because the starting material is symmetric.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It is optically active (R)-2-chlorobutane because chlorine attacks from the less hindered face.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A radical formed at a carbon that will become a stereocentre is sp2-hybridised and trigonal planar. Nothing about a planar, achiral intermediate can prefer one face over the other, so the product it gives is racemic.",
      "approach": "Step 1: Abstract a hydrogen from C2 of butane. The sec-butyl radical that forms is planar at C2 with its unpaired electron in a p orbital.\nStep 2: Ask what chlorine sees when it approaches. Both faces of the planar radical are equivalent, and there is no existing stereocentre elsewhere to differentiate them.\nStep 3: Chlorine transfer from Cl2 therefore occurs from either face at the same rate, producing (R)- and (S)-2-chlorobutane in exactly equal amounts.",
      "note": "This outcome holds for any radical substitution that creates a single new stereocentre in an achiral substrate; it is only when a stereocentre already exists that the two faces become distinguishable.",
      "options": {
        "A": "Correct. The sec-butyl radical is planar at the reacting carbon and chlorine attacks either face equally, so the product is a racemic mixture.",
        "B": "The adjacent methyl group cannot induce asymmetry; it is not itself a stereocentre and the radical is symmetric with respect to its two faces.",
        "C": "A meso compound needs at least two stereocentres arranged with an internal mirror plane. 2-chlorobutane has one stereocentre and cannot be meso.",
        "D": "Both faces of the planar sec-butyl radical are equally hindered - the substituents lie in the same plane as the radical carbon - so there is no less hindered face to attack."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "A and C rendered the identical picture while asserting opposite things. A racemic mixture has no single structure, so the options carry no SMILES.",
    "structure_alt": "An unbranched four-carbon chain."
  },
  {
    "question_id": "ch10_q17_diastereotopic_chlorination",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Hard",
    "question_text": "Photochemical monochlorination of (S)-2-fluorobutane at C3 yields a mixture of 2-chloro-3-fluorobutanes. Which of the following statements describes the product distribution at C3?",
    "question_smiles": "CC[C@@H](F)C",
    "options": [
      {
        "option_id": "A",
        "text": "An unequal mixture of diastereomers is formed because the pre-existing stereocenter at C2 makes the two faces of the C3 radical intermediate diastereotopic.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A 1:1 racemic mixture of enantiomers is formed because the C3 radical intermediate is planar and achiral.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A single meso compound is formed exclusively.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "No reaction occurs at C3 because the electronegative fluorine atom deactivates the adjacent position entirely.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When a new stereocentre is created next to one that already exists, the two possible products are diastereomers rather than enantiomers, and the two faces of the intermediate are no longer equivalent.",
      "approach": "Step 1: Note that C2 carries a stereocentre that the reaction does not touch.\nStep 2: Form the radical at C3. It is planar at C3, as any carbon radical is, but its two faces now sit in different environments because the (S)-configured C2 is adjacent.\nStep 3: Chlorine transfer to the two faces proceeds through diastereomeric transition states with different energies, so the (2S,3R) and (2S,3S) products form in unequal amounts.",
      "note": "The difference in rates is usually modest for a radical, so the selectivity is real but small; the essential point is that it exists at all, which it cannot for a substrate with no prior stereocentre.",
      "options": {
        "A": "Correct. The intact C2 stereocentre makes the two faces of the planar C3 radical diastereotopic, so the two diastereomeric products form at different rates.",
        "B": "The products cannot be enantiomers because both retain the same (S) configuration at C2. Two compounds sharing one stereocentre and differing at another are diastereomers.",
        "C": "A meso compound requires an internal mirror plane, which a molecule with one carbon bearing fluorine and another bearing chlorine cannot possess.",
        "D": "An adjacent fluorine slows radical abstraction somewhat but does not shut it off; the question states that C3 chlorination products are in fact obtained."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "A and B carried the same SMILES while making opposite claims. Product distribution is a statement, not a structure.",
    "structure_alt": "A four-carbon chain with a fluorine on the second carbon, drawn with wedge-and-dash stereochemistry at that carbon."
  },
  {
    "question_id": "ch10_q18_radical_stability_ranking",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Medium",
    "question_text": "Which of the following lists carbon radicals in order of decreasing stability?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "allylic > tertiary ($3^\\circ$) > secondary ($2^\\circ$) > vinylic",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "tertiary ($3^\\circ$) > allylic > secondary ($2^\\circ$) > vinylic",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "vinylic > secondary ($2^\\circ$) > tertiary ($3^\\circ$) > allylic",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "allylic > secondary ($2^\\circ$) > tertiary ($3^\\circ$) > vinylic",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Radical stability follows the same ordering as carbocation stability - resonance delocalisation first, then alkyl substitution - and for the same reason: an electron-deficient carbon is stabilised by anything that spreads the deficiency out.",
      "approach": "Step 1: Place resonance at the top. An allylic radical is delocalised over two carbons, which outweighs any amount of alkyl substitution.\nStep 2: Order the localised radicals by substitution, tertiary above secondary, because each additional alkyl group donates by hyperconjugation and spreads the unpaired electron.\nStep 3: Put vinylic at the bottom. Its unpaired electron sits in an sp2 orbital lying in the molecular plane, cannot overlap with the pi bond, and is held closer to the nucleus by the higher s character.",
      "note": "The bond dissociation energies tell the same story: an allylic C-H at about 370 kJ/mol is far easier to break than a vinylic C-H at about 465, with the tertiary and secondary values in between.",
      "options": {
        "A": "Correct. Resonance beats substitution, substitution ranks tertiary over secondary, and the vinylic radical with its in-plane orbital is the least stable of the set.",
        "B": "This puts tertiary above allylic. Delocalisation over two carbons stabilises a radical more than three alkyl groups on one carbon do.",
        "C": "This is the correct order reversed. A vinylic radical is the least stable, not the most, because its orbital lies in the plane of the alkene and gains nothing from it.",
        "D": "Allylic is rightly first and vinylic rightly last, but secondary and tertiary are swapped. More alkyl substitution stabilises a radical, so tertiary outranks secondary."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "question_smiles dropped: it drew ethene, which is not among the radicals being ranked and cues 'vinylic' for no reason."
  },
  {
    "question_id": "ch10_q19_bromination_methylcyclohexane",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Medium",
    "question_text": "What is the major monobrominated product of the reaction of methylcyclohexane with $Br_2$ in the presence of light?",
    "question_smiles": "CC1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "1-bromo-1-methylcyclohexane",
        "smiles": "CC1(Br)CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(bromomethyl)cyclohexane",
        "smiles": "BrCC1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "trans-1-bromo-2-methylcyclohexane",
        "smiles": "C[C@@H]1CCCC[C@H]1Br",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-bromo-4-methylcyclohexane",
        "smiles": "CC1CCC(Br)CC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Bromine radical abstracts the weakest C-H bond available, and in a monosubstituted cycloalkane the weakest is the single tertiary hydrogen at the ring carbon that carries the substituent.",
      "approach": "Step 1: Classify the hydrogens. Methylcyclohexane has three primary hydrogens on the methyl, ten secondary hydrogens around the ring, and one tertiary hydrogen at the substituted ring carbon.\nStep 2: Weight them for bromination, roughly 1 : 82 : 1600. The single tertiary hydrogen scores 1600 against 820 for all ten secondary and 3 for the methyl.\nStep 3: Bromine therefore lands on the ring carbon that already bears the methyl, giving 1-bromo-1-methylcyclohexane as the dominant product.",
      "note": "The product has no stereocentre - the carbon bearing bromine also bears the methyl and two equivalent ring arms - so unlike a secondary ring bromide there is no cis/trans pair to worry about.",
      "options": {
        "A": "Correct. The tertiary hydrogen at the methyl-bearing ring carbon is the weakest in the molecule, and bromine's strong preference for it makes the tertiary bromide the major product.",
        "B": "Bromine on the methyl carbon would require abstracting a primary hydrogen, the strongest C-H in the molecule and the one bromine radical is least willing to take.",
        "C": "Bromine on a ring CH2 next to the methyl carbon is a secondary product. Even with ten secondary hydrogens available, their combined weighting is about half that of the one tertiary hydrogen.",
        "D": "A secondary bromide on the carbon opposite the methyl is possible in principle but is one of the minor secondary products; it does not compete with the tertiary position."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "Option D was drawn as a cyclobutane (C5H9Br) under a cyclohexane name - eliminable by counting carbons.",
    "structure_alt": "A six-membered saturated ring with a single methyl substituent."
  },
  {
    "question_id": "ch10_q20_radical_initiators",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Medium",
    "question_text": "Which of the following compounds is a common radical initiator containing a weak peroxide ($O-O$) bond?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Benzoyl peroxide",
        "smiles": "O=C(OOC(=O)c1ccccc1)c2ccccc2",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Azobisisobutyronitrile (AIBN)",
        "smiles": "CC(C)(C#N)/N=N/C(C)(C)C#N",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dimethyl sulfoxide (DMSO)",
        "smiles": "CS(=O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "N-bromosuccinimide (NBS)",
        "smiles": "O=C1CCC(=O)N1Br",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A radical initiator is a compound with one bond weak enough to homolyse under mild heating or light, releasing radicals that start a chain. The oxygen-oxygen single bond, at roughly 150 kJ/mol, is one of the weakest in organic chemistry.",
      "approach": "Step 1: Look for an O-O single bond in each structure. Only benzoyl peroxide has one, between its two acyl groups.\nStep 2: Confirm the mechanism. Gentle heating cleaves that bond to give two benzoyloxy radicals, which lose CO2 to give phenyl radicals; either species can abstract a hydrogen and begin propagation.\nStep 3: Eliminate the others by function: AIBN initiates through an N=N bond and nitrogen loss, NBS is a bromine source rather than an initiator, and DMSO is a solvent.",
      "note": "AIBN is the other workhorse initiator, but it works by expelling N2 from an azo linkage rather than by peroxide homolysis - the stem's requirement for an O-O bond is what separates the two.",
      "options": {
        "A": "Correct. Benzoyl peroxide carries a weak O-O bond that homolyses on warming to give benzoyloxy radicals, the classic way to start a radical chain.",
        "B": "AIBN is a genuine radical initiator, but it contains an azo N=N linkage and decomposes by losing nitrogen gas. There is no peroxide bond anywhere in it.",
        "C": "Dimethyl sulfoxide is a polar aprotic solvent. It has an S=O bond, not an O-O bond, and does not decompose into radicals under ordinary conditions.",
        "D": "N-bromosuccinimide supplies bromine in allylic brominations; it contains an N-Br bond rather than a peroxide and is not itself the initiator - a trace of peroxide or light does that job."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch10_q21_ether_autooxidation",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Hard",
    "question_text": "Diisopropyl ether is notoriously prone to forming explosive peroxides when exposed to air and light. Which of the following intermediates is responsible for the initiation of this autooxidation?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "A carbon radical at the tertiary carbon adjacent to the oxygen atom",
        "smiles": "CC(C)O[C](C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A carbon radical at one of the primary methyl carbons",
        "smiles": "CC(C)OC(C)[CH2]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "An oxygen radical formed by homolytic cleavage of the C-O ether bond",
        "smiles": "CC(C)[O]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The intact ether reacts directly with triplet oxygen; no radical intermediate is required",
        "smiles": "CC(C)OC(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Autooxidation is a radical chain in which a C-H bond alpha to an ether oxygen is abstracted, and the resulting carbon radical captures O2. The alpha C-H is the target because the adjacent oxygen lone pair delocalises the radical that forms there.",
      "approach": "Step 1: Find the weakest C-H bond. In diisopropyl ether each isopropyl group has one hydrogen on a tertiary carbon that is also bonded to oxygen - tertiary and alpha-oxy at once.\nStep 2: Abstract that hydrogen. The radical left behind is stabilised both by the two methyls and by overlap with the oxygen lone pair.\nStep 3: That carbon radical adds triplet oxygen to give a peroxyl radical, which abstracts another alpha hydrogen to give the hydroperoxide and continue the chain. Accumulated hydroperoxides are what make old ether dangerous to distil.",
      "note": "Diisopropyl ether is worse than diethyl ether precisely because its alpha carbon is tertiary; the same reasoning explains why tetrahydrofuran, with two alpha CH2 groups, also forms peroxides on standing.",
      "options": {
        "A": "Correct. Hydrogen abstraction at the tertiary carbon bonded to oxygen gives the most stabilised radical available, and that radical is what captures O2 to start the peroxide chain.",
        "B": "A primary methyl radical is neither alkyl-stabilised nor alpha to the oxygen, so it is the least favourable radical the molecule can form.",
        "C": "The C-O bond of an ether is about 360 kJ/mol and does not homolyse under ambient light; autooxidation begins by breaking a C-H, not a C-O.",
        "D": "Triplet oxygen is a diradical and does not insert into closed-shell C-H bonds directly. A carbon radical must form first, which is why an inhibitor that scavenges radicals prevents peroxide formation."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "Option D said 'a carbon radical at the central oxygen atom', which is not a species. Replaced with a real misconception that matches the intact-ether structure it already drew."
  },
  {
    "question_id": "ch10_q22_neopentane_equivalence",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Easy",
    "question_text": "Why does the radical chlorination of 2,2-dimethylpropane (neopentane) yield only a single monochlorinated product?",
    "question_smiles": "CC(C)(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "All 12 hydrogens in the molecule are chemically equivalent.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The intermediate radical is too sterically hindered to react at other positions.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Chlorine radicals are highly selective and only target the central carbon.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The central carbon lacks any C-H bonds, preventing substitution there.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The number of monosubstitution products an alkane can give equals the number of chemically distinct hydrogen environments it contains. Symmetry, not reactivity, sets that count.",
      "approach": "Step 1: Draw neopentane as a central carbon carrying four methyl groups.\nStep 2: Notice that the central carbon has no hydrogen, and that every one of the twelve hydrogens sits on a methyl that is related to the other three by symmetry.\nStep 3: Replacing any of the twelve with chlorine gives the same compound, 1-chloro-2,2-dimethylpropane, so only one monochloride is possible.",
      "note": "This makes neopentane a useful test of whether a student is counting hydrogens by environment or by number - butane, with the same number of carbons in a chain, gives two monochlorides from its two environments.",
      "options": {
        "A": "Correct. Four symmetry-equivalent methyls provide twelve identical hydrogens, so every monochlorination gives the same product.",
        "B": "Steric hindrance affects rate, not the number of possible products, and the primary radical formed here is not especially hindered anyway.",
        "C": "Chlorine radical is not selective, and the central carbon carries no hydrogen at all, so it could not be a target under any selectivity.",
        "D": "This is true but does not answer the question. The central carbon's lack of hydrogens removes one site; the single product arises because the remaining twelve hydrogens are all equivalent."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A central carbon bonded to four methyl groups."
  },
  {
    "question_id": "ch10_q23_ethylbenzene_bromination",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the photochemical reaction of ethylbenzene with $Br_2$?",
    "question_smiles": "CCc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "(1-bromoethyl)benzene",
        "smiles": "CC(Br)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2-bromoethyl)benzene",
        "smiles": "BrCCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-bromo-4-ethylbenzene",
        "smiles": "CCc1ccc(Br)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-bromo-2-ethylbenzene",
        "smiles": "CCc1ccccc1Br",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A benzylic C-H is to an aromatic ring what an allylic C-H is to an alkene: the radical formed by breaking it is delocalised into the pi system, so it is the weakest C-H in the molecule and the one bromine radical takes.",
      "approach": "Step 1: Locate the benzylic position - the CH2 attached directly to the ring - and note it also counts as secondary.\nStep 2: Compare it with the alternatives. The terminal methyl is primary and not benzylic; the ring hydrogens are aromatic C-H bonds at over 470 kJ/mol and are never abstracted by bromine.\nStep 3: Bromine abstracts the benzylic hydrogen and the resulting radical captures bromine, giving (1-bromoethyl)benzene.",
      "note": "Under light bromine substitutes at the side chain; with a Lewis acid catalyst and no light the same reagent substitutes on the ring instead. The conditions, not the substrate, decide which chemistry occurs.",
      "options": {
        "A": "Correct. The benzylic hydrogen is the weakest C-H available because the resulting radical is resonance-stabilised across the ring.",
        "B": "Bromine on the terminal methyl carbon requires abstracting a primary, non-benzylic hydrogen, the strongest sp3 C-H in the molecule.",
        "C": "Para bromination of the ring is an electrophilic aromatic substitution. It needs a Lewis acid such as FeBr3 and does not occur under radical conditions.",
        "D": "Ortho bromination of the ring, like the para product, is an ionic electrophilic substitution and is not what light and bromine deliver."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "Option B was drawn C9H11Br against a C8H10 substrate.",
    "structure_alt": "A benzene ring bearing a two-carbon ethyl chain."
  },
  {
    "question_id": "ch10_q24_nbs_role_mechanism",
    "topic": "Allylic bromination using NBS",
    "difficulty_level": "Hard",
    "question_text": "During the allylic bromination of cyclohexene with N-bromosuccinimide (NBS), what is the primary role of the NBS reagent?",
    "question_smiles": "C1=CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "It reacts with trace $HBr$ to generate a constant, very low concentration of $Br_2$, preventing electrophilic addition across the double bond.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It undergoes homolytic cleavage of its N-Br bond to act as the primary hydrogen abstracting species.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It acts as a phase-transfer catalyst to solubilize the bromine radicals in $CCl_4$.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It undergoes syn-addition to the double bond, followed by elimination of succinimide.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Molecular bromine can either add across an alkene or, under radical conditions, substitute at the allylic position. Which one wins depends on how much Br2 is present, and the entire purpose of NBS is to keep that amount vanishingly small.",
      "approach": "Step 1: Recognise the competition. High Br2 concentration favours ionic addition across the double bond; low concentration starves that pathway while the radical chain still runs.\nStep 2: Follow the NBS cycle. Each allylic hydrogen abstraction releases HBr, and HBr reacts with NBS to regenerate one molecule of Br2 plus succinimide.\nStep 3: Bromine is therefore produced only as fast as it is consumed, so its steady-state concentration stays too low for addition, and the allylic bromide is the product.",
      "note": "The bromine radical, not NBS, is the hydrogen-abstracting species. NBS is a bromine reservoir that meters Br2 out one molecule at a time.",
      "options": {
        "A": "Correct. NBS converts the HBr formed in each propagation cycle back into Br2, keeping the bromine concentration low enough that addition across the alkene cannot compete.",
        "B": "The N-Br bond can homolyse under strong initiation, but that is not how NBS functions here. The chain carrier that abstracts the allylic hydrogen is bromine radical from Br2.",
        "C": "There is no second phase for anything to be transferred across, and radicals do not need solubilising. Carbon tetrachloride is simply an inert solvent in which NBS is sparingly soluble.",
        "D": "Syn-addition followed by elimination would describe a completely different reaction. NBS does not add across the double bond at all; if it did, the product would not be an allylic bromide."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered ring containing one carbon-carbon double bond."
  },
  {
    "question_id": "ch10_q25_cyclohexene_nbs",
    "topic": "Allylic bromination using NBS",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product obtained when cyclohexene is reacted with NBS in $CCl_4$ under irradiation with light?",
    "question_smiles": "C1=CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "3-bromocyclohexene",
        "smiles": "BrC1C=CCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "trans-1,2-dibromocyclohexane",
        "smiles": "Br[C@@H]1CCCC[C@H]1Br",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-bromocyclohexene",
        "smiles": "BrC1=CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-bromocyclohexene",
        "smiles": "BrC1CC=CCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Under radical conditions NBS substitutes bromine at the allylic carbon, the saturated carbon next to the double bond. The double bond itself is left in place.",
      "approach": "Step 1: Identify the allylic carbons of cyclohexene. Both CH2 groups flanking the double bond qualify, and by symmetry they are equivalent.\nStep 2: Abstract an allylic hydrogen to give a radical delocalised over three carbons; because the ring is symmetric, bromine capture at either end gives the same compound.\nStep 3: The product keeps the double bond and carries bromine on the adjacent carbon: 3-bromocyclohexene.",
      "note": "The two allylic termini are equivalent in cyclohexene, so a single product forms; in an unsymmetrical alkene the same delocalised radical gives two regioisomers.",
      "options": {
        "A": "Correct. Bromine replaces an allylic hydrogen, and because the delocalised radical is symmetric in cyclohexene, only one allylic bromide results.",
        "B": "Trans-1,2-dibromocyclohexane is the product of ionic addition of Br2 through a bromonium ion. NBS is used precisely to keep the bromine concentration too low for that pathway.",
        "C": "A vinylic C-H is far too strong for bromine radical to abstract, so bromine does not end up on a double-bond carbon under these conditions.",
        "D": "The carbon two positions from the double bond is homoallylic, not allylic; its hydrogens are ordinary secondary ones and are not activated by the alkene."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered ring containing one carbon-carbon double bond."
  },
  {
    "question_id": "ch10_q26_butene_nbs",
    "topic": "Allylic bromination using NBS",
    "difficulty_level": "Hard",
    "question_text": "Allylic bromination of 1-butene with NBS and light yields a mixture of 3-bromobut-1-ene and 1-bromobut-2-ene. Which of the following statements explains this result?",
    "question_smiles": "CCC=C",
    "options": [
      {
        "option_id": "A",
        "text": "The allylic radical intermediate is stabilized by resonance, delocalizing the unpaired electron between C1 and C3.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The reaction proceeds via a carbocation intermediate that undergoes a 1,2-hydride shift.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "NBS reacts via both radical and ionic mechanisms simultaneously.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-bromobut-2-ene is formed by the radical addition of $HBr$ to the double bond.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An allylic radical is not a localised species. Its unpaired electron is shared across the two ends of a three-carbon unit, and bromine can be delivered to either end.",
      "approach": "Step 1: Abstract the allylic hydrogen from C3 of 1-butene, the CH2 between the double bond and the methyl.\nStep 2: Write the two resonance forms. The unpaired electron sits at C3 with the double bond at C1-C2, or at C1 with the double bond shifted to C2-C3.\nStep 3: Bromine transfer at C3 gives 3-bromobut-1-ene; transfer at C1 gives 1-bromobut-2-ene with the double bond relocated. Both arise from a single intermediate.",
      "note": "The internal alkene product is usually the larger component because its disubstituted double bond is more stable, but the ratio is set at the bromine-transfer step and the two products are not interconverted afterwards.",
      "options": {
        "A": "Correct. The allylic radical is delocalised across C1 and C3, and bromine attaches at whichever terminus it meets, producing both regioisomers.",
        "B": "There is no carbocation and no hydride shift in a radical bromination; the electron count is odd throughout, and a shift would not relocate the double bond anyway.",
        "C": "NBS under light operates through a single radical chain. The two products come from one delocalised intermediate, not from two competing mechanisms.",
        "D": "Radical addition of HBr would give a saturated bromobutane, not an allylic bromide with the double bond retained; 1-bromobut-2-ene still contains its alkene."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unbranched four-carbon chain with a terminal carbon-carbon double bond."
  },
  {
    "question_id": "ch10_q27_methylcyclohexene_nbs",
    "topic": "Allylic bromination using NBS",
    "difficulty_level": "Hard",
    "question_text": "Considering the resonance structures of allylic radical intermediates, which of the following compounds is NOT formed when 3-methylcyclohexene is treated with NBS and light?",
    "question_smiles": "CC1C=CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "4-bromo-3-methylcyclohexene",
        "smiles": "CC1C(Br)CCC=C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-bromo-3-methylcyclohexene",
        "smiles": "CC1(Br)C=CCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-bromo-1-methylcyclohexene",
        "smiles": "CC1=CCCC(Br)C1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-bromo-6-methylcyclohexene",
        "smiles": "CC1CCC(Br)C=C1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An unsymmetrical cycloalkene has two different allylic positions, each giving its own delocalised radical with two ends, so up to four allylic bromides can form. Any candidate whose bromine is not at one of those four positions is not a product.",
      "approach": "Step 1: Number 3-methylcyclohexene with the double bond at C1-C2 and the methyl on C3. The allylic carbons are C3 and C6.\nStep 2: The C3 radical is delocalised over C3-C2-C1; bromine can land at C3 or at C1. The C6 radical is delocalised over C6-C1-C2; bromine can land at C6 or at C2.\nStep 3: Map the four outcomes to names. Bromine at C3 gives 3-bromo-3-methylcyclohexene; at C1, 3-bromo-1-methylcyclohexene after renumbering; at C6, 3-bromo-6-methylcyclohexene; at C2, 3-bromo-4-methylcyclohexene.\nStep 4: 4-bromo-3-methylcyclohexene places bromine on C4, which is next to the sp3 methyl carbon rather than to the double bond. No allylic radical reaches it.",
      "note": "Renumbering after the double bond migrates is where most errors in this kind of problem occur; draw each product, then name it fresh, rather than carrying the starting material's locants forward.",
      "options": {
        "A": "Correct. C4 is homoallylic - two bonds from the nearest alkene carbon - so neither of the two allylic radicals can deliver bromine there.",
        "B": "This is the tertiary allylic bromide from the C3 radical reacting at its methyl-bearing end. It is a genuine product.",
        "C": "This is the C3 radical reacting at C1, with the double bond shifting to C2-C3. It is formed, and its name is what the starting material's locants become after renumbering.",
        "D": "This is the C6 radical reacting at C6, keeping the double bond in place. It is one of the four allylic bromides that form."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "Key A was drawn as 3-bromo-4-methylcyclohexene, an allylic bromide that IS formed - the picture contradicted the answer. Option D was drawn as the non-allylic 5-bromo isomer under a 6-bromo name.",
    "structure_alt": "A six-membered ring with one double bond and a methyl group on the saturated carbon immediately next to it."
  },
  {
    "question_id": "ch10_q28_methylenecyclohexane_nbs",
    "topic": "Allylic bromination using NBS",
    "difficulty_level": "Hard",
    "question_text": "Allylic bromination of methylenecyclohexane with NBS and light yields a mixture of products. Which of the following is the major product under thermodynamic control?",
    "question_smiles": "C=C1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "1-(bromomethyl)cyclohexene",
        "smiles": "BrCC1=CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-bromo-3-methylenecyclohexane",
        "smiles": "C=C1CCCC(Br)C1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-bromo-2-methylenecyclohexane",
        "smiles": "C=C1CCCCC1Br",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-bromo-4-methylenecyclohexane",
        "smiles": "C=C1CCC(Br)CC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When the two ends of an allylic radical give products with differently substituted double bonds, the product that keeps the more substituted alkene is the more stable one and is generally the major component.",
      "approach": "Step 1: Find the allylic hydrogens. The ring CH2 groups on either side of the exocyclic alkene carbon are allylic; the exocyclic CH2 itself is vinylic and its hydrogens are not abstracted.\nStep 2: Abstract a ring allylic hydrogen. The radical is delocalised over the ring carbon, the alkene ring carbon, and the exocyclic CH2.\nStep 3: Compare the two bromine-transfer outcomes. Bromine on the ring carbon keeps the disubstituted exocyclic alkene; bromine on the exocyclic carbon moves the double bond into the ring, where it becomes trisubstituted.\nStep 4: The endocyclic, trisubstituted product 1-(bromomethyl)cyclohexene is the more stable and is the major product.",
      "note": "The exocyclic-to-endocyclic preference is reliable for five- and six-membered rings, where an endocyclic double bond is unstrained; it should not be extended to four-membered rings without thermochemical data.",
      "options": {
        "A": "Correct. Bromine transfer to the exocyclic carbon relocates the double bond into the ring, where it is trisubstituted and lower in energy than the exocyclic disubstituted alternative.",
        "B": "Bromine on the ring carbon two positions from the alkene is a homoallylic product; that carbon carries ordinary secondary hydrogens and is not part of the delocalised radical.",
        "C": "This is the other end of the same allylic radical - the kinetic product that keeps the exocyclic alkene. It is formed, but its disubstituted double bond makes it the less stable of the pair.",
        "D": "The carbon opposite the alkene is three bonds from it. Nothing about the allylic radical extends that far, so bromine does not arrive there."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "Option C was a saturated C7H13Br, impossible from allylic bromination of a C7H12 alkene. Replaced by the kinetic allylic product, which is genuinely formed and therefore actually tempting.",
    "structure_alt": "A six-membered saturated ring with an exocyclic carbon-carbon double bond to a CH2 group."
  },
  {
    "question_id": "ch10_q29_pentene_nbs",
    "topic": "Allylic bromination using NBS",
    "difficulty_level": "Hard",
    "question_text": "Treatment of (E)-pent-2-ene with NBS and light gives a mixture of allylic bromides. Which of the following compounds is NOT a product of this reaction?",
    "question_smiles": "C/C=C/CC",
    "options": [
      {
        "option_id": "A",
        "text": "5-bromopent-2-ene",
        "smiles": "BrCCC=CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-bromopent-2-ene",
        "smiles": "BrCC=CCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-bromopent-1-ene",
        "smiles": "CCC(Br)C=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-bromopent-2-ene",
        "smiles": "CC(Br)C=CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Pent-2-ene has two different allylic carbons, C1 and C4. Each gives a three-carbon delocalised radical, and bromine can attach only at the ends of one of those two radicals.",
      "approach": "Step 1: Abstract from C1, the methyl on the double bond. The radical spans C1-C2-C3, so bromine lands at C1 giving 1-bromopent-2-ene, or at C3 giving 3-bromopent-1-ene.\nStep 2: Abstract from C4, the CH2 on the other side. The radical spans C4-C3-C2, so bromine lands at C4 giving 4-bromopent-2-ene, or at C2 giving what renumbers to the same compound.\nStep 3: List the reachable positions: C1, C2, C3, C4. The C5 methyl is two bonds from the double bond and no radical reaches it, so 5-bromopent-2-ene is never formed.",
      "note": "The E geometry of the starting alkene is preserved in products where the original double bond survives, but it is lost in the products where the double bond migrates.",
      "options": {
        "A": "Correct. C5 is a homoallylic methyl; its hydrogens are ordinary primary ones that bromine radical does not take, and no allylic radical delocalises onto it.",
        "B": "This is the C1 radical capturing bromine at C1 without moving the double bond. It is a real product.",
        "C": "This is the C1 radical capturing bromine at C3, with the double bond shifting to the terminal position. It is formed.",
        "D": "This is the C4 radical capturing bromine at C4, keeping the internal double bond. It is one of the products."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "The stem names (E)-pent-2-ene; the structure was drawn flat.",
    "structure_alt": "An unbranched five-carbon chain with an internal double bond between the second and third carbons, drawn with defined geometry."
  },
  {
    "question_id": "ch10_q30_methylcyclopentene_nbs",
    "topic": "Allylic bromination using NBS",
    "difficulty_level": "Hard",
    "question_text": "What is the major allylic bromide product formed when 1-methylcyclopentene is treated with NBS and light?",
    "question_smiles": "CC1=CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "3-bromo-1-methylcyclopentene",
        "smiles": "CC1=CC(Br)CC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-bromo-3-methylcyclopentene",
        "smiles": "CC1(Br)C=CCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-bromo-1-methylcyclopentene",
        "smiles": "CC1=C(Br)CCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-bromo-1-methylcyclopentene",
        "smiles": "CC1=CCC(Br)C1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two questions decide the major product of an unsymmetrical allylic bromination: which allylic hydrogen is abstracted, and which end of the resulting radical takes the bromine. The answers are the more stable radical and the more stable alkene.",
      "approach": "Step 1: Locate the allylic positions of 1-methylcyclopentene. Ring carbons C3 and C5 flank the double bond, and the methyl on C1 is allylic too.\nStep 2: Compare the radicals. Abstraction at C3 gives a radical delocalised over C3-C2-C1, with a tertiary terminus at C1; abstraction at C5 gives one with two secondary termini. The radical with the tertiary terminus is the more stable and forms preferentially.\nStep 3: Deliver bromine to that radical. At C3 the trisubstituted double bond is retained; at C1 it moves to a disubstituted position. The trisubstituted product, 3-bromo-1-methylcyclopentene, is the major component.",
      "note": "This is a mixture in practice; the item asks for the largest component, and the reasoning that identifies it is the same two-step comparison of radical stability and alkene stability used throughout the chapter.",
      "options": {
        "A": "Correct. It arises from the more stable allylic radical, and it keeps the trisubstituted alkene, so it wins on both criteria.",
        "B": "This is the same radical reacting at its tertiary end. It is formed, but relocating the double bond to a disubstituted position makes it less stable than the isomer that keeps the trisubstituted alkene.",
        "C": "Bromine on the second alkene carbon would be a vinylic bromide. A vinylic C-H is too strong to abstract, and no allylic radical places bromine on an alkene carbon.",
        "D": "The carbon opposite the double bond is homoallylic on both sides. Its hydrogens are not activated and no delocalised radical reaches it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "Option B was named '1-bromo-1-methylcyclopentene', which is not a valid name (C1 of a cyclopentene is sp2). Its SMILES is 3-bromo-3-methylcyclopentene, a genuine product, so the text now says so.",
    "structure_alt": "A five-membered ring with one double bond and a methyl group on one of the double-bond carbons."
  },
  {
    "question_id": "ch10_q32_grignard_solvent",
    "topic": "Organometallic reagents",
    "difficulty_level": "Medium",
    "question_text": "In the preparation of a Grignard reagent, anhydrous diethyl ether or tetrahydrofuran (THF) must be used as the solvent. What is the key role of the ether solvent?",
    "question_smiles": "CCCCBr",
    "options": [
      {
        "option_id": "A",
        "text": "The lone pairs on the ether oxygen coordinate to the magnesium atom, stabilizing the Lewis acidic organometallic complex.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The ether solvent acts as a radical inhibitor to prevent coupling of the alkyl radicals.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The ether protonates the magnesium metal to initiate the reaction.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The ether solvent increases the electrophilicity of the alkyl halide.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Magnesium in a Grignard reagent is a Lewis acid with empty orbitals and a positive partial charge. Ether solvents are chosen because their oxygen lone pairs fill those orbitals and because they carry no acidic hydrogen to destroy the reagent.",
      "approach": "Step 1: Ask what the magnesium needs. It is electron-deficient and two-coordinate in the bare R-Mg-X; it wants ligands.\nStep 2: Match that need to the solvent. Diethyl ether and THF each donate an oxygen lone pair, and two ether molecules typically complete magnesium's coordination sphere, holding the reagent in solution as a stable complex.\nStep 3: Check what the solvent must not do. Water, alcohols and amines all carry protons that a Grignard reagent, a strong base, would remove instantly - so the solvent must be anhydrous and aprotic as well as coordinating.",
      "note": "Hydrocarbon solvents fail not because they react but because they cannot coordinate; without the ether ligands the Grignard reagent will not form from the metal in useful amounts.",
      "options": {
        "A": "Correct. The ether oxygen donates a lone pair into the electron-poor magnesium, and the solvated complex is what keeps the reagent stable and dissolved.",
        "B": "Grignard formation does involve surface radicals, but ethers are not radical inhibitors; the solvent's job is coordination, not scavenging.",
        "C": "An ether has no acidic proton to give up, and protonating magnesium metal is not a step in the reaction. A solvent that could protonate would destroy the Grignard reagent it was meant to form.",
        "D": "The solvent does nothing to the alkyl halide. The reaction occurs at the magnesium surface by electron transfer, and the ether's role is entirely on the magnesium side."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unbranched four-carbon chain with a bromine on the terminal carbon."
  },
  {
    "question_id": "ch10_q33_grignard_oxidation_states",
    "topic": "Organometallic reagents",
    "difficulty_level": "Medium",
    "question_text": "During the formation of phenylmagnesium bromide from bromobenzene and magnesium metal, what are the changes in the oxidation states of the carbon atom bonded to bromine and the magnesium atom?",
    "question_smiles": "Brc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Carbon is reduced and magnesium is oxidized from $Mg(0)$ to $Mg(II)$.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Carbon is oxidized and magnesium is reduced from $Mg(II)$ to $Mg(0)$.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both carbon and magnesium are oxidized.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both carbon and magnesium are reduced.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Forming a Grignard reagent inverts the polarity of a carbon. Bonded to bromine it carries a partial positive charge; bonded to magnesium it carries a partial negative charge. Tracking who lost and who gained electrons shows why the reaction is a redox process.",
      "approach": "Step 1: Assign the ipso carbon's oxidation state in bromobenzene. Bromine is more electronegative, so that carbon is counted as having lost an electron to it.\nStep 2: Assign the same carbon in phenylmagnesium bromide. Magnesium is less electronegative than carbon, so the carbon now counts as having gained an electron from it. The carbon has gone down by two units - it has been reduced.\nStep 3: Balance it. Magnesium metal, at zero, ends up as Mg(II) bonded to carbon and bromine. It supplied the two electrons and has been oxidised.",
      "note": "This is why Grignard formation is described as an oxidative insertion of magnesium into the carbon-halogen bond, and why the carbon that results behaves as a carbanion equivalent.",
      "options": {
        "A": "Correct. The carbon bonded to bromine gains electron density when its partner switches to the electropositive magnesium, and the magnesium metal is oxidised from zero to plus two in supplying them.",
        "B": "This has the electrons flowing the wrong way. Magnesium starts as the neutral metal, so it cannot be reduced from Mg(II), and a carbon that trades bromine for magnesium gains electrons rather than losing them.",
        "C": "Something must be reduced if something is oxidised. Magnesium gives up two electrons and the carbon receives them; they cannot both be oxidised.",
        "D": "The metal is the electron source and has to be oxidised. Only the carbon is reduced."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing a single bromine substituent."
  },
  {
    "question_id": "ch10_q34_grignard_protonation",
    "topic": "Organometallic reagents",
    "difficulty_level": "Easy",
    "question_text": "Treatment of cyclopentylmagnesium bromide with deuterium oxide ($D_2O$) yields which of the following compounds?",
    "question_smiles": "C1CCC(C1)[Mg]Br",
    "options": [
      {
        "option_id": "A",
        "text": "monodeuteriocyclopentane",
        "smiles": "[2H]C1CCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "cyclopentanol",
        "smiles": "OC1CCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "cyclopentene",
        "smiles": "C1=CCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,1-dideuteriocyclopentane",
        "smiles": "[2H]C1([2H])CCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Grignard reagent is a strong base, and the simplest thing it does is take a proton from any acid it meets. Heavy water is such an acid, and it hands over a deuteron instead of a proton.",
      "approach": "Step 1: Recognise the carbon bound to magnesium as carbanion-like and strongly basic.\nStep 2: Treat D2O as the acid. The O-D bond is polarised the same way as O-H, and the carbanion abstracts the deuteron.\nStep 3: The carbon that held magnesium now holds one deuterium; the rest of the ring is untouched. Magnesium leaves as the mixed salt Mg(OD)Br.",
      "note": "This reaction is how deuterium is placed at a single, chosen carbon - the reverse view of why every trace of moisture must be excluded when a Grignard reagent is being made or used.",
      "options": {
        "A": "Correct. The Grignard carbon abstracts one deuteron from D2O, so exactly one deuterium is installed at the former C-Mg position.",
        "B": "An alcohol would need an oxygen to become bonded to carbon. Deuterium oxide donates a deuteron to the carbanion; its oxygen stays with magnesium as the deuteroxide salt.",
        "C": "There is no leaving group on the adjacent carbon and no base that could remove a beta hydrogen. Quenching a Grignard reagent does not create a double bond.",
        "D": "Only one carbon carried magnesium, so only one deuterium is delivered. A second deuterium has no anionic carbon to attach to."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-membered saturated ring with a magnesium-bromide group attached to one carbon."
  },
  {
    "question_id": "ch10_q35_grignard_compatibility",
    "topic": "Organometallic reagents",
    "difficulty_level": "Medium",
    "question_text": "Which of the following compounds CANNOT be successfully converted into a Grignard reagent because of an incompatible functional group?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "4-bromobutan-1-ol",
        "smiles": "OCCCCBr",
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
        "text": "4-bromobut-1-ene",
        "smiles": "C=CCCBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "bromobenzene",
        "smiles": "Brc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Any functional group with an acidic hydrogen - hydroxyl, amine, thiol, carboxylic acid, terminal alkyne - will protonate a Grignard reagent as fast as it forms. Such a group must be absent, or protected, before the halide is treated with magnesium.",
      "approach": "Step 1: Scan each candidate for a hydrogen on an electronegative atom.\nStep 2: 4-bromobutan-1-ol has an O-H. As soon as any R-MgBr forms it removes that proton from another molecule, converting itself to the alkane and the alcohol to a magnesium alkoxide; no useful reagent accumulates.\nStep 3: The other three carry only C-H bonds, none acidic enough to matter, and each gives a normal Grignard reagent.",
      "note": "The remedy is protection: cap the alcohol as a silyl ether or a tetrahydropyranyl ether, form the Grignard reagent, then remove the protecting group afterwards.",
      "options": {
        "A": "Correct. The hydroxyl proton is acidic enough to quench any Grignard reagent formed from the bromide, so the reagent destroys itself as it is made.",
        "B": "1-bromobutane is the textbook Grignard precursor. It carries nothing acidic and forms butylmagnesium bromide cleanly.",
        "C": "An isolated alkene is inert toward a Grignard reagent; its vinylic hydrogens are far too weakly acidic to be removed. 4-bromobut-1-ene gives the corresponding Grignard reagent without difficulty.",
        "D": "Aryl bromides form Grignard reagents readily, and phenylmagnesium bromide is among the most commonly prepared. Aromatic C-H bonds are not acidic enough to interfere."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch10_q36_organolithium_stoichiometry",
    "topic": "Organometallic reagents",
    "difficulty_level": "Medium",
    "question_text": "How many equivalents of lithium metal are required to completely convert 1 mole of 1-bromobutane into 1 mole of butyllithium?",
    "question_smiles": "CCCCBr",
    "options": [
      {
        "option_id": "A",
        "text": "2 equivalents",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1 equivalent",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3 equivalents",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4 equivalents",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Lithium is a one-electron metal. Converting a carbon-halogen bond into a carbon-lithium bond and a lithium halide takes two electrons, so it takes two lithium atoms.",
      "approach": "Step 1: Write the balanced equation: C4H9Br plus 2 Li gives C4H9Li plus LiBr.\nStep 2: Account for the lithium. One atom ends up bonded to carbon in butyllithium; the other ends up as the cation of lithium bromide.\nStep 3: Check the electron budget. Each lithium supplies one electron; the two together reduce the C-Br bond, exactly as one magnesium atom would with its two electrons.",
      "note": "Magnesium, being divalent, does the same job with one atom and keeps the halide in the same molecule as R-Mg-X. Lithium needs two atoms and ejects the halide as a separate salt.",
      "options": {
        "A": "Correct. One lithium bonds to carbon and the second pairs with the bromide; two one-electron metals are needed to supply the two electrons the C-Br bond reduction requires.",
        "B": "One lithium atom supplies one electron. That leaves the bromide with no counter-ion and the carbon with a half-completed reduction; the equation cannot balance.",
        "C": "A third lithium has nothing to do. The products are butyllithium and lithium bromide, which together account for exactly two lithium atoms.",
        "D": "Four equivalents would leave two lithium atoms unreacted. The stoichiometry is fixed by the two electrons the C-Br bond needs."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unbranched four-carbon chain with a bromine on the terminal carbon."
  },
  {
    "question_id": "ch10_q37_lithium_vs_magnesium",
    "topic": "Organometallic reagents",
    "difficulty_level": "Medium",
    "question_text": "Which of the following statements correctly compares the reactivity of organolithium reagents ($R-Li$) and Grignard reagents ($R-MgX$)?",
    "question_smiles": "CCCC[Li]",
    "options": [
      {
        "option_id": "A",
        "text": "Organolithium reagents are more basic and nucleophilic because the C-Li bond is more polar (ionic) than the C-Mg bond.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Grignard reagents are more nucleophilic because magnesium has a higher atomic number than lithium.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Organolithium reagents are weaker bases because lithium is more electronegative than magnesium.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both reagents have identical reactivity toward carbonyl compounds.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The reactivity of an organometallic reagent tracks how much negative charge sits on carbon, and that is set by the electronegativity gap between carbon and the metal. Lithium is less electronegative than magnesium, so its bond to carbon is the more ionic.",
      "approach": "Step 1: Compare electronegativities. Lithium is about 1.0, magnesium about 1.3, carbon about 2.5.\nStep 2: The larger gap for lithium puts more negative charge on the carbon, making the C-Li bond closer to a carbanion and lithium cation.\nStep 3: More carbanion character means a stronger base and a stronger nucleophile, so organolithium reagents outdo Grignard reagents on both counts and are the reagent of choice when a Grignard proves too sluggish.",
      "note": "Both reagents are strong enough to deprotonate water and alcohols; the difference shows when the substrate is hindered or the electrophile is weak, where the organolithium succeeds and the Grignard may not.",
      "options": {
        "A": "Correct. The larger electronegativity gap makes the C-Li bond more ionic, concentrating negative charge on carbon and raising both basicity and nucleophilicity.",
        "B": "Atomic number has no bearing on nucleophilicity here. What matters is the polarity of the metal-carbon bond, and magnesium's higher electronegativity makes that bond the less polar of the two.",
        "C": "This reverses the electronegativity order. Lithium is the less electronegative metal, which is exactly why its carbon bears more charge and is the stronger base.",
        "D": "Their reactivity is not identical; organolithiums add to hindered ketones and to esters where Grignard reagents stop, and are used precisely because the two are not interchangeable."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unbranched four-carbon chain with a lithium atom bonded to the terminal carbon."
  },
  {
    "question_id": "ch10_q38_gilman_stoichiometry",
    "topic": "Organometallic reagents",
    "difficulty_level": "Medium",
    "question_text": "Lithium dialkylcopper reagents (Gilman reagents) are prepared by reacting an organolithium reagent with copper(I) iodide. What is the stoichiometry of this reaction?",
    "question_smiles": "CCCC[Li]",
    "options": [
      {
        "option_id": "A",
        "text": "$2\\text{ RLi} + \\text{CuI} \\rightarrow \\text{R}_2\\text{CuLi} + \\text{LiI}$",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$\\text{RLi} + \\text{CuI} \\rightarrow \\text{RCu} + \\text{LiI}$",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$2\\text{ RLi} + 2\\text{ CuI} \\rightarrow \\text{R}_2\\text{Cu}_2 + 2\\text{ LiI}$",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$3\\text{ RLi} + \\text{CuI} \\rightarrow \\text{R}_3\\text{CuLi}_2 + \\text{LiI}$",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Gilman reagent is a diorganocopper anion paired with a lithium cation. Two organic groups must be delivered to one copper, and each comes from one organolithium.",
      "approach": "Step 1: Write the product formula, R2CuLi, and count what it contains: two R groups, one copper, one lithium.\nStep 2: Source the R groups. Each organolithium contributes one, so two RLi are required.\nStep 3: Balance the lithium. Two lithiums arrive with the RLi; one stays in R2CuLi and the other leaves as lithium iodide with the iodide from CuI.",
      "note": "The first equivalent of RLi actually forms the alkylcopper RCu; the second adds to it to give the cuprate. Stopping at one equivalent leaves a far less useful reagent.",
      "options": {
        "A": "Correct. Two organolithiums supply the two organic groups on copper, one lithium stays as the counter-ion and the other departs as LiI.",
        "B": "One equivalent gives the monoalkylcopper RCu, which is not a Gilman reagent. The cuprate requires a second organic group on copper.",
        "C": "This produces a dialkyl dicopper with no lithium, which is not the reagent and is not what forms. Only one copper is needed per two R groups.",
        "D": "Three organic groups on copper with two lithiums is not a stable cuprate under these conditions and is not the Gilman formulation R2CuLi."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unbranched four-carbon chain with a lithium atom bonded to the terminal carbon."
  },
  {
    "question_id": "ch10_q39_gilman_coupling",
    "topic": "Organometallic reagents",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product obtained from the reaction of lithium dimethylcopper with 1-iodooctane?",
    "question_smiles": "CCCCCCCCI",
    "options": [
      {
        "option_id": "A",
        "text": "nonane",
        "smiles": "CCCCCCCCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "decane",
        "smiles": "CCCCCCCCCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "octane",
        "smiles": "CCCCCCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-methyloctane",
        "smiles": "CCCCCC(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Gilman reagent transfers one of its organic groups to the carbon of an alkyl halide, forming a new carbon-carbon bond. The product chain is the halide's skeleton plus the group delivered from copper.",
      "approach": "Step 1: Identify the two pieces. The halide contributes an eight-carbon chain; lithium dimethylcopper delivers a single methyl.\nStep 2: Join them at the carbon that held iodine. The methyl replaces iodine at C1, extending the unbranched chain by one carbon.\nStep 3: Count: eight plus one gives nonane. Only one of the two methyls on copper is transferred; the other leaves as methylcopper.",
      "note": "This is the Corey-House synthesis, the one general way in this chapter to make a carbon-carbon bond; it works best with primary halides, since secondary and tertiary ones tend to eliminate instead.",
      "options": {
        "A": "Correct. Replacing iodine with one methyl from the cuprate lengthens the eight-carbon chain to the unbranched nine-carbon alkane.",
        "B": "Decane would require both methyls from the cuprate to add at the same carbon, which cannot happen; only one group is transferred to each halide.",
        "C": "Octane is what reduction of the iodide would give. Coupling adds a carbon rather than simply replacing iodine with hydrogen.",
        "D": "A branch at C2 would require the methyl to attach one carbon in from the terminus. The new bond forms at the carbon that bore the iodine, so the product is unbranched."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unbranched eight-carbon chain with an iodine on the terminal carbon."
  },
  {
    "question_id": "ch10_q40_gilman_stereospecificity",
    "topic": "Organometallic reagents",
    "difficulty_level": "Hard",
    "question_text": "The coupling of a Gilman reagent with a vinylic halide is stereospecific. If lithium diethylcopper is reacted with (E)-1-iodohex-1-ene, what is the configuration of the double bond in the product?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-oct-3-ene",
        "smiles": "CCCC/C=C/CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-oct-3-ene",
        "smiles": "CCCC/C=C\\CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A 1:1 mixture of (E)- and (Z)-oct-3-ene",
        "smiles": "CCCC/C=C/CC.CCCC/C=C\\CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "oct-4-yne",
        "smiles": "CCCC#CCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Coupling of a Gilman reagent with a vinylic halide replaces the halogen with the organic group while the double bond stays exactly as it was. The geometry of the alkene is carried straight through into the product.",
      "approach": "Step 1: Draw (E)-1-iodohex-1-ene: the iodine and the butyl group on opposite sides of the double bond.\nStep 2: Swap iodine for ethyl without disturbing the double bond. The ethyl takes iodine's place, so it and the butyl remain on opposite sides.\nStep 3: Name the product. The chain is now eight carbons with the double bond at C3; the E relationship survives, giving (E)-oct-3-ene.",
      "note": "This stereospecificity is what makes vinylic cuprate coupling valuable in synthesis: a single geometric isomer of the halide gives a single geometric isomer of the product, with no scrambling.",
      "options": {
        "A": "Correct. The double bond is untouched during coupling, so the trans relationship between the two chain fragments in the halide is preserved in the product.",
        "B": "A Z product would need the double bond to have been broken and re-formed with the groups swapped. Vinylic cuprate coupling does not do that.",
        "C": "A mixture would mean the alkene geometry was lost somewhere along the way. It is retained, which is exactly what stereospecific means.",
        "D": "An alkyne would require an elimination that removes two more atoms from the alkene carbons. Coupling substitutes one group for another and leaves the double bond as a double bond."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "Option C claimed a 1:1 E/Z mixture while carrying the key's own single SMILES. A mixture is two structures - dot-disconnected, per the Ch 8 rule."
  },
  {
    "question_id": "ch10_q42_gilman_aryl_coupling",
    "topic": "Organometallic reagents",
    "difficulty_level": "Medium",
    "question_text": "Which of the following combinations of reagents will successfully undergo coupling to form toluene?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Lithium dimethylcopper and iodobenzene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methylmagnesium bromide and chlorobenzene (without catalyst)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Bromomethane and chlorobenzene in aqueous base",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyllithium and bromobenzene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Only certain organometallic reagents can join an sp3 carbon to an aromatic ring without a transition-metal catalyst. The diorganocuprate is the one from this chapter that does it, and it does so with aryl iodides and bromides directly.",
      "approach": "Step 1: Ask which reagent couples with aryl halides on its own. Lithium diorganocuprates do; Grignard and organolithium reagents do not without a nickel or palladium catalyst.\nStep 2: Pair lithium dimethylcopper with iodobenzene. The methyl transfers to the ring carbon that held iodine, giving toluene and methylcopper.\nStep 3: Eliminate the alternatives by what actually happens: an organolithium performs halogen-lithium exchange with an aryl bromide, and an aqueous base with two halides gives no carbon-carbon bond at all.",
      "note": "Aryl halides are inert to ordinary SN2 chemistry, so bringing a carbon nucleophile to a benzene ring needs either a cuprate or a catalysed cross-coupling; the palladium-catalysed Suzuki reaction is the modern general answer.",
      "options": {
        "A": "Correct. Lithium dimethylcopper couples with aryl iodides directly, replacing iodine with methyl to give toluene.",
        "B": "A Grignard reagent does not couple with an aryl chloride on its own. This combination needs a nickel or palladium catalyst, and without one it simply does not react.",
        "C": "No carbon nucleophile is present. Aqueous hydroxide cannot displace chloride from a benzene ring, and bromomethane would at most be hydrolysed to methanol.",
        "D": "Methyllithium meets bromobenzene and exchanges lithium for bromine, giving phenyllithium and bromomethane. That is halogen-metal exchange, not coupling, and no toluene results."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch10_q43_zinc_acid_reduction",
    "topic": "Reduction of alkyl halides",
    "difficulty_level": "Medium",
    "question_text": "Treatment of 1-bromobutane with zinc metal in hydrochloric acid ($Zn, HCl$) yields which of the following products?",
    "question_smiles": "CCCCBr",
    "options": [
      {
        "option_id": "A",
        "text": "butane",
        "smiles": "CCCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-butene",
        "smiles": "C=CCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "butyl chloride",
        "smiles": "CCCCCl",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "dibutylzinc",
        "smiles": "CCCC[Zn]CCCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Zinc in acid is a dissolving-metal reduction. The metal inserts into the carbon-halogen bond to give an organozinc compound, which the acid then protonates. Net result: the halogen is replaced by hydrogen.",
      "approach": "Step 1: Let zinc metal reduce the C-Br bond, giving butylzinc bromide as the organometallic intermediate.\nStep 2: Protonate the carbon-zinc bond with the acid. The carbanion-like carbon takes a proton and the zinc departs as Zn(II).\nStep 3: The carbon skeleton is unchanged and the bromine has become a hydrogen: butane.",
      "note": "This is the same two-step logic as making a Grignard reagent and then quenching it with water, compressed into one flask because the acid is present from the start.",
      "options": {
        "A": "Correct. Zinc reduces the C-Br bond to an organozinc intermediate, and acid protonates it to the alkane.",
        "B": "An alkene would require loss of HBr by elimination, which needs a base. Acidic zinc conditions supply hydrogen, not remove it.",
        "C": "Chloride is present but is not competing with reduction. Swapping one halide for another is a substitution, and the zinc does not perform one.",
        "D": "A dialkylzinc is not what forms in aqueous acid; the organozinc intermediate that does form is protonated immediately and never survives to be the product."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unbranched four-carbon chain with a bromine on the terminal carbon."
  },
  {
    "question_id": "ch10_q44_grignard_reduction_stereo",
    "topic": "Reduction of alkyl halides",
    "difficulty_level": "Medium",
    "question_text": "An alkyl halide is reduced to an alkane in two steps: first by reaction with magnesium in ether, and then by reaction with water. If (R)-2-bromobutane is subjected to this sequence, what is the stereochemical nature of the product?",
    "question_smiles": "C[C@@H](Br)CC",
    "options": [
      {
        "option_id": "A",
        "text": "It is butane, which is achiral and optically inactive.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It is optically active (R)-butane.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It is optically active (S)-butane.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It is a racemic mixture of (R)- and (S)-butane.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A stereocentre exists only while its carbon carries four different groups. Reducing a carbon-halogen bond to a carbon-hydrogen bond can leave that carbon with two identical hydrogens, at which point the question of configuration disappears.",
      "approach": "Step 1: Form the Grignard reagent from (R)-2-bromobutane; magnesium replaces bromine at C2.\nStep 2: Quench with water. A proton replaces the magnesium, so C2 now carries a hydrogen where the bromine was.\nStep 3: Inspect C2 of the product. It bears a methyl, an ethyl and two hydrogens. Two identical substituents means no stereocentre, so butane is achiral and has no R or S to report.",
      "note": "The Grignard carbon itself is not configurationally stable and would racemise anyway, but that detail is irrelevant here: whatever happened at the intermediate, the product cannot hold a configuration.",
      "options": {
        "A": "Correct. C2 ends with two hydrogens, so butane has no stereocentre and no optical activity is possible.",
        "B": "Butane has no stereocentre, so there is no (R)-butane. The descriptor cannot be assigned to a carbon carrying two hydrogens.",
        "C": "There is no (S)-butane for the same reason: the carbon that was a stereocentre now bears two identical substituents.",
        "D": "A racemic mixture requires a pair of enantiomers to exist. Butane is achiral, so it has no enantiomer and cannot form a racemate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unbranched four-carbon chain with a bromine on the second carbon, drawn with wedge-and-dash stereochemistry at that carbon."
  },
  {
    "question_id": "ch10_q45_lah_reduction",
    "topic": "Reduction of alkyl halides",
    "difficulty_level": "Medium",
    "question_text": "Which of the following reagents can reduce a primary alkyl halide to an alkane via an $S_N2$ substitution mechanism?",
    "question_smiles": "CCCCBr",
    "options": [
      {
        "option_id": "A",
        "text": "Lithium aluminum hydride ($LiAlH_4$)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Sodium borohydride ($NaBH_4$)",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Zinc metal in hydrochloric acid ($Zn, HCl$)",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Hydrogen gas over palladium on carbon ($H_2, Pd/C$)",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A primary alkyl halide can be reduced to an alkane by a hydride reagent nucleophilic enough to displace the halide directly. That reagent is lithium aluminium hydride, which delivers hydride as an SN2 nucleophile at the unhindered carbon.",
      "approach": "Step 1: Ask which reagents supply a nucleophilic hydride. Only LiAlH4 among the four does so with enough strength to attack an sp3 carbon.\nStep 2: Let hydride attack C1 from the back side and expel bromide - a textbook SN2 with H- as the nucleophile.\nStep 3: Reject the others on mechanism. Sodium borohydride is too weak a hydride donor for alkyl halides, zinc in acid works by electron transfer rather than hydride displacement, and hydrogen over palladium operates on the metal surface.",
      "note": "The same reactivity that lets LiAlH4 attack an alkyl halide is why it must be kept from water and why it is never used on a substrate that carries an acidic proton the hydride would remove first.",
      "options": {
        "A": "Correct. LiAlH4 is a strong enough hydride nucleophile to displace bromide from a primary carbon by an SN2 pathway.",
        "B": "Sodium borohydride reduces aldehydes and ketones but is too weak to displace a halide from an sp3 carbon under ordinary conditions.",
        "C": "Zinc in acid does reduce alkyl halides, but through an organozinc intermediate formed by electron transfer, not by SN2 attack of a hydride.",
        "D": "Catalytic hydrogenolysis over palladium can cleave C-halogen bonds, but it does so on the metal surface with no hydride nucleophile and no SN2 mechanism."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unbranched four-carbon chain with a bromine on the terminal carbon."
  },
  {
    "question_id": "ch10_q46_zinc_reduction_mechanism",
    "topic": "Reduction of alkyl halides",
    "difficulty_level": "Hard",
    "question_text": "In the reduction of alkyl halides using zinc in aqueous acid ($Zn, H_3O^+$), what is the role of the zinc metal?",
    "question_smiles": "CCCCBr",
    "options": [
      {
        "option_id": "A",
        "text": "It acts as a reducing agent, transferring two electrons to the carbon-halogen bond to form an organozinc species.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It acts as a Lewis acid catalyst to coordinate to the halogen, making it a better leaving group for water attack.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It undergoes homolytic cleavage with the alkyl halide to generate alkyl radicals.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It is oxidized to $Zn^{2+}$ by the halide, which then acts as a nucleophile.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A metal used as a reducing agent works by giving away electrons. Zinc has two to give, which is exactly what converting a carbon-halogen bond into a carbon-metal bond requires.",
      "approach": "Step 1: Zinc metal transfers two electrons to the alkyl halide, inserting itself between carbon and halogen to form an alkylzinc halide, R-Zn-X.\nStep 2: That organozinc carbon is now nucleophilic and basic, the same polarity reversal seen with magnesium.\nStep 3: Hydronium ion protonates the carbon-zinc bond, releasing the alkane and Zn(II). The zinc is consumed as it is oxidised.",
      "note": "This is stoichiometric in zinc, not catalytic; the metal is a reagent that ends up as a salt, which distinguishes it from the palladium in a catalysed reduction.",
      "options": {
        "A": "Correct. Zinc supplies two electrons to the C-X bond, forming an organozinc intermediate whose carbon is then protonated by the acid.",
        "B": "A Lewis acid role would leave the zinc unchanged and would call for a nucleophile to attack carbon. Water is far too weak a nucleophile for that, and zinc is visibly consumed in the reaction.",
        "C": "The zinc surface does supply electrons one at a time, but the net transfer is two electrons to form a bound organozinc species, and the reaction shows no radical products.",
        "D": "Zinc is oxidised, but by transferring electrons to the C-X bond, not to the halide. A halide ion was never going to act as a nucleophile in an acidic reduction."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unbranched four-carbon chain with a bromine on the terminal carbon."
  },
  {
    "question_id": "ch10_q47_gilman_structure",
    "topic": "Organometallic reagents",
    "difficulty_level": "Easy",
    "question_text": "Which of the following chemical formulas represents a Gilman reagent?",
    "question_smiles": "C[Cu](C)[Li]",
    "options": [
      {
        "option_id": "A",
        "text": "$R_2CuLi$",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$RCu$",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$RMgX$",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$RLi$",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Each of the chapter's organometallic reagents has a characteristic formula: R-MgX for a Grignard reagent, R-Li for an organolithium, and R2CuLi for a Gilman reagent, where two organic groups are attached to copper.",
      "approach": "Step 1: Recall how a Gilman reagent is made - two organolithiums added to one copper(I) iodide.\nStep 2: Write what that produces: a copper carrying two R groups, negatively charged, with lithium as the cation. That is R2CuLi, a lithium diorganocuprate.\nStep 3: Distinguish it from the monoalkylcopper RCu, which is the intermediate after one equivalent, and from the magnesium and lithium reagents, which contain no copper.",
      "note": "The formula R2CuLi is the composition rather than the structure; in solution the reagent exists as aggregates with ether ligands, but the two-groups-on-copper description is what governs its reactivity.",
      "options": {
        "A": "Correct. Two organic groups on a copper centre, balanced by a lithium cation, is the Gilman reagent.",
        "B": "A single organic group on copper is the monoalkylcopper intermediate. It lacks the second group and the lithium counter-ion that define a cuprate.",
        "C": "R-MgX contains magnesium and a halogen, not copper. It is a Grignard reagent.",
        "D": "R-Li is the organolithium used to make a Gilman reagent, but it contains no copper and is not itself one."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A copper atom bonded to two methyl groups, with a lithium atom associated with it."
  },
  {
    "question_id": "ch10_q49_allylic_chlorination_temp",
    "topic": "Radical halogenation of alkanes",
    "difficulty_level": "Hard",
    "question_text": "When propene is treated with $Cl_2$ at low temperature, 1,2-dichloropropane is obtained. However, at $400^\\circ\\text{C}$ in the gas phase, 3-chloropropene is the major product. Why is the radical substitution pathway favored at high temperature?",
    "question_smiles": "CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "Electrophilic addition is reversible and thermodynamically unfavorable at high temperature due to negative entropy ($\\Delta S < 0$).",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Chlorine radicals cannot exist at low temperatures.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The allylic C-H bond is stronger at high temperatures.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The cyclic chloronium ion intermediate becomes more stable at high temperatures.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Addition and substitution compete for an alkene, and temperature can switch the outcome because the two pathways differ in entropy. An addition combines two molecules into one; a substitution keeps the molecule count constant.",
      "approach": "Step 1: Write the thermodynamics of addition. Two molecules become one, so the entropy change is strongly negative and the T-delta-S term grows with temperature.\nStep 2: At 400 degrees the entropy penalty overwhelms the enthalpy gain, so the free energy of addition turns positive and any dichloride that forms reverts to propene and chlorine.\nStep 3: Substitution has a near-zero entropy change and stays favourable. At the same time, heat homolyses Cl2 to chlorine radicals, which abstract the allylic hydrogen and deliver 3-chloropropene.",
      "note": "This is how allyl chloride is made industrially, and it is a rare case in which raising the temperature changes which product forms rather than just how fast it forms.",
      "options": {
        "A": "Correct. The bimolecular addition loses entropy, so at high temperature it becomes reversible and unfavourable, leaving the radical substitution as the productive pathway.",
        "B": "Chlorine radicals form readily at room temperature under light. Their existence is not temperature-limited; what changes at 400 degrees is the thermodynamics of the competing addition.",
        "C": "Bond strengths do not rise with temperature. If anything the allylic C-H is the easiest bond in propene to break, which is why substitution occurs there.",
        "D": "The chloronium ion is an intermediate of the addition pathway, the one being shut down. Making it more stable would favour addition, the opposite of what is observed."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-carbon chain with a terminal carbon-carbon double bond."
  },
  {
    "question_id": "ch10_q_dynamic_radical_bromination",
    "topic": "Radical Halogenation",
    "difficulty_level": "Hard",
    "question_text": "Identify the major monobromination product of propane under light.",
    "reaction_scheme": {
      "reactants": [
        "CCC"
      ],
      "reagents": "Br2, light",
      "conditions": "radical pathway",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-Bromopropane is the major product due to the higher stability of secondary radicals.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Bromopropane is the major product due to statistical probability.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,2-Dibromopropane is the primary product.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propene is formed via elimination.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Propane offers two kinds of hydrogen: six primary on the two methyls and two secondary on the central carbon. Statistics favour the primary site three to one; bromine's selectivity overwhelms that.",
      "approach": "Step 1: Count the hydrogens by type - six primary, two secondary.\nStep 2: Weight for bromination at roughly 1 : 82. Primary scores 6 x 1 = 6; secondary scores 2 x 82 = 164.\nStep 3: The secondary position wins by more than twenty-five to one, so 2-bromopropane is the major product. The secondary radical is the more stable, and bromine's late transition state feels that difference.",
      "note": "Chlorination of the same substrate at room temperature gives 2-chloropropane and 1-chloropropane in roughly equal amounts - the reagent, not the alkane, sets the selectivity.",
      "options": {
        "A": "Correct. The secondary radical is more stable, and the endothermic bromine abstraction has a late enough transition state to select strongly for it.",
        "B": "Statistics alone would favour the six primary hydrogens, but bromine's roughly 82-fold preference for the secondary position swamps the three-to-one head count.",
        "C": "A dibromide needs a second substitution or an addition across a double bond. Propane has no double bond, and under monobromination conditions a second bromine is a minor event.",
        "D": "Radical halogenation substitutes; it does not eliminate. Nothing in the mechanism removes hydrogen from two adjacent carbons to build a double bond."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "The reaction scheme drew the product CC(Br)C beside a question that asks for it - an answer leak. Products are now the placeholder, and reactant_alts is added as every scheme item requires.",
    "reactant_alts": [
      "An unbranched three-carbon chain."
    ]
  },
  {
    "question_id": "ch10_q1_isobutane_bromination",
    "topic": "Radical Halogenation",
    "difficulty_level": "Medium",
    "question_text": "What is the major monobromination product of 2-methylpropane under the conditions shown?",
    "reaction_scheme": {
      "reactants": [
        "CC(C)C"
      ],
      "reagents": "Br2, light",
      "conditions": "hv",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-bromo-2-methylpropane",
        "smiles": "CC(C)(C)Br",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-bromo-2-methylpropane",
        "smiles": "CC(C)CBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,2-dibromo-2-methylpropane",
        "smiles": "CC(C)(Br)CBr",
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
      "context": "2-methylpropane is the cleanest test of bromine's selectivity: it has nine primary hydrogens and one tertiary hydrogen, and nothing else. If the tertiary product dominates here, the selectivity argument is doing all the work.",
      "approach": "Step 1: Count the hydrogens - nine primary on three methyls, one tertiary on the central carbon.\nStep 2: Weight for bromination at roughly 1 : 1600 for primary against tertiary. Primary scores 9; tertiary scores 1600.\nStep 3: The tertiary bromide is more than ninety-nine percent of the monobromination product. The single tertiary C-H is the weakest bond in the molecule, and bromine's late transition state selects for the tertiary radical it leads to.",
      "note": "Chlorination of the same alkane gives about two-thirds primary chloride, because chlorine's early transition state barely notices the difference in radical stability - the substrate is identical; the reagent decides.",
      "options": {
        "A": "Correct. The lone tertiary hydrogen is weighted about 1600 to 1 over each primary hydrogen, so bromine ends up on the central carbon almost exclusively.",
        "B": "This is the primary bromide that statistics alone would predict, nine hydrogens against one. Under bromination the 1600-fold reactivity difference reverses that expectation completely.",
        "C": "A second bromine requires a second substitution, and with excess alkane and limited bromine the monobromide is the product. This is what an over-reaction, not a selective monobromination, would give.",
        "D": "Radical bromination substitutes a hydrogen; it does not eliminate two atoms to form a double bond. An alkene would need a base and a leaving group, neither of which is present."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "The one survivor of the 95-copy isobutane family. Its junk distractors (nitrobenzene, dimethyl ether, a cyclohexene aldehyde) are replaced by the three chemically real ones: the primary bromide, the dibromide from over-reaction, and the alkene a student confuses substitution with. Only two C4H9Br isomers exist on this skeleton, so two distractors necessarily differ in formula.",
    "reactant_alts": [
      "A central carbon bearing three methyl groups and one hydrogen."
    ]
  },
  {
    "question_id": "ch10_q4_ligand_exchange",
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
      "context": "A metal centre in a catalytic cycle holds a set of ligands that come and go. Swapping one ligand for another at the metal is its own mechanistic category, distinct from anything happening to the organic substrate.",
      "approach": "Step 1: Locate where the change occurs. The halide leaves palladium and a phosphine takes its place, so the event is at the metal, not at carbon.\nStep 2: Ask what has been exchanged. One two-electron donor has been replaced by another two-electron donor.\nStep 3: Check the metal's oxidation state. It is unchanged, because no electrons were transferred to or from palladium. A substitution in the coordination sphere at constant oxidation state is ligand exchange.",
      "note": "Keep this step separate from the insertion described just before it. Coordination of the alkene and its insertion into the palladium-carbon bond change what is bonded to carbon; the phosphine-for-halide swap changes only which ligands surround the metal.",
      "options": {
        "A": "Polar addition puts two fragments across a multiple bond of an organic substrate. Replacing a halide on palladium adds nothing across the alkene.",
        "B": "A pericyclic rearrangement is a concerted reorganisation of bonds around a ring and needs no metal at all, so it does not describe a substitution at palladium.",
        "C": "Correct. A halide ligand departs from palladium and a phosphine donor occupies the vacated coordination site, with the metal's oxidation state unchanged.",
        "D": "Homolytic cleavage splits a bond so that each fragment keeps one electron, giving radicals. The phosphine arrives with its lone pair intact and no bond is split evenly."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two carbons joined by a double bond, each carrying two hydrogens."
  },
  {
    "question_id": "ch10_q43_organometallic_transmetalation",
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
      "context": "A palladium-catalysed cross-coupling turns on three named steps. Oxidative addition puts the halide's organic group on palladium, transmetalation brings the second organic group across from a main-group metal, and reductive elimination joins the two and releases the catalyst.",
      "approach": "Step 1: Identify the two metals involved in the step described - a main-group metal such as boron or tin holding an organic group, and palladium waiting to receive it.\nStep 2: Watch the organic group move from the main-group metal to palladium while the halide moves the other way. Palladium's oxidation state does not change.\nStep 3: A transfer of an organic group between two metals at constant oxidation state is transmetalation - the step that distinguishes a Suzuki or Stille coupling from a simple oxidative addition.",
      "note": "This is the step the base in a Suzuki reaction accelerates: it converts the boronic acid into a boronate that hands its organic group to palladium far more readily.",
      "options": {
        "A": "Oxidative addition is the step that inserts palladium into the aryl-halide bond, raising palladium from zero to plus two. No second metal is involved.",
        "B": "Reductive elimination is the final step, in which the two organic groups on palladium couple and leave, returning palladium to zero. It creates the product bond rather than moving a group between metals.",
        "C": "Correct. The organic group is exchanged from boron or tin onto palladium without any change in palladium's oxidation state, which is what the term describes.",
        "D": "Carbometalation is the insertion of an alkene into a metal-carbon bond, as in the Heck reaction. It builds a new carbon-carbon bond at the metal rather than exchanging groups between two metals."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch10_q53_pbr3_1_propanol",
    "topic": "Preparing Alkyl Halides from Alcohols",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product when propan-1-ol is treated with phosphorus tribromide in ether?",
    "reaction_scheme": {
      "reactants": [
        "CCCO"
      ],
      "reagents": "PBr3",
      "conditions": "ether, 0 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-bromopropane",
        "smiles": "CCCBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-bromopropane",
        "smiles": "CC(C)Br",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "propene",
        "smiles": "C=CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "propyl dibromophosphite",
        "smiles": "CCCOP(Br)Br",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hydroxide is too poor a leaving group to be displaced, so converting an alcohol into a bromide means first turning the oxygen into something that leaves. PBr3 does this in one pot: the alcohol attacks phosphorus, the oxygen becomes part of a dibromophosphite, and bromide displaces it.",
      "approach": "Step 1: The alcohol oxygen attacks phosphorus and loses a proton, giving the alkyl dibromophosphite CH3CH2CH2-O-PBr2 with bromide released.\nStep 2: The O-PBr2 group is an excellent leaving group. Bromide attacks the primary carbon from the back and displaces it in an SN2 step.\nStep 3: The carbon skeleton never carries a positive charge, so bromine lands exactly where the hydroxyl was: 1-bromopropane.",
      "note": "This is why PBr3 (and SOCl2 for chlorides) is preferred over HBr for primary and secondary alcohols. HBr protonates the alcohol and, for anything but a primary substrate, invites a carbocation and the rearrangement that comes with it; the phosphite route stays SN2 and, on a chiral secondary alcohol, inverts cleanly.",
      "options": {
        "A": "Correct. The alcohol becomes a dibromophosphite ester, and bromide displaces that group by SN2 at the primary carbon, leaving bromine on the end carbon.",
        "B": "2-Bromopropane would need the positive charge to visit the secondary carbon, which only a carbocation could arrange. PBr3 never generates one; the displacement is a backside attack on a neutral phosphite ester.",
        "C": "Propene is the dehydration product an acid catalyst and heat would give. PBr3 in cold ether supplies a nucleophilic bromide and no strong acid, so substitution wins outright.",
        "D": "Propyl dibromophosphite is the intermediate, not the product. It is exactly the species bromide then attacks; isolating it would require withholding the bromide the first step releases."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "reactant_alts": [
      "A three-carbon chain with a hydroxyl group on the end carbon."
    ],
    "_why": "Survivor of the 15-copy propanol/PBr3 family. Authored here, then refiled to Ch 10, the chapter that teaches alkyl halides from alcohols; Ch 10 had no PBr3 or SOCl2 item."
  }
];
