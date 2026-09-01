// OChemStudyBuddy - McMurry Chapter 11
// Author: A. Elangovan, PhD
var CH11_QUESTIONS = [
  {
    "question_id": "ch11_q1_sn2_kinetics_rate_law",
    "topic": "SN2 Mechanism: Kinetics",
    "difficulty_level": "Easy",
    "question_text": "An SN2 reaction between (R)-2-bromobutane and sodium cyanide is conducted in dimethyl sulfoxide (DMSO). If the concentration of (R)-2-bromobutane is doubled and the concentration of sodium cyanide is tripled, what is the effect on the initial rate of the reaction?",
    "question_smiles": "CC[C@H](Br)C",
    "options": [
      {
        "option_id": "A",
        "text": "The initial rate increases by a factor of 6.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The initial rate increases by a factor of 2.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The initial rate increases by a factor of 3.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The initial rate remains unchanged.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "SN2 is bimolecular in the literal sense: the substrate and the nucleophile are both in the one transition state, so the rate law carries both concentrations to the first power. The stereochemical label on the substrate is a distraction for a kinetics question, though it matters for the product.",
      "approach": "Step 1: Write the rate law for a concerted displacement: rate = k[2-bromobutane][CN-].\nStep 2: Double the first concentration and triple the second; the product of the two factors is 6.\nStep 3: Nothing else changes - DMSO is the same solvent and the temperature is fixed - so the initial rate rises sixfold.",
      "note": "Second-order overall does not mean second-order in either species. It is first order in each, which is why a kinetics experiment that varies one concentration at a time distinguishes SN2 from SN1: the SN1 rate ignores the nucleophile entirely.",
      "options": {
        "A": "Correct. Rate = k[RBr][CN-]; a factor of 2 from the halide and 3 from cyanide multiply to 6.",
        "B": "Doubling only the substrate would double the rate. That answer ignores the nucleophile's term, which is the SN1 rate law, not SN2.",
        "C": "A threefold increase counts cyanide and forgets the halide. Both concentrations appear in the SN2 rate law, so both changes register.",
        "D": "An unchanged rate would need a zero-order dependence on both species. No substitution mechanism behaves that way; even SN1 responds to the substrate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a bromine on the second carbon, drawn with a wedge to show one enantiomer.",
    "_why": "The drawn SMILES was the (S) enantiomer while the stem named (R); rdCIPLabeler confirms the flipped centre is R."
  },
  {
    "question_id": "ch11_q2_finkelstein_driving_force",
    "topic": "SN2 Mechanism: Equilibrium",
    "difficulty_level": "Medium",
    "question_text": "The Finkelstein reaction converts an alkyl chloride to an alkyl iodide using sodium iodide (NaI) in acetone. What is the primary thermodynamic driving force that shifts this reversible equilibrium to completion?",
    "question_smiles": "CCCCl",
    "options": [
      {
        "option_id": "A",
        "text": "The precipitation of sodium chloride (NaCl) as a solid byproduct, which is insoluble in acetone.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The superior nucleophilicity of the iodide ion relative to the chloride ion in all organic solvents.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The significantly higher bond dissociation energy of the carbon-iodine bond compared to the carbon-chlorine bond.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The rapid thermal decomposition of acetone which destabilizes the alkyl chloride starting material.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Halide exchange is reversible - chloride can displace iodide as well as the other way round - so the Finkelstein reaction needs something to pull it in one direction. The trick is a solubility difference between the two sodium salts in acetone.",
      "approach": "Step 1: Write the equilibrium: R-Cl + NaI <=> R-I + NaCl.\nStep 2: Sodium iodide dissolves in acetone; sodium chloride does not.\nStep 3: As chloride is displaced it is removed from solution as solid NaCl. Le Chatelier's principle then drives the exchange to completion even though iodide and chloride are comparable leaving groups on the way back.",
      "note": "The same reaction run in water would stall at equilibrium, because both salts dissolve. The solvent is chosen for the precipitation, not for the SN2 step itself, which acetone also serves well as a polar aprotic medium.",
      "options": {
        "A": "Correct. NaCl is insoluble in acetone and precipitates; removing a product pulls the reversible exchange forward.",
        "B": "Iodide is a better nucleophile than chloride in protic solvents, but that affects how fast the forward step runs, not where the equilibrium lies. A better nucleophile is also a good leaving group on the way back.",
        "C": "The C-I bond is the weakest carbon-halogen bond, not the strongest. Bond energies slightly disfavour the exchange, which is why a precipitation is needed to force it.",
        "D": "Acetone is stable under these conditions; it is the reaction solvent, not a reagent, and nothing decomposes."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-carbon chain with a chlorine on the end carbon."
  },
  {
    "question_id": "ch11_q3_solvent_ionizing_power",
    "topic": "SN2 Mechanism: Solvent Effects",
    "difficulty_level": "Hard",
    "question_text": "Which statement correctly describes the effect of changing the solvent from methanol (CH3OH) to dimethyl sulfoxide (DMSO) on the rate of the SN2 reaction between bromoethane and sodium azide?",
    "question_smiles": "CCBr",
    "options": [
      {
        "option_id": "A",
        "text": "The reaction rate increases dramatically because DMSO, a polar aprotic solvent, cannot form hydrogen bonds to the nucleophile, leaving the azide ion 'naked' and highly reactive.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The reaction rate decreases because methanol is more polar and stabilizes the partial charges of the transition state.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The reaction rate remains unchanged because the solvent only stabilizes the starting material and does not interact with the transition state.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The reaction rate decreases because DMSO coordinates to the bromoethane, sterically blocking the backside attack of azide.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A nucleophile's reactivity depends on how tightly the solvent holds it. Protic solvents hydrogen-bond to anions and stabilize them in the ground state; polar aprotic solvents such as DMSO solvate the cation and leave the anion nearly bare.",
      "approach": "Step 1: Methanol is protic. Its O-H hydrogen-bonds to azide, lowering the anion's energy and raising the barrier to reaction.\nStep 2: DMSO is polar but has no O-H or N-H. It surrounds Na+ well and leaves N3- unsolvated.\nStep 3: A less-stabilized nucleophile sits higher in energy, closer to the transition state, so the SN2 step is faster in DMSO - by orders of magnitude for small anions.",
      "note": "The effect is largest for small, hard anions like fluoride and azide, which hydrogen-bond strongly; iodide, which is barely solvated in either medium, gains far less. That difference is what reverses the halide nucleophilicity order between water and DMF.",
      "options": {
        "A": "Correct. DMSO cannot hydrogen-bond to azide; the bare anion is a much stronger nucleophile and the rate rises sharply.",
        "B": "Methanol does stabilize charge, but what it stabilizes most is the starting anion, raising the barrier rather than lowering it. Transition-state stabilization does not compensate.",
        "C": "The solvent interacts with both, but unevenly: it stabilizes the localized charge on the free anion more than the dispersed charge in the transition state. That imbalance is exactly why the rate changes.",
        "D": "DMSO coordinates cations through its oxygen, not neutral alkyl halides. Nothing about the sulfoxide blocks the carbon under attack."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Bromoethane: two carbons, with the bromine on one of them."
  },
  {
    "question_id": "ch11_q4_mesylation_stereochemistry",
    "topic": "SN2 Mechanism: Stereochemistry",
    "difficulty_level": "Medium",
    "question_text": "A student converts (R)-2-octanol to its corresponding methanesulfonate (mesylate) using methanesulfonyl chloride in pyridine, and then reacts the product with sodium iodide in acetone. What is the stereochemical configuration of the final product, 2-iodooctane?",
    "question_smiles": "CCCCCC[C@@H](C)O",
    "options": [
      {
        "option_id": "A",
        "text": "(S)-2-iodooctane, resulting from net inversion of configuration.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(R)-2-iodooctane, resulting from net retention of configuration.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A racemic mixture of (R)- and (S)-2-iodooctane, due to carbocation formation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A mixture of diastereomers.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Turning an alcohol into a sulfonate and then displacing the sulfonate is the standard way to substitute a hydroxyl with inversion. The two steps affect the stereocentre differently, and the question is really about which bond breaks in each.",
      "approach": "Step 1: Mesylation forms a new O-S bond: the alcohol oxygen attacks the sulfonyl chloride. The C-O bond is untouched, so the configuration is retained and the mesylate is still (R).\nStep 2: Iodide displaces mesylate by SN2, attacking from the side opposite the C-O bond. This step inverts the centre.\nStep 3: Iodine takes the place of oxygen at the top of the priority list, so the other three groups keep their ranking and the inverted centre is (S)-2-iodooctane.",
      "note": "Compare the route through HI, which would protonate the alcohol and, for a secondary substrate, risk a carbocation and partial racemization. The sulfonate route keeps the centre intact until the single SN2 step, which is why it is the method of choice for a clean inversion.",
      "options": {
        "A": "Correct. Retention in the mesylation, inversion in the substitution: one inversion overall, and (R) becomes (S).",
        "B": "Retention overall would require either two inversions or none. Only the mesylation step leaves the carbon alone; the iodide displacement inverts it.",
        "C": "A racemate would need a carbocation, which a secondary mesylate with a good nucleophile in acetone does not form. SN2 gives a single enantiomer.",
        "D": "There is only one stereocentre, so diastereomers cannot form. The product is one enantiomer, not a mixture of two."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An eight-carbon chain with a hydroxyl on the second carbon, drawn with a wedge to show a single enantiomer."
  },
  {
    "question_id": "ch11_q5_deuterium_labeling_sn2",
    "topic": "SN2 Mechanism: Stereochemistry",
    "difficulty_level": "Hard",
    "question_text": "Predict the major organic product formed when (S)-1-deuteriopropan-1-ol is treated with p-toluenesulfonyl chloride in pyridine, followed by reaction with sodium cyanide in DMSO.",
    "question_smiles": "CCC[C@H]([2H])O",
    "options": [
      {
        "option_id": "A",
        "text": "(R)-2-deuteriobutanenitrile",
        "smiles": "CCC[C@@H]([2H])C#N",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(S)-2-deuteriobutanenitrile",
        "smiles": "CCC[C@H]([2H])C#N",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Racemic 2-deuteriobutanenitrile",
        "smiles": "CCC([2H])C#N",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(R)-1-deuteriopropan-1-amine",
        "smiles": "CCC[C@@H]([2H])N",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A primary carbon bearing H, D and two other groups is a stereocentre, and it lets an SN2 reaction's inversion be observed on a substrate that would otherwise be achiral. The tosylation-then-displacement sequence is the same two-step logic as the mesylate route: activate without touching C-O, then invert.",
      "approach": "Step 1: Tosylation forms O-S and leaves the C-O bond alone, so the (S) tosylate keeps the configuration of the (S) alcohol.\nStep 2: Cyanide in DMSO attacks from behind the C-OTs bond; the centre inverts.\nStep 3: Rank the groups. In the alcohol: OH > CH2CH2CH3 > D > H. In the nitrile: CN > propyl > D > H. The top group swaps for another top group, the order is unchanged, so inversion of geometry is inversion of the label: (R)-2-deuteriobutanenitrile.",
      "note": "The product is named as a nitrile, so the numbering starts at the CN carbon and the deuterium sits on C2. The label check in Step 3 is not optional - had cyanide ranked below propyl, an inverted geometry could have kept the letter S.",
      "options": {
        "A": "Correct. Retention on tosylation, inversion on cyanide displacement, and a priority order that is preserved, so (S) becomes (R).",
        "B": "The (S) nitrile would mean no net change in geometry. The tosylate step retains, but the SN2 step does not, so one inversion is unavoidable.",
        "C": "Racemic product would need a carbocation. A primary tosylate with a strong nucleophile in DMSO reacts by SN2 and gives a single enantiomer.",
        "D": "An amine would come from a nitrogen nucleophile. Cyanide attacks through carbon and gives a nitrile; the nitrogen stays in the C≡N group."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-carbon chain ending in a carbon that carries a hydroxyl, a deuterium and a hydrogen, drawn with a wedge."
  },
  {
    "question_id": "ch11_q6_secondary_halide_inversion",
    "topic": "SN2 Mechanism: Stereochemistry",
    "difficulty_level": "Medium",
    "question_text": "What is the systematic IUPAC name and configuration of the product obtained when (S)-3-chlorohexane is reacted with sodium acetate in DMF?",
    "question_smiles": "CCC[C@@H](Cl)CC",
    "options": [
      {
        "option_id": "A",
        "text": "(R)-hexan-3-yl acetate",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(S)-hexan-3-yl acetate",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Racemic hexan-3-yl acetate",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(E)-hex-3-ene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Acetate is a moderate nucleophile and a weak base, and DMF strips it of hydrogen bonding, so a secondary chloride substitutes by SN2 with little elimination. The product is an ester, and the question is what the backside attack does to the stereocentre.",
      "approach": "Step 1: Conditions - secondary substrate, good nucleophile, polar aprotic solvent - point to SN2.\nStep 2: Acetate attacks anti to the C-Cl bond; the centre inverts.\nStep 3: Priorities before: Cl > propyl > ethyl > H. After: OAc > propyl > ethyl > H. Same order, so the inverted centre carries the opposite label: (R)-hexan-3-yl acetate.",
      "note": "Acetate's low basicity (acetic acid pKa about 4.8) is what keeps E2 out of the picture on a secondary halide. Swap in ethoxide and the same substrate gives mainly hexenes.",
      "options": {
        "A": "Correct. SN2 inversion with an unchanged priority order turns (S) into (R), and acetate delivers the ester.",
        "B": "(S) product would mean retention, which SN2 never gives on the carbon that is attacked. Retention appears only when the stereocentre is not the reacting carbon.",
        "C": "A racemate needs a free carbocation. A secondary chloride in DMF with a good nucleophile does not ionize; the displacement is concerted.",
        "D": "(E)-Hex-3-ene is the E2 product a strong base would give. Acetate is too weak a base to remove a beta-hydrogen at a useful rate, so substitution dominates."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-carbon chain with a chlorine on the third carbon, drawn with a wedge to show a single enantiomer.",
    "_why": "Option D was '(R)-3-chlorohexane', the enantiomer of the starting material, which no path forms. Replaced by the E2 alkene a strong base would give."
  },
  {
    "question_id": "ch11_q7_neighboring_group_participation",
    "topic": "SN2 Mechanism: Stereochemistry",
    "difficulty_level": "Hard",
    "question_text": "When (S)-2-bromopropanoic acid is treated with a very dilute solution of sodium hydroxide, (S)-2-hydroxypropanoic acid (lactic acid) is formed with complete retention of configuration. What accounts for this stereochemical outcome?",
    "question_smiles": "C[C@H](Br)C(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "Neighboring group participation: the carboxylate group acts as an internal nucleophile, displacing bromide with inversion to form a cyclic lactone intermediate, which is then opened by hydroxide with a second inversion.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The reaction proceeds via a front-side nucleophilic attack of hydroxide due to the electrostatic attraction between the carboxylate anion and hydroxide.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The reaction proceeds via a stable carbocation intermediate that is sterically shielded on the back side.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The reaction is an E2 elimination followed by Markovnikov addition of water.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Retention of configuration in a substitution is a red flag: a single SN2 step inverts, and an SN1 step racemizes. When a stereocentre comes through unchanged, look for two inversions in a row, which means a nucleophile inside the molecule got there first.",
      "approach": "Step 1: Dilute base deprotonates the acid; the carboxylate is now a nucleophile sitting on the carbon next to the C-Br bond.\nStep 2: The carboxylate oxygen displaces bromide from behind, forming a strained three-membered alpha-lactone. First inversion.\nStep 3: Hydroxide (or water) opens the lactone at the same carbon, again from behind. Second inversion. Two inversions restore the original arrangement, and since OH ranks where Br ranked, the label stays (S).",
      "note": "The concentration is the tell. In concentrated hydroxide the external nucleophile wins the race and the product is the inverted (R)-acid; only when hydroxide is scarce does the internal carboxylate get there first. Same substrate, opposite stereochemical result, decided by conditions.",
      "options": {
        "A": "Correct. Carboxylate closes an alpha-lactone with inversion, hydroxide opens it with a second inversion, and two inversions equal retention.",
        "B": "Front-side attack does not occur in SN2 reactions; the nucleophile always approaches anti to the leaving group. Attraction between a carboxylate and a hydroxide, both anions, would in any case be repulsion.",
        "C": "A carbocation next to a carboxyl group is destabilized, not stabilized, and if one formed the product would be racemic rather than a single enantiomer.",
        "D": "E2 to propenoic acid is conceivable with a strong base, but adding water back would give a racemic alcohol, not a single enantiomer carrying the original label."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A carboxyl group beside a carbon that carries a bromine, a methyl and a hydrogen, drawn with a wedge."
  },
  {
    "question_id": "ch11_q8_leaving_group_halides",
    "topic": "SN2 Mechanism: Leaving Groups",
    "difficulty_level": "Easy",
    "question_text": "Arrange the following cyclohexyl derivatives in order of increasing reactivity toward SN2 substitution with sodium azide in DMF (slowest to fastest):",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "fluorocyclohexane < chlorocyclohexane < bromocyclohexane < iodocyclohexane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "iodocyclohexane < bromocyclohexane < chlorocyclohexane < fluorocyclohexane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "fluorocyclohexane < iodocyclohexane < bromocyclohexane < chlorocyclohexane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "chlorocyclohexane < bromocyclohexane < iodocyclohexane < fluorocyclohexane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Leaving-group ability tracks the stability of the departing anion, which is the same thing as its weakness as a base. Across the halides that is set by the strength of the parent acid: the stronger H-X, the weaker X- as a base and the better it leaves.",
      "approach": "Step 1: Order the acids: HF is weak (pKa 3.2), HCl, HBr and HI are progressively stronger (pKa about -7, -9, -10).\nStep 2: Invert for basicity: F- is the strongest base, I- the weakest.\nStep 3: The weakest base leaves most readily, so SN2 rates rise from the fluoride to the iodide. Bond strength points the same way - C-F is the strongest and C-I the weakest carbon-halogen bond.",
      "note": "Fluoride is such a poor leaving group that alkyl fluorides are effectively inert to SN2 under ordinary conditions, and hydroxide and alkoxide - stronger bases still - never leave at all. That is why alcohols and ethers need activation before they substitute.",
      "options": {
        "A": "Correct. Leaving ability rises as basicity falls: F- < Cl- < Br- < I-, so the iodide reacts fastest.",
        "B": "This order ranks the halides by basicity, which is the opposite of leaving ability. The most basic anion, fluoride, is the worst leaving group, not the best.",
        "C": "Chloride does not outrank iodide. Chloride is a stronger base than either bromide or iodide and leaves less readily than both.",
        "D": "Fluoride cannot be the best leaving group; it is the strongest base of the four and C-F is the strongest bond. It belongs at the slow end."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "Drew an unsubstituted cyclohexane beside a ranking of four halocyclohexanes - decorative (Ch 7 rule). Dropped."
  },
  {
    "question_id": "ch11_q9_leaving_group_sulfonates",
    "topic": "SN2 Mechanism: Leaving Groups",
    "difficulty_level": "Medium",
    "question_text": "Which of the following sulfonate esters is the most reactive leaving group in an SN2 reaction, and what explains its reactivity?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Trifluoromethanesulfonate (triflate), because the highly electronegative fluorine atoms inductively stabilize the negative charge on the sulfonate oxygen.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "p-Toluenesulfonate (tosylate), because the aromatic ring provides steric stabilization.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Methanesulfonate (mesylate), because it is the smallest group and experiences the least steric hindrance.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzenesulfonate, because the benzene ring can participate in direct resonance with the leaving group oxygen.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sulfonate esters are the leaving groups that make alcohols usable in substitution. All of them are good because a sulfonate anion spreads its charge over three oxygens; how good depends on what else is attached to sulfur.",
      "approach": "Step 1: Compare the anions: mesylate CH3SO3-, tosylate p-CH3C6H4SO3-, benzenesulfonate C6H5SO3-, triflate CF3SO3-.\nStep 2: A trifluoromethyl group pulls electron density inductively through sulfur and stabilizes the negative charge on oxygen.\nStep 3: Triflic acid is one of the strongest known acids (pKa about -14), so triflate is the weakest base and the best leaving group by a wide margin - tosylate and mesylate are similar to each other and far behind.",
      "note": "For everyday synthesis tosylate and mesylate are the workhorses because the parent chlorides are cheap and the esters are stable to handle. Triflates are reserved for substrates that will not react otherwise, including aryl and vinyl positions that ordinary sulfonates cannot activate.",
      "options": {
        "A": "Correct. The CF3 group's inductive pull stabilizes the triflate anion; the weaker the base, the better the leaving group.",
        "B": "The aryl ring in tosylate does not stabilize the charge by any steric effect, and sterics do not decide leaving ability. Tosylate is good, but not the best of the four.",
        "C": "Mesylate's small size does not matter; the anion's stability does. Its methyl group is mildly electron-donating, which if anything makes it slightly worse than a fluorinated analogue.",
        "D": "The benzene ring is attached to sulfur, not to the oxygens that carry the charge, so there is no direct resonance with them. Benzenesulfonate behaves much like tosylate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "Drew ethanol beside a question about four sulfonate anions - decorative. Dropped."
  },
  {
    "question_id": "ch11_q10_acid_catalyzed_substitution",
    "topic": "SN2 Mechanism: Leaving Groups",
    "difficulty_level": "Easy",
    "question_text": "Alcohols do not undergo direct SN2 substitution when treated with a halide salt like sodium bromide alone. However, substitution occurs readily upon the addition of a strong acid like HBr. What is the role of the acid in this reaction?",
    "question_smiles": "CCCO",
    "options": [
      {
        "option_id": "A",
        "text": "The acid protonates the hydroxyl group, converting a poor leaving group (-OH) into an excellent leaving group (H2O).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The acid acts as a dehydrating agent that removes water from the reaction, pushing the equilibrium forward.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The acid protonates the halide ion, making it a stronger, more electrophilic nucleophile.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The acid reacts with the carbon atom to form a carbocation intermediate which is then attacked by bromide.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hydroxide is far too strong a base to be a leaving group, so bromide does nothing to an alcohol on its own. The acid changes the leaving group rather than the nucleophile: once the oxygen is protonated, what departs is water.",
      "approach": "Step 1: HBr protonates the hydroxyl oxygen to give the alkyloxonium ion R-OH2+.\nStep 2: Water is a weak base and an excellent leaving group.\nStep 3: On a primary alcohol such as the propan-1-ol shown, bromide attacks the carbon from behind and displaces water in an SN2 step, giving 1-bromopropane.",
      "note": "The mechanism depends on the substrate. Primary alcohols go by SN2 on the oxonium ion; tertiary ones lose water first and react through a carbocation, which is why option D is right for tert-butyl alcohol and wrong for the primary case drawn here.",
      "options": {
        "A": "Correct. Protonation converts the hydroxyl into water, a leaving group bromide can displace.",
        "B": "Removing water would shift an equilibrium, but the problem is that no reaction starts at all without activation. The acid's role is on the substrate, not on the products.",
        "C": "Protonating bromide gives HBr, which is the acid itself; it makes the halide a worse nucleophile, not a better one. The acid acts on the alcohol oxygen.",
        "D": "A carbocation route is real for tertiary alcohols, but a primary carbocation is too unstable to form. Even so, the first step in either case is protonation of the hydroxyl."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-carbon chain with a hydroxyl group on the end carbon."
  },
  {
    "question_id": "ch11_q12_nucleophilicity_s_vs_o",
    "topic": "SN2 Mechanism: Nucleophiles",
    "difficulty_level": "Medium",
    "question_text": "Which of the following nucleophiles exhibits the highest reaction rate in an SN2 reaction with bromoethane in methanol, and what is the explanation?",
    "question_smiles": "CCBr",
    "options": [
      {
        "option_id": "A",
        "text": "HS⁻, because sulfur is larger and more polarizable than oxygen, and is less tightly solvated by the protic solvent methanol.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "HO⁻, because oxygen is more electronegative and has a higher concentration of negative charge.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "F⁻, because it is the smallest anion and can coordinate closest to the carbon atom.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cl⁻, because chloride has a lower pKa than fluoride, making it more stable.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "In a protic solvent, nucleophilicity runs down a column of the periodic table in the opposite direction from basicity. The larger, more polarizable atom is less tightly solvated and its electron cloud reaches the carbon sooner, so sulfur nucleophiles outrun oxygen ones in methanol.",
      "approach": "Step 1: Note the solvent. Methanol hydrogen-bonds to anions, most strongly to small, charge-dense ones.\nStep 2: HO- and F- are small and heavily solvated; breaking that shell costs energy. HS- is larger, its charge more diffuse, its solvation weaker.\nStep 3: Sulfur's valence electrons are also more polarizable, so bonding to carbon starts at a longer distance. Both effects favour HS-, which is the fastest of the four despite being the weaker base.",
      "note": "The same reasoning ranks iodide above fluoride in water and thiolates above alkoxides generally. Move to DMSO and the solvation term drops out; the halide order then reverses, although sulfur still tends to beat oxygen on polarizability alone.",
      "options": {
        "A": "Correct. Sulfur is larger and more polarizable than oxygen and is solvated less in methanol, so HS- is the strongest nucleophile of the set.",
        "B": "Hydroxide is the stronger base, but basicity and nucleophilicity part company in a protic solvent. Its concentrated charge is what methanol solvates most tightly.",
        "C": "Fluoride's small size is a liability here, not an asset: the tightest hydrogen-bonding shell of any anion must be shed before it can attack.",
        "D": "Chloride is a weak base, which makes it a good leaving group; that is a different property from nucleophilicity, and in methanol chloride is a middling nucleophile at best."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A two-carbon chain with a bromine on the end carbon.",
    "_why": "Option structures drew the four substitution products beside a comparison of nucleophiles - not what the question is about. Dropped; the substrate stays."
  },
  {
    "question_id": "ch11_q13_nucleophile_steric_hindrance",
    "topic": "SN2 Mechanism: Nucleophiles",
    "difficulty_level": "Medium",
    "question_text": "Which statement correctly describes the difference in reactivity between sodium ethoxide (NaOEt) and potassium tert-butoxide (KOtBu) in their reactions with 1-bromobutane?",
    "question_smiles": "CCCCBr",
    "options": [
      {
        "option_id": "A",
        "text": "Ethoxide is a much faster nucleophile for SN2 substitution because it is less sterically hindered, whereas the bulky tert-butoxide primarily acts as a base to promote E2 elimination.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "tert-Butoxide is a faster nucleophile because it is a stronger base and has more electron-donating methyl groups.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both react at identical rates because they are both oxygen-based anions.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethoxide reacts slower because the sodium cation coordinates more strongly to the ethyl group than the potassium cation does to the tert-butyl group.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Basicity is an equilibrium property and nucleophilicity a rate; a bulky base can be strong at the first and poor at the second. tert-Butoxide is the standard example: a stronger base than ethoxide, and a far worse nucleophile at carbon.",
      "approach": "Step 1: Compare the conjugate acids: tert-butanol pKa about 18, ethanol about 16, so tert-butoxide is the stronger base.\nStep 2: SN2 needs the oxygen to reach the carbon behind the leaving group. Three methyls on the alkoxide carbon block that approach for tert-butoxide; ethoxide slips in easily.\nStep 3: Removing a beta-hydrogen on the periphery of the molecule is not hindered the same way, so tert-butoxide takes that route and 1-bromobutane gives mostly but-1-ene, while ethoxide gives mostly butyl ethyl ether.",
      "note": "This is the reason bulky bases are chosen on purpose when the alkene is wanted from a primary halide. A primary halide is the substrate that most favours substitution, and a hindered base is the lever that overrides it.",
      "options": {
        "A": "Correct. Ethoxide is unhindered and substitutes; tert-butoxide is stronger as a base but too bulky to reach the carbon, so it eliminates.",
        "B": "The extra methyls do make tert-butoxide a stronger base, but they sit exactly where the nucleophile needs to be in an SN2 transition state. Strength and speed are separate properties.",
        "C": "Both are oxygen anions, but the carbon they must attack is shielded from one and not the other. Identical rates would require identical access.",
        "D": "Counter-ion effects exist but are minor compared with the steric difference, and both salts are largely dissociated in a polar solvent. The cation is not the explanation."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a bromine on the end carbon.",
    "_why": "Options A, C and D all drew butyl ethyl ether - three identical pictures. Option structures dropped; the substrate the stem names is now drawn instead."
  },
  {
    "question_id": "ch11_q14_ambident_nitrite",
    "topic": "SN2 Mechanism: Nucleophiles",
    "difficulty_level": "Hard",
    "question_text": "When 1-iodobutane is treated with sodium nitrite (NaNO2) in DMF, two structural isomers are obtained: 1-nitrobutane (major product, C-N bond) and butyl nitrite (minor product, C-O bond). What is the explanation for this outcome?",
    "question_smiles": "CCCCI",
    "options": [
      {
        "option_id": "A",
        "text": "Nitrite is an ambident nucleophile; the less electronegative nitrogen atom is more polarizable and attacks the electrophilic carbon preferentially in polar aprotic DMF.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The reaction proceeds through a carbocation intermediate that is preferentially trapped by the nitrogen atom.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Butyl nitrite is the thermodynamic product and isomerizes to 1-nitrobutane under the reaction conditions.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "DMF coordinates to the oxygen atoms of nitrite, blocking them and forcing nitrogen to attack.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Nitrite carries lone pairs on nitrogen and on both oxygens, so it can bond to carbon through either atom. Which end wins is a question of which is the better nucleophile toward a soft sp3 carbon, not of which is more negative.",
      "approach": "Step 1: Recognize nitrite as ambident: N-attack gives a nitroalkane, O-attack gives an alkyl nitrite ester.\nStep 2: Nitrogen is less electronegative and more polarizable than oxygen; its lone pair is higher in energy and more available for bonding at a distance.\nStep 3: In DMF the anion is free of hydrogen bonding and the halide carbon is a soft electrophile, so the softer, more polarizable nitrogen attacks faster and 1-nitrobutane is the major product.",
      "note": "The counter-ion can swing the ratio. Silver nitrite, whose cation coordinates the nitrogen end, pushes reaction toward oxygen on secondary substrates, and cyanide shows the same ambident behaviour: alkali cyanides give nitriles, silver cyanide gives isonitriles.",
      "options": {
        "A": "Correct. The polarizable nitrogen end of nitrite is the stronger nucleophile toward a soft alkyl carbon, so the C-N product dominates.",
        "B": "A primary iodide in DMF reacts by SN2, not through a carbocation. A cation would in any case be trapped by the harder oxygen end, the reverse of what is seen.",
        "C": "Alkyl nitrites do not rearrange to nitroalkanes under these conditions; the two products form in parallel and the ratio is kinetic.",
        "D": "DMF solvates cations, not anions. Nothing in the solvent blocks the oxygen atoms; the preference comes from the nucleophile itself."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with an iodine on the end carbon."
  },
  {
    "question_id": "ch11_q15_halide_nucleophilicity_solvent",
    "topic": "SN2 Mechanism: Nucleophiles",
    "difficulty_level": "Medium",
    "question_text": "How does the nucleophilicity of halide ions (F-, Cl-, Br-, I-) change when switching from a polar protic solvent (like water) to a polar aprotic solvent (like acetonitrile)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "In water, the order is I⁻ > Br⁻ > Cl⁻ > F⁻; in acetonitrile, the order reverses to F⁻ > Cl⁻ > Br⁻ > I⁻.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "In water, the order is F⁻ > Cl⁻ > Br⁻ > I⁻; in acetonitrile, the order reverses to I⁻ > Br⁻ > Cl⁻ > F⁻.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The nucleophilicity order is I⁻ > Br⁻ > Cl⁻ > F⁻ in both solvents.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The nucleophilicity order is F⁻ > Cl⁻ > Br⁻ > I⁻ in both solvents.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Nucleophilicity is not a fixed property of an ion; it is a property of the ion in its solvent. The halides are the cleanest illustration because their order reverses completely when hydrogen bonding is switched off.",
      "approach": "Step 1: In water, small fluoride is wrapped in a tight hydrogen-bonded shell and large iodide barely at all. Shedding the shell costs fluoride the most, so I- > Br- > Cl- > F-.\nStep 2: In acetonitrile there is no hydrogen bonding. Each anion is nearly bare.\nStep 3: Bare, the ranking follows basicity and charge density: fluoride is the most reactive and iodide the least, F- > Cl- > Br- > I-.",
      "note": "Iodide's high rate in water is why it is used catalytically in the Finkelstein sense: it displaces a chloride quickly and is then displaced itself. Fluoride's reactivity in aprotic media is why fluoride sources for SN2 reactions are supplied as tetraalkylammonium salts in DMSO or acetonitrile.",
      "options": {
        "A": "Correct. Solvation dominates in water and gives I- > F-; remove hydrogen bonding and the intrinsic order F- > I- appears.",
        "B": "This has the two orders swapped. Water is the solvent that most punishes fluoride, so fluoride cannot lead there.",
        "C": "I- > Br- > Cl- > F- holds only where hydrogen bonding solvates fluoride heavily. In acetonitrile that penalty disappears and the order inverts.",
        "D": "F- > Cl- > Br- > I- is the aprotic order. In water the tightly solvated fluoride drops to the bottom."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "Drew 1-bromobutane beside a question that names no substrate - decorative. Dropped."
  },
  {
    "question_id": "ch11_q16_substrate_alpha_branching",
    "topic": "SN2 Mechanism: Substrate Effects",
    "difficulty_level": "Easy",
    "question_text": "Rank the following alkyl bromides in order of decreasing rate of reaction with sodium iodide in acetone via the SN2 pathway (fastest to slowest):",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "bromomethane > bromoethane > 2-bromopropane > 2-bromo-2-methylpropane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-bromo-2-methylpropane > 2-bromopropane > bromoethane > bromomethane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "bromomethane > 2-bromopropane > bromoethane > 2-bromo-2-methylpropane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "bromoethane > bromomethane > 2-bromopropane > 2-bromo-2-methylpropane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "SN2 rates fall steeply with substitution at the carbon under attack because the nucleophile must approach through the gap behind the leaving group. Each alkyl group narrows that gap and raises the energy of the crowded, five-coordinate transition state.",
      "approach": "Step 1: Count alkyl groups on the alpha-carbon: bromomethane 0, bromoethane 1, 2-bromopropane 2, 2-bromo-2-methylpropane 3.\nStep 2: Relative rates with iodide in acetone run roughly 30 : 1 : 0.03 : effectively zero.\nStep 3: Reactivity therefore decreases methyl > primary > secondary > tertiary, with the tertiary halide reacting by SN1 if it reacts at all.",
      "note": "The trend is steric, not electronic. A tertiary carbon is not less electrophilic; it is simply unreachable from behind, which is why the same substrate that is inert to SN2 is the most reactive of the set toward SN1.",
      "options": {
        "A": "Correct. Fewer alkyl groups on the reacting carbon means an open backside and a faster SN2 step: methyl > 1° > 2° > 3°.",
        "B": "This is the SN1 order, in which alkyl groups stabilize the cation. For SN2 those same groups are obstacles.",
        "C": "2-Bromopropane is secondary and bromoethane primary; the secondary halide is about thirty times slower, not faster.",
        "D": "Bromoethane's single alkyl group already slows the reaction relative to bromomethane, which has none. Methyl is the fastest SN2 substrate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "Drew bromomethane, one of the four compounds ranked - the Ch 10 q5 defect. Dropped."
  },
  {
    "question_id": "ch11_q17_substrate_beta_branching",
    "topic": "SN2 Mechanism: Substrate Effects",
    "difficulty_level": "Medium",
    "question_text": "Neopentyl bromide (1-bromo-2,2-dimethylpropane) is a primary alkyl halide, yet it reacts with sodium iodide in acetone at a rate that is extremely slow—slower even than the secondary halide 2-bromopropane. What is the explanation for this low reactivity?",
    "question_smiles": "CC(C)(C)CBr",
    "options": [
      {
        "option_id": "A",
        "text": "The three methyl groups on the beta-carbon create severe steric hindrance that physically blocks the backside approach of the nucleophile.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The neopentyl carbocation is highly unstable, preventing the reaction from taking place.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The carbon-bromine bond in neopentyl bromide is strengthened by hyperconjugation from the adjacent methyl groups.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The molecule undergoes rapid E2 elimination instead of substitution.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Branching one carbon away from the reacting centre hinders SN2 almost as much as branching at the centre itself. Neopentyl bromide is primary by the usual count and yet behaves as if it were tertiary, and it is the standard example of the beta-effect.",
      "approach": "Step 1: The carbon bearing bromine is CH2 - primary - so on paper the substrate should be open to attack.\nStep 2: The next carbon carries three methyls. Whatever rotation the molecule adopts, at least one methyl sits across the line of approach behind the C-Br bond.\nStep 3: The transition state cannot form without severe crowding, so the rate is thousands of times below that of 1-bromobutane and below even 2-bromopropane.",
      "note": "Neopentyl systems are also a trap for SN1: the primary cation is too unstable to form, and when forcing conditions are used the molecule rearranges by a methyl shift to the tertiary cation instead. The substrate does not want either simple mechanism.",
      "options": {
        "A": "Correct. The quaternary beta-carbon's methyl groups block the backside approach, so the primary centre reacts far more slowly than a normal secondary one.",
        "B": "A primary neopentyl cation is indeed unstable, but SN2 does not go through a cation. The question is about a bimolecular displacement that is slow for steric reasons.",
        "C": "Hyperconjugation from the adjacent quaternary carbon is minimal, and C-Br bond strength does not vary enough across alkyl bromides to explain a rate difference of this size.",
        "D": "There is no beta-hydrogen: the carbon next to CH2Br carries three methyls and no H. E2 cannot happen, which is why the substrate simply sits there."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A carbon bearing three methyl groups and a CH2Br group."
  },
  {
    "question_id": "ch11_q18_allylic_acceleration_sn2",
    "topic": "SN2 Mechanism: Substrate Effects",
    "difficulty_level": "Hard",
    "question_text": "Allylic halides, such as 3-chloroprop-1-ene, react in SN2 substitutions (e.g., with NaI in acetone) significantly faster than primary aliphatic halides like 1-chloropropane. What is the molecular basis for this rate enhancement?",
    "question_smiles": "C=CCCl",
    "options": [
      {
        "option_id": "A",
        "text": "The transition state of the allylic SN2 reaction is stabilized by conjugation of the reacting carbon's developing p-orbital with the adjacent double bond's pi-system.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The double bond acts as an internal nucleophile that coordinates to the sodium cation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Allylic C-Cl bonds are weaker because the carbon is sp2-hybridized, making the bond easier to break.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Allylic halides undergo a rapid rearrangement to form a tertiary halide prior to substitution.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An SN2 transition state has a partly formed and partly broken bond on either side of a carbon that is briefly trigonal, with a p-type orbital along the reaction axis. Anything that can overlap with that orbital lowers the barrier, and an adjacent pi bond does.",
      "approach": "Step 1: In the transition state the reacting carbon is approximately sp2, its p orbital shared between the incoming nucleophile and the departing chloride.\nStep 2: In 3-chloroprop-1-ene that orbital is parallel to the pi system of the neighbouring double bond.\nStep 3: Overlap delocalizes the transition state's partial charges over three carbons, lowers the activation energy, and makes allyl chloride react tens of times faster than 1-chloropropane. Benzyl halides gain the same way.",
      "note": "The same pi system stabilizes an allylic cation, so allylic halides are fast by both SN1 and SN2. Vinylic halides, by contrast, are slow by both: the halogen is on the sp2 carbon itself and the pi bond blocks the backside rather than assisting it.",
      "options": {
        "A": "Correct. The p orbital that develops on the reacting carbon overlaps with the neighbouring pi bond and delocalizes the transition state.",
        "B": "Alkene pi electrons are poor ligands for sodium and the cation is not part of the rate-determining step. Coordination is not the effect.",
        "C": "The carbon bearing chlorine in an allylic halide is sp3, not sp2. Its bond strength is similar to that in a saturated halide; the acceleration is in the transition state.",
        "D": "Allyl chloride does not rearrange to a tertiary halide - there is no tertiary carbon in a three-carbon chain. Rearrangement is a carbocation phenomenon, not an SN2 one."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-carbon chain with a double bond at one end and a chlorine at the other."
  },
  {
    "question_id": "ch11_q20_alpha_halocarbonyl_activation",
    "topic": "SN2 Mechanism: Substrate Effects",
    "difficulty_level": "Hard",
    "question_text": "Phenacyl bromide (2-bromo-1-phenylethan-1-one) undergoes SN2 substitution reactions over 100,000 times faster than bromoethane. What factors contribute to this rate acceleration?",
    "question_smiles": "O=C(CBr)c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "The carbonyl group is strongly electron-withdrawing, making the alpha-carbon more electrophilic; additionally, the transition state is stabilized by overlap of the forming/breaking bonds with the carbonyl π* orbital.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The aromatic ring stabilizes a carbocation intermediate, switching the mechanism to a rapid SN1 pathway.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The carbonyl oxygen coordinates to the nucleophile, performing intramolecular catalysis.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Steric hindrance is reduced because the carbonyl group is planar.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A halogen on the carbon next to a carbonyl is displaced by SN2 far faster than in a simple alkyl halide - the alpha-halo ketone effect. Both an electronic pull on the reacting carbon and an orbital effect in the transition state contribute.",
      "approach": "Step 1: The carbonyl carbon is electron-poor, so it withdraws density inductively from the CH2Br carbon and makes it a better electrophile.\nStep 2: In the transition state the reacting carbon's p-type orbital lies parallel to the carbonyl pi system; overlap with the low-lying pi* orbital delocalizes the developing negative character.\nStep 3: The two effects together account for the enormous rate increase over bromoethane, whose only neighbour is a methyl group.",
      "note": "The effect shows up wherever a pi acceptor sits next to the reacting carbon: alpha-halo esters, nitriles and sulfones all substitute quickly. It is the SN2 counterpart of the allylic effect, with a pi* orbital doing the job the alkene's pi orbital does there.",
      "options": {
        "A": "Correct. Inductive withdrawal makes the alpha-carbon more electrophilic and overlap with the carbonyl pi* stabilizes the transition state; both accelerate the displacement.",
        "B": "A cation next to a carbonyl is destabilized, not stabilized. If anything the carbonyl suppresses SN1; the acceleration belongs to the SN2 pathway.",
        "C": "The carbonyl oxygen is a weak Lewis base and does not hold the nucleophile. The acceleration is intrinsic to the transition state, not an intramolecular delivery.",
        "D": "The carbonyl group is planar, but a planar neighbour does not remove the steric cost of substitution. Steric relief on its own could not produce a rate increase of this size."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring attached to a carbonyl carbon, which is bonded to a CH2 group carrying a bromine."
  },
  {
    "question_id": "ch11_q21_phase_transfer_catalysis",
    "topic": "SN2 Mechanism: Nucleophile Activation",
    "difficulty_level": "Medium",
    "question_text": "The reaction of potassium fluoride (KF) with 1-bromooctane in acetonitrile is very slow. However, adding a catalytic amount of 18-crown-6 dramatically increases the reaction rate. What is the role of 18-crown-6 in this substitution?",
    "question_smiles": "CCCCCCCCBr",
    "options": [
      {
        "option_id": "A",
        "text": "It complexes the potassium cation (K⁺), which solubilizes the salt in acetonitrile and leaves the fluoride anion (F⁻) 'naked' and highly nucleophilic.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It reacts directly with 1-bromooctane to form a highly reactive crown-ether intermediate.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It acts as a protic co-solvent that stabilizes the leaving group through hydrogen bonding.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It oxidizes the bromide ion to bromine gas, shifting the equilibrium forward.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A salt that will not dissolve cannot react, and fluoride is the worst case - KF is nearly insoluble in acetonitrile, and what does dissolve is held in a tight ion pair. Crown ethers solve the solubility problem and the ion-pair problem at once.",
      "approach": "Step 1: 18-Crown-6 has a cavity that fits K+ almost exactly; its six oxygens surround the cation.\nStep 2: The complexed cation dissolves in acetonitrile and drags fluoride into solution with it.\nStep 3: The anion is now free, unpaired and, in an aprotic solvent, unsolvated: a bare fluoride that displaces bromide from the primary carbon rapidly.",
      "note": "The same idea underlies phase-transfer catalysis, where a tetraalkylammonium salt ferries the anion from an aqueous layer into the organic layer. In both cases the reagent is cheap and used in catalytic amounts because it is released once the anion has reacted.",
      "options": {
        "A": "Correct. The crown ether encapsulates potassium, brings the salt into solution and leaves fluoride bare and highly nucleophilic.",
        "B": "Crown ethers are unreactive polyethers; they have no acidic hydrogens and no leaving groups, and they form no bond to the alkyl halide.",
        "C": "18-Crown-6 has no O-H and cannot hydrogen-bond. It is aprotic, and its effect is on the cation, not on the leaving group.",
        "D": "Nothing in the mixture is an oxidant. Bromide leaves as the bromide ion and stays that way; no Br2 is formed."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An eight-carbon chain with a bromine on the end carbon.",
    "_why": "Topic renamed: a crown ether in a single-phase acetonitrile solution is cation complexation, not phase-transfer catalysis, though the note draws the parallel."
  },
  {
    "question_id": "ch11_q22_sn1_kinetics_rate_law",
    "topic": "SN1 Mechanism: Kinetics",
    "difficulty_level": "Easy",
    "question_text": "An SN1 solvolysis of tert-butyl bromide is carried out in methanol. What is the effect on the rate of the reaction if the concentration of the nucleophile, methanol, is doubled?",
    "question_smiles": "CC(C)(Br)C",
    "options": [
      {
        "option_id": "A",
        "text": "The rate of the reaction remains unchanged.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The rate of the reaction is doubled.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The rate of the reaction is halved.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The rate of the reaction increases by a factor of 4.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The SN1 rate law is first order because only the substrate is present in the slow step. The nucleophile arrives after the carbocation has already formed, so its concentration does not appear in the rate expression.",
      "approach": "Step 1: Ionization of the C-Br bond to the tert-butyl cation is slow and rate-determining.\nStep 2: Capture of the cation by methanol and loss of a proton are fast and come after the bottleneck.\nStep 3: Rate = k[tert-butyl bromide]. Doubling the concentration of the nucleophile leaves the observed rate where it was.",
      "note": "In practice methanol is also the solvent, and changing how much of it is present changes the medium's polarity, which does affect the ionization rate. The idealized answer isolates the kinetic role of the nucleophile; the solvent-effect question is a separate one.",
      "options": {
        "A": "Correct. The nucleophile is absent from the rate-determining ionization, so its concentration has no effect on the rate.",
        "B": "Doubling would be the response of a bimolecular step, which is SN2 behaviour. A tertiary halide with a weak nucleophile does not react that way.",
        "C": "Nothing in either mechanism slows down when more nucleophile is added. A halved rate has no mechanistic basis.",
        "D": "A fourfold change would require second-order dependence on the nucleophile. No substitution mechanism shows that."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Three methyl groups on one carbon that also carries a bromine."
  },
  {
    "question_id": "ch11_q23_sn1_solvent_effects",
    "topic": "SN1 Mechanism: Solvent Effects",
    "difficulty_level": "Medium",
    "question_text": "How does the rate of solvolysis of 2-chloro-2-methylpropane (tert-butyl chloride) change when the solvent is changed from 100% ethanol to a 50% ethanol / 50% water mixture?",
    "question_smiles": "CC(C)(Cl)C",
    "options": [
      {
        "option_id": "A",
        "text": "The rate increases because water is more polar and has a higher dielectric constant, which stabilizes the polar transition state of the rate-determining step.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The rate decreases because water is a poorer nucleophile than ethanol.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The rate remains unchanged because the rate-determining step is unimolecular and independent of the solvent.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The rate decreases because water forms strong hydrogen bonds to the alkyl chloride, preventing its ionization.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The slow step of an SN1 reaction creates two ions from a neutral molecule, and the transition state on the way already carries most of that charge separation. Anything that stabilizes separated charge lowers the barrier, and solvent polarity is the largest such factor.",
      "approach": "Step 1: Identify the rate-determining step as ionization of the C-Cl bond.\nStep 2: Compare the media: ethanol has a dielectric constant near 24, water near 80. A 1:1 mixture is far more polar than pure ethanol.\nStep 3: The more polar mixture solvates the developing cation and chloride better, stabilizes the transition state relative to the neutral starting material, and the ionization is faster - by roughly a thousandfold from pure ethanol to pure water.",
      "note": "This is the opposite of the SN2 solvent effect, where a protic solvent slows the reaction by stabilizing the anionic nucleophile. The two mechanisms respond to the same solvent property in opposite directions, which is one of the ways they are told apart.",
      "options": {
        "A": "Correct. The higher dielectric constant of the water-rich mixture stabilizes the charge-separated transition state of ionization.",
        "B": "Water is a somewhat poorer nucleophile than ethanol, but the nucleophile takes no part in the slow step, so its quality does not set the rate.",
        "C": "The step is unimolecular, but a unimolecular step still has a transition state whose energy the solvent affects. Independence from the nucleophile is not independence from the medium.",
        "D": "Water hydrogen-bonds to the chlorine only weakly, and any such interaction helps the chloride leave rather than hindering it. The rate rises, not falls."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Three methyl groups on one carbon that also carries a chlorine."
  },
  {
    "question_id": "ch11_q24_sn1_kinetic_isotope_effect",
    "topic": "SN1 Mechanism: Kinetics",
    "difficulty_level": "Hard",
    "question_text": "Solvolysis of (CD3)3C-Cl in water is slower than that of (CH3)3C-Cl, showing a secondary kinetic isotope effect (kH/kD > 1). What does this observation indicate about the transition state of the rate-determining step?",
    "question_smiles": "CC(C)(Cl)C",
    "options": [
      {
        "option_id": "A",
        "text": "The C-H (and C-D) bonds are involved in hyperconjugative stabilization of the developing carbocation in the transition state.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A C-H (or C-D) bond is broken in the rate-determining step.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The reaction proceeds via an E2 elimination rather than an SN1 substitution.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Deuterium acts as a steric shield that blocks water from approaching the central carbon.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A secondary kinetic isotope effect arises when the isotopically labelled bond is not broken in the rate-determining step but is changed by it. Here the C-H bonds on the methyls do not break; they are being asked to donate electron density into a forming cation.",
      "approach": "Step 1: The rate-determining step is ionization to the tert-butyl cation. The central carbon goes from sp3 to sp2 and an empty p orbital appears.\nStep 2: C-H bonds on the neighbouring methyls stabilize the cation by hyperconjugation, donating sigma density into that empty orbital.\nStep 3: A C-D bond has a lower zero-point energy and is a slightly poorer hyperconjugative donor, so the deuterated cation is slightly less stabilized and forms more slowly. kH/kD above 1 is the fingerprint of hyperconjugation in the transition state.",
      "note": "The size distinguishes the two kinds of isotope effect. A primary effect, where the bond to H or D breaks, is typically 2 to 8 per hydrogen; a secondary effect of this sort is a few percent per deuterium, so nine deuteriums here produce a modest but measurable slowing.",
      "options": {
        "A": "Correct. The methyl C-H bonds stabilize the forming cation by hyperconjugation, and C-D bonds do so slightly less well, giving a small normal isotope effect.",
        "B": "A bond to hydrogen breaking in the slow step would give a primary isotope effect, typically several-fold. No C-H bond breaks during ionization.",
        "C": "E2 would need a base, and its isotope effect would be primary and large. This is a solvolysis in water with no base present.",
        "D": "Deuterium is almost the same size as hydrogen; steric differences between the isotopes are negligible and could not affect the rate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A tert-butyl skeleton with a chlorine on the central carbon; the nine methyl hydrogens are the ones the stem replaces with deuterium."
  },
  {
    "question_id": "ch11_q25_carbocation_stability_induction",
    "topic": "SN1 Mechanism: Carbocations",
    "difficulty_level": "Easy",
    "question_text": "What is the primary physical basis for the trend in stability of alkyl carbocations: methyl < primary < secondary < tertiary?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Inductive donation of electron density through sigma bonds by alkyl groups, combined with hyperconjugation of adjacent C-H sigma bonds with the empty p-orbital.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Resonance stabilization resulting from the overlap of the empty p-orbital with the pi-bonds of the alkyl groups.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Steric relief that occurs when the bond angles expand from 109.5° to 120°.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The higher electronegativity of sp2-hybridized carbons compared to sp3-hybridized carbons.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carbocation is an electron-deficient carbon with an empty p orbital, and its stability is a question of how much electron density its neighbours can push toward that orbital. Alkyl groups do this two ways, and both increase with the number of alkyl groups attached.",
      "approach": "Step 1: The inductive effect: an alkyl group is more polarizable than a hydrogen and donates sigma-bond density toward the positive carbon.\nStep 2: Hyperconjugation: a C-H or C-C sigma bond on the adjacent carbon, lying parallel to the empty p orbital, delocalizes its electron pair partly into it.\nStep 3: Each additional alkyl group adds both contributions, so methyl < primary < secondary < tertiary, with the tertiary cation roughly 60 kJ/mol more stable than a primary one in solution.",
      "note": "Neither effect involves a pi bond, which is what distinguishes alkyl stabilization from the resonance stabilization of allylic and benzylic cations. Those are stabilized still further, and a tertiary allylic cation combines the two.",
      "options": {
        "A": "Correct. Alkyl groups donate inductively through the sigma framework and, through hyperconjugation, share adjacent C-H bonding density with the empty p orbital.",
        "B": "Alkyl groups have no pi bonds to overlap with the cation. Resonance is the stabilization mechanism for allylic and benzylic cations, not for saturated alkyl ones.",
        "C": "Rehybridization to 120° does relieve some strain in a crowded tertiary centre, but this is a small effect and does not explain the large electronic trend across the series.",
        "D": "Electronegativity of the cationic carbon is not a stabilizing factor; if anything an sp2 carbon holds electrons more tightly, which would make it less willing to bear a positive charge."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "Drew tert-butyl bromide beside a question about a trend across four cations - decorative. Dropped."
  },
  {
    "question_id": "ch11_q26_allylic_stabilization_sn1",
    "topic": "SN1 Mechanism: Carbocations",
    "difficulty_level": "Medium",
    "question_text": "Why does 3-bromoprop-1-ene undergo solvolysis in water (SN1) much faster than 1-bromopropane, despite both being primary alkyl halides?",
    "question_smiles": "C=CCBr",
    "options": [
      {
        "option_id": "A",
        "text": "Ionization of 3-bromoprop-1-ene yields a resonance-stabilized allylic carbocation, which stabilizes the rate-determining transition state.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The double bond in 3-bromoprop-1-ene sterically forces the leaving group to depart.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The alkene carbon-carbon double bond is directly attacked by water to displace the bromine.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Water is a stronger nucleophile toward sp2-hybridized systems.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The rate of an SN1 reaction is set by the stability of the carbocation being formed, because the transition state for ionization resembles that cation. A primary halide is normally a poor SN1 substrate; an allylic one is the exception, because the cation it gives is not really primary.",
      "approach": "Step 1: 1-Bromopropane would ionize to CH3CH2CH2+, a primary cation with only inductive stabilization, so it barely ionizes at all.\nStep 2: 3-Bromoprop-1-ene ionizes to the allyl cation, in which the empty p orbital overlaps with the adjacent pi bond.\nStep 3: The positive charge is shared equally between C1 and C3, the transition state leading to it is lowered by the same delocalization, and solvolysis runs orders of magnitude faster.",
      "note": "Because the charge is shared between two carbons, a substituted allylic halide can give two substitution products - the nucleophile may attach at either end. On the parent allyl cation the two ends are equivalent, so only allyl alcohol forms.",
      "options": {
        "A": "Correct. The allyl cation is resonance-stabilized over two carbons, and that stabilization lowers the barrier to ionization.",
        "B": "Double bonds do not push leaving groups away; there is no steric force here. The double bond acts electronically, after the bromide has begun to leave.",
        "C": "Water does not attack the alkene; an isolated C=C is not electrophilic. The nucleophile attacks the cation formed after bromide departs.",
        "D": "Water's nucleophilicity does not depend on the substrate's hybridization, and in any case the nucleophile is not involved in the rate-determining step of an SN1 reaction."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-carbon chain with a double bond at one end and a bromine on the carbon at the other end.",
    "_why": "Option B misspelled 'sterically'."
  },
  {
    "question_id": "ch11_q27_heteroatom_stabilization_sn1",
    "topic": "SN1 Mechanism: Carbocations",
    "difficulty_level": "Hard",
    "question_text": "Chloromethyl methyl ether (ClCH2OCH3) undergoes solvolysis in ethanol many orders of magnitude faster than chloromethane. What is the reason for this enormous rate acceleration?",
    "question_smiles": "COCCl",
    "options": [
      {
        "option_id": "A",
        "text": "The carbocation intermediate is stabilized by resonance donation of a lone pair from the adjacent oxygen atom, forming a stable oxocarbenium ion.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The highly electronegative oxygen atom inductively pulls electron density away, destabilizing the starting material.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The chlorine atom is a better leaving group when it is adjacent to an oxygen atom.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The reaction proceeds via a concerted SN2 pathway facilitated by ethanol coordinating to the oxygen.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An oxygen next to a cationic carbon is a stabilizing feature of a different order from an alkyl group. Its lone pair can form a full pi bond to the empty orbital, converting the carbocation into an oxocarbenium ion in which every atom has an octet.",
      "approach": "Step 1: Ionization of the C-Cl bond gives +CH2-OCH3, on paper a primary cation.\nStep 2: The oxygen lone pair donates into the empty p orbital: CH2=O+-CH3 is the second resonance form, and it is the major contributor because it has no electron-deficient atom.\nStep 3: That stabilization lowers the ionization barrier enormously; the acceleration relative to chloromethane, which has no such neighbour, is far larger than any alkyl substitution could give.",
      "note": "The same oxocarbenium ion appears whenever an acetal, glycoside or hemiacetal is hydrolysed under acid, and it is why alpha-halo ethers are reactive alkylating agents. The inductive effect of oxygen is withdrawing, so a student reasoning from electronegativity alone reaches the wrong sign; resonance dominates here.",
      "options": {
        "A": "Correct. The adjacent oxygen lone pair delocalizes onto the cation, giving an oxocarbenium ion with a full octet on carbon.",
        "B": "Oxygen does withdraw inductively, but that would slow ionization by making the carbon less able to carry charge. The observed effect is a large acceleration, which only donation can explain.",
        "C": "Chloride's leaving ability does not change with what is on the neighbouring carbon. The leaving group is the same in both substrates; the cation is what differs.",
        "D": "A concerted SN2 by ethanol would show a rate similar to chloromethane, not enormously larger. The acceleration is diagnostic of a cationic pathway."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A chlorine on a CH2 group that is bonded to an oxygen, which carries a methyl.",
    "_why": "Stem quoted a factor of 10^14 that could not be verified against a source; replaced by 'many orders of magnitude', which is what the argument needs."
  },
  {
    "question_id": "ch11_q28_bridgehead_halides_inertness",
    "topic": "SN1 Mechanism: Carbocations",
    "difficulty_level": "Hard",
    "question_text": "1-Bromobicyclo[2.2.1]heptane (1-bromonorbornane) is virtually inert to SN1 solvolysis, even under harsh conditions. Why is it unable to undergo SN1 reaction?",
    "question_smiles": "C1CC2CCC1(Br)C2",
    "options": [
      {
        "option_id": "A",
        "text": "The bridgehead carbon is constrained by the bicyclic ring system and cannot adopt the planar, sp2-hybridized geometry required for a carbocation.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The bicyclic ring system prevents the leaving group from departing due to steric confinement.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The C-Br bond is exceptionally strong because of the high s-character of the bridgehead carbon.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The bridgehead carbon cannot be attacked by a nucleophile from the backside.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carbocation must be planar to be stabilized: the three bonds spread to 120° and the empty orbital is a pure p orbital. A bridgehead carbon in a small bicyclic cage cannot flatten, so the cation that would form there is strained and unstable, and the ionization that would produce it does not happen.",
      "approach": "Step 1: The rate-determining step of SN1 is ionization to a carbocation.\nStep 2: The bridgehead carbon of norbornane is held by three ring bonds in a pyramidal arrangement; flattening it would twist the whole cage.\nStep 3: The tertiary cation that would result is far higher in energy than an ordinary tertiary cation, so 1-bromonorbornane is inert even under forcing solvolysis conditions - this is the carbocation counterpart of Bredt's rule.",
      "note": "The same geometry also rules out SN2, because the cage occupies the backside of the C-Br bond, so bridgehead halides are inert to substitution by either mechanism. Larger bicyclic systems, such as bicyclo[3.3.1]nonane, can flatten enough for their bridgehead cations to form.",
      "options": {
        "A": "Correct. A carbocation needs planar sp2 geometry, and the bicyclic cage prevents the bridgehead carbon from adopting it.",
        "B": "Nothing physically traps the bromide; the C-Br bond points outward from the cage. The barrier is electronic and geometric, not a matter of the leaving group being caged.",
        "C": "The s-character of a bridgehead C-Br bond is not unusual, and bond strength differences among tertiary bromides are small. Bond strength cannot explain complete inertness.",
        "D": "Backside attack being blocked is why SN2 fails, and it is true, but the question is about SN1, which does not involve a nucleophile in the slow step."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A bicyclic cage of seven carbons with a bromine on one of the two bridgehead carbons."
  },
  {
    "question_id": "ch11_q29_hydride_shift_rearrangement",
    "topic": "SN1 Mechanism: Rearrangements",
    "difficulty_level": "Medium",
    "question_text": "When 2-bromo-3-methylbutane undergoes solvolysis in hot ethanol, the major substitution product is 2-ethoxy-2-methylbutane. What mechanistic step explains the formation of this product?",
    "question_smiles": "CC(C)C(Br)C",
    "options": [
      {
        "option_id": "A",
        "text": "A 1,2-hydride shift converts the initial secondary carbocation into a more stable tertiary carbocation.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A 1,2-methyl shift converts the initial secondary carbocation into a more stable tertiary carbocation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The reaction proceeds via a concerted SN2 pathway with rearrangement.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The product is formed via an E1 elimination followed by Markovnikov addition of ethanol.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carbocation formed in an SN1 reaction is free to rearrange before the nucleophile arrives, and it will if a single 1,2-shift produces a more stable cation. The product then carries the nucleophile on a carbon that never held the leaving group.",
      "approach": "Step 1: Ionization gives a secondary cation at C2, next to C3, which is tertiary and bears a hydrogen.\nStep 2: That hydrogen migrates with its bonding pair from C3 to C2, a 1,2-hydride shift. The positive charge moves to C3, now a tertiary cation.\nStep 3: Ethanol captures the tertiary cation and loses a proton: 2-ethoxy-2-methylbutane, with the ether on the carbon that was C3 of the starting halide.",
      "note": "Hydride shifts are fast - faster than capture by a weak nucleophile like ethanol - which is why rearranged products dominate under solvolysis conditions. A strong nucleophile in an SN2 reaction gives no such rearrangement because no cation ever forms.",
      "options": {
        "A": "Correct. The secondary cation at C2 becomes a tertiary cation at C3 by a hydride shift, and ethanol attacks the rearranged cation.",
        "B": "A methyl shift from C3 to C2 would leave a secondary cation at C3, no better than the one that started. Moving the hydrogen is what creates the tertiary cation.",
        "C": "SN2 is concerted and never has a cation available to rearrange; the product would be 2-ethoxy-3-methylbutane with inversion. Rearrangement is the signature of a carbocation.",
        "D": "E1 to an alkene and re-addition of ethanol would take an acid catalyst and would give a mixture. The direct cation path is simpler and is what operates."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a methyl branch on the third carbon and a bromine on the second."
  },
  {
    "question_id": "ch11_q30_methyl_shift_rearrangement",
    "topic": "SN1 Mechanism: Rearrangements",
    "difficulty_level": "Medium",
    "question_text": "Solvolysis of 3-bromo-2,2-dimethylbutane in water yields 2,3-dimethylbutan-2-ol as the major product. What type of rearrangement occurs during this reaction?",
    "question_smiles": "CC(C)(C)C(Br)C",
    "options": [
      {
        "option_id": "A",
        "text": "A 1,2-methyl shift.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A 1,2-hydride shift.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A 1,3-methyl shift.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "No rearrangement; the secondary cation is captured directly.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When the carbon next to a cation carries no hydrogen, a hydride shift is impossible and an alkyl group migrates instead. 3-Bromo-2,2-dimethylbutane is the classic test: its neighbour is a quaternary carbon, and only a methyl can move.",
      "approach": "Step 1: Ionization gives a secondary cation at C3.\nStep 2: The adjacent C2 is quaternary - three methyls, no hydrogen - so the only group that can shift with its electrons is a methyl. It migrates from C2 to C3, a 1,2-methyl shift.\nStep 3: The positive charge lands on C2, now tertiary. Water captures it and loses a proton: 2,3-dimethylbutan-2-ol, its skeleton rearranged.",
      "note": "Notice the product's name has changed the numbering: the alcohol is on what was C2 of the halide, and the carbon skeleton is 2,3-dimethylbutane rather than 2,2-dimethylbutane. Skeletal rearrangement is the fingerprint of an alkyl shift; a hydride shift keeps the skeleton intact.",
      "options": {
        "A": "Correct. With no hydrogen on the quaternary neighbour, a methyl migrates to give the tertiary cation, and water captures it.",
        "B": "A hydride shift needs a hydrogen on the adjacent carbon, and C2 has none. Its three substituents are all methyls.",
        "C": "Migration is always to the adjacent carbon, through a three-centre transition state. There is no 1,3-shift in carbocation chemistry.",
        "D": "Direct capture would give 3,3-dimethylbutan-2-ol with the original skeleton. The product named has a different skeleton, so a shift must have occurred."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with two methyl branches on the second carbon and a bromine on the third.",
    "_why": "Option D was 'a ring expansion' on an acyclic substrate. Replaced by the unrearranged product, the misreading a student actually makes."
  },
  {
    "question_id": "ch11_q31_ring_expansion_rearrangement",
    "topic": "SN1 Mechanism: Rearrangements",
    "difficulty_level": "Hard",
    "question_text": "Solvolysis of (bromomethyl)cyclobutane in water leads to a mixture of products containing cyclopentanol. What is the mechanism of this transformation?",
    "question_smiles": "C1CCC1CBr",
    "options": [
      {
        "option_id": "A",
        "text": "Ionization of the bromide is followed by a 1,2-alkyl shift that expands the 4-membered ring to a less-strained 5-membered ring carbocation.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The reaction is an SN2 displacement that is assisted by the steric strain of the ring.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A 1,2-hydride shift occurs on the cyclobutane ring, followed by ring opening and re-cyclization.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclobutane decomposes to cyclopentane under the acidic reaction conditions.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A ring bond can migrate just as a methyl or a hydride can, and when it does the ring grows by one carbon. For a four-membered ring the driving force is doubled: the shift converts a primary cation into a secondary one and relieves much of the ring strain at the same time.",
      "approach": "Step 1: Loss of bromide from the CH2 group would give a primary cation next to the ring - so unstable that the shift is effectively concerted with ionization.\nStep 2: One of the ring bonds to the carbon bearing the CH2 migrates to the cationic carbon. That carbon becomes part of the ring, and the ring is now five-membered.\nStep 3: The positive charge sits on the ring carbon that lost the bond, a secondary cyclopentyl cation. Water captures it to give cyclopentanol.",
      "note": "Cyclobutylmethyl, cyclopentyl and homoallyl cations interconvert readily, so solvolysis of any of the three gives a mixture containing all three kinds of product. The question asks only how cyclopentanol arises, and ring expansion is that route.",
      "options": {
        "A": "Correct. A ring C-C bond shifts to the exocyclic cation, expanding the four-ring to a five-ring and placing the charge on a secondary carbon.",
        "B": "SN2 on the CH2Br carbon would give cyclobutylmethanol with the ring intact. Cyclopentanol has a different skeleton, so a displacement cannot be its source.",
        "C": "A hydride shift moves a hydrogen, not a ring bond, and cannot change the ring size. Ring opening and re-closure would be far higher in energy than a single 1,2-alkyl shift.",
        "D": "Cyclobutane rings do not fall apart in water. Solvolysis is not thermal decomposition; the carbon skeleton is rearranged, not destroyed."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-membered carbon ring with a CH2Br group attached."
  },
  {
    "question_id": "ch11_q32_ring_expansion_cyclopentyl",
    "topic": "SN1 Mechanism: Rearrangements",
    "difficulty_level": "Hard",
    "question_text": "Predict the major organic product of the solvolysis of 1-(iodomethyl)-1-methylcyclopentane in ethanol.",
    "question_smiles": "CC1(CI)CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "1-ethoxy-1-ethylcyclopentane",
        "smiles": "CCOC1(CC)CCCC1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "(1-methylcyclopentyl)methyl ethyl ether",
        "smiles": "CCOCC1(C)CCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-ethoxy-2-methylcyclohexane",
        "smiles": "CCOC1CCCCC1C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-ethoxy-1-methylcyclohexane",
        "smiles": "CCOC1(C)CCCCC1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "A neopentyl-type halide - a CH2 leaving group on a fully substituted carbon - cannot substitute by SN2 and cannot form a stable primary cation. What it does instead is rearrange as it ionizes, and when the substituted carbon is part of a ring, the bond that migrates is a ring bond.",
      "approach": "Step 1: Ionization at the CH2I carbon is coupled to migration; the cation that would form is primary and never exists on its own.\nStep 2: A ring C-C bond from the quaternary carbon shifts to the CH2. The CH2 becomes a ring carbon and the ring is now six-membered.\nStep 3: The positive charge is left on the carbon that lost the ring bond - the one bearing the methyl. That is a tertiary cation, the 1-methylcyclohexyl cation, and no further shift can improve on it. Ethanol captures it: 1-ethoxy-1-methylcyclohexane.",
      "note": "Count carbons before trusting any answer to a rearrangement question. The substrate has seven; a product with eight carbons on the ring plus methyls has invented one. The ring expansion moves carbons around, it does not add them, and the methyl stays on the carbon it started on.",
      "options": {
        "A": "A methyl shift to the CH2 would give a tertiary cation too, but it leaves the ring strained and five-membered. Ring expansion relieves strain as well as giving a tertiary cation, and it dominates.",
        "B": "The direct SN2 ether would need ethanol, a weak nucleophile, to attack a neopentyl-type carbon from behind. That position is the least SN2-reactive primary centre there is.",
        "C": "This puts the ethoxy group on the carbon that migrated into the ring. That carbon never carries the charge; the positive charge stays on the quaternary carbon that gave up the ring bond.",
        "D": "Correct. Ring expansion turns the five-ring into a six-ring and leaves a tertiary cation on the methyl-bearing carbon; ethanol adds there."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-membered carbon ring; one ring carbon carries both a methyl group and a CH2I group.",
    "_why": "Wrong key. The old key '1-ethoxy-1,2-dimethylcyclohexane' is C8 + OEt (RDKit C10H20O) from a C7 substrate, and its mechanism invoked a hydride shift after an expansion that already delivers a tertiary cation. Old option B drew 1-ethoxy-1-methylcyclopentane under the name of a different ether. Options rebuilt around the four cations a student might draw."
  },
  {
    "question_id": "ch11_q33_sn1_stereochemistry_ion_pairs",
    "topic": "SN1 Mechanism: Stereochemistry",
    "difficulty_level": "Medium",
    "question_text": "The solvolysis of chiral (S)-3-bromo-3-methylhexane in methanol yields 3-methoxy-3-methylhexane. The product is found to be mostly racemic, but contains a slight excess of the (R)-enantiomer (net inversion). What is the molecular explanation for this partial inversion?",
    "question_smiles": "CCCC[C@@](C)(Br)CC",
    "options": [
      {
        "option_id": "A",
        "text": "The leaving group (bromide) remains temporarily associated with the carbocation as an intimate ion pair, shielding the front side and favoring backside nucleophilic attack.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The reaction proceeds partially via a competing SN2 mechanism.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The carbocation intermediate is chiral and does not have a planar geometry.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methanol is a chiral solvent that selectively attacks one face of the carbocation.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A textbook SN1 gives a racemate because the cation is planar and can be attacked from either face. Real solvolyses of chiral tertiary halides usually show a small excess of inversion, and the reason is that the leaving group has not yet left the vicinity when the nucleophile arrives.",
      "approach": "Step 1: Ionization gives the cation and bromide still side by side in the same solvent cage: an intimate ion pair.\nStep 2: While bromide lingers on the face it left, that face is partly shielded. A nucleophile arriving at this stage attacks the opposite face, giving inversion.\nStep 3: If the ions separate fully before capture, attack is equally likely from either face and the product from that fraction is racemic. The sum is mostly racemic with a slight excess of the inverted (R) ether.",
      "note": "The size of the excess depends on how long the ion pair survives - longer in less polar solvents, shorter where the cation is more stable. It is the same picture that explains why some secondary solvolyses look almost fully inverted: they may never reach a free cation at all.",
      "options": {
        "A": "Correct. The departing bromide shields the front face briefly, so the nucleophile prefers the back face until the ion pair dissociates.",
        "B": "A tertiary halide with a weak nucleophile does not react by SN2 at any measurable rate; the tertiary carbon is inaccessible. The partial inversion comes from the ion pair.",
        "C": "The cation is planar and, alone, achiral. What makes the outcome unsymmetrical is the presence of the leaving group beside it, not any chirality of the cation.",
        "D": "Methanol is achiral, so it cannot distinguish the two faces of a cation. Selectivity has to come from something already attached to the molecule - the departing bromide."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-carbon chain with a methyl branch and a bromine on the third carbon, drawn with a wedge."
  },
  {
    "question_id": "ch11_q34_diastereomer_solvolysis_rates",
    "topic": "SN1 Mechanism: Stereochemistry",
    "difficulty_level": "Hard",
    "question_text": "cis-4-tert-Butylcyclohexyl tosylate undergoes solvolysis in acetic acid significantly faster than its trans isomer. What is the origin of this rate difference?",
    "question_smiles": "CC(C)(C)[C@H]1CC[C@@H](OS(=O)(=O)c2ccc(C)cc2)CC1",
    "options": [
      {
        "option_id": "A",
        "text": "In the cis isomer, the tosylate group is forced into the axial position to keep the bulky tert-butyl group equatorial. The steric strain of the axial tosylate is relieved upon ionization, lowering the activation energy.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The cis isomer forms a more stable carbocation intermediate than the trans isomer.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The trans isomer cannot undergo solvolysis because the equatorial tosylate is sterically blocked from departing.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The cis isomer reacts via a concerted E2 mechanism, which is inherently faster than the SN1 pathway of the trans isomer.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A tert-butyl group is too large to go axial, so it locks a cyclohexane chair with itself equatorial. That fixes where the other substituent sits: in the cis isomer of a 1,4-disubstituted ring the second group is axial, in the trans isomer it is equatorial. Ionization rates then report on the ground-state strain each isomer starts with.",
      "approach": "Step 1: In the cis isomer the tosylate is axial and suffers 1,3-diaxial interactions with the two axial ring hydrogens on the same face.\nStep 2: In the trans isomer the tosylate is equatorial and strain-free.\nStep 3: Ionization flattens the carbon, and the axial group's diaxial strain disappears in the transition state. The cis isomer therefore has less far to climb, and it solvolyses several times faster than the trans isomer.",
      "note": "The effect is a few-fold rate difference, not orders of magnitude - both isomers give the same cyclohexyl cation, so only the starting point differs. Compare E2 on the same skeleton, where the axial-versus-equatorial difference decides whether reaction is possible at all, not merely how fast.",
      "options": {
        "A": "Correct. The cis isomer holds its tosylate axial, and the diaxial strain released on ionization lowers its barrier relative to the strain-free trans isomer.",
        "B": "Both isomers ionize to the same planar cation, so the intermediates are identical. The difference is in the starting materials, not the cation.",
        "C": "The trans isomer does solvolyse, just more slowly. An equatorial tosylate is not blocked; it simply has no strain to release.",
        "D": "Acetic acid is far too weak a base to promote E2, and elimination would not depend on the ground-state strain in this way. Both isomers react by SN1."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A cyclohexane ring with a tert-butyl group on one carbon and a tosylate (p-toluenesulfonate) on the carbon opposite, drawn with wedges so that both substituents lie on the same face.",
    "_why": "The SMILES was flat: a cis/trans question drawn with no relative configuration. Now cis, checked by embedding (local ring-plane test, consistent over six conformers)."
  },
  {
    "question_id": "ch11_q35_e2_kinetics_rate_law",
    "topic": "E2 Mechanism: Kinetics",
    "difficulty_level": "Easy",
    "question_text": "An E2 elimination reaction is performed on 2-bromopropane using sodium ethoxide in ethanol. What is the effect on the reaction rate if the concentration of 2-bromopropane is doubled and the concentration of sodium ethoxide is also doubled?",
    "question_smiles": "CC(Br)C",
    "options": [
      {
        "option_id": "A",
        "text": "The rate increases by a factor of 4.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The rate increases by a factor of 2.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The rate remains unchanged.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The rate increases by a factor of 8.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "E2 is a single step in which the base removes a proton, the double bond forms and bromide leaves all at once. Both the halide and the base are in that transition state, so both appear in the rate law, exactly as in SN2.",
      "approach": "Step 1: Write rate = k[2-bromopropane][ethoxide].\nStep 2: Doubling each concentration doubles each factor.\nStep 3: 2 x 2 = 4: the rate quadruples.",
      "note": "This is what distinguishes E2 from E1 in the laboratory. An E1 elimination runs through a cation formed without the base, so its rate is first order in substrate and unchanged by adding more base; an E2 responds to both.",
      "options": {
        "A": "Correct. Second-order kinetics, first order in each species: doubling both gives a factor of four.",
        "B": "A doubling would be the E1 response, where only the substrate's concentration counts. The base is in the E2 transition state.",
        "C": "An unchanged rate would need the substrate to be absent from the rate law, which no elimination mechanism allows.",
        "D": "Eightfold would require a third concentration term or a second-order dependence on one species. The E2 rate law has two first-order terms."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-carbon chain with a bromine on the middle carbon; the two methyl groups are the ones the base can deprotonate."
  },
  {
    "question_id": "ch11_q36_e2_regiochemistry_base_size",
    "topic": "E2 Mechanism: Regiochemistry",
    "difficulty_level": "Medium",
    "question_text": "Predict the major organic product formed when 2-bromo-2-methylbutane is treated with the bulky base potassium tert-butoxide (KOtBu) in tert-butanol.",
    "question_smiles": "CCC(C)(C)Br",
    "options": [
      {
        "option_id": "A",
        "text": "2-methylbut-1-ene (Hofmann product)",
        "smiles": "CCC(=C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-methylbut-2-ene (Zaitsev product)",
        "smiles": "CC(C)=CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-methylbut-1-ene",
        "smiles": "CC(C)C=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-methylbutan-2-yl tert-butyl ether",
        "smiles": "CCC(C)(C)OC(C)(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Zaitsev's rule says the more substituted alkene forms, and it holds when the base is small. A bulky base cannot reach the more hindered beta-hydrogen, takes the accessible one instead, and gives the less substituted alkene - the Hofmann product.",
      "approach": "Step 1: Locate the beta-hydrogens on 2-bromo-2-methylbutane: primary hydrogens on the two methyls (C1 and the branch methyl) and secondary hydrogens on the CH2 (C3).\nStep 2: Removing a C3 hydrogen gives the trisubstituted 2-methylbut-2-ene (Zaitsev). Removing a methyl hydrogen gives the disubstituted 2-methylbut-1-ene (Hofmann).\nStep 3: tert-Butoxide is too bulky to approach the C3 hydrogens, which are flanked by the methyl and ethyl groups, so it removes a methyl hydrogen and the Hofmann alkene is the major product, roughly 70 percent.",
      "note": "With ethoxide the same substrate gives mostly the Zaitsev alkene. Nothing about the substrate changes; the base's size decides which hydrogen it can reach, and that is the lever a synthesis uses when the terminal alkene is wanted.",
      "options": {
        "A": "Correct. The bulky base abstracts the accessible primary hydrogen and gives the less substituted, Hofmann alkene.",
        "B": "2-Methylbut-2-ene is what a small base like ethoxide gives. tert-Butoxide cannot reach the hindered C3 hydrogens that lead to it.",
        "C": "3-Methylbut-1-ene has the methyl on the wrong carbon - it is not on the substrate's skeleton without a rearrangement, and E2 does not rearrange.",
        "D": "The tert-butyl ether would be the SN1 product from solvolysis. tert-Butoxide is a strong base and a poor nucleophile, and a tertiary bromide with a strong base eliminates rather than substitutes."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a bromine and a methyl group both on the second carbon.",
    "_why": "Option D was 2-methylbutan-2-ol, unreachable in tert-butanol with no water; the substitution competitor is the tert-butyl ether. ch11_q3_e2_regioselectivity was this same question and is cut."
  },
  {
    "question_id": "ch11_q37_e2_regiochemistry_zaitsev",
    "topic": "E2 Mechanism: Regiochemistry",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed when 2-bromobutane is treated with sodium methoxide (a small, strong base) in methanol?",
    "question_smiles": "CCC(Br)C",
    "options": [
      {
        "option_id": "A",
        "text": "trans-but-2-ene (Zaitsev product)",
        "smiles": "C/C=C/C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "cis-but-2-ene",
        "smiles": "C/C=C\\C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "but-1-ene (Hofmann product)",
        "smiles": "CCC=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-methoxybutane",
        "smiles": "CCC(OC)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "With a small strong base, E2 on a secondary halide follows Zaitsev's rule and gives the more substituted alkene. When that alkene can exist as E and Z isomers, the E isomer dominates because the transition state leading to it is less crowded, just as the product itself is.",
      "approach": "Step 1: 2-Bromobutane has beta-hydrogens on C1 (giving but-1-ene) and on C3 (giving but-2-ene). Methoxide is small enough to reach C3, so the disubstituted but-2-ene is the major alkene.\nStep 2: In the anti-periplanar transition state the two methyl groups can be either on the same side or opposite sides of the forming double bond.\nStep 3: The opposite-side arrangement avoids the eclipsing interaction between the methyls, so (E)-but-2-ene forms about three times faster than the (Z) isomer.",
      "note": "The stereoselectivity here is a preference, not a requirement: 2-bromobutane has two beta-hydrogens on C3 and can reach either alkene by rotating before elimination. A substrate with only one beta-hydrogen on the relevant carbon is stereospecific and gives a single geometric isomer.",
      "options": {
        "A": "Correct. Small base, Zaitsev regiochemistry, and the less hindered transition state gives the (E)-alkene as the major product.",
        "B": "(Z)-But-2-ene forms too, but the transition state that produces it has the two methyls eclipsed and is higher in energy. It is the minor isomer.",
        "C": "But-1-ene is the Hofmann product; a bulky base would favour it. Methoxide is small and takes the more hindered C3 hydrogen that leads to the internal alkene.",
        "D": "2-Methoxybutane is the SN2 product and forms in a minor amount, but a strong base on a secondary halide gives mainly elimination."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a bromine on the second carbon."
  },
  {
    "question_id": "ch11_q38_e2_conjugation",
    "topic": "E2 Mechanism: Regiochemistry",
    "difficulty_level": "Hard",
    "question_text": "When (2-bromopropyl)benzene is treated with sodium ethoxide in ethanol, what is the major organic product and why?",
    "question_smiles": "CC(Br)Cc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-prop-1-en-1-ylbenzene, because the resulting double bond is conjugated with the aromatic ring.",
        "smiles": "C/C=C/c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "prop-2-en-1-ylbenzene, because it is the Hofmann product.",
        "smiles": "C=CCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(Z)-prop-1-en-1-ylbenzene, because cis geometry is kinetically favored.",
        "smiles": "C/C=C\\c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(2-ethoxypropyl)benzene, due to competing SN2 substitution.",
        "smiles": "CCOC(C)Cc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Zaitsev's rule is really a statement that the more stable alkene forms, and conjugation with an aromatic ring stabilizes an alkene more than an extra alkyl substituent does. When one beta-hydrogen leads to a conjugated alkene, that is the one that wins.",
      "approach": "Step 1: The beta-carbons are the benzylic CH2 (C1) and the terminal CH3 (C3).\nStep 2: Removing a benzylic hydrogen puts the new double bond in conjugation with the ring; removing a methyl hydrogen gives an isolated terminal alkene.\nStep 3: The conjugated product is more stable and the transition state leading to it shares that stabilization, so (E)-prop-1-en-1-ylbenzene is the major product, with E over Z for the usual steric reason.",
      "note": "A benzylic hydrogen is also more acidic than an ordinary one, so the base removes it more readily on kinetic grounds as well. Both effects point the same way, which is why the conjugated alkene dominates so heavily.",
      "options": {
        "A": "Correct. Elimination toward the ring gives a styrene-type alkene stabilized by conjugation, and the (E) isomer is the less hindered.",
        "B": "Prop-2-en-1-ylbenzene is the non-conjugated Hofmann alkene. It forms only in small amounts, since the base is small and the conjugated alkene is far more stable.",
        "C": "The (Z) isomer is conjugated too, but it puts the methyl and the ring on the same side of the double bond. The (E) transition state is lower in energy.",
        "D": "Substitution competes, but a secondary bromide next to a benzylic carbon gives mainly elimination with ethoxide, especially when the alkene is conjugated."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring attached to a three-carbon chain, with a bromine on the middle carbon of the chain."
  },
  {
    "question_id": "ch11_q39_e2_stereospecificity_3R_2R",
    "topic": "E2 Mechanism: Stereochemistry",
    "difficulty_level": "Hard",
    "question_text": "What is the stereochemical configuration of the major alkene product when (2R,3R)-2-bromo-3-phenylbutane undergoes E2 elimination upon treatment with sodium ethoxide in ethanol?",
    "question_smiles": "C[C@@H](Br)[C@@H](c1ccccc1)C",
    "options": [
      {
        "option_id": "A",
        "text": "(Z)-2-phenylbut-2-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "(E)-2-phenylbut-2-ene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A 1:1 mixture of (E)- and (Z)-2-phenylbut-2-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-phenylbut-1-ene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "E2 is stereospecific: the hydrogen removed and the leaving group must be anti-periplanar, and that single geometric constraint fixes which alkene isomer a given diastereomer can produce. Working it out means putting the molecule into the reactive conformation and reading off where the other groups end up.",
      "approach": "Step 1: Look down the C2-C3 bond and rotate C3 so that its hydrogen is anti (180°) to the bromine on C2.\nStep 2: In that conformer of the (2R,3R) isomer the methyl on C2 is anti to the phenyl on C3 and gauche to the methyl on C3.\nStep 3: Groups anti in the transition state end up trans in the alkene. Methyl (the higher-priority group on C2) is trans to phenyl (the higher-priority group on C3), so the product is (E)-2-phenylbut-2-ene.",
      "note": "The same reasoning on the (2R,3S) diastereomer gives the (Z) alkene. McMurry's version of this problem uses 1,2-dibromo-1,2-diphenylethane: the meso compound gives the (E)-bromoalkene and the chiral diastereomer gives the (Z), for exactly the same reason.",
      "options": {
        "A": "(Z)-2-Phenylbut-2-ene is what the (2R,3S) diastereomer gives. From (2R,3R) the anti-periplanar geometry places the methyl on C2 anti to the phenyl, which is the (E) arrangement.",
        "B": "Correct. With the C3 hydrogen anti to bromine, the C2 methyl and the C3 phenyl are anti, and anti groups become trans: the (E) alkene.",
        "C": "A mixture would require the molecule to eliminate through more than one conformer. Only one conformer has the single C3 hydrogen anti to bromine, so only one alkene forms.",
        "D": "3-Phenylbut-1-ene comes from removing a C1 hydrogen instead. That alkene is monosubstituted and unconjugated, and the small base takes the C3 hydrogen that leads to the more stable product."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a bromine on the second carbon and a benzene ring on the third, both drawn with wedges to show one diastereomer.",
    "_why": "Wrong key: sat on (Z). Anti-periplanar analysis by RDKit (C3-H set anti to C2-Br, dihedral of the C2 methyl to the C3 phenyl read off, six conformers, 3D stereo re-derived and matched to the SMILES) gives (E) for (2R,3R); the method reproduces McMurry's meso-stilbene-dibromide result. The SMILES was flat at C3 and identical to q40's."
  },
  {
    "question_id": "ch11_q40_e2_stereospecificity_3S_2R",
    "topic": "E2 Mechanism: Stereochemistry",
    "difficulty_level": "Hard",
    "question_text": "Under identical E2 conditions, the (2R,3S) diastereomer of 2-bromo-3-phenylbutane yields a different alkene stereoisomer compared to the (2R,3R) isomer. What is the major product?",
    "question_smiles": "C[C@@H](Br)[C@H](c1ccccc1)C",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-2-phenylbut-2-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "(Z)-2-phenylbut-2-ene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A 1:1 mixture of (E)- and (Z)-2-phenylbut-2-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-phenylbut-1-ene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Diastereomers that differ at one of two adjacent stereocentres give opposite alkene geometries on E2 elimination. The anti-periplanar requirement is the same for both; what changes is which groups happen to be anti once the hydrogen and the bromine have been aligned.",
      "approach": "Step 1: Rotate about C2-C3 until the C3 hydrogen is anti to the C2 bromine.\nStep 2: In the (2R,3S) isomer this places the C2 methyl gauche to the C3 phenyl and anti to the C3 methyl.\nStep 3: Gauche groups become cis in the alkene, so the C2 methyl and the C3 phenyl - the higher-priority groups on each carbon - are on the same side: (Z)-2-phenylbut-2-ene.",
      "note": "Inverting one centre of the starting material flips the alkene geometry; inverting both gives the enantiomer, which eliminates to the same alkene as the original. A pair of enantiomers gives one geometric isomer; a pair of diastereomers gives both.",
      "options": {
        "A": "(E)-2-Phenylbut-2-ene is the product of the (2R,3R) diastereomer. Changing the configuration at C3 swaps which C3 group sits anti to the C2 methyl.",
        "B": "Correct. With hydrogen anti to bromine, the C2 methyl is gauche to the phenyl, and gauche in the transition state means cis in the alkene: (Z).",
        "C": "Each diastereomer eliminates through a single conformer, so each gives a single alkene. Only a mixture of diastereomers would give both.",
        "D": "The terminal alkene from a C1 hydrogen is the minor product with a small base; the question asks which internal alkene isomer forms, and stereospecificity determines that."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A bromine on C2 and a phenyl on C3 of a butane chain, each drawn with a wedge; this is a single diastereomer with the phenyl-bearing carbon inverted relative to its (2R,3R) partner.",
    "_why": "Wrong key: sat on (E). Same RDKit analysis as q39 gives (Z) for (2R,3S). SMILES now carries both centres."
  },
  {
    "question_id": "ch11_q41_menthyl_chloride_elimination",
    "topic": "E2 Mechanism: Stereochemistry",
    "difficulty_level": "Hard",
    "question_text": "Menthyl chloride and neomenthyl chloride are diastereomers. When neomenthyl chloride is treated with sodium ethoxide, it reacts rapidly to give 3-menthene. Under the same conditions, menthyl chloride reacts much more slowly and yields 2-menthene. What is the conformational basis for this difference?",
    "question_smiles": "C[C@@H]1CC[C@@H](C(C)C)[C@H](Cl)C1.C[C@@H]1CC[C@@H](C(C)C)[C@@H](Cl)C1",
    "options": [
      {
        "option_id": "A",
        "text": "In neomenthyl chloride, the chlorine atom is axial in its most stable conformation, allowing rapid trans-diaxial E2 elimination. In menthyl chloride, the chlorine is equatorial, requiring a high-energy ring flip to place it axial before elimination can occur.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Menthyl chloride is tertiary, which blocks elimination, while neomenthyl chloride is secondary.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Neomenthyl chloride undergoes elimination via the E1 pathway, which is faster than the E2 pathway of menthyl chloride.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The isopropyl group in menthyl chloride sterically blocks the base from approaching any beta-hydrogens.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "E2 in a cyclohexane needs the leaving group and the beta-hydrogen both axial, on adjacent carbons, so they are anti-periplanar. Whether a given chloride can meet that condition in its stable chair - or only after a ring flip that costs energy - decides both how fast it reacts and which alkene it gives.",
      "approach": "Step 1: Neomenthyl chloride: in the chair with the methyl and isopropyl equatorial, the chlorine is axial. Both neighbouring carbons carry an axial hydrogen, so elimination is fast and can go either way; the trisubstituted 3-menthene (Zaitsev) dominates.\nStep 2: Menthyl chloride: in the stable chair all three groups are equatorial and no beta-hydrogen is anti to the chlorine. Reaction requires flipping to the chair with chlorine axial - and the methyl and isopropyl axial too - which is populated only slightly.\nStep 3: In that flipped chair the carbon bearing the isopropyl has its hydrogen equatorial, so the only axial beta-hydrogen is on the other side. Elimination is slow (about 200-fold) and gives only 2-menthene, the less substituted alkene.",
      "note": "Menthyl chloride is the standard demonstration that Zaitsev's rule yields to geometry. The more substituted alkene is still the more stable one; it simply cannot form because the hydrogen that would give it is never axial when the chlorine is.",
      "options": {
        "A": "Correct. Neomenthyl chloride's stable chair already has chlorine axial with axial neighbours; menthyl chloride must first flip to a strained chair, and then has only one usable hydrogen.",
        "B": "Both chlorides are secondary - the chlorine is on a ring CH in each. They are diastereomers of one substrate, not compounds of different substitution class.",
        "C": "Neither reacts by E1 with ethoxide; a secondary chloride with a strong base eliminates bimolecularly. The rate difference comes from conformation, not from a change of mechanism.",
        "D": "The isopropyl group does not shield the base from the ring hydrogens. What it does is anchor the ring conformation, which is what determines which hydrogens are axial."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two cyclohexane rings side by side, each carrying a methyl, an isopropyl and a chlorine; the two drawings differ only in which face of the ring the chlorine occupies.",
    "_why": "Drew one flat structure for a comparison of two diastereomers. Now a dot-pair with relative stereo checked by embedding: menthyl (Cl trans to isopropyl, cis to methyl - all equatorial) and neomenthyl (Cl cis to isopropyl - axial)."
  },
  {
    "question_id": "ch11_q42_cyclohexane_E2_tert_butyl",
    "topic": "E2 Mechanism: Stereochemistry",
    "difficulty_level": "Hard",
    "question_text": "When cis-1-bromo-4-tert-butylcyclohexane is treated with sodium ethoxide, it undergoes rapid E2 elimination. Under identical conditions, the trans isomer reacts extremely slowly. Why?",
    "question_smiles": "CC(C)(C)[C@H]1CC[C@@H](Br)CC1",
    "options": [
      {
        "option_id": "A",
        "text": "In the cis isomer, the bromine is in the axial position in the most stable conformation (with the tert-butyl group equatorial), satisfying the trans-diaxial requirement. The trans isomer must undergo a highly unfavorable ring flip to place the bromine axial.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The cis isomer is less stable, and the relief of ground-state strain upon ionization drives the reaction.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The trans isomer undergoes SN2 substitution instead of elimination.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The bromine in the trans isomer is sterically shielded by the tert-butyl group.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The tert-butyl group is a conformational anchor: it will not go axial, so it fixes the chair and with it the orientation of every other substituent. That turns a cis/trans pair into a clean test of the axial requirement for E2.",
      "approach": "Step 1: Cis-1,4: with tert-butyl equatorial, the bromine on the opposite carbon is axial.\nStep 2: An axial bromine has axial hydrogens on both adjacent carbons anti-periplanar to it. Ethoxide removes one and the alkene forms readily.\nStep 3: Trans-1,4: with tert-butyl equatorial, the bromine is equatorial and no beta-hydrogen is anti to it. Reaching the reactive chair would put the tert-butyl axial, costing more than 20 kJ/mol, so almost no molecules are in that conformation and the trans isomer reacts very slowly.",
      "note": "The trans isomer is not inert; it eliminates through the rarely populated diaxial chair, or substitutes instead. The point is the rate ratio, which is large because the population of the reactive conformer is tiny.",
      "options": {
        "A": "Correct. In the cis isomer the anchored chair puts bromine axial, satisfying anti-periplanar geometry; the trans isomer would have to place the tert-butyl axial to do the same.",
        "B": "Ground-state strain relief is the SN1 argument for the cis tosylate. E2 is concerted and does not ionize; the cis isomer wins here because its bromine is already axial.",
        "C": "The trans isomer does undergo some SN2, but that is a consequence of its slow elimination, not the reason for it. Both isomers face the same base.",
        "D": "The tert-butyl group is on the far side of the ring from the bromine, four carbons away. It does not shield the bromine; it dictates which position the bromine occupies."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A cyclohexane ring with a tert-butyl group and, on the opposite carbon, a bromine, drawn with wedges so that both groups are on the same face of the ring.",
    "_why": "SMILES was flat for a cis/trans question. Now cis, verified the same way as q34."
  },
  {
    "question_id": "ch11_q43_primary_kie_e2",
    "topic": "E2 Mechanism: Kinetics",
    "difficulty_level": "Medium",
    "question_text": "An E2 elimination reaction of 2-bromopropane with sodium hydroxide in water exhibits a primary kinetic isotope effect (kH/kD ≈ 6.7) when the beta-hydrogens are replaced with deuterium. What does this value indicate?",
    "question_smiles": "CC(Br)C",
    "options": [
      {
        "option_id": "A",
        "text": "The C-H bond is broken in the rate-determining step of the reaction.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The reaction proceeds via a carbocation intermediate.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "C-Br bond cleavage is the only rate-determining step.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The base is not involved in the rate-determining step.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A C-H bond breaks more easily than a C-D bond because it starts from a higher zero-point energy, and the difference shows in the rate only if that bond is breaking in the rate-determining step. A large kH/kD is therefore direct evidence of which bonds break in the slow step.",
      "approach": "Step 1: kH/kD of about 7 is a primary isotope effect - the size expected when the bond to the isotope is broken at the transition state.\nStep 2: The only C-H bonds labelled are the beta-hydrogens, so the beta-C-H bond must be breaking in the rate-determining step.\nStep 3: That is exactly the E2 picture: proton removal and loss of bromide occur together, in one step, and that step is the only step.",
      "note": "The same experiment on an E1 reaction gives a kH/kD near 1, because the cation forms before any C-H bond breaks. Ionization is the slow step, and deprotonation, where the isotope would matter, is fast and after it.",
      "options": {
        "A": "Correct. A primary isotope effect this large means the beta C-H bond is broken in the rate-determining step, as E2 requires.",
        "B": "A carbocation pathway would form the cation first and remove the proton afterwards; the isotope would then have almost no effect on the rate.",
        "C": "If only C-Br cleavage were rate-determining, replacing hydrogen with deuterium would not change the rate. The observed effect shows the C-H bond is involved too.",
        "D": "The base is what removes the hydrogen, and the hydrogen's isotope changes the rate. The base is therefore in the rate-determining step, which is the definition of E2."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-carbon chain with a bromine on the middle carbon; the methyl hydrogens are the ones replaced by deuterium in the experiment."
  },
  {
    "question_id": "ch11_q44_e1_mechanism_regio",
    "topic": "E1 Mechanism",
    "difficulty_level": "Easy",
    "question_text": "Solvolysis of 2-bromo-2-methylbutane in ethanol at elevated temperatures yields 2-methylbut-2-ene as the major elimination product. What is the mechanism of formation for this alkene?",
    "question_smiles": "CCC(C)(C)Br",
    "options": [
      {
        "option_id": "A",
        "text": "E1 pathway; the carbocation intermediate loses a beta-proton to the weak base ethanol in the fast step.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "E2 pathway; ethanol acts as a strong base to remove the beta-proton in a concerted step.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "SN1 pathway followed by dehydration of the resulting alcohol.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A free-radical elimination process.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A tertiary halide in a weakly basic, weakly nucleophilic solvent ionizes first and decides between substitution and elimination afterwards. The elimination that follows a carbocation is E1, and it gives the Zaitsev alkene because the more stable alkene has the lower-energy transition state for proton loss.",
      "approach": "Step 1: Ethanol is not basic enough to force E2 and not nucleophilic enough to displace bromide; the tertiary substrate ionizes to the cation in the slow step.\nStep 2: In a fast second step ethanol removes a beta-proton. There are two choices: from the CH2 (giving the trisubstituted alkene) or from a methyl (giving the disubstituted one).\nStep 3: Loss from the CH2 gives 2-methylbut-2-ene, the more stable alkene and the major elimination product, alongside the SN1 ether.",
      "note": "Heat matters. At room temperature the same solvolysis gives mostly the SN1 ether; raising the temperature shifts the balance toward the alkene, because elimination has the larger entropy gain. E1 and SN1 share the cation, and conditions decide how it is consumed.",
      "options": {
        "A": "Correct. The cation forms first, and ethanol removes a beta-proton from it in a fast step, favouring the more substituted alkene.",
        "B": "Ethanol is a very weak base, and E2 on a tertiary halide needs a strong one. The elimination here happens after ionization, not in the same step as it.",
        "C": "The alcohol would be the product of water, not ethanol, and dehydrating it would require acid and heat - a different reaction. The alkene comes straight from the cation.",
        "D": "No radical initiator or light is present, and the C-Br bond does not homolyse under solvolysis conditions. The intermediate is a cation."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a methyl group and a bromine both on the second carbon."
  },
  {
    "question_id": "ch11_q45_e1_rearrangement",
    "topic": "E1 Mechanism",
    "difficulty_level": "Hard",
    "question_text": "When 3-bromo-2,2-dimethylbutane is heated in ethanol (with no added base), a mixture of alkenes is formed. What is the structure of the major alkene product?",
    "question_smiles": "CC(C)(C)C(Br)C",
    "options": [
      {
        "option_id": "A",
        "text": "2,3-dimethylbut-2-ene",
        "smiles": "CC(C)=C(C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3,3-dimethylbut-1-ene",
        "smiles": "CC(C)(C)C=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,3-dimethylbut-1-ene",
        "smiles": "C=C(C)C(C)C",
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
      "context": "A carbocation formed in a solvolysis can rearrange before it loses a proton, and if it does the alkene comes from the rearranged cation. Here the first cation is secondary next to a quaternary carbon, which is the setup for a methyl shift.",
      "approach": "Step 1: Ionization gives a secondary cation at C3.\nStep 2: A methyl migrates from the quaternary C2 to C3, converting the secondary cation into a tertiary one on C2 with the skeleton now 2,3-dimethylbutane.\nStep 3: Ethanol removes a beta-proton. Loss from C3, now a CH bearing two methyls, gives the tetrasubstituted 2,3-dimethylbut-2-ene; loss from a methyl gives the disubstituted 2,3-dimethylbut-1-ene. The tetrasubstituted alkene is more stable and is the major product.",
      "note": "Without the rearrangement the best alkene available would be disubstituted, from the unrearranged cation losing a methyl proton. A product more substituted than the unrearranged skeleton allows is the sign that a shift occurred on the way.",
      "options": {
        "A": "Correct. Methyl shift to the tertiary cation, then loss of the proton that gives the tetrasubstituted alkene.",
        "B": "3,3-Dimethylbut-1-ene is the alkene from the unrearranged secondary cation losing a methyl proton. It is disubstituted and forms only if the shift is outrun, which it is not.",
        "C": "2,3-Dimethylbut-1-ene comes from the rearranged cation, but by loss of a methyl proton. It is the minor, less substituted product.",
        "D": "2-Methylpent-2-ene has a five-carbon chain. Neither the starting skeleton nor a single methyl shift can produce it; it is a misdrawn rearrangement."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with two methyl branches on the second carbon and a bromine on the third carbon."
  },
  {
    "question_id": "ch11_q46_competition_primary_halide",
    "topic": "Substitution vs. Elimination Competition",
    "difficulty_level": "Medium",
    "question_text": "Predict the major organic pathway and product when 1-bromobutane is treated with potassium tert-butoxide (KOtBu) in tert-butanol at room temperature.",
    "question_smiles": "CCCCBr",
    "options": [
      {
        "option_id": "A",
        "text": "E2 elimination to yield but-1-ene.",
        "smiles": "CCC=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "SN2 substitution to yield butyl tert-butyl ether.",
        "smiles": "CCCCOC(C)(C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "SN1 solvolysis to yield tert-butanol.",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "E1 elimination to yield but-2-ene.",
        "smiles": "C/C=C/C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A primary halide is the substrate most inclined to substitute, so pushing it toward elimination takes a base that cannot substitute. tert-Butoxide is that base: strong enough to remove a beta-proton and too bulky to reach the carbon.",
      "approach": "Step 1: 1-Bromobutane is primary; with ethoxide it would give mainly butyl ethyl ether by SN2.\nStep 2: tert-Butoxide's three methyls block the backside approach; substitution is slow.\nStep 3: Proton removal from C2 is unhindered, so E2 wins and but-1-ene is the major product. There is only one kind of beta-hydrogen, so no regiochemical choice arises.",
      "note": "The combination is used deliberately whenever a terminal alkene is wanted from a primary halide. The same reagent on 2-bromo-2-methylbutane gives the Hofmann alkene for the same reason - it takes the hydrogen it can reach.",
      "options": {
        "A": "Correct. The bulky base cannot substitute at the primary carbon but removes a C2 proton readily, giving but-1-ene by E2.",
        "B": "Butyl tert-butyl ether would need tert-butoxide to attack the carbon from behind, which its bulk prevents. That ether forms in only trace amounts.",
        "C": "A primary halide does not ionize, and tert-butanol is already the solvent, not a product. There is no SN1 here.",
        "D": "E1 needs a cation, which a primary halide cannot supply, and but-2-ene would require the double bond to move away from the carbon that held the bromine. E2 forms the double bond adjacent to it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Four carbons in a row with a bromine on the terminal carbon."
  },
  {
    "question_id": "ch11_q47_competition_secondary_weak",
    "topic": "Substitution vs. Elimination Competition",
    "difficulty_level": "Medium",
    "question_text": "Solvolysis of 2-iodopropane in water at room temperature yields primarily what product, and by what mechanism?",
    "question_smiles": "CC(I)C",
    "options": [
      {
        "option_id": "A",
        "text": "Propan-2-ol via an SN1 mechanism.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propene via an E2 mechanism.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Propan-2-ol via an SN2 mechanism.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Diisopropyl ether via an E1 mechanism.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Water is both a poor nucleophile and a very weak base, so with a secondary halide neither bimolecular pathway is fast. Solvolysis then proceeds through ionization, helped by iodide being the best leaving group of the halogens and by water's high polarity.",
      "approach": "Step 1: Water is too weak a base for E2 and too weak a nucleophile to displace iodide from a secondary carbon at a useful rate.\nStep 2: The C-I bond ionizes to the secondary propan-2-yl cation, the rate-determining step.\nStep 3: At room temperature capture by water outruns proton loss, so propan-2-ol is the major product by SN1, with a little propene from E1.",
      "note": "Secondary solvolyses are the borderline case, and the details - ion pairs, solvent participation - are more complicated than a free cation. The textbook classification is SN1, and it is the right answer to a question at this level; the point to carry is that a weak nucleophile in a protic solvent means ionization first.",
      "options": {
        "A": "Correct. Ionization of the secondary iodide followed by capture by water gives propan-2-ol through the SN1 pathway.",
        "B": "Propene would be an E2 product, and E2 needs a strong base. Water is not one; the small amount of alkene that forms comes by E1 from the cation.",
        "C": "The product is right but the mechanism is not: water is far too weak a nucleophile to displace iodide from a secondary carbon in a concerted step. The reaction waits for ionization.",
        "D": "Diisopropyl ether would need propan-2-ol to attack the cation, and E1 gives an alkene, not an ether. With water in vast excess the alcohol is captured before it can react again."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-carbon chain with an iodine on the middle carbon.",
    "_why": "Options A and C both drew propan-2-ol - the same picture under two mechanism claims. Option structures dropped."
  },
  {
    "question_id": "ch11_q48_competition_secondary_strong",
    "topic": "Substitution vs. Elimination Competition",
    "difficulty_level": "Medium",
    "question_text": "Predict the major organic product when 2-chlorobutane is treated with sodium ethoxide in ethanol at 60 °C.",
    "question_smiles": "CCC(Cl)C",
    "options": [
      {
        "option_id": "A",
        "text": "trans-but-2-ene (formed via E2)",
        "smiles": "C/C=C/C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-ethoxybutane (formed via SN2)",
        "smiles": "CCC(OCC)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "but-1-ene (formed via E2)",
        "smiles": "CCC=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "cis-but-2-ene (formed via E2)",
        "smiles": "C/C=C\\C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A secondary halide with a strong, small base is the case where SN2 and E2 compete most closely, and the balance is tipped by temperature. Heating favours elimination, so at 60 °C the alkene dominates, and among the alkenes the Zaitsev product with (E) geometry leads.",
      "approach": "Step 1: Ethoxide is strong and unhindered, so both SN2 and E2 are available on the secondary carbon.\nStep 2: Elevated temperature favours the pathway with the larger entropy gain - elimination, which makes three product species from two.\nStep 3: Among the E2 products, removing a C3 hydrogen gives but-2-ene (Zaitsev) and the (E) isomer forms through the less crowded transition state, so (E)-but-2-ene is the major product.",
      "note": "At room temperature the same reaction gives a substantial share of 2-ethoxybutane. The temperature dependence is a general lever: heat a substitution-elimination mixture and the alkene share rises.",
      "options": {
        "A": "Correct. Strong base, secondary halide and heat give E2, and the (E)-2-alkene is the most stable alkene available.",
        "B": "2-Ethoxybutane is the SN2 product and forms in a minor amount. Heat tilts the competition toward elimination for a secondary substrate.",
        "C": "But-1-ene is the Hofmann product; it needs a bulky base. Ethoxide reaches the C3 hydrogens that give the internal alkene.",
        "D": "(Z)-But-2-ene forms too, but the eclipsed methyls in its transition state make it the minor geometric isomer."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a chlorine on the second carbon."
  },
  {
    "question_id": "ch11_q49_competition_tertiary_nucleophile",
    "topic": "Substitution vs. Elimination Competition",
    "difficulty_level": "Hard",
    "question_text": "Predict the major pathway when 2-iodo-2-methylpropane is treated with sodium azide in ethanol.",
    "question_smiles": "CC(C)(I)C",
    "options": [
      {
        "option_id": "A",
        "text": "SN1: ionization to the tert-butyl cation, which azide captures to give 2-azido-2-methylpropane, with some 2-methylpropene by E1.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "SN2: azide displaces iodide by backside attack in a single step.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "E2: azide removes a beta-hydrogen and 2-methylpropene is the only product.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "No reaction: a tertiary iodide is inert to azide.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Azide is an unusual reagent: an excellent nucleophile and yet a weak base (HN3 pKa about 4.7). On a tertiary halide that combination rules out E2, and the tertiary carbon rules out SN2, so what remains is ionization followed by capture - and azide captures cations very efficiently.",
      "approach": "Step 1: Tertiary carbon: no backside approach, so SN2 is out.\nStep 2: Weak base: E2 needs a strong base, so elimination in the same step as C-I cleavage is out too.\nStep 3: The iodide ionizes to the tert-butyl cation in ethanol. Azide, present in high concentration and far more reactive toward cations than the solvent, traps it to give the tertiary azide. Some cation loses a proton to give 2-methylpropene by E1, and a little is captured by ethanol.",
      "note": "Azide's speed at trapping cations is used as a clock in mechanism studies: the ratio of azide to solvent product measures how long the cation lived. The same reagent on a primary halide is a textbook SN2 nucleophile, which is why substrate always comes first in the analysis.",
      "options": {
        "A": "Correct. The tertiary iodide ionizes, and the strongly nucleophilic but weakly basic azide captures the cation; elimination is a minor side path.",
        "B": "Backside attack at a tertiary carbon is blocked by three alkyl groups, whatever the nucleophile. The same product can form, but only by capture of the cation.",
        "C": "Azide is too weak a base to remove a beta-proton in an E2 step. The alkene that does form comes from the cation, and it is the minor product.",
        "D": "A tertiary iodide is the most easily ionized of all simple alkyl halides. It reacts readily - just not by SN2."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Three methyl groups on one carbon that also carries an iodine.",
    "_why": "The old key claimed the products were the ethyl ether and the alkene, ignoring the azide - which traps the tert-butyl cation far faster than ethanol does. Rebuilt as a pathway question with azide capture as the key; two options would have shared a product structure, so none is drawn."
  },
  {
    "question_id": "ch11_q50_competition_temperature_entropy",
    "topic": "Substitution vs. Elimination Competition",
    "difficulty_level": "Medium",
    "question_text": "Why does increasing the temperature of a reaction mixture containing a secondary alkyl halide and a strong base shift the product distribution in favor of E2 elimination over SN2 substitution?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Elimination reactions yield more molecules of product than reactants, leading to a positive change in entropy (ΔS > 0); the -TΔS term makes the free energy (ΔG) of elimination more favorable at higher temperatures.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "High temperature increases the base strength and nucleophilicity of the base.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "High temperature destabilizes the transition state of the SN2 reaction by increasing steric hindrance.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The activation energy of SN2 is higher than that of E2, so E2 is only accessible at high temperatures.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Substitution and elimination differ in a way that has nothing to do with sterics or basicity: elimination breaks one molecule into more pieces. That entropy difference is what temperature acts on, and it is why heating a reaction mixture shifts the products toward the alkene.",
      "approach": "Step 1: SN2 converts two species into two; its entropy change is small.\nStep 2: E2 converts two species into three - alkene, conjugate acid of the base, and halide - so its entropy change is positive.\nStep 3: In ΔG = ΔH - TΔS the entropy term grows with temperature, and the same applies to the activation free energies of the competing paths. At higher T the elimination path is favoured more, and the alkene fraction rises.",
      "note": "The effect is used routinely: an SN2 reaction that is giving too much alkene is run cold, and an elimination that is giving too much ether is heated. The argument is about the activation parameters of the two competing transition states, but the entropy of the products is the easy way to remember its direction.",
      "options": {
        "A": "Correct. Elimination produces more molecules, so its entropy change is positive, and the -TΔS term favours it increasingly as temperature rises.",
        "B": "Temperature does not change a base's strength or nucleophilicity in any way that favours one pathway; both properties are intrinsic to the reagent.",
        "C": "Steric hindrance is a property of the molecules, not of temperature; heating does not make a carbon more crowded.",
        "D": "Activation energies of SN2 and E2 are comparable, and both pathways are accessible at all ordinary temperatures. The shift is in their ratio, not in whether one is possible."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "Drew 2-bromobutane beside a general thermodynamic question that names no substrate - decorative. Dropped."
  },
  {
    "question_id": "ch11_q_dynamic_sn1_sn2",
    "topic": "Nucleophilic Substitution Mechanisms",
    "difficulty_level": "Hard",
    "question_text": "Match each alkyl bromide to the substitution behaviour it shows toward a strong nucleophile such as cyanide in DMF and a weak nucleophile such as water.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CBr",
        "correctAnswer": "SN2 only (methyl substrate)",
        "alt": "A single carbon bearing a bromine."
      },
      {
        "smiles": "CC(C)(C)Br",
        "correctAnswer": "SN1 only (tertiary substrate)",
        "alt": "A central carbon bearing three methyl groups and a bromine."
      },
      {
        "smiles": "CC(C)Br",
        "correctAnswer": "SN2 with cyanide, SN1 with water (secondary substrate)",
        "alt": "A three-carbon chain with a bromine on the middle carbon."
      },
      {
        "smiles": "C=CBr",
        "correctAnswer": "No substitution by either mechanism (vinylic substrate)",
        "alt": "Two carbons joined by a double bond, one of them bearing a bromine."
      }
    ],
    "match_options": [
      "SN2 only (methyl substrate)",
      "SN1 only (tertiary substrate)",
      "SN2 with cyanide, SN1 with water (secondary substrate)",
      "No substitution by either mechanism (vinylic substrate)",
      "SN1 with cyanide, SN2 with water",
      "E2 only"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect pathway mapping",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Substrate structure is the first thing to read off a substitution problem, because it decides which mechanism is even available. Methyl and primary carbons are open to backside attack and cannot support a cation; tertiary carbons are the reverse; secondary carbons can do either and let the nucleophile decide; sp2 carbons do neither.",
      "approach": "Bromomethane has no alkyl groups to hinder the nucleophile or to stabilize a cation, so it reacts only by SN2. 2-Bromo-2-methylpropane is the mirror case: three alkyl groups block the backside and stabilize the tert-butyl cation, so it reacts only by SN1. 2-Bromopropane sits between them: a bare cyanide in DMF attacks the secondary carbon by SN2, while water in a protic medium waits for slow ionization and captures the secondary cation. Bromoethene is vinylic: the sp2 carbon holds its bromine tightly, backside attack would have to come through the pi bond, and a vinyl cation is too unstable to form.",
      "note": "The secondary case is the one to remember as conditional rather than fixed. The same alkyl bromide switches mechanism when the nucleophile and solvent change, which is why the summary tables in this chapter list secondary substrates under both headings.",
      "options": {
        "A": "Methyl goes by SN2 only, tertiary by SN1 only, secondary by whichever the nucleophile and solvent select, and the vinylic bromide by neither.",
        "B": "Recheck the secondary substrate first, since it is the only one whose answer depends on conditions, then confirm that the vinylic carbon was not treated as if it were an ordinary primary one."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "Stem rewritten to name the two conditions the categories refer to. The vinylic entry was 1-bromoprop-1-ene drawn flat; bromoethene has no geometry to omit. Two decoys added so the grid is not solvable by elimination."
  },
  {
    "question_id": "ch11_q56_roadmap_propanol_to_butanenitrile",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Medium",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
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
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "PBr3"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "NaCN, DMF"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propan-1-ol, B: 1-bromopropane, C: butanenitrile",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: propan-1-ol, B: 1-bromopropane, C: propanenitrile",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: propan-1-ol, B: 2-bromopropane, C: 2-methylpropanenitrile",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: propan-1-ol, B: 1-bromopropane, C: propan-1-amine",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The two steps are the standard way to lengthen a chain by one carbon: convert the alcohol into a halide with a good leaving group, then let cyanide displace it. Each step is one this chapter has already met on its own; the roadmap asks you to keep count of carbons across both.",
      "approach": "PBr3 converts propan-1-ol into 1-bromopropane through the dibromophosphite ester and an SN2 displacement by bromide, so B keeps its three carbons and its bromine on the end carbon. Cyanide in DMF then displaces bromide from that primary carbon by SN2. The nucleophile brings a carbon of its own, so C is a four-carbon nitrile, butanenitrile, with the CN counted as C1.",
      "note": "Naming is where this goes wrong most often. Nitrile nomenclature counts the nitrile carbon as part of the chain, so propyl cyanide is butanenitrile, not propanenitrile. A student who forgets that names C one carbon short.",
      "options": {
        "A": "PBr3 gives the primary bromide without rearrangement, and cyanide adds a carbon to give the four-carbon nitrile.",
        "B": "Propanenitrile has three carbons in total. Cyanide brought a carbon with it, and nitrile names count that carbon, so the product is butanenitrile.",
        "C": "2-Bromopropane and the branched nitrile would need the bromine to move to the middle carbon. PBr3 substitutes by SN2 on the carbon that carried the hydroxyl and never generates a cation to rearrange.",
        "D": "Propan-1-amine would come from a nitrogen nucleophile such as azide followed by reduction. Cyanide delivers carbon, not nitrogen; the nitrogen it brings ends up as the nitrile."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "The one graph behind 12 shuffled roadmap items. Rebuilt the Ch 9 way: only A is drawn, B and C are unknowns, every option agrees on A. Distractors: the one-carbon-short name, the rearranged bromide, and the amine a student expects from a nitrogen-containing nucleophile."
  },
  {
    "question_id": "ch11_q2_sn2_stereochemistry",
    "topic": "Nucleophilic Substitution (SN2)",
    "difficulty_level": "Medium",
    "question_text": "Predict the major organic product of the reaction between (S)-2-bromobutane and sodium cyanide (NaCN) in dimethylformamide (DMF) solvent.",
    "question_smiles": "CC[C@H](C)Br",
    "options": [
      {
        "option_id": "A",
        "text": "(R)-2-Methylbutanenitrile (concerted backside attack)",
        "smiles": "CC[C@@H](C)C#N",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(S)-2-Methylbutanenitrile (retention of configuration)",
        "smiles": "CC[C@H](C)C#N",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Racemic 2-Methylbutanenitrile (carbocation intermediate)",
        "smiles": "CCC(C)C#N",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(E)-2-Butene (competing E2 elimination)",
        "smiles": "C/C=C/C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Substrate, nucleophile and solvent all point one way here: a secondary halide, a strong small nucleophile, and a polar aprotic solvent give SN2, and SN2 inverts the carbon it attacks. The only work left is translating that inversion into an R/S label.",
      "approach": "Step 1: Cyanide in DMF is a bare, strong nucleophile; the secondary carbon is accessible; no cation forms.\nStep 2: The carbon of cyanide attacks anti to the C-Br bond, and the three other groups fold through like an umbrella. Geometry is inverted.\nStep 3: Priorities: Br > ethyl > methyl > H before, CN > ethyl > methyl > H after. Same order, so the inverted geometry carries the opposite label: (R)-2-methylbutanenitrile.",
      "note": "The nitrile is named on a four-carbon chain because the CN carbon counts as C1; the stereocentre is C2 and bears the methyl. Getting the name right is part of getting the descriptor right, because the priorities are assigned on the product's substituents, not the reactant's.",
      "options": {
        "A": "Correct. Backside attack inverts the centre, and with the priority order preserved the (S) bromide becomes the (R) nitrile.",
        "B": "Retention would mean the nucleophile entered from the same side the bromide left. SN2 never does that; the inversion is the mechanism's signature.",
        "C": "Racemization needs a planar cation. A secondary bromide with cyanide in DMF reacts in one concerted step and gives one enantiomer.",
        "D": "(E)-But-2-ene would be an E2 product, and E2 needs a strong base. Cyanide is a good nucleophile but a weak base, so substitution dominates."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a bromine on C2, drawn with a wedge to fix the configuration.",
    "_why": "Feedback carried LaTeX dollar-sign markup from a different generator and a result string whose SMILES was the (S) product. Rewritten; the option SMILES were already right (rdCIPLabeler: substrate S, key R)."
  },
  {
    "question_id": "ch11_q51_e2_2_bromopropane_koh",
    "topic": "E2 Elimination",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product when 2-bromopropane is heated with potassium hydroxide in ethanol?",
    "reaction_scheme": {
      "reactants": [
        "CC(C)Br"
      ],
      "reagents": "KOH",
      "conditions": "ethanol, heat",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "propene",
        "smiles": "C=CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "propan-2-ol",
        "smiles": "CC(C)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-ethoxypropane",
        "smiles": "CCOC(C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "propyne",
        "smiles": "CC#C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A secondary alkyl halide with a strong base in a protic solvent at elevated temperature is the textbook setting for E2. Hydroxide and the ethoxide it generates in ethanol are both strong bases, and heat tips a secondary substrate further toward elimination.",
      "approach": "Step 1: Classify the substrate - 2-bromopropane is secondary, so both substitution and elimination are open.\nStep 2: Classify the reagent - KOH in ethanol is a strong base (largely ethoxide by equilibrium), which favours the bimolecular pathways over ionization.\nStep 3: Heat favours elimination over substitution for a secondary halide with a strong base. The base removes a hydrogen from either methyl group anti to the departing bromide, and the only alkene the skeleton can give is propene.",
      "note": "Regiochemistry is not a question here: both beta-carbons are identical methyls, so Zaitsev versus Hofmann never arises. Change the substrate to 2-bromobutane and it does - the internal alkene then dominates with a small base.",
      "options": {
        "A": "Correct. Strong base, secondary halide, heat: E2 removes a beta-hydrogen and bromide together, and propene is the only alkene 2-bromopropane can form.",
        "B": "Propan-2-ol would come from hydroxide displacing bromide by SN2. That path competes at room temperature, but with a strong base and heat a secondary halide gives mainly the alkene.",
        "C": "2-Ethoxypropane is the product of ethoxide substitution and does form in small amounts. At elevated temperature elimination outpaces it - the base finds a beta-hydrogen faster than it finds the hindered secondary carbon.",
        "D": "Propyne would need two eliminations from a dihalide. 2-Bromopropane carries one leaving group, so one elimination is all it can undergo."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "reactant_alts": [
      "A three-carbon chain with a bromine on the middle carbon."
    ],
    "_why": "Survivor of the 22-copy 2-bromopropane/KOH family. Junk distractors replaced by the SN2 alcohol, the ethoxide ether, and the alkyne a student reaches by eliminating twice."
  },
  {
    "question_id": "ch11_q52_e1_tert_butanol_dehydration",
    "topic": "E1 Elimination",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product when 2-methylpropan-2-ol is heated with concentrated sulfuric acid?",
    "reaction_scheme": {
      "reactants": [
        "CC(C)(C)O"
      ],
      "reagents": "H2SO4 (conc.)",
      "conditions": "heat",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-methylpropene",
        "smiles": "C=C(C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "tert-butyl hydrogen sulfate",
        "smiles": "CC(C)(C)OS(=O)(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "di-tert-butyl ether",
        "smiles": "CC(C)(C)OC(C)(C)C",
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
      "context": "Acid-catalyzed dehydration of a tertiary alcohol is E1: protonation turns the hydroxyl into a water leaving group, ionization gives a tertiary carbocation, and loss of a beta-proton makes the alkene. McMurry introduces the reaction among alkene preparations and points back to this chapter for the mechanism.",
      "approach": "Step 1: Sulfuric acid protonates the hydroxyl oxygen; the leaving group is now water rather than hydroxide.\nStep 2: Water leaves to give the tert-butyl cation, the rate-determining step, and the reason a tertiary alcohol dehydrates under conditions that leave a primary alcohol untouched.\nStep 3: Any of the nine beta-hydrogens is lost to water or bisulfate. All three methyls are equivalent, so the only alkene is 2-methylpropene, which distils out as it forms and pulls the equilibrium over.",
      "note": "The order of ease is tertiary > secondary > primary because the cation's stability sets the barrier. Primary alcohols need the harsher route through the alkyl hydrogen sulfate, and secondary ones often rearrange on the way; the tertiary case is the clean one.",
      "options": {
        "A": "Correct. Protonation, loss of water to the tertiary cation, then loss of a methyl proton: E1 with no regiochemical choice to make, since every beta-hydrogen is equivalent.",
        "B": "tert-Butyl hydrogen sulfate is what the cation gives if bisulfate captures it, and at low temperature some forms. Heat drives the reversible capture back and the alkene distils away.",
        "C": "Di-tert-butyl ether would need a second molecule of the alcohol to attack the cation. Two tertiary groups on one oxygen is too crowded to form, and the ether route is for primary alcohols at moderate temperature.",
        "D": "2-Methylpropane would require replacing oxygen with hydrogen, a reduction. Sulfuric acid removes the elements of water; nothing present can deliver a hydride."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "reactant_alts": [
      "A central carbon bearing three methyl groups and a hydroxyl group."
    ],
    "_why": "Survivor of the 27-copy tBuOH/H2SO4 family. Stays in Ch 11 as the E1 mechanism item; McMurry files the preparative dehydration to the alkene and alcohol chapters but cross-references 11.10 for the mechanism."
  },
  {
    "question_id": "ch11_q54_sn2_2_bromopropane_cyanide",
    "topic": "SN2 Substitution",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product when 2-bromopropane is treated with sodium cyanide in DMF?",
    "reaction_scheme": {
      "reactants": [
        "CC(C)Br"
      ],
      "reagents": "NaCN",
      "conditions": "DMF, 25 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-methylpropanenitrile",
        "smiles": "CC(C)C#N",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "propene",
        "smiles": "C=CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-isocyanopropane",
        "smiles": "CC(C)[N+]#[C-]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "butanenitrile",
        "smiles": "CCCC#N",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Cyanide is the strong, small nucleophile and DMF the polar aprotic solvent that together make SN2 the default even on a secondary carbon. The carbon of cyanide attacks, and the chain grows by one carbon - the reason this reaction earns a place in synthesis.",
      "approach": "Step 1: 2-Bromopropane is secondary: hindered enough that a bulky or strongly basic reagent would eliminate, open enough for a small nucleophile to reach the carbon.\nStep 2: DMF solvates Na+ and leaves cyanide bare; a bare anion is a stronger nucleophile than the same anion hydrogen-bonded in water or ethanol.\nStep 3: Cyanide's carbon attacks from the side opposite bromine, bromide leaves in the same step, and the nitrile carbon sits where bromine was: 2-methylpropanenitrile.",
      "note": "Cyanide is a far better nucleophile than base - HCN has a pKa near 9, so CN- is roughly as basic as an amine, not an alkoxide. That is why a secondary halide gives substitution here and elimination with ethoxide. Hydrolysis of the nitrile afterwards is the classic way to reach a carboxylic acid with one more carbon.",
      "options": {
        "A": "Correct. Backside attack by the carbon of cyanide at the secondary carbon, in a solvent that leaves the anion unsolvated, gives the nitrile with the CN group on C2.",
        "B": "Propene would be the E2 product, and it would need a strong base. Cyanide is a weak base (HCN pKa about 9), so it substitutes rather than removing a beta-hydrogen.",
        "C": "2-Isocyanopropane is the product of attack through nitrogen. Cyanide is ambident, but with an alkali-metal salt in a polar aprotic solvent the carbon end reacts; nitrogen attack needs silver cyanide.",
        "D": "Butanenitrile has the CN on a terminal carbon, which would require the nucleophile to reach C1. SN2 places the nucleophile precisely where the leaving group was - on the middle carbon."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "reactant_alts": [
      "A three-carbon chain with a bromine on the middle carbon, drawn as a V."
    ],
    "_why": "Survivor of the 15-copy 2-bromopropane/NaCN family. Distractors: the E2 alkene, the isonitrile from N-attack, and the wrong-carbon nitrile."
  },
  {
    "question_id": "ch11_q55_sn1_tert_butyl_chloride_water",
    "topic": "SN1 Substitution",
    "difficulty_level": "Easy",
    "question_text": "What is the major organic product when 2-chloro-2-methylpropane is stirred in aqueous acetone at room temperature?",
    "reaction_scheme": {
      "reactants": [
        "CC(C)(C)Cl"
      ],
      "reagents": "H2O",
      "conditions": "acetone, 25 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-methylpropan-2-ol",
        "smiles": "CC(C)(C)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-methylpropene",
        "smiles": "C=C(C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-methylpropan-1-ol",
        "smiles": "CC(C)CO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "di-tert-butyl ether",
        "smiles": "CC(C)(C)OC(C)(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A tertiary halide in a weakly nucleophilic, polar protic medium is the defining SN1 case. Water cannot attack a tertiary carbon from the back, so the reaction waits for the C-Cl bond to ionize on its own and then captures the cation.",
      "approach": "Step 1: Ionization is the slow step: the C-Cl bond breaks to give the tert-butyl cation, which three alkyl groups stabilize enough to make this feasible at room temperature.\nStep 2: Water, present in large excess, attacks the planar cation to give the oxonium ion.\nStep 3: A second water molecule removes the proton, leaving 2-methylpropan-2-ol. Acetone is there only to keep the halide dissolved.",
      "note": "The rate depends on the halide alone, and a faster reaction in a wetter acetone mixture reflects the more polar solvent stabilizing the ionizing transition state, not water acting as a nucleophile in the slow step. Raising the temperature shifts some product toward the alkene by E1.",
      "options": {
        "A": "Correct. Ionization to the tert-butyl cation, capture by water, and loss of a proton give the tertiary alcohol; hydroxide never needed to displace anything.",
        "B": "2-Methylpropene is the E1 product from the same cation and does form as a minor component. At room temperature capture by the abundant water outruns loss of a beta-proton.",
        "C": "2-Methylpropan-1-ol places the hydroxyl on a primary carbon that never carried the positive charge. The cation forms where chloride left, on the central carbon, and the nucleophile goes there.",
        "D": "Di-tert-butyl ether would require the alcohol product to attack a second cation. Two tertiary groups on one oxygen is too crowded, and water outnumbers the alcohol by far."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "reactant_alts": [
      "A central carbon bearing three methyl groups and a chlorine."
    ],
    "_why": "Survivor of the 11-copy tBuCl/H2O family. Distractors: the E1 alkene, the wrong-carbon alcohol, and the ether from alcohol capture."
  },
  {
    "question_id": "ch11_q46_nucleophilicity_solvent",
    "topic": "Electrophiles vs Nucleophiles",
    "difficulty_level": "Hard",
    "question_text": "In a polar protic solvent such as methanol ($CH_3OH$), what is the correct order of nucleophilicity for the halide anions?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "F⁻ > Cl⁻ > Br⁻ > I⁻",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "I⁻ > Br⁻ > Cl⁻ > F⁻",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Cl⁻ > Br⁻ > I⁻ > F⁻",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "All halides have equal nucleophilicity in protic solvents.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Halide nucleophilicity in a protic solvent is decided by solvation, not basicity. Methanol hydrogen-bonds most strongly to the smallest, most charge-dense anion, and an anion has to shed that solvent shell before it can attack.",
      "approach": "Step 1: Fluoride is small and its charge concentrated; methanol solvates it tightly and it reacts slowly.\nStep 2: Iodide is large and its charge diffuse; it is weakly solvated and its polarizable electron cloud reaches the carbon early.\nStep 3: Nucleophilicity therefore rises down the group: I⁻ > Br⁻ > Cl⁻ > F⁻, the reverse of basicity.",
      "note": "Switch to DMF or DMSO and the order reverses to F⁻ > Cl⁻ > Br⁻ > I⁻, because there is no hydrogen bonding to penalize fluoride. An answer to any nucleophilicity question has to begin by naming the solvent.",
      "options": {
        "A": "This is the order in polar aprotic solvents, where fluoride is bare and its basicity shows. In methanol fluoride is the most heavily solvated and the slowest.",
        "B": "Correct. In methanol the large, weakly solvated, polarizable iodide is the best nucleophile and the tightly solvated fluoride the worst.",
        "C": "Chloride is more strongly solvated than bromide or iodide and does not lead the series. This order ranks the others by electronegativity, which is not the governing factor.",
        "D": "The four halides differ in size by a factor of two and in solvation energy by hundreds of kilojoules; their nucleophilicities differ by orders of magnitude."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "The Ch 6 refiling the instructor said to keep. Drew methanol beside a question about four anions - decorative, dropped. Option C was a scrambled order with no misreading behind it; now the electronegativity order. LaTeX markup replaced with plain text."
  },
  {
    "question_id": "ch11_q57_williamson_route_choice",
    "topic": "SN2 Mechanism: Williamson Ether Synthesis",
    "difficulty_level": "Medium",
    "question_text": "Which combination of reagents is the better route to 2-ethoxy-2-methylpropane (tert-butyl ethyl ether) by the Williamson ether synthesis?",
    "question_smiles": "CCOC(C)(C)C",
    "structure_alt": "An oxygen bonded to an ethyl group on one side and to a carbon bearing three methyl groups on the other.",
    "options": [
      {
        "option_id": "A",
        "text": "Sodium tert-butoxide and bromoethane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Sodium ethoxide and 2-bromo-2-methylpropane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethanol and 2-methylpropan-2-ol with concentrated sulfuric acid, heated",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Sodium ethoxide and 2-methylpropan-2-ol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Williamson synthesis is an SN2 reaction, and every rule from this chapter applies to it: the alkoxide is the nucleophile, the halide is the electrophile, and the carbon under attack has to be one a nucleophile can reach. An unsymmetrical ether can be split into alkoxide and halide two ways, and usually only one of them works.",
      "approach": "Step 1: Disconnect the target at the C-O bond both ways: tert-butoxide plus an ethyl halide, or ethoxide plus a tert-butyl halide.\nStep 2: Apply the SN2 substrate rule. Bromoethane is primary and open to backside attack; 2-bromo-2-methylpropane is tertiary and cannot be attacked at all.\nStep 3: An alkoxide is a strong base, so with the tertiary halide it removes a beta-hydrogen instead and the product is 2-methylpropene. The working route is tert-butoxide with bromoethane, bulky nucleophile and all - the hindrance that matters is on the carbon being attacked, not on the oxygen.",
      "note": "The alkoxide is made first, from the alcohol with sodium hydride or sodium metal, and the halide is added afterwards. Ch 18 takes the reaction further - intramolecular versions, tosylates as the electrophile, and the alkoxymercuration route to the ethers Williamson cannot make.",
      "options": {
        "A": "Correct. Put the leaving group on the primary carbon, where SN2 is fast, and let the hindered tert-butoxide be the nucleophile; a bulky nucleophile still reaches an unhindered CH2.",
        "B": "Ethoxide meeting a tertiary bromide gives E2, not SN2 - the tertiary carbon is blocked from behind and the alkoxide is a strong base. The product is 2-methylpropene, with almost no ether.",
        "C": "Acid-catalyzed ether formation works for two molecules of a primary alcohol. A tertiary alcohol in hot sulfuric acid ionizes and loses a proton instead, giving the alkene rather than any ether.",
        "D": "An alcohol is not an electrophile: hydroxide is far too poor a leaving group to be displaced by an alkoxide. Without converting the tertiary OH to a halide or sulfonate nothing happens, and even then the tertiary carbon would eliminate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "Added 2026-09-01 at the instructor's direction: Williamson synthesis is discussed briefly in CHEM 261, so Ch 11 carries the simple route-choice version and Ch 18 keeps the detailed intramolecular item. Distractors: the tertiary-halide pairing that eliminates, the acid route that dehydrates, and the alcohol-as-electrophile misreading."
  }
];
