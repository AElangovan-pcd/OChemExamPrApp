import os
import json
import re

questions_dir = r"C:\Users\easam\Documents\Gemini\OChemExamPrApp\questions"

chapter_questions = {
    4: [ # Cycloalkanes
        {
            "question_id": "ch4_q_dynamic_chair_energy",
            "topic": "Cycloalkanes Conformational Analysis",
            "difficulty_level": "Hard",
            "question_text": "Consider the potential energy diagram of cyclohexane conformations during a ring flip. Match each point to its corresponding conformation.",
            "energy_diagram": {
                "points": [
                    {"state": "Chair (lowest energy)", "energy": 0},
                    {"state": "Half-Chair (highest energy transition)", "energy": 45},
                    {"state": "Twist-Boat (local minimum)", "energy": 23},
                    {"state": "Boat (local maximum transition)", "energy": 30}
                ]
            },
            "options": [
                {"option_id": "A", "text": "Chair conformation is the most stable (0 kJ/mol), Half-Chair is the least stable transition state (45 kJ/mol), and Twist-Boat is a stable intermediate (23 kJ/mol).", "is_correct": True},
                {"option_id": "B", "text": "Boat conformation is more stable than Chair.", "is_correct": False},
                {"option_id": "C", "text": "Half-chair is a stable intermediate state.", "is_correct": False},
                {"option_id": "D", "text": "All conformations have equal energy.", "is_correct": False}
            ],
            "feedback": {
                "context": "Understanding cyclohexane ring-flip energetics.",
                "process": "Chair is the ground state. Half-chair requires severe angle and torsional strain (45 kJ/mol). Twist-boat relieves some eclipsing strain (23 kJ/mol). Boat is a transition state between twist-boats (30 kJ/mol).",
                "result": "Order of stability: Chair > Twist-Boat > Boat > Half-Chair."
            }
        },
        {
            "question_id": "ch4_q_dynamic_cis_trans_cyclo",
            "topic": "Cycloalkane Stereochemistry",
            "difficulty_level": "Medium",
            "question_text": "Match each cycloalkane configuration to its correct stereochemical description.",
            "interaction_type": "matching-grid",
            "grid_columns": 2,
            "match_items": [
                {"smiles": "C1[C@@H](C)C[C@@H](C)CC1", "correctAnswer": "cis-1,3-Dimethylcyclohexane"},
                {"smiles": "C1[C@@H](C)C[C@H](C)CC1", "correctAnswer": "trans-1,3-Dimethylcyclohexane"},
                {"smiles": "C1[C@@H](C)[C@@H](C)CCC1", "correctAnswer": "cis-1,2-Dimethylcyclohexane"},
                {"smiles": "C1[C@@H](C)[C@H](C)CCC1", "correctAnswer": "trans-1,2-Dimethylcyclohexane"}
            ],
            "match_options": ["cis-1,3-Dimethylcyclohexane", "trans-1,3-Dimethylcyclohexane", "cis-1,2-Dimethylcyclohexane", "trans-1,2-Dimethylcyclohexane", "1,1-Dimethylcyclohexane"],
            "options": [
                {"option_id": "A", "text": "All matched correctly", "is_correct": True},
                {"option_id": "B", "text": "Incorrect cis/trans mapping", "is_correct": False}
            ],
            "feedback": {
                "context": "Distinguishing cis/trans isomers in dimethylcyclohexanes.",
                "process": "Item 1 has both methyls on the same face (wedges/wedges) at 1,3 positions: cis. Item 2 has one wedge and one dash at 1,3: trans. Item 3 has both wedges at 1,2: cis. Item 4 has wedge/dash at 1,2: trans.",
                "result": "Cis/trans naming depends on whether substituents point to same or opposite faces."
            }
        }
    ],
    5: [ # Stereochemistry
        {
            "question_id": "ch5_q_dynamic_rs_assign",
            "topic": "Stereochemistry: R/S Configurations",
            "difficulty_level": "Hard",
            "question_text": "Identify the stereocenter configurations for the following chiral molecules.",
            "interaction_type": "matching-grid",
            "grid_columns": 2,
            "match_items": [
                {"smiles": "C[C@@H](O)C(=O)O", "correctAnswer": "S-Lactic Acid"},
                {"smiles": "C[C@H](O)C(=O)O", "correctAnswer": "R-Lactic Acid"},
                {"smiles": "N[C@@H](C)C(=O)O", "correctAnswer": "S-Alanine"},
                {"smiles": "N[C@H](C)C(=O)O", "correctAnswer": "R-Alanine"}
            ],
            "match_options": ["S-Lactic Acid", "R-Lactic Acid", "S-Alanine", "R-Alanine", "Meso-Tartaric Acid"],
            "options": [
                {"option_id": "A", "text": "All matched correctly", "is_correct": True},
                {"option_id": "B", "text": "Incorrect R/S assignments", "is_correct": False}
            ],
            "feedback": {
                "context": "Assigning Cahn-Ingold-Prelog priorities to configure stereocenters.",
                "process": "For lactic acid, -OH is 1, -COOH is 2, -CH3 is 3, -H is 4. If the lowest priority group H is on a wedge, reverse configuration. This correctly yields S for C@@H and R for C@H.",
                "result": "Stereocenter configurations assigned."
            }
        }
    ],
    6: [ # Reaction Overview
        {
            "question_id": "ch6_q_dynamic_reaction_energy",
            "topic": "Reaction Energetics & Kinetics",
            "difficulty_level": "Medium",
            "question_text": "Consider the potential energy diagram of an addition reaction. Match the states to their corresponding kinetic features.",
            "energy_diagram": {
                "points": [
                    {"state": "Reactants", "energy": 10},
                    {"state": "Transition State 1", "energy": 80},
                    {"state": "Intermediate (Carbocation)", "energy": 40},
                    {"state": "Transition State 2", "energy": 60},
                    {"state": "Products", "energy": -30}
                ]
            },
            "options": [
                {"option_id": "A", "text": "The reaction is exergonic (delta H = -40 kJ/mol) with the first step being rate-limiting (Ea = 70 kJ/mol).", "is_correct": True},
                {"option_id": "B", "text": "The reaction is endergonic with a single transition state.", "is_correct": False},
                {"option_id": "C", "text": "The second step is rate-determining.", "is_correct": False},
                {"option_id": "D", "text": "The intermediate is more stable than the product.", "is_correct": False}
            ],
            "feedback": {
                "context": "Analyzing two-step reaction coordinates.",
                "process": "Reactant energy = 10. TS1 = 80. Ea1 = 80 - 10 = 70 kJ/mol. TS2 = 60. Ea2 = 60 - 40 = 20 kJ/mol. Since Ea1 > Ea2, the first step is rate-limiting. Product energy = -30. delta H = -30 - 10 = -40 kJ/mol (exergonic).",
                "result": "Exergonic reaction with rate-determining first step."
            }
        }
    ],
    7: [ # Alkenes: Structure
        {
            "question_id": "ch7_q_dynamic_ez_alkene",
            "topic": "Alkene Stereochemistry: E/Z",
            "difficulty_level": "Medium",
            "question_text": "Match each alkene structure to its correct stereochemical description.",
            "interaction_type": "matching-grid",
            "grid_columns": 2,
            "match_items": [
                {"smiles": "C/C=C/C", "correctAnswer": "(E)-2-butene"},
                {"smiles": "C/C=C\\C", "correctAnswer": "(Z)-2-butene"},
                {"smiles": "C/C(C)=C/Cl", "correctAnswer": "(E)-1-chloro-2-methylpropene"},
                {"smiles": "C/C(C)=C\\Cl", "correctAnswer": "(Z)-1-chloro-2-methylpropene"}
            ],
            "match_options": ["(E)-2-butene", "(Z)-2-butene", "(E)-1-chloro-2-methylpropene", "(Z)-1-chloro-2-methylpropene", "Isobutene"],
            "options": [
                {"option_id": "A", "text": "All matched correctly", "is_correct": True},
                {"option_id": "B", "text": "Incorrect E/Z mapping", "is_correct": False}
            ],
            "feedback": {
                "context": "Applying E/Z rules based on priority of substituents on double bonds.",
                "process": "In 2-butene, methyls are on opposite sides for E, and same side for Z. In 1-chloro-2-methylpropene, Cl (priority 1) vs H (priority 2) on C1, and Methyl (priority 1) vs Methyl (priority 2) on C2 determines configuration.",
                "result": "E/Z nomenclature resolved."
            }
        }
    ],
    8: [ # Alkenes: Reactions
        {
            "question_id": "ch8_q_dynamic_alkene_rxns",
            "topic": "Alkenes: Electrophilic Additions",
            "difficulty_level": "Medium",
            "question_text": "Identify the major products of the electrophilic addition reactions below.",
            "interaction_type": "matching-grid",
            "grid_columns": 2,
            "match_items": [
                {"smiles": "CC=C.O.OS(=O)(=O)O", "correctAnswer": "CC(O)C"},
                {"smiles": "CC=C.B.OO.[Na+].[OH-]", "correctAnswer": "CCCO"},
                {"smiles": "CC=C.BrBr.ClCCl", "correctAnswer": "CC(Br)C(Br)"},
                {"smiles": "CC=C.O=C(OO)c1cccc(Cl)c1", "correctAnswer": "CC1OC1"}
            ],
            "match_options": ["CC(O)C", "CCCO", "CC(Br)C(Br)", "CC1OC1", "CCC"],
            "options": [
                {"option_id": "A", "text": "All matched correctly", "is_correct": True},
                {"option_id": "B", "text": "Incorrect product mapping", "is_correct": False}
            ],
            "feedback": {
                "context": "Predicting alkene addition products: hydration (Markovnikov vs anti-Markovnikov), halogenation, epoxidation.",
                "process": "Item 1: Markovnikov acid-catalyzed hydration yields propan-2-ol. Item 2: Hydroboration-oxidation yields 1-propanol. Item 3: Bromination yields 1,2-dibromopropane. Item 4: Epoxidation yields propylene oxide.",
                "result": "Alkene reaction products identified."
            }
        }
    ],
    9: [ # Alkynes
        {
            "question_id": "ch9_q_dynamic_alkyne_hydration",
            "topic": "Alkynes: Electrophilic Additions",
            "difficulty_level": "Medium",
            "question_text": "Predict the correct products from the hydration of propyne.",
            "reaction_scheme": {
                "reactants": ["CC#C"],
                "reagents": "H2O, H2SO4, HgSO4",
                "conditions": "sulfuric acid / Hg(II) catalyst",
                "products": ["CC(C)=O"]
            },
            "options": [
                {"option_id": "A", "text": "Propyne undergoes Markovnikov addition of water to yield an enol intermediate, which tautomerizes to acetone.", "is_correct": True},
                {"option_id": "B", "text": "Propyne yields propionaldehyde under these conditions.", "is_correct": False},
                {"option_id": "C", "text": "The reaction produces propane-1,2-diol.", "is_correct": False},
                {"option_id": "D", "text": "The reaction leads to alkene reduction.", "is_correct": False}
            ],
            "feedback": {
                "context": "Analyzing alkyne hydration mechanisms.",
                "process": "Addition of water occurs with Markovnikov selectivity, forming 2-propenol (enol). The enol quickly tautomerizes to the more stable ketone form, acetone.",
                "result": "The final product is acetone."
            }
        }
    ],
    10: [ # Organohalides
        {
            "question_id": "ch10_q_dynamic_radical_bromination",
            "topic": "Radical Halogenation",
            "difficulty_level": "Hard",
            "question_text": "Identify the major monobromination product of propane under light.",
            "reaction_scheme": {
                "reactants": ["CCC"],
                "reagents": "Br2, light",
                "conditions": "radical pathway",
                "products": ["CC(Br)C"]
            },
            "options": [
                {"option_id": "A", "text": "2-Bromopropane is the major product due to the higher stability of secondary radicals.", "is_correct": True},
                {"option_id": "B", "text": "1-Bromopropane is the major product due to statistical probability.", "is_correct": False},
                {"option_id": "C", "text": "1,2-Dibromopropane is the primary product.", "is_correct": False},
                {"option_id": "D", "text": "Propene is formed via elimination.", "is_correct": False}
            ],
            "feedback": {
                "context": "Assessing regiochemistry of radical halogenations.",
                "process": "Bromine radicals are highly selective. Propane contains primary and secondary hydrogens. Abstraction of secondary hydrogen yields a secondary radical (stable), which reacts with Br2 to give 2-bromopropane.",
                "result": "The major product is 2-bromopropane."
            }
        }
    ],
    11: [ # Substitutions and Eliminations
        {
            "question_id": "ch11_q_dynamic_sn1_sn2",
            "topic": "Nucleophilic Substitution Mechanisms",
            "difficulty_level": "Hard",
            "question_text": "Match each substrate to its primary mechanism route with strong nucleophiles (like NaCN/DMF) or weak nucleophiles (like H2O).",
            "interaction_type": "matching-list",
            "match_items": [
                {"smiles": "CBr", "correctAnswer": "SN2 (Methyl substrate)"},
                {"smiles": "CC(C)(C)Br", "correctAnswer": "SN1 (Tertiary substrate)"},
                {"smiles": "CC(Br)C", "correctAnswer": "SN2 / E2 competitive"},
                {"smiles": "CC=CBr", "correctAnswer": "Unreactive to normal SN1/SN2 (Vinylic)"}
            ],
            "match_options": ["SN2 (Methyl substrate)", "SN1 (Tertiary substrate)", "SN2 / E2 competitive", "Unreactive to normal SN1/SN2 (Vinylic)"],
            "options": [
                {"option_id": "A", "text": "All matched correctly", "is_correct": True},
                {"option_id": "B", "text": "Incorrect pathway mapping", "is_correct": False}
            ],
            "feedback": {
                "context": "Analyzing steric and electronic factors in SN1 vs SN2.",
                "process": "Bromomethane (CBr) is sterically unhindered: SN2. t-Butyl bromide is tertiary, sterically blocked: SN1. 2-bromopropane is secondary: competitive. Vinyl bromide has sp2 carbon which doesn't undergo backside attack or form stable carbocations: unreactive.",
                "result": "Substrates matched to their preferred substitution route."
            }
        }
    ],
    12: [ # Spectroscopy IR/MS
        {
            "question_id": "ch12_q_dynamic_ir_dips",
            "topic": "Infrared Spectroscopy",
            "difficulty_level": "Medium",
            "question_text": "Match each functional group to its characteristic IR absorption wavenumber.",
            "interaction_type": "matching-list",
            "match_items": [
                {"smiles": "CCO", "correctAnswer": "Broad 3300 cm-1 (O-H stretch)"},
                {"smiles": "CC(C)=O", "correctAnswer": "Sharp 1715 cm-1 (C=O stretch)"},
                {"smiles": "CC#N", "correctAnswer": "Sharp 2250 cm-1 (C#N stretch)"},
                {"smiles": "CC#C", "correctAnswer": "Sharp 2120 cm-1 (C#C stretch)"}
            ],
            "match_options": ["Broad 3300 cm-1 (O-H stretch)", "Sharp 1715 cm-1 (C=O stretch)", "Sharp 2250 cm-1 (C#N stretch)", "Sharp 2120 cm-1 (C#C stretch)", "Broad 1100 cm-1 (C-O stretch)"],
            "options": [
                {"option_id": "A", "text": "All matched correctly", "is_correct": True},
                {"option_id": "B", "text": "Incorrect IR bands", "is_correct": False}
            ],
            "feedback": {
                "context": "Identifying functional groups via IR key frequencies.",
                "process": "Alcohols exhibit broad O-H stretch at 3300. Ketones show strong, sharp carbonyl stretch at 1715. Nitriles absorb around 2250 (triple bond). Terminal alkynes absorb around 2120.",
                "result": "Wavenumbers correctly mapped."
            }
        }
    ],
    13: [ # NMR
        {
            "question_id": "ch13_q_dynamic_nmr_shifts",
            "topic": "NMR Spectroscopy",
            "difficulty_level": "Hard",
            "question_text": "Match each proton highlight in the structures to its approximate 1H-NMR chemical shift.",
            "interaction_type": "matching-grid",
            "grid_columns": 2,
            "match_items": [
                {"smiles": "CCO", "correctAnswer": "3.5 - 4.5 ppm (adjacent to O)"},
                {"smiles": "Cc1ccccc1", "correctAnswer": "7.2 ppm (aromatic ring protons)"},
                {"smiles": "CC(C)=O", "correctAnswer": "2.1 ppm (adjacent to C=O)"},
                {"smiles": "CCC", "correctAnswer": "0.9 ppm (sp3 alkyl methyl)"}
            ],
            "match_options": ["3.5 - 4.5 ppm (adjacent to O)", "7.2 ppm (aromatic ring protons)", "2.1 ppm (adjacent to C=O)", "0.9 ppm (sp3 alkyl methyl)", "9.8 ppm (aldehyde)"],
            "options": [
                {"option_id": "A", "text": "All matched correctly", "is_correct": True},
                {"option_id": "B", "text": "Incorrect chemical shifts", "is_correct": False}
            ],
            "feedback": {
                "context": "Assessing shielding/deshielding effects on proton chemical shifts.",
                "process": "Alkoxy protons are deshielded by electronegative oxygen (3.5-4.5). Aromatic ring currents shift protons downfield (7.2). Carbonyl allylic/alpha protons are slightly deshielded (2.1). Regular alkane sp3 protons are shielded (0.9).",
                "result": "Protons matched to expected NMR shift ranges."
            }
        }
    ],
    14: [ # Conjugated Dienes
        {
            "question_id": "ch14_q_dynamic_addition_14",
            "topic": "Conjugated Dienes: Electrophilic Additions",
            "difficulty_level": "Hard",
            "question_text": "Identify the major products of the reaction of 1,3-butadiene with 1 equivalent of HBr.",
            "reaction_scheme": {
                "reactants": ["C=CC=C"],
                "reagents": "HBr (1 eq)",
                "conditions": "0°C vs 40°C",
                "products": ["CC(Br)C=C", "CC=CCC"]
            },
            "options": [
                {"option_id": "A", "text": "At 0°C, the 1,2-addition kinetic product is favored; at 40°C, the 1,4-addition thermodynamic product is favored.", "is_correct": True},
                {"option_id": "B", "text": "Only 1,2-addition occurs at both temperatures.", "is_correct": False},
                {"option_id": "C", "text": "Only 1,4-addition occurs at both temperatures.", "is_correct": False},
                {"option_id": "D", "text": "No reaction occurs under these conditions.", "is_correct": False}
            ],
            "feedback": {
                "context": "Evaluating thermodynamic vs kinetic control in conjugated systems.",
                "process": "Protonation yields an allylic carbocation. At low temperature (0°C), nucleophilic attack occurs rapidly at C2 (closer to charge) to give the kinetic 1,2-product. At high temperature (40°C), equilibrium is reached, yielding the more substituted, stable internal alkene (thermodynamic 1,4-product).",
                "result": "Product distributions are temperature-dependent."
            }
        }
    ],
    15: [ # Aromaticity
        {
            "question_id": "ch15_q_dynamic_aromaticity_check",
            "topic": "Benzene and Aromaticity",
            "difficulty_level": "Medium",
            "question_text": "Match each cyclic structure to its aromaticity classification based on Huckel's rules.",
            "interaction_type": "matching-grid",
            "grid_columns": 2,
            "match_items": [
                {"smiles": "c1ccccc1", "correctAnswer": "Aromatic (6 pi)"},
                {"smiles": "C1=CC=CC=C1", "correctAnswer": "Non-aromatic (sp3 C present)"},
                {"smiles": "C1=CC=CC=CC=C1", "correctAnswer": "Antiaromatic / Non-aromatic tub (8 pi)"},
                {"smiles": "[cH-]1cccc1", "correctAnswer": "Aromatic (6 pi)"}
            ],
            "match_options": ["Aromatic (6 pi)", "Non-aromatic (sp3 C present)", "Antiaromatic / Non-aromatic tub (8 pi)"],
            "options": [
                {"option_id": "A", "text": "All matched correctly", "is_correct": True},
                {"option_id": "B", "text": "Incorrect classification", "is_correct": False}
            ],
            "feedback": {
                "context": "Analyzing Huckel's rules (planar, cyclic, fully conjugated, 4n+2 pi electrons).",
                "process": "Benzene has 6 pi electrons, fully conjugated: Aromatic. 1,3-cyclohexadiene has sp3 carbons: Non-aromatic. Cyclooctatetraene has 8 pi electrons, adopts non-planar tub shape: Non-aromatic. Cyclopentadienyl anion has lone pair conjugated: Aromatic (6 pi).",
                "result": "Aromaticity determined successfully."
            }
        }
    ],
    16: [ # EAS
        {
            "question_id": "ch16_q_dynamic_directing_effects",
            "topic": "Electrophilic Aromatic Substitution",
            "difficulty_level": "Medium",
            "question_text": "Match each benzene substituent to its directing and activating/deactivating status in Electrophilic Aromatic Substitution.",
            "interaction_type": "matching-list",
            "match_items": [
                {"smiles": "Oc1ccccc1", "correctAnswer": "Ortho/Para Directing - Activator"},
                {"smiles": "Cc1ccccc1", "correctAnswer": "Ortho/Para Directing - Weak Activator"},
                {"smiles": "O=[N+]([O-])c1ccccc1", "correctAnswer": "Meta Directing - Deactivator"},
                {"smiles": "Clc1ccccc1", "correctAnswer": "Ortho/Para Directing - Deactivator"}
            ],
            "match_options": ["Ortho/Para Directing - Activator", "Ortho/Para Directing - Weak Activator", "Meta Directing - Deactivator", "Ortho/Para Directing - Deactivator"],
            "options": [
                {"option_id": "A", "text": "All matched correctly", "is_correct": True},
                {"option_id": "B", "text": "Incorrect directing effect mapping", "is_correct": False}
            ],
            "feedback": {
                "context": "Predicting directing effects of substituents on a benzene ring.",
                "process": "Phenol (-OH) donates electrons by resonance: strong o/p activator. Toluene (-CH3) donates via hyperconjugation: weak o/p activator. Nitrobenzene (-NO2) is highly electron-withdrawing: m deactivator. Chlorobenzene (-Cl) has competing induction vs resonance: o/p deactivator.",
                "result": "Substituents matched to directing effects."
            }
        }
    ],
    17: [ # Alcohols and Phenols
        {
            "question_id": "ch17_q_dynamic_alcohol_oxidation",
            "topic": "Alcohols: Oxidation Reactions",
            "difficulty_level": "Medium",
            "question_text": "Predict the correct products of the following alcohol oxidation reactions.",
            "interaction_type": "matching-grid",
            "grid_columns": 2,
            "match_items": [
                {"smiles": "CCCO.O=C=[Cr](=O)(O)O", "correctAnswer": "CCC(=O)O (Primary alcohol + Chromic acid)"},
                {"smiles": "CCCO.C1=CC=C[NH+]=C1.Cl[Cr](=O)(=O)[O-]", "correctAnswer": "CCC=O (Primary alcohol + PCC)"},
                {"smiles": "CC(O)C.O=C=[Cr](=O)(O)O", "correctAnswer": "CC(C)=O (Secondary alcohol + Chromic acid)"},
                {"smiles": "CC(C)(O)C.O=C=[Cr](=O)(O)O", "correctAnswer": "No Reaction (Tertiary alcohol)"}
            ],
            "match_options": [
                "CCC(=O)O (Primary alcohol + Chromic acid)",
                "CCC=O (Primary alcohol + PCC)",
                "CC(C)=O (Secondary alcohol + Chromic acid)",
                "No Reaction (Tertiary alcohol)"
            ],
            "options": [
                {"option_id": "A", "text": "All matched correctly", "is_correct": True},
                {"option_id": "B", "text": "Incorrect oxidation products", "is_correct": False}
            ],
            "feedback": {
                "context": "Analyzing oxidation levels of primary, secondary, and tertiary alcohols.",
                "process": "Primary alcohols oxidize to carboxylic acids with strong oxidizers (Chromic acid) and aldehydes with mild ones (PCC). Secondary alcohols oxidize to ketones. Tertiary alcohols have no alpha-hydrogens and do not oxidize.",
                "result": "Oxidation products mapped."
            }
        }
    ],
    18: [ # Ethers and Epoxides
        {
            "question_id": "ch18_q_dynamic_epoxide_opening",
            "topic": "Epoxide Ring Opening Reactions",
            "difficulty_level": "Hard",
            "question_text": "Determine the regiochemical outcome of epoxide ring opening under acidic vs basic conditions.",
            "reaction_scheme": {
                "reactants": ["CC1(C)OC1"],
                "reagents": "1) Acidic (H3O+) vs 2) Basic (NaOCH3/CH3OH)",
                "conditions": "regioselectivity paths",
                "products": ["CC(C)(O)CO", "CC(C)(OCH3)CO"]
            },
            "options": [
                {"option_id": "A", "text": "Under acidic conditions, nucleophiles attack the more substituted carbon; under basic conditions, nucleophiles attack the less substituted carbon.", "is_correct": True},
                {"option_id": "B", "text": "Nucleophiles attack the more substituted carbon under all conditions.", "is_correct": False},
                {"option_id": "C", "text": "Nucleophiles attack the less substituted carbon under all conditions.", "is_correct": False},
                {"option_id": "D", "text": "No ring opening occurs in base.", "is_correct": False}
            ],
            "feedback": {
                "context": "Analyzing transition states of epoxide ring openings.",
                "process": "In acid, protonation of oxygen creates carbocation-like character at the carbon most able to stabilize positive charge (more substituted). In base, steric hindrance dominates, directing the nucleophile to the less substituted carbon (backside attack).",
                "result": "Regiochemical pathways identified."
            }
        }
    ],
    19: [ # Aldehydes and Ketones
        {
            "question_id": "ch19_q_dynamic_wittig_reaction",
            "topic": "Aldehydes & Ketones: Nucleophilic Additions",
            "difficulty_level": "Hard",
            "question_text": "Predict the alkene product formed in the Wittig reaction of benzaldehyde and methylenetriphenylphosphorane.",
            "reaction_scheme": {
                "reactants": ["O=Cc1ccccc1", "C=P(c2ccccc2)(c3ccccc3)c4ccccc4"],
                "reagents": " Wittig Reaction",
                "conditions": "THF",
                "products": ["C=Cc1ccccc1"]
            },
            "options": [
                {"option_id": "A", "text": "The Wittig reaction converts the C=O carbonyl double bond directly into a C=C alkene double bond, yielding styrene.", "is_correct": True},
                {"option_id": "B", "text": "The reaction yields benzyl alcohol.", "is_correct": False},
                {"option_id": "C", "text": "Stilbene (C/C=C/c1ccccc1) is formed.", "is_correct": False},
                {"option_id": "D", "text": "No reaction occurs due to steric hindrance.", "is_correct": False}
            ],
            "feedback": {
                "context": "Converting carbonyl groups to alkenes using phosphorus ylides.",
                "process": "The nucleophilic ylide carbon attacks the carbonyl carbon to form a betaine, which collapses into an oxaphosphetane intermediate. This collapses to release triphenylphosphine oxide (Ph3P=O) and form the carbon-carbon double bond (styrene).",
                "result": "Styrene is synthesized."
            }
        }
    ],
    20: [ # Carboxylic Acids
        {
            "question_id": "ch20_q_dynamic_inductive_acidity",
            "topic": "Carboxylic Acids: Acidities",
            "difficulty_level": "Medium",
            "question_text": "Match each carboxylic acid to its relative acidity based on inductive electron-withdrawing effects.",
            "interaction_type": "matching-list",
            "match_items": [
                {"smiles": "CC(=O)O", "correctAnswer": "pKa = 4.76 (Weakest Acid)"},
                {"smiles": "ClCC(=O)O", "correctAnswer": "pKa = 2.86 (Medium Acid)"},
                {"smiles": "FC(F)(F)C(=O)O", "correctAnswer": "pKa = 0.23 (Strongest Acid)"},
                {"smiles": "CCC(=O)O", "correctAnswer": "pKa = 4.88 (Extremely Weak Acid)"}
            ],
            "match_options": ["pKa = 4.76 (Weakest Acid)", "pKa = 2.86 (Medium Acid)", "pKa = 0.23 (Strongest Acid)", "pKa = 4.88 (Extremely Weak Acid)"],
            "options": [
                {"option_id": "A", "text": "All matched correctly", "is_correct": True},
                {"option_id": "B", "text": "Incorrect pKa relative mapping", "is_correct": False}
            ],
            "feedback": {
                "context": "Evaluating inductive stabilization of conjugate bases.",
                "process": "Electronegative atoms (like fluorine or chlorine) pull electron density away from the carboxylate group, stabilizing the negative charge of the conjugate base. More halogens and higher electronegativity increase acidity.",
                "result": "TFA (trifluoroacetic acid) is the strongest."
            }
        }
    ],
    21: [ # Carboxylic Acid Derivatives
        {
            "question_id": "ch21_q_dynamic_acyl_substitution",
            "topic": "Nucleophilic Acyl Substitutions",
            "difficulty_level": "Hard",
            "question_text": "Match each carboxylic acid derivative to its relative reactivity towards nucleophiles.",
            "interaction_type": "matching-list",
            "match_items": [
                {"smiles": "CC(=O)Cl", "correctAnswer": "Most Reactive (Acid Chloride)"},
                {"smiles": "CC(=O)OC(C)=O", "correctAnswer": "Highly Reactive (Anhydride)"},
                {"smiles": "CC(=O)OC", "correctAnswer": "Moderately Reactive (Ester)"},
                {"smiles": "CC(=O)N", "correctAnswer": "Least Reactive (Amide)"}
            ],
            "match_options": ["Most Reactive (Acid Chloride)", "Highly Reactive (Anhydride)", "Moderately Reactive (Ester)", "Least Reactive (Amide)"],
            "options": [
                {"option_id": "A", "text": "All matched correctly", "is_correct": True},
                {"option_id": "B", "text": "Incorrect derivative reactivity mapping", "is_correct": False}
            ],
            "feedback": {
                "context": "Assessing leaving group ability and resonance stabilization in acyl derivatives.",
                "process": "Chloride is an excellent leaving group with minimal resonance: most reactive. Carboxylate in anhydrides is good. Alkoxide in esters is poor. Amide nitrogen donates electron density strongly via resonance, stabilizing the carbonyl: least reactive.",
                "result": "Reactivity order: Acid Chloride > Anhydride > Ester > Amide."
            }
        }
    ],
    22: [ # Carbonyl Alpha-Substitution
        {
            "question_id": "ch22_q_dynamic_kinetic_enolates",
            "topic": "Enols and Enolates",
            "difficulty_level": "Hard",
            "question_text": "Match the reaction conditions to the preferred enolate form (kinetic vs thermodynamic).",
            "interaction_type": "matching-grid",
            "grid_columns": 2,
            "match_items": [
                {"smiles": "CC(=O)C(C)C.C1COCCN1", "correctAnswer": "Kinetic Enolate (LDA, THF, -78°C)"},
                {"smiles": "CC(=O)C(C)C.O=C([O-])C", "correctAnswer": "Thermodynamic Enolate (NaOEt, EtOH, 25°C)"}
            ],
            "match_options": ["Kinetic Enolate (LDA, THF, -78°C)", "Thermodynamic Enolate (NaOEt, EtOH, 25°C)"],
            "options": [
                {"option_id": "A", "text": "All matched correctly", "is_correct": True},
                {"option_id": "B", "text": "Incorrect enolate conditions", "is_correct": False}
            ],
            "feedback": {
                "context": "Distinguishing kinetic and thermodynamic enolate formation.",
                "process": "Kinetic enolates are formed by rapid, irreversible deprotonation at the less hindered carbon using a strong, bulky base (LDA) at low temperatures (-78°C). Thermodynamic enolates are formed under equilibrating conditions (NaOEt, room temp) favoring the more substituted, stable double bond.",
                "result": "Enolates matched."
            }
        }
    ],
    23: [ # Carbonyl Condensation
        {
            "question_id": "ch23_q_dynamic_aldol_condensation",
            "topic": "Carbonyl Condensation Reactions",
            "difficulty_level": "Medium",
            "question_text": "Determine the product of the base-catalyzed self-condensation of acetaldehyde followed by dehydration.",
            "reaction_scheme": {
                "reactants": ["CC=O"],
                "reagents": "1) NaOH, H2O\n2) Heat (dehydration)",
                "conditions": "Aldol Condensation",
                "products": ["CC=CC=O"]
            },
            "options": [
                {"option_id": "A", "text": "Self-condensation yields crotonaldehyde (2-butenal), a conjugated enone.", "is_correct": True},
                {"option_id": "B", "text": "The reaction produces 3-hydroxybutanal (without heat).", "is_correct": False},
                {"option_id": "C", "text": "Ethyl acetate is formed.", "is_correct": False},
                {"option_id": "D", "text": "No condensation occurs.", "is_correct": False}
            ],
            "feedback": {
                "context": "Analyzing aldol addition and dehydration pathways.",
                "process": "NaOH deprotonates acetaldehyde to form enolate. Enolate attacks another neutral acetaldehyde: forms 3-hydroxybutanal (aldol addition). Heating drives elimination of water to yield the conjugated 2-butenal (crotonaldehyde).",
                "result": "The final product is crotonaldehyde."
            }
        }
    ],
    24: [ # Amines
        {
            "question_id": "ch24_q_dynamic_amine_basicity",
            "topic": "Amines: Basicities",
            "difficulty_level": "Hard",
            "question_text": "Match each amine structure to its relative basicity level (pKb of conjugate acid).",
            "interaction_type": "matching-list",
            "match_items": [
                {"smiles": "CCN", "correctAnswer": "Strong Base (pKa of CA ~ 10.8)"},
                {"smiles": "Nc1ccccc1", "correctAnswer": "Weak Base (pKa of CA ~ 4.6)"},
                {"smiles": "c1cc[nH]c1", "correctAnswer": "Extremely Weak Base (pKa of CA ~ -3.8)"},
                {"smiles": "C1=CC=NC=C1", "correctAnswer": "Moderate Base (pKa of CA ~ 5.25)"}
            ],
            "match_options": ["Strong Base (pKa of CA ~ 10.8)", "Weak Base (pKa of CA ~ 4.6)", "Extremely Weak Base (pKa of CA ~ -3.8)", "Moderate Base (pKa of CA ~ 5.25)"],
            "options": [
                {"option_id": "A", "text": "All matched correctly", "is_correct": True},
                {"option_id": "B", "text": "Incorrect basicities", "is_correct": False}
            ],
            "feedback": {
                "context": "Assessing amine basicity based on hybridization and resonance.",
                "process": "Ethylamine has localized lone pair: strong base. Aniline lone pair is delocalized into benzene ring: weak base. Pyrrole lone pair is part of aromatic sextet; protonation destroys aromaticity: extremely weak. Pyridine lone pair is in sp2 orbital outside aromatic ring: moderate base.",
                "result": "Amine basicity trends mapped."
            }
        }
    ],
    25: [ # Carbohydrates
        {
            "question_id": "ch25_q_dynamic_monosaccharides",
            "topic": "Biomolecules: Carbohydrates",
            "difficulty_level": "Hard",
            "question_text": "Identify each cyclic D-aldohexose anomeric form from its structure.",
            "interaction_type": "matching-grid",
            "grid_columns": 2,
            "match_items": [
                {"smiles": "HAWORTH:alpha-D-Glucose", "correctAnswer": "alpha-D-Glucopyranose"},
                {"smiles": "HAWORTH:beta-D-Glucose", "correctAnswer": "beta-D-Glucopyranose"}
            ],
            "match_options": ["alpha-D-Glucopyranose", "beta-D-Glucopyranose", "alpha-D-Galactopyranose"],
            "options": [
                {"option_id": "A", "text": "All matched correctly", "is_correct": True},
                {"option_id": "B", "text": "Incorrect anomer mapping", "is_correct": False}
            ],
            "feedback": {
                "context": "Distinguishing alpha/beta pyranose conformations.",
                "process": "Alpha has the C1 anomeric hydroxyl down (trans to C6). Beta has the C1 hydroxyl up (cis to C6).",
                "result": "Anomers mapped successfully."
            }
        }
    ],
    26: [ # Amino Acids
        {
            "question_id": "ch26_q_dynamic_isoelectric_points",
            "topic": "Biomolecules: Amino Acids",
            "difficulty_level": "Hard",
            "question_text": "Match each amino acid to its general classification and isoelectric point (pI).",
            "interaction_type": "matching-list",
            "match_items": [
                {"smiles": "C(C(=O)O)[C@@H](C(=O)O)N", "correctAnswer": "Acidic Side Chain (pI ~ 3.0)"},
                {"smiles": "NCCCC[C@@H](C(=O)O)N", "correctAnswer": "Basic Side Chain (pI ~ 9.7)"},
                {"smiles": "C[C@@H](C(=O)O)N", "correctAnswer": "Neutral Side Chain (pI ~ 6.0)"}
            ],
            "match_options": ["Acidic Side Chain (pI ~ 3.0)", "Basic Side Chain (pI ~ 9.7)", "Neutral Side Chain (pI ~ 6.0)"],
            "options": [
                {"option_id": "A", "text": "All matched correctly", "is_correct": True},
                {"option_id": "B", "text": "Incorrect amino acid properties", "is_correct": False}
            ],
            "feedback": {
                "context": "Assessing isoelectric points of acidic, basic, and neutral amino acids.",
                "process": "Aspartic Acid has carboxylic side chain: acidic (low pI). Lysine has amine side chain: basic (high pI). Alanine has hydrocarbon side chain: neutral (middle pI).",
                "result": "Amino acids classified."
            }
        }
    ],
    27: [ # Lipids
        {
            "question_id": "ch27_q_dynamic_lipids_melting",
            "topic": "Biomolecules: Lipids",
            "difficulty_level": "Hard",
            "question_text": "Match each fatty acid structure to its melting point characteristics.",
            "interaction_type": "matching-list",
            "match_items": [
                {"smiles": "CCCCCCCCCCCCCCCC(=O)O", "correctAnswer": "High Melting Point (Saturated C16)"},
                {"smiles": "CCCC/C=C\\C/C=C\\CCCCCCCC(=O)O", "correctAnswer": "Low Melting Point (Polyunsaturated C18)"}
            ],
            "match_options": ["High Melting Point (Saturated C16)", "Low Melting Point (Polyunsaturated C18)", "Medium Melting Point (Unsaturated C18)"],
            "options": [
                {"option_id": "A", "text": "All matched correctly", "is_correct": True},
                {"option_id": "B", "text": "Incorrect lipid mapping", "is_correct": False}
            ],
            "feedback": {
                "context": "Evaluating melting points based on fatty acid saturation and packing.",
                "process": "Saturated fatty acids (like palmitic acid) pack tightly: high melting point (63°C). Polyunsaturated fatty acids (like linoleic acid) have cis-kinks preventing packing: liquid at room temp.",
                "result": "Lipid properties mapped."
            }
        }
    ],
    28: [ # Nucleic Acids
        {
            "question_id": "ch28_q_dynamic_base_pairing",
            "topic": "Biomolecules: Nucleic Acids",
            "difficulty_level": "Medium",
            "question_text": "Match each purine/pyrimidine base to its complementary hydrogen-bonding partner in double-stranded DNA.",
            "interaction_type": "matching-list",
            "match_items": [
                {"smiles": "Nc1ncnc2[nH]cnc12", "correctAnswer": "Thymine (Adenine pairs with Thymine)"},
                {"smiles": "Cc1c[nH]c(=O)[nH]c1=O", "correctAnswer": "Adenine (Thymine pairs with Adenine)"},
                {"smiles": "Nc1cc[nH]c(=O)n1", "correctAnswer": "Guanine (Cytosine pairs with Guanine)"}
            ],
            "match_options": ["Thymine (Adenine pairs with Thymine)", "Adenine (Thymine pairs with Adenine)", "Guanine (Cytosine pairs with Guanine)", "Uracil"],
            "options": [
                {"option_id": "A", "text": "All matched correctly", "is_correct": True},
                {"option_id": "B", "text": "Incorrect base pairing", "is_correct": False}
            ],
            "feedback": {
                "context": "Identifying Watson-Crick hydrogen-bonding base pairs.",
                "process": "Adenine (purine) forms 2 hydrogen bonds with Thymine (pyrimidine). Cytosine forms 3 hydrogen bonds with Guanine.",
                "result": "Complementary base pairs identified."
            }
        }
    ],
    29: [ # Metabolic Pathways
        {
            "question_id": "ch29_q_dynamic_metabolism_steps",
            "topic": "Organic Chemistry of Metabolic Pathways",
            "difficulty_level": "Hard",
            "question_text": "Match the biological conversion to its organic chemistry classification.",
            "interaction_type": "matching-list",
            "match_items": [
                {"smiles": "COP(=O)(O)O", "correctAnswer": "Nucleophilic Substitution (Phosphoryl transfer)"},
                {"smiles": "CC(=O)C(=O)O", "correctAnswer": "Decarboxylation (Beta-keto cleavage)"}
            ],
            "match_options": ["Nucleophilic Substitution (Phosphoryl transfer)", "Decarboxylation (Beta-keto cleavage)", "Aldol Cleavage", "Reduction"],
            "options": [
                {"option_id": "A", "text": "All matched correctly", "is_correct": True},
                {"option_id": "B", "text": "Incorrect pathways classifications", "is_correct": False}
            ],
            "feedback": {
                "context": "Mapping biochemical conversions to classic organic reaction mechanisms.",
                "process": "Glucose phosphorylation is nucleophilic substitution at phosphorus. Decarboxylation of pyruvate is standard decarboxylation.",
                "result": "Metabolic reactions classified."
            }
        }
    ],
    30: [ # Pericyclic Reactions
        {
            "question_id": "ch30_q_dynamic_diels_alder",
            "topic": "Orbitals & Pericyclic Reactions",
            "difficulty_level": "Hard",
            "question_text": "Predict the product of the thermal [4+2] cycloaddition (Diels-Alder reaction) of 1,3-butadiene and maleic anhydride.",
            "reaction_scheme": {
                "reactants": ["C=CC=C", "O=C1C=CC(=O)O1"],
                "reagents": "Diels-Alder Reaction",
                "conditions": "thermal heat",
                "products": ["O=C1[C@@H]2CC=CC[C@@H]2C(=O)O1"]
            },
            "options": [
                {"option_id": "A", "text": "The [4+2] cycloaddition occurs in a concerted, stereospecific manner to yield the cis-anhydride cyclohexene derivative.", "is_correct": True},
                {"option_id": "B", "text": "The reaction yields a polymer.", "is_correct": False},
                {"option_id": "C", "text": "A substitution product is formed.", "is_correct": False},
                {"option_id": "D", "text": "A [2+2] cyclobutane ring is formed.", "is_correct": False}
            ],
            "feedback": {
                "context": "Analyzing thermal Diels-Alder cycloadditions.",
                "process": "thermal [4+2] cycloadditions are symmetry-allowed. Conjugated diene (4 pi electrons) reacts with dienophile (2 pi electrons) to form a new six-membered ring with stereochemical retention of the cis dienophile.",
                "result": "The final product is a cis-fused cyclohexene anhydride."
            }
        }
    ]
}

