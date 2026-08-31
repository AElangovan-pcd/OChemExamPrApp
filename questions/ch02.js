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
      "context": "Explain the inductive effect on carboxylic acid acidity.",
      "process": "Step 1: Analyze the conjugate bases: acetate ($CH_3COO^-$) vs. trifluoroacetate ($CF_3COO^-$).\nStep 2: Fluorine is highly electronegative. The three fluorine atoms in the $CF_3$ group pull electron density toward themselves through the $\\sigma$-bond framework (inductive effect).\nStep 3: This electron withdrawal disperses the negative charge on the carboxylate oxygens, stabilizing the trifluoroacetate conjugate base and making trifluoroacetic acid a much stronger acid.",
      "result": "The correct choice is A."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "Analyze hybridization effects on carbanion stability and C-H bond acidity.",
      "process": "Step 1: Check hybridization of the carbons. Ethane ($sp^3$), ethylene ($sp^2$), acetylene ($sp$).\nStep 2: Acidity depends on the stability of the conjugate base carbanion. A carbanion holds its lone pair in a hybrid orbital.\nStep 3: $sp$ hybrid orbitals have 50% $s$-character. Because $s$-orbitals are closer to the nucleus, the lone pair in an $sp$ orbital is held closer to the carbon nucleus, making it more stable than a lone pair in $sp^2$ (33% $s$) or $sp^3$ (25% $s$) orbitals.",
      "result": "Acetylene is the most acidic hydrocarbon."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "Evaluate resonance stabilization in the phenoxide ion compared to cyclohexoxide.",
      "process": "Step 1: Cyclohexoxide ($C_6H_{11}O^-$) has its negative charge localized entirely on the oxygen atom.\nStep 2: Phenoxide ($C_6H_5O^-$) can delocalize its negative charge into the benzene ring via resonance ($C-O^-$ double bond character, negative charges on ortho and para positions of the ring).\nStep 3: Delocalizing the charge over a larger area stabilizes the phenoxide conjugate base, lowering the energy barrier to deprotonation for phenol.",
      "result": "Resonance delocalization stabilizes phenoxide, making phenol more acidic."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "Examine structural isomers and how they differ in hydrogen bonding capabilities.",
      "process": "Step 1: Ethanol ($CH_3CH_2OH$) has a hydrogen atom bonded directly to a highly electronegative oxygen atom.\nStep 2: Dimethyl ether ($CH_3OCH_3$) has no hydrogens attached to oxygen (only C-H bonds).\nStep 3: Ethanol molecules can form strong intermolecular hydrogen bonds (O-H...O), which require substantial thermal energy to break. Dimethyl ether can only interact via weaker dipole-dipole forces.",
      "result": "Hydrogen bonding accounts for ethanol's higher boiling point."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "Assign partial charges based on electronegativities of carbon and nitrogen.",
      "process": "Step 1: EN of C = 2.5, EN of N = 3.0.\nStep 2: Nitrogen is more electronegative, drawing bonding electrons to itself.\nStep 3: Carbon becomes electron-deficient ($\\delta^+$), while nitrogen gains excess electron density ($\\delta^-$).",
      "result": "Carbon is $\\delta^+$, nitrogen is $\\delta^-$."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "Understand polarity in organometallic bonds.",
      "process": "Step 1: Electronegativity of carbon is 2.5.\nStep 2: In bonds with non-metals (O=3.5, Cl=3.0, F=4.0), carbon has a lower electronegativity and is partially positive ($\\delta^+$).\nStep 3: In organometallic bonds like C-Li, lithium has a very low electronegativity (EN = 1.0). Carbon is much more electronegative here, drawing electrons toward itself and taking a partial negative charge ($\\delta^-$).",
      "result": "In C-Li, carbon is partially negative."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "Apply vector summation to geometric isomers.",
      "process": "Step 1: Both isomers contain two polar C-Cl bonds.\nStep 2: In the *cis* isomer, both chlorine atoms are on the same side of the double bond. The dipole vectors add up constructively, yielding a net dipole.\nStep 3: In the *trans* isomer, the chlorines are on opposite sides. The vectors are antiparallel, canceling each other out perfectly.",
      "result": "The correct choice is A."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "Identify resonance conjugation in carboxylic acid anions.",
      "process": "Step 1: Saturated alkoxides like ethoxide, cyclohexoxide, and tert-butoxide have negative charges isolated on a single oxygen with no adjacent $\\pi$ bonds.\nStep 2: Acetate ($CH_3COO^-$) has the negative oxygen adjacent to a C=O double bond.\nStep 3: This allows the negative charge to delocalize over both oxygen atoms ($O-C=O \\leftrightarrow O=C-O^-$), providing significant resonance stabilization.",
      "result": "Acetate is stabilized by resonance."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "Distinguish between major, minor, and invalid resonance structures.",
      "process": "Step 1: Major contributors minimize formal charges and maximize covalent bonds.\nStep 2: Structures showing charge separation (e.g. $CH_3-C^+(O^-)O^-$) are minor contributors because they contain more charges and fewer covalent bonds.\nStep 3: Moving nuclei or breaking $\\sigma$ bonds results in invalid resonance structures.",
      "result": "The structure with charge separation is a minor contributor."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "Perform a standard logarithmic conversion to find $pK_a$.",
      "process": "Step 1: Formula: $pK_a = -log_{10}(K_a)$.\nStep 2: Substitute $K_a = 10^{-5}$: $pK_a = -log_{10}(10^{-5})$.\nStep 3: This simplifies to $-(-5) = 5$.",
      "result": "The pKa is 5."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "Relate equilibrium constants to differences in $pK_a$ values.",
      "process": "Step 1: The equation for the equilibrium constant is: $K_{eq} = 10^{\\Delta pK_a}$, where $\\Delta pK_a = pK_a(product \\ acid) - pK_a(reactant \\ acid)$.\nStep 2: Reactant acid is $H-A$ ($pK_a = 5$). Product acid is $H-B$ ($pK_a = 9$).\nStep 3: $\\Delta pK_a = 9 - 5 = 4$. So, $K_{eq} = 10^4$.",
      "result": "The equilibrium constant is $10^4$ (favoring products)."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "Identify strong acids.",
      "process": "Step 1: Check $pK_a$ values. Sulfuric acid is a strong mineral acid with a first $pK_a \\approx -9$.\nStep 2: Phosphoric acid is weak ($pK_a = 2.16$). Hydrofluoric acid is weak ($pK_a = 3.2$).\nStep 3: Acetic acid is a weak organic acid ($pK_a = 4.75$).",
      "result": "Sulfuric acid has a negative pKa."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "Identify key organic acid and base functional groups.",
      "process": "Step 1: Basic compounds accept protons.\nStep 2: Amines contain a nitrogen atom with a basic lone pair that easily accepts $H^+$ to form ammonium salts ($R-NH_3^+$).\nStep 3: Carboxylic acids are acidic; alcohols and ethers are neutral/extremely weakly basic.",
      "result": "Amines are the most common organic bases."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "Analyze periodic trends in acidity across a horizontal row.",
      "process": "Step 1: Across a row, size variations are small, but electronegativity changes significantly ($C=2.5 \\rightarrow N=3.0 \\rightarrow O=3.5 \\rightarrow F=4.0$).\nStep 2: A higher electronegativity stabilizes the conjugate base anion ($F^-$ is much more stable than $CH_3^-$).\nStep 3: Therefore, acidity increases with increasing electronegativity of the central atom.",
      "result": "The correct choice is A."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "Analyze periodic trends in acidity down a vertical column.",
      "process": "Step 1: Down a column, electronegativity actually decreases ($F > Cl > Br > I$). If EN were the main factor, HF would be the strongest acid, but it is the weakest.\nStep 2: Instead, the atomic radius increases significantly. A larger size means the H-X bond is longer and weaker (smaller bond dissociation energy).\nStep 3: Additionally, the negative charge on the conjugate base ($I^-$ vs $F^-$) is distributed over a much larger volume, which stabilizes the anion.",
      "result": "Increasing size of the halogen stabilizes the anion and weakens the bond, increasing acidity."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "Contrast alkoxide and carboxylate stabilization.",
      "process": "Step 1: Acetic acid deprotonates to give acetate ($CH_3COO^-$); ethanol deprotonates to give ethoxide ($CH_3CH_2O^-$).\nStep 2: The negative charge on ethoxide is localized on a single oxygen. The negative charge on acetate is delocalized equally over two oxygen atoms via resonance.\nStep 3: Delocalizing the charge reduces repulsion and stabilizes the anion, making deprotonation easier.",
      "result": "The correct choice is A."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "Analyze protonation states of amino acids at physiological pH based on $pK_a$ values.",
      "process": "Step 1: Check $pK_a$ values for amino acids. Carboxylic acid group $pK_a \\approx 2$. Ammonium group $pK_a \\approx 9$.\nStep 2: At pH = 7.4: pH is higher than the carboxylic acid $pK_a$ (so it is deprotonated to $-COO^-$). pH is lower than the ammonium $pK_a$ (so it remains protonated as $-NH_3^+$).\nStep 3: This results in a dipolar ion carrying both a positive and negative charge, known as a zwitterion.",
      "result": "The zwitterion form is dominant at pH 7.4."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "Identify the base in ether protonation.",
      "process": "Step 1: Diethyl ether ($CH_3CH_2OCH_2CH_3$) has oxygen with 2 lone pairs.\nStep 2: The lone pair acts as a nucleophile (electron pair donor) to attack the proton of $HBr$.\nStep 3: Donating an electron pair makes it a Lewis base (and a Brønsted base).",
      "result": "Diethyl ether acts as a Lewis base."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "Compare acidities of common oxygen-containing compounds.",
      "process": "Step 1: Check $pK_a$ values: phenol (10) < water (15.7) < ethanol (16) < tert-butanol (18).\nStep 2: Phenol is by far the most acidic due to resonance stabilization of the conjugate base phenoxide.\nStep 3: Lower $pK_a$ corresponds to the strongest acid.",
      "result": "Phenol is the most acidic."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "Examine steric effects on anion solvation.",
      "process": "Step 1: Deprotonation forms alkoxide anions: ethoxide vs. tert-butoxide.\nStep 2: Solvent water molecules stabilize these anions by forming hydrogen bonds around the negative oxygen.\nStep 3: The bulky methyl groups in the tert-butyl group physically block water molecules from approaching the oxygen of tert-butoxide, reducing stabilizing solvation and making its formation less favorable (weaker acid).",
      "result": "Steric hindrance of solvation weakens tert-butanol's acidity."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "Identify metal-containing Lewis acids.",
      "process": "Step 1: Alkaline metals like $Na^+$ and $K^+$ have stable octets and weak electron-accepting properties.\nStep 2: Aluminum in $AlCl_3$ is a group 13 element with a vacant $p$ orbital and only 6 valence electrons in its neutral compounds.\nStep 3: It readily accepts electron pairs, acting as a powerful Lewis acid catalyst (e.g. in Friedel-Crafts reactions).",
      "result": "Aluminum trichloride is a strong Lewis acid catalyst."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "Understand the role of molecular shape in London dispersion forces.",
      "process": "Step 1: Both are saturated hydrocarbons (non-polar) and interact only through London dispersion forces.\nStep 2: Pentane is a straight-chain molecule (cylindrical shape) which can pack tightly against neighbors, maximizing surface contact.\nStep 3: Neopentane ($2,2-dimethylpropane$) is spherical and compact, reducing surface contact and weakening dispersion forces, leading to a lower boiling point.",
      "result": "Linear shape increases surface area and dispersion forces, raising the boiling point."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "Remember standard $pK_a$ benchmarks for functional groups.",
      "process": "Step 1: Check $pK_a$ classes. Alcohols have $pK_a \\approx 16-18$. Mineral acids have negative $pK_a$.\nStep 2: Hydrocarbons are very weak acids ($pK_a > 35$).\nStep 3: Carboxylic acids typically fall between 4 and 5.",
      "result": "The typical pKa range is 4 to 5."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "Identify conjugate acids of bases.",
      "process": "Step 1: A conjugate acid is formed when a base accepts a proton ($H^+$).\nStep 2: Add $H^+$ to methylamine ($CH_3NH_2$).\nStep 3: The proton attaches to the nitrogen lone pair, yielding $CH_3NH_3^+$.",
      "result": "The conjugate acid is methylammonium."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "Examine how molecular shapes prevent dipole cancellation.",
      "process": "Step 1: $CO_2$ is linear and cancels its dipoles. $BF_3$ is trigonal planar and cancels its dipoles.\nStep 2: Water ($H_2O$) has oxygen with 2 lone pairs and 2 bonds, adopting a bent shape ($104.5^\\circ$ angle).\nStep 3: Because the bonds are not opposite to each other, their dipoles add up constructively with the lone pair dipoles, resulting in a strong net dipole moment (1.85 D).",
      "result": "Water has a net dipole moment due to its bent geometry."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "Confirm normal valency formal charges.",
      "process": "Step 1: Nitrogen has 5 valence electrons.\nStep 2: In $CH_3NH_2$, nitrogen has 1 lone pair (2 nonbonding) and 3 single bonds (6 bonding).\nStep 3: Calculate: $5 - 2 - 3 = 0$.",
      "result": "The formal charge is 0."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q38_resonance_charge_localization",
    "topic": "Resonance Theory",
    "difficulty_level": "Medium",
    "question_text": "In the resonance hybrid of the formate ion (HCOO-), which statement is true about the bond lengths of the two carbon-oxygen bonds?",
    "question_smiles": "OC(=O)",
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
      "context": "Understand the physical reality represented by a resonance hybrid.",
      "process": "Step 1: Formate has two identical resonance contributors where the double bond shifts between the two oxygens.\nStep 2: The actual molecule does not switch between these structures; it exists as a single hybrid layout.\nStep 3: Consequently, both C-O bonds are identical in length (1.27 Å), reflecting a bond order of 1.5.",
      "result": "The two bonds are of equal length."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "Apply Lewis definitions to organic reaction steps.",
      "process": "Step 1: The carbocation has a positively charged carbon with an empty $p$ orbital (seeks electrons).\nStep 2: Water has oxygen lone pairs (willing to donate electrons).\nStep 3: The carbocation accepts an electron pair (Lewis acid), and water donates an electron pair (Lewis base).",
      "result": "Carbocation is the Lewis acid; water is the Lewis base."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "Reinforce the driving force of acid-base reactions.",
      "process": "Step 1: Strong acids and strong bases are reactive (high energy).\nStep 2: Chemical systems naturally progress toward lower energy states.\nStep 3: Therefore, equilibrium favors the conversion of stronger (more reactive) species into weaker (more stable) acids and bases.",
      "result": "Equilibrium favors the weaker acid and base."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "Compare sulfur vs. oxygen acidity in thiols vs. alcohols.",
      "process": "Step 1: Compare size and EN. Oxygen is more electronegative (3.5) than sulfur (2.5), which would predict ethanol to be more acidic. However, sulfur is in the 3rd row and is much larger than oxygen.\nStep 2: The larger size of the sulfur atom means its valence orbitals (3p) are larger and more polarizable than oxygen's (2p) orbitals.\nStep 3: This allows the negative charge on the thiolate ion ($R-S^-$) to be distributed over a larger volume, stabilizing the anion.",
      "result": "The larger size of sulfur stabilizes the conjugate base, making thiols more acidic."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "Identify the nature of Lewis acid-base adduct bonding.",
      "process": "Step 1: In a standard covalent bond, each atom contributes one electron to the shared pair.\nStep 2: In a coordinate covalent bond, one atom (the Lewis base) provides both electrons to form the bond.\nStep 3: Once formed, it is identical to any other covalent bond.",
      "result": "A coordinate covalent bond is formed."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "Examine how distance affects the inductive effect.",
      "process": "Step 1: Acidity is enhanced by electronegative substituents through inductive electron withdrawal.\nStep 2: The inductive effect is highly distance-dependent and drops off rapidly with the number of intervening bonds.\nStep 3: In 2-chlorobutanoic acid, the chlorine is on the $\\alpha$-carbon, directly adjacent to the carboxylate carbon, maximizing its stabilizing electron withdrawal.",
      "result": "2-Chlorobutanoic acid is the most acidic isomer."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "Compare basicity based on hybridization of the atom carrying the lone pair.",
      "process": "Step 1: Basicity measures how readily a lone pair is donated to a proton.\nStep 2: The hybridization of nitrogen affects how tightly its lone pair is held: $sp^3$ (25% $s$), $sp^2$ (33% $s$), $sp$ (50% $s$).\nStep 3: A higher $s$-character holds the lone pair closer to the nitrogen nucleus, making it less available for donation. Thus, $sp^3$ nitrogen is the most basic, and $sp$ nitrogen is the least basic.",
      "result": "Methylamine ($sp^3$ nitrogen) is the most basic."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "Compare hydrogen-bonding strengths between O-H and N-H groups.",
      "process": "Step 1: Propane and dimethyl ether cannot form intermolecular hydrogen bonds.\nStep 2: Both ethanol (O-H) and ethylamine (N-H) form intermolecular hydrogen bonds.\nStep 3: Because oxygen is more electronegative than nitrogen, the O-H bond is more polar than the N-H bond. This makes the hydrogen bonds in ethanol significantly stronger than those in ethylamine, resulting in a higher boiling point ($78^\\circ$C vs. $16^\\circ$C).",
      "result": "Ethanol has the highest boiling point due to stronger hydrogen bonding."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch02_q46_skeletal_dipole_vectors",
    "topic": "Polar Covalent Bonds & Electronegativity",
    "difficulty_level": "Medium",
    "question_text": "Which of the following molecules has a net dipole moment of zero due to symmetry?",
    "question_smiles": "C=C",
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
      "context": "Determine dipoles in aromatic substitution isomers.",
      "process": "Step 1: All isomers contain polar C-Cl bonds.\nStep 2: In p-dichlorobenzene, the two C-Cl bonds are in the para configuration ($180^\\circ$ opposite each other in a flat ring).\nStep 3: The two dipole vectors point in exact opposite directions and cancel out, resulting in a net dipole moment of zero.",
      "result": "p-Dichlorobenzene has a net dipole moment of zero."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "Review the rules of arrow-pushing notation.",
      "process": "Step 1: Curved arrows in organic mechanisms track the flow of electron density.\nStep 2: Electrons originate from electron-rich sources (lone pairs or $\\pi$ bonds in the Lewis base/nucleophile).\nStep 3: The arrow points to electron-deficient targets (vacant orbitals or partially positive nuclei in the Lewis acid/electrophile).",
      "result": "Arrows are drawn from the electron donor to the electron acceptor."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "Compare acidities based on substituent electronegativities.",
      "process": "Step 1: All compounds are tri-substituted acetic acids.\nStep 2: Compare electronegativities of the halogens: $F$ (4.0) > $Cl$ (3.0) > $Br$ (2.8) > $I$ (2.5).\nStep 3: Higher electronegativity increases the inductive electron withdrawal, which stabilizes the carboxylate anion. Therefore, trifluoroacetic acid is the most acidic.",
      "result": "Trifluoroacetic acid is the most acidic."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "Identify resonance stability guidelines.",
      "process": "Step 1: Maximize bonds to optimize electronic stabilization.\nStep 2: Charge separation is highly destabilizing due to Coulombic repulsion.\nStep 3: Complete octets are preferred on all atoms. The combination of maximal bonds, complete octets, and minimal charge separation defines the major contributor.",
      "result": "The structure with maximum bonds and minimum charge separation is the most stable."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "Understand the reaction products of Lewis acids and bases.",
      "process": "Step 1: $BF_3$ is a strong Lewis acid with a vacant orbital. Dimethyl ether is a Lewis base with lone pairs on oxygen.\nStep 2: The oxygen lone pair attacks the vacant orbital on boron.\nStep 3: This forms a stable Lewis acid-base adduct, $(CH_3)_2O^+-B^-F_3$, containing a coordinate bond.",
      "result": "A Lewis acid-base adduct is formed."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
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
      "context": "Evaluating acidities: lower pKa indicates a stronger acid.",
      "process": "Acetic acid is carboxylic, pKa = 4.76. Phenol is resonance stabilized, pKa = 10. Ethanol is a regular alcohol, pKa = 16. Acetone is a weak carbon acid, pKa = 20.",
      "result": "Acidity trends depend on conjugate base resonance and electronegativity."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "Understanding molecular geometry and vector addition of dipole moments.",
      "process": "Dichloromethane (ClCCl) and Chloroform (ClC(Cl)Cl) are asymmetric and polar. Carbon tetrachloride (ClC(Cl)(Cl)Cl) and Methane (C) are highly symmetric, causing bond dipoles to cancel out completely.",
      "result": "Molecular symmetry determines net dipole moment."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
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
      "context": "Identifying Brønsted-Lowry acid/base roles in a reaction scheme.",
      "process": "Acetic acid (CC(=O)O) donates a proton to form acetate (CC(=O)[O-]). Ethylamine (CCN) accepts a proton to form ethylammonium (CC[NH3+]).",
      "result": "The acid donates a proton, and the base accepts it."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  }
];
