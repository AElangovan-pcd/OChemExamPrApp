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
  }
];
