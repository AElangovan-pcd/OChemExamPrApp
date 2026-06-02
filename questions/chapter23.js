// ACS Organic Chemistry Exam Preparation - ACS: Substitutions & Eliminations
const CHAPTER_23_QUESTIONS = [
  {
    "question_id": "ch23_acs_q1_sn2_rate",
    "topic": "ACS: Substitutions & Eliminations",
    "difficulty_level": "Medium",
    "question_text": "Which of the following alkyl halides undergoes nucleophilic substitution via the SN2 mechanism at the fastest rate when reacted with sodium iodide in acetone?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "1-Bromobutane",
        "smiles": "CCCBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Bromopropane",
        "smiles": "CC(C)Br",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "t-Butyl bromide",
        "smiles": "CC(C)(C)Br",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Neopentyl bromide",
        "smiles": "CC(C)(C)CBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing steric hindrance effects on the transition state of SN2 reactions.",
      "process": "Step 1: SN2 reactions proceed via a concerted backside attack, making them highly sensitive to steric hindrance.\nStep 2: Classify the substrates: 1-Bromobutane is primary (1st degree); 2-Bromopropane is secondary (2nd degree); t-Butyl bromide is tertiary (3rd degree); Neopentyl bromide is primary but has a highly branched beta-carbon.\nStep 3: Primary halides without severe branching at the beta-position react fastest. Neopentyl bromide is primary but extremely slow due to the bulky tert-butyl group blocking the backside.",
      "result": "1-Bromobutane reacts at the fastest rate."
    }
  },
  {
    "question_id": "ch23_acs_q2_e2_regio",
    "topic": "ACS: Substitutions & Eliminations",
    "difficulty_level": "Hard",
    "question_text": "Predict the major product formed when (1R,2S)-1-bromo-1,2-diphenylpropane undergoes E2 elimination in the presence of sodium ethoxide.",
    "question_smiles": "CC(c1ccccc1)C(Br)c2ccccc2",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-1,2-diphenylpropene",
        "smiles": "C/C(=Cc1ccccc1)/c2ccccc2",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-1,2-diphenylpropene",
        "smiles": "C/C(=C/c1ccccc1)/c2ccccc2",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3,3-diphenylpropene",
        "smiles": "C=CC(c1ccccc1)c2ccccc2",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,1-diphenylpropene",
        "smiles": "CC=C(c1ccccc1)c2ccccc2",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding the stereospecificity of E2 elimination, which requires an anti-periplanar transition state.",
      "process": "Step 1: Align the starting material in a conformation where the beta-hydrogen and the leaving group (bromine) are anti-periplanar (dihedral angle 180 degrees).\nStep 2: Trace the positions of the remaining substituents (phenyl groups and methyl group) relative to each other in this conformation.\nStep 3: Elimination from (1R,2S)-1-bromo-1,2-diphenylpropane places the two phenyl groups on opposite sides of the resulting double bond, yielding the (E) alkene.",
      "result": "The major product is (E)-1,2-diphenylpropene."
    }
  },
  {
    "question_id": "ch23_acs_q3_solvent_effect",
    "topic": "ACS: Substitutions & Eliminations",
    "difficulty_level": "Medium",
    "question_text": "How does switching the solvent from methanol (CH3OH) to dimethyl sulfoxide (DMSO) affect the rate of the SN2 reaction between 1-bromobutane and sodium azide?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The rate increases dramatically because DMSO is a polar aprotic solvent that does not solvate the azide nucleophile.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The rate decreases because methanol is polar protic and stabilises the carbocation.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The rate remains unchanged since SN2 is independent of solvent properties.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The reaction mechanism changes from SN2 to SN1.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding the role of solvent effects on nucleophile activity in SN2 reactions.",
      "process": "Step 1: Methanol is a polar protic solvent. It forms strong hydrogen-bond shells around the azide anion (N3-), stabilizing the nucleophile and reducing its reactivity.\nStep 2: DMSO is a polar aprotic solvent. It solvates the sodium cation (Na+) well but cannot form hydrogen bonds with the azide anion, leaving the nucleophile highly active and 'naked'.\nStep 3: As a result, the nucleophile attacks 1-bromobutane much faster in DMSO.",
      "result": "The rate of substitution increases dramatically in DMSO."
    }
  },
  {
    "question_id": "ch23_acs_q4_sn1_rate",
    "topic": "ACS: Substitutions & Eliminations",
    "difficulty_level": "Medium",
    "question_text": "Which of the following substrates undergoes solvolysis (SN1 hydrolysis) in aqueous ethanol at the fastest rate?",
    "question_smiles": "CC(C)(Cl)C1=CC=CC=C1.CC(C)(C)Cl.CC(C)(Cl)C=C.CC(C)Cl",
    "options": [
      {
        "option_id": "A",
        "text": "2-chloro-2-phenylpropane (benzyl-like carbocation)",
        "smiles": "CC(C)(Cl)C1=CC=CC=C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "t-Butyl chloride (tertiary alkyl carbocation)",
        "smiles": "CC(C)(C)Cl",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-chloro-3-methyl-1-butene (allyl-like carbocation)",
        "smiles": "CC(C)(Cl)C=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-chloropropane (secondary alkyl carbocation)",
        "smiles": "CC(C)Cl",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Assessing relative carbocation stability as the rate-determining step in SN1 solvolysis.",
      "process": "Step 1: The rate of SN1 depends on carbocation stability.\nStep 2: 2-chloro-2-phenylpropane forms a tertiary benzylic carbocation. The positive charge is extremely stabilized by resonance delocalization into the phenyl ring.\nStep 3: While t-butyl chloride forms a tertiary alkyl carbocation and 3-chloro-3-methyl-1-butene forms an allylic carbocation, the tertiary benzylic carbocation is the most stable, leading to the fastest rate.",
      "result": "2-chloro-2-phenylpropane reacts fastest."
    }
  },
  {
    "question_id": "ch23_acs_q5_elim_comp",
    "topic": "ACS: Substitutions & Eliminations",
    "difficulty_level": "Hard",
    "question_text": "Predict the major product(s) formed when cyclohexyl bromide is heated with sodium ethoxide in ethanol.",
    "question_smiles": "C1CCC(Br)CC1",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclohexene (E2 elimination product)",
        "smiles": "C1CC=CCC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclohexyl ethyl ether (SN2 substitution product)",
        "smiles": "CCOC1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclohexanol (SN1 product)",
        "smiles": "OC1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A 1:1 mixture of cyclohexene and cyclohexyl ethyl ether",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Predicting SN2 vs E2 competition on secondary substrates with strong, basic nucleophiles at high temperatures.",
      "process": "Step 1: Identify substrate: Cyclohexyl bromide is a secondary alkyl halide.\nStep 2: Identify reagent: Sodium ethoxide is a strong, unhindered base/nucleophile. High temperatures promote elimination.\nStep 3: For secondary substrates, strong bases strongly favor E2 elimination over SN2 substitution. Deprotonation yields cyclohexene.",
      "result": "Cyclohexene is the major product formed via E2."
    }
  },
  {
    "question_id": "ch23_acs_q6_nucleophilicity",
    "topic": "ACS: Substitutions & Eliminations",
    "difficulty_level": "Medium",
    "question_text": "Which of the following lists the nucleophiles in order of decreasing reactivity in an SN2 reaction in a polar protic solvent like methanol?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "I- > Br- > Cl- > F-",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "F- > Cl- > Br- > I-",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cl- > Br- > I- > F-",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "I- > F- > Br- > Cl-",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Evaluating nucleophilicity trends in protic vs aprotic solvents.",
      "process": "Step 1: In a polar protic solvent, hydrogen bonding stabilizes smaller, more electronegative anions (like F-), shielding them from attack.\nStep 2: Larger anions (like I-) are less solvated and more polarizable.\nStep 3: Therefore, nucleophilicity increases down the group in protic solvents: I- > Br- > Cl- > F-.",
      "result": "The correct order is I- > Br- > Cl- > F-."
    }
  },
  {
    "question_id": "ch23_acs_q7_stereochemistry",
    "topic": "ACS: Substitutions & Eliminations",
    "difficulty_level": "Medium",
    "question_text": "Which of the following describes the stereochemical outcome of an SN1 reaction on a chiral starting material?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Nearly complete racemization with a slight excess of inversion due to ion pairing.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Complete inversion of configuration.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Complete retention of configuration.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Equal 1:1 mixture of inversion and retention with no exceptions.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding the stereochemistry of unimolecular nucleophilic substitution.",
      "process": "Step 1: SN1 proceeds through a planar carbocation intermediate.\nStep 2: The nucleophile can attack from either face, leading to racemization.\nStep 3: In reality, the leaving group often remains close as a solvated ion pair, shielding the front side and making backside attack slightly favored.",
      "result": "The outcome is racemization with a slight excess of inversion."
    }
  },
  {
    "question_id": "ch23_acs_q8_leaving_group",
    "topic": "ACS: Substitutions & Eliminations",
    "difficulty_level": "Medium",
    "question_text": "Rank the following leaving groups in order of decreasing leaving ability (best to worst):\nI. Iodide (-I)\nII. Fluoride (-F)\nIII. Tosylate (-OTs)\nIV. Acetate (-OAc)",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "III > I > IV > II",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "I > III > IV > II",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "III > I > II > IV",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "I > III > II > IV",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Evaluating leaving group ability based on conjugate base stability.",
      "process": "Step 1: Good leaving groups are weak bases.\nStep 2: Tosylate (OTs) is a very weak base due to resonance. Iodide (I-) is also excellent.\nStep 3: Acetate (OAc-) is a weak base, while fluoride (F-) is relatively basic and holds its charge tightly, making it a very poor leaving group.",
      "result": "The order of decreasing leaving group ability is OTs > I > OAc > F."
    }
  },
  {
    "question_id": "ch23_acs_q9_e1_rate",
    "topic": "ACS: Substitutions & Eliminations",
    "difficulty_level": "Easy",
    "question_text": "Which of the following alcohols undergoes acid-catalyzed dehydration via the E1 mechanism at the fastest rate?",
    "question_smiles": "CC(C)(O)C.CC(C)O.CCCO",
    "options": [
      {
        "option_id": "A",
        "text": "t-Butyl alcohol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Isopropyl alcohol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-propanol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Assessing alcohol dehydration rates via carbocation intermediates.",
      "process": "Step 1: Dehydration occurs via protonation of -OH to form -OH2+, which leaves as water to form a carbocation (E1).\nStep 2: The rate-determining step is carbocation formation.\nStep 3: Tertiary carbocations are much more stable than secondary or primary, so t-butyl alcohol reacts fastest.",
      "result": "t-Butyl alcohol reacts at the fastest rate."
    }
  },
  {
    "question_id": "ch23_acs_q10_e2_stereospecificity",
    "topic": "ACS: Substitutions & Eliminations",
    "difficulty_level": "Hard",
    "question_text": "Why does neomenthyl chloride undergo E2 elimination 200 times faster than menthyl chloride when reacted with sodium ethoxide?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "In neomenthyl chloride, the chlorine is axial in the stable conformation, allowing an anti-periplanar alignment with adjacent hydrogens.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Neomenthyl chloride is a tertiary alkyl halide.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Menthyl chloride experiences more steric hindrance from the ethoxide base.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Neomenthyl chloride undergoes elimination via E1.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understanding conformational control and anti-periplanar requirements in cyclic E2 eliminations.",
      "process": "Step 1: E2 elimination in cyclohexanes requires the leaving group (Cl) and the beta-hydrogen to be trans-diaxial (anti-periplanar).\nStep 2: Menthyl chloride has Cl equatorial in its most stable conformation. To eliminate, it must ring-flip to a high-energy chair conformation where Cl is axial.\nStep 3: Neomenthyl chloride has Cl axial in its most stable chair conformer, allowing rapid E2 elimination.",
      "result": "Neomenthyl chloride reacts much faster because Cl is already axial."
    }
  }
];
