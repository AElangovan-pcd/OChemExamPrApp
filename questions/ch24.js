// OChemStudyBuddy - McMurry Chapter 24
// Author: A. Elangovan, PhD
var CH24_QUESTIONS = [
  {
    "question_id": "ch24_q_dynamic_amine_basicity",
    "topic": "Basicity of Amines",
    "difficulty_level": "Medium",
    "question_text": "Match each nitrogen compound to the pKa of its conjugate acid (its protonated form). The four values are 0.4, 4.63, 5.25 and 10.75.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CCN",
        "correctAnswer": "pKa 10.75",
        "alt": "A two-carbon chain ending in an NH2 group: ethylamine."
      },
      {
        "smiles": "Nc1ccccc1",
        "correctAnswer": "pKa 4.63",
        "alt": "A benzene ring bearing an NH2 group: aniline."
      },
      {
        "smiles": "c1cc[nH]c1",
        "correctAnswer": "pKa 0.4",
        "alt": "A five-membered aromatic ring of four carbons and one N-H: pyrrole."
      },
      {
        "smiles": "c1ccncc1",
        "correctAnswer": "pKa 5.25",
        "alt": "A six-membered aromatic ring of five carbons and one nitrogen with no hydrogen on it: pyridine."
      }
    ],
    "match_options": [
      "pKa 10.75",
      "pKa 4.63",
      "pKa 0.4",
      "pKa 5.25"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "At least one compound matched to the wrong pKa",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An amine's basicity is measured by the acidity of its conjugate acid: the higher the pKa of the ammonium ion, the more tightly it holds its proton and the stronger the amine is as a base. What sets the pKa is how available the nitrogen lone pair is. An alkylamine's lone pair sits in an sp3 orbital and is fully available. An arylamine's lone pair is delocalised into the ring and much of that stabilisation is lost on protonation. Pyridine's lone pair is available but sits in an sp2 orbital, held closer to the nucleus. Pyrrole's lone pair is part of the aromatic sextet, and protonating the nitrogen would destroy the aromaticity, so pyrrole is barely a base at all.",
      "approach": "Step 1: Ethylamine, a primary alkylamine: sp3 lone pair, no delocalisation. Ethylammonium pKa 10.75, the strongest base of the four.\nStep 2: Pyridine: the lone pair is in an sp2 orbital in the plane of the ring, not part of the sextet, so it is available but more tightly held than an sp3 pair. Pyridinium pKa 5.25.\nStep 3: Aniline: the lone pair is conjugated with the benzene ring and the amine is stabilised by five resonance forms that protonation destroys. Anilinium pKa 4.63, a little below pyridine.\nStep 4: Pyrrole: the lone pair is one of the six pi electrons; protonation costs the aromaticity. Pyrrolinium pKa 0.4, the weakest base by far.",
      "note": "McMurry 24.3 (Basicity of Amines), Table 24.1, gives these four values (ethylamine 10.75, aniline 4.63, pyridine 5.25, pyrrole 0.4) beside ammonia 9.26, pyrimidine 1.3 and imidazole 6.95, and explains the pKa-of-the-ammonium-ion convention (pKa + pKb = 14). The aniline case is McMurry 24.4, the pyridine and pyrrole cases McMurry 24.9, which attributes pyridine's reduced basicity to the sp2 lone pair's greater s character and pyrrole's to the lone pair being part of the aromatic sextet.",
      "options": {
        "A": "Correct. Availability of the lone pair orders the four: sp3 alkylamine, then the sp2 pyridine, then the ring-delocalised aniline, then pyrrole, whose lone pair is part of the aromatic sextet.",
        "B": "One or more rows is out of order. Ask where each lone pair is: in an sp3 orbital (very available, pKa near 11), in an sp2 orbital in the ring plane (available but held tighter, pKa about 5), conjugated with a benzene ring (pKa about 4.6), or inside the aromatic sextet (essentially unavailable, pKa near 0)."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q43_pyrrole_electrophilic_substitution",
    "topic": "Heterocyclic Amines",
    "difficulty_level": "Medium",
    "question_text": "Pyrrole undergoes electrophilic aromatic substitution at C2, the carbon next to nitrogen, rather than at C3. What is the mechanistic reason?",
    "question_smiles": "c1cc[nH]c1",
    "structure_alt": "A five-membered aromatic ring of four carbons and one N-H, drawn flat with alternating double bonds.",
    "options": [
      {
        "option_id": "A",
        "text": "Attack at C2 gives a cation delocalised over three atoms (C3, C5 and the nitrogen), whereas attack at C3 gives a cation delocalised over only two (C2 and the nitrogen), so the C2 intermediate is more stable",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Attack at C3 is sterically hindered by the hydrogen on the nitrogen atom",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The nitrogen directs electrophiles to C2 through its inductive electron-withdrawing effect",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "C3 is more electronegative than C2 and resists attack by the electrophile",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Pyrrole is an electron-rich aromatic ring: the nitrogen lone pair is part of the six-electron pi system and pushes electron density onto the carbons, so pyrrole reacts with electrophiles more readily than benzene does, in the manner of an enamine. As with any electrophilic aromatic substitution, the regiochemistry is decided by the stability of the cationic intermediate. Count the resonance forms. Attack at C2 leaves a positive charge that can be spread over C3, C5 and, with the nitrogen lone pair, onto nitrogen as an iminium: three contributors. Attack at C3 leaves a charge that reaches only C2 and the nitrogen: two contributors. The lower-energy intermediate, and the lower-energy transition state leading to it, is the C2 one.",
      "approach": "Step 1: Add E+ to C2. The cation is an allylic-type system across C3-C4-C5 plus the nitrogen: draw the charge on C3, on C5, and on N (as C=N+ with the lone pair donated). Three resonance forms.\nStep 2: Add E+ to C3. The cation is on C2, adjacent to N, and can be placed on N as an iminium; C4=C5 is an isolated alkene not in conjugation with the charge. Two resonance forms.\nStep 3: More delocalisation means a more stable intermediate and a faster reaction: C2 attack wins.\nStep 4: Loss of the C2 proton restores aromaticity and gives the 2-substituted pyrrole, as in nitration, halogenation, sulfonation and Friedel-Crafts acylation of pyrrole.",
      "note": "McMurry 24.9 (Heterocyclic Amines), Figure 24.8, uses the nitration of pyrrole to make exactly this argument: reaction at C2 leads to a more stable intermediate cation with three resonance forms, whereas reaction at C3 gives a less stable cation with only two. The section adds that pyrrole's carbons are more electron-rich than ordinary alkene carbons, so the ring reacts with electrophiles like an enamine (23.11) and often needs low temperatures for control. Indole, by contrast, substitutes at C3 (Problem 24-24), because there the benzene ring's aromaticity must be preserved.",
      "options": {
        "A": "Correct. Three resonance forms for the C2 intermediate against two for the C3 intermediate; the more delocalised cation forms faster.",
        "B": "The N-H hydrogen lies in the plane of the ring and offers no steric block to a carbon two bonds away; in any case the regiochemistry is the same in N-methylpyrrole, whose N-methyl is bulkier. The preference is electronic.",
        "C": "Nitrogen does withdraw electrons inductively, but that effect is outweighed by its resonance donation, which is what makes pyrrole reactive at all; and induction would disfavour attack near the nitrogen, not favour it. The reason is the resonance stabilisation of the intermediate.",
        "D": "Carbons in an aromatic ring do not differ in electronegativity in any way that would decide the site of attack. What differs is how well each intermediate cation is delocalised."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q44_pyridine_electrophilic_substitution",
    "topic": "Heterocyclic Amines",
    "difficulty_level": "Medium",
    "question_text": "Why is pyridine so much less reactive than benzene toward electrophilic aromatic substitution, and where does substitution occur when it is forced?",
    "question_smiles": "c1ccncc1",
    "structure_alt": "A six-membered aromatic ring of five carbons and one nitrogen, drawn flat with alternating double bonds.",
    "options": [
      {
        "option_id": "A",
        "text": "The electronegative nitrogen withdraws electron density from the ring, and its basic lone pair complexes the electrophile or acid to give a positively charged pyridinium ring that is deactivated further; when reaction occurs it is at C3, because attack at C2 or C4 would put positive charge on the nitrogen",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The nitrogen activates C2 and C4 by resonance, but those positions are sterically blocked, so substitution occurs at C3",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The nitrogen donates electrons by resonance like pyrrole's, but the six-membered ring undergoes addition instead of substitution",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Pyridine is completely inert to electrophilic substitution because it has no C-H bonds at reactive positions",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Pyridine is benzene with one CH replaced by N, and the nitrogen changes everything about electrophilic substitution. Two factors deactivate the ring. The nitrogen is electronegative and pulls electron density out of the ring inductively, giving pyridine a large dipole with the carbons at the positive end. And the lone pair, which is not part of the sextet, is basic: it complexes the Lewis-acidic electrophile or is protonated by the acid, putting a full positive charge on the ring. When substitution is forced, C3 is the site, because the cations from attack at C2 or C4 each have a resonance form with the positive charge on the electron-poor nitrogen (with only six electrons), while the C3 cation never places charge on nitrogen.",
      "approach": "Step 1: Recognise that pyridine's lone pair is in an sp2 orbital in the ring plane, not in the pi system, so it is available to bind H+ or an electrophile: the ring becomes a pyridinium cation under the reaction conditions.\nStep 2: Add to that the inductive withdrawal by nitrogen; the ring carbons are electron-poor and unattractive to electrophiles. Nitration goes in very low yield, Friedel-Crafts fails, halogenation needs drastic conditions.\nStep 3: Draw the three intermediate cations. Attack at C2: charge on C3, C5 and N. Attack at C4: charge on C3, C5 and N. Attack at C3: charge on C2, C4 and C6, never on N.\nStep 4: A form with a positive, sextet nitrogen is very unfavourable, so the C3 intermediate is the least destabilised and 3-substitution is what is observed.",
      "note": "McMurry 24.9 (Heterocyclic Amines) states that pyridine undergoes electrophilic substitution with difficulty, halogenation only under drastic conditions, nitration in very low yield and Friedel-Crafts not at all, usually giving the 3-substituted product, and attributes the low reactivity to acid-base complexation of the ring nitrogen with the electrophile and to the inductive withdrawal that gives pyridine a dipole of 2.26 D. Problem 24-22 asks for the C2, C3 and C4 intermediates. The same nitrogen makes pyridine a good nucleophile and base, which is why it is used to scavenge HCl in acylations (21.4).",
      "options": {
        "A": "Correct. Inductive withdrawal plus protonation or complexation of the basic nitrogen deactivate the ring; the C3 intermediate is the only one that avoids a positive charge on nitrogen.",
        "B": "Pyridine's nitrogen does not donate electrons to the ring by resonance: its lone pair lies in the plane, outside the pi system. C2 and C4 are disfavoured electronically (their intermediates put charge on N), not sterically; a ring hydrogen is no obstacle.",
        "C": "Unlike pyrrole's, pyridine's lone pair is not in the pi system and cannot donate into it. Pyridine is aromatic and does undergo substitution rather than addition when it reacts at all; the problem is that it reacts very slowly.",
        "D": "Pyridine has five C-H bonds and does react, though slowly and mainly at C3 under harsh conditions. It is strongly deactivated, not inert; 3-bromopyridine and 3-nitropyridine are both made by direct substitution."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q48_pyrrole_pyridine_reactivity",
    "topic": "Heterocyclic Amines",
    "difficulty_level": "Easy",
    "question_text": "How do pyrrole and pyridine compare with benzene in reactivity toward electrophilic aromatic substitution, and why?",
    "options": [
      {
        "option_id": "A",
        "text": "Pyrrole is more reactive than benzene because its nitrogen lone pair is delocalised into the pi system and enriches the carbons; pyridine is less reactive because its electronegative nitrogen withdraws electron density and its lone pair binds the electrophile or acid",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Pyridine is more reactive than benzene because its nitrogen is basic",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Pyrrole is less reactive than benzene because a five-membered ring has less resonance energy",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both are more reactive than benzene because both contain an electron-rich nitrogen atom",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The two nitrogen heterocycles sit on opposite sides of benzene, and the difference is where the nitrogen lone pair is. In pyrrole the lone pair is two of the six pi electrons: it is donated into the ring, the four carbons are electron-rich, and pyrrole reacts with electrophiles like an activated benzene or an enamine, often needing low temperature for control. In pyridine the lone pair is in an sp2 orbital in the ring plane and takes no part in the aromatic sextet; the nitrogen, being electronegative, withdraws density from the carbons, and its available lone pair is protonated or complexed under the reaction conditions, which deactivates the ring further. Pyrrole is activated, pyridine deactivated.",
      "approach": "Step 1: Locate the lone pair in each ring. Pyrrole: in a p orbital, part of the pi system. Pyridine: in an sp2 orbital, in the plane, not part of the pi system.\nStep 2: Pyrrole: donation from N makes the carbons more nucleophilic than benzene's, so electrophilic substitution (at C2) is fast and easy.\nStep 3: Pyridine: no donation, inductive withdrawal, and a basic lone pair that complexes E+ or H+ to give a cationic ring; substitution (at C3) is slow and needs harsh conditions.\nStep 4: Order of reactivity toward electrophiles: pyrrole > benzene > pyridine.",
      "note": "McMurry 24.9 (Heterocyclic Amines) describes pyrrole's carbons as more electron-rich and more nucleophilic than typical double-bond carbons, so the ring is reactive toward electrophiles in the same way as enamines, and pyridine as undergoing electrophilic substitution only with difficulty because of acid-base complexation of the nitrogen and its electron-withdrawing inductive effect. The same section applies both patterns to the fused systems: indole substitutes easily at C3 of its pyrrole ring, quinoline and isoquinoline slowly and on their benzene ring.",
      "options": {
        "A": "Correct. Pyrrole's lone pair is in the pi system and activates the ring; pyridine's is not, and its nitrogen deactivates the ring both inductively and by being protonated.",
        "B": "Pyridine's basicity is part of what makes it unreactive: the protonated or complexed nitrogen puts a positive charge on the ring. A basic nitrogen outside the pi system does not enrich the carbons.",
        "C": "Pyrrole's resonance energy is smaller than benzene's, but that is not what governs reactivity toward electrophiles; the electron density on the carbons is, and pyrrole's carbons are enriched by the nitrogen lone pair. Pyrrole reacts faster than benzene, not slower.",
        "D": "Only pyrrole's nitrogen enriches the ring, because only pyrrole's lone pair is in the pi system. Pyridine's nitrogen is electron-withdrawing toward the ring carbons and its lone pair is used up binding acid or electrophile."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q1_naming_tertiary_amine",
    "topic": "Naming Amines",
    "difficulty_level": "Easy",
    "question_text": "What is the name of the compound shown?",
    "question_smiles": "CCCN(C)CC",
    "structure_alt": "A nitrogen atom bearing three alkyl groups: a three-carbon chain, a two-carbon chain and a methyl.",
    "options": [
      {
        "option_id": "A",
        "text": "N-Ethyl-N-methylpropylamine",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "N-Methyl-N-propylethylamine",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "N,N-Ethylmethylpropanamine",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Hexan-3-amine",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An unsymmetrical secondary or tertiary amine is named as an N-substituted primary amine: the largest alkyl group on nitrogen provides the parent name (alkyl + amine), and the other groups are cited as prefixes with the locant N to show they are on nitrogen rather than on a chain carbon. Each N-substituent takes its own N. A tertiary amine is one with three carbon groups on nitrogen, regardless of how branched those groups are, which is a different use of the word from tertiary alcohol or tertiary halide.",
      "approach": "Step 1: Identify the groups on nitrogen: propyl (three carbons), ethyl (two), methyl (one).\nStep 2: The largest, propyl, gives the parent: propylamine.\nStep 3: Cite the other two as N-substituents, alphabetically: N-ethyl-N-methyl.\nStep 4: Assemble: N-ethyl-N-methylpropylamine (N-ethyl-N-methylpropan-1-amine in the alternative style). It is a tertiary amine.",
      "note": "McMurry 24.1 (Naming Amines) gives the rule for unsymmetrically substituted amines: the largest alkyl group takes the parent name and the others are N-substituents, and Problem 24-2 includes N-ethyl-N-methylcyclopentylamine and N-isopropylcyclohexylamine as examples. The text also uses the alternative style in which -amine replaces the final -e of the parent alkane (propan-1-amine), and for molecules with a higher-priority group the NH2 becomes the prefix amino-.",
      "options": {
        "A": "Correct. Propyl is the largest group and names the parent; ethyl and methyl are N-substituents, cited alphabetically.",
        "B": "The right molecule under the wrong parent: the largest alkyl group on nitrogen, propyl, must be the parent. Naming it as an ethylamine with N-methyl and N-propyl substituents breaks that rule.",
        "C": "The right molecule with the locants misused: each substituent on nitrogen carries its own N locant (N-ethyl-N-methyl), and N,N- belongs before a single repeated group (N,N-dimethyl). The parent's -amine also attaches to propyl, not propane, in this style.",
        "D": "Hexan-3-amine is a different compound, CH3CH2CH(NH2)CH2CH2CH3, a primary amine with the NH2 on a six-carbon chain. The drawn nitrogen carries three separate carbon groups and no hydrogen."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q2_naming_n_methyl_toluidine",
    "topic": "Naming Amines",
    "difficulty_level": "Medium",
    "question_text": "What is the name of the compound shown?",
    "question_smiles": "CNc1ccc(C)cc1",
    "structure_alt": "A benzene ring with a methyl group on one carbon and, on the carbon opposite, an NH group whose nitrogen carries a methyl.",
    "options": [
      {
        "option_id": "A",
        "text": "N,4-Dimethylaniline (N-methyl-p-toluidine)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "N,N-Dimethylaniline",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-(Methylamino)toluene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,4-Dimethylaniline",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Arylamines are named as derivatives of aniline, the retained name for aminobenzene, and aniline is the parent whenever the amine is the principal group. Substituents on the nitrogen take the locant N; substituents on the ring take numbers, with the carbon bearing the nitrogen as C1. So a methyl on nitrogen and a methyl on the ring carbon para to it are N and 4 respectively, and the name lists both locants before dimethyl. Two methyls both on nitrogen would be N,N-dimethyl, a tertiary amine, which is a different compound.",
      "approach": "Step 1: The parent is aniline: a benzene ring bearing nitrogen, with C1 the carbon attached to N.\nStep 2: One methyl is on nitrogen: N-methyl. The nitrogen still carries a hydrogen, so this is a secondary amine.\nStep 3: The other methyl is on the ring carbon opposite C1, which is C4: 4-methyl.\nStep 4: Combine: N,4-dimethylaniline. The common-name equivalent is N-methyl-p-toluidine, p-toluidine being 4-methylaniline.",
      "note": "McMurry 24.1 (Naming Amines) notes that phenylamine has the common name aniline and, in Problem 24-2, asks for the structure of N-methylaniline; McMurry 24.8 uses p-toluidine (4-methylaniline) throughout its acetylation-bromination sequence. Which methyl is on nitrogen matters chemically: an N-H is what the Hinsberg test, the acylation reactions and the IR N-H band all depend on, and only a primary arylamine (no N-substituent) can be diazotised (24.8).",
      "options": {
        "A": "Correct. Aniline parent, one methyl on nitrogen (N) and one on the ring para to it (4).",
        "B": "N,N-Dimethylaniline has both methyls on the nitrogen and none on the ring, a tertiary amine with a bare benzene ring. The drawn compound has one methyl on N and one on the ring.",
        "C": "The right molecule under the wrong parent. When the amine is the principal group, the aromatic amine is named as an aniline, not as a toluene bearing an amino substituent; the methylamino group outranks the methyl for the parent name.",
        "D": "2,4-Dimethylaniline has both methyls on the ring (ortho and para to the NH2) and an unsubstituted NH2. Here the nitrogen carries one of the methyls, and the ring has only one."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q3_structure_dimethylpyrrole",
    "topic": "Naming Amines",
    "difficulty_level": "Medium",
    "question_text": "Which structure is 1,3-dimethylpyrrole?",
    "options": [
      {
        "option_id": "A",
        "text": "Structure A",
        "smiles": "Cn1ccc(C)c1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Structure B",
        "smiles": "Cn1cccc1C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Structure C",
        "smiles": "Cc1cc(C)c[nH]1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Structure D",
        "smiles": "CN1CCC(C)C1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Heterocyclic amines each have their own parent name, and the heteroatom is always position 1. In pyrrole, a five-membered aromatic ring with one N-H, the nitrogen is N1 and the carbons are C2 through C5 going round the ring; a substituent on the nitrogen takes locant 1 (replacing the N-H), and a substituent on the carbon two positions away from nitrogen takes locant 3. Pyrrolidine is the saturated relative and a different parent.",
      "approach": "Step 1: Pyrrole, aromatic, five-membered, N at position 1.\nStep 2: 1-Methyl: the methyl is on the nitrogen, which therefore has no hydrogen.\nStep 3: 3-Methyl: count from N1 to C2 to C3; the second methyl is on the carbon not adjacent to nitrogen.\nStep 4: Structure A has an N-methyl and a methyl on the beta carbon: 1,3-dimethylpyrrole. B is 1,2-dimethyl (both next to N), C is 2,4-dimethyl with a free N-H, D is the saturated 1,3-dimethylpyrrolidine.",
      "note": "McMurry 24.1 (Naming Amines) states that the heterocyclic nitrogen atom is always numbered as position 1 and asks for 1,3-dimethylpyrrole in Problem 24-3, with N-ethylpyrrole in Problem 24-2. Whether the nitrogen carries a hydrogen or an alkyl changes nothing about pyrrole's aromaticity (the lone pair is in the sextet either way) but everything about its acidity: the N-H of pyrrole (pKa about 17) can be removed by strong base, N-alkylpyrroles have no such proton.",
      "options": {
        "A": "Correct. Methyl on N1 and methyl on C3, the beta carbon, of an aromatic pyrrole ring.",
        "B": "Structure B is 1,2-dimethylpyrrole: the ring methyl is on C2, the carbon next to nitrogen, not on C3.",
        "C": "Structure C is 2,4-dimethylpyrrole: both methyls are on ring carbons and the nitrogen still carries its hydrogen. The name requires a methyl on nitrogen (locant 1).",
        "D": "Structure D is 1,3-dimethylpyrrolidine, the saturated five-membered amine. The locants match but the parent is wrong: pyrrole is the aromatic ring with two C=C bonds."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q4_naming_amino_acid_substituent",
    "topic": "Naming Amines",
    "difficulty_level": "Easy",
    "question_text": "What is the IUPAC name of the compound shown?",
    "question_smiles": "NCCC(=O)O",
    "structure_alt": "A three-carbon chain with a CO2H group at one end and an NH2 group on the other end carbon.",
    "options": [
      {
        "option_id": "A",
        "text": "3-Aminopropanoic acid",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Carboxypropylamine",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Aminopropanoic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-Aminobutanoic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When an amine is present together with a higher-priority functional group, the NH2 is named as an amino- substituent and the other group provides the suffix and the numbering. A carboxylic acid outranks an amine, so the compound is an alkanoic acid with an amino prefix, numbered from the carboxyl carbon as C1. The alternative, treating the acid as a carboxy substituent on an amine parent, reverses the seniority order.",
      "approach": "Step 1: Rank the groups: CO2H outranks NH2, so the parent is propanoic acid, C1 being the carboxyl carbon.\nStep 2: Count to the nitrogen-bearing carbon: C1 CO2H, C2 CH2, C3 CH2NH2.\nStep 3: Cite the amine as a prefix with its locant: 3-amino.\nStep 4: Assemble: 3-aminopropanoic acid, the beta-amino acid known as beta-alanine.",
      "note": "McMurry 24.1 (Naming Amines) states that amines with more than one functional group are named by considering the NH2 as an amino substituent on the parent molecule, giving 4-aminobutanoic acid among its examples. The alpha-amino acids of Ch 26 follow the same rule (2-aminopropanoic acid is alanine), and at physiological pH both the amino and the carboxyl groups are ionised, so cellular amino acids are written as ammonium carboxylates (24.5).",
      "options": {
        "A": "Correct. The acid is the principal group and names the parent; the NH2 is a 3-amino prefix.",
        "B": "The right molecule under the wrong seniority: a carboxylic acid outranks an amine, so the acid must be the suffix and the amine the prefix. Carboxy- is used only when the CO2H cannot be the principal group.",
        "C": "2-Aminopropanoic acid is alanine, with the NH2 on the carbon next to the carboxyl. Here the NH2 is on the third carbon, one position further away.",
        "D": "4-Aminobutanoic acid (GABA) has four carbons. The drawn chain has three: the carboxyl carbon, one CH2 and the CH2NH2."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q5_boiling_points_amines",
    "topic": "Structure and Properties of Amines",
    "difficulty_level": "Medium",
    "question_text": "Which of these compounds of similar molar mass has the highest boiling point?",
    "options": [
      {
        "option_id": "A",
        "text": "Propan-1-amine",
        "smiles": "CCCN",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "N-Methylethanamine",
        "smiles": "CCNC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Trimethylamine",
        "smiles": "CN(C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Butane",
        "smiles": "CCCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Primary and secondary amines hydrogen-bond through their N-H bonds and so boil higher than alkanes of the same mass, though not as high as alcohols, because N-H is a weaker hydrogen-bond donor than O-H. The more N-H bonds a molecule has, the more hydrogen bonds it can make: a primary amine (two N-H) associates more strongly than a secondary amine (one N-H), and a tertiary amine, with no N-H at all, cannot hydrogen-bond with itself and boils little above the corresponding alkane. Molar mass is held roughly constant here so that only the hydrogen bonding varies.",
      "approach": "Step 1: Count N-H bonds: propan-1-amine two, N-methylethanamine one, trimethylamine none, butane none (and no nitrogen).\nStep 2: Two N-H bonds allow the most extensive hydrogen-bonded network: propan-1-amine boils at 48 °C.\nStep 3: One N-H: N-methylethanamine, 37 °C. No N-H: trimethylamine, 3 °C, close to butane at about 0 °C.\nStep 4: The order follows the count of N-H bonds; the primary amine boils highest.",
      "note": "McMurry 24.2 (Structure and Properties of Amines) states that primary and secondary amines form hydrogen bonds and are highly associated, giving them higher boiling points than alkanes of similar molecular weight, with the comparison diethylamine 56.3 °C (MW 73) against pentane 36.1 °C (MW 72), and Figure 24.3 shows the hydrogen bonding. The text does not give the tertiary-amine comparison; that a tertiary amine cannot hydrogen-bond to itself follows from its having no N-H, the same reason it shows no N-H stretch in the IR (24.10).",
      "options": {
        "A": "Correct. Two N-H bonds give the most hydrogen bonding and the highest boiling point among these four.",
        "B": "N-Methylethanamine has one N-H and hydrogen-bonds less extensively than a primary amine of the same mass; it boils about 10 °C lower than propan-1-amine.",
        "C": "Trimethylamine has no N-H bond and cannot donate a hydrogen bond, so despite its nitrogen it boils only a few degrees above butane, near 3 °C.",
        "D": "Butane has neither nitrogen nor any polar bond; dispersion forces alone give it a boiling point near 0 °C, the lowest of the set."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q6_pyramidal_inversion",
    "topic": "Structure and Properties of Amines",
    "difficulty_level": "Medium",
    "question_text": "N-Ethyl-N-methylpropylamine has a nitrogen bearing three different groups and a lone pair, yet it cannot be resolved into enantiomers. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "The two mirror-image forms interconvert rapidly by pyramidal inversion: the nitrogen passes through a planar sp2 geometry with a barrier of only about 25 kJ/mol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A nitrogen with three groups and a lone pair is not a stereocentre, because a lone pair does not count as a substituent",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The molecule has an internal mirror plane through the nitrogen and the ethyl group",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The C-N bonds rotate freely, exchanging the positions of the three groups",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An amine nitrogen is sp3-hybridised and tetrahedral, with the lone pair at the fourth corner, so a nitrogen carrying three different groups is chiral in the same sense as a carbon carrying four. The difference is that the amine's enantiomers are not stable. The nitrogen can rehybridise momentarily to planar sp2, with the lone pair in a p orbital, and then re-form the pyramid pointing the other way. This pyramidal inversion has a barrier of about 25 kJ/mol, only twice that of rotation about a C-C bond, so the two enantiomers interconvert millions of times per second at room temperature and cannot be separated. A quaternary ammonium ion, with four groups and no lone pair, has no such pathway and can be resolved.",
      "approach": "Step 1: Confirm the chirality on paper: N with ethyl, methyl, propyl and a lone pair, four different things in a tetrahedral arrangement, is a stereocentre.\nStep 2: Consider the inversion: the three C-N bonds flatten into a plane as nitrogen becomes sp2; the lone pair occupies the p orbital perpendicular to that plane.\nStep 3: The planar form relaxes to the pyramid on either side with equal probability; going to the other side gives the enantiomer.\nStep 4: With a 25 kJ/mol barrier the interconversion is far faster than any separation, so the amine exists as a rapidly equilibrating racemate.",
      "note": "McMurry 24.2 (Structure and Properties of Amines) states that an amine with three different substituents on nitrogen is chiral (5.10) but that chiral amines cannot usually be resolved because the two enantiomeric forms rapidly interconvert by pyramidal inversion, through a planar sp2 intermediate, with a barrier of about 25 kJ/mol (6 kcal/mol), and Figure 24.2 draws it. The inversion resembles the geometry change at carbon in an SN2 transition state. Quaternary ammonium salts, and amines whose nitrogen is held in a small ring that cannot flatten, are the cases that can be resolved.",
      "options": {
        "A": "Correct. The nitrogen inverts through a planar intermediate so easily that the enantiomers equilibrate faster than they could ever be separated.",
        "B": "The lone pair does count: a nitrogen with three different groups and a lone pair is a genuine stereocentre, and the two arrangements are mirror images. What prevents resolution is that they interconvert, not that they are identical.",
        "C": "With three different alkyl groups on nitrogen there is no internal mirror plane; each individual pyramidal form is chiral. The molecule is achiral only on time average, because inversion racemises it.",
        "D": "Rotation about a C-N bond turns a group around its own axis; it does not move that group to another corner of the tetrahedron. Only the inversion of the nitrogen pyramid itself exchanges the spatial arrangement."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q7_amine_vs_amide_basicity",
    "topic": "Basicity of Amines",
    "difficulty_level": "Easy",
    "question_text": "Which is the stronger base, ethylamine or propanamide, and why?",
    "options": [
      {
        "option_id": "A",
        "text": "Ethylamine: its nitrogen lone pair is localised and available, whereas the amide's lone pair is delocalised into the carbonyl group and protonating the nitrogen would cost that resonance stabilisation",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propanamide: its carbonyl oxygen adds a second basic site, so it is protonated more readily",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Propanamide: the electron-withdrawing carbonyl makes the N-H bonds more polar and the nitrogen more electron-rich",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "They are equally basic, because both nitrogens are sp3-hybridised and carry a lone pair",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An amine's basicity comes from a nitrogen lone pair that is free to bond to a proton. In an amide that lone pair is not free: it is conjugated with the adjacent carbonyl, and the amide is a resonance hybrid in which nitrogen is partly double-bonded to carbon and the electron density has moved toward oxygen. Protonating the nitrogen would break that conjugation and forfeit the stabilisation, so it does not happen in aqueous acid; amides are essentially nonbasic (and poor nucleophiles). The amide nitrogen is also closer to planar than pyramidal, a further sign that its lone pair is committed to the pi system.",
      "approach": "Step 1: Ethylamine: sp3 nitrogen, lone pair localised in an sp3 orbital; ethylammonium pKa 10.75. A normal alkylamine base.\nStep 2: Propanamide: the nitrogen lone pair overlaps with the C=O pi system; the second resonance form puts C=N+ and O-.\nStep 3: Protonation on nitrogen would destroy that delocalisation, so the equilibrium lies far toward the unprotonated amide; amides are not protonated by dilute aqueous acid.\nStep 4: Ethylamine is the stronger base by many orders of magnitude.",
      "note": "McMurry 24.3 (Basicity of Amines) states that, in contrast with amines, amides are nonbasic: they are not protonated by aqueous acids and are poor nucleophiles, because an amide is stabilised by delocalisation of the nitrogen lone-pair electrons through orbital overlap with the carbonyl group, and that stabilisation is lost on protonation. Problem 24-4(a) is this exact pair. The same delocalisation is why amides are the least reactive acid derivatives (21.2) and why their C=O absorbs at the low end of the carbonyl range (21.10).",
      "options": {
        "A": "Correct. The amide lone pair is tied up in resonance with the carbonyl; the amine's is free to accept a proton.",
        "B": "The carbonyl oxygen of an amide is weakly basic (it is where an amide does protonate, in strong acid), but that makes the compound no better a base overall; the nitrogen is far less basic than an amine's, and the amide as a whole is essentially nonbasic in water.",
        "C": "The carbonyl withdraws electron density from the nitrogen, by resonance, making the nitrogen less electron-rich, not more. A polar N-H bond has nothing to do with basicity, which concerns the lone pair.",
        "D": "The amide nitrogen is not a normal sp3 centre: it is nearly planar, with its lone pair in a p orbital conjugated to the carbonyl. The two lone pairs are in very different situations, and the basicities differ by roughly ten pKa units."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q8_pka_pkb_benzylamine",
    "topic": "Basicity of Amines",
    "difficulty_level": "Medium",
    "question_text": "The benzylammonium ion has pKa 9.33 and the propylammonium ion has pKa 10.71. Which amine is the stronger base, and what are the pKb values of benzylamine and propylamine?",
    "options": [
      {
        "option_id": "A",
        "text": "Propylamine is the stronger base; pKb(benzylamine) = 4.67 and pKb(propylamine) = 3.29",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzylamine is the stronger base; pKb(benzylamine) = 4.67 and pKb(propylamine) = 3.29",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Propylamine is the stronger base; pKb(benzylamine) = 9.33 and pKb(propylamine) = 10.71",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzylamine is the stronger base, because its ammonium ion is the stronger acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Amine basicity is conventionally reported as the pKa of the conjugate acid, the ammonium ion. A stronger base holds its proton more tightly, so its ammonium ion is a weaker acid and has the larger pKa. The basicity constant Kb of the amine and the acidity constant Ka of its ammonium ion are linked through the ion product of water, Ka x Kb = Kw = 10^-14, so pKa + pKb = 14 and pKb is obtained by subtraction. A smaller pKb means a stronger base, exactly as a smaller pKa means a stronger acid.",
      "approach": "Step 1: Compare the ammonium pKa values: propylammonium 10.71 is larger than benzylammonium 9.33, so propylammonium is the weaker acid and propylamine the stronger base.\nStep 2: Convert: pKb = 14 - pKa. Benzylamine: 14 - 9.33 = 4.67. Propylamine: 14 - 10.71 = 3.29.\nStep 3: Check the direction: the stronger base has the smaller pKb, and 3.29 is smaller than 4.67. Consistent.\nStep 4: Why the difference: the phenyl group of benzylamine is electron-withdrawing toward the CH2NH2 by induction (the nitrogen is not conjugated with the ring, so this is a small effect, 1.4 units, not aniline's 6).",
      "note": "McMurry 24.3 (Basicity of Amines) derives pKa + pKb = 14 from Ka x Kb = Kw and sets this exact comparison as Problem 24-5, having stated that the most convenient way to measure basicity is to look at the acidity of the corresponding ammonium ion: a weaker base has an ammonium ion with a smaller pKa, a stronger base one with a larger pKa. Table 24.1 puts most simple alkylammonium ions in the narrow range 10 to 11, which is where propylammonium falls.",
      "options": {
        "A": "Correct. The larger ammonium pKa belongs to the stronger base, and pKb = 14 - pKa gives 4.67 and 3.29.",
        "B": "The pKb values are computed correctly but the comparison is reversed: a smaller pKb (3.29, propylamine) means a stronger base, just as a smaller pKa means a stronger acid.",
        "C": "These are the pKa values of the ammonium ions, not the pKb values of the amines. pKb is obtained by subtracting the ammonium pKa from 14.",
        "D": "The logic is inverted. If benzylammonium is the stronger acid (smaller pKa, 9.33), it gives up its proton more readily, which means benzylamine holds a proton less tightly and is the weaker base."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q9_amine_extraction",
    "topic": "Basicity of Amines",
    "difficulty_level": "Medium",
    "question_text": "A mixture of N-methylcyclohexanamine and cyclohexanone is dissolved in diethyl ether. Which procedure isolates the pure amine?",
    "options": [
      {
        "option_id": "A",
        "text": "Shake the ether solution with aqueous HCl, separate the layers, then basify the aqueous layer with NaOH and extract the liberated amine; the ketone stays in the ether throughout",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Shake the ether solution with aqueous NaOH; the amine passes into the aqueous layer as its sodium salt",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Shake the ether solution with aqueous NaHCO3; the ketone passes into the aqueous layer and the amine remains in the ether",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Shake the ether solution with water; the amine dissolves in the water and the ketone does not",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An amine's basicity is a handle for separating it from neutral compounds. Aqueous acid protonates the amine to an ammonium salt, which is ionic and dissolves in the water layer, while a ketone, alcohol or ether, being neither acidic nor basic, stays in the organic solvent. Separating the layers and then adding NaOH to the aqueous layer deprotonates the ammonium ion and the free amine separates out or can be extracted back into ether. It is the mirror image of the acid extraction of Ch 20, where NaOH pulls a carboxylic acid into water as its carboxylate.",
      "approach": "Step 1: Identify the basic component: N-methylcyclohexanamine (a secondary amine, ammonium pKa about 11). Cyclohexanone is neutral.\nStep 2: Aqueous HCl converts the amine into N-methylcyclohexylammonium chloride, which dissolves in the water layer; cyclohexanone stays in the ether.\nStep 3: Separate the layers; evaporating the ether recovers cyclohexanone.\nStep 4: Add NaOH to the aqueous layer to deprotonate the ammonium ion; the free amine separates as an oil and is extracted with ether and dried.",
      "note": "McMurry 24.3 (Basicity of Amines), Figure 24.4, describes exactly this purification: a mixture of a basic amine and a neutral compound such as a ketone or alcohol in an organic solvent is treated with aqueous acid, the amine dissolves in the water layer as its protonated salt, the neutral compound remains in the organic layer, and neutralisation of the ammonium ion with NaOH provides the pure amine. The carboxylic acid version, with NaOH and then HCl, is McMurry 20.2 and this bank's Ch 20 extraction item.",
      "options": {
        "A": "Correct. Acid moves the amine into water as its ammonium salt, the neutral ketone stays in ether, and base returns the free amine.",
        "B": "An amine is a base, not an acid; NaOH does not deprotonate it (the N-H pKa is about 36) and no salt forms. Both compounds would stay in the ether.",
        "C": "Bicarbonate is a weak base that extracts carboxylic acids as their salts. A ketone has no acidic proton that bicarbonate can remove, and the amine, a base, is not extracted by a base either; nothing would separate.",
        "D": "N-Methylcyclohexanamine has seven carbons and is only sparingly soluble in water as the free amine; a water wash would move little of it. Protonation to the ionic salt is what makes it water-soluble."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q10_pyridine_vs_alkylamine_basicity",
    "topic": "Basicity of Amines",
    "difficulty_level": "Medium",
    "question_text": "Pyridine (conjugate acid pKa 5.25) is a much weaker base than triethylamine (pKa 10.76), although its nitrogen lone pair is not part of the aromatic sextet. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "Pyridine's lone pair is in an sp2 orbital, with more s character than the sp3 orbital of an alkylamine; electrons in an orbital with more s character are held closer to the nucleus and are less available for bonding to a proton",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Pyridine's lone pair is delocalised into the ring's pi system, like aniline's",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Protonating pyridine's nitrogen destroys the ring's aromaticity",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Pyridine has only one alkyl-type substituent on nitrogen, whereas triethylamine has three electron-donating ethyl groups",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Pyridine's nitrogen contributes one electron to the aromatic sextet through its p orbital and keeps its lone pair in an sp2 orbital lying in the plane of the ring. That lone pair is genuinely available, which is why pyridine is a useful base and nucleophile, but it is held more tightly than an alkylamine's. An sp2 orbital has 33% s character against 25% for sp3, and s orbitals concentrate electron density at the nucleus, so the more s character a lone pair's orbital has, the lower its energy and the less willing it is to bond to a proton. The same trend runs from alkylamines through imines to nitriles (sp, weakest).",
      "approach": "Step 1: Locate pyridine's lone pair: in the ring plane, in an sp2 orbital, not in the pi system. Pyridine's aromaticity is unaffected by protonation.\nStep 2: Compare hybridisation: triethylamine's lone pair is sp3 (25% s), pyridine's is sp2 (33% s).\nStep 3: More s character means the electrons sit closer to the positive nucleus and are less available for sharing with H+: a weaker base.\nStep 4: The effect is worth about five pKa units here (10.76 against 5.25); the second nitrogen of pyrimidine, withdrawing inductively, takes the pKa down a further four units to 1.3.",
      "note": "McMurry 24.9 (Heterocyclic Amines) gives exactly this explanation: the diminished basicity of pyridine compared with alkylamines is due to the lone-pair electrons on the pyridine nitrogen being in an sp2 orbital while those on an alkylamine nitrogen are in an sp3 orbital, and because s orbitals have their maximum electron density at the nucleus, electrons in an orbital with more s character are held more closely and are less available for bonding. The text distinguishes this from pyrrole, whose lone pair is in the sextet, and from pyrimidine, where a second nitrogen's inductive effect lowers the pKa to 1.3.",
      "options": {
        "A": "Correct. The sp2 lone pair is lower in energy and more tightly held than an sp3 lone pair, so pyridine is less basic without any loss of aromaticity on protonation.",
        "B": "Pyridine's lone pair lies in the plane of the ring, perpendicular to the p orbitals of the pi system, and cannot overlap with them. Aniline's nitrogen is attached to the ring and its lone pair does conjugate; pyridine's does not.",
        "C": "Pyridinium ion is fully aromatic: the six pi electrons come from the ring's p orbitals, and the proton bonds to the in-plane sp2 lone pair. This is the pyrrole argument misapplied; pyrrole's lone pair is in the sextet, pyridine's is not.",
        "D": "The number of alkyl groups on nitrogen makes little difference among alkylamines (Table 24.1 puts primary, secondary and tertiary alkylammonium ions all between 10 and 11). A five-unit gap needs a change in the orbital holding the lone pair, which is what the sp2 hybridisation supplies."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q11_imidazole_basic_nitrogen",
    "topic": "Basicity of Amines",
    "difficulty_level": "Medium",
    "question_text": "Imidazole has two nitrogens, yet its conjugate acid has a single pKa of 6.95 and only one nitrogen is basic. Which one, and why?",
    "question_smiles": "c1cnc[nH]1",
    "structure_alt": "A five-membered aromatic ring containing three carbons and two nitrogens that are separated by one carbon; one nitrogen carries a hydrogen, the other does not.",
    "options": [
      {
        "option_id": "A",
        "text": "The nitrogen without the hydrogen: its lone pair is in an sp2 orbital in the ring plane, like pyridine's, and is free to accept a proton; the N-H nitrogen's lone pair is part of the aromatic sextet, like pyrrole's",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The N-H nitrogen: it already carries a hydrogen and can accept a second to become NH2+",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both nitrogens are equally basic, and the single pKa is an average",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Neither nitrogen is basic, because protonation of either would destroy the aromaticity",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Imidazole combines the two kinds of aromatic nitrogen in one ring. The N-H nitrogen is pyrrole-like: it donates its lone pair to the six-electron pi system, so that lone pair is not available and protonating it would cost the aromaticity. The other nitrogen is pyridine-like: it contributes one p electron to the sextet and keeps a lone pair in an sp2 orbital in the plane of the ring, available for bonding to a proton without disturbing the aromaticity. Imidazole is therefore a moderately strong base at the pyridine-like nitrogen (pKa 6.95, stronger than pyridine because the second nitrogen's N-H helps share the positive charge in the imidazolium ion by resonance), and a weak acid at the N-H.",
      "approach": "Step 1: Assign the two nitrogens: N1 carries H and is pyrrole-like (lone pair in the pi system); N3 has no H and is pyridine-like (lone pair in an sp2 orbital in the plane).\nStep 2: Protonation at N3 uses the in-plane lone pair; the ring stays aromatic, and the imidazolium cation is symmetrical, with the positive charge shared by both nitrogens through resonance.\nStep 3: Protonation at N1 would require the lone pair that is part of the sextet: not favourable.\nStep 4: The one observed basic site is N3, pKa 6.95, which places imidazole (as histidine's side chain) about 31% protonated at pH 7.3, exactly where a buffering, proton-shuttling catalytic residue is useful.",
      "note": "McMurry 24.9 (Heterocyclic Amines) states that imidazole, a constituent of the amino acid histidine, has two nitrogens, only one of which is basic, and Table 24.1 (24.3) gives the imidazolium pKa as 6.95; Problem 24-21 asks for the percent protonation of the imidazole nitrogen in histidine at pH 7.3. The two-kinds-of-nitrogen analysis is the same one the text applies to purine, with three pyridine-like basic nitrogens and one pyrrole-like nonbasic one.",
      "options": {
        "A": "Correct. The pyridine-like nitrogen's in-plane sp2 lone pair accepts the proton; the N-H nitrogen's lone pair is committed to the aromatic sextet.",
        "B": "The N-H nitrogen has no available lone pair: its pair is one of the three that make up the six-electron aromatic system. Protonating it would give a non-aromatic cation and is not observed; in fact that N-H is weakly acidic (pKa about 14), not basic.",
        "C": "The two nitrogens are in entirely different situations, one pyrrole-like and one pyridine-like. Only the pyridine-like nitrogen is protonated; the single pKa refers to it. (After protonation the two nitrogens become equivalent by resonance, which is why the cation is symmetrical.)",
        "D": "Protonation at the pyridine-like nitrogen leaves the sextet intact, because that lone pair is in the plane and not part of the pi system. Imidazole is a real base, pKa 6.95, some fifty times stronger than pyridine."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q12_aniline_less_basic",
    "topic": "Basicity of Arylamines",
    "difficulty_level": "Medium",
    "question_text": "Anilinium ion has pKa 4.63 while methylammonium ion has pKa 10.64. Why is aniline so much weaker a base than methylamine?",
    "options": [
      {
        "option_id": "A",
        "text": "The nitrogen lone pair of aniline is delocalised into the benzene ring, so the amine is stabilised by resonance; protonation localises the pair on nitrogen and forfeits that stabilisation, making protonation less favourable",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Aniline's nitrogen is sp2-hybridised like pyridine's, so its lone pair is held closer to the nucleus",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The benzene ring withdraws electrons from nitrogen inductively, the same effect that makes chloroacetic acid stronger than acetic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Aniline's N-H protons are acidic and are lost in water, so it behaves as an acid rather than a base",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Basicity is a comparison of the free amine with its protonated form. In an alkylamine the lone pair sits on nitrogen in both, so nothing is lost on protonation. In an arylamine the lone pair overlaps the ring's pi system: aniline can be drawn with five resonance forms, three of them placing the pair on ring carbons, and it is lower in energy for that. The anilinium ion has no such forms, because the pair now bonds to a proton. The free energy of protonation is therefore more positive for aniline than for methylamine, by about six pKa units. The dominant effect is resonance in the ground state, not induction.",
      "approach": "Step 1: Draw aniline's resonance forms: the Kekule pair plus three in which the nitrogen lone pair has moved into the ring, putting negative charge on the ortho and para carbons and a positive charge on N.\nStep 2: Note that the anilinium ion cannot do this: its nitrogen has four bonds and no lone pair.\nStep 3: So protonation costs aniline its resonance stabilisation; the equilibrium ArNH2 + H3O+ lies further left than for an alkylamine.\nStep 4: Anilinium pKa 4.63 against methylammonium 10.64: aniline is about a million times weaker as a base. Substituents that add to the ring's electron donation (OCH3, CH3) raise the pKa a little; withdrawing groups (NO2, CN) lower it further.",
      "note": "McMurry 24.4 (Basicity of Arylamines) gives this explanation: arylamines are less basic because the nitrogen lone-pair electrons are delocalised by interaction with the aromatic ring's pi system and are less available for bonding to H+, aniline being stabilised by five resonance forms, much of which is lost on protonation (Figure 24.5). The section's Table 24.2 then shows the substituent effects. The same delocalisation makes the NH2 group a powerful activator in electrophilic aromatic substitution (16.4, 24.8).",
      "options": {
        "A": "Correct. Resonance stabilises the free arylamine but not the anilinium ion, so the proton is bound less favourably.",
        "B": "Aniline's nitrogen is attached to the ring through a single bond and is close to sp3 (somewhat flattened); it is not a ring atom with an in-plane sp2 lone pair. The s-character argument is pyridine's, and it accounts for only about five units there without any resonance.",
        "C": "A phenyl group is mildly electron-withdrawing by induction, but that effect is small; benzylamine, where the ring is one carbon further away and cannot conjugate, has an ammonium pKa of 9.33, only 1.4 units below propylamine. The six-unit drop in aniline needs the resonance delocalisation.",
        "D": "Aniline's N-H protons have a pKa near 27; they are not lost in water. Aniline is a base, protonated by dilute acid to give water-soluble anilinium salts, only a weak one."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q13_substituted_aniline_ranking",
    "topic": "Basicity of Arylamines",
    "difficulty_level": "Medium",
    "question_text": "Which order lists p-nitroaniline, p-aminobenzaldehyde and p-bromoaniline in ascending basicity (weakest base first)?",
    "options": [
      {
        "option_id": "A",
        "text": "p-Nitroaniline < p-aminobenzaldehyde < p-bromoaniline",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "p-Bromoaniline < p-aminobenzaldehyde < p-nitroaniline",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "p-Aminobenzaldehyde < p-nitroaniline < p-bromoaniline",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "p-Nitroaniline < p-bromoaniline < p-aminobenzaldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A substituent on an aniline changes its basicity in the same direction as it changes the ring's reactivity toward electrophiles: electron-donating groups make the amine more basic, electron-withdrawing groups less basic, because withdrawing groups pull the nitrogen lone pair further into the ring (and stabilise the neutral amine relative to its cation) while donating groups push against that. Among withdrawing groups the order of strength is the familiar one: nitro is the strongest, then the carbonyl-based groups (CHO, COR, CN), then the halogens, which withdraw by induction but give some back by resonance.",
      "approach": "Step 1: Classify each para substituent: NO2, strongly withdrawing by resonance and induction; CHO, withdrawing by resonance and induction but less so; Br, withdrawing by induction only, weakly.\nStep 2: The stronger the withdrawal, the weaker the base.\nStep 3: Ascending basicity: p-nitroaniline (pKa 1.00) < p-aminobenzaldehyde (comparable to p-cyanoaniline, pKa 1.74, and p-aminoacetophenone, a little higher) < p-bromoaniline (3.86).\nStep 4: All three are weaker than aniline itself (4.63); a donating group such as OCH3 (5.34) or NH2 (6.15) would rank above aniline.",
      "note": "McMurry 24.4 (Basicity of Arylamines) sets this ranking as Problem 24-6(a) after Table 24.2, which gives p-NO2 1.00, p-CN 1.74, p-Br 3.86, p-Cl 3.98, H 4.63, p-CH3 5.08, p-OCH3 5.34, p-NH2 6.15, and states that electron-donating substituents increase and electron-withdrawing substituents decrease arylamine basicity, the same groups that activate and deactivate the ring in electrophilic substitution (16.4). The aldehyde is not in the table; it belongs with the other carbonyl-type withdrawing groups between nitro and the halogens.",
      "options": {
        "A": "Correct. Nitro withdraws most and gives the weakest base; the aldehyde withdraws less; bromine withdraws least.",
        "B": "This is descending basicity. p-Bromoaniline is the strongest base of the three, because bromine is the weakest electron-withdrawing group here, and p-nitroaniline the weakest.",
        "C": "A formyl group is a weaker electron-withdrawing group than nitro; nitro is the strongest common deactivator and p-nitroaniline (pKa 1.00) is the weakest base in Table 24.2.",
        "D": "Bromine withdraws electrons only inductively and is partly offset by resonance donation from its lone pairs, so it lowers basicity less than a conjugated carbonyl group does. p-Bromoaniline is more basic than p-aminobenzaldehyde, not less."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q14_most_basic_aniline",
    "topic": "Basicity of Arylamines",
    "difficulty_level": "Easy",
    "question_text": "Which of these arylamines is the strongest base?",
    "options": [
      {
        "option_id": "A",
        "text": "4-Methoxyaniline",
        "smiles": "COc1ccc(N)cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Aniline",
        "smiles": "Nc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-Chloroaniline",
        "smiles": "Nc1ccc(Cl)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-Nitroaniline",
        "smiles": "Nc1ccc([N+](=O)[O-])cc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An arylamine's basicity is lowered by conjugation of its nitrogen lone pair with the ring, and a para substituent adjusts that. An electron-donating group such as methoxy pushes electron density into the ring by resonance, which competes with the nitrogen's donation and leaves the lone pair more available, so the amine is more basic; it also stabilises the positive charge of the anilinium ion. Electron-withdrawing groups do the opposite, pulling the lone pair further into the ring and destabilising the cation. The ranking of anilines therefore follows the ranking of substituents as activators and deactivators.",
      "approach": "Step 1: Classify the para group of each: OCH3 donating by resonance; H the reference; Cl withdrawing by induction; NO2 strongly withdrawing.\nStep 2: Donating groups raise the anilinium pKa (stronger base); withdrawing groups lower it.\nStep 3: Order from Table 24.2: 4-methoxyaniline 5.34 > aniline 4.63 > 4-chloroaniline 3.98 > 4-nitroaniline 1.00.\nStep 4: 4-Methoxyaniline is the strongest base of the four, though still far weaker than any alkylamine.",
      "note": "McMurry 24.4 (Basicity of Arylamines), Table 24.2, gives these values and states that electron-donating substituents such as CH3, NH2 and OCH3, which increase ring reactivity toward electrophilic substitution, also increase arylamine basicity, while electron-withdrawing substituents such as Cl, NO2 and CN decrease both. The same table shows the ortho and meta derivatives following similar trends. The parallel with the benzoic acid pKa values of 20.4 is exact but inverted: the group that makes the acid weaker makes the amine stronger.",
      "options": {
        "A": "Correct. The methoxy group donates electrons by resonance, making the nitrogen lone pair more available and the anilinium ion more stable: pKa 5.34, the highest of the set.",
        "B": "Aniline, with no substituent, is the reference at pKa 4.63; a para donor raises it and a para acceptor lowers it, so aniline sits second here.",
        "C": "Chlorine withdraws electrons inductively (its resonance donation is weak) and lowers the anilinium pKa to 3.98; 4-chloroaniline is a weaker base than aniline.",
        "D": "The nitro group withdraws electrons strongly by resonance and induction, pulling the nitrogen lone pair into the ring and toward the nitro oxygens; 4-nitroaniline (pKa 1.00) is the weakest base of the four by more than three units."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q15_methylamine_physiological_ph",
    "topic": "Biological Amines and the Henderson-Hasselbalch Equation",
    "difficulty_level": "Medium",
    "question_text": "The pKa of methylammonium ion is 10.64. In what form does methylamine exist in a 0.0010 M solution buffered at the physiological pH of 7.3?",
    "options": [
      {
        "option_id": "A",
        "text": "Essentially entirely as the methylammonium ion; only about 0.05% is free methylamine",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "About half as methylamine and half as methylammonium ion",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Essentially entirely as free methylamine",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "About 30% as methylammonium ion and 70% as free methylamine",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Henderson-Hasselbalch equation applies to an amine exactly as to a carboxylic acid, with the ammonium ion as HA and the free amine as A-: log([RNH2]/[RNH3+]) = pH - pKa. An alkylamine's conjugate acid has a pKa near 10 or 11, more than three units above physiological pH, so the ratio of free amine to ammonium ion is about 10^-3.3: the amine is protonated almost completely. That is why cellular amines are always written in their protonated form and amino acids as ammonium carboxylates. Only much weaker bases, such as pyrimidine (pKa 1.3) or imidazole (pKa 6.95), are substantially neutral at pH 7.3.",
      "approach": "Step 1: log([CH3NH2]/[CH3NH3+]) = pH - pKa = 7.3 - 10.64 = -3.34.\nStep 2: [CH3NH2]/[CH3NH3+] = 10^-3.34 = 4.6 x 10^-4.\nStep 3: With a total of 0.0010 M, [CH3NH3+] is 0.0010 M and [CH3NH2] is about 5 x 10^-7 M, roughly 0.05%.\nStep 4: The amine is essentially all protonated; the concentration does not affect the ratio, only the absolute amounts.",
      "note": "McMurry 24.5 (Biological Amines and the Henderson-Hasselbalch Equation) works this exact example, a 0.0010 M methylamine solution at pH 7.3, obtaining a ratio of 4.6 x 10^-4 and [RNH2] = 5 x 10^-7 M, and concludes that essentially 100% of the methylamine exists as methylammonium ion, so cellular amines are written protonated and amino acids as ammonium carboxylates. Problem 24-7 asks the same for pyrimidine (pKa 1.3), which comes out essentially all neutral.",
      "options": {
        "A": "Correct. The pH is 3.3 units below the pKa, so the ammonium form outnumbers the free amine by more than 2,000 to 1.",
        "B": "A 50:50 mixture occurs only when pH = pKa, that is, at pH 10.64. At 7.3 the solution is far on the acidic side of that point.",
        "C": "Free methylamine would dominate only above pH 10.64. At physiological pH the base is protonated; this is the answer for pyrimidine (pKa 1.3), not for an alkylamine.",
        "D": "A 30:70 split of this kind belongs to a base whose pKa is near 7, such as imidazole (6.95) in histidine. Methylamine's pKa is more than three units higher, so it is essentially fully protonated."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q16_histidine_imidazole_protonation",
    "topic": "Biological Amines and the Henderson-Hasselbalch Equation",
    "difficulty_level": "Medium",
    "question_text": "The imidazole ring of histidine has a conjugate-acid pKa of 6.95. What percentage of histidine's imidazole rings are protonated at pH 7.3?",
    "options": [
      {
        "option_id": "A",
        "text": "About 31%",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "About 69%",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Essentially 100%, like an alkylamine",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Essentially 0%, like pyrimidine",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A base whose conjugate-acid pKa lies close to physiological pH is the interesting case for the Henderson-Hasselbalch equation, because it exists as a mixture of the two forms and can shuttle protons in either direction. Imidazole's pKa of 6.95 is within half a unit of pH 7.3, so a substantial fraction is protonated and a larger fraction is not. That is why histidine is the residue enzymes use for general acid-base catalysis at neutral pH: neither the ammonium-type alkylamines (fully protonated) nor the very weak pyrimidine (fully neutral) could do that job.",
      "approach": "Step 1: log([Im]/[ImH+]) = pH - pKa = 7.3 - 6.95 = 0.35.\nStep 2: [Im]/[ImH+] = 10^0.35 = 2.24: about 2.2 neutral rings for every protonated one.\nStep 3: Fraction protonated = 1/(1 + 2.24) = 0.31, so 31% protonated and 69% neutral.\nStep 4: Check the direction: pH above pKa, so the conjugate base (neutral imidazole) predominates, and the protonated fraction must be below 50%.",
      "note": "McMurry 24.9 (Heterocyclic Amines) sets this as Problem 24-21, referring back to the Henderson-Hasselbalch treatment of 24.5, and Table 24.1 gives imidazolium pKa 6.95. The same section explains why only one imidazole nitrogen is basic: the pyridine-like one whose lone pair is in an sp2 orbital in the plane. Pyrimidine (pKa 1.3), the subject of Problem 24-7, is essentially all neutral at pH 7.3, and methylamine (10.64) essentially all protonated (24.5); imidazole is the one that is genuinely mixed.",
      "options": {
        "A": "Correct. With the pH 0.35 units above the pKa, the neutral form outnumbers the protonated form 2.2 to 1, which is 31% protonated.",
        "B": "69% is the neutral fraction. With pH above pKa the conjugate base (unprotonated imidazole) is the major form, so the protonated fraction is the smaller one.",
        "C": "An alkylamine is fully protonated at pH 7.3 because its pKa is 10 to 11, more than three units above the pH. Imidazole's pKa is below the pH, so it is mostly neutral.",
        "D": "Pyrimidine, with pKa 1.3, is six units below pH 7.3 and is essentially all neutral. Imidazole's pKa is only 0.35 below the pH, so a third of it is protonated."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q17_overalkylation",
    "topic": "Synthesis of Amines",
    "difficulty_level": "Medium",
    "question_text": "Treating 1-bromooctane with a twofold excess of ammonia gives only about 45% octylamine, along with nearly as much dioctylamine and smaller amounts of trioctylamine and tetraoctylammonium bromide. Why is the reaction so unselective?",
    "options": [
      {
        "option_id": "A",
        "text": "The primary amine formed is about as nucleophilic as ammonia, so it competes for the remaining alkyl halide and is alkylated again; the secondary and tertiary amines react further in turn",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ammonia is too weak a nucleophile to react, so most of the halide is consumed by the amine products instead",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "E2 elimination of the halide to oct-1-ene competes with substitution",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Octylamine rearranges to dioctylamine by a disproportionation reaction",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Ammonia and amines are good SN2 nucleophiles, and alkylating them is the most direct route to a new C-N bond, but it does not stop where it is wanted. The first product, a primary amine, has a lone pair just as available as ammonia's, and its alkyl group makes it a little more nucleophilic if anything, so it attacks the next molecule of alkyl halide about as fast as ammonia does. The secondary amine does the same, more slowly, and even the tertiary amine goes on to a quaternary ammonium salt. The result is a statistical mixture. The cure is a nitrogen nucleophile whose product cannot react again: azide ion, or the phthalimide anion of the Gabriel synthesis.",
      "approach": "Step 1: NH3 + C8H17Br by SN2 gives C8H17NH3+ Br-, which excess ammonia deprotonates to octylamine.\nStep 2: Octylamine is nucleophilic and present in the same flask as unreacted 1-bromooctane; it attacks to give dioctylamine (after deprotonation).\nStep 3: Dioctylamine attacks again to give trioctylamine, and trioctylamine gives the quaternary salt.\nStep 4: Because the successive amines compete with ammonia rather than waiting for it to be used up, the product is a mixture; a large excess of ammonia helps but does not solve the problem.",
      "note": "McMurry 24.6 (Synthesis of Amines) gives these exact figures for 1-bromooctane with a twofold excess of ammonia and explains that because ammonia and primary amines have similar reactivity the initially formed monoalkylated substance often undergoes further reaction, secondary and tertiary amines undergoing further alkylation to a lesser extent. The section then presents the two remedies: azide ion, whose alkyl azide product is not nucleophilic, and the Gabriel phthalimide synthesis. Tertiary amines, by contrast, are alkylated cleanly to quaternary salts (24.7).",
      "options": {
        "A": "Correct. Each product amine is itself a nucleophile toward the alkyl halide, so alkylation runs on past the primary amine.",
        "B": "Ammonia is a perfectly good nucleophile and does react, giving octylammonium bromide; the problem is that the octylamine formed reacts about as fast, not that ammonia is inert.",
        "C": "Ammonia is a weak base and 1-bromooctane a primary halide, so elimination is negligible. The side products are all amines and ammonium salts, which is the signature of overalkylation, not of E2.",
        "D": "Amines do not disproportionate in this way. Dioctylamine arises from a second SN2 alkylation of octylamine by unreacted 1-bromooctane, which is why it is accompanied by trioctylamine and the quaternary salt."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q18_azide_route_scheme",
    "topic": "Synthesis of Amines",
    "difficulty_level": "Medium",
    "question_text": "1-Bromobutane is treated with sodium azide, and the product is then reduced with LiAlH4 and worked up with water. What is the final organic product?",
    "reaction_scheme": {
      "reactants": [
        "CCCCBr"
      ],
      "reagents": "1. NaN3, DMSO; 2. LiAlH4, ether; 3. H2O",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A four-carbon chain with a bromine on the end carbon: 1-bromobutane."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Butan-1-amine",
        "smiles": "CCCCN",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Dibutylamine",
        "smiles": "CCCCNCCCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Pentan-1-amine",
        "smiles": "CCCCCN",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Azidobutane",
        "smiles": "CCCCN=[N+]=[N-]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Azide ion is the answer to the overalkylation problem. It is an excellent SN2 nucleophile toward primary and secondary alkyl halides, and the alkyl azide it gives is not nucleophilic, so it cannot attack a second molecule of halide and no dialkylation occurs. Reduction of the azide with LiAlH4 (or by catalytic hydrogenation) then converts the N3 group into NH2 with loss of N2. The carbon count is unchanged, because the nitrogen bonds to the carbon that carried the halogen. The one drawback is that low-molecular-weight alkyl azides are explosive.",
      "approach": "Step 1: N3- displaces bromide from the primary carbon of 1-bromobutane by SN2: 1-azidobutane, CH3CH2CH2CH2N3.\nStep 2: The azide is not a nucleophile, so nothing further happens to it in the presence of remaining halide.\nStep 3: LiAlH4 reduces the azide, delivering hydride to the terminal nitrogen system and expelling N2; water work-up protonates the amide nitrogen.\nStep 4: Product: butan-1-amine, CH3CH2CH2CH2NH2, a clean primary amine with the halide's four carbons.",
      "note": "McMurry 24.6 (Synthesis of Amines) presents this as the better method for preparing primary amines from alkyl halides: azide ion rather than ammonia as the SN2 nucleophile, the alkyl azide product being non-nucleophilic so that overalkylation cannot occur, followed by LiAlH4 reduction, with the warning that low-molecular-weight alkyl azides are explosive. The Gabriel synthesis in the same section is the other route to the same clean outcome; the cyanide route (20.5) adds a carbon instead.",
      "options": {
        "A": "Correct. Azide displaces bromide without overalkylation, and LiAlH4 reduces the azide to the primary amine with the same carbon skeleton.",
        "B": "Dibutylamine is the overalkylation product that ammonia would give. The azide route exists precisely to avoid it: an alkyl azide has no nucleophilic nitrogen to attack a second halide.",
        "C": "Pentan-1-amine has five carbons; that is what the cyanide route gives (1-bromobutane + NaCN, then LiAlH4), because the nitrile carbon becomes part of the chain. Azide's nitrogens all leave except the one that becomes NH2, so no carbon is added.",
        "D": "1-Azidobutane is the intermediate after step 1. Steps 2 and 3, LiAlH4 then water, reduce it to the amine with loss of N2; the azide is not the isolated product."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q19_gabriel_scheme",
    "topic": "Synthesis of Amines",
    "difficulty_level": "Medium",
    "question_text": "Phthalimide is treated with KOH, then with benzyl bromide, and the product is heated with aqueous NaOH. What is the amine obtained?",
    "reaction_scheme": {
      "reactants": [
        "O=C1NC(=O)c2ccccc12",
        "BrCc1ccccc1"
      ],
      "reagents": "1. KOH; 2. SN2; 3. NaOH, H2O, heat",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring fused to a five-membered ring made of two C=O groups joined through an N-H: phthalimide.",
        "A benzene ring bearing a CH2Br group: benzyl bromide."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Benzylamine",
        "smiles": "NCc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "N-Benzylphthalimide",
        "smiles": "O=C1c2ccccc2C(=O)N1Cc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dibenzylamine",
        "smiles": "c1ccc(CNCc2ccccc2)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzamide",
        "smiles": "NC(=O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Gabriel synthesis makes a primary amine from an alkyl halide without any overalkylation, by using a nitrogen that can be alkylated exactly once. Phthalimide's N-H sits between two carbonyl groups, like the C-H of a beta-keto ester, so it is acidic enough (pKa about 8.3) for KOH to remove; the imide anion is a good nucleophile and displaces the halide by SN2; and the N-alkylated imide has no N-H left and cannot react again. Hydrolysis of the two amide bonds of the imide, by hot aqueous base (or by hydrazine), then releases the primary amine and phthalate ion.",
      "approach": "Step 1: KOH deprotonates phthalimide at nitrogen: the potassium phthalimide anion.\nStep 2: The anion attacks the benzylic CH2 of benzyl bromide by SN2 (benzylic halides are ideal); bromide leaves: N-benzylphthalimide.\nStep 3: The N-alkyl imide has no N-H and is not nucleophilic, so no second alkylation occurs.\nStep 4: Hot aqueous NaOH hydrolyses both imide C-N bonds, releasing benzylamine, PhCH2NH2, and phthalate dianion.",
      "note": "McMurry 24.6 (Synthesis of Amines) describes the Gabriel amine synthesis as a phthalimide alkylation: the imide N-H, flanked by two carbonyls like a beta-keto ester's C-H, is deprotonated by bases such as KOH, the anion is alkylated in a reaction similar to the acetoacetic ester synthesis (22.7), and basic hydrolysis of the N-alkylated imide, analogous to amide hydrolysis (21.7), yields the primary amine. Problem 24-9 asks for the mechanism of that hydrolysis. The azide route in the same section gives the same clean primary amines.",
      "options": {
        "A": "Correct. One alkylation of the imide anion, then hydrolysis of the imide, gives the primary amine with no dialkylation.",
        "B": "N-Benzylphthalimide is the product of step 2, and it is the point of the method that it cannot be alkylated further. Step 3, hot aqueous NaOH, hydrolyses it to the amine and phthalate.",
        "C": "Dibenzylamine is what direct alkylation of ammonia or benzylamine with benzyl bromide gives by overalkylation. The Gabriel imide has only one N-H to lose, so it is alkylated once and the amine released carries a single benzyl group.",
        "D": "Benzamide would need the benzyl carbon to be oxidised to a carbonyl and bonded to nitrogen as an amide. The Gabriel sequence forms a C-N single bond at the benzylic CH2 and never oxidises it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q20_reductive_amination_scheme",
    "topic": "Synthesis of Amines",
    "difficulty_level": "Medium",
    "question_text": "Cyclohexanone and methylamine are stirred together with sodium triacetoxyborohydride. What is the organic product?",
    "reaction_scheme": {
      "reactants": [
        "O=C1CCCCC1",
        "CN"
      ],
      "reagents": "NaBH(OAc)3",
      "conditions": "CH3OH, 25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-membered ring with a C=O on one carbon: cyclohexanone.",
        "A methyl group attached to an NH2 group: methylamine."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "N-Methylcyclohexanamine",
        "smiles": "CNC1CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclohexanol",
        "smiles": "OC1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "N-Methylcyclohexanimine",
        "smiles": "CN=C1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "N,N-Dimethylcyclohexanamine",
        "smiles": "CN(C)C1CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Reductive amination joins a carbonyl compound and an amine in one pot. The amine adds to the carbonyl and loses water to give an imine (or, from a secondary amine, an iminium ion), and a mild hydride reagent present in the same flask reduces the C=N to a C-N single bond. Sodium triacetoxyborohydride is chosen because it reduces the protonated imine much faster than it reduces the ketone, so the carbonyl is not wasted as alcohol. Ammonia gives a primary amine, a primary amine gives a secondary one and a secondary amine a tertiary one; the new group on nitrogen is the carbon skeleton of the carbonyl compound.",
      "approach": "Step 1: Methylamine adds to the cyclohexanone carbonyl; the carbinolamine loses water to give the imine, N-methylcyclohexanimine, in equilibrium with its protonated iminium form.\nStep 2: NaBH(OAc)3 delivers hydride to the iminium carbon, reducing the C=N to C-N.\nStep 3: The product is N-methylcyclohexanamine, a secondary amine: the cyclohexyl group came from the ketone and the methyl from the amine.\nStep 4: The ketone itself is reduced only slowly by this reagent, so cyclohexanol is a minor by-product at most.",
      "note": "McMurry 24.6 (Synthesis of Amines) describes reductive amination as treatment of an aldehyde or ketone with ammonia or an amine in the presence of a reducing agent, by way of an imine intermediate (19.8) whose C=N is then reduced (Figure 24.6), with H2 over nickel used industrially (amphetamine from phenyl-2-propanone and ammonia) and NaBH4 or NaBH(OAc)3 in the laboratory. Ammonia, primary and secondary amines give primary, secondary and tertiary amines respectively. The biological version reduces an iminium with NADH in the biosynthesis of proline.",
      "options": {
        "A": "Correct. Imine formation between the ketone and methylamine, then in situ reduction of the C=N, gives the secondary amine.",
        "B": "Cyclohexanol would result if the hydride reduced the ketone directly. Triacetoxyborohydride is deliberately a poor ketone reductant and a good iminium reductant, so the C=N formed with methylamine is what gets reduced.",
        "C": "The imine is the intermediate; it is formed reversibly and reduced as it forms. Without the hydride reagent it could be isolated, but in its presence the C=N is converted to C-N.",
        "D": "A second methyl on nitrogen would need a second reductive amination with formaldehyde, or an alkylation. Methylamine brings one methyl, the ketone brings the cyclohexyl group, and the product nitrogen carries one hydrogen."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q21_reductive_amination_retrosynthesis",
    "topic": "Synthesis of Amines",
    "difficulty_level": "Medium",
    "question_text": "Which carbonyl compound and amine give N-methyl-2-phenylethylamine, PhCH2CH2NHCH3, by reductive amination?",
    "options": [
      {
        "option_id": "A",
        "text": "Phenylacetaldehyde and methylamine",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzaldehyde and methylamine",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetophenone and methylamine",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Phenylacetaldehyde and ammonia",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "In a reductive amination the nitrogen ends up bonded to the carbonyl carbon, which has become a CH (from a ketone) or CH2 (from an aldehyde). To plan one, look at the groups on the product nitrogen: one came in on the amine, the other is the carbonyl compound's carbon skeleton with its former carbonyl carbon now attached to N. A secondary amine can be disconnected in two ways, and it is usually best to choose the combination with the simpler amine component and use that amine in excess.",
      "approach": "Step 1: The product nitrogen carries a methyl and a 2-phenylethyl group, PhCH2CH2-, and one hydrogen.\nStep 2: Disconnection 1: the methyl came from methylamine, so the carbonyl compound supplies PhCH2CH2- with its terminal carbon as the former carbonyl: phenylacetaldehyde, PhCH2CHO.\nStep 3: Disconnection 2 (not offered): the 2-phenylethyl group from 2-phenylethylamine and the methyl from formaldehyde.\nStep 4: Check the distractors: benzaldehyde gives PhCH2NHCH3 (one carbon short); acetophenone gives PhCH(CH3)NHCH3 (branched); ammonia gives the primary amine PhCH2CH2NH2.",
      "note": "McMurry 24.6 (Synthesis of Amines) works this exact target in its example on using a reductive amination, giving both disconnections, phenylacetaldehyde plus methylamine or formaldehyde plus 2-phenylethylamine, and advising the combination with the simpler amine component, methylamine, used in excess. Problems 24-11 and 24-12 ask for further precursors. The amphetamine synthesis in the same section is the primary-amine version, phenyl-2-propanone with ammonia.",
      "options": {
        "A": "Correct. Phenylacetaldehyde's carbonyl carbon becomes the CH2 bonded to nitrogen, and methylamine supplies the N-methyl.",
        "B": "Benzaldehyde has one carbon between the ring and the carbonyl, none: PhCHO. Reductive amination with methylamine gives N-methylbenzylamine, PhCH2NHCH3, one carbon short of the target.",
        "C": "Acetophenone is a ketone whose carbonyl carbon carries the phenyl and a methyl; reductive amination gives N-methyl-1-phenylethylamine, PhCH(CH3)NHCH3, a branched isomer of the target.",
        "D": "Ammonia gives a primary amine: phenylacetaldehyde with ammonia and a reductant yields 2-phenylethylamine, PhCH2CH2NH2, with no methyl on nitrogen. That amine could then be the partner for formaldehyde in the second route."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q22_hofmann_rearrangement_scheme",
    "topic": "Synthesis of Amines",
    "difficulty_level": "Medium",
    "question_text": "Benzamide is treated with Br2 and aqueous NaOH and warmed. What is the organic product?",
    "reaction_scheme": {
      "reactants": [
        "NC(=O)c1ccccc1"
      ],
      "reagents": "Br2, NaOH, H2O",
      "conditions": "warm",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring bearing a carbon that carries a double-bonded oxygen and an NH2 group: benzamide."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Aniline",
        "smiles": "Nc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzylamine",
        "smiles": "NCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "N-Bromobenzamide",
        "smiles": "BrNC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzoic acid",
        "smiles": "O=C(O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Hofmann rearrangement turns a primary amide into a primary amine with one carbon fewer: the carbonyl carbon is lost as CO2. Base and bromine first convert the amide into an N-bromoamide and then into its anion; that anion rearranges, the R group migrating from carbon to nitrogen as bromide leaves, to give an isocyanate, R-N=C=O. Water adds to the isocyanate to give a carbamic acid, which decarboxylates to the amine. Every step is a familiar one, but the net result is unusual: the group that was on the carbonyl carbon is now on nitrogen.",
      "approach": "Step 1: Base removes an N-H proton and the amide anion is brominated on nitrogen: N-bromobenzamide.\nStep 2: Base removes the remaining N-H proton; the bromoamide anion rearranges, the phenyl group migrating from carbon to nitrogen as Br- leaves: phenyl isocyanate, Ph-N=C=O.\nStep 3: Water adds to the isocyanate carbonyl: phenylcarbamic acid, PhNHCO2H.\nStep 4: The carbamic acid loses CO2: aniline, PhNH2. Seven carbons in, six out.",
      "note": "McMurry 24.6 (Synthesis of Amines), Figure 24.7, gives the Hofmann rearrangement mechanism, bromination of the amide (like base-promoted bromination of a ketone enolate, 22.6), rearrangement of the bromoamide anion (like a carbocation rearrangement, 7.11), addition of water to the isocyanate (19.4) and decarboxylation (22.7), and notes that it gives high yields of both arylamines and alkylamines, phentermine being made commercially this way. The Curtius rearrangement of an acyl azide reaches the same isocyanate; both lose one carbon.",
      "options": {
        "A": "Correct. The phenyl group migrates from carbon to nitrogen through the isocyanate, and the carbonyl carbon leaves as CO2: aniline.",
        "B": "Benzylamine keeps all seven carbons, which is what LiAlH4 reduction of benzamide gives (21.7). The Hofmann rearrangement loses the carbonyl carbon as CO2, so the amine has one carbon fewer than the amide.",
        "C": "N-Bromobenzamide is the first intermediate. Under the basic conditions it is deprotonated and rearranges at once to phenyl isocyanate, which water then converts to the amine; the bromoamide is not what is isolated.",
        "D": "Benzoic acid is the hydrolysis product of benzamide, from hot aqueous acid or base without bromine. With bromine present the amide is brominated on nitrogen and rearranges instead of being hydrolysed."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q23_curtius_precursor",
    "topic": "Synthesis of Amines",
    "difficulty_level": "Medium",
    "question_text": "Which carboxylic acid is the starting material for a Curtius rearrangement synthesis of cyclopentylamine?",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclopentanecarboxylic acid, converted to its acid chloride and then its acyl azide",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclopentylacetic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclohexanecarboxylic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclopentanol, oxidised to the ketone first",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Curtius rearrangement, like the Hofmann, converts a carboxylic acid derivative into a primary amine with one carbon fewer: RCOY becomes RNH2, the carbonyl carbon leaving as CO2. The derivative is an acyl azide, RC(=O)N3, made from the acid chloride and sodium azide; heating it expels N2 as the R group migrates from carbon to nitrogen to give an isocyanate, and water then gives the amine. To find the acid needed for a target amine, replace the NH2 of the amine with CO2H: the acid has the amine's skeleton plus one carbon.",
      "approach": "Step 1: Target: cyclopentylamine, a cyclopentyl ring bonded to NH2.\nStep 2: Replace NH2 with CO2H: cyclopentanecarboxylic acid, the ring bonded directly to a carboxyl.\nStep 3: Convert the acid to cyclopentanecarbonyl chloride with SOCl2, then to the acyl azide with NaN3.\nStep 4: Heat: N2 is lost and the cyclopentyl group migrates to nitrogen, giving cyclopentyl isocyanate; water hydrolyses it, with loss of CO2, to cyclopentylamine. The same acid, as its amide, would give cyclopentylamine by the Hofmann route.",
      "note": "McMurry 24.6 (Synthesis of Amines) states that both the Hofmann and Curtius rearrangements convert a carboxylic acid derivative into a primary amine with loss of one carbon, RCOY to RNH2, that both begin with the same carboxylic acid, identified by replacing the amine's NH2 with CO2H, and that the Curtius takes place on heating an acyl azide prepared by nucleophilic acyl substitution of an acid chloride; the worked example makes o-methylbenzylamine from o-methylphenylacetic acid by both routes, and tranylcypromine is made commercially by Curtius rearrangement of 2-phenylcyclopropanecarbonyl chloride.",
      "options": {
        "A": "Correct. Cyclopentanecarboxylic acid has the amine's ring plus the one carbon that is lost as CO2; its acyl azide rearranges to cyclopentyl isocyanate and then to cyclopentylamine.",
        "B": "Cyclopentylacetic acid has a CH2 between the ring and the carboxyl; losing the carboxyl carbon would give cyclopentylmethylamine, C5H9CH2NH2, one carbon too many.",
        "C": "Cyclohexanecarboxylic acid gives cyclohexylamine: the ring that migrates to nitrogen is the one attached to the acyl carbon, and here that is a six-membered ring.",
        "D": "An alcohol or ketone is not a Curtius substrate; the rearrangement needs an acyl azide. Cyclopentanone could give cyclopentylamine by reductive amination with ammonia, which is a different reaction entirely."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q24_sncl2_nitro_reduction_scheme",
    "topic": "Synthesis of Amines",
    "difficulty_level": "Medium",
    "question_text": "4-Nitroacetophenone is treated with tin(II) chloride in aqueous HCl and the mixture is then basified. What is the organic product?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)c1ccc([N+](=O)[O-])cc1"
      ],
      "reagents": "1. SnCl2, HCl, H2O; 2. NaOH",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring with an acetyl group (a C=O bearing a methyl) on one carbon and a nitro group on the carbon opposite: 4-nitroacetophenone."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "4-Aminoacetophenone",
        "smiles": "CC(=O)c1ccc(N)cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-(4-Aminophenyl)ethan-1-ol",
        "smiles": "CC(O)c1ccc(N)cc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-(4-Nitrophenyl)ethan-1-ol",
        "smiles": "CC(O)c1ccc([N+](=O)[O-])cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-Ethylaniline",
        "smiles": "CCc1ccc(N)cc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Arylamines are almost always made by nitrating an aromatic ring and then reducing the nitro group, and the choice of reducing agent is what decides whether other groups survive. Catalytic hydrogenation reduces nitro groups well but also reduces C=C bonds and, over many catalysts, carbonyls. Dissolving metals in acid, iron, zinc, tin or tin(II) chloride, reduce the nitro group selectively, and SnCl2 is the mildest, leaving ketones, esters and alkenes untouched. The nitro nitrogen goes from +3 to -3 oxidation state; nothing happens at the acetyl group.",
      "approach": "Step 1: Identify the reducible groups: an aromatic nitro group and an aryl ketone.\nStep 2: SnCl2 in aqueous HCl reduces the nitro group, through nitroso and hydroxylamine stages, to the amine, which is protonated to the anilinium salt in the acid.\nStep 3: The ketone is not reduced by SnCl2.\nStep 4: Basification frees the amine: 4-aminoacetophenone, the ketone intact.",
      "note": "McMurry 24.6 (Synthesis of Amines) states that arylamines are usually prepared by nitration followed by reduction (16.2), that catalytic hydrogenation over platinum works but is often incompatible with other reducible groups such as C=C bonds or carbonyl groups, that iron, zinc, tin and SnCl2 in acidic aqueous solution are also effective, and that tin(II) chloride is particularly mild and is often used when other reducible functional groups are present. 4-Aminoacetophenone is also what McMurry 24.8 makes by Friedel-Crafts acylation of acetanilide followed by hydrolysis.",
      "options": {
        "A": "Correct. Tin(II) chloride reduces the nitro group to the amine and leaves the ketone alone.",
        "B": "Reducing both the nitro group and the ketone is what catalytic hydrogenation over platinum under forcing conditions, or a subsequent hydride step, would do. SnCl2 is chosen precisely because it does not touch the carbonyl.",
        "C": "Reducing the ketone while sparing the nitro group is the job of NaBH4, a hydride reagent that does not reduce nitro groups. SnCl2 does the opposite: it is a nitro reductant that leaves ketones untouched.",
        "D": "4-Ethylaniline would need the acetyl group deoxygenated to an ethyl group, a Clemmensen or Wolff-Kishner reduction, as well as the nitro group reduced. SnCl2 does neither to the ketone."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q25_hofmann_elimination_scheme",
    "topic": "Reactions of Amines",
    "difficulty_level": "Medium",
    "question_text": "Pentan-2-amine is treated with excess iodomethane, then with silver oxide in water, and the resulting salt is heated. What is the major alkene formed?",
    "reaction_scheme": {
      "reactants": [
        "CCCC(C)N"
      ],
      "reagents": "1. CH3I (excess); 2. Ag2O, H2O; 3. heat",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A five-carbon chain with an NH2 group on the second carbon: pentan-2-amine."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Pent-1-ene",
        "smiles": "C=CCCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(E)-Pent-2-ene",
        "smiles": "C/C=C/CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Pentan-2-ol",
        "smiles": "CCCC(C)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "N,N-Dimethylpentan-2-amine",
        "smiles": "CCCC(C)N(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An amine cannot be eliminated directly because NH2- is a hopeless leaving group, so the Hofmann elimination first turns the nitrogen into one. Excess iodomethane methylates the amine exhaustively to a quaternary ammonium iodide; silver oxide exchanges the iodide for hydroxide; and heating brings about an E2 elimination in which hydroxide removes a beta hydrogen while the neutral trimethylamine leaves. Unlike most E2 reactions the Hofmann elimination gives the less substituted alkene, because the bulky trialkylammonium leaving group forces the base to take the most accessible beta hydrogen, which is on the least substituted beta carbon.",
      "approach": "Step 1: Excess CH3I converts pentan-2-amine into (pentan-2-yl)trimethylammonium iodide, CH3CH2CH2CH(CH3)N(CH3)3+ I-.\nStep 2: Ag2O in water exchanges I- for OH-: the quaternary ammonium hydroxide.\nStep 3: On heating, hydroxide removes a beta hydrogen. The beta carbons are C1 (a methyl, three accessible hydrogens) and C3 (a CH2, two hindered hydrogens). The bulky N(CH3)3 group makes C1 the position attacked.\nStep 4: E2 gives pent-1-ene, the less substituted (non-Zaitsev) alkene, plus trimethylamine and water.",
      "note": "McMurry 24.7 (Reactions of Amines) gives exactly this case: (1-methylbutyl)trimethylammonium hydroxide, the quaternary salt of pentan-2-amine, gives 1-pentene rather than 2-pentene, and the homologue 1-methylpentylamine gives 1-hexene, the non-Zaitsev result being attributed to the large size of the trialkylamine leaving group, which makes the base abstract a hydrogen from the more accessible, least hindered position. The section notes that the reaction is little used today but that biological eliminations of protonated amines (adenylosuccinate to fumarate) are common.",
      "options": {
        "A": "Correct. Exhaustive methylation, iodide-to-hydroxide exchange, then E2 at the least hindered beta carbon gives the terminal alkene.",
        "B": "Pent-2-ene is the Zaitsev product, the more substituted alkene that an ordinary E2 of a 2-halopentane would favour. The bulky trimethylammonium leaving group reverses that preference; the base takes the accessible methyl hydrogen and the terminal alkene forms.",
        "C": "Pentan-2-ol would require hydroxide to displace the ammonium group by SN2 at a secondary carbon. Hydroxide acts as a base on the quaternary salt, not as a nucleophile at a crowded carbon, and elimination is what occurs on heating.",
        "D": "N,N-Dimethylpentan-2-amine is a tertiary amine, an intermediate on the way to the quaternary salt when excess iodomethane is used. With excess CH3I the methylation continues to the quaternary ammonium ion, which then eliminates."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q26_hofmann_regiochemistry",
    "topic": "Reactions of Amines",
    "difficulty_level": "Medium",
    "question_text": "Most E2 eliminations give the more substituted (Zaitsev) alkene, but the Hofmann elimination of a quaternary ammonium hydroxide gives the less substituted one. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "The trialkylammonium leaving group is very bulky, so the base can reach only the most accessible beta hydrogen, which is on the least substituted beta carbon",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The elimination is E1: a carbocation forms and loses the proton that gives the less stable alkene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Hydroxide is too weak a base to remove a secondary or tertiary hydrogen",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The less substituted alkene is the more stable one whenever nitrogen is the leaving group",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "In an E2 reaction the base removes a beta hydrogen anti to the leaving group, and when several beta positions are available the preference is normally for the transition state leading to the more stable, more substituted alkene. That preference can be overridden by sterics. A trimethylammonium group is far larger than a bromide, and in the conformations that align a beta hydrogen anti to it, the hydrogens on the more substituted beta carbon are crowded by both the leaving group and the alkyl branches. The base therefore takes a hydrogen from the least hindered beta carbon, usually a methyl, and the terminal alkene results. The alkene's own stability is unchanged; what has changed is which transition state is reachable.",
      "approach": "Step 1: Identify the beta carbons of the quaternary ammonium ion and count their hydrogens and substituents.\nStep 2: For each, imagine the anti-periplanar arrangement of a beta C-H with the C-N+ bond, and note how crowded it is by the N(CH3)3 group and by alkyl branches on the beta carbon.\nStep 3: The least substituted beta carbon offers the most accessible hydrogen; its transition state is lowest in energy despite giving the less substituted alkene.\nStep 4: Result: Hofmann (non-Zaitsev) regiochemistry, as in (1-methylbutyl)trimethylammonium hydroxide giving pent-1-ene.",
      "note": "McMurry 24.7 (Reactions of Amines) states that, unlike other E2 reactions, the major product of Hofmann elimination is the less highly substituted alkene, and that the reason is probably steric: because of the large size of the trialkylamine leaving group, the base must abstract a hydrogen from the more accessible, least hindered position. The E2 mechanism itself, with hydroxide removing the proton as the positively charged nitrogen leaves, is from 11.8, where bulky bases such as tert-butoxide produce the same non-Zaitsev outcome for a different steric reason.",
      "options": {
        "A": "Correct. Steric hindrance around the huge leaving group directs the base to the most accessible beta hydrogen, on the least substituted carbon.",
        "B": "The Hofmann elimination is a concerted E2 reaction: hydroxide removes the proton as trimethylamine leaves. No carbocation forms, and an E1 process would in any case give the more substituted alkene.",
        "C": "Hydroxide is fully capable of removing secondary and tertiary beta hydrogens; it does so in ordinary E2 reactions of alkyl halides. The issue is access, not base strength.",
        "D": "Alkene stability does not depend on what leaving group made it: a disubstituted internal alkene is more stable than a terminal one whatever the route. The Hofmann product is the less stable alkene, formed because its transition state is the more accessible."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q27_aniline_bromination_scheme",
    "topic": "Reactions of Arylamines",
    "difficulty_level": "Medium",
    "question_text": "Aniline is treated with bromine in water. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "Nc1ccccc1",
        "BrBr"
      ],
      "reagents": "H2O",
      "conditions": "25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring bearing an NH2 group: aniline.",
        "Two bromine atoms bonded to each other: molecular bromine."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2,4,6-Tribromoaniline",
        "smiles": "Nc1c(Br)cc(Br)cc1Br",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-Bromoaniline",
        "smiles": "Nc1ccc(Br)cc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-Bromoaniline",
        "smiles": "Nc1cccc(Br)c1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "N-Bromoaniline",
        "smiles": "BrNc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The amino group is among the strongest activators of a benzene ring toward electrophiles, donating its lone pair by resonance to the ortho and para positions. Bromine, which does nothing to benzene without a Lewis acid, attacks aniline so fast that the first bromine does not deactivate the ring enough to stop the reaction: all three activated positions are substituted, and the product is 2,4,6-tribromoaniline, even with a limited amount of bromine. To obtain a monobromoaniline the amino group must first be tamed as an acetamide, which is the trick of the next section.",
      "approach": "Step 1: The NH2 lone pair enriches C2, C4 and C6 (ortho and para); the ring is far more nucleophilic than benzene.\nStep 2: Br2 is attacked without a catalyst, first at the para position, but the 4-bromoaniline formed is still strongly activated and reacts with bromine as fast as it forms.\nStep 3: Bromination continues at both ortho positions.\nStep 4: The product is 2,4,6-tribromoaniline, which precipitates from water; it is not possible to stop at the monobromo stage.",
      "note": "McMurry 24.8 (Reactions of Arylamines) states that reaction of aniline with Br2 takes place rapidly and yields the 2,4,6-tribrominated product, the amino group being so strongly activating that it is not possible to stop at the monobromo stage, and that Friedel-Crafts reactions fail because the amine complexes AlCl3. Both drawbacks are overcome by acetylating the amine first: bromination of the acetanilide gives the monobromo product cleanly, and hydrolysis returns the amine.",
      "options": {
        "A": "Correct. The NH2 group activates all three ortho and para positions so strongly that bromination cannot be stopped short of the tribromide.",
        "B": "4-Bromoaniline is the product of the acetanilide route (acetylate, brominate, hydrolyse), where the moderated amide directs a single bromine para. With the free amine the monobromide is brominated further as fast as it forms.",
        "C": "The meta position is not activated by the NH2 group; an amino group is an ortho/para director. Bromine enters at C2, C4 and C6, never at C3.",
        "D": "N-Bromination of an arylamine is not the outcome with bromine in water; the electron-rich ring is the nucleophile that attacks Br2, and any N-Br species that formed would transfer its bromine to the ring."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q28_roadmap_acetanilide_bromination",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following synthetic pathway from 4-methylaniline (p-toluidine). Determine the correct compounds matching labels B, C and D.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "Cc1ccc(N)cc1",
          "label": "Compound A",
          "alt": "A benzene ring with a methyl group on one carbon and an NH2 group on the carbon opposite: 4-methylaniline, drawn as compound A.",
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
          "reagents": "(CH3CO)2O"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "Br2, CH3CO2H"
        },
        {
          "from": "C",
          "to": "D",
          "reagents": "NaOH, H2O, heat"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "B: N-(4-methylphenyl)acetamide, C: N-(2-bromo-4-methylphenyl)acetamide, D: 2-bromo-4-methylaniline",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "B: N-(4-methylphenyl)acetamide, C: N-(2,6-dibromo-4-methylphenyl)acetamide, D: 2,6-dibromo-4-methylaniline",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "B: 4-methylanilinium acetate, C: 2-bromo-4-methylanilinium acetate, D: 2-bromo-4-methylaniline",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "B: N-(4-methylphenyl)acetamide, C: N-(3-bromo-4-methylphenyl)acetamide, D: 3-bromo-4-methylaniline",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A free amino group activates a benzene ring too strongly to allow a single electrophilic substitution and it poisons Friedel-Crafts catalysts. Converting it to an acetamide solves both problems: the amide nitrogen's lone pair is shared with the carbonyl, so the acetamido group is still an ortho/para-directing activator but a much milder one, and monosubstitution becomes clean. After the substitution the amide is hydrolysed with aqueous base to return the free amine. In p-toluidine the para position is blocked by the methyl, so the single bromine enters ortho to the amide nitrogen.",
      "approach": "Step 1: A + acetic anhydride: aminolysis of the anhydride gives B, N-(4-methylphenyl)acetamide (N-acetyl-p-toluidine), with acetic acid as by-product.\nStep 2: B + Br2 in acetic acid: the moderated acetamido group directs one bromine ortho to nitrogen (para is occupied by the methyl). C is N-(2-bromo-4-methylphenyl)acetamide; none of the dibromide forms.\nStep 3: C + hot aqueous NaOH: hydrolysis of the amide releases the amine and acetate.\nStep 4: D is 2-bromo-4-methylaniline, the monobromide that direct bromination of p-toluidine could never give.",
      "note": "McMurry 24.8 (Reactions of Arylamines) gives exactly this sequence: p-toluidine can be acetylated, brominated and hydrolysed to yield 2-bromo-4-methylaniline, and none of the 2,6-dibrominated product is obtained, because amido substituents are less strongly activating and less basic than amino groups since their nitrogen lone pair is delocalised by the carbonyl. The same trick permits Friedel-Crafts acylation (acetanilide to 4-aminobenzophenone) and the chlorosulfonation that leads to the sulfa drugs.",
      "options": {
        "A": "Correct. Acetylation moderates the amine, one bromine enters ortho to the acetamido group (para being blocked), and hydrolysis frees the amine.",
        "B": "Dibromination is what the free amine would suffer. The acetamido group is a much weaker activator than NH2, and the text records that none of the 2,6-dibromo product is obtained from the acetanilide.",
        "C": "Acetic anhydride is an acylating agent, not merely an acid: it converts the amine into an amide (nucleophilic acyl substitution, 21.5), not an ammonium acetate salt. A salt would in any case be deactivated toward bromination and would not give this regiochemistry.",
        "D": "The acetamido group, like NH2, directs ortho and para; it does not direct meta. With the para position occupied by the methyl, bromine enters ortho to nitrogen, at C2, not at C3."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q29_sandmeyer_methylbenzoic_acid",
    "topic": "Reactions of Arylamines",
    "difficulty_level": "Medium",
    "question_text": "2-Methylbenzoic acid cannot be made from o-xylene by side-chain oxidation, because both methyl groups are oxidised. Which sequence makes it from 2-methylaniline?",
    "options": [
      {
        "option_id": "A",
        "text": "1. NaNO2, HCl, 0 °C; 2. CuCN; 3. H3O+, heat",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "KMnO4, H2O, heat, then H3O+",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1. Mg, ether; 2. CO2; 3. H3O+",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1. NaNO2, HCl, 0 °C; 2. H3PO2",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A primary arylamine can be converted into almost any other substituted benzene through its diazonium salt. Nitrous acid at 0 °C diazotises the amine to a stable arenediazonium ion; copper(I) salts then replace the N2+ group with Cl, Br or CN (the Sandmeyer reaction), NaI gives the iodide, Cu2O in water gives the phenol and H3PO2 removes the group altogether. The cyanide route is the way to put a carboxyl on a ring that already carries an oxidisable group, because the nitrile can be hydrolysed to the acid without touching a methyl.",
      "approach": "Step 1: 2-Methylaniline + NaNO2/HCl at 0 °C: diazotisation gives 2-methylbenzenediazonium chloride.\nStep 2: CuCN: Sandmeyer substitution replaces N2 with CN, giving 2-methylbenzonitrile.\nStep 3: Hot aqueous acid hydrolyses the nitrile, through the amide, to the carboxylic acid (20.7).\nStep 4: Product: 2-methylbenzoic acid, with the methyl untouched, which permanganate oxidation of o-xylene could never leave.",
      "note": "McMurry 24.8 (Reactions of Arylamines) gives this exact case: Sandmeyer reaction of o-methylbenzenediazonium bisulfate with CuCN yields o-methylbenzonitrile, which can be hydrolysed to o-methylbenzoic acid, a product that cannot be prepared from o-xylene by the usual side-chain oxidation route because both methyl groups would be oxidised. The section calls the sequence nitration, reduction, diazotisation and nucleophilic substitution perhaps the single most versatile method of aromatic substitution, and notes that the replacement steps go by radical pathways with copper(I).",
      "options": {
        "A": "Correct. Diazotisation, Sandmeyer cyanation and nitrile hydrolysis put a carboxyl where the amino group was, sparing the methyl.",
        "B": "Permanganate would oxidise the methyl group to CO2H (and the free amine is itself attacked by the oxidant), giving at best 2-aminobenzoic acid, not 2-methylbenzoic acid.",
        "C": "A Grignard reagent cannot be formed from an aryl amine: the N-H protons destroy any organomagnesium as it forms, and there is no halogen on the ring to begin with. Grignard carboxylation needs an aryl halide with no acidic hydrogens (20.5).",
        "D": "H3PO2 reduces the diazonium salt to the arene, replacing N2+ with H. That sequence gives toluene, removing the nitrogen without introducing any carboxyl group."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q30_roadmap_dibromotoluene",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following synthetic pathway from 4-methylaniline (p-toluidine) to a dibromotoluene that cannot be made by direct bromination of toluene. Determine the correct compounds matching labels B, C and D.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "Cc1ccc(N)cc1",
          "label": "Compound A",
          "alt": "A benzene ring with a methyl group on one carbon and an NH2 group on the carbon opposite: 4-methylaniline, drawn as compound A.",
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
          "reagents": "Br2 (2 equiv), H2O"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "NaNO2, H2SO4, 0 °C"
        },
        {
          "from": "C",
          "to": "D",
          "reagents": "H3PO2"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "B: 2,6-dibromo-4-methylaniline, C: 2,6-dibromo-4-methylbenzenediazonium hydrogen sulfate, D: 3,5-dibromotoluene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "B: 2,6-dibromo-4-methylaniline, C: 2,6-dibromo-4-methylbenzenediazonium hydrogen sulfate, D: 2,6-dibromo-4-methylphenol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "B: 2-bromo-4-methylaniline, C: 2-bromo-4-methylbenzenediazonium hydrogen sulfate, D: 3-bromotoluene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "B: 2,6-dibromo-4-methylaniline, C: 2,6-dibromo-4-methylphenol, D: 3,5-dibromotoluene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An amino group can be put on a ring to steer substituents into positions they would not otherwise take, and then removed. Toluene brominates at its 2 and 4 positions, so 3,5-dibromotoluene is unreachable directly. Starting from p-toluidine, the powerful NH2 director sends two bromines to its own ortho positions, which are meta to the methyl; diazotisation converts the amine into a diazonium salt; and hypophosphorous acid reduces the diazonium group to hydrogen, deleting the nitrogen. What is left is the toluene with bromines at 3 and 5.",
      "approach": "Step 1: A + 2 Br2: the free amine is so activating that both ortho positions are brominated (para is blocked by the methyl). B is 2,6-dibromo-4-methylaniline.\nStep 2: B + NaNO2/H2SO4 at 0 °C: diazotisation. C is 2,6-dibromo-4-methylbenzenediazonium hydrogen sulfate.\nStep 3: C + H3PO2: the diazonium group is replaced by hydrogen with loss of N2.\nStep 4: D is 3,5-dibromotoluene, renumbered from the methyl: the two bromines that were ortho to the departed nitrogen are meta to the methyl.",
      "note": "McMurry 24.8 (Reactions of Arylamines) gives this exact synthesis as the use of the H3PO2 reduction: 3,5-dibromotoluene cannot be made by direct bromination of toluene because reaction would occur at positions 2 and 4, but starting with p-methylaniline, dibromination occurs ortho to the strongly directing amino substituent, and diazotisation followed by treatment with H3PO2 to remove the amino group yields the desired product. The phenol in option B is what Cu2O in aqueous Cu(NO3)2 would give from the same diazonium salt.",
      "options": {
        "A": "Correct. The amino group directs two bromines ortho, is diazotised, and is then deleted with H3PO2, leaving the bromines meta to the methyl.",
        "B": "2,6-Dibromo-4-methylphenol (the OH takes locant 1, so the two bromines that flank it are 2 and 6) would come from treating the diazonium salt with copper(I) oxide in aqueous copper(II) nitrate, which replaces N2+ with OH. H3PO2 replaces it with H.",
        "C": "The free amine, unlike its acetamide, cannot be stopped at monobromination, and two equivalents of bromine are specified, so both ortho positions are brominated. The target requires two bromines.",
        "D": "Diazotisation with nitrous acid gives the arenediazonium salt, which is stable at 0 °C; it does not hydrolyse to the phenol under those conditions, and the phenol would not be converted to the arene by H3PO2 in any case."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q31_azo_coupling_scheme",
    "topic": "Reactions of Arylamines",
    "difficulty_level": "Medium",
    "question_text": "Benzenediazonium chloride is added to a cold solution of phenol in aqueous NaOH. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "N#[N+]c1ccccc1.[Cl-]",
        "Oc1ccccc1"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "0 to 5 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring bearing a positively charged nitrogen triple-bonded to a second nitrogen, with a chloride ion: benzenediazonium chloride.",
        "A benzene ring bearing an OH group: phenol."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "4-Hydroxyazobenzene (4-(phenyldiazenyl)phenol)",
        "smiles": "Oc1ccc(cc1)N=Nc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Hydroxyazobenzene",
        "smiles": "Oc1ccccc1N=Nc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Biphenyl-4-ol",
        "smiles": "Oc1ccc(cc1)-c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Phenyl phenyldiazenyl ether (O-coupling)",
        "smiles": "O(N=Nc1ccccc1)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An arenediazonium ion is a weak electrophile, too weak for benzene, but strong enough for a ring made very electron-rich by an OH or NR2 group, especially a phenoxide ion. The coupling is an electrophilic aromatic substitution in which the terminal nitrogen of the diazonium ion bonds to a ring carbon, and it occurs para to the activating group unless the para position is blocked. The product keeps both rings joined through an N=N bridge, an azo compound, whose extended conjugation makes it coloured; azo coupling is the basis of a large family of dyes.",
      "approach": "Step 1: NaOH converts phenol into phenoxide, whose ring is strongly activated at the ortho and para positions.\nStep 2: The para carbon of the phenoxide attacks the terminal nitrogen of the benzenediazonium ion; the arenium ion is stabilised by the oxygen.\nStep 3: Loss of the para proton restores aromaticity and, on acidification, the phenol OH.\nStep 4: Product: 4-hydroxyazobenzene, Ph-N=N-C6H4-OH, an orange azo dye. The reaction is kept cold so the diazonium salt does not decompose.",
      "note": "McMurry 24.8 (Reactions of Arylamines) describes diazonium coupling as a typical electrophilic aromatic substitution in which the positively charged diazonium ion is the electrophile reacting with the electron-rich ring of a phenol or arylamine, usually at the para position, giving brightly coloured azo compounds used as textile dyes because their extended conjugated pi system absorbs in the visible (14.9); p-(dimethylamino)azobenzene is the example and Problem 24-19 asks for its synthesis. The same electrophile is too weak to attack benzene or toluene.",
      "options": {
        "A": "Correct. The diazonium ion substitutes the para position of the activated phenoxide ring, giving the azo compound.",
        "B": "Ortho coupling is possible in principle and occurs when the para position is blocked, but with phenol itself the para position is open and less hindered, and the para product predominates.",
        "C": "Biphenyl-4-ol would require the diazonium ion to lose N2 and couple as an aryl radical or cation; under cold basic coupling conditions the N2 unit is retained and forms the bridge. Loss of N2 is the chemistry of the Sandmeyer and related replacement reactions.",
        "D": "O-attack by phenoxide on the diazonium ion (a diazo ether) is a reversible minor path; the stable product is the C-coupled azo compound, formed by electrophilic substitution at the para carbon."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q32_dmt_basic_nitrogen",
    "topic": "Heterocyclic Amines",
    "difficulty_level": "Medium",
    "question_text": "N,N-Dimethyltryptamine has two nitrogens: the N-H of its indole ring and the dimethylamino nitrogen of its side chain. Which is more basic, and why?",
    "options": [
      {
        "option_id": "A",
        "text": "The side-chain dimethylamino nitrogen: its lone pair is in an sp3 orbital and available, whereas the indole N-H nitrogen's lone pair is part of the aromatic pi system, like pyrrole's",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The indole nitrogen: it is attached to an aromatic ring, which stabilises the positive charge of its conjugate acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both are equally basic, since both are trivalent nitrogens with a lone pair",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Neither is basic, because the molecule is aromatic",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A nitrogen is basic to the extent that its lone pair is free. Indole's ring nitrogen is pyrrole-like: its lone pair is one of the pairs that make up the ten-electron aromatic system of the bicycle, and protonating it would cost that aromaticity, so it is essentially nonbasic (the pyrrolinium pKa is 0.4). A dialkylamino group on a saturated side chain is an ordinary tertiary alkylamine: sp3 nitrogen, lone pair localised, ammonium pKa near 10. In tryptamines and in the amino acid tryptophan it is always the side-chain nitrogen that is protonated at physiological pH.",
      "approach": "Step 1: Classify the indole nitrogen: it carries a hydrogen and is part of a five-membered aromatic ring fused to benzene; its lone pair is in a p orbital in the pi system, pyrrole-like.\nStep 2: Classify the side-chain nitrogen: N(CH3)2 on a CH2CH2 chain, sp3, lone pair in the plane of nothing, fully available.\nStep 3: Protonating the indole nitrogen would break the aromatic system; protonating the side-chain nitrogen costs nothing.\nStep 4: The side-chain nitrogen is the basic one, by some ten pKa units.",
      "note": "McMurry 24.9 (Heterocyclic Amines) poses this as Problem 24-23 and gives the rule it rests on: indole has a nonbasic, pyrrole-like nitrogen, while purine has three basic pyridine-like nitrogens with lone pairs in sp2 orbitals in the plane and one nonbasic pyrrole-like nitrogen whose lone pair is part of the aromatic pi system. The distinction between a nitrogen whose lone pair is in the pi system and one whose lone pair is not is the whole basicity story of this chapter's heterocycles.",
      "options": {
        "A": "Correct. The alkylamine nitrogen is protonated; the indole nitrogen's lone pair is committed to the aromatic sextet.",
        "B": "Attachment to an aromatic ring lowers basicity (aniline) or abolishes it (pyrrole, indole); it never raises it. The indole N-H nitrogen has no available lone pair and is not protonated by aqueous acid.",
        "C": "Both are trivalent, but only one has a free lone pair. The indole nitrogen's pair is delocalised into the aromatic system and cannot bond to a proton without destroying the aromaticity.",
        "D": "The aromatic system involves the indole nitrogen only. The side-chain nitrogen is a saturated tertiary amine with nothing to lose on protonation, and it is a normal base."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q33_indole_c3_substitution",
    "topic": "Heterocyclic Amines",
    "difficulty_level": "Hard",
    "question_text": "Pyrrole is attacked by electrophiles at C2, but indole is attacked at C3. Why does the fused benzene ring change the regiochemistry?",
    "options": [
      {
        "option_id": "A",
        "text": "Attack at C3 gives a cation whose charge is delocalised onto the nitrogen without disturbing the benzene ring; attack at C2 could delocalise the charge onto nitrogen only through the benzene ring, disrupting its aromaticity",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "C3 is more electron-rich than C2 because it is farther from the electronegative nitrogen",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "C2 is sterically shielded by the adjacent benzene ring",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The N-H hydrogen blocks approach to C2",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "In pyrrole the C2 intermediate wins because its charge is spread over three atoms including nitrogen. In indole the pyrrole ring shares two of its carbons with a benzene ring, and that changes the accounting. Attack at C3 puts the positive charge on C2, next to nitrogen, so the nitrogen lone pair stabilises it directly as an iminium ion, and the benzene ring is untouched. Attack at C2 puts the charge on C3, which is bonded to the benzene ring's C3a; to reach nitrogen the charge would have to be delocalised through the benzene ring, breaking its aromatic sextet. The C3 intermediate keeps the benzene ring aromatic and is far more stable.",
      "approach": "Step 1: Number indole: N1, C2, C3, then the fused carbons C3a and C7a and the benzene ring C4-C7.\nStep 2: Add E+ to C3: the cation is at C2, adjacent to N1; the lone pair gives a C2=N1+ iminium form. The benzene ring is not involved and stays aromatic.\nStep 3: Add E+ to C2: the cation is at C3, adjacent to C3a of the benzene ring. Delocalising it onto nitrogen requires passing through the benzene ring, destroying its aromaticity; the alternative forms all put charge in the benzene ring.\nStep 4: The C3 intermediate is lower in energy, so indole substitutes at C3: 3-bromoindole, 3-nitroindole, and the C3-alkylation of tryptophan biosynthesis all follow.",
      "note": "McMurry 24.9 (Heterocyclic Amines) states that indole has a nonbasic, pyrrole-like nitrogen and undergoes electrophilic substitution more easily than benzene, at C3 of the electron-rich pyrrole ring rather than on the benzene ring, and Problem 24-24 asks for the resonance forms of the C2 and C3 intermediates to explain the result. The contrast with pyrrole's C2 preference (Figure 24.8) is the same resonance-counting argument applied to a fused system, where preserving the benzene ring's aromaticity dominates.",
      "options": {
        "A": "Correct. Only the C3 intermediate can be stabilised by the nitrogen lone pair while leaving the fused benzene ring aromatic.",
        "B": "Ground-state electron density does not decide this; both C2 and C3 are enriched by the nitrogen lone pair, C2 if anything more so. The regiochemistry is set by the stability of the cationic intermediates.",
        "C": "C2 is bonded to N1 and C3, not to the benzene ring, and it is no more crowded than C3, which is bonded to C3a of the benzene ring. Steric effects do not explain the switch.",
        "D": "The N-H lies in the ring plane and does not block C2; N-methylindole substitutes at C3 just as indole does. The effect is electronic."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q34_ir_nh_bands",
    "topic": "Spectroscopy of Amines",
    "difficulty_level": "Easy",
    "question_text": "A compound shows a single, fairly weak, sharp band at $3350\\text{ cm}^{-1}$ and nothing else above $3000\\text{ cm}^{-1}$ apart from C-H stretches. Which compound fits?",
    "options": [
      {
        "option_id": "A",
        "text": "N-Methylpropan-1-amine",
        "smiles": "CNCCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Butan-1-amine",
        "smiles": "CCCCN",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "N,N-Dimethylethanamine",
        "smiles": "CCN(C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Butan-1-ol",
        "smiles": "CCCCO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The N-H stretching region of the infrared spectrum, 3300 to 3500 cm-1, counts the hydrogens on nitrogen. A primary amine has two N-H bonds that stretch in and out of phase and gives two bands, near 3350 and 3450. A secondary amine has one N-H and gives one band, near 3350. A tertiary amine has no N-H and shows nothing there. Alcohols absorb in the same region, but an O-H band is broad and intense, whereas amine bands are sharper and weaker, so the shape distinguishes N-H from O-H even when the position does not.",
      "approach": "Step 1: One band, not two: not a primary amine.\nStep 2: A band is present: not a tertiary amine, which has no N-H.\nStep 3: Sharp and weak, not broad and strong: an N-H, not an O-H.\nStep 4: A secondary amine: N-methylpropan-1-amine, CH3NHCH2CH2CH3, fits; its N-H gives the single 3350 band.",
      "note": "McMurry 24.10 (Spectroscopy of Amines) states that primary and secondary amines show N-H stretching in the 3300-3500 cm-1 range, that primary amines show a pair of bands at about 3350 and 3450 from symmetric and asymmetric stretching while secondary amines show a single band at 3350, that tertiary amines have no absorption there, and that amine bands are generally sharper and less intense than the hydroxyl bands that appear in the same range (17.11), with cyclohexylamine's spectrum as Figure 24.9.",
      "options": {
        "A": "Correct. A secondary amine has one N-H and gives one sharp, weak band near 3350.",
        "B": "Butan-1-amine is a primary amine with two N-H bonds and shows a pair of bands, near 3350 and 3450, not a single one.",
        "C": "N,N-Dimethylethanamine is a tertiary amine with no N-H bond and shows no absorption at all between 3300 and 3500.",
        "D": "Butan-1-ol's O-H gives a broad, strong band spanning roughly 3200 to 3600, the opposite of sharp and weak. The shape rules out an alcohol."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q35_alpha_cleavage_ethylpropylamine",
    "topic": "Spectroscopy of Amines",
    "difficulty_level": "Medium",
    "question_text": "N-Ethylpropylamine, CH3CH2NHCH2CH2CH3, has a molecular ion at m/z 87. Which two fragment ions does alpha cleavage produce?",
    "options": [
      {
        "option_id": "A",
        "text": "m/z 58 and m/z 72",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "m/z 44 and m/z 86",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "m/z 29 and m/z 43",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "m/z 59 and m/z 73",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Amines fragment in the mass spectrometer by alpha cleavage, like alcohols: the C-C bond next to the nitrogen breaks, an alkyl radical departs and the remaining fragment is a resonance-stabilised iminium cation, R2N+=CH2 in resonance with R2N-CH2+. An amine with two different alkyl groups on nitrogen has two such bonds and gives two alpha-cleavage ions. The mass of each fragment is the molecular ion less the radical lost, and the molecular ion itself is odd because the molecule contains one nitrogen (the nitrogen rule).",
      "approach": "Step 1: Locate the two alpha C-C bonds: on the ethyl side, CH3-CH2(N); on the propyl side, CH3CH2-CH2(N).\nStep 2: Cleave the ethyl-side bond: lose a methyl radical (15). Fragment: CH2=N+H-CH2CH2CH3, m/z 87 - 15 = 72.\nStep 3: Cleave the propyl-side bond: lose an ethyl radical (29). Fragment: CH3CH2-N+H=CH2, m/z 87 - 29 = 58.\nStep 4: Both ions are even-mass iminium cations containing the nitrogen; the alkyl radicals (15 and 29) are neutral and not detected.",
      "note": "McMurry 24.10 (Spectroscopy of Amines), Figure 24.11, gives the mass spectrum of N-ethylpropylamine with peaks at m/z 58 and 72 corresponding to the two possible modes of alpha cleavage, describing the process as breaking the C-C bond nearest the nitrogen to yield an alkyl radical and a resonance-stabilised, nitrogen-containing cation, like the alpha cleavage of alcohols (17.11). The nitrogen rule in the same section explains the odd molecular ion at 87.",
      "options": {
        "A": "Correct. Loss of methyl from the ethyl side gives 72; loss of ethyl from the propyl side gives 58.",
        "B": "m/z 44 would be loss of a propyl radical (43), which is not an alpha cleavage: the bond to the propyl group's own CH2 is the C-N bond, not a C-C bond alpha to nitrogen. m/z 86 is a simple loss of H, not the characteristic fragmentation.",
        "C": "29 and 43 are the masses of ethyl and propyl radicals, the neutral pieces that leave. The mass spectrometer records the charged fragments, which carry the nitrogen and the rest of the molecule.",
        "D": "Odd fragment masses would require the fragments to contain the nitrogen and an even number of hydrogens lost; alpha cleavage gives even-mass iminium ions from an odd-mass molecular ion. 59 and 73 do not correspond to any simple loss."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q36_elucidation_butan_2_amine",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound P is a colourless liquid (bp 63 °C) with a fishy, ammoniacal odour. It dissolves readily in dilute HCl, and with benzenesulfonyl chloride in aqueous NaOH it gives a sulfonamide that dissolves in the alkaline solution. Combustion analysis gives C 65.7%, H 15.2% and N 19.2% by mass. IR: two bands at 3370 and $3290\\text{ cm}^{-1}$, a band at $1600\\text{ cm}^{-1}$, and no absorption between 1650 and $1800\\text{ cm}^{-1}$. $^1\\text{H}$ NMR: 2.85 (sextet, 1H), 1.35 (multiplet, 2H), 1.15 (broad singlet, 2H, disappears with D2O), 1.05 (doublet, 3H), 0.90 (triplet, 3H). The mass spectrum is shown. Which structure is P?",
    "question_smiles": "",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 30,
          "y": 8
        },
        {
          "x": 41,
          "y": 12
        },
        {
          "x": 44,
          "y": 100
        },
        {
          "x": 58,
          "y": 20
        },
        {
          "x": 73,
          "y": 5
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Butan-2-amine",
        "smiles": "CCC(C)N",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Butan-1-amine",
        "smiles": "CCCCN",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "N-Methylpropan-1-amine",
        "smiles": "CNCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Methylpropan-1-amine",
        "smiles": "CC(C)CN",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The tests classify the compound before the spectra do: solubility in dilute HCl means a base, an amine; the Hinsberg test, a sulfonamide that dissolves in NaOH because it still has an acidic N-H, means a primary amine. The IR agrees, with two N-H stretches, and the mass spectrum announces one nitrogen by the nitrogen rule: the molecular ion is odd. The formula then gives a saturated C4 amine, and the NMR distinguishes the four possible isomers by the multiplicity of the proton on the carbon bearing nitrogen and by the presence of a doublet methyl.",
      "approach": "Step 1: Formula. Per 100 g: C 65.7/12.01 = 5.47, H 15.2/1.008 = 15.1, N 19.2/14.01 = 1.37. Divide by 1.37: C 4, H 11, N 1: C4H11N, M = 73, matching the odd molecular ion (one nitrogen). Unsaturation = (2 x 4 + 2 + 1 - 11)/2 = 0: saturated.\nStep 2: Class. HCl-soluble: an amine. Hinsberg: NaOH-soluble sulfonamide, so a primary amine, RNH2. IR: two N-H stretches (3370, 3290) and the N-H bend at 1600 confirm a primary amine.\nStep 3: NMR. 2.85 (1H, sextet): a CH bearing the NH2, coupled to a CH3 and a CH2 (five neighbours), so the nitrogen is on a secondary carbon. 1.05 (3H, d): a methyl on that CH. 1.35 (2H, m) and 0.90 (3H, t): an ethyl group. 1.15 (2H, broad, exchanges with D2O): the NH2. Assemble: CH3CH(NH2)CH2CH3, butan-2-amine.\nStep 4: Mass spectrum. Alpha cleavage on the ethyl side loses C2H5 (29) to give CH3CH=NH2+ at m/z 44, the base peak (the larger radical is lost preferentially); alpha cleavage on the methyl side loses CH3 (15) to give m/z 58. M+ 73 is weak, as amine molecular ions usually are. P is racemic butan-2-amine.",
      "note": "McMurry 24.10 (Spectroscopy of Amines) supplies the nitrogen rule (an odd molecular ion means an odd number of nitrogens), the two N-H bands of a primary amine at about 3350 and 3450, the exchange of N-H protons with D2O, the deshielding of hydrogens on the carbon next to nitrogen and alpha cleavage to a resonance-stabilised iminium ion, with the two alpha-cleavage peaks of N-ethylpropylamine as the example (Figure 24.11). The Hinsberg test is lecture material, not in the text. Butan-2-amine is what reductive amination of butan-2-one with ammonia gives (24.6).",
      "options": {
        "A": "Correct. A primary C4H11N amine with the nitrogen on a secondary carbon: a 1H sextet for the CH-NH2, a doublet methyl, an ethyl group, and alpha-cleavage ions at 44 (base) and 58.",
        "B": "Butan-1-amine is a primary C4H11N amine, but its CH2NH2 protons would be a 2H triplet near 2.7, there would be no doublet methyl, and its alpha cleavage loses a propyl radical to give CH2=NH2+ at m/z 30 as the base peak, not 44.",
        "C": "N-Methylpropan-1-amine is C4H11N but secondary: one N-H band in the IR, not two; its sulfonamide has no N-H and would not dissolve in NaOH; and its NMR shows an N-CH3 singlet near 2.4 and a 2H triplet near 2.5, with no doublet methyl.",
        "D": "2-Methylpropan-1-amine is a primary C4H11N amine, but its CH2NH2 is a 2H doublet near 2.5, its two methyls are a 6H doublet near 0.9, there is no 1H sextet, and its alpha cleavage gives m/z 30 (loss of isopropyl) as the base peak."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch24_q37_elucidation_p_toluidine",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound N is a low-melting solid (mp 44 °C) that darkens in air. It dissolves in dilute HCl; treating that solution with NaNO2 at 0 °C and then adding it to alkaline phenol gives an orange precipitate. Combustion analysis gives C 78.5%, H 8.5% and N 13.1% by mass. IR: two bands at 3430 and $3350\\text{ cm}^{-1}$, bands at 1620, 1515 and $1270\\text{ cm}^{-1}$, and a strong band at $815\\text{ cm}^{-1}$; nothing between 1650 and $1800\\text{ cm}^{-1}$ and no absorption near $2250\\text{ cm}^{-1}$. Mass spectrum: $\\text{M}^+$ at $m/z = 107$ (base peak) and a peak at 106. The $^1\\text{H}$ NMR spectrum is shown. Which structure is N?",
    "question_smiles": "",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 6.95,
          "y": 2,
          "label": "doublet"
        },
        {
          "x": 6.6,
          "y": 2,
          "label": "doublet"
        },
        {
          "x": 3.4,
          "y": 2,
          "label": "singlet"
        },
        {
          "x": 2.25,
          "y": 3,
          "label": "singlet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "4-Methylaniline (p-toluidine)",
        "smiles": "Cc1ccc(N)cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzylamine",
        "smiles": "NCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "N-Methylaniline",
        "smiles": "CNc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Methylaniline (o-toluidine)",
        "smiles": "Cc1ccccc1N",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The tests place the compound precisely. Solubility in dilute HCl means an amine; diazotisation followed by coupling with phenol to an orange azo dye means a primary arylamine, because only an ArNH2 gives a diazonium salt stable enough to couple. The odd molecular ion confirms one nitrogen, and the formula's five degrees of unsaturation... four for a benzene ring plus... no: C7H9N has four degrees of unsaturation, exactly a benzene ring, so there is no other unsaturation and the extra carbon is a methyl. The IR's two N-H bands confirm the primary amine and the 815 band a para-disubstituted ring; the NMR's two 2H doublets settle the substitution pattern.",
      "approach": "Step 1: Formula. Per 100 g: C 78.5/12.01 = 6.54, H 8.5/1.008 = 8.43, N 13.1/14.01 = 0.935. Divide by 0.935: C 7, H 9, N 1: C7H9N, M = 107, matching the odd molecular ion. Unsaturation = (2 x 7 + 2 + 1 - 9)/2 = 4: a benzene ring and nothing else.\nStep 2: Class. HCl-soluble amine; diazotises and azo-couples, so a primary arylamine, ArNH2, with the nitrogen on the ring. IR: two N-H stretches (3430, 3350), aromatic C=C (1620, 1515), C-N (1270), and 815 for a para-disubstituted ring.\nStep 3: NMR. 6.95 (2H, d) and 6.60 (2H, d): a para-disubstituted ring, the upfield pair ortho to the electron-donating NH2. 3.40 (2H, broad s): the NH2, exchangeable. 2.25 (3H, s): an aryl methyl. Assemble: CH3-C6H4-NH2 with the groups para: 4-methylaniline.\nStep 4: Mass spectrum. Aromatic amines give intense molecular ions; 107 is the base peak and 106 is loss of H. N is p-toluidine.",
      "note": "McMurry 24.10 (Spectroscopy of Amines) gives the two N-H bands of a primary amine, the exchange of N-H protons with D2O and the nitrogen rule; the para-disubstituted benzene pattern (two 2H doublets, a strong band near 815) is McMurry 15.7. The diazotisation-coupling test is the chemistry of McMurry 24.8 (arenediazonium salts couple with phenols to give coloured azo compounds) used analytically; the text does not present it as a test. p-Toluidine is the starting material of two of this chapter's roadmaps.",
      "options": {
        "A": "Correct. C7H9N with a benzene ring as its only unsaturation, a primary arylamine by the coupling test and the two N-H bands, a para pattern in the IR and NMR, and an aryl methyl singlet.",
        "B": "Benzylamine is C7H9N and a primary amine, but its nitrogen is on a CH2, not the ring: it would not diazotise to a stable salt or couple with phenol (an alkanediazonium ion loses N2 at once), its NMR would show a 2H singlet near 3.85 for CH2 and a 5H multiplet, with no methyl, and its mass spectrum has m/z 106 (M - 1) or 91 rather than 107 as base peak.",
        "C": "N-Methylaniline is C7H9N but a secondary amine: one N-H band, not two; no diazonium coupling (a secondary arylamine gives an N-nitrosamine with nitrous acid instead); and an NMR with an N-CH3 singlet near 2.8 and five ring protons, not a 3H singlet at 2.25 and two 2H doublets.",
        "D": "2-Methylaniline is C7H9N, a primary arylamine that would pass the tests, but its ring is ortho-disubstituted: four ring protons as a multiplet near 6.6-7.1, not two clean 2H doublets, and a strong out-of-plane band near 750 rather than 815."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  }
];
