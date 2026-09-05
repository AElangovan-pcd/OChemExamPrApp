// OChemStudyBuddy - McMurry Chapter 31
// Author: A. Elangovan, PhD
var CH31_QUESTIONS = [
  {
    "question_id": "ch31_q1_cationic_reactivity_order",
    "topic": "Chain-Growth Polymers",
    "difficulty_level": "Medium",
    "question_text": "Rank propene (H2C=CHCH3), vinyl chloride (H2C=CHCl), styrene (H2C=CHC6H5) and methyl acrylate (H2C=CHCO2CH3) in order of decreasing reactivity toward cationic polymerization.",
    "options": [
      {
        "option_id": "A",
        "text": "Styrene > propene > vinyl chloride > methyl acrylate",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methyl acrylate > styrene > propene > vinyl chloride",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Propene > styrene > vinyl chloride > methyl acrylate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Vinyl chloride > styrene > propene > methyl acrylate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Cationic polymerization propagates through a carbocation: the acid initiator protonates the CH2 end of the monomer, and the growing chain end is a carbocation at the substituted carbon that adds to the next monomer. The rate therefore follows carbocation stability. A phenyl substituent delocalises the positive charge into the ring (a benzylic cation); a methyl stabilises it by hyperconjugation; a chlorine is inductively withdrawing, and its weak lone-pair donation does not make up for that; an ester carbonyl next to the cationic carbon is strongly destabilising. Only monomers with electron-donating groups polymerise well cationically.",
      "approach": "Step 1: Write the cation each monomer would give: PhCH+-CH2R, CH3CH+-CH2R, ClCH+-CH2R, CH3O2C-CH+-CH2R.\nStep 2: Rank them: benzylic (resonance) > secondary alkyl (hyperconjugation) > alpha-chloro (net withdrawing) > alpha-ester (strongly withdrawing).\nStep 3: The monomer whose cation is most stable reacts fastest: styrene first, then propene, vinyl chloride, and methyl acrylate last.\nStep 4: Check against practice: styrene and isobutylene are cationic monomers; acrylates are anionic or radical monomers and are not polymerised cationically.",
      "note": "McMurry 31.1 (Chain-Growth Polymers) states that acid-catalyzed (cationic) polymerization is effective only with vinyl monomers that contain an electron-donating group capable of stabilizing the chain-carrying carbocation intermediate, and gives 2-methylpropene with BF3 and a trace of water at -80 °C as the commercial example (the text's heading calls it propene, a slip; the structure it discusses is isobutylene). Problem 31-1 asks for this ranking. Carbocation stability is McMurry 7.9 and benzylic stabilisation McMurry 16.9.",
      "options": {
        "A": "Correct. Benzylic resonance beats methyl hyperconjugation, chlorine is net electron-withdrawing, and an ester next to the cation is worst of all.",
        "B": "This is the anionic order turned into a cationic one. An ester group withdraws electrons and destabilises an adjacent carbocation, so methyl acrylate is the least reactive cationic monomer, not the most.",
        "C": "A methyl group stabilises a cation only by hyperconjugation; a phenyl group delocalises the charge over the ring by resonance, which is stronger. Styrene outranks propene.",
        "D": "Chlorine's lone pair can donate by resonance, but its inductive withdrawal dominates, so an alpha-chloro cation is less stable than a simple secondary cation. Vinyl chloride sits below propene, not at the top."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q2_anionic_reactivity_order",
    "topic": "Chain-Growth Polymers",
    "difficulty_level": "Medium",
    "question_text": "Rank propene (H2C=CHCH3), acrylonitrile (H2C=CHCN) and styrene (H2C=CHC6H5) in order of decreasing reactivity toward anionic polymerization.",
    "options": [
      {
        "option_id": "A",
        "text": "Acrylonitrile > styrene > propene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propene > styrene > acrylonitrile",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Styrene > acrylonitrile > propene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acrylonitrile > propene > styrene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Anionic polymerization propagates through a carbanion: the initiator (butyllithium, an amide ion, an alkoxide) adds to the CH2 end of the monomer in a conjugate-addition-like step, and the growing chain end is a carbanion on the substituted carbon. Reactivity follows carbanion stability, which is the reverse of the cationic case. A nitrile delocalises the negative charge onto nitrogen and is the strongest stabiliser here; a phenyl ring delocalises it over the ortho and para carbons; a methyl group is electron-donating and destabilises a carbanion, so propene is essentially inert to anionic initiators.",
      "approach": "Step 1: Write the carbanion each monomer gives: NC-CH(-)-CH2R, PhCH(-)-CH2R, CH3CH(-)-CH2R.\nStep 2: Rank them: nitrile-stabilised (charge on nitrogen in a resonance form) > benzylic > secondary alkyl.\nStep 3: The monomer whose anion is most stable is most reactive: acrylonitrile, then styrene, then propene.\nStep 4: Check against practice: acrylonitrile, methyl methacrylate and styrene are the text's anionic monomers; propene needs a Ziegler-Natta catalyst.",
      "note": "McMurry 31.1 (Chain-Growth Polymers) states that vinyl monomers with electron-withdrawing groups can be polymerized by basic (anionic) catalysts, that the chain-carrying step is a conjugate nucleophilic addition of an anion to the unsaturated monomer (Section 19.13), and that acrylonitrile, methyl methacrylate and styrene can all be polymerized anionically, polystyrene for foam cups being made with butyllithium. Problem 31-2 asks for this ranking. Carbanion stability is McMurry 22.5 in the context of enolates.",
      "options": {
        "A": "Correct. The nitrile stabilises the chain-carrying carbanion most, the phenyl ring next, and a methyl group not at all.",
        "B": "This is the cationic order. A methyl group donates electron density and destabilises a carbanion; propene is the least reactive of the three toward anionic initiators.",
        "C": "Styrene does polymerise anionically, but a benzylic carbanion is less stabilised than one alpha to a nitrile, whose resonance form places the full charge on the electronegative nitrogen.",
        "D": "The nitrile is rightly first, but propene cannot be above styrene: a phenyl group delocalises negative charge, a methyl group repels it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q3_cyanoacrylate_super_glue",
    "topic": "Chain-Growth Polymers",
    "difficulty_level": "Medium",
    "question_text": "Super glue is pure methyl alpha-cyanoacrylate (shown). A drop sets within seconds on contact with skin or with a slightly damp surface. Why?",
    "question_smiles": "C=C(C#N)C(=O)OC",
    "structure_alt": "A terminal C=CH2 whose substituted carbon carries both a nitrile group and a methyl ester group.",
    "options": [
      {
        "option_id": "A",
        "text": "The two electron-withdrawing groups make the CH2 terminus highly electrophilic and stabilise the resulting carbanion, so trace water or basic groups on the surface initiate anionic (conjugate-addition) polymerization",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Moisture hydrolyses the ester to an acid, which then catalyses cationic polymerization",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Oxygen in the air generates radicals that initiate radical polymerization",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Water hydrolyses the nitrile to an amide, which condenses with the ester groups of neighbouring molecules to form a polyamide",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Methyl alpha-cyanoacrylate carries two electron-withdrawing groups, a nitrile and an ester, on the same alkene carbon. Together they make the terminal CH2 an excellent Michael acceptor and make the carbanion formed by addition to it exceptionally stable, delocalised onto both the nitrogen and the ester oxygen. Almost any nucleophile, including water and the weakly basic groups on skin or glass, adds to the CH2 to start a chain, and the chain end is itself a nucleophile that adds to the next monomer. Polymerization is therefore fast, needs no added initiator, and happens exactly where the glue meets a surface. The same reactivity is why cyanoacrylate esters such as Dermabond are used to close wounds.",
      "approach": "Step 1: Identify the alkene's electronic character: two EWGs on one carbon make the other carbon strongly electrophilic.\nStep 2: A surface nucleophile (water, hydroxide, an amine) adds to the CH2 in a conjugate addition, giving a carbanion stabilised by C#N and CO2CH3.\nStep 3: That carbanion adds to the CH2 of another monomer, and so on: anionic chain growth.\nStep 4: No heat, light or added initiator is required, so the reaction is essentially instantaneous on any damp surface.",
      "note": "McMurry 31.1 (Chain-Growth Polymers) states that super glue is simply a solution of pure methyl alpha-cyanoacrylate, which has two electron-withdrawing groups that make anionic addition particularly easy, that trace amounts of water or bases on the surface of an object are sufficient to initiate polymerization, that skin is a good source of the necessary basic initiators, and that related cyanoacrylate esters such as Dermabond are often used in place of sutures. Conjugate addition to activated alkenes is McMurry 19.13.",
      "options": {
        "A": "Correct. Two electron-withdrawing groups make the monomer an outstanding acceptor for anionic chain growth, and water or surface bases are initiator enough.",
        "B": "Ester hydrolysis is slow at room temperature without a catalyst, and even if it happened, a carboxylic acid is far too weak an acid to initiate cationic polymerization; and this monomer, with two EWGs, is the worst possible cationic substrate.",
        "C": "Radical polymerization of cyanoacrylate is possible, but oxygen inhibits radical chains rather than starting them, and radical initiation cannot explain why moisture and skin set the glue in seconds.",
        "D": "Nitrile hydrolysis needs hot acid or base and is far too slow; and an amide-ester condensation would not be a chain reaction. The nitrile stays intact in the polymer, serving as an electron-withdrawing group."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q4_styrene_anionic_intermediate",
    "topic": "Chain-Growth Polymers",
    "difficulty_level": "Medium",
    "question_text": "Polystyrene is made commercially by adding butyllithium to styrene. Which intermediate carries the chain, and how is it stabilised?",
    "options": [
      {
        "option_id": "A",
        "text": "Butyl adds to the CH2 terminus, giving a benzylic carbanion on the phenyl-bearing carbon; the negative charge is delocalised by resonance onto the ortho and para carbons of the ring",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Butyl adds to the phenyl-bearing carbon, giving a primary carbanion stabilised by the inductive effect of the ring",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Butyllithium transfers an electron to styrene, giving a benzylic radical that carries the chain",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Butyllithium abstracts a hydride from styrene, giving a benzylic cation stabilised by the ring",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Butyllithium is a carbanion equivalent. It adds to the unsubstituted end of the styrene double bond, because that puts the negative charge on the carbon bearing the phenyl group, where it is delocalised into the aromatic ring. Three additional resonance forms place the charge on the two ortho carbons and the para carbon. The benzylic organolithium then adds to the CH2 of the next styrene, regenerating the same kind of benzylic anion, so every propagation step is a conjugate-addition-like attack that keeps the charge benzylic. Because nothing terminates the chain until a proton source is added, the process is a living polymerization.",
      "approach": "Step 1: Nucleophile: Bu- (as BuLi). Electrophile: the CH2 carbon of styrene, which leaves the more stable anion behind.\nStep 2: Product of initiation: Bu-CH2-CH(-)Ph, a benzylic carbanion.\nStep 3: Resonance: push the lone pair into the ring to put the charge on ortho, then para, then the other ortho carbon; four contributors in all.\nStep 4: Propagation: the benzylic anion attacks the CH2 of another styrene, and the new chain end is again benzylic.",
      "note": "McMurry 31.1 (Chain-Growth Polymers) states that the polystyrene used in foam coffee cups is prepared by anionic polymerization of styrene using butyllithium as catalyst, and Problem 31-3 asks the student to use resonance structures to explain how the chain-carrying intermediate is stabilized. Benzylic anions and their resonance are the anionic counterpart of the benzylic cations and radicals of McMurry 16.9.",
      "options": {
        "A": "Correct. Addition at CH2 leaves a benzylic carbanion whose charge is shared with the ortho and para carbons of the ring.",
        "B": "Adding at the substituted carbon would leave a primary carbanion with no resonance stabilisation; the phenyl ring's inductive effect is weak and the regiochemistry is decided by resonance. The nucleophile adds at CH2.",
        "C": "Butyllithium is a nucleophile, not a one-electron reductant, and the styrene polymerization it initiates is anionic and living, with none of the termination chemistry a radical chain shows.",
        "D": "Hydride abstraction would require an electrophile; butyllithium is the opposite. And a cationic chain end would be the mechanism for BF3, not for an organolithium."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q5_chain_versus_step_growth",
    "topic": "Chain-Growth Polymers",
    "difficulty_level": "Medium",
    "question_text": "Which of the following polymers is made by step-growth polymerization?",
    "options": [
      {
        "option_id": "A",
        "text": "Poly(ethylene terephthalate), from ethylene glycol and terephthalic acid",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Polystyrene, from styrene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Poly(methyl methacrylate), from methyl methacrylate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Polyisobutylene, from 2-methylpropene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The two classes are distinguished by how the bonds of the polymer form. In chain-growth polymerization an initiator adds to the C=C of a vinyl monomer and the chain grows only at its one reactive end, monomer by monomer; the bond-forming reactions are radical, cationic or anionic additions. In step-growth polymerization every bond forms independently, by an ordinary functional-group reaction between two difunctional molecules, and any two molecules in the pot, monomer or oligomer, can join. Esterification of a diol with a diacid is the classic case: each ester link is a separate condensation with loss of water, and the polymer is a polyester.",
      "approach": "Step 1: Look at the monomers. Ethylene glycol and terephthalic acid have no C=C; they are difunctional molecules that react through their OH and CO2H groups.\nStep 2: The ester bonds of PET form one at a time, anywhere in the mixture: step growth.\nStep 3: Styrene, methyl methacrylate and 2-methylpropene are all vinyl monomers polymerised through their double bond by an initiator: chain growth (anionic or radical, radical or anionic, and cationic respectively).\nStep 4: Only PET is a step-growth polymer.",
      "note": "McMurry 31.1 (Chain-Growth Polymers) defines chain-growth polymers as those produced by chain-reaction polymerization in which an initiator adds to the carbon-carbon double bond of a vinyl monomer to yield a reactive intermediate that reacts with a second monomer, and McMurry 31.4 (Step-Growth Polymers) defines step-growth polymers as those produced by reactions in which each bond in the polymer is formed stepwise, independently of the other bonds, mostly between two difunctional reactants, with nylons and polyesters (Section 21.9) as the examples. Problem 31-20 asks the student to classify five polymers this way.",
      "options": {
        "A": "Correct. PET is a polyester built by independent esterifications between a diol and a diacid, the defining pattern of step growth.",
        "B": "Polystyrene is a chain-growth polymer: an initiator (butyllithium commercially, or a radical) adds to the styrene double bond and the chain grows at its reactive end.",
        "C": "Methyl methacrylate is a vinyl monomer polymerised through its C=C by radical or anionic initiators; the ester group is a substituent, not a reacting functional group.",
        "D": "Polyisobutylene is the textbook cationic chain-growth polymer, made with BF3 and a trace of water at -80 °C."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q6_peg_anionic_ring_opening",
    "topic": "Chain-Growth Polymers",
    "difficulty_level": "Medium",
    "question_text": "Poly(ethylene glycol), HO-(CH2CH2O)n-H, is made by anionic polymerization of ethylene oxide (shown) with NaOH as catalyst. What is the mechanism?",
    "question_smiles": "C1CO1",
    "structure_alt": "A three-membered ring of two carbons and one oxygen: ethylene oxide.",
    "options": [
      {
        "option_id": "A",
        "text": "Hydroxide attacks a ring carbon in an SN2 opening of the strained epoxide; the alkoxide produced attacks the next ethylene oxide the same way, and each opening extends the chain by one -OCH2CH2- unit",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Hydroxide removes a proton from ethylene oxide to give an enolate-like anion that adds to the C-O bond of another epoxide",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Hydroxide adds to the epoxide oxygen, which then bridges two ring carbons of neighbouring molecules",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "NaOH dehydrates ethylene oxide to vinyl alcohol, which polymerises through its C=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Ethylene oxide has no C=C, so its polymerization is not a vinyl chain growth; it is an anionic ring-opening chain growth. The strained three-membered ring is opened by nucleophiles even without acid: hydroxide attacks one ring carbon from the back, the C-O bond breaks, and an alkoxide, HOCH2CH2O-, is left. That alkoxide is itself a nucleophile and opens the next epoxide the same way, giving HO(CH2CH2O)2-, and so on. Every step is an SN2 reaction at an unhindered CH2, and the chain grows only at the alkoxide end until it is protonated on work-up. Because the alkoxide is regenerated each time, a catalytic amount of base carries the whole chain.",
      "approach": "Step 1: Initiation: HO- attacks a CH2 of ethylene oxide (SN2); the ring opens to HOCH2CH2O-.\nStep 2: Propagation: the alkoxide attacks a CH2 of another ethylene oxide; ring opens to HOCH2CH2OCH2CH2O-.\nStep 3: Repeat n times; the chain is a polyether with an alkoxide at the growing end.\nStep 4: Termination on work-up: protonation gives HO-(CH2CH2O)n-H, poly(ethylene glycol).",
      "note": "McMurry 31.1 (Chain-Growth Polymers), Problem 31-15, states that poly(ethylene glycol), or Carbowax, is made by anionic polymerization of ethylene oxide using NaOH as catalyst and asks for a mechanism. Base-promoted ring-opening of epoxides is McMurry 18.6, where the same SN2 attack at the less hindered carbon is described for alkoxides and other strong nucleophiles.",
      "options": {
        "A": "Correct. Each SN2 opening of the strained ring by the chain-end alkoxide adds one oxyethylene unit and regenerates an alkoxide to continue.",
        "B": "Ethylene oxide has no acidic hydrogen and no carbonyl; hydroxide cannot make an enolate from it. The base acts as a nucleophile on the ring carbon, not as a proton acceptor.",
        "C": "The epoxide oxygen is the leaving-group atom, not the electrophilic site; nucleophiles attack carbon and the C-O bond breaks. Oxygen never becomes bonded to three carbons in this chemistry.",
        "D": "Vinyl alcohol is the unstable enol of acetaldehyde and is not formed from ethylene oxide by base; the polymer is a polyether (C-O-C links), which no vinyl polymerization could produce."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q7_nitroethylene_distillation",
    "topic": "Chain-Growth Polymers",
    "difficulty_level": "Medium",
    "question_text": "Attempted purification of nitroethylene, H2C=CHNO2, by distillation often gives a poor recovery and leaves a white coating on the inner walls of the apparatus. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "The nitro group is a powerful electron-withdrawing group, so traces of base or moisture on the glass initiate rapid anionic polymerization; the white coating is poly(nitroethylene) formed where the vapour condenses",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Nitroethylene loses NO2 as a radical on heating and the vinyl radicals couple to a white solid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Nitroethylene dimerises by a Diels-Alder reaction on heating, and the dimer is a white solid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acidic sites on the glass initiate cationic polymerization of the electron-rich double bond",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A nitro group is among the strongest electron-withdrawing substituents, stronger than a nitrile or an ester, so nitroethylene is an exceptionally good Michael acceptor. Any weak nucleophile or base, including hydroxide or water on the surface of glassware, adds to its CH2 to give a carbanion stabilised by the nitro group (a nitronate, with the charge on oxygen), and that anion adds to the next monomer. Warm, concentrated monomer condensing on the walls is exactly the situation in which such a chain runs away, so much of the material polymerises on the glass instead of distilling over. The remedy is scrupulously acid-washed glassware and a trace of acid inhibitor.",
      "approach": "Step 1: Classify the monomer: a vinyl group bearing NO2, an electron-withdrawing group, so anionic polymerization is the danger.\nStep 2: Initiator: adventitious base or water on glass or in the sample adds to CH2, giving CH2(Nu)-CH(-)-NO2, a nitronate anion.\nStep 3: Propagation: the anion adds to the CH2 of another nitroethylene; the chain grows on the surface where it started.\nStep 4: Result: an insoluble white polymer on the walls and less monomer collected, the same behaviour super glue shows for the same reason.",
      "note": "McMurry 31.1 (Chain-Growth Polymers), Problem 31-28, describes the low recovery and white coating seen on distilling nitroethylene and asks for an explanation; the section's account of methyl alpha-cyanoacrylate, polymerised by trace water or bases on surfaces, is the model. The nitro group as an electron-withdrawing substituent is discussed in McMurry 16.4 for aromatic rings and in McMurry 22.1 for the acidity of nitroalkanes.",
      "options": {
        "A": "Correct. The nitro group makes the CH2 terminus electrophilic and the chain-carrying carbanion stable, so surface bases start the polymerization.",
        "B": "Homolysis of the C-N bond of a nitroalkene needs far more energy than a distillation supplies, and vinyl radicals coupling would give small molecules, not a polymer film.",
        "C": "Nitroethylene is a dienophile, not a diene; with no diene present there is no Diels-Alder reaction. And a dimer would distil or crystallise, not coat the walls as an insoluble polymer.",
        "D": "The double bond of nitroethylene is electron-poor, the opposite of what cationic polymerization needs. Acid actually inhibits its polymerization, which is why acid-washed glassware helps."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q8_poly_vinyl_butyral",
    "topic": "Chain-Growth Polymers",
    "difficulty_level": "Hard",
    "question_text": "Poly(vinyl butyral), the laminate in windshield safety glass, has the structure shown (a segment with one butyral ring and one residual acetate). How is it made?",
    "question_smiles": "CC(CC1CC(CC(C)OC(=O)C)OC(CCC)O1)O",
    "structure_alt": "A carbon chain in which a six-membered ring containing two oxygens (a cyclic acetal) links two backbone CH carbons; the acetal carbon carries a propyl group; elsewhere on the chain one CH bears a hydroxyl and another an acetate ester.",
    "options": [
      {
        "option_id": "A",
        "text": "Radical polymerization of vinyl acetate, hydrolysis of the acetate groups to poly(vinyl alcohol), then acid-catalysed reaction with butanal so that pairs of neighbouring hydroxyls form cyclic acetals",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Radical polymerization of vinyl alcohol, then addition of butanal",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cationic polymerization of butyl vinyl ether",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Copolymerization of vinyl acetate with butanal under radical conditions",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The six-membered ring in the structure is an acetal: one carbon bonded to two oxygens and to a propyl group, with the two oxygens on alternating backbone carbons. That is what butanal, CH3CH2CH2CHO, gives when it reacts with a 1,3-diol under acid catalysis, and a chain of 1,3-diols is poly(vinyl alcohol). But vinyl alcohol itself cannot be polymerised: it is the enol of acetaldehyde and does not exist as a monomer. The route therefore goes through vinyl acetate, whose radical polymerization gives poly(vinyl acetate); saponification of the acetate esters gives poly(vinyl alcohol); and acetal formation with butanal converts most hydroxyl pairs to butyral rings, leaving some free hydroxyls and some unhydrolysed acetates, which is why the segment shows one of each.",
      "approach": "Step 1: Read the structure: a 1,3-dioxane ring with a propyl group on the acetal carbon means butanal plus two OH groups on alternate chain carbons.\nStep 2: The chain with OH on alternate carbons is poly(vinyl alcohol); it must come from poly(vinyl acetate), because vinyl alcohol is not a stable monomer.\nStep 3: Sequence: CH2=CHOAc + radical initiator gives -(CH2CHOAc)n-; base hydrolysis gives -(CH2CHOH)n-; butanal and acid give the cyclic acetals.\nStep 4: Residual OH and OAc groups are the parts of the chain the last two steps did not reach.",
      "note": "McMurry 31.1 (Chain-Growth Polymers), Problem 31-29, states that poly(vinyl butyral) is used as the plastic laminate in the preparation of automobile windshield safety glass and asks how you would synthesize it. Acetal formation from an aldehyde and a diol is McMurry 19.10; ester saponification is McMurry 21.6; the instability of vinyl alcohol as the enol of acetaldehyde is McMurry 22.1.",
      "options": {
        "A": "Correct. Vinyl acetate is the polymerisable surrogate for vinyl alcohol; hydrolysis unmasks the diol chain, and butanal forms the cyclic acetals.",
        "B": "Vinyl alcohol is the enol tautomer of acetaldehyde and exists only in trace amounts; there is no such monomer to polymerise. The hydroxyl chain has to be made from a protected precursor.",
        "C": "Butyl vinyl ether would give a polyether with a butoxy group on every other carbon, no ring and no acetal. The acetal carbon here carries a propyl group and two ring oxygens, the signature of butanal plus a diol.",
        "D": "Butanal has no C=C and cannot copolymerise with vinyl acetate through the radical chain; and the ring requires free hydroxyls, which vinyl acetate lacks until it is hydrolysed."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q9_scheme_propiolactone_polyester",
    "topic": "Chain-Growth Polymers",
    "difficulty_level": "Hard",
    "question_text": "beta-Propiolactone is treated with a catalytic amount of NaOH. Which structure is a segment of the polymer formed?",
    "reaction_scheme": {
      "reactants": [
        "O=C1CCO1"
      ],
      "reagents": "NaOH (catalytic)",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A four-membered ring containing one oxygen next to a carbonyl carbon: beta-propiolactone."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A polyester: repeating -O-CH2CH2-C(=O)- units",
        "smiles": "OCCC(=O)OCCC(=O)OCCC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A polyether: repeating -O-CH2CH2CH2- units",
        "smiles": "OCCCOCCCOCCCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Poly(acrylic acid): a carbon backbone with a CO2H on every other carbon",
        "smiles": "CC(C(=O)O)CC(C(=O)O)CC(C(=O)O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-Hydroxypropanoic acid, the ring-opened monomer, which does not polymerise",
        "smiles": "OCCC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "beta-Propiolactone is a strained four-membered cyclic ester. A nucleophile opens it, and the ring-opened product carries a new nucleophilic end (an alkoxide or a carboxylate) that opens the next lactone, so a catalytic amount of base starts an anionic ring-opening chain growth just as with ethylene oxide. Each monomer contributes one -O-CH2CH2-C(=O)- unit: the ring's oxygen, its two CH2 groups and its carbonyl all stay in the chain, joined end to end through ester links. The product is poly(3-hydroxypropanoate), a polyester, the same kind of polymer that PGA, PLA and PHB are.",
      "approach": "Step 1: Hydroxide opens the first lactone; with a beta-lactone attack at the CH2-O carbon (alkyl-oxygen cleavage) is favoured and gives a carboxylate, HOCH2CH2CO2-.\nStep 2: That carboxylate opens the next lactone the same way, forming an ester: HOCH2CH2C(=O)-OCH2CH2CO2-.\nStep 3: Repeat; every unit is joined by an ester, C(=O)-O, and the chain is -(OCH2CH2CO)n-.\nStep 4: The atoms of the monomer are all retained, so the polymer has the same C3H4O2 formula per unit as the lactone.",
      "note": "McMurry 31.1 (Chain-Growth Polymers), Problem 31-30, asks for the structure of the polymer produced by anionic polymerization of beta-propiolactone using NaOH as catalyst. Whether the base attacks the carbonyl carbon (acyl-oxygen cleavage, giving an alkoxide chain end) or the CH2-O carbon (alkyl-oxygen cleavage, giving a carboxylate chain end, the path beta-lactones prefer) the connectivity of the polyester is the same. Lactones as cyclic esters are McMurry 21.6, and the biodegradable polyesters PGA, PLA and PHB are in the chapter's Chemistry Matters essay.",
      "options": {
        "A": "Correct. Ring-opening of each lactone by the chain-end anion joins the units through ester links, giving poly(3-hydroxypropanoate).",
        "B": "A polyether would require the carbonyl carbon to be lost or reduced; it is neither. The C=O stays in every unit, and the links are esters, not simple ethers.",
        "C": "Poly(acrylic acid) has an all-carbon backbone made by vinyl polymerization of acrylic acid. The lactone has no C=C, and base does not dehydrate it to one; ring-opening keeps the oxygen in the chain.",
        "D": "The ring-opened acid does form if a full equivalent of water and base is used, but with catalytic NaOH the anionic chain end attacks another lactone faster than it is protonated, so the product is the polymer, not the monomeric acid."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q10_vinylidene_chloride_tacticity",
    "topic": "Stereochemistry of Polymerization: Ziegler-Natta Catalysts",
    "difficulty_level": "Medium",
    "question_text": "Polypropylene exists in isotactic, syndiotactic and atactic forms, but poly(vinylidene chloride), made from H2C=CCl2 (shown), does not. Why?",
    "question_smiles": "C=C(Cl)Cl",
    "structure_alt": "A terminal C=CH2 whose substituted carbon carries two chlorine atoms.",
    "options": [
      {
        "option_id": "A",
        "text": "Each substituted carbon of the chain carries two identical chlorines and two chain segments, so it is not a stereocentre; tacticity requires a stereocentre in every repeating unit",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The two chlorines are too bulky for the chains to pack in any regular arrangement",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Vinylidene chloride polymerises only by step growth, and step-growth polymers have no tacticity",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The electron-poor double bond cannot coordinate to a Ziegler-Natta catalyst, so no stereocontrol is possible",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tacticity describes the relative configurations of a series of stereocentres along a polymer chain. In polypropylene every other backbone carbon carries H, CH3 and two different chain directions, so it is a stereocentre, and whether successive centres have the same, alternating or random configurations defines isotactic, syndiotactic and atactic. In poly(vinylidene chloride), -(CH2-CCl2)n-, the substituted carbon carries two chlorines: two identical groups on one carbon mean no stereocentre, and with no stereocentres there is nothing for tacticity to describe. The same is true of polyethylene, polyisobutylene and any polymer of a 1,1-disubstituted monomer with identical substituents.",
      "approach": "Step 1: Draw the repeating unit: -CH2-CCl2-.\nStep 2: Test the substituted carbon for a stereocentre: its four groups are Cl, Cl, chain, chain. Two are identical, so it is not a stereocentre.\nStep 3: No stereocentres means no relative configurations to compare; isotactic, syndiotactic and atactic are undefined.\nStep 4: Contrast polypropylene, -CH2-CH(CH3)-, whose substituted carbon has H, CH3 and two chain segments and is a stereocentre.",
      "note": "McMurry 31.2 (Stereochemistry of Polymerization: Ziegler-Natta Catalysts) explains that the polymerization of a substituted vinyl monomer can lead to a polymer with numerous chirality centers in its chain and defines isotactic, syndiotactic and atactic polypropylene (Figure 31.2); Problem 31-4 asks why vinylidene chloride does not polymerize in these three forms. The requirement that a chirality center carry four different groups is McMurry 5.2.",
      "options": {
        "A": "Correct. A carbon bearing two chlorines is not a chirality center, so a poly(vinylidene chloride) chain has no stereocentres and no tacticity.",
        "B": "Chlorine is not especially bulky, and packing is a property question, not a configuration question. Tacticity is about whether stereocentres exist and how they are arranged; here none exist.",
        "C": "Vinylidene chloride is a vinyl monomer and polymerises by chain growth (it is the co-monomer of Saran). Step-growth polymers can in fact have stereocentres; the reason is simpler than the mechanism.",
        "D": "The catalyst is irrelevant: no catalyst, however selective, can create tacticity in a chain that has no stereocentres."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q11_isotactic_optical_activity",
    "topic": "Stereochemistry of Polymerization: Ziegler-Natta Catalysts",
    "difficulty_level": "Hard",
    "question_text": "Isotactic polypropylene contains thousands of stereocentres, all with the same relative configuration. Would you expect a sample of it, or of the syndiotactic or atactic form, to rotate plane-polarized light?",
    "options": [
      {
        "option_id": "A",
        "text": "No, none of them: each stereocentre carries two chain segments that are effectively identical, so the centres are not true chirality centers and the chains are effectively achiral, with internal compensation along the chain",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Yes, the isotactic form rotates strongly because all its centres have the same configuration and their rotations add",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Only the syndiotactic form rotates, because alternating configurations reinforce one another",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Only the atactic form rotates, because random configurations cannot cancel exactly",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A backbone carbon of polypropylene carries H, CH3 and two chain segments. For a chain of any real length those two segments are, to within the negligible difference at the far-off chain ends, the same group, so the carbon is not a genuine chirality center. In an isotactic chain the methyls all lie on one side of the zigzag: the chain has a mirror plane through every stereocentre, and in the syndiotactic chain a glide symmetry relates each centre to the next. Either way the polymer is superimposable on its mirror image and cannot rotate plane-polarized light. The atactic chain contains equal numbers of R-like and S-like environments arranged at random, and the sample as a whole is racemic. A polymer is optically active only when a genuinely chiral unit, such as an (S)-lactic acid residue in PLA, is built into every repeat.",
      "approach": "Step 1: Test a backbone CH(CH3) for chirality: substituents H, CH3, chain to the left, chain to the right. The two chains are the same to within the end groups.\nStep 2: A centre with two identical groups is pseudo-asymmetric at best; its 'configuration' describes the relationship to its neighbours (meso-like or racemic-like), not a handedness.\nStep 3: Isotactic: all meso-like relationships, a mirror plane in the zigzag; syndiotactic: all racemic-like, glide symmetry. Both achiral.\nStep 4: Atactic: a random mixture, no net rotation. None of the three rotates light.",
      "note": "McMurry 31.2 (Stereochemistry of Polymerization: Ziegler-Natta Catalysts), Problem 31-5, notes that polymers such as polypropylene contain a large number of chirality centers and asks whether isotactic, syndiotactic or atactic samples would rotate plane-polarized light. The reasoning is the meso-compound argument of McMurry 5.7: a molecule with a mirror plane is achiral however many stereocentres it has.",
      "options": {
        "A": "Correct. Two identical chain arms make each centre non-chiral in effect, and isotactic and syndiotactic chains possess a symmetry element; atactic chains are racemic. None is optically active.",
        "B": "Same 'configuration' along the chain means the methyls are all on one face of the zigzag, which puts a mirror plane through the chain. Rotations cannot add up in an achiral molecule.",
        "C": "Alternating configurations give a chain related to itself by a glide reflection, again achiral. Neither regular arrangement produces a handed molecule.",
        "D": "A random arrangement gives a random mixture of environments, which averages to zero rotation, and each centre is in any case only pseudo-asymmetric. Randomness produces a racemate, not optical activity."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q12_ziegler_natta_mechanism",
    "topic": "Stereochemistry of Polymerization: Ziegler-Natta Catalysts",
    "difficulty_level": "Medium",
    "question_text": "A Ziegler-Natta catalyst, made from triethylaluminium and titanium tetrachloride, polymerises ethylene to linear high-density polyethylene. How does the active catalyst extend the chain?",
    "options": [
      {
        "option_id": "A",
        "text": "The active species is an alkyltitanium with a vacant coordination site; ethylene coordinates to the titanium and then inserts into the carbon-titanium bond, lengthening the alkyl chain by two carbons and reopening the vacant site",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Titanium tetrachloride protonates ethylene to a carbocation, which the ethyl group of the aluminium compound traps",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The alkylaluminium homolyses to an ethyl radical that adds to ethylene and carries a radical chain",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Titanium abstracts a hydride from ethylene to form a vinyl cation that adds to the next ethylene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Treating TiCl4 with an alkylaluminium transfers an alkyl group to titanium and generates a coordinatively unsaturated alkyltitanium species, the working catalyst. Its chemistry is a two-step cycle: the alkene binds to the empty site on titanium, and the coordinated alkene then migrates into the Ti-C bond (a migratory insertion), so that the chain is now two carbons longer and is still attached to titanium, with the coordination site empty again. Because the monomer must bind to the metal before it inserts, the metal's environment controls which face of a propylene molecule is presented, and that is the origin of the stereocontrol that gives isotactic or syndiotactic polypropylene. No radicals, cations or anions are free in solution, so there is no chain transfer and no branching.",
      "approach": "Step 1: Activation: Et3Al alkylates TiCl4 to give an ethyltitanium with a vacant site.\nStep 2: Coordination: ethylene's pi bond binds to the vacant site on Ti.\nStep 3: Insertion: the alkyl group migrates onto one alkene carbon while the other alkene carbon bonds to Ti; the chain is now Ti-CH2CH2-R and a site is vacant again.\nStep 4: Repeat thousands of times; the linear chain, free of the branching that radical chain transfer causes, packs into crystallites and is high-density polyethylene.",
      "note": "McMurry 31.2 (Stereochemistry of Polymerization: Ziegler-Natta Catalysts) describes Ziegler-Natta catalysts as organometallic transition-metal complexes prepared by treatment of an alkylaluminum with a titanium compound, triethylaluminum with titanium tetrachloride being typical, and states that the active form is an alkyltitanium intermediate with a vacant coordination site, that coordination of alkene monomer to the titanium occurs and the coordinated alkene then inserts into the carbon-titanium bond to extend the alkyl chain, and that a new coordination site opens during the insertion so the process repeats. The same section credits the catalysts with linear, unbranched, stereocontrolled polymers.",
      "options": {
        "A": "Correct. Coordination of the alkene to the vacant site and migratory insertion into the Ti-C bond is the propagation cycle, and it is what gives linear, stereoregular chains.",
        "B": "TiCl4 is a Lewis acid, not a proton acid, and a carbocation route is cationic polymerization, which ethylene does not undergo at all (its cation would be primary). The chain grows on the metal, not as a free cation.",
        "C": "A radical route is exactly what Ziegler-Natta catalysts avoid: radical polymerization of ethylene gives branched low-density polyethylene through hydrogen-abstraction chain transfer, and the Al-C bond does not homolyse under the mild conditions used.",
        "D": "Vinyl cations are very high in energy and play no part; the alkene is not oxidised or deprotonated. It is coordinated intact and inserted intact, with both carbons ending up in the chain."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q13_hdpe_versus_ldpe",
    "topic": "Stereochemistry of Polymerization: Ziegler-Natta Catalysts",
    "difficulty_level": "Medium",
    "question_text": "Polyethylene made with a Ziegler-Natta catalyst (high-density polyethylene) is stronger, denser and more heat-resistant than polyethylene made by radical polymerization (low-density polyethylene). What structural difference is responsible?",
    "options": [
      {
        "option_id": "A",
        "text": "Ziegler-Natta polyethylene has a much higher molecular weight, and chain length alone sets the density and strength",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Ziegler-Natta polyethylene is cross-linked by residual titanium, whereas radical polyethylene is not",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ziegler-Natta chains are linear and pack closely into crystallites held by van der Waals forces; radical polymerization gives chains with many branches, formed when the growing radical abstracts a hydrogen from its own chain, and branches keep the chains apart",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Ziegler-Natta polyethylene is isotactic and radical polyethylene is atactic",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Both polymers are chemically polyethylene; they differ in chain architecture. A growing radical chain end can bend back and abstract a hydrogen from a CH2 several carbons behind it (backbiting), which moves the radical into the chain and starts a side branch, so radical polyethylene carries many short branches. Branches prevent the zigzag chains from lying side by side, so the material is less crystalline, less dense and softer. A Ziegler-Natta catalyst grows the chain on the metal with no free radical to abstract hydrogens, so the chains are essentially unbranched; they pack into extensive crystallites, and the close packing maximises the van der Waals attractions that give high-density polyethylene its strength and higher softening temperature.",
      "approach": "Step 1: Identify the side reaction of radical growth: intramolecular hydrogen abstraction (chain transfer to the polymer's own backbone), which produces branches.\nStep 2: Recognise that coordination-insertion on titanium has no such step, so the chain is linear.\nStep 3: Relate architecture to packing: linear chains form crystallites; branched chains cannot.\nStep 4: Relate packing to properties: more crystallinity means higher density, greater strength and higher melting range.",
      "note": "McMurry 31.2 (Stereochemistry of Polymerization: Ziegler-Natta Catalysts) states that the linear polyethylene produced by the Ziegler-Natta process, called high-density polyethylene, is a highly crystalline polymer with 4000 to 7000 ethylene units per chain and molecular weights of 100,000 to 200,000 amu, and has greater strength and heat resistance than the branched product of radical-induced polymerization, called low-density polyethylene. The branching mechanism of radical polymerization is McMurry 8.10, and crystallites and packing are McMurry 31.7.",
      "options": {
        "A": "Chain length is not the variable: the two materials overlap in molecular weight, and density is set by how closely chains pack, not by how long they are. A branched chain of any length packs poorly; a linear one crystallises. Molecular weight matters for other properties (the HMW and UHMW grades), but it is branching that separates HDPE from LDPE.",
        "B": "There is no cross-linking in either polymer, and the trace of catalyst residue plays no structural role. Both are thermoplastics that melt and can be remoulded.",
        "C": "Correct. Linear chains from coordination-insertion crystallise; branched chains from radical backbiting do not, and crystallinity is what sets density, strength and heat resistance.",
        "D": "Polyethylene has no substituents on its backbone and therefore no stereocentres; tacticity does not apply to it. Stereocontrol matters for propylene, not ethylene."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q14_butyl_rubber_segment",
    "topic": "Copolymers",
    "difficulty_level": "Hard",
    "question_text": "Butyl rubber is a copolymer of 2-methylpropene (isobutylene) with a few percent of isoprene, made with a cationic initiator, the isoprene being incorporated by 1,4-addition. Which structure shows an alternating segment (isobutylene unit, isoprene unit, isobutylene unit)?",
    "options": [
      {
        "option_id": "A",
        "text": "A CMe2 unit, then a CH2-C(CH3)=CH-CH2 unit with the double bond in the chain, then a CMe2 unit",
        "smiles": "CC(C)(C)C/C(C)=C/CCC(C)(C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A CMe2 unit, then an isoprene unit joined through C1 and C2 with a pendant vinyl group, then a CMe2 unit",
        "smiles": "CC(C)(C)CC(C)(C=C)CC(C)(C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Three isobutylene units in a row",
        "smiles": "CC(C)(C)CC(C)(C)CC(C)(C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A CMe2 unit, then an isoprene unit joined through C3 and C4 with a pendant isopropenyl group, then a CMe2 unit",
        "smiles": "CC(C)(C)CC(C(C)=C)CC(C)(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "In cationic polymerization the chain-end carbocation adds to the CH2 of the next monomer. Isobutylene gives a tertiary cation and contributes a -CH2-C(CH3)2- unit. When the cation meets isoprene it adds to C1 to give an allylic cation delocalised over C2 and C4; capture at C4 by the next monomer (1,4-addition) leaves a -CH2-C(CH3)=CH-CH2- unit with the double bond in the backbone. Those residual double bonds are the point of adding isoprene: they are the sites vulcanisation later cross-links, while the saturated polyisobutylene chain gives the rubber its impermeability to gases. The double bond in the 1,4-unit is trisubstituted and predominantly E.",
      "approach": "Step 1: Isobutylene unit: cation adds to CH2=C(CH3)2 at CH2, leaving the tertiary cation; the unit is CH2-C(CH3)2.\nStep 2: Isoprene unit: the cation adds to isoprene's C1 (the CH2 of the CH2=C(CH3) end), giving an allylic cation at C2/C4.\nStep 3: 1,4-addition: the next isobutylene is attacked by the C4 end of the allylic cation, so the chain continues from C4 and the isoprene unit reads CH2-C(CH3)=CH-CH2 with a trisubstituted double bond in the chain.\nStep 4: Assemble: -CH2C(CH3)2-CH2C(CH3)=CHCH2-CH2C(CH3)2-, structure A.",
      "note": "McMurry 31.3 (Copolymers), Problem 31-6, asks for the structure of an alternating segment of butyl rubber, a copolymer of isoprene and isobutylene prepared using a cationic initiator, and Table 31.1 lists butyl rubber's use in inner tubes. The 1,4-addition of an electrophile to a conjugated diene through an allylic cation is McMurry 14.2, and the cationic polymerization of isobutylene is McMurry 31.1 and 8.10.",
      "options": {
        "A": "Correct. The isoprene unit enters by 1,4-addition, so its double bond sits in the backbone between the CH3-bearing carbon and the next CH2, flanked by CMe2 units.",
        "B": "This is a 1,2-unit: the chain runs through C1 and C2 of isoprene and leaves the vinyl group hanging. Cationic polymerization of a conjugated diene goes mainly 1,4, through the more stable, more substituted allylic terminus.",
        "C": "This is polyisobutylene with no isoprene at all. It has no double bonds and cannot be vulcanised, which is why the copolymer with isoprene is used instead.",
        "D": "A 3,4-unit would leave an isopropenyl group pendant and the chain running through C3 and C4. The question specifies 1,4-addition, which puts the double bond in the chain."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q15_graft_copolymer_irradiation",
    "topic": "Copolymers",
    "difficulty_level": "Medium",
    "question_text": "Irradiating poly(1,3-butadiene) with gamma rays and then adding styrene gives a graft copolymer used for rubber shoe soles. What is its structure and how does it form?",
    "options": [
      {
        "option_id": "A",
        "text": "The radiation abstracts hydrogen atoms (mainly the allylic ones) from the polybutadiene backbone at random points; each backbone radical initiates polymerization of styrene, so polystyrene branches grow out from a polybutadiene main chain",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Styrene adds across the backbone double bonds in a Diels-Alder reaction, giving cyclohexene rings along the chain",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The radiation breaks the polybutadiene into short chains, which then join end to end with polystyrene blocks",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Styrene inserts one unit at a time between butadiene units, giving a random copolymer",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A graft copolymer has a backbone of one homopolymer with branches of a second homopolymer attached along it, and it is made by creating reactive sites on a finished chain in the presence of the second monomer. Gamma irradiation does that: it knocks hydrogen atoms off the chain at random positions, preferentially the allylic C-H bonds next to the backbone double bonds, whose radicals are resonance-stabilised. Each carbon radical so formed adds to the double bond of styrene, and the resulting benzylic radical adds to more styrene, so a polystyrene chain grows from that point. The product keeps the elastomeric polybutadiene backbone and gains the toughness of polystyrene side chains.",
      "approach": "Step 1: Irradiate: a C-H bond on the backbone homolyses; the allylic radical is the most easily formed.\nStep 2: Initiation of the branch: the backbone radical adds to the CH2 of styrene, giving a benzylic radical on the new branch.\nStep 3: Propagation: the branch radical adds styrene after styrene; termination by coupling or disproportionation.\nStep 4: Structure: polybutadiene main chain carrying polystyrene branches at random intervals, a graft copolymer.",
      "note": "McMurry 31.3 (Copolymers) states that graft copolymers are made by gamma irradiation of a completed homopolymer chain in the presence of the second monomer, the high-energy irradiation knocking hydrogen atoms off the homopolymer chain at random points and generating new radical sites that initiate polymerization of the added monomer; Problem 31-7 asks for a segment of the styrene-butadiene graft copolymer used for shoe soles. Allylic radical stability is McMurry 10.3.",
      "options": {
        "A": "Correct. Radiation creates backbone radicals that start polystyrene branches; the product is polybutadiene grafted with polystyrene.",
        "B": "Styrene is a dienophile only toward a conjugated diene, and the isolated backbone double bonds of polybutadiene are not dienes. No pericyclic addition occurs, and the product is not a ring-containing chain.",
        "C": "Chain scission followed by end-joining would give a block copolymer, and radiation does not join chain ends. The observed product has its polystyrene as side chains on an intact backbone.",
        "D": "Monomer cannot insert into an existing backbone; polymer chains grow only at radical ends. The styrene units form new branches, not interleaved units, so the copolymer is grafted, not random."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q16_block_copolymer_preparation",
    "topic": "Copolymers",
    "difficulty_level": "Medium",
    "question_text": "Which procedure gives a block copolymer of styrene and 1,3-butadiene, one in which long runs of styrene units alternate with long runs of butadiene units in the same chain?",
    "options": [
      {
        "option_id": "A",
        "text": "Polymerise styrene with butyllithium, and when the styrene is consumed add an excess of butadiene to the still-active chain ends",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Mix styrene and butadiene in the desired ratio and add a radical initiator",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Irradiate polybutadiene with gamma rays in the presence of styrene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Melt polystyrene and polybutadiene together and extrude the blend",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A block copolymer requires that a chain of one monomer be completed and then continued with the second monomer from the same growing end. Anionic polymerization makes that possible because it is living: the benzylic carbanion at the end of a polystyrene chain does not terminate on its own, so when the first monomer is exhausted the chain ends simply wait. Adding butadiene restarts growth, and every chain acquires a polybutadiene block joined to its polystyrene block. Adding styrene again would give a third block (this is how styrene-butadiene-styrene thermoplastic elastomers are made). A radical mixture gives random placement; irradiation of a finished chain gives grafts; blending gives two separate polymers with no covalent link.",
      "approach": "Step 1: Initiate styrene with BuLi; grow polystyrene with a living carbanion end.\nStep 2: Let the styrene run out; the chain ends remain active because nothing terminates them.\nStep 3: Add butadiene in excess; the polystyryl anion adds to it and a polybutadiene block grows from the same end.\nStep 4: Quench with a proton source when the second block is the desired length.",
      "note": "McMurry 31.3 (Copolymers) states that block copolymers are prepared by initiating the polymerization of one monomer as if growing a homopolymer chain and then adding an excess of the second monomer to the still-active reaction mix, that graft copolymers are made by gamma irradiation of a completed homopolymer chain in the presence of the second monomer, and that copolymerising a mixture gives random or alternating distributions depending on the monomers' relative reactivities. Living anionic polymerization of styrene with butyllithium is McMurry 31.1.",
      "options": {
        "A": "Correct. The living anionic chain end survives the first monomer's exhaustion and continues into the second, building one block after another.",
        "B": "Copolymerising a mixture places the monomers in the chain in the order they happen to be captured, giving a random (or in special cases alternating) copolymer, SBR being the styrene-butadiene example. Long single-monomer runs do not form.",
        "C": "Irradiation of a finished homopolymer in the presence of a second monomer gives a graft copolymer, with the second polymer as side branches, not as blocks in the main chain.",
        "D": "Blending mixes two homopolymers physically; no covalent bonds form between them, and the two phase-separate. A block copolymer has both polymers in one molecule."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q17_nylon_6_caprolactam",
    "topic": "Step-Growth Polymers",
    "difficulty_level": "Medium",
    "question_text": "Nylon 6 is made by heating caprolactam (shown) with a small amount of water. What does the water do, and what is the chain-extending step?",
    "question_smiles": "O=C1CCCCCN1",
    "structure_alt": "A seven-membered ring containing one nitrogen bonded to a carbonyl carbon: a cyclic amide with five CH2 groups.",
    "options": [
      {
        "option_id": "A",
        "text": "Water hydrolyses a few caprolactam molecules to 6-aminohexanoic acid; the amino group of that acid, and of every chain end afterwards, adds to the carbonyl of another caprolactam and opens the ring in a nucleophilic acyl substitution, giving a longer chain with a new terminal NH2",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Water hydrolyses all the caprolactam to 6-aminohexanoic acid, which then condenses with itself by losing water at every amide bond",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Water adds to each lactam carbonyl and the resulting hydroxyl groups link the rings through ester bonds",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Water protonates the lactam nitrogen and the ring opens by SN2 attack of the next lactam at the N-CH2 carbon",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Caprolactam is the cyclic amide of 6-aminohexanoic acid. Only a trace of water is added, enough to hydrolyse a few rings and release a few molecules of the free amino acid. Each of those carries a primary amine, and an amine is a good nucleophile toward an amide carbonyl when the amide is a ring: the amine adds to the lactam's C=O, the tetrahedral intermediate collapses, and the ring nitrogen departs as the leaving group, but because it is still attached to the chain by its five CH2 groups, the result is a chain one caprolactam unit longer with a fresh NH2 at its end. That end opens the next lactam, and so on. Nylon 6 therefore has the repeating unit -NH(CH2)5C(=O)-, the same amide link as nylon 66 but from a single monomer.",
      "approach": "Step 1: Initiation: H2O + caprolactam gives H2N(CH2)5CO2H (a hydrolysis, slow, only a little needed).\nStep 2: Propagation: the NH2 attacks the lactam carbonyl; the tetrahedral intermediate expels the ring N-H, which is bonded to the chain being added.\nStep 3: The product is H2N(CH2)5C(=O)NH(CH2)5CO2H: the amine end has moved to the new unit.\nStep 4: Repeat: every addition opens one ring and regenerates a terminal amine; the chain is -(NH(CH2)5CO)n-.",
      "note": "McMurry 31.4 (Step-Growth Polymers) states that nylon 6 is made by polymerization of the six-carbon caprolactam, that the reaction is initiated by adding a small amount of water which hydrolyzes some caprolactam to 6-aminohexanoic acid, and that nucleophilic addition of the amino group to caprolactam then propagates the polymerization. Nucleophilic acyl substitution of amides and lactams is McMurry 21.7.",
      "options": {
        "A": "Correct. A trace of water makes the first amine, and the amine ring-opens lactam after lactam by nucleophilic acyl substitution, each opening making a new amine end.",
        "B": "Only a small amount of water is used, and complete hydrolysis followed by condensation is not the pathway; the chain grows by ring-opening addition, which forms each amide without losing water.",
        "C": "The chain of nylon 6 is joined by amide bonds, not ester bonds; the nucleophile that opens the ring is the amine end of a chain, not a hydroxyl.",
        "D": "The N-CH2 carbon of an amide is not electrophilic and lactam nitrogen is a poor SN2 nucleophile; the reactive site of a lactam is its carbonyl carbon, attacked by an amine."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q18_pet_structure",
    "topic": "Step-Growth Polymers",
    "difficulty_level": "Medium",
    "question_text": "Poly(ethylene terephthalate), PET, is made by heating ethylene glycol with terephthalic acid (benzene-1,4-dicarboxylic acid). Which structure is a segment of PET?",
    "options": [
      {
        "option_id": "A",
        "text": "A para-disubstituted benzene ring whose two carbonyl carbons are linked through ester oxygens to OCH2CH2O units",
        "smiles": "OCCOC(=O)c1ccc(C(=O)OCCO)cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "OCH2CH2O units joined by carbonate groups, with no benzene ring",
        "smiles": "OCCOC(=O)OCCOC(=O)OCCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A para-disubstituted benzene ring whose two carbonyls are linked through amide nitrogens to NHCH2CH2NH units",
        "smiles": "NCCNC(=O)c1ccc(C(=O)NCCN)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A para-disubstituted benzene ring joined through ether oxygens to OCH2CH2O units, with no carbonyls",
        "smiles": "OCCOc1ccc(OCCO)cc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A polyester from a diol and a diacid alternates the two monomers: each acid carbonyl is esterified by one hydroxyl of a glycol, and the glycol's other hydroxyl esterifies the next acid. In PET the diacid is terephthalic acid, so every repeat unit contains a 1,4-disubstituted benzene ring carrying two C(=O)O groups, and the diol is ethylene glycol, so the rings are connected by OCH2CH2O bridges. Each ester link forms by a Fischer esterification (or, industrially, by transesterification of the dimethyl ester), with water or methanol lost at each step, and the reaction is a step growth because every ester bond forms independently.",
      "approach": "Step 1: Write the monomers: HOCH2CH2OH and HO2C-C6H4-CO2H (para).\nStep 2: Join an OH to a CO2H with loss of water: an ester, -CH2CH2-O-C(=O)-C6H4-.\nStep 3: The other CO2H of the acid esterifies the next glycol; the other OH of the glycol esterifies the next acid. The repeat unit is -OCH2CH2O-C(=O)-C6H4-C(=O)-.\nStep 4: Check the segment drawn: ring, two ester carbonyls, two OCH2CH2O bridges; formula C10H8O4 per repeat, consistent with C2H6O2 + C8H6O4 - 2 H2O.",
      "note": "McMurry 31.4 (Step-Growth Polymers), Problem 31-8, states that poly(ethylene terephthalate), or PET, is a polyester used to make soft-drink bottles, prepared by reaction of ethylene glycol with 1,4-benzenedicarboxylic acid (terephthalic acid), and asks for its structure. Polyesters as step-growth polymers are introduced in McMurry 21.9, and PET's use as a thermoplastic and its recycling code (1) appear in McMurry 31.7 and the Chemistry Matters essay.",
      "options": {
        "A": "Correct. Terephthalate rings alternate with ethylene glycol units through ester links.",
        "B": "A carbonate has a carbonyl bonded to two OR groups; that is what diphenyl carbonate or phosgene gives with a diol (Lexan chemistry). Terephthalic acid supplies a benzene ring and two acid carbonyls, which this structure lacks.",
        "C": "Amide links would come from a diamine, not a diol. This is the polyamide from ethylenediamine and terephthalic acid; PET is a polyester, made from ethylene glycol.",
        "D": "This polyether would need hydroquinone and an alkylating agent; there are no carbonyls, so the acid's CO2H groups have vanished. Esterification keeps the carbonyl in every link."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q19_lexan_polycarbonate",
    "topic": "Step-Growth Polymers",
    "difficulty_level": "Medium",
    "question_text": "Lexan, the polycarbonate used in bicycle helmets and bulletproof glass, is made from diphenyl carbonate and bisphenol A (shown). What reaction links the monomers, and what is the by-product?",
    "question_smiles": "CC(C)(c1ccc(O)cc1)c1ccc(O)cc1",
    "structure_alt": "Two para-hydroxyphenyl rings joined through a single carbon that also carries two methyl groups.",
    "options": [
      {
        "option_id": "A",
        "text": "Transesterification: each phenolic hydroxyl of bisphenol A attacks the carbonate carbonyl and displaces phenoxide (a nucleophilic acyl substitution), so the chain is -O-Ar-C(CH3)2-Ar-O-C(=O)- and phenol is the by-product",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Nucleophilic aromatic substitution: the phenoxide displaces the phenyl group of diphenyl carbonate at the ring carbon, releasing benzene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Radical coupling of the aromatic rings, releasing hydrogen",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Addition of the phenols to the carbonate carbonyl followed by loss of CO2, giving a polyether",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carbonate is a carbonyl compound with two OR groups, a diester of carbonic acid, and it undergoes the same nucleophilic acyl substitution as any ester: a nucleophile adds to the carbonyl, and the tetrahedral intermediate expels the better leaving group. Phenoxide is an excellent leaving group (phenol's pKa is about 10), so a phenol attacking diphenyl carbonate exchanges one aryloxy group for another, a transesterification. Bisphenol A has two phenolic hydroxyls and diphenyl carbonate has two phenoxy groups to lose, so the two difunctional monomers alternate into a chain in which every bisphenol unit is joined to the next by a carbonate group, O-C(=O)-O, and two molecules of phenol are released per repeat. The reaction is driven by distilling off the phenol.",
      "approach": "Step 1: Nucleophile: an ArO-H (or ArO-) of bisphenol A. Electrophile: the carbonyl carbon of PhO-C(=O)-OPh.\nStep 2: Addition gives a tetrahedral intermediate with three oxygens; it collapses by expelling PhO-, which is protonated to phenol.\nStep 3: The product is a mixed carbonate, Ar-O-C(=O)-OPh, which reacts with the next bisphenol the same way.\nStep 4: Repeat unit: -O-C6H4-C(CH3)2-C6H4-O-C(=O)-; by-product: phenol, two per unit.",
      "note": "McMurry 31.4 (Step-Growth Polymers) states that polycarbonates are like polyesters but their carbonyl group is linked to two OR groups, that Lexan is a polycarbonate prepared from diphenyl carbonate and a diphenol called bisphenol A, and that Lexan has unusually high impact strength, making it valuable for machinery housings, telephones, bicycle safety helmets and bulletproof glass. Transesterification as a nucleophilic acyl substitution is McMurry 21.6.",
      "options": {
        "A": "Correct. Phenoxide is a good leaving group, so the diphenol transesterifies the carbonate; carbonate links form and phenol is distilled off.",
        "B": "The reactive site of diphenyl carbonate is its carbonyl carbon, not an aromatic carbon; an unactivated phenyl ring does not undergo nucleophilic aromatic substitution, and the by-product is phenol, not benzene.",
        "C": "No radicals are involved and no C-C bonds form between rings; the link between monomer units is a carbonate oxygen-carbonyl-oxygen bridge.",
        "D": "The carbonate carbonyl survives in the polymer; it is what makes Lexan a polycarbonate. A polyether would require the carbonyl to be lost, and no CO2 is evolved."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q20_urethane_mechanism",
    "topic": "Step-Growth Polymers",
    "difficulty_level": "Medium",
    "question_text": "A polyurethane is made from a diol and a diisocyanate such as toluene-2,4-diisocyanate. What is the mechanism of the reaction that forms each urethane link, R-NH-C(=O)-OR'?",
    "options": [
      {
        "option_id": "A",
        "text": "Nucleophilic addition: the alcohol oxygen attacks the central carbon of the N=C=O group, the C=N pi bond takes the electrons onto nitrogen, and a proton moves from oxygen to nitrogen; no atoms are lost",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Nucleophilic acyl substitution: the alcohol displaces the isocyanate oxygen, releasing water",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "SN2: the isocyanate nitrogen attacks the alcohol carbon and hydroxide leaves",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The alcohol adds across the C=O bond of the isocyanate and the C=N bond is then reduced",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An isocyanate, R-N=C=O, has a central sp carbon flanked by two electronegative atoms, so that carbon is strongly electrophilic, much as the carbon of CO2 is. An alcohol adds to it: oxygen attacks carbon, the C=N pi electrons move onto nitrogen, and a proton transfers from the oxonium oxygen to the nitrogen anion. The product, R-NH-C(=O)-OR', is a urethane (a carbamate ester), a carbonyl flanked by one OR and one NR2, halfway between a carbonate and a urea. Nothing leaves: a urethane forms by addition, which is why polyurethane formation, unlike polyester or polyamide formation, releases no water. A diol and a diisocyanate therefore alternate into a chain with urethane links.",
      "approach": "Step 1: Identify the electrophile: the central carbon of N=C=O, doubly bonded to both N and O.\nStep 2: The alcohol oxygen adds to that carbon; the C=N pi bond breaks and the electrons go to nitrogen.\nStep 3: Proton transfer from the positively charged oxygen to the negatively charged nitrogen (directly or through solvent).\nStep 4: Product: R-NH-C(=O)-O-R', with the C=O intact and no by-product; repeat at the other isocyanate and the other hydroxyl to grow the chain.",
      "note": "McMurry 31.4 (Step-Growth Polymers) states that a urethane is a carbonyl-containing functional group in which the carbonyl carbon is bonded to both an OR group and an NR2 group, halfway between a carbonate and a urea, that a urethane is typically prepared by nucleophilic addition reaction of an alcohol with an isocyanate (R-N=C=O), and that a polyurethane is prepared by reaction of a diol with a diisocyanate, often toluene-2,4-diisocyanate; Problem 31-9 asks for the mechanism. Nucleophilic addition to a C=N is the imine chemistry of McMurry 19.8 in reverse.",
      "options": {
        "A": "Correct. The alcohol adds across the C=N of the heterocumulene; a proton shift gives the carbamate ester with nothing lost.",
        "B": "No substitution takes place and no water forms. Both heteroatoms of the isocyanate remain in the product, one as C=O and one as N-H.",
        "C": "The alcohol's carbon is not electrophilic and hydroxide is a poor leaving group; and the nitrogen of an isocyanate is not the nucleophile. The reactive pair is alcohol oxygen and isocyanate carbon.",
        "D": "The C=O of the isocyanate survives as the urethane carbonyl. Addition across C=N, not C=O, is what puts the alcohol oxygen on carbon and the hydrogen on nitrogen; no reduction occurs."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q21_polyurethane_foam_co2",
    "topic": "Step-Growth Polymers",
    "difficulty_level": "Medium",
    "question_text": "Adding a small amount of water during polyurethane formation makes the polymer foam. What is the gas, and how does it arise?",
    "options": [
      {
        "option_id": "A",
        "text": "Carbon dioxide: water adds to an isocyanate to give a carbamic acid, R-NH-CO2H, which spontaneously loses CO2 to give an amine (the amine then adds to another isocyanate, forming a urea link)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Steam: the heat of polymerization boils the water",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Carbon monoxide: the isocyanate decomposes to CO and an amine",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Hydrogen: the diol is dehydrogenated by the isocyanate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Water is a nucleophile like an alcohol and adds to an isocyanate the same way, but the product, R-NH-C(=O)-OH, is a carbamic acid rather than a carbamate ester. Carbamic acids are unstable: they lose carbon dioxide at once to give the amine, R-NH2. The CO2 forms as bubbles inside the polymerising mass and is trapped as the polymer sets, giving a foam. The amine released is itself a nucleophile and adds to another isocyanate to give a urea link, R-NH-C(=O)-NH-R, so a little water also introduces urea groups into the chain. Rigid insulating foams use a polyol so that the network is heavily cross-linked; soft foams use a diol.",
      "approach": "Step 1: H2O adds to R-N=C=O exactly as an alcohol does: R-NH-C(=O)-OH, a carbamic acid.\nStep 2: The carbamic acid decarboxylates: R-NH2 + CO2.\nStep 3: CO2 nucleates bubbles in the viscous, setting polymer: foam.\nStep 4: R-NH2 adds to another isocyanate, giving a urea and consuming two isocyanate groups per water molecule.",
      "note": "McMurry 31.4 (Step-Growth Polymers) states that foaming occurs when a small amount of water is added during polymerization, giving a carbamic acid intermediate that spontaneously loses bubbles of CO2, and that polyurethane foams are generally made using a polyalcohol rather than a diol so that the polymer has a high amount of three-dimensional cross-linking, giving a rigid but very light foam for insulation. The instability of carbamic acids is the same fact behind the Hofmann and Curtius rearrangements of McMurry 24.6.",
      "options": {
        "A": "Correct. Water gives a carbamic acid, the carbamic acid loses CO2, and the CO2 is the blowing gas.",
        "B": "The amount of water is far too small and the reaction is not hot enough to make steam the blowing agent; the gas is generated chemically, mole for mole with the water added.",
        "C": "Isocyanates do not lose carbon monoxide under these conditions; the carbon of the N=C=O group ends up in CO2 after water adds to it.",
        "D": "Isocyanates are not oxidants and diols are not dehydrogenated; the diol's only role is to add to isocyanate groups and form urethane links."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q22_nomex_monomers",
    "topic": "Step-Growth Polymers",
    "difficulty_level": "Hard",
    "question_text": "Nomex, the polyamide used in fire-resistant clothing, has the chain structure shown (a segment with methyl caps). Which pair of monomers gives it?",
    "question_smiles": "CNc1cccc(NC(=O)c2cccc(C(=O)NC)c2)c1",
    "structure_alt": "Two meta-disubstituted benzene rings: one carries two N-H groups, the other two carbonyl carbons, joined through an amide N-H-C(=O) link; each ring's other substituent ends in a small capping group.",
    "options": [
      {
        "option_id": "A",
        "text": "1,3-Benzenediamine and 1,3-benzenedicarbonyl chloride (isophthaloyl chloride)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,4-Benzenediamine and 1,4-benzenedicarbonyl chloride (terephthaloyl chloride)",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-Aminobenzoic acid alone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,3-Benzenediamine and benzene-1,3-dicarbaldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Read the segment from its links: each amide has its nitrogen on one ring and its carbonyl on the other, and the two substituents on every ring are meta to each other. One kind of ring carries two nitrogens, so it came from a diamine; the other carries two carbonyls, so it came from a diacid derivative. Both are 1,3-disubstituted. An aromatic diamine and an aromatic diacid chloride react by nucleophilic acyl substitution, each amine displacing chloride from an acid chloride, to give the polyamide with HCl as by-product; the acid chloride is used because aromatic amines are weak nucleophiles and the free acid would need forcing conditions. The all-aromatic amide backbone with meta linkages is what gives Nomex its heat resistance.",
      "approach": "Step 1: Locate the amide bonds and cut each one between N and C=O.\nStep 2: The nitrogen-bearing fragment is a benzene with two NH groups meta: 1,3-benzenediamine.\nStep 3: The carbonyl-bearing fragment is a benzene with two C(=O) groups meta: isophthalic acid, supplied as its diacid chloride.\nStep 4: Alternation of diamine ring and diacid ring along the chain confirms two monomers, not one.",
      "note": "McMurry 31.4 (Step-Growth Polymers), Problem 31-24, states that Nomex, a polyamide used in such applications as fire-retardant clothing, is prepared by reaction of 1,3-benzenediamine with 1,3-benzenedicarbonyl chloride and asks for its structure; this item runs the problem backwards. Amide formation from acid chlorides is McMurry 21.4, and polyamides as step-growth polymers are McMurry 21.9. Kevlar is the para isomer made the same way.",
      "options": {
        "A": "Correct. Meta-diamine rings alternate with meta-diacid rings through amide links; the acid chloride supplies the carbonyls and HCl is lost.",
        "B": "The para monomers give Kevlar, whose rings are 1,4-disubstituted. The segment shown has both substituents meta on every ring.",
        "C": "An amino acid monomer would give a chain in which every ring carries one NH and one C=O, -NH-Ar-C(=O)-NH-Ar-C(=O)-. In the segment shown the rings alternate: one with two NH groups, the next with two carbonyls, which requires two different monomers.",
        "D": "An aldehyde and an amine give an imine, C=N, not an amide. The links in the segment are N-H-C(=O), which need an acid derivative."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q23_epoxy_curing_triamine",
    "topic": "Step-Growth Polymers",
    "difficulty_level": "Hard",
    "question_text": "An epoxy adhesive is a low-molecular-weight prepolymer with a terminal epoxide at each end, cured by mixing with a triamine such as H2NCH2CH2NHCH2CH2NH2. How does the triamine turn the liquid into a hard, insoluble solid?",
    "options": [
      {
        "option_id": "A",
        "text": "Each N-H of the triamine adds to a terminal epoxide, opening the ring by SN2 attack at the less hindered CH2 to give a beta-amino alcohol; with five N-H bonds per triamine and two epoxides per prepolymer, the chains are joined into a three-dimensional cross-linked network",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The amine is a base that catalyses polymerization of the epoxides into polyether chains, and the chains then entangle",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The amine forms amide bonds with the ether oxygens of the prepolymer, linking the chains",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The amine adds to the aromatic rings of the bisphenol units by nucleophilic aromatic substitution",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An epoxide is opened by an amine without any catalyst: the nitrogen lone pair attacks the less substituted epoxide carbon from the back, the strained C-O bond breaks, and a proton moves from nitrogen to oxygen, giving a 2-amino alcohol. A primary amine has two N-H bonds and can open two epoxides; a secondary amine can open one more. The triamine used here has five N-H bonds in all, so one molecule can be linked to as many as five prepolymer chain ends, and each prepolymer has two epoxides, one at each end. Mixing the two therefore stitches every chain to several others, and the liquid sets into a single covalently bonded network, insoluble and infusible: a thermoset. That is why the two tubes must be mixed and why the mixture cannot be reheated and reshaped once cured.",
      "approach": "Step 1: Reaction: R-NH2 + terminal epoxide gives R-NH-CH2-CH(OH)-R', by SN2 at CH2.\nStep 2: The secondary amine formed still has an N-H and opens a second epoxide; the internal NH opens a third.\nStep 3: Count links: up to five per triamine molecule, two per prepolymer molecule, so the connectivity exceeds two at many points.\nStep 4: A network with connectivity greater than two is cross-linked in three dimensions: a thermosetting resin.",
      "note": "McMurry 31.4 (Step-Growth Polymers), Problem 31-33, describes epoxy adhesives as cross-linked resins prepared by SN2 reaction of the disodium salt of bisphenol A with epichlorohydrin to form a low-molecular-weight prepolymer that is then cured into a cross-linked resin by treatment with a triamine, and asks how the triamine causes cross-linking. Ring-opening of epoxides by amines is McMurry 18.6, and thermosetting resins are McMurry 31.7.",
      "options": {
        "A": "Correct. Amine N-H bonds open the terminal epoxides, and a triamine's five N-H bonds tie several chains together into a network.",
        "B": "Amines can catalyse epoxide homopolymerisation, but entangled linear polyethers would still be soluble and would soften on heating. The cured adhesive is insoluble and infusible because the amine is built into it as a cross-link.",
        "C": "Ether oxygens have no carbonyl and cannot form amides. The only electrophilic sites in the prepolymer are its terminal epoxides.",
        "D": "The aromatic rings of a bisphenol A unit carry no leaving group and no activating nitro groups; nucleophilic aromatic substitution is impossible on them, and the amine reacts at the epoxides instead."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q24_mdi_phosgene",
    "topic": "Step-Growth Polymers",
    "difficulty_level": "Hard",
    "question_text": "Methylenediphenyl diisocyanate (MDI), the monomer for rigid polyurethane insulation foam, is made from aniline and formaldehyde (acid-catalysed) to give 4,4'-methylenedianiline, which is then treated with phosgene, COCl2. How does phosgene convert each amine into an isocyanate?",
    "options": [
      {
        "option_id": "A",
        "text": "The amine attacks the phosgene carbonyl and chloride leaves (nucleophilic acyl substitution), giving a carbamoyl chloride Ar-NH-C(=O)Cl, which then loses HCl to give Ar-N=C=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Phosgene acylates the aromatic ring in a Friedel-Crafts reaction and the resulting acid chloride rearranges to the isocyanate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Phosgene oxidises the amine to a nitro group, which is then reduced to the isocyanate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Chlorine is transferred from phosgene to nitrogen, and the N-chloroamine loses HCl to give the isocyanate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Phosgene is the diacid chloride of carbonic acid, and it reacts with nucleophiles like any acid chloride. An amine adds to its carbonyl, the tetrahedral intermediate expels chloride, and the product is a carbamoyl chloride, Ar-NH-C(=O)-Cl, the acid chloride of a carbamic acid. A carbamoyl chloride with an N-H can eliminate HCl: loss of the N-H proton and the chloride gives the N=C=O cumulated double bonds of the isocyanate. Doing this at both amines of methylenedianiline gives MDI. The preceding step, aniline plus formaldehyde under acid, is an electrophilic aromatic substitution in which the protonated aldehyde (or the iminium ion formed from aniline and formaldehyde) is attacked at the para position of a second aniline, forming the CH2 bridge.",
      "approach": "Step 1: Ar-NH2 + Cl-C(=O)-Cl: addition to the carbonyl, then loss of Cl-: Ar-NH-C(=O)-Cl + HCl.\nStep 2: Elimination: base (or heat) removes the N-H proton as Cl- departs, forming C=N: Ar-N=C=O.\nStep 3: Repeat at the second amine of H2N-C6H4-CH2-C6H4-NH2: O=C=N-C6H4-CH2-C6H4-N=C=O, MDI.\nStep 4: Four equivalents of HCl are produced per MDI, which is why the process uses excess phosgene and a base or heat to drive the eliminations.",
      "note": "McMurry 31.4 (Step-Growth Polymers), Problem 31-16, states that the polyurethane foam used for home insulation uses methanediphenyldiisocyanate (MDI) as monomer, prepared by acid-catalyzed reaction of aniline with formaldehyde followed by treatment with phosgene, and asks for mechanisms for both steps; Problem 31-17 asks for the polyurethane from ethylene glycol and MDI. Nucleophilic acyl substitution of acid chlorides by amines is McMurry 21.4; the elimination to an isocyanate parallels the last step of the Hofmann rearrangement in McMurry 24.6.",
      "options": {
        "A": "Correct. Acyl substitution at phosgene gives a carbamoyl chloride, and elimination of HCl from it gives the isocyanate.",
        "B": "Phosgene is not a Friedel-Crafts acylating agent for anilines under these conditions, and an aryl acid chloride does not rearrange to an isocyanate. The nitrogen, the better nucleophile, attacks the carbonyl.",
        "C": "Phosgene is not an oxidant; the amine nitrogen keeps its oxidation state and simply becomes bonded to the carbonyl carbon that ends up as N=C=O.",
        "D": "The electrophilic atom of phosgene is its carbonyl carbon, not chlorine; no N-Cl bond forms. The carbon of the isocyanate comes from the phosgene carbonyl, which this route could not explain."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q25_metathesis_metallacycle",
    "topic": "Olefin Metathesis Polymerization",
    "difficulty_level": "Medium",
    "question_text": "In olefin metathesis two alkenes exchange the groups on their double bonds, RCH=CHR + R'CH=CHR' giving 2 RCH=CHR'. How does a Grubbs-type catalyst, Ru=CHR, bring this about?",
    "options": [
      {
        "option_id": "A",
        "text": "The ruthenium alkylidene and the alkene undergo a [2+2] cycloaddition to a four-membered metallacyclobutane, which opens the other way to release a new alkene and a new ruthenium alkylidene; repeated cycles swap the alkylidene fragments between alkenes",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ruthenium abstracts a hydrogen from the allylic position and the resulting allyl radicals recombine with exchanged partners",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The alkene undergoes oxidative addition of its C=C bond to ruthenium, and reductive elimination pairs the carbenes with new partners",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ruthenium protonates the alkene to a carbocation, which is captured by the other alkene and then loses a proton",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A metathesis catalyst carries a metal-carbon double bond, M=CHR, and that unit behaves toward an alkene like one component of a cycloaddition. The M=C and the C=C add to each other to form a four-membered ring containing the metal, a metallacyclobutane. The ring can break apart across the other diagonal, which releases an alkene made of one carbon from the catalyst and one from the substrate and leaves a new alkylidene, M=CHR', on the metal. That new alkylidene reacts with a second alkene the same way, and the net result of two such cycles is that the two alkenes have exchanged their CHR ends. Every step is reversible, so the process is driven by whatever removes a product: ring strain relief in ROMP, escape of ethylene in ADMET and ring-closing metathesis.",
      "approach": "Step 1: Ru=CHR + R'CH=CHR' gives the metallacyclobutane with Ru, CHR, CHR' and CHR' in the ring.\nStep 2: Retro-[2+2] the other way releases RCH=CHR' and leaves Ru=CHR'.\nStep 3: Ru=CHR' + RCH=CHR gives a new metallacycle, which opens to RCH=CHR' and Ru=CHR, regenerating the original catalyst.\nStep 4: Net: RCH=CHR + R'CH=CHR' gives 2 RCH=CHR'; the metal is unchanged.",
      "note": "McMurry 31.5 (Olefin Metathesis Polymerization) states that olefin metathesis catalysts such as the Grubbs catalyst contain a carbon-metal double bond, usually to ruthenium, with the general structure M=CH-R, and that they function by reacting reversibly with an alkene to form a four-membered, metal-containing intermediate called a metallacycle, which immediately opens to give a different catalyst and a different alkene (Figure 31.3); Chauvin, Grubbs and Schrock shared the 2005 Nobel Prize for the work. The [2+2] step is thermally allowed here because a metal d orbital, not a simple pi orbital, is involved.",
      "options": {
        "A": "Correct. Reversible [2+2] cycloaddition to a metallacyclobutane and cycloreversion across the other diagonal exchange alkylidene fragments.",
        "B": "No radicals are involved and no allylic C-H bonds are broken; metathesis works on alkenes with no allylic hydrogens at all, and it is the double-bond carbons themselves that are exchanged.",
        "C": "The C=C bond is not cleaved by oxidative addition; it adds to the metal-carbon double bond. The metallacyclobutane, not a bis-carbene, is the intermediate.",
        "D": "Grubbs catalysts are neutral ruthenium alkylidenes, not acids, and a cationic route would give addition or polymerisation products, not the clean exchange of alkene ends."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q26_scheme_romp_cyclopentene",
    "topic": "Olefin Metathesis Polymerization",
    "difficulty_level": "Hard",
    "question_text": "Cyclopentene is treated with a Grubbs ruthenium catalyst. Which structure is a segment of the polymer formed?",
    "reaction_scheme": {
      "reactants": [
        "C1CC=CC1"
      ],
      "reagents": "Grubbs catalyst (Ru=CHPh)",
      "conditions": "CH2Cl2, 25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A five-membered carbon ring with one double bond: cyclopentene."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "An open chain with a double bond after every three CH2 groups: -CH=CH-CH2CH2CH2- repeating",
        "smiles": "C/C=C/CCC/C=C/CCC/C=C/C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Intact cyclopentane rings joined through adjacent ring carbons, with no double bonds",
        "smiles": "C1CCC(C1)C1CCCC1C1CCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A saturated open chain of CH2 groups",
        "smiles": "CCCCCCCCCCCCCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Hepta-1,6-diene, from cross-metathesis of one cyclopentene with ethylene",
        "smiles": "C=CCCCC=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Ring-opening metathesis polymerization uses a moderately strained cycloalkene. The ruthenium alkylidene adds to the ring's double bond to form a metallacyclobutane, and when that ring opens the other way the cycloalkene's own ring has been cut open: the chain now hangs from the metal as a new alkylidene with a terminal alkene at its far end. The next cyclopentene adds to the metal alkylidene the same way, and each monomer is spliced into the growing chain as a -CH=CH-(CH2)3- unit. Every monomer contributes one double bond to the backbone, evenly spaced, and no atoms are lost. The relief of ring strain is what drives the equilibrium toward the open chain; an unstrained cyclohexene does not polymerise this way.",
      "approach": "Step 1: Ru=CHPh + cyclopentene: [2+2] to a metallacyclobutane fused to the five-membered ring.\nStep 2: Cycloreversion across the other diagonal cuts the cyclopentene C=C: Ru=CH-CH2CH2CH2-CH=CHPh, the ring is now open.\nStep 3: Repeat with the next cyclopentene; each cycle inserts -CH=CH-CH2CH2CH2- into the chain.\nStep 4: The polymer, polypentenamer, has a disubstituted double bond after every three methylenes; the backbone alkenes are mostly E.",
      "note": "McMurry 31.5 (Olefin Metathesis Polymerization) states that ring-opening metathesis polymerization, or ROMP, uses a moderately strained cycloalkene such as cyclopentene, that the strain of the ring favors ring-opening, thereby driving formation of the open-chain product, and that the polymer that results has double bonds spaced regularly along the chain, allowing for hydrogenation or further functionalization. Ring strain in cyclopentane and cyclohexane is McMurry 4.3.",
      "options": {
        "A": "Correct. Each cyclopentene is opened at its double bond and spliced in as -CH=CH-(CH2)3-, so the backbone carries one double bond per monomer unit.",
        "B": "Joining intact rings through their former alkene carbons is what a radical or cationic vinyl polymerization would do. Metathesis breaks the C=C and rebuilds it in the chain; the rings are opened, not kept.",
        "C": "A saturated chain is what you get only after hydrogenating the ROMP product; the text notes that the regularly spaced double bonds allow exactly that. Metathesis itself conserves the double bonds.",
        "D": "A single ring-opened monomer capped by ethylene is the cross-metathesis product with ethylene, not the polymer. Under ROMP conditions the opened monomer stays on the metal and adds the next ring instead."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q27_admet_byproduct",
    "topic": "Olefin Metathesis Polymerization",
    "difficulty_level": "Medium",
    "question_text": "Acyclic diene metathesis (ADMET) polymerisation of 1,8-nonadiene, H2C=CH(CH2)5CH=CH2, with a Grubbs catalyst gives a polymer of molecular weight up to 80,000. What is the repeat unit, what is the by-product, and why does the reaction go to completion although every metathesis step is reversible?",
    "options": [
      {
        "option_id": "A",
        "text": "Repeat unit -CH=CH-(CH2)5-; the by-product is ethylene, which escapes as a gas and so pulls the equilibrium toward polymer",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Repeat unit -CH2CH2-(CH2)5-CH2CH2-; the by-product is hydrogen, which escapes as a gas",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Repeat unit -CH=CH-(CH2)7-; the by-product is water, removed by distillation",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Repeat unit -CH=CH-(CH2)5-; there is no by-product, and the reaction is driven by the stability of the internal double bonds",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "In ADMET the two terminal alkenes of one diene molecule undergo metathesis with those of other molecules. Each exchange joins two CH= ends into an internal -CH=CH- link and pairs the two terminal =CH2 groups into ethylene. Because the metathesis steps are all reversible, a closed system would sit at equilibrium with plenty of small molecules; but ethylene is a gas at the reaction temperature and leaves, and Le Chatelier's principle does the rest: every ethylene that escapes is a step the polymer cannot undo. The repeat unit is the diene minus its two CH2 termini: for 1,8-nonadiene, -CH=CH-(CH2)5-, an unsaturated polymer with one double bond per unit, like a ROMP polymer.",
      "approach": "Step 1: Metathesis between two terminal alkenes: R-CH=CH2 + H2C=CH-R gives R-CH=CH-R + H2C=CH2.\nStep 2: Apply to 1,8-nonadiene: the (CH2)5 chain between the alkenes is retained, the two terminal CH2 groups become ethylene, and the CH= carbons form the new backbone double bond.\nStep 3: Repeat unit: -CH=CH-(CH2)5- (seven carbons per unit, from a nine-carbon monomer minus C2H4).\nStep 4: Driving force: ethylene boils at -104 °C and bubbles out; its removal makes the reversible process effectively irreversible.",
      "note": "McMurry 31.5 (Olefin Metathesis Polymerization) states that acyclic diene metathesis, or ADMET, involves olefin metathesis of an open-chain substrate with two double bonds at the ends of a long chain, such as 1,8-nonadiene, that as the reaction proceeds the gaseous ethylene by-product escapes, thereby driving the equilibrium toward polymer product, and that polymers with molecular weights as high as 80,000 amu have been prepared. Le Chatelier's principle applied to removing a product is the same reasoning as Dean-Stark esterification in McMurry 21.3.",
      "options": {
        "A": "Correct. Terminal alkenes pair up into internal ones, ethylene is released, and its escape drives the reversible metathesis to polymer.",
        "B": "No hydrogen is formed or lost in metathesis; the polymer is unsaturated, with one C=C per repeat unit. A fully saturated chain would need a hydrogenation.",
        "C": "The two terminal CH2 groups leave as ethylene, so the chain between backbone double bonds is the diene's internal (CH2)5, not seven methylenes; and no water is involved anywhere in metathesis.",
        "D": "The repeat unit is right, but the driving force is not internal-alkene stability, which is small and would leave a reversible reaction stuck at equilibrium. Ethylene is formed, and its escape is what makes the reaction go."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q28_scheme_rcm_diallylmalonate",
    "topic": "Intramolecular Olefin Metathesis",
    "difficulty_level": "Hard",
    "question_text": "Diethyl 2,2-diallylmalonate is stirred with a Grubbs catalyst in dichloromethane. What is the organic product (besides ethylene)?",
    "reaction_scheme": {
      "reactants": [
        "C=CCC(CC=C)(C(=O)OCC)C(=O)OCC"
      ],
      "reagents": "Grubbs catalyst (Ru, 5 mol%)",
      "conditions": "CH2Cl2, 25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A central carbon bearing two ethyl ester groups and two allyl (CH2-CH=CH2) chains."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Diethyl cyclopent-3-ene-1,1-dicarboxylate (a five-membered ring)",
        "smiles": "CCOC(=O)C1(CC=CC1)C(=O)OCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Diethyl cyclohex-3-ene-1,1-dicarboxylate (a six-membered ring)",
        "smiles": "CCOC(=O)C1(CCC=CC1)C(=O)OCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Diethyl 2-allyl-2-[(E)-prop-1-enyl]malonate (one double bond moved inward)",
        "smiles": "C=CCC(/C=C/C)(C(=O)OCC)C(=O)OCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Diethyl 2,2-dipropylmalonate (both alkenes reduced)",
        "smiles": "CCCC(CCC)(C(=O)OCC)C(=O)OCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When a molecule carries two terminal alkenes close together, metathesis can join them to each other: ring-closing metathesis. The ruthenium alkylidene adds to one terminal alkene, releases ethylene (taking the =CH2 with it) and leaves the metal on that chain end; the new alkylidene then adds intramolecularly to the other alkene, and cycloreversion closes the ring and regenerates the catalyst. The new double bond is between the two carbons that were the internal CH= carbons of the allyl groups, so the ring contains those two carbons, the two CH2 groups and the quaternary carbon: five atoms. The two terminal CH2 groups leave together as ethylene, whose escape drives the reaction. The ester groups are untouched, which is the functional-group tolerance that makes the method so useful.",
      "approach": "Step 1: Count ring atoms: C(quaternary), CH2, CH=, =CH, CH2 back to the quaternary carbon: five.\nStep 2: Ru=CHPh + one allyl group: metallacycle, then release of PhCH=CH2 (first turnover) and later ethylene; the chain end is now Ru=CH-CH2-C(CO2Et)2-.\nStep 3: Intramolecular [2+2] with the other allyl C=C; cycloreversion expels Ru=CH2 and closes the ring at the two CH carbons.\nStep 4: Ru=CH2 + another substrate's terminal alkene releases H2C=CH2 and continues the cycle. Product: diethyl cyclopent-3-ene-1,1-dicarboxylate plus ethylene.",
      "note": "McMurry 31.6 (Intramolecular Olefin Metathesis) states that the olefin metathesis reaction is finding increased usage in complex organic synthesis as an intramolecular process called ring-closing metathesis (RCM), that the optimum catalyst is an Ru(II) complex, and that cyclic alkenes with up to 30 atoms in ring size are easily produced. The metallacycle mechanism is McMurry 31.5 (Figure 31.3). Diethyl diallylmalonate is the standard test substrate for new metathesis catalysts; the text does not name it.",
      "options": {
        "A": "Correct. The two internal alkene carbons join, the two terminal CH2 groups leave as ethylene, and the five atoms left form a cyclopentene bearing the two esters on its saturated carbon.",
        "B": "A six-membered ring would keep one terminal CH2 in the ring. In metathesis both =CH2 ends are lost together as ethylene; the ring closes between the two CH= carbons, and five atoms remain.",
        "C": "Alkene isomerisation is a known side reaction of some ruthenium residues, but it is not the metathesis product and it does not release ethylene. With an active catalyst the intramolecular closure to the five-membered ring is fast and dominates.",
        "D": "Metathesis breaks and re-forms double bonds; it never reduces them, and there is no hydrogen source. The product still contains one C=C, now inside the ring."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q29_norsorex_monomer",
    "topic": "Olefin Metathesis Polymerization",
    "difficulty_level": "Hard",
    "question_text": "Norsorex, a sealing material used in the automobile industry, is made by ring-opening metathesis polymerization. Its backbone consists of 1,3-disubstituted cyclopentane rings joined to one another through -CH=CH- links. Which monomer gives it, and why does that monomer polymerise readily?",
    "options": [
      {
        "option_id": "A",
        "text": "Norbornene (bicyclo[2.2.1]hept-2-ene): its strained bicyclic double bond opens readily, leaving the cyclopentane ring in the chain",
        "smiles": "C1=CC2CCC1C2",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclohexene: its double bond opens to give a chain of CH2 groups",
        "smiles": "C1CCC=CC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclopentadiene: one of its double bonds opens and the other remains in the ring",
        "smiles": "C1C=CC=C1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Bicyclo[2.2.2]oct-2-ene: its double bond opens, leaving a cyclohexane ring in the chain",
        "smiles": "C1CC2CCC1C=C2",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "ROMP cuts the double bond of a cycloalkene and splices the opened ring into the chain, so the rings that survive in the polymer are whatever rings the monomer had besides the one containing the C=C. A backbone of cyclopentane rings linked 1,3 through CH=CH units is therefore the fingerprint of norbornene: its double bond lies in a bridged bicyclic, and opening that bond leaves the five-membered ring (the carbons 1, 7, 4, 5, 6) attached through C1 and C4 to the new backbone alkenes. Norbornene is an excellent ROMP monomer because its bicyclic double bond carries about 27 kcal/mol of strain, far more than cyclopentene, so ring-opening is strongly favoured. Cyclohexene, essentially strain-free, has no driving force and does not undergo ROMP.",
      "approach": "Step 1: Work backwards: cut every backbone -CH=CH- of the polymer and re-form a C=C within one unit; the unit is a bicyclic alkene whose other ring is cyclopentane.\nStep 2: A cyclopentane bridged 1,3 by a CH=CH is bicyclo[2.2.1]hept-2-ene, norbornene.\nStep 3: Driving force: relief of the bicyclic ring strain when the C=C is opened.\nStep 4: Check the alternatives: cyclohexene leaves no ring and is unstrained; cyclopentadiene would leave a cyclopentene, not a cyclopentane; bicyclo[2.2.2]octene would leave a cyclohexane, 1,4-linked.",
      "note": "McMurry 31.5 (Olefin Metathesis Polymerization) states that among the commercial polymers produced by olefin metathesis are Vestenamer, used in the manufacture of tires and other molded rubber objects, and Norsorex, used in the automobile industry as a sealing material, and Problem 31-10 asks how they might be made; Vestenamer is the ROMP polymer of cyclooctene. Norbornene's strain and the Diels-Alder route to it are McMurry 4.9 and 14.4.",
      "options": {
        "A": "Correct. Opening norbornene's strained bicyclic double bond leaves a cyclopentane ring joined 1,3 to the backbone alkenes, the structure described.",
        "B": "Cyclohexene has only one ring, so opening it would leave a chain of six CH2 groups with no ring; and cyclohexene is unstrained, so ROMP has no driving force and does not occur.",
        "C": "Cyclopentadiene has no second ring: opening one double bond would leave an open chain carrying the other double bond, not a saturated cyclopentane. (It also dimerises by Diels-Alder reaction on standing.)",
        "D": "Opening bicyclo[2.2.2]octene leaves a cyclohexane ring linked 1,4, not a cyclopentane linked 1,3; and the [2.2.2] system is much less strained than norbornene."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q30_pdcpd_thermoset",
    "topic": "Olefin Metathesis Polymerization",
    "difficulty_level": "Hard",
    "question_text": "Polydicyclopentadiene (PDCPD), used for truck cabs and other impact-resistant mouldings, is made by ROMP of dicyclopentadiene, the Diels-Alder dimer of cyclopentadiene, which contains a norbornene-type double bond and a cyclopentene double bond. Why is PDCPD a cross-linked thermoset rather than a linear thermoplastic?",
    "options": [
      {
        "option_id": "A",
        "text": "The more strained norbornene double bond opens first to give linear chains that still carry cyclopentene rings; a second, slower metathesis of those cyclopentene double bonds then links different chains together into a network",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The cyclopentene double bonds undergo radical polymerization once the mould is heated, forming carbon-carbon cross-links",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dicyclopentadiene first reverts to cyclopentadiene, whose two double bonds both polymerise",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The ruthenium catalyst is incorporated into the chains and bridges them",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Dicyclopentadiene has two double bonds of very different strain. The one in the bicyclo[2.2.1] part is norbornene-like and highly strained; the one in the fused cyclopentene is only moderately strained, like cyclopentene itself. ROMP of the strained bond is fast and gives long linear chains, each repeat unit of which still contains an intact cyclopentene ring. Those cyclopentene double bonds can also undergo metathesis, more slowly, and when one of them reacts with a double bond belonging to a different chain the two chains become covalently joined. Enough such events turn the material into a single three-dimensional network, insoluble and infusible: a thermoset, moulded in place by reaction injection moulding because it cannot be reshaped afterwards. A monomer with two metathesis-active double bonds is to ROMP what divinylbenzene is to styrene.",
      "approach": "Step 1: Rank the double bonds by strain: norbornene-type (bicyclic, about 27 kcal/mol) opens first; cyclopentene-type (about 7 kcal/mol) opens later.\nStep 2: First stage: ROMP through the norbornene bond gives a linear polymer with pendant fused cyclopentene rings.\nStep 3: Second stage: metathesis between cyclopentene double bonds on different chains forms cross-links.\nStep 4: A network with many cross-links per chain is a thermosetting resin: it sets hard in the mould and does not melt.",
      "note": "McMurry 31.5 (Olefin Metathesis Polymerization), Problem 31-19, states that polydicyclopentadiene, marketed as Telene or Metton, is a highly cross-linked thermosetting resin used for moulding impact-resistant parts such as cabs for large trucks, that it is prepared by ROMP of dicyclopentadiene, which is itself prepared from 1,3-cyclopentadiene, and that the polymerization occurs by initial metathesis of the more highly strained double bond in the bicyclo[2.2.1]heptene part (Section 4.9) to give a linear polymer, followed by cross-linking by a second metathesis of the remaining cyclopentene double bond. Thermosets are McMurry 31.7.",
      "options": {
        "A": "Correct. Sequential ROMP: the strained bond builds chains, the less strained bond ties them together.",
        "B": "No radical initiator is present and cyclopentene double bonds do not polymerise radically under moulding conditions. The cross-links are formed by the same catalyst, by metathesis, not by a separate radical process.",
        "C": "Retro-Diels-Alder of dicyclopentadiene needs about 170 °C and would give cyclopentadiene, whose ROMP would leave a different backbone; the polymer's repeat unit retains the intact dimer skeleton.",
        "D": "The ruthenium is a catalyst present at a fraction of a percent; it is not part of the polymer. The cross-links are carbon-carbon double bonds formed between chains."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q31_glass_transition_pmma",
    "topic": "Polymer Structure and Physical Properties",
    "difficulty_level": "Medium",
    "question_text": "Poly(methyl methacrylate) (Plexiglas) is hard and glassy at room temperature yet contains no crystallites. What happens when it is warmed past about 105 °C, its glass transition temperature Tg?",
    "options": [
      {
        "option_id": "A",
        "text": "The chains gain enough segmental mobility to slide past one another, and the hard amorphous glass becomes soft and flexible; there is no sharp melting point because there are no crystalline regions to melt",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The crystalline regions melt at Tg and the polymer becomes a liquid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The polymer depolymerises to methyl methacrylate monomer",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The ester groups react with one another and the polymer cross-links into a thermoset",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two different thermal transitions are possible in a polymer. In crystalline regions, chains packed in ordered arrays are held by many van der Waals contacts, and those regions melt cooperatively at a melting temperature Tm. Amorphous material, in which the chains are tangled without long-range order, has no melting point; instead, below the glass transition temperature Tg the chains are frozen in place and the solid is hard and brittle, and above Tg segments of chain can rotate and slip, so the material softens to a rubbery or leathery state. Poly(methyl methacrylate) cannot crystallise because its bulky ester side groups prevent regular packing, so it shows only a Tg; polyethylene and nylon, which are partly crystalline, show both a Tg and a Tm.",
      "approach": "Step 1: Classify PMMA: atactic chains with a large CO2CH3 on every other carbon; no regular packing, so amorphous.\nStep 2: Amorphous polymers have a Tg but no Tm.\nStep 3: Below Tg: glassy and hard (the state of a Plexiglas sheet). Above Tg: chain segments move, the sheet becomes soft and can be bent or moulded.\nStep 4: No bonds break or form; cooling below Tg restores the hard glass, which is why PMMA is a thermoplastic.",
      "note": "McMurry 31.7 (Polymer Structure and Physical Properties) states that noncrystalline, amorphous polymers like poly(methyl methacrylate), sold as Plexiglas, have little or no long-range ordering among chains but can nevertheless be very hard at room temperature, and that when heated the hard amorphous polymer becomes soft and flexible at a point called the glass transition temperature, Tg; the same section defines the melt transition temperature Tm for crystalline regions and explains why linear polyethylene is highly crystalline while PMMA is not.",
      "options": {
        "A": "Correct. Above Tg an amorphous polymer's chain segments become mobile and the glass softens; without crystallites there is no melting transition.",
        "B": "PMMA has no crystalline regions, as the question states, so there is nothing to melt and no Tm. The transition at Tg is a softening of the amorphous glass, not a melting.",
        "C": "PMMA does depolymerise, but only on strong heating well above 300 °C. At Tg no chemical change occurs; the transition is purely physical and reversible.",
        "D": "The methyl ester groups are unreactive toward one another under heat alone, and PMMA is a thermoplastic that can be reheated and reshaped indefinitely, which a cross-linked polymer could not be."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q32_elastomer_requirements",
    "topic": "Polymer Structure and Physical Properties",
    "difficulty_level": "Medium",
    "question_text": "Which combination of structural features makes a polymer an elastomer, one that stretches and then springs back to its original shape?",
    "options": [
      {
        "option_id": "A",
        "text": "An amorphous polymer with a low glass transition temperature, chains irregular enough not to form crystallites, and a small amount of cross-linking",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A highly crystalline polymer with a high glass transition temperature and no cross-linking",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "An amorphous polymer with extensive three-dimensional cross-linking",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A linear, uncross-linked polymer with a low glass transition temperature",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Elasticity comes from chains that are randomly coiled and free to move. Stretching straightens the coils and lines the chains up along the pull; when the force is released the chains return to the random coil, because that is the state of highest entropy. Three things are needed. The polymer must be above its Tg at the use temperature, so the chains are mobile. The chains must be irregular enough that they do not pack into crystallites, which would lock them in place; the cis double bonds of natural rubber do that, while the trans geometry of gutta-percha lets the chains crystallise and makes it hard. And there must be a few cross-links, so that stretched chains cannot simply slide past one another and take a permanent set; vulcanisation supplies them in rubber.",
      "approach": "Step 1: Mobility: a low Tg, so the material is rubbery, not glassy, at room temperature.\nStep 2: No crystallites: irregular chain shape (cis alkenes, random tacticity) so that stretching does not lock into ordered crystals.\nStep 3: Memory: light cross-linking so that the network recovers instead of flowing.\nStep 4: Too much cross-linking gives a hard thermoset; none gives a material that creeps. Natural rubber lightly vulcanised meets all three.",
      "note": "McMurry 31.7 (Polymer Structure and Physical Properties) states that elastomers are amorphous polymers that have the ability to stretch out and spring back to their original shapes, that they must have low glass transition temperatures and a small amount of cross-linking to prevent the chains from slipping over one another, that the chains must have an irregular shape to prevent crystallite formation, and that natural rubber is the most common example while gutta-percha, being highly crystalline, is not an elastomer (Figures 31.6 and 31.7). Vulcanisation is McMurry 14.6.",
      "options": {
        "A": "Correct. Mobile, non-crystallising, lightly cross-linked chains stretch under load and recoil when released.",
        "B": "A crystalline, high-Tg polymer is a hard plastic or fibre: its chains are locked in place and cannot uncoil. Crystallinity is the opposite of what an elastomer needs.",
        "C": "Extensive cross-linking gives a rigid thermosetting resin such as Bakelite; the chains cannot move far enough to stretch. An elastomer needs only occasional cross-links.",
        "D": "Without any cross-links the stretched chains slide past one another and the material flows or takes a permanent set instead of springing back; that is why raw rubber must be vulcanised."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q33_bakelite_mechanism",
    "topic": "Polymer Structure and Physical Properties",
    "difficulty_level": "Hard",
    "question_text": "Bakelite, the first commercial synthetic polymer, is a thermosetting resin made by heating phenol with formaldehyde under acid catalysis. What are the bond-forming steps, and why is the product cross-linked?",
    "options": [
      {
        "option_id": "A",
        "text": "Protonated formaldehyde is attacked by the phenol ring at an ortho or para position (electrophilic aromatic substitution) to give a hydroxymethylphenol; loss of water from the protonated benzylic alcohol gives a benzylic cation that alkylates another phenol ring; because each phenol has three activated positions, CH2 bridges form in three directions and a network results",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Formaldehyde forms a hemiacetal and then an acetal with the phenolic OH groups, so the rings are linked through O-CH2-O bridges",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Formaldehyde undergoes an aldol condensation with itself and the resulting polymer traps phenol molecules",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acid oxidises phenol to quinone, which polymerises with formaldehyde by radical coupling",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Phenol is a strongly activated aromatic ring, and protonated formaldehyde, H2C=OH+, is an electrophile weak enough to be selective for such rings. Attack at an ortho or para carbon (the positions the OH group activates) gives, after loss of the ring proton, an ortho- or para-hydroxymethylphenol. In acid that benzylic alcohol is protonated and loses water to give a benzylic carbocation, stabilised by the ring's oxygen, and that cation is itself an electrophile for a second phenol ring, forming a CH2 bridge between two rings. Each phenol has two ortho positions and one para position, so a single ring can be bridged to three others; the chain becomes a sheet and then a three-dimensional network, and the resin sets into what is effectively one molecule. That is a thermoset: it cannot be melted or dissolved once cured.",
      "approach": "Step 1: H2C=O + H+ gives H2C=OH+; phenol attacks with its para (or ortho) carbon; loss of H+ gives 4-(hydroxymethyl)phenol.\nStep 2: The benzylic OH is protonated; water leaves; the benzylic cation is stabilised by the para OH.\nStep 3: A second phenol attacks the cation at its ortho or para carbon; loss of H+ gives a diarylmethane with a CH2 bridge.\nStep 4: Every ring still has free activated positions, so bridging continues in three directions; heating drives off water and cross-links the mass.",
      "note": "McMurry 31.7 (Polymer Structure and Physical Properties) states that Bakelite is a phenolic resin produced by reaction of phenol and formaldehyde, that on heating water is eliminated, many cross-links form and the polymer sets into a rocklike mass, and that the cross-linking is so extensive that a piece of Bakelite is essentially one large molecule; Problem 31-12 asks for the mechanism of its acid-catalysed formation. Electrophilic aromatic substitution on phenol is McMurry 16.4 and 16.5, and Friedel-Crafts-type alkylation by a benzylic cation is McMurry 16.3.",
      "options": {
        "A": "Correct. Two successive electrophilic aromatic substitutions, first by protonated formaldehyde and then by the benzylic cation, join rings through CH2 bridges at ortho and para positions until the mass is one network.",
        "B": "Acetals of phenols with formaldehyde are unstable in acid and would not give the acid- and heat-resistant material Bakelite is. The bridges in Bakelite are carbon-carbon bonded CH2 groups between ring carbons, not O-CH2-O links.",
        "C": "Formaldehyde has no alpha hydrogen and cannot undergo an aldol condensation. The carbon-carbon bonds of Bakelite form at the aromatic rings, not between formaldehyde molecules.",
        "D": "Acid does not oxidise phenol, and no radicals are involved. The chemistry is ionic: an electrophile (protonated formaldehyde, then a benzylic cation) attacking an activated ring."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q34_plasticizer",
    "topic": "Polymer Structure and Physical Properties",
    "difficulty_level": "Medium",
    "question_text": "Pure poly(vinyl chloride) is brittle, yet PVC tubing and intravenous drip bags are soft and pliable. Dioctyl phthalate is added to achieve this. What does it do?",
    "options": [
      {
        "option_id": "A",
        "text": "It is a small, non-volatile molecule that dissolves between the polymer chains and acts as a lubricant, weakening chain-chain attractions and lowering the glass transition temperature below room temperature",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It cross-links the chains through its two ester groups, giving an elastomer",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It copolymerises with vinyl chloride and breaks up the regularity of the chain",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It reacts with the C-Cl bonds and replaces chlorine with flexible ester side chains",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A plasticizer is a physical additive, not a reagent. Di(2-ethylhexyl) phthalate, called dioctyl phthalate, is a liquid diester that mixes with PVC and sits between the chains. Chains that were held rigidly by dipole-dipole attractions between C-Cl bonds are now separated by lubricating molecules, so segments can move at lower temperature: the glass transition temperature of the mixture falls from about 80 °C for pure PVC to below room temperature, and the glassy solid becomes a pliable one. No covalent bonds are made, which is also why plasticizers can slowly migrate out of the plastic and why their safety in medical and children's products has been questioned.",
      "approach": "Step 1: Diagnose brittleness: pure PVC's Tg is above room temperature, so at room temperature it is a glass.\nStep 2: Add a compatible small molecule that dissolves in the polymer and separates chains.\nStep 3: Weaker interchain attraction lets chain segments move at lower temperature: Tg drops below room temperature.\nStep 4: The material is now above its Tg in use, hence flexible; the additive stays physically mixed and can leach.",
      "note": "McMurry 31.7 (Polymer Structure and Physical Properties) states that plasticizers, small organic molecules that act as lubricants between chains, are usually added to thermoplastics to keep them from becoming brittle at room temperature, that poly(vinyl chloride) is brittle when pure but becomes supple and pliable when a plasticizer is added, that most hospital drip bags are made of PVC, and that dialkyl phthalates such as di(2-ethylhexyl) phthalate are commonly used although questions about their safety have been raised. Problem 31-35 asks for the synthesis of 2-ethyl-1-hexanol, the alcohol half of the ester.",
      "options": {
        "A": "Correct. A plasticizer lubricates the chains and lowers Tg; it is physically mixed in, not chemically bound.",
        "B": "Cross-linking would make the polymer stiffer and insoluble, the opposite of plasticising. The phthalate's ester groups do not react with PVC at all.",
        "C": "The plasticizer is added to the finished polymer, and a phthalate ester has no C=C to copolymerise with. Its effect is physical.",
        "D": "The C-Cl bonds of PVC are unreactive toward esters, and no substitution occurs; the polymer's covalent structure is unchanged, which is why the plasticizer can migrate out over time."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q35_hydrogenated_rubber_tacticity",
    "topic": "Polymer Structure and Physical Properties",
    "difficulty_level": "Hard",
    "question_text": "Natural rubber, cis-1,4-polyisoprene, is completely hydrogenated over a catalyst. What is the product, and is it isotactic, syndiotactic or atactic?",
    "options": [
      {
        "option_id": "A",
        "text": "A saturated chain, -CH2CH2CH2CH(CH3)-, equivalent to an alternating ethylene-propylene copolymer; atactic, because hydrogen adds to either face of each trisubstituted double bond at random and the new stereocentres are formed without control",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The same saturated chain; isotactic, because the cis geometry of natural rubber directs all the methyls to one side",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The same saturated chain; syndiotactic, because alternate double bonds are hydrogenated from opposite faces",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The same saturated chain; it has no stereocentres, because the methyl-bearing carbons keep their planar geometry",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Each isoprene unit of natural rubber is -CH2-C(CH3)=CH-CH2-. Hydrogenating the double bond converts the trisubstituted alkene carbon into an sp3 carbon bearing H, CH3 and two chain segments, a stereocentre, and the CH= carbon into a CH2. The saturated unit, -CH2-CH(CH3)-CH2-CH2-, is exactly what an alternating copolymer of propylene and ethylene would have. The catalyst delivers H2 to one face of each double bond, but nothing about the flat alkene, or about the polymer's cis geometry, which disappears when the pi bond is gone, chooses which face; each new centre forms with a random configuration relative to the others, so the product is atactic and, like all atactic polymers, amorphous.",
      "approach": "Step 1: Write one repeat unit of cis-1,4-polyisoprene and add H2 across its C=C: -CH2-CH(CH3)-CH2-CH2-.\nStep 2: Identify the new stereocentre: the CH(CH3) carbon, with H, CH3 and two different chain directions (locally).\nStep 3: Ask what controls its configuration: syn addition of H2 to whichever face of the alkene the catalyst surface meets, with no stereocentre nearby to bias it.\nStep 4: Random configurations along the chain: atactic. The E/Z geometry of the reactant is irrelevant once the double bond is saturated.",
      "note": "McMurry 31.7 (Polymer Structure and Physical Properties), Problem 31-11, asks what product to expect from catalytic hydrogenation of natural rubber and whether it would be syndiotactic, atactic or isotactic. The tacticity definitions are McMurry 31.2 and the structure of natural rubber McMurry 14.6; catalytic hydrogenation as a syn addition to either face of an alkene is McMurry 8.6.",
      "options": {
        "A": "Correct. Saturating each unit creates a CH(CH3) stereocentre with no control over its configuration, so the polymer is atactic; the skeleton is that of an alternating ethylene-propylene copolymer.",
        "B": "The cis geometry describes the arrangement across the double bond, which ceases to exist on hydrogenation. It cannot dictate the configuration at the new sp3 carbon, and the catalyst cannot see which way earlier units went.",
        "C": "Nothing alternates the face of attack: each double bond is approached independently and randomly. A regular alternation would be as surprising as a regular repetition.",
        "D": "After hydrogenation the methyl-bearing carbon is sp3 with four different groups (H, CH3, and two chain arms that differ locally), so it is a stereocentre; that is precisely why tacticity becomes a question."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q36_divinylbenzene_crosslink",
    "topic": "Polymer Structure and Physical Properties",
    "difficulty_level": "Medium",
    "question_text": "Copolymerising styrene with a few percent of p-divinylbenzene gives a hard, insoluble polymer (the support used in Merrifield solid-phase peptide synthesis), whereas polystyrene itself dissolves in toluene. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "Each divinylbenzene molecule has two vinyl groups and is incorporated into two different growing chains, so it becomes a covalent bridge; a few such bridges per chain join all the chains into one network that can swell but cannot dissolve",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Divinylbenzene raises the molecular weight of the chains so far that they are too large to dissolve",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Divinylbenzene's aromatic rings stack with those of polystyrene, holding the chains together by pi-stacking",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The second vinyl group of each divinylbenzene unit is left unreacted and its polarity makes the polymer insoluble in toluene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A monomer with one polymerisable group becomes a link in a single chain; a monomer with two polymerisable groups can be a link in two chains at once. When p-divinylbenzene is present in a styrene polymerization, its first vinyl group is incorporated into one growing chain, and its second, still an ordinary styrene-like alkene, is later attacked by another growing radical and incorporated into a second chain. That divinylbenzene unit is now a cross-link. Even 1 to 2 percent of cross-linker connects every chain to several others, so the whole sample is a single covalent network. A network cannot dissolve, because dissolution requires separating molecules, but solvent can still enter it: the beads swell in toluene or dichloromethane, which is what makes them usable as a reaction support.",
      "approach": "Step 1: Radical chain A adds to one vinyl group of divinylbenzene; that unit is now part of chain A with a pendant styrene-like alkene.\nStep 2: Radical chain B adds to the pendant alkene; the unit is now in chains A and B: a cross-link.\nStep 3: With about one cross-linker per fifty styrenes, each chain is linked several times: a three-dimensional network.\nStep 4: Solvent swells the network (chains move apart) but cannot dissolve it (chains cannot separate).",
      "note": "McMurry 31.7 (Polymer Structure and Physical Properties), Problem 31-27, states that when styrene is copolymerized in the presence of a few percent p-divinylbenzene a hard, insoluble, cross-linked polymer is obtained and asks how the cross-linking of polystyrene chains occurs; Problem 31-18 concerns the same resin's conversion into the Merrifield support, and the solid-phase peptide synthesis that uses it is McMurry 26.8. Cross-linking as the defining feature of a thermoset is the same section.",
      "options": {
        "A": "Correct. A difunctional monomer joins two chains; enough such junctions make the sample one insoluble, swellable network.",
        "B": "Molecular weight alone does not make a polymer insoluble: very long linear polystyrene still dissolves, only more slowly. Insolubility comes from covalent connections between chains, not from chain length.",
        "C": "Pi-stacking is a weak, reversible attraction that a good solvent overcomes, and polystyrene already has an aromatic ring on every unit. Only covalent bridges make the polymer insoluble.",
        "D": "The second vinyl group is exactly the one that reacts to form the cross-link; that is the point of using a divinyl monomer. A few unreacted vinyl groups would in any case not change the solubility of a hydrocarbon polymer in toluene."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q37_glyptal_thermoset",
    "topic": "Polymer Structure and Physical Properties",
    "difficulty_level": "Medium",
    "question_text": "Heating ethylene glycol with phthalic anhydride gives a linear, meltable polyester, but heating glycerol with phthalic anhydride gives glyptal, a hard, insoluble thermosetting resin. Why the difference?",
    "options": [
      {
        "option_id": "A",
        "text": "Glycerol has three hydroxyl groups, so each glycerol unit can carry three ester links; the third link branches the chain and joins it to other chains, building a cross-linked network. Ethylene glycol has only two and can only extend a chain",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Phthalic anhydride reacts with glycerol through both carbonyls and the aromatic ring, but with ethylene glycol only through the carbonyls",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Glycerol's secondary hydroxyl forms hydrogen bonds strong enough to hold the chains together",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The glycerol polyester has a much higher molecular weight, which makes it insoluble",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "In step-growth polymerization the functionality of the monomers decides the architecture. Two difunctional monomers can only form linear chains, however long, and the product melts and dissolves: a thermoplastic polyester. If one monomer is trifunctional, every unit of it that reacts at all three sites becomes a branch point, and once branch points are common enough the branches meet and every chain is tied to the others. Glycerol's three hydroxyls, primary, secondary and primary, are all esterified by phthalic anhydride on heating, so the product is a three-dimensional network, glyptal, used in paints and coatings that must set hard. The same rule makes rigid polyurethane foams from polyols and Bakelite from trifunctional phenol.",
      "approach": "Step 1: Count reactive groups: ethylene glycol 2 OH, glycerol 3 OH, phthalic anhydride 2 acyl groups.\nStep 2: 2 + 2 functionality: each unit continues a chain in two directions: linear.\nStep 3: 3 + 2 functionality: each glycerol with three ester links is a branch point; branches link chains: network.\nStep 4: A network is insoluble and infusible: a thermoset. Heating cures it; it cannot be remelted.",
      "note": "McMurry 31.7 (Polymer Structure and Physical Properties), Problem 31-31, states that glyptal is a highly cross-linked thermosetting resin produced by heating glycerol and phthalic anhydride and asks for a representative segment. The role of a polyalcohol in producing three-dimensional cross-linking is made explicit for polyurethane foams in McMurry 31.4, and anhydrides reacting with alcohols to give esters is McMurry 21.5.",
      "options": {
        "A": "Correct. A trifunctional alcohol gives branch points, and branch points link chains into an insoluble network.",
        "B": "Phthalic anhydride's aromatic ring takes no part in esterification; the anhydride reacts only at its two carbonyls with either alcohol. The difference lies in the alcohols' functionality.",
        "C": "Hydrogen bonds are broken by heat and by solvents; they cannot make a polymer infusible and insoluble. Glyptal's secondary OH is in any case esterified in the cured resin. Covalent cross-links are what set it.",
        "D": "High molecular weight slows dissolution but does not prevent it; linear PET or nylon of very high weight still melts and dissolves. Insolubility with no melting point is the signature of a covalent network."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q38_scheme_ethylhexanol_plasticizer",
    "topic": "Polymer Structure and Physical Properties",
    "difficulty_level": "Hard",
    "question_text": "2-Ethylhexan-1-ol, the alcohol used to make the PVC plasticizer di(2-ethylhexyl) phthalate, is manufactured from butanal in two steps. What is the product of the sequence shown?",
    "reaction_scheme": {
      "reactants": [
        "CCCC=O"
      ],
      "reagents": "1. NaOH, H2O, heat (2 equiv of butanal); 2. H2, Ni",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A four-carbon chain ending in an aldehyde: butanal."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-Ethylhexan-1-ol (racemic)",
        "smiles": "CCCCC(CC)CO",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Octan-1-ol",
        "smiles": "CCCCCCCCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)-2-Ethylhex-2-enal",
        "smiles": "CCC/C=C(\\CC)C=O",
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
      "context": "Butanal has alpha hydrogens, so warm aqueous base brings about an aldol condensation: the enolate of one butanal adds to the carbonyl of another, and the beta-hydroxy aldehyde dehydrates on heating to the conjugated enal, 2-ethylhex-2-enal. The carbon skeleton is branched, because the new bond forms between the alpha carbon of one molecule and the carbonyl carbon of the other: an ethyl group ends up on C2. Catalytic hydrogenation over nickel then reduces both the C=C and the C=O, giving 2-ethylhexan-1-ol. Esterifying two molecules of it with phthalic anhydride gives the plasticizer. The branching is what keeps the ester liquid and compatible with PVC.",
      "approach": "Step 1: Enolate of butanal (at C2) adds to the C=O of a second butanal: 3-hydroxy-2-ethylhexanal.\nStep 2: Heat with base: E1cB dehydration to (E)-2-ethylhex-2-enal, the conjugated enal.\nStep 3: H2, Ni: the C=C and then the aldehyde are hydrogenated: 2-ethylhexan-1-ol, C8H18O, with a new stereocentre at C2 formed as a racemate.\nStep 4: Check the skeleton: a six-carbon main chain with an ethyl branch at C2, as the name says; eight carbons from two butanals with no carbon lost.",
      "note": "McMurry 31.7 (Polymer Structure and Physical Properties), Problem 31-35, states that 2-ethyl-1-hexanol, used in the synthesis of di(2-ethylhexyl) phthalate plasticizer, is made commercially from butanal and asks for the likely synthesis route. The aldol condensation and its dehydration are McMurry 23.1 to 23.3, and hydrogenation of an enal's C=C and C=O is McMurry 19.3 and 8.6.",
      "options": {
        "A": "Correct. Aldol condensation joins two butanals through C2 of one and C1 of the other, and hydrogenation of the enal gives the branched primary alcohol.",
        "B": "Octan-1-ol has a straight chain; an aldol reaction bonds the alpha carbon, not the terminal carbon, of one aldehyde to the carbonyl of the other, so the product is necessarily branched at C2.",
        "C": "This is the intermediate after step 1. Step 2, hydrogenation over nickel, reduces both its double bond and its aldehyde, so the enal is not the final product.",
        "D": "Butan-1-ol would result from hydrogenating butanal without the aldol step; but base is applied first, and the aldol condensation doubles the carbon count before any reduction occurs."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch31_q39_biodegradable_pla",
    "topic": "Degradable Polymers",
    "difficulty_level": "Medium",
    "question_text": "Which of the following polymers is biodegradable in soil, and what feature makes it so?",
    "options": [
      {
        "option_id": "A",
        "text": "Polylactide (PLA), drawn as a trimer: its backbone is joined by ester links that microbial enzymes and water hydrolyse",
        "smiles": "C[C@H](O)C(=O)O[C@@H](C)C(=O)O[C@@H](C)C(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Polyethylene: its long chains are attacked at the chain ends",
        "smiles": "CCCCCCCCCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Polystyrene: its aromatic rings are metabolised by soil bacteria",
        "smiles": "CC(c1ccccc1)CC(c1ccccc1)CC(c1ccccc1)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Poly(vinyl chloride): its C-Cl bonds hydrolyse in moist soil",
        "smiles": "CC(Cl)CC(Cl)CC(Cl)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Biodegradation means that organisms can cut the polymer into small molecules they can metabolise, and that requires bonds in the backbone that enzymes recognise and hydrolyse. Ester links are exactly such bonds: esterases and simple hydrolysis break a polyester into its hydroxy-acid monomers, and lactic acid is a normal metabolite. Polylactide, polyglycolide and polyhydroxybutyrate are therefore degradable, and PGA/PLA copolymers are used as absorbable sutures. Polyethylene, polystyrene and PVC have all-carbon backbones with no hydrolysable link; nothing in soil chemistry cuts a C-C chain at a useful rate, which is why they persist and are recycled instead. Polylactide is drawn here from (S)-lactic acid, the natural enantiomer; its stereoregularity is what lets it crystallise into a useful material.",
      "approach": "Step 1: Look at each backbone: PLA has C-O-C(=O) ester links every three atoms; the other three are continuous carbon chains.\nStep 2: Ester links hydrolyse (acid, base or enzyme catalysed) to a hydroxyl and a carboxylic acid: PLA cleaves to lactic acid.\nStep 3: C-C sigma bonds, C-H bonds, aromatic rings and C-Cl bonds on a hydrocarbon chain have no comparable hydrolysis pathway.\nStep 4: Only the polyester is biodegradable; the others are candidates for recycling (codes 4 or 2, 6 and 3).",
      "note": "McMurry 31 Chemistry Matters (Degradable Polymers) states that among the most common biodegradable polymers are polyglycolic acid (PGA), polylactic acid (PLA) and polyhydroxybutyrate (PHB), that all are polyesters and are therefore susceptible to hydrolysis of their ester links, and that a 90/10 copolymer of PGA with PLA is used to make absorbable sutures degraded and absorbed by the body within 90 days; it also lists the recycling codes for PET, HDPE, PVC, LDPE, polypropylene and polystyrene. Ester hydrolysis is McMurry 21.6.",
      "options": {
        "A": "Correct. A polyester's backbone esters are hydrolysed by enzymes and water to lactic acid, a metabolite; that is what makes PLA degradable.",
        "B": "Polyethylene is a saturated hydrocarbon with no functional group in its backbone; there is no enzyme or hydrolysis that cuts it, from the ends or anywhere else. It persists for decades and is recycled (codes 2 and 4).",
        "C": "The benzene rings are pendant, not part of the backbone, and the backbone is a hydrocarbon chain; even if a ring were oxidised, the chain would stay intact. Polystyrene is not biodegradable.",
        "D": "The C-Cl bonds of PVC are on secondary carbons of a hydrocarbon chain and are not hydrolysed under environmental conditions, and hydrolysing them would in any case leave the carbon backbone whole."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  }
];
