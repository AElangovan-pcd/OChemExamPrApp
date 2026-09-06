// OChemStudyBuddy - McMurry Chapter 8
// Author: A. Elangovan, PhD
var CH08_QUESTIONS = [
  {
    "question_id": "ch08_q55_scheme_epoxidation",
    "topic": "Alkenes: Epoxidation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC=C"
      ],
      "reactant_alts": [
        "Propene, drawn as three carbons with a terminal double bond."
      ],
      "reagents": "mCPBA",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-methyloxirane (propylene oxide)",
        "smiles": "CC1CO1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "propane-1,2-diol",
        "smiles": "CC(O)CO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "propanoic acid",
        "smiles": "CCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-chloropropan-2-ol",
        "smiles": "CC(O)CCl",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A peroxyacid carries one oxygen atom that is weakly enough held to be handed to an alkene. Recognising that only one oxygen is transferred settles most of what the product can be.",
      "approach": "Step 1: Identify the reactive part of the reagent. mCPBA has an O-O bond, and the terminal oxygen is the one delivered.\nStep 2: Deliver it across the double bond in one step, both carbon-oxygen bonds forming together on the same face.\nStep 3: Count what is left. One oxygen bridging two adjacent carbons is a three-membered ring, so the product is the epoxide, and the reagent leaves as the corresponding carboxylic acid.",
      "note": "The epoxide is stable in dichloromethane but not in water or acid, which is why the solvent is stated. Adding aqueous acid afterwards opens the ring and would give the diol instead.",
      "options": {
        "A": "Correct. One oxygen is delivered across the double bond in a single step, closing a three-membered ring.",
        "B": "The diol needs the epoxide to be opened by water, which requires a separate aqueous step. Dichloromethane supplies no water.",
        "C": "A carboxylic acid would require the double bond to be cleaved and oxidised, which needs a far more forcing oxidant than a peroxyacid.",
        "D": "The chlorine in mCPBA sits on the aromatic ring of the reagent and is never transferred. Only the oxygen is delivered."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch08_q53_scheme_hydroboration",
    "topic": "Alkenes: Hydroboration-Oxidation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC=C"
      ],
      "reactant_alts": [
        "A propene skeleton, its double bond at the end of a three-carbon chain."
      ],
      "reagents": "1) BH3, THF\n2) H2O2, NaOH",
      "conditions": "THF",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "propan-1-ol",
        "smiles": "CCCO",
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
        "text": "propanal",
        "smiles": "CCC=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "propane",
        "smiles": "CCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A two-step scheme has to be read as two steps. The first decides where the oxygen will end up; the second decides what it will be once it gets there.",
      "approach": "Step 1: Add borane. Boron goes to the less substituted carbon - the terminal CH2 - and hydrogen to the other, in a single concerted step.\nStep 2: Oxidise. Hydrogen peroxide and hydroxide replace the carbon-boron bond with a carbon-oxygen bond, with the configuration at that carbon retained.\nStep 3: Read the product. The hydroxyl is where the boron was, on the terminal carbon, giving the primary alcohol.",
      "note": "This is the anti-Markovnikov route to an alcohol, and it exists because boron, not hydrogen, is the atom that chooses a carbon. Acid-catalysed hydration of the same alkene gives the other alcohol.",
      "options": {
        "A": "Correct. Boron adds to the terminal carbon and oxidation replaces it with a hydroxyl, giving the primary alcohol.",
        "B": "The secondary alcohol is the Markovnikov product, which acid-catalysed hydration or oxymercuration would give. Hydroboration places the oxygen at the other carbon.",
        "C": "An aldehyde would require oxidation past the alcohol. Basic hydrogen peroxide converts the carbon-boron bond to a carbon-oxygen bond and stops there.",
        "D": "Propane is the hydrogenation product. The boron in step one is replaced by oxygen in step two, not by hydrogen."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch08_q52_scheme_halohydrin",
    "topic": "Alkenes: Halohydrin Formation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC=C"
      ],
      "reactant_alts": [
        "Propene: three carbons with the double bond at one end."
      ],
      "reagents": "Br2, H2O",
      "conditions": "H2O",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-bromopropan-2-ol",
        "smiles": "CC(O)CBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-bromopropan-1-ol",
        "smiles": "CC(Br)CO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,2-dibromopropane",
        "smiles": "CC(Br)CBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "propane-1,2-diol",
        "smiles": "CC(O)CO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Running a bromination in water changes which nucleophile finishes the job. The first step is identical; the second is taken over by the solvent, which is present in vast excess.",
      "approach": "Step 1: Form the bromonium ion across the double bond, exactly as in the non-aqueous case.\nStep 2: Choose the nucleophile. Water outnumbers bromide enormously, so water opens the bridged ion.\nStep 3: Choose the carbon. Water attacks the carbon carrying more of the positive charge, which is the more substituted one, so the hydroxyl lands on the middle carbon and the bromine on the end.",
      "note": "The two added groups end up on the Markovnikov arrangement even though there is no free carbocation. The bridged ion is simply lopsided, leaning towards the structure an open cation would have had.",
      "options": {
        "A": "Correct. Water opens the bromonium ion at the more substituted carbon, putting the hydroxyl on the middle carbon and leaving bromine on the terminal one.",
        "B": "This reverses the two groups. Water attacking the terminal carbon would be attacking the position that carries less positive charge.",
        "C": "The dibromide forms when no water is present. Here water is the solvent and reaches the intermediate first.",
        "D": "Two hydroxyl groups would require a dihydroxylation reagent such as osmium tetroxide. Bromine can supply only one nucleophilic partner from water."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch08_q54_scheme_hydrogenation",
    "topic": "Alkenes: Hydrogenation",
    "difficulty_level": "Easy",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC=C"
      ],
      "reactant_alts": [
        "A three-carbon chain carrying one carbon-carbon double bond at its end."
      ],
      "reagents": "H2, Pd/C",
      "conditions": "MeOH",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "propane",
        "smiles": "CCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "propan-1-ol",
        "smiles": "CCCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "propan-2-ol",
        "smiles": "CC(O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-methylpropane",
        "smiles": "CC(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Catalytic hydrogenation is the simplest addition in the chapter: two hydrogens, one to each carbon, and nothing else changes. What makes it worth asking is what a reader might wrongly think changes as well.",
      "approach": "Step 1: Read the reagents. Hydrogen gas over palladium on carbon supplies hydrogen atoms and nothing else; methanol is only the solvent.\nStep 2: Add across the double bond. One hydrogen goes to each of the two alkene carbons, both from the catalyst surface.\nStep 3: Note what does not happen. No oxygen is introduced, and no carbon-carbon bond is made or broken, so the skeleton is unchanged - the product is propane.",
      "note": "The solvent is a trap worth naming. Methanol is present in large excess but takes no part in the reaction; a metal-catalysed hydrogenation does not add solvent across an alkene.",
      "options": {
        "A": "Correct. Two hydrogens add across the double bond and nothing else is introduced, giving the saturated alkane.",
        "B": "A primary alcohol would need an oxygen source and a hydroboration-oxidation sequence. Neither is present here.",
        "C": "A secondary alcohol would need water and an acid catalyst. Methanol is a spectator and palladium is not an acid.",
        "D": "A branched skeleton would require a carbon-carbon bond to move. Hydrogenation adds hydrogen without rearranging anything."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch08_q56_scheme_hydration",
    "topic": "Alkenes: Hydration",
    "difficulty_level": "Easy",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC=C"
      ],
      "reactant_alts": [
        "A short chain of three carbons with a double bond at one end."
      ],
      "reagents": "H2O, H2SO4",
      "conditions": "dil. H2SO4",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "propan-2-ol",
        "smiles": "CC(O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "propan-1-ol",
        "smiles": "CCCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "propane-1,2-diol",
        "smiles": "CC(O)CO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "propan-2-yl hydrogen sulfate",
        "smiles": "CC(C)OS(=O)(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Acid-catalysed hydration adds the elements of water across a double bond, and the acid is a catalyst rather than a reagent - it is handed back at the end, which constrains what the product can be.",
      "approach": "Step 1: Protonate the double bond. Adding the proton to the terminal carbon leaves a secondary cation; adding it to the middle carbon would leave a primary one.\nStep 2: Take the more stable option. The secondary cation forms, so the positive charge sits on the middle carbon.\nStep 3: Capture it with water and lose a proton, regenerating the acid and leaving the hydroxyl on the middle carbon - propan-2-ol.",
      "note": "The dilute acid matters. Concentrated sulfuric acid intercepts the same cation with bisulfate instead of water, giving the sulfate ester, which is then hydrolysed in a separate step in the industrial process.",
      "options": {
        "A": "Correct. Markovnikov protonation gives the secondary cation, and water captures it to give the secondary alcohol.",
        "B": "The primary alcohol is the anti-Markovnikov product and requires hydroboration-oxidation. Acid-catalysed hydration cannot give it.",
        "C": "A second hydroxyl would need a dihydroxylation reagent. Only one water molecule is added across the double bond here.",
        "D": "The sulfate ester forms when bisulfate rather than water traps the cation, which happens in concentrated acid. In dilute acid water is in large excess."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch08_q1_halogen_addition_cis",
    "topic": "Electrophilic Addition of Halogens",
    "difficulty_level": "Medium",
    "question_text": "Addition of $Br_2$ in $CH_2Cl_2$ to (Z)-but-2-ene yields which of the following products?",
    "question_smiles": "C/C=C\\C",
    "options": [
      {
        "option_id": "A",
        "text": "(2R,3R)-2,3-dibromobutane",
        "smiles": "C[C@@H](Br)[C@H](Br)C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "(2S,3S)-2,3-dibromobutane",
        "smiles": "C[C@H](Br)[C@@H](Br)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A 1:1 racemic mixture of (2R,3R)- and (2S,3S)-2,3-dibromobutane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "meso-2,3-dibromobutane",
        "smiles": "C[C@@H](Br)[C@@H](Br)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Bromine adds anti, through a bridged bromonium ion that shields one face of the alkene. That single mechanistic fact carries the geometry of the starting alkene straight into the relative configuration of the product.",
      "approach": "Step 1: Fix the mechanism. Bromine bridges both carbons, and bromide opens the ring from the face opposite the bridge, so the two bromines finish anti to one another.\nStep 2: Apply that to the Z isomer, whose methyls begin on the same side. Adding the two bromines from opposite faces makes the two new stereocentres alike, giving (2R,3R) or (2S,3S).\nStep 3: Decide between them. The alkene is achiral and its two faces are equivalent, so the bromonium ion forms on each at the same rate and the two enantiomers appear in equal amounts.",
      "note": "A racemate is optically inactive for a quite different reason from a meso compound: here every molecule is chiral and the rotations cancel between molecules, whereas in a meso compound the cancellation happens inside one molecule.",
      "options": {
        "A": "A single enantiomer would require the reaction to distinguish the two faces of the alkene. Nothing in the flask is chiral, so it cannot.",
        "B": "The same objection applies with the configuration inverted: producing only the (2S,3S) enantiomer would need a chiral influence that this reaction does not have.",
        "C": "Correct. Anti addition to the Z isomer gives the pair of like stereocentres, and the two equivalent faces of the alkene deliver both enantiomers in equal amounts.",
        "D": "The meso diastereomer is what anti addition to the E isomer gives. Reaching it from the Z isomer would require the two bromines to add to the same face, which the bromonium bridge blocks."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two methyl groups on a central carbon-carbon double bond, both drawn on the same face of it."
  },
  {
    "question_id": "ch08_q2_halogen_addition_trans",
    "topic": "Electrophilic Addition of Halogens",
    "difficulty_level": "Medium",
    "question_text": "Addition of $Br_2$ in $CH_2Cl_2$ to (E)-but-2-ene yields which of the following products?",
    "question_smiles": "C/C=C/C",
    "options": [
      {
        "option_id": "A",
        "text": "(2R,3R)-2,3-dibromobutane",
        "smiles": "C[C@@H](Br)[C@H](Br)C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "(2S,3S)-2,3-dibromobutane",
        "smiles": "C[C@H](Br)[C@@H](Br)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A 1:1 racemic mixture of (2R,3R)- and (2S,3S)-2,3-dibromobutane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "meso-2,3-dibromobutane",
        "smiles": "C[C@@H](Br)[C@@H](Br)C",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Running the same addition on the other geometric isomer is how stereospecificity is demonstrated: one mechanism, two starting materials, two different single products. The mechanism does not change here - only the alkene does.",
      "approach": "Step 1: Start from the same bromonium ion and the same anti opening.\nStep 2: Apply it to the E isomer, whose methyls begin on opposite sides. Adding the bromines from opposite faces now makes the two stereocentres opposite as well, one R and one S.\nStep 3: Look for internal symmetry. (2R,3S)-2,3-dibromobutane has a mirror plane through the middle of the C2-C3 bond, so it is superimposable on its own mirror image - the meso compound, and a single achiral substance rather than a pair.",
      "note": "Meso is a property of the whole molecule, not of a stereocentre. Both carbons here are genuine stereocentres; what removes the chirality is that they are mirror images of each other within the same molecule.",
      "options": {
        "A": "(2R,3R) is the anti-addition product of the Z isomer, and in any case a single enantiomer cannot come from an achiral alkene and an achiral reagent.",
        "B": "(2S,3S) has the same two problems: it is the wrong diastereomer for this geometry, and it names one enantiomer where two would have to form.",
        "C": "The racemic pair is what the Z isomer gives. Anti addition to E produces stereocentres of opposite sense, not matching ones.",
        "D": "Correct. Anti addition across the E isomer sets the two stereocentres opposite, and the internal mirror plane makes the product a single, optically inactive meso compound."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two methyl groups on a central carbon-carbon double bond, drawn on opposite faces of it."
  },
  {
    "question_id": "ch08_q3_halogen_addition_mixed",
    "topic": "Electrophilic Addition of Halogens",
    "difficulty_level": "Medium",
    "question_text": "Reaction of propene with iodine monochloride ($I-Cl$) in dichloromethane yields which of the following as the major product?",
    "question_smiles": "CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "1-chloro-2-iodopropane",
        "smiles": "CC(I)CCl",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "2-chloro-1-iodopropane",
        "smiles": "CC(Cl)CI",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "1,2-dichloropropane",
        "smiles": "CC(Cl)CCl",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,2-diiodopropane",
        "smiles": "CC(I)CI",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An unsymmetrical halogen adds in a defined orientation because the two halves play different roles: one becomes the bridging electrophile, the other the nucleophile that opens the bridge. Deciding which is which is the whole regiochemical question.",
      "approach": "Step 1: Polarise the reagent. Iodine is the less electronegative of the pair, so in I-Cl the iodine carries the partial positive charge and the chlorine the partial negative.\nStep 2: Let the alkene attack the electrophilic end. Iodine bridges the two carbons as an iodonium ion, and chloride is released.\nStep 3: Open the bridge. Chloride attacks the carbon better able to carry positive charge - the more substituted one, C2 - so chlorine lands on C2 and iodine remains on C1.",
      "note": "The orientation looks like Markovnikov's rule and is usually taught as such, but no free carbocation forms. The bridged ion is simply lopsided, with the longer, weaker bond to the carbon that would have held the charge.",
      "options": {
        "A": "This puts the iodine on the more substituted carbon and the chlorine on the terminal one, which reverses the roles of electrophile and nucleophile.",
        "B": "Correct. Iodine is the electrophilic end and bridges the double bond; chloride opens that bridge at the more substituted carbon.",
        "C": "1,2-Dichloropropane would need two chlorines, which requires Cl2 as the reagent. Only one chlorine is available from I-Cl.",
        "D": "1,2-Diiodopropane would likewise need I2. The point of using a mixed halogen is that the two halogens end up on different carbons."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-carbon chain with a double bond between the first two carbons."
  },
  {
    "question_id": "ch08_q4_halogen_addition_cyclic",
    "topic": "Electrophilic Addition of Halogens",
    "difficulty_level": "Medium",
    "question_text": "Treatment of 1-methylcyclohexene with $Br_2$ in $CH_2Cl_2$ results in the formation of a dibromide product. What is the stereochemical relationship of the two bromine atoms in the major product?",
    "question_smiles": "CC1=CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "cis-1,2-dibromo-1-methylcyclohexane, resulting from syn-addition",
        "smiles": "C[C@]1(Br)[C@@H](Br)CCCC1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "trans-1,2-dibromo-1-methylcyclohexane, resulting from anti-addition",
        "smiles": "C[C@]1(Br)[C@H](Br)CCCC1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A mixture of cis and trans isomers in a 1:1 ratio",
        "smiles": "CC1(Br)C(Br)CCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,1-dibromo-2-methylcyclohexane",
        "smiles": "CC1CCCCC1(Br)Br",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "In a ring the two added groups cannot rotate away from each other, so the anti relationship the mechanism imposes is locked in as a cis or trans relationship that can be read straight off the ring.",
      "approach": "Step 1: Form the bromonium ion across the ring double bond. It sits on one face and blocks it.\nStep 2: Bring bromide in from the other face. It attacks the more substituted carbon, the one bearing the methyl, because that carbon carries more of the positive charge.\nStep 3: Read the result on the ring. One bromine came from the top face and one from the bottom, so they are on opposite faces - trans - and the product is trans-1,2-dibromo-1-methylcyclohexane.",
      "note": "Anti addition and a trans ring product mean the same thing here only because both new bonds are made to adjacent ring carbons. The word to trust is anti, which describes the mechanism; cis and trans describe what that looks like once a ring holds the carbons still.",
      "options": {
        "A": "A cis product would need both bromines delivered to the same face, which is exactly what the bromonium bridge prevents by occupying one of them.",
        "B": "Correct. The bromonium ion blocks one face, bromide must attack from the other, and the two bromines end up trans across the ring.",
        "C": "An even mixture would follow from an open, planar carbocation attacked from both faces. The exclusive trans product is the evidence that no such intermediate forms.",
        "D": "Putting both bromines on one carbon is not an addition across the double bond at all; it would leave the neighbouring carbon with nothing added to it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered ring containing one double bond, with a methyl group on one of the two doubly bonded carbons."
  },
  {
    "question_id": "ch08_q5_halogen_addition_competing",
    "topic": "Electrophilic Addition of Halogens",
    "difficulty_level": "Hard",
    "question_text": "In the addition of bromine to cyclohexene in the presence of high concentrations of sodium chloride in water/dichloromethane, what are the major organic products formed?",
    "question_smiles": "C1=CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Only trans-1,2-dibromocyclohexane",
        "smiles": "Br[C@@H]1CCCC[C@H]1Br",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A mixture of trans-1,2-dibromocyclohexane and trans-1,2-dichlorocyclohexane",
        "smiles": "Br[C@@H]1CCCC[C@H]1Br.Cl[C@@H]1CCCC[C@H]1Cl",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A mixture of trans-1,2-dibromocyclohexane and trans-1-bromo-2-chlorocyclohexane",
        "smiles": "Br[C@@H]1CCCC[C@H]1Br.Br[C@@H]1CCCC[C@H]1Cl",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Only cis-1-bromo-2-chlorocyclohexane",
        "smiles": "Br[C@@H]1CCCC[C@@H]1Cl",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The bromonium ion is an intermediate with a lifetime, and whatever nucleophile reaches it first opens it. Adding a second nucleophile to the flask is therefore a way of catching the intermediate in the act.",
      "approach": "Step 1: Note that the first step consumes only bromine: the alkene attacks Br2 to give a bromonium ion and a free bromide.\nStep 2: List what can open it. Bromide is present from that first step, and chloride is present in large excess from the added salt.\nStep 3: Expect both. Each nucleophile attacks from the face opposite the bridge, so both products are trans, and the mixture contains trans-1,2-dibromocyclohexane alongside trans-1-bromo-2-chlorocyclohexane.",
      "note": "The trapped product is the argument. If bromine added as a single concerted unit, an external chloride could never be incorporated, so finding the mixed halide is direct evidence that a discrete intermediate exists.",
      "options": {
        "A": "This is what would form with no chloride present. The whole point of the added salt is that a second nucleophile now competes for the intermediate.",
        "B": "The dichloride would require the bromonium ion to be replaced by a chloronium ion. Chloride is a nucleophile here, not the electrophile that starts the reaction.",
        "C": "Correct. Bromide and chloride both open the bromonium ion from the opposite face, giving the dibromide and the mixed bromochloride, both trans.",
        "D": "A cis product contradicts the anti opening, and 'only' ignores that bromide is still present and still reacting."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A plain six-membered carbon ring carrying a single carbon-carbon double bond."
  },
  {
    "question_id": "ch08_q6_halohydrin_regio",
    "topic": "Halohydrin Formation",
    "difficulty_level": "Medium",
    "question_text": "What is the major product obtained when 1-methylcyclohexene is treated with $Br_2$ in water?",
    "question_smiles": "CC1=CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "trans-2-bromo-1-methylcyclohexan-1-ol (with Br and OH trans, OH at C1)",
        "smiles": "C[C@]1(O)[C@H](Br)CCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-bromo-2-methylcyclohexan-1-ol (bromine on the carbon that carries the methyl)",
        "smiles": "C[C@]1(Br)[C@H](O)CCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "cis-2-bromo-1-methylcyclohexan-1-ol (with Br and OH cis, OH at C1)",
        "smiles": "C[C@]1(O)[C@@H](Br)CCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-(bromomethyl)cyclohexan-1-ol",
        "smiles": "C1CCC(CC1)(O)CBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Running a halogenation in water changes only which nucleophile opens the bromonium ion, but that is enough to change both the product class and the regiochemical question, because water and bromide attack for the same reason at different places.",
      "approach": "Step 1: Form the bromonium ion, then recognise that water, present as the solvent, vastly outnumbers bromide and opens the bridge.\nStep 2: Choose the carbon. Water attacks where positive charge is most concentrated - the carbon bearing the methyl group, which is the more substituted of the two.\nStep 3: Assemble the answer. The hydroxyl lands on the methyl-bearing carbon and the bromine stays on the other, and because attack comes from the face opposite the bridge, the two are trans.",
      "note": "The bromine ends up on the carbon that is less able to hold charge, which is the opposite of where a nucleophile normally goes. It helps to remember that bromine is not attacking at all in the second step; it is being left behind.",
      "options": {
        "A": "Correct. Water opens the bromonium ion at the more substituted carbon, so the hydroxyl takes that position and the bromine remains trans to it on the neighbour.",
        "B": "This reverses the two groups. Putting bromine on the methyl-bearing carbon would mean water had attacked the less substituted position, against the charge distribution in the bridged ion.",
        "C": "The regiochemistry is right but the stereochemistry is not. A cis arrangement would require water to attack the face the bromine bridge is sitting on.",
        "D": "This product has the bromine on a carbon outside the ring and no longer describes an addition across the ring double bond."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A cyclohexene ring whose double bond carries a methyl substituent on one of its two carbons."
  },
  {
    "question_id": "ch08_q7_halohydrin_styrene",
    "topic": "Halohydrin Formation",
    "difficulty_level": "Medium",
    "question_text": "Styrene (vinylbenzene) is treated with N-bromosuccinimide (NBS) in aqueous dimethyl sulfoxide (DMSO). What is the major organic product?",
    "question_smiles": "c1ccccc1C=C",
    "options": [
      {
        "option_id": "A",
        "text": "2-bromo-1-phenylethan-1-ol",
        "smiles": "OC(CBr)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-bromo-2-phenylethan-1-ol",
        "smiles": "OC(Cc1ccccc1)Br",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,2-dibromo-1-phenylethane",
        "smiles": "BrC(CBr)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-bromo-2-phenylethan-1-ol",
        "smiles": "BrC(CO)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A benzene ring next to the double bond changes where the charge sits in the bridged intermediate, so it decides the regiochemistry even though the ring itself does not react.",
      "approach": "Step 1: Identify the source of the electrophile. N-bromosuccinimide supplies bromine at a low steady concentration, which is enough to form a bromonium ion on the alkene.\nStep 2: Ask which carbon carries more positive charge in that bridged ion. The benzylic carbon does, because the ring can delocalise positive charge into its pi system.\nStep 3: Send the nucleophile there. Water attacks the benzylic carbon, so the hydroxyl ends up next to the ring and the bromine on the terminal carbon.",
      "note": "Using NBS rather than bromine keeps the free-bromine concentration low, which suppresses the competing dibromide. The regiochemistry would be the same either way; what changes is how much of the wrong product accompanies it.",
      "options": {
        "A": "Correct. The benzylic carbon bears the greater share of positive charge in the bromonium ion, so water attacks there and bromine is left on the terminal carbon.",
        "B": "This places the hydroxyl and the bromine on the same carbon, which is not an addition across the double bond and would in any case be an unstable arrangement.",
        "C": "The dibromide is the product when no water competes. In aqueous DMSO water is present in enormous excess and opens the bridge first.",
        "D": "This is the reversed regiochemistry: bromine on the benzylic carbon and hydroxyl on the terminal one, which ignores where the ring puts the positive charge."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring with a two-carbon vinyl group attached to it."
  },
  {
    "question_id": "ch08_q8_halohydrin_intramolecular",
    "topic": "Halohydrin Formation",
    "difficulty_level": "Hard",
    "question_text": "When 4-penten-1-ol is treated with $I_2$ in the presence of $NaHCO_3$, an intramolecular reaction occurs to yield a cyclic ether. What is the major product of this iodocyclization?",
    "question_smiles": "C=CCCCO",
    "options": [
      {
        "option_id": "A",
        "text": "2-(iodomethyl)tetrahydrofuran",
        "smiles": "ICC1CCCO1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-iodotetrahydro-2H-pyran",
        "smiles": "O1CC(I)CCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5-iodopentan-2-one",
        "smiles": "CC(=O)CCCI",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-iodopentan-2-ol",
        "smiles": "OC(CI)CCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When the nucleophile is already tethered to the alkene, the halonium ion is opened from within. The ring that forms is chosen by which carbon the tether can comfortably reach, not by which carbon carries more charge.",
      "approach": "Step 1: Form the iodonium ion across the terminal double bond; the bicarbonate is there only to neutralise the acid released.\nStep 2: Let the hydroxyl oxygen reach round and attack. Counting through the chain, attacking the nearer alkene carbon closes a five-membered ring and attacking the far one closes a six-membered ring.\nStep 3: Take the five-membered closure. It is much faster here, and it leaves the remaining carbon outside the ring carrying the iodine - a tetrahydrofuran with an iodomethyl group on the carbon next to oxygen.",
      "note": "The five-membered ring wins even though the six-membered closure would put the iodine on the more substituted carbon. Ring-closure rate, not charge distribution, is what decides an intramolecular opening at a terminal alkene.",
      "options": {
        "A": "Correct. The tethered oxygen closes onto the nearer alkene carbon, giving a five-membered ring and leaving the iodine on the exocyclic carbon.",
        "B": "This is the six-membered closure. It is geometrically available but much slower than the five-membered one at a terminal alkene.",
        "C": "A ketone would require oxidation of the alcohol and loss of the double bond, neither of which iodine and bicarbonate accomplish.",
        "D": "This is a simple iodohydrin with the ring never closing. The hydroxyl in the substrate is well placed to attack, so cyclisation outruns capture by external water."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-carbon chain with a hydroxyl group at one end and a carbon-carbon double bond at the other."
  },
  {
    "question_id": "ch08_q9_halohydrin_mechanism",
    "topic": "Halohydrin Formation",
    "difficulty_level": "Easy",
    "question_text": "The reaction of propene with $Cl_2$ in water yields 1-chloropropan-2-ol as the major product. What is the correct description of the intermediates and regiochemical preference in this reaction?",
    "question_smiles": "CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "A carbocation intermediate is formed; the chloride ion attacks the less substituted carbon.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A chloronium ion intermediate is formed; water attacks the more substituted carbon because it carries a larger share of the partial positive charge.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A chloronium ion intermediate is formed; water attacks the less substituted carbon to minimize steric hindrance.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A radical intermediate is formed; water reacts with the secondary radical.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The product of a halohydrin formation reports on the intermediate. Naming which intermediate formed and which carbon the nucleophile chose are two halves of one answer, and an option can get one right while getting the other wrong.",
      "approach": "Step 1: Read the product. The hydroxyl sits on the middle carbon and the chlorine on the end one, so water attacked the more substituted carbon.\nStep 2: Ask what intermediate allows that. A bridged chloronium ion is unsymmetrical: the bond to the more substituted carbon is longer and weaker, so that carbon is the more electrophilic.\nStep 3: Rule out the alternative. A free carbocation would also put the charge on the middle carbon, but it would give syn as well as anti products, and it would allow rearrangement - neither of which is observed.",
      "note": "Both a chloronium ion and an open carbocation predict the same regiochemistry, so regiochemistry alone cannot distinguish them. It is the stereochemistry, anti in every case, that forces the bridged intermediate.",
      "options": {
        "A": "The intermediate is wrong and so is the nucleophile: it is water, not chloride, that forms the carbon-oxygen bond, and the observed anti stereochemistry excludes an open cation.",
        "B": "Correct. A bridged chloronium ion forms, and water opens it at the more substituted carbon, which bears the larger share of the positive charge.",
        "C": "The intermediate is right but the regiochemistry is backwards. Attack at the less substituted carbon would put the hydroxyl on the end carbon, which is not the product named.",
        "D": "Radicals would require an initiator and light or peroxides, and a radical mechanism gives neither this regiochemistry nor the strict anti stereochemistry."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A propene skeleton: three carbons, with the double bond at one end."
  },
  {
    "question_id": "ch08_q10_halohydrin_stereochem",
    "topic": "Halohydrin Formation",
    "difficulty_level": "Hard",
    "question_text": "Treatment of (E)-1-phenylpropene with $Br_2$ in aqueous tetrahydrofuran (THF) yields a bromohydrin. What is the structure and stereochemistry of the major product?",
    "question_smiles": "C/C=C/c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "(1R,2R)-2-bromo-1-phenylpropan-1-ol (and its enantiomer), resulting from anti addition of OH at the benzylic position and Br at the homobenzylic position.",
        "smiles": "O[C@@H](c1ccccc1)[C@@H](Br)C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "(1R,2S)-2-bromo-1-phenylpropan-1-ol (and its enantiomer), resulting from anti addition of OH at the benzylic position and Br at the homobenzylic position.",
        "smiles": "O[C@@H](c1ccccc1)[C@H](Br)C",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "(1R,2R)-1-bromo-1-phenylpropan-2-ol (and its enantiomer), resulting from syn addition.",
        "smiles": "Br[C@@H](c1ccccc1)[C@@H](O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(1R,2S)-1-bromo-1-phenylpropan-2-ol (and its enantiomer), resulting from anti addition.",
        "smiles": "Br[C@@H](c1ccccc1)[C@H](O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two questions have to be answered separately here: where the hydroxyl goes, which the phenyl ring decides, and how the two new stereocentres relate, which the anti opening decides. Getting one right does not settle the other.",
      "approach": "Step 1: Set the regiochemistry. The benzylic carbon holds positive charge best, so water attacks there and the bromine stays on the methyl-bearing carbon.\nStep 2: Set the relative configuration. Anti opening of the bromonium ion across an E-configured double bond makes the two stereocentres opposite in sense, giving the (1R,2S) relationship.\nStep 3: Set the absolute configuration. Both faces of the achiral alkene are equally available, so the product is that diastereomer as a racemate - (1R,2S) together with (1S,2R).",
      "note": "The check is to run the geometry the other way: the Z isomer under the same conditions would give the (1R,2R) and (1S,2S) pair. If a proposed answer does not change when the alkene geometry changes, the mechanism has not been applied.",
      "options": {
        "A": "The regiochemistry is right but the diastereomer is not. Like stereocentres come from anti addition to the Z isomer; the E isomer gives the unlike pair.",
        "B": "Correct. Water attacks the benzylic carbon, anti opening across the E double bond gives the unlike pair of stereocentres, and both enantiomers form equally.",
        "C": "This has the hydroxyl and bromine swapped, and calls the addition syn. The bromonium bridge rules out syn addition, and the ring puts the hydroxyl at the benzylic position.",
        "D": "The stereochemical relationship is right, but the regiochemistry is reversed: this puts the bromine on the benzylic carbon, where the hydroxyl belongs."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring attached to a two-carbon double bond that ends in a methyl group; the ring and the methyl are drawn on opposite sides of that double bond."
  },
  {
    "question_id": "ch08_q11_halohydrin_cyclic_ether",
    "topic": "Halohydrin Formation",
    "difficulty_level": "Hard",
    "question_text": "Reaction of 2-allylphenol with $Br_2$ in $CH_2Cl_2$ yields a cyclic ether. What is the major product?",
    "question_smiles": "Oc1ccccc1CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "2-(bromomethyl)-2,3-dihydrobenzofuran",
        "smiles": "BrCC1Cc2ccccc2O1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-bromo-3,4-dihydro-2H-chromene",
        "smiles": "BrC1Cc2ccccc2OC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-bromo-3-(2-methoxyphenyl)propene",
        "smiles": "C=C(Br)Cc1ccccc1OC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-bromo-3-(2-bromophenyl)propan-2-ol",
        "smiles": "OC(CBr)Cc1ccccc1Br",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A phenol oxygen is a competent nucleophile, and when a bromonium ion forms a few atoms away on the same molecule it opens that bridge long before any external nucleophile arrives.",
      "approach": "Step 1: Form the bromonium ion on the allyl double bond. Dichloromethane offers no nucleophile of its own, so the intermediate waits.\nStep 2: Count the ring the phenol can close. Attacking the nearer alkene carbon joins oxygen to a carbon three atoms away round the aromatic ring, closing a five-membered ring fused to the benzene.\nStep 3: Place the bromine. It stays on the carbon left outside that ring, giving 2-(bromomethyl)-2,3-dihydrobenzofuran.",
      "note": "The aromatic ring is what makes this fast: it holds the oxygen and the alkene near one another rather than letting the chain wander, so the cyclisation costs much less entropy than a comparable open-chain closure would.",
      "options": {
        "A": "Correct. The phenol oxygen opens the bromonium ion at the nearer carbon, closing a five-membered ring and leaving a bromomethyl group outside it.",
        "B": "This is the six-membered closure, in which oxygen attacks the far carbon. It is available but slower, and it puts the bromine inside the new ring.",
        "C": "A methyl ether and a vinyl bromide would require methylation of the phenol and substitution at the alkene, neither of which bromine in dichloromethane does.",
        "D": "This has bromine substituted onto the aromatic ring and the alkene converted to a bromohydrin. Electrophilic aromatic bromination needs a catalyst, and no water is present to make a bromohydrin."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring carrying a hydroxyl group, with a three-carbon chain ending in a double bond attached to the neighbouring ring carbon."
  },
  {
    "question_id": "ch08_q12_hydration_acid_rearrangement",
    "topic": "Hydration",
    "difficulty_level": "Medium",
    "question_text": "Acid-catalyzed hydration of 3,3-dimethylbut-1-ene yields which of the following as the major product?",
    "question_smiles": "CC(C)(C)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "3,3-dimethylbutan-2-ol",
        "smiles": "CC(C)(C)C(O)C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "2,3-dimethylbutan-2-ol",
        "smiles": "CC(C)(O)C(C)C",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "2,3-dimethylbutan-1-ol",
        "smiles": "OCC(C)C(C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3,3-dimethylbutan-1-ol",
        "smiles": "OCC(C)(C)CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Acid-catalysed hydration goes through a free carbocation, and a free carbocation is under no obligation to stay where it was made. Any skeleton that can reach a more stable cation in one shift will do so before water arrives.",
      "approach": "Step 1: Protonate the terminal carbon, which leaves a secondary cation on the next carbon along.\nStep 2: Inspect the neighbour. It carries three methyl groups and no hydrogen, so a hydride shift is impossible and a methyl migrates instead.\nStep 3: Capture the result. The migration leaves a tertiary cation, water bonds to it, and loss of a proton gives 2,3-dimethylbutan-2-ol.",
      "note": "Compare this with the oxymercuration of the same alkene, which gives the unrearranged alcohol. The difference is not the regiochemistry, which is Markovnikov both times, but whether the intermediate is free enough to rearrange.",
      "options": {
        "A": "This is the unrearranged product, from water trapping the secondary cation. In dilute acid the cation lives long enough for the methyl shift to win.",
        "B": "Correct. A methyl migrates from the quaternary neighbour to the secondary cation, and water captures the tertiary cation that results.",
        "C": "A primary alcohol here would require anti-Markovnikov addition, which acid-catalysed hydration never gives.",
        "D": "This also places the hydroxyl on a terminal carbon, and leaves the carbon skeleton unrearranged as well - two errors in one answer."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A terminal carbon-carbon double bond whose far end is a carbon carrying three methyl groups."
  },
  {
    "question_id": "ch08_q13_hydration_oxymercuration",
    "topic": "Hydration",
    "difficulty_level": "Medium",
    "question_text": "What is the major product when 3,3-dimethylbut-1-ene is treated with mercury(II) acetate in aqueous THF, followed by reduction with sodium borohydride ($NaBH_4$)?",
    "question_smiles": "CC(C)(C)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "2,3-dimethylbutan-2-ol",
        "smiles": "CC(C)(O)C(C)C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "3,3-dimethylbutan-2-ol",
        "smiles": "CC(C)(C)C(O)C",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "3,3-dimethylbutan-1-ol",
        "smiles": "OCC(C)(C)CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,3-dimethylbutan-1-ol",
        "smiles": "OCC(C)C(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Oxymercuration reaches the same regiochemical outcome as acid hydration by a different route, and the difference in route is exactly what makes it useful: there is no open carbocation to rearrange.",
      "approach": "Step 1: Form the mercurinium ion. Mercury(II) bridges both alkene carbons, so positive charge is shared rather than localised on one carbon.\nStep 2: Open it with water at the more substituted carbon, which carries the larger share of that charge. The regiochemistry is Markovnikov.\nStep 3: Remove the mercury. Sodium borohydride replaces the carbon-mercury bond with carbon-hydrogen, leaving 3,3-dimethylbutan-2-ol with the original skeleton intact.",
      "note": "Bridging is the whole point. The mercurinium ion never lets the positive charge sit alone on one carbon, so the neighbouring quaternary carbon has no cation to migrate a methyl group to.",
      "options": {
        "A": "This is the rearranged alcohol, and it is what acid-catalysed hydration of the same alkene gives. Oxymercuration avoids it precisely because no free cation forms.",
        "B": "Correct. Markovnikov addition of water without rearrangement, because the mercurinium bridge prevents an open carbocation from forming.",
        "C": "A primary alcohol would mean anti-Markovnikov addition, which is the hydroboration outcome, not the oxymercuration one.",
        "D": "This answer both rearranges the skeleton and puts the hydroxyl on a primary carbon, neither of which this sequence does."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a double bond at one end and a carbon carrying two extra methyl groups at the other."
  },
  {
    "question_id": "ch08_q14_hydration_hydroboration",
    "topic": "Hydration",
    "difficulty_level": "Medium",
    "question_text": "Hydroboration-oxidation of 1-methylcyclohexene using BH3·THF followed by H2O2/NaOH yields which of the following as the major product?",
    "question_smiles": "CC1=CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "trans-2-methylcyclohexan-1-ol (with methyl and hydroxyl groups trans)",
        "smiles": "C[C@H]1CCCC[C@@H]1O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "cis-2-methylcyclohexan-1-ol (with methyl and hydroxyl groups cis)",
        "smiles": "C[C@H]1CCCC[C@H]1O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-methylcyclohexan-1-ol",
        "smiles": "CC1(O)CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A 1:1 mixture of cis- and trans-2-methylcyclohexan-1-ol",
        "smiles": "CC1CCCCC1O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hydroboration-oxidation settles two questions at once, and a ring makes both visible in the product: which carbon the boron goes to, and which face the boron and hydrogen arrive on.",
      "approach": "Step 1: Place the boron. Addition is concerted through a four-centre transition state, and both sterics and the developing partial positive charge send boron to the less substituted carbon - the one without the methyl.\nStep 2: Note that hydrogen adds to the other carbon at the same instant, on the same face. This is a syn addition.\nStep 3: Oxidise. Hydrogen peroxide and base replace the carbon-boron bond with carbon-oxygen with retention of configuration, so the hydroxyl sits where boron was, on the same face as the hydrogen that added - and therefore trans to the methyl group.",
      "note": "Retention in the oxidation step is what makes this diagnostic. If the boron-to-oxygen exchange scrambled the configuration, the syn addition established in the first step would be invisible in the product.",
      "options": {
        "A": "Correct. Boron adds to the less substituted carbon and hydrogen to the same face of the other, and oxidation with retention leaves the hydroxyl trans to the methyl.",
        "B": "A cis relationship would require the hydrogen and the hydroxyl to end up on opposite faces, which contradicts the syn addition and the retentive oxidation.",
        "C": "This places the hydroxyl on the methyl-bearing carbon, which is Markovnikov orientation. Hydroboration gives the opposite.",
        "D": "A mixture would follow if the addition were not stereospecific. The concerted four-centre transition state makes it stereospecific, and only one diastereomer forms."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A ring of six carbons in which one of the two doubly bonded carbons also carries a methyl group."
  },
  {
    "question_id": "ch08_q15_hydration_solvomercuration",
    "topic": "Hydration",
    "difficulty_level": "Medium",
    "question_text": "Treatment of styrene with mercury(II) trifluoroacetate in ethanol, followed by sodium borohydride reduction, is known as solvomercuration-demercuration. What is the major organic product of this reaction?",
    "question_smiles": "c1ccccc1C=C",
    "options": [
      {
        "option_id": "A",
        "text": "1-ethoxy-1-phenylethane",
        "smiles": "CCOC(C)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-ethoxy-1-phenylethane",
        "smiles": "CCOCCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-phenylethan-1-ol",
        "smiles": "OC(C)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-phenylethan-1-ol",
        "smiles": "OCCc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Solvomercuration is oxymercuration with the water swapped for another nucleophilic solvent. Everything about the mechanism carries over; only the atom that ends up bonded to carbon changes.",
      "approach": "Step 1: Form the mercurinium ion across the styrene double bond.\nStep 2: Let the solvent open it. Ethanol is the nucleophile here, and it attacks the carbon better able to carry positive charge - the benzylic one.\nStep 3: Reduce away the mercury with sodium borohydride, which puts a hydrogen where the mercury was. The product is an ether with the ethoxy group on the benzylic carbon.",
      "note": "This is a Markovnikov-selective ether synthesis, which matters because the obvious alternative, treating an alkoxide with a secondary or tertiary alkyl halide, loses to elimination.",
      "options": {
        "A": "Correct. Ethanol opens the mercurinium ion at the benzylic carbon, and reduction replaces mercury with hydrogen to give the benzylic ethyl ether.",
        "B": "This is the anti-Markovnikov ether, with the ethoxy group on the terminal carbon. The mercurinium ion directs the nucleophile the other way.",
        "C": "An alcohol would form if water were the solvent. In ethanol it is ethanol that opens the bridged ion.",
        "D": "This answer gets both the nucleophile and the regiochemistry wrong: it is an alcohol, and a primary one at that."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Vinylbenzene: a benzene ring joined to a carbon-carbon double bond."
  },
  {
    "question_id": "ch08_q16_hydration_hydroboration_styrene_derivative",
    "topic": "Hydration",
    "difficulty_level": "Hard",
    "question_text": "Hydroboration-oxidation of (E)-1-phenylpropene yields which of the following as the major product?",
    "question_smiles": "C/C=C/c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "A 1:1 racemic mixture of (R)-1-phenylpropan-2-ol and (S)-1-phenylpropan-2-ol",
        "smiles": "CC(O)Cc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A 1:1 racemic mixture of (R)-1-phenylpropan-1-ol and (S)-1-phenylpropan-1-ol",
        "smiles": "CCC(O)c1ccccc1",
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
        "text": "2-phenylpropan-1-ol",
        "smiles": "OCC(C)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "With an internal double bond, neither carbon is obviously the less hindered one, so the electronic argument has to carry the regiochemistry on its own - and an aryl group is exactly the substituent that makes it decisive.",
      "approach": "Step 1: Recall what boron responds to. In the four-centre transition state a partial positive charge builds on the carbon that boron is not bonding to, and boron goes wherever leaves that charge best supported.\nStep 2: Identify that carbon. The benzylic position is stabilised by the ring, so the partial charge belongs there - which sends boron to the other carbon, the one bearing the methyl.\nStep 3: Oxidise and count. The hydroxyl replaces boron on the methyl-bearing carbon, giving 1-phenylpropan-2-ol, and since the achiral alkene offers both faces equally, that alcohol forms as a racemate.",
      "note": "The oxygen and the ring end up on different carbons, which is the reverse of the halohydrin case where water attacks the benzylic position. The two reactions respond to the same charge distribution with opposite roles: there the nucleophile seeks the charge, here boron avoids it.",
      "options": {
        "A": "Correct. Boron adds to the methyl-bearing carbon so the hydroxyl ends up there, and both faces of the alkene react equally, so the single stereocentre is racemic.",
        "B": "This puts the hydroxyl on the benzylic carbon, which would require boron to have added to the carbon the ring is stabilising.",
        "C": "A three-carbon chain with the hydroxyl at the far end would need the ring to be one carbon further from the double bond than it is.",
        "D": "This names an alcohol with the hydroxyl on a primary carbon next to the benzylic position, which does not correspond to adding across this double bond at all."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A propene chain whose first carbon carries a benzene ring, with the ring and the methyl group drawn across the double bond from each other."
  },
  {
    "question_id": "ch08_q17_hydration_9bbn",
    "topic": "Hydration",
    "difficulty_level": "Hard",
    "question_text": "When 2-methylpent-1,4-diene is treated with one equivalent of 9-borabicyclo[3.3.1]nonane (9-BBN) followed by basic hydrogen peroxide, which alcohol is formed as the major product?",
    "question_smiles": "C=C(C)CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "2-methylpent-4-en-1-ol",
        "smiles": "C=CCC(C)CO",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "4-methylpent-4-en-1-ol",
        "smiles": "C=C(C)CCCO",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "2-methylpentane-1,5-diol",
        "smiles": "OCC(C)CCCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-methylpentane-1,4-diol",
        "smiles": "CC(O)(C)CCCO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When a molecule has two double bonds and only one equivalent of reagent, the question is which alkene reacts, not what happens to it. A bulky borane answers that by size alone.",
      "approach": "Step 1: Compare the two alkenes. One is monosubstituted, a plain terminal CH2=CH- group; the other is 1,1-disubstituted, carrying a methyl and the chain on the same carbon.\nStep 2: Bring in 9-BBN, whose bicyclic framework makes it far more sensitive to crowding than borane itself. It reacts at the less hindered monosubstituted alkene and leaves the other untouched.\nStep 3: Finish the addition. Boron adds to the terminal carbon of that alkene, oxidation puts the hydroxyl there, and the 1,1-disubstituted double bond survives into the product.",
      "note": "Plain BH3 would attack both alkenes and give a mixture, and it would do so three times over. The selectivity here is bought entirely with steric bulk, which is why 9-BBN is the reagent of choice when one alkene has to be left alone.",
      "options": {
        "A": "This is the alcohol from reacting at the more substituted alkene, which is the one 9-BBN is designed to avoid.",
        "B": "Correct. 9-BBN reacts at the less hindered monosubstituted alkene, boron takes the terminal carbon, and the 1,1-disubstituted double bond is left intact.",
        "C": "A diol requires both alkenes to react, which needs at least two equivalents. Only one is supplied.",
        "D": "This is also a diol, and it places one hydroxyl on a tertiary carbon, which hydroboration does not do in any case."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-carbon chain carrying a double bond at each end, with a methyl group on the second carbon."
  },
  {
    "question_id": "ch08_q18_hydration_acid_rearrangement_hydride",
    "topic": "Hydration",
    "difficulty_level": "Medium",
    "question_text": "Acid-catalyzed hydration of 3-methylbut-1-ene yields which of the following as the major product?",
    "question_smiles": "CC(C)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "3-methylbutan-2-ol",
        "smiles": "CC(C)C(O)C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "2-methylbutan-2-ol",
        "smiles": "CCC(C)(O)C",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "3-methylbutan-1-ol",
        "smiles": "CC(C)CCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-methylbutan-1-ol",
        "smiles": "CCC(C)CO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This is the companion case to a methyl shift: the neighbouring carbon still has a hydrogen, so the cheaper migration is available and the skeleton stays connected the same way even though the charge moves.",
      "approach": "Step 1: Protonate the terminal carbon of the double bond, giving a secondary cation on the carbon next to it.\nStep 2: Look at the adjacent carbon. It carries a hydrogen and three carbon substituents, so moving that hydrogen with its bonding pair puts the charge on a tertiary carbon.\nStep 3: Trap the rearranged cation with water and lose a proton, giving 2-methylbutan-2-ol.",
      "note": "A hydride shift does not change which atoms are bonded to which, only where the charge sits, so the carbon skeleton of the product is the same as the substrate's. A methyl shift changes the skeleton as well.",
      "options": {
        "A": "This is the unrearranged Markovnikov product. It forms only if the secondary cation is captured before the hydride shift, which is much slower than the shift itself.",
        "B": "Correct. A hydride shift converts the secondary cation into a tertiary one, and water captures that.",
        "C": "A primary alcohol at the far end of the chain is an anti-Markovnikov outcome, which acid-catalysed hydration does not give.",
        "D": "This also places the hydroxyl on a primary carbon, and puts it on a skeleton that no step in this mechanism produces."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a double bond at one end and a methyl branch on the third carbon."
  },
  {
    "question_id": "ch08_q19_hydration_hydroboration_stoich",
    "topic": "Hydration",
    "difficulty_level": "Hard",
    "question_text": "Hydroboration of 3 equivalents of 2-methylbut-2-ene with 1 equivalent of borane THF (BH3·THF) proceeds through successive additions to form a trialkylborane. What is the structure of this trialkylborane?",
    "question_smiles": "CC(C)=CC",
    "options": [
      {
        "option_id": "A",
        "text": "Tri(3-methylbutan-2-yl)borane",
        "smiles": "B(C(C)C(C)C)(C(C)C(C)C)C(C)C(C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Tri(2-methylbutan-2-yl)borane",
        "smiles": "B(C(C)(C)CC)(C(C)(C)CC)C(C)(C)CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Tri(2-methylbutan-1-yl)borane",
        "smiles": "B(CC(C)CC)(CC(C)CC)CC(C)CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Tri(3-methylbutan-1-yl)borane",
        "smiles": "B(CCC(C)C)(CCC(C)C)CCC(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Borane has three hydrogens and adds across an alkene with each of them in turn. The regiochemistry of every one of those additions is the same, so identifying one alkyl group identifies all three.",
      "approach": "Step 1: Take one addition. The double bond has a disubstituted carbon and a monosubstituted one; boron goes to the less substituted of the two, and hydrogen to the other.\nStep 2: Name the group boron is now attached to. Boron sits on the carbon that carried one methyl and one hydrogen, with an isopropyl group beyond it - a 3-methylbutan-2-yl group.\nStep 3: Repeat. Each B-H bond adds the same way, so the product carries three identical 3-methylbutan-2-yl groups on boron.",
      "note": "In practice this particular alkene is bulky enough to stall at the dialkylborane, which is the reagent disiamylborane, and the third addition is very slow. The question isolates the regiochemistry, which is the same at every stage.",
      "options": {
        "A": "Correct. Boron adds to the less substituted carbon each time, giving three 3-methylbutan-2-yl groups on boron.",
        "B": "This puts boron on the more substituted carbon, which is the Markovnikov position and the one hydroboration avoids.",
        "C": "A 2-methylbutan-1-yl group corresponds to a different alkene skeleton; adding across this double bond cannot place boron on a terminal carbon.",
        "D": "A 3-methylbutan-1-yl group would require boron at the end of the chain, which means adding to a terminal alkene rather than this internal one."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a double bond between the second and third carbons and a methyl group on the second carbon."
  },
  {
    "question_id": "ch08_q20_hydrogenation_cyclic",
    "topic": "Reduction",
    "difficulty_level": "Easy",
    "question_text": "Catalytic hydrogenation of 1,2-dimethylcyclohexene using $Pd/C$ in methanol yields which of the following?",
    "question_smiles": "CC1=C(C)CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "cis-1,2-dimethylcyclohexane",
        "smiles": "C[C@H]1CCCC[C@H]1C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "trans-1,2-dimethylcyclohexane",
        "smiles": "C[C@@H]1CCCC[C@H]1C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A 1:1 racemic mixture of cis- and trans-1,2-dimethylcyclohexane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,2-dimethylcyclohexanol",
        "smiles": "CC1(O)CCCC[C@@H]1C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Catalytic hydrogenation happens on a metal surface, and that surface is what fixes the stereochemistry: the alkene lies flat against it and both hydrogens are delivered from the side facing the metal.",
      "approach": "Step 1: Picture the alkene adsorbed on the palladium. One face is pressed against the surface and the other points away from it.\nStep 2: Deliver both hydrogen atoms from the metal. They can only reach the face in contact with it, so the addition is syn.\nStep 3: Read the ring. Both new hydrogens arrive on the same face, which leaves the two methyl groups together on the other face - the cis diastereomer.",
      "note": "Syn delivery is a consequence of the surface, not of any bond-making geometry, which is why homogeneous hydrogenation catalysts that never adsorb the alkene onto a bulk metal give syn addition too, but for their own reason.",
      "options": {
        "A": "Correct. Both hydrogens are delivered from the face of the alkene lying on the catalyst, leaving the two methyl groups cis to one another.",
        "B": "The trans isomer would require the two hydrogens to add to opposite faces, which a metal surface cannot do in a single adsorption event.",
        "C": "A mixture would follow if the alkene desorbed and re-adsorbed between the two hydrogen deliveries. In practice both hydrogens are delivered before it leaves.",
        "D": "An alcohol contains oxygen, and there is none in this reaction. Hydrogenation adds only hydrogen across the double bond."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered ring with one double bond, each of the two doubly bonded carbons carrying a methyl group."
  },
  {
    "question_id": "ch08_q21_hydrogenation_pinene",
    "topic": "Reduction",
    "difficulty_level": "Hard",
    "question_text": "Catalytic hydrogenation of $\\alpha$-pinene over platinum oxide ($PtO_2$) occurs with high diastereoselectivity. Why does hydrogen add predominantly to one face of the double bond?",
    "question_smiles": "CC1=CCC2CC1C2(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "Hydrogen adds to the more hindered face to minimize torsional strain in the transition state.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "The gem-dimethyl groups on the one-carbon bridge sterically block the top face (beta face), directing hydrogen delivery to the less hindered bottom face (alpha face).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "The double bond is locked in a conformation that permits only anti-addition of hydrogen.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Platinum catalyst coordinates to the gem-dimethyl groups, directing syn-addition to the top face.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Syn addition says the two hydrogens arrive on the same face, but it does not say which face. In a rigid bicyclic molecule the two faces are genuinely different, and whichever one the catalyst can reach wins.",
      "approach": "Step 1: Look at the two faces of the double bond in a molecule that cannot flip. The bridge sits over one of them.\nStep 2: Identify the obstruction. The one-carbon bridge carries two methyl groups, and they lie directly across the face on their side.\nStep 3: Conclude. The alkene can only lie flat on the catalyst using the unobstructed face, so both hydrogens are delivered there and one diastereomer dominates.",
      "note": "The selectivity comes from the substrate, not the catalyst. Platinum has no preference of its own; it simply cannot bind the face that the gem-dimethyl bridge is covering.",
      "options": {
        "A": "Adding to the more hindered face is the opposite of what a surface reaction does. The alkene has to make close contact with the metal, so the crowded face is the one it cannot use.",
        "B": "Correct. The two methyl groups on the bridge shield one face, so the molecule can only present the other to the catalyst.",
        "C": "Catalytic hydrogenation is a syn addition, not an anti one, and no conformational lock would change that - the hydrogens come from the same surface.",
        "D": "The catalyst binds the pi system of the alkene, not saturated methyl groups, which have no lone pairs or pi electrons to offer a metal."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A bridged bicyclic hydrocarbon whose one-carbon bridge carries two methyl groups; a third methyl sits on one of the two doubly bonded carbons in the larger ring."
  },
  {
    "question_id": "ch08_q23_hydrogenation_stereochem",
    "topic": "Reduction",
    "difficulty_level": "Hard",
    "question_text": "Catalytic hydrogenation of (Z)-3,4-dimethylhex-3-ene using $Pd/C$ yields:",
    "question_smiles": "CC/C(C)=C(C)\\CC",
    "options": [
      {
        "option_id": "A",
        "text": "meso-3,4-dimethylhexane",
        "smiles": "CC[C@@H](C)[C@@H](C)CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "a 1:1 racemic mixture of (3R,4R)- and (3S,4S)-3,4-dimethylhexane",
        "smiles": "CC[C@@H](C)[C@H](C)CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(3R,4R)-3,4-dimethylhexane only",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(3S,4S)-3,4-dimethylhexane only",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When syn addition creates two stereocentres at once, the geometry of the alkene decides how they relate. The question is then whether the pair that results is chiral or has an internal mirror plane.",
      "approach": "Step 1: Add both hydrogens to one face. The two ethyl groups started on the same side and the two methyls on the other, and the addition does not disturb that.\nStep 2: Look for symmetry in the product. Reflecting through the plane that bisects the central carbon-carbon bond exchanges the two stereocentres and maps ethyl onto ethyl and methyl onto methyl.\nStep 3: Read off the consequence. That internal mirror makes the two centres opposite in sense, so the product is the meso diastereomer and is optically inactive.",
      "note": "Running the E isomer instead would give the chiral pair, and both alkenes give a single diastereomer. Two starting materials, two different single products, one mechanism - that is what stereospecific means.",
      "options": {
        "A": "Correct. Syn addition to the Z isomer leaves the molecule with an internal mirror plane, so the product is the meso diastereomer.",
        "B": "The chiral pair is what syn addition to the E isomer gives. It cannot come from this geometry without one hydrogen adding to each face.",
        "C": "A single enantiomer would require the catalyst to distinguish the two faces of an achiral alkene, which plain palladium on carbon cannot.",
        "D": "The same objection applies to the opposite enantiomer, and in any case neither is the diastereomer this geometry produces."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-carbon chain with a double bond in the middle; each doubly bonded carbon carries a methyl group, and the two ethyl ends of the chain are drawn on the same side."
  },
  {
    "question_id": "ch08_q24_hydrogenation_wilkinson",
    "topic": "Reduction",
    "difficulty_level": "Medium",
    "question_text": "Wilkinson's catalyst, $RhCl(PPh_3)_3$, is a homogeneous catalyst used for the hydrogenation of alkenes. Which of the following statements correctly describes a characteristic of Wilkinson's catalyst compared to heterogeneous catalysts like $Pd/C$?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Wilkinson's catalyst is highly sensitive to steric hindrance and reduces less-substituted alkenes preferentially.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Wilkinson's catalyst reduces tetrasubstituted alkenes faster than monosubstituted alkenes.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Wilkinson's catalyst hydrogenates alkenes via an anti-addition mechanism.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Wilkinson's catalyst also reduces carbonyl groups and esters under standard conditions.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A homogeneous catalyst is a discrete molecule with ligands around the metal, and those ligands are what the substrate has to fit past. That gives it a size sensitivity a bulk metal surface does not have.",
      "approach": "Step 1: Note the difference in structure. Wilkinson's catalyst carries three bulky triphenylphosphine ligands on a single rhodium centre, whereas palladium on carbon offers an extended, open metal surface.\nStep 2: Ask what the alkene must do. To be hydrogenated it has to coordinate to that one rhodium atom, squeezing in among the phosphines.\nStep 3: Predict the consequence. A crowded alkene coordinates poorly and reacts slowly, so the catalyst reduces monosubstituted and disubstituted alkenes readily while leaving tri- and tetrasubstituted ones nearly untouched.",
      "note": "That discrimination is what makes the reagent useful in synthesis: a molecule with two different alkenes can have the less hindered one reduced selectively, which heterogeneous hydrogenation would not manage.",
      "options": {
        "A": "Correct. The bulky phosphine ligands make coordination sensitive to crowding, so less substituted alkenes are reduced much faster.",
        "B": "This inverts the selectivity. Tetrasubstituted alkenes are the hardest to fit around the rhodium and are essentially unreactive.",
        "C": "Hydrogenation here is still a syn addition: both hydrogens are transferred from the same metal centre to the same face of the coordinated alkene.",
        "D": "Wilkinson's catalyst is selective for alkenes and leaves carbonyl groups and esters alone, which is another reason it is used in the presence of other functional groups."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch08_q25_epoxidation_cis",
    "topic": "Oxidation - Epoxidation",
    "difficulty_level": "Medium",
    "question_text": "Treatment of (Z)-but-2-ene with m-chloroperoxybenzoic acid (mCPBA) in dichloromethane yields a single stereoisomeric epoxide. What is the stereochemical configuration of this product?",
    "question_smiles": "C/C=C\\C",
    "options": [
      {
        "option_id": "A",
        "text": "(2R,3S)-2,3-epoxybutane, which is a meso compound.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2R,3R)-2,3-epoxybutane.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2S,3S)-2,3-epoxybutane.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A 1:1 racemic mixture of (2R,3R)- and (2S,3S)-2,3-epoxybutane.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A peroxyacid delivers one oxygen atom to one face of an alkene in a single step, with the old O-O bond breaking and both new C-O bonds forming at once. Nothing is free to rotate in between.",
      "approach": "Step 1: Recognise the addition as concerted and therefore syn: the oxygen bonds to both alkene carbons from the same side.\nStep 2: Apply that to the Z isomer, whose two methyl groups begin on the same side and stay there, both ending up cis on the new three-membered ring.\nStep 3: Assign the descriptors. The two ring carbons carry identical substituent sets and are opposite in configuration, so the epoxide has an internal mirror plane and is meso.",
      "note": "The product is achiral even though the peroxyacid can attack either face, because the two attacks give the same molecule rather than two enantiomers. That is a coincidence of this substrate's symmetry, not a general feature of epoxidation.",
      "options": {
        "A": "Correct. Syn delivery of oxygen to the Z alkene gives the cis epoxide, whose two stereocentres are opposite in sense and internally mirror-related.",
        "B": "The (2R,3R) epoxide is a member of the pair that comes from the E isomer, and it could not be formed alone from an achiral alkene in any case.",
        "C": "The same applies to its enantiomer: wrong geometry of starting material, and a single enantiomer where two would have to form.",
        "D": "A racemic pair of like stereocentres is the E isomer's outcome. Retaining the cis relationship of the two methyls forces the unlike pair instead."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "But-2-ene drawn with its two methyl groups pointing to the same face of the double bond."
  },
  {
    "question_id": "ch08_q26_epoxidation_trans",
    "topic": "Oxidation - Epoxidation",
    "difficulty_level": "Medium",
    "question_text": "Treatment of (E)-but-2-ene with mCPBA in dichloromethane yields which of the following products?",
    "question_smiles": "C/C=C/C",
    "options": [
      {
        "option_id": "A",
        "text": "meso-2,3-epoxybutane",
        "smiles": "C[C@@H]1O[C@@H]1C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A 1:1 racemic mixture of (2R,3R)- and (2S,3S)-2,3-epoxybutane",
        "smiles": "C[C@@H]1O[C@H]1C",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "(2R,3S)-2,3-epoxybutane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Butan-2-one",
        "smiles": "CCC(=O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Changing only the geometry of the alkene, with the same reagent and the same concerted delivery, is the cleanest demonstration that epoxidation is stereospecific rather than merely stereoselective.",
      "approach": "Step 1: Keep the mechanism fixed - one oxygen, delivered to one face, both bonds forming together.\nStep 2: Start from the E isomer, whose methyls are on opposite sides. They stay opposite on the epoxide ring, so the two stereocentres end up alike rather than opposite.\nStep 3: Count the products. Attack on the top face gives one enantiomer and attack on the bottom face gives the other, at equal rates, so the result is a racemic mixture of the trans epoxide.",
      "note": "Every molecule in the flask is chiral here, yet a polarimeter reads zero. The absence of rotation reflects the achirality of the starting material and reagent, not any symmetry in the product.",
      "options": {
        "A": "The meso epoxide has its methyls cis and comes from the Z alkene. Producing it from the E isomer would require the two methyls to swap sides.",
        "B": "Correct. Syn delivery of oxygen to the E alkene fixes the two stereocentres alike, and both faces are attacked equally, giving a racemate.",
        "C": "This names the meso compound by its descriptors rather than by name, and it is the Z isomer's product either way.",
        "D": "A ketone would require the double bond to be cleaved or rearranged. A peroxyacid adds an oxygen across it and leaves the carbon skeleton alone."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "But-2-ene drawn with its two methyl groups pointing to opposite faces of the double bond."
  },
  {
    "question_id": "ch08_q27_epoxidation_ring_opening",
    "topic": "Oxidation - Epoxidation",
    "difficulty_level": "Medium",
    "question_text": "Cyclohexene is treated with mCPBA in $CH_2Cl_2$ to form cyclohexene oxide. Subsequent reaction of this epoxide with aqueous acid ($H_3O^+$) yields which of the following products?",
    "question_smiles": "C1=CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "cis-cyclohexane-1,2-diol",
        "smiles": "O[C@@H]1CCCC[C@@H]1O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "trans-cyclohexane-1,2-diol",
        "smiles": "O[C@@H]1CCCC[C@H]1O",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A 1:1 mixture of cis- and trans-cyclohexane-1,2-diol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Adipic acid (hexanedioic acid)",
        "smiles": "OC(=O)CCCCC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two steps with opposite stereochemical characters run back to back here: the oxygen goes on to one face, and then it is opened from the other. The overall outcome is the sum of the two.",
      "approach": "Step 1: Epoxidise. The peroxyacid delivers oxygen syn, giving cyclohexene oxide with the three-membered ring fused to one face.\nStep 2: Protonate the epoxide oxygen. That turns it into a good leaving group and puts substantial positive charge on the ring carbons.\nStep 3: Open it with water. Water attacks a carbon from the face opposite the epoxide oxygen, in an SN2-like step, so the two oxygens end up on opposite faces - the trans diol.",
      "note": "Syn epoxidation followed by anti opening is the standard route to a trans diol, and it is worth holding against osmium tetroxide, which delivers both oxygens to one face and gives the cis diol instead.",
      "options": {
        "A": "The cis diol comes from delivering both oxygens to the same face, as osmium tetroxide does. Opening an epoxide has the nucleophile arriving from the far side.",
        "B": "Correct. Syn epoxidation followed by backside attack of water on the protonated epoxide puts the two hydroxyls on opposite faces.",
        "C": "A mixture would require the opening to lose stereochemical control, which happens only if a fully open carbocation forms. In an unstrained secondary case it does not.",
        "D": "Adipic acid is a cleavage product, from breaking the carbon-carbon bond under strongly oxidising conditions. Aqueous acid does not cleave anything."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-carbon ring holding a single double bond."
  },
  {
    "question_id": "ch08_q28_epoxidation_allylic_alcohol",
    "topic": "Oxidation - Epoxidation",
    "difficulty_level": "Hard",
    "question_text": "Epoxidation of cyclohex-2-en-1-ol with mCPBA in dichloromethane shows a high degree of diastereoselectivity. What is the major product and why?",
    "question_smiles": "OC1C=CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "cis-2,3-epoxycyclohexan-1-ol, because the allylic hydroxyl group directs the peroxyacid to the same face via hydrogen bonding.",
        "smiles": "O[C@@H]1CCC[C@@H]2O[C@H]12",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "trans-2,3-epoxycyclohexan-1-ol, because the hydroxyl group sterically blocks the syn-face.",
        "smiles": "O[C@@H]1CCC[C@H]2O[C@@H]12",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "cyclohexan-1,3-diol, due to rearrangement of the epoxide.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-chlorocyclohexan-1-ol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Ordinarily a peroxyacid approaches whichever face of an alkene is less crowded. A hydroxyl group next to the double bond overrides that, because it can hold the reagent in place rather than push it away.",
      "approach": "Step 1: Notice what the allylic hydroxyl offers. Its O-H can hydrogen bond to the peroxyacid, and its oxygen can accept a hydrogen bond in turn.\nStep 2: Follow the consequence. That interaction anchors the peroxyacid on the same face of the ring as the hydroxyl group, holding the delivering oxygen over that face.\nStep 3: Deliver the oxygen. It goes to the face the hydroxyl is on, so the epoxide and the hydroxyl finish cis to each other.",
      "note": "This is directed epoxidation, and it wins here despite the hydroxyl also being the bulkier neighbour - which is why a purely steric prediction gets this substrate backwards. Protect the alcohol as an ether and the selectivity reverses.",
      "options": {
        "A": "Correct. Hydrogen bonding between the allylic hydroxyl and the peroxyacid holds the reagent on the hydroxyl's face, so the epoxide forms cis to it.",
        "B": "This is the purely steric prediction. It would be right if the hydroxyl only got in the way, but the hydrogen bond it forms is worth more than the crowding it causes.",
        "C": "A 1,3-diol would need the epoxide to open and the oxygen to migrate, neither of which happens under the mild conditions of the epoxidation itself.",
        "D": "The chlorine in mCPBA sits on the aromatic ring of the reagent and is never transferred; only the oxygen is delivered."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered ring with one double bond and a hydroxyl group on the carbon next to it."
  },
  {
    "question_id": "ch08_q29_epoxidation_basic_opening",
    "topic": "Oxidation - Epoxidation",
    "difficulty_level": "Medium",
    "question_text": "Treatment of 2-methyloxirane (propylene oxide) with sodium methoxide in methanol yields which of the following as the major product?",
    "question_smiles": "CC1CO1",
    "options": [
      {
        "option_id": "A",
        "text": "1-methoxypropan-2-ol",
        "smiles": "COCC(O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-methoxypropan-1-ol",
        "smiles": "CC(OC)CO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,2-dimethoxypropane",
        "smiles": "COCC(OC)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "propan-2-ol",
        "smiles": "CC(O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An epoxide can be opened under acid or base, and the two conditions attack different carbons of the same ring. Which one applies is decided by how much the transition state resembles a carbocation.",
      "approach": "Step 1: Identify the conditions. Sodium methoxide is a strong nucleophile and there is no acid present, so the epoxide is opened without being protonated first.\nStep 2: Recognise the consequence. With no protonation there is little positive charge on either ring carbon, so the step is a straightforward SN2 and steric access decides everything.\nStep 3: Attack the less hindered carbon. Methoxide bonds to the unsubstituted CH2, and the ring opens to leave the alkoxide - then the alcohol - on the carbon bearing the methyl.",
      "note": "Under acidic conditions the same epoxide gives the other regiochemistry, because protonation stretches the bond to the more substituted carbon and lets that carbon carry the developing charge. The nucleophile has not changed its preference; the substrate has changed what it offers.",
      "options": {
        "A": "Correct. Methoxide attacks the less hindered carbon of the unactivated epoxide, leaving the hydroxyl on the more substituted one.",
        "B": "This is the acid-catalysed regiochemistry, with the nucleophile at the more substituted carbon. It requires protonation of the epoxide, and no acid is present.",
        "C": "Adding two methoxy groups would need the ring to open twice. There is only one epoxide oxygen and it becomes the hydroxyl.",
        "D": "Propan-2-ol has lost an oxygen and a carbon relative to the substrate; nothing in this reaction removes either."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-membered ring made of two carbons and an oxygen, with a methyl group on one of the ring carbons."
  },
  {
    "question_id": "ch08_q30_dihydroxylation_oso4",
    "topic": "Oxidation - Dihydroxylation",
    "difficulty_level": "Easy",
    "question_text": "Treatment of cyclohexene with catalytic osmium tetroxide ($OsO_4$) and N-methylmorpholine N-oxide (NMO) as the co-oxidant yields which of the following?",
    "question_smiles": "C1=CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "trans-cyclohexane-1,2-diol",
        "smiles": "O[C@@H]1CCCC[C@H]1O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "cis-cyclohexane-1,2-diol",
        "smiles": "O[C@@H]1CCCC[C@@H]1O",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "cyclohexanone",
        "smiles": "O=C1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "adipic acid",
        "smiles": "OC(=O)CCCCC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Osmium tetroxide adds to an alkene through a cyclic intermediate in which both oxygens are already attached to the same osmium. That single connection is what forces both of them onto one face.",
      "approach": "Step 1: Form the osmate ester. Osmium tetroxide adds across the double bond in one step, making a five-membered ring in which two oxygens bridge to the two former alkene carbons.\nStep 2: Note the geometry. Because both oxygens come from the same osmium atom, they can only reach the same face of the alkene, so the addition is syn.\nStep 3: Hydrolyse the ester to release the diol with its stereochemistry intact, giving the cis diol.",
      "note": "The N-methylmorpholine N-oxide is not part of the stereochemical argument at all. It reoxidises the osmium after each turnover, which is what lets a toxic and expensive reagent be used in catalytic amounts.",
      "options": {
        "A": "The trans diol would need the two oxygens delivered to opposite faces, which the cyclic osmate ester makes impossible.",
        "B": "Correct. Both oxygens come from one osmium through a cyclic intermediate, so they add to the same face and give the cis diol.",
        "C": "A ketone would require the double bond to be cleaved and one carbon oxidised further. Osmium tetroxide under these mild conditions adds without cleaving.",
        "D": "Adipic acid is the product of cleaving the ring, which needs hot acidic permanganate rather than catalytic osmium with a mild co-oxidant."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Cyclohexene: six ring carbons, two of them joined by a double bond."
  },
  {
    "question_id": "ch08_q31_dihydroxylation_kmno4_cis",
    "topic": "Oxidation - Dihydroxylation",
    "difficulty_level": "Medium",
    "question_text": "Treatment of (Z)-but-2-ene with cold, alkaline potassium permanganate ($KMnO_4$) yields which of the following?",
    "question_smiles": "C/C=C\\C",
    "options": [
      {
        "option_id": "A",
        "text": "meso-butane-2,3-diol",
        "smiles": "C[C@@H](O)[C@@H](O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A 1:1 racemic mixture of (2R,3R)- and (2S,3S)-butane-2,3-diol",
        "smiles": "C[C@@H](O)[C@H](O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "butan-2-one",
        "smiles": "CCC(=O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "acetic acid",
        "smiles": "CC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Cold, dilute, alkaline permanganate does the same job as osmium tetroxide and by the same kind of intermediate, so the stereochemical rule is the same. The conditions matter because warm or acidic permanganate does something quite different.",
      "approach": "Step 1: Form the cyclic manganate ester across the double bond, with both oxygens bound to the same manganese.\nStep 2: Conclude that the addition is syn, since one metal cannot reach both faces at once.\nStep 3: Apply that to the Z isomer. The two methyls begin on the same side and stay there, so the two hydroxyls also end up cis - and the resulting diol has an internal mirror plane, making it meso.",
      "note": "Keeping the solution cold and basic is what stops the reaction at the diol. Warm it or acidify it and the same reagent goes on to cleave the carbon-carbon bond entirely.",
      "options": {
        "A": "Correct. Syn addition of both hydroxyls to the Z alkene gives the cis diol, whose two stereocentres are opposite in sense and internally mirror-related.",
        "B": "The chiral pair comes from the E isomer. Syn addition preserves the cis relationship of the methyl groups, which forces the meso product here.",
        "C": "A ketone would require cleavage and reoxidation. Cold alkaline permanganate stops at the diol.",
        "D": "Acetic acid is a cleavage fragment, which is what hot permanganate gives. Under these conditions the carbon skeleton stays whole."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain whose central double bond has both methyl groups on one side."
  },
  {
    "question_id": "ch08_q32_dihydroxylation_kmno4_trans",
    "topic": "Oxidation - Dihydroxylation",
    "difficulty_level": "Medium",
    "question_text": "Treatment of (E)-but-2-ene with cold, alkaline $KMnO_4$ yields which of the following?",
    "question_smiles": "C/C=C/C",
    "options": [
      {
        "option_id": "A",
        "text": "meso-butane-2,3-diol",
        "smiles": "C[C@@H](O)[C@@H](O)C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A 1:1 racemic mixture of (2R,3R)- and (2S,3S)-butane-2,3-diol",
        "smiles": "C[C@@H](O)[C@H](O)C",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "(2R,3R)-butane-2,3-diol only",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(2S,3S)-butane-2,3-diol only",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Swapping the alkene geometry with everything else held constant tests whether the syn rule has actually been understood, because the correct answer changes while the mechanism does not.",
      "approach": "Step 1: Keep the cyclic manganate ester and the syn delivery exactly as before.\nStep 2: Start from the E isomer, whose two methyl groups are on opposite sides. Adding both hydroxyls to one face leaves the methyls opposite, so the two new stereocentres are alike.\nStep 3: Count the enantiomers. Attack on either face of the achiral alkene is equally likely, so the like pair forms as a 1:1 racemate.",
      "note": "The diol from the E alkene is chiral and the diol from the Z alkene is not, from one reagent under one set of conditions. The stereochemistry of the product is carrying information about the starting material, which is what makes syn additions useful analytically.",
      "options": {
        "A": "The meso diol is what the Z isomer gives. Preserving the trans relationship of the methyls rules it out here.",
        "B": "Correct. Syn addition across the E alkene gives like stereocentres, and both faces react equally, so the product is racemic.",
        "C": "A single enantiomer cannot form: nothing in the reagent, solvent or substrate is chiral, so the two faces of the alkene are equivalent.",
        "D": "The same objection applies to the opposite enantiomer. Both are formed, in equal amounts."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain whose central double bond has its methyl groups on opposite sides."
  },
  {
    "question_id": "ch08_q33_dihydroxylation_woodward_prevost",
    "topic": "Oxidation - Dihydroxylation",
    "difficulty_level": "Hard",
    "question_text": "In organic synthesis, Woodward dihydroxylation and Prévost dihydroxylation are methods used to synthesize diols from alkenes using iodine and silver carboxylates. Which of the following statements correctly distinguishes their outcomes?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Woodward dihydroxylation yields trans-diols via dry conditions, while Prévost dihydroxylation yields cis-diols via wet conditions.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Woodward dihydroxylation yields cis-diols using wet conditions ($I_2$, $CH_3COOAg$, $H_2O$), while Prévost dihydroxylation yields trans-diols using dry conditions ($I_2$, $CH_3COOAg$).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Both methods yield cis-diols, but Woodward uses basic conditions.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both methods yield trans-diols, but Prévost uses acidic conditions.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two closely related procedures use the same iodine and silver carboxylate and differ only in whether water is present, yet they deliver opposite diol stereochemistry. Tracking where each oxygen comes from is what separates them.",
      "approach": "Step 1: Start both the same way. Iodine forms an iodonium ion, and a carboxylate opens it from the opposite face, so the two groups begin trans.\nStep 2: Let the neighbouring carboxylate oxygen displace the iodide intramolecularly. That closes a five-membered dioxolanylium ring on the face the carboxylate was on, inverting that centre.\nStep 3: Split the two routes. With water present the ring is captured and hydrolysed so that both oxygens finish on the same face - the Woodward cis diol. Under dry conditions a second carboxylate attacks the ring carbon from the far side instead, and the trans diol results after hydrolysis.",
      "note": "McMurry does not cover either procedure; the item is kept for ACS exam coverage. Held next to osmium tetroxide and to epoxidation-then-hydrolysis, it completes the set: there is a reagent for either diol stereochemistry.",
      "options": {
        "A": "The two are the right way round in principle but swapped: it is the wet Woodward conditions that give the cis diol and the dry Prevost conditions that give the trans one.",
        "B": "Correct. Woodward's wet conditions deliver the cis diol, and Prevost's dry conditions the trans one, from a common iodonium and carboxylate opening.",
        "C": "If both gave the same stereochemistry there would be no reason to have two procedures. The point of the pair is that they diverge.",
        "D": "The same objection applies, and neither procedure relies on acidic conditions to set its stereochemical outcome."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch08_q34_dihydroxylation_sharpless",
    "topic": "Oxidation - Dihydroxylation",
    "difficulty_level": "Hard",
    "question_text": "The Sharpless asymmetric dihydroxylation converts styrene into 1-phenylethane-1,2-diol with high enantiomeric excess, the sense of the induction being set by which AD-mix is used. What are the key components of an AD-mix that enable this enantioselective transformation?",
    "question_smiles": "c1ccccc1C=C",
    "options": [
      {
        "option_id": "A",
        "text": "$OsO_4$, a chiral bis-cinchona alkaloid ligand (DHQ)$_2$PHAL, $K_3Fe(CN)_6$ as the co-oxidant, and $K_2CO_3$.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$KMnO_4$, a chiral crown ether, and $H_2O$.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$mCPBA$, a chiral salen complex, and $H_2SO_4$.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$RuO_4$, a chiral diamine ligand, and $NaIO_4$.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Making an enantioselective version of a syn dihydroxylation means keeping the osmium chemistry and adding something chiral that can tell the two faces of the alkene apart, plus a way of turning the metal over without wrecking the selectivity.",
      "approach": "Step 1: Keep the reactive species. Osmium is still what adds across the alkene, so it has to be in the mix.\nStep 2: Add the chirality as a ligand. A bis-cinchona alkaloid built on a phthalazine spacer binds the osmium and creates a chiral pocket, so one face of the alkene binds better than the other.\nStep 3: Supply a stoichiometric oxidant and a base. Potassium ferricyanide reoxidises the osmium in a separate phase and potassium carbonate maintains the pH, which keeps the turnover away from the ligand-controlled step.",
      "note": "McMurry does not cover the asymmetric variant; the item is kept for ACS exam coverage. Which enantiomer of the diol you get depends on which alkaloid the mix carries, and the two commercial mixes differ in exactly that ligand.",
      "options": {
        "A": "Correct. Osmium supplies the reactive centre, the bis-cinchona phthalazine ligand supplies the chiral environment, and ferricyanide with carbonate turns the osmium over.",
        "B": "Permanganate does add syn, but it offers no site for a chiral ligand to bind, and a crown ether coordinates the counterion rather than the oxidant.",
        "C": "A peroxyacid makes an epoxide, not a diol, and a salen complex with strong acid describes a quite different catalytic system.",
        "D": "Ruthenium tetroxide with periodate is a cleavage system: it cuts the double bond rather than dihydroxylating it, and there is no chiral induction in it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring carrying a terminal carbon-carbon double bond."
  },
  {
    "question_id": "ch08_q35_ozonolysis_reductive",
    "topic": "Oxidation - Ozonolysis",
    "difficulty_level": "Easy",
    "question_text": "Ozonolysis of 2-methylbut-2-ene followed by treatment with dimethyl sulfide ($Me_2S$) yields which of the following products?",
    "question_smiles": "CC(C)=CC",
    "options": [
      {
        "option_id": "A",
        "text": "Acetone and acetaldehyde",
        "smiles": "CC(=O)C.CC=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetone and acetic acid",
        "smiles": "CC(=O)C.CC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-methylbutane-2,3-diol",
        "smiles": "CC(C)(O)C(O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-methylbutan-2-one",
        "smiles": "CC(C)C(=O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Ozonolysis cuts the double bond in two and caps each carbon with an oxygen. What each fragment becomes is fixed by how many hydrogens that carbon already had, and the workup decides whether it stops there.",
      "approach": "Step 1: Cut the double bond and give each carbon a doubly bonded oxygen.\nStep 2: Read the fragments. The carbon bearing two methyls has no hydrogen left, so it becomes a ketone - acetone. The carbon bearing one methyl and one hydrogen keeps that hydrogen and becomes an aldehyde - acetaldehyde.\nStep 3: Apply the workup. Dimethyl sulfide is a reducing agent: it destroys the ozonide without oxidising anything, so the aldehyde survives as an aldehyde.",
      "note": "Reading ozonolysis backwards is how alkene structures used to be determined. Join the two carbonyl carbons with a double bond and you recover the starting alkene, which is the check on any answer here.",
      "options": {
        "A": "Correct. The disubstituted carbon becomes acetone and the monosubstituted one becomes acetaldehyde, which the reductive workup leaves untouched.",
        "B": "Acetic acid would require the aldehyde to be oxidised further, and dimethyl sulfide is a reductant, not an oxidant.",
        "C": "A diol is what cold permanganate or osmium tetroxide gives. Ozone cleaves the bond rather than adding across it.",
        "D": "A single five-carbon ketone keeps the carbon skeleton intact, but ozonolysis breaks it into two pieces."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A trisubstituted alkene: one doubly bonded carbon carries two methyl groups, the other carries a methyl group and a hydrogen."
  },
  {
    "question_id": "ch08_q36_ozonolysis_oxidative",
    "topic": "Oxidation - Ozonolysis",
    "difficulty_level": "Medium",
    "question_text": "Ozonolysis of 2-methylbut-2-ene followed by workup with hydrogen peroxide ($H_2O_2$) yields which of the following products?",
    "question_smiles": "CC(C)=CC",
    "options": [
      {
        "option_id": "A",
        "text": "Acetone and acetaldehyde",
        "smiles": "CC(=O)C.CC=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Acetone and acetic acid",
        "smiles": "CC(=O)C.CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Acetic acid and carbon dioxide",
        "smiles": "CC(=O)O.O=C=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,3-dimethylbutane-2,3-diol",
        "smiles": "CC(C)(O)C(C)(C)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The cleavage itself is unchanged; only the workup differs. The workup decides the oxidation level of whichever fragment still carries a hydrogen, which is why one alkene can give two different answer sets.",
      "approach": "Step 1: Cleave as before, giving a ketone from the carbon with two methyls and an aldehyde from the carbon with one methyl and one hydrogen.\nStep 2: Apply hydrogen peroxide, an oxidant. It oxidises the aldehyde on to the carboxylic acid.\nStep 3: Note what is unaffected. The ketone has no hydrogen on its carbonyl carbon and cannot be oxidised further, so acetone survives and acetaldehyde does not.",
      "note": "Only the fragment that would have been an aldehyde is at risk. Comparing the two workups on the same alkene is the cleanest way to see that the workup never touches a ketone.",
      "options": {
        "A": "The aldehyde is what the reductive workup preserves. Hydrogen peroxide oxidises it, so it cannot be in this answer.",
        "B": "Correct. Ketone from the disubstituted carbon, and the aldehyde from the other carbon oxidised on to acetic acid by the peroxide.",
        "C": "Carbon dioxide comes from a terminal CH2 group, and this alkene has none - both of its carbons carry at least one methyl.",
        "D": "A diol keeps both carbons joined, which cleavage rules out, and this one has six carbons where the substrate has five."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An alkene whose left-hand carbon bears two methyl groups and whose right-hand carbon bears one methyl group and one hydrogen."
  },
  {
    "question_id": "ch08_q37_ozonolysis_cyclic",
    "topic": "Oxidation - Ozonolysis",
    "difficulty_level": "Medium",
    "question_text": "Ozonolysis of 1-methylcyclohexene followed by treatment with $Zn$ in acetic acid yields which of the following compounds?",
    "question_smiles": "CC1=CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "6-oxoheptanal",
        "smiles": "CC(=O)CCCCC=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "heptane-2,6-dione",
        "smiles": "CC(=O)CCCC(=O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "6-oxoheptanoic acid",
        "smiles": "CC(=O)CCCCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "cyclohexane-1,2-dione",
        "smiles": "O=C1CCCCC1=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Cleaving a double bond that is inside a ring does not give two molecules. The ring simply opens, and both new carbonyl groups end up in the same chain.",
      "approach": "Step 1: Cut the ring double bond and cap each carbon with oxygen, keeping in mind that the rest of the ring still connects them.\nStep 2: Assign the two carbonyls. The carbon that carried the methyl has no hydrogen and becomes a ketone; the other carbon keeps its hydrogen and becomes an aldehyde.\nStep 3: Count the chain. Seven carbons run from the aldehyde to the methyl group, giving 6-oxoheptanal - one molecule with two carbonyl groups.",
      "note": "The product has the same number of carbons as the starting material, which is the check that the ring opened rather than fragmented. Any answer with fewer carbons has cut something the reaction does not cut.",
      "options": {
        "A": "Correct. The ring opens to a single seven-carbon chain carrying a ketone at one end and an aldehyde at the other.",
        "B": "A diketone would require both former alkene carbons to be fully substituted, but one of them carried a hydrogen and becomes an aldehyde.",
        "C": "A carboxylic acid at that end would need an oxidative workup. Zinc in acetic acid is reductive and preserves the aldehyde.",
        "D": "This has only six carbons and keeps the ring closed, so it accounts for neither the methyl group nor the cleavage."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A cyclohexene whose double bond carries one methyl substituent."
  },
  {
    "question_id": "ch08_q38_ozonolysis_structure_determination",
    "topic": "Oxidation - Ozonolysis",
    "difficulty_level": "Hard",
    "question_text": "An unknown alkene with the molecular formula $C_8H_{12}$ undergoes ozonolysis under reductive conditions ($Zn/HOAc$) to yield a single product: succinaldehyde (butanedial, $OHC-CH_2-CH_2-CHO$). What is the structure of the starting alkene?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Cycloocta-1,5-diene",
        "smiles": "C1=CCCC=CCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cycloocta-1,4-diene",
        "smiles": "C1=CCC=CCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,2-dimethylcyclohexene",
        "smiles": "CC1=C(C)CCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3,4-dimethylcyclohexene",
        "smiles": "CC1CC=CCC1C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Ozonolysis run backwards is a structure proof. Every carbonyl carbon in the products was half of a double bond, so reassembling them in pairs reconstructs the alkene - and the number of distinct products constrains how symmetric it was.",
      "approach": "Step 1: Count the degrees of unsaturation in C8H12: the saturated reference is 18 hydrogens, so there are three. Ozonolysis cleaves only carbon-carbon double bonds.\nStep 2: Use the phrase 'a single product'. Getting one four-carbon dialdehyde and nothing else means every fragment is identical, so the molecule must be cut into equal halves.\nStep 3: Reassemble. Joining two succinaldehyde units carbonyl-to-carbonyl in a ring gives an eight-membered ring with two double bonds placed symmetrically - cycloocta-1,5-diene, which accounts for two of the three degrees of unsaturation with the ring supplying the third.",
      "note": "A dialdehyde as the sole product is the signal that the double bonds were in a ring. An acyclic diene would have released terminal fragments as well, and two of them would not have been identical.",
      "options": {
        "A": "Correct. Two double bonds placed symmetrically in an eight-membered ring cut it into two identical four-carbon dialdehyde fragments.",
        "B": "The 1,4-diene is cut into a two-carbon and a six-carbon piece, so it would give two different products rather than one.",
        "C": "This is C8H14, one degree of unsaturation short, and its single double bond would give one seven-carbon dicarbonyl rather than a four-carbon dialdehyde.",
        "D": "This is also C8H14 and has one double bond, so it cannot give two identical fragments and does not match the formula."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch08_q39_ozonolysis_alkene_vs_alkyne",
    "topic": "Oxidation - Ozonolysis",
    "difficulty_level": "Hard",
    "question_text": "Ozonolysis of hex-1-en-5-yne under controlled conditions can selectively cleave the alkene in the presence of the alkyne. If 1 equivalent of ozone is added to hex-1-en-5-yne followed by reductive workup, what is the major organic product?",
    "question_smiles": "C#CCCC=C",
    "options": [
      {
        "option_id": "A",
        "text": "pent-4-ynal",
        "smiles": "C#CCCC=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "pent-4-yn-1-ol",
        "smiles": "C#CCCCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "succinic acid",
        "smiles": "OC(=O)CCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "but-3-ynal",
        "smiles": "C#CCC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Ozone is an electrophile, so when a molecule offers it more than one unsaturated site, the more electron-rich one reacts first. A double bond and a triple bond are not equally available.",
      "approach": "Step 1: Compare the two sites. The pi electrons of an alkene sit in a more diffuse, higher-energy orbital than those of an alkyne, whose sp carbons hold their electrons more tightly.\nStep 2: Limit the reagent to one equivalent. Ozone is consumed at the alkene before it reaches the alkyne.\nStep 3: Work out the fragments. Cleaving the terminal double bond releases the CH2 end as formaldehyde and leaves the rest of the chain with an aldehyde, giving pent-4-ynal with the triple bond intact.",
      "note": "The selectivity is a matter of relative rate, not of the alkyne being inert. With excess ozone the triple bond is cleaved as well, which is why the stoichiometry is stated in the question.",
      "options": {
        "A": "Correct. One equivalent of ozone cleaves the more electron-rich double bond, leaving a five-carbon aldehyde with the triple bond untouched.",
        "B": "An alcohol at that position would require a reduction of the aldehyde, and the reductive workup only destroys the ozonide - it does not reduce carbonyl groups.",
        "C": "A diacid means both unsaturated sites were cleaved and the fragments oxidised, which needs excess ozone and an oxidative workup.",
        "D": "This is a carbon short. Cleaving the double bond removes only the terminal CH2, leaving five carbons rather than four."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-carbon chain with a triple bond at one end and a double bond at the other."
  },
  {
    "question_id": "ch08_q40_permanganate_cleavage_cyclic",
    "topic": "Oxidation - Permanganate Cleavage",
    "difficulty_level": "Easy",
    "question_text": "When cyclohexene is treated with warm, concentrated potassium permanganate ($KMnO_4$) in acidic solution, what is the major organic product?",
    "question_smiles": "C1=CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "adipic acid (hexanedioic acid)",
        "smiles": "OC(=O)CCCCC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "cis-cyclohexane-1,2-diol",
        "smiles": "O[C@@H]1CCCC[C@@H]1O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "trans-cyclohexane-1,2-diol",
        "smiles": "O[C@@H]1CCCC[C@H]1O",
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
      "context": "Permanganate is the same reagent at two different settings. Cold and dilute it adds two hydroxyls; hot and concentrated it keeps going, through the diol and past it, until the carbon-carbon bond itself is broken.",
      "approach": "Step 1: Add across the double bond to the cis diol, the same first step as the cold reaction.\nStep 2: Keep oxidising. Under forcing conditions the diol is oxidised on to two carbonyl groups and the bond between those carbons is cleaved.\nStep 3: Follow the ring. Both new carbonyl carbons stay tethered by the rest of the ring, and each is oxidised on to a carboxylic acid, giving one open six-carbon diacid - adipic acid.",
      "note": "Cleaving a ring double bond gives one molecule with two new ends, not two molecules. The carbon count is the check: six carbons in, six carbons out.",
      "options": {
        "A": "Correct. The ring double bond is cleaved and both carbons are oxidised to carboxylic acids, opening the ring to a six-carbon diacid.",
        "B": "The cis diol is where the cold, dilute reaction stops. Hot concentrated permanganate does not stop there.",
        "C": "The trans diol is not a permanganate product at all - syn addition cannot give it - and it is in any case an intermediate-level answer for forcing conditions.",
        "D": "A single ketone would leave five carbons unaccounted for, and there is no step that removes a carbon from the ring here."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered carbocycle with one double bond in it."
  },
  {
    "question_id": "ch08_q41_permanganate_cleavage_acyclic",
    "topic": "Oxidation - Permanganate Cleavage",
    "difficulty_level": "Medium",
    "question_text": "Treatment of 2-methylbut-2-ene with hot, basic potassium permanganate followed by acidification yields which of the following?",
    "question_smiles": "CC(C)=CC",
    "options": [
      {
        "option_id": "A",
        "text": "Acetone and acetic acid",
        "smiles": "CC(=O)C.CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetone and carbon dioxide",
        "smiles": "CC(=O)C.O=C=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-methylbutan-2-one",
        "smiles": "CC(C)C(=O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-methylbutane-2,3-diol",
        "smiles": "CC(C)(O)C(O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Oxidative cleavage sorts the two halves of a double bond by how many hydrogens each carbon carries. A carbon with no hydrogen can only become a ketone; a carbon with one is taken all the way to an acid.",
      "approach": "Step 1: Break the double bond and give each carbon an oxygen.\nStep 2: Take the carbon carrying two methyl groups. It has no hydrogen to lose, so oxidation stops at the ketone and the fragment is acetone.\nStep 3: Take the other carbon, which carries a methyl and a hydrogen. Under the forcing conditions that hydrogen is removed too, so the fragment goes past the aldehyde to acetic acid.",
      "note": "The same alkene under ozone with a reductive workup gives acetone and acetaldehyde. The difference is entirely in what happens after the cleavage, not in where the bond breaks.",
      "options": {
        "A": "Correct. The disubstituted carbon becomes acetone and the monosubstituted one is oxidised through the aldehyde to acetic acid.",
        "B": "Carbon dioxide is what a terminal CH2 group becomes. Both carbons of this double bond carry a methyl, so neither can lose two carbons' worth of substitution.",
        "C": "A single five-carbon ketone leaves the carbon skeleton intact, but cleavage divides it into two pieces.",
        "D": "A diol is where the cold, dilute reaction stops. Hot permanganate carries on past it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-carbon alkene whose double bond sits between the second and third carbons, with a methyl branch at the second."
  },
  {
    "question_id": "ch08_q42_permanganate_cleavage_terminal",
    "topic": "Oxidation - Permanganate Cleavage",
    "difficulty_level": "Medium",
    "question_text": "What organic products are formed when methylenecyclohexane is treated with hot, acidic potassium permanganate ($KMnO_4$)?",
    "question_smiles": "C=C1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclohexanone and carbon dioxide",
        "smiles": "O=C1CCCCC1.O=C=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclohexanone and formic acid",
        "smiles": "O=C1CCCCC1.OC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclohexane-1,1-diol",
        "smiles": "OC1(O)CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-(hydroxymethyl)cyclohexan-1-ol",
        "smiles": "OCC1(O)CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A terminal CH2 group is the extreme case of the hydrogen-counting rule. With two hydrogens on the carbon, oxidation has nowhere to stop, and the fragment leaves the molecule entirely.",
      "approach": "Step 1: Cleave the exocyclic double bond and cap each carbon with oxygen.\nStep 2: Take the ring carbon. It carries two ring bonds and no hydrogen, so it stops at a ketone - cyclohexanone, with the ring intact.\nStep 3: Take the CH2. Both of its hydrogens are removed in turn, taking it through formaldehyde and formic acid to carbon dioxide, which is lost as a gas.",
      "note": "This is why an exocyclic methylene group appears simply to vanish in an oxidative cleavage. The carbon has not gone anywhere unusual; it has just been oxidised past the point where it can stay attached to anything.",
      "options": {
        "A": "Correct. The ring carbon becomes cyclohexanone and the exocyclic CH2 is oxidised all the way to carbon dioxide.",
        "B": "Formic acid is an intermediate on the way, but hot acidic permanganate oxidises it on to carbon dioxide rather than leaving it.",
        "C": "A gem-diol on one carbon is the hydrate of cyclohexanone, not an isolable product, and it accounts for neither the cleavage nor the lost carbon.",
        "D": "This keeps both carbons joined, so no cleavage has occurred - it is the product of adding two hydroxyls rather than of breaking the bond."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered ring with a CH2 group attached to one ring carbon by a double bond, outside the ring."
  },
  {
    "question_id": "ch08_q43_carbene_simmons_smith",
    "topic": "Carbene Additions",
    "difficulty_level": "Easy",
    "question_text": "Treatment of cyclohexene with diiodomethane ($CH_2I_2$) in the presence of a zinc-copper couple ($Zn(Cu)$) yields which of the following compounds?",
    "question_smiles": "C1=CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "bicyclo[4.1.0]heptane",
        "smiles": "C1CCC2CC2C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,2-diiodocyclohexane",
        "smiles": "IC1CCCCC1I",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-iodomethylcyclohexene",
        "smiles": "C1=C(CI)CCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "cycloheptene",
        "smiles": "C1=CCCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Adding a single carbon across a double bond turns an alkene into a cyclopropane. The reagent that does it is not a free carbene but a metal-bound equivalent, which is what makes the reaction controllable.",
      "approach": "Step 1: Form the reagent. Diiodomethane reacts with the zinc-copper couple to give an organozinc carbenoid, ICH2ZnI, which carries a CH2 unit ready to transfer.\nStep 2: Deliver that CH2 to the alkene in one concerted step, both new carbon-carbon bonds forming at the same time on the same face.\nStep 3: Count the ring. The new CH2 bridges two adjacent ring carbons, fusing a cyclopropane onto the cyclohexane - bicyclo[4.1.0]heptane.",
      "note": "Because the carbon is delivered by a metal rather than released as a free carbene, the reagent does not insert into C-H bonds or attack other functional groups. That selectivity is the whole reason for using zinc rather than generating CH2 directly.",
      "options": {
        "A": "Correct. The zinc carbenoid delivers a CH2 unit across the double bond in one step, fusing a three-membered ring onto the six-membered one.",
        "B": "A vicinal diiodide would come from adding I2 across the alkene. Here the iodines stay with the zinc.",
        "C": "This is an allylic substitution product, which would need a radical halogenation rather than carbenoid transfer, and it leaves the double bond in place.",
        "D": "Cycloheptene is a ring-expanded alkene with seven carbons in one ring. The new carbon bridges two existing carbons rather than being inserted into the ring."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-carbon ring with a single double bond between two adjacent carbons."
  },
  {
    "question_id": "ch08_q44_carbene_dichlorocarbene_cis",
    "topic": "Carbene Additions",
    "difficulty_level": "Medium",
    "question_text": "Reaction of (Z)-but-2-ene with chloroform ($CHCl_3$) in the presence of potassium tert-butoxide ($t-BuOK$) yields which of the following products?",
    "question_smiles": "C/C=C\\C",
    "options": [
      {
        "option_id": "A",
        "text": "cis-1,1-dichloro-2,3-dimethylcyclopropane",
        "smiles": "C[C@@H]1[C@H](C)C1(Cl)Cl",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "trans-1,1-dichloro-2,3-dimethylcyclopropane",
        "smiles": "C[C@@H]1[C@@H](C)C1(Cl)Cl",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,1-dichlorobut-2-ene",
        "smiles": "ClC(Cl)C=CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,3-dichlorobut-2-ene",
        "smiles": "CC(Cl)=C(Cl)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Dichlorocarbene is generated in situ and added in one step, so like every concerted addition it reports the geometry of the alkene straight into the product.",
      "approach": "Step 1: Make the carbene. Tert-butoxide removes the proton from chloroform, and the resulting anion loses chloride in an alpha-elimination to give dichlorocarbene.\nStep 2: Add it across the double bond. The carbene bonds to both alkene carbons at once, from a single face.\nStep 3: Read the ring. Because nothing rotates during the addition, the two methyl groups that started cis on the alkene finish cis on the cyclopropane, with the two chlorines on the third carbon.",
      "note": "Alpha-elimination removes two groups from the same carbon, which is what leaves that carbon with only six electrons. It is worth contrasting with the beta-elimination that makes alkenes, where the two groups leave from adjacent carbons.",
      "options": {
        "A": "Correct. The concerted addition preserves the cis relationship of the two methyl groups on the new three-membered ring.",
        "B": "The trans product comes from the E alkene. Reaching it from the Z isomer would require one end of the double bond to rotate during the addition.",
        "C": "This has the carbene inserted into a C-H bond rather than added across the double bond, and it leaves the alkene intact.",
        "D": "Two chlorines on the two former alkene carbons describes an addition of chlorine, not of a carbene, and it forms no ring."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "The cis isomer of but-2-ene, its two methyl groups sharing one side of the double bond."
  },
  {
    "question_id": "ch08_q45_carbene_dichlorocarbene_trans",
    "topic": "Carbene Additions",
    "difficulty_level": "Medium",
    "question_text": "Reaction of (E)-but-2-ene with chloroform and potassium tert-butoxide yields which of the following?",
    "question_smiles": "C/C=C/C",
    "options": [
      {
        "option_id": "A",
        "text": "cis-1,1-dichloro-2,3-dimethylcyclopropane",
        "smiles": "C[C@@H]1[C@H](C)C1(Cl)Cl",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "trans-1,1-dichloro-2,3-dimethylcyclopropane",
        "smiles": "C[C@@H]1[C@@H](C)C1(Cl)Cl",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "1,1-dichlorobut-2-ene",
        "smiles": "ClC(Cl)C=CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A 1:1 mixture of cis and trans isomers",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The companion experiment. Running the same carbene on the other geometric isomer is what turns a claim about a concerted mechanism into evidence for one.",
      "approach": "Step 1: Generate dichlorocarbene exactly as before and add it in one step.\nStep 2: Start from the E alkene, whose methyls are on opposite sides.\nStep 3: Follow them into the product. A single-step addition gives them no opportunity to move, so they finish trans on the cyclopropane ring.",
      "note": "Two geometries in, two single products out, from one reagent - that is the definition of a stereospecific reaction. A stepwise addition through a triplet carbene would scramble the two and give a mixture from either alkene.",
      "options": {
        "A": "The cis product is what the Z alkene gives. It cannot come from a trans-substituted double bond without rotation somewhere in the mechanism.",
        "B": "Correct. The single-step addition preserves the trans relationship of the two methyl groups on the cyclopropane.",
        "C": "This is a substitution product with the double bond untouched, not the cyclopropane an addition produces.",
        "D": "A mixture is what a stepwise, non-concerted addition would give. Getting one diastereomer from each alkene geometry is the evidence against that."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "The trans isomer of but-2-ene, its two methyl groups on opposite sides of the double bond."
  },
  {
    "question_id": "ch08_q46_carbene_seyferth",
    "topic": "Carbene Additions",
    "difficulty_level": "Hard",
    "question_text": "Dihalocarbenes can be prepared under neutral conditions without the use of strong bases by thermal decomposition of phenyl(trichloromethyl)mercury ($PhHgCCl_3$, Seyferth's reagent). When cyclohexene is heated with $PhHgCCl_3$, what is the major product?",
    "question_smiles": "C1=CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "7,7-dichlorobicyclo[4.1.0]heptane",
        "smiles": "ClC1(Cl)C2CCCCC21",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "bicyclo[4.1.0]heptane",
        "smiles": "C1CCC2CC2C1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,2-dichlorocyclohexane",
        "smiles": "ClC1CCCCC1Cl",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "7-chlorobicyclo[4.1.0]heptane",
        "smiles": "ClC1C2CCCCC21",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Generating dichlorocarbene with a strong base works, but the base is a problem for anything else in the molecule that it can deprotonate or attack. A reagent that releases the carbene thermally sidesteps that.",
      "approach": "Step 1: Heat the mercury reagent. It undergoes alpha-elimination on its own, releasing dichlorocarbene and phenylmercuric chloride, with no base involved.\nStep 2: Let the carbene add across the double bond in one concerted step, as it would from any source.\nStep 3: Name the product. The CCl2 unit bridges two adjacent ring carbons, giving 7,7-dichlorobicyclo[4.1.0]heptane.",
      "note": "McMurry covers dichlorocarbene from chloroform and base but not this reagent; the item is kept for ACS exam coverage. The carbene is the same species either way - the reagent choice is about what the rest of the molecule can survive.",
      "options": {
        "A": "Correct. Thermal alpha-elimination releases dichlorocarbene, which adds across the double bond to give the dichlorinated bicyclic product.",
        "B": "This is the product of adding CH2 rather than CCl2, which is Simmons-Smith chemistry with a quite different reagent.",
        "C": "Two chlorines on adjacent ring carbons is an addition of chlorine across the double bond, with no new carbon and no ring formed.",
        "D": "Only one chlorine on the new carbon would require a monochlorocarbene. Trichloromethylmercury delivers a CCl2 unit, keeping both chlorines."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unsubstituted six-membered ring containing one double bond."
  },
  {
    "question_id": "ch08_q47_carbene_diazoacetate",
    "topic": "Carbene Additions",
    "difficulty_level": "Hard",
    "question_text": "When cyclohexene is treated with ethyl diazoacetate ($N_2CHCO_2Et$) in the presence of a catalytic amount of rhodium(II) acetate dimer ($Rh_2(OAc)_4$), what class of reaction occurs and what is the major product?",
    "question_smiles": "C1=CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Carbene cycloaddition, yielding ethyl bicyclo[4.1.0]heptane-7-carboxylate.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Radical addition, yielding a diethyl succinate derivative.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Electrophilic addition, yielding a dihydroxylated cyclohexene.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "C-H insertion of a free nitrene.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carbene bearing an ester group is too reactive to handle free, so it is generated on a metal and never released. The metal both makes it and holds it, which is what keeps the reaction on the double bond.",
      "approach": "Step 1: Bind the diazo compound to rhodium and expel nitrogen gas. That leaves a rhodium carbenoid carrying the CHCO2Et fragment.\nStep 2: Recognise the reaction type. The carbenoid transfers its carbon to the alkene in a single step, both bonds forming at once - a cycloaddition that builds a three-membered ring.\nStep 3: Name the product. The new carbon bridges two adjacent ring carbons and carries the ester, giving ethyl bicyclo[4.1.0]heptane-7-carboxylate.",
      "note": "McMurry covers carbene addition but not metal carbenoids from diazo compounds; the item is kept for ACS exam coverage. The catalytic amount of rhodium is the tell - a free carbene would need no catalyst at all.",
      "options": {
        "A": "Correct. Loss of nitrogen gives a rhodium carbenoid, which adds its carbon across the double bond to build a cyclopropane bearing the ester.",
        "B": "A radical addition would need an initiator and would give chain products, not a three-membered ring, and no succinate skeleton is available here.",
        "C": "Dihydroxylation requires an oxidant that delivers oxygen. Neither the diazo compound nor the rhodium catalyst supplies one.",
        "D": "A nitrene carries nitrogen, and the nitrogen in the diazo compound leaves as N2 gas. What is transferred is a carbon fragment."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Cyclohexene, drawn as a six-membered ring with one unsaturated bond."
  },
  {
    "question_id": "ch08_q48_polymerization_cationic",
    "topic": "Polymerization",
    "difficulty_level": "Easy",
    "question_text": "Isobutylene (2-methylpropene) is polymerized industrially at low temperatures in the presence of a Lewis acid catalyst such as $BF_3$ and a trace of water. What type of polymerization mechanism is this?",
    "question_smiles": "CC(C)=C",
    "options": [
      {
        "option_id": "A",
        "text": "Cationic polymerization",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Anionic polymerization",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Free-radical polymerization",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Coordination polymerization (Ziegler-Natta)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Which chain-growth mechanism an alkene can be polymerised by is decided by what kind of reactive end the monomer can stabilise. The substituents on the double bond answer that before any reagent is chosen.",
      "approach": "Step 1: Identify the initiator. Boron trifluoride with a trace of water generates a strong protic acid, which protonates the alkene.\nStep 2: Look at the cation that results. Protonating the CH2 end leaves a tertiary carbocation, which the two methyl groups stabilise well.\nStep 3: Propagate. That cation attacks another molecule of monomer, generating the same tertiary cation one unit further along, and the chain grows cation by cation.",
      "note": "Only monomers whose double bond carries electron-donating groups polymerise this way. An alkene bearing an electron-withdrawing group would destabilise the growing cation, which is why such monomers need the opposite mechanism.",
      "options": {
        "A": "Correct. The Lewis acid and water generate a proton, and the tertiary carbocation the monomer forms is stable enough to carry the chain.",
        "B": "An anionic chain end would be destabilised by the two electron-donating methyl groups, and no anion is generated by a Lewis acid.",
        "C": "Radical polymerisation needs a radical initiator such as a peroxide. Boron trifluoride makes ions, not radicals.",
        "D": "Coordination polymerisation runs on a transition-metal centre. Boron trifluoride is a main-group Lewis acid and coordinates no alkene in that sense."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A carbon carrying two methyl groups and joined by a double bond to a terminal CH2 group."
  },
  {
    "question_id": "ch08_q49_polymerization_anionic",
    "topic": "Polymerization",
    "difficulty_level": "Medium",
    "question_text": "Acrylonitrile (prop-2-enenitrile) is polymerized using sodium amide ($NaNH_2$) as the initiator. What type of polymerization mechanism is this?",
    "question_smiles": "C=CC#N",
    "options": [
      {
        "option_id": "A",
        "text": "Anionic polymerization",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cationic polymerization",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Free-radical polymerization",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ring-opening polymerization",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The mirror image of the cationic case. Here the substituent on the double bond withdraws electron density, so the chain end that the monomer can support is negative rather than positive.",
      "approach": "Step 1: Identify the initiator. Sodium amide supplies the amide ion, a strong nucleophile and base, not a proton source.\nStep 2: Let it add to the double bond. It attacks the CH2 end, putting the negative charge on the carbon next to the nitrile.\nStep 3: Check that the charge is supported. The nitrile withdraws electron density and delocalises the carbanion onto nitrogen, so the chain end is stabilised and can attack the next monomer.",
      "note": "The two mechanisms sort monomers cleanly: electron-rich double bonds go cationic, electron-poor ones go anionic, and both grow one monomer at a time from a charged chain end.",
      "options": {
        "A": "Correct. Amide ion adds to the double bond and the nitrile stabilises the resulting carbanion, which then propagates the chain.",
        "B": "A cationic chain end next to a nitrile would be destabilised by that electron-withdrawing group, and sodium amide supplies no electrophile to start one.",
        "C": "Radical polymerisation of this monomer is possible with a peroxide initiator, but sodium amide is a base and nucleophile, not a radical source.",
        "D": "Ring-opening polymerisation requires a strained ring in the monomer. Acrylonitrile has none - it is an open-chain alkene."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A two-carbon double bond with a nitrile group attached to one end."
  },
  {
    "question_id": "ch08_q50_polymerization_ziegler_natta",
    "topic": "Polymerization",
    "difficulty_level": "Medium",
    "question_text": "The polymerization of propene using a Ziegler-Natta catalyst (such as a mixture of $TiCl_4$ and $Al(C_2H_5)_3$) yields isotactic polypropylene. What is the key structural feature of isotactic polypropylene?",
    "question_smiles": "CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "All methyl groups are randomly oriented along the polymer backbone.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "All methyl groups are positioned on the same side of the polymer backbone.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "The methyl groups alternate regularly from one side of the backbone to the other.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The polymer chain is highly branched due to chain-transfer reactions.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Every propene unit added to a growing chain creates a stereocentre. Tacticity is the name for how those stereocentres are arranged along the backbone, and it is what a coordination catalyst controls that a radical initiator does not.",
      "approach": "Step 1: Note that each monomer inserts with its methyl group ending up on a backbone carbon, which becomes a stereocentre.\nStep 2: Recall what the catalyst does. The titanium centre holds the chain end and coordinates the incoming monomer in a fixed orientation, so every insertion happens the same way round.\nStep 3: Read the result along the chain. Every methyl group ends up in the same relative orientation - all on one side of the extended backbone - which is what isotactic means.",
      "note": "Regularity is what makes the material useful: isotactic chains pack into a crystalline solid with a high melting point, whereas the atactic polymer made by radical initiation is a soft, tacky, largely amorphous material.",
      "options": {
        "A": "Random orientation is atactic polypropylene, which is what an uncontrolled radical polymerisation gives.",
        "B": "Correct. Every insertion occurs in the same orientation at the metal centre, so all the methyl groups end up on the same side of the backbone.",
        "C": "Strict alternation is syndiotactic polypropylene, a different regular arrangement made with different catalysts.",
        "D": "Branching from chain transfer is what happens in high-pressure radical polymerisation of ethylene; it describes connectivity rather than tacticity."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Propene: a three-carbon chain with the double bond at one end."
  },
  {
    "question_id": "ch08_q_dynamic_alkene_rxns",
    "topic": "Alkenes: Electrophilic Additions",
    "difficulty_level": "Medium",
    "question_text": "Each structure below is the major product of adding one reagent set to propene. Match each product to the reagents that produce it.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(O)C",
        "correctAnswer": "H2O, H2SO4 (catalytic)",
        "alt": "A three-carbon chain with a hydroxyl group on the middle carbon."
      },
      {
        "smiles": "CCCO",
        "correctAnswer": "1) BH3, THF  2) H2O2, NaOH",
        "alt": "A three-carbon chain with a hydroxyl group on an end carbon."
      },
      {
        "smiles": "CC(Br)CBr",
        "correctAnswer": "Br2, CH2Cl2",
        "alt": "A three-carbon chain carrying a bromine on the middle carbon and another on an end carbon."
      },
      {
        "smiles": "CC1CO1",
        "correctAnswer": "mCPBA, CH2Cl2",
        "alt": "A three-membered ring of two carbons and one oxygen, with a methyl group on one of the ring carbons."
      }
    ],
    "match_options": [
      "H2O, H2SO4 (catalytic)",
      "1) BH3, THF  2) H2O2, NaOH",
      "Br2, CH2Cl2",
      "mCPBA, CH2Cl2",
      "H2, Pd/C"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect product mapping",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Four reagent sets act on one alkene and give four different products. Working backwards from a product to its reagents is the skill a synthesis question actually needs, and it forces each rule to be stated rather than recognised.",
      "approach": "Step 1: Sort the products by what was added. Two hydroxyl-bearing products come from adding water, one product carries two bromines, and one carries an oxygen bridging both carbons.\nStep 2: Split the two alcohols by regiochemistry. Hydroxyl on the middle carbon is Markovnikov and comes from acid-catalysed hydration; hydroxyl on the end carbon is anti-Markovnikov and comes from hydroboration followed by oxidation.\nStep 3: Assign the remaining two. Bromine in dichloromethane adds across the double bond to give the vicinal dibromide, and a peroxyacid delivers a single oxygen to give the epoxide.",
      "note": "The unused reagent set, hydrogen over palladium, would give propane - a product with no functional group at all, and therefore nothing to match it against here.",
      "options": {
        "A": "Correct. Each product is traced back by asking what was added across the double bond and, where water was added, at which carbon it ended up.",
        "B": "At least one product is paired with the wrong reagents. The two alcohols are the pair to check first, since they differ only in which carbon the hydroxyl went to."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch08_q51_scheme_halogenation",
    "topic": "Alkenes: Halogenation",
    "difficulty_level": "Easy",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC=C"
      ],
      "reactant_alts": [
        "A three-carbon chain with a double bond between the first two carbons."
      ],
      "reagents": "Br2",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1,2-dibromopropane",
        "smiles": "CC(Br)CBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2,2-dibromopropane",
        "smiles": "CC(Br)(Br)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-bromopropan-2-ol",
        "smiles": "CC(O)CBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-bromopropane",
        "smiles": "CC(Br)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Bromine adds across a double bond as two separate atoms landing on two adjacent carbons. Reading a reaction scheme means asking what each reagent contributes and where each piece ends up.",
      "approach": "Step 1: Identify what is being added. Br2 supplies two bromine atoms and nothing else - no hydrogen and no oxygen.\nStep 2: Identify where they go. The alkene attacks bromine to give a bridged bromonium ion, and bromide opens it at the other carbon, so one bromine lands on each of the two former alkene carbons.\nStep 3: Note that the solvent is dichloromethane, which is not nucleophilic, so nothing competes with bromide and the vicinal dibromide is the only product.",
      "note": "Vicinal means on adjacent carbons, and it is the signature of an addition across a double bond. Two halogens on the same carbon would have to come from some other reaction entirely.",
      "options": {
        "A": "Correct. One bromine adds to each carbon of the double bond, giving the vicinal dibromide.",
        "B": "Both bromines on one carbon is a geminal dihalide. Addition across a double bond puts one atom on each carbon, not two on one.",
        "C": "A bromohydrin needs water to open the bromonium ion. Dichloromethane offers no nucleophile, so bromide does the job instead.",
        "D": "A single bromine and a hydrogen is what adding HBr would give. There is no hydrogen source in this reaction."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch08_q57_carbene_singlet_triplet",
    "topic": "Reaction Intermediates",
    "difficulty_level": "Hard",
    "question_text": "Carbenes ($:CR_2$) can exist in singlet or triplet ground states. Which of the following correctly describes the electronic configuration of a triplet carbene?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^2$-hybridized carbon with a lone pair in an $sp^2$ orbital and an empty $p$ orbital.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "$sp^2$-hybridized carbon with two unpaired electrons of parallel spins in different orbitals (one $sp^2$ and one $p$).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "$sp$-hybridized carbon with two lone pairs of electrons.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$sp^3$-hybridized carbon with two covalent bonds and two vacant orbitals.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carbene carbon has only six valence electrons, and two of them are non-bonding. Where those two sit, and whether their spins are paired, defines the two possible ground states and the very different chemistry that follows from each.",
      "approach": "Step 1: Count what is left. Two bonds use four electrons, so two non-bonding electrons remain on a carbon that is usually sp2 hybridised, with an sp2 orbital and a p orbital available.\nStep 2: Take the singlet case first. Both electrons pair in the sp2 orbital, leaving the p orbital empty - an electron-deficient, electrophilic carbon.\nStep 3: Take the triplet. One electron goes into each orbital with their spins parallel, which is what Hund's rule favours when the two orbitals are close in energy. The result is two unpaired electrons and a species that behaves like a diradical.",
      "note": "McMurry describes the electron-deficient, electrophilic carbene with a vacant p orbital, which is the singlet, and does not develop the triplet; the item is kept for ACS exam coverage. The distinction has a consequence worth knowing: singlet carbenes add to alkenes in one step and stereospecifically, triplets add stepwise and scramble the geometry.",
      "options": {
        "A": "This is the singlet carbene: both non-bonding electrons paired in one orbital, with an empty p orbital left over.",
        "B": "Correct. Two unpaired electrons of parallel spin in two different orbitals, one sp2 and one p, which is the triplet configuration.",
        "C": "An sp carbon with two lone pairs would need eight valence electrons on carbon and only two bonding partners, which no carbene has.",
        "D": "An sp3 carbon has four hybrid orbitals to fill; describing two of them as vacant leaves the electron count and the geometry both wrong."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch08_q95_hydration_nucleophile",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Medium",
    "question_text": "In the acid-catalyzed hydration of alkenes, which species acts as the nucleophile in the step that forms the carbon-oxygen bond?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "A water molecule (\\(H_2O\\))",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A hydronium ion (\\(H_3O^+\\))",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A bisulfate ion (\\(HSO_4^-\\))",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The carbocation intermediate",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "In an acid-catalysed reaction the acid is a catalyst, not a reagent, so it must be handed back at the end. That constraint decides which species is allowed to supply the atom that ends up in the product.",
      "approach": "Step 1: Follow the mechanism. The acid protonates the alkene, giving a carbocation and leaving the conjugate base behind.\nStep 2: Ask what supplies the oxygen. The product is an alcohol, so an oxygen-bearing species must bond to the cationic carbon, and the only oxygen source present in quantity is the solvent, water.\nStep 3: Complete the cycle. Water attacks the carbocation to give a protonated alcohol, which loses a proton to another water molecule - returning the catalyst and finishing with a neutral alcohol.",
      "note": "The intermediate oxonium ion is the reason the acid comes back. If water bonded to carbon and stopped there, the reaction would consume a proton per turnover and the acid would no longer be catalytic.",
      "options": {
        "A": "Correct. Water is the nucleophile: its lone pair attacks the carbocation, and the resulting oxonium ion is deprotonated to give the alcohol and regenerate the acid.",
        "B": "Hydronium is the proton source for the first step, which makes it the electrophile in this mechanism. Its oxygen already carries a positive charge and is a poor donor.",
        "C": "Bisulfate is a weak nucleophile, and on the occasions it does bond to the cation the product is an alkyl hydrogen sulfate, not the alcohol.",
        "D": "The carbocation is the electrophile here - the species being attacked. It is short of electrons and has none to donate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch08_q96_halogenation_stereochem",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Medium",
    "question_text": "Reaction of cyclohexene with bromine (\\(Br_2\\)) in a non-nucleophilic solvent like dichloromethane yields trans-1,2-dibromocyclohexane. Which intermediate explains this anti stereochemistry?",
    "question_smiles": "C1=CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "A cyclic bromonium ion intermediate",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A planar carbocation intermediate",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A free radical intermediate",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A carbanion intermediate",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Stereochemistry is evidence about intermediates. A reaction that gives only one diastereomer has ruled out any intermediate that would have allowed both, so the observed product constrains the mechanism.",
      "approach": "Step 1: Ask what an open carbocation would predict. It is planar, so bromide could attack either face and both the cis and the trans dibromide would appear.\nStep 2: Compare with the result. Only the trans product forms, which means one face of the intermediate is blocked.\nStep 3: Identify what blocks it. The first bromine bridges both carbons as a three-membered cyclic bromonium ion, shielding the face it sits on, so bromide must open the ring from the opposite side - giving anti addition and the trans dibromide.",
      "note": "The bromonium ion was proposed from stereochemical evidence alone, decades before such ions were observed directly in stable-ion solutions. It is a clean example of a mechanism deduced from what the products are not.",
      "options": {
        "A": "Correct. Bromine bridges the two carbons, shielding one face, so the incoming bromide can only attack from the other side and the two bromines end up anti.",
        "B": "A planar carbocation exposes both faces equally and would give a mixture of cis and trans dibromides. The exclusive trans product is exactly what rules it out.",
        "C": "Radical addition of bromine needs light or a radical initiator and shows no such stereochemical preference; this reaction runs in the dark in dichloromethane.",
        "D": "An alkene is electron-rich and attacks bromine, not the other way round. No carbanion is formed at any point in this mechanism."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered carbon ring containing one double bond."
  },
  {
    "question_id": "ch08_q97_halohydrin_regiochem",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product and its regiochemical orientation when 2-methylpropene is treated with bromine (\\(Br_2\\)) in water?",
    "question_smiles": "CC(C)=C",
    "options": [
      {
        "option_id": "A",
        "text": "1-bromo-2-methylpropan-2-ol (bromine at C1, hydroxyl at C2)",
        "smiles": "CC(C)(O)CBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-bromo-2-methylpropan-1-ol (bromine at C2, hydroxyl at C1)",
        "smiles": "CC(C)(Br)CO",
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
        "text": "2-methylpropan-2-ol",
        "smiles": "CC(C)(C)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A bridged bromonium ion on an unsymmetrical alkene is not symmetrical either. The two carbon-bromine bonds are unequal, and the regiochemistry of the opening follows from which of them is longer and weaker.",
      "approach": "Step 1: Form the bromonium ion across the double bond, and identify the two carbons: one carries two methyl groups, the other only hydrogens.\nStep 2: Recognise where the positive charge is concentrated. The more substituted carbon supports positive charge better, so its bond to bromine is stretched and it is the more electrophilic of the two.\nStep 3: Attack there with water, the nucleophile present in excess. The oxygen bonds to the more substituted carbon and bromine stays on the less substituted one, giving 1-bromo-2-methylpropan-2-ol.",
      "note": "This looks like Markovnikov orientation and it is, but the reason differs: no free carbocation ever forms. The bridged ion simply leans towards the structure the open cation would have had.",
      "options": {
        "A": "Correct. Water attacks the more substituted carbon of the bromonium ion, where positive charge is concentrated, leaving bromine on the terminal carbon.",
        "B": "This reverses the opening. Water would have to attack the carbon that supports positive charge least well, which is the slower path.",
        "C": "The dibromide is what forms when the reaction is run in an inert solvent. With water present in large excess, water outcompetes bromide for the bromonium ion.",
        "D": "This product contains no bromine at all. It would come from simple acid-catalysed hydration, with no bromine involved in the reaction."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A central carbon carrying two methyl groups and joined by a double bond to a terminal CH2 group."
  },
  {
    "question_id": "ch08_q98_evidence_against_carbocation",
    "topic": "Electrophilic Addition Mechanism",
    "difficulty_level": "Hard",
    "question_text": "Which of the following experimental observations provides the strongest evidence AGAINST a simple planar carbocation intermediate in the bromination of cyclopentene?",
    "question_smiles": "C1=CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "The reaction yields exclusively trans-1,2-dibromocyclopentane.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The reaction rate increases with increasing alkyl substitution on the double bond.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The reaction is carried out in dark conditions and does not require light.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The product obtained is a racemic mixture of enantiomers.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Evidence against a mechanism has to be an observation that mechanism forbids. Facts that both candidate mechanisms predict equally are consistent with either and settle nothing.",
      "approach": "Step 1: Write down what an open, planar carbocation predicts: bromide attacks either face at random, so both the cis and the trans dibromide should appear.\nStep 2: Compare each observation against that prediction. Only one of them contradicts it.\nStep 3: Note that the reaction gives the trans dibromide and nothing else. A planar intermediate cannot produce a single diastereomer, so this result excludes it - and points instead to a bridged bromonium ion.",
      "note": "Racemic product is the observation most often mistaken for evidence here. A planar cation gives a racemate and so does a bridged ion opened at either carbon, so that result cannot tell the two apart.",
      "options": {
        "A": "Correct. A planar carbocation would let bromide attack either face and give both diastereomers; getting only the trans product rules that intermediate out.",
        "B": "Faster reaction with more substituted alkenes is exactly what a carbocation mechanism predicts, since alkyl groups stabilise positive charge. This supports the carbocation picture rather than opposing it.",
        "C": "Working in the dark rules out a radical chain mechanism. It says nothing about whether the ionic intermediate is open or bridged.",
        "D": "Both mechanisms give a racemate: a planar cation is attacked equally from both faces, and a bridged ion is opened equally at either carbon. The observation does not discriminate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-membered carbon ring containing one double bond."
  }
];
