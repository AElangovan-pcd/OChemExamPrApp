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
      "context": "This question tests the fundamentals of the Electrophilic Aromatic Substitution (EAS) mechanism.",
      "process": "Step 1: The aromatic ring attacks the electrophile, breaking aromaticity to form a resonance-stabilized arenium ion (sigma complex). The carbon under attack becomes sp3-hybridized. This endothermic step has a high activation energy and is rate-determining.\nStep 2: Rapid deprotonation by a weak base restores the aromatic pi system, which is highly exergonic.",
      "result": "The rate-determining step is electrophilic addition to form the sp3-hybridized arenium intermediate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question addresses the activation of halogens in EAS.",
      "process": "Step 1: Molecular bromine (Br2) is not electrophilic enough to react with benzene directly.\nStep 2: Coordination of Br2 to the Lewis acid FeBr3 forms a Br-Br+-Fe-Br3 complex, polarizing the Br-Br bond and making the terminal bromine atom highly electrophilic.",
      "result": "The Lewis acid catalyst polarizes the halogen molecule to generate a sufficiently active electrophile."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question covers the unique reagents required for the iodination of benzene.",
      "process": "Step 1: Iodine (I2) is the least reactive halogen and does not react with benzene under standard halogenation conditions.\nStep 2: An oxidizing agent like HNO3 or CuCl2 is required to oxidize I2 in situ, producing a highly reactive electrophile (formally I+).",
      "result": "The oxidant oxidizes I2 to generate the active I+ electrophile."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests the role of the acid catalyst in nitronium ion generation.",
      "process": "Step 1: H2SO4 is a stronger acid than HNO3 and protonates the hydroxyl group of nitric acid.\nStep 2: The protonated nitric acid intermediate (H2O+-NO2) undergoes dehydration, yielding water and the highly electrophilic nitronium ion (NO2+).",
      "result": "H2SO4 acts as a Brønsted acid catalyst to protonate and dehydrate HNO3, generating the NO2+ electrophile."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests interpretation of the kinetic isotope effect in organic mechanisms.",
      "process": "Step 1: The two steps of EAS are electrophilic addition (formation of sigma complex) and deprotonation.\nStep 2: Deprotonation requires breaking a C-H (or C-D) bond. If this occurred in the rate-determining step, a primary kinetic isotope effect (kH/kD > 1) would be observed.\nStep 3: A ratio of 1.0 indicates that C-H bond cleavage occurs after the rate-determining step.",
      "result": "The lack of isotope effect proves that electrophilic attack, not proton removal, is the rate-determining step."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question asks for the identity of the electrophile in aromatic sulfonation.",
      "process": "Step 1: Fuming sulfuric acid contains dissolved SO3 gas.\nStep 2: In SO3, the sulfur atom is highly electron-deficient due to the inductive and resonance withdrawal of the three oxygen atoms.\nStep 3: This makes the neutral SO3 molecule a potent electrophile that is directly attacked by benzene.",
      "result": "SO3 is the active electrophile in the sulfonation reaction."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests understanding of the reversibility of sulfonation.",
      "process": "Step 1: Unlike most EAS reactions, sulfonation has a free energy change close to zero.\nStep 2: Concentrated acid and SO3 drive the reaction forward. Dilute aqueous acid (excess water) and steam shift the equilibrium back toward benzene by generating and volatilizing SO3.",
      "result": "A high concentration of water in dilute acid shifts the equilibrium back to benzene by removing SO3."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q8_fc_alkylation_1chlorobutane",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Hard",
    "question_text": "When benzene is treated with 1-chlorobutane in the presence of AlCl3 at room temperature, the major product is sec-butylbenzene rather than butylbenzene. What is the mechanistic reason for this outcome?",
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
      "context": "This question covers carbocation rearrangements in Friedel-Crafts alkylations.",
      "process": "Step 1: The primary alkyl halide coordinates with AlCl3 to form a complex (CH3CH2CH2CH2-Cl+-Al-Cl3).\nStep 2: A 1,2-hydride shift occurs concertedly with the departure of AlCl4- to directly generate a stable secondary carbocation (CH3CH2C+HCH3) rather than a primary carbocation.\nStep 3: Benzene attacks this secondary carbocation, yielding sec-butylbenzene.",
      "result": "A concerted 1,2-hydride shift during the loss of AlCl4- gives the secondary carbocation, leading to sec-butylbenzene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests methyl shifts in Friedel-Crafts alkylations.",
      "process": "Step 1: Neopentyl chloride coordinates to AlCl3. Because there are no hydrogens at the C2 position, a hydride shift is impossible.\nStep 2: Instead, a 1,2-methyl shift occurs concertedly with the departure of AlCl4- to avoid forming an unstable primary carbocation.\nStep 3: This shift produces the tertiary tert-pentyl carbocation, which is then attacked by benzene.",
      "result": "A 1,2-methyl shift generates the tert-pentyl carbocation, giving tert-pentylbenzene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
        "smiles": "C1CCC(CC1)c2ccccc2",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclohexane and AlCl3",
        "smiles": "C1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Chlorobenzene and NaOH",
        "smiles": "Clc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzyl alcohol and NaBH4",
        "smiles": "OCc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question explores alternative methods for generating carbocations in EAS.",
      "process": "Step 1: Strong acids like HF or H3PO4 can protonate alkenes.\nStep 2: Protonation of cyclohexene yields the cyclohexyl carbocation.\nStep 3: This carbocation acts as the electrophile in a Friedel-Crafts alkylation with benzene to form cyclohexylbenzene.",
      "result": "Alkenes treated with strong Brønsted acids generate carbocations that can alkylate aromatic rings."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
        "smiles": "CC(C)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It acts as a strong base to deprotonate the benzene ring directly.",
        "smiles": "CCCc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It acts as a reducing agent to convert the alcohol into an alkane.",
        "smiles": "CC(C)c1ccc(cc1)C(C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It acts as an oxidant to convert the alcohol into a ketone.",
        "smiles": "CC(C)(O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the use of alcohols as alkylating agents in the presence of Lewis acids.",
      "process": "Step 1: The Lewis acid BF3 coordinates to the basic oxygen atom of 2-propanol.\nStep 2: This weakens the C-O bond, allowing the leaving group to depart and generate the isopropyl carbocation.\nStep 3: Benzene attacks the carbocation, yielding isopropylbenzene.",
      "result": "BF3 coordinates with the hydroxyl group, facilitating C-O bond cleavage to form the carbocation."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question addresses the limitation of Friedel-Crafts reactions on deactivated rings.",
      "process": "Step 1: Friedel-Crafts alkylations require relatively nucleophilic aromatic rings because the carbocation electrophiles are weak.\nStep 2: Rings containing moderately or strongly deactivating groups (e.g., -NO2, -SO3H, carbonyls) are not nucleophilic enough to react.\nStep 3: Nitrobenzene is strongly deactivated and completely unreactive in Friedel-Crafts reactions.",
      "result": "Strongly deactivated aromatic rings like nitrobenzene fail to undergo Friedel-Crafts reactions."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "This question explores the reaction of aniline with Lewis acid catalysts.",
      "process": "Step 1: The nitrogen of the amino group is a strong Lewis base.\nStep 2: It coordinates with the Lewis acid catalyst AlCl3 to form a salt-like adduct (-NH2+-Al-Cl3).\nStep 3: This adduct places a positive charge directly adjacent to the ring, converting an activating group into a strongly deactivating group, which halts the reaction.",
      "result": "Lewis acid-base complexation between the amino group and AlCl3 deactivates the ring toward Friedel-Crafts reactions."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question examines the polyalkylation limitation of Friedel-Crafts alkylations.",
      "process": "Step 1: Alkyl groups are electron-donating groups (activating substituents).\nStep 2: When benzene is monoalkylated to form isopropylbenzene, the product ring becomes more electron-rich and nucleophilic than benzene.\nStep 3: The product competes successfully with starting benzene for the electrophile, leading to polyalkylation.",
      "result": "The monoalkylated product is more reactive than the starting material, resulting in multiple alkylation products."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests the mechanism and intermediate stability in Friedel-Crafts acylation.",
      "process": "Step 1: Acetyl chloride complexes with AlCl3 and loses chloride to form the acylium ion (CH3-C+=O).\nStep 2: The acylium ion is stabilized by resonance: CH3-C+=O <-> CH3-C≡O+ (where all atoms have complete octets).\nStep 3: Because of this significant resonance stabilization, it does not rearrange.",
      "result": "The acylium ion is resonance-stabilized and does not undergo skeletal rearrangements."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question addresses the stoichiometric catalyst requirement in acylation.",
      "process": "Step 1: The product of acylation is an aryl ketone.\nStep 2: The carbonyl oxygen has lone pairs that act as a Lewis base, coordinating strongly with the Lewis acid AlCl3 catalyst.\nStep 3: This complexation traps the catalyst, meaning a full equivalent of AlCl3 is needed to ensure the reaction goes to completion.",
      "result": "Strong coordination of the product ketone with AlCl3 complexes the catalyst, requiring stoichiometric amounts."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests resonance effects of alkoxy groups on benzene.",
      "process": "Step 1: Oxygen is electronegative, causing inductive withdrawal. However, it also has lone pairs adjacent to the ring.\nStep 2: The lone pairs donate electron density into the ring through resonance, which is much stronger than the inductive effect.\nStep 3: Delocalization stabilizes the positive charge of the arenium intermediate for ortho/para attack.",
      "result": "Resonance electron donation from the oxygen lone pair activates the ring toward electrophilic attack."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests directing and activating effects of strongly electronegative groups.",
      "process": "Step 1: Fluorine is highly electronegative. The three fluorine atoms inductively polarize the C-F bonds, putting a large positive charge on the benzylic carbon.\nStep 2: This strongly withdraws electron density from the ring, deactivating it.\nStep 3: Attack at ortho/para puts the positive charge in the sigma complex adjacent to the positive benzylic carbon, which is highly unfavorable. Meta attack avoids this adjacent positive charge and is favored.",
      "result": "-CF3 is strongly deactivating and meta-directing due to powerful inductive electron withdrawal."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question explains directing effects of resonance-withdrawing groups.",
      "process": "Step 1: The cyano group is conjugated to the benzene ring. The electronegative nitrogen polarizes the pi electrons away from the ring.\nStep 2: Ortho/para attack places a positive charge directly on C1 (the ipso carbon), which is adjacent to the electron-deficient carbon of the cyano group.\nStep 3: Meta attack avoids placing the positive charge adjacent to the cyano group, making it the lower energy pathway.",
      "result": "The cyano group deactivates and directs meta due to resonance and inductive electron withdrawal."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question addresses the unique substituent effects of halogens in EAS.",
      "process": "Step 1: Halogens are highly electronegative and inductively withdraw electron density, deactivating the ring.\nStep 2: However, they possess lone pairs. In ortho/para attack, the positive charge of the arenium intermediate can be shared by the halogen through resonance, forming a stable fourth resonance contributor with a complete octet.\nStep 3: This resonance stabilization is not possible in meta attack.",
      "result": "Halogens are deactivating due to induction, but ortho/para-directing due to resonance donation."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question looks at moderation of amino group activity by acylation.",
      "process": "Step 1: Nitrogen lone pairs donate electron density to the benzene ring via resonance.\nStep 2: In acetanilide, the nitrogen lone pair is also delocalized into the carbonyl group of the amide (cross-conjugation).\nStep 3: This competing resonance reduces nitrogen lone pair donation into the benzene ring compared to aniline, lowering its reactivity.",
      "result": "Amide cross-conjugation reduces nitrogen resonance donation, moderating ring activation."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question covers the activating mechanism of alkyl groups.",
      "process": "Step 1: Alkyl groups lack lone pairs and cannot donate through resonance.\nStep 2: They donate inductively because the sp3 carbon of the methyl group is less electronegative than the sp2 ring carbons.\nStep 3: They also donate through hyperconjugation, stabilizing the adjacent positive charge in the ortho/para arenium intermediates.",
      "result": "Alkyl groups activate and direct ortho/para via inductive effects and hyperconjugation."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests directing group priorities in disubstituted benzenes.",
      "process": "Step 1: Identify substituents: -OH (strong activator) and -CH3 (weak activator).\nStep 2: The stronger activating group (-OH) dominates the directing effect.\nStep 3: The -OH group directs ortho/para. Since the para position is blocked by the methyl group, bromination occurs at the position ortho to the -OH group (C2).",
      "result": "The strong activator -OH directs bromination ortho to itself, yielding 2-bromo-4-methylphenol."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question covers steric effects in disubstituted benzenes.",
      "process": "Step 1: The two methyl groups direct ortho/para to their respective positions.\nStep 2: C2 is ortho to both methyl groups, but is highly sterically hindered.\nStep 3: C4 is ortho to C3 and para to C1, and is much less sterically hindered.\nStep 4: Electrophilic attack occurs predominantly at C4 to minimize steric strain.",
      "result": "Mononitration occurs at the less hindered C4 position, yielding 1,3-dimethyl-4-nitrobenzene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question evaluates competitive directing effects of activators and deactivators.",
      "process": "Step 1: Identify substituents: -OCH3 (strong activator, ortho/para directing) and -NO2 (strong deactivator, meta directing).\nStep 2: The strong activator (-OCH3) directs the regiochemical outcome of the reaction.\nStep 3: Methoxy directs ortho (C2/C6). Since C2 is also meta to the nitro group, both groups direct cooperatively to C2.",
      "result": "Bromination occurs ortho to the methoxy group, yielding 2-bromo-4-nitroanisole."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests EAS on rings containing multiple meta-directing groups.",
      "process": "Step 1: Identify substituents: -COOH (C1) and -NO2 (C3). Both are meta-directing deactivators.\nStep 2: The -COOH group directs meta (C5). The -NO2 group also directs meta (C5).\nStep 3: The directing effects of both substituents cooperate, leading to substitution at the C5 position.",
      "result": "Nitration occurs at the C5 position, producing 3,5-dinitrobenzoic acid."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
        "text": "A Meisenheimer complex, which is a resonance-stabilized anionic intermediate with the negative charge delocalized onto the nitro group.",
        "smiles": "Oc1ccc([N+](=O)[O-])cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A benzyne intermediate formed by elimination of HCl.",
        "smiles": "Oc1cccc([N+](=O)[O-])c1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A carbocation intermediate formed by loss of chloride before nucleophilic attack.",
        "smiles": "Clc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A radical anion intermediate formed by single-electron transfer.",
        "smiles": "Oc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests understanding of the SNAr mechanism.",
      "process": "Step 1: Hydroxide attacks the C-Cl carbon directly, forming a cyclohexadienyl anion intermediate (Meisenheimer complex).\nStep 2: The negative charge is delocalized onto the para nitro group, stabilizing the intermediate.\nStep 3: Elimination of the chloride leaving group restores aromaticity, yielding 4-nitrophenol.",
      "result": "The reaction proceeds via a resonance-stabilized anionic Meisenheimer complex."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
        "text": "Nucleophilic attack to form the Meisenheimer complex is the rate-determining step, which is accelerated by the strong inductive electron withdrawal of fluorine.",
        "smiles": "COc1ccc([N+](=O)[O-])cc1[N+](=O)[O-]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Carbon-halogen bond cleavage is the rate-determining step.",
        "smiles": "Ic1ccc([N+](=O)[O-])cc1[N+](=O)[O-]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Fluoride is a better leaving group than iodide in all polar aprotic solvents.",
        "smiles": "Oc1ccc([N+](=O)[O-])cc1[N+](=O)[O-]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The reaction proceeds through an elimination-addition mechanism via a benzyne intermediate.",
        "smiles": "Nc1ccc([N+](=O)[O-])cc1[N+](=O)[O-]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests leaving group reactivity in SNAr vs SN2.",
      "process": "Step 1: The SNAr mechanism is a two-step process: addition (RDS) then elimination (fast).\nStep 2: The rate depends on the stability of the transition state leading to the Meisenheimer complex.\nStep 3: Fluorine, being highly electronegative, stabilizes this anionic transition state inductively, making nucleophilic attack much faster. C-F bond cleavage occurs in the fast second step.",
      "result": "The rate-determining step is nucleophilic attack, accelerated by the inductive effect of fluorine."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question explores resonance requirements in SNAr reactions.",
      "process": "Step 1: In ortho/para isomers, nucleophilic attack places a negative charge on the ring carbon containing the nitro group, allowing delocalization onto oxygen.\nStep 2: In the meta isomer, drawing resonance structures of the Meisenheimer complex shows the negative charge bypasses the carbon bearing the nitro group.\nStep 3: Without direct resonance stabilization by the nitro group, the transition state energy is too high.",
      "result": "Meta substitution prevents resonance stabilization of the Meisenheimer complex by the nitro group."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
        "smiles": "Nc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A Meisenheimer complex",
        "smiles": "Oc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A phenyl carbocation",
        "smiles": "Clc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A radical anion",
        "smiles": "NC(=O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question identifies the benzyne mechanism in NAS.",
      "process": "Step 1: NaNH2 is an extremely strong base and deprotonates the ortho-hydrogen of chlorobenzene.\nStep 2: Elimination of chloride yields the highly reactive benzyne intermediate.\nStep 3: Ammonia/amide then attacks the triple bond of benzyne to yield aniline.",
      "result": "The reaction proceeds via an elimination-addition mechanism involving a benzyne intermediate."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests the regiochemical outcome of additions to benzyne intermediates.",
      "process": "Step 1: Deprotonation of C3 of 4-bromotoluene followed by bromide loss gives 4-methylbenzyne (with a triple bond between C3 and C4).\nStep 2: The nucleophile (NH2-) can attack either sp carbon (C3 or C4) of this relatively symmetric triple bond.\nStep 3: Attack at C3 yields 3-methylaniline; attack at C4 yields 4-methylaniline, resulting in a 1:1 ratio.",
      "result": "Attack at either carbon of the 4-methylbenzyne intermediate yields a 1:1 mixture of meta- and para-isomers."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question examines the electronic effects of substituents on benzyne regiochemistry.",
      "process": "Step 1: Elimination of HBr yields benzyne intermediates (2,3- and 3,4-dehydroanisole).\nStep 2: Nucleophilic attack by NH2- on these intermediates creates a carbanion in the ring.\nStep 3: The methoxy group (-OCH3) is inductively electron-withdrawing. Attack at C3 placing the negative charge closer to the methoxy carbon is favored due to inductive stabilization.",
      "result": "Inductive stabilization of the carbanion by the methoxy group directs the nucleophile to C3."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests the trapping of benzyne intermediates using the Diels-Alder reaction.",
      "process": "Step 1: Magnesium reacts with 1-bromo-2-fluorobenzene to form a Grignard-like species, which eliminates MgFBr to form benzyne.\nStep 2: Benzyne acts as a highly reactive dienophile.\nStep 3: Furan acts as the diene, undergoing a [4+2] cycloaddition to yield 1,4-epoxy-1,4-dihydronaphthalene.",
      "result": "Benzyne undergoes a Diels-Alder reaction with furan to yield a bridged bicyclic adduct."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests selective radical bromination at the benzylic position.",
      "process": "Step 1: Radical initiation generates bromine radicals.\nStep 2: A bromine radical abstracts a hydrogen from ethylbenzene. Abstraction occurs selectively at the benzylic position because the intermediate radical is stabilized by resonance with the benzene ring.\nStep 3: The benzylic radical reacts with Br2 to yield (1-bromoethyl)benzene.",
      "result": "Radical bromination occurs selectively at the benzylic carbon, yielding (1-bromoethyl)benzene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question evaluates the stability of radicals involved in benzylic halogenation.",
      "process": "Step 1: The benzyl radical has its unpaired electron on a carbon adjacent to the ring.\nStep 2: This electron is delocalized throughout the ring's pi system, providing stabilization.\nStep 3: The phenyl radical is much less stable because the unpaired electron resides in an sp2 orbital that cannot overlap with the ring's pi system.",
      "result": "Delocalization of the unpaired electron makes the benzyl radical highly stable."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests the oxidation of alkylbenzene side chains.",
      "process": "Step 1: KMnO4 oxidizes alkyl side chains that contain at least one benzylic hydrogen.\nStep 2: Regardless of the alkyl chain length, the side chain is cleaved, and the benzylic carbon is oxidized to a carboxylic acid group (-COOH).\nStep 3: Propylbenzene contains benzylic hydrogens and is therefore oxidized to benzoic acid.",
      "result": "Oxidation of propylbenzene leads to side-chain cleavage, yielding benzoic acid."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question covers the requirement of benzylic hydrogens for side-chain oxidation.",
      "process": "Step 1: Oxidation of alkylbenzenes by KMnO4 requires a benzylic C-H bond for the mechanism to initiate.\nStep 2: tert-Butylbenzene has a quaternary benzylic carbon and lacks benzylic hydrogens.\nStep 3: Thus, it is completely resistant to permanganate oxidation.",
      "result": "No reaction occurs due to the absence of benzylic hydrogens."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q38_sidechain_nitro_reduction",
    "topic": "Reactions of Alkylbenzene Side Chains",
    "difficulty_level": "Easy",
    "question_text": "Which of the following reaction conditions will successfully reduce nitrobenzene to aniline?",
    "question_smiles": "O=[N+]([O-])c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Fe in dilute HCl, followed by treatment with NaOH",
        "smiles": "Nc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "LiAlH4 in ether, followed by water",
        "smiles": "N(=Nc1ccccc1)c2ccccc2",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "NaBH4 in methanol",
        "smiles": "O=[N+]([O-])c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Zn(Hg) in concentrated HCl",
        "smiles": "Nc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question covers the reduction of nitro groups to amines.",
      "process": "Step 1: Aromatic nitro groups can be reduced using active metals (like Fe, Sn, or Zn) in acidic solutions.\nStep 2: The acidic solution forms anilinium chloride, which must be neutralized with a base like NaOH to yield free aniline.\nStep 3: LiAlH4 reduces nitrobenzene to azobenzene, and NaBH4 does not reduce nitro groups.",
      "result": "Treatment with Fe/HCl followed by base workup reduces the nitro group to an amine."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests the Clemmensen reduction of aryl ketones.",
      "process": "Step 1: The Clemmensen reduction uses Zn(Hg) in concentrated HCl to reduce ketones and aldehydes to hydrocarbons.\nStep 2: Under these acidic conditions, the carbonyl group (C=O) of acetophenone is reduced to a methylene group (CH2).\nStep 3: This yields ethylbenzene.",
      "result": "The Clemmensen reduction converts acetophenone to ethylbenzene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests the Wolff-Kishner reduction conditions and thermodynamics.",
      "process": "Step 1: The ketone reacts with hydrazine (H2NNH2) to form a hydrazone intermediate.\nStep 2: Under strongly basic conditions (KOH) at high temperatures, the hydrazone is deprotonated.\nStep 3: The loss of stable nitrogen gas (N2) drives the reaction to completion, yielding the alkylbenzene.",
      "result": "Wolff-Kishner reduction uses hydrazine and base to reduce ketones, releasing nitrogen gas."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question explains the hydrogenolysis of benzylic carbonyl groups.",
      "process": "Step 1: Hydrogenation of an aryl ketone with H2 over Pd/C first reduces the ketone to a benzylic alcohol.\nStep 2: The benzylic C-O bond is activated by conjugation with the aromatic ring, making it weak and susceptible to further reduction (hydrogenolysis) to form a CH2 group.\nStep 3: Aliphatic ketones lack this benzylic activation and are reduced only to alcohols.",
      "result": "Aryl ketones are reduced to alkyl groups using H2 and Pd/C due to benzylic hydrogenolysis."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests synthesis planning and the ordering of directing groups.",
      "process": "Step 1: The starting material is toluene, containing a methyl group (ortho/para director).\nStep 2: The target compound has a meta relationship between the substituents.\nStep 3: To obtain the meta relationship, the methyl group must first be oxidized to a carboxylic acid (-COOH), which is meta-directing. Subsequent bromination will occur meta to the acid.",
      "result": "Oxidation of the methyl group followed by bromination yields the desired meta isomer."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests synthetic design where an ortho/para relationship is required.",
      "process": "Step 1: Toluene has an ortho/para-directing methyl group.\nStep 2: To obtain the para-isomer, the ring must be brominated first while the methyl group is still present.\nStep 3: After bromination (and separation of isomers), the methyl group is oxidized to the carboxylic acid group, yielding para-bromobenzoic acid.",
      "result": "Bromination of toluene followed by side-chain oxidation yields the para isomer."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests multi-step synthesis involving ketone reduction and nitration.",
      "process": "Step 1: Direct alkylation with 1-chlorobutane would cause carbocation rearrangement, so acylation is preferred.\nStep 2: Acylation with butanoyl chloride yields butyrophenone. The carbonyl is a meta-director.\nStep 3: Nitration occurs meta to the carbonyl. Subsequently, Clemmensen reduction (Zn(Hg)/HCl) reduces the ketone to an alkyl group without reducing the nitro group.",
      "result": "Acylation followed by nitration and Clemmensen reduction yields 1-butyl-3-nitrobenzene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question focuses on synthesizing a para-substituted alkylbenzene.",
      "process": "Step 1: Acylation with butanoyl chloride avoids alkyl rearrangement.\nStep 2: The ketone carbonyl must be reduced to the butyl group (ortho/para director) before nitration to ensure para direction.\nStep 3: Nitration of butylbenzene then yields the para-isomer as the major product.",
      "result": "Acylation, reduction to the alkylbenzene, and nitration yields 1-butyl-4-nitrobenzene."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests intramolecular Friedel-Crafts acylation.",
      "process": "Step 1: The acyl chloride group reacts with AlCl3 to form an intramolecular acylium ion.\nStep 2: The acylium ion is separated from the phenyl ring by a 3-carbon linker.\nStep 3: Intramolecular attack of the benzene ring onto the acylium ion forms a stable six-membered ring, yielding 1-tetralone.",
      "result": "Intramolecular acylation of 4-phenylbutanoyl chloride yields 1-tetralone."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q47_naphthalene_eas",
    "topic": "EAS on Polycyclic Aromatic Hydrocarbons",
    "difficulty_level": "Hard",
    "question_text": "When naphthalene undergoes electrophilic aromatic substitution, substitution occurs predominantly at the alpha-position (C1) rather than the beta-position (C2). What is the thermodynamic/resonance explanation for this preference?",
    "question_smiles": "c1ccc2ccccc2c1",
    "options": [
      {
        "option_id": "A",
        "text": "The arenium intermediate for alpha-attack has more resonance structures that preserve a fully intact benzene ring compared to the intermediate for beta-attack.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The beta-position is sterically blocked by the peri-hydrogens.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The alpha-position is more electronegative than the beta-position.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Substitution at the beta-position is reversible, whereas alpha-substitution is irreversible.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question covers regiochemistry in polycyclic aromatic systems.",
      "process": "Step 1: Draw the arenium intermediates for attack at C1 (alpha) and C2 (beta).\nStep 2: C1 attack yields an intermediate with 2 resonance structures where the second ring remains a fully intact benzene ring.\nStep 3: C2 attack has only 1 resonance structure where the second ring remains fully aromatic. Since preserving aromaticity is highly stabilizing, C1 attack has a lower activation energy.",
      "result": "Substitution occurs at the alpha-position because the corresponding intermediate preserves aromaticity in the adjacent ring better."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q48_pyrrole_pyridine_reactivity",
    "topic": "EAS on Heteroaromatic Compounds",
    "difficulty_level": "Hard",
    "question_text": "How do pyrrole and pyridine compare to benzene in terms of their reactivity toward electrophilic aromatic substitution, and what is the primary reason for this difference?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Pyrrole is more reactive than benzene because the nitrogen lone pair is delocalized into the pi system; pyridine is less reactive because the electronegative nitrogen atom withdraws electron density.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Pyridine is more reactive than benzene because the nitrogen atom is highly basic.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Pyrrole is less reactive than benzene because it is a 5-membered ring and has less resonance energy.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both pyrrole and pyridine are more reactive than benzene because they contain nitrogen.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question evaluates the nucleophilicity of heteroaromatic rings.",
      "process": "Step 1: Pyrrole is a five-membered ring with 6 pi electrons. The nitrogen lone pair is part of the aromatic system, making the ring electron-rich.\nStep 2: Pyridine is a six-membered ring where the electronegative nitrogen atom withdraws electron density inductively and through resonance, making it electron-deficient.",
      "result": "Pyrrole is highly reactive (electron-rich), while pyridine is deactivated (electron-deficient)."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question covers the conversion of unactivated aryl halides to amines.",
      "process": "Step 1: Bromobenzene does not contain activating groups for addition-elimination (SNAr).\nStep 2: Treatment with the extremely strong base NaNH2 in liquid ammonia generates a benzyne intermediate.\nStep 3: Addition of ammonia to the benzyne intermediate yields aniline, which is a nucleophilic aromatic substitution.",
      "result": "Aniline is formed from bromobenzene via a benzyne intermediate in a nucleophilic aromatic substitution."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "This question tests sulfonation of toluene and nomenclature.",
      "process": "Step 1: The methyl group in toluene is ortho/para-directing.\nStep 2: Sulfonation is steric-sensitive, making the para product the major isomer.\nStep 3: The parent is benzenesulfonic acid, giving 4-methylbenzenesulfonic acid.",
      "result": "Toluene undergoes sulfonation to yield 4-methylbenzenesulfonic acid, showing ortho/para direction."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
        "correctAnswer": "Ortho/Para Directing - Activator"
      },
      {
        "smiles": "Cc1ccccc1",
        "correctAnswer": "Ortho/Para Directing - Weak Activator"
      },
      {
        "smiles": "O=[N+]([O-])c1ccccc1",
        "correctAnswer": "Meta Directing - Deactivator"
      },
      {
        "smiles": "Clc1ccccc1",
        "correctAnswer": "Ortho/Para Directing - Deactivator"
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
      "context": "Predicting directing effects of substituents on a benzene ring.",
      "process": "Phenol (-OH) donates electrons by resonance: strong o/p activator. Toluene (-CH3) donates via hyperconjugation: weak o/p activator. Nitrobenzene (-NO2) is highly electron-withdrawing: m deactivator. Chlorobenzene (-Cl) has competing induction vs resonance: o/p deactivator.",
      "result": "Substituents matched to directing effects."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q6",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "[N+](=O)([O-])c1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "Nc1ccccc1",
          "label": "Compound C",
          "x": 3,
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
          "reagents": "Fe, HCl"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: benzenesulfonic acid, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: benzene, B: nitrobenzene, C: aniline",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: benzene, B: chlorobenzene, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: toluene, B: nitrobenzene, C: phenol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: nitrobenzene, C: aniline.",
      "result": "The labels correspond to A: benzene, B: nitrobenzene, C: aniline."
    },
    "key_status": "verified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q9",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "[N+](=O)([O-])c1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "Nc1ccccc1",
          "label": "Compound C",
          "x": 3,
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
          "reagents": "Fe, HCl"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: benzenesulfonic acid, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: benzene, B: nitrobenzene, C: aniline",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: toluene, B: nitrobenzene, C: phenol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: benzene, B: chlorobenzene, C: aniline",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: nitrobenzene, C: aniline.",
      "result": "The labels correspond to A: benzene, B: nitrobenzene, C: aniline."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q11",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "[N+](=O)([O-])c1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "Nc1ccccc1",
          "label": "Compound C",
          "x": 3,
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
          "reagents": "Fe, HCl"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: nitrobenzene, C: aniline",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: toluene, B: nitrobenzene, C: phenol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: benzene, B: benzenesulfonic acid, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: benzene, B: chlorobenzene, C: aniline",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: nitrobenzene, C: aniline.",
      "result": "The labels correspond to A: benzene, B: nitrobenzene, C: aniline."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q13",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "[N+](=O)([O-])c1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "Nc1ccccc1",
          "label": "Compound C",
          "x": 3,
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
          "reagents": "Fe, HCl"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: nitrobenzene, C: aniline",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: toluene, B: nitrobenzene, C: phenol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: benzene, B: chlorobenzene, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: benzene, B: benzenesulfonic acid, C: aniline",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: nitrobenzene, C: aniline.",
      "result": "The labels correspond to A: benzene, B: nitrobenzene, C: aniline."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q27",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "[N+](=O)([O-])c1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "Nc1ccccc1",
          "label": "Compound C",
          "x": 3,
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
          "reagents": "Fe, HCl"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: chlorobenzene, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: benzene, B: benzenesulfonic acid, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: benzene, B: nitrobenzene, C: aniline",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: toluene, B: nitrobenzene, C: phenol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: nitrobenzene, C: aniline.",
      "result": "The labels correspond to A: benzene, B: nitrobenzene, C: aniline."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q29",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "[N+](=O)([O-])c1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "Nc1ccccc1",
          "label": "Compound C",
          "x": 3,
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
          "reagents": "Fe, HCl"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: chlorobenzene, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: benzene, B: nitrobenzene, C: aniline",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: benzene, B: benzenesulfonic acid, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: toluene, B: nitrobenzene, C: phenol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: nitrobenzene, C: aniline.",
      "result": "The labels correspond to A: benzene, B: nitrobenzene, C: aniline."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q44",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "[N+](=O)([O-])c1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "Nc1ccccc1",
          "label": "Compound C",
          "x": 3,
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
          "reagents": "Fe, HCl"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: benzenesulfonic acid, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: toluene, B: nitrobenzene, C: phenol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: benzene, B: chlorobenzene, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: benzene, B: nitrobenzene, C: aniline",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: nitrobenzene, C: aniline.",
      "result": "The labels correspond to A: benzene, B: nitrobenzene, C: aniline."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q56",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "[N+](=O)([O-])c1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "Nc1ccccc1",
          "label": "Compound C",
          "x": 3,
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
          "reagents": "Fe, HCl"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: toluene, B: nitrobenzene, C: phenol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: benzene, B: benzenesulfonic acid, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: benzene, B: chlorobenzene, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: benzene, B: nitrobenzene, C: aniline",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: nitrobenzene, C: aniline.",
      "result": "The labels correspond to A: benzene, B: nitrobenzene, C: aniline."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q65",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "[N+](=O)([O-])c1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "Nc1ccccc1",
          "label": "Compound C",
          "x": 3,
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
          "reagents": "Fe, HCl"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: benzenesulfonic acid, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: benzene, B: chlorobenzene, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: toluene, B: nitrobenzene, C: phenol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: benzene, B: nitrobenzene, C: aniline",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: nitrobenzene, C: aniline.",
      "result": "The labels correspond to A: benzene, B: nitrobenzene, C: aniline."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q67",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "[N+](=O)([O-])c1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "Nc1ccccc1",
          "label": "Compound C",
          "x": 3,
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
          "reagents": "Fe, HCl"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: chlorobenzene, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: benzene, B: benzenesulfonic acid, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: toluene, B: nitrobenzene, C: phenol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: benzene, B: nitrobenzene, C: aniline",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: nitrobenzene, C: aniline.",
      "result": "The labels correspond to A: benzene, B: nitrobenzene, C: aniline."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q77",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "[N+](=O)([O-])c1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "Nc1ccccc1",
          "label": "Compound C",
          "x": 3,
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
          "reagents": "Fe, HCl"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: toluene, B: nitrobenzene, C: phenol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: benzene, B: nitrobenzene, C: aniline",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: benzene, B: benzenesulfonic acid, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: benzene, B: chlorobenzene, C: aniline",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: nitrobenzene, C: aniline.",
      "result": "The labels correspond to A: benzene, B: nitrobenzene, C: aniline."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q1",
    "topic": "Aromatic Halogenation",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "Br2, FeBr3",
      "conditions": "dark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "COCC",
        "smiles": "COCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Aromatic Halogenation.",
      "process": "Electrophilic bromination of benzene yields bromobenzene.",
      "result": "The product is Brc1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q2",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "SO3, H2SO4",
      "conditions": "heat",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCC=O",
        "smiles": "CCC=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(C#N)C",
        "smiles": "CC(C#N)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(C)=O",
        "smiles": "CC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Sulfonation of benzene yields benzenesulfonic acid.",
      "result": "The product is OS(=O)(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q3",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "SO3, H2SO4",
      "conditions": "heat",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC1OC1",
        "smiles": "CC1OC1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "CC(O)c1ccccc1",
        "smiles": "CC(O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Sulfonation of benzene yields benzenesulfonic acid.",
      "result": "The product is OS(=O)(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q4",
    "topic": "Aromatic Halogenation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "Br2, FeBr3",
      "conditions": "dark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(Br)(C)C",
        "smiles": "CC(Br)(C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC=C",
        "smiles": "CC=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Aromatic Halogenation.",
      "process": "Electrophilic bromination of benzene yields bromobenzene.",
      "result": "The product is Brc1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q5",
    "topic": "Friedel-Crafts Acylation",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(=O)Cl, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC(O)c1ccccc1",
        "smiles": "CC(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(C)(O)C",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Acylation.",
      "process": "Friedel-Crafts acylation of benzene with acetyl chloride yields acetophenone.",
      "result": "The product is CC(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q6_2",
    "topic": "Aromatic Halogenation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "Br2, FeBr3",
      "conditions": "dark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "O=CC1CC=CCC1",
        "smiles": "O=CC1CC=CCC1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC1OC1",
        "smiles": "CC1OC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "C1CC=CCC1",
        "smiles": "C1CC=CCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Aromatic Halogenation.",
      "process": "Electrophilic bromination of benzene yields bromobenzene.",
      "result": "The product is Brc1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q7",
    "topic": "Aromatic Halogenation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "Br2, FeBr3",
      "conditions": "dark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCCBr",
        "smiles": "CCCBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Aromatic Halogenation.",
      "process": "Electrophilic bromination of benzene yields bromobenzene.",
      "result": "The product is Brc1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q8",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(Cl)C, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCO",
        "smiles": "CCO",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC1OC1",
        "smiles": "CC1OC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "C1CC=CCC1",
        "smiles": "C1CC=CCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Alkylation.",
      "process": "Friedel-Crafts alkylation of benzene with isopropyl chloride yields isopropylbenzene (cumene).",
      "result": "The product is CC(C)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q9_2",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "HNO3, H2SO4",
      "conditions": "50 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CCC",
        "smiles": "CCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "C(Br)CBr",
        "smiles": "C(Br)CBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Nitration of benzene yields nitrobenzene.",
      "result": "The product is [N+](=O)([O-])c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q10",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "HNO3, H2SO4",
      "conditions": "50 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "O=CC1CC=CCC1",
        "smiles": "O=CC1CC=CCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(C#N)C",
        "smiles": "CC(C#N)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CCC(=O)O",
        "smiles": "CCC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Nitration of benzene yields nitrobenzene.",
      "result": "The product is [N+](=O)([O-])c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q11_2",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "HNO3, H2SO4",
      "conditions": "50 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC=C",
        "smiles": "CC=C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "C(Br)CBr",
        "smiles": "C(Br)CBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "C1CC=CCC1",
        "smiles": "C1CC=CCC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Nitration of benzene yields nitrobenzene.",
      "result": "The product is [N+](=O)([O-])c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q12",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "SO3, H2SO4",
      "conditions": "heat",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCO",
        "smiles": "CCO",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(C)(O)C",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCCO",
        "smiles": "CCCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Sulfonation of benzene yields benzenesulfonic acid.",
      "result": "The product is OS(=O)(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q13_2",
    "topic": "Aromatic Halogenation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "Br2, FeBr3",
      "conditions": "dark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "COCC",
        "smiles": "COCC",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC=C",
        "smiles": "CC=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(C)(O)C",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Aromatic Halogenation.",
      "process": "Electrophilic bromination of benzene yields bromobenzene.",
      "result": "The product is Brc1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q14",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "SO3, H2SO4",
      "conditions": "heat",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "O=CC1CC=CCC1",
        "smiles": "O=CC1CC=CCC1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC(C#N)C",
        "smiles": "CC(C#N)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(O)c1ccccc1",
        "smiles": "CC(O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Sulfonation of benzene yields benzenesulfonic acid.",
      "result": "The product is OS(=O)(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q15",
    "topic": "Aromatic Halogenation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "Br2, FeBr3",
      "conditions": "dark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(C#N)C",
        "smiles": "CC(C#N)C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CCC",
        "smiles": "CCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Aromatic Halogenation.",
      "process": "Electrophilic bromination of benzene yields bromobenzene.",
      "result": "The product is Brc1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q16",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(Cl)C, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(Br)C(Br)",
        "smiles": "CC(Br)C(Br)",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(O)CC=O",
        "smiles": "CC(O)CC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "COCC",
        "smiles": "COCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Alkylation.",
      "process": "Friedel-Crafts alkylation of benzene with isopropyl chloride yields isopropylbenzene (cumene).",
      "result": "The product is CC(C)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q17",
    "topic": "Friedel-Crafts Acylation",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(=O)Cl, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC=C",
        "smiles": "CC=C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CCO",
        "smiles": "CCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "CC(Br)(C)C",
        "smiles": "CC(Br)(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Acylation.",
      "process": "Friedel-Crafts acylation of benzene with acetyl chloride yields acetophenone.",
      "result": "The product is CC(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q18",
    "topic": "Friedel-Crafts Acylation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(=O)Cl, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "C1CC=CCC1",
        "smiles": "C1CC=CCC1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(O)C(Br)",
        "smiles": "CC(O)C(Br)",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Acylation.",
      "process": "Friedel-Crafts acylation of benzene with acetyl chloride yields acetophenone.",
      "result": "The product is CC(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q19",
    "topic": "Friedel-Crafts Acylation",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(=O)Cl, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC1OC1",
        "smiles": "CC1OC1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CCCBr",
        "smiles": "CCCBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(C#N)C",
        "smiles": "CC(C#N)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Acylation.",
      "process": "Friedel-Crafts acylation of benzene with acetyl chloride yields acetophenone.",
      "result": "The product is CC(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q20",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "HNO3, H2SO4",
      "conditions": "50 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC=O",
        "smiles": "CC=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(O)C(Br)",
        "smiles": "CC(O)C(Br)",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC=C",
        "smiles": "CC=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Nitration of benzene yields nitrobenzene.",
      "result": "The product is [N+](=O)([O-])c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q21",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "HNO3, H2SO4",
      "conditions": "50 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CC=C",
        "smiles": "CC=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC1OC1",
        "smiles": "CC1OC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Nitration of benzene yields nitrobenzene.",
      "result": "The product is [N+](=O)([O-])c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q22",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(Cl)C, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCC(=O)O",
        "smiles": "CCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC(O)c1ccccc1",
        "smiles": "CC(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CCCO",
        "smiles": "CCCO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Alkylation.",
      "process": "Friedel-Crafts alkylation of benzene with isopropyl chloride yields isopropylbenzene (cumene).",
      "result": "The product is CC(C)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q23",
    "topic": "Aromatic Halogenation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "Br2, FeBr3",
      "conditions": "dark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCC=O",
        "smiles": "CCC=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Aromatic Halogenation.",
      "process": "Electrophilic bromination of benzene yields bromobenzene.",
      "result": "The product is Brc1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q24",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "HNO3, H2SO4",
      "conditions": "50 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC=O",
        "smiles": "CC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Nitration of benzene yields nitrobenzene.",
      "result": "The product is [N+](=O)([O-])c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q25",
    "topic": "Friedel-Crafts Acylation",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(=O)Cl, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(O)c1ccccc1",
        "smiles": "CC(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(Br)(C)C",
        "smiles": "CC(Br)(C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Acylation.",
      "process": "Friedel-Crafts acylation of benzene with acetyl chloride yields acetophenone.",
      "result": "The product is CC(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q26",
    "topic": "Friedel-Crafts Acylation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(=O)Cl, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CCC=O",
        "smiles": "CCC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(C)(O)C",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Acylation.",
      "process": "Friedel-Crafts acylation of benzene with acetyl chloride yields acetophenone.",
      "result": "The product is CC(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q27_2",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "HNO3, H2SO4",
      "conditions": "50 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CCC=O",
        "smiles": "CCC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC=C",
        "smiles": "CC=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Nitration of benzene yields nitrobenzene.",
      "result": "The product is [N+](=O)([O-])c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q28",
    "topic": "Aromatic Halogenation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "Br2, FeBr3",
      "conditions": "dark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CCCBr",
        "smiles": "CCCBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCO",
        "smiles": "CCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Aromatic Halogenation.",
      "process": "Electrophilic bromination of benzene yields bromobenzene.",
      "result": "The product is Brc1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q29_2",
    "topic": "Friedel-Crafts Acylation",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(=O)Cl, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "COCC",
        "smiles": "COCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "CCCBr",
        "smiles": "CCCBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Acylation.",
      "process": "Friedel-Crafts acylation of benzene with acetyl chloride yields acetophenone.",
      "result": "The product is CC(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q30",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "HNO3, H2SO4",
      "conditions": "50 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "C(Br)CBr",
        "smiles": "C(Br)CBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(C)=O",
        "smiles": "CC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Nitration of benzene yields nitrobenzene.",
      "result": "The product is [N+](=O)([O-])c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q31",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "HNO3, H2SO4",
      "conditions": "50 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CCC=O",
        "smiles": "CCC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Nitration of benzene yields nitrobenzene.",
      "result": "The product is [N+](=O)([O-])c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q32",
    "topic": "Friedel-Crafts Acylation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(=O)Cl, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCC=O",
        "smiles": "CCC=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "CCO",
        "smiles": "CCO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Acylation.",
      "process": "Friedel-Crafts acylation of benzene with acetyl chloride yields acetophenone.",
      "result": "The product is CC(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q33",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "HNO3, H2SO4",
      "conditions": "50 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC=C",
        "smiles": "CC=C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "CC(C)=O",
        "smiles": "CC(C)=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Nitration of benzene yields nitrobenzene.",
      "result": "The product is [N+](=O)([O-])c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q34",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(Cl)C, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CCC=O",
        "smiles": "CCC=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CCC",
        "smiles": "CCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Alkylation.",
      "process": "Friedel-Crafts alkylation of benzene with isopropyl chloride yields isopropylbenzene (cumene).",
      "result": "The product is CC(C)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q35",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "SO3, H2SO4",
      "conditions": "heat",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "C1CC=CCC1",
        "smiles": "C1CC=CCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCC=O",
        "smiles": "CCC=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(O)C",
        "smiles": "CC(O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Sulfonation of benzene yields benzenesulfonic acid.",
      "result": "The product is OS(=O)(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q36",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(Cl)C, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCO",
        "smiles": "CCO",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(C)=O",
        "smiles": "CC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Alkylation.",
      "process": "Friedel-Crafts alkylation of benzene with isopropyl chloride yields isopropylbenzene (cumene).",
      "result": "The product is CC(C)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q37",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "SO3, H2SO4",
      "conditions": "heat",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "CCCBr",
        "smiles": "CCCBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Sulfonation of benzene yields benzenesulfonic acid.",
      "result": "The product is OS(=O)(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q38",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(Cl)C, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCCO",
        "smiles": "CCCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC1OC1",
        "smiles": "CC1OC1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Alkylation.",
      "process": "Friedel-Crafts alkylation of benzene with isopropyl chloride yields isopropylbenzene (cumene).",
      "result": "The product is CC(C)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q39",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "HNO3, H2SO4",
      "conditions": "50 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CC1OC1",
        "smiles": "CC1OC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCC(=O)O",
        "smiles": "CCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Nitration of benzene yields nitrobenzene.",
      "result": "The product is [N+](=O)([O-])c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q40",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "SO3, H2SO4",
      "conditions": "heat",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(Br)C(Br)",
        "smiles": "CC(Br)C(Br)",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(O)c1ccccc1",
        "smiles": "CC(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "COCC",
        "smiles": "COCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Sulfonation of benzene yields benzenesulfonic acid.",
      "result": "The product is OS(=O)(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q41",
    "topic": "Friedel-Crafts Acylation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(=O)Cl, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(Br)C(Br)",
        "smiles": "CC(Br)C(Br)",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Acylation.",
      "process": "Friedel-Crafts acylation of benzene with acetyl chloride yields acetophenone.",
      "result": "The product is CC(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q42",
    "topic": "Friedel-Crafts Acylation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(=O)Cl, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCC=O",
        "smiles": "CCC=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(O)CC=O",
        "smiles": "CC(O)CC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCCO",
        "smiles": "CCCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Acylation.",
      "process": "Friedel-Crafts acylation of benzene with acetyl chloride yields acetophenone.",
      "result": "The product is CC(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q43",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "SO3, H2SO4",
      "conditions": "heat",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "COCC",
        "smiles": "COCC",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC(O)c1ccccc1",
        "smiles": "CC(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(C)=C",
        "smiles": "CC(C)=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Sulfonation of benzene yields benzenesulfonic acid.",
      "result": "The product is OS(=O)(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q44_2",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "SO3, H2SO4",
      "conditions": "heat",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(C)=O",
        "smiles": "CC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "C(Br)CBr",
        "smiles": "C(Br)CBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC=O",
        "smiles": "CC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Sulfonation of benzene yields benzenesulfonic acid.",
      "result": "The product is OS(=O)(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q45",
    "topic": "Aromatic Halogenation",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "Br2, FeBr3",
      "conditions": "dark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(Br)C(Br)",
        "smiles": "CC(Br)C(Br)",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(O)C",
        "smiles": "CC(O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC=O",
        "smiles": "CC=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Aromatic Halogenation.",
      "process": "Electrophilic bromination of benzene yields bromobenzene.",
      "result": "The product is Brc1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q46",
    "topic": "Friedel-Crafts Acylation",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(=O)Cl, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC1OC1",
        "smiles": "CC1OC1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC(Br)(C)C",
        "smiles": "CC(Br)(C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CCC",
        "smiles": "CCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Acylation.",
      "process": "Friedel-Crafts acylation of benzene with acetyl chloride yields acetophenone.",
      "result": "The product is CC(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q47",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(Cl)C, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(C#N)C",
        "smiles": "CC(C#N)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Alkylation.",
      "process": "Friedel-Crafts alkylation of benzene with isopropyl chloride yields isopropylbenzene (cumene).",
      "result": "The product is CC(C)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q48",
    "topic": "Friedel-Crafts Acylation",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(=O)Cl, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CC(C)=O",
        "smiles": "CC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC1OC1",
        "smiles": "CC1OC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC=O",
        "smiles": "CC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Acylation.",
      "process": "Friedel-Crafts acylation of benzene with acetyl chloride yields acetophenone.",
      "result": "The product is CC(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q49",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "HNO3, H2SO4",
      "conditions": "50 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "C(Br)CBr",
        "smiles": "C(Br)CBr",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC(O)c1ccccc1",
        "smiles": "CC(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Nitration of benzene yields nitrobenzene.",
      "result": "The product is [N+](=O)([O-])c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q50",
    "topic": "Friedel-Crafts Acylation",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(=O)Cl, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "C(Br)CBr",
        "smiles": "C(Br)CBr",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC1OC1",
        "smiles": "CC1OC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "CC(O)CC=O",
        "smiles": "CC(O)CC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Acylation.",
      "process": "Friedel-Crafts acylation of benzene with acetyl chloride yields acetophenone.",
      "result": "The product is CC(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q51",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "SO3, H2SO4",
      "conditions": "heat",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "O=CC1CC=CCC1",
        "smiles": "O=CC1CC=CCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCCBr",
        "smiles": "CCCBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(C)=O",
        "smiles": "CC(C)=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Sulfonation of benzene yields benzenesulfonic acid.",
      "result": "The product is OS(=O)(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q52",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "HNO3, H2SO4",
      "conditions": "50 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC1OC1",
        "smiles": "CC1OC1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CCC(=O)O",
        "smiles": "CCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC=C",
        "smiles": "CC=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Nitration of benzene yields nitrobenzene.",
      "result": "The product is [N+](=O)([O-])c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q53",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(Cl)C, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCCBr",
        "smiles": "CCCBr",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCC=O",
        "smiles": "CCC=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Alkylation.",
      "process": "Friedel-Crafts alkylation of benzene with isopropyl chloride yields isopropylbenzene (cumene).",
      "result": "The product is CC(C)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q54",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(Cl)C, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(O)C",
        "smiles": "CC(O)C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(O)CC=O",
        "smiles": "CC(O)CC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Alkylation.",
      "process": "Friedel-Crafts alkylation of benzene with isopropyl chloride yields isopropylbenzene (cumene).",
      "result": "The product is CC(C)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q55",
    "topic": "Friedel-Crafts Acylation",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(=O)Cl, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CC(Br)C(Br)",
        "smiles": "CC(Br)C(Br)",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(C)(O)C",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(O)C",
        "smiles": "CC(O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Acylation.",
      "process": "Friedel-Crafts acylation of benzene with acetyl chloride yields acetophenone.",
      "result": "The product is CC(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q56_2",
    "topic": "Friedel-Crafts Acylation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(=O)Cl, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCO",
        "smiles": "CCO",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(C)=C",
        "smiles": "CC(C)=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Acylation.",
      "process": "Friedel-Crafts acylation of benzene with acetyl chloride yields acetophenone.",
      "result": "The product is CC(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q57",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "HNO3, H2SO4",
      "conditions": "50 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCO",
        "smiles": "CCO",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "CC(C)=C",
        "smiles": "CC(C)=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Nitration of benzene yields nitrobenzene.",
      "result": "The product is [N+](=O)([O-])c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q58",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "HNO3, H2SO4",
      "conditions": "50 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(O)CC=O",
        "smiles": "CC(O)CC=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "COCC",
        "smiles": "COCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "CC(C)=O",
        "smiles": "CC(C)=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Nitration of benzene yields nitrobenzene.",
      "result": "The product is [N+](=O)([O-])c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q59",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "SO3, H2SO4",
      "conditions": "heat",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(O)c1ccccc1",
        "smiles": "CC(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCCBr",
        "smiles": "CCCBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Sulfonation of benzene yields benzenesulfonic acid.",
      "result": "The product is OS(=O)(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q60",
    "topic": "Friedel-Crafts Acylation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(=O)Cl, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CC1OC1",
        "smiles": "CC1OC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC=C",
        "smiles": "CC=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(C)=C",
        "smiles": "CC(C)=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Acylation.",
      "process": "Friedel-Crafts acylation of benzene with acetyl chloride yields acetophenone.",
      "result": "The product is CC(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q61",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(Cl)C, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC=O",
        "smiles": "CC=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "CC(C)=O",
        "smiles": "CC(C)=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Alkylation.",
      "process": "Friedel-Crafts alkylation of benzene with isopropyl chloride yields isopropylbenzene (cumene).",
      "result": "The product is CC(C)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q62",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(Cl)C, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CCC",
        "smiles": "CCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(C)=C",
        "smiles": "CC(C)=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Alkylation.",
      "process": "Friedel-Crafts alkylation of benzene with isopropyl chloride yields isopropylbenzene (cumene).",
      "result": "The product is CC(C)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q63",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(Cl)C, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Alkylation.",
      "process": "Friedel-Crafts alkylation of benzene with isopropyl chloride yields isopropylbenzene (cumene).",
      "result": "The product is CC(C)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q64",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "SO3, H2SO4",
      "conditions": "heat",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CC(C)=O",
        "smiles": "CC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(O)C",
        "smiles": "CC(O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(O)C(Br)",
        "smiles": "CC(O)C(Br)",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Sulfonation of benzene yields benzenesulfonic acid.",
      "result": "The product is OS(=O)(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q65_2",
    "topic": "Friedel-Crafts Acylation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(=O)Cl, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "COCC",
        "smiles": "COCC",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC(C)=C",
        "smiles": "CC(C)=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Acylation.",
      "process": "Friedel-Crafts acylation of benzene with acetyl chloride yields acetophenone.",
      "result": "The product is CC(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q66",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(Cl)C, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC=O",
        "smiles": "CC=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(Br)C(Br)",
        "smiles": "CC(Br)C(Br)",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Alkylation.",
      "process": "Friedel-Crafts alkylation of benzene with isopropyl chloride yields isopropylbenzene (cumene).",
      "result": "The product is CC(C)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q67_2",
    "topic": "Aromatic Halogenation",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "Br2, FeBr3",
      "conditions": "dark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "C(Br)CBr",
        "smiles": "C(Br)CBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC=O",
        "smiles": "CC=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(C)(O)C",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Aromatic Halogenation.",
      "process": "Electrophilic bromination of benzene yields bromobenzene.",
      "result": "The product is Brc1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q68",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "HNO3, H2SO4",
      "conditions": "50 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(O)CC=O",
        "smiles": "CC(O)CC=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(C)(O)C",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "CC(C)=C",
        "smiles": "CC(C)=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Nitration of benzene yields nitrobenzene.",
      "result": "The product is [N+](=O)([O-])c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q69",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "HNO3, H2SO4",
      "conditions": "50 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(O)C",
        "smiles": "CC(O)C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC(C)=C",
        "smiles": "CC(C)=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CCC",
        "smiles": "CCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Nitration of benzene yields nitrobenzene.",
      "result": "The product is [N+](=O)([O-])c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q70",
    "topic": "Aromatic Halogenation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "Br2, FeBr3",
      "conditions": "dark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCC(=O)O",
        "smiles": "CCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "CC=O",
        "smiles": "CC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Aromatic Halogenation.",
      "process": "Electrophilic bromination of benzene yields bromobenzene.",
      "result": "The product is Brc1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q71",
    "topic": "Aromatic Halogenation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "Br2, FeBr3",
      "conditions": "dark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCC",
        "smiles": "CCC",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(Br)C(Br)",
        "smiles": "CC(Br)C(Br)",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Aromatic Halogenation.",
      "process": "Electrophilic bromination of benzene yields bromobenzene.",
      "result": "The product is Brc1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q72",
    "topic": "Friedel-Crafts Acylation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(=O)Cl, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC1OC1",
        "smiles": "CC1OC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "COCC",
        "smiles": "COCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Acylation.",
      "process": "Friedel-Crafts acylation of benzene with acetyl chloride yields acetophenone.",
      "result": "The product is CC(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q73",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "SO3, H2SO4",
      "conditions": "heat",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(C)(O)C",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(O)C",
        "smiles": "CC(O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Sulfonation of benzene yields benzenesulfonic acid.",
      "result": "The product is OS(=O)(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q74",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(Cl)C, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CCC",
        "smiles": "CCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC1OC1",
        "smiles": "CC1OC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Alkylation.",
      "process": "Friedel-Crafts alkylation of benzene with isopropyl chloride yields isopropylbenzene (cumene).",
      "result": "The product is CC(C)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q75",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "HNO3, H2SO4",
      "conditions": "50 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCC(=O)O",
        "smiles": "CCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC1OC1",
        "smiles": "CC1OC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "C(Br)CBr",
        "smiles": "C(Br)CBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Nitration of benzene yields nitrobenzene.",
      "result": "The product is [N+](=O)([O-])c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q76",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "HNO3, H2SO4",
      "conditions": "50 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CC(C#N)C",
        "smiles": "CC(C#N)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(C)(O)C",
        "smiles": "CC(C)(O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Nitration of benzene yields nitrobenzene.",
      "result": "The product is [N+](=O)([O-])c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q77_2",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "SO3, H2SO4",
      "conditions": "heat",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(C)=O",
        "smiles": "CC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC(Br)C(Br)",
        "smiles": "CC(Br)C(Br)",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Sulfonation of benzene yields benzenesulfonic acid.",
      "result": "The product is OS(=O)(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q78",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "SO3, H2SO4",
      "conditions": "heat",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCCO",
        "smiles": "CCCO",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "O=CC1CC=CCC1",
        "smiles": "O=CC1CC=CCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(O)c1ccccc1",
        "smiles": "CC(O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Sulfonation of benzene yields benzenesulfonic acid.",
      "result": "The product is OS(=O)(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q79",
    "topic": "Aromatic Halogenation",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "Br2, FeBr3",
      "conditions": "dark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(O)C",
        "smiles": "CC(O)C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "C1CC=CCC1",
        "smiles": "C1CC=CCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Aromatic Halogenation.",
      "process": "Electrophilic bromination of benzene yields bromobenzene.",
      "result": "The product is Brc1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q80",
    "topic": "Friedel-Crafts Acylation",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(=O)Cl, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC=O",
        "smiles": "CC=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CCC",
        "smiles": "CCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(O)C(Br)",
        "smiles": "CC(O)C(Br)",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Acylation.",
      "process": "Friedel-Crafts acylation of benzene with acetyl chloride yields acetophenone.",
      "result": "The product is CC(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q81",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(Cl)C, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CCC",
        "smiles": "CCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(Br)(C)C",
        "smiles": "CC(Br)(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Alkylation.",
      "process": "Friedel-Crafts alkylation of benzene with isopropyl chloride yields isopropylbenzene (cumene).",
      "result": "The product is CC(C)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q82",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(Cl)C, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCC",
        "smiles": "CCC",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "COCC",
        "smiles": "COCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(C)=C",
        "smiles": "CC(C)=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Alkylation.",
      "process": "Friedel-Crafts alkylation of benzene with isopropyl chloride yields isopropylbenzene (cumene).",
      "result": "The product is CC(C)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q83",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "HNO3, H2SO4",
      "conditions": "50 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(O)C(Br)",
        "smiles": "CC(O)C(Br)",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CCOC(C)=O",
        "smiles": "CCOC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(O)C",
        "smiles": "CC(O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Nitration of benzene yields nitrobenzene.",
      "result": "The product is [N+](=O)([O-])c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q84",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "HNO3, H2SO4",
      "conditions": "50 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(Br)C(Br)",
        "smiles": "CC(Br)C(Br)",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Nitration of benzene yields nitrobenzene.",
      "result": "The product is [N+](=O)([O-])c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q85",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "SO3, H2SO4",
      "conditions": "heat",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCCO",
        "smiles": "CCCO",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CCCBr",
        "smiles": "CCCBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Sulfonation of benzene yields benzenesulfonic acid.",
      "result": "The product is OS(=O)(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q86",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "HNO3, H2SO4",
      "conditions": "50 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CC(O)CC=O",
        "smiles": "CC(O)CC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(O)C(Br)",
        "smiles": "CC(O)C(Br)",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(Br)(C)C",
        "smiles": "CC(Br)(C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Nitration of benzene yields nitrobenzene.",
      "result": "The product is [N+](=O)([O-])c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q87",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "HNO3, H2SO4",
      "conditions": "50 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(Br)(C)C",
        "smiles": "CC(Br)(C)C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCCO",
        "smiles": "CCCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Nitration of benzene yields nitrobenzene.",
      "result": "The product is [N+](=O)([O-])c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q88",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(Cl)C, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(C#N)C",
        "smiles": "CC(C#N)C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "C(Br)CBr",
        "smiles": "C(Br)CBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(Br)(C)C",
        "smiles": "CC(Br)(C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Alkylation.",
      "process": "Friedel-Crafts alkylation of benzene with isopropyl chloride yields isopropylbenzene (cumene).",
      "result": "The product is CC(C)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q89",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(Cl)C, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "O=CC1CC=CCC1",
        "smiles": "O=CC1CC=CCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(C)=C",
        "smiles": "CC(C)=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CCCBr",
        "smiles": "CCCBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Alkylation.",
      "process": "Friedel-Crafts alkylation of benzene with isopropyl chloride yields isopropylbenzene (cumene).",
      "result": "The product is CC(C)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q90",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "HNO3, H2SO4",
      "conditions": "50 °C",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CCC=O",
        "smiles": "CCC=O",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "[N+](=O)([O-])c1ccccc1",
        "smiles": "[N+](=O)([O-])c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC(C)=C",
        "smiles": "CC(C)=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Nitration of benzene yields nitrobenzene.",
      "result": "The product is [N+](=O)([O-])c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q91",
    "topic": "Friedel-Crafts Acylation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(=O)Cl, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(=O)c1ccccc1",
        "smiles": "CC(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CC(Br)C(Br)",
        "smiles": "CC(Br)C(Br)",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CCC=O",
        "smiles": "CCC=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(C)=C",
        "smiles": "CC(C)=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Acylation.",
      "process": "Friedel-Crafts acylation of benzene with acetyl chloride yields acetophenone.",
      "result": "The product is CC(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q92",
    "topic": "Aromatic Halogenation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "Br2, FeBr3",
      "conditions": "dark",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(Br)(C)C",
        "smiles": "CC(Br)(C)C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Brc1ccccc1",
        "smiles": "Brc1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC(C)=O",
        "smiles": "CC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Aromatic Halogenation.",
      "process": "Electrophilic bromination of benzene yields bromobenzene.",
      "result": "The product is Brc1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q93",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(Cl)C, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC(O)C(Br)",
        "smiles": "CC(O)C(Br)",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC(Br)(C)C",
        "smiles": "CC(Br)(C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Alkylation.",
      "process": "Friedel-Crafts alkylation of benzene with isopropyl chloride yields isopropylbenzene (cumene).",
      "result": "The product is CC(C)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q94",
    "topic": "Electrophilic Aromatic Substitution",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "SO3, H2SO4",
      "conditions": "heat",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "OS(=O)(=O)c1ccccc1",
        "smiles": "OS(=O)(=O)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "CC(O)C(Br)",
        "smiles": "CC(O)C(Br)",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(O)c1ccccc1",
        "smiles": "CC(O)c1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Electrophilic Aromatic Substitution.",
      "process": "Sulfonation of benzene yields benzenesulfonic acid.",
      "result": "The product is OS(=O)(=O)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q95",
    "topic": "Friedel-Crafts Alkylation",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "c1ccccc1"
      ],
      "reagents": "CC(Cl)C, AlCl3",
      "conditions": "CH2Cl2",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "CC=C",
        "smiles": "CC=C",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "CC(C)c1ccccc1",
        "smiles": "CC(C)c1ccccc1",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "CC(Br)(C)C",
        "smiles": "CC(Br)(C)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CC(=O)O",
        "smiles": "CC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Studying reaction mechanisms: Friedel-Crafts Alkylation.",
      "process": "Friedel-Crafts alkylation of benzene with isopropyl chloride yields isopropylbenzene (cumene).",
      "result": "The product is CC(C)c1ccccc1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q19_2",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "[N+](=O)([O-])c1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "Nc1ccccc1",
          "label": "Compound C",
          "x": 3,
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
          "reagents": "Fe, HCl"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: chlorobenzene, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: toluene, B: nitrobenzene, C: phenol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: benzene, B: nitrobenzene, C: aniline",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: benzene, B: benzenesulfonic acid, C: aniline",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: nitrobenzene, C: aniline.",
      "result": "The labels correspond to A: benzene, B: nitrobenzene, C: aniline."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch16_q63_2",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "[N+](=O)([O-])c1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "Nc1ccccc1",
          "label": "Compound C",
          "x": 3,
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
          "reagents": "Fe, HCl"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: benzenesulfonic acid, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: toluene, B: nitrobenzene, C: phenol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: benzene, B: nitrobenzene, C: aniline",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: benzene, B: chlorobenzene, C: aniline",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: nitrobenzene, C: aniline.",
      "result": "The labels correspond to A: benzene, B: nitrobenzene, C: aniline."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  }
];
