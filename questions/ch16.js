// OChemStudyBuddy - McMurry Chapter 16
// Author: A. Elangovan, PhD
var CH16_QUESTIONS = [
  {
    "question_id": "ch16_q1_eas_rds",
    "topic": "Electrophilic Aromatic Substitution Mechanism",
    "difficulty_level": "Medium",
    "question_text": "In the general mechanism for electrophilic aromatic substitution on benzene, which step is typically the rate-determining step, and what is the hybridization of the ring carbon that undergoes electrophilic attack in the intermediate?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Attack of the electrophile by the benzene ring to form the arenium ion (sigma complex); sp3",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Deprotonation of the arenium ion by a weak base to restore aromaticity; sp3",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Attack of the electrophile by the benzene ring to form the arenium ion (sigma complex); sp2",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Deprotonation of the arenium ion by a weak base to restore aromaticity; sp2",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Electrophilic aromatic substitution is a two-step sequence with very different energetics. The first step, the ring attacking the electrophile, gives up the aromatic stabilisation to form a delocalised cation and is slow; the second, loss of a proton from the carbon that was attacked, regains the aromaticity and is fast. The carbon bonded to the electrophile in the intermediate holds four sigma bonds and is sp3.",
      "approach": "Step 1: The pi electrons of the ring bond to E+. The ring carbon that forms the new bond now carries E, H and two ring bonds: four sigma bonds, sp3, out of the pi system. The other five carbons hold a delocalised cation with three resonance forms.\nStep 2: This step is endergonic and has the higher barrier, because the resonance energy of the ring is lost; it is rate-determining.\nStep 3: A weak base (HSO4-, FeBr4-, water) removes the proton from the sp3 carbon; the electrons re-enter the ring and aromaticity is restored. Fast and exergonic.\nStep 4: Attack is rate-determining, and the attacked carbon is sp3 in the intermediate.",
      "note": "The kinetic isotope experiment in this chapter is the proof: C6D6 nitrates as fast as C6H6, so the C-H bond breaks after the slow step. The energy diagram is two hills with the first higher; McMurry draws it for bromination. Every substituent effect in the chapter follows from that first hill: whatever stabilises the cation lowers it.",
      "options": {
        "A": "Correct. Bond formation to the electrophile destroys the aromatic sextet and is the slow, rate-determining step; the attacked carbon in the arenium ion is sp3.",
        "B": "Deprotonation is the fast second step, restoring aromaticity; it is not rate-determining. The attacked carbon is sp3 in the intermediate, so only half of this option is right.",
        "C": "The attack step is right, but the attacked carbon is sp3 in the intermediate: it carries E, H and two ring bonds and has no p orbital left in the pi system.",
        "D": "Wrong step and wrong hybridisation. Deprotonation is fast, and the sp2 description applies to that carbon only after the proton has left."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Benzene: a six-membered ring drawn with three alternating double bonds."
  },
  {
    "question_id": "ch16_q2_febr3_catalyst",
    "topic": "Halogenation of Benzene",
    "difficulty_level": "Easy",
    "question_text": "What is the primary role of the Lewis acid catalyst, such as FeBr3, in the electrophilic bromination of benzene?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "To polarize and weaken the Br-Br bond, generating a highly electrophilic bromine species.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "To act as a strong base to deprotonate the arenium ion intermediate.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "To reduce the benzene ring to make it a stronger nucleophile.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "To stabilize the final bromobenzene product by complexation.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Bromine alone is too weak an electrophile for benzene; the ring is a poor nucleophile compared with an alkene because attacking costs aromaticity. A Lewis acid solves this by coordinating to one bromine and pulling electron density out of the Br-Br bond, so the far bromine becomes strongly electrophilic and the leaving group is the stabilised FeBr4- anion.",
      "approach": "Step 1: FeBr3, with an empty orbital on iron, accepts a lone pair from Br2: Br-Br-FeBr3.\nStep 2: The Br-Br bond is polarised; the terminal bromine carries a partial positive charge and the complex behaves as a source of Br+.\nStep 3: Benzene attacks the terminal bromine, releasing FeBr4-, and the arenium ion forms.\nStep 4: FeBr4- removes the ring proton, regenerating FeBr3 and forming HBr; the catalyst is not consumed.",
      "note": "The same logic covers chlorination (Cl2 with FeCl3 or AlCl3). Iodine is too unreactive even with a Lewis acid and needs an oxidant; fluorine is too reactive to control. Alkenes, being far better nucleophiles, add Br2 with no catalyst at all, which is one way to tell an alkene from an arene in the lab.",
      "options": {
        "A": "Correct. Coordination to one bromine polarises and weakens Br-Br, making the terminal bromine electrophilic enough for the aromatic ring to attack.",
        "B": "FeBr3 has no basic lone pairs; it is a Lewis acid. The proton is removed by the FeBr4- anion or bromide, not by the catalyst itself.",
        "C": "No reduction takes place, and a reduced ring would no longer be aromatic. The catalyst activates the electrophile, not the nucleophile.",
        "D": "Product stabilisation would not change the rate of a reaction that fails to start. The catalyst acts on Br2 before the ring is involved, and bromobenzene needs no help to exist."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A plain benzene ring, the substrate for bromination."
  },
  {
    "question_id": "ch16_q3_iodination_oxidant",
    "topic": "Halogenation of Benzene",
    "difficulty_level": "Medium",
    "question_text": "Direct iodination of benzene using molecular iodine (I2) is thermodynamically unfavorable and requires the addition of an oxidizing agent. Which reagent is typically added in iodination reactions, and what is its chemical role?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "HNO3 or CuCl2; to oxidize I2 into a highly electrophilic I+ species.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "NaBH4; to reduce I2 into I-.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "AlCl3; to form a Lewis acid-base adduct with I2.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "H2SO4; to protonate iodine and form a stronger electrophile.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Iodine is the least reactive halogen toward arenes: I2 is a poor electrophile even when complexed, and the substitution is close to thermoneutral, so the HI formed can reverse it. An oxidising agent fixes both problems by converting I2 into a far more electrophilic iodine species and by consuming the HI.",
      "approach": "Step 1: Without help, I2 and benzene give no reaction; a Lewis acid does not polarise I-I enough.\nStep 2: Add an oxidant: nitric acid, hydrogen peroxide, or a copper(II) salt such as CuCl2. It oxidises I2 to an electrophilic iodine species, formally I+, in practice complexed to the oxidant or its conjugate base.\nStep 3: The ring attacks that species and the arenium ion loses a proton as usual to give iodobenzene.\nStep 4: Any HI produced is oxidised back to iodine, so the equilibrium is pulled forward.",
      "note": "McMurry gives a copper(II) salt as the usual oxidant. The other halogens go the other way: chlorination and bromination need a Lewis acid, and fluorination is too violent to do directly, so fluoroarenes are made from diazonium salts instead (Chapter 24). Iodoarenes matter because they are the best substrates for the metal-catalysed couplings of later chapters.",
      "options": {
        "A": "Correct. An oxidant such as HNO3, H2O2 or CuCl2 converts I2 into an electrophilic iodine species that benzene can attack, and it removes the HI that would otherwise reverse the reaction.",
        "B": "Reducing iodine to iodide gives a nucleophile, the opposite of what an electrophilic substitution needs; iodide does not react with benzene.",
        "C": "AlCl3 polarises Br2 and Cl2 well enough, but an I2 adduct is still too feeble an electrophile; iodination needs oxidation, not Lewis acid activation.",
        "D": "Sulfuric acid does not protonate I2 to any useful extent and generates no iodine electrophile; in nitration it activates HNO3, which is a different reagent."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Benzene, drawn as a hexagon with three double bonds."
  },
  {
    "question_id": "ch16_q4_nitration_h2so4_role",
    "topic": "Nitration of Benzene",
    "difficulty_level": "Easy",
    "question_text": "In the nitration of benzene, sulfuric acid (H2SO4) is mixed with nitric acid (HNO3). What is the primary function of sulfuric acid in this reaction?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "It protonates nitric acid, facilitating the loss of water to generate the nitronium ion (NO2+).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It acts as a nucleophile to attack the benzene ring.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It deprotonates the arenium intermediate to restore aromaticity.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It oxidizes the benzene ring to make it more reactive.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Nitric acid on its own is a weak source of electrophile; the reactive species in nitration is the nitronium ion, NO2+, and sulfuric acid exists to make it. As the stronger acid, H2SO4 protonates HNO3 on its hydroxyl oxygen, turning OH into a water leaving group; loss of water leaves the linear, strongly electrophilic NO2+.",
      "approach": "Step 1: HNO3 + H2SO4 -> H2O+-NO2 + HSO4-: protonation of nitric acid's OH group.\nStep 2: Loss of water: H2O+-NO2 -> NO2+ + H2O. The nitronium ion is linear, O=N+=O, with the positive charge on nitrogen.\nStep 3: Benzene attacks nitrogen; the arenium ion loses a proton to HSO4- or water, giving nitrobenzene.\nStep 4: Sulfuric acid is regenerated: a catalyst in principle, though it is used in excess to keep the water concentration low.",
      "note": "The nitro group is the chapter's most useful meta director and the gateway to aromatic amines: Fe or SnCl2 in HCl, or catalytic hydrogenation, reduces it to NH2, which is how anilines and, later, diazonium salts are made. That two-step sequence is why 'nitrate, then reduce' appears in so many synthesis problems.",
      "options": {
        "A": "Correct. H2SO4 protonates HNO3, water leaves, and the nitronium ion NO2+ is the electrophile that attacks the ring.",
        "B": "Sulfuric acid has no nucleophilic role; HSO4- is a very weak nucleophile and does not attack arenes. The ring is the nucleophile in this reaction.",
        "C": "Deprotonation of the arenium ion is done by a weak base such as HSO4- or water, and it is not why the acid is added; without H2SO4 there is no electrophile to make an arenium ion in the first place.",
        "D": "The ring is not oxidised; it is substituted. Sulfuric acid activates the reagent, not the substrate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "The benzene ring that is to be nitrated, with no substituents."
  },
  {
    "question_id": "ch16_q5_nitration_kinetic_isotope",
    "topic": "Nitration Mechanism and Kinetic Isotope Effect",
    "difficulty_level": "Hard",
    "question_text": "When a mixture of benzene (C6H6) and hexadeuterated benzene (C6D6) undergoes nitration under standard conditions (HNO3/H2SO4), the rates of nitration are virtually identical (kH / kD = 1.0). What does this observation demonstrate?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Carbon-hydrogen (or C-D) bond cleavage does not occur in the rate-determining step of the reaction.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Proton transfer from the arenium ion is the rate-determining step.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Nitration does not proceed through a carbocation intermediate.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The reaction rate depends solely on the concentration of the aromatic substrate.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A primary kinetic isotope effect appears only when the bond to hydrogen or deuterium breaks in or before the rate-determining step; C-D bonds break more slowly than C-H, typically by a factor of 2 to 7. Nitration of C6D6 and C6H6 at the same rate means the C-H bond is still intact at the top of the highest barrier: the electrophile adds first, and the proton is lost afterwards in a fast step.",
      "approach": "Step 1: Write the two-step mechanism: NO2+ adds to the ring (arenium ion), then a proton leaves.\nStep 2: Ask which step could show an isotope effect. Only the second involves breaking the C-H or C-D bond.\nStep 3: Observed kH/kD = 1.0. If deprotonation were rate-determining, kH/kD would be well above 1. It is not, so the first step is rate-determining and the second is fast.\nStep 4: Conclusion: the C-H bond is broken after the slow step, exactly as the energy diagram with the higher first barrier predicts.",
      "note": "Sulfonation is the instructive exception: because it is reversible and the second step's barrier is comparable to the first's, sulfonation shows a modest isotope effect. That is consistent with desulfonation, the reverse reaction, being easy to run. Isotope effects are one of the few direct experimental probes of which step is slow, which is why this experiment appears in every mechanism discussion.",
      "options": {
        "A": "Correct. No isotope effect means the C-H (C-D) bond is intact through the rate-determining step; the bond breaks later, in the fast deprotonation.",
        "B": "Proton loss as the rate-determining step is exactly what a ratio of 1.0 rules out: breaking C-D in the slow step would make the deuterated compound react several times more slowly.",
        "C": "The isotope effect says nothing about whether a cation forms; the arenium ion is well established by other evidence, and the result is entirely consistent with it forming in the slow step.",
        "D": "The rate depends on both the arene and the nitronium ion concentrations; the isotope experiment addresses which step is slow, not the rate law's dependence on reagents."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring; the deuterated isomer has deuterium in place of each hydrogen and looks the same."
  },
  {
    "question_id": "ch16_q6_sulfonation_electrophile",
    "topic": "Sulfonation of Benzene",
    "difficulty_level": "Medium",
    "question_text": "Which of the following represents the active electrophile in the sulfonation of benzene when using fuming sulfuric acid?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Sulfur trioxide (SO3)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Hydrogen sulfate ion (HSO4-)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Hydronium ion (H3O+)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Sulfate ion (SO4 2-)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Fuming sulfuric acid is sulfuric acid with dissolved SO3, and SO3 itself is the electrophile. Sulfur in SO3 carries three strongly withdrawing oxygens and a large partial positive charge, so the neutral molecule is electrophilic enough for benzene to attack without any catalyst; in ordinary concentrated sulfuric acid a little SO3, or its protonated form HSO3+, is present from the acid's self-dehydration and does the same job more slowly.",
      "approach": "Step 1: Identify what fuming sulfuric acid contains: H2SO4 saturated with SO3 (oleum).\nStep 2: Look at SO3: sulfur is bonded to three oxygens, each pulling density away by induction and resonance; the sulfur is a strong Lewis acid centre.\nStep 3: Benzene's pi electrons attack sulfur, giving an arenium ion carrying an SO3- group.\nStep 4: Proton loss restores aromaticity and protonation of the sulfonate oxygen gives benzenesulfonic acid, Ar-SO3H.",
      "note": "The other three choices are all present in the mixture and none is electrophilic at sulfur: HSO4- and SO4 2- are anions, and H3O+ is only an acid. Sulfonation is unusual in being reversible, and sulfonic acids are valuable because the group can be removed later, which makes SO3H a temporary blocking group in synthesis.",
      "options": {
        "A": "Correct. Sulfur trioxide, present in fuming sulfuric acid, is the neutral but strongly electrophilic species that the ring attacks at sulfur.",
        "B": "Hydrogen sulfate is an anion with a full octet at sulfur and no electrophilic site; it acts, if at all, as the weak base that removes the ring proton.",
        "C": "Hydronium ion can protonate the ring (that is how sulfonation reverses) but delivers no sulfur; it cannot be the sulfonating electrophile.",
        "D": "Sulfate is the conjugate base of hydrogen sulfate, doubly negative and the least electrophilic species in the flask."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Benzene, six carbons in a ring with alternating double bonds."
  },
  {
    "question_id": "ch16_q7_desulfonation_reversibility",
    "topic": "Sulfonation of Benzene",
    "difficulty_level": "Medium",
    "question_text": "Benzenesulfonic acid can be converted back to benzene by heating in dilute aqueous sulfuric acid with steam. What is the chemical explanation for this reversibility?",
    "question_smiles": "OS(=O)(=O)c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "The sulfonation reaction is in equilibrium, and using dilute acid (high water concentration) shifts the equilibrium towards benzene by driving off volatile sulfur trioxide.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Water acts as a nucleophile to displace the sulfonyl group via an SN2 mechanism.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dilute acid reduces the sulfonyl group to a thiol, which spontaneously undergoes C-S cleavage.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Steam oxidizes the sulfonic acid to sulfuric acid and carbon dioxide.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sulfonation is the one common electrophilic aromatic substitution that runs both ways under ordinary conditions, because the free-energy difference between an arene plus SO3 and the sulfonic acid is small. Which direction wins is set by the water concentration: concentrated acid or oleum drives sulfonation; hot dilute acid drives the reverse, protonating the ring at the carbon bearing SO3H and expelling SO3, which is hydrated and swept away.",
      "approach": "Step 1: Write the forward reaction: ArH + SO3 <-> ArSO3H. Both directions go through the same arenium ion.\nStep 2: In dilute aqueous acid, H3O+ protonates the ring carbon that carries the sulfonic acid group (ipso protonation), giving the arenium ion with SO3H on the sp3 carbon.\nStep 3: Loss of SO3 from that carbon, hydrated at once to H2SO4, restores the aromatic ring: benzene.\nStep 4: Steam removes benzene and the large excess of water keeps SO3 hydrated, so the equilibrium is pulled to the arene side.",
      "note": "This reversibility makes the sulfonic acid group a removable blocking group: sulfonate the para position, do a second substitution ortho, then desulfonate. It also explains why sulfonation shows a kinetic isotope effect when nitration does not: with the reverse step competing, proton loss becomes partly rate-limiting.",
      "options": {
        "A": "Correct. Sulfonation is an equilibrium; dilute acid and steam remove SO3 and benzene from the mixture and drive it back toward the arene.",
        "B": "Aryl carbons do not undergo SN2 displacement: the ring blocks backside attack and the leaving group would be a carbanion. Desulfonation goes through the arenium ion, the reverse of sulfonation.",
        "C": "Dilute acid is not a reducing agent, and no thiol is ever formed; the sulfur leaves at the same oxidation level it arrived at, as SO3.",
        "D": "Steam is not an oxidant and the ring is not destroyed; the product is benzene, recovered intact, which is the whole point of the procedure."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing a sulfonic acid group: sulfur bonded to the ring, two double-bonded oxygens and one OH."
  },
  {
    "question_id": "ch16_q8_fc_alkylation_1chlorobutane",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Hard",
    "question_text": "Benzene is treated with 1-chlorobutane and AlCl3 at room temperature. What is the major product?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "sec-butylbenzene",
        "smiles": "CCC(C)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "butylbenzene",
        "smiles": "CCCCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "isobutylbenzene",
        "smiles": "CC(C)Cc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "tert-butylbenzene",
        "smiles": "CC(C)(C)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Friedel-Crafts alkylation with a primary alkyl halide rarely gives the primary alkylbenzene. The complex of the halide with AlCl3 does not release a free primary cation; instead a hydride shifts from C2 to C1 as chloride departs, so the electrophile that reaches the ring is the secondary cation. Butane's carbon skeleton is unchanged; only the point of attachment has moved.",
      "approach": "Step 1: CH3CH2CH2CH2Cl coordinates to AlCl3: R-Cl+-AlCl3.\nStep 2: A 1,2-hydride shift from C2 accompanies loss of AlCl4-, giving CH3CH2CH(+)CH3, a secondary carbocation, without ever forming the primary one.\nStep 3: Benzene attacks the secondary carbon; loss of a proton gives sec-butylbenzene, 2-phenylbutane.\nStep 4: Further shifts do not help: a secondary cation on a straight four-carbon chain cannot become tertiary by a hydride shift, so tert-butylbenzene is not formed.",
      "note": "The rearrangement is the reason the acylation-then-reduction route exists: propanoyl chloride/AlCl3 followed by H2/Pd or Clemmensen reduction gives propylbenzene cleanly, where 1-chloropropane/AlCl3 gives cumene. Only alkyl halides whose cations cannot rearrange (methyl, ethyl, isopropyl, tert-butyl, benzyl) alkylate without this complication.",
      "options": {
        "A": "Correct. A 1,2-hydride shift as chloride leaves gives the secondary butyl cation, and the ring attacks it; sec-butylbenzene is the major product.",
        "B": "Butylbenzene would require the ring to attack a primary carbocation, which is never formed; the hydride shift happens as the leaving group departs, before the ring can react.",
        "C": "Isobutylbenzene has a branched carbon skeleton that 1-chlorobutane does not have; a hydride shift moves the charge along the chain but does not move a carbon.",
        "D": "tert-Butylbenzene would need a methyl shift after the hydride shift, and a secondary cation on a straight four-carbon chain has no shift available that reaches a tertiary carbon."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring with no substituents, the arene to be alkylated."
  },
  {
    "question_id": "ch16_q9_fc_alkylation_neopentyl",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Hard",
    "question_text": "What is the major product when benzene is treated with neopentyl chloride (1-chloro-2,2-dimethylpropane) and AlCl3?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "tert-pentylbenzene (2-methyl-2-phenylbutane)",
        "smiles": "CCC(C)(C)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "neopentylbenzene (2,2-dimethyl-1-phenylpropane)",
        "smiles": "CC(C)(C)Cc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "isobutylbenzene (2-methyl-1-phenylpropane)",
        "smiles": "CC(C)Cc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "sec-butylbenzene (1-methylpropylbenzene)",
        "smiles": "CCC(C)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A primary halide whose neighbouring carbon has no hydrogen cannot rearrange by a hydride shift, so a methyl shifts instead. Neopentyl chloride gives the tertiary tert-pentyl cation, (CH3)2C+CH2CH3, as AlCl4- leaves, and that is the electrophile benzene meets. The product has a quaternary benzylic carbon and a longer main chain than a student expecting simple substitution would draw.",
      "approach": "Step 1: (CH3)3CCH2Cl coordinates to AlCl3 at chlorine.\nStep 2: C2 carries three methyls and no hydrogen, so a methyl migrates from C2 to C1 as chloride leaves, giving (CH3)2C+-CH2CH3, a tertiary cation.\nStep 3: Benzene attacks the tertiary carbon; proton loss gives 2-methyl-2-phenylbutane, tert-pentylbenzene.\nStep 4: Check by counting: five carbons in, five carbons attached, but the skeleton is now 2-methylbutane rather than neopentane.",
      "note": "Neopentyl systems are the standard test of whether rearrangement has been understood as a matter of cation stability rather than of hydrogens: with no hydride available the molecule still finds a way to a tertiary cation. The same shift appears in the SN1 solvolysis of neopentyl halides (Chapter 11), which is why neopentyl bromide is so slow in SN2 and gives rearranged products in SN1.",
      "options": {
        "A": "Correct. A 1,2-methyl shift converts the incipient neopentyl cation into the tertiary tert-pentyl cation, and benzene attacks that.",
        "B": "Neopentylbenzene would need the primary neopentyl cation, or a direct displacement at a neopentyl carbon; neither happens, since the methyl shift accompanies loss of the leaving group.",
        "C": "Isobutylbenzene has only four carbons; one carbon has been lost, and Friedel-Crafts alkylation never fragments the alkyl group.",
        "D": "sec-Butylbenzene is also a four-carbon product and belongs to 1-chlorobutane; the neopentyl skeleton has five carbons and gives a five-carbon product."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unsubstituted benzene ring."
  },
  {
    "question_id": "ch16_q10_fc_alkylation_alkene",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Medium",
    "question_text": "Which of the following reaction conditions represents an alternative method for performing a Friedel-Crafts alkylation on benzene without using an alkyl halide?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclohexene and HF",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclohexane and AlCl3",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Chlorobenzene and NaOH",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzyl alcohol and NaBH4",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Any reagent that can generate a carbocation in the presence of benzene can alkylate it. Alkyl halides with AlCl3 are the textbook case, but an alkene with a strong acid does the same: protonation of the double bond gives the cation, following Markovnikov's rule, and the ring attacks it. Alcohols with acid or a Lewis acid work the same way.",
      "approach": "Step 1: Cyclohexene + HF: the proton adds to one alkene carbon, giving the secondary cyclohexyl cation.\nStep 2: Benzene attacks the cation; loss of a proton gives cyclohexylbenzene.\nStep 3: Check the other three: cyclohexane has no pi bond and no leaving group, so AlCl3 gives no cation; chlorobenzene with NaOH is an aryl halide with a base, no carbocation and no reaction under these conditions; NaBH4 is a reducing agent and gives no cation from benzyl alcohol.\nStep 4: Only the alkene-plus-acid pair generates an electrophile.",
      "note": "Industrial cumene is made exactly this way, benzene and propene over a phosphoric acid catalyst, and ethylbenzene from benzene and ethylene. The regiochemistry follows Markovnikov: propene gives the isopropyl, never the propyl, cation, so this route can only make branched alkylbenzenes where the cation is secondary or tertiary.",
      "options": {
        "A": "Correct. HF protonates cyclohexene to the cyclohexyl cation, which benzene attacks to give cyclohexylbenzene.",
        "B": "An alkane has no pi bond to protonate and no leaving group for AlCl3 to abstract; cyclohexane is inert to Friedel-Crafts conditions.",
        "C": "Chlorobenzene is an aryl halide, and hydroxide is a base, not a Lewis acid; there is no cation and, without a nitro group on the ring, no substitution of any kind.",
        "D": "NaBH4 reduces carbonyls; it does not ionise C-O bonds. Benzyl alcohol alkylates benzene only with an acid such as H2SO4 or BF3."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A bare benzene ring."
  },
  {
    "question_id": "ch16_q11_fc_alkylation_alcohol",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Medium",
    "question_text": "When benzene is treated with 2-propanol in the presence of boron trifluoride (BF3), isopropylbenzene is obtained. What is the role of BF3 in this reaction?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "It acts as a Lewis acid to coordinate with the alcohol oxygen, making it a better leaving group and facilitating carbocation formation.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It acts as a strong base to deprotonate the benzene ring directly.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It acts as a reducing agent to convert the alcohol into an alkane.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It acts as an oxidant to convert the alcohol into a ketone.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An alcohol is a poor alkylating agent by itself because hydroxide is a bad leaving group, but a Lewis acid or a strong Bronsted acid changes that. BF3 coordinates to the oxygen of 2-propanol, turning OH into a good leaving group; ionisation gives the isopropyl cation and benzene attacks it. The role of BF3 is the same as AlCl3's with an alkyl halide: convert the leaving group into something that departs.",
      "approach": "Step 1: The oxygen lone pair of 2-propanol bonds to boron: (CH3)2CH-O(H)-BF3, a complex in which the C-O bond is weakened.\nStep 2: The C-O bond breaks, releasing the secondary isopropyl cation and HOBF3-.\nStep 3: Benzene attacks the cation; proton loss gives isopropylbenzene, cumene.\nStep 4: The secondary cation has no better cation to rearrange to, so the product is clean.",
      "note": "Sulfuric acid or phosphoric acid does the same job by protonating the alcohol, which is how tert-butylbenzene is made from tert-butyl alcohol. Because a cation is involved, primary alcohols rearrange exactly as primary halides do, and the reaction has the same limits as any Friedel-Crafts alkylation: no deactivated rings, no free anilines, and polyalkylation if the alkylating agent is in excess.",
      "options": {
        "A": "Correct. BF3 coordinates to the alcohol oxygen, the C-O bond ionises to the isopropyl cation, and benzene attacks it.",
        "B": "BF3 is a Lewis acid with no basic site; it cannot deprotonate anything, and benzene is not deprotonated in electrophilic substitution in any case.",
        "C": "No reduction occurs, and an alkane would not alkylate benzene; the alcohol carbon keeps its oxidation level and appears in the product bonded to the ring.",
        "D": "BF3 is not an oxidant, and a ketone would not alkylate benzene. Oxidising 2-propanol gives acetone, a dead end for Friedel-Crafts chemistry."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Benzene, the ring that 2-propanol will alkylate."
  },
  {
    "question_id": "ch16_q12_fc_limitation_nitrobenzene",
    "topic": "Friedel-Crafts Alkylation Limitations",
    "difficulty_level": "Medium",
    "question_text": "Which of the following aromatic compounds will NOT undergo a Friedel-Crafts alkylation when treated with methyl chloride and AlCl3?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Nitrobenzene",
        "smiles": "O=[N+]([O-])c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Toluene",
        "smiles": "Cc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Chlorobenzene",
        "smiles": "Clc1ccccc1",
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
      "context": "Friedel-Crafts alkylation needs a nucleophilic ring, because its carbocation electrophiles are weak compared with NO2+ or a Br2-FeBr3 complex. A ring carrying a strongly deactivating group, a nitro group above all, is too electron-poor to attack them, and no amount of catalyst forces it. Rings with weakly deactivating halogens and any activated ring react normally.",
      "approach": "Step 1: Classify each substituent. CH3: weak activator. OCH3: strong activator. Cl: weak deactivator (inductive withdrawal, but resonance donation keeps the ring reactive enough). NO2: strong deactivator by induction and resonance.\nStep 2: Apply McMurry's rule: Friedel-Crafts reactions fail on rings bearing groups more deactivating than a halogen, and on free amines.\nStep 3: Nitrobenzene is the only candidate past that line; it is inert enough that nitrobenzene is sometimes used as the solvent for Friedel-Crafts reactions.\nStep 4: Toluene, anisole and chlorobenzene all give methylated products.",
      "note": "The same limit applies to acylation, and it is why synthesis order matters: introduce the alkyl or acyl group first, then nitrate; the reverse order is impossible. Other groups on the wrong side of the line are SO3H, CN, CHO, COR and COOH.",
      "options": {
        "A": "Correct. The nitro group withdraws so much density that the ring cannot attack a weak carbocation electrophile; nitrobenzene is inert to Friedel-Crafts conditions.",
        "B": "Toluene is activated by its methyl group and is alkylated readily, mostly ortho and para; polyalkylation is the usual problem, not lack of reaction.",
        "C": "Chlorobenzene is deactivated, but only weakly: Friedel-Crafts alkylation of halobenzenes works, giving ortho and para products.",
        "D": "Anisole is strongly activated by the methoxy group and is among the most reactive substrates for this reaction."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q13_fc_limitation_aniline",
    "topic": "Friedel-Crafts Alkylation Limitations",
    "difficulty_level": "Hard",
    "question_text": "Although aniline (C6H5NH2) contains a highly activating amino group, it fails to undergo Friedel-Crafts alkylation or acylation reactions in the presence of AlCl3. What is the reason for this failure?",
    "question_smiles": "Nc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "The basic nitrogen lone pair coordinates with the Lewis acid AlCl3, converting the activating -NH2 group into a strongly deactivating ammonium-like substituent.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Aniline is too sterically hindered for electrophilic attack.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The amino group reacts with the alkyl halide to undergo N-alkylation exclusively, preventing ring alkylation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "AlCl3 reduces the amino group to a nitro group.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Aniline should be one of the most reactive rings in the chapter, and toward bromine it is. Under Friedel-Crafts conditions it fails for a reason that has nothing to do with the ring: the amino nitrogen is a Lewis base and the catalyst is a Lewis acid. They form an adduct, Ar-NH2+-AlCl3-, in which the nitrogen carries a positive charge and can no longer donate its lone pair; the substituent has been converted, in situ, into a strong deactivator.",
      "approach": "Step 1: Compare the two bases available to AlCl3: the alkyl halide's chlorine and aniline's nitrogen. Nitrogen is far more basic and wins.\nStep 2: The adduct has a positively charged nitrogen attached to the ring, electronically like an ammonium group: strongly withdrawing by induction and no longer donating by resonance.\nStep 3: The deactivated ring is too poor a nucleophile for a carbocation or acylium ion, so no substitution occurs.\nStep 4: Protecting the nitrogen as an amide (acetanilide) restores the reaction: the amide lone pair is far less basic and the ring stays activated enough.",
      "note": "The same complexation occurs under the acidic conditions of nitration: aniline in HNO3/H2SO4 is mostly the anilinium ion, a meta director, and the ring is also oxidised. Acetylating the amine first is the standard fix for both problems, and removing the acetyl group afterwards by hydrolysis is the last step of many aniline syntheses.",
      "options": {
        "A": "Correct. The amine coordinates to AlCl3 and becomes a positively charged, strongly deactivating substituent, so the ring no longer attacks the electrophile.",
        "B": "A single NH2 group is small; there is no steric obstacle to attack at the ortho or para positions, as aniline's rapid bromination shows.",
        "C": "N-alkylation can occur with alkyl halides, but the failure of acylation, which would give a harmless amide, shows that the general problem is the catalyst complex, not competing reaction at nitrogen.",
        "D": "AlCl3 is not an oxidant and cannot turn an amine into a nitro group; the substituent is deactivated by coordination, not by a change in oxidation state."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing an NH2 group."
  },
  {
    "question_id": "ch16_q14_fc_polyalkylation",
    "topic": "Friedel-Crafts Alkylation Limitations",
    "difficulty_level": "Medium",
    "question_text": "When benzene is treated with 1 equivalent of 2-chloropropane and AlCl3, a significant amount of diisopropylbenzenes is formed alongside the desired isopropylbenzene product. Why does this polyalkylation occur?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "The alkylated product (isopropylbenzene) is more activated toward electrophilic substitution than the starting material (benzene).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The isopropyl group is a strong deactivator, forcing subsequent alkylations to occur.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Isopropylbenzene undergoes rearrangement to form a more reactive isomer.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The reaction is reversible and thermodynamic control favors polyalkylation.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The product of a Friedel-Crafts alkylation is itself an alkylbenzene, and an alkyl group activates the ring. The isopropylbenzene formed first is therefore a better nucleophile than the benzene that remains, so it competes successfully for the next isopropyl cation, and di- and trisubstituted products accumulate even before all the benzene has reacted. This is a kinetic consequence of activation, not an equilibrium.",
      "approach": "Step 1: Benzene + isopropyl cation -> isopropylbenzene.\nStep 2: Compare nucleophilicities: isopropylbenzene, with an activating alkyl group, attacks the cation faster than benzene does.\nStep 3: So while benzene remains, some cations are captured by the product instead, giving diisopropylbenzenes, mostly meta and para.\nStep 4: Practical fix: use a large excess of benzene, so the electrophile meets benzene far more often than product.",
      "note": "Acylation does not have this problem: the acyl group deactivates the ring, so the ketone product is a worse nucleophile than benzene and the reaction stops cleanly after one substitution. That is the second reason, after the absence of rearrangement, that acylation followed by reduction is the preferred route to monoalkylbenzenes.",
      "options": {
        "A": "Correct. An alkyl group activates the ring, so the first product out-competes benzene for the electrophile and is alkylated again.",
        "B": "Alkyl groups are activators, not deactivators; a deactivated product would react more slowly than benzene and polyalkylation would be negligible, as it is in acylation.",
        "C": "Isopropylbenzene does not rearrange under the conditions; the second alkylation happens on the ring as it stands, mostly at the meta and para positions.",
        "D": "The extra alkylations are kinetic events driven by the product's higher nucleophilicity; reversibility is not required and is not the cause. Dealkylation with strong Lewis acids on heating redistributes alkyl groups but does not create the polyalkylation."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Benzene, the ring being alkylated with 2-chloropropane."
  },
  {
    "question_id": "ch16_q15_fc_acylation_acylium",
    "topic": "Friedel-Crafts Acylation",
    "difficulty_level": "Medium",
    "question_text": "What is the key electrophilic intermediate in the Friedel-Crafts acylation of benzene with acetyl chloride and AlCl3, and why does it not undergo skeletal rearrangement?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "The acylium ion (CH3-C≡O+), which is resonance-stabilized with the positive charge shared by the oxygen atom, making it highly stable.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A primary carbocation, which is stabilized by coordination to AlCl3.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A cyclic chloronium ion that undergoes ring opening.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A ketene intermediate that undergoes concerted addition.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Acyl chlorides and AlCl3 give the acylium ion, R-C≡O+, and it is a much better-behaved electrophile than a carbocation: it is stabilised by a resonance form in which oxygen's lone pair makes a triple bond and every atom has an octet, and because the positive charge is shared with oxygen there is no incentive for a hydride or alkyl shift. Acylation therefore installs the acyl group without rearrangement, whatever the chain.",
      "approach": "Step 1: CH3COCl + AlCl3 -> CH3-C(=O)-Cl+-AlCl3 -> CH3-C+=O + AlCl4-.\nStep 2: Draw the two resonance forms: CH3-C+=O and CH3-C≡O+. In the second, carbon and oxygen both have complete octets; it is the major contributor.\nStep 3: Benzene attacks the carbonyl carbon; proton loss gives acetophenone.\nStep 4: No rearrangement: the charge is delocalised onto oxygen and the carbonyl carbon is already stabilised, so nothing is gained by migrating a group.",
      "note": "The linear acylium ion has been characterised by spectroscopy and even crystallised as its SbF6- salt. Its stability is why butanoyl chloride gives butyrophenone and not the rearranged isobutyrophenone, and hence why acylation followed by reduction is the way to make straight-chain alkylbenzenes.",
      "options": {
        "A": "Correct. The acylium ion is resonance-stabilised, with the positive charge shared by oxygen in an octet-complete form, so it neither rearranges nor needs to.",
        "B": "A primary carbocation is not formed at all; the electrophile is the acylium ion, whose charge is on a carbon bonded to oxygen, and AlCl3 is bound to the chloride, not to the cation.",
        "C": "A chloronium ion would need a C=C bond to form a three-membered ring with chlorine; there is none, and chloride leaves rather than bridging.",
        "D": "Ketenes, R2C=C=O, form from acyl chlorides only with a strong base, not with a Lewis acid, and they add to nucleophiles rather than substituting arenes."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Benzene, the substrate for acylation with acetyl chloride."
  },
  {
    "question_id": "ch16_q16_fc_acylation_stoichiometry",
    "topic": "Friedel-Crafts Acylation",
    "difficulty_level": "Hard",
    "question_text": "Unlike Friedel-Crafts alkylations, which require only catalytic amounts of AlCl3, Friedel-Crafts acylations require slightly more than 1 equivalent of AlCl3. Why is a stoichiometric amount of catalyst necessary?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "The carbonyl oxygen of the ketone product complexes strongly with AlCl3, deactivating the catalyst and preventing turnovers.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The acyl halide is less reactive and requires a high concentration of catalyst to react.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "One equivalent of AlCl3 is consumed to form hydrochloric acid (HCl) as a byproduct.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "AlCl3 is oxidized by the ketone product to alumina.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Alkylation needs only catalytic AlCl3 because the alkylbenzene product does not bind it. Acylation gives a ketone, and a ketone's carbonyl oxygen is a good Lewis base: it coordinates to AlCl3 as fast as the ketone forms, and the complex ties up one aluminium per molecule of product. To bring the reaction to completion, slightly more than one equivalent of AlCl3 must be present, and the ketone-AlCl3 complex is broken up by adding water at the end.",
      "approach": "Step 1: Count the Lewis bases in the mixture once some product has formed: the acyl chloride's carbonyl, the ketone's carbonyl, and chloride. The aryl ketone binds AlCl3 most strongly.\nStep 2: Each molecule of acetophenone formed removes one AlCl3 from circulation as Ar-C(CH3)=O-AlCl3.\nStep 3: With only a catalytic amount of AlCl3, the reaction stops when the catalyst is all bound to product.\nStep 4: Use about 1.1 equivalents; aqueous workup hydrolyses the complex and releases the ketone.",
      "note": "The complexation has a second consequence: the ketone-aluminium complex is even more deactivated toward further acylation than the free ketone, which is why diacylation is never a problem. Alkylation, by contrast, uses catalytic AlCl3 and suffers from polyalkylation. The two reactions differ in both directions.",
      "options": {
        "A": "Correct. The ketone product binds the Lewis acid through its carbonyl oxygen, so one equivalent is consumed by complexation and cannot turn over.",
        "B": "Acyl chlorides are more reactive toward AlCl3 than alkyl halides are; the acylium ion forms readily. Catalyst concentration is not the issue.",
        "C": "The HCl by-product forms from the ring proton and chloride; it does not consume AlCl3, and the same HCl forms in alkylation, which needs only catalytic amounts.",
        "D": "AlCl3 is not oxidised by a ketone; it is coordinated by it. The aluminium stays as an AlCl3 adduct until water hydrolyses it during workup."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring with nothing attached, drawn beside the question about acylation stoichiometry."
  },
  {
    "question_id": "ch16_q17_substituent_anisole",
    "topic": "Substituent Effects",
    "difficulty_level": "Easy",
    "question_text": "When anisole (methoxybenzene) is nitrated, it reacts about 10,000 times faster than benzene. Which statement best explains this activating effect?",
    "question_smiles": "COc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "The methoxy oxygen donates electron density into the ring through resonance, stabilizing the arenium intermediate.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The methoxy group is highly electronegative and activates the ring via induction.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The methoxy group steric bulk forces the nitro group to add to the meta position.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The methoxy group reacts with sulfuric acid to form a highly reactive sulfonate ester.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A substituent changes the rate of electrophilic substitution by changing the stability of the arenium ion, and a methoxy group changes it enormously because its oxygen lone pair can be drawn into the ring. For attack ortho or para to OCH3, one resonance form of the cation puts the positive charge on the carbon bearing oxygen, and oxygen then donates a lone pair to make a fourth contributor in which every atom has an octet. That especially stable form is why anisole nitrates about 10,000 times faster than benzene.",
      "approach": "Step 1: Separate the two effects of oxygen. Inductive: oxygen is electronegative and pulls sigma density out of the ring, a deactivating effect. Resonance: the lone pair pushes pi density into the ring at the ortho and para positions, an activating effect.\nStep 2: For OCH3 (and OH, NH2, NHCOCH3) resonance donation is far larger than inductive withdrawal, so the net effect is strong activation.\nStep 3: Draw the arenium ion for para attack: three contributors with the charge on ring carbons, plus a fourth, oxonium contributor with C=O+ and every atom satisfied. That is the stabilisation.\nStep 4: Meta attack has no such contributor, so the activation is confined to ortho and para: OCH3 is an ortho/para director as well as an activator.",
      "note": "The order of activating groups, NH2 > OH > OR > NHCOR > alkyl, is the order of how readily the lone pair is donated. Anisole is reactive enough to be brominated by Br2 in acetic acid with no Lewis acid at all, and phenol goes further, to 2,4,6-tribromophenol in water. The same lone-pair donation makes the arenium-ion argument the basis of every directing effect in the chapter.",
      "options": {
        "A": "Correct. Resonance donation of the oxygen lone pair adds an octet-complete oxonium contributor to the ortho and para arenium ions, lowering the barrier by a large amount.",
        "B": "Oxygen's electronegativity works against the ring, not for it; inductive withdrawal is deactivating. Resonance donation outweighs it, which is why the net effect is activation.",
        "C": "The methoxy group is not bulky enough to force meta substitution, and in any case anisole nitrates ortho and para; the rate question is electronic, not steric.",
        "D": "Anisole's ether oxygen does not form a sulfonate ester with sulfuric acid; it has no hydroxyl. The activation comes from the OCH3 group as it is."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing an OCH3 group."
  },
  {
    "question_id": "ch16_q18_substituent_trifluoromethyl",
    "topic": "Substituent Effects",
    "difficulty_level": "Medium",
    "question_text": "What is the directing effect and activation classification of the trifluoromethyl group (-CF3) in electrophilic aromatic substitution?",
    "question_smiles": "FC(F)(F)c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Strongly deactivating; meta-directing",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Weakly deactivating; ortho/para-directing",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Strongly deactivating; ortho/para-directing",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Weakly activating; meta-directing",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A trifluoromethyl group has no lone pair to donate and no pi bond to conjugate with, so its only effect is inductive: three fluorines pull density through the C-C bond and leave the ring electron-poor. That deactivates every position, but ortho and para attack suffers most, because one resonance form of those arenium ions puts the positive charge on the ring carbon attached to the CF3 carbon, next to the strongly withdrawing group. Meta attack avoids that form, so meta is least deactivated and is where substitution occurs.",
      "approach": "Step 1: Classify the group. No lone pair, no double bond to the ring; C-F bonds strongly polarised. A pure inductive withdrawer, like CCl3 and, more weakly, an ammonium group.\nStep 2: Deactivating: the ring is a poorer nucleophile and every arenium ion is destabilised.\nStep 3: Compare positions. Para (or ortho) attack: one of the three contributors has the charge on C1, adjacent to the CF3 carbon: the worst case. Meta attack: the charge sits at C2, C4 and C6, never on C1.\nStep 4: Meta director, strong deactivator. Nitration of trifluoromethylbenzene gives mostly the meta isomer.",
      "note": "This is the one common meta director that works by induction alone; the others (NO2, CN, SO3H, carbonyls) add resonance withdrawal on top. Keeping the two kinds of withdrawal apart is worth the effort, because a halogen shows what happens when induction and resonance point in opposite directions.",
      "options": {
        "A": "Correct. Strong inductive withdrawal by three fluorines deactivates the ring; ortho and para attack put a positive charge next to the CF3 carbon, so meta is preferred.",
        "B": "Weakly deactivating with ortho/para direction is the halogen pattern, which needs a lone pair to donate by resonance; CF3 has none.",
        "C": "Strongly deactivating groups direct meta. An ortho/para director must be able to stabilise the ortho and para arenium ions, and a group with no lone pair cannot.",
        "D": "A group that withdraws electron density cannot activate. Weak activation with meta direction is not a combination any common substituent shows."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing a CF3 group."
  },
  {
    "question_id": "ch16_q19_substituent_cyano",
    "topic": "Substituent Effects",
    "difficulty_level": "Medium",
    "question_text": "Why is the cyano group (-C≡N) a meta-directing deactivator in electrophilic aromatic substitution?",
    "question_smiles": "N#Cc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "It withdraws electron density both inductively and through resonance, and meta attack avoids placing a positive charge directly on the ring carbon bearing the cyano group.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It donates electron density via resonance but withdraws inductively, with induction dominating.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It is meta-directing solely due to steric hindrance at the ortho and para positions.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It forms a stable covalent adduct with the electrophile at the ortho/para positions.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A cyano group withdraws electrons by both routes at once. Inductively, the sp carbon and the electronegative nitrogen pull sigma density away; by resonance, the triple bond is conjugated with the ring and can accept pi density from it, so the ortho and para positions are especially electron-poor in the ground state and especially bad places for a cation to sit in the arenium ion. Meta attack keeps the charge away from the carbon that carries the group.",
      "approach": "Step 1: Draw benzonitrile's resonance forms: the ring's pi electrons can move onto the nitrile, giving contributors with positive charge at the ortho and para carbons and negative charge on nitrogen. Those positions are depleted.\nStep 2: Draw the arenium ion for para attack: one contributor places the positive charge on C1, the carbon bonded to the electron-poor nitrile carbon. Two positive centres side by side; very unfavourable.\nStep 3: Draw the arenium ion for meta attack: the charge is at C2, C4 and C6 and never reaches C1. Less unfavourable.\nStep 4: Meta director, strong deactivator; the rate is far below benzene's for every position, but meta least so.",
      "note": "The same analysis covers nitro, sulfonic acid, aldehyde, ketone, ester and carboxylic acid groups: an electronegative atom double- or triple-bonded to the carbon on the ring. Meta directors are the groups that make a ring inert to Friedel-Crafts reactions, and they are the groups that must be introduced after any alkylation or acylation in a synthesis.",
      "options": {
        "A": "Correct. The nitrile withdraws by induction and resonance, and meta attack is the only choice that keeps the arenium ion's positive charge off the carbon bearing the group.",
        "B": "The nitrile has no lone pair conjugated to the ring; nitrogen's lone pair is in an sp orbital along the triple-bond axis and cannot donate. Both effects withdraw.",
        "C": "A linear C≡N is one of the smallest substituents there is; nothing about its size hinders ortho or para attack. The preference is electronic.",
        "D": "Electrophiles do not bond to the nitrile; the cyano group is a spectator whose electronic pull, not any adduct, decides where substitution happens."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing a nitrile group, a carbon triple-bonded to nitrogen."
  },
  {
    "question_id": "ch16_q20_substituent_halogens",
    "topic": "Substituent Effects",
    "difficulty_level": "Medium",
    "question_text": "Chlorobenzene is less reactive toward electrophilic aromatic substitution than benzene, yet electrophiles direct primarily to the ortho and para positions. Which statement correctly explains this dual behavior?",
    "question_smiles": "Clc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Chlorine is inductively deactivating due to its high electronegativity, but it is ortho/para-directing because its lone pairs can donate electron density through resonance to stabilize the arenium intermediate.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Chlorine is resonance-deactivating but inductively activating.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Chlorine is an ortho/para director because it is a very small substituent that does not block these positions.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The ortho and para products are formed under kinetic control, while the meta product is formed under thermodynamic control.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Halogens are the one family that deactivates the ring yet directs ortho and para, because their two electronic effects point in opposite directions and act on different things. Inductive withdrawal by the electronegative halogen lowers the density everywhere and slows every attack: chlorobenzene reacts about thirty times more slowly than benzene. But a halogen lone pair can still be donated by resonance into the ortho and para arenium ions, giving a halonium contributor in which every atom has an octet; that makes ortho and para attack less bad than meta, which gains no such contributor.",
      "approach": "Step 1: Rate: compare chlorobenzene's arenium ions with benzene's. Halogen induction destabilises all of them; chlorobenzene is deactivated.\nStep 2: Regiochemistry: compare positions on chlorobenzene with each other. Ortho or para attack allows the C=Cl+ contributor; meta attack does not.\nStep 3: So the halogen slows the reaction overall but slows meta attack most, and the products are ortho and para.\nStep 4: The two effects are separable because deactivation is about density in the ground state and the average cation, while direction is about which cation is best stabilised.",
      "note": "Resonance donation by chlorine is weak because its 3p lone pair overlaps poorly with the carbon 2p system, which is why it does not win the way oxygen's does in anisole; fluorine, with a 2p lone pair, donates well enough that fluorobenzene is nearly as reactive as benzene at the para position. Chlorobenzene nitration gives roughly 30% ortho and 70% para: the para isomer is favoured sterically.",
      "options": {
        "A": "Correct. Inductive withdrawal makes chlorobenzene react more slowly than benzene, but the chlorine lone pair stabilises the ortho and para arenium ions by resonance, so those positions are least deactivated.",
        "B": "The signs are reversed. Chlorine withdraws inductively (it is electronegative) and donates by resonance (it has lone pairs); the resonance effect is what directs ortho and para.",
        "C": "Size is not what makes a group an ortho/para director; a large tert-butyl group still directs ortho and para, and a small nitro group directs meta. The lone pair is the reason.",
        "D": "The preference is kinetic, set by the arenium-ion energies, and there is no equilibration that would favour the meta product; all three isomers are stable end points."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring with a chlorine substituent."
  },
  {
    "question_id": "ch16_q21_substituent_acetanilide",
    "topic": "Substituent Effects",
    "difficulty_level": "Hard",
    "question_text": "Acetanilide (C6H5NHCOCH3) undergoes electrophilic aromatic substitution much faster than benzene, but slower than aniline (C6H5NH2). What is the reason for this intermediate reactivity?",
    "question_smiles": "CC(=O)Nc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "The carbonyl group of the amide competes with the benzene ring for the nitrogen lone pair, reducing resonance donation into the ring.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The amide nitrogen is protonated by the electrophilic reagent, making it a deactivator.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The acetyl group of the amide sterically blocks the ring from electrophilic attack.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acetanilide undergoes rearrangement to form a meta-directing compound under reaction conditions.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An amide nitrogen is still a donor, but a weaker one than an amine's. The lone pair of acetanilide's nitrogen is shared between two acceptors, the ring and the carbonyl group, and the carbonyl takes a large part of it (amide resonance). Less lone-pair density reaches the ring, so the arenium ions for ortho and para attack are stabilised less than aniline's, and the ring is activated more moderately: fast compared with benzene, slow compared with aniline.",
      "approach": "Step 1: Aniline: the NH2 lone pair is fully available to the ring; the contributor for ortho/para attack has a positive nitrogen and every atom with an octet. Strongly activating.\nStep 2: Acetanilide: draw the amide resonance form, with N=C and a negative carbonyl oxygen. That contributor uses the same lone pair and competes with donation into the ring.\nStep 3: Net: partial donation, moderate activation; still ortho/para directing, and para is favoured because the acetamido group is bulky.\nStep 4: The ranking NH2 > NHCOCH3 > benzene follows from how much lone-pair density the ring receives.",
      "note": "This moderation is exactly what makes acetanilide useful. Aniline brominates uncontrollably to the tribromide and is protonated to a meta-directing anilinium ion in nitrating acid; acetanilide brominates once, para, and nitrates cleanly para, and the acetyl group is removed afterwards by hydrolysis. Protect, substitute, deprotect is the standard route to para-substituted anilines.",
      "options": {
        "A": "Correct. The nitrogen lone pair is delocalised into the amide carbonyl as well as the ring, so less reaches the ring and the activation is reduced but not removed.",
        "B": "Amides are far less basic than amines; the acetamido group is not protonated under bromination conditions and, even in nitrating acid, remains a donor. Protonation is aniline's problem, not acetanilide's.",
        "C": "The acetyl group is on nitrogen, away from the ring; it hinders the ortho positions somewhat, which is why para dominates, but sterics do not explain a lower overall rate.",
        "D": "Acetanilide does not rearrange under substitution conditions; it stays an ortho/para-directing amide throughout and is hydrolysed only deliberately, with aqueous acid, afterwards."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing an NH-C(=O)-CH3 group."
  },
  {
    "question_id": "ch16_q22_substituent_toluene",
    "topic": "Substituent Effects",
    "difficulty_level": "Easy",
    "question_text": "Alkyl groups, such as the methyl group in toluene, are weakly activating and ortho/para-directing. What is the electronic basis for this activation?",
    "question_smiles": "Cc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Inductive electron donation and hyperconjugation.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Resonance electron donation through lone pair delocalization.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Inductive electron withdrawal and steric acceleration.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Formation of a stable radical intermediate at the benzylic position.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A methyl group has no lone pair, so it cannot donate by resonance in the usual sense, yet toluene reacts about 25 times faster than benzene and gives ortho and para products. The donation comes from two sources: the sp3 carbon is less electronegative than the sp2 ring carbons and pushes sigma density into the ring inductively, and the C-H bonds of the methyl group overlap with the empty p orbital of the arenium ion in the ortho and para intermediates, the same hyperconjugation that stabilises alkyl carbocations.",
      "approach": "Step 1: Inductive effect: alkyl groups are electron-releasing toward sp2 carbon; the ring is slightly electron-rich.\nStep 2: Hyperconjugation: for attack ortho or para to CH3, one arenium contributor puts the positive charge on the carbon bearing the methyl, a tertiary-like carbocation, which the C-H sigma bonds stabilise. Meta attack never puts the charge there.\nStep 3: Result: weak activation (both effects are modest) and ortho/para direction.\nStep 4: Contrast with NH2 or OCH3, whose lone-pair resonance is far stronger and gives far greater activation.",
      "note": "The same two effects explain why tertiary carbocations are more stable than primary ones, and the analogy is exact: the ortho and para arenium ions of toluene are tertiary at one carbon, those of benzene never are. Larger alkyl groups activate similarly but steer more strongly to para; tert-butylbenzene nitrates mostly para because its ortho positions are crowded.",
      "options": {
        "A": "Correct. The methyl group releases sigma density inductively and stabilises the ortho and para arenium ions by hyperconjugation, which is why it is a weak activator and an ortho/para director.",
        "B": "A methyl group has no lone pair to delocalise; resonance donation of that kind belongs to OH, OR and NR2 groups, which is why they activate far more strongly than alkyls do.",
        "C": "Alkyl groups release, not withdraw, electron density toward an sp2 carbon, and there is no such thing as steric acceleration of attack on a ring; bulk only slows ortho attack.",
        "D": "Electrophilic substitution involves no radicals; a benzylic radical is the intermediate in side-chain bromination with NBS, an entirely different reaction of toluene."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing a methyl group."
  },
  {
    "question_id": "ch16_q23_disubstituted_cresol",
    "topic": "EAS on Disubstituted Benzenes",
    "difficulty_level": "Medium",
    "question_text": "When 4-methylphenol (p-cresol) undergoes electrophilic monobromination with Br2 in the presence of a catalyst, what is the major organic product?",
    "question_smiles": "Cc1ccc(O)cc1",
    "options": [
      {
        "option_id": "A",
        "text": "2-bromo-4-methylphenol",
        "smiles": "Cc1ccc(O)c(Br)c1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-bromo-4-methylphenol",
        "smiles": "Oc1ccc(C)c(Br)c1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-(bromomethyl)phenol",
        "smiles": "Oc1ccc(CBr)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,6-dibromo-4-methylphenol",
        "smiles": "Oc1c(Br)cc(C)cc1Br",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When two substituents disagree about where the next group should go, the stronger activator decides, and OH beats CH3 decisively. Both are ortho/para directors; the para position of each is occupied by the other, so the choice is between the two positions ortho to OH and the two ortho to CH3. The hydroxyl group's lone-pair resonance makes its ortho positions far more nucleophilic, and bromine goes there.",
      "approach": "Step 1: Map the ring: OH at C1, CH3 at C4. Free positions: C2 and C6 (ortho to OH, meta to CH3) and C3 and C5 (ortho to CH3, meta to OH).\nStep 2: Rank the directors: OH is a strong activator (lone-pair resonance), CH3 a weak one (induction and hyperconjugation). The strong one wins.\nStep 3: Bromination at C2 (equivalent to C6): 2-bromo-4-methylphenol.\nStep 4: One equivalent of bromine gives the monobromide; with excess Br2 in water, phenols go on to the dibromide.",
      "note": "McMurry's rule for disubstituted rings: the more strongly activating group controls the outcome, and when both groups direct to the same position the reaction is clean. Positions between two meta substituents are usually skipped for steric reasons, but that does not arise here. The radical benzylic bromination in option C needs NBS and light, not Br2 and a Lewis acid.",
      "options": {
        "A": "Correct. The hydroxyl group is the stronger activator and directs ortho to itself; the para position is blocked by the methyl group.",
        "B": "3-Bromo-4-methylphenol has bromine ortho to the methyl group and meta to OH. The weak activator does not override the strong one; that position is the least activated of the four.",
        "C": "Substituting the benzylic C-H is a radical reaction (NBS, peroxide, light). Electrophilic bromination with a catalyst substitutes the ring.",
        "D": "2,6-Dibromo-4-methylphenol needs two equivalents of bromine. Monobromination stops at the first ortho position, although phenols do react again readily if excess Br2 is present."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring with a hydroxyl group and a methyl group on opposite carbons."
  },
  {
    "question_id": "ch16_q24_disubstituted_xylene",
    "topic": "EAS on Disubstituted Benzenes",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product when 1,3-dimethylbenzene (m-xylene) is subjected to mononitration using HNO3 and H2SO4?",
    "question_smiles": "Cc1cccc(C)c1",
    "options": [
      {
        "option_id": "A",
        "text": "1,3-dimethyl-4-nitrobenzene",
        "smiles": "Cc1ccc(c(C)c1)[N+](=O)[O-]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,3-dimethyl-2-nitrobenzene",
        "smiles": "Cc1c(c(ccc1)C)[N+](=O)[O-]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,3-dimethyl-5-nitrobenzene",
        "smiles": "Cc1cc(cc(C)c1)[N+](=O)[O-]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,4-dimethyl-2-nitrobenzene",
        "smiles": "Cc1ccc(cc1C)[N+](=O)[O-]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two identical activators reinforce each other where their directing effects coincide. In m-xylene the methyls at C1 and C3 both direct to C2 (ortho to both), to C4 and C6 (ortho to one, para to the other) and away from C5 (meta to both). Electronically C2 is the best position, but it sits between two methyl groups and the nitronium ion cannot reach it easily; C4 and C6 are activated almost as well and are open, so the product is 1,3-dimethyl-4-nitrobenzene.",
      "approach": "Step 1: Map the ring: CH3 at C1 and C3. C2 is ortho to both; C4 and C6 are ortho to one methyl and para to the other; C5 is meta to both.\nStep 2: Electronics: C2, C4 and C6 are all activated; C5 is not.\nStep 3: Sterics: C2 is flanked by two methyl groups; substitution between two adjacent substituents is strongly disfavoured, and a nitro group is not small.\nStep 4: Product: nitration at C4 (or the equivalent C6): 1,3-dimethyl-4-nitrobenzene, also named 2,4-dimethyl-1-nitrobenzene. Experimentally it is the main product by a wide margin.",
      "note": "This is the general rule McMurry states for 1,3-disubstituted rings: the position between the two groups is rarely attacked. p-Xylene, by contrast, has only one kind of free position and gives a single mononitration product; o-xylene gives a 3- and 4-nitro mixture. The shipped name numbers the methyls 1,3 to keep a dimethylbenzene parent; with nitro as the reference substituent the same compound is 2,4-dimethylnitrobenzene.",
      "options": {
        "A": "Correct. C4 is ortho to one methyl and para to the other and is unhindered; it is where the nitro group goes.",
        "B": "C2 is doubly activated but sits between the two methyl groups, and steric hindrance keeps the nitronium ion out; only a trace of the 2-nitro isomer forms.",
        "C": "C5 is meta to both methyl groups and receives no activation from either; it is the least reactive position on the ring.",
        "D": "1,4-Dimethyl-2-nitrobenzene is the product from p-xylene, not m-xylene; the methyl groups here are 1,3 to each other and stay that way, since nitration does not move them."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing two methyl groups on carbons separated by one ring carbon, a 1,3 relationship."
  },
  {
    "question_id": "ch16_q25_disubstituted_nitroanisole",
    "topic": "EAS on Disubstituted Benzenes",
    "difficulty_level": "Medium",
    "question_text": "What is the major monobromination product when 4-nitroanisole is treated with Br2/FeBr3?",
    "question_smiles": "COc1ccc([N+](=O)[O-])cc1",
    "options": [
      {
        "option_id": "A",
        "text": "2-bromo-4-nitroanisole",
        "smiles": "COc1c(Br)cc([N+](=O)[O-])cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-bromo-4-nitroanisole",
        "smiles": "COc1ccc([N+](=O)[O-])c(Br)c1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,6-dibromo-4-nitroanisole",
        "smiles": "COc1c(Br)cc([N+](=O)[O-])cc1Br",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-bromo-4-nitrobenzene",
        "smiles": "Brc1ccc([N+](=O)[O-])cc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An activator and a deactivator on the same ring are the easy case: the activator decides, and here the two groups happen to agree. Methoxy directs ortho (its para position is taken); nitro directs meta to itself, and the positions meta to a para-nitro group are exactly the positions ortho to the methoxy group. Both effects point at C2 and C6, so bromination there is clean.",
      "approach": "Step 1: Map: OCH3 at C1, NO2 at C4. Free positions: C2/C6 (ortho to OCH3, meta to NO2) and C3/C5 (meta to OCH3, ortho to NO2).\nStep 2: OCH3 is a strong activator and directs to C2/C6; NO2 is a strong deactivator and steers away from C3/C5. Both prefer C2.\nStep 3: The ring is deactivated overall by the nitro group, so FeBr3 is needed, but the methoxy group's resonance keeps C2 reactive enough.\nStep 4: Product: 2-bromo-4-nitroanisole (2-bromo-1-methoxy-4-nitrobenzene).",
      "note": "When an activator and a deactivator disagree, the activator still wins; when they agree, as here, the product is clean, and this is the case a synthesis planner looks for. A second bromination would go to C6, giving the 2,6-dibromo compound, but that needs more bromine and more forcing conditions than the first substitution.",
      "options": {
        "A": "Correct. Both groups direct to the positions ortho to methoxy and meta to nitro; bromine enters at C2.",
        "B": "C3 is ortho to the nitro group and meta to the methoxy group, the position both substituents disfavour; the 3-bromo isomer is not formed.",
        "C": "2,6-Dibromination needs two equivalents of bromine and forcing conditions; a monobromination stops at C2.",
        "D": "Bromine does not replace the methoxy group; electrophilic substitution replaces a ring hydrogen, and an ether is not a leaving group under these conditions."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing a methoxy group and, on the opposite carbon, a nitro group."
  },
  {
    "question_id": "ch16_q26_disubstituted_nitrobenzoic",
    "topic": "EAS on Disubstituted Benzenes",
    "difficulty_level": "Hard",
    "question_text": "When 3-nitrobenzoic acid is subjected to nitration with hot, concentrated HNO3/H2SO4, what is the major organic product?",
    "question_smiles": "O=[N+]([O-])c1cccc(C(=O)O)c1",
    "options": [
      {
        "option_id": "A",
        "text": "3,5-dinitrobenzoic acid",
        "smiles": "OC(=O)c1cc([N+](=O)[O-])cc([N+](=O)[O-])c1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2,5-dinitrobenzoic acid",
        "smiles": "OC(=O)c1ccc([N+](=O)[O-])cc1[N+](=O)[O-]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3,4-dinitrobenzoic acid",
        "smiles": "OC(=O)c1ccc([N+](=O)[O-])c([N+](=O)[O-])c1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,3-dinitrobenzoic acid",
        "smiles": "OC(=O)c1cccc([N+](=O)[O-])c1[N+](=O)[O-]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two meta directors on a ring reinforce each other when their meta positions coincide. With COOH at C1 and NO2 at C3, the positions meta to the acid are C3 and C5, and the positions meta to the nitro group are C1 and C5; C5 is the only free position both groups point to. The ring is heavily deactivated, so hot concentrated mixed acid is needed, but the regiochemistry is unambiguous.",
      "approach": "Step 1: Map: COOH at C1, NO2 at C3. Free positions: C2 (between the two, ortho to both), C4 (ortho to NO2, para to COOH), C5 (meta to both), C6 (ortho to COOH, para to NO2).\nStep 2: Both groups are meta directors, meaning they disfavour their own ortho and para positions. C2, C4 and C6 are each ortho or para to at least one deactivator.\nStep 3: C5 is meta to both: the least deactivated position, and the only one the two directors agree on.\nStep 4: Product: 3,5-dinitrobenzoic acid. The forcing conditions are needed because two deactivators make the ring very unreactive.",
      "note": "3,5-Dinitrobenzoic acid is the derivative once used to characterise alcohols as crystalline esters, which is why the compound is familiar. The general lesson: with two meta directors, look for the position meta to both; if there is none, as in a 1,4-disubstituted ring, substitution is very slow and goes ortho to whichever group is weaker.",
      "options": {
        "A": "Correct. C5 is meta to both the carboxylic acid and the nitro group, so both deactivators direct the new nitro group there.",
        "B": "The 2,5-isomer is nitration at C6 of the starting material, ortho to the carboxylic acid and para to the nitro group; both meta directors disfavour it.",
        "C": "The 3,4-isomer puts the new group ortho to the existing nitro group and para to the acid, the positions a meta director avoids.",
        "D": "The 2,3-isomer puts the new nitro group between the two existing groups, ortho to both: the most deactivated and most hindered position on the ring."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing a carboxylic acid group and, two carbons away, a nitro group."
  },
  {
    "question_id": "ch16_q27_nas_addition_elimination",
    "topic": "Nucleophilic Aromatic Substitution (Addition-Elimination)",
    "difficulty_level": "Medium",
    "question_text": "When 1-chloro-4-nitrobenzene is heated with sodium hydroxide, it is converted to 4-nitrophenol. What is the key intermediate in this addition-elimination (SNAr) mechanism?",
    "question_smiles": "Clc1ccc([N+](=O)[O-])cc1",
    "options": [
      {
        "option_id": "A",
        "text": "A Meisenheimer complex, a resonance-stabilised anionic intermediate with the negative charge delocalised onto the nitro group.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A benzyne intermediate formed by elimination of HCl.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A carbocation intermediate formed by loss of chloride before nucleophilic attack.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A radical anion intermediate formed by single-electron transfer.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Aryl halides do not undergo SN1 or SN2, but a halide para or ortho to a strongly withdrawing group can be replaced by a nucleophile through a different route: addition first, then elimination. Hydroxide adds to the carbon bearing chlorine, giving a negatively charged, non-aromatic cyclohexadienyl anion, the Meisenheimer complex, in which the charge is delocalised onto the nitro group; chloride then leaves and the ring is aromatic again.",
      "approach": "Step 1: Nucleophilic addition: HO- bonds to C1, the carbon bearing Cl. That carbon becomes sp3 and the ring holds a negative charge over C2, C4 and C6.\nStep 2: Delocalisation: with the nitro group at C4, one contributor places the negative charge on the nitro group's oxygens, the stabilised form that makes the intermediate accessible.\nStep 3: Elimination: the electrons return to the ring and chloride is expelled from the sp3 carbon. Aromaticity restored: 4-nitrophenol, present as its phenoxide under the basic conditions.\nStep 4: This addition-then-elimination order is the opposite of electrophilic substitution's and of the benzyne mechanism's.",
      "note": "The intermediate is a real, isolable species when the ring carries enough nitro groups; Meisenheimer's salts from trinitroanisole were characterised in 1902. The requirement that the withdrawing group be ortho or para to the leaving group is tested by the meta isomer, which does not react; the addition step, not the loss of chloride, is rate-determining, which is why fluoride is the best leaving group here.",
      "options": {
        "A": "Correct. Hydroxide adds to the halogen-bearing carbon to give the resonance-stabilised Meisenheimer anion, and chloride leaves afterwards to restore the ring.",
        "B": "Benzyne forms when a very strong base such as NaNH2 removes a ring proton next to the halogen; hydroxide is too weak, and a nitro-activated ring reacts by addition-elimination instead.",
        "C": "An aryl cation is far too unstable to form; C-Cl does not ionise on an sp2 carbon, and no SN1-type substitution of aryl halides occurs under these conditions.",
        "D": "Single-electron transfer does not operate here; the reaction is a two-electron addition of hydroxide followed by loss of chloride, and it needs the nitro group's resonance stabilisation, not radicals."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring with a chlorine and, on the opposite carbon, a nitro group."
  },
  {
    "question_id": "ch16_q28_nas_fluorine_leaving_group",
    "topic": "Nucleophilic Aromatic Substitution (Addition-Elimination)",
    "difficulty_level": "Hard",
    "question_text": "In nucleophilic aromatic substitution (SNAr) reactions of 1-halo-2,4-dinitrobenzenes with sodium methoxide, the relative rates of reaction follow the order: F >> Cl > Br > I. What does this rate trend indicate about the mechanism?",
    "question_smiles": "Fc1ccc([N+](=O)[O-])cc1[N+](=O)[O-]",
    "options": [
      {
        "option_id": "A",
        "text": "Nucleophilic attack to form the Meisenheimer complex is the rate-determining step, and it is accelerated by the strong inductive electron withdrawal of fluorine.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Carbon-halogen bond cleavage is the rate-determining step.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Fluoride is a better leaving group than iodide in all polar aprotic solvents.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The reaction proceeds through an elimination-addition mechanism via a benzyne intermediate.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The leaving-group order in SNAr is the reverse of the SN2 order, and that reversal is the evidence for the mechanism. In SN2 the C-X bond breaks in the only step, so the weakest bond, C-I, reacts fastest. In SNAr the C-X bond is not broken in the rate-determining step; that step is the nucleophile's addition, and its transition state is stabilised by whatever makes the ipso carbon most electrophilic and the developing negative charge most comfortable. Fluorine, the most electronegative halogen, does that best.",
      "approach": "Step 1: Two steps: addition of methoxide to give the Meisenheimer complex (slow), then loss of halide (fast).\nStep 2: The rate is set by the first step. A more electronegative halogen makes the carbon it is attached to more positive and stabilises the anionic transition state inductively: F > Cl > Br > I.\nStep 3: The second step, breaking C-X, is fast for every halogen because the anion is high in energy and eager to rearomatise, so the C-F bond's strength does not matter.\nStep 4: The observed order matches the addition-first mechanism and rules out C-X cleavage as rate-determining.",
      "note": "This is why 2,4-dinitrofluorobenzene (Sanger's reagent) is used to label the N-terminal amino acid of a peptide: its fluorine is displaced by an amine far faster than the chloride analogue's. The same argument, that the leaving group's electronegativity rather than its bond strength matters, returns in nucleophilic acyl substitution.",
      "options": {
        "A": "Correct. Addition of the nucleophile is rate-determining, and fluorine's inductive pull stabilises the anionic transition state most, so the fluoride reacts fastest even though C-F is the strongest bond.",
        "B": "If C-X cleavage were rate-determining the iodide would be fastest, as in SN2; the observed order is the opposite, so bond breaking happens after the slow step.",
        "C": "Fluoride is the worst leaving group in SN1 and SN2 reactions; it looks like a good one here only because its bond is broken in a fast step after the rate-determining addition.",
        "D": "The benzyne mechanism needs a very strong base and a ring without activating groups, and it shows the opposite halogen order; the dinitro-activated ring reacts with methoxide by addition-elimination."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing a fluorine and two nitro groups, one ortho and one para to the fluorine."
  },
  {
    "question_id": "ch16_q29_nas_meta_nitro_failure",
    "topic": "Nucleophilic Aromatic Substitution (Addition-Elimination)",
    "difficulty_level": "Medium",
    "question_text": "Why does 1-chloro-3-nitrobenzene fail to undergo nucleophilic aromatic substitution (SNAr) when treated with sodium methoxide under conditions where 1-chloro-4-nitrobenzene reacts smoothly?",
    "question_smiles": "Clc1cccc([N+](=O)[O-])c1",
    "options": [
      {
        "option_id": "A",
        "text": "The negative charge of the intermediate Meisenheimer complex cannot be delocalized directly onto the nitro group when it is in the meta position.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The meta-chloro group is sterically blocked by the nitro group.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The nitro group in the meta position acts as an electron-donating group.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Chloro-3-nitrobenzene undergoes rapid polymerization under basic conditions.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Nucleophilic aromatic substitution works only when the negative charge of the Meisenheimer intermediate can be delivered to the withdrawing group by resonance, and that requires the group to be ortho or para to the carbon under attack. Addition at C1 places the charge on C2, C4 and C6. A nitro group at C4 (para) or C2 (ortho) receives it; a nitro group at C3 (meta) is never on a charged carbon, so it can help only inductively, which is not enough.",
      "approach": "Step 1: Add methoxide to C1 of 1-chloro-3-nitrobenzene. Draw the three contributors of the anion: negative charge on C2, C4 and C6.\nStep 2: The nitro group is on C3. In none of the contributors does C3 carry the charge, so no contributor puts the charge on the nitro group's oxygens.\nStep 3: Compare the para isomer: charge on C4 is delocalised into the nitro group, giving the stable, octet-satisfying contributor that makes the intermediate accessible.\nStep 4: Without it, the intermediate is a plain, high-energy cyclohexadienyl anion; the barrier is too high and the meta isomer is recovered unchanged.",
      "note": "This positional requirement is the SNAr counterpart of the ortho/para directing rule in electrophilic substitution, with the signs reversed: electron-withdrawing groups activate the positions ortho and para to themselves toward nucleophiles. Halopyridines behave the same way, reacting at C2 and C4, where the ring nitrogen can take the charge, and not at C3.",
      "options": {
        "A": "Correct. With the nitro group meta to the site of attack, no resonance contributor places the anion's charge on the nitro group, so the intermediate is not stabilised and the reaction fails.",
        "B": "There is no steric problem; a nitro group and a chlorine two carbons apart do not shield each other, and the para isomer, which reacts smoothly, is no less crowded at C1.",
        "C": "A nitro group is strongly electron-withdrawing from every position; the difference is that from the meta position its resonance withdrawal cannot reach the carbon that carries the charge.",
        "D": "Nitroarenes do not polymerise with methoxide; the meta isomer simply does not react and is recovered."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring with a chlorine and a nitro group on carbons separated by one ring carbon."
  },
  {
    "question_id": "ch16_q30_nas_benzyne_chlorobenzene",
    "topic": "Nucleophilic Aromatic Substitution (Elimination-Addition)",
    "difficulty_level": "Medium",
    "question_text": "When chlorobenzene is treated with sodium amide (NaNH2) in liquid ammonia at -33 °C, aniline is formed. What is the key intermediate in this reaction?",
    "question_smiles": "Clc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Benzyne (dehydrobenzene)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A Meisenheimer complex",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A phenyl carbocation",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A radical anion",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Chlorobenzene has no nitro group to stabilise a Meisenheimer complex, so addition-elimination is not available, yet sodium amide converts it into aniline. The route is elimination first, then addition: the very strong base removes a ring proton ortho to the chlorine, chloride leaves, and the product is benzyne, a benzene with a strained extra pi bond in the plane of the ring. Amide adds across that bond, and the product after workup is aniline.",
      "approach": "Step 1: Elimination: NH2- removes H from C2; the resulting carbanion expels Cl- from C1, forming a new pi bond between C1 and C2 in the plane of the ring. This is benzyne, symmetrical about the former C1-C2 bond.\nStep 2: Addition: NH2- adds to either carbon of the strained triple bond, giving an aryl anion, which is protonated by ammonia.\nStep 3: Product: aniline. With unsubstituted chlorobenzene the two ends are equivalent, so there is one product.\nStep 4: The evidence for the intermediate is labelling: 14C at C1 ends up half at the carbon bearing nitrogen and half next to it.",
      "note": "The two nucleophilic substitution mechanisms are told apart by conditions and by substituents: an activated ring with a moderate nucleophile goes by addition-elimination and keeps the nucleophile on the carbon that held the halogen; an unactivated ring with a very strong base goes through benzyne and can put the nucleophile on the adjacent carbon (cine substitution). Benzyne can also be trapped as a Diels-Alder dienophile.",
      "options": {
        "A": "Correct. Sodium amide removes the ortho proton, chloride leaves to give benzyne, and amide adds across the strained triple bond to give aniline.",
        "B": "A Meisenheimer complex needs a nitro group or similar acceptor to hold the negative charge; chlorobenzene has none, so addition to the ring is not the first step.",
        "C": "An aryl cation would require ionisation of a C-Cl bond on an sp2 carbon, which does not happen, and a strongly basic medium is the last place a cation would form.",
        "D": "Radical anions take part in some substitutions of aryl halides under other conditions, but the amide reaction's labelling results are explained by benzyne, a neutral, closed-shell intermediate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing a chlorine atom."
  },
  {
    "question_id": "ch16_q31_nas_benzyne_toluidine",
    "topic": "Nucleophilic Aromatic Substitution (Elimination-Addition)",
    "difficulty_level": "Hard",
    "question_text": "When 4-bromotoluene is treated with sodium amide (NaNH2) in liquid ammonia, a mixture of 3-methylaniline (m-toluidine) and 4-methylaniline (p-toluidine) is obtained in a nearly 1:1 ratio. What is the explanation for this product distribution?",
    "question_smiles": "Cc1ccc(Br)cc1",
    "options": [
      {
        "option_id": "A",
        "text": "Elimination of HBr forms a symmetric 4-methylbenzyne intermediate, which is then attacked by ammonia with equal probability at either C3 or C4.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-Bromotoluene undergoes a radical rearrangement before substitution.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The methyl group acts as a strong directing group in a standard SNAr reaction.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The products are in thermodynamic equilibrium, favoring a 1:1 mixture.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The benzyne route can move the nucleophile one carbon along the ring, and 4-bromotoluene shows it cleanly. Removing the proton at C3 and losing bromide from C4 gives 4-methylbenzyne, with its triple bond between C3 and C4. Amide can add to either end: attack at C4 puts nitrogen where the bromine was, giving 4-methylaniline; attack at C3 puts it next door, giving 3-methylaniline. A methyl group barely distinguishes the two ends, so the mixture is close to 1:1.",
      "approach": "Step 1: Elimination: the proton at C3 (either ortho position, they are equivalent by symmetry) is removed and Br- leaves from C4. Intermediate: 4-methylbenzyne.\nStep 2: Addition of NH2- at C4 gives an anion at C3; addition at C3 gives an anion at C4. A methyl group is a weak inductive donor, too far away to stabilise one anion much more than the other.\nStep 3: Protonation by NH3 completes both products: p-toluidine and m-toluidine, in roughly equal amounts.\nStep 4: This scrambling of the substitution position is called cine substitution and is the signature of the benzyne mechanism.",
      "note": "Compare 3-bromoanisole, where the electronegative methoxy group next to the carbanion does bias the addition and a single product results. The 1:1 result with 4-bromotoluene was one of Roberts' original demonstrations of the benzyne intermediate, alongside the 14C labelling of chlorobenzene itself.",
      "options": {
        "A": "Correct. 4-Methylbenzyne is nearly symmetrical, so amide adds to C3 and C4 at similar rates and the meta and para toluidines form in about equal amounts.",
        "B": "No radical steps occur; the mixture arises from addition to the two ends of a benzyne, not from any rearrangement of the aryl halide.",
        "C": "A standard SNAr would keep the nitrogen on the carbon that held the bromine and give only p-toluidine, and it would need an activating nitro group that toluene does not have.",
        "D": "The two toluidines do not interconvert under the conditions; the ratio is kinetic, fixed at the moment amide adds to the benzyne."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring with a methyl group and a bromine on opposite carbons."
  },
  {
    "question_id": "ch16_q32_nas_benzyne_anisidine",
    "topic": "Nucleophilic Aromatic Substitution (Elimination-Addition)",
    "difficulty_level": "Hard",
    "question_text": "When 3-bromoanisole is treated with NaNH2/NH3, the major product is 3-methoxyaniline (m-anisidine), with none of the ortho- or para-isomers formed. What is the origin of this regioselectivity?",
    "question_smiles": "COc1cccc(Br)c1",
    "options": [
      {
        "option_id": "A",
        "text": "Nucleophilic attack is directed to C3 because the resulting carbanion is stabilized inductively by the electronegative methoxy group at C1.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The methoxy group is a steric block at C2 and C4.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The methoxy group donates electrons through resonance to stabilize a C3 carbocation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-Bromoanisole does not react via a benzyne intermediate but undergoes direct SN2 displacement.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A substituent next to the carbanion formed in the benzyne addition can decide which end the nucleophile attacks, and it decides twice for 3-bromoanisole. First, which benzyne forms: the proton at C2, between the bromine and the electronegative methoxy group, is the more acidic, so elimination gives the 2,3-benzyne rather than the 3,4-isomer. Second, where amide adds: attack at C3 leaves the carbanion at C2, next to the oxygen, where the inductive pull stabilises it; attack at C2 would leave the carbanion at C3, farther away. Both choices lead to the same product, 3-methoxyaniline.",
      "approach": "Step 1: Elimination. C2-H is more acidic than C4-H because it is adjacent to the electronegative OCH3 group; amide removes it and bromide leaves from C3. Intermediate: 2,3-dehydroanisole.\nStep 2: Addition. Amide bonds to C3 (carbanion at C2, stabilised by the neighbouring oxygen's inductive effect) rather than to C2 (carbanion at C3).\nStep 3: Protonation at C2 gives 3-methoxyaniline.\nStep 4: The product's nitrogen is where the bromine was, but for benzyne reasons, not because of a direct displacement.",
      "note": "The inductive effect is the whole argument; the methoxy group's resonance donation, which matters so much in electrophilic substitution, is irrelevant to an anion held in the plane of the ring. The para isomer shows the contrast: 4-bromoanisole gives the 3,4-benzyne and a mixture of the meta and para anisidines, with the meta isomer favoured for the same inductive reason.",
      "options": {
        "A": "Correct. Amide adds at C3 so that the carbanion sits at C2, next to the electronegative methoxy group, which stabilises it inductively; the product is the meta isomer.",
        "B": "The methoxy group is not large enough to block a ring position, and sterics cannot explain why the 2,3-benzyne forms in preference to the 3,4-benzyne.",
        "C": "The intermediate after addition is a carbanion, not a carbocation, and it lies in the ring plane where resonance donation from oxygen cannot reach it. Induction, not resonance, decides.",
        "D": "Aryl halides do not undergo SN2, and a direct displacement would in any case give the same meta product without explaining why 4-bromoanisole gives a mixture. Sodium amide reacts through benzyne."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring with a methoxy group and a bromine on carbons separated by one ring carbon."
  },
  {
    "question_id": "ch16_q33_nas_benzyne_trapping",
    "topic": "Nucleophilic Aromatic Substitution (Elimination-Addition)",
    "difficulty_level": "Medium",
    "question_text": "Benzyne is a highly unstable intermediate that cannot be isolated. What is the product when 1,2-bromofluorobenzene is treated with magnesium in the presence of furan?",
    "question_smiles": "Fc1ccccc1Br",
    "options": [
      {
        "option_id": "A",
        "text": "1,4-epoxy-1,4-dihydronaphthalene",
        "smiles": "O1C2C=CC1c3ccccc23",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-fluoronaphthalene",
        "smiles": "Fc1cccc2ccccc12",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-bromofuran",
        "smiles": "Brc1ccoc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Biphenyl",
        "smiles": "c1ccc(cc1)c2ccccc2",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Benzyne is too reactive to isolate, so its existence is shown by trapping it. Magnesium inserts into the C-Br bond of 1-bromo-2-fluorobenzene to give an aryl Grignard reagent, which loses MgBrF to form benzyne; furan, present as a diene, captures it in a Diels-Alder reaction. The adduct, 1,4-epoxy-1,4-dihydronaphthalene, is a stable, isolable bicyclic compound and is the classic proof that benzyne had been formed.",
      "approach": "Step 1: Mg + Ar-Br -> Ar-MgBr, with fluorine still ortho to the metal.\nStep 2: Elimination of MgBrF (fluoride the leaving group, the carbon-metal bond the electron source) gives benzyne.\nStep 3: Benzyne's strained triple bond is an excellent dienophile. Furan's C2=C3-C4=C5 diene adds across it in a [4+2] cycloaddition; the furan oxygen becomes a one-atom bridge.\nStep 4: Product: 1,4-dihydro-1,4-epoxynaphthalene, a naphthalene skeleton with an oxygen bridge across the new ring.",
      "note": "Without a trap, benzyne dimerises to biphenylene, and in the presence of amide it is captured by nucleophiles, which is the substitution chemistry of the preceding items. The Diels-Alder trap is used routinely to make substituted naphthalenes, since the oxygen bridge can be removed afterwards. That benzyne acts as a dienophile also shows its extra bond is a real pi bond in the plane of the ring, not a diradical.",
      "options": {
        "A": "Correct. Benzyne, generated from the Grignard reagent by loss of MgBrF, is trapped by furan in a Diels-Alder reaction to give the oxygen-bridged adduct.",
        "B": "1-Fluoronaphthalene would need the fluorine to survive and a second ring to be built by some other route; the fluorine is lost as the leaving group in forming benzyne.",
        "C": "Furan is not brominated; the bromine leaves in the Grignard step and ends up in magnesium salts. Furan reacts as a diene here, not as an aromatic nucleophile.",
        "D": "Biphenyl would need two aryl groups to couple; benzyne dimerises to biphenylene, two rings fused through a four-membered ring, and only in the absence of a trap."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing a fluorine and a bromine on adjacent carbons."
  },
  {
    "question_id": "ch16_q34_sidechain_ethylbenzene_nbs",
    "topic": "Reactions of Alkylbenzene Side Chains",
    "difficulty_level": "Easy",
    "question_text": "When ethylbenzene is heated with N-bromosuccinimide (NBS) in carbon tetrachloride in the presence of benzoyl peroxide, what is the major organic product?",
    "question_smiles": "CCc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "(1-bromoethyl)benzene",
        "smiles": "CC(Br)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2-bromoethyl)benzene",
        "smiles": "BrCCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-bromo-4-ethylbenzene",
        "smiles": "CCc1ccc(Br)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,2-dibromo-1-phenylethane",
        "smiles": "BrCC(Br)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "N-Bromosuccinimide with a radical initiator is a source of a low, steady concentration of Br2, and under those conditions the reaction is a radical chain, not an electrophilic substitution. The hydrogen that is abstracted is the one whose loss gives the most stable radical, and a benzylic radical is stabilised by delocalisation into the ring much as an allylic radical is by its double bond. Ethylbenzene therefore brominates on the carbon attached to the ring and nowhere else.",
      "approach": "Step 1: Initiation: benzoyl peroxide gives radicals that start the chain; NBS and the trace of HBr present keep a low concentration of Br2 in play.\nStep 2: Propagation: Br· abstracts the benzylic hydrogen (C-H about 85 kcal/mol, the weakest in the molecule), giving PhCH·CH3, delocalised over the ring.\nStep 3: The benzylic radical takes a bromine from Br2, giving (1-bromoethyl)benzene and a new Br· that continues the chain.\nStep 4: The ring is untouched: no Lewis acid, no electrophile, no arenium ion.",
      "note": "The contrast with Br2/FeBr3, which puts bromine on the ring ortho and para to the ethyl group, is the chapter's standard pair of conditions. Benzylic bromides made this way are excellent substrates for SN1 and SN2 (the benzylic cation and transition state are both stabilised) and for E2 to give styrenes, which is how the chapter connects back to alkene chemistry.",
      "options": {
        "A": "Correct. Radical bromination goes to the benzylic position, where hydrogen abstraction gives a resonance-stabilised radical; the product is (1-bromoethyl)benzene.",
        "B": "The CH3 hydrogens are ordinary primary C-H bonds, more than 10 kcal/mol stronger than the benzylic ones; the radical at that carbon has no resonance stabilisation and is not formed.",
        "C": "Ring bromination is an electrophilic substitution and needs Br2 with a Lewis acid; under radical conditions the aromatic C-H bonds are far too strong to abstract.",
        "D": "A dibromide would require an alkene to add bromine across; ethylbenzene has none, and NBS supplies one bromine per benzylic hydrogen replaced."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing an ethyl group."
  },
  {
    "question_id": "ch16_q35_sidechain_benzyl_radical",
    "topic": "Reactions of Alkylbenzene Side Chains",
    "difficulty_level": "Medium",
    "question_text": "In the radical benzylic bromination of toluene using NBS and light, which of the following represents the most stable radical intermediate?",
    "question_smiles": "Cc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Benzyl radical",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Phenyl radical",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Bromomethyl radical",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclohexadienyl radical",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Radical bromination of toluene succeeds because the radical it goes through is unusually stable. Removing a hydrogen from the methyl group leaves an unpaired electron in a p orbital parallel to the ring's pi system, and it is delocalised over the ortho and para carbons; the benzyl radical has four resonance forms. None of the alternatives comes close: a phenyl radical's unpaired electron sits in an sp2 orbital in the plane of the ring and cannot overlap with the pi system at all.",
      "approach": "Step 1: Benzyl radical: draw the four contributors, one with the electron on CH2 and three with it on ring carbons. Stabilisation of roughly 12 kcal/mol relative to a primary radical, comparable to allyl.\nStep 2: Phenyl radical: the electron is in the sigma framework; no delocalisation; the aryl C-H bond that would give it is about 113 kcal/mol, far too strong for Br· to break.\nStep 3: Bromomethyl radical: primary and destabilised by the electronegative halogen; it comes from CH3Br, not from toluene.\nStep 4: Cyclohexadienyl radical: the result of a radical adding to the ring, which destroys aromaticity; not on the pathway.",
      "note": "The benzylic C-H bond of toluene is about 90 kcal/mol, weaker than a primary alkyl C-H (101) and than the aromatic C-H (113), and that number decides everything: selectivity for the side chain over the ring is essentially complete. The same stabilisation makes benzylic cations and anions easy to form, and is why the whole set of side-chain reactions in this chapter happens at that one carbon.",
      "options": {
        "A": "Correct. The benzyl radical is delocalised over the CH2 carbon and the ortho and para ring carbons, four resonance forms, and is the intermediate of the reaction.",
        "B": "A phenyl radical's unpaired electron is in an in-plane sp2 orbital, orthogonal to the pi system, and gets no resonance stabilisation; aryl C-H bonds are among the strongest in organic chemistry.",
        "C": "The bromomethyl radical is a primary radical with no aromatic ring to delocalise into; it is not formed from toluene under these conditions.",
        "D": "A cyclohexadienyl radical forms only if a radical adds to the ring, which costs the aromatic stabilisation; hydrogen abstraction from the side chain is far easier."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Toluene: a benzene ring bearing a methyl group."
  },
  {
    "question_id": "ch16_q36_sidechain_propylbenzene_oxidation",
    "topic": "Reactions of Alkylbenzene Side Chains",
    "difficulty_level": "Easy",
    "question_text": "What is the major product when propylbenzene is heated with an aqueous solution of potassium permanganate (KMnO4), followed by acid workup?",
    "question_smiles": "CCCc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "benzoic acid",
        "smiles": "OC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-phenylpropanoic acid",
        "smiles": "OC(=O)CCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-phenylpropan-1-ol",
        "smiles": "CCC(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "propiophenone",
        "smiles": "CCC(=O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hot alkaline permanganate is a powerful enough oxidant to strip an alkyl side chain off a benzene ring, from the benzylic carbon outward, until only the carbon attached to the ring remains, as a carboxylic acid. The ring is untouched, whatever the chain's length, provided the benzylic carbon carries at least one hydrogen.",
      "approach": "Step 1: Identify the benzylic carbon of propylbenzene: the CH2 attached to the ring, with two hydrogens. Oxidation can begin there.\nStep 2: Successive oxidation converts the benzylic CH2 to CHOH, then to C=O, and then cleaves the C-C bond beyond it; the other two carbons are lost as CO2 or acetate.\nStep 3: The ring carbon's substituent ends as COOH after acidic workup: benzoic acid.\nStep 4: Whatever the chain (ethyl, propyl, butyl, sec-butyl), the product is the same benzoic acid; only a chain without a benzylic hydrogen survives.",
      "note": "This is a useful structural tool: p-xylene gives terephthalic acid, and the number and position of carboxylic acid groups report how many alkyl groups the ring carried and where. It is also why the ring is the more robust part of an alkylbenzene toward oxidation, the opposite of its behaviour toward hydrogenation, where the ring is the harder part to reduce.",
      "options": {
        "A": "Correct. Permanganate oxidises the benzylic carbon and cleaves the rest of the chain; the side chain ends as COOH, giving benzoic acid.",
        "B": "3-Phenylpropanoic acid would require oxidation at the end of the chain with the middle carbons untouched; permanganate attacks the benzylic carbon and does not stop there.",
        "C": "1-Phenylpropan-1-ol is the first intermediate on the way, but hot permanganate takes it on to the ketone and then cleaves the chain; it cannot be stopped at the alcohol.",
        "D": "Propiophenone is also an intermediate; under these conditions the ketone is cleaved between the carbonyl carbon and the ethyl group, and the acid is the end point."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing a three-carbon propyl chain."
  },
  {
    "question_id": "ch16_q37_sidechain_tertbutylbenzene_oxidation",
    "topic": "Reactions of Alkylbenzene Side Chains",
    "difficulty_level": "Medium",
    "question_text": "When tert-butylbenzene is treated with hot, aqueous potassium permanganate (KMnO4), what organic product is obtained?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "No reaction; tert-butylbenzene is recovered unchanged.",
        "smiles": "CC(C)(C)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzoic acid",
        "smiles": "OC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-methyl-2-phenylpropanoic acid",
        "smiles": "CC(C)(C(=O)O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acetophenone",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Side-chain oxidation needs a handle: a benzylic hydrogen that the oxidant can remove to begin the sequence. tert-Butylbenzene's benzylic carbon is bonded to three methyl groups and the ring, with no hydrogen at all, so permanganate has nowhere to start and the compound is recovered unchanged even after prolonged heating.",
      "approach": "Step 1: Locate the benzylic carbon: the quaternary carbon bearing three CH3 groups.\nStep 2: Count its hydrogens: zero.\nStep 3: Permanganate oxidation proceeds by removing a benzylic hydrogen (the mechanism is complex, but every version begins there); with none available, no reaction.\nStep 4: Compare isopropylbenzene, which has one benzylic hydrogen and is oxidised to benzoic acid, losing two carbons.",
      "note": "This is the standard exam pair: a tert-butyl group survives permanganate, every other alkyl group does not. It is used to distinguish the two in structure problems, and it means a tert-butyl group can serve as a robust para blocking group through an oxidation. Option C's acid would require oxidising a methyl group while sparing the benzylic position, the reverse of the real selectivity.",
      "options": {
        "A": "Correct. With no benzylic hydrogen, tert-butylbenzene cannot be oxidised by permanganate and is recovered.",
        "B": "Benzoic acid would require cleaving three C-C bonds at a carbon with no hydrogen; permanganate cannot initiate the sequence and the tert-butyl group stays intact.",
        "C": "2-Methyl-2-phenylpropanoic acid would mean oxidising one of the methyl groups while the benzylic carbon is left alone, the opposite of permanganate's selectivity; primary C-H bonds far from the ring are inert here.",
        "D": "Acetophenone would require breaking two C-C bonds at the quaternary carbon; that carbon has no hydrogen to lose and is never oxidised."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q38_sidechain_nitro_reduction",
    "topic": "Reduction of Nitroarenes",
    "difficulty_level": "Easy",
    "question_text": "Which of the following reaction conditions will successfully reduce nitrobenzene to aniline?",
    "question_smiles": "O=[N+]([O-])c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Fe in dilute HCl, followed by treatment with NaOH",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "LiAlH4 in ether, followed by water",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "NaBH4 in methanol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Na2Cr2O7 in aqueous H2SO4, heat",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The nitro group is put on a ring to be turned into something else, and the something else is nearly always an amine. Reduction takes six electrons, from N(+3) to N(-3), and the practical reagents are a metal in acid (iron, tin or SnCl2 in HCl), which reduces the nitro group cleanly to the anilinium salt, or catalytic hydrogenation. Hydride reagents are the wrong tools: NaBH4 does not touch a nitro group, and LiAlH4 reduces aromatic nitro compounds to azobenzenes, not to amines.",
      "approach": "Step 1: Fe + HCl: iron is oxidised while the nitro group is reduced stepwise through nitroso and hydroxylamine stages to the amine; in acid the product is the anilinium ion, C6H5NH3+.\nStep 2: Add NaOH: the anilinium salt is deprotonated and aniline separates as the free base.\nStep 3: Check the alternatives: NaBH4 is too weak a hydride donor to reduce a nitro group; LiAlH4 gives azobenzene from nitrobenzene; sodium dichromate in acid is an oxidant and leaves the nitro group untouched.\nStep 4: Answer: Fe/HCl followed by base.",
      "note": "McMurry lists Fe, SnCl2 and H2 over a catalyst as the reductants; all three work, and catalytic hydrogenation is the cleanest when no other reducible group is present. The nitro-to-amine reduction is the link between this chapter and the amines chapter: aniline, and from it diazonium salts and every substituent the Sandmeyer reactions install.",
      "options": {
        "A": "Correct. Iron in acid reduces the nitro group to the anilinium salt, and sodium hydroxide liberates aniline.",
        "B": "Lithium aluminium hydride reduces aromatic nitro compounds to azobenzene, Ph-N=N-Ph, coupling two rings; it does not give aniline.",
        "C": "Sodium borohydride reduces aldehydes and ketones but is too weak to reduce a nitro group; nitrobenzene is recovered.",
        "D": "Dichromate in sulfuric acid is a strong oxidant; the nitro group is already at nitrogen's highest common oxidation state and is unaffected, and no reduction of any kind occurs."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing a nitro group."
  },
  {
    "question_id": "ch16_q39_sidechain_clemmensen",
    "topic": "Reactions of Alkylbenzene Side Chains",
    "difficulty_level": "Easy",
    "question_text": "What is the major product when acetophenone is heated with zinc-mercury amalgam (Zn(Hg)) in concentrated hydrochloric acid?",
    "question_smiles": "CC(=O)c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "ethylbenzene",
        "smiles": "CCc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-phenylethanol",
        "smiles": "CC(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "styrene",
        "smiles": "C=Cc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "benzoic acid",
        "smiles": "OC(=O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Zinc amalgam in concentrated hydrochloric acid, the Clemmensen reduction, converts a ketone carbonyl into a CH2 group, and it is the usual second step after a Friedel-Crafts acylation: acylate to put an unrearranged acyl group on the ring, then reduce the carbonyl away to leave the straight-chain alkyl group that direct alkylation could not give. Acetophenone becomes ethylbenzene.",
      "approach": "Step 1: Acetophenone's carbonyl carbon is bonded to the ring and a methyl; the Clemmensen conditions reduce C=O all the way to CH2 (the mechanism involves electron transfer at the zinc surface, not a simple hydride addition).\nStep 2: The product side chain is CH2CH3: ethylbenzene.\nStep 3: The ring is untouched, and the acidic conditions leave alkyl groups alone.\nStep 4: Check option C: elimination to styrene would need an alcohol intermediate and dehydration; the conditions reduce rather than dehydrate.",
      "note": "Clemmensen conditions are strongly acidic, so they suit substrates that tolerate acid; base-sensitive ones use the Wolff-Kishner reduction (hydrazine and base), and for aryl ketones catalytic hydrogenation over palladium also works because the benzylic C-O bond is easily hydrogenolysed. These reductions belong to McMurry's carbonyl chapters, but every synthesis in this chapter that needs a straight-chain alkylbenzene leans on one of them.",
      "options": {
        "A": "Correct. The Clemmensen reduction converts the ketone carbonyl to a methylene group; acetophenone gives ethylbenzene.",
        "B": "1-Phenylethanol is the product of a hydride reduction such as NaBH4, which stops at the alcohol. Zn(Hg)/HCl goes past the alcohol stage to the hydrocarbon.",
        "C": "Styrene would require dehydration of an alcohol; the Clemmensen conditions reduce the carbonyl to CH2 and give no alkene.",
        "D": "Benzoic acid is an oxidation product, and Zn(Hg)/HCl is a reducing system; the side chain gains hydrogen here, it does not lose carbon."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing an acetyl group, a carbonyl carrying a methyl."
  },
  {
    "question_id": "ch16_q40_sidechain_wolff_kishner",
    "topic": "Reactions of Alkylbenzene Side Chains",
    "difficulty_level": "Medium",
    "question_text": "Under what conditions does the Wolff-Kishner reduction convert an aryl ketone to an alkylbenzene, and what gas is evolved during this reaction?",
    "question_smiles": "CCC(=O)c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Hydrazine (H2NNH2) and potassium hydroxide (KOH) in diethylene glycol at high temperatures; N2 gas",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Zinc-mercury amalgam (Zn(Hg)) and concentrated HCl; H2 gas",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Hydrogen gas (H2) and palladium on carbon (Pd/C) at room temperature; no gas is evolved",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Lithium aluminum hydride (LiAlH4) in ether; O2 gas",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Wolff-Kishner reduction is the base-mediated counterpart of the Clemmensen: hydrazine converts the ketone into a hydrazone, and strong base at high temperature (KOH in diethylene glycol, around 200 °C) removes the two nitrogens as N2 gas, leaving a CH2 group where the carbonyl was. The evolution of nitrogen is what drives the reaction, and it is the sign that it is working.",
      "approach": "Step 1: Ketone + H2NNH2 -> hydrazone, R2C=N-NH2, with loss of water.\nStep 2: KOH removes an N-H proton; the anion tautomerises to put the negative charge on carbon and a proton on the terminal nitrogen.\nStep 3: Loss of N2 from that intermediate gives a carbanion, which is protonated by the solvent: R2CH2.\nStep 4: The gas evolved is N2; for propiophenone the product is propylbenzene.",
      "note": "Choose between the two carbonyl-to-CH2 reductions by what else the molecule carries: acid-sensitive groups tolerate Wolff-Kishner, base-sensitive ones tolerate Clemmensen. Neither is in McMurry's aromatic chapter, but both are the standard finish to a Friedel-Crafts acylation when a straight-chain alkylbenzene is wanted, and both are ACS exam staples. The Huang-Minlon modification, which distils off water before the high-temperature step, is the version used in practice.",
      "options": {
        "A": "Correct. Hydrazine forms the hydrazone, hot KOH in a high-boiling solvent expels N2, and the ketone becomes a CH2 group.",
        "B": "Zinc amalgam in HCl is the Clemmensen reduction; it gives the same product by a different route and evolves no gas as a product.",
        "C": "Catalytic hydrogenation reduces aryl ketones to alkylbenzenes, but it consumes H2 rather than evolving a gas, and it is not the Wolff-Kishner reaction.",
        "D": "LiAlH4 reduces a ketone only to the alcohol, and no oxygen gas is evolved in any reduction; O2 would be an oxidation product."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing a propanoyl group: a carbonyl attached to an ethyl group."
  },
  {
    "question_id": "ch16_q41_sidechain_catalytic_hydrogenation",
    "topic": "Reactions of Alkylbenzene Side Chains",
    "difficulty_level": "Medium",
    "question_text": "Aryl ketones can be reduced to alkylbenzenes using catalytic hydrogenation. What are the typical conditions for this transformation, and why does it not reduce aliphatic ketones?",
    "question_smiles": "CC(=O)c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "H2, Pd/C; the carbonyl group is benzylic and undergoes hydrogenolysis under mild conditions.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "H2, PtO2 at high pressure; it reduces all ketones but requires a poison catalyst for aliphatic ketones.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "NaBH4 and Pd/C; the hydride transfer is catalyzed by palladium.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "H2O and Ru catalyst; the reaction is a hydration-dehydration sequence.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An aryl ketone can be reduced to an alkylbenzene by ordinary catalytic hydrogenation, and the reason is the benzylic position. Hydrogen adds to the carbonyl to give a benzylic alcohol, and a benzylic C-O bond is weak enough to be cleaved by hydrogen over palladium (hydrogenolysis) because the ring stabilises the benzylic transition state. An aliphatic ketone gives an alcohol whose C-O bond has no such help, and the reduction stops there.",
      "approach": "Step 1: H2, Pd/C: the carbonyl of acetophenone is hydrogenated to 1-phenylethanol.\nStep 2: The benzylic C-OH bond undergoes hydrogenolysis on the catalyst surface: the OH is replaced by H, giving ethylbenzene.\nStep 3: Apply the same conditions to 2-butanone: reduction gives 2-butanol, whose C-O bond is not benzylic and survives.\nStep 4: The aromatic ring is not reduced under these mild conditions, so the alkylbenzene is isolated cleanly.",
      "note": "This is the reduction McMurry pairs with Friedel-Crafts acylation, and it is the mildest of the three routes to an alkylbenzene from an aryl ketone. The same hydrogenolysis removes benzyl protecting groups from alcohols and amines (Ph-CH2-O-R + H2 -> Ph-CH3 + HO-R), which is why benzyl ethers serve as protecting groups in later chapters.",
      "options": {
        "A": "Correct. Hydrogenation gives the benzylic alcohol, and its benzylic C-O bond is hydrogenolysed under the same mild conditions; an aliphatic ketone stops at the alcohol.",
        "B": "Platinum at high pressure would reduce the aromatic ring as well; the point of the palladium conditions is that they do not, and no catalyst poison is involved.",
        "C": "Sodium borohydride is a hydride donor that works without a catalyst and stops at the alcohol; palladium does not catalyse hydride transfer from borohydride.",
        "D": "There is no hydration step; the reaction is a hydrogenation followed by hydrogenolysis, and ruthenium catalysts are used for other reductions."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing an acetyl group."
  },
  {
    "question_id": "ch16_q42_synthetic_m_bromobenzoic",
    "topic": "Synthetic Planning",
    "difficulty_level": "Medium",
    "question_text": "To synthesize meta-bromobenzoic acid starting from toluene, which of the following reaction sequences is correct?",
    "question_smiles": "Cc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "1. KMnO4, NaOH, heat; 2. H3O+; 3. Br2, FeBr3",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1. Br2, FeBr3; 2. KMnO4, NaOH, heat; 3. H3O+",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1. HNO3, H2SO4; 2. Br2, FeBr3; 3. KMnO4, NaOH, heat",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1. NBS, light; 2. Br2, FeBr3; 3. CrO3, H2SO4",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Order of steps in an aromatic synthesis is decided by the directing effects of the groups present at each stage. Toluene's methyl group is an ortho/para director; a carboxylic acid is a meta director. A meta relationship between bromine and the acid group can be reached only by brominating after the methyl has been oxidised to COOH, so that the group on the ring when bromine arrives is the meta director.",
      "approach": "Step 1: Identify the target's substituent relationship: Br meta to COOH.\nStep 2: Ask which group must be on the ring during bromination to direct meta: COOH, not CH3.\nStep 3: So: oxidise toluene first (KMnO4, heat, then acid workup) to benzoic acid; then brominate (Br2, FeBr3) meta to the acid.\nStep 4: The reverse order brominates toluene ortho and para, and oxidation then gives the ortho and para bromobenzoic acids.",
      "note": "The two bromobenzoic acid syntheses are the chapter's cleanest pair: same starting material, same two reactions, opposite order, different isomer. Option D would give a benzylic bromide, and ring bromination of it followed by chromic acid oxidation would still give the para acid; option C introduces a nitro group the target does not contain.",
      "options": {
        "A": "Correct. Oxidising the methyl to COOH first installs a meta director, and bromination then goes meta to it.",
        "B": "Brominating toluene first puts the bromine ortho and para to the methyl group; oxidation afterwards gives 2- and 4-bromobenzoic acid, never the meta isomer.",
        "C": "Nitration adds a group that the target does not contain, and it would also make the ring too deactivated for useful bromination; no step removes it.",
        "D": "NBS and light brominate the side chain, not the ring; a ring bromination of that benzylic bromide would go para to the alkyl group, and oxidation would give the para acid."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Toluene, the starting material: a benzene ring with one methyl group."
  },
  {
    "question_id": "ch16_q43_synthetic_p_bromobenzoic",
    "topic": "Synthetic Planning",
    "difficulty_level": "Medium",
    "question_text": "What is the correct order of operations to synthesize para-bromobenzoic acid starting from toluene?",
    "question_smiles": "Cc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "1. Br2, FeBr3; 2. KMnO4, NaOH, heat; 3. H3O+",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1. KMnO4, NaOH, heat; 2. H3O+; 3. Br2, FeBr3",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1. HNO3, H2SO4; 2. Br2, FeBr3; 3. Fe/HCl",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1. NBS, benzoyl peroxide, heat; 2. NaOH",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The same two reactions as the meta synthesis, in the other order. To place bromine para to the eventual carboxylic acid, the bromination must be done while the ring carries the ortho/para-directing methyl group; oxidation afterwards converts the methyl to COOH without moving the bromine.",
      "approach": "Step 1: Target: Br para to COOH.\nStep 2: A para relationship comes from an ortho/para director, so brominate toluene first: Br2/FeBr3 gives mostly 4-bromotoluene (with some 2-bromotoluene, separated).\nStep 3: Oxidise the methyl group: KMnO4, heat, then H3O+, gives 4-bromobenzoic acid; the aryl bromide is inert to permanganate.\nStep 4: Reversing the order would place bromine meta to the acid.",
      "note": "The ortho isomer formed in the bromination is the practical cost of using an ortho/para director; sulfonation can be used to block the para position when the ortho product is wanted, and the bulk of a substituent shifts the ratio toward para. Compare tert-butylbenzene, which nitrates almost entirely para.",
      "options": {
        "A": "Correct. Bromination with the methyl group in place goes para, and oxidation of the methyl then gives 4-bromobenzoic acid.",
        "B": "Oxidising first installs a meta director, and bromination then gives the meta acid, the other synthesis.",
        "C": "Nitration adds a group absent from the target, and reduction to an amine does not remove it; the sequence never produces a bromobenzoic acid.",
        "D": "NBS brominates the benzylic carbon, and NaOH would substitute or eliminate at that carbon; no ring bromine and no carboxylic acid are formed."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Toluene: a methyl group on a benzene ring, the starting material for the synthesis."
  },
  {
    "question_id": "ch16_q44_synthetic_m_butylnitrobenzene",
    "topic": "Synthetic Planning",
    "difficulty_level": "Hard",
    "question_text": "What is the correct sequence of reactions to prepare 1-butyl-3-nitrobenzene starting from benzene?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "1. Butanoyl chloride, AlCl3; 2. HNO3, H2SO4; 3. Zn(Hg), HCl, heat",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1. 1-chlorobutane, AlCl3; 2. HNO3, H2SO4",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1. HNO3, H2SO4; 2. 1-chlorobutane, AlCl3",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1. Butanoyl chloride, AlCl3; 2. Zn(Hg), HCl, heat; 3. HNO3, H2SO4",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two problems must be solved at once: a straight butyl chain, which direct alkylation with 1-chlorobutane would rearrange, and a meta relationship between the chain and the nitro group, which a butyl group, an ortho/para director, cannot deliver. Friedel-Crafts acylation solves the first, since the acylium ion does not rearrange, and because the resulting ketone is a meta director it sets up the second: nitrate while the carbonyl is still there, then reduce it to CH2.",
      "approach": "Step 1: Benzene + butanoyl chloride, AlCl3: 1-phenylbutan-1-one, no rearrangement.\nStep 2: HNO3/H2SO4: the acyl group directs meta; product 1-(3-nitrophenyl)butan-1-one.\nStep 3: Zn(Hg), HCl: Clemmensen reduction of the ketone to CH2 gives 1-butyl-3-nitrobenzene; the nitro group survives these conditions.\nStep 4: Option D reduces before nitrating, so the alkyl group directs and the para isomer results; options B and C use 1-chlorobutane and give a sec-butyl group, and C also tries to alkylate a nitro-deactivated ring.",
      "note": "This is the template for most substituted-alkylbenzene syntheses: acylate, use the ketone's meta direction if meta is wanted, reduce it first if ortho/para is wanted, and only then add the group that needs the directing effect. Catalytic hydrogenation is not the right reduction in step 3, because it would reduce the nitro group as well; Clemmensen leaves it alone.",
      "options": {
        "A": "Correct. Acylation installs an unrearranged four-carbon chain and a meta director; nitration goes meta; Clemmensen reduction then turns the ketone into the butyl group.",
        "B": "1-Chlorobutane with AlCl3 rearranges to the sec-butyl cation, and the sec-butyl group is an ortho/para director; the product would be a sec-butylnitrobenzene, mostly para.",
        "C": "Nitrobenzene is too deactivated to undergo Friedel-Crafts alkylation at all, and even if it did, the chain would rearrange.",
        "D": "Reducing the ketone before nitration leaves a butyl group on the ring, an ortho/para director; nitration then gives mainly the para isomer."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Benzene, the starting material, with no substituents."
  },
  {
    "question_id": "ch16_q45_synthetic_p_butylnitrobenzene",
    "topic": "Synthetic Planning",
    "difficulty_level": "Hard",
    "question_text": "To synthesize 1-butyl-4-nitrobenzene from benzene, what is the best order of synthetic steps?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "1. Butanoyl chloride, AlCl3; 2. Zn(Hg), HCl, heat; 3. HNO3, H2SO4",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1. Butanoyl chloride, AlCl3; 2. HNO3, H2SO4; 3. Zn(Hg), HCl, heat",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1. 1-chlorobutane, AlCl3; 2. HNO3, H2SO4",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1. HNO3, H2SO4; 2. 1-chlorobutane, AlCl3",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The para target uses the same three reactions as the meta target, with the last two in the other order. Acylation gives the unrearranged four-carbon chain; reducing the ketone to a butyl group first makes the substituent an ortho/para director, so the nitration that follows goes para, with some ortho that is separated.",
      "approach": "Step 1: Benzene + butanoyl chloride, AlCl3 -> butyrophenone (1-phenylbutan-1-one).\nStep 2: Zn(Hg), HCl -> butylbenzene: the chain is now an alkyl group and an ortho/para director.\nStep 3: HNO3/H2SO4 -> 1-butyl-4-nitrobenzene as the major product, plus some ortho isomer.\nStep 4: Nitrating before the reduction gives the meta isomer, and the two chlorobutane routes give a rearranged sec-butyl group.",
      "note": "Ortho/para ratios matter in practice: butylbenzene nitration gives roughly two parts para to one part ortho, and the isomers are separated by distillation or crystallisation. If the ortho product were wanted, blocking the para position with a sulfonic acid group and removing it afterwards is the classical trick.",
      "options": {
        "A": "Correct. Acylation, then Clemmensen reduction to the butyl group, then nitration para to the alkyl group.",
        "B": "Nitrating while the ketone is on the ring gives the meta isomer, the other synthesis; the carbonyl is a meta director.",
        "C": "1-Chlorobutane with AlCl3 gives the rearranged sec-butyl group, not a straight butyl chain.",
        "D": "Nitrobenzene cannot be alkylated by Friedel-Crafts chemistry, and the chain would rearrange in any case."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unsubstituted benzene ring, the starting material."
  },
  {
    "question_id": "ch16_q46_intramolecular_fc_acylation",
    "topic": "Friedel-Crafts Acylation",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product when 4-phenylbutanoyl chloride is treated with AlCl3?",
    "question_smiles": "O=C(Cl)CCCc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "1-tetralone",
        "smiles": "O=C1CCCc2ccccc21",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-tetralone",
        "smiles": "O=C2CCc1ccccc1C2",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-indanone",
        "smiles": "O=C1Cc2ccccc21",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-indanone",
        "smiles": "O=C2Cc1ccccc1C2",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An acyl chloride tethered to an arene by a short chain acylates its own ring, and the ring size of the product is fixed by the tether: the acylium carbon attacks the ring carbon ortho to the chain, closing a ring that contains the chain carbons, the carbonyl carbon and two ring carbons. With a three-carbon tether between the ring and the carbonyl, that is a six-membered ring, and the product is 1-tetralone.",
      "approach": "Step 1: AlCl3 converts the acyl chloride into an acylium ion at the end of the CH2CH2CH2 chain.\nStep 2: The only ring carbons the acylium can reach are the ortho positions of the same benzene ring.\nStep 3: Count the new ring: two aromatic carbons (ipso and ortho), three chain carbons, one carbonyl carbon: six atoms.\nStep 4: Loss of a proton gives 3,4-dihydronaphthalen-1(2H)-one, 1-tetralone, with the carbonyl attached directly to the aromatic ring.",
      "note": "A two-carbon tether (3-phenylpropanoyl chloride) closes a five-membered ring and gives 1-indanone; intramolecular acylation is the standard way to build the second ring of a tetralin or indane. The carbonyl always ends up on the aromatic ring because it was the acylium carbon; the 2-tetralone and 2-indanone options would need the carbonyl one carbon further along the chain, which acylation cannot produce.",
      "options": {
        "A": "Correct. The three-carbon tether closes a six-membered ring onto the ortho position, and the carbonyl is on the ring carbon: 1-tetralone.",
        "B": "2-Tetralone has the carbonyl one carbon away from the aromatic ring; the acylium carbon is the one that bonds to the ring, so the carbonyl must be attached to it.",
        "C": "1-Indanone is the product of the two-carbon tether, 3-phenylpropanoyl chloride; a three-carbon tether makes a six-membered ring, not five.",
        "D": "2-Indanone has both the wrong ring size for this tether and the carbonyl in a position that acylation cannot produce."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring attached to a three-carbon chain that ends in an acyl chloride group."
  },
  {
    "question_id": "ch16_q49_reagents_bromobenzene_aniline",
    "topic": "Reaction Classifications",
    "difficulty_level": "Medium",
    "question_text": "Which set of reaction conditions will convert bromobenzene to aniline, and what is the classification of this reaction?",
    "question_smiles": "Brc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "NaNH2 in liquid NH3 at -33 °C; Nucleophilic Aromatic Substitution",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "NH3 and AlCl3 at room temperature; Electrophilic Aromatic Substitution",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "HNO3/H2SO4, then Fe/HCl; Electrophilic Aromatic Substitution",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "NaNH2 in ether at room temperature; Electrophilic Aromatic Substitution",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An unactivated aryl halide has no nitro group to make addition-elimination possible and no way to undergo SN1 or SN2, so the only classical route to aniline is through benzyne. Sodium amide in liquid ammonia removes an ortho proton, bromide leaves, and amide adds to the benzyne; the overall change is the replacement of Br by NH2, which makes it a nucleophilic aromatic substitution even though the mechanism is elimination-addition.",
      "approach": "Step 1: Classify bromobenzene: no activating group for SNAr, so hydroxide or ammonia alone does nothing.\nStep 2: NaNH2 in NH3 (boiling point -33 °C, hence the temperature): elimination of HBr gives benzyne.\nStep 3: Amide adds to benzyne and protonation by ammonia gives aniline; both ends of benzyne are equivalent, so there is one product.\nStep 4: Classification: a nucleophile has replaced a leaving group on the ring: nucleophilic aromatic substitution, by the benzyne mechanism.",
      "note": "Options B and C describe electrophilic chemistry, and neither installs an amino group in place of the bromine: ammonia and AlCl3 form an adduct rather than an electrophile, and nitration followed by reduction gives bromoanilines with the bromine still present. The modern alternative to the benzyne route is a palladium- or copper-catalysed amination, which appears in more advanced courses.",
      "options": {
        "A": "Correct. Sodium amide in liquid ammonia converts bromobenzene to aniline through a benzyne intermediate, a nucleophilic aromatic substitution by elimination-addition.",
        "B": "Ammonia is a nucleophile and a base, not an electrophile, and it would simply coordinate to AlCl3; no electrophilic substitution and no C-N bond formation occurs.",
        "C": "Nitration followed by reduction gives an aminobromobenzene, with the bromine still on the ring; it adds an amino group rather than replacing the bromine.",
        "D": "Sodium amide is used in liquid ammonia, not ether at room temperature, and the classification is wrong in any case: replacing Br by NH2 is a nucleophilic substitution."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing a bromine."
  },
  {
    "question_id": "ch16_q50_sulfonation_toluene",
    "topic": "Sulfonation of Substituted Benzenes",
    "difficulty_level": "Medium",
    "question_text": "When toluene is treated with fuming sulfuric acid, the major product obtained is p-toluenesulfonic acid. What is the correct IUPAC name of the product, and what type of directing effect is observed?",
    "question_smiles": "Cc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "4-methylbenzenesulfonic acid; ortho/para-directing",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-methylbenzenesulfonic acid; meta-directing",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-methylbenzenesulfonic acid; meta-directing",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-methylbenzenesulfonic acid; meta-directing",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sulfonation of toluene follows the methyl group's ortho/para direction, and the para isomer dominates because the SO3 electrophile is bulky and the reaction is reversible: any ortho product formed can revert and re-sulfonate at the less crowded para position, especially at higher temperature. The product's systematic name treats benzenesulfonic acid as the parent, with the methyl group as a prefix at C4.",
      "approach": "Step 1: Directing effect: CH3 is a weak activator and an ortho/para director.\nStep 2: Sterics and reversibility: SO3 is large, the ortho positions are crowded, and sulfonation equilibrates, so p-toluenesulfonic acid is the thermodynamic and major product.\nStep 3: Name it: the sulfonic acid is the principal characteristic group, so the parent is benzenesulfonic acid with the SO3H carbon as C1; the methyl is at C4: 4-methylbenzenesulfonic acid.\nStep 4: The meta isomer is not formed to any significant extent; an alkyl group never directs meta.",
      "note": "p-Toluenesulfonic acid (TsOH) is the everyday strong acid catalyst of organic chemistry and the source of tosyl chloride, whose esters turn alcohols into good leaving groups in Chapter 17. Its manufacture is exactly this reaction. At lower temperature the ortho isomer is a larger fraction, the usual pattern for a reversible sulfonation.",
      "options": {
        "A": "Correct. The methyl group directs ortho and para, the bulky, reversible sulfonation favours para, and the product is named as a 4-methyl-substituted benzenesulfonic acid.",
        "B": "An alkyl group is an ortho/para director, never meta; 3-methylbenzenesulfonic acid is a trace product at most.",
        "C": "The name is right but the directing effect is not: a group that gives the para product is by definition an ortho/para director.",
        "D": "The ortho isomer is a minor product, and the methyl group directs ortho and para, not meta; both halves of this option are wrong."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Toluene, a benzene ring with a methyl group, before sulfonation."
  },
  {
    "question_id": "ch16_q_dynamic_directing_effects",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Medium",
    "question_text": "Match each benzene substituent to its directing and activating/deactivating status in Electrophilic Aromatic Substitution.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "Ortho/Para Directing - Activator",
        "alt": "A benzene ring bearing an OH group."
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Ortho/Para Directing - Weak Activator",
        "alt": "A benzene ring bearing a CH3 group."
      },
      {
        "smiles": "O=[N+]([O-])c1ccccc1",
        "correctAnswer": "Meta Directing - Deactivator",
        "alt": "A benzene ring bearing a nitro group, NO2."
      },
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Ortho/Para Directing - Deactivator",
        "alt": "A benzene ring bearing a chlorine atom."
      }
    ],
    "match_options": [
      "Ortho/Para Directing - Activator",
      "Ortho/Para Directing - Weak Activator",
      "Meta Directing - Deactivator",
      "Ortho/Para Directing - Deactivator"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect directing effect mapping",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Four substituents that cover the whole map of substituent effects. A group with a lone pair on the atom attached to the ring is an ortho/para director; it activates if resonance donation outweighs inductive withdrawal (OH) and deactivates if it does not (Cl). A group with no lone pair activates weakly by induction and hyperconjugation (CH3) or deactivates and directs meta if it withdraws strongly (NO2). Classifying a substituent is asking those two questions in order.",
      "approach": "Step 1: Phenol: the oxygen lone pair donates strongly by resonance; the ring is strongly activated and substitution goes ortho and para.\nStep 2: Toluene: no lone pair; the methyl group donates weakly by induction and hyperconjugation; weak activator, ortho/para.\nStep 3: Nitrobenzene: the nitro group withdraws by induction and resonance; strong deactivator, meta director.\nStep 4: Chlorobenzene: inductive withdrawal outweighs weak resonance donation, so the ring is deactivated, but the lone pair still stabilises the ortho and para arenium ions; an ortho/para-directing deactivator.",
      "note": "The halogen box is the one students most often get wrong, because the two effects point in different directions; the rule is that direction is set by the lone pair and rate by the net electron density. Every other common substituent fits one of these four boxes: OR, NH2 and NHCOR with phenol; alkyl and aryl with toluene; CN, SO3H, CHO, COR, COOH, COOR and NR3+ with nitrobenzene; F, Br and I with chlorobenzene.",
      "options": {
        "A": "Correct. Phenol is a strong ortho/para activator, toluene a weak ortho/para activator, nitrobenzene a meta-directing deactivator, and chlorobenzene an ortho/para-directing deactivator.",
        "B": "At least one substituent is misfiled. Ask first whether the attached atom has a lone pair (ortho/para director) and then whether the ring gains or loses electron density overall (activator or deactivator)."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q6_roadmap_bromoaniline",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway. Determine the correct compounds matching labels B, C and D.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1,
          "alt": "Compound A: an unsubstituted benzene ring."
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
          "reagents": "HNO3, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "Br2, FeBr3, heat"
        },
        {
          "from": "C",
          "to": "D",
          "reagents": "1. Fe, HCl\n2. NaOH"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "B: nitrobenzene, C: 1-bromo-3-nitrobenzene, D: 3-bromoaniline",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "B: nitrobenzene, C: 1-bromo-4-nitrobenzene, D: 4-bromoaniline",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "B: nitrobenzene, C: 1-bromo-3-nitrobenzene, D: 3-bromoanilinium chloride",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "B: benzenesulfonic acid, C: 3-bromobenzenesulfonic acid, D: 3-bromoaniline",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A meta-bromoaniline cannot be made by brominating aniline, whose amino group directs ortho and para. The route goes through the nitro group instead: nitrate benzene, brominate while the meta-directing nitro group is on the ring, and only then reduce the nitro group to the amine. The order of the last two steps is the whole point of the sequence.",
      "approach": "Step 1: Benzene + HNO3/H2SO4: nitronium ion substitution gives nitrobenzene, B.\nStep 2: Nitrobenzene + Br2/FeBr3 with heat: the nitro group is a meta-directing deactivator, so bromine enters at C3: 1-bromo-3-nitrobenzene, C.\nStep 3: Fe in HCl reduces the nitro group to the anilinium salt, and NaOH liberates the free amine: 3-bromoaniline, D. The aryl bromide is untouched by both reagents.\nStep 4: Check the relationship: bromine meta to nitrogen, which is what the nitro group's direction guaranteed.",
      "note": "Reversing steps 2 and 3, reducing first and then brominating, would give the para and ortho bromoanilines instead, and the free amine would also be over-brominated. Every meta-substituted aniline in the chapter is made this way, with the nitro group doing the directing before it is reduced.",
      "options": {
        "A": "Correct. Nitration, then meta bromination directed by the nitro group, then reduction of the nitro group to NH2 with the bromine already in the meta position.",
        "B": "The nitro group directs meta, not para; 1-bromo-4-nitrobenzene and 4-bromoaniline would require bromination after the reduction, in the opposite order.",
        "C": "After Fe/HCl the amine is present as its hydrochloride salt, but the second reagent, NaOH, deprotonates it; the isolated compound D is the free 3-bromoaniline.",
        "D": "HNO3 with H2SO4 is a nitration; sulfonation would need SO3 or fuming sulfuric acid, and a sulfonic acid is not reduced to an amine by iron and acid."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q9_roadmap_bromoethylbenzene",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway. Determine the correct compounds matching labels B, C and D.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1,
          "alt": "Compound A: benzene, a hexagon with three double bonds."
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
          "reagents": "CH3COCl, AlCl3; then H2O"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H2, Pd/C"
        },
        {
          "from": "C",
          "to": "D",
          "reagents": "Br2, FeBr3"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "B: acetophenone, C: ethylbenzene, D: 1-bromo-4-ethylbenzene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "B: acetophenone, C: 1-phenylethanol, D: 1-(4-bromophenyl)ethanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "B: acetophenone, C: ethylbenzene, D: (1-bromoethyl)benzene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "B: acetophenone, C: ethylbenzene, D: 1-bromo-3-ethylbenzene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This is the acylate-reduce-substitute sequence for a para-substituted alkylbenzene. Acylation installs the two-carbon group as a ketone; catalytic hydrogenation over palladium reduces the aryl ketone all the way to the alkyl group, because the benzylic C-O bond is hydrogenolysed; the ethyl group then directs the electrophilic bromination ortho and para, and the para product dominates.",
      "approach": "Step 1: Benzene + acetyl chloride/AlCl3, then water: acetophenone, B.\nStep 2: H2, Pd/C: the ketone is reduced to the benzylic alcohol and the benzylic C-O bond is then hydrogenolysed; the ring is not reduced under these mild conditions. Ethylbenzene, C.\nStep 3: Br2/FeBr3: the ethyl group is an ortho/para-directing activator; the para product, 1-bromo-4-ethylbenzene, is the major isomer, D.\nStep 4: Check the relationship: bromine para to ethyl, an ortho/para director's product.",
      "note": "Doing the bromination on acetophenone instead would give the meta isomer, since the acyl group is a meta director; reducing afterwards would then give 1-bromo-3-ethylbenzene. Which order is chosen is decided by the target, exactly as in the nitro-alkyl syntheses of this chapter. Clemmensen or Wolff-Kishner reduction could replace the hydrogenation in step 2.",
      "options": {
        "A": "Correct. Acylation to acetophenone, hydrogenation and hydrogenolysis to ethylbenzene, then bromination para to the alkyl group.",
        "B": "Hydrogenation over palladium does not stop at the benzylic alcohol; the benzylic C-O bond is hydrogenolysed under the same conditions, so C is the hydrocarbon.",
        "C": "(1-Bromoethyl)benzene is the product of radical bromination with NBS and light; Br2 with FeBr3 is an electrophilic substitution and goes on the ring.",
        "D": "1-Bromo-3-ethylbenzene would need a meta director on the ring during bromination; the ethyl group directs ortho and para, and the meta isomer is not formed."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q11_roadmap_bromobenzoic_acid",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Medium",
    "question_text": "Examine the following multi-step synthetic pathway. Determine the correct compounds matching labels B and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "Cc1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1,
          "alt": "Compound A: a benzene ring bearing a methyl group."
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
          "reagents": "Br2, FeBr3"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "KMnO4, H2O, heat; then H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "B: 4-bromotoluene, C: 4-bromobenzoic acid",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "B: 3-bromotoluene, C: 3-bromobenzoic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "B: benzyl bromide, C: benzoic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "B: 4-bromotoluene, C: 4-bromobenzaldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Toluene's methyl group is an ortho/para director, so bromination with Br2 and FeBr3 puts bromine mainly para to it; hot permanganate then oxidises the methyl group, which has benzylic hydrogens, to a carboxylic acid, leaving the aryl bromide untouched. The sequence gives 4-bromobenzoic acid, and running the same two reactions in the other order would give the meta isomer.",
      "approach": "Step 1: Toluene + Br2/FeBr3: electrophilic substitution, ortho and para to methyl; the para product 4-bromotoluene is the major isomer, B (the ortho isomer is separated off).\nStep 2: KMnO4, heat, then acid: the benzylic methyl is oxidised through the alcohol and aldehyde to COOH; the ring and the aryl bromide survive. 4-Bromobenzoic acid, C.\nStep 3: Confirm: bromine para to the acid, which only an ortho/para director could have arranged before the acid group existed.",
      "note": "The pair of bromobenzoic acid syntheses in this chapter differ only in order. Ring bromination needs the Lewis acid; the benzylic bromination of option C would need NBS and light instead, and its product's benzylic bromine would be oxidised away by permanganate, giving plain benzoic acid. Permanganate never stops at the aldehyde of option D.",
      "options": {
        "A": "Correct. Bromination para to the methyl group, then oxidation of the methyl group to the carboxylic acid with the bromine in place.",
        "B": "3-Bromotoluene would need a meta director during the bromination; a methyl group directs ortho and para, and reversing the two steps is what gives the meta acid.",
        "C": "Benzyl bromide is the product of radical bromination (NBS, light), not of Br2 with FeBr3; and permanganate oxidation of it would lose the benzylic bromine, so no bromine would remain in C.",
        "D": "4-Bromobenzaldehyde is an intermediate oxidation level; hot permanganate carries the side chain through to the carboxylic acid."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q13_roadmap_nitrophenol",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway. Determine the correct compounds matching labels B, C and D.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1,
          "alt": "Compound A: a plain benzene ring, the starting material."
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
          "reagents": "Cl2, FeCl3"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "HNO3, H2SO4"
        },
        {
          "from": "C",
          "to": "D",
          "reagents": "NaOH, H2O, 130 °C; then H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "B: chlorobenzene, C: 1-chloro-4-nitrobenzene, D: 4-nitrophenol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "B: chlorobenzene, C: 1-chloro-3-nitrobenzene, D: 3-nitrophenol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "B: chlorobenzene, C: 1-chloro-4-nitrobenzene, D: 4-chlorophenol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "B: chlorobenzene, C: 1-chloro-4-nitrobenzene, D: no reaction; 1-chloro-4-nitrobenzene is recovered",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The sequence joins electrophilic and nucleophilic aromatic substitution. Chlorination gives chlorobenzene; nitration then goes ortho and para to the halogen, and the para isomer is carried forward. That places a nitro group para to the chlorine, which is exactly what activates the chloride toward displacement by hydroxide through a Meisenheimer complex. The product is 4-nitrophenol.",
      "approach": "Step 1: Benzene + Cl2/FeCl3: chlorobenzene, B.\nStep 2: HNO3/H2SO4: chlorine is a deactivating but ortho/para-directing substituent; nitration gives mainly 1-chloro-4-nitrobenzene (with some ortho isomer, separated), C.\nStep 3: NaOH in water at 130 °C: hydroxide adds to the carbon bearing chlorine, the para nitro group stabilises the anion, chloride leaves; acidification gives 4-nitrophenol, D.\nStep 4: Confirm the requirement: the nitro group had to be ortho or para to the chlorine for step 3 to work, and the halogen's directing effect in step 2 is what made it so.",
      "note": "Nitrating first and chlorinating second would give 1-chloro-3-nitrobenzene, the meta isomer, whose chlorine cannot be displaced by hydroxide because the nitro group cannot accept the intermediate's charge from the meta position. The order of the first two steps therefore decides whether the third step is possible at all.",
      "options": {
        "A": "Correct. Chlorination, nitration para to the halogen, then hydroxide displaces the chloride activated by the para nitro group.",
        "B": "Chlorine directs ortho and para, so the meta nitro isomer is not formed; and if it were, its chlorine would be inert to hydroxide, since a meta nitro group gives no resonance stabilisation to the Meisenheimer intermediate.",
        "C": "Hydroxide replaces the chloride, not the nitro group; the nitro group is the activating substituent and stays in the product.",
        "D": "Chlorobenzene itself would be inert to hydroxide at this temperature, but the para nitro group makes 1-chloro-4-nitrobenzene react by addition-elimination."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q1_scheme_anisole_bromination",
    "topic": "Aromatic Halogenation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "COc1ccccc1"
      ],
      "reagents": "Br2 (1 equiv), FeBr3",
      "conditions": "CH2Cl2, 25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring bearing a methoxy group."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "4-Bromoanisole",
        "smiles": "COc1ccc(Br)cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Bromoanisole",
        "smiles": "COc1ccccc1Br",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-Bromoanisole",
        "smiles": "COc1cccc(Br)c1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,4-Dibromoanisole",
        "smiles": "COc1ccc(Br)cc1Br",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A methoxy group is a strong activator and an ortho/para director, so bromine enters ortho or para to it, never meta, and with one equivalent of bromine only one enters. Between ortho and para, the para position wins on sterics: the OCH3 group crowds its two neighbours, and the bromine-Lewis acid complex is a large electrophile. 4-Bromoanisole is the major product, with the 2-bromo isomer as the minor one.",
      "approach": "Step 1: Classify the substituent: OCH3, lone pair on the ring oxygen, resonance donor: activating, ortho/para.\nStep 2: Draw the arenium ions: ortho and para attack each have an oxonium contributor; meta attack has none. Rule out the 3-bromo product.\nStep 3: Choose between ortho and para: two ortho positions but each hindered, one para position and unhindered. Para dominates, roughly 9:1 for anisole.\nStep 4: One equivalent of Br2 gives monosubstitution: 4-bromoanisole. Anisole is reactive enough to brominate even without FeBr3.",
      "note": "The ortho/para ratio is the practical wrinkle in every activated-ring substitution: the statistical expectation of two ortho sites to one para is overturned by sterics for anything bulkier than a proton, and the more crowded the substituent or the electrophile, the more para. With excess bromine the product is brominated again at the remaining ortho position, giving 2,4-dibromoanisole, and phenol under the same conditions in water goes all the way to the tribromide.",
      "options": {
        "A": "Correct. Methoxy directs ortho and para; the unhindered para position takes the bromine, and one equivalent stops at monobromination.",
        "B": "2-Bromoanisole is the minor ortho isomer, formed in about one tenth the amount of the para product because the position next to the methoxy group is crowded.",
        "C": "3-Bromoanisole would require meta attack, which gains nothing from the oxygen lone pair; a methoxy group never directs meta.",
        "D": "2,4-Dibromoanisole is the product of a second bromination and needs a second equivalent of bromine; with one equivalent the reaction stops after the first."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q2_scheme_nitrobenzene_bromination",
    "topic": "Aromatic Halogenation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "O=[N+]([O-])c1ccccc1"
      ],
      "reagents": "Br2 (1 equiv), FeBr3",
      "conditions": "heat",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring bearing a nitro group."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-Bromo-3-nitrobenzene",
        "smiles": "O=[N+]([O-])c1cccc(Br)c1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Bromo-4-nitrobenzene",
        "smiles": "O=[N+]([O-])c1ccc(Br)cc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Bromo-2-nitrobenzene",
        "smiles": "O=[N+]([O-])c1ccccc1Br",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,3-Dibromo-5-nitrobenzene",
        "smiles": "O=[N+]([O-])c1cc(Br)cc(Br)c1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A nitro group deactivates every position of the ring, but it deactivates the meta positions least, because attack there never places the arenium ion's positive charge on the carbon that carries the strongly withdrawing group. Bromination of nitrobenzene is therefore slow, needs heat and a Lewis acid, and gives the meta isomer almost exclusively.",
      "approach": "Step 1: Classify NO2: the attached nitrogen is positive and has no lone pair to donate; strong inductive and resonance withdrawal: deactivating, meta-directing.\nStep 2: Draw the arenium ions. Ortho and para attack each have a contributor with the positive charge on C1, next to the positive nitrogen: very unfavourable. Meta attack keeps the charge on C2, C4 and C6.\nStep 3: The ring is a poor nucleophile, so FeBr3 and heat are required; even then only one bromine enters, because the product is more deactivated still.\nStep 4: Product: 1-bromo-3-nitrobenzene, about 93% of the monobromide.",
      "note": "This is the reaction that makes 'nitrate first, then halogenate' the route to meta-halo anilines: reduce the nitro group afterwards and the bromine is meta to the amine, a relationship that direct bromination of aniline (ortho/para) can never give. The roadmap in this chapter that builds 3-bromoaniline uses exactly this step.",
      "options": {
        "A": "Correct. The nitro group directs meta, and one equivalent of bromine with FeBr3 and heat gives 1-bromo-3-nitrobenzene.",
        "B": "The para isomer would require attack at the position most deactivated by the nitro group's resonance withdrawal; it forms only in trace amounts.",
        "C": "The ortho isomer is disfavoured for the same electronic reason as the para, with steric crowding beside the nitro group on top.",
        "D": "A second bromination on a ring that now carries a nitro group and a bromine, both deactivating, is far slower than the first and does not occur under these conditions."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q3_scheme_fc_alkylation_chloropropane",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1",
        "CCCCl"
      ],
      "reagents": "AlCl3",
      "conditions": "25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "Benzene.",
        "1-Chloropropane: a three-carbon chain with chlorine on the end carbon."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Isopropylbenzene (cumene)",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propylbenzene",
        "smiles": "CCCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,4-Diisopropylbenzene",
        "smiles": "CC(C)c1ccc(C(C)C)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propiophenone",
        "smiles": "CCC(=O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Friedel-Crafts alkylation with a primary halide gives the rearranged product whenever a hydride shift can produce a more stable cation. 1-Chloropropane complexed to AlCl3 does not release a primary propyl cation; a hydride moves from C2 to C1 as chloride leaves, and the secondary isopropyl cation is what the ring attacks. McMurry's own example: benzene and 1-chloropropane give mostly isopropylbenzene.",
      "approach": "Step 1: CH3CH2CH2Cl + AlCl3 -> CH3CH2CH2-Cl+-AlCl3.\nStep 2: A hydride shift from C2 to C1, concerted with loss of AlCl4-, gives CH3CH(+)CH3, a secondary cation.\nStep 3: Benzene attacks the secondary carbon; loss of a proton gives isopropylbenzene, cumene.\nStep 4: With benzene in excess, monoalkylation dominates; with the halide in excess, the activated product is alkylated again to diisopropylbenzenes.",
      "note": "Unrearranged propylbenzene is a minor product in practice, because the shift is fast but not complete, and the clean way to make it is to acylate with propanoyl chloride and reduce the ketone. The industrial cumene process avoids the halide altogether: benzene plus propene over an acid catalyst gives the same isopropyl cation by Markovnikov protonation.",
      "options": {
        "A": "Correct. The primary halide rearranges to the isopropyl cation by a hydride shift as it ionises, and benzene attacks that; cumene is the major product.",
        "B": "Propylbenzene would require capture of an unrearranged primary cation; it is the minor product, and the clean route to it is acylation followed by reduction.",
        "C": "1,4-Diisopropylbenzene is the polyalkylation product, formed when the alkyl halide is in excess; with benzene in excess the reaction stops at the monoalkylbenzene.",
        "D": "Propiophenone is the product of acylation with propanoyl chloride, not of alkylation with a chloroalkane; no carbonyl is introduced here."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q4_scheme_fc_acylation_propanoyl",
    "topic": "Friedel-Crafts Acylation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1",
        "CCC(=O)Cl"
      ],
      "reagents": "AlCl3 (1.1 equiv); then H2O",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "Benzene.",
        "Propanoyl chloride: an ethyl group on a carbonyl that carries a chlorine."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Propiophenone (1-phenylpropan-1-one)",
        "smiles": "CCC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propylbenzene",
        "smiles": "CCCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Phenylpropan-1-ol",
        "smiles": "CCC(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,4-Dipropanoylbenzene",
        "smiles": "CCC(=O)c1ccc(C(=O)CC)cc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Acylation puts the acyl group on the ring exactly as it is: the acylium ion CH3CH2-C≡O+ is resonance-stabilised and does not rearrange, and the ketone it gives, propiophenone, deactivates the ring so that no second acylation follows. A full equivalent of AlCl3 is needed because the product ketone binds the catalyst, and the aqueous workup releases it.",
      "approach": "Step 1: CH3CH2COCl + AlCl3 -> CH3CH2-C+=O <-> CH3CH2-C≡O+, plus AlCl4-.\nStep 2: Benzene attacks the acylium carbon; proton loss gives the aryl ketone complexed to AlCl3.\nStep 3: Water hydrolyses the complex: 1-phenylpropan-1-one, propiophenone.\nStep 4: The acyl group is a meta director and a deactivator, so the ring does not react again, and nothing in the conditions reduces the carbonyl.",
      "note": "This is the first half of the acylation-reduction route to propylbenzene: Clemmensen, Wolff-Kishner or H2/Pd reduction of propiophenone gives the straight-chain alkylbenzene that direct alkylation with 1-chloropropane cannot. The ketone's meta-directing effect can also be used before the reduction, as the synthesis items in this chapter show.",
      "options": {
        "A": "Correct. The unrearranged acylium ion acylates benzene once; after hydrolysis of the AlCl3 complex the product is propiophenone.",
        "B": "Propylbenzene is one reduction away from the answer; Friedel-Crafts acylation itself stops at the ketone, and nothing in AlCl3 and water reduces a carbonyl.",
        "C": "1-Phenylpropan-1-ol would need a hydride reduction of the ketone; the acylation conditions contain no reducing agent.",
        "D": "A second acylation cannot occur: the aryl ketone is deactivated toward electrophiles, and its AlCl3 complex even more so. Diacylation is not a side reaction of Friedel-Crafts acylation."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q5_scheme_acetanilide_nitration",
    "topic": "Substituent Effects",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)Nc1ccccc1"
      ],
      "reagents": "HNO3, H2SO4",
      "conditions": "0 to 10 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring bearing an acetamido group, NH-C(=O)-CH3."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "4-Nitroacetanilide",
        "smiles": "CC(=O)Nc1ccc([N+](=O)[O-])cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Nitroacetanilide",
        "smiles": "CC(=O)Nc1ccccc1[N+](=O)[O-]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-Nitroacetanilide",
        "smiles": "CC(=O)Nc1cccc([N+](=O)[O-])c1",
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
      "context": "The acetamido group is an ortho/para-directing activator, moderated enough by amide resonance that nitration is controllable, and bulky enough that the para product dominates. Nitrating acetanilide is the standard way to a para-nitroaniline: the free amine cannot be nitrated usefully, because it is protonated to a meta-directing anilinium ion and oxidised by nitric acid.",
      "approach": "Step 1: Classify NHCOCH3: nitrogen lone pair conjugated to the ring (and to the carbonyl): activating, ortho/para.\nStep 2: Ortho versus para: the acetamido group is large and the ortho positions are crowded; para dominates strongly, about 90%.\nStep 3: One nitration; the product ring carries a deactivating nitro group and does not react again under these mild conditions.\nStep 4: 4-Nitroacetanilide. The amide survives cold nitrating acid; hydrolysis to 4-nitroaniline needs a separate step with hot aqueous acid.",
      "note": "Protect, substitute, deprotect is the whole strategy: acetylate aniline, nitrate para, hydrolyse the amide. Direct nitration of aniline gives a poor yield of a meta-rich mixture because the anilinium ion is the species present in the acid. The same protection lets aniline be monobrominated, para, rather than tribrominated.",
      "options": {
        "A": "Correct. The acetamido group directs ortho and para, sterics favour para, and cold mixed acid gives 4-nitroacetanilide with the amide intact.",
        "B": "2-Nitroacetanilide is the minor ortho product, held to a small fraction by the bulk of the acetamido group next to the reacting position.",
        "C": "3-Nitroacetanilide would need meta direction, which an amide nitrogen does not give; that is the product of nitrating the anilinium ion, not acetanilide.",
        "D": "4-Nitroaniline is one hydrolysis away: the amide is stable to cold nitrating acid and is removed only by a separate treatment with hot aqueous acid or base."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q6_scheme_phenol_tribromination",
    "topic": "Aromatic Halogenation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "Oc1ccccc1"
      ],
      "reagents": "Br2 (excess)",
      "conditions": "H2O, 25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring bearing a hydroxyl group."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2,4,6-Tribromophenol",
        "smiles": "Oc1c(Br)cc(Br)cc1Br",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-Bromophenol",
        "smiles": "Oc1ccc(Br)cc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Bromophenol",
        "smiles": "Oc1ccccc1Br",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-Bromophenol",
        "smiles": "Oc1cccc(Br)c1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Phenol is so strongly activated that bromine in water substitutes all three ortho and para positions at room temperature with no catalyst, and the reaction does not stop at the monobromide: each product is still an activated phenol. The result is 2,4,6-tribromophenol, which precipitates from water and is the classical qualitative test for a phenol.",
      "approach": "Step 1: Classify OH: strong resonance donor, ortho/para director, one of the most activating groups there is; in water part of the phenol is present as phenoxide, which is more reactive still.\nStep 2: The first bromine enters para (or ortho); the product is still an activated phenol and reacts again at once.\nStep 3: With excess Br2, all three activated positions, 2, 4 and 6, are substituted; the meta positions, 3 and 5, are never attacked.\nStep 4: 2,4,6-Tribromophenol, a white precipitate.",
      "note": "To stop at monobromination, phenol is brominated with one equivalent of Br2 in a nonpolar solvent such as CS2 or CCl4 at low temperature, which gives mainly 4-bromophenol; that is option B's compound, the right answer to a different set of conditions. Aniline behaves the same way with bromine water, giving 2,4,6-tribromoaniline.",
      "options": {
        "A": "Correct. Excess bromine in water substitutes every ortho and para position of the strongly activated ring; 2,4,6-tribromophenol precipitates.",
        "B": "4-Bromophenol is the product of one equivalent of bromine in a nonpolar solvent at low temperature; in water with excess bromine it is an intermediate that reacts twice more.",
        "C": "2-Bromophenol is likewise only an intermediate under these conditions, and even under monobromination conditions it is the minor isomer.",
        "D": "3-Bromophenol would need substitution meta to the hydroxyl group, which never happens; no position meta to OH is activated."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q7_scheme_benzoic_acid_chlorination",
    "topic": "Aromatic Halogenation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "OC(=O)c1ccccc1"
      ],
      "reagents": "Cl2 (1 equiv), FeCl3",
      "conditions": "heat",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring bearing a carboxylic acid group."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "3-Chlorobenzoic acid",
        "smiles": "OC(=O)c1cccc(Cl)c1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-Chlorobenzoic acid",
        "smiles": "OC(=O)c1ccc(Cl)cc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Chlorobenzoic acid",
        "smiles": "OC(=O)c1ccccc1Cl",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzoyl chloride",
        "smiles": "ClC(=O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carboxylic acid group deactivates the ring by induction and by resonance, its carbonyl pulling pi density from the ortho and para positions, so it directs an incoming electrophile meta. Chlorination of benzoic acid with Cl2 and FeCl3 is slow, needs heat, and gives 3-chlorobenzoic acid. The acid group itself is untouched: converting COOH to COCl needs SOCl2 or PCl5, not Cl2.",
      "approach": "Step 1: Classify COOH: a carbonyl carbon attached to the ring, no donating lone pair on that carbon: deactivating, meta-directing, like NO2, CN and ketones.\nStep 2: Arenium ions: ortho and para attack put the positive charge on the carbon bearing the electron-poor carbonyl; meta attack does not.\nStep 3: FeCl3 polarises Cl2 to supply the electrophile; the deactivated ring needs heat.\nStep 4: One chlorine enters meta: 3-chlorobenzoic acid.",
      "note": "Note the two roles chlorine reagents can play with a benzoic acid: Cl2/FeCl3 substitutes the ring, while thionyl chloride substitutes the acid's OH to make the acyl chloride used in Friedel-Crafts acylation. Meta-substituted benzoic acids are otherwise reached by oxidising a meta-substituted toluene, and which route is chosen depends on which group must be on the ring first.",
      "options": {
        "A": "Correct. The carboxylic acid group is a meta director, and ring chlorination with Cl2/FeCl3 goes meta to it.",
        "B": "4-Chlorobenzoic acid would require para direction; it is the product of oxidising 4-chlorotoluene, not of chlorinating benzoic acid.",
        "C": "2-Chlorobenzoic acid is the ortho isomer, disfavoured electronically by the carbonyl's resonance withdrawal and sterically by its bulk.",
        "D": "Benzoyl chloride is made from benzoic acid with SOCl2 or PCl5, which replace the OH of the acid; Cl2 with a Lewis acid attacks the ring, not the carboxyl group."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q9_scheme_snar_chloronitrobenzene",
    "topic": "Nucleophilic Aromatic Substitution (Addition-Elimination)",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "Clc1ccc([N+](=O)[O-])cc1"
      ],
      "reagents": "NaOH, H2O; then H3O+",
      "conditions": "130 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring with a chlorine and, on the opposite carbon, a nitro group."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "4-Nitrophenol",
        "smiles": "Oc1ccc([N+](=O)[O-])cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Nitrophenol",
        "smiles": "Oc1cccc([N+](=O)[O-])c1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "No reaction; 1-chloro-4-nitrobenzene is recovered",
        "smiles": "Clc1ccc([N+](=O)[O-])cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-Chlorophenol",
        "smiles": "Clc1ccc(O)cc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A chloride para to a nitro group is replaced by hydroxide through addition-elimination: hydroxide adds to the carbon bearing chlorine, the nitro group stabilises the resulting Meisenheimer anion, and chloride leaves. The nucleophile ends up exactly where the leaving group was, so the product is 4-nitrophenol, isolated after acidification of the phenoxide.",
      "approach": "Step 1: Check activation: a nitro group para to the chlorine can accept the negative charge by resonance; SNAr is possible.\nStep 2: Addition of HO- at C1 gives the Meisenheimer complex; elimination of Cl- restores aromaticity.\nStep 3: Under the basic conditions the product is sodium 4-nitrophenoxide; acid workup gives 4-nitrophenol.\nStep 4: The nitro group is the activator, not the leaving group; it stays. Hot aqueous base on the same ring without a nitro group would give no reaction at all.",
      "note": "The regiochemistry is the test between the two nucleophilic mechanisms: addition-elimination keeps the nucleophile on the original carbon, benzyne moves it to a neighbour half the time. Chlorobenzene itself needs about 350 °C and high pressure with NaOH, the old Dow phenol process, which goes through benzyne; the nitro group brings the temperature down to something ordinary.",
      "options": {
        "A": "Correct. Hydroxide replaces the chloride para to the nitro group by addition-elimination; acidification gives 4-nitrophenol.",
        "B": "3-Nitrophenol would be the cine product of a benzyne mechanism, in which the nucleophile can land next to the original carbon; that route needs sodium amide, not hydroxide, and does not operate on an activated ring.",
        "C": "No reaction is what happens to chlorobenzene under these conditions, but here the para nitro group activates the ring toward nucleophilic addition and the substitution proceeds.",
        "D": "4-Chlorophenol would mean hydroxide had replaced the nitro group; the nitro group is the activator that makes the reaction possible, and the chloride is the leaving group."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q10_scheme_pxylene_oxidation",
    "topic": "Reactions of Alkylbenzene Side Chains",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "Cc1ccc(C)cc1"
      ],
      "reagents": "KMnO4 (excess), H2O, heat; then H3O+",
      "conditions": "reflux",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring with two methyl groups on opposite carbons."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Terephthalic acid (benzene-1,4-dicarboxylic acid)",
        "smiles": "OC(=O)c1ccc(C(=O)O)cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4-Methylbenzoic acid",
        "smiles": "Cc1ccc(C(=O)O)cc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-Methylbenzaldehyde",
        "smiles": "Cc1ccc(C=O)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclohexane-1,4-dicarboxylic acid",
        "smiles": "OC(=O)C1CCC(C(=O)O)CC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hot permanganate oxidises every alkyl side chain that has a benzylic hydrogen to a carboxylic acid, and it does not stop after the first one. p-Xylene's two methyl groups are both oxidised, giving benzene-1,4-dicarboxylic acid, terephthalic acid; the aromatic ring, which resists oxidation, survives.",
      "approach": "Step 1: Identify the oxidisable carbons: two benzylic CH3 groups, each with hydrogens.\nStep 2: Each is oxidised through the alcohol and aldehyde stages to COOH; with excess hot permanganate neither stops early.\nStep 3: The ring is neither oxidised nor reduced by permanganate.\nStep 4: Product after acidification: terephthalic acid, which precipitates because it is very insoluble.",
      "note": "This reaction is run on a scale of millions of tonnes: terephthalic acid from p-xylene is the monomer of PET polyester. As a structure probe, the number of COOH groups in the product counts the alkyl side chains, and their positions on the ring report the original substitution pattern, since side-chain oxidation never moves a substituent.",
      "options": {
        "A": "Correct. Both methyl groups are oxidised to carboxylic acid groups; the ring is untouched, and the product is terephthalic acid.",
        "B": "4-Methylbenzoic acid has only one side chain oxidised; hot excess permanganate does not stop halfway, since the second methyl is just as benzylic as the first.",
        "C": "4-Methylbenzaldehyde is an intermediate oxidation level; permanganate takes an aldehyde straight on to the acid, and the other methyl is oxidised as well.",
        "D": "The aromatic ring is not reduced by permanganate or by anything else in these conditions; a cyclohexane product would need catalytic hydrogenation of the ring."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q11_scheme_benzylic_bromination",
    "topic": "Reactions of Alkylbenzene Side Chains",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the reaction shown?",
    "reaction_scheme": {
      "reactants": [
        "Cc1ccc(Br)cc1"
      ],
      "reagents": "NBS (1 equiv), (PhCO2)2",
      "conditions": "CCl4, light, heat",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A benzene ring with a methyl group and a bromine on opposite carbons."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-Bromo-4-(bromomethyl)benzene",
        "smiles": "BrCc1ccc(Br)cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2,4-Dibromotoluene",
        "smiles": "Cc1ccc(Br)cc1Br",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Bromo-4-(dibromomethyl)benzene",
        "smiles": "BrC(Br)c1ccc(Br)cc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-Bromobenzoic acid",
        "smiles": "OC(=O)c1ccc(Br)cc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "N-Bromosuccinimide with a radical initiator and light brominates the benzylic position and leaves the ring alone; the aryl bromide already present is a spectator. With one equivalent of NBS the methyl group loses one hydrogen: the product is 4-bromobenzyl bromide, a compound with two very different bromines, one on the ring and inert, one benzylic and highly reactive.",
      "approach": "Step 1: Conditions: NBS, peroxide, light, nonpolar solvent: radical, not electrophilic. Ring bromination would need Br2 with FeBr3.\nStep 2: The weakest C-H bond is the benzylic one; Br· abstracts a methyl hydrogen to give the 4-bromobenzyl radical, delocalised into the ring.\nStep 3: The radical takes Br from Br2, kept at low concentration by NBS: 1-bromo-4-(bromomethyl)benzene.\nStep 4: One equivalent stops at the monobromide; a second equivalent would give the benzal bromide.",
      "note": "The two bromines in the product behave as differently as any two halogens on one molecule: the benzylic one undergoes SN2 with almost any nucleophile and SN1 in polar solvents, while the aryl one survives everything short of a benzyne or a metal. That contrast is exploited constantly in synthesis. Hot permanganate on the same starting material gives 4-bromobenzoic acid instead.",
      "options": {
        "A": "Correct. Radical bromination replaces one benzylic hydrogen; the ring bromine is unaffected, and the product is 4-bromobenzyl bromide.",
        "B": "2,4-Dibromotoluene is the product of electrophilic ring bromination (Br2, FeBr3), where the methyl and bromine both direct ortho/para; radical conditions do not substitute the ring.",
        "C": "1-Bromo-4-(dibromomethyl)benzene needs a second equivalent of NBS; with one equivalent the reaction stops at the monobromide.",
        "D": "4-Bromobenzoic acid is what hot permanganate would give; NBS is a brominating agent, not an oxidant of the side chain to an acid."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q51_elucidation_chloroacetophenone",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound P is the major product isolated when chlorobenzene is treated with acetyl chloride and $\\text{AlCl}_3$. Combustion analysis gives C 62.2%, H 4.6% and Cl 22.9% by mass. P gives an orange precipitate with 2,4-dinitrophenylhydrazine, does not react with Tollens' reagent, and gives no precipitate with ethanolic silver nitrate. IR: 3070, 1685 (strong), 1590, 1400, 1360 and $1265\\text{ cm}^{-1}$, and a strong band at $830\\text{ cm}^{-1}$; nothing at 750 or $690\\text{ cm}^{-1}$. Mass spectrum: $\\text{M}^+$ at $m/z = 154$ and 156 in a 3:1 ratio, base peaks at 139 and 141 (3:1), smaller peaks at 111/113 and 75. The $^1\\text{H}$ NMR spectrum is shown. Which structure is P?",
    "question_smiles": "",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 7.88,
          "y": 2,
          "label": "doublet"
        },
        {
          "x": 7.43,
          "y": 2,
          "label": "doublet"
        },
        {
          "x": 2.58,
          "y": 3,
          "label": "singlet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "4-Chloroacetophenone",
        "smiles": "CC(=O)c1ccc(Cl)cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Chloroacetophenone",
        "smiles": "CC(=O)c1ccccc1Cl",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-Chloroacetophenone",
        "smiles": "CC(=O)c1cccc(Cl)c1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Chloro-1-phenylethanone",
        "smiles": "ClCC(=O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The reaction that made the compound already says most of it: Friedel-Crafts acylation of chlorobenzene puts an acetyl group ortho or para to the halogen, and the bulky acylium ion chooses para. The spectra then confirm each piece independently: a 3:1 molecular-ion pair for one chlorine, a conjugated ketone at 1685 cm-1, a para-disubstituted ring from two doublets and the 830 band, and a methyl ketone from a 3H singlet at 2.58 ppm.",
      "approach": "Step 1: Formula. Per 100 g: C 62.2/12.01 = 5.18, H 4.6/1.008 = 4.56, Cl 22.9/35.45 = 0.646; oxygen by difference 10.3%, 10.3/16.00 = 0.644. Divide by 0.646: C 8, H 7, Cl 1, O 1. C8H7ClO, M = 154.6; the 154/156 pair at 3:1 is the 35Cl/37Cl signature. Unsaturation = (2 x 8 + 2 - 7 - 1)/2 = 5: a benzene ring and one more, the C=O.\nStep 2: The carbonyl. 2,4-DNP positive, Tollens negative: a ketone. IR 1685 rather than 1715: conjugated with the ring. No precipitate with AgNO3: the chlorine is on the ring, not on a benzylic carbon.\nStep 3: The ring pattern. Two 2H doublets at 7.88 (the pair next to the carbonyl, downfield) and 7.43, and one strong out-of-plane band at 830 with nothing at 750 or 690: 1,4-disubstituted.\nStep 4: The side chain: a 3H singlet at 2.58 is CH3 on a carbonyl. P is 4-chloroacetophenone. The base peak at 139/141 is loss of CH3 to give the chlorobenzoyl acylium ion, still carrying chlorine; 111/113 is the chlorophenyl cation after loss of CO.",
      "note": "The mass spectrum reads like the mechanism in reverse: the acylium ion that made the bond, Ar-C≡O+, is the ion the molecule falls back to when it loses its methyl. Phenacyl chloride, the isomer with chlorine on the side chain, would show a 2H singlet near 4.7 ppm, a 5H aromatic multiplet, the 750 and 690 bands of a monosubstituted ring, an unconjugated ketone near 1700, and an immediate precipitate with AgNO3; it is the answer to a different question.",
      "options": {
        "A": "Correct. C8H7ClO with one chlorine by the isotope pair, a conjugated methyl ketone, a para pattern of two doublets and an 830 band, and a base peak from loss of CH3 to the chlorobenzoyl acylium ion.",
        "B": "2-Chloroacetophenone is an ortho-disubstituted ring: four distinct aromatic hydrogens between 7.3 and 7.6 and a strong band near 750 cm-1, not two clean doublets and an 830 band; acylation of chlorobenzene also gives very little ortho product.",
        "C": "3-Chloroacetophenone is the meta isomer, which a halogen's ortho/para direction does not produce, and its ring shows four separate signals including a narrow singlet-like hydrogen between the substituents.",
        "D": "2-Chloro-1-phenylethanone has the same formula, but its CH2Cl appears as a 2H singlet near 4.7 ppm, its ring as a 5H multiplet with 750 and 690 bands, and its benzylic chlorine precipitates AgCl from ethanolic silver nitrate at once."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q52_elucidation_nitrotoluene",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound Q is one of the isomers formed when toluene is nitrated with $\\text{HNO}_3/\\text{H}_2\\text{SO}_4$; it is the crystalline isomer, separated from the mixture by cooling. Combustion analysis gives C 61.3%, H 5.1% and N 10.2% by mass. Q is insoluble in aqueous NaOH and in aqueous HCl, does not decolourise bromine in $\\text{CH}_2\\text{Cl}_2$ in the dark, and is reduced by Fe/HCl to a compound that dissolves in dilute acid. IR: 3080, 2925, 1600, 1520 (strong) and $1345\\text{ cm}^{-1}$ (strong), and a strong band at $840\\text{ cm}^{-1}$; nothing at 750 or $690\\text{ cm}^{-1}$, and nothing between 1650 and 1800. Mass spectrum: $\\text{M}^+$ at $m/z = 137$, a strong peak at 91, and peaks at 65 and 39. The $^1\\text{H}$ NMR spectrum is shown. Which structure is Q?",
    "question_smiles": "",
    "dynamic_spectroscopy": {
      "spec_type": "nmr",
      "data_points": [
        {
          "x": 8.1,
          "y": 2,
          "label": "doublet"
        },
        {
          "x": 7.3,
          "y": 2,
          "label": "doublet"
        },
        {
          "x": 2.45,
          "y": 3,
          "label": "singlet"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "4-Nitrotoluene",
        "smiles": "Cc1ccc([N+](=O)[O-])cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Nitrotoluene",
        "smiles": "Cc1ccccc1[N+](=O)[O-]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-Nitrotoluene",
        "smiles": "Cc1cccc([N+](=O)[O-])c1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(Nitromethyl)benzene",
        "smiles": "[O-][N+](=O)Cc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Nitration of toluene gives the ortho and para nitrotoluenes, about 63:34 with a trace of meta, and the para isomer, being symmetrical, is the one that crystallises. Its spectra carry three separate fingerprints: the two strong nitro stretches at 1520 and 1345 cm-1, a para-disubstituted ring from two doublets and the 840 band, and a methyl singlet at 2.45 ppm, together with a molecular ion at 137 that loses NO2 to give the tropylium-type ion at 91.",
      "approach": "Step 1: Formula. Per 100 g: C 61.3/12.01 = 5.10, H 5.1/1.008 = 5.06, N 10.2/14.01 = 0.728; oxygen by difference 23.4%, 23.4/16.00 = 1.46. Divide by 0.728: C 7, H 7, N 1, O 2: C7H7NO2, M = 137, matching M+. Unsaturation = (2 x 7 + 2 + 1 - 7)/2 = 5: a benzene ring plus the N=O of a nitro group.\nStep 2: The functional group. Strong bands at 1520 and 1345 are the asymmetric and symmetric NO2 stretches; no C=O, no O-H, no N-H. Reduction by Fe/HCl to an acid-soluble compound, an amine, confirms an aromatic nitro group.\nStep 3: The ring pattern. Two 2H doublets at 8.10 (ortho to the nitro group, strongly deshielded) and 7.30, with one strong band at 840 and nothing at 750 or 690: 1,4-disubstituted.\nStep 4: The remaining CH3 with a 3H singlet at 2.45 is a methyl on the ring. Q is 4-nitrotoluene. In the mass spectrum, loss of NO2 (46) from 137 gives C7H7+ at 91, which rearranges to tropylium and then loses acetylene to give 65.",
      "note": "The doublet at 8.10 ppm is the useful number: hydrogens ortho to a nitro group sit near 8.1 to 8.2, well beyond the 7.0 to 7.3 range of an alkylbenzene, so the nitro group's position on the ring can be read from which hydrogens are pushed downfield. (Nitromethyl)benzene, the isomer with the nitro group on the side chain, would show a 2H singlet near 5.4, a 5H aromatic multiplet, and the 750 and 690 bands of a monosubstituted ring.",
      "options": {
        "A": "Correct. C7H7NO2 with a nitro group by IR and by reduction to an amine, a para pattern of two doublets and an 840 band, a ring methyl singlet, and an M+ at 137 that loses NO2 to give m/z 91.",
        "B": "2-Nitrotoluene is the major isomer of the nitration but is a liquid, not the crystalline one, and its ortho-disubstituted ring shows four distinct aromatic hydrogens and a strong band near 750 cm-1.",
        "C": "3-Nitrotoluene is formed only in trace amounts, because a methyl group directs ortho and para, and its ring gives four separate aromatic signals, not two doublets.",
        "D": "(Nitromethyl)benzene has the nitro group on the side chain: a 2H singlet near 5.4 ppm for the CH2NO2, a 5H aromatic multiplet, and the 750 and 690 bands of a monosubstituted ring. Nitration of toluene never puts the nitro group on the methyl carbon."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q53_reactivity_ranking",
    "topic": "Substituent Effects",
    "difficulty_level": "Medium",
    "question_text": "Which of the following compounds reacts fastest with $\\text{Br}_2/\\text{FeBr}_3$?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Anisole",
        "smiles": "COc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Toluene",
        "smiles": "Cc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Chlorobenzene",
        "smiles": "Clc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Nitrobenzene",
        "smiles": "O=[N+]([O-])c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Rate in electrophilic aromatic substitution follows the electron density the substituent leaves in the ring, and more precisely how well it stabilises the arenium ion. A lone pair that can donate by resonance is the strongest activation, an alkyl group's induction and hyperconjugation a weak one, a halogen's induction a weak deactivation, and a nitro group's combined induction and resonance withdrawal a strong deactivation. Anisole, toluene, chlorobenzene, nitrobenzene is the order from fastest to slowest, spanning many powers of ten.",
      "approach": "Step 1: Anisole: OCH3 donates its oxygen lone pair into the ring; the ortho/para arenium ions gain an octet-complete oxonium contributor. Strongly activated: about 10,000 times benzene's rate in nitration, and bromination needs no Lewis acid at all.\nStep 2: Toluene: CH3 donates weakly by induction and hyperconjugation; about 25 times benzene's rate.\nStep 3: Chlorobenzene: inductive withdrawal outweighs weak lone-pair donation; about 30 times slower than benzene, though still ortho/para.\nStep 4: Nitrobenzene: strong withdrawal by both mechanisms; roughly a million times slower than benzene, needs heat and a Lewis acid, and substitutes meta. Fastest: anisole.",
      "note": "The relative nitration rates McMurry tabulates make the scale concrete: anisole 10,000, toluene 25, benzene 1, chlorobenzene 0.033, nitrobenzene 0.000006 or so, a range of over nine orders of magnitude for one reaction. That span is why an activated ring can be substituted selectively in the presence of a deactivated one, and why a strongly deactivated ring cannot be alkylated at all.",
      "options": {
        "A": "Correct. The methoxy group's lone-pair donation makes anisole by far the most reactive of the four; it brominates without a catalyst.",
        "B": "Toluene is activated, but only weakly, by induction and hyperconjugation; it is slower than anisole by a factor of several hundred.",
        "C": "Chlorobenzene is deactivated: the halogen's inductive withdrawal outweighs its weak resonance donation, and it reacts more slowly than benzene itself.",
        "D": "Nitrobenzene is the most deactivated ring of the four, by many orders of magnitude; it brominates only with heat and a Lewis acid, and then meta."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  }
];
