// OChemStudyBuddy - McMurry Chapter 25
// Author: A. Elangovan, PhD
var CH25_QUESTIONS = [
  {
    "question_id": "ch25_q1_fischer_hexoses_a",
    "topic": "Configurations of the Aldoses",
    "difficulty_level": "Medium",
    "question_text": "Match each Fischer projection to the D-aldohexose it represents. Read the OH groups from C2 down to C5; the eight names in the list follow Fieser's pattern (C5 always right, C4 four right then four left, C3 two and two, C2 alternating).",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "FISCHER:D-Allose",
        "correctAnswer": "D-Allose",
        "alt": "A Fischer projection with CHO at the top and CH2OH at the bottom and four stereocentres. Reading down from C2, the OH groups are on the right, right, right, right."
      },
      {
        "smiles": "FISCHER:D-Altrose",
        "correctAnswer": "D-Altrose",
        "alt": "A Fischer projection with CHO at the top and CH2OH at the bottom and four stereocentres. Reading down from C2, the OH groups are on the left, right, right, right."
      },
      {
        "smiles": "FISCHER:D-Glucose",
        "correctAnswer": "D-Glucose",
        "alt": "A Fischer projection with CHO at the top and CH2OH at the bottom and four stereocentres. Reading down from C2, the OH groups are on the right, left, right, right."
      },
      {
        "smiles": "FISCHER:D-Mannose",
        "correctAnswer": "D-Mannose",
        "alt": "A Fischer projection with CHO at the top and CH2OH at the bottom and four stereocentres. Reading down from C2, the OH groups are on the left, left, right, right."
      }
    ],
    "match_options": [
      "D-Allose",
      "D-Altrose",
      "D-Glucose",
      "D-Mannose",
      "D-Gulose",
      "D-Idose",
      "D-Galactose",
      "D-Talose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "At least one projection matched to the wrong name",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The eight D-aldohexoses all have the C5 OH on the right (that is what D means) and differ only in the pattern of OH groups at C2, C3 and C4. Fieser's scheme lays them out so that, left to right across the family, the C4 OH is right for the first four and left for the last four, the C3 OH alternates in pairs (right, right, left, left), and the C2 OH alternates singly. The mnemonic All altruists gladly make gum in gallon tanks gives the names in that same order: allose, altrose, glucose, mannose, gulose, idose, galactose, talose.",
      "approach": "Step 1: Check C5 in each projection: OH on the right in all four, so all are D sugars and the names are among the eight.\nStep 2: Check C4: OH on the right in all four, so these are the first half of Fieser's row, allose, altrose, glucose or mannose.\nStep 3: Check C3: right, right for the first pair (allose, altrose) and left, left for the second pair (glucose, mannose).\nStep 4: Check C2 to split each pair: right is allose, left is altrose; right is glucose, left is mannose.\nStep 5: So right-right-right-right is D-allose, left-right-right-right is D-altrose, right-left-right-right is D-glucose and left-left-right-right is D-mannose.",
      "note": "McMurry 25.4 (Configurations of the Aldoses), Figure 25.4 and Fieser's six-step procedure, are the source of the pattern used here, and the section states that only D-glucose and D-galactose are widely distributed in nature, with D-mannose and D-talose occurring in lesser abundance. The other four (gulose, idose, galactose, talose) are the second grid. A Fischer projection encodes real stereochemistry: horizontal bonds come toward you, vertical bonds go away (25.2), so the projection is not just a mnemonic picture.",
      "options": {
        "A": "Correct. C5 right in all four marks them as D sugars; C4 right puts them in the first half of Fieser's row; C3 and C2 then separate allose, altrose, glucose and mannose.",
        "B": "One or more rows is misnamed. Read the OH positions top to bottom as a four-letter code (right or left at C2, C3, C4, C5) and compare with Fieser's pattern: the C4 column decides which half of the eight, C3 which pair, C2 which member of the pair."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q1_fischer_hexoses_b",
    "topic": "Configurations of the Aldoses",
    "difficulty_level": "Medium",
    "question_text": "Match each Fischer projection to the D-aldohexose it represents. These four are the second half of Fieser's row, the sugars whose C4 OH is on the left.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "FISCHER:D-Gulose",
        "correctAnswer": "D-Gulose",
        "alt": "A Fischer projection with CHO at the top and CH2OH at the bottom and four stereocentres. Reading down from C2, the OH groups are on the right, right, left, right."
      },
      {
        "smiles": "FISCHER:D-Idose",
        "correctAnswer": "D-Idose",
        "alt": "A Fischer projection with CHO at the top and CH2OH at the bottom and four stereocentres. Reading down from C2, the OH groups are on the left, right, left, right."
      },
      {
        "smiles": "FISCHER:D-Galactose",
        "correctAnswer": "D-Galactose",
        "alt": "A Fischer projection with CHO at the top and CH2OH at the bottom and four stereocentres. Reading down from C2, the OH groups are on the right, left, left, right."
      },
      {
        "smiles": "FISCHER:D-Talose",
        "correctAnswer": "D-Talose",
        "alt": "A Fischer projection with CHO at the top and CH2OH at the bottom and four stereocentres. Reading down from C2, the OH groups are on the left, left, left, right."
      }
    ],
    "match_options": [
      "D-Allose",
      "D-Altrose",
      "D-Glucose",
      "D-Mannose",
      "D-Gulose",
      "D-Idose",
      "D-Galactose",
      "D-Talose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "At least one projection matched to the wrong name",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Gulose, idose, galactose and talose are the four D-aldohexoses with the C4 OH on the left. Within that half, C3 separates the pairs (gulose and idose have C3 on the right, galactose and talose on the left) and C2 separates the members (right for gulose and galactose, left for idose and talose). Galactose is the one to know cold: it is a C4 epimer of glucose, a constituent of lactose, and one of the eight essential monosaccharides. Talose is glucose's C2-and-C4 double epimer.",
      "approach": "Step 1: All four projections have the C5 OH on the right: D sugars.\nStep 2: All four have the C4 OH on the left: the second half of Fieser's row, gulose, idose, galactose, talose.\nStep 3: C3 on the right for right-right-left-right and left-right-left-right (gulose and idose); C3 on the left for right-left-left-right and left-left-left-right (galactose and talose).\nStep 4: C2 on the right picks gulose from the first pair and galactose from the second; C2 on the left picks idose and talose.\nStep 5: A check on galactose: it should differ from glucose (right-left-right-right) only at C4, and right-left-left-right does.",
      "note": "McMurry 25.4 (Configurations of the Aldoses) names the eight D-aldohexoses and notes that gulose, idose and talose are rare, while D-galactose occurs widely in gums and fruit pectins. The mnemonic ends with 'in gallon tanks': idose, galactose, talose, preceded by gum for gulose. McMurry 25.7 lists D-galactose among the eight monosaccharides humans must obtain from the diet, and 25.8 places it in lactose, linked beta-1,4 to glucose.",
      "options": {
        "A": "Correct. C4 left puts all four in the second half of the row; C3 splits gulose and idose (right) from galactose and talose (left); C2 then names each one.",
        "B": "At least one name is on the wrong projection. The quickest check is galactose: it is glucose with only the C4 OH moved to the left (right-left-left-right). The projection that differs from it only at C2 is talose; the two with C3 on the right are gulose (C2 right) and idose (C2 left)."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q1_fischer_pentoses",
    "topic": "Configurations of the Aldoses",
    "difficulty_level": "Medium",
    "question_text": "Match each Fischer projection to the D-aldopentose it represents. An aldopentose has three stereocentres (C2, C3, C4); the four D sugars are ribose, arabinose, xylose and lyxose.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "FISCHER:D-Ribose",
        "correctAnswer": "D-Ribose",
        "alt": "A Fischer projection with CHO at the top and CH2OH at the bottom and three stereocentres. Reading down from C2, the OH groups are on the right, right, right."
      },
      {
        "smiles": "FISCHER:D-Arabinose",
        "correctAnswer": "D-Arabinose",
        "alt": "A Fischer projection with CHO at the top and CH2OH at the bottom and three stereocentres. Reading down from C2, the OH groups are on the left, right, right."
      },
      {
        "smiles": "FISCHER:D-Xylose",
        "correctAnswer": "D-Xylose",
        "alt": "A Fischer projection with CHO at the top and CH2OH at the bottom and three stereocentres. Reading down from C2, the OH groups are on the right, left, right."
      },
      {
        "smiles": "FISCHER:D-Lyxose",
        "correctAnswer": "D-Lyxose",
        "alt": "A Fischer projection with CHO at the top and CH2OH at the bottom and three stereocentres. Reading down from C2, the OH groups are on the left, left, right."
      }
    ],
    "match_options": [
      "D-Ribose",
      "D-Arabinose",
      "D-Xylose",
      "D-Lyxose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "At least one projection matched to the wrong name",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The four D-aldopentoses are built from D-glyceraldehyde by inserting two new stereocentres below the aldehyde carbon. With C4 fixed on the right (D), the C3 OH is right for the first pair and left for the second, and the C2 OH alternates: ribose (right, right), arabinose (left, right), xylose (right, left), lyxose (left, left). The mnemonic RIBs ARe eXtra Lean gives the order. Each pentose is also the parent of two aldohexoses in the Kiliani-Fischer chain extension, which adds a new C1 and leaves the old centres alone.",
      "approach": "Step 1: Confirm C4 is on the right in all four: D-pentoses.\nStep 2: Split by C3: right for the first two of Fieser's row (ribose, arabinose), left for the last two (xylose, lyxose).\nStep 3: Split each pair by C2: right for ribose and xylose, left for arabinose and lyxose.\nStep 4: So right-right-right is D-ribose, left-right-right is D-arabinose, right-left-right is D-xylose and left-left-right is D-lyxose.",
      "note": "McMurry 25.4 (Configurations of the Aldoses) gives the pentose mnemonic 'RIBs ARe eXtra Lean' and notes that D-ribose is a constituent of RNA, L-arabinose is found in many plants and D-xylose in wood, while lyxose is rare. The same section's Figure 25.4 shows each pentose leading to two hexoses: ribose to allose and altrose, arabinose to glucose and mannose, xylose to gulose and idose, lyxose to galactose and talose (McMurry 25.6, Kiliani-Fischer synthesis).",
      "options": {
        "A": "Correct. With C4 on the right in all four, the C3 column splits ribose and arabinose from xylose and lyxose, and the C2 column names each member of the pair.",
        "B": "One or more pentoses is misnamed. Read C3 first: right means ribose or arabinose, left means xylose or lyxose. Then C2: right is the first name of the pair, left the second."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q2_haworth_glucose_galactose",
    "topic": "Cyclic Structures of Monosaccharides: Anomers",
    "difficulty_level": "Medium",
    "question_text": "Match each Haworth projection to its name. In a Haworth projection of a D sugar, an OH that is on the right in the Fischer projection points down and one on the left points up; the anomeric OH at C1 is down in the alpha anomer and up in the beta anomer.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:alpha-D-Glucose",
        "correctAnswer": "alpha-D-Glucopyranose",
        "alt": "A Haworth projection of a six-membered ring with the ring oxygen at the back right and CH2OH pointing up at C5. Going round from the anomeric carbon C1: the C1 OH is down, the C2 OH is down, the C3 OH is up, the C4 OH is down."
      },
      {
        "smiles": "HAWORTH:beta-D-Glucose",
        "correctAnswer": "beta-D-Glucopyranose",
        "alt": "A Haworth projection of a six-membered ring with the ring oxygen at the back right and CH2OH pointing up at C5. Going round from the anomeric carbon C1: the C1 OH is up, the C2 OH is down, the C3 OH is up, the C4 OH is down."
      },
      {
        "smiles": "HAWORTH:alpha-D-Galactose",
        "correctAnswer": "alpha-D-Galactopyranose",
        "alt": "A Haworth projection of a six-membered ring with the ring oxygen at the back right and CH2OH pointing up at C5. Going round from the anomeric carbon C1: the C1 OH is down, the C2 OH is down, the C3 OH is up, the C4 OH is up."
      },
      {
        "smiles": "HAWORTH:beta-D-Galactose",
        "correctAnswer": "beta-D-Galactopyranose",
        "alt": "A Haworth projection of a six-membered ring with the ring oxygen at the back right and CH2OH pointing up at C5. Going round from the anomeric carbon C1: the C1 OH is up, the C2 OH is down, the C3 OH is up, the C4 OH is up."
      }
    ],
    "match_options": [
      "alpha-D-Glucopyranose",
      "beta-D-Glucopyranose",
      "alpha-D-Galactopyranose",
      "beta-D-Galactopyranose",
      "alpha-D-Mannopyranose",
      "beta-D-Mannopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "At least one ring matched to the wrong name",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Haworth projection is the Fischer projection curled into a ring: right becomes down, left becomes up, and the CH2OH of a D sugar sits on top. So a D-glucopyranose ring reads down, up, down at C2, C3, C4 (glucose is right, left, right at those carbons) and a D-galactopyranose ring reads down, up, up, differing only at C4. The anomeric carbon C1, new in the ring, has its OH down in the alpha anomer and up in the beta anomer for a D sugar. Two decisions therefore name each ring: which sugar (C2 to C4) and which anomer (C1).",
      "approach": "Step 1: Read C2, C3, C4 on each ring. Down-up-down is glucose (right-left-right in the Fischer projection); down-up-up is galactose (right-left-left).\nStep 2: Read C1. OH down means alpha, OH up means beta.\nStep 3: The two rings with C4 down are the glucoses: C1 down is alpha-D-glucopyranose, C1 up is beta-D-glucopyranose.\nStep 4: The two rings with C4 up are the galactoses: C1 down is alpha-D-galactopyranose, C1 up is beta-D-galactopyranose.\nStep 5: The mannose names in the list are decoys: mannose would read up-up-down at C2 to C4, and no ring here has its C2 OH up.",
      "note": "McMurry 25.5 (Cyclic Structures of Monosaccharides: Anomers) gives the conversion rules: an OH on the right in a Fischer projection is on the bottom face of the ring, one on the left is on the top face, and the CH2OH of a D sugar is on top; the alpha anomer has the new C1 OH cis to the C5 oxygen in the Fischer projection, which places it down in the ring, and the beta anomer has it up, so that beta-D-glucopyranose has every substituent equatorial in the chair. Problem 25-13 asks for the chairs of beta-D-galactopyranose and beta-D-mannopyranose.",
      "options": {
        "A": "Correct. C4 down is glucose and C4 up is galactose; within each pair, C1 down is the alpha anomer and C1 up the beta anomer.",
        "B": "At least one ring is misnamed. Separate the two decisions: first C2 to C4 (down-up-down glucose, down-up-up galactose, up-up-down would be mannose), then C1 (down alpha, up beta)."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q2_haworth_mannose_allose",
    "topic": "Cyclic Structures of Monosaccharides: Anomers",
    "difficulty_level": "Medium",
    "question_text": "Match each Haworth projection to its name. Two of the rings are D-mannopyranose (glucose's C2 epimer) and two are D-allopyranose (glucose's C3 epimer), each as both anomers.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:alpha-D-Mannose",
        "correctAnswer": "alpha-D-Mannopyranose",
        "alt": "A Haworth projection of a six-membered ring with the ring oxygen at the back right and CH2OH pointing up at C5. Going round from the anomeric carbon C1: the C1 OH is down, the C2 OH is up, the C3 OH is up, the C4 OH is down."
      },
      {
        "smiles": "HAWORTH:beta-D-Mannose",
        "correctAnswer": "beta-D-Mannopyranose",
        "alt": "A Haworth projection of a six-membered ring with the ring oxygen at the back right and CH2OH pointing up at C5. Going round from the anomeric carbon C1: the C1 OH is up, the C2 OH is up, the C3 OH is up, the C4 OH is down."
      },
      {
        "smiles": "HAWORTH:alpha-D-Allose",
        "correctAnswer": "alpha-D-Allopyranose",
        "alt": "A Haworth projection of a six-membered ring with the ring oxygen at the back right and CH2OH pointing up at C5. Going round from the anomeric carbon C1: the C1 OH is down, the C2 OH is down, the C3 OH is down, the C4 OH is down."
      },
      {
        "smiles": "HAWORTH:beta-D-Allose",
        "correctAnswer": "beta-D-Allopyranose",
        "alt": "A Haworth projection of a six-membered ring with the ring oxygen at the back right and CH2OH pointing up at C5. Going round from the anomeric carbon C1: the C1 OH is up, the C2 OH is down, the C3 OH is down, the C4 OH is down."
      }
    ],
    "match_options": [
      "alpha-D-Mannopyranose",
      "beta-D-Mannopyranose",
      "alpha-D-Allopyranose",
      "beta-D-Allopyranose",
      "alpha-D-Glucopyranose",
      "beta-D-Glucopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "At least one ring matched to the wrong name",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Mannose and allose are both single epimers of glucose, so their Haworth rings are glucose's ring (down, up, down at C2, C3, C4) with one position flipped: mannose has C2 up (its C2 OH is on the left in the Fischer projection) and allose has C3 down (all four of its Fischer OH groups are on the right, so every ring OH except a beta C1 points down). The anomer is read at C1 as always: down is alpha, up is beta. The glucose names in the list are there to catch a ring read with one position skipped.",
      "approach": "Step 1: Read C2, C3, C4. Up-up-down is mannose (left-left-right); down-down-down is allose (right-right-right); down-up-down would be glucose, and no ring here has that pattern.\nStep 2: For the two mannose rings, C1 down is alpha-D-mannopyranose and C1 up is beta-D-mannopyranose.\nStep 3: For the two allose rings, C1 down is alpha-D-allopyranose and C1 up is beta-D-allopyranose.\nStep 4: Sanity check on allose: alpha-D-allopyranose has every ring OH down, and beta-D-allopyranose has only the anomeric OH up.",
      "note": "McMurry 25.5 (Cyclic Structures of Monosaccharides: Anomers) works the mannose case in its example on drawing a chair conformation: D-mannose differs from D-glucose only at C2, so its pyranose has the C2 OH axial where glucose's is equatorial. Allose is the first sugar in Fieser's row (McMurry 25.4), the one with every OH on the right, and Problem 25-19 uses it as the aldohexose whose aldaric acid is meso.",
      "options": {
        "A": "Correct. C2 up marks the two mannose rings and an all-down C2 to C4 marks the two allose rings; C1 down is alpha, C1 up is beta.",
        "B": "At least one ring is misnamed. Look at C2 first: up means mannose (C2 OH on the left in the Fischer projection). If C2, C3 and C4 are all down, the sugar is allose. Then read C1: down alpha, up beta."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q2_haworth_rare_hexoses",
    "topic": "Cyclic Structures of Monosaccharides: Anomers",
    "difficulty_level": "Hard",
    "question_text": "Match each Haworth projection to its name. These are the four rarer D-aldohexoses, one anomer of each, so both the sugar and the anomer must be read from the ring.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:beta-D-Altrose",
        "correctAnswer": "beta-D-Altropyranose",
        "alt": "A Haworth projection of a six-membered ring with the ring oxygen at the back right and CH2OH pointing up at C5. Going round from the anomeric carbon C1: the C1 OH is up, the C2 OH is up, the C3 OH is down, the C4 OH is down."
      },
      {
        "smiles": "HAWORTH:alpha-D-Gulose",
        "correctAnswer": "alpha-D-Gulopyranose",
        "alt": "A Haworth projection of a six-membered ring with the ring oxygen at the back right and CH2OH pointing up at C5. Going round from the anomeric carbon C1: the C1 OH is down, the C2 OH is down, the C3 OH is down, the C4 OH is up."
      },
      {
        "smiles": "HAWORTH:beta-D-Idose",
        "correctAnswer": "beta-D-Idopyranose",
        "alt": "A Haworth projection of a six-membered ring with the ring oxygen at the back right and CH2OH pointing up at C5. Going round from the anomeric carbon C1: the C1 OH is up, the C2 OH is up, the C3 OH is down, the C4 OH is up."
      },
      {
        "smiles": "HAWORTH:alpha-D-Talose",
        "correctAnswer": "alpha-D-Talopyranose",
        "alt": "A Haworth projection of a six-membered ring with the ring oxygen at the back right and CH2OH pointing up at C5. Going round from the anomeric carbon C1: the C1 OH is down, the C2 OH is up, the C3 OH is up, the C4 OH is up."
      }
    ],
    "match_options": [
      "beta-D-Altropyranose",
      "alpha-D-Gulopyranose",
      "beta-D-Idopyranose",
      "alpha-D-Talopyranose",
      "beta-D-Gulopyranose",
      "alpha-D-Idopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "At least one ring matched to the wrong name",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Nothing new is needed for the rare sugars, only the same two readings applied without the help of a familiar shape. Translate the ring back into a Fischer code (down means right, up means left) at C2, C3, C4, then look the code up in Fieser's row: altrose left-right-right, gulose right-right-left, idose left-right-left, talose left-left-left. Then read C1 for the anomer. The two decoy names are the other anomers of gulose and idose, so the C1 reading matters as much as the sugar.",
      "approach": "Step 1: Up-down-down at C2 to C4 is left-right-right: altrose. Its C1 is up: beta-D-altropyranose.\nStep 2: Down-down-up is right-right-left: gulose. Its C1 is down: alpha-D-gulopyranose, not the beta decoy.\nStep 3: Up-down-up is left-right-left: idose. Its C1 is up: beta-D-idopyranose, not the alpha decoy.\nStep 4: Up-up-up is left-left-left: talose. Its C1 is down: alpha-D-talopyranose.",
      "note": "McMurry 25.4 (Configurations of the Aldoses) gives the Fischer projections of all eight D-aldohexoses in Figure 25.4 and the Fieser procedure for regenerating them; McMurry 25.5 (Cyclic Structures of Monosaccharides: Anomers) gives the right-to-bottom, left-to-top rule for curling a Fischer projection into a Haworth ring. Idose is the sugar whose beta-pyranose chair is famously uncomfortable: with C2, C3 and C4 all opposite to glucose's, no chair puts all its substituents equatorial, and idose derivatives populate several ring conformations.",
      "options": {
        "A": "Correct. Each ring translates to a Fischer code (down is right, up is left) that Fieser's row names, and C1 fixes the anomer: altrose beta, gulose alpha, idose beta, talose alpha.",
        "B": "At least one ring is misnamed. Write each ring as a three-letter Fischer code from C2 to C4 (down is right, up is left) and look it up: left-right-right altrose, right-right-left gulose, left-right-left idose, left-left-left talose. Then check C1: the decoy names are the wrong anomers of gulose and idose."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q_dynamic_monosaccharides",
    "topic": "Cyclic Structures of Monosaccharides: Anomers",
    "difficulty_level": "Easy",
    "question_text": "Match each cyclic form of D-glucose to its name. The two rings differ only at the anomeric carbon, C1, the carbon that was the aldehyde before the ring closed.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "HAWORTH:alpha-D-Glucose",
        "correctAnswer": "alpha-D-Glucopyranose",
        "alt": "A Haworth projection of a six-membered ring with the ring oxygen at the back right and CH2OH pointing up at C5. The anomeric OH at C1 points down; C2 OH down, C3 OH up, C4 OH down."
      },
      {
        "smiles": "HAWORTH:beta-D-Glucose",
        "correctAnswer": "beta-D-Glucopyranose",
        "alt": "A Haworth projection of a six-membered ring with the ring oxygen at the back right and CH2OH pointing up at C5. The anomeric OH at C1 points up; C2 OH down, C3 OH up, C4 OH down."
      }
    ],
    "match_options": [
      "alpha-D-Glucopyranose",
      "beta-D-Glucopyranose",
      "alpha-D-Galactopyranose"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "At least one ring matched to the wrong anomer",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When the C5 OH of open-chain glucose adds to the C1 aldehyde, C1 becomes a hemiacetal carbon and a new stereocentre, so two diastereomers form. They are called anomers and C1 is the anomeric centre. For a D sugar drawn in a Haworth projection with the CH2OH up, the alpha anomer has the anomeric OH down (trans to the CH2OH, and cis to the C5 oxygen in the Fischer projection) and the beta anomer has it up. Glucose in water is a 37:63 alpha:beta mixture, the beta anomer being favoured because in its chair every substituent is equatorial.",
      "approach": "Step 1: Confirm both rings are glucose: C2 OH down, C3 OH up, C4 OH down, CH2OH up, the Haworth translation of right-left-right-right.\nStep 2: Look at C1. The ring with the C1 OH down is alpha-D-glucopyranose.\nStep 3: The ring with the C1 OH up is beta-D-glucopyranose.\nStep 4: The galactose name in the list would need the C4 OH up; neither ring has it, so it is a decoy.",
      "note": "McMurry 25.5 (Cyclic Structures of Monosaccharides: Anomers), Figure 25.5, draws both anomers of D-glucopyranose and defines alpha as the anomer whose new OH is cis to the OH at the lowest chirality centre in a Fischer projection, beta as the trans one, and reports the 37:63 equilibrium, the melting points and specific rotations of the pure anomers (alpha +112.2, beta +18.7) and the mutarotation of each to +52.6 in water.",
      "options": {
        "A": "Correct. The rings are the two anomers of D-glucopyranose; C1 OH down is alpha and C1 OH up is beta.",
        "B": "The two rings are swapped. Alpha and beta are read at C1 only: for a D sugar with its CH2OH on top, the anomeric OH is down in the alpha anomer and up in the beta anomer."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q3_classify_fructose",
    "topic": "Classification of Carbohydrates",
    "difficulty_level": "Easy",
    "question_text": "The monosaccharide shown is drawn in its open-chain form. How is it classified?",
    "question_smiles": "OCC(=O)[C@@H](O)[C@H](O)[C@H](O)CO",
    "structure_alt": "A six-carbon chain with a C=O on the second carbon, an OH on every other carbon including both ends, and stereochemistry shown at three carbons.",
    "options": [
      {
        "option_id": "A",
        "text": "A ketohexose",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "An aldohexose",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A ketopentose",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "An aldoheptose",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A monosaccharide is classified by two features of its open-chain form: the kind of carbonyl group (an aldehyde at C1 makes it an aldose, a ketone, normally at C2, makes it a ketose) and the number of carbons (triose, tetrose, pentose, hexose, heptose). The two parts are combined into one word, aldohexose or ketopentose, and the number of carbons is counted over the whole chain, carbonyl carbon included, not just the carbons carrying OH groups.",
      "approach": "Step 1: Find the carbonyl. It is on C2, between a CH2OH and a CHOH, so it is a ketone: a ketose.\nStep 2: Count the carbons: CH2OH, C=O, CHOH, CHOH, CHOH, CH2OH, six in all: a hexose.\nStep 3: Combine: ketohexose. The three stereocentres at C3, C4 and C5, with the C5 OH on the right in a Fischer projection, make it D-fructose.\nStep 4: An aldohexose would carry a CHO at C1 with five CHOH/CH2OH carbons below it; this compound has no aldehyde.",
      "note": "McMurry 25.1 (Classification of Carbohydrates) gives the vocabulary: the -ose suffix marks a carbohydrate, aldo- and keto- name the carbonyl type, and tri-, tetr-, pent-, hex- count the carbons, with glucose as an aldohexose, fructose as a ketohexose, ribose as an aldopentose and sedoheptulose as a ketoheptose. Problem 25-1 asks for the same classification of four drawn sugars. Fructose's ring forms are McMurry 25.5 and its behaviour as a reducing sugar McMurry 25.6.",
      "options": {
        "A": "Correct. The carbonyl is a ketone at C2 and the chain has six carbons: a ketohexose, and with these configurations, D-fructose.",
        "B": "An aldohexose has an aldehyde, a CHO group at C1. The drawn compound's carbonyl is flanked by two carbons, so it is a ketone; the carbon count of six is right but the carbonyl type is not.",
        "C": "Ketone is right, but a pentose has five carbons. Counting both CH2OH ends, the C=O and the three CHOH carbons gives six.",
        "D": "The chain has six carbons, not seven, and the carbonyl is a ketone rather than an aldehyde, so both halves of aldoheptose are wrong. Sedoheptulose is the text's ketoheptose example."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q4_fischer_allowed_motions",
    "topic": "Fischer Projections",
    "difficulty_level": "Medium",
    "question_text": "Which manipulation of a Fischer projection on the page leaves the configuration it represents unchanged?",
    "options": [
      {
        "option_id": "A",
        "text": "Rotating the whole projection by 180° in the plane of the page",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Rotating the whole projection by 90° in the plane of the page",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Exchanging the two horizontal groups with each other",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Flipping the projection over, so that it is viewed from the back of the page",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Fischer projection is a convention, not a picture: horizontal bonds come toward the viewer and vertical bonds go away. Any manipulation that keeps the horizontal groups horizontal and the vertical groups vertical keeps the convention, and any that swaps the two sets inverts the meaning. Only two motions are allowed: a 180° rotation in the plane, and holding one group fixed while the other three rotate among their positions (which is just a rotation about a single bond). Everything else, including a 90° turn, a single swap of two groups, or turning the page over, converts the drawing into its enantiomer.",
      "approach": "Step 1: A 180° rotation moves the top group to the bottom and the right group to the left, but horizontal stays horizontal and vertical stays vertical, so the two out-of-plane groups are still out of plane: same configuration.\nStep 2: A 90° rotation moves a horizontal (toward you) group into a vertical (away) position and vice versa: the projection now shows the enantiomer.\nStep 3: Exchanging any two groups on a stereocentre is an inversion, in a Fischer projection as in any drawing; two exchanges restore it.\nStep 4: Viewing from the back reverses which groups are toward the viewer, again the enantiomer.",
      "note": "McMurry 25.2 (Representing Carbohydrate Stereochemistry: Fischer Projections) states both allowed motions and works the glyceraldehyde case: a 180° rotation of (R)-glyceraldehyde still shows (R), a 90° rotation shows (S), and holding one group steady while the other three rotate is a rotation about a single bond that does not change stereochemistry. Problem 25-3 asks which of four glyceraldehyde projections are the same enantiomer, which is this rule applied four times.",
      "options": {
        "A": "Correct. A 180° in-plane rotation keeps horizontal groups horizontal and vertical groups vertical, so the toward-and-away assignments survive.",
        "B": "A 90° rotation puts the groups that were coming toward you into the away positions, which is exactly the swap that inverts a stereocentre. The text's example turns (R)-glyceraldehyde into a drawing of (S)-glyceraldehyde this way.",
        "C": "Swapping any two substituents on a tetrahedral centre inverts it. In a Fischer projection the two horizontal groups are the two that point toward you, and exchanging them gives the mirror-image centre.",
        "D": "Turning the page over makes the horizontal bonds point away from the viewer instead of toward. Every centre in the projection is then read inverted, giving the enantiomer of the molecule drawn."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q5_fischer_90_rotation",
    "topic": "Fischer Projections",
    "difficulty_level": "Medium",
    "question_text": "A Fischer projection of (R)-glyceraldehyde (CHO at the top, CH2OH at the bottom, OH on the right, H on the left) is rotated by 90° on the page. What does the rotated drawing now represent?",
    "options": [
      {
        "option_id": "A",
        "text": "(S)-Glyceraldehyde, the enantiomer",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(R)-Glyceraldehyde still; an in-plane rotation cannot change a configuration",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A meso form of glyceraldehyde",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Nothing definite; a Fischer projection with the carbonyl not at the top is undefined",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Fischer convention ties stereochemistry to orientation: horizontal groups point toward the viewer, vertical groups away. Rotating the drawing by 90° moves the H and OH, which were horizontal and toward the viewer, onto vertical bonds pointing away, and moves the CHO and CH2OH toward the viewer. The molecule that drawing now encodes has the H and OH behind and the carbon groups in front, which is the mirror image of the one drawn before. So a 90° rotation of a Fischer projection represents the enantiomer, even though nothing has been redrawn.",
      "approach": "Step 1: Before rotation: OH and H horizontal (toward you), CHO and CH2OH vertical (away). Priorities OH > CHO > CH2OH > H; with H toward the viewer, the apparent OH to CHO to CH2OH sense is reversed to give R.\nStep 2: After a 90° turn, H and OH lie on the vertical bonds and point away; CHO and CH2OH are horizontal and point toward you.\nStep 3: Read the new drawing as a Fischer projection: the same four labels sit at the same points on the page, but the toward-and-away assignments have swapped, which inverts the centre.\nStep 4: The rotated drawing therefore represents (S)-glyceraldehyde. Rotate it a further 90° (180° in all) and it represents (R) again.",
      "note": "McMurry 25.2 (Representing Carbohydrate Stereochemistry: Fischer Projections) uses exactly this example: after a 90° rotation the H and OH of (R)-glyceraldehyde go into the plane instead of coming out of it, and the rotated projection represents (S)-glyceraldehyde. Glyceraldehyde has a single stereocentre, so it has no meso form; and a Fischer projection is defined by its bond conventions, not by where the carbonyl sits, though carbohydrate projections put the carbonyl at or near the top by custom (McMurry 25.3).",
      "options": {
        "A": "Correct. A 90° rotation swaps which groups come toward the viewer, inverting the centre, so the drawing now encodes (S)-glyceraldehyde.",
        "B": "An in-plane rotation of a real molecule cannot change its configuration, but a Fischer projection is not a real molecule: its meaning depends on which groups are horizontal. Only a 180° rotation preserves that; 90° breaks it.",
        "C": "A meso compound needs at least two stereocentres arranged so that an internal mirror plane exists. Glyceraldehyde has one stereocentre, so it has only two enantiomers and no meso form.",
        "D": "The projection is perfectly definite; the Fischer rules (horizontal toward, vertical away) apply whatever group sits at the top. Placing the carbonyl at the top is a custom for carbohydrates, not a requirement of the convention."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q6_fischer_assign_erythrose_c2",
    "topic": "Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "In the Fischer projection of D-erythrose, C2 has CHO at the top, CH(OH)CH2OH (C3) at the bottom, OH on the right and H on the left. What is the configuration at C2?",
    "options": [
      {
        "option_id": "A",
        "text": "R",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "S",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "R, but only because D sugars are defined to be R at every centre",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It cannot be assigned from a Fischer projection without converting to a wedge drawing",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "R and S can be assigned directly in a Fischer projection by the text's three steps: rank the substituents, bring the lowest-ranked group (usually H) to the top by an allowed motion so that it points away from the viewer, and read the sense of 1 to 2 to 3. The ranking needs care at a sugar carbon: OH is first, then the two carbon groups are compared by their attached atoms, and an aldehyde carbon (O, O, H) outranks a CHOH carbon (O, C, H). D and L say nothing about individual descriptors; a D sugar can have S centres, and D-erythrose is (2R,3R) only because that is how the priorities fall.",
      "approach": "Step 1: Rank the groups on C2: OH (1), CHO (2, attached O, O, H), CH(OH)CH2OH (3, attached O, C, H), H (4).\nStep 2: H is on a horizontal bond, toward the viewer. Hold the bottom group (C3) steady and rotate the other three one place: H moves to the top, CHO to the right, OH to the left. This is an allowed motion and changes nothing.\nStep 3: Now H is at the top, pointing away. Read OH (left) to CHO (right) to C3 (bottom): left to right across the top, then down to the bottom, a clockwise sweep.\nStep 4: Clockwise with the lowest group away is R. C2 of D-erythrose is R (and C3, its D centre, is R as well).",
      "note": "McMurry 25.2 (Representing Carbohydrate Stereochemistry: Fischer Projections) gives the three-step procedure and works it for a Fischer projection of alanine, arriving at S by holding the CH3 group steady and rotating the other three counterclockwise to bring H to the top; Problems 25-2 and 25-5 apply it to sugar centres. A shortcut with the same result: with H on a horizontal bond, read the apparent direction and reverse it. McMurry 25.3 is explicit that D and L describe only the configuration at the lowest stereocentre, and the name (2R,3S,4S)-tetrahydroxypentanal for (+)-arabinose in Problem 25-7 shows a D or L sugar carrying mixed descriptors.",
      "options": {
        "A": "Correct. With H brought to the top by rotating three groups, OH to CHO to C3 runs clockwise, and CHO outranks the CHOH carbon because it carries two oxygens.",
        "B": "S is what you get by reading the drawing as it stands, with H toward the viewer, and forgetting to reverse. The apparent sense is counterclockwise; because the lowest-priority group points at you, the true descriptor is the opposite, R.",
        "C": "The descriptor is R, but not for this reason. D means only that the OH at the lowest stereocentre is on the right; it fixes nothing at the other centres, and several D sugars have S centres (D-arabinose is 2S, D-mannose is 2S,3S).",
        "D": "A Fischer projection encodes the three-dimensional arrangement exactly (horizontal toward, vertical away), so R or S can be read from it directly once the lowest group is placed at the top or the apparent sense is reversed for a horizontal H."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q7_meaning_of_d",
    "topic": "D,L Sugars",
    "difficulty_level": "Easy",
    "question_text": "What does the prefix D in a sugar name such as D-glucose specify?",
    "options": [
      {
        "option_id": "A",
        "text": "That the OH group at the stereocentre farthest from the carbonyl is on the right in the Fischer projection, the same R configuration as (R)-(+)-glyceraldehyde",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "That the sugar is dextrorotatory, rotating plane-polarised light clockwise",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "That every OH group in the Fischer projection is on the right",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "That the OH group at C2, the first stereocentre below the carbonyl, is on the right",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "D and L are relative descriptors inherited from glyceraldehyde. (R)-(+)-glyceraldehyde, the naturally occurring enantiomer, was called D, and a sugar is D if the stereocentre farthest from its carbonyl has the same configuration, which puts that OH on the right in a standard Fischer projection. The system says nothing about the other stereocentres, and nothing about the sign of rotation: D-glyceraldehyde happens to be dextrorotatory, but D-fructose is strongly levorotatory. Most natural sugars are D because of how they are biosynthesised.",
      "approach": "Step 1: Locate the stereocentre farthest from the carbonyl: C5 in an aldohexose, C4 in an aldopentose, C2 in glyceraldehyde.\nStep 2: In the Fischer projection with the carbonyl at the top, an OH on the right at that centre means D; on the left means L.\nStep 3: Check the other centres: they can be anything. D-glucose has its C3 OH on the left and is still D.\nStep 4: Do not read the sign of rotation from the letter. D-glucose is (+), D-fructose is (-); both are D sugars.",
      "note": "McMurry 25.3 (D,L Sugars) defines D and L through (R)-(+)-glyceraldehyde and (S)-(-)-glyceraldehyde and states, in so many words, that the notations have no relation to the direction a sugar rotates plane-polarised light, that a D sugar can be dextrorotatory or levorotatory, and that the D,L system describes the configuration at only one chirality centre. An L sugar is the enantiomer of the D sugar, opposite at every centre, not just at the last one.",
      "options": {
        "A": "Correct. D is defined at the bottom stereocentre only, by analogy with (R)-(+)-glyceraldehyde, and puts that OH on the right in the Fischer projection.",
        "B": "D once stood for dextrorotatory, but only for glyceraldehyde itself. The letter now names a configuration, and D sugars rotate light either way: D-fructose is levorotatory, which is why sucrose hydrolysis gives invert sugar (McMurry 25.8).",
        "C": "Only the bottom stereocentre is specified. D-glucose has one OH on the left (C3) and D-mannose two (C2 and C3); the sugar with every OH on the right is D-allose alone.",
        "D": "The reference centre is the one farthest from the carbonyl, not the nearest. D-mannose and D-arabinose have their C2 OH on the left and are D sugars."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q8_arabinose_d_or_l",
    "topic": "D,L Sugars",
    "difficulty_level": "Hard",
    "question_text": "(+)-Arabinose, an aldopentose widely distributed in plants, is (2R,3S,4S)-2,3,4,5-tetrahydroxypentanal. Which is it?",
    "options": [
      {
        "option_id": "A",
        "text": "L-Arabinose: the C4 centre is S, so its OH is on the left in the Fischer projection",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "D-Arabinose: the (+) sign of rotation shows it is a D sugar",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "D-Arabinose: C2 is R, and D sugars are R at the first stereocentre",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "L-Ribose: an S at both C3 and C4 means all the OH groups are on the left",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "D or L is decided by one centre, the stereocentre farthest from the carbonyl, C4 in an aldopentose. In a Fischer projection with CHO at the top, that carbon's substituents are OH, CHO-side chain, CH2OH and H, ranked OH > CHOH chain > CH2OH > H, and an OH on the right comes out as R, on the left as S. So a D-pentose is 4R and an L-pentose is 4S, whatever C2 and C3 are doing. The sign of rotation is irrelevant: (+) and (-) are measured, D and L are assigned by structure.",
      "approach": "Step 1: Identify the D/L reference centre: C4, the last stereocentre before CH2OH.\nStep 2: Its descriptor is S. At C4 the ranking is OH > C3 (O, C, H) > C5 (O, H, H) > H; with the OH on the right in a Fischer projection the centre reads R, with it on the left it reads S. So the C4 OH is on the left: an L sugar.\nStep 3: Write the whole projection by the same reasoning: C2 R puts its OH on the right, C3 S on the left, C4 S on the left: right, left, left. That is the mirror image of D-arabinose (left, right, right), so the sugar is L-arabinose.\nStep 4: The (+) rotation is consistent with L-arabinose being the natural, dextrorotatory enantiomer; it plays no part in the assignment.",
      "note": "McMurry 25.3 (D,L Sugars) sets this as Problem 25-7 and, in the same section, states that the naturally abundant arabinose of plants is L-arabinose, one of the few common L sugars; McMurry 25.4 repeats that L-arabinose is found in many plants. The text also warns there that the D and L notations have no relation to the direction of optical rotation, which is the trap in this question.",
      "options": {
        "A": "Correct. The reference centre C4 is S, which places its OH on the left; right-left-left is the mirror image of D-arabinose's left-right-right, so this is L-arabinose.",
        "B": "The sign of rotation never decides D or L; the text says so directly. L-arabinose is dextrorotatory, just as D-fructose is levorotatory.",
        "C": "D and L are assigned at the stereocentre farthest from the carbonyl, C4 here, not at C2. C2 being R is true of L-arabinose and irrelevant to the letter.",
        "D": "S at C3 and C4 does put those two OH groups on the left, but C2 is R with its OH on the right. Right-left-left is L-arabinose; L-ribose would be left-left-left, and the given name has C2 as R."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q9_aldoheptose_count",
    "topic": "Configurations of the Aldoses",
    "difficulty_level": "Medium",
    "question_text": "How many stereoisomeric aldoheptoses are there, and how many of them are D sugars?",
    "options": [
      {
        "option_id": "A",
        "text": "32 aldoheptoses, of which 16 are D and 16 are L",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "16 aldoheptoses, of which 8 are D and 8 are L",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "64 aldoheptoses, of which 32 are D and 32 are L",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "32 aldoheptoses, all of them D because C6 must be R",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An aldose with n carbons has n minus 2 stereocentres: every carbon except the aldehyde carbon and the terminal CH2OH. Each stereocentre doubles the count, giving 2 to the power (n minus 2) stereoisomers, and since no aldose has an internal mirror plane (the two ends, CHO and CH2OH, are different) none is meso, so every one has a distinct enantiomer. Exactly half are D (bottom OH on the right) and half are L, because inverting every centre of a D sugar gives an L sugar and vice versa.",
      "approach": "Step 1: An aldoheptose has seven carbons: C1 is CHO, C7 is CH2OH, and C2 through C6 are five CHOH stereocentres.\nStep 2: Five independent stereocentres give 2^5 = 32 stereoisomers.\nStep 3: None is meso, so the 32 form 16 enantiomeric pairs.\nStep 4: In each pair one member has the C6 OH on the right (D) and the other on the left (L): 16 D and 16 L. This matches the pattern in the text: 4 aldotetroses (2 D), 8 aldopentoses (4 D), 16 aldohexoses (8 D).",
      "note": "McMurry 25.4 (Configurations of the Aldoses) counts the smaller aldoses exactly this way, 2^2 = 4 aldotetroses in two D,L pairs, 2^3 = 8 aldopentoses in four pairs, 2^4 = 16 aldohexoses in eight pairs, and sets the aldoheptose count as Problem 25-9. The reasoning fails for aldaric acids and alditols, whose two ends are the same, so that some of them are meso (Problems 25-17 and 25-19, McMurry 25.6).",
      "options": {
        "A": "Correct. Five stereocentres (C2 to C6) give 2^5 = 32 stereoisomers, none meso, so 16 enantiomeric pairs and therefore 16 D sugars.",
        "B": "Sixteen is the aldohexose count, from four stereocentres. An aldoheptose has one more CHOH carbon, five stereocentres in all, which doubles the number to 32.",
        "C": "Sixty-four would need six stereocentres, an aldooctose. Only the five interior CHOH carbons of a heptose are stereocentres; the CHO and CH2OH carbons are not.",
        "D": "D and L are opposite configurations at C6, not a requirement. Every D-aldoheptose has an L enantiomer with C6 (and every other centre) inverted, so the 32 split evenly."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q10_c2_epimers",
    "topic": "Configurations of the Aldoses",
    "difficulty_level": "Medium",
    "question_text": "Which pair of D-aldohexoses are C2 epimers, differing in configuration only at C2?",
    "options": [
      {
        "option_id": "A",
        "text": "D-Glucose and D-mannose",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "D-Glucose and D-galactose",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "D-Glucose and D-allose",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "D-Glucose and D-gulose",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Epimers are diastereomers that differ at exactly one stereocentre. In Fieser's layout the C2 OH alternates right, left, right, left across the eight D-aldohexoses, so each adjacent pair in the row (allose and altrose, glucose and mannose, gulose and idose, galactose and talose) is a pair of C2 epimers. The C3 OH alternates in twos, so glucose and allose differ at C3; the C4 OH switches halfway, so glucose and galactose differ at C4. The glucose-mannose pair matters chemically: they are the two products of Kiliani-Fischer extension of D-arabinose, and fructose isomerises to a mixture of both in base.",
      "approach": "Step 1: Write the Fischer OH pattern of D-glucose from C2 to C5: right, left, right, right.\nStep 2: D-mannose is left, left, right, right: one change, at C2. C2 epimers.\nStep 3: D-galactose is right, left, left, right: one change, at C4. C4 epimers.\nStep 4: D-allose is right, right, right, right: one change, at C3. C3 epimers.\nStep 5: D-gulose is right, right, left, right: two changes, at C3 and C4, so not an epimer of glucose at all, just a diastereomer.",
      "note": "McMurry 25.4 (Configurations of the Aldoses), Figure 25.4, arranges the eight D-aldohexoses so that the C2 OH alternates right and left, which makes each neighbouring pair C2 epimers; McMurry 25.5 uses the glucose-mannose relationship in its worked example on drawing D-mannose's chair (D-mannose differs from D-glucose in its stereochemistry at C2), and McMurry 25.6 has D-arabinose giving D-glucose plus D-mannose on Kiliani-Fischer extension and fructose isomerising to the same pair. The text does not use the word epimer here; it appears in the ACS exam and in most lectures.",
      "options": {
        "A": "Correct. Glucose (right, left, right, right) and mannose (left, left, right, right) differ only at C2, the alternating column of Fieser's row.",
        "B": "Glucose and galactose differ at C4 (right in glucose, left in galactose); they are C4 epimers. Galactose is the C4 column's switch point in Fieser's row.",
        "C": "Glucose and allose differ at C3: allose has every OH on the right, glucose has C3 on the left. They are C3 epimers.",
        "D": "Gulose differs from glucose at both C3 and C4 (right, right, left, right against right, left, right, right), so the two are diastereomers but not epimers of each other."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q11_glucose_galactose_c4",
    "topic": "Configurations of the Aldoses",
    "difficulty_level": "Easy",
    "question_text": "D-Galactose, the sugar joined to glucose in lactose, has the same Fischer projection as D-glucose except at one carbon. Which one?",
    "options": [
      {
        "option_id": "A",
        "text": "C4",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "C2",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "C3",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "C5",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "D-Glucose reads right, left, right, right from C2 to C5 and D-galactose reads right, left, left, right: they are C4 epimers. In the pyranose ring the difference shows as the C4 OH pointing up (axial in the chair) in galactose where glucose's points down (equatorial), which is why beta-D-galactopyranose is a little less stable than beta-D-glucopyranose, with one axial OH instead of none. Biologically the two are interconverted at C4 by an epimerase acting on the UDP-sugar, which is how dietary galactose enters glucose metabolism.",
      "approach": "Step 1: Recall or regenerate D-glucose: C2 right, C3 left, C4 right, C5 right.\nStep 2: Galactose is the seventh sugar in Fieser's row (in gallon tanks): C4 left, C3 left, C2 right, C5 right.\nStep 3: Compare column by column: C2 same, C3 same, C4 different, C5 same (both D).\nStep 4: So the two differ only at C4; in the Haworth projection galactose's C4 OH is up.",
      "note": "McMurry 25.4 (Configurations of the Aldoses) gives both projections in Figure 25.4, and McMurry 25.5, Problem 25-13, asks for the chair of beta-D-galactopyranose with its substituents labelled axial or equatorial and a judgement of whether galactose or mannose is the more stable; galactose's one axial group is the C4 OH. McMurry 25.8 describes lactose as galactose linked beta from its C1 to C4 of glucose, and McMurry 25.7 lists D-galactose among the eight essential monosaccharides.",
      "options": {
        "A": "Correct. Galactose is glucose with the C4 OH moved to the left; in the ring that OH points up and sits axial in the chair.",
        "B": "A change at C2 would give D-mannose, not galactose. Both glucose and galactose have the C2 OH on the right.",
        "C": "A change at C3 would give D-allose. Glucose and galactose both have the C3 OH on the left.",
        "D": "C5 is the D/L reference centre and is on the right in both; changing it would give an L sugar, L-idose in fact, since inverting C5 of D-glucose alone gives the mirror image of the idose pattern."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q12_name_l_xylose",
    "topic": "Configurations of the Aldoses",
    "difficulty_level": "Hard",
    "question_text": "Name the aldopentose whose Fischer projection is shown, including its D or L designation.",
    "question_smiles": "FISCHER:L,R,L",
    "structure_alt": "A Fischer projection with CHO at the top and CH2OH at the bottom and three stereocentres. Reading down from C2, the OH groups are on the left, right, left.",
    "options": [
      {
        "option_id": "A",
        "text": "L-Xylose",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "D-Xylose",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "D-Lyxose",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "L-Ribose",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two readings name any aldose from its Fischer projection. First the bottom stereocentre: OH on the left means an L sugar. Second, an L sugar is the mirror image of its D partner at every centre, so flip every OH to the other side and look the result up among the D sugars, whose patterns are the ones the mnemonics give (ribose right-right-right, arabinose left-right-right, xylose right-left-right, lyxose left-left-right). The name of the D sugar found, with L in front, names the drawn compound.",
      "approach": "Step 1: C4, the bottom stereocentre, has its OH on the left: an L sugar.\nStep 2: Invert every position to get the enantiomer: left, right, left becomes right, left, right.\nStep 3: Right, left, right is D-xylose (the X in RIBs ARe eXtra Lean, third in the row: C3 left, C2 right).\nStep 4: The drawn sugar is therefore L-xylose. Rotating the drawing 180° would not help; only the full inversion converts between L and D.",
      "note": "McMurry 25.4 (Configurations of the Aldoses) asks for exactly this kind of conversion in Problem 25-8 (draw L-xylose, L-galactose and L-allose from the D projections of Figure 25.4) and reminds the reader that each D aldose has an L enantiomer that the figure does not show; McMurry 25.3 states that an L sugar has the opposite configuration from the D sugar at all chirality centres, not only the last. D-xylose itself is the wood sugar and one of the eight essential monosaccharides (McMurry 25.7).",
      "options": {
        "A": "Correct. The bottom OH on the left makes it L, and inverting every centre gives right-left-right, the D-xylose pattern, so this is L-xylose.",
        "B": "D-Xylose has its C4 OH on the right; the drawn projection has it on the left, so the sugar is the L enantiomer. The xylose part is right, the letter is not.",
        "C": "D-Lyxose is left, left, right: its C4 OH is on the right and its C3 OH on the left. The drawn sugar has C4 on the left and C3 on the right, matching neither column.",
        "D": "L-Ribose would have every OH on the left, the mirror image of D-ribose's all-right pattern. The drawn projection has the C3 OH on the right."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q13_pick_l_galactose",
    "topic": "Configurations of the Aldoses",
    "difficulty_level": "Hard",
    "question_text": "Which Fischer projection is L-galactose? Each option is captioned with the side of the OH group at C2, C3, C4 and C5.",
    "options": [
      {
        "option_id": "A",
        "text": "OH left, right, right, left (C2 to C5)",
        "smiles": "FISCHER:L,R,R,L",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "OH right, left, left, right (C2 to C5)",
        "smiles": "FISCHER:R,L,L,R",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "OH left, right, left, left (C2 to C5)",
        "smiles": "FISCHER:L,R,L,L",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "OH right, right, right, left (C2 to C5)",
        "smiles": "FISCHER:R,R,R,L",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An L sugar is the enantiomer of the D sugar of the same name, so its Fischer projection is the D projection with every OH moved to the other side, not just the bottom one. D-Galactose is right, left, left, right (C2 to C5); L-galactose is therefore left, right, right, left. Two of the wrong answers are L sugars with a different pattern (L-glucose and L-talose), and one is D-galactose itself, the enantiomer of the answer. Checking only the bottom centre finds the L sugars; checking the other three centres finds the galactose.",
      "approach": "Step 1: Write D-galactose from Fieser's row: C2 right, C3 left, C4 left, C5 right.\nStep 2: Invert every centre for the L enantiomer: left, right, right, left.\nStep 3: The projection reading left, right, right, left matches: that is L-galactose.\nStep 4: Right, left, left, right is the unchanged D-galactose; left, right, left, left is the inversion of glucose's right, left, right, right, so L-glucose; right, right, right, left is the inversion of talose's left, left, left, right, so L-talose.",
      "note": "McMurry 25.4 (Configurations of the Aldoses), Problem 25-8(b), asks for exactly this projection, and its worked example on drawing L-fructose gives the method: look at the D structure and reverse the configuration at each chirality centre. McMurry 25.3 states that an L sugar is the mirror image of the corresponding D sugar with the opposite configuration at all chirality centres. Inverting only C5 of D-galactose does not give L-galactose; it gives L-altrose (right, left, left, left), a different diastereomer, which is why the bottom centre alone is not enough.",
      "options": {
        "A": "Correct. Left, right, right, left is D-galactose (right, left, left, right) with every centre inverted, which is the definition of the L enantiomer.",
        "B": "Right, left, left, right is D-galactose itself. Its bottom OH is on the right, so it is a D sugar; L-galactose is its mirror image with every OH on the other side.",
        "C": "Left, right, left, left is an L sugar, but inverting it back gives right, left, right, right, which is glucose. This is L-glucose.",
        "D": "Right, right, right, left is an L sugar whose D enantiomer is left, left, left, right, the talose pattern. This is L-talose; L-galactose has its C2 OH on the left."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q14_pyranose_ring_closure",
    "topic": "Cyclic Structures of Monosaccharides: Anomers",
    "difficulty_level": "Easy",
    "question_text": "D-Glucose exists in water mainly as a six-membered cyclic hemiacetal, glucopyranose. Which hydroxyl group adds to the C1 aldehyde to close that ring?",
    "options": [
      {
        "option_id": "A",
        "text": "The C5 OH, giving a ring of five carbons and one oxygen",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The C4 OH, giving a five-membered ring",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The C6 OH, giving a six-membered ring of six carbons",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The C2 OH, since it is closest to the carbonyl",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A hydroxyl group and an aldehyde in the same molecule add to each other to give a cyclic hemiacetal whenever the ring formed is five- or six-membered and therefore nearly strain-free. In an aldohexose the ring atoms are the carbonyl carbon, the carbons between it and the attacking OH, and that OH's oxygen. Counting from C1, the C5 OH closes a six-membered ring (C1 to C5 plus O), called a pyranose after pyran; the C4 OH closes a five-membered ring (C1 to C4 plus O), a furanose. Glucose prefers the pyranose; ribose and fructose populate furanoses as well.",
      "approach": "Step 1: The ring must contain C1 (the carbonyl carbon) and the oxygen of the attacking OH.\nStep 2: The C5 OH gives ring atoms C1, C2, C3, C4, C5 and O: six-membered, a pyranose. The CH2OH (C6) hangs off the ring at C5.\nStep 3: The C4 OH would give C1 to C4 plus O, five-membered, a furanose; the C6 OH would give a seven-membered ring; the C2 OH a three-membered one. Only five and six are strain-free.\nStep 4: So glucopyranose forms by addition of the C5 OH to C1, creating the new anomeric stereocentre at C1.",
      "note": "McMurry 25.5 (Cyclic Structures of Monosaccharides: Anomers) states that glucose exists in aqueous solution primarily in the pyranose form resulting from intramolecular nucleophilic addition of the OH group at C5 to the C1 carbonyl group, names the ring after pyran, and gives the furanose as the five-membered alternative, with fructose's pyranose formed from its C6 OH and furanose from its C5 OH (both adding to the C2 ketone) and ribose's furanose from its C4 OH (Problem 25-11). The hemiacetal chemistry itself is McMurry 19.10.",
      "options": {
        "A": "Correct. The C5 oxygen bonds to C1, giving a six-membered ring of five carbons and one oxygen, the pyranose, with C6 as an exocyclic CH2OH.",
        "B": "The C4 OH closes a five-membered ring, a furanose. That is the form ribose and, in part, fructose adopt; glucose prefers the six-membered pyranose.",
        "C": "The C6 OH would close a seven-membered ring, and the ring in a pyranose contains an oxygen, not six carbons. A six-membered ring with C1 at one end needs the C5 oxygen.",
        "D": "The C2 OH is adjacent to the carbonyl; adding it would make a three-membered ring, far too strained to form. Ring closure needs an OH four or five atoms away."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q15_alpha_anomer_definition",
    "topic": "Cyclic Structures of Monosaccharides: Anomers",
    "difficulty_level": "Medium",
    "question_text": "In alpha-D-glucopyranose, where is the anomeric OH group at C1?",
    "options": [
      {
        "option_id": "A",
        "text": "On the bottom face of the Haworth ring, trans to the CH2OH group, and axial in the chair; cis to the C5 oxygen when the ring is drawn as a Fischer projection",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "On the top face of the Haworth ring, cis to the CH2OH group, and equatorial in the chair",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Equatorial in the chair, which is why the alpha anomer predominates at equilibrium in water",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "On the same face as the C2 OH, since alpha and beta are defined relative to C2",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The anomer is named relative to the D/L reference centre, C5. In a cyclic Fischer projection the alpha anomer has its new C1 OH on the same side as the C5 oxygen (cis) and the beta anomer on the opposite side (trans). Translated into a Haworth projection of a D sugar, whose CH2OH is on top, the alpha OH points down and the beta OH points up, so alpha is trans to CH2OH and beta cis. In the chair of D-glucopyranose the down OH at C1 is axial and the up OH is equatorial, which is why the beta anomer, with every group equatorial, is the more stable and the major one in water.",
      "approach": "Step 1: Locate the reference: the oxygen on C5, the centre that makes glucose D.\nStep 2: Alpha means the C1 OH is cis to that oxygen in the Fischer projection, on the right for a D sugar.\nStep 3: Right in a Fischer projection becomes down in a Haworth projection, so the alpha OH is down, trans to the CH2OH on top.\nStep 4: In the chair, the down C1 OH of D-glucopyranose is axial. Beta, with the OH up and equatorial, is the more stable anomer, 63% at equilibrium.",
      "note": "McMurry 25.5 (Cyclic Structures of Monosaccharides: Anomers) defines the alpha anomer as the compound whose newly generated OH group at C1 is cis to the OH at the lowest chirality centre in a Fischer projection and the beta anomer as the trans one, gives the 37:63 alpha:beta equilibrium for glucose, and notes that beta-D-glucopyranose has all its substituents equatorial and is the least sterically crowded of the aldohexoses. Definitions of alpha and beta by reference to C2 belong to older or informal usage; the text's definition is by the C5 (D/L) centre.",
      "options": {
        "A": "Correct. Alpha is cis to the C5 oxygen in the Fischer projection, which places the OH down in the Haworth ring, trans to CH2OH and axial in the glucose chair.",
        "B": "Up, cis to CH2OH and equatorial describes the beta anomer. The two anomers differ only at C1, and this is the other one.",
        "C": "The alpha OH is axial. The anomer that predominates in water (63%) is beta, precisely because its C1 OH is equatorial and every substituent on the ring is equatorial.",
        "D": "Alpha and beta are defined relative to the lowest chirality centre, C5, not C2. In D-glucose the alpha OH happens to be cis to the C2 OH as well, but that is a coincidence of glucose's pattern, and it fails for mannose, whose C2 OH is up."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q16_beta_glucose_most_stable",
    "topic": "Cyclic Structures of Monosaccharides: Anomers",
    "difficulty_level": "Medium",
    "question_text": "Why is beta-D-glucopyranose the most stable of the sixteen D-aldohexopyranose anomers, and the major form of glucose in water?",
    "options": [
      {
        "option_id": "A",
        "text": "In its chair conformation every ring substituent, the four OH groups and the CH2OH, is equatorial",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Its anomeric OH is axial, and an axial anomeric OH is stabilised by the ring oxygen",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It is the only anomer that can hydrogen-bond internally between the C1 and C2 hydroxyls",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Its OH groups alternate up and down around the ring, which minimises the dipole",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A pyranose ring is a chair, with axial and equatorial positions exactly as in cyclohexane, and each axial substituent costs 1,3-diaxial strain. Glucose's Fischer pattern (right, left, right, right) becomes down, up, down for the C2, C3, C4 hydroxyls with CH2OH up, and that alternation is the one that lets every group be equatorial in one chair. The beta anomer adds the C1 OH up, also equatorial. No other aldohexose can do this: mannose has an axial C2 OH, galactose an axial C4 OH, and the alpha anomer of glucose an axial C1 OH.",
      "approach": "Step 1: Draw D-glucopyranose as a chair with the ring oxygen at the right rear and C1 at the right.\nStep 2: Place the substituents: CH2OH up at C5, OH down at C4, up at C3, down at C2. In this chair each is equatorial because alternating up-down around a chair is the all-equatorial pattern.\nStep 3: Add the anomeric OH. Up (beta) is equatorial; down (alpha) is axial.\nStep 4: With nothing axial, beta-D-glucopyranose has no 1,3-diaxial interactions and is the most stable pyranose; in water the beta anomer is 63% of the mixture.",
      "note": "McMurry 25.5 (Cyclic Structures of Monosaccharides: Anomers) states that in beta-D-glucopyranose all the substituents on the ring are equatorial, so that it is the least sterically crowded and most stable of the eight D aldohexoses, and gives the 37:63 alpha:beta ratio in water; Problem 25-13 asks the same question of galactose and mannose. The anomeric effect that favours an axial anomeric substituent is real for glycosides and halides but is not in this text and does not overturn the equatorial preference of the free OH in water.",
      "options": {
        "A": "Correct. Glucose's alternating up-down pattern plus an up (beta) anomeric OH puts all five substituents equatorial in one chair, with no 1,3-diaxial strain.",
        "B": "The beta anomeric OH is equatorial, not axial; the axial one belongs to the alpha anomer, which is the minor form (37%). Stabilisation of an axial anomeric group, the anomeric effect, is not what makes beta-glucose the major anomer in water.",
        "C": "Adjacent equatorial hydroxyls can hydrogen-bond in either anomer, and in water the solvent supplies hydrogen bonds anyway. The stability difference is steric: axial versus equatorial at C1.",
        "D": "Alternating up and down in a Haworth drawing is the all-equatorial pattern in the chair, so the observation is right but the reason given is wrong: the benefit is the absence of axial groups and their 1,3-diaxial strain, not a smaller dipole."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q17_mutarotation",
    "topic": "Cyclic Structures of Monosaccharides: Anomers",
    "difficulty_level": "Medium",
    "question_text": "Pure alpha-D-glucopyranose has a specific rotation of +112.2. When it is dissolved in water, the rotation falls slowly to a constant +52.6, and pure beta-D-glucopyranose (+18.7) rises to the same value. What is happening?",
    "options": [
      {
        "option_id": "A",
        "text": "Each anomer opens reversibly to the open-chain aldehyde and recloses, so either pure anomer becomes the same 37:63 alpha:beta equilibrium mixture",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The C2 stereocentre epimerises through an enediol, converting part of the glucose into mannose",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The pyranose chair flips to its other chair conformation, which has a different rotation",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The ring hydrolyses to the open-chain aldehyde, which is the only form present at equilibrium",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Mutarotation is the change in optical rotation seen when a pure anomer is dissolved. A hemiacetal is in equilibrium with its aldehyde and alcohol, so each anomer of glucopyranose opens to the open-chain aldehyde and closes again, and the closure can give either anomer. Starting from pure alpha or pure beta, the solution drifts to the same equilibrium mixture, 37% alpha and 63% beta for glucose, whose rotation is the weighted average +52.6. The open-chain form itself is present only in trace amounts; it is the conduit, not the product. The process is slow at neutral pH and catalysed by acid or base.",
      "approach": "Step 1: Recognise the two starting values as the pure anomers and the common end point as a mixture: a slow approach from both sides to one value is an equilibration.\nStep 2: Identify the pathway: the C1 hemiacetal reverts to the C1 aldehyde plus the free C5 OH (ring opening), then the C5 OH re-adds to either face of the aldehyde (ring closing), giving alpha or beta.\nStep 3: Check the arithmetic: 0.37 x 112.2 + 0.63 x 18.7 = 41.5 + 11.8 = 53.3, close to the observed +52.6, so the end point is the anomer mixture, not something new.\nStep 4: Rule out the alternatives: no bond to C2 breaks, a chair flip is far too fast to be watched in a polarimeter, and an open-chain sugar is a minor component, not the equilibrium form.",
      "note": "McMurry 25.5 (Cyclic Structures of Monosaccharides: Anomers) gives the melting points and rotations of the pure anomers (alpha 146 °C, +112.2; beta 148-155 °C, +18.7), the common value +52.6, and the mechanism: mutarotation occurs by a reversible ring-opening of each anomer to the open-chain aldehyde followed by reclosure, slow at neutral pH and catalysed by both acid and base. Glycosides, whose C1 is an acetal rather than a hemiacetal, cannot open and show no mutarotation (McMurry 25.6).",
      "options": {
        "A": "Correct. Ring opening to the aldehyde and reclosure interconvert the anomers until the 37:63 equilibrium is reached from either side.",
        "B": "Epimerisation at C2 does occur in base through an enediol (it is how fructose becomes a reducing sugar), but it changes the sugar's identity, gives no reason for both anomers to converge on one value, and is not what a neutral solution of glucose does.",
        "C": "A chair flip takes microseconds and would be complete long before a polarimeter reading could be taken; and the flipped chair of glucopyranose, with everything axial, is a negligible component. The slow drift needs a bond-breaking step.",
        "D": "The open-chain aldehyde is the intermediate of mutarotation, but it is present only in trace amounts at equilibrium (well under 1% for glucose). The equilibrium mixture is the two ring forms."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q18_fructose_furanose",
    "topic": "Cyclic Structures of Monosaccharides: Anomers",
    "difficulty_level": "Medium",
    "question_text": "D-Fructose in water is about 68% beta-pyranose, 22% beta-furanose, with smaller amounts of the alpha forms and 0.5% open chain. Which hydroxyl group adds to the C2 ketone to give the furanose?",
    "options": [
      {
        "option_id": "A",
        "text": "The C5 OH, giving a five-membered ring of four carbons and one oxygen",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The C6 OH, giving a five-membered ring",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The C4 OH, giving a five-membered ring that includes C1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The C1 OH, since it is adjacent to the carbonyl",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Fructose is a ketose, so its carbonyl is at C2 and the ring atoms are counted from there. The C5 OH adding to C2 gives a ring containing C2, C3, C4, C5 and O: five-membered, a furanose, with both C1 (as CH2OH on the anomeric carbon) and C6 (as CH2OH on C5) outside the ring. The C6 OH adding to C2 gives C2 to C6 plus O, six-membered, the pyranose, which is the major form in water. In sucrose, fructose is locked as the beta-furanose, which is why the furanose matters biologically even though free fructose prefers the pyranose.",
      "approach": "Step 1: Locate the carbonyl: C2 in a ketohexose.\nStep 2: Count ring atoms for each candidate OH: C5 OH gives C2, C3, C4, C5, O = 5 (furanose); C6 OH gives C2 to C6 plus O = 6 (pyranose); C4 OH gives C2, C3, C4, O = 4 (strained, not formed); C1 OH gives C1, C2, O = 3 (not formed).\nStep 3: The furanose therefore comes from the C5 OH, and the anomeric carbon C2 carries an OH and the C1 CH2OH.\nStep 4: The pyranose from the C6 OH is the more stable free form (68% beta), as in glucose.",
      "note": "McMurry 25.5 (Cyclic Structures of Monosaccharides: Anomers) gives the distribution of D-fructose in water (68% beta-pyranose, 2.7% alpha-pyranose, 0.5% open-chain, 22.4% beta-furanose, 6.2% alpha-furanose) and states that the pyranose form results from addition of the OH at C6 to the carbonyl group while the furanose form results from addition of the OH at C5 (Figure 25.6); Problem 25-12 asks for the two alpha anomers. Ribose's furanose, by the same counting, comes from its C4 OH adding to the C1 aldehyde (Problem 25-11).",
      "options": {
        "A": "Correct. C2 to C5 plus the C5 oxygen is a five-membered ring; the furanose leaves C1 and C6 as CH2OH groups outside the ring.",
        "B": "The C6 OH closes a six-membered ring (C2 to C6 plus O), the pyranose, which is fructose's major form in water. A five-membered ring needs the OH one carbon closer.",
        "C": "The C4 OH would close a four-membered ring (C2, C3, C4, O), which does not form. C1 is the CH2OH on the anomeric carbon and is never part of the ring in fructose.",
        "D": "The C1 OH is on the carbon next to the carbonyl; adding it would make a three-membered ring. Ring closure needs an OH four or five atoms away from the carbonyl carbon."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q19_mannopyranose_axial",
    "topic": "Cyclic Structures of Monosaccharides: Anomers",
    "difficulty_level": "Hard",
    "question_text": "In the more stable chair conformation of beta-D-mannopyranose, which substituent is axial?",
    "options": [
      {
        "option_id": "A",
        "text": "The C2 OH only",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The C4 OH only",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The anomeric C1 OH only",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The CH2OH group at C5 only",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Beta-D-glucopyranose is the all-equatorial reference: CH2OH up at C5, and the OH groups up at C1 and C3, down at C2 and C4, each equatorial in the chair with the ring oxygen at the right rear. Any sugar that differs from glucose at one centre has that one substituent axial in the same chair. Mannose is glucose's C2 epimer (its C2 OH is on the left in the Fischer projection, so up in the ring), which makes the C2 OH the single axial group; galactose is the C4 epimer, so its odd one out is the C4 OH. Flipping the chair would make the other four groups axial, which is far worse.",
      "approach": "Step 1: Write beta-D-mannopyranose by comparison with beta-D-glucopyranose: identical except at C2, where the OH is up instead of down.\nStep 2: In the glucose chair every up-down alternation is equatorial; changing C2 from down to up changes it from equatorial to axial.\nStep 3: The other substituents (C1 OH up, C3 OH up, C4 OH down, CH2OH up) keep glucose's positions and stay equatorial.\nStep 4: So the chair has exactly one axial group, the C2 OH; beta-D-mannopyranose is slightly less stable than beta-D-glucopyranose and about as stable as beta-D-galactopyranose, whose one axial group is the C4 OH.",
      "note": "McMurry 25.5 (Cyclic Structures of Monosaccharides: Anomers) works this case in its example on drawing the chair conformation of an aldohexose: D-mannose differs from D-glucose in its stereochemistry at C2, and the strategy is to draw the Fischer projection, lay it on its side, curl it so that C1 is at the right front, and raise C4 while dropping C1. Problem 25-13 asks for the chairs of beta-D-galactopyranose and beta-D-mannopyranose with every substituent labelled axial or equatorial and a comparison of their stabilities.",
      "options": {
        "A": "Correct. Mannose is glucose's C2 epimer, and in the all-equatorial glucose chair the one inverted centre, C2, carries the one axial OH.",
        "B": "An axial C4 OH is galactose's situation, the C4 epimer of glucose. Mannose keeps glucose's C4 configuration, so its C4 OH is equatorial.",
        "C": "The beta anomeric OH is equatorial, as in beta-D-glucopyranose. An axial anomeric OH belongs to the alpha anomers.",
        "D": "The CH2OH at C5 is equatorial in every D-hexopyranose drawn in its normal chair; it is the group that fixes which chair is drawn. It would be axial only in the flipped chair, where almost everything else is axial too."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q20_l_glucopyranose_chair",
    "topic": "Cyclic Structures of Monosaccharides: Anomers",
    "difficulty_level": "Hard",
    "question_text": "How does the more stable chair conformation of beta-L-glucopyranose compare with that of beta-D-glucopyranose?",
    "options": [
      {
        "option_id": "A",
        "text": "It is the mirror image: every substituent is still equatorial, with the CH2OH and the anomeric OH now on the bottom face of the ring",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It is the ring-flipped chair of the D sugar, with every substituent axial",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It is the same compound drawn from the other side of the ring; D and L glucopyranose are identical once cyclised",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It differs from beta-D-glucopyranose only at C5, so only the CH2OH changes from equatorial to axial",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "L-Glucose is the enantiomer of D-glucose, opposite at every stereocentre, and enantiomers have mirror-image conformations of identical energy. The mirror image of an all-equatorial chair is an all-equatorial chair, so beta-L-glucopyranose has no axial substituents either; what changes is the face: the CH2OH of an L sugar is on the bottom of the ring, and so is the beta anomeric OH. Inverting only C5 would not give L-glucose but a different diastereomer (the L-idose pattern), which is the trap in the last option.",
      "approach": "Step 1: Draw beta-D-glucopyranose: CH2OH up, OH up at C1 and C3, down at C2 and C4, all equatorial.\nStep 2: Reflect every centre to get the L enantiomer: CH2OH down, OH down at C1 and C3, up at C2 and C4.\nStep 3: In the chair first drawn these are all axial; ring-flip it. The flipped chair puts all five substituents equatorial again, with CH2OH and the anomeric OH on the bottom face.\nStep 4: So the stable chair of beta-L-glucopyranose is the mirror image of beta-D-glucopyranose's, equally stable, not identical to it.",
      "note": "McMurry 25.5 (Cyclic Structures of Monosaccharides: Anomers) works this exact case in its example on drawing the chair conformation of a pyranose: begin with beta-D-glucopyranose, draw the mirror-image L enantiomer by changing the stereochemistry at every position, then ring-flip to the more stable chair, noting that the CH2OH group is on the bottom face of the ring in the L enantiomer, as is the anomeric OH. Problem 25-14 asks the same for beta-L-galactopyranose. The section also states that for L sugars the terminal CH2OH is on the bottom of the ring.",
      "options": {
        "A": "Correct. Enantiomers have mirror-image chairs of the same energy: all equatorial, with the CH2OH and beta OH on the bottom face for the L sugar.",
        "B": "Reflecting the D chair and keeping the same chair drawing does put everything axial, but that is not the stable conformation: a ring flip converts it to the all-equatorial mirror-image chair.",
        "C": "Cyclisation does not remove chirality. Beta-L-glucopyranose is the enantiomer of beta-D-glucopyranose, with opposite configuration at all five ring stereocentres; the two are different compounds with opposite rotations.",
        "D": "Changing only C5 gives a diastereomer, not the enantiomer. L-Glucose is inverted at C2, C3, C4 and C5 all together; inverting C5 alone gives the pattern of L-idose."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q21_pentaacetate_scheme",
    "topic": "Reactions of Monosaccharides",
    "difficulty_level": "Medium",
    "question_text": "beta-D-Glucopyranose is treated with excess acetic anhydride in pyridine. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "OC[C@H]1O[C@@H](O)[C@H](O)[C@@H](O)[C@@H]1O"
      ],
      "reagents": "(CH3CO)2O (excess), pyridine",
      "conditions": "25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-membered ring of five carbons and one oxygen with an OH on each of four ring carbons, a CH2OH on the fifth, and stereochemistry shown at every ring carbon: beta-D-glucopyranose."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Penta-O-acetyl-beta-D-glucopyranose: all five OH groups, including the anomeric one, are acetylated",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A tetraacetate: the four alcohol OH groups react but the anomeric hemiacetal OH does not",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The open-chain pentaacetate, with a free aldehyde at C1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A monoacetate at the primary C6 OH, the only hydroxyl reactive enough toward the anhydride",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A monosaccharide's hydroxyl groups behave as ordinary alcohols. Treated with an acid anhydride or acid chloride and a base such as pyridine, every OH is converted to an ester, the anomeric hemiacetal OH included, and the ring stays closed because the anomeric acetate is an acylal that no longer opens. The pentaacetate is soluble in organic solvents and crystalline, which is the practical reason sugar chemists make it; it is also the starting material for the Koenigs-Knorr glycosylation (treatment with HBr gives the glycosyl bromide).",
      "approach": "Step 1: Count the hydroxyls on beta-D-glucopyranose: OH at C1 (hemiacetal), C2, C3, C4 and the primary CH2OH at C6, five in all.\nStep 2: Each reacts with acetic anhydride by nucleophilic acyl substitution, pyridine scavenging the acetic acid formed and activating the anhydride.\nStep 3: The anomeric OH is a hemiacetal hydroxyl but still a hydroxyl; it acetylates like the rest, and once acetylated the ring cannot open.\nStep 4: Product: penta-O-acetyl-beta-D-glucopyranose (C16H22O11), the anomeric configuration retained.",
      "note": "McMurry 25.6 (Reactions of Monosaccharides) states that esterification is carried out with an acid chloride or acid anhydride in the presence of a base, that all the OH groups react, including the anomeric one, and gives beta-D-glucopyranose to its pentaacetate with acetic anhydride in pyridine as the example; Problem 25-16 asks for the same reaction on beta-D-ribofuranose. The nucleophilic acyl substitution itself is McMurry 21.4 and 21.5, and the pentaacetate reappears in the Koenigs-Knorr sequence later in 25.6.",
      "options": {
        "A": "Correct. With excess anhydride every hydroxyl, the anomeric one included, becomes an acetate and the ring remains closed.",
        "B": "The anomeric OH is a hydroxyl like the others and is acetylated under these conditions; the text says all the OH groups react, including the anomeric one. There is no selectivity that spares it.",
        "C": "Acetylation does not open the ring. The anomeric acetate locks the pyranose (it is no longer a hemiacetal that can revert to the aldehyde), so the product is a cyclic pentaacetate with no free carbonyl.",
        "D": "The primary C6 OH is the least hindered, but with excess anhydride and pyridine all five hydroxyls react. Selective acylation of a single position needs protecting-group strategy, not these conditions."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q22_silver_oxide_methylation",
    "topic": "Reactions of Monosaccharides",
    "difficulty_level": "Medium",
    "question_text": "alpha-D-Glucopyranose is converted into its pentamethyl ether in 85% yield with iodomethane and silver oxide. Why is Ag2O used instead of the sodium hydride or sodium hydroxide of a standard Williamson synthesis?",
    "options": [
      {
        "option_id": "A",
        "text": "Strong bases degrade sugars (enolisation, epimerisation, retro-aldol cleavage); Ag2O is a mild base that still promotes O-alkylation",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Silver ion coordinates the anomeric oxygen and directs methylation to C1 only",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Sodium hydride would reduce the aldehyde of the open-chain form to the alditol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ag2O oxidises the anomeric carbon to a lactone first, which is then methylated",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Ether formation on a sugar is a Williamson synthesis: alkoxide plus alkyl halide. The difficulty is the base. A sugar in strong base is not an inert polyol: the open-chain form is a beta-hydroxy aldehyde that enolises, epimerises at C2, isomerises to the ketose, and can fragment by retro-aldol reaction. Silver oxide is basic enough to assist O-alkylation by iodomethane (the silver also helps pull the iodide off) but too weak to trigger that carbonyl chemistry, so every hydroxyl, the anomeric one included, is methylated cleanly.",
      "approach": "Step 1: Identify the reaction: hydroxyls plus CH3I to methyl ethers, a Williamson synthesis needing a base to generate or assist the alkoxide nucleophile.\nStep 2: Ask what NaH or NaOH would do to a reducing sugar: deprotonate alpha to the carbonyl of the trace open-chain form, giving enediols, C2 epimers, ketose isomers and fragmentation, all of which consume the sugar.\nStep 3: Ag2O is a mild base and silver assists the departure of iodide, so O-methylation proceeds without carbonyl-based side reactions.\nStep 4: Product: methyl 2,3,4,6-tetra-O-methyl-alpha-D-glucopyranoside, the anomeric OH methylated too (as a glycoside), 85%.",
      "note": "McMurry 25.6 (Reactions of Monosaccharides) states that carbohydrates are converted into ethers by treatment with an alkyl halide in the presence of base, that standard Williamson conditions using a strong base tend to degrade sensitive sugar molecules, and that silver oxide works well as a mild base and gives high yields of ethers, with alpha-D-glucopyranose to its pentamethyl ether in 85% yield as the example; Problem 25-16 asks for the same reaction on beta-D-ribofuranose. The base-promoted degradation it alludes to is the keto-enol chemistry of Figure 25.9, the same process that makes fructose a reducing sugar.",
      "options": {
        "A": "Correct. The sugar's open-chain aldehyde chemistry (enolisation, epimerisation, cleavage) is set off by strong base; Ag2O is mild enough to avoid it while still promoting O-methylation.",
        "B": "All five hydroxyls are methylated, giving the pentamethyl ether; there is no selectivity for C1. Silver's role is to assist iodide departure and provide mild basicity, not to direct the reaction.",
        "C": "Sodium hydride is a base, not a hydride donor to carbonyl groups; it does not reduce aldehydes. Its problem with sugars is deprotonation alpha to the carbonyl, not reduction.",
        "D": "Ag2O is not an oxidant here; oxidation of the aldehyde to an aldonic acid (or its lactone) needs Br2/H2O or Tollens' reagent. The product retains C1 as an acetal carbon (a methyl glycoside), not a lactone."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q23_glycoside_scheme",
    "topic": "Reactions of Monosaccharides",
    "difficulty_level": "Medium",
    "question_text": "beta-D-Glucopyranose is dissolved in methanol containing a trace of HCl. What is the organic product?",
    "reaction_scheme": {
      "reactants": [
        "OC[C@H]1O[C@@H](O)[C@H](O)[C@@H](O)[C@@H]1O"
      ],
      "reagents": "CH3OH, HCl (catalytic)",
      "conditions": "",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "A six-membered ring of five carbons and one oxygen with an OH on each of four ring carbons, a CH2OH on the fifth, and stereochemistry shown at every ring carbon: beta-D-glucopyranose."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A mixture of methyl alpha- and methyl beta-D-glucopyranosides: acetals in which only the anomeric OH has been replaced by OCH3",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methyl beta-D-glucopyranoside only, with the anomeric configuration retained",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The pentamethyl ether, every OH converted to OCH3",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The open-chain dimethyl acetal of glucose, with two OCH3 groups on C1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A cyclic hemiacetal treated with an alcohol and an acid catalyst gives a cyclic acetal, exactly as an ordinary hemiacetal does. Only the anomeric OH takes part: it is protonated and lost as water to give a resonance-stabilised oxocarbenium ion at C1, which methanol attacks from either face. The other four hydroxyls are ordinary alcohols and are untouched by catalytic acid, and the ring stays intact because the intramolecular hemiacetal is far more stable than an open-chain acetal. The products are the two methyl glucopyranosides, named alkyl first, then the sugar with -ose replaced by -oside.",
      "approach": "Step 1: Identify the reactive site: C1 is a hemiacetal carbon (bonded to the ring O and to OH); the other carbons carry simple alcohol OH groups.\nStep 2: Acid protonates the C1 OH; loss of water gives the cyclic oxocarbenium ion, stabilised by the ring oxygen.\nStep 3: Methanol adds to either face of the planar cation, then loses a proton: methyl alpha-D-glucopyranoside and methyl beta-D-glucopyranoside.\nStep 4: The starting anomer is irrelevant to the outcome, because the cation is common to both; the ratio is set by thermodynamics, and the alpha glycoside predominates for glucose in methanol.",
      "note": "McMurry 25.6 (Reactions of Monosaccharides) states that treatment of a monosaccharide hemiacetal with an alcohol and an acid catalyst yields an acetal called a glycoside, in which the anomeric OH has been replaced by an OR group, that reaction of beta-D-glucopyranose with methanol gives a mixture of alpha and beta methyl D-glucopyranosides, and that glycosides are named by citing the alkyl group and replacing -ose with -oside (a glucoside being specifically from glucose). The acetal formation is McMurry 19.10. The pentamethyl ether is the product of CH3I/Ag2O in the same section, a different reaction.",
      "options": {
        "A": "Correct. Only the anomeric OH is replaced, through the common oxocarbenium ion, so both methyl glucopyranosides form.",
        "B": "The intermediate is a planar oxocarbenium ion, so the anomeric configuration is not retained; methanol adds to both faces and a mixture results. Fischer glycosidation is not stereospecific.",
        "C": "The pentamethyl ether needs CH3I and Ag2O (a Williamson reaction on every OH). Catalytic acid in methanol converts only the hemiacetal carbon; the alcohol OH groups do not form ethers under these conditions.",
        "D": "The ring does not open. A cyclic acetal from the C5 OH is favoured over an open-chain dimethyl acetal, so the methoxy group replaces only the anomeric OH and the pyranose survives."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q24_glycoside_properties",
    "topic": "Reactions of Monosaccharides",
    "difficulty_level": "Medium",
    "question_text": "Methyl beta-D-glucopyranoside is a glycoside. Which set of properties follows from its structure?",
    "options": [
      {
        "option_id": "A",
        "text": "It is an acetal: stable in neutral or basic water, shows no mutarotation, gives a negative Tollens' test, and is hydrolysed back to glucose and methanol by aqueous acid",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It is a hemiacetal: it mutarotates in water and reduces Tollens' reagent",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It is a reducing sugar, because base releases the aldehyde by cleaving the methoxy group",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It is hydrolysed by aqueous base but stable to aqueous acid, like an ester",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Replacing the anomeric OH by OR converts the hemiacetal at C1 into a full acetal, and everything a glycoside does or fails to do follows from acetal chemistry. An acetal has no OH on C1 to expel, so it cannot open to the aldehyde: no mutarotation, no aldehyde to reduce Tollens' or Benedict's reagent, no reaction with base. It is, however, hydrolysed by aqueous acid, which protonates the OCH3 and reforms the oxocarbenium ion, giving back the free sugar and methanol. Disaccharides and polysaccharides are glycosides between sugars, so the same rules decide which of them are reducing.",
      "approach": "Step 1: Classify C1: bonded to the ring oxygen and to OCH3, two OR groups on one carbon, an acetal.\nStep 2: Acetals are inert to base and to nucleophiles and cannot revert to the carbonyl without acid: no ring opening, hence no mutarotation and no reducing behaviour.\nStep 3: Acetals are cleaved by aqueous acid: protonation of the methoxy oxygen, loss of methanol, water adds to C1, giving the hemiacetal (glucose) again.\nStep 4: The four alcohol OH groups are unchanged and still react as alcohols (acylation, alkylation, oxidation), which is why glycosides are useful protected forms of the anomeric centre.",
      "note": "McMurry 25.6 (Reactions of Monosaccharides) states that glycosides, like all acetals, are stable in neutral water, are not in equilibrium with an open-chain form, do not show mutarotation, and can be hydrolysed to give back the free monosaccharide plus alcohol on treatment with aqueous acid, and later in the section that glycosides are nonreducing because the acetal group is not hydrolysed to an aldehyde under basic conditions. The acid-catalysed acetal hydrolysis is McMurry 19.10. Sucrose, in McMurry 25.8, is the disaccharide with both anomeric carbons tied up as acetals and therefore nonreducing.",
      "options": {
        "A": "Correct. An acetal at C1 cannot open in neutral or basic solution, so the glycoside neither mutarotates nor reduces Tollens' reagent, and only aqueous acid returns it to glucose.",
        "B": "Mutarotation and a positive Tollens' test are properties of the free sugar, whose C1 is a hemiacetal that opens to the aldehyde. The methyl glycoside has an acetal there and does neither.",
        "C": "Base does not cleave acetals; an OCH3 on an acetal carbon is not a leaving group under basic conditions. That is exactly why the text calls glycosides nonreducing: no aldehyde is released in the Tollens' or Benedict's test.",
        "D": "The stability pattern is the reverse of an ester's: acetals survive base and are hydrolysed by acid. Aqueous acid converts the glycoside back into glucose and methanol."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q25_koenigs_knorr",
    "topic": "Reactions of Monosaccharides",
    "difficulty_level": "Hard",
    "question_text": "In the Koenigs-Knorr reaction, both the alpha and the beta anomer of tetra-O-acetyl-D-glucopyranosyl bromide react with an alcohol and Ag2O to give the same beta-glycoside. What explains this?",
    "options": [
      {
        "option_id": "A",
        "text": "Loss of bromide gives an oxocarbenium ion; the C2 acetate on the bottom face closes onto C1 to form a cyclic oxonium ion that blocks the bottom face, and the alcohol attacks the top face with inversion, giving beta",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Simple SN2 displacement of bromide by the alcohol with inversion at C1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "SN1 ionisation to a planar cation that the alcohol attacks from either face, the beta product then crystallising out",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The alcohol first displaces the C2 acetate, and the resulting alkoxide delivers itself to C1 from the same face",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A single stereochemical fact rules out the obvious mechanisms. If displacement were a plain backside SN2, the alpha bromide would give the beta glycoside and the beta bromide the alpha glycoside, so the two anomers could not converge; if it were a free SN1 cation, both would give mixtures. Both give only beta, so the reaction goes through a common intermediate that has one face closed. That intermediate is a cyclic acetoxonium ion formed by the C2 acetate: the acetate is on the bottom face of a glucose ring, it attacks the C1 oxocarbenium ion from below, and the alcohol can then open the oxonium only from the top, which is the beta face. This is the neighbouring-group effect, and it is why 2-O-acyl glycosyl donors give 1,2-trans glycosides.",
      "approach": "Step 1: Either anomeric bromide ionises (SN1-like), assisted by the ring oxygen, to the same planar oxocarbenium ion; the starting configuration is lost.\nStep 2: The C2 acetate, which lies on the bottom face in glucose (C2 OH is down), closes onto C1 from below to give a five-membered 1,2-acetoxonium ion.\nStep 3: The alcohol attacks C1 from the top face, backside to the C1-O bond of the oxonium, with inversion at C1; the acetate is regenerated at C2.\nStep 4: Result: the 1,2-trans (beta) glycoside from both anomers of the bromide, in a formally SN2 final step on an intermediate common to both.",
      "note": "McMurry 25.6 (Reactions of Monosaccharides), Figure 25.7, gives this mechanism: tetraacetyl-D-glucopyranosyl bromide (either anomer) undergoes a spontaneous SN1-like loss of Br-, followed by internal reaction with the ester group at C2 to form an oxonium ion; since the acetate at C2 is on the bottom of the glucose ring the C-O bond also forms from the bottom, and backside SN2 displacement of the oxonium ion then occurs with the usual inversion, yielding a beta-glycoside and regenerating the acetate. The text names this a neighbouring-group effect and gives methylarbutin (from p-methoxyphenol) as the example. The related SN2 and SN1 chemistry is McMurry 11.2 to 11.5.",
      "options": {
        "A": "Correct. A common oxocarbenium ion, a C2 acetoxonium closing from the bottom face, and backside attack from the top account for beta from both anomers.",
        "B": "Backside SN2 on the alpha bromide would indeed give beta, but on the beta bromide it would give alpha. Since both anomers give beta, a simple SN2 cannot be the whole story; the text says the situation is actually more complex.",
        "C": "A free planar cation attacked from both faces would give an anomeric mixture from either bromide, and the outcome would not depend on the C2 group. The reaction is beta-selective because the C2 acetate closes off one face before the alcohol arrives.",
        "D": "The C2 acetate is not displaced; it is regenerated unchanged at the end, which is the hallmark of a neighbouring group. The alcohol never bonds to C2; it attacks C1 from the face opposite the cyclic oxonium."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q26_meso_alditol",
    "topic": "Reactions of Monosaccharides",
    "difficulty_level": "Hard",
    "question_text": "Which of these D-aldohexoses gives an optically inactive alditol on reduction with NaBH4? Each Fischer projection is captioned with the side of the OH group at C2, C3, C4 and C5.",
    "options": [
      {
        "option_id": "A",
        "text": "OH right, left, left, right (C2 to C5)",
        "smiles": "FISCHER:R,L,L,R",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "OH right, left, right, right (C2 to C5)",
        "smiles": "FISCHER:R,L,R,R",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "OH left, left, right, right (C2 to C5)",
        "smiles": "FISCHER:L,L,R,R",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "OH left, left, left, right (C2 to C5)",
        "smiles": "FISCHER:L,L,L,R",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Reduction of an aldose converts its CHO into CH2OH, so the alditol has identical groups at both ends and can possess an internal mirror plane that the aldose cannot. The test is symmetry of the OH pattern: an alditol is meso when the pattern read from C2 to C5 is the mirror image of the pattern read from C5 to C2, which for a chain of four centres means the C2 and C5 hydroxyls are on the same side of the mirror and so are C3 and C4 (right, left, left, right or right, right, right, right, and their mirror images). Of the D-aldohexoses only galactose (right, left, left, right) and allose (all right) pass; their alditols, galactitol and allitol, are meso and optically inactive.",
      "approach": "Step 1: For each pattern, imagine the aldehyde reduced, so the top and bottom groups are both CH2OH.\nStep 2: Test for a mirror plane between C3 and C4: C2 must match C5 and C3 must match C4.\nStep 3: Right, left, left, right: C2 right matches C5 right, C3 left matches C4 left. Meso: this is D-galactose, and its alditol is galactitol, optically inactive.\nStep 4: Right, left, right, right (glucose): C3 left does not match C4 right; D-glucitol is chiral and optically active. Left, left, right, right (mannose): C2 does not match C5; D-mannitol is chiral. Left, left, left, right (talose): C2 does not match C5; talitol is chiral.",
      "note": "McMurry 25.6 (Reactions of Monosaccharides) states that NaBH4 reduces an aldose or ketose to an alditol through the small amount of open-chain form present, names D-glucitol (D-sorbitol) as the naturally occurring reduction product of glucose, and sets Problem 25-17: reduction of D-glucose gives an optically active alditol whereas reduction of D-galactose gives an optically inactive one. The same symmetry test decides which aldaric acids are meso (Problems 25-19 and 25-20, allose and galactose again). Checked with RDKit: galactitol and allitol are achiral, D-glucitol and D-mannitol are not.",
      "options": {
        "A": "Correct. Right, left, left, right is D-galactose; with both ends reduced to CH2OH the molecule has a mirror plane between C3 and C4, so galactitol is meso.",
        "B": "Right, left, right, right is D-glucose. Its alditol, D-glucitol (sorbitol), has C3 left against C4 right, so no internal mirror plane exists and the compound is optically active.",
        "C": "Left, left, right, right is D-mannose, whose alditol is D-mannitol. C2 (left) does not match C5 (right), so mannitol is chiral and optically active.",
        "D": "Left, left, left, right is D-talose. Its alditol has C2 left against C5 right and is chiral; in fact D-talitol is the same compound as D-altritol read from the other end, but it is not meso."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q27_gulose_glucitol",
    "topic": "Reactions of Monosaccharides",
    "difficulty_level": "Hard",
    "question_text": "Reduction of L-gulose with NaBH4 gives the same alditol, D-glucitol, as reduction of D-glucose. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "Once both ends are CH2OH the chain can be read from either end; L-gulose's pattern read from its C6 end is D-glucose's pattern read from C1, so the two alditols are the same molecule",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "NaBH4 epimerises L-gulose to D-glucose before reducing it",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Reduction inverts the configuration at C5, converting an L sugar into a D sugar",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "L-Gulitol and D-glucitol are enantiomers, and the statement is about their identical melting points, not identity",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An aldose has different groups at its two ends (CHO and CH2OH), which fixes the direction of numbering; an alditol has CH2OH at both ends, so the same molecule can be numbered from either end. Two different aldoses therefore give the same alditol whenever one aldose's Fischer projection, rotated 180° on the page (an allowed motion), is the other's with CHO and CH2OH interchanged. D-Glucose (right, left, right, right from C2 to C5) rotated 180° reads left, left, right, left from the new C2 to C5, which is L-gulose. So L-gulose is D-glucose with the ends swapped, and reducing either gives one compound, D-glucitol.",
      "approach": "Step 1: Write D-glucose: C2 right, C3 left, C4 right, C5 right.\nStep 2: Rotate the projection 180°: the sequence reverses and every side swaps: C5 becomes the new C2, and right becomes left. New pattern C2 to C5: left, left, right, left.\nStep 3: Identify it: the bottom OH is on the left, an L sugar; its mirror image right, right, left, right is D-gulose. So the rotated glucose is L-gulose.\nStep 4: Reduction erases the CHO/CH2OH distinction, so the alditol of L-gulose and the alditol of D-glucose are one and the same compound: D-glucitol (also called L-gulitol).",
      "note": "McMurry 25.6 (Reactions of Monosaccharides) sets this as Problem 25-18, immediately after Problem 25-17 on the meso alditol of galactose, and the allowed 180° rotation of a Fischer projection it relies on is McMurry 25.2. The same end-for-end identity appears among the aldaric acids, where both ends become CO2H: D-glucaric acid is L-gularic acid, and it is why only allose and galactose among the D-aldohexoses give meso aldaric acids (Problem 25-20).",
      "options": {
        "A": "Correct. L-Gulose is D-glucose's Fischer projection turned end over end; reduction makes the ends identical and the two alditols coincide as D-glucitol.",
        "B": "NaBH4 is a hydride reagent in neutral or mildly basic solution and does not epimerise sugars; and epimerisation changes one centre, whereas D-glucose and L-gulose differ at three. The identity is a consequence of symmetry, not of a rearrangement.",
        "C": "Hydride adds to C1, the aldehyde carbon; no stereocentre is touched. C5 keeps its configuration in both reductions; it is the renumbering after reduction, not an inversion, that makes L-gulose's alditol read as a D compound.",
        "D": "The two alditols are the same compound, not enantiomers. L-Gulitol is simply another name for D-glucitol, obtained by numbering the same molecule from the other end; enantiomers would have opposite rotations, and these have one rotation."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q28_bromine_water_scheme",
    "topic": "Reactions of Monosaccharides",
    "difficulty_level": "Medium",
    "question_text": "D-Glucose is treated with bromine in buffered aqueous solution. What is the product?",
    "reaction_scheme": {
      "reactants": [
        "O=C[C@H](O)[C@@H](O)[C@H](O)[C@H](O)CO"
      ],
      "reagents": "Br2, H2O (buffered)",
      "conditions": "25 °C",
      "products": [
        "?"
      ],
      "reactant_alts": [
        "An open-chain six-carbon sugar with a CHO at one end, a CH2OH at the other and an OH on each of the four carbons between, stereochemistry shown at all four: D-glucose in its open-chain form."
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "D-Gluconic acid: the C1 aldehyde is oxidised to a carboxylic acid (an aldonic acid); the CH2OH is untouched",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "D-Glucaric acid: both the aldehyde and the C6 CH2OH are oxidised to carboxylic acids (an aldaric acid)",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "D-Glucuronic acid: the C6 CH2OH is oxidised to CO2H while the aldehyde is retained (a uronic acid)",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "D-Glucitol: the aldehyde is reduced to CH2OH",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Three oxidation levels of an aldose have names. Mild oxidants that attack only aldehydes (buffered Br2/H2O, Tollens' Ag+, Benedict's Cu2+) convert C1 to CO2H and give an aldonic acid; the aldehyde is the only easily oxidised group, so nothing else changes. A stronger oxidant, warm dilute HNO3, also oxidises the primary CH2OH at C6 and gives the dicarboxylic aldaric acid. Oxidising only C6 while keeping the aldehyde, to a uronic acid, cannot be done with a laboratory reagent; enzymes do it. Reducing sugars are so called because the aldehyde reduces the metal oxidant in Tollens' and Benedict's tests.",
      "approach": "Step 1: Identify the oxidisable groups: an aldehyde at C1 (easily oxidised), a primary alcohol at C6 (needs a strong oxidant) and four secondary alcohols.\nStep 2: Bromine water is a mild, selective oxidant for aldehydes; it converts CHO to CO2H and leaves alcohols alone.\nStep 3: Product: D-gluconic acid, HOCH2(CHOH)4CO2H, with all four stereocentres unchanged. In solution it equilibrates with its 1,4- and 1,5-lactones.\nStep 4: Glucaric acid would need HNO3; glucuronic acid needs an enzyme; glucitol is the NaBH4 reduction product.",
      "note": "McMurry 25.6 (Reactions of Monosaccharides) states that aldoses are easily oxidised to aldonic acids, that a buffered solution of aqueous Br2 is often used, that Tollens' reagent (Ag+ in aqueous ammonia) and Benedict's reagent (Cu2+ with sodium citrate) were the historical tests for reducing sugars, that warm dilute HNO3 oxidises both the aldehyde and the terminal CH2OH to give an aldaric acid, and that a uronic acid, with only the CH2OH end oxidised, can be made only enzymatically since no chemical reagent is known for that selective oxidation.",
      "options": {
        "A": "Correct. Bromine water oxidises only the aldehyde, giving the aldonic acid D-gluconic acid with the CH2OH and the four stereocentres intact.",
        "B": "Oxidising both ends needs the stronger oxidant warm dilute HNO3; that product is D-glucaric acid. Bromine water does not touch the primary alcohol.",
        "C": "A uronic acid keeps the aldehyde and oxidises C6, the harder of the two ends. No laboratory reagent does that selectively; D-glucuronic acid is made enzymatically. Bromine water does the opposite: it oxidises the aldehyde and spares C6.",
        "D": "D-Glucitol is the product of reduction with NaBH4. Bromine is an oxidant; it removes hydrogen from the aldehyde carbon rather than adding it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q29_fructose_reducing_sugar",
    "topic": "Reactions of Monosaccharides",
    "difficulty_level": "Medium",
    "question_text": "D-Fructose is a ketone, yet it gives a positive Tollens' test and is classed as a reducing sugar. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "In the basic Tollens' solution fructose tautomerises through an enediol into a mixture of D-glucose and D-mannose, whose aldehyde groups are oxidised",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ketones adjacent to a CH2OH group are oxidised directly by Ag+ to a carboxylic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Fructose's hemiketal ring opens to release formaldehyde, which reduces the silver",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Fructose is hydrolysed by the ammonia to glyceraldehyde, an aldose",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A reducing sugar is one that reduces Tollens' or Benedict's reagent, which needs an aldehyde. Fructose has none, but Tollens' reagent is basic, and in base an alpha-hydroxy ketone is in equilibrium with an enediol: removing the C1 proton next to the C2 ketone gives an enolate that reprotonates at C2 to form an aldehyde at C1, with the new C2 stereocentre formed either way. Fructose thereby becomes a mixture of glucose and mannose, both aldoses, and they are oxidised. Glycosides, by contrast, have no free carbonyl and no enolisable hemiacetal, so they are nonreducing.",
      "approach": "Step 1: Recognise that Tollens' reagent is Ag+ in aqueous ammonia, a basic medium.\nStep 2: Base removes a proton from C1 of fructose (alpha to the C2 ketone) to give an enolate, which is the enediol on protonation at oxygen.\nStep 3: Reprotonation at C2 instead of C1 converts the enediol into an aldehyde at C1: either D-glucose or D-mannose depending on which face C2 is protonated.\nStep 4: The aldoses reduce Ag+ to silver metal and are oxidised to aldonic acids; the equilibrium keeps drawing fructose through the enediol until the test is positive.",
      "note": "McMurry 25.6 (Reactions of Monosaccharides) states that all aldoses are reducing sugars, that some ketoses are reducing sugars as well, and that fructose reduces Tollens' reagent because it is readily isomerised to a mixture of aldoses (glucose and mannose) in basic solution by a series of keto-enol tautomeric shifts, drawn in Figure 25.9; glycosides are nonreducing because the acetal is not hydrolysed to an aldehyde under basic conditions. The enolisation itself is the carbonyl alpha-substitution chemistry of McMurry 22.1.",
      "options": {
        "A": "Correct. Base-catalysed keto-enol tautomerism (two shifts through an enediol) converts fructose into glucose and mannose, and their aldehydes reduce the Ag+.",
        "B": "Ketones are not oxidised by Tollens' reagent; that is what makes the test distinguish aldehydes from ketones. Fructose responds only because it becomes an aldose in the basic medium.",
        "C": "No carbon-carbon bond is broken. The ring opens to the open-chain ketone, not to formaldehyde, and the reducing species is the aldose formed by tautomerisation, not a fragment.",
        "D": "Ammonia does not hydrolyse carbon-carbon bonds, and fructose contains no glycosidic bond to hydrolyse. Retro-aldol cleavage to trioses occurs only under much harsher conditions; the mild Tollens' base merely enolises the ketone."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q30_meso_aldaric_acid",
    "topic": "Reactions of Monosaccharides",
    "difficulty_level": "Hard",
    "question_text": "D-Glucose gives an optically active aldaric acid on oxidation with warm dilute HNO3. Which D-aldohexose gives an optically inactive (meso) aldaric acid under the same conditions?",
    "options": [
      {
        "option_id": "A",
        "text": "D-Allose",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "D-Mannose",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "D-Gulose",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "D-Talose",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Nitric acid oxidises both ends of an aldose to CO2H. With identical end groups, the aldaric acid is meso whenever its Fischer projection has a mirror plane between C3 and C4, which requires the C2 and C5 hydroxyls to be on the same side and the C3 and C4 hydroxyls to be on the same side. Among the D-aldohexoses (C5 always right) that means C2 right, and C3 and C4 together: right, right, right, right (allose) or right, left, left, right (galactose). Every other D-aldohexose gives a chiral, optically active aldaric acid; some pairs of them give the same acid, as glucose and gulose do in the two enantiomeric series.",
      "approach": "Step 1: Replace CHO and CH2OH by CO2H in each candidate, so both ends are identical.\nStep 2: Test each C2 to C5 pattern for C2 matching C5 and C3 matching C4.\nStep 3: D-Allose, right, right, right, right: C2 right and C5 right, C3 right and C4 right. Meso: allaric acid is optically inactive.\nStep 4: D-Mannose, left, left, right, right: C2 left against C5 right, chiral. D-Gulose, right, right, left, right: C3 right against C4 left, chiral (its aldaric acid is L-glucaric acid). D-Talose, left, left, left, right: C2 left against C5 right, chiral.",
      "note": "McMurry 25.6 (Reactions of Monosaccharides) states that warm dilute HNO3 oxidises an aldose to a dicarboxylic aldaric acid, both the aldehyde and the terminal CH2OH being oxidised, and sets Problems 25-19 (D-glucose gives an optically active aldaric acid, D-allose an optically inactive one) and 25-20 (which of the other six give meso acids: only galactose). Checked with RDKit: allaric and galactaric acids are achiral, glucaric and mannaric acids are not. The same symmetry test governs the alditols of Problem 25-17.",
      "options": {
        "A": "Correct. Allose has every OH on the right, so its aldaric acid, with CO2H at both ends, has a mirror plane between C3 and C4 and is meso.",
        "B": "Mannose is left, left, right, right: the C2 OH (left) does not match the C5 OH (right), so mannaric acid has no internal mirror plane and is optically active.",
        "C": "Gulose is right, right, left, right: C3 and C4 are on opposite sides, so its aldaric acid is chiral. It is in fact L-glucaric acid, the enantiomer of what D-glucose gives, and optically active.",
        "D": "Talose is left, left, left, right: C2 (left) and C5 (right) differ, so talaric acid is chiral and optically active. Galactose, talose's C2 epimer, is the other meso case among the D-aldohexoses."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q31_kiliani_fischer_arabinose",
    "topic": "Reactions of Monosaccharides",
    "difficulty_level": "Medium",
    "question_text": "D-Arabinose is subjected to a Kiliani-Fischer synthesis: HCN addition, then reduction of the nitrile over a palladium catalyst and hydrolysis of the imine. What is obtained?",
    "options": [
      {
        "option_id": "A",
        "text": "A mixture of D-glucose and D-mannose, two aldohexoses that differ only at the new C2",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "D-Glucose only, since the cyanohydrin forms with the new OH on the right",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A mixture of D-glucose and D-galactose",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A mixture of D-allose and D-altrose",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Kiliani-Fischer synthesis lengthens an aldose by one carbon at the aldehyde end. Cyanide adds to the C1 aldehyde to give a cyanohydrin, and because the aldehyde is planar the new stereocentre forms both ways, so two diastereomeric cyanohydrins result. The nitrile is then converted into an aldehyde (originally by hydrolysis, lactonisation and reduction; now by hydrogenation over palladium to an imine that is hydrolysed). The old C1 becomes C2 of the products, the old stereocentres are untouched, and the two products are C2 epimers with the starting sugar's pattern at C3 and below.",
      "approach": "Step 1: Write D-arabinose: C2 left, C3 right, C4 right (left, right, right).\nStep 2: Add the new carbon at the top. The old C2, C3, C4 become C3, C4, C5 of the hexoses: C3 left, C4 right, C5 right.\nStep 3: The new C2 can be right or left: right, left, right, right is D-glucose; left, left, right, right is D-mannose.\nStep 4: So the product is a glucose-mannose mixture, the pair of C2 epimers whose lower three centres match arabinose. Galactose (C4 left) and allose (C3 right) cannot arise because those centres come from the starting sugar unchanged.",
      "note": "McMurry 25.6 (Reactions of Monosaccharides) describes the Kiliani-Fischer synthesis: Kiliani's cyanohydrin formation (19.6) followed by Fischer's conversion of the nitrile into an aldehyde, with the modern improvement of palladium-catalysed reduction to an imine that is hydrolysed, notes that the cyanohydrin forms as a mixture of stereoisomers at the new chirality centre so that two aldoses differing only at C2 result, and gives chain extension of D-arabinose to D-glucose plus D-mannose as the example. Problem 25-21 asks the same for D-ribose (allose and altrose).",
      "options": {
        "A": "Correct. The new C2 forms in both configurations while C3 to C5 keep arabinose's left, right, right pattern; those two hexoses are glucose and mannose.",
        "B": "Cyanide adds to a planar aldehyde from both faces, so both cyanohydrin diastereomers form; the synthesis is not stereoselective at the new centre and always gives the C2 epimer pair.",
        "C": "Glucose and galactose differ at C4, an old centre inherited from arabinose's C3, which the reaction does not touch. Only the new C2 varies between the products.",
        "D": "Allose and altrose are the products from D-ribose (right, right, right at C2 to C4). Arabinose's C2 OH is on the left, so the hexoses it gives have their C3 OH on the left: glucose and mannose."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q32_pentose_for_l_gulose_l_idose",
    "topic": "Reactions of Monosaccharides",
    "difficulty_level": "Hard",
    "question_text": "Which aldopentose gives a mixture of L-gulose and L-idose on Kiliani-Fischer chain extension?",
    "options": [
      {
        "option_id": "A",
        "text": "L-Xylose",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "D-Xylose",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "L-Lyxose",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "L-Arabinose",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Run the Kiliani-Fischer synthesis backwards: the two hexose products differ only at C2, and their C3, C4 and C5 are the pentose's C2, C3 and C4 unchanged. So the pentose is found by deleting C1 from either hexose and reading what is left. Working in the L series changes nothing about the method, only the patterns: an L sugar's Fischer projection is the D sugar's with every OH on the other side, and the D/L letter of the pentose follows from its own bottom centre.",
      "approach": "Step 1: Write D-gulose (right, right, left, right) and D-idose (left, right, left, right); they differ only at C2, as a Kiliani-Fischer pair must.\nStep 2: Invert every centre for the L sugars: L-gulose left, left, right, left; L-idose right, left, right, left. They share C3 to C5: left, right, left.\nStep 3: Delete C1. The pentose has C2 to C4 = left, right, left. Its bottom OH is on the left: an L sugar.\nStep 4: Invert to identify: right, left, right is D-xylose, so the pentose is L-xylose. Its extension gives the two L-hexoses whose lower centres match, L-gulose and L-idose.",
      "note": "McMurry 25.6 (Reactions of Monosaccharides) sets this as Problem 25-22, following the statement that the C1 aldehyde of the starting sugar becomes C2 of the chain-lengthened sugar and that two new aldoses differing only at C2 result. Figure 25.4 in McMurry 25.4 shows the same relationship in the D series, where D-xylose is the parent of D-gulose and D-idose; the L series is its mirror image throughout (McMurry 25.3).",
      "options": {
        "A": "Correct. Removing C1 from either L-hexose leaves left, right, left at C2 to C4, an L pentose whose mirror image is D-xylose.",
        "B": "D-Xylose (right, left, right) would give D-gulose and D-idose, the enantiomers of the required products. The L hexoses need the L pentose.",
        "C": "L-Lyxose is the mirror image of D-lyxose (left, left, right), so it reads right, right, left; extended, it would give L-galactose and L-talose, whose C3 OH is on the right, not the left.",
        "D": "L-Arabinose reads right, left, left (the mirror of left, right, right) and would give L-glucose and L-mannose on extension. Gulose and idose need C3 on the right in the D series, so on the left in the L series, with C4 the other way."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q33_wohl_to_threose",
    "topic": "Reactions of Monosaccharides",
    "difficulty_level": "Hard",
    "question_text": "The Wohl degradation (oxime formation with hydroxylamine, dehydration to the cyanohydrin nitrile with acetic anhydride, then loss of HCN in base) shortens an aldose by one carbon. Which two D-aldopentoses give D-threose?",
    "options": [
      {
        "option_id": "A",
        "text": "D-Xylose and D-lyxose",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "D-Ribose and D-arabinose",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "D-Arabinose and D-xylose",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "D-Ribose and D-lyxose",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Wohl degradation is the Kiliani-Fischer synthesis run in reverse. The aldehyde is converted to an oxime, the oxime is dehydrated to a nitrile (a cyanohydrin, since C2 still carries its OH), and base expels cyanide in a retro-nucleophilic addition, so the old C2 becomes the new C1 aldehyde and its stereocentre disappears. Everything below C2 is unchanged. Two pentoses therefore give the same tetrose: the C2 epimer pair whose C3 and C4 match the tetrose's C2 and C3.",
      "approach": "Step 1: Write D-threose: C2 left, C3 right (its D partner erythrose is right, right).\nStep 2: A pentose gives threose if its C3 is left and its C4 is right, whatever its C2 is.\nStep 3: Check the four D-pentoses: ribose right, right, right (C3 right, no); arabinose left, right, right (C3 right, no); xylose right, left, right (C3 left, C4 right, yes); lyxose left, left, right (C3 left, C4 right, yes).\nStep 4: So D-xylose and D-lyxose, the C2 epimer pair with C3 on the left, both degrade to D-threose; ribose and arabinose both give D-erythrose.",
      "note": "McMurry 25.6 (Reactions of Monosaccharides) describes the Wohl degradation as almost the exact opposite of the Kiliani-Fischer sequence: the aldehyde is converted into a nitrile by treatment with hydroxylamine to give an oxime (19.8) followed by dehydration with acetic anhydride, and the resulting cyanohydrin loses HCN under basic conditions, the reverse of a nucleophilic addition; it notes the yields are not high but the reaction is general for aldopentoses and aldohexoses, gives D-galactose to D-lyxose as the example, and sets this question as Problem 25-23.",
      "options": {
        "A": "Correct. Both have C3 on the left and C4 on the right, which become threose's C2 (left) and C3 (right) once the top carbon is removed.",
        "B": "Ribose and arabinose have their C3 OH on the right, so removing C1 leaves right, right: D-erythrose, not threose. They are the erythrose pair.",
        "C": "Arabinose degrades to erythrose (its C3 is on the right), so this pair gives two different tetroses. The two pentoses that share a tetrose must be C2 epimers with the same C3 and C4.",
        "D": "Ribose gives erythrose and lyxose gives threose; they are not a C2 epimer pair (they differ at C2 and C3) and do not converge on one tetrose."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q34_fucose",
    "topic": "The Eight Essential Monosaccharides",
    "difficulty_level": "Medium",
    "question_text": "L-Fucose, one of the eight monosaccharides humans must obtain from the diet, is described as 6-deoxy-L-galactose. How does it differ from L-galactose?",
    "options": [
      {
        "option_id": "A",
        "text": "The C6 CH2OH is replaced by CH3: the C6 oxygen is missing",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The C2 OH is replaced by NH2, as in the amino sugars",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The C6 CH2OH is oxidised to CO2H, as in a uronic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The C2 OH is replaced by H, as in 2-deoxyribose",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A deoxy sugar has one oxygen missing: an OH replaced by H at the position the locant names. 6-Deoxy means the change is at C6, so the terminal CH2OH of galactose becomes CH3 in fucose; the ring, the four stereocentres and the L configuration are those of L-galactose. Fucose is unusual twice over, being both a deoxy sugar and an L sugar, and it is found in the blood-group antigens and other cell-surface glycoconjugates. The other essential monosaccharides with modifications are the two N-acetylamino sugars (C2 OH to NHCOCH3) and N-acetylneuraminic acid.",
      "approach": "Step 1: Parse the name: deoxy means an OH replaced by H; the locant 6 says at C6.\nStep 2: C6 of galactose is the terminal CH2OH; removing its oxygen leaves CH3.\nStep 3: The rest is L-galactose: the C2 to C5 pattern of L-galactose (left, right, right, left) and the L designation at C5.\nStep 4: Formula check: galactose C6H12O6 loses one oxygen to give C6H12O5, the formula of fucose.",
      "note": "McMurry 25.7 (The Eight Essential Monosaccharides) lists L-fucose (6-deoxy-L-galactose), D-galactose, D-glucose, D-mannose, N-acetyl-D-glucosamine, N-acetyl-D-galactosamine, D-xylose and N-acetyl-D-neuraminic acid (Figure 25.10), and defines a deoxy sugar as one with an oxygen atom missing, an OH group (the one at C6 in fucose) replaced by an H; McMurry 25.10 gives 2-deoxyribose of DNA as the most common deoxy sugar. All eight essentials arise biosynthetically from glucose (Figure 25.11).",
      "options": {
        "A": "Correct. 6-Deoxy names the missing oxygen at C6, so fucose is L-galactose with a CH3 in place of the CH2OH.",
        "B": "Replacing the C2 OH by NH2 gives an amino sugar such as galactosamine; acetylated, that is N-acetylgalactosamine, another of the eight essentials, but not fucose.",
        "C": "Oxidising C6 to CO2H gives a uronic acid (galacturonic acid, the unit of pectin). Deoxy means an oxygen removed, not an oxidation.",
        "D": "The locant is 6, not 2. A 2-deoxy sugar is 2-deoxyribose, the DNA sugar (McMurry 25.10); fucose keeps every ring hydroxyl and loses only the C6 oxygen."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q35_neuraminic_acid_aldol",
    "topic": "The Eight Essential Monosaccharides",
    "difficulty_level": "Hard",
    "question_text": "N-Acetylneuraminic acid, the parent of the sialic acids, has nine carbons. From which two units is it formed biosynthetically, and by what reaction?",
    "options": [
      {
        "option_id": "A",
        "text": "An aldol reaction between the enolate of pyruvate (three carbons) and the aldehyde of N-acetylmannosamine (six carbons)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A Kiliani-Fischer chain extension of N-acetylglucosamine repeated three times",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A Claisen condensation between acetyl-CoA and N-acetylglucosamine",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Glycoside formation between N-acetylmannosamine and lactic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Nine carbons from a six-carbon amino sugar means a three-carbon partner, and the natural three-carbon carbonyl compound is pyruvate. Pyruvate's CH3 is alpha to its ketone and enolises; the enolate adds to the aldehyde carbon (C1) of the open-chain form of N-acetylmannosamine in an aldol addition. The product has pyruvate's CO2H and ketone as C1 and C2, the new CHOH (old aldehyde carbon) as C4 after the CH2 at C3, and the amino sugar's remaining carbons as C5 to C9, with the acetamido group on C5. That is N-acetylneuraminic acid, which then cyclises through the C6 OH onto the C2 ketone.",
      "approach": "Step 1: Count: 9 = 6 + 3, so a hexose derivative plus a three-carbon unit.\nStep 2: Identify the nucleophile: pyruvate, CH3COCO2-, whose methyl is alpha to the ketone and gives an enolate.\nStep 3: Identify the electrophile: the C1 aldehyde of N-acetylmannosamine (the C2 epimer of N-acetylglucosamine, epimerised enzymatically first).\nStep 4: The aldol addition forms the C3-C4 bond; the product retains pyruvate's carboxylate and ketone (a 2-keto acid) and the sugar's five remaining carbons and acetamido group.",
      "note": "McMurry 25.7 (The Eight Essential Monosaccharides) states that N-acetylneuraminic acid is the parent compound of the sialic acids, that it has nine carbons and is an aldol reaction product of N-acetylmannosamine with pyruvate (CH3COCO2-), that it is crucial to the mechanism by which an influenza virus spreads, and sets the mechanism as Problem 25-24; the aldol reaction is McMurry 23.1. The section's Figure 25.11 shows all eight essential monosaccharides arising from glucose, with mannosamine derived from glucosamine by epimerisation at C2.",
      "options": {
        "A": "Correct. The pyruvate enolate adds to the aldehyde of N-acetylmannosamine; six plus three carbons gives the nine-carbon keto acid.",
        "B": "Kiliani-Fischer adds one carbon at a time as a new aldehyde, and the text's example of the reaction is laboratory, not biosynthetic. Three extensions would also leave no ketone or carboxylate, both of which neuraminic acid has.",
        "C": "A Claisen condensation needs an ester electrophile and gives a beta-keto ester; the sugar offers an aldehyde, and acetyl-CoA would add only two carbons (giving eight). The text names an aldol with pyruvate.",
        "D": "A glycoside is an acetal at the anomeric carbon, which would not add carbons to the chain or create a new C-C bond. Lactic acid is not the partner; pyruvate, its oxidation product, is, and the bond formed is carbon-carbon."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q36_maltose_vs_cellobiose",
    "topic": "Disaccharides",
    "difficulty_level": "Medium",
    "question_text": "Maltose (from the hydrolysis of starch) and cellobiose (from the hydrolysis of cellulose) are both disaccharides of two D-glucose units joined by a 1,4 glycosidic bond. What is the structural difference between them?",
    "options": [
      {
        "option_id": "A",
        "text": "The configuration at the anomeric carbon that forms the glycoside: alpha in maltose, beta in cellobiose",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Maltose is linked 1,4 and cellobiose 1,6",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Maltose contains one glucose and one fructose unit; cellobiose two glucoses",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Maltose is a reducing sugar and cellobiose is not",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A disaccharide is a glycoside in which the alcohol is a second sugar, and the glycosidic bond has the anomeric configuration of the sugar that supplies its C1. Maltose is two glucopyranoses joined by an alpha-1,4 bond (the C1 oxygen of the left unit is down), cellobiose two glucopyranoses joined by a beta-1,4 bond (up). Everything else is identical: both keep a free hemiacetal on the right-hand glucose, so both are reducing sugars that mutarotate. The one stereochemical difference decides biology: human alpha-glycosidases hydrolyse maltose and starch but not cellobiose and cellulose.",
      "approach": "Step 1: Both are glucose-glucose and both are 1,4-linked (C1 of one unit to the C4 oxygen of the other), so composition and connectivity are the same.\nStep 2: The left unit's C1 is an acetal carbon with two possible configurations. Alpha (glycosidic oxygen down) is maltose; beta (up) is cellobiose.\nStep 3: The right unit's C1 is a hemiacetal in both, free to open to the aldehyde: both reduce Tollens' reagent and both mutarotate.\nStep 4: The alpha/beta difference at one carbon is what enzymes recognise, so maltose is digested and fermented while cellobiose is neither.",
      "note": "McMurry 25.8 (Disaccharides) states that maltose consists of two alpha-D-glucopyranose units joined by a 1,4-alpha-glycoside bond and cellobiose of two beta-D-glucopyranose units joined by a 1,4-beta-glycoside bond, that both are reducing sugars whose right-hand anomeric carbons are hemiacetals in equilibrium with aldehyde forms and both mutarotate, and that despite their similar structures cellobiose cannot be digested by humans or fermented by yeast while maltose is digested and fermented readily. McMurry 25.9 explains why: alpha-glycosidases hydrolyse only alpha links.",
      "options": {
        "A": "Correct. The two differ only in the anomeric configuration of the glycosidic bond, alpha-1,4 in maltose and beta-1,4 in cellobiose.",
        "B": "Both are 1,4-linked. A 1,6 link is the branch point of amylopectin and glycogen, not a feature of either disaccharide.",
        "C": "Glucose plus fructose is sucrose. Maltose and cellobiose are both made of two glucose units; that is exactly why their difference is so subtle.",
        "D": "Both are reducing sugars: each keeps a hemiacetal at the right-hand anomeric carbon that can open to the aldehyde. The nonreducing disaccharide is sucrose, whose two anomeric carbons are both in the glycosidic bond."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q37_lactose",
    "topic": "Disaccharides",
    "difficulty_level": "Medium",
    "question_text": "Lactose, the sugar of milk, is hydrolysed by aqueous acid to which monosaccharides, and is it a reducing sugar?",
    "options": [
      {
        "option_id": "A",
        "text": "D-Galactose and D-glucose, joined beta from C1 of galactose to C4 of glucose; reducing, because the glucose unit keeps a free hemiacetal",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Two D-glucose units; reducing",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "D-Galactose and D-glucose; nonreducing, because the galactose C1 is a glycoside",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "D-Glucose and D-fructose; nonreducing",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Lactose is the one common disaccharide made of two different monosaccharides: a galactopyranose whose anomeric C1 forms a beta-glycoside to the C4 oxygen of a glucopyranose. Only the galactose C1 is tied up as an acetal; the glucose unit's C1 is still a hemiacetal, so lactose opens to an aldehyde, mutarotates and gives positive Tollens' and Benedict's tests. Acid or the enzyme lactase hydrolyses the beta link to galactose plus glucose; people who lack lactase are lactose intolerant.",
      "approach": "Step 1: Composition: one D-galactose and one D-glucose (galactose is the C4 epimer of glucose, so the two units differ only at one carbon).\nStep 2: Link: C1 of galactose to C4 of glucose, with the galactose anomeric oxygen beta (up).\nStep 3: Reducing test: look for a free hemiacetal. The glucose C1 is bonded to the ring oxygen and an OH, a hemiacetal, so the sugar is reducing and mutarotates.\nStep 4: Hydrolysis with aqueous acid cleaves the acetal to give one galactose and one glucose.",
      "note": "McMurry 25.8 (Disaccharides) states that lactose occurs in human and cow's milk, is a reducing sugar, exhibits mutarotation, is a 1,4-beta-linked glycoside and, unlike maltose and cellobiose, contains two different monosaccharides, D-glucose and D-galactose, joined by a beta-glycosidic bond between C1 of galactose and C4 of glucose. McMurry 25.7 lists galactose among the eight essential monosaccharides, and McMurry 25.4 notes it is one of only two aldohexoses widely distributed in nature.",
      "options": {
        "A": "Correct. Galactose beta-1,4 glucose, with the glucose hemiacetal free, so lactose is a reducing sugar that hydrolyses to one of each monosaccharide.",
        "B": "Two glucoses would make maltose or cellobiose. Lactose's distinction is that it contains two different sugars, galactose and glucose.",
        "C": "The galactose C1 is indeed a glycoside, but reducing behaviour needs only one free hemiacetal anywhere in the molecule, and the glucose unit's C1 is one. Lactose is a reducing sugar; the text says so directly.",
        "D": "Glucose plus fructose is sucrose, which is nonreducing because both anomeric carbons form the glycosidic bond. Lactose contains galactose, not fructose, and is reducing."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q38_sucrose_nonreducing",
    "topic": "Disaccharides",
    "difficulty_level": "Medium",
    "question_text": "Unlike maltose, cellobiose and lactose, sucrose is not a reducing sugar and does not mutarotate. What does this show about how its glucose and fructose units are joined?",
    "options": [
      {
        "option_id": "A",
        "text": "The glycosidic bond links the two anomeric carbons, C1 of glucose and C2 of fructose, so neither unit retains a hemiacetal that could open to a carbonyl",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The bond is a 1,4 link like maltose's, but the fructose unit has no aldehyde to be oxidised",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Sucrose is not a glycoside at all but an ether between two non-anomeric hydroxyls",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The fructose is present as a pyranose, which cannot open to a ketone",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Reducing behaviour and mutarotation both require a hemiacetal anomeric carbon that can open to the carbonyl. In maltose, cellobiose and lactose one unit's anomeric carbon is a glycoside and the other's is still a hemiacetal, so they reduce and mutarotate. Sucrose does neither, which means neither anomeric carbon is free: the only way to achieve that with two sugars is a glycosidic bond from one anomeric carbon to the other. Sucrose is therefore glucose C1 linked to fructose C2, with glucose as an alpha-pyranoside and fructose as a beta-furanoside, each the acetal (or ketal) of the other.",
      "approach": "Step 1: State what the observations exclude: any free hemiacetal would open in water, mutarotate, and reduce Tollens' reagent.\nStep 2: A disaccharide has two anomeric carbons. For neither to be free, both must be part of the glycosidic linkage: the bond must run C1 (glucose) to C2 (fructose) through one oxygen.\nStep 3: Check consistency: acid hydrolysis of that double acetal gives one glucose and one fructose (invert sugar), as observed.\nStep 4: The fructose ring in sucrose is the five-membered furanose, formed from its C5 OH; a ketose in a hemiketal ring can open just as an aldose can, so ring size is not what stops mutarotation.",
      "note": "McMurry 25.8 (Disaccharides) states that sucrose yields one equivalent of glucose and one of fructose on hydrolysis, that the mixture is called invert sugar because the rotation changes from +66.5 to -22.0 (honeybee invertases catalyse the hydrolysis, and honey is largely glucose, fructose and sucrose), and that because sucrose is not a reducing sugar and does not undergo mutarotation it is not a hemiacetal, glucose and fructose must both be glycosides, and this can happen only if the two sugars are joined by a glycoside link between the anomeric carbons of both, C1 of glucose and C2 of fructose.",
      "options": {
        "A": "Correct. A bond between the two anomeric carbons leaves no hemiacetal anywhere, which is the only structure consistent with no mutarotation and no reducing power.",
        "B": "A 1,4 link would leave fructose's C2 as a free hemiketal, which opens to the ketone; and a free ketose is a reducing sugar anyway, because base isomerises it to aldoses (McMurry 25.6). Sucrose would then reduce, and it does not.",
        "C": "Sucrose is hydrolysed by dilute acid and by invertase to two monosaccharides, the behaviour of a glycoside; an ordinary ether would survive both. The link is an acetal between anomeric carbons.",
        "D": "Fructose in sucrose is a furanose, not a pyranose, and either ring can open to the ketone if its anomeric carbon carries an OH. What prevents opening is that the anomeric carbon is a full ketal in the glycosidic bond."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q39_cellobiose_bromine",
    "topic": "Disaccharides",
    "difficulty_level": "Hard",
    "question_text": "Cellobiose is treated with bromine in buffered water. What happens?",
    "options": [
      {
        "option_id": "A",
        "text": "Only the hemiacetal (reducing) glucose unit is oxidised, at its C1, giving a disaccharide aldonic acid (cellobionic acid) with the beta-glycoside intact",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Both glucose units are oxidised at C1 to give two aldonic acid groups",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "No reaction, because cellobiose is a nonreducing sugar",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The glycosidic bond is hydrolysed first and two molecules of D-gluconic acid form",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Bromine water oxidises aldehydes, and in a sugar the aldehyde is available only from a hemiacetal anomeric carbon. Cellobiose has two glucose units: the left one is a beta-glycoside at C1, an acetal that cannot open, and the right one keeps a hemiacetal at C1 that is in equilibrium with the open-chain aldehyde. The oxidant therefore acts on the reducing end only, converting that C1 into CO2H and leaving the acetal link untouched, since acetals need aqueous acid, not a mild oxidant, to hydrolyse. The product keeps the disaccharide skeleton with one aldonic acid end.",
      "approach": "Step 1: Locate the hemiacetal: C1 of the right-hand (reducing) glucose unit; the left unit's C1 is the glycosidic acetal.\nStep 2: The hemiacetal opens to the aldehyde, which Br2 oxidises to a carboxylic acid, the aldonic acid reaction of McMurry 25.6.\nStep 3: The glycoside is stable under the buffered, non-acidic conditions, so the two units stay joined.\nStep 4: Product: 4-O-(beta-D-glucopyranosyl)-D-gluconic acid, cellobionic acid, with one CO2H and the beta-1,4 acetal intact. NaBH4 would likewise touch only the reducing end (to the alditol), and acetyl chloride/pyridine would acylate all eight OH groups.",
      "note": "McMurry 25.8 (Disaccharides) sets this as Problem 25-25(b), alongside NaBH4 and CH3COCl/pyridine, right after stating that maltose and cellobiose are both reducing sugars because the anomeric carbons on their right-hand glucopyranose units have hemiacetal groups and are in equilibrium with aldehyde forms. The oxidation itself, aldose to aldonic acid with buffered Br2/H2O, is McMurry 25.6, and the stability of glycosides in neutral water is stated in the same section.",
      "options": {
        "A": "Correct. Only the reducing end has an aldehyde to offer; bromine water converts it to CO2H and leaves the beta-1,4 glycoside alone.",
        "B": "The left glucose unit's C1 is a glycoside, an acetal with no aldehyde to expose, so it cannot be oxidised. One unit, one aldonic acid.",
        "C": "Cellobiose is a reducing sugar; the text says so. Its right-hand unit has a free hemiacetal at C1 that opens to the aldehyde, which is exactly what bromine water oxidises.",
        "D": "Acetals are hydrolysed by aqueous acid, and buffered bromine water is not acidic enough to do it; the glycosidic bond survives. Two gluconic acids would need hydrolysis first, a separate step."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q40_cellobiose_acetylation_count",
    "topic": "Disaccharides",
    "difficulty_level": "Medium",
    "question_text": "Cellobiose is treated with excess acetyl chloride in pyridine. How many acetyl groups does the fully acetylated product carry?",
    "options": [
      {
        "option_id": "A",
        "text": "8",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "10",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "7",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "6",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Acylation with an acid chloride and pyridine converts every free hydroxyl of a sugar, hemiacetal OH included, into an ester. The count is therefore the number of free OH groups. Each glucopyranose has five (C1, C2, C3, C4, C6), ten for two units, but forming the glycosidic bond consumed two of them: the anomeric OH of the left unit became the acetal oxygen, and the C4 OH of the right unit is now the bridging oxygen. Cellobiose, C12H22O11, thus has eight free hydroxyls, seven alcohols and one hemiacetal, and the octaacetate is the product.",
      "approach": "Step 1: Count hydroxyls in one glucopyranose: C1 (hemiacetal), C2, C3, C4, C6, five.\nStep 2: Two units give ten; subtract the two lost in making the beta-1,4 link (left C1 OH, right C4 OH): eight.\nStep 3: List them: right unit C1, C2, C3, C6 (four) and left unit C2, C3, C4, C6 (four).\nStep 4: With excess CH3COCl and pyridine all eight are acetylated, the anomeric OH included: cellobiose octaacetate. The same count gives the eight ether groups of permethylated cellobiose.",
      "note": "McMurry 25.8 (Disaccharides), Problem 25-25(c), asks for the product of cellobiose with CH3COCl and pyridine, and McMurry 25.6 states that esterification with an acid chloride or acid anhydride and base converts all the OH groups of a sugar, including the anomeric one, into esters (glucose pentaacetate is the monosaccharide example). The bridging oxygen of the glycoside is an acetal oxygen with no hydrogen, so it takes no acetyl group.",
      "options": {
        "A": "Correct. Ten hydroxyls in two glucoses minus the two used to make the glycosidic bond leaves eight, all of which are acetylated.",
        "B": "Ten counts the hydroxyls of two free glucose molecules. The glycosidic bond has already consumed two of them (left C1 and right C4), so the disaccharide has only eight.",
        "C": "Seven is the count if the anomeric hemiacetal OH of the reducing end is left out, but under these conditions it acetylates like every other hydroxyl; the text is explicit that the anomeric OH reacts.",
        "D": "Six would mean losing four hydroxyls to the glycosidic bond, but forming one acetal link consumes exactly two (one anomeric OH and one C4 OH). Eight remain."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q41_amylopectin_branches",
    "topic": "Polysaccharides",
    "difficulty_level": "Easy",
    "question_text": "Starch is a mixture of amylose (about 20%) and amylopectin (about 80%). How does amylopectin differ from amylose?",
    "options": [
      {
        "option_id": "A",
        "text": "Amylopectin is branched: besides the alpha-1,4 chain it has alpha-1,6 glycoside branches about every 25 glucose units, whereas amylose is a linear alpha-1,4 polymer",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Amylopectin is linked beta-1,4 like cellulose, amylose alpha-1,4",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Amylopectin is built from maltose units, amylose from glucose units",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Amylopectin is a reducing sugar because each branch carries a free hemiacetal; amylose is not",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Both fractions of starch are polymers of D-glucose joined by alpha-1,4 glycoside bonds, the maltose linkage. Amylose is a linear chain of several hundred units. Amylopectin is larger and branched: every 25 or so units a glucose's C6 hydroxyl is also glycosylated, giving an alpha-1,6 branch that starts a new alpha-1,4 chain. Glycogen, the animal storage polysaccharide, has the same two kinds of link with more branches and up to 100,000 units. Cellulose differs from all of them in the anomeric configuration of its link, beta-1,4, which human enzymes cannot hydrolyse.",
      "approach": "Step 1: Both are all-glucose and both use the alpha-1,4 link, so the difference is not in the monomer or the main-chain bond.\nStep 2: Amylopectin adds a second kind of bond, alpha-1,6, from C1 of a chain-starting glucose to the C6 oxygen of a glucose in another chain, roughly every 25 residues.\nStep 3: Branching makes amylopectin a compact, highly soluble particle and gives enzymes many chain ends to work on, which is the point of a storage polymer.\nStep 4: Neither fraction is meaningfully reducing: each chain has a single hemiacetal end among hundreds of units; a branch adds a nonreducing end, not a hemiacetal.",
      "note": "McMurry 25.9 (Polysaccharides and Their Synthesis) states that starch is separated into amylose, about 20% by weight, several hundred glucose units linked by 1,4-alpha-glycoside bonds, and amylopectin, the remaining 80%, which unlike the linear cellulose and amylose contains 1,6-alpha-glycoside branches approximately every 25 glucose units; glycogen has both 1,4 and 1,6 links, up to 100,000 glucose units and even more branches (Figure 25.12). Polysaccharides are not reducing sugars because they have only one free anomeric OH at the end of a very long chain.",
      "options": {
        "A": "Correct. Both are alpha-1,4 glucose polymers; amylopectin adds alpha-1,6 branches about every 25 units, amylose has none.",
        "B": "Beta-1,4 links are cellulose's, and they make cellulose indigestible. Both starch fractions are alpha-1,4 linked, which is why both are digested by alpha-glycosidases.",
        "C": "Both are made of glucose; maltose is simply the alpha-1,4 disaccharide that starch hydrolysis gives, not a distinct monomer. The difference is branching, not the repeating unit.",
        "D": "A branch is made by glycosylating a C6 OH; the branch chain's own C1 is the acetal in that bond, so branching creates no new hemiacetals. Each molecule of either polymer has one hemiacetal end, and neither is a reducing sugar in practice."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q42_alpha_glycosidase_selectivity",
    "topic": "Polysaccharides",
    "difficulty_level": "Medium",
    "question_text": "Cellulose and amylose are both linear polymers of D-glucose linked 1,4, yet humans digest potatoes and grain but not grass and leaves. Why?",
    "options": [
      {
        "option_id": "A",
        "text": "Human alpha-glycosidases hydrolyse only the alpha-1,4 links of starch and leave the beta-1,4 links of cellulose untouched",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cellulose is too large a molecule to be hydrolysed, whereas amylose is short enough",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cellulose is a polymer of L-glucose, which human enzymes do not recognise",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The hydrogen-bonded aggregate structure of cellulose is insoluble in stomach acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The two polymers differ only in the anomeric configuration of the glycosidic bond, alpha in starch and beta in cellulose, and enzymes are stereospecific. Starch is digested in the mouth and stomach by alpha-glycosidases, which bind the alpha-1,4 link and hydrolyse it to release glucose; the same enzymes cannot accommodate the beta-1,4 link and do nothing to cellulose. Ruminants and termites manage cellulose only because microorganisms in their guts supply a beta-glycosidase (cellulase). Chemically the two links are equally hydrolysable by aqueous acid; the selectivity is enzymatic.",
      "approach": "Step 1: Identify the difference: amylose is alpha-1,4 (maltose-type) and cellulose is beta-1,4 (cellobiose-type); monomer, connectivity and chain shape are otherwise the same.\nStep 2: Digestion is enzymatic hydrolysis, and an enzyme's active site is chiral; alpha-glycosidases are specific for the alpha link.\nStep 3: So starch is hydrolysed to glucose and absorbed; cellulose passes through as fibre.\nStep 4: The same specificity appears in the disaccharides: maltose (alpha) is digested and fermented, cellobiose (beta) is not.",
      "note": "McMurry 25.9 (Polysaccharides and Their Synthesis) states that starch is digested in the mouth and stomach by alpha-glycosidases, that these enzymes, like most, are highly selective, hydrolysing only the alpha-glycoside links in starch and leaving the beta-glycoside links in cellulose untouched, so that humans can digest potatoes and grains but not grass and leaves; McMurry 25.8 makes the same point for maltose against cellobiose. Cellulose's hydrogen-bonded aggregate structure is mentioned there as the source of its strength, not of its indigestibility.",
      "options": {
        "A": "Correct. The enzymes are stereospecific for the alpha link; cellulose's beta link is chemically similar but enzymatically invisible to them.",
        "B": "Amylose is several hundred units long and amylopectin and glycogen far larger, and all are digested; enzymes act on the links at chain ends and along the chain regardless of overall size. Length is not the barrier.",
        "C": "Cellulose is made of ordinary D-glucose, the same monomer as starch, as its hydrolysis to cellobiose and glucose shows. The difference is the beta configuration at the glycosidic carbon, not the D/L series.",
        "D": "Insolubility slows digestion but does not prevent it; the aggregate is what makes cellulose strong. Dissolved cellulose derivatives are still not hydrolysed by human alpha-glycosidases, because the link is beta."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q43_glycal_assembly",
    "topic": "Polysaccharides",
    "difficulty_level": "Hard",
    "question_text": "In the glycal assembly method of polysaccharide synthesis, how is the new glycosidic bond formed?",
    "options": [
      {
        "option_id": "A",
        "text": "A protected glycal is epoxidised at its C1-C2 double bond, and the epoxide is opened at C1 by the free OH of a second glycal with ZnCl2, an SN2 backside attack that sets the anomeric configuration",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A glycosyl bromide is displaced by the second sugar's alkoxide with Ag2O, as in the Koenigs-Knorr reaction",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The two sugars are heated with acid so that the hemiacetal of one forms an acetal with an OH of the other",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The C1-C2 double bond of the glycal adds directly across the OH of the second sugar in a Markovnikov addition",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A glycal is a sugar with a C1-C2 double bond, an enol ether. Protecting its other hydroxyls (a silyl ether at the primary OH, a cyclic carbonate spanning the two secondary ones) leaves the double bond as the only reactive site. Epoxidation gives a 1,2-anhydro sugar, an epoxide fused to the ring at C1 and C2. A Lewis acid such as ZnCl2 activates the epoxide, and the one free OH on a second glycal opens it at the anomeric carbon by backside attack, so the new glycoside forms with inversion relative to the epoxide face and the C2 oxygen is liberated as an OH. The product is itself a glycal and the cycle repeats, so oligosaccharides are built one sugar at a time with control at every anomeric centre.",
      "approach": "Step 1: Prepare the donor: protect the glycal (silyl ether, cyclic carbonate), then epoxidise its C1-C2 alkene.\nStep 2: Prepare the acceptor: a second glycal carrying exactly one free OH.\nStep 3: With ZnCl2, the acceptor's OH attacks the epoxide at C1, SN2 from the back face; the epoxide oxygen becomes the donor's C2 OH.\nStep 4: The disaccharide still has the acceptor's glycal double bond, so it can be epoxidised and coupled again; finally the silyl ethers and carbonates are removed by hydrolysis.",
      "note": "McMurry 25.9 (Polysaccharides and Their Synthesis) describes the glycal assembly method: a glycal is an unsaturated sugar with a C1-C2 double bond, protected at its primary OH as a silyl ether (17.8) and at its two adjacent secondary OH groups as a cyclic carbonate, then epoxidised; treatment of the protected glycal epoxide in the presence of ZnCl2 as a Lewis acid with a second glycal having a free OH group causes acid-catalysed opening of the epoxide ring by SN2 backside attack (18.6) and yields a disaccharide, which is itself a glycal and can be epoxidised and coupled again, with the protecting groups removed at the end. Tumour-associated carbohydrate antigens made this way are being tested as vaccines.",
      "options": {
        "A": "Correct. Epoxidation of the glycal and Lewis-acid-catalysed SN2 opening by the acceptor's free OH makes the glycoside at C1 with defined stereochemistry, and the product is ready for the next cycle.",
        "B": "That is the Koenigs-Knorr reaction of McMurry 25.6, a different glycosylation using a glycosyl bromide and an acetate neighbouring group. The glycal method uses an epoxide, not a halide, and a Lewis acid, not silver.",
        "C": "Acid-catalysed acetal formation between two unprotected sugars would react at any of their many hydroxyls and give mixtures at the anomeric centre; the whole point of the glycal method is one free OH on the acceptor and a stereodefined epoxide on the donor.",
        "D": "The double bond is not attacked directly by the alcohol; it is first converted into an epoxide, and the alcohol opens the epoxide. Simple addition of an alcohol to a glycal enol ether would give a 2-deoxy glycoside, not the 2-hydroxy glycoside the method produces."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch25_q44_deoxyribose",
    "topic": "Other Important Carbohydrates",
    "difficulty_level": "Easy",
    "question_text": "2-Deoxyribose, the sugar of DNA, differs from D-ribose in what way?",
    "options": [
      {
        "option_id": "A",
        "text": "The OH at C2 is replaced by H, so the sugar has one oxygen fewer and one stereocentre fewer",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The OH at C3 is replaced by H",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The C1 aldehyde is reduced to CH2OH, giving an alditol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The C5 CH2OH is replaced by CH3, as in the 6-deoxy sugar fucose",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Deoxy names a sugar with an OH replaced by H, and the locant says where. 2-Deoxyribose is D-ribose without the C2 oxygen: C2 is a CH2, the stereocentres at C3 and C4 are unchanged, and the formula drops from C5H10O5 to C5H10O4. In water it is a mixture of furanose and pyranose forms; in DNA it is the beta-furanose, with the nucleobase on C1, a phosphate on C5 and the C3 OH forming the next phosphate link. The absence of the C2 OH is what makes DNA more resistant than RNA to hydrolysis at the phosphate.",
      "approach": "Step 1: Parse the name: deoxy, at C2.\nStep 2: Apply it to D-ribose (right, right, right at C2, C3, C4): remove the C2 OH, leaving CH2. C2 is no longer a stereocentre.\nStep 3: Check what remains: CHO at C1, CH2 at C2, CHOH at C3 and C4 with ribose's configurations, CH2OH at C5.\nStep 4: The furanose form used in DNA closes through the C4 OH onto C1, exactly as ribose does (Problem 25-11), with C2 now bearing two hydrogens.",
      "note": "McMurry 25.10 (Some Other Important Carbohydrates) states that deoxy sugars have an oxygen atom missing, that the most common deoxy sugar is 2-deoxyribose, a monosaccharide found in DNA, and that 2-deoxyribose exists in water solution as a complex equilibrium mixture of both furanose and pyranose forms; McMurry 25.7 defines the deoxy sugar fucose the same way at C6. The nucleoside structures built on 2-deoxyribose are McMurry 28.1.",
      "options": {
        "A": "Correct. The locant 2 places the missing oxygen at C2, turning CHOH into CH2 and removing that stereocentre.",
        "B": "The locant is 2, not 3. The C3 OH must remain: in DNA it is the hydroxyl that forms the phosphodiester link to the next nucleotide.",
        "C": "Reducing the aldehyde gives ribitol, an alditol, which still has all five oxygens. Deoxy means an oxygen is missing, and 2-deoxyribose keeps its C1 aldehyde (as a hemiacetal in the ring).",
        "D": "Removing the C5 oxygen would be 5-deoxyribose, the pentose analogue of fucose's 6-deoxy pattern. DNA's sugar keeps C5 as CH2OH because that is where the phosphate attaches."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  }
];
