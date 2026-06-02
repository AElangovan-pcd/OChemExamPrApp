import json
import os

questions_dir = r"C:\Users\easam\Documents\Gemini\OChemExamPrApp\questions"

# Define the question database for the 14 ACS chapters (Chapters 19-32)
acs_chapters = {
    19: {
        "variable": "CHAPTER_19_QUESTIONS",
        "topic": "ACS: Nomenclature",
        "questions": [
            {
                "question_id": "ch19_acs_q1_propyl_ethanoate",
                "topic": "ACS: Nomenclature",
                "difficulty_level": "Easy",
                "question_text": "What is the IUPAC name for this compound?",
                "question_smiles": "CC(=O)OCCC",
                "options": [
                    {"option_id": "A", "text": "methyl butanoate", "smiles": "CCCC(=O)OC", "is_correct": False},
                    {"option_id": "B", "text": "methyl propanoate", "smiles": "CCC(=O)OC", "is_correct": False},
                    {"option_id": "C", "text": "propyl methanoate", "smiles": "HC(=O)OCCC", "is_correct": False},
                    {"option_id": "D", "text": "propyl ethanoate", "smiles": "CC(=O)OCCC", "is_correct": True}
                ],
                "feedback": {
                    "context": "Naming esters according to IUPAC rules, identifying the alcohol and carboxylic acid components.",
                    "process": "Step 1: Identify the alkyl group attached to the oxygen atom, which is a propyl group (3 carbons).\nStep 2: Identify the acyl group, which is derived from ethanoic acid (2 carbons, including the carbonyl).\nStep 3: Combine the names, listing the alkyl group first followed by the carboxylate name: propyl ethanoate.",
                    "result": "The correct name is propyl ethanoate."
                }
            },
            {
                "question_id": "ch19_acs_q2_pentenoic_acid",
                "topic": "ACS: Nomenclature",
                "difficulty_level": "Medium",
                "question_text": "What is the IUPAC name for this compound?",
                "question_smiles": "C/C=C/C(C)C(=O)O",
                "options": [
                    {"option_id": "A", "text": "4-methyl-2-pentenoic acid", "smiles": "CC(C)C=CC(=O)O", "is_correct": False},
                    {"option_id": "B", "text": "2-methyl-3-pentenoic acid", "smiles": "CC=CC(C)C(=O)O", "is_correct": True},
                    {"option_id": "C", "text": "5-hydroxy-4-methyl-2-penten-5-one", "smiles": "CC=CC(C)C(=O)O", "is_correct": False},
                    {"option_id": "D", "text": "1-hydroxy-2-methyl-3-penten-1-one", "smiles": "CC=CC(C)C(=O)O", "is_correct": False}
                ],
                "feedback": {
                    "context": "Naming carboxylic acids containing an alkene group and substituents.",
                    "process": "Step 1: Identify the principal functional group, which is the carboxylic acid (-COOH). It receives priority 1 in numbering, so C1 is the carbonyl carbon.\nStep 2: Find the longest chain containing both the acid and double bond (5 carbons: pent-3-enoic acid).\nStep 3: Identify the substituent at C2 (a methyl group).\nStep 4: Combine to get 2-methyl-3-pentenoic acid.",
                    "result": "The correct name is 2-methyl-3-pentenoic acid."
                }
            },
            {
                "question_id": "ch19_acs_q3_benzylethanamide",
                "topic": "ACS: Nomenclature",
                "difficulty_level": "Medium",
                "question_text": "Which is the structure of N-benzylethanamide?",
                "question_smiles": "CC(=O)NCC1=CC=CC=C1",
                "options": [
                    {"option_id": "A", "text": "Structure A", "smiles": "CC(=O)NCC1=CC=CC=C1", "is_correct": True},
                    {"option_id": "B", "text": "Structure B", "smiles": "CCNCC1=CC=CC=C1", "is_correct": False},
                    {"option_id": "C", "text": "Structure C", "smiles": "CCNC1=CC=CC=C1", "is_correct": False},
                    {"option_id": "D", "text": "Structure D", "smiles": "CC(=O)NC1=CC=CC=C1", "is_correct": False}
                ],
                "feedback": {
                    "context": "Identifying amide structures based on IUPAC nomenclature, specifically distinguishing between benzyl and phenyl substituents on nitrogen.",
                    "process": "Step 1: The parent chain is ethanamide (CH3CONH2).\nStep 2: The prefix 'N-benzyl' indicates a benzyl group (C6H5CH2-) is attached to the nitrogen atom.\nStep 3: Structure A shows the acetyl group connected to an amide nitrogen, which is further attached to a benzyl group.",
                    "result": "The correct structure is A (N-benzylethanamide)."
                }
            },
            {
                "question_id": "ch19_acs_q4_bicyclo",
                "topic": "ACS: Nomenclature",
                "difficulty_level": "Hard",
                "question_text": "Determine the correct IUPAC name for the bicyclic alkane shown below.",
                "question_smiles": "C1CC2CCC1C2",
                "options": [
                    {"option_id": "A", "text": "bicyclo[2.2.1]heptane", "smiles": "C1CC2CCC1C2", "is_correct": True},
                    {"option_id": "B", "text": "bicyclo[2.1.1]hexane", "smiles": "C1CC2CC1C2", "is_correct": False},
                    {"option_id": "C", "text": "bicyclo[3.2.0]heptane", "smiles": "C1CC2CCC2C1", "is_correct": False},
                    {"option_id": "D", "text": "bicyclo[3.1.1]heptane", "smiles": "C1CC2CC(C1)C2", "is_correct": False}
                ],
                "feedback": {
                    "context": "Naming bicyclic alkanes using the von Baeyer system.",
                    "process": "Step 1: Identify the bridgehead carbon atoms.\nStep 2: Count the carbons in the three paths connecting the bridgehead carbons. The three paths have 2, 2, and 1 carbon, respectively.\nStep 3: Count the total number of carbon atoms in the bicyclic skeleton (7 carbons: heptane).\nStep 4: Arrange the path lengths in descending order inside brackets: [2.2.1] and prefix with 'bicyclo': bicyclo[2.2.1]heptane.",
                    "result": "The correct IUPAC name is bicyclo[2.2.1]heptane."
                }
            },
            {
                "question_id": "ch19_acs_q5_pentene",
                "topic": "ACS: Nomenclature",
                "difficulty_level": "Medium",
                "question_text": "Assign the stereochemical configuration and name this alkene.",
                "question_smiles": "CC/C(=C\\C)/C",
                "options": [
                    {"option_id": "A", "text": "(E)-3-methyl-2-pentene", "smiles": "CC/C(=C\\C)/C", "is_correct": True},
                    {"option_id": "B", "text": "(Z)-3-methyl-2-pentene", "smiles": "CC/C(=C/C)/C", "is_correct": False},
                    {"option_id": "C", "text": "(E)-2-methyl-2-pentene", "smiles": "CCC=C(C)C", "is_correct": False},
                    {"option_id": "D", "text": "(Z)-2-methyl-2-pentene", "smiles": "CCC=C(C)C", "is_correct": False}
                ],
                "feedback": {
                    "context": "Applying Cahn-Ingold-Prelog (CIP) priority rules to assign E/Z configuration to double bonds.",
                    "process": "Step 1: Assign priorities to groups on C2: methyl (priority 1) vs hydrogen (priority 2).\nStep 2: Assign priorities to groups on C3: ethyl (priority 1) vs methyl (priority 2).\nStep 3: The high-priority groups (ethyl on C3 and methyl on C2) are on opposite sides of the double bond, which corresponds to the (E) configuration.",
                    "result": "The correct name is (E)-3-methyl-2-pentene."
                }
            }
        ]
    },
    20: {
        "variable": "CHAPTER_20_QUESTIONS",
        "topic": "ACS: Structure & Hybridization",
        "questions": [
            {
                "question_id": "ch20_acs_q1_benzonitrile",
                "topic": "ACS: Structure & Hybridization",
                "difficulty_level": "Easy",
                "question_text": "Identify the hybridization of the designated nitrogen and carbon atoms in the nitrile group of benzonitrile.",
                "question_smiles": "C1=CC=C(C=C1)C#N",
                "options": [
                    {"option_id": "A", "text": "Nitrogen: sp3, Carbon: sp2", "is_correct": False},
                    {"option_id": "B", "text": "Nitrogen: sp, Carbon: sp", "is_correct": True},
                    {"option_id": "C", "text": "Nitrogen: sp2, Carbon: sp2", "is_correct": False},
                    {"option_id": "D", "text": "Nitrogen: sp2, Carbon: sp", "is_correct": False}
                ],
                "feedback": {
                    "context": "Understanding orbital hybridization in nitriles.",
                    "process": "Step 1: Locate the nitrile group (-C#N).\nStep 2: The carbon atom has one triple bond and one single bond (2 electron domains), which corresponds to sp hybridization.\nStep 3: The nitrogen atom has one triple bond and one lone pair (2 electron domains), which also corresponds to sp hybridization.",
                    "result": "Both the nitrogen and carbon in the nitrile group are sp hybridized."
                }
            },
            {
                "question_id": "ch20_acs_q2_resonance",
                "topic": "ACS: Structure & Hybridization",
                "difficulty_level": "Medium",
                "question_text": "Which resonance structure of the acetamide anion contributes most significantly to the hybrid structure?",
                "question_smiles": "CC(=O)[NH-].CC([O-])=NH",
                "options": [
                    {"option_id": "A", "text": "Structure with negative charge on oxygen: CH3-C(O-)=NH", "is_correct": True},
                    {"option_id": "B", "text": "Structure with negative charge on nitrogen: CH3-C(=O)-NH-", "is_correct": False},
                    {"option_id": "C", "text": "Structure with charges on both oxygen and nitrogen", "is_correct": False},
                    {"option_id": "D", "text": "All resonance structures contribute equally", "is_correct": False}
                ],
                "feedback": {
                    "context": "Evaluating the relative stability of resonance structures based on electronegativity.",
                    "process": "Step 1: Write down the resonance structures of the deprotonated acetamide anion.\nStep 2: Structure A places the negative charge on the oxygen atom, whereas Structure B places the negative charge on the nitrogen atom.\nStep 3: Since oxygen is more electronegative than nitrogen (3.5 vs 3.0), the structure with the negative charge on oxygen is more stable and contributes more to the resonance hybrid.",
                    "result": "The structure with the negative charge on oxygen is the major contributor."
                }
            },
            {
                "question_id": "ch20_acs_q3_aromaticity",
                "topic": "ACS: Structure & Hybridization",
                "difficulty_level": "Medium",
                "question_text": "Which of the following monocyclic compounds is antiaromatic according to Huckel's rule?",
                "question_smiles": "C1=CC=C1.[C-]1C=CC=C1.C1=CC=CC=C1.C1=CNC=C1",
                "options": [
                    {"option_id": "A", "text": "Cyclobutadiene", "smiles": "C1=CC=C1", "is_correct": True},
                    {"option_id": "B", "text": "Cyclopentadienyl anion", "smiles": "[C-]1C=CC=C1", "is_correct": False},
                    {"option_id": "C", "text": "Benzene", "smiles": "C1=CC=CC=C1", "is_correct": False},
                    {"option_id": "D", "text": "Pyrrole", "smiles": "C1=CNC=C1", "is_correct": False}
                ],
                "feedback": {
                    "context": "Applying Huckel's rules of aromaticity (4n+2 pi electrons) vs antiaromaticity (4n pi electrons).",
                    "process": "Step 1: All structures are monocyclic, planar, and fully conjugated.\nStep 2: Count the pi electrons in cyclobutadiene (4 pi electrons, matches 4n antiaromatic rule).\nStep 3: Count the pi electrons in cyclopentadienyl anion, benzene, and pyrrole (each has 6 pi electrons, matching 4n+2 aromatic rule).",
                    "result": "Cyclobutadiene is antiaromatic."
                }
            },
            {
                "question_id": "ch20_acs_q4_formal_charge",
                "topic": "ACS: Structure & Hybridization",
                "difficulty_level": "Easy",
                "question_text": "Calculate the formal charges on the nitrogen and both oxygen atoms in nitromethane, CH3NO2.",
                "question_smiles": "C[N+](=O)[O-]",
                "options": [
                    {"option_id": "A", "text": "Nitrogen: +1, Single-bonded Oxygen: -1, Double-bonded Oxygen: 0", "is_correct": True},
                    {"option_id": "B", "text": "Nitrogen: 0, Single-bonded Oxygen: -1, Double-bonded Oxygen: +1", "is_correct": False},
                    {"option_id": "C", "text": "Nitrogen: +1, Single-bonded Oxygen: 0, Double-bonded Oxygen: -1", "is_correct": False},
                    {"option_id": "D", "text": "Nitrogen: 0, Single-bonded Oxygen: 0, Double-bonded Oxygen: 0", "is_correct": False}
                ],
                "feedback": {
                    "context": "Calculating formal charge using valence electrons, bonding electrons, and non-bonding electrons.",
                    "process": "Step 1: Formula: Formal Charge = [Valence] - [Lone Pair Electrons] - 0.5 * [Shared Electrons].\nStep 2: Nitrogen (Group 5): 5 - 0 - 4 = +1.\nStep 3: Double-bonded Oxygen (Group 6): 6 - 4 - 2 = 0.\nStep 4: Single-bonded Oxygen (Group 6): 6 - 6 - 1 = -1.",
                    "result": "The formal charges are: N = +1, double-bonded O = 0, single-bonded O = -1."
                }
            },
            {
                "question_id": "ch20_acs_q5_dipole",
                "topic": "ACS: Structure & Hybridization",
                "difficulty_level": "Medium",
                "question_text": "Which of the following isomers of difluoroethylene has a net dipole moment of zero?",
                "question_smiles": "F/C=C\\F.F/C=C/F.C=C(F)F",
                "options": [
                    {"option_id": "A", "text": "(trans)-1,2-difluoroethylene", "smiles": "F/C=C/F", "is_correct": True},
                    {"option_id": "B", "text": "(cis)-1,2-difluoroethylene", "smiles": "F/C=C\\F", "is_correct": False},
                    {"option_id": "C", "text": "1,1-difluoroethylene", "smiles": "C=C(F)F", "is_correct": False},
                    {"option_id": "D", "text": "All of them have a net dipole moment greater than zero", "is_correct": False}
                ],
                "feedback": {
                    "context": "Evaluating molecular symmetry and vector addition of individual bond dipoles.",
                    "process": "Step 1: Draw the structure of the isomers. Both C-F bonds are highly polar.\nStep 2: In trans-1,2-difluoroethylene, the two C-F bond dipoles point in exactly opposite directions.\nStep 3: Because of the molecular symmetry (C2h point group), these vectors cancel out, resulting in a net dipole moment of zero.",
                    "result": "The trans isomer has a net dipole moment of zero."
                }
            }
        ]
    },
    21: {
        "variable": "CHAPTER_21_QUESTIONS",
        "topic": "ACS: Acids and Bases",
        "questions": [
            {
                "question_id": "ch21_acs_q1_acidity",
                "topic": "ACS: Acids and Bases",
                "difficulty_level": "Medium",
                "question_text": "Rank the following compounds in order of decreasing acidity (most acidic to least acidic): \nI. Ethanol \nII. Phenol \nIII. Acetic acid \nIV. Trifluoroacetic acid",
                "options": [
                    {"option_id": "A", "text": "IV > III > II > I", "is_correct": True},
                    {"option_id": "B", "text": "III > IV > II > I", "is_correct": False},
                    {"option_id": "C", "text": "IV > III > I > II", "is_correct": False},
                    {"option_id": "D", "text": "I > II > III > IV", "is_correct": False}
                ],
                "feedback": {
                    "context": "Evaluating acidity based on structural factors like inductive effects and resonance stabilization of the conjugate base.",
                    "process": "Step 1: Trifluoroacetic acid (CF3COOH) is the most acidic due to the strong electron-withdrawing inductive effect of the three fluorine atoms stabilizing the carboxylate.\nStep 2: Acetic acid (CH3COOH) is next, having resonance stabilization of the carboxylate charge.\nStep 3: Phenol (C6H5OH) is weakly acidic, stabilized by resonance delocalization of the phenoxide charge into the aromatic ring.\nStep 4: Ethanol (CH3CH2OH) is the least acidic since its conjugate base is an alkoxide with no resonance stabilization.",
                    "result": "The order of decreasing acidity is IV > III > II > I."
                }
            },
            {
                "question_id": "ch21_acs_q2_basicity",
                "topic": "ACS: Acids and Bases",
                "difficulty_level": "Medium",
                "question_text": "Rank the following amines in order of increasing basicity (weakest base to strongest base): \nI. Aniline \nII. Cyclohexylamine \nIII. p-Nitroaniline \nIV. p-Anisidine",
                "question_smiles": "NC1=CC=CC=C1.NC1CCCCC1.NC1=CC=C(C=C1)[N+](=O)[O-].COC1=CC=C(N)C=C1",
                "options": [
                    {"option_id": "A", "text": "III < I < IV < II", "is_correct": True},
                    {"option_id": "B", "text": "I < III < IV < II", "is_correct": False},
                    {"option_id": "C", "text": "III < I < II < IV", "is_correct": False},
                    {"option_id": "D", "text": "II < IV < I < III", "is_correct": False}
                ],
                "feedback": {
                    "context": "Analyzing basicity of aliphatic vs aromatic amines, and substituent effects on aniline derivatives.",
                    "process": "Step 1: Aliphatic amines are much more basic than aromatic amines because their nitrogen lone pair is not delocalized into an aromatic system. Thus, Cyclohexylamine (II) is the strongest base.\nStep 2: Aniline (I) is weakly basic due to lone pair delocalization.\nStep 3: p-Nitroaniline (III) is de-activated by the strong electron-withdrawing nitro group, which stabilizes the lone pair further, making it the weakest base.\nStep 4: p-Anisidine (IV) is activated by the electron-donating methoxy group (-OCH3), rendering it more basic than aniline.",
                    "result": "The increasing basicity order is III < I < IV < II."
                }
            },
            {
                "question_id": "ch21_acs_q3_hybrid_acidity",
                "topic": "ACS: Acids and Bases",
                "difficulty_level": "Easy",
                "question_text": "Rank the following hydrocarbons in order of decreasing acidity: \nI. Ethane \nII. Ethylene \nIII. Acetylene",
                "question_smiles": "CC.C=C.C#C",
                "options": [
                    {"option_id": "A", "text": "III > II > I", "is_correct": True},
                    {"option_id": "B", "text": "I > II > III", "is_correct": False},
                    {"option_id": "C", "text": "III > I > II", "is_correct": False},
                    {"option_id": "D", "text": "II > III > I", "is_correct": False}
                ],
                "feedback": {
                    "context": "Evaluating carbon acidity based on orbital s-character of the conjugate base anion.",
                    "process": "Step 1: Acetylene (sp carbon) has 50% s-character. Ethylene (sp2 carbon) has 33% s-character. Ethane (sp3 carbon) has 25% s-character.\nStep 2: Higher s-character means the negative charge of the conjugate base resides in an orbital closer to the nucleus, increasing its electrostatic stability.\nStep 3: Therefore, the conjugate base of acetylene (acetylide) is highly stable, making acetylene the most acidic.",
                    "result": "The order of decreasing acidity is III (acetylene) > II (ethylene) > I (ethane)."
                }
            },
            {
                "question_id": "ch21_acs_q4_equilibrium",
                "topic": "ACS: Acids and Bases",
                "difficulty_level": "Medium",
                "question_text": "Given the pKa of phenol is 10 and the pKa of carbonic acid is 6.4, in which direction will the equilibrium lie for the reaction between sodium phenoxide and carbonic acid?",
                "options": [
                    {"option_id": "A", "text": "Highly favors the products (right side)", "is_correct": True},
                    {"option_id": "B", "text": "Highly favors the reactants (left side)", "is_correct": False},
                    {"option_id": "C", "text": "Equilibrium constant will be close to 1", "is_correct": False},
                    {"option_id": "D", "text": "No reaction will take place", "is_correct": False}
                ],
                "feedback": {
                    "context": "Predicting the direction of acid-base reactions based on relative pKa values.",
                    "process": "Step 1: Identify the acids in the system: reactants contain carbonic acid (pKa = 6.4); products contain phenol (pKa = 10).\nStep 2: Acid-base equilibria always favor the formation of the weaker acid and weaker base (higher pKa value).\nStep 3: Since phenol (pKa = 10) is a much weaker acid than carbonic acid (pKa = 6.4), the equilibrium lies heavily toward the products.",
                    "result": "The equilibrium heavily favors the product side (right)."
                }
            },
            {
                "question_id": "ch21_acs_q5_salicylic",
                "topic": "ACS: Acids and Bases",
                "difficulty_level": "Hard",
                "question_text": "Why is o-hydroxybenzoic acid (salicylic acid, pKa = 2.97) significantly more acidic than its isomer, p-hydroxybenzoic acid (pKa = 4.54)?",
                "question_smiles": "OC(=O)C1=CC=CC=C1O.OC(=O)C1=CC=C(O)C=C1",
                "options": [
                    {"option_id": "A", "text": "Intramolecular hydrogen bonding stabilizes the conjugate base of the ortho isomer.", "is_correct": True},
                    {"option_id": "B", "text": "The para isomer undergoes resonance donation that destabilizes the starting acid.", "is_correct": False},
                    {"option_id": "C", "text": "The ortho isomer has less steric hindrance than the para isomer.", "is_correct": False},
                    {"option_id": "D", "text": "The phenolic hydroxyl group of the ortho isomer is strongly basic.", "is_correct": False}
                ],
                "feedback": {
                    "context": "Investigating how intramolecular structural interactions stabilize carboxylate anions.",
                    "process": "Step 1: Draw the conjugate base of both isomers.\nStep 2: In the deprotonated ortho-hydroxybenzoate, the carboxylate oxygen is positioned adjacent to the phenolic hydroxyl group.\nStep 3: A strong intramolecular hydrogen bond forms between the carboxylate anion (-COO-) and the hydroxyl hydrogen (-OH), which greatly stabilizes the negative charge.\nStep 4: No such stabilization is possible in the para isomer due to distance.",
                    "result": "Intramolecular hydrogen bonding stabilizes the conjugate base of the ortho isomer, dramatically increasing its acidity."
                }
            }
        ]
    },
    22: {
        "variable": "CHAPTER_22_QUESTIONS",
        "topic": "ACS: Stereochemistry",
        "questions": [
            {
                "question_id": "ch22_acs_q1_stereochemistry",
                "topic": "ACS: Stereochemistry",
                "difficulty_level": "Easy",
                "question_text": "Determine the stereochemical relationship between these two structures of alanine.",
                "question_smiles": "N[C@@H](C)C(=O)O.N[C@H](C)C(=O)O",
                "options": [
                    {"option_id": "A", "text": "Enantiomers", "is_correct": True},
                    {"option_id": "B", "text": "Diastereomers", "is_correct": False},
                    {"option_id": "C", "text": "Constitutional isomers", "is_correct": False},
                    {"option_id": "D", "text": "Identical compounds", "is_correct": False}
                ],
                "feedback": {
                    "context": "Classifying stereoisomers by comparing spatial configurations.",
                    "process": "Step 1: Compare the connectivity of the two molecules. They both represent alanine (2-aminopropanoic acid), so they are stereoisomers, not constitutional isomers.\nStep 2: Identify the configuration of the stereocenter at C2. Structure 1 is (S)-alanine and Structure 2 is (R)-alanine.\nStep 3: Since they are non-superimposable mirror images with inverted stereocenters, they are enantiomers.",
                    "result": "The relationship between the two structures is enantiomers."
                }
            },
            {
                "question_id": "ch22_acs_q2_rs_assignment",
                "topic": "ACS: Stereochemistry",
                "difficulty_level": "Medium",
                "question_text": "Assign the absolute configuration of the chiral center in the compound shown below.",
                "question_smiles": "N[C@H](C)O",
                "options": [
                    {"option_id": "A", "text": "(R)-aminoethanol", "is_correct": True},
                    {"option_id": "B", "text": "(S)-aminoethanol", "is_correct": False},
                    {"option_id": "C", "text": "Achromic compound", "is_correct": False},
                    {"option_id": "D", "text": "Meso compound", "is_correct": False}
                ],
                "feedback": {
                    "context": "Applying CIP rules to assign R/S configurations to tetrahedral chiral stereocenters.",
                    "process": "Step 1: Assign priorities to substituents: -OH (priority 1), -NH2 (priority 2), -CH3 (priority 3), -H (priority 4).\nStep 2: Locate the position of the lowest priority group (-H). It is pointing away on a dashed bond.\nStep 3: Trace the path from priority 1 -> 2 -> 3. The direction is clockwise, which designates (R).",
                    "result": "The chiral carbon has the (R) configuration."
                }
            },
            {
                "question_id": "ch22_acs_q3_meso",
                "topic": "ACS: Stereochemistry",
                "difficulty_level": "Medium",
                "question_text": "Which of the following compounds is a meso compound?",
                "question_smiles": "C[C@@H](O)[C@H](O)C.C[C@@H](O)[C@@H](O)C.C[C@H](O)CCO",
                "options": [
                    {"option_id": "A", "text": "(2R,3S)-2,3-butanediol", "smiles": "C[C@@H](O)[C@H](O)C", "is_correct": True},
                    {"option_id": "B", "text": "(2R,3R)-2,3-butanediol", "smiles": "C[C@@H](O)[C@@H](O)C", "is_correct": False},
                    {"option_id": "C", "text": "(2S,3S)-2,3-butanediol", "smiles": "C[C@H](O)[C@H](O)C", "is_correct": False},
                    {"option_id": "D", "text": "1,3-butanediol", "smiles": "C[C@H](O)CCO", "is_correct": False}
                ],
                "feedback": {
                    "context": "Identifying meso compounds using symmetry planes and chiral centers.",
                    "process": "Step 1: A meso compound must have two or more chiral centers and an internal plane of symmetry.\nStep 2: 2,3-butanediol has two chiral centers (C2 and C3).\nStep 3: The (2R,3S) stereoisomer has opposite configurations at its two symmetric centers, creating an internal plane of symmetry that cancels net optical activity.",
                    "result": "(2R,3S)-2,3-butanediol is a meso compound."
                }
            },
            {
                "question_id": "ch22_acs_q4_conformations",
                "topic": "ACS: Stereochemistry",
                "difficulty_level": "Hard",
                "question_text": "Which cyclohexene-like chair conformation represents the most stable state of cis-1,3-dimethylcyclohexane?",
                "question_smiles": "CC1CC(C)CCC1",
                "options": [
                    {"option_id": "A", "text": "The chair conformation with both methyl groups in equatorial positions", "is_correct": True},
                    {"option_id": "B", "text": "The chair conformation with both methyl groups in axial positions", "is_correct": False},
                    {"option_id": "C", "text": "The chair conformation with one axial and one equatorial methyl group", "is_correct": False},
                    {"option_id": "D", "text": "A twist-boat conformation", "is_correct": False}
                ],
                "feedback": {
                    "context": "Analyzing relative conformational stabilities of disubstituted cyclohexanes.",
                    "process": "Step 1: Cis-1,3-dimethylcyclohexane has the substituents on the same face of the ring.\nStep 2: In a chair conformation, C1-cis and C3-cis can both be equatorial (1e, 3e) or both be axial (1a, 3a).\nStep 3: Equatorial placement avoids steric strain from 1,3-diaxial interactions. Thus, the (1e, 3e) conformation is highly stable (approx. 5.4 kcal/mol more stable than the diaxial form).",
                    "result": "The diequatorial chair conformation is the most stable form."
                }
            },
            {
                "question_id": "ch22_acs_q5_enantiomeric_excess",
                "topic": "ACS: Stereochemistry",
                "difficulty_level": "Medium",
                "question_text": "A mixture containing two enantiomers has a specific rotation of +12 degrees. If the pure major enantiomer has a specific rotation of +40 degrees, calculate the enantiomeric excess (ee) and ratio of the enantiomers.",
                "options": [
                    {"option_id": "A", "text": "ee: 30%, Ratio: 65% major / 35% minor", "is_correct": True},
                    {"option_id": "B", "text": "ee: 30%, Ratio: 70% major / 30% minor", "is_correct": False},
                    {"option_id": "C", "text": "ee: 40%, Ratio: 60% major / 40% minor", "is_correct": False},
                    {"option_id": "D", "text": "ee: 12%, Ratio: 56% major / 44% minor", "is_correct": False}
                ],
                "feedback": {
                    "context": "Calculating enantiomeric excess (optical purity) and compound ratio calculations.",
                    "process": "Step 1: Formula: ee = (observed rotation / pure major rotation) * 100.\nStep 2: ee = (12 / 40) * 100 = 30% ee.\nStep 3: To find enantiomer ratio: % major = ee + (100 - ee)/2 = 30 + 35 = 65% major. The minor enantiomer makes up 35%.",
                    "result": "The ee is 30% and the enantiomeric ratio is 65:35."
                }
            }
        ]
    },
    23: {
        "variable": "CHAPTER_23_QUESTIONS",
        "topic": "ACS: Substitutions & Eliminations",
        "questions": [
            {
                "question_id": "ch23_acs_q1_sn2_rate",
                "topic": "ACS: Substitutions & Eliminations",
                "difficulty_level": "Medium",
                "question_text": "Which of the following alkyl halides undergoes nucleophilic substitution via the SN2 mechanism at the fastest rate when reacted with sodium iodide in acetone?",
                "question_smiles": "CCCBr",
                "options": [
                    {"option_id": "A", "text": "1-Bromobutane", "smiles": "CCCBr", "is_correct": True},
                    {"option_id": "B", "text": "2-Bromopropane", "smiles": "CC(C)Br", "is_correct": False},
                    {"option_id": "C", "text": "t-Butyl bromide", "smiles": "CC(C)(C)Br", "is_correct": False},
                    {"option_id": "D", "text": "Neopentyl bromide", "smiles": "CC(C)(C)CBr", "is_correct": False}
                ],
                "feedback": {
                    "context": "Analyzing steric hindrance effects on the transition state of SN2 reactions.",
                    "process": "Step 1: SN2 reactions proceed via a concerted backside attack, making them highly sensitive to steric hindrance.\nStep 2: Classify the substrates: 1-Bromobutane is primary (1st degree); 2-Bromopropane is secondary (2nd degree); t-Butyl bromide is tertiary (3rd degree); Neopentyl bromide is primary but has a highly branched beta-carbon.\nStep 3: Primary halides without severe branching at the beta-position react fastest. Neopentyl bromide is primary but extremely slow due to the bulky tert-butyl group blocking the backside.",
                    "result": "1-Bromobutane reacts at the fastest rate."
                }
            },
            {
                "question_id": "ch23_acs_q2_e2_regio",
                "topic": "ACS: Substitutions & Eliminations",
                "difficulty_level": "Hard",
                "question_text": "Predict the major product formed when (1R,2S)-1-bromo-1,2-diphenylpropane undergoes E2 elimination in the presence of sodium ethoxide.",
                "question_smiles": "CC(c1ccccc1)C(Br)c2ccccc2",
                "options": [
                    {"option_id": "A", "text": "(E)-1,2-diphenylpropene", "smiles": "C/C(=C\\c1ccccc1)/c2ccccc2", "is_correct": True},
                    {"option_id": "B", "text": "(Z)-1,2-diphenylpropene", "smiles": "C/C(=C/c1ccccc1)/c2ccccc2", "is_correct": False},
                    {"option_id": "C", "text": "3,3-diphenylpropene", "smiles": "C=CC(c1ccccc1)c2ccccc2", "is_correct": False},
                    {"option_id": "D", "text": "1,1-diphenylpropene", "smiles": "CC=C(c1ccccc1)c2ccccc2", "is_correct": False}
                ],
                "feedback": {
                    "context": "Understanding the stereospecificity of E2 elimination, which requires an anti-periplanar transition state.",
                    "process": "Step 1: Align the starting material in a conformation where the beta-hydrogen and the leaving group (bromine) are anti-periplanar (dihedral angle 180 degrees).\nStep 2: Trace the positions of the remaining substituents (phenyl groups and methyl group) relative to each other in this conformation.\nStep 3: Elimination from (1R,2S)-1-bromo-1,2-diphenylpropane places the two phenyl groups on opposite sides of the resulting double bond, yielding the (E) alkene.",
                    "result": "The major product is (E)-1,2-diphenylpropene."
                }
            },
            {
                "question_id": "ch23_acs_q3_solvent_effect",
                "topic": "ACS: Substitutions & Eliminations",
                "difficulty_level": "Medium",
                "question_text": "How does switching the solvent from methanol (CH3OH) to dimethyl sulfoxide (DMSO) affect the rate of the SN2 reaction between 1-bromobutane and sodium azide?",
                "options": [
                    {"option_id": "A", "text": "The rate increases dramatically because DMSO is a polar aprotic solvent that does not solvate the azide nucleophile.", "is_correct": True},
                    {"option_id": "B", "text": "The rate decreases because methanol is polar protic and stabilises the carbocation.", "is_correct": False},
                    {"option_id": "C", "text": "The rate remains unchanged since SN2 is independent of solvent properties.", "is_correct": False},
                    {"option_id": "D", "text": "The reaction mechanism changes from SN2 to SN1.", "is_correct": False}
                ],
                "feedback": {
                    "context": "Understanding the role of solvent effects on nucleophile activity in SN2 reactions.",
                    "process": "Step 1: Methanol is a polar protic solvent. It forms strong hydrogen-bond shells around the azide anion (N3-), stabilizing the nucleophile and reducing its reactivity.\nStep 2: DMSO is a polar aprotic solvent. It solvates the sodium cation (Na+) well but cannot form hydrogen bonds with the azide anion, leaving the nucleophile highly active and 'naked'.\nStep 3: As a result, the nucleophile attacks 1-bromobutane much faster in DMSO.",
                    "result": "The rate of substitution increases dramatically in DMSO."
                }
            },
            {
                "question_id": "ch23_acs_q4_sn1_rate",
                "topic": "ACS: Substitutions & Eliminations",
                "difficulty_level": "Medium",
                "question_text": "Which of the following substrates undergoes solvolysis (SN1 hydrolysis) in aqueous ethanol at the fastest rate?",
                "question_smiles": "CC(C)(Cl)C1=CC=CC=C1.CC(C)(C)Cl.CC(C)(Cl)C=C.CC(C)Cl",
                "options": [
                    {"option_id": "A", "text": "2-chloro-2-phenylpropane (benzyl-like carbocation)", "smiles": "CC(C)(Cl)C1=CC=CC=C1", "is_correct": True},
                    {"option_id": "B", "text": "t-Butyl chloride (tertiary alkyl carbocation)", "smiles": "CC(C)(C)Cl", "is_correct": False},
                    {"option_id": "C", "text": "3-chloro-3-methyl-1-butene (allyl-like carbocation)", "smiles": "CC(C)(Cl)C=C", "is_correct": False},
                    {"option_id": "D", "text": "2-chloropropane (secondary alkyl carbocation)", "smiles": "CC(C)Cl", "is_correct": False}
                ],
                "feedback": {
                    "context": "Assessing relative carbocation stability as the rate-determining step in SN1 solvolysis.",
                    "process": "Step 1: The rate of SN1 depends on carbocation stability.\nStep 2: 2-chloro-2-phenylpropane forms a tertiary benzylic carbocation. The positive charge is extremely stabilized by resonance delocalization into the phenyl ring.\nStep 3: While t-butyl chloride forms a tertiary alkyl carbocation and 3-chloro-3-methyl-1-butene forms an allylic carbocation, the tertiary benzylic carbocation is the most stable, leading to the fastest rate.",
                    "result": "2-chloro-2-phenylpropane reacts fastest."
                }
            },
            {
                "question_id": "ch23_acs_q5_elim_comp",
                "topic": "ACS: Substitutions & Eliminations",
                "difficulty_level": "Hard",
                "question_text": "Predict the major product(s) formed when cyclohexyl bromide is heated with sodium ethoxide in ethanol.",
                "question_smiles": "C1CCC(Br)CC1",
                "options": [
                    {"option_id": "A", "text": "Cyclohexene (E2 elimination product)", "smiles": "C1CC=CCC1", "is_correct": True},
                    {"option_id": "B", "text": "Cyclohexyl ethyl ether (SN2 substitution product)", "smiles": "CCOC1CCCCC1", "is_correct": False},
                    {"option_id": "C", "text": "Cyclohexanol (SN1 product)", "smiles": "OC1CCCCC1", "is_correct": False},
                    {"option_id": "D", "text": "A 1:1 mixture of cyclohexene and cyclohexyl ethyl ether", "is_correct": False}
                ],
                "feedback": {
                    "context": "Predicting SN2 vs E2 competition on secondary substrates with strong, basic nucleophiles at high temperatures.",
                    "process": "Step 1: Identify substrate: Cyclohexyl bromide is a secondary alkyl halide.\nStep 2: Identify reagent: Sodium ethoxide is a strong, unhindered base/nucleophile. High temperatures promote elimination.\nStep 3: For secondary substrates, strong bases strongly favor E2 elimination over SN2 substitution. Deprotonation yields cyclohexene.",
                    "result": "Cyclohexene is the major product formed via E2."
                }
            }
        ]
    },
    24: {
        "variable": "CHAPTER_24_QUESTIONS",
        "topic": "ACS: Electrophilic Additions",
        "questions": [
            {
                "question_id": "ch24_acs_q1_bromination",
                "topic": "ACS: Electrophilic Additions",
                "difficulty_level": "Medium",
                "question_text": "What is the major product of the addition of molecular bromine (Br2) to cyclohexene in dichloromethane?",
                "question_smiles": "C1CCC=CC1",
                "options": [
                    {"option_id": "A", "text": "trans-1,2-dibromocyclohexane", "smiles": "C1CC[C@@H](Br)[C@H](Br)C1", "is_correct": True},
                    {"option_id": "B", "text": "cis-1,2-dibromocyclohexane", "smiles": "C1CC[C@@H](Br)[C@@H](Br)C1", "is_correct": False},
                    {"option_id": "C", "text": "1,1-dibromocyclohexane", "smiles": "C1CCCC(Br)(Br)C1", "is_correct": False},
                    {"option_id": "D", "text": "3-bromocyclohexene", "smiles": "C1C=CC(Br)CC1", "is_correct": False}
                ],
                "feedback": {
                    "context": "Understanding the mechanism and stereochemical outcome of electrophilic halogen addition to alkenes.",
                    "process": "Step 1: Bromine attacks cyclohexene to form a cyclic, three-membered bromonium ion intermediate.\nStep 2: The bromide ion attacks this intermediate from the opposite face (backside attack, anti-addition).\nStep 3: This anti-addition results in a trans-1,2-disubstituted product.",
                    "result": "The product is trans-1,2-dibromocyclohexane."
                }
            },
            {
                "question_id": "ch24_acs_q2_hydroboration",
                "topic": "ACS: Electrophilic Additions",
                "difficulty_level": "Medium",
                "question_text": "Predict the stereochemical outcome and structure of the major product when 1-methylcyclopentene is treated with BH3-THF followed by basic H2O2.",
                "question_smiles": "CC1=CCCC1",
                "options": [
                    {"option_id": "A", "text": "trans-2-methylcyclopentanol (syn-addition of H and OH)", "smiles": "C[C@@H]1CCC[C@@H]1O", "is_correct": True},
                    {"option_id": "B", "text": "cis-2-methylcyclopentanol (anti-addition of H and OH)", "smiles": "C[C@H]1CCC[C@@H]1O", "is_correct": False},
                    {"option_id": "C", "text": "1-methylcyclopentanol (Markovnikov product)", "smiles": "CC1(O)CCCC1", "is_correct": False},
                    {"option_id": "D", "text": "trans-1,2-cyclopentanediol", "smiles": "OC1CCCC1O", "is_correct": False}
                ],
                "feedback": {
                    "context": "Examining regiochemistry and stereospecificity of the hydroboration-oxidation reaction.",
                    "process": "Step 1: Hydroboration is anti-Markovnikov selective, placing boron on the less substituted carbon (C2) and hydrogen on the more substituted carbon (C1).\nStep 2: The mechanism is concerted, requiring a syn-addition where H and B add to the same face of the double bond.\nStep 3: Oxidation replaces the C-B bond with a C-OH bond with retention of stereochemistry. The resulting methyl and hydroxyl groups will end up in a trans relationship.",
                    "result": "The major product is trans-2-methylcyclopentanol."
                }
            },
            {
                "question_id": "ch24_acs_q3_oxymercuration",
                "topic": "ACS: Electrophilic Additions",
                "difficulty_level": "Medium",
                "question_text": "What is the major organic product of the reaction of 3,3-dimethyl-1-butene with mercuric acetate in water, followed by treatment with sodium borohydride?",
                "question_smiles": "CC(C)(C)C=C",
                "options": [
                    {"option_id": "A", "text": "3,3-dimethyl-2-butanol (no rearrangement)", "smiles": "CC(C)(C)C(O)C", "is_correct": True},
                    {"option_id": "B", "text": "2,3-dimethyl-2-butanol (rearranged alcohol)", "smiles": "CC(C)(O)C(C)C", "is_correct": False},
                    {"option_id": "C", "text": "3,3-dimethyl-1-butanol (anti-Markovnikov)", "smiles": "CC(C)(C)CCO", "is_correct": False},
                    {"option_id": "D", "text": "2,3-dimethyl-2-butene (elimination product)", "smiles": "CC(C)=C(C)C", "is_correct": False}
                ],
                "feedback": {
                    "context": "Comparing acid-catalyzed hydration (prone to carbocation rearrangement) with oxymercuration-demercuration (which avoids rearrangements).",
                    "process": "Step 1: Alkene addition of Hg(OAc)2 forms a cyclic mercurinium ion, avoiding free carbocation intermediates.\nStep 2: Nucleophilic attack of water occurs at the more substituted C2 carbon without skeletal rearrangement.\nStep 3: NaBH4 reduces the C-Hg bond, leaving the original carbon skeleton intact.",
                    "result": "The product is 3,3-dimethyl-2-butanol."
                }
            },
            {
                "question_id": "ch24_acs_q4_rearrangement",
                "topic": "ACS: Electrophilic Additions",
                "difficulty_level": "Hard",
                "question_text": "Identify the major organic product of the reaction between methylenecyclobutane and dilute aqueous sulfuric acid.",
                "question_smiles": "C=C1CCC1",
                "options": [
                    {"option_id": "A", "text": "1-methylcyclopentanol (via ring expansion)", "smiles": "CC1(O)CCCC1", "is_correct": True},
                    {"option_id": "B", "text": "(1-methylcyclobutyl)methanol (direct addition)", "smiles": "CC1(CO)CCC1", "is_correct": False},
                    {"option_id": "C", "text": "1-methylcyclobutanol (rearranged cyclobutanol)", "smiles": "CC1(O)CCC1", "is_correct": False},
                    {"option_id": "D", "text": "cyclopentylmethanol (ring expansion to aldehyde)", "smiles": "OC1CCCC1", "is_correct": False}
                ],
                "feedback": {
                    "context": "Analyzing carbocation-mediated reactions involving ring expansion to relieve angle strain.",
                    "process": "Step 1: Protonation of the exocyclic double bond forms a secondary carbocation at the ring-adjacent carbon: C1-cyclobutyl.\nStep 2: A 1,2-alkyl shift occurs to expand the four-membered ring to a more stable, less strained five-membered ring, forming a secondary cyclopentyl carbocation.\nStep 3: A 1,2-hydride shift converts it to a highly stable tertiary cyclopentyl carbocation.\nStep 4: Water attacks, yielding 1-methylcyclopentanol.",
                    "result": "The major product is 1-methylcyclopentanol."
                }
            },
            {
                "question_id": "ch24_acs_q5_stereospecific",
                "topic": "ACS: Electrophilic Additions",
                "difficulty_level": "Hard",
                "question_text": "Predict the stereochemical nature of the product formed from the addition of Cl2 to trans-2-butene in CH2Cl2.",
                "question_smiles": "C/C=C/C",
                "options": [
                    {"option_id": "A", "text": "A single meso compound: (2R,3S)-2,3-dichlorobutane", "smiles": "C[C@@H](Cl)[C@H](Cl)C", "is_correct": True},
                    {"option_id": "B", "text": "A racemic mixture of (2R,3R) and (2S,3S)-2,3-dichlorobutane", "smiles": "C[C@@H](Cl)[C@@H](Cl)C", "is_correct": False},
                    {"option_id": "C", "text": "A mixture of diastereomers", "is_correct": False},
                    {"option_id": "D", "text": "An optically active single enantiomer", "is_correct": False}
                ],
                "feedback": {
                    "context": "Understanding the stereospecificity of halogen additions to symmetric alkenes.",
                    "process": "Step 1: Addition of Cl2 is stereospecifically anti, proceeding through a chloronium ion.\nStep 2: Addition of identical groups (Cl) to trans-2-butene via an anti mechanism yields the symmetric meso compound.\nStep 3: cis starting material + anti addition = racemic product; trans starting material + anti addition = meso product.",
                    "result": "The product is the optically inactive meso-2,3-dichlorobutane."
                }
            }
        ]
    },
    25: {
        "variable": "CHAPTER_25_QUESTIONS",
        "topic": "ACS: Nucleophilic Additions at Carbonyls",
        "questions": [
            {
                "question_id": "ch25_acs_q1_grignard",
                "topic": "ACS: Nucleophilic Additions at Carbonyls",
                "difficulty_level": "Easy",
                "question_text": "What is the product of the reaction of methylmagnesium bromide with cyclohexanone, followed by mild acidic workup?",
                "question_smiles": "O=C1CCCCC1",
                "options": [
                    {"option_id": "A", "text": "1-Methylcyclohexanol", "smiles": "CC1(O)CCCCC1", "is_correct": True},
                    {"option_id": "B", "text": "1-Methylcyclohexene", "smiles": "CC1=CCCCC1", "is_correct": False},
                    {"option_id": "C", "text": "Methoxycyclohexane", "smiles": "COC1CCCCC1", "is_correct": False},
                    {"option_id": "D", "text": "Methyl cyclohexyl ether", "smiles": "CC1CCCCC1", "is_correct": False}
                ],
                "feedback": {
                    "context": "Examining Grignard addition to ketones to form tertiary alcohols.",
                    "process": "Step 1: The methyl nucleophile (CH3-) from the Grignard reagent attacks the electrophilic carbonyl carbon of cyclohexanone.\nStep 2: This forms a tetrahedral magnesium alkoxide intermediate.\nStep 3: Acidic workup protonates the alkoxide to yield the neutral tertiary alcohol, 1-methylcyclohexanol.",
                    "result": "The major product is 1-methylcyclohexanol."
                }
            },
            {
                "question_id": "ch25_acs_q2_acetal",
                "topic": "ACS: Nucleophilic Additions at Carbonyls",
                "difficulty_level": "Medium",
                "question_text": "Predict the structure of the product formed when benzaldehyde is heated with ethylene glycol (1,2-ethanediol) in the presence of p-toluenesulfonic acid (TsOH) catalyst.",
                "question_smiles": "O=CC1=CC=CC=C1.OCCO",
                "options": [
                    {"option_id": "A", "text": "A cyclic acetal (1,3-dioxolane derivative)", "smiles": "C1CO[CH](O1)c2ccccc2", "is_correct": True},
                    {"option_id": "B", "text": "A hemiacetal", "smiles": "OC(c1ccccc1)OCCO", "is_correct": False},
                    {"option_id": "C", "text": "An ester (glycol benzoate)", "smiles": "CCOC(=O)c1ccccc1", "is_correct": False},
                    {"option_id": "D", "text": "Benzyl ethyl ether", "smiles": "CCOCc1ccccc1", "is_correct": False}
                ],
                "feedback": {
                    "context": "Analyzing acid-catalyzed acetal formation mechanisms used for protecting carbonyl groups.",
                    "process": "Step 1: Protonation of the aldehyde carbonyl oxygen enhances its electrophilicity.\nStep 2: One alcohol group of ethylene glycol attacks the carbonyl carbon to form a hemiacetal.\nStep 3: Acid-catalyzed loss of water generates a highly reactive resonance-stabilized oxocarbenium ion.\nStep 4: Intramolecular attack by the second hydroxyl group closes the ring to form a stable cyclic acetal (1,3-dioxolane).",
                    "result": "The cyclic acetal is formed."
                }
            },
            {
                "question_id": "ch25_acs_q3_wittig",
                "topic": "ACS: Nucleophilic Additions at Carbonyls",
                "difficulty_level": "Medium",
                "question_text": "What is the major organic product of the reaction between cyclohexanone and methylenetriphenylphosphorane (a Wittig reagent)?",
                "question_smiles": "O=C1CCCCC1.C=P(c2ccccc2)(c3ccccc3)c4ccccc4",
                "options": [
                    {"option_id": "A", "text": "Methylenecyclohexane (alkene formation)", "smiles": "C=C1CCCCC1", "is_correct": True},
                    {"option_id": "B", "text": "1-methylcyclohexanol (substitution/addition)", "smiles": "CC1(O)CCCCC1", "is_correct": False},
                    {"option_id": "C", "text": "Cyclohexyl methyl ketone (rearrangement)", "smiles": "CC(=O)C1CCCCC1", "is_correct": False},
                    {"option_id": "D", "text": "7-oxabicyclo[4.1.0]heptane (epoxide)", "smiles": "C1CCC2C(C1)O2", "is_correct": False}
                ],
                "feedback": {
                    "context": "Understanding the Wittig reaction for converting carbonyls into alkenes with defined regiochemistry.",
                    "process": "Step 1: The nucleophilic carbon of the Wittig ylide (Ph3P=CH2) attacks the carbonyl carbon of cyclohexanone.\nStep 2: This forms a four-membered cyclic oxaphosphetane intermediate.\nStep 3: The oxaphosphetane undergoes thermal elimination, driven by the formation of a strong phosphorus-oxygen double bond (Ph3P=O), yielding methylenecyclohexane.",
                    "result": "The product is methylenecyclohexane."
                }
            },
            {
                "question_id": "ch25_acs_q4_cyanohydrin",
                "topic": "ACS: Nucleophilic Additions at Carbonyls",
                "difficulty_level": "Easy",
                "question_text": "Identify the product formed when acetone is treated with HCN in the presence of a catalytic amount of NaCN.",
                "question_smiles": "CC(=O)C",
                "options": [
                    {"option_id": "A", "text": "Acetone cyanohydrin", "smiles": "CC(C)(O)C#N", "is_correct": True},
                    {"option_id": "B", "text": "Isopropylamine", "smiles": "CC(C)N", "is_correct": False},
                    {"option_id": "C", "text": "2-methylpropanamide", "smiles": "CC(C)C(=O)N", "is_correct": False},
                    {"option_id": "D", "text": "2-hydroxy-2-methylpropanoic acid", "smiles": "CC(C)(O)C(=O)O", "is_correct": False}
                ],
                "feedback": {
                    "context": "Understanding the nucleophilic addition of cyanide to ketones.",
                    "process": "Step 1: Cyanide ion (CN-) acts as a nucleophile and attacks the carbonyl carbon of acetone.\nStep 2: The resulting alkoxide intermediate is protonated by HCN to yield the cyanohydrin product.\nStep 3: The NaCN provides the active nucleophile to initiate the catalytic cycle.",
                    "result": "Acetone cyanohydrin is the final product."
                }
            },
            {
                "question_id": "ch25_acs_q5_hemiacetal",
                "topic": "ACS: Nucleophilic Additions at Carbonyls",
                "difficulty_level": "Hard",
                "question_text": "Which of the following compounds exists primarily in a cyclic hemiacetal form at equilibrium?",
                "question_smiles": "O=CCCCCO.O=CCCCO.O=CCCCCC",
                "options": [
                    {"option_id": "A", "text": "5-hydroxypentanal (forms a stable 6-membered tetrahydopyran ring)", "smiles": "O=CCCCCO", "is_correct": True},
                    {"option_id": "B", "text": "4-hydroxybutanal (forms a 5-membered tetrahydrofuran ring, slightly less stable)", "smiles": "O=CCCCO", "is_correct": False},
                    {"option_id": "C", "text": "Hexanal (lacks an internal nucleophile)", "smiles": "O=CCCCCC", "is_correct": False},
                    {"option_id": "D", "text": "3-hydroxypentanal (forms a strained 4-membered ring)", "is_correct": False}
                ],
                "feedback": {
                    "context": "Evaluating thermodynamic stability of cyclic hemiacetals (pyranose/furanose analogues).",
                    "process": "Step 1: Compounds containing both a hydroxyl group and a carbonyl group in the same molecule can undergo intramolecular cyclization.\nStep 2: 5-hydroxypentanal has the hydroxyl oxygen 5 carbons away from the carbonyl.\nStep 3: Intramolecular attack forms a stable, strain-free six-membered ring (tetrahydopyran system) which makes up >99% of the mixture at equilibrium.",
                    "result": "5-hydroxypentanal exists primarily as a cyclic hemiacetal."
                }
            }
        ]
    },
    26: {
        "variable": "CHAPTER_26_QUESTIONS",
        "topic": "ACS: Nucleophilic Substitution at Carbonyls",
        "questions": [
            {
                "question_id": "ch26_acs_q1_carbonyl_substitution",
                "topic": "ACS: Nucleophilic Substitution at Carbonyls",
                "difficulty_level": "Medium",
                "question_text": "Rank the following carboxylic acid derivatives in order of decreasing reactivity toward nucleophilic acyl substitution (most reactive to least reactive): \nI. Ethyl acetate \nII. Acetyl chloride \nIII. Acetamide \nIV. Acetic anhydride",
                "options": [
                    {"option_id": "A", "text": "II > IV > I > III", "is_correct": True},
                    {"option_id": "B", "text": "II > I > IV > III", "is_correct": False},
                    {"option_id": "C", "text": "IV > II > I > III", "is_correct": False},
                    {"option_id": "D", "text": "III > I > IV > II", "is_correct": False}
                ],
                "feedback": {
                    "context": "Assessing carbonyl reactivity based on the leaving group ability and resonance donation of the substituent.",
                    "process": "Step 1: The chloride ion (Cl-) is a very weak base and an excellent leaving group, making acetyl chloride (II) the most reactive.\nStep 2: Acetate (CH3COO-) is a moderately weak base and leaving group, making acetic anhydride (IV) next.\nStep 3: Ethoxide (CH3CH2O-) is a strong base and poor leaving group, making ethyl acetate (I) less reactive.\nStep 4: Amide (NH2-) is an extremely strong base, and resonance donation from the nitrogen stabilizes the carbonyl, making acetamide (III) the least reactive.",
                    "result": "The correct sequence of decreasing reactivity is II > IV > I > III."
                }
            },
            {
                "question_id": "ch26_acs_q2_fischer",
                "topic": "ACS: Nucleophilic Substitution at Carbonyls",
                "difficulty_level": "Medium",
                "question_text": "In the acid-catalyzed Fischer esterification of benzoic acid with methanol, which step represents the rate-determining step?",
                "question_smiles": "OC(=O)C1=CC=CC=C1.CO",
                "options": [
                    {"option_id": "A", "text": "Nucleophilic attack of methanol on the protonated carbonyl carbon to form the tetrahedral intermediate.", "is_correct": True},
                    {"option_id": "B", "text": "Protonation of the benzoic acid carbonyl oxygen.", "is_correct": False},
                    {"option_id": "C", "text": "Proton transfer from the alcohol oxygen to one of the hydroxyl oxygens.", "is_correct": False},
                    {"option_id": "D", "text": "Loss of water from the tetrahedral intermediate to form the ester carbonyl.", "is_correct": False}
                ],
                "feedback": {
                    "context": "Analyzing the energy profile and steps of nucleophilic acyl substitution mechanisms.",
                    "process": "Step 1: The reaction begins with rapid protonation of the carbonyl oxygen.\nStep 2: Methanol, a weak nucleophile, attacks the highly electrophilic carbon.\nStep 3: This step breaks the aromatic carbon-oxygen double bond and forms a tetrahedral intermediate. This is the step with the highest activation energy (rate-determining step) because it involves a neutral nucleophile attacking a sterically hindered center.",
                    "result": "The rate-determining step is the nucleophilic attack of methanol."
                }
            },
            {
                "question_id": "ch26_acs_q3_saponification",
                "topic": "ACS: Nucleophilic Substitution at Carbonyls",
                "difficulty_level": "Easy",
                "question_text": "What are the final products of the base-catalyzed hydrolysis (saponification) of ethyl benzoate, followed by acidic workup?",
                "question_smiles": "CCOC(=O)C1=CC=CC=C1",
                "options": [
                    {"option_id": "A", "text": "Benzoic acid and ethanol", "smiles": "OC(=O)C1=CC=CC=C1.CCO", "is_correct": True},
                    {"option_id": "B", "text": "Sodium benzoate and ethyl ether", "smiles": "[Na+].[O-]C(=O)C1=CC=CC=C1.CCOCC", "is_correct": False},
                    {"option_id": "C", "text": "Benzyl alcohol and acetic acid", "smiles": "OCC1=CC=CC=C1.CC(=O)O", "is_correct": False},
                    {"option_id": "D", "text": "Ethyl salicylate", "is_correct": False}
                ],
                "feedback": {
                    "context": "Reviewing base-promoted ester hydrolysis mechanisms.",
                    "process": "Step 1: Hydroxide ion (OH-) attacks the ester carbonyl carbon to form a tetrahedral intermediate.\nStep 2: Ethoxide (CH3CH2O-) is expelled, yielding benzoic acid.\nStep 3: The strong base immediately deprotonates the benzoic acid to form a stable carboxylate (sodium benzoate) and ethanol. This step is irreversible.\nStep 4: Acidic workup protonates the carboxylate to yield benzoic acid.",
                    "result": "The final neutral products are benzoic acid and ethanol."
                }
            },
            {
                "question_id": "ch26_acs_q4_lactone",
                "topic": "ACS: Nucleophilic Substitution at Carbonyls",
                "difficulty_level": "Hard",
                "question_text": "Rank the cyclic esters (lactones) in order of decreasing rate of nucleophilic hydrolysis (fastest to slowest): \nI. gamma-butyrolactone (5-membered) \nII. delta-valerolactone (6-membered) \nIII. beta-propiolactone (4-membered)",
                "question_smiles": "O=C1CCO1.O=C1CCCO1.O=C1CCCCO1",
                "options": [
                    {"option_id": "A", "text": "III > II > I", "is_correct": True},
                    {"option_id": "B", "text": "I > II > III", "is_correct": False},
                    {"option_id": "C", "text": "III > I > II", "is_correct": False},
                    {"option_id": "D", "text": "II > I > III", "is_correct": False}
                ],
                "feedback": {
                    "context": "Evaluating lactone ring strain effects on carbonyl reactivity.",
                    "process": "Step 1: The rate of ring-opening hydrolysis is driven by the relief of ring strain.\nStep 2: Beta-propiolactone (III) is a highly strained four-membered ring (bond angles near 90 degrees compared to ideal 109.5/120 degrees). Thus, it is extremely reactive to relieve this strain.\nStep 3: Delta-valerolactone (II) has moderate ring strain compared to the highly stable, nearly strain-free five-membered gamma-butyrolactone (I). Additionally, six-membered cyclic esters are slightly more strained than five-membered ones in their transition states.",
                    "result": "The rate order is III (4-membered) > II (6-membered) > I (5-membered)."
                }
            },
            {
                "question_id": "ch26_acs_q5_transesterification",
                "topic": "ACS: Nucleophilic Substitution at Carbonyls",
                "difficulty_level": "Medium",
                "question_text": "What is the key intermediate formed in the acid-catalyzed transesterification of methyl acetate with excess ethanol?",
                "question_smiles": "COC(=O)C.CCO",
                "options": [
                    {"option_id": "A", "text": "A protonated tetrahedral intermediate", "is_correct": True},
                    {"option_id": "B", "text": "A carbocation intermediate", "is_correct": False},
                    {"option_id": "C", "text": "An enolate intermediate", "is_correct": False},
                    {"option_id": "D", "text": "An acylium ion intermediate", "is_correct": False}
                ],
                "feedback": {
                    "context": "Understanding transesterification mechanisms under acidic conditions.",
                    "process": "Step 1: The carbonyl oxygen of methyl acetate is protonated.\nStep 2: Ethanol attacks the carbonyl carbon to form a protonated tetrahedral adduct.\nStep 3: A proton transfer occurs from the ethyl oxygen to the methoxy oxygen, converting it into a good leaving group (methanol).\nStep 4: Collapse of the tetrahedral intermediate expels methanol, yielding ethyl acetate.",
                    "result": "The reaction proceeds through a protonated tetrahedral intermediate."
                }
            }
        ]
    },
    27: {
        "variable": "CHAPTER_27_QUESTIONS",
        "topic": "ACS: Enols & Enolate Reactions",
        "questions": [
            {
                "question_id": "ch27_acs_q1_enolate_alkylation",
                "topic": "ACS: Enols & Enolate Reactions",
                "difficulty_level": "Hard",
                "question_text": "Reaction of 2-methylcyclohexanone with LDA at -78 degrees C in THF, followed by the addition of iodomethane, yields which major product?",
                "question_smiles": "CC1CCCCC1=O",
                "options": [
                    {"option_id": "A", "text": "2,6-dimethylcyclohexanone", "smiles": "CC1CCCC(C)C1=O", "is_correct": True},
                    {"option_id": "B", "text": "2,2-dimethylcyclohexanone", "smiles": "CC1(C)CCCCC1=O", "is_correct": False},
                    {"option_id": "C", "text": "2,3-dimethylcyclohexanone", "smiles": "CC1CCC(C)CC1=O", "is_correct": False},
                    {"option_id": "D", "text": "1-methylcyclohexene", "smiles": "CC1=CCCCC1", "is_correct": False}
                ],
                "feedback": {
                    "context": "Investigating kinetic vs thermodynamic control in enolate formation.",
                    "process": "Step 1: Lithium diisopropylamide (LDA) is a strong, sterically hindered base. At low temperatures (-78 degrees C), it abstracts the most accessible, less hindered proton.\nStep 2: The proton is removed from C6 (primary/secondary enolate) rather than C2 (which is sterically crowded by the methyl group). This forms the kinetic enolate.\nStep 3: Subsequent nucleophilic attack on iodomethane (CH3I) alkylates at the C6 position, yielding 2,6-dimethylcyclohexanone.",
                    "result": "The kinetic product, 2,6-dimethylcyclohexanone, is formed."
                }
            },
            {
                "question_id": "ch27_acs_q2_aldol",
                "topic": "ACS: Enols & Enolate Reactions",
                "difficulty_level": "Medium",
                "question_text": "Predict the major organic product formed when benzaldehyde is reacted with acetone in the presence of aqueous sodium hydroxide at elevated temperatures.",
                "question_smiles": "O=CC1=CC=CC=C1.CC(=O)C",
                "options": [
                    {"option_id": "A", "text": "4-phenyl-3-buten-2-one (benzalacetone)", "smiles": "CC(=O)C=Cc1ccccc1", "is_correct": True},
                    {"option_id": "B", "text": "4-hydroxy-4-phenyl-2-butanone", "smiles": "CC(=O)CC(O)c1ccccc1", "is_correct": False},
                    {"option_id": "C", "text": "1,5-diphenyl-1,4-pentadien-3-one (dibenzalacetone)", "smiles": "O=C(C=Cc1ccccc1)C=Cc2ccccc2", "is_correct": False},
                    {"option_id": "D", "text": "Benzyl alcohol and sodium acetate", "is_correct": False}
                ],
                "feedback": {
                    "context": "Reviewing the crossed aldol condensation mechanism and dehydration conditions.",
                    "process": "Step 1: Sodium hydroxide deprotonates acetone to form its nucleophilic enolate.\nStep 2: The enolate attacks benzaldehyde (which has no alpha-hydrogens, preventing self-condensation) to form a beta-hydroxy ketone intermediate.\nStep 3: Under elevated temperatures, dehydration (elimination of water) occurs rapidly to yield the conjugated alpha,beta-unsaturated ketone, 4-phenyl-3-buten-2-one.",
                    "result": "The dehydrated condensation product, 4-phenyl-3-buten-2-one, is formed."
                }
            },
            {
                "question_id": "ch27_acs_q3_claisen",
                "topic": "ACS: Enols & Enolate Reactions",
                "difficulty_level": "Medium",
                "question_text": "What is the major organic product formed when ethyl acetate is treated with sodium ethoxide in ethanol, followed by acidic workup?",
                "question_smiles": "CCOC(=O)C",
                "options": [
                    {"option_id": "A", "text": "Ethyl acetoacetate (a beta-keto ester)", "smiles": "CCOC(=O)CC(=O)C", "is_correct": True},
                    {"option_id": "B", "text": "Diethyl malonate", "smiles": "CCOC(=O)CC(=O)OCC", "is_correct": False},
                    {"option_id": "C", "text": "Ethyl 3-hydroxybutanoate", "smiles": "CCOC(=O)CC(O)C", "is_correct": False},
                    {"option_id": "D", "text": "Ethyl propanoate", "smiles": "CCOC(=O)CC", "is_correct": False}
                ],
                "feedback": {
                    "context": "Understanding the Claisen self-condensation mechanism of esters.",
                    "process": "Step 1: Ethoxide deprotonates ethyl acetate to form its ester enolate.\nStep 2: The enolate attacks a second molecule of ethyl acetate to form a tetrahedral intermediate.\nStep 3: Expulsion of ethoxide yields ethyl acetoacetate.\nStep 4: The basic solution deprotonates the highly acidic methylene carbon between the two carbonyls. Acidic workup protonates this carbon back to yield the neutral beta-keto ester.",
                    "result": "The product is the beta-keto ester, ethyl acetoacetate."
                }
            },
            {
                "question_id": "ch27_acs_q4_haloform",
                "topic": "ACS: Enols & Enolate Reactions",
                "difficulty_level": "Easy",
                "question_text": "Which of the following compounds yields a yellow precipitate of iodoform (CHI3) when treated with iodine in aqueous sodium hydroxide?",
                "question_smiles": "CC(=O)C1=CC=CC=C1.CC(=O)CC.O=CC1=CC=CC=C1.CCOCC",
                "options": [
                    {"option_id": "A", "text": "Acetophenone (a methyl ketone)", "smiles": "CC(=O)C1=CC=CC=C1", "is_correct": True},
                    {"option_id": "B", "text": "3-pentanone", "smiles": "CCC(=O)CC", "is_correct": False},
                    {"option_id": "C", "text": "Benzaldehyde", "smiles": "O=CC1=CC=CC=C1", "is_correct": False},
                    {"option_id": "D", "text": "Diethyl ether", "smiles": "CCOCC", "is_correct": False}
                ],
                "feedback": {
                    "context": "Applying the haloform reaction test to detect methyl ketones or secondary alcohols oxidizable to methyl ketones.",
                    "process": "Step 1: The haloform reaction requires a methyl ketone (-COCH3) structural unit.\nStep 2: Base-promoted halogenation replaces all three alpha-hydrogens of the methyl group with iodine, forming a -COCI3 group.\nStep 3: Hydroxide attacks the carbonyl carbon, expelling the stable -CI3 anion, which protonates to form yellow iodoform (CHI3) precipitate.\nStep 4: Acetophenone contains the -COCH3 group and gives a positive test.",
                    "result": "Acetophenone yields a positive iodoform test."
                }
            },
            {
                "question_id": "ch27_acs_q5_acetoacetic",
                "topic": "ACS: Enols & Enolate Reactions",
                "difficulty_level": "Hard",
                "question_text": "What is the final organic product of the acetoacetic ester synthesis using ethyl acetoacetate, sodium ethoxide, 1-bromopropane, followed by heating in dilute aqueous acid?",
                "question_smiles": "CCOC(=O)CC(=O)C.CCCBr",
                "options": [
                    {"option_id": "A", "text": "2-pentanone (substituted methyl ketone)", "smiles": "CCCC(=O)C", "is_correct": False},
                    {"option_id": "B", "text": "2-hexanone (substituted methyl ketone)", "smiles": "CCCCC(=O)C", "is_correct": True},
                    {"option_id": "C", "text": "Hexanoic acid", "smiles": "CCCCCC(=O)O", "is_correct": False},
                    {"option_id": "D", "text": "Ethyl 2-propylacetoacetate", "smiles": "CCCC(C(=O)C)C(=O)OCC", "is_correct": False}
                ],
                "feedback": {
                    "context": "Analyzing the steps of acetoacetic ester synthesis: alkylation, hydrolysis, and decarboxylation.",
                    "process": "Step 1: Ethoxide deprotonates the active methylene of ethyl acetoacetate.\nStep 2: Nucleophilic substitution of 1-bromopropane alkylates the C2 position, adding a propyl group (3 carbons).\nStep 3: Heating in aqueous acid hydrolyzes the ester group to a beta-keto carboxylic acid.\nStep 4: Decarboxylation (loss of CO2) occurs via a cyclic transition state, leaving behind a methyl ketone with the added propyl group: 2-hexanone.",
                    "result": "The final product is 2-hexanone."
                }
            }
        ]
    },
    28: {
        "variable": "CHAPTER_28_QUESTIONS",
        "topic": "ACS: EAS & NAS (Aromatics)",
        "questions": [
            {
                "question_id": "ch28_acs_q1_eas",
                "topic": "ACS: EAS & NAS (Aromatics)",
                "difficulty_level": "Hard",
                "question_text": "Predict the major product of the nitration of m-nitrotoluene.",
                "question_smiles": "CC1=CC(=CC=C1)[N+](=O)[O-]",
                "options": [
                    {"option_id": "A", "text": "1-methyl-2,3-dinitrobenzene", "smiles": "CC1=C([N+](=O)[O-])C([N+](=O)[O-])=CC=C1", "is_correct": False},
                    {"option_id": "B", "text": "1-methyl-3,4-dinitrobenzene", "smiles": "CC1=CC(=C([N+](=O)[O-])C=C1)[N+](=O)[O-]", "is_correct": True},
                    {"option_id": "C", "text": "1-methyl-2,5-dinitrobenzene", "smiles": "CC1=C([N+](=O)[O-])C=CC(=C1)[N+](=O)[O-]", "is_correct": False},
                    {"option_id": "D", "text": "2-methyl-1,3-dinitrobenzene", "smiles": "CC1=C([N+](=O)[O-])C=CC=C1[N+](=O)[O-]", "is_correct": False}
                ],
                "feedback": {
                    "context": "Evaluating directing group effects in Electrophilic Aromatic Substitution (EAS) on disubstituted benzene rings.",
                    "process": "Step 1: Identify the two substituents on the ring: a methyl group (activating, ortho/para directing) and a nitro group (deactivating, meta directing).\nStep 2: The stronger activating group (methyl) dominates the regiochemical directing control.\nStep 3: Analyze the positions directed by the methyl group: C2 (ortho, but sterically hindered between methyl and nitro), C4 (para), and C6 (ortho). The nitro group directs to C5 (meta). The position C4 is directed ortho to the methyl and meta to the nitro, making it the most favored site.",
                    "result": "The major product is 1-methyl-3,4-dinitrobenzene (nitration at C4)."
                }
            },
            {
                "question_id": "ch28_acs_q2_fc_rearr",
                "topic": "ACS: EAS & NAS (Aromatics)",
                "difficulty_level": "Medium",
                "question_text": "What is the major organic product of the Friedel-Crafts alkylation of benzene with 1-chloropropane in the presence of AlCl3?",
                "question_smiles": "c1ccccc1.CCCCl",
                "options": [
                    {"option_id": "A", "text": "Isopropylbenzene (cumene, via carbocation rearrangement)", "smiles": "CC(C)c1ccccc1", "is_correct": True},
                    {"option_id": "B", "text": "Propylbenzene (direct alkylation)", "smiles": "CCCc1ccccc1", "is_correct": False},
                    {"option_id": "C", "text": "1,2-dipropylbenzene", "is_correct": False},
                    {"option_id": "D", "text": "Chlorobenzene", "smiles": "Clc1ccccc1", "is_correct": False}
                ],
                "feedback": {
                    "context": "Investigating carbocation rearrangements in Friedel-Crafts alkylation reactions.",
                    "process": "Step 1: 1-chloropropane complexes with AlCl3 to generate a primary-like carbocation complex.\nStep 2: A 1,2-hydride shift occurs immediately to convert the primary complex into the much more stable secondary isopropyl carbocation.\nStep 3: Benzene performs a electrophilic attack on the isopropyl carbocation, yielding isopropylbenzene as the major product.",
                    "result": "The major product is isopropylbenzene."
                }
            },
            {
                "question_id": "ch28_acs_q3_nas",
                "topic": "ACS: EAS & NAS (Aromatics)",
                "difficulty_level": "Hard",
                "question_text": "Which of the following chlorobenzene derivatives undergoes Nucleophilic Aromatic Substitution (NAS) at the fastest rate when heated with aqueous sodium hydroxide?",
                "question_smiles": "Clc1ccccc1.Clc1ccc([N+](=O)[O-])cc1.Clc1c([N+](=O)[O-])cc([N+](=O)[O-])cc1[N+](=O)[O-].Clc1cc([N+](=O)[O-])cc([N+](=O)[O-])c1",
                "options": [
                    {"option_id": "A", "text": "1-chloro-2,4,6-trinitrobenzene (picryl chloride)", "smiles": "Clc1c([N+](=O)[O-])cc([N+](=O)[O-])cc1[N+](=O)[O-]", "is_correct": True},
                    {"option_id": "B", "text": "1-chloro-4-nitrobenzene", "smiles": "Clc1ccc([N+](=O)[O-])cc1", "is_correct": False},
                    {"option_id": "C", "text": "1-chloro-3,5-dinitrobenzene", "smiles": "Clc1cc([N+](=O)[O-])cc([N+](=O)[O-])c1", "is_correct": False},
                    {"option_id": "D", "text": "Chlorobenzene", "smiles": "Clc1ccccc1", "is_correct": False}
                ],
                "feedback": {
                    "context": "Understanding the addition-elimination (SnAr) mechanism of nucleophilic aromatic substitution.",
                    "process": "Step 1: SnAr reactions proceed via a nucleophilic addition to form a resonance-stabilized anionic Meisenheimer complex.\nStep 2: Strongly electron-withdrawing groups (like -NO2) ortho and para to the leaving group stabilize the negative charge of the intermediate complex.\nStep 3: 1-chloro-2,4,6-trinitrobenzene has three nitro groups positioned ortho/para to the chlorine, stabilizing the complex extremely well and enabling reaction at room temperature.",
                    "result": "1-chloro-2,4,6-trinitrobenzene reacts at the fastest rate."
                }
            },
            {
                "question_id": "ch28_acs_q4_directing_strength",
                "topic": "ACS: EAS & NAS (Aromatics)",
                "difficulty_level": "Medium",
                "question_text": "Predict the major product of the bromination (Br2/FeBr3) of acetanilide.",
                "question_smiles": "CC(=O)Nc1ccccc1",
                "options": [
                    {"option_id": "A", "text": "p-bromoacetanilide (due to steric and directing group properties)", "smiles": "CC(=O)Nc1ccc(Br)cc1", "is_correct": True},
                    {"option_id": "B", "text": "o-bromoacetanilide", "smiles": "CC(=O)Nc1ccccc1Br", "is_correct": False},
                    {"option_id": "C", "text": "m-bromoacetanilide", "smiles": "CC(=O)Nc1cccc(Br)c1", "is_correct": False},
                    {"option_id": "D", "text": "2,4-dibromoacetanilide", "is_correct": False}
                ],
                "feedback": {
                    "context": "Assessing directing group strength and steric hindrance in mono-substituted benzenes.",
                    "process": "Step 1: The nitrogen of the acetamido group (-NHCOCH3) has lone pairs that donate into the ring, making it an activating, ortho/para directing group.\nStep 2: The acetamido group is sterically bulky.\nStep 3: Electrophilic attack occurs preferentially at the less hindered para position over the sterically crowded ortho position.",
                    "result": "The major product is p-bromoacetanilide."
                }
            },
            {
                "question_id": "ch28_acs_q5_benzyne",
                "topic": "ACS: EAS & NAS (Aromatics)",
                "difficulty_level": "Hard",
                "question_text": "Reaction of o-chlorotoluene with sodium amide (NaNH2) in liquid ammonia yields a mixture of which products?",
                "question_smiles": "Cc1ccccc1Cl",
                "options": [
                    {"option_id": "A", "text": "o-methylaniline and m-methylaniline", "smiles": "Cc1ccccc1N.Cc2cccc(N)c2", "is_correct": True},
                    {"option_id": "B", "text": "o-methylaniline and p-methylaniline", "is_correct": False},
                    {"option_id": "C", "text": "o-methylaniline only", "is_correct": False},
                    {"option_id": "D", "text": "m-methylaniline and p-methylaniline", "is_correct": False}
                ],
                "feedback": {
                    "context": "Understanding the elimination-addition (benzyne) mechanism of aromatic substitution.",
                    "process": "Step 1: The strong base NH2- abstracts an ortho proton from o-chlorotoluene, causing elimination of chloride to form a benzyne intermediate.\nStep 2: The triple bond of the benzyne intermediate is located between C1 and C2.\nStep 3: Attack of NH2- can occur at either C1 (yielding o-methylaniline) or C2 (yielding m-methylaniline).",
                    "result": "A mixture of ortho and meta methylanilines is formed."
                }
            }
        ]
    },
    29: {
        "variable": "CHAPTER_29_QUESTIONS",
        "topic": "ACS: Free Radicals",
        "questions": [
            {
                "question_id": "ch29_acs_q1_radical",
                "topic": "ACS: Free Radicals",
                "difficulty_level": "Medium",
                "question_text": "What is the major organic product formed when cyclohexene is heated with N-bromosuccinimide (NBS) in the presence of benzoyl peroxide?",
                "question_smiles": "C1CCC=CC1",
                "options": [
                    {"option_id": "A", "text": "3-bromocyclohexene", "smiles": "C1C=CC(Br)CC1", "is_correct": True},
                    {"option_id": "B", "text": "1,2-dibromocyclohexane", "smiles": "C1CC(Br)C(Br)CC1", "is_correct": False},
                    {"option_id": "C", "text": "4-bromocyclohexene", "smiles": "C1C=CCC(Br)C1", "is_correct": False},
                    {"option_id": "D", "text": "3,6-dibromocyclohexene", "smiles": "C1C(Br)C=CC(Br)C1", "is_correct": False}
                ],
                "feedback": {
                    "context": "Reviewing allylic bromination via a free radical chain mechanism.",
                    "process": "Step 1: Benzoyl peroxide initiates radical formation. A bromine radical abstracts an allylic hydrogen from cyclohexene to form a resonance-stabilized allylic radical.\nStep 2: The allylic radical reacts with Br2 (generated in low concentrations by NBS) to form the product, 3-bromocyclohexene.\nStep 3: Addition across the double bond is suppressed due to the low concentration of molecular bromine.",
                    "result": "The major product is 3-bromocyclohexene."
                }
            },
            {
                "question_id": "ch29_acs_q2_selectivity",
                "topic": "ACS: Free Radicals",
                "difficulty_level": "Easy",
                "question_text": "Explain why free radical bromination of propane is highly selective for 2-bromopropane (approx. 97%), whereas chlorination yields a nearly 1:1 mixture of 1-chloropropane and 2-chloropropane.",
                "options": [
                    {"option_id": "A", "text": "Bromination is endothermic and has a late transition state, making it highly sensitive to radical stability.", "is_correct": True},
                    {"option_id": "B", "text": "Chlorine radicals are larger and experience more steric hindrance.", "is_correct": False},
                    {"option_id": "C", "text": "Bromine is a stronger oxidizing agent than chlorine.", "is_correct": False},
                    {"option_id": "D", "text": "Propane has a higher activation energy for hydrogen abstraction by chlorine.", "is_correct": False}
                ],
                "feedback": {
                    "context": "Applying the Hammond Postulate to explain radical halogenation selectivity.",
                    "process": "Step 1: Radical bromination is endothermic. According to the Hammond Postulate, its transition state is 'late' (resembles the radical intermediate).\nStep 2: Thus, the stability of the forming radical (secondary vs primary) strongly influences the activation energy.\nStep 3: Radical chlorination is exothermic and has an 'early' transition state (resembles starting materials), making it less sensitive to intermediate stability and resulting in lower selectivity.",
                    "result": "Bromination is highly selective because it has a late transition state."
                }
            },
            {
                "question_id": "ch29_acs_q3_anti_markovnikov",
                "topic": "ACS: Free Radicals",
                "difficulty_level": "Medium",
                "question_text": "Predict the structure of the major product of the reaction of 1-butene with HBr in the presence of di-tert-butyl peroxide.",
                "question_smiles": "CCC=C",
                "options": [
                    {"option_id": "A", "text": "1-bromobutane (anti-Markovnikov addition)", "smiles": "CCCCBr", "is_correct": True},
                    {"option_id": "B", "text": "2-bromobutane (Markovnikov addition)", "smiles": "CCC(Br)C", "is_correct": False},
                    {"option_id": "C", "text": "1,2-dibromobutane", "smiles": "CCC(Br)COBr", "is_correct": False},
                    {"option_id": "D", "text": "1-butanol", "smiles": "CCCCO", "is_correct": False}
                ],
                "feedback": {
                    "context": "Understanding free-radical-mediated addition of HBr to alkenes.",
                    "process": "Step 1: Peroxides thermally homolyze to generate alkoxy radicals, which abstract H from HBr to form bromine radicals (Br*).\nStep 2: The Br* radical attacks the double bond of 1-butene, adding regioselectively to the less substituted carbon (C1) to generate the more stable secondary radical at C2.\nStep 3: The C2 radical abstracts H from HBr to complete the chain, yielding 1-bromobutane.",
                    "result": "The reaction yields the anti-Markovnikov product, 1-bromobutane."
                }
            },
            {
                "question_id": "ch29_acs_q4_polymer",
                "topic": "ACS: Free Radicals",
                "difficulty_level": "Easy",
                "question_text": "Which of the following monomers readily undergoes free-radical polymerization when heated with a radical initiator like AIBN?",
                "question_smiles": "C=CC1=CC=CC=C1.CC=CC.CCOCC.O=C1OCCO1",
                "options": [
                    {"option_id": "A", "text": "Styrene (phenylethylene)", "smiles": "C=CC1=CC=CC=C1", "is_correct": True},
                    {"option_id": "B", "text": "2-butene", "smiles": "CC=CC", "is_correct": False},
                    {"option_id": "C", "text": "Diethyl ether", "smiles": "CCOCC", "is_correct": False},
                    {"option_id": "D", "text": "Ethylene carbonate", "is_correct": False}
                ],
                "feedback": {
                    "context": "Identifying monomers suitable for radical chain-growth polymerization.",
                    "process": "Step 1: Radical polymerization requires monomers that form stable radical intermediates during chain propagation.\nStep 2: Styrene contains an alkene group conjugated with a benzene ring.\nStep 3: Attack of a radical on the double bond forms a benzylic radical, which is highly stabilized by resonance delocalization into the aromatic ring, driving rapid polymerization.",
                    "result": "Styrene polymerizes rapidly under radical conditions."
                }
            },
            {
                "question_id": "ch29_acs_q5_autoox",
                "topic": "ACS: Free Radicals",
                "difficulty_level": "Hard",
                "question_text": "What is the primary danger associated with storing ethers (such as tetrahydrofuran or diethyl ether) in the presence of oxygen and light for extended periods?",
                "options": [
                    {"option_id": "A", "text": "Formation of explosive hydroperoxides via free radical auto-oxidation.", "is_correct": True},
                    {"option_id": "B", "text": "Acid-catalyzed hydrolysis to ethanol and acetaldehyde.", "is_correct": False},
                    {"option_id": "C", "text": "Polymerization into high-density plastics.", "is_correct": False},
                    {"option_id": "D", "text": "Spontaneous combustion at room temperature.", "is_correct": False}
                ],
                "feedback": {
                    "context": "Investigating free radical auto-oxidation mechanisms of ethers.",
                    "process": "Step 1: Light initiates radical formation. A radical abstracts a hydrogen from the carbon adjacent to the ether oxygen (alpha-carbon, which has a weak C-H bond due to oxygen lone pair stabilization).\nStep 2: The resulting carbon radical reacts with molecular oxygen (O2) to form a peroxy radical.\nStep 3: The peroxy radical abstracts another hydrogen to yield a hydroperoxide. These compounds are highly unstable and explosive.",
                    "result": "The danger is the formation of explosive hydroperoxides."
                }
            }
        ]
    },
    30: {
        "variable": "CHAPTER_30_QUESTIONS",
        "topic": "ACS: Oxidations & Reductions",
        "questions": [
            {
                "question_id": "ch30_acs_q1_ozonolysis",
                "topic": "ACS: Oxidations & Reductions",
                "difficulty_level": "Hard",
                "question_text": "Treatment of the diene shown (1-methyl-4-(propan-2-ylidene)cyclohexene) with excess ozone followed by a reductive work-up produces which final products?",
                "question_smiles": "CC1=CCC(CC1)=C(C)C",
                "options": [
                    {"option_id": "A", "text": "A single dialdehyde-diketone chain with no cleavage", "smiles": "CC(=O)CCCCC(=O)C", "is_correct": False},
                    {"option_id": "B", "text": "4-methyl-3-cyclohexen-1-one and acetone", "smiles": "CC1=CC(=O)CCC1.CC(C)=O", "is_correct": False},
                    {"option_id": "C", "text": "4-methylcyclohexanone and 2-hydroxypropan-2-yl radical", "smiles": "CC1CCCCC1=O", "is_correct": False},
                    {"option_id": "D", "text": "Acetone and 4-oxopentanal", "smiles": "CC(C)=O.CC(=O)CCC=O", "is_correct": True}
                ],
                "feedback": {
                    "context": "Analyzing the cleavage of endocyclic and exocyclic double bonds under ozonolysis conditions.",
                    "process": "Step 1: The starting diene contains two double bonds: one endocyclic (within the cyclohexene ring) and one exocyclic (attached to the isopropylidene group).\nStep 2: Excess ozone (O3) cleaves both double bonds. Cleavage of the exocyclic double bond yields acetone.\nStep 3: Cleavage of the endocyclic double bond breaks the ring, yielding a carbonyl at each end. The ring carbon with the methyl substituent is oxidized to a methyl ketone, and the unsubstituted alkene carbon is oxidized to an aldehyde, resulting in 4-oxopentanal.",
                    "result": "The final products are acetone (CC(C)=O) and 4-oxopentanal (CC(=O)CCC=O)."
                }
            },
            {
                "question_id": "ch30_acs_q2_reduction_alkyne",
                "topic": "ACS: Oxidations & Reductions",
                "difficulty_level": "Medium",
                "question_text": "Determine the stereochemical identity of the alkene product when 2-butyne is reduced using sodium metal in liquid ammonia.",
                "question_smiles": "CC#CC",
                "options": [
                    {"option_id": "A", "text": "trans-2-butene (anti-addition of hydrogen)", "smiles": "C/C=C/C", "is_correct": True},
                    {"option_id": "B", "text": "cis-2-butene (syn-addition of hydrogen)", "smiles": "C/C=C\\C", "is_correct": False},
                    {"option_id": "C", "text": "butane (complete reduction)", "smiles": "CCCC", "is_correct": False},
                    {"option_id": "D", "text": "A 1:1 mixture of cis and trans-2-butene", "is_correct": False}
                ],
                "feedback": {
                    "context": "Comparing dissolving metal reduction (yielding trans alkenes) vs catalytic hydrogenation (yielding cis alkenes).",
                    "process": "Step 1: Sodium in liquid ammonia reduces alkynes via a radical anion mechanism.\nStep 2: Proton transfer from ammonia generates a radical intermediate, which equilibrates to the thermodynamically more stable trans configuration to minimize steric interactions of the methyl groups.\nStep 3: Subsequent reduction and protonation yields the trans-alkene, trans-2-butene.",
                    "result": "The product is trans-2-butene."
                }
            },
            {
                "question_id": "ch30_acs_q3_mcpba",
                "topic": "ACS: Oxidations & Reductions",
                "difficulty_level": "Easy",
                "question_text": "Predict the structure of the product formed when cyclohexene is treated with meta-chloroperbenzoic acid (mCPBA) in dichloromethane.",
                "question_smiles": "C1CCC=CC1",
                "options": [
                    {"option_id": "A", "text": "Cyclohexene oxide (1,2-epoxycyclohexane)", "smiles": "C1CCC2C(C1)O2", "is_correct": True},
                    {"option_id": "B", "text": "trans-1,2-cyclohexanediol", "smiles": "OC1CCCC1O", "is_correct": False},
                    {"option_id": "C", "text": "cis-1,2-cyclohexanediol", "smiles": "OC1CCCC1O", "is_correct": False},
                    {"option_id": "D", "text": "Adipic acid", "smiles": "OC(=O)CCCCC(=O)O", "is_correct": False}
                ],
                "feedback": {
                    "context": "Understanding the epoxidation of alkenes using peroxycarboxylic acids.",
                    "process": "Step 1: mCPBA is a peroxy acid containing a weak O-O bond.\nStep 2: Reaction with cyclohexene proceeds via a concerted butterfly mechanism where oxygen is transferred directly to the double bond.\nStep 3: This stereospecific addition forms a three-membered cyclic ether (epoxide), cyclohexene oxide.",
                    "result": "The major product is cyclohexene oxide."
                }
            },
            {
                "question_id": "ch30_acs_q4_chromium",
                "topic": "ACS: Oxidations & Reductions",
                "difficulty_level": "Medium",
                "question_text": "Which reagent combination should be used to convert 1-pentanol into pentanoic acid?",
                "question_smiles": "CCCCCO",
                "options": [
                    {"option_id": "A", "text": "Na2Cr2O7, H2SO4, H2O (Jones Reagent)", "smiles": "Na2Cr2O7", "is_correct": True},
                    {"option_id": "B", "text": "Pyridinium chlorochromate (PCC) in CH2Cl2", "smiles": "", "is_correct": False},
                    {"option_id": "C", "text": "LiAlH4 in ether", "smiles": "", "is_correct": False},
                    {"option_id": "D", "text": "DMP (Dess-Martin periodinane)", "smiles": "", "is_correct": False}
                ],
                "feedback": {
                    "context": "Selecting the appropriate oxidizing agent for complete oxidation vs partial oxidation of primary alcohols.",
                    "process": "Step 1: 1-pentanol is a primary alcohol.\nStep 2: Weak oxidizing agents (PCC, DMP, Swern) oxidize primary alcohols to aldehydes (pentanal) and stop there.\nStep 3: Strong aqueous oxidizing agents (Jones reagent, KMnO4) oxidize primary alcohols to aldehydes, which are immediately hydrated in water and oxidized further to carboxylic acids (pentanoic acid).",
                    "result": "Jones Reagent (aqueous chromic acid) completes the oxidation to pentanoic acid."
                }
            },
            {
                "question_id": "ch30_acs_q5_syn_diol",
                "topic": "ACS: Oxidations & Reductions",
                "difficulty_level": "Medium",
                "question_text": "What is the product of the reaction of cyclopentene with osmium tetroxide (OsO4) followed by treatment with aqueous NaHSO3?",
                "question_smiles": "C1CC=CC1",
                "options": [
                    {"option_id": "A", "text": "cis-1,2-cyclopentanediol (syn-dihydroxylation)", "smiles": "OC1CCC[C@H]1O", "is_correct": True},
                    {"option_id": "B", "text": "trans-1,2-cyclopentanediol (anti-dihydroxylation)", "smiles": "OC1CCC[C@@H]1O", "is_correct": False},
                    {"option_id": "C", "text": "cyclopentanone", "smiles": "O=C1CCCC1", "is_correct": False},
                    {"option_id": "D", "text": "glutaric acid", "smiles": "OC(=O)CCCC(=O)O", "is_correct": False}
                ],
                "feedback": {
                    "context": "Understanding the stereospecificity of dihydroxylation reactions using metal oxides.",
                    "process": "Step 1: OsO4 undergoes a concerted [3+2] cycloaddition with the double bond of cyclopentene to form a cyclic osmate ester intermediate.\nStep 2: This intermediate is formed by adding both oxygens to the same face of the alkene (syn-addition).\nStep 3: Treatment with NaHSO3 hydrolyzes the cyclic osmate ester, retaining the stereocenter configurations, to yield cis-1,2-cyclopentanediol.",
                    "result": "The product is cis-1,2-cyclopentanediol."
                }
            }
        ]
    },
    31: {
        "variable": "CHAPTER_31_QUESTIONS",
        "topic": "ACS: Spectroscopy",
        "questions": [
            {
                "question_id": "ch31_acs_q1_nmr_ester",
                "topic": "ACS: Spectroscopy",
                "difficulty_level": "Hard",
                "question_text": "An organic compound shows a 1H NMR spectrum consisting of: \n- A quartet at delta 4.2 ppm (2H) \n- A triplet at delta 3.8 ppm (2H) \n- A triplet at delta 2.8 ppm (2H) \n- A triplet at delta 1.3 ppm (3H)\nWhich structure is consistent with this spectrum?",
                "question_smiles": "ClCCC(=O)OCC",
                "options": [
                    {"option_id": "A", "text": "Ethyl 3-chloropropanoate", "smiles": "ClCCC(=O)OCC", "is_correct": True},
                    {"option_id": "B", "text": "1-chloro-3-pentanone", "smiles": "ClCCC(=O)CC", "is_correct": False},
                    {"option_id": "C", "text": "2-chloroethyl propanoate", "smiles": "ClCCOC(=O)CC", "is_correct": False},
                    {"option_id": "D", "text": "3-chloropropyl acetate", "smiles": "ClCCCOC(=O)C", "is_correct": False}
                ],
                "feedback": {
                    "context": "Interpreting chemical shifts and splitting patterns to elucidate ester structures.",
                    "process": "Step 1: The quartet at delta 4.2 and triplet at delta 1.3 form an ethyl ester pattern (-OCH2CH3), shifted downfield because the methylene is directly attached to the ester oxygen.\nStep 2: The remaining signals are two coupled methylenes (two triplets at delta 3.8 and 2.8). The triplet at delta 3.8 is shifted downfield due to the electronegative chlorine atom (-CH2Cl), and the triplet at delta 2.8 is adjacent to the carbonyl (-CH2CO-).\nStep 3: This matches ethyl 3-chloropropanoate (ClCH2CH2COOCH2CH3).",
                    "result": "The correct structure is ethyl 3-chloropropanoate."
                }
            },
            {
                "question_id": "ch31_acs_q2_c13_signals",
                "topic": "ACS: Spectroscopy",
                "difficulty_level": "Medium",
                "question_text": "How many signals would you expect in the proton-decoupled 13C NMR spectrum for 4-methylacetophenone?",
                "question_smiles": "CC(=O)C1=CC=C(C)C=C1",
                "options": [
                    {"option_id": "A", "text": "5", "is_correct": False},
                    {"option_id": "B", "text": "6", "is_correct": False},
                    {"option_id": "C", "text": "7", "is_correct": True},
                    {"option_id": "D", "text": "9", "is_correct": False}
                ],
                "feedback": {
                    "context": "Understanding chemical equivalence and symmetry in Carbon-13 NMR.",
                    "process": "Step 1: Identify all carbons: CH3-C6H4-C(=O)CH3.\nStep 2: The ring is 1,4-disubstituted (para-disubstituted) and possesses a plane of symmetry passing through C1 and C4.\nStep 3: Count the distinct carbon environments: carbonyl carbon (1), acetyl methyl (1), ring methyl (1), ring C1 (1), ring C4 (1), ring C2/C6 (1), ring C3/C5 (1). Total = 7 distinct carbon signals.",
                    "result": "The compound shows 7 signals in its carbon-13 NMR spectrum."
                }
            },
            {
                "question_id": "ch31_acs_q3_diethy_malonate",
                "topic": "ACS: Spectroscopy",
                "difficulty_level": "Hard",
                "question_text": "An organic compound has a 1H NMR spectrum with three signals: a quartet at delta 4.1, a singlet at delta 3.4, and a triplet at delta 1.25. Which compound matches this spectrum?",
                "question_smiles": "CCOC(=O)CC(=O)OCC",
                "options": [
                    {"option_id": "A", "text": "Diethyl malonate", "smiles": "CCOC(=O)CC(=O)OCC", "is_correct": True},
                    {"option_id": "B", "text": "Methyl propanoate", "smiles": "CCC(=O)OC", "is_correct": False},
                    {"option_id": "C", "text": "Ethyl acetoacetate", "smiles": "CCOC(=O)CC(=O)C", "is_correct": False},
                    {"option_id": "D", "text": "Butanone", "smiles": "CCC(=O)C", "is_correct": False}
                ],
                "feedback": {
                    "context": "Interpreting coupling and shifts in complex ester-carbonyl systems.",
                    "process": "Step 1: The quartet at delta 4.1 and triplet at 1.25 represent an ethyl ester group (-OCH2CH3).\nStep 2: The singlet at delta 3.4 represents a methylene group between two electron-withdrawing carbonyls (-CO-CH2-CO-).\nStep 3: Diethyl malonate contains two equivalent ethyl ester groups and one central methylene group, matching all three signals.",
                    "result": "The compound is diethyl malonate."
                }
            },
            {
                "question_id": "ch31_acs_q4_ms_heptanone",
                "topic": "ACS: Spectroscopy",
                "difficulty_level": "Medium",
                "question_text": "Which compound would show a molecular ion at m/z 114 and a major fragment ion at m/z 71?",
                "question_smiles": "CCCC(=O)CCC",
                "options": [
                    {"option_id": "A", "text": "4-heptanone", "smiles": "CCCC(=O)CCC", "is_correct": True},
                    {"option_id": "B", "text": "3-heptanone", "smiles": "CCCCC(=O)CC", "is_correct": False},
                    {"option_id": "C", "text": "2-hexanone", "smiles": "CCCCC(=O)C", "is_correct": False},
                    {"option_id": "D", "text": "4-heptanol", "smiles": "CCCC(O)CCC", "is_correct": False}
                ],
                "feedback": {
                    "context": "Analyzing fragmentations in mass spectrometry, specifically alpha-cleavage of ketones.",
                    "process": "Step 1: Calculate molecular weights: 4-heptanone is C7H14O, MW = 114. 3-heptanone is C7H14O, MW = 114. 2-hexanone is C6H12O, MW = 100. 4-heptanol is C7H16O, MW = 116. This narrows it down to the two heptanone isomers.\nStep 2: Identify the fragment at m/z 71. The fragment represents the acylium ion (R-C#O+) formed by alpha-cleavage.\nStep 3: For 4-heptanone, alpha-cleavage on either side loses a propyl radical (mass 43) to yield the propylacylium ion (CH3CH2CH2-C#O+) at m/z 71.\nStep 4: For 3-heptanone, alpha-cleavage yields either ethylacylium (m/z 57) or butylacylium (m/z 85).",
                    "result": "The correct compound is 4-heptanone."
                }
            },
            {
                "question_id": "ch31_acs_q5_ir_functional",
                "topic": "ACS: Spectroscopy",
                "difficulty_level": "Easy",
                "question_text": "An unknown organic compound shows a strong, broad absorption band at 3300 cm-1 and a sharp absorption band at 1715 cm-1 in its IR spectrum. What functional group is present?",
                "options": [
                    {"option_id": "A", "text": "Carboxylic acid", "is_correct": True},
                    {"option_id": "B", "text": "Alcohol", "is_correct": False},
                    {"option_id": "C", "text": "Ketone", "is_correct": False},
                    {"option_id": "D", "text": "Ester", "is_correct": False}
                ],
                "feedback": {
                    "context": "Identifying functional groups based on characteristic IR absorption frequencies.",
                    "process": "Step 1: The absorption at 1715 cm-1 corresponds to a carbonyl stretch (C=O).\nStep 2: The very broad absorption around 3300 cm-1 is characteristic of an O-H stretch.\nStep 3: The combination of a carbonyl stretch and a broad hydroxyl stretch is characteristic of a carboxylic acid functional group.",
                    "result": "The functional group is a carboxylic acid."
                }
            }
        ]
    },
    32: {
        "variable": "CHAPTER_32_QUESTIONS",
        "topic": "ACS: Synthesis & Qualitative Analysis",
        "questions": [
            {
                "question_id": "ch32_acs_q1_synthesis_bromobenzoic",
                "topic": "ACS: Synthesis & Qualitative Analysis",
                "difficulty_level": "Hard",
                "question_text": "Choose the best reaction sequence to synthesize m-bromobenzoic acid starting from toluene.",
                "question_smiles": "Cc1ccccc1",
                "options": [
                    {"option_id": "A", "text": "1) KMnO4, NaOH, heat; 2) H3O+; 3) Br2, FeBr3", "is_correct": True},
                    {"option_id": "B", "text": "1) Br2, FeBr3; 2) KMnO4, NaOH, heat; 3) H3O+", "is_correct": False},
                    {"option_id": "C", "text": "1) Br2, light; 2) Mg, ether; 3) CO2, then H3O+", "is_correct": False},
                    {"option_id": "D", "text": "1) HNO3, H2SO4; 2) Br2, FeBr3; 3) H2, Pd/C", "is_correct": False}
                ],
                "feedback": {
                    "context": "Designing multi-step aromatic synthesis by controlling directing effects of substituents.",
                    "process": "Step 1: Toluene has a methyl group (-CH3) which is ortho/para directing. Brominating first (choice B) would place bromine at the ortho/para positions.\nStep 2: Oxidation of toluene with KMnO4 yields benzoic acid, which has a carboxylic acid group (-COOH).\nStep 3: The -COOH group is a meta-director. Subsequent bromination of benzoic acid yields m-bromobenzoic acid.",
                    "result": "The correct sequence is oxidation first, followed by bromination."
                }
            },
            {
                "question_id": "ch32_acs_q2_lucas",
                "topic": "ACS: Synthesis & Qualitative Analysis",
                "difficulty_level": "Easy",
                "question_text": "Which of the following alcohols reacts fastest with the Lucas reagent (HCl/ZnCl2) at room temperature to form an insoluble alkyl chloride?",
                "question_smiles": "CC(C)(O)C.CC(C)O.CCCO",
                "options": [
                    {"option_id": "A", "text": "t-Butyl alcohol (tertiary)", "smiles": "CC(C)(O)C", "is_correct": True},
                    {"option_id": "B", "text": "Isopropyl alcohol (secondary)", "smiles": "CC(C)O", "is_correct": False},
                    {"option_id": "C", "text": "1-propanol (primary)", "smiles": "CCCO", "is_correct": False},
                    {"option_id": "D", "text": "Methanol", "smiles": "CO", "is_correct": False}
                ],
                "feedback": {
                    "context": "Applying qualitative tests (Lucas test) to distinguish between alcohol classes based on carbocation stability.",
                    "process": "Step 1: Lucas reagent converts alcohols to alkyl chlorides via an SN1 mechanism.\nStep 2: The rate-determining step is the formation of a carbocation.\nStep 3: Tertiary alcohols (like t-butyl alcohol) form highly stable tertiary carbocations and react almost instantly (turbidity within seconds).\nStep 4: Secondary alcohols take 5-10 minutes, and primary alcohols do not react at room temperature.",
                    "result": "t-Butyl alcohol reacts fastest."
                }
            },
            {
                "question_id": "ch32_acs_q3_tollens",
                "topic": "ACS: Synthesis & Qualitative Analysis",
                "difficulty_level": "Easy",
                "question_text": "Which of the following compounds gives a positive Tollens' test (formation of a silver mirror)?",
                "question_smiles": "O=CC1=CC=CC=C1.CC(=O)C1=CC=CC=C1.O=C1CCCCC1.CCOCC",
                "options": [
                    {"option_id": "A", "text": "Benzaldehyde (an aldehyde)", "smiles": "O=CC1=CC=CC=C1", "is_correct": True},
                    {"option_id": "B", "text": "Acetophenone (a ketone)", "smiles": "CC(=O)C1=CC=CC=C1", "is_correct": False},
                    {"option_id": "C", "text": "Cyclohexanone (a ketone)", "smiles": "O=C1CCCCC1", "is_correct": False},
                    {"option_id": "D", "text": "Diethyl ether", "smiles": "CCOCC", "is_correct": False}
                ],
                "feedback": {
                    "context": "Using Tollens' test to distinguish aldehydes from ketones based on oxidation susceptibility.",
                    "process": "Step 1: Tollens' reagent [Ag(NH3)2+] is a mild oxidizing agent that selectively oxidizes aldehydes to carboxylate ions.\nStep 2: During this oxidation, Ag+ is reduced to metallic silver (Ag0), which deposits on the glass forming a silver mirror.\nStep 3: Ketones and ethers are not oxidized by Tollens' reagent, giving a negative test. Benzaldehyde is an aldehyde and yields a positive test.",
                    "result": "Benzaldehyde gives a positive Tollens' test."
                }
            },
            {
                "question_id": "ch32_acs_q4_synthesis_aniline",
                "topic": "ACS: Synthesis & Qualitative Analysis",
                "difficulty_level": "Medium",
                "question_text": "Choose the best reaction sequence to synthesize aniline starting from benzene.",
                "question_smiles": "c1ccccc1",
                "options": [
                    {"option_id": "A", "text": "1) HNO3, H2SO4; 2) Fe, HCl, then NaOH", "is_correct": True},
                    {"option_id": "B", "text": "1) NH3, heat; 2) H2, Pd/C", "is_correct": False},
                    {"option_id": "C", "text": "1) Cl2, FeCl3; 2) NaNH2, liquid NH3", "is_correct": False},
                    {"option_id": "D", "text": "1) KMnO4, NaOH; 2) NH3, DCC", "is_correct": False}
                ],
                "feedback": {
                    "context": "Applying electrophilic aromatic substitution and subsequent functional group reductions.",
                    "process": "Step 1: Benzene cannot undergo nucleophilic attack directly by ammonia. Thus, direct amination (choice B) is impossible.\nStep 2: Nitration of benzene using HNO3/H2SO4 introduces a nitro group, forming nitrobenzene.\nStep 3: Reduction of the nitro group to an amino group is standardly performed using iron (Fe) or tin (Sn) in acid, followed by basic workup to deprotonate the ammonium salt, yielding aniline.",
                    "result": "The correct sequence is nitration followed by reduction."
                }
            },
            {
                "question_id": "ch32_acs_q5_acetoacetate_synthesis",
                "topic": "ACS: Synthesis & Qualitative Analysis",
                "difficulty_level": "Hard",
                "question_text": "A student wants to synthesize ethyl 2-methylacetoacetate starting from ethyl acetoacetate. Which reaction sequence is the most appropriate?",
                "question_smiles": "CCOC(=O)CC(=O)C",
                "options": [
                    {"option_id": "A", "text": "1) NaOEt, EtOH; 2) CH3I", "is_correct": True},
                    {"option_id": "B", "text": "1) LDA, THF, -78 C; 2) CH3I", "is_correct": False},
                    {"option_id": "C", "text": "1) NaOH, H2O; 2) CH3I", "is_correct": False},
                    {"option_id": "D", "text": "1) H3O+, heat; 2) CH3I", "is_correct": False}
                ],
                "feedback": {
                    "context": "Choosing the correct base and conditions for selective alkylation of beta-keto esters.",
                    "process": "Step 1: The protons on the central methylene carbon (C2) of ethyl acetoacetate are highly acidic (pKa ~ 11) because the resulting enolate is stabilized by two adjacent carbonyls.\nStep 2: Sodium ethoxide (NaOEt) in ethanol is a strong enough base to completely deprotonate this position, without hydrolyzing the ester (using NaOH would cause ester hydrolysis).\nStep 3: Subsequent addition of iodomethane (CH3I) alkylates C2 to yield ethyl 2-methylacetoacetate.",
                    "result": "The correct sequence is sodium ethoxide followed by iodomethane."
                }
            }
        ]
    }
}

