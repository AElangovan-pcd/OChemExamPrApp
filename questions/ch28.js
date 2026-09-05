// OChemStudyBuddy - McMurry Chapter 28
// Author: A. Elangovan, PhD
var CH28_QUESTIONS = [
  {
    "question_id": "ch28_q3_sanger_terminator",
    "topic": "DNA Sequencing",
    "difficulty_level": "Medium",
    "question_text": "In the Sanger dideoxy method, DNA polymerase stops extending a chain whenever it incorporates a chain terminator. Which of these adenine nucleosides is the terminator?",
    "options": [
      {
        "option_id": "A",
        "text": "A five-membered sugar ring with no hydroxyl on either C2' or C3'",
        "smiles": "C1C[C@H](O[C@H]1N2C=NC3=C(N=CN=C32)N)CO",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A five-membered sugar ring with a hydroxyl on C3' only",
        "smiles": "C1[C@@H]([C@H](O[C@H]1N2C=NC3=C(N=CN=C32)N)CO)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A five-membered sugar ring with hydroxyls on both C2' and C3'",
        "smiles": "C1=NC(=C2C(=N1)N(C=N2)[C@H]3[C@@H]([C@@H]([C@H](O3)CO)O)O)N",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A five-membered sugar ring with a hydroxyl on C3' and a phosphate on C5'",
        "smiles": "C1[C@@H]([C@H](O[C@H]1N2C=NC3=C(N=CN=C32)N)COP(=O)(O)O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A growing DNA strand is extended at its 3' end: the 3'-hydroxyl of the last nucleotide attacks the alpha-phosphorus of the incoming nucleoside triphosphate, forming the next phosphodiester link. Anything incorporated that has no 3'-OH therefore ends the chain, because there is nothing left to attack the next triphosphate. A 2',3'-dideoxynucleotide is exactly that: the sugar has hydrogen where DNA's own sugar has the 3'-OH. In Sanger sequencing a small amount of each dye-labelled dideoxy triphosphate is mixed with the normal ones, so every chain stops at random after a base of the terminator's kind, and the mixture of lengths, read by colour, gives the sequence.",
      "approach": "Step 1: Look at C3' of each sugar. The chain can only continue from a free 3'-OH.\nStep 2: The dideoxy sugar (no OH at C2' or C3') has no 3'-OH: once its triphosphate is incorporated, extension stops. That is the terminator.\nStep 3: 2'-Deoxyadenosine (OH at C3' only) is the normal DNA building block; adenosine (OH at both) is the RNA building block; both keep the 3'-OH and allow extension.\nStep 4: The 5'-phosphate nucleotide still has its 3'-OH; a phosphate at C5' is where every chain-building triphosphate carries its leaving group, not a terminator feature.",
      "note": "McMurry 28.6 (DNA Sequencing) describes the Sanger dideoxy mixture (the restriction fragment, a primer complementary to its 3' end, the four dNTPs and very small amounts of the four 2',3'-dideoxyribonucleoside triphosphates, each labelled with a different fluorescent dye), defines a dideoxy sugar as one lacking both the 2'- and 3'-OH groups, and states that when a dideoxyribonucleotide is incorporated DNA synthesis stops because the chain end no longer has a 3'-hydroxyl group for adding further nucleotides. The chain-extension chemistry is McMurry 28.3.",
      "options": {
        "A": "Correct. With no 3'-OH, the dideoxynucleotide cannot form the next phosphodiester bond, so the chain ends there.",
        "B": "This is 2'-deoxyadenosine, the ordinary DNA nucleoside. Its 3'-OH is present, so a chain that incorporates it keeps growing.",
        "C": "This is adenosine, with both 2'- and 3'-OH groups: the RNA nucleoside. It has a 3'-OH and would not terminate; it is also not a substrate DNA polymerase would normally use.",
        "D": "This is dAMP, a nucleotide with its 3'-OH intact. A 5'-phosphate is what every nucleotide carries in the chain; it is the missing 3'-OH, not the presence of phosphate, that terminates."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q1_nucleoside_vs_nucleotide",
    "topic": "Nucleotides and Nucleic Acids",
    "difficulty_level": "Easy",
    "question_text": "The compound shown is adenosine monophosphate (AMP). What makes it a nucleotide rather than a nucleoside?",
    "question_smiles": "C1=NC(=C2C(=N1)N(C=N2)[C@H]3[C@@H]([C@@H]([C@H](O3)COP(=O)(O)O)O)O)N",
    "structure_alt": "A bicyclic aromatic base of two fused rings containing four nitrogens and bearing an NH2 group, attached through a ring nitrogen to a five-membered sugar ring that carries two OH groups and a CH2 bonded to a phosphate group.",
    "options": [
      {
        "option_id": "A",
        "text": "The phosphate ester on the sugar's 5'-hydroxyl; adenosine is the same sugar and base without it",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The purine base; a nucleoside contains only the sugar",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The N-glycosidic bond between base and sugar; a nucleoside has the base and sugar unlinked",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The ribose ring; a nucleoside contains deoxyribose",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The vocabulary is layered. A nucleoside is a base joined to a sugar: the anomeric carbon (C1') of ribose or 2'-deoxyribose bonded to a ring nitrogen of a purine or pyrimidine. A nucleotide is a nucleoside carrying a phosphate, normally as an ester on the 5'-hydroxyl. Adenosine is therefore a nucleoside and AMP, with its 5'-phosphate, is a nucleotide; ATP is the same nucleoside with a triphosphate. Nucleic acids are polymers of nucleotides, and the phosphate is what links one sugar's 5' position to the next sugar's 3' position.",
      "approach": "Step 1: Identify the base: adenine, a purine, bonded through N9 to the sugar's C1'.\nStep 2: Identify the sugar: a five-membered ring with OH groups at C2' and C3', so ribose (the RNA sugar).\nStep 3: Identify the extra group: a phosphate esterified to the C5' CH2OH.\nStep 4: Base plus sugar is the nucleoside adenosine; add the 5'-phosphate and it is the nucleotide adenosine 5'-monophosphate.",
      "note": "McMurry 28.1 (Nucleotides and Nucleic Acids) states that each nucleotide is composed of a nucleoside bonded to a phosphate group and each nucleoside of an aldopentose sugar linked through its anomeric carbon to the nitrogen atom of a heterocyclic purine or pyrimidine base, that the sugar is ribose in RNA and 2'-deoxyribose in DNA, that primed numbers refer to the sugar and unprimed numbers to the base, and that Figure 28.2 shows the four deoxyribonucleotides and four ribonucleotides. Problem 28-1 asks for the dinucleotide AG.",
      "options": {
        "A": "Correct. Nucleoside plus phosphate is a nucleotide; AMP is adenosine with a phosphate on C5'.",
        "B": "Both nucleosides and nucleotides contain the base; a sugar alone is just ribose. The base is not what separates the two terms.",
        "C": "The N-glycosidic bond is what makes a nucleoside in the first place; adenosine has it too. The difference is the phosphate.",
        "D": "Ribose versus deoxyribose separates RNA from DNA, not nucleotides from nucleosides. Adenosine and AMP both contain ribose; deoxyadenosine and dAMP both contain deoxyribose."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q2_complementary_strand",
    "topic": "Base Pairing in DNA",
    "difficulty_level": "Medium",
    "question_text": "One strand of a DNA double helix reads 5'-ACGTAGC-3'. What is the sequence of the complementary strand, written in the standard 5' to 3' direction?",
    "options": [
      {
        "option_id": "A",
        "text": "5'-GCTACGT-3'",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "5'-TGCATCG-3'",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5'-ACGTAGC-3'",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5'-UGCAUCG-3'",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two rules give the complement. Each base pairs with one partner, A with T and G with C, so the partner strand is obtained by swapping every A for T, T for A, G for C and C for G. And the two strands are antiparallel: the complement's 5' end lies opposite the original's 3' end. Writing the partner base under each original base therefore produces the complement in the 3' to 5' direction, and it must be reversed to be written in the standard 5' to 3' convention. Forgetting the reversal is the usual error.",
      "approach": "Step 1: Write the partners under the original: A-T, C-G, G-C, T-A, A-T, G-C, C-G, giving 3'-TGCATCG-5'.\nStep 2: The strand as just written runs 3' to 5' because it is antiparallel to the original.\nStep 3: Reverse it to the 5' to 3' convention: 5'-GCTACGT-3'.\nStep 4: Check: the first base of the answer (G) pairs with the last base of the original (C), as antiparallel strands require.",
      "note": "McMurry 28.2 (Base Pairing in DNA) works exactly this kind of problem: for the strand TATGCAT the complement is written first as (3') ATACGTA (5') and then as (5') ATGCATA (3'), the strategy being to replace A by T, G by C, T by A and C by G while remembering that the 5' end is on the left in the original strand; the section states that the two strands run in opposite directions and are complementary rather than identical. Problem 28-3 asks the same for GGCTAATCCGT.",
      "options": {
        "A": "Correct. Pair each base (T G C A T C G under A C G T A G C) and then reverse the result to write it 5' to 3'.",
        "B": "This is the complement written in the 3' to 5' direction and left unreversed. Antiparallel strands mean the complement's 5' end is at the right; reversing gives GCTACGT.",
        "C": "This is the original strand. The complementary strand is not identical; A pairs with T and G with C, so every base changes.",
        "D": "Uracil occurs in RNA, not DNA; the complementary DNA strand uses T. This sequence is also the unreversed complement with U for T, so it has both errors."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q5_base_pairs",
    "topic": "Base Pairing in DNA",
    "difficulty_level": "Easy",
    "question_text": "Which statement gives the Watson-Crick base pairs of DNA and the number of hydrogen bonds in each?",
    "options": [
      {
        "option_id": "A",
        "text": "Adenine pairs with thymine through two hydrogen bonds; guanine pairs with cytosine through three",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Adenine pairs with thymine through three hydrogen bonds; guanine pairs with cytosine through two",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Adenine pairs with guanine and cytosine with thymine, purine with purine and pyrimidine with pyrimidine",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Adenine pairs with uracil in DNA through two hydrogen bonds",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The two strands of the double helix are held together by hydrogen bonds between bases that face each other across the helix axis, and the pairing is specific because the hydrogen-bond donors and acceptors along the edge of each base match only one partner: adenine's N-H and ring nitrogen line up with thymine's C=O and N-H (two hydrogen bonds), and guanine's N-H, N-H and C=O line up with cytosine's C=O, ring N and NH2 (three). Each pair joins one purine with one pyrimidine, so every pair has the same width and the helix is uniform. The extra hydrogen bond makes G-C pairs stronger, which is why DNA rich in G and C melts at a higher temperature.",
      "approach": "Step 1: Recall the pairs from the base-composition data: A equals T and G equals C in every organism, so A pairs with T and G with C.\nStep 2: Count donors and acceptors along the paired edges: A-T uses the adenine N6-H to thymine O4 and thymine N3-H to adenine N1, two bonds.\nStep 3: G-C uses guanine O6 to cytosine N4-H, guanine N1-H to cytosine N3, and guanine N2-H to cytosine O2, three bonds.\nStep 4: Uracil replaces thymine only in RNA, where it pairs with adenine the same way (two bonds).",
      "note": "McMurry 28.2 (Base Pairing in DNA) states that the two complementary strands are held together by hydrogen bonds between specific pairs of bases, A with T and C with G, which explains why A and T are always found in equal amounts, as are G and C (human DNA about 30% each A and T, 20% each G and C), and Figure 28.3 draws the hydrogen bonding of both pairs. Problem 28-4 asks how uracil forms strong hydrogen bonds to adenine.",
      "options": {
        "A": "Correct. A-T is a two-hydrogen-bond pair and G-C a three-hydrogen-bond pair, one purine with one pyrimidine each time.",
        "B": "The partners are right but the counts are swapped: G-C, with three matching donor-acceptor positions, has three hydrogen bonds; A-T has two.",
        "C": "Purine-purine and pyrimidine-pyrimidine pairs would make the helix bulge and pinch; each Watson-Crick pair is one purine with one pyrimidine (A-T, G-C), which keeps the helix a constant width.",
        "D": "Uracil is an RNA base. In DNA adenine's partner is thymine, uracil's 5-methyl relative; the A-U pair with two hydrogen bonds occurs in RNA and in RNA-DNA hybrids."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q4_phosphoramidite_cycle_start",
    "topic": "DNA Synthesis",
    "difficulty_level": "Medium",
    "question_text": "In automated solid-phase DNA synthesis by the phosphoramidite method, what is the first operation of each coupling cycle on the support-bound chain?",
    "options": [
      {
        "option_id": "A",
        "text": "Removal of the dimethoxytrityl (DMT) ether from the 5'-hydroxyl with dichloroacetic acid, freeing the hydroxyl that will attack the next phosphoramidite",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Removal of the beta-cyanoethyl group from the phosphate with aqueous ammonia",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Oxidation of the phosphite to a phosphate with iodine",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cleavage of the ester holding the chain to the silica support",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Chemical DNA synthesis mirrors Merrifield peptide synthesis: the first nucleoside is anchored to a support through its 3'-OH, every reactive site that must not react is protected, and one monomer is added per cycle. The chain grows from its free 5'-hydroxyl, which is kept as a DMT ether between couplings so that only one hydroxyl in the whole support-bound molecule is free at coupling time. Each cycle therefore begins by taking the DMT off with mild acid; the freed 5'-OH is then coupled to the next nucleoside's 3'-phosphoramidite with tetrazole, the resulting phosphite is oxidised to a phosphate with iodine, and the new monomer's own DMT waits for the next cycle. Ammonia, which removes the base and phosphate protecting groups and cleaves the chain from the support, is used once, at the very end.",
      "approach": "Step 1: State of the chain between cycles: 3' end on the silica ester, every phosphate as a cyanoethyl ester, exocyclic amines acylated, 5'-OH as the DMT ether.\nStep 2: Cycle step 1: dichloroacetic acid in CH2Cl2 cleaves the DMT ether by SN1 (the dimethoxytrityl cation is tertiary, benzylic and stabilised by two p-methoxy groups), freeing the 5'-OH.\nStep 3: Cycle step 2: the free 5'-OH couples with the incoming protected deoxynucleoside 3'-phosphoramidite in acetonitrile with tetrazole, giving a phosphite triester.\nStep 4: Cycle step 3: iodine in aqueous THF oxidises the phosphite to the phosphate triester; the cycle repeats. Final step, once: aqueous NH3 removes all protecting groups and cleaves the support ester.",
      "note": "McMurry 28.7 (DNA Synthesis) gives the five steps: (1) attach a protected deoxynucleoside to silica by an ester at its 3'-OH, with the 5'-OH as the p-dimethoxytrityl ether and the base amines protected; (2) remove the DMT group with dichloroacetic acid in CH2Cl2 by an SN1 mechanism, fast because of the stability of the tertiary benzylic dimethoxytrityl cation; (3) couple with a protected deoxynucleoside 3'-phosphoramidite in acetonitrile with tetrazole catalysis to a phosphite, one oxygen protected as the beta-cyanoethyl ester, over 99% yield; (4) oxidise the phosphite to a phosphate with iodine in aqueous THF and 2,6-dimethylpyridine, then repeat deprotection, coupling and oxidation; (5) remove all protecting groups and cleave from the support with aqueous NH3. The text names dichloroacetic acid; the recovered item had said trichloroacetic acid, which is the other common choice.",
      "options": {
        "A": "Correct. The cycle opens by unmasking the 5'-OH: acid cleaves the DMT ether, and that hydroxyl is the nucleophile of the coupling step.",
        "B": "The cyanoethyl phosphate protecting groups stay on throughout the synthesis and are removed all at once by ammonia in the final step; taking them off early would expose every phosphate to side reactions.",
        "C": "Iodine oxidation is the third step of the cycle, after coupling; it converts the newly formed phosphite triester into the phosphate. There is nothing to oxidise until a coupling has occurred.",
        "D": "Cleaving the chain from the support is the last operation of the whole synthesis, done with aqueous ammonia together with the deprotections. The chain must stay anchored through every cycle."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q_dynamic_base_pairing",
    "topic": "Base Pairing in DNA",
    "difficulty_level": "Medium",
    "question_text": "Match each DNA base to the name of the base it pairs with in the double helix. One name in the list is an RNA base and pairs with none of these.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "Nc1ncnc2[nH]cnc12",
        "correctAnswer": "Thymine",
        "alt": "A bicyclic aromatic base: a six-membered ring fused to a five-membered ring, four ring nitrogens in all, with an NH2 group on the six-membered ring and no carbonyl."
      },
      {
        "smiles": "Nc1nc2[nH]cnc2c(=O)[nH]1",
        "correctAnswer": "Cytosine",
        "alt": "A bicyclic aromatic base: a six-membered ring fused to a five-membered ring, four ring nitrogens in all, with a C=O and an N-H in the six-membered ring and an NH2 group next to the N-H."
      },
      {
        "smiles": "Nc1cc[nH]c(=O)n1",
        "correctAnswer": "Guanine",
        "alt": "A single six-membered aromatic ring with two ring nitrogens, one C=O next to an N-H, and an NH2 group on the carbon opposite the carbonyl."
      },
      {
        "smiles": "Cc1c[nH]c(=O)[nH]c1=O",
        "correctAnswer": "Adenine",
        "alt": "A single six-membered ring with two N-H groups, two C=O groups flanking one of them, and a methyl group on a ring carbon."
      }
    ],
    "match_options": [
      "Thymine",
      "Cytosine",
      "Guanine",
      "Adenine",
      "Uracil"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "At least one base matched to the wrong partner",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two identifications are needed for each row: which base is drawn, and which base it pairs with. The purines are the fused bicyclic bases: adenine has an NH2 and no carbonyl, guanine has a carbonyl beside an N-H plus an NH2. The pyrimidines are single rings: cytosine has one carbonyl and an NH2, thymine has two carbonyls and a methyl, and uracil is thymine without the methyl (RNA only). Then Watson-Crick pairing: adenine with thymine (two hydrogen bonds), guanine with cytosine (three). Uracil pairs with adenine in RNA, but it is not a partner of any DNA base in the helix, so it is the decoy.",
      "approach": "Step 1: Sort the drawings: two fused-ring purines, two single-ring pyrimidines.\nStep 2: Name the purines: NH2 and no C=O is adenine; C=O plus NH2 is guanine. Name the pyrimidines: one C=O and an NH2 is cytosine; two C=O and a methyl is thymine.\nStep 3: Assign partners: adenine pairs with thymine, so the adenine row takes Thymine and the thymine row takes Adenine; guanine pairs with cytosine, so the guanine row takes Cytosine and the cytosine row takes Guanine.\nStep 4: Uracil, the unmethylated thymine of RNA, is left over.",
      "note": "McMurry 28.1 (Nucleotides and Nucleic Acids) names the DNA bases, two substituted purines (adenine, guanine) and two substituted pyrimidines (cytosine, thymine), and states that RNA replaces thymine with the closely related uracil; McMurry 28.2 (Base Pairing in DNA) gives the pairing, A with T and C with G, with the hydrogen bonds drawn in Figure 28.3 (two for A-T, three for G-C). The recovered version of this list had labels that named the answer; these are the bare partner names.",
      "options": {
        "A": "Correct. Adenine to thymine and thymine to adenine, guanine to cytosine and cytosine to guanine; uracil is the RNA decoy.",
        "B": "At least one partner is wrong. Identify each drawing first (fused rings are purines: NH2 alone is adenine, C=O plus NH2 is guanine; single rings are pyrimidines: one C=O with NH2 is cytosine, two C=O with a methyl is thymine), then pair A with T and G with C."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q6_n_glycosidic_bond",
    "topic": "Nucleotides and Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "In a nucleoside, which atoms are joined by the bond between the sugar and the base?",
    "options": [
      {
        "option_id": "A",
        "text": "The anomeric carbon of the sugar (C1') and a ring nitrogen of the base: N9 of a purine or N1 of a pyrimidine",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The sugar's C5' hydroxyl and the base's exocyclic NH2",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The sugar's C3' hydroxyl and a carbonyl carbon of the base, as an ester",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The sugar's ring oxygen and a ring carbon of the base",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A nucleoside is an N-glycoside: the sugar's anomeric carbon, C1', which in the free sugar carries the hemiacetal OH, is bonded instead to a nitrogen of the base, exactly as an O-glycoside has C1 bonded to an OR group. The nitrogen used is N9 of a purine (adenine, guanine) or N1 of a pyrimidine (cytosine, thymine, uracil), and the bond is beta, on the same face of the furanose ring as the C5' CH2OH. That leaves the sugar's 3'-OH and 5'-OH free for the phosphodiester backbone and the base's other edge free for hydrogen bonding to its partner.",
      "approach": "Step 1: Locate the anomeric carbon: C1', the ring carbon bonded to the ring oxygen and to the base.\nStep 2: Identify the base atom bonded to it: a ring nitrogen with no hydrogen in the nucleoside, N9 in the five-membered ring of a purine or N1 of a pyrimidine.\nStep 3: Recognise the bond type: an N-glycosidic (aminal-type) bond, formed in nature from a sugar phosphate and the base.\nStep 4: The hydroxyls at C3' and C5' are not involved; they are reserved for the phosphate links of the polymer.",
      "note": "McMurry 28.1 (Nucleotides and Nucleic Acids) states that each nucleoside is composed of an aldopentose sugar linked through its anomeric carbon to the nitrogen atom of a heterocyclic purine or pyrimidine base, and Figure 28.2 draws the eight nucleotides with that linkage. Glycosides, the O analogues, are McMurry 25.6, and the base numbering (unprimed) against the sugar numbering (primed) is defined in the same section.",
      "options": {
        "A": "Correct. The bond is an N-glycosidic bond from C1', the anomeric carbon, to N9 of a purine or N1 of a pyrimidine.",
        "B": "The 5'-OH is where the phosphate goes in a nucleotide, and the exocyclic NH2 of the base is a hydrogen-bonding group facing the partner strand; neither takes part in the sugar-base link.",
        "C": "No ester joins base and sugar. The 3'-OH is kept free for the phosphodiester backbone, and the base's carbonyls are hydrogen-bond acceptors in the helix.",
        "D": "The ring oxygen of the sugar has no bond to the base; C1', the carbon next to that oxygen, carries the base on its nitrogen."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q7_pick_dna_nucleoside",
    "topic": "Nucleotides and Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Which of these nucleosides is a building block of DNA rather than RNA?",
    "options": [
      {
        "option_id": "A",
        "text": "A single-ring base with one C=O and an NH2, on a sugar with a hydroxyl at C3' only",
        "smiles": "C1[C@@H]([C@H](O[C@H]1N2C=CC(=NC2=O)N)CO)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A single-ring base with one C=O and an NH2, on a sugar with hydroxyls at C2' and C3'",
        "smiles": "C1=CN(C(=O)N=C1N)[C@H]2[C@@H]([C@@H]([C@H](O2)CO)O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A single-ring base with two C=O groups and no methyl, on a sugar with hydroxyls at C2' and C3'",
        "smiles": "C1=CN(C(=O)NC1=O)[C@H]2[C@@H]([C@@H]([C@H](O2)CO)O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A fused two-ring base with an NH2, on a sugar with hydroxyls at C2' and C3'",
        "smiles": "C1=NC(=C2C(=N1)N(C=N2)[C@H]3[C@@H]([C@@H]([C@H](O3)CO)O)O)N",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "DNA and RNA nucleosides differ in the sugar and in one base. The sugar of RNA is ribose, with hydroxyls at C2' and C3'; the sugar of DNA is 2'-deoxyribose, with hydrogen at C2' and the hydroxyl at C3' only. Any nucleoside whose sugar carries a 2'-OH is therefore a ribonucleoside. The base gives a second check: uracil (two carbonyls, no methyl) belongs to RNA, thymine (two carbonyls and a 5-methyl) to DNA, while adenine, guanine and cytosine occur in both. The drawn deoxycytidine has the deoxy sugar and a base common to both, so it is a DNA component.",
      "approach": "Step 1: Look at C2' of each sugar, the ring carbon between C1' (bearing the base) and C3'. A CH2 there is deoxyribose; a CHOH is ribose.\nStep 2: Only one drawing has a CH2 at C2': that is a 2'-deoxynucleoside, the DNA type. Its base (one C=O, one NH2) is cytosine: 2'-deoxycytidine.\nStep 3: The other three all have a 2'-OH and are ribonucleosides: cytidine, uridine and adenosine.\nStep 4: Uridine is doubly excluded: uracil itself is an RNA-only base.",
      "note": "McMurry 28.1 (Nucleotides and Nucleic Acids) states that the sugar component in RNA is ribose and in DNA 2'-deoxyribose, the prefix 2'-deoxy indicating that oxygen is missing from C2' of ribose, that DNA contains A, G, C and T, and that thymine is replaced in RNA by uracil; Figure 28.2 draws all eight nucleotides. McMurry 25.10 introduced 2-deoxyribose as the most common deoxy sugar.",
      "options": {
        "A": "Correct. The sugar has no 2'-OH, so it is 2'-deoxyribose, and the base is cytosine: 2'-deoxycytidine, a DNA nucleoside.",
        "B": "This is cytidine: the same base on ribose, with a 2'-OH. The 2'-hydroxyl marks it as an RNA nucleoside.",
        "C": "This is uridine, and it is RNA-only on two counts: the sugar is ribose (2'-OH present) and the base is uracil, which DNA does not use.",
        "D": "This is adenosine, adenine on ribose. Adenine occurs in DNA, but only as 2'-deoxyadenosine; the 2'-OH here makes it the RNA nucleoside."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q8_phosphodiester_backbone",
    "topic": "Nucleotides and Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "How are nucleotides joined in a DNA chain, and how are the two ends of the chain distinguished?",
    "options": [
      {
        "option_id": "A",
        "text": "By phosphodiester bonds from the 3'-hydroxyl of one nucleoside to the 5'-hydroxyl of the next; one end carries a free 3'-OH (the 3' end) and the other a 5'-phosphate (the 5' end), and sequences are written from the 5' end",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "By amide bonds between the bases; the ends are named for the first and last base",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "By phosphodiester bonds between the 2'-hydroxyls of adjacent sugars; the ends are equivalent",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "By glycosidic bonds from C1' of one sugar to C4' of the next, as in a polysaccharide",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The nucleic acid backbone is a chain of sugar-phosphate-sugar-phosphate units in which each phosphate is a diester, one ester to the 5'-hydroxyl of one nucleoside and the other to the 3'-hydroxyl of the next; the bases hang off the sugars and take no part in the backbone. A chain built this way is directional: at one end the last sugar has a 3'-OH with no phosphate attached (the 3' end), and at the other the first sugar has a phosphate on its 5'-OH (the 5' end). Everything about DNA respects that polarity: sequences are written 5' to 3', polymerases synthesise 5' to 3', and the two strands of the helix run in opposite directions.",
      "approach": "Step 1: Identify the linking group: a phosphate with two ester bonds, RO-P(O)(O-)-OR', a phosphodiester, negatively charged at physiological pH.\nStep 2: Identify the two sugar hydroxyls it uses: C3'-OH of one nucleoside and C5'-OH of the next; the 2' position of DNA's sugar has no hydroxyl at all.\nStep 3: Read off the ends: free 3'-OH at one terminus, 5'-phosphate at the other.\nStep 4: Write the sequence by naming the bases from the 5' end, as in TAGGCT.",
      "note": "McMurry 28.1 (Nucleotides and Nucleic Acids) states that nucleotides are linked in DNA and RNA by phosphodiester bonds [RO-(PO2-)-OR'] between phosphate, the 5'-hydroxyl group on one nucleoside and the 3'-hydroxyl group on another, that one end of the polymer has a free hydroxyl at C3' (the 3' end) and the other a phosphate at C5' (the 5' end), and that the sequence is described starting at the 5' end using the abbreviations G, C, A, T (or U). Problems 28-1 and 28-2 ask for the full structures of the dinucleotides AG and UA.",
      "options": {
        "A": "Correct. 3'-to-5' phosphodiester links give a directional sugar-phosphate backbone with a 3'-OH end and a 5'-phosphate end, read 5' to 3'.",
        "B": "The bases are not bonded to each other at all within a strand; they pair by hydrogen bonds with the other strand. The covalent backbone runs through the sugars and phosphates.",
        "C": "DNA's sugar has no 2'-hydroxyl, so no 2' linkage is possible, and even RNA's backbone uses the 3' and 5' positions. The ends are not equivalent; the chain has a 3' end and a 5' end.",
        "D": "The anomeric C1' is bonded to the base, not to the next sugar, so nucleic acids are not polysaccharides. The sugars are linked only through the phosphates."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q9_pick_thymine",
    "topic": "Nucleotides and Nucleic Acids",
    "difficulty_level": "Medium",
    "question_text": "Which of these pyrimidine bases is thymine, the base DNA uses in place of RNA's uracil?",
    "options": [
      {
        "option_id": "A",
        "text": "Two C=O groups, two N-H groups, and a methyl on the ring carbon between a C=O and the CH",
        "smiles": "Cc1c[nH]c(=O)[nH]c1=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Two C=O groups and two N-H groups, no methyl",
        "smiles": "O=c1cc[nH]c(=O)[nH]1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "One C=O, one N-H, and an NH2 on the ring",
        "smiles": "Nc1cc[nH]c(=O)n1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "One C=O, one N-H, an NH2, and a methyl on the ring carbon next to the NH2-bearing carbon",
        "smiles": "Cc1c[nH]c(=O)nc1N",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The three pyrimidine bases are told apart by their substituents. Cytosine has a carbonyl at C2 and an amino group at C4; uracil has carbonyls at both C2 and C4; thymine is uracil with a methyl at C5. DNA uses thymine and RNA uracil, the methyl being the only difference, and the two pair with adenine in the same way through the N3-H and the C4 carbonyl. 5-Methylcytosine, cytosine with the same C5 methyl, is not one of the four DNA bases but occurs in DNA as an epigenetic mark, and it is the base whose deamination gives thymine.",
      "approach": "Step 1: Count carbonyls: two C=O means uracil or thymine; one C=O with an NH2 means cytosine or 5-methylcytosine.\nStep 2: Among the two-carbonyl bases, look for the methyl at C5: present in thymine, absent in uracil.\nStep 3: The drawing with two C=O and a methyl is thymine.\nStep 4: The methylated one-carbonyl base is 5-methylcytosine, a modified base rather than one of the canonical four.",
      "note": "McMurry 28.1 (Nucleotides and Nucleic Acids) states that DNA contains two substituted pyrimidines, cytosine and thymine, that adenine, guanine and cytosine also occur in RNA, and that thymine is replaced in RNA by a closely related pyrimidine base called uracil; Figure 28.2 draws all the bases within their nucleotides. 5-Methylcytosine and the reason DNA uses thymine (so that cytosine deamination to uracil can be recognised as damage) are lecture material, not in the text.",
      "options": {
        "A": "Correct. Two carbonyls with a 5-methyl is thymine, the DNA base; without the methyl it would be uracil.",
        "B": "Two carbonyls and no methyl is uracil, the RNA base that thymine replaces in DNA.",
        "C": "One carbonyl with an amino group is cytosine, a base common to DNA and RNA and the partner of guanine.",
        "D": "One carbonyl, an amino group and a methyl is 5-methylcytosine, a modified base found in some DNA but not one of the four standard bases; thymine has two carbonyls."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q10_chargaff_arithmetic",
    "topic": "Base Pairing in DNA",
    "difficulty_level": "Easy",
    "question_text": "A sample of double-stranded DNA is found to contain 22% guanine. What are the percentages of the other three bases, and why?",
    "options": [
      {
        "option_id": "A",
        "text": "22% cytosine, 28% adenine and 28% thymine, because G pairs with C and A with T across the two strands",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "22% adenine, 28% cytosine and 28% thymine, because purines equal pyrimidines",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "26% each of cytosine, adenine and thymine, because the remaining bases share the balance equally",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It cannot be determined without knowing the organism",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "In double-stranded DNA every guanine on one strand faces a cytosine on the other and every adenine faces a thymine, so G and C are present in equal amounts, and so are A and T; that equality was the clue to complementary pairing before the helix was known. The G plus C fraction varies from species to species (about 40% in humans, 26% in Clostridium perfringens), but within any sample the two pairs each account for their share. With G at 22%, C is 22%, and the remaining 56% is split equally between A and T.",
      "approach": "Step 1: G equals C: 22% guanine means 22% cytosine.\nStep 2: G plus C is 44%, so A plus T is 100 minus 44 = 56%.\nStep 3: A equals T: 28% each.\nStep 4: Check purines against pyrimidines: A plus G = 50%, C plus T = 50%, as pairing one purine with one pyrimidine requires.",
      "note": "McMurry 28.2 (Base Pairing in DNA) states that DNA from different species has different base proportions (human about 30% each A and T and 20% each G and C; Clostridium perfringens 37% each A and T and 13% each G and C) but that in both the bases occur in pairs, adenine equal to thymine and cytosine equal to guanine, and that Watson-Crick complementary pairing, A with T and C with G, explains why. The percentages hold for double-stranded DNA; a single strand need not obey them.",
      "options": {
        "A": "Correct. G equals C at 22% each, leaving 56% for the A-T pair, 28% each.",
        "B": "Purines do equal pyrimidines, but that is a consequence of the specific pairs, not a rule on its own. Guanine's partner is cytosine, so it is cytosine that matches 22%, not adenine.",
        "C": "The remaining bases are not free to share the balance; cytosine is tied to guanine at 22%, and adenine and thymine are tied to each other at 28% each.",
        "D": "Once the sample is double-stranded DNA the ratios follow from pairing alone; the organism only sets the G plus C fraction, which the 22% guanine already fixes."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q11_intercalation",
    "topic": "Base Pairing in DNA",
    "difficulty_level": "Medium",
    "question_text": "Many carcinogens and several anticancer drugs are flat polycyclic aromatic molecules. What feature of the double helix lets them act on DNA?",
    "options": [
      {
        "option_id": "A",
        "text": "The base pairs are flat and stacked inside the helix, and the major and minor grooves expose their edges, so a planar aromatic can slip sideways and intercalate between two base pairs",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The phosphate backbone is hydrophobic and dissolves aromatic molecules",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The bases have free hydroxyl groups that form esters with the aromatic rings",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The helix unwinds completely in water, leaving single strands to which aromatics bind",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "In the double helix the sugar-phosphate backbones wind around the outside and the base pairs lie inside, flat and stacked on one another like a pile of plates, about 3.4 Å apart, ten pairs per 34 Å turn. Because the two backbones are not evenly spaced around the axis, the helix has two grooves, a wide major groove (12 Å) and a narrow minor groove (6 Å), and both are lined by the edges of the stacked bases. A flat aromatic molecule of about the size of a base pair can enter a groove, wedge itself between two adjacent pairs, and be held there by stacking. That intercalation distorts the helix, interferes with replication and transcription, and is how some agents cause mutations and how others (doxorubicin, for instance) kill dividing cancer cells.",
      "approach": "Step 1: Picture the geometry: backbones outside, hydrogen-bonded base pairs inside, parallel to each other and perpendicular to the axis.\nStep 2: Note the spaces: the two grooves along the outside give access to the faces of the stacked pairs.\nStep 3: A planar aromatic matches the shape of a base pair and can insert between two of them, sandwiched by pi stacking: intercalation.\nStep 4: The consequences follow from the distortion: the local helix lengthens and unwinds, and polymerases misread or stall.",
      "note": "McMurry 28.2 (Base Pairing in DNA) gives the helix dimensions (20 Å wide, 10 base pairs and 34 Å per turn), states that the two strands coil so that a major groove 12 Å wide and a minor groove 6 Å wide result, both lined by flat heterocyclic bases, and that as a result a variety of other polycyclic aromatic molecules are able to slip sideways, or intercalate, between the stacked bases, many cancer-causing and cancer-preventing agents functioning by interacting with DNA in this way (Figure 28.4).",
      "options": {
        "A": "Correct. Stacked, flat base pairs with grooves giving access let a planar aromatic insert between two pairs; that is intercalation.",
        "B": "The phosphate backbone is anionic and hydrophilic, facing the water; it is the hydrophobic, stacked bases inside that attract aromatic rings.",
        "C": "The bases carry no hydroxyl groups (their oxygens are carbonyls) and no ester forms. Intercalation is noncovalent, held by stacking, although some agents go on to react covalently once positioned.",
        "D": "Double-stranded DNA is stable in water; it unwinds only locally and transiently during replication or transcription. Intercalators act on the intact duplex."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q12_strands_held_together",
    "topic": "Base Pairing in DNA",
    "difficulty_level": "Easy",
    "question_text": "What holds the two strands of the DNA double helix together, and why can they be separated by heating to 95 °C without breaking the chains?",
    "options": [
      {
        "option_id": "A",
        "text": "Hydrogen bonds between complementary bases (and stacking of the base pairs); these noncovalent forces are overcome by heat, while the covalent phosphodiester backbone of each strand survives",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Covalent disulfide bridges between the strands, which heat reduces",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Phosphodiester bonds running between the two backbones, which heat hydrolyses",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ionic bonds between the phosphates of the two strands, which heat cannot break",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Each strand of DNA is a single covalent chain of sugars and phosphates. The two strands are joined to each other only by weak, cooperative interactions: the two or three hydrogen bonds between each base pair, and the stacking of successive pairs on one another. Many such interactions along a long molecule add up to a stable duplex at body temperature, but each one is individually weak, so raising the temperature to about 95 °C melts the helix into two single strands with every covalent bond intact. Cooling lets complementary strands find each other and re-pair (anneal), which is what the primer step of PCR and the annealing step of every hybridisation method rely on.",
      "approach": "Step 1: Separate the two kinds of bond: covalent phosphodiester and glycosidic bonds within a strand, noncovalent hydrogen bonds and stacking between strands.\nStep 2: Heat supplies enough energy to break hydrogen bonds and disrupt stacking, so the strands come apart (denaturation).\nStep 3: Covalent bonds need far more energy or a chemical reagent; they are untouched at 95 °C in neutral buffer.\nStep 4: On cooling, complementary sequences re-form their hydrogen bonds: the process is reversible, unlike breaking the backbone.",
      "note": "McMurry 28.2 (Base Pairing in DNA) states that the two complementary strands are held together by hydrogen bonds between specific pairs of bases, A with T and C with G, and McMurry 28.8 (The Polymerase Chain Reaction) uses the consequence: at 95 °C double-stranded DNA denatures, spontaneously breaking apart into two single strands, and on cooling to 37 to 50 °C primers anneal by hydrogen-bonding to their complementary sequences. Helicases achieve the same separation enzymatically during replication (McMurry 28.3).",
      "options": {
        "A": "Correct. Only noncovalent hydrogen bonds and stacking join the strands, so heat separates them while each covalent backbone stays whole.",
        "B": "Disulfide bridges are a feature of proteins (between cysteine residues); DNA contains no sulfur and no covalent bonds between its strands.",
        "C": "Phosphodiester bonds run along each strand, not across the helix. If heat hydrolysed them the strands would fragment, which does not happen at 95 °C.",
        "D": "Both backbones are negatively charged and repel each other; there are no ionic bonds between them. The attraction between strands comes from the bases."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q13_semiconservative",
    "topic": "Replication of DNA",
    "difficulty_level": "Easy",
    "question_text": "DNA replication is described as semiconservative. What does that mean?",
    "options": [
      {
        "option_id": "A",
        "text": "Each daughter double helix contains one original strand and one newly synthesised strand, because each old strand serves as the template for a new complementary partner",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "One daughter helix keeps both original strands and the other is made entirely of new DNA",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Half of each strand is copied and half is left unreplicated",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Only the coding strand is replicated; the template strand is conserved unchanged",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Complementarity is what makes copying possible: because every A faces a T and every G a C, either strand alone specifies the other. Replication begins when helicases unwind a stretch of the helix and expose the bases; nucleotides then line up on each separated strand according to the pairing rules, and DNA polymerase joins them into a new strand complementary to each old one. When the process is complete there are two double helices, each with one strand inherited intact from the parent and one strand built fresh, which is what semiconservative means. Meselson and Stahl proved it in 1958 by following heavy-isotope-labelled DNA through successive generations.",
      "approach": "Step 1: Unwind: helicases break the hydrogen bonds locally, forming a bubble with two replication forks.\nStep 2: Template: each exposed strand pairs with free nucleotides, A opposite T, G opposite C.\nStep 3: Synthesis: DNA polymerase links the lined-up nucleotides, growing a new strand on each template in the 5' to 3' direction.\nStep 4: Result: two identical duplexes, each half old and half new.",
      "note": "McMurry 28.3 (Replication of DNA) describes replication as beginning with partial unwinding by helicases, hydrogen bonds breaking to form a bubble and expose bases, new nucleotides lining up on each strand in a complementary manner, and two new strands growing from the replication forks, each complementary to its old template strand, so that two identical double helices are produced; because each new DNA molecule contains one old strand and one new strand the process is described as semiconservative (Figure 28.5). The section adds that the 6 billion nucleotides of a human cell are copied in a few hours with about one error in 10 to 100 billion bases.",
      "options": {
        "A": "Correct. Each old strand templates a new partner, so both daughter helices are half original, half new.",
        "B": "That would be conservative replication, which is not what happens; the Meselson-Stahl experiment ruled it out. The parent strands separate and each ends up in a different daughter.",
        "C": "Both strands are copied in full along their whole length. Semi refers to which strands are old, not to how much is copied.",
        "D": "Coding and template are transcription terms, where only one strand is read. In replication both strands act as templates and both are copied."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q14_polymerase_step",
    "topic": "Replication of DNA",
    "difficulty_level": "Hard",
    "question_text": "What is the bond-forming step catalysed by DNA polymerase, and why does it force synthesis to run in the 5' to 3' direction?",
    "options": [
      {
        "option_id": "A",
        "text": "The free 3'-hydroxyl of the growing chain attacks the alpha-phosphorus of an incoming nucleoside 5'-triphosphate, expelling diphosphate; since the nucleophile is always the chain's 3'-OH, each new nucleotide is added at the 3' end",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The 5'-triphosphate of the growing chain attacks the 3'-hydroxyl of an incoming nucleoside, so the chain grows at its 5' end",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Two nucleoside monophosphates condense with loss of water, in either direction",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The base of the incoming nucleotide attacks the template base, forming a covalent cross-link that is later broken",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Chain extension is a nucleophilic substitution at phosphorus. The nucleophile is the 3'-hydroxyl at the end of the growing strand; the electrophile is the innermost (alpha) phosphorus of a deoxynucleoside 5'-triphosphate, whose beta and gamma phosphates are an excellent leaving group (pyrophosphate, which is then hydrolysed, pulling the reaction forward). The product is a new phosphodiester between the old 3'-oxygen and the new nucleotide's 5'-phosphate, and the new nucleotide now presents its own 3'-OH for the next round. Because the activated triphosphate is on the monomer and the attacking hydroxyl is on the chain, growth can only happen at the 3' end: 5' to 3' synthesis, which is why one strand must be made in Okazaki fragments and why a chain terminator lacking a 3'-OH stops everything.",
      "approach": "Step 1: Identify the nucleophile: the 3'-OH of the last nucleotide in the chain.\nStep 2: Identify the electrophile and leaving group: the alpha-P of the incoming dNTP, with diphosphate (PPi) leaving.\nStep 3: Draw the product: a 3'-O-P(O)(O-)-O-5' phosphodiester link, and a chain one nucleotide longer that still ends in a free 3'-OH.\nStep 4: Conclude the direction: the chain lengthens only at the 3' end, so the strand is synthesised 5' to 3', with the template read 3' to 5'.",
      "note": "McMurry 28.3 (Replication of DNA) states that addition of nucleotides to the growing chain takes place in the 5' to 3' direction and is catalysed by the DNA polymerase enzyme, the key step being the addition of a nucleoside 5'-triphosphate to the free 3'-hydroxyl group of the growing chain with the loss of a diphosphate leaving group, and that because both new strands are made 5' to 3' one is synthesised continuously (the leading strand) and the other in Okazaki fragments joined by DNA ligase (the lagging strand). Nucleophilic substitution at phosphorus is the same chemistry as the ATP phosphorylations of McMurry 27.5.",
      "options": {
        "A": "Correct. The chain's 3'-OH attacks the incoming triphosphate's alpha-phosphorus, releasing pyrophosphate, so every addition is at the 3' end.",
        "B": "The activation (triphosphate) is carried by the incoming monomer, not by the chain, and a growing chain has no 5'-triphosphate to react. This reversed geometry does not occur in any DNA polymerase.",
        "C": "Monophosphates cannot condense on their own; a phosphate must be activated as a good leaving group, which the beta,gamma-diphosphate of the triphosphate provides. The direction is fixed by the mechanism, not free.",
        "D": "Bases never bond covalently across the helix; the template base simply hydrogen-bonds to the incoming base to select it. The covalent bond formed is the phosphodiester in the new strand's backbone."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q15_leading_lagging",
    "topic": "Replication of DNA",
    "difficulty_level": "Medium",
    "question_text": "At a replication fork one new strand is made continuously and the other in short pieces. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "Both new strands must grow 5' to 3', but the two templates are antiparallel; the strand whose 3' end faces the fork grows continuously (leading), while the other must be made as Okazaki fragments, each started afresh, and joined later by DNA ligase (lagging)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "One template strand is transcribed while the other is replicated",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "DNA polymerase can work in either direction but runs faster on one strand",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The lagging strand contains uracil, which must be replaced in fragments",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two facts collide at the fork. The polymerase can only add to a 3'-OH, so every new strand grows 5' to 3'; and the two parental strands run in opposite directions. As the fork opens, one template is exposed in the 3' to 5' direction relative to the fork's motion, and its complement can be extended continuously toward the fork: the leading strand. The other template is exposed 5' to 3', so its complement would have to grow away from the fork; the cell copes by waiting for a stretch to open, laying down a short primer, extending it away from the fork, and repeating, producing Okazaki fragments that DNA ligase later seals into the lagging strand.",
      "approach": "Step 1: Fix the rule: polymerase adds only at a 3'-OH, so synthesis is 5' to 3' and the template is read 3' to 5'.\nStep 2: Orient the templates: they are antiparallel, so at any fork one template runs 3' to 5' into the fork and the other 5' to 3'.\nStep 3: Leading strand: complement of the 3'-to-5' template, made in one piece as the fork advances.\nStep 4: Lagging strand: complement of the other template, made backwards in fragments (each begun with a short RNA primer, in cells) that ligase joins.",
      "note": "McMurry 28.3 (Replication of DNA) states that because both new DNA strands are synthesised in the 5' to 3' direction they cannot be made in exactly the same way: the complement of the original 5'-to-3' strand is synthesised continuously in a single piece as the leading strand, while the complement of the original 3'-to-5' strand is synthesised discontinuously in small pieces called Okazaki fragments (named for Tsuneko Okazaki) that are subsequently linked by DNA ligases to form the lagging strand (Figure 28.5). The RNA primers that start each fragment are lecture material.",
      "options": {
        "A": "Correct. A single growth direction on antiparallel templates means one strand can be extended toward the fork and the other only away from it, in fragments that ligase joins.",
        "B": "Replication copies both strands into DNA; transcription is a separate process that makes RNA from one strand. Both new strands at a fork are DNA.",
        "C": "No DNA polymerase can add to a 5' end; the chemistry (3'-OH attacking a triphosphate) allows only one direction. The fragments exist precisely because the enzyme cannot reverse.",
        "D": "The lagging strand is ordinary DNA with thymine. What it does contain, transiently, are short RNA primers at the start of each fragment, which are replaced with DNA before ligation, but that is a consequence of fragmentary synthesis, not its cause."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q16_rna_vs_dna",
    "topic": "Transcription of DNA",
    "difficulty_level": "Easy",
    "question_text": "How does RNA differ from DNA in structure?",
    "options": [
      {
        "option_id": "A",
        "text": "RNA contains ribose instead of 2'-deoxyribose and uracil instead of thymine, is much smaller, and is single-stranded",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "RNA contains 2'-deoxyribose instead of ribose and is double-stranded",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "RNA uses thymine in place of uracil and has a peptide backbone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "RNA has the same sugar and bases as DNA but its phosphates are triesters",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "RNA is built on the same plan as DNA, a sugar-phosphate backbone with a base on each sugar, with three differences. The sugar is ribose, which keeps its 2'-hydroxyl; the base set is A, G, C and U, uracil taking thymine's place (it is thymine without the 5-methyl and pairs with adenine just as thymine does); and RNA molecules are single chains, far shorter than DNA (as few as 21 nucleotides against hundreds of millions), which fold back on themselves into hairpins and cloverleaves rather than forming a long double helix with a partner. The 2'-OH also makes RNA chemically less stable than DNA, since it can attack the adjacent phosphate and cleave the chain.",
      "approach": "Step 1: Sugar: ribose (2'-OH present) in RNA, 2'-deoxyribose in DNA.\nStep 2: Bases: uracil replaces thymine; A, G and C are shared.\nStep 3: Size and strands: RNA is small and single-stranded; DNA is enormous and double-stranded.\nStep 4: Backbone: the same 3'-to-5' phosphodiester links in both; there are no triesters and no peptide bonds in either.",
      "note": "McMurry 28.4 (Transcription of DNA) states that RNA is structurally similar to DNA but contains ribose rather than deoxyribose and uracil rather than thymine, that all RNA molecules are much smaller than DNA and remain single-stranded, and names the three major types (mRNA carrying messages to ribosomes, rRNA making up the ribosomes, tRNA transporting amino acids) plus the small functional RNAs. McMurry 28.1 gives the sizes: DNA up to 245 million nucleotides, RNA as few as 21.",
      "options": {
        "A": "Correct. Ribose, uracil, small and single-stranded are the four differences.",
        "B": "This is backwards on both counts: DNA is the deoxyribose, double-stranded nucleic acid; RNA has the 2'-OH and is single-stranded.",
        "C": "Uracil is the RNA base and thymine the DNA base, not the reverse, and both nucleic acids have phosphodiester backbones; peptide bonds belong to proteins.",
        "D": "The sugar and one base do differ, and the backbone phosphates of both DNA and RNA are diesters (with one negative charge each), not triesters. Triesters appear only as protected intermediates in chemical synthesis."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q17_mrna_from_template",
    "topic": "Transcription of DNA",
    "difficulty_level": "Medium",
    "question_text": "RNA polymerase transcribes the DNA template (antisense) strand 5'-GATTACCGTA-3'. What is the sequence of the RNA produced, written 5' to 3'?",
    "options": [
      {
        "option_id": "A",
        "text": "5'-UACGGUAAUC-3'",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "5'-CUAAUGGCAU-3'",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5'-GAUUACCGUA-3'",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5'-CTAATGGCAT-3'",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Transcription follows the same complementarity as replication with two changes: the product is RNA, so uracil is placed opposite adenine, and only one DNA strand, the template (antisense) strand, is read. The RNA is complementary and antiparallel to the template, so it is written by pairing each template base (A gets U, T gets A, G gets C, C gets G) and then reversing to the 5' to 3' convention. Because the template is itself the complement of the sense (coding) strand, the RNA ends up as a copy of the sense strand with U for T, which is why a gene's sequence is quoted as its coding strand.",
      "approach": "Step 1: Pair each template base: G-C, A-U, T-A, T-A, A-U, C-G, C-G, G-C, T-A, A-U gives 3'-CUAAUGGCAU-5'.\nStep 2: The RNA is antiparallel to the template, so that string runs 3' to 5'.\nStep 3: Reverse it: 5'-UACGGUAAUC-3'.\nStep 4: Check the first RNA base (U) against the last template base (A): they pair, as antiparallel strands must.",
      "note": "McMurry 28.4 (Transcription of DNA) states that ribonucleotides line up by hydrogen-bonding to their complementary bases on the DNA template, that bond formation occurs in the 5' to 3' direction, that only one of the two DNA strands is transcribed (the antisense or noncoding strand), and that the RNA produced is therefore a copy of the DNA sense strand with U everywhere the sense strand has T; Problem 28-5 asks for the RNA complementary to (5') GATTACCGTA (3') and Problem 28-6 the reverse question. The 5'-to-3' convention is McMurry 28.1.",
      "options": {
        "A": "Correct. Pair each template base with its RNA partner (U for A), then reverse to write the transcript 5' to 3'.",
        "B": "This is the complement written 3' to 5' and not reversed. The RNA runs antiparallel to the template, so its 5' end is opposite the template's 3' end.",
        "C": "This is the template itself with U for T. The transcript is complementary to the template, not a copy of it; it is a copy of the other (sense) strand.",
        "D": "This is a DNA complement with thymine. Transcription makes RNA, which uses uracil, and this string is also unreversed."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q18_template_from_rna",
    "topic": "Transcription of DNA",
    "difficulty_level": "Medium",
    "question_text": "An mRNA has the sequence 5'-UUCGCAGAGU-3'. What was the sequence of the DNA template strand from which it was transcribed, written 5' to 3'?",
    "options": [
      {
        "option_id": "A",
        "text": "5'-ACTCTGCGAA-3'",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "5'-AAGCGTCTCA-3'",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5'-TTCGCAGAGT-3'",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5'-UUCGCAGAGU-3'",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Working backwards from an RNA to its template uses the same rules in reverse: the template is complementary and antiparallel to the RNA, and it is DNA, so it contains T where the RNA has A. Pair each RNA base with its DNA partner (U with A, A with T, G with C, C with G) to get the template written 3' to 5', then reverse it. The other DNA strand, the sense strand, would read like the RNA with T for U; it is not the template but it is the strand whose sequence matches the message.",
      "approach": "Step 1: Pair each RNA base with DNA: U-A, U-A, C-G, G-C, C-G, A-T, G-C, A-T, G-C, U-A gives the template as 3'-AAGCGTCTCA-5'.\nStep 2: That string is 3' to 5'; reverse it for the convention: 5'-ACTCTGCGAA-3'.\nStep 3: Check antiparallel pairing: the template's 5' A pairs with the RNA's 3' U.\nStep 4: For contrast, the sense strand is 5'-TTCGCAGAGT-3', the RNA with T for U.",
      "note": "McMurry 28.4 (Transcription of DNA), Problem 28-6, asks from what DNA base sequence the RNA (5') UUCGCAGAGU (3') was transcribed, after stating that the transcribed strand is the antisense strand, that the sense and antisense strands are complementary, and that the RNA is a copy of the sense strand with U for T. The sequence conventions are McMurry 28.1.",
      "options": {
        "A": "Correct. The template is the antiparallel DNA complement of the RNA: pair, then reverse to 5' to 3'.",
        "B": "This is the template's complement written 3' to 5' without reversal. Reverse it to write it in the 5' to 3' convention.",
        "C": "This is the sense (coding) strand, the RNA with T in place of U. It has the same sequence as the message, but it is the other strand that RNA polymerase read.",
        "D": "This is the RNA itself. The template is DNA (thymine, no uracil) and complementary to the RNA, not identical."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q19_introns_exons",
    "topic": "Transcription of DNA",
    "difficulty_level": "Easy",
    "question_text": "In the maize gene for triose phosphate isomerase, about 70% of the DNA base pairs lie in introns. What are introns, and what happens to them?",
    "options": [
      {
        "option_id": "A",
        "text": "Noncoding stretches that interrupt the coding exons; they are transcribed but then cut out of the RNA, and the exons are joined by spliceosomes to give the final mRNA",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The coding stretches; the surrounding exons are removed before translation",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Regions of DNA that are never transcribed because RNA polymerase skips them",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Stretches translated into a signal peptide that is later cleaved from the protein",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "In vertebrates and flowering plants a gene is usually not one continuous coding sequence. It is broken into exons, the segments that carry the message, separated by introns, noncoding segments that can be much longer than the exons themselves. RNA polymerase transcribes the whole region, introns included, into a primary transcript; a spliceosome then excises each intron and ligates the flanking exons, and only the spliced product leaves the nucleus as mRNA. Alternative choices of which exons to join let one gene give several proteins, part of the reason 21,000 human genes yield far more than 21,000 proteins.",
      "approach": "Step 1: Define the parts: exon = expressed, coding; intron = intervening, noncoding.\nStep 2: Transcription copies both into the primary RNA transcript.\nStep 3: Splicing removes the introns from the RNA and joins the exons in order.\nStep 4: The mature mRNA carries only exon sequence to the ribosome; the maize TPI gene's nine exons make up just 30% of its length.",
      "note": "McMurry 28.4 (Transcription of DNA) states that in vertebrates and flowering plants genes are often not continuous: a gene begins in an exon, is interrupted by a noncoding intron, and resumes in another exon, that the final mRNA results only after the noncoded sections are cut out of the transcribed RNA and the remaining pieces are joined by spliceosome enzymes, and that the maize triose phosphate isomerase gene contains eight introns (about 70% of the base pairs) and nine exons (about 30%). Alternative splicing and posttranslational modification (McMurry 28.6) explain the protein count.",
      "options": {
        "A": "Correct. Introns are transcribed noncoding interruptions that splicing removes, leaving the joined exons as the mRNA.",
        "B": "The names are swapped: exons are the coding, expressed segments that survive in the mRNA; introns are the intervening pieces removed.",
        "C": "Introns are transcribed along with the exons; RNA polymerase reads straight through. They are removed afterwards from the RNA, not skipped in the DNA.",
        "D": "Introns are removed at the RNA stage and never reach the ribosome, so they are not translated. Signal peptides are encoded by exons and removed from the protein, a different process."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q20_anticodon",
    "topic": "Translation of RNA: Protein Biosynthesis",
    "difficulty_level": "Medium",
    "question_text": "The mRNA codon 5'-UUC-3' specifies phenylalanine. What is the anticodon on the tRNA that reads it, written in the standard 5' to 3' direction?",
    "options": [
      {
        "option_id": "A",
        "text": "5'-GAA-3'",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "5'-AAG-3'",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5'-UUC-3'",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5'-TTC-3'",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A tRNA recognises its codon by base pairing, so the anticodon is complementary to the codon, and because paired strands are antiparallel it is written in the opposite direction. Pairing U-A, U-A, C-G under 5'-UUC-3' gives 3'-AAG-5', which in the 5' to 3' convention is 5'-GAA-3'. The same rule applies throughout: the first base of the anticodon (5') pairs with the last base of the codon (3'). RNA anticodons use A, U, G and C; there is no thymine in tRNA.",
      "approach": "Step 1: Pair each codon base with its complement: U with A, U with A, C with G, giving 3'-AAG-5' aligned under 5'-UUC-3'.\nStep 2: Rewrite in the 5' to 3' direction by reversing: 5'-GAA-3'.\nStep 3: Check the antiparallel match: anticodon 5' G pairs with codon 3' C, anticodon 3' A pairs with codon 5' U.\nStep 4: This tRNA carries phenylalanine on its 3' end and delivers it when the ribosome reaches UUC.",
      "note": "McMurry 28.5 (Translation of RNA: Protein Biosynthesis) states that each tRNA contains an anticodon, a sequence of three ribonucleotides complementary to the codon, that the codon UUC on mRNA is read by a phenylalanine-bearing tRNA with the complementary anticodon GAA, and reminds the reader that because sequences are written 5' to 3' the anticodon must be reversed: the complement to (5')-UUC-(3') is (3')-AAG-(5'), written as (5')-GAA-(3'). Problem 28-8 asks for the anticodons for Ala, Phe, Leu and Tyr.",
      "options": {
        "A": "Correct. The complement of UUC is AAG read 3' to 5', which is GAA in the 5' to 3' convention.",
        "B": "AAG is the complement written in the 3' to 5' direction; the convention requires reversing it to GAA. An anticodon 5'-AAG-3' would read the codon 5'-CUU-3' (leucine).",
        "C": "The anticodon is complementary to the codon, not identical. UUC as an anticodon would pair with the codon GAA (glutamic acid).",
        "D": "Thymine does not occur in RNA; a tRNA anticodon uses uracil, and in any case the anticodon must be the complement of the codon, not its DNA transcription."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q21_codon_count",
    "topic": "Translation of RNA: Protein Biosynthesis",
    "difficulty_level": "Easy",
    "question_text": "Codons are triplets of the four RNA bases. How many codons are there, how are they used, and why is the code called degenerate?",
    "options": [
      {
        "option_id": "A",
        "text": "64 in all: 61 specify the 20 amino acids and 3 are stop signals, so most amino acids are encoded by more than one codon",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "20 in all, one per amino acid, plus one stop codon",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "16 in all, because codons are pairs of bases",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "64 in all, each specifying a different amino acid, so 64 amino acids are used in proteins",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Three bases per codon is the smallest word length that can encode twenty amino acids: two bases would give only 4 squared = 16 words, too few, while three give 4 cubed = 64, more than enough. Sixty-one of the 64 triplets are assigned to amino acids and three (UAA, UAG, UGA) signal termination; AUG, methionine, also serves as the start signal. Since 61 codons serve 20 amino acids, most amino acids have several synonymous codons, usually differing in the third base, which is what degenerate means. The assignments are the same in almost all organisms.",
      "approach": "Step 1: Count the words: four bases in three positions, 4 x 4 x 4 = 64.\nStep 2: Subtract the stop codons: 64 minus 3 = 61 sense codons.\nStep 3: Distribute 61 codons over 20 amino acids: leucine, serine and arginine have six each, methionine and tryptophan one each.\nStep 4: Degeneracy means a change in the third base often leaves the amino acid unchanged, which softens the effect of some mutations.",
      "note": "McMurry 28.5 (Translation of RNA: Protein Biosynthesis) states that each codon consists of three ribonucleotides specific for a given amino acid, that of the 4 cubed = 64 possible triplets 61 code for specific amino acids and 3 code for chain termination, and gives the full assignments in Table 28.1 (UAA, UAG and UGA stop; AUG methionine; UUC phenylalanine). Problem 28-7 asks for codons of Ala, Phe, Leu and Tyr, each of which has several.",
      "options": {
        "A": "Correct. Sixty-four triplets, sixty-one for amino acids and three stops, so the code is degenerate.",
        "B": "Twenty codons would need each to be unique and would leave no room for redundancy or for the three stop codons; the triplet code in fact has 64 words.",
        "C": "Two-base codons would give only sixteen words, fewer than the twenty amino acids that must be encoded, which is why the code uses triplets.",
        "D": "Only twenty amino acids are used in translation; the 61 sense codons are shared among them, several to an amino acid. Sixty-four amino acids would leave no stop codons and does not match the table."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q22_trna_ester",
    "topic": "Translation of RNA: Protein Biosynthesis",
    "difficulty_level": "Medium",
    "question_text": "How is an amino acid attached to its transfer RNA, and what kind of bond is it?",
    "options": [
      {
        "option_id": "A",
        "text": "As an ester between the amino acid's carboxyl group and the 3'-hydroxyl of the ribose at the tRNA's 3' end",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "As an amide between the amino acid's amino group and a phosphate of the tRNA backbone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "By hydrogen bonds between the amino acid and the anticodon loop",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "As an N-glycosidic bond to a base in the middle leaf of the cloverleaf",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A tRNA has two working ends. The anticodon loop, on the middle leaf of its cloverleaf, reads the mRNA by base pairing. The 3' end, which ends in the sequence CCA, carries the amino acid: the carboxyl group of the amino acid is esterified to the 3'-hydroxyl of the terminal adenosine's ribose. That ester is an activated acyl group, made at the cost of ATP by an aminoacyl-tRNA synthetase, and it is what the ribosome uses: the free amino group of the next aminoacyl-tRNA attacks the ester carbonyl of the growing chain's tRNA, forming the peptide bond and releasing the emptied tRNA. The tRNA is thus both the adaptor that decodes the codon and the activated ester that supplies the amino acid.",
      "approach": "Step 1: Locate the attachment: the 3' terminal ribose of the tRNA, whose 3'-OH is free.\nStep 2: Identify the bond: RCO-O-ribose, an ester of the amino acid's carboxylic acid.\nStep 3: Note why an ester: it is a good acyl donor, so amide (peptide) formation with the next amino acid's NH2 is favourable, as in the coupling step of solution-phase peptide synthesis.\nStep 4: Keep the two ends distinct: anticodon for recognition, 3'-ester for chemistry.",
      "note": "McMurry 28.5 (Translation of RNA: Protein Biosynthesis) states that a typical tRNA is single-stranded, roughly cloverleaf-shaped (Figure 28.7), consists of about 70 to 100 ribonucleotides, is bonded to a specific amino acid by an ester linkage through the 3' hydroxyl on ribose at the 3' end of the tRNA, and contains on its middle leaf the anticodon; as each codon is read, tRNAs bring the correct amino acids into position for enzyme-mediated transfer to the growing peptide (Figure 28.8). Ester aminolysis is the chemistry of McMurry 21.6.",
      "options": {
        "A": "Correct. The amino acid hangs off the 3' end as an ester of the terminal ribose's 3'-OH, an activated form ready for peptide-bond formation.",
        "B": "The amino group must stay free to attack the growing chain's ester; and phosphates are not acylated in this process. The link is through the carboxyl, as an ester.",
        "C": "The anticodon pairs with the mRNA, not with the amino acid, and hydrogen bonds could not activate the amino acid for peptide synthesis. The amino acid is covalently attached at the other end.",
        "D": "Bases are attached to ribose by N-glycosidic bonds; amino acids are not. The middle leaf carries the anticodon, and the amino acid is on the 3' end."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q23_palindrome",
    "topic": "DNA Sequencing",
    "difficulty_level": "Medium",
    "question_text": "The restriction enzyme AluI cleaves DNA between G and C of the sequence 5'-AGCT-3', which is called a palindrome. In what sense is AGCT a palindrome?",
    "options": [
      {
        "option_id": "A",
        "text": "Its complementary strand, read in its own 5' to 3' direction, is also AGCT, so both strands present the same sequence to the enzyme",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It reads the same forwards and backwards on one strand, AGCT and TCGA being identical",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It contains equal numbers of purines and pyrimidines",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It occurs at the same position from both ends of the chromosome",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A DNA palindrome is defined across the two strands, not along one. The complement of 5'-AGCT-3' is, base by base, 3'-TCGA-5'; written in its own 5' to 3' direction that is 5'-AGCT-3', the same sequence. So a restriction site has twofold symmetry: whichever strand the enzyme approaches, it sees AGCT, and a dimeric enzyme can cut both strands at equivalent points, here between G and C on each, giving blunt ends. Sites with staggered cuts give sticky ends. Cleaving a genome with an enzyme of known specificity yields fragments of manageable size for sequencing, and cutting the same DNA with a second enzyme gives overlapping fragments whose overlaps let the pieces be ordered.",
      "approach": "Step 1: Write the complement under 5'-AGCT-3': T under A, C under G, G under C, A under T, giving 3'-TCGA-5'.\nStep 2: Reverse it to the 5' to 3' convention: 5'-AGCT-3'.\nStep 3: It is identical to the original strand, so the site is palindromic and symmetric.\nStep 4: AluI cuts G|C on both strands, producing blunt-ended fragments.",
      "note": "McMurry 28.6 (DNA Sequencing) states that the first step in sequencing is to cleave the chain at known points with restriction endonucleases (more than 4000 known, about 600 commercial), each cleaving at a specific base sequence, that AluI cleaves between G and C in the four-base sequence AG-CT, that this sequence is a palindrome meaning (5')-AGCT-(3') is the same as its complement (3')-TCGA-(5') when both are read in the same 5' to 3' direction, and that the same is true of other restriction sites; cutting with a second enzyme gives overlapping segments that allow complete sequencing.",
      "options": {
        "A": "Correct. The complementary strand of AGCT is also AGCT when each is read 5' to 3', which is the DNA meaning of palindrome.",
        "B": "Along a single strand AGCT reversed is TCGA, a different sequence; the word palindrome here refers to the two strands, not to one strand read backwards.",
        "C": "Equal purine and pyrimidine content is true of AGCT but is not the defining property; ATGC has the same composition and is not palindromic.",
        "D": "Position in the chromosome has nothing to do with it; a palindromic site occurs wherever the sequence appears, many times per genome."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q24_sanger_ladder",
    "topic": "DNA Sequencing",
    "difficulty_level": "Medium",
    "question_text": "After a Sanger sequencing reaction the products are separated by size, and the smallest fragment fluoresces with the colour of the ddC dye. What does that tell you, and how is the rest of the sequence read?",
    "options": [
      {
        "option_id": "A",
        "text": "The first base added after the primer was C; reading the fragments in order of increasing length and noting each terminal dye colour gives the sequence of the new strand 5' to 3'",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The last base of the template is C; reading fragments from largest to smallest gives the template 5' to 3'",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The primer ended in C; the sequence is read from the colours of the primers",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cytosine is the most abundant base; the colour intensity gives base composition, not sequence",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Every product of a Sanger reaction starts with the primer and ends with a dye-labelled dideoxynucleotide at the position where a terminator happened to be incorporated. Because the mixture contains a little of each of the four terminators, chains stop after every possible position, and the collection of products is a ladder in which each rung is one nucleotide longer than the one below and carries the colour of its terminal base. Electrophoresis sorts the rungs by length; the shortest is primer plus one nucleotide, the next primer plus two, and so on. Reading the colours from the shortest to the longest therefore spells the newly synthesised strand from its 5' end (the primer) toward its 3' end, and the template is the complement of that.",
      "approach": "Step 1: The shortest fragment is primer plus one base, terminated by ddC: the first base incorporated after the primer is C.\nStep 2: The next fragment (one base longer) ends in whatever terminator stopped it; its colour gives base two, and so on up the ladder.\nStep 3: Length order is position order, so smallest to largest reads the new strand 5' to 3'.\nStep 4: The template, being complementary and antiparallel, is obtained by pairing and reversing; commercial instruments read 1100 bases per run this way.",
      "note": "McMurry 28.6 (DNA Sequencing) states that when the Sanger reaction is complete the product consists of a mixture of DNA fragments of all possible lengths, each terminated by one of the four dye-labelled dideoxyribonucleotides, that the mixture is separated by size by gel electrophoresis (26.2), and that the identity of the terminal dideoxyribonucleotide in each piece, and thus the sequence of the restriction fragment, is determined by noting the colour with which the attached dye fluoresces (Figure 28.9); sequences up to 1100 nucleotides are read at up to 19,000 bases per hour with 98% accuracy.",
      "options": {
        "A": "Correct. Fragment length is position, and each fragment's colour is the base at that position, so the ladder reads the new strand from the primer outward.",
        "B": "The smallest fragment reports the first position after the primer, not the last, and the fragments carry the new strand's bases, whose complement is the template. Reading largest to smallest would reverse the order.",
        "C": "Every fragment carries the same primer; the primer is unlabelled and its sequence is known. The colours come from the terminating dideoxynucleotides at the 3' end of each fragment.",
        "D": "Each fragment carries exactly one dye, at its terminus, so colour marks identity at a position, not abundance. Sequence, not composition, is what the ladder gives."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q25_dmt_removal_sn1",
    "topic": "DNA Synthesis",
    "difficulty_level": "Hard",
    "question_text": "The 5'-hydroxyl of each nucleoside used in DNA synthesis is protected as its p-dimethoxytrityl (DMT) ether, which comes off in seconds with dilute dichloroacetic acid while ordinary ethers are untouched. Why is the DMT group so easy to remove?",
    "options": [
      {
        "option_id": "A",
        "text": "Cleavage is SN1: protonation of the ether oxygen lets the C-O bond break to give a tertiary benzylic cation delocalised over three aryl rings, two of them bearing electron-donating para-methoxy groups",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cleavage is SN2: the acid's anion attacks the trityl carbon from the back side",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The methoxy groups are hydrolysed first, and the resulting phenol falls off",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The DMT group is an ester, and esters hydrolyse in acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A protecting group is chosen so that it goes on and comes off under conditions nothing else in the molecule notices, and the DMT ether is a textbook case of using carbocation stability. Ethers normally need hot strong acid to cleave. A trityl ether, however, cleaves by an SN1 path: mild acid protonates the oxygen, and the C-O bond breaks because the carbon left behind is a triarylmethyl cation, tertiary, benzylic three times over, and here further stabilised by resonance donation from two para-methoxy groups. The bright orange colour of that cation is used by synthesisers to monitor each cycle. The freed 5'-OH then couples; the cyanoethyl phosphate esters, the base amides and the support ester are all stable to the dilute acid.",
      "approach": "Step 1: Protonate the ether oxygen with dichloroacetic acid.\nStep 2: Ionise: the C-O bond breaks heterolytically, the nucleoside 5'-OH is released and the dimethoxytrityl cation forms.\nStep 3: Account for the speed: the cation is tertiary and benzylic, with charge delocalised into three rings and onto the two methoxy oxygens.\nStep 4: The cation is scavenged (by the acid's anion or by a trap) and washed away; the protecting group is not restored.",
      "note": "McMurry 28.7 (DNA Synthesis) states that the deoxyribose 5'-OH is protected as its p-dimethoxytrityl (DMT) ether, that the second step of the synthesis is removal of the DMT group by treatment with dichloroacetic acid in CH2Cl2, and that the reaction occurs by an SN1 mechanism and proceeds rapidly because of the stability of the tertiary, benzylic dimethoxytrityl cation; Problem 28-11 asks for the mechanism. Acid cleavage of ethers and the SN1 reactivity of benzylic substrates are McMurry 18.3 and 11.5.",
      "options": {
        "A": "Correct. Protonation and SN1 ionisation give an exceptionally stabilised triarylmethyl cation, which is why dilute acid suffices.",
        "B": "A tertiary, triaryl carbon is completely hindered to backside attack and would never react by SN2. The very features that block SN2 are what make the SN1 cation so stable.",
        "C": "Aryl methyl ethers are inert to dilute dichloroacetic acid; the methoxy groups stay on and are in fact the reason the cation is so well stabilised. The bond that breaks is the trityl C to the 5'-O.",
        "D": "A DMT group is an ether (trityl carbon bonded to the 5'-oxygen), not an ester; there is no carbonyl. Its lability comes from the cation it leaves behind, not from ester hydrolysis."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q26_coupling_and_oxidation",
    "topic": "DNA Synthesis",
    "difficulty_level": "Hard",
    "question_text": "In the phosphoramidite method the free 5'-hydroxyl is coupled with a nucleoside 3'-phosphoramidite in the presence of tetrazole, and the product is then treated with iodine in aqueous THF. What do the two reagents do?",
    "options": [
      {
        "option_id": "A",
        "text": "Tetrazole protonates and displaces the amine of the phosphoramidite so the 5'-OH can form a P(III) phosphite triester; iodine then oxidises that phosphite to the P(V) phosphate triester of the DNA backbone",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Tetrazole removes the DMT group and iodine cleaves the cyanoethyl group",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Tetrazole is the solvent and iodine caps unreacted hydroxyls as iodides",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Tetrazole oxidises the phosphoramidite and iodine forms the phosphodiester bond",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Phosphoramidite chemistry separates the difficult part of making a phosphate diester into two easy steps. The incoming nucleoside carries at its 3' position a P(III) group, a phosphoramidite R2N-P(OR)(OCH2CH2CN), in which the dialkylamino group is the leaving group. Tetrazole, a weak acid, protonates that nitrogen and makes the phosphorus electrophilic, and the support-bound 5'-hydroxyl displaces the amine, forming a phosphite triester, P(OR)3, in better than 99% yield. A phosphite is not the natural linkage, so the next step oxidises phosphorus from +3 to +5 with iodine and water, giving the phosphate triester, still carrying its beta-cyanoethyl protecting group until the final ammonia treatment converts every triester to the diester of DNA.",
      "approach": "Step 1: Recognise the phosphoramidite: a trivalent phosphorus bearing two alkoxy groups (the nucleoside 3'-O and cyanoethyl-O) and a diisopropylamino group.\nStep 2: Coupling: tetrazole protonates the amino nitrogen; the 5'-OH attacks phosphorus and the amine leaves, giving a phosphite triester with three P-O bonds.\nStep 3: Oxidation: iodine in aqueous THF with 2,6-dimethylpyridine converts P(III) to P(V), adding the P=O.\nStep 4: The cycle repeats; the cyanoethyl groups and the base protecting groups are removed together by ammonia at the end.",
      "note": "McMurry 28.7 (DNA Synthesis) states that the third step is coupling of the polymer-bonded deoxynucleoside with a protected deoxynucleoside containing a phosphoramidite group [R2NP(OR)2] at its 3' position, in acetonitrile with catalysis by the heterocyclic amine tetrazole, yielding a phosphite P(OR)3 with one oxygen protected by a beta-cyanoethyl group, in better than 99% yield, and that the fourth step oxidises the phosphite to a phosphate with iodine in aqueous tetrahydrofuran in the presence of 2,6-dimethylpyridine, after which deprotection, coupling and oxidation are repeated. The text calls tetrazole a heterocyclic amine; it acts as a weak acid (pKa about 4.9) as well as a nucleophilic catalyst.",
      "options": {
        "A": "Correct. Tetrazole activates the phosphoramidite so the hydroxyl displaces the amine to a phosphite, and iodine oxidises the phosphite to the phosphate.",
        "B": "DMT removal is done by dichloroacetic acid before coupling, and the cyanoethyl group is removed by ammonia at the very end. Neither is the job of tetrazole or iodine.",
        "C": "The solvent is acetonitrile; tetrazole is a catalyst. Capping of unreacted hydroxyls, when done, uses acetic anhydride, not iodine; iodine is the oxidant.",
        "D": "The roles are reversed. Tetrazole catalyses the bond-forming coupling (no change in oxidation state), and iodine performs the oxidation afterwards."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q27_cyanoethyl_elimination",
    "topic": "DNA Synthesis",
    "difficulty_level": "Hard",
    "question_text": "At the end of a DNA synthesis, aqueous ammonia removes the beta-cyanoethyl group from every phosphate triester, releasing acrylonitrile (CH2=CHCN). What kind of reaction is that?",
    "options": [
      {
        "option_id": "A",
        "text": "An E1cB elimination: base removes the proton alpha to the nitrile to give a stabilised carbanion, which expels the phosphate diester anion as the leaving group",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "An SN2 displacement of phosphate by ammonia at the CH2 carbon",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Hydrolysis of the nitrile to an amide, which then falls off",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "An E2 elimination in which ammonia removes the proton beta to the nitrile",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The beta-cyanoethyl group is chosen because it can be removed by base through an elimination that runs by the E1cB (conjugate base) mechanism. The CH2 next to the nitrile is acidic, because the anion it gives is resonance-stabilised with the C=N, and ammonia removes that proton. The carbanion then pushes out the group on the adjacent carbon, the phosphate diester oxygen, which is a good leaving group since it departs as a stabilised anion. The products are acrylonitrile, which is washed away, and the phosphate diester anion of natural DNA. The same treatment hydrolyses the benzoyl and isobutyryl amides on the bases and the ester to the silica, so one reagent finishes the synthesis.",
      "approach": "Step 1: Find the acidic hydrogen: on the carbon alpha to the nitrile, N C-CH2-CH2-O-P.\nStep 2: Ammonia deprotonates it; the resulting carbanion is stabilised by delocalisation onto the nitrile nitrogen.\nStep 3: The carbanion's electrons form a C=C bond and expel the beta oxygen, the phosphate diester anion (a good leaving group).\nStep 4: Products: acrylonitrile and the deprotected phosphate. Deprotonation before leaving-group loss is what makes it E1cB rather than E2.",
      "note": "McMurry 28.7 (DNA Synthesis) states that the final step is removal of all protecting groups and cleavage of the ester bond holding the DNA to the silica, all done at the same time by treatment with aqueous NH3, and Problem 28-12 asks for the mechanism of cleavage of the beta-cyanoethyl protecting group with acrylonitrile as a by-product and what kind of reaction is occurring. The E1cB mechanism is McMurry 11.10, and the acidity of a hydrogen alpha to a nitrile is the carbonyl-type acidity of McMurry 22.5.",
      "options": {
        "A": "Correct. Deprotonation alpha to the nitrile gives a stabilised carbanion, which eliminates the phosphate: E1cB, releasing acrylonitrile.",
        "B": "SN2 at the CH2 would transfer the cyanoethyl group to ammonia and release the phosphate, but it would give 3-aminopropanenitrile, not acrylonitrile. The observed alkene by-product shows an elimination.",
        "C": "The nitrile survives (it is in the acrylonitrile by-product) and its hydrolysis would not free the phosphate. The nitrile's role is to acidify the neighbouring CH2.",
        "D": "The proton removed is alpha to the nitrile (beta to the phosphate leaving group), and it is removed first to give a discrete carbanion; a concerted E2 with ammonia as base would not be fast enough. The nitrile-stabilised anion is the point of the design."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q28_base_protection",
    "topic": "DNA Synthesis",
    "difficulty_level": "Medium",
    "question_text": "For solid-phase DNA synthesis, adenine and cytosine are protected as benzoyl amides and guanine as an isobutyryl amide, but thymine is used unprotected. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "The exocyclic NH2 groups of A, C and G are nucleophiles that would compete in the coupling and phosphorylation steps; thymine has no NH2, only amide-like N-H groups that are not nucleophilic",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Thymine's methyl group blocks its ring nitrogen sterically",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Thymine is not incorporated by the chemical method; it is added enzymatically afterwards",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Thymine's carbonyl groups are protected as acetals instead",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Protection is needed wherever a nucleophile could react with the electrophilic phosphorus reagents or the activated intermediates. Adenine, cytosine and guanine each carry a primary amine on a ring carbon, and an aryl-type amine of that sort is nucleophilic enough to be phosphitylated or acylated during the cycles; converting it to an amide (benzoyl or isobutyryl) removes the problem, and the amide is hydrolysed by the final ammonia treatment. Thymine's nitrogens are both flanked by carbonyl groups, imide-like N-H groups with their lone pairs delocalised; they are neither nucleophilic nor basic under the synthesis conditions, so thymine needs no protection at all.",
      "approach": "Step 1: List the nucleophilic sites on each base: A (N6-NH2), C (N4-NH2), G (N2-NH2), T (none; its N-H groups are imide-like).\nStep 2: Protect each exocyclic amine as an amide, which is far less nucleophilic: benzoyl on A and C, isobutyryl on G.\nStep 3: Leave thymine alone; its N3-H is acidic rather than nucleophilic and its carbonyls are unreactive to the reagents.\nStep 4: At the end, aqueous ammonia hydrolyses all the amides back to the free amines.",
      "note": "McMurry 28.7 (DNA Synthesis) states that both the 5'-OH on the sugar and free NH2 groups on the heterocyclic bases must be protected, that adenine and cytosine bases are protected by benzoyl groups, guanine by an isobutyryl group, and thymine requires no protection, and that all protecting groups are removed at the end by aqueous NH3. The low nucleophilicity of an amide nitrogen is the resonance argument of McMurry 24.3 and 26.4.",
      "options": {
        "A": "Correct. Only bases with a free exocyclic amine need protecting; thymine has no amine, so it is used as is.",
        "B": "The 5-methyl is on a ring carbon far from the nitrogens and shields nothing. The reason is electronic: thymine has no nucleophilic amine, not a hindered one.",
        "C": "All four deoxynucleosides are incorporated chemically by the same phosphoramidite cycle; thymine's phosphoramidite simply carries no base protecting group.",
        "D": "Carbonyl groups are not protected in this chemistry; the carbonyls of thymine (and of guanine and cytosine) are unreactive to the coupling and oxidation reagents. Only amines need masking."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q29_synthesis_direction",
    "topic": "DNA Synthesis",
    "difficulty_level": "Medium",
    "question_text": "In which direction does a DNA synthesiser build an oligonucleotide, and how does that compare with DNA polymerase?",
    "options": [
      {
        "option_id": "A",
        "text": "3' to 5': the first nucleoside is anchored by its 3'-OH and each new nucleoside is coupled through its 3'-phosphoramidite to the chain's free 5'-OH; the enzyme works the other way, 5' to 3'",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "5' to 3', exactly as DNA polymerase does, since the chemistry is the same",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "From both ends at once, meeting in the middle",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3' to 5' for the enzyme and 5' to 3' for the machine",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The direction of growth is set by which hydroxyl is the nucleophile. In the cell the growing chain's 3'-OH attacks the incoming monomer's 5'-triphosphate, so the chain lengthens at its 3' end and is made 5' to 3'. On the synthesiser the arrangement is inverted: the first nucleoside is tied to the support through its 3'-oxygen, the chain's free end is the 5'-OH (unmasked by removing DMT each cycle), and the incoming monomer brings the activated phosphorus on its 3' position. The 5'-OH attacks that phosphorus, so the chain lengthens at its 5' end and is made 3' to 5'. The finished oligo is the same kind of molecule either way; only the order of assembly differs.",
      "approach": "Step 1: Enzyme: nucleophile = chain 3'-OH; electrophile = monomer 5'-triphosphate; growth at the 3' end; direction 5' to 3'.\nStep 2: Synthesiser: nucleophile = chain 5'-OH; electrophile = monomer 3'-phosphoramidite; growth at the 5' end; direction 3' to 5'.\nStep 3: The support ester at the very first 3'-OH makes the 3' end the anchored, fixed end.\nStep 4: Consequence: to make a given sequence, the synthesiser is loaded with the 3'-terminal nucleoside first and the 5'-terminal one last.",
      "note": "McMurry 28.7 (DNA Synthesis) states that the first step is to attach a protected deoxynucleoside to a silica support by an ester linkage to its 3'-OH, that the 5'-OH is protected as the DMT ether and freed by acid, and that the polymer-bonded deoxynucleoside is then coupled with a protected deoxynucleoside containing a phosphoramidite group at its 3' position; McMurry 28.3 states that DNA polymerase adds nucleoside 5'-triphosphates to the free 3'-hydroxyl of the growing chain, 5' to 3'. The text does not spell out the 3'-to-5' direction of the chemical method; it follows from those two facts.",
      "options": {
        "A": "Correct. Anchored at the 3' end and extended at the free 5'-OH with 3'-phosphoramidites, the chemical chain grows 3' to 5', opposite to the enzyme's 5' to 3'.",
        "B": "The chemistry is not the same: the synthesiser puts the activated phosphorus on the monomer's 3' position and uses the chain's 5'-OH as nucleophile, the mirror image of the polymerase reaction, so the direction is reversed.",
        "C": "One end is covalently fixed to the support and only the free 5'-OH can react, so growth is strictly one-directional.",
        "D": "This inverts both. The enzyme is the 5' to 3' machine (chain 3'-OH attacks a 5'-triphosphate); the synthesiser is 3' to 5'."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q30_pcr_steps",
    "topic": "The Polymerase Chain Reaction",
    "difficulty_level": "Medium",
    "question_text": "One cycle of the polymerase chain reaction has three temperature steps. What happens at each?",
    "options": [
      {
        "option_id": "A",
        "text": "95 °C: the double-stranded DNA denatures into single strands; 37 to 50 °C: the two primers anneal to their complementary sequences at the ends of the target; 72 °C: Taq polymerase extends each primer to copy the target",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "95 °C: the polymerase is activated; 37 to 50 °C: DNA is synthesised; 72 °C: the product strands separate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "95 °C: the phosphodiester backbone is hydrolysed into nucleotides; 37 to 50 °C: they are reassembled; 72 °C: the copies are ligated",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "95 °C: primers are synthesised; 37 to 50 °C: the template is denatured; 72 °C: the copies are purified",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "PCR copies a chosen stretch of DNA by running replication in a test tube over and over, using temperature to do what helicases and primases do in the cell. Heating to 95 °C breaks the hydrogen bonds between the strands (denaturation) but leaves the covalent chains intact. Cooling to 37 to 50 °C lets two short synthetic primers, present in huge excess, hydrogen-bond to their complementary sites flanking the target (annealing), one on each strand. Raising to 72 °C, the working temperature of the heat-stable Taq polymerase, lets the enzyme extend each primer 5' to 3' across the target using the dNTPs supplied (extension). Every cycle doubles the number of target copies, and because Taq survives the 95 °C step the cycle can be repeated thirty times without adding fresh enzyme.",
      "approach": "Step 1: Denature at 95 °C: duplex to two single strands, no bonds broken except hydrogen bonds.\nStep 2: Anneal at 37 to 50 °C: each primer (about 20 bases) pairs with its site at one end of the target on one strand.\nStep 3: Extend at 72 °C: Taq adds dNTPs to each primer's 3'-OH, copying the target on both strands.\nStep 4: Repeat: 2, 4, 8 copies; after 30 cycles up to 2 to the 30th in theory, 10 to the 6th to 10 to the 8th in practice.",
      "note": "McMurry 28.8 (The Polymerase Chain Reaction) gives the three steps: the DNA is heated at 95 °C with Taq polymerase, Mg2+, the four dNTPs and a large excess of two primers of about 20 bases complementary to the ends of the target, and the double strands denature; the temperature is lowered to between 37 and 50 °C and the primers anneal by hydrogen bonding; the temperature is raised to 72 °C and Taq polymerase adds nucleotides to the primed strands; repeating the cycle doubles the copies each time (Figure 28.10), 30 cycles in an hour for a theoretical 2 to the 30th and a practical 10 to the 6th to 10 to the 8th.",
      "options": {
        "A": "Correct. Denature, anneal, extend, at 95, 37 to 50 and 72 °C respectively; each cycle doubles the target.",
        "B": "The enzyme needs no activation and works at 72 °C, not 37 to 50 °C; and 72 °C does not separate strands. The order and roles are scrambled.",
        "C": "Heat does not hydrolyse the backbone; 95 °C only unpairs the strands. PCR copies the target by polymerisation on intact templates, not by taking DNA apart and rebuilding it.",
        "D": "Primers are made beforehand on a DNA synthesiser and added to the tube; denaturation is the hot step, not the cool one; and purification comes after the cycles, not within them."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q31_why_taq",
    "topic": "The Polymerase Chain Reaction",
    "difficulty_level": "Easy",
    "question_text": "Why was the discovery of Taq DNA polymerase, from the hot-spring bacterium Thermus aquaticus, the key to making PCR practical?",
    "options": [
      {
        "option_id": "A",
        "text": "It is heat-stable, so it survives the 95 °C denaturation step of every cycle and need not be replaced; an ordinary polymerase would be denatured each time",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It can synthesise DNA without a primer",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It uses ribonucleotides, so no dNTPs are needed",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It has no error rate, unlike human polymerases",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Every PCR cycle includes a step at 95 °C to melt the duplex, and most enzymes are proteins that unfold irreversibly at that temperature. Early PCR therefore required fresh polymerase to be pipetted in after every denaturation, thirty times per run. Taq polymerase comes from an organism that lives in near-boiling water, so the enzyme keeps its fold at 95 °C and works best at about 72 °C; one addition at the start lasts the whole run, which made automation in a thermal cycler possible. Taq still needs a primer with a free 3'-OH, dNTPs and Mg2+, and it makes errors (it has no proofreading); Vent and Pfu polymerases, from vent bacteria, are heat-stable and more accurate.",
      "approach": "Step 1: Identify the harsh step: 95 °C denaturation, repeated every cycle.\nStep 2: Ordinary polymerases denature there and must be added again after each cycle, which is impractical to automate.\nStep 3: Taq, from a thermophile, is stable at 95 °C and active at 72 °C, so a single dose serves all thirty cycles.\nStep 4: Its remaining limitations (primer required, error rate about one in 10,000 bases) are addressed by primer design and by proofreading enzymes such as Pfu.",
      "note": "McMurry 28.8 (The Polymerase Chain Reaction) states that the key to PCR is Taq DNA polymerase, a heat-stable enzyme isolated from the thermophilic bacterium Thermus aquaticus found in a hot spring in Yellowstone, which can take a single strand with a short primer and finish constructing the complementary strand, and that improved heat-stable polymerases, Vent and Pfu from bacteria near ocean-floor vents, have substantially lower error rates. The PCR method was invented by Kary Mullis in 1986.",
      "options": {
        "A": "Correct. Heat stability lets the enzyme ride through thirty denaturation steps, which is what made the automated cycle possible.",
        "B": "Taq, like every DNA polymerase, extends only from a primer's 3'-OH; the two primers in the PCR mixture are essential and define which segment is amplified.",
        "C": "Taq is a DNA polymerase and uses deoxynucleoside triphosphates; the reaction mixture supplies the four dNTPs. Ribonucleotides would make RNA.",
        "D": "Taq has a substantial error rate, since it lacks proofreading; the text notes that Vent and Pfu are more accurate. Its advantage is thermostability, not fidelity."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q32_pcr_copies",
    "topic": "The Polymerase Chain Reaction",
    "difficulty_level": "Easy",
    "question_text": "Starting from a single double-stranded target molecule, how many copies are present after ten complete PCR cycles at 100% efficiency, and after thirty?",
    "options": [
      {
        "option_id": "A",
        "text": "About 1,000 after ten cycles (2 to the 10th = 1,024) and about a billion after thirty (2 to the 30th), because each cycle doubles the number",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "20 after ten cycles and 60 after thirty, two new copies per cycle",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "100 after ten cycles and 900 after thirty, since copies grow as the square of the cycle number",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,024 after ten cycles and 3,072 after thirty, since the rate is constant",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Each PCR cycle uses every target molecule present as a template, so the count doubles per cycle and grows exponentially: 1, 2, 4, 8, ... 2 to the nth after n cycles. Ten cycles give 1,024 copies and thirty give 2 to the 30th, about 1.07 billion, which is why a few picograms of DNA from a crime scene become micrograms in an hour. Real efficiency per cycle is below 100% (primers and enzyme are eventually limiting), so thirty cycles typically yield a million- to hundred-million-fold amplification rather than a billion-fold, still enough to sequence or fingerprint.",
      "approach": "Step 1: One cycle: the two strands of the target each get a complementary copy, 1 duplex becomes 2.\nStep 2: n cycles: 2 to the nth duplexes. Ten cycles: 2 to the 10th = 1,024.\nStep 3: Thirty cycles: 2 to the 30th, roughly 10 to the 9th.\nStep 4: Practical yield is 10 to the 6th to 10 to the 8th, as inefficiency accumulates over the later cycles.",
      "note": "McMurry 28.8 (The Polymerase Chain Reaction) states that repeating the denature-anneal-synthesise cycle a second time yields four DNA copies, a third time eight, and so on in an exponential series, that PCR has been automated and 30 or so cycles can be carried out in an hour for a theoretical amplification factor of 2 to the 30th (about 10 to the 9th), and that in practice, with cycle efficiency below 100%, an experimental amplification of about 10 to the 6th to 10 to the 8th is routinely achieved; it opens with the figures of under 1 pg (about 10 to the 5th molecules) to several micrograms (about 10 to the 11th).",
      "options": {
        "A": "Correct. Doubling each cycle gives 2 to the nth: 1,024 after ten cycles and about a billion after thirty, in theory.",
        "B": "Adding two copies per cycle would be linear growth. In PCR every existing copy is a template in the next cycle, so growth is exponential.",
        "C": "Growth is not quadratic. The number of templates itself doubles each round, which is the definition of exponential growth: 2 to the nth, not n squared.",
        "D": "The first figure is right but the rate is not constant; the per-cycle doubling continues, so thirty cycles give 2 to the 30th, a million times more than 1,024, not three times."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q33_primer_role",
    "topic": "The Polymerase Chain Reaction",
    "difficulty_level": "Medium",
    "question_text": "A PCR mixture contains a large excess of two oligonucleotide primers of about 20 bases each. What do they do, and how are they designed?",
    "options": [
      {
        "option_id": "A",
        "text": "Each is complementary to the sequence at one end of the target segment, on opposite strands; they anneal there and provide the 3'-OH from which Taq polymerase extends, so the segment between them is what gets amplified",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "They are random sequences that bind anywhere, so the whole genome is amplified",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "They are complementary to each other and pair to form the first copy of the target",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "They are the dye-labelled dideoxynucleotides that terminate each copy",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "DNA polymerases cannot start a chain; they can only extend a 3'-hydroxyl that is already paired to a template. PCR supplies that start with two synthetic primers, each about twenty nucleotides long, chosen to match the sequences that flank the region of interest: one primer pairs with one strand at one end of the target, the other with the other strand at the other end, both oriented so that their 3' ends point into the target. After annealing, Taq extends each primer across the target, and because each new strand contains the other primer's site, the product itself serves as template in the next cycle. The primers therefore define exactly which segment is amplified and set the length of the product. Their large excess ensures they, rather than the original partner strand, capture the templates when the mixture cools.",
      "approach": "Step 1: Recall the enzyme's need: a paired 3'-OH to extend from.\nStep 2: Design two primers from the known flanking sequences, complementary to opposite strands, 3' ends facing inward.\nStep 3: In each cycle the primers anneal at 37 to 50 °C and are extended at 72 °C, copying the target on both strands.\nStep 4: Only sequence lying between the two primer sites doubles every cycle, so the product is a defined fragment whose ends are the primers.",
      "note": "McMurry 28.8 (The Polymerase Chain Reaction) states that the DNA is heated with Taq polymerase, Mg2+, the four dNTPs and a large excess of two short oligonucleotide primers of about 20 bases each, each primer complementary to the sequence at the end of one of the target DNA segments, that on cooling the primers, because of their relatively high concentration, anneal by hydrogen-bonding to their complementary sequence at the end of each target strand, and that Taq polymerase then adds further nucleotides to the two primed strands. Primers are made by the phosphoramidite method of McMurry 28.7.",
      "options": {
        "A": "Correct. Two flanking primers on opposite strands give the polymerase its starting 3'-OH groups and bracket the segment that is copied.",
        "B": "Primers are specific, not random; their sequences are chosen from the known flanking regions so that only the target segment is amplified. Random primers would give a smear of products.",
        "C": "The primers are not complementary to each other (if they were they would pair with each other and be useless); each pairs with a different strand of the template at opposite ends of the target.",
        "D": "Dideoxy terminators belong to Sanger sequencing, not PCR. Primers are ordinary oligonucleotides with a free 3'-OH so that they can be extended, the opposite of a terminator."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q34_polymerase_chemistry",
    "topic": "Replication of DNA",
    "difficulty_level": "Hard",
    "question_text": "In terms of the reaction types of this course, what is the chain-extension step of DNA synthesis, and what drives it forward?",
    "options": [
      {
        "option_id": "A",
        "text": "A nucleophilic substitution at phosphorus: the 3'-hydroxyl attacks the alpha-phosphate of the nucleoside triphosphate and diphosphate leaves; hydrolysis of the released diphosphate by pyrophosphatase makes the overall process irreversible",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A nucleophilic acyl substitution at the carbonyl of the incoming base",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A dehydration between two hydroxyls, driven by removal of water",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "An SN2 reaction at the sugar's 5'-carbon, displacing triphosphate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Phosphate esters are formed in cells the way the chapter on terpenoids showed for ATP: a nucleophile attacks a phosphorus atom and a phosphate-containing leaving group departs, a substitution at phosphorus through a trigonal-bipyramidal transition state. In DNA synthesis the nucleophile is the chain's 3'-OH, activated by a magnesium ion and an active-site base; the electrophile is the alpha-phosphorus of a dNTP (the one attached to the sugar), and the leaving group is the beta,gamma-diphosphate, inorganic pyrophosphate. Forming a phosphodiester from a triphosphate is only modestly favourable on its own; what pulls replication forward is that the pyrophosphate released is promptly hydrolysed to two phosphates by pyrophosphatase, a strongly exergonic step that removes the product and makes the addition effectively irreversible.",
      "approach": "Step 1: Classify the bond change: an O-P bond forms (3'-O to alpha-P) and an O-P bond breaks (alpha-P to the beta-phosphate oxygen): substitution at phosphorus.\nStep 2: Identify nucleophile, electrophile and leaving group: 3'-OH, alpha-P of the dNTP, diphosphate (PPi).\nStep 3: Note the catalysis: Mg2+ ions bind the triphosphate and stabilise the developing charges; the base pairing to the template selects which dNTP is in place.\nStep 4: Thermodynamics: the released PPi is hydrolysed by pyrophosphatase, removing it and driving the equilibrium toward chain growth.",
      "note": "McMurry 28.3 (Replication of DNA) states that the key step is the addition of a nucleoside 5'-triphosphate to the free 3'-hydroxyl group of the growing chain with the loss of a diphosphate leaving group, and McMurry 27.5 describes the analogous ATP phosphorylations of mevalonate as nucleophilic substitution reactions on the terminal phosphorus. The role of pyrophosphatase in driving the reaction is lecture material (and ACS biochemistry scope), not in the text.",
      "options": {
        "A": "Correct. It is substitution at the alpha-phosphorus with pyrophosphate leaving, and the subsequent hydrolysis of that pyrophosphate is what makes the step effectively irreversible.",
        "B": "No carbonyl of the base is involved; the bases only hydrogen-bond to the template. The bond formed is a phosphate ester in the backbone.",
        "C": "The reaction is not a dehydration between two hydroxyls (that would be far too unfavourable to occur unaided); the monomer arrives pre-activated as a triphosphate, and the leaving group is diphosphate, not water.",
        "D": "The 5'-carbon of the sugar is not the electrophile; its C-O bond stays intact. Attack is on phosphorus, and the bond that breaks is P-O to the diphosphate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch28_q35_rna_hydrolysis",
    "topic": "Transcription of DNA",
    "difficulty_level": "Hard",
    "question_text": "RNA is hydrolysed in dilute base within minutes, whereas DNA survives the same conditions for days. What structural difference accounts for this?",
    "options": [
      {
        "option_id": "A",
        "text": "RNA's 2'-hydroxyl, deprotonated by base, is positioned to attack the adjacent phosphorus intramolecularly, forming a 2',3'-cyclic phosphate and cleaving the chain; DNA has no 2'-OH and no such internal nucleophile",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "RNA's uracil is hydrolysed off the sugar by base, breaking the chain",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "RNA's phosphodiester bonds are weaker because ribose is a five-membered ring",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "RNA is single-stranded, so hydroxide can reach its phosphates, while DNA's helix shields them",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A phosphate diester is kinetically very stable toward external hydroxide; the phosphodiester bonds of DNA hydrolyse with half-lives of many thousands of years at neutral pH. RNA differs by one atom per nucleotide, the 2'-hydroxyl on ribose, and that hydroxyl sits next to the 3'-phosphate. Base removes its proton, and the resulting alkoxide attacks its own neighbouring phosphorus in an intramolecular substitution, expelling the 5'-oxygen of the next nucleotide as the leaving group and forming a five-membered 2',3'-cyclic phosphate. Intramolecular attack by a perfectly placed nucleophile is enormously faster than intermolecular attack by hydroxide, so RNA chains fall apart in base while DNA, lacking the 2'-OH, is inert. The same chemistry is how ribonuclease A cleaves RNA, and it is one reason the long-term genetic material is DNA.",
      "approach": "Step 1: Compare the sugars: ribose (2'-OH) in RNA, 2'-deoxyribose (2'-H) in DNA.\nStep 2: In base, the 2'-OH of RNA is deprotonated to an alkoxide adjacent to the 3'-O-P bond.\nStep 3: The alkoxide attacks phosphorus; the 5'-O of the next residue leaves; the chain is cut and a 2',3'-cyclic phosphate remains, later opened to a 2'- or 3'-monophosphate.\nStep 4: DNA has no nucleophile at C2', so only slow external attack is possible; its backbone survives.",
      "note": "McMurry 28.1 (Nucleotides and Nucleic Acids) and 28.4 (Transcription of DNA) state that the sugar in RNA is ribose and in DNA 2'-deoxyribose, with the prefix 2'-deoxy indicating that oxygen is missing from C2', and that RNA molecules remain single-stranded; the chemical consequence for stability, the base-catalysed intramolecular transesterification through the 2',3'-cyclic phosphate, is lecture material inside ACS biochemistry scope rather than a statement in the text. Intramolecular nucleophilic substitution at phosphorus is the same chemistry as the polymerase step of McMurry 28.3 run with an internal nucleophile.",
      "options": {
        "A": "Correct. The 2'-alkoxide's neighbouring-group attack on phosphorus cleaves RNA through a cyclic phosphate; DNA lacks the 2'-OH and is stable.",
        "B": "The N-glycosidic bonds of RNA are stable to base, and losing a base would not break the phosphate backbone anyway. The chain is cut at phosphorus, not at the base.",
        "C": "Both sugars are five-membered furanose rings and the phosphodiester bonds themselves are of the same type in DNA and RNA; the bond strengths do not differ. The difference is the internal nucleophile.",
        "D": "Single strands of DNA are just as stable to base as the duplex, and duplex RNA (as in RNA hairpins) is still cleaved. Accessibility is not the issue; the 2'-OH is."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  }
];
