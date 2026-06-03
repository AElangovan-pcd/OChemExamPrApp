import os
import json
import re

questions_dir = r"C:\Users\easam\Documents\Gemini\OChemExamPrApp\questions"

ch1_dynamic = [
    {
        "question_id": "ch1_q_dynamic_hybridization",
        "topic": "Atomic Structure & Hybridization",
        "difficulty_level": "Medium",
        "question_text": "Match each carbon atom structure highlight to its correct orbital hybridization.",
        "interaction_type": "matching-grid",
        "grid_columns": 2,
        "match_items": [
            {"smiles": "CC#C", "correctAnswer": "sp"},
            {"smiles": "CC=C", "correctAnswer": "sp2"},
            {"smiles": "CCC", "correctAnswer": "sp3"},
            {"smiles": "C#CC#C", "correctAnswer": "sp"}
        ],
        "match_options": ["sp", "sp2", "sp3", "sp3d"],
        "options": [
            {"option_id": "A", "text": "All matched correctly", "is_correct": True},
            {"option_id": "B", "text": "Incorrect hybridization assignments", "is_correct": False}
        ],
        "feedback": {
            "context": "Assigning carbon atom hybridization based on bonds: single bonds are sp3, double bonds are sp2, triple bonds are sp.",
            "process": "Item 1 (propyne triple-bonded carbon) is sp.\nItem 2 (propene double-bonded carbon) is sp2.\nItem 3 (propane single-bonded carbon) is sp3.\nItem 4 (butadiyne carbon) is sp.",
            "result": "Hybridization is assigned based on the steric number of each carbon."
        }
    },
    {
        "question_id": "ch1_q_dynamic_formal_charge",
        "topic": "Lewis Structures & Formal Charges",
        "difficulty_level": "Medium",
        "question_text": "Match each chemical species to its correct central atom formal charge.",
        "interaction_type": "matching-list",
        "match_items": [
            {"smiles": "[NH4+]", "correctAnswer": "+1"},
            {"smiles": "[BH4-]", "correctAnswer": "-1"},
            {"smiles": "C[C+](C)C", "correctAnswer": "+1"},
            {"smiles": "[OH-]", "correctAnswer": "-1"}
        ],
        "match_options": ["+2", "+1", "0", "-1", "-2"],
        "options": [
            {"option_id": "A", "text": "All matched correctly", "is_correct": True},
            {"option_id": "B", "text": "Incorrect formal charges", "is_correct": False}
        ],
        "feedback": {
            "context": "Calculating formal charges: FC = Valence electrons - Lone pair electrons - 0.5 * Bonding electrons.",
            "process": "Ammonium nitrogen: 5 - 0 - 4 = +1.\nBorohydride boron: 3 - 0 - 4 = -1.\nt-Butyl carbocation: 4 - 0 - 3 = +1.\nHydroxide oxygen: 6 - 6 - 1 = -1.",
            "result": "Formal charge tracking is crucial for mechanism study."
        }
    },
    {
        "question_id": "ch1_q_dynamic_functional_groups",
        "topic": "Functional Groups Matching",
        "difficulty_level": "Medium",
        "question_text": "Match each structural SMILES configuration below to its correct functional group category.",
        "interaction_type": "matching-grid",
        "grid_columns": 2,
        "match_items": [
            {"smiles": "CC(=O)C", "correctAnswer": "Ketone"},
            {"smiles": "CCOC(C)=O", "correctAnswer": "Ester"},
            {"smiles": "CC(=O)O", "correctAnswer": "Carboxylic Acid"},
            {"smiles": "CCN", "correctAnswer": "Amine"}
        ],
        "match_options": ["Ketone", "Ester", "Carboxylic Acid", "Amine", "Ether", "Amide"],
        "options": [
            {"option_id": "A", "text": "All matched correctly", "is_correct": True},
            {"option_id": "B", "text": "Incorrect functional groups", "is_correct": False}
        ],
        "feedback": {
            "context": "Identifying functional groups in organic molecules.",
            "process": "propan-2-one is a Ketone. ethyl acetate is an Ester. acetic acid is a Carboxylic Acid. ethylamine is an Amine.",
            "result": "Functional group recognition is key to predicting chemical reactivity."
        }
    },
    {
        "question_id": "ch1_q_dynamic_mo_energy",
        "topic": "Molecular Orbitals & Bonding",
        "difficulty_level": "Hard",
        "question_text": "Consider the molecular orbital (MO) energy diagram for a homonuclear diatomic molecule. Identify the correct energy states for sigma and pi orbitals.",
        "energy_diagram": {
            "points": [
                {"state": "1s", "energy": -200},
                {"state": "sigma_1s", "energy": -300},
                {"state": "sigma_star_1s", "energy": -100},
                {"state": "2s", "energy": -50},
                {"state": "sigma_2s", "energy": -80},
                {"state": "sigma_star_2s", "energy": -20}
            ]
        },
        "options": [
            {"option_id": "A", "text": "Bonding orbitals (sigma) are lower in energy than atomic orbitals, while antibonding (sigma*) are higher.", "is_correct": True},
            {"option_id": "B", "text": "Bonding and antibonding orbitals have equal energy to atomic orbitals.", "is_correct": False},
            {"option_id": "C", "text": "Antibonding orbitals are lower in energy than bonding orbitals.", "is_correct": False},
            {"option_id": "D", "text": "Orbital mixing makes bonding orbitals higher in energy.", "is_correct": False}
        ],
        "feedback": {
            "context": "Analyzing molecular orbital energy levels relative to the starting atomic orbitals.",
            "process": "Bonding MOs result from constructive interference and are lower in energy (more stable). Antibonding MOs result from destructive interference and are higher in energy (less stable).",
            "result": "The energy of sigma_1s is lower than 1s, and sigma_star_1s is higher than 1s."
        }
    }
]

