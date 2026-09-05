// OChemStudyBuddy - McMurry Chapter 29
// Author: A. Elangovan, PhD
var CH29_QUESTIONS = [
  {
    "question_id": "ch29_q_dynamic_metabolism_steps",
    "topic": "The Organic Chemistry of Metabolic Pathways",
    "difficulty_level": "Hard",
    "question_text": "Match each metabolic intermediate to the kind of organic reaction it undergoes in the next step of its pathway (glycolysis, pyruvate dehydrogenase, or the citric acid cycle). One reaction type in the list is not used by any of these four.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "O=P(O)(O)OCC(=O)[C@@H](O)[C@H](O)[C@H](O)COP(=O)(O)O",
        "correctAnswer": "Retro-aldol cleavage",
        "alt": "An open-chain six-carbon ketose with a phosphate on each end carbon and a ketone at C2; three stereocentres shown."
      },
      {
        "smiles": "OC[C@@H](OP(=O)(O)O)C(=O)O",
        "correctAnswer": "E1cB dehydration",
        "alt": "A three-carbon acid: CO2H, then a CH bearing a phosphate ester (a stereocentre), then a CH2OH."
      },
      {
        "smiles": "CC(=O)C(=O)O",
        "correctAnswer": "Oxidative decarboxylation through a thiamin diphosphate ylide adduct",
        "alt": "A three-carbon alpha-keto acid: a methyl, a ketone, and a CO2H."
      },
      {
        "smiles": "O=C(O)C[C@H](O)C(=O)O",
        "correctAnswer": "Alcohol oxidation by NAD+",
        "alt": "A four-carbon dicarboxylic acid with an OH on C2 (a stereocentre) and a CH2 between the two acid-bearing carbons."
      }
    ],
    "match_options": [
      "Retro-aldol cleavage",
      "E1cB dehydration",
      "Oxidative decarboxylation through a thiamin diphosphate ylide adduct",
      "Alcohol oxidation by NAD+",
      "Claisen condensation"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "At least one intermediate matched to the wrong reaction type",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Every step of metabolism is a laboratory reaction wearing an enzyme, and recognising which one is the skill this chapter teaches. A beta-hydroxy ketone is split by a retro-aldol; a beta-hydroxy carbonyl compound (or its phosphate) loses water by E1cB; an alpha-keto acid is decarboxylated after a thiamin diphosphate ylide adds to its ketone; a secondary alcohol is oxidised to a ketone by hydride transfer to NAD+. Reading the functional groups of the intermediate tells you what can happen to it next; the pathway tells you which of those options the cell chose.",
      "approach": "Step 1: Fructose 1,6-bisphosphate is a beta-hydroxy ketone (the C4 hydroxyl is beta to the C2 ketone): aldolase cleaves the C3-C4 bond in a retro-aldol to DHAP and glyceraldehyde 3-phosphate (glycolysis step 4).\nStep 2: 2-Phosphoglycerate has a leaving-group-bearing carbon beta to its carboxylate and an acidic alpha hydrogen: enolase removes that proton and the enolate expels the beta hydroxyl, an E1cB dehydration to phosphoenolpyruvate (step 9).\nStep 3: Pyruvate is an alpha-keto acid: the TPP ylide adds to its ketone and the adduct loses CO2 on the way to acetyl CoA (pyruvate dehydrogenase).\nStep 4: (S)-Malate is a secondary alcohol: malate dehydrogenase transfers its hydride to NAD+ to give oxaloacetate (citric acid cycle step 8). None of the four undergoes a Claisen condensation; that is how acetoacetyl CoA is made in the mevalonate pathway.",
      "note": "McMurry 29.5 (Catabolism of Carbohydrates: Glycolysis) gives step 4 as a retro-aldol cleavage catalysed by an aldolase (Figure 29.11) and step 9 as an E1cB dehydration of 2-phosphoglycerate catalysed by enolase; McMurry 29.6 (Conversion of Pyruvate to Acetyl CoA) gives the addition of thiamin diphosphate ylide to pyruvate and the decarboxylation of the adduct (Figure 29.13); McMurry 29.7 (The Citric Acid Cycle) gives the oxidation of (S)-malate by NAD+ in step 8. Problem 29-8 asks for the same catalogue of reaction types across glycolysis.",
      "options": {
        "A": "Correct. Beta-hydroxy ketone to retro-aldol, beta-phosphate carboxylate to E1cB, alpha-keto acid to TPP-mediated decarboxylation, secondary alcohol to NAD+ oxidation.",
        "B": "At least one row is wrong. Read each structure's functional groups: a beta-hydroxy ketone splits by retro-aldol; a carbon bearing a leaving group beta to a carbonyl loses it by E1cB; an alpha-keto acid is attacked by the TPP ylide before losing CO2; a secondary alcohol is oxidised by NAD+. The Claisen condensation, which needs two thioesters, fits none of them."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q1_atp_phosphoryl_transfer",
    "topic": "An Overview of Metabolism and Biochemical Energy",
    "difficulty_level": "Medium",
    "question_text": "ATP phosphorylates glucose at its C6 hydroxyl in the first step of glycolysis. In organic terms, what kind of reaction is that, and why is Mg2+ required?",
    "options": [
      {
        "option_id": "A",
        "text": "A nucleophilic substitution at phosphorus, the alcohol attacking the terminal phosphorus of a phosphoric anhydride and expelling ADP; Mg2+ complexes the phosphate oxygens, neutralising negative charge so the nucleophile can approach",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "An SN2 reaction at the C6 carbon of glucose, with ATP as the nucleophile",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A nucleophilic acyl substitution at the adenine carbonyl of ATP",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A radical hydrogen abstraction from the C6 hydroxyl; Mg2+ initiates the radical",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "ATP's three phosphates are joined by phosphoric anhydride links, the P-O-P counterparts of a carboxylic anhydride's C-O-C. An anhydride reacts with an alcohol by breaking the bond to the leaving group and forming an ester, and the phosphoric anhydride does the same at phosphorus: the alcohol's oxygen attacks the terminal (gamma) phosphorus, a P-O bond to the rest of the molecule breaks, and the products are a phosphate ester of the alcohol plus ADP. The text calls it, in effect, a nucleophilic acyl substitution at phosphorus. Every phosphate carries negative charge, so a divalent cation, usually Mg2+, is bound in the enzyme to complex the oxygens as a Lewis acid and let the neutral alcohol attack.",
      "approach": "Step 1: Identify the electrophile: the terminal phosphorus of ATP, part of a phosphoric anhydride.\nStep 2: Identify the nucleophile: the glucose C6 hydroxyl oxygen (made more nucleophilic by an enzyme base).\nStep 3: Bond changes: O(glucose)-P forms, P-O(ADP) breaks; the products are glucose 6-phosphate and ADP.\nStep 4: Mg2+ sits on the phosphate oxygens, cancelling charge and polarising P=O, the way a Lewis acid activates a carbonyl.",
      "note": "McMurry 29.1 (An Overview of Metabolism and Biochemical Energy) states that ADP and ATP are phosphoric acid anhydrides, that just as carboxylic acid anhydrides react with alcohols by breaking a C-O bond to give an ester, phosphoric acid anhydrides react with alcohols by breaking a P-O bond to give a phosphate ester ROPO3 2-, in effect a nucleophilic acyl substitution at phosphorus, and that phosphorylation reactions with ATP generally require a divalent metal cation, usually Mg2+, to form a Lewis acid-base complex with the phosphate oxygens and neutralise negative charge. Hexokinase's Mg2+ requirement is repeated in McMurry 29.5.",
      "options": {
        "A": "Correct. The alcohol substitutes at the anhydride phosphorus of ATP, ADP leaves, and Mg2+ neutralises the phosphate charges.",
        "B": "The C-O bond of glucose stays intact; it is the P-O anhydride bond of ATP that breaks. ATP is the electrophile here, not a nucleophile, and there is no substitution at carbon.",
        "C": "The adenine base has no carbonyl and takes no part in the transfer. The reactive site is the phosphoric anhydride, and the substitution happens at phosphorus.",
        "D": "Phosphoryl transfer is polar, not radical; the electrons move as in an acyl substitution. Mg2+ is a Lewis acid for the phosphate oxygens, not a radical initiator."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q2_coupled_reactions",
    "topic": "An Overview of Metabolism and Biochemical Energy",
    "difficulty_level": "Medium",
    "question_text": "Phosphorylation of glucose by inorganic phosphate has delta G°' = +13.8 kJ/mol, and hydrolysis of ATP to ADP has delta G°' = -30.5 kJ/mol. What happens when the two are coupled through ATP, and what is the overall delta G°'?",
    "options": [
      {
        "option_id": "A",
        "text": "Glucose is phosphorylated by ATP directly, giving glucose 6-phosphate and ADP with delta G°' = -16.7 kJ/mol, so the unfavourable phosphorylation is driven by the favourable ATP reaction",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The two reactions cancel to delta G°' = 0 and the system sits at equilibrium",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "ATP is hydrolysed first to release heat, and the heat then drives the phosphorylation; delta G°' = -30.5 kJ/mol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Nothing changes; delta G°' values cannot be added",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Free energies of reactions that share a common intermediate add. Glucose plus phosphate alone will not form glucose 6-phosphate (positive delta G°'), but if the phosphate comes from ATP the overall process is glucose + ATP giving glucose 6-phosphate + ADP, and its delta G°' is the sum, 13.8 + (-30.5) = -16.7 kJ/mol, favourable. Coupling is not heat transfer: the two reactions are linked chemically, because the phosphoryl group passes directly from ATP to glucose in one enzyme-catalysed step. This is the sense in which ATP is the cell's energy currency: catabolism makes it, and anabolic steps spend it by transferring its phosphate.",
      "approach": "Step 1: Write the unfavourable reaction: glucose + HOPO3 2- to glucose 6-phosphate + H2O, +13.8 kJ/mol.\nStep 2: Write the favourable one: ATP + H2O to ADP + HOPO3 2-, -30.5 kJ/mol.\nStep 3: Add them; water and phosphate cancel: glucose + ATP to glucose 6-phosphate + ADP, +13.8 - 30.5 = -16.7 kJ/mol (4.0 kcal/mol).\nStep 4: Because delta G°' is negative the coupled reaction proceeds; hexokinase carries it out as a single phosphoryl transfer, not as hydrolysis followed by phosphorylation.",
      "note": "McMurry 29.1 (An Overview of Metabolism and Biochemical Energy) explains coupling through a common intermediate and works this exact example: the reaction of glucose with HOPO3 2- does not occur because delta G°' = 13.8 kJ/mol, the reaction of water with ATP is strongly favourable at -30.5 kJ/mol, and when coupled, glucose reacts with ATP to give glucose 6-phosphate plus ADP in a reaction favourable by about 16.7 kJ/mol (4.0 kcal/mol), ATP driving the phosphorylation; delta G°' is defined there as the standard free-energy change at 1.0 M and pH 7. Free energy and spontaneity are McMurry 6.7.",
      "options": {
        "A": "Correct. The phosphoryl group passes from ATP to glucose in one step, and the summed delta G°' of -16.7 kJ/mol makes the coupled reaction favourable.",
        "B": "The values are not equal and opposite; their sum is -16.7 kJ/mol, well on the favourable side, not zero.",
        "C": "Heat released by a separate hydrolysis cannot be captured to drive another reaction in solution; coupling works because the phosphate is transferred directly. And the overall value is the sum, -16.7, not -30.5 kJ/mol.",
        "D": "Free energy is a state function, so delta G°' values of reactions that add to give an overall reaction add as well. That additivity is the whole basis of coupling."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q3_lipase_triad",
    "topic": "Catabolism of Triacylglycerols: The Fate of Glycerol",
    "difficulty_level": "Hard",
    "question_text": "A lipase hydrolyses a triacylglycerol using a catalytic triad of aspartate, histidine and serine. How does the enzyme carry out the hydrolysis?",
    "options": [
      {
        "option_id": "A",
        "text": "Two nucleophilic acyl substitutions: the serine alkoxide, made by histidine deprotonation with aspartate assisting, attacks an ester carbonyl and expels the diacylglycerol to give an acyl enzyme; hydroxide generated the same way then attacks the acyl enzyme and releases the fatty acid",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "One SN2 reaction in which histidine displaces the acyloxy group from the glycerol carbon",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Homolysis of the ester C-O bond initiated by the aspartate radical",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Direct attack of water on the ester, with the three residues serving only to bind the substrate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Ester hydrolysis in the laboratory is nucleophilic acyl substitution, and the lipase does it twice with an intermediate covalently bound to the enzyme. The serine hydroxyl is a poor nucleophile until histidine removes its proton; the aspartate carboxylate next to the histidine makes it a better base and stabilises the histidinium ion that results. The serine alkoxide adds to a carbonyl of the fat to give a tetrahedral intermediate, which expels the diacylglycerol alkoxide (protonated by histidine as it leaves), forming an acyl-serine ester, the acyl enzyme. In the second half, histidine deprotonates water, the hydroxide adds to the acyl enzyme, and the tetrahedral intermediate expels serine, freeing the fatty acid and the enzyme. Chymotrypsin and other serine proteases use the identical triad on amides.",
      "approach": "Step 1: Activate the nucleophile: His takes the Ser O-H proton, Asp's carboxylate hydrogen-bonds the His to make that possible.\nStep 2: First acyl substitution: Ser-O- adds to the ester C=O; the tetrahedral intermediate collapses, expelling the glycerol oxygen (protonated by His-H+): acyl enzyme + diacylglycerol.\nStep 3: Second acyl substitution: His deprotonates water; HO- adds to the acyl enzyme; the tetrahedral intermediate expels Ser-O-, which His-H+ reprotonates.\nStep 4: Products: the free fatty acid and the regenerated enzyme; two more rounds release the other two acids and glycerol.",
      "note": "McMurry 29.2 (Catabolism of Triacylglycerols: The Fate of Glycerol), Figure 29.3, gives the lipase mechanism: a catalytic triad of aspartic acid, histidine and serine acting cooperatively, hydrolysis accomplished by two sequential nucleophilic acyl substitution reactions, the first binding an acyl group to the serine side-chain OH (deprotonated by histidine, facilitated by the aspartate carboxylate, the diacylglycerol expelled as a neutral alcohol by proton transfer from histidine) and the second hydrolysing the acyl enzyme with histidine-generated hydroxide. The catalytic triad chemistry is the same as in the serine proteases of McMurry 26.10.",
      "options": {
        "A": "Correct. Serine, activated by histidine and aspartate, forms an acyl enzyme in one acyl substitution, and water cleaves it in a second.",
        "B": "The bond that breaks is the acyl C-O bond of the ester, at the carbonyl carbon, not the C-O bond at the glycerol carbon; and histidine is a base in this mechanism, not the nucleophile that ends up acylated. Serine is.",
        "C": "Ester hydrolysis is polar throughout; no radicals form and aspartate acts as a carboxylate base, not a radical. The intermediates are tetrahedral alkoxides.",
        "D": "Water does attack, but only in the second half and only after the acyl group has been transferred to serine; the triad provides the nucleophile and the acid-base catalysis, not merely binding."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q4_glycerol_fate",
    "topic": "Catabolism of Triacylglycerols: The Fate of Glycerol",
    "difficulty_level": "Medium",
    "question_text": "In the liver, the glycerol released from fat hydrolysis is converted in two steps into an intermediate of glycolysis. What are the steps and the product?",
    "options": [
      {
        "option_id": "A",
        "text": "Phosphorylation of one primary hydroxyl by ATP (the pro-R arm, giving sn-glycerol 3-phosphate), then oxidation of the secondary alcohol by NAD+ to dihydroxyacetone phosphate",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Oxidation of one primary hydroxyl to an aldehyde, then phosphorylation, giving glyceraldehyde 3-phosphate directly",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dehydration to acrolein, then hydration and phosphorylation",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Phosphorylation of the secondary hydroxyl, then decarboxylation to pyruvate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Glycerol has three hydroxyls, two primary and one secondary, and C2 is prochiral: its two CH2OH arms are enantiotopic. Glycerol kinase phosphorylates one of them, the pro-R arm, with ATP, giving a single enantiomer named sn-glycerol 3-phosphate under the stereospecific numbering convention. Glycerol 3-phosphate dehydrogenase then oxidises the remaining secondary alcohol at C2 to a ketone with NAD+, giving dihydroxyacetone phosphate. DHAP is an intermediate of glycolysis (it is one of the two halves of fructose 1,6-bisphosphate), so the glycerol carbons join the glucose pathway and, via triose phosphate isomerase, become glyceraldehyde 3-phosphate and eventually pyruvate.",
      "approach": "Step 1: Phosphorylation: glycerol + ATP, on a primary OH, selectively the pro-R arm: sn-glycerol 3-phosphate (an R stereocentre at C2).\nStep 2: Oxidation: NAD+ takes a hydride from C2, the secondary carbinol carbon, giving the ketone: dihydroxyacetone phosphate, which is achiral.\nStep 3: Entry point: DHAP is the product of glycolysis step 4 and the substrate of step 5.\nStep 4: Neither step involves the aldehyde level at C1 or C3; the primary hydroxyls stay as CH2OH and CH2OPO3 2-.",
      "note": "McMurry 29.2 (Catabolism of Triacylglycerols: The Fate of Glycerol) states that glycerol is carried to the liver, first phosphorylated by reaction with ATP and then oxidised by NAD+, that the resulting dihydroxyacetone phosphate enters the glycolysis pathway, that C2 of glycerol is a prochiral centre whose pro-R arm alone is phosphorylated, and that the product is named sn-glycerol 3-phosphate under stereospecific numbering; Problem 29-1 asks for the phosphorylation. Prochirality is McMurry 5.11; the alcohol oxidation by NAD+ is the same chemistry as step 3 of beta-oxidation (29.3).",
      "options": {
        "A": "Correct. Kinase then dehydrogenase: a primary hydroxyl is phosphorylated and the secondary one oxidised, giving DHAP for glycolysis.",
        "B": "No aldehyde is formed from glycerol; the secondary alcohol is what NAD+ oxidises, giving a ketone. Glyceraldehyde 3-phosphate arises afterwards, from DHAP by triose phosphate isomerase.",
        "C": "Glycerol does not dehydrate under physiological conditions (acrolein forms only on strong heating), and no such route feeds glycolysis. The two steps are phosphorylation and oxidation.",
        "D": "Phosphorylation goes on a primary hydroxyl, and glycerol has no carboxyl group to lose as CO2. Pyruvate is reached only after glycolysis processes the DHAP."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q5_beta_oxidation_steps",
    "topic": "Catabolism of Triacylglycerols: beta-Oxidation",
    "difficulty_level": "Medium",
    "question_text": "Each passage of the beta-oxidation pathway removes a two-carbon acetyl group from a fatty acyl CoA. In order, what are its four steps?",
    "options": [
      {
        "option_id": "A",
        "text": "Dehydrogenation by FAD to the trans alpha,beta-unsaturated acyl CoA; conjugate addition of water to the beta-hydroxyacyl CoA; oxidation of the alcohol by NAD+ to the beta-ketoacyl CoA; retro-Claisen cleavage by coenzyme A to acetyl CoA and a shortened acyl CoA",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Hydrolysis of the thioester; oxidation of the acid; decarboxylation; re-esterification with CoA",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Reduction by NADPH; dehydration; Claisen condensation with malonyl CoA; hydrolysis",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Oxidation of the alcohol by NAD+; conjugate addition of water; dehydrogenation by FAD; retro-aldol cleavage",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Beta-oxidation is named for what it does: it oxidises the beta carbon of a fatty acyl CoA from CH2 to C=O so that the C2-C3 bond can be broken by a retro-Claisen reaction. Getting a ketone at the beta position takes three steps of ordinary functional-group chemistry: introduce a double bond between the alpha and beta carbons (FAD, giving the trans enoyl CoA), add water across it Michael-fashion so the hydroxyl lands on the beta carbon, and oxidise that secondary alcohol to the ketone (NAD+). The beta-keto thioester is then split: a cysteine thiol adds to the ketone, the C2-C3 bond breaks to release acetyl CoA's enolate, and coenzyme A takes the acyl group off the enzyme. The chain, now two carbons shorter, goes round again.",
      "approach": "Step 1: Acyl-CoA dehydrogenase, FAD: R-CH2-CH2-CO-SCoA to R-CH=CH-CO-SCoA (trans), FADH2 formed.\nStep 2: Enoyl-CoA hydratase: water adds to the beta carbon of the conjugated system, R-CH(OH)-CH2-CO-SCoA (the L isomer).\nStep 3: 3-Hydroxyacyl-CoA dehydrogenase, NAD+: R-CO-CH2-CO-SCoA, NADH formed.\nStep 4: Thiolase: retro-Claisen with a cysteine SH, giving CH3-CO-SCoA and R-CO-SCoA; the acyl CoA re-enters at step 1.",
      "note": "McMurry 29.3 (Catabolism of Triacylglycerols: beta-Oxidation), Figure 29.4, gives the four steps: introduction of a conjugated double bond by an acyl-CoA dehydrogenase with FAD (the pro-R hydrogens removed, a trans double bond formed); conjugate addition of water by enoyl-CoA hydratase (19.13); alcohol oxidation by an L-3-hydroxyacyl-CoA dehydrogenase with NAD+; and chain cleavage by beta-ketoacyl-CoA thiolase, the reverse of a Claisen condensation (23.7), through a cysteine adduct. The key chain-shortening step is the retro-Claisen reaction of the beta-keto thioester.",
      "options": {
        "A": "Correct. Dehydrogenate, hydrate, oxidise, cleave: the beta carbon is taken to a ketone and the beta-keto thioester is split by a retro-Claisen.",
        "B": "The thioester is never hydrolysed during the passages; the acyl group stays on CoA throughout, and no decarboxylation occurs. Carbon leaves as acetyl CoA, two at a time.",
        "C": "Reduction by NADPH, dehydration and condensation with malonyl CoA are fatty acid synthesis run forward, not degradation. Beta-oxidation is oxidative and uses FAD and NAD+.",
        "D": "The order is wrong: there is no alcohol to oxidise until water has added, and water cannot add until the double bond is there. And the cleavage is a retro-Claisen of a beta-keto thioester, not a retro-aldol."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q6_palmitate_count",
    "topic": "Catabolism of Triacylglycerols: beta-Oxidation",
    "difficulty_level": "Medium",
    "question_text": "How many molecules of acetyl CoA does complete beta-oxidation of palmitic acid (C16) produce, and how many passages of the pathway are needed?",
    "options": [
      {
        "option_id": "A",
        "text": "8 acetyl CoA in 7 passages",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "8 acetyl CoA in 8 passages",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "16 acetyl CoA in 16 passages",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "7 acetyl CoA in 7 passages",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Each passage of beta-oxidation clips one two-carbon acetyl group from the carboxyl end, so a chain of 2n carbons gives n acetyl CoA. The count of passages is one fewer, because the final passage starts from a four-carbon acyl CoA (butyryl CoA) and its retro-Claisen produces two acetyl CoA at once: there is nothing left to go round again. The text's example, myristic acid (C14), gives seven acetyl CoA in six passages. Odd-numbered chains end with a three-carbon propionyl CoA instead, which is routed to succinate.",
      "approach": "Step 1: Palmitic acid has 16 carbons; 16 divided by 2 is 8 acetyl units.\nStep 2: Passages: each removes one acetyl CoA until the last, which splits butyryl CoA into two. So 8 minus 1 = 7 passages.\nStep 3: Check with the text's C14 case: 7 acetyl CoA, 6 passages, the same rule.\nStep 4: Arachidic acid (C20) by the same logic gives 10 acetyl CoA in 9 passages.",
      "note": "McMurry 29.3 (Catabolism of Triacylglycerols: beta-Oxidation) works the catabolism of the 14-carbon myristic acid in Figure 29.5, seven molecules of acetyl CoA after six passages, noting that the final passage produces two molecules of acetyl CoA because the precursor has four carbons, and that fatty acids with an odd number of carbons yield propionyl CoA in the final passage, which is converted to succinate. Problem 29-3 asks the count for palmitic and arachidic acids.",
      "options": {
        "A": "Correct. Sixteen carbons make eight acetyl units, and because the last four-carbon fragment gives two acetyl CoA in one passage, seven passages suffice.",
        "B": "The last passage yields two acetyl CoA from butyryl CoA, so the number of passages is one less than the number of acetyl groups: seven, not eight.",
        "C": "Each acetyl CoA carries two carbons, so sixteen carbons give eight, not sixteen; and passages remove one acetyl each (two in the last).",
        "D": "Seven passages is right, but they release eight acetyl CoA, because the seventh passage cleaves butyryl CoA into two."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q7_thiolase_retro_claisen",
    "topic": "Catabolism of Triacylglycerols: beta-Oxidation",
    "difficulty_level": "Hard",
    "question_text": "The chain-shortening step of beta-oxidation, catalysed by thiolase, converts a beta-ketoacyl CoA into acetyl CoA and an acyl CoA two carbons shorter. What is the mechanism?",
    "options": [
      {
        "option_id": "A",
        "text": "A retro-Claisen reaction: an enzyme cysteine thiolate adds to the beta ketone, the tetrahedral alkoxide expels the acetyl CoA enolate by breaking the C2-C3 bond, and coenzyme A then displaces the acyl group from the enzyme by nucleophilic acyl substitution",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A retro-aldol reaction: hydroxide adds to the thioester and the C2-C3 bond breaks to give an enol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Hydrolysis of the beta-keto thioester followed by decarboxylation of the beta-keto acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Homolytic cleavage of the C2-C3 bond initiated by FAD",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Claisen condensation joins an ester enolate to another ester's carbonyl and expels an alkoxide, making a beta-keto ester. Run backwards, a beta-keto ester (or thioester) is cleaved by a nucleophile: the nucleophile adds to the ketone carbonyl, and the tetrahedral intermediate breaks the bond between the alpha and beta carbons, expelling the ester enolate, which is a good leaving group because it is stabilised. Thiolase uses a cysteine thiolate as that nucleophile, so the cleavage leaves the shortened acyl group as a thioester on the enzyme and releases the acetyl CoA enolate, which is protonated to acetyl CoA. Coenzyme A then takes the acyl group off the cysteine in an ordinary transthioesterification, giving the shortened acyl CoA and the free enzyme.",
      "approach": "Step 1: Cys-S- adds to the C3 ketone of the beta-ketoacyl CoA: a tetrahedral alkoxide with S, O-, R and CH2-CO-SCoA on C3.\nStep 2: The alkoxide re-forms the C=O and the C3-C2 bond breaks; the leaving group is the enolate of acetyl CoA, CH2=C(O-)SCoA, at once protonated.\nStep 3: The enzyme now holds R-CO-S-Cys; CoA-SH attacks that thioester carbonyl and the cysteine thiolate leaves: R-CO-SCoA.\nStep 4: The two products are acetyl CoA (to the citric acid cycle) and an acyl CoA two carbons shorter (back to step 1 of beta-oxidation).",
      "note": "McMurry 29.3 (Catabolism of Triacylglycerols: beta-Oxidation) states that the chain cleavage catalysed by beta-ketoacyl-CoA thiolase is mechanistically the reverse of a Claisen condensation (23.7): nucleophilic addition of a cysteine SH group on the enzyme to the keto group of the beta-ketoacyl CoA gives an alkoxide intermediate, cleavage of the C2-C3 bond follows with expulsion of an acetyl CoA enolate ion that is immediately protonated, and the enzyme-bound acyl group then undergoes nucleophilic acyl substitution with coenzyme A. In fatty acid synthesis the same Claisen runs forward (29.4).",
      "options": {
        "A": "Correct. Thiolate addition to the ketone, C2-C3 cleavage with the acetyl CoA enolate leaving, then acyl transfer from cysteine to CoA: a retro-Claisen.",
        "B": "A retro-aldol splits a beta-hydroxy carbonyl compound; here the substrate is a beta-keto thioester and the fragment released is an enolate, which is retro-Claisen chemistry. Hydroxide is not the nucleophile and the CoA thioester is not what is attacked first.",
        "C": "The thioester is not hydrolysed and no CO2 is lost; both carbons of the cleaved fragment end up in acetyl CoA. Decarboxylation of a beta-keto acid would waste one of them.",
        "D": "FAD works in step 1, the dehydrogenation, and the cleavage is a polar, two-electron process through a tetrahedral intermediate. No radicals are involved."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q8_enoyl_hydratase",
    "topic": "Catabolism of Triacylglycerols: beta-Oxidation",
    "difficulty_level": "Medium",
    "question_text": "The first step of beta-oxidation gives an alpha,beta-unsaturated acyl CoA, and the second adds water to it. What is the geometry of the alkene, and how does the water add?",
    "options": [
      {
        "option_id": "A",
        "text": "The double bond is trans (E); water adds by conjugate (Michael-type) nucleophilic addition, the oxygen bonding to the beta carbon through a thioester enolate that is protonated at the alpha carbon",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The double bond is cis (Z); water adds Markovnikov to the alpha carbon, which is more substituted",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The double bond is trans; water adds by acid-catalysed electrophilic addition through a carbocation at the beta carbon",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The double bond is cis; water adds anti-Markovnikov by hydroboration",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Acyl-CoA dehydrogenase removes the pro-R hydrogens from C2 and C3 and gives the trans (E) enoyl CoA, a thioester conjugated with a C=C. A conjugated carbonyl compound reacts with nucleophiles at its beta carbon, because the negative charge that develops is delocalised onto the carbonyl oxygen as an enolate; that is conjugate, or 1,4-, addition. Enoyl-CoA hydratase delivers water exactly this way: the oxygen bonds to C3, the thioester enolate forms, and protonation at C2 gives the 3-hydroxyacyl CoA, with the L (S) configuration the next enzyme requires. The regiochemistry is fixed by conjugation, not by Markovnikov's rule, and no carbocation is involved.",
      "approach": "Step 1: Product of step 1: R-CH=CH-CO-SCoA with E geometry, the alkene conjugated to the thioester carbonyl.\nStep 2: Water (its oxygen made nucleophilic by an active-site base) attacks C3, the beta carbon; the electrons move into the carbonyl to give the enolate.\nStep 3: The enolate is protonated at C2 (an acidic residue), giving R-CH(OH)-CH2-CO-SCoA.\nStep 4: The enzyme sets the stereochemistry: the L-3-hydroxyacyl CoA, which the NAD+-dependent dehydrogenase of step 3 accepts.",
      "note": "McMurry 29.3 (Catabolism of Triacylglycerols: beta-Oxidation) states that the alpha,beta-unsaturated acyl CoA from step 1 has a trans double bond, and that in step 2 it reacts with water by a conjugate addition pathway (19.13) catalysed by enoyl CoA hydratase, water as nucleophile adding to the beta carbon of the double bond to yield an intermediate thioester enolate ion that is protonated on the alpha position, giving the beta-hydroxyacyl CoA; step 3 then uses an L-3-hydroxyacyl-CoA dehydrogenase. Conjugate addition to alpha,beta-unsaturated carbonyls is McMurry 19.13.",
      "options": {
        "A": "Correct. The E enoyl thioester takes water at its beta carbon by conjugate addition through the enolate, giving the beta-hydroxy thioester.",
        "B": "The dehydrogenase gives the trans alkene, and Markovnikov's rule does not govern additions to conjugated carbonyls; the nucleophile goes to the beta carbon because that puts the charge on oxygen.",
        "C": "There is no carbocation: a cation at the beta carbon would sit next to an electron-withdrawing carbonyl and is not formed. The addition is nucleophilic and the intermediate is an enolate anion.",
        "D": "Hydroboration is a laboratory reagent and gives the opposite regiochemistry for an isolated alkene; here the OH lands on the beta carbon because of conjugation. The alkene is also trans, not cis."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q9_even_carbons",
    "topic": "Biosynthesis of Fatty Acids",
    "difficulty_level": "Easy",
    "question_text": "Nearly all natural fatty acids have an even number of carbon atoms. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "They are built from acetyl CoA by adding two-carbon units to the chain one at a time",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Odd-numbered chains are unstable and decarboxylate spontaneously",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "They are made by dimerising shorter even-numbered chains tail to tail",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Beta-oxidation removes any odd carbon at the end of the chain",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The carbon count of a fatty acid is a fossil of its synthesis. The chain grows from a two-carbon acetyl group by repeated Claisen-type condensations, each of which adds the two carbons of a malonyl unit (the third carbon of malonyl leaving as CO2). Starting from two carbons and adding two at a time can only give even numbers: 4, 6, 8, up to the 16-carbon palmitate that the synthase releases. Because the acetyl CoA itself comes largely from glycolysis, excess dietary carbohydrate is stored as even-numbered fat. Odd-numbered fatty acids exist in small amounts where a propionyl primer is used, and they are degraded to propionyl CoA plus acetyl CoA.",
      "approach": "Step 1: Starting unit: acetyl (C2), transferred to the synthase.\nStep 2: Extending unit: malonyl ACP (C3), which loses CO2 as it condenses, so each round adds exactly two carbons.\nStep 3: After n rounds the chain has 2 + 2n carbons, always even; seven rounds give C16.\nStep 4: Degradation mirrors this: beta-oxidation removes two carbons per passage, so even chains give only acetyl CoA.",
      "note": "McMurry 29.4 (Biosynthesis of Fatty Acids) opens with this: one of the most striking features of the common fatty acids is that they have an even number of carbon atoms, which occurs because all fatty acids are derived biosynthetically from acetyl CoA by sequential addition of two-carbon units to a growing chain; the acetyl CoA arises largely from glycolysis, so dietary carbohydrate consumed in excess is turned into fat. The net effect of the eight steps is to combine two acetyl groups into a butyryl group, and repetition adds two carbons at a time up to palmitoyl ACP.",
      "options": {
        "A": "Correct. Two-carbon acetyl units, added two carbons at a time, can only produce even-numbered chains.",
        "B": "Odd-numbered fatty acids are perfectly stable and do occur (in some bacteria and ruminant fats); they are simply rare because the synthase adds two carbons per round from an acetyl start.",
        "C": "Fatty acids grow linearly by successive two-carbon additions, not by joining two chains; tail-to-tail dimerisation is how squalene (C30) is made from two C15 units in terpenoid biosynthesis, a different pathway.",
        "D": "Beta-oxidation is degradation, not synthesis, and it does not trim odd carbons: an odd-numbered chain simply ends its last passage as propionyl CoA. The even count is set when the chain is built."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q10_acetyl_coa_carboxylase",
    "topic": "Biosynthesis of Fatty Acids",
    "difficulty_level": "Medium",
    "question_text": "Fatty acid synthesis requires malonyl CoA, made from acetyl CoA by acetyl CoA carboxylase. What does the reaction need, and how does the carbon dioxide get onto acetyl CoA?",
    "options": [
      {
        "option_id": "A",
        "text": "Bicarbonate, ATP and the coenzyme biotin: ATP activates bicarbonate so biotin can be carboxylated to N-carboxybiotin, which releases CO2 to the enolate of acetyl CoA, giving malonyl CoA",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Gaseous CO2 adds directly to the acetyl CoA carbonyl, with no coenzyme",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Thiamin diphosphate carries the carboxyl group from pyruvate to acetyl CoA",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Oxaloacetate transfers CO2 to acetyl CoA in a Claisen condensation",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Carboxylating an enolate with CO2 is the biological version of what a Grignard reagent does with dry ice, and it needs the CO2 delivered at the right place. Biotin, bonded through a lysine side chain to the carboxylase, is the carrier: bicarbonate is activated by ATP (as carboxyphosphate) and carboxylates biotin's ring nitrogen to give N-carboxybiotin. A basic residue removes an alpha proton from acetyl CoA to make its thioester enolate, and as the N-carboxybiotin releases CO2 (helped by hydrogen bonding to an acidic site) the enolate captures it. The product, malonyl CoA, carries the extra carboxyl that will be lost again in the condensation step, where its departure drives the carbon-carbon bond formation.",
      "approach": "Step 1: Activation: HCO3- + ATP gives a carboxyphosphate that carboxylates biotin's N1: N-carboxybiotin.\nStep 2: Enolate formation: a base removes a CH3 proton of acetyl CoA (alpha to the thioester carbonyl).\nStep 3: Transfer: N-carboxybiotin loses CO2, which the enolate attacks at carbon: -O2C-CH2-CO-SCoA, malonyl CoA.\nStep 4: Malonyl CoA is transferred to ACP for the condensation with the enzyme-bound acetyl group.",
      "note": "McMurry 29.4 (Biosynthesis of Fatty Acids), step 3 of Figure 29.6 and Figure 29.7, states that acetyl CoA is carboxylated by reaction with HCO3- and ATP to yield malonyl CoA plus ADP, that the step requires the coenzyme biotin bonded to a lysine residue of acetyl CoA carboxylase, which acts as a carrier of CO2, binding it in one step and releasing it in another, that biotin first reacts with bicarbonate to give N-carboxybiotin, and that the transfer is thought to involve CO2 as the reactive species, captured by the thioester enolate of acetyl CoA as it forms. The same biotin chemistry carboxylates pyruvate in gluconeogenesis (29.8).",
      "options": {
        "A": "Correct. ATP, bicarbonate and biotin: N-carboxybiotin delivers CO2 to the acetyl CoA enolate, giving malonyl CoA.",
        "B": "Free CO2 at cellular concentrations is far too dilute and unactivated to carboxylate acetyl CoA usefully; the carboxylase uses ATP to activate bicarbonate and biotin to carry the CO2 to the enolate.",
        "C": "Thiamin diphosphate is the coenzyme for decarboxylating alpha-keto acids (pyruvate dehydrogenase); it removes CO2, it does not deliver it, and pyruvate is not the carbon source here.",
        "D": "Oxaloacetate reacts with acetyl CoA in the citric acid cycle by an aldol addition to give citrate, not by carboxyl transfer. Malonyl CoA's third carbon comes from bicarbonate via biotin."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q11_decarboxylative_claisen",
    "topic": "Biosynthesis of Fatty Acids",
    "difficulty_level": "Hard",
    "question_text": "The carbon-carbon bond-forming step of fatty acid synthesis condenses malonyl ACP with an acetyl group bound to the synthase. Why is malonyl ACP used as the nucleophile rather than a second acetyl unit, and what happens in the step?",
    "options": [
      {
        "option_id": "A",
        "text": "Malonyl ACP decarboxylates to give a thioester enolate, and the loss of CO2 both generates the nucleophile without a strong base and drives the reaction; the enolate adds to the acetyl thioester carbonyl in a Claisen condensation, giving acetoacetyl ACP",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Malonyl ACP is a better electrophile than acetyl CoA because it has two carbonyls, and the acetyl enolate attacks it",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The malonyl carboxylate attacks the acetyl carbonyl to form an anhydride that rearranges",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Malonyl ACP is reduced by NADPH to an enol that adds to acetyl ACP",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Claisen condensation between two simple thioesters is close to thermoneutral and would need a strong base to make the enolate, which cells do not have. The malonyl trick solves both problems. Malonyl ACP is a beta-dicarbonyl (a thioester with a carboxylate on its alpha carbon), and losing CO2 from it generates the thioester enolate directly, with no base required and with the entropy of gas release pushing the step forward. That enolate immediately attacks the carbonyl of the acetyl group held on a synthase cysteine, the tetrahedral intermediate expels the cysteine thiolate, and the product is the four-carbon acetoacetyl ACP. Every later extension does the same with the growing acyl group in place of acetyl, which is why the extra carbon of malonyl never appears in the product.",
      "approach": "Step 1: Malonyl ACP, -O2C-CH2-CO-S-ACP, loses CO2; the electrons left behind form the enolate CH2=C(O-)-S-ACP.\nStep 2: The enolate carbon adds to the carbonyl of CH3-CO-S-Cys(synthase): a tetrahedral alkoxide.\nStep 3: The alkoxide collapses, expelling Cys-S- (the leaving group of a thioester): CH3-CO-CH2-CO-S-ACP, acetoacetyl ACP.\nStep 4: Net: two carbons from acetyl plus two from malonyl (one lost as CO2) make a four-carbon beta-keto thioester, ready for reduction, dehydration and reduction.",
      "note": "McMurry 29.4 (Biosynthesis of Fatty Acids), step 5 of Figure 29.6, states that the key carbon-carbon bond-forming reaction is a Claisen condensation between acetyl synthase as the electrophilic acceptor and malonyl ACP as the nucleophilic donor, thought to involve decarboxylation of malonyl ACP to give an enolate ion followed by immediate nucleophilic addition of the enolate to the carbonyl group of acetyl synthase, breakdown of the tetrahedral intermediate then giving acetoacetyl ACP and freeing the synthase binding site. The laboratory Claisen condensation is McMurry 23.7; the malonic ester decarboxylation McMurry 22.7.",
      "options": {
        "A": "Correct. Decarboxylation makes the enolate and provides the driving force; the enolate then does an ordinary Claisen addition to the acetyl thioester.",
        "B": "The roles are reversed: malonyl ACP is the nucleophile (its decarboxylation gives the enolate) and the acetyl thioester on the synthase is the electrophile. The two carbonyls of malonyl make it a good enolate source, not a better electrophile.",
        "C": "The carboxylate is lost as CO2, not used as a nucleophile; no anhydride forms. The new bond is carbon to carbon, from the malonyl CH2 to the acetyl carbonyl carbon.",
        "D": "NADPH is used in the two reduction steps that follow the condensation (ketone to alcohol, alkene to alkane), not before it. The condensation itself involves no redox change."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q12_synthesis_vs_oxidation",
    "topic": "Biosynthesis of Fatty Acids",
    "difficulty_level": "Medium",
    "question_text": "Fatty acid biosynthesis is not simply beta-oxidation run backwards. Which set of differences is correct?",
    "options": [
      {
        "option_id": "A",
        "text": "Synthesis carries the acyl group on ACP rather than CoA, reduces with NADPH where oxidation uses FAD and NAD+, and goes through the (R)-3-hydroxyacyl intermediate where oxidation goes through the L (S) isomer",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Synthesis adds one carbon at a time from CO2, whereas oxidation removes two at a time",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Synthesis uses the same enzymes as oxidation but in the opposite order, driven by ATP",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Synthesis occurs on free fatty acids and oxidation on CoA thioesters",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An anabolic pathway and the catabolic pathway for the same substance cannot be exact reverses, because a reaction that is downhill in one direction is uphill in the other and a cell needs both to run. Fatty acid synthesis and beta-oxidation share the same four kinds of step (condensation, reduction, dehydration, reduction against cleavage, oxidation, hydration, oxidation) but differ in three ways the text singles out: the carrier of the acyl group (acyl carrier protein in synthesis, coenzyme A in degradation), the redox coenzyme (NADPH reduces in synthesis, FAD and NAD+ oxidise in degradation), and the stereochemistry of the 3-hydroxyacyl intermediate (R, called D, in synthesis; the L isomer in degradation). Different enzymes, and in vertebrates a single giant synthase complex, keep the two pathways separately regulated.",
      "approach": "Step 1: Carrier: acetyl and malonyl groups are moved onto ACP before condensation; beta-oxidation intermediates stay on CoA.\nStep 2: Redox: the beta-keto thioester reductase and the enoyl reductase of synthesis use NADPH; the acyl-CoA dehydrogenase and hydroxyacyl-CoA dehydrogenase of oxidation use FAD and NAD+.\nStep 3: Stereochemistry: synthesis makes (R)-3-hydroxybutyryl ACP; oxidation makes the L-3-hydroxyacyl CoA.\nStep 4: Both pathways move carbons in twos (malonyl minus CO2 in, acetyl CoA out); the differences are in carriers, coenzymes and stereochemistry, not in the two-carbon unit.",
      "note": "McMurry 29.4 (Biosynthesis of Fatty Acids) states the general rule that the anabolic pathway by which a substance is made is not the reverse of the catabolic pathway by which it is degraded, since the two paths must differ for both to be energetically favourable, and lists the differences between fatty acid biosynthesis and beta-oxidation: the identity of the acyl-group carrier, the stereochemistry of the beta-hydroxyacyl intermediate, and the identity of the redox coenzyme, FAD used to introduce a double bond in beta-oxidation and NADPH to reduce it in biosynthesis; step 6 of Figure 29.6 gives R stereochemistry for the beta-hydroxy thioester. Beta-oxidation's L-3-hydroxyacyl-CoA dehydrogenase is named in McMurry 29.3.",
      "options": {
        "A": "Correct. ACP against CoA, NADPH against FAD and NAD+, and R against L at the hydroxyacyl stage are the three differences the text names.",
        "B": "Both pathways work in two-carbon units: synthesis adds the two carbons of malonyl (its third carbon leaves as CO2) and oxidation removes acetyl CoA. CO2 is not a carbon source for the chain.",
        "C": "The enzymes are different, and in vertebrates synthesis is done by one multienzyme synthase rather than the separate mitochondrial enzymes of oxidation; ATP is spent only in making malonyl CoA. Same enzymes in reverse would be thermodynamically impossible for both directions.",
        "D": "Both pathways work on thioesters; synthesis simply uses ACP's phosphopantetheine thiol instead of CoA's. Free fatty acids appear only at the very end of synthesis (release of palmitate) and the very start of degradation (before activation to the CoA ester)."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q13_isotope_label",
    "topic": "Biosynthesis of Fatty Acids",
    "difficulty_level": "Hard",
    "question_text": "Acetate labelled with 13C in its methyl group (13CH3CO2H) is fed to cells that convert it into palmitic acid. At which positions of the C16 chain does the label appear?",
    "options": [
      {
        "option_id": "A",
        "text": "The even-numbered carbons, C2, C4, C6 ... C16",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The odd-numbered carbons, C1, C3, C5 ... C15",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Only C1, the carboxyl carbon",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Only C16, the terminal methyl",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Isotope labelling reads the assembly plan directly. Every two-carbon unit of a fatty acid comes from acetyl CoA (via malonyl CoA for all but the first), with its carbonyl carbon and its methyl carbon kept together and added head to tail: the methyl of one unit is bonded to the carbonyl carbon of the next. In the finished chain, then, carbonyl-derived and methyl-derived carbons alternate. The carboxyl carbon C1 of palmitate is the carbonyl carbon of the last malonyl unit added, so C1 is a carbonyl carbon, C2 a methyl carbon, C3 carbonyl, and so on out to C16, the terminal methyl, which is the methyl of the very first acetyl primer. A methyl label therefore sits at every even position.",
      "approach": "Step 1: Assign the primer: the first acetyl group becomes C15 (its carbonyl carbon) and C16 (its methyl carbon).\nStep 2: Each malonyl unit adds two carbons at the carboxyl end: its C2 (the former acetyl methyl) becomes the new C2, its thioester carbon the new C1.\nStep 3: So along the chain the carbons alternate carbonyl-derived (odd) and methyl-derived (even).\nStep 4: A methyl label lands on C2, C4, C6, C8, C10, C12, C14 and C16: eight labelled carbons per palmitate.",
      "note": "McMurry 29.4 (Biosynthesis of Fatty Acids), Problem 29-5, asks exactly this: if acetate labelled with 13C in the methyl group were incorporated into fatty acids, at what positions would the label appear, following the statement that all fatty acids derive from acetyl CoA by sequential addition of two-carbon units and the eight steps that combine two acetyl groups into a butyryl group and then add two carbons at a time. The head-to-tail logic is the same used for terpenoid isoprene units in McMurry 27.5.",
      "options": {
        "A": "Correct. Methyl-derived carbons alternate with carbonyl-derived ones, and since C1 comes from a carbonyl, the methyl label is at every even position.",
        "B": "The odd positions come from the carbonyl carbons of acetate (C1 is the last unit's thioester carbon). A carboxyl-labelled acetate would mark the odd carbons.",
        "C": "C1 is a carbonyl-derived carbon, not a methyl-derived one, and in any case the label enters every unit, not just the last. Eight carbons are labelled.",
        "D": "C16 is labelled (it is the primer's methyl), but so is every other even carbon, because each of the seven malonyl units adds a labelled methyl carbon as well."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q14_glycolysis_atp_steps",
    "topic": "Catabolism of Carbohydrates: Glycolysis",
    "difficulty_level": "Medium",
    "question_text": "Which steps of glycolysis consume ATP, which produce it, and what is the net yield per glucose?",
    "options": [
      {
        "option_id": "A",
        "text": "ATP is consumed by hexokinase (step 1) and phosphofructokinase (step 3) and produced by phosphoglycerate kinase (step 7) and pyruvate kinase (step 10); since steps 6 to 10 run twice per glucose, the net yield is 2 ATP",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "ATP is consumed at step 1 only and produced at steps 7 and 10; net 3 ATP",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "ATP is produced at every step from 6 to 10; net 10 ATP",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "ATP is consumed at steps 1 and 3 and produced at step 6 by the dehydrogenase; net 0",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Glycolysis spends before it earns. Two phosphorylations by ATP prepare the sugar: hexokinase makes glucose 6-phosphate and phosphofructokinase makes fructose 1,6-bisphosphate, whose two phosphates end up one on each three-carbon half after the aldol cleavage. The pay-off comes from two substrate-level phosphorylations, each a phosphoryl transfer from a high-energy intermediate to ADP: 1,3-bisphosphoglycerate, an acyl phosphate, gives its C1 phosphate to ADP (step 7), and phosphoenolpyruvate, an enol phosphate, gives its phosphate to ADP (step 10). Because one glucose makes two three-carbon units, each pay-off step happens twice, four ATP in all, against two invested: net two ATP, plus two NADH from step 6.",
      "approach": "Step 1: Investment: step 1 (glucose + ATP) and step 3 (fructose 6-phosphate + ATP): 2 ATP in.\nStep 2: Aldolase splits the bisphosphate into two trioses, so the remaining steps count twice.\nStep 3: Pay-off: step 7 (1,3-bisphosphoglycerate + ADP) and step 10 (PEP + ADP), each twice: 4 ATP out.\nStep 4: Net: 4 - 2 = 2 ATP per glucose, plus 2 NADH from step 6 and 2 pyruvate.",
      "note": "McMurry 29.5 (Catabolism of Carbohydrates: Glycolysis) gives step 1 as phosphorylation of glucose by ATP with hexokinase, step 3 as phosphorylation of fructose 6-phosphate by ATP with phosphofructokinase, step 7 as transfer of a phosphate group from 1,3-bisphosphoglycerate to ADP by phosphoglycerate kinase giving ATP, and step 10 as transfer of the phosphoryl group of phosphoenolpyruvate to ADP by pyruvate kinase generating ATP, noting after step 5 that each of the remaining five steps takes place twice for every glucose; Problem 29-7 asks which two steps produce ATP. The overall equation in the section shows the net 2 ATP and 2 NADH.",
      "options": {
        "A": "Correct. Two ATP invested in steps 1 and 3, four recovered in steps 7 and 10 (each run twice), net two.",
        "B": "Phosphofructokinase (step 3) also consumes ATP; the investment is two, not one. And each pay-off step runs twice, which the arithmetic must include: 4 - 2 = 2.",
        "C": "Only the two kinase steps 7 and 10 make ATP; steps 6, 8 and 9 are an oxidation-phosphorylation with inorganic phosphate, an isomerisation and a dehydration. Ten is far too many.",
        "D": "Step 6 (glyceraldehyde 3-phosphate dehydrogenase) makes NADH and an acyl phosphate, not ATP; the ATP is made in the following step 7 and in step 10. The net is +2, not 0."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q15_aldolase_iminium",
    "topic": "Catabolism of Carbohydrates: Glycolysis",
    "difficulty_level": "Hard",
    "question_text": "In animals, aldolase cleaves fructose 1,6-bisphosphate into dihydroxyacetone phosphate and glyceraldehyde 3-phosphate. How does a class I aldolase do it?",
    "options": [
      {
        "option_id": "A",
        "text": "A lysine side-chain amine forms an iminium ion (Schiff base) with the C2 ketone; the iminium is a better electron acceptor than the ketone, so a retro-aldol cleavage of the C3-C4 bond releases glyceraldehyde 3-phosphate and leaves an enamine, which is protonated and hydrolysed to dihydroxyacetone phosphate",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Zn2+ coordinates the ketone oxygen and the C3-C4 bond breaks directly to give an enolate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Hydroxide attacks the C1 phosphate, and loss of phosphate triggers cleavage of the C3-C4 bond",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The C4 hydroxyl is oxidised to a ketone by NAD+, and the resulting 1,3-diketone is cleaved by water",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Fructose 1,6-bisphosphate is a beta-hydroxy ketone (the C4 hydroxyl is beta to the C2 carbonyl), and a beta-hydroxy ketone can fall apart by a retro-aldol reaction if the carbonyl is a good enough electron sink. Class II aldolases, in fungi and bacteria, make it one with a zinc ion. Class I aldolases, in plants and animals, do better: a lysine amine condenses with the ketone to form a protonated imine, an iminium ion, whose positive nitrogen accepts electrons far more readily than a neutral C=O. A base removes the C4 O-H proton, the C3-C4 bond breaks, the aldehyde glyceraldehyde 3-phosphate departs, and what remains on the enzyme is an enamine. Protonation at carbon regenerates an iminium ion, which is hydrolysed to release dihydroxyacetone phosphate and the free lysine. The same enzyme runs the aldol forward in gluconeogenesis.",
      "approach": "Step 1: Lys-NH2 adds to the C2 ketone and loses water: the C2 iminium ion (Schiff base).\nStep 2: Retro-aldol: the C4 alkoxide pushes electrons in, C3-C4 breaks, the electrons flow to the iminium nitrogen; products are glyceraldehyde 3-phosphate (C4 to C6) and an enzyme-bound enamine (C1 to C3).\nStep 3: The enamine is protonated at C3 to give a new iminium ion.\nStep 4: Hydrolysis of that iminium ion releases dihydroxyacetone phosphate and restores the lysine.",
      "note": "McMurry 29.5 (Catabolism of Carbohydrates: Glycolysis), step 4 and Figure 29.11, states that the cleavage is the reverse of an aldol reaction (23.1), that class II aldolases in fungi, algae and some bacteria coordinate the fructose carbonyl with Zn2+, and that in plants and animals class I aldolases react fructose 1,6-bisphosphate with the side-chain NH2 of a lysine to give a protonated enzyme-bound imine (a Schiff base, 19.8), which because of its positive charge is a better electron acceptor than a ketone carbonyl; the retro-aldol then gives glyceraldehyde 3-phosphate and an enamine that is protonated to an iminium ion and hydrolysed to dihydroxyacetone phosphate. Gluconeogenesis step 8 (29.8) runs the same aldolase forward.",
      "options": {
        "A": "Correct. The lysine iminium ion is the electron sink for a retro-aldol; the enamine left behind is reprotonated and hydrolysed to DHAP.",
        "B": "Zinc activation is the class II mechanism of fungi and bacteria. Animal aldolases are class I and use a covalent lysine iminium ion instead of a metal.",
        "C": "Neither phosphate is touched during the cleavage; both products keep theirs. The bond that breaks is C3-C4, driven by the C4 hydroxyl and the C2 iminium, not by loss of phosphate.",
        "D": "No oxidation occurs in step 4 and no NAD+ is involved; the C4 hydroxyl is the nucleophilic end of the retro-aldol, not something to be oxidised. The oxidation of glycolysis comes later, at step 6."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q16_enediol_isomerisation",
    "topic": "Catabolism of Carbohydrates: Glycolysis",
    "difficulty_level": "Medium",
    "question_text": "Glucose 6-phosphate, an aldose, is isomerised to fructose 6-phosphate, a ketose, in the second step of glycolysis. How does the enzyme move the carbonyl from C1 to C2?",
    "options": [
      {
        "option_id": "A",
        "text": "The hemiacetal ring opens to the aldehyde; a base removes the C2 proton to give a cis enediol shared by both sugars; reprotonation at C1 gives the C2 ketone of open-chain fructose, which recloses to the furanose",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The C1 aldehyde is reduced by NADH and the C2 hydroxyl is oxidised by NAD+",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A hydride shifts from C2 to C1 in a single intramolecular step",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The phosphate migrates from C6 to C1 and the ring contracts",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An aldose and the ketose with the same skeleton are related by a pair of keto-enol tautomerisations through one common enediol, the chemistry that makes fructose a reducing sugar. Glucose 6-phosphate isomerase catalyses it: the pyranose hemiacetal opens to the open-chain aldehyde, a basic residue removes the acidic C2 proton (alpha to the aldehyde carbonyl) while the carbonyl oxygen is protonated, giving the cis enediol HO-C1=C2-OH, and then the reverse tautomerisation in the other direction, protonation at C1 with loss of the C2 O-H proton, gives a ketone at C2: open-chain fructose 6-phosphate, which closes to the five-membered furanose. No oxidation state changes, and no redox cofactor is needed; the same enediol mechanism converts dihydroxyacetone phosphate into glyceraldehyde 3-phosphate in step 5.",
      "approach": "Step 1: Ring opening: the glucose 6-phosphate hemiacetal reverts to the open-chain aldehyde.\nStep 2: Enolisation: base takes H from C2, the C1=O becomes an enol, giving the C1=C2 enediol (both carbons bearing OH).\nStep 3: Ketonisation the other way: C1 is protonated and the C2 O-H proton is lost, forming C2=O: open-chain fructose 6-phosphate.\nStep 4: Ring closure of the ketose through its C5 hydroxyl gives fructose 6-phosphate as the furanose (the alpha anomer, the text notes).",
      "note": "McMurry 29.5 (Catabolism of Carbohydrates: Glycolysis), step 2 and Figure 29.10, states that glucose 6-phosphate is isomerised by glucose 6-phosphate isomerase to fructose 6-phosphate by initial opening of the hemiacetal ring to its open-chain form followed by keto-enol tautomerisation to a cis enediol, HO-C=C-OH, and that because glucose and fructose share a common enediol, further tautomerisation to a different keto form produces open-chain fructose, after which cyclisation completes the process; step 5 (triose phosphate isomerase) uses the same enediol tautomerisation. The base-catalysed aldose-ketose interconversion is McMurry 25.6, Figure 25.9.",
      "options": {
        "A": "Correct. Two tautomerisations through a shared cis enediol move the carbonyl from C1 to C2 without any redox chemistry.",
        "B": "Aldose to ketose is an isomerisation at constant oxidation level; no NADH or NAD+ is consumed. The atoms simply rearrange through the enediol.",
        "C": "A direct 1,2-hydride shift is not the pathway; the hydrogen moves as a proton, removed from C2 by a base and delivered to C1 by an acid, through the enediol intermediate. Isotope labelling shows exchange with solvent.",
        "D": "The phosphate stays on C6 throughout glycolysis until the phosphates reappear on the trioses. The change from pyranose to furanose follows from the carbonyl moving to C2, which shortens the chain available to close the ring."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q17_gapdh",
    "topic": "Catabolism of Carbohydrates: Glycolysis",
    "difficulty_level": "Hard",
    "question_text": "Glyceraldehyde 3-phosphate dehydrogenase converts an aldehyde into 1,3-bisphosphoglycerate, a mixed carboxylic-phosphoric anhydride, using NAD+ and inorganic phosphate. What is the sequence of events?",
    "options": [
      {
        "option_id": "A",
        "text": "A cysteine SH adds to the aldehyde to give a hemithioacetal; NAD+ oxidises the hemithioacetal C-H to give a thioester; phosphate ion attacks the thioester in a nucleophilic acyl substitution, displacing the cysteine thiolate and forming the acyl phosphate",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "NAD+ oxidises the aldehyde directly to the carboxylic acid, which is then phosphorylated by ATP",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Phosphate adds to the aldehyde to give a phosphate hemiacetal, which NAD+ oxidises",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The C3 phosphate migrates to C1 and NAD+ oxidises the C3 alcohol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Oxidising an aldehyde to a carboxylic acid in one step would waste the energy of the oxidation as heat. The dehydrogenase captures it instead by making the oxidised product an activated acyl derivative. A cysteine thiol adds to the aldehyde carbonyl to give a hemithioacetal, the sulfur analogue of a hemiacetal; the hemithioacetal carbon still carries a hydrogen, and NAD+ removes it as hydride, which converts the adduct into a thioester on the enzyme. A thioester is reactive toward nucleophilic acyl substitution, and inorganic phosphate attacks it, expelling the cysteine thiolate and giving 1,3-bisphosphoglycerate, an acyl phosphate whose mixed anhydride link holds the energy. The next enzyme hands that phosphate to ADP.",
      "approach": "Step 1: Nucleophilic addition: Cys-S- + R-CHO gives the hemithioacetal R-CH(OH)-S-Cys.\nStep 2: Oxidation: a histidine deprotonates the O-H while hydride leaves the carbon for NAD+, giving the thioester R-CO-S-Cys and NADH.\nStep 3: Acyl substitution: HOPO3 2- adds to the thioester carbonyl and the tetrahedral intermediate expels Cys-S-: R-CO-OPO3 2-, 1,3-bisphosphoglycerate.\nStep 4: The acyl phosphate is an anhydride; in step 7 ADP attacks its phosphorus to make ATP and 3-phosphoglycerate.",
      "note": "McMurry 29.5 (Catabolism of Carbohydrates: Glycolysis), step 6 and Figure 29.12, states that glyceraldehyde 3-phosphate dehydrogenase begins by nucleophilic addition of the SH group of a cysteine residue to the aldehyde carbonyl to yield a hemithioacetal (19.10), that oxidation of the hemithioacetal OH group by NAD+ then yields a thioester, and that the thioester reacts with phosphate ion in a nucleophilic acyl substitution to give 1,3-bisphosphoglycerate, a mixed anhydride of a carboxylic acid and phosphoric acid, which like all anhydrides (21.5) reacts in step 7 by substitution on phosphorus to transfer a phosphate to ADP. Steps 6 and 7 together oxidise an aldehyde to a carboxylic acid.",
      "options": {
        "A": "Correct. Hemithioacetal, then thioester by NAD+ oxidation, then acyl phosphate by phosphate attack: the oxidation energy is stored in the anhydride.",
        "B": "Direct oxidation to the free acid would dissipate the energy, and ATP is not consumed here; this step uses inorganic phosphate and produces the acyl phosphate that will make ATP. The thioester intermediate is what makes that possible.",
        "C": "Phosphate is a poor nucleophile toward an aldehyde and the resulting adduct would not be oxidisable to an anhydride. The enzyme uses its own cysteine as the first nucleophile and brings phosphate in only at the thioester stage.",
        "D": "The C3 phosphate stays where it is (the product is 1,3-bisphospho, with the old C3 phosphate plus a new C1 one), and the carbon oxidised is C1, the aldehyde, not the C3 alcohol carbon."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q18_enolase",
    "topic": "Catabolism of Carbohydrates: Glycolysis",
    "difficulty_level": "Medium",
    "question_text": "Enolase converts 2-phosphoglycerate into phosphoenolpyruvate. What kind of reaction is that, and why does it occur readily?",
    "options": [
      {
        "option_id": "A",
        "text": "An E1 dehydration: the C3 hydroxyl leaves first as water to give a primary carbocation, which then loses the C2 proton to form the double bond",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "An E1cB dehydration: a base removes the C2 hydrogen, which is alpha to the carboxylate, and the resulting carbanion (enolate) expels the C3 hydroxide as the leaving group",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "An E2 elimination of phosphoric acid across C2 and C3",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "An SN1 ionisation of the C3 hydroxyl followed by loss of a proton",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "2-Phosphoglycerate is a beta-hydroxy carbonyl compound in disguise: its C3 hydroxyl is beta to the carboxylate carbonyl, and its C2 hydrogen is alpha to it and therefore acidic. Beta-hydroxy carbonyl compounds dehydrate by the E1cB mechanism: the base removes the alpha proton first, giving a carbanion stabilised as an enolate, and that anion then pushes out the beta hydroxide, a leaving group that would never leave from a simple alcohol but does here because the electrons are pushed onto it. Two Mg2+ ions neutralise the charges on the substrate. The product, phosphoenolpyruvate, keeps the phosphate on C2 as an enol phosphate; the enol is trapped, and releasing it to become a ketone is what makes PEP such a strong phosphoryl donor in the next step.",
      "approach": "Step 1: Identify the acidic hydrogen: on C2, alpha to the CO2- group (also the carbon bearing the phosphate).\nStep 2: Base removes it: a carbanion at C2 stabilised by delocalisation onto the carboxylate oxygen, an enolate.\nStep 3: The enolate electrons form the C2=C3 double bond and expel the C3 OH as hydroxide (protonated to water).\nStep 4: The product is CH2=C(OPO3 2-)-CO2-, phosphoenolpyruvate; the phosphate is untouched by the elimination.",
      "note": "McMurry 29.5 (Catabolism of Carbohydrates: Glycolysis), step 9, states that like most beta-hydroxy carbonyl compounds, 2-phosphoglycerate undergoes a ready dehydration by an E1cB mechanism (23.3), that the process is catalysed by enolase with two Mg2+ ions associated with the substrate to neutralise the negative charges, and that the product is phosphoenolpyruvate (PEP); step 10 then transfers the phosphoryl group of PEP to ADP and the resulting enolpyruvate tautomerises to pyruvate. The E1cB dehydration of aldol products is McMurry 23.3.",
      "options": {
        "A": "A primary carbocation next to a carboxylate is far too unstable to form, and a hydroxide is not a leaving group without prior activation. The order is the reverse: the acidic alpha proton is removed first, and the enolate then pushes out the hydroxide.",
        "B": "Correct. Deprotonation at the acidic alpha carbon first, then expulsion of the beta hydroxide by the enolate: the E1cB pathway of a beta-hydroxy carbonyl compound.",
        "C": "The group lost is water, from the C3 hydroxyl, not phosphoric acid; the C2 phosphate is retained in phosphoenolpyruvate. And the elimination is stepwise through the enolate, not a concerted E2.",
        "D": "A primary alcohol does not ionise to a carbocation, and a cation next to a carboxylate would be especially unfavourable. The mechanism is anionic: the carbanion forms first and expels the hydroxide."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q19_reaction_types_glycolysis",
    "topic": "Catabolism of Carbohydrates: Glycolysis",
    "difficulty_level": "Medium",
    "question_text": "Glycolysis uses several reaction types the earlier chapters taught. Which of these does NOT occur anywhere in the ten steps from glucose to pyruvate?",
    "options": [
      {
        "option_id": "A",
        "text": "Decarboxylation",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Retro-aldol cleavage",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "E1cB dehydration",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Nucleophilic substitution at phosphorus (phosphoryl transfer)",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Cataloguing glycolysis by reaction type shows how few kinds of chemistry a pathway needs. Four phosphoryl transfers (steps 1, 3, 7 and 10) are nucleophilic substitutions at phosphorus. Two isomerisations (steps 2 and 5) are keto-enol tautomerisations through enediols, and step 8 is a phosphoryl transfer within one molecule. Step 4 is a retro-aldol cleavage, step 6 a nucleophilic addition to an aldehyde followed by an oxidation and a nucleophilic acyl substitution, and step 9 an E1cB dehydration. Nothing in glycolysis loses CO2: all six carbons of glucose survive as two three-carbon pyruvates. Decarboxylation appears immediately afterwards, when pyruvate dehydrogenase makes acetyl CoA.",
      "approach": "Step 1: List the steps and their types: 1 and 3 phosphoryl transfer; 2 and 5 tautomerisation; 4 retro-aldol; 6 addition, oxidation, acyl substitution; 7 and 10 phosphoryl transfer; 8 phosphoryl transfer; 9 E1cB.\nStep 2: Count carbons: glucose C6 in, two pyruvates (2 x C3) out, so no carbon is lost.\nStep 3: Therefore no decarboxylation occurs within glycolysis.\nStep 4: The first CO2 is released by the pyruvate dehydrogenase complex, and two more per acetyl group by the citric acid cycle.",
      "note": "McMurry 29.5 (Catabolism of Carbohydrates: Glycolysis), Problem 29-8, asks the reader to look at the entire pathway and list the kinds of organic reactions that take place, nucleophilic acyl substitutions, aldol reactions, E1cB reactions and so forth; the ten steps are described in Figure 29.8 and the section text (phosphorylations with ATP, isomerisations through enediols, the retro-aldol of step 4, the oxidation and phosphorylation of step 6, the E1cB dehydration of step 9, the phosphoryl transfers of steps 7 and 10). Decarboxylation first appears in McMurry 29.6, the conversion of pyruvate to acetyl CoA.",
      "options": {
        "A": "Correct. Glycolysis conserves all six carbons of glucose in its two pyruvates; the CO2 is lost only later, by pyruvate dehydrogenase and the citric acid cycle.",
        "B": "Step 4, the aldolase cleavage of fructose 1,6-bisphosphate into two trioses, is a retro-aldol reaction.",
        "C": "Step 9, enolase converting 2-phosphoglycerate into phosphoenolpyruvate, is an E1cB dehydration.",
        "D": "Steps 1, 3, 7 and 10 are all phosphoryl transfers, substitutions at phosphorus between a sugar hydroxyl or enol and ATP or ADP; step 8 is one as well."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q20_tpp_ylide",
    "topic": "Conversion of Pyruvate to Acetyl CoA",
    "difficulty_level": "Hard",
    "question_text": "Thiamin diphosphate (TPP), the coenzyme of pyruvate dehydrogenase, reacts with pyruvate through its thiazolium ring. What makes the ring reactive, and what is the first step?",
    "options": [
      {
        "option_id": "A",
        "text": "The C-H between the ring's sulfur and its positively charged nitrogen is weakly acidic (pKa about 18); a base removes it to give an ylide, a carbanion next to N+, which adds to the ketone carbonyl of pyruvate like a Wittig ylide adding to a carbonyl",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The ring sulfur is a nucleophile that attacks the carboxylate of pyruvate to form a thioester",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The positively charged nitrogen is an electrophile that pyruvate's enolate attacks",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The diphosphate group phosphorylates pyruvate's carboxylate to make an acyl phosphate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Thiamin's business end is a thiazolium ring, a five-membered aromatic ring with a sulfur and a quaternary, positively charged nitrogen. The carbon between those two heteroatoms has an unusually acidic C-H (pKa near 18, remarkable for a C-H) because the carbanion left behind is stabilised by the adjacent positive nitrogen: the deprotonated species is an ylide, a neutral molecule with a carbanion next to a cation, of the same kind as the phosphorus ylide of the Wittig reaction. Ylides are carbon nucleophiles, and the TPP ylide adds to the ketone carbonyl of pyruvate to give a tetrahedral alcohol adduct in which the thiazolium C=N+ is now beta to the carboxylate, set up for decarboxylation.",
      "approach": "Step 1: Locate the acidic hydrogen: on C2 of the thiazolium ring, between S and N+.\nStep 2: Deprotonation by an enzyme base gives the ylide (carbanion at C2, positive charge on N3).\nStep 3: The ylide carbon adds to pyruvate's C2 ketone carbonyl, giving an alkoxide that is protonated: the TPP-pyruvate adduct, a tertiary alcohol.\nStep 4: The adduct's iminium (C=N+) now sits two atoms from the carboxylate, exactly as the C=O of a beta-keto acid does, which is what allows the next step, decarboxylation.",
      "note": "McMurry 29.6 (Conversion of Pyruvate to Acetyl CoA), step 1 of Figure 29.13, states that the key structural element of thiamin diphosphate is the thiazolium ring, a five-membered unsaturated heterocycle containing a sulfur atom and a positively charged nitrogen, that the ring is weakly acidic with a pKa of approximately 18 for the ring hydrogen between N and S, that bases deprotonate it to form an ylide much like the phosphonium ylides used in Wittig reactions (19.11), and that the TPP ylide, as a nucleophile, adds to the ketone carbonyl group of pyruvate to yield an alcohol addition product. The same coenzyme starts the alpha-ketoglutarate dehydrogenase step of the citric acid cycle (29.7).",
      "options": {
        "A": "Correct. The thiazolium C2-H is acidic because the ylide it gives is stabilised by N+, and that ylide is the carbon nucleophile that adds to pyruvate's ketone.",
        "B": "The ring sulfur is part of an aromatic ring and is not the nucleophile; the reactive centre is the ring carbon between S and N+, as a carbanion. And the site attacked on pyruvate is the ketone, not the carboxylate.",
        "C": "The positive nitrogen is what stabilises the carbanion; it is not itself attacked. TPP is the nucleophile in this step and pyruvate's ketone the electrophile, not the other way round.",
        "D": "The diphosphate is a handle that binds the coenzyme to the enzyme; it is not transferred. No acyl phosphate forms in the pyruvate dehydrogenase reaction."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q21_tpp_decarboxylation",
    "topic": "Conversion of Pyruvate to Acetyl CoA",
    "difficulty_level": "Hard",
    "question_text": "Pyruvate itself does not decarboxylate, yet its adduct with thiamin diphosphate loses CO2 readily. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "In the adduct the carboxylate is beta to the thiazolium C=N+ bond, which accepts the electrons released as CO2 leaves, exactly as the C=O of a beta-keto acid does; the product is an enamine, hydroxyethylthiamin diphosphate",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "TPP is a strong base that deprotonates the carboxylic acid, and carboxylate anions decarboxylate spontaneously",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The adduct is a beta-keto acid, because the pyruvate ketone survives the addition",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The diphosphate of TPP acts as a Lewis acid on the carboxylate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carboxylate loses CO2 only when there is somewhere for the electron pair left behind to go, and in pyruvate there is nowhere useful: the carbanion would sit on a ketone carbon that is not conjugated to anything able to stabilise it. Addition of the TPP ylide changes that. The ketone becomes a tertiary alcohol carbon bonded to the thiazolium ring, and the ring's C=N+ is now two atoms away from the carboxylate, the same relationship a carbonyl has to the carboxyl of a beta-keto acid. When CO2 departs, the electrons flow into the C=N+ to give a neutral enamine, hydroxyethylthiamin diphosphate, which is the nucleophile of the next step. Thiamin's role is therefore to be a temporary electron sink, an electrophilic catalyst, which is why it is required for decarboxylating every alpha-keto acid.",
      "approach": "Step 1: Draw the adduct: pyruvate's former C2 now bears OH, CH3, the CO2- group and the thiazolium C2.\nStep 2: Note the geometry: CO2- on C-alpha, and the thiazolium C=N+ attached to that same carbon, so the iminium is beta to the carboxylate.\nStep 3: Decarboxylation: the C-CO2 bond breaks, electrons move to form C=C with the ring carbon and push the ring's double bond onto N: the enamine HETPP.\nStep 4: Compare with a beta-keto acid, where the same electrons form an enol; the analogy is exact, with C=N+ in place of C=O.",
      "note": "McMurry 29.6 (Conversion of Pyruvate to Acetyl CoA), step 2 of Figure 29.13, states that the TPP addition product, which contains an iminium ion beta to a carboxylate anion, undergoes decarboxylation in much the same way that a beta-keto acid decarboxylates in the acetoacetic ester synthesis (22.7), the C=N+ bond acting like the C=O bond of a beta-keto acid to accept electrons as CO2 leaves, giving hydroxyethylthiamin diphosphate (HETPP), an enamine. The mevalonate 5-diphosphate decarboxylation of McMurry 27.5 uses a carbocation as the electron acceptor in the same way.",
      "options": {
        "A": "Correct. TPP supplies a beta electron sink, the iminium, so the adduct decarboxylates like a beta-keto acid, leaving the HETPP enamine.",
        "B": "Pyruvate is already a carboxylate at cellular pH and does not decarboxylate; a free carboxylate anion is stable unless an electron acceptor is positioned to take the electrons. TPP works as an electrophile (electron sink), not as a base.",
        "C": "The ketone does not survive; the ylide adds to it and converts it into a tertiary alcohol. The electron acceptor in the adduct is the thiazolium C=N+, not a C=O.",
        "D": "The diphosphate is remote from the reacting centre and only anchors the coenzyme. Lewis acid assistance is not what enables the decarboxylation; the iminium's conjugation with the departing carboxylate is."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q22_lipoamide_acetyl_transfer",
    "topic": "Conversion of Pyruvate to Acetyl CoA",
    "difficulty_level": "Hard",
    "question_text": "After decarboxylation, hydroxyethylthiamin diphosphate (an enamine) must give up its two-carbon unit as acetyl CoA. How do lipoamide, coenzyme A, FAD and NAD+ complete the conversion?",
    "options": [
      {
        "option_id": "A",
        "text": "The enamine attacks one sulfur of lipoamide's disulfide ring, displacing the other in an SN2-like step; the resulting hemithioacetal eliminates the TPP ylide to leave acetyl dihydrolipoamide, a thioester; coenzyme A takes the acetyl group by acyl substitution, and FAD reoxidises dihydrolipoamide to lipoamide, FADH2 being reoxidised by NAD+",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "NAD+ oxidises HETPP directly to acetyl TPP, which coenzyme A cleaves",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Lipoamide's disulfide oxidises the enamine to acetaldehyde, which CoA converts into a hemithioacetal",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "FAD adds to the enamine and the flavin-acetyl adduct is hydrolysed to acetate, which ATP activates to acetyl CoA",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The two-carbon unit left on thiamin after decarboxylation is at the aldehyde oxidation level (an enamine of acetaldehyde). To reach acetyl CoA it must be oxidised to the thioester level and handed to coenzyme A, and the pyruvate dehydrogenase complex does both with lipoamide, a disulfide on a long lysine arm. Enamines are nucleophilic at carbon, and HETPP attacks one sulfur of the lipoamide disulfide, breaking the S-S bond in an SN2-like substitution. The product is a hemithioacetal on thiamin; it collapses, expelling the TPP ylide (the reverse of the first addition), to give acetyl dihydrolipoamide, an ordinary thioester. Coenzyme A attacks that thioester and takes the acetyl group by transthioesterification. The dihydrolipoamide left behind must be reoxidised to the disulfide, which FAD does; the FADH2 is then reoxidised by NAD+, so NADH is the final reduced product per pyruvate.",
      "approach": "Step 1: HETPP (enamine carbon nucleophile) attacks S of lipoamide's disulfide; the other S leaves as thiolate: a thiamin-bound hemithioacetal, one sulfur now bonded to the former pyruvate C2.\nStep 2: The hemithioacetal eliminates the thiazolium ylide (regenerating TPP), forming C=O: acetyl dihydrolipoamide, CH3-CO-S-R.\nStep 3: CoA-SH attacks the thioester; dihydrolipoamide thiolate leaves: acetyl CoA.\nStep 4: Dihydrolipoamide (two SH) is oxidised back to the disulfide by FAD; FADH2 is oxidised by NAD+ to give NADH, closing the cycle.",
      "note": "McMurry 29.6 (Conversion of Pyruvate to Acetyl CoA), steps 3 to 5 of Figure 29.13, states that hydroxyethylthiamin diphosphate is an enamine and, like all enamines, nucleophilic (23.11), that it reacts with the enzyme-bound disulfide lipoamide by nucleophilic attack on a sulfur atom displacing the second sulfur in an SN2-like process, that the product, a hemithioacetal, eliminates thiamin diphosphate ylide (the reverse of the ketone addition in step 1) to generate acetyl dihydrolipoamide, that this thioester undergoes nucleophilic acyl substitution with coenzyme A to yield acetyl CoA plus dihydrolipoamide, and that the dihydrolipoamide is oxidised back to lipoamide by FAD (29.3), the FADH2 in turn being oxidised by NAD+. The process needs three enzymes and four coenzymes in all.",
      "options": {
        "A": "Correct. Enamine attack on the disulfide, elimination of the ylide, acyl transfer to CoA, and the FAD then NAD+ reoxidation of the lipoamide arm.",
        "B": "NAD+ does not act on HETPP directly; the oxidation is done by the disulfide of lipoamide, and NAD+ enters only at the end to reoxidise FADH2. There is no acetyl TPP intermediate.",
        "C": "Free acetaldehyde is not released; the two-carbon unit passes from thiamin straight onto lipoamide's sulfur, already at the thioester level once the ylide leaves. A CoA hemithioacetal would be at the wrong oxidation level to be acetyl CoA.",
        "D": "FAD never bonds to the substrate carbon; its role is to reoxidise dihydrolipoamide. And acetyl CoA is made directly by transthioesterification, not by activating free acetate with ATP (that route exists but is not this enzyme's)."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q23_glucose_carbon_fate",
    "topic": "Conversion of Pyruvate to Acetyl CoA",
    "difficulty_level": "Hard",
    "question_text": "Following the carbons of glucose through glycolysis and pyruvate dehydrogenase, which glucose carbons become the CH3 groups of acetyl CoA, and which are released as CO2?",
    "options": [
      {
        "option_id": "A",
        "text": "C1 and C6 become the methyl carbons; C3 and C4 are released as CO2",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "C1 and C2 become the methyl carbons; C5 and C6 are released as CO2",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "C3 and C4 become the methyl carbons; C1 and C6 are released as CO2",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "C2 and C5 become the methyl carbons; C3 and C4 are released as CO2",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Aldolase splits fructose 1,6-bisphosphate between C3 and C4, so glucose's two halves become mirror-image trioses: C1-C2-C3 gives dihydroxyacetone phosphate (with C1 the phosphate-bearing CH2, C2 the ketone, C3 the CH2OH) and C4-C5-C6 gives glyceraldehyde 3-phosphate (C4 the aldehyde, C5 the CHOH, C6 the CH2OPO3). Triose phosphate isomerase turns DHAP into a second glyceraldehyde 3-phosphate in which C3 is the aldehyde carbon and C1 the phosphate-bearing carbon. In each triose the aldehyde carbon becomes pyruvate's carboxylate, the middle carbon its ketone, and the phosphate-bearing carbon its methyl. Pyruvate dehydrogenase then releases the carboxylate as CO2 and keeps the other two as acetyl. So the CO2 carbons are glucose C3 and C4, the acetyl carbonyls are C2 and C5, and the acetyl methyls are C1 and C6.",
      "approach": "Step 1: Map the cleavage: FBP C1-C3 to DHAP (C1 = CH2OP, C2 = C=O, C3 = CH2OH); FBP C4-C6 to GAP (C4 = CHO, C5 = CHOH, C6 = CH2OP).\nStep 2: Isomerise DHAP to GAP: the carbonyl moves from C2 to C3, so this GAP has C3 = CHO, C2 = CHOH, C1 = CH2OP.\nStep 3: GAP to pyruvate keeps the order: CHO to CO2-, CHOH to C=O, CH2OP to CH3. So pyruvate carboxylates are C3 and C4; ketones C2 and C5; methyls C1 and C6.\nStep 4: Pyruvate dehydrogenase removes the carboxylate: CO2 from C3 and C4; acetyl CH3 from C1 and C6; acetyl C=O from C2 and C5.",
      "note": "McMurry 29.6 (Conversion of Pyruvate to Acetyl CoA), Problem 29-9, asks which carbon atoms in glucose end up as CH3 carbons in acetyl CoA and which end up as CO2, to be answered from the glycolysis steps of McMurry 29.5 (the C3-C4 cleavage by aldolase, the enediol isomerisation of dihydroxyacetone phosphate, and the conversion of glyceraldehyde 3-phosphate to pyruvate with the aldehyde carbon becoming the carboxylate) and the decarboxylation of pyruvate's carboxylate in Figure 29.13.",
      "options": {
        "A": "Correct. The two end carbons of glucose become the acetyl methyls, and the two central carbons, the ones on either side of the aldolase cut, leave as CO2.",
        "B": "C1 and C2 are in the same half of glucose and become the methyl and ketone carbons of one pyruvate, not two methyls; C5 and C6 likewise are not both lost.",
        "C": "This is reversed: C3 and C4 are the aldehyde carbons of the two trioses, which become pyruvate's carboxylates and are lost as CO2; C1 and C6 are the phosphate-bearing carbons that become the methyls.",
        "D": "C2 and C5 become the ketone carbons of pyruvate, hence the carbonyl carbons of acetyl CoA, not the methyls. The CO2 assignment is right but the methyls are C1 and C6."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q24_aconitase",
    "topic": "The Citric Acid Cycle",
    "difficulty_level": "Hard",
    "question_text": "Aconitase converts citrate, a prochiral tertiary alcohol, into (2R,3S)-isocitrate, a chiral secondary alcohol. What two reactions does it use, and on which part of citrate?",
    "options": [
      {
        "option_id": "A",
        "text": "An E1cB dehydration of the beta-hydroxy acid to cis-aconitate, taking the hydrogen from the pro-R arm (the one derived from oxaloacetate), followed by conjugate addition of water to the C=C in the opposite sense, so the hydroxyl ends up on the carbon that used to bear a hydrogen",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "An SN2 displacement of the tertiary hydroxyl by water at the adjacent carbon",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Oxidation of the tertiary alcohol to a ketone by NAD+, then reduction at the other carbon by NADH",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A 1,2-hydride shift that moves the hydroxyl from the central carbon to the pro-S arm",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Moving a hydroxyl group from one carbon to its neighbour is done in two steps that this chapter uses repeatedly: eliminate water to make an alkene, then add water back the other way round. Citrate's central hydroxyl is beta to the carboxylates on either arm, and the CH2 hydrogens of those arms are alpha to a carboxylate and acidic, so an E1cB dehydration is available; aconitase removes a hydrogen from the pro-R arm (the arm that came from oxaloacetate, not the one from acetyl CoA) and expels the hydroxide to give the alkene cis-aconitate. Water then adds to the alkene by conjugate addition, but with the hydroxyl going to the arm carbon and the hydrogen to the central carbon, so the net result is the hydroxyl moved over by one carbon: isocitrate, with two new stereocentres set by the enzyme as (2R,3S).",
      "approach": "Step 1: Identify citrate's structure: a central C(OH)(CO2-) with two CH2CO2- arms, prochiral (the arms are enantiotopic, pro-R and pro-S).\nStep 2: E1cB: base removes a pro-R-arm CH2 hydrogen (alpha to that arm's carboxylate); the enolate expels the central hydroxide: cis-aconitate, C=C between the central carbon and the pro-R arm.\nStep 3: Conjugate addition of water: OH bonds to the former arm carbon and H to the central carbon, from the face that gives (2R,3S).\nStep 4: The product isocitrate now has a secondary alcohol, which NAD+ can oxidise in the next step; the pro-S arm from acetyl CoA is untouched.",
      "note": "McMurry 29.7 (The Citric Acid Cycle), step 2 of Figure 29.14, states that citrate, a prochiral tertiary alcohol, is converted into its isomer (2R,3S)-isocitrate, a chiral secondary alcohol, in two steps both catalysed by aconitase: an E1cB dehydration of a beta-hydroxy acid to give cis-aconitate, the same reaction as step 9 of glycolysis, and then a conjugate nucleophilic addition of water to the C=C bond (19.13), the dehydration taking place specifically on the pro-R arm, the one derived from oxaloacetate, rather than the pro-S arm from acetyl CoA. Problems 29-11 and 29-12 ask for the mechanisms and the pro-R/pro-S and syn/anti details.",
      "options": {
        "A": "Correct. Dehydrate by E1cB on the pro-R arm to cis-aconitate, then re-hydrate the other way, which walks the hydroxyl one carbon along.",
        "B": "A tertiary hydroxide is not a leaving group for SN2, and there is no substitution at the neighbouring carbon; the transfer goes through the alkene, cis-aconitate, in two steps.",
        "C": "Aconitase uses no redox cofactor and the central carbon has no hydrogen to lose to NAD+ (it is a tertiary alcohol). The oxidation by NAD+ comes at the next step, isocitrate dehydrogenase, after the hydroxyl has moved.",
        "D": "Hydride shifts move hydrogen, not hydroxyl, and the hydroxyl migrates to the pro-R arm, not the pro-S one. The mechanism is elimination-addition through cis-aconitate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q25_isocitrate_dehydrogenase",
    "topic": "The Citric Acid Cycle",
    "difficulty_level": "Medium",
    "question_text": "Isocitrate dehydrogenase converts isocitrate into alpha-ketoglutarate with loss of CO2. What are the two chemical events, and why is the second one easy?",
    "options": [
      {
        "option_id": "A",
        "text": "NAD+ oxidises the secondary alcohol to a ketone, giving oxalosuccinate; the middle carboxylate of oxalosuccinate is now beta to that ketone, so it decarboxylates like any beta-keto acid, the enol tautomerising to the C2 ketone of alpha-ketoglutarate",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The carboxylate is lost first as CO2 from the alcohol, then the resulting carbanion is oxidised by NAD+",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Thiamin diphosphate adds to the alcohol carbon and the adduct decarboxylates",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The alcohol is dehydrated by E1cB and the alkene is oxidatively cleaved",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Isocitrate's middle carbon carries a carboxylate and its neighbour carries the secondary hydroxyl. Oxidising that hydroxyl to a ketone (hydride transfer to NAD+, the third NADH-producing oxidation seen so far in this chapter) turns isocitrate into oxalosuccinate, a beta-keto acid: the middle carboxylate is now two atoms from a carbonyl. Beta-keto acids decarboxylate readily because the carbonyl accepts the electrons released as CO2 leaves, giving an enol that tautomerises to the ketone; a divalent metal ion bound to the enzyme polarises the carbonyl to make it an even better acceptor. The product is alpha-ketoglutarate, a five-carbon alpha-keto acid, and the CO2 lost is the first of the cycle's two.",
      "approach": "Step 1: Oxidation: NAD+ takes the hydride from the carbinol carbon of isocitrate; the product is oxalosuccinate (a ketone flanked by a carboxylate and the CH(CO2-) carbon).\nStep 2: Recognise the beta-keto acid: the CH carboxylate is beta to the new ketone.\nStep 3: Decarboxylation: CO2 leaves, electrons flow into the ketone C=O (activated by Mg2+ or Mn2+), giving an enolate/enol.\nStep 4: Tautomerisation restores the ketone: alpha-ketoglutarate, -O2C-CO-CH2-CH2-CO2-, and NADH.",
      "note": "McMurry 29.7 (The Citric Acid Cycle), step 3 of Figure 29.14, states that (2R,3S)-isocitrate, a secondary alcohol, is oxidised by NAD+ to give the ketone oxalosuccinate, which loses CO2 to give alpha-ketoglutarate, that the reaction is catalysed by isocitrate dehydrogenase, that the decarboxylation is a typical reaction of a beta-keto acid just like that in the acetoacetic ester synthesis (22.7), and that the enzyme requires a divalent cation as a cofactor to polarise the ketone carbonyl and make it a better electron acceptor. The second decarboxylation, of alpha-ketoglutarate in step 4, needs thiamin diphosphate because there the carboxylate is alpha, not beta, to the ketone.",
      "options": {
        "A": "Correct. Oxidation creates the beta-keto acid, and the beta-keto acid decarboxylates through its enol to alpha-ketoglutarate.",
        "B": "A carboxylate next to an alcohol has no electron acceptor and will not decarboxylate; the oxidation must come first to create the beta carbonyl that makes CO2 loss possible.",
        "C": "TPP is the coenzyme for alpha-keto acids (pyruvate, alpha-ketoglutarate), where the carboxylate is alpha to the ketone. Oxalosuccinate is a beta-keto acid and decarboxylates on its own once formed; no TPP is involved.",
        "D": "No alkene is formed and nothing is cleaved between carbons other than the C-CO2 bond. The carbon skeleton shortens by exactly the one carbon lost as CO2 from the beta-keto acid."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q26_succinyl_coa_synthetase",
    "topic": "The Citric Acid Cycle",
    "difficulty_level": "Medium",
    "question_text": "Succinyl CoA synthetase converts succinyl CoA into succinate while making GTP from GDP. How is the thioester's energy captured rather than lost?",
    "options": [
      {
        "option_id": "A",
        "text": "Phosphate attacks the thioester to give succinyl phosphate, an acyl phosphate; that mixed anhydride then phosphorylates the enzyme and the phosphoryl group passes to GDP, so the thioester is cleaved without water and its energy ends up in GTP",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Water hydrolyses the thioester and the heat released drives GDP phosphorylation",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "GDP attacks the thioester carbonyl directly to form a succinyl-GDP anhydride that decomposes to GTP",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Coenzyme A is phosphorylated by GTP and the phosphorylated CoA leaves",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A thioester is a high-energy compound: hydrolysing it releases about as much free energy as hydrolysing ATP. Simply adding water would throw that away. Instead the cell does what glycolysis did with 1,3-bisphosphoglycerate: it converts the thioester into an acyl phosphate by nucleophilic acyl substitution with inorganic phosphate (the CoA thiolate leaves), and an acyl phosphate is a mixed anhydride whose phosphoryl group can be transferred to a nucleoside diphosphate by substitution at phosphorus. Here a histidine on the enzyme is phosphorylated first and then hands the phosphate to GDP, giving GTP, which is interconvertible with ATP. The overall change looks like hydrolysis of succinyl CoA to succinate, but no water is used and one high-energy bond has been converted into another.",
      "approach": "Step 1: HOPO3 2- attacks the succinyl CoA carbonyl; the tetrahedral intermediate expels CoA-S-: succinyl phosphate.\nStep 2: A histidine nitrogen attacks the phosphorus of the acyl phosphate; succinate leaves: phosphohistidine enzyme.\nStep 3: GDP's terminal phosphate oxygen attacks the phosphohistidine; histidine leaves: GTP.\nStep 4: Net: succinyl CoA + Pi + GDP gives succinate + CoA + GTP, a substrate-level phosphorylation like steps 6 and 7 of glycolysis.",
      "note": "McMurry 29.7 (The Citric Acid Cycle), step 5 of Figure 29.14, states that succinyl CoA is converted to succinate by succinyl CoA synthetase in a reaction coupled with phosphorylation of guanosine diphosphate to guanosine triphosphate, that the overall transformation is similar to steps 6 through 8 in glycolysis in which a thioester is converted into an acyl phosphate and a phosphate group is then transferred to ADP, and that the result is a hydrolysis of the thioester group without involvement of water. The acyl phosphate chemistry of glyceraldehyde 3-phosphate dehydrogenase is Figure 29.12 in McMurry 29.5.",
      "options": {
        "A": "Correct. Thioester to acyl phosphate to phosphoenzyme to GTP: the energy is passed along as a series of phosphoryl transfers instead of being released to water.",
        "B": "Heat from a separate hydrolysis cannot be captured to drive a phosphorylation in solution; coupling requires a shared chemical intermediate. The text notes explicitly that the thioester is cleaved without water.",
        "C": "GDP's phosphate does not attack the carbonyl carbon; it attacks phosphorus. The route goes through succinyl phosphate and a phosphohistidine, and the new bond in GTP is P-O-P, not an acyl-phosphate to GDP.",
        "D": "Coenzyme A is released as the free thiol and is not phosphorylated; GTP is the product, not a reagent. Phosphate is consumed, not produced."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q27_fumarase",
    "topic": "The Citric Acid Cycle",
    "difficulty_level": "Medium",
    "question_text": "Fumarase adds water to fumarate to give (S)-malate. How does the addition proceed, and what is its stereochemistry?",
    "options": [
      {
        "option_id": "A",
        "text": "Conjugate nucleophilic addition of hydroxide to the carboxylate-conjugated C=C gives an enolate, which is protonated on the face opposite the new OH: a net anti addition that produces only the S enantiomer",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acid-catalysed Markovnikov hydration through a carbocation, giving racemic malate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Syn addition of water across the double bond by a concerted mechanism, giving the R enantiomer",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Reduction of the double bond by NADH followed by hydroxylation",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Fumarate is an alpha,beta-unsaturated carboxylate on both ends, so like the enoyl CoA of beta-oxidation and the cis-aconitate of step 2 it takes water by conjugate addition: hydroxide (water activated by an enzyme base) bonds to one alkene carbon, the electrons move onto the adjacent carboxylate to give an enolate, and the enolate is protonated at carbon. Because the enzyme delivers the proton from the face opposite the one that received the hydroxyl, the overall addition is anti, and because the enzyme presents only one face of the planar fumarate, only one enantiomer forms: (S)-malate. A laboratory hydration would give racemic malate; the stereospecificity is the enzyme's contribution, not the mechanism's.",
      "approach": "Step 1: Recognise the substrate: E-butenedioate, a symmetric conjugated dicarboxylate; either carbon can be attacked equivalently.\nStep 2: Nucleophilic addition: OH- (from water) adds to C2, giving the enolate at C3 delocalised onto its carboxylate.\nStep 3: Protonation at C3 from the face anti to the OH: anti addition of H and OH.\nStep 4: The enzyme's chiral environment fixes which face the OH enters, so the product is (S)-malate exclusively, ready for oxidation by NAD+ to oxaloacetate.",
      "note": "McMurry 29.7 (The Citric Acid Cycle), step 7 of Figure 29.14, states that the conjugate nucleophilic addition of water to fumarate to yield (S)-malate is catalysed by fumarase and is mechanistically similar to the addition of water to cis-aconitate in step 2, that the reaction occurs through an enolate-ion intermediate which is protonated on the side opposite the OH, leading to a net anti addition, and that step 8 then oxidises (S)-malate by NAD+ to oxaloacetate. Conjugate addition to alpha,beta-unsaturated carbonyls is McMurry 19.13.",
      "options": {
        "A": "Correct. Hydroxide adds at the beta carbon of the conjugated system, the enolate is protonated anti to it, and the enzyme makes only the S enantiomer.",
        "B": "There is no carbocation: a cation next to a carboxylate would be badly destabilised, and the reaction is nucleophilic, through an enolate. And an enzyme gives one enantiomer, not a racemate.",
        "C": "The addition is anti, not syn, because the proton is delivered on the face opposite the hydroxyl; and the natural product is (S)-malate, the L isomer.",
        "D": "No reduction occurs; fumarate to malate is a hydration at constant oxidation level. NADH is not involved (NAD+ is used in the next step to oxidise malate)."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q28_cycle_yield",
    "topic": "The Citric Acid Cycle",
    "difficulty_level": "Easy",
    "question_text": "What does one turn of the citric acid cycle produce from one acetyl group, and why does the cycle stop without oxygen?",
    "options": [
      {
        "option_id": "A",
        "text": "Two CO2, three NADH, one FADH2 and one GTP; without oxygen the electron-transport chain cannot reoxidise NADH and FADH2, so the NAD+ and FAD the cycle needs run out",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Two CO2 and four ATP made directly; without oxygen the acetyl group cannot be oxidised",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "One CO2, one NADH and one lactate; oxygen is needed to oxidise the lactate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Two CO2 and two oxaloacetate; without oxygen oxaloacetate accumulates",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The cycle takes in one acetyl group (as acetyl CoA), adds it to oxaloacetate, and by the time oxaloacetate is regenerated two carbons have left as CO2 and four oxidations have been performed: three by NAD+ (isocitrate dehydrogenase, alpha-ketoglutarate dehydrogenase, malate dehydrogenase) and one by FAD (succinate dehydrogenase). One substrate-level phosphorylation (succinyl CoA synthetase) gives GTP. The reduced coenzymes carry the energy: the electron-transport chain reoxidises NADH and FADH2 and uses the energy to make ATP, with oxygen as the final electron acceptor. If oxygen is absent the chain stops, NAD+ and FAD are not regenerated, and the cycle, which needs them as reactants, halts too.",
      "approach": "Step 1: Count the decarboxylations: isocitrate dehydrogenase and alpha-ketoglutarate dehydrogenase, two CO2.\nStep 2: Count the NAD+ reductions: steps 3, 4 and 8, three NADH.\nStep 3: Count the FAD reduction: step 6, one FADH2; and the GTP from step 5.\nStep 4: The oxidised coenzymes must be regenerated by the electron-transport chain, which requires O2; that is the cycle's dependence on oxygen.",
      "note": "McMurry 29.7 (The Citric Acid Cycle) states that the overall result of the cycle is the conversion of an acetyl group into two molecules of CO2 plus reduced coenzymes by the eight-step sequence of Figure 29.14, lists the NAD+-dependent oxidations (steps 3, 4 and 8), the FAD-dependent dehydrogenation (step 6) and the GTP-forming step 5, and explains that the cycle operates only as long as NAD+ and FAD are available, which requires the reduced coenzymes to be reoxidised via the electron-transport chain with oxygen as the ultimate electron acceptor, so the cycle depends on oxygen. The overall equation is given at the end of the section.",
      "options": {
        "A": "Correct. Two CO2, three NADH, one FADH2 and one GTP per acetyl, and the oxygen requirement is indirect, through regeneration of the oxidised coenzymes.",
        "B": "The cycle makes only one nucleoside triphosphate (GTP) directly; the rest of the energy leaves as reduced coenzymes. Its oxygen dependence is not because O2 touches the acetyl group but because O2 reoxidises the coenzymes.",
        "C": "Lactate is made from pyruvate under anaerobic conditions, outside the cycle. A turn of the cycle releases two CO2 and reduces three NAD+ and one FAD.",
        "D": "Oxaloacetate is regenerated, one per turn, not produced in excess; it is a catalyst of the cycle. Two CO2 is right, but the products that matter are the reduced coenzymes."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q29_gluconeogenesis_bypasses",
    "topic": "Carbohydrate Biosynthesis: Gluconeogenesis",
    "difficulty_level": "Medium",
    "question_text": "Gluconeogenesis reverses most steps of glycolysis but replaces three of them. Which steps are replaced, and why?",
    "options": [
      {
        "option_id": "A",
        "text": "The three kinase steps (hexokinase, phosphofructokinase, pyruvate kinase) are bypassed, because running them backwards would require making ATP from a sugar phosphate or pyruvate, which is uphill; instead glucose 6-phosphate and fructose 1,6-bisphosphate are hydrolysed by phosphatases, and pyruvate is carboxylated and then decarboxylated with GTP to give phosphoenolpyruvate",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The isomerisation steps are bypassed, because isomerases work in one direction only",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The aldolase step is bypassed, because a retro-aldol cannot run in reverse",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "No steps are replaced; gluconeogenesis is glycolysis run backwards with the same eleven enzymes",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Seven of the glycolytic reactions have equilibrium constants near one and run in either direction as the concentrations dictate, so gluconeogenesis simply uses them backwards. The three that do not are the ones in which ATP was spent or made: the two phosphorylations by ATP and the phosphoryl transfer from phosphoenolpyruvate to ADP. Reversing a kinase step would mean making ATP from a sugar phosphate or from pyruvate, and ATP is too high in energy for that to be favourable. Gluconeogenesis therefore removes the phosphates by plain hydrolysis (fructose 1,6-bisphosphatase, glucose 6-phosphatase), which is downhill, and reaches phosphoenolpyruvate from pyruvate by a two-enzyme detour, carboxylation to oxaloacetate with ATP and biotin and then decarboxylation with phosphorylation by GTP, spending two nucleoside triphosphates to climb what one had descended.",
      "approach": "Step 1: Identify the irreversible glycolytic steps: 1 (hexokinase), 3 (phosphofructokinase) and 10 (pyruvate kinase), all large negative delta G in the glycolytic direction.\nStep 2: Replace 10: pyruvate + ATP + HCO3- to oxaloacetate (pyruvate carboxylase, biotin); oxaloacetate + GTP to PEP + CO2 + GDP (PEP carboxykinase).\nStep 3: Replace 3: fructose 1,6-bisphosphate + H2O to fructose 6-phosphate + Pi (fructose 1,6-bisphosphatase).\nStep 4: Replace 1: glucose 6-phosphate + H2O to glucose + Pi (glucose 6-phosphatase). The other steps run in reverse.",
      "note": "McMurry 29.8 (Carbohydrate Biosynthesis: Gluconeogenesis) states that the pathway is not the reverse of glycolysis, since the catabolic and anabolic pathways must differ for both to be favourable; it gives step 1 (pyruvate carboxylase with ATP, bicarbonate and biotin) and step 2 (PEP carboxykinase, decarboxylation with concurrent GTP phosphorylation), notes that steps 3 to 8 are mechanistic reversals of glycolysis steps 9 to 4 with equilibrium constants near 1, and explains steps 9 and 11: the reverse of the kinase reactions, making ATP from fructose 1,6-bisphosphate or glucose 6-phosphate, is unfavourable because ATP is too high in energy, so the phosphates are removed by direct hydrolysis with fructose 1,6-bisphosphatase and glucose 6-phosphatase (the latter through a phosphohistidine).",
      "options": {
        "A": "Correct. The three ATP-linked steps cannot be reversed profitably, so two are replaced by phosphatase hydrolyses and the pyruvate kinase step by the carboxylase-carboxykinase pair.",
        "B": "The isomerisations (steps 2, 5 and 8 of glycolysis) have equilibrium constants near one and run backwards without difficulty; they are used as they are.",
        "C": "The aldolase reaction is reversible: the same class I aldolase that cleaves fructose 1,6-bisphosphate in glycolysis joins DHAP and glyceraldehyde 3-phosphate in gluconeogenesis (step 8).",
        "D": "Gluconeogenesis has eleven steps against glycolysis's ten precisely because the pyruvate kinase step is replaced by two, and the two kinase phosphorylations are replaced by phosphatases. The pathways share seven enzymes, not all."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q30_pep_from_pyruvate",
    "topic": "Carbohydrate Biosynthesis: Gluconeogenesis",
    "difficulty_level": "Hard",
    "question_text": "Gluconeogenesis converts pyruvate into phosphoenolpyruvate by way of oxaloacetate. What is the chemistry of the two steps?",
    "options": [
      {
        "option_id": "A",
        "text": "Pyruvate carboxylase makes the pyruvate enolate and carboxylates it with CO2 delivered by N-carboxybiotin (ATP and bicarbonate); PEP carboxykinase then decarboxylates oxaloacetate, a beta-keto acid, and the enolate formed is phosphorylated on oxygen by GTP as it forms",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Pyruvate is phosphorylated directly by ATP on its methyl carbon, and the phosphate migrates to oxygen",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Pyruvate is reduced to lactate, which is dehydrated to PEP",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Oxaloacetate is formed by an aldol reaction of pyruvate with CO2 and then loses water",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Pyruvate kinase's reaction, PEP plus ADP giving pyruvate plus ATP, is so favourable that its reverse is impractical, so the cell takes two steps and spends two nucleoside triphosphates. First it makes pyruvate a better substrate by carboxylating it: pyruvate carboxylase uses biotin, ATP and bicarbonate exactly as acetyl CoA carboxylase does, the enolate of pyruvate attacking CO2 released from N-carboxybiotin to give oxaloacetate. Oxaloacetate is a beta-keto acid, and its decarboxylation by PEP carboxykinase generates the pyruvate enolate; GTP phosphorylates the enolate oxygen while the enolate exists, trapping it as the enol phosphate. The carboxylation and decarboxylation cancel, but the sequence lets the phosphorylation of a weak nucleophile (an enol) be driven by the CO2 release.",
      "approach": "Step 1: Pyruvate carboxylase: a base removes a CH3 proton of pyruvate to give its enolate; N-carboxybiotin (made from HCO3- and ATP) releases CO2, which the enolate attacks: oxaloacetate.\nStep 2: PEP carboxykinase: oxaloacetate loses CO2 through the ketone as electron acceptor (a retro-aldol-type beta-keto acid decarboxylation), giving the pyruvate enolate.\nStep 3: Concurrently GTP's gamma-phosphate is attacked by the enolate oxygen: phosphoenolpyruvate plus GDP.\nStep 4: PEP then follows the reverse of glycolysis steps 9 and 8 (hydration by enolase, phosphate isomerisation) to 3-phosphoglycerate.",
      "note": "McMurry 29.8 (Carbohydrate Biosynthesis: Gluconeogenesis), steps 1 and 2 of Figure 29.15, states that gluconeogenesis begins with the carboxylation of pyruvate to oxaloacetate by pyruvate carboxylase, requiring ATP, bicarbonate ion and the coenzyme biotin as a CO2 carrier, by a mechanism analogous to step 3 of fatty acid biosynthesis (the carboxylation of acetyl CoA, Figure 29.7), and that decarboxylation of oxaloacetate, a beta-keto acid, then occurs by the typical retro-aldol mechanism like step 3 of the citric acid cycle, with phosphorylation of the resultant pyruvate enolate ion by GTP occurring concurrently to give phosphoenolpyruvate, catalysed by phosphoenolpyruvate carboxykinase.",
      "options": {
        "A": "Correct. Carboxylate with biotin and ATP, then decarboxylate to the enolate and phosphorylate it with GTP: two steps and two triphosphates replace the one irreversible kinase step.",
        "B": "Phosphorylation on carbon does not occur, and pyruvate's methyl group is not nucleophilic enough to attack ATP anyway. The phosphate is placed on the enolate oxygen, and only after the carboxylation-decarboxylation sequence has generated the enolate.",
        "C": "Lactate is a source of pyruvate for gluconeogenesis (via lactate dehydrogenase), not an intermediate after it, and dehydrating lactate would give an unphosphorylated enol that tautomerises straight back to pyruvate.",
        "D": "The carboxylation is an enolate attacking CO2 (a Claisen-type acylation of carbon), not an aldol, and oxaloacetate loses CO2, not water, on the way to PEP; the double bond of PEP comes from the enolate, not a dehydration."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q31_not_a_precursor",
    "topic": "Carbohydrate Biosynthesis: Gluconeogenesis",
    "difficulty_level": "Medium",
    "question_text": "Which of these cannot serve as a starting material for making glucose in humans, and why?",
    "options": [
      {
        "option_id": "A",
        "text": "Acetyl CoA (and therefore fatty acids): its two carbons enter the citric acid cycle and are both lost as CO2 before any intermediate can be drawn off to pyruvate, so there is no net path to a three-carbon precursor",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Lactate: it cannot be reoxidised to pyruvate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Glycerol: it has only three carbons",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Alanine: it contains nitrogen",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Gluconeogenesis starts from pyruvate, so anything that can be converted into pyruvate (or into an intermediate downstream of it) can become glucose. Lactate is oxidised back to pyruvate by lactate dehydrogenase; alanine is transaminated to pyruvate; glycerol is phosphorylated and oxidised to dihydroxyacetone phosphate, which enters at the aldolase step. Acetyl CoA cannot be turned into pyruvate: the pyruvate dehydrogenase reaction is irreversible, and although acetyl CoA enters the citric acid cycle, the two carbons it contributes are balanced by the two lost as CO2 in the same turn, so oxaloacetate cannot be built up from acetyl units. Since fatty acids are degraded entirely to acetyl CoA (for even chains), fat cannot be converted into net glucose in humans, which is why the brain's glucose supply comes from carbohydrate stores and protein during fasting.",
      "approach": "Step 1: List the routes to pyruvate: lactate by reoxidation; alanine by transamination; glycerol via DHAP into the lower half of gluconeogenesis.\nStep 2: Ask the same of acetyl CoA: PDH is irreversible, so no direct route.\nStep 3: Ask about the cycle: acetyl CoA + oxaloacetate gives citrate, but two CO2 leave before oxaloacetate returns, so no net gain of four-carbon intermediate.\nStep 4: Conclusion: no net glucose from acetyl CoA or from even-chain fatty acids; odd-chain fatty acids' propionyl CoA, via succinate, is the exception.",
      "note": "McMurry 29.8 (Carbohydrate Biosynthesis: Gluconeogenesis) states that higher organisms are not able to synthesise glucose from acetyl CoA but must instead use one of the three-carbon precursors lactate, glycerol or alanine, all of which are readily converted into pyruvate, the starting point of the eleven-step pathway; the two CO2 per turn of the citric acid cycle are in McMurry 29.7, and the reoxidation of lactate to pyruvate is the reverse of the anaerobic reduction mentioned in McMurry 29.6. The propionyl CoA exception for odd-chain fatty acids is McMurry 29.3.",
      "options": {
        "A": "Correct. Acetyl CoA's carbons are oxidised away in the cycle with no net production of oxaloacetate, and pyruvate dehydrogenase cannot run backwards, so fat gives no net glucose.",
        "B": "Lactate dehydrogenase is reversible; in the liver lactate is oxidised by NAD+ back to pyruvate, and lactate from muscle is a major gluconeogenic precursor (the Cori cycle).",
        "C": "Three carbons is exactly what is needed: glycerol becomes dihydroxyacetone phosphate, a three-carbon intermediate of the pathway, and two of them make one glucose.",
        "D": "The nitrogen is removed by transamination with alpha-ketoglutarate, leaving pyruvate; alanine is one of the three precursors the text names."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q32_transamination_mechanism",
    "topic": "Catabolism of Proteins: Deamination",
    "difficulty_level": "Hard",
    "question_text": "Aminotransferases use pyridoxal phosphate (PLP) to convert an alpha-amino acid into an alpha-keto acid. What happens in the PLP half of the reaction?",
    "options": [
      {
        "option_id": "A",
        "text": "The amino acid displaces the enzyme lysine from the PLP imine (transimination); the imine tautomerises, the alpha proton being removed with the protonated pyridine ring as electron sink and a proton returned to the carbon next to the ring; hydrolysis of the new imine releases the alpha-keto acid and leaves pyridoxamine phosphate",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "PLP's aldehyde oxidises the amine to an imine while being reduced to an alcohol, and water hydrolyses the imine",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The amino acid's carboxylate attacks PLP's phosphate and the amino group is lost as ammonia",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "PLP's ring nitrogen abstracts the alpha hydrogen as a hydride and the amine is hydrolysed",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Pyridoxal phosphate is an aldehyde attached to a pyridine ring, and its trick is to turn an amino acid's alpha C-H into an acidic hydrogen. In the resting enzyme PLP is an imine with a lysine; the amino acid's NH2 adds to that imine and expels the lysine, a transimination that gives a PLP-amino acid imine. Now the alpha carbon of the amino acid is next to a C=N conjugated to the pyridinium ring, so removing the alpha proton gives a carbanion delocalised all the way onto the ring nitrogen: the ring is the electron sink. Reprotonation at the other end of that system, on the carbon attached to the ring, moves the double bond so that the nitrogen is now bonded to the former alpha carbon as a ketimine. Hydrolysis of that imine gives the alpha-keto acid and pyridoxamine phosphate (PMP). A second transamination with alpha-ketoglutarate runs the whole sequence backwards to regenerate PLP and produce glutamate.",
      "approach": "Step 1: Transimination: amino acid NH2 adds to the PLP-lysine imine C=N; the diamine intermediate expels lysine: PLP-amino acid imine (aldimine).\nStep 2: Tautomerisation: lysine (now free) removes the alpha-H; electrons flow through C=N and the ring to the pyridinium nitrogen; reprotonation at the ring-CH carbon gives the ketimine.\nStep 3: Hydrolysis: water adds to the ketimine C=N, proton transfer, and the amine (PMP) is expelled: R-CO-CO2- and PMP.\nStep 4: Regeneration: PMP + alpha-ketoglutarate go through the same steps in reverse to PLP + glutamate, so the net reaction is amino acid + alpha-ketoglutarate to keto acid + glutamate.",
      "note": "McMurry 29.9 (Catabolism of Proteins: Deamination), Figure 29.17, gives the mechanism: transimination of the PLP-enzyme imine with the alpha-amino acid by nucleophilic addition of the amino group to the C=N bond (19.8) with expulsion of the lysine, tautomerisation of the C=N bond in which the lysine deprotonates the acidic alpha position with the protonated pyridine ring as electron acceptor and reprotonation occurs on the carbon next to the ring, and hydrolysis of the PMP-alpha-keto acid imine, the reverse of imine formation; PMP is regenerated by the reverse sequence with alpha-ketoglutarate, giving glutamate. Problems 29-14 to 29-16.",
      "options": {
        "A": "Correct. Transimination, ring-assisted tautomerisation of the imine, and hydrolysis convert the amino acid into its keto acid and PLP into PMP.",
        "B": "No hydride transfer occurs and PLP's aldehyde is not reduced to an alcohol; PLP becomes pyridoxamine phosphate, an amine, by taking over the amino acid's nitrogen. The oxidation of the amino acid's alpha carbon is achieved by the proton shuffle, not by a redox cofactor.",
        "C": "The phosphate is an anchor and is never attacked, and no ammonia is released in transamination; the nitrogen is transferred to PLP (as PMP) and then to alpha-ketoglutarate to give glutamate.",
        "D": "The alpha hydrogen is removed as a proton by a base, not as a hydride, and the ring nitrogen's role is to accept electrons by resonance, not to take a hydride. The imine, not an amine, is what is hydrolysed."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch29_q33_leucine_keto_acid",
    "topic": "Catabolism of Proteins: Deamination",
    "difficulty_level": "Medium",
    "question_text": "Which alpha-keto acid is formed when leucine undergoes transamination?",
    "options": [
      {
        "option_id": "A",
        "text": "A six-carbon keto acid with a CH2 between the ketone and an isopropyl branch",
        "smiles": "CC(C)CC(=O)C(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A five-carbon keto acid with an isopropyl group directly on the ketone",
        "smiles": "CC(C)C(=O)C(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A six-carbon keto acid with a sec-butyl group directly on the ketone",
        "smiles": "CC[C@H](C)C(=O)C(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A three-carbon keto acid, a methyl on the ketone",
        "smiles": "CC(=O)C(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Transamination changes only the alpha carbon: the NH3+ it carried is replaced by a carbonyl oxygen, and every other atom of the amino acid is untouched. So the keto acid of any amino acid is found by redrawing it with C=O in place of CH(NH2). Leucine's side chain is isobutyl, CH2CH(CH3)2, so its keto acid is 4-methyl-2-oxopentanoic acid (alpha-ketoisocaproate), with the isobutyl group still attached to what is now a ketone carbon. Valine, isoleucine and alanine give the other three drawings: 3-methyl-2-oxobutanoate, (S)-3-methyl-2-oxopentanoate (the side-chain stereocentre survives) and pyruvate. The reverse reaction, reductive transamination of these keto acids with glutamate, is how the cell makes the amino acids.",
      "approach": "Step 1: Write leucine: (CH3)2CH-CH2-CH(NH3+)-CO2-.\nStep 2: Replace the alpha CH(NH3+) by C=O: (CH3)2CH-CH2-CO-CO2-.\nStep 3: Name it: 4-methyl-2-oxopentanoic acid; count six carbons, with a CH2 between the ketone and the branch.\nStep 4: Check the distractors by their side chains: isopropyl on the ketone is valine's keto acid; sec-butyl on the ketone is isoleucine's; methyl on the ketone is alanine's, pyruvate.",
      "note": "McMurry 29.9 (Catabolism of Proteins: Deamination) states that deamination is usually accomplished by a transamination in which the NH2 group of the amino acid is exchanged with the keto group of alpha-ketoglutarate, forming a new alpha-keto acid plus glutamate, and Problem 29-15 asks what alpha-keto acid is formed on transamination of leucine, with Problem 29-16 the reverse question from a drawn keto acid. The side chains are Table 26.1 in McMurry 26.1.",
      "options": {
        "A": "Correct. Leucine's isobutyl side chain stays; only the alpha carbon changes from CH(NH2) to C=O, giving 4-methyl-2-oxopentanoic acid.",
        "B": "An isopropyl group directly on the ketone carbon is 3-methyl-2-oxobutanoic acid, the keto acid of valine. Leucine's branch is one carbon further out.",
        "C": "A sec-butyl group on the ketone carbon is 3-methyl-2-oxopentanoic acid, the keto acid of isoleucine, which keeps its side-chain stereocentre. Leucine's side chain is isobutyl, not sec-butyl.",
        "D": "Pyruvic acid is the keto acid of alanine. Transamination does not shorten the chain; leucine's six carbons all remain."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  }
];
