// OChemStudyBuddy - McMurry Chapter 22
// Author: A. Elangovan, PhD
var CH22_QUESTIONS = [
  {
    "question_id": "ch22_q_kinetic_enolate_alkylation_scheme",
    "topic": "Alkylation of Enolate Ions",
    "difficulty_level": "Hard",
    "question_text": "2-Methylcyclohexanone is treated with one equivalent of LDA in THF at -78 °C, and iodomethane is then added. What is the major product?",
    "reaction_scheme": {
      "reactants": [
        "CC1CCCCC1=O"
      ],
      "reagents": "1. LDA, THF; 2. CH3I",
      "conditions": "-78 °C, then warm",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-membered ring with a C=O on one carbon and a methyl group on the ring carbon next to it: 2-methylcyclohexanone."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2,6-Dimethylcyclohexanone",
        "smiles": "CC1CCCC(C)C1=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2,2-Dimethylcyclohexanone",
        "smiles": "CC1(C)CCCCC1=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Methoxy-6-methylcyclohexene (O-methylation)",
        "smiles": "COC1=CCCCC1C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Ethylcyclohexanone",
        "smiles": "CCC1CCCCC1=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An unsymmetrical ketone has two alpha positions, and which one is deprotonated depends on the base and the conditions. A strong, bulky base used in one equivalent at low temperature removes the most accessible alpha proton fastest and does so irreversibly, because there is no proton source to allow equilibration: this is the kinetic enolate, formed at the less substituted alpha carbon. Under equilibrating conditions, a weaker base in a protic solvent at room temperature, the enolates interconvert and the more substituted, more stable enolate predominates: the thermodynamic enolate. Alkylation of the enolate with an alkyl halide is an SN2 reaction at the enolate carbon, so the alkyl group lands where the negative charge sits.",
      "approach": "Step 1: Identify the alpha carbons of 2-methylcyclohexanone: C2, tertiary, bearing the methyl, with one alpha hydrogen; C6, secondary, with two.\nStep 2: LDA (one equivalent, THF, -78 °C) removes a C6 proton, the less hindered position, fast and irreversibly: the kinetic enolate, with the C=C between C1 and C6.\nStep 3: Iodomethane is attacked by the enolate carbon, C6, in an SN2 reaction; C-alkylation dominates over O-alkylation.\nStep 4: Product: 2,6-dimethylcyclohexanone, one methyl on each side of the carbonyl, mainly as the racemic trans/cis mixture; the text reports alkylation primarily at C6.",
      "note": "McMurry 22.7 (Alkylation of Enolate Ions) states that alkylation of 2-methylcyclohexanone gives a mixture because both enolates form, and that the major product arises by alkylation at the less hindered, more accessible position, C6 (secondary) rather than C2 (tertiary). The mirror-image observation is in 22.3: acid-catalysed bromination of the same ketone goes to C2, because the more substituted enol is favoured at equilibrium. The text does not use the terms kinetic and thermodynamic enolate; they are standard lecture and ACS vocabulary for exactly this contrast.",
      "options": {
        "A": "Correct. LDA at -78 °C gives the kinetic enolate at the less substituted C6, and methylation there gives 2,6-dimethylcyclohexanone.",
        "B": "2,2-Dimethylcyclohexanone is the product of methylating the thermodynamic enolate, the more substituted one at C2, which predominates only under equilibrating conditions (a weaker base, a protic solvent, room temperature). LDA at -78 °C removes the more accessible C6 proton instead.",
        "C": "An enolate can react at oxygen to give an enol ether, but with an alkyl halide the reaction on carbon is much the more common, as the text notes, and the methyl goes to C6; the O-methyl enol ether is a minor path with iodomethane.",
        "D": "2-Ethylcyclohexanone would need the methyl group's own hydrogens to be removed and alkylated. They are on a carbon attached to the alpha carbon, not on the alpha carbon itself, so they are not acidic; no enolate can form there."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q1_enol_content",
    "topic": "Keto-Enol Tautomerism",
    "difficulty_level": "Medium",
    "question_text": "Which compound exists to the greatest extent as its enol tautomer at equilibrium?",
    "options": [
      {
        "option_id": "A",
        "text": "Pentane-2,4-dione",
        "smiles": "CC(=O)CC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclohexanone",
        "smiles": "O=C1CCCCC1",
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
        "text": "Acetic acid",
        "smiles": "CC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carbonyl compound with an alpha hydrogen is in equilibrium with its enol, but for an ordinary ketone the keto form wins overwhelmingly, because a C=O plus a C-H is stronger than a C=C plus an O-H. Two things can tip the balance toward the enol: conjugation of the enol C=C with a second carbonyl group, and an intramolecular hydrogen bond from the enol O-H to that second carbonyl's oxygen, which closes a six-membered ring. A 1,3-diketone has both, and its enol is the major species. Esters, acids and amides enolise even less than ketones, because their carbonyl is already stabilised by resonance donation from the heteroatom.",
      "approach": "Step 1: Cyclohexanone, a simple ketone: about 0.0001% enol at room temperature.\nStep 2: Ethyl acetate and acetic acid: the carbonyl carbon carries an oxygen whose resonance donation stabilises the keto form further, so the enol content is lower still.\nStep 3: Pentane-2,4-dione: the enol C=C is conjugated with the remaining C=O, and its O-H hydrogen-bonds to that carbonyl oxygen in a six-membered ring.\nStep 4: The diketone is about 76% enol at equilibrium; it is the only one of the four in which the enol predominates.",
      "note": "McMurry 22.1 (Keto-Enol Tautomerism) gives both figures, cyclohexanone at about 0.0001% enol and 2,4-pentanedione at about 76%, and states that the percentage is even lower for carboxylic acids, esters and amides, the enol predominating only when stabilised by conjugation or intramolecular hydrogen bonding. The same stabilisation makes the alpha hydrogens of 1,3-dicarbonyls unusually acidic (22.5, pKa 9 for a 1,3-diketone), which is why they are the substrates of choice for enolate alkylation (22.7).",
      "options": {
        "A": "Correct. Conjugation with the second carbonyl and an intramolecular hydrogen bond make the enol of pentane-2,4-dione the major tautomer, about three-quarters of the mixture.",
        "B": "Cyclohexanone enolises like any monoketone: the enol is present at about one part per million. It is reactive enough to carry the chemistry of 22.2 and 22.3, but it is not what is in the flask.",
        "C": "An ester enolises less than a ketone, because the alkoxy oxygen donates electron density into the carbonyl by resonance and stabilises the keto form. Ethyl acetate has essentially no enol at equilibrium.",
        "D": "A carboxylic acid is in the same position as an ester, with the added point that its O-H is the acidic hydrogen, not an alpha C-H. Its enol content is negligible, which is why acids need the Hell-Volhard-Zelinsky route to be alpha-brominated (22.4)."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q2_tautomers_vs_resonance",
    "topic": "Keto-Enol Tautomerism",
    "difficulty_level": "Easy",
    "question_text": "Acetone and its enol, prop-1-en-2-ol, are described as tautomers. Which statement about them is correct?",
    "options": [
      {
        "option_id": "A",
        "text": "They are constitutional isomers that interconvert by moving a hydrogen and a double bond; they are different compounds in equilibrium, not resonance forms of one compound",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "They are resonance forms of a single compound, differing only in where the electrons are drawn",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "They are stereoisomers, because the enol has a double bond that can be E or Z",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "They are constitutional isomers, and the enol is the more stable of the two at equilibrium",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tautomers and resonance forms are both written with a double-headed or equilibrium arrow between two drawings, and students confuse them for that reason. The test is whether atoms move. In resonance forms only electrons are redrawn; the nuclei stay put, and the two drawings describe one molecule. In tautomers a hydrogen atom has moved from carbon to oxygen and a double bond has moved from C=O to C=C: the atoms are connected differently, so the two structures are different compounds, constitutional isomers, in a real chemical equilibrium that can be catalysed by acid or base.",
      "approach": "Step 1: Compare connectivity: in acetone the alpha carbon carries three hydrogens and the oxygen none; in the enol the alpha carbon carries two hydrogens and the oxygen one. An atom has moved.\nStep 2: Moved atoms mean isomers, not resonance forms, which differ only in electron placement.\nStep 3: The isomers differ in connectivity, not in spatial arrangement, so they are constitutional isomers, not stereoisomers; the enol of acetone, with two identical methyl... no, with a CH2= terminus, has no E/Z geometry in any case.\nStep 4: At equilibrium the keto form dominates enormously for a simple ketone; the enol is present in trace amounts.",
      "note": "McMurry 22.1 (Keto-Enol Tautomerism) draws the distinction explicitly: tautomers are constitutional isomers, different compounds with different structures, whereas resonance forms are different representations of a single compound, differing only in the position of pi and nonbonding electrons. The word comes from the Greek for the same part. The enolate ion, by contrast, is one species with two resonance forms, charge on oxygen and charge on carbon (22.5, 22.6), which is the case where the resonance description is the right one.",
      "options": {
        "A": "Correct. A hydrogen has moved from carbon to oxygen, so the two structures are different compounds in equilibrium.",
        "B": "Resonance forms differ only in electron placement, with every atom in the same position. Here a hydrogen atom has changed its bonding partner, from carbon to oxygen, which no resonance form can do.",
        "C": "Stereoisomers share the same connectivity and differ in spatial arrangement. Acetone and its enol have different connectivity (the hydrogen is on a different atom), so they are constitutional isomers; and the enol of acetone, CH2=C(OH)CH3, has a terminal CH2 and no E/Z geometry.",
        "D": "The classification is right but the stability is backwards. For a simple ketone the keto tautomer is far more stable, and the enol is present only in trace amounts, about one part per million for cyclohexanone. Only 1,3-dicarbonyls have the enol as the major form."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q3_count_acidic_hydrogens",
    "topic": "Keto-Enol Tautomerism",
    "difficulty_level": "Easy",
    "question_text": "How many hydrogens in the compound shown are acidic enough to be removed by a strong base to give an enolate ion?",
    "question_smiles": "CC(=O)C(C)C",
    "structure_alt": "A carbonyl carbon bearing a methyl group on one side and, on the other, a carbon that carries a hydrogen and two methyl groups.",
    "options": [
      {
        "option_id": "A",
        "text": "4",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "10",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Only hydrogens on an alpha carbon, the carbon directly bonded to the carbonyl carbon, are acidic, because only their removal gives an anion whose charge can be delocalised onto the carbonyl oxygen. Hydrogens on carbons one bond further away (beta, gamma and so on) have no such resonance stabilisation and are as unreactive toward base as those of an alkane. So the count is a matter of finding every alpha carbon and adding up its hydrogens, whatever the carbons beyond them carry.",
      "approach": "Step 1: Locate the carbonyl carbon of 3-methylbutan-2-one, CH3-C(=O)-CH(CH3)2.\nStep 2: Its two alpha carbons are the methyl on one side (3 H) and the CH of the isopropyl group on the other (1 H).\nStep 3: The two methyls of the isopropyl group are beta carbons; their 6 hydrogens are not acidic.\nStep 4: Acidic hydrogens: 3 + 1 = 4.",
      "note": "McMurry 22.1 (Keto-Enol Tautomerism) states that only the hydrogens on the alpha position of carbonyl compounds are acidic, and that beta, gamma and delta hydrogens cannot be removed by base because the resulting anions cannot be resonance-stabilised by the carbonyl group; Problem 22-2 asks for exactly this count on the compounds of Problem 22-1. Which of the two alpha positions a base removes a proton from first is the kinetic-versus-thermodynamic question of 22.7.",
      "options": {
        "A": "Correct. Three hydrogens on the alpha methyl plus one on the alpha CH; the six methyl hydrogens of the isopropyl group are beta and not acidic.",
        "B": "Three counts only the methyl on the carbonyl and misses the single hydrogen on the other alpha carbon, the CH of the isopropyl group, which is also alpha and also acidic.",
        "C": "One counts only the isopropyl CH and misses the three hydrogens of the methyl group on the other side of the carbonyl, which are equally alpha.",
        "D": "Ten is every hydrogen in the molecule. The six on the isopropyl methyls are beta to the carbonyl; removing one would give an anion with no resonance path to oxygen, so they are not acidic."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q4_acid_catalysed_enolisation_step",
    "topic": "Keto-Enol Tautomerism",
    "difficulty_level": "Medium",
    "question_text": "Under acid catalysis, what is the first step in the conversion of cyclohexanone into its enol?",
    "options": [
      {
        "option_id": "A",
        "text": "Protonation of the carbonyl oxygen, giving a cation from which an alpha proton is then lost",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Removal of an alpha proton by the conjugate base of the acid, giving an enolate ion",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Protonation of the alpha carbon, giving a carbocation on the carbonyl carbon",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Addition of water to the carbonyl carbon, giving the hydrate, which then dehydrates toward the alpha carbon",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Enolisation is catalysed by both acid and base, but the two paths run in opposite order. In acid, the carbonyl oxygen is protonated first; the resulting cation is much more acidic at its alpha carbon, and loss of that proton (to water) gives the neutral enol, just as a carbocation loses a proton to give an alkene in an E1 reaction. In base, the alpha proton is removed first to give an enolate ion, and protonation of that anion on oxygen gives the enol. Acid works by making the alpha proton easier to lose; base works by being strong enough to take it as it is.",
      "approach": "Step 1: The Bronsted acid transfers a proton to the carbonyl oxygen of cyclohexanone, the most basic site: a resonance-stabilised oxocarbenium cation.\nStep 2: The positive charge is shared by carbon and oxygen, so an alpha C-H is now strongly acidic.\nStep 3: Water removes an alpha proton; the electrons of the C-H bond become the C=C of the enol and the positive oxygen becomes a neutral O-H.\nStep 4: Net: cyclohexanone to cyclohexen-1-ol with the acid regenerated, a true catalysis.",
      "note": "McMurry 22.1 (Keto-Enol Tautomerism), Figure 22.2, draws both mechanisms: (a) acid catalysis, protonation of the carbonyl oxygen followed by removal of H+ from the alpha position, compared with the E1 loss of a proton from a carbocation (11.10); (b) base catalysis, deprotonation to an enolate followed by reprotonation on oxygen. The acid path is the first step of acid-catalysed alpha halogenation (22.3, Figure 22.4), whose rate law, first order in ketone and in acid and independent of halogen, is the evidence that enol formation is rate-limiting.",
      "options": {
        "A": "Correct. Acid activates the carbonyl by protonating its oxygen; the cation then loses an alpha proton to give the enol.",
        "B": "Deprotonation first is the base-catalysed mechanism. The conjugate base of a strong acid (water, or a halide) is far too weak to remove a proton from a neutral ketone; only after the oxygen is protonated does the alpha C-H become acidic enough.",
        "C": "Protonating a carbon would give a cation with no resonance stabilisation and destroy an alpha C-H bond's chance of becoming the enol C=C. The proton goes to the most basic atom, the carbonyl oxygen.",
        "D": "The hydrate is formed reversibly in aqueous acid, but it is a dead end for enolisation: losing water from it simply regenerates the ketone. The enol comes from proton loss at the alpha carbon of the protonated ketone, not from a hydrate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q5_no_alpha_hydrogen",
    "topic": "Keto-Enol Tautomerism",
    "difficulty_level": "Medium",
    "question_text": "Which of these aldehydes cannot form an enol or an enolate?",
    "options": [
      {
        "option_id": "A",
        "text": "2,2-Dimethylpropanal",
        "smiles": "CC(C)(C)C=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propanal",
        "smiles": "CCC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Methylpropanal",
        "smiles": "CC(C)C=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acetaldehyde",
        "smiles": "CC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Enol and enolate formation both begin by removing a hydrogen from the alpha carbon, the carbon bonded to the carbonyl carbon. A carbonyl compound whose alpha carbon carries no hydrogen at all has nothing to lose: it cannot enolise, is not deuterated by D3O+, cannot be alpha-halogenated, and cannot be alkylated. The aldehyde hydrogen itself does not count, because it is on the carbonyl carbon, not alpha to it, and its removal would give an acyl anion with no resonance stabilisation.",
      "approach": "Step 1: For each aldehyde, find the alpha carbon (the one attached to CHO) and count its hydrogens.\nStep 2: Acetaldehyde: alpha CH3, three hydrogens. Propanal: alpha CH2, two. 2-Methylpropanal: alpha CH, one. All three enolise.\nStep 3: 2,2-Dimethylpropanal: the alpha carbon is quaternary, C(CH3)3, with no hydrogen.\nStep 4: With no alpha hydrogen there is no enol and no enolate; this aldehyde is inert to the whole chemistry of this chapter and, in Ch 23, cannot be the enolate partner of an aldol reaction, though it can still be the electrophile.",
      "note": "McMurry 22.1 (Keto-Enol Tautomerism) requires a hydrogen atom on the alpha carbon for a carbonyl compound to be in equilibrium with an enol, and 22.5 states that a hydrogen on the alpha position can be removed by a strong base. Benzaldehyde is the other common aldehyde with no alpha hydrogen, since its alpha carbon is part of the aromatic ring, and Ch 23 uses both as electrophile-only partners in mixed aldol and Claisen condensations. Their carbonyl hydrogen has pKa well above 40 and is not removed by any ordinary base.",
      "options": {
        "A": "Correct. The alpha carbon is quaternary and carries no hydrogen, so neither an enol nor an enolate can form.",
        "B": "Propanal has two alpha hydrogens on its CH2 and enolises normally; with LDA it gives an enolate, though aldehyde enolates tend to condense rather than alkylate cleanly (22.7).",
        "C": "2-Methylpropanal has one alpha hydrogen, on the CH between the two methyls. One is enough: the enol is 2-methylprop-1-en-1-ol and the enolate forms with strong base.",
        "D": "Acetaldehyde has three alpha hydrogens and enolises to ethenol (vinyl alcohol), the simplest enol, which the text uses as its example of an electron-rich enol double bond (22.2)."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q6_enol_vs_alkene",
    "topic": "Reactivity of Enols",
    "difficulty_level": "Medium",
    "question_text": "The enol of acetone and the alkene 2-methylpropene both react with Br2 by attacking it with their C=C. Why does the alkene give an addition product while the enol gives an alpha-substitution product?",
    "options": [
      {
        "option_id": "A",
        "text": "Both form a cation after the first step, but the enol's cation carries an O-H whose proton is lost to regenerate a C=O, whereas the alkene's cation has no such exit and captures bromide",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The enol is a weaker nucleophile than the alkene, so only one bromine can be transferred",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The enol reacts at oxygen rather than at carbon, and the O-Br bond then rearranges",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Bromide ion adds to the enol's cation as well, and the dibromide then loses HBr in a separate elimination",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An enol is an alkene with an OH on one of its double-bond carbons, and it attacks an electrophile the way an alkene does, through the pi bond, to give a cation. The difference is what that cation can do. The alkene-derived carbocation must find a nucleophile, so bromide adds and the product is a dibromide: addition. The enol-derived cation has its positive charge shared with the oxygen (it is a protonated carbonyl), and it can simply lose the O-H proton to a base, re-forming the C=O. The result is that an electrophile has replaced an alpha hydrogen: substitution. The oxygen lone pair also makes the enol a better nucleophile than a plain alkene, not a worse one.",
      "approach": "Step 1: Both substrates attack Br2 through the pi bond; the electrophilic bromine bonds to the carbon that does not carry the OH (for the enol) and a cation forms on the other carbon.\nStep 2: For 2-methylpropene the cation is a tertiary carbocation with no acidic proton on its charged framework; it reacts with Br- to give 1,2-dibromo-2-methylpropane.\nStep 3: For the enol the cation is an oxocarbenium ion, C=O+-H, stabilised by oxygen. Its O-H is very acidic.\nStep 4: Loss of that proton regenerates the carbonyl: bromoacetone. Net result, Br has replaced an alpha H; no bromide is incorporated at the second carbon.",
      "note": "McMurry 22.2 (Reactivity of Enols: alpha-Substitution Reactions), Figure 22.3, gives this general mechanism and the comparison with alkene addition (7.7): the initial addition step is the same, but instead of reacting with a nucleophile the intermediate cation loses the O-H proton to give an alpha-substituted carbonyl compound. The section also notes that enols are more electron-rich, and so more reactive, than alkenes because of resonance donation from the oxygen lone pair.",
      "options": {
        "A": "Correct. The enol's cation is a protonated carbonyl and loses its O-H proton; the alkene's carbocation has no proton to lose that would give a stable product and captures bromide instead.",
        "B": "The enol is a stronger nucleophile than the alkene, because the oxygen lone pair donates into the C=C by resonance. Reactivity is not what decides addition versus substitution; the fate of the cation is.",
        "C": "The enol attacks through carbon, the terminus of the C=C remote from oxygen, exactly as an alkene does; the electrophile ends up on carbon directly. No O-Br intermediate is involved.",
        "D": "No dibromide forms from the enol. The oxocarbenium cation loses its O-H proton far faster than it captures bromide, because doing so restores the strong C=O bond, and the alpha-bromo ketone is formed in a single substitution, not by addition then elimination."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q7_acetone_bromination_scheme",
    "topic": "Alpha Halogenation of Aldehydes and Ketones",
    "difficulty_level": "Easy",
    "question_text": "Acetone is treated with one equivalent of Br2 in acetic acid. What is the major organic product?",
    "reaction_scheme": {
      "reactants": [
        "CC(C)=O",
        "BrBr"
      ],
      "reagents": "CH3CO2H",
      "conditions": "25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A carbonyl carbon bearing two methyl groups: acetone.",
        "Two bromine atoms bonded to each other: molecular bromine."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Bromoacetone (1-bromopropan-2-one)",
        "smiles": "CC(=O)CBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,1-Dibromopropan-2-one",
        "smiles": "CC(=O)C(Br)Br",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,3-Dibromopropan-2-one",
        "smiles": "BrCC(=O)CBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Bromoform and acetic acid",
        "smiles": "BrC(Br)Br.CC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "In acidic solution a ketone is halogenated at its alpha carbon through its enol. The acid catalyses enolisation, the enol attacks Br2, and the cation loses the O-H proton to give the alpha-bromo ketone and HBr. Acid conditions give clean monohalogenation: the electron-withdrawing bromine in the product makes its carbonyl oxygen less basic and slows the enolisation needed for a second substitution, so the mono-bromo ketone accumulates. This is the opposite of what happens in base, where the first halogen makes the remaining alpha hydrogens more acidic and polyhalogenation runs away.",
      "approach": "Step 1: Acetic acid (with the HBr formed) protonates the carbonyl oxygen of acetone; loss of an alpha proton gives the enol, CH2=C(OH)CH3, the rate-limiting step.\nStep 2: The enol C=C attacks Br2 through its CH2 terminus; bromide leaves.\nStep 3: The oxocarbenium cation loses its O-H proton to solvent, regenerating the C=O.\nStep 4: Product: BrCH2C(=O)CH3, bromoacetone, plus HBr. A second bromination is slower than the first, so one equivalent of Br2 gives mainly the monobromide.",
      "note": "McMurry 22.3 (Alpha Halogenation of Aldehydes and Ketones), Figure 22.4, gives the acid-catalysed bromination of acetone as its mechanism example and notes that bromine in acetic acid is the usual reagent; the same section records that bromoacetone occurs naturally in marine algae. The contrast with base-promoted halogenation, which is hard to stop at the monohalide and leads to the haloform reaction for methyl ketones, is drawn in 22.6.",
      "options": {
        "A": "Correct. Acid-catalysed enolisation, attack on Br2 and loss of the O-H proton replace one alpha hydrogen with bromine.",
        "B": "A second bromine on the same carbon would need the monobromide to enolise again, which is slower in acid because the bromine withdraws electron density from the carbonyl oxygen. Geminal dibromination is what base-promoted conditions tend toward, not acid with one equivalent.",
        "C": "Bromination at both alpha carbons requires a second equivalent of Br2 and a second, slower enolisation. With one equivalent in acid the reaction stops at the monobromide.",
        "D": "Bromoform and acetic acid are the products of the haloform reaction, which needs excess Br2 and hydroxide, not acid: base drives exhaustive halogenation of the methyl group and then cleaves the C-C bond. In acetic acid nothing of the kind happens."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q8_halogenation_kinetics_evidence",
    "topic": "Alpha Halogenation of Aldehydes and Ketones",
    "difficulty_level": "Hard",
    "question_text": "Which set of observations supports the view that acid-catalysed halogenation of a ketone proceeds through a rate-limiting enolisation?",
    "options": [
      {
        "option_id": "A",
        "text": "The rate is proportional to [ketone] and [H+] but independent of the halogen concentration; Cl2, Br2 and I2 react at the same rate; and the ketone exchanges its alpha hydrogens for deuterium in D3O+ at that same rate",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The rate is proportional to [ketone] and [Br2], and doubling the bromine concentration doubles the rate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The rate is independent of [H+], because the acid is only a solvent",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The ketone does not exchange alpha hydrogens with D3O+ unless halogen is present",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A rate law reports which species take part in the slow step. If enol formation is rate-limiting and the enol then reacts with halogen in a fast step, the rate depends on how fast the enol forms, which involves the ketone and the acid catalyst and nothing else; the halogen, consumed only after the slow step, cannot appear in the rate law, and its identity cannot matter. A second prediction follows: any other fast reaction of the enol, such as picking up a deuteron from D3O+, must proceed at exactly the same rate, because both are limited by the same enolisation.",
      "approach": "Step 1: Write the mechanism: ketone + H+ gives the enol (slow); enol + X2 gives the alpha-halo ketone (fast).\nStep 2: Rate = k[ketone][H+]: the slow step involves only those two species, so the rate is zero order in halogen.\nStep 3: Because halogen enters only after the slow step, chlorination, bromination and iodination of the same ketone go at the same rate.\nStep 4: The enol reacts with D3O+ just as it reacts with X2, so alpha-deuterium exchange runs at the same rate as halogenation: a common intermediate, the enol, links the two.",
      "note": "McMurry 22.3 (Alpha Halogenation of Aldehydes and Ketones) lists exactly these three pieces of evidence for the mechanism of Figure 22.4: second-order kinetics with rate = k[ketone][H+], independence of halogen concentration so that chlorination, bromination and iodination occur at the same rate, and deuterium exchange in D3O+ at a rate identical to that of halogenation. Problem 22-4 asks for the mechanism of the deuteration of acetone. Zero-order dependence on a reagent is the standard signature that it reacts after the rate-limiting step.",
      "options": {
        "A": "Correct. Zero order in halogen, identical rates for the three halogens and identical rate of deuterium exchange all point to enol formation as the common, rate-limiting step.",
        "B": "A rate proportional to [Br2] would mean bromine takes part in the slow step, which is the alkene-like direct attack that the mechanism rules out. The measured rate law has no halogen term.",
        "C": "Acid is a catalyst, not a solvent: the rate is first order in [H+], because protonation of the carbonyl is part of the slow enolisation. Halogenation in acetic acid speeds up as HBr accumulates.",
        "D": "Deuterium exchange happens with or without halogen, because it goes through the same enol; the telling point is that it happens at the same rate as halogenation. If exchange needed halogen, the enol would not be a common intermediate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q9_methylcyclohexanone_bromination_scheme",
    "topic": "Alpha Halogenation of Aldehydes and Ketones",
    "difficulty_level": "Medium",
    "question_text": "2-Methylcyclohexanone is treated with one equivalent of Br2 in acetic acid. What is the major product?",
    "reaction_scheme": {
      "reactants": [
        "CC1CCCCC1=O",
        "BrBr"
      ],
      "reagents": "CH3CO2H",
      "conditions": "25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-membered ring with a C=O on one carbon and a methyl group on the ring carbon next to it: 2-methylcyclohexanone.",
        "Two bromine atoms bonded to each other: molecular bromine."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-Bromo-2-methylcyclohexanone",
        "smiles": "CC1(Br)CCCCC1=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "6-Bromo-2-methylcyclohexanone",
        "smiles": "CC1CCCC(Br)C1=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-(Bromomethyl)cyclohexanone",
        "smiles": "BrCC1CCCCC1=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Methylcyclohex-2-en-1-one",
        "smiles": "CC1=CCCCC1=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Acid-catalysed halogenation goes through the enol, and an unsymmetrical ketone can form two enols. Under the equilibrating conditions of acid catalysis the more substituted enol predominates, for the same reason a more substituted alkene is more stable, so halogenation occurs mainly at the more substituted alpha carbon. This is the reverse of the regiochemistry of LDA alkylation, where the kinetically formed enolate at the less hindered carbon is trapped. The bromine goes where the enol double bond was, on the alpha carbon, never on a carbon one bond further out.",
      "approach": "Step 1: 2-Methylcyclohexanone has two alpha carbons: C2 (tertiary, with the methyl) and C6 (secondary).\nStep 2: In acid the two enols equilibrate; the C1=C2 enol is more substituted (trisubstituted alkene) and is favoured over the C1=C6 enol (disubstituted).\nStep 3: The favoured enol attacks Br2 at C2; loss of the O-H proton regenerates the ketone.\nStep 4: Product: 2-bromo-2-methylcyclohexanone, bromine on the tertiary alpha carbon.",
      "note": "McMurry 22.3 (Alpha Halogenation of Aldehydes and Ketones) states that bromination of 2-methylcyclohexanone occurs primarily on the more highly substituted alpha position because the more highly substituted enol is favoured over the less highly substituted one, citing the alkene stability order of 7.6, and goes on to use the product for dehydrobromination to 2-methyl-2-cyclohexenone. The opposite regiochemistry with LDA at low temperature is in 22.7, and the two together are the standard kinetic-versus-thermodynamic contrast.",
      "options": {
        "A": "Correct. The more substituted enol is favoured under acid catalysis, so bromine enters at the tertiary alpha carbon, C2.",
        "B": "Bromination at C6 would follow from the less substituted enol, which is the minor one at equilibrium. That is the regiochemistry of a kinetic enolate formed with LDA at -78 °C, not of acid-catalysed enolisation.",
        "C": "The methyl group's hydrogens are beta to the carbonyl, not alpha, so no enol can form toward them and bromine cannot enter there. Only the two ring alpha carbons are available.",
        "D": "2-Methylcyclohex-2-enone is what the alpha-bromo ketone gives when it is then heated in pyridine, an E2 dehydrobromination. Bromine in acetic acid stops at the bromo ketone; the enone needs the separate base step."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q10_dehydrobromination_scheme",
    "topic": "Alpha Halogenation of Aldehydes and Ketones",
    "difficulty_level": "Medium",
    "question_text": "2-Bromo-2-methylcyclohexanone is heated in pyridine. What is the major product?",
    "reaction_scheme": {
      "reactants": [
        "CC1(Br)CCCCC1=O"
      ],
      "reagents": "pyridine",
      "conditions": "heat",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-membered ring with a C=O on one carbon; the ring carbon next to it carries both a methyl group and a bromine."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-Methylcyclohex-2-en-1-one",
        "smiles": "CC1=CCCCC1=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Methylcyclohexanone",
        "smiles": "CC1CCCCC1=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-Methylcyclohex-2-en-1-one",
        "smiles": "CC1=CC(=O)CCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Methylidenecyclohexan-1-one",
        "smiles": "C=C1CCCCC1=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An alpha-bromo ketone loses HBr on heating with a base by an E2 elimination: the base removes a hydrogen from a carbon adjacent to the one carrying bromine, and the C=C forms between them. Two adjacent carbons carry hydrogens here, the ring carbon C3 and the methyl carbon, and the elimination takes the path that gives the more substituted, conjugated alkene inside the ring, where the new C=C is trisubstituted and conjugated with the C=O. The sequence bromination-then-elimination is the standard way to convert a saturated ketone into its alpha,beta-unsaturated (enone) relative.",
      "approach": "Step 1: Identify the leaving group and its neighbours: Br on C2; hydrogens available on C3 (ring CH2) and on the C2 methyl.\nStep 2: Pyridine removes a C3 hydrogen anti to the C-Br bond; bromide leaves; a C2=C3 double bond forms.\nStep 3: Compare with elimination toward the methyl: that would give an exocyclic disubstituted alkene, less stable than the endocyclic trisubstituted one; it is the minor path.\nStep 4: Product: 2-methylcyclohex-2-en-1-one, an enone with the C=C conjugated to the C=O.",
      "note": "McMurry 22.3 (Alpha Halogenation of Aldehydes and Ketones) gives this exact pair of steps: 2-methylcyclohexanone to 2-bromo-2-methylcyclohexanone with bromine, then 2-methyl-2-cyclohexenone on heating in pyridine, by an E2 pathway (11.8), described as a good method for introducing a C=C bond into a molecule. Problem 22-5 asks for 1-penten-3-one from 3-pentanone by the same two steps. The enone product is the conjugate-addition substrate of 19.13 and the Michael acceptor of 23.10.",
      "options": {
        "A": "Correct. E2 removal of a C3 hydrogen with loss of bromide gives the conjugated, trisubstituted endocyclic enone.",
        "B": "Replacing bromine by hydrogen would be a reduction, which pyridine cannot perform. Pyridine is a base; it removes a proton from the carbon next to the bromine and the bromide leaves with it.",
        "C": "3-Methylcyclohex-2-enone has the methyl on the beta carbon, one position further from the carbonyl than in the starting material. No step here moves the methyl group; the double bond forms between C2 (which keeps its methyl) and C3.",
        "D": "The exocyclic methylene product would come from eliminating toward the methyl group. That alkene is disubstituted and less stable than the trisubstituted endocyclic one, so it is at most a minor product; E2 favours the more substituted alkene here."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q11_pentenone_sequence",
    "topic": "Alpha Halogenation of Aldehydes and Ketones",
    "difficulty_level": "Medium",
    "question_text": "Which sequence converts pentan-3-one into pent-1-en-3-one, CH2=CHCOCH2CH3?",
    "options": [
      {
        "option_id": "A",
        "text": "1. Br2, CH3CO2H (1 equiv); 2. pyridine, heat",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1. NaOH, Br2 (excess); 2. H3O+",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1. LiAlH4, ether; 2. H2SO4, heat",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1. PBr3, Br2; 2. H2O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Turning a ketone into its alpha,beta-unsaturated relative is a two-step job: put a bromine on the alpha carbon by acid-catalysed enol halogenation, then remove HBr with a base by E2. The acid conditions matter for the first step, because they stop cleanly at monobromination; the base conditions matter for the second, because pyridine is basic enough to eliminate but not nucleophilic enough to displace the bromide. For a symmetrical ketone the regiochemistry of bromination does not arise, and elimination toward the terminal CH3 gives the only possible enone.",
      "approach": "Step 1: Pentan-3-one + Br2 in acetic acid: acid-catalysed enolisation and bromination at an alpha carbon gives 2-bromopentan-3-one.\nStep 2: Heat in pyridine: E2 removes a hydrogen from C1 (the methyl next to the bromine-bearing C2) and bromide leaves.\nStep 3: The new double bond is C1=C2, conjugated with the C=O at C3: pent-1-en-3-one, ethyl vinyl ketone.\nStep 4: Check the alternatives: base with excess bromine polybrominates; hydride then acid dehydrates the alcohol to a plain alkene and loses the carbonyl; PBr3/Br2 is the acid bromination reagent for carboxylic acids, not ketones.",
      "note": "McMurry 22.3 (Alpha Halogenation of Aldehydes and Ketones) poses this as Problem 22-5 directly after describing the bromination/dehydrobromination route to 2-methyl-2-cyclohexenone. The base-promoted alternative is discouraged in 22.6 because monohalogenation is hard to control there, and the Hell-Volhard-Zelinsky conditions in option D belong to carboxylic acids (22.4).",
      "options": {
        "A": "Correct. Acid-catalysed monobromination at the alpha carbon, then E2 with pyridine to the conjugated enone.",
        "B": "Base-promoted bromination is difficult to stop: the first bromine makes the remaining alpha hydrogens more acidic and the ketone is brominated repeatedly. Pentan-3-one has no methyl ketone group, so it does not even give a clean haloform cleavage; the result is a polybrominated mixture, not the enone.",
        "C": "LiAlH4 reduces the ketone to pentan-3-ol, and acid dehydrates that to pent-2-ene. The carbonyl is lost along the way, and the product is an alkene, not an enone.",
        "D": "PBr3 with Br2 is the Hell-Volhard-Zelinsky reagent for alpha-brominating carboxylic acids, which works through an acid bromide. Pentan-3-one has no carboxyl group; PBr3 does not enolise a ketone, and no elimination step is included."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q12_hvz_butanoic_acid_scheme",
    "topic": "Alpha Bromination of Carboxylic Acids",
    "difficulty_level": "Medium",
    "question_text": "Butanoic acid is treated with Br2 and a catalytic amount of PBr3, and water is then added. What is the organic product?",
    "reaction_scheme": {
      "reactants": [
        "CCCC(=O)O"
      ],
      "reagents": "1. Br2, PBr3; 2. H2O",
      "conditions": "heat",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A three-carbon chain attached to a CO2H group: butanoic acid."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-Bromobutanoic acid",
        "smiles": "CCC(Br)C(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-Bromobutanoic acid",
        "smiles": "BrCCCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Bromobutanoyl bromide",
        "smiles": "CCC(Br)C(=O)Br",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Butanoyl bromide",
        "smiles": "CCCC(=O)Br",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Carboxylic acids do not enolise enough for bromine in acetic acid to touch them, so their alpha bromination takes a detour. PBr3 converts a little of the acid into its acid bromide, which does enolise (HBr catalyses it); the acid bromide enol attacks Br2 to give an alpha-bromo acid bromide; and that species exchanges its bromide with more carboxylic acid, keeping the cycle going, so only a catalytic amount of PBr3 is needed. When water is added at the end, the alpha-bromo acid bromide is hydrolysed to the alpha-bromo acid. The bromine lands on the alpha carbon, through an enol, exactly as in ketone halogenation.",
      "approach": "Step 1: Butanoic acid + PBr3 gives butanoyl bromide and HBr (a nucleophilic acyl substitution, 21.4).\nStep 2: HBr catalyses enolisation of the acid bromide toward C2; the enol attacks Br2.\nStep 3: Loss of the O-H proton gives 2-bromobutanoyl bromide.\nStep 4: Water hydrolyses the acid bromide to the acid: 2-bromobutanoic acid, CH3CH2CHBrCO2H, formed as a racemate.",
      "note": "McMurry 22.4 (Alpha Bromination of Carboxylic Acids) gives the Hell-Volhard-Zelinsky reaction as the one route to alpha-bromo acids, explains that the alpha substitution occurs on the acid bromide enol rather than on the acid, and gives the sequence: acid + PBr3 to acid bromide, HBr-catalysed enolisation, bromination, then hydrolysis on adding water. Problem 22-6 replaces the water with methanol to obtain the alpha-bromo ester directly. Alpha-bromo acids are the starting point for the Ch 26 amino acid synthesis by SN2 with ammonia.",
      "options": {
        "A": "Correct. Bromination of the acid bromide enol puts Br on C2; hydrolysis of the acid bromide returns the carboxylic acid.",
        "B": "Bromine on C4, the terminal carbon, would need a radical or a terminal enol, neither of which is available. Enolisation of an acyl compound involves only the alpha carbon, C2, so that is where the bromine goes.",
        "C": "2-Bromobutanoyl bromide is the intermediate that exists before the water is added. The question specifies the water work-up, which hydrolyses the acid bromide to the acid.",
        "D": "Butanoyl bromide is the first intermediate, from the acid and PBr3, and it would be the product only if no Br2 were present; with Br2 it enolises and is brominated at C2 before the water step turns it back into an acid."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q13_hvz_reacting_species",
    "topic": "Alpha Bromination of Carboxylic Acids",
    "difficulty_level": "Hard",
    "question_text": "In the Hell-Volhard-Zelinsky reaction, which species actually undergoes the alpha-substitution step with Br2?",
    "options": [
      {
        "option_id": "A",
        "text": "The enol of the acid bromide, formed after PBr3 converts the carboxylic acid into RCH2C(=O)Br",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The enol of the carboxylic acid itself, formed by HBr catalysis",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The carboxylate anion, which attacks Br2 through its alpha carbon",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "An enolate of the carboxylic acid, generated by PBr3 acting as a base",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Acids, esters and amides enolise far less than aldehydes and ketones, because resonance donation from the heteroatom stabilises their carbonyl and raises the energy of the enol. An acid bromide is different: bromine donates almost nothing by resonance, so an acid bromide enolises about as readily as a ketone. The Hell-Volhard-Zelinsky reaction exploits this by converting a little of the acid into its bromide first. That is why PBr3 is required, why only a catalytic amount is needed (the alpha-bromo acid bromide passes its bromide on to more acid), and why the acid recovered at the end has been brominated.",
      "approach": "Step 1: PBr3 converts RCH2CO2H into RCH2C(=O)Br, the acid bromide, releasing HBr.\nStep 2: HBr catalyses enolisation of the acid bromide: RCH=C(OH)Br, the species that does enolise readily.\nStep 3: That enol attacks Br2 through its alpha carbon; loss of the O-H proton gives RCHBrC(=O)Br.\nStep 4: The alpha-bromo acid bromide exchanges with unreacted acid (regenerating acid bromide for the next cycle) or is hydrolysed at work-up to RCHBrCO2H.",
      "note": "McMurry 22.4 (Alpha Bromination of Carboxylic Acids) says the reaction is a bit more complex than it looks and actually involves alpha substitution of an acid bromide enol rather than a carboxylic acid enol, having stated that acids, esters and amides do not enolise to a sufficient extent for Br2 in acetic acid to react. The formation of the acid bromide from the acid and PBr3 is McMurry 21.4. A carboxylate anion is not a candidate: its negative charge is on oxygen and its alpha carbon is not nucleophilic.",
      "options": {
        "A": "Correct. The acid bromide enolises like a ketone; its enol is brominated, and hydrolysis at the end gives the alpha-bromo acid.",
        "B": "The acid's own enol is present in far too low a concentration, which is exactly why Br2 in acetic acid fails to brominate acids. PBr3 is in the recipe to make the acid bromide, whose enol does the work.",
        "C": "A carboxylate carries its negative charge on the two oxygens; the alpha carbon is not nucleophilic and does not attack Br2. Deprotonating the acid does nothing to help alpha bromination.",
        "D": "PBr3 is a Lewis acid and a brominating agent, not a base; no enolate is formed. The alpha-substitution runs through a neutral enol under acid (HBr) catalysis."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q14_hvz_methanol_ester_scheme",
    "topic": "Alpha Bromination of Carboxylic Acids",
    "difficulty_level": "Medium",
    "question_text": "Propanoic acid is treated with Br2 and PBr3, and the mixture is then quenched with methanol instead of water. What is the organic product?",
    "reaction_scheme": {
      "reactants": [
        "CCC(=O)O"
      ],
      "reagents": "1. Br2, PBr3; 2. CH3OH",
      "conditions": "heat",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "An ethyl group attached to a CO2H group: propanoic acid."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Methyl 2-bromopropanoate",
        "smiles": "CC(Br)C(=O)OC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Bromopropanoic acid",
        "smiles": "CC(Br)C(=O)O",
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
        "text": "2-Methoxypropanoic acid",
        "smiles": "CC(OC)C(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Hell-Volhard-Zelinsky reaction ends with an alpha-bromo acid bromide in the flask, and what that becomes depends on the nucleophile added at the end. Water hydrolyses it to the alpha-bromo acid; an alcohol converts it, by the same nucleophilic acyl substitution, into the alpha-bromo ester. The alkoxy group replaces the bromide on the acyl carbon, while the bromine on the alpha carbon, an ordinary sp3 C-Br bond, is not touched by the alcohol under these conditions.",
      "approach": "Step 1: Propanoic acid + PBr3 gives propanoyl bromide; HBr-catalysed enolisation and bromination give 2-bromopropanoyl bromide, CH3CHBrC(=O)Br.\nStep 2: Methanol attacks the acyl carbon of the acid bromide (an acid halide, the most reactive derivative): tetrahedral intermediate.\nStep 3: Bromide leaves from the acyl carbon; a proton is lost from the new oxygen: an ester.\nStep 4: Product: methyl 2-bromopropanoate, CH3CHBrC(=O)OCH3, racemic. The alpha C-Br bond survives because a neutral alcohol is too weak a nucleophile to displace it by SN2 at a secondary carbon.",
      "note": "McMurry 22.4 (Alpha Bromination of Carboxylic Acids) sets this as Problem 22-6: methanol rather than water at the end of a Hell-Volhard-Zelinsky reaction gives an ester, and asks for the mechanism of the ester-forming step, which is the alcoholysis of an acid halide from 21.4. The alpha-bromo ester is a useful electrophile in its own right: its alpha C-Br is a good SN2 site for strong nucleophiles, and it is the classic Reformatsky substrate.",
      "options": {
        "A": "Correct. Methanol replaces bromide at the acyl carbon of the alpha-bromo acid bromide; the alpha bromine stays.",
        "B": "2-Bromopropanoic acid is what water would give at the end. The quench here is methanol, which makes the methyl ester of the same alpha-bromo acid.",
        "C": "Methyl propanoate has no alpha bromine. Br2 and PBr3 brominate the alpha carbon of the acid bromide before the methanol is added, so the ester formed carries that bromine.",
        "D": "2-Methoxypropanoic acid would need methanol to displace the alpha bromine by SN2 while leaving the acyl bromide to be hydrolysed. Methanol attacks the far more electrophilic acyl carbon, and a neutral alcohol does not displace a secondary alkyl bromide."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q15_pka_ranking_dicarbonyl",
    "topic": "Acidity of Alpha Hydrogen Atoms",
    "difficulty_level": "Medium",
    "question_text": "Which compound has the most acidic C-H hydrogen?",
    "options": [
      {
        "option_id": "A",
        "text": "Pentane-2,4-dione",
        "smiles": "CC(=O)CC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethyl acetoacetate (ethyl 3-oxobutanoate)",
        "smiles": "CCOC(=O)CC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetone",
        "smiles": "CC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl acetate",
        "smiles": "CCOC(C)=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An alpha hydrogen is acidic because the anion left behind is delocalised onto a carbonyl oxygen. Two carbonyls flanking the same carbon share the charge over two oxygens and make the hydrogen far more acidic; and a ketone carbonyl stabilises an enolate better than an ester carbonyl, whose own resonance donation from the alkoxy oxygen competes. So the order is 1,3-diketone (pKa 9) more acidic than beta-keto ester (11) more acidic than 1,3-diester (13), with the monocarbonyl compounds far behind: ketone 19, ester 25. The most acidic C-H in this set belongs to the compound with two ketone carbonyls on one carbon.",
      "approach": "Step 1: Find the CH2 or CH flanked by two carbonyls: pentane-2,4-dione (two ketones) and ethyl acetoacetate (ketone + ester) have one; acetone and ethyl acetate have single carbonyls.\nStep 2: Two ketone carbonyls stabilise the enolate best: pentane-2,4-dione, pKa 9.\nStep 3: Ketone + ester is next: ethyl acetoacetate, pKa 11, because the ester carbonyl is a weaker acceptor.\nStep 4: Monocarbonyls: acetone 19 (ketone), ethyl acetate 25 (ester). The 1,3-diketone is the most acidic by two pKa units over the keto ester and ten over acetone.",
      "note": "McMurry 22.5 (Acidity of Alpha Hydrogen Atoms), Table 22.1, gives 1,3-diketone 9, 3-keto ester 11, 1,3-diester 13, ketone 19, ester 25, and explains that the enolate of a beta-dicarbonyl compound is stabilised by sharing the negative charge with two carbonyl oxygens, drawing the three resonance forms of the 2,4-pentanedione enolate. The worked example there ranks a beta-dicarbonyl above a ketone above an ester. These pKa values are why the malonic and acetoacetic ester syntheses (22.7) can use sodium ethoxide, while a simple ketone needs LDA.",
      "options": {
        "A": "Correct. The CH2 between two ketone carbonyls gives an enolate delocalised over two oxygens, pKa about 9, the most acidic C-H here.",
        "B": "Ethyl acetoacetate's central CH2 is also flanked by two carbonyls and is very acidic (pKa 11), but one of them is an ester carbonyl, a weaker acceptor than a ketone's because its alkoxy oxygen already donates into it. It is second.",
        "C": "Acetone has a single carbonyl to stabilise its enolate: pKa 19, ten units less acidic than the diketone. Its methyl hydrogens are acidic enough for LDA but not for ethoxide.",
        "D": "Ethyl acetate's alpha hydrogens are the least acidic of the four (pKa 25): a single ester carbonyl, itself stabilised by the alkoxy oxygen, is the weakest of these acceptors."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q16_lda_vs_ethoxide",
    "topic": "Acidity of Alpha Hydrogen Atoms",
    "difficulty_level": "Medium",
    "question_text": "Sodium ethoxide in ethanol converts only about 0.1% of acetone into its enolate, whereas LDA in THF converts essentially all of it. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "Ethanol (pKa 16) is a stronger acid than acetone (pKa 19), so the ethoxide/acetone equilibrium lies on the side of acetone; diisopropylamine (pKa 36) is a far weaker acid, so LDA deprotonates acetone essentially completely",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "LDA is a much stronger nucleophile than ethoxide and adds to the carbonyl, which then loses a proton",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethoxide is too bulky to reach the alpha hydrogens of acetone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "THF is a more polar solvent than ethanol and stabilises the enolate ion better",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A base removes a proton completely only if its conjugate acid is weaker than the acid being deprotonated, that is, if the base's conjugate acid has the higher pKa. Acetone's alpha hydrogens have pKa 19.3. Ethoxide's conjugate acid, ethanol, has pKa 16, three units lower, so the equilibrium acetone + EtO- gives enolate + EtOH lies about 1000:1 toward acetone: roughly 0.1% enolate. LDA's conjugate acid, diisopropylamine, has pKa 36, seventeen units above acetone, so the equilibrium lies overwhelmingly toward the enolate. LDA is chosen also because it is bulky and non-nucleophilic, so it does not add to the carbonyl, and it is soluble in THF.",
      "approach": "Step 1: Write the equilibrium: CH3COCH3 + B- gives CH2=C(O-)CH3 + BH. It favours the side with the weaker acid.\nStep 2: For B- = ethoxide, BH = ethanol, pKa 16 < 19.3: the equilibrium constant is about 10^(16 - 19.3), roughly 10^-3, so about 0.1% enolate.\nStep 3: For B- = diisopropylamide, BH = diisopropylamine, pKa 36 > 19.3: K is about 10^17, complete conversion.\nStep 4: The 0.1% is enough for reactions that consume the enolate as it forms (base-promoted halogenation, 22.6), but complete conversion is needed for a clean alkylation, which is why LDA is used in 22.7.",
      "note": "McMurry 22.5 (Acidity of Alpha Hydrogen Atoms) gives these numbers directly: deprotonation of acetone by sodium ethoxide occurs only to about 0.1% because acetone is a weaker acid than ethanol (pKa 16), and LDA, the lithium salt of diisopropylamine (pKa 36), readily deprotonates most carbonyl compounds; it is made from butyllithium and the amine and is soluble in organic solvents because of its two alkyl groups. The pKa-comparison rule for acid-base equilibria is McMurry 2.8.",
      "options": {
        "A": "Correct. Complete deprotonation needs a base whose conjugate acid is weaker than the substrate; diisopropylamine at pKa 36 qualifies, ethanol at 16 does not.",
        "B": "LDA is deliberately a poor nucleophile: its two isopropyl groups shield the nitrogen, which is why it deprotonates carbonyl compounds instead of adding to them. Ethoxide is the more nucleophilic of the two. The difference is basicity, not nucleophilicity.",
        "C": "Ethoxide is small and reaches the alpha hydrogens without difficulty; it simply cannot hold the proton once it has taken it, because ethanol is a stronger acid than acetone and gives the proton back. LDA is the bulky one of the pair.",
        "D": "THF is less polar than ethanol, not more, and it has no O-H to hydrogen-bond to an enolate. The reason a non-protic solvent is used with LDA is to avoid a proton source that would quench the enolate; it does not itself drive the deprotonation."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q17_most_acidic_hydrogen_nitrile",
    "topic": "Acidity of Alpha Hydrogen Atoms",
    "difficulty_level": "Easy",
    "question_text": "Which hydrogens of the compound shown are the most acidic?",
    "question_smiles": "CCCC#N",
    "structure_alt": "A three-carbon chain whose end carbon is attached to a carbon triple-bonded to nitrogen: butanenitrile.",
    "options": [
      {
        "option_id": "A",
        "text": "The two hydrogens on the CH2 bonded directly to the C≡N carbon",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The three hydrogens of the terminal CH3",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The two hydrogens on the middle CH2",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "None: a nitrile has no acidic hydrogens",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A nitrile stabilises an adjacent carbanion the way a carbonyl does: the C≡N pi bond accepts the negative charge, delocalising it onto nitrogen (-CH2-C≡N is in resonance with CH2=C=N-). Hydrogens on the carbon next to the nitrile carbon, the alpha position, are therefore acidic, with pKa about 25, comparable to an ester's. Hydrogens one or more carbons further along have no such resonance path and are not acidic. So a nitrile is alkylated at its alpha carbon with LDA (22.7), and the acidic hydrogens are found the same way as for a ketone.",
      "approach": "Step 1: Locate the nitrile carbon and the carbon attached to it: C2 of butanenitrile, a CH2.\nStep 2: Removing a hydrogen from C2 gives an anion delocalised onto the nitrogen: acidic, pKa about 25.\nStep 3: The middle CH2 (C3) and the terminal CH3 (C4) are beta and gamma to the nitrile; their anions would have no resonance stabilisation.\nStep 4: The most acidic hydrogens are the two on C2, the alpha carbon.",
      "note": "McMurry 22.5 (Acidity of Alpha Hydrogen Atoms) includes nitriles in Table 22.1 at pKa 25 with the note that nitriles, too, are acidic and can be converted into enolate-like anions; Problem 22-7(e) asks for the acidic hydrogens of CH3CH2CH2CN and Problem 22-8 for the resonance form of the acetonitrile anion. McMurry 22.7 uses that anion: nitriles are alkylated at the alpha carbon with LDA in THF, one of the three classes (with ketones and esters) that alkylate cleanly.",
      "options": {
        "A": "Correct. The alpha CH2, next to the C≡N, gives a resonance-stabilised anion on deprotonation.",
        "B": "The terminal methyl is gamma to the nitrile. Its anion would have no way to delocalise its charge onto nitrogen, so its hydrogens are as unreactive as an alkane's.",
        "C": "The middle CH2 is beta to the nitrile, one bond too far: the pi system of the C≡N cannot accept charge from a carbon that is not directly attached to the nitrile carbon.",
        "D": "Nitriles do have acidic hydrogens, on the alpha carbon: pKa about 25, the same as an ester. LDA removes them, and the resulting anion is alkylated by alkyl halides in 22.7."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q18_nitrile_anion_resonance",
    "topic": "Acidity of Alpha Hydrogen Atoms",
    "difficulty_level": "Medium",
    "question_text": "Acetonitrile, CH3C≡N, has pKa about 25, forty units more acidic than ethane. What accounts for the acidity of its methyl hydrogens?",
    "options": [
      {
        "option_id": "A",
        "text": "The anion -CH2-C≡N is stabilised by resonance with CH2=C=N-, in which the negative charge sits on the electronegative nitrogen",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The nitrogen lone pair donates into the CH3 group by hyperconjugation, weakening the C-H bonds",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The sp-hybridised nitrile carbon is highly electronegative and withdraws electrons inductively; there is no resonance involved",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acetonitrile tautomerises to an imine, whose N-H is the acidic hydrogen",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The acidity of a C-H bond is set by the stability of the carbanion it leaves behind. Next to a C≡N the carbanion's lone pair can be delocalised into the triple bond: one pi bond of the C≡N shifts onto nitrogen, giving a ketenimine anion CH2=C=N- in which the charge rests on the electronegative nitrogen. The two structures are resonance forms of one anion, exactly parallel to the enolate of a ketone, where the charge is shared between carbon and oxygen. Induction from the sp carbon helps, but it is the resonance delocalisation onto nitrogen that accounts for the bulk of the 10^40 difference from ethane.",
      "approach": "Step 1: Remove a methyl proton from acetonitrile: -CH2-C≡N, a carbanion next to a triple bond.\nStep 2: Push the lone pair into the C-C bond and one C≡N pi bond onto nitrogen: CH2=C=N-. Same atoms, same connectivity, electrons moved: a resonance form.\nStep 3: The charge is now on nitrogen, which bears it far better than carbon; the real anion is the hybrid.\nStep 4: Compare with ethane's anion, which has no acceptor at all: pKa 60 against 25.",
      "note": "McMurry 22.5 (Acidity of Alpha Hydrogen Atoms) places nitriles at pKa 25 in Table 22.1 and asks in Problem 22-8 for a resonance structure of the acetonitrile anion to account for the acidity; the analogous argument for a carbonyl is Figure 22.5, where the enolate's charge is shared by oxygen and the alpha carbon. The nitrile anion is a competent nucleophile: 22.7 alkylates nitriles at the alpha carbon with LDA and an alkyl halide.",
      "options": {
        "A": "Correct. The nitrile pi system accepts the carbanion's electrons, placing the charge on nitrogen in the second resonance form.",
        "B": "Nitrogen's lone pair in a nitrile points away from the molecule in an sp orbital and does not interact with the methyl group; donation would in any case make the C-H less acidic, not more. Acidity comes from stabilising the anion, not weakening the neutral bond.",
        "C": "Inductive withdrawal by the sp carbon contributes, but on its own it could not produce a forty-unit pKa change; alkyl groups on sp carbons (as in propyne's methyl) are far less acidic. The triple bond's ability to delocalise the charge onto nitrogen is what matters.",
        "D": "Acetonitrile has no imine tautomer of any significance: a ketenimine, CH2=C=NH, would be far less stable than the nitrile, and its N-H is not what a base removes. The acidic hydrogens are the methyl C-H bonds."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q19_acetoacetate_deprotonation_site",
    "topic": "Acidity of Alpha Hydrogen Atoms",
    "difficulty_level": "Medium",
    "question_text": "Sodium ethoxide in ethanol removes one proton from the compound shown. From which carbon?",
    "question_smiles": "CCOC(=O)CC(C)=O",
    "structure_alt": "An ethyl group on an oxygen bonded to a C=O; that carbonyl carbon is attached to a CH2, which is attached to a second C=O bearing a methyl group.",
    "options": [
      {
        "option_id": "A",
        "text": "The CH2 between the two carbonyl groups",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The CH3 attached to the ketone carbonyl",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The OCH2 of the ethyl group",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The CH3 of the ethyl group",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Ethyl acetoacetate has two kinds of alpha hydrogen: the methyl next to the ketone carbonyl, alpha to one carbonyl, and the CH2 between the ketone and the ester carbonyls, alpha to both. Deprotonating the CH2 gives an anion delocalised over both carbonyl oxygens, and its pKa is about 11; deprotonating the methyl gives an ordinary ketone enolate, pKa about 20. Ethoxide (conjugate acid pKa 16) can remove the pKa 11 proton essentially completely and the pKa 20 proton hardly at all, so it deprotonates the doubly activated position selectively. That selectivity is the basis of the acetoacetic ester synthesis.",
      "approach": "Step 1: Identify the alpha carbons: the CH3 on the ketone (alpha to one C=O) and the CH2 between the carbonyls (alpha to two).\nStep 2: Compare acidities: CH2 flanked by two carbonyls, pKa about 11; CH3 next to one ketone, about 20.\nStep 3: Ethoxide's conjugate acid is ethanol, pKa 16: the equilibrium favours removing the pKa 11 proton (K about 10^5) and disfavours the pKa 20 one (K about 10^-4).\nStep 4: The enolate formed is at the central CH2, delocalised over both oxygens; alkylation then occurs there.",
      "note": "McMurry 22.5 (Acidity of Alpha Hydrogen Atoms) gives 3-keto esters a pKa of 11 in Table 22.1 and explains that enolates of beta-dicarbonyl compounds are stabilised by sharing the charge over two carbonyl oxygens; McMurry 22.7 builds the acetoacetic ester synthesis on exactly this selectivity, noting that acetoacetic ester is readily converted into its enolate ion (at the central carbon) by sodium ethoxide. The ethyl group's hydrogens are on carbons attached to oxygen, not to a carbonyl carbon, and are not acidic at all.",
      "options": {
        "A": "Correct. The CH2 flanked by both carbonyls is the most acidic site (pKa about 11), and ethoxide removes that proton selectively.",
        "B": "The ketone methyl is alpha to only one carbonyl, pKa about 20, four units less acidic than ethanol; ethoxide leaves it essentially untouched. Reaching it would need LDA and would compete with the much more acidic central CH2.",
        "C": "The OCH2 is bonded to the ester oxygen, not to a carbonyl carbon; its hydrogens are not alpha to any carbonyl and have no resonance stabilisation available. They are no more acidic than an ether's.",
        "D": "The ethyl CH3 is two atoms from the ester oxygen and three from any carbonyl carbon; nothing stabilises an anion there. It is an alkane-like C-H, pKa about 50."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q20_acetone_enolate_methylation_scheme",
    "topic": "Reactivity of Enolate Ions",
    "difficulty_level": "Medium",
    "question_text": "Acetone is converted into its enolate with one equivalent of LDA in THF at -78 °C, and one equivalent of iodomethane is added. What is the major product?",
    "reaction_scheme": {
      "reactants": [
        "CC(C)=O"
      ],
      "reagents": "1. LDA (1 equiv), THF; 2. CH3I (1 equiv)",
      "conditions": "-78 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A carbonyl carbon bearing two methyl groups: acetone."
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
        "text": "2-Methoxypropene",
        "smiles": "COC(C)=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-Methylbutan-2-one",
        "smiles": "CC(=O)C(C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Pentan-3-one",
        "smiles": "CCC(=O)CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An enolate is an ambident nucleophile: its negative charge is shared between oxygen and the alpha carbon, so it can attack an electrophile through either atom. Reaction at oxygen gives an enol derivative (an enol ether with an alkyl halide); reaction at carbon gives an alpha-substituted carbonyl compound. With alkyl halides, carbon attack is much the more common outcome, and the new C-C bond forms at the alpha carbon by an SN2 displacement. One equivalent of base and one of halide give monoalkylation; the product is a ketone with one more carbon on the alpha position.",
      "approach": "Step 1: LDA removes one alpha proton from acetone, completely, giving the lithium enolate CH2=C(OLi)CH3.\nStep 2: The enolate's alpha carbon attacks the methyl carbon of CH3I in an SN2 reaction; iodide leaves.\nStep 3: The C=O is regenerated with the new methyl on the former alpha carbon.\nStep 4: Product: CH3CH2C(=O)CH3, butan-2-one. O-methylation is minor, and with one equivalent of each reagent there is no second alkylation.",
      "note": "McMurry 22.6 (Reactivity of Enolate Ions) describes enolates as resonance hybrids of a vinylic alkoxide and an alpha-keto carbanion that can react on oxygen or on carbon, with reaction on carbon more common (Figure 22.6). McMurry 22.7 covers the alkylation itself: an SN2 reaction of the enolate with a methyl or primary halide, with LDA in THF for a monocarbonyl compound because complete conversion to the enolate is needed and a protic solvent would quench it. Dialkylation becomes a problem when excess base and halide are present.",
      "options": {
        "A": "Correct. C-alkylation of the acetone enolate by iodomethane adds one methyl to the alpha carbon.",
        "B": "2-Methoxypropene is the O-alkylation product, the enol ether. Enolates can react at oxygen, but with alkyl halides the carbon is the more nucleophilic site and C-alkylation predominates, as the text states.",
        "C": "3-Methylbutan-2-one has two methyls added to the same alpha carbon, which would need a second equivalent of LDA and of CH3I acting on the butan-2-one formed. One equivalent of each stops at the monoalkylated ketone.",
        "D": "Pentan-3-one has a methyl added to each of acetone's two alpha carbons, again a dialkylation requiring two equivalents of base and halide. With one of each, only one alpha position is methylated."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q21_haloform_scheme",
    "topic": "Reactivity of Enolate Ions",
    "difficulty_level": "Medium",
    "question_text": "Acetophenone is treated with excess I2 and aqueous NaOH, and the mixture is then acidified. What are the organic products?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)c1ccccc1"
      ],
      "reagents": "1. I2 (excess), NaOH, H2O; 2. H3O+",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring bearing a carbon that carries a double-bonded oxygen and a methyl group: acetophenone."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Benzoic acid and iodoform (CHI3)",
        "smiles": "O=C(O)c1ccccc1.IC(I)I",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Iodo-1-phenylethan-1-one",
        "smiles": "O=C(CI)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,2,2-Triiodo-1-phenylethan-1-one",
        "smiles": "O=C(C(I)(I)I)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzoic acid and iodomethane",
        "smiles": "O=C(O)c1ccccc1.CI",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Base-promoted halogenation of a ketone does not stop at one halogen. Each halogen added makes the remaining alpha hydrogens more acidic, so the monohalo ketone is deprotonated and halogenated faster than the starting ketone, and a methyl ketone ends up as a trihalomethyl ketone. That compound is then cleaved: hydroxide adds to its carbonyl, and the tetrahedral intermediate expels the trihalomethyl anion, -CI3, which three halogens stabilise well enough to make it a leaving group. The carboxylate and the haloform (CHI3, yellow and insoluble) are the products; acidification gives the free acid.",
      "approach": "Step 1: Hydroxide generates a little enolate of acetophenone; I2 iodinates it at the methyl. The iodo ketone is more acidic and is iodinated again, and again: PhC(=O)CI3.\nStep 2: Hydroxide adds to the carbonyl of the triiodo ketone: tetrahedral intermediate PhC(O-)(OH)CI3.\nStep 3: The intermediate expels -CI3, a nucleophilic acyl substitution with a carbanion leaving group; the benzoic acid formed is deprotonated by the base, and -CI3 is protonated to CHI3, which precipitates.\nStep 4: Acidification converts benzoate into benzoic acid. Products: benzoic acid and iodoform.",
      "note": "McMurry 22.6 (Reactivity of Enolate Ions) explains why base-promoted halogenation is hard to stop at monosubstitution (the halo ketone is more acidic) and describes the haloform reaction of methyl ketones with excess base and halogen: the products are a carboxylic acid plus chloroform, bromoform or iodoform, and the second step is a nucleophilic acyl substitution in which a halogen-stabilised carbanion acts as the leaving group. The yellow iodoform precipitate is the classical test for a methyl ketone, lecture and ACS material the text does not name as a test.",
      "options": {
        "A": "Correct. Exhaustive iodination of the methyl group, then hydroxide cleaves off the triiodomethyl anion: benzoic acid (after acidification) and iodoform.",
        "B": "Monoiodination cannot be stopped at under basic conditions: the alpha-iodo ketone is more acidic than acetophenone and is iodinated further as fast as it forms. In acid, one equivalent of halogen would give this product; in base with excess halogen it does not survive.",
        "C": "The triiodo ketone is the intermediate, but excess hydroxide cleaves it: addition to the carbonyl and loss of -CI3 is fast because the trihalomethyl anion is a good leaving group. It does not accumulate.",
        "D": "The carbon lost is the trihalomethyl carbon, which leaves as -CI3 and becomes CHI3; no methyl group survives to become iodomethane. The methyl's three hydrogens were all replaced by iodine before the cleavage."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q22_haloform_cleavage_step",
    "topic": "Reactivity of Enolate Ions",
    "difficulty_level": "Hard",
    "question_text": "In the haloform reaction a carbon-carbon bond is broken, which ordinary ketone chemistry never does. What makes the cleavage possible?",
    "options": [
      {
        "option_id": "A",
        "text": "Hydroxide adds to the carbonyl of the trihalomethyl ketone, and the tetrahedral intermediate expels the trihalomethyl anion, -CX3, which the three halogens stabilise enough to make it a leaving group: a nucleophilic acyl substitution",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The CX3 group is protonated by water and leaves directly as CHX3 in an SN1-like ionisation of the C-C bond",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The enolate of the trihalomethyl ketone expels a halide ion, and the resulting alkene is then hydrolysed",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Hydroxide attacks the CX3 carbon by SN2, displacing the acyl group as an acylium ion",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A ketone survives nucleophilic addition because neither of the groups on its carbonyl carbon can leave: a carbanion is far too unstable. The haloform reaction manufactures an exception. After three halogens have been put on the methyl carbon, that carbon can leave as an anion, because the three electron-withdrawing halogens stabilise the negative charge (the conjugate acid CHX3 has pKa about 14 for chloroform, comparable to an alcohol). The trihalomethyl ketone then behaves like an acid derivative: hydroxide adds, and the tetrahedral intermediate collapses by expelling -CX3 rather than reverting. It is Ch 21 chemistry with a carbanion in the role of Cl- or RO-.",
      "approach": "Step 1: Recognise the substrate at the cleavage stage: RC(=O)CX3, a ketone whose alpha carbon carries three halogens.\nStep 2: Hydroxide adds to the carbonyl carbon, giving RC(O-)(OH)CX3, a tetrahedral intermediate.\nStep 3: The intermediate expels -CX3; the C=O re-forms and the carboxylic acid RCO2H is produced, then deprotonated by base.\nStep 4: -CX3 is protonated (by water or by the acid) to CHX3, the haloform. The C-C bond broke because a trihalomethyl anion is a viable leaving group.",
      "note": "McMurry 22.6 (Reactivity of Enolate Ions) states that the second step of the haloform reaction is a nucleophilic acyl substitution of -CX3 by -OH, that is, a halogen-stabilised carbanion acts as a leaving group. The first stage, exhaustive halogenation, is possible because each halogen makes the remaining alpha hydrogens more acidic. Chloroform's pKa of about 14 and the electron-withdrawing effect of three halogens are the reason -CCl3 can leave; without the halogens a methyl carbanion (pKa about 50) never could.",
      "options": {
        "A": "Correct. The trihalomethyl group is a competent leaving group, so the trihalo ketone undergoes addition-elimination like an acid derivative.",
        "B": "There is no SN1-like ionisation of a C-C bond: heterolysis to an acylium ion and a carbanion, or to an acyl anion and a carbocation, is far too costly. The bond breaks only in the collapse of a tetrahedral intermediate formed by hydroxide addition.",
        "C": "The trihalomethyl ketone has no alpha hydrogen left, so no enolate can form; and loss of halide from a carbon bearing three halogens would give a carbene or a cation, neither of which is involved. The cleavage is at the carbonyl carbon, by hydroxide.",
        "D": "The CX3 carbon is crowded by three halogens and is not an SN2 site, and an acylium ion is not a leaving group. Hydroxide attacks the carbonyl carbon, the electrophilic site, and the CX3 group departs as an anion."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q23_catalysed_vs_promoted",
    "topic": "Reactivity of Enolate Ions",
    "difficulty_level": "Medium",
    "question_text": "Halogenation of a ketone in acid is called acid-catalysed, but halogenation in base is called base-promoted and needs a full equivalent of base. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "In acid the enol is formed irreversibly, so a trace of acid is enough; in base the enolate is only in equilibrium with the ketone and must be forced by a large excess of base",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "In acid the catalyst is regenerated at the end of each cycle, while in base one equivalent of hydroxide is consumed per halogen introduced, neutralised by the HX by-product; a substoichiometric amount of base would stop the reaction",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "Base is needed in excess because the enolate is only formed to about 0.1% and must be present in large amounts",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acid catalysis is faster, so less acid is needed; base is slower, so more base is needed",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A catalyst is regenerated in the course of the reaction; a promoter is used up. In acid-catalysed halogenation the proton that activates the ketone is returned when the cation loses its O-H proton, and the HX formed adds to the acid pool, so a trace of acid suffices. In base-promoted halogenation the hydroxide that removes the alpha proton is spent: after the enolate reacts with X2, the products are the halo ketone and X-, but the proton removed has become water and the HX equivalent has been neutralised, so one hydroxide is consumed for every halogen introduced. The haloform reaction needs still more, for the final cleavage step.",
      "approach": "Step 1: Acid path: ketone + H+ gives the enol (proton consumed); enol + X2 gives the alpha-halo ketone + H+ + X- (proton returned). Net: catalytic.\nStep 2: Base path: ketone + OH- gives enolate + H2O; enolate + X2 gives the alpha-halo ketone + X-. The hydroxide is now water: consumed.\nStep 3: Each further halogenation consumes another hydroxide, and the haloform cleavage consumes one more to add to the carbonyl.\nStep 4: With less than one equivalent of base the reaction stops when the base is gone, so the base is a stoichiometric promoter, not a catalyst.",
      "note": "McMurry 22.6 (Reactivity of Enolate Ions) poses this as Problem 22-9, asking why acidic halogenations are acid-catalysed and basic ones base-promoted, that is, why a full equivalent of base is required. The section notes that even weak bases such as hydroxide are effective because halogen removes the enolate as fast as it forms, so complete conversion to the enolate is not needed; what is needed is enough base to be consumed once per halogen.",
      "options": {
        "A": "Enolisation is reversible in acid as well as in base; reversibility is not what separates the two. The difference is that the proton is returned at the end of the acid cycle while the hydroxide is turned into water and cannot act again.",
        "B": "Correct. The acid catalyst is regenerated each cycle; the base is consumed, one hydroxide per halogen introduced (and one more for the haloform cleavage), so it must be present in at least stoichiometric amount.",
        "C": "The enolate need not be present in large amounts: the text stresses that a small standing concentration suffices because halogen removes it as it forms. The base is needed in full equivalent because it is used up, not because a high enolate concentration is required.",
        "D": "Rate has nothing to do with it. Catalysed versus promoted is a question of whether the reagent survives the reaction: acid is regenerated, base is consumed."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q24_iodoform_test",
    "topic": "Reactivity of Enolate Ions",
    "difficulty_level": "Easy",
    "question_text": "Which compound gives a yellow precipitate when warmed with I2 in aqueous NaOH?",
    "options": [
      {
        "option_id": "A",
        "text": "Butan-2-one",
        "smiles": "CCC(C)=O",
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
        "text": "Benzaldehyde",
        "smiles": "O=Cc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyl acetate",
        "smiles": "CC(=O)OC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The haloform reaction is specific to a CH3 group on a carbonyl carbon. Three halogens must go onto one alpha carbon for that carbon to leave as -CX3, and only a methyl has three alpha hydrogens to give up. A methyl ketone with iodine and base therefore produces iodoform, CHI3, a yellow solid with a characteristic odour, and the appearance of that precipitate is a classification test. A ketone whose alpha carbons are CH2 groups cannot be triply halogenated on one carbon; an aldehyde without a methyl on its carbonyl has nothing to cleave; and esters enolise too little under these conditions to be halogenated at all.",
      "approach": "Step 1: Look for a CH3 bonded directly to a C=O.\nStep 2: Butan-2-one, CH3COCH2CH3, has one: it is a methyl ketone. Base and I2 convert the methyl into CI3, hydroxide cleaves it, and CHI3 precipitates (with propanoate left in solution).\nStep 3: Pentan-3-one has only CH2 groups alpha to its carbonyl: at most two iodines on one carbon, no cleavage, no iodoform.\nStep 4: Benzaldehyde has no alpha hydrogens at all; methyl acetate has a CH3 on a carbonyl but ester alpha hydrogens (pKa 25) are not halogenated by hydroxide, and no iodoform forms.",
      "note": "McMurry 22.6 (Reactivity of Enolate Ions) describes the haloform reaction of methyl ketones with excess base and halogen, giving a carboxylic acid plus chloroform, bromoform or iodoform; it does not present it as a test. The iodoform test is lecture and ACS material and is used as a classification test in the Ch 19 elucidation items of this bank. Acetaldehyde (a methyl aldehyde) and ethanol (oxidised by I2/NaOH to acetaldehyde) also give iodoform, which is why those two must be excluded before the test is read as proof of a methyl ketone.",
      "options": {
        "A": "Correct. Butan-2-one is a methyl ketone; exhaustive iodination of the methyl and hydroxide cleavage release iodoform.",
        "B": "Pentan-3-one is a ketone but not a methyl ketone: both alpha carbons are CH2 groups, which can take only two iodines each. No trihalomethyl group forms, so there is no cleavage and no CHI3.",
        "C": "Benzaldehyde has no alpha hydrogen (its alpha carbon is the aromatic ring), so it cannot be enolised or halogenated. Under I2/NaOH it undergoes no haloform reaction and gives no yellow precipitate.",
        "D": "Methyl acetate carries a CH3 on its carbonyl, but its alpha hydrogens are far less acidic (pKa 25) than a ketone's and esters are not halogenated by hydroxide and iodine; base simply saponifies the ester. No iodoform forms."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q25_alkylation_halide_fails",
    "topic": "Alkylation of Enolate Ions",
    "difficulty_level": "Easy",
    "question_text": "Which alkyl halide fails to alkylate the enolate of diethyl malonate?",
    "options": [
      {
        "option_id": "A",
        "text": "2-Bromo-2-methylpropane",
        "smiles": "CC(C)(C)Br",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzyl bromide",
        "smiles": "BrCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Allyl bromide",
        "smiles": "C=CCBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Iodomethane",
        "smiles": "CI",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Enolate alkylation is an SN2 reaction: the enolate carbon attacks the halide-bearing carbon from the back and displaces the halide. Every SN2 constraint applies. Methyl and primary halides react well, and allylic and benzylic halides best of all, because the transition state is stabilised by the adjacent pi system. Secondary halides react poorly. Tertiary halides do not react at all, because backside attack is blocked and the basic enolate instead removes a beta proton, giving E2 elimination. Vinyl and aryl halides are also useless, for want of an accessible backside.",
      "approach": "Step 1: Classify each halide's carbon: iodomethane, methyl; allyl and benzyl bromide, primary and activated by the adjacent pi system; 2-bromo-2-methylpropane, tertiary.\nStep 2: Methyl, allyl and benzyl halides all undergo fast SN2 with the malonate enolate.\nStep 3: The tertiary halide cannot be approached from the back; the enolate, a base, removes a beta proton and 2-methylpropene forms by E2.\nStep 4: No C-C bond is made with the tertiary halide, so a tert-butyl group cannot be introduced by enolate alkylation (which is why trialkylacetic acids and 3,3-dimethylbutan-2-one are inaccessible by these syntheses).",
      "note": "McMurry 22.7 (Alkylation of Enolate Ions) states the SN2 constraints for alkylation: the leaving group can be Cl, Br or I; the alkyl group should be primary or methyl, preferably allylic or benzylic; secondary halides react poorly; tertiary halides do not react at all because E2 elimination competes; vinylic and aryl halides are unreactive because backside approach is sterically prevented. These are the same limits as for cyanide displacement (20.5) and any other SN2 reaction (11.3).",
      "options": {
        "A": "Correct. A tertiary halide has no accessible backside; the enolate acts as a base and E2 elimination to 2-methylpropene occurs instead of alkylation.",
        "B": "Benzyl bromide is a primary halide whose SN2 transition state is stabilised by the aromatic ring; it is among the best alkylating agents for enolates and gives diethyl benzylmalonate.",
        "C": "Allyl bromide is primary and allylic, with the C=C stabilising the SN2 transition state; it alkylates the malonate enolate rapidly to give diethyl allylmalonate.",
        "D": "Iodomethane is the least hindered possible SN2 substrate with an excellent leaving group; it methylates the enolate cleanly to give diethyl methylmalonate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q26_malonic_ester_hexanoic_scheme",
    "topic": "Alkylation of Enolate Ions",
    "difficulty_level": "Medium",
    "question_text": "Diethyl malonate is treated with sodium ethoxide in ethanol, then with 1-bromobutane, and the product is heated with aqueous HCl. What is the final organic product?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(=O)CC(=O)OCC"
      ],
      "reagents": "1. NaOEt, EtOH; 2. CH3CH2CH2CH2Br; 3. H3O+, heat",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A CH2 flanked by two ester groups, each a C=O bearing an OCH2CH3: diethyl malonate."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Hexanoic acid",
        "smiles": "CCCCCC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Butylpropanedioic acid (butylmalonic acid)",
        "smiles": "CCCCC(C(=O)O)C(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Diethyl 2-butylpropanedioate",
        "smiles": "CCCCC(C(=O)OCC)C(=O)OCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Pentanoic acid",
        "smiles": "CCCCC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The malonic ester synthesis turns an alkyl halide into a carboxylic acid with two more carbons. Diethyl malonate's central CH2 (pKa 13) is deprotonated completely by ethoxide; the enolate alkylates the halide by SN2; then hot aqueous acid hydrolyses both esters to the diacid, and the diacid, a substituted malonic acid, loses CO2 on heating through a cyclic mechanism that runs through an enol. One carboxyl survives. Counting carbons: the halide's carbons plus the CH2 and one CO2H of the malonate.",
      "approach": "Step 1: NaOEt removes the doubly activated proton: the malonate enolate.\nStep 2: SN2 on 1-bromobutane puts a butyl group on the central carbon: diethyl 2-butylmalonate.\nStep 3: Hot aqueous HCl hydrolyses both esters: 2-butylmalonic acid.\nStep 4: The beta-dicarboxylic acid decarboxylates on heating: CH3CH2CH2CH2-CH2-CO2H, hexanoic acid, six carbons from a four-carbon halide.",
      "note": "McMurry 22.7 (Alkylation of Enolate Ions) describes the malonic ester synthesis as a method for preparing a carboxylic acid from an alkyl halide while lengthening the chain by two atoms (RX to RCH2CO2H), with heating in aqueous HCl bringing about hydrolysis of both esters followed by decarboxylation; the worked example makes heptanoic acid from 1-bromopentane. Decarboxylation is unique to malonic acids and beta-keto acids, which is why the diacid does not survive the heating.",
      "options": {
        "A": "Correct. Alkylation adds butyl to the malonate carbon; hydrolysis and decarboxylation leave a single carboxyl on a six-carbon chain.",
        "B": "Butylmalonic acid is the diacid formed by hydrolysis, and it is an intermediate: as a malonic acid it decarboxylates on heating, which the conditions (aqueous acid, heat) bring about. It does not survive as the product.",
        "C": "Diethyl 2-butylmalonate is the alkylation product, present before step 3. Hot aqueous acid hydrolyses both ester groups and then removes one carboxyl as CO2.",
        "D": "Pentanoic acid has five carbons: four from the halide and one from the malonate. The product keeps the malonate CH2 as well as one carboxyl, so it has six carbons, two more than the halide."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q27_malonic_heptanoic_halide",
    "topic": "Alkylation of Enolate Ions",
    "difficulty_level": "Easy",
    "question_text": "Which alkyl halide gives heptanoic acid by a malonic ester synthesis?",
    "options": [
      {
        "option_id": "A",
        "text": "1-Bromopentane",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Bromohexane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Bromoheptane",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Bromobutane",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A malonic ester synthesis adds exactly two carbons to the alkyl halide: the malonate's central carbon and the one carboxyl that survives decarboxylation. The alkyl group of the halide ends up attached to what becomes the alpha carbon of the acid. So to plan the synthesis, take the target acid's carbon count, subtract two, and that is the halide's chain; and the halide must be primary (or methyl, or activated) for the SN2 alkylation to work.",
      "approach": "Step 1: Heptanoic acid has seven carbons: CH3(CH2)5CO2H.\nStep 2: Two of them, the alpha CH2 and the CO2H, come from malonic ester.\nStep 3: The remaining five must come from the halide as a primary alkyl group: CH3(CH2)4-, from 1-bromopentane.\nStep 4: Sequence: NaOEt; 1-bromopentane; then H3O+ and heat for hydrolysis and decarboxylation.",
      "note": "McMurry 22.7 (Alkylation of Enolate Ions) works this exact target in its example: a seven-carbon acid chain must be derived from the five-carbon alkyl halide 1-bromopentane, because the malonic ester synthesis converts an alkyl halide into a carboxylic acid having two more carbons. Problem 22-10 asks for three more targets by the same count. The acetoacetic ester synthesis adds three carbons instead and gives a methyl ketone, so the arithmetic differs by one.",
      "options": {
        "A": "Correct. Five carbons from the halide plus two from malonic ester give the seven-carbon acid.",
        "B": "1-Bromohexane would give octanoic acid, eight carbons: six from the halide plus the two from malonic ester.",
        "C": "1-Bromoheptane would give nonanoic acid. The halide contributes all of its carbons, and malonic ester adds two more; a seven-carbon halide overshoots by two.",
        "D": "1-Bromobutane gives hexanoic acid, six carbons, one short of the target."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q28_no_trialkylacetic_acids",
    "topic": "Alkylation of Enolate Ions",
    "difficulty_level": "Medium",
    "question_text": "Monoalkylated and dialkylated acetic acids, RCH2CO2H and R2CHCO2H, can be made by the malonic ester synthesis, but trialkylated acetic acids, R3CCO2H, cannot. Why not?",
    "options": [
      {
        "option_id": "A",
        "text": "Malonic ester has only two alpha hydrogens; after two alkylations the central carbon has none left, so no third enolate can form to be alkylated",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A dialkylated malonic ester cannot be hydrolysed, because the two alkyl groups shield the ester carbonyls",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A trialkylated malonic acid would not decarboxylate, because decarboxylation requires an alpha hydrogen",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The third alkyl halide would have to be tertiary, and tertiary halides undergo E2 instead of SN2",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Each alkylation in the malonic ester synthesis begins by removing an alpha proton from the carbon between the two esters. Diethyl malonate has two such protons. The first alkylation uses one; the monoalkylated ester still has one acidic hydrogen and can be alkylated again; the dialkylated ester has a quaternary central carbon with no hydrogen at all, so ethoxide has nothing to remove and no enolate forms. Hydrolysis and decarboxylation of the dialkylated ester then give R2CHCO2H, in which the hydrogen on the alpha carbon arrived during decarboxylation. There is no way to put a third group on that carbon by this route.",
      "approach": "Step 1: Count the alpha hydrogens of malonic ester: two, on the central CH2.\nStep 2: First alkylation: CH2 becomes CHR, one acidic hydrogen left. Second alkylation: CHR becomes CR2, none left.\nStep 3: With no alpha hydrogen, no enolate can be generated from the dialkylated ester, so a third alkyl halide has nothing to react with.\nStep 4: Hydrolysis and decarboxylation of R2C(CO2Et)2 give R2CHCO2H; the alpha carbon acquires a hydrogen in the decarboxylation step, so the product is at most dialkylated.",
      "note": "McMurry 22.7 (Alkylation of Enolate Ions) poses this as Problem 22-11 after noting that the product of a malonic ester alkylation has one acidic alpha hydrogen remaining, so the process can be repeated to give a dialkylated malonic ester. The same arithmetic limits the acetoacetic ester synthesis to methyl ketones with at most two groups on the alpha carbon (Problem 22-14: 3,3-dimethyl-2-butanone cannot be made). Trialkylacetic acids are made instead by Grignard carboxylation of a tertiary halide (20.5).",
      "options": {
        "A": "Correct. Two alpha hydrogens permit two alkylations; the dialkylated ester has none, so a third is impossible.",
        "B": "Dialkylated malonic esters are hydrolysed and decarboxylated normally; that is how R2CHCO2H is made. The limitation is at the alkylation stage, not the hydrolysis.",
        "C": "Decarboxylation of a malonic acid does not require an alpha hydrogen; the cyclic mechanism runs through the acid's own O-H and the second carbonyl. And a trialkylated malonic acid never forms in the first place, because the trialkylation cannot happen.",
        "D": "The halides used can each be methyl or primary; the problem is not the halide but the substrate. Even with three iodomethanes, the third one has no enolate to alkylate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q29_cyclopentanecarboxylic_scheme",
    "topic": "Alkylation of Enolate Ions",
    "difficulty_level": "Hard",
    "question_text": "Diethyl malonate is treated with two equivalents of sodium ethoxide and one equivalent of 1,4-dibromobutane, and the product is then heated with aqueous HCl. What is the final organic product?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(=O)CC(=O)OCC",
        "BrCCCCBr"
      ],
      "reagents": "1. NaOEt (2 equiv), EtOH; 2. H3O+, heat",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A CH2 flanked by two ester groups, each a C=O bearing an OCH2CH3: diethyl malonate.",
        "A four-carbon chain with a bromine on each end carbon: 1,4-dibromobutane."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Cyclopentanecarboxylic acid",
        "smiles": "OC(=O)C1CCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclobutanecarboxylic acid",
        "smiles": "OC(=O)C1CCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Octanedioic acid",
        "smiles": "OC(=O)CCCCCCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclopentane-1,1-dicarboxylic acid",
        "smiles": "OC(=O)C1(CCCC1)C(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Malonic ester has two alpha hydrogens, so it can be alkylated twice, and if the two alkylations use the two ends of a single dihalide the second one is intramolecular and closes a ring. The malonate carbon becomes one ring atom and the dihalide's carbons the rest, so a 1,4-dihalide gives a five-membered ring. Hydrolysis and decarboxylation then convert the two ester groups into a single carboxyl on the ring carbon. Three-, four-, five- and six-membered rings are made this way; larger rings suffer from competing intermolecular alkylation.",
      "approach": "Step 1: The first equivalent of ethoxide gives the malonate enolate, which alkylates one end of 1,4-dibromobutane: diethyl (4-bromobutyl)malonate.\nStep 2: The second equivalent of ethoxide removes the remaining alpha proton; the new enolate displaces the second bromide intramolecularly, closing a ring of five atoms (the malonate carbon plus four CH2).\nStep 3: Hot aqueous HCl hydrolyses both esters to cyclopentane-1,1-dicarboxylic acid.\nStep 4: The malonic acid decarboxylates: cyclopentanecarboxylic acid.",
      "note": "McMurry 22.7 (Alkylation of Enolate Ions) gives this exact example: 1,4-dibromobutane with diethyl malonate and two equivalents of sodium ethoxide, the second alkylation occurring intramolecularly to give a cyclic product, and hydrolysis and decarboxylation then giving cyclopentanecarboxylic acid; three- to six-membered rings can be prepared, with yields decreasing for larger rings. Ring size is the malonate carbon plus the dihalide's chain, so a 1,3-dihalide gives a cyclobutane and a 1,5-dihalide a cyclohexane.",
      "options": {
        "A": "Correct. Two alkylations by the two ends of the dibromide close a five-membered ring; hydrolysis and decarboxylation leave one carboxyl on it.",
        "B": "A cyclobutane would need a 1,3-dihalide: the ring contains the malonate carbon plus every carbon of the dihalide chain, so four CH2 groups give a five-membered ring, not four.",
        "C": "Octanedioic acid would arise if two separate malonate units alkylated the two ends of the dibromide (an intermolecular double alkylation) and both were then decarboxylated. With one equivalent of dihalide and the second alkylation intramolecular, the ring forms instead.",
        "D": "Cyclopentane-1,1-dicarboxylic acid is the diacid after hydrolysis, and as a malonic acid it decarboxylates on heating in the acidic medium. It is an intermediate, not the isolated product."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q30_which_acid_decarboxylates",
    "topic": "Alkylation of Enolate Ions",
    "difficulty_level": "Medium",
    "question_text": "Which carboxylic acid loses CO2 on gentle heating?",
    "options": [
      {
        "option_id": "A",
        "text": "3-Oxobutanoic acid (acetoacetic acid)",
        "smiles": "CC(=O)CC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-Oxopentanoic acid",
        "smiles": "CC(=O)CCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Butanoic acid",
        "smiles": "CCCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Oxopropanoic acid (pyruvic acid)",
        "smiles": "CC(=O)C(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Decarboxylation is not a general reaction of carboxylic acids. It happens readily only when a second carbonyl group sits two atoms away from the carboxyl carbon, as in beta-keto acids and malonic acids. The reason is mechanistic: the acid's O-H hydrogen is transferred to the second carbonyl's oxygen through a six-membered cyclic transition state as the C-C bond breaks and CO2 leaves, and the initial product is an enol, which tautomerises to the ketone (or acid). Without a carbonyl in the beta position that cyclic pathway does not exist, and an ordinary acid needs far harsher conditions to lose CO2.",
      "approach": "Step 1: For each acid, locate any second carbonyl and count its distance from the CO2H carbon.\nStep 2: 3-Oxobutanoic acid: the ketone C=O is on C3, two atoms from the carboxyl carbon, a beta-keto acid. The cyclic mechanism operates: CO2 is lost and the enol of acetone tautomerises to acetone.\nStep 3: 4-Oxopentanoic acid has its ketone one carbon too far (gamma); pyruvic acid has it one carbon too close (alpha), so no six-membered transition state can form. Butanoic acid has no second carbonyl.\nStep 4: Only the beta-keto acid decarboxylates on gentle heating.",
      "note": "McMurry 22.7 (Alkylation of Enolate Ions) states that decarboxylation is unique to compounds that have a second carbonyl group two atoms away from the CO2H, that is, only substituted malonic acids and beta-keto acids lose CO2 on heating, and that the reaction occurs by a cyclic mechanism with initial formation of an enol. This is the step that finishes both the malonic ester and acetoacetic ester syntheses. Alpha-keto acids such as pyruvate are decarboxylated in cells, but only with the help of thiamine diphosphate (29.6), not by heat.",
      "options": {
        "A": "Correct. A beta-keto acid: the carbonyl two atoms from the carboxyl carbon enables the cyclic decarboxylation, giving acetone via its enol.",
        "B": "4-Oxopentanoic acid is a gamma-keto acid: the ketone is three atoms from the carboxyl carbon, so the six-membered cyclic transition state cannot form and the acid is stable to gentle heating.",
        "C": "Butanoic acid has no second carbonyl group at all. Simple carboxylic acids do not decarboxylate except under drastic conditions, which is exactly why the malonate route is needed to make acids that then lose CO2 selectively.",
        "D": "Pyruvic acid is an alpha-keto acid, with the ketone directly on the carboxyl carbon. No enol can form from the carboxyl carbon leaving, and there is no six-membered cyclic pathway; thermally it is stable, and its biological decarboxylation needs a thiamine cofactor."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q31_acetoacetic_benzyl_scheme",
    "topic": "Alkylation of Enolate Ions",
    "difficulty_level": "Medium",
    "question_text": "Ethyl acetoacetate is treated with sodium ethoxide, then with benzyl bromide, and the product is heated with aqueous HCl. What is the final organic product?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(=O)CC(C)=O"
      ],
      "reagents": "1. NaOEt, EtOH; 2. PhCH2Br; 3. H3O+, heat",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "An ethyl group on an oxygen bonded to a C=O; that carbonyl carbon is attached to a CH2, which is attached to a second C=O bearing a methyl group: ethyl acetoacetate."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "4-Phenylbutan-2-one",
        "smiles": "CC(=O)CCc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Phenylbutan-2-one",
        "smiles": "CCC(=O)Cc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethyl 2-benzyl-3-oxobutanoate",
        "smiles": "CCOC(=O)C(Cc1ccccc1)C(C)=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-Phenylpropanoic acid",
        "smiles": "O=C(O)CCc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The acetoacetic ester synthesis converts an alkyl halide into a methyl ketone with three more carbons. Ethoxide deprotonates the CH2 between the two carbonyls (pKa 11); the enolate alkylates the halide by SN2 at that carbon; then hot aqueous acid hydrolyses the ester to a beta-keto acid, which decarboxylates through its enol to a ketone. The acetyl group's carbons stay, the ester carbon leaves as CO2, and the halide's alkyl group ends up on the carbon alpha to the ketone. So the product is CH3C(=O)CH2R.",
      "approach": "Step 1: NaOEt removes the doubly activated proton: the acetoacetate enolate.\nStep 2: SN2 on benzyl bromide (a primary, benzylic halide, ideal for SN2) puts the benzyl group on the central carbon: ethyl 2-benzyl-3-oxobutanoate.\nStep 3: Hot aqueous HCl hydrolyses the ester: 2-benzyl-3-oxobutanoic acid, a beta-keto acid.\nStep 4: Decarboxylation gives CH3C(=O)CH2CH2Ph, 4-phenylbutan-2-one: the methyl ketone with the halide's carbons plus three.",
      "note": "McMurry 22.7 (Alkylation of Enolate Ions) presents the acetoacetic ester synthesis as the ketone counterpart of the malonic ester synthesis, converting an alkyl halide into a methyl ketone having three more carbons, with hydrolysis to a beta-keto acid and decarboxylation through a ketone enol; the worked example makes 2-pentanone from bromoethane, and Problem 22-14 lists phenylacetone (from benzyl bromide) as a target it can reach. Direct LDA alkylation of acetone with benzyl bromide would give the same ketone but with dialkylation and self-condensation as side reactions.",
      "options": {
        "A": "Correct. Benzyl on the central carbon, then hydrolysis and decarboxylation give the methyl ketone with the benzyl group beta to the carbonyl... that is, on the carbon adjacent to the former central CH: CH3COCH2CH2Ph.",
        "B": "1-Phenylbutan-2-one has the benzyl group attached directly to the carbonyl carbon, which would require the acetyl carbon to have been alkylated. The enolate carbon that attacks the halide is the CH2 between the carbonyls, which after decarboxylation is the CH2 next to the ketone, and the benzyl sits on it.",
        "C": "Ethyl 2-benzyl-3-oxobutanoate is the alkylation product, present before step 3. Heating with aqueous acid hydrolyses the ester and the resulting beta-keto acid loses CO2.",
        "D": "3-Phenylpropanoic acid would be the malonic ester synthesis product from benzyl bromide: a carboxylic acid with two carbons added. Acetoacetic ester adds three and gives a ketone, because it is the ester carbon, not the ketone carbon, that is lost."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q32_acetoacetic_pentanone_halide",
    "topic": "Alkylation of Enolate Ions",
    "difficulty_level": "Easy",
    "question_text": "Which alkyl halide gives pentan-2-one by an acetoacetic ester synthesis?",
    "options": [
      {
        "option_id": "A",
        "text": "Bromoethane",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Bromopropane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Bromomethane",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Bromopropane",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An acetoacetic ester synthesis delivers a methyl ketone, CH3C(=O)CH2R, in which the three carbons of the acetyl-CH2 unit come from acetoacetic ester and R comes from the alkyl halide. So the halide contributes the target's carbons minus three, as a primary (or methyl) group, attached to the CH2 alpha to the ketone. Read the target from the ketone end: CH3-C(=O)-CH2- is the acetoacetate part, and whatever follows is R.",
      "approach": "Step 1: Write pentan-2-one as CH3C(=O)CH2-CH2CH3.\nStep 2: The CH3C(=O)CH2 unit is supplied by acetoacetic ester.\nStep 3: R is CH2CH3, ethyl, so the halide is bromoethane (or iodoethane).\nStep 4: Sequence: NaOEt; bromoethane; then H3O+ and heat to hydrolyse and decarboxylate.",
      "note": "McMurry 22.7 (Alkylation of Enolate Ions) works this exact target: an acetoacetic ester synthesis yields a methyl ketone by adding three carbons to an alkyl halide, so the synthesis of 2-pentanone must involve reaction of bromoethane. Problem 22-13 asks for the halides for two further ketones. Secondary halides such as 2-bromopropane alkylate enolates poorly, as the SN2 constraints in the same section state.",
      "options": {
        "A": "Correct. Ethyl from bromoethane plus the three-carbon acetyl-CH2 unit of acetoacetic ester gives pentan-2-one.",
        "B": "1-Bromopropane gives hexan-2-one: propyl plus three carbons is six.",
        "C": "Bromomethane gives butan-2-one: a methyl on the CH2 makes CH3COCH2CH3, four carbons.",
        "D": "2-Bromopropane is a secondary halide and alkylates the enolate poorly, and even where it reacts it gives 3-methylpentan-2-one, a branched isomer, not pentan-2-one."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q33_acetoacetic_cannot_make",
    "topic": "Alkylation of Enolate Ions",
    "difficulty_level": "Medium",
    "question_text": "Which methyl ketone cannot be prepared by an acetoacetic ester synthesis?",
    "options": [
      {
        "option_id": "A",
        "text": "Acetophenone, PhCOCH3",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Phenylacetone, PhCH2COCH3",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Hexan-2-one",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-Methylpentan-2-one",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The acetoacetic ester synthesis has two structural requirements. The alkyl group arrives by SN2, so it must be methyl or primary (allylic and benzylic best), never aryl, vinyl or tertiary. And the group is attached to the carbon between the two carbonyls, which after decarboxylation is the CH2 (or CHR) alpha to the ketone, never the carbonyl carbon itself. A methyl ketone whose non-methyl group is attached directly to the carbonyl carbon, with no alpha CH2 or CHR to carry substituents, cannot come from this route: acetophenone has a phenyl on the carbonyl carbon and no alpha carbon on that side at all.",
      "approach": "Step 1: For each target, write it as CH3C(=O)-CHR'R'' and ask whether R' and R'' could each have been added by SN2 with a methyl or primary halide.\nStep 2: Phenylacetone: CH3C(=O)CH2Ph, R' = Ph on the alpha CH2, added via benzyl bromide, a fine SN2 substrate. Possible.\nStep 3: Hexan-2-one: CH3C(=O)CH2CH2CH2CH3 via 1-bromopropane. 3-Methylpentan-2-one: CH3C(=O)CH(CH3)CH2CH3 via two alkylations, iodomethane and bromoethane. Both possible.\nStep 4: Acetophenone: the phenyl is on the carbonyl carbon; there is no alpha carbon bearing it, and an aryl group cannot be introduced by SN2 anyway. Not possible by this route.",
      "note": "McMurry 22.7 (Alkylation of Enolate Ions) asks this as Problem 22-14, naming phenylacetone as accessible and acetophenone and 3,3-dimethyl-2-butanone as not. Acetophenone is made instead by Friedel-Crafts acylation (16.3) or from benzonitrile and a Grignard reagent (20.7); 3,3-dimethyl-2-butanone fails for the other reason, that three groups cannot be put on the alpha carbon because acetoacetic ester has only two alpha hydrogens.",
      "options": {
        "A": "Correct. The phenyl group of acetophenone sits directly on the carbonyl carbon, where the acetoacetic ester route can never place a substituent, and aryl halides do not undergo SN2 in any case.",
        "B": "Phenylacetone is CH3C(=O)CH2Ph: alkylation of acetoacetic ester with benzyl bromide, then hydrolysis and decarboxylation, gives exactly this. The text lists it as accessible.",
        "C": "Hexan-2-one is CH3C(=O)CH2-CH2CH2CH3, made from acetoacetic ester and 1-bromopropane, a primary halide.",
        "D": "3-Methylpentan-2-one is CH3C(=O)CH(CH3)CH2CH3: two alkylations of acetoacetic ester, with iodomethane and bromoethane in either order, then hydrolysis and decarboxylation. Two substituents on the alpha carbon is the maximum, and this target has exactly two."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q34_ester_lda_methylation_scheme",
    "topic": "Alkylation of Enolate Ions",
    "difficulty_level": "Medium",
    "question_text": "Ethyl cyclohexanecarboxylate is treated with LDA in THF at -78 °C, and iodomethane is then added. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(=O)C1CCCCC1"
      ],
      "reagents": "1. LDA, THF; 2. CH3I",
      "conditions": "-78 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-membered ring bearing a carbon that carries a double-bonded oxygen and an OCH2CH3 group: ethyl cyclohexanecarboxylate."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Ethyl 1-methylcyclohexanecarboxylate",
        "smiles": "CCOC(=O)C1(C)CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methyl cyclohexanecarboxylate",
        "smiles": "COC(=O)C1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Methylcyclohexanecarboxylic acid",
        "smiles": "OC(=O)C1(C)CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl 2-methylcyclohexanecarboxylate",
        "smiles": "CCOC(=O)C1CCCCC1C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A monocarbonyl compound such as an ester can be alkylated directly at its alpha carbon provided the enolate is formed completely, which needs a strong, hindered, non-nucleophilic base in a non-protic solvent: LDA in THF. The ester's single alpha hydrogen, on the ring carbon bearing the ester group, is removed; the enolate attacks the methyl of CH3I by SN2; and the product carries the new methyl on that alpha carbon, which is now quaternary. Ketones and nitriles are alkylated the same way; aldehydes are not, because their enolates condense instead.",
      "approach": "Step 1: Identify the alpha carbon: ring C1, the carbon bearing the CO2Et group, which has one hydrogen (pKa about 25).\nStep 2: LDA (diisopropylamine pKa 36) removes that hydrogen completely, giving the ester enolate; THF supplies no proton to quench it.\nStep 3: The enolate carbon attacks CH3I in an SN2 reaction; iodide leaves.\nStep 4: Product: ethyl 1-methylcyclohexanecarboxylate, the ester with a methyl on its alpha carbon; no second alkylation is possible because that carbon now has no hydrogen.",
      "note": "McMurry 22.7 (Alkylation of Enolate Ions) works this target in its example on preparing a substituted ester: identify the methyl or primary alkyl group on an alpha carbon and introduce it by alkylating the ester enolate with iodomethane. The section states that ketones, esters and nitriles are alkylated with LDA or related dialkylamide bases in THF, that a strong hindered base is needed so that complete enolate formation rather than nucleophilic addition occurs, and that a non-protic solvent must be used.",
      "options": {
        "A": "Correct. LDA generates the ester enolate at the ring carbon bearing the ester, and iodomethane methylates that carbon.",
        "B": "Methyl cyclohexanecarboxylate would be a transesterification, exchanging the ethyl on oxygen for a methyl. Iodomethane does not do that, and the alkylation happens at carbon, on the alpha position, not on the ester oxygen.",
        "C": "The free acid would require hydrolysis of the ester, and there is no water in the reaction: THF and LDA are anhydrous, and the work-up here is not aqueous acid at elevated temperature. The ester group survives; only a methyl is added.",
        "D": "Ethyl 2-methylcyclohexanecarboxylate has the methyl on a ring carbon that is beta to the ester carbonyl. Those hydrogens are not acidic, LDA does not remove them, and no enolate forms there; alkylation is confined to the alpha carbon."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q35_nitrile_allylation_scheme",
    "topic": "Alkylation of Enolate Ions",
    "difficulty_level": "Hard",
    "question_text": "Butanenitrile is treated with LDA in THF, and allyl bromide is then added. What is the major product?",
    "reaction_scheme": {
      "reactants": [
        "CCCC#N"
      ],
      "reagents": "1. LDA, THF; 2. CH2=CHCH2Br",
      "conditions": "-78 °C to 25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A three-carbon chain whose end carbon is attached to a carbon triple-bonded to nitrogen: butanenitrile."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-Ethylpent-4-enenitrile",
        "smiles": "C=CCC(CC)C#N",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Hept-6-enenitrile",
        "smiles": "C=CCCCCC#N",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Allyl-2-ethylpent-4-enenitrile (dialkylation)",
        "smiles": "C=CCC(CC=C)(CC)C#N",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Hept-1-en-4-one",
        "smiles": "C=CCC(=O)CCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A nitrile's alpha hydrogens (pKa about 25) are removed completely by LDA to give an anion delocalised onto nitrogen, the nitrile analogue of an enolate. That anion is a carbon nucleophile at the alpha carbon and alkylates an alkyl halide by SN2. Allyl bromide is an ideal partner: primary and allylic. The new C-C bond forms at the carbon that was alpha to the nitrile, and the nitrile group itself is untouched; LDA is a base, not a nucleophile, and does not add to the C≡N as a Grignard reagent would.",
      "approach": "Step 1: LDA removes an alpha proton from C2 of butanenitrile: the anion CH3CH2CH(-)C≡N, delocalised as CH3CH2CH=C=N-.\nStep 2: The alpha carbon attacks the CH2 of allyl bromide in an SN2 reaction; bromide leaves.\nStep 3: The product carries the allyl group on C2, alongside the ethyl group that was already there.\nStep 4: Name from the nitrile carbon: C1 is C≡N, C2 bears the ethyl, the allyl chain runs C3-C4=C5: 2-ethylpent-4-enenitrile, racemic. With one equivalent of each reagent there is no second alkylation.",
      "note": "McMurry 22.7 (Alkylation of Enolate Ions) lists nitriles with ketones and esters as the compounds that can be alkylated directly using LDA or related bases in THF, and 22.5 records that nitriles are acidic (pKa 25) and give enolate-like anions, with Problem 22-8 asking for their resonance form. Grignard reagents behave differently toward nitriles: they add to the C≡N carbon and give ketones after hydrolysis (20.7), which is the chemistry option D mistakes this for.",
      "options": {
        "A": "Correct. The nitrile anion, generated at C2 by LDA, is allylated there by SN2; the nitrile is retained.",
        "B": "Hept-6-enenitrile has the allyl group joined to the far end of the chain, C4 of butanenitrile. Those terminal methyl hydrogens are gamma to the nitrile and not acidic; only the alpha carbon, C2, becomes a nucleophile.",
        "C": "Dialkylation would need a second equivalent of LDA and of allyl bromide, since after the first allylation C2 still has one hydrogen. One equivalent of each gives the monoalkylated nitrile.",
        "D": "Hept-1-en-4-one would come from an allyl Grignard adding to the nitrile carbon and hydrolysis of the imine (20.7). LDA does not add to nitriles; it deprotonates them, and allyl bromide is an electrophile that reacts with the resulting anion at carbon."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q36_aldehydes_poor_alkylation",
    "topic": "Alkylation of Enolate Ions",
    "difficulty_level": "Medium",
    "question_text": "Ketones, esters and nitriles are alkylated cleanly with LDA and an alkyl halide, but aldehydes rarely give good yields. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "The aldehyde enolate attacks the carbonyl of another aldehyde molecule (a carbonyl condensation) faster than it attacks the alkyl halide, so self-condensation products dominate",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Aldehydes have no alpha hydrogens acidic enough for LDA to remove",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "LDA reduces aldehydes to alcohols by hydride transfer before any enolate can form",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Aldehyde enolates alkylate only on oxygen, giving enol ethers",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An enolate is a nucleophile, and an alkyl halide is not the only electrophile in the flask: the un-deprotonated carbonyl compound is one too. For ketones and esters that self-reaction is slow enough, and the carbonyl hindered enough, that the alkyl halide wins. An aldehyde carbonyl is the most reactive of the common carbonyls toward nucleophiles, unhindered and strongly electrophilic, so the aldehyde enolate adds to a second aldehyde molecule as fast as it is formed. The result is an aldol addition product rather than an alkylated aldehyde. The problem is competition, not acidity.",
      "approach": "Step 1: LDA does remove an aldehyde's alpha proton (pKa about 17, more acidic than a ketone's).\nStep 2: The enolate formed has two electrophiles available: the alkyl halide and any aldehyde not yet deprotonated (or added afterward).\nStep 3: An aldehyde carbonyl is far more electrophilic than an alkyl halide's carbon, so the enolate adds to it: the aldol reaction of Ch 23.\nStep 4: The mixture ends up as beta-hydroxy aldehydes and their dehydration products, with little alkylated aldehyde; the direct alkylation is therefore reserved for ketones, esters and nitriles.",
      "note": "McMurry 22.7 (Alkylation of Enolate Ions) states that aldehydes rarely give high yields of pure products because their enolate ions undergo carbonyl condensation reactions instead of alkylation, deferring that condensation to the next chapter. The aldol reaction (23.1) is exactly this: an enolate adding to an aldehyde carbonyl. When an alpha-alkylated aldehyde is wanted, chemists alkylate an imine or enamine derivative instead (the Stork enamine reaction is in 23.11 for ketones).",
      "options": {
        "A": "Correct. The aldehyde enolate finds the aldehyde carbonyl a better electrophile than the alkyl halide and undergoes aldol condensation instead.",
        "B": "Aldehyde alpha hydrogens are more acidic than a ketone's (pKa about 17 against 19), so LDA removes them readily. The difficulty is what the enolate does next, not whether it forms.",
        "C": "LDA is a proton base, not a hydride donor; it has no hydrogen on nitrogen or on a carbon that could be transferred as hydride to a carbonyl. Reduction is not the side reaction.",
        "D": "Aldehyde enolates, like all enolates, react with alkyl halides mainly at carbon when they react with them at all. O-alkylation is a minor path; the competing reaction that ruins the alkylation is addition to another aldehyde."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q37_roadmap_malonic_dialkylation",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following synthetic pathway from diethyl malonate. Determine the correct compounds matching labels B, C and D.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(=O)CC(=O)OCC",
          "label": "Compound A",
          "alt": "A CH2 flanked by two ester groups, each a C=O bearing an OCH2CH3: diethyl malonate, drawn as compound A.",
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
          "reagents": "1. NaOEt, EtOH; 2. CH3I"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1. NaOEt, EtOH; 2. CH3CH2Br"
        },
        {
          "from": "C",
          "to": "D",
          "reagents": "H3O+, heat"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "B: diethyl methylmalonate, C: diethyl ethylmethylmalonate, D: 2-methylbutanoic acid",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "B: diethyl methylmalonate, C: diethyl ethylmethylmalonate, D: ethylmethylmalonic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "B: diethyl methylmalonate, C: diethyl ethylmethylmalonate, D: 3-methylpentan-2-one",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "B: diethyl methylmalonate, C: diethyl propylmalonate, D: pentanoic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Malonic ester carries two alpha hydrogens, so it can be alkylated twice, with a fresh equivalent of ethoxide before each halide, and the two alkyl groups can differ. Both go on the same carbon, the one between the ester groups. Hot aqueous acid then hydrolyses both esters and the resulting dialkylmalonic acid loses CO2, so the product is a carboxylic acid whose alpha carbon carries both alkyl groups and one hydrogen: R R'CHCO2H. Each alkylation is an SN2 at the enolate carbon, and neither halide's carbons join end to end with the other's.",
      "approach": "Step 1: A + NaOEt then CH3I: the malonate enolate is methylated. B is diethyl methylmalonate, CH3CH(CO2Et)2.\nStep 2: B + NaOEt then bromoethane: the remaining alpha hydrogen is removed and the enolate is ethylated on the same carbon. C is diethyl ethylmethylmalonate, (CH3)(C2H5)C(CO2Et)2.\nStep 3: C + H3O+, heat: both esters are hydrolysed and the malonic acid decarboxylates.\nStep 4: D is CH3CH2CH(CH3)CO2H, 2-methylbutanoic acid, racemic: an alpha carbon bearing methyl, ethyl and the hydrogen acquired in decarboxylation.",
      "note": "McMurry 22.7 (Alkylation of Enolate Ions) states that the product of a malonic ester alkylation has one acidic alpha hydrogen remaining, so the alkylation can be repeated to give a dialkylated malonic ester, and that heating with aqueous HCl then hydrolyses both esters and decarboxylates to a substituted monocarboxylic acid. Problem 22-10 includes a dialkylated target. The same two-alkylation logic on acetoacetic ester gives a ketone with two groups on the alpha carbon, which is what option C confuses this with.",
      "options": {
        "A": "Correct. Methylation, then ethylation on the same carbon, then hydrolysis and decarboxylation to 2-methylbutanoic acid.",
        "B": "Ethylmethylmalonic acid is the diacid after hydrolysis, but a malonic acid decarboxylates on heating in acid, and the roadmap's last step specifies heat. D is the monocarboxylic acid.",
        "C": "3-Methylpentan-2-one is what the same two alkylations would give starting from acetoacetic ester, which leaves a ketone after decarboxylation. Malonic ester has two ester groups and leaves a carboxylic acid.",
        "D": "The second halide does not extend the first alkyl group; each alkylation attaches its group to the central malonate carbon by SN2. Methyl and ethyl end up as two separate substituents on that carbon, not as a propyl chain."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q38_roadmap_cyclic_ketoester",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following synthetic pathway from ethyl 2-oxocyclohexanecarboxylate. Determine the correct compounds matching labels B and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(=O)C1CCCCC1=O",
          "label": "Compound A",
          "alt": "A six-membered ring with a C=O on one carbon and, on the adjacent ring carbon, an ester group, a C=O bearing OCH2CH3: ethyl 2-oxocyclohexanecarboxylate, drawn as compound A.",
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
          "reagents": "1. NaOEt, EtOH; 2. CH2=CHCH2Br"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H3O+, heat"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "B: ethyl 1-allyl-2-oxocyclohexanecarboxylate, C: 2-allylcyclohexanone",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "B: ethyl 1-allyl-2-oxocyclohexanecarboxylate, C: 1-allyl-2-oxocyclohexanecarboxylic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "B: ethyl 3-allyl-2-oxocyclohexanecarboxylate, C: 2-allylcyclohexanone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "B: ethyl 1-allyl-2-oxocyclohexanecarboxylate, C: 2-allylcyclohexanecarboxylic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The acetoacetic ester synthesis is not limited to acetoacetic ester: any beta-keto ester with an acidic alpha hydrogen goes through the same three steps. In a cyclic beta-keto ester the doubly activated hydrogen is on the ring carbon between the ketone and the ester. Ethoxide removes it, the enolate is alkylated there, hot aqueous acid hydrolyses the ester to a beta-keto acid, and decarboxylation removes the carboxyl and leaves a hydrogen in its place. The net result is a 2-substituted cyclohexanone, made regioselectively at the carbon that carried the ester, with no mixture of enolates.",
      "approach": "Step 1: A + NaOEt: the hydrogen on C1, between the ring ketone and the ester carbonyl (pKa about 11), is removed selectively.\nStep 2: The enolate attacks allyl bromide by SN2 at C1. B is ethyl 1-allyl-2-oxocyclohexanecarboxylate, C1 now quaternary.\nStep 3: B + H3O+, heat: the ester is hydrolysed to the beta-keto acid, which decarboxylates through the ketone enol.\nStep 4: C is 2-allylcyclohexanone: the allyl group on the carbon alpha to the ketone, the ester carbon gone as CO2, and C2 now bearing the hydrogen acquired in decarboxylation (racemic).",
      "note": "McMurry 22.7 (Alkylation of Enolate Ions) states that the three-step sequence of enolate formation, alkylation and hydrolysis/decarboxylation applies to all beta-keto esters with acidic alpha hydrogens, and gives ethyl 2-oxocyclohexanecarboxylate as its example: cyclic beta-keto esters can be alkylated and decarboxylated to give 2-substituted cyclohexanones. This is the regioselective alternative to alkylating cyclohexanone directly with LDA, which for a 2-substituted cyclohexanone would give mixtures, and the beta-keto ester itself is made by the Dieckmann cyclisation of Ch 23.",
      "options": {
        "A": "Correct. Allylation at the doubly activated carbon, then hydrolysis and decarboxylation of the beta-keto acid to 2-allylcyclohexanone.",
        "B": "The beta-keto acid is the intermediate of the last step, and beta-keto acids decarboxylate on heating in acid. With the heat specified, the carboxyl is lost and the ketone is the product.",
        "C": "Ethoxide removes the most acidic hydrogen, the one on C1 between the two carbonyls (pKa about 11), not a hydrogen on C3 alpha to the ketone alone (pKa about 20). Alkylation therefore occurs at C1.",
        "D": "2-Allylcyclohexanecarboxylic acid keeps the carboxyl and loses the ketone oxygen, which nothing in the sequence does. Decarboxylation removes the CO2H of a beta-keto acid and leaves the ketone in place."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q39_elucidation_bromoacetone",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound Z is a colourless, lachrymatory liquid (bp 137 °C). It gives an orange precipitate with 2,4-dinitrophenylhydrazine and a yellow precipitate with I2/NaOH, but no silver mirror with Tollens' reagent. Combustion analysis gives C 26.3%, H 3.7% and Br 58.3% by mass. IR: a strong band at $1725\\text{ cm}^{-1}$ and nothing above $3000\\text{ cm}^{-1}$. $^1\\text{H}$ NMR: 3.88 (singlet, 2H), 2.37 (singlet, 3H). The mass spectrum is shown. Which structure is Z?",
    "question_smiles": "",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 27,
          "y": 12
        },
        {
          "x": 43,
          "y": 100
        },
        {
          "x": 93,
          "y": 16
        },
        {
          "x": 95,
          "y": 16
        },
        {
          "x": 136,
          "y": 40
        },
        {
          "x": 138,
          "y": 40
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Bromoacetone (1-bromopropan-2-one)",
        "smiles": "CC(=O)CBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Bromopropanal",
        "smiles": "BrCCC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Bromopropanal",
        "smiles": "CC(Br)C=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propanoyl bromide",
        "smiles": "CCC(=O)Br",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The tests classify the compound before the spectra do: a 2,4-DNP precipitate means an aldehyde or ketone, no Tollens mirror rules out the aldehyde, and a positive iodoform test says the ketone is a methyl ketone. The mass spectrum announces one bromine at once: every bromine-containing ion appears as a pair of peaks two units apart of equal height, because 79Br and 81Br are almost equally abundant. The molecular ion is the 136/138 doublet, and the formula follows from the analysis. The NMR then places the bromine: two singlets, 3H and 2H, mean a methyl and a CH2 that do not couple, both on the carbonyl.",
      "approach": "Step 1: Formula. Per 100 g: C 26.3/12.01 = 2.19, H 3.7/1.008 = 3.67, Br 58.3/79.90 = 0.730, O by difference 11.7/16.00 = 0.731. Divide by 0.730: C 3, H 5, Br 1, O 1: C3H5BrO, M = 137 (79Br isotopomer 136, 81Br 138), matching the doublet. Unsaturation = (2 x 3 + 2 - 5 - 1)/2 = 1: the C=O.\nStep 2: Class. 2,4-DNP positive, Tollens negative, iodoform positive: a methyl ketone. IR 1725 fits a ketone carrying an alpha halogen (a little above acetone's 1715).\nStep 3: NMR. 2.37 (3H, singlet): a CH3 on the carbonyl. 3.88 (2H, singlet): a CH2 on the carbonyl and bearing the bromine, deshielded by both. No coupling between them, as neither has a proton neighbour. Z is CH3C(=O)CH2Br.\nStep 4: Mass spectrum. 136/138: M+ with the 1:1 bromine doublet. 43: the acetyl cation CH3CO+ from alpha cleavage, the base peak. 93/95: CH2Br+, again a 1:1 pair. Everything fits bromoacetone.",
      "note": "McMurry 22.3 (Alpha Halogenation of Aldehydes and Ketones) makes bromoacetone by acid-catalysed bromination of acetone (Figure 22.4) and records that bromoacetone occurs naturally in marine algae. The 1:1 doublet for bromine and alpha cleavage to the acylium ion are McMurry 12.2 and 12.3; the iodoform and 2,4-DNP tests are lecture material the text does not name. The alpha-bromo ketone's carbonyl is shifted slightly upward from acetone's 1715 by the electron-withdrawing bromine, the same inductive effect that raises an acid chloride's frequency (21.10).",
      "options": {
        "A": "Correct. C3H5BrO with one bromine (136/138 doublet), a methyl ketone by the tests, two uncoupled singlets for CH3CO and COCH2Br, and CH3CO+ at 43 as the base peak.",
        "B": "3-Bromopropanal is C3H5BrO but an aldehyde: it would give a Tollens mirror, a CHO triplet near 9.8 δ and the aldehyde C-H bands near 2720 and 2820, and no iodoform; its CH2 groups would appear as two coupled triplets, not singlets.",
        "C": "2-Bromopropanal is also C3H5BrO and also an aldehyde: Tollens positive, a CHO doublet near 9.5 δ, a CH quartet near 4.4 and a CH3 doublet near 1.7, all coupled. The spectrum shows only singlets and no aldehyde proton.",
        "D": "Propanoyl bromide, C3H5BrO, is an acid bromide: its carbonyl absorbs near 1810, it gives no 2,4-DNP derivative, it hydrolyses violently in water rather than surviving an iodoform test, and its NMR is an ethyl quartet and triplet, not two singlets."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch22_q40_elucidation_ethyl_acetoacetate",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound Q is a colourless liquid (bp 181 °C) with a fruity odour. It does not effervesce with NaHCO3, but it dissolves in cold aqueous NaOH; it gives an orange precipitate with 2,4-dinitrophenylhydrazine and a red-violet colour with aqueous FeCl3. Combustion analysis gives C 55.4% and H 7.7% by mass. IR: two strong bands at 1745 and $1720\\text{ cm}^{-1}$, and nothing above $3000\\text{ cm}^{-1}$ apart from weak C-H stretches (a weak broad band near 3000 from the minor enol is ignored). Mass spectrum: $\\text{M}^+$ at $m/z = 130$ (weak), peaks at 115, 88 and 85, and a base peak at 43. The $^1\\text{H}$ NMR of the major (keto) tautomer is shown; the small extra signals of the roughly 8% enol tautomer (12.1, 5.0 and 1.95 δ) have been omitted. Which structure is Q?",
    "question_smiles": "",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 4.2,
          "y": 2,
          "label": "quartet"
        },
        {
          "x": 3.45,
          "y": 2,
          "label": "singlet"
        },
        {
          "x": 2.27,
          "y": 3,
          "label": "singlet"
        },
        {
          "x": 1.28,
          "y": 3,
          "label": "triplet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Ethyl acetoacetate (ethyl 3-oxobutanoate)",
        "smiles": "CCOC(=O)CC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methyl 3-oxopentanoate",
        "smiles": "COC(=O)CC(=O)CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethyl 2-oxobutanoate",
        "smiles": "CCOC(=O)C(=O)CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-Oxohexanoic acid",
        "smiles": "CCC(=O)CCC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The tests point to a beta-dicarbonyl compound before the spectra are read. Dissolving in NaOH but not in NaHCO3 means an acid of pKa between about 7 and 15, and a C-H acid in that range is a 1,3-dicarbonyl (pKa 9-13); the FeCl3 colour comes from the chelated enol such compounds always contain; the 2,4-DNP precipitate says one carbonyl is a ketone; and no bicarbonate reaction rules out a carboxylic acid. Two carbonyl bands, one at ester frequency and one at ketone frequency, make it a beta-keto ester. The formula gives two degrees of unsaturation, both used by the two C=O groups, and the NMR then says which beta-keto ester it is.",
      "approach": "Step 1: Formula. Per 100 g: C 55.4/12.01 = 4.61, H 7.7/1.008 = 7.64, O by difference 36.9/16.00 = 2.31. Divide by 2.31: C 2, H 3.3, O 1; times 3: C6H10O3, M = 130, matching M+. Unsaturation = (2 x 6 + 2 - 10)/2 = 2: two C=O.\nStep 2: Class. NaOH-soluble, NaHCO3-insoluble, FeCl3-positive, 2,4-DNP-positive, IR 1745 (ester) and 1720 (ketone): a beta-keto ester.\nStep 3: NMR. 4.20 (2H, q) and 1.28 (3H, t): an ethyl ester, OCH2CH3. 3.45 (2H, s): the CH2 between the two carbonyls. 2.27 (3H, s): a CH3 on the ketone. Assemble: CH3C(=O)CH2C(=O)OCH2CH3, ethyl acetoacetate.\nStep 4: Mass spectrum. 43 base: CH3CO+ by alpha cleavage. 85: loss of OCH2CH3 (45) to the acylium ion. 88: McLafferty-type loss of ketene (42) from the ester side. 115: loss of CH3. The keto form is about 92% of the sample; the enol's OH at 12.1 and =CH at 5.0 are the omitted minor signals.",
      "note": "McMurry 22.1 (Keto-Enol Tautomerism) explains why a beta-dicarbonyl compound shows enol signals at all (conjugation and intramolecular hydrogen bonding stabilise the enol, 76% for 2,4-pentanedione), and McMurry 22.5 gives the pKa of a 3-keto ester as 11, which is what the NaOH/NaHCO3 solubility test reads out. The ester and ketone carbonyl positions are Table 21.3; the alpha cleavage to CH3CO+ is McMurry 12.3. The FeCl3 enol test and the solubility classification are lecture material. Ethyl acetoacetate is the substrate of the acetoacetic ester synthesis (22.7).",
      "options": {
        "A": "Correct. C6H10O3 with two carbonyls, a beta-keto ester by the solubility and FeCl3 tests, an ethyl ester (quartet and triplet), an isolated CH2 singlet between the carbonyls and an acetyl methyl singlet, with CH3CO+ at 43.",
        "B": "Methyl 3-oxopentanoate is C6H10O3 and also a beta-keto ester, but it has a methyl ester (3H singlet near 3.7) and an ethyl ketone (2H quartet near 2.55 and 3H triplet near 1.05); the spectrum's quartet is at 4.2, an O-CH2, and the 3H singlet is at 2.27, a CH3 on a ketone.",
        "C": "Ethyl 2-oxobutanoate is an alpha-keto ester: its two carbonyls are adjacent, so it has no CH2 between them, no 3.45 singlet, no doubly activated hydrogen (it would not dissolve in NaOH or colour FeCl3), and its ethyl ketone would give a quartet near 2.9 and a triplet near 1.1.",
        "D": "4-Oxohexanoic acid, C6H10O3, is a keto acid: it effervesces with NaHCO3, shows a broad O-H from 2500 to 3300 and a 12 δ singlet, and its CH2 groups are coupled triplets, not a singlet. The acid's carbonyl would be at 1710, not paired with an ester band at 1745."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  }
];