def main():
    for num, data in acs_chapters.items():
        filename = f"chapter{num}.js"
        path = os.path.join(questions_dir, filename)
        
        # Format the questions array into standard Javascript variable declaration
        # Standard format: const VARIABLE = [ ... ];
        js_content = f"// ACS Organic Chemistry Exam Preparation - {data['topic']}\n"
        js_content += f"const {data['variable']} = [\n"
        
        q_blocks = []
        for q in data['questions']:
            q_block = "  {\n"
            q_block += f"    \"question_id\": \"{q['question_id']}\",\n"
            q_block += f"    \"topic\": \"{q['topic']}\",\n"
            q_block += f"    \"difficulty_level\": \"{q['difficulty_level']}\",\n"
            
            text_escaped = json.dumps(q['question_text'])
            q_block += f"    \"question_text\": {text_escaped},\n"
            q_block += f"    \"question_smiles\": \"{q.get('question_smiles', '')}\",\n"
            
            # Options
            q_block += "    \"options\": [\n"
            opt_blocks = []
            for opt in q['options']:
                opt_str = "      {\n"
                opt_str += f"        \"option_id\": \"{opt['option_id']}\",\n"
                opt_str += f"        \"text\": {json.dumps(opt['text'])},\n"
                if 'smiles' in opt:
                    opt_str += f"        \"smiles\": \"{opt['smiles']}\",\n"
                opt_str += f"        \"is_correct\": {str(opt['is_correct']).lower()}\n"
                opt_str += "      }"
                opt_blocks.append(opt_str)
            q_block += ",\n".join(opt_blocks) + "\n"
            q_block += "    ],\n"
            
            # Feedback
            q_block += "    \"feedback\": {\n"
            q_block += f"      \"context\": {json.dumps(q['feedback']['context'])},\n"
            q_block += f"      \"process\": {json.dumps(q['feedback']['process'])},\n"
            q_block += f"      \"result\": {json.dumps(q['feedback']['result'])}\n"
            q_block += "    }\n"
            
            q_block += "  }"
            q_blocks.append(q_block)
            
        js_content += ",\n".join(q_blocks) + "\n"
        js_content += "];\n"
        
        # Write to file
        with open(path, 'w', encoding='utf-8') as f:
            f.write(js_content)
        print(f"Created {filename} successfully with {len(data['questions'])} questions.")

if __name__ == "__main__":
    main()
