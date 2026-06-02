import json

with open('potential_spoilers.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

visual_matches = [q for q in questions if any('visual' in r for r in q['reasons'])]

spoilers = []
non_spoilers = []

for q in visual_matches:
    text = q['text'].lower()
    
    # Check if it's a naming or stereochemical configuration assignment question
    is_naming = any(kw in text for kw in ['iupac name', 'correct name', 'nomenclature', 'name of the', 'name of this', 'name of the following'])
    is_config = any(kw in text for kw in ['configuration', 'stereocenter', 'chiral center', 'stereogenic', 'enantiomer', 'diastereomer', 'relationship between', 'r/s', 'e/z', 'assign r', 'assign s'])
    
    if (is_naming or is_config) and not any(kw in text for kw in ['spectrum', 'spectra', 'nmr', 'ir ', 'ir\n', 'mass spec', 'singlet', 'doublet', 'triplet', 'quartet', 'multiplet']):
        non_spoilers.append(q)
    else:
        spoilers.append(q)

print(f"Visual Matches: {len(visual_matches)}")
print(f"Non-Spoilers (Naming/Config): {len(non_spoilers)}")
print(f"Spoilers (Classification/Clue/Spectroscopy): {len(spoilers)}")

print("\n--- SPOILER SAMPLES ---")
for q in spoilers[:30]:
    print(f"File: {q['file']} | ID: {q['id']}")
    print(f"Text: {q['text']}")
    print(f"Q_Smiles: {q['question_smiles']} | Correct: {q['correct_option_text']}")
    print("-" * 50)