ch2_dynamic = [
    {
        "question_id": "ch2_q_dynamic_pka_acids",
        "topic": "Brønsted-Lowry Acids & Bases",
        "difficulty_level": "Hard",
        "question_text": "Match each acid below to its correct approximate pKa value.",
        "interaction_type": "matching-grid",
        "grid_columns": 2,
        "match_items": [
            {"smiles": "CC(=O)O", "correctAnswer": "4.76"},
            {"smiles": "Oc1ccccc1", "correctAnswer": "10"},
            {"smiles": "CCO", "correctAnswer": "16"},
            {"smiles": "CC(C)=O", "correctAnswer": "20"}
        ],
        "match_options": ["4.76", "10", "16", "20", "25", "-7"],
        "options": [
            {"option_id": "A", "text": "All matched correctly", "is_correct": True},
            {"option_id": "B", "text": "Incorrect pKa values", "is_correct": False}
        ],
        "feedback": {
            "context": "Evaluating acidities: lower pKa indicates a stronger acid.",
            "process": "Acetic acid is carboxylic, pKa = 4.76. Phenol is resonance stabilized, pKa = 10. Ethanol is a regular alcohol, pKa = 16. Acetone is a weak carbon acid, pKa = 20.",
            "result": "Acidity trends depend on conjugate base resonance and electronegativity."
        }
    },
    {
        "question_id": "ch2_q_dynamic_dipole_moments",
        "topic": "Polar Covalent Bonds & Electronegativity",
        "difficulty_level": "Medium",
        "question_text": "Match each compound to its relative dipole moment status.",
        "interaction_type": "matching-list",
        "match_items": [
            {"smiles": "ClCCl", "correctAnswer": "Polar (dipole > 0)"},
            {"smiles": "ClC(Cl)(Cl)Cl", "correctAnswer": "Nonpolar (dipole = 0)"},
            {"smiles": "C", "correctAnswer": "Nonpolar (dipole = 0)"},
            {"smiles": "ClC(Cl)Cl", "correctAnswer": "Polar (dipole > 0)"}
        ],
        "match_options": ["Polar (dipole > 0)", "Nonpolar (dipole = 0)"],
        "options": [
            {"option_id": "A", "text": "All matched correctly", "is_correct": True},
            {"option_id": "B", "text": "Incorrect dipoles", "is_correct": False}
        ],
        "feedback": {
            "context": "Understanding molecular geometry and vector addition of dipole moments.",
            "process": "Dichloromethane (ClCCl) and Chloroform (ClC(Cl)Cl) are asymmetric and polar. Carbon tetrachloride (ClC(Cl)(Cl)Cl) and Methane (C) are highly symmetric, causing bond dipoles to cancel out completely.",
            "result": "Molecular symmetry determines net dipole moment."
        }
    },
    {
        "question_id": "ch2_q_dynamic_acid_base_reaction",
        "topic": "Brønsted-Lowry Acids & Bases",
        "difficulty_level": "Medium",
        "question_text": "Consider the following proton-transfer reaction. Identify the role of reactants A and B.",
        "reaction_scheme": {
            "reactants": ["CC(=O)O", "CCN"],
            "reagents": "proton transfer",
            "conditions": "equilibrium",
            "products": ["CC(=O)[O-]", "CC[NH3+]"]
        },
        "options": [
            {"option_id": "A", "text": "Acetic acid is the acid (proton donor), ethylamine is the base (proton acceptor).", "is_correct": True},
            {"option_id": "B", "text": "Acetic acid is the base, ethylamine is the acid.", "is_correct": False},
            {"option_id": "C", "text": "Both act as acids.", "is_correct": False},
            {"option_id": "D", "text": "Both act as bases.", "is_correct": False}
        ],
        "feedback": {
            "context": "Identifying Brønsted-Lowry acid/base roles in a reaction scheme.",
            "process": "Acetic acid (CC(=O)O) donates a proton to form acetate (CC(=O)[O-]). Ethylamine (CCN) accepts a proton to form ethylammonium (CC[NH3+]).",
            "result": "The acid donates a proton, and the base accepts it."
        }
    }
]

