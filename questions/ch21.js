// OChemStudyBuddy - McMurry Chapter 21
// Author: A. Elangovan, PhD
var CH21_QUESTIONS = [
  {
    "question_id": "ch21_q_dynamic_acyl_substitution",
    "topic": "Nucleophilic Acyl Substitution Reactions",
    "difficulty_level": "Medium",
    "question_text": "Rank the four carboxylic acid derivatives by reactivity toward nucleophilic acyl substitution, 1 being the most reactive and 4 the least.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(=O)Cl",
        "correctAnswer": "1 (most reactive)",
        "alt": "A methyl group on a carbon that carries a double-bonded oxygen and a chlorine."
      },
      {
        "smiles": "CC(=O)OC(C)=O",
        "correctAnswer": "2",
        "alt": "Two acetyl groups, each a methyl on a C=O, joined through a single oxygen atom."
      },
      {
        "smiles": "CC(=O)OC",
        "correctAnswer": "3",
        "alt": "A methyl group on a carbon that carries a double-bonded oxygen and an OCH3 group."
      },
      {
        "smiles": "CC(=O)N",
        "correctAnswer": "4 (least reactive)",
        "alt": "A methyl group on a carbon that carries a double-bonded oxygen and an NH2 group."
      }
    ],
    "match_options": [
      "1 (most reactive)",
      "2",
      "3",
      "4 (least reactive)"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All ranked correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "At least one derivative in the wrong place",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Nucleophilic acyl substitution starts with addition of the nucleophile to the carbonyl carbon, and that addition is usually the rate-limiting step, so whatever makes the carbonyl carbon more electrophilic makes the derivative more reactive. The group Y in RC(=O)Y decides it. Chlorine withdraws electrons inductively and donates almost nothing by resonance, so an acid chloride has the most positive carbonyl carbon. An acyloxy group is next. Alkoxy and especially amino groups push electron density into the carbonyl by resonance, the way they activate a benzene ring, so esters are less reactive and amides the least.",
      "approach": "Step 1: Acetyl chloride: Cl is strongly electron-withdrawing with negligible resonance donation, and chloride is an excellent leaving group. Rank 1.\nStep 2: Acetic anhydride: the acyloxy group withdraws by induction and its resonance donation is shared between two carbonyls; acetate is a good leaving group. Rank 2.\nStep 3: Methyl acetate: the OCH3 oxygen donates a lone pair into the carbonyl by resonance, lowering its electrophilicity; methoxide is a poorer leaving group. Rank 3.\nStep 4: Acetamide: nitrogen is less electronegative than oxygen and donates by resonance far more strongly, so the carbonyl is the least electrophilic and NH2- the worst leaving group. Rank 4.",
      "note": "McMurry 21.2 (Nucleophilic Acyl Substitution Reactions) gives the full order as acid chloride > acid anhydride > thioester > ester > amide, notes that acyl phosphates sit somewhere above thioesters in biology, and draws the consequence in Figure 21.3: a more reactive derivative can be converted directly into a less reactive one, never the reverse. The same electronic argument recurs in 21.10: the electron-withdrawing Cl shortens the C=O and raises its IR frequency to 1810, while resonance donation from nitrogen lengthens the amide C=O and lowers it toward 1650.",
      "options": {
        "A": "Correct. Inductive withdrawal (Cl) makes the most electrophilic carbonyl; resonance donation from oxygen and, more strongly, nitrogen makes the ester and then the amide progressively less reactive.",
        "B": "One or more rows is out of order. Ask two things of the group on the carbonyl: does it pull electrons out (Cl) or push them in by resonance (OR, NR2), and how good an anion does it make as it leaves? Cl- is excellent, RCO2- good, RO- fair, NH2- very poor."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q1_fischer_esterification_scheme",
    "topic": "Reactions of Carboxylic Acids",
    "difficulty_level": "Easy",
    "question_text": "Acetic acid is heated with a large excess of ethanol containing a little concentrated H2SO4. What is the major organic product?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCO"
      ],
      "reagents": "H2SO4 (cat.)",
      "conditions": "heat, excess ethanol",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A methyl group attached to a CO2H group: acetic acid.",
        "A two-carbon chain ending in an OH group: ethanol."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Ethyl acetate",
        "smiles": "CCOC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetic anhydride",
        "smiles": "CC(=O)OC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Diethyl ether",
        "smiles": "CCOCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,1-Diethoxyethane",
        "smiles": "CCOC(C)OCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carboxylic acid is too weak an electrophile for an alcohol to attack on its own, and its OH is a poor leaving group. A trace of strong acid fixes both: protonating the carbonyl oxygen makes the carbon far more electrophilic, the alcohol adds to give a tetrahedral intermediate, a proton moves to one of the two OH groups, and that group leaves as water. The net result is that OR' has replaced OH, and every step is reversible with an equilibrium constant near 1, so the ester is favoured only if the alcohol is present in large excess or the water is removed.",
      "approach": "Step 1: H2SO4 protonates the carbonyl oxygen of acetic acid, giving a resonance-stabilised cation with a highly electrophilic carbon.\nStep 2: Ethanol's oxygen adds to that carbon; loss of a proton gives the tetrahedral intermediate CH3C(OH)2(OEt).\nStep 3: One OH is protonated and leaves as water; loss of a proton from the remaining oxygen regenerates the C=O.\nStep 4: The product is CH3C(=O)OCH2CH3, ethyl acetate, with water as the by-product; excess ethanol drives the equilibrium toward it.",
      "note": "McMurry 21.3 (Reactions of Carboxylic Acids) gives the Fischer esterification mechanism in Figure 21.5 and its two practical facts: the equilibrium constant is close to 1, so ester formation needs a large excess of alcohol (or removal of water) and hydrolysis needs a large excess of water; and because the alcohol must serve as the solvent, the method is effectively limited to methyl, ethyl, propyl and butyl esters. The 18O experiment described there shows that the acid's C-OH bond breaks, not the alcohol's C-O bond.",
      "options": {
        "A": "Correct. Acid-catalysed nucleophilic acyl substitution replaces the acid's OH with OCH2CH3; excess ethanol pushes the equilibrium to the ester.",
        "B": "Acetic anhydride is two acetic acid molecules minus water, and heating acetic acid alone at high temperature can give it. With ethanol present as solvent, the alcohol is the nucleophile that captures the activated acid, and the ester forms instead.",
        "C": "Diethyl ether is what two ethanol molecules give under H2SO4 at about 140 °C with no carboxylic acid present. Here the protonated carboxylic acid is a far better electrophile than a protonated alcohol, so ethanol is consumed making the ester.",
        "D": "1,1-Diethoxyethane is the acetal of acetaldehyde with two ethanols. A carboxylic acid carbon carries an OH that leaves after the first alcohol adds, regenerating a C=O; it does not accept a second alcohol the way an aldehyde does."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q4_saponification_scheme",
    "topic": "Chemistry of Esters",
    "difficulty_level": "Easy",
    "question_text": "Ethyl acetate is heated with aqueous NaOH until the ester layer disappears, and the solution is then acidified with HCl. What are the organic products?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O"
      ],
      "reagents": "1. NaOH, H2O, heat; 2. H3O+",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A methyl group on a carbon that carries a double-bonded oxygen and an OCH2CH3 group: ethyl acetate."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Acetic acid and ethanol",
        "smiles": "CC(=O)O.CCO",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Sodium acetate and ethanol",
        "smiles": "CC(=O)[O-].[Na+].CCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Propanoic acid and methanol",
        "smiles": "CCC(=O)O.CO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acetic acid and ethene",
        "smiles": "CC(=O)O.C=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Base-promoted ester hydrolysis, saponification, is a nucleophilic acyl substitution: hydroxide adds to the ester carbonyl to give a tetrahedral alkoxide, which expels the alkoxide ion to give the carboxylic acid. That acid is immediately deprotonated by the alkoxide or hydroxide present, so the species in the flask at the end of the heating are the carboxylate salt and the alcohol, and the reaction is irreversible because the carboxylate is inert to alkoxide. A separate acidification step protonates the carboxylate to the free acid.",
      "approach": "Step 1: Hydroxide adds to the carbonyl carbon of ethyl acetate: tetrahedral intermediate CH3C(O-)(OH)(OEt).\nStep 2: The intermediate collapses, expelling ethoxide and regenerating the C=O: acetic acid + EtO-.\nStep 3: Ethoxide (or hydroxide) deprotonates acetic acid: sodium acetate + ethanol, which is what the alkaline solution contains.\nStep 4: HCl protonates the acetate: acetic acid and ethanol are the final organic products. The ester's acyl group becomes the acid and its alkoxy group becomes the alcohol.",
      "note": "McMurry 21.6 (Chemistry of Esters) gives the mechanism in Figure 21.8 and the 18O evidence: ethyl propanoate labelled at its ether-type oxygen puts all of the label into the ethanol, so the bond that breaks is the acyl C-O, not the ethyl C-O. The word comes from sapo, soap, because boiling fat with base hydrolyses its ester links (27.2). Problem 21-16 asks why the reaction is irreversible: alkoxide cannot esterify a carboxylate anion.",
      "options": {
        "A": "Correct. Saponification gives acetate and ethanol; the acidification step named in the reagents turns acetate into acetic acid.",
        "B": "Sodium acetate and ethanol are indeed what the alkaline solution holds after step 1, but the question includes step 2, acidification with HCl, which protonates the acetate. The free acid is the final product.",
        "C": "Propanoic acid and methanol come from reading the ester's name backwards. Ethyl acetate is the ethyl ester of acetic acid: the acyl group (two carbons) becomes acetic acid and the alkyl group on oxygen (two carbons) becomes ethanol.",
        "D": "Ethene would require hydroxide to act as a base on the ethyl group in an E2 elimination. Hydroxide attacks the far more electrophilic carbonyl carbon instead, and the ethyl group leaves intact as ethoxide."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q2_roadmap_oxidation_esterification",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Medium",
    "question_text": "Examine the following synthetic pathway from propan-1-ol. Determine the correct compounds matching labels B and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "alt": "A three-carbon chain ending in an OH group: propan-1-ol, drawn as compound A.",
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
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "CrO3, H2SO4, H2O (Jones)"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "propan-1-ol (excess), H2SO4 (cat.), heat"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "B: propanoic acid, C: propyl propanoate",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "B: propanal, C: 1,1-dipropoxypropane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "B: propanoic acid, C: dipropyl ether",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "B: propanoic acid, C: propanoic anhydride",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two reactions from two chapters make an ester out of one alcohol. Aqueous chromic acid oxidises a primary alcohol past the aldehyde to the carboxylic acid, because the aldehyde hydrate formed in water is itself oxidised. Then Fischer esterification joins that acid to a second molecule of the same alcohol under acid catalysis: the protonated acid is attacked by the alcohol, and water leaves. Both halves of the ester therefore come from propan-1-ol, one oxidised and one not.",
      "approach": "Step 1: A + Jones reagent (CrO3 in aqueous H2SO4): propan-1-ol is oxidised to propanal, which as its hydrate is oxidised further. B is propanoic acid, CH3CH2CO2H.\nStep 2: B + excess propan-1-ol, catalytic H2SO4, heat: Fischer esterification. The alcohol adds to the protonated acid and water is lost.\nStep 3: C is propyl propanoate, CH3CH2C(=O)OCH2CH2CH3, six carbons, three from each molecule of the alcohol.\nStep 4: Check the alternatives: an ether would need two alcohols and no acid; an anhydride would need two acids and high heat; an acetal would need the aldehyde, which chromic acid does not leave behind.",
      "note": "McMurry 21.3 (Reactions of Carboxylic Acids) gives Fischer esterification and its limit to small alcohols used as solvent; the oxidation is McMurry 17.7 (Oxidation of Alcohols), where the text notes that a primary alcohol goes to the acid with chromic acid in aqueous solution. The Ch 17 pass records the same point as the reason Jones reagent gives acids while Dess-Martin periodinane stops at the aldehyde.",
      "options": {
        "A": "Correct. Chromic acid oxidises the primary alcohol to propanoic acid; Fischer esterification with more propan-1-ol gives propyl propanoate.",
        "B": "Propanal is the intermediate oxidation level, but aqueous chromic acid does not stop there: the aldehyde's hydrate is oxidised on to the acid. Only an anhydrous, mild oxidant such as Dess-Martin periodinane leaves the aldehyde for an acetal to form from.",
        "C": "Dipropyl ether is the acid-catalysed condensation of two alcohols with each other, which needs no carboxylic acid. With propanoic acid present, the protonated acid is the electrophile the alcohol attacks, and the ester forms.",
        "D": "Propanoic anhydride would need two molecules of the acid to condense with loss of water, which requires high temperature and no alcohol. In excess propan-1-ol the alcohol captures the activated acid first."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q16_roadmap_ester_branches",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following synthetic pathway from methyl benzoate. Compound A is converted into B, into C and into D by three different reagent sets. Determine the correct compounds matching labels B, C and D.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "COC(=O)c1ccccc1",
          "label": "Compound A",
          "alt": "A benzene ring bearing a carbon that carries a double-bonded oxygen and an OCH3 group: methyl benzoate, drawn as compound A.",
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
          "x": 2,
          "y": 2
        },
        {
          "id": "D",
          "smiles": "",
          "label": "Compound D",
          "x": 2,
          "y": 3
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "1. LiAlH4 (excess), ether; 2. H2O"
        },
        {
          "from": "A",
          "to": "C",
          "reagents": "1. DIBAH (1 equiv), toluene, -78 °C; 2. H2O"
        },
        {
          "from": "A",
          "to": "D",
          "reagents": "1. CH3MgBr (2 equiv), ether; 2. H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "B: benzyl alcohol (plus methanol), C: benzaldehyde, D: 2-phenylpropan-2-ol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "B: benzaldehyde, C: benzyl alcohol, D: 2-phenylpropan-2-ol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "B: benzyl alcohol, C: benzaldehyde, D: acetophenone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "B: benzyl alcohol, C: benzaldehyde, D: 1-phenylethan-1-ol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Every nucleophile that attacks an ester goes through the same two stages: addition to give a tetrahedral intermediate, then loss of the alkoxide to give an aldehyde or ketone. What happens next depends on the nucleophile and the conditions. Excess LiAlH4 reduces the aldehyde at once, so the ester ends as a primary alcohol. One equivalent of the bulky, less reactive DIBAH at -78 °C stops at the aldehyde. Two equivalents of a Grignard reagent add once to give a ketone and again to give a tertiary alcohol carrying two identical groups, and the ketone cannot be isolated because the second addition is faster than the first.",
      "approach": "Step 1: A + excess LiAlH4: hydride adds, methoxide leaves, benzaldehyde forms and is reduced immediately; water gives B, benzyl alcohol, PhCH2OH, with methanol as the by-product.\nStep 2: A + one DIBAH at -78 °C: hydride adds and methoxide leaves, but the aluminium-bound intermediate is stable at that temperature and no second hydride is available; hydrolysis gives C, benzaldehyde, PhCHO.\nStep 3: A + two CH3MgBr: the first methyl adds and methoxide leaves to give acetophenone; the second methyl adds to the ketone; acid work-up gives D, 2-phenylpropan-2-ol, PhC(CH3)2OH.\nStep 4: Check the group count in D: two identical methyls from the Grignard, one phenyl from the ester, as the text says for ester + 2 RMgX.",
      "note": "McMurry 21.6 (Chemistry of Esters) gives all three: LiAlH4 reduction to primary alcohols through an aldehyde that is reduced further; isolation of that aldehyde with one equivalent of DIBAH at -78 °C; and reaction with two equivalents of Grignard reagent to give a tertiary alcohol with two identical substituents via an intermediate ketone. Problem 21-18 asks for LiAlH4 products and Problem 21-19 for ester/Grignard pairs. The original version of this roadmap used PCC for its last step; PCC is not in this OpenStax edition, and the chemistry now stays inside Ch 21.",
      "options": {
        "A": "Correct. Excess LiAlH4 gives the primary alcohol, one DIBAH at low temperature gives the aldehyde, and two Grignard equivalents give the tertiary alcohol.",
        "B": "The two hydride reagents are swapped. LiAlH4 in excess never leaves an aldehyde behind, because the aldehyde is reduced faster than the ester; it is DIBAH, bulky and used as one equivalent at -78 °C, that stops there.",
        "C": "Acetophenone is the ketone intermediate of the Grignard branch, but it cannot be isolated: the second equivalent of CH3MgBr adds to it faster than the first added to the ester. With two equivalents the product is the tertiary alcohol. A ketone from an acyl compound needs an acid chloride and a Gilman reagent (21.4).",
        "D": "1-Phenylethan-1-ol would need one methyl and one hydride to add to the same carbon. The Grignard branch has no hydride: after the first methyl adds and methoxide leaves, the ketone takes a second methyl, giving a tertiary alcohol with two methyls."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q20_naming_methylbutanoyl_chloride",
    "topic": "Naming Carboxylic Acid Derivatives",
    "difficulty_level": "Easy",
    "question_text": "What is the IUPAC name of the compound shown?",
    "question_smiles": "CC(C)CC(=O)Cl",
    "structure_alt": "A four-carbon chain ending in a carbon that carries a double-bonded oxygen and a chlorine, with a methyl branch on the carbon next to the far end.",
    "options": [
      {
        "option_id": "A",
        "text": "3-Methylbutanoyl chloride",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Methylbutanoyl chloride",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-Methylbutanyl chloride",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Chloro-3-methylbutan-1-one",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An acid halide is named as an acyl group followed by the halide. The acyl group takes the acid's name with -oic acid replaced by -oyl (or -carboxylic acid by -carbonyl on a ring), and the acyl carbon is C1, so the chain is numbered from it exactly as for the parent acid. Eight small acids keep an -yl acyl name by IUPAC exception (formyl, acetyl, propionyl, butyryl, oxalyl, malonyl, succinyl, glutaryl); a five-carbon branched acid is not one of them, so the ending is -oyl.",
      "approach": "Step 1: Identify the parent acid: the chain containing the C(=O)Cl carbon is four carbons long, with a methyl on the third, so the acid is 3-methylbutanoic acid.\nStep 2: Replace -oic acid with -oyl to name the acyl group: 3-methylbutanoyl.\nStep 3: Add the halide as a separate word: 3-methylbutanoyl chloride.\nStep 4: Confirm the numbering runs from the acyl carbon as C1, which puts the methyl on C3, not C2.",
      "note": "McMurry 21.1 (Naming Carboxylic Acid Derivatives) gives the acyl-plus-halide rule and lists the eight -yl exceptions; Problem 21-2(c) asks for 2,4-dimethylpentanoyl chloride and 21-2(h) for cis-2-methylcyclopentanecarbonyl bromide, the ring form. The compound here is the acid chloride of isovaleric acid, the same skeleton as Ch 20's 3-methylbutanoic acid item; SOCl2 makes it from the acid (21.3).",
      "options": {
        "A": "Correct. Acid 3-methylbutanoic acid, acyl group 3-methylbutanoyl, halide chloride.",
        "B": "2-Methylbutanoyl chloride numbers the chain from the wrong end. The acyl carbon is C1 by rule, and counted from it the methyl branch sits on C3.",
        "C": "The right molecule under the wrong ending: -anyl is not an acyl suffix. An acyl group derived from an -oic acid is named -oyl, so the group is 3-methylbutanoyl. Only the eight retained common names (acetyl, butyryl and so on) end in -yl.",
        "D": "The right molecule under the wrong class name: a chlorine on a carbonyl carbon makes the compound an acid chloride, not a chloro ketone, and a ketone cannot have its carbonyl at C1. The derivative is named as acyl + halide."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q21_structure_n_ethyl_n_methylbutanamide",
    "topic": "Naming Carboxylic Acid Derivatives",
    "difficulty_level": "Medium",
    "question_text": "Which structure is N-ethyl-N-methylbutanamide?",
    "options": [
      {
        "option_id": "A",
        "text": "Structure A",
        "smiles": "CCCC(=O)N(C)CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Structure B",
        "smiles": "CCC(=O)N(C)CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Structure C",
        "smiles": "CCCC(=O)NCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Structure D",
        "smiles": "CCC(C)C(=O)NCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An amide is named from its parent acid with -oic acid replaced by -amide, and groups on the nitrogen are cited as prefixes with the locant N to say they are on nitrogen rather than on a chain carbon. So N-ethyl-N-methylbutanamide has a four-carbon acyl group (butanamide, C1 being the carbonyl carbon) and a nitrogen carrying an ethyl and a methyl. Each N in the name is a locant, and a name with two N locants describes a tertiary amide.",
      "approach": "Step 1: Parent: butanamide, CH3CH2CH2C(=O)NH2, four carbons including the carbonyl.\nStep 2: Substituents: N-ethyl and N-methyl, both on nitrogen, replacing both N-H hydrogens.\nStep 3: Assemble: CH3CH2CH2C(=O)N(CH3)CH2CH3, structure A.\nStep 4: Check the distractors for what they change: B shortens the acyl chain to three carbons; C drops the N-methyl; D moves the methyl from nitrogen to C2 of the chain.",
      "note": "McMurry 21.1 (Naming Carboxylic Acid Derivatives) states the N-prefix rule and sets this exact compound as Problem 21-2(b). The N locant matters in reactions as well as names: an N,N-disubstituted (tertiary) amide has no N-H, so its IR shows no N-H stretch and its carbonyl sits lowest in the amide range, near 1650 (Table 21.3), and it cannot be dehydrated to a nitrile (20.7).",
      "options": {
        "A": "Correct. A butanoyl group on a nitrogen that carries one ethyl and one methyl.",
        "B": "Structure B is N-ethyl-N-methylpropanamide: its acyl chain has three carbons. Butanamide requires four, counting the carbonyl carbon as C1.",
        "C": "Structure C is N-ethylbutanamide. The name calls for two groups on nitrogen; this nitrogen still carries a hydrogen where the methyl should be.",
        "D": "Structure D is N-ethyl-2-methylbutanamide: the methyl is on C2 of the chain instead of on nitrogen. The locant N, not a number, places a substituent on the nitrogen atom."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q22_naming_mixed_anhydride",
    "topic": "Naming Carboxylic Acid Derivatives",
    "difficulty_level": "Medium",
    "question_text": "What is the IUPAC name of the compound shown?",
    "question_smiles": "CC(=O)OC(=O)CC",
    "structure_alt": "Two acyl groups joined through a single oxygen: on one side a methyl on a C=O, on the other an ethyl on a C=O.",
    "options": [
      {
        "option_id": "A",
        "text": "Acetic propanoic anhydride",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propanoic acetic anhydride",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propanoic anhydride",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An acid anhydride is two acyl groups sharing one oxygen, formally two acids minus one water. A symmetrical anhydride is named by replacing acid with anhydride in the parent acid's name. An unsymmetrical (mixed) anhydride, made from two different acids, names both acids in alphabetical order and then adds anhydride. It is not an ester, even though it contains an acyl-O-C unit, because the carbon on the far side of that oxygen is itself a carbonyl carbon.",
      "approach": "Step 1: Identify the two acyl halves: CH3C(=O)- from acetic acid and CH3CH2C(=O)- from propanoic acid.\nStep 2: The halves differ, so this is an unsymmetrical anhydride and both acid names appear.\nStep 3: Order them alphabetically: acetic before propanoic.\nStep 4: Add the class word: acetic propanoic anhydride.",
      "note": "McMurry 21.1 (Naming Carboxylic Acid Derivatives) gives both rules, symmetrical and unsymmetrical, and Problem 21-2(g) asks for formic propanoic anhydride. Mixed anhydrides matter in 21.3 and 21.8: an acyl adenylate, the biological activated form of a carboxylic acid, is a mixed anhydride of the acid with adenosine monophosphate, and acyl phosphates are named the same way as acyl + phosphate.",
      "options": {
        "A": "Correct. Two different acyl groups on one oxygen, both acids named in alphabetical order, then anhydride.",
        "B": "The right molecule with the acids in the wrong order: an unsymmetrical anhydride lists its two acids alphabetically, so acetic comes before propanoic.",
        "C": "Acetyl propanoate treats the compound as an ester, with acetyl as an alkyl group on oxygen. An ester's oxygen carries an alkyl carbon; here it carries a second carbonyl carbon, which makes the compound an anhydride.",
        "D": "Propanoic anhydride is the symmetrical anhydride, CH3CH2C(=O)OC(=O)CH2CH3, with two propanoyl groups. The drawn compound has one acetyl and one propanoyl group."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q23_naming_thioester",
    "topic": "Naming Carboxylic Acid Derivatives",
    "difficulty_level": "Medium",
    "question_text": "What is the name of the compound shown?",
    "question_smiles": "CCCC(=O)SC",
    "structure_alt": "A three-carbon chain attached to a carbon that carries a double-bonded oxygen and a sulfur atom; the sulfur carries a methyl group.",
    "options": [
      {
        "option_id": "A",
        "text": "Methyl butanethioate",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methyl butanoate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Butanoyl methyl sulfide",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyl 1-thiobutanoate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A thioester is an ester in which the single-bonded oxygen has been replaced by sulfur, RC(=O)SR'. It is named like the ester: the group on sulfur first, then the acid part. For a systematic acid name the -oate ending becomes -thioate (butanoate to butanethioate; cyclohexanecarboxylate to cyclohexanecarbothioate). For an acid with a retained common name the prefix thio- is added instead: acetate becomes thioacetate. Sulfur's position is fixed by the class name, so no locant is used.",
      "approach": "Step 1: Identify the acyl part: CH3CH2CH2C(=O)-, from butanoic acid, so the ester name would be butanoate.\nStep 2: The heteroatom on the acyl carbon is sulfur, not oxygen: a thioester, and -oate becomes -thioate: butanethioate.\nStep 3: Identify the group on sulfur: methyl.\nStep 4: Assemble as for an ester, alkyl first: methyl butanethioate.",
      "note": "McMurry 21.1 (Naming Carboxylic Acid Derivatives) gives both thioester conventions and sets methyl p-bromobenzenethioate as Problem 21-2(f). Thioesters are the acyl derivatives biology actually uses (21.8): acetyl CoA is a thioacetate, reactive enough for acyl substitution but stable to water, sitting between anhydrides and esters in the reactivity order of 21.2.",
      "options": {
        "A": "Correct. The sulfur analogue of methyl butanoate: alkyl group on sulfur first, then the acid name with -oate changed to -thioate.",
        "B": "Methyl butanoate is the ordinary ester, with oxygen in place of the sulfur. It is a different compound; the ester's IR carbonyl is near 1735, the thioester's lower, and their reactivities differ.",
        "C": "Naming the compound as a sulfide treats the acyl group as an alkyl group on sulfur. A sulfide is R-S-R' with two carbon groups that are not carbonyl carbons; a C(=O)-S unit is a thioester and is named as one.",
        "D": "The right molecule with an invented locant: sulfur in a thioester is always on the acyl carbon, so no number is needed, and the systematic ending is -thioate on the alkane stem (butanethioate), not thio- placed before an -oate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q24_naming_cyclohexanecarboxamide",
    "topic": "Naming Carboxylic Acid Derivatives",
    "difficulty_level": "Easy",
    "question_text": "What is the IUPAC name of the compound shown?",
    "question_smiles": "NC(=O)C1CCCCC1",
    "structure_alt": "A six-membered ring bearing a carbon that carries a double-bonded oxygen and an NH2 group.",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclohexanecarboxamide",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclohexanamide",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "N-Cyclohexylformamide",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclohexylcarboxamide",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Amides follow the two-system pattern of acids. When the amide carbon is part of a chain, -oic acid becomes -amide (butanamide). When the amide carbon is attached to a ring, the acid was a -carboxylic acid and the amide is a -carboxamide, added to the name of the ring as parent hydride: the ring carbon bearing the group is C1 and the amide carbon is not counted in the ring. The prefix form cyclohexyl- is for a ring used as a substituent, not as the parent.",
      "approach": "Step 1: The C(=O)NH2 carbon is attached to a ring carbon, so the parent acid is cyclohexanecarboxylic acid.\nStep 2: Replace -carboxylic acid with -carboxamide: cyclohexanecarboxamide.\nStep 3: No locant is needed: the ring carbon bearing the group is C1 by definition and there are no other substituents.\nStep 4: Check the nitrogen: it carries two hydrogens, so there are no N-substituents to cite.",
      "note": "McMurry 21.1 (Naming Carboxylic Acid Derivatives) gives -amide for chain amides and -carboxamide for ring-attached ones, matching -oic acid / -carboxylic acid in 20.1 and -oyl / -carbonyl for acid halides. The compound is what cyclohexanecarbonyl chloride gives with ammonia (21.4), and it is a primary amide, so SOCl2 would dehydrate it to cyclohexanecarbonitrile (20.7).",
      "options": {
        "A": "Correct. A C(=O)NH2 on a ring takes the -carboxamide suffix on the ring's own name, cyclohexane.",
        "B": "Cyclohexanamide would mean that a ring carbon is itself the amide carbon, which is impossible: the amide carbon must carry =O and NH2 and can have only one more bond. The -amide ending on a ring name is never correct; -carboxamide is.",
        "C": "N-Cyclohexylformamide is a different compound, HC(=O)NH-C6H11: a one-carbon acyl group with the ring on nitrogen. In the drawn compound the ring is on the carbonyl carbon and the nitrogen carries only hydrogens.",
        "D": "The right molecule under the wrong name: -carboxamide is a suffix added to the parent hydride, cyclohexane, not to the substituent prefix cyclohexyl. Cyclohexanecarboxamide, not cyclohexylcarboxamide."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q25_substitution_vs_addition",
    "topic": "Nucleophilic Acyl Substitution Reactions",
    "difficulty_level": "Medium",
    "question_text": "Hydroxide adds to the carbonyl carbon of both acetone and acetyl chloride to give a tetrahedral alkoxide intermediate. Why does the acetone intermediate end up as an alcohol while the acetyl chloride intermediate ends up as a new carbonyl compound?",
    "options": [
      {
        "option_id": "A",
        "text": "The acetyl chloride intermediate carries a group, Cl, that can leave as a stable anion, so it collapses back to a C=O with Cl- expelled; the acetone intermediate carries only methyl groups, which cannot leave, so it can only be protonated",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetyl chloride reacts by an SN2 mechanism, with hydroxide displacing chloride directly from the acyl carbon, and never forms a tetrahedral intermediate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The acetone intermediate is more stable than the acetyl chloride intermediate, so it survives to be protonated",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Chloride is a better nucleophile than hydroxide and re-adds to the acetone intermediate, but not to the acetyl chloride one",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Addition of a nucleophile to a polar C=O is the first step in most carbonyl chemistry. What the tetrahedral intermediate does next is decided by what is attached to its carbon. An aldehyde or ketone has hydrogen and carbon groups there, and H- and R- are far too unstable to leave, so the alkoxide waits for a proton and becomes an alcohol: nucleophilic addition. A carboxylic acid derivative has a group Y (Cl, OCOR, OR, NH2) that can depart as a reasonably stable anion, so the alkoxide expels it and re-forms the C=O: nucleophilic acyl substitution, an addition followed by an elimination.",
      "approach": "Step 1: Both reactions begin the same way: hydroxide adds to the carbonyl carbon, breaking the C=O pi bond and putting the negative charge on oxygen.\nStep 2: Acetone's intermediate, (CH3)2C(O-)OH, has two methyl groups and an OH on carbon. None of them can leave as an anion (CH3- would be a carbanion of pKa about 50), so the intermediate is protonated to give the hydrate.\nStep 3: Acetyl chloride's intermediate, CH3C(O-)(OH)Cl, has a chlorine. Chloride is a stable anion and a good leaving group, so the alkoxide's electrons re-form the C=O and Cl- is expelled.\nStep 4: The result is acetic acid (then acetate in base): OH has replaced Cl at the acyl carbon.",
      "note": "McMurry 21.2 (Nucleophilic Acyl Substitution Reactions), Figure 21.2, sets the two pathways side by side and states that the difference is structural: derivatives have an acyl carbon bonded to a group that can act as a leaving group, often as a stable anion, while aldehydes and ketones have no such group. The text also warns that the overall substitution looks like SN2 but the mechanisms are completely different: SN2 is one step with backside attack, acyl substitution is two steps through a tetrahedral intermediate.",
      "options": {
        "A": "Correct. A leaving group on the tetrahedral carbon lets the intermediate collapse to a new carbonyl compound; without one, protonation is the only exit.",
        "B": "An SN2 displacement would need backside attack at an sp2 carbon and a single step; the text is explicit that acyl substitution takes two steps and goes through a tetrahedral intermediate, which is why its stereochemical and kinetic behaviour differ from SN2.",
        "C": "The relative stability of the two intermediates is not the point; both are formed. What differs is whether a group can leave. The acetyl chloride intermediate has an exit that lowers its energy (expelling Cl- and re-forming a C=O); the acetone intermediate has none.",
        "D": "Chloride is a poorer nucleophile than hydroxide toward a carbonyl and plays no role in the acetone reaction, where it is not even present. The chloride in the acetyl chloride case is the leaving group, expelled from the intermediate, not a nucleophile re-adding."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q26_direct_interconversion",
    "topic": "Nucleophilic Acyl Substitution Reactions",
    "difficulty_level": "Medium",
    "question_text": "Which of these conversions can be carried out directly, in a single nucleophilic acyl substitution step?",
    "options": [
      {
        "option_id": "A",
        "text": "Acetyl chloride to acetamide, with NH3",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetamide to acetyl chloride, with HCl",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Methyl acetate to acetic anhydride, with acetate ion",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acetamide to methyl acetate, with methanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The reactivity order acid chloride > anhydride > thioester > ester > amide is also a map of which conversions are possible. A nucleophilic acyl substitution replaces the leaving group Y with the nucleophile, and it goes forward only when the new derivative is less reactive than the old, because that is the direction in which the better leaving group departs and the worse one stays. So an acid chloride can be turned into any derivative below it in one step, while an amide, at the bottom, cannot be turned directly into anything above it: NH2- will not leave in favour of a chloride, methoxide or carboxylate nucleophile.",
      "approach": "Step 1: Place each pair on the ladder. A: chloride (top) to amide (bottom): downhill. B: amide to chloride: uphill. C: ester to anhydride: uphill. D: amide to ester: uphill.\nStep 2: Only a downhill conversion works directly. Ammonia adds to acetyl chloride, the tetrahedral intermediate expels Cl- (an excellent leaving group), and a second NH3 takes the HCl: acetamide.\nStep 3: For the uphill cases the tetrahedral intermediate would have to expel NH2- or CH3O- while keeping Cl-, CH3CO2- or CH3O-; it expels the better leaving group instead and the starting material is recovered.\nStep 4: Uphill conversions are done indirectly: hydrolyse the amide to the acid, then SOCl2 for the chloride, or Fischer esterification for the ester.",
      "note": "McMurry 21.2 (Nucleophilic Acyl Substitution Reactions) states it directly: acid chlorides can be converted into anhydrides, thioesters, esters and amides, but amides cannot be converted directly into esters, thioesters, anhydrides or acid chlorides, and Figure 21.3 draws the one-way arrows. Remembering the order is offered as the way to keep track of the chapter's many reactions. It also explains why only acyl phosphates, thioesters, esters and amides occur in nature: chlorides and anhydrides hydrolyse too fast to survive.",
      "options": {
        "A": "Correct. Chloride to amide is downhill in reactivity: Cl- leaves, NH3 stays, and the amide forms in one step (aminolysis, 21.4).",
        "B": "An amide cannot be turned into an acid chloride directly; the tetrahedral intermediate would have to lose NH2- and keep Cl-, the reverse of what leaving-group ability dictates. HCl with an amide gives hydrolysis to the acid, which SOCl2 then converts to the chloride.",
        "C": "An ester is less reactive than an anhydride, so the conversion is uphill: acetate is a better leaving group than methoxide and would be expelled from the tetrahedral intermediate. Anhydrides are made from acid chlorides and carboxylates, the downhill direction.",
        "D": "Amide to ester is uphill: methoxide would leave before NH2- did, returning the amide. To make the ester from the amide, hydrolyse to acetic acid first and then esterify."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q27_selective_acylation_scheme",
    "topic": "Chemistry of Acid Halides",
    "difficulty_level": "Hard",
    "question_text": "2-Methylpentane-2,5-diol is treated with one equivalent of acetyl chloride in pyridine at 0 °C. What is the major product?",
    "reaction_scheme": {
      "reactants": [
        "CC(C)(O)CCCO",
        "CC(=O)Cl"
      ],
      "reagents": "pyridine (1 equiv of acid chloride)",
      "conditions": "0 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A five-carbon chain with an OH on the end carbon and, at the other end, a carbon bearing two methyl groups and an OH: 2-methylpentane-2,5-diol.",
        "A methyl group on a carbon that carries a double-bonded oxygen and a chlorine: acetyl chloride."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "4-Hydroxy-4-methylpentyl acetate (acetate on the primary OH)",
        "smiles": "CC(C)(O)CCCOC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "5-Hydroxy-2-methylpentan-2-yl acetate (acetate on the tertiary OH)",
        "smiles": "CC(C)(OC(C)=O)CCCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The diacetate",
        "smiles": "CC(C)(OC(C)=O)CCCOC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5-Chloro-2-methylpentan-2-ol",
        "smiles": "CC(C)(O)CCCCl",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Alcoholysis of an acid chloride is a nucleophilic acyl substitution in which the alcohol's oxygen adds to the carbonyl and chloride leaves; pyridine mops up the HCl. The addition step is sensitive to crowding on either partner, so among alcohols the order of reactivity is primary > secondary > tertiary. With one equivalent of acid chloride and two different hydroxyls in the same molecule, the primary OH is acylated selectively and the tertiary OH, hemmed in by two methyls, is left alone. This is how a synthesis distinguishes two hydroxyls without a protecting group.",
      "approach": "Step 1: Classify the two OH groups: C5-OH is primary (CH2OH); C2-OH is tertiary, on a carbon bearing two methyls.\nStep 2: The primary oxygen reaches the acetyl chloride carbonyl easily; the tertiary oxygen is shielded and adds far more slowly.\nStep 3: With one equivalent of acetyl chloride, the acid chloride is consumed by the primary OH: tetrahedral intermediate, loss of Cl-, and pyridine takes the HCl.\nStep 4: Product: the acetate ester of the primary alcohol with the tertiary OH intact, CH3C(=O)O-CH2CH2CH2-C(CH3)2OH.",
      "note": "McMurry 21.4 (Chemistry of Acid Halides) states that the reaction of an alcohol with an acid chloride is strongly affected by steric hindrance, gives the order primary > secondary > tertiary, and notes that it is often possible to selectively esterify an unhindered alcohol in the presence of a more hindered one, with an example of exactly this kind. The same steric sense governs the Fischer route (21.3) and is why cyclohexyl benzoate is made from the acid chloride rather than by Fischer esterification (Problem 21-10).",
      "options": {
        "A": "Correct. The unhindered primary alcohol is acylated; the tertiary alcohol, crowded by two methyls, is untouched with only one equivalent of acid chloride.",
        "B": "Acylating the tertiary OH first reverses the steric order. A tertiary alcohol's oxygen is the slowest of the three classes to reach an acid chloride carbonyl, so with a single equivalent the acetyl goes to the primary oxygen.",
        "C": "The diacetate would need two equivalents of acetyl chloride and, for the tertiary OH, forcing conditions. One equivalent at 0 °C is used up by the primary alcohol before the tertiary one reacts appreciably.",
        "D": "Acetyl chloride does not convert alcohols into alkyl chlorides; that is SOCl2 chemistry (17.6). The alcohol here is the nucleophile attacking the acyl carbon, and the chloride it displaces leaves as HCl, captured by pyridine."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q28_tetrahedral_intermediate_identify",
    "topic": "Nucleophilic Acyl Substitution Reactions",
    "difficulty_level": "Hard",
    "question_text": "The structure shown is the tetrahedral alkoxide intermediate of a nucleophilic acyl substitution. Identify the nucleophile that formed it, the group that will leave, and the final carbonyl product.",
    "question_smiles": "CC([O-])(OC)NC",
    "structure_alt": "A central carbon bearing a methyl group, a negatively charged oxygen, an OCH3 group and an NHCH3 group.",
    "options": [
      {
        "option_id": "A",
        "text": "Nucleophile CH3NH2, leaving group CH3O-, product N-methylacetamide",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Nucleophile CH3O-, leaving group CH3NH-, product methyl acetate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Nucleophile CH3NH2, leaving group CH3-, product methyl N-methylcarbamate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Nucleophile HO-, leaving group CH3O-, product acetic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A tetrahedral intermediate carries every group that was on the carbonyl carbon plus the nucleophile, and the alkoxide oxygen is the former carbonyl oxygen. Reading it backwards: the acyl group is the one that cannot be a nucleophile or a leaving group (here methyl), and of the two heteroatom groups, one arrived (the nucleophile) and one will depart. Which is which is decided by leaving-group ability: the intermediate expels the group whose anion is more stable, and the reaction runs from the more reactive derivative to the less reactive one.",
      "approach": "Step 1: Inventory the carbon's substituents: CH3 (the acyl group's R), O- (the former carbonyl oxygen), OCH3 and NHCH3 (one nucleophile, one leaving group).\nStep 2: Compare the anions: CH3O- (methanol pKa 15.5) is a far better leaving group than CH3NH- (methylamine pKa about 36). The intermediate will expel methoxide.\nStep 3: So the nucleophile was methylamine, which added to methyl acetate; the leaving group is methoxide.\nStep 4: Product: CH3C(=O)NHCH3, N-methylacetamide, an aminolysis of an ester (21.6), downhill from ester to amide.",
      "note": "McMurry 21.2 (Nucleophilic Acyl Substitution Reactions) sets this kind of puzzle as Problem 21-6, and the reasoning is the chapter's reactivity order applied to a single intermediate: the better leaving group departs, so the reaction proceeds from ester to amide, never amide to ester (Figure 21.3). Ester aminolysis is real chemistry, but 21.6 notes it is rarely used because an acid chloride gives the amide more easily.",
      "options": {
        "A": "Correct. Methylamine added to methyl acetate; methoxide, the far better leaving group, departs; the product is N-methylacetamide.",
        "B": "This runs the reaction uphill. For methoxide to be the nucleophile, CH3NH- would have to leave, and the amide anion (pKa of its conjugate acid about 36) is a vastly poorer leaving group than methoxide (pKa 15.5). The intermediate expels methoxide, not methylamide.",
        "C": "A methyl carbanion (pKa about 50) is never a leaving group in acyl substitution, and a carbamate carbon carries O and N but no alkyl group. The methyl on this carbon is the acyl group's own carbon and stays put.",
        "D": "There is no OH on the tetrahedral carbon, only O-, OCH3 and NHCH3, so hydroxide was not the nucleophile and no hydrolysis is under way. The negative oxygen is the former carbonyl oxygen, present in every such intermediate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q29_socl2_acid_chloride_scheme",
    "topic": "Reactions of Carboxylic Acids",
    "difficulty_level": "Easy",
    "question_text": "What is the organic product when benzoic acid is heated with thionyl chloride?",
    "reaction_scheme": {
      "reactants": [
        "O=C(O)c1ccccc1"
      ],
      "reagents": "SOCl2",
      "conditions": "reflux",
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
        "text": "Benzoyl chloride",
        "smiles": "O=C(Cl)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzenesulfonyl chloride",
        "smiles": "O=S(=O)(Cl)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzyl chloride",
        "smiles": "ClCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Chlorobenzene",
        "smiles": "Clc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carboxylic acid cannot be turned into an acid chloride by chloride ion alone, because OH is a poor leaving group. Thionyl chloride solves the problem the way it does for alcohols: the acid's oxygen attacks sulfur and an acyl chlorosulfite, RC(=O)-O-S(=O)Cl, is formed, in which the former OH has become an excellent leaving group. Chloride then adds to the carbonyl carbon and the tetrahedral intermediate expels the chlorosulfite, which falls apart into SO2 and Cl-. Both by-products are gases, which is why the reaction is clean and goes to completion.",
      "approach": "Step 1: The carboxyl oxygen of benzoic acid attacks the sulfur of SOCl2; chloride is lost and HCl is released, giving the acyl chlorosulfite PhC(=O)OS(=O)Cl.\nStep 2: Chloride ion adds to the carbonyl carbon: a tetrahedral intermediate.\nStep 3: The intermediate collapses, expelling the chlorosulfite anion, which decomposes to SO2 and Cl-.\nStep 4: Product: benzoyl chloride, PhC(=O)Cl, with SO2 and HCl as gaseous by-products.",
      "note": "McMurry 21.3 (Reactions of Carboxylic Acids) describes the reaction as a nucleophilic acyl substitution through an acyl chlorosulfite intermediate and compares it with the alcohol-to-alkyl-chloride reaction of 17.6; McMurry 21.4 adds that PBr3 gives the acid bromide the same way. The same reagent on a primary amide gives a nitrile (20.7), so a question that offers SOCl2 turns on which substrate is present: acid to acid chloride, amide to nitrile, alcohol to alkyl chloride.",
      "options": {
        "A": "Correct. SOCl2 converts the OH of the acid into a chlorosulfite leaving group, and chloride replaces it at the acyl carbon: benzoyl chloride.",
        "B": "Benzenesulfonyl chloride has sulfur bonded to the ring, which would need an aromatic sulfonation (chlorosulfonic acid, 16.2). SOCl2 reacts at the carboxyl group, not the ring, and the sulfur leaves in the by-product SO2.",
        "C": "Benzyl chloride is the product of benzyl alcohol with SOCl2 (17.6), where the carbon bearing the OH is sp3 and ends up bonded to Cl. Here the carbon bearing OH is a carbonyl carbon and keeps its C=O; only the OH is replaced.",
        "D": "Chlorobenzene would require the whole CO2H group to be lost and replaced by Cl on the ring, a decarboxylative substitution that SOCl2 does not perform. The carboxyl carbon stays and becomes the acyl chloride carbon."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q30_fischer_18o_label",
    "topic": "Reactions of Carboxylic Acids",
    "difficulty_level": "Medium",
    "question_text": "Benzoic acid is esterified with methanol in which the oxygen is 18O (CH3-18OH), using an H2SO4 catalyst. Where is the 18O at the end of the reaction?",
    "options": [
      {
        "option_id": "A",
        "text": "Entirely in the methyl benzoate, as the single-bonded oxygen attached to CH3; the water formed is unlabelled",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Entirely in the water formed; the ester is unlabelled",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Half in the ester and half in the water, because the two oxygens of the tetrahedral intermediate are equivalent",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "In the carbonyl oxygen of the methyl benzoate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Fischer esterification is a nucleophilic acyl substitution on the protonated acid: the alcohol oxygen adds to the carbonyl carbon and, after a proton transfer, one of the acid's original OH groups leaves as water. Two bonds could in principle break, the alcohol's C-O or the acid's C-OH, and an isotope label decides between them. The alcohol's oxygen ends up bonded to both its own carbon and the acyl carbon, so the alcohol's C-O bond is never broken; the water is assembled from the acid's OH oxygen plus a proton. The label therefore travels with the methyl group into the ester.",
      "approach": "Step 1: Protonation of the carbonyl oxygen of benzoic acid; CH3-18OH adds to the carbonyl carbon through its labelled oxygen.\nStep 2: Tetrahedral intermediate: PhC(OH)2(18OCH3), with the label on the oxygen that also carries the methyl.\nStep 3: One of the two unlabelled OH groups is protonated and leaves as water; the remaining OH loses a proton to re-form the C=O.\nStep 4: The ester is PhC(=O)-18O-CH3 and the water is H2(16)O. All of the label is in the ester's alkoxy oxygen, none in the water or in the carbonyl oxygen.",
      "note": "McMurry 21.3 (Reactions of Carboxylic Acids) reports this experiment as the evidence for the mechanism in Figure 21.5: 18O-labelled methanol gives 18O-labelled methyl benzoate and unlabelled water, so it is the acid's C-OH bond that breaks, not the alcohol's C-O bond. McMurry 21.6 gives the matching saponification experiment, in which an ester labelled at its alkoxy oxygen puts the label into the alcohol.",
      "options": {
        "A": "Correct. The alcohol's oxygen bonds to the acyl carbon and stays; the water is made from the acid's own OH oxygen.",
        "B": "For the label to appear in water, the methanol's C-O bond would have to break so that its oxygen could leave with two hydrogens. That bond is never broken: the alcohol acts as a nucleophile through its oxygen, keeping its O-CH3 bond throughout.",
        "C": "The tetrahedral intermediate's two OH oxygens (both 16O, from the acid) are equivalent to each other, but the third oxygen, bearing the methyl group, is not an OH and cannot leave as water. Only an unlabelled OH departs.",
        "D": "The carbonyl oxygen of the ester is one of the acid's original oxygens, unlabelled. The labelled oxygen is bonded to the methyl group and stays there, as the ester's alkoxy oxygen."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q31_fischer_pair_bromobenzoate",
    "topic": "Reactions of Carboxylic Acids",
    "difficulty_level": "Easy",
    "question_text": "Which carboxylic acid and alcohol give propyl 2-bromobenzoate by Fischer esterification?",
    "options": [
      {
        "option_id": "A",
        "text": "2-Bromobenzoic acid and propan-1-ol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzoic acid and 3-bromopropan-1-ol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Bromobenzoic acid and propan-2-ol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propanoic acid and 2-bromophenol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An ester's name says which two pieces made it: the first word is the alkyl group that came from the alcohol and sits on the single-bonded oxygen, and the second word is the acid, with -ic acid changed to -ate. Fischer esterification joins the acid's acyl group to the alcohol's alkyl group through the alcohol's oxygen. So to plan the synthesis, split the name: the -ate part names the acid, the alkyl part names the alcohol, and any substituent locant tells you which piece carries it.",
      "approach": "Step 1: Split the name: propyl (alkyl group, from the alcohol) + 2-bromobenzoate (from 2-bromobenzoic acid).\nStep 2: The acid: 2-bromobenzoic acid, with the bromine ortho to the carboxyl.\nStep 3: The alcohol: propyl means an unbranched three-carbon group attached through its end carbon, so propan-1-ol.\nStep 4: Heat the two with H2SO4 catalyst and excess propan-1-ol: the alcohol's oxygen replaces the acid's OH, giving propyl 2-bromobenzoate.",
      "note": "McMurry 21.3 (Reactions of Carboxylic Acids) works this exact target in its example on synthesising an ester from an acid, and Problem 21-7 asks for three more. The section also notes the method's limit: because the alcohol must be the solvent, Fischer esterification is practical only for methyl, ethyl, propyl and butyl esters, and secondary alcohols react slowly. For a hindered or precious alcohol the acid chloride route of 21.4 is used instead.",
      "options": {
        "A": "Correct. 2-Bromobenzoic acid supplies the acyl group with its ortho bromine; propan-1-ol supplies the propyl group on oxygen.",
        "B": "Benzoic acid and 3-bromopropan-1-ol would give 3-bromopropyl benzoate: the bromine would be on the alkyl chain, not on the ring. The name places it at position 2 of the benzoate ring.",
        "C": "Propan-2-ol gives an isopropyl (propan-2-yl) ester, isopropyl 2-bromobenzoate. Propyl means the unbranched group attached at C1, which comes from propan-1-ol.",
        "D": "Propanoic acid and 2-bromophenol would give 2-bromophenyl propanoate, an ester with the acyl group and the aryl group swapped relative to the target. The -ate part of the name is benzoate, so the acid is the aromatic one."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q32_dcc_amide_scheme",
    "topic": "Reactions of Carboxylic Acids",
    "difficulty_level": "Medium",
    "question_text": "Benzoic acid and methylamine are stirred together with dicyclohexylcarbodiimide (DCC). What is the major organic product?",
    "reaction_scheme": {
      "reactants": [
        "O=C(O)c1ccccc1",
        "CN"
      ],
      "reagents": "DCC",
      "conditions": "CH2Cl2, 25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring bearing a CO2H group: benzoic acid.",
        "A methyl group attached to an NH2 group: methylamine."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "N-Methylbenzamide",
        "smiles": "CNC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methylammonium benzoate (the salt only)",
        "smiles": "[O-]C(=O)c1ccccc1.C[NH3+]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "N-Methylbenzylamine",
        "smiles": "CNCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyl benzoate",
        "smiles": "COC(=O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An acid and an amine do not give an amide on mixing: the amine is a base and the acid a proton donor, so the fast reaction is salt formation, and the carboxylate anion is far too unreactive toward nucleophiles for anything further to happen. A carbodiimide changes the leaving group. The acid adds across the C=N of DCC to give an O-acylisourea, in which the former OH has become a good leaving group; the amine then adds to the carbonyl and the tetrahedral intermediate expels the urea. The by-product, dicyclohexylurea, is insoluble and is filtered off.",
      "approach": "Step 1: Benzoic acid adds to a C=N bond of DCC: the carboxylate oxygen bonds to the central carbon, giving the O-acylisourea PhC(=O)O-C(=NC6H11)NHC6H11.\nStep 2: Methylamine adds to the activated carbonyl carbon: a tetrahedral intermediate.\nStep 3: The intermediate expels the urea oxygen anion, which takes a proton to give N,N'-dicyclohexylurea, and the C=O re-forms.\nStep 4: Product: PhC(=O)NHCH3, N-methylbenzamide. Some of the activated acid may instead be captured by a second carboxylate to give benzoic anhydride, which the amine then converts to the same amide.",
      "note": "McMurry 21.3 (Reactions of Carboxylic Acids) explains why direct acid-plus-amine fails (the amine converts the acid into its unreactive carboxylate) and gives the DCC mechanism in Figure 21.6, noting the alternative path through an anhydride and naming EDC as the water-soluble carbodiimide. The same coupling is the key step of laboratory peptide synthesis in 26.7. In the lab the more common amide synthesis is still acid chloride + amine (21.4).",
      "options": {
        "A": "Correct. DCC activates the acid as an O-acylisourea, methylamine attacks the carbonyl, and the urea leaves: an amide in one pot.",
        "B": "The salt is what forms without DCC, and it is where the reaction would stop: a carboxylate anion is not attacked by an amine. The carbodiimide's role is to turn the carboxylate into an activated acyl derivative that the amine can attack.",
        "C": "N-Methylbenzylamine is the LiAlH4 reduction product of N-methylbenzamide (21.7). DCC is a coupling agent, not a reducing agent; the carbonyl group survives in the amide.",
        "D": "Methyl benzoate would need methanol as the nucleophile. Methylamine bonds through nitrogen, giving an amide; its carbon is not involved and no C-O bond forms."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q33_lactonization_scheme",
    "topic": "Reactions of Carboxylic Acids",
    "difficulty_level": "Medium",
    "question_text": "5-Hydroxypentanoic acid is warmed with a trace of H2SO4. What is the major organic product?",
    "reaction_scheme": {
      "reactants": [
        "OCCCCC(=O)O"
      ],
      "reagents": "H2SO4 (cat.)",
      "conditions": "warm, dilute solution",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A five-carbon chain with a CO2H group at one end and an OH group on the other end carbon."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Oxan-2-one (δ-valerolactone)",
        "smiles": "O=C1CCCCO1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Pent-4-enoic acid",
        "smiles": "C=CCCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The linear dimer, 5-(5-hydroxypentanoyloxy)pentanoic acid",
        "smiles": "OCCCCC(=O)OCCCCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Oxan-2-ol (the cyclic hemiacetal)",
        "smiles": "OC1CCCCO1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A molecule that contains both a carboxylic acid and an alcohol can esterify itself. Under acid catalysis the protonated carboxyl is attacked by the hydroxyl of the same molecule, the tetrahedral intermediate loses water, and a cyclic ester, a lactone, results. Whether the intramolecular reaction wins over reaction between two molecules depends on the ring size: when the ring formed is five- or six-membered, the two ends meet easily and the lactone forms in preference to the linear oligomer, especially in dilute solution.",
      "approach": "Step 1: Count the ring that would form: the C5-OH oxygen bonding to the C1 carbonyl carbon gives a six-membered ring containing five carbons and one oxygen.\nStep 2: H2SO4 protonates the carbonyl oxygen; the C5 hydroxyl adds to the carbonyl carbon intramolecularly.\nStep 3: Proton transfer, loss of water and deprotonation give the cyclic ester.\nStep 4: Product: oxan-2-one, δ-valerolactone, C5H8O2, the starting acid minus one water.",
      "note": "McMurry 21.3 (Reactions of Carboxylic Acids) sets an intramolecular Fischer esterification as Problem 21-8, and McMurry 21.6 notes that every reaction of esters applies to cyclic esters, called lactones, with butyrolactone as the example in Problem 21-17. Lactones of five and six members form readily; larger rings need high dilution or special methods, and a hydroxy acid whose OH is on C2 or C3 gives a strained lactone only with difficulty.",
      "options": {
        "A": "Correct. The hydroxyl attacks its own protonated carboxyl to close a six-membered lactone, losing water.",
        "B": "Pent-4-enoic acid would be a dehydration of the primary alcohol by E1, which primary alcohols resist (no stable carbocation) and which needs far harsher conditions than a trace of acid at mild heat. The protonated carboxyl is the more reactive electrophile and captures the OH first.",
        "C": "The linear dimer is an intermolecular esterification and does compete at high concentration. In dilute solution with a six-membered ring available, the intramolecular reaction is faster because the two reacting groups are already held close together.",
        "D": "Oxan-2-ol is a cyclic hemiacetal, the ring form of 5-hydroxypentanal. It would require an aldehyde, and the starting material has a carboxylic acid; no reduction has taken place."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q34_borane_selective_reduction_scheme",
    "topic": "Reactions of Carboxylic Acids",
    "difficulty_level": "Hard",
    "question_text": "4-Nitrophenylacetic acid is treated with BH3 in THF at room temperature, then with water. What is the major product?",
    "reaction_scheme": {
      "reactants": [
        "O=C(O)Cc1ccc([N+](=O)[O-])cc1"
      ],
      "reagents": "1. BH3, THF; 2. H2O",
      "conditions": "25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring with a nitro group on one carbon and, on the carbon opposite, a CH2 group attached to a CO2H group."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-(4-Nitrophenyl)ethan-1-ol",
        "smiles": "OCCc1ccc([N+](=O)[O-])cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-(4-Aminophenyl)ethan-1-ol",
        "smiles": "OCCc1ccc(N)cc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-(4-Nitrophenyl)acetaldehyde",
        "smiles": "O=CCc1ccc([N+](=O)[O-])cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-Aminophenylacetic acid",
        "smiles": "O=C(O)Cc1ccc(N)cc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Borane reduces a carboxylic acid to a primary alcohol quickly at room temperature, and it reacts with carboxylic acids faster than with any other functional group. That selectivity is the reason to choose it over LiAlH4, which is powerful enough to reduce most reducible groups in the molecule at once, including an aromatic nitro group. Borane leaves the nitro group alone, so an acid can be reduced in its presence. Like LiAlH4, borane does not stop at the aldehyde: the reduction runs through to the alcohol.",
      "approach": "Step 1: Identify the reducible groups: the carboxylic acid and the aromatic nitro group.\nStep 2: BH3 coordinates to the carboxyl oxygen and delivers hydride; the acid is reduced through the aldehyde level without stopping.\nStep 3: The nitro group is untouched by borane under these conditions.\nStep 4: After aqueous work-up the product is 2-(4-nitrophenyl)ethan-1-ol: CO2H has become CH2OH, NO2 is intact.",
      "note": "McMurry 21.3 (Reactions of Carboxylic Acids) presents BH3/THF as the preferred reagent for acid reduction because of its ease and safety, notes that borane reacts with carboxylic acids faster than with any other functional group, and uses exactly this substrate to make the point: with LiAlH4 both the nitro and the carboxyl groups would be reduced. The same section explains why LiAlH4 reduction of acids is relatively difficult, requiring a high-energy dianion complexed to aluminium.",
      "options": {
        "A": "Correct. Borane reduces the acid selectively to the primary alcohol and leaves the nitro group intact.",
        "B": "Reducing both the acid and the nitro group is what LiAlH4 does with this substrate, according to the text. Borane's selectivity for carboxylic acids is the reason it is chosen here, and the nitro group survives.",
        "C": "Borane, like LiAlH4, does not stop at the aldehyde: the aldehyde formed is reduced faster than the acid. Isolating an aldehyde from an acid derivative requires DIBAH on the ester at -78 °C (21.6).",
        "D": "Reducing the nitro group while leaving the acid would need a reagent that ignores carboxylic acids, such as catalytic hydrogenation or Fe/HCl. Borane does the opposite: it attacks the acid first and fastest."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q35_atp_acyl_adenylate",
    "topic": "Reactions of Carboxylic Acids",
    "difficulty_level": "Hard",
    "question_text": "In fatty-acid biosynthesis a long-chain carboxylate is activated by reaction with ATP before coenzyme A attacks it. In that activation step, which atom of ATP does the carboxylate attack, what leaves, and what is the product?",
    "options": [
      {
        "option_id": "A",
        "text": "The carboxylate oxygen attacks the alpha-phosphorus (the one bonded to the ribose), a five-coordinate phosphorus intermediate expels diphosphate, and the product is an acyl adenylate, a mixed anhydride of the acid and AMP",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The carboxylate attacks the gamma-phosphorus, ADP leaves, and the product is a simple acyl phosphate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The carboxylate attacks a carbon of the adenine ring, displacing the triphosphate, and the product is an ester of adenine",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The carboxylate attacks C5' of the ribose by SN2, triphosphate leaves, and the product is a ribose ester",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carboxylic acid is no more reactive toward nucleophiles in a cell than in a flask: its OH must be turned into a good leaving group first. Cells do this with ATP. The carboxylate adds to the P=O of the phosphorus nearest the sugar, a nucleophilic substitution on phosphorus that goes through a five-coordinate intermediate, and pyrophosphate (diphosphate) is expelled. The product joins the acyl group to adenosine monophosphate through an anhydride linkage, an acyl adenylate, which is a mixed anhydride and reactive enough for the thiol of coenzyme A to attack it and form the thioester.",
      "approach": "Step 1: Identify the leaving-group problem: RCO2- cannot be attacked by CoA-SH because carboxylate is unreactive and OH (or O-) will not leave.\nStep 2: The carboxylate oxygen attacks the alpha-phosphorus of ATP, adding to P=O to give a five-coordinate phosphorus.\nStep 3: That intermediate expels the best leaving group on phosphorus, the diphosphate (pyrophosphate) ion.\nStep 4: Product: RC(=O)-O-P(O2-)-O-adenosine, the acyl adenylate, a mixed anhydride of the fatty acid and AMP. In the next step CoA-SH attacks its acyl carbon and AMP leaves, giving the acyl CoA (Figure 21.7).",
      "note": "McMurry 21.3 (Reactions of Carboxylic Acids), Figure 21.7, draws this activation and points out that the first step is itself a nucleophilic acyl substitution on phosphorus: the carboxylate adds to a P=O to give a five-coordinate intermediate that expels diphosphate. McMurry 21.8 then shows coenzyme A reacting with the acyl adenylate to give the acyl CoA (Figure 21.10). Attack at the gamma-phosphorus with release of ADP is how kinases transfer phosphate and is real chemistry for other substrates, but it is not the fatty-acid activation the text describes.",
      "options": {
        "A": "Correct. Substitution at the alpha-phosphorus with loss of pyrophosphate gives the acyl adenylate, the mixed anhydride that coenzyme A then attacks.",
        "B": "Attack at the gamma-phosphorus with loss of ADP is the kinase pattern and gives an acyl phosphate; some enzymes do this with acetate, but the text's fatty-acid activation goes through the alpha-phosphorus, releasing diphosphate and leaving the acyl group attached to AMP.",
        "C": "The adenine ring is not an electrophile toward carboxylate under enzymatic conditions and has no leaving group at the positions in question; the triphosphate is attached to the ribose, not to adenine, and nothing is displaced from the ring.",
        "D": "C5' of ribose carries the triphosphate through an oxygen; an SN2 at that carbon would have to expel the whole triphosphate as a leaving group and would break a C-O bond, which is not what happens. The chemistry is at phosphorus, with P-O bonds breaking and forming."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q36_benzoyl_chloride_isopropanol_scheme",
    "topic": "Chemistry of Acid Halides",
    "difficulty_level": "Easy",
    "question_text": "Benzoyl chloride is treated with propan-2-ol in the presence of pyridine. What is the organic product?",
    "reaction_scheme": {
      "reactants": [
        "O=C(Cl)c1ccccc1",
        "CC(C)O"
      ],
      "reagents": "pyridine",
      "conditions": "0 to 25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring bearing a carbon that carries a double-bonded oxygen and a chlorine: benzoyl chloride.",
        "A three-carbon chain with the OH on the middle carbon: propan-2-ol."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Isopropyl benzoate",
        "smiles": "CC(C)OC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Phenyl propanoate",
        "smiles": "CCC(=O)Oc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Chloropropane and benzoic acid",
        "smiles": "CC(C)Cl.O=C(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzoic acid and propene",
        "smiles": "O=C(O)c1ccccc1.C=CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Alcoholysis of an acid chloride is the most common laboratory ester synthesis. The alcohol's oxygen adds to the acyl carbon, the tetrahedral intermediate expels chloride, and a proton is lost from the new oxonium oxygen. The HCl produced would otherwise protonate the alcohol and could add to sensitive groups, so pyridine or NaOH is added to remove it. To predict the product, identify the leaving group (Cl-) and the nucleophile (the alcohol) and swap one for the other: the acyl group keeps its identity and the alkyl group of the alcohol ends up on oxygen.",
      "approach": "Step 1: Nucleophile: the oxygen of propan-2-ol. Electrophile: the carbonyl carbon of benzoyl chloride. Leaving group: chloride.\nStep 2: Addition gives the tetrahedral intermediate PhC(O-)(Cl)(O+H-CH(CH3)2).\nStep 3: Chloride is expelled; pyridine removes the proton from the oxygen, and pyridinium chloride precipitates.\nStep 4: Product: PhC(=O)OCH(CH3)2, isopropyl benzoate. The benzoyl group is intact and the isopropyl group is on the ester oxygen.",
      "note": "McMurry 21.2 (Nucleophilic Acyl Substitution Reactions) works this exact reaction as its example of predicting a product, and McMurry 21.4 (Chemistry of Acid Halides) calls alcoholysis of acid chlorides probably the most common method for preparing esters in the laboratory, noting the use of pyridine or NaOH to remove HCl and the steric order primary > secondary > tertiary among alcohols. A secondary alcohol such as propan-2-ol reacts well here, whereas Fischer esterification with it would be slow.",
      "options": {
        "A": "Correct. The alcohol oxygen replaces chloride at the acyl carbon; the benzoyl group is joined to the isopropyl group through oxygen.",
        "B": "Phenyl propanoate has the pieces reversed: a propanoyl group on a phenoxy oxygen. The acyl group here is benzoyl, from the acid chloride, and the alcohol contributes only its isopropyl-oxygen fragment.",
        "C": "Chloride does not migrate to the alcohol's carbon. It leaves from the tetrahedral intermediate as an anion and is trapped by pyridine as pyridinium chloride; the alcohol keeps its C-O bond and becomes part of the ester.",
        "D": "Propene would require pyridine to dehydrate propan-2-ol, which it cannot do; pyridine is a weak base used only to neutralise HCl. Benzoic acid would form only if water, not the alcohol, were the nucleophile."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q37_cyclohexyl_benzoate_method",
    "topic": "Chemistry of Acid Halides",
    "difficulty_level": "Medium",
    "question_text": "Which is the better laboratory route to cyclohexyl benzoate, and why?",
    "options": [
      {
        "option_id": "A",
        "text": "Benzoyl chloride and cyclohexanol with pyridine: Fischer esterification needs the alcohol as excess solvent and works well only for small primary alcohols, and a secondary alcohol esterifies slowly under equilibrium conditions",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzoic acid heated in excess cyclohexanol with H2SO4: Fischer esterification is always preferred because it avoids making the acid chloride",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Sodium benzoate and bromocyclohexane in DMF: the carboxylate SN2 route works for any alkyl halide",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzoic acid and cyclohexene with H2SO4: the acid adds across the double bond to give the ester directly",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Three routes make esters from acids. Fischer esterification is an equilibrium with K near 1, so it is driven by using the alcohol as solvent in large excess, which is practical only for cheap, volatile alcohols and slow for secondary ones. The carboxylate SN2 route needs a primary halide. The acid chloride route is irreversible, fast, and tolerant of secondary alcohols and of alcohols too valuable to use as solvent: convert the acid to its chloride with SOCl2, then add the alcohol with pyridine. For a secondary, cyclic alcohol the acid chloride route is the clear choice.",
      "approach": "Step 1: Classify the alcohol: cyclohexanol is secondary and is not a convenient solvent.\nStep 2: Fischer esterification would need cyclohexanol in large excess to push a K of about 1, and a secondary alcohol adds slowly to the protonated acid; the yield would be poor.\nStep 3: The SN2 alternative, benzoate with bromocyclohexane, fails on a secondary halide: E2 to cyclohexene competes and SN2 at a ring carbon is slow.\nStep 4: Make benzoyl chloride with SOCl2 (21.3), then add cyclohexanol and pyridine: irreversible alcoholysis gives cyclohexyl benzoate cleanly.",
      "note": "McMurry 21.4 (Chemistry of Acid Halides) poses this choice as Problem 21-10, having stated that Fischer esterification (21.3) is effectively limited to methyl, ethyl, propyl and butyl esters by the need for the alcohol as solvent, and that acid chloride alcoholysis, though sensitive to steric hindrance, is the most common laboratory ester synthesis. Acid-catalysed addition of a carboxylic acid to an alkene does occur, but it is Markovnikov alkene chemistry, not a method the chapter offers, and gives rearrangement and polymerisation side products with many alkenes.",
      "options": {
        "A": "Correct. The acid chloride route is irreversible, tolerates a secondary alcohol and does not require the alcohol as solvent; Fischer esterification is unsuited to cyclohexanol on both counts.",
        "B": "Fischer esterification is not always preferred; the text limits it to small primary alcohols used as solvent. Cyclohexanol is secondary, expensive to use in large excess, and slow to add to the protonated acid, so the equilibrium route gives a poor yield.",
        "C": "The carboxylate SN2 route is limited to primary halides. Bromocyclohexane is secondary and cyclic: backside attack is slow and the carboxylate, acting as a base, promotes E2 to cyclohexene instead.",
        "D": "Addition of a carboxylic acid to an alkene is possible in principle, but it is not a nucleophilic acyl substitution and is not among the chapter's ester syntheses; it needs strong acid, is prone to alkene side reactions, and gives no advantage over the clean acid chloride route."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q38_amine_cannot_form_amide",
    "topic": "Chemistry of Acid Halides",
    "difficulty_level": "Easy",
    "question_text": "Which of these nitrogen compounds cannot be converted into an amide by acetyl chloride?",
    "options": [
      {
        "option_id": "A",
        "text": "Triethylamine, (CH3CH2)3N",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Aniline, C6H5NH2",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dimethylamine, (CH3)2NH",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ammonia, NH3",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Aminolysis of an acid chloride puts the acyl group on nitrogen: the amine adds to the carbonyl carbon, chloride leaves, and a proton is lost from the nitrogen to give a neutral amide. That last step is the requirement. Ammonia, a primary amine and a secondary amine each carry at least one N-H to lose, and give primary, secondary and tertiary amides respectively. A tertiary amine has no N-H: it can add to the acyl chloride to form an acylammonium ion, but that cation cannot lose a proton to become an amide and simply transfers the acyl group onward. Tertiary amines therefore serve as HCl scavengers in these reactions, not as amide precursors.",
      "approach": "Step 1: Count the N-H bonds on each nitrogen: NH3 three, aniline two, dimethylamine one, triethylamine none.\nStep 2: An amide RC(=O)NR'2 requires that the nitrogen end up neutral with three bonds; forming it from an amine means replacing one N-H by the acyl group.\nStep 3: Triethylamine has no N-H to replace: adding an acetyl group would leave a positively charged nitrogen with four bonds and no proton to shed.\nStep 4: The other three all form amides: acetamide, N-phenylacetamide (acetanilide) and N,N-dimethylacetamide.",
      "note": "McMurry 21.4 (Chemistry of Acid Halides) states that both monosubstituted and disubstituted amines can be used but not trisubstituted amines, and explains the stoichiometry: two equivalents of amine, or one plus NaOH, because the HCl formed protonates one equivalent. That is also why pyridine, a tertiary amine, is chosen to scavenge HCl in alcoholysis: it cannot compete by forming a stable amide. The industrial trimetozine synthesis in the same section uses morpholine, a secondary amine, with one equivalent of NaOH.",
      "options": {
        "A": "Correct. With no N-H bond, triethylamine cannot become a neutral amide; the acylammonium ion it forms cannot lose a proton and only passes the acetyl group on.",
        "B": "Aniline is a primary amine with two N-H bonds and gives N-phenylacetamide (acetanilide) with acetyl chloride, the classic laboratory example of aminolysis.",
        "C": "Dimethylamine is a secondary amine with one N-H bond; it gives N,N-dimethylacetamide, a tertiary amide, in which the last N-H has been replaced by the acetyl group.",
        "D": "Ammonia has three N-H bonds and gives acetamide, the primary amide; excess ammonia also takes up the HCl formed, which is why two equivalents are used."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q39_gilman_ketone_scheme",
    "topic": "Chemistry of Acid Halides",
    "difficulty_level": "Medium",
    "question_text": "Propanoyl chloride is treated with lithium dimethylcopper in ether at -78 °C, then with water. What is the organic product?",
    "reaction_scheme": {
      "reactants": [
        "CCC(=O)Cl"
      ],
      "reagents": "1. (CH3)2CuLi, ether; 2. H2O",
      "conditions": "-78 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A two-carbon chain attached to a carbon that carries a double-bonded oxygen and a chlorine: propanoyl chloride."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Butan-2-one",
        "smiles": "CCC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Methylbutan-2-ol",
        "smiles": "CCC(C)(C)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Propanal",
        "smiles": "CCC=O",
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
      "context": "A ketone is the natural intermediate when a carbon nucleophile substitutes an acid chloride, but with a Grignard reagent it cannot be isolated: the second equivalent adds to the ketone faster than the first added to the chloride, and a tertiary alcohol results. A lithium diorganocopper (Gilman) reagent is different. It does the acyl substitution, through an acyl diorganocopper intermediate that loses RCu, but it does not add to the ketone formed, so the reaction stops at the ketone. It is selective for acid chlorides: acids, esters, anhydrides and amides do not react with cuprates.",
      "approach": "Step 1: The dimethylcuprate anion attacks the carbonyl carbon of propanoyl chloride; chloride is expelled in a nucleophilic acyl substitution.\nStep 2: The acyl diorganocopper intermediate collapses, transferring one methyl to the acyl carbon and releasing CH3Cu.\nStep 3: The ketone, CH3CH2C(=O)CH3, does not react with the remaining cuprate at -78 °C.\nStep 4: Aqueous work-up gives butan-2-one, with the ethyl group from the acid chloride and the methyl from the cuprate.",
      "note": "McMurry 21.4 (Chemistry of Acid Halides) contrasts the two organometallics directly: a Grignard reagent gives a tertiary alcohol because the ketone intermediate cannot be isolated, while a lithium diorganocopper reagent stops at the ketone, usually in excellent yield at -78 °C in ether, as in the synthesis of the ant pheromone manicone. The section adds that the diorganocopper reaction occurs only with acid chlorides. Nitrile + Grignard (20.7) is the other route to a ketone by a single carbon addition.",
      "options": {
        "A": "Correct. The cuprate substitutes chloride with methyl and does not add to the resulting ketone, so butan-2-one is isolated.",
        "B": "2-Methylbutan-2-ol is the Grignard product: two methyls added to the acyl carbon, the first with loss of chloride to give the ketone and the second to the ketone itself. A Gilman reagent does not make the second addition.",
        "C": "Propanal would require hydride, not methyl, to replace chloride. The cuprate delivers a carbon nucleophile; a reduction of an acid chloride to an aldehyde is a different reaction (and LiAlH4 would go on to the alcohol).",
        "D": "Propanoic acid would form if the acid chloride simply met water before reacting with the cuprate. The cuprate reacts first, at -78 °C, and the water in step 2 merely quenches the mixture; the ketone is stable to it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q40_gilman_pair_methylpentanone",
    "topic": "Chemistry of Acid Halides",
    "difficulty_level": "Medium",
    "question_text": "Which acid chloride and lithium diorganocopper reagent give 2-methylpentan-3-one, (CH3)2CHCOCH2CH3?",
    "options": [
      {
        "option_id": "A",
        "text": "2-Methylpropanoyl chloride and (CH3CH2)2CuLi",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propanoyl chloride and (CH3)2CuLi",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Methylpropanoyl chloride and (CH3)2CuLi",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Butanoyl chloride and (CH3)2CuLi",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Gilman reagent replaces the chlorine of an acid chloride with one of its organic groups and stops at the ketone. The carbonyl carbon of the product is the acid chloride's carbonyl carbon, so the two groups on the ketone are the acyl group's R and the cuprate's R'. Planning backwards, cut the ketone at either bond to the carbonyl: one fragment plus C(=O)Cl is the acid chloride and the other plus Cu is the cuprate. Two disconnections give two valid pairs; every offered pair must be reassembled to see what ketone it actually gives.",
      "approach": "Step 1: The target's carbonyl carbon carries an isopropyl group and an ethyl group.\nStep 2: Disconnection 1: isopropyl stays with the acyl group, ethyl comes from the cuprate: 2-methylpropanoyl chloride + (CH3CH2)2CuLi.\nStep 3: Disconnection 2 (not offered): propanoyl chloride + [(CH3)2CH]2CuLi.\nStep 4: Reassemble the distractors: propanoyl chloride + Me2CuLi gives butan-2-one; 2-methylpropanoyl chloride + Me2CuLi gives 3-methylbutan-2-one; butanoyl chloride + Me2CuLi gives pentan-2-one. Only option A gives the target.",
      "note": "McMurry 21.4 (Chemistry of Acid Halides) asks for two such ketones in Problem 21-13 and states that the diorganocopper reaction works only with acid chlorides, at -78 °C in ether. The same target is the worked example of McMurry 20.7 by the nitrile route (propanenitrile + isopropyl-MgBr, or 2-methylpropanenitrile + EtMgBr), so a student now has two independent ketone syntheses that each add one carbon group and stop.",
      "options": {
        "A": "Correct. The isopropyl acyl group from 2-methylpropanoyl chloride plus an ethyl from the cuprate gives (CH3)2CHCOCH2CH3.",
        "B": "Propanoyl chloride supplies an ethyl acyl group and the dimethylcuprate a methyl: butan-2-one, CH3CH2COCH3, one carbon short and unbranched.",
        "C": "2-Methylpropanoyl chloride supplies the isopropyl group correctly, but a dimethylcuprate adds only a methyl: 3-methylbutan-2-one, (CH3)2CHCOCH3. The cuprate needed is diethyl.",
        "D": "Butanoyl chloride gives a propyl acyl group, and with methyl from the cuprate the product is pentan-2-one, CH3CH2CH2COCH3, unbranched and with the wrong carbon skeleton."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q41_aspirin_scheme",
    "topic": "Chemistry of Acid Anhydrides",
    "difficulty_level": "Medium",
    "question_text": "Salicylic acid (2-hydroxybenzoic acid) is warmed with acetic anhydride and a drop of phosphoric acid. What is the major product?",
    "reaction_scheme": {
      "reactants": [
        "OC(=O)c1ccccc1O",
        "CC(=O)OC(C)=O"
      ],
      "reagents": "H3PO4 (cat.)",
      "conditions": "warm",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring bearing a CO2H group and, on the adjacent carbon, an OH group: salicylic acid.",
        "Two acetyl groups joined through one oxygen: acetic anhydride."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Acetylsalicylic acid (aspirin): the phenol OH is acetylated",
        "smiles": "CC(=O)Oc1ccccc1C(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The mixed anhydride: the carboxyl group is acetylated",
        "smiles": "CC(=O)OC(=O)c1ccccc1O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Methyl salicylate",
        "smiles": "COC(=O)c1ccccc1O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both groups acetylated",
        "smiles": "CC(=O)Oc1ccccc1C(=O)OC(C)=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An anhydride reacts with an alcohol or a phenol the way an acid chloride does, only more slowly: the oxygen nucleophile adds to one carbonyl, and the other half of the anhydride leaves as a carboxylate, which picks up a proton to become the acid by-product. Salicylic acid offers two oxygen nucleophiles, a phenol OH and a carboxyl OH. The phenol oxygen is the nucleophile: a carboxylic acid is a poor nucleophile at oxygen and its acetylation would give a mixed anhydride, a compound more reactive than the starting materials and not stable to the conditions. Only half of the anhydride ends up in the product; the other half is acetic acid.",
      "approach": "Step 1: Identify the nucleophile: the phenolic OH of salicylic acid.\nStep 2: Its oxygen adds to a carbonyl of acetic anhydride; the tetrahedral intermediate expels acetate.\nStep 3: Loss of a proton from the new ester oxygen gives the aryl acetate; acetate takes the proton to become acetic acid.\nStep 4: Product: 2-acetoxybenzoic acid, acetylsalicylic acid, aspirin. The carboxyl group is unchanged.",
      "note": "McMurry 21.5 (Chemistry of Acid Anhydrides) gives this as the commercial aspirin synthesis and makes the general point that only half of an anhydride is used, the other half leaving as acetate, so anhydrides are inefficient and acid chlorides are preferred for any acyl group other than acetyl. The methyl ester in option C, methyl salicylate (oil of wintergreen), is made by Fischer esterification of salicylic acid with methanol, a different reagent set.",
      "options": {
        "A": "Correct. The phenol oxygen is acylated by the anhydride; acetate leaves and becomes acetic acid; the carboxylic acid group is untouched.",
        "B": "Acetylating the carboxyl oxygen would make a mixed anhydride, a compound more reactive than either starting material. A carboxylic acid is a weak oxygen nucleophile and the phenol OH reacts instead; any mixed anhydride formed would be hydrolysed or would acetylate the phenol.",
        "C": "Methyl salicylate needs methanol and a Fischer esterification. Acetic anhydride supplies an acetyl group, not a methyl group, and it goes on to an oxygen, not into the carboxyl.",
        "D": "The diacetylated product would need the carboxyl group to form a stable mixed anhydride, which it does not under these conditions; the carboxylic acid survives and is what gives aspirin its acidity."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q42_acetaminophen_scheme",
    "topic": "Chemistry of Acid Anhydrides",
    "difficulty_level": "Medium",
    "question_text": "4-Aminophenol is warmed with one equivalent of acetic anhydride in water. What is the major product?",
    "reaction_scheme": {
      "reactants": [
        "Nc1ccc(O)cc1",
        "CC(=O)OC(C)=O"
      ],
      "reagents": "H2O",
      "conditions": "warm",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring with an NH2 group on one carbon and an OH group on the carbon opposite: 4-aminophenol.",
        "Two acetyl groups joined through one oxygen: acetic anhydride."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "N-(4-Hydroxyphenyl)acetamide (acetaminophen)",
        "smiles": "CC(=O)Nc1ccc(O)cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-Aminophenyl acetate",
        "smiles": "Nc1ccc(OC(C)=O)cc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-Acetamidophenyl acetate",
        "smiles": "CC(=O)Nc1ccc(OC(C)=O)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "N-Acetyl-N-(4-hydroxyphenyl)acetamide (the imide)",
        "smiles": "CC(=O)N(C(C)=O)c1ccc(O)cc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When a molecule offers both an amine and a hydroxyl to an acylating agent, the amine wins: nitrogen is less electronegative than oxygen, holds its lone pair more loosely, and is the stronger nucleophile, so aminolysis is faster than alcoholysis (or phenolysis). With one equivalent of anhydride the acetyl group therefore goes to nitrogen, giving an amide, and the phenol is left free. Acetic anhydride is the reagent of choice for putting an acetyl group on an amine: the acetate by-product is harmless and the reaction runs even in water.",
      "approach": "Step 1: Compare the nucleophiles: the NH2 nitrogen of 4-aminophenol is far more nucleophilic than the phenolic OH oxygen.\nStep 2: Nitrogen adds to a carbonyl of acetic anhydride; the tetrahedral intermediate expels acetate.\nStep 3: Loss of the N-H proton gives the neutral amide; acetate becomes acetic acid.\nStep 4: Product: N-(4-hydroxyphenyl)acetamide, acetaminophen, with the phenol OH intact.",
      "note": "McMurry 21.5 (Chemistry of Acid Anhydrides) gives this as the commercial synthesis of acetaminophen (Tylenol) and states the reason: only the more nucleophilic NH2 group reacts, not the less nucleophilic OH group. Problem 21-14 asks for the mechanism. The same chemoselectivity means an amino alcohol can be N-acylated without protecting its hydroxyl, a point that returns in peptide chemistry (26.7).",
      "options": {
        "A": "Correct. The amine is the better nucleophile and is acetylated; the phenol survives.",
        "B": "O-Acetylation would require the phenol oxygen to outcompete the amine nitrogen for the anhydride, which it cannot: nitrogen is the stronger nucleophile. Only if the amine were protonated or protected would the ester form.",
        "C": "Acetylating both groups needs a second equivalent of anhydride and, for the phenol, more forcing conditions. With one equivalent the anhydride is consumed at nitrogen before the phenol reacts to any extent.",
        "D": "A second acetyl on the same nitrogen would make an imide; the amide nitrogen, its lone pair delocalised into the carbonyl, is a much weaker nucleophile than the original amine and does not react with a second acetyl group under these mild conditions."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q43_phthalic_anhydride_methanol_scheme",
    "topic": "Chemistry of Acid Anhydrides",
    "difficulty_level": "Medium",
    "question_text": "Phthalic anhydride is heated with one equivalent of methanol (no added acid). What is the product?",
    "reaction_scheme": {
      "reactants": [
        "O=C1OC(=O)c2ccccc12",
        "CO"
      ],
      "reagents": "1 equiv methanol",
      "conditions": "heat",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring fused to a five-membered ring made of two C=O groups joined through an oxygen: phthalic anhydride.",
        "A single carbon bonded to an OH group: methanol."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Monomethyl phthalate (2-(methoxycarbonyl)benzoic acid)",
        "smiles": "COC(=O)c1ccccc1C(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Dimethyl phthalate",
        "smiles": "COC(=O)c1ccccc1C(=O)OC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Phthalic acid",
        "smiles": "OC(=O)c1ccccc1C(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyl benzoate",
        "smiles": "COC(=O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An alcohol opens an anhydride by adding to one carbonyl and expelling the other half as a carboxylate. With an acyclic anhydride that second half floats away as a separate acid molecule. With a cyclic anhydride the two halves are tied together by the ring, so the carboxylate cannot leave the molecule: ring opening gives an ester at one carbonyl and a free carboxylic acid at the other, in the same product. The second carboxyl is not lost and does not react further with only one equivalent of alcohol and no acid catalyst, because a carboxylic acid needs Fischer conditions to esterify.",
      "approach": "Step 1: Methanol's oxygen adds to one carbonyl carbon of phthalic anhydride: a tetrahedral intermediate within the ring.\nStep 2: The intermediate collapses, breaking the ring C-O bond: the other carbonyl becomes a carboxylate, then a carboxylic acid after proton transfer.\nStep 3: The product carries a methyl ester on one ring carbon and a CO2H on the adjacent one: monomethyl phthalate.\nStep 4: The second carboxyl stays as the free acid; converting it to a second methyl ester would need excess methanol and an acid catalyst.",
      "note": "McMurry 21.5 (Chemistry of Acid Anhydrides) asks this as Problem 21-15 and, for the acyclic case, notes that only half of an anhydride is used while the other half leaves as acetate. The cyclic anhydride is the exception that makes the point: the leaving half is still part of the product. Cyclic anhydrides of dicarboxylic acids are named by replacing acid with anhydride (21.1), and phthalic anhydride is an industrial intermediate for the phthalate plasticisers mentioned in 21.6.",
      "options": {
        "A": "Correct. Ring opening by methanol gives one methyl ester and one free carboxylic acid on adjacent ring carbons; nothing is expelled from the molecule.",
        "B": "The diester would need the free carboxyl group formed in the ring opening to esterify as well, which requires a second equivalent of methanol and an acid catalyst (Fischer conditions). One equivalent with no catalyst stops at the half ester.",
        "C": "Phthalic acid is the hydrolysis product, from water opening the anhydride. Methanol opens it the same way but leaves a methyl ester at the carbonyl it attacked.",
        "D": "Methyl benzoate has lost a carbon: the second carbonyl carbon of the anhydride stays in the product as the CO2H group. Nothing in this reaction removes a carboxyl from the ring."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q44_saponification_18o_label",
    "topic": "Chemistry of Esters",
    "difficulty_level": "Medium",
    "question_text": "Ethyl propanoate labelled with 18O at its single-bonded (ether-type) oxygen is saponified with aqueous NaOH. Where is the 18O afterwards?",
    "options": [
      {
        "option_id": "A",
        "text": "Entirely in the ethanol; the propanoate is unlabelled",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Entirely in the propanoate; the ethanol is unlabelled",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Half in the ethanol and half in the propanoate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "In the water, released as labelled hydroxide",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two bonds could break when an ester is cleaved: the acyl C-O bond (between the carbonyl carbon and the alkoxy oxygen) or the alkyl C-O bond (between that oxygen and the ethyl carbon). In nucleophilic acyl substitution the alkoxide leaves as a unit, oxygen and alkyl together, so the acyl C-O bond breaks and the alkoxy oxygen stays with the ethyl group. An 18O label on that oxygen therefore appears in the alcohol. If instead hydroxide attacked the ethyl carbon by SN2, the label would stay in the carboxylate; it does not.",
      "approach": "Step 1: Hydroxide adds to the carbonyl carbon of CH3CH2C(=O)-18O-CH2CH3: tetrahedral intermediate with O-, OH and 18OEt on carbon.\nStep 2: The intermediate expels the alkoxide, CH3CH2-18O-, breaking the acyl C-18O bond.\nStep 3: The alkoxide is protonated by the propanoic acid formed: CH3CH2-18OH, labelled ethanol, and propanoate ion with two ordinary oxygens.\nStep 4: The label is exclusively in the ethanol, which is what the experiment shows.",
      "note": "McMurry 21.6 (Chemistry of Esters) cites this experiment as support for the mechanism in Figure 21.8: when ethyl propanoate labelled at the ether-like oxygen is hydrolysed in aqueous NaOH, the 18O shows up exclusively in the ethanol, indicating cleavage of the C-OR' bond rather than the CO-R' bond. It is the mirror image of the Fischer esterification experiment in 21.3, where labelled methanol puts its label into the ester.",
      "options": {
        "A": "Correct. The alkoxy oxygen leaves with the ethyl group as ethoxide, so the label ends up in ethanol.",
        "B": "The label would stay with the propanoate only if the ethyl carbon were attacked (SN2 on the ethyl group), leaving the oxygen on the acyl carbon. Saponification attacks the carbonyl carbon and expels the whole ethoxide.",
        "C": "The two oxygens on the acyl carbon are not equivalent during the reaction: one is the former carbonyl oxygen (unlabelled) and the labelled one carries the ethyl group. Only the ethyl-bearing oxygen leaves, taking the label with it.",
        "D": "The label is bonded to carbon (the ethyl group) throughout and is never released as hydroxide or water. Hydroxide is the nucleophile that arrives, not something that leaves."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q45_saponification_irreversible",
    "topic": "Chemistry of Esters",
    "difficulty_level": "Medium",
    "question_text": "Fischer esterification is reversible, yet saponification is not: treating a carboxylic acid with an alkoxide ion does not give an ester. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "The alkoxide (or hydroxide) deprotonates the carboxylic acid to a carboxylate anion, which is not attacked by alkoxide; the carboxylate plus alcohol is the end point and there is no path back to the ester",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Alkoxide ions are too weak as nucleophiles to add to a carbonyl group",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The ester is much less stable than the acid and alcohol, so the equilibrium lies entirely on the hydrolysis side",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Hydroxide attacks the alkyl carbon of the ester by SN2, and that bond cannot be re-formed",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Every step of saponification up to the carboxylic acid is reversible: the alkoxide expelled from the tetrahedral intermediate could add back. What makes the overall reaction irreversible is an acid-base step. The carboxylic acid formed is far more acidic (pKa about 5) than the alcohol (pKa about 16), so the alkoxide deprotonates it at once. The carboxylate anion is negatively charged and a poor electrophile, and an alkoxide will not add to it. The system is therefore trapped as carboxylate plus alcohol, and the ester can only be regenerated by acidifying and running a Fischer esterification.",
      "approach": "Step 1: Hydroxide adds to the ester and the tetrahedral intermediate expels alkoxide, giving the carboxylic acid; this much is reversible.\nStep 2: Alkoxide (pKa of its conjugate acid about 16) meets a carboxylic acid (pKa about 5): a proton transfer favourable by about 11 pKa units gives carboxylate and alcohol.\nStep 3: The carboxylate's negative charge makes its carbonyl carbon unreactive toward anionic nucleophiles; alkoxide does not add.\nStep 4: With no reverse path, saponification runs to completion. Under acidic conditions there is no carboxylate, and the acid and alcohol can re-form the ester (Figure 21.9 run backwards).",
      "note": "McMurry 21.6 (Chemistry of Esters) poses this as Problem 21-16 immediately after describing the saponification mechanism (Figure 21.8), in which the carboxylic acid is deprotonated to give the carboxylate ion. The contrast with acid-catalysed hydrolysis (Figure 21.9), which is the exact reverse of Fischer esterification and fully reversible, is the point: base makes an anion that cannot go back, acid does not. The same logic explains why nitrile hydrolysis in base is driven forward (20.7).",
      "options": {
        "A": "Correct. The acid-base step that converts the product acid into its carboxylate removes the electrophile the reverse reaction would need.",
        "B": "Alkoxides are strong nucleophiles and add readily to esters and ketones; transesterification by alkoxide is well known. The problem is not the alkoxide's nucleophilicity but the carboxylate's lack of electrophilicity.",
        "C": "An ester is not markedly less stable than acid plus alcohol: the Fischer equilibrium constant is close to 1, which is why esterification can be driven either way by conditions. Irreversibility under base is kinetic and acid-base in origin, not a large thermodynamic preference for hydrolysis.",
        "D": "The 18O labelling experiment shows the acyl C-O bond breaks, not the alkyl C-O bond; hydroxide attacks the carbonyl carbon, not the alkyl carbon. Nothing about SN2 is involved."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q46_butyrolactone_lialh4_scheme",
    "topic": "Chemistry of Esters",
    "difficulty_level": "Medium",
    "question_text": "γ-Butyrolactone (oxolan-2-one) is treated with excess LiAlH4 in ether, then with water. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "O=C1CCCO1"
      ],
      "reagents": "1. LiAlH4 (excess), ether; 2. H2O",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A five-membered ring containing one oxygen atom, with a C=O on the carbon next to that oxygen: γ-butyrolactone."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Butane-1,4-diol",
        "smiles": "OCCCCO",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-Hydroxybutanal",
        "smiles": "OCCCC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Butan-1-ol",
        "smiles": "CCCCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Oxolane (tetrahydrofuran)",
        "smiles": "C1CCOC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A lactone is an ester whose alcohol part is tied to its acid part by a ring, and it does everything an acyclic ester does. LiAlH4 reduces an ester by adding hydride to the carbonyl, expelling the alkoxide, and reducing the resulting aldehyde to a second alkoxide. In a lactone the expelled alkoxide is still part of the same molecule, so the ring opens and both ends of the former ester end up as alcohols: the carbonyl carbon becomes a CH2OH, and the ring oxygen becomes the OH of the other end. A diol results.",
      "approach": "Step 1: Hydride adds to the lactone carbonyl; the tetrahedral intermediate expels the ring oxygen as an alkoxide, opening the ring: an aldehyde tethered to an alkoxide, O=CH-CH2CH2CH2-O-.\nStep 2: A second hydride reduces the aldehyde to an alkoxide: -O-CH2CH2CH2CH2-O-, as its aluminium complex.\nStep 3: Water protonates both alkoxides.\nStep 4: Product: butane-1,4-diol, HOCH2CH2CH2CH2OH, four carbons, both ends hydroxylated.",
      "note": "McMurry 21.6 (Chemistry of Esters) states that all ester reactions apply to lactones and asks in Problem 21-17 what butyrolactone gives with LiAlH4 and with DIBAH. With one equivalent of DIBAH at -78 °C the reduction would stop at the aldehyde stage, 4-hydroxybutanal, which exists mainly as its cyclic hemiacetal, 2-hydroxyoxolane; that is option B's chemistry under a different reagent. The reduction mechanism, hydride addition then loss of alkoxide then further reduction, is the same as for acid chlorides (21.4).",
      "options": {
        "A": "Correct. Excess LiAlH4 opens the lactone and reduces the carbonyl all the way to CH2OH; both ends of the chain become alcohols.",
        "B": "4-Hydroxybutanal is the product of a single hydride delivery, which is what one equivalent of DIBAH at -78 °C achieves. Excess LiAlH4 reduces that aldehyde as fast as it forms.",
        "C": "Butan-1-ol would require the ring oxygen to be lost altogether. The ring oxygen leaves the carbonyl as an alkoxide but remains bonded to C4 of the chain, so the product keeps both oxygens.",
        "D": "Oxolane would need the C=O to be reduced to CH2 while the ring C-O bond survived. Hydride reduction of an ester always cleaves the acyl C-O bond (the alkoxide leaves) and never removes the carbonyl oxygen as water; that deoxygenation is not available."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q47_ester_grignard_pair",
    "topic": "Chemistry of Esters",
    "difficulty_level": "Medium",
    "question_text": "Which ester and Grignard reagent (2 equivalents), followed by aqueous acid, give 3-ethylpentan-3-ol, (CH3CH2)3COH?",
    "options": [
      {
        "option_id": "A",
        "text": "Methyl propanoate and CH3CH2MgBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methyl acetate and CH3CH2MgBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethyl propanoate and CH3MgBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyl butanoate and CH3CH2MgBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An ester takes two equivalents of a Grignard reagent. The first adds to the carbonyl and the tetrahedral intermediate expels the alkoxide, giving a ketone; the second adds to the ketone, and work-up gives a tertiary alcohol. Two of the alcohol's three groups are therefore the Grignard's group and identical, and the third is the acyl group of the ester. The alkoxy group of the ester is lost as alcohol and does not appear in the product. To plan the synthesis, find the two identical groups on the carbinol carbon: those came from the Grignard reagent; the odd group came from the ester.",
      "approach": "Step 1: 3-Ethylpentan-3-ol has three identical ethyl groups on the carbinol carbon.\nStep 2: Two of them come from the Grignard reagent, so the Grignard is ethylmagnesium bromide.\nStep 3: The third ethyl is the ester's acyl group, so the acid part is propanoic acid: a propanoate ester. Its alkoxy group is irrelevant to the product; methyl propanoate is convenient.\nStep 4: Reassemble the distractors: methyl acetate + 2 EtMgBr gives 3-methylpentan-3-ol; ethyl propanoate + 2 MeMgBr gives 2-methylbutan-2-ol; methyl butanoate + 2 EtMgBr gives 3-ethylhexan-3-ol.",
      "note": "McMurry 21.6 (Chemistry of Esters) states that esters react with two equivalents of a Grignard reagent to give a tertiary alcohol in which two of the substituents are identical, via an intermediate ketone that reacts further, and asks for three such pairs in Problem 21-19. The same analysis applies to acid chlorides with Grignard reagents (21.4). When all three groups are the same, as here, the acyl group and the Grignard group happen to coincide, and any propanoate ester will do.",
      "options": {
        "A": "Correct. The propanoyl group supplies one ethyl, two equivalents of EtMgBr supply the other two, and methanol is lost.",
        "B": "Methyl acetate's acyl group is acetyl (one carbon on the carbonyl), so the product would be 3-methylpentan-3-ol, CH3C(OH)(CH2CH3)2, with a methyl where the third ethyl should be.",
        "C": "Ethyl propanoate does supply an ethyl acyl group, but methylmagnesium bromide adds two methyls: 2-methylbutan-2-ol, CH3CH2C(OH)(CH3)2. The alkoxy group of the ester (ethyl here) is lost as ethanol and never appears in the alcohol.",
        "D": "Methyl butanoate's acyl group is propyl, so two ethyls from the Grignard give 3-ethylhexan-3-ol, CH3CH2CH2C(OH)(CH2CH3)2, one carbon too long on one arm."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q48_amide_hydrolysis_scheme",
    "topic": "Chemistry of Amides",
    "difficulty_level": "Easy",
    "question_text": "N-Methylbenzamide is heated for several hours with aqueous H2SO4. What are the organic products?",
    "reaction_scheme": {
      "reactants": [
        "CNC(=O)c1ccccc1"
      ],
      "reagents": "H2O, H2SO4",
      "conditions": "reflux, prolonged",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring bearing a carbon that carries a double-bonded oxygen and an NH group; the nitrogen carries a methyl: N-methylbenzamide."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Benzoic acid and methylamine (present as methylammonium ion in the acid)",
        "smiles": "O=C(O)c1ccccc1.CN",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "N-Methylbenzylamine",
        "smiles": "CNCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzamide and methanol",
        "smiles": "NC(=O)c1ccccc1.CO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzyl alcohol and methylamine",
        "smiles": "OCc1ccccc1.CN",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Amides are the least reactive acid derivatives, so their hydrolysis needs heat and time, but the mechanism is the same nucleophilic acyl substitution. In acid the carbonyl oxygen is protonated, water adds to give a tetrahedral intermediate, a proton is transferred from oxygen to nitrogen to turn the poor leaving group NR2 into the good leaving group amine (neutral NHR2), and the amine is expelled. The amine released is protonated by the acid, which is what pulls the reversible steps to completion. The acyl C-N bond breaks; the N-CH3 bond does not.",
      "approach": "Step 1: Protonation of the amide carbonyl oxygen; water adds to the carbonyl carbon.\nStep 2: Proton transfer within the tetrahedral intermediate from an OH to the nitrogen, making it an ammonium leaving group.\nStep 3: Elimination of methylamine and loss of a proton from oxygen regenerate the C=O: benzoic acid.\nStep 4: Methylamine is protonated to methylammonium ion in the acidic solution, driving the equilibrium; the products are benzoic acid and CH3NH3+ (methylamine after basification).",
      "note": "McMurry 21.7 (Chemistry of Amides) describes acidic amide hydrolysis exactly this way, with the proton transfer from oxygen to nitrogen making nitrogen a better leaving group and protonation of the amine as the step that shifts the equilibrium, and notes that the conditions are more extreme than for esters or acid chlorides. Problem 21-20(a) asks for benzoic acid from N-ethylbenzamide, which is this reaction. Proteases hydrolyse peptide amides by the same acyl substitution, through an acyl-enzyme intermediate.",
      "options": {
        "A": "Correct. Water replaces the methylamino group at the acyl carbon; the acid and the amine (as its salt) are the products.",
        "B": "N-Methylbenzylamine is the LiAlH4 reduction product of this amide (C=O to CH2). Aqueous acid does not reduce; it hydrolyses, and the carbonyl carbon ends up as the carboxyl of benzoic acid.",
        "C": "Breaking the N-CH3 bond to release methanol would leave benzamide, but the N-C(alkyl) bond is an ordinary strong sigma bond with no leaving-group character. The bond that breaks in hydrolysis is the acyl C-N bond, releasing the whole methylamine.",
        "D": "Benzyl alcohol would need the carbonyl reduced to CH2OH as well as the amine removed. Hydrolysis adds water and removes the amine; it does not change the oxidation level of the acyl carbon, which stays at the acid stage."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q49_acetanilide_lialh4_scheme",
    "topic": "Chemistry of Amides",
    "difficulty_level": "Medium",
    "question_text": "N-Phenylacetamide (acetanilide) is treated with excess LiAlH4 in ether, then with water. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)Nc1ccccc1"
      ],
      "reagents": "1. LiAlH4 (excess), ether; 2. H2O",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring attached to an NH group whose nitrogen carries a carbon with a double-bonded oxygen and a methyl: acetanilide."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "N-Ethylaniline",
        "smiles": "CCNc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Aniline and ethanol",
        "smiles": "Nc1ccccc1.CCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-(Phenylamino)ethan-1-ol",
        "smiles": "OCCNc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "N-(1-Hydroxyethyl)aniline",
        "smiles": "CC(O)Nc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "LiAlH4 reduces every acid derivative, but amides alone give amines rather than alcohols. The first hydride adds to the carbonyl as usual, but the tetrahedral intermediate then expels oxygen, as an aluminate anion, rather than nitrogen, because the nitrogen lone pair pushes the oxygen out to form an iminium ion, C=N+. A second hydride adds to the iminium carbon. The net change is C=O to CH2 with the nitrogen kept: the acyl group becomes an alkyl group on nitrogen. This is specific to amides, whose nitrogen can support the iminium ion; an ester's oxygen cannot, so esters lose their alkoxy group instead.",
      "approach": "Step 1: Hydride adds to the acetanilide carbonyl: a tetrahedral intermediate with O-Al and N on the same carbon.\nStep 2: The nitrogen lone pair expels the oxygen as an aluminate, giving the iminium ion CH3CH=N+HPh.\nStep 3: A second hydride adds to the iminium carbon: CH3CH2-NHPh.\nStep 4: Water work-up gives N-ethylaniline. The acetyl group has become an ethyl group on nitrogen; nothing has been cleaved off.",
      "note": "McMurry 21.7 (Chemistry of Amides) states that amide reduction converts the carbonyl into a methylene group, that this is specific to amides, and that it proceeds by expulsion of the oxygen as an aluminate leaving group to give an iminium ion that is reduced further; this exact synthesis of N-ethylaniline from N-phenylacetamide is the section's worked example. Lactams give cyclic amines the same way, which is a standard route to pyrrolidines and piperidines (Ch 24).",
      "options": {
        "A": "Correct. The amide carbonyl is reduced through an iminium ion to CH2; the nitrogen keeps its acyl-derived carbon as an ethyl group.",
        "B": "Aniline and ethanol would result if the amide behaved like an ester, expelling the nitrogen group from the tetrahedral intermediate. It does not: the nitrogen lone pair drives out the oxygen instead, so the C-N bond survives and no alcohol is formed.",
        "C": "2-(Phenylamino)ethanol keeps the carbonyl oxygen as an OH on the carbon next to nitrogen, one carbon further along. Nothing shifts the oxygen; it is expelled from the tetrahedral intermediate altogether as aluminate.",
        "D": "N-(1-Hydroxyethyl)aniline is the hemiaminal that would result if the reaction stopped after one hydride and a protonation. It does not stop there: the intermediate loses oxygen to the iminium ion, which the excess LiAlH4 reduces before water is ever added."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q50_roadmap_acid_to_dimethylaminomethyl",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following synthetic pathway from cyclohexanecarboxylic acid. Determine the correct compounds matching labels B, C and D.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "OC(=O)C1CCCCC1",
          "label": "Compound A",
          "alt": "A six-membered ring bearing a CO2H group: cyclohexanecarboxylic acid, drawn as compound A.",
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
          "reagents": "SOCl2"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "(CH3)2NH (2 equiv)"
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
        "text": "B: cyclohexanecarbonyl chloride, C: N,N-dimethylcyclohexanecarboxamide, D: (dimethylaminomethyl)cyclohexane",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "B: cyclohexanecarbonyl chloride, C: N,N-dimethylcyclohexanecarboxamide, D: cyclohexylmethanol and dimethylamine",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "B: cyclohexanecarbonyl chloride, C: N,N-dimethylcyclohexanecarboxamide, D: N,N-dimethylcyclohexanamine",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "B: cyclohexanecarbonyl chloride, C: dimethylammonium cyclohexanecarboxylate, D: cyclohexylmethanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This is the chapter's standard three-step route from a carboxylic acid to an amine with the same number of carbons: activate the acid as its chloride, aminolyse the chloride to an amide, reduce the amide. Each step is a nucleophilic acyl substitution except the last, which is the one reduction in the chapter that removes the carbonyl oxygen entirely and keeps the nitrogen. Because LiAlH4 turns the amide C=O into CH2, the carbon skeleton of the product is that of the acid, with the former carboxyl carbon now bonded to nitrogen.",
      "approach": "Step 1: A + SOCl2: through the acyl chlorosulfite, the acid becomes B, cyclohexanecarbonyl chloride.\nStep 2: B + dimethylamine (two equivalents, one to take up HCl): aminolysis gives C, N,N-dimethylcyclohexanecarboxamide, a tertiary amide.\nStep 3: C + LiAlH4: hydride adds, oxygen leaves as aluminate to give an iminium ion, a second hydride reduces it; water gives D, (dimethylaminomethyl)cyclohexane, C6H11CH2N(CH3)2.\nStep 4: Check: seven carbons in the acid, seven in the amine plus the two N-methyls; the nitrogen carries exactly the two methyls it brought.",
      "note": "McMurry 21.7 (Chemistry of Amides) sets this route as Problem 21-21, starting one step earlier from bromocyclohexane via Grignard carboxylation (20.5), and describes amide reduction as specific to amides, converting the carbonyl into a methylene group by way of an iminium ion. Acid chloride formation is 21.3 and aminolysis with two equivalents of amine is 21.4. The alternative, alkylating dimethylamine with cyclohexylmethyl bromide, would over-alkylate to the quaternary salt; the amide route is clean.",
      "options": {
        "A": "Correct. Acid chloride, then the tertiary amide, then LiAlH4 reduction of the amide carbonyl to CH2 with the nitrogen retained.",
        "B": "Cyclohexylmethanol plus dimethylamine would be the ester-style cleavage, with nitrogen leaving the tetrahedral intermediate. Amides do the opposite: the nitrogen lone pair expels oxygen, and the C-N bond survives the reduction.",
        "C": "N,N-Dimethylcyclohexanamine has the nitrogen directly on the ring and one carbon fewer. The carboxyl carbon is not lost in any step; it becomes the CH2 between the ring and the nitrogen.",
        "D": "The acid chloride reacts with dimethylamine by aminolysis, not merely as an acid: chloride leaves and the amide forms. A salt would form only if the acid itself (A) met the amine, which is why A is converted to B first."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q51_basic_amide_hydrolysis_difficulty",
    "topic": "Chemistry of Amides",
    "difficulty_level": "Medium",
    "question_text": "Basic hydrolysis of an amide is much harder than basic hydrolysis of an ester, and harder than acidic hydrolysis of the same amide. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "The tetrahedral intermediate must expel amide ion, NH2-, a very poor leaving group, so the elimination step is slow; in acid the nitrogen is protonated first and leaves as neutral NH3",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Hydroxide cannot add to an amide carbonyl at all, because resonance from nitrogen removes its electrophilicity completely",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Hydroxide deprotonates the amide N-H, and the resulting anion repels a second hydroxide",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Amides hydrolyse by SN2 attack of hydroxide on the nitrogen, which is slow because nitrogen is not a good electrophile",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Nucleophilic acyl substitution has two steps, and either can be slow. For amides both are unfavourable: resonance donation from nitrogen makes the carbonyl a weak electrophile, so addition of hydroxide is slow, and once the tetrahedral intermediate forms it must expel NH2-, the conjugate base of ammonia (pKa 36), a far worse leaving group than an alkoxide (pKa 16) or chloride. In acid the situation changes because the intermediate's nitrogen is protonated before it leaves, so the leaving group is a neutral amine, and the amine is then protonated again to pull the equilibrium forward.",
      "approach": "Step 1: Basic path: hydroxide adds to the amide carbonyl (slow, because of resonance), giving RC(O-)(OH)NH2.\nStep 2: To go forward the intermediate must lose NH2-. Amide ion is an extremely strong base and a very poor leaving group, so most intermediates simply expel hydroxide again and return to the amide.\nStep 3: When NH2- does leave, it is protonated by the carboxylic acid formed, giving carboxylate and NH3, which makes the overall reaction go once it happens.\nStep 4: Acidic path: protonation of the carbonyl speeds addition, and a proton transfer to nitrogen within the intermediate converts the leaving group to NH3, so elimination is easy; protonation of the released NH3 drives the equilibrium.",
      "note": "McMurry 21.7 (Chemistry of Amides) states that basic hydrolysis is substantially more difficult than the acid-catalysed reaction because amide ion is a very poor leaving group, making the elimination step difficult, and describes the acidic path with its proton transfer from oxygen to nitrogen. The same poor-leaving-group logic is why an amide cannot be converted directly into any more reactive derivative (21.2). Biology avoids the problem with proteases, which use an acyl-enzyme intermediate and general acid catalysis.",
      "options": {
        "A": "Correct. The bottleneck in base is expulsion of NH2-; acid sidesteps it by protonating the nitrogen so that a neutral amine leaves.",
        "B": "Resonance makes the amide carbonyl less electrophilic, not inert: hydroxide does add, slowly, and amides are hydrolysed by hot aqueous base given enough time. The greater obstacle is the elimination step after addition.",
        "C": "Primary and secondary amide N-H protons are weakly acidic (pKa about 17) and a little deprotonation does occur in strong base, which slows things further, but tertiary amides with no N-H are also hard to hydrolyse in base. The general cause is the leaving group, which applies to all three classes.",
        "D": "Hydroxide attacks the carbonyl carbon, never the nitrogen, and no SN2 at nitrogen occurs in acyl substitution. The mechanism is addition to the carbonyl followed by elimination; the difficulty lies in that elimination."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q52_thioesters_in_nature",
    "topic": "Chemistry of Thioesters and Acyl Phosphates",
    "difficulty_level": "Medium",
    "question_text": "Living organisms carry out nucleophilic acyl substitutions on thioesters (acyl CoA's) and acyl phosphates, never on acid chlorides or acid anhydrides. Why those two classes?",
    "options": [
      {
        "option_id": "A",
        "text": "Thioesters and acyl phosphates are reactive enough toward nucleophiles to undergo acyl substitution, yet stable enough in water to survive in a cell; acid chlorides and anhydrides react with water so fast that they cannot exist there",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cells contain no chloride ion, so acid chlorides cannot be made",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Thioesters are more reactive than acid chlorides, so they give faster reactions in the cell",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Enzymes can only bind molecules that contain sulfur or phosphorus",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The reactivity order acid chloride > anhydride > thioester > ester > amide is a scale of two things at once: how readily a derivative is attacked, and how readily it is destroyed by the water that fills a cell. Acid chlorides and anhydrides sit at the top and are hydrolysed within seconds in water, so nothing could store or transport them. Esters and amides are stable but sluggish. Thioesters and acyl phosphates occupy the middle: their carbonyl carbons are electrophilic enough for an enzyme-bound nucleophile to attack, and RS- and phosphate are good enough leaving groups, yet uncatalysed hydrolysis is slow enough for acetyl CoA to persist. Nature chose the derivatives that are reactive but not suicidal.",
      "approach": "Step 1: Place the classes on the reactivity ladder: chloride and anhydride at the top, thioester and acyl phosphate in the middle, ester and amide at the bottom.\nStep 2: Ask what happens to each in water: the top two are hydrolysed almost instantly, so they cannot be intermediates in an aqueous cell.\nStep 3: Ask what an enzyme needs: a derivative that a thiol, alcohol, amine or carbanion nucleophile can attack under mild conditions, which excludes amides and makes esters marginal.\nStep 4: Thioesters (acetyl CoA) and acyl phosphates (acyl adenylates) satisfy both demands, which is why the text's biological acyl substitutions all start from one of them.",
      "note": "McMurry 21.8 (Chemistry of Thioesters and Acyl Phosphates) states it plainly: neither is as reactive as an acid chloride or anhydride, yet both are stable enough to exist in living organisms while still reactive enough to undergo acyl substitution; and McMurry 21.2 adds that acid halides and anhydrides react so rapidly with water that they cannot exist for long in living organisms. Acyl adenylates are formed from acids and ATP (21.3, Figure 21.7) and acyl CoA's from acyl adenylates and coenzyme A (Figure 21.10).",
      "options": {
        "A": "Correct. The two biological classes sit in the window of the reactivity order where acyl substitution is feasible but hydrolysis is not instantaneous.",
        "B": "Cells contain plenty of chloride; blood plasma is about 0.1 M in Cl-. The absence of acid chlorides is a matter of stability, not of a missing element: any acid chloride formed would be hydrolysed at once.",
        "C": "Thioesters are less reactive than acid chlorides, not more; the text places them below anhydrides and above esters. Their moderate reactivity is exactly what makes them usable: reactive enough to be attacked, stable enough to exist.",
        "D": "Enzymes bind and transform molecules of every element composition, esters and amides included (lipases and proteases). Sulfur and phosphorus appear in the biological derivatives because of the reactivity they confer, not because of any binding requirement."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q53_mevaldehyde_analogy",
    "topic": "Chemistry of Thioesters and Acyl Phosphates",
    "difficulty_level": "Medium",
    "question_text": "In terpenoid biosynthesis, the thioester (3S)-3-hydroxy-3-methylglutaryl CoA is reduced by NADPH to the aldehyde mevaldehyde, with release of coenzyme A. Which laboratory reaction is this the biological counterpart of?",
    "options": [
      {
        "option_id": "A",
        "text": "Partial reduction of an ester to an aldehyde with one equivalent of DIBAH at -78 °C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Reduction of an ester to a primary alcohol with excess LiAlH4",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Reaction of an acid chloride with a lithium diorganocopper reagent to give a ketone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Reaction of an ester with two equivalents of a Grignard reagent to give a tertiary alcohol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A hydride delivered to a thioester carbonyl does what any nucleophile does: it adds to give a tetrahedral intermediate, which expels the thiolate (CoA-S-) to leave an aldehyde. Whether the aldehyde survives depends on whether a second hydride follows. In the laboratory, excess LiAlH4 reduces the aldehyde at once to the alcohol, while a single equivalent of the bulky, weaker DIBAH at -78 °C stops at the aldehyde. An enzyme delivers exactly one hydride from NADPH and releases the aldehyde, so the biological reaction matches the DIBAH case: a nucleophilic acyl substitution by hydride that stops at the aldehyde oxidation level.",
      "approach": "Step 1: Classify the reaction: a thioester C(=O)SCoA becomes an aldehyde CHO, with CoA-SH released. The nucleophile is hydride (from NADPH) and the leaving group is the thiolate.\nStep 2: That is a nucleophilic acyl substitution by hydride, the first stage of any hydride reduction of an acid derivative.\nStep 3: The product is the aldehyde, not the alcohol, so only one hydride is delivered: a partial reduction.\nStep 4: The laboratory reagent that does one-hydride partial reduction of an ester is DIBAH at low temperature; LiAlH4 would go on to the alcohol.",
      "note": "McMurry 21.8 (Chemistry of Thioesters and Acyl Phosphates) gives this reaction as an example of nucleophilic acyl substitution on a thioester by hydride to effect partial reduction to an aldehyde, and McMurry 21.6 notes that such partial reductions occur in numerous biological pathways with a thioester or acyl phosphate as substrate, right after describing DIBAH's role in the laboratory. Mevaldehyde is on the route to mevalonate and the terpenoids of 27.5; the enzyme, HMG-CoA reductase, is the target of statin drugs.",
      "options": {
        "A": "Correct. One hydride substitutes the thiolate and the aldehyde is released; DIBAH does the same to an ester when limited to one equivalent at low temperature.",
        "B": "LiAlH4 in excess reduces the aldehyde formed as fast as it appears and gives the primary alcohol. The enzyme delivers one hydride and stops, so the alcohol is not the analogue; the cell would need a second reductase for that.",
        "C": "A Gilman reagent delivers a carbon nucleophile and gives a ketone with a new C-C bond. NADPH delivers hydride, so the product is an aldehyde and no carbon is added.",
        "D": "Two Grignard equivalents add two carbon groups and give a tertiary alcohol. The biological reaction adds one hydride and no carbon; the oxidation level drops by one step, to the aldehyde."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q54_nylon_66_monomers",
    "topic": "Polyamides and Polyesters: Step-Growth Polymers",
    "difficulty_level": "Easy",
    "question_text": "Which pair of monomers gives nylon 66 on heating?",
    "options": [
      {
        "option_id": "A",
        "text": "Hexanedioic acid (adipic acid) and hexane-1,6-diamine",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Hexanoic acid and hexan-1-amine",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "ε-Caprolactam alone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzene-1,4-dicarboxylic acid (terephthalic acid) and benzene-1,4-diamine",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A polyamide forms when every monomer can make two amide bonds, so that each new link leaves a reactive end for the next. A diacid and a diamine do this: amide formation at one end of each leaves an acid or an amine at the other, and the chain grows one discrete acyl substitution at a time, which is what makes it a step-growth polymer. The numbers in a nylon's name count the carbons in the diamine and then in the diacid. Nylon 66 uses a six-carbon diamine and a six-carbon diacid; nylon 6 comes from one monomer, the seven-membered lactam of 6-aminohexanoic acid.",
      "approach": "Step 1: Decode the name: 66 means six carbons in the diamine and six in the diacid.\nStep 2: Six-carbon diamine: hexane-1,6-diamine (hexamethylenediamine). Six-carbon diacid: hexanedioic acid (adipic acid).\nStep 3: Heating the pair at about 280 °C forms an amide at each end of each monomer, with loss of water, giving -[NH(CH2)6NHC(=O)(CH2)4C(=O)]n-.\nStep 4: Check the distractors: monofunctional partners cannot grow a chain; caprolactam gives nylon 6; the aromatic pair gives Kevlar.",
      "note": "McMurry 21.9 (Polyamides and Polyesters: Step-Growth Polymers) gives nylon 66 from adipic acid and hexamethylenediamine at 280 °C, explains the 66 designation, credits Carothers at DuPont in 1930, and lists nylon 6 (Perlon) from caprolactam in Table 21.2. Problem 21-24 asks for a segment of Kevlar from terephthalic acid and p-phenylenediamine, option D's pair. The contrast with chain-growth polymers (polyethylene, 8.10 and 14.6) is that each amide bond here forms in an independent step.",
      "options": {
        "A": "Correct. A six-carbon diamine and a six-carbon diacid, each forming two amide links, give nylon 66.",
        "B": "Hexanoic acid and hexan-1-amine each have only one functional group. They form a single amide, N-hexylhexanamide, and the chain cannot grow: both ends are dead.",
        "C": "ε-Caprolactam, the cyclic amide of 6-aminohexanoic acid, polymerises by ring opening to nylon 6, whose repeat unit has six carbons and comes from one monomer. Its name carries a single 6 for that reason.",
        "D": "Terephthalic acid and benzene-1,4-diamine give the aromatic polyamide Kevlar, whose rigid rings make it strong enough for bulletproof vests. It is a nylon in the broad sense but not nylon 66."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q55_absorbable_sutures",
    "topic": "Polyamides and Polyesters: Step-Growth Polymers",
    "difficulty_level": "Medium",
    "question_text": "Surgical sutures made from a poly(glycolic acid)/poly(lactic acid) copolymer are completely absorbed by the body within about 90 days, whereas a nylon suture is permanent. What accounts for the difference?",
    "options": [
      {
        "option_id": "A",
        "text": "The copolymer is a polyester and its ester links are hydrolysed under physiological conditions; nylon is a polyamide, and amides, the least reactive acid derivatives, are hydrolysed far more slowly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The copolymer is a chain-growth polymer that unzips from one end, whereas nylon is step-growth and cannot",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Nylon is heavily cross-linked, so water cannot reach its backbone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Glycolic and lactic acids are water-soluble, so the polymer simply dissolves without any bond breaking",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A step-growth polymer is only as durable as the acyl derivative that links its monomers, and the chapter's reactivity order predicts the outcome. Ester links are hydrolysed by water at body temperature and pH, slowly but steadily, so a polyester breaks back down into its hydroxy acids; if those are natural metabolites, glycolate and lactate, the body clears them. Amide links are far less reactive toward water, so a polyamide such as nylon survives indefinitely in tissue. The same ranking that says amides are hard to hydrolyse in the flask says nylon sutures are permanent.",
      "approach": "Step 1: Identify the linkages: PGA/PLA is joined by ester bonds; nylon by amide bonds.\nStep 2: Apply the reactivity order: esters are hydrolysed under mild aqueous conditions; amides need hot acid or base for hours.\nStep 3: The polyester is cleaved link by link at physiological pH, releasing glycolic and lactic acids, both ordinary metabolites, over about 90 days.\nStep 4: Nylon's amide links are effectively inert to water at 37 °C, so the suture stays and must be removed.",
      "note": "McMurry 21.9 (Polyamides and Polyesters: Step-Growth Polymers) describes PGA, PLA and PHB as biodegradable polyesters, all susceptible to hydrolysis of their ester links, and gives the 90/10 PGA/PLA copolymer as the suture material absorbed within 90 days after surgery; it adds that PHB also degrades by an E1cB elimination of the oxygen beta to the carbonyl. Amide stability is the reason the text gives in 21.7 for the abundance of amides in living organisms.",
      "options": {
        "A": "Correct. Ester links hydrolyse under physiological conditions and amide links do not, which is the ester-versus-amide gap in the chapter's reactivity order applied to a polymer.",
        "B": "Both polymers are step-growth polymers, made by nucleophilic acyl substitution one link at a time; the text classifies polyesters and polyamides together on that basis. Degradation is by hydrolysis of individual links, not by unzipping.",
        "C": "Nylon 66 is a linear polymer with no covalent cross-links; its chains are held together by hydrogen bonds between amide groups. Water reaches the backbone perfectly well; the amide bonds simply do not react with it at a useful rate.",
        "D": "The monomers are water-soluble, but the polymer is not: a chain of thousands of ester-linked units is a solid fibre. It disappears only because its ester bonds are hydrolysed, releasing the soluble acids one unit at a time."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q56_ir_anhydride_identification",
    "topic": "Spectroscopy of Carboxylic Acid Derivatives",
    "difficulty_level": "Easy",
    "question_text": "A compound shows two strong carbonyl bands, at 1820 and $1760\\text{ cm}^{-1}$, and no absorption above $3100\\text{ cm}^{-1}$. Which compound fits?",
    "options": [
      {
        "option_id": "A",
        "text": "Acetic anhydride",
        "smiles": "CC(=O)OC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetyl chloride",
        "smiles": "CC(=O)Cl",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethyl acetate",
        "smiles": "CCOC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "N,N-Dimethylacetamide",
        "smiles": "CC(=O)N(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "All carbonyl compounds absorb strongly between 1650 and 1850 cm-1, and the position within that range tells the class. Strongly electron-withdrawing groups on the carbonyl (Cl, OCOR) shorten and stiffen the C=O and push its stretch to high frequency; resonance-donating groups (OR, NR2) lengthen it and pull the stretch down. An anhydride is unique among the common derivatives in showing two carbonyl bands, because its two coupled C=O groups vibrate in and out of phase at different frequencies, near 1820 and 1760.",
      "approach": "Step 1: Two carbonyl bands near 1820 and 1760: the signature of an acid anhydride, whose two C=O groups couple.\nStep 2: Confirm the high position: both bands are above 1750, consistent with the electron-withdrawing acyloxy group on each carbonyl.\nStep 3: No absorption above 3100: no O-H or N-H, consistent with an anhydride and excluding an acid or a primary or secondary amide.\nStep 4: Acetic anhydride fits; the other three each show a single carbonyl band at 1810, 1735 and 1650 respectively.",
      "note": "McMurry 21.10 (Spectroscopy of Carboxylic Acid Derivatives), Table 21.3, lists acetic anhydride at 1820 and 1760 and says acid anhydrides can be identified by that pair of absorptions; acid chlorides by their band near 1810; esters at 1735; and amides near the low end, 1690 down to 1650 for N,N-disubstituted ones. The text attributes the high frequencies to inductive withdrawal shortening the C=O and the low amide frequency to resonance donation from nitrogen lengthening it.",
      "options": {
        "A": "Correct. Two coupled carbonyl groups give two high-frequency bands, 1820 and 1760, and there is no O-H or N-H.",
        "B": "Acetyl chloride absorbs at 1810 cm-1, at the high end like the anhydride, but it has only one carbonyl and therefore only one band.",
        "C": "Ethyl acetate shows a single ester carbonyl band at 1735 cm-1, well below 1760, and no second band.",
        "D": "N,N-Dimethylacetamide has its single carbonyl band near 1650 cm-1, the lowest of the derivatives, because nitrogen's resonance donation weakens the C=O; it lacks both the high frequency and the second band."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q57_ir_frequency_reasoning",
    "topic": "Spectroscopy of Carboxylic Acid Derivatives",
    "difficulty_level": "Medium",
    "question_text": "Acetyl chloride absorbs at $1810\\text{ cm}^{-1}$ and N,N-dimethylacetamide at $1650\\text{ cm}^{-1}$, though both are acetyl compounds. What accounts for the 160 cm-1 difference?",
    "options": [
      {
        "option_id": "A",
        "text": "Chlorine withdraws electron density inductively, shortening and stiffening the C=O; the amide nitrogen donates a lone pair into the carbonyl by resonance, giving the C=O partial single-bond character and lowering its frequency",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Chlorine is heavier than nitrogen, and a heavier substituent raises the stretching frequency of the neighbouring bond",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The amide is hydrogen-bonded through its N-H, which weakens the C=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Chlorine donates a lone pair into the carbonyl by resonance, strengthening it, while nitrogen withdraws electrons inductively",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A stretching frequency rises with bond strength (force constant) and falls with the reduced mass of the two atoms bonded, and in a C=O stretch the atoms are always carbon and oxygen, so mass is not what changes between derivatives. What changes is the bond order. An electron-withdrawing group on the carbonyl carbon pulls density away, disfavours the polar C+-O- resonance form and leaves the C=O closer to a full double bond, so it is stiffer and absorbs higher. A group whose lone pair conjugates with the carbonyl feeds the form in which C-O is single and the heteroatom is positive, lowering the bond order and the frequency. Nitrogen does this far more than oxygen, and chlorine hardly at all.",
      "approach": "Step 1: In acetyl chloride the substituent on the carbonyl is Cl: strongly electronegative, poor at resonance donation (its 3p lone pairs overlap poorly with the carbonyl pi system). Net effect: electron withdrawal, a shorter, stiffer C=O, 1810.\nStep 2: In N,N-dimethylacetamide the substituent is N(CH3)2: less electronegative, and its lone pair conjugates strongly with the C=O, giving the resonance form CH3C(O-)=N+(CH3)2 real weight.\nStep 3: That form makes the C-O bond partly single, lowering its force constant: 1650.\nStep 4: The ester (1735) sits between, oxygen donating by resonance less than nitrogen; the ordering of IR frequencies is the ordering of reactivity in 21.2, for the same electronic reason.",
      "note": "McMurry 21.10 (Spectroscopy of Carboxylic Acid Derivatives) gives exactly this explanation: acid chlorides and anhydrides carry a strong electron-withdrawing group whose inductive withdrawal shortens the C=O and raises its frequency, while for amides the delocalisation of electron density from nitrogen into the carbonyl lengthens the C=O and lowers its frequency, with the degree of N-substitution setting the exact position (1690 acetamide, 1680 N-methyl, 1650 N,N-dimethyl). The same substituent effects govern reactivity in 21.2 and electrophilic aromatic substitution in 16.4.",
      "options": {
        "A": "Correct. Inductive withdrawal by Cl keeps the C=O a stiff double bond; resonance donation by nitrogen gives it single-bond character and a lower frequency.",
        "B": "Mass affects a stretching frequency only through the two atoms whose bond is stretching, carbon and oxygen in both compounds. The substituent's mass does not enter; if it did, the heavy Cl would if anything lower the frequency, not raise it.",
        "C": "N,N-Dimethylacetamide has no N-H and cannot donate a hydrogen bond, yet it has the lowest carbonyl frequency of all the amides in Table 21.3. The lowering is electronic, from nitrogen's lone pair, not from hydrogen bonding.",
        "D": "The roles are reversed. Chlorine's lone pairs are in 3p orbitals that overlap poorly with the carbonyl pi system, so it withdraws far more than it donates; nitrogen, in the same row as carbon and oxygen, donates strongly by resonance."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q58_c4h9no_ir_1650",
    "topic": "Spectroscopy of Carboxylic Acid Derivatives",
    "difficulty_level": "Medium",
    "question_text": "A compound of formula C4H9NO shows a single strong band at $1650\\text{ cm}^{-1}$ and no absorption between 3100 and $3500\\text{ cm}^{-1}$. Which structure fits?",
    "options": [
      {
        "option_id": "A",
        "text": "N,N-Dimethylacetamide",
        "smiles": "CC(=O)N(C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Butanamide",
        "smiles": "CCCC(=O)N",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "N-Methylpropanamide",
        "smiles": "CCC(=O)NC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-Aminobutan-2-one",
        "smiles": "CC(=O)CCN",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "C4H9NO has one degree of unsaturation, and a strong band at 1650 puts it in an amide carbonyl. Within the amides the exact position tracks the substitution on nitrogen: a primary amide near 1690, an N-substituted one near 1680, an N,N-disubstituted one near 1650, because each replacement of N-H by N-alkyl increases the resonance donation from nitrogen. The N-H region settles it independently: primary amides show two N-H stretches near 3350 and 3180, secondary amides one near 3300, and a tertiary amide none at all.",
      "approach": "Step 1: Formula: C4H9NO, unsaturation (2 x 4 + 2 + 1 - 9)/2 = 1, one C=O or one ring.\nStep 2: 1650 cm-1: a carbonyl at the low end of the range, an amide; too low for a ketone (1715) or ester (1735).\nStep 3: Nothing at 3100-3500: no N-H (and no O-H), so the amide nitrogen carries no hydrogen: a tertiary, N,N-disubstituted amide.\nStep 4: The only C4H9NO tertiary amide among the options is N,N-dimethylacetamide, CH3C(=O)N(CH3)2, whose listed absorption is 1650.",
      "note": "McMurry 21.10 (Spectroscopy of Carboxylic Acid Derivatives) asks this in Problem 21-26(b) and supplies the values in Table 21.3: acetamide 1690, N-methylacetamide 1680, N,N-dimethylacetamide 1650, with the note that the degree of substitution on nitrogen affects the exact position because resonance from nitrogen lengthens the C=O. The N-H stretch positions are from the amine and amide discussion in 24.10; the text's own Ch 21 argument rests on the carbonyl position alone.",
      "options": {
        "A": "Correct. A tertiary amide: carbonyl at 1650 and no N-H stretch, with the right formula.",
        "B": "Butanamide is a primary amide: its carbonyl is near 1690 and it shows two N-H stretches near 3350 and 3180. The spectrum has neither the higher carbonyl nor any N-H.",
        "C": "N-Methylpropanamide is a secondary amide: carbonyl near 1680 and one N-H stretch near 3300. The absence of anything above 3100 rules it out.",
        "D": "4-Aminobutan-2-one is C4H9NO but has a ketone (1715) and a primary amine (two N-H stretches near 3300-3400). Its carbonyl is 65 cm-1 too high and its N-H region is not empty."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q59_elucidation_methyl_benzoate",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound X is a colourless liquid (bp 199 °C) with a pleasant odour. It does not effervesce with NaHCO3 and gives no precipitate with 2,4-dinitrophenylhydrazine. Heating X with aqueous NaOH, then acidifying, gives a white solid (mp 122 °C) that does effervesce with NaHCO3. Combustion analysis gives C 70.6% and H 5.9% by mass. IR: a strong band at $1720\\text{ cm}^{-1}$, strong bands at 1280 and $1110\\text{ cm}^{-1}$, weak bands at 3030 and $2950\\text{ cm}^{-1}$, bands at 1600 and $1450\\text{ cm}^{-1}$, and strong bands at 710 and $690\\text{ cm}^{-1}$; nothing above 3100 and nothing between 2500 and $2700\\text{ cm}^{-1}$. $^1\\text{H}$ NMR: 8.05 (doublet, 2H), 7.55 (triplet, 1H), 7.44 (triplet, 2H), 3.92 (singlet, 3H). The mass spectrum is shown. Which structure is X?",
    "question_smiles": "",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 50,
          "y": 12
        },
        {
          "x": 51,
          "y": 22
        },
        {
          "x": 77,
          "y": 55
        },
        {
          "x": 105,
          "y": 100
        },
        {
          "x": 136,
          "y": 35
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Methyl benzoate",
        "smiles": "COC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Phenyl acetate",
        "smiles": "CC(=O)Oc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzyl formate",
        "smiles": "O=COCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-Methoxybenzaldehyde",
        "smiles": "COc1ccc(C=O)cc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The chemical tests classify the compound before any spectrum is read. No bicarbonate reaction and no 2,4-DNP precipitate exclude an acid, an aldehyde and a ketone; a carbonyl band with no O-H is then an ester or an amide, and the formula has no nitrogen. Saponification followed by acidification gives a solid acid of mp 122 °C, benzoic acid, which says the acyl half of the ester is benzoyl. The IR confirms an aromatic ester (1720, lower than a saturated ester's 1735 because of conjugation; two strong C-O bands) with a monosubstituted ring (710/690). The NMR then shows the alkyl half, and the mass spectrum shows the benzoyl cation as the base peak.",
      "approach": "Step 1: Formula. Per 100 g: C 70.6/12.01 = 5.88, H 5.9/1.008 = 5.85, O by difference 23.5/16.00 = 1.47. Divide by 1.47: C 4, H 4, O 1, so (C4H4O)n; M+ 136 gives C8H8O2. Unsaturation = (2 x 8 + 2 - 8)/2 = 5: a benzene ring (4) plus one C=O.\nStep 2: Class. No NaHCO3 reaction, no 2,4-DNP, no O-H, C=O at 1720 with strong C-O at 1280 and 1110: an ester. Saponification gives benzoic acid (mp 122 °C), so it is a benzoate.\nStep 3: NMR. 8.05 (2H, d), 7.55 (1H, t), 7.44 (2H, t): a monosubstituted ring whose ortho protons are deshielded by the carbonyl. 3.92 (3H, s): an OCH3 on an ester oxygen. X is methyl benzoate.\nStep 4: Mass spectrum. M+ 136 (35%), loss of OCH3 (31) to the benzoyl cation PhCO+ at 105, the base peak; loss of CO from that gives the phenyl cation at 77; 51 is C4H3+. Everything is consistent.",
      "note": "McMurry 21.10 (Spectroscopy of Carboxylic Acid Derivatives) gives the ester carbonyl at 1735 for saturated and 1720 for aromatic esters (Table 21.3, ethyl benzoate) and the alpha-proton region near 2 δ; it does not treat the OCH3 shift or mass spectra, which come from McMurry 13.10 and 12.3. The saponification test is McMurry 21.6 used as an analytical tool: the acid recovered identifies the acyl half. A student who reaches for phenyl acetate should notice that its acetyl group would give a 3H singlet near 2.3 and that saponification would give acetic acid, a liquid, not a 122 °C solid.",
      "options": {
        "A": "Correct. C8H8O2 with five degrees of unsaturation, an aromatic ester at 1720 that saponifies to benzoic acid, a monosubstituted ring with deshielded ortho protons, an ester OCH3 singlet at 3.92, and PhCO+ at 105 as the base peak.",
        "B": "Phenyl acetate is C8H8O2 and an ester, but its acetyl methyl would appear as a 3H singlet near 2.3, not 3.9; its aryl ester carbonyl absorbs near 1765; saponification would give acetic acid and phenol, neither a 122 °C solid; and its mass spectrum has no 105 peak, the base peak being phenol at 94 or acetyl at 43.",
        "C": "Benzyl formate is C8H8O2 with an ester carbonyl near 1725, but its NMR would show a formyl singlet near 8.1 (1H) and a CH2 singlet near 5.2 (2H), not an OCH3 at 3.92; saponification would give formic acid and benzyl alcohol, both liquids.",
        "D": "4-Methoxybenzaldehyde is C8H8O2 with an OCH3 singlet (3.85), but it is an aldehyde: it would give a 2,4-DNP precipitate, show the CHO proton at 9.9 δ and aldehyde C-H bands near 2750 and 2850, have a conjugated aldehyde C=O near 1690, and show two 2H doublets for a para-disubstituted ring."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch21_q60_elucidation_propanamide",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound Y is a white solid (mp 79 °C). It does not effervesce with NaHCO3 and does not dissolve in dilute HCl. Heated with aqueous NaOH, it evolves a gas that turns moist red litmus paper blue. Combustion analysis gives C 49.3%, H 9.6% and N 19.2% by mass. IR: two bands at 3350 and $3180\\text{ cm}^{-1}$, a strong band at $1650\\text{ cm}^{-1}$ and a band at $1630\\text{ cm}^{-1}$; nothing near 2250 and nothing between 1700 and $1800\\text{ cm}^{-1}$. Mass spectrum: $\\text{M}^+$ at $m/z = 73$, a base peak at 44, and peaks at 57 and 29. The $^1\\text{H}$ NMR spectrum is shown. Which structure is Y?",
    "question_smiles": "",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 6.3,
          "y": 2,
          "label": "singlet"
        },
        {
          "x": 2.22,
          "y": 2,
          "label": "quartet"
        },
        {
          "x": 1.15,
          "y": 3,
          "label": "triplet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Propanamide",
        "smiles": "CCC(=O)N",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "N-Methylacetamide",
        "smiles": "CC(=O)NC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "N,N-Dimethylformamide",
        "smiles": "O=CN(C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acetone oxime",
        "smiles": "CC(C)=NO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The tests place the compound: not an acid (no bicarbonate reaction), not a basic amine (insoluble in dilute HCl), yet it releases ammonia when heated with base, which is the behaviour of a primary amide, whose hydrolysis expels NH3. The IR agrees: two N-H stretches for an NH2 group, a carbonyl at the amide position of 1650 with the N-H bend beside it at 1630, and no nitrile band. One degree of unsaturation is the C=O. The NMR then fixes the alkyl part, and the four C3H7NO candidates differ in their proton patterns so completely that a single spectrum decides.",
      "approach": "Step 1: Formula. Per 100 g: C 49.3/12.01 = 4.10, H 9.6/1.008 = 9.52, N 19.2/14.01 = 1.37, O by difference 21.9/16.00 = 1.37. Divide by 1.37: C 3, H 7, N 1, O 1: C3H7NO, M = 73, matching M+. Unsaturation = (2 x 3 + 2 + 1 - 7)/2 = 1.\nStep 2: Class. Ammonia evolved with hot NaOH, two N-H stretches, C=O at 1650: a primary amide, RC(=O)NH2. The C=O uses the one degree of unsaturation.\nStep 3: NMR. 1.15 (3H, t) and 2.22 (2H, q): an ethyl group whose CH2 is next to the carbonyl. 6.3 (2H, broad singlet): the NH2 protons. R is ethyl: propanamide.\nStep 4: Mass spectrum. Alpha cleavage of the ethyl group gives H2N-C=O+ at m/z 44, the base peak typical of primary amides; loss of NH2 gives the propanoyl cation at 57; 29 is C2H5+.",
      "note": "McMurry 21.10 (Spectroscopy of Carboxylic Acid Derivatives) puts primary amide carbonyls near 1690 in Table 21.3 (acetamide); propanamide's band is somewhat lower in the solid state, where hydrogen bonding between N-H and C=O lowers the carbonyl frequency, and the 1630 band is the N-H bend. The two N-H stretches of a primary amide and the exchangeable, broad NH2 signal are McMurry 24.10 material; the mass spectrum of amides is not in the text, and the m/z 44 fragment is the amide analogue of the acylium ions of 12.3. The ammonia test is McMurry 21.7's hydrolysis used as a classification test.",
      "options": {
        "A": "Correct. C3H7NO, a primary amide by tests and IR, an ethyl group next to the carbonyl (2H quartet at 2.22, 3H triplet at 1.15), a broad 2H NH2 signal, and the H2NCO+ ion at 44.",
        "B": "N-Methylacetamide is C3H7NO and an amide, but a secondary one: one N-H stretch near 3300 rather than two, and an NMR with a 3H singlet near 2.0 (acetyl), a 3H doublet near 2.8 (N-CH3) and a single N-H, no ethyl quartet-triplet pair. It releases methylamine, not ammonia, on hydrolysis.",
        "C": "N,N-Dimethylformamide is C3H7NO with a carbonyl near 1670 but no N-H at all, so no bands at 3350 and 3180; its NMR shows a formyl singlet near 8.0 and two 3H singlets near 2.9 and 2.8. Hydrolysis gives dimethylamine, whose smell and pH would match, but the IR does not.",
        "D": "Acetone oxime, (CH3)2C=N-OH, is C3H7NO with its one degree of unsaturation in a C=N (near 1670) and a broad O-H near 3250, not two N-H stretches and a C=O; its NMR has two 3H singlets near 1.9 and an OH, no ethyl pattern, and it gives no ammonia with base."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  }
];
