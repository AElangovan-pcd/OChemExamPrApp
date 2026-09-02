// OChemStudyBuddy - McMurry Chapter 13
// Author: A. Elangovan, PhD
var CH13_QUESTIONS = [
  {
    "question_id": "ch13_q1_equivalence_2_bromobutane",
    "topic": "1H NMR: Chemical Equivalence",
    "difficulty_level": "Medium",
    "question_text": "In the $^1\\text{H}$ NMR spectrum of 2-bromobutane, how are the two protons on the C3 carbon chemically classified, and how many total signals are observed for the molecule (neglecting hydroxyl or amine exchange)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Diastereotopic; 5 signals",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Enantiotopic; 4 signals",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Homotopic; 4 signals",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Diastereotopic; 4 signals",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two protons on the same carbon are equivalent only if some symmetry operation of the molecule exchanges them. The test that never fails is to replace one, then the other, by deuterium and compare the products: identical means homotopic, enantiomers means enantiotopic, diastereomers means diastereotopic. A CH2 next to a stereocenter always gives diastereomers, because the new center it creates has a fixed relationship to the one already there.",
      "approach": "Step 1: Locate the stereocenter. C2 of 2-bromobutane carries H, Br, CH3 and CH2CH3, four different groups.\nStep 2: Test the C3 protons. Replacing either one by D makes C3 a second stereocenter; the two products are (2R,3R) and (2R,3S), diastereomers. The C3 protons are therefore diastereotopic and can differ in shift.\nStep 3: Count the signals: C1 methyl (a doublet near 1.7), the C2 methine (a multiplet near 4.1), the two C3 protons (two separate multiplets near 1.8), and the C4 methyl (a triplet near 1.05). Five signals.\nStep 4: The C3 protons also couple to each other with a geminal J of about 14 Hz, so each is a complex multiplet rather than a clean quartet of doublets.",
      "note": "In practice the two C3 multiplets often overlap, so a low-field spectrum can look like four signals; the count of five is the count of distinct chemical environments, not of resolved humps. Enantiotopic protons, such as the CH2 of ethanol, are a different case: they are equivalent in any ordinary achiral solvent and give one signal.",
      "options": {
        "A": "Correct. C2 is a stereocenter, so replacing either C3 proton by deuterium gives a different diastereomer: the C3 protons are diastereotopic, and with the two methyls and the C2 methine the molecule has five proton environments.",
        "B": "Enantiotopic protons give enantiomers on deuterium substitution, which needs a CH2 with no stereocenter elsewhere, as in ethanol. The stereocenter at C2 makes the two C3 products diastereomers, not enantiomers, and the count is five, not four.",
        "C": "Homotopic protons are exchanged by a rotation axis, as the six protons of ethane are. Nothing in 2-bromobutane rotates one C3 proton onto the other, and the four-signal count would merge two environments that are distinct.",
        "D": "The classification is right but the count is not. If the C3 protons are diastereotopic they occupy two environments, and adding the two methyls and the methine gives five signals, not four."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q2_equivalence_cyclopropane",
    "topic": "1H NMR: Chemical Equivalence",
    "difficulty_level": "Hard",
    "question_text": "How many distinct $^1\\text{H}$ NMR signals are exhibited by trans-1,2-dichlorocyclopropane at room temperature?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "2 signals",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3 signals",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4 signals",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5 signals",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two protons give one signal when a symmetry operation of the molecule carries one onto the other. In a substituted small ring that operation may be a two-fold rotation axis rather than the mirror plane most students look for first, and the cis and trans isomers of a 1,2-disubstituted ring differ in exactly which element they have: the cis isomer has the mirror plane, the trans isomer has the axis.",
      "approach": "Step 1: Draw trans-1,2-dichlorocyclopropane: C1 and C2 each carry one chlorine, on opposite faces of the ring; C3 is a CH2.\nStep 2: Find the symmetry element. The molecule is chiral, so there is no mirror plane, but a C2 axis runs through C3 and the midpoint of the C1-C2 bond, lying in the plane of the ring.\nStep 3: Rotate 180 degrees about that axis. C1 goes to C2, so H1 and H2 are equivalent. The C3 proton on the top face goes to the C3 proton on the bottom face, so the two C3 protons are homotopic.\nStep 4: Two signals: the two CHCl protons near 3.1 ppm and the CH2 near 1.4 ppm. The CH2 protons share a shift yet each couples differently to H1 and H2, so the pattern is second order, but the count of environments is two.",
      "note": "The cis isomer is the one with three signals. Its mirror plane passes through C3 perpendicular to the ring, so H1 and H2 are equivalent, but one C3 proton lies cis to both chlorines and the other trans to both; those two are diastereotopic. A deuterium test settles it: replacing either C3 proton of the trans isomer gives the same compound, while doing so on the cis isomer gives two diastereomers.",
      "options": {
        "A": "Correct. The C2 axis through C3 exchanges H1 with H2 and the top C3 proton with the bottom one, leaving two environments: the CHCl pair and the CH2 pair.",
        "B": "Three signals is the count for the cis isomer, whose mirror plane leaves one C3 proton cis to both chlorines and the other trans. In the trans isomer the rotation axis exchanges the two C3 protons, so they collapse to one signal.",
        "C": "Four signals would treat H1, H2 and the two C3 protons as all different, which is the count for a ring with no symmetry at all, such as trans-1-bromo-2-chlorocyclopropane. The identical chlorines give this molecule a C2 axis.",
        "D": "The molecule has only four protons, so five signals is impossible however low the symmetry. The most any 1,2-dihalocyclopropane can show is four."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q3_chemical_shifts_ester",
    "topic": "1H NMR: Chemical Shifts",
    "difficulty_level": "Easy",
    "question_text": "Which of the following correctly orders the chemical shifts ($\\delta$, ppm) of the proton groups in methyl propanoate from most downfield (highest ppm) to most upfield (lowest ppm)?",
    "question_smiles": "CCC(=O)OC",
    "options": [
      {
        "option_id": "A",
        "text": "$-\\text{OCH}_3 > -\\text{CH}_2\\text{C}=\\text{O} > -\\text{CH}_2\\text{CH}_3$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$-\\text{CH}_2\\text{C}=\\text{O} > -\\text{OCH}_3 > -\\text{CH}_2\\text{CH}_3$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$-\\text{CH}_2\\text{CH}_3 > -\\text{OCH}_3 > -\\text{CH}_2\\text{C}=\\text{O}$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$-\\text{OCH}_3 > -\\text{CH}_2\\text{CH}_3 > -\\text{CH}_2\\text{C}=\\text{O}$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Chemical shift in the saturated region is set mostly by how close a proton sits to an electronegative atom. A proton on a carbon bonded directly to oxygen is deshielded by roughly two ppm; a proton on a carbon next to a carbonyl is deshielded by about one; a proton two bonds further out feels almost nothing. Ranking the groups of an ester is a matter of counting bonds to the oxygen.",
      "approach": "Step 1: Identify the three proton groups of methyl propanoate: the O-CH3, the CH2 between the carbonyl and the CH3, and the terminal CH3.\nStep 2: The O-CH3 is bonded directly to an oxygen, so it is furthest downfield, near 3.67 ppm.\nStep 3: The CH2 is on the carbon next to the carbonyl carbon (alpha to C=O), which places it near 2.33 ppm.\nStep 4: The terminal CH3 is beta to the carbonyl, so it sits near 1.14 ppm, close to an ordinary alkane methyl.\nStep 5: Order: O-CH3 (3.67) > CH2-C=O (2.33) > CH3 (1.14).",
      "note": "The same three values identify an ethyl ester turned around: in ethyl acetate the O-CH2 quartet is at 4.12 and the acetyl CH3 at 2.04. Which oxygen a group sits on matters more than which alkyl group it belongs to, so an ester's two sides are told apart by the 4-ppm O-CH2 or the 3.7-ppm O-CH3.",
      "options": {
        "A": "Correct. The methyl bonded to oxygen is most deshielded at 3.67 ppm, the methylene alpha to the carbonyl comes next at 2.33, and the terminal methyl, one bond further from the carbonyl, is least affected at 1.14.",
        "B": "This puts the carbonyl's alpha protons ahead of the O-CH3. A carbonyl deshields its neighbours by about one ppm; a directly bonded oxygen deshields by two, so the O-CH3 wins.",
        "C": "This places the terminal methyl most downfield. It is the group furthest from both oxygens and is the most shielded of the three, near 1.1 ppm.",
        "D": "The O-CH3 is correctly first, but the terminal methyl is placed ahead of the CH2 alpha to the carbonyl. The alpha CH2 at 2.33 is downfield of the beta CH3 at 1.14."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-carbon chain whose end carbon is double-bonded to one oxygen and single-bonded to a second oxygen that carries a methyl group."
  },
  {
    "question_id": "ch13_q4_diastereotopic_methyls",
    "topic": "1H NMR: Chemical Equivalence",
    "difficulty_level": "Hard",
    "question_text": "In the $^1\\text{H}$ NMR spectrum of 3-methyl-2-butanol, the two methyl groups attached to C3 appear as two distinct doublets. What is the fundamental stereochemical reason for this observation?",
    "question_smiles": "CC(C)[C@@H](C)O",
    "options": [
      {
        "option_id": "A",
        "text": "The adjacent C2 carbon is a stereocenter, which makes the two methyl groups diastereotopic and chemically non-equivalent.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The molecule exists as a stable mixture of cis and trans conformations that interconvert slowly on the NMR timescale.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Steric hindrance around the C3 carbon prevents rotation of the C-C bond, trapping the methyl groups in different environments.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Spin-spin coupling between the two methyl groups splits their signals into two doublets.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two methyl groups on the same carbon look interchangeable but need not be. If the carbon that carries them is bonded to a stereocenter, the two methyls are diastereotopic: swapping one for a labelled group gives a diastereomer, not the same compound. Diastereotopic groups can have different chemical shifts, and in an isopropyl group next to a stereocenter they usually do, by a few hundredths of a ppm.",
      "approach": "Step 1: Find the stereocenter. C2 of 3-methyl-2-butanol carries H, OH, CH3 and the isopropyl group.\nStep 2: Test the two C3 methyls. Replacing one by CD3 makes C3 a stereocenter too; the two products differ in configuration at C3 and are diastereomers. The methyls are diastereotopic.\nStep 3: Diastereotopic methyls have different environments, so each gives its own signal, and each is split into a doublet by the single C3 proton.\nStep 4: Expect two 3H doublets near 0.85 and 0.92 ppm, both with J of about 7 Hz, instead of one 6H doublet.",
      "note": "The same test explains why an isopropyl group in a molecule with no stereocenter, such as 2-propanol or 2-bromopropane, gives one 6H doublet: replacing either methyl gives enantiomers, so the methyls are enantiotopic and equivalent in an achiral solvent. Bond rotation is fast and irrelevant either way; it averages conformations, but no rotation can turn a diastereomer into its partner.",
      "options": {
        "A": "Correct. C2 is a stereocenter, so the two C3 methyls are diastereotopic; each has its own chemical shift, and each is a doublet from coupling to the C3 proton.",
        "B": "There are no cis and trans conformations of an open-chain molecule, and rotation about the C2-C3 bond is fast on the NMR timescale. What rotation cannot remove is the configurational relationship between each methyl and the C2 stereocenter.",
        "C": "Rotation about the C2-C3 bond is not hindered; an isopropyl group rotates freely at room temperature. Even if it were frozen, that would explain a split signal for a molecule without a stereocenter too, and 2-propanol shows one 6H doublet.",
        "D": "Coupling between the two methyls would need a three-bond path between their protons, and there is none: they are separated by four bonds. Each methyl is a doublet because of the one proton on C3, not because of the other methyl."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a methyl branch on the third carbon and a hydroxyl group on the second carbon, the carbinol carbon drawn with a wedge bond."
  },
  {
    "question_id": "ch13_q5_citric_acid_methylene",
    "topic": "1H NMR: Spin-Spin Splitting",
    "difficulty_level": "Hard",
    "question_text": "In the $^1\\text{H}$ NMR spectrum of citric acid in $\\text{D}_2\\text{O}$, the methylene ($-\\text{CH}_2-$) protons appear as an AB quartet (four lines) rather than a single singlet. What does this indicate about these protons?",
    "question_smiles": "OC(=O)CC(O)(CC(=O)O)C(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "They are diastereotopic due to the pro-chiral central carbon, making them non-equivalent and subject to geminal coupling.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "They are enantiotopic, but couple with the carboxylic acid protons.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "They are homotopic, but split by long-range allylic coupling.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "They are chemically equivalent but undergo slow rotational interconversion.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carbon that is not a stereocenter can still make the two protons of a neighbouring CH2 non-equivalent. The central carbon of citric acid carries OH, COOH and two CH2COOH arms: it is prochiral, meaning that changing either arm would make it a stereocenter. Within one arm, the two CH2 protons are diastereotopic, so they differ in shift and couple to each other through the two-bond geminal path.",
      "approach": "Step 1: Apply the deuterium test to one CH2 arm. Replacing either proton by D creates a stereocenter at that carbon and, because the two arms are now different, a stereocenter at the central carbon as well.\nStep 2: The two products differ in configuration at the CH2 carbon but not at the central carbon, so they are diastereomers. The two protons of each CH2 are diastereotopic.\nStep 3: Diastereotopic protons on the same carbon have different shifts and a geminal coupling, here about 15 Hz. Two protons coupling only to each other give an AB pattern: two doublets that lean toward each other, four lines in all.\nStep 4: The two arms are related by the mirror plane through the central carbon, so both CH2 groups give the same AB quartet, and the spectrum shows one four-line pattern near 2.7 to 2.9 ppm integrating to 4H.",
      "note": "The two CH2 arms of citric acid are enantiotopic, not diastereotopic: the mirror plane through the central carbon exchanges them. That is why aconitase, a chiral enzyme, can act on only one arm in the citric acid cycle while the NMR spectrum in an achiral solvent shows the two arms as one signal. The AB quartet arises within each arm, between its two protons.",
      "options": {
        "A": "Correct. The central carbon is prochiral, so the two protons of each CH2 are diastereotopic; they have different shifts and a geminal coupling near 15 Hz, giving the four-line AB pattern.",
        "B": "Enantiotopic protons are equivalent in an achiral solvent and cannot give an AB pattern, and in D2O the carboxylic acid protons have exchanged for deuterium and show no coupling at all.",
        "C": "Homotopic protons are equivalent and give a singlet. Allylic coupling needs a carbon-carbon double bond, and citric acid has none.",
        "D": "Rotation about the C-C bonds of citric acid is fast at room temperature. Slow exchange between conformers would broaden or double every signal, not produce the clean four-line pattern of two coupled protons at fixed shifts."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-carbon chain carrying a carboxylic acid group at each end and, on the middle carbon, both a hydroxyl group and a third carboxylic acid group."
  },
  {
    "question_id": "ch13_q6_equivalence_cyclobutanol",
    "topic": "1H NMR: Chemical Equivalence",
    "difficulty_level": "Medium",
    "question_text": "What is the stereochemical relationship between the two protons attached to C3 (the carbon opposite to the $-\\text{OH}$ group) in cyclobutanol?",
    "question_smiles": "OC1CCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Diastereotopic",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Enantiotopic",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Homotopic",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Constitutional",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "In a ring, every CH2 carbon has one proton on each face, and a substituent anywhere on the ring is on one face or the other. The two protons of a ring CH2 are therefore cis and trans to that substituent, and cis and trans relationships are configurational: no bond rotation or ring flip removes them. Such protons are diastereotopic even when the carbon carrying them is far from the substituent.",
      "approach": "Step 1: Apply the deuterium test to C3 of cyclobutanol, the carbon opposite the carbinol carbon. Replacing the proton on the same face as the OH gives cis-3-deuteriocyclobutanol; replacing the other gives the trans isomer.\nStep 2: Cis and trans isomers are diastereomers, so the two C3 protons are diastereotopic.\nStep 3: Diastereotopic protons may differ in chemical shift, and in a small ring the one cis to the hydroxyl usually does differ from the one trans to it by a few tenths of a ppm.\nStep 4: The same argument applies to C2 and C4, whose protons are also cis or trans to the OH; the ring has three CH2 environments (C2/C4 cis, C2/C4 trans, C3 cis and C3 trans) plus the carbinol H.",
      "note": "Enantiotopic ring protons need a CH2 whose two faces are related by a mirror plane through it, as in cyclobutane itself. Placing any substituent on a ring carbon breaks that plane for every CH2 in the ring, which is why ring compounds so often show more proton signals than a first count of carbons suggests.",
      "options": {
        "A": "Correct. One C3 proton is cis to the hydroxyl and the other trans; replacing them gives cis and trans deuterated isomers, diastereomers, so the protons are diastereotopic.",
        "B": "Enantiotopic protons give enantiomers on substitution, which requires a mirror plane through the CH2 relating its two faces. The hydroxyl on C1 sits on one face of the ring and removes that plane.",
        "C": "Homotopic protons are exchanged by a rotation axis. Cyclobutanol's only symmetry element is a mirror plane containing C1, C3, the OH and the two C3 protons, and that plane does not exchange them.",
        "D": "Constitutionally different protons are attached to different carbons or differ in connectivity. The two C3 protons are on the same carbon with the same connectivity; their difference is stereochemical."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-membered ring with a hydroxyl group on one of its carbons."
  },
  {
    "question_id": "ch13_q7_benzene_anisotropy",
    "topic": "1H NMR: Chemical Shifts",
    "difficulty_level": "Medium",
    "question_text": "Benzene exhibits a $^1\\text{H}$ NMR signal at $\\delta \\approx 7.27\\text{ ppm}$. Which statement best explains this downfield chemical shift compared to typical alkenes ($\\delta \\approx 4.5\\text{-}6.0\\text{ ppm}$)?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "The ring current induced by the external magnetic field generates a local magnetic field that reinforces the external field outside the ring, deshielding the aromatic protons.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The high electronegativity of the $sp^2$ hybridized carbons deshields the protons solely through inductive electron withdrawal.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Strong intermolecular hydrogen bonding between benzene rings deshields the aromatic protons.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The ring current generates a local magnetic field that opposes the external field outside the ring, causing the protons to feel a stronger effective magnetic field.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Pi electrons are mobile, and in an aromatic ring the applied field sets them circulating around the ring. That ring current produces its own small magnetic field, which opposes the applied field inside and above the ring but adds to it in the plane outside the ring, exactly where the ring protons sit. A proton that feels a larger total field resonates at a higher frequency, which is a downfield shift.",
      "approach": "Step 1: Compare with an alkene. A vinylic proton is on an sp2 carbon and already sits near 5 to 6 ppm; benzene's protons are also on sp2 carbons, so hybridization alone would put them in the same region.\nStep 2: Add the ring current. In the applied field the six pi electrons circulate, and the induced field they generate runs in the same direction as the applied field at the periphery of the ring.\nStep 3: The ring protons therefore feel a field larger than the applied one and resonate downfield of the alkene region, at 7.27 ppm.\nStep 4: The sign matters: the induced field opposes the applied field only inside and above the ring, which is why a proton held over an aromatic ring is shielded, sometimes to negative ppm.",
      "note": "McMurry calls this magnetic anisotropy: the shielding depends on where a proton sits relative to the pi system, not just on electron density. The same idea puts an aldehyde proton near 10 ppm (in the deshielding region of the C=O) and an acetylenic proton near 2.5 ppm (on the axis of the triple bond, in its shielding cone).",
      "options": {
        "A": "Correct. The circulating pi electrons induce a field that reinforces the applied field at the outside of the ring, where the protons are, so they feel a stronger field and resonate downfield near 7.3 ppm.",
        "B": "An sp2 carbon is somewhat electronegative, but an alkene has sp2 carbons too and its protons sit at 5 to 6 ppm. Induction cannot explain the extra 1.5 to 2 ppm; the ring current can.",
        "C": "Benzene has no O-H or N-H and forms no hydrogen bonds; its spectrum is the same in dilute solution as neat. The effect is intramolecular, from the ring's own electrons.",
        "D": "The direction is reversed. Where the induced field opposes the applied field (inside and above the ring) a proton is shielded; a proton feeling a stronger effective field is by definition in a region where the induced field reinforces the applied one."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered ring drawn with alternating double bonds."
  },
  {
    "question_id": "ch13_q8_deshielding_aldehyde",
    "topic": "1H NMR: Chemical Shifts",
    "difficulty_level": "Easy",
    "question_text": "The formyl proton of an aldehyde ($-\\text{CH}=\\text{O}$) typically appears at a very downfield chemical shift of $\\delta \\approx 9\\text{-}10\\text{ ppm}$. What two primary factors contribute to this extreme deshielding?",
    "question_smiles": "CC=O",
    "options": [
      {
        "option_id": "A",
        "text": "Strong inductive electron withdrawal by the electronegative oxygen atom and magnetic anisotropy from the C=O pi bond.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Intermolecular hydrogen bonding and the allylic coupling effect.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The presence of a nearby quaternary carbon and the heavy atom effect of the carbonyl.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "High $s$-character of the carbonyl carbon and the nuclear Zeeman spin-spin interaction.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two effects add up on an aldehyde proton. The carbonyl oxygen pulls electron density away from the C-H bond by induction, and the C=O pi bond has its own anisotropy: a proton lying in the plane of the carbonyl, roughly along the C=O axis, sits in the deshielding region of the induced field. Either effect alone would give a downfield shift; together they push the proton to 9 to 10 ppm, beyond nearly every other C-H.",
      "approach": "Step 1: Note what a vinylic C-H would give: an sp2 C-H with no heteroatom sits near 5 to 6 ppm.\nStep 2: Add induction. The carbonyl carbon is bonded to oxygen and carries a partial positive charge, which draws electrons out of the C-H bond and deshields the proton by a few ppm.\nStep 3: Add anisotropy. The aldehyde proton is held in the plane of the carbonyl, in the region where the pi electrons' induced field reinforces the applied field.\nStep 4: The sum lands near 9.7 ppm for an aliphatic aldehyde such as acetaldehyde and near 10.0 for benzaldehyde, and the signal is a small, sharp peak often split by the alpha protons.",
      "note": "The aldehyde proton is one of the most diagnostic signals in 1H NMR because almost nothing else sits between 9 and 10 ppm: a carboxylic acid O-H is further downfield still (10 to 12 ppm, broad) and a formate H-C(=O)O- appears near 8.1. The same anisotropy that deshields the aldehyde proton puts alpha protons of ketones and aldehydes near 2.1 to 2.4 ppm.",
      "options": {
        "A": "Correct. Inductive withdrawal by the carbonyl oxygen and the deshielding cone of the C=O pi bond both act on the formyl proton, which sits in the plane of the carbonyl.",
        "B": "Aldehydes have no O-H or N-H and do not hydrogen-bond to each other, and allylic coupling is a splitting effect of about 1 Hz, not a shift effect. Neither moves a proton by several ppm.",
        "C": "There is no quaternary carbon in a simple aldehyde, and the heavy-atom effect refers to iodine and bromine, which shield rather than deshield. Oxygen's influence is inductive, not a heavy-atom effect.",
        "D": "The carbonyl carbon is sp2, not sp, and spin-spin interactions cause splitting, not chemical shift. Zeeman splitting is the nuclear energy-level difference every proton shares, not a deshielding mechanism."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A two-carbon molecule whose end carbon is double-bonded to an oxygen and carries a single hydrogen."
  },
  {
    "question_id": "ch13_q9_alkyne_shielding",
    "topic": "1H NMR: Chemical Shifts",
    "difficulty_level": "Medium",
    "question_text": "Protons attached to $sp$ hybridized carbons in terminal alkynes appear at $\\delta \\approx 2.5\\text{ ppm}$, which is significantly more shielded than vinylic protons ($\\delta \\approx 4.5\\text{-}6.0\\text{ ppm}$), despite $sp$ carbons being more electronegative than $sp^2$ carbons. What is the explanation for this phenomenon?",
    "question_smiles": "C#CC",
    "options": [
      {
        "option_id": "A",
        "text": "The cylindrical cloud of pi electrons in the alkyne induces a local magnetic field that opposes the external field along the molecular axis, shielding the acetylenic proton.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The terminal alkyne proton is highly acidic and undergoes rapid exchange, which shifts its signal upfield.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The $sp$ hybridized carbon has lower electronegativity than expected due to orbital hybridization mismatch.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The C-H bond length in alkynes is exceptionally short, resulting in a large homolytic bond dissociation energy that shields the nucleus.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Electronegativity alone predicts the wrong order for sp, sp2 and sp3 C-H protons. Hybridization would put the acetylenic proton furthest downfield; it actually sits near 2.5 ppm, upfield of every vinylic proton. The reason is geometry: the pi electrons of a triple bond form a cylinder around the bond axis, and the terminal proton lies on that axis, where the induced field opposes the applied field.",
      "approach": "Step 1: Place the proton. In a terminal alkyne the C-H bond is collinear with the triple bond, so the proton sits on the axis of the pi cylinder.\nStep 2: Set the pi electrons circulating. With the bond axis parallel to the applied field the cylindrical pi cloud circulates around the axis, and the field it induces runs opposite to the applied field along the axis.\nStep 3: The proton on the axis therefore feels a smaller effective field and resonates upfield, near 2.5 ppm, despite the electronegative sp carbon.\nStep 4: Contrast the alkene: a vinylic proton lies in the plane of the pi bond, off its axis, in the region where the induced field reinforces the applied field, and appears at 5 to 6 ppm.",
      "note": "The shielding cone also explains why an alkyne proton's shift barely depends on the substituent at the other end, and why internal alkynes show nothing unusual: there is no proton on the axis. The acidity of the terminal C-H (pKa about 25) is a separate property, and it does not change the shift, since exchange with solvent is negligible in CDCl3.",
      "options": {
        "A": "Correct. The proton lies on the axis of the cylindrical pi cloud, where the field induced by the circulating pi electrons opposes the applied field, so the proton is shielded relative to a vinylic one.",
        "B": "A terminal alkyne is acidic only toward strong bases (pKa about 25); in CDCl3 it does not exchange at all. Exchange broadens or removes signals and would not systematically move one upfield by 3 ppm.",
        "C": "The sp carbon is the most electronegative of the three hybrids, which would deshield the proton. The observed upfield shift is in spite of the electronegativity, not because it is smaller than expected.",
        "D": "The alkyne C-H is indeed short and strong, but bond strength does not set chemical shift; the shielding comes from the induced magnetic field of the pi electrons, not from the sigma bond."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-carbon chain with a triple bond between the first two carbons; the terminal alkyne carbon carries a hydrogen."
  },
  {
    "question_id": "ch13_q10_haloalkanes_inductive",
    "topic": "1H NMR: Chemical Shifts",
    "difficulty_level": "Easy",
    "question_text": "Consider the series of ethyl halides: fluoroethane, chloroethane, bromoethane, and iodoethane. Which of the following trends correctly describes the chemical shift ($\\delta$, ppm) of the methylene ($-\\text{CH}_2-$) protons?",
    "question_smiles": "CCF",
    "options": [
      {
        "option_id": "A",
        "text": "Fluoride ($\\delta \\approx 4.4$) > Chloride ($\\delta \\approx 3.5$) > Bromide ($\\delta \\approx 3.4$) > Iodide ($\\delta \\approx 3.2$)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Iodide > Bromide > Chloride > Fluoride",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Chloride > Fluoride > Bromide > Iodide",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "All methylene protons appear at the same chemical shift because the halogen is too far removed.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A halogen deshields the protons on the carbon it is bonded to by pulling electron density out of the C-H bonds, and the size of the effect follows electronegativity: fluorine most, then chlorine, bromine and iodine. Among the ethyl halides the CH2 shift tracks that order, although the three heavier halogens are close together and the fluoride stands well apart.",
      "approach": "Step 1: Rank the halogens by electronegativity: F (4.0) > Cl (3.2) > Br (3.0) > I (2.7).\nStep 2: Read the CH2 shifts: fluoroethane about 4.4 ppm, chloroethane 3.5, bromoethane 3.4, iodoethane 3.2.\nStep 3: The order matches electronegativity, and the gap between F and Cl is much larger than the gaps below it, as the electronegativity differences are.\nStep 4: Note that the fluoride's CH2 is also split by the fluorine nucleus (spin 1/2, J about 47 Hz) into a doublet of quartets, which the other three halides do not show.",
      "note": "The trend flattens and then reverses for the heaviest halogens on carbon-13 shifts, where iodine's large, polarizable electron cloud shields the carbon it is bonded to (the heavy-atom effect); CH3I's carbon appears at -20 ppm. Proton shifts are less affected, so the simple electronegativity order holds for 1H.",
      "options": {
        "A": "Correct. The deshielding of the CH2 protons follows the electronegativity of the halogen, F > Cl > Br > I, with fluoride's 4.4 ppm well clear of the other three near 3.2 to 3.5.",
        "B": "This is the order of atomic size and polarizability, which governs leaving-group ability and the carbon-13 heavy-atom effect, but proton deshielding follows electronegativity, which runs the other way.",
        "C": "Chlorine is less electronegative than fluorine, so it cannot deshield the CH2 more; the fluoroethane CH2 at 4.4 ppm is nearly a full ppm downfield of the chloride's.",
        "D": "The halogen is bonded directly to the CH2 carbon, one bond from these protons, which is the closest a substituent can be. Its effect is large and differs by halogen; only the CH3 two bonds away is nearly indifferent."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A two-carbon chain with a fluorine atom on one end."
  },
  {
    "question_id": "ch13_q11_oh_shift_concentration",
    "topic": "1H NMR: Chemical Shifts",
    "difficulty_level": "Medium",
    "question_text": "The chemical shift of the hydroxyl ($-\\text{OH}$) proton in ethanol is highly variable ($\\delta \\approx 1\\text{-}5\\text{ ppm}$) and depends strongly on concentration, solvent, and temperature. What is the molecular basis for this variability?",
    "question_smiles": "CCO",
    "options": [
      {
        "option_id": "A",
        "text": "Hydrogen bonding decreases the electron density around the hydroxyl proton, causing it to appear downfield at higher concentrations.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethanol undergoes rapid unimolecular decomposition at high temperatures, producing acetaldehyde.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The oxygen atom changes its hybridization from $sp^3$ to $sp^2$ upon dilution, shielding the proton.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Intermolecular proton exchange is slower at lower concentrations, leading to a constant chemical shift.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A hydroxyl proton has no fixed chemical shift because its environment is not fixed. When an O-H hydrogen-bonds to another oxygen, electron density is drawn away from the proton and it is deshielded; the more of the time the proton spends hydrogen-bonded, the further downfield its averaged signal sits. Concentration, solvent and temperature all change that fraction, so the O-H shift wanders over several ppm.",
      "approach": "Step 1: Start dilute in CDCl3. Ethanol molecules rarely meet, most O-H groups are free, and the proton appears near 1 ppm.\nStep 2: Raise the concentration. More of the alcohol is hydrogen-bonded at any instant; exchange between free and bonded states is fast, so one averaged signal appears, now further downfield, near 4 to 5 ppm in neat ethanol.\nStep 3: Raise the temperature. Hydrogen bonds break, the free fraction rises, and the signal moves back upfield.\nStep 4: Change solvent. DMSO accepts a hydrogen bond from every O-H and locks the proton downfield near 4.3 ppm, where it even shows coupling to the CH2, because exchange is slowed.",
      "note": "The averaging is the key point: a single sharp signal at an intermediate position means the free and hydrogen-bonded states exchange faster than the NMR timescale, roughly a thousand times a second or more. Rapid exchange between alcohol molecules also erases the O-H to CH2 coupling in ordinary CDCl3 spectra, which is why ethanol's OH is usually a singlet.",
      "options": {
        "A": "Correct. A hydrogen-bonded O-H proton is deshielded, and the fraction of hydrogen-bonded molecules rises with concentration and falls with temperature, so the exchange-averaged signal moves accordingly.",
        "B": "Ethanol is stable to well above any NMR probe temperature; it does not decompose in the spectrometer. A new compound would give new signals, not a moving one.",
        "C": "The oxygen of an alcohol stays sp3 in solution at any concentration; hybridization is a property of the molecule, not of the mixture. Only the extent of intermolecular hydrogen bonding changes.",
        "D": "Exchange is indeed slower at low concentration, but that affects the coupling and line width of the O-H signal, not where it sits. The shift changes because the hydrogen-bonded fraction changes."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A two-carbon chain ending in a hydroxyl group."
  },
  {
    "question_id": "ch13_q12_d2o_shake",
    "topic": "1H NMR: Practical Methods",
    "difficulty_level": "Easy",
    "question_text": "When a drop of heavy water ($\\text{D}_2\\text{O}$) is added to a solution of an alcohol in $\\text{CDCl}_3$ and the $^1\\text{H}$ NMR spectrum is re-recorded, the $-\\text{OH}$ signal disappears. What chemical process is responsible for this observation?",
    "question_smiles": "CCO",
    "options": [
      {
        "option_id": "A",
        "text": "Rapid, reversible exchange of the acidic hydroxyl proton with deuterium, forming $\\text{R-OD}$ and $\\text{HOD}$, where deuterium ($^2\\text{H}$) does not resonate at the proton frequency.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Nucleophilic attack of deuterium oxide on the carbon bearing the hydroxyl group, displacing the $-\\text{OH}$ group.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The physical separation of the organic and aqueous layers, which extracts the alcohol into the aqueous phase.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The quenching of the magnetic field of the NMR spectrometer by the highly paramagnetic deuterium nucleus.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Protons on oxygen, nitrogen and sulfur exchange with their surroundings; protons on carbon do not. Shaking the sample with D2O swaps every exchangeable proton for deuterium, and deuterium resonates at a completely different frequency, so those signals vanish from the proton spectrum while every C-H signal stays. The D2O shake is the standard way to tell an O-H or N-H from a C-H at the same shift.",
      "approach": "Step 1: Record the spectrum in CDCl3: ethanol shows the triplet, the quartet and a broad O-H singlet.\nStep 2: Add a drop of D2O and shake. Proton transfer between R-OH and D2O is fast and reversible, and D2O is in large excess, so nearly every alcohol becomes R-OD, with HOD formed in return.\nStep 3: Re-record. The R-OD deuterium does not resonate at the proton frequency, so the O-H signal disappears; HOD gives a new peak near 4.7 ppm if the water layer is in the tube.\nStep 4: The C-H signals are unchanged, confirming that only the hydroxyl proton exchanged.",
      "note": "The shake also works for amine N-H, amide N-H (more slowly), thiol S-H and carboxylic acid O-H. It does not remove an aldehyde C-H or a terminal alkyne C-H even though both look unusual, because neither exchanges with water at a useful rate; that contrast is how an unknown's 9.8-ppm singlet is confirmed as an aldehyde.",
      "options": {
        "A": "Correct. The acidic O-H proton exchanges rapidly with D2O to give R-OD and HOD; deuterium resonates far from the proton frequency, so the O-H signal disappears while every C-H remains.",
        "B": "Water is a poor nucleophile and hydroxide is a poor leaving group; no substitution at carbon takes place under these conditions. The alcohol's carbon skeleton is untouched, as the unchanged C-H signals show.",
        "C": "A drop of D2O in CDCl3 does form a separate layer, but ethanol stays in the organic phase, where its C-H signals are still observed at full intensity. Only the O-H signal is lost, which extraction could not explain.",
        "D": "Deuterium is not paramagnetic, and nothing in the sample can quench the spectrometer's field. The signal is lost because the nucleus at that position is now deuterium, which the proton channel does not detect."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A two-carbon alcohol: a methyl, a methylene, and a terminal hydroxyl group."
  },
  {
    "question_id": "ch13_q13_integration_dimethoxybenzene",
    "topic": "1H NMR: Integration",
    "difficulty_level": "Easy",
    "question_text": "In the $^1\\text{H}$ NMR spectrum of 1,4-dimethoxybenzene, two singlets are observed. What is the ratio of the integrations of these two signals (aromatic signal : methoxy signal)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "2 : 3",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1 : 1",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3 : 2",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4 : 3",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Integration reports the relative number of protons under each signal, and a symmetrical molecule folds several protons into one signal. The task is to count how many protons each environment holds, then reduce the ratio. The reduced ratio is what the spectrum shows; the absolute counts have to be recovered from the molecular formula.",
      "approach": "Step 1: Draw 1,4-dimethoxybenzene. The two methoxy groups sit para to each other, so the ring has a two-fold axis and a mirror plane through both substituents.\nStep 2: The four ring protons are all equivalent (each is ortho to one OCH3 and meta to the other), giving one singlet near 6.85 ppm integrating to 4H.\nStep 3: The six methoxy protons are equivalent by the same symmetry, giving one singlet near 3.77 ppm integrating to 6H.\nStep 4: Aromatic : methoxy = 4 : 6 = 2 : 3.",
      "note": "The para pattern is the reason the ring protons are a singlet rather than the two doublets of a para-disubstituted ring with two different substituents. With identical substituents every ring proton is equivalent; with different ones, as in 4-methoxytoluene, the ring gives an AA'BB' pair of doublets near 6.8 and 7.1 ppm in a 2:2 ratio.",
      "options": {
        "A": "Correct. Four equivalent ring protons and six equivalent methoxy protons give a 4:6 ratio, which reduces to 2:3.",
        "B": "A 1:1 ratio would need equal numbers of ring and methoxy protons; the ring holds four and the two methoxy groups hold six.",
        "C": "This is the ratio reversed. The methoxy signal, at 3.77 ppm, is the larger one; the ring protons at 6.85 ppm are the smaller.",
        "D": "4:3 counts the four ring protons against a single methoxy group's three; there are two methoxy groups, so the methoxy signal integrates to six."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q14_pxylene_structure",
    "topic": "1H NMR: Structure Elucidation",
    "difficulty_level": "Medium",
    "question_text": "A hydrocarbon with molecular formula $\\text{C}_8\\text{H}_{10}$ displays exactly two singlets in its $^1\\text{H}$ NMR spectrum with an integration ratio of 2:3. What is the correct IUPAC name of this compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "1,4-Dimethylbenzene",
        "smiles": "Cc1ccc(C)cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,2-Dimethylbenzene",
        "smiles": "Cc1ccccc1C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethylbenzene",
        "smiles": "CCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,3-Dimethylbenzene",
        "smiles": "Cc1cccc(C)c1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Exactly two singlets is a strong statement: every proton in the molecule belongs to one of two environments, and neither has a coupled neighbour. For a C8H10 aromatic that rules out any ethyl group at once (its CH2 and CH3 couple) and rules out any ring whose protons are not all equivalent. Only the para-disubstituted ring with two identical substituents meets both conditions.",
      "approach": "Step 1: Compute the unsaturation: (2 x 8 + 2 - 10)/2 = 4, consistent with a benzene ring.\nStep 2: List the C8H10 aromatic isomers: ethylbenzene and the three xylenes.\nStep 3: Ethylbenzene has a quartet and a triplet; it cannot show two singlets. Eliminate it.\nStep 4: Among the xylenes, only the para isomer makes all four ring protons equivalent. The ortho and meta isomers each have two or three kinds of ring proton that couple to one another and appear as multiplets.\nStep 5: Check the ratio: p-xylene has 4 ring protons and 6 methyl protons, 4:6 = 2:3, matching the data.",
      "note": "The 2:3 ratio alone is not decisive, since o-xylene also has four ring protons and six methyl protons. What separates them is the shape of the aromatic signal: a singlet for para, a multiplet for ortho. When integration ratios tie, look at multiplicity next.",
      "options": {
        "A": "Correct. 1,4-Dimethylbenzene has four equivalent ring protons (one singlet near 7.05 ppm) and six equivalent methyl protons (one singlet near 2.3 ppm), in a 2:3 ratio.",
        "B": "1,2-Dimethylbenzene has the same 4:6 count, but its ring protons are of two kinds (H3/H6 and H4/H5) that couple to each other and give a multiplet near 7.1 ppm, not a singlet.",
        "C": "Ethylbenzene has three signals, and two of them are split: the CH2 is a quartet and the CH3 a triplet. It shows no 2:3 ratio of singlets.",
        "D": "1,3-Dimethylbenzene has three kinds of ring proton (H2, H4/H6 and H5) that split one another, giving several aromatic signals rather than one singlet."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q15_dichlorocyclohexane_symmetry",
    "topic": "1H NMR: Spin-Spin Splitting",
    "difficulty_level": "Hard",
    "question_text": "Why does trans-1,4-dichlorocyclohexane exhibit three distinct signals in its $^1\\text{H}$ NMR spectrum at room temperature, even though it undergoes rapid ring-flipping on the NMR timescale?",
    "question_smiles": "Cl[C@H]1CC[C@@H](Cl)CC1",
    "options": [
      {
        "option_id": "A",
        "text": "On each CH2 carbon one proton is cis to the nearer chlorine and the other is trans; that relationship is fixed by the configuration, so the two protons are diastereotopic and no ring flip can exchange them.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The two chair conformations are unequal in energy (diequatorial is favored over diaxial), so ring-flipping does not average the axial and equatorial methylene protons to equivalence.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ring flipping is frozen at room temperature by the steric bulk of the two chlorines, so each chair shows its own set of axial and equatorial protons.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "One chlorine is axial and the other equatorial at every instant, so H1 and H4 are non-equivalent and account for two of the three signals.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Ring flipping interconverts axial and equatorial positions, but it never changes which face of the ring a substituent is on. A proton that is cis to a chlorine stays cis through every flip. Two protons on the same ring carbon, one cis and one trans to a substituent, are therefore diastereotopic by configuration, and conformational averaging cannot make them equivalent.",
      "approach": "Step 1: Identify the environments. H1 and H4 are equivalent by the molecule's symmetry: one CHCl signal near 3.9 ppm.\nStep 2: Each of the four CH2 carbons carries one proton cis to the nearer chlorine and one trans. Replacing the cis proton by deuterium gives one diastereomer, replacing the trans proton gives another, so the two are diastereotopic.\nStep 3: The four CH2 carbons are all equivalent by symmetry, so their cis protons form one signal and their trans protons another, each integrating to 4H.\nStep 4: Three signals in total. Fast ring flipping averages each proton over its axial and equatorial positions, but it averages the cis protons among themselves and the trans protons among themselves, never one with the other.",
      "note": "The cis isomer shows three signals too, and its ring flip is degenerate (axial-equatorial to equatorial-axial, equal energies), which is the test that the chair populations are not the explanation. Cyclohexane itself gives one signal only because every proton is cis and trans to nothing; a single substituent anywhere on the ring is enough to make every CH2 pair diastereotopic.",
      "options": {
        "A": "Correct. The cis or trans relationship of each CH2 proton to the chlorine is configurational; the two protons on each carbon are diastereotopic, so the molecule has CHCl, CH2-cis and CH2-trans environments: three signals.",
        "B": "Unequal chair energies are real for the trans isomer, but they are not the reason. The cis isomer's two chairs are equal in energy and it also shows three signals, because its CH2 protons are just as diastereotopic.",
        "C": "Ring flipping of a dichlorocyclohexane is fast at room temperature, with a barrier near 10 kcal/mol; a frozen ring would show separate spectra for the two chairs and far more than three signals.",
        "D": "In the trans isomer both chlorines are equatorial or both axial at any instant, never one of each, and H1 and H4 are equivalent in either chair. The one-axial-one-equatorial description belongs to the cis isomer."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered ring with a chlorine on each of two opposite carbons, drawn with wedge bonds placing the two chlorines on opposite faces."
  },
  {
    "question_id": "ch13_q16_tert_butyl_acetate",
    "topic": "1H NMR: Structure Elucidation",
    "difficulty_level": "Medium",
    "question_text": "A compound with molecular formula $\\text{C}_6\\text{H}_{12}\\text{O}_2$ exhibits exactly two singlets in its $^1\\text{H}$ NMR spectrum with an integration ratio of 3:1. Which compound is consistent with this data?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "tert-Butyl acetate",
        "smiles": "CC(C)(C)OC(=O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Isopropyl propanoate",
        "smiles": "CCC(=O)OC(C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethyl isobutyrate",
        "smiles": "CC(C)C(=O)OCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyl 3-methylbutanoate",
        "smiles": "CC(C)CC(=O)OC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two singlets in a 3:1 ratio for twelve protons means nine protons in one environment and three in another, with no coupling anywhere. Nine equivalent protons with no neighbours is a tert-butyl group; three with no neighbours is a methyl on a carbonyl or an oxygen. Any isopropyl, ethyl or propyl fragment would bring split signals and is excluded by the word singlet.",
      "approach": "Step 1: Convert the ratio to counts. C6H12O2 has twelve protons; 3:1 means 9H and 3H.\nStep 2: A 9H singlet is a tert-butyl group, (CH3)3C-, attached to something with no protons, here an oxygen.\nStep 3: A 3H singlet is a methyl with no proton neighbours, here the acetyl CH3 on the carbonyl.\nStep 4: Assemble: CH3-C(=O)-O-C(CH3)3, tert-butyl acetate, with singlets near 1.45 (9H) and 1.97 (3H) ppm.\nStep 5: Check the alternatives each contain an ethyl or isopropyl group, whose protons couple and split.",
      "note": "Both singlets of tert-butyl acetate lie below 2 ppm, so this ester shows nothing in the 3.5 to 4.5 region where esters usually announce themselves. The reason is that the oxygen-bearing carbon is quaternary and has no protons. An unknown with no signal near 4 ppm can still be an ester if it is a tert-butyl ester.",
      "options": {
        "A": "Correct. The tert-butyl group gives a 9H singlet and the acetyl methyl a 3H singlet; neither has a coupled neighbour, and 9:3 reduces to 3:1.",
        "B": "Isopropyl propanoate has an isopropyl CH as a septet and its methyls as a doublet, plus an ethyl quartet and triplet: four signals, all split.",
        "C": "Ethyl isobutyrate has an O-CH2 quartet near 4.1 ppm, a methyl triplet, an isopropyl septet and a 6H doublet: four split signals and no singlet.",
        "D": "Methyl 3-methylbutanoate does have a singlet, the O-CH3 at 3.67 ppm, but its other nine protons are a 2H doublet, a 1H multiplet and a 6H doublet, not one 9H singlet."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q17_splitting_2_chloropropane",
    "topic": "1H NMR: Spin-Spin Splitting",
    "difficulty_level": "Easy",
    "question_text": "Predict the spin-spin splitting patterns and integrations for the signals in the $^1\\text{H}$ NMR spectrum of 2-chloropropane.",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "A doublet integrating for 6H, and a septet integrating for 1H.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A triplet integrating for 6H, and a quartet integrating for 1H.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Two doublets, each integrating for 3H, and a multiplet integrating for 1H.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A singlet integrating for 6H, and a singlet integrating for 1H.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The n + 1 rule counts the equivalent protons on the carbons adjacent to the one whose signal is being predicted. An isopropyl group is the textbook case: six equivalent methyl protons see one neighbour, and the single methine proton sees six. The two methyls are equivalent because a mirror plane through the C-Cl bond exchanges them.",
      "approach": "Step 1: Identify the proton sets of 2-chloropropane, (CH3)2CHCl: two equivalent methyls (6H) and one methine (1H).\nStep 2: Methyl protons: their carbon is bonded to C2, which carries one proton, so n = 1 and the signal is a doublet, integrating to 6H, near 1.5 ppm.\nStep 3: Methine proton: its carbon is bonded to two methyls carrying six equivalent protons, so n = 6 and the signal is a septet, integrating to 1H, near 4.1 ppm.\nStep 4: The two couplings are the same J, about 6.5 Hz, since they are the same three-bond path.",
      "note": "A septet's outer lines are small (1:6:15:20:15:6:1) and are often lost in the baseline, so an isopropyl methine can look like a quintet at low signal-to-noise. The 6H doublet is the more reliable flag for an isopropyl group; the 1H septet confirms it.",
      "options": {
        "A": "Correct. Six equivalent methyl protons coupled to one methine proton give a doublet (6H); the methine coupled to six protons gives a septet (1H).",
        "B": "A triplet for the methyls would need two protons on the neighbouring carbon, and a quartet for the methine would need three; the methine has one proton and the methyls six.",
        "C": "The two methyls are exchanged by the mirror plane through the C-Cl bond, so they are equivalent and give one 6H doublet, not two 3H doublets; the methine is a septet, not an undefined multiplet.",
        "D": "Singlets would require no protons on any adjacent carbon. The methyl carbons and the methine carbon are bonded to each other, so each set splits the other."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q18_pascal_ethyl_intensities",
    "topic": "1H NMR: Spin-Spin Splitting",
    "difficulty_level": "Easy",
    "question_text": "The ethyl group ($-\\text{CH}_2\\text{CH}_3$) exhibits a characteristic spin-spin coupling pattern. What are the splitting patterns and relative peak intensities within each multiplet for the $-\\text{CH}_2-$ and $-\\text{CH}_3$ groups respectively?",
    "question_smiles": "CCO",
    "options": [
      {
        "option_id": "A",
        "text": "$-\\text{CH}_2-$: quartet (1:3:3:1 ratio); $-\\text{CH}_3$: triplet (1:2:1 ratio)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$-\\text{CH}_2-$: triplet (1:2:1 ratio); $-\\text{CH}_3$: quartet (1:3:3:1 ratio)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$-\\text{CH}_2-$: doublet (1:1 ratio); $-\\text{CH}_3$: triplet (1:2:1 ratio)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$-\\text{CH}_2-$: quartet (1:4:4:1 ratio); $-\\text{CH}_3$: triplet (1:3:1 ratio)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When a proton is coupled to n equivalent neighbours, the n + 1 lines have intensities given by the coefficients of (a + b)^n, which are the rows of Pascal's triangle: 1:1, 1:2:1, 1:3:3:1. The intensities count the number of ways the neighbouring spins can add to each total, so the central lines are always the tallest.",
      "approach": "Step 1: The CH2 protons of an ethyl group have three neighbours on the CH3, so n = 3 and the signal has four lines: a quartet.\nStep 2: The row of Pascal's triangle for n = 3 is 1:3:3:1.\nStep 3: The CH3 protons have two neighbours on the CH2, so n = 2 and the signal has three lines: a triplet, with intensities 1:2:1.\nStep 4: Both patterns share one coupling constant, about 7 Hz, and the quartet sits downfield of the triplet because the CH2 is closer to whatever the ethyl group is attached to.",
      "note": "The intensity ratios are a check on an assignment: a four-line pattern with equal intensities is not a quartet but two doublets, or a doublet of doublets, which means two different coupling partners rather than three equivalent ones. Reading intensities as well as line counts separates the two cases.",
      "options": {
        "A": "Correct. The CH2, with three methyl neighbours, is a 1:3:3:1 quartet; the CH3, with two methylene neighbours, is a 1:2:1 triplet.",
        "B": "This swaps the two. The CH2 sees the three methyl protons and is the quartet; the CH3 sees the two methylene protons and is the triplet.",
        "C": "A doublet for the CH2 would need a single neighbouring proton; it has three. The triplet for the CH3 is right, the doublet for the CH2 is not.",
        "D": "The line counts are right but the intensities are not from Pascal's triangle. Three equivalent neighbours give 1:3:3:1 and two give 1:2:1; 1:4:4:1 and 1:3:1 are not binomial rows."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A methyl group joined to a methylene that carries a hydroxyl group."
  },
  {
    "question_id": "ch13_q19_complex_splitting_allyl_chloride",
    "topic": "1H NMR: Spin-Spin Splitting",
    "difficulty_level": "Hard",
    "question_text": "In the $^1\\text{H}$ NMR spectrum of allyl chloride (3-chloroprop-1-ene), the C2 vinylic proton ($-\\text{CH}=$, between the methylene and terminal vinyl group) couples to the two diastereotopic terminal protons (cis and trans) and the two equivalent protons of the $-\\text{CH}_2\\text{Cl}$ group. Assuming all coupling constants are fully resolved, what is the theoretical splitting pattern of the C2 proton?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Doublet of doublet of triplets (ddt)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Triplet of triplets (tt)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Multiplet of 16 lines with 1:1:1:1:1:1:1:1:1:1:1:1:1:1:1:1 intensity ratios",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Doublet of doublets of doublets (ddd)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When a proton has several sets of neighbours with different coupling constants, the n + 1 rule is applied one set at a time and the splittings multiply. Each set contributes (n + 1) lines, and the pattern is named from the largest coupling inward: a doublet of doublets of triplets means the largest J splits the signal in two, the next J splits each line again, and the smallest J makes each of those a triplet.",
      "approach": "Step 1: List the C2 proton's neighbours in CH2=CH-CH2Cl. On the terminal carbon: one proton trans to it (J about 17 Hz) and one cis (J about 10 Hz). On the CH2Cl carbon: two equivalent protons (J about 6.5 Hz).\nStep 2: The trans and cis protons are not equivalent to each other, so each is its own set of one: two doublet splittings, 17 Hz then 10 Hz.\nStep 3: The two CH2Cl protons are equivalent, so they form one set of two: a triplet splitting of 6.5 Hz.\nStep 4: Multiply: 2 x 2 x 3 = 12 lines, a doublet of doublets of triplets, ddt.",
      "note": "The trans coupling in an alkene is always larger than the cis coupling across the same double bond, which is how E and Z isomers of a disubstituted alkene are told apart: a 15 Hz vinylic doublet is trans, a 10 Hz one is cis. In allyl chloride both are present on the same proton, which is what makes its signal a good exercise.",
      "options": {
        "A": "Correct. Two non-equivalent vinylic neighbours give two doublet splittings, and the two equivalent CH2Cl protons give a triplet splitting: a doublet of doublets of triplets, twelve lines.",
        "B": "A triplet of triplets would need two pairs of equivalent neighbours. The cis and trans terminal protons are not equivalent to each other and have different coupling constants, so they cannot form a pair.",
        "C": "Sixteen equal lines would need four non-equivalent neighbours with four different couplings. The two CH2Cl protons are equivalent and share one J, so the pattern has twelve lines with unequal intensities.",
        "D": "A doublet of doublets of doublets counts only one of the two CH2Cl protons. Both couple to the C2 proton with the same J, and two equivalent neighbours give a triplet, not a doublet."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q20_coupling_tree_math",
    "topic": "1H NMR: Spin-Spin Splitting",
    "difficulty_level": "Hard",
    "question_text": "In a $^1\\text{H}$ NMR spectrum recorded on a $500\\text{ MHz}$ spectrometer, a proton appears as a doublet of doublets (dd) centered at $\\delta = 3.0\\text{ ppm}$ with coupling constants $J_1 = 12\\text{ Hz}$ and $J_2 = 4\\text{ Hz}$. What is the separation (in Hz) between the two outermost peaks, and the two innermost peaks, of this multiplet?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Outermost separation: $16\\text{ Hz}$; Innermost separation: $8\\text{ Hz}$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Outermost separation: $12\\text{ Hz}$; Innermost separation: $4\\text{ Hz}$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Outermost separation: $8\\text{ Hz}$; Innermost separation: $4\\text{ Hz}$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Outermost separation: $20\\text{ Hz}$; Innermost separation: $12\\text{ Hz}$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A doublet of doublets is built by splitting once with the larger coupling and then splitting each of those lines with the smaller one. The four lines sit at the centre plus or minus half of each J, so the outer pair are separated by the sum of the two couplings and the inner pair by their difference. Both separations are in hertz and do not depend on the spectrometer frequency.",
      "approach": "Step 1: Split the signal at 3.0 ppm by J1 = 12 Hz: two lines at +6 and -6 Hz from centre.\nStep 2: Split each line by J2 = 4 Hz: +6 becomes +8 and +4; -6 becomes -4 and -8.\nStep 3: The four lines are at +8, +4, -4 and -8 Hz.\nStep 4: Outermost separation: +8 to -8 = 16 Hz, which is J1 + J2. Innermost: +4 to -4 = 8 Hz, which is J1 - J2.\nStep 5: The 500 MHz figure is not needed for either answer; it would matter only if the separations were asked in ppm.",
      "note": "Reading a dd backwards uses the same arithmetic: the separation between lines 1 and 2 (or 3 and 4) is the smaller J, and between lines 1 and 3 (or 2 and 4) the larger J. If the two couplings happened to be equal the inner pair would coincide and the pattern would collapse to a 1:2:1 triplet, which is why a triplet can hide two different neighbours with the same J.",
      "options": {
        "A": "Correct. The lines lie at plus or minus (J1 + J2)/2 and plus or minus (J1 - J2)/2 from centre, so the outer pair are 16 Hz apart and the inner pair 8 Hz apart.",
        "B": "12 and 4 Hz are the couplings themselves, not the line separations. The outer lines are separated by the sum of the couplings and the inner lines by the difference.",
        "C": "8 Hz is the inner separation, and 4 Hz is the spacing between adjacent lines 1 and 2, not the innermost pair. The outer lines are 16 Hz apart.",
        "D": "These are 12 + 8 and 12, as if the smaller coupling were 8 Hz. With J2 = 4 Hz the sum is 16 and the difference is 8."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q21_spectrometer_frequency_effect",
    "topic": "1H NMR: Practical Methods",
    "difficulty_level": "Medium",
    "question_text": "The coupling constant ($J$) between two adjacent protons is measured as $8.0\\text{ Hz}$ on a $300\\text{ MHz}$ spectrometer. If the sample is re-analyzed on a $600\\text{ MHz}$ spectrometer, what will be the value of the coupling constant (in Hz) and the chemical shift difference (in ppm) between these two protons?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "$J = 8.0\\text{ Hz}$; the chemical shift difference (in ppm) remains constant.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$J = 16.0\\text{ Hz}$; the chemical shift difference (in ppm) doubles.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$J = 4.0\\text{ Hz}$; the chemical shift difference (in ppm) halves.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$J = 8.0\\text{ Hz}$; the chemical shift difference (in ppm) doubles.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Coupling is transmitted through the bonding electrons and its size, in hertz, is a property of the molecule alone; it is the same at any field. A chemical shift difference is proportional to the field, so it is constant in ppm (a field-independent ratio) but grows in hertz as the spectrometer frequency rises. That is the whole reason for buying a higher-field instrument: signals move apart in hertz while their multiplets stay the same width.",
      "approach": "Step 1: J at 600 MHz: unchanged, 8.0 Hz. The coupling depends only on the bonds between the two protons.\nStep 2: The chemical shift difference in ppm: unchanged, because ppm is already defined as a ratio to the spectrometer frequency.\nStep 3: The same difference in hertz doubles, since 1 ppm is 300 Hz at 300 MHz and 600 Hz at 600 MHz.\nStep 4: The multiplets therefore separate by twice as many hertz while each stays 8 Hz wide, and any second-order distortion at 300 MHz relaxes toward a clean first-order pattern at 600 MHz.",
      "note": "This is the test for whether a splitting is real coupling or two different shifts: record the spectrum at a second field. A separation in hertz that stays the same is J; one that scales with the field is a chemical shift difference. Two singlets 8 Hz apart at 300 MHz are 16 Hz apart at 600, whereas a doublet stays a doublet.",
      "options": {
        "A": "Correct. J is field-independent, so it stays 8.0 Hz, and the shift difference is unchanged in ppm because ppm divides by the operating frequency; only its value in hertz doubles.",
        "B": "Doubling J would mean coupling scales with the field. It does not; the 8.0 Hz separation within each multiplet is a molecular constant. The shift difference doubles in hertz, not in ppm.",
        "C": "Nothing halves at higher field. Coupling constants are unchanged and shift differences in ppm are unchanged; in hertz they grow.",
        "D": "J is correctly unchanged, but the shift difference in ppm cannot double: ppm is defined relative to the spectrometer frequency, which is exactly what makes it the same at any field."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q22_karplus_equation",
    "topic": "1H NMR: Spin-Spin Splitting",
    "difficulty_level": "Medium",
    "question_text": "According to the Karplus equation, which of the following vicinal proton dihedral angles ($\\theta$) typically results in the smallest coupling constant ($^3J_{\\text{HH}}$)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "$90^\\circ$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$0^\\circ$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$180^\\circ$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$60^\\circ$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A three-bond coupling is transmitted through the sigma electrons of the H-C-C-H path, and how well it is transmitted depends on the overlap of the two C-H bonds, which depends on the dihedral angle between them. The Karplus curve has the form J = A cos^2(theta) + C: largest when the bonds are anti (180 degrees), nearly as large when eclipsed (0 degrees), and close to zero when the two C-H bonds are perpendicular.",
      "approach": "Step 1: Recall the shape: J is roughly proportional to cos^2 of the dihedral angle.\nStep 2: Evaluate at each angle. cos^2(0) = 1, cos^2(60) = 0.25, cos^2(90) = 0, cos^2(180) = 1.\nStep 3: The minimum is at 90 degrees, where the two C-H bonds are perpendicular and the sigma overlap that carries the coupling is smallest; J is about 0 to 2 Hz there.\nStep 4: The maximum, 10 to 14 Hz, is at 180 degrees; 0 degrees gives 8 to 10 Hz and 60 degrees gives 2 to 4 Hz.",
      "note": "Rigid rings are where the Karplus relationship earns its keep. In a chair cyclohexane an axial-axial pair of vicinal protons is anti (180 degrees, J about 10 to 13 Hz) while axial-equatorial and equatorial-equatorial pairs are gauche (60 degrees, J about 2 to 5 Hz), so a large ring coupling identifies a trans-diaxial pair. In a freely rotating ethyl group the angles average and J is about 7 Hz.",
      "options": {
        "A": "Correct. At 90 degrees the two C-H bonds are perpendicular, cos^2 is zero, and the vicinal coupling falls to nearly nothing.",
        "B": "At 0 degrees the C-H bonds are eclipsed and overlap well; the coupling is large, 8 to 10 Hz. Only the sign of the cosine differs from the anti case, and the square removes it.",
        "C": "180 degrees is the anti arrangement and gives the largest vicinal coupling, 10 to 14 Hz, which is why trans-diaxial ring protons show wide doublets.",
        "D": "60 degrees is gauche and gives a small coupling of 2 to 4 Hz, but not the smallest; cos^2(60) is 0.25, whereas cos^2(90) is zero."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q23_allylic_coupling",
    "topic": "1H NMR: Spin-Spin Splitting",
    "difficulty_level": "Medium",
    "question_text": "In the $^1\\text{H}$ NMR spectrum of 2-methylpropene, the 6H methyl signal at $\\delta = 1.73\\text{ ppm}$ is not a clean singlet but a finely split triplet with $J \\approx 1.5\\text{ Hz}$, and the 2H $=\\text{CH}_2$ signal at $\\delta = 4.66\\text{ ppm}$ carries the same fine splitting. Which coupling produces it?",
    "question_smiles": "C=C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "Four-bond allylic coupling between the methyl protons and the $=\\text{CH}_2$ protons, transmitted through the $\\pi$ bond.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Three-bond vicinal coupling between the methyl protons and a proton on the alkene carbon that carries them.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Two-bond geminal coupling between the two $=\\text{CH}_2$ protons.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Coupling between the two methyl groups across the central carbon.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Coupling normally dies out beyond three bonds, but a pi bond in the path carries it one bond further. Allylic coupling, between a proton on a carbon next to a double bond and a proton on the far end of that double bond, spans four bonds (H-C-C=C-H) and is small, 0 to 3 Hz, so it shows as fine structure on a signal rather than as a clear multiplet.",
      "approach": "Step 1: Map the protons of 2-methylpropene, (CH3)2C=CH2: six methyl protons on carbons bonded to C2, and two protons on C1. C2 carries no proton.\nStep 2: Count the bonds between a methyl proton and a C1 proton: H-C(methyl)-C2=C1-H, four bonds, with the double bond in the path. That is the allylic path.\nStep 3: Apply n + 1 across it: each methyl proton sees the two C1 protons, so the methyl signal is a triplet with the small J; each C1 proton sees six methyl protons, so the =CH2 signal is a septet with the same J.\nStep 4: Check for anything larger: there is no proton on C2, so there is no three-bond coupling anywhere in the molecule, and the 1.5 Hz splitting is the only one seen.",
      "note": "Allylic coupling is why the methyl of a terminal alkene, or of a vinyl acetate, is a broadened or finely split singlet rather than a sharp one. The five-bond homoallylic coupling across a double bond (H-C-C=C-C-H) is smaller still, about 0 to 1 Hz, and usually appears only as line broadening.",
      "options": {
        "A": "Correct. The methyl protons and the =CH2 protons are four bonds apart with the double bond in between; that allylic path carries a coupling of about 1.5 Hz, splitting the methyl into a triplet and the =CH2 into a septet.",
        "B": "There is no proton on C2, the alkene carbon that carries the methyls, so there is no three-bond H-C-C-H path from the methyl protons and no vicinal coupling in the molecule.",
        "C": "The two =CH2 protons are equivalent (a mirror plane exchanges them), and equivalent protons do not split each other. Their geminal coupling exists but is not observed, and it could not affect the methyl signal in any case.",
        "D": "The two methyls are equivalent, so any coupling between them is invisible, and their protons are four bonds apart through a saturated carbon with no pi bond in the path, where coupling is close to zero."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A carbon bearing two methyl groups and a double bond to a terminal CH2."
  },
  {
    "question_id": "ch13_q24_geminal_coupling_range",
    "topic": "1H NMR: Spin-Spin Splitting",
    "difficulty_level": "Medium",
    "question_text": "In the $^1\\text{H}$ NMR spectrum of 1,2-dichloropropane, the two $\\text{CH}_2\\text{Cl}$ protons appear as separate doublets of doublets at $\\delta = 3.8$ and $3.6\\text{ ppm}$. Both share a coupling of $11\\text{ Hz}$; the second coupling is $5\\text{ Hz}$ for one proton and $7\\text{ Hz}$ for the other. Which assignment of the couplings is correct?",
    "question_smiles": "CC(Cl)CCl",
    "options": [
      {
        "option_id": "A",
        "text": "The $11\\text{ Hz}$ coupling is geminal ($^2J$) between the two $\\text{CH}_2\\text{Cl}$ protons; the $5$ and $7\\text{ Hz}$ couplings are vicinal ($^3J$) to the C2 proton and differ because the two protons have different average dihedral angles to it.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The $11\\text{ Hz}$ coupling is vicinal to the C2 proton; the $5$ and $7\\text{ Hz}$ couplings are the geminal couplings of each proton to the other.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The $11\\text{ Hz}$ coupling is a four-bond coupling to the methyl protons; the $5$ and $7\\text{ Hz}$ couplings are to the C2 proton.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The two protons are equivalent, and the two signals are the two halves of one doublet produced by the C2 proton.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two protons on the same sp3 carbon couple to each other through two bonds, and that geminal coupling is large, typically 12 to 18 Hz in magnitude, larger than most vicinal couplings. It is observed only when the two protons are non-equivalent, which happens whenever the CH2 sits next to a stereocenter. The tell-tale is a coupling that both protons share exactly, because a coupling constant is a property of the pair.",
      "approach": "Step 1: Recognize why the CH2Cl protons are two signals: C2 is a stereocenter, so the two are diastereotopic, with different shifts.\nStep 2: A coupling between two protons appears in both of their signals with the same value. Only the 11 Hz coupling is shared, so it is the coupling between the two CH2Cl protons: geminal.\nStep 3: Each CH2Cl proton also couples to the single C2 proton across three bonds. The two protons have different average dihedral angles to that proton, so their vicinal couplings differ, 5 Hz for one and 7 Hz for the other.\nStep 4: Each signal is a doublet of doublets: split 11 Hz by the geminal partner and 5 or 7 Hz by the C2 proton.",
      "note": "Geminal couplings are negative in sign, but a one-dimensional spectrum shows only their magnitude. Their size drops sharply for protons on an sp2 carbon: the two protons of a terminal =CH2 couple by only 0 to 3 Hz, so a wide doublet-of-doublets splitting on a saturated CH2 is a geminal coupling, and a narrow one on a vinyl group is not.",
      "options": {
        "A": "Correct. The coupling the two protons share is the one between them, the geminal 11 Hz; each also couples to the C2 proton with its own vicinal J, 5 or 7 Hz, set by its own dihedral angle.",
        "B": "A geminal coupling is between the two protons and must appear in both signals with the same value. Values of 5 and 7 Hz cannot both be the geminal coupling; the shared 11 Hz must be.",
        "C": "The methyl protons are four bonds from the CH2Cl protons through saturated carbons, where coupling is essentially zero, and six of them would give a septet, not a doublet.",
        "D": "The two signals are at different chemical shifts and each is itself a doublet of doublets, so they are two protons, not one doublet. Equivalent protons would give one signal split only by the C2 proton."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-carbon chain with a chlorine on the end carbon and a second chlorine on the middle carbon."
  },
  {
    "question_id": "ch13_q25_13c_equivalence_pxylene",
    "topic": "13C NMR: Chemical Equivalence",
    "difficulty_level": "Easy",
    "question_text": "How many signals are observed in the proton-decoupled $^{13}\\text{C}$ NMR spectrum of p-xylene (1,4-dimethylbenzene)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "3 signals",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4 signals",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5 signals",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "8 signals",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A proton-decoupled 13C spectrum shows one line per carbon environment, so counting signals is counting the sets of carbons that symmetry makes equivalent. A para-disubstituted benzene with two identical substituents has a two-fold axis through the substituents and mirror planes both in and perpendicular to the ring, which folds its eight carbons into three sets.",
      "approach": "Step 1: Draw p-xylene and mark its symmetry: the axis through C1 and C4 exchanges C2 with C6 and C3 with C5; the perpendicular mirror plane exchanges C1 with C4 and C2/C6 with C3/C5.\nStep 2: The two methyl carbons are exchanged by the same plane: one signal, near 21 ppm.\nStep 3: C1 and C4, the carbons bearing the methyls, are one set: near 134.7 ppm, weak because they carry no hydrogen.\nStep 4: C2, C3, C5 and C6 are one set: near 129.0 ppm.\nStep 5: Three signals.",
      "note": "The signal for C1/C4 is much weaker than the other aromatic line even though it represents two carbons; carbons with no attached hydrogen relax slowly and gain no nuclear Overhauser enhancement, so their peaks are small. Counting lines is safe, but reading intensities as carbon counts in 13C spectra is not.",
      "options": {
        "A": "Correct. The two methyls, the two substituted ring carbons and the four unsubstituted ring carbons each form one equivalent set: three lines.",
        "B": "Four would split one of the three sets, most often by counting C2/C6 and C3/C5 separately. The mirror plane perpendicular to the C1-C4 axis makes all four equivalent.",
        "C": "Five is the count for m-xylene, whose lower symmetry leaves three kinds of ring CH plus the substituted carbons and the methyls. The para isomer has only one kind of ring CH.",
        "D": "Eight counts every carbon as unique, which is the case only for a molecule with no symmetry. p-Xylene's axis and mirror planes reduce eight carbons to three sets."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q26_13c_equivalence_mxylene",
    "topic": "13C NMR: Chemical Equivalence",
    "difficulty_level": "Medium",
    "question_text": "How many signals are observed in the proton-decoupled $^{13}\\text{C}$ NMR spectrum of m-xylene (1,3-dimethylbenzene)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "3 signals",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "4 signals",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5 signals",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "6 signals",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A meta-disubstituted benzene keeps only one symmetry element, the mirror plane through C2 and C5 perpendicular to the ring. That plane exchanges the two substituted carbons with each other and C4 with C6, but C2 and C5 lie in the plane and are exchanged with nothing. The count is therefore higher than the para isomer's and lower than the ortho isomer's would be without its own plane.",
      "approach": "Step 1: Draw m-xylene with methyls on C1 and C3; the mirror plane passes through C2 and C5.\nStep 2: Methyl carbons: exchanged by the plane, one signal near 21.3 ppm.\nStep 3: C1 and C3: exchanged, one signal near 137.8 ppm (no hydrogen, weak).\nStep 4: C4 and C6: exchanged, one signal near 126.2 ppm.\nStep 5: C2 lies in the plane: its own signal near 130.0 ppm. C5 lies in the plane: its own signal near 128.2 ppm.\nStep 6: Five signals in all.",
      "note": "The three xylenes are told apart by 13C line count alone: para 3, meta 5, ortho 4 (ortho's plane through the C1-C2 and C4-C5 bond midpoints gives methyl, C1/C2, C3/C6 and C4/C5). The proton spectra are less decisive, since all three show aromatic multiplets near 7 ppm and a methyl singlet near 2.3.",
      "options": {
        "A": "Three is the para isomer's count, where every ring CH is equivalent. In the meta isomer C2, C4/C6 and C5 are three different kinds of ring CH.",
        "B": "Four is the ortho isomer's count. The meta isomer's single mirror plane leaves two ring carbons, C2 and C5, unpaired, so it has one more line.",
        "C": "Correct. Methyl, C1/C3, C2, C4/C6 and C5 are the five sets; the mirror plane through C2 and C5 pairs the others but leaves those two alone.",
        "D": "Six would count C4 and C6 separately. The mirror plane through C2 and C5 exchanges them, so they share one line near 126 ppm."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q27_13c_equivalence_norbornane",
    "topic": "13C NMR: Chemical Equivalence",
    "difficulty_level": "Hard",
    "question_text": "How many signals are observed in the proton-decoupled $^{13}\\text{C}$ NMR spectrum of bicyclo[2.2.1]heptane (norbornane)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "3 signals",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4 signals",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5 signals",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "7 signals",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A rigid bicyclic skeleton can be highly symmetrical even though it looks lopsided on paper. Norbornane has a two-fold axis through the one-carbon bridge and two mirror planes containing that bridge, one through the bridgeheads and one perpendicular to it. Those elements collapse seven carbons into three sets: the two bridgeheads, the four ethano-bridge carbons and the single methano bridge.",
      "approach": "Step 1: Number norbornane: C1 and C4 are the bridgeheads, C2/C3 and C5/C6 are the two two-carbon bridges, C7 is the one-carbon bridge.\nStep 2: The mirror plane containing C7, C1 and C4 exchanges C2 with C6 and C3 with C5; the plane containing C7 and perpendicular to it exchanges C1 with C4, C2 with C3 and C5 with C6.\nStep 3: Sets: bridgeheads C1/C4 (near 36.8 ppm), the four CH2 carbons C2/C3/C5/C6 (near 29.9 ppm), and C7 (near 38.7 ppm).\nStep 4: Three signals, and a DEPT-135 spectrum would show the first positive and the other two negative.",
      "note": "Put one substituent on C2 and every element of symmetry is lost: 2-norbornanol shows seven lines. Bicyclic counting problems are usually about spotting which plane survives, and the answer is often none.",
      "options": {
        "A": "Correct. The bridgeheads, the four two-carbon-bridge CH2 carbons and the one-carbon bridge are the three equivalent sets.",
        "B": "Four would separate the C2/C3 bridge from the C5/C6 bridge. The mirror plane through C7 and the bridgeheads exchanges the two bridges, so all four CH2 carbons are one set.",
        "C": "Five would count the two bridges as two sets and the two bridgeheads as two, ignoring both mirror planes; each plane pairs one of those.",
        "D": "Seven is the count for a norbornane with no symmetry, such as one bearing a substituent on C2. The parent hydrocarbon's two planes reduce seven carbons to three sets."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q28_diastereotopic_carbons",
    "topic": "13C NMR: Chemical Equivalence",
    "difficulty_level": "Hard",
    "question_text": "Why does 3-methyl-2-butanol exhibit 5 distinct signals in its $^{13}\\text{C}$ NMR spectrum, even though it has two methyl groups attached to the same carbon (C3)?",
    "question_smiles": "CC(C)[C@@H](C)O",
    "options": [
      {
        "option_id": "A",
        "text": "The adjacent C2 carbon is a stereocenter, making the two C3-methyl carbons diastereotopic and chemically non-equivalent.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The molecule exists as a mixture of enantiomers that are resolved by the achiral NMR solvent.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Spin-spin coupling between carbon nuclei ($^{13}\\text{C}$-$^{13}\\text{C}$) splits the methyl signal into two peaks.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Slow rotation around the C2-C3 bond resolves the two methyl groups.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Topicity applies to carbons as much as to protons. Two methyl groups on the same carbon are equivalent only if some symmetry operation exchanges them; next to a stereocenter, replacing one and then the other by a label gives diastereomers, so they are diastereotopic and have different chemical shifts. The 13C spectrum then shows one line per methyl instead of one line for the pair.",
      "approach": "Step 1: Find the stereocenter: C2 carries H, OH, CH3 and the isopropyl group.\nStep 2: Test the two C3 methyls. Replacing one with a 13CH3 label makes C3 a stereocenter too, and the two possible products are diastereomers. The methyl carbons are diastereotopic.\nStep 3: Count the carbons: C1 (near 20 ppm), C2 (near 72), C3 (near 35), and two C3-methyl signals close together near 18 and 17 ppm.\nStep 4: Five signals, one more than the four a symmetry-blind count of carbon types gives.",
      "note": "Any isopropyl group attached to a stereocenter shows the doubled methyl line, which makes it a useful marker: valine's two methyl carbons in a peptide, or the isopropyl of menthol, always give two lines. Where there is no stereocenter, as in 2-propanol, the two methyls are enantiotopic and give one line in an ordinary achiral solvent.",
      "options": {
        "A": "Correct. C2 is a stereocenter, so the two C3 methyl carbons are diastereotopic and resolve into separate lines, bringing the count to five.",
        "B": "Enantiomers give identical NMR spectra in an achiral solvent; a racemate shows the same lines as either pure enantiomer. The extra line comes from within one molecule, not from a mixture.",
        "C": "13C-13C coupling is not seen in a routine spectrum because only one carbon in a hundred is 13C, so two adjacent 13C nuclei occur in one molecule in ten thousand. Coupling would in any case give a doublet, not two singlets of different shift.",
        "D": "Rotation about the C2-C3 bond is fast at room temperature. Slow rotation would double every signal in the molecule, not just the methyls, and would collapse on warming; the diastereotopic splitting persists at any temperature."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain bearing a methyl branch on the third carbon and a hydroxyl group on the second, with a wedge bond at the carbon that carries the hydroxyl."
  },
  {
    "question_id": "ch13_q29_13c_limonene",
    "topic": "13C NMR: Chemical Equivalence",
    "difficulty_level": "Medium",
    "question_text": "How many signals are observed in the proton-decoupled $^{13}\\text{C}$ NMR spectrum of limonene?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "10 signals",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "8 signals",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "6 signals",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "9 signals",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A molecule with a stereocenter and no other symmetry has no operation that exchanges any two of its carbons, so every carbon gives its own 13C line. Limonene, the monoterpene of citrus peel, is such a case: its single stereocenter at C4 of the cyclohexene ring removes every possible mirror plane. Counting signals then reduces to counting carbons in the formula.",
      "approach": "Step 1: Write limonene: a cyclohexene ring with a methyl on C1 and an isopropenyl group, C(=CH2)CH3, on C4. Formula C10H16.\nStep 2: Look for symmetry. C4 carries H, the isopropenyl group and two different ring arms (one reaches the double bond in two bonds, the other in one), so it is a stereocenter and the molecule is chiral: no mirror plane, no axis.\nStep 3: With no symmetry every carbon is unique: four sp2 carbons (ring C1 and C2, and the isopropenyl C=CH2, near 150, 134, 121 and 109 ppm), two methyls, C4, and three ring CH2 carbons.\nStep 4: Ten signals, matching the ten carbons of C10H16.",
      "note": "The two enantiomers of limonene smell different (orange versus turpentine-like) and are separated by a chiral environment, but they give identical 13C spectra, as enantiomers always do in an achiral solvent. A count of ten is the same for either, and for the racemate.",
      "options": {
        "A": "Correct. Limonene has a stereocenter and no symmetry element, so each of its ten carbons is a distinct environment.",
        "B": "Eight would need two pairs of equivalent carbons. The isopropenyl CH2 and the ring methyl are not equivalent to anything, and the stereocenter prevents any pairing of ring carbons.",
        "C": "Six is far too few; it would imply a symmetry that pairs most of the ring carbons, such as the para-disubstituted benzene ring of p-cymene, which limonene is not.",
        "D": "Nine would require exactly one pair of equivalent carbons; the two methyls are on different carbons in different environments (one on an alkene of the ring, one on the exocyclic alkene) and are not exchanged."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q30_13c_bicyclopropyl",
    "topic": "13C NMR: Chemical Equivalence",
    "difficulty_level": "Hard",
    "question_text": "How many signals does bicyclopropyl exhibit in its proton-decoupled $^{13}\\text{C}$ NMR spectrum?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "2 signals",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3 signals",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4 signals",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "6 signals",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A symmetrical dimer folds its carbons into very few sets. Bicyclopropyl is two cyclopropyl rings joined by a single bond; the two rings are exchanged by a two-fold axis through the middle of that bond, and each ring's own mirror plane exchanges its two CH2 carbons. Six carbons become two kinds.",
      "approach": "Step 1: Draw bicyclopropyl: a cyclopropane ring bonded, through one of its carbons, to a second cyclopropane ring.\nStep 2: The C2 axis through the midpoint of the connecting bond exchanges the two rings, so the two CH carbons are one set and the four CH2 carbons are, at most, two sets.\nStep 3: Within each ring a mirror plane containing the CH carbon and the connecting bond exchanges the ring's two CH2 carbons, so all four CH2 carbons are one set.\nStep 4: Two signals: the CH carbons near 12 ppm and the CH2 carbons near 3 ppm, both unusually upfield because cyclopropane carbons are strongly shielded.",
      "note": "Cyclopropane's carbon appears at about -3 ppm and its protons near 0.2, both upfield of TMS territory for most saturated compounds; the ring's bent bonds give it a shielding anisotropy of its own. A carbon signal below 5 ppm is a strong hint of a three-membered ring.",
      "options": {
        "A": "Correct. The two CH carbons are one set and the four CH2 carbons another, two lines in all.",
        "B": "Three would treat the two CH2 carbons of each ring as different. Each ring has a mirror plane that exchanges them, so they are equivalent.",
        "C": "Four would treat the two rings as different as well. The axis through the connecting bond exchanges them, and the mirror plane within each ring pairs its CH2 carbons.",
        "D": "Six counts every carbon as unique, which would need a molecule with no symmetry at all. Bicyclopropyl has both an axis and mirror planes."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q31_13c_carbonyl_shift",
    "topic": "13C NMR: Chemical Shifts",
    "difficulty_level": "Medium",
    "question_text": "The proton-decoupled $^{13}\\text{C}$ NMR spectrum of 2-butanone shows four signals, at $\\delta = 209$, $37$, $29$ and $8\\text{ ppm}$. Which assignment is correct?",
    "question_smiles": "CCC(C)=O",
    "options": [
      {
        "option_id": "A",
        "text": "209: the carbonyl carbon; 37: the $\\text{CH}_2$; 29: the methyl on the carbonyl; 8: the terminal methyl.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "209: the carbonyl carbon; 37: the methyl on the carbonyl; 29: the $\\text{CH}_2$; 8: the terminal methyl.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "209: the carbonyl carbon; 37: the terminal methyl; 29: the $\\text{CH}_2$; 8: the methyl on the carbonyl.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "37: the carbonyl carbon, weak because it bears no hydrogen; 209: the $\\text{CH}_2$; 29 and 8: the two methyls.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A ketone carbonyl carbon is the most deshielded carbon in ordinary organic compounds, near 200 to 220 ppm, because the carbon bears a large partial positive charge and sits at the centre of the pi bond's anisotropy. The carbons alpha to it are pushed to 25 to 45 ppm, and each additional carbon attached to an alpha carbon adds roughly another 8 ppm. The rest of the assignment follows from counting neighbours.",
      "approach": "Step 1: Assign 209 ppm to the carbonyl carbon, C2; nothing else in the molecule can reach the 200s.\nStep 2: Both C1 and C3 are alpha to the carbonyl. C3, the CH2, is also bonded to C4, and that extra carbon neighbour shifts it downfield of C1: C3 is 37 ppm and C1 is 29 ppm.\nStep 3: C4, the terminal methyl, is beta to the carbonyl and bonded only to C3; it is the most shielded, at 8 ppm.\nStep 4: A DEPT-135 check confirms the middle two: the 37 ppm line inverts (CH2) and the 29 and 8 ppm lines are positive (CH3); 209 disappears.",
      "note": "The carbonyl range separates carbonyl types: ketones and aldehydes 190 to 220, carboxylic acids and their derivatives 160 to 185 because oxygen or nitrogen lone-pair donation puts electron density back on the carbon. A 209 ppm line therefore says ketone or aldehyde before any other spectrum is consulted, and the absence of an aldehyde proton in the 1H spectrum settles which.",
      "options": {
        "A": "Correct. The carbonyl is 209; the CH2, alpha to the carbonyl and carrying a carbon neighbour, is 37; the acetyl methyl, alpha with no carbon neighbour, is 29; the terminal methyl, beta, is 8.",
        "B": "This swaps the two alpha carbons. Both are alpha to the carbonyl, but the CH2 also has C4 attached, and each extra carbon neighbour adds about 8 ppm; the CH2 is the more downfield of the two.",
        "C": "The terminal methyl is beta to the carbonyl, with a single carbon neighbour, and is the most shielded carbon in the molecule; it cannot be at 37 ppm. The methyl on the carbonyl is alpha and cannot be at 8.",
        "D": "The carbonyl carbon is weak because it carries no hydrogen, but weak is not upfield. Its charge and anisotropy place it at 209 ppm; a CH2 carbon has no way to reach 200."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain whose second carbon is double-bonded to an oxygen."
  },
  {
    "question_id": "ch13_q32_carbonyl_ester_vs_ketone",
    "topic": "13C NMR: Chemical Shifts",
    "difficulty_level": "Hard",
    "question_text": "Why does the carbonyl carbon of methyl acetate appear at $\\delta \\approx 170\\text{ ppm}$, which is significantly upfield of the carbonyl carbon of acetone ($\\delta \\approx 206\\text{ ppm}$)?",
    "question_smiles": "CC(=O)OC",
    "options": [
      {
        "option_id": "A",
        "text": "Resonance donation of the ester oxygen's lone pair into the carbonyl pi system increases electron density on the carbonyl carbon, shielding it relative to a ketone.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The ester oxygen is highly electronegative and deshields the carbonyl carbon inductively.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetone has greater steric hindrance, which forces the carbonyl carbon to hybridize as $sp$.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The methyl group in methyl acetate is electron-withdrawing, whereas the methyl groups in acetone are electron-donating.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Carbonyl carbon shifts are set by how much positive charge the carbon carries. A ketone's carbon has only the polarized C=O bond drawing density away and appears near 205 to 215 ppm. In an ester, the second oxygen's lone pair is delocalized into the carbonyl pi system, putting density back onto the carbon; the carbon is less positive and is shielded by about 35 ppm, to 165 to 175. Induction by that oxygen works the other way but is the smaller effect.",
      "approach": "Step 1: Draw the two resonance forms of the ester group: the neutral form, and the form with a positive charge on the alkoxy oxygen, a negative charge on the carbonyl oxygen and a C=O+ double bond.\nStep 2: The second form places electron density on the carbonyl carbon relative to a ketone, which has no such contributor.\nStep 3: More electron density means more shielding: methyl acetate's carbonyl carbon is at 171 ppm, acetone's at 206.\nStep 4: The same argument orders the whole family: amides (165 to 175, nitrogen donates best), esters and acids (165 to 185), ketones and aldehydes (190 to 220).",
      "note": "Induction and resonance pull in opposite directions here and resonance wins, which is the general rule for a lone pair conjugated with a pi system: the same donation makes the ester carbonyl less electrophilic than a ketone's toward nucleophiles, and moves the ester C=O stretch to 1740 rather than 1715 because the C-O bond order is raised. NMR, reactivity and IR all report the same electron distribution.",
      "options": {
        "A": "Correct. The alkoxy oxygen's lone pair is delocalized into the carbonyl pi bond, raising the electron density on the carbonyl carbon and shielding it by about 35 ppm relative to a ketone carbonyl.",
        "B": "Induction by the ester oxygen does withdraw density and would push the carbon downfield, but the observed shift is upfield of the ketone's. The larger, opposing resonance donation decides the direction.",
        "C": "A carbonyl carbon is sp2 in both compounds; two methyls impose no meaningful strain, and hybridization does not change with steric bulk in any case.",
        "D": "A methyl group is weakly electron-donating whether it is on a carbonyl or an oxygen, and both compounds have a methyl on the carbonyl carbon. The difference between the two compounds is the oxygen, not the methyls."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A methyl group on an oxygen that is bonded to a carbonyl carbon carrying a second methyl group."
  },
  {
    "question_id": "ch13_q33_13c_shift_hybridization",
    "topic": "13C NMR: Chemical Shifts",
    "difficulty_level": "Medium",
    "question_text": "What is the correct order of chemical shifts ($\\delta$, ppm) for the different types of carbons in hex-1-en-5-yne?",
    "question_smiles": "C#CCCC=C",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^3 \\text{ carbons} < sp \\text{ carbons} < sp^2 \\text{ carbons}$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$sp^3 \\text{ carbons} < sp^2 \\text{ carbons} < sp \\text{ carbons}$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$sp \\text{ carbons} < sp^3 \\text{ carbons} < sp^2 \\text{ carbons}$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$sp^2 \\text{ carbons} < sp \\text{ carbons} < sp^3 \\text{ carbons}$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Carbon shifts do not follow hybridization in a straight line. Saturated sp3 carbons sit at 0 to 50 ppm and alkene sp2 carbons at 100 to 150, as electronegativity of the hybrid would predict; but alkyne sp carbons fall between them, at 65 to 90, because the cylindrical pi cloud of the triple bond shields the carbons on its axis just as it shields the terminal proton. The order is sp3 < sp < sp2.",
      "approach": "Step 1: Sort the six carbons of hex-1-en-5-yne by type: C1 and C2 are sp2 (the terminal alkene), C3 and C4 are sp3 (the two CH2 groups), C5 and C6 are sp (the terminal alkyne).\nStep 2: sp3 carbons: C3 and C4 near 33 and 18 ppm, the lowest.\nStep 3: sp carbons: the internal alkyne carbon C5 near 84 ppm and the terminal C6 near 69 ppm.\nStep 4: sp2 carbons: C2 near 137 ppm and the terminal C1 near 116 ppm, the highest.\nStep 5: Order of the three types: sp3 (18 to 33) < sp (69 to 84) < sp2 (116 to 137).",
      "note": "The same anisotropy inverts the proton order: an acetylenic proton (2.5 ppm) is upfield of a vinylic proton (5 to 6 ppm) even though the sp carbon is the more electronegative. For carbon and proton alike, an sp centre sits on the axis of the triple bond and inside its shielding cone; an sp2 centre sits in the plane of the double bond, outside its cone.",
      "options": {
        "A": "Correct. sp3 carbons are most shielded, sp2 alkene carbons least, and the sp alkyne carbons fall in between at 65 to 90 ppm because of the triple bond's shielding cone.",
        "B": "This follows electronegativity of the hybrid and would be right for sigma-bond effects alone. It ignores the triple bond's anisotropy, which pulls the alkyne carbons back to 65 to 90 ppm, below the alkene range.",
        "C": "sp carbons are never the most shielded; they sit near 70 to 85 ppm, well above the 0 to 50 range of saturated carbons.",
        "D": "This reverses the whole order. Saturated carbons are the most shielded carbons in the molecule, not the least, and alkene carbons are the least shielded."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-carbon chain with a triple bond at one end and a double bond at the other."
  },
  {
    "question_id": "ch13_q35_cdcl3_solvent_splitting",
    "topic": "13C NMR: Practical Methods",
    "difficulty_level": "Medium",
    "question_text": "When recording a $^{13}\\text{C}$ NMR spectrum in deuterated chloroform ($\\text{CDCl}_3$), a characteristic solvent signal is observed as a triplet (1:1:1 ratio) centered at $\\delta \\approx 77\\text{ ppm}$. Why does this signal appear as a triplet?",
    "question_smiles": "ClC(Cl)Cl",
    "options": [
      {
        "option_id": "A",
        "text": "Spin-spin coupling between the $^{13}\\text{C}$ nucleus and the deuterium ($^2\\text{H}$) nucleus, which has a spin quantum number $I = 1$.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Coupling between the $^{13}\\text{C}$ nucleus and three equivalent chlorine nuclei ($I = 3/2$).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The presence of three different conformation isomers of chloroform in solution.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The nuclear Zeeman splitting of chloroform in the presence of a strong radiofrequency field.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Spin-spin coupling produces 2nI + 1 lines for n equivalent coupled nuclei of spin I. For protons (I = 1/2) that is the familiar n + 1, but deuterium has I = 1, so one deuterium splits a neighbouring signal into 2 x 1 x 1 + 1 = 3 lines, and because the three spin states of deuterium (+1, 0, -1) are equally populated the three lines are equal in height. The 1:1:1 triplet at 77 ppm in every CDCl3 spectrum is the solvent carbon coupled to its own deuterium.",
      "approach": "Step 1: Identify the nuclei. The solvent carbon is bonded to one deuterium and three chlorines.\nStep 2: Deuterium has spin 1, so one deuterium gives 2(1)(1) + 1 = 3 lines, equally intense: a 1:1:1 triplet.\nStep 3: The one-bond C-D coupling is about 32 Hz, which at a 13C frequency of 100 MHz is 0.32 ppm between adjacent lines, matching the observed spacing.\nStep 4: Chlorine does not split the signal: 35Cl and 37Cl have spin 3/2 and a quadrupole moment, which makes them relax so fast that their coupling to carbon is averaged away.",
      "note": "The same rule explains the quintet of DMSO-d6 at 39.5 ppm (a CD3 carbon: 2 x 3 x 1 + 1 = 7 lines, of which the outer ones are weak, so it is usually described as a septet) and the 1:1:1 triplet of residual CHD2 in deuterated solvents in the proton spectrum. Broadband proton decoupling removes couplings to 1H only; deuterium is decoupled by a separate channel, and routine spectra do not use one.",
      "options": {
        "A": "Correct. Deuterium has I = 1, so one deuterium splits the 13C signal into 2nI + 1 = 3 equally intense lines; the 1:1:1 triplet at 77 ppm is the CDCl3 carbon.",
        "B": "Chlorine's quadrupole makes it relax too fast to show coupling to carbon, and three equivalent spin-3/2 nuclei would in any case give ten lines, not three.",
        "C": "Chloroform is a single tetrahedral molecule with no conformational isomers, and even a mixture of conformers would give lines at different shifts, not a symmetrical triplet.",
        "D": "The Zeeman interaction is the splitting of nuclear energy levels by the static field that makes NMR possible; it sets the resonance frequency and produces no multiplet. The radiofrequency field excites the transition and splits nothing."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A single carbon bearing three chlorine atoms and one hydrogen."
  },
  {
    "question_id": "ch13_q38_dept_tert_butanol",
    "topic": "13C NMR: DEPT Experiments",
    "difficulty_level": "Medium",
    "question_text": "In the $^{13}\\text{C}$ NMR analysis of tert-butanol, two signals are observed in the standard broadband-decoupled spectrum. What behavior is expected for these two signals in DEPT-90 and DEPT-135 experiments?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The methyl signal ($\\delta \\approx 31\\text{ ppm}$) is positive in DEPT-135 and absent in DEPT-90; the quaternary carbon signal ($\\delta \\approx 69\\text{ ppm}$) is absent in both.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The methyl signal is positive in both DEPT-135 and DEPT-90; the quaternary carbon signal is negative in DEPT-135.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The quaternary carbon signal is positive in DEPT-90; the methyl signal is absent in DEPT-135.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both signals are absent in DEPT-135 but present in DEPT-90.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "DEPT sorts carbons by the number of attached hydrogens. DEPT-90 shows only CH carbons; DEPT-135 shows CH and CH3 carbons positive and CH2 carbons inverted; quaternary carbons, having no hydrogen to transfer polarization from, appear in neither. Applying the rules to a molecule is a matter of labelling each carbon CH3, CH2, CH or C and reading off.",
      "approach": "Step 1: Label the carbons of tert-butanol, (CH3)3C-OH: three equivalent CH3 carbons and one quaternary carbon bonded to the oxygen.\nStep 2: Broadband-decoupled spectrum: two lines, CH3 near 31 ppm and the quaternary C-O near 69 ppm.\nStep 3: DEPT-90: only CH carbons appear; there are none, so the spectrum is empty.\nStep 4: DEPT-135: the CH3 line at 31 ppm appears positive; the quaternary carbon at 69 ppm is absent.\nStep 5: The carbon at 69 ppm, present in the decoupled spectrum and missing from both DEPT spectra, is thereby identified as quaternary.",
      "note": "A carbon that vanishes in DEPT is as informative as one that appears: subtracting the DEPT-135 lines from the decoupled spectrum lists the quaternary carbons, which is the standard way to find a carbonyl, a nitrile or a fully substituted ring carbon. tert-Butanol is the simplest molecule that demonstrates all three DEPT outcomes with only two lines.",
      "options": {
        "A": "Correct. The methyl carbons (CH3) are positive in DEPT-135 and absent in DEPT-90; the quaternary carbon has no attached hydrogen and is absent from both.",
        "B": "A CH3 carbon does not appear in DEPT-90, which is selective for CH only, and a quaternary carbon gives no DEPT signal at all, positive or negative; only CH2 carbons invert in DEPT-135.",
        "C": "A quaternary carbon never appears in DEPT-90 (or in any DEPT spectrum), and a CH3 carbon is present, not absent, in DEPT-135.",
        "D": "This reverses the experiments. DEPT-135 shows every protonated carbon, so the methyl line is present there; DEPT-90 shows only CH carbons, of which tert-butanol has none."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q39_dept_2_butanone",
    "topic": "13C NMR: DEPT Experiments",
    "difficulty_level": "Medium",
    "question_text": "How many signals are observed in the DEPT-135 spectrum of 2-butanone, and what are their orientations (upright/positive vs inverted/negative)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "3 signals: 2 positive and 1 negative.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4 signals: 3 positive and 1 negative.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2 signals: 1 positive and 1 negative.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3 signals: all positive.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "DEPT-135 draws CH and CH3 carbons upward and CH2 carbons downward, and leaves out any carbon with no hydrogen. A ketone therefore loses its carbonyl line in DEPT-135, and the remaining lines can be sorted by sign into methylenes and everything else. The count of lines in DEPT-135 is the decoupled count minus the number of quaternary carbons.",
      "approach": "Step 1: Label the carbons of 2-butanone, CH3-CO-CH2-CH3: two CH3 carbons, one CH2 carbon and one quaternary carbonyl carbon.\nStep 2: The decoupled spectrum shows four lines: 209 (C=O), 37 (CH2), 29 (CH3-CO) and 8 (CH3).\nStep 3: In DEPT-135 the carbonyl at 209 disappears.\nStep 4: The CH2 at 37 ppm inverts; the two CH3 lines at 29 and 8 stay positive.\nStep 5: Three signals: two positive and one negative.",
      "note": "DEPT-135 alone cannot separate CH from CH3, since both are positive; that is what DEPT-90 adds, showing CH only. For 2-butanone DEPT-90 would be empty, confirming that the two positive lines are both methyls. The pair of experiments together classifies every protonated carbon.",
      "options": {
        "A": "Correct. The carbonyl carbon is absent, the CH2 is negative, and the two methyl carbons are positive: three lines, two up and one down.",
        "B": "Four lines would include the carbonyl carbon, which has no attached hydrogen and gives no DEPT signal. The quaternary carbon is the one that drops out.",
        "C": "Two lines would merge the two methyl carbons, but they are in different environments (29 and 8 ppm) and give separate positive lines; the CH2 adds a third, negative.",
        "D": "All positive would mean no CH2 carbon. The CH2 between the carbonyl and the terminal methyl inverts in DEPT-135, as every CH2 does."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q40_dept_cyclohexanone",
    "topic": "13C NMR: DEPT Experiments",
    "difficulty_level": "Hard",
    "question_text": "For cyclohexanone, how many signals are expected in the proton-decoupled $^{13}\\text{C}$ NMR spectrum, the DEPT-90 spectrum, and the DEPT-135 spectrum, respectively?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "$^{13}\\text{C}$ decoupled: 4 signals; DEPT-90: 0 signals; DEPT-135: 3 negative signals.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$^{13}\\text{C}$ decoupled: 4 signals; DEPT-90: 1 signal; DEPT-135: 3 positive signals.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$^{13}\\text{C}$ decoupled: 6 signals; DEPT-90: 0 signals; DEPT-135: 5 negative signals.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$^{13}\\text{C}$ decoupled: 4 signals; DEPT-90: 0 signals; DEPT-135: 4 negative signals.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A symmetrical cyclic ketone combines two counting rules: symmetry decides how many carbon environments there are, and DEPT decides which of them show. Cyclohexanone's mirror plane through the carbonyl and C4 pairs C2 with C6 and C3 with C5, and every ring carbon except the carbonyl is a CH2, so its DEPT spectra are all-or-nothing in a way that makes it a clean test case.",
      "approach": "Step 1: Symmetry. The plane through C1 (the carbonyl) and C4 gives four environments: C1, C2/C6, C3/C5 and C4. The decoupled spectrum shows four lines, near 212, 42, 27 and 25 ppm.\nStep 2: Label them: C1 is quaternary; C2/C6, C3/C5 and C4 are all CH2.\nStep 3: DEPT-90 shows CH carbons only. There are none: zero signals.\nStep 4: DEPT-135 shows the three CH2 environments, all inverted, and omits the carbonyl: three negative signals.",
      "note": "An unsymmetrical ketone such as 2-methylcyclohexanone breaks the plane and shows seven lines, with one CH (positive in both DEPT spectra) and one extra CH3. Comparing the two molecules is a quick way to see how one substituent changes both the symmetry count and the DEPT signature at once.",
      "options": {
        "A": "Correct. Four environments by symmetry; no CH carbons, so DEPT-90 is empty; the three CH2 environments appear inverted in DEPT-135 and the carbonyl is absent.",
        "B": "There is no CH carbon in cyclohexanone, so DEPT-90 cannot show a signal, and CH2 carbons appear negative in DEPT-135, not positive.",
        "C": "Six decoupled lines would ignore the mirror plane that pairs C2 with C6 and C3 with C5; the ring has three CH2 environments, not five, and the carbonyl makes four lines in all.",
        "D": "Four negative DEPT-135 signals would include the carbonyl carbon, which has no hydrogen and gives no DEPT signal; only the three CH2 environments appear."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q41_elucidation_ethyl_acetate",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Medium",
    "question_text": "An unknown compound has the molecular formula $\\text{C}_4\\text{H}_8\\text{O}_2$. Its IR spectrum shows a strong absorption at $1740\\text{ cm}^{-1}$ and no absorptions in the $3200\\text{-}3600\\text{ cm}^{-1}$ region. The $^1\\text{H}$ NMR spectrum displays a triplet at $\\delta = 1.25\\text{ ppm}$ ($J = 7.0\\text{ Hz}$, 3H), a singlet at $\\delta = 2.04\\text{ ppm}$ (3H), and a quartet at $\\delta = 4.12\\text{ ppm}$ ($J = 7.0\\text{ Hz}$, 2H). What is the structure of this compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Ethyl acetate",
        "smiles": "CC(=O)OCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methyl propanoate",
        "smiles": "CCC(=O)OC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Propyl formate",
        "smiles": "CCCOC=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Butanoic acid",
        "smiles": "CCCC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An ester announces itself twice: a carbonyl band near 1740 with no O-H, and a proton signal near 4 ppm for the carbon bonded to the alkoxy oxygen. Once the ester is recognized, the splitting patterns say which alkyl group is on which side of it, because the O-CH2 of an ethyl ester is a quartet near 4.1 while the CH2 alpha to an ester carbonyl is a quartet near 2.3.",
      "approach": "Step 1: Unsaturation: (2 x 4 + 2 - 8)/2 = 1, one pi bond or ring.\nStep 2: IR 1740 is a carbonyl, and the absence of any 3200 to 3600 absorption rules out an alcohol or an acid. With two oxygens and one unsaturation, an ester fits.\nStep 3: Read the NMR. The 2H quartet at 4.12 is a CH2 bonded to oxygen next to a CH3; the 3H triplet at 1.25 is that CH3. Together they are an O-CH2CH3 group, an ethyl ester.\nStep 4: The 3H singlet at 2.04 is a methyl with no neighbours, on the carbonyl: an acetyl group.\nStep 5: CH3-CO-O-CH2CH3, ethyl acetate.",
      "note": "Ethyl acetate and methyl propanoate are a matched pair for this exercise: same formula, same IR, and both show a quartet, a triplet and a singlet. The quartet's position decides it, 4.12 for O-CH2 and 2.33 for CH2-C=O, and the singlet's position agrees, 2.04 for an acetyl methyl and 3.67 for a methoxy.",
      "options": {
        "A": "Correct. An ester by IR and formula; the quartet at 4.12 and triplet at 1.25 are an ethoxy group, and the singlet at 2.04 is the acetyl methyl.",
        "B": "Methyl propanoate has the same three patterns but in the wrong places: its quartet is the CH2 on the carbonyl at 2.33, and its singlet is the O-CH3 at 3.67. Nothing appears at 4.12.",
        "C": "Propyl formate would show the formate proton as a 1H singlet near 8.05 ppm and a propyl group as a triplet, a sextet and a triplet; it has no 3H singlet.",
        "D": "Butanoic acid has the formula but would show a broad O-H band from 2500 to 3300, a carbonyl near 1710, and a 1H signal near 12 ppm; the spectrum shows no O-H at all."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q42_elucidation_3_pentanone",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Medium",
    "question_text": "A compound with molecular formula $\\text{C}_5\\text{H}_{10}\\text{O}$ exhibits a strong IR absorption at $1715\\text{ cm}^{-1}$. Its $^1\\text{H}$ NMR spectrum shows a quartet at $\\delta = 2.42\\text{ ppm}$ ($J = 7.2\\text{ Hz}$, 4H) and a triplet at $\\delta = 1.05\\text{ ppm}$ ($J = 7.2\\text{ Hz}$, 6H). The proton-decoupled $^{13}\\text{C}$ NMR spectrum displays three signals at $\\delta = 211$, $35$, and $8\\text{ ppm}$. What is the structure of the compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "3-Pentanone",
        "is_correct": true,
        "smiles": "CCC(=O)CC"
      },
      {
        "option_id": "B",
        "text": "2-Pentanone",
        "is_correct": false,
        "smiles": "CCCC(=O)C"
      },
      {
        "option_id": "C",
        "text": "3-Methyl-2-butanone",
        "is_correct": false,
        "smiles": "CC(C)C(C)=O"
      },
      {
        "option_id": "D",
        "text": "Pentanal",
        "is_correct": false,
        "smiles": "CCCCC=O"
      }
    ],
    "feedback": {
      "context": "When a molecule shows fewer NMR signals than it has carbons, symmetry is doing the folding, and the shape of the signals says how. Two proton signals for a five-carbon ketone means two ethyl groups related by a mirror plane through the carbonyl; three carbon lines for five carbons says the same. A symmetrical ketone is recognized by that economy before any shift is read.",
      "approach": "Step 1: Unsaturation: (2 x 5 + 2 - 10)/2 = 1; IR 1715 assigns it to an unconjugated ketone or aldehyde carbonyl.\nStep 2: The 1H spectrum has only two signals for ten protons: a 4H quartet at 2.42 and a 6H triplet at 1.05, an ethyl pattern with doubled integrals. Two equivalent ethyl groups.\nStep 3: The 13C spectrum has three lines for five carbons: 211 (a ketone carbonyl), 35 (two equivalent CH2 carbons alpha to it) and 8 (two equivalent CH3 carbons). No aldehyde carbon near 200 with a proton on it, and no aldehyde proton near 9.8.\nStep 4: CH3CH2-CO-CH2CH3, 3-pentanone. Both ethyl groups sit on the carbonyl, so the quartet is at 2.42 rather than the 4 ppm of an ethyl on oxygen.",
      "note": "The ketone-versus-aldehyde decision here rests on what is absent: no 1H signal between 9 and 10, and a carbonyl at 211 rather than the 200 to 205 of an aldehyde. In a real spectrum the aldehyde proton is small and easy to overlook, so a 13C line at 211 with no DEPT-90 counterpart is the safer confirmation.",
      "options": {
        "A": "Correct. Two equivalent ethyl groups on a ketone carbonyl give the 4H quartet at 2.42, the 6H triplet at 1.05, and three 13C lines at 211, 35 and 8.",
        "B": "2-Pentanone has no symmetry: its spectrum shows a 3H singlet near 2.13 for the acetyl methyl, a triplet, a sextet and another triplet, and five 13C lines.",
        "C": "3-Methyl-2-butanone shows a 6H doublet near 1.1 and a 1H septet near 2.6 for the isopropyl group, plus a 3H singlet near 2.15 for the acetyl methyl; it has no quartet and four 13C lines.",
        "D": "Pentanal would show a 1H triplet near 9.77 for the aldehyde proton and a carbonyl carbon near 203, with a four-carbon chain giving four separate alkyl signals; nothing here integrates to 4H and 6H."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q43_elucidation_isobutanol",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Medium",
    "question_text": "An unknown compound of formula $\\text{C}_4\\text{H}_{10}\\text{O}$ shows a broad IR stretch at $3350\\text{ cm}^{-1}$. The $^1\\text{H}$ NMR spectrum features a doublet at $\\delta = 0.90\\text{ ppm}$ ($J = 6.7\\text{ Hz}$, 6H), a multiplet at $\\delta = 1.75\\text{ ppm}$ (1H), a broad singlet at $\\delta = 2.15\\text{ ppm}$ (1H, exchanges with $\\text{D}_2\\text{O}$), and a doublet at $\\delta = 3.38\\text{ ppm}$ ($J = 6.5\\text{ Hz}$, 2H). What is the structure of this compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "2-Methyl-1-propanol",
        "smiles": "CC(C)CO",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Butanol",
        "smiles": "CCCCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Butanol",
        "smiles": "CCC(C)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Methyl-2-propanol",
        "smiles": "CC(C)(C)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Among the four butanol isomers the splitting patterns do all the work. A 6H doublet says isopropyl; a 2H doublet at 3.4 says a CH2 on oxygen with a single proton neighbour; between them, a 1H multiplet is the methine that both couple to. The broad 1H signal that exchanges with D2O confirms the alcohol the IR already showed.",
      "approach": "Step 1: Unsaturation: (2 x 4 + 2 - 10)/2 = 0, a saturated compound. The broad IR band at 3350 is an O-H; a saturated C4H10O with O-H is a butanol (an ether would have no O-H).\nStep 2: The 6H doublet at 0.90 is two equivalent methyls coupled to one proton: an isopropyl fragment.\nStep 3: The 2H doublet at 3.38 is a CH2 bonded to oxygen (the shift) coupled to one proton (the doublet).\nStep 4: The 1H multiplet at 1.75 is the methine coupled to both the six methyl protons and the two CH2 protons, nine neighbours in all.\nStep 5: The broad 1H singlet at 2.15 that vanishes with D2O is the O-H. Assemble: (CH3)2CH-CH2-OH, 2-methyl-1-propanol.",
      "note": "The O-H proton shows no coupling to the CH2 despite being three bonds away, because it exchanges between molecules faster than the coupling can develop. That is why the CH2 is a clean doublet from the methine alone. In very dry DMSO the exchange slows and the O-H becomes a triplet, which is a useful trick for telling primary from secondary alcohols.",
      "options": {
        "A": "Correct. Isopropyl (6H doublet, 1H multiplet) attached to a CH2-OH (2H doublet at 3.38) with an exchangeable O-H: 2-methyl-1-propanol.",
        "B": "1-Butanol has a CH2-O triplet near 3.64, not a doublet, and a 3H triplet near 0.93 rather than a 6H doublet; its chain gives four alkyl signals plus the O-H.",
        "C": "2-Butanol has a CH-O sextet near 3.7 integrating to 1H, a 3H doublet, a 2H multiplet and a 3H triplet. It has no 2H signal on oxygen and no 6H doublet.",
        "D": "2-Methyl-2-propanol has no C-H on the carbinol carbon and no coupling anywhere: a 9H singlet near 1.28 and the O-H. The observed doublets exclude it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q44_elucidation_acetophenone",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound X is a neutral liquid that gives an orange precipitate with 2,4-dinitrophenylhydrazine and a yellow precipitate of iodoform with $\\text{I}_2$ in aqueous NaOH, but no silver mirror with Tollens' reagent. Combustion analysis gives C 80.0% and H 6.7% by mass, the remainder oxygen. Its mass spectrum shows a molecular ion at $m/z = 120$, a base peak at 105, and peaks at 77, 51 and 43. IR: a strong band at $1685\\text{ cm}^{-1}$, bands at 1600, 1580 and 1450, nothing between 3200 and $3600\\text{ cm}^{-1}$, and no pair of weak bands near 2720 and 2820. The proton-decoupled $^{13}\\text{C}$ NMR spectrum shows six lines, at $\\delta = 198$, 137, 133, 129, 128 and 26 ppm. The $^1\\text{H}$ NMR spectrum is shown. Which structure is X?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Acetophenone",
        "is_correct": true,
        "smiles": "CC(=O)c1ccccc1"
      },
      {
        "option_id": "B",
        "text": "Phenylacetaldehyde",
        "is_correct": false,
        "smiles": "O=CCc1ccccc1"
      },
      {
        "option_id": "C",
        "text": "4-Methylbenzaldehyde",
        "is_correct": false,
        "smiles": "Cc1ccc(C=O)cc1"
      },
      {
        "option_id": "D",
        "text": "Styrene oxide (2-phenyloxirane)",
        "is_correct": false,
        "smiles": "c1ccccc1C1CO1"
      }
    ],
    "feedback": {
      "context": "A structure problem is worked in order: molecular formula from the analysis and the molecular ion, unsaturation count, functional group from IR and the chemical tests, skeleton from the NMR, and finally the fragments as a check. Here the tests do the sorting early: a 2,4-DNP precipitate says aldehyde or ketone, a negative Tollens test says ketone, and a positive iodoform test says methyl ketone, before a single NMR signal is read.",
      "approach": "Step 1: Empirical formula. Per 100 g: C 80.0/12.01 = 6.66 mol, H 6.7/1.008 = 6.65 mol, O 13.3/16.00 = 0.83 mol. Dividing by 0.83: C 8, H 8, O 1, so C8H8O, mass 120, which is the molecular ion. Unsaturation = (2 x 8 + 2 - 8)/2 = 5.\nStep 2: Functional group. IR 1685 is a carbonyl lowered from 1715 by conjugation; there is no O-H and no aldehyde C-H pair at 2720/2820. The tests agree: DNP positive (C=O), Tollens negative (not an aldehyde), iodoform positive (a CH3-C=O group).\nStep 3: Skeleton. Four of the five unsaturations are a benzene ring (IR 1600, 1580, 1450; 13C 128 to 137); the fifth is the ketone C=O at 198 ppm. The 1H spectrum shows 5 aromatic protons in a 2:1:2 pattern, a monosubstituted ring, and a 3H singlet at 2.6, a methyl on the carbonyl; the 13C line at 26 is that methyl.\nStep 4: Assemble: C6H5-CO-CH3, acetophenone. The ortho protons at 7.95 are pushed downfield by the carbonyl.\nStep 5: Mass spectrum check: 105 is loss of CH3 to the benzoyl cation C6H5CO+, the base peak of every phenyl ketone; 77 is C6H5+ after loss of CO from 105; 51 is C4H3+ from 77; 43 is the acetyl cation from the other alpha-cleavage.",
      "note": "The iodoform test is specific for a CH3-C=O group (or a CH3-CH(OH) group that oxidizes to one), so it separates acetophenone from every other C8H8O carbonyl compound in one step. The negative Tollens test is the other half: 4-methylbenzaldehyde would be DNP positive and iodoform negative but Tollens positive, and would show the aldehyde C-H bands the IR lacks.",
      "options": {
        "A": "Correct. C8H8O with five unsaturations, a conjugated ketone by IR and by the three tests, a monosubstituted ring, a 3H singlet at 2.6, and a base peak at 105 for the benzoyl cation is acetophenone.",
        "B": "Phenylacetaldehyde has the formula, but it is an aldehyde: Tollens positive, iodoform negative, a 1H triplet near 9.7 and a 2H doublet near 3.7, an unconjugated carbonyl near 1725 with the 2720/2820 pair, and a base peak at 91 (the benzyl cation) rather than 105.",
        "C": "4-Methylbenzaldehyde has the formula and a conjugated carbonyl at 1700, but it is an aldehyde: Tollens positive, iodoform negative, a 1H singlet near 9.95, a para-disubstituted ring giving two 2H doublets, and a methyl singlet at 2.4 rather than 2.6.",
        "D": "Styrene oxide has the formula and the ring, but no carbonyl: no 1685 band, no DNP or iodoform precipitate, no 198 ppm carbon, and its three oxirane protons appear as doublets of doublets near 3.9, 3.1 and 2.8 rather than as a 3H singlet."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 2.6,
          "y": 3,
          "label": "singlet"
        },
        {
          "x": 7.45,
          "y": 2,
          "label": "triplet"
        },
        {
          "x": 7.55,
          "y": 1,
          "label": "triplet"
        },
        {
          "x": 7.95,
          "y": 2,
          "label": "doublet"
        }
      ]
    }
  },
  {
    "question_id": "ch13_q45_elucidation_1_4_dioxane",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Medium",
    "question_text": "A compound with molecular formula $\\text{C}_4\\text{H}_8\\text{O}_2$ has no IR absorption near $1700\\text{ cm}^{-1}$ or $3300\\text{ cm}^{-1}$. Its $^1\\text{H}$ NMR spectrum shows only a single singlet at $\\delta = 3.69\\text{ ppm}$, and its $^{13}\\text{C}$ NMR spectrum displays a single signal at $\\delta = 67.2\\text{ ppm}$. What is the structure of this compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "1,4-Dioxane",
        "smiles": "C1COCCO1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethyl acetate",
        "smiles": "CC(=O)OCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-Hydroxybutanal",
        "smiles": "CC(O)CC=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyl propanoate",
        "smiles": "CCC(=O)OC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "One proton signal and one carbon signal for a C4 compound with two oxygens is a demand for very high symmetry: every carbon equivalent, every proton equivalent, and nothing for any proton to couple to except equivalent protons. Only a symmetrical ring meets it, and the shifts say which: 3.69 and 67 ppm are a CH2 bonded to oxygen.",
      "approach": "Step 1: Unsaturation: (2 x 4 + 2 - 8)/2 = 1. The IR shows no carbonyl near 1700 and no O-H near 3300, so the unsaturation is a ring, not a C=O.\nStep 2: A single 1H singlet means all eight protons are equivalent and have no non-equivalent neighbours; a single 13C line means all four carbons are equivalent.\nStep 3: The shifts, 3.69 ppm and 67 ppm, are those of a CH2 bonded to an ether oxygen.\nStep 4: Four equivalent O-CH2 carbons with two oxygens in a ring: 1,4-dioxane, in which every CH2 is flanked by an oxygen and an equivalent CH2.",
      "note": "A single line in each spectrum is one of the strongest constraints an unknown can offer, and a short list of compounds meets it: dioxane, cyclohexane, benzene, acetone, tert-butanol's methyls apart from its O-H. The chemical shift then picks among them. Dioxane's 3.69 is the same O-CH2 shift as an open-chain ether's, so the ring is inferred from the count, not the shift.",
      "options": {
        "A": "Correct. 1,4-Dioxane's four CH2 carbons and eight protons are all equivalent, giving one 13C line at 67 and one 1H singlet at 3.69, and its unsaturation is the ring, consistent with the empty carbonyl and O-H regions.",
        "B": "Ethyl acetate would show a strong carbonyl band at 1740, three proton signals (a quartet, a singlet and a triplet), and four carbon lines including one near 171.",
        "C": "3-Hydroxybutanal has an O-H band, a carbonyl band and an aldehyde proton near 9.8, and its four carbons are all different: four 13C lines and four proton signals.",
        "D": "Methyl propanoate would show the ester carbonyl at 1740, a 3H singlet at 3.67 alongside a quartet and a triplet, and four carbon lines."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q46_elucidation_chloropropanoic_acid",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound Y is a liquid that effervesces with aqueous $\\text{NaHCO}_3$ and gives a green flame in the Beilstein test. Combustion analysis gives C 33.2%, H 4.6% and Cl 32.7% by mass, the remainder oxygen. Its mass spectrum shows a molecular ion at $m/z = 108$ with a peak at 110 about one-third as tall, peaks at 91 and 93, 73 and 45, and a base peak at 63 with a companion at 65. IR: a very broad band from 2500 to $3300\\text{ cm}^{-1}$, a strong band at 1720, and bands at 1220 and $680\\text{ cm}^{-1}$. The $^1\\text{H}$ NMR spectrum is shown. Which structure is Y?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "2-Chloropropanoic acid",
        "smiles": "CC(Cl)C(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Chloropropanoic acid",
        "smiles": "ClCCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Methyl chloroacetate",
        "smiles": "ClCC(=O)OC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl chloroformate",
        "smiles": "CCOC(=O)Cl",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two of the four classical tools point at a halogen acid before the spectra are read: effervescence with bicarbonate is a carboxylic acid, and a green Beilstein flame is a halogen. The mass spectrum then says which halogen (a 3:1 M+2 peak is one chlorine) and the NMR places it on the carbon skeleton through the coupling pattern.",
      "approach": "Step 1: Empirical formula. Per 100 g: C 33.2/12.01 = 2.76 mol, H 4.6/1.008 = 4.56 mol, Cl 32.7/35.45 = 0.92 mol, O 29.5/16.00 = 1.84 mol. Dividing by 0.92: C 3, H 5, Cl 1, O 2, so C3H5ClO2, mass 108.5. The molecular ion at 108 with a 110 peak one-third as tall confirms one chlorine. Unsaturation = (2 x 3 + 2 - 5 - 1)/2 = 1.\nStep 2: Functional group. The broad 2500 to 3300 band with the 1720 carbonyl is a carboxylic acid, and the bicarbonate test agrees; the one unsaturation is the C=O. The 680 band is C-Cl.\nStep 3: Skeleton. The 3H doublet at 1.70 is a methyl next to one proton; the 1H quartet at 4.41 is that proton, next to three, and pushed to 4.4 by both the chlorine and the carbonyl on its carbon. The 1H singlet at 11.8 is the acid O-H.\nStep 4: CH3-CHCl-COOH, 2-chloropropanoic acid. The chlorine must be on the CH, since the methyl at 1.70 is not on a chlorinated carbon (that would put it near 3.5).\nStep 5: Mass spectrum check: 63/65 is CH3CHCl+ from loss of the COOH radical, an alpha-cleavage cation stabilized by the chlorine lone pair; 91/93 is loss of OH to the acylium ion; 73 is loss of Cl; 45 is COOH+.",
      "note": "The M+2 rule that identifies chlorine works only on fragments that still contain it: 63/65 and 91/93 keep the 3:1 pair, 73 and 45 do not. Reading which fragments keep the isotope pattern is a second way to locate the chlorine, and it agrees with the NMR here: the C2 fragment CH3CHCl+ carries it, so the chlorine is on C2.",
      "options": {
        "A": "Correct. C3H5ClO2, a carboxylic acid by IR and by the bicarbonate test, with a methyl doublet coupled to a single deshielded methine quartet at 4.41: the chlorine and the carboxyl share C2, and the base peak at 63/65 is CH3CHCl+.",
        "B": "3-Chloropropanoic acid has the formula, the acid and the chlorine, but its two CH2 groups would give two 2H triplets near 3.8 (CH2Cl) and 2.85 (CH2-COOH), not a doublet and a quartet, and its alpha-cleavage fragment would be ClCH2CH2+ at 63/65 only as a minor peak beside a strong 45.",
        "C": "Methyl chloroacetate has the formula and the chlorine but is an ester: no effervescence, no broad O-H band, a carbonyl near 1750, and two singlets, 4.05 (CH2Cl) and 3.80 (OCH3), with no doublet-quartet pair.",
        "D": "Ethyl chloroformate has the formula but no acid group: no effervescence, no O-H band, a carbonyl near 1780, and an ethyl pattern with the quartet at 4.35 integrating to 2H against a 3H triplet; nothing at 11.8."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 1.7,
          "y": 3,
          "label": "doublet"
        },
        {
          "x": 4.41,
          "y": 1,
          "label": "quartet"
        },
        {
          "x": 11.8,
          "y": 1,
          "label": "singlet"
        }
      ]
    }
  },
  {
    "question_id": "ch13_q47_elucidation_butanenitrile",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "An unknown compound contains carbon, hydrogen and nitrogen only. Its mass spectrum shows a molecular ion at $m/z = 69$, a peak at 68, and a base peak at 41. The IR spectrum shows a sharp, medium band at $2250\\text{ cm}^{-1}$ and no absorption between 3200 and $3500\\text{ cm}^{-1}$. The $^1\\text{H}$ NMR spectrum displays a triplet at $\\delta = 2.33\\text{ ppm}$ ($J = 7.1\\text{ Hz}$, 2H), a sextet at $\\delta = 1.68\\text{ ppm}$ (2H), and a triplet at $\\delta = 1.02\\text{ ppm}$ ($J = 7.3\\text{ Hz}$, 3H). What is the structure of this compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Butanenitrile",
        "is_correct": true,
        "smiles": "CCCC#N"
      },
      {
        "option_id": "B",
        "text": "2-Methylpropanenitrile",
        "is_correct": false,
        "smiles": "CC(C)C#N"
      },
      {
        "option_id": "C",
        "text": "2-Butenenitrile",
        "is_correct": false,
        "smiles": "CC=CC#N"
      },
      {
        "option_id": "D",
        "text": "Pentanenitrile",
        "is_correct": false,
        "smiles": "CCCCC#N"
      }
    ],
    "feedback": {
      "context": "An odd molecular ion is the first clue: by the nitrogen rule a compound of C, H and N with an odd mass has an odd number of nitrogens, one here. A sharp band at 2250 places that nitrogen in a nitrile, and the absence of any N-H stretch rules out an amine. The formula then follows from the mass, and the NMR pattern decides which nitrile.",
      "approach": "Step 1: Nitrogen rule: M = 69 is odd, so one nitrogen. Subtracting 14 leaves 55 for C and H: C4H7, so the compound is C4H7N. Unsaturation = (2 x 4 + 2 + 1 - 7)/2 = 2.\nStep 2: Functional group. The 2250 band is a C-N triple bond, which accounts for both unsaturations; no N-H means no amine.\nStep 3: Skeleton. Three signals, 2H triplet, 2H sextet, 3H triplet, are an unbranched propyl chain: CH2 next to the nitrile at 2.33 (coupled to the middle CH2), the middle CH2 at 1.68 (coupled to five protons), the terminal methyl at 1.02.\nStep 4: CH3CH2CH2-CN, butanenitrile.\nStep 5: Mass spectrum check: 41 is the allyl cation C3H5+ after loss of HCN and a hydrogen from the chain, the usual base peak of small alkyl nitriles; 68 is M - 1, loss of an alpha hydrogen to give a stabilized cation, and it is the only fragment that keeps the nitrogen.",
      "note": "Nitriles rarely give a strong molecular ion, and the fragment that keeps the nitrogen is often M - 1 rather than M, so an odd-mass peak at the high end of an alkyl nitrile's spectrum should be checked as M - 1 as well as M. Here the NMR count of seven protons for four carbons settles the formula independently.",
      "options": {
        "A": "Correct. C4H7N from the odd molecular ion and the nitrogen rule, a nitrile by IR, and an unbranched three-carbon chain from the triplet-sextet-triplet pattern.",
        "B": "2-Methylpropanenitrile has the same molecular ion at 69 and the same nitrile band, but its isopropyl group gives a 6H doublet near 1.35 and a 1H septet near 2.7, not two 2H signals and a 3H triplet.",
        "C": "2-Butenenitrile is C4H5N with a molecular ion at 67, not 69, and its alkene protons would appear near 5.5 and 6.7 ppm; the spectrum shows nothing above 2.4.",
        "D": "Pentanenitrile is C5H9N with a molecular ion at 83, and its extra CH2 would add a fourth signal; the three signals here integrate to seven protons on four carbons."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q48_elucidation_pbromotoluene",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Medium",
    "question_text": "A compound with molecular formula $\\text{C}_7\\text{H}_7\\text{Br}$ exhibits a $^1\\text{H}$ NMR spectrum consisting of two doublets at $\\delta = 7.30\\text{ ppm}$ ($J = 8.0\\text{ Hz}$, 2H) and $\\delta = 7.08\\text{ ppm}$ ($J = 8.0\\text{ Hz}$, 2H), and a singlet at $\\delta = 2.28\\text{ ppm}$ (3H). What is the structure of this compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "1-Bromo-4-methylbenzene",
        "smiles": "Cc1ccc(Br)cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Bromo-2-methylbenzene",
        "smiles": "Cc1ccccc1Br",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzyl bromide",
        "smiles": "BrCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Bromo-3-methylbenzene",
        "smiles": "Cc1cccc(Br)c1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The aromatic region tells a substitution pattern by symmetry. Two 2H doublets with the same coupling constant are the signature of a para-disubstituted ring with two different substituents: the two protons ortho to one substituent are equivalent, the two ortho to the other are equivalent, and each pair couples only to the other. Ortho and meta rings lack that symmetry and give complex multiplets.",
      "approach": "Step 1: Unsaturation: (2 x 7 + 2 - 7 - 1)/2 = 4, a benzene ring.\nStep 2: Four aromatic protons in two 2H doublets sharing J = 8.0 Hz: a para-disubstituted ring. The doublet at 7.30 is the pair ortho to bromine, the doublet at 7.08 the pair ortho to the methyl.\nStep 3: The 3H singlet at 2.28 is a methyl on the ring, with no neighbours to split it.\nStep 4: Substituents: CH3 and Br, para. 1-Bromo-4-methylbenzene.",
      "note": "The 8 Hz coupling is an ortho coupling; meta couplings are 2 to 3 Hz and para couplings near zero, which is why each doublet here is clean. A para ring in which the two substituents have similar electronic effects can collapse toward a singlet, as in p-xylene; the bromine's mild deshielding of its ortho protons is enough to keep the two doublets apart.",
      "options": {
        "A": "Correct. Two 2H doublets with a shared 8 Hz coupling are a para-disubstituted ring, and the 3H singlet is a ring methyl: 1-bromo-4-methylbenzene.",
        "B": "1-Bromo-2-methylbenzene has four non-equivalent ring protons, each coupled to one or two neighbours, giving a complex multiplet from 7.0 to 7.5 rather than two clean doublets.",
        "C": "Benzyl bromide has the formula, but its five ring protons appear as one 5H multiplet near 7.3, and its CH2Br is a 2H singlet at 4.45, not a 3H singlet at 2.28.",
        "D": "1-Bromo-3-methylbenzene has four different ring protons (one isolated between the substituents, three in a row) and shows several aromatic signals with both ortho and meta couplings, not two symmetric doublets."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q49_elucidation_isopropyl_bromide",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Medium",
    "question_text": "A halogenated compound with molecular formula $\\text{C}_3\\text{H}_7\\text{Br}$ displays molecular ion peaks in mass spectrometry at $m/z = 122$ and $124$ in a 1:1 ratio. The $^1\\text{H}$ NMR spectrum shows a doublet at $\\delta = 1.71\\text{ ppm}$ ($J = 6.8\\text{ Hz}$, 6H) and a septet at $\\delta = 4.30\\text{ ppm}$ ($J = 6.8\\text{ Hz}$, 1H). What is the structure of this compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "2-Bromopropane",
        "smiles": "CC(Br)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Bromopropane",
        "smiles": "CCCBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Bromocyclopropane",
        "smiles": "C1CC1Br",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Allyl bromide",
        "smiles": "C=CCBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Bromine is the easiest element to see in a mass spectrum: 79Br and 81Br are almost equally abundant, so every ion that contains one bromine appears as a pair of peaks two units apart of equal height. With the halogen settled, an NMR doublet and septet in a 6:1 ratio is an isopropyl group, and the septet's shift says what the isopropyl carbon carries.",
      "approach": "Step 1: The 1:1 pair at 122 and 124 is a molecular ion containing one bromine. Subtracting 79 leaves 43, C3H7. Unsaturation for C3H7Br: (2 x 3 + 2 - 7 - 1)/2 = 0, saturated.\nStep 2: The 6H doublet at 1.71 is two equivalent methyls coupled to one proton; the 1H septet at 4.30 is that proton coupled to six. An isopropyl group.\nStep 3: The septet at 4.30 is deshielded by about 3 ppm from an alkane CH, so the bromine is on that carbon.\nStep 4: (CH3)2CH-Br, 2-bromopropane.",
      "note": "Chlorine gives the same test with a different answer: a 3:1 pair for one chlorine, against bromine's 1:1. The pattern survives in every fragment that keeps the halogen and vanishes from those that lose it, so the 43 peak of 2-bromopropane (C3H7+, loss of Br) is a single peak while the molecular ion is a pair.",
      "options": {
        "A": "Correct. A 1:1 molecular-ion pair says one bromine, C3H7Br is saturated, and a 6H doublet with a 1H septet at 4.30 puts the bromine on the central carbon of an isopropyl group.",
        "B": "1-Bromopropane has the same molecular ion pair, but its unbranched chain gives a 2H triplet near 3.4 for CH2Br, a 2H sextet and a 3H triplet, with no 6H doublet.",
        "C": "Bromocyclopropane is C3H5Br with a molecular ion pair at 120/122, two units lower, and its ring protons appear as complex multiplets near 3.0 and 0.9, not a doublet and septet.",
        "D": "Allyl bromide is also C3H5Br, molecular ion at 120/122, and shows alkene protons near 5.2 to 6.0 and a CH2Br doublet near 3.9; the spectrum here has nothing above 4.3."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q50_elucidation_anisole",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "An unknown ether has the molecular formula $\\text{C}_{11}\\text{H}_{16}\\text{O}$. Its IR spectrum shows strong bands at $1250$ and $1040\\text{ cm}^{-1}$ and no bands above $3100\\text{ cm}^{-1}$. The $^1\\text{H}$ NMR spectrum features a singlet at $\\delta = 1.30\\text{ ppm}$ (9H), a singlet at $\\delta = 3.78\\text{ ppm}$ (3H), a doublet at $\\delta = 6.82\\text{ ppm}$ ($J = 8.8\\text{ Hz}$, 2H), and a doublet at $\\delta = 7.30\\text{ ppm}$ ($J = 8.8\\text{ Hz}$, 2H). What is the structure of this compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "1-tert-Butyl-4-methoxybenzene",
        "smiles": "COc1ccc(cc1)C(C)(C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-tert-Butyl-5-methylphenol",
        "smiles": "Cc1ccc(C(C)(C)C)c(O)c1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-tert-Butylbenzyl alcohol",
        "smiles": "CC(C)(C)c1ccc(CO)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-Isopropylphenetole",
        "smiles": "CCOc1ccc(cc1)C(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A 9H singlet and a 3H singlet near 3.8 are two of the most recognizable fragments in proton NMR: a tert-butyl group and a methoxy group. With no O-H in the IR, the methoxy oxygen is an ether oxygen, and the two strong C-O bands at 1250 and 1040 (asymmetric and symmetric aryl-alkyl ether stretches) say it is on the ring. Two 2H doublets place the two groups para.",
      "approach": "Step 1: Unsaturation: (2 x 11 + 2 - 16)/2 = 4, a benzene ring; the remaining carbons and the oxygen are substituents.\nStep 2: No band above 3100 means no O-H; the compound is an ether, and the 1250/1040 pair is the aryl-alkyl ether C-O stretch.\nStep 3: The 9H singlet at 1.30 is a tert-butyl group on the ring; the 3H singlet at 3.78 is an O-CH3 on the ring.\nStep 4: Four ring protons as two 2H doublets with J = 8.8 Hz: para-disubstituted. The doublet at 6.82 is ortho to the methoxy (shielded by oxygen's lone-pair donation), the one at 7.30 is ortho to the tert-butyl.\nStep 5: 1-tert-Butyl-4-methoxybenzene.",
      "note": "The upfield aromatic doublet is diagnostic on its own: protons ortho to an alkoxy group sit near 6.8, below the 7.27 of benzene, because the oxygen donates electron density to the ortho and para positions by resonance. An electron-withdrawing substituent such as an acyl group does the opposite and pushes its ortho protons toward 8.",
      "options": {
        "A": "Correct. A tert-butyl 9H singlet, an aryl methoxy 3H singlet at 3.78, no O-H, an aryl ether C-O pair in the IR, and two 2H doublets for a para ring: 1-tert-butyl-4-methoxybenzene.",
        "B": "2-tert-Butyl-5-methylphenol has the formula, but it is a phenol: a broad O-H band near 3400, a phenolic O-H signal near 4.7, an aryl methyl singlet at 2.3 rather than a methoxy at 3.78, and three ring protons.",
        "C": "4-tert-Butylbenzyl alcohol has the formula and the para ring, but its oxygen is an alcohol: an O-H band near 3300, a 2H singlet near 4.6 for CH2-OH and an exchangeable O-H, with no 3H singlet at 3.78.",
        "D": "4-Isopropylphenetole has the formula and is an aryl ether, but its ethoxy group would show a 2H quartet near 4.0 and a 3H triplet near 1.4, and its isopropyl a 6H doublet and 1H septet; it has no 9H singlet."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q_dynamic_nmr_shifts",
    "topic": "NMR Spectroscopy",
    "difficulty_level": "Hard",
    "question_text": "For each compound, match the chemical shift of its most downfield carbon-bound proton signal (ignore any O-H).",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCO",
        "correctAnswer": "3.5 - 4.0 ppm (CH2 bonded to oxygen)",
        "alt": "A two-carbon chain ending in a hydroxyl group."
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "7.2 ppm (aromatic ring protons)",
        "alt": "A benzene ring carrying one methyl group."
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "2.1 ppm (CH3 next to a carbonyl)",
        "alt": "A three-carbon chain whose middle carbon is double-bonded to oxygen."
      },
      {
        "smiles": "CC(C)(C)C",
        "correctAnswer": "0.9 ppm (alkane C-H with no functional group nearby)",
        "alt": "A central carbon bonded to four methyl groups."
      }
    ],
    "match_options": [
      "3.5 - 4.0 ppm (CH2 bonded to oxygen)",
      "7.2 ppm (aromatic ring protons)",
      "2.1 ppm (CH3 next to a carbonyl)",
      "0.9 ppm (alkane C-H with no functional group nearby)",
      "9.8 ppm (aldehyde C-H)"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect chemical shifts",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Proton chemical shifts are set by two things: how much electron density surrounds the proton, and where it sits relative to any pi system. An electronegative atom on the same carbon strips density and moves the signal downfield by two or three ppm; a carbonyl on the next carbon moves it about one; an aromatic ring current moves ring protons to 7 ppm and more. A proton with none of these sits near 0.9.",
      "approach": "Step 1: Ethanol's carbon-bound protons are the CH3 at 1.2 and the CH2 at 3.7; the CH2 is bonded to oxygen and is the downfield one, in the 3.5 to 4.0 range.\nStep 2: Toluene has a methyl at 2.3 and five ring protons near 7.2; the ring protons, deshielded by the ring current, are the downfield set.\nStep 3: Acetone has one kind of proton, six methyl protons alpha to the carbonyl, at 2.1.\nStep 4: 2,2-Dimethylpropane has one kind of proton, twelve methyl protons on a saturated carbon with no heteroatom or pi bond anywhere, at 0.9.\nStep 5: The 9.8 ppm option is an aldehyde proton; none of the four compounds has one.",
      "note": "The same four regions cover most of the proton spectrum: 0.8 to 1.8 saturated C-H, 2 to 3 for C-H next to a carbonyl, alkene or aromatic ring, 3 to 4.5 for C-H on a carbon bearing oxygen or a halogen, 4.5 to 6.5 for vinylic protons, 6.5 to 8 aromatic, 9 to 10 aldehyde. Learning them as the neighbourhood of each proton, rather than as a list, is what makes an unknown's spectrum readable.",
      "options": {
        "A": "Correct. The O-CH2 of ethanol is at 3.7, toluene's ring protons at 7.2, acetone's methyls at 2.1 and neopentane's methyls at 0.9; the aldehyde option belongs to none of them.",
        "B": "Ask what each proton's carbon is attached to: an oxygen (3.5 to 4.0), an aromatic ring on which the proton itself sits (7.2), a carbonyl next door (2.1), or nothing but other saturated carbons (0.9). The 9.8 option needs a C-H on a carbonyl carbon, which none of these compounds has."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q3",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated $^1\\text{H}$ NMR spectrum of an unknown compound is shown, with the relative integration of each signal marked. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 7.3,
          "y": 3,
          "label": "multiplet"
        },
        {
          "x": 7.5,
          "y": 2,
          "label": "multiplet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Ethyl benzoate",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Benzyl alcohol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Bromobenzene",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Nitrobenzene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A spectrum with signals only between 7 and 8 ppm says every proton in the molecule is on an aromatic ring: no alkyl group, no O-H, no aldehyde. Five aromatic protons in a 2:3 split is a monosubstituted benzene whose substituent carries no hydrogen. The shifts then rank the substituent: a halogen leaves the ring near benzene's 7.3, a carbonyl or nitro group pushes the ortho protons past 8.",
      "approach": "Step 1: Add the integrations: 2 + 3 = 5 protons, all aromatic. The substituent has no protons of its own.\nStep 2: Two sets, 2H and 3H, are the ortho pair and the meta-plus-para trio of a monosubstituted ring.\nStep 3: The downfield set is only at 7.5, barely above benzene. A substituent that withdraws strongly by resonance (NO2, C=O) would put its ortho protons at 8.0 to 8.2. A halogen deshields its ortho protons only slightly.\nStep 4: Bromobenzene: ortho 7.5 (2H), meta and para 7.2 to 7.3 (3H), nothing else.",
      "note": "Chlorobenzene gives nearly the same spectrum, and at this level the two cannot be told apart by proton NMR alone; the mass spectrum separates them at once (M and M+2 in a 3:1 ratio for chlorine, 1:1 for bromine). An item like this one asks only which of the four listed compounds fits, and only one of them has no protons outside the ring.",
      "options": {
        "A": "Ethyl benzoate has an ethyl group: a 2H quartet at 4.37 and a 3H triplet at 1.39, and the carbonyl pushes its ortho protons to 8.05. The spectrum has nothing below 7 ppm.",
        "B": "Benzyl alcohol has a 2H singlet at 4.6 for the CH2-O and an exchangeable O-H; its five ring protons are all near 7.3, but the spectrum would total eight protons, not five.",
        "C": "Correct. Five aromatic protons, a 2H set slightly downfield of a 3H set and nothing above 7.6, is a monosubstituted benzene with a halogen substituent: bromobenzene.",
        "D": "Nitrobenzene has five ring protons too, but the nitro group withdraws by resonance and its ortho protons appear as a doublet at 8.2, with the para proton at 7.7; nothing sits at 7.3."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q8",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated $^1\\text{H}$ NMR spectrum of an unknown compound is shown, with the relative integration of each signal marked. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 1.8,
          "y": 4,
          "label": "multiplet"
        },
        {
          "x": 3.7,
          "y": 4,
          "label": "multiplet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Diethyl ether",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Tetrahydrofuran",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "1,4-Dioxane",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclopentanone",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two signals of equal integration, one near 3.7 and one near 1.8, are two CH2 environments: one bonded to oxygen, the other one carbon further away. Equal integrals with only two environments point to a symmetrical molecule, and multiplets rather than a clean triplet-triplet pair point to a ring, where the CH2 groups couple around the cycle.",
      "approach": "Step 1: Count: 4H + 4H = 8 protons in two environments, so the molecule has a symmetry that pairs its CH2 groups.\nStep 2: The 3.7 ppm set is CH2 bonded to an ether oxygen. The 1.8 ppm set is CH2 one carbon removed from it, an ordinary alkane CH2 slightly deshielded.\nStep 3: An open-chain ether with two O-CH2 groups would carry CH3 groups (a triplet near 1.2); there is none, so the chain closes on itself.\nStep 4: Tetrahydrofuran: O-CH2 (C2 and C5) at 3.7 and CH2-CH2 (C3 and C4) at 1.8, each 4H.",
      "note": "THF's two signals appear as multiplets rather than triplets because the four protons on each pair of carbons are two chemically equivalent but magnetically non-equivalent sets (an AA'BB' system), a common situation in symmetric rings. At the level of this item, reading them as two 4H signals at the right shifts is what matters.",
      "options": {
        "A": "Diethyl ether has an O-CH2 signal near 3.5, but it is a 4H quartet coupled to a 6H triplet at 1.2. The upfield signal here integrates to 4H, not 6H, and there is no methyl.",
        "B": "Correct. Two 4H multiplets, one at the O-CH2 shift and one at the shift of a CH2 next to it, with no methyl groups, is the five-membered cyclic ether tetrahydrofuran.",
        "C": "1,4-Dioxane's eight protons are all equivalent O-CH2 protons and give a single singlet at 3.7. It has no signal at 1.8.",
        "D": "Cyclopentanone is also symmetric with two 4H signals, but both are near 2.0 to 2.2, the shift of CH2 groups alpha and beta to a carbonyl. Nothing in a ketone reaches 3.7."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q18",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated $^1\\text{H}$ NMR spectrum of an unknown compound is shown, with the relative integration of each signal marked. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 2.1,
          "y": 6,
          "label": "singlet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Acetic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Acetone",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Dimethyl sulfoxide",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Dimethyl ether",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A single singlet at 2.1 ppm is a methyl group with no proton neighbours, sitting one carbon away from a carbonyl, and a spectrum with nothing else says the molecule contains no other kind of proton. The three small symmetrical molecules with one methyl environment, dimethyl ether, acetone and DMSO, are told apart by the shift alone: 3.2, 2.1 and 2.6 for a methyl on oxygen, on a carbonyl and on a sulfoxide sulfur.",
      "approach": "Step 1: One signal, so all protons are equivalent; one singlet, so they have no non-equivalent neighbours.\nStep 2: 2.1 ppm is the shift of a CH3 alpha to a carbonyl.\nStep 3: There is no second signal: no O-H near 11 or 12 ppm, so the carbonyl is not an acid; no signal at 9.8, so it is not an aldehyde.\nStep 4: Two equivalent methyls on a carbonyl: acetone.",
      "note": "Acetic acid's methyl appears at the same 2.1 ppm, so the acid and the ketone are separated not by that signal but by the acid's second one, a broad 1H singlet near 11.8. When two candidates share a signal, look for the one signal the other must have and does not.",
      "options": {
        "A": "Acetic acid has a 3H singlet at 2.1 as well, but it also has the carboxylic acid proton, a broad singlet near 11.8 ppm. The spectrum shows one signal only.",
        "B": "Correct. One singlet at 2.1 ppm, with no exchangeable proton and nothing else, is a symmetrical methyl ketone: acetone.",
        "C": "Dimethyl sulfoxide gives a single 6H singlet too, but at 2.6 ppm; the sulfoxide sulfur deshields more than a carbonyl does.",
        "D": "Dimethyl ether's six protons are one singlet, but a methyl on oxygen appears at 3.2 ppm, a full ppm downfield of the observed signal."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q12",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated $^1\\text{H}$ NMR spectrum of an unknown compound is shown, with the relative integration of each signal marked. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 7.3,
          "y": 6,
          "label": "singlet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Toluene",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Cyclohexane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzene",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Cyclohexene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A single singlet means every proton in the molecule is equivalent and has no non-equivalent neighbour. The shift then identifies the environment: 7.3 ppm is the aromatic region, where a ring current deshields protons on the ring. A six-carbon compound with all its protons equivalent and aromatic can only be benzene.",
      "approach": "Step 1: One signal, so one proton environment; the molecule has enough symmetry to make all its protons equivalent.\nStep 2: The shift, 7.3 ppm, is far downfield of any saturated or vinylic proton and sits exactly where benzene resonates.\nStep 3: Among the six-carbon candidates, only benzene has all its protons on the ring and all equivalent.\nStep 4: The 6H integration is consistent with C6H6, although a single-signal spectrum cannot fix an absolute count on its own.",
      "note": "Cyclohexane also gives a single singlet, at 1.4 ppm, because ring flipping averages its axial and equatorial protons. The two compounds are the same in shape of spectrum and 6 ppm apart in position, which is the cleanest demonstration in the chapter that shift, not multiplicity, carries the aromatic information.",
      "options": {
        "A": "Toluene has a 3H singlet at 2.3 for the methyl as well as its ring protons, and the ring protons are a 5H multiplet, not a singlet, because the methyl makes ortho, meta and para positions different.",
        "B": "Cyclohexane does give a single singlet, but at 1.4 ppm, in the saturated region. A signal at 7.3 needs an aromatic ring.",
        "C": "Correct. One singlet at 7.3 ppm is a molecule whose protons are all equivalent and all aromatic: benzene.",
        "D": "Cyclohexene has two vinylic protons near 5.7 and eight saturated protons near 2.0 and 1.6, three signals in the ratio 2:4:4, none of them at 7.3."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q14",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated $^1\\text{H}$ NMR spectrum of an unknown $\\text{C}_4\\text{H}_8$ hydrocarbon is shown, with the relative integration of each signal marked. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 1.7,
          "y": 6,
          "label": "singlet"
        },
        {
          "x": 4.6,
          "y": 2,
          "label": "singlet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "trans-2-Butene",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "1-Butene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Methylpropene",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Cyclobutane",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "C4H8 has one unsaturation, a ring or a double bond, and the spectrum decides which: a signal near 4.6 to 5.5 is a vinylic proton, so the compound is an alkene. Two singlets, 6H and 2H, then say that the two methyls are equivalent and see no proton neighbour, and that the two vinylic protons are equivalent and see none either. The only way to arrange that is a CH2= end with both methyls on the other alkene carbon.",
      "approach": "Step 1: Unsaturation: (2 x 4 + 2 - 8)/2 = 1.\nStep 2: The 2H signal at 4.6 is vinylic, so the unsaturation is a C=C; that rules out the ring.\nStep 3: The 6H signal at 1.7 is two equivalent methyls, at the allylic shift. It is a singlet, so the carbon they sit on carries no proton: it is the C(CH3)2= end of the alkene.\nStep 4: The 2H vinylic singlet is the =CH2 end, with no proton on the adjacent carbon to split it.\nStep 5: (CH3)2C=CH2, 2-methylpropene.",
      "note": "Both signals are, at high resolution, finely split by a four-bond allylic coupling of about 1 Hz; the methyl is a narrow triplet and the =CH2 a narrow septet. The simulation draws them as singlets, and at routine resolution they look like slightly broadened ones.",
      "options": {
        "A": "trans-2-Butene has equivalent methyls and equivalent vinylic protons too, but each vinylic carbon carries a proton, so the methyls are a doublet near 1.6 and the vinylic protons a multiplet near 5.4, not two singlets.",
        "B": "1-Butene has no symmetry: a 3H triplet, a 2H multiplet near 2.0, and three separate vinylic protons between 4.9 and 5.8, four signals in all.",
        "C": "Correct. A 6H allylic singlet and a 2H vinylic singlet with no coupling between them is a 1,1-disubstituted alkene: 2-methylpropene.",
        "D": "Cyclobutane is saturated; its eight equivalent protons give a single singlet near 1.96, and nothing in it can appear at 4.6."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q21",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated $^1\\text{H}$ NMR spectrum of an unknown compound is shown, with the relative integration of each signal marked. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 3.4,
          "y": 3,
          "label": "singlet"
        },
        {
          "x": 2,
          "y": 1,
          "label": "singlet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Dimethyl ether",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Methyl formate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Methanol",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Ethanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A 3H singlet at 3.4 is a methyl on oxygen with no proton neighbours. The 1H singlet that accompanies it is the question: a proton with no coupling that integrates to one is either an O-H, whose shift wanders with concentration, or an isolated C-H such as a formate proton, whose shift is fixed near 8. Where that 1H signal sits, and whether it exchanges with D2O, decides between methanol and its formate ester.",
      "approach": "Step 1: The 3H singlet at 3.4 is CH3-O; no coupling means no proton on whatever the oxygen is attached to.\nStep 2: The 1H singlet at 2.0 is too far upfield to be a formyl or aromatic C-H and is in the range where an alcohol O-H appears at moderate concentration.\nStep 3: A methyl on oxygen, plus one exchangeable proton on the same oxygen, is CH3-OH.\nStep 4: The O-H shows no coupling to the methyl because intermolecular exchange averages it away; a D2O shake would remove the 1H signal and leave the 3H singlet.",
      "note": "Methanol's O-H can appear anywhere from about 1 ppm in dilute CDCl3 to 4.8 ppm neat, and the simulation places it at 2.0. A signal that moves when the sample is diluted is the surest sign of an exchangeable proton, more reliable than any single shift value.",
      "options": {
        "A": "Dimethyl ether has only one kind of proton, a 6H singlet at 3.2, and nothing that integrates to 1H. It has no O-H.",
        "B": "Methyl formate also shows two singlets in a 3:1 ratio, but its 1H is the formate C-H at 8.1 ppm and its methyl is at 3.8; neither matches, and its 1H would survive a D2O shake.",
        "C": "Correct. A 3H singlet at the O-CH3 shift and a 1H singlet at a typical alcohol O-H position, with no coupling between them, is methanol.",
        "D": "Ethanol has an ethyl group: a 3H triplet at 1.2 and a 2H quartet at 3.7, plus the O-H. There is no 3H singlet in ethanol's spectrum."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q24",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated $^1\\text{H}$ NMR spectrum of an unknown compound is shown, with the relative integration of each signal marked. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 2.2,
          "y": 4,
          "label": "multiplet"
        },
        {
          "x": 2,
          "y": 4,
          "label": "multiplet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Cyclopentane",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Cyclopentanone",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Tetrahydrofuran",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-Pentanone",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two 4H multiplets close together near 2 ppm are two pairs of equivalent CH2 groups, both a little deshielded from the alkane baseline and neither on an oxygen. A carbonyl explains that: the CH2 groups alpha to it sit near 2.2, the ones beta near 2.0, and a symmetrical ring is what makes each pair equivalent with no methyl group anywhere.",
      "approach": "Step 1: Count: 4H + 4H = 8 protons in two environments, no methyl triplet, no O-CH2 near 3.7.\nStep 2: Both shifts are in the 2.0 to 2.3 window characteristic of CH2 alpha and beta to a carbonyl.\nStep 3: Two equivalent pairs and no chain ends means a ring: the carbonyl carbon at the top, two alpha CH2 groups (C2 and C5) at 2.2, two beta CH2 groups (C3 and C4) at 2.0.\nStep 4: Cyclopentanone.",
      "note": "The same shape, two 4H signals, belongs to tetrahydrofuran, and the two are separated by a single number: the downfield signal is at 3.7 for the ether and 2.2 for the ketone. An IR spectrum would settle it faster still, with a strong band at 1745 for the strained five-membered ketone.",
      "options": {
        "A": "Cyclopentane has ten equivalent protons and gives a single singlet at 1.5 ppm; nothing in it is deshielded to 2.2, and it cannot show two signals.",
        "B": "Correct. Two 4H multiplets at 2.2 and 2.0, with no methyl and no O-CH2, are the alpha and beta CH2 pairs of a symmetrical cyclic ketone: cyclopentanone.",
        "C": "Tetrahydrofuran also gives two 4H multiplets, but its downfield one is an O-CH2 at 3.7, not 2.2. Nothing in this spectrum reaches the ether region.",
        "D": "3-Pentanone is symmetrical and its alpha CH2 groups appear near 2.4, but they are a 4H quartet coupled to a 6H triplet at 1.0. The spectrum has no 6H signal and no methyl."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q30",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated $^1\\text{H}$ NMR spectrum of an unknown compound is shown, with the relative integration of each signal marked. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 8.2,
          "y": 2,
          "label": "doublet"
        },
        {
          "x": 7.7,
          "y": 1,
          "label": "triplet"
        },
        {
          "x": 7.55,
          "y": 2,
          "label": "triplet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Benzaldehyde",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Bromobenzene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Nitrobenzene",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Benzoic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Five aromatic protons in a 2:1:2 pattern is a monosubstituted benzene, and the position of the 2H doublet says what the substituent does to the ring. Ortho protons at 8.2 ppm, nearly a full ppm downfield of benzene, mean a substituent that withdraws electrons strongly by resonance: a nitro group, a carbonyl, a sulfonyl. A spectrum with nothing outside the aromatic region then says the substituent carries no proton.",
      "approach": "Step 1: Add the integrations: 2 + 1 + 2 = 5, all between 7.5 and 8.2. Every proton is on the ring; the substituent has none.\nStep 2: The 2H doublet at 8.2 is the ortho pair, split by the meta protons; the 1H triplet at 7.7 is the para proton; the 2H triplet at 7.55 is the meta pair.\nStep 3: Ortho protons at 8.2 require a strongly withdrawing substituent. A halogen gives 7.5; a carbonyl gives about 8.0; a nitro group gives 8.2.\nStep 4: A withdrawing substituent with no protons: nitrobenzene.",
      "note": "The order of ortho-proton shifts, NO2 (8.2) > CO2H (8.1) > CHO (7.9) > Br (7.5) > H (7.27) > OCH3 (6.9), is the same order as the substituents' effect on electrophilic aromatic substitution: the groups that deshield the ring's protons are the ones that deactivate it toward electrophiles. NMR and reactivity read the same electron distribution.",
      "options": {
        "A": "Benzaldehyde has a similar aromatic pattern with its ortho doublet at 7.9, but it also has the aldehyde proton, a 1H singlet at 10.0; the spectrum shows no signal above 8.2.",
        "B": "Bromobenzene's five protons all lie between 7.2 and 7.5, because a halogen deshields the ring only weakly. Nothing in its spectrum reaches 8.2.",
        "C": "Correct. Five aromatic protons, with the ortho pair at 8.2 and no proton anywhere else, is a monosubstituted ring bearing a strongly withdrawing group with no hydrogens of its own: nitrobenzene.",
        "D": "Benzoic acid's ortho protons appear near 8.1, but the acid proton adds a broad 1H singlet near 12 ppm, and the spectrum shows only the five ring protons."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q33",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated $^1\\text{H}$ NMR spectrum of an unknown compound is shown, with the relative integration of each signal marked. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 1.7,
          "y": 6,
          "label": "doublet"
        },
        {
          "x": 4.3,
          "y": 1,
          "label": "septet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-Bromopropane",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "2-Propanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Bromopropane",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "2-Bromo-2-methylpropane",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A 6H doublet and a 1H septet are an isopropyl group and nothing else: six equivalent methyl protons split by one methine, and the methine split by six. What the methine carbon carries is read from its shift. At 4.3 ppm the methine is deshielded by about 3 ppm from an alkane, which is what a bromine on that carbon does; an oxygen would give 4.0 with an extra O-H signal, and a carbonyl only 2.6.",
      "approach": "Step 1: The 6H doublet at 1.7 is two equivalent methyls next to a single proton.\nStep 2: The 1H septet at 4.3 is that proton, coupled to the six methyl protons (n + 1 = 7).\nStep 3: There is no third signal: no O-H, no other alkyl protons. The molecule is (CH3)2CH-X where X has no protons.\nStep 4: The methine at 4.3 is deshielded by a directly bonded halogen; the methyls at 1.7 are also a little downfield of the 0.9 baseline, beta to the halogen. 2-Bromopropane.",
      "note": "2-Chloropropane gives nearly the same pattern shifted slightly upfield (4.1 and 1.5), and 2-iodopropane slightly further (4.3 and 1.9); at this level the three are alike, and the mass spectrum's molecular-ion pattern is the way to tell the halogen. This item lists only one secondary halide, so the isopropyl pattern settles it.",
      "options": {
        "A": "1-Bromopropane has an unbranched chain: a 2H triplet at 3.4 for CH2Br, a 2H sextet at 1.9 and a 3H triplet at 1.0. It shows no 6H doublet and no septet.",
        "B": "2-Propanol has the isopropyl pattern, but its methine is at 4.0 and its methyls at 1.2, both upfield of the observed values, and it has a third signal, the exchangeable O-H.",
        "C": "Correct. An isopropyl group whose methine sits at 4.3 and whose methyls sit at 1.7, with no other protons in the molecule, is 2-bromopropane.",
        "D": "2-Bromo-2-methylpropane has no proton on the carbon bearing the bromine; its nine methyl protons give a single singlet at 1.8, with no doublet and no septet."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q43",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated $^1\\text{H}$ NMR spectrum of an unknown compound is shown, with the relative integration of each signal marked. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 1.25,
          "y": 9,
          "label": "singlet"
        },
        {
          "x": 2,
          "y": 1,
          "label": "singlet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-Methyl-2-propanol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Butanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "tert-Butyl methyl ether",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Methyl-2-butanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A 9H singlet is a tert-butyl group, three equivalent methyls on a carbon with no proton. The rest of the molecule is whatever accounts for the remaining signal. A single 1H singlet with no coupling partner, at a position where nothing but an exchangeable proton belongs, is an O-H, and a tert-butyl group on an oxygen with a proton is tert-butyl alcohol.",
      "approach": "Step 1: The 9H singlet at 1.25 is (CH3)3C-; the slight deshielding from 0.9 says the quaternary carbon carries a heteroatom.\nStep 2: The 1H singlet at 2.0 is not coupled to anything; the only proton in a small molecule that can integrate to 1H, couple to nothing and sit near 2 ppm is an O-H.\nStep 3: (CH3)3C-OH, 2-methyl-2-propanol. The O-H position varies with concentration, and a D2O shake would remove it.\nStep 4: No signal near 3.2 to 3.7, so there is no CH2 or CH3 on the oxygen; the oxygen's only carbon is the quaternary one.",
      "note": "This is the one butanol isomer with no proton on its carbinol carbon, so it is the only C4H10O alcohol whose spectrum shows nothing between 3.3 and 3.7. The absence of an O-CH signal is as informative as its presence; the same reasoning identifies a tert-butyl ester by the absence of the usual 4 ppm O-CH2.",
      "options": {
        "A": "Correct. A 9H singlet for a tert-butyl group on a heteroatom and a lone exchangeable 1H singlet with no O-CH signal is 2-methyl-2-propanol.",
        "B": "1-Butanol has four different alkyl environments (a 2H triplet at 3.6 for CH2-O, two multiplets and a 3H triplet) plus the O-H: five signals, none of them a 9H singlet.",
        "C": "tert-Butyl methyl ether has the 9H singlet, but its second signal is a 3H singlet at 3.2 for the O-CH3, not a 1H signal, and it has no exchangeable proton.",
        "D": "2-Methyl-2-butanol has a 6H singlet for the two methyls on the carbinol carbon, then a 2H quartet at 1.5 and a 3H triplet at 0.9 for the ethyl group, plus the O-H: four signals."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q46",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated $^1\\text{H}$ NMR spectrum of an unknown compound is shown, with the relative integration of each signal marked. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 0.95,
          "y": 3,
          "label": "triplet"
        },
        {
          "x": 1.65,
          "y": 2,
          "label": "sextet"
        },
        {
          "x": 2.42,
          "y": 2,
          "label": "multiplet"
        },
        {
          "x": 9.75,
          "y": 1,
          "label": "triplet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Butanal",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Butanone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Butanol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Methylpropanal",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A 1H signal near 9.8 ppm is an aldehyde proton, and almost nothing else in organic chemistry appears there. Once the aldehyde is placed, the alkyl signals describe the chain attached to it: a triplet at 0.95 is a terminal methyl next to a CH2, and a 2H signal near 2.4 is the CH2 alpha to the carbonyl. The aldehyde proton is a triplet because it couples to that alpha CH2.",
      "approach": "Step 1: The 1H triplet at 9.75 is the aldehyde C-H, split by two protons on the adjacent carbon: the aldehyde carbon is attached to a CH2.\nStep 2: The 2H multiplet at 2.42 is that alpha CH2, coupled to both the aldehyde proton and the next CH2.\nStep 3: The 2H sextet at 1.65 is a CH2 with five neighbours (2 + 3), so it sits between the alpha CH2 and a methyl.\nStep 4: The 3H triplet at 0.95 is the terminal methyl next to a CH2.\nStep 5: CH3-CH2-CH2-CHO, butanal.",
      "note": "The aldehyde proton's small coupling (about 1.5 to 2 Hz) to the alpha protons is easy to miss, and at low resolution the 9.75 signal looks like a singlet; when it is resolved it counts the alpha protons for you, a triplet for CH2 and a doublet for CH. That is what separates butanal from its isomer 2-methylpropanal at a glance.",
      "options": {
        "A": "Correct. An aldehyde proton at 9.75 split into a triplet by an alpha CH2, followed by a sextet and a terminal methyl triplet, is the unbranched four-carbon aldehyde butanal.",
        "B": "Butanone is the ketone isomer and has no proton on its carbonyl carbon, so it shows nothing near 9.8; its signals are a 3H singlet at 2.15, a 2H quartet at 2.45 and a 3H triplet at 1.05.",
        "C": "1-Butanol has the same unbranched chain, but its terminal carbon carries an O-H, not a carbonyl: a 2H triplet at 3.6 in place of the aldehyde signal, and an exchangeable O-H.",
        "D": "2-Methylpropanal has an aldehyde proton too, but its alpha carbon is a CH, so the 9.6 signal is a doublet, and the two methyls form a 6H doublet at 1.1 with a 1H multiplet at 2.4."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q51",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated $^1\\text{H}$ NMR spectrum of an unknown compound is shown, with the relative integration of each signal marked. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 1.72,
          "y": 2,
          "label": "multiplet"
        },
        {
          "x": 1.85,
          "y": 4,
          "label": "multiplet"
        },
        {
          "x": 2.33,
          "y": 4,
          "label": "triplet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Cyclohexanol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Cyclohexanone",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Cyclohexane",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclopentanone",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Three signals in a 4:4:2 ratio, all below 2.5 ppm and with no methyl group, describe a symmetrical ring of CH2 groups with one substituent that has no protons. The 4H signal at 2.33 is two equivalent CH2 groups alpha to a carbonyl; the 4H at 1.85 is the two beta CH2 groups; the 2H at 1.72 is the single CH2 furthest from it. That is a six-membered ring with a ketone at one carbon.",
      "approach": "Step 1: Total 10 protons in three environments, so the molecule has a mirror plane; no triplet near 0.9 or 1.0, so no methyl and no chain ends: a ring.\nStep 2: The most deshielded set, a 4H triplet at 2.33, is CH2 alpha to a carbonyl, and its being a triplet says each alpha CH2 has one CH2 neighbour.\nStep 3: The 4H multiplet at 1.85 is the pair of CH2 groups beta to the carbonyl, and the 2H multiplet at 1.72 is the unique CH2 opposite it.\nStep 4: Five CH2 groups and a carbonyl carbon in a ring: cyclohexanone.",
      "note": "Cyclopentanone has only two CH2 environments, so the third signal is what says six-membered rather than five. The 13C spectrum makes the same distinction with four lines against three, and the IR does it by the carbonyl frequency, 1715 for the unstrained six-membered ketone and 1745 for the five.",
      "options": {
        "A": "Cyclohexanol has a 1H multiplet at 3.6 for the carbinol proton and an exchangeable O-H, and its ring CH2 groups spread from 1.2 to 1.9; nothing in it sits at 2.33.",
        "B": "Correct. A 4H triplet at 2.33 for the alpha CH2 pair, a 4H beta signal and a lone 2H signal, with no methyl and no O-H, is cyclohexanone.",
        "C": "Cyclohexane's twelve protons are all equivalent and give one singlet at 1.4 ppm. It cannot show three signals.",
        "D": "Cyclopentanone is symmetrical too, but with only four CH2 groups it has two environments, two 4H multiplets near 2.2 and 2.0, and no 2H signal."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q65",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated $^1\\text{H}$ NMR spectrum of an unknown compound is shown, with the relative integration of each signal marked. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 1.2,
          "y": 3,
          "label": "triplet"
        },
        {
          "x": 2.6,
          "y": 1,
          "label": "singlet"
        },
        {
          "x": 3.7,
          "y": 2,
          "label": "quartet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Diethyl ether",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Methanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetaldehyde",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethanol",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "A 2H quartet and a 3H triplet are an ethyl group, and the quartet's position says what the CH2 is attached to: 3.7 ppm is a CH2 on oxygen. The remaining 1H singlet, coupled to nothing, is the proton on that oxygen. Its lack of coupling to the neighbouring CH2 is itself informative: an O-H exchanges between molecules too fast to hold a coupling.",
      "approach": "Step 1: The 3H triplet at 1.2 and the 2H quartet at 3.7 are CH3-CH2-, with the CH2 on an oxygen.\nStep 2: The 1H singlet at 2.6 has no coupling partner and integrates to one proton: an O-H, at a position typical of an alcohol at moderate concentration.\nStep 3: CH3CH2-OH, ethanol.\nStep 4: Check what is absent: no second ethyl group (the quartet is 2H, not 4H), no aldehyde signal near 9.8.",
      "note": "In very dry DMSO, or in ultra-pure ethanol, exchange slows and the O-H becomes a triplet coupled to the CH2, while the CH2 becomes a doublet of quartets. The singlet seen in ordinary CDCl3 spectra is an exchange-averaged signal, and adding a trace of acid collapses any residual coupling at once.",
      "options": {
        "A": "Diethyl ether has the same quartet and triplet at 3.5 and 1.2, but no O-H: two signals in a 4:6 ratio, with no 1H singlet and nothing that disappears on a D2O shake.",
        "B": "Methanol has a 3H singlet at 3.4 and the O-H; it has no ethyl group and so no triplet or quartet.",
        "C": "Acetaldehyde's methyl is a 3H doublet at 2.2, coupled to the aldehyde proton, which is a 1H quartet at 9.8. Its pattern is the reverse of an ethyl group's and sits far downfield.",
        "D": "Correct. An ethyl group whose CH2 is on oxygen, plus one exchangeable proton with no coupling, is ethanol."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q68",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated $^1\\text{H}$ NMR spectrum of an unknown chlorinated compound is shown, with the relative integration of each signal marked. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 5.3,
          "y": 2,
          "label": "singlet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Chloroform",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "1,2-Dichloroethane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dichloromethane",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Chloromethane",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Each chlorine on a carbon deshields that carbon's protons by roughly two ppm, and the effect is additive: chloromethane at 3.05, dichloromethane at 5.3, chloroform at 7.26. A single singlet says all the protons are equivalent with no neighbours, and its position counts the chlorines on the one carbon that carries them.",
      "approach": "Step 1: One singlet, so one proton environment and no coupled neighbours.\nStep 2: 5.3 ppm is in the vinylic range for a C-H, but the compound is stated to be chlorinated and has no other signals; a saturated carbon reaches 5.3 when it carries two chlorines.\nStep 3: Apply the additivity: CH3Cl 3.05, CH2Cl2 5.3, CHCl3 7.26. The observed shift matches two chlorines.\nStep 4: CH2Cl2, dichloromethane.",
      "note": "The same additive effect makes chloroform's residual proton the familiar 7.26 reference peak in CDCl3 spectra, and puts the CH2 of 1,2-dichloroethane at 3.7, where a single chlorine plus a beta chlorine leave it. Substituent additivity of this kind is the basis of the shift-estimation tables in the chapter.",
      "options": {
        "A": "Chloroform's one proton appears at 7.26 ppm, about two ppm further downfield, because its carbon carries three chlorines rather than two.",
        "B": "1,2-Dichloroethane gives a single singlet too, since its four protons are equivalent, but at 3.7 ppm: each carbon has only one chlorine, and the second chlorine, on the other carbon, adds only about 0.3 ppm.",
        "C": "Correct. A singlet at 5.3 ppm with no other signal is a CH2 carrying two chlorines: dichloromethane.",
        "D": "Chloromethane's three protons are a singlet at 3.05 ppm, the shift for one chlorine on the carbon. Two ppm separate it from the observed signal."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q74",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated $^1\\text{H}$ NMR spectrum of an unknown compound is shown, with the relative integration of each signal marked. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 8.1,
          "y": 2,
          "label": "doublet"
        },
        {
          "x": 7.65,
          "y": 1,
          "label": "triplet"
        },
        {
          "x": 7.5,
          "y": 2,
          "label": "triplet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Benzoyl chloride",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzaldehyde",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzoic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzyl chloride",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Five aromatic protons in a 2:1:2 pattern with the 2H doublet pushed to 8.1 is a monosubstituted benzene bearing a carbonyl: the C=O withdraws electron density from the ortho positions by resonance and deshields their protons by nearly a ppm. Which carbonyl compound it is depends on what else the spectrum shows, and here it shows nothing else, so the carbonyl carries no proton.",
      "approach": "Step 1: Add the integrations: 2 + 1 + 2 = 5 protons, all aromatic. The substituent has no protons.\nStep 2: The 2H doublet at 8.1 is the ortho pair, deshielded by a carbonyl or nitro group; the 1H triplet at 7.65 is the para proton, the 2H triplet at 7.5 the meta pair.\nStep 3: List the C6H5-C(=O)-X compounds and what X adds: H gives a 10.0 singlet, OH a 12 ppm singlet, OCH3 a 3.9 singlet, CH3 a 2.6 singlet, Cl nothing.\nStep 4: Only benzoyl chloride adds nothing.",
      "note": "Nitrobenzene gives almost the same pattern (8.2, 7.7, 7.55), and proton NMR alone does not separate it from benzoyl chloride; the IR does, with the acid chloride's C=O at 1775 against the nitro group's pair at 1520 and 1345. Among the four compounds listed here, the aromatic pattern plus the absence of any other proton is enough.",
      "options": {
        "A": "Correct. A monosubstituted ring whose ortho protons sit at 8.1, with no proton anywhere else in the molecule, is benzoyl chloride: the acyl group deshields the ring and the chlorine adds no signal.",
        "B": "Benzaldehyde's ring pattern is similar, with the ortho doublet at 7.9, but the aldehyde proton adds a 1H singlet at 10.0. The spectrum has no signal above 8.1.",
        "C": "Benzoic acid's ortho doublet is at 8.1 as well, but the carboxylic acid proton adds a broad 1H singlet near 12 ppm, which is absent.",
        "D": "Benzyl chloride has no carbonyl: its five ring protons are a 5H multiplet at 7.3 with nothing at 8.1, and its CH2Cl is a 2H singlet at 4.55."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q77",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated $^1\\text{H}$ NMR spectrum of an unknown compound is shown, with the relative integration of each signal marked. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 2,
          "y": 3,
          "label": "singlet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Methyl acetate",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Propanenitrile",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Nitromethane",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acetonitrile",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "A lone 3H singlet at 2.0 ppm is a methyl group attached to something with no protons that deshields it by about one ppm: a carbonyl, a nitrile, an alkyne or an aromatic ring. Since there is no other signal at all, whatever the methyl is attached to has no protons of its own. Among the candidates that leaves CH3-CN; a methyl on a nitro group would sit at 4.3, and an ester or a second alkyl group would add a signal.",
      "approach": "Step 1: One signal, one proton environment, no coupled neighbours.\nStep 2: 2.0 ppm is the region for a methyl alpha to an unsaturated group; a methyl on oxygen (3.2 to 3.7) or on nitrogen dioxide (4.3) is excluded by the shift.\nStep 3: The rest of the molecule contributes no signal, so it carries no hydrogen: a nitrile group fits.\nStep 4: CH3-C(triple bond)N, acetonitrile.",
      "note": "Acetone's methyls appear at 2.1 and would be hard to tell from acetonitrile's at 2.0 on a spectrum with one signal, since a single peak carries no relative integration. The IR settles it at once, 2250 for the nitrile against 1715 for the ketone. This item deliberately lists no other single-singlet compound near 2 ppm.",
      "options": {
        "A": "Methyl acetate has two methyl singlets, the acetyl CH3 at 2.05 and the O-CH3 at 3.67, in a 1:1 ratio. The spectrum shows one signal only.",
        "B": "Propanenitrile has an ethyl group: a 2H quartet at 2.35 next to the nitrile and a 3H triplet at 1.3. Its signals are split, and there are two of them.",
        "C": "Nitromethane gives a 3H singlet, but at 4.3 ppm; the nitro group deshields its methyl far more than a nitrile does.",
        "D": "Correct. A single 3H singlet at 2.0 ppm, on a carbon attached to a group with no protons, is the methyl of acetonitrile."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q80",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated $^1\\text{H}$ NMR spectrum of an unknown compound is shown, with the relative integration of each signal marked. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 10,
          "y": 1,
          "label": "singlet"
        },
        {
          "x": 7.9,
          "y": 2,
          "label": "doublet"
        },
        {
          "x": 7.6,
          "y": 1,
          "label": "triplet"
        },
        {
          "x": 7.5,
          "y": 2,
          "label": "triplet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Acetophenone",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Benzyl alcohol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzaldehyde",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Butanal",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A 1H singlet at 10.0 ppm is an aldehyde proton, and a singlet rather than a triplet or doublet means the carbon next to the carbonyl carries no proton. Five aromatic protons in a 2:1:2 pattern with the ortho pair at 7.9 place the carbonyl directly on a benzene ring. An aromatic aldehyde is therefore read from two signals: the 10 ppm singlet and the deshielded ortho doublet.",
      "approach": "Step 1: The 1H signal at 10.0 is an aldehyde C-H. It is a singlet, so the aldehyde carbon is attached to a carbon with no protons.\nStep 2: The aromatic protons total 5 in the 2:1:2 pattern of a monosubstituted ring; the 2H doublet at 7.9 is the ortho pair, deshielded by a conjugated carbonyl.\nStep 3: The aldehyde is on the ring: C6H5-CHO, benzaldehyde.\nStep 4: The aldehyde proton at 10.0 rather than 9.7 is itself a hint of conjugation; aliphatic aldehydes sit slightly upfield.",
      "note": "An aromatic aldehyde's proton is always a singlet, and an aliphatic one's is a triplet or doublet from its alpha protons, so the multiplicity of the 10 ppm signal alone separates benzaldehyde from butanal. The IR adds the conjugated carbonyl at 1700 and the aldehyde C-H pair near 2820 and 2720.",
      "options": {
        "A": "Acetophenone has the same ring pattern with its ortho doublet at 7.95, but instead of an aldehyde proton it has a 3H singlet at 2.6 for the methyl ketone; nothing appears at 10.0.",
        "B": "Benzyl alcohol has no carbonyl: its ring protons are a 5H multiplet at 7.3, its CH2-O is a 2H singlet at 4.6, and it has an exchangeable O-H.",
        "C": "Correct. An aldehyde proton at 10.0 as a singlet, with a monosubstituted ring whose ortho protons are pushed to 7.9 by the conjugated carbonyl, is benzaldehyde.",
        "D": "Butanal has an aldehyde proton too, but at 9.75 and as a triplet, and its other signals are alkyl (2.4, 1.65, 0.95); it has no aromatic protons."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q81",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated $^1\\text{H}$ NMR spectrum of an unknown $\\text{C}_8$ aromatic hydrocarbon is shown, with the relative integration of each signal marked. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 1.2,
          "y": 3,
          "label": "triplet"
        },
        {
          "x": 2.65,
          "y": 2,
          "label": "quartet"
        },
        {
          "x": 7.2,
          "y": 5,
          "label": "multiplet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Toluene",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Ethylbenzene",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "p-Xylene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Styrene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A quartet and a triplet in a 2:3 ratio are an ethyl group, and the quartet's shift says what the CH2 is attached to: 2.65 is a benzylic CH2, one carbon from an aromatic ring. A 5H aromatic multiplet then says the ring is monosubstituted and the ethyl group is its only substituent. Alkyl groups perturb the ring so little that all five ring protons crowd together near 7.2.",
      "approach": "Step 1: The 3H triplet at 1.2 and 2H quartet at 2.65 are CH3-CH2-; the CH2 is benzylic (an O-CH2 would be at 3.5 to 4.1).\nStep 2: The 5H multiplet at 7.2 is a monosubstituted benzene whose substituent is an alkyl group, which leaves ortho, meta and para protons at nearly the same shift.\nStep 3: C6H5-CH2CH3, ethylbenzene, C8H10.\nStep 4: The other C8 aromatic hydrocarbons are excluded by their patterns: the xylenes show methyl singlets and styrene shows vinylic protons.",
      "note": "A benzylic CH2 (2.6) and an alpha-carbonyl CH2 (2.4) sit close together, and both are downfield of an ordinary alkane CH2 (1.3) for the same reason: a pi system next door. The aromatic multiplet, and the absence of any carbonyl signal in the IR, is what assigns the shift to a benzylic position here.",
      "options": {
        "A": "Toluene's single alkyl signal is a 3H singlet at 2.3; it has no ethyl group and no quartet or triplet.",
        "B": "Correct. A benzylic ethyl group (quartet at 2.65, triplet at 1.2) on a monosubstituted ring (5H multiplet) is ethylbenzene.",
        "C": "p-Xylene shows two singlets, a 4H aromatic singlet at 7.05 and a 6H methyl singlet at 2.3, with no coupling anywhere.",
        "D": "Styrene has a vinyl group: three vinylic protons as doublets of doublets at 6.7, 5.7 and 5.2 ppm, and no saturated protons at all."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q83",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated $^1\\text{H}$ NMR spectrum of an unknown compound is shown, with the relative integration of each signal marked. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 3.2,
          "y": 6,
          "label": "singlet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Dimethyl ether",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Methanol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "tert-Butyl methyl ether",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A single singlet at 3.2 ppm is a methyl on an oxygen with no proton neighbours, and a spectrum with nothing else says the oxygen carries no proton and no other carbon with protons. Two equivalent methyls on one oxygen is the only structure that fits: dimethyl ether. The shift separates it from the other symmetrical two-methyl compounds, acetone at 2.1 and DMSO at 2.6.",
      "approach": "Step 1: One signal, so one proton environment, with no coupling.\nStep 2: 3.2 ppm is the shift of CH3 bonded to an ether oxygen; a methyl on a carbonyl would be at 2.1, on a hydroxyl-bearing carbon at 3.4 with an O-H alongside.\nStep 3: No O-H signal and no second alkyl signal, so both groups on the oxygen are identical methyls.\nStep 4: CH3-O-CH3, dimethyl ether.",
      "note": "Dimethyl ether is a gas at room temperature, and its spectrum is recorded in solution under its own vapour pressure; the item treats it as a structure to be recognized, not a sample to be run. Its isomer ethanol, a liquid, shows three signals, and that difference is the point: constitutional isomers with the same formula give unrelated spectra.",
      "options": {
        "A": "Correct. One 6H singlet at 3.2 ppm, the O-CH3 shift, with no other proton in the molecule, is dimethyl ether.",
        "B": "Acetone's six protons are also one singlet, but at 2.1 ppm; a methyl on a carbonyl is a full ppm upfield of a methyl on oxygen.",
        "C": "Methanol has a 3H singlet at 3.4 and a second signal, the exchangeable O-H. The spectrum shows a single signal with no O-H.",
        "D": "tert-Butyl methyl ether has the O-CH3 singlet at 3.2, but also a 9H singlet at 1.2 for the tert-butyl group; two signals in a 1:3 ratio."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q89",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated $^1\\text{H}$ NMR spectrum of an unknown compound is shown, with the relative integration of each signal marked. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 1.1,
          "y": 3,
          "label": "triplet"
        },
        {
          "x": 2.45,
          "y": 2,
          "label": "multiplet"
        },
        {
          "x": 9.8,
          "y": 1,
          "label": "triplet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Acetone",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Propanal",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Propanoic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Propanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The 1H triplet at 9.8 is an aldehyde proton coupled to a CH2, and that settles the functional group and the first carbon of the chain at once. An ethyl pattern, a 3H triplet and a 2H signal near 2.45, completes a three-carbon aldehyde. The 2.45 signal is a multiplet rather than a clean quartet because the CH2 couples to both the methyl and the aldehyde proton.",
      "approach": "Step 1: The 1H signal at 9.8 is an aldehyde proton; its triplet splitting means two protons on the alpha carbon.\nStep 2: The 2H multiplet at 2.45 is that alpha CH2, split by the three methyl protons into a quartet and by the aldehyde proton into doublets: a quartet of doublets, drawn here as a multiplet.\nStep 3: The 3H triplet at 1.1 is the terminal methyl next to the CH2.\nStep 4: CH3-CH2-CHO, propanal.",
      "note": "McMurry's own figure for propanal shows exactly this: the aldehyde proton as a triplet, the CH2 as a complex multiplet, the methyl as a triplet. Compare propanoic acid, whose alpha CH2 is a clean quartet at 2.4 because the acid proton, unlike an aldehyde proton, exchanges too fast to couple.",
      "options": {
        "A": "Acetone has no proton on its carbonyl carbon and shows a single 6H singlet at 2.1; nothing appears near 9.8 and nothing is split.",
        "B": "Correct. An aldehyde proton at 9.8 split by an alpha CH2, with an ethyl pattern completing the chain, is propanal.",
        "C": "Propanoic acid has the ethyl pattern (quartet at 2.4, triplet at 1.15), but its third signal is the acid proton, a broad singlet near 11.8, not a triplet at 9.8.",
        "D": "1-Propanol's most downfield carbon-bound signal is the CH2-O triplet at 3.6; it has an exchangeable O-H and four signals in all, and nothing near 9.8."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q91",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated $^1\\text{H}$ NMR spectrum of an unknown compound is shown, with the relative integration of each signal marked. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 0.95,
          "y": 3,
          "label": "triplet"
        },
        {
          "x": 1.6,
          "y": 2,
          "label": "sextet"
        },
        {
          "x": 2.2,
          "y": 1,
          "label": "singlet"
        },
        {
          "x": 3.6,
          "y": 2,
          "label": "triplet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-Propanol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "1-Bromopropane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Propanol",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Propanal",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A triplet, a sextet and a triplet in a 3:2:2 ratio are an unbranched propyl chain: the methyl at one end, a middle CH2 with five neighbours, and a CH2 at the other end whose shift says what it carries. At 3.6 ppm that CH2 is on an oxygen. The remaining 1H singlet, uncoupled, is the O-H on that oxygen.",
      "approach": "Step 1: The 3H triplet at 0.95 is a terminal methyl next to a CH2.\nStep 2: The 2H sextet at 1.6 is a CH2 flanked by the methyl (3H) and another CH2 (2H): 3 + 2 + 1 = 6 lines.\nStep 3: The 2H triplet at 3.6 is a CH2 bonded to oxygen, coupled to the middle CH2.\nStep 4: The 1H singlet at 2.2 is an exchangeable O-H, uncoupled because of rapid exchange.\nStep 5: CH3-CH2-CH2-OH, 1-propanol.",
      "note": "The sextet is the tell-tale of a propyl group: a CH2 between a methyl and another CH2 sees five protons and gives six lines, a pattern no other small fragment produces. Its shift, 1.6, is a little downfield of the 1.3 of an alkane CH2 because it is beta to the oxygen.",
      "options": {
        "A": "2-Propanol has an isopropyl group: a 6H doublet at 1.2 and a 1H septet at 4.0, plus the O-H. It has no triplet and no sextet.",
        "B": "1-Bromopropane has the same propyl pattern, but its CH2-Br triplet is at 3.4, and it has no fourth signal: no exchangeable O-H.",
        "C": "Correct. An unbranched propyl chain whose end CH2 is on oxygen (triplet at 3.6), plus an uncoupled exchangeable 1H, is 1-propanol.",
        "D": "Propanal has an aldehyde proton at 9.8 and an ethyl group; it has no sextet and no signal at 3.6."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q93",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated $^1\\text{H}$ NMR spectrum of an unknown compound is shown, with the relative integration of each signal marked. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 1.05,
          "y": 6,
          "label": "triplet"
        },
        {
          "x": 2.42,
          "y": 4,
          "label": "quartet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-Pentanone",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Diethyl ether",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-Pentanone",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Butanone",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A quartet and a triplet in a 4:6 ratio are two equivalent ethyl groups, and the quartet's position says what they are attached to: 2.42 is a CH2 alpha to a carbonyl. Two equivalent ethyl groups on one carbonyl is a symmetrical ketone, 3-pentanone. Diethyl ether shows the same shape with the quartet moved to 3.5.",
      "approach": "Step 1: The 6H triplet at 1.05 and 4H quartet at 2.42 are two CH3-CH2- groups, equivalent to each other.\nStep 2: The quartet at 2.42 is the shift of CH2 next to a carbonyl; an O-CH2 would be at 3.5 or higher.\nStep 3: Two equivalent ethyls on one carbonyl carbon: CH3CH2-CO-CH2CH3, 3-pentanone.\nStep 4: No singlet, so no methyl on the carbonyl; that excludes the unsymmetrical methyl ketones.",
      "note": "The 13C spectrum confirms the symmetry with three lines (211, 35, 8) for five carbons. Doubled integrations, 4H and 6H for what looks like a single ethyl group, are the routine sign of a symmetrical molecule and should always prompt a search for the mirror plane.",
      "options": {
        "A": "2-Pentanone has a methyl on the carbonyl, a 3H singlet at 2.13, and an unbranched propyl chain (triplet, sextet, triplet); four signals, none integrating to 4H or 6H.",
        "B": "Diethyl ether has the same 4H quartet and 6H triplet, but the quartet is at 3.5 ppm, the shift of a CH2 on oxygen, not 2.42.",
        "C": "Correct. Two equivalent ethyl groups whose CH2 sits at the alpha-carbonyl shift of 2.42 make up the symmetrical ketone 3-pentanone.",
        "D": "Butanone has one ethyl group and one methyl on the carbonyl: a 2H quartet at 2.45, a 3H singlet at 2.15 and a 3H triplet at 1.05. The singlet is absent here."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch13_q94",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated $^1\\text{H}$ NMR spectrum of an unknown compound is shown, with the relative integration of each signal marked. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 2.1,
          "y": 3,
          "label": "singlet"
        },
        {
          "x": 11.8,
          "y": 1,
          "label": "singlet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Acetone",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Methyl acetate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetaldehyde",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acetic acid",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "A 1H singlet near 12 ppm belongs to a carboxylic acid: no other proton in ordinary organic compounds appears that far downfield, and it is broad and exchangeable. A 3H singlet at 2.1 is a methyl on a carbonyl. Together they are CH3-COOH, and the two-carbon acid is the only compound that gives just those two signals.",
      "approach": "Step 1: The 1H singlet at 11.8 is a carboxylic acid O-H, strongly deshielded by the carbonyl and by hydrogen-bonded dimerization.\nStep 2: The 3H singlet at 2.1 is a methyl with no proton neighbours, alpha to the carbonyl.\nStep 3: A methyl on a carboxylic acid carbon: acetic acid.\nStep 4: Ratio 3:1 matches CH3COOH's four protons.",
      "note": "The acid proton is usually drawn as a broad hump rather than a sharp line, and its position drifts with concentration and water content, but it stays above 10 ppm, where an aldehyde proton (9 to 10) is its only neighbour. The two are told apart by exchange: a D2O shake removes the acid proton and leaves the aldehyde's.",
      "options": {
        "A": "Acetone has the 2.1 singlet, integrating to 6H for its two methyls, and nothing else; it has no exchangeable proton and nothing near 12 ppm.",
        "B": "Methyl acetate has two 3H singlets, the acetyl methyl at 2.05 and the O-CH3 at 3.67; as an ester it has no acid proton.",
        "C": "Acetaldehyde's aldehyde proton is a quartet at 9.8, coupled to its methyl, which is a doublet at 2.2. The observed signals are singlets, and 11.8 is beyond the aldehyde region.",
        "D": "Correct. A methyl singlet at 2.1 and a lone acid proton at 11.8 are acetic acid."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  }
];
