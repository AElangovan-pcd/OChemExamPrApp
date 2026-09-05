// OChemStudyBuddy - McMurry Chapter 20
// Author: A. Elangovan, PhD
var CH20_QUESTIONS = [
  {
    "question_id": "ch20_q_dynamic_inductive_acidity",
    "topic": "Substituent Effects on Acidity",
    "difficulty_level": "Medium",
    "question_text": "Match each carboxylic acid to its pKa. The four values are 0.23, 2.86, 4.76 and 4.87.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "pKa 4.76",
        "alt": "A two-carbon acid: a methyl group attached to a CO2H group."
      },
      {
        "smiles": "ClCC(=O)O",
        "correctAnswer": "pKa 2.86",
        "alt": "A two-carbon acid whose CH2 carries one chlorine atom, attached to a CO2H group."
      },
      {
        "smiles": "FC(F)(F)C(=O)O",
        "correctAnswer": "pKa 0.23",
        "alt": "A two-carbon acid whose carbon next to the CO2H group carries three fluorine atoms."
      },
      {
        "smiles": "CCC(=O)O",
        "correctAnswer": "pKa 4.87",
        "alt": "A three-carbon acid: an ethyl group attached to a CO2H group."
      }
    ],
    "match_options": [
      "pKa 4.76",
      "pKa 2.86",
      "pKa 0.23",
      "pKa 4.87"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "At least one acid matched to the wrong pKa",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Acidity is decided by the stability of the conjugate base. Anything that spreads or offsets the negative charge of a carboxylate ion lowers its energy, shifts the dissociation equilibrium toward the ion and lowers the pKa. Halogens act through the sigma bonds by induction: an electronegative atom on the alpha carbon pulls electron density away from the carboxylate and stabilises it, and three fluorines do far more than one chlorine. An alkyl group does the opposite, very weakly: it is slightly electron-releasing, so lengthening the chain from methyl to ethyl makes the acid very slightly weaker.",
      "approach": "Step 1: Find the strongest acid. Trifluoroacetic acid has three fluorines on the alpha carbon, the largest inductive withdrawal in the set: pKa 0.23, about 33,000 times as strong as acetic acid.\nStep 2: One chlorine on the alpha carbon of chloroacetic acid withdraws less than three fluorines but still lowers the pKa by nearly two units from acetic acid: 2.86.\nStep 3: Acetic acid, with no substituent, is the reference: 4.76.\nStep 4: Propanoic acid replaces the methyl by an ethyl group, which releases electrons slightly and destabilises the carboxylate a little: 4.87, the weakest acid of the four.",
      "note": "McMurry 20.4 (Substituent Effects on Acidity) uses the same ladder: trifluoroacetic acid (Ka 0.59) is 33,000 times as strong as acetic acid, and the text's 2-chlorobutanoic acid at pKa 2.86 shows what one alpha chlorine does, with 3-chloro (4.05) and 4-chloro (4.52) showing the effect fading with distance because induction works through sigma bonds. The acetic-versus-propanoic gap is only 0.11 pKa units (Table 20.3 in 20.2); the direction is what to remember, not the size.",
      "options": {
        "A": "Correct. The inductive pull of the halogens sets the order CF3 < CH2Cl < CH3 in pKa, and the extra alkyl carbon of propanoic acid nudges it just above acetic acid.",
        "B": "One or more rows is out of order. Count the electron-withdrawing atoms on the alpha carbon: three fluorines beat one chlorine, one chlorine beats none, and an extra alkyl carbon makes an acid marginally weaker, not stronger."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q48_grignard_carboxylation_scheme",
    "topic": "Preparing Carboxylic Acids",
    "difficulty_level": "Medium",
    "question_text": "Ethylmagnesium bromide is treated with dry carbon dioxide gas in ether, and the mixture is then poured into aqueous HCl. What is the organic product?",
    "reaction_scheme": {
      "reactants": [
        "CC[Mg]Br",
        "O=C=O"
      ],
      "reagents": "1. ether; 2. H3O+",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A two-carbon alkyl group bonded to a magnesium atom that also carries a bromine: ethylmagnesium bromide.",
        "A carbon atom double-bonded to two oxygen atoms: carbon dioxide."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Propanoic acid",
        "smiles": "CCC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Pentan-3-one",
        "smiles": "CCC(=O)CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Propan-1-ol",
        "smiles": "CCCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethane",
        "smiles": "CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Grignard reagent is a carbanion equivalent, and carbon dioxide is a carbonyl compound: a carbon doubly bonded to oxygen, electrophilic at carbon. The ethyl group adds to the CO2 carbon exactly as it would add to a ketone, and the addition puts a negative charge on oxygen. What is different is what the adduct is: a carboxylate ion, a species that is already negatively charged and no longer electrophilic, so it survives in the flask until acid is added. Protonation in the separate work-up step gives the carboxylic acid, with one more carbon than the Grignard reagent.",
      "approach": "Step 1: Count carbons. The Grignard reagent brings two (the ethyl group); CO2 brings one. The product has three.\nStep 2: The ethyl carbanion attacks the carbon of CO2, breaking one C=O pi bond and forming CH3CH2-C(=O)-O- MgBr+, a magnesium propanoate.\nStep 3: No second addition occurs: the carboxylate carries a full negative charge spread over two oxygens and does not attract another carbanion.\nStep 4: Aqueous HCl protonates the carboxylate: CH3CH2CO2H, propanoic acid.",
      "note": "McMurry 20.5 (Preparing Carboxylic Acids) describes the operation as bubbling dry CO2 gas through the Grignard solution and then protonating with aqueous HCl in a separate step, and notes that the same carbon-carbon bond formation happens in cells without any magnesium: a stabilised carbanion from acetyl CoA is carboxylated to malonyl CoA in fatty-acid biosynthesis. The chapter's summary puts carboxylation beside nitrile hydrolysis as the two ways to make an acid with one more carbon than the halide you started from.",
      "options": {
        "A": "Correct. One addition of the ethyl group to CO2 gives magnesium propanoate, and aqueous acid protonates it to propanoic acid, three carbons from a two-carbon Grignard reagent.",
        "B": "Pentan-3-one would need the carboxylate to accept a second ethyl group, the way an ester does on its way to a tertiary alcohol. A carboxylate is negatively charged and not electrophilic, so the second addition never happens; this is why Grignard carboxylation stops cleanly at the acid.",
        "C": "Propan-1-ol is what ethylmagnesium bromide gives with formaldehyde, H2C=O, where the adduct is an alkoxide that protonates to an alcohol. CO2 has a second oxygen on the same carbon, so the adduct is a carboxylate and the product an acid.",
        "D": "Ethane is the product if the aqueous acid meets the Grignard reagent before the CO2 does: RMgBr is a strong base and is protonated by water. The order in the question, CO2 first and acid second, is what keeps the carbon skeleton."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q29_grignard_co2",
    "topic": "Preparing Carboxylic Acids",
    "difficulty_level": "Easy",
    "question_text": "The compound shown is treated with magnesium in dry ether, then with dry ice (solid CO2), and finally with aqueous acid. What is the major organic product?",
    "question_smiles": "c1ccc(Br)cc1",
    "structure_alt": "A benzene ring bearing a single bromine atom.",
    "options": [
      {
        "option_id": "A",
        "text": "Benzoic acid",
        "smiles": "O=C(O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzyl alcohol",
        "smiles": "OCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzophenone",
        "smiles": "O=C(c1ccccc1)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Biphenyl",
        "smiles": "c1ccc(cc1)-c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Aryl halides form Grignard reagents as readily as alkyl halides, and phenylmagnesium bromide is the standard way to put a nucleophilic carbon on a benzene ring, which SN2 chemistry cannot do because an aryl carbon cannot be attacked from behind. Once formed, the aryl Grignard behaves like any other: it adds once to the carbon of CO2 to give a carboxylate salt, which is inert to further addition, and aqueous acid in the last step releases the carboxylic acid. Dry ice is simply a convenient solid source of CO2.",
      "approach": "Step 1: Bromobenzene + Mg in dry ether: oxidative insertion gives phenylmagnesium bromide, PhMgBr, with the former C-Br carbon now nucleophilic.\nStep 2: PhMgBr + CO2: the phenyl group adds to the CO2 carbon to give magnesium benzoate, PhCO2- MgBr+.\nStep 3: The carboxylate does not react with more PhMgBr, so a ketone never forms.\nStep 4: Aqueous acid protonates the benzoate: benzoic acid, C6H5CO2H, seven carbons from a six-carbon halide.",
      "note": "McMurry 20.5 (Preparing Carboxylic Acids) lists this route beside oxidation of an alkylbenzene (16.8) as a way to a benzoic acid, and the comparison is worth having: KMnO4 oxidation needs a benzylic hydrogen already on the ring, whereas the Grignard route builds the carboxyl carbon from CO2 and works on an unsubstituted aryl bromide. The nitrile route is not available here: cyanide cannot displace bromide from an aromatic carbon by SN2.",
      "options": {
        "A": "Correct. Mg gives phenylmagnesium bromide, CO2 accepts the phenyl group once to give the benzoate salt, and acid work-up gives benzoic acid.",
        "B": "Benzyl alcohol has a CH2OH on the ring, which is what PhMgBr gives with formaldehyde, not with CO2. Carbon dioxide's second oxygen makes the adduct a carboxylate, and the product an acid rather than an alcohol.",
        "C": "Benzophenone would require two phenyl groups to add to the same CO2 carbon. The first addition produces a carboxylate anion, and its negative charge repels a second nucleophile, so the reaction stops at the acid stage.",
        "D": "Biphenyl is the coupling by-product formed when phenylmagnesium bromide reacts with unreacted bromobenzene during the Grignard formation; it is a minor side product, not the major product of a sequence that supplies CO2 and then acid."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q1_naming_methylbutanoic_acid",
    "topic": "Naming Carboxylic Acids and Nitriles",
    "difficulty_level": "Easy",
    "question_text": "What is the IUPAC name of the compound shown?",
    "question_smiles": "CC(C)CC(=O)O",
    "structure_alt": "A four-carbon chain ending in a CO2H group, with a methyl branch on the carbon next to the far end.",
    "options": [
      {
        "option_id": "A",
        "text": "2-Methylbutanoic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "3-Methylbutanoic acid",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "3-Methylbutan-1-oic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Isopropylethanoic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An open-chain carboxylic acid is named by replacing the -e of the parent alkane with -oic acid, and the parent chain is the longest chain that contains the CO2H carbon. That carbon is C1 by definition, so the suffix never carries a locant and every substituent is numbered from the carboxyl end, whether or not that gives it the lowest number. Common names (isovaleric acid here) exist for many small acids, but the text uses systematic names except for formic and acetic acid.",
      "approach": "Step 1: Find the longest chain containing the carboxyl carbon: CO2H-CH2-CH(CH3)-CH3 is four carbons, so the parent is butanoic acid.\nStep 2: Number from the CO2H carbon as C1. The CH2 is C2 and the branch point is C3.\nStep 3: Cite the methyl with its locant and leave the suffix bare: 3-methylbutanoic acid.\nStep 4: Check that no other numbering is allowed: counting from the methyl end would put the carboxyl at C4, which the rule forbids, because the acid carbon is always C1.",
      "note": "McMurry 20.1 (Naming Carboxylic Acids and Nitriles) gives the rule in one line: replace the terminal -e of the alkane with -oic acid, and number the CO2H carbon as C1. The same section's Table 20.1 lists the common names biological chemists still use (butyric, the dicarboxylic acids from oxalic to adipic, lactic, pyruvic); 3-methylbutanoic acid is isovaleric acid in that tradition, a name IUPAC no longer recommends but one you will meet in biochemistry as isovaleryl-CoA.",
      "options": {
        "A": "2-Methylbutanoic acid numbers the chain from the wrong end, putting the branch at C2. The carboxyl carbon is always C1, and counted from it the methyl sits on C3.",
        "B": "Correct. Four-carbon parent including the CO2H carbon, methyl on C3, and no locant on the suffix.",
        "C": "The right molecule under the wrong name: a CO2H group can only be at the end of a chain, so the locant 1 before -oic acid is superfluous. Butanoic acid, never butan-1-oic acid.",
        "D": "Isopropylethanoic acid treats the molecule as acetic acid with an isopropyl substituent, choosing a two-carbon parent when a four-carbon chain containing the carboxyl carbon exists. The longest-chain rule makes butanoic acid the parent."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q2_naming_trans_cyclobutane_diacid",
    "topic": "Naming Carboxylic Acids and Nitriles",
    "difficulty_level": "Medium",
    "question_text": "What is the IUPAC name of the compound shown?",
    "question_smiles": "O=C(O)[C@@H]1CC[C@H]1C(=O)O",
    "structure_alt": "A four-membered ring with a CO2H group on each of two adjacent ring carbons; one CO2H is drawn on a bold wedge and the other on a hashed wedge.",
    "options": [
      {
        "option_id": "A",
        "text": "trans-Cyclobutane-1,2-dicarboxylic acid",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "cis-Cyclobutane-1,2-dicarboxylic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "trans-Cyclobutane-1,2-dioic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "trans-2-Carboxycyclobutane-1-carboxylic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When a CO2H group is attached to a ring, the acid is named with the suffix -carboxylic acid: the ring carbon bearing the group is C1 and the carboxyl carbon itself is not counted or numbered. Two such groups take -dicarboxylic acid with two locants. The -oic acid ending is reserved for chain acids, where the carboxyl carbon is part of the parent chain. Ring stereochemistry is read from the wedges: substituents on the same face are cis, on opposite faces trans, and a 1,2-trans arrangement of identical groups is chiral, so the trans acid exists as a pair of enantiomers.",
      "approach": "Step 1: Both CO2H groups are on ring carbons, so the parent is cyclobutane and each acid is a -carboxylic acid; two of them: cyclobutane-1,2-dicarboxylic acid.\nStep 2: Number the ring so that the two substituted carbons are C1 and C2.\nStep 3: Read the wedges: one CO2H is on a bold wedge (toward the viewer) and the other on a hashed wedge (away), so they occupy opposite faces: trans.\nStep 4: Assemble the name: trans-cyclobutane-1,2-dicarboxylic acid. The drawing shows one enantiomer, (1R,2R); trans without a descriptor means the racemate.",
      "note": "McMurry 20.1 (Naming Carboxylic Acids and Nitriles) sets out the two systems side by side: -oic acid for open chains with the CO2H carbon as C1, -carboxylic acid for a CO2H on a ring with the attachment carbon as C1 and the CO2H carbon unnumbered. Problem 20-2(c) asks you to draw exactly this compound from its name. The cis isomer is a meso compound, achiral because a mirror plane passes through the ring between the two substituted carbons; the trans isomer has no such plane and is chiral.",
      "options": {
        "A": "Correct. Two ring-attached carboxyls take -dicarboxylic acid with locants 1,2; the wedge and the hash put them on opposite faces, trans.",
        "B": "cis would have both CO2H groups on the same face, drawn as two bold wedges or two hashed ones. One wedge and one hash is trans. The cis isomer is meso and achiral; the trans isomer drawn here is chiral.",
        "C": "The right molecule under the wrong suffix: -dioic acid is for chain acids whose carboxyl carbons are counted in the chain (butanedioic acid). A CO2H on a ring is a -carboxylic acid, and its carbon is not part of the ring count.",
        "D": "The right molecule under the wrong name: when both CO2H groups can be expressed as suffixes they must be, as -dicarboxylic acid. The prefix carboxy- is used only for a CO2H that cannot be included in the suffix, for instance one on a side chain when the principal chain already carries the acid."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q3_naming_methylbutanenitrile",
    "topic": "Naming Carboxylic Acids and Nitriles",
    "difficulty_level": "Easy",
    "question_text": "What is the IUPAC name of the compound shown?",
    "question_smiles": "CCC(C)C#N",
    "structure_alt": "A chain of four carbons ending in a carbon triple-bonded to nitrogen, with a methyl branch on the carbon next to the nitrile carbon.",
    "options": [
      {
        "option_id": "A",
        "text": "2-Methylbutanenitrile",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Methylbutanenitrile",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Cyano-1-methylpropane",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Methylbutane-1-nitrile",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An open-chain nitrile is named by adding -nitrile to the name of the alkane whose chain includes the nitrile carbon, and that carbon is C1. Because C≡N can only be at the end of a chain, the suffix takes no locant, and all substituents are numbered from the nitrile end. The alternative, treating C≡N as a cyano- substituent, is reserved for molecules in which a higher-ranking group (a carboxylic acid or one of its derivatives) takes the suffix.",
      "approach": "Step 1: Find the longest chain that includes the nitrile carbon: N≡C-CH(CH3)-CH2-CH3 is four carbons, so the parent is butanenitrile.\nStep 2: Number from the nitrile carbon as C1. The methyl branch is on C2.\nStep 3: Assemble: 2-methylbutanenitrile.\nStep 4: The acid-derived alternative, 2-methylbutanonitrile (from 2-methylbutanoic acid), names the same compound; the text uses the alkane-based form for open chains.",
      "note": "McMurry 20.1 (Naming Carboxylic Acids and Nitriles) gives three routes to a nitrile name: alkane + -nitrile with the CN carbon as C1; the acid name with -oic acid or -ic acid replaced by -onitrile (acetonitrile, benzonitrile); and -carbonitrile for a C≡N on a ring, where the ring carbon is C1 and the nitrile carbon is not counted. The cyano- prefix appears only when another carboxylic acid derivative outranks the nitrile.",
      "options": {
        "A": "Correct. Four-carbon parent including the nitrile carbon, methyl on C2, no locant on the suffix.",
        "B": "3-Methylbutanenitrile numbers from the wrong end. The nitrile carbon is C1 by rule, and counted from it the branch is on C2, not C3.",
        "C": "1-Cyano-1-methylpropane leaves the nitrile carbon out of the chain and names it as a substituent. Cyano- is used only when a higher-priority group such as a carboxylic acid claims the suffix; here the nitrile is the principal group and its carbon belongs in the parent chain.",
        "D": "The right molecule under the wrong name: the nitrile carbon is always C1, so the locant before -nitrile is superfluous. Butanenitrile, not butane-1-nitrile."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q4_naming_cyanobutanoic_acid",
    "topic": "Naming Carboxylic Acids and Nitriles",
    "difficulty_level": "Medium",
    "question_text": "What is the IUPAC name of the compound shown?",
    "question_smiles": "N#CCCCC(=O)O",
    "structure_alt": "A chain that ends in a CO2H group at one end and in a carbon triple-bonded to nitrogen at the other, with three CH2 groups between them.",
    "options": [
      {
        "option_id": "A",
        "text": "4-Cyanobutanoic acid",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "5-Cyanopentanoic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-Carboxybutanenitrile",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyanobutanoic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When a molecule carries two functional groups that could each be a suffix, the higher-ranking one takes the suffix and the other becomes a prefix. A carboxylic acid outranks a nitrile, so the CO2H names the parent and the C≡N is cited as cyano-. Two consequences follow. The parent chain contains the carboxyl carbon (as C1) and stops at the carbon bearing the cyano group; the nitrile carbon itself is a substituent and is not counted. And a prefix needs a locant unless its position is unambiguous.",
      "approach": "Step 1: Rank the groups: CO2H beats C≡N, so the compound is a butanoic acid, not a nitrile.\nStep 2: Find the parent chain: the carboxyl carbon (C1) plus three CH2 groups is four carbons: butanoic acid. The nitrile carbon is not in the chain.\nStep 3: Number from the carboxyl carbon; the C≡N is attached to C4.\nStep 4: Assemble: 4-cyanobutanoic acid. Check the formula: C5H7NO2, five carbons in all, four in the chain plus the cyano carbon.",
      "note": "McMurry 20.1 (Naming Carboxylic Acids and Nitriles) states the one case in which cyano- is used: when another carboxylic acid derivative is present in the same molecule. This compound is the half-nitrile of glutaric (pentanedioic) acid, and hydrolysing its nitrile with hot aqueous acid (20.7) gives glutaric acid, which is how to check the carbon count: the acid it becomes has five carbons, so the cyano carbon was the fifth.",
      "options": {
        "A": "Correct. The acid takes the suffix, the four-carbon chain from the carboxyl carbon is the parent, and the cyano group on C4 is a prefix with its locant.",
        "B": "5-Cyanopentanoic acid counts the nitrile carbon into the chain and then names it again as cyano, so it describes a six-carbon compound. When C≡N is a prefix, its carbon is outside the chain.",
        "C": "4-Carboxybutanenitrile ranks the nitrile above the acid. The order of seniority puts carboxylic acids first, so the CO2H must be the suffix and the nitrile the prefix.",
        "D": "Cyanobutanoic acid names the right groups but omits the locant. The cyano group could be on C2, C3 or C4 of butanoic acid, three different compounds, so the locant 4 is required."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q5_naming_oxobutanoic_acid",
    "topic": "Naming Carboxylic Acids and Nitriles",
    "difficulty_level": "Medium",
    "question_text": "What is the IUPAC name of the compound shown?",
    "question_smiles": "O=CCCC(=O)O",
    "structure_alt": "A four-carbon chain with a CO2H group at one end and a CH=O group at the other.",
    "options": [
      {
        "option_id": "A",
        "text": "4-Oxobutanoic acid",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Formylpropanoic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-Carboxybutanal",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-Oxobutan-1-oic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Carboxylic acids sit above aldehydes in the order of functional-group seniority, so when a chain carries both, the acid takes the suffix and the aldehyde is expressed as a prefix. If the aldehyde carbon can be part of the principal chain it is included and the group is called oxo- (a =O on a chain carbon); the prefix formyl- (a -CHO substituent) is for an aldehyde carbon that cannot be in the chain, for example one attached to a ring. The chain rule, longest chain containing the principal group, decides which applies.",
      "approach": "Step 1: Rank: CO2H outranks CHO, so the parent is an -oic acid and the CHO becomes a prefix.\nStep 2: Longest chain containing the carboxyl carbon: it runs through both CH2 groups to the aldehyde carbon, four carbons in all: butanoic acid.\nStep 3: Number from the carboxyl carbon; the aldehyde carbon is C4 and its oxygen is a double-bonded substituent: 4-oxo.\nStep 4: Assemble: 4-oxobutanoic acid (succinic semialdehyde in the biochemical literature).",
      "note": "McMurry 20.1 (Naming Carboxylic Acids and Nitriles) fixes the carboxyl carbon as C1 and the parent chain as the one that contains it; McMurry 19.1 supplies the aldehyde-as-prefix rule, oxo- when the CHO carbon is in the chain. The compound is the semialdehyde of succinic acid: reduce the aldehyde and you have 4-hydroxybutanoic acid (GHB), oxidise it and you have succinic acid, both of which appear in the metabolism chapters.",
      "options": {
        "A": "Correct. Acid outranks aldehyde, the four-carbon chain includes the CHO carbon as C4, and its oxygen is cited as 4-oxo.",
        "B": "The right molecule under the wrong name: formyl- is for a CHO carbon that cannot be included in the parent chain. Here the aldehyde carbon extends the chain to four carbons, so it is counted and the oxygen is an oxo substituent on C4.",
        "C": "4-Carboxybutanal makes the aldehyde the principal group. In the seniority order a carboxylic acid outranks an aldehyde, so the acid must take the suffix and the aldehyde the prefix.",
        "D": "The right molecule under the wrong name: the carboxyl carbon is C1 by definition, so the locant before -oic acid is superfluous. 4-Oxobutanoic acid, not 4-oxobutan-1-oic acid."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q6_naming_crotonic_acid",
    "topic": "Naming Carboxylic Acids and Nitriles",
    "difficulty_level": "Medium",
    "question_text": "What is the IUPAC name of the compound shown?",
    "question_smiles": "C/C=C/C(=O)O",
    "structure_alt": "A four-carbon chain ending in a CO2H group, with a double bond between the second and third carbons; the chain is drawn as a zigzag, so the methyl group and the CO2H group lie on opposite sides of that double bond.",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-But-2-enoic acid",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-But-2-enoic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "But-3-enoic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(E)-But-2-en-1-oic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An unsaturated acid keeps -oic acid as its suffix, the chain is numbered from the carboxyl carbon, and the double bond is located by the lower of its two carbon numbers with the -ane changed to -ene. Geometry is assigned by the Cahn-Ingold-Prelog E/Z rule: on each alkene carbon pick the higher-priority substituent; if the two are on opposite sides the alkene is E, on the same side Z. Because the carboxyl end fixes the numbering, there is no freedom to renumber the chain, only to read the geometry correctly.",
      "approach": "Step 1: The carboxyl carbon is C1; the double bond runs from C2 to C3: but-2-enoic acid.\nStep 2: Assign priorities. On C2: CO2H beats H. On C3: CH3 beats H.\nStep 3: Read the drawing: the CO2H on C2 and the CH3 on C3 lie on opposite sides of the C=C, so the descriptor is E.\nStep 4: Assemble: (E)-but-2-enoic acid, whose common name is crotonic acid.",
      "note": "McMurry 20.1 (Naming Carboxylic Acids and Nitriles) lists acrylic acid (propenoic acid) and the maleic/fumaric pair among the retained common names, and Problem 20-2(e) asks for (9Z,12Z)-9,12-octadecadienoic acid, linoleic acid, where the same E/Z reading is needed twice. The E/Z rule itself is McMurry 7.5. Conjugation with the C=O lowers an acid's carbonyl stretch by 20 to 30 cm-1 (20.8), which is how an unsaturated acid announces itself in the IR.",
      "options": {
        "A": "Correct. Carboxyl carbon C1, double bond at C2, the CO2H and the CH3 on opposite sides: E.",
        "B": "Z would put the CO2H and the CH3, the higher-priority group on each alkene carbon, on the same side of the double bond. The drawing places them on opposite sides, which is E. The Z isomer is isocrotonic acid, a different compound.",
        "C": "But-3-enoic acid has the double bond between C3 and C4, a CH2=CH-CH2-CO2H skeleton with no geometry to specify. In the drawn compound the double bond is one carbon closer to the carboxyl, at C2, and it is conjugated with the C=O.",
        "D": "The right molecule under the wrong name: the carboxyl carbon is C1 by definition, so the locant before -oic acid is superfluous. The alkene locant, 2, is required; the acid locant, 1, is not."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q7_boiling_point_dimer",
    "topic": "Structure and Properties of Carboxylic Acids",
    "difficulty_level": "Medium",
    "question_text": "Acetic acid (molar mass 60) boils at 118 °C, propan-1-ol (molar mass 60) at 97 °C and propanal (molar mass 58) at 48 °C. What best accounts for the high boiling point of acetic acid?",
    "options": [
      {
        "option_id": "A",
        "text": "Two acetic acid molecules pair up into a cyclic dimer held by two hydrogen bonds, so the unit that must be separated on boiling is effectively twice the molecular mass",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The C=O bond of acetic acid is more polar than the C-O bond of propan-1-ol, and the larger dipole raises the boiling point",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetic acid is partly ionised in the pure liquid, and the electrostatic attraction between acetate and hydronium ions must be overcome",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acetic acid has more atoms and a larger surface area than propan-1-ol, so its dispersion forces are stronger",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Boiling point tracks the strength of the forces that hold molecules together in the liquid. Among compounds of the same size, those that can hydrogen-bond boil highest, and a carboxylic acid is the extreme case: it carries both a good hydrogen-bond donor (the O-H) and a good acceptor (the C=O) arranged so that two molecules can hold each other with two hydrogen bonds at once, forming a cyclic dimer. The dimer behaves as a single particle of double the mass, and separating the pair costs the energy of two hydrogen bonds.",
      "approach": "Step 1: Compare like with like. All three compounds have about the same mass, so mass and dispersion forces cannot rank them.\nStep 2: Propanal has a polar C=O but no O-H, so it cannot hydrogen-bond with itself: 48 °C, the lowest.\nStep 3: Propan-1-ol has an O-H and forms hydrogen-bonded chains: 97 °C.\nStep 4: Acetic acid has an O-H and a C=O placed so that two molecules form a doubly hydrogen-bonded eight-membered ring, the cyclic dimer. Breaking it up costs two hydrogen bonds per pair and the effective particle mass is 120: 118 °C, the highest.",
      "note": "McMurry 20.2 (Structure and Properties of Carboxylic Acids) states that most carboxylic acids exist as cyclic dimers held together by two hydrogen bonds and gives the comparison acetic acid 117.9 °C versus ethanol 78.3 °C for two two-carbon compounds. The dimer also shows up in the IR (20.8): the dimeric C=O absorbs near 1710 cm-1, the rare free monomer near 1760, and the O-H stretch is the very broad 2500-3300 band because the hydrogen is shared between two oxygens.",
      "options": {
        "A": "Correct. The cyclic hydrogen-bonded dimer doubles the effective particle mass and must be pulled apart, two hydrogen bonds at a time, for the acid to boil.",
        "B": "Dipole-dipole attraction alone is weak compared with hydrogen bonding. Propanal has a C=O at least as polar as the acid's and boils 70 °C lower, because it has no O-H and cannot hydrogen-bond.",
        "C": "Pure acetic acid is molecular, not ionic. Even in water only about 0.1% of a 0.1 M solution is dissociated (Ka 1.75 x 10^-5), and in the absence of a solvent to stabilise the ions there is no appreciable ionisation at all.",
        "D": "Acetic acid has eight atoms, propan-1-ol twelve; the alcohol has the larger surface area and stronger dispersion forces, yet it boils lower. Dispersion forces cannot be what sets acetic acid apart."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q8_extraction_separation",
    "topic": "Structure and Properties of Carboxylic Acids",
    "difficulty_level": "Medium",
    "question_text": "A solid mixture of naphthalene and benzoic acid is dissolved in diethyl ether. Which procedure separates the two compounds?",
    "options": [
      {
        "option_id": "A",
        "text": "Shake the ether solution with aqueous NaOH, separate the layers, then acidify the aqueous layer with HCl and collect the benzoic acid that precipitates; naphthalene stays in the ether",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Shake the ether solution with aqueous HCl, separate the layers, then neutralise the aqueous layer to recover the benzoic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Shake the ether solution with pure water, separate the layers, and evaporate the aqueous layer to recover the benzoic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Shake the ether solution with aqueous NaHCO3; the naphthalene passes into the aqueous layer and the benzoic acid remains in the ether",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carboxylic acid is only slightly soluble in water once it has more than about six carbons, but its sodium salt is an ion and dissolves readily. That difference is the basis of acid-base extraction: a base converts the acid into its water-soluble carboxylate, which moves into the aqueous layer, while a neutral compound stays in the organic solvent. Acidifying the aqueous layer reverses the deprotonation and returns the free acid, now pure. Both NaOH and NaHCO3 are strong enough bases for a carboxylic acid (pKa about 4); a hydrocarbon has no acidic hydrogen to lose.",
      "approach": "Step 1: Identify the acidic component: benzoic acid, pKa 4.19. Naphthalene is a hydrocarbon, neither acidic nor basic.\nStep 2: Aqueous NaOH deprotonates benzoic acid to sodium benzoate, an ionic salt that dissolves in the aqueous layer; naphthalene stays in the ether.\nStep 3: Separate the layers. Evaporating the ether gives naphthalene.\nStep 4: Add HCl to the aqueous layer: benzoate is protonated back to benzoic acid, which is poorly soluble in water and precipitates or can be extracted back into ether.",
      "note": "McMurry 20.2 (Structure and Properties of Carboxylic Acids) describes exactly this purification: extract the acid's salt into aqueous base, then reacidify and extract the pure acid back into an organic solvent. Problem 20-3 poses the naphthalene/benzoic acid pair. NaHCO3 would work as well as NaOH here and is the reagent of choice when a phenol is also present, because bicarbonate (conjugate acid pKa 6.4) deprotonates a carboxylic acid but leaves a phenol (pKa 10) untouched; NaOH takes both.",
      "options": {
        "A": "Correct. Base moves the acid into water as its benzoate salt, the neutral hydrocarbon stays in ether, and acid returns the benzoic acid.",
        "B": "Aqueous HCl extracts bases, such as amines, as their ammonium salts. Neither naphthalene nor benzoic acid is basic, so both stay in the ether layer and nothing is separated.",
        "C": "Benzoic acid is only slightly soluble in cold water (about 3 g per litre), so a water wash moves very little of it and leaves the mixture essentially intact. The salt is what dissolves, and it needs a base to form.",
        "D": "The reagent is right and the chemistry backwards. NaHCO3 deprotonates the acid, so benzoic acid, as sodium benzoate, is what enters the aqueous layer; naphthalene has no acidic hydrogen and stays in the ether."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q9_dichloroacetic_dissociation",
    "topic": "Structure and Properties of Carboxylic Acids",
    "difficulty_level": "Hard",
    "question_text": "The Ka of dichloroacetic acid is $3.32 \\times 10^{-2}$. Approximately what percentage of the acid is dissociated in a 0.10 M aqueous solution?",
    "options": [
      {
        "option_id": "A",
        "text": "0.1%",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "3.3%",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "43%",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "58%",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Ka is an equilibrium constant, not a fraction, and the fraction dissociated depends on concentration. For a weak acid HA at initial concentration C, Ka = x^2/(C - x), where x is the concentration of H3O+ and of A- at equilibrium. When Ka is tiny compared with C the x in the denominator can be dropped and x = sqrt(Ka x C), which is the shortcut that works for acetic acid. Dichloroacetic acid, with two chlorines on the alpha carbon, is strong enough that a third or more of it dissociates, and the shortcut then overstates the answer badly: the full quadratic is needed.",
      "approach": "Step 1: Set up the equilibrium: Ka = x^2/(0.10 - x) = 3.32 x 10^-2.\nStep 2: Try the shortcut: x = sqrt(0.0332 x 0.10) = 0.058, which would be 58% dissociated. But x is more than half of C, so dropping it from the denominator is not justified.\nStep 3: Solve the quadratic: x^2 + 0.0332x - 0.00332 = 0, so x = [-0.0332 + sqrt(0.0332^2 + 4 x 0.00332)]/2 = [-0.0332 + 0.1199]/2 = 0.0434 M.\nStep 4: Percentage dissociated = 0.0434/0.10 = 43%. Check: 0.0434^2/(0.10 - 0.0434) = 0.001884/0.0566 = 0.0333, which matches Ka.",
      "note": "McMurry 20.2 (Structure and Properties of Carboxylic Acids) poses this as Problem 20-4 and makes the contrast in the text: a Ka near 10^-5 means about 0.1% of a 0.1 M acetic acid solution is dissociated, versus 100% for HCl. Dichloroacetic acid (pKa 1.48) sits between the two, which is exactly where the sqrt(KaC) approximation fails. Two alpha chlorines pull the pKa from 4.76 to 1.48; one chlorine gives 2.86 and three fluorines 0.23 (20.4).",
      "options": {
        "A": "0.1% is the figure for acetic acid, Ka 1.75 x 10^-5, in a 0.1 M solution. Dichloroacetic acid has a Ka about 2,000 times larger, so a far larger fraction is dissociated.",
        "B": "3.3% comes from reading Ka itself as a fraction (0.0332 = 3.3%). Ka is an equilibrium constant, not a percentage, and the fraction dissociated must be solved from Ka = x^2/(C - x).",
        "C": "Correct. Solving the quadratic gives [H3O+] = 0.043 M in a 0.10 M solution, 43% dissociated; the approximation that ignores x in the denominator is not valid for an acid this strong.",
        "D": "58% is what the shortcut x = sqrt(Ka x C) gives. That formula assumes x is negligible next to C, which is false here: at 43% dissociation the denominator is 0.057 M, not 0.10 M, and ignoring the difference inflates the answer by a third."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q10_carboxylate_resonance_evidence",
    "topic": "Structure and Properties of Carboxylic Acids",
    "difficulty_level": "Medium",
    "question_text": "Acetic acid (pKa 4.76) is about 10^11 times as acidic as ethanol (pKa about 16). The text attributes the difference to resonance delocalisation of the carboxylate's negative charge over two equivalent oxygens. Which experimental observation supports that picture directly?",
    "options": [
      {
        "option_id": "A",
        "text": "In sodium formate both carbon-oxygen bonds are 127 pm long, between the 120 pm C=O and the 134 pm C-O of formic acid",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetic acid boils 40 °C higher than ethanol even though both have two carbons",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Only about 0.1% of the molecules in a 0.1 M acetic acid solution are dissociated",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The O=C-OH bond angle in acetic acid is 122°, close to the 120° expected for an sp2 carbon",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Acidity is a comparison of the acid with its conjugate base. Ethoxide keeps its negative charge on one oxygen; acetate spreads the charge over two oxygens through two equivalent resonance forms, so acetate is far lower in energy relative to its acid and the dissociation equilibrium lies much further to the right. Resonance is a claim about the anion's structure, so the evidence for it must come from the anion: if the two oxygens really share the charge, the two C-O bonds should be identical and intermediate between a double and a single bond.",
      "approach": "Step 1: State what resonance predicts: the two C-O bonds of a carboxylate are equivalent, neither a full C=O nor a full C-O.\nStep 2: Look for a measurement of the anion, not of the acid. X-ray crystallography of sodium formate gives both C-O bonds as 127 pm.\nStep 3: Compare with formic acid itself, where the bonds are distinct: 120 pm for C=O and 134 pm for C-OH. The carboxylate's 127 pm is midway.\nStep 4: The electrostatic potential map of formate shows the negative charge spread equally over both oxygens, the same conclusion from a second method.",
      "note": "McMurry 20.2 (Structure and Properties of Carboxylic Acids) presents the sodium formate bond lengths and the electrostatic potential map as the evidence for the equivalence of the two carboxylate oxygens, and Figure 20.2 contrasts the localised alkoxide with the delocalised carboxylate. The text's account is resonance; the inductive pull of the carbonyl on the O-H also contributes to carboxylic acid acidity, and the relative weight of the two effects has been argued in the chemical-education literature, but the structural evidence for delocalisation in the anion is not in dispute.",
      "options": {
        "A": "Correct. Equal C-O bond lengths, intermediate between single and double, are what a resonance hybrid of two equivalent structures predicts for the anion and what a localised anion could not show.",
        "B": "The boiling-point difference reflects hydrogen-bonded dimers in the liquid acid (20.2), a property of the neutral acid, not of the anion. It says nothing about where the charge sits in acetate.",
        "C": "The small fraction dissociated is a statement that acetic acid is a weak acid. It measures the equilibrium position, which is the thing to be explained, not evidence for why the carboxylate is stabilised.",
        "D": "The bond angle shows that the carboxyl carbon of the neutral acid is sp2-hybridised and planar, which is true of ketones and esters as well. Planarity alone does not show that the anion's charge is shared by both oxygens."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q11_bicarbonate_test",
    "topic": "Structure and Properties of Carboxylic Acids",
    "difficulty_level": "Easy",
    "question_text": "Which compound dissolves in aqueous sodium bicarbonate with evolution of CO2?",
    "options": [
      {
        "option_id": "A",
        "text": "Benzoic acid",
        "smiles": "O=C(O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Phenol",
        "smiles": "Oc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclohexanol",
        "smiles": "OC1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclohexanone",
        "smiles": "O=C1CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sodium bicarbonate is a weak base: its conjugate acid, carbonic acid, has pKa 6.4. Bicarbonate can therefore take a proton only from an acid stronger than carbonic acid, and when it does, the carbonic acid formed decomposes to CO2 and water, which is the fizzing. A carboxylic acid (pKa about 4 to 5) qualifies; a phenol (pKa about 10) and an alcohol (pKa about 16) do not. This makes the bicarbonate test a quick way to tell a carboxylic acid from every other common oxygen-containing compound.",
      "approach": "Step 1: Write the proton transfer: RCO2H + HCO3- gives RCO2- + H2CO3, and H2CO3 gives CO2 + H2O.\nStep 2: The transfer is favourable when the acid's pKa is below 6.4. Benzoic acid, pKa 4.19: yes, by more than two units, so the equilibrium lies well to the right.\nStep 3: Phenol, pKa about 10, is 3.6 units weaker than carbonic acid; bicarbonate removes only about one phenol proton in 4,000 and no gas is seen.\nStep 4: Cyclohexanol (pKa about 16) and cyclohexanone (alpha C-H pKa about 19) are weaker still. Only benzoic acid effervesces, and the sodium benzoate formed dissolves.",
      "note": "McMurry 20.2 (Structure and Properties of Carboxylic Acids) notes that carboxylic acids react with bases such as NaOH and NaHCO3 to give carboxylate salts and that the salts are often highly water-soluble. The text does not spell out the pKa criterion for bicarbonate; it follows from McMurry 2.8 (Acid and Base Strength): a base deprotonates an acid whose pKa is lower than that of the base's conjugate acid. NaOH (conjugate acid water, pKa 15.7) takes both the acid and the phenol, which is why bicarbonate, not hydroxide, is the reagent that tells them apart.",
      "options": {
        "A": "Correct. Benzoic acid (pKa 4.19) is a stronger acid than carbonic acid (pKa 6.4), so bicarbonate deprotonates it, releasing CO2, and the sodium benzoate formed dissolves.",
        "B": "Phenol is acidic, but at pKa 10 it is far weaker than carbonic acid. Bicarbonate does not deprotonate it appreciably; phenol needs NaOH to form a water-soluble phenoxide, and even then no gas is evolved.",
        "C": "Cyclohexanol has a pKa near 16, about the same as water. Neither bicarbonate nor hydroxide removes its proton to any useful extent, and it stays undissolved and quiet.",
        "D": "Cyclohexanone has no O-H at all. Its only weakly acidic hydrogens are the alpha C-H bonds (pKa about 19), which need a much stronger base than bicarbonate. It does not dissolve and does not fizz."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q12_henderson_propanoic_acid",
    "topic": "Biological Acids and the Henderson-Hasselbalch Equation",
    "difficulty_level": "Medium",
    "question_text": "A 0.0020 M solution of propanoic acid (pKa 4.87) is buffered at pH 5.30. What percentage of the propanoic acid is present as propanoate ion?",
    "options": [
      {
        "option_id": "A",
        "text": "27%",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "50%",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "73%",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Essentially 100%",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Henderson-Hasselbalch equation, pH = pKa + log([A-]/[HA]), connects the pH of a solution to the ratio of dissociated to undissociated acid. Rearranged, log([A-]/[HA]) = pH - pKa: when the pH equals the pKa the two forms are present in equal amounts, each unit of pH above the pKa multiplies the ratio by ten, and each unit below divides it by ten. The total concentration does not enter the ratio; it is only needed if actual concentrations are asked for.",
      "approach": "Step 1: log([A-]/[HA]) = pH - pKa = 5.30 - 4.87 = 0.43.\nStep 2: [A-]/[HA] = 10^0.43 = 2.7. There is 2.7 times as much propanoate as propanoic acid.\nStep 3: Convert the ratio to a percentage: fraction as A- = 2.7/(2.7 + 1) = 0.73, so 73% propanoate and 27% propanoic acid.\nStep 4: Check the direction: the pH is above the pKa, so the anion must dominate, and 73% is on the right side of 50%. The 0.0020 M total was not needed for the percentage.",
      "note": "McMurry 20.3 (Biological Acids and the Henderson-Hasselbalch Equation) works the acetic acid case at pH 7.3 (ratio 3.5 x 10^2, essentially 100% acetate) and sets this propanoic acid solution as Problem 20-5(b). The lesson the section draws is that at cellular pH (7.35-7.45) every ordinary carboxylic acid is almost entirely dissociated, which is why biochemists write acetate, lactate and citrate rather than the acid names.",
      "options": {
        "A": "27% is the fraction remaining as propanoic acid, the inverse of the ratio. With the pH above the pKa the deprotonated form must be the larger share, so 27% is the undissociated part, not the propanoate.",
        "B": "50% is the answer only when pH = pKa, where log 1 = 0. Here the pH is 0.43 units above the pKa, so the ratio of anion to acid is 10^0.43, about 2.7, not 1.",
        "C": "Correct. pH - pKa = 0.43 gives a propanoate-to-acid ratio of 2.7, which is 73% propanoate.",
        "D": "Essentially 100% is what the equation gives at pH 7.3, where pH - pKa is 2.4 and the ratio is several hundred. At pH 5.30 the pH is less than half a unit above the pKa and a quarter of the acid is still protonated."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q13_lactate_blood_ratio",
    "topic": "Biological Acids and the Henderson-Hasselbalch Equation",
    "difficulty_level": "Medium",
    "question_text": "Lactic acid has pKa 3.86. In blood at pH 7.4, what is the ratio of lactate ion to undissociated lactic acid?",
    "options": [
      {
        "option_id": "A",
        "text": "3.5 x 10^3",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3.54",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2.9 x 10^-4",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1.9",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "At physiological pH a carboxylic acid is almost entirely in its anion form, and the Henderson-Hasselbalch equation says by how much. log([A-]/[HA]) = pH - pKa, so the difference between the pH and the pKa is the exponent of ten in the ratio. Lactic acid is about a pKa unit stronger than acetic acid because of the electron-withdrawing OH on its alpha carbon, so at any given pH it is even more completely dissociated.",
      "approach": "Step 1: pH - pKa = 7.4 - 3.86 = 3.54.\nStep 2: That difference is a logarithm: [lactate]/[lactic acid] = 10^3.54.\nStep 3: 10^3.54 = 10^3 x 10^0.54 = 1000 x 3.5 = 3.5 x 10^3.\nStep 4: Interpret: about 3,500 lactate ions for every molecule of lactic acid, so the species in blood is lactate, and the acid name is a formality.",
      "note": "McMurry 20.3 (Biological Acids and the Henderson-Hasselbalch Equation) runs the same calculation for acetic acid at pH 7.3 and gets 3.5 x 10^2; lactic acid, a pKa unit stronger, gives ten times that at a slightly higher pH. The text's conclusion is that cellular carboxylic acids should be named as their anions. Problem 20-6 in 20.4 asks why lactic acid is stronger than acetic acid: the inductive effect of the alpha OH, the same effect that makes glycolic acid (pKa 3.83) stronger than acetic acid.",
      "options": {
        "A": "Correct. pH - pKa = 3.54, and the ratio is 10^3.54, about 3.5 x 10^3 in favour of lactate.",
        "B": "3.54 is pH - pKa, the logarithm of the ratio, not the ratio itself. The equation gives log([A-]/[HA]); the antilog is needed to get the concentration ratio.",
        "C": "2.9 x 10^-4 is the reciprocal, [lactic acid]/[lactate]. With the pH far above the pKa the anion must be the major form, so the ratio asked for is large, not small.",
        "D": "1.9 is pH divided by pKa, which has no meaning in the Henderson-Hasselbalch equation. The equation uses the difference of pH and pKa as an exponent, not their quotient."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q14_most_dissociated_ph4",
    "topic": "Biological Acids and the Henderson-Hasselbalch Equation",
    "difficulty_level": "Medium",
    "question_text": "Which acid is most extensively dissociated in a solution buffered at pH 4.0?",
    "options": [
      {
        "option_id": "A",
        "text": "p-Nitrobenzoic acid",
        "smiles": "O=C(O)c1ccc([N+](=O)[O-])cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzoic acid",
        "smiles": "O=C(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetic acid",
        "smiles": "CC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propanoic acid",
        "smiles": "CCC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "At a fixed pH the fraction of an acid that is dissociated depends only on its pKa: the lower the pKa, the larger the [A-]/[HA] ratio, because log([A-]/[HA]) = pH - pKa. So a question about which acid is most dissociated at a given pH is a question about which acid is strongest. Here the four span a range set by structure: an aromatic acid is a little stronger than an aliphatic one, an electron-withdrawing para substituent strengthens it further, and an extra alkyl carbon weakens an aliphatic acid slightly.",
      "approach": "Step 1: Rank the pKa values. p-Nitrobenzoic acid 3.41 (the nitro group withdraws electrons and stabilises the carboxylate), benzoic acid 4.19, acetic acid 4.76, propanoic acid 4.87.\nStep 2: Apply pH - pKa at pH 4.0: +0.59, -0.19, -0.76, -0.87.\nStep 3: Convert to ratios: 3.9, 0.65, 0.17, 0.13; only p-nitrobenzoic acid has more anion than acid.\nStep 4: As percentages dissociated: about 80%, 39%, 15% and 12%. The strongest acid is the most dissociated at any pH.",
      "note": "McMurry 20.4 (Substituent Effects on Acidity) supplies the pKa values in Table 20.4 (p-NO2 3.41, H 4.19) and Table 20.3 in 20.2 (acetic 4.76, propanoic 4.87); McMurry 20.3 supplies the equation. The text points out that benzoic acid acidities are easy to measure and correlate with the same substituent effects that govern electrophilic aromatic substitution (16.4): a group that strengthens the acid is a deactivating group in that reaction.",
      "options": {
        "A": "Correct. With pKa 3.41, p-nitrobenzoic acid is the only one of the four whose pKa lies below the pH of 4.0, so it is the only one that is mostly dissociated, about 80%.",
        "B": "Benzoic acid (pKa 4.19) is stronger than the two aliphatic acids but weaker than its p-nitro derivative; at pH 4.0 it is about 39% dissociated. The nitro group's electron withdrawal is what the comparison turns on.",
        "C": "Acetic acid (pKa 4.76) at pH 4.0 is about 15% dissociated. Being 0.76 units below its pKa, the solution holds roughly six molecules of acid for every acetate ion.",
        "D": "Propanoic acid (pKa 4.87) is the weakest acid here, the ethyl group being marginally more electron-releasing than methyl, and is the least dissociated at about 12%."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q15_chlorobutanoic_acid_ranking",
    "topic": "Substituent Effects on Acidity",
    "difficulty_level": "Medium",
    "question_text": "Which order lists butanoic acid and its 2-chloro, 3-chloro and 4-chloro derivatives from lowest pKa to highest pKa?",
    "options": [
      {
        "option_id": "A",
        "text": "2-Chlorobutanoic < 3-chlorobutanoic < 4-chlorobutanoic < butanoic",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Butanoic < 4-chlorobutanoic < 3-chlorobutanoic < 2-chlorobutanoic",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-Chlorobutanoic < 3-chlorobutanoic < 2-chlorobutanoic < butanoic",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Chlorobutanoic < 4-chlorobutanoic < 3-chlorobutanoic < butanoic",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The inductive effect of a substituent is transmitted through sigma bonds, and it weakens with every bond it has to cross. A chlorine on the alpha carbon of a carboxylic acid pulls electron density away from the carboxylate through one C-C bond and stabilises the anion strongly; on the beta carbon it acts through two bonds and does much less; on the gamma carbon, through three bonds, its effect has almost vanished. A lower pKa means a stronger acid, so the order of increasing pKa runs from the chlorine nearest the carboxyl to no chlorine at all.",
      "approach": "Step 1: 2-Chlorobutanoic acid: Cl on the alpha carbon, one bond from the carboxyl carbon. Strongest inductive stabilisation of the anion: pKa 2.86.\nStep 2: 3-Chlorobutanoic acid: Cl on the beta carbon, two bonds away. Much weaker effect: pKa 4.05.\nStep 3: 4-Chlorobutanoic acid: Cl on the gamma carbon, three bonds away. The effect is nearly gone: pKa 4.52.\nStep 4: Butanoic acid, no chlorine: pKa 4.82, similar to the 4-chloro acid. Increasing pKa: 2-Cl < 3-Cl < 4-Cl < unsubstituted.",
      "note": "McMurry 20.4 (Substituent Effects on Acidity) gives these three chlorobutanoic acids as its illustration that inductive effects depend on distance, with the 4-chloro acid described as similar to butanoic acid itself. The pattern generalises: one alpha chlorine lowers a pKa by about two units, a beta chlorine by less than one, and by the delta position a halogen is spectroscopically present and acid-strength absent.",
      "options": {
        "A": "Correct. The closer the chlorine to the carboxylate, the greater its inductive stabilisation of the anion and the lower the pKa; the unsubstituted acid has the highest pKa of the set.",
        "B": "This is the order of increasing acidity, not increasing pKa. A strong acid has a low pKa, so the 2-chloro acid at 2.86 comes first, not last, in a list that runs from low to high pKa.",
        "C": "This order has the inductive effect growing with distance from the carboxyl, which is the reverse of the truth. Induction is passed along sigma bonds and fades with each one, so the alpha chlorine, not the gamma, has the largest effect.",
        "D": "The alpha acid is correctly placed as the strongest, but the 3- and 4-chloro acids are interchanged. The beta chlorine (3-position) is closer to the carboxylate than the gamma chlorine (4-position) and lowers the pKa more: 4.05 against 4.52."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q16_strongest_benzoic_acid",
    "topic": "Substituent Effects on Acidity",
    "difficulty_level": "Easy",
    "question_text": "Which of these substituted benzoic acids is the strongest acid?",
    "options": [
      {
        "option_id": "A",
        "text": "p-Nitrobenzoic acid",
        "smiles": "O=C(O)c1ccc([N+](=O)[O-])cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "p-Chlorobenzoic acid",
        "smiles": "O=C(O)c1ccc(Cl)cc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "p-Methylbenzoic acid",
        "smiles": "O=C(O)c1ccc(C)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "p-Methoxybenzoic acid",
        "smiles": "O=C(O)c1ccc(OC)cc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A substituent on a benzoic acid changes acidity in the same direction as it changes the ring's reactivity toward electrophiles, but in the reverse sense: an electron-withdrawing (deactivating) group stabilises the negative charge of the carboxylate and strengthens the acid, while an electron-donating (activating) group pushes electron density toward the carboxylate, destabilises it and weakens the acid. Nitro is the strongest common withdrawing group, acting by both resonance and induction; halogens withdraw by induction and are mildly acid-strengthening; alkyl and alkoxy groups donate and weaken the acid.",
      "approach": "Step 1: Classify each para substituent. NO2: strongly withdrawing. Cl: withdrawing by induction (its resonance donation is weak). CH3: weakly donating. OCH3: donating by resonance.\nStep 2: A withdrawing group stabilises the carboxylate and lowers the pKa; a donating group raises it.\nStep 3: Order of decreasing acidity: p-NO2 (3.41) > p-Cl (4.0) > H (4.19) > p-CH3 (4.34) > p-OCH3 (4.46).\nStep 4: The strongest acid is p-nitrobenzoic acid, about six times as strong as benzoic acid.",
      "note": "McMurry 20.4 (Substituent Effects on Acidity) tabulates these values in Table 20.4 and draws the parallel with electrophilic aromatic substitution (16.4): the same groups that deactivate a ring toward bromination make the corresponding benzoic acid stronger. The text adds a practical point: acidities are far easier to measure than substitution rates, so a benzoic acid's pKa is a convenient way to learn whether an unfamiliar substituent donates or withdraws electrons (Worked Example 20.1 with the trifluoromethyl group).",
      "options": {
        "A": "Correct. The nitro group withdraws electron density from the ring by resonance and induction, stabilising the carboxylate; pKa 3.41, the lowest of the four.",
        "B": "Chlorine is electron-withdrawing by induction and does make the acid stronger than benzoic acid (pKa 4.0 against 4.19), but its effect is far smaller than the nitro group's; p-chlorobenzoic acid is the second strongest here.",
        "C": "A methyl group is weakly electron-donating; it pushes density toward the carboxylate and destabilises it, so p-methylbenzoic acid (pKa 4.34) is weaker than benzoic acid, not stronger.",
        "D": "Methoxy donates electrons to the ring by resonance from its oxygen lone pair, the same donation that makes anisole highly reactive toward electrophiles. That donation destabilises the carboxylate: pKa 4.46, the weakest acid of the set."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q17_cyclopropyl_benzoic_reactivity",
    "topic": "Substituent Effects on Acidity",
    "difficulty_level": "Hard",
    "question_text": "The pKa of p-cyclopropylbenzoic acid is 4.45; that of benzoic acid is 4.19. What does this predict about cyclopropylbenzene in electrophilic aromatic bromination?",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclopropylbenzene is more reactive than benzene: the higher pKa shows that cyclopropyl donates electrons to the ring, destabilising the carboxylate and activating the ring toward electrophiles",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclopropylbenzene is less reactive than benzene: the higher pKa shows that cyclopropyl withdraws electrons from the ring",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclopropylbenzene is more reactive than benzene: the higher pKa shows that cyclopropyl withdraws electrons, which stabilises the cationic intermediate of substitution",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "No prediction is possible: acidity of the carboxyl group and reactivity of the ring toward electrophiles are unrelated properties",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The acidity of a substituted benzoic acid and the reactivity of the corresponding substituted benzene toward electrophiles are two readings of the same electronic property of the substituent. A substituent that pushes electron density into the ring destabilises a carboxylate on that ring (weaker acid, higher pKa) and stabilises the cationic intermediate of electrophilic substitution (more reactive ring). One that pulls density out does the opposite on both counts. So a pKa, which is easy to measure, predicts a relative rate, which is not.",
      "approach": "Step 1: Compare the pKa values. p-Cyclopropylbenzoic acid, 4.45, is a weaker acid than benzoic acid, 4.19.\nStep 2: A weaker acid means a less stable carboxylate, so the cyclopropyl group must be pushing electron density toward it: cyclopropyl is electron-donating.\nStep 3: An electron-donating group stabilises the electron-poor arenium ion formed when Br+ attacks the ring, lowering the activation barrier.\nStep 4: Cyclopropylbenzene should therefore be more reactive than benzene toward electrophilic bromination and, like other alkyl groups, an ortho/para director.",
      "note": "McMurry 20.4 (Substituent Effects on Acidity) makes this argument in Worked Example 20.1 for the trifluoromethyl group (pKa 3.6, hence withdrawing and deactivating) and asks the cyclopropyl case as Problem 20-8. The magnitude here is small, 0.26 pKa units against 0.15 for a p-methyl group (Table 20.4), which fits cyclopropyl behaving as a somewhat better donor than an ordinary alkyl group; its bent C-C bonds have extra p character and can conjugate weakly with the ring.",
      "options": {
        "A": "Correct. Weaker acid, less stable carboxylate, electron-donating substituent, stabilised arenium ion: cyclopropylbenzene is activated toward electrophilic substitution.",
        "B": "The direction is reversed. An electron-withdrawing group stabilises a carboxylate and lowers the pKa, as nitro does (3.41). A pKa above benzoic acid's 4.19 signals donation, not withdrawal.",
        "C": "The conclusion is right for the wrong reason, and the reason matters on an exam. An electron-withdrawing group would stabilise the anionic carboxylate, not the cationic arenium ion; the higher pKa shows that cyclopropyl donates electrons, and donation is what stabilises the cation.",
        "D": "The two properties are tightly linked, which is the point of the section: both respond to whether the substituent enriches or depletes the ring in electrons. The text uses benzoic acid pKa values precisely because they are the easier measurement of that one property."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q18_oxalic_acid_second_pka",
    "topic": "Substituent Effects on Acidity",
    "difficulty_level": "Medium",
    "question_text": "Oxalic acid, HO2C-CO2H, has pKa1 = 1.2 and pKa2 = 4.2. Why is the second carboxyl group so much less acidic than the first?",
    "options": [
      {
        "option_id": "A",
        "text": "The second dissociation must put a second negative charge on an ion that already carries one; the electrostatic repulsion destabilises the dianion, while in the first dissociation the neutral second CO2H group withdraws electrons and strengthens the acid",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The first proton is removed from a carboxyl group that is hydrogen-bonded to the other, which weakens its O-H bond; the second carboxyl has no partner",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The two carboxyl groups are structurally different, so their pKa values differ as they would in any unsymmetrical diacid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The first carboxylate formed donates electron density into the second carboxyl group by resonance, making it less acidic",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A dicarboxylic acid dissociates in two steps, and the two carboxyl groups face very different situations. In the first step, the second CO2H is a neutral, electron-withdrawing substituent on the alpha carbon (much like a chlorine), so it stabilises the carboxylate being formed and makes the first proton more acidic than in a monocarboxylic acid. In the second step, the leaving proton must abandon a group that already sits next to a full negative charge, and the two like charges in the dianion repel; the second proton is therefore much harder to remove.",
      "approach": "Step 1: First dissociation: HO2C-CO2H gives HO2C-CO2-. The undissociated CO2H is electron-withdrawing and stabilises the new carboxylate, so pKa1 (1.2) is far below acetic acid's 4.76.\nStep 2: Second dissociation: HO2C-CO2- gives -O2C-CO2-. The proton leaves a molecule that is already an anion, and the product carries two negative charges on adjacent carbons.\nStep 3: Electrostatic repulsion between the two carboxylates raises the energy of the dianion, so the second equilibrium lies far to the left: pKa2 4.2, three units above pKa1.\nStep 4: The two carboxyls are identical by symmetry; the difference is entirely the charge already present when the second proton leaves.",
      "note": "McMurry 20.4 (Substituent Effects on Acidity) poses this as Problem 20-7. The size of the gap between pKa1 and pKa2 shrinks as the two carboxyls move apart: oxalic 1.2/4.2, malonic 2.8/5.7, succinic 4.2/5.6, adipic 4.4/5.4, because both the inductive boost to the first dissociation and the repulsion penalty on the second fall off with distance, the same distance dependence the chlorobutanoic acids show. The text gives only the oxalic acid values; the others are standard reference data.",
      "options": {
        "A": "Correct. The neutral CO2H strengthens the first acid by induction; the carboxylate already present weakens the second by charge repulsion in the dianion.",
        "B": "Intramolecular hydrogen bonding, where it occurs, holds a proton more tightly and would make that proton less acidic, not more. It cannot explain a pKa1 of 1.2, three and a half units below acetic acid.",
        "C": "The two carboxyl groups of oxalic acid are identical by symmetry, so any difference in their pKa values must arise during the dissociation itself, from the charge left behind after the first proton is gone.",
        "D": "The first carboxylate does weaken the second acid, but the effect is electrostatic, not resonance: two negative charges close together repel whatever bonds lie between them. Succinic acid shows the same kind of gap (pKa 4.2 and 5.6) even though two CH2 groups separate its carboxyls and rule out any resonance path between them."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q19_lactic_vs_acetic",
    "topic": "Substituent Effects on Acidity",
    "difficulty_level": "Easy",
    "question_text": "Which is the stronger acid, lactic acid (CH3CH(OH)CO2H) or acetic acid (CH3CO2H), and why?",
    "options": [
      {
        "option_id": "A",
        "text": "Lactic acid: the electronegative oxygen of the alpha OH withdraws electron density through the sigma bonds and stabilises the carboxylate",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetic acid: the OH of lactic acid donates electron density to the carboxylate by resonance and destabilises it",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetic acid: lactic acid has a larger alkyl framework, and alkyl groups are electron-donating",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "They are equally acidic: both have a single CO2H group and the same number of carbons",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Any substituent on the alpha carbon that withdraws electron density stabilises the carboxylate ion and strengthens the acid, and the effect is inductive: it is passed through sigma bonds and does not require any pi system. An OH group is such a substituent, because oxygen is electronegative; its lone pairs can donate by resonance only when they are attached directly to a pi system, and an sp3 alpha carbon interrupts any such path to the carboxylate. Lactic acid is therefore glycolic acid with an extra methyl, and glycolic acid is already a pKa unit stronger than acetic acid.",
      "approach": "Step 1: Compare the structures: lactic acid differs from acetic acid by an OH on the alpha carbon (and a methyl there as well).\nStep 2: The alpha OH is electron-withdrawing by induction, pulling density away from the carboxylate and stabilising it.\nStep 3: The extra methyl is weakly donating (compare acetic 4.76 with propanoic 4.87), a small effect in the other direction.\nStep 4: Induction from oxygen dominates: lactic acid pKa 3.86, glycolic acid 3.83, acetic acid 4.76. Lactic acid is the stronger acid by almost a pKa unit.",
      "note": "McMurry 20.4 (Substituent Effects on Acidity) asks this as Problem 20-6 and gives the parallel case in the text: glycolic acid, HOCH2CO2H, pKa 3.83, is stronger than acetic acid because of the electron-withdrawing effect of the electronegative oxygen atom. The same alpha-oxygen effect makes pyruvic acid (an alpha keto acid, pKa 2.5) stronger still, which matters when these acids appear as intermediates in the metabolism chapters.",
      "options": {
        "A": "Correct. The alpha OH withdraws electrons through the C-C sigma bond, stabilising lactate relative to acetate; pKa 3.86 versus 4.76.",
        "B": "Resonance donation from oxygen needs the oxygen to be attached directly to a pi system, as in a phenol or an enol. The OH of lactic acid sits on an sp3 carbon, so there is no conjugation with the carboxylate; only induction operates, and induction from oxygen is withdrawing.",
        "C": "The extra methyl of lactic acid is indeed weakly donating, but its effect is tiny (acetic 4.76 versus propanoic 4.87, about 0.1 units). The alpha oxygen's withdrawal is nearly a full pKa unit in the other direction and decides the comparison.",
        "D": "Having one carboxyl group each does not make two acids equal; the substituents on the alpha carbon set the pKa. Acetic acid and trifluoroacetic acid both have one CO2H and two carbons and differ by 4.5 pKa units."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q20_tert_butyltoluene_kmno4_scheme",
    "topic": "Preparing Carboxylic Acids",
    "difficulty_level": "Medium",
    "question_text": "What is the major product when 1-tert-butyl-4-methylbenzene is heated with excess aqueous KMnO4 and the mixture is then acidified?",
    "reaction_scheme": {
      "reactants": [
        "Cc1ccc(cc1)C(C)(C)C"
      ],
      "reagents": "1. KMnO4, H2O, heat; 2. H3O+",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring with a methyl group on one carbon and, on the carbon directly opposite, a tert-butyl group: a carbon bearing three methyls."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "4-tert-Butylbenzoic acid",
        "smiles": "OC(=O)c1ccc(cc1)C(C)(C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzene-1,4-dicarboxylic acid (terephthalic acid)",
        "smiles": "OC(=O)c1ccc(cc1)C(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-Methylbenzoic acid",
        "smiles": "Cc1ccc(cc1)C(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-tert-Butylbenzaldehyde",
        "smiles": "O=Cc1ccc(cc1)C(C)(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hot permanganate oxidises an alkyl side chain on a benzene ring all the way to a carboxyl group, whatever its length, but only if the benzylic carbon carries at least one hydrogen: the oxidation begins by removing a benzylic C-H. A methyl, ethyl or isopropyl group is therefore cut back to CO2H, while a tert-butyl group, whose benzylic carbon has no hydrogen, is untouched. The ring itself survives. The acid is formed as its potassium salt in the basic medium and is released by acidification.",
      "approach": "Step 1: Identify the side chains and their benzylic hydrogens. The methyl has three; the tert-butyl carbon has none.\nStep 2: KMnO4 attacks the methyl group through its benzylic C-H bonds and oxidises it, via the alcohol and aldehyde stages, to a carboxylate.\nStep 3: The tert-butyl group has no benzylic hydrogen to start the sequence and is left intact.\nStep 4: Acidification protonates the carboxylate: 4-tert-butylbenzoic acid.",
      "note": "McMurry 20.5 (Preparing Carboxylic Acids) opens its review of acid syntheses with this reaction and states the limitation directly: both primary and secondary alkyl groups can be oxidised, but tertiary groups are not affected. The mechanism, and the benzylic C-H requirement behind that limitation, is McMurry 16.8 (Oxidation of Aromatic Compounds). Terephthalic acid, the distractor in option B, is made industrially from p-xylene, where both side chains are methyls.",
      "options": {
        "A": "Correct. The methyl group is oxidised to CO2H; the tert-butyl group has no benzylic hydrogen and survives.",
        "B": "Terephthalic acid needs both side chains oxidised, which p-xylene gives. Here the tert-butyl carbon has no benzylic hydrogen, so permanganate cannot begin the oxidation on that side and only the methyl becomes a carboxyl.",
        "C": "This has the wrong group oxidised: it keeps the methyl and turns the tert-butyl into CO2H. Permanganate needs a benzylic C-H to start, and it is the methyl that has them; a tert-butyl group is the one that resists.",
        "D": "Hot aqueous permanganate does not stop at the aldehyde. Benzaldehydes are oxidised by KMnO4 faster than the alkylbenzenes are (19.3), so under these conditions the aldehyde is an intermediate that is carried straight on to the acid."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q21_pivalic_acid_route",
    "topic": "Preparing Carboxylic Acids",
    "difficulty_level": "Medium",
    "question_text": "Which route converts 2-chloro-2-methylpropane, (CH3)3CCl, into 2,2-dimethylpropanoic acid, (CH3)3CCO2H?",
    "options": [
      {
        "option_id": "A",
        "text": "1. Mg, ether; 2. CO2; 3. H3O+",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1. NaCN, DMSO; 2. H3O+, heat",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1. KMnO4, H2O, heat; 2. H3O+",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1. NaOH, H2O; 2. CrO3, H2SO4, H2O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two general routes turn an alkyl halide into a carboxylic acid with one more carbon: displacement of the halide by cyanide followed by hydrolysis of the nitrile, and formation of a Grignard reagent followed by carboxylation. The cyanide route is an SN2 reaction and so is confined to primary and some secondary halides; a tertiary halide gives elimination instead. The Grignard route has no such steric limit, because forming RMgX does not involve backside attack, and is barred only by acidic hydrogens or reactive groups elsewhere in the molecule. A tertiary halide therefore goes by the Grignard route.",
      "approach": "Step 1: Classify the halide: (CH3)3CCl is tertiary.\nStep 2: Rule out SN2: cyanide cannot reach the backside of a tertiary carbon, and the basic cyanide ion would instead promote E2 elimination to 2-methylpropene.\nStep 3: Form the Grignard: (CH3)3CCl + Mg in ether gives tert-butylmagnesium chloride, which forms without difficulty from a tertiary halide.\nStep 4: Bubble in CO2 to give the magnesium carboxylate, then add aqueous acid: (CH3)3CCO2H, pivalic acid, with the extra carbon from CO2.",
      "note": "McMurry 20.5 (Preparing Carboxylic Acids) sets this as Problem 20-10(a) directly after the worked example on phenylacetic acid, where the text states the two limitations: the cyanide route is limited to primary and some secondary halides, the Grignard route to halides without acidic hydrogens or reactive functional groups. The two routes are complementary, and an exam item that offers both usually hinges on which limitation the substrate trips.",
      "options": {
        "A": "Correct. A tertiary halide forms a Grignard reagent readily; carboxylation and acid work-up add the one carbon needed.",
        "B": "Cyanide displacement is an SN2 reaction and fails on a tertiary halide: the crowded carbon cannot be attacked from behind, and cyanide, a base, causes E2 elimination to 2-methylpropene instead.",
        "C": "Permanganate oxidises alkyl groups only on a benzene ring, where a benzylic C-H starts the reaction, or oxidises alcohols and aldehydes. tert-Butyl chloride has no benzylic or oxidisable position and would be untouched.",
        "D": "NaOH would give tert-butyl alcohol (by SN1) and 2-methylpropene (by E2), and tert-butyl alcohol has no hydrogen on the carbinol carbon, so chromic acid cannot oxidise it. Neither step leads toward an acid, and no carbon has been added."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q22_bromopropane_cyanide_scheme",
    "topic": "Preparing Carboxylic Acids",
    "difficulty_level": "Easy",
    "question_text": "1-Bromopropane is treated with sodium cyanide in DMSO, and the product is then heated with aqueous H2SO4. What is the final organic product?",
    "reaction_scheme": {
      "reactants": [
        "CCCBr"
      ],
      "reagents": "1. NaCN, DMSO; 2. H3O+, heat",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A three-carbon chain with a bromine on the end carbon."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Butanoic acid",
        "smiles": "CCCC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propanoic acid",
        "smiles": "CCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Butanamide",
        "smiles": "CCCC(=O)N",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Butan-1-amine",
        "smiles": "CCCCN",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Cyanide ion is a good nucleophile, and with a primary alkyl halide it does a clean SN2 displacement to give a nitrile with one more carbon than the halide. A nitrile is then a masked carboxylic acid: hot aqueous acid (or base) adds water across the C≡N to give an amide, and the amide is hydrolysed further, under the same conditions, to the carboxylic acid and ammonium ion. Two steps therefore convert RBr into RCO2H, and the carbon count goes up by one.",
      "approach": "Step 1: Count carbons: 1-bromopropane has three; the product will have four.\nStep 2: SN2: CN- displaces Br- from the primary carbon to give butanenitrile, CH3CH2CH2C≡N.\nStep 3: Hydrolysis: water adds to the nitrile to give butanamide, CH3CH2CH2CONH2, which under continued heating in aqueous acid is hydrolysed on to butanoic acid and NH4+.\nStep 4: Product: butanoic acid, CH3CH2CH2CO2H.",
      "note": "McMurry 20.5 (Preparing Carboxylic Acids) describes this two-step sequence, RBr to RC≡N to RCO2H, and notes that the product acid has one more carbon than the halide; a commercial ibuprofen synthesis uses it. Problem 20-10(b) asks for butanoic acid from 1-bromopropane. The mechanism of the hydrolysis, through the imine anion and the amide, is McMurry 20.7 (Chemistry of Nitriles), and the amide stage can be isolated only under milder conditions than the heating specified here.",
      "options": {
        "A": "Correct. Cyanide adds a carbon by SN2 to give butanenitrile, and hot aqueous acid hydrolyses the nitrile, through butanamide, to butanoic acid.",
        "B": "Propanoic acid has the halide's three carbons and none from cyanide. The nitrile carbon becomes the carboxyl carbon, so the product must have one carbon more than 1-bromopropane.",
        "C": "Butanamide is the intermediate of the hydrolysis, and it can be isolated if the hydrolysis is stopped early under mild conditions. With heat and aqueous acid the amide is hydrolysed further, to the acid and ammonium ion.",
        "D": "Butan-1-amine is what butanenitrile gives with LiAlH4, a reduction. Aqueous acid does not reduce; it hydrolyses, adding oxygen and removing nitrogen as NH4+."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q23_grignard_route_fails",
    "topic": "Preparing Carboxylic Acids",
    "difficulty_level": "Medium",
    "question_text": "Which of these halides cannot be converted into a carboxylic acid by the Grignard carboxylation route (Mg, ether; then CO2; then H3O+) without first modifying another functional group?",
    "options": [
      {
        "option_id": "A",
        "text": "4-Bromophenol",
        "smiles": "Oc1ccc(Br)cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Bromocyclohexane",
        "smiles": "BrC1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Bromo-2-methylpropane",
        "smiles": "CC(C)(C)Br",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Bromobenzene",
        "smiles": "Brc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Grignard reagent is both a strong nucleophile and a very strong base, the conjugate base of an alkane with pKa near 50. Any hydrogen in the molecule that is even slightly acidic, an O-H, N-H or S-H, or the C-H of a terminal alkyne, will protonate the Grignard reagent as it forms, destroying it. So the Grignard route to a carboxylic acid works for primary, secondary, tertiary and aryl halides alike, with no steric limit, but not for a halide that also carries an acidic hydrogen or a carbonyl group that the Grignard could attack.",
      "approach": "Step 1: Check each halide for groups a Grignard reagent cannot tolerate.\nStep 2: Bromocyclohexane (secondary) and 2-bromo-2-methylpropane (tertiary) are plain alkyl halides; both form Grignard reagents and both are carboxylated to the corresponding acids.\nStep 3: Bromobenzene forms phenylmagnesium bromide; aryl halides are excellent Grignard precursors and give benzoic acid.\nStep 4: 4-Bromophenol carries a phenolic O-H (pKa 10). The Grignard reagent formed from one molecule is immediately protonated by the OH of another, so the reagent is consumed as fast as it forms and no carboxylation occurs. The OH would need protecting first, as a silyl or methyl ether.",
      "note": "McMurry 20.5 (Preparing Carboxylic Acids), in the worked example on phenylacetic acid, states the two limitations side by side: the cyanide route is an SN2 reaction and is limited to primary and some secondary halides, and the Grignard route is limited to organic halides that have no acidic hydrogens or reactive functional groups elsewhere in the molecule. Protecting an alcohol as a TMS ether so that a Grignard reaction can be run is McMurry 17.8 (Protection of Alcohols), and the same idea applies to the phenol here.",
      "options": {
        "A": "Correct. The phenolic O-H is acidic enough to protonate any Grignard reagent, so the reagent from 4-bromophenol is destroyed as it forms; the OH must be protected before the route can be used.",
        "B": "Bromocyclohexane is a secondary alkyl halide with no acidic hydrogen. It forms cyclohexylmagnesium bromide normally and is carboxylated to cyclohexanecarboxylic acid.",
        "C": "A tertiary halide is a poor SN2 substrate, but Grignard formation does not involve backside attack. 2-Bromo-2-methylpropane gives tert-butylmagnesium bromide and, after CO2 and acid, 2,2-dimethylpropanoic acid; this is the route Problem 20-10(a) calls for.",
        "D": "Bromobenzene is the classic Grignard precursor. Phenylmagnesium bromide adds to CO2 to give benzoate, and acid work-up gives benzoic acid; there is no acidic hydrogen on the ring to interfere."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q24_roadmap_bromocyclohexane_grignard",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following synthetic pathway from bromocyclohexane. Determine the correct compounds matching labels B, C and D.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "BrC1CCCCC1",
          "label": "Compound A",
          "alt": "A six-membered ring bearing one bromine atom: bromocyclohexane, drawn as compound A.",
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
          "reagents": "Mg, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1. CO2; 2. H3O+"
        },
        {
          "from": "C",
          "to": "D",
          "reagents": "1. LiAlH4, ether; 2. H2O"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "B: cyclohexylmagnesium bromide, C: cyclohexanecarboxylic acid, D: cyclohexylmethanol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "B: cyclohexylmagnesium bromide, C: cyclohexanecarboxylic acid, D: cyclohexanecarbaldehyde",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "B: cyclohexylmagnesium bromide, C: cyclohexanecarboxylic acid, D: methylcyclohexane",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "B: cyclohexanecarbonitrile, C: cyclohexanecarboxylic acid, D: cyclohexylmethanamine",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carboxylic acid is a useful waypoint in a synthesis because it can be built from a halide with one extra carbon and then converted onward. Grignard carboxylation supplies the carbon: RBr to RMgBr to RCO2- to RCO2H. Lithium aluminium hydride then reduces the acid completely to the primary alcohol RCH2OH; the reduction cannot be stopped at the aldehyde, and the milder hydride NaBH4 does not reduce acids at all. The overall result is a one-carbon homologation of the halide to a primary alcohol.",
      "approach": "Step 1: A + Mg in ether: oxidative insertion gives B, cyclohexylmagnesium bromide, C6H11MgBr.\nStep 2: B + CO2, then H3O+: the cyclohexyl group adds to CO2 to give the magnesium carboxylate, and acid releases C, cyclohexanecarboxylic acid, seven carbons.\nStep 3: C + LiAlH4, then water: the first equivalent of hydride deprotonates the acid (with H2 evolution), and further hydride reduces the carboxylate through the aldehyde stage to the alkoxide; water gives D, cyclohexylmethanol, C6H11CH2OH.\nStep 4: Check the count: bromocyclohexane (six carbons) has become a seven-carbon primary alcohol, the CH2OH carbon having come from CO2.",
      "note": "McMurry 20.5 (Preparing Carboxylic Acids) gives the carboxylation, and McMurry 20.6 (Reactions of Carboxylic Acids: An Overview) lists reduction by LiAlH4 among the four reaction types of acids, referring back to 17.4 for the reagent. Problem 20-11 asks for the same sequence on benzyl bromide to make 2-phenylethanol. The reduction cannot be halted at the aldehyde with LiAlH4; the aldehyde in option B is what a DIBAH reduction of the corresponding ester at low temperature would give (19.2), which is not on this roadmap.",
      "options": {
        "A": "Correct. Grignard formation, carboxylation to the acid, and LiAlH4 reduction of the acid to the primary alcohol.",
        "B": "Cyclohexanecarbaldehyde is the intermediate oxidation level between the acid and the alcohol, but LiAlH4 does not stop there: the aldehyde formed in the flask is reduced faster than the acid was. Only the primary alcohol survives the work-up.",
        "C": "Methylcyclohexane would need the carboxyl oxygen removed altogether. LiAlH4 reduces C=O to C-OH but never strips oxygen from carbon; complete deoxygenation of a carbonyl needs a Wolff-Kishner or Clemmensen reduction, and those act on aldehydes and ketones, not acids.",
        "D": "Cyanide is not among the reagents: step 1 is magnesium, which gives an organometallic, not a nitrile. The nitrile route would indeed reach the same acid C, but LiAlH4 on the acid gives the alcohol, not an amine; the amine would come from LiAlH4 on the nitrile, which is not on this map."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q25_phenylethanol_sequence",
    "topic": "Reactions of Carboxylic Acids",
    "difficulty_level": "Medium",
    "question_text": "Which sequence converts benzyl bromide, PhCH2Br, into 2-phenylethanol, PhCH2CH2OH?",
    "options": [
      {
        "option_id": "A",
        "text": "1. Mg, ether; 2. CO2; 3. H3O+; 4. LiAlH4, ether; 5. H2O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1. Mg, ether; 2. CO2; 3. H3O+; 4. NaBH4, CH3OH",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1. NaCN, DMSO; 2. LiAlH4, ether; 3. H2O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1. NaOH, H2O; 2. Dess-Martin periodinane, CH2Cl2",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The target has one carbon more than the starting halide, with that carbon carrying the OH. Two facts pick the route. The extra carbon must come from a one-carbon electrophile added to a benzylic nucleophile, and CO2 (via the Grignard) or cyanide (via SN2) are the standard choices. And the oxidation level must end at an alcohol: carboxylation gives an acid, which LiAlH4, but not NaBH4, reduces to the primary alcohol; cyanide gives a nitrile, which LiAlH4 reduces to an amine, not an alcohol, so the nitrile would have to be hydrolysed to the acid first.",
      "approach": "Step 1: Count carbons: PhCH2Br has seven, PhCH2CH2OH has eight. One carbon is to be added and it ends up as CH2OH.\nStep 2: Mg in ether gives benzylmagnesium bromide; CO2 then aqueous acid gives phenylacetic acid, PhCH2CO2H, with the new carbon as the carboxyl.\nStep 3: LiAlH4 reduces the carboxylic acid to the primary alcohol; water work-up gives PhCH2CH2OH.\nStep 4: Confirm the alternatives fail: NaBH4 leaves acids untouched, LiAlH4 on the nitrile gives PhCH2CH2NH2, and hydrolysis of the bromide gives benzyl alcohol, one carbon short.",
      "note": "McMurry 20.6 (Reactions of Carboxylic Acids: An Overview) poses this as Problem 20-11 and notes that more than one step is needed; the reduction of acids by LiAlH4 is referred back to 17.4, where the text also records that NaBH4 does not reduce carboxylic acids. A shorter route exists that the chapter does not cover: benzylmagnesium bromide with formaldehyde gives 2-phenylethanol directly, the Grignard-plus-formaldehyde route to primary alcohols from 17.5. Both are correct chemistry; the acid route is the one this chapter is teaching.",
      "options": {
        "A": "Correct. Grignard, carboxylation to phenylacetic acid, then LiAlH4 reduction of the acid to 2-phenylethanol.",
        "B": "NaBH4 is too mild to reduce a carboxylic acid; it reduces aldehydes and ketones only. Steps 1 to 3 correctly make phenylacetic acid, but step 4 leaves it unchanged (as its sodium salt, in the borohydride's basic methanol).",
        "C": "Cyanide correctly adds the carbon, giving benzyl cyanide, PhCH2CN, but LiAlH4 reduces a nitrile to a primary amine, PhCH2CH2NH2. To reach the alcohol the nitrile would first have to be hydrolysed to the acid.",
        "D": "Hydroxide converts benzyl bromide into benzyl alcohol, PhCH2OH, which has seven carbons, and Dess-Martin periodinane then oxidises it to benzaldehyde. No carbon has been added, and the sequence moves away from the alcohol oxidation level rather than toward the target."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q26_lialh4_benzoic_acid_scheme",
    "topic": "Reactions of Carboxylic Acids",
    "difficulty_level": "Easy",
    "question_text": "What is the organic product when benzoic acid is treated with excess LiAlH4 in ether and the mixture is then worked up with aqueous acid?",
    "reaction_scheme": {
      "reactants": [
        "O=C(O)c1ccccc1"
      ],
      "reagents": "1. LiAlH4 (excess), ether; 2. H3O+",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring bearing a CO2H group: benzoic acid."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Benzyl alcohol",
        "smiles": "OCc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzaldehyde",
        "smiles": "O=Cc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Toluene",
        "smiles": "Cc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Lithium benzoate, with no further reaction",
        "smiles": "[O-]C(=O)c1ccccc1.[Li+]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Lithium aluminium hydride is the one common hydride powerful enough to reduce a carboxylic acid, and it takes the acid all the way to the primary alcohol. The first equivalent of hydride is consumed as a base, deprotonating the acidic O-H with loss of H2 to give a lithium carboxylate; the excess reagent then adds hydride to the carboxylate carbonyl. The intermediate at the aldehyde oxidation level is reduced faster than the carboxylate was, so it never accumulates, and aqueous work-up releases RCH2OH.",
      "approach": "Step 1: Acid-base first: LiAlH4 + PhCO2H gives PhCO2- Li+ and H2; one hydride is spent as a base.\nStep 2: Hydride adds to the carboxylate carbon; the aluminium-complexed tetrahedral intermediate collapses to benzaldehyde (as an aluminate), still in the flask with excess reagent.\nStep 3: Benzaldehyde is reduced at once by a second hydride to the alkoxide PhCH2O-.\nStep 4: Aqueous acid protonates the alkoxide: benzyl alcohol, PhCH2OH. The ring is untouched: LiAlH4 does not reduce benzene rings.",
      "note": "McMurry 20.6 (Reactions of Carboxylic Acids: An Overview) lists reduction by LiAlH4 as one of the four reaction categories of acids and refers to 17.4 (Alcohols from Carbonyl Compounds: Reduction), which states that carboxylic acids and esters are reduced to primary alcohols by LiAlH4 and are not reduced by NaBH4. Borane, BH3 in THF, also reduces acids to alcohols and is selective for the acid over esters and ketones; it is not in the OpenStax text but appears in ACS-style questions.",
      "options": {
        "A": "Correct. LiAlH4 deprotonates the acid, then reduces the carboxylate through the aldehyde stage to the primary alcohol; work-up gives benzyl alcohol.",
        "B": "Benzaldehyde is an intermediate oxidation level that LiAlH4 does not stop at: any aldehyde formed is reduced more readily than the carboxylate it came from. Reaching the aldehyde from an acid takes a different reagent set entirely, such as DIBAH on the ester.",
        "C": "Toluene would need the oxygen removed completely. Hydride reagents reduce C=O to C-OH; removing the oxygen from a benzylic alcohol needs a separate deoxygenation, and LiAlH4 does not do it.",
        "D": "Lithium benzoate does form first, with evolution of H2, and with only one equivalent of hydride the reaction would stop there. But LiAlH4 carries four hydrides and is used in excess, so the carboxylate is reduced on to the alcohol."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q27_carboxylate_sn2_scheme",
    "topic": "Reactions of Carboxylic Acids",
    "difficulty_level": "Medium",
    "question_text": "Sodium propanoate is stirred with iodomethane in DMF. What is the organic product?",
    "reaction_scheme": {
      "reactants": [
        "CCC(=O)[O-].[Na+]",
        "CI"
      ],
      "reagents": "DMF",
      "conditions": "25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A three-carbon chain ending in a carboxylate group, a carbon with one double-bonded oxygen and one negatively charged oxygen, paired with a sodium ion: sodium propanoate.",
        "A single carbon bonded to iodine: iodomethane."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Methyl propanoate",
        "smiles": "CCC(=O)OC",
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
        "text": "2-Methylpropanoic acid",
        "smiles": "CC(C)C(=O)O",
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
      "context": "A carboxylate ion is the conjugate base of a weak acid and a competent nucleophile, and its nucleophilic atom is oxygen: the negative charge is shared by the two oxygens and nowhere else. With a methyl or primary halide it does an SN2 displacement to give an ester, the alkyl group of the halide becoming the alkoxy group of the ester. Nothing happens at carbon. The carboxylate carbon is electrophilic, not nucleophilic, and the alpha carbon carries no charge; an alpha-alkylation needs an enolate, which a carboxylate is not.",
      "approach": "Step 1: Identify the nucleophile and the electrophile: propanoate oxygen attacks; the methyl carbon of CH3I, with iodide leaving, is the target.\nStep 2: SN2 at the methyl: an oxygen of the carboxylate bonds to CH3 and iodide departs.\nStep 3: The product joins the propanoyl group, CH3CH2C(=O)-, to an OCH3: methyl propanoate.\nStep 4: Check the isomers: all four options are C4H8O2, so the constitution decides. The methyl must be on oxygen and the ethyl on the carbonyl carbon, because those were the pieces.",
      "note": "McMurry 20.6 (Reactions of Carboxylic Acids: An Overview) lists deprotonation to a carboxylate anion, a good nucleophile in SN2 reactions, as the first of the four reaction categories of acids, though the text does not draw an example; the reaction is the carboxylate route to esters that Ch 21 will set beside Fischer esterification. In practice a polar aprotic solvent such as DMF is used so the carboxylate is not tied up by hydrogen bonding, and silver or caesium carboxylates are used when the halide is a poor SN2 substrate.",
      "options": {
        "A": "Correct. The carboxylate oxygen displaces iodide from the methyl group by SN2; the ester joins the propanoyl group to OCH3.",
        "B": "Ethyl acetate is the right formula with the fragments swapped: it has a two-carbon acyl group and a two-carbon alkoxy group. The pieces here are a three-carbon acyl group (from propanoate) and a one-carbon alkyl group (from CH3I); they cannot rearrange into an ethyl and an acetyl.",
        "C": "2-Methylpropanoic acid would be alkylation at the alpha carbon. That is enolate chemistry (Ch 22) and needs a strong base such as LDA to remove an alpha proton; a carboxylate's charge sits on oxygen and its alpha carbon is not nucleophilic.",
        "D": "Butanoic acid would require the methyl to bond to the carboxylate carbon. That carbon is the electrophilic end of the group, not a nucleophile; a carboxylate reacts with alkyl halides only through oxygen."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q28_grignard_plus_acid",
    "topic": "Reactions of Carboxylic Acids",
    "difficulty_level": "Medium",
    "question_text": "Benzoic acid is treated with two equivalents of methylmagnesium bromide in ether, and the mixture is then worked up with aqueous acid. What is the major organic product?",
    "options": [
      {
        "option_id": "A",
        "text": "Benzoic acid, recovered; the first equivalent of Grignard reagent is destroyed as methane",
        "smiles": "O=C(O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetophenone",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Phenylpropan-2-ol",
        "smiles": "CC(C)(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzyl alcohol",
        "smiles": "OCc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Grignard reagent meets a carboxylic acid as a base before it can act as a nucleophile: the acidic O-H (pKa about 4) protonates the carbanion (pKa about 50) instantly, releasing methane and leaving a magnesium carboxylate. That carboxylate is negatively charged and, unlike an ester or a ketone, is not an electrophile that a second Grignard reagent will attack under ordinary conditions. Aqueous work-up simply protonates the carboxylate again. The net result is that the acid is recovered and one equivalent of the reagent has been wasted, which is the reason acids are protected or converted into esters before any Grignard step.",
      "approach": "Step 1: First equivalent: CH3MgBr + PhCO2H gives CH4 (gas) + PhCO2- MgBr+. This is a fast proton transfer, not an addition.\nStep 2: Second equivalent: it faces a carboxylate anion. The carbonyl carbon of a carboxylate is deactivated by the adjacent negative charge, and the Grignard reagent does not add to it to a useful extent.\nStep 3: Work-up: aqueous acid protonates the carboxylate back to benzoic acid and destroys the unreacted Grignard reagent as more methane.\nStep 4: Product: benzoic acid, recovered essentially unchanged.",
      "note": "McMurry 20.6 (Reactions of Carboxylic Acids: An Overview) lists nucleophilic addition to the carbonyl among the acid's reaction types, but the only example the chapter gives is hydride (LiAlH4), which is small and delivered from aluminium in a way that carboxylates accept. The Grignard-and-acid case is McMurry 17.5's warning in different clothing: a Grignard reagent cannot be prepared from, or used on, a molecule that carries an acidic O-H. Organolithium reagents, more reactive than Grignards, do add to carboxylate salts and give ketones after work-up; that is a route to acetophenone from benzoic acid and CH3Li, not from CH3MgBr.",
      "options": {
        "A": "Correct. The acidic proton quenches the first equivalent as methane, the magnesium benzoate does not react with the second, and work-up returns benzoic acid.",
        "B": "Acetophenone is the product of adding one methyl to the carboxylate and hydrolysing the resulting dianion, which methyllithium does but methylmagnesium bromide does not: the carboxylate is too poor an electrophile for the Grignard reagent.",
        "C": "2-Phenylpropan-2-ol is what excess CH3MgBr gives with methyl benzoate, the ester, where two additions occur. The acid never reaches that pathway because its O-H destroys the reagent and the carboxylate left behind is not attacked.",
        "D": "Benzyl alcohol is the LiAlH4 reduction product of benzoic acid (20.6). A Grignard reagent supplies a carbon nucleophile, not hydride, and in any case is consumed by the acidic proton."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q30_isobutyl_bromide_cyanide_scheme",
    "topic": "Chemistry of Nitriles",
    "difficulty_level": "Easy",
    "question_text": "What is the product when 1-bromo-2-methylpropane is treated with sodium cyanide in DMSO?",
    "reaction_scheme": {
      "reactants": [
        "CC(C)CBr"
      ],
      "reagents": "NaCN, DMSO",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A three-carbon chain with a methyl branch on the middle carbon and a bromine on an end carbon: 1-bromo-2-methylpropane."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "3-Methylbutanenitrile",
        "smiles": "CC(C)CC#N",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Methylbutanenitrile",
        "smiles": "CCC(C)C#N",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Methylpropanenitrile",
        "smiles": "CC(C)C#N",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Methylpropyl isocyanide",
        "smiles": "[C-]#[N+]CC(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Cyanide ion displaces halide from a primary or secondary alkyl halide by SN2, bonding through carbon to give a nitrile with one more carbon than the halide. The new C-C bond forms at the carbon that carried the halogen; nothing moves. Cyanide is an ambident nucleophile, able in principle to bond through nitrogen as well, but with NaCN or KCN in a polar aprotic solvent the carbon end attacks and the nitrile is the product; the isocyanide is obtained deliberately only with silver cyanide, where coordination of the carbon to silver leaves nitrogen free.",
      "approach": "Step 1: Classify the halide: 1-bromo-2-methylpropane is primary (the CH2Br carbon has one carbon neighbour), so SN2 is fast despite the branch on the next carbon.\nStep 2: Cyanide carbon attacks the CH2 from the side opposite the bromine; bromide leaves.\nStep 3: The product is (CH3)2CH-CH2-C≡N: the nitrile carbon is C1, the CH2 is C2, the branch point is C3.\nStep 4: Name it: 3-methylbutanenitrile, five carbons from a four-carbon halide.",
      "note": "McMurry 20.7 (Chemistry of Nitriles) gives SN2 displacement by CN- as the simplest nitrile synthesis and, in 20.5, uses it as the first step of the halide-to-acid sequence. The steric limitation is on the carbon being attacked, not on its neighbours: an isobutyl halide is primary and reacts, whereas a tert-butyl halide does not, which is why the amide-dehydration route to nitriles in the same section is called the more general one. The ambident character of cyanide and the AgCN route to isocyanides are not in the OpenStax text.",
      "options": {
        "A": "Correct. SN2 puts the cyanide carbon on the former CH2Br carbon; the nitrile carbon becomes C1 and the methyl branch is on C3.",
        "B": "2-Methylbutanenitrile has the cyanide on the branch carbon. Nothing in an SN2 reaction moves the site of attack away from the carbon that carried the leaving group, which is the unbranched CH2.",
        "C": "2-Methylpropanenitrile has only four carbons: it keeps the halide's carbon count. Cyanide adds a carbon, and the nitrile carbon is a new one, so the product must have five.",
        "D": "The isocyanide has the nitrogen bonded to the alkyl group. Cyanide can attack through either end, but with sodium cyanide in DMSO the carbon end attacks; the isocyanide is the product with silver cyanide, where the carbon is held by silver."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q31_amide_dehydration_scheme",
    "topic": "Chemistry of Nitriles",
    "difficulty_level": "Medium",
    "question_text": "What is the product when butanamide is heated with thionyl chloride?",
    "reaction_scheme": {
      "reactants": [
        "CCCC(=O)N"
      ],
      "reagents": "SOCl2",
      "conditions": "benzene, 80 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A three-carbon chain attached to a carbon that carries a double-bonded oxygen and an NH2 group: butanamide."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Butanenitrile",
        "smiles": "CCCC#N",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Butanoyl chloride",
        "smiles": "CCCC(=O)Cl",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Butan-1-amine",
        "smiles": "CCCCN",
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
      "context": "A primary amide, RCONH2, has the formula of a nitrile plus one molecule of water, and thionyl chloride removes that water. The reaction begins at the amide oxygen, the most nucleophilic site: it attacks the sulfur of SOCl2, giving a species in which the former carbonyl oxygen is now part of a good leaving group. Loss of a proton from nitrogen and an E2-like elimination expel the oxygen with the sulfur and form the C≡N triple bond. Because no attack at the alpha carbon is involved, the method works for hindered substrates that the SN2 cyanide route cannot reach.",
      "approach": "Step 1: Recognise the transformation: RCONH2 to RC≡N is a loss of H2O, a dehydration.\nStep 2: The amide oxygen attacks SOCl2 and chloride is lost, putting an -O-S(=O)Cl group on the carbon and a positive charge on the nitrogen.\nStep 3: A base removes an N-H proton; the resulting neutral species eliminates: the N-H electron pair becomes the third bond of C≡N as the O-S leaving group departs, releasing SO2 and HCl.\nStep 4: The product is butanenitrile, CH3CH2CH2C≡N, with the same four carbons as the amide.",
      "note": "McMurry 20.7 (Chemistry of Nitriles) gives dehydration of a primary amide with SOCl2 as the second nitrile synthesis, notes that POCl3 and other dehydrating agents also work, and describes the mechanism as initial reaction at the nucleophilic amide oxygen followed by deprotonation and an E2-like elimination. The text's judgement is that the amide route is the more general one because it is not limited by steric hindrance. SOCl2 with a carboxylic acid gives an acid chloride (Ch 21); with an amide it gives a nitrile, and telling the two substrates apart is the exam point.",
      "options": {
        "A": "Correct. Thionyl chloride dehydrates the primary amide: the oxygen leaves as part of the sulfur by-product and the carbon-nitrogen bond becomes a triple bond.",
        "B": "Butanoyl chloride is what SOCl2 makes from butanoic acid, where the OH is replaced by Cl (Ch 21). An amide has NH2 in place of OH, and the same reagent instead removes the oxygen and the two N-H protons as water.",
        "C": "Butan-1-amine is the LiAlH4 reduction product of butanamide (or of butanenitrile). SOCl2 is not a reducing agent; it removes water, and the product still has the nitrogen triply bonded to carbon at the same oxidation level as the amide.",
        "D": "Butanoic acid is the hydrolysis product of the amide, obtained with aqueous acid or base. SOCl2 is used precisely because it excludes water; it removes H2O from the amide rather than adding it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q32_pivalonitrile_route",
    "topic": "Chemistry of Nitriles",
    "difficulty_level": "Medium",
    "question_text": "Which is a workable synthesis of 2,2-dimethylpropanenitrile, (CH3)3CC≡N?",
    "options": [
      {
        "option_id": "A",
        "text": "Treat 2,2-dimethylpropanamide, (CH3)3CCONH2, with SOCl2",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Treat 2-bromo-2-methylpropane, (CH3)3CBr, with NaCN in DMSO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Treat 2-methylpropan-2-ol, (CH3)3COH, with NaCN",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Treat 2,2-dimethylpropanal, (CH3)3CCHO, with NH3 and heat",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two general syntheses of nitriles exist, and they fail in different places. Cyanide displacement is an SN2 reaction, so it needs a primary or secondary halide with an accessible backside; a tertiary halide gives elimination. Dehydration of a primary amide with SOCl2 or POCl3 happens entirely at the amide group, with no attack at the alpha carbon, so it is indifferent to how crowded that carbon is. A nitrile on a tertiary carbon is therefore made from the amide, and the amide in turn from the acid (Ch 21).",
      "approach": "Step 1: Locate the nitrile carbon: it is attached to a quaternary carbon, (CH3)3C-. Whatever route is chosen must not require nucleophilic attack at that carbon.\nStep 2: Rule out cyanide displacement on tert-butyl bromide: no backside is available and cyanide, a base, gives E2 to 2-methylpropene.\nStep 3: An alcohol is not a substrate for cyanide at all (OH- is a poor leaving group), and an aldehyde with ammonia gives an imine, not a nitrile.\nStep 4: 2,2-Dimethylpropanamide + SOCl2: the amide oxygen attacks sulfur and an E2-like elimination forms the C≡N. No step touches the tertiary carbon, so the reaction works.",
      "note": "McMurry 20.7 (Chemistry of Nitriles) makes the comparison explicitly: both methods of nitrile synthesis are useful, but the synthesis from amides is more general because it is not limited by steric hindrance. The amide itself would come from pivalic acid via the acid chloride and ammonia, nucleophilic acyl substitution chemistry that Ch 21 covers, and pivalic acid from tert-butyl chloride by Grignard carboxylation (Problem 20-10a). An aldoxime, RCH=N-OH, can be dehydrated to a nitrile, which is the grain of truth in option D; an imine cannot.",
      "options": {
        "A": "Correct. Dehydration of the primary amide with SOCl2 forms the nitrile without any reaction at the crowded tertiary carbon.",
        "B": "tert-Butyl bromide is a tertiary halide. Cyanide cannot reach its backside for SN2, and being a base it promotes E2 instead, giving 2-methylpropene and HCN rather than the nitrile.",
        "C": "An alcohol does not undergo substitution by cyanide: hydroxide is a poor leaving group, and even after activation a tertiary carbon would be no better a substrate than in option B. Alcohols are not nitrile precursors in this chapter.",
        "D": "An aldehyde and ammonia give an imine, RCH=NH, by nucleophilic addition and loss of water (19.8). Turning the imine into a nitrile would need a further oxidation, which heat alone does not supply; the dehydration that does give nitriles starts from the aldoxime or the primary amide."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q33_nitrile_hydrolysis_intermediate",
    "topic": "Chemistry of Nitriles",
    "difficulty_level": "Hard",
    "question_text": "In the base-catalysed hydrolysis of acetonitrile, CH3C≡N, to acetate, what is the first intermediate formed when hydroxide attacks, and what happens to it next?",
    "options": [
      {
        "option_id": "A",
        "text": "An imine anion, CH3C(OH)=N-, sp2 at carbon; it is protonated to a hydroxy imine that tautomerises to acetamide",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A tetrahedral alkoxide, CH3C(O-)(OH)NH-, sp3 at carbon; it expels amide ion to give the carboxylate directly",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A nitrilium ion, CH3C≡NH+; water then adds to its carbon",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyanide ion, expelled as hydroxide displaces it from the methyl carbon by SN2",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A nitrile carbon is electrophilic for the same reason a carbonyl carbon is: it is bonded to an electronegative atom through a pi bond that can accept electrons. When hydroxide adds, one pi bond of the C≡N breaks and the electrons go to nitrogen, giving an anion on nitrogen with the carbon now sp2 and doubly bonded to N, an imine anion. Carbon has gone from sp to sp2, not to sp3; a tetrahedral intermediate would need a second pi bond broken. Protonation of the nitrogen gives a hydroxy imine, RC(OH)=NH, which is the imine analogue of an enol and tautomerises to the more stable amide, RC(=O)NH2.",
      "approach": "Step 1: Hydroxide attacks the nitrile carbon; one C≡N pi bond breaks toward nitrogen: CH3C(OH)=N-, the imine anion, with sp2 carbon.\nStep 2: Water protonates the nitrogen anion: CH3C(OH)=NH, a hydroxy imine (an imidic acid).\nStep 3: Tautomerisation moves the O-H proton to nitrogen and shifts the double bond to oxygen: CH3C(=O)NH2, acetamide. This is the same shift an enol makes to become a ketone.\nStep 4: Only now does a tetrahedral intermediate appear: hydroxide adds to the amide carbonyl to give CH3C(O-)(OH)NH2, which expels NH2- to give acetate. Acidification in a separate step gives acetic acid.",
      "note": "McMurry 20.7 (Chemistry of Nitriles), Figure 20.5, draws exactly this sequence: nucleophilic addition of hydroxide to give an imine anion, protonation to a hydroxy imine, tautomerisation to the amide (compared with enol-to-ketone tautomerisation, 9.4), then hydroxide addition to the amide carbonyl, a tetrahedral alkoxide, and expulsion of NH2- to give the carboxylate, which drives the reaction. The text stresses the parallel between nitriles and carbonyls: both have a carbon with three bonds to an electronegative atom and both undergo nucleophilic addition; the difference is that the nitrile's first adduct is sp2, not sp3.",
      "options": {
        "A": "Correct. Addition to C≡N breaks one pi bond and leaves an sp2 imine anion; protonation and tautomerisation deliver the amide, which is hydrolysed on to the carboxylate.",
        "B": "A tetrahedral sp3 intermediate does form, but later, when hydroxide adds to the amide carbonyl. Attack on the nitrile itself breaks only one of the two pi bonds, so the first intermediate has a C=N double bond and an sp2 carbon.",
        "C": "The nitrilium ion, CH3C≡NH+, is the intermediate of the acid-catalysed hydrolysis, where protonation on nitrogen precedes attack by water. Under basic conditions there is no acid to protonate the nitrile, and hydroxide attacks the neutral C≡N directly.",
        "D": "Cyanide is a good nucleophile but a poor leaving group (HCN pKa 9.3), and hydroxide is a stronger base than cyanide, so displacing CN- by OH- is uphill. Hydrolysis proceeds by addition to the nitrile carbon, not by substitution at the alkyl carbon."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q34_chiral_nitrile_hydrolysis_scheme",
    "topic": "Chemistry of Nitriles",
    "difficulty_level": "Hard",
    "question_text": "(S)-2-Phenylpropanenitrile is heated with aqueous sulfuric acid until hydrolysis is complete. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "C[C@H](C#N)c1ccccc1"
      ],
      "reagents": "H3O+, heat",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring attached to a carbon that also carries a methyl group, a hydrogen and a carbon triple-bonded to nitrogen; one bond at that carbon is drawn as a wedge to show its configuration."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "(S)-2-Phenylpropanoic acid",
        "smiles": "C[C@H](C(=O)O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(R)-2-Phenylpropanoic acid",
        "smiles": "C[C@@H](C(=O)O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Racemic 2-phenylpropanoic acid",
        "smiles": "CC(C(=O)O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(S)-2-Phenylpropanamide",
        "smiles": "C[C@H](C(=O)N)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Nitrile hydrolysis takes place entirely at the nitrile carbon: water adds, the amide forms and is hydrolysed, and the alpha carbon is never a reaction site. A stereocentre on that alpha carbon therefore keeps its spatial arrangement. Whether its descriptor also stays the same is a separate question, decided by CIP priorities: if the group that changes (C≡N to CO2H) keeps the same rank among the four substituents, the letter is unchanged; if its rank changes, the same arrangement gets a new letter. Here C≡N (carbon attached to N,N,N) and CO2H (carbon attached to O,O,O) are both the top-ranked substituent, so S stays S.",
      "approach": "Step 1: Locate the reaction: the C≡N is hydrolysed, through the amide, to CO2H. The alpha carbon, which bears the phenyl, methyl and hydrogen, is not touched, so its bonds keep their spatial arrangement.\nStep 2: Rank the substituents in the nitrile: C≡N (duplicated N,N,N) > phenyl (C,C,C) > CH3 (H,H,H) > H. Descriptor: S, as given.\nStep 3: Rank them in the acid: CO2H (O,O,O) > phenyl (C,C,C) > CH3 > H. The new group occupies the same rank as the old one, so the sequence 1-2-3 traces the same direction: still S.\nStep 4: With heat and excess aqueous acid the amide does not survive; the product is (S)-2-phenylpropanoic acid, a single enantiomer.",
      "note": "McMurry 20.7 (Chemistry of Nitriles) describes hydrolysis as addition at the nitrile carbon followed by hydrolysis of the amide, with no involvement of the alpha carbon; the CIP rules are McMurry 5.5. The alpha C-H of the acid is weakly acidic (pKa about 25), and prolonged heating in acid or base can slowly racemise a 2-arylpropanoic acid through its enol or enolate, which is a real concern in the manufacture of the anti-inflammatory 2-arylpropanoic acids (ibuprofen, naproxen). Under ordinary hydrolysis conditions the configuration is retained, and the text does not raise the racemisation issue.",
      "options": {
        "A": "Correct. The stereocentre is untouched, and because CO2H ranks first exactly as C≡N did, the descriptor is unchanged: (S)-acid from (S)-nitrile.",
        "B": "The R descriptor would mean either that the arrangement in space had inverted or that the priorities had changed. Neither happens: no bond to the stereocentre is broken, and CO2H takes the same top rank that C≡N held.",
        "C": "Racemisation would need the alpha C-H to be removed and replaced, through the enol or enolate of the acid. That is slow under hydrolysis conditions and is not part of the nitrile mechanism, which acts only at the C≡N carbon.",
        "D": "The amide is the intermediate, and its configuration is indeed (S), but the question specifies heating until hydrolysis is complete. Under those conditions the amide is hydrolysed further, to the acid and ammonium ion."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q35_nitrile_lialh4_scheme",
    "topic": "Chemistry of Nitriles",
    "difficulty_level": "Easy",
    "question_text": "What is the product when 2-methylpropanenitrile is treated with LiAlH4 in ether and then with water?",
    "reaction_scheme": {
      "reactants": [
        "CC(C)C#N"
      ],
      "reagents": "1. LiAlH4, ether; 2. H2O",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A carbon bearing two methyl groups and a carbon triple-bonded to nitrogen: 2-methylpropanenitrile."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-Methylpropan-1-amine",
        "smiles": "CC(C)CN",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Methylpropanal",
        "smiles": "CC(C)C=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Methylpropanamide",
        "smiles": "CC(C)C(=O)N",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propan-2-amine",
        "smiles": "CC(C)N",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hydride adds to a nitrile the way it adds to a carbonyl, but the nitrile has two pi bonds and hydride uses both. The first addition gives an imine anion, RCH=N-, still containing a C=N that a second hydride can attack; the resulting dianion, RCH2N(2-), is stabilised by complexation to aluminium, which is what makes the second, otherwise difficult, addition possible. Water then protonates the nitrogen twice. The carbon count is unchanged, the nitrogen is kept, and the nitrile carbon has become a CH2 bonded to NH2: a primary amine.",
      "approach": "Step 1: Hydride from AlH4- adds to the nitrile carbon; one pi bond breaks: (CH3)2CH-CH=N- (as an aluminium complex).\nStep 2: A second hydride adds to the remaining C=N: (CH3)2CH-CH2-N(2-), the dianion, complexed to aluminium.\nStep 3: Aqueous work-up protonates the nitrogen twice: (CH3)2CH-CH2-NH2.\nStep 4: Name it: 2-methylpropan-1-amine (isobutylamine). Four carbons in, four carbons out; the nitrogen stays.",
      "note": "McMurry 20.7 (Chemistry of Nitriles) describes the reduction as two successive nucleophilic additions of hydride, through an imine anion to a dianion, both stabilised by Lewis acid-base complexation to an aluminium species, and gives the sequence of SN2 displacement by cyanide followed by LiAlH4 reduction as a route from an alkyl halide to a primary amine with one more carbon (Ch 24 returns to it). The aldehyde in option B is what a single hydride delivered by DIBAH at low temperature gives after hydrolysis of the imine, a reagent the text uses on esters (19.2) but not, in this edition, on nitriles.",
      "options": {
        "A": "Correct. Two hydrides add to the C≡N, the dianion is protonated on work-up, and the nitrile carbon becomes the CH2NH2 of a primary amine.",
        "B": "2-Methylpropanal would result if only one hydride added and the imine anion were then hydrolysed, which is what the bulky, less reactive DIBAH achieves at low temperature. LiAlH4 adds a second hydride before any water is present, so the C=N never survives to be hydrolysed.",
        "C": "2-Methylpropanamide is a hydrolysis product, the nitrile plus one water, formed with aqueous acid or base. LiAlH4 is a reducing agent working in dry ether; it adds hydrogen, not oxygen.",
        "D": "Propan-2-amine has lost a carbon. LiAlH4 does not break carbon-carbon bonds; the nitrile carbon is retained as the CH2 that carries the nitrogen, so the amine has all four carbons of the nitrile."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q36_grignard_nitrile_ketone_pair",
    "topic": "Chemistry of Nitriles",
    "difficulty_level": "Medium",
    "question_text": "Which nitrile and Grignard reagent, combined and then hydrolysed with aqueous acid, give 2-methylpentan-3-one, (CH3)2CHCOCH2CH3?",
    "options": [
      {
        "option_id": "A",
        "text": "Propanenitrile and isopropylmagnesium bromide",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propanenitrile and propylmagnesium bromide",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Methylpropanenitrile and methylmagnesium bromide",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Butanenitrile and isopropylmagnesium bromide",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Grignard reagent adds once to a nitrile to give an imine anion, and aqueous acid hydrolyses that imine to a ketone, the reverse of imine formation. The nitrile carbon becomes the carbonyl carbon, so the two groups on the product ketone are exactly the group that was on the nitrile and the group brought by the Grignard reagent. Working backwards, cut the target ketone at either C-C bond to its carbonyl: one piece plus C≡N is the nitrile, the other plus MgBr is the Grignard reagent. Two disconnections, two valid pairs; only the pairs that reassemble to the right skeleton count.",
      "approach": "Step 1: Locate the carbonyl carbon of 2-methylpentan-3-one and the two groups on it: isopropyl, (CH3)2CH-, and ethyl, CH3CH2-.\nStep 2: Disconnection 1: the isopropyl comes from the Grignard, so the nitrile carries the ethyl: propanenitrile, CH3CH2C≡N, + (CH3)2CHMgBr.\nStep 3: Disconnection 2 (not offered): 2-methylpropanenitrile + CH3CH2MgBr.\nStep 4: Check the distractors by reassembly: propanenitrile + propyl-MgBr gives hexan-3-one; 2-methylpropanenitrile + CH3MgBr gives 3-methylbutan-2-one; butanenitrile + isopropyl-MgBr gives 2-methylhexan-3-one. Only option A gives the target.",
      "note": "McMurry 20.7 (Chemistry of Nitriles) works this exact target in its worked example and shows both disconnections; the mechanism, addition to give an imine anion followed by hydrolysis by the reverse of Figure 19.7, is stated there. The section contrasts the Grignard case with LiAlH4 reduction: a carbanion adds once, giving an imine anion that is hydrolysed to a ketone, whereas hydride adds twice and gives an amine. Problem 20-13 asks for two more ketones by the same analysis.",
      "options": {
        "A": "Correct. Propanenitrile supplies the ethyl side and the C≡N carbon; isopropylmagnesium bromide supplies the other side; hydrolysis of the imine gives 2-methylpentan-3-one.",
        "B": "Propanenitrile with a propyl (not isopropyl) Grignard reagent gives hexan-3-one, CH3CH2COCH2CH2CH3, an unbranched isomer of the target.",
        "C": "2-Methylpropanenitrile does carry the isopropyl group, but methylmagnesium bromide adds only one carbon, giving 3-methylbutan-2-one, (CH3)2CHCOCH3, one carbon short. The partner it needs is ethylmagnesium bromide.",
        "D": "Butanenitrile carries a propyl group, so with isopropylmagnesium bromide the product is 2-methylhexan-3-one, one carbon too many on the unbranched side."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q37_roadmap_benzyl_cyanide_hub",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following synthetic pathway from benzyl bromide. Compound B is converted into C, into D and into E by three different reagent sets. Determine the correct compounds matching labels B, C, D and E.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "BrCc1ccccc1",
          "label": "Compound A",
          "alt": "A benzene ring bearing a CH2Br group: benzyl bromide, drawn as compound A.",
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
          "x": 2,
          "y": 2
        },
        {
          "id": "E",
          "smiles": "",
          "label": "Compound E",
          "x": 2,
          "y": 3
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "NaCN, DMSO"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H3O+, heat"
        },
        {
          "from": "B",
          "to": "D",
          "reagents": "1. CH3CH2MgBr, ether; 2. H3O+"
        },
        {
          "from": "B",
          "to": "E",
          "reagents": "1. LiAlH4, ether; 2. H2O"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "B: benzyl cyanide (phenylacetonitrile), C: phenylacetic acid, D: 1-phenylbutan-2-one, E: 2-phenylethan-1-amine",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "B: benzyl cyanide, C: phenylacetamide, D: 1-phenylbutan-2-one, E: 2-phenylethan-1-amine",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "B: benzyl cyanide, C: phenylacetic acid, D: 1-phenylbutan-2-ol, E: 2-phenylethan-1-amine",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "B: benzyl cyanide, C: phenylacetic acid, D: 1-phenylbutan-2-one, E: 2-phenylethan-1-ol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A nitrile is a branching point in synthesis because three different nucleophiles take it to three different functional groups, all at the former nitrile carbon. Water, with acid and heat, adds twice (through the amide) and gives a carboxylic acid. A Grignard reagent adds once to give an imine anion, which hydrolysis converts to a ketone carrying the Grignard's alkyl group. Hydride from LiAlH4 adds twice and gives a primary amine. The nitrogen is kept only in the amine, and the carbon count of the nitrile is kept in all three.",
      "approach": "Step 1: A + NaCN: SN2 at the benzylic CH2 gives B, benzyl cyanide, PhCH2C≡N, eight carbons.\nStep 2: B + H3O+, heat: hydrolysis through phenylacetamide to C, phenylacetic acid, PhCH2CO2H, plus NH4+.\nStep 3: B + CH3CH2MgBr, then H3O+: the ethyl group adds once to the nitrile carbon; the imine anion is hydrolysed to D, 1-phenylbutan-2-one, PhCH2COCH2CH3, ten carbons.\nStep 4: B + LiAlH4, then water: two hydrides reduce the C≡N to CH2NH2: E, 2-phenylethan-1-amine, PhCH2CH2NH2.",
      "note": "McMurry 20.7 (Chemistry of Nitriles), Figure 20.4, collects these reactions of a nitrile: hydrolysis to the acid, reduction to the amine, and Grignard addition to the ketone. Problem 20-14 asks for 1-phenyl-2-butanone from benzyl bromide, which is branch D; the worked example in 20.5 makes phenylacetic acid by branch C. The roadmap shows each product beside the reagent that reached it and draws no arrows, so read the question: C, D and E all come from B, not from one another.",
      "options": {
        "A": "Correct. Cyanide displacement to benzyl cyanide, then hydrolysis to the acid, Grignard addition and hydrolysis to the ethyl ketone, and LiAlH4 reduction to the primary amine.",
        "B": "Phenylacetamide is the intermediate of the hydrolysis branch, isolable only under mild conditions. With heat and aqueous acid the amide is hydrolysed on to phenylacetic acid, which is what C must be.",
        "C": "1-Phenylbutan-2-ol would need the ketone to be reduced after it formed. The Grignard adds once to the nitrile and the aqueous work-up hydrolyses the imine anion to the ketone; no hydride is present to reduce it further.",
        "D": "2-Phenylethan-1-ol would require the nitrile's nitrogen to be replaced by oxygen and the carbon reduced, which is the acid branch followed by a LiAlH4 reduction of the acid. LiAlH4 acting on the nitrile directly reduces the C≡N to CH2NH2 and keeps the nitrogen."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q38_grignard_nitrile_intermediate",
    "topic": "Chemistry of Nitriles",
    "difficulty_level": "Medium",
    "question_text": "Methylmagnesium bromide is added to benzonitrile in dry ether. Before any water is added, what species is present in the flask?",
    "options": [
      {
        "option_id": "A",
        "text": "An imine anion, PhC(CH3)=N- MgBr+: the methyl has added once and the nitrogen carries the negative charge",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A tetrahedral adduct in which the former nitrile carbon is sp3, bonded to the methyl and the nitrogen, with the negative charge on carbon",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetophenone, PhCOCH3, formed directly by displacement of the nitrogen",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A dianion, PhC(CH3)2N(2-), after a second methyl has added, as in the LiAlH4 reduction",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Nucleophilic addition to a nitrile breaks one of its two pi bonds and puts the electron pair on nitrogen. The carbon goes from sp to sp2 and the product is an imine anion, RC(Nu)=N-, held as its magnesium salt. Whether a second addition follows depends on the nucleophile. A carbanion does not add again: the imine anion is already negatively charged and its C=N is a poor electrophile for a bulky carbon nucleophile, so the reaction stops after one addition. Hydride from LiAlH4, small and delivered from an aluminium complex that stabilises the dianion, does add twice. Nothing is hydrolysed until water is added.",
      "approach": "Step 1: The methyl carbanion of CH3MgBr attacks the electrophilic nitrile carbon of PhC≡N.\nStep 2: One pi bond breaks toward nitrogen: PhC(CH3)=N- with MgBr+ as counter-ion, the imine anion (an N-magnesio imine).\nStep 3: No further addition: a second methyl would have to attack an anion, and Grignard reagents do not.\nStep 4: The imine anion sits in the flask until aqueous acid is added; only then is it protonated to the imine PhC(CH3)=NH and hydrolysed, by the reverse of imine formation, to acetophenone and NH4+.",
      "note": "McMurry 20.7 (Chemistry of Nitriles) states that Grignard reagents add to a nitrile to give an intermediate imine anion that is hydrolysed by addition of water to yield a ketone, and contrasts this single addition with the double addition of hydride in the LiAlH4 reduction, where complexation to aluminium makes the second, otherwise difficult, addition possible. The hydrolysis of the imine is the exact reverse of imine formation (Figure 19.7). Because the ketone appears only after work-up, a second Grignard equivalent in the flask does not convert it to a tertiary alcohol, which is why nitriles, unlike esters, are clean ketone precursors.",
      "options": {
        "A": "Correct. One addition of methyl to the nitrile carbon gives the sp2 imine anion as its magnesium salt; the ketone does not exist until water is added.",
        "B": "Addition to a nitrile breaks only one pi bond, so the carbon is left sp2 with a C=N double bond, not tetrahedral. The negative charge goes to nitrogen, the more electronegative atom, not to carbon.",
        "C": "The ketone cannot form in dry ether: turning the imine anion into a C=O requires water to add to the C=N and expel the nitrogen as ammonia. Displacement of nitrogen by the Grignard is not a mechanism available to a nitrile.",
        "D": "A second addition of a carbanion to the imine anion does not occur; the anion is a poor electrophile and Grignard reagents have no aluminium-type complexation to force it. Only hydride from LiAlH4 adds twice, and even then with the help of that complexation."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q39_cyanogenic_glycoside",
    "topic": "Chemistry of Nitriles",
    "difficulty_level": "Medium",
    "question_text": "Cyanogenic glycosides such as lotaustralin, from cassava, contain a sugar acetal whose oxygen is bonded to a carbon that also carries a nitrile group (sugar-O-C(R)(R')-C≡N). Why does damaging the plant tissue release hydrogen cyanide?",
    "options": [
      {
        "option_id": "A",
        "text": "Hydrolysis cleaves the acetal to give a cyanohydrin, HO-C(R)(R')-C≡N, and a cyanohydrin dissociates to a ketone and HCN, the reverse of cyanohydrin formation",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The nitrile is hydrolysed to a carboxylic acid, releasing HCN as the by-product",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The nitrile is reduced by plant enzymes to an amine, which fragments to HCN",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acid cleaves the C-C bond between the nitrile carbon and the acetal carbon directly, without any intermediate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A cyanohydrin is the adduct of a carbonyl compound and HCN, and the addition is reversible: base or the enzymes of a plant cell can push a cyanohydrin back to the ketone and cyanide. Plants store this dangerous compound safely by capping the cyanohydrin OH as an acetal with a sugar; the acetal is stable in the intact plant. Damage to the tissue brings the glycoside together with hydrolytic enzymes, the acetal is cleaved to the free cyanohydrin, and the cyanohydrin then falls apart. The nitrile group itself is not hydrolysed; it is lost intact as HCN.",
      "approach": "Step 1: Identify the two functional groups: an acetal carbon (bonded to two oxygens, one of them the sugar's) and a nitrile on the same carbon, so the acetal carbon is a masked cyanohydrin carbon.\nStep 2: Hydrolysis (enzymatic in the plant, or aqueous acid) cleaves the acetal, releasing the sugar and the free cyanohydrin HO-C(R)(R')-C≡N.\nStep 3: The cyanohydrin dissociates: the O-H proton is lost, the alkoxide reforms the C=O, and cyanide is expelled, then protonated to HCN.\nStep 4: For lotaustralin the ketone released is butan-2-one; for its relative linamarin it is acetone. The HCN is the toxin.",
      "note": "McMurry 20.7 (Chemistry of Nitriles) introduces nitriles in nature with this example: cyanogenic glycosides contain a sugar with an acetal carbon, one oxygen of which is bonded to a nitrile-bearing carbon; hydrolysis cleaves the acetal (19.10), generating a cyanohydrin (19.6) that releases hydrogen cyanide. The text suggests the compounds protect the plant by poisoning whatever eats it. Cassava is made safe by grating, soaking and cooking, which lets the enzymes finish the release before the food is eaten; the chemistry is the same reversibility of cyanohydrin formation that Ch 19 taught.",
      "options": {
        "A": "Correct. Acetal cleavage unmasks a cyanohydrin, and cyanohydrin formation is reversible, so the ketone and HCN are released.",
        "B": "Hydrolysis of a nitrile gives a carboxylic acid and ammonia, not HCN: the nitrile carbon stays bonded to the rest of the molecule and becomes the carboxyl carbon. HCN is released only when the whole C≡N unit leaves as cyanide, which is what a cyanohydrin does.",
        "C": "Reduction of a nitrile gives a primary amine, RCH2NH2, in which the nitrogen is still bonded to carbon; there is no path from an amine to HCN. The plant's conditions are hydrolytic, not reducing.",
        "D": "There is no direct acid-catalysed C-C cleavage. The bond breaks in two stages: the acetal is hydrolysed first, and only the free cyanohydrin, with its O-H available to reform the carbonyl, expels cyanide."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q40_ir_acid_vs_hydroxyketone",
    "topic": "Spectroscopy of Carboxylic Acids and Nitriles",
    "difficulty_level": "Medium",
    "question_text": "Cyclopentanecarboxylic acid and 4-hydroxycyclohexanone are both C6H10O2, and each has an O-H and a C=O group. How does IR spectroscopy tell them apart?",
    "options": [
      {
        "option_id": "A",
        "text": "The acid shows a very broad O-H band spanning about 2500-3300 cm-1 that runs into the C-H stretches; the hydroxy ketone shows a narrower O-H band near 3300-3600 cm-1 with clear C-H stretches below 3000",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Only the acid shows a carbonyl band; the C=O of the hydroxy ketone is hydrogen-bonded to the OH and does not absorb",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The acid's C=O appears near 1760 cm-1 and the ketone's near 1710 cm-1, so the ketone absorbs at the lower frequency",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The acid's O-H is sharp and appears near 3600 cm-1, because the carboxyl O-H is not hydrogen-bonded, while the alcohol O-H is broad",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Both compounds have an O-H stretch and a C=O stretch, so the question is where and how broad. A carboxylic acid O-H is unlike any other: because the acid exists as a hydrogen-bonded dimer, the O-H stretch spreads over 2500-3300 cm-1, so broad that it swallows the C-H stretches near 2900 and looks like a rising baseline rather than a peak. An alcohol O-H, also hydrogen-bonded, is broad but confined to 3300-3600 and leaves the C-H region clear. The carbonyl positions are close (acid dimer about 1710, cyclohexanone about 1715) and cannot be relied on to separate the two.",
      "approach": "Step 1: List what each spectrum must contain: O-H stretch, C=O stretch, sp3 C-H stretches.\nStep 2: Cyclopentanecarboxylic acid: dimeric acid O-H, an extremely broad band from about 2500 to 3300 cm-1 with the C-H stretches riding on top; C=O near 1710.\nStep 3: 4-Hydroxycyclohexanone: alcohol O-H, a broad but bounded band centred near 3350 and not extending below about 3200; C-H stretches distinct at 2850-2950; ketone C=O near 1715.\nStep 4: The diagnostic difference is the O-H region: a band that stretches down toward 2500 and buries the C-H stretches means a carboxylic acid.",
      "note": "McMurry 20.8 (Spectroscopy of Carboxylic Acids and Nitriles) gives the acid O-H as a very broad absorption over 2500-3300 cm-1 and the dimeric C=O near 1710 (free monomer 1760, conjugation lowers it by 20-30), with the butanoic acid spectrum in Figure 20.6 showing both; Problem 20-15 poses this pair. Alcohol O-H at 3300-3600 is McMurry 17.11. The two carbonyls are too close to separate the isomers, and a six-membered ring ketone at 1715 sits where the acid dimer does; the O-H region decides.",
      "options": {
        "A": "Correct. The dimeric acid O-H is the broadest band in organic IR and overlaps the C-H stretches; the alcohol O-H stays above 3200 and leaves them clear.",
        "B": "Both compounds have a C=O and both absorb near 1710-1715 cm-1. Hydrogen bonding to a carbonyl shifts its stretch by a few tens of wavenumbers; it never removes the band.",
        "C": "1760 cm-1 is the position of a free, non-hydrogen-bonded acid monomer, which is rare in ordinary samples. The dimeric acid absorbs near 1710, essentially where the cyclohexanone C=O (1715) does, so the carbonyl positions do not distinguish these two.",
        "D": "The description is reversed. It is the acid O-H that is broad, because of the strong hydrogen bonding in the dimer, and it is broad down to 2500; a sharp O-H near 3600 is seen only for a dilute, non-hydrogen-bonded alcohol."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q41_nmr_acid_vs_hydroxyketone",
    "topic": "Spectroscopy of Carboxylic Acids and Nitriles",
    "difficulty_level": "Medium",
    "question_text": "How do 1H and 13C NMR distinguish cyclopentanecarboxylic acid from 4-hydroxycyclohexanone (both C6H10O2)?",
    "options": [
      {
        "option_id": "A",
        "text": "The acid shows a 1H singlet near 12 δ that disappears on shaking with D2O and a 13C peak near 180 δ; the hydroxy ketone shows a 13C peak above 200 δ, a carbinol carbon near 70 δ and no proton beyond 5 δ",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Only the acid shows an exchangeable proton; the alcohol O-H of the hydroxy ketone does not exchange with D2O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The acid's carbonyl carbon appears above 200 δ and the ketone's near 180 δ, because acids are more oxidised",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The two compounds give identical 13C spectra and differ only in the 1H spectrum",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two carbon signals and one proton signal settle this pair. A carboxyl carbon absorbs at 165-185 δ in the 13C spectrum, a ketone carbonyl at 190-215 δ, so the carbonyl region alone separates them. A carbon bearing an OH (a carbinol carbon) absorbs near 60-80 δ and appears only in the hydroxy ketone; the acid's ring carbons are all below 50 δ. In the 1H spectrum, the acid's CO2H proton is a singlet far downfield, near 12 δ, that exchanges with D2O; the alcohol's O-H also exchanges but sits between 1 and 5 δ, and its CH-O proton is near 4 δ.",
      "approach": "Step 1: 13C carbonyl region. Cyclopentanecarboxylic acid: about 183 δ (a saturated aliphatic acid, near the downfield end of 165-185). 4-Hydroxycyclohexanone: about 210 δ, a saturated ketone.\nStep 2: 13C carbinol region. Only the hydroxy ketone has a C-O carbon, near 68 δ. The acid has none: its ring carbons are 25-45 δ.\nStep 3: 1H. The acid's CO2H proton: singlet near 12 δ, removed by a D2O shake. The hydroxy ketone's O-H: broad, 1-5 δ, also exchangeable, and its CH-OH proton is a multiplet near 4 δ.\nStep 4: Either a 12 δ singlet or a 180 δ carbon identifies the acid; a carbon above 200 δ or one near 70 δ identifies the hydroxy ketone.",
      "note": "McMurry 20.8 (Spectroscopy of Carboxylic Acids and Nitriles) gives the carboxyl carbon range as 165-185 δ, saturated aliphatic acids near the downfield end, and the CO2H proton as a singlet near 12 δ that is concentration dependent, sometimes too broad to see, and exchangeable with D2O; Figure 20.7 shows phenylacetic acid with the CO2H at 12.0 δ. Problem 20-16 poses this pair. The ketone and carbinol shifts are McMurry 19.14 and 17.11. The exchangeability of the O-H is shared by alcohols and acids, so it is the shift, not the exchange, that separates them.",
      "options": {
        "A": "Correct. A 12 δ exchangeable singlet and a 180 δ carbon are the acid; a carbon above 200 δ and a 70 δ carbinol carbon are the hydroxy ketone.",
        "B": "Alcohol O-H protons exchange with D2O just as readily as carboxyl protons do (17.11). Exchange shows that a proton is on oxygen; it is the chemical shift, 12 δ against 1-5 δ, that tells the acid from the alcohol.",
        "C": "The order is reversed. Ketone carbonyls are the most downfield carbons in ordinary 13C spectra, 190-215 δ; acids, esters and amides, in which the carbonyl carbon carries an electron-donating oxygen or nitrogen, absorb upfield of them at 165-185 δ. More oxidised does not mean more downfield.",
        "D": "The 13C spectra differ in two places at once: the carbonyl carbon (about 180 versus about 210 δ) and the presence of a carbinol carbon near 70 δ only in the hydroxy ketone. The carbon spectrum alone is enough to tell them apart."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q42_nitrile_ir_identification",
    "topic": "Spectroscopy of Carboxylic Acids and Nitriles",
    "difficulty_level": "Easy",
    "question_text": "An unknown shows a strong, sharp IR absorption at 2250 cm-1, only weak sp3 C-H stretches just below 3000 cm-1, nothing above 3000 cm-1, and nothing between 1650 and 1800 cm-1. Which compound fits?",
    "options": [
      {
        "option_id": "A",
        "text": "Pentanenitrile",
        "smiles": "CCCCC#N",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Pent-1-yne",
        "smiles": "CCCC#C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Pentanoic acid",
        "smiles": "CCCCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Pentanamide",
        "smiles": "CCCCC(=O)N",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The 2100-2300 cm-1 region is nearly empty in organic IR spectra, which is what makes it useful: only triple bonds absorb there. A nitrile gives an intense, sharp band near 2250 (2230 if conjugated); a terminal alkyne gives a much weaker C≡C stretch near 2100-2140, and betrays itself with a sharp ≡C-H stretch at 3300. The rest of the spectrum then confirms: no O-H (nothing broad between 2500 and 3600), no N-H (no pair of bands at 3300-3400), no C=O (nothing at 1650-1800) leaves a nitrile as the only group that fits.",
      "approach": "Step 1: 2250 cm-1, strong and sharp: a C≡N stretch. A C≡C would be weak and lower, near 2120.\nStep 2: Nothing above 3000: no O-H, no N-H, no ≡C-H, no aromatic or vinylic C-H.\nStep 3: Nothing at 1650-1800: no carbonyl of any kind.\nStep 4: A saturated nitrile with no other functional group: pentanenitrile, CH3CH2CH2CH2C≡N.",
      "note": "McMurry 20.8 (Spectroscopy of Carboxylic Acids and Nitriles) gives the nitrile stretch as intense and easily recognisable near 2250 cm-1 for saturated nitriles and 2230 for aromatic or conjugated ones, and adds that few other functional groups absorb in this region, so IR is highly diagnostic for nitriles. The alkyne values (C≡C 2100-2260, weak; ≡C-H 3300) are McMurry 12.8, the amide N-H and C=O positions McMurry 21.10.",
      "options": {
        "A": "Correct. Strong, sharp 2250 with no O-H, N-H or C=O bands is a saturated nitrile and nothing else.",
        "B": "Pent-1-yne has a C≡C stretch, but it is weak and near 2120 cm-1, and the terminal ≡C-H gives a sharp, strong band at 3300, which the unknown lacks.",
        "C": "Pentanoic acid would show the broadest band in the spectrum, the dimeric O-H from 2500 to 3300, and a strong C=O near 1710. The unknown has neither; and an acid has no triple bond to absorb at 2250.",
        "D": "Pentanamide shows two N-H stretches near 3350 and 3180 and a strong amide C=O near 1660. It has no triple bond; dehydrating it with SOCl2 would give the nitrile that does fit."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q43_d2o_exchange_phenylacetic",
    "topic": "Spectroscopy of Carboxylic Acids and Nitriles",
    "difficulty_level": "Easy",
    "question_text": "The 1H NMR spectrum of phenylacetic acid, PhCH2CO2H, shows signals at 12.0 δ (1H, singlet), 7.3 δ (5H, multiplet) and 3.6 δ (2H, singlet). A drop of D2O is added to the sample tube and the spectrum is re-run. What changes?",
    "options": [
      {
        "option_id": "A",
        "text": "The singlet at 12.0 δ disappears; the other signals are unchanged",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The singlet at 3.6 δ disappears, because the CH2 protons next to the carbonyl are acidic enough to exchange",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "All three signals broaden and shift, because D2O changes the solvent polarity",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Nothing changes; D2O exchanges only with O-H protons of alcohols, not with the more strongly bonded O-H of an acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Protons on oxygen and nitrogen are in rapid chemical exchange with any water present. Add D2O and the exchange replaces them with deuterium, which does not appear in the 1H spectrum, so the O-H signal vanishes while every C-H signal stays. The carboxyl proton of an acid is the most acidic O-H in ordinary organic compounds and exchanges fastest of all. Protons on carbon, even the alpha protons next to a carbonyl (pKa about 25), do not exchange on this timescale without a base to remove them; the D2O shake removes only the heteroatom protons.",
      "approach": "Step 1: Assign the signals: 12.0 δ (1H, singlet) is the CO2H proton; 7.3 δ (5H) is the monosubstituted benzene ring; 3.6 δ (2H, singlet) is the CH2 between the ring and the carbonyl, a singlet because it has no neighbouring protons.\nStep 2: Identify the exchangeable proton: only the CO2H hydrogen is on oxygen.\nStep 3: D2O exchanges it for deuterium: RCO2H + D2O gives RCO2D + HOD. The 12.0 δ singlet disappears (a small HOD peak near 4.7 δ may appear).\nStep 4: The C-H signals at 7.3 and 3.6 δ are unaffected: their protons are not exchangeable under these conditions.",
      "note": "McMurry 20.8 (Spectroscopy of Carboxylic Acids and Nitriles) states that the CO2H proton can be replaced by deuterium when D2O is added to the sample tube, causing its absorption to disappear, as for alcohols in 17.11, and shows this exact spectrum of phenylacetic acid in Figure 20.7 with the CO2H at 12.0 δ. The text also warns that the carboxyl proton's shift is concentration and solvent dependent and is sometimes broadened to the point of being nearly undetectable, so an acid whose 12 δ signal is missing is not proof there is no acid; the D2O shake is the deliberate version of that disappearance.",
      "options": {
        "A": "Correct. The carboxyl O-H proton exchanges with deuterium and its signal vanishes; the ring and CH2 protons are on carbon and remain.",
        "B": "The CH2 protons are alpha to a carbonyl and are weakly acidic (pKa about 25), but exchanging them needs a base to form the enolate; neutral D2O in an NMR tube does not do it. The 3.6 δ singlet stays.",
        "C": "A drop of D2O in an organic solvent does not appreciably change the spectrum of the carbon-bound protons. The only large effect of the shake is the specific removal of exchangeable O-H and N-H signals, which is why it is done.",
        "D": "The carboxylic acid proton is the most readily exchanged of all: it is far more acidic than an alcohol O-H, and hydrogen bonding makes it more, not less, available to exchange. It disappears fastest."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q44_benzonitrile_grignard_scheme",
    "topic": "Chemistry of Nitriles",
    "difficulty_level": "Medium",
    "question_text": "Benzonitrile is treated with methylmagnesium bromide in ether and the mixture is then poured into aqueous acid. What is the organic product?",
    "reaction_scheme": {
      "reactants": [
        "N#Cc1ccccc1",
        "C[Mg]Br"
      ],
      "reagents": "1. ether; 2. H3O+",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring bearing a carbon triple-bonded to nitrogen: benzonitrile.",
        "A methyl group bonded to a magnesium atom that also carries a bromine: methylmagnesium bromide."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Acetophenone",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Phenylethan-1-amine",
        "smiles": "CC(N)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Phenylpropan-2-ol",
        "smiles": "CC(C)(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Phenylethan-1-imine",
        "smiles": "CC(=N)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A nitrile behaves toward a Grignard reagent as a carbonyl does, but with one difference that makes it more useful: the reaction stops after one addition. The carbanion adds to the nitrile carbon to give an imine anion, which does not react with a second equivalent of the Grignard reagent, and that anion sits unchanged until water is added. Aqueous acid then protonates it to an imine and hydrolyses the imine, by the reverse of imine formation, to a ketone and ammonium ion. The nitrile carbon becomes the carbonyl carbon and the Grignard's alkyl group becomes the other substituent.",
      "approach": "Step 1: CH3MgBr adds to the nitrile carbon of PhC≡N: PhC(CH3)=N- MgBr+, the imine anion.\nStep 2: No second addition occurs; the anion is inert to more Grignard reagent.\nStep 3: Aqueous acid protonates the nitrogen to give the imine PhC(CH3)=NH, then water adds to the C=N and ammonia is lost as NH4+.\nStep 4: The product is the ketone PhC(=O)CH3, acetophenone, with the former nitrile carbon as its carbonyl.",
      "note": "McMurry 20.7 (Chemistry of Nitriles) describes the reaction as addition to give an intermediate imine anion that is hydrolysed by addition of water to yield a ketone, the hydrolysis being the exact reverse of imine formation (Figure 19.7), and contrasts the single addition of a carbanion with the double addition of hydride in the LiAlH4 case. An ester would take two equivalents of CH3MgBr and give the tertiary alcohol in option C; the nitrile route is how a single alkyl group is added to make a ketone.",
      "options": {
        "A": "Correct. One methyl adds to the nitrile carbon, and hydrolysis of the resulting imine gives acetophenone.",
        "B": "1-Phenylethan-1-amine would need the C=N of the imine to be reduced rather than hydrolysed. There is no hydride in this reaction; aqueous acid hydrolyses the imine to the ketone and releases the nitrogen as ammonium ion.",
        "C": "2-Phenylpropan-2-ol is the product of two methyl additions, which is what CH3MgBr does with an ester such as methyl benzoate. A nitrile accepts only one carbanion, because the imine anion formed is inert to further Grignard attack, and no ketone is present until the water is added.",
        "D": "The imine is the intermediate that exists briefly after protonation of the imine anion, but under aqueous acid it does not survive: water adds to the C=N and ammonia leaves, giving the ketone. Isolating the imine would need an anhydrous work-up."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q45_elucidation_isobutyric_acid",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound V is a liquid (bp 155 °C) with a sharp, rancid odour. It dissolves in aqueous NaHCO3 with vigorous effervescence and gives no precipitate with 2,4-dinitrophenylhydrazine. Combustion analysis gives C 54.5% and H 9.2% by mass. IR: a very broad band from 2500 to $3300\\text{ cm}^{-1}$ overlapping the C-H stretches, and a strong band at $1710\\text{ cm}^{-1}$. $^1\\text{H}$ NMR: 12.0 (singlet, 1H), 2.58 (septet, 1H), 1.20 (doublet, 6H). The mass spectrum is shown. Which structure is V?",
    "question_smiles": "",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 27,
          "y": 25
        },
        {
          "x": 41,
          "y": 40
        },
        {
          "x": 43,
          "y": 100
        },
        {
          "x": 45,
          "y": 20
        },
        {
          "x": 73,
          "y": 55
        },
        {
          "x": 88,
          "y": 15
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-Methylpropanoic acid",
        "smiles": "CC(C)C(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Butanoic acid",
        "smiles": "CCCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Methyl propanoate",
        "smiles": "CCC(=O)OC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-Hydroxybutan-2-one",
        "smiles": "CC(O)C(C)=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The chemical tests come first: effervescence with bicarbonate means an acid stronger than carbonic acid, which among C, H, O compounds means a carboxylic acid, and a negative 2,4-DNP test rules out a free aldehyde or ketone. The IR agrees twice: the very broad 2500-3300 band is the dimeric acid O-H, and 1710 is its C=O. The formula gives one degree of unsaturation, the C=O. The NMR then fixes the skeleton, and the mass spectrum decides between the two possible C4 acids: a straight chain has a gamma hydrogen and undergoes the McLafferty rearrangement to m/z 60, while a branched chain cannot and instead loses its methyl and its carboxyl group.",
      "approach": "Step 1: Formula. Per 100 g: C 54.5/12.01 = 4.54, H 9.2/1.008 = 9.13, O by difference 36.3/16.00 = 2.27. Divide by 2.27: C 2, H 4, O 1, so (C2H4O)n; M+ 88 gives C4H8O2. Unsaturation = (2 x 4 + 2 - 8)/2 = 1: the C=O.\nStep 2: Class. NaHCO3 positive, broad 2500-3300, 1710, 12.0 δ singlet: a carboxylic acid. That accounts for the C=O, both oxygens and the degree of unsaturation.\nStep 3: NMR. A 6H doublet at 1.20 and a 1H septet at 2.58 is an isopropyl group whose CH is next to the carbonyl: (CH3)2CH-CO2H.\nStep 4: Mass spectrum. Base peak 43 is the isopropyl cation, (CH3)2CH+, from cleavage of the bond to the carboxyl; 73 is M - 15, loss of a methyl from the branch point; 45 is the CO2H+ fragment. There is no peak at 60: the branched acid has no gamma hydrogen, so no McLafferty rearrangement. V is 2-methylpropanoic acid.",
      "note": "McMurry 20.8 (Spectroscopy of Carboxylic Acids and Nitriles) supplies the IR (very broad O-H over 2500-3300, dimeric C=O near 1710) and NMR (CO2H singlet near 12 δ; carboxyl carbon 165-185 δ) markers but does not treat the mass spectra of acids; the McLafferty rearrangement and alpha cleavage are McMurry 12.3, applied to carbonyl compounds generally. Straight-chain acids with a gamma hydrogen give the McLafferty ion at m/z 60, CH2=C(OH)2+, as their base peak, and its absence here is what excludes butanoic acid. The bicarbonate test is lecture material, not in the text.",
      "options": {
        "A": "Correct. C4H8O2 with one degree of unsaturation, a bicarbonate-positive acid with the broad O-H, an isopropyl group next to the carbonyl (6H doublet, 1H septet), and a mass spectrum with 43 as the base peak and no McLafferty ion at 60.",
        "B": "Butanoic acid has the right formula and class, but its NMR would show a triplet near 2.3, a sextet near 1.65 and a 3H triplet near 0.95 for the propyl chain, and its mass spectrum would have m/z 60 as the base peak from the McLafferty rearrangement, which the straight chain's gamma hydrogens allow.",
        "C": "Methyl propanoate is C4H8O2 and shows a C=O, but at 1740 cm-1, with no broad O-H band; it does not react with bicarbonate, and its NMR has a 3H singlet near 3.7 for the OCH3 and no signal near 12 δ.",
        "D": "3-Hydroxybutan-2-one is C4H8O2 with a ketone and an alcohol: it would give a 2,4-DNP precipitate, show an O-H band above 3200 rather than a band reaching down to 2500, have no 12 δ proton, and not dissolve in bicarbonate. Its NMR would include a CH3 singlet near 2.2 and a CH quartet near 4.3."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch20_q46_elucidation_benzyl_cyanide",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound W is a colourless liquid (bp 234 °C). It does not dissolve in aqueous NaHCO3 or in dilute HCl, and gives no precipitate with 2,4-dinitrophenylhydrazine. Combustion analysis gives C 82.0%, H 6.0% and N 12.0% by mass. IR: a strong, sharp band at $2250\\text{ cm}^{-1}$, weak bands at 3030 and 2920, bands at 1600 and $1495\\text{ cm}^{-1}$, and strong bands at 740 and $700\\text{ cm}^{-1}$; nothing between 1650 and 1800 and nothing above $3100\\text{ cm}^{-1}$. Mass spectrum: $\\text{M}^+$ at $m/z = 117$ (base peak), with peaks at 116 and 90. The $^1\\text{H}$ NMR spectrum is shown. Which structure is W?",
    "question_smiles": "",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 7.35,
          "y": 5,
          "label": "multiplet"
        },
        {
          "x": 3.72,
          "y": 2,
          "label": "singlet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Benzyl cyanide (phenylacetonitrile)",
        "smiles": "N#CCc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-Methylbenzonitrile",
        "smiles": "Cc1ccc(cc1)C#N",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Indole",
        "smiles": "c1ccc2[nH]ccc2c1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Phenylethan-1-amine",
        "smiles": "NCCc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The absence of every common test result is itself the evidence: no bicarbonate reaction (not an acid), no solubility in dilute HCl (not a basic amine), no 2,4-DNP precipitate (no aldehyde or ketone), and no IR bands above 3100 or between 1650 and 1800 (no O-H, N-H or C=O). What remains is the strong, sharp 2250 band, a nitrile, in the one region of the IR spectrum where little else absorbs. The formula's high degree of unsaturation, six, then has to be a benzene ring (four) plus the C≡N (two), and the NMR places the ring and the CH2 relative to each other.",
      "approach": "Step 1: Formula. Per 100 g: C 82.0/12.01 = 6.83, H 6.0/1.008 = 5.95, N 12.0/14.01 = 0.857. Divide by 0.857: C 8, H 7, N 1: C8H7N, M = 117, matching M+. Unsaturation = (2 x 8 + 2 + 1 - 7)/2 = 6.\nStep 2: Class. 2250 strong and sharp: a nitrile, not conjugated to the ring (conjugated would be near 2230). No O-H, N-H or C=O. 1600/1495 and 740/700: a monosubstituted benzene ring. Ring (4) + C≡N (2) = 6, all the unsaturation.\nStep 3: NMR. 7.35 (5H, multiplet): five aromatic protons, one substituent on the ring. 3.72 (2H, singlet): a CH2 with no proton neighbours, deshielded by both the ring and the nitrile. Only PhCH2C≡N fits: a methyl-substituted ring would show a 3H singlet near 2.4 and two 2H doublets.\nStep 4: Mass spectrum. A stable aromatic M+ at 117 as base peak; 116 is loss of H to the conjugated PhCH=C=N+ ion; 90 is loss of HCN. W is benzyl cyanide.",
      "note": "McMurry 20.8 (Spectroscopy of Carboxylic Acids and Nitriles) gives the C≡N stretch as 2250 for saturated and 2230 for conjugated nitriles and notes how few other groups absorb there; the nitrile carbon appears at 115-130 δ in the 13C spectrum, which would confirm the assignment. The text does not discuss mass spectra of nitriles; the intense molecular ion is the general behaviour of aromatic compounds (McMurry 12.3 and 15.7). Benzyl cyanide is the nitrile made from benzyl bromide and NaCN in the worked example of 20.5, and hydrolysing it gives the phenylacetic acid whose NMR is Figure 20.7.",
      "options": {
        "A": "Correct. C8H7N with six degrees of unsaturation, a non-conjugated nitrile at 2250, a monosubstituted ring (5H multiplet, 740/700) and an isolated CH2 singlet at 3.72 between the ring and the C≡N.",
        "B": "4-Methylbenzonitrile is also C8H7N, but its nitrile is conjugated with the ring and absorbs near 2230; its NMR would show a 3H singlet near 2.4 for the aryl methyl and two 2H doublets near 7.3 and 7.5 for the para-disubstituted ring, not a 5H multiplet and a 2H singlet.",
        "C": "Indole is C8H7N as well, with its six degrees of unsaturation in two fused rings and four double bonds, but it has an N-H that gives a sharp band near 3400, no band at 2250, and an NMR with seven aromatic-type protons between 6.5 and 8 δ and no CH2 singlet.",
        "D": "2-Phenylethan-1-amine is C8H11N (M 121) and would dissolve in dilute HCl as its ammonium salt. Its IR shows N-H stretches at 3300-3400 and no 2250 band, and its NMR has two 2H triplets near 2.7 and 2.9 rather than one singlet."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  }
];