def append_questions_to_file(ch_num, dynamic_questions):
    filename = f"chapter{ch_num}.js"
    filepath = os.path.join(questions_dir, filename)
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    var_name = f"CHAPTER_{ch_num}_QUESTIONS"
    match = re.search(rf"const\s+{var_name}\s*=\s*\[([\s\S]*?)\]\s*;?\s*$", content)
    if not match:
        print(f"Could not find array definition in {filename}")
        return

    existing_array_str = match.group(1).strip()
    
    try:
        full_json_str = "[" + existing_array_str + "]"
        existing_questions = json.loads(full_json_str)
        
        existing_ids = {q["question_id"] for q in existing_questions}
        appended_count = 0
        for q in dynamic_questions:
            if q["question_id"] not in existing_ids:
                existing_questions.append(q)
                appended_count += 1
        
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(f"// McMurry Chapter {ch_num} questions\n")
            f.write(f"const {var_name} = ")
            json.dump(existing_questions, f, indent=2)
            f.write(";\n")
            
        print(f"Appended {appended_count} dynamic questions to {filename} successfully.")
    except Exception as e:
        print(f"Failed to parse and merge JSON for {filename} using native json, falling back to manual string append: {e}")
        new_q_strings = []
        for q in dynamic_questions:
            new_q_strings.append(json.dumps(q, indent=2))
        joined_new_qs = ",\n" + ",\n".join(new_q_strings)
        
        pos = content.rfind(']')
        if pos != -1:
            new_content = content[:pos] + joined_new_qs + "\n" + content[pos:]
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Manually appended {len(dynamic_questions)} dynamic questions to {filename} successfully.")
        else:
            print(f"Could not find closing bracket in {filename}")

if __name__ == "__main__":
    for ch_num, questions in chapter_questions.items():
        append_questions_to_file(ch_num, questions)
