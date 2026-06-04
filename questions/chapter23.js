// ACS Organic Chemistry Exam Preparation - ACS: Substitutions & Eliminations
const CHAPTER_23_QUESTIONS = [
  {
    "question_id": "ch23_acs_q1_sn2_rate",
    "topic": "ACS: Substitutions & Eliminations",
    "difficulty_level": "Medium",
    "question_text": "Which of the following alkyl halides undergoes nucleophilic substitution via the SN2 mechanism at the fastest rate when reacted with sodium iodide in acetone?",
    "question_smiles": "CCCBr",
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
        "smiles": "C/C(=C\c1ccccc1)/c2ccccc2",
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
  }
,
{
  "question_id": "ch23_q_dynamic_aldol_condensation",
  "topic": "Carbonyl Condensation Reactions",
  "difficulty_level": "Medium",
  "question_text": "Determine the product of the base-catalyzed self-condensation of acetaldehyde followed by dehydration.",
  "reaction_scheme": {
    "reactants": [
      "CC=O"
    ],
    "reagents": "1) NaOH, H2O\n2) Heat (dehydration)",
    "conditions": "Aldol Condensation",
    "products": [
      "CC=CC=O"
    ]
  },
  "options": [
    {
      "option_id": "A",
      "text": "Self-condensation yields crotonaldehyde (2-butenal), a conjugated enone.",
      "is_correct": true
    },
    {
      "option_id": "B",
      "text": "The reaction produces 3-hydroxybutanal (without heat).",
      "is_correct": false
    },
    {
      "option_id": "C",
      "text": "Ethyl acetate is formed.",
      "is_correct": false
    },
    {
      "option_id": "D",
      "text": "No condensation occurs.",
      "is_correct": false
    }
  ],
  "feedback": {
    "context": "Analyzing aldol addition and dehydration pathways.",
    "process": "NaOH deprotonates acetaldehyde to form enolate. Enolate attacks another neutral acetaldehyde: forms 3-hydroxybutanal (aldol addition). Heating drives elimination of water to yield the conjugated 2-butenal (crotonaldehyde).",
    "result": "The final product is crotonaldehyde."
  }
}
];
