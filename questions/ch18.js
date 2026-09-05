// OChemStudyBuddy - McMurry Chapter 18
// Author: A. Elangovan, PhD
var CH18_QUESTIONS = [
  {
    "question_id": "ch18_q_epoxide_hydrolysis_stereo",
    "topic": "Epoxide Ring Opening",
    "difficulty_level": "Hard",
    "question_text": "What is the product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "C[C@H]1O[C@@H]1C"
      ],
      "reagents": "H3O+ (dilute)",
      "conditions": "H2O, 25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A three-membered ring containing one oxygen; each of the two ring carbons carries a methyl group, one drawn on a wedge and the other on a dash, so the methyls are on opposite faces: the trans epoxide."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "(2R,3S)-Butane-2,3-diol (the meso diol)",
        "smiles": "C[C@@H](O)[C@@H](O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2R,3R)-Butane-2,3-diol",
        "smiles": "C[C@@H](O)[C@H](O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2S,3S)-Butane-2,3-diol",
        "smiles": "C[C@H](O)[C@@H](O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Butan-2-one",
        "smiles": "CCC(C)=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Acid-catalysed hydrolysis of an epoxide is an anti addition: the protonated epoxide is attacked by water from the face opposite the ring oxygen, so the carbon attacked is inverted while the other keeps its configuration. On a trans-2,3-disubstituted epoxide the two ring carbons are related by a twofold axis, so attack at either one gives the same product, and inverting one of two like centres turns (R,R) into (R,S): the meso diol. The cis epoxide, by the same logic, gives the racemic pair.",
      "approach": "Step 1: The epoxide drawn is (2R,3R)-2,3-dimethyloxirane: the methyls are trans.\nStep 2: Protonation on oxygen; water attacks C2 from the back. C2 is inverted (R becomes S), C3 is untouched (still R).\nStep 3: The product is (2S,3R)-butane-2,3-diol. Attack at C3 instead gives (2R,3S), which is the same compound: a molecule with two like stereocentres of opposite descriptor and an internal mirror plane.\nStep 4: The meso diol, a single achiral compound, is the only product.",
      "note": "McMurry 18.5 (Reactions of Epoxides: Ring-Opening) shows the anti stereochemistry on cyclohexene oxide, where the product is the trans diol. The open-chain version is the harder test because trans and cis at the epoxide do not map onto trans and cis in the product; they map onto meso and racemic. The same pairing appears with bromine addition to but-2-ene, and for the same reason: an anti addition to a symmetric alkene or epoxide swaps one descriptor of two.",
      "options": {
        "A": "Correct. Anti opening inverts one of the two like centres of the (R,R) epoxide, giving the (R,S) diol; attack at either carbon gives the same meso compound.",
        "B": "The (R,R) diol would require both centres to keep their descriptors, a syn opening in which water arrives on the same face the oxygen occupied; backside attack rules it out.",
        "C": "The (S,S) diol would require both centres to invert, but only the carbon that is attacked inverts; the other keeps the C-O bond it had and its configuration.",
        "D": "Butan-2-one would be a rearrangement in which a hydride shifts to the cationic carbon before water arrives; in dilute aqueous acid the nucleophile is present in vast excess and traps the protonated epoxide first."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q4_roadmap_methoxypropanol",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway. Determine the correct compounds matching labels B, C and D.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "C=CC",
          "label": "Compound A",
          "alt": "Propene, a three-carbon chain with a terminal double bond, drawn as compound A.",
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
          "reagents": "Br2, H2O"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "NaOH, H2O"
        },
        {
          "from": "C",
          "to": "D",
          "reagents": "NaOCH3, CH3OH"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "B: 1-bromopropan-2-ol, C: 2-methyloxirane (propylene oxide), D: 1-methoxypropan-2-ol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "B: 2-bromopropan-1-ol, C: 2-methyloxirane (propylene oxide), D: 1-methoxypropan-2-ol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "B: 1-bromopropan-2-ol, C: 2-methyloxirane (propylene oxide), D: 2-methoxypropan-1-ol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "B: propane-1,2-diol, C: 2-methyloxirane (propylene oxide), D: 1-methoxypropan-2-ol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This is the halohydrin route to an epoxide followed by a base-catalysed opening. Bromine in water adds through a bromonium ion that water opens at the more substituted carbon, so the bromine sits on C1 and the OH on C2. Hydroxide turns the OH into an alkoxide, which displaces the bromide on the neighbouring carbon to close the three-membered ring. Methoxide then opens that ring at its less hindered carbon, C1, and the oxygen ends up on C2 as the alcohol.",
      "approach": "Step 1: Propene + Br2/H2O: Markovnikov halohydrin, Br on the terminal carbon, OH on the central one. B is 1-bromopropan-2-ol.\nStep 2: B + NaOH: the alkoxide attacks C1 from the back and expels bromide; an intramolecular Williamson closes the epoxide. C is 2-methyloxirane.\nStep 3: C + methoxide in methanol: SN2 at the CH2 of the epoxide. The methoxy goes to C1 and the alkoxide on C2 is protonated by the solvent.\nStep 4: D is 1-methoxypropan-2-ol.",
      "note": "McMurry 18.4 (Cyclic Ethers: Epoxides) gives the halohydrin cyclisation as the second route to epoxides after peroxyacid oxidation, and the industrial synthesis of propylene oxide ran this way for decades. The regiochemistry of the first step is the same Markovnikov selectivity as oxymercuration: the halonium ion opens at the carbon that can best carry positive charge. The last step is the base-catalysed rule of 18.5; with acid and methanol the methoxy group would go to C2 instead.",
      "options": {
        "A": "Correct. Markovnikov bromohydrin, intramolecular displacement to the epoxide, and methoxide opening at the less hindered CH2 to give 1-methoxypropan-2-ol.",
        "B": "2-Bromopropan-1-ol has the bromine on the central carbon, the reverse regiochemistry; water opens the bromonium ion at the more substituted carbon, so the OH, not the bromine, sits on C2.",
        "C": "2-Methoxypropan-1-ol would come from acid-catalysed opening, where methanol attacks the more substituted carbon; methoxide without acid attacks the CH2.",
        "D": "A diol is what bromine in water does not give: the bromonium ion is opened by water once, and the bromine stays. A diol also could not be closed to an epoxide by hydroxide, since it has no leaving group."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q26_scheme_williamson_tbu_ethyl",
    "topic": "Williamson Ether Synthesis",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "CC(C)(C)O"
      ],
      "reagents": "1. NaH, THF\n2. CH3CH2Br",
      "conditions": "25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "tert-Butyl alcohol: a carbon with three methyl groups and one hydroxyl group."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "tert-Butyl ethyl ether (2-ethoxy-2-methylpropane)",
        "smiles": "CCOC(C)(C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Methylpropene",
        "smiles": "CC(C)=C",
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
        "text": "Diethyl ether",
        "smiles": "CCOCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Williamson synthesis joins an alkoxide to an alkyl halide by SN2, so the halide must be primary (or methyl) and any bulk belongs on the alkoxide side, where it does no harm. tert-Butoxide with bromoethane is the right way round: the hindered alkoxide is the nucleophile and the unhindered primary bromide is the electrophile. The other pairing, ethoxide with tert-butyl bromide, would give isobutylene by E2 and no ether at all.",
      "approach": "Step 1: NaH deprotonates tert-butyl alcohol to sodium tert-butoxide; hydrogen gas leaves.\nStep 2: tert-Butoxide attacks the CH2 of bromoethane from the back; bromide leaves. Bulk on the nucleophile slows SN2 but does not stop it at a primary carbon.\nStep 3: The product joins the tert-butyl group to the ethyl group through oxygen.\nStep 4: tert-Butyl ethyl ether.",
      "note": "McMurry 18.2 (Preparing Ethers) states the rule: the Williamson synthesis works best with primary halides, and an unsymmetrical ether is disconnected so that the halide is the less hindered partner. The industrial route to tert-butyl ethers is different again, acid-catalysed addition of the alcohol to 2-methylpropene, and that reaction is how tert-butyl methyl ether (MTBE) was made by the million tonnes as a fuel additive.",
      "options": {
        "A": "Correct. The bulky alkoxide displaces bromide from the primary carbon of bromoethane; the ether links the tert-butyl and ethyl groups through oxygen.",
        "B": "2-Methylpropene is what the reverse pairing gives: ethoxide as base and tert-butyl bromide as substrate eliminate by E2. Here the tert-butyl group is on the alkoxide and cannot eliminate.",
        "C": "2-Bromo-2-methylpropane would require bromine to end up on the tert-butyl carbon; bromide is the leaving group from the ethyl carbon and is not transferred anywhere.",
        "D": "Diethyl ether would need ethoxide as the nucleophile; the alkoxide made by NaH here is tert-butoxide, and only one ethyl group is offered."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q50_scheme_alkoxymercuration",
    "topic": "Alkoxymercuration",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "CC1=CCCCC1"
      ],
      "reagents": "1. Hg(OAc)2, CH3OH\n2. NaBH4",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "1-Methylcyclohexene: a cyclohexene ring whose double bond carries a methyl group on one carbon."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-Methoxy-1-methylcyclohexane",
        "smiles": "COC1(C)CCCCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Methoxy-2-methylcyclohexane",
        "smiles": "COC1CCCCC1C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Methylcyclohexanol",
        "smiles": "CC1(O)CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Methylcyclohexene (no reaction)",
        "smiles": "CC1=CCCCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Alkoxymercuration is oxymercuration run in an alcohol instead of water. Mercury(II) acetate forms the mercurinium ion across the alkene, the alcohol opens it at the more substituted carbon, and sodium borohydride replaces the C-Hg bond with C-H. The net result is Markovnikov addition of the alcohol across the double bond: the alkoxy group lands on the carbon that can best carry positive charge, with no rearrangement, and the product is an ether the Williamson synthesis could not make, since it would need a tertiary halide.",
      "approach": "Step 1: Hg(OAc)2 adds to 1-methylcyclohexene: a bridged mercurinium ion with more positive character on the tertiary carbon.\nStep 2: Methanol attacks that tertiary carbon; loss of a proton gives the beta-mercurio ether.\nStep 3: NaBH4 removes the mercury and puts hydrogen on the secondary carbon.\nStep 4: 1-Methoxy-1-methylcyclohexane, the Markovnikov ether.",
      "note": "McMurry 18.2 (Preparing Ethers) gives this as the second general ether synthesis and notes that mercuric trifluoroacetate works better than the acetate for hindered alcohols. The reaction is the ether counterpart of the alcohol synthesis in 17.3: the same mercurinium ion, a different nucleophile. It is also the one clean way to a tertiary alkyl ether, because a tertiary halide eliminates under Williamson conditions and a tertiary alkoxide cannot be attacked at all.",
      "options": {
        "A": "Correct. Methanol opens the mercurinium ion at the tertiary carbon and borohydride removes the mercury from the other one: Markovnikov addition of methanol.",
        "B": "1-Methoxy-2-methylcyclohexane places the methoxy on the less substituted carbon, the anti-Markovnikov result; the mercurinium ion is opened where the positive charge is best stabilised, the tertiary carbon.",
        "C": "1-Methylcyclohexanol is the product when the solvent is water; in methanol the nucleophile that opens the mercurinium ion is methanol, so an ether forms.",
        "D": "Alkenes react with mercuric acetate whatever the hydroxylic solvent; methanol is as good a nucleophile toward the mercurinium ion as water is."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q65_scheme_mtbe_hi_cleavage",
    "topic": "Ether Cleavage",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "COC(C)(C)C"
      ],
      "reagents": "HI (1 equiv)",
      "conditions": "heat",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A methoxy group attached to a carbon that bears three methyl groups: tert-butyl methyl ether."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-Iodo-2-methylpropane and methanol",
        "smiles": "CC(C)(C)I.CO",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Iodomethane and 2-methylpropan-2-ol",
        "smiles": "CI.CC(C)(C)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Methylpropene and methanol",
        "smiles": "CC(C)=C.CO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "tert-Butyl methyl ether (no reaction)",
        "smiles": "COC(C)(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When one side of a protonated ether is tertiary, the cleavage changes mechanism. The tertiary carbon leaves as a stable cation, an SN1 process, so the C-O bond that breaks is the tertiary one and the iodide ends up on the tertiary carbon. The methyl side, which would win an SN2 contest, is not attacked at all because the SN1 path is much faster. Methanol is released as the alcohol.",
      "approach": "Step 1: HI protonates the ether: (CH3)3C-OH+-CH3.\nStep 2: The C-O bond to the tertiary carbon ionises, giving the tert-butyl cation and neutral methanol; this is the rate-determining step.\nStep 3: Iodide captures the cation.\nStep 4: 2-Iodo-2-methylpropane and methanol. A trace of 2-methylpropene forms by loss of a proton from the cation, but under HI the alkene re-adds the acid and returns to the same tertiary iodide.",
      "note": "McMurry 18.3 (Reactions of Ethers: Acidic Cleavage) draws exactly this contrast: primary and secondary alkyl groups are cleaved by SN2 at the less hindered carbon, tertiary, benzylic and allylic groups by SN1 at the carbon that ionises. The two ethers in this chapter's items, isopropyl methyl ether and tert-butyl methyl ether, look alike and give opposite regiochemistry, which is the whole point of putting them side by side. The mildness of tert-butyl ether cleavage is what makes tert-butyl a useful protecting group for alcohols.",
      "options": {
        "A": "Correct. The tertiary C-O bond ionises to the tert-butyl cation, which iodide captures; methanol is the leaving alcohol.",
        "B": "Iodomethane and tert-butyl alcohol are the SN2 answer, right for isopropyl methyl ether but wrong here: a tertiary carbon ionises by SN1 far faster than iodide can attack a methyl group.",
        "C": "2-Methylpropene is formed reversibly from the cation but is not isolated: in the presence of HI it adds the acid again (Markovnikov) and ends up as the same tertiary iodide.",
        "D": "Tertiary ethers are the most easily cleaved of all, precisely because the tertiary cation is so accessible; no reaction is the wrong instinct here."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q90_scheme_epoxide_methoxide",
    "topic": "Epoxide Ring Opening",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "CC1(C)CO1"
      ],
      "reagents": "NaOCH3",
      "conditions": "CH3OH, 25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A three-membered ring containing an oxygen atom; one ring carbon bears two methyl groups and the other is a CH2."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-Methoxy-2-methylpropan-2-ol",
        "smiles": "COCC(C)(C)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Methoxy-2-methylpropan-1-ol",
        "smiles": "COC(C)(C)CO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Methylpropane-1,2-diol",
        "smiles": "CC(C)(O)CO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,2-Dimethoxy-2-methylpropane",
        "smiles": "COCC(C)(C)OC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Under basic conditions an epoxide is opened by a strong nucleophile in a plain SN2 reaction, with the ring strain providing the driving force that an ordinary ether lacks. SN2 goes to the less hindered carbon, so methoxide attacks the CH2 of 2,2-dimethyloxirane and leaves the alkoxide on the carbon that carries the two methyls. Protonation by the methanol solvent gives a tertiary alcohol with a primary methoxy group.",
      "approach": "Step 1: Methoxide attacks the unsubstituted CH2 carbon of the epoxide from the back; the C-O bond to that carbon breaks.\nStep 2: The alkoxide is left on the quaternary carbon (the one bearing both methyls).\nStep 3: Methanol protonates the alkoxide, regenerating methoxide, so the base is catalytic.\nStep 4: 1-Methoxy-2-methylpropan-2-ol: methoxy on C1, hydroxyl on C2.",
      "note": "McMurry 18.5 (Reactions of Epoxides: Ring-Opening) contrasts this base-catalysed opening with the acid-catalysed one on the same unsymmetrical epoxide: with a strong nucleophile and no acid, sterics decide and the nucleophile takes the less substituted carbon; with acid, the more substituted carbon carries enough positive charge in the protonated epoxide that the nucleophile goes there instead. Same epoxide, same nucleophile atom, opposite regiochemistry.",
      "options": {
        "A": "Correct. Methoxide attacks the less hindered CH2 by SN2, and the oxygen left on the tertiary carbon is protonated to the alcohol.",
        "B": "2-Methoxy-2-methylpropan-1-ol is the acid-catalysed product, in which methanol attacks the more substituted carbon of the protonated epoxide; without acid, a strong nucleophile chooses by sterics.",
        "C": "The diol would need water or hydroxide as the nucleophile; here methoxide attacks, and the product must contain a methoxy group.",
        "D": "The dimethoxy compound would require the alkoxide formed on opening to be methylated, which needs iodomethane, not methanol; the solvent simply protonates it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q91_scheme_epoxide_acid_methanol",
    "topic": "Epoxide Ring Opening",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "CC1(C)CO1"
      ],
      "reagents": "CH3OH, H2SO4 (cat.)",
      "conditions": "25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "2,2-Dimethyloxirane: an epoxide ring with two methyl groups on one carbon and two hydrogens on the other."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-Methoxy-2-methylpropan-1-ol",
        "smiles": "COC(C)(C)CO",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Methoxy-2-methylpropan-2-ol",
        "smiles": "COCC(C)(C)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Methylpropane-1,2-diol",
        "smiles": "CC(C)(O)CO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,2-Dimethoxy-2-methylpropane",
        "smiles": "COCC(C)(C)OC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "With acid present the epoxide oxygen is protonated first, and the ring then opens with a good deal of carbocation character at the carbon that can best support it. On 2,2-dimethyloxirane that is the tertiary carbon, so the weak nucleophile methanol attacks there, even though it is the more hindered position. The C-O bond to the tertiary carbon breaks, the primary carbon keeps its oxygen as a CH2OH group, and the product is a primary alcohol with a tertiary methoxy group.",
      "approach": "Step 1: Sulfuric acid protonates the epoxide oxygen; the ring is now a very good leaving group.\nStep 2: As the C-O bond to the tertiary carbon lengthens, positive charge builds on that carbon, and methanol bonds to it. The transition state is SN2-like in timing but SN1-like in electronics.\nStep 3: Loss of a proton from the oxonium ion gives the ether; the former ring oxygen is now the CH2OH.\nStep 4: 2-Methoxy-2-methylpropan-1-ol.",
      "note": "McMurry 18.5 (Reactions of Epoxides: Ring-Opening) gives the acid-catalysed rule in two parts: with a tertiary carbon in the ring the nucleophile attacks it, and between a primary and a secondary carbon the nucleophile attacks the less hindered one, because a secondary carbon does not carry enough positive charge to overcome the steric cost. The text's own example is 2-methyl-1,2-epoxypropane with methanol, which is this item; the base-catalysed reaction on the same epoxide is the companion scheme.",
      "options": {
        "A": "Correct. The protonated epoxide opens with cationic character at the tertiary carbon, and methanol bonds there; the primary carbon keeps the oxygen as CH2OH.",
        "B": "1-Methoxy-2-methylpropan-2-ol is the product of methoxide without acid, where sterics send the nucleophile to the CH2; acid reverses the regiochemistry by putting the positive charge on the tertiary carbon.",
        "C": "The diol needs water as the nucleophile; in methanol with catalytic acid the nucleophile is methanol, and a methoxy group must appear in the product.",
        "D": "Both oxygens methylated would need the primary alcohol to be etherified as well, which catalytic acid in methanol does not do to a primary alcohol at room temperature."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q15_roadmap_diethyl_disulfide",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Medium",
    "question_text": "Examine the following multi-step synthetic pathway. Determine the correct compounds matching labels B, C and D.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCO",
          "label": "Compound A",
          "alt": "Ethanol: a two-carbon chain ending in a hydroxyl group.",
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
          "reagents": "PBr3"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1. (H2N)2C=S\n2. NaOH, H2O"
        },
        {
          "from": "C",
          "to": "D",
          "reagents": "I2"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "B: bromoethane, C: ethanethiol, D: diethyl disulfide",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "B: bromoethane, C: ethanethiol, D: ethanesulfonic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "B: bromoethane, C: diethyl sulfide, D: diethyl sulfoxide",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "B: bromoethane, C: ethanethiol, D: iodoethane",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An alcohol is carried to a disulfide in three steps that each belong to this chapter or the last: PBr3 makes the primary bromide, thiourea followed by hydroxide makes the thiol without the over-alkylation that hydrosulfide gives, and a mild oxidant such as iodine or bromine couples two thiols through an S-S bond. Iodine is too weak an oxidant to take sulfur any further; the sulfonic acid needs hot nitric acid or permanganate.",
      "approach": "Step 1: Ethanol + PBr3: SN2 displacement of the phosphite; B is bromoethane.\nStep 2: Bromoethane + thiourea: the sulfur attacks by SN2 to give the S-ethylisothiouronium salt; NaOH hydrolyses it to the thiol and urea. C is ethanethiol.\nStep 3: Two molecules of ethanethiol + I2: oxidation to the disulfide with loss of two H as HI.\nStep 4: D is diethyl disulfide, CH3CH2-S-S-CH2CH3.",
      "note": "McMurry 18.7 (Thiols and Sulfides) gives both sulfur steps: the thiourea route as the way to avoid the dialkyl sulfide that forms when the first-made thiolate outcompetes hydrosulfide for the remaining halide, and the thiol-to-disulfide oxidation as a reversible couple, with zinc and acid taking the disulfide back to the thiol. The same S-S bond formed and broken between cysteine residues is what holds many protein structures together, which is where this chemistry reappears in Ch 26.",
      "options": {
        "A": "Correct. PBr3 gives the bromide, thiourea then hydroxide gives the thiol cleanly, and iodine oxidises two thiols to the disulfide.",
        "B": "Ethanesulfonic acid is the product of a strong oxidant such as hot nitric acid or permanganate; iodine stops at the disulfide, one electron per sulfur.",
        "C": "Diethyl sulfide is the over-alkylation product of the hydrosulfide route (NaSH), which the thiourea method is chosen to avoid; and iodine does not oxidise a sulfide to a sulfoxide, that takes hydrogen peroxide.",
        "D": "Iodoethane would require iodine to substitute at carbon, which molecular iodine does not do; it oxidises the S-H, and the carbon skeleton is untouched."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q11_ether_cleavage_regiochemistry",
    "topic": "Ether Cleavage",
    "difficulty_level": "Hard",
    "question_text": "Predict the major organic products when isopropyl methyl ether is treated with one equivalent of concentrated hydroiodic acid (HI) at room temperature.",
    "question_smiles": "CC(C)OC",
    "options": [
      {
        "option_id": "A",
        "text": "iodomethane and propan-2-ol",
        "smiles": "CI.CC(C)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-iodopropane and methanol",
        "smiles": "CC(C)I.CO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "iodomethane and 2-iodopropane",
        "smiles": "CI.CC(C)I",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "methanol and propan-2-ol",
        "smiles": "CO.CC(C)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Ethers are cleaved only by the strong acids HI and HBr, and the reaction is a nucleophilic substitution on the protonated ether: the oxonium ion is a good leaving group, and the halide attacks one of the two carbons bonded to it. Which carbon depends on the substitution pattern. Primary and secondary carbons are attacked by SN2, so the halide goes to the less hindered one; a tertiary, benzylic or allylic carbon leaves as a cation and reacts by SN1. Isopropyl methyl ether offers a methyl and a secondary carbon, both SN2 candidates, and the methyl wins.",
      "approach": "Step 1: HI protonates the ether oxygen: (CH3)2CH-OH+-CH3, a dialkyloxonium ion.\nStep 2: Iodide chooses between the methyl carbon and the secondary isopropyl carbon. Neither can form a stable cation, so the pathway is SN2, and SN2 goes to the less hindered carbon.\nStep 3: Iodide attacks the methyl; the C-O bond to it breaks, releasing propan-2-ol as the leaving alcohol.\nStep 4: With one equivalent of HI the products are iodomethane and propan-2-ol. Excess HI would go on to convert the alcohol to 2-iodopropane.",
      "note": "McMurry 18.3 (Reactions of Ethers: Acidic Cleavage) sets out the rule this item turns on: SN2 at the less hindered carbon when both alkyl groups are primary or secondary, SN1 or E1 when one is tertiary, benzylic or allylic. The same substrate class is why tert-butyl ethers are cleaved under conditions that leave a methyl ether alone; the tertiary carbon ionises and the halide never has to reach a crowded centre. Aryl alkyl ethers cleave on the alkyl side only, because an aryl carbon can do neither SN2 nor SN1.",
      "options": {
        "A": "Correct. Both carbons on the oxygen are SN2 candidates, so iodide takes the less hindered methyl carbon; the isopropyl side leaves as propan-2-ol.",
        "B": "2-Iodopropane and methanol would need iodide to attack the secondary carbon while a methyl carbon is available; SN2 goes to the less hindered site, and a secondary carbon cannot form the cation an SN1 path would need.",
        "C": "Two alkyl iodides form only with excess HI, when the propan-2-ol released in the first cleavage is itself converted to 2-iodopropane; one equivalent stops at the first substitution.",
        "D": "Two alcohols would require the ether to be hydrolysed rather than substituted, which HI does not do; the halide, not water, is the nucleophile, and one carbon must end up bonded to iodine."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "Each option names two products but drew one; B and D rendered the same picture. Dot-disconnected before refiling to Ch 18, where acidic ether cleavage is taught.",
    "structure_alt": "An isopropyl group and a methyl group joined through a single oxygen atom."
  },
  {
    "question_id": "ch18_q19_intramolecular_williamson",
    "topic": "Williamson Ether Synthesis",
    "difficulty_level": "Medium",
    "question_text": "What is the major product when 4-bromobutan-1-ol is treated with sodium hydride in THF?",
    "question_smiles": "OCCCCBr",
    "options": [
      {
        "option_id": "A",
        "text": "Tetrahydrofuran (oxolane)",
        "smiles": "C1CCOC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Tetrahydropyran (oxane)",
        "smiles": "C1CCOCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "But-3-en-1-ol",
        "smiles": "C=CCCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Butane-1,4-diol",
        "smiles": "OCCCCO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Williamson synthesis can be run within one molecule: when the alkoxide and the alkyl halide are at opposite ends of the same chain, the alkoxide attacks its own C-Br carbon by SN2 and a cyclic ether forms. Sodium hydride supplies the alkoxide without adding any competing nucleophile or water. The ring size is set by the chain: four carbons and the oxygen make a five-membered ring, which is the size cyclisation favours most, and the reaction is fast, clean and first-order in the substrate.",
      "approach": "Step 1: NaH removes the O-H proton; hydrogen gas leaves and the sodium alkoxide of 4-bromobutan-1-ol forms.\nStep 2: The alkoxide oxygen reaches the C-Br carbon at the other end of the same molecule and attacks from the side opposite the bromine.\nStep 3: Bromide leaves; the new C-O bond closes a ring containing C1, C2, C3, C4 and the oxygen: five atoms.\nStep 4: Tetrahydrofuran, with sodium bromide as the by-product.",
      "note": "McMurry 18.2 (Preparing Ethers) presents the Williamson synthesis intermolecularly; the intramolecular version is the same SN2 with the nucleophile tethered to the electrophile, and because the two ends are already next to each other it needs no high concentration and outruns the intermolecular reaction by a large factor. Five- and six-membered rings close readily; three-membered rings also close (that is how halohydrins give epoxides), while four- and larger-than-six-membered rings are slow.",
      "options": {
        "A": "Correct. The alkoxide displaces bromide within the same molecule, closing a ring of four carbons and one oxygen: tetrahydrofuran.",
        "B": "Tetrahydropyran has five carbons in the ring; the chain here has four, so the ring the oxygen can close contains four carbons and the oxygen, five atoms in all.",
        "C": "But-3-en-1-ol would come from E2 elimination of HBr; an alkoxide reaching the C-Br carbon from the back in its own molecule substitutes far faster than it removes a beta proton.",
        "D": "The diol would need hydroxide or water to displace the bromide; with NaH in THF the only nucleophile is the molecule's own alkoxide, and it forms the ring instead."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "_why": "The stem named 5-bromopentan-1-ol, which closes a six-membered ring (oxane), while every option and the feedback discuss tetrahydrofuran. Substrate corrected to the four-carbon chain the rest of the item assumes. Refiled to Ch 18 (Williamson synthesis) unaudited.",
    "structure_alt": "A four-carbon chain with an OH group at one end and a bromine atom at the other."
  },
  {
    "question_id": "ch18_q20_ether_nomenclature",
    "topic": "Naming Ethers",
    "difficulty_level": "Easy",
    "question_text": "What is the IUPAC name of the ether shown below?",
    "question_smiles": "CC(C)OCC",
    "structure_alt": "An oxygen atom joining a two-carbon chain to a carbon that bears two methyl groups.",
    "options": [
      {
        "option_id": "A",
        "text": "2-Ethoxypropane",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Ethoxypropane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethyl propyl ether",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Isopropoxyethane",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An ether is named substitutively by treating the smaller alkyl group plus its oxygen as an alkoxy substituent on the larger alkane, which is the parent. The parent chain is numbered to give the alkoxy group the lowest locant. Simple ethers may also be named as functional-class names by citing both groups alphabetically before the word ether, but the two systems must not be mixed, and the parent must be the larger fragment.",
      "approach": "Step 1: Identify the two groups on oxygen: an ethyl group (two carbons) and an isopropyl group (three carbons).\nStep 2: The larger group is the parent: propane. The ethyl-plus-oxygen unit is the substituent: ethoxy.\nStep 3: The ethoxy group is on the middle carbon of propane: locant 2.\nStep 4: 2-Ethoxypropane; the functional-class name ethyl isopropyl ether is also acceptable.",
      "note": "McMurry 18.1 (Names and Properties of Ethers) uses the two-group functional-class names for simple ethers and the alkoxy-substituent names for anything more complex, and the ACS exam does the same, so both forms should be recognised on sight. The trap in the wrong answers is choosing the smaller fragment as the parent: isopropoxyethane describes the same molecule but breaks the rule that the parent is the senior, larger chain.",
      "options": {
        "A": "Correct. Propane is the larger fragment and so the parent; the ethoxy group sits on its central carbon.",
        "B": "1-Ethoxypropane has the oxygen on a terminal carbon of the propane chain; the drawn compound has it on the central carbon, which carries the two methyls.",
        "C": "Ethyl propyl ether is a different compound, with an unbranched propyl group; the drawn three-carbon group is attached through its middle carbon, an isopropyl group.",
        "D": "The right molecule under the wrong name: this takes ethane as the parent and the larger isopropyl-oxygen unit as the substituent, which reverses the rule that the larger chain is the parent."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q21_epoxide_nomenclature_stereo",
    "topic": "Naming Ethers",
    "difficulty_level": "Hard",
    "question_text": "What is the IUPAC name, including stereodescriptors, of the epoxide shown below?",
    "question_smiles": "C[C@H]1O[C@@H]1C",
    "structure_alt": "A three-membered ring containing one oxygen; each of the two ring carbons carries a methyl group, one drawn on a wedge and the other on a dash.",
    "options": [
      {
        "option_id": "A",
        "text": "(2R,3R)-2,3-Dimethyloxirane",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2S,3S)-2,3-Dimethyloxirane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2R,3S)-2,3-Dimethyloxirane",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(2R,3R)-2,3-Dimethyloxetane",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The three-membered cyclic ether is oxirane, numbered with the oxygen as position 1 and the carbons as 2 and 3. Both ring carbons here are stereocentres. At each, the priorities are the ring oxygen first, then the other ring carbon (which bears O, C, H), then the methyl, then hydrogen. With the methyls on opposite faces the two centres have the same descriptor, and reading the drawing gives (R) at both.",
      "approach": "Step 1: Ring: one oxygen and two carbons, oxirane; O is position 1, so the carbons are 2 and 3 and the methyls are 2,3-dimethyl.\nStep 2: Priorities at C2: O > C3 > CH3 > H. Same at C3 by symmetry.\nStep 3: Place the hydrogen at each centre away from the viewer and trace O to ring carbon to methyl: clockwise at both, (R) and (R).\nStep 4: (2R,3R)-2,3-Dimethyloxirane, the trans isomer, one enantiomer of the chiral pair.",
      "note": "McMurry 18.4 (Cyclic Ethers: Epoxides) names epoxides as oxiranes in the systematic style and as alkene oxides (trans-2-butene oxide) in the common style; both point at the same compound. For a symmetrically substituted epoxide the descriptors carry the geometry: like descriptors, (R,R) or (S,S), mean trans and chiral; unlike descriptors, (R,S), mean cis and meso, because the mirror plane through the oxygen and the ring midpoint makes the two centres mirror images of each other.",
      "options": {
        "A": "Correct. Oxirane parent, methyls at C2 and C3 on opposite faces, and each centre reads (R) when the hydrogen is placed away from the viewer.",
        "B": "(2S,3S) is the enantiomer, the other trans isomer; it results from reading each centre with the hydrogen toward the viewer instead of away.",
        "C": "(2R,3S) is the cis isomer, with both methyls on the same face; it is the meso compound, and the drawing shows one methyl wedged and the other dashed.",
        "D": "Oxetane is the four-membered cyclic ether; the ring here has three atoms, one oxygen and two carbons, which is oxirane."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q22_ether_solubility",
    "topic": "Properties of Ethers",
    "difficulty_level": "Medium",
    "question_text": "Which of the following compounds is miscible with water in all proportions?",
    "options": [
      {
        "option_id": "A",
        "text": "Tetrahydrofuran",
        "smiles": "C1CCOC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Diethyl ether",
        "smiles": "CCOCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dibutyl ether",
        "smiles": "CCCCOCCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Pentane",
        "smiles": "CCCCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An ether cannot donate a hydrogen bond, so it boils about where an alkane of the same size does, but its oxygen accepts hydrogen bonds from water, so it dissolves far better than an alkane. How well depends on the ratio of hydrocarbon to oxygen and on how exposed the oxygen is. Tetrahydrofuran has four carbons tied back into a ring with the oxygen's lone pairs fully exposed and is miscible with water; diethyl ether, with the same four carbons in two floppy chains, dissolves to about 7 g per 100 mL; dibutyl ether, with eight carbons, barely dissolves at all.",
      "approach": "Step 1: Rule out the alkane: pentane has no oxygen and is essentially insoluble.\nStep 2: Compare hydrocarbon load per oxygen: THF and diethyl ether four carbons each, dibutyl ether eight; dibutyl ether is the least soluble of the three ethers.\nStep 3: Between the two C4 ethers, the ring holds THF's carbons compactly and leaves the oxygen open to water; diethyl ether's two ethyl chains shield the oxygen more and add surface that water must cage.\nStep 4: Tetrahydrofuran is miscible with water.",
      "note": "McMurry 18.1 (Names and Properties of Ethers) makes the boiling-point comparison, ether against alkane, and the solubility comparison follows from the same structural fact seen from water's side. This is why THF is the ether of choice when a reaction must be run in a water-miscible solvent, and why diethyl ether is the one used for extraction: it forms a separate layer, and its low boiling point (35 °C) lets it be removed afterwards.",
      "options": {
        "A": "Correct. Four carbons held in a ring around an exposed oxygen give THF the best oxygen-to-hydrocarbon ratio of the four, and it mixes with water in any proportion.",
        "B": "Diethyl ether has the same carbon count as THF but two open chains that shield the oxygen and add hydrocarbon surface; it dissolves to about 7 g per 100 mL and forms a separate layer, which is why it is the extraction solvent.",
        "C": "Dibutyl ether carries eight carbons on one oxygen and is almost insoluble in water, about 0.03 g per 100 mL.",
        "D": "Pentane has no atom that can accept a hydrogen bond; it is insoluble in water."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q23_crown_ether",
    "topic": "Crown Ethers",
    "difficulty_level": "Medium",
    "question_text": "Potassium permanganate is insoluble in benzene, but when a crown ether is added it dissolves to give a purple solution that oxidises alkenes cleanly. Which crown ether does this best?",
    "options": [
      {
        "option_id": "A",
        "text": "18-Crown-6",
        "smiles": "C1COCCOCCOCCOCCOCCO1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "15-Crown-5",
        "smiles": "C1COCCOCCOCCOCCO1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "12-Crown-4",
        "smiles": "C1COCCOCCOCCO1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Diethyl ether",
        "smiles": "CCOCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A crown ether is a cyclic polyether whose ring of oxygens can wrap a metal cation, with the size of the cavity deciding which cation fits: 12-crown-4 binds lithium, 15-crown-5 binds sodium, and 18-crown-6 binds potassium. The complexed cation has a hydrocarbon exterior, so the whole salt dissolves in a non-polar solvent, and the anion, stripped of its solvation shell, becomes far more reactive than it is in water. Potassium permanganate needs the potassium-sized crown.",
      "approach": "Step 1: Identify the cation: potassium.\nStep 2: Match the cavity: 18-crown-6 has six oxygens around a hole about 2.6 to 3.2 angstroms across, the size of K+.\nStep 3: The K+ complex has its outside made of CH2 groups and dissolves in benzene, dragging permanganate with it.\nStep 4: 18-Crown-6. The purple benzene solution, sometimes called purple benzene, is a strong, selective oxidant.",
      "note": "McMurry 18.6 (Crown Ethers) gives the name convention, x-crown-y for a ring of x atoms carrying y oxygens, and the cavity-size matching, and it makes the point that the naked anion is the reagent. The same trick underlies the phase-transfer catalysts that make fluoride and cyanide usable in organic solvents. Crown ethers were discovered by Charles Pedersen at DuPont as an accidental by-product and earned him the 1987 Nobel Prize.",
      "options": {
        "A": "Correct. The six-oxygen ring fits potassium, the complexed salt dissolves in benzene, and the unsolvated permanganate ion oxidises alkenes readily.",
        "B": "15-Crown-5 has a cavity sized for sodium; potassium is too large for it, and the complex is weak.",
        "C": "12-Crown-4 fits lithium, the smallest of the alkali metal cations; it cannot hold potassium.",
        "D": "Diethyl ether has one oxygen and no cavity; it solvates cations only weakly and does not dissolve potassium permanganate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q24_williamson_pair_choice",
    "topic": "Williamson Ether Synthesis",
    "difficulty_level": "Medium",
    "question_text": "Which combination of reagents gives tert-butyl methyl ether (shown) in good yield?",
    "question_smiles": "COC(C)(C)C",
    "structure_alt": "A methoxy group attached to a carbon that bears three methyl groups.",
    "options": [
      {
        "option_id": "A",
        "text": "Sodium tert-butoxide and iodomethane",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Sodium methoxide and 2-bromo-2-methylpropane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Potassium tert-butoxide and methanol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Sodium methoxide and 2-methylpropan-2-ol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An unsymmetrical ether can be disconnected two ways for a Williamson synthesis, and only one of them works when one group is tertiary. The alkyl halide is attacked by SN2, so it must be methyl or primary; the alkoxide can be as hindered as you like. tert-Butyl methyl ether therefore comes from tert-butoxide plus a methyl halide, never from methoxide plus a tert-butyl halide, which eliminates to 2-methylpropene.",
      "approach": "Step 1: Disconnect the C-O bonds of the target: tert-butyl-O plus methyl, or methyl-O plus tert-butyl.\nStep 2: Put the halide on the less hindered fragment: iodomethane, the perfect SN2 electrophile.\nStep 3: The nucleophile is then tert-butoxide, bulky but reactive toward a methyl carbon.\nStep 4: Sodium tert-butoxide and iodomethane. The other two pairings have no leaving group at all.",
      "note": "McMurry 18.2 (Preparing Ethers) states the constraint in one sentence: the reaction works best with primary halides and methyl halides, because secondary and tertiary halides eliminate. Industrially MTBE was made by a different reaction altogether, acid-catalysed addition of methanol to 2-methylpropene, the alkoxymercuration-style route that puts the oxygen on the tertiary carbon without ever making a tertiary halide.",
      "options": {
        "A": "Correct. The bulky alkoxide attacks the unhindered methyl carbon of iodomethane by SN2, and the tertiary group never has to be a leaving-group carbon.",
        "B": "Methoxide with a tertiary bromide gives E2 elimination to 2-methylpropene; SN2 at a tertiary carbon is impossible, and the base removes a beta hydrogen instead.",
        "C": "Methanol has no leaving group; tert-butoxide would simply be protonated by it in an acid-base reaction, giving tert-butyl alcohol and methoxide.",
        "D": "2-Methylpropan-2-ol has no leaving group either; methoxide and the alcohol merely exchange a proton, and no carbon-oxygen bond forms."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q25_halohydrin_to_epoxide",
    "topic": "Epoxide Synthesis",
    "difficulty_level": "Hard",
    "question_text": "What is the major product when trans-2-bromocyclohexan-1-ol is treated with NaOH in water?",
    "question_smiles": "O[C@H]1CCCC[C@@H]1Br",
    "structure_alt": "A cyclohexane ring with an OH group on one carbon and a bromine atom on the adjacent carbon, drawn with wedge and dash bonds on opposite faces.",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclohexene oxide (1,2-epoxycyclohexane)",
        "smiles": "C1CCC2OC2C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "trans-Cyclohexane-1,2-diol",
        "smiles": "O[C@H]1CCCC[C@@H]1O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclohex-2-en-1-ol",
        "smiles": "OC1C=CCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Bromocyclohexanone",
        "smiles": "O=C1CCCCC1Br",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A halohydrin closes to an epoxide when base converts its hydroxyl to an alkoxide and the alkoxide displaces the halide on the adjacent carbon: an intramolecular Williamson synthesis that makes a three-membered ring. The displacement is SN2, so the oxygen must attack from the side opposite the bromine, which on a ring means the two groups must be trans and able to reach a diaxial arrangement. The trans bromohydrin does this; the cis isomer cannot line up and does not give the epoxide.",
      "approach": "Step 1: Hydroxide deprotonates the OH: a trans-2-bromocyclohexyl alkoxide.\nStep 2: Ring-flip to the conformer in which O- and Br are both axial: they are now anti, and the oxygen sits behind the C-Br bond.\nStep 3: The alkoxide attacks the C-Br carbon from the back; bromide leaves; the three-membered ring closes.\nStep 4: Cyclohexene oxide, the same epoxide a peroxyacid would give from cyclohexene.",
      "note": "McMurry 18.4 (Cyclic Ethers: Epoxides) gives this as the second route to epoxides and shows the anti requirement; the overall two-step conversion of an alkene to its epoxide via the halohydrin has the same net result as mCPBA oxidation. The cis bromohydrin, unable to place its oxygen behind the bromine, undergoes slower reactions instead, chiefly E2 to the allylic alcohol; that contrast is a standard exam question in its own right.",
      "options": {
        "A": "Correct. The alkoxide displaces the trans bromide from the back in a diaxial arrangement and closes the epoxide ring.",
        "B": "The diol would require external hydroxide to displace the bromide; the molecule's own alkoxide, already positioned behind the C-Br bond, reacts far faster than any outside nucleophile.",
        "C": "Cyclohex-2-en-1-ol is the E2 product and is what the cis bromohydrin gives, because it cannot align its oxygen for the ring closure; the trans isomer substitutes instead.",
        "D": "2-Bromocyclohexanone would require oxidising the alcohol; hydroxide is a base, not an oxidant, and no chromium or hypervalent iodine reagent is present."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q26_aryl_ether_cleavage",
    "topic": "Ether Cleavage",
    "difficulty_level": "Medium",
    "question_text": "What are the products when anisole (methoxybenzene) is heated with excess HBr?",
    "question_smiles": "COc1ccccc1",
    "structure_alt": "A benzene ring bearing a methoxy group.",
    "options": [
      {
        "option_id": "A",
        "text": "Phenol and bromomethane",
        "smiles": "Oc1ccccc1.CBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Bromobenzene and methanol",
        "smiles": "Brc1ccccc1.CO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Bromobenzene and bromomethane",
        "smiles": "Brc1ccccc1.CBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "No reaction",
        "smiles": "COc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An aryl alkyl ether is cleaved by HBr or HI on the alkyl side only. After protonation the bromide can attack the methyl carbon by SN2, but it cannot attack the ring carbon: SN2 at an sp2 carbon would have to approach through the ring, and SN1 would need an aryl cation, which does not form. The products are the phenol and the alkyl halide, and no amount of excess acid converts the phenol into bromobenzene, because a phenol's C-O bond is just as immune.",
      "approach": "Step 1: HBr protonates the ether oxygen: an aryl methyl oxonium ion.\nStep 2: Bromide attacks the only carbon it can reach, the methyl; the C-O bond to it breaks.\nStep 3: The leaving group is phenol, which is not a substrate for further cleavage.\nStep 4: Phenol and bromomethane. Excess HBr changes nothing.",
      "note": "McMurry 18.3 (Reactions of Ethers: Acidic Cleavage) uses this reaction to show that the halide always ends up on the alkyl carbon, and the practical consequence is that a methyl ether is a protecting group for a phenol: it survives base, Grignard reagents and oxidants and is removed by HBr or HI at the end. Boron tribromide does the same cleavage at low temperature when the rest of the molecule cannot stand hot acid.",
      "options": {
        "A": "Correct. Bromide substitutes at the methyl carbon; the aryl C-O bond cannot break by either substitution mechanism, so the aromatic fragment is released as phenol.",
        "B": "Bromobenzene would require cleavage of the aryl C-O bond; the ring carbon is closed to backside attack and cannot ionise, so the bromide never goes to the ring.",
        "C": "Two bromides would need both C-O bonds to break; only the alkyl one does, and excess acid cannot make the phenol react further.",
        "D": "The methyl C-O bond is cleaved readily by hot HBr; only the aryl C-O bond is inert. No reaction is wrong by half."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q27_thiourea_thiol",
    "topic": "Thiols and Sulfides",
    "difficulty_level": "Medium",
    "question_text": "What is the major product when 1-bromobutane is treated with thiourea, and the resulting salt is then hydrolysed with aqueous NaOH?",
    "question_smiles": "CCCCBr",
    "structure_alt": "A four-carbon chain ending in a bromine atom.",
    "options": [
      {
        "option_id": "A",
        "text": "Butane-1-thiol",
        "smiles": "CCCCS",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Dibutyl sulfide",
        "smiles": "CCCCSCCCC",
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
        "text": "Dibutyl disulfide",
        "smiles": "CCCCSSCCCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Thiourea's sulfur is a good nucleophile, and it displaces bromide from a primary halide to give an S-alkylisothiouronium salt; hydroxide then hydrolyses that salt to the thiol and urea. The point of the detour is selectivity. Hydrosulfide ion would do the displacement too, but the thiolate it produces is a better nucleophile than hydrosulfide and attacks a second molecule of halide, so the direct route gives a mixture of thiol and dialkyl sulfide. The isothiouronium salt cannot be alkylated again.",
      "approach": "Step 1: (H2N)2C=S attacks C1 of 1-bromobutane by SN2; bromide leaves. The product is the butylisothiouronium bromide.\nStep 2: Aqueous NaOH hydrolyses the C=N+ of the salt: the sulfur-carbon bond to the former thiourea carbon breaks, releasing urea.\nStep 3: The sulfur stays on the butyl group as the thiolate, protonated on workup.\nStep 4: Butane-1-thiol.",
      "note": "McMurry 18.7 (Thiols and Sulfides) presents both the hydrosulfide route and the thiourea route and explains the second as the way to avoid over-alkylation. Thiols are the compounds of skunk spray and of the odorant added to natural gas, which is why the reaction is run in a fume hood; the same S-alkylation of a neutral sulfur that starts it is what makes sulfides into sulfonium salts.",
      "options": {
        "A": "Correct. Thiourea displaces bromide, and hydrolysis of the isothiouronium salt releases the thiol with urea as the by-product.",
        "B": "Dibutyl sulfide is the over-alkylation product of the direct hydrosulfide route, where the first-formed thiolate attacks a second bromide; the isothiouronium salt is what prevents that here.",
        "C": "Butan-1-ol would require hydroxide to displace the bromide directly; the bromide has already been replaced by sulfur before the base is added.",
        "D": "The disulfide is an oxidation product of the thiol, needing iodine or bromine; hydrolysis of the salt gives the thiol and stops there."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q28_disulfide_formation",
    "topic": "Thiols and Sulfides",
    "difficulty_level": "Easy",
    "question_text": "What is the product when butane-1-thiol is treated with a mild oxidant such as bromine or iodine?",
    "question_smiles": "CCCCS",
    "structure_alt": "A four-carbon chain ending in an SH group.",
    "options": [
      {
        "option_id": "A",
        "text": "Dibutyl disulfide",
        "smiles": "CCCCSSCCCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Bromobutane",
        "smiles": "CCCCBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Butane-1-sulfonic acid",
        "smiles": "CCCCS(=O)(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Dibutyl sulfide",
        "smiles": "CCCCSCCCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Thiols are easily oxidised at sulfur, and a mild oxidant takes them only as far as the disulfide: two S-H bonds become one S-S bond, and the halogen is reduced to HX. Stronger oxidants go further, through the sulfenic and sulfinic acids to the sulfonic acid, but bromine and iodine do not. The reaction is reversible; zinc in acid, or a thiol such as dithiothreitol, reduces the disulfide back to two thiols.",
      "approach": "Step 1: Two molecules of butane-1-thiol and one of I2.\nStep 2: Each sulfur loses its hydrogen (as HI) and the two sulfur atoms bond to each other.\nStep 3: The product is a symmetrical disulfide, Bu-S-S-Bu.\nStep 4: Dibutyl disulfide.",
      "note": "McMurry 18.7 (Thiols and Sulfides) uses the alcohol comparison to make the point: an alcohol is oxidised at carbon, a thiol at sulfur, because sulfur is larger, more polarisable and holds its electrons less tightly. The thiol-disulfide couple is the chemistry of cysteine in proteins, where S-S bridges between chains fix the folded shape and are broken and re-formed during a permanent wave.",
      "options": {
        "A": "Correct. A mild oxidant couples two thiols through sulfur to the disulfide and is itself reduced to the hydrogen halide.",
        "B": "1-Bromobutane would need the sulfur replaced by bromine at carbon; bromine here reacts at the S-H, not at the C-S bond.",
        "C": "The sulfonic acid is the product of vigorous oxidation with nitric acid or permanganate; iodine and bromine stop at the disulfide.",
        "D": "Dibutyl sulfide has one sulfur between two butyl groups and is made by alkylating a thiolate; oxidation of a thiol joins two sulfur atoms together."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q29_sulfide_oxidation",
    "topic": "Thiols and Sulfides",
    "difficulty_level": "Medium",
    "question_text": "What is the major product when methyl phenyl sulfide (thioanisole) is treated with one equivalent of hydrogen peroxide at room temperature?",
    "question_smiles": "CSc1ccccc1",
    "structure_alt": "A benzene ring bearing a sulfur atom that carries a methyl group.",
    "options": [
      {
        "option_id": "A",
        "text": "Methyl phenyl sulfoxide",
        "smiles": "CS(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methyl phenyl sulfone",
        "smiles": "CS(=O)(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Thiophenol and methanol",
        "smiles": "Sc1ccccc1.CO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Anisole",
        "smiles": "COc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A sulfide differs from an ether in that its sulfur can be oxidised: one oxygen gives a sulfoxide, a second gives a sulfone. Hydrogen peroxide at room temperature delivers one oxygen and stops at the sulfoxide; a stronger oxidant, or excess peroxide with heat, or a peroxyacid, takes it on to the sulfone. Sulfoxides are pyramidal at sulfur and, with two different groups, chiral, though that is not asked here.",
      "approach": "Step 1: The sulfur lone pair attacks the O-O bond of H2O2; water is the leaving group.\nStep 2: Loss of a proton from the resulting S-OH+ gives the sulfoxide, S=O.\nStep 3: One equivalent of peroxide is consumed; the sulfoxide is less nucleophilic than the sulfide and is not oxidised further under these conditions.\nStep 4: Methyl phenyl sulfoxide.",
      "note": "McMurry 18.7 (Thiols and Sulfides) gives dimethyl sulfoxide as the everyday example: it is made by oxidising dimethyl sulfide with air or peroxide, and it is the polar aprotic solvent of Ch 11 as well as the reagent of the Swern oxidation. Ethers cannot be oxidised this way at all, because an oxygen already at its highest useful oxidation state has nowhere to go; that difference is the largest single contrast between the two families.",
      "options": {
        "A": "Correct. One equivalent of hydrogen peroxide adds one oxygen to sulfur, and the sulfoxide is the product at room temperature.",
        "B": "The sulfone needs a second oxygen, which takes excess peroxide with heat, a peroxyacid, or permanganate; one equivalent stops at the sulfoxide.",
        "C": "Peroxide does not cleave the carbon-sulfur bonds; both alkyl and aryl groups stay on sulfur, and the change is at sulfur alone.",
        "D": "Anisole would require replacing sulfur by oxygen in the skeleton, which no oxidant does; the oxygen is added to the sulfur, not exchanged for it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q30_sulfonium_salt",
    "topic": "Thiols and Sulfides",
    "difficulty_level": "Medium",
    "question_text": "What is the product when dimethyl sulfide is treated with iodomethane?",
    "question_smiles": "CSC",
    "structure_alt": "Two methyl groups joined through a single sulfur atom.",
    "options": [
      {
        "option_id": "A",
        "text": "Trimethylsulfonium iodide",
        "smiles": "C[S+](C)C.[I-]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Dimethyl sulfoxide",
        "smiles": "CS(C)=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dimethyl disulfide",
        "smiles": "CSSC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl methyl sulfide",
        "smiles": "CCSC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Unlike an ether oxygen, a sulfide sulfur is nucleophilic enough to attack an alkyl halide, and the product is a trialkylsulfonium salt: a positively charged sulfur bearing three carbon groups with the halide as the counterion. Sulfur's larger size and polarisability let it react where oxygen will not. The sulfonium ion is itself an electrophile: attack by a nucleophile on one of its methyl groups releases the sulfide again, which makes sulfonium salts alkylating agents.",
      "approach": "Step 1: The sulfur lone pair of dimethyl sulfide attacks the carbon of iodomethane by SN2.\nStep 2: Iodide leaves; the sulfur now carries three methyl groups and a positive charge.\nStep 3: The salt precipitates from the reaction mixture as the crystalline iodide.\nStep 4: Trimethylsulfonium iodide.",
      "note": "McMurry 18.7 (Thiols and Sulfides) introduces sulfonium salts for one reason: S-adenosylmethionine, the cell's methyl donor, is a sulfonium ion made by exactly this reaction between the sulfide of methionine and ATP, and it transfers its methyl to nucleophiles by the same SN2 that formed it. The dimethyl ether analogue does not form under these conditions; an oxonium ion is far too high in energy.",
      "options": {
        "A": "Correct. The nucleophilic sulfur displaces iodide from the methyl carbon and becomes a trisubstituted sulfonium ion.",
        "B": "DMSO is an oxidation product, formed with peroxide or air; iodomethane is an alkylating agent and adds a carbon to sulfur, not an oxygen.",
        "C": "The disulfide would need a sulfur-sulfur bond to form, which is an oxidation of a thiol; dimethyl sulfide has no S-H and iodomethane is not an oxidant.",
        "D": "Ethyl methyl sulfide has the new carbon bonded to an existing methyl carbon; the nucleophile is sulfur, so the new bond forms at sulfur."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q31_thiolate_base_choice",
    "topic": "Thiols and Sulfides",
    "difficulty_level": "Medium",
    "question_text": "Which reagent converts ethanethiol (pKa 10.6) essentially completely into its thiolate while leaving ethanol (pKa 16.0) as the neutral alcohol?",
    "question_smiles": "CCS.CCO",
    "structure_alt": "Two molecules side by side: a two-carbon chain ending in an SH group, and a two-carbon chain ending in an OH group.",
    "options": [
      {
        "option_id": "A",
        "text": "Aqueous sodium hydroxide",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Sodium bicarbonate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Sodium hydride",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Sodium chloride",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A thiol is a much stronger acid than the corresponding alcohol, by about five pKa units, because the larger sulfur atom spreads the negative charge of the thiolate over more volume and holds a weaker S-H bond. Hydroxide, whose conjugate acid water has pKa 15.7, sits between the two: it deprotonates the thiol with about five units of driving force and cannot deprotonate the alcohol at all in water, since ethanol is the weaker acid and water is the solvent.",
      "approach": "Step 1: Write the two equilibria with hydroxide. Thiol: K = 10^(15.7 - 10.6), about 10^5, complete. Alcohol: K = 10^(15.7 - 16.0), about 0.5, and with water in vast excess the ethoxide does not survive.\nStep 2: Bicarbonate: conjugate acid H2CO3, pKa 6.4, four units below the thiol; less than 0.01% thiolate.\nStep 3: Hydride: conjugate acid H2, pKa about 35; it deprotonates both, with no selectivity.\nStep 4: Aqueous NaOH.",
      "note": "McMurry 18.7 (Thiols and Sulfides) records the thiol pKa near 10 and draws the consequence: thiolate ions are made with simple hydroxide and are excellent nucleophiles, which is why sulfides are prepared by the Williamson pattern under conditions far milder than ethers need. The same acidity ladder, thiol between phenol and water, is what lets a thiol be extracted from an alcohol with aqueous base.",
      "options": {
        "A": "Correct. Hydroxide is a strong enough base for the thiol and too weak for the alcohol, and as the solvent water keeps any ethoxide from forming.",
        "B": "Bicarbonate is too weak even for the thiol: carbonic acid at pKa 6.4 is four units more acidic than ethanethiol, so almost no thiolate forms.",
        "C": "Sodium hydride deprotonates both compounds irreversibly; it gives the thiolate, but it also converts the ethanol to ethoxide, which the question rules out.",
        "D": "Chloride is the conjugate base of a strong acid and has no basicity toward either compound; sodium chloride does nothing."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q32_thiol_nomenclature",
    "topic": "Thiols and Sulfides",
    "difficulty_level": "Easy",
    "question_text": "What is the IUPAC name of the compound shown below?",
    "question_smiles": "CC(C)(C)S",
    "structure_alt": "A carbon bearing three methyl groups and an SH group.",
    "options": [
      {
        "option_id": "A",
        "text": "2-Methylpropane-2-thiol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Methylpropane-1-thiol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "tert-Butyl mercaptan",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Methylpropan-2-thiol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A thiol is named like an alcohol with the suffix -thiol in place of -ol, with one spelling difference: because thiol begins with a consonant, the final e of the parent alkane is kept, so it is propane-2-thiol where the alcohol would be propan-2-ol. The parent chain here is propane with a methyl on C2, and the SH is on the same carbon.",
      "approach": "Step 1: Longest chain containing the carbon bearing SH: three carbons, propane.\nStep 2: Number to give the SH the lowest locant: it is on C2, as is the extra methyl.\nStep 3: Suffix -thiol, keeping the e of propane.\nStep 4: 2-Methylpropane-2-thiol.",
      "note": "McMurry 18.7 (Thiols and Sulfides) gives the naming rule and notes that the older name mercaptan, from the Latin for mercury-capturing, survives in industry; the same compound is sold as tert-butyl mercaptan, the odorant blended into natural gas so that leaks can be smelt. Sulfides are named like ethers, with sulfide in place of ether or alkylthio in place of alkoxy.",
      "options": {
        "A": "Correct. Propane parent with the methyl and the SH both on C2, suffix -thiol with the e of the alkane retained.",
        "B": "2-Methylpropane-1-thiol is a different compound, with the SH on a terminal CH2; in the drawn compound the sulfur is on the carbon that carries the three methyls.",
        "C": "tert-Butyl mercaptan is the right molecule under its older common name; mercaptan is not IUPAC nomenclature, and thiol is the systematic suffix.",
        "D": "The right molecule with the e dropped: -ol elides the e (propan-2-ol) but -thiol, beginning with a consonant, keeps it (propane-2-thiol)."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q33_epoxide_lialh4",
    "topic": "Epoxide Ring Opening",
    "difficulty_level": "Medium",
    "question_text": "What is the major product when 2-methyloxirane (propylene oxide) is treated with LiAlH4 in ether, then with aqueous acid?",
    "question_smiles": "CC1CO1",
    "structure_alt": "A three-membered ring containing an oxygen atom, with a methyl group on one of the ring carbons.",
    "options": [
      {
        "option_id": "A",
        "text": "Propan-2-ol",
        "smiles": "CC(O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propan-1-ol",
        "smiles": "CCCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Propane-1,2-diol",
        "smiles": "CC(O)CO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propanone",
        "smiles": "CC(C)=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hydride is a strong nucleophile and opens an epoxide the way any strong nucleophile does under basic conditions: SN2 at the less hindered carbon. On 2-methyloxirane that is the CH2, so the hydrogen goes to C1 and the oxygen is left on C2 as an alkoxide, which workup protonates. The product is the secondary alcohol; an epoxide plus hydride is therefore a way to make an alcohol with the OH on the more substituted of the two former ring carbons.",
      "approach": "Step 1: Hydride from LiAlH4 attacks the CH2 of the epoxide from the back; the C1-O bond breaks.\nStep 2: The alkoxide is on C2, the carbon bearing the methyl.\nStep 3: Aqueous acid protonates the alkoxide.\nStep 4: Propan-2-ol.",
      "note": "McMurry 18.5 (Reactions of Epoxides: Ring-Opening) lists hydride among the nucleophiles that open epoxides under basic conditions, alongside alkoxides, Grignard reagents and amines, and all follow the same steric rule. It is worth setting beside the Grignard case from Ch 17: the carbon nucleophile also attacks the CH2, so the two reagents put their groups on the same carbon and leave the OH on the other.",
      "options": {
        "A": "Correct. Hydride attacks the less hindered CH2 and the oxygen stays on the methyl-bearing carbon: a secondary alcohol.",
        "B": "Propan-1-ol would require hydride to attack the substituted carbon and leave the oxygen on the CH2; SN2 on an epoxide takes the less hindered carbon.",
        "C": "The diol would be the hydrolysis product; hydride adds hydrogen, not hydroxyl, and only one carbon gains an OH.",
        "D": "Propanone is an oxidation product; hydride reagents reduce, and the product of reducing an epoxide is an alcohol."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q34_cis_epoxide_hydrolysis",
    "topic": "Epoxide Ring Opening",
    "difficulty_level": "Hard",
    "question_text": "cis-2,3-Dimethyloxirane (shown) is treated with dilute aqueous acid. What is the product?",
    "question_smiles": "C[C@@H]1O[C@@H]1C",
    "structure_alt": "A three-membered ring containing one oxygen; each ring carbon carries a methyl group, both drawn on wedges, on the same face of the ring.",
    "options": [
      {
        "option_id": "A",
        "text": "A racemic mixture of (2R,3R)- and (2S,3S)-butane-2,3-diol",
        "smiles": "C[C@@H](O)[C@H](O)C.C[C@H](O)[C@@H](O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2R,3S)-Butane-2,3-diol (the meso diol)",
        "smiles": "C[C@@H](O)[C@@H](O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2R,3R)-Butane-2,3-diol only",
        "smiles": "C[C@@H](O)[C@H](O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Butan-2-one",
        "smiles": "CCC(C)=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Acid-catalysed hydrolysis opens an epoxide anti: water attacks one carbon from the face opposite the ring oxygen, inverting that carbon while the other keeps its configuration. The cis epoxide is the meso compound, (2R,3S). Inverting C2 gives (2S,3S); inverting C3 gives (2R,3R). The two carbons are attacked at equal rates, because they are mirror images of each other within the achiral starting material, so the two enantiomeric diols form in equal amounts: a racemate.",
      "approach": "Step 1: The starting epoxide is (2R,3S)-2,3-dimethyloxirane, meso, with an internal mirror plane.\nStep 2: Protonation, then water attacks C2 from the back: C2 inverts to S, C3 stays S. Product (2S,3S).\nStep 3: Water attacks C3 instead: C3 inverts to R, C2 stays R. Product (2R,3R).\nStep 4: Equal amounts of the two enantiomers: racemic (R,R)/(S,S)-butane-2,3-diol, which is optically inactive but separable, unlike the meso diol.",
      "note": "McMurry 18.5 (Reactions of Epoxides: Ring-Opening) shows the anti opening on a ring; the acyclic pair, cis epoxide to racemic diol and trans epoxide to meso diol, is the version the ACS exam prefers because the answer cannot be read off the drawing. The mnemonic is that anti addition swaps exactly one descriptor: unlike descriptors become like, and like become unlike. Bromine adding to cis- and trans-but-2-ene follows the same rule, in the same direction.",
      "options": {
        "A": "Correct. Anti opening of the meso epoxide at either carbon inverts one centre; the two possible products are enantiomers formed at the same rate.",
        "B": "The meso diol is what the trans epoxide gives; starting from the cis (meso) epoxide, an anti opening must produce the chiral diol.",
        "C": "A single enantiomer would need the two ring carbons to be attacked at different rates, but in an achiral, meso epoxide they are enantiotopic and react identically; the (S,S) diol forms in equal amount.",
        "D": "Butan-2-one would be a rearrangement product; in dilute aqueous acid the protonated epoxide is captured by water long before any hydride shift can occur."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q35_sulfide_synthesis",
    "topic": "Thiols and Sulfides",
    "difficulty_level": "Easy",
    "question_text": "What is the major product when sodium ethanethiolate is treated with 1-bromopropane?",
    "question_smiles": "CC[S-]",
    "structure_alt": "An ethyl group bonded to a sulfur atom carrying a negative charge: the ethanethiolate ion.",
    "options": [
      {
        "option_id": "A",
        "text": "Ethyl propyl sulfide",
        "smiles": "CCCSCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Diethyl sulfide",
        "smiles": "CCSCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dipropyl sulfide",
        "smiles": "CCCSCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl propyl ether",
        "smiles": "CCCOCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A sulfide is the sulfur analogue of an ether and is made the same way, by SN2 of a thiolate on a primary alkyl halide. Thiolates are among the best nucleophiles in organic chemistry: sulfur is large and polarisable, its charge is spread over more volume than an alkoxide's, and it is much less tightly solvated by protic solvents. The reaction is therefore faster and cleaner than the corresponding Williamson synthesis, and it works even in water or ethanol.",
      "approach": "Step 1: Ethanethiolate, CH3CH2S-, attacks C1 of 1-bromopropane from the back.\nStep 2: Bromide leaves in the same step.\nStep 3: The sulfur now carries the ethyl group it started with and the propyl group it captured.\nStep 4: Ethyl propyl sulfide, CH3CH2-S-CH2CH2CH3.",
      "note": "McMurry 18.7 (Thiols and Sulfides) presents this as the standard sulfide synthesis and points out that a sulfide, unlike an ether, will go on to react with a second alkyl halide to give a sulfonium salt, so the halide is not used in excess. The nucleophilicity order RS- > RO- in protic solvents, despite RO- being the stronger base, is the same point Ch 11 makes about iodide against fluoride.",
      "options": {
        "A": "Correct. The thiolate displaces bromide from the propyl carbon, joining ethyl and propyl through sulfur.",
        "B": "Diethyl sulfide would need an ethyl halide as the electrophile; the halide supplied carries three carbons.",
        "C": "Dipropyl sulfide would need a propanethiolate; the sulfur nucleophile here brings an ethyl group, not a propyl.",
        "D": "The ether would have oxygen in place of sulfur; the nucleophile is a thiolate and the product must contain the sulfur it attacked with."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q36_phenoxide_williamson",
    "topic": "Williamson Ether Synthesis",
    "difficulty_level": "Medium",
    "question_text": "What is the major product when sodium phenoxide is treated with 1-bromobutane in DMF?",
    "question_smiles": "[O-]c1ccccc1",
    "structure_alt": "A benzene ring bearing an oxygen that carries a negative charge: the phenoxide ion.",
    "options": [
      {
        "option_id": "A",
        "text": "Butyl phenyl ether (butoxybenzene)",
        "smiles": "CCCCOc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Butylphenol",
        "smiles": "CCCCc1ccccc1O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-Butylphenol",
        "smiles": "CCCCc1ccc(O)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Butan-1-ol and bromobenzene",
        "smiles": "CCCCO.Brc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Phenoxide is an ambident nucleophile: its charge is on oxygen and, by resonance, on the ortho and para carbons. With a primary alkyl halide in a polar aprotic solvent the oxygen, which carries most of the charge and is the most accessible site, does the attacking, and the product is an aryl alkyl ether. This is the Williamson synthesis applied to a phenol, and because phenols are acidic enough to be deprotonated by hydroxide it is the easiest ether synthesis of all to set up.",
      "approach": "Step 1: The phenoxide oxygen attacks C1 of 1-bromobutane by SN2; bromide leaves.\nStep 2: DMF solvates the sodium ion and leaves the anion bare, so the oxygen is the reactive site.\nStep 3: The product joins the ring to the butyl group through oxygen.\nStep 4: Butyl phenyl ether.",
      "note": "McMurry 18.2 (Preparing Ethers) gives the phenoxide alkylation as a Williamson variant, and the same reaction with iodomethane is how anisoles are made. Ring alkylation of phenoxide is real but needs different conditions, a protic solvent that hydrogen-bonds the oxygen and a hard or bulky electrophile; in DMF with a simple primary bromide it is negligible. The carbon-alkylation route is the Kolbe-Schmitt reaction's cousin, with carbon dioxide as the electrophile.",
      "options": {
        "A": "Correct. The oxygen of the phenoxide, the most electron-rich and most accessible site, displaces bromide from the primary carbon to give the aryl butyl ether.",
        "B": "2-Butylphenol is the ortho carbon-alkylation product; it becomes significant only in protic solvents that tie up the oxygen, not in DMF with a primary bromide.",
        "C": "4-Butylphenol would also require attack through a ring carbon; para carbon-alkylation is a minor path under any conditions with a simple alkyl halide.",
        "D": "Halide exchange between an alkyl bromide and a phenoxide does not happen; the aryl carbon cannot accept bromide by substitution, and the phenoxide is not converted to an alcohol."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q37_elucidation_diethyl_ether",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound S is a volatile liquid (bp 35 °C) that is only slightly soluble in water. It does not react with sodium metal, gives no colour change with Jones reagent, and gives no cloudiness with the Lucas reagent. Combustion analysis gives C 64.8% and H 13.6% by mass. IR: 2975, 2870, 1380 and a strong band at $1120\\text{ cm}^{-1}$; nothing above $3000\\text{ cm}^{-1}$ and nothing between 1650 and $1800\\text{ cm}^{-1}$. Mass spectrum: a weak $\\text{M}^+$ at $m/z = 74$, peaks at 59 and 45, and a base peak at 31. The $^1\\text{H}$ NMR spectrum is shown. Which structure is S?",
    "question_smiles": "",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 3.48,
          "y": 4,
          "label": "quartet"
        },
        {
          "x": 1.2,
          "y": 6,
          "label": "triplet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Diethyl ether",
        "smiles": "CCOCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Butan-1-ol",
        "smiles": "CCCCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Methylpropan-2-ol",
        "smiles": "CC(C)(C)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyl propyl ether",
        "smiles": "CCCOC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Three negatives identify the class before the spectra are read: no reaction with sodium, no oxidation by Jones reagent and no Lucas cloudiness together rule out an alcohol of any class, and with the formula demanding one oxygen and no unsaturation the compound must be an ether. The IR agrees, with no O-H band and the strong C-O stretch near 1120 that ethers show. The NMR then fixes which ether: a two-signal spectrum with a quartet and a triplet in a 4:6 ratio can only be two equivalent ethyl groups on the oxygen.",
      "approach": "Step 1: Formula. Per 100 g: C 64.8/12.01 = 5.40, H 13.6/1.008 = 13.49, O by difference 21.6/16.00 = 1.35. Divide by 1.35: C 4, H 10, O 1. C4H10O, M = 74, matching the molecular ion. Unsaturation = (2 x 4 + 2 - 10)/2 = 0.\nStep 2: Class. No O-H band, no reaction with Na, Jones or Lucas: not an alcohol. One oxygen, no C=O, no ring: an ether.\nStep 3: NMR. Quartet at 3.48 (4H) coupled to a triplet at 1.20 (6H): two identical CH3CH2 groups, the CH2 downfield because it is bonded to oxygen. Methyl propyl ether would show a 3H singlet near 3.3 and three other signals.\nStep 4: Mass spectrum. Alpha cleavage loses CH3 to give 59 (CH3CH2O=CH2+); the base peak at 31 is CH2=OH+, the ether counterpart of the alcohol's alpha-cleavage ion, after loss of ethylene from 59. S is diethyl ether.",
      "note": "McMurry 18.8 (Spectroscopy of Ethers) gives exactly these markers: the C-O stretch at 1050 to 1150 with no O-H, protons on the carbons next to oxygen at 3.4 to 4.5, and ether carbons at 50 to 80 in the 13C spectrum. The one thing an ether's IR cannot do is distinguish it from an alcohol's C-O band, which is why the missing O-H band, not the present C-O band, is the diagnostic. Diethyl ether's boiling point of 35 °C, forty degrees below its isomer butan-1-ol, is the same absence of O-H seen from the other side.",
      "options": {
        "A": "Correct. C4H10O with no unsaturation, no O-H, no reaction with Na or Jones reagent, two equivalent ethyl groups on oxygen, and the ether alpha-cleavage ions at 59 and 31.",
        "B": "Butan-1-ol reacts with sodium, turns Jones reagent green, shows a broad O-H band near 3300 and gives four NMR signals including a 2H triplet near 3.6 and an exchangeable OH.",
        "C": "2-Methylpropan-2-ol gives an immediate Lucas cloudiness and reacts with sodium; its NMR is a 9H singlet near 1.2 with an exchangeable OH, and it shows a broad O-H band.",
        "D": "Methyl propyl ether has the right formula and class but the wrong symmetry: a 3H singlet near 3.3 for OCH3, a 2H triplet near 3.4, a 2H sextet and a 3H triplet, four signals in all, not two."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch18_q38_elucidation_mtbe",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound T has the composition C 68.1% and H 13.7% by mass. It is a liquid that does not react with sodium metal, Jones reagent or the Lucas reagent. IR: 2975, 1365, 1200 and a strong band at $1090\\text{ cm}^{-1}$; no absorption above $3000\\text{ cm}^{-1}$ or between 1650 and $1800\\text{ cm}^{-1}$. Mass spectrum: a very weak $\\text{M}^+$ at $m/z = 88$, a base peak at 73, and strong peaks at 57 and 41. Heating T with HI gives 2-iodo-2-methylpropane and methanol. The $^1\\text{H}$ NMR spectrum is shown. Which structure is T?",
    "question_smiles": "",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 3.2,
          "y": 3,
          "label": "singlet"
        },
        {
          "x": 1.19,
          "y": 9,
          "label": "singlet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "tert-Butyl methyl ether",
        "smiles": "COC(C)(C)C",
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
        "text": "3-Methylbutan-1-ol",
        "smiles": "CC(C)CCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethyl propyl ether",
        "smiles": "CCCOCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The inert behaviour toward sodium, Jones reagent and the Lucas reagent, with one oxygen and no unsaturation in the formula, says ether, and the IR confirms it with a strong C-O band and no O-H. The NMR is two singlets in a 3:9 ratio, which can only be a methyl on oxygen and a tert-butyl group with no neighbouring hydrogens. The HI cleavage result reads the same structure chemically: a tertiary group leaves as the tertiary iodide by SN1 and the methyl side is released as methanol.",
      "approach": "Step 1: Formula. Per 100 g: C 68.1/12.01 = 5.67, H 13.7/1.008 = 13.59, O by difference 18.2/16.00 = 1.14. Divide by 1.14: C 5, H 12, O 1. C5H12O, M = 88. Unsaturation = (2 x 5 + 2 - 12)/2 = 0.\nStep 2: Class. No O-H stretch, no reaction with sodium, Jones or Lucas reagents: an ether, not an alcohol.\nStep 3: NMR. A 3H singlet at 3.20 is CH3 on oxygen; a 9H singlet at 1.19 is three equivalent methyls on a carbon with no hydrogen. Together: CH3-O-C(CH3)3.\nStep 4: Mass spectrum and chemistry. Loss of a methyl from the tert-butyl side gives the oxygen-stabilised cation CH3O=C(CH3)2+ at 73, the base peak; 57 is the tert-butyl cation and 41 its fragment. HI cleaves the tertiary C-O bond by SN1, giving tert-butyl iodide and methanol. T is tert-butyl methyl ether.",
      "note": "McMurry 18.8 (Spectroscopy of Ethers) gives the OCH3 singlet near 3.2 to 3.5 as the easiest ether signal to spot, and 18.3 supplies the cleavage regiochemistry that the last clue tests. MTBE was blended into petrol by the million tonnes as an octane booster until its taste in groundwater ended the practice; its very weak molecular ion is typical of ethers, which fragment by alpha cleavage almost completely.",
      "options": {
        "A": "Correct. Two singlets, 3H on oxygen and 9H of a tert-butyl group, no O-H, an oxonium base peak at M - 15, and SN1 cleavage by HI to tert-butyl iodide and methanol.",
        "B": "2-Methylbutan-2-ol is a tertiary alcohol: immediate Lucas cloudiness, reaction with sodium, a broad O-H band, and an NMR with a quartet and a triplet for its ethyl group in place of a 3H singlet.",
        "C": "3-Methylbutan-1-ol is a primary alcohol that turns Jones reagent green and shows a 2H triplet near 3.65 for CH2OH, a doublet for two methyls and an exchangeable OH; it has no singlets at all.",
        "D": "Ethyl propyl ether is an ether of the same formula, but it shows two OCH2 signals near 3.4, a quartet and a triplet, plus a sextet and two triplets, with no singlet anywhere; and HI would cleave it by SN2 to give alkyl iodides, not tert-butyl iodide."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  }
];
