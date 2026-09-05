// OChemStudyBuddy - McMurry Chapter 26
// Author: A. Elangovan, PhD
var CH26_QUESTIONS = [
  {
    "question_id": "ch26_q1_match_aliphatic",
    "topic": "Structures of Amino Acids",
    "difficulty_level": "Medium",
    "question_text": "Match each amino acid to its name. These four have hydrocarbon side chains; two of the six names in the list are decoys.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C[C@@H](C(=O)O)N",
        "correctAnswer": "Alanine",
        "alt": "An alpha-amino acid whose side chain is a single methyl group."
      },
      {
        "smiles": "CC(C)[C@@H](C(=O)O)N",
        "correctAnswer": "Valine",
        "alt": "An alpha-amino acid whose side chain is an isopropyl group, CH(CH3)2, attached directly to the alpha carbon."
      },
      {
        "smiles": "CC(C)C[C@@H](C(=O)O)N",
        "correctAnswer": "Leucine",
        "alt": "An alpha-amino acid whose side chain is CH2CH(CH3)2, an isobutyl group with the branch one carbon out from the alpha carbon."
      },
      {
        "smiles": "CC[C@H](C)[C@@H](C(=O)O)N",
        "correctAnswer": "Isoleucine",
        "alt": "An alpha-amino acid whose side chain is a sec-butyl group, CH(CH3)CH2CH3, branched at the carbon attached to the alpha carbon, which is itself a stereocentre."
      }
    ],
    "match_options": [
      "Alanine",
      "Valine",
      "Leucine",
      "Isoleucine",
      "Glycine",
      "Proline"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "At least one amino acid matched to the wrong name",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Five of the twenty amino acids carry plain hydrocarbon side chains: glycine (H), alanine (methyl), valine (isopropyl), leucine (isobutyl) and isoleucine (sec-butyl). Valine, leucine and isoleucine are told apart by where the branch sits: on the carbon bonded to the alpha carbon (valine, three side-chain carbons), one carbon further out (leucine, four carbons), or on the first carbon but with an ethyl rather than a second methyl (isoleucine, four carbons and a second stereocentre). All are nonpolar, hydrophobic residues that pack into the interior of a folded protein.",
      "approach": "Step 1: Count side-chain carbons. One is alanine; three is valine; four is leucine or isoleucine.\nStep 2: For the four-carbon pair, look at the carbon attached to the alpha carbon. If it is a CH2 leading to a CH(CH3)2, the side chain is isobutyl: leucine. If it is a CH bearing both a methyl and an ethyl, the side chain is sec-butyl: isoleucine.\nStep 3: Isoleucine's branch carbon is a second stereocentre, drawn with its own wedge; natural isoleucine is (2S,3S).\nStep 4: Glycine (no side chain) and proline (a ring) are not among the drawings; they are the decoys.",
      "note": "McMurry 26.1 (Structures of Amino Acids), Table 26.1, gives the twenty structures with their three- and one-letter codes (Ala A, Val V, Leu L, Ile I) and their pKa and pI values, and Problem 26-1 asks how many have hydrocarbon side chains. McMurry 26.9 explains why these residues matter for folding: amino acids with neutral, nonpolar side chains congregate in the hydrocarbon-like interior of a globular protein, away from water. Valine, leucine and isoleucine are three of the nine essential amino acids.",
      "options": {
        "A": "Correct. Methyl is alanine, isopropyl is valine, isobutyl (branch one carbon out) is leucine and sec-butyl (branch on the first carbon, with an ethyl) is isoleucine.",
        "B": "One or more names is on the wrong structure. Count the side-chain carbons first (1, 3, 4, 4), then separate leucine from isoleucine by where the branch is: a CH2 then CH(CH3)2 is leucine, a CH(CH3) then CH2CH3 is isoleucine."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q1_match_aromatic",
    "topic": "Structures of Amino Acids",
    "difficulty_level": "Medium",
    "question_text": "Match each amino acid to its name. These four have aromatic side chains; two of the six names in the list are decoys.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "c1ccc(cc1)C[C@@H](C(=O)O)N",
        "correctAnswer": "Phenylalanine",
        "alt": "An alpha-amino acid whose side chain is a CH2 bonded to an unsubstituted benzene ring."
      },
      {
        "smiles": "c1cc(ccc1C[C@@H](C(=O)O)N)O",
        "correctAnswer": "Tyrosine",
        "alt": "An alpha-amino acid whose side chain is a CH2 bonded to a benzene ring that carries an OH group on the carbon opposite the attachment point."
      },
      {
        "smiles": "c1ccc2c(c1)c(c[nH]2)C[C@@H](C(=O)O)N",
        "correctAnswer": "Tryptophan",
        "alt": "An alpha-amino acid whose side chain is a CH2 bonded to the five-membered ring of a bicyclic aromatic system, a benzene ring fused to a five-membered ring containing one N-H; the attachment is on the ring carbon next to the fused carbon, not next to the nitrogen."
      },
      {
        "smiles": "c1c([nH]cn1)C[C@@H](C(=O)O)N",
        "correctAnswer": "Histidine",
        "alt": "An alpha-amino acid whose side chain is a CH2 bonded to a five-membered aromatic ring containing two nitrogens separated by a carbon, one nitrogen carrying an H."
      }
    ],
    "match_options": [
      "Phenylalanine",
      "Tyrosine",
      "Tryptophan",
      "Histidine",
      "Proline",
      "Arginine"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "At least one amino acid matched to the wrong name",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Four amino acids carry an aromatic ring on a CH2 spacer. Phenylalanine has a bare phenyl; tyrosine is phenylalanine with a para-OH (a phenol, weakly acidic, pKa 10.07); tryptophan carries an indole, attached at C3 of the pyrrole ring; histidine carries an imidazole, a five-membered ring with two nitrogens in a 1,3 relationship, one of them pyridine-like and basic (pKa 6.00), the other pyrrole-like and part of the aromatic sextet. Phenylalanine, tyrosine and tryptophan are where chymotrypsin cuts; histidine's imidazole is the general acid-base catalyst in many enzyme active sites, including citrate synthase.",
      "approach": "Step 1: A six-membered ring alone is phenylalanine; the same ring with a para-OH is tyrosine.\nStep 2: A bicyclic ring (benzene fused to a five-membered N-H ring) is the indole of tryptophan. The side chain is on C3, the carbon adjacent to the ring fusion, not on the carbon next to the nitrogen.\nStep 3: A single five-membered ring with two nitrogens separated by one carbon (N1 and N3) is the imidazole of histidine. If the two nitrogens were adjacent the ring would be a pyrazole, which is not an amino acid side chain.\nStep 4: Proline (a saturated pyrrolidine ring) and arginine (a guanidine chain) are the decoys.",
      "note": "McMurry 26.1 (Structures of Amino Acids), Table 26.1, gives the four structures (Phe F, Tyr Y, Trp W, His H), lists tyrosine among the neutral amino acids while noting its weakly acidic phenol, and explains that only histidine's pyridine-like, doubly bonded nitrogen is basic, the pyrrole-like N-H being part of the six-pi-electron aromatic imidazole (24.9); at pH 7.3 histidine is not quite basic enough to be protonated. McMurry 26.6 has chymotrypsin cleaving at the carboxyl side of these three aryl residues, and McMurry 26.11 uses histidine and aspartate as the acid-base residues of citrate synthase.",
      "options": {
        "A": "Correct. Bare phenyl is phenylalanine, para-hydroxyphenyl is tyrosine, indol-3-ylmethyl is tryptophan and imidazol-4-ylmethyl is histidine.",
        "B": "One or more names is on the wrong structure. Count rings and heteroatoms: no heteroatom is phenylalanine, an OH on the ring is tyrosine, two fused rings with one N-H is tryptophan, one five-membered ring with two nitrogens is histidine."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q1_match_polar",
    "topic": "Structures of Amino Acids",
    "difficulty_level": "Medium",
    "question_text": "Match each amino acid to its name. These four have side chains containing an oxygen or a sulfur; two of the six names in the list are decoys.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "OC[C@@H](C(=O)O)N",
        "correctAnswer": "Serine",
        "alt": "An alpha-amino acid whose side chain is CH2OH."
      },
      {
        "smiles": "C[C@@H](O)[C@@H](C(=O)O)N",
        "correctAnswer": "Threonine",
        "alt": "An alpha-amino acid whose side chain is CH(OH)CH3, with the OH-bearing carbon drawn as a second stereocentre."
      },
      {
        "smiles": "SC[C@@H](C(=O)O)N",
        "correctAnswer": "Cysteine",
        "alt": "An alpha-amino acid whose side chain is CH2SH."
      },
      {
        "smiles": "CSCC[C@@H](C(=O)O)N",
        "correctAnswer": "Methionine",
        "alt": "An alpha-amino acid whose side chain is CH2CH2SCH3, a thioether ending in a methyl."
      }
    ],
    "match_options": [
      "Serine",
      "Threonine",
      "Cysteine",
      "Methionine",
      "Asparagine",
      "Tyrosine"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "At least one amino acid matched to the wrong name",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Serine and threonine are the two alcohol-containing amino acids, primary and secondary respectively (threonine has a second stereocentre and is (2S,3R)). Cysteine and methionine are the two sulfur-containing ones: cysteine is a thiol, which is weakly acidic (pKa 8.18), forms disulfide cross-links by mild oxidation, and is the one L amino acid with an R alpha carbon because the CH2SH outranks CO2H; methionine is a thioether with no acidic hydrogen and forms no disulfides. All four are classed as neutral, and serine, threonine and tyrosine are the residues that enzymes phosphorylate.",
      "approach": "Step 1: Find the heteroatom in the side chain: oxygen (serine, threonine) or sulfur (cysteine, methionine).\nStep 2: For the oxygen pair, CH2OH is serine and CH(OH)CH3 is threonine.\nStep 3: For the sulfur pair, CH2SH (a thiol, S-H) is cysteine and CH2CH2SCH3 (a thioether, S between two carbons) is methionine.\nStep 4: Asparagine (an amide side chain) and tyrosine (a phenol) also contain oxygen but are not drawn; they are the decoys.",
      "note": "McMurry 26.1 (Structures of Amino Acids), Table 26.1, gives the structures (Ser S, Thr T, Cys C, Met M), notes that cysteine, although classed as neutral, has a weakly acidic side chain, and sets Problem 26-2 (why cysteine alone is R) and Problem 26-3 (threonine is (2S,3R)); McMurry 26.4 describes the disulfide bond between two cysteines, and McMurry 26.5 the capping of cysteine SH groups with iodoacetic acid before amino acid analysis. Methionine's thioether makes it S-adenosylmethionine's parent, the biological methylating agent (11.6).",
      "options": {
        "A": "Correct. CH2OH is serine, CH(OH)CH3 is threonine, CH2SH is cysteine and CH2CH2SCH3 is methionine.",
        "B": "One or more names is on the wrong structure. Oxygen side chains: a primary alcohol is serine, a secondary alcohol is threonine. Sulfur side chains: an S-H is cysteine, an S flanked by two carbons is methionine."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q1_match_acidic_amide",
    "topic": "Structures of Amino Acids",
    "difficulty_level": "Medium",
    "question_text": "Match each amino acid to its name. Two of these have a carboxylic acid in the side chain and two have the corresponding primary amide; two of the six names in the list are decoys.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C(C(=O)O)[C@@H](C(=O)O)N",
        "correctAnswer": "Aspartic acid",
        "alt": "An alpha-amino acid whose side chain is CH2CO2H, one carbon then a carboxylic acid."
      },
      {
        "smiles": "C(CC(=O)O)[C@@H](C(=O)O)N",
        "correctAnswer": "Glutamic acid",
        "alt": "An alpha-amino acid whose side chain is CH2CH2CO2H, two carbons then a carboxylic acid."
      },
      {
        "smiles": "C(C(=O)N)[C@@H](C(=O)O)N",
        "correctAnswer": "Asparagine",
        "alt": "An alpha-amino acid whose side chain is CH2CONH2, one carbon then a primary amide."
      },
      {
        "smiles": "C(CC(=O)N)[C@@H](C(=O)O)N",
        "correctAnswer": "Glutamine",
        "alt": "An alpha-amino acid whose side chain is CH2CH2CONH2, two carbons then a primary amide."
      }
    ],
    "match_options": [
      "Aspartic acid",
      "Glutamic acid",
      "Asparagine",
      "Glutamine",
      "Lysine",
      "Serine"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "At least one amino acid matched to the wrong name",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Aspartic acid and glutamic acid are the two acidic amino acids, with a second CO2H one and two carbons out from the alpha carbon; at pH 7.3 those side chains are carboxylates, which is why their isoelectric points are low (2.77 and 3.22) and why they migrate toward the positive electrode in electrophoresis. Asparagine and glutamine are their primary amides, same chain length, no charge and no acidity, classed as neutral. Telling the pairs apart is a matter of counting the CH2 groups (one for Asp/Asn, two for Glu/Gln) and reading the end group (CO2H or CONH2).",
      "approach": "Step 1: Read the end of the side chain: CO2H is an acid (aspartic or glutamic), CONH2 is an amide (asparagine or glutamine).\nStep 2: Count the CH2 groups between the alpha carbon and that end group: one for the four-carbon amino acids (aspartic acid, asparagine), two for the five-carbon ones (glutamic acid, glutamine).\nStep 3: So CH2CO2H is aspartic acid, CH2CH2CO2H glutamic acid, CH2CONH2 asparagine, CH2CH2CONH2 glutamine.\nStep 4: Lysine and serine are the decoys; neither carries a carbonyl in its side chain.",
      "note": "McMurry 26.1 (Structures of Amino Acids), Table 26.1, lists aspartic acid (Asp D, side-chain pKa 3.65, pI 2.77) and glutamic acid (Glu E, 4.25, 3.22) under acidic amino acids and asparagine (Asn N) and glutamine (Gln Q) among the neutral ones, and states that at physiological pH the side-chain carboxyls of aspartic and glutamic acid are deprotonated. McMurry 26.2 derives the low pI of the acidic pair as the average of their two lowest pKa values, and McMurry 26.11 has an aspartate carboxylate serving as the base in citrate synthase. Aspartic acid is also the text's amidomalonate example (26.3).",
      "options": {
        "A": "Correct. One CH2 then CO2H is aspartic acid, two then CO2H glutamic acid; the same chains ending in CONH2 are asparagine and glutamine.",
        "B": "One or more names is on the wrong structure. Read the end group first (CO2H acid, CONH2 amide), then count the CH2 groups: one is the aspartic pair, two is the glutamic pair."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q1_match_basic_special",
    "topic": "Structures of Amino Acids",
    "difficulty_level": "Medium",
    "question_text": "Match each amino acid to its name. Two of these have basic side chains, one has no side chain, and one is a secondary amine; two of the six names in the list are decoys.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "NCCCC[C@@H](C(=O)O)N",
        "correctAnswer": "Lysine",
        "alt": "An alpha-amino acid whose side chain is a four-carbon chain ending in NH2."
      },
      {
        "smiles": "N=C(N)NCCC[C@@H](C(=O)O)N",
        "correctAnswer": "Arginine",
        "alt": "An alpha-amino acid whose side chain is a three-carbon chain ending in NH-C(=NH)NH2, a guanidine group."
      },
      {
        "smiles": "NCC(=O)O",
        "correctAnswer": "Glycine",
        "alt": "An amino acid with no side chain: an NH2 and a CO2H on the same CH2, no stereocentre."
      },
      {
        "smiles": "C1C[C@H](NC1)C(=O)O",
        "correctAnswer": "Proline",
        "alt": "An amino acid whose nitrogen is part of a five-membered saturated ring with the alpha carbon, the ring N-H being a secondary amine; the CO2H is on the ring carbon next to the nitrogen."
      }
    ],
    "match_options": [
      "Lysine",
      "Arginine",
      "Glycine",
      "Proline",
      "Histidine",
      "Valine"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "At least one amino acid matched to the wrong name",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Lysine and arginine are two of the three basic amino acids (histidine is the third). Lysine's side chain ends in a primary amine (pKa 10.53) and arginine's in a guanidine (pKa 12.48), the most basic group in any amino acid because its protonated form is stabilised by three equivalent resonance forms; both are protonated at pH 7.3, both have high isoelectric points, and both are where trypsin cleaves. Glycine is the only amino acid without a stereocentre. Proline is the only secondary amine: its nitrogen is tied into a pyrrolidine ring with the alpha carbon, which is why it has no N-H once in a peptide and breaks alpha helices.",
      "approach": "Step 1: The structure with two NH2 groups, one on a four-carbon chain, is lysine; the chain ends in a simple amine.\nStep 2: The structure whose chain ends in NH-C(=NH)NH2 is arginine; the guanidine is the giveaway.\nStep 3: The structure with no side chain at all (H2N-CH2-CO2H) is glycine.\nStep 4: The structure whose nitrogen sits in a ring with the alpha carbon is proline. Histidine (an imidazole ring) and valine (isopropyl) are the decoys.",
      "note": "McMurry 26.1 (Structures of Amino Acids), Table 26.1, lists lysine (Lys K, side-chain pKa 10.53, pI 9.74) and arginine (Arg R, 12.48, 10.76) under basic amino acids, states that nineteen of the twenty are primary amines while proline is a secondary amine whose nitrogen and alpha carbon are part of a five-membered pyrrolidine ring, and that except for glycine the alpha carbons are chirality centres. McMurry 26.6 has trypsin cleaving at the carboxyl side of arginine and lysine, and McMurry 26.2 derives the high pI of the basic amino acids from the two highest pKa values.",
      "options": {
        "A": "Correct. The aminobutyl chain is lysine, the guanidine chain is arginine, the residue with no side chain is glycine and the ring-bound secondary amine is proline.",
        "B": "One or more names is on the wrong structure. A chain ending in NH2 is lysine; a chain ending in NHC(=NH)NH2 is arginine; no side chain is glycine; a nitrogen inside a five-membered ring is proline."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q_dynamic_isoelectric_points",
    "topic": "Amino Acids and the Henderson-Hasselbalch Equation: Isoelectric Points",
    "difficulty_level": "Medium",
    "question_text": "Match each amino acid to its isoelectric point. The four values are 2.77, 6.01, 7.59 and 9.74.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "C(C(=O)O)[C@@H](C(=O)O)N",
        "correctAnswer": "pI 2.77",
        "alt": "An alpha-amino acid whose side chain is CH2CO2H."
      },
      {
        "smiles": "C[C@@H](C(=O)O)N",
        "correctAnswer": "pI 6.01",
        "alt": "An alpha-amino acid whose side chain is a methyl group."
      },
      {
        "smiles": "c1c([nH]cn1)C[C@@H](C(=O)O)N",
        "correctAnswer": "pI 7.59",
        "alt": "An alpha-amino acid whose side chain is a CH2 bonded to an imidazole ring, a five-membered aromatic ring with two nitrogens separated by a carbon."
      },
      {
        "smiles": "NCCCC[C@@H](C(=O)O)N",
        "correctAnswer": "pI 9.74",
        "alt": "An alpha-amino acid whose side chain is a four-carbon chain ending in NH2."
      }
    ],
    "match_options": [
      "pI 2.77",
      "pI 6.01",
      "pI 7.59",
      "pI 9.74"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "At least one amino acid matched to the wrong isoelectric point",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The isoelectric point is the pH at which an amino acid carries no net charge, and it is the average of the two pKa values on either side of the neutral zwitterion. For a neutral side chain that is the average of the alpha-CO2H and alpha-NH3+ pKa values, near 6. An acidic side chain adds a low pKa, so the zwitterion is bracketed by the two lowest values and the pI drops below 3. A basic side chain adds a high pKa, so the zwitterion is bracketed by the two highest values and the pI rises above 9. Histidine's imidazole (pKa 6.00) is basic, but only weakly, so its pI sits between the neutral and the strongly basic cases.",
      "approach": "Step 1: Classify each side chain: CH2CO2H acidic (aspartic acid), CH3 neutral (alanine), imidazole weakly basic (histidine), CH2CH2CH2CH2NH2 basic (lysine).\nStep 2: Aspartic acid: average of the two lowest pKa values, (1.88 + 3.65)/2 = 2.77.\nStep 3: Alanine: average of pKa1 and pKa2, (2.34 + 9.69)/2 = 6.01.\nStep 4: Histidine: average of the two highest, (9.17 + 6.00)/2 = 7.59. Lysine: average of the two highest, (8.95 + 10.53)/2 = 9.74. The order low to high is acid, neutral, weak base, strong base.",
      "note": "McMurry 26.2 (Amino Acids and the Henderson-Hasselbalch Equation: Isoelectric Points) defines the pI, states that the 15 neutral amino acids have isoelectric points in the range 5.0 to 6.5, that the pI is the average of pKa1 and pKa2 for a neutral side chain, of the two lowest pKa values for an acidic side chain and of the two highest for a basic one, and that acidic and basic amino acids therefore have low and high isoelectric points respectively; the values themselves (Asp 2.77, Ala 6.01, His 7.59, Lys 9.74) are from Table 26.1 in McMurry 26.1, which also notes that histidine is not quite basic enough to be protonated at pH 7.3.",
      "options": {
        "A": "Correct. The side chain sets which two pKa values bracket the zwitterion: the acidic one averages low (2.77), the neutral one near 6, the weakly basic imidazole at 7.59 and the strongly basic amine at 9.74.",
        "B": "At least one value is on the wrong amino acid. Order them by side chain: a carboxylic acid pulls the pI far below 6, a plain alkyl leaves it near 6, an imidazole (pKa 6.00) raises it a little, and a primary amine (pKa 10.53) raises it a lot."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q2_zwitterion_at_ph_7",
    "topic": "Structures of Amino Acids",
    "difficulty_level": "Easy",
    "question_text": "In which form does alanine exist predominantly in water at the physiological pH of 7.3?",
    "options": [
      {
        "option_id": "A",
        "text": "CH3CH(NH3+)CO2-, the dipolar zwitterion",
        "smiles": "C[C@@H](C(=O)[O-])[NH3+]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CH3CH(NH2)CO2H, the uncharged amino acid",
        "smiles": "C[C@@H](C(=O)O)N",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CH3CH(NH3+)CO2H, the cation",
        "smiles": "C[C@@H](C(=O)O)[NH3+]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CH3CH(NH2)CO2-, the anion",
        "smiles": "C[C@@H](C(=O)[O-])N",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carboxylic acid (pKa about 2) is deprotonated at pH 7.3 and an amine (conjugate acid pKa about 9 to 10) is protonated, and an amino acid carries both groups, so the neutral molecule is a zwitterion: an ammonium cation and a carboxylate anion in one structure with no net charge. The uncharged form with a free NH2 and a free CO2H is not a significant species at any pH; the proton always sits on the nitrogen, the stronger base. The zwitterion explains the salt-like properties of amino acids: high melting points, solubility in water rather than hydrocarbons, large dipole moments.",
      "approach": "Step 1: Compare the pH with the two pKa values of alanine: alpha-CO2H 2.34 and alpha-NH3+ 9.69.\nStep 2: pH 7.3 is far above 2.34, so the carboxyl group has lost its proton: CO2-.\nStep 3: pH 7.3 is far below 9.69, so the ammonium group has kept its proton: NH3+.\nStep 4: The species is therefore CH3CH(NH3+)CO2-, the zwitterion; the cation needs pH below about 2 and the anion pH above about 10, and the uncharged tautomer is never favoured because NH2 is a stronger base than CO2- is.",
      "note": "McMurry 26.1 (Structures of Amino Acids) states that a carboxyl group is deprotonated and an amino group protonated at pH 7.3, so amino acids exist in aqueous solution primarily as dipolar ions or zwitterions, internal salts with large dipole moments, water solubility and high melting points, and that they are amphiprotic: in aqueous acid the zwitterion accepts a proton on CO2- to give a cation, in aqueous base it loses a proton from NH3+ to give an anion. The pKa values are Table 26.1 and the titration curve is Figure 26.2 in McMurry 26.2.",
      "options": {
        "A": "Correct. At pH 7.3 the carboxyl is deprotonated and the amine protonated, so alanine is the internal salt with no net charge.",
        "B": "The uncharged form with NH2 and CO2H together is not the neutral species; the proton moves from the acid to the more basic amine, giving the zwitterion. This structure is essentially absent at every pH.",
        "C": "The cation, with both groups protonated, is the form below pH about 2, where the carboxyl group (pKa 2.34) is still protonated. At 7.3 the carboxyl has long since lost its proton.",
        "D": "The anion, with the amine unprotonated, is the form above pH about 10, beyond the NH3+ pKa of 9.69. At 7.3 the ammonium group keeps its proton."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q3_cysteine_is_r",
    "topic": "Structures of Amino Acids",
    "difficulty_level": "Hard",
    "question_text": "Of the nineteen chiral L amino acids, eighteen have the S configuration at the alpha carbon and cysteine alone is R, although its spatial arrangement matches the others. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "In cysteine the side chain CH2SH outranks CO2H under the sequence rules, because sulfur has a higher atomic number than oxygen; in the other amino acids CO2H outranks the side chain",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cysteine is the one L amino acid that is actually the mirror image of the others, with the NH2 on the right in the Fischer projection",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The thiol group forms an internal hydrogen bond that inverts the alpha carbon",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Sulfur is larger than carbon, so the side chain occupies the position of lowest priority",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "L and D describe the spatial arrangement relative to glyceraldehyde; R and S are assigned by the Cahn-Ingold-Prelog priorities of the four groups. All L amino acids have the same arrangement in space, so a change of descriptor from S to R can only come from a change in priority order. At the alpha carbon the ranking is NH2 first, then CO2H versus the side chain. For every side chain built on carbon and hydrogen, or carbon and a first-row atom, CO2H wins (O, O, O against at most O, H, H). Cysteine's CH2SH has (S, H, H), and sulfur outranks oxygen, so the side chain moves above CO2H, the sense of rotation reverses, and the same molecule reads R.",
      "approach": "Step 1: For alanine: NH2 (1), CO2H (2: O, O, O), CH3 (3: H, H, H), H (4). With H away, 1 to 2 to 3 is counterclockwise: S.\nStep 2: For serine: CH2OH is (O, H, H), still below CO2H's (O, O, O): S.\nStep 3: For cysteine: CH2SH is (S, H, H). At the first point of difference S (atomic number 16) beats O (8), so CH2SH is priority 2 and CO2H priority 3.\nStep 4: Swapping priorities 2 and 3 with the atoms in the same places reverses the sense: the same L arrangement now reads R. Nothing about the geometry changed.",
      "note": "McMurry 26.1 (Structures of Amino Acids) sets this as Problem 26-2 and describes the L convention: the CO2- at the top of a Fischer projection, the side chain pointing down, and the NH3+ on the left, the naturally occurring enantiomers being called L by analogy with L sugars (25.3); the sequence rules are McMurry 5.5. Selenocysteine, the twenty-first amino acid, is R for the same reason. Threonine and isoleucine each carry a second stereocentre; Problem 26-3 gives threonine as (2S,3R).",
      "options": {
        "A": "Correct. Sulfur outranks oxygen, so CH2SH takes priority over CO2H and the unchanged L arrangement reads R instead of S.",
        "B": "Cysteine has the same L arrangement as every other protein amino acid, NH3+ on the left in the Fischer projection. Its descriptor differs because the priorities differ, not because the geometry does.",
        "C": "Hydrogen bonding cannot invert a stereocentre, and the descriptor is a labelling convention applied to the structure as drawn, not to its conformation. The change is in priority order.",
        "D": "Size is not a sequence-rule criterion, and the side chain in cysteine is second in priority, not fourth: hydrogen remains lowest. It is the side chain outranking CO2H that flips the label."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q4_threonine_diastereomer",
    "topic": "Structures of Amino Acids",
    "difficulty_level": "Medium",
    "question_text": "L-Threonine is (2S,3R)-2-amino-3-hydroxybutanoic acid. Which stereoisomer is a diastereomer of it?",
    "options": [
      {
        "option_id": "A",
        "text": "(2S,3S)-2-Amino-3-hydroxybutanoic acid",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2R,3S)-2-Amino-3-hydroxybutanoic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2S,3R)-2-Amino-3-hydroxybutanoic acid drawn with the OH on a dashed bond instead of a wedge",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "None: a compound with two stereocentres has only its enantiomer",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two stereocentres give four stereoisomers, two pairs of enantiomers. Inverting both centres gives the enantiomer; inverting only one gives a diastereomer. Threonine's four are (2S,3R), its enantiomer (2R,3S), and the pair (2S,3S) and (2R,3R), which are called allothreonine and are diastereomers of threonine. Diastereomers have different properties, so allothreonine is a different compound with a different melting point and rotation, and proteins contain only the (2S,3R) isomer.",
      "approach": "Step 1: List the descriptors of L-threonine: 2S, 3R.\nStep 2: Invert both: 2R, 3S. That is the mirror image, D-threonine, an enantiomer, not a diastereomer.\nStep 3: Invert one: 2S, 3S (or 2R, 3R). Same connectivity, not mirror images: diastereomers, the allothreonines.\nStep 4: A drawing of (2S,3R) with different wedge choices is still (2S,3R) if the descriptors are the same; it is the same compound, not an isomer.",
      "note": "McMurry 26.1 (Structures of Amino Acids), Problem 26-3, gives threonine as (2S,3R)-2-amino-3-hydroxybutanoic acid and asks for a wedge drawing and a diastereomer with its centres labelled. The relationship between stereoisomers with more than one centre is McMurry 5.6 (enantiomers when every centre is inverted, diastereomers otherwise), and isoleucine, the other protein amino acid with two stereocentres, is (2S,3S) with alloisoleucine as its diastereomer.",
      "options": {
        "A": "Correct. Inverting only C3 gives (2S,3S), the same connectivity but not the mirror image: a diastereomer (allothreonine).",
        "B": "(2R,3S) has both centres inverted relative to (2S,3R), so it is the mirror image, the enantiomer D-threonine, not a diastereomer.",
        "C": "A change of drawing that keeps both descriptors is the same compound. Diastereomers differ in configuration at some but not all centres, which changes at least one descriptor.",
        "D": "Two stereocentres give four stereoisomers: an enantiomer and two diastereomers (a second enantiomeric pair). Only a compound with one stereocentre has just an enantiomer."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q5_fischer_convention_l",
    "topic": "Structures of Amino Acids",
    "difficulty_level": "Medium",
    "question_text": "How is an L amino acid drawn in a Fischer projection, and why is it called L?",
    "options": [
      {
        "option_id": "A",
        "text": "CO2- at the top, side chain at the bottom, NH3+ on the left; L because this matches the arrangement of L-glyceraldehyde, with the amino group in the place of the OH",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Side chain at the top, CO2- at the bottom, NH3+ on the right; L because the amino group is on the right",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CO2- at the top, NH3+ on the left; L because all natural amino acids are levorotatory",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "NH3+ at the top, CO2- at the bottom; L because the alpha carbon is S",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Amino acids borrow the D,L convention from carbohydrates. The projection is drawn like a sugar's: the most oxidised carbon, CO2-, at the top, the chain (side chain) pointing down, and the alpha substituents on the horizontal bonds. With the NH3+ on the left, the arrangement corresponds to L-glyceraldehyde (OH on the left), so the natural amino acids are L. Like the sugar letters, L says nothing about the sign of rotation and is not the same thing as S: it names an arrangement, and for cysteine the same L arrangement is R.",
      "approach": "Step 1: Place the groups as for a sugar: carbonyl-type carbon (CO2-) at the top, the rest of the chain (the side chain R) at the bottom.\nStep 2: The horizontal bonds carry H and NH3+; natural amino acids have the NH3+ on the left.\nStep 3: Compare with glyceraldehyde: OH on the right is D, on the left is L. NH3+ on the left is therefore L.\nStep 4: Do not read rotation or R/S from the letter: L-alanine happens to be dextrorotatory, and L-cysteine is R.",
      "note": "McMurry 26.1 (Structures of Amino Acids) states that in Fischer projections naturally occurring amino acids are represented by placing the CO2- group at the top and pointing the side chain downwards, as if drawing a carbohydrate (25.2), and then placing the NH3+ group on the left, and that because of their stereochemical similarity to L sugars (25.3) the natural alpha-amino acids are referred to as L amino acids, the unnatural enantiomers being D. McMurry 25.3 warns that D and L have no relation to the direction of rotation, and Problem 26-2 makes the point that L is not S for cysteine.",
      "options": {
        "A": "Correct. Drawn like a sugar with the CO2- on top and the side chain down, the natural amino acids have NH3+ on the left, the L-glyceraldehyde arrangement.",
        "B": "The projection puts the most oxidised carbon, CO2-, at the top, and L corresponds to the amino group on the left, not the right. NH3+ on the right in the standard orientation is a D amino acid.",
        "C": "The drawing is right but the reason is not: L is a configurational label inherited from glyceraldehyde and says nothing about rotation. Several L amino acids, alanine among them, are dextrorotatory.",
        "D": "The CO2- goes at the top, not the NH3+. And L is not defined by S: the two systems usually coincide for amino acids, but L-cysteine is R, so S cannot be the definition."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q6_histidine_at_ph_7",
    "topic": "Structures of Amino Acids",
    "difficulty_level": "Hard",
    "question_text": "Histidine's imidazole side chain has a conjugate-acid pKa of 6.00. Which nitrogen of the ring is basic, and what fraction of histidine side chains are protonated at pH 7.3?",
    "options": [
      {
        "option_id": "A",
        "text": "The pyridine-like, doubly bonded nitrogen; only about 5% are protonated at pH 7.3",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The N-H nitrogen; essentially all are protonated at pH 7.3",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both nitrogens equally; about half are protonated",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The pyridine-like nitrogen; about 95% are protonated, since pH is above pKa",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Imidazole has two nitrogens of different kinds. The N-H nitrogen is pyrrole-like: its lone pair is part of the six-electron aromatic sextet and is not available. The doubly bonded nitrogen is pyridine-like: its lone pair is in an sp2 orbital in the ring plane, free to accept a proton. With pKa 6.00 for the imidazolium ion, the Henderson-Hasselbalch equation at pH 7.3 gives a base-to-acid ratio of 10 to the 1.3, about 20, so about 5% of histidine side chains carry the proton. That near-neutral pKa is exactly what makes histidine the general acid-base residue of so many enzymes: it can give or take a proton at physiological pH.",
      "approach": "Step 1: Identify the basic nitrogen: the one without hydrogen, whose lone pair is in the plane rather than in the pi system.\nStep 2: Apply Henderson-Hasselbalch: log([base]/[acid]) = pH - pKa = 7.3 - 6.00 = 1.3.\nStep 3: [base]/[acid] = 10^1.3 = 20, so the fraction protonated is 1/(1 + 20) = 0.048, about 5%.\nStep 4: Since the pH is above the pKa, the neutral base predominates; the protonated form would dominate only below pH 6.",
      "note": "McMurry 26.1 (Structures of Amino Acids) states that histidine, which contains a heterocyclic imidazole ring in its side chain, is not quite basic enough to be protonated at pH 7.3, that only the pyridine-like, doubly bonded nitrogen is basic, and that the pyrrole-like singly bonded nitrogen is nonbasic because its lone pair is part of the six-pi-electron aromatic ring (24.9); Table 26.1 gives the side-chain pKa as 6.00. The same imidazole appears as the proton donor and acceptor in the citrate synthase mechanism of McMurry 26.11, and Problem 24-21 asks the same percentage calculation.",
      "options": {
        "A": "Correct. The sp2 lone pair of the doubly bonded nitrogen is the basic site, and at 1.3 pH units above the pKa about one side chain in twenty is protonated.",
        "B": "The N-H nitrogen's lone pair is in the aromatic sextet and is not basic; protonating it would destroy the aromaticity. And with pKa 6.00 the ring is mostly unprotonated at pH 7.3, not fully protonated.",
        "C": "The two nitrogens are not equivalent: one is pyridine-like (basic), the other pyrrole-like (nonbasic). Half-protonation occurs only at pH equal to pKa, 6.00, not at 7.3.",
        "D": "The nitrogen is right but the fraction is inverted. pH above pKa means the conjugate base predominates: 95% is the unprotonated fraction, and 5% the protonated one."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q7_alanine_at_ph_9",
    "topic": "Amino Acids and the Henderson-Hasselbalch Equation: Isoelectric Points",
    "difficulty_level": "Medium",
    "question_text": "Alanine has pKa1 = 2.34 (alpha-CO2H) and pKa2 = 9.69 (alpha-NH3+). What are the main species in a 1.00 M solution of alanine at pH 9.00?",
    "options": [
      {
        "option_id": "A",
        "text": "About 83% zwitterion and 17% anion (deprotonated at nitrogen)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "About 17% zwitterion and 83% anion",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Essentially all zwitterion, since pH 9.00 is far above pKa1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "About 83% zwitterion and 17% cation (protonated at the carboxyl)",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Henderson-Hasselbalch equation, log([A-]/[HA]) = pH - pKa, is applied with whichever pKa lies nearest the pH, because that is the equilibrium that is actually balanced there. At pH 9.00 the carboxyl equilibrium (pKa 2.34) is over six units away and lies entirely on the carboxylate side, so the only question is how much of the NH3+ (pKa 9.69) has been deprotonated. The ratio comes out at 0.20, and with the two forms summing to 1.00 M that is 0.17 M anion and 0.83 M zwitterion.",
      "approach": "Step 1: Choose the relevant pKa: 9.69, the one near pH 9.00. The carboxyl is fully deprotonated already.\nStep 2: log([A-]/[HA]) = 9.00 - 9.69 = -0.69, so [A-]/[HA] = antilog(-0.69) = 0.20; here HA is the zwitterion and A- the anion.\nStep 3: [A-] + [HA] = 1.00 M and [A-] = 0.20[HA] give [HA] = 0.83 M and [A-] = 0.17 M.\nStep 4: So 83% of the alanine is the neutral zwitterion and 17% is deprotonated at nitrogen; no cation is present at this pH.",
      "note": "McMurry 26.2 (Amino Acids and the Henderson-Hasselbalch Equation: Isoelectric Points) works exactly this example, a 1.00 M alanine solution at pH 9.00, choosing pKa2 because the pH is much closer to it than to pKa1, obtaining a ratio of 0.20 and concluding that 83% of the molecules are neutral zwitterions and 17% deprotonated; it then builds the titration curve of Figure 26.2 from the same calculation at other pH values. The Henderson-Hasselbalch equation itself is McMurry 20.3 and 24.5.",
      "options": {
        "A": "Correct. With pKa2 = 9.69, the anion-to-zwitterion ratio at pH 9.00 is 0.20, so 17% anion and 83% zwitterion.",
        "B": "This reverses the ratio. pH 9.00 is below pKa2, so the protonated form (the zwitterion, HA) predominates; the anion would be the major species only above 9.69.",
        "C": "The carboxyl equilibrium is indeed complete, but pH 9.00 is within one unit of pKa2, so a measurable fraction (17%) of the ammonium groups has lost its proton. Essentially pure zwitterion is found near the isoelectric point, 6.01.",
        "D": "No cation survives at pH 9.00: the carboxyl group (pKa 2.34) is more than six units above its pKa and is entirely CO2-. The 17% minor species is the anion, formed by deprotonating NH3+."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q8_pi_glutamic_acid",
    "topic": "Amino Acids and the Henderson-Hasselbalch Equation: Isoelectric Points",
    "difficulty_level": "Medium",
    "question_text": "Glutamic acid has pKa values of 2.19 (alpha-CO2H), 4.25 (side-chain CO2H) and 9.67 (alpha-NH3+). What is its isoelectric point?",
    "options": [
      {
        "option_id": "A",
        "text": "3.22, the average of 2.19 and 4.25",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "5.93, the average of 2.19 and 9.67",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "6.96, the average of 4.25 and 9.67",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5.37, the average of all three",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The isoelectric point is the pH at which the neutral zwitterion is the dominant species and the amounts of cation and anion are equal. It is the average of the two pKa values that bracket the zwitterion: the dissociation that forms it and the dissociation that destroys it. For glutamic acid the fully protonated cation loses the alpha-CO2H proton first (pKa 2.19) to give the zwitterion, and the zwitterion then loses the side-chain CO2H proton (pKa 4.25) to become an anion. So the pI is the average of the two lowest values, 3.22, and the NH3+ pKa plays no part.",
      "approach": "Step 1: Write the species in order of increasing pH: cation (both CO2H, NH3+) with charge +1; zwitterion (alpha-CO2-, side-chain CO2H, NH3+) with charge 0; anion (both CO2-, NH3+) with charge -1; dianion (both CO2-, NH2) with charge -2.\nStep 2: The zwitterion is formed by the pKa 2.19 dissociation and consumed by the pKa 4.25 dissociation.\nStep 3: pI = (2.19 + 4.25)/2 = 3.22.\nStep 4: Averaging in 9.67 would describe the balance between the anion and the dianion, which has nothing to do with net zero charge.",
      "note": "McMurry 26.2 (Amino Acids and the Henderson-Hasselbalch Equation: Isoelectric Points) states that the pI of any amino acid is the average of the two acid-dissociation constants that involve the neutral zwitterion: pKa1 and pKa2 for the 13 amino acids with a neutral side chain, the two lowest pKa values for the four with a strongly or weakly acidic side chain (Asp, Glu, Cys, Tyr), and the two highest for the three with a basic side chain; Table 26.1 in McMurry 26.1 gives glutamic acid's pI as 3.22. The low pI keeps the side-chain CO2H protonated at the pI, so the amino acid is neutral there.",
      "options": {
        "A": "Correct. The zwitterion is bracketed by the alpha-CO2H (2.19) and side-chain CO2H (4.25) dissociations, and their average is 3.22.",
        "B": "Averaging pKa1 and the NH3+ pKa is the rule for a neutral side chain. Glutamic acid's second carboxyl dissociates long before the ammonium does, so it is the second carboxyl pKa that bounds the zwitterion.",
        "C": "The 4.25 and 9.67 dissociations bracket the monoanion, not the zwitterion. At pH 6.96 glutamic acid carries a net charge of -1.",
        "D": "The pI is never the average of all three; only the two dissociations adjacent to the zwitterion count. The third pKa belongs to a different charge state."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q9_pi_arginine",
    "topic": "Amino Acids and the Henderson-Hasselbalch Equation: Isoelectric Points",
    "difficulty_level": "Medium",
    "question_text": "Arginine has pKa values of 2.17 (alpha-CO2H), 9.04 (alpha-NH3+) and 12.48 (side-chain guanidinium). What is its isoelectric point?",
    "options": [
      {
        "option_id": "A",
        "text": "10.76, the average of 9.04 and 12.48",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "5.61, the average of 2.17 and 9.04",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "7.33, the average of 2.17 and 12.48",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "7.90, the average of all three",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "For a basic amino acid the fully protonated form carries two positive charges (NH3+ and the protonated side chain) against one carboxylate once pKa1 is passed, so the species at pH 5 or 6 is a cation, not the zwitterion. The zwitterion appears only when the alpha-NH3+ has lost its proton (pKa 9.04) and lasts until the guanidinium loses its proton (pKa 12.48). The pI is therefore the average of the two highest pKa values, 10.76. Arginine's guanidinium is the most basic side chain of all, stabilised by three equivalent resonance forms, so it stays protonated even at pH 11.",
      "approach": "Step 1: Order the species: dication (CO2H, NH3+, guanidinium) at low pH; cation (CO2-, NH3+, guanidinium) after pKa 2.17; zwitterion (CO2-, NH2, guanidinium) after pKa 9.04; anion (CO2-, NH2, neutral guanidine) after pKa 12.48.\nStep 2: The zwitterion is formed at 9.04 and consumed at 12.48.\nStep 3: pI = (9.04 + 12.48)/2 = 10.76.\nStep 4: At pH 5.61 (the wrong neutral-side-chain average) arginine still carries a net +1 charge and would migrate toward the negative electrode.",
      "note": "McMurry 26.2 (Amino Acids and the Henderson-Hasselbalch Equation: Isoelectric Points) states that for the three amino acids with a basic side chain the pI is the average of the two highest pKa values, so that protonation of the side-chain amino group does not occur at the pI, and Table 26.1 in McMurry 26.1 lists arginine's pI as 10.76, the highest of the twenty, with lysine at 9.74 and histidine at 7.59. Trypsin cleaves after arginine and lysine (McMurry 26.6), and their positive charges at pH 7.3 place them on the surface of folded proteins (26.9).",
      "options": {
        "A": "Correct. The zwitterion exists between the NH3+ dissociation (9.04) and the guanidinium dissociation (12.48), and the average is 10.76.",
        "B": "That is the neutral-side-chain rule. Between pH 2.17 and 9.04 arginine has a carboxylate, an ammonium and a guanidinium: net +1, a cation, not the neutral species.",
        "C": "The lowest and highest pKa values bracket two dissociations, not one; between them the charge changes from +1 to 0 at 9.04. Only the two dissociations adjacent to the zwitterion enter the average.",
        "D": "The pI is not a three-way average. The carboxyl pKa describes the dication-to-cation step, which is two charge states away from neutrality."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q10_electrophoresis_ph_6",
    "topic": "Amino Acids and the Henderson-Hasselbalch Equation: Isoelectric Points",
    "difficulty_level": "Medium",
    "question_text": "A mixture of aspartic acid (pI 2.77), alanine (pI 6.01) and lysine (pI 9.74) is subjected to electrophoresis in a buffer at pH 6.00. How do the three migrate?",
    "options": [
      {
        "option_id": "A",
        "text": "Aspartic acid moves toward the positive electrode, lysine toward the negative electrode, and alanine hardly moves",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Aspartic acid moves toward the negative electrode, lysine toward the positive electrode, and alanine hardly moves",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "All three move toward the positive electrode at rates set by their molecular weights",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "None moves, because amino acids are zwitterions with no net charge at any pH",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The direction of migration in an electric field is set by the sign of the net charge, and the net charge is set by where the buffer pH lies relative to the isoelectric point. Above its pI a molecule has lost more protons than it has gained and is negative; below its pI it is positive; at its pI it is neutral and stays put. At pH 6.00, aspartic acid (pI 2.77) is well above its pI, so its side-chain carboxyl is deprotonated and it carries a net negative charge; lysine (pI 9.74) is well below its pI, so its side-chain amine is protonated and it carries a net positive charge; alanine is essentially at its pI.",
      "approach": "Step 1: Compare each pI with the buffer pH of 6.00.\nStep 2: Aspartic acid: 6.00 is above 2.77, so the species is the anion (CO2-, CO2-, NH3+; net -1). Negative charges migrate toward the positive electrode.\nStep 3: Lysine: 6.00 is below 9.74, so the species is the cation (CO2-, NH3+, side-chain NH3+; net +1). Positive charges migrate toward the negative electrode.\nStep 4: Alanine: 6.00 is within 0.01 of its pI, so it is the neutral zwitterion and barely moves. The three separate.",
      "note": "McMurry 26.2 (Amino Acids and the Henderson-Hasselbalch Equation: Isoelectric Points) describes electrophoresis: a mixture on a buffered strip between electrodes, proteins with negative charges (buffer pH above their pI) migrating toward the positive electrode and those with positive charges (pH below their pI) toward the negative electrode, with Figure 26.3 showing exactly this separation of basic, neutral and acidic components at pH 6.00. The same logic sets a protein's overall pI (lysozyme 11.0, pepsin about 1.0) and its solubility minimum at the pI.",
      "options": {
        "A": "Correct. Above its pI aspartic acid is an anion and moves to the positive electrode; below its pI lysine is a cation and moves to the negative electrode; alanine sits at its pI and stays.",
        "B": "The directions are reversed. A negative ion is attracted to the positive electrode, and aspartic acid at pH 6.00 is negative; lysine is positive and is attracted to the negative electrode.",
        "C": "Migration direction depends on the sign of the charge, not on mass, and the three carry charges of different sign at pH 6.00. Only aspartic acid moves toward the positive electrode.",
        "D": "An amino acid is a zwitterion with no net charge only at its own pI. Away from the pI it has a net charge: negative above, positive below. Only alanine is at its pI here."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q11_hemoglobin_charge",
    "topic": "Amino Acids and the Henderson-Hasselbalch Equation: Isoelectric Points",
    "difficulty_level": "Easy",
    "question_text": "Hemoglobin has an isoelectric point of 6.8. What is its net charge at pH 5.3, and at pH 7.3?",
    "options": [
      {
        "option_id": "A",
        "text": "Net positive at pH 5.3; net negative at pH 7.3",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Net negative at pH 5.3; net positive at pH 7.3",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Net positive at both, since a protein with basic residues is always cationic",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Zero at both, since the pI is between them",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A protein's isoelectric point is the pH at which its acidic and basic side chains, taken together, give no net charge. Lowering the pH below the pI adds protons: carboxylates become carboxylic acids and the protein's ammonium and guanidinium groups stay protonated, so the net charge is positive. Raising the pH above the pI removes protons: carboxylates stay deprotonated and some ammonium groups lose their protons, so the net charge is negative. Hemoglobin, with pI 6.8, is therefore a cation in a pH 5.3 buffer and an anion at the physiological 7.3.",
      "approach": "Step 1: Locate the pI, 6.8, on the pH scale.\nStep 2: pH 5.3 is 1.5 units below the pI: the protein has gained protons relative to its neutral state, net positive.\nStep 3: pH 7.3 is 0.5 unit above the pI: the protein has lost protons relative to its neutral state, net negative.\nStep 4: In electrophoresis it would migrate toward the negative electrode at 5.3 and toward the positive electrode at 7.3.",
      "note": "McMurry 26.2 (Amino Acids and the Henderson-Hasselbalch Equation: Isoelectric Points) sets this as Problem 26-4 and states the rule it uses: proteins have an overall pI from the cumulative effect of their acidic and basic amino acids, are negatively charged (deprotonated) when the buffer pH is above their pI and positively charged (protonated) when it is below, with lysozyme (pI 11.0) and pepsin (pI about 1.0) as the extremes and solubility usually lowest at the pI.",
      "options": {
        "A": "Correct. Below the pI the protein is protonated and cationic; above it, deprotonated and anionic.",
        "B": "This has the signs backwards. Lowering the pH means more protons on the protein, hence a positive charge; raising it means fewer protons, hence a negative charge.",
        "C": "Every protein has both acidic and basic residues, and the sign of the net charge depends on the pH relative to the pI, not on the presence of basic residues. Above 6.8 hemoglobin's carboxylates outnumber its remaining cations.",
        "D": "Net charge is zero only at the pI itself, 6.8. A pH on either side gives a net charge of the corresponding sign; that is what electrophoresis exploits."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q12_aspartic_acid_at_pi",
    "topic": "Amino Acids and the Henderson-Hasselbalch Equation: Isoelectric Points",
    "difficulty_level": "Hard",
    "question_text": "Aspartic acid has pKa values of 1.88 (alpha-CO2H), 3.65 (side-chain CO2H) and 9.60 (alpha-NH3+), and pI 2.77. Which form predominates at its isoelectric point?",
    "options": [
      {
        "option_id": "A",
        "text": "Alpha-CO2- deprotonated, side-chain CO2H still protonated, NH3+ protonated: the zwitterion with net charge zero",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Both carboxyl groups deprotonated and NH3+ protonated: net charge -1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both carboxyl groups protonated and NH3+ protonated: net charge +1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Side-chain CO2- deprotonated, alpha-CO2H still protonated, NH3+ protonated",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "At the isoelectric point the dominant species is the one with no net charge, and for aspartic acid that means exactly one of the two carboxyl groups is deprotonated to balance the NH3+. Which one is decided by the pKa values: the alpha-carboxyl (1.88) is the stronger acid, because the adjacent ammonium ion withdraws electrons, so it loses its proton first; the side-chain carboxyl (3.65), one carbon further from the ammonium, holds its proton until higher pH. The pI of 2.77 is the average of those two values, and there the alpha-carboxylate, the side-chain acid and the ammonium are all present in one molecule.",
      "approach": "Step 1: The pI (2.77) is the average of 1.88 and 3.65, so it lies between the two carboxyl dissociations and well below the NH3+ dissociation.\nStep 2: Below 9.60 the amino group is NH3+.\nStep 3: Above 1.88 the alpha-carboxyl is CO2-; below 3.65 the side-chain carboxyl is CO2H.\nStep 4: The species is therefore +H3N-CH(CH2CO2H)-CO2-, net zero. The isomeric form with the side chain deprotonated and the alpha acid protonated is the wrong tautomer: the alpha acid is the stronger of the two.",
      "note": "McMurry 26.2 (Amino Acids and the Henderson-Hasselbalch Equation: Isoelectric Points) states that the two acidic amino acids have isoelectric points at lower pH so that deprotonation of the side-chain CO2H does not occur at their pI, and that their pI is the average of the two lowest pKa values; the values (1.88, 3.65, 9.60, pI 2.77) are Table 26.1 in McMurry 26.1. The alpha-carboxyl being the stronger acid is the inductive effect of the adjacent ammonium ion, the same reason every amino acid's alpha-CO2H (pKa about 2) is far more acidic than acetic acid (4.76, McMurry 20.3).",
      "options": {
        "A": "Correct. Between pKa 1.88 and 3.65 the alpha-carboxyl has lost its proton and the side-chain carboxyl has not; with the NH3+ that is the neutral zwitterion.",
        "B": "Both carboxylates plus one ammonium gives a net charge of -1, the species that predominates between pH 3.65 and 9.60. At the pI (2.77) the side-chain acid is still protonated.",
        "C": "The fully protonated cation predominates only below pH 1.88. At 2.77 the alpha-carboxyl, the stronger acid, has already lost its proton.",
        "D": "The net charge would be zero, but this is the wrong tautomer: the alpha-carboxyl (pKa 1.88) is the stronger acid and loses its proton first, so at 2.77 it is the alpha group that is deprotonated and the side chain that still carries H."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q13_hvz_amination_scheme",
    "topic": "Synthesis of Amino Acids",
    "difficulty_level": "Medium",
    "question_text": "3-Methylbutanoic acid is treated with Br2 and PBr3, and the product is then heated with a large excess of ammonia. What is the amino acid obtained?",
    "reaction_scheme": {
      "reactants": [
        "CC(C)CC(=O)O"
      ],
      "reagents": "1. Br2, PBr3; 2. NH3 (large excess)",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A four-carbon chain with a methyl branch on the third carbon and a CO2H at the end: 3-methylbutanoic acid."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Valine (racemic)",
        "smiles": "CC(C)C(N)C(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Leucine (racemic)",
        "smiles": "CC(C)CC(N)C(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-Amino-3-methylbutanoic acid",
        "smiles": "CC(C)(N)CC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Bromo-3-methylbutanoic acid (racemic)",
        "smiles": "CC(C)C(Br)C(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The oldest amino acid synthesis is two familiar reactions in sequence. The Hell-Volhard-Zelinskii reaction (Br2 with PBr3) brominates a carboxylic acid at its alpha carbon only, through the acid bromide's enol. Ammonia then displaces the alpha bromide by SN2, and the large excess keeps the primary amine product from competing as a nucleophile. The carbon skeleton of the acid is the skeleton of the amino acid: the alpha carbon of the acid becomes the alpha carbon bearing NH2, so the side chain is whatever was attached to that carbon. The new stereocentre forms both ways: the product is racemic.",
      "approach": "Step 1: Identify the alpha carbon of 3-methylbutanoic acid: the CH2 between the CO2H and the CH(CH3)2.\nStep 2: HVZ bromination puts Br on that carbon: 2-bromo-3-methylbutanoic acid.\nStep 3: Ammonia displaces the bromide by SN2 at the secondary alpha carbon: 2-amino-3-methylbutanoic acid.\nStep 4: The side chain on the alpha carbon is isopropyl, so the product is valine, as a racemate because the SN2 attacks a racemic bromide. Leucine would need one more carbon, 4-methylpentanoic acid.",
      "note": "McMurry 26.3 (Synthesis of Amino Acids) gives this as one of the oldest methods: alpha bromination of a carboxylic acid with Br2 and PBr3 (the Hell-Volhard-Zelinskii reaction, 22.4) followed by SN2 substitution of the alpha-bromo acid with ammonia, and sets Problem 26-5 asking for the starting acids for phenylalanine and valine. The section also states that any synthesis from an achiral precursor gives a racemic mixture, so the pure S enantiomer needs resolution or an enantioselective route.",
      "options": {
        "A": "Correct. Alpha bromination then SN2 by ammonia puts NH2 on the carbon next to CO2H, whose substituent is isopropyl: valine, racemic.",
        "B": "Leucine's side chain is isobutyl, one carbon longer. It would come from 4-methylpentanoic acid; the alpha carbon of 3-methylbutanoic acid carries an isopropyl group.",
        "C": "The HVZ reaction brominates the alpha carbon, not the tertiary beta carbon, so the amine ends up alpha to the carboxyl. A beta-amino acid cannot arise from this sequence.",
        "D": "The alpha-bromo acid is the intermediate after step 1. Excess ammonia in step 2 displaces the bromide, so the isolated product is the amino acid, not the bromide."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q14_amidomalonate_halide_leucine",
    "topic": "Synthesis of Amino Acids",
    "difficulty_level": "Medium",
    "question_text": "Which alkyl halide is used to prepare leucine by the amidomalonate synthesis (alkylation of diethyl acetamidomalonate, then aqueous acid and heat)?",
    "options": [
      {
        "option_id": "A",
        "text": "1-Bromo-2-methylpropane, (CH3)2CHCH2Br",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Bromopropane, (CH3)2CHBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Bromobutane, CH3CH2CH2CH2Br",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Bromo-3-methylbutane, (CH3)2CHCH2CH2Br",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The amidomalonate synthesis is the malonic ester synthesis with an acetamido group already on the central carbon. The enolate of diethyl acetamidomalonate is alkylated by SN2 with a primary halide, and aqueous acid then hydrolyses the amide and both esters, after which the malonic acid decarboxylates. The alkyl group introduced becomes the side chain, attached to what becomes the alpha carbon. So the halide is chosen by removing the alpha carbon's NH2 and CO2H from the target and putting a bromine where the side chain joined: leucine's side chain is isobutyl, so the halide is isobutyl bromide.",
      "approach": "Step 1: Write leucine: (CH3)2CHCH2-CH(NH2)CO2H. The side chain is (CH3)2CHCH2, isobutyl.\nStep 2: The halide is side chain plus Br: (CH3)2CHCH2Br, 1-bromo-2-methylpropane, a primary halide suited to SN2.\nStep 3: Alkylation gives the acetamidomalonate with an isobutyl group on the central carbon; acid hydrolysis and decarboxylation leave that carbon with NH2, CO2H, H and isobutyl.\nStep 4: Check the alternatives: isopropyl bromide would give valine (and is a poor SN2 substrate), butyl bromide norleucine, isopentyl bromide a five-carbon side chain (homoleucine).",
      "note": "McMurry 26.3 (Synthesis of Amino Acids) presents the amidomalonate synthesis as a straightforward extension of the malonic ester synthesis (22.7): enolate formation from diethyl acetamidomalonate, SN2 alkylation with a primary alkyl halide, hydrolysis of the amide protecting group and the esters on warming with aqueous acid, then decarboxylation to the alpha-amino acid, with aspartic acid from ethyl bromoacetate as the example; Problem 26-6 asks for the halides for leucine, histidine, tryptophan and methionine. The route gives a racemate.",
      "options": {
        "A": "Correct. Isobutyl bromide installs the (CH3)2CHCH2 side chain on the future alpha carbon, and hydrolysis with decarboxylation completes leucine.",
        "B": "Isopropyl bromide would give valine, whose side chain is isopropyl, and as a secondary halide it alkylates the stabilised enolate poorly. Leucine needs the branch one carbon out.",
        "C": "1-Bromobutane gives a straight four-carbon side chain, norleucine, which is not a protein amino acid. Leucine's side chain is branched.",
        "D": "A five-carbon isopentyl side chain gives homoleucine, one CH2 too many. Leucine's side chain has four carbons."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q15_amidomalonate_acid_step",
    "topic": "Synthesis of Amino Acids",
    "difficulty_level": "Medium",
    "question_text": "After diethyl acetamidomalonate has been alkylated with benzyl bromide, the product is warmed with aqueous acid to give phenylalanine. What happens in that step?",
    "options": [
      {
        "option_id": "A",
        "text": "The acetamide and both esters are hydrolysed, and the resulting aminomalonic acid loses CO2 to leave a single carboxyl group",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Only the two esters are hydrolysed; the product is an N-acetyl aminomalonic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The acetyl group migrates from nitrogen to the benzylic carbon",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both ester groups are reduced to CH2OH and one is then oxidised back",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The alkylated acetamidomalonate carries three groups that hot aqueous acid attacks: two ester groups and an amide. All three are hydrolysed, giving a free amine and a malonic acid with the benzyl group and NH2 on its central carbon. A malonic acid decarboxylates on heating through a six-membered cyclic transition state, exactly as in the malonic ester synthesis, and the one remaining CO2H is the amino acid's carboxyl. The acetamido group was there to protect the nitrogen during the alkylation and to acidify the central C-H; it is removed in the same step that frees the acid.",
      "approach": "Step 1: Aqueous acid and heat hydrolyse each ethyl ester to CO2H, and the acetamide to NH3+ plus acetic acid.\nStep 2: The intermediate is 2-amino-2-benzylmalonic acid, a substituted malonic acid.\nStep 3: Heating decarboxylates it: one CO2H is lost as CO2 through the cyclic transition state, the enol tautomerises, and the alpha carbon now carries H, NH2, CO2H and the benzyl side chain.\nStep 4: The product is phenylalanine, racemic, because the decarboxylation creates the alpha stereocentre by protonation of a planar enol.",
      "note": "McMurry 26.3 (Synthesis of Amino Acids) states that in the amidomalonate synthesis hydrolysis of both the amide protecting group and the esters occurs when the alkylated product is warmed with aqueous acid, and decarboxylation then takes place to yield an alpha-amino acid; the decarboxylation of a substituted malonic acid is McMurry 22.7, and amide hydrolysis McMurry 21.7. Benzyl bromide as the halide gives phenylalanine; Problem 26-6 asks for the halides for four others.",
      "options": {
        "A": "Correct. Hot aqueous acid hydrolyses the amide and both esters, and the aminomalonic acid then decarboxylates to the alpha-amino acid.",
        "B": "Amides are hydrolysed by hot aqueous acid as well as esters, so the acetyl group does not survive; and the malonic acid formed does not stop there but decarboxylates on heating.",
        "C": "There is no acyl migration. The acetyl group leaves as acetic acid when the amide is hydrolysed; carbon-carbon bond formation in this route happens only in the alkylation step.",
        "D": "Aqueous acid is not a reducing agent. The esters are hydrolysed to acids, not reduced, and the carbon that leaves does so as CO2, not by oxidation of an alcohol."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q16_reductive_amination_scheme",
    "topic": "Synthesis of Amino Acids",
    "difficulty_level": "Medium",
    "question_text": "Pyruvic acid is treated with ammonia in the presence of NaBH4. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)C(=O)O"
      ],
      "reagents": "NH3, NaBH4",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A three-carbon chain: a methyl, a ketone carbonyl, and a CO2H: pyruvic acid."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Alanine (racemic)",
        "smiles": "CC(N)C(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Lactic acid (racemic)",
        "smiles": "CC(O)C(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Aminopropan-1-ol (racemic)",
        "smiles": "CC(N)CO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Oxopropanamide",
        "smiles": "CC(=O)C(N)=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Reductive amination converts a carbonyl group into an amine in one pot: the amine (here ammonia) condenses with the ketone to an imine, and a hydride reducing agent reduces the C=N faster than it reduces the C=O, so the amine is delivered where the carbonyl was. Applied to an alpha-keto acid the product is an alpha-amino acid, and the carboxylic acid is untouched: NaBH4 does not reduce acids, and ammonia does not form an amide with an acid under these mild conditions. The stereocentre is created by hydride addition to a planar imine, so the amino acid is racemic. This is also how cells make alanine from pyruvate, with a transaminase rather than NaBH4.",
      "approach": "Step 1: Ammonia adds to the ketone carbonyl of pyruvic acid (the more electrophilic of its two carbonyls) and loses water to give the imine CH3C(=NH)CO2H.\nStep 2: NaBH4 reduces the imine C=N to C-N, adding hydride to carbon.\nStep 3: The product is 2-aminopropanoic acid, alanine, as a racemate.\nStep 4: The carboxyl survives: hydride does not reduce a carboxylic acid, so no amino alcohol forms, and in the absence of the amine the same reagent would give lactic acid instead.",
      "note": "McMurry 26.3 (Synthesis of Amino Acids) gives this exact example: alanine is prepared by treatment of pyruvic acid with ammonia in the presence of NaBH4, by reductive amination of an alpha-keto acid through an intermediate imine that is then reduced (24.6). The section adds that, like the HVZ and amidomalonate routes, this gives a racemic mixture from an achiral precursor. The biological version, transamination with pyridoxal phosphate, appears in McMurry 29.9.",
      "options": {
        "A": "Correct. Imine formation at the ketone and hydride reduction of the C=N give the amine on the alpha carbon; the acid is untouched, and the product is racemic alanine.",
        "B": "Lactic acid is what NaBH4 gives pyruvic acid when no amine is present: reduction of the ketone to an alcohol. With ammonia the imine forms and is reduced preferentially, delivering nitrogen rather than oxygen.",
        "C": "NaBH4 does not reduce carboxylic acids, so the CO2H survives; reducing it to CH2OH would need LiAlH4 and would give alaninol, not an amino acid.",
        "D": "An amide from an acid and ammonia needs activation (an acid chloride, DCC, or strong heating); under these conditions ammonia reacts at the ketone, not at the acid, and the ketone is reduced."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q17_enantioselective_hydrogenation",
    "topic": "Synthesis of Amino Acids",
    "difficulty_level": "Hard",
    "question_text": "Knowles prepared (S)-phenylalanine in 98.7% enantiomeric purity by hydrogenating a Z enamido acid over a rhodium complex bearing the chiral diphosphine DiPAMP. Why does the product come out as mainly one enantiomer?",
    "options": [
      {
        "option_id": "A",
        "text": "The chiral ligand holds the substrate in a chiral environment on the metal, so hydrogen is delivered to one face of the C=C much faster than to the other",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The catalyst hydrogenates both enantiomers of the racemic substrate but destroys the R product selectively",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The Z enamido acid is itself chiral, and hydrogenation retains its configuration",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Rhodium is chiral, and its handedness is transferred to the product",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A racemate forms when a planar, achiral intermediate reacts equally on both faces. Enantioselective synthesis breaks that symmetry with a chiral catalyst: the substrate binds to the metal inside the chiral ligand's environment, the two faces of the C=C are no longer equivalent, and hydrogen adds through a lower-energy transition state on one face. The substrate itself (an achiral enamide) and the product-forming step are ordinary; the enantiomeric excess comes entirely from the diastereomeric transition states created by the chiral catalyst. Rhodium is not chiral; the DiPAMP ligand is, because each phosphorus carries three different groups and does not invert.",
      "approach": "Step 1: The substrate, a Z 2-acetamidocinnamic acid, is achiral and planar at the alkene; uncatalysed hydrogenation would give racemic N-acetylphenylalanine.\nStep 2: The enamide binds to the Rh(I) centre through its alkene and its amide carbonyl, inside the pocket set by the (R,R)-DiPAMP ligand.\nStep 3: In that pocket the two faces of the alkene face different environments; hydrogen transfer to one face has a lower transition-state energy and dominates.\nStep 4: The result is (S)-N-acetylphenylalanine with 98.7% S and 1.3% R; hydrolysis of the acetamide gives (S)-phenylalanine.",
      "note": "McMurry 26.3 (Synthesis of Amino Acids) explains that syntheses from achiral precursors give racemates, that the pure S enantiomer can be obtained by resolution (5.8) or, more directly, by an enantioselective synthesis using a chiral catalyst that temporarily holds the substrate in an unsymmetrical, chiral environment so that it is more open to reaction on one side, and describes Knowles' 1968 discovery: hydrogenation of a Z enamido acid with a chiral rhodium catalyst gives (S)-phenylalanine at 98.7% purity, the best catalysts being Rh(I) complexes of 1,5-cyclooctadiene and the DiPAMP diphosphine, chiral at its trisubstituted phosphorus atoms (5.10); Knowles shared the 2001 Nobel Prize.",
      "options": {
        "A": "Correct. The chiral phosphine ligand makes the two faces of the bound alkene diastereotopic, and hydrogen adds preferentially to the face that gives the S product.",
        "B": "The substrate is achiral, so there is no racemate to sort through, and hydrogenation creates the stereocentre rather than destroying one enantiomer. This describes a kinetic resolution, which is not what happens here.",
        "C": "A Z alkene has geometry, not chirality; the enamido acid is planar and achiral. The stereocentre is created in the hydrogenation step, and its configuration is set by the catalyst, not inherited.",
        "D": "A metal atom is not chiral by itself. The chirality of the catalyst lives in the DiPAMP ligand, whose two phosphorus atoms are stereocentres that do not invert, unlike amine nitrogen."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q18_dipeptide_ala_ser",
    "topic": "Peptides and Proteins",
    "difficulty_level": "Medium",
    "question_text": "Name the dipeptide shown, using the convention that the N-terminal residue is written first.",
    "question_smiles": "C[C@H](N)C(=O)N[C@@H](CO)C(=O)O",
    "structure_alt": "Two amino acid residues joined by an amide bond: the residue with a free NH2 carries a methyl side chain, and its carbonyl is bonded to the nitrogen of a second residue that carries a CH2OH side chain and the free CO2H.",
    "options": [
      {
        "option_id": "A",
        "text": "Ala-Ser (alanylserine)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ser-Ala (serylalanine)",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ala-Thr (alanylthreonine)",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Gly-Ser (glycylserine)",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two amino acids can form two different dipeptides, depending on which one supplies the carboxyl and which the amine for the amide bond. By convention the peptide is written and named from the N-terminal residue, the one that keeps a free amino group, to the C-terminal residue, the one that keeps a free carboxyl, and the N-terminal residue's name takes the -yl ending. The drawn compound has the methyl residue at the free-amine end and the CH2OH residue at the free-carboxyl end, so it is alanylserine, Ala-Ser, not serylalanine.",
      "approach": "Step 1: Find the free NH2. It sits on the carbon whose side chain is CH3: that residue is alanine and it is N-terminal.\nStep 2: Follow alanine's carbonyl to the amide nitrogen; the next alpha carbon carries CH2OH and the free CO2H: serine, C-terminal.\nStep 3: Name N to C: alanylserine, abbreviated Ala-Ser or A-S.\nStep 4: The isomer with serine's carbonyl bonded to alanine's nitrogen would be Ser-Ala; threonine would need CH(OH)CH3, and glycine no side chain at all.",
      "note": "McMurry 26.4 (Peptides and Proteins) uses exactly this pair: alanylserine is the dipeptide formed when an amide bond joins the alanine carboxyl and the serine amino group, serylalanine forms if the alanine amino group reacts with the serine carboxyl, and peptides are written with the N-terminal residue (free NH3+) on the left and the C-terminal residue (free CO2-) on the right, Ala-Ser or A-S. Problem 26-8 asks for the six tripeptides of Val, Tyr and Gly, and Problem 26-9 for the structure of M-P-V-G.",
      "options": {
        "A": "Correct. The free amine is on the alanine residue and the free carboxyl on the serine residue, so the peptide reads Ala-Ser.",
        "B": "Ser-Ala is the other dipeptide from the same two amino acids, with serine's carbonyl bonded to alanine's nitrogen and the free NH2 on serine. Here the free NH2 is on the methyl-bearing residue.",
        "C": "Threonine's side chain is CH(OH)CH3, a secondary alcohol with an extra methyl. The C-terminal residue drawn has CH2OH, which is serine.",
        "D": "Glycine has no side chain. The N-terminal residue drawn carries a methyl group, which makes it alanine."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q19_planar_peptide_bond",
    "topic": "Peptides and Proteins",
    "difficulty_level": "Medium",
    "question_text": "The C-N bond of a peptide (amide) link is planar, with restricted rotation, and the amide nitrogen is not basic. What single feature explains all three observations?",
    "options": [
      {
        "option_id": "A",
        "text": "The nitrogen lone pair is delocalised onto the carbonyl oxygen, giving the C-N bond partial double-bond character",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The nitrogen is sp3-hybridised and hydrogen-bonded to the carbonyl oxygen of the same residue",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Steric crowding by the two alpha carbons locks the bond",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The carbonyl carbon is sp3-hybridised in an amide",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An amide is not an amine next to a ketone; the nitrogen lone pair overlaps with the carbonyl pi system, so the resonance form with a C=N double bond and a negative oxygen contributes substantially. Three consequences follow at once. The nitrogen lone pair is tied up, so the nitrogen is not basic and not nucleophilic. The C-N bond has partial double-bond character, so rotation about it costs about 75 kJ/mol and the six atoms of the amide (the alpha carbon, C, O, N, H and the next alpha carbon) lie in a plane. And the preferred arrangement places the N-H anti to the C=O, which is the trans peptide bond found in proteins. Peptide chains therefore flex only at the bonds on either side of each rigid amide plane.",
      "approach": "Step 1: Draw the two resonance forms of the amide: the neutral form and the one with C=N+ and O-.\nStep 2: The second form requires the nitrogen to be planar and sp2, with its lone pair in a p orbital overlapping the carbonyl.\nStep 3: A bond with partial double-bond character resists rotation, so the amide group is planar and the N-H sits 180° from the C=O.\nStep 4: A lone pair committed to resonance is not available to a proton, so amide nitrogens have conjugate-acid pKa values near zero rather than near 10.",
      "note": "McMurry 26.4 (Peptides and Proteins) states that the amide bond in peptides is no different from any other amide bond (24.3): the amide nitrogen is nonbasic because its unshared electron pair is delocalised by resonance with the carbonyl group, the overlap of the nitrogen p orbital with the carbonyl p orbitals imparts double-bond character to the C-N bond and restricts rotation around it, and the amide bond is therefore planar with the N-H oriented 180° to the C=O. This rigidity is what makes the alpha helix and beta sheet of McMurry 26.9 possible.",
      "options": {
        "A": "Correct. Resonance donation of the nitrogen lone pair into the carbonyl accounts for the planarity, the rotational barrier and the loss of basicity together.",
        "B": "The amide nitrogen is sp2, not sp3, and an N-H cannot hydrogen-bond to the carbonyl oxygen of its own amide (the geometry is wrong). Hydrogen bonds between different residues stabilise secondary structure, but they are not what makes the bond planar.",
        "C": "Sterics would not remove the nitrogen's basicity, and formamide, with no alpha carbons at all, has the same planar, restricted amide bond. The barrier is electronic.",
        "D": "The carbonyl carbon of an amide is sp2, as in every carbonyl compound. It is the nitrogen that changes character, becoming sp2 so its lone pair can conjugate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q20_disulfide_crosslink",
    "topic": "Peptides and Proteins",
    "difficulty_level": "Easy",
    "question_text": "Insulin consists of two peptide chains, 51 residues in all, held together by covalent bridges. Which amino acid forms those bridges, and how?",
    "options": [
      {
        "option_id": "A",
        "text": "Cysteine: two side-chain SH groups are oxidised to an S-S disulfide bond, which mild reduction cleaves again",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methionine: two thioether side chains couple to a disulfide",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Lysine: its side-chain amine forms an amide with a glutamate side chain",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Serine: two side-chain OH groups form a peroxide link",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Besides the peptide bonds of the backbone, the only covalent link commonly found between residues is the disulfide, and only cysteine can make one. Mild oxidation (air, or a disulfide-exchange enzyme in the cell) joins two thiols into RS-SR with loss of two hydrogens, and mild reduction (thiols such as mercaptoethanol, or dithiothreitol) reverses it. A disulfide between two chains ties them together, as the two bridges in insulin do; a disulfide within one chain closes a loop. Methionine, the other sulfur amino acid, is a thioether with no S-H and cannot be oxidised to a disulfide.",
      "approach": "Step 1: Identify residues with a group that can form a covalent cross-link under physiological conditions: the thiol of cysteine.\nStep 2: Two Cys-SH groups on different chains lose two hydrogens to an oxidant and form Cys-S-S-Cys, the cystine unit.\nStep 3: The bridge holds insulin's A and B chains together; reduction with a thiol reagent separates them, which is why disulfides are reduced before amino acid analysis (26.5).\nStep 4: Lysine-glutamate salt bridges and hydrogen bonds are ionic or polar attractions, not covalent bonds; they stabilise tertiary structure but do not covalently join chains.",
      "note": "McMurry 26.4 (Peptides and Proteins) describes the second kind of covalent bonding in peptides, the disulfide linkage RS-SR formed between two cysteine residues by mild oxidation of a thiol and cleaved by mild reduction (18.7), which links separate chains or forms a loop within one chain, and gives insulin, two chains totalling 51 amino acids linked by two cysteine disulfide bridges, as the example. Its three-dimensional structure was determined by Dorothy Crowfoot Hodgkin (McMurry 26.7).",
      "options": {
        "A": "Correct. Oxidative coupling of two cysteine thiols gives the disulfide bridge that ties insulin's chains together; reduction opens it.",
        "B": "Methionine's sulfur is a thioether, bonded to two carbons with no S-H. It cannot lose hydrogen to form a disulfide; only cysteine's thiol can.",
        "C": "A lysine-glutamate pair forms a salt bridge, an ionic attraction between NH3+ and CO2-, not an amide; amide formation between side chains does not occur in proteins under physiological conditions. Salt bridges stabilise folding but are not covalent.",
        "D": "Serine hydroxyls do not form peroxides in proteins; O-O bonds are far too reactive. Serine side chains hydrogen-bond and are phosphorylated, but they make no cross-links."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q21_cysteine_iodoacetic_acid",
    "topic": "Amino Acid Analysis of Peptides",
    "difficulty_level": "Medium",
    "question_text": "Before amino acid analysis, a peptide's disulfides are reduced and the free cysteine residues are treated with iodoacetic acid. What is the product at each cysteine?",
    "options": [
      {
        "option_id": "A",
        "text": "S-Carboxymethylcysteine: the thiolate displaces iodide by SN2 to give a thioether, CH2SCH2CO2H",
        "smiles": "OC(=O)CSC[C@H](N)C(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "N-Carboxymethylcysteine: the amine is alkylated instead of the thiol",
        "smiles": "OC(=O)CN[C@@H](CS)C(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cystine: the thiols are re-oxidised to the disulfide",
        "smiles": "N[C@@H](CSSC[C@H](N)C(=O)O)C(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "S-Acetylcysteine: a thioester forms with the acid",
        "smiles": "CC(=O)SC[C@H](N)C(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A thiol is a far better nucleophile than an amine or an alcohol, especially as its thiolate, and iodoacetic acid is a primary alkyl iodide with an excellent leaving group. The SN2 reaction therefore alkylates sulfur, converting each cysteine SH into a stable S-carboxymethyl thioether. The point of the step is preservation: a free thiol would re-oxidise to a disulfide or degrade during the 24-hour hydrolysis in 6 M HCl, so it is capped as a thioether that survives, and S-carboxymethylcysteine then elutes as its own peak in the analysis. Iodoacetic acid reacts as an alkyl halide here, not as an acid, so no ester or thioester forms.",
      "approach": "Step 1: Reduce every disulfide to free thiols so each cysteine is counted individually.\nStep 2: Identify the electrophile in ICH2CO2H: the CH2-I carbon, a primary SN2 site; the carboxyl is a spectator.\nStep 3: The cysteine thiolate attacks that carbon and expels iodide: Cys-CH2-S-CH2-CO2H, a thioether.\nStep 4: The amino group is a weaker nucleophile than the thiolate and is protonated under the conditions, so N-alkylation does not compete; the alpha stereocentre is untouched and remains R.",
      "note": "McMurry 26.5 (Amino Acid Analysis of Peptides) states that in preparation for analysis the peptide is broken into its amino acids by reducing all disulfide bonds, capping the SH groups of cysteine residues by SN2 reaction with iodoacetic acid, and hydrolysing the amide bonds by heating with aqueous 6 M HCl at 110 °C for 24 hours; Problem 26-10 asks for the product of the cysteine reaction. The thiolate SN2 is the thiol chemistry of McMurry 18.7 and the SN2 reaction of McMurry 11.2.",
      "options": {
        "A": "Correct. The thiolate is the nucleophile and the CH2-I carbon the electrophile; SN2 gives the S-carboxymethyl thioether, which survives acid hydrolysis.",
        "B": "The amine is both a weaker nucleophile than the thiolate and protonated under the conditions, so alkylation goes on sulfur. N-Alkylation would also leave the thiol free to re-oxidise, defeating the purpose.",
        "C": "Cystine is the disulfide that the reduction step has just removed. Iodoacetic acid is an alkylating agent, not an oxidant, and the whole point of the capping is to prevent the thiols from re-forming this bond.",
        "D": "A thioester would need the carboxyl to be activated (an acid chloride or anhydride). Iodoacetic acid reacts through its C-I bond as an alkyl halide, and the acid group is carried along unchanged."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q22_edman_degradation",
    "topic": "Peptide Sequencing: The Edman Degradation",
    "difficulty_level": "Medium",
    "question_text": "In one cycle of the Edman degradation, a peptide is treated with phenyl isothiocyanate and then with trifluoroacetic acid. What is removed, and how is it identified?",
    "options": [
      {
        "option_id": "A",
        "text": "The N-terminal residue only, released as a thiazolinone that rearranges to a phenylthiohydantoin (PTH), identified by its elution time",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The C-terminal residue only, released as a free amino acid and identified with ninhydrin",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "All the residues at once, hydrolysed and separated by chromatography",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "One residue chosen at random along the chain, identified by mass spectrometry",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Edman degradation reads a sequence one residue at a time from the amino end. The free N-terminal NH2 is the only amine in the chain that is not an amide, and it is the one that adds to the C=S of phenyl isothiocyanate to give a thiourea. Trifluoroacetic acid then lets the thiourea sulfur attack the adjacent amide carbonyl, cyclising and cleaving off the first residue as an anilinothiazolinone while the rest of the chain, one residue shorter, is left intact with a new N-terminus. Aqueous acid rearranges the thiazolinone to the more stable phenylthiohydantoin, whose chromatographic elution time identifies which amino acid it came from. The shortened peptide goes round again, up to about 50 times.",
      "approach": "Step 1: Recognise the selective handle: the N-terminal amino group is the one nucleophilic amine in the peptide.\nStep 2: PITC attaches there as a phenylthiourea; internal amide nitrogens do not react.\nStep 3: TFA cleaves only the first peptide bond, because the thiourea sulfur is positioned to attack that carbonyl; the residue leaves as the ATZ derivative and the chain is shortened by one.\nStep 4: The ATZ rearranges in aqueous acid to the PTH, which is identified against the PTH derivatives of the twenty amino acids; the new N-terminus is submitted to the next cycle.",
      "note": "McMurry 26.6 (Peptide Sequencing: The Edman Degradation) describes the method as cleaving one amino acid at a time from an end of the chain: treatment with phenyl isothiocyanate, which attaches to the NH2 of the N-terminal amino acid, then trifluoroacetic acid, which splits the N-terminal residue off as an anilinothiazolinone (ATZ) plus the chain-shortened peptide, after which acid-catalysed rearrangement converts the ATZ into a phenylthiohydantoin (PTH) identified by its elution time (Figure 26.5); automated sequencers manage about 50 cycles on 1 to 5 picomoles. Mass spectrometry (ESI or MALDI-TOF, 12.4) is the other common sequencing method.",
      "options": {
        "A": "Correct. PITC marks the free N-terminal amine, TFA cleaves that residue off as the ATZ, and the PTH it rearranges to is identified chromatographically.",
        "B": "Edman chemistry works from the amino end: the reagent needs a free NH2 to form the thiourea, and the carboxyl end has none. The residue is identified as its PTH derivative, not with ninhydrin.",
        "C": "Complete hydrolysis followed by chromatography is amino acid analysis (26.5), which gives composition but not order. Edman degradation is sequential precisely so that the order is preserved.",
        "D": "The cleavage is specific to the first peptide bond, because the thiourea formed at the N-terminus can reach only that carbonyl. Random cleavage would give no sequence information."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q23_trypsin_angiotensin",
    "topic": "Peptide Sequencing: The Edman Degradation",
    "difficulty_level": "Medium",
    "question_text": "Angiotensin II has the sequence Asp-Arg-Val-Tyr-Ile-His-Pro-Phe. What fragments does trypsin produce?",
    "options": [
      {
        "option_id": "A",
        "text": "Asp-Arg and Val-Tyr-Ile-His-Pro-Phe",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Asp and Arg-Val-Tyr-Ile-His-Pro-Phe",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Asp-Arg-Val-Tyr and Ile-His-Pro-Phe",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Asp-Arg-Val-Tyr-Ile-His and Pro-Phe",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Enzymatic hydrolysis is selective in a way acid hydrolysis is not, and each protease has a rule. Trypsin cleaves the peptide bond on the carboxyl side of the basic residues arginine and lysine, so a chain is cut immediately after every Arg or Lys, with those residues ending up at the C-terminus of the fragment they were in. Chymotrypsin cuts on the carboxyl side of the aromatic residues phenylalanine, tyrosine and tryptophan. Angiotensin II has one arginine (position 2) and no lysine, so trypsin makes a single cut and two fragments; a residue at the very C-terminus, like this peptide's Phe, gives no cut because there is no bond after it.",
      "approach": "Step 1: Locate the trypsin sites: Arg at position 2; no Lys.\nStep 2: Cut on the carboxyl side of Arg, between Arg and Val.\nStep 3: Fragments: Asp-Arg (the dipeptide ending in the cleaved residue) and Val-Tyr-Ile-His-Pro-Phe.\nStep 4: For comparison, chymotrypsin would cut after Tyr (position 4) to give Asp-Arg-Val-Tyr and Ile-His-Pro-Phe; the C-terminal Phe has no bond after it to cleave.",
      "note": "McMurry 26.6 (Peptide Sequencing: The Edman Degradation) states that partial hydrolysis can be chemical (aqueous acid, unselective) or enzymatic and quite specific: trypsin catalyses hydrolysis of peptides only at the carboxyl side of the basic amino acids arginine and lysine, and chymotrypsin cleaves only at the carboxyl side of the aryl-substituted amino acids phenylalanine, tyrosine and tryptophan. Problem 26-12 asks for the trypsin and chymotrypsin fragments of angiotensin II, and Problem 26-14 for the PTH derivative from its Edman degradation (aspartic acid).",
      "options": {
        "A": "Correct. Trypsin cuts after arginine, the only basic residue, giving the dipeptide Asp-Arg and the hexapeptide that follows.",
        "B": "This cut is on the amino side of arginine. Trypsin's rule is the carboxyl side: the bond after Arg, so arginine stays attached to the aspartic acid.",
        "C": "A cut after tyrosine is chymotrypsin's work (aromatic residues), not trypsin's. Trypsin ignores tyrosine and cuts only after Arg or Lys.",
        "D": "Neither histidine nor proline is a trypsin site; histidine is basic but is not one of the two residues trypsin recognises. The only cut is after arginine."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q24_overlap_sequencing",
    "topic": "Peptide Sequencing: The Edman Degradation",
    "difficulty_level": "Hard",
    "question_text": "A hexapeptide contains Arg, Gly, Ile, Leu, Pro and Val. Partial acid hydrolysis gives the fragments Pro-Leu-Gly, Arg-Pro and Gly-Ile-Val. What is its sequence?",
    "options": [
      {
        "option_id": "A",
        "text": "Arg-Pro-Leu-Gly-Ile-Val",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Pro-Leu-Gly-Ile-Val-Arg",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Arg-Pro-Gly-Ile-Val-Leu",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Gly-Ile-Val-Arg-Pro-Leu",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A large peptide is sequenced by cutting it into fragments, sequencing each, and fitting the fragments together where their ends overlap: a residue that ends one fragment and begins another marks the join. Each fragment is written N to C, and the assembled sequence must contain every fragment as a contiguous run in that direction. With three fragments over six residues, two overlaps of one residue each fix the order completely.",
      "approach": "Step 1: Find residues shared between fragments: Pro ends Arg-Pro and starts Pro-Leu-Gly; Gly ends Pro-Leu-Gly and starts Gly-Ile-Val.\nStep 2: Join at Pro: Arg-Pro-Leu-Gly.\nStep 3: Join at Gly: Arg-Pro-Leu-Gly-Ile-Val.\nStep 4: Check: six residues, each used once, and all three fragments appear as contiguous N-to-C runs. Any other order breaks at least one fragment.",
      "note": "McMurry 26.6 (Peptide Sequencing: The Edman Degradation) explains that complete sequencing of a large protein by Edman degradation is impractical, so the chain is first cleaved by partial hydrolysis into smaller fragments, each fragment is sequenced, and the fragments are fitted together by matching their overlapping ends, which is how proteins of more than 400 residues have been sequenced. Problem 26-15(a) is this exact puzzle, and 26-15(b) the one-letter version (N, L, M, W, V2 with V-L, V-M-W, W-N-V).",
      "options": {
        "A": "Correct. Arg-Pro overlaps Pro-Leu-Gly at Pro, and Pro-Leu-Gly overlaps Gly-Ile-Val at Gly, giving Arg-Pro-Leu-Gly-Ile-Val.",
        "B": "Putting Arg at the C-terminus breaks the Arg-Pro fragment, which requires Arg immediately before Pro in the N-to-C direction.",
        "C": "This has Gly straight after Pro and Leu at the end, which breaks Pro-Leu-Gly (Leu must sit between Pro and Gly) and Gly-Ile-Val is no longer followed correctly either.",
        "D": "Read N to C this contains Arg-Pro and Gly-Ile-Val, but Pro-Leu-Gly appears only if the chain is cyclic; as a linear hexapeptide the Gly that starts it and the Gly in Pro-Leu-Gly would have to be two different glycines, and there is only one."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q25_pth_identification",
    "topic": "Peptide Sequencing: The Edman Degradation",
    "difficulty_level": "Easy",
    "question_text": "Edman degradation of a peptide gives a phenylthiohydantoin whose substituent on the ring carbon is CH2CH(CH3)2. What is the N-terminal residue?",
    "options": [
      {
        "option_id": "A",
        "text": "Leucine",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Isoleucine",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Valine",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Phenylalanine",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The PTH derivative is the N-terminal amino acid wrapped into a five-membered ring with the phenyl isothiocyanate carbon: the amino acid's nitrogen, its alpha carbon and its carbonyl carbon all become ring atoms, and its side chain stays attached to the alpha carbon as the ring's one substituent. Reading the side chain off the PTH therefore reads the amino acid. An isobutyl group, CH2CH(CH3)2 with the branch one carbon out, is leucine's side chain; the PTH is identified in practice by its elution time against the twenty standards, which is the same information.",
      "approach": "Step 1: The ring substituent of a PTH is the side chain of the cleaved residue, unchanged.\nStep 2: CH2CH(CH3)2 is an isobutyl group: a CH2, then a CH bearing two methyls.\nStep 3: Among the amino acids, isobutyl is leucine; sec-butyl (CH(CH3)CH2CH3) is isoleucine; isopropyl (CH(CH3)2) is valine; benzyl is phenylalanine.\nStep 4: So the N-terminal residue was leucine, and the chain-shortened peptide's new N-terminus is the second residue.",
      "note": "McMurry 26.6 (Peptide Sequencing: The Edman Degradation) explains that the phenylthiohydantoin formed from the N-terminal residue is identified by comparison of its elution time with the known elution times of PTH derivatives of the 20 common amino acids, and sets Problem 26-13 (which residue gives a drawn PTH) and Problem 26-14 (the PTH from angiotensin II, aspartic acid). The side chains themselves are Table 26.1 in McMurry 26.1; leucine and isoleucine are the pair most often confused, differing only in where the branch sits.",
      "options": {
        "A": "Correct. The PTH ring carries the residue's side chain, and an isobutyl group belongs to leucine.",
        "B": "Isoleucine's side chain is sec-butyl, CH(CH3)CH2CH3, branched at the first carbon with an ethyl. The given group is branched at the second carbon with two methyls.",
        "C": "Valine's side chain is isopropyl, CH(CH3)2, one carbon shorter with no CH2 spacer. The given group has a CH2 before the branch.",
        "D": "Phenylalanine's side chain is benzyl, CH2C6H5. The given group is saturated and branched; there is no ring."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q26_boc_fmoc_reagents",
    "topic": "Peptide Synthesis",
    "difficulty_level": "Medium",
    "question_text": "Which pairing of introduction and removal conditions is correct for the amine protecting groups used in peptide synthesis?",
    "options": [
      {
        "option_id": "A",
        "text": "Boc: put on with di-tert-butyl dicarbonate, taken off with trifluoroacetic acid. Fmoc: put on with Fmoc chloride, taken off with piperidine in DMF",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Boc: put on with tert-butyl chloride, taken off with piperidine. Fmoc: put on with Fmoc chloride, taken off with trifluoroacetic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both are put on with the corresponding chloroformate and both are taken off by catalytic hydrogenolysis",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Boc: put on with di-tert-butyl dicarbonate, taken off with aqueous NaOH. Fmoc: put on with Fmoc chloride, taken off with aqueous HCl",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Both groups convert the amine into a carbamate, which is no longer nucleophilic, and the two are chosen because they come off under opposite conditions. Boc (tert-butyloxycarbonyl) is installed by nucleophilic acyl substitution on di-tert-butyl dicarbonate and removed by acid: trifluoroacetic acid protonates the carbamate, the tert-butyl cation leaves (as isobutylene) and the carbamic acid loses CO2. Fmoc (fluorenylmethyloxycarbonyl) is installed with Fmoc chloride and removed by a mild base, 20% piperidine in DMF, which pulls the acidic fluorenyl C-H and triggers an E1cB elimination that releases dibenzofulvene, CO2 and the free amine. Orthogonal removal lets one be taken off while the other, or an ester, stays.",
      "approach": "Step 1: Boc on: amine attacks one carbonyl of (Boc)2O; the other Boc leaves as the tert-butyl carbonate, which breaks down to CO2 and tert-butoxide.\nStep 2: Boc off: CF3CO2H; the tert-butyl group departs as a stable tertiary cation and the carbamic acid decarboxylates.\nStep 3: Fmoc on: Fmoc-Cl, a chloroformate, acylates the amine.\nStep 4: Fmoc off: piperidine (base) removes the fluorenyl proton, beta-elimination expels the carbamate, which loses CO2 to free the amine. Acid does not touch Fmoc and base does not touch Boc.",
      "note": "McMurry 26.7 (Peptide Synthesis) states that amino groups are protected as their tert-butyloxycarbonyl amide (Boc) or, more commonly, as their fluorenylmethyloxycarbonyl amide (Fmoc); that Boc is introduced by reaction with di-tert-butyl dicarbonate in a nucleophilic acyl substitution and removed by brief treatment with a strong acid such as trifluoroacetic acid; and that Fmoc is introduced with fluorenylmethyloxycarbonyl chloride and removed with a 20% solution of piperidine in DMF. Problem 26-16 asks for the mechanism of Boc formation. Carboxyl groups are protected as methyl or benzyl esters in the same section.",
      "options": {
        "A": "Correct. Boc goes on with (Boc)2O and comes off with acid; Fmoc goes on with Fmoc-Cl and comes off with the base piperidine, so the two are orthogonal.",
        "B": "tert-Butyl chloride would alkylate the amine, not make a carbamate, and the removal conditions are swapped: Boc is acid-labile (TFA) and Fmoc is base-labile (piperidine).",
        "C": "Boc is introduced with the dicarbonate anhydride, and neither carbamate is removed by hydrogenolysis; that is how a benzyl ester or a Cbz group is cleaved. Boc needs acid and Fmoc needs base.",
        "D": "Boc is stable to aqueous base (that is what allows a methyl ester to be saponified beside it) and comes off with acid; Fmoc is stable to acid and comes off with base. The reagents are right and the removal conditions inverted."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q27_protecting_for_ala_leu",
    "topic": "Peptide Synthesis",
    "difficulty_level": "Medium",
    "question_text": "To synthesise the dipeptide Ala-Leu, which groups must be protected before the coupling step with DCC, and why?",
    "options": [
      {
        "option_id": "A",
        "text": "The amino group of alanine and the carboxyl group of leucine, so that the only amide that can form is between alanine's carboxyl and leucine's amine",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The carboxyl group of alanine and the amino group of leucine",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Nothing; DCC couples the two amino acids in the right order because alanine is smaller",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Only the side chains, since the backbone groups are the ones that must react",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Each amino acid carries both an amine and a carboxyl, so an unprotected mixture with a coupling agent gives every possible amide: Ala-Ala, Leu-Leu, Ala-Leu, Leu-Ala and longer chains. Specificity comes from blocking the groups that must not react. In Ala-Leu alanine is N-terminal, so its carboxyl must react and its amine must not; leucine is C-terminal, so its amine must react and its carboxyl must not. Protect alanine's NH2 (as Boc or Fmoc) and leucine's CO2H (as a methyl or benzyl ester), couple with DCC or EDC, then remove both protecting groups: five steps in all.",
      "approach": "Step 1: Read the target: Ala-Leu means alanine supplies the carbonyl of the amide and leucine the nitrogen.\nStep 2: Groups that must stay free: alanine CO2H, leucine NH2. Groups that must be blocked: alanine NH2 (Boc or Fmoc), leucine CO2H (methyl or benzyl ester).\nStep 3: DCC activates the free carboxyl of protected alanine, and the free amine of leucine ester attacks: Boc-Ala-Leu-OMe.\nStep 4: Remove Boc with TFA and the ester with NaOH (or H2/Pd for benzyl): Ala-Leu. Protecting the other pair of groups would give Leu-Ala instead.",
      "note": "McMurry 26.7 (Peptide Synthesis) states that the solution to the specificity problem is protection (17.8): to couple alanine with leucine to synthesise Ala-Leu, protect the NH2 group of alanine and the CO2H group of leucine, form the Ala-Leu amide bond with EDC or DCC (21.3), then remove the protecting groups, five steps in all; Problem 26-17 asks for the five steps for Leu-Ala, where the protection is reversed. The Merrifield method of McMurry 26.8 applies the same logic with the C-terminal carboxyl bound to the resin.",
      "options": {
        "A": "Correct. Blocking alanine's amine and leucine's carboxyl leaves alanine's carboxyl and leucine's amine as the only pair that can couple, which is the Ala-Leu bond.",
        "B": "Protecting alanine's carboxyl and leucine's amine leaves leucine's carboxyl to couple with alanine's amine, which gives Leu-Ala, the other dipeptide.",
        "C": "DCC activates any carboxyl and any amine can attack; without protection the product is a mixture of all four dipeptides and longer oligomers. Size does not direct the coupling.",
        "D": "Alanine and leucine have no reactive side chains. The problem is the backbone groups: each amino acid has one that must react and one that must not, and only protection tells them apart."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q28_benzyl_ester_hydrogenolysis",
    "topic": "Peptide Synthesis",
    "difficulty_level": "Hard",
    "question_text": "A dipeptide has been prepared as Boc-Ala-Leu-OCH2Ph. Which reagent removes the benzyl ester while leaving the Boc group intact?",
    "options": [
      {
        "option_id": "A",
        "text": "H2 over a palladium catalyst (hydrogenolysis), which cleaves the benzylic C-O bond to give the free acid and toluene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Trifluoroacetic acid, which hydrolyses the ester",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Piperidine in DMF, which cleaves benzyl esters by elimination",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Hot 6 M HCl, which hydrolyses the ester selectively",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Choosing a deprotection means matching each group to a condition the other groups survive. A benzyl ester has two exits: mild aqueous NaOH (saponification) and catalytic hydrogenolysis, in which H2 over Pd breaks the weak benzylic C-O bond to give the carboxylic acid and toluene. A Boc carbamate is stable to base and to hydrogenation but is cleaved by acid. So hydrogenolysis (or NaOH) takes off the benzyl ester and leaves Boc; trifluoroacetic acid would do the opposite, removing Boc and leaving the ester, since esters are not hydrolysed by anhydrous TFA at room temperature. Hot aqueous HCl removes everything, the peptide bond included.",
      "approach": "Step 1: List the labile groups: benzyl ester (base, or H2/Pd) and Boc (acid).\nStep 2: Find a condition in the first list that is absent from the second: hydrogenolysis, or mild NaOH.\nStep 3: H2/Pd cleaves PhCH2-O to give RCO2H and PhCH3; the carbamate, the amide and the stereocentres are untouched.\nStep 4: The product is Boc-Ala-Leu-OH, ready for coupling to the next amine; TFA afterwards would free the N-terminus instead.",
      "note": "McMurry 26.7 (Peptide Synthesis) states that carboxyl groups are protected as methyl or benzyl esters, easily removed by mild hydrolysis with aqueous NaOH, and that benzyl esters can also be cleaved by catalytic hydrogenolysis of the weak benzylic C-O bond, RCO2CH2Ph + H2 giving RCO2H + PhCH3, while Boc is removed by brief treatment with trifluoroacetic acid. Orthogonal protecting groups are the theme of McMurry 17.8. Benzyl ether cleavage by hydrogenolysis is the same reaction applied to an alcohol protecting group.",
      "options": {
        "A": "Correct. Hydrogenolysis breaks the benzylic C-O bond and releases the acid with toluene as the by-product, and a Boc carbamate is inert to H2/Pd.",
        "B": "Trifluoroacetic acid is the reagent that removes Boc; an ester survives it. This would give H-Ala-Leu-OCH2Ph, the opposite of what is wanted.",
        "C": "Piperidine removes Fmoc by beta-elimination of the fluorenyl C-H; a benzyl ester has no acidic beta-hydrogen and is stable to piperidine. There is no Fmoc group in this dipeptide.",
        "D": "Hot 6 M HCl hydrolyses the ester, the Boc carbamate and the peptide bond alike; it is the reagent for total hydrolysis before amino acid analysis (26.5), not a selective deprotection."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q29_merrifield_attachment",
    "topic": "Automated Peptide Synthesis: The Merrifield Solid-Phase Method",
    "difficulty_level": "Medium",
    "question_text": "In the Merrifield solid-phase method, how is the first (C-terminal) amino acid attached to the chloromethylated polystyrene resin, and what advantage does the solid support give?",
    "options": [
      {
        "option_id": "A",
        "text": "Its carboxylate displaces chloride from the benzylic CH2Cl by SN2, forming a benzyl ester; the growing peptide stays bonded to the insoluble beads, so excess reagents and by-products are simply washed away after every step",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Its amino group displaces chloride to form a benzylamine; the resin makes each coupling faster",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It is adsorbed ionically as its zwitterion; the resin acts as a catalyst for amide formation",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Its side chain forms an ether with the CH2Cl group; the resin protects the side chain",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Solution-phase peptide synthesis loses material at every isolation, and a chain of twenty residues needs dozens of them. Merrifield's idea was to anchor the C-terminal amino acid to insoluble polymer beads and build the chain outward from it: the chloromethyl group on about one benzene ring in a hundred is a benzylic halide, and the amino acid's carboxylate displaces the chloride by SN2 to make a benzyl ester, the same kind of carboxyl protecting group used in solution. Every subsequent coupling, washing and deprotection is done on the beads, so reagents can be used in excess and rinsed off, nothing is isolated until the end, and a robot can repeat the cycle. The finished peptide is released by cleaving the benzyl ester.",
      "approach": "Step 1: The resin bears benzylic CH2Cl groups, primary halides that are excellent SN2 substrates.\nStep 2: The N-protected (Boc or Fmoc) C-terminal amino acid, as its carboxylate, attacks the CH2 and expels chloride: a resin-bound benzyl ester.\nStep 3: Cycle: remove the N-protecting group, couple the next N-protected amino acid with DCC, wash; repeat. The peptide never leaves the beads.\nStep 4: At the end, cleave the ester (HF for the classic resin; TFA for the Wang resin with Fmoc chemistry) to release the peptide from the support.",
      "note": "McMurry 26.8 (Automated Peptide Synthesis: The Merrifield Solid-Phase Method) describes the original procedure: polystyrene resin with a chloromethyl group on about one benzene ring in a hundred, a Boc-protected C-terminal amino acid attached through an ester bond formed by SN2 reaction, then a repeating series of four steps to build the peptide; it notes that the Wang resin with Fmoc protection is now the common choice and PAM resin with Boc less so, that robotic synthesizers repeat the coupling, washing and deprotection steps, that yields are high and mechanical losses minimised because the intermediates are never removed from the polymer until the final step, and that 20-residue peptides are made in a few hours. Merrifield received the 1984 Nobel Prize.",
      "options": {
        "A": "Correct. The carboxylate makes a benzyl ester by SN2 on the benzylic chloride, and anchoring the chain to insoluble beads turns every purification into a wash.",
        "B": "The amino group is protected (Boc or Fmoc) when the amino acid is attached, precisely so that it cannot react; the link is an ester through the carboxyl. And the resin's benefit is purification, not rate.",
        "C": "The attachment is a covalent ester bond, not adsorption; ionic binding would let the chain wash off with the reagents. The resin is a support, not a catalyst; DCC or an active ester does the coupling.",
        "D": "The link is made through the backbone carboxyl, which is why the peptide grows from its C-terminus. Side chains that need protection get their own protecting groups; the resin does not serve that purpose."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q30_levels_of_structure",
    "topic": "Protein Structure",
    "difficulty_level": "Easy",
    "question_text": "The alpha helix and the beta-pleated sheet are examples of which level of protein structure?",
    "options": [
      {
        "option_id": "A",
        "text": "Secondary structure: the regular local pattern adopted by segments of the peptide backbone",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Primary structure: the sequence of amino acids",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Tertiary structure: the overall three-dimensional fold of the whole chain",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Quaternary structure: the assembly of several chains into one protein",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Protein structure is described at four levels. Primary is the covalent sequence, determined by sequencing. Secondary is the regular conformation of stretches of backbone, held by hydrogen bonds between backbone amide groups: the right-handed alpha helix (N-H to C=O four residues along the same chain) and the beta sheet (N-H to C=O between neighbouring strands, parallel or antiparallel). Tertiary is how the whole chain, helices and sheets included, folds into its compact shape, set by side-chain interactions. Quaternary is how separate chains associate, as in dimeric citrate synthase or tetrameric hemoglobin. Secondary, tertiary and quaternary structure are determined by NMR or X-ray crystallography.",
      "approach": "Step 1: Ask what the alpha helix describes: a local, repeating arrangement of the backbone, not the sequence and not the global fold.\nStep 2: That is the definition of secondary structure.\nStep 3: Distinguish from tertiary: myoglobin's tertiary structure is the way its eight helices pack together; each helix is secondary structure.\nStep 4: Distinguish from quaternary: hemoglobin's four myoglobin-like chains associating is quaternary structure.",
      "note": "McMurry 26.9 (Protein Structure) defines the four levels: primary structure is the amino acid sequence, secondary structure describes how segments of the peptide backbone orient into a regular pattern, tertiary structure how the entire protein coils into an overall three-dimensional shape, and quaternary structure how different protein molecules come together into aggregates; it gives the alpha helix (3.6 residues per turn, 540 pm pitch, hydrogen bonds to the C=O four residues away, myoglobin) and the beta-pleated sheet (extended chains, hydrogen bonds between adjacent chains, antiparallel favoured, concanavalin A) as the common secondary structures.",
      "options": {
        "A": "Correct. Helices and sheets are regular backbone conformations of segments of the chain, the definition of secondary structure.",
        "B": "Primary structure is the covalent sequence of residues, read by Edman degradation or mass spectrometry. It does not describe the shape the chain adopts.",
        "C": "Tertiary structure is the fold of the entire chain, including how its helices and sheets pack against each other. A single helix is one element of secondary structure within it.",
        "D": "Quaternary structure needs more than one polypeptide chain. A helix or sheet is a feature of one chain's backbone."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q31_alpha_helix_hbonds",
    "topic": "Protein Structure",
    "difficulty_level": "Medium",
    "question_text": "What holds an alpha helix in its coiled shape?",
    "options": [
      {
        "option_id": "A",
        "text": "Hydrogen bonds between the backbone N-H of one residue and the backbone C=O of the residue four positions earlier in the same chain",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Hydrogen bonds between the backbone N-H and C=O groups of neighbouring, side-by-side chains",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Disulfide bonds between cysteine residues one turn apart",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Hydrophobic packing of the side chains into the centre of the helix",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The alpha helix is a right-handed coil of the backbone with 3.6 residues per turn and a rise of 540 pm per turn. Its stability comes from the backbone itself: every amide N-H points along the helix axis toward the C=O of the residue four positions back, and the N-H to O distance of about 2.8 Å is an ideal hydrogen bond. Because all the backbone groups are satisfied within the chain, the helix is a self-contained unit, and the side chains project outward from it. A beta sheet uses the same amide groups but hydrogen-bonds them between different strands, which is why it is extended rather than coiled.",
      "approach": "Step 1: Identify the hydrogen-bond donors and acceptors: the backbone N-H and C=O of every peptide bond, which the planar amide geometry (26.4) makes available.\nStep 2: In the helix, residue n's C=O accepts from residue n+4's N-H, along the axis, an intrachain pattern.\nStep 3: Check the geometry: 3.6 residues per turn means residue n+4 sits almost directly above residue n one turn up, 540 pm along the axis.\nStep 4: Side chains point outward and do not fill the core; their interactions belong to tertiary structure, not to the helix itself.",
      "note": "McMurry 26.9 (Protein Structure) describes the alpha helix as a right-handed coil of the protein backbone with 3.6 amino acid residues per turn and a distance between coils of 540 pm, stabilised by hydrogen bonds between amide N-H groups and C=O groups four residues away with an N-H to O distance of 2.8 Å (Figure 26.6), present in nearly all globular proteins, myoglobin's 153-residue chain being the example; the beta-pleated sheet, by contrast, has the chain fully extended with hydrogen bonds between residues in adjacent chains, parallel or antiparallel.",
      "options": {
        "A": "Correct. Intrachain backbone hydrogen bonds from each N-H to the C=O four residues back, one turn up the coil, hold the helix.",
        "B": "Interchain backbone hydrogen bonds are the beta-pleated sheet, where extended strands lie side by side. In a helix the bonds are within one chain.",
        "C": "Disulfides are covalent cross-links that stabilise tertiary structure where two cysteines happen to meet; they are not a regular feature of helices, and most helices contain no cysteine at all.",
        "D": "The alpha helix has no hollow core to fill; the backbone itself occupies the axis and the side chains point outward. Hydrophobic packing of side chains drives tertiary folding, not helix formation."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q32_denaturation",
    "topic": "Protein Structure",
    "difficulty_level": "Medium",
    "question_text": "When egg white is cooked, its albumin proteins are denatured. What changes and what does not?",
    "options": [
      {
        "option_id": "A",
        "text": "The tertiary structure unfolds into a random loop and solubility and enzyme activity are lost, but the peptide bonds and the primary sequence are intact",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The peptide bonds are hydrolysed to free amino acids, which then coagulate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The amino acid sequence is scrambled by heat, giving a new protein",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Only the quaternary structure is lost; each chain keeps its fold",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A globular protein's fold is held by weak forces: hydrogen bonds, hydrophobic packing of nonpolar side chains in the interior, salt bridges between charged side chains, and a few disulfides. Modest heat or a change of pH is enough to overcome them, and the chain unfolds from its specific shape into a random coil. That is denaturation. The covalent backbone is untouched, so the primary structure survives, but everything that depends on the fold is lost: solubility falls (the exposed hydrophobic interiors of many molecules stick together, which is why egg white sets), and enzymes lose activity because their active sites no longer exist. Most denaturation is irreversible; a few proteins renature spontaneously with full recovery of activity.",
      "approach": "Step 1: Identify what heat can break at 70 to 100 °C in water: noncovalent interactions, not amide bonds, which need 6 M HCl at 110 °C for a day.\nStep 2: So the sequence (primary structure) is unchanged and no free amino acids form.\nStep 3: The loss of the noncovalent interactions unfolds the tertiary (and secondary) structure into random loops.\nStep 4: Unfolded chains expose hydrophobic side chains that aggregate: coagulation, loss of solubility, loss of function.",
      "note": "McMurry 26.9 (Protein Structure) states that because the tertiary structure of a globular protein is maintained by weak intramolecular attractions, a modest change in temperature or pH is often enough to denature it, that denaturation occurs under conditions so mild that the primary structure remains intact while the tertiary structure unfolds from a specific globular shape to a randomly looped chain (Figure 26.8), that solubility drops drastically (egg white albumins unfold and coagulate) and most enzymes lose all catalytic activity, and that although most denaturation is irreversible some proteins renature spontaneously. Total hydrolysis of the backbone is the amino acid analysis chemistry of McMurry 26.5.",
      "options": {
        "A": "Correct. Denaturation breaks the weak interactions of the fold, not the covalent backbone: the shape and its properties go, the sequence stays.",
        "B": "Hydrolysing peptide bonds needs hot 6 M acid for a day; cooking does not do it. Free amino acids would not coagulate either; the solid is unfolded, aggregated protein chains.",
        "C": "The sequence is covalent and heat-stable under these conditions. A denatured protein has the same primary structure as the native one, which is why some can refold.",
        "D": "Denaturation unfolds each chain's own tertiary structure; that is the defining change. Quaternary assembly is lost as well, but the individual folds do not survive."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q33_enzyme_transition_state",
    "topic": "Enzymes and Coenzymes",
    "difficulty_level": "Medium",
    "question_text": "Glycosidase enzymes accelerate polysaccharide hydrolysis by a factor of more than 10 to the 17th. What is the most important reason an enzyme can produce such a rate increase?",
    "options": [
      {
        "option_id": "A",
        "text": "It binds and stabilises the rate-limiting transition state far more tightly than it binds the substrate, lowering the activation energy",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It shifts the equilibrium constant toward products",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It binds the substrate as tightly as possible, holding it still",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It raises the energy of the products so that the reaction cannot reverse",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An enzyme is a catalyst: it changes the rate, never the equilibrium constant, and it cannot make an unfavourable reaction favourable. It works by providing a pathway with a lower activation energy. Several factors contribute (holding the reactants in the right geometry, supplying acidic and basic groups, creating a microenvironment shielded from water), but the decisive one is that the active site is complementary to the transition state rather than to the substrate. Binding the transition state up to 10 to the 12th times more tightly than the substrate lowers its energy by that much, and rate depends exponentially on the activation energy. Binding the substrate very tightly would do the opposite: it would deepen the well the reaction starts from.",
      "approach": "Step 1: Recall what a catalyst can and cannot do: lower the activation barrier, leave the free-energy difference between reactants and products unchanged.\nStep 2: Locate the barrier: the rate-limiting transition state of the uncatalysed path.\nStep 3: The enzyme offers an alternative path in which that transition state is stabilised by binding interactions, so the barrier is lower (Figure 26.9).\nStep 4: Because rate scales with the exponential of minus the activation energy, a stabilisation of tens of kJ/mol gives rate factors of many powers of ten.",
      "note": "McMurry 26.10 (Enzymes and Coenzymes) states that an enzyme, like all catalysts, does not affect the equilibrium constant and cannot bring about an otherwise unfavourable change, acting only to lower the activation energy; that millionfold rate increases are common and glycosidases exceed 10 to the 17th; that the accelerations come from geometry, specialised microenvironments and, most important, stabilising the rate-limiting transition state, the enzyme binding the transition structure as much as 10 to the 12th times more tightly than substrate or products (Figure 26.9). The E + S to E.S to E.P to E + P pathway and the turnover number are in the same section.",
      "options": {
        "A": "Correct. Complementarity to the transition state, not to the substrate, is what lowers the barrier, and rate depends exponentially on that barrier.",
        "B": "A catalyst cannot change an equilibrium constant; enzymes accelerate the forward and reverse reactions equally and the position of equilibrium is unchanged.",
        "C": "Very tight substrate binding would stabilise the starting point and raise the barrier from it. The text is explicit that it is not the ability to bind the substrate that matters but the ability to bind the transition state.",
        "D": "Enzymes do not alter product energies, and a catalysed reaction is reversible in both directions. Raising the products would in any case make the forward reaction less favourable, not faster."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q34_enzyme_class_decarboxylase",
    "topic": "Enzymes and Coenzymes",
    "difficulty_level": "Easy",
    "question_text": "Pyruvate decarboxylase converts pyruvate into acetaldehyde and CO2. To which of the six enzyme classes does it belong?",
    "options": [
      {
        "option_id": "A",
        "text": "Lyase",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Hydrolase",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Oxidoreductase",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Transferase",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Enzymes are classified by the reaction they catalyse, and the class is read from the chemistry, not from the suffix of the common name. Losing CO2 from pyruvate breaks a C-C bond and expels a small molecule without oxidation, hydrolysis or transfer to a second substrate: that is a lyase, the class that adds or removes a small molecule such as CO2 or H2O. Decarboxylases and dehydrases are its subclasses. Hydrolases (lipases, proteases such as chymotrypsin) cleave with water; oxidoreductases (dehydrogenases) change oxidation state; transferases (kinases, transaminases) move a group between substrates; isomerases rearrange; ligases join two molecules at the expense of ATP.",
      "approach": "Step 1: Write the reaction: CH3COCO2- goes to CH3CHO + CO2. One reactant, two products, a C-C bond broken.\nStep 2: Check for water (none: not hydrolysis), for a change in oxidation state (none: the carbonyl carbon of the aldehyde has the same oxidation level as the ketone carbon of pyruvate; no cofactor is reduced), for a second substrate receiving a group (none).\nStep 3: Elimination of a small molecule from a substrate is the lyase definition; decarboxylase is a lyase subclass.\nStep 4: The same test puts chymotrypsin (amide hydrolysis) among the hydrolases and alcohol dehydrogenase (alcohol to aldehyde with NAD+) among the oxidoreductases.",
      "note": "McMurry 26.10 (Enzymes and Coenzymes), Table 26.2, lists the six classes with subclasses: oxidoreductases (dehydrogenases, oxidases, reductases), transferases (kinases, transaminases), hydrolases (lipases, nucleases, proteases), lyases (decarboxylases, dehydrases: loss of CO2 or H2O), isomerases (epimerases) and ligases (carboxylases, synthetases); it explains the two-part systematic name (substrate, then class, ending in -ase, as in hexose kinase) and sets Problem 26-18 for pyruvate decarboxylase, chymotrypsin and alcohol dehydrogenase. Pyruvate decarboxylase's thiamin diphosphate coenzyme is in Table 26.3.",
      "options": {
        "A": "Correct. Removing CO2 from a substrate without oxidation or hydrolysis is a lyase reaction; decarboxylases are a lyase subclass.",
        "B": "A hydrolase uses water to split a bond, as chymotrypsin does to amides. No water is consumed in decarboxylation.",
        "C": "An oxidoreductase changes an oxidation state and uses a redox cofactor such as NAD+, as alcohol dehydrogenase does. Decarboxylation leaves the aldehyde carbon at the same oxidation level as the ketone carbon it came from.",
        "D": "A transferase moves a group from one substrate to another, as a kinase moves phosphate. Here the CO2 is simply released, not transferred to an acceptor."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch26_q35_citrate_synthase_asp",
    "topic": "How Do Enzymes Work? Citrate Synthase",
    "difficulty_level": "Hard",
    "question_text": "In the citrate synthase mechanism, acetyl CoA adds to oxaloacetate in an aldol-like reaction. What is the role of the aspartate residue (Asp375) in the active site?",
    "options": [
      {
        "option_id": "A",
        "text": "Its side-chain carboxylate acts as a base, removing an alpha proton from acetyl CoA to generate the enol that adds to the ketone",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Its side-chain carboxylate attacks the oxaloacetate carbonyl as the nucleophile",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Its side-chain carboxylic acid protonates the acetyl CoA carbonyl oxygen",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It forms a thioester with coenzyme A to hold the acetyl group",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Citrate synthase does what a chemist does in an aldol reaction, but with side chains instead of reagents. Acetyl CoA's alpha hydrogens are weakly acidic (a thioester enolises more readily than an ester), and the enzyme makes the enol by concerted acid-base catalysis: an aspartate carboxylate (Asp375) removes an alpha proton while a histidine imidazole (His274) donates a proton to the thioester carbonyl oxygen. The enol then adds to the ketone carbonyl of oxaloacetate, with a histidine taking the enol O-H proton and a second histidine protonating the developing alkoxide. The product, (S)-citryl CoA, is hydrolysed by water at the thioester to give citrate and coenzyme A. Aspartate is the base; the histidines are the acids and the second base; nothing attacks as a nucleophile except the enol carbon and, at the end, water.",
      "approach": "Step 1: Identify the first bond-forming event: the acetyl CoA methyl carbon must become nucleophilic, which needs an enol or enolate.\nStep 2: A carboxylate side chain (pKa about 4 for its acid) is the base that removes the alpha proton, assisted by simultaneous protonation of the carbonyl oxygen by a histidine.\nStep 3: The enol carbon adds to the oxaloacetate ketone; histidines manage the protons on both oxygens; the C-C bond forms with S configuration at the new stereocentre.\nStep 4: Water hydrolyses the citryl CoA thioester (nucleophilic acyl substitution), releasing citrate and CoA-SH; the enzyme's residues return to their starting states.",
      "note": "McMurry 26.11 (How Do Enzymes Work? Citrate Synthase), Figure 26.11, gives the mechanism: the first step is generation of the enol of acetyl CoA, the side-chain carboxyl of an aspartate residue acting as base to abstract an acidic alpha proton while the side-chain imidazole of a histidine donates H+ to the carbonyl oxygen; the enol then performs a nucleophilic addition to the ketone carbonyl of oxaloacetate, one histidine removing the enol O-H hydrogen while a second donates a proton to the oxaloacetate carbonyl, giving (S)-citryl CoA; water then hydrolyses the thioester to citrate and coenzyme A. The section names His274 and Asp375 in the acetyl CoA cleft; the reaction is the first step of the citric acid cycle (29.7), and the aldol reaction itself is McMurry 23.1.",
      "options": {
        "A": "Correct. Asp375's carboxylate is the base that deprotonates the alpha carbon of acetyl CoA, generating the enol nucleophile for the aldol addition.",
        "B": "The nucleophile that attacks oxaloacetate is the enol carbon of acetyl CoA, not a carboxylate. Aspartate's job is to create that nucleophile by removing a proton; it forms no bond to the substrate.",
        "C": "Protonation of the acetyl CoA carbonyl oxygen is the histidine's role, done simultaneously with the aspartate's proton removal. A carboxylate is a base in this mechanism, not an acid.",
        "D": "The thioester is between the acetyl group and coenzyme A already; the enzyme does not form its own thioester. Citrate synthase is not an acyl-transfer enzyme, and the thioester is hydrolysed by water at the end."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  }
];
