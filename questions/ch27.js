// OChemStudyBuddy - McMurry Chapter 27
// Author: A. Elangovan, PhD
var CH27_QUESTIONS = [
  {
    "question_id": "ch27_q2_saponification_scheme",
    "topic": "Soap",
    "difficulty_level": "Medium",
    "question_text": "Glyceryl tristearate (tristearin) is heated with aqueous sodium hydroxide. What are the products?",
    "reaction_scheme": {
      "reactants": [
        "CCCCCCCCCCCCCCCCCC(=O)OCC(COC(=O)CCCCCCCCCCCCCCCCC)OC(=O)CCCCCCCCCCCCCCCCC"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A three-carbon glycerol backbone with each of its three oxygens joined through an ester carbonyl to a saturated eighteen-carbon chain: glyceryl tristearate."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Glycerol and three equivalents of sodium stearate, CH3(CH2)16CO2- Na+ (a soap)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Glycerol and three equivalents of stearic acid, CH3(CH2)16CO2H",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Glycerol and three equivalents of 1-octadecanol, CH3(CH2)17OH",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Glyceryl distearate and one equivalent of sodium stearate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A fat is a triester, and hot aqueous hydroxide hydrolyses esters by nucleophilic acyl substitution: hydroxide adds to each carbonyl, the alkoxide (here each glycerol oxygen in turn) is expelled, and the carboxylic acid released is at once deprotonated by the excess base. So base hydrolysis, saponification, does not stop at the free acid; it gives the carboxylate salt, and with three ester groups it consumes three equivalents of NaOH to give three sodium stearates plus glycerol. Those long-chain sodium carboxylates are soap, and the reaction has been used to make it for five thousand years.",
      "approach": "Step 1: Count the ester groups: three, one on each glycerol oxygen, each with a C18 acyl chain.\nStep 2: Each is hydrolysed by hydroxide (addition, then loss of the glycerol alkoxide, which is protonated by water).\nStep 3: Each stearic acid formed (pKa about 5) is deprotonated by the basic medium to stearate.\nStep 4: Products: one glycerol, HOCH2CH(OH)CH2OH, and three sodium stearates. Acidifying the mixture afterwards would give stearic acid; heating with excess NaOH does not.",
      "note": "McMurry 27.1 (Waxes, Fats, and Oils) states that hydrolysis of a fat or oil with aqueous NaOH yields glycerol and three fatty acids, and McMurry 27.2 (Soap) that soap is a mixture of the sodium or potassium salts of long-chain fatty acids produced by hydrolysis (saponification) of animal fat with alkali, purified by boiling with water and salting out with NaCl; Problem 27-4 asks for the saponification of glyceryl dioleate monopalmitate. The ester hydrolysis mechanism is McMurry 21.6.",
      "options": {
        "A": "Correct. Three ester hydrolyses by hydroxide give glycerol and three stearic acids, which the base converts at once into sodium stearate, the soap.",
        "B": "Free stearic acid cannot survive in aqueous NaOH; a carboxylic acid is deprotonated by hydroxide. The acid is obtained only after the soap solution is acidified.",
        "C": "1-Octadecanol would require reduction of the ester carbonyl to CH2OH, which needs LiAlH4, not hydroxide. Hydrolysis leaves the acyl carbon at the carboxylic acid oxidation level.",
        "D": "With excess hydroxide and heat all three esters are hydrolysed; partial saponification is not what the conditions give. The stem specifies aqueous NaOH in the usual excess."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q4_lipid_class_drawn",
    "topic": "Phospholipids",
    "difficulty_level": "Medium",
    "question_text": "The lipid shown has a glycerol backbone carrying two fatty acyl esters and a phosphate diester to choline. To which class does it belong?",
    "question_smiles": "CCCCCCCCCCCCCCCC(=O)OC[C@H](COP(=O)([O-])OCC[N+](C)(C)C)OC(=O)CCCCCCC/C=C\\CCCCCCCC",
    "structure_alt": "A three-carbon backbone: one end carbon bears an ester to a saturated sixteen-carbon chain, the middle carbon (a stereocentre) bears an ester to an eighteen-carbon chain with one cis double bond, and the other end carbon bears a phosphate that is also esterified to a two-carbon chain ending in a trimethylammonium group.",
    "options": [
      {
        "option_id": "A",
        "text": "A glycerophospholipid (phosphatidylcholine, lecithin), an amphipathic lipid that forms bilayers",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A sphingomyelin, a phospholipid built on a sphingosine backbone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A triacylglycerol, a neutral storage fat",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A prostaglandin, a C20 signalling lipid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Glycerophospholipids are phosphatidic acid derivatives: a glycerol whose C1 and C2 oxygens carry fatty acyl esters and whose C3 oxygen carries a phosphate, itself esterified to an amino alcohol such as choline, ethanolamine or serine. The drawn molecule has exactly that map, with the usual pattern of a saturated acyl chain at C1 and an unsaturated one at C2, the R configuration at C2 the text describes, and choline on the phosphate: phosphatidylcholine, lecithin. The charged phosphate-choline head and the two hydrocarbon tails make it amphipathic, so it assembles into the bilayers of cell membranes rather than into micelles.",
      "approach": "Step 1: Find the backbone: three carbons in a row, each bearing an oxygen. Glycerol, so not a sphingosine-based lipid.\nStep 2: Count the acyl esters: two (C16 saturated at C1, C18 with one cis double bond at C2), not three, so not a triacylglycerol.\nStep 3: Identify the third substituent: a phosphate diester linking C3 to HOCH2CH2N(CH3)3+, choline. Phosphate plus amino alcohol makes it a phospholipid; on glycerol, a glycerophospholipid.\nStep 4: Name: phosphatidylcholine. No cyclopentane ring, no C20 chain: not an eicosanoid.",
      "note": "McMurry 27.3 (Phospholipids) states that phospholipids are esters of phosphoric acid, that glycerophospholipids are based on phosphatidic acid (a glycerol backbone linked by ester bonds to two fatty acids and one phosphoric acid), that the acyl group at C1 is usually saturated and the one at C2 usually unsaturated, that the phosphate at C3 is bonded to an amino alcohol such as choline, ethanolamine or serine, that the compounds are chiral with an L, or R, configuration at C2, and that phospholipids make up 50 to 60% of cell membranes, organising into a bilayer about 5.0 nm thick (Figure 27.3). Sphingomyelins are the other group, on a sphingosine backbone.",
      "options": {
        "A": "Correct. Glycerol, two acyl esters and a phosphate-choline head is the definition of phosphatidylcholine, a glycerophospholipid.",
        "B": "Sphingomyelins have a sphingosine backbone, a long-chain amino alcohol with an amide-linked fatty acid, not a glycerol with two esters. The drawn backbone is glycerol.",
        "C": "A triacylglycerol has three fatty acyl esters and no phosphate. Here the third glycerol oxygen carries a phosphate diester, which changes the class and the behaviour (bilayers, not fat droplets).",
        "D": "Prostaglandins are C20 acids with a cyclopentane ring and two side chains, derived from arachidonic acid. There is no ring here and the molecule is far larger than C20."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q3_steroid_skeleton",
    "topic": "Steroids",
    "difficulty_level": "Easy",
    "question_text": "Cholesterol is shown. What is the ring skeleton common to all steroids?",
    "question_smiles": "C[C@H](CCCC(C)C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C",
    "structure_alt": "Four fused rings in a row, three six-membered and one five-membered at the end, with two methyl groups at ring junctions, an OH on the first ring, one double bond in the second ring, and an eight-carbon branched chain on the five-membered ring; stereochemistry shown at eight centres.",
    "options": [
      {
        "option_id": "A",
        "text": "A fused tetracyclic system of three six-membered rings and one five-membered ring, lettered A, B, C and D",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Four six-membered rings fused in a row",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A fused tricyclic system of three six-membered rings",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A seventeen-membered macrocycle",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Every steroid, from cholesterol to testosterone, estradiol and cortisol, is built on the same seventeen-carbon tetracyclic frame: three cyclohexane rings (A, B, C) and one cyclopentane ring (D), fused edge to edge and lettered from the lower left. The six-membered rings are chairs locked by their trans fusions so that, unlike simple cyclohexane, they cannot ring-flip, and substituents keep a fixed axial or equatorial identity. Cholesterol adds two angular methyls (C18, C19), a 3-OH, a 5,6 double bond and a C8 side chain to that frame; other steroids vary the substituents but keep the rings.",
      "approach": "Step 1: Count the rings in the drawing: four, all fused.\nStep 2: Count the atoms in each: six, six, six and five.\nStep 3: That combination is the steroid nucleus, perhydrocyclopentanophenanthrene, lettered A, B, C, D.\nStep 4: The angular methyls, the hydroxyl, the ring double bond and the side chain are cholesterol's decorations, not part of the shared skeleton.",
      "note": "McMurry 27.6 (Steroids) states that steroids are derived from the triterpenoid lanosterol and have structures based on a tetracyclic ring system whose four rings are designated A, B, C and D beginning at the lower left, that the three six-membered rings adopt chair conformations but are prevented by their rigid geometry from the usual ring-flips, and that the hydroxyl of cholesterol has the more stable equatorial orientation. McMurry 27.7 shows the skeleton being assembled from squalene in the oxidosqualene cyclisation cascade.",
      "options": {
        "A": "Correct. Three cyclohexanes and one cyclopentane, fused and lettered A to D, is the frame of every steroid.",
        "B": "Ring D is five-membered; count its atoms in the drawing. Four six-membered rings would be a different, non-steroidal skeleton.",
        "C": "The three six-membered rings are there, but so is the five-membered ring D that carries the side chain. Steroids are tetracyclic.",
        "D": "The seventeen carbons of the nucleus are arranged in four fused rings, not one large ring. No macrocycle is present."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q5_stearic_vs_oleic",
    "topic": "Waxes, Fats, and Oils",
    "difficulty_level": "Medium",
    "question_text": "Stearic acid (C18, saturated) melts at 68.8 °C and oleic acid (C18, one cis double bond) at 13.4 °C. Why does the single double bond lower the melting point so much?",
    "options": [
      {
        "option_id": "A",
        "text": "The cis double bond puts a rigid bend in the chain, so the molecules cannot pack as closely in a crystal and the lattice is held together more weakly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Oleic acid has a lower molecular weight, so it has weaker dispersion forces",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The double bond makes oleic acid more polar, which favours the liquid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Saturated chains are more flexible and therefore harder to crystallise",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Melting point tracks how well molecules pack. A saturated chain is a uniform zigzag that lies alongside its neighbours over its whole length, so the dispersion forces add up and the crystal is stable. A cis double bond forces a permanent kink of about 30 degrees into the chain; kinked chains cannot line up, contacts are fewer, and the lattice melts at a far lower temperature. The more cis double bonds, the worse the packing: linoleic acid (two) melts at -12 °C and arachidonic acid (four) at -49.5 °C. A trans double bond leaves the chain nearly straight, which is why elaidic acid (trans-9) melts near 45 °C and why partially hydrogenated oils containing trans fats are solids.",
      "approach": "Step 1: Both acids have eighteen carbons and the same carboxyl head, so the difference is in chain shape, not size or polarity.\nStep 2: Stearic acid's chain is straight (all anti conformations) and packs efficiently.\nStep 3: Oleic acid's cis-9 double bond cannot rotate and bends the chain, disrupting side-by-side packing.\nStep 4: Weaker crystal packing means a lower melting point; the same effect makes oils (more unsaturated) liquid and fats (more saturated) solid.",
      "note": "McMurry 27.1 (Waxes, Fats, and Oils), Table 27.1, gives the melting points (stearic 68.8 °C, oleic 13.4 °C, linoleic -12 °C, linolenic -11 °C, arachidonic -49.5 °C) and explains that saturated fats have a uniform shape that lets them pack efficiently in a crystal lattice, whereas the C=C bonds of unsaturated oils introduce bends and kinks that make crystal formation more difficult, the more double bonds the lower the melting point; vegetable oils therefore melt lower than animal fats (Table 27.2). Elaidic acid's melting point is not in the text.",
      "options": {
        "A": "Correct. The cis kink spoils the side-by-side packing that a straight saturated chain enjoys, so the crystal is weaker and melts lower.",
        "B": "Oleic acid is lighter by only two hydrogens (282 against 284), a negligible difference; and dispersion forces depend on contact area, which the kink reduces far more than the mass does.",
        "C": "A C=C bond is nonpolar and adds no dipole. The double bond matters for its geometry, not its polarity.",
        "D": "It is the saturated chain that packs well; flexibility does not hinder crystallisation because the chain settles into its extended zigzag. The rigid cis kink is what prevents packing."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q1_isoprene_limonene",
    "topic": "Terpenoids",
    "difficulty_level": "Medium",
    "question_text": "Limonene, the citrus terpene shown, is built from how many isoprene (C5) units, and how is it classified?",
    "question_smiles": "CC1=CC[C@@H](CC1)C(=C)C",
    "structure_alt": "A six-membered ring with one ring double bond bearing a methyl group, and on the opposite ring carbon (a stereocentre) an isopropenyl group, C(=CH2)CH3.",
    "options": [
      {
        "option_id": "A",
        "text": "Two units: a monoterpene, C10",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "One unit: a hemiterpene, C5",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Three units: a sesquiterpene, C15",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Four units: a diterpene, C20",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Terpenoids are assembled from five-carbon isopentenyl diphosphate units joined head to tail, so their carbon counts are multiples of five and the class is read from the count: C10 monoterpene (two units), C15 sesquiterpene (three), C20 diterpene (four), C30 triterpene (six), C40 tetraterpene (eight). Limonene has ten carbons, so it is a monoterpene, and the two isoprene units can be traced in the skeleton: one is the ring carbon bearing the methyl with its three neighbours, the other the isopropenyl-bearing carbon with its branch, joined through the ring. Limonene is made in the cell from geranyl diphosphate, the C10 diphosphate formed from one DMAPP and one IPP.",
      "approach": "Step 1: Count carbons: six in the ring, a methyl, and a three-carbon isopropenyl group: ten.\nStep 2: Ten divided by five is two isoprene units.\nStep 3: Trace them: C(CH3)=CH-CH2-CH2 is the head-to-tail run of one unit, and C(CH2)(CH3)-CH-CH2 with the ring carbon the other; the two join head to tail and the ring closes between them.\nStep 4: Two units, C10: a monoterpene. The stereocentre at the ring carbon bearing the isopropenyl group makes limonene chiral; the (R) enantiomer is the orange-peel odour.",
      "note": "McMurry 27.5 (Terpenoids) states that all terpenoids contain a multiple of five carbons and derive from isopentenyl diphosphate, that monoterpenoids contain 10 carbons from two IPP units, sesquiterpenoids 15 from three, diterpenoids 20 from four, up to triterpenoids (C30, lanosterol) and tetraterpenoids (C40, beta-carotene), and that limonene, found in many citrus oils, arises from geranyl diphosphate by the cyclisation of Figure 27.11. The isoprene rule was introduced in the Chapter 8 Chemistry Matters.",
      "options": {
        "A": "Correct. Ten carbons are two isoprene units, and a two-unit terpene is a monoterpene.",
        "B": "A single C5 unit would be a hemiterpene such as isoprene itself. Limonene has ten carbons: the ring alone has six.",
        "C": "Fifteen carbons make a sesquiterpene, such as farnesol. Limonene's ring, methyl and isopropenyl group total ten.",
        "D": "Twenty carbons make a diterpene, such as the phytol of chlorophyll or vitamin A. Limonene is half that size."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q11_isoprene_squalene",
    "topic": "Terpenoids",
    "difficulty_level": "Medium",
    "question_text": "Squalene, the acyclic precursor of the steroids, is shown. How many isoprene units does it contain, and what is its class?",
    "question_smiles": "CC(C)=CCC/C(C)=C/CC/C(C)=C/CC/C=C(C)/CC/C=C(C)/CCC=C(C)C",
    "structure_alt": "A long open chain with six trisubstituted double bonds, each carrying a methyl branch, the chain symmetric about its centre, all double bonds drawn E; no rings and no oxygen.",
    "options": [
      {
        "option_id": "A",
        "text": "Six units: a triterpene, C30",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Four units: a diterpene, C20",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Five units: a sesterterpene, C25",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Eight units: a tetraterpene, C40",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Squalene is the C30 hydrocarbon from which all steroids are made, and its structure shows the terpenoid building plan twice over. Two farnesyl diphosphates (C15, three isoprene units each) are joined tail to tail by a reductive dimerisation, so squalene has a mirror-symmetric chain of thirty carbons with six methyl-bearing double bonds, one per isoprene unit. Thirty carbons is six units, and a six-unit terpene is a triterpene. Oxidation of one terminal double bond to the epoxide and the enzyme-guided cationic cyclisation of that epoxide fold this chain into the four rings of lanosterol.",
      "approach": "Step 1: Count the carbons: a twenty-four-carbon main chain plus six methyl branches, thirty in all; or count six double bonds, each with its methyl, six units of five.\nStep 2: Thirty divided by five is six isoprene units.\nStep 3: Six units is a triterpene (C30), the class of squalene and lanosterol.\nStep 4: The tail-to-tail join in the middle of the chain is where two C15 farnesyl units met; the head-to-tail joins elsewhere are the ordinary terpenoid linkage.",
      "note": "McMurry 27.5 (Terpenoids) gives the classes by carbon count (mono C10, sesqui C15, di C20, tri C30, tetra C40) and states that terpenoids with more than 25 carbons are made by dimerisation of C15 and C20 units, triterpenoids and steroids in particular arising from dimerisation of farnesyl diphosphate to give squalene (Figure 27.9); McMurry 27.7 describes the reductive dimerisation of farnesyl diphosphate to squalene and its conversion to lanosterol through (3S)-2,3-oxidosqualene. Every double bond of natural squalene is E.",
      "options": {
        "A": "Correct. Thirty carbons, six methyl-bearing double bonds, six isoprene units: a triterpene, made from two farnesyl (C15) units.",
        "B": "Twenty carbons would be a diterpene, the size of a single geranylgeranyl unit. Squalene has thirty; count the six methyl branches.",
        "C": "C25 sesterterpenes exist but are rare, and squalene is not one: it is two C15 halves, thirty carbons, symmetric about its middle.",
        "D": "Forty carbons is a tetraterpene, the size of beta-carotene, made from two C20 units. Squalene is two C15 units."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q_dynamic_lipids_melting",
    "topic": "Waxes, Fats, and Oils",
    "difficulty_level": "Medium",
    "question_text": "Match each fatty acid to its melting point. The four values are 68.8 °C, 63.1 °C, 13.4 °C and -12 °C.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCCCCCCCCCCCCCCCCC(=O)O",
        "correctAnswer": "68.8 °C",
        "alt": "A saturated straight chain of eighteen carbons ending in CO2H."
      },
      {
        "smiles": "CCCCCCCCCCCCCCCC(=O)O",
        "correctAnswer": "63.1 °C",
        "alt": "A saturated straight chain of sixteen carbons ending in CO2H."
      },
      {
        "smiles": "CCCCCCCC/C=C\\CCCCCCCC(=O)O",
        "correctAnswer": "13.4 °C",
        "alt": "An eighteen-carbon chain ending in CO2H with one cis double bond in the middle of the chain."
      },
      {
        "smiles": "CCCCC/C=C\\C/C=C\\CCCCCCCC(=O)O",
        "correctAnswer": "-12 °C",
        "alt": "An eighteen-carbon chain ending in CO2H with two cis double bonds separated by a single CH2."
      }
    ],
    "match_options": [
      "68.8 °C",
      "63.1 °C",
      "13.4 °C",
      "-12 °C"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "At least one acid matched to the wrong melting point",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two trends set fatty acid melting points. Among saturated acids, longer chains have more surface for dispersion forces and melt higher: palmitic (C16) 63.1 °C, stearic (C18) 68.8 °C. Among C18 acids, each cis double bond adds a kink that spoils packing and drops the melting point sharply: stearic 68.8 °C, oleic (one cis) 13.4 °C, linoleic (two cis) -12 °C. So the two saturated acids take the two high values in order of length, and the two unsaturated acids take the low values in order of unsaturation.",
      "approach": "Step 1: Sort the drawings into saturated (no double bonds) and unsaturated.\nStep 2: The saturated pair: eighteen carbons melts higher than sixteen, so C18 is 68.8 °C and C16 is 63.1 °C.\nStep 3: The unsaturated pair: one cis double bond (oleic) is 13.4 °C, two (linoleic) is -12 °C.\nStep 4: Check the direction: more unsaturation, lower melting point; more chain, higher. Both hold across the four.",
      "note": "McMurry 27.1 (Waxes, Fats, and Oils), Table 27.1, lists the common fatty acids with their melting points (lauric 43.2, myristic 53.9, palmitic 63.1, stearic 68.8, arachidic 76.5; palmitoleic -0.1, oleic 13.4, linoleic -12, linolenic -11, arachidonic -49.5) and states that unsaturated fatty acids generally have lower melting points than their saturated counterparts because the C=C bonds introduce bends and kinks that make crystal formation more difficult; palmitic and stearic are the most abundant saturated acids and oleic and linoleic the most abundant unsaturated ones.",
      "options": {
        "A": "Correct. Chain length orders the two saturated acids (C18 above C16) and the number of cis double bonds orders the two unsaturated ones (one above two).",
        "B": "At least one value is on the wrong acid. First separate saturated from unsaturated (the saturated pair takes the two high values), then within each pair use length (longer melts higher) or unsaturation (more double bonds melts lower)."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q6_wax_structure",
    "topic": "Waxes, Fats, and Oils",
    "difficulty_level": "Easy",
    "question_text": "Carnauba wax, used in floor polish, contains an ester of a C32 straight-chain alcohol with a C20 straight-chain carboxylic acid. Which description fits a wax in general?",
    "options": [
      {
        "option_id": "A",
        "text": "An ester of a long-chain fatty acid with a long-chain alcohol, one acyl group per molecule",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A triester of glycerol with three long-chain fatty acids",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A long-chain hydrocarbon with no functional group",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A phosphate diester joining a fatty alcohol to an amino alcohol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The lipid classes are told apart by what is esterified to what. A wax is the simplest: one long-chain carboxylic acid (even-numbered, C16 to C36) esterified with one long-chain alcohol (C24 to C36), giving a single ester group flanked by two long hydrocarbon chains. Both chains are saturated and straight, so waxes pack well, melt above room temperature, and repel water, which is why plants and animals use them as protective coatings. A fat is instead three fatty acids on glycerol, and a phospholipid has a phosphate head; neither is a wax.",
      "approach": "Step 1: Identify the alcohol part of carnauba's ester: a C32 straight-chain alcohol, CH3(CH2)31OH.\nStep 2: Identify the acid part: a C20 straight-chain acid, CH3(CH2)18CO2H.\nStep 3: Join them: CH3(CH2)18CO2(CH2)31CH3, one ester with fifty-two carbons in two chains.\nStep 4: Compare with beeswax's triacontyl hexadecanoate (C16 acid, C30 alcohol): the same pattern, one acid and one alcohol, both long.",
      "note": "McMurry 27.1 (Waxes, Fats, and Oils) defines waxes as mixtures of esters of long-chain carboxylic acids with long-chain alcohols, the acid usually with an even number of carbons from 16 to 36 and the alcohol with an even number from 24 to 36, gives triacontyl hexadecanoate of beeswax as the example, and notes the waxy coatings of fruits, leaves and furs; Problem 27-1 asks for the carnauba structure. Fats and oils, the triacylglycerols, are the next paragraph of the same section.",
      "options": {
        "A": "Correct. One long-chain acid esterified to one long-chain alcohol is a wax; carnauba's is the C20 acid with the C32 alcohol.",
        "B": "Three fatty acids on glycerol is a fat or oil (a triacylglycerol), not a wax. A wax has one ester and one long alcohol chain in place of glycerol.",
        "C": "Paraffin wax is a hydrocarbon mixture, but the biological waxes of the chapter are esters; carnauba's C32 alcohol and C20 acid are joined through an ester group.",
        "D": "A phosphate diester to an amino alcohol is a phospholipid head group. Waxes contain no phosphorus or nitrogen."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q7_omega_3",
    "topic": "Waxes, Fats, and Oils",
    "difficulty_level": "Medium",
    "question_text": "Linolenic acid, (9Z,12Z,15Z)-octadeca-9,12,15-trienoic acid, is described as an omega-3 fatty acid. What does omega-3 mean?",
    "options": [
      {
        "option_id": "A",
        "text": "A double bond begins three carbons in from the methyl (noncarboxyl) end of the chain",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The acid has three double bonds",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A double bond begins at C3, three carbons from the carboxyl group",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The chain has a multiple of three carbons",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two numbering systems are used for fatty acids. IUPAC locants count from the carboxyl carbon as C1, so linolenic acid's double bonds are at 9, 12 and 15. The omega system counts from the other end, the terminal methyl being the omega carbon, and names the position of the double bond nearest that end. In an eighteen-carbon chain the 15,16 double bond begins at the third carbon from the methyl end (C18 is omega, C17 is omega-2, C16 is omega-3 and the bond runs from C16 to C15), so linolenic acid is omega-3; linoleic acid, with its last double bond at 12,13, is omega-6.",
      "approach": "Step 1: Number the chain from the carboxyl carbon: C1 to C18, double bonds starting at C9, C12 and C15.\nStep 2: Count from the methyl end instead: C18 is omega-1, C17 omega-2, C16 omega-3.\nStep 3: The 15,16 double bond includes C16, the omega-3 carbon, so the first double bond from the methyl end begins at omega-3.\nStep 4: Linoleic acid's last double bond spans C12-C13; C13 is omega-6 in a C18 chain, so it is an omega-6 acid. The omega number says nothing about how many double bonds there are.",
      "note": "McMurry 27.1 (Waxes, Fats, and Oils) states that linoleic and linolenic acids occur in cream and are essential in the diet, that linolenic acid is an example of an omega-3 fatty acid found to lower blood triglycerides and reduce the risk of heart attack, and that the name omega-3 means there is a double bond three carbons in from the noncarboxyl end of the chain; Table 27.1 gives linolenic acid as (all Z)-CH3CH2(CH=CHCH2)3(CH2)6CO2H.",
      "options": {
        "A": "Correct. Omega numbering starts at the terminal methyl, and linolenic acid's 15,16 double bond sits three carbons in from that end.",
        "B": "Linolenic acid does have three double bonds, but that is a coincidence; the omega number locates one double bond from the methyl end. Alpha-linolenic acid's isomer gamma-linolenic acid also has three and is omega-6.",
        "C": "Omega counting runs from the methyl end, not the carboxyl end. A double bond at C3 (from the carboxyl) would be a beta,gamma-unsaturated acid, which is not what linolenic acid is.",
        "D": "Eighteen happens to be a multiple of three, but chain length is not what omega describes; oleic acid is also C18 and is omega-9."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q8_lowest_melting_oil",
    "topic": "Waxes, Fats, and Oils",
    "difficulty_level": "Medium",
    "question_text": "Approximate fatty acid compositions: coconut oil, 50% lauric, 18% myristic, 8% palmitic, 6% oleic; butter, 25% palmitic, 10% stearic, 25% oleic; lard, 25% palmitic, 15% stearic, 50% oleic, 6% linoleic; corn oil, 10% palmitic, 4% stearic, 35% oleic, 45% linoleic. Which is the most fluid at room temperature, and why?",
    "options": [
      {
        "option_id": "A",
        "text": "Corn oil, because it has the highest proportion of unsaturated, especially polyunsaturated, acyl chains",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Coconut oil, because lauric acid has the shortest chains",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Lard, because oleic acid is its main component",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Butter, because it is the most complex mixture",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A fat's melting behaviour follows its acyl chains: the more cis double bonds, the more kinks, the worse the packing and the lower the melting point. Corn oil is 80% unsaturated and nearly half of it is the doubly unsaturated linoleic acid, so its triacylglycerols cannot crystallise near room temperature and it is a liquid. Lard is half oleic but a third saturated, and the saturated chains crystallise to give a soft solid. Coconut oil is almost entirely saturated; its short lauric chains lower the melting point somewhat (lauric acid melts at 43 °C against stearic's 69 °C) but not below room temperature, and coconut oil is a solid in a cool kitchen.",
      "approach": "Step 1: Add up the unsaturated fraction of each: coconut 6%, butter about 30%, lard 56%, corn 80%.\nStep 2: Weight polyunsaturation: corn oil's 45% linoleic carries two kinks per chain, lard's 6% linoleic little.\nStep 3: Corn oil has both the most unsaturation and the most polyunsaturation, so it packs worst and melts lowest.\nStep 4: Chain length matters within the saturated acids (lauric below stearic), but coconut oil's 76% saturated chains still crystallise; unsaturation dominates.",
      "note": "McMurry 27.1 (Waxes, Fats, and Oils), Table 27.2, gives these compositions (coconut 50/18/8/2/6/1 lauric through linoleic; butter 2/10/25/10/25/5; lard 0/1/25/15/50/6; corn 0/1/10/4/35/45) and states that since vegetable oils generally have a higher proportion of unsaturated to saturated fatty acids than animal fats they have lower melting points, the more double bonds the harder it is for the molecules to crystallise. Coconut oil's exceptional saturation makes it the one vegetable oil that is solid.",
      "options": {
        "A": "Correct. Corn oil's chains are 80% unsaturated and 45% doubly unsaturated, the poorest-packing set of the four.",
        "B": "Short chains melt lower than long ones among saturated acids, but coconut oil is over three-quarters saturated with no kinks to prevent packing, and it is a solid below about 24 °C.",
        "C": "Lard is more unsaturated than butter or coconut oil, but its 40% saturated chains (palmitic and stearic) crystallise and make it a soft solid; corn oil has half as much saturated material and far more linoleic acid.",
        "D": "Every fat is a complex mixture; complexity does not set the melting point. Butter is about 70% saturated and is a solid."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q9_partial_hydrogenation",
    "topic": "Waxes, Fats, and Oils",
    "difficulty_level": "Medium",
    "question_text": "Soybean oil is heated with hydrogen over a nickel catalyst until it becomes a semisolid. What has happened to the fatty acyl chains?",
    "options": [
      {
        "option_id": "A",
        "text": "Some cis double bonds have been reduced to single bonds, and some of the remaining double bonds have isomerised from cis to trans",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The ester groups have been reduced to alcohols, giving free fatty alcohols",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The chains have been oxidised at their double bonds to give hydroperoxides",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Every double bond has been reduced, giving a fully saturated fat",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Catalytic hydrogenation of an oil is ordinary alkene hydrogenation applied to the acyl chains: H2 adds across C=C bonds on the nickel surface, converting kinked cis-unsaturated chains into straight saturated ones that pack and crystallise, so a liquid oil becomes a solid or semisolid fat. The process is stopped before completion to get the right consistency, which leaves some double bonds; and the reversible adsorption on the metal lets some of those survivors return as the more stable trans isomers, giving 10 to 15% trans fatty acids such as elaidic acid. Trans chains are straight like saturated ones, pack well, and raise blood cholesterol, which is why trans fats were phased out of industrial foods after 2015.",
      "approach": "Step 1: Identify the reaction: H2 and Ni at high temperature reduce alkenes; esters are untouched under these conditions.\nStep 2: Partial hydrogenation removes some cis double bonds, straightening those chains and raising the melting point to the semisolid range.\nStep 3: On the catalyst the remaining alkenes can add and lose a hydrogen atom, isomerising cis to the thermodynamically preferred trans.\nStep 4: The product is a mixture: saturated chains, unchanged cis chains, and 10 to 15% trans chains.",
      "note": "McMurry 27.1 (Waxes, Fats, and Oils) states that the C=C bonds in vegetable oils can be reduced by catalytic hydrogenation, typically at high temperature over a nickel catalyst, to give saturated solid or semisolid fats, that margarine and shortening were made this way from soybean, peanut or cottonseed oil before 2015, that the hydrogenation is accompanied by some cis-trans isomerisation of the remaining double bonds producing fats with about 10 to 15% trans unsaturated fatty acids (linoleic to elaidic acid as the example), and that dietary trans fats raise blood cholesterol. Alkene hydrogenation is McMurry 8.6.",
      "options": {
        "A": "Correct. Partial hydrogenation saturates some chains and, as a side reaction on the catalyst, converts some of the surviving cis double bonds to trans.",
        "B": "Ester reduction to alcohols needs a hydride reagent such as LiAlH4; H2 over nickel reduces C=C bonds and leaves the ester carbonyls alone.",
        "C": "Hydroperoxides form when oils autoxidise in air (rancidity), not under hydrogen. Hydrogenation is a reduction, the opposite process.",
        "D": "Complete hydrogenation would give a hard, fully saturated fat; the process is deliberately stopped at a semisolid, so double bonds remain, and it is among those survivors that the trans isomers arise."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q10_pick_elaidic_acid",
    "topic": "Waxes, Fats, and Oils",
    "difficulty_level": "Medium",
    "question_text": "Elaidic acid is the trans isomer that forms from oleic acid during partial hydrogenation. Which structure is elaidic acid?",
    "options": [
      {
        "option_id": "A",
        "text": "An eighteen-carbon acid with an E double bond at C9",
        "smiles": "CCCCCCCC/C=C/CCCCCCCC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "An eighteen-carbon acid with a Z double bond at C9",
        "smiles": "CCCCCCCC/C=C\\CCCCCCCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "An eighteen-carbon acid with Z double bonds at C9 and C12",
        "smiles": "CCCCC/C=C\\C/C=C\\CCCCCCCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A saturated eighteen-carbon acid",
        "smiles": "CCCCCCCCCCCCCCCCCC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Oleic acid and elaidic acid are geometric isomers: both are octadec-9-enoic acid, and they differ only in whether the two chain segments lie on the same side of the C9 double bond (Z, cis, oleic) or opposite sides (E, trans, elaidic). The difference is visible in a drawing as the direction the chain takes after the double bond: a cis bond turns the chain back, a trans bond continues it in a zigzag. That geometry sets the properties: the straight trans chain packs like a saturated one and elaidic acid melts near 45 °C, against 13 °C for oleic acid, which is why hydrogenated oils containing trans fats are solids.",
      "approach": "Step 1: Eliminate by unsaturation count: elaidic acid has exactly one double bond, so the diene (linoleic) and the saturated acid (stearic) are out.\nStep 2: Between the two monoenes, read the geometry at the double bond: the chains on the same side is Z (oleic), on opposite sides is E (elaidic).\nStep 3: The E isomer is elaidic acid.\nStep 4: Check the position: C9, counting from the carboxyl carbon, in both; only the geometry differs.",
      "note": "McMurry 27.1 (Waxes, Fats, and Oils) states that the double bonds of natural fatty acids have mostly Z (cis) geometry, that hydrogenation is accompanied by some cis-trans isomerisation producing fats with about 10 to 15% trans unsaturated fatty acids, and gives the conversion of linoleic acid into elaidic acid as the example; Table 27.1 gives oleic acid as (Z)-CH3(CH2)7CH=CH(CH2)7CO2H. Elaidic acid's melting point and the E/Z reading of a drawn chain (McMurry 7.5) are not in this chapter.",
      "options": {
        "A": "Correct. One double bond at C9 with the chain segments on opposite sides is the E isomer, elaidic acid.",
        "B": "This is oleic acid: the same double bond at C9 but with Z geometry, the chain doubling back. It is the natural isomer that hydrogenation converts into elaidic acid.",
        "C": "Two Z double bonds at C9 and C12 make this linoleic acid, the diene. Elaidic acid is a monoene.",
        "D": "Stearic acid has no double bond at all; it is what complete hydrogenation of oleic or elaidic acid gives. Elaidic acid still has its C9 double bond."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q11_micelle",
    "topic": "Soap",
    "difficulty_level": "Easy",
    "question_text": "How does a soap such as sodium stearate remove grease from fabric in water?",
    "options": [
      {
        "option_id": "A",
        "text": "Its hydrocarbon tails dissolve in the grease while its carboxylate heads face the water, so the grease is carried off inside micelles that are soluble in water",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Its carboxylate reacts with the grease to form a water-soluble ester",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Its hydrocarbon tails hydrogen-bond to water, dragging the grease along",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Its sodium ions oxidise the grease to carboxylic acids",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A soap molecule has two ends with opposite affinities: an ionic carboxylate head that is hydrophilic and a long hydrocarbon tail that is hydrophobic. In water the tails hide from the solvent by clustering together inside a sphere, a micelle, while the heads coat the outside and keep the sphere dispersed. A grease droplet is just more hydrocarbon, so the tails dissolve into it and coat it; the droplet ends up inside a micelle with a charged surface, which water accepts, and it rinses away. No covalent chemistry happens; the cleaning is a matter of solubility and surface.",
      "approach": "Step 1: Identify the two parts of stearate: CH3(CH2)16 (nonpolar tail) and CO2- Na+ (ionic head).\nStep 2: In water the tails aggregate away from water and the heads stay solvated: micelles.\nStep 3: Grease, being nonpolar, is taken into the hydrocarbon interior of the micelle.\nStep 4: The micelle's charged exterior keeps it in the water phase, and the grease is rinsed away with it.",
      "note": "McMurry 27.2 (Soap) states that soaps act as cleansers because the two ends of the molecule are so different, the carboxylate end ionic and hydrophilic and the long hydrocarbon portion nonpolar and hydrophobic, that dispersed in water the tails cluster inside a tangled hydrophobic ball while the ionic heads protrude into the water (micelles, Figure 27.2), and that grease and oil droplets are solubilised when coated by the tails in the centre of micelles and can then be rinsed away. Hydrophilic and hydrophobic are defined in McMurry 2.12.",
      "options": {
        "A": "Correct. The amphipathic soap molecule solubilises grease by surrounding it with tails and presenting carboxylate heads to the water.",
        "B": "No ester forms; the carboxylate is a poor nucleophile and grease has no acylating group. Cleaning is physical solubilisation, not a reaction.",
        "C": "Hydrocarbon tails cannot hydrogen-bond; they are the hydrophobic part. It is the carboxylate head that interacts with water.",
        "D": "Sodium ions are spectators and are not oxidants. The soap's action comes from its carboxylate anion's two ends, not from the counter-ion."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q12_hard_water_detergent",
    "topic": "Soap",
    "difficulty_level": "Medium",
    "question_text": "In hard water a soap leaves a grey scum, whereas a synthetic detergent such as a sodium alkylbenzenesulfonate does not. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "Calcium and magnesium carboxylates are insoluble and precipitate, whereas the calcium and magnesium sulfonates stay in solution",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Hard water hydrolyses the soap back to fatty acid and glycerol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The detergent has no hydrophobic tail, so it does not aggregate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Sulfonates are stronger bases than carboxylates and dissolve the scum",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hard water carries Ca2+ and Mg2+. Long-chain carboxylates form salts with these divalent ions that are insoluble in water, so soap in hard water is thrown out of solution as calcium and magnesium stearate and oleate, the bathtub ring, and the soap is wasted. A sulfonate head, ArSO3-, is the anion of a strong acid; its calcium and magnesium salts remain soluble, so an alkylbenzenesulfonate keeps working. The cleaning mechanism is identical to soap's, an oil-loving alkylbenzene tail and a water-loving anionic head forming micelles; only the head group's salts differ in solubility.",
      "approach": "Step 1: Write the exchange: 2 RCO2- Na+ + Ca2+ gives (RCO2)2Ca, a solid, plus 2 Na+.\nStep 2: Recognise the loss: the precipitated soap cannot form micelles and deposits on fabric and tubs.\nStep 3: For the detergent, (RC6H4SO3)2Ca is soluble, so no precipitate forms and the micelles persist.\nStep 4: Both molecules are amphipathic in the same way; the difference is purely the solubility of their divalent-metal salts.",
      "note": "McMurry 27.2 (Soap) states that in hard water, which contains metal ions, soluble sodium carboxylates are converted into insoluble magnesium and calcium salts, leaving the familiar ring of scum around bathtubs and a grey tinge on white clothes, and that chemists circumvented this with synthetic detergents based on salts of long-chain alkylbenzenesulfonic acids, whose mechanism is the same as soap's but which do not form insoluble metal salts in hard water; Problem 27-3 asks for the structure of magnesium oleate.",
      "options": {
        "A": "Correct. The divalent-metal carboxylates precipitate as scum; the corresponding sulfonates are soluble, so the detergent keeps cleaning.",
        "B": "Hard water does not hydrolyse anything, and a soap contains no glycerol to release; glycerol was separated when the soap was made. The soap is precipitated, not hydrolysed.",
        "C": "The detergent has a long alkyl tail on its benzene ring; without a hydrophobic tail it could not solubilise grease at all. Its tail is what makes it a detergent.",
        "D": "A sulfonate is a much weaker base than a carboxylate (its conjugate acid is a strong acid), and basicity is not what dissolves scum. The point is the solubility of the calcium and magnesium salts."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q13_mixed_triglyceride_saponification",
    "topic": "Soap",
    "difficulty_level": "Medium",
    "question_text": "Glyceryl dioleate monopalmitate, a triacylglycerol carrying two oleoyl chains and one palmitoyl chain, is saponified with excess aqueous NaOH. What is obtained?",
    "options": [
      {
        "option_id": "A",
        "text": "One glycerol, two sodium oleates and one sodium palmitate",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "One glycerol and three sodium oleates",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "One glycerol, two oleic acids and one palmitic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Glyceryl monopalmitate and two sodium oleates",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A natural fat is usually a mixed triacylglycerol, its three acyl chains not all the same, and saponification releases each chain as its own carboxylate salt. The count of products follows the count of ester groups: three esters give three carboxylates and one glycerol, and the identity of each carboxylate follows the chain that was there. Excess base converts every acid into its salt, and every ester is cleaved, so nothing partially hydrolysed survives. The product mixture is a soap of two components, sodium oleate and sodium palmitate, in a 2:1 ratio.",
      "approach": "Step 1: Read the name: dioleate monopalmitate, so two C18:1 (oleoyl) esters and one C16 (palmitoyl) ester on glycerol.\nStep 2: Hydroxide hydrolyses all three esters, freeing glycerol.\nStep 3: The three acids are deprotonated by the excess base: two sodium oleates (CH3(CH2)7CH=CH(CH2)7CO2- Na+) and one sodium palmitate (CH3(CH2)14CO2- Na+).\nStep 4: Three equivalents of NaOH are consumed; the cis double bonds of the oleate chains are untouched by hydroxide.",
      "note": "McMurry 27.2 (Soap), Problem 27-4, asks for exactly this saponification, and McMurry 27.1 states that the three fatty acids of a specific triacylglycerol need not be the same and that hydrolysis with aqueous NaOH yields glycerol and three fatty acids. The section on soap adds that the crude curds contain glycerol and excess alkali and are purified by salting out with NaCl; the soap itself is the mixture of carboxylate salts.",
      "options": {
        "A": "Correct. Each ester gives its own carboxylate: two oleates and one palmitate, plus glycerol.",
        "B": "The palmitoyl chain is a different acid and gives sodium palmitate, not a third oleate. The name tells you the three chains are two of one kind and one of another.",
        "C": "Free acids do not survive excess NaOH; hydroxide deprotonates them to carboxylates. Acidifying the soap afterwards would give these acids.",
        "D": "Excess hydroxide hydrolyses all three esters; a monoester does not survive. Partial products appear only with a deficiency of base."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q14_glycerophospholipid_makeup",
    "topic": "Phospholipids",
    "difficulty_level": "Medium",
    "question_text": "Which description matches a typical glycerophospholipid such as phosphatidylethanolamine?",
    "options": [
      {
        "option_id": "A",
        "text": "Glycerol with a saturated fatty acyl ester at C1, an unsaturated fatty acyl ester at C2, and at C3 a phosphate that is also esterified to an amino alcohol; C2 has the R configuration",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Glycerol with fatty acyl esters at C1 and C3 and a phosphate at C2",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Sphingosine with an amide-linked fatty acid and a phosphocholine on its primary hydroxyl",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Glycerol with three fatty acyl esters, one of them carrying a phosphate on its chain",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Glycerophospholipids are all built on phosphatidic acid: glycerol esterified at C1 and C2 by fatty acids and at C3 by phosphoric acid. Nature is selective about which chains go where: the C1 acyl group is usually saturated (palmitoyl or stearoyl) and the C2 acyl group usually unsaturated (oleoyl, linoleoyl, arachidonoyl). The phosphate at C3 carries a second ester to a small amino alcohol, choline, ethanolamine or serine, which names the lipid. C2 is a stereocentre, and the natural compounds have the R (L) configuration. The alternative backbone, sphingosine, defines the other phospholipid family, the sphingomyelins.",
      "approach": "Step 1: Backbone: glycerol, three carbons each with an oxygen.\nStep 2: C1 and C2: fatty acyl esters, saturated at C1 and unsaturated at C2 as a rule.\nStep 3: C3: a phosphate diester, one bond to glycerol and one to the amino alcohol (ethanolamine for phosphatidylethanolamine).\nStep 4: The phosphate goes on a terminal carbon, not the middle one, so the head group projects from one end of the molecule and the two tails from the other, the shape that packs into a bilayer.",
      "note": "McMurry 27.3 (Phospholipids) states that glycerophospholipids are based on phosphatidic acid, which contains a glycerol backbone linked by ester bonds to two fatty acids and one phosphoric acid, that the acyl group at C1 is usually saturated and the one at C2 usually unsaturated, that the phosphate group at C3 is also bonded to an amino alcohol such as choline, ethanolamine or serine, and that the compounds are chiral and have an L, or R, configuration at C2. Sphingomyelins, the second group, have sphingosine or a related dihydroxyamine as their backbone.",
      "options": {
        "A": "Correct. Two acyl esters (saturated then unsaturated) on C1 and C2, a phosphate-amino alcohol head on C3, and R at C2 is the glycerophospholipid pattern.",
        "B": "The phosphate is on a terminal carbon, C3, with the two acyl groups on C1 and C2. A phosphate in the middle would put the head between the tails, which is not the natural structure.",
        "C": "A sphingosine backbone with an amide-linked fatty acid describes a sphingomyelin, the other class of phospholipid, not a glycerophospholipid.",
        "D": "A glycerophospholipid has only two acyl esters; the third glycerol oxygen carries the phosphate directly. Three acyl chains would be a triacylglycerol, and fatty acid chains do not carry phosphates."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q15_sphingomyelin",
    "topic": "Phospholipids",
    "difficulty_level": "Easy",
    "question_text": "Sphingomyelins are abundant in the coating around nerve fibres. How do they differ from glycerophospholipids?",
    "options": [
      {
        "option_id": "A",
        "text": "Their backbone is sphingosine, a long-chain amino alcohol, rather than glycerol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "They contain no phosphorus",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "They have three fatty acyl chains instead of two",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "They are neutral rather than amphipathic and do not enter membranes",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The two families of phospholipid share the phosphate-amino alcohol head and the two hydrophobic tails, and differ in what holds them together. Glycerophospholipids use glycerol, with both tails as esters. Sphingomyelins use sphingosine, a C18 amino alcohol whose own hydrocarbon chain is one of the two tails; the second tail is a fatty acid attached to the amino group as an amide, and the phosphocholine head sits on the primary hydroxyl. Both are amphipathic and both form bilayers; sphingomyelins are especially abundant in brain and nerve tissue, in the myelin sheath.",
      "approach": "Step 1: Compare backbones: glycerol (three carbons, three oxygens) against sphingosine (a long chain with an amine and two hydroxyls).\nStep 2: Compare the tail linkages: ester at C1 and C2 for glycerophospholipids; in sphingomyelin one tail is part of sphingosine itself and the other is amide-linked.\nStep 3: Compare heads: both carry a phosphate diester to an amino alcohol, so both are phospholipids.\nStep 4: Both have one polar head and two nonpolar tails, so both assemble into bilayers; the difference is structural, not functional.",
      "note": "McMurry 27.3 (Phospholipids) states that phospholipids are of two general types, glycerophospholipids and sphingomyelins, that sphingomyelins have sphingosine or a related dihydroxyamine as their backbone and are particularly abundant in brain and nerve tissue where they are a major constituent of the coating around nerve fibres, and that phospholipids of both kinds make up 50 to 60% of cell membranes and organise into the lipid bilayer.",
      "options": {
        "A": "Correct. Sphingomyelins are built on sphingosine, not glycerol; that backbone difference is what defines the class.",
        "B": "Sphingomyelins are phospholipids: they carry a phosphate diester to choline just as lecithin does. The phosphorus is in the head group of both families.",
        "C": "Both families have two hydrophobic tails; in sphingomyelin one is sphingosine's own chain and the other an amide-linked fatty acid. Three acyl chains is a triacylglycerol.",
        "D": "Sphingomyelins are amphipathic and are major membrane components, the myelin sheath being the prime example. A polar phosphocholine head on two tails is the membrane-forming shape."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q16_bilayer_vs_micelle",
    "topic": "Phospholipids",
    "difficulty_level": "Medium",
    "question_text": "Soap molecules in water form spherical micelles, but membrane phospholipids form a bilayer about 5 nm thick. What accounts for the difference?",
    "options": [
      {
        "option_id": "A",
        "text": "A phospholipid has two hydrocarbon tails on one head, a roughly cylindrical shape that packs side by side into a double sheet with the tails inside, whereas a single-tailed soap is wedge-shaped and packs into a sphere",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Phospholipid heads are uncharged, so they cannot face water and must stack",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Phospholipids are covalently cross-linked into sheets by their phosphates",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Soap tails are too short to span a bilayer",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Both soaps and phospholipids are amphipathic and both hide their tails from water; the geometry of the molecule decides the shape of the aggregate. One tail under one head gives a cone that fits best into a curved surface, so soaps form spherical micelles with the tails at the centre. Two tails under one head give a cylinder that fits best into a flat sheet, so phospholipids line up side by side, tails inward, and a second such sheet caps the first: a bilayer, about 5 nm across, whose hydrophobic core is a barrier to water and ions. That bilayer, with proteins embedded in it, is the cell membrane.",
      "approach": "Step 1: Count tails: soap one, phospholipid two.\nStep 2: Relate shape to packing: a wedge (one tail) fills a sphere; a cylinder (two tails) fills a plane.\nStep 3: In both cases the tails aggregate away from water and the heads face it; the micelle does this with one curved surface, the bilayer with two flat ones.\nStep 4: The bilayer's continuous hydrocarbon interior is what makes it a barrier and lets it close on itself into a vesicle or a cell.",
      "note": "McMurry 27.3 (Phospholipids) states that because phospholipids are like soaps in having a long nonpolar hydrocarbon tail bound to a polar ionic head, they organise in the cell membrane into a lipid bilayer about 5.0 nm (50 Å) thick, the nonpolar tails aggregating in the centre of the bilayer in much the same way that soap tails aggregate in the centre of a micelle (Figure 27.3), and that the bilayer serves as an effective barrier to the passage of water, ions and other components into and out of cells. Micelles are Figure 27.2 in McMurry 27.2. The shape argument is standard biochemistry rather than the text's wording.",
      "options": {
        "A": "Correct. Two tails per head make a cylinder that packs into flat sheets; one tail per head makes a wedge that packs into a sphere.",
        "B": "Phospholipid heads are charged (a phosphate anion, often paired with an ammonium cation) and do face water; they form the two surfaces of the bilayer. Lack of charge is not the reason.",
        "C": "There are no covalent bonds between phospholipid molecules; the bilayer is held by the hydrophobic effect and dispersion forces, which is why membranes are fluid.",
        "D": "Soap tails (C16 to C18) are as long as phospholipid tails. Length is not the issue; the number of tails per head is."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q17_eicosanoid_naming",
    "topic": "Prostaglandins and Other Eicosanoids",
    "difficulty_level": "Medium",
    "question_text": "What does the name PGE1 tell you about the structure of the compound?",
    "options": [
      {
        "option_id": "A",
        "text": "It is a prostaglandin (a C20 acid with a cyclopentane ring) with the E substitution pattern on the ring and one carbon-carbon double bond",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It is a prostaglandin with an epoxide and one oxygen",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It is the first prostaglandin discovered, with an ethyl side chain",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It is a thromboxane with one ring",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Eicosanoid names are built from three parts. The two-letter prefix gives the ring system: PG for prostaglandins (cyclopentane ring with two long chains), TX for thromboxanes (six-membered ring containing oxygen), LT for leukotrienes (no ring). The capital letter gives the pattern of oxygen substituents on the ring: E means a ketone at C9 and a hydroxyl at C11, F means hydroxyls at both, A means an enone, and so on. The subscript counts the carbon-carbon double bonds outside the ring. So PGE1 is the E-type prostaglandin with one double bond (the 13,14 E alkene) and PGE2, the most abundant mammalian prostaglandin, has a second, cis double bond at 5,6.",
      "approach": "Step 1: Read PG: the compound is a prostaglandin, C20, cyclopentane ring, two side chains, numbered from CO2H as C1 to CH3 as C20.\nStep 2: Read E: the ring carries the E oxygen pattern, a C9 ketone and a C11 hydroxyl.\nStep 3: Read the subscript 1: one C=C in the side chains.\nStep 4: Compare: PGE2 adds the 5,6 double bond; PGF2alpha has the same skeleton with a C9 OH instead of the ketone.",
      "note": "McMurry 27.4 (Prostaglandins and Other Eicosanoids) states that eicosanoids are named by their ring system (PG, TX or LT), substitution pattern and number of double bonds, that the ring substitution patterns are indicated by letter (Figure 27.5) and the number of double bonds by a subscript, so that PGE1 is a prostaglandin with the E substitution pattern and one double bond, and that the numbering starts at the CO2H carbon as C1 and ends at the CH3 carbon as C20, as in arachidonic acid. Problem 27-5 asks for R/S assignments in PGE2 (Figure 27.6).",
      "options": {
        "A": "Correct. PG names the cyclopentane prostaglandin skeleton, E the ring oxidation pattern, and the subscript 1 a single side-chain double bond.",
        "B": "E is a code for the ring's substitution pattern (ketone at C9, hydroxyl at C11), not a chemical abbreviation; and the subscript counts double bonds, not oxygens.",
        "C": "The letters are not a discovery order and the subscript is not a substituent. PGE1 has no ethyl group; it has a ketone and a hydroxyl on the ring and one C=C in the chains.",
        "D": "Thromboxanes carry the prefix TX and have a six-membered oxygen-containing ring. PG is the prostaglandin prefix, a cyclopentane."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q18_cyclooxygenase",
    "topic": "Prostaglandins and Other Eicosanoids",
    "difficulty_level": "Medium",
    "question_text": "Aspirin and the COX-2 inhibitors act on prostaglandin H synthase (cyclooxygenase). What reaction does that enzyme carry out?",
    "options": [
      {
        "option_id": "A",
        "text": "It converts arachidonic acid and O2 into the cyclic endoperoxide hydroperoxide PGG2, then reduces the OOH group to give PGH2, the precursor of the other prostaglandins",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It hydrolyses arachidonic acid from membrane phospholipids",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It isomerises PGH2 into PGE2",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It cyclises arachidonic acid to a six-membered thromboxane ring",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Every eicosanoid begins with arachidonic acid, and the committed step is the work of one bifunctional enzyme. Its cyclooxygenase activity adds two molecules of O2 to arachidonic acid in a radical process that closes the cyclopentane ring and installs a bridging endoperoxide plus a hydroperoxide at C15, giving PGG2; its peroxidase activity then reduces the C15 OOH to OH, giving PGH2. PGH2 is the branch point: other enzymes isomerise it to PGE2, reduce it to PGF2alpha, or rearrange it to thromboxanes. Two isoforms exist, COX-1 for housekeeping prostaglandins and COX-2 induced by inflammation, which is why selective COX-2 inhibitors were developed as anti-inflammatories.",
      "approach": "Step 1: Locate the enzyme in the pathway: at the start, acting on free arachidonic acid (which a phospholipase has already released from membrane lipids).\nStep 2: Cyclooxygenase step: arachidonic acid + 2 O2 gives PGG2, with the five-membered ring, the 9,11-endoperoxide bridge and the 15-hydroperoxide.\nStep 3: Peroxidase step: PGG2's OOH is reduced to OH, giving PGH2.\nStep 4: PGH2 is handed on: PGE synthase isomerises it to PGE2, which is not cyclooxygenase's job.",
      "note": "McMurry 27.4 (Prostaglandins and Other Eicosanoids) states that eicosanoid biosynthesis begins with the conversion of arachidonic acid to PGH2 catalysed by the multifunctional PGH synthase (PGHS), also called cyclooxygenase (COX), that COX-1 carries out the normal physiological production of prostaglandins while COX-2 produces additional prostaglandin in response to arthritis and other inflammation (Vioxx and Bextra inhibit COX-2 selectively but with cardiac and gastrointestinal problems), that PGHS accomplishes an initial reaction of arachidonic acid with O2 to yield PGG2 and a subsequent reduction of the hydroperoxide to the alcohol PGH2 (Figure 8.12), and that PGE2 arises by isomerisation of PGH2 catalysed by PGE synthase (Figure 27.6).",
      "options": {
        "A": "Correct. Cyclooxygenase makes PGG2 from arachidonic acid and oxygen and reduces it to PGH2, the common precursor.",
        "B": "Releasing arachidonic acid from phospholipids is the job of phospholipase A2, upstream of cyclooxygenase. COX acts on the free acid.",
        "C": "The PGH2 to PGE2 isomerisation is catalysed by PGE synthase, a separate enzyme downstream. Cyclooxygenase stops at PGH2.",
        "D": "Thromboxanes are made from PGH2 by thromboxane synthase; cyclooxygenase forms the five-membered prostaglandin ring, not the six-membered oxygen ring of a thromboxane."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q19_arachidonic_acid_drawn",
    "topic": "Prostaglandins and Other Eicosanoids",
    "difficulty_level": "Medium",
    "question_text": "The C20 fatty acid shown is the biological source of all the eicosanoids. What is its name?",
    "question_smiles": "CCCCC/C=C\\C/C=C\\C/C=C\\C/C=C\\CCCC(=O)O",
    "structure_alt": "A twenty-carbon chain ending in CO2H with four cis double bonds, each separated from the next by a single CH2, the first double bond four carbons from the carboxyl carbon and a five-carbon saturated tail at the far end.",
    "options": [
      {
        "option_id": "A",
        "text": "(5Z,8Z,11Z,14Z)-Eicosa-5,8,11,14-tetraenoic acid (arachidonic acid)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(6Z,9Z,12Z,15Z)-Eicosa-6,9,12,15-tetraenoic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(9Z,12Z,15Z)-Octadeca-9,12,15-trienoic acid (linolenic acid)",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(5E,8E,11E,14E)-Eicosa-5,8,11,14-tetraenoic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Arachidonic acid is the C20 polyunsaturated acid from which prostaglandins, thromboxanes and leukotrienes are made, and its name is read straight from the drawing by the usual rules: count the chain from the carboxyl carbon as C1, give each double bond the lower locant of its two carbons, and assign Z or E from the chain segments on either side. The four double bonds all have cis geometry (Z), and they are methylene-interrupted, each separated from the next by one CH2, a pattern shared with linoleic and linolenic acids; counted from the methyl end the last double bond makes it an omega-6 acid.",
      "approach": "Step 1: Count carbons from the CO2H carbon: twenty, so eicosa-.\nStep 2: Locate the double bonds: from C1, four saturated carbons (C2 to C4, with C4 as the last sp3 carbon before the first alkene) and then double bonds starting at C5, C8, C11 and C14.\nStep 3: Read the geometry at each: the chain continues on the same side, Z at all four.\nStep 4: Name: (5Z,8Z,11Z,14Z)-eicosa-5,8,11,14-tetraenoic acid. Counting from the methyl end instead gives 6,9,12,15, a common error.",
      "note": "McMurry 27.4 (Prostaglandins and Other Eicosanoids) states that prostaglandins, thromboxanes and leukotrienes make up the eicosanoids because they are derived biologically from 5,8,11,14-eicosatetraenoic acid, arachidonic acid (Figure 27.4), and that eicosanoid numbering follows arachidonic acid, starting with the CO2H carbon as C1 and ending with the CH3 carbon as C20; Table 27.1 in McMurry 27.1 gives arachidonic acid as (all Z)-CH3(CH2)4(CH=CHCH2)4CH2CH2CO2H with a melting point of -49.5 °C. Alkene nomenclature and E/Z are McMurry 7.3 and 7.5.",
      "options": {
        "A": "Correct. Twenty carbons, four Z double bonds at 5, 8, 11 and 14 counting from the carboxyl carbon: arachidonic acid.",
        "B": "Locants 6, 9, 12, 15 come from counting from the methyl end. IUPAC numbering starts at the carboxyl carbon, where the first double bond begins at C5.",
        "C": "Linolenic acid has eighteen carbons and three double bonds. The drawn chain has twenty carbons and four double bonds.",
        "D": "The positions are right but the geometry is wrong: every double bond in arachidonic acid is Z (cis). An all-E isomer would be a straight-chain compound that does not occur naturally."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q20_menthol_terpenoid",
    "topic": "Terpenoids",
    "difficulty_level": "Medium",
    "question_text": "Menthol, from peppermint oil, is shown. How is it classified?",
    "question_smiles": "C[C@@H]1CC[C@H]([C@@H](C1)O)C(C)C",
    "structure_alt": "A saturated six-membered ring bearing a methyl group on one carbon, an OH on a second carbon, and an isopropyl group on the carbon next to the OH-bearing one; three stereocentres are shown.",
    "options": [
      {
        "option_id": "A",
        "text": "A monoterpenoid: ten carbons from two isoprene units, with an oxygen function",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A sesquiterpenoid: fifteen carbons from three isoprene units",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Not a terpenoid at all, because it contains oxygen and no double bonds",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A steroid, because it has a six-membered ring with an equatorial OH",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Terpenoids are recognised from their carbon skeleton, not from their functional groups or degree of unsaturation. Any compound whose carbons come in multiples of five arranged as head-to-tail isoprene units belongs to the family; a hydrocarbon member is a terpene, an oxygenated one a terpenoid, and the text uses terpenoid for both. Menthol has the same ten-carbon skeleton as limonene, a six-membered ring with a methyl and a three-carbon branch on opposite carbons (the menthane skeleton), reduced and hydroxylated. Two isoprene units make it a monoterpenoid, and it is biosynthesised from geranyl diphosphate like the other monoterpenoids of essential oils.",
      "approach": "Step 1: Count carbons: six in the ring, one methyl, three in the isopropyl group: ten.\nStep 2: Ten carbons is two isoprene units, so a monoterpenoid.\nStep 3: Trace the units: the methyl-bearing ring carbon with its two ring neighbours and the next carbon is one C5 unit; the isopropyl-bearing carbon with its branch and the remaining ring carbons is the other.\nStep 4: The OH and the lack of double bonds do not change the classification; they make menthol a terpenoid alcohol rather than a terpene hydrocarbon.",
      "note": "McMurry 27.5 (Terpenoids) states that all terpenoids contain a multiple of five carbons and derive biosynthetically from isopentenyl diphosphate, that formally a terpenoid contains oxygen while a hydrocarbon is a terpene but the text uses terpenoid for both, and that monoterpenoids contain ten carbons from two isopentenyl diphosphates; Figure 27.7 shows representative terpenoids and the Chapter 8 Chemistry Matters introduced the isoprene rule. Menthol's three stereocentres are those of the natural (-)-(1R,2S,5R) isomer, and its equatorial OH is a matter of conformation (4.7), not of steroid structure.",
      "options": {
        "A": "Correct. Ten carbons in two isoprene units is a monoterpenoid; the hydroxyl makes it a terpenoid rather than a terpene.",
        "B": "Fifteen carbons would need three isoprene units; menthol has ten. Farnesol and the sesquiterpene lactones are C15.",
        "C": "Oxygen and saturation are irrelevant to the definition: the family is defined by the C5-unit skeleton. Menthol, geraniol and camphor are all oxygenated terpenoids; a saturated one is still a terpenoid.",
        "D": "A steroid has four fused rings and seventeen skeletal carbons. Menthol has a single ring and ten carbons; an equatorial OH on a cyclohexane is not diagnostic of anything but conformation."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q21_mevalonate_claisen",
    "topic": "Terpenoids",
    "difficulty_level": "Medium",
    "question_text": "The mevalonate pathway builds isopentenyl diphosphate from three molecules of acetyl CoA. Which step is a Claisen condensation?",
    "options": [
      {
        "option_id": "A",
        "text": "The first: two acetyl CoA units combine to give acetoacetyl CoA, the enolate of one attacking the thioester carbonyl of the other",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The second: acetyl CoA adds to acetoacetyl CoA to give 3-hydroxy-3-methylglutaryl CoA",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The third: HMG-CoA is reduced to mevalonate by NADPH",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The last: mevalonate 5-diphosphate loses CO2 and phosphate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The mevalonate pathway opens with the two carbonyl condensations of Chapter 23 in sequence. A Claisen condensation joins an enolate to an ester (here a thioester) carbonyl with loss of the alkoxide (here CoA thiolate), producing a beta-keto thioester: acetyl CoA plus acetyl CoA gives acetoacetyl CoA. An aldol addition joins an enolate to a ketone carbonyl and keeps the resulting alcohol: acetyl CoA plus the ketone of acetoacetyl CoA gives the tertiary alcohol HMG-CoA. The difference is the fate of the carbonyl attacked: substitution (Claisen, C=O regenerated with loss of a leaving group) versus addition (aldol, C-OH formed).",
      "approach": "Step 1: Step one: an acetyl group is first transferred to an enzyme cysteine as a thioester; the enolate of a second acetyl CoA attacks it and CoAS- (the enzyme thiolate) is expelled: a Claisen condensation giving CH3COCH2COSCoA.\nStep 2: Step two: the enolate of a third acetyl CoA adds to the ketone carbonyl of acetoacetyl CoA; no leaving group is lost, the alkoxide is protonated: an aldol addition giving (3S)-HMG-CoA.\nStep 3: Step three: NADPH reduces the thioester of HMG-CoA through an aldehyde to a primary alcohol, mevalonate.\nStep 4: Steps four to six: two phosphorylations by ATP, then phosphorylation of the tertiary OH and loss of phosphate and CO2 to give IPP.",
      "note": "McMurry 27.5 (Terpenoids), Figure 27.8, presents the mevalonate pathway: step 1 is a Claisen condensation to acetoacetyl CoA catalysed by acetoacetyl-CoA acetyltransferase (an acetyl group first bound to an enzyme cysteine, then enolate formation from a second acetyl CoA and Claisen condensation); step 2 an aldol-like addition of an acetyl CoA enolate to give (3S)-3-hydroxy-3-methylglutaryl CoA; step 3 reduction by HMG-CoA reductase with two NADPH via an aldehyde to (R)-mevalonate; step 4 phosphorylations and decarboxylation. The Claisen condensation is McMurry 23.7 and the aldol reaction 23.1.",
      "options": {
        "A": "Correct. Enolate plus thioester carbonyl with loss of the thiolate is a Claisen condensation, and its product acetoacetyl CoA is a beta-keto thioester.",
        "B": "Formation of HMG-CoA is an aldol-like addition: the enolate attacks a ketone and the alkoxide is kept as the tertiary alcohol of HMG-CoA. No leaving group departs.",
        "C": "The HMG-CoA reductase step is a reduction, hydride transfer from NADPH to the thioester and then to the aldehyde. It forms no carbon-carbon bond.",
        "D": "The final step is a decarboxylation through a tertiary carbocation, an elimination, not a condensation."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q22_hmg_coa_reductase",
    "topic": "Terpenoids",
    "difficulty_level": "Hard",
    "question_text": "HMG-CoA reductase, the target of the statin drugs, converts 3-hydroxy-3-methylglutaryl CoA into mevalonate. What does the enzyme do chemically?",
    "options": [
      {
        "option_id": "A",
        "text": "It reduces the thioester to a primary alcohol with two equivalents of NADPH: hydride addition expels CoA-SH to give an aldehyde, which a second hydride reduces",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It hydrolyses the thioester to the free dicarboxylic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It reduces the tertiary alcohol to a methyl group",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It decarboxylates the free carboxylate with loss of CO2",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Mevalonate differs from HMG-CoA at one carbon: the thioester CO-SCoA has become CH2OH. That is a four-electron reduction, two hydrides, and NADPH supplies both. The first is a nucleophilic acyl substitution: hydride adds to the thioester carbonyl and the tetrahedral intermediate expels CoA thiolate, leaving an aldehyde (mevaldehyde). The second is a nucleophilic addition: hydride adds to the aldehyde to give the primary alcohol. The carboxylate at the other end and the tertiary alcohol are untouched. Because this is the rate-limiting, committed step of cholesterol biosynthesis, its inhibition by statins lowers cholesterol production.",
      "approach": "Step 1: Compare substrate and product: HMG-CoA is -O2C-CH2-C(OH)(CH3)-CH2-CO-SCoA; mevalonate is -O2C-CH2-C(OH)(CH3)-CH2-CH2OH. Only the thioester carbon changes, from C(=O)S to CH2OH.\nStep 2: First NADPH: hydride to the thioester carbonyl, collapse of the tetrahedral intermediate with loss of HSCoA: the aldehyde.\nStep 3: Second NADPH: hydride to the aldehyde carbonyl, protonation: the primary alcohol.\nStep 4: Two NADPH consumed, (R)-mevalonate formed with the stereocentre at C3 unchanged.",
      "note": "McMurry 27.5 (Terpenoids), step 3 of Figure 27.8, states that reduction of HMG-CoA to (R)-mevalonate is catalysed by 3-hydroxy-3-methylglutaryl-CoA reductase, requires two equivalents of NADPH (19.12), and occurs in two steps through an aldehyde intermediate: a nucleophilic acyl substitution involving hydride transfer from NADPH to the thioester carbonyl with expulsion of HSCoA, then a second hydride addition to the aldehyde. The statins' inhibition of this enzyme is lecture material, not in the text.",
      "options": {
        "A": "Correct. Two hydride transfers from NADPH take the thioester through the aldehyde to the primary alcohol of mevalonate, with loss of coenzyme A.",
        "B": "Hydrolysis would give the diacid (3-hydroxy-3-methylglutaric acid), not mevalonate, and would not consume NADPH. The enzyme is a reductase.",
        "C": "The tertiary alcohol at C3 survives into mevalonate (it is later phosphorylated and lost as phosphate in the decarboxylation step). It is the thioester that is reduced.",
        "D": "Decarboxylation happens three steps later, on mevalonate 5-diphosphate, and needs the tertiary phosphate as a leaving group. The reductase forms mevalonate with both carbons of its acid end intact."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q23_mevalonate_decarboxylation",
    "topic": "Terpenoids",
    "difficulty_level": "Hard",
    "question_text": "Carboxylic acids do not usually lose CO2 unless they are beta-keto or malonic acids, yet mevalonate 5-diphosphate decarboxylates to isopentenyl diphosphate. What makes that possible?",
    "options": [
      {
        "option_id": "A",
        "text": "Its tertiary OH is first phosphorylated by ATP; loss of phosphate gives a tertiary carbocation beta to the carboxylate, which accepts the electrons released as CO2 leaves, just as a beta carbonyl would",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The diphosphate group is an electron-withdrawing group that stabilises the carbanion formed on decarboxylation",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The enzyme oxidises the tertiary alcohol to a ketone, making a beta-keto acid that decarboxylates",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The carboxylate is first converted to an acyl phosphate, which loses CO2 spontaneously",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A beta-keto acid decarboxylates because the electrons left behind when CO2 departs flow into the carbonyl group two atoms away, giving an enolate rather than a naked carbanion. Mevalonate has no carbonyl in that position; it has a tertiary alcohol, and the enzyme turns that alcohol into an equivalent electron sink. ATP phosphorylates the tertiary OH, the tertiary phosphate ionises in an SN1-like step to a tertiary carbocation, and that positive centre, beta to the carboxylate, pulls the electrons of the C-CO2 bond into a new C=C as CO2 leaves. The result is the terminal alkene of isopentenyl diphosphate, with the 5-diphosphate untouched.",
      "approach": "Step 1: Phosphorylate the tertiary C3 hydroxyl with ATP: a tertiary phosphate, a good leaving group.\nStep 2: Loss of phosphate ion gives a tertiary carbocation at C3.\nStep 3: The C4-CO2 bond breaks with the electrons moving toward the cation: C3=C4 forms and CO2 leaves, in the same way the electrons of a beta-keto acid move into its carbonyl.\nStep 4: The product is isopentenyl diphosphate, CH2=C(CH3)CH2CH2OPP; the diphosphate at C5 is a spectator here and the leaving group in the later couplings.",
      "note": "McMurry 27.5 (Terpenoids), step 4 of Figure 27.8, states that the decarboxylation of mevalonate 5-diphosphate seems unusual because acids decarboxylate only when a beta carbonyl is present to act as an electron acceptor (22.7), but that the substrate is first phosphorylated on its free OH by ATP to give a tertiary phosphate, which undergoes spontaneous SN1-like dissociation to a tertiary carbocation, and the positive charge then acts as the electron acceptor to facilitate decarboxylation in the same way a beta carbonyl group does, giving isopentenyl diphosphate. Problem 27-6 asks which hydrogen ends up cis to the methyl.",
      "options": {
        "A": "Correct. Phosphorylation makes the tertiary OH a leaving group, the cation it leaves behind is the electron acceptor, and decarboxylation gives the alkene of IPP.",
        "B": "The diphosphate is at C5, three atoms from the carboxyl carbon, and cannot stabilise a carbanion at C4; nor does decarboxylation here form a carbanion. The electron acceptor is the C3 cation.",
        "C": "No oxidation occurs and no ketone forms; the C3 methyl and oxygen would not permit a ketone there anyway (C3 is fully substituted). The alcohol is phosphorylated, not oxidised.",
        "D": "Acyl phosphates are activated acids that undergo acyl substitution, not decarboxylation. The carboxylate is lost as CO2 directly once the cation is in place."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q24_ipp_to_dmapp",
    "topic": "Terpenoids",
    "difficulty_level": "Medium",
    "question_text": "Before terpenoid assembly begins, isopentenyl diphosphate (IPP) is isomerised to dimethylallyl diphosphate (DMAPP). How does the isomerase do it?",
    "options": [
      {
        "option_id": "A",
        "text": "An enzyme cysteine protonates the terminal alkene to give a tertiary carbocation, and a glutamate removes a proton from the adjacent methyl to give the trisubstituted alkene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A hydride shifts from C2 to C4 in a concerted 1,3 migration",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The diphosphate leaves to give an allylic cation that recaptures phosphate at the other end",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The alkene is epoxidised and the epoxide opened to move the double bond",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "IPP has a terminal 1,1-disubstituted alkene; DMAPP has the same carbons with the double bond moved one position inward, trisubstituted and allylic to the diphosphate. Moving an alkene by one carbon is a protonation-deprotonation sequence through the more stable carbocation: adding H+ to the CH2 end of IPP's alkene gives the tertiary cation at C3, and removing a proton from the C3 methyl (a different hydrogen from the one added) puts the double bond between C2 and C3. The enzyme supplies the acid (a cysteine SH, hydrogen-bonded to make it acidic enough) and the base (a glutamate carboxylate), and holds the cation in a deep pocket away from water so it is not simply trapped as an alcohol.",
      "approach": "Step 1: Protonate IPP's terminal alkene at the CH2 carbon (Markovnikov), giving the tertiary carbocation (CH3)2C+CH2CH2OPP.\nStep 2: The glutamate base removes a proton from one of the methyl groups.\nStep 3: The electrons form the new double bond between the former cation carbon and that methyl carbon: (CH3)2C=CHCH2OPP, DMAPP.\nStep 4: The diphosphate is untouched; in DMAPP it is now allylic, which is what makes DMAPP the electrophilic partner in the next step.",
      "note": "McMurry 27.5 (Terpenoids) states that the isomerisation of isopentenyl diphosphate to dimethylallyl diphosphate is catalysed by IPP isomerase and occurs through a carbocation pathway: protonation of the IPP double bond by a hydrogen-bonded cysteine residue gives a tertiary carbocation intermediate, which is deprotonated by a glutamate residue as base to yield DMAPP, and that X-ray studies show the enzyme holds the substrate in an unusually deep, well-protected pocket to shield the highly reactive carbocation from solvent. Alkene protonation and carbocation stability are McMurry 7.8 and 7.9.",
      "options": {
        "A": "Correct. Protonation to the tertiary cation and deprotonation at the methyl relocate the double bond from terminal to internal, giving the allylic diphosphate DMAPP.",
        "B": "A concerted 1,3-hydride shift is not the pathway; the text describes a stepwise carbocation route with an acid and a base residue. Suprafacial 1,3 shifts of hydrogen are also symmetry-forbidden thermally.",
        "C": "IPP's diphosphate is not allylic and does not ionise readily; and losing and recapturing phosphate would leave the double bond where it was. The isomerase moves the alkene, not the diphosphate.",
        "D": "No oxidation is involved; epoxidation is the chemistry of squalene epoxidase much later in the pathway. Isomerisation here is acid-base catalysis alone."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q25_gpp_formation",
    "topic": "Terpenoids",
    "difficulty_level": "Hard",
    "question_text": "Farnesyl diphosphate synthase couples dimethylallyl diphosphate (DMAPP) with isopentenyl diphosphate (IPP) to give geranyl diphosphate (C10). In that coupling, which partner is the electrophile and what is the leaving group?",
    "options": [
      {
        "option_id": "A",
        "text": "DMAPP is the electrophile: its allylic diphosphate ionises in an SN1-like step to an allylic cation, which the IPP double bond attacks; diphosphate ion is the leaving group",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "IPP is the electrophile: its diphosphate leaves to give a primary cation that DMAPP's alkene attacks",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Neither ionises: the two alkenes undergo a concerted [2+2] cycloaddition and the ring opens",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "DMAPP's methyl group is deprotonated to a carbanion that displaces IPP's diphosphate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Chain building in the terpenoid pathway is repeated electrophilic addition of an allylic cation to an alkene. DMAPP has a diphosphate on an allylic carbon, so with Mg2+ to assist, it ionises to a resonance-stabilised allylic cation. IPP's terminal alkene is the nucleophile: its CH2 attacks the cation's CH2 end, forming the new C-C bond and a tertiary carbocation on the IPP half, which then loses a proton to give the trisubstituted E alkene of geranyl diphosphate. IPP's own diphosphate is untouched and is now the allylic diphosphate of GPP, ready to ionise for the next coupling with another IPP to give farnesyl diphosphate.",
      "approach": "Step 1: Identify which diphosphate is allylic: DMAPP's, so it can leave to give a stabilised allylic cation; IPP's is homoallylic and stays put.\nStep 2: DMAPP loses PPi (with Mg2+) to the allylic cation, the electrophile.\nStep 3: IPP's C=C attacks the cation's primary carbon; the new bond forms between DMAPP's C1 and IPP's C4, leaving a tertiary cation at IPP's C3.\nStep 4: Loss of a proton from the carbon next to that cation gives the E double bond of GPP, with IPP's diphosphate now allylic for the next round.",
      "note": "McMurry 27.5 (Terpenoids) states that both the coupling of DMAPP with IPP to give geranyl diphosphate and the coupling of GPP with a second IPP to give farnesyl diphosphate are catalysed by farnesyl diphosphate synthase, require Mg2+, and have as their key step a nucleophilic substitution in which the double bond of IPP behaves as a nucleophile in displacing diphosphate ion from DMAPP, the DMAPP developing considerable cationic character with spontaneous SN1-like dissociation of the allylic diphosphate probably occurring (Figure 27.10). Allylic cations are McMurry 11.5 and electrophilic addition to alkenes McMurry 7.7.",
      "options": {
        "A": "Correct. The allylic diphosphate of DMAPP ionises to an allylic cation that IPP's alkene attacks, with diphosphate ion as the leaving group.",
        "B": "IPP's diphosphate is not allylic and would give an unstabilised primary cation, which does not form. IPP is the nucleophile in every coupling; it is DMAPP (and later GPP) that ionises.",
        "C": "Thermal [2+2] cycloadditions between two alkenes are forbidden, and no cyclobutane is involved. The coupling is a cationic, stepwise electrophilic addition.",
        "D": "A methyl C-H is far too weakly acidic for any enzyme base, and a carbanion has no role here. The reactive intermediate is a cation, not an anion."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q26_squalene_from_fpp",
    "topic": "Terpenoids",
    "difficulty_level": "Medium",
    "question_text": "Squalene (C30) is the precursor of lanosterol and the steroids. How is it assembled from the C5 building blocks?",
    "options": [
      {
        "option_id": "A",
        "text": "Two farnesyl diphosphates (C15, each from DMAPP plus two IPP) are joined tail to tail in a reductive dimerisation",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Six IPP units add one after another in head-to-tail couplings",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Geranyl diphosphate (C10) and geranylgeranyl diphosphate (C20) are coupled head to tail",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Three geranyl diphosphates (C10) trimerise around a cyclohexane ring that is later opened",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Head-to-tail couplings of IPP onto an allylic diphosphate build chains only as far as C25. The larger terpenoids are made by joining two of these chains at their tails: two farnesyl diphosphates (C15) give squalene (C30), and two geranylgeranyl diphosphates (C20) give the tetraterpene phytoene, the parent of beta-carotene (C40). The squalene coupling is reductive, NADPH supplying hydride, so the product is a hydrocarbon with no diphosphate left; the join in the middle of squalene is tail to tail, visible as the unbranched central four-carbon stretch between the two mirror-image C15 halves.",
      "approach": "Step 1: Build farnesyl diphosphate: DMAPP + IPP gives GPP (C10); GPP + IPP gives FPP (C15).\nStep 2: Squalene synthase joins two FPP molecules tail to tail (C1 to C1), with loss of both diphosphates and a hydride from NADPH: the reductive dimerisation.\nStep 3: The product is the symmetric C30 hexaene squalene, all E.\nStep 4: The same tail-to-tail logic makes C40 carotenoids from two C20 units; head-to-tail additions alone never pass C25.",
      "note": "McMurry 27.5 (Terpenoids) states that combination of GPP with another IPP gives the C15 unit farnesyl diphosphate and so on up to C25, that terpenoids with more than 25 carbons, the triterpenoids (C30) and tetraterpenoids (C40), are synthesised by dimerisation of C15 and C20 units respectively (Figure 27.9), and that triterpenoids and steroids in particular arise from dimerisation of farnesyl diphosphate to give squalene; McMurry 27.7 calls it a reductive dimerisation and takes squalene on to lanosterol.",
      "options": {
        "A": "Correct. Two C15 farnesyl units, each already assembled head to tail, are joined tail to tail with reduction to give the symmetric C30 squalene.",
        "B": "Sequential head-to-tail additions would give an unsymmetrical chain that stops at C25 in practice, and would leave a diphosphate on the product. Squalene's symmetric, diphosphate-free structure shows the tail-to-tail dimerisation.",
        "C": "C10 plus C20 gives thirty carbons, but that is not the biosynthetic route; the chain would carry a diphosphate and lack squalene's central symmetry. Two C15 units is the real pairing.",
        "D": "No cyclic intermediate is involved in squalene formation; it is an open-chain hydrocarbon made from two open-chain C15 units. Cyclisation comes later, on oxidosqualene."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q27_gpp_to_lpp",
    "topic": "Terpenoids",
    "difficulty_level": "Hard",
    "question_text": "Monoterpene cyclases first isomerise geranyl diphosphate (GPP) to linalyl diphosphate (LPP) before cyclising it to limonene. Why is that isomerisation needed?",
    "options": [
      {
        "option_id": "A",
        "text": "GPP's C2-C3 double bond is E and rigid, holding the chain extended; in LPP that bond is single, so the chain can fold and its terminal double bond can reach the allylic cation",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "LPP has a better leaving group than GPP",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The isomerisation adds the carbon needed to make a six-membered ring",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "GPP's diphosphate is on a tertiary carbon and cannot ionise",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Cyclisation to a six-membered ring needs the C1 cation and the C6-C7 alkene of the geranyl chain to meet, and GPP cannot fold that way: its C2-C3 bond is a trans double bond that keeps C1 pointing away from the tail. The cyclase solves this with an allylic rearrangement. GPP ionises to the allylic cation, and diphosphate recombines at the other end (C3) to give linalyl diphosphate, a tertiary allylic diphosphate in which C2-C3 is now a single bond. Rotation about that bond folds the chain, and when LPP ionises in turn the allylic cation is delivered to the C6-C7 double bond to close the ring. The cyclic cation then loses a proton to give limonene or is captured by water to give alpha-terpineol.",
      "approach": "Step 1: GPP ionises (SN1-like) to a resonance-stabilised allylic cation spanning C1 and C3.\nStep 2: Diphosphate returns at C3: linalyl diphosphate, with a C1-C2 double bond and a single C2-C3 bond.\nStep 3: The chain rotates about C2-C3 so that C1 lies over the C6-C7 alkene, and the geometry of the C1-C2 alkene can also equilibrate.\nStep 4: LPP ionises again; the C6-C7 double bond attacks C1, forming the ring and a tertiary cation at C7 (the alpha-terpinyl cation), the branch point to limonene and alpha-terpineol.",
      "note": "McMurry 27.5 (Terpenoids) states that monoterpene cyclases function by first isomerising geranyl diphosphate to its allylic isomer linalyl diphosphate by spontaneous SN1-like dissociation to an allylic carbocation followed by recombination, that the effect is to convert the C2-C3 double bond of GPP into a single bond, making cyclisation possible and allowing E/Z isomerisation of the double bond, and that further dissociation and cyclisation by electrophilic addition of the cationic carbon to the terminal double bond gives a cyclic cation that may rearrange, hydride-shift, be captured or be deprotonated; limonene's pathway is Figure 27.11 and alpha-terpineol the worked example.",
      "options": {
        "A": "Correct. The allylic transposition turns the rigid trans C2-C3 double bond into a rotatable single bond, so the chain can fold for ring closure.",
        "B": "Both are diphosphates on allylic carbons, and GPP ionises perfectly well (that is how LPP forms). The point of LPP is conformational freedom, not leaving-group ability.",
        "C": "No carbon is added; GPP and LPP are both C10 isomers. The ten carbons already include the six needed for the ring.",
        "D": "GPP's diphosphate is on a primary allylic carbon and ionises readily. It is LPP whose diphosphate is tertiary, and it ionises too; neither is blocked."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q28_limonene_vs_terpineol",
    "topic": "Terpenoids",
    "difficulty_level": "Medium",
    "question_text": "Cyclisation of linalyl diphosphate gives a tertiary cyclohexyl cation from which both limonene (a hydrocarbon) and alpha-terpineol (an alcohol) are formed. What distinguishes the two outcomes?",
    "options": [
      {
        "option_id": "A",
        "text": "The cation loses a proton from an adjacent carbon to give limonene's isopropenyl double bond, or is captured by water at the cationic carbon to give alpha-terpineol's tertiary alcohol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Limonene forms from geranyl diphosphate and alpha-terpineol from neryl diphosphate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Alpha-terpineol is formed by hydration of limonene's ring double bond",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Limonene forms by loss of the diphosphate as an ether; alpha-terpineol by its hydrolysis",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carbocation has a few fates, and terpene cyclases exploit all of them: loss of a proton to an alkene, capture by a nucleophile, a hydride or alkyl shift, or a further cyclisation. The alpha-terpinyl cation, formed when the folded linalyl chain closes its six-membered ring, carries its positive charge on the tertiary carbon of the isopropyl branch. Deprotonation at the branch's methyl gives the exocyclic isopropenyl group of limonene (an E1-type elimination); attack of water at the cationic carbon gives the tertiary alcohol alpha-terpineol (an SN1-type substitution). Which occurs is decided by the enzyme, and hundreds of monoterpenoids arise from such choices on a handful of cations.",
      "approach": "Step 1: Form the common intermediate: LPP ionises, the C6-C7 alkene attacks C1, and the ring closes to leave a tertiary cation on the exocyclic C(CH3)2 carbon.\nStep 2: Path to limonene: a base removes a proton from one of the two methyls on the cationic carbon, forming the C=CH2 of the isopropenyl group.\nStep 3: Path to alpha-terpineol: water adds to the cationic carbon and loses a proton, giving C(CH3)2OH.\nStep 4: Both products keep the ring's trisubstituted double bond, which was GPP's C6-C7 alkene relocated during cyclisation; they differ only at the branch.",
      "note": "McMurry 27.5 (Terpenoids) states that the cyclic cation from geranyl (linalyl) diphosphate might either rearrange, undergo a hydride shift, be captured by a nucleophile, or be deprotonated to give any of the several hundred known monoterpenoids, gives limonene's formation from geranyl diphosphate in Figure 27.11, and works alpha-terpineol as its example: draw the precursor in a conformation approximating the target, carry out a cationic cyclisation using the double bond to displace diphosphate, and since the target is an alcohol let the carbocation react with water. Problem 27-7 asks for two more pathways. Carbocation fates are McMurry 11.4 and 11.10.",
      "options": {
        "A": "Correct. One cation, two exits: deprotonation gives the alkene of limonene, capture by water gives the alcohol of alpha-terpineol.",
        "B": "Both come from the same folded linalyl cation; neryl diphosphate is the Z isomer of GPP and is not required for either. The branch point is after cyclisation, not before.",
        "C": "Hydration of limonene's ring alkene would put the OH on the ring, not on the branch. Alpha-terpineol's OH is on the isopropyl carbon, where the cation was, and limonene keeps its ring double bond.",
        "D": "The diphosphate has already left when the cation forms; it plays no part in the last step. Neither product contains diphosphate or an ether."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q29_ring_fusions",
    "topic": "Steroids",
    "difficulty_level": "Medium",
    "question_text": "The four rings of a steroid are lettered A to D. Which ring fusions are trans in almost all steroids, and which can be either cis or trans?",
    "options": [
      {
        "option_id": "A",
        "text": "B/C and C/D are almost always trans; A/B can be cis or trans",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A/B and B/C are always trans; C/D is always cis because ring D is five-membered",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "All three fusions are always cis, which is what makes the rings unable to flip",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A/B is always trans; B/C and C/D vary from steroid to steroid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When two rings share an edge, the two ring-junction (angular) substituents can be on the same side (cis fusion, as in cis-decalin) or on opposite sides (trans fusion, as in trans-decalin). A trans-fused decalin is rigid: neither ring can flip without breaking a bond. In steroids the B/C and C/D junctions are trans in nearly every natural compound, which locks rings B, C and D. The A/B junction is the variable one: trans in the common hormones and in cholesterol's saturated relatives, cis in the bile acids such as lithocholic acid, and absent altogether in cholesterol, whose C5-C6 double bond sits at that junction. The overall shape (flat for A/B trans, bent for A/B cis) is what receptors recognise.",
      "approach": "Step 1: Locate the three junctions: A/B (C5 and C10), B/C (C8 and C9), C/D (C13 and C14).\nStep 2: B/C and C/D: trans, with the angular substituents (the C18 methyl at C13, H at C14, H at C8 and H at C9) alternating faces.\nStep 3: A/B: the 5-alpha-H series is trans (flat molecule), the 5-beta-H series is cis (bent, the bile acids).\nStep 4: Because trans-fused six-membered rings cannot flip, every substituent on a steroid has a fixed axial or equatorial identity; cholesterol's 3-OH is equatorial.",
      "note": "McMurry 27.6 (Steroids) states that two cyclohexane rings can be joined cis (both angular groups on the same side, cis-decalin) or trans (opposite sides, trans-decalin), that steroids can have either a cis or a trans fusion of the A and B rings but the other ring fusions (B-C and C-D) are usually trans (Figure 27.12), that the three six-membered rings adopt chairs that cannot ring-flip, and that equatorial substitution is generally favoured, cholesterol's hydroxyl being equatorial. Problem 27-9 concerns lithocholic acid, an A-B cis steroid found in bile. Decalin conformations are McMurry 4.9.",
      "options": {
        "A": "Correct. The B/C and C/D junctions are trans in virtually all steroids; the A/B junction is the one that comes in both cis and trans versions.",
        "B": "The C/D junction is trans in natural steroids despite the five-membered ring D. It is A/B, not C/D, that varies.",
        "C": "The rings cannot flip because they are trans-fused, not cis-fused; a cis-decalin can in fact flip. Steroids are mostly trans at every junction.",
        "D": "This inverts the pattern. A/B is the variable junction (cis in bile acids, trans in most hormones); B/C and C/D are the fixed, trans ones."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q30_rigid_rings_equatorial_oh",
    "topic": "Steroids",
    "difficulty_level": "Medium",
    "question_text": "The C3 hydroxyl of cholesterol is equatorial. Why is there no chair conformer in which it is axial, as there is for cyclohexanol?",
    "options": [
      {
        "option_id": "A",
        "text": "Ring A is fused to ring B through a rigid junction, so it cannot ring-flip; each substituent is locked as axial or equatorial, and cholesterol has the OH on the equatorial position",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The hydroxyl is hydrogen-bonded to the C19 methyl group, which holds it equatorial",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ring A is planar in steroids, so axial and equatorial do not apply",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The C5-C6 double bond makes ring A aromatic, and aromatic rings have no axial positions",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Cyclohexanol's two chairs interconvert, so its OH spends most of its time equatorial but is sometimes axial. A steroid's six-membered rings are chairs too, but they are fused to their neighbours, and a fused ring system cannot flip one ring without flipping the others; with trans fusions, no flipped chair is geometrically possible at all. Every substituent is therefore fixed. Nature places cholesterol's 3-OH in the equatorial position of that fixed chair (the 3-beta orientation), which is also the more stable one sterically; its epimer with an axial OH would be a different compound, not a conformer.",
      "approach": "Step 1: Recall the cyclohexane rule: a ring flip exchanges axial and equatorial positions, and a substituent prefers equatorial.\nStep 2: In a steroid, ring A shares C5 and C10 with ring B; flipping A would require flipping B, and the trans-fused B/C and C/D system forbids it.\nStep 3: With the chair fixed, the C3 position that points along the ring's equator is the one cholesterol's OH occupies (3-beta, equatorial).\nStep 4: The 5,6 double bond of cholesterol flattens C5 and C6 slightly but does not free ring A to flip; ring A remains a chair anchored to the rigid B/C/D core.",
      "note": "McMurry 27.6 (Steroids) states that the three six-membered rings (A, B and C) adopt chair conformations but are prevented by their rigid geometry from undergoing the usual cyclohexane ring-flips (4.6), that substituents on the steroid ring system can be axial or equatorial with equatorial generally more favourable for steric reasons, and that the hydroxyl group of cholesterol has the more stable equatorial orientation; Problems 27-8 and 27-9 ask for chair drawings with substituents labelled axial or equatorial.",
      "options": {
        "A": "Correct. Fused, trans-locked rings cannot flip, so the OH stays where the structure puts it, on the equatorial position of the rigid A-ring chair.",
        "B": "The C19 methyl is on C10, across the ring from C3 and on the opposite face; it is not hydrogen-bonded to the OH. The rigidity comes from the ring fusions, not from a hydrogen bond.",
        "C": "Ring A is a chair, not planar; only in the estrogens, where ring A is a benzene ring, is it flat. Axial and equatorial positions are well defined on cholesterol's ring A.",
        "D": "One double bond does not make a ring aromatic, and cholesterol's C5=C6 bond lies at the A/B junction rather than making ring A a benzene. The estrogens are the steroids with an aromatic A ring."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q31_estradiol_drawn",
    "topic": "Steroids",
    "difficulty_level": "Medium",
    "question_text": "The steroid hormone shown was isolated from ovaries. To which class does it belong, and what structural feature identifies it?",
    "question_smiles": "C[C@]12CC[C@H]3[C@H]([C@@H]1CC[C@@H]2O)CCC4=C3C=CC(=C4)O",
    "structure_alt": "A four-ring steroid skeleton in which the first six-membered ring is a benzene ring carrying an OH, there is a single angular methyl group at the C/D junction, and the five-membered ring carries an OH; stereochemistry shown at five centres.",
    "options": [
      {
        "option_id": "A",
        "text": "An estrogen (estradiol): ring A is aromatic, carrying a phenolic OH, and there is no C19 angular methyl",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "An androgen (testosterone): ring A carries a conjugated ketone and there are two angular methyls",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A progestin (progesterone): ring D carries an acetyl group",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A glucocorticoid (hydrocortisone): the side chain is a hydroxy ketone and C11 bears an OH",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The classes of steroid hormone are read from their functional groups. Estrogens (estradiol, estrone) are unique in having an aromatic ring A: a benzene ring bearing a phenolic OH at C3, and because the ring is aromatic the C10 angular methyl (C19) is absent, leaving eighteen carbons. Androgens such as testosterone keep the C19 methyl and have an alpha,beta-unsaturated ketone in ring A (3-keto-4-ene) with a 17-OH; progesterone has that same enone but an acetyl group at C17; the corticoids add oxygen at C11 and a hydroxyacetyl side chain at C17. The drawn compound has the aromatic ring, the phenol, a single angular methyl and a 17-OH: estradiol.",
      "approach": "Step 1: Look at ring A: three double bonds in a six-membered ring, a benzene, with an OH on it. Aromatic ring A is the estrogen signature.\nStep 2: Count angular methyls: one (C18 at C13). No C19 at C10, as required by the aromatic ring: estrogens are C18 steroids.\nStep 3: Look at C17: a hydroxyl, so estradiol rather than estrone (which has a ketone there).\nStep 4: Confirm the biology: made in the ovaries from testosterone by aromatisation of ring A with loss of C19; responsible for female secondary sex characteristics.",
      "note": "McMurry 27.6 (Steroids) states that estrone and estradiol are the two most important female sex hormones (estrogens), synthesised in the ovaries from testosterone and responsible for female secondary sex characteristics and regulation of the menstrual cycle, and notes that both have a benzene-like aromatic A ring; testosterone and androsterone are the androgens, progesterone the most important progestin, and aldosterone and hydrocortisone the adrenocortical mineralocorticoid and glucocorticoid. The synthetic estrogen ethynylestradiol keeps the aromatic A ring.",
      "options": {
        "A": "Correct. An aromatic ring A with a phenol, one angular methyl and a 17-OH is estradiol, an estrogen.",
        "B": "Testosterone's ring A is a cyclohexenone, not a benzene, and testosterone has two angular methyls (C18 and C19). The drawn ring A is aromatic and only one methyl is present.",
        "C": "Progesterone carries an acetyl (COCH3) at C17 and an enone in ring A. The drawn compound has a hydroxyl at C17 and an aromatic ring A.",
        "D": "Hydrocortisone has a C11 hydroxyl, a C17 hydroxyacetyl side chain and a ring A enone. None of those is present; the drawn ring A is a phenol."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q32_squalene_epoxidation",
    "topic": "Biosynthesis of Steroids",
    "difficulty_level": "Medium",
    "question_text": "Lanosterol biosynthesis begins with a reaction of squalene. What is it, and what does it resemble in the laboratory?",
    "options": [
      {
        "option_id": "A",
        "text": "Selective epoxidation of the terminal 2,3 double bond to (3S)-2,3-oxidosqualene by a flavin hydroperoxide, the biological counterpart of peroxyacid epoxidation of an alkene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Protonation of the terminal double bond to a tertiary carbocation, like acid-catalysed alkene hydration",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Allylic oxidation of the terminal methyl to an alcohol, like SeO2 oxidation",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ozonolysis of the terminal double bond to an aldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The cation cascade that folds squalene into four rings needs a starting electrophile at one end of the chain, and nature installs it as an epoxide. Squalene epoxidase uses O2, NADPH and a flavin (FAD) cofactor: FADH2 reacts with O2 to give a flavin hydroperoxide, R-O-O-H, and the nucleophilic 2,3 double bond of squalene attacks the terminal oxygen of that hydroperoxide, taking one oxygen atom to form the epoxide and leaving the flavin alcohol. That is the same mechanism by which a peroxyacid epoxidises an alkene in the laboratory: the alkene attacks the electrophilic O-O terminus. The epoxide is made on one enantiotopic face only, giving (3S)-2,3-oxidosqualene, and its oxygen becomes the 3-OH of lanosterol and cholesterol.",
      "approach": "Step 1: Identify the reagents: O2 as the oxygen source, NADPH as the reductant, FAD as the carrier.\nStep 2: FADH2 + O2 gives the flavin hydroperoxide, an electrophilic oxygen donor like RCO3H.\nStep 3: The 2,3 double bond of squalene attacks the terminal hydroperoxide oxygen; the O-O bond breaks and the epoxide closes: (3S)-2,3-oxidosqualene.\nStep 4: The flavin alcohol loses water to FAD, which NADPH reduces back to FADH2 for the next turnover. The epoxide oxygen is the future C3 oxygen of every steroid.",
      "note": "McMurry 27.7 (Biosynthesis of Steroids) states that lanosterol biosynthesis begins with the selective epoxidation of squalene to give (3S)-2,3-oxidosqualene, catalysed by squalene epoxidase, that molecular O2 provides the epoxide oxygen with NADPH and a flavin coenzyme required, that the proposed mechanism involves reaction of FADH2 with O2 to give a flavin hydroperoxide which transfers an oxygen to squalene through nucleophilic attack of the double bond on the terminal hydroperoxide oxygen (Figure 27.14), and that this is closely analogous to the way peroxyacids react with alkenes to give epoxides (8.7).",
      "options": {
        "A": "Correct. A flavin hydroperoxide delivers one oxygen to the 2,3 alkene, exactly as a peroxyacid does, giving the (3S) epoxide that starts the cascade.",
        "B": "Protonation would start a cation cascade with no oxygen in it, and the product would lack the 3-OH that every sterol has. The cascade is started by protonating the epoxide, which must be made first.",
        "C": "No allylic alcohol is formed; the oxygen ends up on C3 of the chain, inside a three-membered ring. Allylic oxidation is not part of sterol biosynthesis.",
        "D": "Ozonolysis cleaves the double bond and would shorten the chain by three carbons. Squalene keeps all thirty carbons into lanosterol; the double bond is epoxidised, not cleaved."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q33_cascade_initiation",
    "topic": "Biosynthesis of Steroids",
    "difficulty_level": "Hard",
    "question_text": "Oxidosqualene-lanosterol cyclase folds 2,3-oxidosqualene and closes four rings. What starts the cascade, and what is the first cation formed?",
    "options": [
      {
        "option_id": "A",
        "text": "An aspartic acid residue protonates the epoxide, and the nearby 5,10 double bond opens it, giving a tertiary carbocation at C10 (steroid numbering) with the new OH on C3",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The epoxide is opened by hydroxide to a diol, which then dehydrates to a cation",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A histidine residue removes a proton from C9 to give a carbanion that attacks the epoxide",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The terminal double bond is protonated to a tertiary cation, and the epoxide is untouched until the end",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The cyclase does electrophilic addition to alkenes, four times over, using the substrate's own double bonds as nucleophiles and a single protonation as the trigger. The epoxide is the first electrophile: once protonated it opens at its more substituted carbon (C4 in steroid numbering, the carbon carrying the two methyls) as the 5,10 double bond attacks it, forming the C4-C5 bond. Ring A closes with the C3 hydroxyl left behind, and a tertiary cation sits at C10. That cation is attacked by the 8,9 double bond to close ring B, and so on: each cyclisation consumes one alkene and creates the next cation, until the protosteryl cation with four rings is reached.",
      "approach": "Step 1: Aspartate delivers H+ to the epoxide oxygen, making it a leaving group.\nStep 2: The 5,10 double bond (steroid numbering) attacks the epoxide carbon; the C-O bond breaks, the oxygen stays on C3 as OH, and ring A forms.\nStep 3: The positive charge is now at C10, a tertiary carbon: the first cation of the cascade.\nStep 4: C10+ adds to the 8,9 double bond (ring B, tertiary cation at C8); the third cyclisation then proceeds with non-Markovnikov regiochemistry to C13, and the fourth closes ring D to the protosteryl cation.",
      "note": "McMurry 27.7 (Biosynthesis of Steroids), Figure 27.15, states that cyclisation begins in step 1 with protonation of the epoxide ring by an aspartic acid residue in the enzyme, that nucleophilic opening of the protonated epoxide by the nearby 5,10 double bond (steroid numbering, 27.6) yields a tertiary carbocation at C10, and that further addition of C10 to the 8,9 double bond in step 2 gives a bicyclic tertiary cation at C8; squalene is folded by the enzyme into a conformation that aligns the double bonds for a cascade of successive intramolecular electrophilic additions with discrete carbocation intermediates stabilised by electron-rich aromatic residues. Epoxide opening under acid is McMurry 18.6.",
      "options": {
        "A": "Correct. Protonation of the epoxide by aspartate and its opening by the 5,10 alkene close ring A and leave the tertiary C10 cation that drives the rest.",
        "B": "Hydroxide opening would give a 2,3-diol and no cation; the enzyme is acidic at this site, not basic, and the product retains one oxygen as the 3-OH, not two.",
        "C": "The cascade is cationic throughout; no carbanion is involved. Histidine's role comes at the very end, removing the C9 proton after the rearrangements to give lanosterol.",
        "D": "The epoxide, not a double bond, is the trigger: its oxygen becomes the 3-OH found in lanosterol and cholesterol. Protonating an alkene would give a sterol without that oxygen."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q34_non_markovnikov_cyclisation",
    "topic": "Biosynthesis of Steroids",
    "difficulty_level": "Hard",
    "question_text": "The third cyclisation in lanosterol biosynthesis, which closes ring C, is described as unusual. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "It proceeds with non-Markovnikov regiochemistry, giving a secondary cation at C13 rather than the tertiary cation at C14 that Markovnikov addition would give; the tertiary cation may form first and rearrange",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It forms a four-membered ring that later expands",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It is a radical rather than a cationic cyclisation",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It requires a second molecule of oxidosqualene as the nucleophile",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Electrophilic addition of a cation to an alkene normally bonds the cation to the less substituted alkene carbon so that the new positive charge lands on the more substituted one (Markovnikov). The first two cyclisations obey that rule and give tertiary cations at C10 and C8. The third does not: the C8 cation adds to the 13,14 double bond in the sense that puts the new charge on C13, a secondary carbon, rather than on the tertiary C14. A secondary cation is the less stable choice, so either the enzyme's aromatic residues stabilise it, or the tertiary C14 cation forms first and a shift moves the charge to C13. The choice matters because the C13 cation is the one that closes ring D onto the 17,20 alkene to give the protosteryl cation.",
      "approach": "Step 1: Step 2 leaves a tertiary cation at C8 after ring B closes.\nStep 2: Markovnikov attack on the 13,14 alkene would bond C8 to C13 and put the cation on C14 (tertiary); the observed product has the C8-C14 bond and the cation on C13 (secondary).\nStep 3: That anti-Markovnikov outcome is what the six-membered ring C requires; a five-membered ring would result otherwise.\nStep 4: The C13 cation then adds to the 17,20 double bond (Markovnikov again) to close ring D, giving the tertiary protosteryl cation at C20.",
      "note": "McMurry 27.7 (Biosynthesis of Steroids), step 3 of Figure 27.15, states that the third cationic cyclisation is somewhat unusual because it occurs with non-Markovnikov regiochemistry and gives a secondary cation at C13 rather than the alternative tertiary cation at C14, that there is growing evidence the tertiary carbocation may in fact be formed initially with the secondary cation arising by subsequent rearrangement, and that the secondary cation is probably stabilised in the enzyme pocket by the proximity of an electron-rich aromatic ring. Markovnikov's rule is McMurry 7.8.",
      "options": {
        "A": "Correct. Ring C closes with the cation on the secondary C13 instead of the tertiary C14, against Markovnikov's rule, possibly by way of the tertiary cation.",
        "B": "No four-membered ring is formed at any stage; the cascade closes three six-membered rings and one five-membered ring directly.",
        "C": "The whole cascade is cationic, initiated by protonation of the epoxide; no radical intermediates are involved. The oddity is regiochemistry, not mechanism type.",
        "D": "The cyclisation is intramolecular: every nucleophile is a double bond of the same folded chain. One molecule of oxidosqualene gives one lanosterol."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q35_rearrangements_to_lanosterol",
    "topic": "Biosynthesis of Steroids",
    "difficulty_level": "Hard",
    "question_text": "After the protosteryl cation has formed, what sequence of events converts it into lanosterol?",
    "options": [
      {
        "option_id": "A",
        "text": "Two 1,2-hydride shifts (C17 to C20, then C13 to C17) and two 1,2-methyl shifts (C14 to C13, then C8 to C14) move the charge to C8, and a histidine removes the C9 proton to form the 8,9 double bond",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Water captures the cation at C20 and the alcohol is later dehydrated",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A single methyl shift from C10 to C9 followed by loss of a proton",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The three extra methyl groups are lost as CO2 to give cholesterol directly",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The cyclisation cascade delivers the right four rings but the wrong arrangement of hydrogens and methyls, with the cation at C20 in the side chain. The enzyme fixes this with a relay of 1,2 shifts, each moving the positive charge one carbon along a chain of adjacent atoms: a hydride moves from C17 to C20 (setting the R configuration at C20), a hydride from C13 to C17 (restoring the beta side chain), a methyl from C14 to C13 (on the beta face), and a methyl from C8 to C14 (on the alpha face). The charge is then at C8, and a basic histidine removes the neighbouring proton from C9 to give the trisubstituted 8,9 double bond of lanosterol. These shifts are ordinary carbocation rearrangements, four in a row, each to a cation of similar stability, held in order by the enzyme.",
      "approach": "Step 1: Protosteryl cation, charge at C20 (tertiary), side chain beta at C17.\nStep 2: H from C17 shifts to C20: charge to C17. H from C13 shifts to C17 (alpha face): charge to C13.\nStep 3: CH3 from C14 shifts to C13 (beta face): charge to C14. CH3 from C8 shifts to C14 (alpha face): charge to C8.\nStep 4: His removes the 9-beta hydrogen: C8=C9 double bond, lanosterol. Lanosterol still has three methyls (two at C4, one at C14) that cholesterol lacks; those are removed later.",
      "note": "McMurry 27.7 (Biosynthesis of Steroids), steps 5 to 9 of Figure 27.15, states that once the tetracyclic skeleton has formed a series of carbocation rearrangements (7.11) occur: hydride migration from C17 to C20 establishing R stereochemistry at C20, a second hydride migration from C13 to C17 on the alpha face reestablishing the 17-beta side chain, then two methyl migrations, from C14 to C13 on the beta face and from C8 to C14 on the alpha face, placing the positive charge at C8, after which a basic histidine residue removes the neighbouring beta proton from C9 to give lanosterol. The text summarises the whole squalene-to-lanosterol process as six C-C bonds, four rings and seven chirality centres from two enzymes.",
      "options": {
        "A": "Correct. Two hydride shifts and two methyl shifts walk the charge from C20 to C8, and deprotonation at C9 finishes lanosterol.",
        "B": "Capture by water would give a C20 alcohol, which is not on the pathway; lanosterol's only oxygen is the 3-OH from the epoxide, and the side chain is a hydrocarbon.",
        "C": "There is no C10-to-C9 methyl shift; the C10 methyl (C19) stays put and is still present in cholesterol. The shifts are on C14, C13 and C8 (methyls) and C17, C13 (hydrides), four of them.",
        "D": "The loss of lanosterol's three extra methyls happens after lanosterol is formed, over many further enzymatic steps, and they leave as CO2 only after oxidation; the cation rearrangements themselves remove nothing."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch27_q36_lanosterol_to_cholesterol",
    "topic": "Biosynthesis of Steroids",
    "difficulty_level": "Medium",
    "question_text": "Lanosterol (C30) is converted into cholesterol (C27) by a further series of enzymatic steps. What changes are needed?",
    "options": [
      {
        "option_id": "A",
        "text": "Removal of the two methyls at C4 and the methyl at C14, migration of the ring double bond from C8-C9 to C5-C6, and reduction of the side-chain 24,25 double bond",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Removal of the two angular methyls at C10 and C13 and oxidation of the 3-OH to a ketone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cleavage of the side chain to leave a C17 ketone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Aromatisation of ring A with loss of the C19 methyl",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Lanosterol already has cholesterol's four rings, its 3-beta-OH and its C8 side chain, but it carries three methyl groups that cholesterol does not (a gem-dimethyl at C4 and a methyl at C14), its ring double bond is at C8-C9 instead of C5-C6, and its side chain has a 24,25 double bond that cholesterol lacks. Getting from one to the other takes about nineteen enzymatic steps: each extra methyl is oxidised to a carboxylic acid and lost as CO2, the ring alkene is moved in stages through the 8(9) to 7 to 5,7-diene to the 5-ene, and the side-chain alkene is hydrogenated. The angular methyls C18 (on C13) and C19 (on C10) are kept; they are present in cholesterol and in every steroid except the estrogens, which lose C19 when ring A becomes aromatic.",
      "approach": "Step 1: Count carbons: lanosterol C30, cholesterol C27, so three carbons must go; they are the three non-angular methyls (two on C4, one on C14), removed by oxidation to CO2H and decarboxylation.\nStep 2: Compare the ring double bonds: 8,9 in lanosterol, 5,6 in cholesterol; the alkene is relocated.\nStep 3: Compare the side chains: lanosterol's has a trisubstituted 24,25 double bond; cholesterol's is saturated; that alkene is reduced.\nStep 4: What stays: the 3-beta-OH, the C18 and C19 angular methyls, the trans B/C and C/D fusions, and the eight stereocentres shared by both.",
      "note": "McMurry 27.7 (Biosynthesis of Steroids) states that from lanosterol the pathway continues to cholesterol, which then becomes the branch point from which all other steroids are derived, and sets Problem 27-10: compare the structures of lanosterol and cholesterol and catalogue the changes needed for the transformation. Figure 27.13 gives the overview from farnesyl diphosphate. The nineteen-step count and the intermediates (lanosterol to zymosterol to desmosterol) are lecture material, not in the text.",
      "options": {
        "A": "Correct. Three methyls off (C4, C4, C14), the ring alkene moved from 8,9 to 5,6, and the side-chain alkene reduced turn lanosterol into cholesterol.",
        "B": "C18 and C19 are kept; cholesterol still has both angular methyls, and its 3-OH stays a secondary alcohol. The methyls removed are the ones at C4 and C14.",
        "C": "Cholesterol keeps the full C8 side chain (that is where its C27 count comes from). Side-chain cleavage to a C17 ketone is a later step, on the way to the C19 and C21 hormones such as testosterone and progesterone.",
        "D": "Aromatising ring A with loss of C19 is the conversion of testosterone into estradiol, far downstream. Cholesterol's ring A is a chair with the 5,6 double bond at the A/B junction."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  }
];
