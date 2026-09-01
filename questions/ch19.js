// OChemStudyBuddy - McMurry Chapter 19
// Author: A. Elangovan, PhD
var CH19_QUESTIONS = [
  {
    "question_id": "ch19_q_dynamic_wittig_reaction",
    "topic": "Aldehydes & Ketones: Nucleophilic Additions",
    "difficulty_level": "Hard",
    "question_text": "Predict the alkene product formed in the Wittig reaction of benzaldehyde and methylenetriphenylphosphorane.",
    "reaction_scheme": {
      "reactants": [
        "O=Cc1ccccc1",
        "C=P(c2ccccc2)(c3ccccc3)c4ccccc4"
      ],
      "reagents": " Wittig Reaction",
      "conditions": "THF",
      "products": [
        "C=Cc1ccccc1"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "The Wittig reaction converts the C=O carbonyl double bond directly into a C=C alkene double bond, yielding styrene.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The reaction yields benzyl alcohol.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Stilbene (C/C=C/c1ccccc1) is formed.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "No reaction occurs due to steric hindrance.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Converting carbonyl groups to alkenes using phosphorus ylides.",
      "process": "The nucleophilic ylide carbon attacks the carbonyl carbon to form a betaine, which collapses into an oxaphosphetane intermediate. This collapses to release triphenylphosphine oxide (Ph3P=O) and form the carbon-carbon double bond (styrene).",
      "result": "Styrene is synthesized."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch19_q41_gilman_vs_grignard_conjugate",
    "topic": "Organometallic reagents",
    "difficulty_level": "Hard",
    "question_text": "Which of the following statements correctly describes the difference in reactivity between a Grignard reagent and a Gilman reagent when reacted with cyclohex-2-en-1-one?",
    "question_smiles": "O=C1C=CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "The Grignard reagent undergoes 1,2-addition to the carbonyl carbon, whereas the Gilman reagent undergoes 1,4-addition to the $\\beta$-carbon.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The Grignard reagent undergoes 1,4-addition, whereas the Gilman reagent undergoes 1,2-addition.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both reagents undergo 1,2-addition to yield tertiary allylic alcohols.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both reagents undergo 1,4-addition to yield saturated ketones.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the differing regiochemistry of organometallic additions to $\\alpha,\\beta$-unsaturated carbonyl systems.",
      "process": "Step 1: Grignard reagents are highly polar and act as 'hard' nucleophiles, which attack the carbon of the carbonyl group directly (1,2-addition).\nStep 2: Gilman reagents have less polar carbon-copper bonds and act as 'soft' nucleophiles, which selectively attack the conjugate position at the $\\beta$-carbon (1,4-addition).\nStep 3: Thus, Grignard reagents yield allylic alcohols, while Gilman reagents yield substituted ketones.",
      "result": "Grignard reagents undergo 1,2-addition, whereas Gilman reagents undergo 1,4-addition."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  }
];
