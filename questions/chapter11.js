// McMurry Chapter 11 questions
const CHAPTER_11_QUESTIONS = [
  {
    "question_id": "ch11_q1_sn2_kinetics_rate_law",
    "topic": "SN2 Mechanism: Kinetics",
    "difficulty_level": "Easy",
    "question_text": "An SN2 reaction between (R)-2-bromobutane and sodium cyanide is conducted in dimethyl sulfoxide (DMSO). If the concentration of (R)-2-bromobutane is doubled and the concentration of sodium cyanide is tripled, what is the effect on the initial rate of the reaction?",
    "question_smiles": "CC[C@@H](Br)C",
    "options": [
      {
        "option_id": "A",
        "text": "The initial rate increases by a factor of 6.",
        "smiles": "CC[C@H](C#N)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The initial rate increases by a factor of 2.",
        "smiles": "CC[C@H](C#N)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The initial rate increases by a factor of 3.",
        "smiles": "CC[C@H](C#N)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The initial rate remains unchanged.",
        "smiles": "CC[C@H](C#N)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the bimolecular nature and second-order rate law of the SN2 mechanism.",
      "process": "Step 1: Identify that the SN2 mechanism is a concerted, single-step process where both the electrophilic substrate and the nucleophile are involved in the rate-determining step.\nStep 2: State the second-order rate equation: Rate = k[substrate][nucleophile].\nStep 3: Calculate the rate change: rate is proportional to [2 * substrate] * [3 * nucleophile] = 6 * original rate.",
      "result": "The initial rate of the reaction increases by a factor of 6."
    }
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
        "smiles": "CCCI",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The superior nucleophilicity of the iodide ion relative to the chloride ion in all organic solvents.",
        "smiles": "CCCI",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The significantly higher bond dissociation energy of the carbon-iodine bond compared to the carbon-chlorine bond.",
        "smiles": "CCCI",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The rapid thermal decomposition of acetone which destabilizes the alkyl chloride starting material.",
        "smiles": "CCCI",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question explores how Le Chatelier's principle is used to drive a reversible SN2 reaction to completion.",
      "process": "Step 1: Write the equation for the halogen exchange reaction: R-Cl + NaI <=> R-I + NaCl.\nStep 2: Note that both NaI and NaCl are ionic salts, but NaI is soluble in acetone whereas NaCl is highly insoluble.\nStep 3: As NaCl is generated, it precipitates out of the acetone solution as a solid. According to Le Chatelier's principle, removing a product from solution drives the equilibrium continuously to the right.",
      "result": "The precipitation of insoluble NaCl drives the Finkelstein reaction to completion."
    }
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
        "smiles": "CCN=[N+]=[N-]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The reaction rate decreases because methanol is more polar and stabilizes the partial charges of the transition state.",
        "smiles": "CCN=[N+]=[N-]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The reaction rate remains unchanged because the solvent only stabilizes the starting material and does not interact with the transition state.",
        "smiles": "CCN=[N+]=[N-]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The reaction rate decreases because DMSO coordinates to the bromoethane, sterically blocking the backside attack of azide.",
        "smiles": "CCN=[N+]=[N-]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the effect of polar protic versus polar aprotic solvents on SN2 reaction kinetics.",
      "process": "Step 1: Identify methanol as a polar protic solvent that contains hydrogen bond donors (O-H). It forms a strong solvation shell around small anionic nucleophiles like azide (N3-), stabilizing them and lowering their ground-state energy.\nStep 2: Identify DMSO as a polar aprotic solvent. It solvates the cation (Na+) well but cannot form hydrogen bonds with the anion (N3-).\nStep 3: In DMSO, the anion is desolvated ('naked'), which raises its ground-state energy, thereby lowering the activation energy (Ea) and dramatically accelerating the reaction rate.",
      "result": "The rate increases in DMSO due to the desolvation of the nucleophilic anion."
    }
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
      "context": "This question tests the stereochemical consequences of a two-step sequence involving alcohol activation followed by SN2 substitution.",
      "process": "Step 1: Mesylation (reaction of alcohol with MsCl in pyridine) occurs via nucleophilic attack of the alcohol oxygen on the sulfur atom, displacing chloride. The C-O bond at the chiral center is NOT broken, so the stereochemical configuration is retained, yielding (R)-2-octyl mesylate.\nStep 2: Reaction of (R)-2-octyl mesylate with iodide (I-) occurs via an SN2 mechanism. The iodide attacks from the backside of the C-O bond, displacing the mesylate leaving group. This step causes complete inversion of configuration at the stereocenter.\nStep 3: Net result of the two steps is inversion, converting (R)-2-octanol to (S)-2-iodooctane.",
      "result": "The final product is (S)-2-iodooctane due to stereochemical inversion in the substitution step."
    }
  },
  {
    "question_id": "ch11_q5_deuterium_labeling_sn2",
    "topic": "SN2 Mechanism: Stereochemistry",
    "difficulty_level": "Hard",
    "question_text": "Predict the major organic product formed when (S)-1-deuteriopropan-1-ol is treated with p-toluenesulfonyl chloride in pyridine, followed by reaction with sodium cyanide in DMSO.",
    "question_smiles": "CCC[C@@H]([2H])O",
    "options": [
      {
        "option_id": "A",
        "text": "(R)-2-deuteriobutanenitrile",
        "smiles": "CCC[C@H]([2H])C#N",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(S)-2-deuteriobutanenitrile",
        "smiles": "CCC[C@@H]([2H])C#N",
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
        "smiles": "CCC[C@H]([2H])N",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests stereochemical tracking of chiral primary centers labeled with deuterium during a tosylation-substitution sequence.",
      "process": "Step 1: Tosylation of (S)-1-deuteriopropan-1-ol (with group priorities: 1: -OH, 2: -CH2CH3, 3: -2H (D), 4: -H) with TsCl/pyridine does not break the C-O bond. The stereocenter remains (S)-1-deuteriopropyl tosylate.\nStep 2: Nucleophilic substitution with sodium cyanide (NaCN) in DMSO proceeds via a concerted SN2 mechanism. Backside attack of CN- on C1 inverts the stereochemistry.\nStep 3: Analyze priority changes at the stereocenter: in the reactant, -OH was priority 1. In the product, -CN is priority 1. The relative priorities of the remaining groups (-CH2CH3 (2), -D (3), -H (4)) remain unchanged. Therefore, inversion of configuration converts the (S) center to (R)-2-deuteriobutanenitrile.",
      "result": "The final product is (R)-2-deuteriobutanenitrile."
    }
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
        "text": "(R)-3-chlorohexane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the SN2 substitution of a secondary alkyl halide with a moderate nucleophile (acetate) in a polar aprotic solvent (DMF).",
      "process": "Step 1: Identify the substrate as a secondary alkyl halide and the nucleophile as acetate (CH3COO-), a good nucleophile that is weakly basic.\nStep 2: Recognize that DMF is a polar aprotic solvent, which strongly promotes the SN2 pathway over SN1.\nStep 3: In an SN2 reaction, the nucleophile attacks from the backside of the C-Cl bond, causing inversion of stereochemistry. The (S) stereocenter of 3-chlorohexane is inverted to the (R) configuration in the acetate product.",
      "result": "(R)-hexan-3-yl acetate is obtained via stereochemical inversion."
    }
  },
  {
    "question_id": "ch11_q7_neighboring_group_participation",
    "topic": "SN2 Mechanism: Stereochemistry",
    "difficulty_level": "Hard",
    "question_text": "When (S)-2-bromopropanoic acid is treated with a very dilute solution of sodium hydroxide, (S)-2-hydroxypropanoic acid (lactic acid) is formed with complete retention of configuration. What accounts for this stereochemical outcome?",
    "question_smiles": "C[C@@H](Br)C(=O)O",
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
      "context": "This question addresses Neighboring Group Participation (NGP), which leads to an apparent retention of configuration in substitution reactions.",
      "process": "Step 1: Under basic conditions, 2-bromopropanoic acid is deprotonated to form 2-bromopropanoate. The carboxylate oxygen (-COO-) is a nucleophilic center adjacent to the chiral carbon bearing the bromide leaving group.\nStep 2: The carboxylate oxygen performs an intramolecular backside attack on the chiral carbon, displacing bromide. This first inversion yields a high-energy, three-membered cyclic alpha-lactone intermediate.\nStep 3: Hydroxide ion (or water) then acts as an external nucleophile, performing a second backside attack at the chiral carbon of the lactone ring. This second inversion opens the ring, regenerating the carboxylate. Two successive inversions (inversion + inversion) result in net retention of configuration at the stereocenter.",
      "result": "Neighboring group participation by the carboxylate results in double inversion, yielding net retention of configuration."
    }
  },
  {
    "question_id": "ch11_q8_leaving_group_halides",
    "topic": "SN2 Mechanism: Leaving Groups",
    "difficulty_level": "Easy",
    "question_text": "Arrange the following cyclohexyl derivatives in order of increasing reactivity toward SN2 substitution with sodium azide in DMF (slowest to fastest):",
    "question_smiles": "C1CCCCC1",
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
      "context": "This question tests the periodic trend of halide leaving group ability in nucleophilic substitutions.",
      "process": "Step 1: Leaving group ability is inversely related to basicity. A weaker base makes a better leaving group.\nStep 2: Recall the relative acidities of the hydrogen halides: HF (pKa = 3.2) < HCl (pKa = -7) < HBr (pKa = -9) < HI (pKa = -10). The corresponding conjugate bases increase in basicity in the order: I- < Br- < Cl- < F-.\nStep 3: Thus, iodide is the weakest base and best leaving group, whereas fluoride is the strongest base and poorest leaving group. Additionally, the C-I bond is the weakest and most polarizable bond in the series.",
      "result": "The correct order of reactivity is fluorocyclohexane < chlorocyclohexane < bromocyclohexane < iodocyclohexane."
    }
  },
  {
    "question_id": "ch11_q9_leaving_group_sulfonates",
    "topic": "SN2 Mechanism: Leaving Groups",
    "difficulty_level": "Medium",
    "question_text": "Which of the following sulfonate esters is the most reactive leaving group in an SN2 reaction, and what explains its reactivity?",
    "question_smiles": "CCO",
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
      "context": "This question tests the structural factors that determine the leaving group ability of sulfonate esters.",
      "process": "Step 1: Recall that the leaving group departing anion must be stabilized to lower the transition state energy.\nStep 2: Examine the structures of triflate (CF3SO3-), tosylate (CH3C6H4SO3-), and mesylate (CH3SO3-).\nStep 3: The triflate anion has a highly electron-withdrawing -CF3 group. This group exhibits strong electron-withdrawing inductive effects that help stabilize the negative charge on the oxygen atoms of the sulfonate group. The pKa of triflic acid (CF3SO3H) is approximately -14, making the triflate anion an exceptionally weak base and an outstanding leaving group (about 10^4 times more reactive than a tosylate).",
      "result": "Trifluoromethanesulfonate (triflate) is the most reactive leaving group due to inductive stabilization by the fluorine atoms."
    }
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
        "smiles": "CCCBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The acid acts as a dehydrating agent that removes water from the reaction, pushing the equilibrium forward.",
        "smiles": "CCCBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The acid protonates the halide ion, making it a stronger, more electrophilic nucleophile.",
        "smiles": "CCCBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The acid reacts with the carbon atom to form a carbocation intermediate which is then attacked by bromide.",
        "smiles": "CCCBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question examines the mechanism of nucleophilic substitution in alcohols and the necessity of leaving group activation.",
      "process": "Step 1: Note that the hydroxyl group (-OH) is a strong base and therefore an extremely poor leaving group. Direct displacement of -OH by a nucleophile like Br- does not occur.\nStep 2: Adding a strong acid (HBr) protonates the oxygen lone pair of the alcohol, forming an alkyloxonium ion (R-OH2+).\nStep 3: The leaving group is now a neutral water molecule (H2O), which is a very weak base and an excellent leaving group. The bromide ion (Br-) can then perform a backside attack on the primary carbon, displacing H2O.",
      "result": "The acid activates the alcohol by protonating the hydroxyl group to form a water leaving group."
    }
  },
  {
    "question_id": "ch11_q11_ether_cleavage_regiochemistry",
    "topic": "SN2 Mechanism: Leaving Groups",
    "difficulty_level": "Hard",
    "question_text": "Predict the major organic products when isopropyl methyl ether is treated with one equivalent of concentrated hydroiodic acid (HI) at room temperature.",
    "question_smiles": "CC(C)OC",
    "options": [
      {
        "option_id": "A",
        "text": "iodomethane and propan-2-ol",
        "smiles": "CC(C)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-iodopropane and methanol",
        "smiles": "CO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "iodomethane and 2-iodopropane",
        "smiles": "CC(I)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "methanol and propan-2-ol",
        "smiles": "CO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the regiochemical outcome of ether cleavage via the SN2 pathway under acidic conditions.",
      "process": "Step 1: In the presence of HI, the ether oxygen is protonated to form a highly reactive dialkyloxonium ion: (CH3)2CH-OH+-CH3.\nStep 2: The iodide ion (I-) is a strong nucleophile. Because the protonated ether has two alkyl groups (a secondary isopropyl group and a primary methyl group), substitution will proceed via the SN2 mechanism.\nStep 3: The SN2 pathway is highly sensitive to steric hindrance. The iodide ion will preferentially attack the less hindered methyl carbon rather than the secondary isopropyl carbon.\nStep 4: Backside attack on the methyl carbon cleaves the C-O bond, yielding iodomethane (CH3I) and leaving behind propan-2-ol ((CH3)2CHOH).",
      "result": "The reaction produces iodomethane and propan-2-ol due to nucleophilic attack on the less sterically hindered methyl group."
    }
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
        "text": "HS\u207b, because sulfur is larger and more polarizable than oxygen, and is less tightly solvated by the protic solvent methanol.",
        "smiles": "CCS",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "HO\u207b, because oxygen is more electronegative and has a higher concentration of negative charge.",
        "smiles": "CCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "F\u207b, because it is the smallest anion and can coordinate closest to the carbon atom.",
        "smiles": "CCF",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cl\u207b, because chloride has a lower pKa than fluoride, making it more stable.",
        "smiles": "CCCl",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests nucleophilicity trends in polar protic solvents, focusing on atomic size and polarizability.",
      "process": "Step 1: Note that the solvent is methanol, which is polar and protic.\nStep 2: Protic solvents form strong hydrogen bonding networks with small, highly electronegative anions (like HO- and F-). This solvation shell must be broken for the nucleophile to attack, which increases the activation energy.\nStep 3: Sulfur (in HS-) is larger and less electronegative than oxygen. Consequently, HS- is less strongly solvated by hydrogen bonds in methanol. Additionally, the valence electrons of sulfur are in the 3p orbitals, making them more polarizable (capable of deforming and initiating bonding at a greater distance) than the 2p valence electrons of oxygen. Thus, HS- is a stronger nucleophile in protic solvents.",
      "result": "HS- is the most reactive nucleophile due to its lower solvation energy and higher polarizability in methanol."
    }
  },
  {
    "question_id": "ch11_q13_nucleophile_steric_hindrance",
    "topic": "SN2 Mechanism: Nucleophiles",
    "difficulty_level": "Medium",
    "question_text": "Which statement correctly describes the difference in reactivity between sodium ethoxide (NaOEt) and potassium tert-butoxide (KOtBu) in their reactions with 1-bromobutane?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Ethoxide is a much faster nucleophile for SN2 substitution because it is less sterically hindered, whereas the bulky tert-butoxide primarily acts as a base to promote E2 elimination.",
        "smiles": "CCCCOCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "tert-Butoxide is a faster nucleophile because it is a stronger base and has more electron-donating methyl groups.",
        "smiles": "CCCCOC(C)(C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both react at identical rates because they are both oxygen-based anions.",
        "smiles": "CCCCOCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethoxide reacts slower because the sodium cation coordinates more strongly to the ethyl group than the potassium cation does to the tert-butyl group.",
        "smiles": "CCCCOCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests how steric hindrance in the nucleophile can decouple basicity from nucleophilicity.",
      "process": "Step 1: Identify that basicity is a thermodynamic property (equilibrium constant), while nucleophilicity is a kinetic property (reaction rate).\nStep 2: Note that tert-butoxide is a stronger base than ethoxide (pKa of conjugate acids: tBuOH \u2248 18 vs. EtOH \u2248 16). However, the three methyl groups on tert-butoxide create severe steric bulk around the anionic oxygen.\nStep 3: This steric hindrance hinders backside attack on the carbon of 1-bromobutane, making tert-butoxide a poor nucleophile for substitution. Instead, it deprotonates a beta-hydrogen to undergo E2 elimination. Ethoxide is relatively unhindered and readily performs backside attack (SN2).",
      "result": "Ethoxide is the faster nucleophile because it lacks the steric bulk of tert-butoxide."
    }
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
        "smiles": "CCCC[N+](=O)[O-]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The reaction proceeds through a carbocation intermediate that is preferentially trapped by the nitrogen atom.",
        "smiles": "CCCC[N+](=O)[O-]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Butyl nitrite is the thermodynamic product and isomerizes to 1-nitrobutane under the reaction conditions.",
        "smiles": "CCCC[N+](=O)[O-]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "DMF coordinates to the oxygen atoms of nitrite, blocking them and forcing nitrogen to attack.",
        "smiles": "CCCC[N+](=O)[O-]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the reactivity of ambident nucleophiles, which contain more than one nucleophilic site.",
      "process": "Step 1: Identify the nitrite ion ([O-N=O]-) as an ambident nucleophile. It has lone pairs on both nitrogen and oxygen.\nStep 2: Nitrogen is less electronegative and more polarizable than oxygen. Oxygen is highly electronegative and holds its electrons tightly.\nStep 3: According to Hard-Soft Acid-Base (HSAB) theory and molecular orbital theory, the more polarizable nitrogen atom is a 'softer' nucleophile, which reacts faster with the soft electrophilic carbon of the alkyl halide in polar aprotic solvents (like DMF) to form the C-N bond (yielding 1-nitrobutane).",
      "result": "The nitrite nitrogen atom attacks preferentially because it is more polarizable than the oxygen atom."
    }
  },
  {
    "question_id": "ch11_q15_halide_nucleophilicity_solvent",
    "topic": "SN2 Mechanism: Nucleophiles",
    "difficulty_level": "Medium",
    "question_text": "How does the nucleophilicity of halide ions (F-, Cl-, Br-, I-) change when switching from a polar protic solvent (like water) to a polar aprotic solvent (like acetonitrile)?",
    "question_smiles": "CCCCBr",
    "options": [
      {
        "option_id": "A",
        "text": "In water, the order is I\u207b > Br\u207b > Cl\u207b > F\u207b; in acetonitrile, the order reverses to F\u207b > Cl\u207b > Br\u207b > I\u207b.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "In water, the order is F\u207b > Cl\u207b > Br\u207b > I\u207b; in acetonitrile, the order reverses to I\u207b > Br\u207b > Cl\u207b > F\u207b.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The nucleophilicity order is I\u207b > Br\u207b > Cl\u207b > F\u207b in both solvents.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The nucleophilicity order is F\u207b > Cl\u207b > Br\u207b > I\u207b in both solvents.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question highlights how solvent environments can completely reverse nucleophilicity trends for a series of homologous ions.",
      "process": "Step 1: In a polar protic solvent (water), the small, charge-dense fluoride (F-) is heavily stabilized by strong hydrogen bonds, while the large iodide (I-) is weakly solvated. Therefore, iodide is more nucleophilic (I- > Br- > Cl- > F-).\nStep 2: In a polar aprotic solvent (acetonitrile), hydrogen bonding is absent. Anions are relatively desolvated. Nucleophilicity is now governed by charge density and basicity. Fluoride, being the smallest and most basic halide, has the highest charge density and attacks the electrophilic carbon most rapidly.\nStep 3: This results in the reversed trend: F- > Cl- > Br- > I-.",
      "result": "The halide nucleophilicity order reverses from I- > Br- > Cl- > F- in water to F- > Cl- > Br- > I- in acetonitrile."
    }
  },
  {
    "question_id": "ch11_q16_substrate_alpha_branching",
    "topic": "SN2 Mechanism: Substrate Effects",
    "difficulty_level": "Easy",
    "question_text": "Rank the following alkyl bromides in order of decreasing rate of reaction with sodium iodide in acetone via the SN2 pathway (fastest to slowest):",
    "question_smiles": "CBr",
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
      "context": "This question tests the effect of steric hindrance at the alpha-carbon on the rate of SN2 reactions.",
      "process": "Step 1: Recall that the SN2 mechanism requires a backside attack at 180 degrees relative to the carbon-leaving group bond.\nStep 2: As the number of alkyl substituents on the alpha-carbon increases, steric hindrance in the transition state increases dramatically.\nStep 3: Relative rates: methyl (bromomethane, ~30) > primary (bromoethane, ~1) >> secondary (2-bromopropane, ~0.03) >>> tertiary (2-bromo-2-methylpropane, ~0, which is essentially unreactive via SN2).",
      "result": "Reactivity decreases in the order: methyl > 1\u00b0 > 2\u00b0 > 3\u00b0."
    }
  },
  {
    "question_id": "ch11_q17_substrate_beta_branching",
    "topic": "SN2 Mechanism: Substrate Effects",
    "difficulty_level": "Medium",
    "question_text": "Neopentyl bromide (1-bromo-2,2-dimethylpropane) is a primary alkyl halide, yet it reacts with sodium iodide in acetone at a rate that is extremely slow\u2014slower even than the secondary halide 2-bromopropane. What is the explanation for this low reactivity?",
    "question_smiles": "CC(C)(C)CBr",
    "options": [
      {
        "option_id": "A",
        "text": "The three methyl groups on the beta-carbon create severe steric hindrance that physically blocks the backside approach of the nucleophile.",
        "smiles": "CC(C)(C)CI",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The neopentyl carbocation is highly unstable, preventing the reaction from taking place.",
        "smiles": "CC(C)(C)CI",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The carbon-bromine bond in neopentyl bromide is strengthened by hyperconjugation from the adjacent methyl groups.",
        "smiles": "CC(C)(C)CI",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The molecule undergoes rapid E2 elimination instead of substitution.",
        "smiles": "CC(C)(C)CI",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the effect of steric hindrance at the beta-carbon on SN2 transition states.",
      "process": "Step 1: Identify neopentyl bromide as a primary alkyl halide: the bromine is attached to a CH2 carbon (alpha-carbon).\nStep 2: Look at the adjacent carbon (beta-carbon), which is a quaternary carbon bonded to three methyl groups: -C(CH3)3.\nStep 3: During an SN2 backside attack, the nucleophile must approach the alpha-carbon. The bulky methyl groups on the beta-carbon occupy a large volume of space directly in the path of the incoming nucleophile, raising the energy of the transition state and severely slowing the rate.",
      "result": "Severe steric hindrance at the beta-carbon blocks backside attack, rendering neopentyl bromide highly unreactive toward SN2."
    }
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
        "smiles": "C=CCI",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The double bond acts as an internal nucleophile that coordinates to the sodium cation.",
        "smiles": "C=CCI",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Allylic C-Cl bonds are weaker because the carbon is sp2-hybridized, making the bond easier to break.",
        "smiles": "C=CCI",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Allylic halides undergo a rapid rearrangement to form a tertiary halide prior to substitution.",
        "smiles": "C=CCI",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question explores the role of orbital overlap and conjugation in stabilizing SN2 transition states.",
      "process": "Step 1: In the transition state of an SN2 reaction, the reacting carbon is temporarily sp2-hybridized, with a p-orbital participating in partial bonding with both the nucleophile and the leaving group.\nStep 2: In an allylic system, this developing p-orbital is adjacent to the C=C double bond.\nStep 3: The p-orbital overlaps with the pi-system of the double bond. This conjugation delocalizes the negative charge of the transition state across three carbons, lowering the activation energy (Ea) and accelerating the reaction.",
      "result": "Conjugative stabilization of the transition state by the adjacent pi-system accelerates the SN2 reaction of allylic halides."
    }
  },
  {
    "question_id": "ch11_q19_intramolecular_williamson",
    "topic": "SN2 Mechanism: Specific Reactions",
    "difficulty_level": "Medium",
    "question_text": "When 5-bromopentan-1-ol is treated with sodium hydride (NaH), it rapidly cyclizes to form tetrahydrofuran. What are the kinetics of this reaction, and how does the rate compare to the intermolecular reaction between ethanol and 1-bromobutane?",
    "question_smiles": "OCCCCCBr",
    "options": [
      {
        "option_id": "A",
        "text": "The reaction exhibits first-order kinetics; it is much faster than the intermolecular reaction because the intramolecular process is entropically favored.",
        "smiles": "C1CCOC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The reaction exhibits second-order kinetics; it is slower than the intermolecular reaction due to ring strain in forming a 5-membered ring.",
        "smiles": "C1CCOC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The reaction exhibits zero-order kinetics; the rate is governed solely by the rate of hydrogen gas release.",
        "smiles": "C1CCOC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The reaction exhibits second-order kinetics; the rate is identical to the intermolecular reaction because the same functional groups are involved.",
        "smiles": "C1CCOC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the kinetics and thermodynamic principles of intramolecular nucleophilic substitutions.",
      "process": "Step 1: NaH acts as a strong base, deprotonating the alcohol group to form a nucleophilic alkoxide intermediate (-O-).\nStep 2: The alkoxide and the alkyl bromide leaving group are within the same molecule. An intramolecular SN2 reaction takes place to form a stable 5-membered ring (tetrahydrofuran).\nStep 3: Because the reactant contains both the nucleophile and electrophile, the rate depends only on the concentration of this single species, resulting in first-order kinetics: Rate = k[substrate].\nStep 4: The reaction is much faster than its intermolecular counterpart because the nucleophile is held in close proximity to the electrophile, minimizing the loss of translational entropy in the transition state.",
      "result": "The reaction is first-order and is accelerated by favorable entropy (proximity effect)."
    }
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
        "text": "The carbonyl group is strongly electron-withdrawing, making the alpha-carbon more electrophilic; additionally, the transition state is stabilized by overlap of the forming/breaking bonds with the carbonyl \u03c0* orbital.",
        "smiles": "O=C(CN)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The aromatic ring stabilizes a carbocation intermediate, switching the mechanism to a rapid SN1 pathway.",
        "smiles": "O=C(CN)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The carbonyl oxygen coordinates to the nucleophile, performing intramolecular catalysis.",
        "smiles": "O=C(CN)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Steric hindrance is reduced because the carbonyl group is planar.",
        "smiles": "O=C(CN)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question explores the highly enhanced reactivity of alpha-halocarbonyl compounds in SN2 reactions.",
      "process": "Step 1: Analyze the structure of phenacyl bromide. The carbon bearing the bromine leaving group is adjacent to a carbonyl carbon (C=O).\nStep 2: The carbonyl carbon is highly electrophilic and electron-withdrawing, which inductively increases the electrophilic character (partial positive charge) of the adjacent alpha-carbon.\nStep 3: In the transition state, the developing p-orbital on the alpha-carbon overlaps with the adjacent carbonyl pi-system. This conjugation lowers the activation energy of the transition state.\nStep 4: Both electronic (inductive) and orbital overlap effects combine to dramatically accelerate the substitution.",
      "result": "Inductive pull and transition-state stabilization through orbital overlap with the carbonyl pi-system drive the rate enhancement."
    }
  },
  {
    "question_id": "ch11_q21_phase_transfer_catalysis",
    "topic": "SN2 Mechanism: Specific Reactions",
    "difficulty_level": "Medium",
    "question_text": "The reaction of potassium fluoride (KF) with 1-bromooctane in acetonitrile is very slow. However, adding a catalytic amount of 18-crown-6 dramatically increases the reaction rate. What is the role of 18-crown-6 in this substitution?",
    "question_smiles": "CCCCCCCCBr",
    "options": [
      {
        "option_id": "A",
        "text": "It complexes the potassium cation (K\u207a), which solubilizes the salt in acetonitrile and leaves the fluoride anion (F\u207b) 'naked' and highly nucleophilic.",
        "smiles": "CCCCCCCCF",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It reacts directly with 1-bromooctane to form a highly reactive crown-ether intermediate.",
        "smiles": "CCCCCCCCF",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It acts as a protic co-solvent that stabilizes the leaving group through hydrogen bonding.",
        "smiles": "CCCCCCCCF",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It oxidizes the bromide ion to bromine gas, shifting the equilibrium forward.",
        "smiles": "CCCCCCCCF",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the concept of phase-transfer catalysis using crown ethers to activate inorganic salts in organic solvents.",
      "process": "Step 1: Recognize that KF is an ionic salt with low solubility in organic solvents like acetonitrile. The fluoride ion is normally trapped in a solid lattice or tightly paired with the potassium cation.\nStep 2: 18-crown-6 is a cyclic polyether with a cavity size that perfectly matches the ionic radius of a potassium cation (K+).\nStep 3: The crown ether complexes K+, pulling KF into solution. Because the cation is sequestered inside the polar cavity of the crown ether, the fluoride anion is poorly solvated ('naked') and highly reactive, allowing it to rapidly undergo SN2 substitution with 1-bromooctane.",
      "result": "18-crown-6 coordinates K+, solubilizing KF and leaving the fluoride anion highly nucleophilic."
    }
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
        "smiles": "CC(C)(OC)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The rate of the reaction is doubled.",
        "smiles": "CC(C)(OC)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The rate of the reaction is halved.",
        "smiles": "CC(C)(OC)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The rate of the reaction increases by a factor of 4.",
        "smiles": "CC(C)(OC)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the unimolecular nature of the SN1 rate-determining step.",
      "process": "Step 1: The SN1 mechanism is a stepwise process. The first step is the slow, rate-determining ionization of the substrate to form a carbocation intermediate and a leaving group.\nStep 2: The rate law is first-order overall: Rate = k[substrate].\nStep 3: Since the nucleophile is not involved in the rate-determining step, changing its concentration has no effect on the rate of this step.",
      "result": "The rate of the reaction remains unchanged when the nucleophile concentration is doubled."
    }
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
        "smiles": "CC(C)(O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The rate decreases because water is a poorer nucleophile than ethanol.",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The rate remains unchanged because the rate-determining step is unimolecular and independent of the solvent.",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The rate decreases because water forms strong hydrogen bonds to the alkyl chloride, preventing its ionization.",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the impact of solvent polarity and dielectric constant on the rate of SN1 reactions.",
      "process": "Step 1: Note that the rate-determining step in an SN1 reaction is the ionization of the C-Cl bond to form a carbocation and a chloride ion. The transition state has a high degree of charge separation (partial positive charge on carbon, partial negative on chlorine).\nStep 2: Polar protic solvents stabilize this polar transition state through dipole-dipole interactions and hydrogen bonding.\nStep 3: Water has a much higher dielectric constant (80) than ethanol (24.3). Adding water to ethanol increases the overall polarity and ionizing power of the solvent mixture, which lowers the activation energy and accelerates the rate of ionization.",
      "result": "The rate increases because the more polar solvent mixture stabilizes the charge-separated transition state."
    }
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
        "smiles": "CC(C)(O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A C-H (or C-D) bond is broken in the rate-determining step.",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The reaction proceeds via an E2 elimination rather than an SN1 substitution.",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Deuterium acts as a steric shield that blocks water from approaching the central carbon.",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the concept of secondary kinetic isotope effects and hyperconjugative stabilization in SN1 transitions.",
      "process": "Step 1: The rate-determining step of an SN1 reaction is carbocation formation. In this transition state, the carbon changes from sp3 to sp2 hybridization, leaving an empty p-orbital.\nStep 2: Adjacent C-H (or C-D) bonds stabilize the developing positive charge through hyperconjugation (delocalization of C-H sigma bond electron density into the empty p-orbital).\nStep 3: C-D bonds are shorter and stronger than C-H bonds due to lower zero-point energy. This makes C-D bonds less effective at hyperconjugative donation.\nStep 4: The slower rate for the deuterated compound (kH/kD > 1) confirms that hyperconjugation is occurring in the rate-determining transition state.",
      "result": "The secondary isotope effect confirms hyperconjugation from the adjacent methyl groups in the transition state."
    }
  },
  {
    "question_id": "ch11_q25_carbocation_stability_induction",
    "topic": "SN1 Mechanism: Carbocations",
    "difficulty_level": "Easy",
    "question_text": "What is the primary physical basis for the trend in stability of alkyl carbocations: methyl < primary < secondary < tertiary?",
    "question_smiles": "CC(C)(Br)C",
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
        "text": "Steric relief that occurs when the bond angles expand from 109.5\u00b0 to 120\u00b0.",
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
      "context": "This question tests the electronic factors that stabilize carbocations.",
      "process": "Step 1: A carbocation has a positively charged carbon with only six valence electrons and an empty p-orbital.\nStep 2: Alkyl groups are more polarizable than hydrogen atoms and can donate electron density to the carbocation through sigma bonds (inductive effect).\nStep 3: Furthermore, C-H sigma bonds on adjacent carbons can align with the empty p-orbital, donating electron density through hyperconjugation. The more alkyl groups present, the greater both the inductive and hyperconjugative stabilization.",
      "result": "Inductive effects and hyperconjugation stabilize carbocations as substitution increases."
    }
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
        "smiles": "C=CCO",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The double bond in 3-bromoprop-1-ene stericly forces the leaving group to depart.",
        "smiles": "C=CCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The alkene carbon-carbon double bond is directly attacked by water to displace the bromine.",
        "smiles": "C=CCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Water is a stronger nucleophile toward sp2-hybridized systems.",
        "smiles": "C=CCO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question explores the role of resonance in stabilizing carbocations formed in SN1 reactions.",
      "process": "Step 1: Ionization of 1-bromopropane gives a highly unstable primary propyl carbocation (CH3-CH2-CH2+).\nStep 2: Ionization of 3-bromoprop-1-ene gives the allylic carbocation ([CH2=CH-CH2]+ <=> [CH2-CH=CH2]+).\nStep 3: The positive charge in the allylic carbocation is delocalized over two carbon atoms by resonance. This resonance stabilization lowers the activation energy for ionization, making the reaction proceed much faster.",
      "result": "The allylic halide reacts faster because it forms a resonance-stabilized carbocation."
    }
  },
  {
    "question_id": "ch11_q27_heteroatom_stabilization_sn1",
    "topic": "SN1 Mechanism: Carbocations",
    "difficulty_level": "Hard",
    "question_text": "Chloromethyl methyl ether (ClCH2OCH3) undergoes solvolysis in ethanol at a rate that is 10^14 times faster than chloromethane. What is the reason for this massive rate acceleration?",
    "question_smiles": "COCCl",
    "options": [
      {
        "option_id": "A",
        "text": "The carbocation intermediate is stabilized by resonance donation of a lone pair from the adjacent oxygen atom, forming a stable oxocarbenium ion.",
        "smiles": "COCCOCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The highly electronegative oxygen atom inductively pulls electron density away, destabilizing the starting material.",
        "smiles": "COCCOCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The chlorine atom is a better leaving group when it is adjacent to an oxygen atom.",
        "smiles": "COCCOCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The reaction proceeds via a concerted SN2 pathway facilitated by ethanol coordinating to the oxygen.",
        "smiles": "COCCOCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the effect of adjacent heteroatoms with lone pairs on carbocation stability.",
      "process": "Step 1: Ionization of chloromethyl methyl ether yields the carbocation [+CH2-O-CH3].\nStep 2: The adjacent oxygen atom has lone pairs of electrons in its non-bonding orbitals.\nStep 3: One of these lone pairs is donated into the empty p-orbital of the carbocation, creating a resonance structure [CH2=O+-CH3] where all atoms have a complete octet. This oxocarbenium ion is exceptionally stable, drastically lowering the activation energy for ionization.",
      "result": "Resonance stabilization by the adjacent oxygen lone pair to form a stable oxocarbenium ion accelerates the reaction."
    }
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
      "context": "This question tests the geometric constraints of carbocation stability in bicyclic systems.",
      "process": "Step 1: In an SN1 reaction, the carbocation intermediate prefers a planar, sp2-hybridized geometry with 120\u00b0 bond angles.\nStep 2: In 1-bromonorbornane, the bridgehead carbon is locked at the apex of a rigid bicyclic cage.\nStep 3: For the bridgehead carbon to become planar, the ring system would have to distort, which is prevented by extreme angle and ring strain (Bredt's rule). Since a planar carbocation cannot form, the activation energy for ionization is prohibitively high.",
      "result": "The rigid bicyclic cage prevents the bridgehead carbon from adopting the planar geometry required to stabilize a carbocation."
    }
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
        "smiles": "CCC(C)(OCC)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A 1,2-methyl shift converts the initial secondary carbocation into a more stable tertiary carbocation.",
        "smiles": "CCC(C)(OCC)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The reaction proceeds via a concerted SN2 pathway with rearrangement.",
        "smiles": "CCC(C)(OCC)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The product is formed via an E1 elimination followed by Markovnikov addition of ethanol.",
        "smiles": "CCC(C)(OCC)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the concept of carbocation rearrangements via hydride shifts.",
      "process": "Step 1: Ionization of 2-bromo-3-methylbutane yields a secondary carbocation at C2: (CH3)2CH-C+H-CH3.\nStep 2: The adjacent C3 carbon is a tertiary carbon bearing a hydrogen atom.\nStep 3: A 1,2-hydride shift occurs: the hydrogen at C3 migrates with its pair of bonding electrons to the positive carbon at C2. This converts the secondary carbocation into a more stable tertiary carbocation at C3: (CH3)2C+-CH2-CH3.\nStep 4: Ethanol attacks the tertiary carbocation, followed by deprotonation to yield 2-ethoxy-2-methylbutane.",
      "result": "A 1,2-hydride shift converts the secondary carbocation to a more stable tertiary carbocation."
    }
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
        "smiles": "CC(C)C(C)(O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A 1,2-hydride shift.",
        "smiles": "CC(C)C(C)(O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A 1,3-methyl shift.",
        "smiles": "CC(C)C(C)(O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A ring expansion.",
        "smiles": "CC(C)C(C)(O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests carbocation rearrangements via methyl shifts.",
      "process": "Step 1: Ionization of 3-bromo-2,2-dimethylbutane yields a secondary carbocation at C3: (CH3)3C-C+H-CH3.\nStep 2: The adjacent carbon (C2) is a quaternary carbon bonded to three methyl groups (and no hydrogens).\nStep 3: A 1,2-methyl shift occurs: one of the methyl groups migrates with its bonding pair of electrons from C2 to C3. This converts the secondary carbocation into a more stable tertiary carbocation: (CH3)2C+-CH(CH3)2.\nStep 4: Water attacks the tertiary carbocation, followed by deprotonation to yield 2,3-dimethylbutan-2-ol.",
      "result": "A 1,2-methyl shift converts the secondary carbocation into a more stable tertiary carbocation."
    }
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
        "smiles": "C1CCCC1O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The reaction is an SN2 displacement that is assisted by the steric strain of the ring.",
        "smiles": "C1CCCC1O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A 1,2-hydride shift occurs on the cyclobutane ring, followed by ring opening and re-cyclization.",
        "smiles": "C1CCCC1O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclobutane decomposes to cyclopentane under the acidic reaction conditions.",
        "smiles": "C1CCCC1O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests ring expansion rearrangements driven by the relief of ring strain.",
      "process": "Step 1: (Bromomethyl)cyclobutane ionizes to form a highly unstable primary carbocation adjacent to the cyclobutane ring: c-C4H7-CH2+.\nStep 2: The cyclobutane ring possesses significant angle strain (~90\u00b0 vs 109.5\u00b0) and torsional strain.\nStep 3: A 1,2-alkyl shift occurs: one of the ring C-C bonds adjacent to the CH2+ carbon migrates to the positive carbon. This expands the 4-membered ring to a 5-membered ring, forming a secondary cyclopentyl carbocation.\nStep 4: Water attacks the cyclopentyl carbocation, followed by deprotonation to yield cyclopentanol.",
      "result": "A 1,2-alkyl shift (ring expansion) occurs to relieve ring strain, yielding cyclopentanol after water attack."
    }
  },
  {
    "question_id": "ch11_q32_ring_expansion_cyclopentyl",
    "topic": "SN1 Mechanism: Rearrangements",
    "difficulty_level": "Hard",
    "question_text": "Predict the major organic product of the solvolysis of 1-iodomethyl-1-methylcyclopentane in ethanol.",
    "question_smiles": "CC1(CI)CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "1-ethoxy-1,2-dimethylcyclohexane",
        "smiles": "CC1CCCCC1(C)OCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(1-methylcyclopentyl)methyl ethyl ether",
        "smiles": "CCOC1(C)CCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-ethoxy-2,2-dimethylcyclopentane",
        "smiles": "CCOC1CCCC1(C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-ethoxy-1-methylcyclohexane",
        "smiles": "CC1(OCC)CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests a complex rearrangement involving ring expansion from a 5-membered to a 6-membered ring and a subsequent shift.",
      "process": "Step 1: Ionization of 1-iodomethyl-1-methylcyclopentane yields a primary carbocation: (c-C5H8(CH3))-CH2+.\nStep 2: A 1,2-alkyl shift occurs to expand the 5-membered ring to a less strained 6-membered ring, yielding a secondary cyclohexyl carbocation.\nStep 3: The resulting carbocation is adjacent to a methyl-bearing carbon. A 1,2-hydride shift occurs to convert the secondary carbocation to a more stable tertiary carbocation: 1,2-dimethylcyclohexyl cation.\nStep 4: Ethanol attacks the tertiary carbocation, followed by deprotonation to yield 1-ethoxy-1,2-dimethylcyclohexane.",
      "result": "The reaction yields 1-ethoxy-1,2-dimethylcyclohexane via a ring expansion/hydride shift cascade."
    }
  },
  {
    "question_id": "ch11_q33_sn1_stereochemistry_ion_pairs",
    "topic": "SN1 Mechanism: Stereochemistry",
    "difficulty_level": "Medium",
    "question_text": "The solvolysis of chiral (S)-3-bromo-3-methylhexane in methanol yields 3-methoxy-3-methylhexane. The product is found to be mostly racemic, but contains a slight excess of the (R)-enantiomer (net inversion). What is the molecular explanation for this partial inversion?",
    "question_smiles": "CCCC[C@](C)(Br)CC",
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
      "context": "This question tests the stereochemical details of SN1 reactions, specifically the concept of ion pairs.",
      "process": "Step 1: If ionization were completely free, the carbocation would be planar and symmetric, resulting in 100% racemization.\nStep 2: However, immediately after ionization, the leaving group (Br-) is still close to the carbocation in a solvent cage, forming an 'intimate ion pair'.\nStep 3: The nearby bromide ion physically blocks the front-side approach of the nucleophile.\nStep 4: Therefore, the nucleophile preferentially attacks from the back side (inversion) before the ions diffuse apart to form a symmetric, solvent-separated ion pair.",
      "result": "Front-side shielding by the leaving group in an intimate ion pair leads to a slight excess of inversion."
    }
  },
  {
    "question_id": "ch11_q34_diastereomer_solvolysis_rates",
    "topic": "SN1 Mechanism: Stereochemistry",
    "difficulty_level": "Hard",
    "question_text": "cis-4-tert-Butylcyclohexyl tosylate undergoes solvolysis in acetic acid significantly faster than its trans isomer. What is the origin of this rate difference?",
    "question_smiles": "CC(C)(C)C1CCC(OS(=O)(=O)c2ccc(C)cc2)CC1",
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
      "context": "This question tests how cyclohexyl conformation and ground-state steric strain affect SN1 ionization rates.",
      "process": "Step 1: The very bulky tert-butyl group must remain in the equatorial position to avoid severe 1,3-diaxial interactions.\nStep 2: For the cis isomer, this forces the tosylate group into the axial position, where it experiences steric repulsion (1,3-diaxial strain) with the axial hydrogens.\nStep 3: For the trans isomer, both the tert-butyl and tosylate groups can be equatorial, which is a strain-free conformation.\nStep 4: During ionization (rate-determining step), the C-OTs carbon rehybridizes from sp3 to planar sp2, relieving the 1,3-diaxial strain in the cis isomer. This steric relief lowers the transition-state energy, making the cis isomer react much faster.",
      "result": "Relief of ground-state 1,3-diaxial strain in the cis isomer accelerates its ionization rate."
    }
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
        "smiles": "C=CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The rate increases by a factor of 2.",
        "smiles": "C=CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The rate remains unchanged.",
        "smiles": "C=CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The rate increases by a factor of 8.",
        "smiles": "C=CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the bimolecular kinetics and second-order rate law of the E2 mechanism.",
      "process": "Step 1: The E2 mechanism is a concerted, single-step elimination where the base removes a beta-proton as the leaving group departs.\nStep 2: State the second-order rate equation: Rate = k[substrate][base].\nStep 3: Calculate the rate change: [2 * substrate] * [2 * base] = 4 * original rate.",
      "result": "The rate of the E2 reaction increases by a factor of 4."
    }
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
        "text": "2-methylbutan-2-ol",
        "smiles": "CCC(C)(O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the role of base steric bulk in determining E2 regiochemistry (Zaitsev vs. Hofmann rules).",
      "process": "Step 1: 2-bromo-2-methylbutane has two types of beta-hydrogens: primary hydrogens on the methyl groups (C1 and C5) and secondary hydrogens on the CH2 group (C3).\nStep 2: An unhindered base (like NaOEt) preferentially abstracts the secondary beta-hydrogen to yield the more stable, more substituted alkene (2-methylbut-2-ene, the Zaitsev product).\nStep 3: A bulky base (like KOtBu) is sterically hindered and cannot easily access the secondary beta-hydrogen. It preferentially abstracts the less hindered, more accessible primary beta-hydrogens on the methyl groups, yielding the less substituted alkene (2-methylbut-1-ene, the Hofmann product).",
      "result": "The major product is the Hofmann product, 2-methylbut-1-ene, due to the steric bulk of the base."
    }
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
      "context": "This question tests E2 regiochemical and stereochemical preferences under standard thermodynamic-control-like conditions (unhindered base).",
      "process": "Step 1: Identify that sodium methoxide is a small, strong base that promotes E2 elimination on secondary alkyl halides.\nStep 2: Identify the beta-hydrogens: C1 has primary hydrogens; C3 has secondary hydrogens. Deprotonating at C3 yields the more stable internal alkene (Zaitsev product).\nStep 3: Compare the stability of the stereoisomers of the Zaitsev product: trans-but-2-ene is more stable than cis-but-2-ene because it minimizes steric repulsion between the methyl groups. The E2 transition state leading to the trans isomer is lower in energy.",
      "result": "The major product is trans-but-2-ene."
    }
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
      "context": "This question tests the dominant role of conjugation in determining the regiochemical outcome of E2 reactions.",
      "process": "Step 1: Identify the substrate (2-bromopropyl)benzene (Ph-CH2-CH(Br)-CH3).\nStep 2: Identify the beta-hydrogens: C1 (benzylic CH2) and C3 (terminal CH3).\nStep 3: Deprotonation at C1 yields a double bond conjugated with the aromatic ring: Ph-CH=CH-CH3. Deprotonation at C3 yields Ph-CH2-CH=CH2 (non-conjugated).\nStep 4: Conjugation provides exceptional thermodynamic stability (about 20-30 kJ/mol). The transition state leading to the conjugated system is highly stabilized, yielding (E)-prop-1-en-1-ylbenzene (trans-methyl/phenyl) as the major product.",
      "result": "The major product is (E)-prop-1-en-1-ylbenzene because conjugation with the phenyl ring stabilizes the product."
    }
  },
  {
    "question_id": "ch11_q39_e2_stereospecificity_3R_2R",
    "topic": "E2 Mechanism: Stereochemistry",
    "difficulty_level": "Hard",
    "question_text": "What is the stereochemical configuration of the major alkene product when (2R,3R)-2-bromo-3-phenylbutane undergoes E2 elimination upon treatment with sodium ethoxide in ethanol?",
    "question_smiles": "CC(c1ccccc1)[C@@H](C)Br",
    "options": [
      {
        "option_id": "A",
        "text": "(Z)-2-phenylbut-2-ene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(E)-2-phenylbut-2-ene",
        "smiles": "",
        "is_correct": false
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
      "context": "This question tests the stereospecificity of the E2 mechanism, which requires an anti-periplanar transition state.",
      "process": "Step 1: The E2 reaction requires the beta-hydrogen on C3 and the bromine on C2 to align anti-periplanar (180\u00b0 dihedral angle) in the transition state.\nStep 2: Draw the Newman projection of the (2R,3R) diastereomer looking down the C2-C3 bond.\nStep 3: Rotate the projection so that the H on C3 and the Br on C2 are anti-periplanar.\nStep 4: Observe the spatial positions of the remaining groups: the methyl group on C2 and the methyl group on C3 are on the same side of the molecule (cis to each other), while the phenyl group on C3 and the methyl group on C2 are on opposite sides. This geometry yields the (Z) alkene: (Z)-2-phenylbut-2-ene.",
      "result": "(Z)-2-phenylbut-2-ene is the exclusive product due to the anti-periplanar transition state requirement."
    }
  },
  {
    "question_id": "ch11_q40_e2_stereospecificity_3S_2R",
    "topic": "E2 Mechanism: Stereochemistry",
    "difficulty_level": "Hard",
    "question_text": "Under identical E2 conditions, the (2R,3S) diastereomer of 2-bromo-3-phenylbutane yields a different alkene stereoisomer compared to the (2R,3R) isomer. What is the major product?",
    "question_smiles": "CC(c1ccccc1)[C@@H](C)Br",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-2-phenylbut-2-ene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-2-phenylbut-2-ene",
        "smiles": "",
        "is_correct": false
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
      "context": "This question demonstrates how diastereomeric starting materials yield different stereoisomeric products in E2 reactions.",
      "process": "Step 1: Set up the anti-periplanar conformation for the (2R,3S) isomer looking down the C2-C3 bond.\nStep 2: In this conformation, the hydrogen on C3 and the bromine on C2 are at 180\u00b0.\nStep 3: Observe the relative positions of the remaining groups: the two methyl groups are on opposite sides (trans to each other), and the phenyl group is on the opposite side of the methyl group on C2. This geometry concerted elimination yields (E)-2-phenylbut-2-ene.",
      "result": "(E)-2-phenylbut-2-ene is formed stereospecifically from the (2R,3S) diastereomer."
    }
  },
  {
    "question_id": "ch11_q41_menthyl_chloride_elimination",
    "topic": "E2 Mechanism: Stereochemistry",
    "difficulty_level": "Hard",
    "question_text": "Menthyl chloride and neomenthyl chloride are diastereomers. When neomenthyl chloride is treated with sodium ethoxide, it reacts rapidly to give 3-menthene. Under the same conditions, menthyl chloride reacts much more slowly and yields 2-menthene. What is the conformational basis for this difference?",
    "question_smiles": "CC1CCC(C(C)C)C(Cl)C1",
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
      "context": "This question tests the geometric requirement of trans-diaxial (anti-periplanar) orientation in cyclohexane systems undergoing E2 reactions.",
      "process": "Step 1: E2 elimination in cyclohexane rings requires a trans-diaxial relationship between the leaving group and the beta-hydrogen.\nStep 2: In neomenthyl chloride, the chlorine is cis to the methyl and isopropyl groups. In the most stable chair conformation (with methyl and isopropyl equatorial), the chlorine is forced axial. It has axial beta-hydrogens on both adjacent carbons, permitting rapid E2 elimination to yield 3-menthene (Zaitsev product).\nStep 3: In menthyl chloride, the chlorine is trans to the methyl and isopropyl groups. The most stable chair has all three groups equatorial. To eliminate, the ring must flip to a high-energy chair where chlorine is axial (and both methyl/isopropyl are axial). In this conformation, there is only one axial beta-hydrogen, resulting in a slow reaction rate and yielding the less stable 2-menthene.",
      "result": "The conformationally favored axial chlorine in neomenthyl chloride makes it much more reactive."
    }
  },
  {
    "question_id": "ch11_q42_cyclohexane_E2_tert_butyl",
    "topic": "E2 Mechanism: Stereochemistry",
    "difficulty_level": "Hard",
    "question_text": "When cis-1-bromo-4-tert-butylcyclohexane is treated with sodium ethoxide, it undergoes rapid E2 elimination. Under identical conditions, the trans isomer reacts extremely slowly. Why?",
    "question_smiles": "CC(C)(C)C1CCC(Br)CC1",
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
      "context": "This question tests the requirement for trans-diaxial geometry in cyclohexane E2 reactions using a conformationally locked system.",
      "process": "Step 1: The extremely bulky tert-butyl group acts as a conformational anchor, locking the cyclohexane ring in a conformation where the tert-butyl is equatorial.\nStep 2: In cis-1-bromo-4-tert-butylcyclohexane, the bromine is axial. This provides an anti-periplanar (trans-diaxial) relationship with the axial beta-hydrogens at C2 and C6, leading to rapid elimination.\nStep 3: In trans-1-bromo-4-tert-butylcyclohexane, the bromine is equatorial. To eliminate, the ring must flip to a conformation where both the tert-butyl and bromine are axial. This is highly unfavorable due to the massive steric strain of an axial tert-butyl group, resulting in an extremely slow reaction rate.",
      "result": "The cis isomer reacts faster because the bromine is conformationally locked in the required axial position."
    }
  },
  {
    "question_id": "ch11_q43_primary_kie_e2",
    "topic": "E2 Mechanism: Kinetics",
    "difficulty_level": "Medium",
    "question_text": "An E2 elimination reaction of 2-bromopropane with sodium hydroxide in water exhibits a primary kinetic isotope effect (kH/kD \u2248 6.7) when the beta-hydrogens are replaced with deuterium. What does this value indicate?",
    "question_smiles": "CC(Br)C",
    "options": [
      {
        "option_id": "A",
        "text": "The C-H bond is broken in the rate-determining step of the reaction.",
        "smiles": "C=CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The reaction proceeds via a carbocation intermediate.",
        "smiles": "C=CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "C-Br bond cleavage is the only rate-determining step.",
        "smiles": "C=CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The base is not involved in the rate-determining step.",
        "smiles": "C=CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the interpretation of primary kinetic isotope effects (KIE) in elimination mechanisms.",
      "process": "Step 1: A primary KIE (typically 2 to 8) occurs when a bond to the isotope is broken during the rate-determining step.\nStep 2: In the concerted E2 mechanism, proton abstraction by the base and leaving group departure occur simultaneously. The rate-determining step involves breaking the beta-C-H bond.\nStep 3: The C-H bond has a lower zero-point energy and is cleaved faster than the C-D bond, resulting in the observed rate difference (kH/kD \u2248 6.7).",
      "result": "The primary KIE confirms that beta-proton transfer is part of the rate-determining step."
    }
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
        "smiles": "CC(C)=CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "E2 pathway; ethanol acts as a strong base to remove the beta-proton in a concerted step.",
        "smiles": "CC(C)=CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "SN1 pathway followed by dehydration of the resulting alcohol.",
        "smiles": "CC(C)=CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A free-radical elimination process.",
        "smiles": "CC(C)=CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the mechanism of elimination during solvolysis of tertiary halides.",
      "process": "Step 1: Ethanol is a weak nucleophile and a weak base. With a tertiary substrate, solvolysis proceeds through a stepwise pathway starting with ionization (slow step) to form a tertiary carbocation: (CH3)2C+-CH2-CH3.\nStep 2: In the E1 pathway, the weak base (ethanol) removes a proton from one of the adjacent beta-carbons of the carbocation in a fast second step.\nStep 3: Deprotonation at C3 yields the more stable, trisubstituted Zaitsev product (2-methylbut-2-ene) as the major elimination product.",
      "result": "The elimination products are formed via the E1 pathway, with the Zaitsev product dominating."
    }
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
      "context": "This question tests E1 elimination involving carbocation rearrangements.",
      "process": "Step 1: The weak base/solvent ethanol promotes ionization of the secondary halide to form a secondary carbocation: (CH3)3C-C+H-CH3.\nStep 2: A 1,2-methyl shift occurs to generate the more stable tertiary carbocation: (CH3)2C+-CH(CH3)2.\nStep 3: Deprotonation of this rearranged carbocation by the solvent can occur at C1 or C3. Removing a proton from C3 yields the highly substituted tetrasubstituted alkene, 2,3-dimethylbut-2-ene (the thermodynamic Zaitsev product).",
      "result": "The major product is the tetrasubstituted alkene 2,3-dimethylbut-2-ene, formed via E1 rearrangement."
    }
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
      "context": "This question tests the competition between SN2 and E2 pathways for primary substrates with bulky bases.",
      "process": "Step 1: 1-bromobutane is a primary alkyl halide, which generally favors SN2 substitution over elimination due to low steric hindrance.\nStep 2: However, potassium tert-butoxide is a very strong, sterically hindered base. The steric bulk of the tert-butoxide group blocks backside attack on the primary carbon, slowing the SN2 rate.\nStep 3: Instead, the base abstracts a beta-hydrogen from C2, promoting concerted E2 elimination to yield but-1-ene.",
      "result": "The major product is but-1-ene via an E2 elimination pathway."
    }
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
        "smiles": "CC(O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propene via an E2 mechanism.",
        "smiles": "C=CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Propan-2-ol via an SN2 mechanism.",
        "smiles": "CC(O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Diisopropyl ether via an E1 mechanism.",
        "smiles": "CC(C)OC(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question evaluates the competition for secondary alkyl halides under weak nucleophile/weak base conditions.",
      "process": "Step 1: 2-iodopropane is a secondary alkyl halide. Water is a weak nucleophile and a weak base.\nStep 2: Under these conditions, the substrate undergoes ionization (slow step) to form a secondary carbocation (SN1/E1 pathway).\nStep 3: At room temperature, substitution (SN1) is favored over elimination (E1) because the activation energy for nucleophilic attack is lower than that for proton abstraction. The carbocation is attacked by water to form propan-2-ol.",
      "result": "The major product is propan-2-ol via the SN1 pathway."
    }
  },
  {
    "question_id": "ch11_q48_competition_secondary_strong",
    "topic": "Substitution vs. Elimination Competition",
    "difficulty_level": "Medium",
    "question_text": "Predict the major organic product when 2-chlorobutane is treated with sodium ethoxide in ethanol at 60 \u00b0C.",
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
      "context": "This question tests the competition between SN2 and E2 pathways for secondary substrates with strong, unhindered bases at elevated temperatures.",
      "process": "Step 1: 2-chlorobutane is a secondary substrate. Ethoxide (EtO-) is a strong base and a strong nucleophile.\nStep 2: With secondary substrates, strong bases promote both SN2 and E2.\nStep 3: Elevated temperatures (60 \u00b0C) favor elimination over substitution because elimination increases the number of particles (entropy is positive). The major product of the E2 elimination is the thermodynamically most stable alkene, trans-but-2-ene.",
      "result": "trans-But-2-ene is the major product formed via E2 at high temperatures."
    }
  },
  {
    "question_id": "ch11_q49_competition_tertiary_nucleophile",
    "topic": "Substitution vs. Elimination Competition",
    "difficulty_level": "Hard",
    "question_text": "Predict the major organic pathway and product when 2-iodo-2-methylpropane is treated with sodium azide (NaN3) in ethanol.",
    "question_smiles": "CC(C)(I)C",
    "options": [
      {
        "option_id": "A",
        "text": "SN1/E1 pathways yielding 2-ethoxy-2-methylpropane and 2-methylpropene.",
        "smiles": "CC(C)(OCC)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "SN2 pathway yielding 2-azido-2-methylpropane.",
        "smiles": "CC(C)(N=[N+]=[N-])C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "E2 pathway yielding 2-methylpropene.",
        "smiles": "CC(=C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "No reaction occurs because tertiary halides are inert.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests reaction pathways for tertiary alkyl halides with strong nucleophiles that are weak bases.",
      "process": "Step 1: 2-iodo-2-methylpropane is a tertiary alkyl halide. Steric hindrance blocks backside attack, making SN2 impossible.\nStep 2: Azide (N3-) is a strong nucleophile but a weak base (conjugate acid HN3 pKa \u2248 4.7). Therefore, it does not promote E2 elimination.\nStep 3: The tertiary halide undergoes ionization to form a stable tertiary carbocation (SN1/E1 pathway).\nStep 4: Once the carbocation is formed, it is attacked by the solvent (ethanol) to give 2-ethoxy-2-methylpropane (SN1) and undergoes minor deprotonation to yield 2-methylpropene (E1).",
      "result": "The reaction proceeds via SN1/E1 pathways because SN2 and E2 are blocked."
    }
  },
  {
    "question_id": "ch11_q50_competition_temperature_entropy",
    "topic": "Substitution vs. Elimination Competition",
    "difficulty_level": "Medium",
    "question_text": "Why does increasing the temperature of a reaction mixture containing a secondary alkyl halide and a strong base shift the product distribution in favor of E2 elimination over SN2 substitution?",
    "question_smiles": "CCC(Br)C",
    "options": [
      {
        "option_id": "A",
        "text": "Elimination reactions yield more molecules of product than reactants, leading to a positive change in entropy (\u0394S > 0); the -T\u0394S term makes the free energy (\u0394G) of elimination more favorable at higher temperatures.",
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
      "context": "This question explores the thermodynamic and entropic differences between substitution and elimination reactions.",
      "process": "Step 1: An SN2 substitution reaction is bimolecular: two reactant molecules yield two product molecules. The change in entropy (\u0394S) is close to zero.\nStep 2: An E2 elimination reaction is also bimolecular but yields three product molecules (alkene + protonated base + leaving group). The change in entropy (\u0394S) is positive because there is an increase in molecular disorder.\nStep 3: Analyze the Gibbs free energy equation: \u0394G = \u0394H - T\u0394S. As the temperature (T) increases, the negative -T\u0394S term for elimination becomes larger and more dominant, making the overall \u0394G for E2 more favorable than SN2.",
      "result": "Higher temperature favors elimination due to its positive entropy change."
    }
  },
  {
    "question_id": "ch11_q_dynamic_sn1_sn2",
    "topic": "Nucleophilic Substitution Mechanisms",
    "difficulty_level": "Hard",
    "question_text": "Match each substrate to its primary mechanism route with strong nucleophiles (like NaCN/DMF) or weak nucleophiles (like H2O).",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CBr",
        "correctAnswer": "SN2 (Methyl substrate)"
      },
      {
        "smiles": "CC(C)(C)Br",
        "correctAnswer": "SN1 (Tertiary substrate)"
      },
      {
        "smiles": "CC(Br)C",
        "correctAnswer": "SN2 / E2 competitive"
      },
      {
        "smiles": "CC=CBr",
        "correctAnswer": "Unreactive to normal SN1/SN2 (Vinylic)"
      }
    ],
    "match_options": [
      "SN2 (Methyl substrate)",
      "SN1 (Tertiary substrate)",
      "SN2 / E2 competitive",
      "Unreactive to normal SN1/SN2 (Vinylic)"
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
      "context": "Analyzing steric and electronic factors in SN1 vs SN2.",
      "process": "Bromomethane (CBr) is sterically unhindered: SN2. t-Butyl bromide is tertiary, sterically blocked: SN1. 2-bromopropane is secondary: competitive. Vinyl bromide has sp2 carbon which doesn't undergo backside attack or form stable carbocations: unreactive.",
      "result": "Substrates matched to their preferred substitution route."
    }
  }
];