ch3_dynamic = [
    {
        "question_id": "ch3_q_dynamic_conformational_energy",
        "topic": "Alkanes Conformational Analysis",
        "difficulty_level": "Hard",
        "question_text": "Examine the potential energy curve for rotations around the C2-C3 bond of butane. Identify the correct conformational states for the energy levels.",
        "energy_diagram": {
            "points": [
                {"state": "Anti (180°)", "energy": 0},
                {"state": "Eclipsed (120°)", "energy": 14},
                {"state": "Gauche (60°)", "energy": 38},
                {"state": "Fully Eclipsed (0°)", "energy": 190}
            ]
        },
        "options": [
            {"option_id": "A", "text": "Anti conformation has the lowest potential energy (0 kJ/mol), while Fully Eclipsed has the highest energy (19 kJ/mol relative to anti).", "is_correct": True},
            {"option_id": "B", "text": "Gauche conformation has the highest potential energy.", "is_correct": False},
            {"option_id": "C", "text": "Anti and Fully Eclipsed conformations have equal energy.", "is_correct": False},
            {"option_id": "D", "text": "Eclipsed conformations are more stable than Gauche.", "is_correct": False}
        ],
        "feedback": {
            "context": "Analyzing butane conformational energy profiles.",
            "process": "Anti conformation has methyl groups furthest apart (180°), minimizing steric strain (0 kJ/mol). Gauche has methyls at 60° (3.8 kJ/mol). Fully eclipsed has methyls eclipsing each other (19 kJ/mol), maximizing steric and torsional strain.",
            "result": "The order of stability is: Anti > Gauche > Eclipsed > Fully Eclipsed."
        }
    },
    {
        "question_id": "ch3_q_dynamic_alkane_iupac",
        "topic": "Alkane Nomenclature & Structure",
        "difficulty_level": "Medium",
        "question_text": "Match each branched alkane structure to its correct IUPAC name.",
        "interaction_type": "matching-grid",
        "grid_columns": 2,
        "match_items": [
            {"smiles": "CC(C)C", "correctAnswer": "2-Methylpropane"},
            {"smiles": "CC(C)(C)C", "correctAnswer": "2,2-Dimethylpropane"},
            {"smiles": "CCC(C)CC", "correctAnswer": "3-Methylpentane"},
            {"smiles": "CC(C)CC(C)C", "correctAnswer": "2,4-Dimethylpentane"}
        ],
        "match_options": ["2-Methylpropane", "2,2-Dimethylpropane", "3-Methylpentane", "2,4-Dimethylpentane", "2-Methylbutane", "Neopentane"],
        "options": [
            {"option_id": "A", "text": "All matched correctly", "is_correct": True},
            {"option_id": "B", "text": "Incorrect IUPAC names", "is_correct": False}
        ],
        "feedback": {
            "context": "Applying IUPAC rules to name branched alkanes.",
            "process": "Item 1: Isopropane or 2-methylpropane. Item 2: Neopentane or 2,2-dimethylpropane. Item 3: 5-carbon chain with methyl at C3 is 3-methylpentane. Item 4: 5-carbon chain with methyls at C2 and C4 is 2,4-dimethylpentane.",
            "result": "IUPAC rules ensure unique, unambiguous names for chemical structures."
        }
    },
    {
        "question_id": "ch3_q_dynamic_ring_strain",
        "topic": "Cycloalkanes Conformational Analysis",
        "difficulty_level": "Hard",
        "question_text": "Match each cycloalkane to its relative ring strain level (total ring strain in kJ/mol).",
        "interaction_type": "matching-list",
        "match_items": [
            {"smiles": "C1CC1", "correctAnswer": "High strain (115 kJ/mol)"},
            {"smiles": "C1CCC1", "correctAnswer": "Medium-High strain (110 kJ/mol)"},
            {"smiles": "C1CCCC1", "correctAnswer": "Low-Medium strain (26 kJ/mol)"},
            {"smiles": "C1CCCCC1", "correctAnswer": "Zero strain (0 kJ/mol)"}
        ],
        "match_options": ["High strain (115 kJ/mol)", "Medium-High strain (110 kJ/mol)", "Low-Medium strain (26 kJ/mol)", "Zero strain (0 kJ/mol)"],
        "options": [
            {"option_id": "A", "text": "All matched correctly", "is_correct": True},
            {"option_id": "B", "text": "Incorrect strain levels", "is_correct": False}
        ],
        "feedback": {
            "context": "Assessing ring strain in cycloalkanes based on angle strain and torsional strain.",
            "process": "Cyclopropanes have severe angle strain (60° vs 109.5°). Cyclobutane is slightly less strained (88°). Cyclopentane adopts a puckered envelope shape to relieve strain (26 kJ/mol). Cyclohexane adopts the chair conformation, which has zero angle and torsional strain.",
            "result": "Chair cyclohexane is completely strain-free."
        }
    }
]

