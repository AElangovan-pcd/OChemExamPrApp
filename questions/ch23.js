// OChemStudyBuddy - McMurry Chapter 23
// Author: A. Elangovan, PhD
var CH23_QUESTIONS = [
  {
    "question_id": "ch23_q2_aldol_addition_scheme",
    "topic": "Carbonyl Condensations: The Aldol Reaction",
    "difficulty_level": "Easy",
    "question_text": "Acetaldehyde is treated with a catalytic amount of NaOH in water at 5 °C. What is the major organic product?",
    "reaction_scheme": {
      "reactants": [
        "CC=O"
      ],
      "reagents": "NaOH (cat.), H2O",
      "conditions": "5 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A methyl group attached to a CH=O group: acetaldehyde."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "3-Hydroxybutanal (aldol)",
        "smiles": "CC(O)CC=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(E)-But-2-enal (crotonaldehyde)",
        "smiles": "C/C=C/C=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Hydroxybutanal",
        "smiles": "CCC(O)C=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-Hydroxybutanal",
        "smiles": "OCCCC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carbonyl condensation joins two carbonyl compounds: base converts a little of one into its enolate, the enolate adds to the carbonyl carbon of a second, un-deprotonated molecule, and protonation gives a beta-hydroxy carbonyl compound. The nucleophilic partner has undergone an alpha substitution and the electrophilic partner a nucleophilic addition. The new C-C bond therefore always joins the alpha carbon of one molecule to the carbonyl carbon of the other, so the two oxygens of the product stand in a 1,3 relationship. At low temperature the beta-hydroxy aldehyde is the product; only with heat does it go on to lose water.",
      "approach": "Step 1: Hydroxide removes an alpha proton from one acetaldehyde molecule: the enolate CH2=CH-O-.\nStep 2: The enolate carbon attacks the carbonyl carbon of a second acetaldehyde: an alkoxide, CH3CH(O-)CH2CHO.\nStep 3: Water protonates the alkoxide and regenerates hydroxide: CH3CH(OH)CH2CHO, 3-hydroxybutanal, racemic.\nStep 4: At 5 °C the beta-hydroxy aldehyde survives; the enone would need heating.",
      "note": "McMurry 23.1 (Carbonyl Condensations: The Aldol Reaction) uses exactly this reaction to introduce the chapter: treatment of acetaldehyde with sodium ethoxide or sodium hydroxide leads to rapid and reversible formation of 3-hydroxybutanal, known as aldol (aldehyde + alcohol), from which the reaction takes its name. The equilibrium favours the product for aldehydes with no alpha substituent such as this one; McMurry 23.3 adds the dehydration that heating brings about.",
      "options": {
        "A": "Correct. The enolate of one acetaldehyde adds to the carbonyl of another; the beta-hydroxy aldehyde is the product at low temperature.",
        "B": "Crotonaldehyde is the dehydration product of the aldol, obtained when the mixture is heated (23.3). At 5 °C with catalytic base the beta-hydroxy aldehyde is isolated before it loses water.",
        "C": "2-Hydroxybutanal would have the OH on the alpha carbon, a 1,2 relationship of the oxygens. The aldol bond forms between the alpha carbon of the donor and the carbonyl carbon of the acceptor, which puts the new OH on the beta carbon.",
        "D": "4-Hydroxybutanal would need the donor's methyl carbon, which is not alpha to a carbonyl, to be the nucleophile. Only the alpha carbon of acetaldehyde is acidic, so the new bond is made there."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q_aldol_condensation_scheme",
    "topic": "Dehydration of Aldol Products",
    "difficulty_level": "Easy",
    "question_text": "Acetaldehyde is heated with aqueous NaOH. What is the major organic product?",
    "reaction_scheme": {
      "reactants": [
        "CC=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A methyl group attached to a CH=O group: acetaldehyde."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "(E)-But-2-enal (crotonaldehyde)",
        "smiles": "C/C=C/C=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Hydroxybutanal",
        "smiles": "CC(O)CC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "But-3-enal",
        "smiles": "C=CCC=O",
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
      "context": "The beta-hydroxy aldehyde formed in an aldol reaction dehydrates easily on heating, in acid or base, to give an alpha,beta-unsaturated aldehyde, a conjugated enal. It is this loss of water that makes the reaction a condensation. Ordinary alcohols resist base-promoted dehydration because hydroxide is a poor leaving group, but an aldol product has an acidic alpha hydrogen: base removes it, and the enolate expels the adjacent hydroxide in an E1cB elimination. The new C=C is conjugated with the C=O, which is what makes the enone the stable end point, and the trans (E) alkene is favoured.",
      "approach": "Step 1: Aldol addition first: hydroxide forms the enolate of acetaldehyde, which adds to a second molecule to give 3-hydroxybutanal.\nStep 2: On heating, hydroxide removes the alpha proton (C2-H) of the aldol, giving its enolate.\nStep 3: The enolate expels the hydroxide from C3 (E1cB), forming the C2=C3 double bond.\nStep 4: Product: CH3CH=CHCHO, (E)-but-2-enal, crotonaldehyde, conjugated and with the methyl and CHO on opposite sides of the C=C.",
      "note": "McMurry 23.3 (Dehydration of Aldol Products: Synthesis of Enones) works this exact case as its example, the enone from aldol condensation of acetaldehyde, and gives the E1cB mechanism under base (11.10) and the E1/E2 path under acid; it notes that the conditions for dehydration are often only a little more vigorous than for the aldol itself, so conjugated enones are usually obtained directly. The original version of this item drew the product beside the question; the product is now hidden until the item is answered.",
      "options": {
        "A": "Correct. Aldol addition followed by E1cB dehydration on heating gives the conjugated enal.",
        "B": "3-Hydroxybutanal is the aldol addition product, isolable at low temperature. Heating with base dehydrates it: the alpha proton is removed and hydroxide is expelled from the beta carbon.",
        "C": "But-3-enal has its double bond between C3 and C4, not conjugated with the carbonyl. Dehydration goes through the enolate, so the double bond forms between the alpha and beta carbons (C2=C3), giving the conjugated isomer, which is also the more stable one.",
        "D": "Ethyl acetate is an ester with the formula of two acetaldehydes; the Tishchenko reaction gives it, but with aluminium alkoxide catalysis, not aqueous hydroxide. Under aldol conditions the enolate adds to a carbonyl and no ester forms."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q1_propanal_aldol_scheme",
    "topic": "Carbonyl Condensations: The Aldol Reaction",
    "difficulty_level": "Medium",
    "question_text": "Propanal is treated with 0.05 equivalent of sodium methoxide in methanol and warmed gently. What is the aldol addition product?",
    "reaction_scheme": {
      "reactants": [
        "CCC=O"
      ],
      "reagents": "NaOCH3 (0.05 equiv), CH3OH",
      "conditions": "warm",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A two-carbon chain attached to a CH=O group: propanal."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "3-Hydroxy-2-methylpentanal",
        "smiles": "CCC(O)C(C)C=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Hydroxyhexanal",
        "smiles": "CCCC(O)CC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)-2-Methylpent-2-enal",
        "smiles": "CC/C=C(\\C)C=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-Hydroxypentanal",
        "smiles": "CCC(O)CC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An aldol reaction bonds the alpha carbon of one molecule to the carbonyl carbon of a second molecule of the same compound. Everything about the product's skeleton follows from that: the donor keeps its carbonyl and gains a substituent on its alpha carbon; the acceptor's carbonyl carbon becomes the carbinol carbon, bearing OH. For propanal the alpha carbon is the CH2, so the product's alpha carbon carries a methyl (the donor's C3) as well as the new C-C bond, and the OH sits on a carbon that still carries the acceptor's ethyl group.",
      "approach": "Step 1: Methoxide removes an alpha proton from propanal: the enolate CH3CH=CH-O-.\nStep 2: The enolate's alpha carbon attacks the carbonyl carbon of a second propanal.\nStep 3: Protonation by methanol gives CH3CH2-CH(OH)-CH(CH3)-CHO.\nStep 4: Name it: pentanal chain (C1 CHO, C2 CHCH3, C3 CHOH, C4, C5), 3-hydroxy-2-methylpentanal, formed as a mixture of diastereomers. Catalytic base and mild warming stop at the addition product.",
      "note": "McMurry 23.1 (Carbonyl Condensations: The Aldol Reaction) works this exact case in its example, stressing that the product is a beta-hydroxy aldehyde with the two oxygens in a 1,3 relationship, and McMurry 23.2 gives these conditions, 0.05 equivalent of sodium methoxide in methanol, as the way to favour condensation over alpha alkylation: a little enolate in the presence of much unreacted aldehyde. Two new stereocentres form, so four stereoisomers (two racemic diastereomers) result.",
      "options": {
        "A": "Correct. The alpha CH2 of one propanal bonds to the carbonyl carbon of another; the product is the beta-hydroxy aldehyde with a methyl on the alpha carbon.",
        "B": "3-Hydroxyhexanal would need the donor's methyl carbon (C3 of propanal) to be the nucleophile, giving an unbranched chain. That carbon is beta to the carbonyl and not acidic; the bond forms at the alpha CH2, which leaves a methyl branch on C2.",
        "C": "2-Methylpent-2-enal is the condensation product, the enal formed when the aldol dehydrates on stronger heating. With catalytic methoxide and gentle warming the beta-hydroxy aldehyde is the product.",
        "D": "3-Hydroxypentanal has only five carbons and no methyl on C2, as if one partner were acetaldehyde. Both partners are propanal, so the product must have six carbons and carry the donor's methyl on the alpha carbon."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q2b_aldol_equilibrium_ketones",
    "topic": "Carbonyl Condensations: The Aldol Reaction",
    "difficulty_level": "Medium",
    "question_text": "The aldol equilibrium favours the product for unbranched aldehydes such as propanal but favours the reactants for most ketones and for disubstituted aldehydes such as 2-methylpropanal. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "Steric congestion: the product places the new C-C bond next to a carbon that already carries extra substituents, and the crowding raises the product's energy relative to two separate molecules",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ketones and branched aldehydes have no alpha hydrogens and cannot form enolates",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ketone carbonyls are not electrophilic enough to be attacked by any enolate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The aldol products of ketones dehydrate so fast that no addition product can ever be observed",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The aldol addition is reversible, and its position depends on how much the product is destabilised relative to the two starting molecules. Forming the new C-C bond brings two carbon skeletons together at a carbon that becomes tetrasubstituted (for a ketone acceptor) or that carries an extra alkyl branch (for an alpha-branched aldehyde donor). The crowding costs energy that a bond between two unbranched primary carbons does not, so the equilibrium shifts back toward the reactants. Ketones do form enolates and do accept nucleophiles; they simply give a congested product, which is why their aldol reactions are usually driven by the follow-up dehydration.",
      "approach": "Step 1: Write the equilibrium: two carbonyl molecules are in balance with one beta-hydroxy carbonyl compound.\nStep 2: For RCH2CHO the new bond joins a CH2 (donor alpha) to a CH (acceptor carbonyl carbon becoming CHOH): little crowding, product favoured.\nStep 3: For R2CHCHO the donor alpha carbon carries two R groups; for a ketone the acceptor carbon becomes a fully substituted carbinol. Either way the product is crowded and higher in energy.\nStep 4: The equilibrium therefore favours the reactants for ketones and branched aldehydes; removing water in a subsequent dehydration is how those aldols are pushed to completion (23.3).",
      "note": "McMurry 23.1 (Carbonyl Condensations: The Aldol Reaction) states that the equilibrium generally favours the condensation product for aldehydes with no alpha substituent but the reactant for disubstituted aldehydes and most ketones, and attributes the trend to steric factors, since increased substitution near the reaction site increases steric congestion in the aldol product. McMurry 23.3 completes the thought: cyclohexanone's unfavourable aldol equilibrium is overcome by dehydration, giving cyclohexylidenecyclohexanone in 92% yield.",
      "options": {
        "A": "Correct. The more substituted the carbons that the new bond joins, the more crowded the product and the less favourable the equilibrium.",
        "B": "Ketones and 2-methylpropanal both have alpha hydrogens (acetone has six, 2-methylpropanal has one) and form enolates readily. Enolate formation is not what limits them.",
        "C": "Ketone carbonyls are attacked by enolates; the Michael acceptors and mixed aldols of this chapter depend on it. They are less electrophilic than aldehydes, which slows the addition, but the position of the equilibrium is set by product stability, not by rate.",
        "D": "Dehydration of a ketone aldol needs heat and is a separate step. The observation is that under mild conditions little addition product forms, because the equilibrium lies toward the ketone, not that the product forms and vanishes."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q3_retro_aldol_first_step",
    "topic": "Carbonyl Condensations: The Aldol Reaction",
    "difficulty_level": "Hard",
    "question_text": "4-Hydroxy-4-methylpentan-2-one is treated with aqueous NaOH and slowly reverts to two molecules of acetone. What is the first step of this retro-aldol reaction?",
    "options": [
      {
        "option_id": "A",
        "text": "Hydroxide removes the O-H proton to give an alkoxide, which then fragments: the C3-C4 bond breaks to release acetone and the enolate of acetone",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Hydroxide removes an alpha proton from C3, and the enolate expels hydroxide to give an enone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Hydroxide adds to the ketone carbonyl to form a tetrahedral intermediate, which expels the C4 carbon as a carbanion",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The carbonyl oxygen is protonated by water, and the protonated ketone loses the C3-C4 bond in an E1-like fragmentation",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Every step of the aldol addition is reversible, so the reaction can be run backwards: a beta-hydroxy carbonyl compound in base can fall apart into the two carbonyl compounds it came from. The reverse path simply retraces the forward one. In the forward direction the last step was protonation of an alkoxide, so the first step backwards is removal of that proton: base deprotonates the beta OH. The alkoxide then does the reverse of the addition step: its C-C bond to the alpha carbon breaks, the oxygen becomes a C=O, and the alpha carbon leaves as an enolate, which is protonated to the second carbonyl compound.",
      "approach": "Step 1: Hydroxide removes the proton from the tertiary OH on C4 of 4-hydroxy-4-methylpentan-2-one, giving the alkoxide.\nStep 2: The alkoxide's electrons form a C=O at C4 as the C3-C4 bond breaks; the electrons of that bond go to C3.\nStep 3: The fragments are acetone (from C4 and its two methyls) and the enolate of acetone (C1-C2-C3).\nStep 4: Water protonates the enolate on carbon to give the second acetone and regenerate hydroxide.",
      "note": "McMurry 23.1 (Carbonyl Condensations: The Aldol Reaction) poses this as Problem 23-2, asking for the curved-arrow mechanism of the base-catalysed reverse aldol of 4-hydroxy-4-methyl-2-pentanone to two acetones; the substrate is the aldol addition product of acetone, diacetone alcohol, whose equilibrium lies toward acetone for the steric reason given in the same section. Option B describes the competing forward path, dehydration to mesityl oxide, which is what heating gives (23.3); the retro-aldol is what happens when the crowded addition product is left in cold base.",
      "options": {
        "A": "Correct. Deprotonation of the OH, then fragmentation of the alkoxide to a ketone and an enolate, reverses the two forward steps in order.",
        "B": "Removing the alpha proton and expelling hydroxide is the E1cB dehydration to 4-methylpent-3-en-2-one, the forward condensation path taken on heating. The retro-aldol breaks a C-C bond, not a C-O bond, and starts at the OH.",
        "C": "Hydroxide addition to the ketone would give a hydrate-type intermediate, and expelling a simple carbanion (with no stabilisation) is impossible. The C-C bond that breaks does so from the alkoxide, releasing an enolate, which is a stabilised carbanion.",
        "D": "Under basic conditions the carbonyl is not protonated. The base-catalysed reverse aldol is anionic throughout: alkoxide formation, then fragmentation to an enolate. An acid-catalysed retro-aldol exists but is not what NaOH does."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q4_which_is_aldol_product",
    "topic": "Using Aldol Reactions in Synthesis",
    "difficulty_level": "Medium",
    "question_text": "Which of these compounds could be made by an aldol condensation, and from which carbonyl compound?",
    "options": [
      {
        "option_id": "A",
        "text": "5-Ethyl-4-methylhept-4-en-3-one, from pentan-3-one",
        "smiles": "CCC(=O)C(C)=C(CC)CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Hydroxy-2-methylpentanal, from propanal",
        "smiles": "CCCC(C)(O)C=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-Hydroxybutanal, from acetaldehyde",
        "smiles": "OCCCC=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Pent-4-en-2-one, from acetone",
        "smiles": "CC(=O)CC=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Working backwards from a target, an aldol product has one of two signatures: a beta-hydroxy carbonyl compound (oxygens 1,3 to each other) or an alpha,beta-unsaturated carbonyl compound (the C=C conjugated with the C=O). To find the precursor, break the molecule at the alpha-beta bond of the former donor: the carbonyl-bearing half plus a hydrogen on its alpha carbon is the donor, and the other half, with the beta carbon turned back into a C=O, is the acceptor. For a symmetrical aldol both halves are the same compound. Compounds whose OH or C=C sits anywhere else did not come from an aldol.",
      "approach": "Step 1: 5-Ethyl-4-methylhept-4-en-3-one: CH3CH2C(=O)-C(CH3)=C(CH2CH3)CH2CH3. The C=C is conjugated with the C=O: an enone. Cut the C4=C5 bond: the donor half is CH3CH2C(=O)CH(CH3)-, that is pentan-3-one with its alpha CH2; the acceptor half, C5 with two ethyls turned back into a C=O, is also pentan-3-one. A symmetrical aldol condensation of pentan-3-one.\nStep 2: 2-Hydroxy-2-methylpentanal has its OH on the alpha carbon (1,2 oxygens), not the beta carbon; no aldol gives that pattern.\nStep 3: 4-Hydroxybutanal has its OH on the gamma carbon (1,4 oxygens); not an aldol product.\nStep 4: Pent-4-en-2-one's C=C is beta,gamma, not conjugated with the C=O; an aldol dehydration gives the conjugated isomer. Only A is an aldol product.",
      "note": "McMurry 23.4 (Using Aldol Reactions in Synthesis) sets this as Problem 23-5 with exactly these two names, 2-hydroxy-2-methylpentanal and 5-ethyl-4-methyl-4-hepten-3-one, and gives the rule: whenever a target contains a beta-hydroxy aldehyde/ketone or a conjugated enone, it might come from an aldol. The section's own example runs the logic further, from 2-ethylhexan-1-ol back through 2-ethylhexanal and 2-ethylhex-2-enal to butanal.",
      "options": {
        "A": "Correct. A conjugated enone whose two halves are both pentan-3-one: the symmetrical aldol condensation product of that ketone.",
        "B": "An alpha-hydroxy aldehyde has its oxygens 1,2 to each other. The aldol bond joins the donor's alpha carbon to the acceptor's carbonyl carbon, so the OH always lands on the beta carbon, never the alpha.",
        "C": "A gamma-hydroxy aldehyde (1,4 oxygens) cannot arise from an aldol: the acceptor carbonyl carbon bonds directly to the donor's alpha carbon, which puts the OH two carbons from the carbonyl, not three.",
        "D": "A beta,gamma-unsaturated ketone is not conjugated. Aldol dehydration goes through the enolate and forms the alpha,beta double bond, so the enone product of an aldol always has its C=C next to the carbonyl (pent-3-en-2-one would be the aldol enone from acetaldehyde and acetone)."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q5_condensation_vs_alkylation_conditions",
    "topic": "Carbonyl Condensations versus Alpha Substitutions",
    "difficulty_level": "Medium",
    "question_text": "Both alpha alkylation and aldol condensation go through enolate ions. Which set of conditions is chosen to make propanal undergo an aldol reaction rather than an alpha substitution?",
    "options": [
      {
        "option_id": "A",
        "text": "About 0.05 equivalent of sodium methoxide in methanol, warmed: a little enolate forms in the presence of much unreacted aldehyde, and the base is regenerated after each condensation",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "One full equivalent of LDA in THF at -78 °C, followed at once by the electrophile",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Concentrated H2SO4 at reflux, which protonates every carbonyl and forces enol formation",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Sodium borohydride in methanol, which generates the enolate by hydride transfer",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Alpha substitution and carbonyl condensation compete because both need an enolate, and the conditions decide which wins. For an alkylation the carbonyl compound is converted completely into its enolate with a full equivalent of strong base at low temperature, so that no un-deprotonated carbonyl remains to be attacked, and the alkyl halide is then added quickly. For a condensation the opposite is wanted: a catalytic amount of a relatively weak base generates a small standing concentration of enolate in the presence of plenty of unreacted carbonyl compound, which is the electrophile the enolate adds to. Once a condensation has occurred the base is regenerated, so a catalytic amount suffices.",
      "approach": "Step 1: Decide what the enolate should attack: for an aldol, the carbonyl carbon of another propanal molecule.\nStep 2: That requires unreacted propanal to be present, so only a little enolate should exist at any time: a catalytic amount of a weak base.\nStep 3: Sodium methoxide (conjugate acid pKa 16) in methanol at 0.05 equivalent deprotonates a small fraction of propanal (pKa about 17); the enolate adds to propanal; the alkoxide product is protonated by methanol, returning methoxide.\nStep 4: Warming completes the addition (and, if continued, the dehydration). LDA at -78 °C would instead convert all the propanal into enolate, leaving nothing for it to add to.",
      "note": "McMurry 23.2 (Carbonyl Condensations versus Alpha Substitutions) gives both recipes side by side: 1 equivalent of LDA in THF at -78 °C with rapid addition of the alkyl halide for an alkylation, so that no unreacted ketone remains and no condensation can occur; and 0.05 equivalent of sodium methoxide in methanol, warmed, for an aldol of propanal. The regeneration of the catalytic base after each condensation is the same point made about acid-catalysed halogenation in 22.3.",
      "options": {
        "A": "Correct. Catalytic weak base gives a little enolate alongside much unreacted aldehyde, exactly the situation a condensation needs.",
        "B": "One equivalent of LDA at -78 °C is the alpha-substitution recipe: propanal would be converted completely into its enolate with no aldehyde left to accept it, and the electrophile added next would alkylate. These conditions are chosen precisely to prevent condensation.",
        "C": "Aldol reactions can be acid-catalysed through enols, but concentrated sulfuric acid at reflux is not a controlled condition for an aldehyde; it would give resins and side reactions. The chapter's aldol conditions are catalytic base in a protic solvent.",
        "D": "Sodium borohydride is a reducing agent, not a base; it would reduce propanal to propan-1-ol. Hydride transfer does not generate enolates."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q6_e1cb_dehydration",
    "topic": "Dehydration of Aldol Products",
    "difficulty_level": "Medium",
    "question_text": "Most alcohols cannot be dehydrated by base, yet 3-hydroxybutanal loses water readily when warmed with NaOH. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "The alpha hydrogen next to the carbonyl is acidic; base removes it to give an enolate, and the enolate expels the adjacent hydroxide in an E1cB elimination to form the conjugated enal",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The carbonyl group makes hydroxide a good leaving group, so hydroxide leaves directly in an SN1-like ionisation",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Base protonates the OH group, converting it into water, which then leaves",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The hydroxyl oxygen attacks the carbonyl carbon to form a cyclic hemiacetal, which loses water",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hydroxide is a poor leaving group, which is why ordinary alcohols are dehydrated only in acid, where the OH is first protonated. An aldol product gets round the problem from the other side: the carbon next to the carbinol carbon is an alpha carbon and its hydrogen is acidic. Base removes that proton to give an enolate, and the enolate's electrons, pushed into the C-C bond, expel the hydroxide from the beta carbon. Because the anion is formed first and the leaving group departs second, the mechanism is E1cB (elimination, unimolecular, conjugate base). The driving force is the conjugated enone that results.",
      "approach": "Step 1: Hydroxide removes the C2 proton of 3-hydroxybutanal (alpha to the CHO, pKa about 17): the enolate.\nStep 2: The enolate's electron pair forms a C2=C3 pi bond as the C3-OH bond breaks; hydroxide leaves.\nStep 3: The product is but-2-enal, whose C=C is conjugated with the C=O; the E isomer predominates.\nStep 4: Under acid the same overall change happens by a different route: enol formation, protonation of the OH, and loss of water by E1 or E2.",
      "note": "McMurry 23.3 (Dehydration of Aldol Products: Synthesis of Enones) explains that most alcohols are resistant to base dehydration because hydroxide is a poor leaving group (17.6), but aldol products dehydrate easily because of their carbonyl group: under basic conditions an acidic alpha hydrogen is removed to give an enolate that expels the nearby OH in an E1cB reaction (11.10), while under acid an enol forms, the OH is protonated and water leaves by E1 or E2. The same E1cB step degrades poly(hydroxybutyrate) in landfills (21.9).",
      "options": {
        "A": "Correct. Enolate formation first, then expulsion of hydroxide: the E1cB mechanism that only a beta-hydroxy carbonyl compound can use.",
        "B": "A carbonyl group does not turn hydroxide into a good leaving group, and no carbocation forms under basic conditions. The elimination is driven from the carbon side, by the enolate, not by ionisation of the C-O bond.",
        "C": "A base does not protonate anything; it removes protons. Protonation of the OH to make water the leaving group is the acid-catalysed path, not what NaOH does.",
        "D": "A cyclic hemiacetal from 3-hydroxybutanal would need a four-membered ring, which does not form, and hemiacetal formation is reversible and leads nowhere toward an alkene. Dehydration proceeds through the enolate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q7_cyclohexanone_condensation_scheme",
    "topic": "Dehydration of Aldol Products",
    "difficulty_level": "Medium",
    "question_text": "Cyclohexanone is heated with aqueous NaOH. What is the major organic product?",
    "reaction_scheme": {
      "reactants": [
        "O=C1CCCCC1"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-membered ring with a C=O on one carbon: cyclohexanone."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-Cyclohexylidenecyclohexanone",
        "smiles": "O=C1CCCCC1=C1CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-(1-Hydroxycyclohexyl)cyclohexanone",
        "smiles": "O=C1CCCCC1C1(O)CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Cyclohexylcyclohexanone",
        "smiles": "O=C1CCCCC1C1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclohex-2-en-1-one",
        "smiles": "O=C1C=CCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Ketone aldol additions are unfavourable at equilibrium, because the product is crowded, but heating changes the outcome: the small amount of beta-hydroxy ketone that does form is dehydrated, and the enone that results is not in equilibrium with the ketone under these conditions. Water leaves the system, the addition step is pulled forward, and the condensation goes to completion. For cyclohexanone the enolate of one ring attacks the carbonyl of another; dehydration then puts a double bond between the two rings, exocyclic to the second ring and conjugated with the carbonyl of the first.",
      "approach": "Step 1: Hydroxide forms a little of the enolate of cyclohexanone (at C2).\nStep 2: The enolate adds to the carbonyl carbon of a second cyclohexanone: after protonation, 2-(1-hydroxycyclohexyl)cyclohexanone, a crowded tertiary alcohol whose equilibrium concentration is low.\nStep 3: On heating, the alpha proton (C2-H of the ketone ring) is removed and hydroxide is expelled from the carbinol carbon (E1cB).\nStep 4: Product: 2-cyclohexylidenecyclohexanone, the C=C linking the two rings and conjugated with the C=O; the text reports a 92% yield.",
      "note": "McMurry 23.3 (Dehydration of Aldol Products: Synthesis of Enones) uses this example to make its main point: removal of water drives the aldol equilibrium toward the product, so even though the initial aldol step is unfavourable, as it usually is for ketones, cyclohexanone gives cyclohexylidenecyclohexanone in 92% yield. The aldol addition product in option B is real but present only in small equilibrium amount, and it is what the reaction stops at only at low temperature.",
      "options": {
        "A": "Correct. Aldol addition of one cyclohexanone to another, then dehydration on heating, gives the conjugated enone with an exocyclic C=C between the rings.",
        "B": "2-(1-Hydroxycyclohexyl)cyclohexanone is the aldol addition product, but the equilibrium for a ketone lies toward the reactant and it is present only in small amount. On heating it dehydrates, and the enone accumulates instead.",
        "C": "2-Cyclohexylcyclohexanone would need the enone to be reduced by H2 after the condensation. Base and heat do not reduce; the C=C formed by dehydration remains in the product.",
        "D": "Cyclohex-2-en-1-one would require dehydrogenation of cyclohexanone itself, which base cannot do. There is no OH to lose within one cyclohexanone; the water lost in this reaction comes from the aldol adduct of two molecules."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q8_acetone_condensation_scheme",
    "topic": "Dehydration of Aldol Products",
    "difficulty_level": "Easy",
    "question_text": "Acetone is heated with a catalytic amount of base and the water formed is distilled off. What is the major organic product?",
    "reaction_scheme": {
      "reactants": [
        "CC(C)=O"
      ],
      "reagents": "NaOH (cat.)",
      "conditions": "heat, remove H2O",
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
        "text": "4-Methylpent-3-en-2-one (mesityl oxide)",
        "smiles": "CC(C)=CC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-Hydroxy-4-methylpentan-2-one (diacetone alcohol)",
        "smiles": "CC(C)(O)CC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-Methylpent-4-en-2-one",
        "smiles": "CC(=C)CC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(E)-Pent-3-en-2-one",
        "smiles": "C/C=C/C(C)=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The aldol condensation of a ketone joins the alpha carbon of one molecule to the carbonyl carbon of another and then loses water, so the product is an enone with the two former carbonyl carbons as the ends of the C=C-C=O unit. For acetone the donor alpha carbon is a methyl and the acceptor carbonyl carbon carries two methyls, so the dehydrated product has a C=C between the former CH2 (now CH) and a carbon bearing two methyls: a conjugated, trisubstituted enone. Removing water as it forms pulls the unfavourable ketone aldol equilibrium to completion.",
      "approach": "Step 1: Base forms a little acetone enolate, CH2=C(O-)CH3.\nStep 2: The enolate adds to the carbonyl of a second acetone: 4-hydroxy-4-methylpentan-2-one after protonation, present in small equilibrium amount.\nStep 3: Heating dehydrates it by E1cB: the C3 proton is removed and hydroxide leaves from C4.\nStep 4: Product: (CH3)2C=CH-C(=O)CH3, 4-methylpent-3-en-2-one (mesityl oxide), six carbons from two acetones, water distilled off.",
      "note": "McMurry 23.3 (Dehydration of Aldol Products: Synthesis of Enones) asks for enones from aldol condensations in Problem 23-3 and states the rule: water is eliminated by removing two hydrogens from the alpha position of one partner and the carbonyl oxygen from the other, so the product is an alpha,beta-unsaturated aldehyde or ketone. Diacetone alcohol, option B, is the aldol addition product whose retro-aldol is Problem 23-2 of 23.1; mesityl oxide is also the Michael acceptor relative of 3-buten-2-one.",
      "options": {
        "A": "Correct. Two acetones condense with loss of water to the conjugated, trisubstituted enone.",
        "B": "Diacetone alcohol is the aldol addition product, obtainable at low temperature but present only in small amount at equilibrium for a ketone. Heating with removal of water dehydrates it to the enone.",
        "C": "4-Methylpent-4-en-2-one has its C=C between C4 and C5, not conjugated with the carbonyl. E1cB dehydration removes the alpha proton (C3) and forms the C3=C4 bond, so the conjugated isomer is what forms, and it is the more stable one.",
        "D": "Pent-3-en-2-one has only five carbons; it is the enone from a mixed aldol of acetone (donor) with acetaldehyde (acceptor). Two acetones give six carbons and a second methyl on C4."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q9_dehydration_drives_equilibrium",
    "topic": "Dehydration of Aldol Products",
    "difficulty_level": "Medium",
    "question_text": "The aldol addition of cyclohexanone lies far toward the starting ketone, yet cyclohexanone gives its aldol condensation product in 92% yield. How is that possible?",
    "options": [
      {
        "option_id": "A",
        "text": "The small amount of beta-hydroxy ketone that forms is dehydrated to the conjugated enone, and that step is not reversed under the conditions; removing the product (and the water) from the equilibrium pulls the addition forward until the ketone is consumed",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "At higher temperature the aldol addition itself becomes thermodynamically favourable",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclohexanone is fully converted into its enolate by the base, so there is no reverse reaction",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The enone product is in equilibrium with the ketone, but it is far less soluble and precipitates, which is what the 92% represents",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A reaction with an unfavourable equilibrium can still go to completion if its product is continuously removed by a subsequent step. The aldol addition of a ketone is such a case: the beta-hydroxy ketone is present in only a small equilibrium concentration, but on heating it dehydrates to a conjugated enone. That enone does not add water back under the reaction conditions, and if the water is distilled off the dehydration is driven further still. Each molecule of adduct that dehydrates is replaced by the addition equilibrium, so the ketone is eventually all converted. The conjugation of the enone is what makes the dehydration a thermodynamic sink.",
      "approach": "Step 1: Write the two-stage process: ketone + ketone in equilibrium with beta-hydroxy ketone (unfavourable, small K); beta-hydroxy ketone to enone + water (favourable on heating).\nStep 2: Le Chatelier: removing the beta-hydroxy ketone by dehydration shifts the first equilibrium toward more adduct.\nStep 3: Removing water (distillation, or a Dean-Stark trap) prevents the enone from rehydrating and keeps the second step one-way.\nStep 4: The system drains through the enone; cyclohexylidenecyclohexanone accumulates to 92%.",
      "note": "McMurry 23.3 (Dehydration of Aldol Products: Synthesis of Enones) states that the real value of aldol dehydration is that removal of water from the reaction mixture can be used to drive the aldol equilibrium toward the product, and that even though the initial aldol step may be unfavourable, as it usually is for ketones, the subsequent dehydration allows many aldol condensations to be carried out in good yield, giving cyclohexylidenecyclohexanone from cyclohexanone in 92% yield. The same logic drives the Claisen condensation, where the product is removed as its enolate (23.7).",
      "options": {
        "A": "Correct. Dehydration removes the adduct from an unfavourable equilibrium, and the conjugated enone is the stable end point; the addition step is pulled along until the ketone is used up.",
        "B": "Heating does not make the crowded addition product favourable; if anything the equilibrium constant of an addition falls with temperature. Heat matters because it enables the dehydration, which then drains the equilibrium.",
        "C": "Aldol conditions use catalytic weak base, so only a small fraction of the ketone is enolate at any moment, and the addition is fully reversible (the retro-aldol of 23.1). Complete conversion to enolate is the alkylation recipe and would prevent condensation.",
        "D": "The enone is not in equilibrium with the ketone under the conditions, and the yield is a matter of chemistry, not solubility: the dehydration is effectively one-way, and each adduct that dehydrates is replenished by the addition equilibrium."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q10_roadmap_ethylhexanol",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following industrial pathway from butanal to a plasticiser alcohol. Determine the correct compounds matching labels B, C and D.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCC=O",
          "label": "Compound A",
          "alt": "A three-carbon chain attached to a CH=O group: butanal, drawn as compound A.",
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
          "reagents": "NaOH (cat.), heat, -H2O"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H2 (1 equiv), Pd/C"
        },
        {
          "from": "C",
          "to": "D",
          "reagents": "1. NaBH4, CH3OH; 2. H2O"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "B: 2-ethylhex-2-enal, C: 2-ethylhexanal, D: 2-ethylhexan-1-ol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "B: 3-hydroxy-2-ethylhexanal, C: 2-ethylhexanal, D: 2-ethylhexan-1-ol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "B: 2-ethylhex-2-enal, C: 2-ethylhexan-1-ol, D: 2-ethylhexane",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "B: oct-2-enal, C: octanal, D: octan-1-ol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A target that looks nothing like an aldol product can still come from one, if the aldol's characteristic groups have been transformed afterward. 2-Ethylhexan-1-ol is such a target: its branching at C2 is the fingerprint of an aldol of butanal, in which the alpha CH2 of one butanal bonded to the carbonyl carbon of another and left an ethyl branch behind. Condensation gives the enal; selective hydrogenation of the C=C gives the saturated aldehyde; reduction of the C=O gives the primary alcohol. Each step changes one functional group and none changes the skeleton.",
      "approach": "Step 1: A + catalytic base, heat: aldol condensation of butanal. The alpha CH2 of one molecule bonds to the carbonyl carbon of another and water is lost. B is 2-ethylhex-2-enal, CH3CH2CH2CH=C(CH2CH3)CHO.\nStep 2: B + one equivalent of H2 over Pd/C: the C=C is hydrogenated, the C=O is not. C is 2-ethylhexanal.\nStep 3: C + NaBH4: the aldehyde is reduced to the primary alcohol. D is 2-ethylhexan-1-ol, CH3(CH2)3CH(CH2CH3)CH2OH.\nStep 4: Check the skeleton: eight carbons, an ethyl on C2, exactly two butanals joined at the alpha carbon of one and the carbonyl carbon of the other.",
      "note": "McMurry 23.4 (Using Aldol Reactions in Synthesis) presents this exact industrial preparation of 2-ethyl-1-hexanol, used for plasticisers, working backward from the alcohol to 2-ethylhexanal by reduction, to 2-ethyl-2-hexenal by catalytic reduction, to butanal by aldol condensation, and gives it as the model for recognising aldol products after further transformations. Industrially both reductions are done with hydrogen over a metal catalyst; the roadmap separates them so the two functional groups are reduced one at a time.",
      "options": {
        "A": "Correct. Aldol condensation to the enal, selective hydrogenation of the C=C, then reduction of the aldehyde to the primary alcohol.",
        "B": "3-Hydroxy-2-ethylhexanal is the aldol addition product, before dehydration. The first edge specifies heat and loss of water, so B is the enal; the addition product is an intermediate that does not survive those conditions.",
        "C": "Hydrogen over palladium with one equivalent reduces the C=C of the enal and leaves the aldehyde, so C is still an aldehyde; and NaBH4 reduces a carbonyl to an alcohol, never an alcohol to an alkane. The sequence ends at the alcohol, not the hydrocarbon.",
        "D": "Oct-2-enal would be the aldol product of an unbranched pair joined end to end, which no aldol does: the donor's alpha carbon becomes a branch point. Two butanals give the 2-ethyl branch that names the product."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q11_butanol_from_acetaldehyde",
    "topic": "Using Aldol Reactions in Synthesis",
    "difficulty_level": "Medium",
    "question_text": "Butan-1-ol was for many years made commercially from acetaldehyde. Which sequence does that?",
    "options": [
      {
        "option_id": "A",
        "text": "Aldol condensation of acetaldehyde (base, heat) to but-2-enal, then H2 over a metal catalyst to reduce both the C=C and the C=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Alkylation of the acetaldehyde enolate with bromoethane using LDA, then NaBH4",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Reaction of acetaldehyde with ethylmagnesium bromide, then aqueous acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Wittig reaction of acetaldehyde with Ph3P=CHCH3, then hydroboration and oxidation",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The aldol condensation doubles a carbon skeleton and leaves an enal or enone whose C=C and C=O can both be reduced. That makes it a route from a two-carbon aldehyde to a four-carbon primary alcohol without any organometallic reagent: two acetaldehydes give but-2-enal, and hydrogenation over a metal catalyst saturates the C=C and reduces the aldehyde to CH2OH. Working backward, butan-1-ol is the fully reduced form of crotonaldehyde, and crotonaldehyde is the aldol condensation product of acetaldehyde.",
      "approach": "Step 1: Aldol: acetaldehyde + catalytic base gives 3-hydroxybutanal; heating dehydrates it to but-2-enal (crotonaldehyde).\nStep 2: Hydrogenation: H2 over Ni or Pd at moderate pressure reduces the C=C to give butanal and the C=O to give butan-1-ol.\nStep 3: Check: four carbons, unbranched, OH on C1, all from two acetaldehydes and hydrogen.\nStep 4: The alternatives each make a different compound: LDA alkylation gives butanal only after a difficult aldehyde alkylation and then butan-1-ol but with wasteful reagents; EtMgBr gives butan-2-ol; the Wittig then hydroboration gives butan-2-ol or requires an anti-Markovnikov step on an internal alkene that gives a mixture.",
      "note": "McMurry 23.4 (Using Aldol Reactions in Synthesis) sets this as Problem 23-6 right after the 2-ethylhexanol example, and its logic is the same: a saturated product can hide an aldol condensation followed by reduction. Aldehyde enolate alkylation with LDA (option B) is exactly the reaction 22.7 warns gives poor yields because aldehydes condense instead, and a Grignard on acetaldehyde (option C) makes a secondary alcohol, since the carbonyl carbon becomes the carbinol.",
      "options": {
        "A": "Correct. Aldol condensation doubles the two-carbon aldehyde to crotonaldehyde; hydrogenation reduces both unsaturations to butan-1-ol.",
        "B": "Direct alkylation of an aldehyde enolate is the reaction that fails in practice: the enolate condenses with unreacted aldehyde faster than it attacks the halide (22.7). It is also the expensive way; industry uses the condensation that the enolate wants to do anyway.",
        "C": "Ethylmagnesium bromide adds to the carbonyl carbon of acetaldehyde, which becomes the carbinol carbon: the product is butan-2-ol, a secondary alcohol, not butan-1-ol.",
        "D": "The Wittig reaction gives but-2-ene, an internal alkene; hydroboration-oxidation of it gives butan-2-ol, since both alkene carbons are equivalent. Neither step leads to a primary alcohol."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q12_mixed_aldol_benzaldehyde_acetone_scheme",
    "topic": "Mixed Aldol Reactions",
    "difficulty_level": "Medium",
    "question_text": "Equimolar benzaldehyde and acetone are stirred with dilute NaOH in aqueous ethanol at room temperature. What is the major organic product?",
    "reaction_scheme": {
      "reactants": [
        "O=Cc1ccccc1",
        "CC(C)=O"
      ],
      "reagents": "NaOH (dilute), EtOH/H2O",
      "conditions": "25 °C, 1:1",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring bearing a CH=O group: benzaldehyde.",
        "A carbonyl carbon bearing two methyl groups: acetone."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "(E)-4-Phenylbut-3-en-2-one (benzalacetone)",
        "smiles": "CC(=O)/C=C/c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(1E,4E)-1,5-Diphenylpenta-1,4-dien-3-one (dibenzalacetone)",
        "smiles": "O=C(/C=C/c1ccccc1)/C=C/c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-Hydroxy-4-phenylbutan-2-one",
        "smiles": "CC(=O)CC(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-Methylpent-3-en-2-one (mesityl oxide)",
        "smiles": "CC(C)=CC(C)=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A mixed aldol between two different partners is clean when only one of them can be the donor and the other is a good acceptor. Benzaldehyde has no alpha hydrogen, so it cannot form an enolate, but its carbonyl is unhindered and electrophilic, more so than a ketone's. Acetone can form an enolate. So the only productive pairing is acetone's enolate adding to benzaldehyde, and because the resulting beta-hydroxy ketone dehydrates to a C=C conjugated with both the carbonyl and the benzene ring, the condensation product forms even at room temperature. With one equivalent of each, one side of acetone is condensed.",
      "approach": "Step 1: Hydroxide forms a little acetone enolate; benzaldehyde cannot be deprotonated.\nStep 2: The enolate adds to benzaldehyde's carbonyl, the better acceptor, to give 4-hydroxy-4-phenylbutan-2-one.\nStep 3: The beta-hydroxy ketone dehydrates readily (E1cB), because the new C=C is conjugated with the ring as well as the C=O: (E)-PhCH=CHC(=O)CH3.\nStep 4: With equimolar reagents the product is benzalacetone; a second equivalent of benzaldehyde would condense the remaining methyl to give dibenzalacetone.",
      "note": "McMurry 23.5 (Mixed Aldol Reactions) gives the two conditions for a clean mixed aldol and names benzaldehyde and formaldehyde as partners that cannot form enolates yet have unhindered carbonyls, with 2-methylcyclohexanone + benzaldehyde as the example. The benzaldehyde-plus-ketone condensation is the Claisen-Schmidt reaction of the older literature, and the dibenzalacetone preparation is a standard teaching-laboratory experiment because the doubly conjugated product crystallises out.",
      "options": {
        "A": "Correct. Acetone is the only possible donor and benzaldehyde the better acceptor; the aldol dehydrates to the conjugated enone with one phenyl.",
        "B": "Dibenzalacetone needs two benzaldehydes per acetone, condensing both methyl groups. With equimolar reagents the mono-condensation product predominates; excess benzaldehyde gives the dienone.",
        "C": "4-Hydroxy-4-phenylbutan-2-one is the aldol addition product, but it dehydrates under the reaction conditions without heating because the C=C it forms is conjugated with the benzene ring as well as the carbonyl. It is not isolated.",
        "D": "Mesityl oxide is acetone's self-condensation product. Acetone can do that, but benzaldehyde's unhindered aldehyde carbonyl is the far better electrophile and captures the enolate first; the self-aldol of a ketone is also thermodynamically unfavourable."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q13_clean_mixed_aldol_pair",
    "topic": "Mixed Aldol Reactions",
    "difficulty_level": "Medium",
    "question_text": "Which pair of carbonyl compounds gives a single mixed aldol product cleanly with dilute base?",
    "options": [
      {
        "option_id": "A",
        "text": "Benzaldehyde and acetone",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetaldehyde and propanal",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Butanal and pentanal",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acetone and pentan-3-one",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A mixed aldol between two similar partners gives four products, because either compound can be the donor and either the acceptor. The reaction is useful only when the roles are fixed. That happens when one partner has no alpha hydrogens and so cannot donate, but has an unhindered carbonyl and so accepts well (benzaldehyde, formaldehyde); or when one partner is much more acidic than the other and is converted into its enolate in preference (ethyl acetoacetate). Two aldehydes or two ketones of similar acidity and similar carbonyl reactivity meet neither condition.",
      "approach": "Step 1: For each pair, ask whether both partners can form enolates and whether both carbonyls can be attacked.\nStep 2: Acetaldehyde/propanal, butanal/pentanal, acetone/pentan-3-one: both partners have alpha hydrogens and comparable carbonyls, so two self-aldols and two crossed aldols form. Mixtures.\nStep 3: Benzaldehyde/acetone: benzaldehyde has no alpha hydrogen and cannot be a donor; its aldehyde carbonyl is a better acceptor than acetone's ketone carbonyl. Acetone is the donor.\nStep 4: The single product is benzalacetone (after dehydration), so pair A is the clean one.",
      "note": "McMurry 23.5 (Mixed Aldol Reactions) says that base treatment of a mixture of acetaldehyde and propanal gives a complex mixture of two symmetrical and two mixed products, clearly of no practical value, and then states the two conditions under which a mixed aldol leads cleanly to a single product. Problem 23-8 asks which compounds can probably be prepared by a mixed aldol. The same reasoning governs mixed Claisen condensations in 23.8, where ethyl benzoate and ethyl formate play benzaldehyde's role.",
      "options": {
        "A": "Correct. Benzaldehyde cannot donate and accepts well; acetone donates. One pairing, one product.",
        "B": "Acetaldehyde and propanal are both enolisable aldehydes of similar reactivity, the textbook's own example of a hopeless mixture: two self-aldols and two crossed aldols.",
        "C": "Butanal and pentanal differ only in chain length; both donate and both accept, giving four products just as acetaldehyde and propanal do.",
        "D": "Acetone and pentan-3-one are both enolisable ketones. Both can donate and both can accept, and ketone aldol equilibria are unfavourable besides; the result is a poor-yielding mixture."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q14_acetoacetate_cyclohexanone_scheme",
    "topic": "Mixed Aldol Reactions",
    "difficulty_level": "Hard",
    "question_text": "Ethyl acetoacetate and cyclohexanone are heated with a catalytic amount of sodium ethoxide in ethanol. What is the major product?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(=O)CC(C)=O",
        "O=C1CCCCC1"
      ],
      "reagents": "NaOEt (cat.), EtOH",
      "conditions": "heat",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "An ethyl group on an oxygen bonded to a C=O; that carbonyl carbon is attached to a CH2, which is attached to a second C=O bearing a methyl: ethyl acetoacetate.",
        "A six-membered ring with a C=O on one carbon: cyclohexanone."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Ethyl 2-cyclohexylidene-3-oxobutanoate",
        "smiles": "CCOC(=O)C(=C1CCCCC1)C(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Cyclohexylidenecyclohexanone",
        "smiles": "O=C1CCCCC1=C1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethyl 2-cyclohexyl-3-oxobutanoate",
        "smiles": "CCOC(=O)C(C1CCCCC1)C(C)=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl 2-(1-hydroxycyclohexyl)-3-oxobutanoate",
        "smiles": "CCOC(=O)C(C1(O)CCCCC1)C(C)=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The second way to make a mixed aldol clean is to use a donor far more acidic than the other partner. Ethyl acetoacetate (pKa 11) is converted into its enolate by ethoxide essentially completely, while cyclohexanone (pKa about 19) is barely touched, so the roles are fixed: the acetoacetate enolate is the donor and cyclohexanone the acceptor. The stabilised enolate adds to the ketone carbonyl, and the resulting tertiary beta-hydroxy compound dehydrates on heating to a C=C that is conjugated with both carbonyls of the dicarbonyl unit. The product is an alkylidene beta-keto ester.",
      "approach": "Step 1: Ethoxide deprotonates the CH2 between the two carbonyls of ethyl acetoacetate, the most acidic site by far; cyclohexanone's enolate is negligible by comparison.\nStep 2: The acetoacetate enolate adds to the cyclohexanone carbonyl: after protonation, ethyl 2-(1-hydroxycyclohexyl)-3-oxobutanoate.\nStep 3: On heating the adduct dehydrates: the remaining doubly activated proton is removed and hydroxide leaves from the ring carbon.\nStep 4: Product: ethyl 2-cyclohexylidene-3-oxobutanoate, the ring carbon doubly bonded to the former CH of the acetoacetate.",
      "note": "McMurry 23.5 (Mixed Aldol Reactions) states that ethyl acetoacetate is completely converted into its enolate ion in preference to monocarbonyl partners, so aldol condensations of monoketones with ethyl acetoacetate occur preferentially to give the mixed product. The reaction of an active-methylene compound with a ketone or aldehyde under mild base is the Knoevenagel condensation of the older literature; the text does not use the name. Compare 22.7, where the same acetoacetate enolate is alkylated by an alkyl halide instead of adding to a carbonyl.",
      "options": {
        "A": "Correct. The far more acidic acetoacetate is the donor, cyclohexanone the acceptor, and heat dehydrates the adduct to the alkylidene beta-keto ester.",
        "B": "2-Cyclohexylidenecyclohexanone is cyclohexanone's self-condensation product. With ethyl acetoacetate present, ethoxide makes the acetoacetate enolate almost exclusively, so cyclohexanone acts only as the acceptor and does not condense with itself.",
        "C": "Ethyl 2-cyclohexyl-3-oxobutanoate is what alkylation of the acetoacetate enolate with cyclohexyl bromide would give, a saturated C-C bond. A carbonyl acceptor gives an alcohol that dehydrates to a C=C, so the ring is attached through a double bond.",
        "D": "The beta-hydroxy compound is the aldol addition intermediate. Heating with base dehydrates it, and the resulting alkylidene compound, conjugated with two carbonyls, is the stable product."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q15_hexanedione_intramolecular_aldol_scheme",
    "topic": "Intramolecular Aldol Reactions",
    "difficulty_level": "Medium",
    "question_text": "Hexane-2,5-dione is heated with aqueous NaOH. What is the major product?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)CCC(C)=O"
      ],
      "reagents": "NaOH, H2O",
      "conditions": "heat",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-carbon chain with a C=O on the second carbon and another on the fifth, so the two acetyl groups are joined by a CH2CH2 unit: hexane-2,5-dione."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "3-Methylcyclopent-2-en-1-one",
        "smiles": "CC1=CC(=O)CC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-(2-Methylcycloprop-1-en-1-yl)ethanone",
        "smiles": "CC(=O)C1=C(C)C1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Methylcyclopent-2-en-1-one",
        "smiles": "CC1=CCCC1=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Hexane-2,5-diol",
        "smiles": "CC(O)CCC(C)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A dicarbonyl compound can do its aldol reaction within one molecule: an enolate at one carbonyl attacks the other carbonyl, and dehydration then gives a cyclic enone. Which enolate reacts decides the ring size. In a 1,4-diketone the enolate on a terminal methyl can reach the other carbonyl to close a five-membered ring, whereas the enolate on an internal CH2 could only close a three-membered ring. Because every step is reversible, the system equilibrates to the product it can afford: the unstrained cyclopentenone, never the cyclopropene.",
      "approach": "Step 1: Hydroxide forms an enolate at C1 (the methyl of one acetyl group) of hexane-2,5-dione.\nStep 2: That enolate carbon attacks the carbonyl carbon at C5, five atoms away, closing a five-membered ring: the beta-hydroxy ketone with a tertiary OH.\nStep 3: Dehydration (E1cB) forms the C=C conjugated with the remaining C=O.\nStep 4: Product: 3-methylcyclopent-2-en-1-one. The alternative enolate at C3 attacking C5 would give a cyclopropene, which is far too strained and is not formed.",
      "note": "McMurry 23.6 (Intramolecular Aldol Reactions) uses exactly this reaction: base treatment of the 1,4-diketone 2,5-hexanedione yields a cyclopentenone, and Figure 23.4 shows why 3-methyl-2-cyclopentenone rather than the (2-methylcyclopropenyl) ethanone is formed, the reversibility of every step letting the strain-free five-membered ring win. The same logic sends 1,5-diketones such as 2,6-heptanedione to cyclohexenones rather than acylcyclobutenes, and it is the second half of the Robinson annulation (23.12).",
      "options": {
        "A": "Correct. The terminal enolate closes a five-membered ring onto the other carbonyl; dehydration gives the conjugated cyclopentenone with the methyl on C3.",
        "B": "The cyclopropene would come from the internal enolate (C3) attacking C5. That ring is highly strained, and because the aldol steps are reversible the system escapes to the far more stable cyclopentenone; the text says only the cyclopentenone is formed.",
        "C": "2-Methylcyclopent-2-en-1-one has the methyl on the alpha carbon of the enone, which would require a different connectivity. Closing the ring through the terminal methyl carbon leaves the surviving acetyl methyl on the beta carbon of the new enone, C3.",
        "D": "Hexane-2,5-diol is the reduction product of both ketones. Hydroxide is not a reducing agent; it catalyses the enolate chemistry that closes the ring."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q16_pentanedione_no_intramolecular_aldol",
    "topic": "Intramolecular Aldol Reactions",
    "difficulty_level": "Hard",
    "question_text": "Pentane-2,4-dione, a 1,3-diketone, gives no intramolecular aldol product on treatment with base, although 1,4- and 1,5-diketones cyclise readily. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "Base removes the doubly activated C3 proton, giving a stabilised enolate that is a poor nucleophile toward its own carbonyls, and the only rings it could close from either enolate are three- or four-membered and too strained to form",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A 1,3-diketone has no alpha hydrogens, so no enolate can form",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The enolate attacks the other carbonyl to give a cyclobutenone, which is the actual product",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Pentane-2,4-dione exists entirely as its enol, and enols cannot undergo aldol reactions",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An intramolecular aldol needs an enolate carbon and a carbonyl carbon separated by enough atoms to close a ring of five or six members. In a 1,3-diketone the geometry is wrong for every combination: the enolate at the doubly activated central carbon is only one atom from each carbonyl, and attacking either would make a three-membered ring; the enolate at a terminal methyl is three atoms from the far carbonyl and would make a four-membered ring. Both are too strained to form under reversible conditions. On top of that, base takes the central proton first (pKa 9), and that delocalised, very stable enolate is a sluggish nucleophile, which is exactly why 1,3-dicarbonyls are good Michael donors toward other molecules but do not react with themselves.",
      "approach": "Step 1: Locate the alpha hydrogens: the central CH2 (pKa about 9, doubly activated) and the two terminal methyls (pKa about 20).\nStep 2: Base removes the central proton preferentially, giving an enolate delocalised over both oxygens; this anion is stabilised and only weakly nucleophilic.\nStep 3: Count ring sizes: central carbon to either carbonyl carbon closes a three-membered ring; terminal methyl carbon to the far carbonyl closes a four-membered ring.\nStep 4: Neither strained ring survives the reversible equilibrium, and the stable central enolate would rather do nothing (or add to a different molecule) than form one. No intramolecular aldol.",
      "note": "McMurry 23.6 (Intramolecular Aldol Reactions) poses this as Problem 23-9 after explaining that 1,4-diketones give cyclopentenones and 1,5-diketones cyclohexenones because every step is reversible and the strain-free ring is the equilibrium product. The pKa 9 of a 1,3-diketone is from Table 22.1, and its consequence, a stable enolate that serves as a Michael donor (23.10) or an alkylation substrate (22.7) rather than a self-condensing one, is the flip side of the same stabilisation.",
      "options": {
        "A": "Correct. Strain rules out every ring a 1,3-diketone could close, and the stabilised central enolate is in any case a poor nucleophile toward a carbonyl.",
        "B": "Pentane-2,4-dione has eight alpha hydrogens, two of them the most acidic C-H protons in ordinary organic compounds (pKa about 9). Enolate formation is easy; what fails is the intramolecular attack.",
        "C": "A cyclobutenone would be the product of the terminal enolate attacking the far carbonyl, a four-membered ring. It is too strained to survive the reversible conditions, just as the cyclopropene alternative from 2,5-hexanedione is never formed.",
        "D": "The diketone is about 76% enol at equilibrium, but enol content is not the obstacle: enols are nucleophiles too, and base converts the compound into its enolate regardless. The ring sizes available are the problem."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q17_which_diketone_gives_cyclohexenone",
    "topic": "Intramolecular Aldol Reactions",
    "difficulty_level": "Medium",
    "question_text": "Which diketone gives a cyclohexenone on treatment with base?",
    "options": [
      {
        "option_id": "A",
        "text": "Heptane-2,6-dione",
        "smiles": "CC(=O)CCCC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Hexane-2,5-dione",
        "smiles": "CC(=O)CCC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Pentane-2,4-dione",
        "smiles": "CC(=O)CC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Octane-2,7-dione",
        "smiles": "CC(=O)CCCCC(C)=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The ring formed in an intramolecular aldol contains the enolate carbon, the carbons between it and the acceptor carbonyl, and the acceptor carbonyl carbon itself. For a diketone with terminal methyl groups the productive enolate is on a methyl, and the ring size is then the number of carbons from that methyl to the far carbonyl carbon inclusive. A 1,4-diketone closes a five-membered ring, a 1,5-diketone a six-membered ring. Shorter separations give strained rings that do not form; longer ones give seven-membered and larger rings, which are entropically disfavoured and compete poorly with intermolecular reaction.",
      "approach": "Step 1: Number the carbonyl positions: heptane-2,6-dione is a 1,5-diketone (carbonyls separated by three CH2 groups).\nStep 2: Its C1 methyl enolate attacking C6 encloses C1, C2, C3, C4, C5, C6: a six-membered ring. Dehydration gives 3-methylcyclohex-2-en-1-one.\nStep 3: Hexane-2,5-dione (1,4) closes a five-membered ring; pentane-2,4-dione (1,3) can close only three- or four-membered rings and gives nothing.\nStep 4: Octane-2,7-dione (1,6) would need a seven-membered ring, which forms poorly; the text's intramolecular aldols are the five- and six-membered cases.",
      "note": "McMurry 23.6 (Intramolecular Aldol Reactions) states that base treatment of a 1,4-diketone such as 2,5-hexanedione yields a cyclopentenone and of a 1,5-diketone such as 2,6-heptanedione yields a cyclohexenone, with the more strained alternatives (a cyclopropene, an acylcyclobutene) not formed because all steps are reversible. The 1,5-diketone cyclisation is also the ring-closing step of the Robinson annulation (23.12), which is why that reaction always delivers a cyclohexenone.",
      "options": {
        "A": "Correct. A 1,5-diketone: the terminal enolate reaches the far carbonyl across a six-membered ring, and dehydration gives 3-methylcyclohex-2-enone.",
        "B": "Hexane-2,5-dione is a 1,4-diketone and closes a five-membered ring, giving 3-methylcyclopent-2-enone, one carbon smaller than a cyclohexenone.",
        "C": "Pentane-2,4-dione is a 1,3-diketone: the only rings its enolates could close are three- and four-membered, so it gives no intramolecular aldol product at all (Problem 23-9).",
        "D": "Octane-2,7-dione is a 1,6-diketone and would have to close a seven-membered ring, which is slow and disfavoured relative to intermolecular condensation; it is not a useful cyclohexenone precursor."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q18_claisen_ethyl_propanoate_scheme",
    "topic": "The Claisen Condensation Reaction",
    "difficulty_level": "Medium",
    "question_text": "Ethyl propanoate is treated with one equivalent of sodium ethoxide in ethanol and the mixture is then acidified. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "CCC(=O)OCC"
      ],
      "reagents": "1. NaOEt (1 equiv), EtOH; 2. H3O+",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "An ethyl group attached to a carbon that carries a double-bonded oxygen and an OCH2CH3 group: ethyl propanoate."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Ethyl 2-methyl-3-oxopentanoate",
        "smiles": "CCOC(=O)C(C)C(=O)CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethyl 3-oxopentanoate",
        "smiles": "CCOC(=O)CC(=O)CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethyl 3-hydroxy-2-methylpentanoate",
        "smiles": "CCOC(=O)C(C)C(O)CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Methyl-3-oxopentanoic acid",
        "smiles": "CCC(=O)C(C)C(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Claisen condensation is the ester's version of the aldol: an ester enolate adds to the carbonyl of a second ester molecule. The difference lies in what the tetrahedral intermediate does. In the aldol it is protonated to an alcohol, but in the Claisen it carries an alkoxy group, so it expels ethoxide and re-forms a carbonyl, a nucleophilic acyl substitution. The product joins the acyl group of one ester to the alpha carbon of the other: a beta-keto ester, with one molecule of alcohol lost. The alpha carbon of the donor keeps whatever substituents it had.",
      "approach": "Step 1: Ethoxide removes an alpha proton from ethyl propanoate: the enolate CH3CH=C(O-)OEt.\nStep 2: The enolate's alpha carbon attacks the carbonyl of a second ethyl propanoate: a tetrahedral alkoxide intermediate.\nStep 3: The intermediate expels ethoxide: CH3CH2C(=O)-CH(CH3)-C(=O)OEt, a beta-keto ester; its doubly activated C-H is deprotonated by the base, which is why a full equivalent is needed and why the equilibrium is driven.\nStep 4: Acidification returns the neutral product: ethyl 2-methyl-3-oxopentanoate, with the donor's methyl on C2.",
      "note": "McMurry 23.7 (The Claisen Condensation Reaction) works this exact example, ethyl propanoate, with the strategy that the acyl group of one reactant bonds to the alpha carbon of the second with loss of one molecule of alcohol, and Figure 23.5 gives the mechanism, contrasting the fate of the tetrahedral intermediate with the aldol's (19.4 versus 21.6). Ethyl acetate gives ethyl acetoacetate the same way, which is how the acetoacetic ester of 22.7 is made.",
      "options": {
        "A": "Correct. The propanoyl group of one ester bonds to the alpha carbon of another, which keeps its methyl; ethanol is lost and the beta-keto ester results.",
        "B": "Ethyl 3-oxopentanoate lacks the methyl on C2. The donor is ethyl propanoate, whose alpha carbon is a CH2 bearing a methyl; that methyl stays on the alpha carbon in the product. This compound would come from ethyl acetate as donor and ethyl propanoate as acceptor.",
        "C": "The beta-hydroxy ester would be the aldol-type product, formed if the tetrahedral intermediate were protonated. An ester's intermediate carries an ethoxy leaving group and expels it instead, so the product has a ketone, not an alcohol.",
        "D": "The free beta-keto acid would need the ester to be hydrolysed, which requires aqueous acid or base with heat. Acidification here merely protonates the enolate salt; the ethyl ester survives. (Heating the acid would in any case decarboxylate it.)"
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q19_claisen_vs_aldol_intermediate",
    "topic": "The Claisen Condensation Reaction",
    "difficulty_level": "Medium",
    "question_text": "The aldol reaction of an aldehyde gives a beta-hydroxy carbonyl compound, but the Claisen condensation of an ester gives a beta-keto ester. Both begin with an enolate adding to a carbonyl. Where do the two mechanisms diverge?",
    "options": [
      {
        "option_id": "A",
        "text": "At the tetrahedral intermediate: in the aldol it carries only H and C groups and is protonated to an alcohol, whereas in the Claisen it carries an alkoxy group and expels alkoxide to regenerate a C=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "At the enolate: ester enolates react through oxygen and aldehyde enolates through carbon",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "At the acceptor: an ester carbonyl cannot be attacked, so the Claisen enolate attacks the alkoxy carbon instead by SN2",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "After the product forms: the beta-hydroxy ester is oxidised by the base to the beta-keto ester",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Both condensations are an enolate adding to a carbonyl carbon to give a tetrahedral alkoxide. The divergence is the same one that separates Ch 19 from Ch 21. An aldehyde or ketone acceptor leaves a tetrahedral carbon bearing hydrogen and carbon substituents, none of which can leave, so the alkoxide is protonated and the product is an alcohol: nucleophilic addition. An ester acceptor leaves a tetrahedral carbon bearing an alkoxy group, which departs as alkoxide and restores the C=O: nucleophilic acyl substitution. So the aldol gives a beta-hydroxy carbonyl compound and the Claisen a beta-keto ester, from the same first step.",
      "approach": "Step 1: Both: base forms an enolate; the enolate carbon adds to the acceptor's carbonyl carbon, giving a tetrahedral alkoxide.\nStep 2: Aldol: the tetrahedral carbon has H (or R) and R groups only; nothing can leave; protonation gives the beta-hydroxy aldehyde or ketone (19.4 behaviour).\nStep 3: Claisen: the tetrahedral carbon has an OR' group; the alkoxide's electrons re-form the C=O and OR'- leaves (21.6 behaviour): a ketone flanked by the ester.\nStep 4: The beta-keto ester's central C-H is then deprotonated by the base, which drives the Claisen to completion; the aldol has no such sink and remains an equilibrium unless dehydration follows.",
      "note": "McMurry 23.7 (The Claisen Condensation Reaction) states that the only difference between the aldol condensation and the Claisen condensation involves the fate of the initially formed tetrahedral intermediate: protonated to an alcohol in the aldol, as for aldehydes and ketones (19.4), but expelling an alkoxide leaving group in the Claisen, as for esters (21.6). The same distinction, addition versus acyl substitution, is the organising idea of Figure 21.2.",
      "options": {
        "A": "Correct. A leaving group on the tetrahedral carbon turns an addition into a substitution; the ester's alkoxy group is that leaving group.",
        "B": "Both enolates react through carbon; C-attack is the normal mode for both (22.6). The nucleophilic step is the same in the two reactions; the difference comes after it.",
        "C": "Ester carbonyls are attacked by enolates, which is the whole basis of the Claisen. An SN2 at the alkoxy carbon would give an alkylated ester and a carboxylate, which is not what happens; the enolate adds to the carbonyl carbon.",
        "D": "Base does not oxidise alcohols, and no beta-hydroxy ester is formed on the way. The ketone carbonyl of the product is the acceptor's original carbonyl, restored when ethoxide is expelled from the intermediate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q20_claisen_full_equivalent_base",
    "topic": "The Claisen Condensation Reaction",
    "difficulty_level": "Medium",
    "question_text": "An aldol reaction runs with a catalytic amount of base, but a Claisen condensation requires a full equivalent of sodium ethoxide. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "The beta-keto ester product has a doubly activated C-H (pKa about 11) that is deprotonated by ethoxide; that consumes one equivalent of base, and the deprotonation is what drives the otherwise reversible condensation to completion",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ester enolates are formed so slowly that a large excess of base is needed to reach a useful rate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The ethanol released must be neutralised by an equivalent of ethoxide",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "One equivalent of base is needed to hydrolyse the ester group of the product",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Every step of the Claisen condensation up to the beta-keto ester is reversible, and on its own the equilibrium is not strongly favourable. What makes the reaction work is the product itself: a beta-keto ester has a hydrogen flanked by two carbonyls, far more acidic (pKa about 11) than the starting ester (pKa 25) or ethanol (pKa 16). Ethoxide removes that proton essentially completely, converting the product into its stabilised enolate, which cannot revert. Removing the product from the equilibrium pulls the condensation forward, and because one hydroxide-equivalent of base is spent on each product molecule, a full equivalent is required. Acidification at the end returns the neutral beta-keto ester.",
      "approach": "Step 1: Ester + ethoxide gives a small amount of ester enolate (pKa 25 versus 16): an unfavourable equilibrium.\nStep 2: The enolate adds to a second ester and ethoxide is expelled: the beta-keto ester, in a reversible equilibrium with the reactants.\nStep 3: Ethoxide deprotonates the beta-keto ester (pKa 11) essentially completely; the enolate formed is inert to the reverse reaction. This is the thermodynamic sink.\nStep 4: One ethoxide is consumed per product molecule, so at least one equivalent is needed; with only a catalytic amount the base is used up after a few percent conversion and the reaction stalls at its unfavourable equilibrium.",
      "note": "McMurry 23.7 (The Claisen Condensation Reaction) explains that if the starting ester has more than one acidic alpha hydrogen, the product beta-keto ester has a highly acidic, doubly activated hydrogen that can be abstracted by base, that this deprotonation requires a full equivalent of base rather than a catalytic amount, and that it drives the equilibrium completely to the product side so high yields are usually obtained. The contrast with the catalytic base of an aldol (23.2) is the point of Problem 22-9's catalysed-versus-promoted distinction applied to condensations.",
      "options": {
        "A": "Correct. The product is a stronger acid than anything else present; its deprotonation consumes the base and pulls the reversible condensation to completion.",
        "B": "Ester enolate formation is fast enough; the equilibrium concentration is small, but that is true in the aldol too. The stoichiometric base is consumed by the product, not needed for rate.",
        "C": "Ethanol is the conjugate acid of ethoxide and is the solvent; nothing needs to be neutralised. It is the beta-keto ester, not ethanol, that gives up a proton to the ethoxide.",
        "D": "Saponification would require hydroxide and water and would destroy the ester; in dry ethanol with ethoxide no hydrolysis occurs. The ester group survives, as it must for the beta-keto ester to be isolated after acidification."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q21_claisen_ethyl_phenylacetate_scheme",
    "topic": "The Claisen Condensation Reaction",
    "difficulty_level": "Hard",
    "question_text": "Ethyl phenylacetate is treated with one equivalent of sodium ethoxide in ethanol and then acidified. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(=O)Cc1ccccc1"
      ],
      "reagents": "1. NaOEt (1 equiv), EtOH; 2. H3O+",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring attached to a CH2 that is attached to a carbon carrying a double-bonded oxygen and an OCH2CH3 group: ethyl phenylacetate."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Ethyl 3-oxo-2,4-diphenylbutanoate",
        "smiles": "CCOC(=O)C(c1ccccc1)C(=O)Cc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethyl 3-oxo-4-phenylbutanoate",
        "smiles": "CCOC(=O)CC(=O)Cc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethyl 3-oxo-2,3-diphenylpropanoate",
        "smiles": "CCOC(=O)C(c1ccccc1)C(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,3-Diphenylpropan-2-one",
        "smiles": "O=C(Cc1ccccc1)Cc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Claisen condensation joins the acyl group of one ester molecule to the alpha carbon of another, with loss of alcohol. For a substituted acetate the donor's alpha carbon keeps its substituent, and the acceptor's acyl group arrives intact, so the product carries the substituent twice: once on C2 (from the donor) and once on the carbon beyond the ketone (from the acceptor's alpha carbon). Ethyl phenylacetate has a benzylic, extra-acidic alpha CH2, so enolate formation is easy, and the product is a beta-keto ester with phenyls on both sides of the new ketone.",
      "approach": "Step 1: Ethoxide removes an alpha proton from ethyl phenylacetate: the enolate PhCH=C(O-)OEt, stabilised also by the ring.\nStep 2: The enolate carbon attacks the ester carbonyl of a second molecule; the tetrahedral intermediate expels ethoxide.\nStep 3: The product is PhCH2C(=O)-CH(Ph)-C(=O)OEt: the phenylacetyl group of the acceptor on the alpha carbon of the donor, which still carries its phenyl.\nStep 4: Name it: butanoate chain, C1 ester, C2 CH(Ph), C3 ketone, C4 CH2Ph: ethyl 3-oxo-2,4-diphenylbutanoate, racemic at C2. Acidification returns it from its enolate.",
      "note": "McMurry 23.7 (The Claisen Condensation Reaction) asks for this product in Problem 23-11(b), alongside the esters of 3-methylbutanoic and cyclohexylacetic acids in parts (a) and (c), all following the worked example's rule: the acyl group of one reactant bonds to the alpha carbon of the second. Counting the substituents is the whole task: whatever the donor's alpha carbon carries stays there, and the acceptor's alpha carbon carries the same group one bond further along.",
      "options": {
        "A": "Correct. Both phenyls survive: one on the donor's alpha carbon (C2) and one on the acceptor's former alpha carbon (C4), with the new ketone at C3.",
        "B": "Ethyl 3-oxo-4-phenylbutanoate has lost the phenyl from C2, as if ethyl acetate had been the donor. The donor here is ethyl phenylacetate, whose alpha carbon bears a phenyl that stays in the product.",
        "C": "Ethyl 3-oxo-2,3-diphenylpropanoate would need ethyl benzoate as the acceptor, so that the ketone is attached directly to a ring. The acceptor is ethyl phenylacetate, whose acyl group is PhCH2C(=O)-, so there is a CH2 between the ketone and the second phenyl.",
        "D": "1,3-Diphenylpropan-2-one is what hydrolysis and decarboxylation of the beta-keto ester would give (hot aqueous acid, 22.7). Ethoxide in ethanol followed by a cold acid quench leaves the ester intact."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q22_mixed_claisen_oxalate_scheme",
    "topic": "Mixed Claisen Condensations",
    "difficulty_level": "Medium",
    "question_text": "Ethyl acetate and diethyl oxalate are treated with one equivalent of sodium ethoxide and the mixture is then acidified. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(C)=O",
        "CCOC(=O)C(=O)OCC"
      ],
      "reagents": "1. NaOEt (1 equiv), EtOH; 2. H3O+",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A methyl group on a carbon that carries a double-bonded oxygen and an OCH2CH3 group: ethyl acetate.",
        "Two ester groups joined carbonyl to carbonyl, each bearing an OCH2CH3: diethyl oxalate."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Diethyl 2-oxobutanedioate (diethyl oxaloacetate)",
        "smiles": "CCOC(=O)CC(=O)C(=O)OCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethyl acetoacetate",
        "smiles": "CCOC(=O)CC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Diethyl 3-oxopentanedioate",
        "smiles": "CCOC(=O)CC(=O)CC(=O)OCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl 2-oxopropanoate (ethyl pyruvate)",
        "smiles": "CCOC(=O)C(C)=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A mixed Claisen is clean only when one ester cannot form an enolate. Diethyl oxalate has no alpha hydrogen at all, so it can only be the acceptor, and its two carbonyls, each pulled on by the other, make it an excellent electrophile. Ethyl acetate is the only possible donor. The acetate enolate adds to one oxalate carbonyl, ethoxide is expelled, and the product is a beta-keto ester in which the ketone carries a second ester group: the diethyl ester of oxaloacetic acid, the four-carbon keto diacid of the citric acid cycle.",
      "approach": "Step 1: Ethoxide forms the enolate of ethyl acetate; diethyl oxalate has no alpha hydrogen and stays neutral.\nStep 2: The acetate enolate attacks one carbonyl of diethyl oxalate; the tetrahedral intermediate expels ethoxide.\nStep 3: The product is EtO2C-C(=O)-CH2-CO2Et, whose central CH2 is doubly activated and is deprotonated by the base, driving the reaction.\nStep 4: Acidification gives diethyl 2-oxobutanedioate, diethyl oxaloacetate.",
      "note": "McMurry 23.8 (Mixed Claisen Condensations) works this exact example, noting that diethyl oxalate often gives high yields in mixed Claisen reactions because it cannot form an enolate and can only be the acceptor, and lists ethyl benzoate and ethyl formate as the other standard acceptors with no alpha hydrogens. Oxaloacetate, the acid of this diester, is the citric acid cycle intermediate that condenses with acetyl CoA in a biological Claisen-type reaction (29.7).",
      "options": {
        "A": "Correct. Ethyl acetate is the only donor, diethyl oxalate the acceptor; one ethoxide is lost and the oxaloacetate diester results.",
        "B": "Ethyl acetoacetate is the self-Claisen product of ethyl acetate, formed when ethyl acetate is both donor and acceptor. Diethyl oxalate's two adjacent carbonyls make it a much better acceptor, so the cross product dominates.",
        "C": "Diethyl 3-oxopentanedioate would need two acetate units joined through a single carbonyl carbon supplied by something else, such as a carbonate; it is not what an oxalate acceptor gives, whose two carbons both end up in the product.",
        "D": "Ethyl pyruvate has only three carbons and has lost one of the oxalate's ester groups. A Claisen adds the acceptor's entire acyl group, here EtO2C-C(=O)-, to the donor's alpha carbon; nothing is lost but ethanol."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q23_mixed_claisen_clean_pair",
    "topic": "Mixed Claisen Condensations",
    "difficulty_level": "Medium",
    "question_text": "Which pair of esters gives a single mixed Claisen product cleanly with one equivalent of sodium ethoxide?",
    "options": [
      {
        "option_id": "A",
        "text": "Ethyl benzoate and ethyl acetate",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethyl acetate and ethyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethyl butanoate and ethyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl benzoate and ethyl formate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A mixed Claisen condensation follows the same rule as a mixed aldol: it is clean only when the roles are fixed, which for esters means one partner has no alpha hydrogen and can serve only as the acceptor. Ethyl benzoate and ethyl formate are the usual such partners; each has a carbonyl that an enolate can attack but no proton that base can remove. Two enolisable esters of similar acidity give four products. Two non-enolisable esters give nothing, because there is no donor at all.",
      "approach": "Step 1: For each ester ask: can it form an enolate (has an alpha hydrogen)? Can it accept an enolate (has an ester carbonyl)?\nStep 2: Ethyl benzoate: no alpha hydrogen, acceptor only. Ethyl acetate: alpha hydrogens, donor. One pairing: the acetate enolate adds to ethyl benzoate, ethoxide leaves, and ethyl 3-oxo-3-phenylpropanoate (ethyl benzoylacetate) is the single product.\nStep 3: Ethyl acetate + ethyl propanoate, and ethyl butanoate + ethyl propanoate: both partners donate and accept; two self-condensations and two crossed ones.\nStep 4: Ethyl benzoate + ethyl formate: neither has an alpha hydrogen, so no enolate forms and no condensation occurs.",
      "note": "McMurry 23.8 (Mixed Claisen Condensations) states that mixed Claisen reactions are successful only when one of the two ester components has no alpha hydrogens and thus cannot form an enolate ion, naming ethyl benzoate and ethyl formate as acceptors that can react with other ester anions to give mixed beta-keto esters. Ethyl benzoylacetate, the product of pair A, is the beta-keto ester whose mass spectrum is the subject of this chapter's elucidation item.",
      "options": {
        "A": "Correct. Ethyl benzoate cannot donate, ethyl acetate can; the single product is ethyl benzoylacetate.",
        "B": "Both esters have alpha hydrogens and comparable carbonyls: ethyl acetate and ethyl propanoate each act as donor and acceptor, and four beta-keto esters result.",
        "C": "Ethyl butanoate and ethyl propanoate are the same case as B: both enolisable, both acceptors, a four-product mixture.",
        "D": "Neither ethyl benzoate nor ethyl formate has an alpha hydrogen. With no possible donor there is no enolate and no Claisen condensation; the two acceptors simply sit in the base."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q24_ketone_formate_claisen_scheme",
    "topic": "Mixed Claisen Condensations",
    "difficulty_level": "Hard",
    "question_text": "Cyclohexanone is treated with ethyl formate and one equivalent of sodium ethoxide, and the mixture is then acidified. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "O=C1CCCCC1",
        "O=COCC"
      ],
      "reagents": "1. NaOEt (1 equiv), EtOH; 2. H3O+",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-membered ring with a C=O on one carbon: cyclohexanone.",
        "A carbon bearing a hydrogen, a double-bonded oxygen and an OCH2CH3 group: ethyl formate."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-Formylcyclohexanone (2-oxocyclohexanecarbaldehyde)",
        "smiles": "O=CC1CCCCC1=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-(Hydroxymethyl)cyclohexanone",
        "smiles": "OCC1CCCCC1=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Cyclohexylidenecyclohexanone",
        "smiles": "O=C1CCCCC1=C1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl 2-oxocyclohexanecarboxylate",
        "smiles": "CCOC(=O)C1CCCCC1=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Claisen-type condensation can pair a ketone enolate with an ester: the ketone donates, the ester accepts, and because the ester's tetrahedral intermediate expels ethoxide, the product is a 1,3-dicarbonyl compound, a beta-diketone or, with a formate, a beta-keto aldehyde. The reaction is cleanest when the ester has no alpha hydrogen and cannot compete as a donor; ethyl formate is the standard choice and transfers a formyl group (CHO). The product's doubly activated C-H is deprotonated by the base, which drives the condensation, and acidification returns the neutral compound, largely as its enol.",
      "approach": "Step 1: Ethoxide forms the enolate of cyclohexanone (at C2); ethyl formate, with no alpha hydrogen, cannot form one.\nStep 2: The enolate attacks the formate carbonyl carbon; the tetrahedral intermediate expels ethoxide.\nStep 3: The product carries a CHO on C2 of the ring next to the ketone: 2-formylcyclohexanone, whose C2-H is removed by the base, pulling the equilibrium.\nStep 4: Acidification gives the neutral beta-keto aldehyde, which exists mainly as its hydrogen-bonded enol, 2-(hydroxymethylene)cyclohexanone.",
      "note": "McMurry 23.8 (Mixed Claisen Condensations) states that mixed Claisen-like reactions can be carried out between an ester and a ketone to give a beta-diketone, working best when the ester has no alpha hydrogens, and that ethyl formate gives high yields in mixed Claisen condensations with ketones. The formylated ketone is the classical entry to 2-substituted cyclohexanones and to heterocycles; diethyl carbonate in place of ethyl formate would give option D, the cyclic beta-keto ester that the Dieckmann cyclisation also makes (23.9).",
      "options": {
        "A": "Correct. Cyclohexanone donates, ethyl formate accepts and loses ethoxide; a formyl group lands on the alpha carbon.",
        "B": "2-(Hydroxymethyl)cyclohexanone is the aldol addition product with formaldehyde, where the tetrahedral intermediate is protonated. Ethyl formate's intermediate carries an ethoxy group and expels it, so the new carbon stays at the aldehyde oxidation level.",
        "C": "Cyclohexylidenecyclohexanone is the self-condensation of cyclohexanone. Ethyl formate is a much more reactive acceptor than a ketone carbonyl, and its product is removed from the equilibrium by deprotonation, so the cross-condensation wins.",
        "D": "Ethyl 2-oxocyclohexanecarboxylate has a CO2Et on C2, not a CHO; it would come from diethyl carbonate as the acceptor (or from the Dieckmann cyclisation of diethyl heptanedioate). Ethyl formate delivers a formyl group."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q25_dieckmann_heptanedioate_scheme",
    "topic": "Intramolecular Claisen Condensations",
    "difficulty_level": "Medium",
    "question_text": "Diethyl heptanedioate is treated with one equivalent of sodium ethoxide and the mixture is then acidified. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(=O)CCCCCC(=O)OCC"
      ],
      "reagents": "1. NaOEt (1 equiv), EtOH; 2. H3O+",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A chain of five CH2 groups with an ethyl ester group on each end: diethyl heptanedioate."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Ethyl 2-oxocyclohexanecarboxylate",
        "smiles": "CCOC(=O)C1CCCCC1=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethyl 2-oxocyclopentanecarboxylate",
        "smiles": "CCOC(=O)C1CCCC1=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclohexanone",
        "smiles": "O=C1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl 2-oxocycloheptanecarboxylate",
        "smiles": "CCOC(=O)C1CCCCCC1=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A diester can undergo a Claisen condensation within one molecule: the enolate formed at the alpha carbon of one ester attacks the carbonyl of the other, ethoxide is expelled, and a cyclic beta-keto ester results. This Dieckmann cyclisation works best when the ring formed is five- or six-membered, which means a 1,6-diester (adipate) or a 1,7-diester (pimelate). The ring contains the enolate carbon, the carbons between it and the far ester, and that ester's carbonyl carbon; the ester group of the donor end ends up on the ring carbon next to the new ketone.",
      "approach": "Step 1: Ethoxide forms an enolate at C2 of diethyl heptanedioate (alpha to one ester).\nStep 2: The enolate carbon attacks the carbonyl carbon of the ester at the other end (C7). The ring encloses C2, C3, C4, C5, C6, C7: six members.\nStep 3: The tetrahedral intermediate expels ethoxide, leaving a ketone at the former C7 and the surviving ester on C2.\nStep 4: The doubly activated C2-H is deprotonated by the base, driving the reaction; acidification gives ethyl 2-oxocyclohexanecarboxylate.",
      "note": "McMurry 23.9 (Intramolecular Claisen Condensations: The Dieckmann Cyclization) states that the reaction works best on 1,6- and 1,7-diesters, the former giving a five-membered and the latter a six-membered cyclic beta-keto ester, with the mechanism (Figure 23.6) identical to the Claisen's: one ester group becomes an enolate that carries out a nucleophilic acyl substitution on the other. The product here is the substrate of the alkylation-decarboxylation sequence that gives 2-substituted cyclohexanones (22.7 and the roadmap that follows).",
      "options": {
        "A": "Correct. A 1,7-diester closes a six-membered ring; the product is the cyclic beta-keto ester with the ester on the carbon next to the ketone.",
        "B": "The five-membered ring would come from a 1,6-diester, diethyl hexanedioate (adipate), which has one fewer CH2. Diethyl heptanedioate's seven carbons give a six-membered ring plus the exocyclic ester carbon.",
        "C": "Cyclohexanone would need the ester group hydrolysed and the beta-keto acid decarboxylated, which takes hot aqueous acid. Ethoxide in ethanol followed by a cold acid quench leaves the ester on the ring.",
        "D": "A seven-membered ring would put all seven chain carbons in the ring, but the ring is formed by attacking one ester carbonyl from the alpha carbon of the other, so the donor's ester carbon stays outside the ring. Six carbons make the ring; the seventh is the exocyclic CO2Et."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q26_roadmap_dieckmann_methylcyclopentanone",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following synthetic pathway from diethyl hexanedioate. Determine the correct compounds matching labels B, C and D.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(=O)CCCCC(=O)OCC",
          "label": "Compound A",
          "alt": "A chain of four CH2 groups with an ethyl ester group on each end: diethyl hexanedioate, drawn as compound A.",
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
          "reagents": "1. NaOEt (1 equiv), EtOH; 2. H3O+"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1. NaOEt, EtOH; 2. CH3I"
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
        "text": "B: ethyl 2-oxocyclopentanecarboxylate, C: ethyl 1-methyl-2-oxocyclopentanecarboxylate, D: 2-methylcyclopentanone",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "B: ethyl 2-oxocyclopentanecarboxylate, C: ethyl 1-methyl-2-oxocyclopentanecarboxylate, D: 1-methyl-2-oxocyclopentanecarboxylic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "B: ethyl 2-oxocyclohexanecarboxylate, C: ethyl 1-methyl-2-oxocyclohexanecarboxylate, D: 2-methylcyclohexanone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "B: ethyl 2-oxocyclopentanecarboxylate, C: ethyl 3-methyl-2-oxocyclopentanecarboxylate, D: 3-methylcyclopentanone",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Three reactions from two chapters make a 2-substituted cyclic ketone regioselectively. A Dieckmann cyclisation of a 1,6-diester gives a five-membered cyclic beta-keto ester. Its doubly activated hydrogen, between the ketone and the ester, is removed by ethoxide and the enolate is alkylated there, at the carbon bearing the ester and nowhere else. Hot aqueous acid then hydrolyses the ester and decarboxylates the beta-keto acid, leaving the alkyl group on the carbon alpha to the ketone. The ester has served as a removable handle that directs alkylation to one carbon.",
      "approach": "Step 1: A + one equivalent of NaOEt: Dieckmann cyclisation of the 1,6-diester closes a five-membered ring; acidification gives B, ethyl 2-oxocyclopentanecarboxylate.\nStep 2: B + NaOEt, then CH3I: the C1 proton between the two carbonyls (pKa about 11) is removed and the enolate is methylated at C1. C is ethyl 1-methyl-2-oxocyclopentanecarboxylate, with C1 now quaternary.\nStep 3: C + H3O+, heat: the ester is hydrolysed to the beta-keto acid, which decarboxylates through its enol.\nStep 4: D is 2-methylcyclopentanone (racemic), the methyl on the carbon that carried the ester.",
      "note": "McMurry 23.9 (Intramolecular Claisen Condensations: The Dieckmann Cyclization) states that the cyclic beta-keto ester from a Dieckmann cyclisation can be alkylated and decarboxylated by the reactions of the acetoacetic ester synthesis (22.7), and calls the overall sequence, Dieckmann cyclisation, beta-keto ester alkylation and decarboxylation, a powerful method for preparing 2-substituted cyclopentanones and cyclohexanones. The Ch 22 roadmap on ethyl 2-oxocyclohexanecarboxylate is the six-membered version of steps 2 and 3.",
      "options": {
        "A": "Correct. Dieckmann to the five-membered beta-keto ester, methylation at the doubly activated carbon, then hydrolysis and decarboxylation to 2-methylcyclopentanone.",
        "B": "1-Methyl-2-oxocyclopentanecarboxylic acid is the beta-keto acid formed on hydrolysis, and beta-keto acids decarboxylate on heating in aqueous acid. With heat specified, D is the ketone, not the acid.",
        "C": "The six-membered ring would come from diethyl heptanedioate, a 1,7-diester. Diethyl hexanedioate has four CH2 groups between its esters and closes a five-membered ring.",
        "D": "Alkylation occurs at C1, the carbon flanked by both carbonyls (pKa about 11), not at C3, which is alpha to the ketone alone (pKa about 20). Ethoxide removes the far more acidic proton, so the methyl lands next to the ester and, after decarboxylation, next to the ketone."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q27_michael_acetoacetate_mvk_scheme",
    "topic": "Conjugate Carbonyl Additions: The Michael Reaction",
    "difficulty_level": "Medium",
    "question_text": "Ethyl acetoacetate and but-3-en-2-one are treated with a catalytic amount of sodium ethoxide in ethanol. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "CCOC(=O)CC(C)=O",
        "C=CC(C)=O"
      ],
      "reagents": "NaOEt (cat.), EtOH",
      "conditions": "25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "An ethyl group on an oxygen bonded to a C=O; that carbonyl carbon is attached to a CH2, which is attached to a second C=O bearing a methyl: ethyl acetoacetate.",
        "A C=C double bond whose one carbon is attached to a C=O bearing a methyl: but-3-en-2-one (methyl vinyl ketone)."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Ethyl 2-acetyl-5-oxohexanoate",
        "smiles": "CCOC(=O)C(CCC(C)=O)C(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethyl 2-acetyl-3-hydroxy-3-methylpent-4-enoate (1,2-addition)",
        "smiles": "CCOC(=O)C(C(C)(O)C=C)C(C)=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethyl 3,7-dioxooctanoate",
        "smiles": "CCOC(=O)CC(=O)CCCC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl 2-acetyl-3-methyl-4-oxopentanoate",
        "smiles": "CCOC(=O)C(C(C)C(C)=O)C(C)=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An alpha,beta-unsaturated ketone has two electrophilic sites, the carbonyl carbon and the beta carbon, and a stabilised, soft nucleophile such as a 1,3-dicarbonyl enolate adds to the beta carbon: conjugate, or Michael, addition. The enolate that forms on the acceptor is protonated on carbon by the solvent, regenerating the catalyst, and the product is a 1,5-dicarbonyl compound whose new C-C bond joins the donor's alpha carbon to the acceptor's beta carbon. The donor is ethyl acetoacetate's central carbon, its most acidic site; but-3-en-2-one's beta carbon is its terminal CH2.",
      "approach": "Step 1: Ethoxide removes the proton between the two carbonyls of ethyl acetoacetate: a stabilised enolate.\nStep 2: The enolate carbon attacks the beta carbon (the CH2 terminus) of but-3-en-2-one, pushing electrons onto the acceptor's carbonyl oxygen: an enolate of the acceptor.\nStep 3: Ethanol protonates that enolate on carbon, returning ethoxide.\nStep 4: Product: CH3C(=O)CH2CH2-CH(COCH3)CO2Et, ethyl 2-acetyl-5-oxohexanoate, a 1,5-dicarbonyl compound (its acetyl and ketone oxygens 1,5 to each other).",
      "note": "McMurry 23.10 (Conjugate Carbonyl Additions: The Michael Reaction) gives this exact reaction as the example of the best Michael reactions, a particularly stable enolate from a beta-keto ester adding to an unhindered alpha,beta-unsaturated ketone, with the mechanism in Figure 23.7 and Table 23.1 listing acceptors and donors. The C-C bond formed is between the alpha carbon of the acidic donor and the beta carbon of the acceptor. The 1,5-diketone unit of the product is what the Robinson annulation (23.12) goes on to cyclise.",
      "options": {
        "A": "Correct. Conjugate addition of the acetoacetate enolate to the beta carbon of methyl vinyl ketone gives the 1,5-dicarbonyl compound.",
        "B": "Direct (1,2) addition to the carbonyl carbon of the enone would give this tertiary alcohol. A stabilised, delocalised enolate is a soft nucleophile and adds to the beta carbon instead; the 1,2 adduct is also reversible while the 1,4 adduct is not.",
        "C": "Ethyl 3,7-dioxooctanoate has the new bond made from the acetyl methyl of ethyl acetoacetate. That carbon (pKa about 20) is far less acidic than the central CH2 (pKa 11), so the enolate forms at the centre and the bond is made there.",
        "D": "This product has the donor attached to the alpha carbon of the enone (next to the carbonyl) rather than the beta carbon. Conjugate addition delivers the nucleophile to the far end of the C=C, the beta carbon, where the resulting negative charge can be delocalised onto oxygen."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q28_not_michael_acceptor",
    "topic": "Conjugate Carbonyl Additions: The Michael Reaction",
    "difficulty_level": "Easy",
    "question_text": "Which compound is not a Michael acceptor?",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclohexene",
        "smiles": "C1CCC=CC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propenenitrile (acrylonitrile)",
        "smiles": "C=CC#N",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethyl propenoate (ethyl acrylate)",
        "smiles": "C=CC(=O)OCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclohex-2-en-1-one",
        "smiles": "O=C1C=CCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Michael acceptor is an alkene made electrophilic at its beta carbon by conjugation with an electron-withdrawing group that can take the negative charge left after addition: a ketone, aldehyde, ester, amide, nitrile or nitro group. The nucleophile adds to the beta carbon because the resulting anion is delocalised onto the heteroatom of that group. An alkene with no such group is electron-rich, not electron-poor; it reacts with electrophiles, not with enolates, and no anion it could form would be stabilised.",
      "approach": "Step 1: For each compound, look for a C=C conjugated to an electron-withdrawing pi acceptor.\nStep 2: Propenenitrile: C=C conjugated with C≡N. Ethyl propenoate: C=C conjugated with an ester C=O. Cyclohex-2-en-1-one: C=C conjugated with a ketone C=O. All three are acceptors and appear in the text's table or problems.\nStep 3: Cyclohexene: a plain alkene, no acceptor group; its pi bond is nucleophilic, and an enolate adding to it would give an unstabilised carbanion.\nStep 4: Cyclohexene is not a Michael acceptor.",
      "note": "McMurry 23.10 (Conjugate Carbonyl Additions: The Michael Reaction), Table 23.1, lists propenal, 3-buten-2-one, ethyl propenoate, propenamide, propenenitrile and nitroethylene as acceptors, and states that unsaturated aldehydes, esters, thioesters, nitriles, amides and nitro compounds can all act as the electrophilic acceptor. Problem 23-16 uses 2-cyclohexenone and propenenitrile as acceptors. The electrophilicity of the beta carbon of an enone was introduced in 19.13 for conjugate additions of amines.",
      "options": {
        "A": "Correct. Cyclohexene's double bond carries no electron-withdrawing group, so its beta carbon is not electrophilic and an enolate does not add to it.",
        "B": "Propenenitrile is a good Michael acceptor: the C≡N takes the negative charge when a nucleophile adds to the CH2 terminus. The text's Problem 23-16(b) adds 2,4-pentanedione to it.",
        "C": "Ethyl propenoate is an acrylate ester, listed in Table 23.1; the ester carbonyl activates the beta carbon toward enolates and enamines (Problem 23-19a).",
        "D": "Cyclohex-2-en-1-one is a cyclic enone and a standard Michael acceptor (Problem 23-16a); addition occurs at C3, the beta carbon, with the charge delocalised onto the ketone oxygen."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q29_michael_pentanedione_acrylonitrile_scheme",
    "topic": "Conjugate Carbonyl Additions: The Michael Reaction",
    "difficulty_level": "Medium",
    "question_text": "Pentane-2,4-dione and propenenitrile (1 equiv) are treated with a catalytic amount of sodium ethoxide. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)CC(C)=O",
        "C=CC#N"
      ],
      "reagents": "NaOEt (cat.), EtOH",
      "conditions": "25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "Two acetyl groups joined through a CH2: pentane-2,4-dione.",
        "A C=C double bond whose one carbon is attached to a carbon triple-bonded to nitrogen: propenenitrile."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "4-Acetyl-5-oxohexanenitrile",
        "smiles": "CC(=O)C(CCC#N)C(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Acetyl-2-methyl-4-oxopentanenitrile",
        "smiles": "CC(=O)C(C(C)C#N)C(C)=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-Acryloylpentane-2,4-dione",
        "smiles": "CC(=O)C(C(C)=O)C(=O)C=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-Acetyl-4-(2-cyanoethyl)-5-oxohexanenitrile",
        "smiles": "CC(=O)C(CCC#N)(CCC#N)C(C)=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Any alpha,beta-unsaturated compound whose acceptor group can take a negative charge is a Michael acceptor, and a nitrile does the job as well as a carbonyl: the enolate adds to the CH2 terminus of propenenitrile and the charge is delocalised onto nitrogen. The donor is the stabilised enolate of the 1,3-diketone, formed at its central carbon. One equivalent of acceptor and catalytic base give the mono-adduct; the product's remaining central hydrogen is still acidic, so excess acceptor would alkylate it a second time.",
      "approach": "Step 1: Ethoxide removes the doubly activated C3 proton of pentane-2,4-dione (pKa 9): the stabilised enolate.\nStep 2: The enolate carbon attacks the beta carbon of propenenitrile, the CH2 end; the charge moves onto the nitrile nitrogen.\nStep 3: Ethanol protonates the resulting nitrile anion on carbon, regenerating ethoxide.\nStep 4: Product: (CH3CO)2CH-CH2CH2-C≡N, 4-acetyl-5-oxohexanenitrile, the cyanoethyl group on the former central carbon of the diketone.",
      "note": "McMurry 23.10 (Conjugate Carbonyl Additions: The Michael Reaction) asks for this product in Problem 23-16(b), with 2,4-pentanedione as donor and propenenitrile as acceptor, and lists propenenitrile among the acceptors in Table 23.1 with the note that unsaturated nitriles act as the electrophilic component. The adding of a two-carbon cyanoethyl group by Michael reaction is the classical cyanoethylation; hydrolysis of the nitrile (20.7) would then give a 1,5-dicarbonyl acid.",
      "options": {
        "A": "Correct. The diketone's central carbon adds to the beta carbon of acrylonitrile; the product carries a cyanoethyl group there.",
        "B": "This has the donor attached to the alpha carbon of acrylonitrile, next to the nitrile. Conjugate addition goes to the beta carbon, the CH2 end, where the charge left behind can be delocalised onto nitrogen.",
        "C": "3-Acryloylpentane-2,4-dione would require the enolate to attack the nitrile carbon, as a Grignard reagent does (20.7), and the imine to be hydrolysed to a ketone. Enolates are far softer nucleophiles than organometallics and add to the conjugated C=C, not to the C≡N.",
        "D": "Bis-addition would need two equivalents of propenenitrile, since the mono-adduct still has one acidic hydrogen. With one equivalent and catalytic base the mono-adduct is the product."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q30_michael_retrosynthesis",
    "topic": "Conjugate Carbonyl Additions: The Michael Reaction",
    "difficulty_level": "Medium",
    "question_text": "Which donor and acceptor give diethyl 2-(3-oxobutyl)propanedioate, (EtO2C)2CH-CH2CH2C(=O)CH3, in a base-catalysed Michael reaction?",
    "options": [
      {
        "option_id": "A",
        "text": "Diethyl malonate and but-3-en-2-one",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Diethyl malonate and but-3-en-2-ol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethyl acetoacetate and ethyl propenoate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Diethyl malonate and butan-2-one",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Michael product is a 1,5-dicarbonyl compound, and the bond to break in planning it is the one between the donor's alpha carbon and the acceptor's beta carbon. On one side of that bond sits the stabilised donor, recognisable as a 1,3-dicarbonyl unit with a hydrogen restored to its central carbon; on the other side sits a chain of two carbons ending in a carbonyl, which becomes the alpha,beta-unsaturated acceptor when the C-C bond is redrawn as a C=C. Both halves must be identifiable in the target for the disconnection to be right.",
      "approach": "Step 1: Locate the 1,3-dicarbonyl unit: (EtO2C)2CH-, the malonate carbon. The donor is diethyl malonate.\nStep 2: The rest of the molecule, -CH2CH2C(=O)CH3, is a four-carbon unit, a CH2-CH2 attached to an acetyl: put the C=C between the two CH2 carbons and the acceptor is CH2=CH-C(=O)CH3, but-3-en-2-one.\nStep 3: Check the alternatives: an allylic alcohol is not an acceptor (no conjugated carbonyl); butan-2-one has no C=C; ethyl acetoacetate with ethyl acrylate would give a different 1,5-dicarbonyl, ethyl 2-acetyl-pentanedioate.\nStep 4: Diethyl malonate + but-3-en-2-one with catalytic ethoxide gives the target.",
      "note": "McMurry 23.10 (Conjugate Carbonyl Additions: The Michael Reaction) works a retrosynthesis of this kind in its example, stating that a Michael reaction yields a 1,5-dicarbonyl product and that the C-C bond formed is between the alpha carbon of the acidic donor and the beta carbon of the unsaturated acceptor; Table 23.1 lists diethyl malonate among the donors and 3-buten-2-one among the acceptors. Problems 23-17 and 23-18 ask for the same working backwards.",
      "options": {
        "A": "Correct. The malonate carbon is the donor's alpha carbon and the acetyl-bearing two-carbon chain is the acceptor's C=C: methyl vinyl ketone.",
        "B": "But-3-en-2-ol is an allylic alcohol, not an alpha,beta-unsaturated carbonyl compound; its C=C is not activated toward nucleophiles and its OH would be deprotonated by the base. No Michael addition occurs.",
        "C": "Ethyl acetoacetate and ethyl propenoate are a fine Michael pair, but they give ethyl 2-acetyl-4-(ethoxycarbonyl)butanoate: an acetyl group, not a second ester, on the donor carbon and an ester, not a methyl ketone, at the far end.",
        "D": "Butan-2-one has no C=C and is not a Michael acceptor. Malonate enolate could at most add to its carbonyl in an unfavourable aldol-type equilibrium; it would not give the 1,5-dicarbonyl target."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q31_enamine_formation_scheme",
    "topic": "Carbonyl Condensations with Enamines",
    "difficulty_level": "Medium",
    "question_text": "Cyclohexanone is heated with pyrrolidine and a trace of acid, with removal of water. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "O=C1CCCCC1",
        "C1CCNC1"
      ],
      "reagents": "TsOH (cat.), -H2O",
      "conditions": "benzene, reflux",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-membered ring with a C=O on one carbon: cyclohexanone.",
        "A five-membered ring of four carbons and one N-H: pyrrolidine."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-(Cyclohex-1-en-1-yl)pyrrolidine (the enamine)",
        "smiles": "C1CCN(C1)C1=CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Cyclohexylpyrrolidine",
        "smiles": "C1CCN(C1)C1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-(Pyrrolidin-1-yl)cyclohexan-1-ol (the carbinolamine)",
        "smiles": "OC1(CCCCC1)N1CCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-(Pyrrolidin-1-yl)cyclohexan-1-one",
        "smiles": "O=C1CCCCC1N1CCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A secondary amine adds to a ketone to give a carbinolamine, which loses water. With a primary amine the iminium ion formed would lose the N-H proton to give a neutral imine, but a secondary amine's iminium has no N-H, so it loses a proton from the alpha carbon instead, and the product is an enamine: a C=C bearing the nitrogen. Removing water drives the equilibrium. The enamine's nitrogen lone pair conjugates with the C=C, putting electron density on the beta carbon of the enamine, the former alpha carbon of the ketone, which is why enamines behave as neutral enolate equivalents.",
      "approach": "Step 1: Pyrrolidine's nitrogen adds to the cyclohexanone carbonyl; proton transfer gives the carbinolamine, 1-(pyrrolidin-1-yl)cyclohexan-1-ol.\nStep 2: Acid protonates the OH and water leaves, giving an iminium ion with a C=N+ and no N-H.\nStep 3: A proton is lost from the ring carbon next to the C=N+ (the former alpha carbon), giving the enamine's C=C.\nStep 4: Product: 1-(cyclohex-1-en-1-yl)pyrrolidine, the nitrogen on one alkene carbon; the water removed keeps the equilibrium on the enamine side.",
      "note": "McMurry 23.11 (Carbonyl Condensations with Enamines: The Stork Enamine Reaction) states that enamines are readily prepared from a ketone and a secondary amine (19.8) and uses cyclohexanone plus pyrrolidine as its example; the resonance structures given there show the nitrogen lone pair increasing electron density on the alpha carbon, which is what makes the enamine nucleophilic. Imine versus enamine formation as a function of primary versus secondary amine is McMurry 19.8.",
      "options": {
        "A": "Correct. Carbinolamine, iminium, then loss of an alpha proton: with a secondary amine the product is the enamine.",
        "B": "1-Cyclohexylpyrrolidine is the reductive amination product, needing a hydride source (NaBH3CN or H2) to reduce the iminium ion. With no reducing agent the iminium loses a proton instead and the enamine results.",
        "C": "The carbinolamine is the first intermediate, but under acid catalysis with removal of water it dehydrates. It is not isolable under these conditions; the water that leaves is what the Dean-Stark trap collects.",
        "D": "2-(Pyrrolidin-1-yl)cyclohexanone would put the nitrogen on the alpha carbon by substitution, which no step here does. The amine attacks the carbonyl carbon, and the nitrogen ends up on the former carbonyl carbon as part of the enamine."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q32_stork_enamine_mvk_scheme",
    "topic": "Carbonyl Condensations with Enamines",
    "difficulty_level": "Hard",
    "question_text": "The pyrrolidine enamine of cyclohexanone is heated with but-3-en-2-one, and the mixture is then treated with aqueous acid. What is the final organic product?",
    "reaction_scheme": {
      "reactants": [
        "C1CCN(C1)C1=CCCCC1",
        "C=CC(C)=O"
      ],
      "reagents": "1. dioxane, heat; 2. H3O+",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A cyclohexene ring whose double-bond carbon carries a pyrrolidine nitrogen: the enamine of cyclohexanone.",
        "A C=C double bond whose one carbon is attached to a C=O bearing a methyl: but-3-en-2-one."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-(3-Oxobutyl)cyclohexan-1-one",
        "smiles": "CC(=O)CCC1CCCCC1=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-(2-Oxopropyl)cyclohexan-1-one",
        "smiles": "CC(=O)CC1CCCCC1=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4,4a,5,6,7,8-Hexahydronaphthalen-2(3H)-one",
        "smiles": "O=C1CCC2CCCCC2=C1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-[2-(3-Oxobutyl)cyclohex-1-en-1-yl]pyrrolidine",
        "smiles": "CC(=O)CCC1=C(N2CCCC2)CCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Stork enamine reaction is a Michael addition performed with a neutral nucleophile. The enamine's beta carbon (the ketone's former alpha carbon) attacks the beta carbon of the enone; the iminium ion that results is deprotonated to a new enamine or simply hydrolysed at the end. Aqueous acid then converts the enamine back into the ketone, so the net result is that the ketone has been alkylated at its alpha carbon by a 3-oxobutyl group: a 1,5-diketone, made from a monoketone, which the enolate Michael reaction cannot do.",
      "approach": "Step 1: The enamine's nucleophilic carbon (C2 of the cyclohexene ring, beta to nitrogen) attacks the CH2 terminus of but-3-en-2-one; the charge moves onto the enone oxygen and an iminium ion forms on the ring.\nStep 2: Proton transfer gives the Michael adduct, still an enamine (or iminium) on the ring.\nStep 3: Aqueous acid hydrolyses the enamine/iminium back to the ketone and releases pyrrolidine.\nStep 4: Product: 2-(3-oxobutyl)cyclohexan-1-one, a 1,5-diketone, racemic at C2. Base and heat would take it on to the Robinson annulation product, but that is a further step.",
      "note": "McMurry 23.11 (Carbonyl Condensations with Enamines: The Stork Enamine Reaction), Figure 23.8, gives exactly this sequence: cyclohexanone to its pyrrolidine enamine, Michael addition to 3-buten-2-one, and hydrolysis to the 1,5-diketone. The section states the two advantages: the enamine is neutral and easy to handle, and a monoketone can be used, whereas only beta-dicarbonyl enolates work in the enolate Michael reaction. The 1,5-diketone is the substrate of the intramolecular aldol that completes a Robinson annulation (23.12).",
      "options": {
        "A": "Correct. The enamine carbon adds to the beta carbon of MVK, and hydrolysis returns the ketone: the 1,5-diketone from a monoketone.",
        "B": "2-(2-Oxopropyl)cyclohexanone has only a two-carbon link to the acetyl group, one carbon short. The enamine adds to the terminal CH2 of but-3-en-2-one, so all four of the enone's carbons are in the side chain: CH2CH2C(=O)CH3.",
        "C": "The octalone is the Robinson annulation product, formed when the 1,5-diketone is treated with base and heated so that it undergoes an intramolecular aldol condensation. Aqueous acid work-up alone stops at the diketone.",
        "D": "This is the alkylated enamine before hydrolysis. The aqueous acid in step 2 hydrolyses the enamine to the ketone and pyrrolidine; the isolated product has a C=O on the ring."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q33_why_enamine",
    "topic": "Carbonyl Condensations with Enamines",
    "difficulty_level": "Medium",
    "question_text": "Why is the Stork enamine reaction, rather than a direct base-catalysed Michael reaction of the ketone enolate, used to add cyclohexanone to but-3-en-2-one?",
    "options": [
      {
        "option_id": "A",
        "text": "Only enolates from beta-dicarbonyl compounds give clean Michael reactions; a simple ketone's enolate self-condenses and polyalkylates, whereas its enamine is neutral, easily made and adds once, then is hydrolysed back to the ketone",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Enamines are much stronger nucleophiles than enolates, so the reaction is faster",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Enamines add to the carbonyl carbon of the enone, giving the 1,2 product that base cannot reach",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The enamine product needs no hydrolysis step and is the final compound",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Michael reaction wants a nucleophile that is stable enough to be present in quantity, soft enough to prefer the beta carbon, and unlikely to react with itself. Beta-dicarbonyl enolates qualify; a simple ketone enolate does not, because under the basic conditions it aldol-condenses with unreacted ketone and, once alkylated, is alkylated again. An enamine sidesteps all of this. It is a neutral, isolable compound made in one step from the ketone and a secondary amine; its nucleophilic carbon adds once to the enone; and aqueous acid returns the ketone. The nucleophilicity is comparable to an enolate's, not greater; the advantages are handling and selectivity.",
      "approach": "Step 1: Consider the enolate route: catalytic base gives a little cyclohexanone enolate in the presence of cyclohexanone, and self-aldol competes with the Michael addition; the mono-adduct is also enolisable and adds a second enone.\nStep 2: Consider the enamine route: cyclohexanone + pyrrolidine gives a neutral enamine that can be isolated and stored.\nStep 3: The enamine adds to the beta carbon of the enone once, because the product iminium is no longer nucleophilic until deprotonated, and it is hydrolysed at the end.\nStep 4: The net result, alpha-(3-oxobutyl)cyclohexanone, is the Michael addition of a monoketone, which the text says only enamines make practical.",
      "note": "McMurry 23.11 (Carbonyl Condensations with Enamines: The Stork Enamine Reaction) gives two advantages of the enamine-Michael over the enolate-Michael: an enamine is neutral, easily prepared and easily handled, while an enolate is charged and must be handled carefully; and an enamine from a monoketone can be used, whereas only enolates from beta-dicarbonyl compounds can be used. The section also notes that biological pathways favour the enamine route (type I aldolases, 23.13).",
      "options": {
        "A": "Correct. The enamine gives a monoketone a clean, single Michael addition that its own enolate cannot; it is neutral, isolable and hydrolysed back to the ketone afterward.",
        "B": "Enamines are comparable to enolates in nucleophilicity, not stronger; the text describes them as electronically similar. Speed is not the reason; controllability and the ability to use a monoketone are.",
        "C": "Enamines add to the beta carbon of the enone, exactly as enolates do, in a Michael-like conjugate addition; the product after hydrolysis is the 1,5-dicarbonyl compound, not a 1,2 adduct.",
        "D": "The Stork sequence ends with hydrolysis: the alkylated enamine (or iminium) is treated with aqueous acid to regenerate the ketone. The enamine is a temporary activating group, not the target."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q34_robinson_annulation_scheme",
    "topic": "The Robinson Annulation Reaction",
    "difficulty_level": "Hard",
    "question_text": "2-Methylcyclopentane-1,3-dione and but-3-en-2-one are treated with a catalytic amount of base and the mixture is then heated. What is the Robinson annulation product?",
    "reaction_scheme": {
      "reactants": [
        "CC1C(=O)CCC1=O",
        "C=CC(C)=O"
      ],
      "reagents": "NaOEt (cat.), EtOH; then heat",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A five-membered ring with C=O groups on two carbons that flank a carbon bearing a methyl and a hydrogen: 2-methylcyclopentane-1,3-dione.",
        "A C=C double bond whose one carbon is attached to a C=O bearing a methyl: but-3-en-2-one."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "7a-Methyl-2,3,7,7a-tetrahydro-1H-indene-1,5(6H)-dione",
        "smiles": "CC12CCC(=O)C=C1CCC2=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Methyl-2-(3-oxobutyl)cyclopentane-1,3-dione (the Michael adduct)",
        "smiles": "CC1(CCC(C)=O)C(=O)CCC1=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The beta-hydroxy ketone before dehydration",
        "smiles": "CC12CCC(=O)CC1(O)CCC2=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "8a-Methyl-3,4,8,8a-tetrahydronaphthalene-1,6(2H,7H)-dione (the six-ring analogue)",
        "smiles": "CC12CCC(=O)C=C1CCCC2=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Robinson annulation builds a new cyclohexenone ring onto a ketone in two stages that run in one pot: a Michael addition of a stable enolate (here from a beta-diketone) to an alpha,beta-unsaturated ketone gives a 1,5-diketone, and that 1,5-diketone undergoes an intramolecular aldol condensation, the enolate of the new methyl ketone attacking one of the ring carbonyls and the adduct dehydrating. The six-membered ring that results is fused to the original ring, and the C=C of the new enone sits at the ring junction, conjugated with the new ketone.",
      "approach": "Step 1: Base removes the doubly activated C2-H of 2-methylcyclopentane-1,3-dione (pKa about 9), giving a stabilised enolate.\nStep 2: Michael addition to the beta carbon of but-3-en-2-one gives 2-methyl-2-(3-oxobutyl)cyclopentane-1,3-dione, a 1,5-diketone (counting one ring carbonyl and the side-chain ketone).\nStep 3: On heating, the enolate of the side-chain methyl ketone attacks one ring carbonyl (both are equivalent), closing a six-membered ring; the tertiary aldol dehydrates.\nStep 4: Product: a bicyclic enone, 7a-methyl-2,3,7,7a-tetrahydro-1H-indene-1,5(6H)-dione, the six-membered enone fused to the cyclopentanone, with the new C=C at the ring junction. The quaternary C7a is a new stereocentre, racemic here.",
      "note": "McMurry 23.12 (The Robinson Annulation Reaction) asks for this product in Problem 23-21 and describes the reaction as a Michael addition followed by an intramolecular aldol condensation giving a substituted 2-cyclohexenone, with the estrone synthesis (Figure 23.9) using this same 2-methyl-1,3-cyclopentanedione as the donor. This bicyclic dione is the Hajos-Parrish ketone, which in the proline-catalysed version is obtained in one enantiomer; the text does not name it. The cyclohexanedione analogue gives the Wieland-Miescher ketone, option D.",
      "options": {
        "A": "Correct. Michael addition, then intramolecular aldol condensation of the 1,5-diketone, gives the fused cyclohexenone with the methyl at the ring junction.",
        "B": "The Michael adduct is the intermediate after the first stage. It is a 1,5-diketone, and on heating with base it cyclises by an intramolecular aldol and dehydrates; the annulation is not complete until that second stage.",
        "C": "The beta-hydroxy ketone is the aldol addition intermediate of the second stage. Heating dehydrates it to the conjugated enone, which is what an annulation delivers; the tertiary alcohol is not isolated.",
        "D": "This is the Wieland-Miescher ketone, the Robinson product of 2-methylcyclohexane-1,3-dione with but-3-en-2-one. The donor here has a five-membered ring, so the fused product is an indenedione, not a naphthalenedione."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q35_robinson_definition",
    "topic": "The Robinson Annulation Reaction",
    "difficulty_level": "Easy",
    "question_text": "Which two reactions, in which order, make up a Robinson annulation, and what ring does it build?",
    "options": [
      {
        "option_id": "A",
        "text": "A Michael addition of a stable enolate (or enamine) to an alpha,beta-unsaturated ketone, then an intramolecular aldol condensation of the resulting 1,5-diketone; the new ring is a cyclohexenone",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "An aldol condensation followed by a Claisen condensation; the new ring is a cyclopentenone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A Dieckmann cyclisation followed by decarboxylation; the new ring is a cyclohexanone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A Michael addition followed by a Dieckmann cyclisation; the new ring is a six-membered beta-keto ester",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Annulation means building a ring onto a molecule, and the Robinson annulation does it with two carbonyl condensations already in hand. First a Michael addition joins a stable donor (a beta-keto ester, beta-diketone or enamine) to an alpha,beta-unsaturated ketone such as but-3-en-2-one, giving a 1,5-diketone. Then that 1,5-diketone does what 1,5-diketones do with base: an intramolecular aldol condensation that closes a six-membered ring and dehydrates to a cyclohexenone. The product is always a substituted 2-cyclohexenone fused to the donor's ring.",
      "approach": "Step 1: Identify the acceptor: an alpha,beta-unsaturated ketone, supplying three of the new ring's carbons plus its carbonyl.\nStep 2: Michael addition of the donor's alpha carbon to the acceptor's beta carbon: a 1,5-diketone.\nStep 3: Intramolecular aldol: the enolate of the new methyl ketone attacks the donor's carbonyl, closing a six-membered ring (a 1,5-diketone always gives a cyclohexenone, 23.6).\nStep 4: Dehydration gives the conjugated cyclohexenone fused to the original ring.",
      "note": "McMurry 23.12 (The Robinson Annulation Reaction) defines the reaction as a two-step process that combines a Michael reaction with an intramolecular aldol reaction, between a nucleophilic donor such as a beta-keto ester, an enamine or a beta-diketone and an alpha,beta-unsaturated ketone acceptor such as 3-buten-2-one, the product being a substituted 2-cyclohexenone, and shows it in the estrone synthesis of Figure 23.9. It is the chapter's illustration that a few fundamental reactions combined in sequence build complex molecules.",
      "options": {
        "A": "Correct. Michael addition to make the 1,5-diketone, then intramolecular aldol condensation to close the cyclohexenone.",
        "B": "An aldol followed by a Claisen would join carbonyl compounds but builds no ring by itself, and neither step here is a Claisen. The ring closure in a Robinson annulation is an aldol of a 1,5-diketone, which gives six-membered, not five-membered, rings.",
        "C": "Dieckmann cyclisation and decarboxylation make 2-substituted cyclic ketones from diesters (23.9), a different sequence with no Michael step and no new enone.",
        "D": "The second step is an aldol, not a Dieckmann: the 1,5-diketone from the Michael addition has no ester to condense. The product is a cyclohexenone, not a beta-keto ester."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q36_aldolase_donor",
    "topic": "Biological Carbonyl Condensation Reactions",
    "difficulty_level": "Medium",
    "question_text": "In glucose biosynthesis, aldolase joins dihydroxyacetone phosphate (a ketone) and glyceraldehyde 3-phosphate (an aldehyde) to give fructose 1,6-bisphosphate. Which partner is the donor, and how does a type I aldolase activate it?",
    "options": [
      {
        "option_id": "A",
        "text": "Dihydroxyacetone phosphate is the donor: the enzyme's lysine NH2 converts its ketone into an enamine, whose nucleophilic carbon adds to the aldehyde carbonyl of glyceraldehyde 3-phosphate; the iminium formed is then hydrolysed",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Glyceraldehyde 3-phosphate is the donor: its aldehyde is deprotonated by a lysine to an enolate that adds to the ketone of dihydroxyacetone phosphate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dihydroxyacetone phosphate is the donor: a Zn2+ ion in the active site removes its alpha proton to give an enolate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both partners are donors, and the enzyme joins their two enolates",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A biological aldol is a mixed aldol between two different partners, which the enzyme keeps clean by activating only one of them. The ketone dihydroxyacetone phosphate is the donor and the aldehyde glyceraldehyde 3-phosphate the acceptor, as in the laboratory, where an aldehyde carbonyl is the better electrophile. Type I aldolases (animals and higher plants) activate the ketone the way a Stork reaction does: a lysine side-chain amine forms an enamine with it, the enamine carbon adds to the aldehyde, and the resulting iminium is hydrolysed. Type II aldolases (fungi and bacteria) instead use an enolate, with Zn2+ complexing the acceptor's carbonyl to make it more electrophilic.",
      "approach": "Step 1: Assign roles: the ketone with an alpha CH2 (dihydroxyacetone phosphate) is the enolisable donor; the aldehyde (glyceraldehyde 3-phosphate) is the acceptor.\nStep 2: Type I: the enzyme's lysine NH2 condenses with the ketone to an iminium ion, which loses an alpha proton to give an enamine, a neutral nucleophile.\nStep 3: The enamine carbon adds to the aldehyde carbonyl; the product is an iminium ion on the enzyme.\nStep 4: Hydrolysis releases fructose 1,6-bisphosphate and regenerates the lysine. In type II aldolases the same C-C bond is made by an enolate of the ketone, with Zn2+ on the aldehyde oxygen as the Lewis acid.",
      "note": "McMurry 23.13 (Some Biological Carbonyl Condensation Reactions) describes both aldolase classes: type I in animals and higher plants operating through an enamine formed with a lysine NH2, type II in fungi and bacteria requiring Zn2+ as a Lewis acid and operating through an enolate, both catalysing the addition of a ketone enolate (or enamine) to an aldehyde; the example is dihydroxyacetone phosphate plus glyceraldehyde 3-phosphate giving fructose 1,6-bisphosphate. The section notes that these are mixed aldols made clean by enzyme selectivity, the biological answer to the four-product problem of 23.5.",
      "options": {
        "A": "Correct. The ketone is the donor, activated as a lysine enamine in a type I aldolase; the aldehyde is the acceptor, and hydrolysis of the iminium releases the product.",
        "B": "The aldehyde is the acceptor, not the donor: its carbonyl is the better electrophile, and the ketone with its alpha CH2 next to the phosphate-bearing carbon is the partner that is activated. Reversing the roles would give a different, branched skeleton, not fructose.",
        "C": "Zn2+ is the type II mechanism, and even there the metal ion complexes the acceptor's carbonyl to make it a better electrophile rather than acting as a base. Type I aldolases use no metal; they use a lysine enamine.",
        "D": "Two enolates cannot bond to each other; an aldol needs one nucleophile and one electrophilic carbonyl. The enzyme activates the ketone only, and the aldehyde carbonyl is attacked as it is."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q37_elucidation_mesityl_oxide",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound R is a colourless liquid (bp 130 °C) with a sweet, penetrating odour. It gives an orange precipitate with 2,4-dinitrophenylhydrazine and a yellow precipitate with I2/NaOH, decolourises Br2 in CCl4 at once, and gives no silver mirror with Tollens' reagent. Combustion analysis gives C 73.4% and H 10.3% by mass. IR: a strong band at $1690\\text{ cm}^{-1}$, a medium band at $1620\\text{ cm}^{-1}$, a weak band at $3020\\text{ cm}^{-1}$, and nothing between 3200 and $3600\\text{ cm}^{-1}$. Mass spectrum: $\\text{M}^+$ at $m/z = 98$, a base peak at 83, and peaks at 55 and 43. The $^1\\text{H}$ NMR spectrum is shown. Which structure is R?",
    "question_smiles": "",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 6.05,
          "y": 1,
          "label": "singlet"
        },
        {
          "x": 2.14,
          "y": 3,
          "label": "singlet"
        },
        {
          "x": 2.12,
          "y": 3,
          "label": "singlet"
        },
        {
          "x": 1.88,
          "y": 3,
          "label": "singlet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "4-Methylpent-3-en-2-one (mesityl oxide)",
        "smiles": "CC(C)=CC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-Methylpent-4-en-2-one",
        "smiles": "CC(=C)CC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Hex-5-en-2-one",
        "smiles": "CC(=O)CCC=C",
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
      "context": "The tests classify the compound before any spectrum is read: 2,4-DNP positive and Tollens negative make it a ketone, iodoform positive makes it a methyl ketone, and instant bromine uptake means a C=C. The formula gives two degrees of unsaturation, one for each. The IR then says how the two are related: a ketone carbonyl at 1690 rather than 1715 is a conjugated one, and the 1620 band is a C=C stretch intensified by conjugation. That is the signature of an aldol condensation product, and the NMR then shows a molecule with no coupled protons at all: four singlets, one of them a lone vinyl hydrogen.",
      "approach": "Step 1: Formula. Per 100 g: C 73.4/12.01 = 6.11, H 10.3/1.008 = 10.2, O by difference 16.3/16.00 = 1.02. Divide by 1.02: C 6, H 10, O 1: C6H10O, M = 98, matching M+. Unsaturation = (2 x 6 + 2 - 10)/2 = 2: one C=O and one C=C.\nStep 2: Class. A methyl ketone (iodoform positive, DNP positive) with a C=C (Br2); C=O at 1690 and C=C at 1620 mean the two are conjugated: an enone.\nStep 3: NMR. 6.05 (1H, s): a vinyl proton with no neighbours. 2.14 (3H, s): the CH3 on the carbonyl. 2.12 and 1.88 (3H each, s): two methyls on the far alkene carbon, inequivalent because one is cis and one trans to the carbonyl. No coupling anywhere: (CH3)2C=CH-C(=O)CH3.\nStep 4: Mass spectrum. 98 M+; 83 base, loss of a methyl to a conjugated, resonance-stabilised cation; 55, loss of the acetyl group (43); 43, the acetyl cation. R is mesityl oxide, the aldol condensation product of acetone.",
      "note": "McMurry 23.3 (Dehydration of Aldol Products: Synthesis of Enones) makes this compound's chemistry: two acetones condense to 4-methylpent-3-en-2-one (Problem 23-3), and the section explains why the conjugated enone is the stable product. The lowering of a ketone C=O stretch to about 1685 by conjugation and the 1620 C=C are in McMurry 19.14, Table 19.2; the iodoform and 2,4-DNP tests are lecture material. Mesityl oxide is also a Michael acceptor, the beta,beta-dimethyl relative of but-3-en-2-one.",
      "options": {
        "A": "Correct. C6H10O with two degrees of unsaturation, a conjugated methyl ketone (1690, iodoform positive) with a C=C (1620, Br2), and an NMR of four singlets including one vinyl proton and two inequivalent methyls on the beta carbon.",
        "B": "4-Methylpent-4-en-2-one is C6H10O and a methyl ketone, but its C=C is not conjugated: the carbonyl would be at 1715, the vinyl group would show two 1H signals near 4.8, and the CH2 between the carbonyl and the alkene would be a 2H singlet near 3.0. Its enone isomer is what base would turn it into.",
        "C": "Hex-5-en-2-one is C6H10O and a methyl ketone with a C=C, but a terminal, unconjugated one: 1715 for the C=O, vinyl protons at 5.0 and 5.8 as coupled multiplets, and two coupled CH2 triplets. The spectrum shows no coupling and a conjugated carbonyl.",
        "D": "Cyclohexanone is C6H10O with its two degrees of unsaturation as a ring and a C=O, so it would not decolourise bromine, has no vinyl proton, is not a methyl ketone (iodoform negative), and absorbs at 1715 with no 1620 band. Its NMR is two multiplets, not four singlets."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch23_q38_elucidation_ethyl_benzoylacetate",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound S is a pale yellow liquid (bp 265 °C). It gives a red-violet colour with aqueous FeCl3 and an orange precipitate with 2,4-dinitrophenylhydrazine; it does not effervesce with NaHCO3 but dissolves in cold aqueous NaOH. Combustion analysis gives C 68.7% and H 6.3% by mass. IR: strong bands at 1740 and $1685\\text{ cm}^{-1}$, bands at 1600 and $1450\\text{ cm}^{-1}$, a strong band at $1280\\text{ cm}^{-1}$, and bands at 760 and $690\\text{ cm}^{-1}$; nothing above $3100\\text{ cm}^{-1}$ apart from weak C-H stretches. $^1\\text{H}$ NMR (keto form): 7.95 (doublet, 2H), 7.58 (triplet, 1H), 7.47 (triplet, 2H), 4.22 (quartet, 2H), 3.99 (singlet, 2H), 1.26 (triplet, 3H); small enol signals near 12.6 and 5.7 δ are omitted. The mass spectrum is shown. Which structure is S?",
    "question_smiles": "",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 51,
          "y": 15
        },
        {
          "x": 77,
          "y": 45
        },
        {
          "x": 105,
          "y": 100
        },
        {
          "x": 147,
          "y": 25
        },
        {
          "x": 192,
          "y": 30
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Ethyl 3-oxo-3-phenylpropanoate (ethyl benzoylacetate)",
        "smiles": "CCOC(=O)CC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethyl 2-oxo-3-phenylpropanoate",
        "smiles": "CCOC(=O)C(=O)Cc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Methyl 3-oxo-4-phenylbutanoate",
        "smiles": "COC(=O)CC(=O)Cc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl 4-oxo-4-phenylbutanoate",
        "smiles": "CCOC(=O)CCC(=O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The tests announce a beta-dicarbonyl compound: soluble in NaOH but not in NaHCO3 means a C-H acid with pKa between about 7 and 15, and only a 1,3-dicarbonyl fits; the FeCl3 colour comes from its chelated enol; the 2,4-DNP precipitate says one carbonyl is a ketone; no bicarbonate reaction rules out an acid. Two carbonyl bands, one at ester frequency and one at aryl ketone frequency, make it a beta-keto ester with the ketone on a benzene ring, and 760/690 make that ring monosubstituted. The formula has six degrees of unsaturation, four for the benzene ring and one for each carbonyl, so there is nothing else unsaturated in the molecule. The NMR then fixes the alkyl part.",
      "approach": "Step 1: Formula. Per 100 g: C 68.7/12.01 = 5.72, H 6.3/1.008 = 6.25, O by difference 25.0/16.00 = 1.56. Divide by 1.56: C 3.67, H 4.0, O 1; times 3: C11H12O3, M = 192, matching M+. Unsaturation = (2 x 11 + 2 - 12)/2 = 6: a benzene ring (4) and two C=O.\nStep 2: Class. NaOH-soluble, NaHCO3-insoluble, FeCl3 and 2,4-DNP positive: a beta-keto ester. IR 1740 (ester C=O) and 1685 (aryl ketone C=O); 760 and 690: monosubstituted benzene.\nStep 3: NMR. 7.95 (2H, d), 7.58 (1H, t), 7.47 (2H, t): a monosubstituted ring with ortho protons deshielded by a carbonyl, so the ketone is on the ring. 4.22 (2H, q) and 1.26 (3H, t): an ethyl ester. 3.99 (2H, s): the CH2 between the two carbonyls. Assemble: PhC(=O)CH2C(=O)OEt.\nStep 4: Mass spectrum. 192 M+; 147, loss of OEt (45); 105 base, the benzoyl cation PhCO+ from cleavage at the CH2; 77, phenyl; 51. S is ethyl benzoylacetate, the mixed Claisen product of ethyl benzoate and ethyl acetate.",
      "note": "McMurry 23.8 (Mixed Claisen Condensations) makes this compound: ethyl benzoate, which has no alpha hydrogen, accepts the enolate of ethyl acetate to give the mixed beta-keto ester. The pKa near 11 of a beta-keto ester (Table 22.1) is what the NaOH/NaHCO3 solubility reads out, and its enol content (22.1) is what FeCl3 detects; neither test is in the text. The ester (1735-1740) and aryl ketone (1685-1690) carbonyl positions are Table 21.3 and Table 19.2; the benzoyl cation at 105 as a base peak is the same fragment that dominates the Ch 21 methyl benzoate spectrum.",
      "options": {
        "A": "Correct. C11H12O3, a beta-keto ester by the solubility and FeCl3 tests, an aryl ketone (1685, deshielded ortho protons), an ethyl ester (quartet and triplet), an isolated CH2 singlet between the carbonyls, and PhCO+ at 105 as the base peak.",
        "B": "Ethyl 2-oxo-3-phenylpropanoate is C11H12O3 but an alpha-keto ester: its two carbonyls are adjacent, so it has no doubly activated CH2, does not dissolve in NaOH or colour FeCl3, its ketone is not on the ring (no 1685 aryl ketone, ortho protons near 7.2 not 7.95), and its mass spectrum has the benzyl cation at 91 as base peak rather than 105.",
        "C": "Methyl 3-oxo-4-phenylbutanoate is a beta-keto ester and C11H12O3, so the FeCl3 and solubility tests would fit, but it has a methyl ester (3H singlet near 3.7, no ethyl quartet/triplet), a benzyl CH2 singlet near 3.8 with the ring protons all near 7.3 (no carbonyl on the ring, no 1685), and a base peak at 91, not 105.",
        "D": "Ethyl 4-oxo-4-phenylbutanoate is a gamma-keto ester, C11H12O3, with the aryl ketone (1685, 105 base peak) and the ethyl ester, but its two CH2 groups are adjacent and appear as two coupled 2H triplets near 3.3 and 2.75, not a singlet; and with no doubly activated hydrogen it neither dissolves in NaOH nor colours FeCl3."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  }
];
