// OChemStudyBuddy - McMurry Chapter 19
// Author: A. Elangovan, PhD
var CH19_QUESTIONS = [
  {
    "question_id": "ch19_q_wittig_styrene_scheme",
    "topic": "Wittig Reaction",
    "difficulty_level": "Medium",
    "question_text": "What is the organic product of the Wittig reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "O=Cc1ccccc1",
        "C=P(c1ccccc1)(c1ccccc1)c1ccccc1"
      ],
      "reagents": "THF",
      "conditions": "0 to 25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring bearing a CH=O group: benzaldehyde.",
        "A phosphorus atom double-bonded to a CH2 group and carrying three phenyl rings: methylenetriphenylphosphorane, the ylide."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-Phenylethan-1-ol",
        "smiles": "CC(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "2-Phenyloxirane (styrene oxide)",
        "smiles": "C1OC1c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Styrene (ethenylbenzene)",
        "smiles": "C=Cc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "(E)-Stilbene (1,2-diphenylethene)",
        "smiles": "C(=C/c1ccccc1)\\c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A phosphorus ylide is a carbanion stabilised by the adjacent phosphonium centre, and it adds to a carbonyl carbon the way every nucleophile in this chapter does. What makes the Wittig reaction different is the second step: the alkoxide oxygen bonds to phosphorus to close a four-membered oxaphosphetane, and that ring collapses to an alkene and triphenylphosphine oxide. The carbonyl oxygen and the ylide's CH2 have exchanged places, so the new C=C bond sits exactly where the C=O bond was, with no possibility of a shifted double bond.",
      "approach": "Step 1: Identify the ylide carbon: the CH2 double-bonded to phosphorus in Ph3P=CH2, which is the same species as the dipolar form Ph3P+-CH2-.\nStep 2: The ylide carbon attacks the carbonyl carbon of benzaldehyde, and the alkoxide oxygen bonds to phosphorus to give the oxaphosphetane, a four-membered ring containing P and O.\nStep 3: The ring fragments: the P-O bond becomes the very strong P=O bond of Ph3P=O, and the former C-C single bond becomes C=C.\nStep 4: The product joins the former carbonyl carbon to the former ylide carbon by a double bond: PhCH=CH2, styrene. Triphenylphosphine oxide is the by-product.",
      "note": "McMurry 19.11 (Nucleophilic Addition of Phosphorus Ylides: The Wittig Reaction) puts the value of the reaction in one sentence: the C=C bond is always exactly where the C=O group was, so unlike a Grignard-then-dehydrate route there is no mixture of regioisomers. The text offers two ways the oxaphosphetane can form, a one-step cycloaddition or a dipolar betaine that then closes, and leaves which one operates to the substrate and conditions. The sulfur ylide that gives the epoxide in option B is not in the OpenStax text at all; a student who has met it in lecture should file it as the same first step with a different second one.",
      "options": {
        "A": "1-Phenylethan-1-ol is what methylmagnesium bromide gives with benzaldehyde: a carbanion adds and the alkoxide is protonated at work-up. The ylide carbon adds the same way but carries a phosphonium group that then takes the oxygen away with it, so no alcohol survives.",
        "B": "Styrene oxide is the product of a sulfur ylide, Me2S+-CH2-, whose alkoxide closes onto its own carbon and expels dimethyl sulfide. With phosphorus the alkoxide oxygen bonds to P instead, because the P=O bond it goes on to form is far stronger than any S-C bond, and the ring that then fragments gives the alkene.",
        "C": "Correct. The ylide CH2 replaces the carbonyl oxygen; the oxaphosphetane collapses to styrene and triphenylphosphine oxide.",
        "D": "Stilbene would need a benzylidene ylide, Ph3P=CHPh, made from benzyl bromide and triphenylphosphine. The ylide drawn is the methylene ylide, so the second alkene carbon in the product is a CH2."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q41_gilman_conjugate_scheme",
    "topic": "Conjugate Addition",
    "difficulty_level": "Hard",
    "question_text": "What is the major product of the reaction sequence shown?",
    "options": [
      {
        "option_id": "A",
        "text": "1-Methylcyclohex-2-en-1-ol",
        "smiles": "CC1(O)C=CCCC1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "3-Methylcyclohexan-1-one",
        "smiles": "CC1CCCC(=O)C1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "2-Methylcyclohexan-1-one",
        "smiles": "CC1CCCCC1=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-Methylcyclohexan-1-ol",
        "smiles": "CC1CCCC(O)C1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An α,β-unsaturated ketone has two electrophilic carbons: the carbonyl carbon and, through the resonance form that puts the positive charge on the β carbon, C3 of the ring. Which one a nucleophile attacks depends on the nucleophile. A lithium diorganocopper (Gilman) reagent is the one organometallic that adds its alkyl group to the β carbon, a conjugate or 1,4-addition; Grignard and organolithium reagents attack the carbonyl carbon directly. The first-formed product of conjugate addition is an enolate, which is protonated on the α carbon at work-up, so the carbonyl group comes through unchanged.",
      "approach": "Step 1: Number the enone: C1 is the carbonyl carbon, C2 the α carbon, C3 the β carbon that carries a partial positive charge by resonance.\nStep 2: The methyl group of (CH3)2CuLi is delivered to C3; the electrons of the C=C bond move onto the carbonyl oxygen to give an enolate.\nStep 3: Aqueous acid protonates the enolate at C2, restoring the ketone.\nStep 4: The product is 3-methylcyclohexan-1-one, formed as a racemate because C3 becomes a stereocentre and the methyl can be delivered to either face.",
      "note": "McMurry 19.13 (Conjugate Nucleophilic Addition to α,β-Unsaturated Aldehydes and Ketones) is explicit that diorganocopper reagents are unique in giving conjugate addition and that primary, secondary, tertiary, aryl and alkenyl groups all transfer, while alkynyl groups do poorly. The same section restricts the reaction to α,β-unsaturated ketones, not aldehydes. A student who wants to check which product formed without drawing anything can use the IR, as the text's own problem suggests: the 1,4-product keeps a saturated ketone band near 1715, the 1,2-product has lost the C=O band and gained an O-H.",
      "options": {
        "A": "1-Methylcyclohex-2-en-1-ol is the 1,2-addition product that methylmagnesium bromide gives: the hard Grignard carbanion attacks the carbonyl carbon and the ring double bond survives. The softer cuprate goes to the β carbon instead.",
        "B": "Correct. The methyl group adds to the β carbon (C3), the enolate is protonated at C2 on work-up, and the ketone is retained: 3-methylcyclohexanone, racemic.",
        "C": "2-Methylcyclohexan-1-one places the methyl on the α carbon, which is the nucleophilic carbon of the enolate, not an electrophilic one; alkylating that position needs an enolate and an alkyl halide, the chemistry of Ch 22, and even then it is the C2-H that reacts, not the C=C.",
        "D": "3-Methylcyclohexan-1-ol would require a second step, reduction of the ketone by a hydride reagent. A cuprate delivers a methyl carbanion equivalent, not hydride, and the ketone survives the aqueous work-up."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "reaction_scheme": {
      "reactants": [
        "O=C1C=CCCC1"
      ],
      "reagents": "1. (CH3)2CuLi, ether, 0 °C",
      "conditions": "2. H3O+",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-membered ring with a ketone carbonyl and a ring double bond conjugated to it: cyclohex-2-en-1-one."
      ]
    }
  },
  {
    "question_id": "ch19_q1_naming_methylpentanal",
    "topic": "Naming Aldehydes and Ketones",
    "difficulty_level": "Easy",
    "question_text": "What is the IUPAC name of the compound shown?",
    "question_smiles": "CC(C)CCC=O",
    "structure_alt": "A five-carbon chain ending in a CH=O group, with a methyl branch on the carbon next to the far end.",
    "options": [
      {
        "option_id": "A",
        "text": "2-Methylpentanal",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "4-Methylpentanal",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "4-Methylpentan-1-al",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-Methylpentan-1-one",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An aldehyde is named by replacing the -e of the parent alkane with -al. Two things follow from the fact that a CHO group can only sit at the end of a chain: the parent chain must contain the CHO carbon, and that carbon is always C1, so the suffix never takes a locant. Substituents are then numbered from the CHO end whether or not that gives them the lowest numbers, because the principal group fixes the direction.",
      "approach": "Step 1: Find the longest chain that includes the CHO carbon: CHO-CH2-CH2-CH(CH3)-CH3 is five carbons, so the parent is pentanal.\nStep 2: Number from the CHO carbon as C1. The methyl branch is on the fourth carbon.\nStep 3: Cite the substituent with its locant and leave the suffix bare: 4-methylpentanal.\nStep 4: Check the alternative numbering: counting from the methyl end would put the CHO at C5, which is not allowed, because the aldehyde carbon must be C1.",
      "note": "McMurry 19.1 (Naming Aldehydes and Ketones) makes the same point with 2-ethyl-4-methylpentanal, whose longest chain is a hexane that does not include the CHO carbon and so is not the parent. The text also lists the common names IUPAC still accepts for the smallest aldehydes: formaldehyde, acetaldehyde, acrolein, crotonaldehyde and benzaldehyde. This compound has none, so the systematic name is the only one.",
      "options": {
        "A": "2-Methylpentanal numbers the chain from the wrong end, putting the branch at C2. The aldehyde carbon is C1 by definition, and counted from it the methyl is on C4.",
        "B": "Correct. Pentanal parent with the CHO carbon as C1, a methyl on C4, and no locant on the suffix.",
        "C": "The right molecule under the wrong name: a CHO group can only be at C1, so the locant 1 before the suffix is superfluous. Pentanal, not pentan-1-al.",
        "D": "The -one suffix is for ketones, whose carbonyl carbon sits between two other carbons. A C=O on a terminal carbon that still carries a hydrogen is an aldehyde, and a ketone cannot be at C1 of any chain."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q2_naming_oxobutanal",
    "topic": "Naming Aldehydes and Ketones",
    "difficulty_level": "Medium",
    "question_text": "What is the IUPAC name of the compound shown?",
    "question_smiles": "CC(=O)CC=O",
    "structure_alt": "A four-carbon chain with a C=O bearing a hydrogen at one end and a second C=O on the carbon adjacent to the terminal methyl group.",
    "options": [
      {
        "option_id": "A",
        "text": "4-Oxobutan-2-one",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "3-Oxobutanal",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "3-Oxobutan-1-al",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Oxobutanal",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When a molecule carries both an aldehyde and a ketone, only one can be the suffix, and the aldehyde outranks the ketone. The chain is therefore numbered from the CHO carbon as C1 and named as an -al, and the ketone oxygen is cited as a substituent with the prefix oxo- and a locant. The prefix oxo- means a doubly bonded oxygen that is not the principal group, and it is the standard way a lower-ranked carbonyl appears in a name.",
      "approach": "Step 1: Rank the groups: an aldehyde outranks a ketone, so the suffix is -al and the CHO carbon is C1.\nStep 2: Number from the CHO: C1 is CHO, C2 is CH2, C3 is the ketone carbon, C4 is the methyl. Four carbons: butanal.\nStep 3: The ketone oxygen on C3 becomes the prefix 3-oxo.\nStep 4: 3-Oxobutanal. The suffix takes no locant because an aldehyde is always at C1.",
      "note": "McMurry 19.1 (Naming Aldehydes and Ketones) introduces oxo- as the prefix used when the doubly bonded oxygen is treated as a substituent on a parent chain that carries a higher-priority group. The priority order that decides which group is the suffix runs acid > ester > amide > nitrile > aldehyde > ketone > alcohol > amine; it is worth memorising now, because Ch 21 names compounds with three of these at once. This compound is also called acetoacetaldehyde in older papers, a trivial name IUPAC does not retain.",
      "options": {
        "A": "4-Oxobutan-2-one treats the ketone as the principal group and the aldehyde as a substituent, the reverse of the priority order. An aldehyde outranks a ketone, so the suffix must be -al.",
        "B": "Correct. Aldehyde as the suffix with its carbon as C1, ketone at C3 cited as 3-oxo.",
        "C": "The right molecule under the wrong name: the locant 1 before -al is superfluous, because an aldehyde carbon is C1 by definition. Butanal, not butan-1-al.",
        "D": "2-Oxobutanal is a different compound, CH3CH2COCHO, with the ketone next to the aldehyde. Counting from the CHO carbon in the compound shown, the ketone carbon is C3, not C2."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q3_naming_cyclohexanecarbaldehyde",
    "topic": "Naming Aldehydes and Ketones",
    "difficulty_level": "Medium",
    "question_text": "What is the IUPAC name of the compound shown?",
    "question_smiles": "O=CC1CCCCC1",
    "structure_alt": "A saturated six-membered ring with a CH=O group attached directly to one ring carbon.",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclohexanal",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Formylcyclohexane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclohexanecarbaldehyde",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Cyclohexylmethanal",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The suffix -al replaces the -e of a chain whose last carbon is the CHO carbon. A ring carbon cannot be that carbon, because it already has two ring bonds and a hydrogen or substituent and has no room for a doubly bonded oxygen. When the CHO group hangs off a ring, the ring is the parent and the whole CHO group is expressed by the suffix -carbaldehyde, which adds the carbon rather than counting it in the parent.",
      "approach": "Step 1: The CHO carbon is not part of the ring, so the ring cannot be named as a cyclohexan-al.\nStep 2: The parent is the ring, cyclohexane, and the aldehyde group attached to it takes the suffix carbaldehyde.\nStep 3: There is only one substituent on the ring, so no locant is needed.\nStep 4: Cyclohexanecarbaldehyde.",
      "note": "McMurry 19.1 (Naming Aldehydes and Ketones) states the rule in one line, that for cyclic aldehydes in which the CHO group is directly attached to a ring, the ring name followed by carbaldehyde is used, and Table 19.1 gives benzenecarbaldehyde as the systematic name behind benzaldehyde. Catalogues and older literature use the ending carboxaldehyde for the same compounds; it is the CAS spelling, not a different rule.",
      "options": {
        "A": "Cyclohexanal treats a ring carbon as the aldehyde carbon. A ring carbon has two ring bonds already and cannot also be C=O with a hydrogen, so the -al suffix cannot be applied to a ring.",
        "B": "Formyl- is the prefix for a CHO group that is not the principal group, used when an acid or ester outranks it. Here the aldehyde is the only functional group, so it must be the suffix.",
        "C": "Correct. The ring is the parent and the attached CHO group is named by the suffix carbaldehyde: cyclohexanecarbaldehyde.",
        "D": "Cyclohexylmethanal treats the CHO carbon as a one-carbon parent chain with the ring as a substituent. IUPAC and the text both make the ring the parent when a CHO is attached directly to it, exactly as benzaldehyde is benzenecarbaldehyde and not phenylmethanal."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q4_scheme_hexyne_hydration",
    "topic": "Preparing Aldehydes and Ketones",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "CCCCC#C"
      ],
      "reagents": "H2O, H2SO4",
      "conditions": "HgSO4 (cat.)",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-carbon chain with a triple bond at one end: hex-1-yne."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Hexanal",
        "smiles": "CCCCCC=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Hexan-2-one",
        "smiles": "CCCCC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Hexan-3-one",
        "smiles": "CCCC(=O)CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Hex-1-en-2-ol",
        "smiles": "C=C(O)CCCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Mercury-catalysed hydration adds water across a triple bond with Markovnikov regiochemistry: the OH goes to the more substituted alkyne carbon, the H to the terminal CH. The first product is an enol, but an enol is not a stable compound; it tautomerises to its carbonyl isomer, and for a terminal alkyne that carbonyl compound is always a methyl ketone. Hydration is therefore one of the standard ketone preparations, and it never gives an aldehyde from a terminal alkyne.",
      "approach": "Step 1: The alkyne is protonated (or complexed by Hg2+) at the terminal carbon, so the positive charge sits on the more substituted carbon, C2.\nStep 2: Water attacks C2 and loses a proton, giving the enol hex-1-en-2-ol with the OH on C2.\nStep 3: Keto-enol tautomerism moves the hydrogen from oxygen to C1 and forms C=O at C2.\nStep 4: The product is hexan-2-one, a methyl ketone.",
      "note": "McMurry 19.2 (Preparing Aldehydes and Ketones) lists alkyne hydration among the ketone syntheses only by reference, sending the reader back to the alkyne chapter, and Problem 19-4 asks for 3-hexyne to 3-hexanone by the same reaction. The pairing to remember is regiochemical: Hg2+/H2SO4 hydration gives the methyl ketone, hydroboration with a bulky borane followed by H2O2 gives the aldehyde, so a terminal alkyne is a route to either carbonyl compound depending on the reagent.",
      "options": {
        "A": "Hexanal is the anti-Markovnikov product, which needs hydroboration with a hindered borane followed by H2O2/NaOH. Mercury-catalysed hydration puts the oxygen on the internal carbon.",
        "B": "Correct. Markovnikov hydration gives the enol with OH on C2, which tautomerises to hexan-2-one.",
        "C": "Hexan-3-one would need the oxygen on C3, but neither alkyne carbon is C3; hydration of hex-1-yne can only put the carbonyl at C1 or C2, and Markovnikov selectivity chooses C2. Hexan-3-one is the hydration product of hex-3-yne.",
        "D": "Hex-1-en-2-ol is the enol that forms first, and it is drawn here so you can see it, but it is not isolated: an enol tautomerises to its ketone under the reaction conditions, and the ketone is the more stable isomer by about 12 kcal/mol."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q5_scheme_ozonolysis_methylcyclohexene",
    "topic": "Preparing Aldehydes and Ketones",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product of the reaction sequence shown?",
    "reaction_scheme": {
      "reactants": [
        "CC1=CCCCC1"
      ],
      "reagents": "1. O3, CH2Cl2, -78 °C",
      "conditions": "2. Zn, H2O",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-membered ring with one double bond; a methyl group sits on one of the two alkene carbons: 1-methylcyclohexene."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Heptanedial",
        "smiles": "O=CCCCCCC=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "6-Oxoheptanoic acid",
        "smiles": "CC(=O)CCCCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "6-Oxoheptanal",
        "smiles": "CC(=O)CCCCC=O",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Cyclohexanone and formaldehyde",
        "smiles": "O=C1CCCCC1.C=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Ozonolysis cleaves a C=C bond completely and turns each alkene carbon into a carbonyl carbon. An alkene carbon that carried two carbon substituents becomes a ketone, one that carried a hydrogen becomes an aldehyde, and the reductive work-up with zinc stops there. When the double bond is inside a ring, cutting it does not make two molecules: the ring opens into a single chain with a carbonyl group at each end.",
      "approach": "Step 1: Locate the two alkene carbons. C1 carries the methyl and two ring bonds (disubstituted); C2 carries a hydrogen and one ring bond (monosubstituted).\nStep 2: Cut the C1=C2 bond and put an oxygen on each carbon. C1 becomes a ketone carbon bearing the methyl; C2 becomes an aldehyde carbon.\nStep 3: The ring is now an open chain of six ring carbons plus the methyl: CH3-CO-CH2-CH2-CH2-CH2-CHO, seven carbons.\nStep 4: Number from the aldehyde: 6-oxoheptanal.",
      "note": "McMurry 19.2 (Preparing Aldehydes and Ketones) names ozonolysis of alkenes in which one of the unsaturated carbons is disubstituted as a ketone synthesis, and Problem 19-4 asks for exactly this substrate, 1-methylcyclohexene, though there the target is 2-methylcyclohexanone by a different route. Ozonolysis of a ring alkene is the one case where the product carbon count equals the reactant's: nothing is lost, the chain simply opens. Compare the oxidative work-up with H2O2, which takes the aldehyde end on to the acid.",
      "options": {
        "A": "Heptanedial has an aldehyde at both ends, which would need both alkene carbons to carry a hydrogen. C1 of 1-methylcyclohexene carries a methyl, so that end becomes a ketone. Heptanedial is the ozonolysis product of cycloheptene.",
        "B": "6-Oxoheptanoic acid is what an oxidative work-up (H2O2) gives: the aldehyde end is oxidised to the acid. Zinc in water is the reductive work-up and leaves the aldehyde intact.",
        "C": "Correct. The ring opens at the double bond; the methyl-bearing carbon becomes the ketone and the CH end becomes the aldehyde, giving a seven-carbon keto-aldehyde.",
        "D": "Cyclohexanone and formaldehyde would come from methylenecyclohexane, where the double bond is exocyclic and cutting it separates a CH2 from the ring. In 1-methylcyclohexene the double bond is in the ring, so the methyl stays attached to what becomes the ketone carbon."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q6_dmp_aldehyde_reagent",
    "topic": "Preparing Aldehydes and Ketones",
    "difficulty_level": "Medium",
    "question_text": "Which reagent converts the alcohol shown into hexanal without carrying the oxidation on to hexanoic acid?",
    "question_smiles": "CCCCCCO",
    "structure_alt": "A straight six-carbon chain ending in an OH group.",
    "options": [
      {
        "option_id": "A",
        "text": "CrO3, H2SO4, H2O, acetone (Jones reagent)",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Dess-Martin periodinane, CH2Cl2, 25 °C",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "KMnO4, NaOH, H2O; then H3O+",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "DIBAH, toluene, -78 °C; then H2O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A primary alcohol can stop at the aldehyde or go on to the carboxylic acid, and what decides it is water. In aqueous oxidants the aldehyde formed first adds water to give a hydrate, RCH(OH)2, which is itself a secondary-alcohol-like species that the oxidant converts to the acid. An oxidant used in a dry, non-aqueous solvent has no water to make the hydrate, so the aldehyde survives. The Dess-Martin periodinane in dichloromethane is the text's reagent of choice for exactly this reason.",
      "approach": "Step 1: Decide the target oxidation level: aldehyde, one step up from the alcohol, not the acid.\nStep 2: Rule out aqueous oxidants: Jones reagent and alkaline permanganate are both used in water and take a primary alcohol through the hydrate to the acid.\nStep 3: Rule out reducing agents: DIBAH delivers hydride and cannot oxidise anything.\nStep 4: The Dess-Martin periodinane in CH2Cl2 at room temperature oxidises hexan-1-ol to hexanal and stops.",
      "note": "McMurry 19.2 (Preparing Aldehydes and Ketones) calls oxidation of a primary alcohol perhaps the best method of aldehyde synthesis and gives the Dess-Martin periodinane in dichloromethane as the reagent, with a pointer back to 17.7. Note what this edition does not say: pyridinium chlorochromate (PCC) in CH2Cl2, the reagent most lecture notes and older editions use for the same job, does not appear. PCC is a fine answer in lecture and on the ACS exam; it works by the same logic, a chromium(VI) oxidant with no water present.",
      "options": {
        "A": "Jones reagent is chromic acid in aqueous acetone. Water is present, the aldehyde hydrates, and the hydrate is oxidised straight on to hexanoic acid.",
        "B": "Correct. The periodinane oxidises the primary alcohol in dry dichloromethane, where no hydrate can form, so the product is the aldehyde.",
        "C": "Alkaline permanganate in water is the text's own reagent for oxidising an aldehyde to an acid (19.3), so it cannot be the reagent for stopping at the aldehyde; hexan-1-ol would end up as hexanoate.",
        "D": "DIBAH is a reducing agent. At -78 °C it turns an ester into an aldehyde by delivering one hydride, but it has nothing to offer an alcohol, which is already below the aldehyde oxidation level."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q7_scheme_dibah_ester",
    "topic": "Preparing Aldehydes and Ketones",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction sequence shown?",
    "reaction_scheme": {
      "reactants": [
        "CCCCCC(=O)OC"
      ],
      "reagents": "1. DIBAH (1 equiv), toluene, -78 °C",
      "conditions": "2. H2O",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-carbon acyl chain whose carbonyl carbon also bears an OCH3 group: the methyl ester of hexanoic acid."
      ]
    },
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
        "text": "Hexanoic acid",
        "smiles": "CCCCCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyl hexanoate (no reaction)",
        "smiles": "CCCCCC(=O)OC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Diisobutylaluminium hydride delivers a single hydride to an ester carbonyl, and the tetrahedral intermediate it forms, an aluminium alkoxide with the OCH3 still attached, is stable at -78 °C. Because that intermediate does not collapse until the aqueous work-up, there is no free aldehyde in the flask while hydride is present, and nothing to over-reduce. Only when water is added does the intermediate lose methanol and become the aldehyde. Lithium aluminium hydride behaves differently because its intermediate collapses at once and the aldehyde is reduced again.",
      "approach": "Step 1: Hydride from DIBAH adds to the ester carbonyl carbon, giving a tetrahedral aluminium alkoxide that still carries the OCH3 group.\nStep 2: At -78 °C this intermediate persists; it does not expel methoxide while the reaction runs.\nStep 3: Water is added. The intermediate collapses, expelling methanol, and the carbonyl re-forms.\nStep 4: The product is hexanal. Excess DIBAH or a higher temperature would reduce it further to hexan-1-ol.",
      "note": "McMurry 19.2 (Preparing Aldehydes and Ketones) introduces DIBAH as the partial reduction of an ester to an aldehyde, run at -78 °C (dry-ice temperature) in toluene, and promises the fuller treatment in Ch 21. The stoichiometry matters as much as the temperature: one equivalent of hydride gives the aldehyde, two give the alcohol. The same one-hydride logic appears in Ch 21 when acid chlorides are reduced to aldehydes with a hindered hydride, and in Ch 24 when nitriles are reduced to aldehydes with DIBAH.",
      "options": {
        "A": "Correct. One hydride adds at -78 °C, the tetrahedral intermediate survives until work-up, and hexanal is released when water is added.",
        "B": "Hexan-1-ol is the LiAlH4 product, or the DIBAH product with excess reagent at a higher temperature: the aldehyde is reduced a second time. With one equivalent at -78 °C the aldehyde is never exposed to hydride.",
        "C": "Hexanoic acid is the hydrolysis product of the ester, which needs aqueous acid or base and heat, not a hydride reagent. DIBAH reduces; it does not hydrolyse.",
        "D": "Esters are less electrophilic than aldehydes and ketones, but an aluminium hydride is more than reactive enough for them. No reaction is what a mild hydride like NaBH4 gives with an ester, not DIBAH."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q8_route_propiophenone",
    "topic": "Preparing Aldehydes and Ketones",
    "difficulty_level": "Medium",
    "question_text": "Which one-step reaction gives the ketone shown as its major product?",
    "question_smiles": "CCC(=O)c1ccccc1",
    "structure_alt": "A benzene ring attached to a carbonyl carbon that carries an ethyl group.",
    "options": [
      {
        "option_id": "A",
        "text": "Benzene + 1-chloropropane, AlCl3",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Benzaldehyde + CH3CH2MgBr, then H3O+",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzene + propanoyl chloride, AlCl3",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Ethylbenzene + acetyl chloride, AlCl3",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An aryl ketone is made in one step by Friedel-Crafts acylation: an acid chloride and AlCl3 generate an acylium ion, which the aromatic ring attacks, and the product is the ketone with the acyl carbon bonded to the ring. The acylium ion does not rearrange, and the ketone it gives deactivates the ring toward a second acylation, which is why acylation is cleaner than alkylation. Choosing the route means matching the acyl group to the target: an ethyl group on the carbonyl carbon calls for a three-carbon acid chloride.",
      "approach": "Step 1: Disconnect the target at the ring-to-carbonyl bond: the ring comes from benzene, the C(=O)CH2CH3 unit from propanoyl chloride.\nStep 2: Propanoyl chloride + AlCl3 gives the propanoyl acylium ion CH3CH2C+=O.\nStep 3: Benzene attacks the acylium ion; loss of a proton restores aromaticity.\nStep 4: The product is 1-phenylpropan-1-one (propiophenone) in one step.",
      "note": "McMurry 19.2 (Preparing Aldehydes and Ketones) lists Friedel-Crafts acylation with an acid chloride and AlCl3 as a ketone synthesis and points to the aromatic-substitution chapter for the mechanism. The text also mentions the acid chloride plus lithium diorganocopper route (R2CuLi + RCOCl), which would make the same ketone from benzoyl chloride and diethylcuprate or from propanoyl chloride and diphenylcuprate; it is the route to use when the aromatic ring carries a substituent that would misdirect or shut down a Friedel-Crafts reaction.",
      "options": {
        "A": "1-Chloropropane and AlCl3 is Friedel-Crafts alkylation, not acylation: the propyl cation rearranges by a hydride shift to the isopropyl cation and the product is mostly isopropylbenzene, with no carbonyl group at all, and the alkylbenzene formed is more reactive than benzene and alkylates again.",
        "B": "Ethylmagnesium bromide adds to benzaldehyde to give 1-phenylpropan-1-ol, a secondary alcohol. Reaching the ketone would then need a second step, oxidation with the Dess-Martin periodinane, so this is not a one-step route.",
        "C": "Correct. Propanoyl chloride and AlCl3 form the acylium ion that benzene attacks, giving propiophenone directly.",
        "D": "Acetylating ethylbenzene puts a CH3C=O group on the ring, para to the ethyl, giving 4-ethylacetophenone. The ethyl group ends up on the ring, not on the carbonyl carbon, so it is the wrong ketone."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q9_scheme_aldehyde_oxidation",
    "topic": "Oxidation of Aldehydes",
    "difficulty_level": "Easy",
    "question_text": "What is the major organic product of the reaction sequence shown?",
    "reaction_scheme": {
      "reactants": [
        "CCCCC=O"
      ],
      "reagents": "1. KMnO4, NaOH, H2O",
      "conditions": "2. H3O+",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A five-carbon chain ending in a CH=O group: pentanal."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Pentan-1-ol",
        "smiles": "CCCCCO",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Pentanoic acid",
        "smiles": "CCCCC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Butanoic acid",
        "smiles": "CCCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Pentane-1,1-diol",
        "smiles": "CCCCC(O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An aldehyde is easily oxidised to a carboxylic acid because its carbonyl carbon still carries a hydrogen, and that hydrogen is what an oxidant removes. The reaction runs through the hydrate: water adds reversibly to the C=O to give a 1,1-diol, which is a secondary-alcohol-like carbon with a hydrogen and is oxidised like any secondary alcohol. Ketones have no hydrogen on the carbonyl carbon and are inert to the same reagents. Alkaline permanganate gives the carboxylate salt, and acid at work-up liberates the acid.",
      "approach": "Step 1: Pentanal adds water reversibly to give a small equilibrium amount of the hydrate, CH3CH2CH2CH2CH(OH)2.\nStep 2: Permanganate oxidises the hydrate, removing the C-H hydrogen, to give pentanoate; the equilibrium keeps supplying hydrate as it is consumed.\nStep 3: In NaOH the product is the sodium salt, sodium pentanoate, and the manganese ends up as MnO2.\nStep 4: Acidification with H3O+ protonates the carboxylate: pentanoic acid. The carbon count is unchanged.",
      "note": "McMurry 19.3 (Oxidation of Aldehydes and Ketones) names alkaline KMnO4 and hot HNO3 as reagents that convert aldehydes into carboxylic acids at room temperature, and gives the hydrate as the intermediate through which the oxidation occurs, with the CHO hydrogen as the structural reason aldehydes react and ketones do not. The same section adds, for completeness, that hot alkaline permanganate slowly cleaves a ketone at the C-C bond next to the carbonyl, a reaction rarely used.",
      "options": {
        "A": "Pentan-1-ol is the reduction product, what NaBH4 would give. Permanganate is an oxidant; it removes hydrogen from the carbonyl carbon rather than adding it.",
        "B": "Correct. Oxidation through the hydrate gives pentanoate under the basic conditions, and acidic work-up releases pentanoic acid.",
        "C": "Butanoic acid has lost a carbon. Oxidation of an aldehyde keeps every carbon: the CHO carbon becomes the COOH carbon. Losing a carbon happens in the haloform reaction of methyl ketones, not here.",
        "D": "Pentane-1,1-diol is the hydrate, the intermediate the oxidation goes through. It exists only in small equilibrium amounts and is consumed by the oxidant; it is not the isolated product."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q10_tollens_silver_mirror",
    "topic": "Oxidation of Aldehydes",
    "difficulty_level": "Easy",
    "question_text": "Which compound deposits a silver mirror when warmed with Tollens' reagent, Ag(NH3)2+ in aqueous ammonia?",
    "options": [
      {
        "option_id": "A",
        "text": "Hexan-2-one",
        "smiles": "CCCCC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Cyclohexanone",
        "smiles": "O=C1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Hexan-1-ol",
        "smiles": "CCCCCCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Hexanal",
        "smiles": "CCCCCC=O",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tollens' reagent is a mild oxidant, silver(I) held in solution as its ammonia complex, and it is selective in a way that stronger oxidants are not. It oxidises aldehydes to carboxylates because the aldehyde carbon carries a hydrogen that can be removed through the hydrate, and as it does so silver(I) is reduced to silver metal, which plates the glass as a mirror. It is too weak to oxidise alcohols, and ketones have no carbonyl hydrogen to give up, so both leave the reagent unchanged.",
      "approach": "Step 1: Ask what Tollens' reagent can oxidise: only an aldehyde, through its hydrate, and the hydrogen on the carbonyl carbon is the requirement.\nStep 2: Hexan-2-one and cyclohexanone are ketones: two carbons on the carbonyl carbon, no hydrogen. No reaction.\nStep 3: Hexan-1-ol has a hydrogen on the carbinol carbon, but Ag(NH3)2+ is far too mild an oxidant to take an alcohol to an aldehyde.\nStep 4: Hexanal is oxidised to hexanoate and silver metal deposits: the mirror.",
      "note": "Tollens' reagent is not in the OpenStax text: McMurry 19.3 (Oxidation of Aldehydes and Ketones) makes the same aldehyde-versus-ketone distinction with alkaline KMnO4 and hot HNO3, and gives the hydrate mechanism that explains why the CHO hydrogen matters. The test is standard lecture and ACS material and appears in the structure-elucidation problems in this app, so it is kept here. Its relatives are Fehling's and Benedict's solutions, copper(II) reagents that give a red Cu2O precipitate with aliphatic aldehydes and are the classical test for reducing sugars.",
      "options": {
        "A": "Hexan-2-one is a ketone: its carbonyl carbon carries two alkyl groups and no hydrogen, so there is nothing for a mild oxidant to remove. No mirror.",
        "B": "Cyclohexanone is also a ketone, with both carbonyl substituents in the ring. It is inert to Tollens' reagent for the same reason as any ketone.",
        "C": "Hexan-1-ol could in principle be oxidised, but Ag(NH3)2+ is too weak an oxidant for an alcohol; only after a chromium or periodinane oxidation to hexanal would it respond.",
        "D": "Correct. The aldehyde is oxidised to hexanoate through its hydrate, and silver(I) is reduced to the metallic mirror."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q11_reactivity_most_reactive",
    "topic": "Nucleophilic Addition: Reactivity",
    "difficulty_level": "Medium",
    "question_text": "Which carbonyl compound is the most reactive toward nucleophilic addition?",
    "options": [
      {
        "option_id": "A",
        "text": "Propanal",
        "smiles": "CCC=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Methanal (formaldehyde)",
        "smiles": "C=O",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Propan-2-one (acetone)",
        "smiles": "CC(C)=O",
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
      "context": "Two things set the reactivity of a carbonyl compound toward nucleophiles, and both favour the compound with the fewest and least electron-donating substituents. Sterically, a nucleophile approaching at about 105° to the C=O bond meets less crowding when the carbonyl carbon carries hydrogens rather than alkyl groups. Electronically, each alkyl group donates electron density inductively and reduces the partial positive charge on the carbonyl carbon, the same argument that makes a tertiary carbocation more stable than a primary one, and an aromatic ring donates by resonance as well.",
      "approach": "Step 1: Count substituents on the carbonyl carbon. Methanal has two hydrogens, propanal one alkyl group, acetone two, benzaldehyde one aryl group.\nStep 2: Aldehydes beat ketones: acetone is the least reactive of the aliphatic three on both steric and electronic grounds.\nStep 3: Among aldehydes, the aromatic ring of benzaldehyde donates electron density into the carbonyl by resonance and makes the carbon less electrophilic than in an aliphatic aldehyde.\nStep 4: Methanal, with no carbon substituent at all, is the most electrophilic and the least hindered: the most reactive.",
      "note": "McMurry 19.4 (Nucleophilic Addition Reactions of Aldehydes and Ketones) gives both arguments, with electrostatic potential maps showing the carbonyl carbon of formaldehyde as more positive than that of benzaldehyde. The hydration equilibria of 19.5 put numbers on the same trend: formaldehyde in water is 99.9% hydrate, acetone 0.1%. The extreme reactivity of methanal is also why it is handled as its aqueous solution (formalin) or as its polymer, paraformaldehyde, rather than as the free gas.",
      "options": {
        "A": "Propanal is a reactive aldehyde, but its ethyl group donates electron density to the carbonyl carbon and adds some steric bulk. Methanal, with two hydrogens, has neither disadvantage.",
        "B": "Correct. No alkyl groups to donate electrons or to crowd the nucleophile's approach: methanal is the most electrophilic carbonyl compound of the four.",
        "C": "Acetone is a ketone: two methyl groups both donate electron density and both crowd the carbonyl carbon. It is the least reactive of the aliphatic compounds here, hydrating only 0.1% in water.",
        "D": "Benzaldehyde has only one substituent, but the aromatic ring donates electron density by resonance into the carbonyl group, making the carbon noticeably less positive than in an aliphatic aldehyde. Aromatic aldehydes are less reactive than aliphatic ones."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q12_substituent_effect_benzaldehydes",
    "topic": "Nucleophilic Addition: Reactivity",
    "difficulty_level": "Hard",
    "question_text": "Which aldehyde forms its cyanohydrin fastest with HCN and catalytic KCN?",
    "options": [
      {
        "option_id": "A",
        "text": "4-Methoxybenzaldehyde",
        "smiles": "COc1ccc(C=O)cc1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "4-Methylbenzaldehyde",
        "smiles": "Cc1ccc(C=O)cc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-Nitrobenzaldehyde",
        "smiles": "O=Cc1ccc([N+](=O)[O-])cc1",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Benzaldehyde",
        "smiles": "O=Cc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A ring substituent changes how electrophilic the carbonyl carbon is, and it does so by the same donating and withdrawing effects that governed electrophilic aromatic substitution, but with the sign reversed. In substitution a donor helped because the ring was the nucleophile; here the carbonyl carbon is the electrophile, so a donor that pushes electron density into the C=O makes the carbon less positive and slows nucleophilic addition, while a withdrawing group pulls density out and speeds it up. A para nitro group, withdrawing by both resonance and induction, is the strongest activator of the carbonyl in the set.",
      "approach": "Step 1: Classify each para substituent. OCH3 is a strong resonance donor; CH3 a weak donor; H the reference; NO2 a strong resonance and inductive acceptor.\nStep 2: A donor puts negative character on the carbonyl oxygen and reduces the positive charge at the carbonyl carbon, slowing cyanide attack. Rank: 4-methoxy slowest, then 4-methyl, then benzaldehyde.\nStep 3: The nitro group draws electron density out of the ring and away from the carbonyl carbon, increasing its positive charge.\nStep 4: 4-Nitrobenzaldehyde adds cyanide fastest and also has the most favourable equilibrium.",
      "note": "McMurry 19.4 (Nucleophilic Addition Reactions of Aldehydes and Ketones) sets exactly this comparison as Problem 19-6, p-nitrobenzaldehyde against p-methoxybenzaldehyde, and the electrostatic-potential argument the section makes for benzaldehyde versus formaldehyde extends directly to substituted rings. The same substituent effect appears in the hydration equilibria: 4-nitrobenzaldehyde is measurably hydrated in water while 4-methoxybenzaldehyde is not, and it shows up again in Ch 21 in the rates of ester hydrolysis.",
      "options": {
        "A": "4-Methoxybenzaldehyde is the slowest: the methoxy group donates a lone pair into the ring by resonance, and one resonance form puts that negative charge on the carbonyl oxygen, leaving the carbonyl carbon the least electrophilic of the four.",
        "B": "A para methyl is a weak donor by induction and hyperconjugation. It slows the addition slightly relative to benzaldehyde, and far less than methoxy does, but it slows it.",
        "C": "Correct. The nitro group withdraws electron density by resonance and induction, making the carbonyl carbon the most positive and the tetrahedral intermediate the most stabilised.",
        "D": "Benzaldehyde is the unsubstituted reference: faster than the two donor-substituted aldehydes, slower than the nitro compound. The ring itself already donates by resonance, which is why all four are slower than an aliphatic aldehyde."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q13_hydrate_chloral",
    "topic": "Hydration",
    "difficulty_level": "Medium",
    "question_text": "Which carbonyl compound exists almost entirely as its gem-diol (hydrate) in aqueous solution?",
    "options": [
      {
        "option_id": "A",
        "text": "Trichloroacetaldehyde (chloral)",
        "smiles": "ClC(Cl)(Cl)C=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propan-2-one (acetone)",
        "smiles": "CC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetophenone",
        "smiles": "CC(=O)c1ccccc1",
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
      "context": "Hydration is reversible, and where the equilibrium sits depends on how well the carbonyl form is stabilised relative to the tetrahedral diol. Alkyl and aryl groups stabilise the C=O by donating electron density into its partial positive carbon, so they push the equilibrium toward the carbonyl. A strongly electron-withdrawing group next to the carbonyl does the opposite: it makes the carbonyl carbon more electrophilic and the carbonyl form less stable, so water adds and stays. Three chlorines on the carbon next to the aldehyde are the classic case.",
      "approach": "Step 1: Identify the substituents on each carbonyl carbon and ask whether they donate or withdraw.\nStep 2: Acetone (two methyls), acetophenone (methyl and phenyl) and benzaldehyde (phenyl) all carry donors; each is under 1% hydrated in water.\nStep 3: Chloral has an H and a CCl3 group. The three chlorines pull electron density from the carbonyl carbon by induction, destabilising the C=O and leaving the carbon very electrophilic.\nStep 4: Water adds essentially completely: chloral hydrate, Cl3C-CH(OH)2, is the stable, crystalline form.",
      "note": "McMurry 19.5 (Nucleophilic Addition of H2O: Hydration) gives the two anchor numbers, formaldehyde 99.9% hydrate and acetone 0.1%, and sets chloral hydrate as Problem 19-7. The same section explains why α-keto acids such as pyruvic acid (60% hydrate) favour the diol: an adjacent positively polarised carbon destabilises the keto form, the same argument as the chlorines here. Chloral hydrate was the first synthetic sedative, and its stability as an isolable gem-diol is what made it a drug rather than an aldehyde.",
      "options": {
        "A": "Correct. The CCl3 group withdraws electron density inductively, destabilising the carbonyl and making the carbon so electrophilic that the hydrate is the dominant form.",
        "B": "Acetone is 0.1% hydrate at equilibrium: two methyl groups donate electron density to the carbonyl carbon and crowd it, and the ketone is the stable form.",
        "C": "Acetophenone is even less hydrated than acetone: a phenyl group conjugated with the C=O stabilises the carbonyl by resonance, and a methyl donates as well. The hydrate is negligible.",
        "D": "Benzaldehyde, an aromatic aldehyde, is under 1% hydrated: the ring donates electron density into the carbonyl by resonance and stabilises the C=O relative to the diol."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q14_hydration_base_first_intermediate",
    "topic": "Hydration",
    "difficulty_level": "Medium",
    "question_text": "In the base-catalysed hydration of acetone (NaOH, H2O), which species is formed in the first step of the mechanism?",
    "options": [
      {
        "option_id": "A",
        "text": "The protonated carbonyl, (CH3)2C=OH+",
        "smiles": "CC(C)=[OH+]",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "The tetrahedral alkoxide, (CH3)2C(OH)O-",
        "smiles": "CC(C)([O-])O",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "The enolate, CH2=C(CH3)O-",
        "smiles": "C=C(C)[O-]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The gem-diol, (CH3)2C(OH)2",
        "smiles": "CC(C)(O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Base and acid catalyse the same overall addition by attacking opposite ends of the problem. Base converts the weak nucleophile water into hydroxide, a much better nucleophile, which adds directly to the carbonyl carbon; the first-formed species is therefore the tetrahedral alkoxide, and a proton is picked up from water afterward. Acid does the reverse: it protonates the carbonyl oxygen first, making a better electrophile, and neutral water then adds. The order of the steps is what the question is really about.",
      "approach": "Step 1: Under basic conditions the active nucleophile is hydroxide, not water.\nStep 2: Hydroxide attacks the carbonyl carbon; the C=O π electrons move onto oxygen; the carbon goes from sp2 to sp3. The product of this step is the alkoxide (CH3)2C(OH)O-.\nStep 3: The alkoxide takes a proton from water to give the neutral gem-diol and regenerate hydroxide, which is why it is a catalyst.\nStep 4: The first intermediate is the tetrahedral alkoxide.",
      "note": "McMurry 19.5 (Nucleophilic Addition of H2O: Hydration) draws both mechanisms side by side in Figure 19.5 and states the key difference in one sentence: base makes a better nucleophile, acid makes a better electrophile. The same two-way catalysis reappears for every reversible addition in the chapter, cyanohydrin, hemiacetal and carbinolamine formation alike, and knowing which end the catalyst works on is what lets you predict the first intermediate each time.",
      "options": {
        "A": "Protonating the carbonyl oxygen is the first step of the acid-catalysed mechanism. In sodium hydroxide there is no acid to do it, and the electrophile is the neutral ketone.",
        "B": "Correct. Hydroxide adds to the carbonyl carbon to give the tetrahedral alkoxide, which is then protonated by water.",
        "C": "The enolate forms when hydroxide removes an α hydrogen instead of adding to the carbon. That is a real competing process and the basis of Ch 22, but it is not on the path to the hydrate; the enolate's carbon carries the charge, and the diol needs oxygen on carbon.",
        "D": "The gem-diol is the product of the addition, formed in the second step when the alkoxide is protonated by water. It is not the first intermediate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q15_scheme_cyanohydrin_cyclohexanone",
    "topic": "Cyanohydrins",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "O=C1CCCCC1"
      ],
      "reagents": "HCN, KCN (cat.)",
      "conditions": "25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-membered ring with one carbonyl group: cyclohexanone."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-Hydroxycyclohexane-1-carbonitrile",
        "smiles": "N#CC1(O)CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclohexanecarbonitrile",
        "smiles": "N#CC1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Hydroxycyclohexane-1-carbonitrile",
        "smiles": "N#CC1CCCCC1O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclohexanone (no reaction)",
        "smiles": "O=C1CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Cyanide is a carbon nucleophile that adds to a carbonyl carbon like any other, and the protonated adduct is a cyanohydrin: OH and CN on the same carbon. HCN itself is too weak an acid to supply much cyanide, so the reaction is slow with pure HCN and fast once a little base generates CN-; the base is then regenerated when the alkoxide takes a proton from HCN. Cyanohydrin formation is unusual among additions of acids H-Y in that the equilibrium favours the adduct for aldehydes and unhindered ketones.",
      "approach": "Step 1: KCN supplies the nucleophile, cyanide ion. Cyclohexanone is unhindered, so addition is feasible.\nStep 2: Cyanide attacks the carbonyl carbon; the π electrons move onto oxygen, giving the tetrahedral alkoxide with CN on the former carbonyl carbon.\nStep 3: The alkoxide is protonated by HCN, which regenerates cyanide.\nStep 4: The product has OH and CN on C1: 1-hydroxycyclohexane-1-carbonitrile, the cyanohydrin.",
      "note": "McMurry 19.6 (Nucleophilic Addition of HCN: Cyanohydrin Formation) credits Lapworth's early-1900s work for showing that the reaction is reversible and base-catalysed, and Problem 19-9 makes the steric point: cyclohexanone forms its cyanohydrin in good yield but 2,2,6-trimethylcyclohexanone does not, because the flanking methyls block the approach of cyanide and the crowded adduct is not favoured at equilibrium. The value of the cyanohydrin is what comes next: hydrolysis to an α-hydroxy acid or reduction to a β-amino alcohol.",
      "options": {
        "A": "Correct. Cyanide adds to the carbonyl carbon and protonation gives the cyanohydrin, with OH and CN on the same carbon.",
        "B": "Cyclohexanecarbonitrile has the CN in place of the oxygen, as if cyanide had substituted for the carbonyl oxygen. Carbonyl compounds undergo addition, not substitution: the oxygen stays as an OH group.",
        "C": "2-Hydroxycyclohexane-1-carbonitrile has the CN on the carbon next to the carbonyl carbon. The α carbon is not electrophilic in a saturated ketone; cyanide bonds to the carbonyl carbon itself.",
        "D": "No reaction is the outcome for a hindered ketone such as 2,2,6-trimethylcyclohexanone, or for pure HCN with no base. With catalytic cyanide and an unhindered ketone the addition is fast and the equilibrium favours the adduct."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q16_roadmap_cyanohydrin_lactic_acid",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following synthetic pathway from acetaldehyde. Compound B is converted into C by one reagent and into D by another. Determine the correct compounds matching labels B, C and D.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CC=O",
          "label": "Compound A",
          "alt": "A two-carbon aldehyde, a methyl group attached to a CH=O: acetaldehyde, drawn as compound A.",
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
          "x": 2,
          "y": 2
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "HCN, KCN (cat.)"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H3O+, heat"
        },
        {
          "from": "B",
          "to": "D",
          "reagents": "1. LiAlH4, ether; 2. H2O"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "B: 2-hydroxypropanenitrile, C: 2-hydroxypropanoic acid (lactic acid), D: 1-aminopropan-2-ol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "B: 2-hydroxypropanenitrile, C: 2-hydroxypropanamide, D: 1-aminopropan-2-ol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "B: 2-hydroxypropanenitrile, C: 2-hydroxypropanoic acid (lactic acid), D: 2-aminopropan-1-ol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "B: propanenitrile, C: propanoic acid, D: propan-1-amine",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A cyanohydrin is worth making because the nitrile it carries can be taken in two directions. Hot aqueous acid hydrolyses a nitrile, through the amide, to a carboxylic acid, so the cyanohydrin of an aldehyde becomes an α-hydroxy acid with one more carbon than the aldehyde. Lithium aluminium hydride reduces the nitrile carbon to CH2NH2, so the same cyanohydrin becomes a β-amino alcohol. In both branches the OH put on by the first step stays where it is, on the former carbonyl carbon.",
      "approach": "Step 1: A + HCN/KCN: cyanide adds to the carbonyl carbon of acetaldehyde. B is CH3CH(OH)CN, 2-hydroxypropanenitrile, formed as a racemate.\nStep 2: B + H3O+, heat: the nitrile is hydrolysed to COOH, passing through the amide, and the OH survives. C is CH3CH(OH)COOH, 2-hydroxypropanoic acid, racemic lactic acid.\nStep 3: B + LiAlH4, then water: the nitrile is reduced to a CH2NH2 group and the OH is untouched. D is CH3CH(OH)CH2NH2.\nStep 4: Name D with the alcohol as the suffix (an alcohol outranks an amine): 1-aminopropan-2-ol.",
      "note": "McMurry 19.6 (Nucleophilic Addition of HCN: Cyanohydrin Formation) gives both follow-ups in one paragraph: the nitrile can be reduced with LiAlH4 to a primary amine or hydrolysed by hot aqueous acid to a carboxylic acid, so cyanohydrin formation is a way of turning an aldehyde or ketone into a different functional group with an extra carbon. Both branches are racemic, because the cyanide adds to either face of the planar aldehyde; the biological route to lactic acid, pyruvate reduced by NADH (19.12), gives the single (S) enantiomer because the enzyme presents one face.",
      "options": {
        "A": "Correct. Cyanohydrin, then acid hydrolysis of the nitrile to lactic acid on one branch and hydride reduction of the nitrile to the β-amino alcohol on the other.",
        "B": "2-Hydroxypropanamide is the intermediate of the hydrolysis, the point a mild, brief hydrolysis can stop at. With hot aqueous acid and time the amide is hydrolysed on to the acid, and the roadmap says heat.",
        "C": "2-Aminopropan-1-ol has the nitrogen on C2 and the OH on C1, the reverse of what the cyanohydrin gives. The OH was placed on the former carbonyl carbon, C2, in the first step and does not move; the amine forms from the nitrile carbon at the chain end.",
        "D": "Propanenitrile would require cyanide to replace the carbonyl oxygen rather than add to the carbon. Carbonyl compounds do addition, not substitution; the oxygen stays on as an OH, and neither C nor D can lack it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q17_scheme_grignard_benzaldehyde",
    "topic": "Hydride and Grignard Addition",
    "difficulty_level": "Easy",
    "question_text": "What is the major organic product of the reaction sequence shown?",
    "reaction_scheme": {
      "reactants": [
        "O=Cc1ccccc1"
      ],
      "reagents": "1. CH3CH2MgBr, ether",
      "conditions": "2. H3O+",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring bearing a CH=O group: benzaldehyde."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-Phenylpropan-1-one",
        "smiles": "CCC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "1-Phenylpropan-1-ol",
        "smiles": "CCC(O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "1-Phenylpropan-2-ol",
        "smiles": "CC(O)Cc1ccccc1",
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
      "context": "A Grignard reagent behaves as a carbanion, R:- +MgX, and adds its carbon to the carbonyl carbon. The magnesium first coordinates the carbonyl oxygen, which makes the carbon more electrophilic, and the alkoxide that forms is protonated only in the separate aqueous work-up. Because a carbanion is far too poor a leaving group to be expelled, the addition is irreversible and stops at the alcohol: an aldehyde gives a secondary alcohol, a ketone a tertiary one. The new C-C bond is always to the former carbonyl carbon.",
      "approach": "Step 1: Identify the nucleophilic carbon: the ethyl group of CH3CH2MgBr.\nStep 2: Mg2+ coordinates the carbonyl oxygen of benzaldehyde; the ethyl carbanion adds to the carbonyl carbon, giving a magnesium alkoxide with phenyl, ethyl and H on that carbon.\nStep 3: Aqueous acid protonates the alkoxide.\nStep 4: The product is 1-phenylpropan-1-ol, a secondary alcohol, formed as a racemate because the ethyl group adds to either face of the planar aldehyde.",
      "note": "McMurry 19.7 (Nucleophilic Addition of Hydride and Grignard Reagents: Alcohol Formation) treats hydride and Grignard additions as the same mechanism with different nucleophiles, and Figure 19.6 shows the Mg2+ complexation that precedes the addition. Both are effectively irreversible for the same reason: H- and R- are not leaving groups. The alcohol chapter (17.5) covers the scope; what this chapter adds is the place of the reaction among the other nucleophilic additions and the contrast with cuprates in 19.13, which do not attack a carbonyl carbon at all.",
      "options": {
        "A": "1-Phenylpropan-1-one would require the addition to stop at the carbonyl oxidation level, which it cannot: the ethyl carbanion adds to the carbonyl carbon and turns it into an sp3 alcohol carbon. Reaching the ketone would need a second step, oxidation of the alcohol.",
        "B": "Correct. The ethyl group bonds to the former carbonyl carbon and work-up gives the secondary alcohol, racemic.",
        "C": "1-Phenylpropan-2-ol has the OH one carbon away from the ring, which would need the new bond to form at the wrong carbon. The carbanion attacks the carbonyl carbon, and that carbon keeps the oxygen.",
        "D": "Benzyl alcohol is the hydride-reduction product, from NaBH4 or LiAlH4. A Grignard reagent adds carbon, not hydrogen; the product must have gained two carbons."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q18_scheme_nabh4_chemoselective",
    "topic": "Hydride and Grignard Addition",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product of the reaction sequence shown?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)c1ccc(cc1)C(=O)OC"
      ],
      "reagents": "1. NaBH4, CH3OH, 0 °C",
      "conditions": "2. H2O",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring carrying an acetyl group (C(=O)CH3) on one carbon and a methyl ester group (C(=O)OCH3) on the opposite carbon."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Methyl 4-(1-hydroxyethyl)benzoate",
        "smiles": "CC(O)c1ccc(cc1)C(=O)OC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-[4-(Hydroxymethyl)phenyl]ethan-1-ol",
        "smiles": "CC(O)c1ccc(CO)cc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(4-Acetylphenyl)methanol",
        "smiles": "CC(=O)c1ccc(CO)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyl 4-ethylbenzoate",
        "smiles": "CCc1ccc(cc1)C(=O)OC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sodium borohydride is a mild hydride donor, and mildness here means selectivity. A ketone or aldehyde carbonyl is electrophilic enough to accept hydride from NaBH4 in methanol; an ester carbonyl, stabilised by resonance donation from its alkoxy oxygen, is not. Lithium aluminium hydride is strong enough to reduce both. So the choice of hydride reagent is the choice of which carbonyl survives, and with two different carbonyl groups in one molecule NaBH4 reduces the ketone and leaves the ester untouched.",
      "approach": "Step 1: Identify the two carbonyl groups: an aryl methyl ketone and a methyl ester on the same ring.\nStep 2: NaBH4 delivers hydride to the ketone carbonyl carbon, giving an alkoxide on the benzylic carbon; the ester is too weakly electrophilic to react.\nStep 3: Water protonates the alkoxide.\nStep 4: The product keeps the ester and has a secondary alcohol where the ketone was: methyl 4-(1-hydroxyethyl)benzoate, racemic at the carbinol carbon.",
      "note": "McMurry 19.7 (Nucleophilic Addition of Hydride and Grignard Reagents: Alcohol Formation) states the scope for aldehydes and ketones, and the ester side of the comparison is the subject of Ch 21; the chemoselectivity between them is what an ACS exam question on hydride reagents most often turns on. The reverse selectivity, reducing an ester in the presence of a ketone, cannot be done with a reagent choice at all, which is why 19.10 introduces the acetal protecting group: mask the ketone, reduce the ester with LiAlH4, unmask.",
      "options": {
        "A": "Correct. NaBH4 reduces the ketone to the secondary alcohol and leaves the ester carbonyl, which is too weakly electrophilic for borohydride, unchanged.",
        "B": "The diol is the LiAlH4 product: aluminium hydride reduces both the ketone and the ester, and the ester ends up as the primary alcohol. Borohydride is not strong enough to touch the ester.",
        "C": "This has the ester reduced and the ketone kept, the reverse of NaBH4's selectivity. The ketone is the more electrophilic carbonyl and reacts first; there is no hydride reagent that reduces an ester and spares a ketone, which is the problem acetal protection solves.",
        "D": "Methyl 4-ethylbenzoate has the ketone reduced all the way to CH2, a Wolff-Kishner or Clemmensen outcome. Hydride reagents stop at the alcohol; there is no way for NaBH4 to remove the oxygen."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q19_scheme_imine_methylamine",
    "topic": "Imines and Enamines",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "O=C1CCCCC1"
      ],
      "reagents": "CH3NH2, HCl (cat.), pH 4.5",
      "conditions": "-H2O",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-membered ring with one carbonyl group: cyclohexanone."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "N-Methylcyclohexanimine (the imine)",
        "smiles": "CN=C1CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-(Methylamino)cyclohexan-1-ol (the carbinolamine)",
        "smiles": "CNC1(O)CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "N-Methylcyclohex-1-en-1-amine (the enamine)",
        "smiles": "CNC1=CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "N-Methylcyclohexanamine",
        "smiles": "CNC1CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A primary amine adds to a carbonyl group and then goes one step further than water or an alcohol: the tetrahedral carbinolamine loses water to give a C=N double bond. This is the second of the two general outcomes of nucleophilic addition, in which the carbonyl oxygen is eliminated rather than kept. The loss of water needs acid to protonate the OH into a leaving group, and the iminium ion that results loses the proton on nitrogen to give a neutral imine. With a primary amine there is such a proton; with a secondary amine there is not, and the product is different.",
      "approach": "Step 1: Methylamine's nitrogen attacks the carbonyl carbon; proton transfer from N to O gives the carbinolamine, 1-(methylamino)cyclohexan-1-ol.\nStep 2: The acid catalyst protonates the OH, and loss of water gives the iminium ion, C=N+(H)CH3.\nStep 3: The iminium ion loses the proton on nitrogen, regenerating the acid.\nStep 4: The product is the imine, cyclohexanone N-methylimine, with C=N in place of C=O.",
      "note": "McMurry 19.8 (Nucleophilic Addition of Amines: Imine and Enamine Formation) gives the full mechanism in Figure 19.7 and the pH profile in Figure 19.9: the rate peaks near pH 4.5, where there is enough acid to make the OH a leaving group but not so much that the amine is protonated and inert. The text calls these products Schiff bases when they occur in biology, as in the pyridoxal phosphate chemistry of amino acid metabolism. The whole sequence is reversible: aqueous acid hydrolyses an imine back to the ketone and the amine.",
      "options": {
        "A": "Correct. Addition, then acid-catalysed loss of water and loss of the N-H proton give the neutral imine.",
        "B": "The carbinolamine is the tetrahedral intermediate, formed first and not isolated: under the acid catalyst its OH is protonated and leaves as water. It is the imine analogue of a hemiacetal, and like a hemiacetal it does not survive.",
        "C": "The enamine forms from a secondary amine, where the iminium ion has no N-H to lose and loses an α C-H instead. Methylamine is primary; its iminium ion loses the proton from nitrogen and gives the imine.",
        "D": "N-Methylcyclohexanamine is the reductive amination product, the imine reduced by NaBH3CN or H2/catalyst. No reducing agent is present here, so the reaction stops at the C=N."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q20_scheme_enamine_pyrrolidine",
    "topic": "Imines and Enamines",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "O=C1CCCCC1",
        "C1CCNC1"
      ],
      "reagents": "TsOH (cat.), benzene, reflux",
      "conditions": "-H2O (Dean-Stark)",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-membered ring with one carbonyl group: cyclohexanone.",
        "A saturated five-membered ring containing one N-H: pyrrolidine, a secondary amine."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-(Cyclohex-1-en-1-yl)pyrrolidine (the enamine)",
        "smiles": "C1CCN(C1)C1=CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The iminium ion",
        "smiles": "C1CC[N+](=C2CCCCC2)C1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-(Pyrrolidin-1-yl)cyclohexan-1-ol (the carbinolamine)",
        "smiles": "OC1(CCCCC1)N1CCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Cyclohexylpyrrolidine",
        "smiles": "C1CCN(C1)C1CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A secondary amine follows the imine mechanism exactly as far as the iminium ion, and then runs into a problem: the nitrogen carries two carbon substituents and no hydrogen, so there is no N-H proton to lose. The iminium ion loses a proton from the carbon next to the former carbonyl carbon instead, and the C=N+ becomes a C=C with the nitrogen attached to one end. That product is an enamine, an ene-amine, and it is the nitrogen counterpart of an enol.",
      "approach": "Step 1: Pyrrolidine's nitrogen adds to the carbonyl carbon; proton transfer gives the carbinolamine.\nStep 2: Acid protonates the OH and water leaves, giving an iminium ion whose nitrogen is bonded to two ring carbons and the former carbonyl carbon: no N-H.\nStep 3: A base removes a hydrogen from the α carbon of the cyclohexane ring; the electrons form a C=C and the N+ becomes neutral.\nStep 4: The product is the enamine, with the C=C between C1 and C2 of the cyclohexene ring and the pyrrolidine nitrogen on C1. Removing water by distillation drives the equilibrium.",
      "note": "McMurry 19.8 (Nucleophilic Addition of Amines: Imine and Enamine Formation) shows the enamine mechanism in Figure 19.8 and states the branch point plainly: the iminium ion formed in step 3 has no hydrogen on N and so must lose H+ from the carbon two atoms away. Enamines matter because their α carbon is nucleophilic, the basis of the Stork enamine reaction in Ch 23, where they alkylate and acylate under mild conditions that a ketone enolate would not tolerate.",
      "options": {
        "A": "Correct. The iminium ion has no N-H, so it loses an α C-H and gives the enamine; the water is removed to drive the equilibrium.",
        "B": "The iminium ion is the intermediate just before the product, and it is not isolated: it is a strong acid at the α carbon and loses that proton to give the neutral enamine as soon as it forms.",
        "C": "The carbinolamine forms first and is the tetrahedral addition product, but under acid it dehydrates through the iminium ion. Like a hemiacetal, it is not what is isolated.",
        "D": "1-Cyclohexylpyrrolidine is the reduced product, the iminium ion captured by hydride. That is reductive amination and needs NaBH3CN or hydrogen and a catalyst, neither of which is present."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q21_imine_ph_dependence",
    "topic": "Imines and Enamines",
    "difficulty_level": "Medium",
    "question_text": "Imine formation between cyclohexanone and methylamine is fastest near pH 4.5 and becomes very slow at pH 1. What is the reason for the slow rate at pH 1?",
    "options": [
      {
        "option_id": "A",
        "text": "The carbonyl oxygen is not protonated at low pH, so the ketone is a poor electrophile",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "The amine is almost completely protonated to CH3NH3+, which has no lone pair and cannot add to the carbonyl group",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "The carbinolamine cannot lose water at low pH because its OH group is not protonated",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The ketone is converted to its enol at low pH, and the enol does not react with amines",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Imine formation has two steps with opposite demands on the acidity of the medium. The first step, addition of the amine to the carbonyl, needs a free amine with its lone pair available; acid destroys that by converting the amine into an ammonium ion. The dehydration of the carbinolamine needs acid, because an OH group leaves only after it is protonated to OH2+. The rate maximum near pH 4.5 is the compromise: enough acid to make the OH a leaving group, not so much that the nucleophile is gone. Below that pH the first step is starved of nucleophile.",
      "approach": "Step 1: Ask which step each change in pH affects. Lower pH helps the dehydration and hurts the addition; higher pH does the reverse.\nStep 2: At pH 1 the concentration of H3O+ is far above what is needed to protonate the carbinolamine, so dehydration is not the problem.\nStep 3: Methylamine has a pKaH near 10.6; at pH 1 the ratio of free amine to ammonium ion is about 1 to 10^9.6, so effectively no nucleophile is present.\nStep 4: The addition step cannot occur and the overall rate collapses. At pH 9 or above the reverse happens: plenty of free amine but no acid to make the carbinolamine dehydrate.",
      "note": "McMurry 19.8 (Nucleophilic Addition of Amines: Imine and Enamine Formation) presents the rate-versus-pH profile for acetone and hydroxylamine in Figure 19.9, with the maximum at pH 4.5, and explains both slopes: too little acid and the carbinolamine cannot dehydrate, too much and the amine is fully protonated. The same reasoning governs hydrazone, oxime and 2,4-dinitrophenylhydrazone formation, which is why 2,4-DNP test solutions are buffered with a weak acid rather than made in strong mineral acid.",
      "options": {
        "A": "Backwards. The carbonyl oxygen is more protonated, not less, at low pH, and a protonated carbonyl is a better electrophile. The electrophile is not what is missing at pH 1.",
        "B": "Correct. At pH 1 essentially all of the methylamine is CH3NH3+, an ammonium ion with no lone pair, so the first step of the mechanism cannot take place.",
        "C": "The reverse of the truth: at low pH the carbinolamine OH is readily protonated and leaves easily. It is at high pH, around 9 and above, that the dehydration step becomes rate-limiting for want of acid.",
        "D": "Acid does catalyse enolisation, but the enol is a minor tautomer in rapid equilibrium with the ketone, and its presence does not remove the ketone from the mixture. The reagent that has been removed at pH 1 is the amine, not the ketone."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q22_scheme_wolff_kishner_acetophenone",
    "topic": "Wolff-Kishner Reduction",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)c1ccccc1"
      ],
      "reagents": "H2NNH2, KOH",
      "conditions": "HOCH2CH2OH, 200 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring attached to a carbonyl carbon that carries a methyl group: acetophenone."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-Phenylethan-1-ol",
        "smiles": "CC(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Acetophenone hydrazone",
        "smiles": "CC(=NN)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethylbenzene",
        "smiles": "CCc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Styrene",
        "smiles": "C=Cc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Wolff-Kishner reaction is imine formation with a purpose: hydrazine adds to the carbonyl and dehydrates to a hydrazone, and the hydrazone, under strong base and heat, falls apart to nitrogen gas and an alkane. Base removes an N-H proton, the anion re-protonates on carbon to shift the double bond between the two nitrogens, and loss of N2 leaves a carbanion that is protonated by the solvent. The carbonyl group has become a CH2, and the huge stability of N2 is what drives it.",
      "approach": "Step 1: Hydrazine adds to the carbonyl carbon and loses water: acetophenone hydrazone, PhC(CH3)=N-NH2.\nStep 2: KOH removes an N-H proton; the hydrazone anion is protonated on carbon, giving PhCH(CH3)-N=NH, the diimide tautomer.\nStep 3: Base removes the remaining N-H; loss of N2 gives the benzylic carbanion PhCH(-)CH3.\nStep 4: The carbanion takes a proton from ethylene glycol: ethylbenzene.",
      "note": "McMurry 19.9 (Nucleophilic Addition of Hydrazine: The Wolff-Kishner Reaction) gives this mechanism in Figure 19.10 and notes that the reaction accomplishes the same overall transformation as catalytic hydrogenation of an acylbenzene (16.10) but is more general, working for alkyl as well as aryl ketones. The high-boiling solvent is not decoration: the original procedure needed a sealed tube at 200 °C, and the Huang-Minlon modification, hydrazine and KOH in ethylene glycol with the water distilled out, is what made it practical. The acid-medium alternative, Clemmensen reduction with zinc amalgam and HCl, is not in this edition.",
      "options": {
        "A": "1-Phenylethan-1-ol is what a hydride reagent gives. Hydrazine and base remove the oxygen entirely; they do not stop at the alcohol oxidation level.",
        "B": "The hydrazone is the intermediate, and at room temperature with no base it can be isolated. Under KOH at 200 °C it loses N2 and goes on to the alkane, which is the whole point of the conditions.",
        "C": "Correct. The hydrazone loses nitrogen under base and heat, and the carbanion is protonated by the solvent to give ethylbenzene.",
        "D": "Styrene would need an elimination, and nothing here can eliminate: the carbanion left after N2 is lost is protonated, not deprotonated, and there is no leaving group on the adjacent carbon."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q23_reagent_ketone_to_alkane",
    "topic": "Wolff-Kishner Reduction",
    "difficulty_level": "Medium",
    "question_text": "Which reagent set converts the ketone shown into hexane?",
    "question_smiles": "CCCCC(C)=O",
    "structure_alt": "A six-carbon chain with a carbonyl group on the second carbon, so that a methyl group and a butyl group flank the C=O.",
    "options": [
      {
        "option_id": "A",
        "text": "NaBH4, CH3OH; then H3O+",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "H2NNH2, cat. CH3CO2H, 25 °C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "H2, Pd/C, 1 atm, 25 °C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "H2NNH2, then KOH, HOCH2CH2OH, heat",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Turning a C=O into a CH2 is a four-electron reduction, two steps past the alcohol, and hydride reagents cannot do it because they stop at the alcohol and the alkoxide has no way to lose its oxygen. The Wolff-Kishner reaction gets there by a different route: the oxygen leaves as water when the hydrazone forms, and the carbon is then reduced by the loss of N2 from the hydrazone under base and heat. Both parts are needed; hydrazine alone makes the hydrazone and stops, and base and heat without hydrazine do nothing to a ketone.",
      "approach": "Step 1: Set the target: hexan-2-one to hexane, the carbonyl carbon becoming a CH2 with no oxygen left.\nStep 2: Hydride reagents (NaBH4, LiAlH4) give hexan-2-ol; the alcohol cannot be reduced further by them.\nStep 3: Catalytic hydrogenation over palladium at 1 atm does not reduce an isolated dialkyl ketone at all; the C=O bond is too strong and unactivated.\nStep 4: Hydrazine forms the hydrazone, and KOH in hot ethylene glycol converts it to hexane with loss of N2.",
      "note": "McMurry 19.9 (Nucleophilic Addition of Hydrazine: The Wolff-Kishner Reaction) calls the reaction a useful and general method for converting an aldehyde or ketone into an alkane and contrasts it with catalytic hydrogenation, which works for acylbenzenes (16.10) because the aryl ketone is activated by the ring, but not for ordinary alkyl ketones. Lecture courses usually pair it with the Clemmensen reduction, Zn(Hg) in concentrated HCl, which does the same job under acidic conditions; that reagent is absent from this edition of the text but is standard ACS material, and the choice between the two is made by which functional groups elsewhere in the molecule can survive strong base or strong acid.",
      "options": {
        "A": "Sodium borohydride reduces hexan-2-one to hexan-2-ol and no further: the alkoxide it forms has no leaving group, so the oxygen stays.",
        "B": "Hydrazine with a trace of acid makes the hydrazone and stops there; without strong base and heat the hydrazone does not lose N2. It is half of the Wolff-Kishner procedure.",
        "C": "Hydrogen over palladium at atmospheric pressure reduces alkenes and alkynes and, for aryl ketones, the benzylic C=O, but an isolated dialkyl ketone is inert under these conditions. Ruthenium or platinum under pressure would give the alcohol, still not the alkane.",
        "D": "Correct. Hydrazone formation followed by KOH in hot ethylene glycol removes the carbonyl group as N2 and water: the Wolff-Kishner reduction."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q24_scheme_cyclic_acetal",
    "topic": "Acetals",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "O=C1CCCCC1",
        "OCCO"
      ],
      "reagents": "TsOH (cat.), benzene, reflux",
      "conditions": "-H2O (Dean-Stark)",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-membered ring with one carbonyl group: cyclohexanone.",
        "A two-carbon chain with an OH group on each carbon: ethylene glycol."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-(2-Hydroxyethoxy)cyclohexan-1-ol (the hemiacetal)",
        "smiles": "OCCOC1(O)CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "1,4-Dioxaspiro[4.5]decane (the cyclic acetal)",
        "smiles": "C1CCC2(CC1)OCCO2",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "2-(Cyclohex-1-en-1-yloxy)ethanol (the enol ether)",
        "smiles": "OCCOC1=CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-(Cyclohexyloxy)ethanol",
        "smiles": "OCCOC1CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An alcohol adds to a protonated carbonyl to give a hemiacetal, and under acid the hemiacetal goes further: its OH is protonated, water leaves to give an oxonium ion, and a second alcohol adds to give an acetal with two OR groups on the former carbonyl carbon. With a diol the second alcohol is tethered to the first, so the second addition closes a ring and the product is a cyclic acetal. Every step is reversible; distilling the water out of the refluxing benzene is what drives the equilibrium to the acetal.",
      "approach": "Step 1: TsOH protonates the carbonyl oxygen; one OH of ethylene glycol adds to the carbonyl carbon and loses a proton: the hemiacetal.\nStep 2: The hemiacetal OH is protonated and leaves as water, giving the resonance-stabilised oxonium ion C=O+-CH2CH2OH.\nStep 3: The pendant OH attacks the oxonium carbon, closing a five-membered 1,3-dioxolane ring; loss of a proton regenerates the catalyst.\nStep 4: The product is the spiro cyclic acetal, with the former carbonyl carbon shared between the cyclohexane and dioxolane rings. Water removal makes the reaction go to completion.",
      "note": "McMurry 19.10 (Nucleophilic Addition of Alcohols: Acetal Formation) gives the mechanism in Figure 19.11 and points out that the cyclic acetal from one equivalent of ethylene glycol forms by exactly the same steps as the dimethyl acetal from two equivalents of methanol. The text's reason for caring is protection: acetals are inert to bases, hydride reagents, Grignard reagents and catalytic hydrogenation, and are removed again by aqueous acid. The cyclic version is preferred in practice because it forms in one step with one reagent and the ring makes it harder to lose.",
      "options": {
        "A": "The hemiacetal is the first addition product, the alcohol analogue of a hydrate. Under acid its OH leaves as water and the second OH adds; it is not what is isolated when water is being removed.",
        "B": "Correct. Both OH groups of the diol add to the same carbon, the first by nucleophilic addition and the second by capture of the oxonium ion, giving the spiro acetal.",
        "C": "The enol ether would form if the oxonium ion lost a proton from the α carbon instead of being attacked by the second OH. With the second hydroxyl tethered two carbons away, ring closure is fast and wins.",
        "D": "2-(Cyclohexyloxy)ethanol has the carbonyl reduced to CH-O, an ether of cyclohexanol. Nothing in the flask can deliver hydride; acid and an alcohol only add to the carbonyl."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q25_roadmap_ketoester_protection",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway. Determine the correct compounds matching labels B, C and D.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(=O)CCC(C)=O",
          "label": "Compound A",
          "alt": "A five-carbon chain with an ethyl ester at one end and a ketone carbonyl at the fourth carbon, next to the terminal methyl: ethyl 4-oxopentanoate, drawn as compound A.",
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
          "reagents": "HOCH2CH2OH, TsOH (cat.), -H2O"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1. LiAlH4, ether; 2. H2O"
        },
        {
          "from": "C",
          "to": "D",
          "reagents": "H3O+, H2O"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "B: ethyl 3-(2-methyl-1,3-dioxolan-2-yl)propanoate, C: 3-(2-methyl-1,3-dioxolan-2-yl)propan-1-ol, D: pentane-1,4-diol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "B: ethyl 3-(2-methyl-1,3-dioxolan-2-yl)propanoate, C: 3-(2-methyl-1,3-dioxolan-2-yl)propan-1-ol, D: 5-hydroxypentan-2-one",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "B: ethyl 3-(2-methyl-1,3-dioxolan-2-yl)propanoate, C: 3-(2-methyl-1,3-dioxolan-2-yl)propan-1-ol, D: 3-(2-methyl-1,3-dioxolan-2-yl)propan-1-ol (no change)",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "B: ethyl 3-(2-methyl-1,3-dioxolan-2-yl)propanoate, C: 3-(2-methyl-1,3-dioxolan-2-yl)propanal, D: 4-oxopentanal",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This is the protecting-group sequence the acetal exists for. The target is to reduce the ester of a keto ester while keeping the ketone, and no hydride reagent can do that directly, because a ketone is always the more reactive carbonyl. So the ketone is hidden first as a cyclic acetal, which is inert to LiAlH4; the ester is then reduced to the primary alcohol; and aqueous acid takes the acetal off again, regenerating the ketone. Three steps, and the ketone is untouched by the hydride because it was not there.",
      "approach": "Step 1: A + ethylene glycol, acid, water removed: only the ketone forms an acetal (the ester carbonyl does not). B is the ester with a 2-methyl-1,3-dioxolane where the ketone was.\nStep 2: B + LiAlH4: the ester is reduced to a CH2OH group and ethanol is released; the acetal survives. C is 3-(2-methyl-1,3-dioxolan-2-yl)propan-1-ol.\nStep 3: C + aqueous acid: the acetal is hydrolysed back to the ketone plus ethylene glycol; the primary alcohol is unaffected.\nStep 4: D is 5-hydroxypentan-2-one, the ester reduced and the ketone restored.",
      "note": "McMurry 19.10 (Nucleophilic Addition of Alcohols: Acetal Formation) uses ethyl 4-oxopentanoate as its own worked example of acetal protection, noting that LiAlH4 on the unprotected keto ester reduces both groups to a diol. The section lists what an acetal tolerates, bases, hydride reagents, Grignard reagents and catalytic hydrogenation, and the one thing that removes it, aqueous acid. The logic is the same as the trimethylsilyl ether protection of alcohols in 17.8: hide the reactive group, do the chemistry, unhide it.",
      "options": {
        "A": "Pentane-1,4-diol is what LiAlH4 gives the unprotected keto ester, both carbonyls reduced. With the ketone masked as an acetal it is never exposed to hydride, and aqueous acid only hydrolyses the acetal; it cannot reduce anything.",
        "B": "Correct. Acetal on the ketone, LiAlH4 reduction of the ester to the primary alcohol, then acid hydrolysis of the acetal to return the ketone.",
        "C": "An acetal is inert to base and to hydride, but not to aqueous acid: the last step is exactly the condition that hydrolyses it. Leaving C unchanged would mean the deprotection step did nothing, and the ketone would never be recovered.",
        "D": "The aldehyde in C would need a one-hydride reagent such as DIBAH at -78 °C. LiAlH4 delivers a second hydride to any aldehyde it makes, so the ester goes all the way to the primary alcohol, and D cannot be a dicarbonyl compound."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q26_which_is_acetal",
    "topic": "Acetals",
    "difficulty_level": "Medium",
    "question_text": "Which compound is an acetal, and is therefore hydrolysed by aqueous acid to a carbonyl compound and two equivalents of an alcohol?",
    "options": [
      {
        "option_id": "A",
        "text": "1,2-Dimethoxyethane",
        "smiles": "COCCOC",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "2,2-Dimethoxypropane",
        "smiles": "COC(C)(C)OC",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "2-Methoxypropan-2-ol",
        "smiles": "COC(C)(C)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,4-Dioxane",
        "smiles": "C1COCCO1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An acetal is defined by a single carbon that carries two OR groups, and that structural fact is what makes it hydrolysable. One oxygen can be protonated and leave as an alcohol because the other oxygen's lone pair stabilises the resulting carbocation as an oxonium ion; water then adds, and the hemiacetal that forms falls apart to the carbonyl compound and the second alcohol. An ordinary ether has only one oxygen on each carbon, so ionisation would give an unstabilised cation, and ethers survive aqueous acid.",
      "approach": "Step 1: Look for a carbon bonded to two oxygens.\nStep 2: 1,2-Dimethoxyethane has two oxygens on different carbons: a diether. 1,4-Dioxane is a cyclic diether, each carbon bonded to one oxygen.\nStep 3: 2-Methoxypropan-2-ol has one carbon bonded to OCH3 and OH: a hemiacetal, which is in equilibrium with acetone and methanol even without acid, and gives one alcohol, not two.\nStep 4: 2,2-Dimethoxypropane has C2 bonded to two OCH3 groups: the dimethyl acetal of acetone, hydrolysed by aqueous acid to acetone and two methanol.",
      "note": "McMurry 19.10 (Nucleophilic Addition of Alcohols: Acetal Formation) writes the general acetal as R2C(OR')2 and gives the dimethyl acetal of cyclohexanone as its first example, noting that acetals from ketones are often called ketals. 2,2-Dimethoxypropane is a laboratory reagent precisely because it is an acetal: added to a reaction that produces water, it consumes the water by hydrolysing to acetone and methanol and drives an equilibrium the other way. Glucose and the other sugars of Ch 25 are cyclic hemiacetals, and the glycoside bond that joins them is an acetal.",
      "options": {
        "A": "1,2-Dimethoxyethane is a diether: its two oxygens are on different carbons, so neither can help the other leave, and it is stable to aqueous acid. It is a common solvent for exactly that reason.",
        "B": "Correct. One carbon bears two methoxy groups, the dimethyl acetal of acetone; aqueous acid hydrolyses it to acetone and two molecules of methanol.",
        "C": "2-Methoxypropan-2-ol is the hemiacetal of acetone and methanol. It has OH and OCH3 on the same carbon, and it does hydrolyse, but to acetone and one alcohol; it is also so unstable that it is not isolable.",
        "D": "1,4-Dioxane is a cyclic diether with one oxygen on each carbon. It is stable to aqueous acid and is used as a water-miscible solvent, not as a masked carbonyl compound."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q27_wittig_pair_alpha_methylstyrene",
    "topic": "Wittig Reaction",
    "difficulty_level": "Hard",
    "question_text": "Which carbonyl compound and reagent pair gives the alkene shown in a single Wittig reaction?",
    "question_smiles": "C=C(C)c1ccccc1",
    "structure_alt": "A benzene ring attached to a carbon that bears a methyl group and a double bond to a CH2 group.",
    "options": [
      {
        "option_id": "A",
        "text": "Benzaldehyde + ethylidenetriphenylphosphorane (Ph3P=CHCH3)",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Acetophenone + methylenetriphenylphosphorane (Ph3P=CH2)",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Acetone + benzylidenetriphenylphosphorane (Ph3P=CHPh)",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acetophenone + CH3MgBr, then H3O+",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Wittig disconnection cuts the target alkene at its double bond: one carbon comes from the carbonyl compound and keeps that carbon's two substituents, the other comes from the ylide. Because ylides are made by SN2 of an alkyl halide on triphenylphosphine, the ylide carbon is usually the less substituted one, so the rule of thumb is that the more substituted alkene carbon comes from the carbonyl compound. The alkene here has one carbon carrying phenyl and methyl and one carrying two hydrogens, which decides the pairing.",
      "approach": "Step 1: Disconnect the C=C. One fragment is C(Ph)(CH3)=, the other =CH2.\nStep 2: The disubstituted carbon should come from the carbonyl compound: PhC(=O)CH3, acetophenone.\nStep 3: The CH2 comes from the methylene ylide, Ph3P=CH2, made from bromomethane, PPh3 and butyllithium.\nStep 4: Acetophenone + Ph3P=CH2 gives 2-phenylpropene and Ph3P=O in one step.",
      "note": "McMurry 19.11 (Nucleophilic Addition of Phosphorus Ylides: The Wittig Reaction) works the disconnection in its Worked Example for 3-ethyl-2-pentene and states the strategy: the ylide is typically primary, so the disubstituted alkene carbon comes from the carbonyl reactant and the monosubstituted one from the ylide. The reverse pairing, formaldehyde with the ylide from 1-bromo-1-phenylethane, would give the same alkene on paper, but that secondary benzylic halide makes a poor phosphonium salt and is not the route to choose.",
      "options": {
        "A": "Benzaldehyde and the ethylidene ylide join PhCH= to =CHCH3 and give 1-phenylprop-1-ene, an isomer with the double bond in the wrong place: the carbon count is right, the connectivity is not.",
        "B": "Correct. Acetophenone supplies the carbon carrying phenyl and methyl; the methylene ylide supplies the CH2; the product is 2-phenylpropene.",
        "C": "Acetone and the benzylidene ylide give (CH3)2C=CHPh, 2-methyl-1-phenylpropene, a ten-carbon alkene. The target has nine carbons, so this pairing has one methyl too many.",
        "D": "Methylmagnesium bromide gives the tertiary alcohol 2-phenylpropan-2-ol, not the alkene. Dehydrating it would be a second step, and that is what the Wittig reaction avoids."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q28_wittig_ylide_from_halide",
    "topic": "Wittig Reaction",
    "difficulty_level": "Medium",
    "question_text": "Which halide can be converted into a Wittig reagent by reaction with triphenylphosphine followed by butyllithium?",
    "options": [
      {
        "option_id": "A",
        "text": "Bromoethane",
        "smiles": "CCBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Bromo-2-methylpropane",
        "smiles": "CC(C)(C)Br",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Bromobenzene",
        "smiles": "Brc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Bromoethene (vinyl bromide)",
        "smiles": "C=CBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A phosphorus ylide is made in two steps, and the first is an SN2 reaction: triphenylphosphine is the nucleophile and the alkyl halide the substrate, giving an alkyltriphenylphosphonium salt. Everything that limits SN2 limits ylide formation. A primary halide reacts well, a secondary one slowly, a tertiary one not at all (it eliminates instead), and halides on sp2 carbons, aryl and vinyl, do not undergo SN2 under any conditions. The second step, removing the proton next to P+ with butyllithium, needs a hydrogen on that carbon, which every SN2-capable halide has.",
      "approach": "Step 1: Ask whether triphenylphosphine can displace the halide by SN2.\nStep 2: Bromoethane is primary: fast SN2, giving ethyltriphenylphosphonium bromide.\nStep 3: 2-Bromo-2-methylpropane is tertiary and gives E2 elimination with a phosphine base rather than substitution; bromobenzene and bromoethene have the bromine on an sp2 carbon, where back-side attack is impossible.\nStep 4: Butyllithium removes a proton from the CH2 next to phosphorus in the ethyl salt: Ph3P=CHCH3, the ylide. Only bromoethane works.",
      "note": "McMurry 19.11 (Nucleophilic Addition of Phosphorus Ylides: The Wittig Reaction) states that the ylides are prepared by SN2 reaction of primary (and some secondary) alkyl halides with triphenylphosphine, that yields of the phosphonium salts are high, and that the α hydrogen is acidic enough for butyllithium because of the positive charge on phosphorus. This is the chapter's link back to Ch 11, and it is also why tetrasubstituted alkenes cannot be made this way: the ylide carbon would have to come from a tertiary halide.",
      "options": {
        "A": "Correct. A primary halide undergoes SN2 with triphenylphosphine; butyllithium then deprotonates the phosphonium salt to the ethylidene ylide.",
        "B": "A tertiary halide cannot be attacked from the back side, and triphenylphosphine acting as a base gives 2-methylpropene by E2 instead. No phosphonium salt forms.",
        "C": "An aryl halide has its bromine on an sp2 ring carbon; SN2 is impossible because there is no back side to attack and the ring blocks inversion. Bromobenzene does not react with triphenylphosphine.",
        "D": "A vinyl halide is also sp2 at the carbon bearing bromine and is inert to SN2, for the same reason as an aryl halide. It cannot become a phosphonium salt this way."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q29_wittig_vs_dehydration",
    "topic": "Wittig Reaction",
    "difficulty_level": "Medium",
    "question_text": "The alkene shown is prepared from cyclohexanone. Why is a Wittig reaction with Ph3P=CH2 preferred over addition of CH3MgBr followed by dehydration with POCl3 and pyridine?",
    "question_smiles": "C=C1CCCCC1",
    "structure_alt": "A six-membered saturated ring with a double bond from one ring carbon out to a CH2 group.",
    "options": [
      {
        "option_id": "A",
        "text": "Methylmagnesium bromide does not add to cyclohexanone because the ketone is too hindered",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "The Wittig reaction forms the C=C exactly where the C=O was, giving only the exocyclic alkene; dehydration of the tertiary alcohol gives mainly the more stable 1-methylcyclohexene",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A tertiary alcohol cannot be dehydrated with POCl3; only primary alcohols react",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The Wittig reaction gives 1-methylcyclohexene, the more stable alkene, which is the isomer wanted",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Both routes can make a methyl-bearing alkene from cyclohexanone, and the difference between them is regiochemical control. Dehydration of 1-methylcyclohexanol goes through an E2 or E1 pathway in which a proton can be lost from the ring or from the methyl, and the ring proton wins because it gives the more substituted, more stable trisubstituted alkene: the product is mostly 1-methylcyclohexene, with the exocyclic isomer as the minor component. The Wittig reaction has no such choice to make, because the C=C is built where the C=O was and nowhere else.",
      "approach": "Step 1: Write the Grignard route: CH3MgBr adds to give 1-methylcyclohexanol; POCl3/pyridine then dehydrates it.\nStep 2: The dehydration can form either the endocyclic (trisubstituted) or exocyclic (disubstituted) alkene, and Zaitsev's rule says the endocyclic one dominates; the text quotes about 9:1.\nStep 3: Write the Wittig route: Ph3P=CH2 adds to the carbonyl carbon, and the oxaphosphetane collapses to put C=C between that carbon and the ylide carbon.\nStep 4: The only alkene that can form is methylenecyclohexane, so the Wittig route gives a single product where the dehydration gives a mixture dominated by the wrong isomer.",
      "note": "McMurry 19.11 (Nucleophilic Addition of Phosphorus Ylides: The Wittig Reaction) uses exactly this pair of routes to make the point, calling the pure alkene of predictable structure the real value of the reaction and quoting the roughly 9:1 mixture from the Grignard-plus-POCl3 route. The one kind of isomerism the Wittig reaction does not control is E/Z geometry in disubstituted alkenes; a stabilised ylide favours E, an unstabilised one Z, a distinction the text leaves aside.",
      "options": {
        "A": "Cyclohexanone is an unhindered ketone and adds methylmagnesium bromide in high yield to give 1-methylcyclohexanol. The Grignard step is not the problem; the dehydration that follows is.",
        "B": "Correct. The Wittig reaction fixes the double bond at the former carbonyl carbon and gives only methylenecyclohexane; dehydrating the tertiary alcohol gives mostly the endocyclic Zaitsev alkene.",
        "C": "The reverse is true: tertiary alcohols are the easiest to dehydrate, and POCl3 in pyridine converts 1-methylcyclohexanol to alkene readily. The problem is which alkene, not whether.",
        "D": "The Wittig reaction gives methylenecyclohexane, the exocyclic alkene, and that is the isomer the synthesis wants. 1-Methylcyclohexene is the more stable isomer, which is precisely why dehydration gives it and why dehydration is the wrong route."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q30_scheme_cannizzaro",
    "topic": "Biological Reductions",
    "difficulty_level": "Hard",
    "question_text": "What are the organic products of the reaction sequence shown?",
    "reaction_scheme": {
      "reactants": [
        "O=Cc1ccccc1"
      ],
      "reagents": "1. NaOH (50%), H2O, heat",
      "conditions": "2. H3O+",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring bearing a CH=O group: benzaldehyde."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Benzyl alcohol and benzoic acid",
        "smiles": "OCc1ccccc1.O=C(O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzyl alcohol only",
        "smiles": "OCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzoic acid only",
        "smiles": "O=C(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-Hydroxy-2,3-diphenylpropanal (the aldol product)",
        "smiles": "O=CC(c1ccccc1)C(O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An aldehyde with no α hydrogen cannot form an enolate, so concentrated base cannot start an aldol reaction with it. What hydroxide does instead is add to the carbonyl carbon, and the tetrahedral alkoxide it forms does something the chapter has said tetrahedral intermediates of aldehydes cannot do: it expels hydride. The hydride is accepted by a second molecule of benzaldehyde. One aldehyde is thereby oxidised to the acid and the other reduced to the alcohol, a disproportionation known as the Cannizzaro reaction.",
      "approach": "Step 1: Hydroxide adds to the carbonyl carbon of one benzaldehyde, giving the tetrahedral alkoxide PhCH(OH)O-.\nStep 2: This alkoxide transfers hydride from its carbon to the carbonyl carbon of a second benzaldehyde, becoming benzoic acid, which the base deprotonates to benzoate.\nStep 3: The second aldehyde, having accepted hydride, is now the alkoxide of benzyl alcohol, and is protonated by water.\nStep 4: Acidic work-up protonates the benzoate. The products are benzyl alcohol and benzoic acid in equal amounts.",
      "note": "McMurry 19.12 (Biological Reductions) presents the Cannizzaro reaction as the one exception to the rule that the tetrahedral intermediate from an aldehyde or ketone cannot expel a leaving group, and uses benzaldehyde with aqueous NaOH as the example. The text's reason for including a reaction rarely used today is that it is a laboratory model for NADH: the alkoxide expelling hydride to another carbonyl is what the dihydropyridine ring of NADH does in every biological carbonyl reduction. Problem 19-15, o-phthalaldehyde to o-(hydroxymethyl)benzoic acid, is the intramolecular version.",
      "options": {
        "A": "Correct. Disproportionation: one benzaldehyde is reduced to benzyl alcohol by hydride from the tetrahedral intermediate of another, which becomes benzoic acid.",
        "B": "Benzyl alcohol alone would need an external hydride source. Hydroxide is not a reducing agent; the hydride comes from a second aldehyde molecule, which must be oxidised in the process.",
        "C": "Benzoic acid alone would need an external oxidant, and hydroxide is not one. The hydrogen removed from the oxidised aldehyde has to go somewhere, and it goes to another benzaldehyde.",
        "D": "The aldol product requires an enolate, and benzaldehyde has no α hydrogen to lose: its carbonyl carbon is attached directly to the ring. That is exactly why base gives the Cannizzaro reaction instead of an aldol."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q31_biological_reduction_stereo",
    "topic": "Biological Reductions",
    "difficulty_level": "Medium",
    "question_text": "Lactate dehydrogenase reduces pyruvate with NADH to (S)-lactate only, whereas NaBH4 in water reduces pyruvate to racemic lactate. What accounts for the difference?",
    "options": [
      {
        "option_id": "A",
        "text": "NADH is a chiral molecule, so it can produce only one enantiomer even without the enzyme",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Pyruvate is chiral, and the (S) configuration is already present before the reduction",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The enzyme binds pyruvate so that hydride from NADH is delivered to only one face of the planar carbonyl group",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Both enantiomers form, but (R)-lactate is rapidly oxidised back to pyruvate by the enzyme",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carbonyl carbon is planar, and the two faces of the plane are enantiotopic: hydride delivered to one face gives one enantiomer of the alcohol, delivered to the other gives its mirror image. A small achiral reagent in solution has no reason to prefer either face and gives a racemate. An enzyme is a chiral environment that holds the substrate in one orientation, so the reduced coenzyme can reach only one face, and a single enantiomer results. The selectivity belongs to the binding, not to the hydride.",
      "approach": "Step 1: Pyruvate, CH3COCO2-, has no stereocentre; the ketone carbon becomes one only when hydride adds.\nStep 2: NaBH4 approaches either face of the carbonyl equally: 50% (R), 50% (S).\nStep 3: In the enzyme active site pyruvate is bound with one face toward the nicotinamide ring of NADH, and the pro-R hydrogen of NADH is transferred to that face only.\nStep 4: Only (S)-lactate forms. The enzyme is chiral, and a chiral catalyst distinguishes enantiotopic faces.",
      "note": "McMurry 19.12 (Biological Reductions) draws the pyruvate-to-(S)-lactate reduction by lactate dehydrogenase in Figure 19.13 and, in Problem 19-16, asks which hydrogen of NADH is lost and which face (Re or Si) of pyruvate is attacked, sending the reader back to the prochirality section of Ch 5. The chapter's closing essay on enantioselective synthesis makes the same point for laboratory catalysts: a chiral ligand on the metal plays the role the enzyme plays here, and Noyori's and Knowles's hydrogenations won the 2001 Nobel Prize for it.",
      "options": {
        "A": "NADH is chiral, but its chirality is far from the reacting hydride and in free solution it does not reduce pyruvate at a useful rate at all. The face selection is imposed by the enzyme's active site, not by the coenzyme's own configuration.",
        "B": "Pyruvate has no stereocentre: its C2 is a planar ketone carbon with two identical faces until something adds to it. The (S) centre is created by the reduction, not inherited.",
        "C": "Correct. The active site orients pyruvate so that only one enantiotopic face of the carbonyl is exposed to the hydride of NADH, and the product is the single (S) enantiomer.",
        "D": "The enzyme does catalyse the reverse reaction, but it does so for (S)-lactate, its own substrate; (R)-lactate is not bound productively at all. In any case an enzyme that made both enantiomers and destroyed one would be wasting NADH, which is not how the selectivity arises."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q32_scheme_grignard_enone_1_2",
    "topic": "Conjugate Addition",
    "difficulty_level": "Medium",
    "question_text": "What is the major product of the reaction sequence shown?",
    "reaction_scheme": {
      "reactants": [
        "O=C1C=CCCC1"
      ],
      "reagents": "1. CH3MgBr, ether, 0 °C",
      "conditions": "2. H3O+",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-membered ring carrying a ketone carbonyl with a ring double bond conjugated to it: cyclohex-2-en-1-one."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "3-Methylcyclohexan-1-one",
        "smiles": "CC1CCCC(=O)C1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "1-Methylcyclohex-2-en-1-ol",
        "smiles": "CC1(O)C=CCCC1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Cyclohex-2-en-1-ol",
        "smiles": "OC1C=CCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Methylcyclohexan-1-ol",
        "smiles": "CC1(O)CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An α,β-unsaturated ketone offers two electrophilic carbons, and a Grignard reagent takes the carbonyl one. The organomagnesium carbanion is a hard, highly reactive nucleophile that attacks the most positive carbon directly and irreversibly, with magnesium coordinating the carbonyl oxygen first; this is 1,2-addition, and the conjugated C=C is a spectator. The tertiary alkoxide that forms is protonated at work-up to a tertiary allylic alcohol. Conjugate addition of an alkyl group needs the softer, more selective diorganocopper reagent.",
      "approach": "Step 1: Mg2+ of the Grignard reagent coordinates the carbonyl oxygen, making C1 the most electrophilic carbon in the molecule.\nStep 2: The methyl carbanion adds to C1 (1,2-addition); the π electrons of C=O move onto oxygen to give a magnesium alkoxide. The C2=C3 double bond is untouched.\nStep 3: Aqueous acid protonates the alkoxide.\nStep 4: The product is 1-methylcyclohex-2-en-1-ol: a tertiary allylic alcohol with the ring double bond still in place, racemic at C1.",
      "note": "McMurry 19.13 (Conjugate Nucleophilic Addition to α,β-Unsaturated Aldehydes and Ketones) states that other organometallic reagents, such as Grignard reagents and organolithiums, normally result in direct carbonyl addition with α,β-unsaturated ketones, and reserves conjugate addition for R2CuLi. Read this item beside the dimethylcuprate scheme in this chapter: same enone, same work-up, opposite regiochemistry, decided entirely by the metal. Exceptions exist, since bulky Grignard reagents with very hindered enones can drift toward 1,4-addition, and adding a copper(I) salt to a Grignard reagent switches it to conjugate addition deliberately.",
      "options": {
        "A": "3-Methylcyclohexan-1-one is the conjugate (1,4) addition product, what (CH3)2CuLi gives. A Grignard reagent attacks the carbonyl carbon, not the β carbon.",
        "B": "Correct. Direct 1,2-addition of the methyl carbanion to the carbonyl carbon, then protonation, gives the tertiary allylic alcohol with the C=C intact.",
        "C": "Cyclohex-2-en-1-ol is a reduction product, hydride delivered to the carbonyl. Methylmagnesium bromide has no β hydrogen to transfer and delivers carbon; the product must have gained a methyl group.",
        "D": "1-Methylcyclohexan-1-ol has the ring double bond reduced as well. Grignard reagents do not add to isolated or conjugated C=C bonds, and no hydrogen source is present; the alkene survives the sequence."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q33_scheme_amine_conjugate_addition",
    "topic": "Conjugate Addition",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "C=CC(C)=O",
        "CCNCC"
      ],
      "reagents": "ethanol",
      "conditions": "25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A four-carbon chain in which a CH2=CH group is attached to a carbonyl carbon bearing a methyl group: but-3-en-2-one.",
        "A nitrogen bearing two ethyl groups and one hydrogen: diethylamine, a secondary amine."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "4-(Diethylamino)butan-2-one",
        "smiles": "CCN(CC)CCC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-(Diethylamino)but-3-en-2-ol (the carbinolamine)",
        "smiles": "CCN(CC)C(C)(O)C=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-(Diethylamino)buta-1,3-diene (the dienamine)",
        "smiles": "C=CC(=C)N(CC)CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "But-3-en-2-one (no reaction)",
        "smiles": "C=CC(C)=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An amine can add to an α,β-unsaturated ketone at either electrophilic carbon, and with a conjugated enone it does both, quickly and reversibly. Reversibility is what decides the outcome: the direct adduct is a carbinolamine that can only go on to an enamine, and both are less stable than the conjugate adduct, a β-amino ketone in which the strong C=O bond is kept and the amine has added across the weaker C=C. Under thermodynamic control the conjugate product accumulates, often to the complete exclusion of the direct one.",
      "approach": "Step 1: Identify the β carbon, the CH2 of the vinyl group, which carries a partial positive charge through conjugation with the carbonyl.\nStep 2: The nitrogen of diethylamine adds to the β carbon, giving an enolate with a positive nitrogen (a zwitterion).\nStep 3: Proton transfer from nitrogen to the α carbon restores the ketone.\nStep 4: The product is 4-(diethylamino)butan-2-one: the amine on C4, the carbonyl unchanged, no double bond left.",
      "note": "McMurry 19.13 (Conjugate Nucleophilic Addition to α,β-Unsaturated Aldehydes and Ketones) states that both primary and secondary amines give β-amino aldehydes and ketones rather than the alternative imines or enamines, and attributes this to thermodynamic control, since both modes of addition are fast and reversible and the conjugate product is the more stable. The same addition run in reverse is a retro-Michael elimination, and β-amino ketones of this kind (Mannich bases) are used in Ch 23 as masked enones for exactly that reason.",
      "options": {
        "A": "Correct. Conjugate addition of the amine nitrogen to the β carbon, then proton transfer to the α carbon, gives the β-amino ketone under thermodynamic control.",
        "B": "The carbinolamine is the direct addition product and it does form, but reversibly and to a small extent; it is less stable than the conjugate adduct and drains back to the enone, which then adds the amine at the β carbon instead.",
        "C": "The dienamine would be the dehydration product of the carbinolamine, the enamine route of 19.8. With a conjugated enone the equilibrium favours conjugate addition, which keeps the C=O, over any product that trades it for a C=N or a diene.",
        "D": "An enone is more reactive toward amines than a saturated ketone, not less: the β carbon is an extra electrophilic site, and secondary amines add to it at room temperature without a catalyst."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q34_conjugate_electrophilic_carbon",
    "topic": "Conjugate Addition",
    "difficulty_level": "Easy",
    "question_text": "In but-3-en-2-one the carbons are numbered C1 (CH3), C2 (C=O), C3 (=CH) and C4 (=CH2). Apart from the carbonyl carbon C2, which atom is electrophilic and is attacked by a nucleophile in conjugate addition?",
    "question_smiles": "C=CC(C)=O",
    "structure_alt": "A four-carbon chain: a terminal CH2=CH group attached to a carbonyl carbon that also bears a methyl group.",
    "options": [
      {
        "option_id": "A",
        "text": "C1, the methyl carbon",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "C3, the α carbon",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "C4, the β carbon",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "The carbonyl oxygen",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Conjugation spreads the polarisation of a carbonyl group along the double bond attached to it. Pushing the C=O π electrons onto oxygen puts a positive charge on C2; pushing the C=C π electrons toward C2 to relieve that charge moves the positive charge out to C4. The resonance hybrid therefore has partial positive charge on both C2 and C4, and a nucleophile can attack either. Attack at C4 is conjugate, or 1,4-, addition, named for the positions of the nucleophile and the proton that ends up on oxygen in the enol form.",
      "approach": "Step 1: Draw the resonance form with C=O electrons on oxygen: C2 is positive.\nStep 2: Draw the next form, moving the C3=C4 π electrons to make C2=C3: the positive charge is now on C4.\nStep 3: C3 never carries positive charge in any form; it is the carbon that becomes nucleophilic (the enolate carbon) after conjugate addition.\nStep 4: The electrophilic sites are C2 and C4; the β carbon C4 is the conjugate-addition site.",
      "note": "McMurry 19.13 (Conjugate Nucleophilic Addition to α,β-Unsaturated Aldehydes and Ketones) defines the α, β labels from the carbonyl and explains that the electronegative oxygen withdraws electrons from the β carbon, making it electron-poor and more electrophilic than a typical alkene carbon. The initial product of attack at C4 is a resonance-stabilised enolate, which is protonated at C3 to give the saturated ketone. In the 1,4 name the 1 is the oxygen and the 4 is the β carbon, counted through the conjugated system, not the IUPAC locants of the ketone.",
      "options": {
        "A": "C1 is a saturated methyl carbon with no π system and no leaving group; it is neither electrophilic nor acidic in the sense that matters here. Its hydrogens are α hydrogens, which is Ch 22 chemistry, not conjugate addition.",
        "B": "C3 is the α carbon. No resonance form places positive charge on it; after conjugate addition it is the carbon that carries the enolate's negative charge and is protonated at work-up.",
        "C": "Correct. The β carbon C4 carries partial positive charge in the resonance hybrid and is the site of conjugate addition.",
        "D": "The carbonyl oxygen is the electron-rich end of the polarised system, the atom that accepts electrons in every resonance form and that Lewis acids and protons bind to. It is nucleophilic, not electrophilic."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q35_ir_conjugation_lowest",
    "topic": "Spectroscopy of Aldehydes and Ketones",
    "difficulty_level": "Medium",
    "question_text": "Which compound shows its C=O stretching absorption at the lowest wavenumber, near $1685\\text{ cm}^{-1}$?",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclohexanone",
        "smiles": "O=C1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Cyclopentanone",
        "smiles": "O=C1CCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclohex-2-en-1-one",
        "smiles": "O=C1C=CCCC1",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Hexanal",
        "smiles": "CCCCCC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The position of a C=O stretch reports on the bond's strength, and conjugation weakens it. A C=C or aromatic ring next to the carbonyl allows a resonance form with a C-O single bond and a positive charge on the alkene carbon; that contribution lowers the C=O bond order, and the stretch moves to lower wavenumber by about 25 to 30 units. Saturated ketones sit near 1715, saturated aldehydes near 1730, and conjugation takes each down by that amount. Ring strain moves the band the other way.",
      "approach": "Step 1: Set the reference values: saturated ketone and cyclohexanone 1715, saturated aldehyde 1730.\nStep 2: Apply the conjugation shift: an α,β-unsaturated ketone drops by about 30 to 1685.\nStep 3: Apply the ring-strain shift: cyclopentanone rises to 1750.\nStep 4: Order from lowest: cyclohex-2-en-1-one (1685) < cyclohexanone (1715) < hexanal (1730) < cyclopentanone (1750). The enone is the answer.",
      "note": "McMurry 19.14 (Spectroscopy of Aldehydes and Ketones) tabulates these values in Table 19.2 and calls them remarkably constant from one compound to another, so constant that a band at 1730 is almost certainly an aldehyde and one at 1750 almost certainly a cyclopentanone. The text's own application is the one this app's cuprate scheme uses: the 1,2 and 1,4 products of cyclohexenone with Me2CuLi are told apart by whether the C=O band survives and where it sits.",
      "options": {
        "A": "Cyclohexanone is the unstrained, unconjugated reference and absorbs at 1715. It has no double bond to share electron density with the carbonyl.",
        "B": "Cyclopentanone absorbs at 1750, the highest of the four: angle strain in the five-membered ring increases the s character of the carbonyl carbon's ring bonds and stiffens the C=O.",
        "C": "Correct. The ring double bond conjugated with the ketone lowers the C=O bond order and the stretch falls to about 1685.",
        "D": "Hexanal is a saturated aldehyde and absorbs near 1730, above a saturated ketone; the aldehyde also shows the two weak C-H bands near 2720 and 2820 that no ketone has."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q36_ir_ring_strain_highest",
    "topic": "Spectroscopy of Aldehydes and Ketones",
    "difficulty_level": "Medium",
    "question_text": "Which ketone shows its C=O stretching absorption at the highest wavenumber?",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclobutanone",
        "smiles": "O=C1CCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclopentanone",
        "smiles": "O=C1CCCC1",
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
        "text": "Acetone",
        "smiles": "CC(C)=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carbonyl carbon wants 120° bond angles, and a small ring forces the two ring bonds to a much smaller angle. The carbon compensates by putting more p character into the strained ring bonds, which leaves more s character for the bond to oxygen; a bond with more s character is shorter and stiffer, and its stretching frequency rises. Each reduction in ring size from six raises the C=O band by roughly 35 units: cyclohexanone behaves like an open-chain ketone, cyclopentanone is higher, cyclobutanone higher still.",
      "approach": "Step 1: Acetone and cyclohexanone are unstrained: both absorb near 1715.\nStep 2: Cyclopentanone has an internal angle near 108°, some strain: 1750.\nStep 3: Cyclobutanone has an internal angle near 90°, much more strain: 1785.\nStep 4: Order from highest: cyclobutanone > cyclopentanone > cyclohexanone = acetone. Cyclobutanone is the answer.",
      "note": "McMurry 19.14 (Spectroscopy of Aldehydes and Ketones) gives all three ring values in Table 19.2 and attributes the trend to angle strain in the carbonyl group as the ring shrinks to four or five members. The trend continues past the table: cyclopropanone absorbs near 1815 and a ketene, whose carbonyl carbon is sp-hybridised, near 2150. The same s-character argument explains why an ester C=O (1735) and an acid chloride C=O (1800) sit above a ketone, a point Ch 21 uses.",
      "options": {
        "A": "Correct. The four-membered ring is the most strained, the C=O bond has the most s character, and the band is highest, near 1785.",
        "B": "Cyclopentanone is strained enough to lie above the unstrained ketones, at about 1750, but the five-membered ring is closer to 120° than the four-membered one and its band is lower than cyclobutanone's.",
        "C": "Cyclohexanone's ring accommodates the carbonyl carbon's preferred angle without strain, and it absorbs at 1715, the same place as an open-chain ketone.",
        "D": "Acetone is the open-chain reference at 1715. With no ring there is no angle strain and nothing to raise the band."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q37_nmr_aldehyde_doublet",
    "topic": "Spectroscopy of Aldehydes and Ketones",
    "difficulty_level": "Medium",
    "question_text": "Which compound shows a one-proton doublet near 9.6 ppm in its $^1\\text{H}$ NMR spectrum?",
    "options": [
      {
        "option_id": "A",
        "text": "Butanal",
        "smiles": "CCCC=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "2-Methylpropanal",
        "smiles": "CC(C)C=O",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "2,2-Dimethylpropanal",
        "smiles": "CC(C)(C)C=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Butan-2-one",
        "smiles": "CCC(C)=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The aldehyde proton is the most easily recognised signal in organic NMR: it sits near 10 ppm, where nothing else absorbs, and it is split by the protons on the carbon next to it with a small coupling constant of about 3 Hz. So the multiplicity of the signal near 10 ppm counts the hydrogens on the α carbon: a CH2 gives a triplet, a CH a doublet, a quaternary carbon a singlet. A ketone has no such proton at all, which is the quickest way to tell the two carbonyl classes apart by NMR.",
      "approach": "Step 1: Rule out the ketone: butan-2-one has no hydrogen on its carbonyl carbon and nothing above about 2.5 ppm.\nStep 2: Apply n + 1 to each aldehyde. Butanal: the α carbon is a CH2, so the CHO is a triplet.\nStep 3: 2,2-Dimethylpropanal: the α carbon has no hydrogens, so the CHO is a singlet.\nStep 4: 2-Methylpropanal: the α carbon is a CH, so the CHO proton is a doublet near 9.6 ppm.",
      "note": "McMurry 19.14 (Spectroscopy of Aldehydes and Ketones) gives the aldehyde proton near 10 δ with J about 3 Hz and uses acetaldehyde, whose CHO is a quartet at 9.79, as the example; hydrogens on the carbon next to a carbonyl sit at 2.0 to 2.3, and a methyl ketone shows a sharp three-proton singlet near 2.1. The small aldehyde coupling is easy to miss on a poorly resolved spectrum, and the doublet here would appear as a slightly broadened singlet at low resolution, so read the fine structure carefully or expand the peak.",
      "options": {
        "A": "Butanal's aldehyde proton is a triplet, split by the two protons of the neighbouring CH2. It is at about 9.7 ppm but has the wrong multiplicity.",
        "B": "Correct. The CHO proton of 2-methylpropanal is coupled to the single proton of the isopropyl CH and appears as a doublet.",
        "C": "2,2-Dimethylpropanal has a quaternary carbon next to the CHO, so the aldehyde proton has no neighbours and is a singlet, and the nine methyl protons are a second singlet near 1.1.",
        "D": "Butan-2-one is a ketone. It has no proton on the carbonyl carbon and shows nothing near 10 ppm; its most downfield signal is the CH2 quartet near 2.4."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q38_ms_alpha_cleavage_pentanone",
    "topic": "Spectroscopy of Aldehydes and Ketones",
    "difficulty_level": "Hard",
    "question_text": "A carbonyl compound of formula C5H10O gives an orange 2,4-DNP precipitate but no Tollens mirror. Its mass spectrum shows $\\text{M}^+$ at $m/z = 86$, a base peak at $m/z = 57$ and a strong peak at $m/z = 29$, with no significant peaks at $m/z = 43$, $58$ or $71$. Which compound is it?",
    "options": [
      {
        "option_id": "A",
        "text": "Pentan-2-one",
        "smiles": "CCCC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Pentan-3-one",
        "smiles": "CCC(=O)CC",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "3-Methylbutan-2-one",
        "smiles": "CC(=O)C(C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Pentanal",
        "smiles": "CCCCC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A ketone's molecular ion fragments by two routes, and each leaves a fingerprint. Alpha cleavage breaks a bond to the carbonyl carbon and leaves the charge on the acylium ion, RC≡O+, so the peaks report which alkyl groups flank the carbonyl. The McLafferty rearrangement needs a hydrogen on the γ carbon, three bonds from the carbonyl; it transfers that hydrogen to oxygen and expels an alkene, leaving an even-mass enol radical cation. A symmetrical ketone with two ethyl groups has only one kind of acylium ion and no γ hydrogen at all.",
      "approach": "Step 1: The tests set the class: 2,4-DNP positive means an aldehyde or ketone, Tollens negative rules out the aldehyde. Pentanal is excluded.\nStep 2: Read the acylium ions. m/z 57 is CH3CH2CO+ (M - 29, loss of ethyl); m/z 29 is CH3CH2+ from the same cleavage. Absence of 43 (CH3CO+) and 71 (C3H7CO+) means there is no methyl or propyl on the carbonyl carbon.\nStep 3: Read the McLafferty region. Pentan-2-one would show 58 (CH2=C(OH)CH3+) from its propyl chain's γ hydrogen; there is none, so neither alkyl group is three carbons long.\nStep 4: Two ethyl groups on the carbonyl: pentan-3-one.",
      "note": "McMurry 19.14 (Spectroscopy of Aldehydes and Ketones) covers both fragmentations and sends the reader back to 12.3 for the McLafferty rearrangement, with the rule that only aldehydes and ketones with hydrogens on their γ carbon undergo it. The even mass of a McLafferty ion (58 here, 44 for an aldehyde) is the giveaway: ordinary fragment ions of a compound containing only C, H and O have odd mass, so an even-mass fragment means a rearrangement with loss of a neutral molecule.",
      "options": {
        "A": "Pentan-2-one has a methyl and a propyl on the carbonyl: α cleavage gives 43 (base) and 71, and the propyl chain's γ hydrogen gives a McLafferty peak at 58. All three are absent here.",
        "B": "Correct. Both α cleavages of pentan-3-one lose ethyl to give CH3CH2CO+ at 57, the ethyl cation appears at 29, and with no γ hydrogen there is no McLafferty peak.",
        "C": "3-Methylbutan-2-one has a methyl and an isopropyl on the carbonyl: α cleavage gives 43 (CH3CO+) and 71 ((CH3)2CHCO+), and 43 is its base peak. It has no γ hydrogen, so no 58, but the 43 and 71 rule it out.",
        "D": "Pentanal is excluded by the Tollens test before the spectrum is read; it would also show the aldehyde McLafferty ion at 44 as its base peak, an M - 1 peak at 85, and the two weak C-H bands near 2720 and 2820 in its IR."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q39_elucidation_butanal",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound T is a liquid (bp 75 °C) with a sharp, pungent odour. It gives a silver mirror with Tollens' reagent and an orange precipitate with 2,4-dinitrophenylhydrazine, but no yellow precipitate in the iodoform test. Combustion analysis gives C 66.6% and H 11.2% by mass. IR: a strong band at $1730\\text{ cm}^{-1}$ and two weak bands at 2720 and $2820\\text{ cm}^{-1}$; nothing above $3000\\text{ cm}^{-1}$. Mass spectrum: $\\text{M}^+$ at $m/z = 72$, a base peak at 44, and peaks at 43 and 29. The $^1\\text{H}$ NMR spectrum is shown. Which structure is T?",
    "question_smiles": "",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 9.75,
          "y": 1,
          "label": "triplet"
        },
        {
          "x": 2.42,
          "y": 2,
          "label": "multiplet"
        },
        {
          "x": 1.65,
          "y": 2,
          "label": "sextet"
        },
        {
          "x": 0.97,
          "y": 3,
          "label": "triplet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Butanal",
        "smiles": "CCCC=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Butan-2-one",
        "smiles": "CCC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Methylpropanal",
        "smiles": "CC(C)C=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "But-3-en-1-ol",
        "smiles": "C=CCCO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The chemical tests classify the compound before any spectrum is read: a 2,4-DNP precipitate means an aldehyde or ketone, a Tollens mirror narrows it to an aldehyde, and a negative iodoform test says there is no CH3C=O unit. The IR agrees twice over, with the saturated-aldehyde C=O at 1730 and the pair of weak aldehyde C-H stretches near 2720 and 2820 that no ketone shows. The formula gives one degree of unsaturation, which the C=O accounts for, and the NMR then fixes the carbon skeleton: the multiplicity of the aldehyde proton counts its neighbours.",
      "approach": "Step 1: Formula. Per 100 g: C 66.6/12.01 = 5.55, H 11.2/1.008 = 11.1, O by difference 22.2/16.00 = 1.39. Divide by 1.39: C 4, H 8, O 1. C4H8O, M = 72, matching the molecular ion. Unsaturation = (2 x 4 + 2 - 8)/2 = 1, the C=O.\nStep 2: Class. Tollens positive: an aldehyde. IR 1730 with 2720/2820: a saturated aldehyde. Iodoform negative: no methyl ketone, consistent.\nStep 3: NMR. The aldehyde proton at 9.75 is a triplet, so the α carbon is a CH2, which rules out 2-methylpropanal (doublet). The CH2 at 2.42 (2H, split by both the CHO and the next CH2), a sextet at 1.65 (2H) and a triplet at 0.97 (3H) make an unbranched propyl chain.\nStep 4: Mass spectrum. The γ hydrogen of the propyl chain allows a McLafferty rearrangement, expelling ethylene to give CH2=CHOH+ at m/z 44, the base peak; 29 is CHO+ and C2H5+; 43 is loss of the CHO. T is butanal.",
      "note": "McMurry 19.14 (Spectroscopy of Aldehydes and Ketones) gives every marker used here: the C=O near 1730 for a saturated aldehyde, the two C-H absorptions between 2700 and 2860 that distinguish aldehydes from ketones, the CHO proton near 10 δ coupled to its neighbours with J about 3 Hz, and the McLafferty rearrangement for compounds with a γ hydrogen. The text does not mention the Tollens or iodoform tests; both are lecture and ACS material, and together they classify the carbonyl faster than any spectrum. The even-mass base peak at 44 is the aldehyde McLafferty ion, the counterpart of the 58 that a methyl ketone with a γ hydrogen gives.",
      "options": {
        "A": "Correct. C4H8O with one degree of unsaturation, a Tollens-positive aldehyde with the 2720/2820 pair, a CHO triplet coupled to a CH2, an unbranched propyl chain, and the McLafferty ion at 44.",
        "B": "Butan-2-one has the right formula but is a ketone: no Tollens mirror, no aldehyde C-H bands, a positive iodoform test from its CH3C=O, and an NMR with a 3H singlet at 2.1 and nothing near 10 ppm.",
        "C": "2-Methylpropanal is an aldehyde with the right formula and would give the mirror and the 2720/2820 bands, but its CHO proton is a doublet, coupled to one CH, and its methyls are a 6H doublet near 1.1. It also has no γ hydrogen and no 44 base peak.",
        "D": "But-3-en-1-ol is C4H8O with its one degree of unsaturation in a C=C: it shows a broad O-H band near 3300 and =C-H above 3000, vinyl protons at 5 to 6 ppm, no carbonyl band and no reaction with Tollens' reagent or 2,4-DNP."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q40_elucidation_hexanone",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound U is a liquid (bp 127 °C). It gives an orange precipitate with 2,4-dinitrophenylhydrazine and a yellow precipitate of iodoform with I2/NaOH, but no silver mirror with Tollens' reagent. Combustion analysis gives C 72.0% and H 12.1% by mass. IR: a strong band at $1715\\text{ cm}^{-1}$; nothing between 2700 and $2850\\text{ cm}^{-1}$ apart from the ordinary alkane C-H stretches, and nothing above $3000\\text{ cm}^{-1}$. $^1\\text{H}$ NMR: 2.42 (triplet, 2H), 2.13 (singlet, 3H), 1.57 (quintet, 2H), 1.31 (sextet, 2H), 0.90 (triplet, 3H). The mass spectrum is shown. Which structure is U?",
    "question_smiles": "",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 27,
          "y": 12
        },
        {
          "x": 29,
          "y": 10
        },
        {
          "x": 41,
          "y": 18
        },
        {
          "x": 43,
          "y": 100
        },
        {
          "x": 57,
          "y": 20
        },
        {
          "x": 58,
          "y": 65
        },
        {
          "x": 71,
          "y": 8
        },
        {
          "x": 85,
          "y": 7
        },
        {
          "x": 100,
          "y": 15
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Hexan-3-one",
        "smiles": "CCCC(=O)CC",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "4-Methylpentan-2-one",
        "smiles": "CC(C)CC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Hexan-2-one",
        "smiles": "CCCCC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "3,3-Dimethylbutan-2-one",
        "smiles": "CC(=O)C(C)(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Three tests place the compound before the spectra do: 2,4-DNP says aldehyde or ketone, no Tollens mirror says ketone, and a positive iodoform test says a methyl ketone, CH3C=O. The IR at 1715 with no aldehyde C-H pair agrees. The formula supplies one degree of unsaturation, the C=O. What is left is the shape of the other alkyl group, and the mass spectrum answers it with two peaks: the acylium ion from α cleavage tells which groups flank the carbonyl, and an even-mass McLafferty ion tells whether that group is long enough to have a γ hydrogen and whether it is branched.",
      "approach": "Step 1: Formula. Per 100 g: C 72.0/12.01 = 6.00, H 12.1/1.008 = 12.0, O by difference 15.9/16.00 = 0.99. C6H12O, M = 100, matching the molecular ion. Unsaturation = (2 x 6 + 2 - 12)/2 = 1.\nStep 2: Class. Ketone (2,4-DNP positive, Tollens negative), and a methyl ketone (iodoform positive; 3H singlet at 2.13). That rules out hexan-3-one, whose α protons are all quartets or triplets and which gives no iodoform.\nStep 3: Mass spectrum. Base peak 43 is CH3CO+ from α cleavage, 85 is M - 15 (loss of the methyl), 57 is C4H9+. The strong even-mass peak at 58 is the McLafferty ion CH2=C(OH)CH3+, which needs a γ hydrogen on the butyl chain: 3,3-dimethylbutan-2-one has none and shows 57 (tert-butyl cation) as its base peak instead.\nStep 4: NMR settles the branching. A 3H triplet at 0.90 and a 2H triplet at 2.42, with a quintet and a sextet between them, is an unbranched butyl chain; 4-methylpentan-2-one would show a 6H doublet near 0.92 and a 2H doublet near 2.30. U is hexan-2-one.",
      "note": "McMurry 19.14 (Spectroscopy of Aldehydes and Ketones) gives the 1715 band for a saturated ketone, the methyl ketone singlet near 2.1 as particularly distinctive, and the McLafferty rearrangement, referred back to 12.3, as the characteristic cleavage of ketones with a γ hydrogen. The text does not describe the iodoform test, which is Ch 22 chemistry (halogenation of a methyl ketone's enolate) and standard lecture material; it is the one wet test that tells a methyl ketone from every other ketone, and it is why the answer could be narrowed to two candidates before the spectrum was read.",
      "options": {
        "A": "Hexan-3-one is a ketone of the right formula but not a methyl ketone: iodoform negative, no 3H singlet at 2.1, and its α cleavages give 57 (CH3CH2CO+) and 71 (C3H7CO+) rather than 43 as base peak. Its McLafferty ion would be at 72, not 58.",
        "B": "4-Methylpentan-2-one matches the tests, the IR and even the mass spectrum, since its isobutyl chain also has a γ hydrogen and gives 58. The NMR is what excludes it: an isobutyl group shows a 6H doublet near 0.92 and a 2H doublet near 2.30, not the triplets of a straight chain.",
        "C": "Correct. A methyl ketone (iodoform, 2.13 singlet, 43 base peak) carrying an unbranched butyl chain (two triplets, a quintet and a sextet) whose γ hydrogen gives the McLafferty ion at 58.",
        "D": "3,3-Dimethylbutan-2-one is a methyl ketone and gives the iodoform test, but its tert-butyl group has no γ hydrogen, so there is no 58; its base peak is the tert-butyl cation at 57, and its NMR is two singlets, 9H at 1.1 and 3H at 2.1."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  }
];