def append_questions_to_file(ch_num, dynamic_questions):
    filename = f"chapter{ch_num}.js"
    filepath = os.path.join(questions_dir, filename)
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Find the array block in the JS file: e.g. const CHAPTER_X_QUESTIONS = [ ... ];
    # We will use regex to find CHAPTER_X_QUESTIONS = [ ... ]
    var_name = f"CHAPTER_{ch_num}_QUESTIONS"
    match = re.search(rf"const\s+{var_name}\s*=\s*\[([\s\S]*?)\]\s*;?\s*$", content)
    if not match:
        print(f"Could not find array definition in {filename}")
        return

    existing_array_str = match.group(1).strip()
    
    # We will parse the array manually as a JSON-like array or append directly if it's JSON formatted
    # Let's decode existing questions
    try:
        # Evaluate or parse the existing questions. Since it's a JS array, we can wrap it as JSON or parse it.
        # Let's parse it safely by adding brackets
        full_json_str = "[" + existing_array_str + "]"
        # Since JavaScript allows trailing commas or single quotes, we might need a lax parser, or eval in python (which is unsafe but okay for our own files)
        # Or we can just use json.loads if it's strictly JSON. If it fails, let's fall back to a simple string insertion before the closing bracket.
        existing_questions = json.loads(full_json_str)
        
        # Merge questions ensuring no duplicates in question_id
        existing_ids = {q["question_id"] for q in existing_questions}
        appended_count = 0
        for q in dynamic_questions:
            if q["question_id"] not in existing_ids:
                existing_questions.append(q)
                appended_count += 1
        
        # Write back the full merged questions
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(f"// McMurry Chapter {ch_num} questions\n")
            f.write(f"const {var_name} = ")
            json.dump(existing_questions, f, indent=2)
            f.write(";\n")
            
        print(f"Appended {appended_count} dynamic questions to {filename} successfully.")
    except Exception as e:
        print(f"Failed to parse and merge JSON for {filename} using native json, falling back to manual string append: {e}")
        # Manual string append fallback: find last ']' before the end of the file and insert the new questions
        # Convert dynamic_questions to formatted string (without outer brackets)
        new_q_strings = []
        for q in dynamic_questions:
            new_q_strings.append(json.dumps(q, indent=2))
        joined_new_qs = ",\n" + ",\n".join(new_q_strings)
        
        # Replace the last ] in the file with joined_new_qs + ]
        pos = content.rfind(']')
        if pos != -1:
            new_content = content[:pos] + joined_new_qs + "\n" + content[pos:]
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Manually appended {len(dynamic_questions)} dynamic questions to {filename} successfully.")
        else:
            print(f"Could not find closing bracket in {filename}")

if __name__ == "__main__":
    append_questions_to_file(1, ch1_dynamic)
    append_questions_to_file(2, ch2_dynamic)
    append_questions_to_file(3, ch3_dynamic)
