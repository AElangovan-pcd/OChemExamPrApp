// OChemStudyBuddy - McMurry Chapter 2
// Author: A. Elangovan, PhD
var CH02_QUESTIONS = [
  {
    "question_id": "ch02_q1_electronegativity_trend",
    "topic": "Polar Covalent Bonds & Electronegativity",
    "difficulty_level": "Easy",
    "question_text": "Which of the following elements is the most electronegative?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Fluorine (EN = 4.0)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Oxygen (EN = 3.5)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Nitrogen (EN = 3.0)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Carbon (EN = 2.5)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Electronegativity measures how strongly a bonded atom pulls shared electrons toward itself. It rises across a period as nuclear charge increases, and falls down a group as the valence shell gets further from the nucleus.",
      "approach": "Step 1: Place the four candidates. Carbon, nitrogen, oxygen and fluorine all sit in the second period, in that order left to right.\nStep 2: Apply the periodic trend. Moving right across a period adds protons without adding a shell, so the nucleus holds the bonding electrons more tightly.\nStep 3: Fluorine is furthest right of the four, and it is the most electronegative element on the whole scale at 4.0.",
      "note": "Fluorine is the maximum against which the Pauling scale is defined, so nothing exceeds it. Carbon at 2.5 sits near the middle, which is why carbon can be the partially positive or the partially negative partner depending on what it is bonded to - the flexibility that makes organic chemistry possible.",
      "options": {
        "A": "Correct. Fluorine is the most electronegative element there is, at the top of the Pauling scale at 4.0.",
        "B": "Oxygen is highly electronegative at 3.5 and second among these, but fluorine is one place further right in the same period and exceeds it.",
        "C": "Nitrogen at 3.0 is electronegative enough to make N-H bonds polar, but two elements here are more so.",
        "D": "Carbon at 2.5 is the least electronegative of the four, sitting furthest left in the period."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q2_dipole_vector",
    "topic": "Polar Covalent Bonds & Electronegativity",
    "difficulty_level": "Medium",
    "question_text": "In chloromethane (CH3Cl), which atom carries the partial negative charge (\\(\\delta^-\\))?",
    "question_smiles": "CCl",
    "options": [
      {
        "option_id": "A",
        "text": "Chlorine (due to its high electronegativity compared to carbon)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Carbon",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Hydrogen",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "None, the bond is purely ionic",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "In a polar covalent bond the electrons are shared but unequally. The more electronegative atom draws them closer and takes on a partial negative charge, leaving its partner partially positive. Neither charge is a full unit.",
      "approach": "Step 1: Identify the polar bond. In chloromethane the C-Cl bond is the polar one; the C-H bonds are barely polar.\nStep 2: Compare electronegativities across it: chlorine is about 3.0 against carbon's 2.5.\nStep 3: Chlorine is the more electronegative, so it pulls the shared pair toward itself and carries the partial negative charge, leaving the carbon partially positive.",
      "note": "That partially positive carbon is what makes chloromethane useful: it is the site a nucleophile attacks, and this polarity is the starting point for the substitution chemistry of Chapter 11. Bond polarity is not a curiosity, it is a prediction about where a molecule reacts.",
      "options": {
        "A": "Correct. Chlorine is more electronegative than carbon, so it draws the bonding electrons toward itself and carries the partial negative charge.",
        "B": "Carbon is the less electronegative partner in this bond, so it carries the partial positive charge rather than the negative one.",
        "C": "The hydrogens are attached to carbon, not to chlorine, and the C-H bond is only slightly polar. They are not where the negative charge accumulates.",
        "D": "The bond is polar covalent, not ionic. An electronegativity difference of about 0.5 gives unequal sharing, well short of the complete transfer an ionic bond requires."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A carbon atom bonded to a chlorine atom, with the carbon's remaining bonds to hydrogen."
  },
  {
    "question_id": "ch02_q3_dipole_comparison_amines",
    "topic": "Polar Covalent Bonds & Electronegativity",
    "difficulty_level": "Medium",
    "question_text": "Which of the following compounds has the largest net molecular dipole moment?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Methylamine (CH3NH2) (dipole = 1.31 D)",
        "smiles": "CN",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Trimethylamine ((CH3)3N) (dipole = 0.61 D due to cancellation)",
        "smiles": "CN(C)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethane (CH3CH3) (dipole = 0.00 D)",
        "smiles": "CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Carbon tetrachloride (CCl4) (dipole = 0.00 D)",
        "smiles": "ClC(Cl)(Cl)Cl",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A molecular dipole is the vector sum of the bond dipoles plus any contribution from lone pairs. Symmetry can cancel large bond dipoles to nothing, so the presence of polar bonds does not by itself predict a large net moment.",
      "approach": "Step 1: Eliminate the symmetric molecules. Ethane has essentially no polar bonds, and carbon tetrachloride's four polar bonds cancel exactly in its tetrahedral arrangement. Both measure zero.\nStep 2: Compare the two amines. Both have a polar C-N bond arrangement and a nitrogen lone pair, so both are polar.\nStep 3: In trimethylamine three alkyl groups are arranged around the nitrogen so their bond dipoles partly oppose one another, cutting the total to 0.61 D. Methylamine's less symmetric arrangement leaves a larger resultant at 1.31 D.",
      "note": "Molecular dipole is what governs boiling point and solubility, so this ordering is not just bookkeeping - methylamine's larger moment, together with its N-H bonds, is why it associates far more strongly than trimethylamine, which has no N-H at all.",
      "options": {
        "A": "Correct. Methylamine's arrangement leaves the largest uncancelled resultant of the four, at 1.31 D.",
        "B": "Trimethylamine is polar, but its three methyl groups are arranged so that their bond dipoles partly cancel, leaving less than half of methylamine's moment.",
        "C": "Ethane is built only from C-C and C-H bonds, which are barely polar, and it is symmetric. Its dipole moment is effectively zero.",
        "D": "Carbon tetrachloride has four strongly polar bonds, but the tetrahedral arrangement cancels them exactly, giving no net moment at all."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q4_formal_charge_rules",
    "topic": "Formal Charges & Lewis Structures",
    "difficulty_level": "Easy",
    "question_text": "Which of the following is the correct equation for calculating formal charge on an atom in a Lewis structure?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Formal Charge = [Valence Electrons] - [Unshared Electrons] - 0.5 * [Shared Electrons]",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Formal Charge = [Valence Electrons] - [Shared Electrons] - 2 * [Unshared Electrons]",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Formal Charge = [Shared Electrons] - [Unshared Electrons] - [Valence Electrons]",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Formal Charge = [Valence Electrons] - 0.5 * [Unshared Electrons] - [Shared Electrons]",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Formal charge asks how many electrons an atom owns in a structure compared with how many it owns as a free atom. Ownership is assigned by a convention: an atom keeps all of its unshared electrons and half of every pair it shares.",
      "approach": "Step 1: Start from the atom's valence electron count, which is what a free atom would own.\nStep 2: Subtract the electrons it keeps entirely - the unshared, or nonbonding, electrons.\nStep 3: Subtract its share of the bonding electrons, which is half of the shared electrons. Since each bond holds two shared electrons, half the shared electrons is simply the number of bonds.",
      "note": "The two common forms of this formula are the same equation. Half the shared electrons equals the number of bonds, so valence minus unshared minus half-shared is identical to valence minus nonbonding electrons minus bond count - use whichever is quicker for the structure in front of you.",
      "options": {
        "A": "Correct. An atom keeps all its unshared electrons and half of each shared pair, and the difference from its valence count is the formal charge.",
        "B": "The coefficients are attached to the wrong terms. Unshared electrons are subtracted in full and shared electrons at half, not the other way about.",
        "C": "This has the valence electron count subtracted rather than used as the starting point, which reverses the sign of the whole comparison.",
        "D": "This halves the unshared electrons and takes the shared ones in full - again the two coefficients swapped. An atom owns all of its lone pairs, not half of them."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q5_resonance_oxygen_carbocation",
    "topic": "Resonance Theory",
    "difficulty_level": "Hard",
    "question_text": "Which is the major contributor to the resonance hybrid of the methoxymethyl carbocation?",
    "question_smiles": "CO[CH2+]",
    "options": [
      {
        "option_id": "A",
        "text": "H2C=O+-CH3 (all atoms satisfy the octet rule)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "H2C+-O-CH3 (carbon has an incomplete octet)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both contribute equally.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A radical contributor resulting from homolytic cleavage.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Among resonance contributors, the one in which every atom has a complete octet is normally the major one. A neighbouring lone pair can supply the electrons to complete an incomplete octet, which is what stabilises a cation next to a heteroatom.",
      "approach": "Step 1: Look at the cation as drawn. The positive carbon has only three bonds and six valence electrons, so its octet is incomplete.\nStep 2: Look next door. The oxygen carries lone pairs, and one of them can shift into the empty p orbital on that carbon, forming a second carbon-oxygen bond.\nStep 3: In the resulting structure the carbon has a full octet and the positive charge has moved to oxygen, which now has three bonds. A complete octet on every atom outweighs putting the charge on the more electronegative element.",
      "note": "This is why an oxygen next to a cationic centre is so stabilising, and it is the reason oxocarbenium ions appear throughout carbohydrate chemistry in Chapter 25. Note the trade being made: charge moves onto the more electronegative atom, which normally costs, but completing the octet gains more.",
      "options": {
        "A": "Correct. Donating an oxygen lone pair completes the carbon's octet, and a structure with every atom satisfied outweighs the cost of placing the charge on oxygen.",
        "B": "This contributor is real and is how the ion is usually drawn, but it leaves the carbon with only six valence electrons. The contributor with complete octets is the major one.",
        "C": "The two structures are not equivalent - one has an incomplete octet and the other does not - so they cannot contribute equally to the hybrid.",
        "D": "Resonance contributors never differ in their number of unpaired electrons. Homolytic cleavage would create a different species, not a contributor to this one."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A methyl group bonded to an oxygen, which is bonded to a carbon bearing two hydrogens and a positive charge."
  },
  {
    "question_id": "ch02_q6_bronsted_acid_def",
    "topic": "Acids and Bases: Brønsted-Lowry Definition",
    "difficulty_level": "Easy",
    "question_text": "According to the Brønsted-Lowry definition, what is an acid?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "A proton ($H^+$) donor",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A proton ($H^+$) acceptor",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "An electron pair donor",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "An electron pair acceptor",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Brønsted-Lowry definition is framed entirely in terms of protons: an acid supplies one and a base takes one. It sits alongside the Lewis definition, which is framed in terms of electron pairs and is broader.",
      "approach": "Step 1: Recall that Brønsted-Lowry acidity and basicity are defined as a pair - one species gives up a proton and another accepts it.\nStep 2: Assign the acid. The species that donates the proton is the acid.\nStep 3: What remains after the proton leaves is the conjugate base, and the species that accepted it becomes the conjugate acid.",
      "note": "Keep the two definitions separate in your head. Every Brønsted acid is also a Lewis acid, but the reverse fails: boron trifluoride accepts an electron pair without having any proton to donate, so it is a Lewis acid only.",
      "options": {
        "A": "Correct. A Brønsted-Lowry acid donates a proton, leaving its conjugate base behind.",
        "B": "Accepting a proton is the Brønsted-Lowry definition of a base, not an acid.",
        "C": "Donating an electron pair is the Lewis definition of a base. It is a different framework from the proton-based one this question asks about.",
        "D": "Accepting an electron pair is the Lewis definition of an acid. It describes a broader class than the Brønsted-Lowry definition asked for here."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q7_pka_definition",
    "topic": "Acid Strength and pKa",
    "difficulty_level": "Medium",
    "question_text": "Which of the following statements correctly relates pKa to acid strength?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "A smaller \\(pK_a\\) value corresponds to a stronger acid.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A larger \\(pK_a\\) value corresponds to a stronger acid.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "\\(pK_a\\) values are negative logs of pH, so they are independent of acid strength.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Strong acids always have a \\(pK_a\\) equal to 7.0.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "pKa is the negative logarithm of the acid dissociation constant Ka. Because it is a negative log, the relationship runs backwards from intuition: as an acid gets stronger and Ka gets larger, pKa gets smaller.",
      "approach": "Step 1: Recall that a stronger acid dissociates more, so its equilibrium constant Ka is larger.\nStep 2: Apply the negative logarithm. Taking a log of a larger number gives a larger result, and negating it gives a smaller one.\nStep 3: So a stronger acid has a smaller, and often negative, pKa. Hydrochloric acid at about minus 7 is far stronger than ethanol at 16.",
      "note": "Because the scale is logarithmic, the gaps are much larger than they look: a difference of one pKa unit is a factor of ten in acidity, so ethanol and acetic acid differ by more than eleven orders of magnitude. Treat pKa differences as exponents, never as linear distances.",
      "options": {
        "A": "Correct. pKa is the negative log of Ka, so a stronger acid with a larger Ka ends up with a smaller pKa.",
        "B": "This has the relationship inverted. Larger pKa means smaller Ka and therefore less dissociation - a weaker acid.",
        "C": "pKa is derived from Ka, a property of the acid itself, not from pH, which describes a particular solution. The two are related but distinct quantities.",
        "D": "A pKa of 7 has no special status for acids; 7 is neutral on the pH scale, which is a different measurement. Strong acids have pKa values well below zero."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q8_pka_values_comparison",
    "topic": "Acid Strength and pKa",
    "difficulty_level": "Medium",
    "question_text": "Given the pKa values: ethanol (16), phenol (10), acetic acid (4.75), and hydrochloric acid (-7), which is the strongest base?",
    "question_smiles": "CCO",
    "options": [
      {
        "option_id": "A",
        "text": "Ethoxide ion (CH3CH2O-)",
        "smiles": "CC[O-]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Phenoxide ion (C6H5O-)",
        "smiles": "c1ccc(cc1)[O-]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetate ion (CH3COO-)",
        "smiles": "CC(=O)[O-]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Chloride ion (Cl-)",
        "smiles": "[Cl-]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Acid strength and conjugate base strength are inverse. A strong acid gives up its proton readily, which means its conjugate base holds that proton weakly and is therefore a weak base. The weakest acid in a list has the strongest conjugate base.",
      "approach": "Step 1: Order the acids by pKa. Hydrochloric acid at minus 7 is strongest, then acetic acid at 4.75, then phenol at 10, then ethanol at 16.\nStep 2: Identify the weakest acid, which is the one with the largest pKa - ethanol.\nStep 3: Take its conjugate base. Ethoxide is the conjugate base of the weakest acid here, so it is the strongest base of the four.",
      "note": "This inverse relationship is the practical value of a pKa table: it doubles as a table of base strengths read from the bottom up. It is also why ethoxide is a useful strong base in synthesis while chloride, from the strongest acid, is essentially non-basic.",
      "options": {
        "A": "Correct. Ethanol has the largest pKa of the four and so is the weakest acid, which makes its conjugate base ethoxide the strongest base.",
        "B": "Phenoxide comes from phenol at pKa 10, an acid stronger than ethanol. That makes phenoxide the more stable and therefore weaker base of the two.",
        "C": "Acetate comes from acetic acid at pKa 4.75. Its charge is delocalized over two oxygens, which stabilises it and makes it a comparatively weak base.",
        "D": "Chloride is the conjugate base of hydrochloric acid, the strongest acid listed, so it is the weakest base of the four - effectively non-basic in water."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A two-carbon chain ending in a hydroxyl group."
  },
  {
    "question_id": "ch02_q9_predict_eq",
    "topic": "Predicting Acid-Base Reactions from pKa Values",
    "difficulty_level": "Hard",
    "question_text": "Predict the equilibrium position for the reaction of phenol (pKa = 10) with sodium bicarbonate (NaHCO3, conjugate acid H2CO3 pKa = 6.4).",
    "question_smiles": "c1ccc(cc1)O",
    "options": [
      {
        "option_id": "A",
        "text": "Equilibrium lies heavily to the left (reactants favored).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Equilibrium lies heavily to the right (products favored).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Equilibrium is perfectly balanced (K = 1).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Phenol decomposes under these conditions.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An acid-base equilibrium favours the side with the weaker acid, because the stronger acid is the one more willing to give its proton away. Comparing the pKa of the acid you start with against the pKa of the acid you would form settles the direction.",
      "approach": "Step 1: Identify the acid on each side. On the left, phenol at pKa 10 would donate a proton to bicarbonate. On the right, the acid formed is carbonic acid at pKa 6.4.\nStep 2: Compare them. The lower pKa belongs to carbonic acid, so carbonic acid is the stronger of the two by more than three orders of magnitude.\nStep 3: Equilibrium favours the side holding the weaker acid, which is phenol on the left. So the reaction does not proceed appreciably.",
      "note": "This is the basis of a classical separation. Carboxylic acids at around pKa 5 are deprotonated by bicarbonate and dissolve, while phenols at pKa 10 are not - so bicarbonate washing separates a carboxylic acid from a phenol, and the pKa table predicts it before any experiment.",
      "options": {
        "A": "Correct. Phenol at pKa 10 is the weaker acid and carbonic acid at 6.4 the stronger, so equilibrium favours the reactant side.",
        "B": "Products would be favoured only if phenol were the stronger acid, meaning a pKa below 6.4. At pKa 10 it is more than three orders of magnitude weaker.",
        "C": "A balanced equilibrium would need the two acids to have essentially equal pKa values. A gap of 3.6 units is a factor of about four thousand.",
        "D": "Bicarbonate is a mild base and does nothing to the aromatic ring. Failing to react is not the same as decomposing."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing a hydroxyl group."
  },
  {
    "question_id": "ch02_q10_lewis_acid_def",
    "topic": "Acids and Bases: Lewis Definition",
    "difficulty_level": "Easy",
    "question_text": "What is the definition of a Lewis base?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "An electron pair donor",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "An electron pair acceptor",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A proton donor",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A hydroxide donor",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The Lewis definition describes acids and bases in terms of electron pairs rather than protons. That makes it the broader framework, and it is the one that maps directly onto curved-arrow mechanisms, where arrows always start at an electron pair.",
      "approach": "Step 1: Recall the pairing. A Lewis acid accepts an electron pair; a Lewis base supplies one.\nStep 2: The question asks for the base, so identify the donor.\nStep 3: A Lewis base must therefore have an electron pair available to give - a lone pair, or sometimes the electrons of a pi bond.",
      "note": "Lewis base and nucleophile describe the same behaviour in different languages: donating an electron pair. The difference is emphasis - basicity is about position at equilibrium, nucleophilicity about rate - and Chapter 11 turns on keeping the two apart.",
      "options": {
        "A": "Correct. A Lewis base donates an electron pair, which is exactly what the tail of a curved arrow represents in a mechanism.",
        "B": "Accepting an electron pair is the Lewis definition of an acid, the partner in the pairing rather than the base.",
        "C": "Donating a proton is the Brønsted-Lowry definition of an acid, from the other framework entirely.",
        "D": "Producing hydroxide is the older Arrhenius definition of a base, which applies only in water and is narrower than the Lewis definition."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q11_lewis_acid_identify",
    "topic": "Acids and Bases: Lewis Definition",
    "difficulty_level": "Medium",
    "question_text": "Which of the following species behaves as a Lewis acid in organic reactions but is not a Brønsted-Lowry acid?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Boron trifluoride (BF3)",
        "smiles": "FB(F)F",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Water (H2O)",
        "smiles": "O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ammonium ion (NH4+)",
        "smiles": "[NH4+]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acetic acid (CH3COOH)",
        "smiles": "CC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Every Brønsted acid is a Lewis acid, but not the reverse. A species that is Lewis acidic without being Brønsted acidic must be able to accept an electron pair while having no proton to donate.",
      "approach": "Step 1: Apply the first test - can the species accept an electron pair? That normally means an incomplete octet or an empty orbital.\nStep 2: Apply the second test - does it have a proton it can give up? If it does, it is a Brønsted acid too and fails the question's requirement.\nStep 3: Boron trifluoride has only six valence electrons around boron and an empty p orbital, so it readily accepts a pair. It contains no hydrogen at all, so it can be nothing but a Lewis acid.",
      "note": "That empty p orbital is why boron trifluoride and aluminium trichloride are standard catalysts: they accept an electron pair from a substrate and activate it, which is exactly the role they play in the Friedel-Crafts reactions of Chapter 16.",
      "options": {
        "A": "Correct. Boron's incomplete octet lets it accept an electron pair, and with no hydrogen in the molecule it cannot donate a proton.",
        "B": "Water can donate a proton, so it is a Brønsted acid as well as being able to act as a Lewis base through its lone pairs.",
        "C": "The ammonium ion's whole reactivity as an acid is donating one of its four protons, which makes it a Brønsted acid.",
        "D": "Acetic acid donates the proton of its OH group; it is the standard example of a weak Brønsted acid."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q12_inductive_effect",
    "topic": "Acid Strength and pKa",
    "difficulty_level": "Hard",
    "question_text": "Why is trifluoroacetic acid (pKa = 0.23) significantly more acidic than acetic acid (pKa = 4.75)?",
    "question_smiles": "FC(F)(F)C(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "The highly electronegative fluorine atoms pull electron density away from the carboxylate group through sigma bonds, stabilizing the negative charge on the conjugate base.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Trifluoroacetic acid has more resonance contributors than acetic acid.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The C-F bonds undergo spontaneous heterolysis under aqueous conditions.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Fluorine is a strong Lewis base.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Acid strength is decided by the stability of the conjugate base. Anything that spreads out or withdraws the negative charge left behind makes that anion more stable and the parent acid stronger.",
      "approach": "Step 1: Compare the conjugate bases rather than the acids. Both give a carboxylate anion with the charge delocalized over two oxygens.\nStep 2: Look at what differs. Trifluoroacetate carries three highly electronegative fluorines two atoms away from that charge.\nStep 3: Those fluorines pull electron density toward themselves along the sigma bonds - an inductive effect - which drains some of the excess charge away from the carboxylate and stabilises it. A more stable conjugate base means a stronger acid, and the pKa falls from 4.75 to 0.23.",
      "note": "Induction falls off sharply with distance, roughly by a factor of a few per bond. Move the fluorines further from the carboxyl group and the effect largely disappears, which is why 2-fluorobutanoic acid is far more acidic than the 4-fluoro isomer.",
      "options": {
        "A": "Correct. The fluorines withdraw electron density through the sigma framework, stabilising the carboxylate's negative charge and making the acid stronger.",
        "B": "Both anions have the same two-oxygen carboxylate delocalization; the fluorines add no new resonance contributor. The difference here is inductive, transmitted through sigma bonds rather than pi.",
        "C": "C-F bonds are among the strongest in organic chemistry and do not ionise in water. If they did, the species would no longer be trifluoroacetic acid.",
        "D": "Fluorine is the most electronegative element and holds its lone pairs tightly, making it a very poor electron-pair donor. Here it withdraws electron density rather than donating it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A carbon bearing three fluorine atoms, bonded to a second carbon that carries a double-bonded oxygen and a hydroxyl group."
  },
  {
    "question_id": "ch02_q13_hybridization_acidity",
    "topic": "Acid Strength and pKa",
    "difficulty_level": "Hard",
    "question_text": "Which of the following hydrocarbons is the most acidic?",
    "question_smiles": "CC",
    "options": [
      {
        "option_id": "A",
        "text": "Acetylene (HC#CH) (pKa = 25)",
        "smiles": "C#C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethylene (H2C=CH2) (pKa = 44)",
        "smiles": "C=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethane (CH3CH3) (pKa = 50)",
        "smiles": "CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propene (CH3CH=CH2) (pKa = 43)",
        "smiles": "CC=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Removing a proton from a hydrocarbon leaves a carbanion, and the lone pair sits in whatever orbital the carbon was using for that bond. The more s character that orbital has, the closer the lone pair is held to the nucleus and the more stable the anion.",
      "approach": "Step 1: Assign the hybridization at the carbon losing the proton. Acetylene's is sp, ethylene's and propene's vinyl carbons are sp2, and ethane's is sp3.\nStep 2: Rank by s character: sp is 50 percent, sp2 is 33, sp3 is 25.\nStep 3: More s character means the resulting lone pair is held closer to the nucleus and is more stable, so the corresponding acid is stronger. Acetylene, at pKa 25, is by far the most acidic of the four.",
      "note": "Even the strongest of these is an extraordinarily weak acid - at pKa 25 acetylene is still around ten billion times weaker than ethanol. The comparison matters not because alkynes are acidic in absolute terms but because a strong enough base, such as sodium amide, can deprotonate one and make a carbon nucleophile, as Chapter 9 does.",
      "options": {
        "A": "Correct. The terminal carbon is sp with 50 percent s character, which holds the resulting lone pair closest to the nucleus and stabilises the anion best.",
        "B": "Ethylene's vinyl carbon is sp2 with 33 percent s character. That stabilises the anion better than an sp3 carbon would, but far less than acetylene's sp carbon, and its pKa of 44 reflects it.",
        "C": "Ethane's carbons are sp3, the lowest s character of the set, giving the least stabilised anion and a pKa of 50 - the weakest acid here.",
        "D": "Propene's pKa of 43 refers to its vinyl positions, which are sp2 like ethylene's. Its allylic hydrogens are more acidic than an alkane's through resonance, but neither position approaches acetylene."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two carbon atoms joined by a single bond, each carrying three hydrogen atoms."
  },
  {
    "question_id": "ch02_q14_resonance_acidity_alcohol_phenol",
    "topic": "Acid Strength and pKa",
    "difficulty_level": "Hard",
    "question_text": "Why is phenol (pKa = 10) significantly more acidic than cyclohexanol (pKa = 16)?",
    "question_smiles": "c1ccc(cc1)O",
    "options": [
      {
        "option_id": "A",
        "text": "The conjugate base of phenol (phenoxide) is stabilized by resonance delocalization of the negative charge into the aromatic ring.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Phenol is a cyclic molecule, whereas cyclohexanol is acyclic.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclohexanol forms intramolecular hydrogen bonds that lock the proton in place.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Oxygen is more electronegative in phenol than in cyclohexanol.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Where induction spreads charge through sigma bonds, resonance spreads it through a pi system - and resonance is usually the larger effect. A conjugate base whose charge is delocalized over several atoms is far more stable than one holding it on a single atom.",
      "approach": "Step 1: Compare the conjugate bases. Cyclohexoxide keeps its negative charge localized on one oxygen, with only sp3 carbons around it and no pi system to share with.\nStep 2: Phenoxide's oxygen is attached directly to an aromatic ring, so its lone pair can enter the ring's pi system.\nStep 3: The charge delocalizes onto the ortho and para ring carbons as well as the oxygen, spreading it over four atoms. That extra stabilisation lowers phenol's pKa to 10 against cyclohexanol's 16 - a million-fold difference in acidity.",
      "note": "The delocalization also predicts where phenoxide reacts. Negative charge accumulates at the ortho and para carbons, which is why phenols undergo electrophilic substitution at exactly those positions, as Chapter 16 works out in detail.",
      "options": {
        "A": "Correct. Phenoxide's charge delocalizes into the aromatic ring, reaching the ortho and para carbons, which stabilises it far more than the localized charge on cyclohexoxide.",
        "B": "Both molecules are cyclic - cyclohexanol has a six-membered ring too. What matters is that phenol's ring is aromatic and conjugated with the oxygen, while cyclohexanol's is saturated.",
        "C": "Neither molecule can hydrogen bond to itself in any way that would hold the proton; both have a single OH group with nothing suitably placed to accept from it.",
        "D": "It is the same element in both molecules, with the same electronegativity. The difference lies in what happens to the charge after the proton leaves, not in the oxygen itself."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing a hydroxyl group."
  },
  {
    "question_id": "ch02_q15_noncovalent_forces",
    "topic": "Noncovalent Interactions",
    "difficulty_level": "Medium",
    "question_text": "Which intermolecular force is primarily responsible for the high boiling point of ethanol (78 degrees C) compared to dimethyl ether (-24 degrees C), which share the same molecular formula (C2H6O)?",
    "question_smiles": "CCO",
    "options": [
      {
        "option_id": "A",
        "text": "Hydrogen bonding",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "London dispersion forces",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dipole-dipole interactions",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ion-dipole forces",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Boiling requires separating molecules from one another, so boiling point tracks the strength of the intermolecular forces holding them together. Comparing two compounds with the same formula isolates the effect of structure from the effect of size.",
      "approach": "Step 1: Note what the two share. Identical molecular formulas mean essentially identical molecular masses and comparable dispersion forces, so neither of those explains a hundred-degree gap.\nStep 2: Look for a hydrogen bond donor - a hydrogen attached directly to nitrogen, oxygen or fluorine. Ethanol has an O-H; dimethyl ether has its hydrogens on carbon only.\nStep 3: Ethanol molecules can therefore hydrogen bond to each other, while dimethyl ether can only accept, not donate. Breaking that network costs far more energy, which is the whole gap.",
      "note": "The requirement is a donor, not just an oxygen. Dimethyl ether has lone pairs and can accept a hydrogen bond from water, which is why it is appreciably water-soluble despite boiling so low - solubility and boiling point are asking different questions.",
      "options": {
        "A": "Correct. Ethanol's O-H lets its molecules hydrogen bond to one another; dimethyl ether has no O-H and cannot, which accounts for the hundred-degree difference.",
        "B": "Dispersion forces scale with size and polarizability, and these two compounds have the same formula and nearly the same mass. That leaves dispersion almost identical between them.",
        "C": "Both molecules are polar and both experience dipole-dipole attraction; dimethyl ether is actually the more polar of the two. Ordinary dipole-dipole forces are far too weak to explain this gap.",
        "D": "Ion-dipole forces need an ion. Neither compound is ionic, and none is present in either pure liquid."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A two-carbon chain ending in a hydroxyl group."
  },
  {
    "question_id": "ch02_q16_electronegativity_diffs",
    "topic": "Polar Covalent Bonds & Electronegativity",
    "difficulty_level": "Easy",
    "question_text": "In a C-N bond, which atom is partially positive (\\(\\delta^+\\)) and which is partially negative (\\(\\delta^-\\))?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Carbon is \\(\\delta^+\\), Nitrogen is \\(\\delta^-\\)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Nitrogen is \\(\\delta^+\\), Carbon is \\(\\delta^-\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both are neutral",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "They form a full ionic bond",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "In any polar bond the more electronegative atom takes the partial negative charge and its partner the partial positive. Assigning the two is a matter of comparing the atoms on the electronegativity scale.",
      "approach": "Step 1: Look up the two values: nitrogen is about 3.0 and carbon about 2.5.\nStep 2: Nitrogen is the higher of the two, so it pulls the shared electrons toward itself.\nStep 3: Nitrogen therefore carries the partial negative charge and carbon the partial positive.",
      "note": "This polarity is the reason amines behave as they do. Nitrogen's lone pair plus its share of the bonding electrons makes it electron rich, so it acts as the nucleophile and base, while the carbon attached to it is the electrophilic site.",
      "options": {
        "A": "Correct. Nitrogen is the more electronegative at about 3.0 against carbon's 2.5, so nitrogen is partially negative and carbon partially positive.",
        "B": "This reverses the two. Nitrogen sits further right in the second period than carbon and so is the more electronegative.",
        "C": "A difference of about 0.5 is enough to make the bond distinctly polar. Only a bond between identical atoms carries no partial charges.",
        "D": "An ionic bond requires an electronegativity difference large enough for complete transfer, typically around 2.0 or more. At 0.5 this bond is polar covalent."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q17_polar_bonds_carbon",
    "topic": "Polar Covalent Bonds & Electronegativity",
    "difficulty_level": "Medium",
    "question_text": "Which of the following bonds has carbon behaving as the partial negative (\\(\\delta^-\\)) partner?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "C-Li (in methyllithium)",
        "smiles": "C[Li]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "C-O (in methanol)",
        "smiles": "CO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "C-Cl (in chloromethane)",
        "smiles": "CCl",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "C-F (in fluoromethane)",
        "smiles": "CF",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Carbon sits mid-scale at about 2.5, so whether it is the partially positive or the partially negative partner depends entirely on what it is bonded to. Bonded to a more electronegative element it is positive; bonded to a metal it is negative.",
      "approach": "Step 1: Place carbon's electronegativity at about 2.5.\nStep 2: Compare each partner. Oxygen at 3.4, fluorine at 4.0 and chlorine at 3.0 are all higher, so in those bonds carbon is the partially positive partner.\nStep 3: Lithium is a metal at about 1.0, well below carbon. In a C-Li bond the electrons are drawn toward carbon, making it the partially negative one.",
      "note": "That reversal is the entire point of organometallic reagents. A carbon made nucleophilic by an attached metal will attack a carbonyl carbon made electrophilic by its oxygen - the polarity reversal that Grignard and organolithium chemistry exploits to build carbon-carbon bonds.",
      "options": {
        "A": "Correct. Lithium is far less electronegative than carbon, so the bonding electrons shift toward carbon and make it the partially negative, nucleophilic partner.",
        "B": "Oxygen is considerably more electronegative than carbon, so in methanol the carbon is partially positive and the oxygen partially negative.",
        "C": "Chlorine is more electronegative than carbon, making the carbon of chloromethane partially positive - which is why it is attacked by nucleophiles.",
        "D": "Fluorine is the most electronegative element of all, so a C-F bond leaves carbon strongly partially positive, the opposite of what the question asks for."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q18_dipole_vectors_geometry",
    "topic": "Polar Covalent Bonds & Electronegativity",
    "difficulty_level": "Medium",
    "question_text": "Why does trans-1,2-dichloroethylene have a net dipole moment of zero, while cis-1,2-dichloroethylene has a dipole moment of 1.9 D?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "In the trans isomer, the two C-Cl bond dipole vectors are oriented in exact opposite directions and cancel each other out.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The trans isomer is non-planar, preventing dipole accumulation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Chlorine is more electronegative in the cis conformation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The cis isomer undergoes ionization in solution.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Because bond dipoles are vectors, geometry decides whether they reinforce or cancel. Two isomers with identical bonds can have completely different net dipoles purely because those bonds point differently in space.",
      "approach": "Step 1: Note that both isomers contain the same two polar C-Cl bonds, so the individual bond dipoles are identical in magnitude.\nStep 2: Consider the trans arrangement, with the chlorines on opposite sides of the double bond. The two dipole vectors point in exactly opposite directions along the same line.\nStep 3: Equal and opposite vectors sum to zero, so trans has no net moment. In the cis isomer both chlorines are on the same side, so their dipoles have a common component that adds rather than cancels, leaving 1.9 D.",
      "note": "This is a genuinely useful measurement: a dipole moment distinguishes cis from trans without any spectroscopy at all. It works because the double bond prevents rotation, so the two arrangements are separable compounds rather than interconverting conformations.",
      "options": {
        "A": "Correct. The trans chlorines lie on opposite sides, so their equal bond dipoles point in exactly opposite directions and cancel to zero.",
        "B": "Both isomers are planar - the double bond enforces it, with all six atoms in one plane. Planarity is not what differs between them.",
        "C": "Chlorine's electronegativity is a property of the element and does not change between isomers. Both molecules have identically polar C-Cl bonds.",
        "D": "Neither isomer ionises. Both are neutral covalent molecules; the difference is purely in the direction their bond dipoles point."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q19_resonance_stabilized_anion",
    "topic": "Resonance Theory",
    "difficulty_level": "Medium",
    "question_text": "Which of the following ions is stabilized by resonance?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Acetate ion (CH3COO-)",
        "smiles": "CC(=O)[O-]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethoxide ion (CH3CH2O-)",
        "smiles": "CC[O-]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclohexoxide ion (C6H11O-)",
        "smiles": "C1CCCCC1[O-]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "tert-Butoxide ion ((CH3)3CO-)",
        "smiles": "CC(C)(C)[O-]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Resonance stabilization requires the charge-bearing atom to be adjacent to a pi system it can delocalize into. An anion sitting on an oxygen with only sp3 carbons around it has nowhere for the charge to go.",
      "approach": "Step 1: Look at each anion's oxygen and ask what is attached to it.\nStep 2: Three of the four - ethoxide, cyclohexoxide and tert-butoxide - have the oxygen bonded to a saturated sp3 carbon. There is no pi system, so the charge stays put on the oxygen.\nStep 3: Acetate's oxygen is attached to a carbonyl carbon. The negative charge delocalizes across both oxygens through that pi system, making the two carbon-oxygen bonds identical and the anion much more stable.",
      "note": "The consequence shows up in the pKa values: acetic acid is around 4.75 while the three alcohols are near 16 to 18. Roughly twelve orders of magnitude in acidity comes from that one delocalization, which is why carboxylic acids are called acids at all and alcohols are not.",
      "options": {
        "A": "Correct. The negative charge is delocalized over both oxygens through the carbonyl pi system, making the two C-O bonds equivalent and the anion strongly stabilised.",
        "B": "Ethoxide's oxygen is attached to a saturated carbon with no adjacent pi system, so the charge remains localized on the single oxygen.",
        "C": "Cyclohexoxide's ring is fully saturated. Being cyclic offers no delocalization; that requires a conjugated pi system, which this ring does not have.",
        "D": "tert-Butoxide's charge is localized on the oxygen. The three methyl groups make it bulky and slightly destabilised inductively, but they provide no resonance."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q20_resonance_minor_contributor",
    "topic": "Resonance Theory",
    "difficulty_level": "Hard",
    "question_text": "Which of the following represents a minor resonance contributor of the acetate ion?",
    "question_smiles": "CC(=O)[O-]",
    "options": [
      {
        "option_id": "A",
        "text": "A structure with charge separation placing a positive charge on carbon and a double negative charge on one oxygen.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A structure placing the negative charge on the methyl carbon.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A structure with a broken C-C sigma bond.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A neutral structure with a pentavalent carbon.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A minor contributor must still be a legal Lewis structure - same atomic positions, same electron count, no second-row atom above an octet - but it is higher in energy, typically because it separates charge or leaves an incomplete octet. An illegal structure is not a minor contributor; it is not a contributor at all.",
      "approach": "Step 1: Establish the major contributors. Acetate has two equivalent ones, each with the double bond to one oxygen and the negative charge on the other.\nStep 2: Rule out the illegal candidates. Moving the charge to the methyl carbon would mean shifting a sigma bond, breaking a C-C sigma bond is not something resonance may do, and a pentavalent carbon cannot exist at all.\nStep 3: What remains is a charge-separated structure, reached by pushing the carbonyl pi electrons entirely onto their oxygen. That leaves the carbon positive with an incomplete octet and additional negative charge on oxygen - legal, but much higher in energy, so it is a genuine minor contributor.",
      "note": "The wording of this option is loose: pushing the pi bond onto its oxygen gives a positive carbon with a negative charge on each oxygen, not a single doubly charged oxygen. The point being tested is sound - charge separation makes a contributor minor - but read it as describing a charge-separated structure rather than as a precise formula.",
      "options": {
        "A": "Correct as the intended answer, and the only legal structure offered. Pushing the carbonyl pi electrons onto oxygen separates charge and leaves the carbon short of an octet, which is exactly what makes a contributor minor.",
        "B": "Moving the charge to the methyl carbon would require relocating a sigma bond or a hydrogen. Resonance moves only pi electrons and lone pairs, so this is not a contributor at all.",
        "C": "Breaking a sigma bond changes the molecular skeleton. All contributors to one hybrid share the same sigma framework, so this is illegal rather than merely minor.",
        "D": "Carbon has only four valence orbitals and cannot form five bonds. This structure cannot be drawn, so it is not a high-energy contributor - it is no contributor."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A methyl group bonded to a carbon that carries a double-bonded oxygen and a single-bonded oxygen bearing a negative charge."
  },
  {
    "question_id": "ch02_q21_pka_scale_conversion",
    "topic": "Acid Strength and pKa",
    "difficulty_level": "Medium",
    "question_text": "An acid has an acid dissociation constant Ka = 10^-5. What is its pKa?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "5",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "-5",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "10",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1.0",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "pKa is defined as the negative base-ten logarithm of Ka. When Ka is written as a clean power of ten the conversion needs no calculator - the exponent carries the whole answer.",
      "approach": "Step 1: Write down the definition: pKa equals minus log of Ka.\nStep 2: Substitute the value given, so pKa equals minus log of ten to the minus five.\nStep 3: The log of ten to any power is that power, so log of ten to the minus five is minus five. Negating it gives pKa equal to 5.",
      "note": "Reading the exponent directly is worth practising, because most pKa values you will use are quoted rather than calculated. The useful skill is the reverse direction: a pKa of 5 means a Ka of ten to the minus five, and a pKa four units lower means a Ka ten thousand times larger.",
      "options": {
        "A": "Correct. The negative log of ten to the minus five is 5, so the pKa is 5.",
        "B": "This drops the negative sign in the definition. pKa is minus the log of Ka, and a negative exponent therefore gives a positive pKa.",
        "C": "This looks like the exponent has been doubled or the base confused. Taking the log of ten to the minus five gives minus five, not minus ten.",
        "D": "This appears to come from manipulating the exponent arithmetically rather than taking a logarithm. The log of a power of ten is simply that power."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q22_acid_base_eq_constant",
    "topic": "Predicting Acid-Base Reactions from pKa Values",
    "difficulty_level": "Hard",
    "question_text": "Calculate the equilibrium constant (Keq) for the reaction: H-A + B:- <=> A:- + H-B, if the pKa of H-A is 5 and the pKa of H-B is 9.",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "10^4",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "10^-4",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "10^14",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "For a proton transfer, the equilibrium constant is the ratio of the two acid dissociation constants: the acid on the left divided by the acid formed on the right. Expressed in pKa terms that ratio becomes a difference of exponents.",
      "approach": "Step 1: Identify the acid on each side. H-A with pKa 5 is the acid on the left; H-B with pKa 9 is the acid formed on the right.\nStep 2: Write Keq as Ka of H-A divided by Ka of H-B, which is ten to the minus five divided by ten to the minus nine.\nStep 3: Subtracting exponents gives ten to the power minus five minus minus nine, which is ten to the fourth. Equivalently, Keq is ten raised to the difference pKa of the product acid minus pKa of the reactant acid, or 9 minus 5.",
      "note": "A Keq of ten thousand means the reaction is essentially complete, and the shortcut generalises: each pKa unit of difference is a factor of ten. A gap of three or more units in the favourable direction is enough to treat a proton transfer as going to completion.",
      "options": {
        "A": "Correct. Keq is ten raised to the difference in pKa, here 9 minus 5, giving ten to the fourth and a strongly product-favoured equilibrium.",
        "B": "This is the reciprocal, obtained by subtracting the pKa values in the wrong order. The stronger acid is on the left here, so the products are favoured and Keq exceeds one.",
        "C": "This looks like the two pKa values were added rather than subtracted. Dividing the two Ka values subtracts their exponents.",
        "D": "Four is the difference in pKa, not the equilibrium constant itself. That difference is the exponent: Keq is ten to the fourth."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q23_strong_acids_classification",
    "topic": "Acid Strength and pKa",
    "difficulty_level": "Easy",
    "question_text": "Which of the following is classified as a strong inorganic acid with a negative pKa?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Sulfuric acid (H2SO4)",
        "smiles": "OS(=O)(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Phosphoric acid (H3PO4)",
        "smiles": "OP(=O)(O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetic acid (CH3COOH)",
        "smiles": "CC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Hydrofluoric acid (HF)",
        "smiles": "F",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A strong acid is one that dissociates essentially completely in water, which corresponds to a pKa below about zero. Being inorganic or feeling corrosive is not the criterion; the pKa is.",
      "approach": "Step 1: Recall approximate pKa values for the four: sulfuric acid about minus 3 for its first proton, phosphoric acid 2.1, hydrofluoric acid 3.2, acetic acid 4.75.\nStep 2: Apply the test - which of these is below zero?\nStep 3: Only sulfuric acid qualifies. Its first ionisation is complete in water, making it the only strong acid on the list.",
      "note": "Hydrofluoric acid is the standard trap here. It is famously dangerous and etches glass, but at pKa 3.2 it is a weak acid - the short, strong H-F bond holds its proton comparatively well. Hazard and acid strength are unrelated properties.",
      "options": {
        "A": "Correct. Sulfuric acid's first ionisation has a pKa near minus 3, so it dissociates completely in water and is a strong acid.",
        "B": "Phosphoric acid at pKa 2.1 is a moderately strong weak acid. It ionises substantially but not completely, and its pKa is positive.",
        "C": "Acetic acid at 4.75 is the weakest of the four and is the standard example of a weak organic acid.",
        "D": "Hydrofluoric acid is a weak acid at pKa 3.2 despite its reputation. The H-F bond is short and strong, so the proton is not released readily."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q24_organic_base_amine",
    "topic": "Organic Acids and Organic Bases",
    "difficulty_level": "Medium",
    "question_text": "Which functional group is most commonly associated with organic bases?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Amine (R-NH2)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Carboxylic acid (R-COOH)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Alcohol (R-OH)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ether (R-O-R)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Basicity requires an available electron pair to donate to a proton. Whether a lone pair is available depends on how tightly its atom holds it, which is largely a matter of electronegativity.",
      "approach": "Step 1: Look for lone pairs among the candidates. Amines, alcohols and ethers all have them; carboxylic acids donate protons rather than accept them.\nStep 2: Compare how tightly each holds its pair. Nitrogen at electronegativity 3.0 holds a lone pair much more loosely than oxygen at 3.4.\nStep 3: The nitrogen lone pair is therefore the most available for donation, which makes amines the characteristic organic bases.",
      "note": "The same loosely held lone pair makes amines good nucleophiles as well as good bases - the two behaviours come from one structural feature. Alcohols and ethers are weakly basic and can be protonated by strong acid, but they are nothing like amines.",
      "options": {
        "A": "Correct. Nitrogen holds its lone pair less tightly than oxygen does, making it readily available to accept a proton.",
        "B": "A carboxylic acid is the archetypal organic acid, donating the proton of its OH group rather than accepting one.",
        "C": "Alcohols have oxygen lone pairs and are very weakly basic, but oxygen holds them far more tightly than nitrogen does. Alcohols are better known as weak acids.",
        "D": "Ethers are weak Lewis bases through their oxygen lone pairs, but again oxygen's higher electronegativity makes them much weaker bases than amines."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q25_acid_strength_periodic_row",
    "topic": "Acid Strength and pKa",
    "difficulty_level": "Hard",
    "question_text": "What is the primary factor explaining the trend in acidity across the second row of the periodic table: CH4 < NH3 < H2O < HF?",
    "question_smiles": "C",
    "options": [
      {
        "option_id": "A",
        "text": "Increasing electronegativity of the atom bonded to hydrogen, stabilizing the conjugate base negative charge.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Increasing bond dissociation energy.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Increasing size of the central atom.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Decreasing steric hindrance.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Acidity always comes back to conjugate base stability. Across a period the atoms are all the same size, so size cannot be the variable - what changes is how strongly the nucleus holds a negative charge.",
      "approach": "Step 1: Write the conjugate bases: methanide, amide, hydroxide and fluoride.\nStep 2: Note that carbon, nitrogen, oxygen and fluorine are all second-row atoms of comparable size, so the charge occupies a similar volume in each.\nStep 3: Compare electronegativity, which rises steadily left to right. The more electronegative the atom, the more comfortably it accommodates the negative charge, so fluoride is most stable and HF most acidic.",
      "note": "Electronegativity is the deciding factor only when the atoms are the same size, which is what makes this a within-a-period argument. Going down a group the sizes differ enormously and the reasoning changes completely - the very next question is that case.",
      "options": {
        "A": "Correct. Across a period the atoms are similar in size, so the rising electronegativity determines how well each stabilises the negative charge of its conjugate base.",
        "B": "Bond strength runs the wrong way for this argument. The H-F bond is the strongest of the four, yet HF is the most acidic, so bond dissociation energy cannot be what drives the trend here.",
        "C": "Atomic size changes very little across a period; it is essentially constant here. Size is the controlling factor down a group, not across a row.",
        "D": "Steric hindrance is negligible around a single hydrogen on a small second-row atom, and it plays no part in this trend."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A single carbon atom with its hydrogen atoms."
  },
  {
    "question_id": "ch02_q26_acid_strength_periodic_column",
    "topic": "Acid Strength and pKa",
    "difficulty_level": "Hard",
    "question_text": "What is the primary factor explaining the trend in acidity down a column of the periodic table: HF < HCl < HBr < HI?",
    "question_smiles": "F",
    "options": [
      {
        "option_id": "A",
        "text": "Increasing size of the halogen atom, which weakens the H-X bond and stabilizes the charge over a larger volume.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Increasing electronegativity of the halogen atom.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Decreasing atomic weight.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Increasing solubility in water.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Down a group the atoms grow dramatically larger, and that size change dominates everything else - including electronegativity, which actually decreases in the direction of increasing acidity.",
      "approach": "Step 1: Write the conjugate bases: fluoride, chloride, bromide and iodide, in order of increasing size.\nStep 2: Note that a negative charge spread over a larger volume is more stable, since the electrons are further apart and further from the nucleus.\nStep 3: Add the bond-strength effect, which points the same way: the H-X bond lengthens and weakens down the group, so the proton is released more easily. Iodide is the most stable anion and HI the strongest acid.",
      "note": "This is the case that shows electronegativity is not a universal explanation. Fluorine is by far the most electronegative of the four, yet HF is by far the weakest acid of them - because down a group, size wins.",
      "options": {
        "A": "Correct. The larger halogens spread the negative charge over a greater volume and form weaker, longer bonds to hydrogen, both of which increase acidity down the group.",
        "B": "Electronegativity decreases down a group, so it runs opposite to the acidity trend. If electronegativity controlled this, HF would be the strongest acid rather than the weakest.",
        "C": "Atomic weight is a bookkeeping quantity with no direct bearing on charge stability, and in any case it increases rather than decreases down the group.",
        "D": "All four are highly soluble in water. Solubility describes how a substance disperses, not how readily it gives up a proton once dissolved."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A fluorine atom bonded to a hydrogen atom."
  },
  {
    "question_id": "ch02_q27_resonance_carboxylate_stabilization",
    "topic": "Acid Strength and pKa",
    "difficulty_level": "Hard",
    "question_text": "Why is acetic acid (pKa = 4.75) vastly more acidic than ethanol (pKa = 16)?",
    "question_smiles": "CC(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "The conjugate base of acetic acid is stabilized by resonance delocalization across two highly electronegative oxygen atoms.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetic acid contains more carbon atoms than ethanol.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethanol is a liquid at room temperature.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acetic acid can form intermolecular hydrogen bonds.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Both compounds lose a proton from an O-H bond, so the difference cannot lie in the bond broken. It lies in what happens to the charge afterwards - whether it stays on one atom or spreads over several.",
      "approach": "Step 1: Compare the conjugate bases. Ethoxide holds its negative charge on a single oxygen attached to a saturated carbon, with nowhere to delocalize.\nStep 2: Acetate's charge sits next to a carbonyl, so it delocalizes across both oxygens through the pi system.\nStep 3: Both oxygens are highly electronegative and share the charge equally, making the two C-O bonds identical in length. That spreading stabilises acetate enormously, and the pKa difference of about eleven units follows.",
      "note": "Eleven pKa units is a factor of a hundred billion, which is why the practical consequences are so stark: sodium bicarbonate deprotonates acetic acid readily but leaves ethanol untouched, and that difference is the basis of standard acid-base extractions.",
      "options": {
        "A": "Correct. Delocalization spreads acetate's charge equally over two electronegative oxygens, a stabilisation entirely unavailable to ethoxide.",
        "B": "Both molecules have two carbons. Even where carbon counts differ, chain length has almost no effect on acidity compared with delocalization.",
        "C": "Both compounds are liquids at room temperature, and physical state describes bulk behaviour rather than the stability of an anion in solution.",
        "D": "Both form intermolecular hydrogen bonds - acetic acid famously dimerises. Hydrogen bonding affects boiling point, not the relative stability of the conjugate bases."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A methyl group bonded to a carbon bearing a double-bonded oxygen and a hydroxyl group."
  },
  {
    "question_id": "ch02_q28_amino_acid_zwitterion",
    "topic": "Organic Acids and Organic Bases",
    "difficulty_level": "Medium",
    "question_text": "At physiological pH (~7.4), what is the dominant ionic form of a simple amino acid like glycine (H2N-CH2-COOH)?",
    "question_smiles": "NCC(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "Zwitterion form: +H3N-CH2-COO-",
        "smiles": "[NH3+]CC(=O)[O-]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Fully protonated form: +H3N-CH2-COOH",
        "smiles": "[NH3+]CC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Fully deprotonated form: H2N-CH2-COO-",
        "smiles": "NCC(=O)[O-]",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Neutral uncharged form: H2N-CH2-COOH",
        "smiles": "NCC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An amino acid carries both an acidic carboxyl group and a basic amino group. To find the dominant form at a given pH, compare that pH with each group's pKa: above a group's pKa it is mostly deprotonated, below it mostly protonated.",
      "approach": "Step 1: Note the two relevant pKa values for glycine - about 2.3 for the carboxyl group and about 9.6 for the ammonium group.\nStep 2: Compare pH 7.4 with the carboxyl pKa of 2.3. The pH is well above it, so the carboxyl group is deprotonated to carboxylate.\nStep 3: Compare pH 7.4 with the ammonium pKa of 9.6. The pH is well below it, so the amino group stays protonated. Both charges are present at once, giving the zwitterion.",
      "note": "The neutral, uncharged form with a free NH2 and an intact COOH is essentially never the major species at any pH - the amine is always the stronger base of the pair and takes the carboxyl proton internally. That double charge is why amino acids are crystalline solids with high melting points rather than oily liquids.",
      "options": {
        "A": "Correct. At pH 7.4 the carboxyl group is above its pKa and deprotonated while the amino group is below its pKa and protonated, giving both charges simultaneously.",
        "B": "This is the form below pH 2.3, in strongly acidic solution, where the carboxyl group has not yet lost its proton.",
        "C": "This is the form above pH 9.6, in strongly basic solution, where the ammonium group has also been deprotonated.",
        "D": "The fully neutral form is never dominant. The amino group is a stronger base than the carboxylate, so the proton transfers internally at essentially any pH."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A nitrogen atom bonded to a carbon, which is bonded to a further carbon bearing a double-bonded oxygen and a hydroxyl group."
  },
  {
    "question_id": "ch02_q29_lewis_base_ether",
    "topic": "Acids and Bases: Lewis Definition",
    "difficulty_level": "Medium",
    "question_text": "In the reaction of diethyl ether with gaseous HBr, what role does diethyl ether play?",
    "question_smiles": "CCOCC",
    "options": [
      {
        "option_id": "A",
        "text": "Lewis base (the oxygen lone pair accepts a proton)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Lewis acid",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Catalyst",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Spectator ion",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "In any acid-base pairing, identify which species supplies electrons and which receives them. A species with an available lone pair and no proton to give up can only act as the base.",
      "approach": "Step 1: Look at what each partner brings. Hydrogen bromide has a proton to donate; diethyl ether has two lone pairs on its oxygen and no acidic hydrogen.\nStep 2: The ether oxygen donates one lone pair to the proton, forming a new O-H bond and leaving bromide behind.\nStep 3: The species donating the electron pair is the base, so the ether is the base and hydrogen bromide the acid.",
      "note": "The option's phrasing mixes two vocabularies: strictly, a Lewis base donates an electron pair, while accepting a proton is the Brønsted description. Both name the same event from opposite ends, and it is worth being able to translate between them, since mechanisms are drawn in the Lewis language of electron pairs.",
      "options": {
        "A": "Correct. The ether oxygen supplies a lone pair to the incoming proton, which is what makes it the base in this pairing.",
        "B": "A Lewis acid accepts an electron pair, which requires an empty orbital or an incomplete octet. The ether oxygen has full lone pairs to give, not a vacancy to fill.",
        "C": "A catalyst would be recovered unchanged at the end. The ether is protonated and consumed as a reactant here.",
        "D": "A spectator takes no part in the reaction. The ether's oxygen forms the new bond to the proton, so it is directly involved."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two ethyl groups joined through a central oxygen atom."
  },
  {
    "question_id": "ch02_q30_alcohol_water_acidity",
    "topic": "Acid Strength and pKa",
    "difficulty_level": "Medium",
    "question_text": "Which of the following compounds is the most acidic?",
    "question_smiles": "CCO",
    "options": [
      {
        "option_id": "A",
        "text": "Phenol (pKa = 10)",
        "smiles": "c1ccc(cc1)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethanol (pKa = 16)",
        "smiles": "CCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Water (pKa = 15.7)",
        "smiles": "O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "tert-Butanol (pKa = 18)",
        "smiles": "CC(C)(C)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "With pKa values supplied, the comparison is arithmetic - the smallest value is the strongest acid. The chemistry lies in seeing why one of them is so far from the others.",
      "approach": "Step 1: Line the values up: phenol 10, water 15.7, ethanol 16, tert-butanol 18.\nStep 2: Select the smallest, which is phenol at 10.\nStep 3: Confirm it makes structural sense. Phenol's conjugate base delocalizes its charge into the aromatic ring, while the other three are alkoxides or hydroxide with the charge localized on one oxygen.",
      "note": "Notice how tightly the three non-aromatic compounds cluster, from 15.7 to 18. Structural changes among simple alcohols shift acidity only slightly, while attaching the oxygen to an aromatic ring moves it by nearly six orders of magnitude - delocalization outweighs alkyl substitution by a wide margin.",
      "options": {
        "A": "Correct. Phenol's pKa of 10 is the smallest of the four, and the aromatic ring's stabilization of phenoxide is why it stands apart from the alcohols.",
        "B": "Ethanol at pKa 16 is nearly a million times weaker an acid than phenol, since ethoxide has no delocalization available.",
        "C": "Water at 15.7 is marginally more acidic than ethanol but still far weaker than phenol.",
        "D": "tert-Butanol at pKa 18 is the weakest acid listed, its conjugate base being both localized and poorly solvated."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A two-carbon chain ending in a hydroxyl group."
  },
  {
    "question_id": "ch02_q31_solvent_acidity_solvation",
    "topic": "Acid Strength and pKa",
    "difficulty_level": "Hard",
    "question_text": "Why is tert-butanol (pKa = 18) a weaker acid than ethanol (pKa = 16) in aqueous solution?",
    "question_smiles": "CC(C)(C)O",
    "options": [
      {
        "option_id": "A",
        "text": "The bulky tert-butyl group hinders stabilizing solvent water molecules from solvating the conjugate base tert-butoxide ion.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The tert-butyl group is electron-withdrawing by induction.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethanol forms stable intermolecular ring structures.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Oxygen is $sp^2$ hybridized in tert-butanol.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Acidity measured in solution depends on how well the solvent stabilises the conjugate base, not only on the anion's intrinsic properties. An anion the solvent cannot reach is less stabilised, and its parent acid is correspondingly weaker.",
      "approach": "Step 1: Compare the two conjugate bases. Both ethoxide and tert-butoxide carry the charge on a single oxygen, so intrinsically they are similar.\nStep 2: Consider access to that oxygen. Tert-butoxide has three methyl groups crowding around it, while ethoxide's oxygen is comparatively exposed.\nStep 3: Water molecules cannot approach the tert-butoxide oxygen as closely or in as many numbers, so it is less well solvated and less stabilised. Its parent acid is therefore weaker, at pKa 18 against ethanol's 16.",
      "note": "This ordering is a property of the solution, not of the molecules alone. In the gas phase, with no solvent at all, the order reverses and tert-butanol is the stronger acid - a good reminder that pKa values are always quoted for a particular medium.",
      "options": {
        "A": "Correct. The bulky tert-butyl group blocks water molecules from solvating the alkoxide oxygen, leaving the conjugate base less stabilised and the acid weaker.",
        "B": "Alkyl groups are weakly electron-donating by induction, not withdrawing. Donation would destabilise the anion further, so this option has the direction of the inductive effect backwards.",
        "C": "Neither alcohol forms any such ring structure. Both hydrogen bond to water and to each other in ordinary fashion.",
        "D": "The oxygen in tert-butanol has two bonds and two lone pairs, so it is sp3 like the oxygen in any other alcohol. Hybridization does not differ between them."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A central carbon bearing three methyl groups and a hydroxyl group."
  },
  {
    "question_id": "ch02_q32_lewis_acid_metal_cations",
    "topic": "Acids and Bases: Lewis Definition",
    "difficulty_level": "Medium",
    "question_text": "Which of the following metal cations is a common Lewis acid catalyst in organic synthesis?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Lithium cation (Li+)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "Sodium cation (Na+)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Aluminum trichloride (AlCl3, providing Al3+)",
        "smiles": "Cl[Al](Cl)Cl",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "Potassium cation (K+)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A metal centre acts as a Lewis acid by accepting an electron pair into a vacant orbital. How strongly it does so depends on charge density - a small ion with a high charge polarises and binds an electron pair far more effectively than a large singly charged one.",
      "approach": "Step 1: Compare the charges. Lithium, sodium and potassium cations all carry a single positive charge; aluminium carries three.\nStep 2: Compare the sizes. Aluminium's ion is small as well as highly charged, giving it much the highest charge density of the four.\nStep 3: That combination makes aluminium trichloride a strong electron-pair acceptor, and it is used as a Lewis acid catalyst throughout organic synthesis.",
      "note": "Aluminium trichloride's role is to make an electrophile more electrophilic - it accepts a lone pair from a halogen or a carbonyl oxygen and thereby activates the substrate. That is precisely what it does in the Friedel-Crafts alkylation and acylation of Chapter 16.",
      "options": {
        "A": "Lithium is small enough to be mildly Lewis acidic and does coordinate to carbonyl oxygens, but a single positive charge makes it far weaker than a tripositive centre and it is not used as a catalyst in this role.",
        "B": "Sodium cation is larger than lithium and singly charged, giving it low charge density. In organic reactions it behaves as an essentially inert counterion.",
        "C": "Correct. Aluminium's high charge and small size make it a powerful electron-pair acceptor, and aluminium trichloride is a standard Lewis acid catalyst.",
        "D": "Potassium cation is the largest of the group with a single charge, so its charge density is the lowest here. It functions as a spectator counterion."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q33_noncovalent_dispersion",
    "topic": "Noncovalent Interactions",
    "difficulty_level": "Medium",
    "question_text": "Which intermolecular force explains why neopentane (bp = 9.5 degrees C) has a lower boiling point than pentane (bp = 36 degrees C) despite having the same molecular formula (C5H12)?",
    "question_smiles": "CC(C)(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "Pentane is linear and has a larger surface area, permitting stronger London dispersion forces.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Neopentane forms internal hydrogen bonds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Pentane undergoes dipole-dipole interactions.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Neopentane is ionic.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "London dispersion forces arise from momentary fluctuations in electron distribution, and their strength depends on how much surface two molecules can bring into contact. For isomers of identical formula, shape is therefore the deciding variable.",
      "approach": "Step 1: Note what is held constant. Both compounds are C5H12, so they have the same mass and the same number of electrons.\nStep 2: Compare the shapes. Pentane is an extended chain; neopentane is compact and nearly spherical.\nStep 3: A chain can lie alongside its neighbours over much of its length, while a sphere touches only at a small area. Pentane therefore has stronger dispersion attraction and boils about 27 degrees higher.",
      "note": "The rule generalises to every set of alkane isomers: the more branched the structure, the more compact it is and the lower it boils. Branching reduces contact area, which is one of the few structural predictions about physical properties you can make by inspection alone.",
      "options": {
        "A": "Correct. Pentane's extended chain presents much more surface for contact with neighbouring molecules, so its dispersion forces are stronger and it boils higher.",
        "B": "Neopentane has no O-H, N-H or F-H bond, so it cannot hydrogen bond at all - to itself or anything else.",
        "C": "Pentane is a nonpolar hydrocarbon with no significant dipole. Dispersion is the only intermolecular force available to either compound.",
        "D": "Neopentane is a neutral covalent hydrocarbon. If it were ionic it would boil far higher than pentane, not lower."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A central carbon bearing four methyl groups."
  },
  {
    "question_id": "ch02_q34_organic_acid_pka_ranges",
    "topic": "Acid Strength and pKa",
    "difficulty_level": "Easy",
    "question_text": "What is the typical pKa range for carboxylic acids?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "4 to 5",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "15 to 18",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "35 to 40",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "-5 to -10",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A handful of pKa ranges are worth knowing by heart, because they let you predict whether a given base will deprotonate a given acid without looking anything up. Carboxylic acids are the anchor point at the acidic end of ordinary organic chemistry.",
      "approach": "Step 1: Recall the reference value. Acetic acid, the standard carboxylic acid, has a pKa of 4.75.\nStep 2: Note how little substitution moves it. Ordinary alkyl carboxylic acids cluster tightly, roughly from 4 to 5.\nStep 3: Place that against the other landmarks: alcohols near 16 to 18, terminal alkynes near 25, and alkanes near 50.",
      "note": "The reason carboxylic acids sit so much lower than alcohols is delocalization of the conjugate base over two oxygens. Strong electron-withdrawing substituents can push a carboxylic acid well below this range - trifluoroacetic acid reaches 0.23 - so treat 4 to 5 as the unsubstituted case.",
      "options": {
        "A": "Correct. Ordinary carboxylic acids cluster near acetic acid's 4.75, giving a working range of about 4 to 5.",
        "B": "This is the range for alcohols and water, some eleven orders of magnitude less acidic. It is the comparison that makes carboxylic acids notable.",
        "C": "Values in the thirties and forties belong to very weak carbon acids such as alkenes, far beyond anything a carboxylic acid approaches.",
        "D": "Negative pKa values belong to strong mineral acids such as sulfuric or hydrochloric. Carboxylic acids are weak acids and do not dissociate completely in water."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q35_conjugate_acid_amine",
    "topic": "Organic Acids and Organic Bases",
    "difficulty_level": "Medium",
    "question_text": "What is the conjugate acid of methylamine (CH3NH2)?",
    "question_smiles": "CN",
    "options": [
      {
        "option_id": "A",
        "text": "Methylammonium ion (CH3NH3+)",
        "smiles": "C[NH3+]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methanamide (CH3NH-)",
        "smiles": "C[NH-]",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Methanol (CH3OH)",
        "smiles": "CO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyl radical (CH3.)",
        "smiles": "[CH3]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A conjugate acid is what a base becomes after it accepts a proton. The transformation adds one hydrogen and one unit of positive charge, and changes nothing else about the molecule's skeleton.",
      "approach": "Step 1: Identify the basic site. Methylamine's nitrogen carries a lone pair, which is where a proton will attach.\nStep 2: Add the proton to that lone pair, forming a new N-H bond. The nitrogen now has four bonds and no lone pair.\nStep 3: Update the charge. Four bonds and no lone pair on nitrogen gives a formal charge of plus 1, so the conjugate acid is the methylammonium ion.",
      "note": "Take care not to confuse conjugate acid with conjugate base. Removing a proton from methylamine would give the methylamide anion, a very strong base at the far end of the scale - the opposite direction from what this question asks.",
      "options": {
        "A": "Correct. Adding a proton to the nitrogen lone pair gives a nitrogen with four bonds and a formal charge of plus 1.",
        "B": "This is the conjugate base, formed by removing a proton rather than adding one. It carries a negative charge.",
        "C": "Methanol is a different compound entirely - the nitrogen has been replaced by oxygen. A conjugate acid never changes which elements are present.",
        "D": "A radical results from homolytic bond cleavage, not from proton transfer, and it carries no charge."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A carbon atom bonded to a nitrogen atom, with hydrogens completing both."
  },
  {
    "question_id": "ch02_q36_dipole_vector_addition",
    "topic": "Polar Covalent Bonds & Electronegativity",
    "difficulty_level": "Hard",
    "question_text": "Which of the following molecules has a non-zero dipole moment despite containing polar bonds?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Water (H2O) (due to bent geometry)",
        "smiles": "O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Carbon dioxide (CO2)",
        "smiles": "O=C=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Boron trifluoride (BF3)",
        "smiles": "FB(F)F",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "trans-2-Butene",
        "smiles": "C/C=C/C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Polar bonds are necessary for a molecular dipole but not sufficient. Whether the bond dipoles survive as a net moment depends on whether the molecular geometry lets them cancel.",
      "approach": "Step 1: Rule out the symmetric arrangements. Carbon dioxide is linear so its two C=O dipoles oppose exactly; boron trifluoride is trigonal planar so its three B-F dipoles cancel to zero.\nStep 2: Consider trans-2-butene. Its bonds are C-C and C-H, barely polar to begin with, and the trans arrangement is symmetric, so there is nothing to add up.\nStep 3: Water has two polar O-H bonds and two lone pairs forcing a bent shape. Bent geometry means the two bond dipoles do not oppose, so they sum to a substantial net moment of about 1.85 D.",
      "note": "The lone pairs do double duty here: they bend the molecule so the bond dipoles cannot cancel, and they contribute their own dipole in the same direction. That is why water's moment is larger than its two O-H bonds alone would suggest.",
      "options": {
        "A": "Correct. The bent geometry imposed by oxygen's two lone pairs stops the O-H bond dipoles from cancelling, leaving a large net moment.",
        "B": "Carbon dioxide's C=O bonds are strongly polar, but the molecule is linear so the two dipoles point in exactly opposite directions and cancel.",
        "C": "Boron trifluoride has three very polar B-F bonds arranged trigonally around a planar boron, and that symmetry cancels them completely.",
        "D": "trans-2-Butene is a symmetric hydrocarbon whose bonds are barely polar at all, so it has essentially no dipole moment to speak of."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q37_formal_charge_neutral_nitrogren",
    "topic": "Formal Charges & Lewis Structures",
    "difficulty_level": "Easy",
    "question_text": "What is the formal charge on the nitrogen atom in neutral methylamine (CH3NH2)?",
    "question_smiles": "CN",
    "options": [
      {
        "option_id": "A",
        "text": "0",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "+1",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "-1",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "-2",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Formal charge is computed from valence electrons minus nonbonding electrons minus the number of bonds. For nitrogen the neutral pattern is three bonds and one lone pair, and any departure from it produces a charge.",
      "approach": "Step 1: Nitrogen's valence electron count is 5.\nStep 2: In methylamine the nitrogen has one lone pair, which is 2 nonbonding electrons.\nStep 3: It forms three bonds - one to carbon and two to hydrogen. The formal charge is 5 minus 2 minus 3, which is zero.",
      "note": "That neutral three-bond, one-lone-pair arrangement is worth recognising instantly, because the lone pair is what makes every amine basic and nucleophilic. Protonate it and the nitrogen goes to four bonds and plus 1; deprotonate it and it goes to two bonds, two lone pairs and minus 1.",
      "options": {
        "A": "Correct. Five valence electrons minus one lone pair minus three bonds gives zero, the standard neutral arrangement for nitrogen.",
        "B": "Plus 1 requires four bonds and no lone pair, as in the ammonium or methylammonium ion. This nitrogen has three bonds and keeps its lone pair.",
        "C": "Minus 1 requires two bonds and two lone pairs. That would be the amide anion, formed by removing a proton from this molecule.",
        "D": "Minus 2 would need three lone pairs and a single bond, which would exceed nitrogen's octet once the bond is counted."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A carbon atom bonded to a nitrogen atom, with hydrogens completing both."
  },
  {
    "question_id": "ch02_q38_resonance_charge_localization",
    "topic": "Resonance Theory",
    "difficulty_level": "Medium",
    "question_text": "In the resonance hybrid of the formate ion (HCOO-), which statement is true about the bond lengths of the two carbon-oxygen bonds?",
    "question_smiles": "[O-]C=O",
    "options": [
      {
        "option_id": "A",
        "text": "They are of equal length, intermediate between a single and double bond.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The C=O bond is shorter than the C-O- bond.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "They alternate in length rapidly back and forth.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "One is covalent, and the other is ionic.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A resonance hybrid is a single structure, not a mixture and not something that oscillates. The contributors are drawings we use because a single Lewis structure cannot represent delocalized electrons; the real molecule is their weighted average at all times.",
      "approach": "Step 1: Draw the two contributors for formate. Each has a double bond to one oxygen and a negative charge on the other, and the two are related by exchanging which oxygen is which.\nStep 2: Note that the two contributors are equivalent - identical in energy - so they contribute equally to the hybrid.\nStep 3: Averaging them makes both carbon-oxygen bonds identical, each with a bond order of one and a half, and each oxygen carries half a negative charge. Measurement confirms it: both bonds are the same length, between a typical single and double bond.",
      "note": "The word hybrid is meant literally. It is often compared to a mule, which is not a horse part of the time and a donkey the rest, but one animal with characteristics of both at once. Nothing about formate flickers between two structures.",
      "options": {
        "A": "Correct. The two equivalent contributors average to a structure with identical carbon-oxygen bonds, each intermediate between a single and a double bond.",
        "B": "This would be true of a single contributor drawn on paper, but the real ion is the average of both. Neither oxygen is preferentially double-bonded.",
        "C": "Nothing alternates. Resonance is not an equilibrium between structures, and there is no process interconverting them; the hybrid is one unchanging structure.",
        "D": "Both carbon-oxygen bonds are covalent and identical. Neither is ionic, and delocalization makes them equivalent rather than different in kind."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A carbon atom bearing a hydrogen, joined to one oxygen by a double bond and to another oxygen carrying a negative charge."
  },
  {
    "question_id": "ch02_q39_lewis_acid_carbocation",
    "topic": "Acids and Bases: Lewis Definition",
    "difficulty_level": "Medium",
    "question_text": "In the hydration of an alkene, a carbocation intermediate reacts with water. In this step, what roles do the carbocation and water play?",
    "question_smiles": "[CH3+]",
    "options": [
      {
        "option_id": "A",
        "text": "Carbocation is the Lewis acid; Water is the Lewis base",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Carbocation is the Lewis base; Water is the Lewis acid",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both act as Lewis bases",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It is a standard Brønsted-Lowry neutralisation",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Assigning Lewis acid and base to a mechanistic step means asking which species supplies the electron pair and which receives it. The curved arrow points from the donor to the acceptor, so it points from the base to the acid.",
      "approach": "Step 1: Look at the carbocation. Its positive carbon has only three bonds, six valence electrons and an empty p orbital, so it needs an electron pair.\nStep 2: Look at the water. Its oxygen has two lone pairs available to give.\nStep 3: The arrow runs from an oxygen lone pair to the empty p orbital, forming a new C-O bond. Water is therefore the Lewis base and the carbocation the Lewis acid.",
      "note": "This step is neither a Brønsted acid-base reaction nor a redox one - no proton moves and no oxidation state changes at this point. Recognising nucleophile-electrophile pairings as Lewis base-acid pairings is what makes the curved-arrow formalism consistent across every mechanism in the course.",
      "options": {
        "A": "Correct. The carbocation has an empty p orbital and accepts the electron pair; water supplies it from an oxygen lone pair.",
        "B": "This reverses the two. A carbocation is electron-deficient and cannot donate a pair, and water has lone pairs to give rather than a vacancy to fill.",
        "C": "Two Lewis bases have nothing to react with - both would be offering electrons and neither accepting. One partner must have an empty orbital.",
        "D": "No proton is transferred in this step. The carbocation and water combine to form a bond; deprotonation of the resulting oxonium ion happens afterwards, in a separate step."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A carbon atom bonded to three hydrogen atoms and carrying a positive charge."
  },
  {
    "question_id": "ch02_q40_acid_base_direction_strong_weak",
    "topic": "Predicting Acid-Base Reactions from pKa Values",
    "difficulty_level": "Easy",
    "question_text": "An acid-base equilibrium always favors the side with the:",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Weaker acid and weaker base",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Stronger acid and stronger base",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Weaker acid and stronger base",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Stronger acid and weaker base",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Proton transfer runs downhill in energy, toward the more stable species. The more stable acid is by definition the weaker one, since it holds its proton more firmly, and the more stable base is likewise the weaker one.",
      "approach": "Step 1: Recognise that each side of an acid-base equilibrium contains one acid and one base.\nStep 2: The stronger acid gives up its proton more readily, so it is consumed and the equilibrium moves away from it.\nStep 3: The position of equilibrium therefore lies on the side holding the weaker acid - and because acid and conjugate base strengths are inverse, that same side holds the weaker base.",
      "note": "Only one comparison is needed in practice. Find the pKa of the acid on each side and the larger value marks the favoured side; the base half of the statement follows automatically and never needs checking separately.",
      "options": {
        "A": "Correct. Equilibrium settles on the side holding the weaker acid, and since conjugate strengths are inverse, that side holds the weaker base too.",
        "B": "This is backwards. The stronger acid is the one most willing to lose its proton, so it is consumed rather than accumulated.",
        "C": "These two cannot occur together. A weaker acid has a stronger conjugate base, so no single side of an equilibrium holds both a weaker acid and a stronger base.",
        "D": "This pairing is likewise impossible: a stronger acid necessarily has a weaker conjugate base, so they sit on opposite sides."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q41_sulfur_acidity_inductive",
    "topic": "Acid Strength and pKa",
    "difficulty_level": "Hard",
    "question_text": "Why is ethanethiol (CH3CH2SH, pKa = 10.5) significantly more acidic than ethanol (CH3CH2OH, pKa = 16)?",
    "question_smiles": "CCS",
    "options": [
      {
        "option_id": "A",
        "text": "Sulfur is larger than oxygen, allowing the negative charge of the conjugate base thiolate to delocalize over a larger orbital volume.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Sulfur is more electronegative than oxygen.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The C-S bond is stronger than the C-O bond.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethanethiol cannot form hydrogen bonds.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sulfur sits directly below oxygen, so comparing a thiol with an alcohol is a down-the-group comparison. Down a group, atomic size dominates and electronegativity works against the observed trend.",
      "approach": "Step 1: Compare the conjugate bases. Ethoxide holds its charge on oxygen; ethanethiolate holds it on sulfur.\nStep 2: Note that sulfur is a third-row atom and much larger, with its valence electrons in the n = 3 shell rather than n = 2.\nStep 3: The same negative charge spread over that larger volume is less concentrated and therefore more stable. The weaker, longer S-H bond helps too. Ethanethiol's pKa of 10.5 against ethanol's 16 follows.",
      "note": "Notice this is the same reasoning that made HI a stronger acid than HF, applied one group over. The general rule is worth stating plainly: across a period compare electronegativity, but down a group compare size, and size wins.",
      "options": {
        "A": "Correct. Sulfur's larger size lets the conjugate base spread its negative charge over a greater volume, stabilising it far more than oxygen can.",
        "B": "Sulfur is in fact less electronegative than oxygen, about 2.6 against 3.4. Electronegativity runs opposite to this trend, which is precisely why size must be the explanation.",
        "C": "The C-S bond is weaker than the C-O bond, not stronger. In any case it is the S-H bond that breaks here, not the bond to carbon.",
        "D": "Thiols do form weak hydrogen bonds, but hydrogen bonding affects boiling point rather than the stability of the anion left behind after deprotonation."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A two-carbon chain ending in a sulfur atom bearing a hydrogen."
  },
  {
    "question_id": "ch02_q42_lewis_acid_coordinate_bond",
    "topic": "Acids and Bases: Lewis Definition",
    "difficulty_level": "Medium",
    "question_text": "What type of bond is formed when a Lewis base donates its electron pair to a Lewis acid?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Coordinate covalent bond (or dative bond)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ionic bond",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Hydrogen bond",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Pi bond",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An ordinary covalent bond is formed by each atom contributing one electron. When one partner supplies both electrons of the shared pair, the bond that results is described as coordinate, or dative.",
      "approach": "Step 1: Identify what each partner brings. The Lewis base supplies a complete lone pair; the Lewis acid supplies an empty orbital and no electrons.\nStep 2: Both electrons of the new bond therefore come from one atom.\nStep 3: That origin is what the name coordinate covalent records. Once formed, the bond is indistinguishable from any other covalent bond of the same type.",
      "note": "The distinction is purely about bookkeeping. All four N-H bonds in the ammonium ion are identical and interchangeable, even though one of them was formed by donation of nitrogen's lone pair - the label describes the history, not any lasting property.",
      "options": {
        "A": "Correct. One partner supplies both electrons of the shared pair, which is what the terms coordinate and dative describe.",
        "B": "An ionic bond involves complete transfer of electrons and electrostatic attraction between separate ions, not a shared pair.",
        "C": "A hydrogen bond is a weak intermolecular attraction, an order of magnitude weaker than a covalent bond and not formed by donating a pair into an empty orbital.",
        "D": "A pi bond comes from sideways overlap of p orbitals, each contributing one electron. Lewis acid-base donation forms a sigma bond."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q43_inductive_distance",
    "topic": "Acid Strength and pKa",
    "difficulty_level": "Hard",
    "question_text": "Which of the following isomers of chlorobutanoic acid is the most acidic?",
    "question_smiles": "ClCCCC(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "2-Chlorobutanoic acid (chlorine is closest to carboxylate)",
        "smiles": "CCC(Cl)C(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Chlorobutanoic acid",
        "smiles": "CC(Cl)CC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4-Chlorobutanoic acid",
        "smiles": "ClCCCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "They all have identical acidities because they are isomers.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An inductive effect is transmitted through sigma bonds, and it attenuates sharply with each bond it passes through. Where an electron-withdrawing group sits therefore matters as much as whether it is present at all.",
      "approach": "Step 1: Recognise that all three isomers carry the same chlorine, so the difference is position rather than identity.\nStep 2: Recall that induction falls off by roughly a factor of two to three per bond, so its influence is largely spent after two or three bonds.\nStep 3: The 2-chloro isomer has the chlorine on the carbon next to the carboxyl group, closest to the negative charge of the conjugate base. It stabilises that charge most and is therefore the most acidic.",
      "note": "The drawn structure here is the 4-chloro isomer, with the chlorine at the far end of the chain - it is one of the options rather than the answer, so read the structure as an example of the isomer family and not as the compound being asked about. The measured values make the point: about 2.86 for 2-chloro, 4.05 for 3-chloro and 4.52 for 4-chloro, against 4.82 for unsubstituted butanoic acid.",
      "options": {
        "A": "Correct. The chlorine sits adjacent to the carboxyl group, where its electron withdrawal reaches the negative charge most effectively and lowers the pKa to about 2.86.",
        "B": "One carbon further away, the inductive effect is already much weaker, giving a pKa near 4.05 - acidic, but well short of the 2-chloro isomer.",
        "C": "At the far end of the chain the chlorine barely influences the carboxylate at all, and the pKa of about 4.52 is close to unsubstituted butanoic acid.",
        "D": "Isomers share a molecular formula but not their properties. Where a substituent sits changes how strongly it interacts with the rest of the molecule."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a chlorine atom on the end carbon and a carboxylic acid group at the other end."
  },
  {
    "question_id": "ch02_q44_hybridization_acidity_nitrogen",
    "topic": "Acid Strength and pKa",
    "difficulty_level": "Hard",
    "question_text": "Which nitrogen-containing compound is the most basic?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Methylamine (CH3NH2) (nitrogen is sp3 hybridized)",
        "smiles": "CN",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Pyridine (C5H5N) (nitrogen is sp2 hybridized)",
        "smiles": "c1ccncc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetonitrile (CH3CN) (nitrogen is sp hybridized)",
        "smiles": "CC#N",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "They are equally basic.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Basicity depends on how available a lone pair is. A lone pair in an orbital with more s character sits closer to the nucleus, is held more tightly, and is correspondingly less willing to be donated to a proton.",
      "approach": "Step 1: Assign the hybridization at each nitrogen. Methylamine's is sp3 with three bonds and a lone pair; pyridine's is sp2 in the ring plane; acetonitrile's is sp at the end of a triple bond.\nStep 2: Rank the s character of the orbital holding each lone pair: 25 percent for sp3, 33 for sp2, 50 for sp.\nStep 3: Less s character means a more loosely held, more available lone pair. Methylamine's sp3 nitrogen is therefore the most basic, and acetonitrile's sp nitrogen the least.",
      "note": "The same s-character argument that made an sp C-H more acidic in Chapter 1 makes an sp nitrogen less basic here - one stabilises a lone pair after deprotonation, the other holds a lone pair too tightly to donate. It is one principle producing opposite-looking consequences.",
      "options": {
        "A": "Correct. An sp3 nitrogen holds its lone pair in the orbital with the least s character, making it the most available for donation to a proton.",
        "B": "Pyridine is a genuine base - its lone pair is in an in-plane sp2 orbital, not in the aromatic pi system - but 33 percent s character holds that pair more tightly than methylamine's sp3 orbital does.",
        "C": "Acetonitrile's nitrogen is sp with 50 percent s character, holding its lone pair closest to the nucleus. It is the weakest base of the three by a wide margin.",
        "D": "The three differ in hybridization at nitrogen, which changes how tightly each holds its lone pair. Their basicities differ by many orders of magnitude."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q45_noncovalent_hbond_boiling",
    "topic": "Noncovalent Interactions",
    "difficulty_level": "Medium",
    "question_text": "Which of the following compounds has the highest boiling point?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Ethanol (CH3CH2OH)",
        "smiles": "CCO",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethylamine (CH3CH2NH2)",
        "smiles": "CCN",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Propane (CH3CH2CH3)",
        "smiles": "CCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Dimethyl ether (CH3OCH3)",
        "smiles": "COC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Boiling point tracks the energy needed to pull molecules apart. Hydrogen bonding is the strongest of the ordinary intermolecular forces, and its strength depends on how polar the bond to hydrogen is.",
      "approach": "Step 1: Sort by whether hydrogen bonding is possible at all. Propane has only C-H bonds and dimethyl ether has no O-H, so neither can donate a hydrogen bond.\nStep 2: Compare the two that can. Ethanol donates through O-H and ethylamine through N-H.\nStep 3: Oxygen is more electronegative than nitrogen, so the O-H bond is more polarised and its hydrogen bonds are stronger. Ethanol boils at 78 degrees against ethylamine's 17.",
      "note": "The four span more than a hundred degrees despite comparable molecular masses, which shows how much intermolecular forces matter relative to size. Dimethyl ether is the instructive case: it has an oxygen and is polar, but with no O-H it cannot donate, and it boils below room temperature.",
      "options": {
        "A": "Correct. The O-H bond is the most polarised of those available, so ethanol forms the strongest hydrogen bonds and boils highest at 78 degrees.",
        "B": "Ethylamine does hydrogen bond through N-H, but nitrogen is less electronegative than oxygen so those bonds are weaker, and it boils around 17 degrees.",
        "C": "Propane has no polar bonds at all and relies on dispersion forces alone, giving it the lowest boiling point of the four at about minus 42 degrees.",
        "D": "Dimethyl ether is polar and can accept hydrogen bonds, but with no O-H it cannot donate one, so its molecules cannot associate with each other in that way."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q46_skeletal_dipole_vectors",
    "topic": "Polar Covalent Bonds & Electronegativity",
    "difficulty_level": "Medium",
    "question_text": "Which of the following molecules has a net dipole moment of zero due to symmetry?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "p-Dichlorobenzene",
        "smiles": "Clc1ccc(Cl)cc1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "o-Dichlorobenzene",
        "smiles": "Clc1ccccc1Cl",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "m-Dichlorobenzene",
        "smiles": "Clc1cccc(Cl)c1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Chlorobenzene",
        "smiles": "Clc1ccccc1",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "On a benzene ring the substituent positions are fixed at 60 degree intervals, so the angle between two bond dipoles is determined entirely by whether the substituents are ortho, meta or para. Only one of those arrangements puts them exactly opposed.",
      "approach": "Step 1: Rule out chlorobenzene immediately - a single polar C-Cl bond has nothing to cancel against.\nStep 2: Consider the disubstituted cases as vectors. Ortho places the two chlorines 60 degrees apart and meta places them 120 degrees apart, so in both cases the dipoles have a common component and add to a nonzero resultant.\nStep 3: Para places them directly across the ring, 180 degrees apart. Two equal dipoles pointing in exactly opposite directions cancel completely, giving a net moment of zero.",
      "note": "This is a case where symmetry can be read straight off the drawing. Any pair of identical substituents placed para on a benzene ring cancels, which is why para-disubstituted benzenes are consistently the least polar and often the highest melting of the three isomers.",
      "options": {
        "A": "Correct. The two chlorines sit directly opposite each other, so their equal bond dipoles point in exactly opposite directions and cancel to zero.",
        "B": "Adjacent chlorines are only 60 degrees apart, so their dipoles largely reinforce. The ortho isomer is the most polar of the three, at about 2.5 D.",
        "C": "At 120 degrees apart the two dipoles partly oppose but do not cancel, leaving the meta isomer with a moderate net moment of about 1.5 D.",
        "D": "A single C-Cl bond gives an unopposed dipole of about 1.7 D. With only one polar substituent there is nothing available to cancel it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q47_lewis_acid_base_reaction_curved_arrow",
    "topic": "Acids and Bases: Lewis Definition",
    "difficulty_level": "Medium",
    "question_text": "In a Lewis acid-base reaction, how is the direction of the curved arrow drawn?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "From the electron pair donor (Lewis base) to the electron pair acceptor (Lewis acid)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "From the Lewis acid to the Lewis base",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "From the electrophilic atom to the nucleophilic atom",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "From the proton to the lone pair",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A curved arrow represents the movement of an electron pair, so its tail must start where the electrons are and its head must point where they are going. Getting the direction right is the single most important convention in mechanism drawing.",
      "approach": "Step 1: Locate the electrons. They are on the Lewis base, either as a lone pair or as a pi bond.\nStep 2: Locate the destination. The Lewis acid has an empty orbital or an incomplete octet ready to receive them.\nStep 3: Draw the arrow from the base to the acid - equivalently, from the nucleophile to the electrophile, since those terms describe the same two roles.",
      "note": "Arrows always follow the electrons, never the atoms and never the positive charge. Drawing an arrow from a positive centre toward a lone pair is the commonest mechanistic error, and it inverts the chemistry being described.",
      "options": {
        "A": "Correct. The tail sits on the donor's electron pair and the head points at the acceptor, so the arrow runs from the Lewis base to the Lewis acid.",
        "B": "This reverses the convention. The Lewis acid has no electrons to give; it is the destination, not the source.",
        "C": "This is the same reversal in nucleophile-electrophile language. The electrophilic atom is electron-poor, so no arrow can originate there.",
        "D": "A proton has no electron pair to donate, so an arrow never starts at it. In a protonation the arrow runs from the lone pair to the proton."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q48_acidity_inductive_substituents",
    "topic": "Acid Strength and pKa",
    "difficulty_level": "Hard",
    "question_text": "Which of the following substituted acetic acids is the most acidic?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Trifluoroacetic acid (CF3COOH) (pKa = 0.23)",
        "smiles": "FC(F)(F)C(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Trichloroacetic acid (CCl3COOH) (pKa = 0.66)",
        "smiles": "ClC(Cl)(Cl)C(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Tribromoacetic acid (CBr3COOH) (pKa = 0.72)",
        "smiles": "BrC(Br)(Br)C(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Triiodoacetic acid (CI3COOH)",
        "smiles": "IC(I)(I)C(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Where several substituents differ only in which halogen they are, the strength of the inductive withdrawal follows the halogens' electronegativities directly. The more electronegative the substituent, the more charge it drains from the conjugate base.",
      "approach": "Step 1: Note that all four acids have the same skeleton with three halogens on the alpha carbon, so position and number are held constant.\nStep 2: Rank the halogens by electronegativity: fluorine 4.0, chlorine 3.0, bromine 2.8, iodine 2.7.\nStep 3: Fluorine withdraws most strongly, so trifluoroacetate is the best-stabilised conjugate base and trifluoroacetic acid the strongest of the four, at pKa 0.23.",
      "note": "This is a within-a-group comparison where electronegativity does decide, because the halogens here are substituents rather than the atom losing the proton. When the halogen itself bears the charge, as in HF against HI, size takes over instead - which comparison you are making determines which factor dominates.",
      "options": {
        "A": "Correct. Fluorine is the most electronegative halogen, so three of them withdraw the most electron density and stabilise the carboxylate best, giving the lowest pKa at 0.23.",
        "B": "Trichloroacetic acid at 0.66 is very strong, but chlorine is a full electronegativity unit below fluorine and withdraws correspondingly less.",
        "C": "Bromine is less electronegative still, and the measured pKa of 0.72 places tribromoacetic acid just below the trichloro compound in strength.",
        "D": "Iodine is the least electronegative halogen, so triiodoacetic acid is the weakest of the four - the trend continues in the same direction."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q49_resonance_nonpolar_contributors",
    "topic": "Resonance Theory",
    "difficulty_level": "Medium",
    "question_text": "In resonance theory, which contributor is generally the most stable?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The structure with the maximum number of covalent bonds and minimum charge separation.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The structure with the highest number of formal charges.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The structure with incomplete octets on electronegative atoms.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The structure placing a positive charge on fluorine.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Contributors are ranked by ordinary stability arguments. Forming bonds releases energy and separating charge costs it, so the best contributor is the one that maximises bonding and minimises charge separation.",
      "approach": "Step 1: Count covalent bonds in each candidate structure - more bonds means lower energy.\nStep 2: Check octets. A structure in which every second-row atom has a full octet is preferred over one that leaves an atom short.\nStep 3: Check charge separation. Pulling positive and negative apart costs energy, so a contributor with no separated charges outranks one with them, and any charge present should sit on an atom suited to it.",
      "note": "These criteria can conflict, and completing an octet usually wins. That is why the methoxymethyl cation's major contributor puts a positive charge on oxygen rather than leaving carbon with six electrons - it accepts charge separation to gain a full octet.",
      "options": {
        "A": "Correct. Maximum bonding and minimum charge separation together identify the lowest-energy contributor, which dominates the hybrid.",
        "B": "More formal charges means more separation of charge, which costs energy. Such structures are minor contributors at best.",
        "C": "An incomplete octet on an electronegative atom is particularly costly, since those atoms hold electrons most strongly and are least tolerant of being short.",
        "D": "Fluorine is the most electronegative element and resists a positive charge above all others. Such a contributor would be negligible."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q50_lewis_acid_hydration_complex",
    "topic": "Acids and Bases: Lewis Definition",
    "difficulty_level": "Medium",
    "question_text": "When boron trifluoride (BF3) reacts with dimethyl ether (CH3OCH3), what species is formed?",
    "question_smiles": "FB(F)F",
    "options": [
      {
        "option_id": "A",
        "text": "A Lewis acid-base complex (adduct) with a boron-oxygen coordinate bond.",
        "smiles": "CO[C+][B-](F)(F)F",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A salt containing methylated boron.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "No reaction occurs due to steric hindrance.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A polymer.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Lewis acid with an empty orbital and a Lewis base with a lone pair combine directly, without anything being expelled. The result is a single species held together by a bond in which one partner supplied both electrons.",
      "approach": "Step 1: Assign the roles. Boron in boron trifluoride has only six valence electrons and an empty p orbital, making it the Lewis acid; the ether oxygen has lone pairs, making it the base.\nStep 2: Donate one oxygen lone pair into boron's empty orbital, forming a boron-oxygen bond.\nStep 3: Boron now has a complete octet and four groups, so it becomes tetrahedral, and the oxygen carries a formal positive charge while the boron carries a negative one. The product is a single adduct, with nothing lost.",
      "note": "Boron trifluoride diethyl etherate, the same adduct made with diethyl ether, is sold as a stable distillable liquid precisely because this reaction is so clean. It is the standard way to handle boron trifluoride, which is otherwise an awkward gas.",
      "options": {
        "A": "Correct. The oxygen lone pair fills boron's empty orbital, giving a single adduct joined by a coordinate bond, with boron becoming tetrahedral.",
        "B": "No methyl group transfers to boron. The methyls stay on the oxygen throughout; only an electron pair moves.",
        "C": "The reaction proceeds readily and the adduct is stable enough to isolate and distil. Neither partner is bulky enough to prevent it.",
        "D": "Each boron accepts one electron pair and each ether donates one, so the two combine in a one-to-one adduct rather than chaining together."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A boron atom bonded to three fluorine atoms."
  },
  {
    "question_id": "ch02_q_dynamic_pka_acids",
    "topic": "Brønsted-Lowry Acids & Bases",
    "difficulty_level": "Hard",
    "question_text": "Match each acid below to its correct approximate pKa value.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "4.76"
      },
      {
        "smiles": "Oc1ccccc1",
        "correctAnswer": "10"
      },
      {
        "smiles": "CCO",
        "correctAnswer": "16"
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "20"
      }
    ],
    "match_options": [
      "4.76",
      "10",
      "16",
      "20",
      "25",
      "-7"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect pKa values",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "These four span the range of ordinary organic acidity, and each value follows from how well its conjugate base disperses the negative charge left behind. Ordering them is a matter of asking what stabilisation is available in each case.",
      "approach": "Step 1: Acetic acid at 4.76 is the most acidic - its carboxylate delocalizes the charge equally over two electronegative oxygens.\nStep 2: Phenol at 10 comes next, delocalizing into an aromatic ring. The ring shares the charge with carbon atoms rather than oxygens, so the stabilisation is real but weaker.\nStep 3: Ethanol at 16 has no delocalization at all, leaving the charge on one oxygen. Acetone at 20 is the weakest, since deprotonating an alpha C-H leaves the charge partly on carbon, stabilised only by the adjacent carbonyl.",
      "note": "Acetone's value is the one to remember for later chapters. At pKa 20 an alpha hydrogen is far more acidic than an alkane's 50, and that difference is what makes enolate chemistry possible - the entire basis of Chapters 22 and 23.",
      "options": {
        "A": "Correct. Acetic acid 4.76, phenol 10, ethanol 16 and acetone 20, in order of how effectively each conjugate base disperses its charge.",
        "B": "Each value follows from the conjugate base: two-oxygen delocalization is best, aromatic delocalization next, a bare alkoxide next, and an enolate weakest of these four."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q_dynamic_dipole_moments",
    "topic": "Polar Covalent Bonds & Electronegativity",
    "difficulty_level": "Medium",
    "question_text": "Match each compound to its relative dipole moment status.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "ClCCl",
        "correctAnswer": "Polar (dipole > 0)"
      },
      {
        "smiles": "ClC(Cl)(Cl)Cl",
        "correctAnswer": "Nonpolar (dipole = 0)"
      },
      {
        "smiles": "C",
        "correctAnswer": "Nonpolar (dipole = 0)"
      },
      {
        "smiles": "ClC(Cl)Cl",
        "correctAnswer": "Polar (dipole > 0)"
      }
    ],
    "match_options": [
      "Polar (dipole > 0)",
      "Nonpolar (dipole = 0)"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect dipoles",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Whether a molecule is polar depends on both bond polarity and molecular symmetry. Polar bonds arranged symmetrically cancel; the same bonds arranged asymmetrically do not.",
      "approach": "Step 1: Take the two nonpolar cases. Methane has four essentially nonpolar C-H bonds arranged tetrahedrally, and carbon tetrachloride has four strongly polar C-Cl bonds in the same symmetric arrangement, which cancel exactly.\nStep 2: Take dichloromethane. Two chlorines and two hydrogens break the tetrahedral symmetry, so the C-Cl dipoles have a resultant pointing away from the hydrogens.\nStep 3: Chloroform likewise has three chlorines against one hydrogen, an asymmetric arrangement leaving a clear net moment.",
      "note": "Carbon tetrachloride and chloroform make the pair worth remembering: both are built from the same two kinds of bond, yet one is nonpolar and the other polar. Replacing a single chlorine with hydrogen destroys the cancellation entirely.",
      "options": {
        "A": "Correct. Methane and carbon tetrachloride are tetrahedrally symmetric and cancel to zero, while dichloromethane and chloroform are asymmetric and retain a net dipole.",
        "B": "Sort by symmetry rather than by whether polar bonds are present. Four identical groups around a carbon cancel; a mixture of two different groups does not."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q_dynamic_acid_base_reaction",
    "topic": "Brønsted-Lowry Acids & Bases",
    "difficulty_level": "Medium",
    "question_text": "Consider the following proton-transfer reaction. Identify the role of reactants A and B.",
    "reaction_scheme": {
      "reactants": [
        "CC(=O)O",
        "CCN"
      ],
      "reagents": "proton transfer",
      "conditions": "equilibrium",
      "products": [
        "CC(=O)[O-]",
        "CC[NH3+]"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Acetic acid is the acid (proton donor), ethylamine is the base (proton acceptor).",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetic acid is the base, ethylamine is the acid.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both act as acids.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both act as bases.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "In a Brønsted-Lowry proton transfer, one reactant must supply a proton and the other must have a lone pair to receive it. Identifying which is which is a matter of looking for an acidic hydrogen on one side and an available lone pair on the other.",
      "approach": "Step 1: Look for the acidic hydrogen. Acetic acid's carboxyl O-H has a pKa of about 4.76, making it much the most acidic proton present.\nStep 2: Look for the basic site. Ethylamine's nitrogen carries a lone pair and is the strongest base available.\nStep 3: The proton moves from the carboxyl group to the nitrogen, giving acetate and the ethylammonium ion. Acetic acid is the acid, ethylamine the base.",
      "note": "Check the direction with pKa values: the conjugate acid of ethylamine has a pKa near 10.7, well above acetic acid's 4.76, so the products hold the weaker acid and the equilibrium lies far to the right. This proton transfer is essentially complete.",
      "options": {
        "A": "Correct. Acetic acid donates its carboxyl proton and ethylamine's nitrogen lone pair accepts it, giving acetate and the ethylammonium ion.",
        "B": "This reverses the roles. Acetic acid has the acidic O-H and ethylamine has the available lone pair, not the other way about.",
        "C": "Two acids have nothing to react with, since neither would accept the proton the other offers. A proton transfer needs a donor and an acceptor.",
        "D": "Ethylamine is indeed a base, but acetic acid cannot act as one here. Its carboxyl proton is far more available than its comparatively poor lone pairs, so it functions as the acid."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  }
];
