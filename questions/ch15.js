// OChemStudyBuddy - McMurry Chapter 15
// Author: A. Elangovan, PhD
var CH15_QUESTIONS = [
  {
    "question_id": "ch15_q1_nomenclature_priority",
    "topic": "Naming Aromatic Compounds",
    "difficulty_level": "Easy",
    "question_text": "What is the correct IUPAC name for the disubstituted benzene shown?",
    "question_smiles": "Oc1ccc(C=O)cc1",
    "options": [
      {
        "option_id": "A",
        "text": "4-hydroxybenzaldehyde",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-formylphenol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-hydroxy-4-benzaldehyde",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "benzaldehyde-4-ol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "In substitutive nomenclature one group is the principal characteristic group and takes the suffix; every other group becomes a prefix. When a ring carries an aldehyde and an alcohol, the aldehyde outranks the alcohol, so the compound is a benzaldehyde with a hydroxy prefix, and the aldehyde carbon's ring position is C1 by definition.",
      "approach": "Step 1: List the groups: CHO and OH on a benzene ring, 1,4 to each other.\nStep 2: Rank them. The seniority order runs acids > anhydrides > esters > acid halides > amides > nitriles > aldehydes > ketones > alcohols > amines. Aldehyde beats alcohol.\nStep 3: The parent is benzaldehyde (a retained name), the CHO-bearing carbon is C1, and the OH is cited as a hydroxy prefix.\nStep 4: Number toward the OH: it lands on C4 in either direction. Name: 4-hydroxybenzaldehyde.",
      "note": "Common names survive as parents only when their group is the senior one: phenol is the parent when nothing outranks OH (4-methylphenol), but here the aldehyde wins and phenol cannot be the parent. Retained names such as benzaldehyde assign locant 1 to the carbon bearing the group, so that locant never appears in the name.",
      "options": {
        "A": "Correct. Aldehyde outranks alcohol, so the parent is benzaldehyde, C1 is the ring carbon bearing CHO, and the hydroxyl is a prefix at C4.",
        "B": "4-Formylphenol is the right molecule under the wrong name: it makes the alcohol the parent and demotes the senior aldehyde to a formyl prefix. The seniority order runs the other way.",
        "C": "1-Hydroxy-4-benzaldehyde puts locants on both groups. In a retained parent name the carbon bearing the characteristic group is C1 automatically, so the parent carries no locant and the hydroxyl must take 4, not 1.",
        "D": "Benzaldehyde-4-ol tries to give the molecule two suffixes. Only the single senior group is expressed as a suffix; everything else, including OH, is a prefix."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring with a hydroxyl group on one carbon and an aldehyde group, CHO, on the carbon directly across the ring from it."
  },
  {
    "question_id": "ch15_q2_nomenclature_benzoic_acid",
    "topic": "Naming Aromatic Compounds",
    "difficulty_level": "Easy",
    "question_text": "What is the correct IUPAC name of the compound shown below?",
    "question_smiles": "Cc1ccc(C(=O)O)cc1",
    "options": [
      {
        "option_id": "A",
        "text": "4-methylbenzoic acid",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-carboxytoluene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-carboxy-4-methylbenzene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-methyl-4-benzoic acid",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carboxylic acid is the most senior characteristic group met in this chapter, so it always supplies the suffix and the parent name, and its ring carbon is numbered 1. Alkyl groups can only ever be prefixes. The name therefore has to be built on benzoic acid, with methyl as a prefix and a locant counted from the acid carbon.",
      "approach": "Step 1: Identify the two groups: COOH and CH3 on a benzene ring, para to each other.\nStep 2: COOH outranks everything else present, so the parent is benzoic acid, a retained name in which the acid-bearing carbon is C1.\nStep 3: The methyl is a prefix; counting from C1, the para position is C4.\nStep 4: Assemble: 4-methylbenzoic acid. The common name p-toluic acid describes the same compound but is not the systematic one.",
      "note": "Toluene, like phenol and aniline, is a retained parent name, but it can serve as the parent only when the methyl group is the most important feature present. Add a carboxylic acid and the parent switches to benzoic acid, because an acid must be cited as a suffix and a suffix cannot be attached to a toluene parent.",
      "options": {
        "A": "Correct. Benzoic acid is the parent, its acid carbon is C1, and the methyl prefix sits at C4.",
        "B": "4-Carboxytoluene makes toluene the parent and turns the senior acid group into a carboxy prefix. That inverts the seniority order: the acid must be the suffix.",
        "C": "1-Carboxy-4-methylbenzene cites the acid as a prefix on an unsubstituted benzene parent. Carboxy is a legitimate prefix only when some group outranks the acid, and nothing here does.",
        "D": "1-Methyl-4-benzoic acid numbers from the methyl. In a retained parent name the carbon carrying the characteristic group is C1 regardless of the substituent's locant, so the methyl is at 4, and the parent itself never takes a locant."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing a methyl group and a carboxylic acid group on opposite ring carbons."
  },
  {
    "question_id": "ch15_q3_nomenclature_trisubstituted",
    "topic": "Naming Aromatic Compounds",
    "difficulty_level": "Medium",
    "question_text": "What is the correct IUPAC name of the trisubstituted benzene shown?",
    "question_smiles": "Nc1cc(Br)c(O)c(Br)c1",
    "options": [
      {
        "option_id": "A",
        "text": "4-amino-2,6-dibromophenol",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2,6-dibromo-4-hydroxyaniline",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,6-dibromo-4-aminophenol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-hydroxy-3,5-dibromoaniline",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Three decisions stack up here: which group is the parent, which direction to number, and in what order to cite the prefixes. Alcohol outranks amine, so phenol is the parent and its carbon is C1; the two bromines then take the lowest locants available; and the prefixes are cited alphabetically, ignoring the multiplying prefix di.",
      "approach": "Step 1: Groups: OH, NH2 and two Br on a benzene ring.\nStep 2: Seniority: OH beats NH2 (alcohols outrank amines), so the parent is phenol and the OH carbon is C1.\nStep 3: The bromines are on both carbons next to C1, so they are 2 and 6 in either direction; the amino group is para, C4.\nStep 4: Alphabetise the prefixes: amino, then bromo (the 'di' in dibromo does not count). Name: 4-amino-2,6-dibromophenol.",
      "note": "Aniline and phenol are both retained parents, which is why students split on this compound. The tie-break is the seniority order of characteristic groups, not which name is more familiar: an alcohol always outranks an amine. Replace the OH by OCH3 and nothing outranks NH2, so that compound is named as an aniline.",
      "options": {
        "A": "Correct. Phenol is the parent because OH outranks NH2; the bromines take 2 and 6, the amino group 4, and amino is cited before bromo.",
        "B": "2,6-Dibromo-4-hydroxyaniline makes aniline the parent, which the seniority order forbids, and its locants are borrowed from the phenol numbering. Counted from the nitrogen the bromines are at 3 and 5, so this name describes a different isomer.",
        "C": "2,6-Dibromo-4-aminophenol has the right parent and the right locants but cites bromo before amino. Prefixes are listed alphabetically, and 'di' is ignored when alphabetising, so amino must come first.",
        "D": "4-Hydroxy-3,5-dibromoaniline numbers correctly from the nitrogen but uses the wrong parent, and it also lists hydroxy before bromo. Alcohol outranks amine, so phenol, not aniline, carries the suffix."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring with a hydroxyl group flanked by a bromine atom on each neighbouring carbon, and an amino group on the carbon opposite the hydroxyl."
  },
  {
    "question_id": "ch15_q4_nomenclature_ester",
    "topic": "Naming Aromatic Compounds",
    "difficulty_level": "Medium",
    "question_text": "What is the correct IUPAC name of the following ester derivative of a benzoic acid?",
    "question_smiles": "COC(=O)c1cccc([N+](=O)[O-])c1",
    "options": [
      {
        "option_id": "A",
        "text": "methyl 3-nitrobenzoate",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-(methoxycarbonyl)-3-nitrobenzene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-nitrophenyl acetate",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-nitrobenzoic acid methyl ester",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An ester is named in two words: the alkyl group on oxygen first, then the acid part with -ic acid replaced by -ate. The ester outranks the nitro group, which is only ever a prefix, so the acid part is a benzoate with nitro cited by locant. Reading the ester in the right direction matters as much as the words: the ring is on the carbonyl carbon here, not on the oxygen.",
      "approach": "Step 1: Find the ester: a C(=O)O unit with the ring attached to the carbonyl carbon and CH3 on the oxygen. The acid it derives from is benzoic acid; the alcohol is methanol.\nStep 2: Write the alkyl part first: methyl.\nStep 3: Convert the acid name: benzoic acid becomes benzoate, with the carbonyl-bearing ring carbon as C1.\nStep 4: Locate the nitro group: meta to C1 is C3. Name: methyl 3-nitrobenzoate.",
      "note": "An ester with the aryl group on the oxygen instead of the carbonyl is the reverse compound: CH3C(=O)O-Ar is an aryl acetate. Both compounds have the formula C8H7NO4, so the formula cannot tell them apart; only reading which side of the C(=O)O the ring sits on does. Nitro has no suffix form at all, so it is a prefix whatever else is present.",
      "options": {
        "A": "Correct. The ring sits on the carbonyl carbon, so the acid is benzoic; the methyl is on oxygen; nitro is a prefix at the meta position, C3.",
        "B": "1-(Methoxycarbonyl)-3-nitrobenzene cites the ester as a prefix on a benzene parent. Methoxycarbonyl is a real prefix, but only when a more senior group forces the ester down; nitro cannot, so the ester must be named as the suffix.",
        "C": "3-Nitrophenyl acetate is the ester read backwards: it puts the aromatic ring on the oxygen and a methyl on the carbonyl carbon. That is a different compound, an aryl ester of acetic acid, with the same formula.",
        "D": "3-Nitrobenzoic acid methyl ester is an index-style inversion, not a systematic name. The ester is named as an alkyl benzoate, and the word acid does not appear in an ester's name."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing a nitro group and, on a carbon meta to it, a carbonyl group whose second oxygen carries a methyl group."
  },
  {
    "question_id": "ch15_q5_nomenclature_acetophenone",
    "topic": "Naming Aromatic Compounds",
    "difficulty_level": "Medium",
    "question_text": "What is the correct name of the compound shown?",
    "question_smiles": "CC(=O)c1ccc(C)c(Br)c1",
    "options": [
      {
        "option_id": "A",
        "text": "3-bromo-4-methylacetophenone",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "5-bromo-4-methylacetophenone",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-acetyl-2-bromo-1-methylbenzene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-bromo-3-methylacetophenone",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Acetophenone is a retained parent name for phenyl methyl ketone, and McMurry names its derivatives as substituted acetophenones with the ring carbon bearing the acetyl group as C1. With two further substituents the remaining decisions are the direction of numbering (lowest locants at the first point of difference) and the citation order (alphabetical).",
      "approach": "Step 1: The ketone outranks bromo and methyl, so the parent is acetophenone and the acetyl-bearing carbon is C1.\nStep 2: Number in the direction that reaches a substituent first. One way gives bromo 3 and methyl 4; the other gives methyl 4 and bromo 5. The set {3,4} beats {4,5}.\nStep 3: Cite alphabetically: bromo before methyl. Name: 3-bromo-4-methylacetophenone.",
      "note": "The fully systematic IUPAC name expresses the ketone as a suffix on the two-carbon chain, 1-(3-bromo-4-methylphenyl)ethan-1-one; acetophenone is a retained name accepted in general nomenclature and is the form McMurry uses. Either is correct, and the locant set is the same in both because the ring is numbered from the carbon carrying the acyl group.",
      "options": {
        "A": "Correct. Acetophenone is the parent, numbering toward the nearer substituent puts bromine at 3 and methyl at 4, and bromo precedes methyl alphabetically.",
        "B": "5-Bromo-4-methylacetophenone numbers the ring in the wrong direction. The lowest-locant rule compares {3,4} with {4,5} at the first point of difference and 3 wins, so this is the right molecule under the wrong name.",
        "C": "4-Acetyl-2-bromo-1-methylbenzene has correct alphabetical order and lowest locants for a benzene parent, but a ketone is the senior group and cannot be demoted to a prefix while the parent stays benzene. Right molecule, cited the wrong way.",
        "D": "4-Bromo-3-methylacetophenone swaps the two substituents: it places bromine para to the acetyl and methyl meta. In the drawn compound the bromine is the one closer to the acetyl group, so this name belongs to a different isomer."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing an acetyl group, a carbonyl carrying a methyl. On one side of the ring, the two adjacent carbons next-but-one and next-but-two from the acetyl carbon carry a bromine (nearer the acetyl) and a methyl group (farther from it)."
  },
  {
    "question_id": "ch15_q6_nomenclature_styrene",
    "topic": "Naming Aromatic Compounds",
    "difficulty_level": "Hard",
    "question_text": "What is the IUPAC name for the following molecule?",
    "question_smiles": "N#Cc1ccc(C=C)cc1",
    "options": [
      {
        "option_id": "A",
        "text": "4-ethenylbenzonitrile",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-cyanostyrene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-cyano-4-vinylbenzene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-(4-cyanophenyl)ethene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A nitrile is a characteristic group that ranks above alcohols and amines and above any hydrocarbon fragment; an alkene is not a characteristic group at all and is expressed only as a prefix, ethenyl, when it hangs off a ring. So the parent is benzonitrile and the vinyl group is a substituent, whatever the familiar name styrene might suggest.",
      "approach": "Step 1: Groups: a C≡N and a CH=CH2 on a benzene ring, para to each other.\nStep 2: Seniority: the nitrile is a suffix-level group; the vinyl group is only ever a prefix. The parent is benzonitrile, a retained name, and the carbon bearing CN is C1.\nStep 3: The vinyl group is cited as ethenyl at C4. Name: 4-ethenylbenzonitrile.",
      "note": "Styrene is a retained name that IUPAC no longer allows to be substituted in preferred names, and even in general nomenclature it cannot be the parent when a characteristic group such as CN is present. Vinyl remains an acceptable prefix in general nomenclature, so 4-vinylbenzonitrile is an accepted variant; what decides correctness is which group is the parent, not the vinyl versus ethenyl spelling.",
      "options": {
        "A": "Correct. The nitrile supplies the suffix and the parent, benzonitrile with C1 at the CN carbon; the alkene is an ethenyl prefix at C4.",
        "B": "4-Cyanostyrene makes the hydrocarbon styrene the parent and reduces the senior nitrile to a cyano prefix. Cyano is used as a prefix only when something outranks the nitrile, and nothing here does.",
        "C": "1-Cyano-4-vinylbenzene cites both groups as prefixes on a bare benzene parent. A nitrile attached directly to the ring is expressed as the suffix, benzonitrile, so this is the right molecule under the wrong name.",
        "D": "1-(4-Cyanophenyl)ethene takes the two-carbon alkene as the parent chain and hangs the whole ring on it. The parent must be the part that carries the senior group, and the nitrile is on the ring."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring with a nitrile group, a carbon triple-bonded to nitrogen, on one carbon and a vinyl group, CH=CH2, on the carbon opposite."
  },
  {
    "question_id": "ch15_q7_heats_of_hydrogenation",
    "topic": "Structure and Stability of Benzene",
    "difficulty_level": "Easy",
    "question_text": "Hydrogenation of cyclohexene to cyclohexane releases 118 kJ/mol, and hydrogenation of benzene to cyclohexane releases 206 kJ/mol. What do these values say about benzene?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Benzene is about 150 kJ/mol more stable than a hypothetical cyclohexatriene with three isolated double bonds, which would release about 354 kJ/mol.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzene is less stable than cyclohexene, because it releases more heat on hydrogenation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzene is about 88 kJ/mol more stable than cyclohexene ($206 - 118$), and that difference is its resonance energy.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzene's ring is strained; the extra 88 kJ/mol it releases relative to cyclohexene is the strain energy set free on hydrogenation.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Heats of hydrogenation measure the energy stored in double bonds: every C=C converted to C-C releases roughly the same amount, so a molecule that releases less than the sum for its double bonds is more stable than that sum predicts. The comparison must be made per double bond against a reference built from the same ring, and cyclohexene supplies that reference for benzene.",
      "approach": "Step 1: Cyclohexene has one C=C and releases 118 kJ/mol.\nStep 2: A cyclohexatriene with three isolated, independent C=C bonds would release three times that: 354 kJ/mol.\nStep 3: Benzene, which does have three C=C bonds on paper, releases only 206 kJ/mol.\nStep 4: The shortfall, 354 - 206 = 148, about 150 kJ/mol, is energy benzene never had to give up because it was that much more stable than the hypothetical triene to begin with. That is the resonance (aromatic stabilisation) energy.",
      "note": "The same comparison for 1,3-cyclohexadiene (230 kJ/mol against 2 x 118 = 236) gives only about 6 kJ/mol, so conjugation between two double bonds is worth a few kJ/mol and the cyclic six-electron system is worth 150. That gap is why aromaticity is treated as something more than extended conjugation; McMurry quotes the value as 150 kJ/mol (36 kcal/mol).",
      "options": {
        "A": "Correct. Three isolated double bonds would release 354 kJ/mol; benzene releases 206, so it sits about 150 kJ/mol below the hypothetical triene.",
        "B": "Releasing less heat means the starting material was lower in energy, not higher. Benzene releases 206 kJ/mol for three double bonds, far less than the 354 that three cyclohexene-like bonds would give, so it is more stable, not less.",
        "C": "206 - 118 compares molecules with different numbers of double bonds. The reference for benzene is three cyclohexenes, 354 kJ/mol, and the resonance energy is the 148 kJ/mol by which benzene falls short of that.",
        "D": "Benzene is planar with 120 degree angles and has no angle strain to relieve. Strain would make hydrogenation more exothermic, and benzene's behaviour is the opposite: it releases far less heat than its three double bonds predict."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring drawn as a hexagon with three alternating double bonds."
  },
  {
    "question_id": "ch15_q8_conjugation_vs_aromaticity",
    "topic": "Structure and Stability of Benzene",
    "difficulty_level": "Medium",
    "question_text": "Hydrogenation to cyclohexane releases 118 kJ/mol from cyclohexene, 230 kJ/mol from 1,3-cyclohexadiene (shown) and 206 kJ/mol from benzene. Which statement correctly compares the stabilisation of the conjugated diene with that of benzene?",
    "question_smiles": "C1=CC=CCC1",
    "options": [
      {
        "option_id": "A",
        "text": "1,3-Cyclohexadiene is only about 6 kJ/mol more stable than two isolated cyclohexene double bonds, whereas benzene is about 150 kJ/mol more stable than three: conjugation accounts for a few kJ/mol and aromaticity for the rest.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,3-Cyclohexadiene is about 6 kJ/mol less stable than two isolated double bonds because the conjugated diene is strained; benzene's 150 kJ/mol stabilisation is what a strain-free ring gains.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzene is only 24 kJ/mol more stable than 1,3-cyclohexadiene ($230 - 206$), so aromatic stabilisation is a small effect of the same size as conjugation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Each double bond in either compound is stabilised by about the same amount, so benzene's extra stability is simply conjugation extended over three double bonds instead of two.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two effects that are easy to conflate are separated by these three numbers. Conjugation, the overlap of two adjacent double bonds, is measurable but small; the closed six-electron loop of benzene is worth about twenty-five times as much. The test is always the same: compare the measured heat with the sum for isolated double bonds in the same ring.",
      "approach": "Step 1: Reference for the diene: two cyclohexene double bonds, 2 x 118 = 236 kJ/mol. Measured: 230. The diene is 6 kJ/mol more stable than two isolated double bonds; that is the conjugation energy.\nStep 2: Reference for benzene: 3 x 118 = 354 kJ/mol. Measured: 206. Benzene is 148 kJ/mol more stable than three isolated double bonds.\nStep 3: Compare 6 with 148. If aromaticity were just conjugation, benzene should be about 12 kJ/mol more stable than expected (two overlaps), not 150. The extra 140 or so is what cyclic delocalisation of six electrons adds.",
      "note": "The direction of the comparison is worth fixing in memory: less heat released means lower initial energy. A student who subtracts the wrong pair of numbers, or compares molecules with different numbers of double bonds, gets an answer that looks plausible and means nothing. Butadiene's conjugation energy, measured the same way against two 1-butene equivalents, is a similar 16 kJ/mol.",
      "options": {
        "A": "Correct. 236 - 230 = 6 kJ/mol of conjugation energy for the diene; 354 - 206 = 148 kJ/mol of resonance energy for benzene. The two are different in kind, not just in degree.",
        "B": "The sign is reversed. The diene releases less heat (230) than two isolated double bonds would (236), so it is more stable, not less, and there is no strain argument to make: the ring is the same six-membered ring in all three compounds.",
        "C": "230 - 206 subtracts the heats of two different molecules with different numbers of double bonds. Each compound must be measured against its own isolated-double-bond reference; done that way the diene gains 6 and benzene gains 148.",
        "D": "The per-double-bond stabilisation is 3 kJ/mol in the diene and about 50 kJ/mol in benzene, so the effects are not comparable. Conjugation over three double bonds would predict a few kJ/mol; the observed 150 is the signature of aromaticity."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered ring with two conjugated double bonds and two saturated CH2 carbons."
  },
  {
    "question_id": "ch15_q9_bond_lengths",
    "topic": "Structure and Stability of Benzene",
    "difficulty_level": "Easy",
    "question_text": "X-ray crystallography of benzene shows which of the following about its carbon-carbon bonds?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "All six C-C bonds are identical in length (139 pm), intermediate between a typical C-C single bond (154 pm) and a C=C double bond (134 pm).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The bonds alternate between three short C=C double bonds (134 pm) and three long C-C single bonds (154 pm).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The bond lengths oscillate dynamically between 134 pm and 154 pm at a rate faster than can be resolved by X-ray diffraction.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "All six bonds are identical in length to a typical C=C double bond (134 pm).",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Kekulé structure predicts three short double bonds and three long single bonds alternating around the ring; a resonance hybrid predicts six identical bonds of intermediate length. Bond lengths are directly measurable, so this is one of the few places where the two descriptions make different, testable predictions, and the measurement settles it.",
      "approach": "Step 1: Reference values: a C-C single bond is about 154 pm, a C=C double bond about 134 pm.\nStep 2: A localised cyclohexatriene would alternate 134 and 154 pm around the ring.\nStep 3: X-ray diffraction of benzene gives six equal C-C bonds of 139 pm, between the two references and nearer the double-bond end.\nStep 4: Equal bonds mean the pi electrons are shared over all six bonds, each with an order of about 1.5: the hybrid, not either Kekulé form.",
      "note": "Resonance forms are not isomers in equilibrium; benzene does not flip between two cyclohexatrienes. The 139 pm bonds are a fixed property of one structure, which is why the ring is often drawn as a hexagon with an inscribed circle. Bond alternation does appear in the larger annulenes and in the central ring of anthracene, one reason those systems are less aromatic than benzene.",
      "options": {
        "A": "Correct. Six equal bonds of 139 pm, intermediate between 134 and 154, are exactly what a hybrid of the two Kekulé structures predicts.",
        "B": "Alternating 134 and 154 pm bonds is the Kekulé cyclohexatriene picture, which is what the measurement rules out. Benzene has no long and short bonds.",
        "C": "No oscillation is involved. Resonance structures describe one molecule with one set of bond lengths; there is no interconversion for X-ray diffraction to be too slow to catch.",
        "D": "134 pm would make every bond a full double bond, requiring twelve pi electrons for six carbons. Six pi electrons spread over six bonds give an order of 1.5 and a length between single and double."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A hexagonal ring of six carbons drawn with alternating single and double bonds."
  },
  {
    "question_id": "ch15_q10_carbon_hybridization",
    "topic": "Structure and Stability of Benzene",
    "difficulty_level": "Easy",
    "question_text": "Which set of hybridization, molecular geometry, and bond angles correctly describes the carbons in a benzene ring?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^2$, trigonal planar, $120^\\circ$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$sp^3$, tetrahedral (distorted), $109.5^\\circ$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$sp$, linear (distorted), $180^\\circ$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Alternating $sp^2$ and $sp^3$, $120^\\circ$ and $109.5^\\circ$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hybridisation follows from what each atom is bonded to. A benzene carbon makes three sigma bonds, two to ring carbons and one to hydrogen, and contributes one p orbital to the pi system; three sigma bonds in one plane is the sp2 pattern, and the p orbitals are what make the delocalised ring possible.",
      "approach": "Step 1: Count sigma bonds at any ring carbon: C-C, C-C, C-H, three in all, with no lone pairs.\nStep 2: Three regions of electron density call for three hybrid orbitals: sp2, leaving one unhybridised p orbital.\nStep 3: sp2 orbitals lie in a plane at 120 degrees, which is exactly the internal angle of a regular hexagon, so the ring is planar with no angle strain.\nStep 4: The six p orbitals stand perpendicular to that plane and overlap sideways all the way round.",
      "note": "The 120 degree angle is why a six-membered ring is the natural home for aromaticity: the sp2 angle and the hexagon angle coincide. In cyclobutadiene the sp2 carbons are forced to 90 degrees and in a planar cyclooctatetraene to 135, and both molecules pay for the mismatch.",
      "options": {
        "A": "Correct. Three sigma bonds and one p orbital per carbon is sp2; the planar trigonal arrangement gives 120 degree angles that fit a regular hexagon exactly.",
        "B": "sp3 carbons have four sigma bonds and no p orbital left over. A ring of sp3 carbons is cyclohexane, puckered and without any pi system.",
        "C": "sp hybridisation needs a linear carbon with two attachments, as in an alkyne. A ring carbon with three neighbours cannot be linear.",
        "D": "All six carbons are identical, which the equal bond lengths confirm. Any sp3 carbon in the ring would break the p-orbital loop, as it does in 1,3-cyclohexadiene."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A hexagon of six carbon atoms drawn with three double bonds; each ring carbon carries one hydrogen."
  },
  {
    "question_id": "ch15_q11_hydrogenation_chemoselectivity",
    "topic": "Structure and Stability of Benzene",
    "difficulty_level": "Medium",
    "question_text": "4-Phenylbut-1-ene is stirred with hydrogen at 1 atm over Pd/C at $25\\ ^\\circ\\text{C}$ until gas uptake stops. What is the major product?",
    "question_smiles": "C=CCCc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Butylbenzene",
        "smiles": "CCCCc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Butylcyclohexane",
        "smiles": "CCCCC1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-Cyclohexylbut-1-ene",
        "smiles": "C=CCCC1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(E)-1-Phenylbut-1-ene",
        "smiles": "CC/C=C/c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Catalytic hydrogenation over palladium at room temperature and one atmosphere reduces ordinary alkenes quickly but leaves a benzene ring untouched, because the ring's aromatic stabilisation, about 150 kJ/mol, makes the first addition of hydrogen to it uphill under those conditions. A molecule carrying both an alkene and an arene is therefore reduced only at the alkene, and the arene survives.",
      "approach": "Step 1: Identify the two unsaturated units: a terminal C=C and a phenyl ring.\nStep 2: Ask what Pd/C at 1 atm can reduce. An isolated alkene: yes, within minutes. A benzene ring: no; that takes platinum or rhodium at high pressure, or heat, because the ring's first C=C is not a real double bond and adding H2 to it costs the resonance energy.\nStep 3: Add H2 across the C=C only: CH2=CH-CH2CH2-Ph becomes CH3CH2CH2CH2-Ph.\nStep 4: Product: butylbenzene, and the reaction stops there because nothing else takes up hydrogen.",
      "note": "This selectivity is used constantly in synthesis: a phenyl group rides through a hydrogenation as a spectator. Forcing conditions do reduce the ring, and once the first H2 adds, the resulting cyclohexadiene is reduced faster than benzene itself, so ring hydrogenation cannot be stopped at a diene. Palladium can also walk a double bond along a chain, but under H2 any isomerised alkene is reduced as well.",
      "options": {
        "A": "Correct. Only the isolated alkene is reduced under mild Pd/C conditions; the aromatic ring keeps its six pi electrons and the product is butylbenzene.",
        "B": "Butylcyclohexane needs both the alkene and the ring reduced. The ring survives Pd/C at 1 atm; reducing it needs high pressure or a rhodium or platinum catalyst, and it is the last thing to go, not something that happens alongside a simple alkene.",
        "C": "4-Cyclohexylbut-1-ene has the ring reduced and the alkene untouched, the reverse of the real reactivity order. The alkene is by far the easier of the two to hydrogenate.",
        "D": "(E)-1-Phenylbut-1-ene is the alkene migrated into conjugation with the ring. Palladium can catalyse that isomerisation, but with hydrogen present the conjugated alkene is hydrogenated too, so it is at most a transient intermediate, never the product."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring attached to a four-carbon chain that ends in a terminal double bond."
  },
  {
    "question_id": "ch15_q12_thermodynamic_vs_kinetic",
    "topic": "Structure and Stability of Benzene",
    "difficulty_level": "Medium",
    "question_text": "Why does benzene undergo electrophilic substitution rather than electrophilic addition when it reacts with electrophiles, whereas alkenes add?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Substitution preserves the aromatic sextet, whereas addition would convert the ring into a non-aromatic cyclohexadiene and forfeit about 150 kJ/mol of stabilisation.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Substitution is faster because it avoids a carbocation intermediate, while addition would have to form one.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Addition to benzene is thermodynamically impossible; its free-energy change is always positive.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The planar ring blocks approach of the electrophile to the C=C bonds, so addition is sterically impossible.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Both addition and substitution begin the same way: the electrophile bonds to a ring carbon and gives a cyclohexadienyl cation. What happens next decides the outcome. Capturing the cation with a nucleophile gives an addition product that has lost its aromaticity; losing a proton instead regenerates the six-electron ring. The second path is downhill by the resonance energy and wins.",
      "approach": "Step 1: Write the intermediate: E+ bonds to one carbon, leaving a cation delocalised over three ring positions and a ring that is no longer aromatic.\nStep 2: Path A, addition: a nucleophile bonds to the cation, giving a 5,6-disubstituted cyclohexa-1,3-diene. The product keeps two conjugated double bonds, worth a few kJ/mol, but has given up about 150 kJ/mol of aromatic stabilisation.\nStep 3: Path B, substitution: a base removes the proton from the carbon that carries E, and the ring recovers its six pi electrons.\nStep 4: Path B is far more exothermic and is the one observed, so benzene substitutes.",
      "note": "Alkenes do the opposite because they have nothing to recover: addition to a C=C trades a weak pi bond for two strong sigma bonds and is downhill. Benzene's substitution is also slower than an alkene's addition, since the first step must break into the aromatic system to form the cation; that is why bromination of benzene needs FeBr3 while an alkene decolourises bromine on contact.",
      "options": {
        "A": "Correct. Deprotonating the cationic intermediate restores the aromatic sextet; adding a nucleophile instead would lock in a non-aromatic diene worth 150 kJ/mol less.",
        "B": "Substitution does go through a carbocation, the cyclohexadienyl (arenium) ion, and its first step is slower than an alkene's addition, not faster. The preference is thermodynamic, decided after the cation forms.",
        "C": "Addition to benzene is not impossible; it is simply much less favourable than substitution. Under forcing conditions benzene adds hydrogen, and chlorine adds to it under UV light to give hexachlorocyclohexane.",
        "D": "Nothing about a flat ring blocks an electrophile; electrophiles reach the ring carbons easily enough to form the cation. Sterics play no part in the choice between the two pathways."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A hexagon of carbons with alternating double bonds: the benzene ring."
  },
  {
    "question_id": "ch15_q13_mo_diagram_shape",
    "topic": "Molecular Orbital Description of Benzene",
    "difficulty_level": "Medium",
    "question_text": "According to molecular orbital (MO) theory, how many $\\pi$ molecular orbitals does benzene possess, and what is their relative energy arrangement?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Six $\\pi$ MOs: three bonding ($\\psi_1$ lowest, degenerate $\\psi_2, \\psi_3$) and three antibonding (degenerate $\\psi_4^*, \\psi_5^*$, and $\\psi_6^*$ highest).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Six $\\pi$ MOs: two bonding, two nonbonding, and two antibonding.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Three $\\pi$ MOs: all of which are degenerate bonding orbitals.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Six $\\pi$ MOs: three bonding and three antibonding, all of which are non-degenerate (distinct energy levels).",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Six p orbitals combine to give six pi molecular orbitals, and the ring's symmetry fixes their pattern: one orbital with no vertical node at the bottom, a degenerate pair with one node each, a degenerate pair with two nodes, and a single orbital with three nodes at the top. Energy tracks node count, so the levels run 1, 2, 2, 1 from bottom to top, split evenly about the nonbonding line.",
      "approach": "Step 1: Count p orbitals: six sp2 carbons, one p orbital each, so six pi MOs.\nStep 2: Order by nodes: 0, 1, 1, 2, 2, 3 vertical nodal planes.\nStep 3: Assign energies. The zero-node orbital, psi1, is bonding at every bond and lowest. The one-node pair, psi2 and psi3, is still net bonding; the two-node pair, psi4* and psi5*, is net antibonding; the three-node psi6* is antibonding at every bond and highest.\nStep 4: The six-fold symmetry makes each pair exactly degenerate, giving three bonding and three antibonding orbitals and no nonbonding level.",
      "note": "A quick way to reproduce the pattern is to inscribe a hexagon in a circle with one vertex pointing down: the six vertices sit at the six orbital energies, one at the bottom, two below the centre line, two above it and one at the top. Six electrons fill the three bonding orbitals exactly, which is the orbital picture behind the 4n+2 rule.",
      "options": {
        "A": "Correct. One lowest bonding orbital, a degenerate bonding pair, a degenerate antibonding pair, and one highest antibonding orbital: three bonding, three antibonding.",
        "B": "A nonbonding level appears only in rings whose atom count is divisible by four, such as cyclobutadiene and planar cyclooctatetraene, where a vertex of the inscribed polygon lands on the centre line. The hexagon has no vertex there.",
        "C": "Six atomic orbitals must give six molecular orbitals; the number is conserved. Three orbitals is half the set, and they could not all be bonding in any case.",
        "D": "The one-node and two-node orbitals come in degenerate pairs because the hexagon has a six-fold axis; only psi1 and psi6* stand alone. Six distinct levels is the pattern of open-chain hexatriene, not of the ring."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Benzene: a six-carbon ring drawn with three double bonds, every carbon contributing one p orbital to the pi system."
  },
  {
    "question_id": "ch15_q14_frost_circle_cyclopentadienyl",
    "topic": "Molecular Orbital Description of Benzene",
    "difficulty_level": "Hard",
    "question_text": "A Frost circle for a regular pentagon (one vertex down) places one $\\pi$ MO at the bottom, a degenerate pair just below the centre line and a degenerate pair above it. What does this predict for the cyclopentadienyl cation ($\\text{C}_5\\text{H}_5^+$, shown) and the cyclopentadienyl anion ($\\text{C}_5\\text{H}_5^-$)?",
    "question_smiles": "C1=CC=C[CH+]1",
    "options": [
      {
        "option_id": "A",
        "text": "The anion's six $\\pi$ electrons fill the three bonding MOs completely (closed shell, aromatic); the cation's four leave the degenerate bonding pair half-filled with one electron in each orbital (a diradical, antiaromatic).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Both ions occupy only bonding orbitals, so both are aromatic; the anion is merely more stable because it has two more electrons in bonding MOs.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The cation's four electrons fill the lowest MO and one member of the degenerate pair, a closed shell; the anion must place two electrons in the antibonding pair and is antiaromatic.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The pentagon gives two bonding and three antibonding MOs, so the anion is forced to occupy an antibonding orbital and is the less stable ion.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Frost circle turns the polygon of a ring into its pi energy levels: inscribe the polygon with one vertex down, and each vertex marks an orbital energy, with the horizontal diameter as the nonbonding line. For a pentagon that gives one orbital at the bottom and two degenerate pairs, one just below the centre line and one well above it: three bonding orbitals and two antibonding ones. Whether an ion is aromatic is then a question of how its electrons fill those levels.",
      "approach": "Step 1: Draw the pentagon vertex-down. Vertices at the bottom, at 72 degrees either side and at 144 degrees either side give one bonding orbital, a degenerate bonding pair and a degenerate antibonding pair.\nStep 2: Count electrons. Two double bonds give four pi electrons; the anion adds a lone pair (six), the cation has an empty p orbital (four).\nStep 3: Fill for the anion: two in psi1, four in the degenerate pair. Every bonding orbital is full and nothing is antibonding: closed shell, aromatic.\nStep 4: Fill for the cation: two in psi1, then only two electrons for a pair of degenerate orbitals. Hund's rule puts one in each, unpaired: an open-shell diradical, the destabilisation called antiaromatic.",
      "note": "The same construction handles every ion in this section: a heptagon gives three bonding levels (six electrons, so the cation is aromatic and the anion must put two electrons into an antibonding pair), and a triangle gives one bonding level (two electrons, the cyclopropenyl cation). McMurry presents these levels as an MO diagram; the Frost circle is the standard shortcut in ACS-level courses and is the fastest way to see why 4n+2 works.",
      "options": {
        "A": "Correct. Six electrons fill psi1 and the degenerate bonding pair of the pentagon exactly; four electrons leave that pair half-filled with parallel spins.",
        "B": "The cation's four electrons do sit in bonding orbitals, but two of them are alone in a degenerate pair. An open shell of that kind is the electronic signature of antiaromaticity, not a weaker version of aromatic stability.",
        "C": "Two electrons cannot both go into one member of a degenerate pair while the other stays empty; Hund's rule spreads them out. And the anion's six electrons fit exactly into the three bonding orbitals, so nothing reaches the antibonding pair.",
        "D": "A pentagon inscribed vertex-down has three vertices below the centre line and two above it: three bonding orbitals, two antibonding. Two bonding and three antibonding is what a vertex-up pentagon would give, which is the wrong construction."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-membered ring with two double bonds; the fifth carbon carries a hydrogen and a positive charge."
  },
  {
    "question_id": "ch15_q15_mo_node_count",
    "topic": "Molecular Orbital Description of Benzene",
    "difficulty_level": "Hard",
    "question_text": "In the molecular orbital description of benzene, how many nodal planes perpendicular to the ring plane are present in the lowest energy bonding orbital ($\\psi_1$) and the highest energy antibonding orbital ($\\psi_6^*$), respectively?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "$\\psi_1$ has 0 nodal planes; $\\psi_6^*$ has 3 nodal planes.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$\\psi_1$ has 1 nodal plane; $\\psi_6^*$ has 3 nodal planes.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$\\psi_1$ has 0 nodal planes; $\\psi_6^*$ has 6 nodal planes.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$\\psi_1$ has 2 nodal planes; $\\psi_6^*$ has 4 nodal planes.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Node count is the organising principle of the pi MOs: the lowest orbital has all six p orbitals in phase, and each step up in energy adds one vertical nodal plane until, at the top, every adjacent pair is out of phase. The plane of the ring itself is a node of every pi orbital and is not counted.",
      "approach": "Step 1: psi1: all six lobes in phase above the ring and out of phase below. No vertical nodal plane; bonding across all six C-C bonds.\nStep 2: psi6*: adjacent p orbitals alternate in sign all the way round, so every one of the six bonds is antibonding.\nStep 3: Six sign changes around a ring are produced by three nodal planes, each cutting the ring in two places. So psi6* has three vertical nodes.\nStep 4: The pairs in between have one node (psi2, psi3) and two nodes (psi4*, psi5*), completing the 0, 1, 1, 2, 2, 3 sequence.",
      "note": "Counting six antibonding interactions and answering six nodes is the usual slip: a nodal plane through a ring crosses it twice, so one plane creates two sign changes. The molecular plane is a node as well, but a horizontal one shared by every pi orbital, which is why it is left out of the count.",
      "options": {
        "A": "Correct. psi1 has no vertical node; psi6* has three, one for each pair of opposite bonds, because adjacent p orbitals alternate in phase all the way round.",
        "B": "An orbital with a node cannot be the lowest: the lowest pi orbital is the all-in-phase combination, bonding at every bond, with no vertical node at all.",
        "C": "Six is the number of antibonding interactions in psi6*, not the number of nodal planes. Each plane cuts the ring twice, so three planes produce the six sign changes.",
        "D": "Two nodes for the lowest orbital and four for the highest fit neither end: the lowest pi orbital is nodeless by construction, and in a six-membered ring the sign can change at most six times, which three planes already provide."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "The benzene ring drawn as a hexagon with alternating double bonds."
  },
  {
    "question_id": "ch15_q17_degenerate_orbitals_nodes",
    "topic": "Molecular Orbital Description of Benzene",
    "difficulty_level": "Hard",
    "question_text": "Consider the degenerate bonding molecular orbitals $\\psi_2$ and $\\psi_3$ of benzene. How do they differ in terms of their nodal planes and electron density distributions?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Both have exactly one vertical nodal plane, but these planes are perpendicular to each other; one nodal plane passes through two carbon atoms, while the other passes through two C-C bonds.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$\\psi_2$ has zero vertical nodal planes, while $\\psi_3$ has one vertical nodal plane.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$\\psi_2$ has one vertical nodal plane, while $\\psi_3$ has two vertical nodal planes.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both have two vertical nodal planes, but they are oriented at a $45^\\circ$ angle to each other.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The two one-node orbitals of benzene are degenerate because the hexagon has a six-fold axis, but they are not the same orbital: their nodal planes are perpendicular, one passing through two opposite carbons and the other bisecting two opposite bonds. Their electron densities are distributed differently around the ring, even though together they cover it evenly.",
      "approach": "Step 1: psi2: the nodal plane passes through C1 and C4. Those two carbons carry no density in this orbital; C2 and C3 (in phase with each other) and C5 and C6 carry it.\nStep 2: psi3: the nodal plane is turned by 90 degrees and bisects the C2-C3 and C5-C6 bonds. Now C1 and C4 carry the largest coefficients, and the C2-C3 and C5-C6 bonds are antibonding in this orbital.\nStep 3: Both have exactly one nodal plane, so both have the same energy.\nStep 4: Add the squares of the two: the density is the same at every carbon, restoring the six-fold symmetry of the doubly occupied pair.",
      "note": "The pairing matters when the ring is perturbed. A substituent at C1 lifts the degeneracy because it sits on a node of one partner and on a maximum of the other; that splitting is what the UV spectra of substituted benzenes and the orbital arguments of Chapter 16 rely on. Removing an electron from benzene can come from either partner at the same cost, which is why its radical cation is doubly degenerate too.",
      "options": {
        "A": "Correct. Both have one vertical node; psi2's node passes through two opposite carbons and psi3's through the midpoints of two opposite bonds, at right angles to each other.",
        "B": "An orbital with zero vertical nodes is psi1, the unique lowest orbital. Two orbitals of different node count have different energies and cannot form a degenerate pair.",
        "C": "One node and two nodes would also split the energies: two nodes is the next pair up, psi4* and psi5*. Degeneracy requires equal node counts.",
        "D": "Two nodes each describes the antibonding pair, not the bonding one. And the two members of a degenerate pair in a six-fold ring have nodal planes at 90 degrees, not 45."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A hexagonal benzene ring with three double bonds, its six carbons numbered implicitly around the ring."
  },
  {
    "question_id": "ch15_q18_lumo_benzene",
    "topic": "Molecular Orbital Description of Benzene",
    "difficulty_level": "Medium",
    "question_text": "What is/are the Lowest Unoccupied Molecular Orbital(s) (LUMO) of benzene in its ground state?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "The degenerate pair of antibonding orbitals $\\psi_4^*$ and $\\psi_5^*$.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The single highest energy antibonding orbital $\\psi_6^*$.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The degenerate pair of bonding orbitals $\\psi_2$ and $\\psi_3$.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A nonbonding orbital lying exactly at the zero-energy level.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "With six electrons in six orbitals, the three bonding orbitals are full and the three antibonding ones are empty. The highest occupied level is the degenerate bonding pair, and the lowest unoccupied level is the degenerate antibonding pair directly above the nonbonding line. Both frontier levels are therefore doubly degenerate.",
      "approach": "Step 1: Order the levels: psi1 < psi2 = psi3 < psi4* = psi5* < psi6*.\nStep 2: Fill six electrons: two in psi1, two in psi2, two in psi3.\nStep 3: The HOMO is the psi2/psi3 pair; the LUMO is the next level up, the psi4*/psi5* pair, both empty.\nStep 4: psi6* is unoccupied too but lies higher, so it is not the lowest unoccupied orbital.",
      "note": "The HOMO-LUMO gap set by these two pairs is large, which is why benzene absorbs only in the ultraviolet (a weak band near 255 nm) and is colourless. A substituent that raises the HOMO or lowers the LUMO, such as a conjugating carbonyl or amino group, narrows the gap and moves the absorption to longer wavelength. When an alkali metal transfers an electron to an arene, the radical anion that forms holds that electron in this degenerate pair.",
      "options": {
        "A": "Correct. Six electrons fill psi1, psi2 and psi3; the first empty level is the degenerate antibonding pair psi4* and psi5*.",
        "B": "psi6* is empty but is the highest orbital, not the lowest empty one; two degenerate antibonding orbitals lie between it and the HOMO.",
        "C": "psi2 and psi3 are occupied; they are the HOMO pair. A LUMO is by definition unoccupied.",
        "D": "Benzene's Frost hexagon has no vertex on the centre line, so it has no nonbonding orbital. Nonbonding levels belong to 4n rings such as cyclobutadiene."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Benzene drawn as a regular hexagon with three double bonds."
  },
  {
    "question_id": "ch15_q19_aromaticity_criteria",
    "topic": "Aromaticity Criteria",
    "difficulty_level": "Easy",
    "question_text": "Which of the following describes the complete set of criteria required for a compound to be classified as aromatic?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "The molecule must be cyclic, planar, completely conjugated (every ring atom must possess a p orbital), and contain $(4n+2)$ $\\pi$ electrons (where $n$ is an integer).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The molecule must be cyclic, planar, contain alternating single and double bonds, and contain $4n$ $\\pi$ electrons.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The molecule must be cyclic, contain at least one heteroatom, have $sp^2$ hybridized atoms, and have an odd number of double bonds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The molecule must be a planar, fully conjugated monocyclic or polycyclic system with any number of $\\pi$ electrons.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Aromaticity is a set of four conditions, and a molecule must meet all of them. Three are structural: cyclic, planar, and a p orbital on every ring atom. One is electronic: a count of 4n+2 electrons in the loop. Any one failure removes aromaticity, and the wrong electron count with the structural conditions met is worse than non-aromatic: it is antiaromatic.",
      "approach": "Step 1: Cyclic: the p orbitals must form a closed loop, so an open-chain polyene is out however long it is.\nStep 2: Planar: sideways overlap needs parallel p orbitals; a twisted ring breaks the loop.\nStep 3: Fully conjugated: every ring atom contributes a p orbital, so one sp3 carbon in the ring breaks it.\nStep 4: 4n+2 electrons: 2, 6, 10, 14 or 18 electrons fill the bonding levels of the Frost polygon exactly; 4n electrons leave a degenerate pair half-filled.",
      "note": "The count is of electrons in the cyclic pi system, not of double bonds or of atoms. A lone pair in a p orbital counts (pyrrole), a lone pair in an sp2 orbital does not (pyridine's nitrogen), and an empty p orbital counts as zero (tropylium). Getting the count right is most of the work in this chapter.",
      "options": {
        "A": "Correct. Cyclic, planar, a p orbital on every ring atom, and 4n+2 pi electrons: all four together.",
        "B": "4n electrons is the antiaromatic count, and alternating single and double bonds describe a Kekulé drawing, not a requirement; pyrrole's nitrogen contributes a lone pair, not a double bond, and pyrrole is aromatic.",
        "C": "No heteroatom is needed (benzene has none), and an odd number of double bonds is not the criterion: 4n+2 counts electrons, and lone pairs and empty orbitals change the count without changing the number of double bonds.",
        "D": "Any number of electrons is exactly what the rule excludes: planar conjugated cyclobutadiene has four electrons and is destabilised, not stabilised. The 4n+2 count is the electronic condition."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "The archetype: a six-membered carbon ring drawn with alternating double bonds."
  },
  {
    "question_id": "ch15_q20_annulene_10",
    "topic": "Aromaticity Criteria",
    "difficulty_level": "Medium",
    "question_text": "Why is [10]annulene (cyclodeca-1,3,5,7,9-pentaene) non-aromatic despite having 10 $\\pi$ electrons, which fits Hückel's $(4n+2)$ rule for $n=2$?",
    "question_smiles": "C1=CC=CC=CC=CC=C1",
    "options": [
      {
        "option_id": "A",
        "text": "Steric hindrance between the two internal hydrogens forces the ring to twist out of planarity, preventing effective parallel p-orbital overlap.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It violates Hückel's rule because 10 $\\pi$ electrons is not a Hückel number.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It is antiaromatic because it has a $4n$ number of $\\pi$ electrons.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The ring is too small and suffers from excessive angle strain that prevents conjugation.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Ten pi electrons satisfy 4n+2, so [10]annulene looks aromatic on paper, and its failure is a lesson about the other criteria. A planar decagon needs 144 degree angles, far from the 120 that sp2 carbons want, so the all-cis isomer bends; the isomer that relieves the angle strain by making two double bonds trans puts two hydrogens inside the ring, where they collide. Neither isomer can be flat, and without planarity the p orbitals cannot overlap round the loop.",
      "approach": "Step 1: Count: five double bonds, ten pi electrons, n = 2 in 4n+2. The count passes.\nStep 2: Test planarity for the all-cis isomer: a flat regular decagon has 144 degree internal angles, 24 degrees wider than sp2 carbon prefers, so the ring puckers.\nStep 3: Test the isomer with two trans double bonds: each points one hydrogen into the ring's interior, and the two hydrogens overlap in space. The ring twists to separate them.\nStep 4: A twisted ring has p orbitals that are not parallel; the loop is broken and the molecule behaves as a polyene. Non-aromatic, not antiaromatic, since the destabilisation of a 4n count needs planarity too.",
      "note": "This is the experimental case showing that 4n+2 is necessary but not sufficient. Bridging the two interior positions with a CH2 group (1,6-methano[10]annulene) removes the clash, holds the ring nearly flat, and that compound is aromatic by every test, including a ring current in its NMR spectrum.",
      "options": {
        "A": "Correct. The trans double bonds place two hydrogens inside the ring; they cannot both fit, the ring twists out of plane, and the p orbitals lose their continuous overlap.",
        "B": "Ten is a Hückel number: 4(2)+2 = 10. The electron count is not the problem here, which is exactly why [10]annulene is the instructive case.",
        "C": "Antiaromaticity needs a planar ring with 4n electrons. [10]Annulene has 4n+2 electrons and is not planar, so it is neither antiaromatic nor aromatic: simply non-aromatic.",
        "D": "Angle strain does trouble the all-cis isomer, but because the ring is too large, not too small: a flat decagon needs 144 degree angles. The isomer with two trans double bonds has comfortable angles; its problem is the hydrogens it forces inside."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A ten-membered ring drawn with five alternating double bonds."
  },
  {
    "question_id": "ch15_q21_cot_conformation",
    "topic": "Aromaticity Criteria",
    "difficulty_level": "Medium",
    "question_text": "Cyclooctatetraene (COT) has 8 $\\pi$ electrons. What conformation does it adopt, and how is it classified with respect to aromaticity?",
    "question_smiles": "C1=CC=CC=CC=C1",
    "options": [
      {
        "option_id": "A",
        "text": "It adopts a non-planar 'tub' conformation and is non-aromatic.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It is planar and antiaromatic.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It is planar and aromatic.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It adopts a chair-like conformation and is antiaromatic.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Cyclooctatetraene has eight pi electrons, a 4n count, and a molecule with that count gains nothing from being planar: the flat form would be antiaromatic, with two electrons alone in a degenerate nonbonding pair. So the molecule does the opposite of what benzene does. It folds into a tub in which neighbouring double bonds are twisted out of conjugation, and it behaves as four ordinary alkenes.",
      "approach": "Step 1: Count: four double bonds, eight pi electrons, 4n with n = 2.\nStep 2: Consider the planar octagon: 135 degree angles and, by the Frost circle, one bonding orbital, a degenerate bonding pair, a degenerate nonbonding pair on the centre line, and antibonding orbitals above. Eight electrons put one each into the nonbonding pair: a diradical, antiaromatic.\nStep 3: Escape route: fold the ring into a tub, so that adjacent double bonds are nearly perpendicular and no longer overlap. Now there is no cyclic pi system at all.\nStep 4: Result: a non-planar, non-aromatic polyene with alternating bond lengths of 134 and 147 pm; it adds bromine and is hydrogenated like an alkene.",
      "note": "Whether a 4n ring is antiaromatic or non-aromatic is decided by geometry. Antiaromatic describes what planar cyclooctatetraene would be; the real molecule avoids that fate and is non-aromatic. Adding two electrons with potassium metal changes the count to ten, and the dianion flattens into a regular planar octagon: one of the clearest demonstrations of the 4n+2 rule.",
      "options": {
        "A": "Correct. The tub conformation breaks the cyclic overlap, so cyclooctatetraene is a non-aromatic polyene with localised, alternating double bonds.",
        "B": "Planar and antiaromatic is what an eight-electron ring would be if it were forced flat, and that is exactly what cyclooctatetraene avoids by folding. The real molecule is not planar.",
        "C": "Eight is a 4n number, so planarity would be destabilising, not stabilising; nothing about the molecule is aromatic. Its bonds alternate in length and it reacts like an alkene.",
        "D": "The conformation is a tub (boat-shaped), not a chair, and since it is not planar the molecule is non-aromatic rather than antiaromatic: a ring that has escaped planarity has escaped antiaromaticity too."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An eight-membered ring drawn with four alternating double bonds."
  },
  {
    "question_id": "ch15_q22_aromatic_vs_antiaromatic_vs_non",
    "topic": "Aromaticity Criteria",
    "difficulty_level": "Hard",
    "question_text": "Classify benzene, planar cyclobutadiene and 1,3-cyclohexadiene (all three shown) as aromatic, antiaromatic or non-aromatic.",
    "question_smiles": "c1ccccc1.C1=CC=C1.C1=CC=CCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Benzene is aromatic; cyclobutadiene is antiaromatic; 1,3-cyclohexadiene is non-aromatic.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzene is aromatic; cyclobutadiene is non-aromatic; 1,3-cyclohexadiene is antiaromatic.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzene is aromatic; cyclobutadiene is aromatic; 1,3-cyclohexadiene is non-aromatic.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzene is antiaromatic; cyclobutadiene is aromatic; 1,3-cyclohexadiene is non-aromatic.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Three compounds, three different verdicts, and one procedure decides each: check for a closed loop of p orbitals, then count the electrons in it. Benzene passes both tests. Cyclobutadiene has the loop but the wrong count. 1,3-Cyclohexadiene has two sp3 carbons and no loop at all, so its electron count is irrelevant.",
      "approach": "Step 1: Benzene: six sp2 carbons, planar, six pi electrons, 4n+2 with n = 1. Aromatic.\nStep 2: Cyclobutadiene: four sp2 carbons in a planar ring, four pi electrons, 4n with n = 1. The loop is complete and the count is wrong: antiaromatic.\nStep 3: 1,3-Cyclohexadiene: the two CH2 carbons are sp3 and carry no p orbital, so its four pi electrons sit in an open conjugated diene bent into a ring. No loop, so the count gives no verdict: non-aromatic, an ordinary diene.\nStep 4: Confirm with behaviour: benzene substitutes, cyclobutadiene dimerises the moment it warms above about 35 K, cyclohexadiene adds bromine.",
      "note": "Non-aromatic is the default for any molecule that fails a structural criterion, and it carries no penalty; cyclohexadiene is as stable as its heat of hydrogenation says an ordinary conjugated diene should be. Antiaromatic is reserved for the planar, fully conjugated 4n case, and it is a real destabilisation: cyclobutadiene survives only in an argon matrix near absolute zero.",
      "options": {
        "A": "Correct. Benzene meets all four criteria; planar cyclobutadiene meets the structural ones with a 4n count; cyclohexadiene has sp3 carbons and no cyclic pi system.",
        "B": "Cyclobutadiene and cyclohexadiene are swapped. A ring with sp3 carbons can never be antiaromatic, because antiaromaticity needs the same closed loop of p orbitals that aromaticity does; cyclobutadiene has that loop and four electrons in it.",
        "C": "Four electrons is a 4n count, not 4n+2. Planar cyclobutadiene has the loop that benzene has but the wrong number of electrons in it, which makes it antiaromatic, not aromatic.",
        "D": "Benzene is the defining aromatic compound, with six electrons; cyclobutadiene with four is the defining antiaromatic one. The two verdicts have been exchanged."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Three rings side by side: a six-membered ring with three alternating double bonds, a four-membered ring with two double bonds, and a six-membered ring with two conjugated double bonds and two CH2 groups."
  },
  {
    "question_id": "ch15_q25_annulene_18_nmr",
    "topic": "Aromaticity Criteria",
    "difficulty_level": "Medium",
    "question_text": "The $^1\\text{H}$ NMR spectrum of [18]annulene (shown) has a 12 H signal at 9.3 ppm and a 6 H signal at $-3.0$ ppm. What does this pattern show?",
    "question_smiles": "C1=CC=CC=CC=CC=CC=CC=CC=CC=C1",
    "options": [
      {
        "option_id": "A",
        "text": "The ring sustains a diamagnetic ring current: the twelve outer hydrogens are deshielded like benzene's and the six inner ones, inside the loop, are strongly shielded. [18]Annulene is aromatic (18 $\\pi$ electrons, $n = 4$).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The molecule is antiaromatic: a paramagnetic ring current shields the outer hydrogens and deshields the inner ones.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The ring is non-planar and non-aromatic; the two signals are simply the cis and trans vinyl hydrogens of a polyene.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The $-3.0$ ppm signal is six hydrogens on $sp^3$ carbons that interrupt the conjugation; only the other twelve are on double bonds.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An aromatic ring in a magnetic field carries a circulating current of its pi electrons, and the induced field that current produces reinforces the applied field outside the ring and opposes it inside. Hydrogens on the outside are deshielded, hydrogens over or inside the ring are shielded, and a large annulene, unlike benzene, has hydrogens in both places. Its NMR spectrum is a direct test of aromaticity.",
      "approach": "Step 1: Count electrons: nine double bonds, 18 pi electrons, 4n+2 with n = 4. The count passes.\nStep 2: Geometry: the ring is large enough to be nearly planar, with six hydrogens pointing into the cavity and twelve outward, so planarity passes too.\nStep 3: Predict the NMR of an aromatic ring: outer hydrogens deshielded, at or beyond benzene's 7.3 ppm; inner hydrogens shielded, upfield even of TMS.\nStep 4: Observed: 12 H at 9.3 ppm, 6 H at -3.0 ppm. The two groups sit on opposite sides of the induced field, exactly as a ring current requires. [18]Annulene is aromatic.",
      "note": "The ring-current test is what settles the annulene series experimentally. [16]Annulene, with 4n electrons, shows the reverse at low temperature: inner hydrogens near 10 ppm and outer ones near 5, the signature of a paramagnetic ring current in a planar 4n ring. Benzene's own 7.3 ppm, well downfield of an alkene's 5 to 6, is the same effect seen from the outside only.",
      "options": {
        "A": "Correct. A diamagnetic ring current deshields the twelve outer hydrogens and shields the six inner ones, and only an aromatic, planar, 4n+2 ring produces it.",
        "B": "A paramagnetic ring current is the mark of a planar 4n ring, and it moves the signals the other way: inner hydrogens downfield, outer hydrogens upfield. Eighteen electrons is 4n+2, and the observed direction is the diamagnetic one.",
        "C": "A non-planar polyene would have all its vinyl hydrogens between 5 and 6.5 ppm, with cis and trans differing by tenths of a ppm. A spread of twelve ppm between two sets of hydrogens cannot come from geometry alone.",
        "D": "[18]Annulene has no sp3 carbons; all eighteen ring carbons are sp2. A signal below 0 ppm is not an alkane signal, which would sit near 1 to 2 ppm; it is a hydrogen inside the shielding region of a ring current."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An eighteen-membered ring drawn with nine alternating double bonds."
  },
  {
    "question_id": "ch15_q26_antiaromaticity_criteria",
    "topic": "Aromaticity Criteria",
    "difficulty_level": "Medium",
    "question_text": "Cyclobutadiene (shown) is held planar by its four-membered ring. What does MO theory predict for its electronic configuration and stability?",
    "question_smiles": "C1=CC=C1",
    "options": [
      {
        "option_id": "A",
        "text": "It is antiaromatic and highly unstable: two of its four $\\pi$ electrons occupy a degenerate pair of nonbonding orbitals one each, so it is predicted to be a diradical.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It is non-aromatic, with the same stability as an open-chain 1,3-butadiene.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It is aromatic, because conjugation of the two double bonds around the ring provides stabilisation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It is stable because its four $\\pi$ electrons completely fill its two bonding molecular orbitals.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Planar cyclic conjugated molecules with 4n electrons are not merely denied the stabilisation of aromaticity; they are destabilised, and the orbital diagram shows why. The Frost square of cyclobutadiene has one bonding orbital, a degenerate nonbonding pair on the centre line and one antibonding orbital. Four electrons fill the bonding orbital and then have to share the nonbonding pair, one in each: a diradical configuration.",
      "approach": "Step 1: Inscribe a square vertex-down in a circle: vertices at the bottom, at the two ends of the horizontal diameter, and at the top. Energies: one bonding, two degenerate nonbonding, one antibonding.\nStep 2: Count: two double bonds, four pi electrons.\nStep 3: Fill: two electrons in the bonding orbital, then one in each nonbonding orbital with parallel spins (Hund's rule), none in the antibonding orbital.\nStep 4: Two unpaired electrons in nonbonding orbitals leave the molecule with a single bonding pair and two radical sites: antiaromatic. Cyclobutadiene has been made only in an argon matrix at a few kelvin and dimerises as soon as it is warmed.",
      "note": "Real cyclobutadiene escapes part of the penalty by distorting: it is rectangular, with localised long and short bonds, and is a singlet rather than the triplet the square diagram predicts. The distortion is itself the lesson: a 4n ring gains by breaking its symmetry, whereas a 4n+2 ring gains by keeping it. Cyclooctatetraene makes the same escape in three dimensions by folding.",
      "options": {
        "A": "Correct. Bonding orbital full, nonbonding pair half-filled with one electron each, antibonding empty: an open-shell diradical, the electronic definition of antiaromatic.",
        "B": "Non-aromatic would mean no penalty relative to the open chain. Cyclobutadiene is far less stable than butadiene: cyclic 4n conjugation costs energy rather than leaving it unchanged.",
        "C": "Conjugation in a closed loop stabilises only when the electron count is 4n+2. With four electrons the loop puts two of them into nonbonding orbitals and the molecule is destabilised.",
        "D": "The square has one bonding orbital, not two. Four electrons cannot all be accommodated in bonding levels; two of them are pushed up to the nonbonding pair."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-membered ring drawn as a square with double bonds on two opposite sides."
  },
  {
    "question_id": "ch15_q27_p_orbital_check",
    "topic": "Aromaticity Criteria",
    "difficulty_level": "Easy",
    "question_text": "Why is 1,3,5-cycloheptatriene classified as non-aromatic?",
    "question_smiles": "C1=CC=CC=CC1",
    "options": [
      {
        "option_id": "A",
        "text": "It contains an $sp^3$ hybridized carbon ($CH_2$) in the ring, which lacks a p orbital, breaking the continuous conjugate loop.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It has 6 $\\pi$ electrons, which is a $4n$ number.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The ring is too strained to be planar.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It is antiaromatic because it has 8 $\\pi$ electrons.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A loop of p orbitals has to be unbroken, and a single sp3 carbon in the ring breaks it. Cycloheptatriene has six pi electrons, the right count, spread over six sp2 carbons, but the seventh carbon is a CH2 with four sigma bonds and no p orbital. The three double bonds form an open conjugated triene bent into a ring, not a cyclic pi system.",
      "approach": "Step 1: Check each ring atom for a p orbital. Six carbons are sp2; the CH2 carbon is sp3 and has none.\nStep 2: The loop fails at that carbon, so the 4n+2 count does not apply.\nStep 3: Classify: non-aromatic, a conjugated triene. Its heat of hydrogenation and its addition chemistry are those of a polyene.\nStep 4: Contrast the cation: remove hydride from the CH2 and the empty p orbital completes the loop with six electrons, giving the aromatic tropylium ion.",
      "note": "The sp3 carbon is exactly where the interesting chemistry happens. Losing H- gives the aromatic cation and losing H+ gives an eight-electron anion, so the same CH2 is easy to remove as hydride (7-bromocycloheptatriene ionises spontaneously) and hard to remove as a proton (cycloheptatriene's pKa is about 36). Both facts follow from what the completed loop would contain.",
      "options": {
        "A": "Correct. The CH2 carbon is sp3, has no p orbital, and interrupts the cyclic overlap; the six pi electrons belong to an open triene, not a loop.",
        "B": "Six is a 4n+2 number (n = 1). The count is fine; what is missing is the closed loop of p orbitals that would make the count matter.",
        "C": "A seven-membered ring with one sp3 carbon is nearly planar and not badly strained; the closely related tropylium cation is perfectly flat. Strain is not the reason.",
        "D": "Cycloheptatriene has three double bonds and six pi electrons, not eight. Eight belongs to the cycloheptatrienyl anion, in which the CH2 has become a carbanion carrying a lone pair."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A seven-membered ring with three conjugated double bonds and one CH2 carbon."
  },
  {
    "question_id": "ch15_q28_dewar_benzene",
    "topic": "Aromaticity Criteria",
    "difficulty_level": "Medium",
    "question_text": "What is the aromaticity classification of Dewar benzene (bicyclo[2.2.0]hexa-2,5-diene)?",
    "question_smiles": "C1=CC2C1C=C2",
    "options": [
      {
        "option_id": "A",
        "text": "Non-aromatic; it has two isolated alkene double bonds and lacks a continuous cyclic conjugation of p orbitals.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Aromatic; it is an isomer of benzene with 6 $\\pi$ electrons.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Antiaromatic; it has 4 $\\pi$ electrons in a cyclic system.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Aromatic; it converts to benzene on standing, so the two share the same delocalised $\\pi$ system.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A valence isomer of benzene has the same formula, C6H6, and even the same number of pi electrons, but aromaticity is a property of structure, not of formula. In Dewar benzene the two double bonds sit in separate four-membered rings on either side of a central sp3-sp3 bond, so not every ring atom carries a p orbital and there is no single loop for six electrons to circulate in.",
      "approach": "Step 1: Look at the two bridgehead carbons: each has four sigma bonds (two ring bonds, the central bond and a hydrogen). They are sp3.\nStep 2: Any loop of p orbitals would have to pass through them, and it cannot.\nStep 3: The two double bonds are on opposite sides of the molecule and not conjugated with each other: two isolated alkenes in rings with 90 degree angles.\nStep 4: Non-aromatic, and badly strained; it lies well over 200 kJ/mol above benzene in energy.",
      "note": "Dewar benzene nevertheless survives at room temperature for days (its half-life is about two days), because rearranging to benzene by a concerted electrocyclic path is symmetry-forbidden, as Chapter 30 explains. Being an isomer of benzene, or even converting to it, says nothing about its own aromaticity; the test is always the loop of p orbitals in the molecule as drawn.",
      "options": {
        "A": "Correct. The sp3 bridgehead carbons break any cyclic overlap, so the two double bonds are isolated and the molecule is a strained, non-aromatic diene.",
        "B": "Six pi electrons in the formula is not enough; they must occupy a continuous cyclic array of p orbitals. Dewar benzene's are split between two rings that share an sp3-sp3 bond.",
        "C": "Antiaromaticity also requires a planar closed loop of p orbitals, this time with 4n electrons. Dewar benzene has neither a loop nor a 4n count; each four-membered ring holds a single isolated double bond.",
        "D": "Dewar benzene does revert to benzene, slowly, but the product's aromaticity belongs to the product. The starting material has two isolated alkenes and none of benzene's delocalisation."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two fused four-membered rings sharing one bond, each ring carrying a double bond on the side opposite the shared bond."
  },
  {
    "question_id": "ch15_q29_cyclopropenyl_cation",
    "topic": "Aromatic Ions",
    "difficulty_level": "Medium",
    "question_text": "The cyclopropenyl cation (shown) is the smallest aromatic system and can be isolated as crystalline salts. Why is it stable?",
    "question_smiles": "C1=C[CH+]1",
    "options": [
      {
        "option_id": "A",
        "text": "It is cyclic, planar, fully conjugated, and has 2 $\\pi$ electrons ($4n+2$ where $n=0$).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It is stabilised by the positive charge being localised on a single carbon atom.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It has 4 $\\pi$ electrons, satisfying Hückel's rule.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The ring strain is relieved by the planar structure.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Aromaticity does not require six electrons; it requires 4n+2, and n = 0 gives two. A three-membered ring in which every carbon is sp2 has three p orbitals, and if only two electrons occupy them they fill the single bonding orbital of the Frost triangle. The cyclopropenyl cation is that case: a two-electron aromatic ring, stable enough despite its 60 degree angles to be isolated as crystalline salts.",
      "approach": "Step 1: Hybridisation: two carbons share a double bond, the third is a carbocation; all three are sp2 and each has a p orbital. Cyclic, planar (three points define a plane), fully conjugated.\nStep 2: Count: the double bond supplies two electrons; the cationic carbon's p orbital is empty and supplies none. Two electrons.\nStep 3: 4n+2 = 2 for n = 0. The count is aromatic.\nStep 4: Frost triangle vertex-down: one bonding orbital, a degenerate antibonding pair. Two electrons fill the bonding orbital exactly and the positive charge is shared equally by the three carbons.",
      "note": "The stability is relative to what the strain would otherwise allow: cyclopropene itself is a highly strained, reactive alkene, yet triphenylcyclopropenyl perchlorate is a stable crystalline solid, and the parent ion was made from 3-chlorocyclopropene with a strong Lewis acid. These salts were the first demonstration that n = 0 in 4n+2 is real and not a formality.",
      "options": {
        "A": "Correct. Three sp2 carbons in a planar ring, two pi electrons from the one double bond, and 4(0)+2 = 2: aromatic, with the single bonding orbital filled.",
        "B": "Localising the positive charge on one carbon is the opposite of what happens; the charge is delocalised equally over all three carbons, and that sharing is the source of the stability. A localised cation in a strained ring would be very unstable.",
        "C": "The cyclopropenyl cation has two pi electrons, not four; the cationic carbon contributes an empty p orbital and no electrons. Four would be the antiaromatic cyclopropenyl anion.",
        "D": "Planarity does not relieve strain; the 60 degree angles are as strained as in any cyclopropane. The ion is stable in spite of its strain, because two electrons fill its only bonding pi orbital."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-membered ring with one double bond; the third carbon carries a positive charge."
  },
  {
    "question_id": "ch15_q30_least_acidic_ch",
    "topic": "Aromatic Ions",
    "difficulty_level": "Hard",
    "question_text": "Which of the following hydrocarbons has the LEAST acidic C-H bond?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclopropene",
        "smiles": "C1=CC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propene",
        "smiles": "C=CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,3,5-Cycloheptatriene",
        "smiles": "C1=CC=CC=CC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,3-Cyclopentadiene",
        "smiles": "C1=CC=CC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Acidity of a C-H bond tracks the stability of the anion left behind, and for these four the deciding factor is what the anion's pi system would contain. Removing a proton from the sp3 carbon turns it into a p-orbital-bearing carbanion that completes a ring of p orbitals in three of the four cases; whether that helps or hurts depends on the electron count. The cyclopropenyl anion would have four electrons in a three-membered loop, an antiaromatic count, so cyclopropene is the least willing of all to give up its proton.",
      "approach": "Step 1: Cyclopentadiene: the anion has 4 + 2 = 6 electrons in a five-membered loop, aromatic. pKa 16, the most acidic hydrocarbon of its size.\nStep 2: Propene: the allyl anion is delocalised over two carbons but is open-chain, neither aromatic nor antiaromatic. pKa about 43.\nStep 3: Cycloheptatriene: the anion would have 6 + 2 = 8 electrons, a 4n count; it avoids antiaromaticity by staying non-planar and is stabilised only as an ordinary conjugated anion. pKa about 36.\nStep 4: Cyclopropene: the anion would have 2 + 2 = 4 electrons in a planar three-membered loop, antiaromatic. The carbanion carbon pyramidalises to escape, giving up even simple allylic stabilisation, and the pKa is estimated at about 60. Least acidic: cyclopropene.",
      "note": "This ordering is the aromatic-ions section in one question: a ring that becomes aromatic on deprotonation is acidic (cyclopentadiene), one that would become antiaromatic is inert (cyclopropene), and a 4n ring that can twist lands in between. The same three rings reverse their preferences when a hydride is removed instead, which is why the cyclopropenyl and cycloheptatrienyl cations are aromatic and the cyclopentadienyl cation is not.",
      "options": {
        "A": "Correct. Its conjugate base is the four-electron cyclopropenyl anion, antiaromatic if planar; the anion twists out of conjugation to avoid that fate and is the least stabilised carbanion of the four.",
        "B": "The allyl anion is resonance-stabilised over two carbons and is an ordinary open-chain anion with no antiaromatic penalty; propene is a stronger acid than cyclopropene by many powers of ten.",
        "C": "Its anion would have eight pi electrons; it escapes antiaromaticity by folding and keeps allylic-type delocalisation. Less acidic than cyclopentadiene, but far more acidic than cyclopropene.",
        "D": "The most acidic of the four, not the least: its anion is the six-electron aromatic cyclopentadienyl ion, and its pKa of 16 is close to that of water."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch15_q31_cyclopentadienyl_anion_acidity",
    "topic": "Aromatic Ions",
    "difficulty_level": "Medium",
    "question_text": "Cyclopentadiene has an unusually low $pK_a$ of 16 compared to cyclopentane ($pK_a > 50$). What is the reason for this high acidity?",
    "question_smiles": "C1=CC=CC1",
    "options": [
      {
        "option_id": "A",
        "text": "Loss of a proton from the $sp^3$ carbon generates the cyclopentadienyl anion, which is a highly stable aromatic system with 6 $\\pi$ electrons.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclopentadiene is antiaromatic, and deprotonation makes it non-aromatic.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The conjugate base is stabilized by inductive electron withdrawal of the two double bonds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The C-H bond of cyclopentadiene is weak because of the small size of the ring.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A hydrocarbon with a pKa of 16 is remarkable: it is about as acidic as water and more than thirty powers of ten more acidic than an alkane. The reason is not the C-H bond in the starting material but the anion that forms. Deprotonating the CH2 carbon of cyclopentadiene puts a lone pair into a p orbital that completes a five-membered loop, and with six electrons that loop is aromatic.",
      "approach": "Step 1: Locate the acidic hydrogen: on the sp3 CH2 carbon, the only one that is not part of the diene.\nStep 2: Remove H+: the carbon rehybridises to sp2 and its lone pair occupies the new p orbital.\nStep 3: Count the loop: four electrons from the two double bonds plus two from the lone pair, six, 4n+2 with n = 1, in a planar five-membered ring. Aromatic.\nStep 4: The anion is a symmetrical pentagon with the negative charge shared equally by all five carbons; that stabilisation, gained only after deprotonation, is what makes the parent acidic.",
      "note": "Sodium cyclopentadienide is made simply with NaH or NaOH in a polar solvent, and the ion is the ligand of ferrocene. Cyclopentane, with no way to make an aromatic anion, has a pKa above 50, and even propene, whose allyl anion is delocalised, sits at 43: the aromatic count adds more than twenty pKa units to what conjugation alone provides.",
      "options": {
        "A": "Correct. Loss of the CH2 proton gives a planar anion with six pi electrons in a five-membered loop, aromatic, so the equilibrium lies far toward the anion.",
        "B": "Cyclopentadiene is non-aromatic, not antiaromatic: its CH2 carbon breaks the loop, so there is no cyclic pi system in the neutral molecule to be destabilised. Aromaticity is created by deprotonation, not lost.",
        "C": "Double bonds are not inductively withdrawing to any useful degree; the stabilisation is resonance delocalisation of the lone pair into a closed aromatic loop, a far larger effect than any inductive one.",
        "D": "The C-H bond of cyclopentadiene is an ordinary allylic C-H, no weaker than propene's. Acidity is a thermodynamic property set by the anion's stability, not by bond strength alone."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-membered ring with two conjugated double bonds and one CH2 carbon."
  },
  {
    "question_id": "ch15_q32_bromide_ionization",
    "topic": "Aromatic Ions",
    "difficulty_level": "Hard",
    "question_text": "7-Bromocyclohepta-1,3,5-triene (shown) ionises readily to a stable carbocation and is a water-soluble salt, whereas 5-bromocyclopenta-1,3-diene shows no tendency to ionise, even though both bromides are allylic. What explains the difference?",
    "question_smiles": "BrC1C=CC=CC=C1",
    "options": [
      {
        "option_id": "A",
        "text": "Loss of bromide from the seven-membered ring gives the cycloheptatrienyl cation, a planar 6 $\\pi$-electron aromatic ion; loss from the five-membered ring would give the cyclopentadienyl cation, a 4 $\\pi$-electron antiaromatic ion.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The seven-membered ring is more strained, so its C-Br bond is weaker and breaks more easily.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The five-membered cation cannot delocalise its charge, because it has fewer resonance forms than the seven-membered cation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The cyclopentadienyl cation is aromatic but too reactive to persist; the cycloheptatrienyl cation is non-aromatic and therefore less reactive.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Both bromides sit on a carbon flanked by double bonds, and simple resonance counting says both cations should be stabilised: the five-membered cation would spread its charge over five carbons and the seven-membered one over seven. Yet one bromide ionises spontaneously and the other does not. Counting the electrons in the ring that ionisation creates explains it: six in the tropylium ion, four in the cyclopentadienyl cation.",
      "approach": "Step 1: Ionise the seven-membered bromide: the sp3 carbon becomes an sp2 cation with an empty p orbital, completing a seven-membered loop. Electrons: three double bonds, six. 4n+2, aromatic. The tropylium ion is a regular planar heptagon with the charge shared by all seven carbons.\nStep 2: Ionise the five-membered bromide: the empty p orbital completes a five-membered loop holding four electrons from two double bonds. 4n, antiaromatic: two electrons alone in a degenerate pair, as the Frost pentagon shows.\nStep 3: Compare: forming an aromatic ion is downhill enough that the C-Br bond breaks in a polar solvent without help; forming an antiaromatic ion is so uphill that the bromide behaves as an ordinary, sluggish secondary halide.\nStep 4: The difference is not the number of resonance forms, which is comparable, but the electron count in the loop those forms describe.",
      "note": "Tropylium bromide is a salt, melting above 200 °C and dissolving in water, remarkable for a C7H7Br compound, and the same six-electron ion is why m/z 91 dominates the mass spectra of alkylbenzenes. The cyclopentadienyl cation has been generated only at very low temperature and is a triplet diradical, exactly what the half-filled degenerate pair predicts. 5-Bromocyclopentadiene instead does what cyclopentadiene itself does: it dimerises.",
      "options": {
        "A": "Correct. Ionisation completes a p-orbital loop in each case; six electrons in the seven-membered loop is aromatic and drives the reaction, four in the five-membered loop is antiaromatic and forbids it.",
        "B": "A seven-membered ring is less strained than a five-membered one, not more, and the C-Br bond strengths are ordinary in both. Bond strength does not distinguish the two; the stability of the product cation does.",
        "C": "The cyclopentadienyl cation has five equivalent resonance forms and delocalises its charge over all five carbons; delocalisation is not the problem. Four electrons in a closed loop is destabilising however many resonance forms are drawn.",
        "D": "The assignments are reversed. The cycloheptatrienyl (tropylium) cation is the aromatic one, stable enough to isolate as a salt, and the cyclopentadienyl cation is the antiaromatic one that cannot be formed under solvolysis conditions."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A seven-membered ring with three conjugated double bonds; the one saturated ring carbon bears a bromine atom."
  },
  {
    "question_id": "ch15_q33_tropylium_m91",
    "topic": "Aromatic Ions",
    "difficulty_level": "Medium",
    "question_text": "The mass spectra of alkylbenzenes such as toluene and ethylbenzene show an intense peak, often the base peak, at $m/z = 91$. Which structure is the $m/z$ 91 ion, and why is it so abundant?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The cycloheptatrienyl (tropylium) cation, $\\text{C}_7\\text{H}_7^+$: the benzylic cation formed on cleavage ring-expands to a planar 6 $\\pi$-electron aromatic ion.",
        "smiles": "C1=CC=C[CH+]C=C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The benzyl cation, $\\text{C}_6\\text{H}_5\\text{CH}_2^+$, in which the charge stays on the $\\text{CH}_2$ carbon; its stability comes only from allylic-type resonance with the ring.",
        "smiles": "[CH2+]c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The benzyl radical, $\\text{C}_6\\text{H}_5\\text{CH}_2\\cdot$, formed by homolysis of the benzylic bond; the detector records its mass directly.",
        "smiles": "[CH2]c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The phenyl cation, $\\text{C}_6\\text{H}_5^+$, formed by loss of the whole side chain.",
        "smiles": "[c+]1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Alkylbenzenes fragment by cleaving the bond next to the ring, the benzylic bond, because the cation left on the benzylic carbon is stabilised by the ring. For any side chain of one carbon or more that cleavage can leave C7H7+, mass 91. The ion is far more abundant than a simple benzyl cation would explain, and the reason is that the benzyl cation rearranges by ring expansion to the cycloheptatrienyl cation, a seven-membered ring with six pi electrons: aromatic.",
      "approach": "Step 1: Find the mass: C7H7 = 7(12) + 7(1) = 91. Loss of a hydrogen atom from toluene (92) or of a methyl radical from ethylbenzene (106) gives it.\nStep 2: Write the first-formed ion: benzylic cleavage gives the benzyl cation, C6H5CH2+, with the charge on the CH2 carbon and resonance into the ring at the ortho and para positions.\nStep 3: Let it rearrange: inserting the CH2 carbon into the ring gives a planar heptagon with seven equivalent carbons and six pi electrons, the tropylium ion. Aromatic, and lower in energy than the benzyl cation.\nStep 4: The aromatic ion is long-lived on the time scale of the mass spectrometer, so it survives to the detector in large numbers: hence the base peak.",
      "note": "The evidence that the 91 ion is tropylium rather than benzyl came from isotope labelling: a 13C placed in the CH2 of toluene ends up scrambled over all seven positions in the daughter ions, which a benzyl cation with a fixed CH2 could not manage. Its methyl-substituted analogue at m/z 105 dominates the spectra of the xylenes and of cumene, and tropylium's loss of acetylene gives the m/z 65 peak that always accompanies 91.",
      "options": {
        "A": "Correct. Benzylic cleavage gives C7H7+, which ring-expands to the aromatic tropylium ion; its six-electron aromatic stabilisation is what makes 91 the base peak.",
        "B": "The benzyl cation is the first-formed ion, but it is not the ion that dominates: it rearranges to the more stable seven-membered aromatic ring. Allylic-type resonance alone would not make 91 so intense relative to other fragments.",
        "C": "A mass spectrometer detects ions, not neutral radicals. Homolysis of the benzylic bond produces a radical and a cation, and only the charged piece is accelerated to the detector.",
        "D": "The phenyl cation is C6H5+, mass 77, and it is a minor peak because a cation on an sp2 ring carbon cannot be stabilised by the pi system: its empty orbital is in the plane of the ring. Loss of the whole side chain gives 77, not 91."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch15_q34_cycloheptatrienyl_anion",
    "topic": "Aromatic Ions",
    "difficulty_level": "Medium",
    "question_text": "The cycloheptatrienyl (tropylium) cation is shown. How does the cycloheptatrienyl anion differ from it?",
    "question_smiles": "C1=CC=C[CH+]C=C1",
    "options": [
      {
        "option_id": "A",
        "text": "The tropylium cation is aromatic with 6 $\\pi$ electrons; the cycloheptatrienyl anion has 8 $\\pi$ electrons and is antiaromatic if planar.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The cation is antiaromatic; the anion is aromatic.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both are aromatic because they contain 6 and 8 $\\pi$ electrons respectively.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both are non-aromatic due to the 7-membered ring structure.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The seven-membered ring holds three double bonds and six pi electrons; what the seventh carbon contributes decides everything. An empty p orbital adds nothing and the count stays six, aromatic. A lone pair adds two and the count becomes eight, a 4n number, so the anion would be antiaromatic if it were planar and instead folds to become an ordinary, non-planar conjugated anion. The two ions have opposite stabilities for a two-electron reason.",
      "approach": "Step 1: Cation: six electrons from three double bonds; the cationic carbon supplies an empty p orbital. Six in a planar heptagon: aromatic, with the charge shared by all seven carbons.\nStep 2: Anion: the same six plus the lone pair, eight. 4n with n = 2.\nStep 3: Frost heptagon: three bonding levels hold six electrons; the seventh and eighth must enter the degenerate antibonding pair, one each. Planar, that is antiaromatic.\nStep 4: The real anion escapes by losing planarity and behaves as a weakly stabilised polyenyl anion, which is why cycloheptatriene is a poor acid (pKa about 36) while 7-bromocycloheptatriene ionises with ease.",
      "note": "Compare the five-membered ring, where the preferences are reversed: the anion is aromatic and the cation antiaromatic. The pair of comparisons is the cleanest demonstration that aromaticity is about the electron count in a loop, not about charge, ring size or the number of resonance forms; both seven-membered ions delocalise over seven carbons and only one of them profits from it.",
      "options": {
        "A": "Correct. Six electrons make the cation aromatic; the anion's lone pair raises the count to eight, so a planar anion would be antiaromatic, and the real anion avoids planarity.",
        "B": "The assignments are reversed: the tropylium cation is the stable, isolable aromatic ion, and it is the anion that would be antiaromatic if planar.",
        "C": "Eight is not a Hückel number; only counts of the form 4n+2 (2, 6, 10) are aromatic. Two ions differing by two electrons in the same loop cannot both be aromatic.",
        "D": "A seven-membered ring is perfectly capable of planarity, and the tropylium cation is a regular flat heptagon. Ring size disqualifies neither ion; the electron count is what separates them."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A seven-membered ring with three double bonds; the seventh carbon carries a hydrogen and a positive charge."
  },
  {
    "question_id": "ch15_q35_cyclooctatetraenyl_dianion",
    "topic": "Aromatic Ions",
    "difficulty_level": "Hard",
    "question_text": "When cyclooctatetraene (COT) is treated with potassium metal, it forms a stable dianion ($C_8H_8^{2-}$). What chemical change occurs?",
    "question_smiles": "C1=CC=CC=CC=C1",
    "options": [
      {
        "option_id": "A",
        "text": "Potassium reduces COT by donating two electrons, forming a planar 10 $\\pi$ electron aromatic dianion.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Potassium acts as a Lewis acid to coordinate to the neutral COT ring.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The ring is oxidized to form a dication with 6 $\\pi$ electrons.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The dianion remains in a tub conformation and is antiaromatic.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Cyclooctatetraene is a non-planar tub because its eight electrons are a 4n count. Give it two more electrons and the count becomes ten, 4n+2, and everything changes: the dianion is planar, all eight bonds are the same length, and it is stable enough to isolate as a dipotassium salt. Reduction by an alkali metal is the route, since the metal gives up electrons readily and the pi system has an accessible orbital to accept them.",
      "approach": "Step 1: Potassium is a reducing agent: each atom donates one electron and becomes K+. Two potassium atoms supply two electrons.\nStep 2: The electrons enter the pi system. Neutral cyclooctatetraene has eight; the dianion has ten.\nStep 3: Count: ten is 4n+2 with n = 2. In a planar octagon the Frost circle gives one bonding orbital, a degenerate bonding pair, and a degenerate nonbonding pair on the centre line below the antibonding levels; ten electrons fill all of those, a closed shell.\nStep 4: The ring flattens to gain the aromatic stabilisation: a regular planar octagon with eight equivalent carbons, each carrying a quarter of a negative charge. The salt K2C8H8 is isolable.",
      "note": "The dianion is the ligand in uranocene, the uranium sandwich compound, and its formation is a direct experimental test of the 4n+2 rule: the same ring that avoids planarity with eight electrons seeks it with ten. The intermediate radical anion, with nine electrons, is also known and is already nearly flat. Reduction, not oxidation, is what confers aromaticity here; removing two electrons would give a six-electron dication, which is far less accessible.",
      "options": {
        "A": "Correct. Two electrons from potassium raise the count from eight to ten, 4n+2, and the ring flattens into a planar aromatic dianion.",
        "B": "Potassium has no tendency to accept an electron pair; it is a strong reducing agent. It transfers electrons to the ring rather than coordinating to it as a Lewis acid.",
        "C": "A metal cannot oxidise a hydrocarbon; potassium donates electrons. A six-electron dication would also be aromatic in principle, but it is not what forms, and the product is C8H8 with a 2- charge, as its formula states.",
        "D": "Ten electrons is a Hückel count, so the dianion has every reason to be planar and none to stay a tub. The tub is the neutral molecule's escape from a 4n count; with 4n+2 the flat ring is the stable one."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An eight-membered ring with four alternating double bonds, drawn flat."
  },
  {
    "question_id": "ch15_q36_calicene_dipole",
    "topic": "Aromatic Ions",
    "difficulty_level": "Hard",
    "question_text": "Calicene (shown) has a remarkably large dipole moment for a hydrocarbon, about 4.6 D. Which resonance description best explains this polarity?",
    "question_smiles": "C1=CC=CC1=C1C=C1",
    "options": [
      {
        "option_id": "A",
        "text": "A major dipolar resonance contributor consists of a cyclopentadienyl anion (aromatic $6\\pi$ system) linked to a cyclopropenyl cation (aromatic $2\\pi$ system).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "In the major dipolar contributor the cyclopropene ring is negatively charged and the cyclopentadiene ring is positively charged.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The polarity comes from the electronegativity difference between the $sp^2$ carbons of the strained three-membered ring and those of the five-membered ring.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Polarising the exocyclic double bond turns the three-membered ring into a $4\\pi$-electron anion, which is aromatic and drives the charge separation.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A hydrocarbon has no electronegative atoms, so a dipole moment of several debye can come only from a charge-separated resonance form that contributes heavily. Calicene is built so that pushing the two electrons of the central double bond onto the five-membered ring makes both rings aromatic at once: the five-membered ring becomes a six-electron cyclopentadienyl anion and the three-membered ring a two-electron cyclopropenyl cation. That contributor is stabilised at both ends and therefore weighs heavily in the hybrid.",
      "approach": "Step 1: Draw the neutral structure: a five-membered ring with two double bonds, an exocyclic C=C, and a cyclopropene ring on the other end.\nStep 2: Move the exocyclic pi pair onto the five-membered ring's carbon. That ring now has 4 + 2 = 6 electrons in a five-membered loop: an aromatic anion.\nStep 3: The three-membered ring is left with its one double bond and an empty p orbital: 2 electrons in a three-membered loop, an aromatic cation.\nStep 4: Two aromatic rings joined by a single bond, negative charge on the five-membered ring and positive on the three-membered one, is a low-energy contributor, so the real molecule carries much of that separation and its dipole points from the three-membered ring toward the five-membered one.",
      "note": "The same logic predicts the direction of polarisation in fulvene (exocyclic carbon partly positive, ring partly negative) and in azulene, and it fails, instructively, for the reverse arrangement: pushing electrons the other way would give a four-electron three-membered ring and a four-electron five-membered ring, both antiaromatic, so that contributor is negligible. Parent calicene is too reactive to isolate; the dipole moments are those of its stable substituted derivatives.",
      "options": {
        "A": "Correct. Shifting the exocyclic pi electrons onto the five-membered ring gives a cyclopentadienyl anion and a cyclopropenyl cation, both aromatic, so the dipolar form is a major contributor.",
        "B": "Polarising the bond that way gives a cyclopentadienyl cation (four electrons, antiaromatic) and a cyclopropenyl anion (four electrons, antiaromatic). Doubly destabilised, that contributor is negligible, and the observed dipole points the other way.",
        "C": "All eight carbons are sp2, and carbon-carbon electronegativity differences are far too small to give a dipole of several debye. Strain changes energies, not the direction of charge flow; only the aromatic electron counts explain the size and the direction.",
        "D": "Four electrons in a three-membered loop would be antiaromatic, not aromatic. The stabilised charge-separated form has two electrons on the three-membered ring (a cation) and six on the five-membered ring (an anion)."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-membered ring with two double bonds, joined through an exocyclic double bond to a three-membered ring that carries one double bond."
  },
  {
    "question_id": "ch15_q37_pyridine_lone_pair",
    "topic": "Aromatic Heterocycles",
    "difficulty_level": "Easy",
    "question_text": "Pyridine (shown) is a moderately strong base (conjugate-acid $pK_a = 5.25$), whereas pyrrole is almost non-basic (conjugate-acid $pK_a \\approx 0.4$). Why is the difference so large?",
    "question_smiles": "c1ccncc1",
    "options": [
      {
        "option_id": "A",
        "text": "The nitrogen lone pair in pyridine resides in an $sp^2$ orbital in the plane of the ring and is not part of the aromatic system; in pyrrole, the nitrogen lone pair is in a p orbital and is required to complete the 6 $\\pi$ aromatic system.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Pyridine is more basic because its nitrogen is $sp^3$ hybridised.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Pyrrole is less basic because its conjugate acid is aromatic and therefore unreactive.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The lone pair in pyridine is part of the aromatic system, which stabilises the conjugate acid.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A nitrogen's basicity depends on where its lone pair sits. In pyridine the lone pair occupies an sp2 orbital in the plane of the ring, pointing outward, and is no part of the aromatic sextet; protonating it changes nothing about the ring. In pyrrole the lone pair supplies two of the sextet's six electrons: it sits in a p orbital, delocalised round the ring, and protonating the nitrogen would destroy the aromaticity. One base pays no aromatic price and the other pays all of it.",
      "approach": "Step 1: Pyridine's nitrogen: two sigma bonds to ring carbons, one p orbital in the pi system contributing one electron (its share of a C=N double bond), and a lone pair in the third sp2 hybrid, in the ring plane. Sextet: five carbons plus one nitrogen electron, six.\nStep 2: Protonate pyridine: H+ bonds to the in-plane lone pair. The pyridinium ion keeps its six pi electrons and its aromaticity; the pKa of 5.25 is that of an ordinary weak base, lowered from an alkylamine's 10 by the sp2 nitrogen's greater electronegativity.\nStep 3: Pyrrole's nitrogen: three sigma bonds (two carbons, one hydrogen) and a lone pair in its p orbital, which supplies two of the sextet's electrons alongside the four from the two double bonds.\nStep 4: Protonate pyrrole's nitrogen: the lone pair is consumed, the ring is left with four pi electrons and an sp3 nitrogen, and aromaticity is lost. That costs far more than protonation gains, so pyrrole is a base only toward the strongest acids, and even then it protonates on carbon rather than nitrogen.",
      "note": "The same lone-pair test sorts every heterocycle in the section: a nitrogen drawn with a double bond (pyridine, imidazole's N3) keeps its lone pair in the plane and is basic; a nitrogen drawn with an N-H or N-R and no double bond (pyrrole, indole, imidazole's N1) has given its lone pair to the ring and is not. McMurry's basicity table lists pyridine at 5.25 and pyrrole's conjugate acid near 0.4.",
      "options": {
        "A": "Correct. Pyridine's lone pair is in an in-plane sp2 orbital outside the pi system; pyrrole's is in a p orbital and is needed for the sextet, so protonating it costs the aromaticity.",
        "B": "Pyridine's nitrogen is sp2, not sp3: it is part of a planar aromatic ring and carries a double bond in every Kekulé structure. An sp3 nitrogen would be more basic in an amine, but that is not the structure here.",
        "C": "Pyrrole's conjugate acid is not aromatic; that is precisely the problem. Protonating the nitrogen removes the lone pair from the ring and leaves only four pi electrons, so the conjugate acid is strongly disfavoured.",
        "D": "Pyridine's lone pair is not part of the aromatic system; the nitrogen's contribution to the sextet is the single electron in its p orbital. If the lone pair were in the ring, pyridine would be as reluctant to protonate as pyrrole."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered aromatic ring in which one of the six atoms is a nitrogen."
  },
  {
    "question_id": "ch15_q38_pyrrole_structure",
    "topic": "Aromatic Heterocycles",
    "difficulty_level": "Easy",
    "question_text": "What is the hybridization and orbital occupancy of the nitrogen atom in pyrrole?",
    "question_smiles": "c1cc[nH]c1",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^2$ hybridized; the nitrogen lone pair occupies a p orbital perpendicular to the ring plane.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$sp^3$ hybridized; the nitrogen lone pair occupies an $sp^3$ orbital.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$sp^2$ hybridized; the nitrogen lone pair occupies an $sp^2$ orbital in the plane of the ring.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$sp$ hybridized; the nitrogen lone pair occupies a p orbital.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Pyrrole's nitrogen has three sigma bonds and a lone pair, which by simple counting looks like the sp3 nitrogen of an amine. It is not: the molecule is flat, and the nitrogen is sp2 with its lone pair in the p orbital, because only in that arrangement can the lone pair join the four electrons of the two double bonds to make a six-electron aromatic loop. Aromaticity is worth more than the small cost of rehybridisation.",
      "approach": "Step 1: Count what the nitrogen bonds to: two ring carbons and one hydrogen, three sigma bonds, plus a lone pair.\nStep 2: Ask what the ring needs. Four carbons supply four p orbitals and four electrons from two double bonds; a fifth p orbital with two more electrons would complete a 4n+2 loop.\nStep 3: Put the nitrogen's lone pair into a p orbital perpendicular to the ring: that requires sp2 hybridisation for the three sigma bonds, all in the ring plane, and gives a planar molecule.\nStep 4: Result: sp2 nitrogen, lone pair in the p orbital, six pi electrons, aromatic. The N-H bond lies in the plane of the ring.",
      "note": "The consequences are everything that makes pyrrole unlike an amine: it is not basic at nitrogen, its N-H is weakly acidic (pKa about 17, because the anion keeps the aromatic sextet), and it undergoes electrophilic substitution far more readily than benzene because the ring is electron-rich. Furan and thiophene use one lone pair of their oxygen or sulfur in exactly the same way.",
      "options": {
        "A": "Correct. The nitrogen is sp2 and its lone pair occupies the p orbital perpendicular to the ring, completing the six-electron aromatic system.",
        "B": "An sp3 nitrogen would hold its lone pair in a hybrid orbital that cannot overlap with the ring's p orbitals, leaving a non-aromatic four-electron diene. Pyrrole is planar and aromatic, which rules sp3 out.",
        "C": "Placing the lone pair in an in-plane sp2 orbital is pyridine's arrangement, where the nitrogen already has a double bond to supply its p electron. Pyrrole's nitrogen has no double bond; if its lone pair stayed in the plane the ring would have only four pi electrons.",
        "D": "sp hybridisation is for linear, two-coordinate atoms such as a nitrile nitrogen. A nitrogen with three sigma bonds inside a ring cannot be sp."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-membered ring with two double bonds and an N-H group."
  },
  {
    "question_id": "ch15_q39_furan_lone_pairs",
    "topic": "Aromatic Heterocycles",
    "difficulty_level": "Medium",
    "question_text": "Furan has two lone pairs on the oxygen atom. How do they participate in the electronic structure of the molecule?",
    "question_smiles": "c1ccoc1",
    "options": [
      {
        "option_id": "A",
        "text": "One lone pair is in a p orbital perpendicular to the ring plane, contributing to the 6 $\\pi$ aromatic system; the other lone pair is in an $sp^2$ orbital in the plane of the ring and is not part of the $\\pi$ system.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Both lone pairs are in p orbitals perpendicular to the ring, making it a 10 $\\pi$ aromatic system.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both lone pairs are in $sp^2$ orbitals and do not participate in aromaticity.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "One lone pair is in a d orbital and the other is in a p orbital.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Furan's oxygen carries two lone pairs, but a five-membered loop can accommodate only one p orbital per atom, so only one of them can be part of the pi system. The oxygen is sp2: one lone pair sits in the p orbital and contributes two electrons to the sextet, the other sits in an sp2 hybrid in the plane of the ring and is a spectator. Six electrons, not eight, circulate in the ring.",
      "approach": "Step 1: Bonds at oxygen: two sigma bonds to ring carbons. Two lone pairs remain.\nStep 2: To be aromatic the ring needs an oxygen p orbital carrying two electrons alongside the four from the two double bonds; that makes the oxygen sp2, with three hybrids (two for bonds, one for a lone pair) in the plane.\nStep 3: Assign the lone pairs: one in the p orbital, in the ring's pi system; one in the remaining sp2 hybrid, in the ring plane, unable to overlap with p orbitals that are perpendicular to it.\nStep 4: Count: 4 + 2 = 6 pi electrons, aromatic. The in-plane pair adds nothing to the count.",
      "note": "The in-plane lone pair is why furan is still a weak hydrogen-bond acceptor at oxygen, while the delocalised pair makes the ring electron-rich and reactive toward electrophiles at C2. The same division applies to thiophene's sulfur. Pyrrole's N-H nitrogen has only one lone pair and gives it all to the ring, which is why pyrrole has no basic lone pair left over.",
      "options": {
        "A": "Correct. One lone pair, in a p orbital, completes the six-electron aromatic system; the other, in an in-plane sp2 orbital, is not part of it.",
        "B": "Two p orbitals on one atom cannot both be perpendicular to the ring; each atom contributes at most one p orbital to a pi loop. Ten electrons on five atoms would also force the second pair into an antibonding level.",
        "C": "If neither lone pair entered the ring, furan would have only four pi electrons in an interrupted diene and would not be aromatic; its flatness, its stability and its substitution chemistry show that it is.",
        "D": "Oxygen has no accessible d orbitals; its valence shell is 2s and 2p. The two lone pairs occupy one p orbital and one sp2 hybrid."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-membered ring containing one oxygen atom and two double bonds."
  },
  {
    "question_id": "ch15_q40_thiophene_vs_furan",
    "topic": "Aromatic Heterocycles",
    "difficulty_level": "Medium",
    "question_text": "Thiophene (shown) has a considerably larger resonance energy than furan. Why?",
    "question_smiles": "c1ccsc1",
    "options": [
      {
        "option_id": "A",
        "text": "Sulfur is less electronegative than oxygen, so it holds its lone pair less tightly and shares it more completely with the ring, giving more effective $\\pi$ delocalisation.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Sulfur uses its 3d orbitals to expand its octet and create a 10 $\\pi$-electron system.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The C-S bonds are shorter than C-O bonds, so the sulfur p orbital overlaps better with the ring carbons.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Sulfur's lone pair sits in an $sp^2$ orbital, so thiophene's $\\pi$ system holds only four electrons and behaves as a diene stabilised by the heteroatom.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Both rings are aromatic with six pi electrons, one pair of which the heteroatom donates, but they are not equally aromatic. How much a heteroatom's lone pair actually delocalises depends on how tightly the atom holds it. Oxygen is the most electronegative atom in either ring and keeps its pair close, so furan's sextet is lopsided and its resonance energy is small; sulfur is less electronegative and more polarisable, shares its pair more evenly, and thiophene sits much closer to benzene in stability.",
      "approach": "Step 1: Both heteroatoms are sp2 with one lone pair in a p orbital; the electron count is six in each ring.\nStep 2: Compare electronegativity: oxygen 3.4, sulfur 2.6. The oxygen pair is held at lower energy and mixes less with the carbon p orbitals; the sulfur pair is higher in energy, closer to the carbons', and mixes more.\nStep 3: The result in resonance energies: furan about 65 kJ/mol, pyrrole about 90, thiophene about 120, against benzene's 150.\nStep 4: Behaviour matches: furan is the least aromatic, acting as a diene in Diels-Alder reactions and ring-opening in aqueous acid; thiophene behaves much more like benzene.",
      "note": "The order furan < pyrrole < thiophene tracks the heteroatom's willingness to donate: the less electronegative the atom, the more aromatic the ring. Sulfur's larger 3p orbital is often said to overlap poorly with carbon 2p, and it does, but the energy match outweighs the size mismatch here. Sulfur's d orbitals play no part; thiophene's six electrons are a standard sextet.",
      "options": {
        "A": "Correct. Sulfur's lower electronegativity lets its lone pair delocalise into the ring more completely than oxygen's, so thiophene's sextet is more evenly shared and its resonance energy larger.",
        "B": "Sulfur's 3d orbitals are too high in energy to take part, and a ten-electron ring would be no help in any case: aromaticity here is a six-electron property, with sulfur contributing exactly one pair.",
        "C": "C-S bonds (about 171 pm) are longer than C-O bonds (about 136 pm), not shorter, and the larger 3p orbital of sulfur overlaps less well with carbon 2p. Geometry works against thiophene; electronegativity is what wins for it.",
        "D": "Sulfur's lone pair in the pi system is in a p orbital, just as furan's oxygen pair is, and thiophene has a full sextet: it is aromatic, not a diene. A four-electron ring would have less stabilisation than furan, not more."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-membered ring containing a sulfur atom and two double bonds."
  },
  {
    "question_id": "ch15_q41_imidazole_protonation",
    "topic": "Aromatic Heterocycles",
    "difficulty_level": "Hard",
    "question_text": "Imidazole contains two nitrogen atoms: N1 (with the hydrogen attached) and N3 (the double-bonded nitrogen). Which nitrogen is protonated first, and why?",
    "question_smiles": "c1c[nH]cn1",
    "options": [
      {
        "option_id": "A",
        "text": "N3 is protonated because its lone pair resides in an $sp^2$ orbital in the plane of the ring and is not part of the aromatic system; protonating N3 preserves the aromaticity.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "N1 is protonated because its lone pair is in a p orbital, making it more basic.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both nitrogens are equally basic, resulting in a mixture of protonated species.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Protonation occurs on the carbon atom between the two nitrogens due to resonance stabilization.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Imidazole combines the two kinds of ring nitrogen in one molecule. N1 is a pyrrole-type nitrogen: three sigma bonds, lone pair in a p orbital, committed to the aromatic sextet. N3 is a pyridine-type nitrogen: two sigma bonds, one electron in the pi system through its C=N bond, lone pair in an in-plane sp2 orbital. Protonation goes to the lone pair that is free, N3, and the cation that results keeps its aromaticity and is symmetrical.",
      "approach": "Step 1: Count the sextet: the two double bonds give four electrons; N1's lone pair gives two. Six. N3's lone pair is not in the count.\nStep 2: Protonate N3: the in-plane lone pair bonds to H+, the ring keeps its six pi electrons, and both nitrogens are now N-H. The two are equivalent by resonance, so the positive charge is shared between them and the imidazolium ion is unusually stable.\nStep 3: Protonate N1 instead: the lone pair that was in the ring is consumed, four pi electrons remain, aromaticity is lost. Far higher in energy.\nStep 4: Conjugate-acid pKa about 7, higher than pyridine's 5.25, because the resonance-shared charge stabilises the imidazolium ion.",
      "note": "That pKa near 7 is why the imidazole ring of histidine is the general acid and base of so many enzyme active sites: at physiological pH it is present in both forms in comparable amounts. Which nitrogen carries the hydrogen in neutral imidazole is itself a fast equilibrium (tautomerism), but whichever one holds it is the pyrrole-type nitrogen at that instant, and the other is the base.",
      "options": {
        "A": "Correct. N3's lone pair is in an in-plane sp2 orbital outside the pi system, so it protonates without cost, and the resulting imidazolium ion is aromatic and resonance-symmetric.",
        "B": "N1's lone pair is in a p orbital, but that makes it part of the sextet, not more basic. Protonating N1 would destroy the aromaticity, so it is the least basic site, not the most.",
        "C": "The two nitrogens are electronically different in the neutral molecule: one holds its lone pair in the ring, the other in the plane. They become equivalent only after N3 is protonated.",
        "D": "C2 has no lone pair, and protonating a ring carbon would give a non-aromatic cation with an sp3 carbon. Carbon protonation happens only for pyrrole, which has no free nitrogen lone pair; imidazole does."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-membered ring containing two nitrogen atoms separated by a single carbon; one nitrogen carries a hydrogen, the other is part of a C=N double bond."
  },
  {
    "question_id": "ch15_q42_indole_aromaticity",
    "topic": "Aromatic Heterocycles",
    "difficulty_level": "Medium",
    "question_text": "Which of the following describes the aromatic system of indole?",
    "question_smiles": "c1ccc2[nH]ccc2c1",
    "options": [
      {
        "option_id": "A",
        "text": "A 10 $\\pi$ electron aromatic system consisting of a benzene ring fused to a pyrrole ring, where the nitrogen lone pair participates in the $\\pi$ system.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A 12 $\\pi$ electron system because the nitrogen lone pair and the double bonds are all conjugated.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "An 8 $\\pi$ electron system that is antiaromatic in its ground state.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A system consisting of a separate 6 $\\pi$ benzene ring and a non-aromatic pyrrole ring.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Indole is a benzene ring and a pyrrole ring sharing one bond, and the count is done over the whole bicyclic system: eight carbons and one nitrogen, all sp2 and planar. The nitrogen is pyrrole-type, so its lone pair is in a p orbital and belongs to the pi system. Four double bonds and one lone pair give ten electrons, a 4n+2 count over the nine-atom framework.",
      "approach": "Step 1: Identify the atoms with p orbitals: six benzene carbons, two more sp2 carbons in the five-membered ring, and the N-H nitrogen. Nine atoms, nine p orbitals.\nStep 2: Count electrons: four double bonds (three drawn in the benzene ring, one in the pyrrole ring) give eight; the nitrogen lone pair gives two. Ten.\nStep 3: 4n+2 with n = 2. The whole system is aromatic.\nStep 4: Check the parts as well: the benzene ring can be drawn with its own sextet and the pyrrole ring with its own, so the fused system is doubly reinforced, and electrophiles attack C3 of the pyrrole ring rather than the benzene ring.",
      "note": "Fused systems are counted over all their pi electrons; a shared double bond is counted once. The same procedure gives naphthalene ten electrons and quinoline ten as well. Indole's nitrogen, like pyrrole's, is not basic and its N-H is weakly acidic; the amino acid tryptophan carries this ring, and its fluorescence is the indole system's.",
      "options": {
        "A": "Correct. Eight electrons from four double bonds plus two from the nitrogen's p-orbital lone pair give ten, a 4n+2 count over a planar, fully conjugated bicyclic system.",
        "B": "Twelve would need six pairs. Indole has four double bonds (eight electrons) and one lone pair in the pi system (two); the shared C=C bond is counted once, not once per ring.",
        "C": "Eight electrons would ignore the nitrogen lone pair, and even that miscount misdescribes the pi system: the lone pair is in a p orbital and is part of the loop, as it is in pyrrole.",
        "D": "The rings are not separate: they share a bond and a pair of electrons, and the nitrogen's lone pair completes a pyrrole-type sextet in the five-membered ring. Both rings are aromatic, and the system behaves as one delocalised ten-electron unit."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring fused to a five-membered ring that contains an N-H group and one additional double bond."
  },
  {
    "question_id": "ch15_q45_naphthalene_resonance_energy",
    "topic": "Polycyclic Aromatic Hydrocarbons",
    "difficulty_level": "Medium",
    "question_text": "The resonance energy of benzene is about 150 kJ/mol; naphthalene's is about 250 kJ/mol, less than twice benzene's. Why?",
    "question_smiles": "c1ccc2ccccc2c1",
    "options": [
      {
        "option_id": "A",
        "text": "The two rings share a carbon-carbon bond, so they are not independent aromatic systems and cannot both hold a complete benzene sextet in the same resonance structure.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Resonance energy is proportional to the number of double bonds: naphthalene has five and benzene three, so 250 is simply $5/3$ of 150.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Naphthalene is non-planar, which weakens the orbital overlap between the two rings.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The central bond in naphthalene is a single bond that isolates the two rings' $\\pi$ systems from each other.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Naphthalene's ten pi electrons are delocalised over ten carbons that share a bond, and that sharing is the whole story. In benzene every Kekulé form gives the one ring a sextet. In naphthalene there are three Kekulé forms, and in each of them only one ring, or neither, is drawn as a complete benzene ring; the two rings compete for the same central pair of electrons. So naphthalene gains more than one benzene's worth of resonance energy but well short of two.",
      "approach": "Step 1: Independent rings would give 2 x 150 = 300 kJ/mol. Measured: about 250. The shortfall is 50 kJ/mol.\nStep 2: Draw the three Kekulé structures. One has the central bond double, and each ring then holds only two double bonds; the other two make the central bond single, with one ring benzene-like (three double bonds) and the other a diene.\nStep 3: No structure gives both rings a sextet at once, so the average benzene character per ring is less than one.\nStep 4: The consequences are uneven bond lengths (C1-C2 136 pm, C2-C3 142 pm) and reactivity between benzene and a diene: naphthalene substitutes, but it also adds and oxidises more readily than benzene.",
      "note": "The 250 kJ/mol is for ten electrons, so per electron naphthalene is as aromatic as benzene by that crude measure, yet each ring individually is less so, and that is what the chemistry follows. The trend continues: anthracene's three rings give about 350 kJ/mol and its central ring is reactive enough to act as a diene, while angular phenanthrene reaches about 380 with the same number of rings and double bonds.",
      "options": {
        "A": "Correct. The shared bond means the rings cannot both be benzene rings in the same resonance form; delocalisation over the ten-carbon system is worth less than two separate sextets.",
        "B": "250 being 5/3 of 150 is a coincidence of the linear acenes, not a rule: phenanthrene has the same seven double bonds as anthracene and about 30 kJ/mol more resonance energy. Stabilisation depends on how the rings are fused, not on counting double bonds.",
        "C": "Naphthalene is flat; all ten carbons are sp2 and coplanar, as X-ray structures show. Nothing about its geometry weakens the overlap.",
        "D": "The central bond is double in one of the three Kekulé structures and single in the other two; it is part of the delocalised system, not a barrier between two isolated rings. If it isolated them, the resonance energy would be a full 300."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two fused six-membered rings sharing one bond, drawn with five double bonds."
  },
  {
    "question_id": "ch15_q46_naphthalene_substitution",
    "topic": "Polycyclic Aromatic Hydrocarbons",
    "difficulty_level": "Hard",
    "question_text": "Naphthalene undergoes electrophilic aromatic substitution preferentially at the C1 ($\\alpha$) position over the C2 ($\\beta$) position. What is the thermodynamic/kinetic basis for this regioselectivity?",
    "question_smiles": "c1ccc2ccccc2c1",
    "options": [
      {
        "option_id": "A",
        "text": "Electrophilic attack at C1 gives a cationic intermediate in which the positive charge can sit on two different carbons while the other ring keeps a fully intact benzene sextet; attack at C2 allows only one such position.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The C1 position is less sterically hindered than the C2 position.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Attack at C2 would place the positive charge on a ring-fusion carbon, which cannot carry it.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "C1 is more nucleophilic because it is bonded directly to a ring-fusion carbon, whose extra $\\pi$ bond feeds electron density to it.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Electrophilic substitution goes through a cation, and the more stable the cation the faster it forms. In naphthalene the intermediate can keep one ring completely benzenoid, and how often it can do so depends on where the electrophile attacked. Attack at C1 lets the charge sit at C2 or C4, both in the attacked ring, with the other ring untouched; attack at C2 allows only C1. More resonance structures that keep a full sextet mean a more stable cation and a lower-energy transition state, so C1 wins.",
      "approach": "Step 1: Attack at C1: C1 becomes sp3 and the charge starts at C2. Shifting the C3=C4 double bond moves it to C4. In both positions the second ring keeps its three double bonds untouched: two charge positions with an intact benzene ring. Pushing the charge further, into the second ring, costs that ring's sextet.\nStep 2: Attack at C2: the charge starts at C1 or C3. At C1 the second ring stays intact. At C3 it does not, because C1 must then take a double bond to the fusion carbon C8a, which pulls that carbon out of the second ring's sextet. One charge position with an intact ring.\nStep 3: Compare: the C1 intermediate is benzylic in two ways, the C2 intermediate in one. Lower activation energy for C1.\nStep 4: Product: the 1-substituted naphthalene under kinetic control, as in bromination, nitration and low-temperature acylation.",
      "note": "Fully enumerated, the C1 cation has seven resonance structures, four with a benzenoid second ring, and the C2 cation six, two benzenoid; the simplified two-versus-one count is the same ratio. The exception proves the rule: sulfonation at 160 °C gives naphthalene-2-sulfonic acid, because sulfonation is reversible and the 2-isomer, free of the crowding between a C1 substituent and the C8 hydrogen (the peri interaction), is the thermodynamic product.",
      "options": {
        "A": "Correct. The C1 intermediate places the charge at C2 or C4 with the other ring fully benzenoid; the C2 intermediate can keep the other ring intact only with the charge at C1.",
        "B": "C1 is the more hindered position, not the less: a substituent there sits beside the C8 hydrogen across the ring fusion. Sterics argue for C2, which is why 2-substituted products form only when the reaction can equilibrate.",
        "C": "Both intermediates can place the charge on a ring-fusion carbon in some of their resonance structures, and such structures are legitimate; they simply disrupt the second ring's sextet. Nothing forbids charge at a fusion carbon.",
        "D": "Nucleophilicity of the neutral ring is not the deciding factor; the stability of the cation formed afterwards is. Both positions belong to the same delocalised ten-electron system, and the fusion carbon has no extra pi bond to give."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two fused benzene rings; the four carbons adjacent to the ring fusion are the alpha positions, the four beyond them the beta positions."
  },
  {
    "question_id": "ch15_q47_anthracene_vs_phenanthrene",
    "topic": "Polycyclic Aromatic Hydrocarbons",
    "difficulty_level": "Hard",
    "question_text": "Anthracene (left) and phenanthrene (right) are constitutional isomers with three fused benzene rings. Which isomer is more stable, and why?",
    "question_smiles": "c1ccc2cc3ccccc3cc2c1.c1ccc2c(c1)ccc1ccccc12",
    "options": [
      {
        "option_id": "A",
        "text": "Phenanthrene, because its angular fusion allows more Kekulé structures (five versus four), including one in which both outer rings are complete benzene sextets at the same time.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Anthracene, because its linear structure minimises steric hindrance between the hydrogens.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both isomers have identical stability, because they have the same molecular formula and the same number of double bonds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Anthracene, because its higher symmetry gives it more resonance forms.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Isomeric arenes with the same number of rings and double bonds can still differ in resonance energy, because what matters is how many ways the pi electrons can be arranged and how many of those arrangements keep individual rings benzenoid. Linear fusion gives anthracene four Kekulé structures, none with two complete sextets; angular fusion gives phenanthrene five, one of which has both outer rings fully benzenoid with an ordinary double bond between them.",
      "approach": "Step 1: Count Kekulé structures: anthracene 4, phenanthrene 5. More structures, more delocalisation.\nStep 2: Look for structures with two complete benzene rings. In anthracene, if both outer rings hold three double bonds, the middle ring's C9 and C10 are left without partners (their only neighbours are fusion carbons already double-bonded within the outer rings), so no such structure exists. In phenanthrene C9 and C10 are adjacent, so both outer rings can be benzenoid with a C9=C10 double bond between them.\nStep 3: Phenanthrene therefore behaves as two benzene rings plus a fairly isolated C9=C10 alkene; anthracene has its aromaticity spread thinly over three rings.\nStep 4: Resonance energies: phenanthrene about 380 kJ/mol, anthracene about 350. Phenanthrene is more stable by about 30 kJ/mol.",
      "note": "The same structural fact explains the chemistry: phenanthrene's C9-C10 bond is the most alkene-like in the molecule and adds bromine, while anthracene's central ring is so weakly aromatic that C9 and C10 act as a diene in Diels-Alder reactions. Per ring, resonance energy falls from 150 for benzene to 125 for naphthalene and about 117 for anthracene, which is one reason the larger linear acenes grow more reactive and, eventually, coloured.",
      "options": {
        "A": "Correct. Angular fusion lets both outer rings be benzenoid at once with a C9=C10 double bond between them; anthracene's linear fusion never allows two full sextets, and it has one fewer Kekulé structure.",
        "B": "Phenanthrene actually has a mild steric clash between the hydrogens on C4 and C5 (the bay region), so sterics slightly favour anthracene; that phenanthrene is still the more stable isomer shows the electronic effect dominates.",
        "C": "Same formula and same number of double bonds do not fix the resonance energy; it depends on the arrangement. The two differ by about 30 kJ/mol, and their chemistries differ accordingly.",
        "D": "Anthracene's symmetry does not create resonance forms; counting them gives four for anthracene and five for phenanthrene. Symmetry and entropy are not sources of resonance stabilisation."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Left: three six-membered rings fused in a straight row. Right: three six-membered rings fused at an angle, the third ring attached to the side of the second."
  },
  {
    "question_id": "ch15_q48_anthracene_addition",
    "topic": "Polycyclic Aromatic Hydrocarbons",
    "difficulty_level": "Hard",
    "question_text": "Anthracene undergoes addition reactions (such as Diels-Alder reactions or electrophilic additions) much more readily than benzene. At which positions does addition occur, and what is the driving force?",
    "question_smiles": "c1ccc2cc3ccccc3cc2c1",
    "options": [
      {
        "option_id": "A",
        "text": "Addition occurs at C9 and C10 (the middle ring), because the product keeps two separate, fully aromatic benzene rings (about 300 kJ/mol of resonance energy), so only about 50 kJ/mol is sacrificed.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Addition occurs at C1 and C4, because the outer rings contain the most reactive double bonds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Addition occurs at the ring-fusion carbons (C4a and C8a) to relieve ring strain.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Anthracene does not undergo addition reactions, because it is aromatic and behaves exactly like benzene.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Anthracene has about 350 kJ/mol of resonance energy for three rings, but that stabilisation is not evenly spread, and the middle ring holds the least of it. Adding across C9 and C10 converts the molecule into two independent benzene rings held together by two sp3 carbons, and two benzene rings are worth 300 kJ/mol. The reaction therefore sacrifices only about 50 kJ/mol of aromatic stabilisation, little enough that anthracene adds bromine and acts as a diene toward maleic anhydride, both reactions that benzene refuses.",
      "approach": "Step 1: Total resonance energy of anthracene: about 350 kJ/mol.\nStep 2: Add across C9 and C10: those carbons become sp3, and the outer rings are now two isolated benzene rings, 2 x 150 = 300 kJ/mol.\nStep 3: Loss: 350 - 300 = 50 kJ/mol, against the 150 lost by adding to benzene itself.\nStep 4: Other positions cost more: adding across C1 and C4 leaves a naphthalene (250) and loses 100; adding at a ring-fusion carbon breaks two rings at once. So 9,10 is the site: Diels-Alder with dienophiles (the 9,10-adduct with maleic anhydride) and bromine addition, often followed by loss of HBr to give 9-bromoanthracene.",
      "note": "The 9,10-positions are also where anthracene is oxidised to anthraquinone and where it photodimerises: everything that happens to anthracene happens where the aromaticity is cheapest to interrupt. Naphthalene shows the same tendency more weakly (it adds bromine reversibly at C1-C2 before losing HBr), and benzene not at all.",
      "options": {
        "A": "Correct. Addition at C9 and C10 leaves two intact benzene rings worth about 300 kJ/mol, so only about 50 kJ/mol of the 350 is lost.",
        "B": "Adding across C1 and C4 would leave a naphthalene unit, worth about 250 kJ/mol, so the loss would be 100 kJ/mol, twice that at C9-C10. The outer rings are the more aromatic ones, not the more reactive.",
        "C": "The ring-fusion carbons carry no hydrogen and are shared by two rings; addition there would break the aromaticity of both rings at once. Anthracene is planar and has no ring strain to relieve.",
        "D": "Anthracene is aromatic overall but not uniformly, and it does add: bromine across C9-C10 and dienophiles in Diels-Alder reactions are standard. Benzene's resistance to addition comes from having a single ring that loses everything when it adds."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Three benzene rings fused linearly; the two carbons of the middle ring not shared with the outer rings lie opposite each other."
  },
  {
    "question_id": "ch15_q49_azulene_dipole",
    "topic": "Polycyclic Aromatic Hydrocarbons",
    "difficulty_level": "Hard",
    "question_text": "Azulene (shown) is a deep blue hydrocarbon and a constitutional isomer of naphthalene. Unlike naphthalene, azulene has a substantial dipole moment, about 1.1 D. How is this polarity explained?",
    "question_smiles": "C1=CC=C2C=CC=C2C=C1",
    "options": [
      {
        "option_id": "A",
        "text": "Azulene has a major resonance contributor in which the seven-membered ring carries a positive charge (an aromatic tropylium cation) and the five-membered ring a negative charge (an aromatic cyclopentadienyl anion).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Azulene has an $sp^3$ carbon in the five-membered ring that interrupts the conjugation and localises charge.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "In the major dipolar contributor the seven-membered ring is negative (a cycloheptatrienyl anion) and the five-membered ring positive (a cyclopentadienyl cation).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The dipole arises from bond alternation: the double bonds are localised as in a non-aromatic polyene, so the two ends of the molecule differ in electron density.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Naphthalene and azulene are both C10H8 with ten pi electrons over ten sp2 carbons, but naphthalene is nonpolar and azulene has a dipole of about 1 D and a deep blue colour. The difference is the ring sizes. Shifting one pair of electrons from the seven-membered ring to the five-membered one gives a tropylium cation fused to a cyclopentadienyl anion, each a six-electron aromatic ring, and that charge-separated form contributes enough to make the molecule polar.",
      "approach": "Step 1: Count the neutral molecule: five double bonds, ten electrons over the whole perimeter, aromatic (4n+2, n = 2).\nStep 2: Partition the electrons between the rings: with the shared bond counted for both, the seven-membered ring holds more than six and the five-membered ring fewer; move one pair from the large ring to the small one.\nStep 3: Now the seven-membered ring has six electrons and a positive charge, the tropylium pattern, and the five-membered ring has six electrons and a negative charge, the cyclopentadienyl anion pattern. Both aromatic.\nStep 4: This zwitterionic form is unusually low in energy for a charge-separated structure, so it contributes measurably, and the dipole points with its negative end on the five-membered ring, which is confirmed by electrophiles attacking the five-membered ring (at C1) and nucleophiles the seven-membered ring.",
      "note": "Naphthalene has no comparable form: shifting a pair between its two identical rings would make one a four-electron cation and the other an eight-electron anion, both bad, so it stays nonpolar. Azulene's colour comes from a small HOMO-LUMO gap that is also a consequence of the two-ring polarisation: the same ten electrons as naphthalene, arranged so that the frontier orbitals sit largely on different rings.",
      "options": {
        "A": "Correct. A tropylium cation fused to a cyclopentadienyl anion gives two aromatic sextets in one charge-separated form, so that form contributes and the molecule is polar with its negative end on the five-membered ring.",
        "B": "All ten carbons of azulene are sp2, and the molecule is planar and fully conjugated; an sp3 carbon would destroy the aromaticity that is the whole basis of the argument.",
        "C": "The charges are the wrong way round. A cyclopentadienyl cation (four electrons) and a cycloheptatrienyl anion (eight electrons) would both be antiaromatic, so that polarisation is negligible; the observed dipole has the five-membered ring negative.",
        "D": "Azulene is aromatic, not a localised polyene, and bond alternation between identical carbons could not produce a molecular dipole in any case. Polarity requires net charge on one ring."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A seven-membered ring fused to a five-membered ring, drawn with five double bonds."
  },
  {
    "question_id": "ch15_q50_huckel_rule_polycyclic",
    "topic": "Polycyclic Aromatic Hydrocarbons",
    "difficulty_level": "Medium",
    "question_text": "Does Hückel's $(4n+2)$ rule strictly apply to polycyclic aromatic hydrocarbons like naphthalene, anthracene, and phenanthrene?",
    "question_smiles": "c1ccc2ccccc2c1",
    "options": [
      {
        "option_id": "A",
        "text": "No. Hückel's rule strictly applies only to monocyclic systems, although naphthalene (10 $\\pi$ electrons) and anthracene (14 $\\pi$ electrons) happen to fit the $(4n+2)$ formula numerically.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Yes. Hückel's rule is a universal law that applies to all planar conjugated systems, regardless of the number of rings.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "No. Hückel's rule applies only to heterocyclic systems.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Yes. Every polycyclic aromatic hydrocarbon has a $4n+2$ total, and pyrene's 16 $\\pi$ electrons show that pyrene is not aromatic.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The 4n+2 rule was derived for a single ring of atoms, each contributing one p orbital, and it is exact only there. For fused systems the total electron count often happens to be 4n+2, naphthalene with ten and anthracene with fourteen, and students take that as the rule working, but pyrene with sixteen is aromatic too. Aromaticity in polycycles is judged ring by ring or by the perimeter, not by the total.",
      "approach": "Step 1: Naphthalene: 10 electrons, 4n+2. Anthracene and phenanthrene: 14, 4n+2. So far the total count agrees.\nStep 2: Pyrene: four fused rings, 16 pi electrons, a 4n total, yet it is a stable, planar, fully aromatic hydrocarbon with a ring current.\nStep 3: Resolve it: pyrene's 14-carbon perimeter carries 14 electrons, a 4n+2 count, with the two internal carbons and their pair treated separately; alternatively count sextets ring by ring.\nStep 4: Conclusion: the total-electron form of the rule is reliable only for monocycles; for polycycles it is a heuristic that works for the simplest cases and fails for pyrene.",
      "note": "This is why the chapter's polycyclic examples are argued with resonance structures and intact sextets rather than with the 4n+2 count. Heterocycles are a different matter: a monocyclic heterocycle such as pyridine or pyrrole is exactly the case the rule was made for, once the heteroatom's contribution is counted correctly.",
      "options": {
        "A": "Correct. The rule is rigorous for monocycles; naphthalene and anthracene fit numerically, but pyrene's sixteen electrons show that the total count is not the criterion for fused rings.",
        "B": "Pyrene is the counterexample: sixteen electrons, a 4n total, and fully aromatic. A universal law would have to call it antiaromatic.",
        "C": "Heterocycles are governed by the rule exactly when they are monocyclic, with the heteroatom's lone pair counted or not according to its orbital; the restriction is to single rings, not to a class of atoms.",
        "D": "Pyrene's sixteen electrons make it a 4n system by total count, and it is nonetheless aromatic, which is the evidence against applying the total-count rule to polycycles, not for it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Naphthalene: two benzene rings sharing an edge."
  },
  {
    "question_id": "ch15_q_dynamic_aromaticity_check",
    "topic": "Benzene and Aromaticity",
    "difficulty_level": "Medium",
    "question_text": "Match each cyclic structure to its aromaticity classification.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "c1ccccc1",
        "correctAnswer": "Aromatic",
        "alt": "A six-membered ring with three alternating double bonds."
      },
      {
        "smiles": "C1=CC=CCC1",
        "correctAnswer": "Non-aromatic: conjugation interrupted by an sp3 carbon",
        "alt": "A six-membered ring with two conjugated double bonds and two CH2 carbons."
      },
      {
        "smiles": "C1=CC=CC=CC=C1",
        "correctAnswer": "Non-aromatic: 4n electrons, non-planar",
        "alt": "An eight-membered ring with four alternating double bonds."
      },
      {
        "smiles": "[C-]1([H])C=CC=C1",
        "correctAnswer": "Aromatic",
        "alt": "A five-membered ring with two double bonds and a negatively charged carbon."
      },
      {
        "smiles": "C1=CC=C1",
        "correctAnswer": "Antiaromatic: planar, 4n electrons",
        "alt": "A square four-membered ring with two double bonds."
      }
    ],
    "match_options": [
      "Aromatic",
      "Antiaromatic: planar, 4n electrons",
      "Non-aromatic: conjugation interrupted by an sp3 carbon",
      "Non-aromatic: 4n electrons, non-planar"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect classification",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Five rings, three verdicts. The procedure is the same for each: is there a closed loop of p orbitals, is it planar, and how many electrons are in it? Two of the five are aromatic, one is antiaromatic, and two are non-aromatic for different reasons, one because an sp3 carbon breaks the loop and one because a 4n ring has folded out of planarity.",
      "approach": "Step 1: Benzene: loop, planar, six electrons. Aromatic.\nStep 2: 1,3-Cyclohexadiene: two CH2 carbons, no loop. Non-aromatic.\nStep 3: Cyclooctatetraene: a loop of eight sp2 carbons but eight electrons, a 4n count; the molecule is a tub, not planar. Non-aromatic.\nStep 4: Cyclopentadienyl anion: five sp2 carbons, four electrons from the double bonds plus two from the lone pair, six. Aromatic.\nStep 5: Cyclobutadiene: four sp2 carbons in a ring too small to fold, four electrons. Antiaromatic.",
      "note": "Non-aromatic covers two situations worth keeping apart: a ring that never had a complete loop (cyclohexadiene) and a 4n ring that has a loop on paper but escapes it by twisting (cyclooctatetraene). Only a ring that is held planar with a 4n count, like cyclobutadiene, earns the label antiaromatic.",
      "options": {
        "A": "Correct. Benzene and the cyclopentadienyl anion are six-electron aromatic loops; cyclohexadiene has no loop; cyclooctatetraene is a folded 4n ring; planar cyclobutadiene is the antiaromatic case.",
        "B": "At least one ring is misclassified. Check first whether every ring atom is sp2, then whether the ring is planar, and only then count the electrons, including any lone pair sitting in a p orbital."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch15_q51_elucidation_cumene",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound X is a colourless liquid, insoluble in water and in aqueous NaOH. Combustion analysis gives C 89.9% and H 10.1% by mass. It does not decolourise bromine in $\\text{CH}_2\\text{Cl}_2$ in the dark. IR: $3030\\text{ cm}^{-1}$ (medium), 2965 (strong), 1605 and 1495 (medium), and two strong bands at 760 and $700\\text{ cm}^{-1}$; nothing above 3100 or between 1650 and 1800. Mass spectrum: $\\text{M}^+$ at $m/z = 120$, base peak at 105, smaller peaks at 77 and 51. The $^1\\text{H}$ NMR spectrum is shown. Which structure is X?",
    "question_smiles": "",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 7.22,
          "y": 5,
          "label": "multiplet"
        },
        {
          "x": 2.9,
          "y": 1,
          "label": "septet"
        },
        {
          "x": 1.25,
          "y": 6,
          "label": "doublet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Isopropylbenzene (cumene)",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propylbenzene",
        "smiles": "CCCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Ethyl-4-methylbenzene",
        "smiles": "CCc1ccc(C)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,3,5-Trimethylbenzene (mesitylene)",
        "smiles": "Cc1cc(C)cc(C)c1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An aromatic unknown is sorted by three things in turn: the formula and its unsaturation count, which says whether a benzene ring is present; the substitution pattern, read from the ring-proton region of the NMR and from the out-of-plane bending bands of the IR; and the side chain, read from the aliphatic multiplicities. Here the count gives four degrees of unsaturation, the 5H aromatic multiplet and the 760/700 pair say monosubstituted, and a septet coupled to a 6H doublet says isopropyl.",
      "approach": "Step 1: Formula. Per 100 g: C 89.9/12.01 = 7.49 mol, H 10.1/1.008 = 10.0 mol; ratio 1 : 1.34 = 3 : 4, empirical formula C3H4 (40). M+ at 120 is three times that: C9H12. Unsaturation = (2 x 9 + 2 - 12)/2 = 4.\nStep 2: Four degrees of unsaturation with no bromine uptake and no C=O, O-H or C≡C bands means a benzene ring (three double bonds and a ring) and a saturated side chain. IR 3030 (aromatic C-H) with 1605 and 1495 (ring stretches) agrees.\nStep 3: Substitution pattern. Five aromatic hydrogens in one multiplet at 7.22 and strong bands at 760 and 700 are the monosubstituted signature. So C6H5-C3H7.\nStep 4: The side chain. A 1H septet at 2.90 coupled to a 6H doublet at 1.25 is a CH flanked by two equivalent methyls: isopropyl. X is isopropylbenzene, cumene. In the mass spectrum, loss of a methyl radical from the benzylic carbon gives the base peak at 105 (a secondary benzylic cation, C8H9+); 77 is C6H5+ and 51 is its loss of acetylene.",
      "note": "The base peak decides between the two monosubstituted candidates even without the NMR: cumene's benzylic carbon loses CH3 to give the stabilised C8H9+ at 105, whereas propylbenzene cleaves its benzylic bond to lose an ethyl radical and gives the tropylium ion at 91 as base peak. The 77 and 51 pair is the phenyl cation and its acetylene-loss fragment, the general marker of a monosubstituted ring in a mass spectrum.",
      "options": {
        "A": "Correct. C9H12 with four degrees of unsaturation, a 5H aromatic multiplet and the 760/700 monosubstituted IR pair, an isopropyl septet-doublet pattern, and a base peak at 105 from loss of a benzylic methyl.",
        "B": "Propylbenzene has the right formula and the monosubstituted pattern, but its side chain gives a 2H triplet near 2.6, a 2H sextet near 1.6 and a 3H triplet near 0.9, never a septet; and its base peak is the tropylium ion at 91, not 105.",
        "C": "1-Ethyl-4-methylbenzene is C9H12, but a para-disubstituted ring shows a 4H pattern near 7.1 and a single strong IR band near 810, not the 760/700 pair; its side chains give a quartet, a singlet and a triplet, not a septet and a doublet.",
        "D": "Mesitylene is C9H12 but has only three ring hydrogens (a singlet near 6.8) and nine methyl hydrogens as one singlet near 2.3; nothing in it couples, and its IR lacks the 760 band of a monosubstituted ring."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch15_q52_elucidation_bromoethylbenzene",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound Y is a colourless liquid. Combustion analysis gives C 51.9%, H 4.9% and Br 43.2% by mass. It does not decolourise bromine in $\\text{CH}_2\\text{Cl}_2$ in the dark and gives no precipitate with ethanolic silver nitrate, even on warming. IR: 3030, 2965, 1590 and $1490\\text{ cm}^{-1}$, a strong band at $820\\text{ cm}^{-1}$, and nothing at 690 or $750\\text{ cm}^{-1}$. Mass spectrum: molecular ions of equal intensity at $m/z = 184$ and 186, and base peaks of equal intensity at 169 and 171. The $^1\\text{H}$ NMR spectrum is shown. Which structure is Y?",
    "question_smiles": "",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 7.38,
          "y": 2,
          "label": "doublet"
        },
        {
          "x": 7.05,
          "y": 2,
          "label": "doublet"
        },
        {
          "x": 2.6,
          "y": 2,
          "label": "quartet"
        },
        {
          "x": 1.21,
          "y": 3,
          "label": "triplet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-Bromo-4-ethylbenzene",
        "smiles": "CCc1ccc(Br)cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Bromo-2-ethylbenzene",
        "smiles": "CCc1ccccc1Br",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-(Bromomethyl)-4-methylbenzene",
        "smiles": "Cc1ccc(CBr)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(1-Bromoethyl)benzene",
        "smiles": "CC(Br)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A bromine shows itself twice before any structure is drawn: in the elemental analysis and in the pair of molecular ions two mass units apart with equal intensity, since 79Br and 81Br are equally abundant. Where the bromine sits, on the ring or on the side chain, is what the silver nitrate test settles: benzylic bromides ionise and precipitate AgBr at once, aryl bromides never do. The rest is the substitution pattern, two doublets and a single strong band near 820 for para, and an ethyl group's quartet and triplet.",
      "approach": "Step 1: Formula. Per 100 g: C 51.9/12.01 = 4.32, H 4.9/1.008 = 4.86, Br 43.2/79.90 = 0.541; divide by 0.541: C 8.0, H 9.0, Br 1. C8H9Br, mass 184 with 79Br and 186 with 81Br, matching the doublet of molecular ions. Unsaturation = (2 x 8 + 2 - 9 - 1)/2 = 4: a benzene ring.\nStep 2: Place the bromine. No AgBr with ethanolic AgNO3 means the C-Br bond is not benzylic or otherwise ionisable; it is on the ring. Aryl bromides are inert to both SN1 and SN2.\nStep 3: Substitution pattern. Two 2H doublets at 7.38 and 7.05 (the pattern of a 1,4-disubstituted ring, the hydrogens next to bromine downfield) and a single strong IR band at 820 with nothing at 690 or 750: para.\nStep 4: The other substituent has two carbons and five hydrogens: a 2H quartet at 2.60 and a 3H triplet at 1.21, an ethyl group on the ring. Y is 1-bromo-4-ethylbenzene. The base peak at 169/171, still carrying bromine, is loss of CH3 from the benzylic carbon to give the bromine-bearing benzylic cation.",
      "note": "The 1:1 molecular-ion pair is the fastest possible diagnosis of one bromine; two bromines would give a 1:2:1 triplet and one chlorine a 3:1 pair. That the base peak keeps the 1:1 pattern is itself structural information: the fragment lost, CH3, did not contain the bromine, so bromine and the ethyl group are on different carbons. A benzylic bromide would instead lose Br as its first and easiest fragmentation and show a bromine-free base peak.",
      "options": {
        "A": "Correct. C8H9Br with a ring, an aryl bromide inert to AgNO3, a para pattern of two doublets and an 820 band, and an ethyl quartet-triplet; the base peak at 169/171 is loss of a benzylic methyl with bromine retained.",
        "B": "1-Bromo-2-ethylbenzene has the same formula, but an ortho-disubstituted ring shows four distinct aromatic hydrogens between 7.0 and 7.6 and a strong band near 750; the two clean 2H doublets and the 820 band rule it out.",
        "C": "1-(Bromomethyl)-4-methylbenzene is para and C8H9Br, but its side chains are a 2H singlet near 4.5 (CH2Br) and a 3H singlet near 2.35, with no quartet or triplet, and as a benzylic bromide it gives an immediate AgBr precipitate with ethanolic silver nitrate.",
        "D": "(1-Bromoethyl)benzene is a monosubstituted ring (5H multiplet, IR bands at 760 and 700) with a 1H quartet near 5.2 and a 3H doublet near 2.0; being benzylic, it ionises in ethanolic AgNO3, and its mass spectrum has a bromine-free base peak at 105."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch15_q53_aromatic_ion_identification",
    "topic": "Aromatic Ions",
    "difficulty_level": "Hard",
    "question_text": "Which of the following ions is aromatic?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclononatetraenyl anion",
        "smiles": "[C-]1([H])C=CC=CC=CC=C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclopentadienyl cation",
        "smiles": "C1=CC=C[CH+]1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cycloheptatrienyl anion",
        "smiles": "[C-]1([H])C=CC=CC=C1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclopropenyl anion",
        "smiles": "[C-]1([H])C=C1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Every ion here is a ring of sp2 carbons with a continuous set of p orbitals, so the structural criteria are met on paper and the question reduces to counting. Each double bond contributes two electrons, a carbanion's lone pair contributes two, and a carbocation's empty p orbital contributes none. Only a total of 4n+2 makes the ion aromatic; the three 4n ions are antiaromatic if planar and twist or pyramidalise to avoid it.",
      "approach": "Step 1: Cyclononatetraenyl anion: four double bonds (8) plus one lone pair (2) = 10. 4n+2 with n = 2. Aromatic, and the nine-membered ring is large enough to be nearly planar, with 140 degree angles close to the 120 that sp2 carbon prefers.\nStep 2: Cyclopentadienyl cation: two double bonds (4) plus an empty orbital (0) = 4. 4n. Antiaromatic.\nStep 3: Cycloheptatrienyl anion: three double bonds (6) plus a lone pair (2) = 8. 4n. Antiaromatic if planar; the real ion is non-planar.\nStep 4: Cyclopropenyl anion: one double bond (2) plus a lone pair (2) = 4. 4n. Antiaromatic if planar. The only Hückel count is the ten of the nine-membered anion.",
      "note": "The cyclononatetraenyl anion is real: cyclononatetraene is deprotonated by base far more easily than an ordinary polyene, for the same reason cyclopentadiene is, and the all-cis anion is planar with a ring current in its NMR spectrum. A pattern for the whole series: odd rings alternate, the cation aromatic for 3 and 7, the anion for 5 and 9, because adding two carbons changes the electron count by two and switches which charge gives 4n+2.",
      "options": {
        "A": "Correct. Ten pi electrons, eight from the four double bonds and two from the carbanion lone pair, in a planar nine-membered loop: 4n+2 with n = 2.",
        "B": "Four electrons: the two double bonds supply four and the cationic carbon's empty p orbital none. A 4n count in a planar five-membered loop is antiaromatic, which is why this cation is so hard to generate.",
        "C": "Eight electrons: six from three double bonds plus two from the lone pair. 4n, so the planar ion would be antiaromatic; it folds instead and is non-aromatic, and cycloheptatriene is correspondingly a weak acid.",
        "D": "Four electrons: two from the double bond plus two from the lone pair, in a three-membered loop. Antiaromatic if planar; the anion pyramidalises to escape, and cyclopropene is one of the weakest carbon acids known."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch15_q54_c13_symmetry_xylenes",
    "topic": "Spectroscopy of Aromatic Compounds",
    "difficulty_level": "Medium",
    "question_text": "Four isomers of $\\text{C}_8\\text{H}_{10}$ are shown. Which one shows exactly three signals in its $^{13}\\text{C}$ NMR spectrum?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "1,4-Dimethylbenzene (p-xylene)",
        "smiles": "Cc1ccc(C)cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,2-Dimethylbenzene (o-xylene)",
        "smiles": "Cc1ccccc1C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,3-Dimethylbenzene (m-xylene)",
        "smiles": "Cc1cccc(C)c1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethylbenzene",
        "smiles": "CCc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A 13C spectrum shows one signal for every set of symmetry-equivalent carbons, so the number of signals is a count of distinct carbon environments. In a substituted benzene the ring carbons are equivalent only when a symmetry element of the molecule exchanges them, and the more symmetric the substitution pattern, the fewer the signals. Para-disubstitution with two identical groups is the most symmetric arrangement of all, and it collapses eight carbons into three environments.",
      "approach": "Step 1: p-Xylene: a two-fold axis through C1 and C4 and the mirror planes make the two methyls equivalent, C1 and C4 equivalent, and C2, C3, C5 and C6 all equivalent. Three signals: CH3 (about 21 ppm), the two ipso carbons (about 135) and the four CH carbons (about 129).\nStep 2: o-Xylene: the mirror plane bisecting the C1-C2 bond gives methyls, C1/C2, C3/C6 and C4/C5. Four signals.\nStep 3: m-Xylene: the mirror plane through C2 and C5 gives methyls, C1/C3, C2, C4/C6 and C5. Five signals.\nStep 4: Ethylbenzene: CH3, CH2, ipso, ortho pair, meta pair, para. Six signals. Only p-xylene reaches three.",
      "note": "The same count applies to 1H spectra, where p-xylene's four ring hydrogens are one singlet, and it is the quickest way to tell the three xylenes apart without any coupling analysis: three, four and five carbon signals for para, ortho and meta. Aromatic carbons appear between 110 and 150 ppm, so the three-signal spectrum of p-xylene has two lines in that region and one near 21.",
      "options": {
        "A": "Correct. High symmetry makes all four CH carbons equivalent and both ipso carbons equivalent: methyl, ipso and CH, three signals.",
        "B": "o-Xylene has four environments: the methyls, the two methyl-bearing carbons, the two carbons next to them, and the two farthest away. Four signals.",
        "C": "m-Xylene's mirror plane passes through C2 and C5, leaving five environments: methyl, C1/C3, C2, C4/C6 and C5. Five signals.",
        "D": "Ethylbenzene has no equivalence beyond the ortho and meta pairs: CH3, CH2, ipso, ortho, meta and para carbons give six signals."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  }
];
