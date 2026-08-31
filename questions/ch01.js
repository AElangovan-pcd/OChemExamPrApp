// OChemStudyBuddy - McMurry Chapter 1
// Author: A. Elangovan, PhD
var CH01_QUESTIONS = [
  {
    "question_id": "ch01_q1_electron_config",
    "topic": "Atomic Structure & Electron Configurations",
    "difficulty_level": "Easy",
    "question_text": "What is the ground-state electron configuration of a neutral carbon atom?",
    "question_smiles": "[C]",
    "options": [
      {
        "option_id": "A",
        "text": "$1s^2 2s^2 2p^2$ (Hund's rule satisfied)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$1s^2 2s^1 2p^3$ (excited state configuration)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$1s^2 2s^2 2p^4$ (neutral oxygen configuration)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$1s^2 2s^2 2p^1$ (neutral boron configuration)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A ground-state configuration fills orbitals from the lowest energy upward, one electron at a time, and the total number of electrons must equal the atomic number. Carbon is element 6, so any correct answer accounts for exactly six electrons.",
      "approach": "Step 1: Carbon's atomic number is 6, so a neutral atom has 6 electrons.\nStep 2: Fill in order of increasing energy - 1s, then 2s, then 2p. The 1s holds 2 and the 2s holds 2, using four.\nStep 3: The remaining two go into 2p. By Hund's rule they occupy separate 2p orbitals with parallel spins rather than pairing in one.",
      "note": "Notice that ground-state carbon has only two unpaired electrons, yet carbon forms four bonds in essentially every organic compound. That mismatch is the whole reason hybridization exists, and it is the problem the next several questions in this chapter set up.",
      "options": {
        "A": "Correct. Six electrons fill 1s and 2s completely and leave two in 2p, which spread across separate 2p orbitals by Hund's rule.",
        "B": "This does contain six electrons, but promoting a 2s electron into 2p costs energy, so it is an excited state rather than the ground state the question asks for.",
        "C": "This holds eight electrons and so describes neutral oxygen, not carbon. Count the superscripts before anything else: they must sum to the atomic number.",
        "D": "This holds five electrons and describes boron. It is carbon's configuration with one electron missing, which would be the cation, not a neutral atom."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A single carbon atom shown on its own, with no bonds to other atoms."
  },
  {
    "question_id": "ch01_q2_nitrogen_config",
    "topic": "Atomic Structure & Electron Configurations",
    "difficulty_level": "Easy",
    "question_text": "What is the ground-state electron configuration of a nitrogen atom?",
    "question_smiles": "[N]",
    "options": [
      {
        "option_id": "A",
        "text": "$1s^2 2s^2 2p^3$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$1s^2 2s^2 2p^2$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$1s^2 2s^1 2p^4$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$1s^2 2s^2 2p^4$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The same filling rules apply to every second-row atom; only the electron count changes. Nitrogen is element 7, so the superscripts in a correct ground-state configuration must add to seven.",
      "approach": "Step 1: Nitrogen's atomic number is 7, so a neutral atom has 7 electrons.\nStep 2: Fill 1s with two and 2s with two, accounting for four.\nStep 3: The remaining three occupy the three 2p orbitals singly, one electron in each with parallel spins, which is the half-filled 2p subshell.",
      "note": "Those three singly occupied 2p orbitals are why nitrogen forms three bonds and keeps one lone pair - the pattern behind every amine in this course. Counting unpaired electrons predicts an atom's usual number of bonds before you know any hybridization at all.",
      "options": {
        "A": "Correct. Seven electrons fill 1s and 2s, leaving three that occupy the three 2p orbitals singly - a half-filled 2p subshell.",
        "B": "This totals six electrons, which is carbon rather than nitrogen. It is the configuration one element to the left in the period.",
        "C": "This totals seven, so the electron count is right, but a 2s electron has been promoted into 2p. The 2s orbital is lower in energy and fills completely first.",
        "D": "This totals eight electrons and describes oxygen, the element one place to the right. Add the superscripts and compare to the atomic number."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A single nitrogen atom shown on its own, with no bonds to other atoms."
  },
  {
    "question_id": "ch01_q3_oxygen_config",
    "topic": "Atomic Structure & Electron Configurations",
    "difficulty_level": "Easy",
    "question_text": "What is the ground-state electron configuration of an oxygen atom?",
    "question_smiles": "[O]",
    "options": [
      {
        "option_id": "A",
        "text": "$1s^2 2s^2 2p^4$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$1s^2 2s^2 2p^3$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$1s^2 2s^2 2p^5$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$1s^2 2s^1 2p^5$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Oxygen is element 8, so a ground-state configuration must account for eight electrons, filling the lowest orbitals first and only pairing within a 2p orbital once every 2p orbital holds one electron.",
      "approach": "Step 1: Oxygen's atomic number is 8, so a neutral atom has 8 electrons.\nStep 2: The 1s and 2s orbitals take two each, leaving four.\nStep 3: Those four go into 2p. Three occupy the separate 2p orbitals singly, and the fourth must then pair up with one of them, giving 2p to the fourth power with two unpaired electrons remaining.",
      "note": "Two unpaired electrons and two lone pairs is exactly the pattern behind alcohols, ethers and water: oxygen forms two bonds and keeps two lone pairs. Those lone pairs are what make oxygen nucleophilic and basic later in the course.",
      "options": {
        "A": "Correct. Eight electrons fill 1s and 2s and put four in 2p, where one orbital is doubly occupied and two hold single electrons.",
        "B": "This totals seven electrons, which is nitrogen. Oxygen has one more electron than this, and it goes into the 2p subshell.",
        "C": "This totals nine electrons and describes fluorine, one element to the right of oxygen in the period.",
        "D": "This totals eight, so the count is right, but it promotes a 2s electron into 2p. That is an excited state; the ground state fills 2s completely first."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A single oxygen atom shown on its own, with no bonds to other atoms."
  },
  {
    "question_id": "ch01_q4_phosphorus_config",
    "topic": "Atomic Structure & Electron Configurations",
    "difficulty_level": "Medium",
    "question_text": "Which of the following represents the valence electron configuration of a ground-state phosphorus atom (Z = 15)?",
    "question_smiles": "[P]",
    "options": [
      {
        "option_id": "A",
        "text": "$3s^2 3p^3$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$2s^2 2p^3$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$3s^2 3p^5$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$3s^1 3p^4$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Valence electrons are those in the outermost occupied shell - the highest principal quantum number. For a third-row element the valence shell is n = 3, and the filled inner shells are not part of the answer.",
      "approach": "Step 1: Phosphorus is element 15, so the full configuration is 1s2 2s2 2p6 3s2 3p3.\nStep 2: Identify the outermost shell. The largest principal quantum number present is 3, so the valence shell is 3s and 3p.\nStep 3: Read off just that shell: two electrons in 3s and three in 3p.",
      "note": "Phosphorus sits directly below nitrogen and so has the same number of valence electrons and the same usual bonding pattern. What differs is that the third shell has empty 3d orbitals available, so phosphorus can exceed an octet where nitrogen never can - the reason phosphorus ylides exist and nitrogen analogues do not.",
      "options": {
        "A": "Correct. Phosphorus is in period 3 and group 15, so its outermost shell holds two 3s electrons and three 3p electrons.",
        "B": "This is the right group but the wrong period. Three s and p electrons in the pattern shown belongs to nitrogen, whose valence shell is n = 2, not phosphorus.",
        "C": "This gives seven valence electrons, which is chlorine. Phosphorus has five valence electrons, matching its group number.",
        "D": "This totals five valence electrons, so the count is right, but it leaves 3s half empty while filling 3p further. The lower-energy 3s fills completely first."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A single phosphorus atom shown on its own, with no bonds to other atoms."
  },
  {
    "question_id": "ch01_q5_carbon_excited",
    "topic": "Atomic Structure & Electron Configurations",
    "difficulty_level": "Medium",
    "question_text": "Which configuration represents an excited state of a neutral carbon atom?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "$1s^2 2s^1 2p^3$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$1s^2 2s^2 2p^2$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$1s^2 2s^2 2p^1$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$1s^2 2s^2 2p^3$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An excited state has the correct number of electrons for the element but distributes them into a higher-energy arrangement than the ground state. So a candidate must be checked twice: does the electron count match the element, and is the arrangement something other than the lowest-energy one?",
      "approach": "Step 1: Fix the target. Carbon has 6 electrons, so any excited state of carbon must also total 6.\nStep 2: Establish the ground state for comparison: 1s2 2s2 2p2.\nStep 3: Test each candidate. Reject anything whose superscripts do not sum to 6, since that is a different element rather than an excited carbon. Of what remains, the excited one is the arrangement that has promoted an electron to a higher orbital.",
      "note": "Promoting a 2s electron to 2p is often shown as the first step in a hybridization story, but treat that as bookkeeping rather than a real intermediate. Nothing measures a carbon atom sitting in that state; hybrid orbitals are a model for the bonded molecule, not a sequence of events.",
      "options": {
        "A": "Correct. This totals six electrons, so it is still carbon, and one 2s electron has been promoted into 2p - a higher-energy arrangement than the ground state.",
        "B": "This totals six and so is carbon, but it is the ground-state configuration itself: the lowest-energy arrangement, which is precisely what an excited state is not.",
        "C": "This totals five electrons, so it describes boron rather than any state of carbon. Check the electron count before judging whether an arrangement is excited.",
        "D": "This totals seven electrons, which is nitrogen. Changing the element is not the same as exciting the atom you started with."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch01_q6_hybrid_methane",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Easy",
    "question_text": "What is the hybridization and bond angle around the carbon atom in methane (CH4)?",
    "question_smiles": "C",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^3$, $109.5^\\circ$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$sp^2$, $120^\\circ$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$sp$, $180^\\circ$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$sp^3$, $120^\\circ$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hybridization and geometry are two readings of the same fact: how many groups an atom must point at. Count sigma bonds plus lone pairs, and both the orbital label and the ideal bond angle follow from that one number.",
      "approach": "Step 1: Count what the carbon in methane points at: four C-H sigma bonds, no lone pairs. That is four groups.\nStep 2: Four groups need four equivalent hybrid orbitals, made from one s and three p orbitals - sp3.\nStep 3: Four equivalent orbitals repel each other into a tetrahedron, which places them at 109.5 degrees apart.",
      "note": "The 109.5 degree figure is a geometric consequence of putting four points as far apart as possible on a sphere, not a fact about carbon in particular. Any atom with four equivalent groups approaches it, and any lone pair among those four pushes the bonded angles below it.",
      "options": {
        "A": "Correct. Four sigma bonds and no lone pairs give four sp3 hybrid orbitals arranged tetrahedrally, 109.5 degrees apart.",
        "B": "sp2 with 120 degrees describes three groups in a plane, which would require carbon to bond to only three things. Methane's carbon bonds to four.",
        "C": "sp with 180 degrees describes two groups on opposite sides, the arrangement in a linear molecule. Methane has four bonds, not two.",
        "D": "The hybridization here is right but paired with the wrong angle. sp3 is tetrahedral at 109.5 degrees; 120 degrees belongs to the trigonal planar sp2 case."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A single carbon atom bonded to four hydrogen atoms."
  },
  {
    "question_id": "ch01_q7_hybrid_ethylene",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Easy",
    "question_text": "What is the hybridization and molecular geometry around the carbons in ethylene (H2C=CH2)?",
    "question_smiles": "C=C",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^2$, trigonal planar",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$sp^3$, tetrahedral",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$sp$, linear",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$sp^2$, linear",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Only sigma bonds and lone pairs are counted when assigning hybridization. A double bond contributes one sigma bond to that count; its pi bond is built from a leftover unhybridized p orbital and does not add a group.",
      "approach": "Step 1: Look at one ethylene carbon. It has two C-H sigma bonds and one C-C sigma bond from the double bond, so three groups.\nStep 2: Three groups need three hybrid orbitals, one s and two p - sp2.\nStep 3: Three orbitals spread as far apart as possible within a plane, giving trigonal planar geometry at about 120 degrees. The unused p orbital stands perpendicular to that plane and forms the pi bond.",
      "note": "Because the pi bond comes from sideways overlap of two parallel p orbitals, twisting one end of the molecule breaks that overlap. That is why there is no free rotation about a double bond, and it is the structural basis of cis-trans isomerism in Chapter 7.",
      "options": {
        "A": "Correct. Three sigma bonds and no lone pairs give sp2 hybridization and a trigonal planar arrangement, with the remaining p orbital forming the pi bond.",
        "B": "This is the count you get by treating the double bond as two separate groups. A double bond is one sigma plus one pi and contributes a single group to the hybridization count.",
        "C": "sp and linear would require each carbon to point at only two things. An ethylene carbon points at three: two hydrogens and the other carbon.",
        "D": "The hybridization is right but the geometry does not follow from it. Three equivalent sp2 orbitals arrange trigonally in a plane; linear geometry belongs to the two-group sp case."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two carbon atoms joined by a double bond, with two hydrogen atoms on each carbon."
  },
  {
    "question_id": "ch01_q8_hybrid_acetylene",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Easy",
    "question_text": "What is the hybridization and bond angle of the carbon atoms in acetylene (HC#CH)?",
    "question_smiles": "C#C",
    "options": [
      {
        "option_id": "A",
        "text": "$sp$, $180^\\circ$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$sp^2$, $120^\\circ$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$sp^3$, $109.5^\\circ$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$sp$, $120^\\circ$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A triple bond is one sigma bond plus two pi bonds. Only the sigma contributes to the group count, so the two pi bonds sit in unhybridized p orbitals and leave the hybridization determined by everything else the atom points at.",
      "approach": "Step 1: Look at one acetylene carbon. It has one C-H sigma bond and one C-C sigma bond from the triple bond, and no lone pairs - two groups.\nStep 2: Two groups need two hybrid orbitals, one s and one p - sp.\nStep 3: Two orbitals get as far apart as possible by pointing in opposite directions, which is 180 degrees and makes the whole molecule linear. The two remaining p orbitals, perpendicular to each other, form the two pi bonds.",
      "note": "An sp carbon holds its electrons in orbitals with 50 percent s character, much closer to the nucleus than sp3's 25 percent. That is why a terminal alkyne C-H is far more acidic than an alkane C-H, which is the property Chapter 9 exploits to make acetylide nucleophiles.",
      "options": {
        "A": "Correct. Two sigma bonds and no lone pairs give sp hybridization, and two orbitals point in opposite directions at 180 degrees.",
        "B": "sp2 at 120 degrees describes three groups in a plane. An acetylene carbon points at only two things, one hydrogen and one carbon.",
        "C": "sp3 at 109.5 degrees describes four groups. Counting the triple bond as three separate groups produces this error; it contributes only one.",
        "D": "The hybridization is right but the angle does not match it. Two sp orbitals oppose each other at 180 degrees; 120 degrees belongs to trigonal planar sp2."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two carbon atoms joined by a triple bond, with one hydrogen atom on each carbon."
  },
  {
    "question_id": "ch01_q9_hybrid_allene_center",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Hard",
    "question_text": "What is the hybridization of the central carbon in allene (H2C=C=CH2)?",
    "question_smiles": "C=C=C",
    "options": [
      {
        "option_id": "A",
        "text": "$sp$ (bonded to two atoms, no lone pairs)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$sp^2$ (shares two double bonds)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$sp^3$ (shares four bonds total)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$sp^2d$ (expanded octet geometry)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hybridization is set by the number of groups an atom points at, counting each multiple bond once. An atom in the middle of two double bonds still points at only two neighbours, however many bonds join them.",
      "approach": "Step 1: Identify what the central carbon is attached to: the two terminal carbons, and nothing else. It carries no hydrogens and no lone pairs.\nStep 2: That is two groups, so two hybrid orbitals are needed - one s and one p, giving sp.\nStep 3: Two sp orbitals point in opposite directions, so the C=C=C unit is linear at 180 degrees. The two p orbitals left unhybridized are perpendicular to each other, and each forms one of the two pi bonds.",
      "note": "A carbon carrying two double bonds is called cumulated, and such arrangements are strained and uncommon compared with the conjugated dienes of Chapter 14, where the double bonds alternate with a single bond instead of sharing a carbon.",
      "options": {
        "A": "Correct. The central carbon points at just two neighbours, so it needs two hybrid orbitals and is sp, making the three-carbon unit linear.",
        "B": "This counts bonds rather than groups. Two double bonds are still only two neighbours; the extra pi bonds live in unhybridized p orbitals and add nothing to the count.",
        "C": "Four bonds are indeed present, but the central carbon is attached to only two atoms. sp3 would require four separate neighbours or lone pairs.",
        "D": "Carbon cannot be sp2d. Expanding beyond an octet needs d orbitals in the valence shell, and a second-row element has only 2s and 2p available."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A chain of three carbons drawn with two adjacent double bonds, with two hydrogen atoms on each end carbon and none on the middle carbon."
  },
  {
    "question_id": "ch01_q10_hybrid_allene_terminal",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Medium",
    "question_text": "What is the hybridization of the terminal carbons in allene (H2C=C=CH2)?",
    "question_smiles": "C=C=C",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^2$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$sp$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$sp^3$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$sp^3d$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hybridization follows from the number of groups a carbon must point at, not from how many bonds it has. Count sigma bonds plus lone pairs on the atom in question; each of those needs its own hybrid orbital, and the pi bonds are left over, built from unhybridized p orbitals.",
      "approach": "Step 1: Pick the atom the question actually asks about. Allene has two different kinds of carbon, and the terminal ones are asked here.\nStep 2: Count what a terminal carbon points at: two C-H sigma bonds and one C-C sigma bond to the central carbon. That is three sigma bonds and no lone pairs, so three hybrid orbitals are needed.\nStep 3: Three hybrid orbitals means one s and two p combine: sp2, trigonal planar, roughly 120 degrees. The one leftover p orbital forms the pi half of the double bond.",
      "note": "The central carbon is the sp one: it points at only two things, so it is linear. That difference has a consequence McMurry returns to in Chapter 5. Because the central carbon uses two perpendicular p orbitals for its two pi bonds, the two terminal CH2 groups lie in perpendicular planes. Give the ends different substituents and the molecule becomes chiral with no stereocenter at all.",
      "options": {
        "A": "Correct. A terminal carbon points at three things - two hydrogens and the central carbon - so it needs three hybrid orbitals and is sp2. Its remaining p orbital makes the pi bond.",
        "B": "This is the hybridization of the central carbon, not the terminal ones. The middle carbon points at only two atoms, so it is sp and linear. Read which carbon the question names before counting.",
        "C": "sp3 would mean four sigma bonds or lone pairs, which is what a saturated carbon has. A terminal allene carbon has only three sigma bonds, and it must keep one p orbital unhybridized to make the double bond at all.",
        "D": "Carbon cannot be sp3d. Expanding past an octet requires d orbitals in the valence shell, and a period 2 element has only 2s and 2p available. This option is impossible for any carbon, in any molecule."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A chain of three carbons drawn with two adjacent double bonds, C=C=C, with two hydrogen atoms on each of the end carbons and none on the middle carbon."
  },
  {
    "question_id": "ch01_q11_lone_pair_effect",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Medium",
    "question_text": "Why is the bond angle in water (H2O) (104.5 degrees) smaller than the bond angle in ammonia (NH3) (107.3 degrees)?",
    "question_smiles": "O",
    "options": [
      {
        "option_id": "A",
        "text": "Oxygen has two lone pairs which repel bonding pairs more strongly than nitrogen's single lone pair.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Oxygen is less electronegative than nitrogen.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ammonia undergoes $sp^2$ hybridization while water is $sp^3$ hybridized.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The hydrogen atoms in water are smaller than those in ammonia.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "VSEPR treats a lone pair as taking more angular room than a bonding pair, because it is held by one nucleus rather than shared between two. The repulsion order is lone pair to lone pair, then lone pair to bonding pair, then bonding pair to bonding pair.",
      "approach": "Step 1: Count groups on each central atom. Nitrogen in ammonia has three bonds and one lone pair; oxygen in water has two bonds and two lone pairs. Both are four groups, so both start from a tetrahedral parent shape.\nStep 2: Compare how many of those groups are lone pairs. Ammonia has one, water has two.\nStep 3: Each lone pair squeezes the bonding pairs closer together, so the angle falls further below the ideal 109.5 with each one added: 107.3 for ammonia's one lone pair, 104.5 for water's two.",
      "note": "The trend runs the other way too - methane has no lone pairs and sits at the full 109.5 degrees. Reading a bond angle backwards to count lone pairs is a quick structural check you can apply to any small molecule.",
      "options": {
        "A": "Correct. Water has two lone pairs to ammonia's one, and each compresses the bonding pairs further, so water's angle is the smaller of the two.",
        "B": "Oxygen is in fact more electronegative than nitrogen, not less, so this reverses the periodic trend. Electronegativity is also not what sets the angle here; the number of lone pairs is.",
        "C": "Both molecules have four groups around the central atom and both are sp3 hybridized. If ammonia were sp2 its bond angle would be near 120 degrees, well above the value given.",
        "D": "Hydrogen atoms are the same size in both molecules. The size of the outer atoms is not the variable here; what differs between water and ammonia is the lone pair count."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A single oxygen atom with two hydrogen atoms attached, drawn as a bent molecule."
  },
  {
    "question_id": "ch01_q12_hybrid_acetonitrile",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Medium",
    "question_text": "In acetonitrile (CH3C#N), what is the hybridization of the methyl carbon, nitrile carbon, and nitrogen atom, respectively?",
    "question_smiles": "CC#N",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^3$, $sp$, $sp$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$sp^3$, $sp^2$, $sp$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$sp^2$, $sp$, $sp$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$sp^3$, $sp$, $sp^2$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A question naming three atoms is three separate counting problems, not one. Assign each atom independently by counting its own sigma bonds and lone pairs, and remember that a lone pair occupies a hybrid orbital exactly as a bond does.",
      "approach": "Step 1: The methyl carbon has three C-H bonds and one bond to the neighbouring carbon - four groups, so sp3.\nStep 2: The nitrile carbon has one sigma bond to the methyl carbon and one sigma bond to nitrogen from the triple bond - two groups, so sp.\nStep 3: The nitrogen has one sigma bond to carbon plus one lone pair - also two groups, so sp. The two pi bonds of the triple bond sit in unhybridized p orbitals on both atoms and change nothing.",
      "note": "Nitrogen's lone pair is easy to forget because it is not drawn as a bond, but it occupies a hybrid orbital and counts. Missing it would give sp instead of the correct answer only by accident here; on an amine it would change the assignment outright.",
      "options": {
        "A": "Correct. Four groups on the methyl carbon give sp3; two groups on each of the nitrile carbon and the nitrogen give sp for both.",
        "B": "The nitrile carbon is assigned sp2, which would require three groups. It has only two - the methyl carbon and the nitrogen - because a triple bond counts once.",
        "C": "The methyl carbon is assigned sp2, but it bonds to four things: three hydrogens and a carbon. Four groups always mean sp3.",
        "D": "The nitrogen is assigned sp2. Counting only its single sigma bond and forgetting the lone pair gives too few groups; with the lone pair included it has two, making it sp."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A methyl carbon bonded to a second carbon, which is joined to a nitrogen atom by a triple bond."
  },
  {
    "question_id": "ch01_q13_hybrid_carbonyl",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Easy",
    "question_text": "What is the hybridization and bond angle around the carbonyl carbon in formaldehyde (H2C=O)?",
    "question_smiles": "C=O",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^2$, $120^\\circ$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$sp^3$, $109.5^\\circ$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$sp$, $180^\\circ$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$sp^2$, $109.5^\\circ$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The carbonyl carbon is counted like any other: sigma bonds plus lone pairs. The C=O double bond supplies one sigma bond to that total, and its pi bond comes from a leftover p orbital.",
      "approach": "Step 1: Count the groups on the carbonyl carbon of formaldehyde: two C-H sigma bonds and one C-O sigma bond.\nStep 2: Three groups require three hybrid orbitals, one s and two p, which is sp2.\nStep 3: Three equivalent orbitals spread within a plane at roughly 120 degrees, making the whole molecule planar. The unhybridized p orbital, perpendicular to that plane, forms the pi bond with oxygen.",
      "note": "That perpendicular p orbital is the carbonyl's reactive feature: it is where the pi antibonding orbital sits, and it is what a nucleophile attacks from above or below the plane in every carbonyl addition later in the course.",
      "options": {
        "A": "Correct. Three sigma bonds and no lone pairs on the carbonyl carbon give sp2 hybridization and a trigonal planar arrangement near 120 degrees.",
        "B": "sp3 at 109.5 degrees would need four groups. Counting the double bond twice produces this answer; it contributes one sigma bond, not two.",
        "C": "sp at 180 degrees describes an atom pointing at only two things. The carbonyl carbon here points at three: two hydrogens and the oxygen.",
        "D": "The hybridization is right but the angle belongs to a different geometry. Three sp2 orbitals in a plane sit near 120 degrees; 109.5 is the tetrahedral value."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A carbon atom joined to an oxygen atom by a double bond, with two hydrogen atoms on the carbon."
  },
  {
    "question_id": "ch01_q14_hybrid_oxygen",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Medium",
    "question_text": "What is the hybridization of the oxygen atom in dimethyl ether (CH3-O-CH3)?",
    "question_smiles": "COC",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^3$ (2 bonds, 2 lone pairs)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$sp^2$ (delocalized lone pair)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$sp$ (linear configuration)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Unhybridized (pure $p$ orbitals used for bonding)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Lone pairs occupy hybrid orbitals and count toward the total just as bonds do. An atom with two bonds and two lone pairs has four groups, exactly like an atom with four bonds.",
      "approach": "Step 1: Count what the ether oxygen holds: two sigma bonds, one to each methyl carbon.\nStep 2: Add its lone pairs. Oxygen has six valence electrons; four are used in the two bonds' share, leaving two lone pairs.\nStep 3: Two bonds plus two lone pairs is four groups, so the oxygen is sp3, with the bonded atoms forming a bent arrangement below the ideal tetrahedral angle.",
      "note": "Contrast this with an amide or ester oxygen, where a lone pair can delocalize into an adjacent pi system and the atom flattens toward sp2. A plain ether has no such pi system next to it, so nothing pulls its lone pairs out of their hybrid orbitals.",
      "options": {
        "A": "Correct. Two sigma bonds plus two lone pairs make four groups, so the oxygen is sp3 and the C-O-C arrangement is bent.",
        "B": "Delocalization would require a neighbouring pi system for the lone pair to enter. Dimethyl ether has only sp3 methyl groups on either side, so there is nothing to conjugate with.",
        "C": "sp would mean two groups in total. That ignores both lone pairs; counting only the bonds is the usual source of this error.",
        "D": "Using pure p orbitals for bonding would force a 90 degree C-O-C angle, well below what is observed. The bonding orbitals here are hybrids, not unmixed p orbitals."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An oxygen atom bonded to two methyl carbons, each carrying three hydrogen atoms."
  },
  {
    "question_id": "ch01_q15_hybrid_urea",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Hard",
    "question_text": "In urea (NH2CONH2), considering resonance delocalization, what is the best description of the hybridization of the nitrogen atoms?",
    "question_smiles": "NC(N)=O",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^2$ (lone pair is delocalized into the carbonyl $\\pi$ system)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$sp^3$ (3 single bonds, 1 lone pair)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$sp$ (linear resonance contributor)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "One is $sp^2$ and the other is $sp^3$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Counting groups gives a first guess, but when a lone pair sits next to a pi system the atom can rehybridize so that the lone pair occupies a p orbital and joins the delocalization. Whether it does is a question about the neighbouring atoms, not about the lone pair alone.",
      "approach": "Step 1: Count naively. Each urea nitrogen has three sigma bonds - two N-H and one N-C - plus one lone pair, which suggests four groups and sp3.\nStep 2: Check the neighbour. The carbon next door is a carbonyl carbon with a pi bond available to accept electron density.\nStep 3: The nitrogen rehybridizes to sp2 so its lone pair occupies a p orbital aligned with the carbonyl pi system, letting it delocalize onto the oxygen. Both nitrogens are equivalent by symmetry, so both do this and both become planar.",
      "note": "This delocalization is the amide bond, and it is why peptide bonds are planar and rotate only sluggishly. That single structural fact organises much of protein conformation in Chapter 26.",
      "options": {
        "A": "Correct. Each nitrogen flattens to sp2 so its lone pair can occupy a p orbital and delocalize into the carbonyl pi system, which is worth more than the geometry it gives up.",
        "B": "This is the answer from counting groups alone - three bonds and a lone pair. It ignores that the adjacent carbonyl offers a pi system, which is exactly the situation where naive counting fails.",
        "C": "sp would require the nitrogen to point at two things. Each urea nitrogen bonds to three: two hydrogens and the carbonyl carbon.",
        "D": "The two nitrogens are equivalent by the molecule's symmetry - both sit on the same carbonyl carbon in identical environments - so no argument distinguishes one from the other."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A central carbon double bonded to an oxygen and single bonded to two nitrogen atoms, each nitrogen carrying two hydrogens."
  },
  {
    "question_id": "ch01_q16_sigma_pi_ethylene",
    "topic": "Sigma & Pi Bonding",
    "difficulty_level": "Easy",
    "question_text": "How many sigma (\\(\\sigma\\)) and pi (\\(\\pi\\)) bonds are in one molecule of ethylene (H2C=CH2)?",
    "question_smiles": "C=C",
    "options": [
      {
        "option_id": "A",
        "text": "5 \\(\\sigma\\) and 1 \\(\\pi\\)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "4 \\(\\sigma\\) and 2 \\(\\pi\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "6 \\(\\sigma\\) and 0 \\(\\pi\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5 \\(\\sigma\\) and 2 \\(\\pi\\)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Count sigma bonds by counting connections: every pair of bonded atoms is joined by exactly one. Then count pi bonds as the bonds beyond the first within each of those pairs.",
      "approach": "Step 1: Count the C-H connections. Ethylene has four hydrogens, each joined to a carbon by a single bond, giving four sigma bonds.\nStep 2: Add the carbon-carbon connection. The first of its two bonds is sigma, bringing the total to five.\nStep 3: The second bond of the double bond is the pi bond, and it is the only one in the molecule.",
      "note": "A useful cross-check: the number of sigma bonds equals the number of lines you would draw in a skeletal structure if every double bond were reduced to a single one. Anything left over is pi.",
      "options": {
        "A": "Correct. Four C-H sigma bonds plus one C-C sigma bond make five, and the double bond's second component is the single pi bond.",
        "B": "This undercounts the sigma bonds and doubles the pi. There are four C-H bonds alone, so the sigma total cannot be as low as four for a molecule with five connections.",
        "C": "This treats the double bond as two sigma bonds. Only one bond between any pair of atoms can be sigma; the rest are pi.",
        "D": "The sigma count is right, but a double bond contains one pi bond, not two. Two pi bonds would make it a triple bond."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two carbon atoms joined by a double bond, with two hydrogen atoms on each carbon."
  },
  {
    "question_id": "ch01_q17_sigma_pi_acetylene",
    "topic": "Sigma & Pi Bonding",
    "difficulty_level": "Easy",
    "question_text": "How many sigma (\\(\\sigma\\)) and pi (\\(\\pi\\)) bonds are present in one molecule of acetylene (HC#CH)?",
    "question_smiles": "C#C",
    "options": [
      {
        "option_id": "A",
        "text": "3 \\(\\sigma\\) and 2 \\(\\pi\\)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2 \\(\\sigma\\) and 3 \\(\\pi\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4 \\(\\sigma\\) and 1 \\(\\pi\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3 \\(\\sigma\\) and 1 \\(\\pi\\)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The first bond between any two atoms is always a sigma bond, formed by head-on orbital overlap. Every additional bond in the same pair is a pi bond, formed by sideways overlap of parallel p orbitals. So a double bond is one sigma and one pi, and a triple bond is one sigma and two pi.",
      "approach": "Step 1: Count the C-H bonds. Acetylene has two hydrogens, each held by a single bond, giving two sigma bonds.\nStep 2: Take the carbon-carbon triple bond apart. The first of those three is sigma; the other two are pi.\nStep 3: Add them. Sigma: two C-H plus one C-C, so three. Pi: the two remaining in the triple bond.",
      "note": "This counting rule never changes, so it is worth internalising now: a molecule's sigma count equals its number of connections, and its pi count equals the number of bonds beyond the first in each pair. It is also why sigma bonds allow free rotation and pi bonds do not - sideways overlap is lost the moment you twist, which becomes the whole basis of cis-trans isomerism in Chapter 7.",
      "options": {
        "A": "Correct. Two C-H sigma bonds plus one C-C sigma bond makes three sigma; the two extra bonds in the triple bond are the two pi.",
        "B": "The counts are the right pair of numbers but swapped. Sigma bonds must at least equal the number of connected atom pairs, and acetylene has three such pairs - two C-H and one C-C - so sigma cannot be fewer than three.",
        "C": "This counts four sigma bonds, but acetylene has only three connections in total. It is the answer you get by treating the triple bond as though it contributed two sigma bonds; only ever one bond per pair of atoms is sigma.",
        "D": "This treats the carbon-carbon bond as a double rather than a triple, giving one pi instead of two. The sigma count of three is right, but a triple bond always carries two pi bonds."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two carbon atoms joined by a triple bond, drawn as three parallel lines, with one hydrogen attached to each carbon."
  },
  {
    "question_id": "ch01_q18_sigma_pi_acrylonitrile",
    "topic": "Sigma & Pi Bonding",
    "difficulty_level": "Medium",
    "question_text": "How many sigma (\\(\\sigma\\)) and pi (\\(\\pi\\)) bonds are present in acrylonitrile (H2C=CH-C#N)?",
    "question_smiles": "C=CC#N",
    "options": [
      {
        "option_id": "A",
        "text": "6 \\(\\sigma\\) and 3 \\(\\pi\\)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "6 \\(\\sigma\\) and 2 \\(\\pi\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5 \\(\\sigma\\) and 4 \\(\\pi\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "7 \\(\\sigma\\) and 3 \\(\\pi\\)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "With two different multiple bonds in one molecule, work connection by connection rather than trying to see the answer whole. Each bonded pair contributes one sigma bond, and each contributes one pi bond for every bond it has beyond the first.",
      "approach": "Step 1: Count the hydrogens. Acrylonitrile has three C-H bonds, all sigma.\nStep 2: Count the heavy-atom connections. There are three: the C=C, the C-C single bond, and the C-N triple bond. Each contributes one sigma, bringing sigma to six.\nStep 3: Count the extra bonds. The double bond contributes one pi and the triple bond contributes two, giving three pi in total.",
      "note": "The double bond and the nitrile are separated by a single bond, so their pi systems are conjugated. That conjugation is what makes acrylonitrile a good Michael acceptor and a useful monomer, and it is the arrangement Chapter 14 takes up in detail.",
      "options": {
        "A": "Correct. Three C-H plus three heavy-atom connections give six sigma bonds; one pi from the double bond and two from the triple bond give three pi.",
        "B": "The sigma count is right but a pi bond has been missed. A triple bond carries two pi bonds, not one, so the total is three rather than two.",
        "C": "This has too few sigma and too many pi. There are six bonded pairs in the molecule and each must contribute exactly one sigma bond.",
        "D": "Seven sigma bonds would require seven bonded pairs. Counting three C-H bonds and three heavy-atom connections gives six; acrylonitrile has three hydrogens, not four."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-carbon chain with a double bond between the first two carbons and a triple bond from the third carbon to a nitrogen atom."
  },
  {
    "question_id": "ch01_q19_allene_pi_overlap",
    "topic": "Sigma & Pi Bonding",
    "difficulty_level": "Hard",
    "question_text": "Which orbitals overlap to form the two pi (\\(\\pi\\)) bonds in allene (H2C=C=CH2)?",
    "question_smiles": "C=C=C",
    "options": [
      {
        "option_id": "A",
        "text": "The central carbon uses orthogonal \\(2p_y\\) and \\(2p_z\\) orbitals to overlap with terminal carbon \\(2p\\) orbitals.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The central carbon uses hybrid \\(sp^2\\) orbitals to form the \\(\\pi\\) bonds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The terminal carbons overlap their \\(sp^2\\) orbitals directly with each other.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The \\(\\pi\\) bonds are formed by \\(sp\\)-\\(sp\\) overlap.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Pi bonds are made only from unhybridized p orbitals overlapping sideways. Hybrid orbitals point along internuclear axes and can only form sigma bonds, so any answer describing a pi bond built from hybrids is ruled out before the geometry is even considered.",
      "approach": "Step 1: Assign the central carbon. It points at two atoms, so it is sp - built from one s and one p orbital, leaving two p orbitals unhybridized.\nStep 2: Note how those two leftover p orbitals sit. Being different p orbitals on the same atom, they are perpendicular to one another.\nStep 3: Each overlaps sideways with a p orbital on one terminal carbon, forming one pi bond on each side. Because the two central p orbitals are perpendicular, the two pi bonds lie in perpendicular planes.",
      "note": "This is why allene is not flat. The two CH2 groups end up in planes at right angles, so an allene bearing different substituents on each end is chiral despite having no stereocenter at all - a case Chapter 5 uses to show that a stereocenter is not required for handedness.",
      "options": {
        "A": "Correct. The sp central carbon keeps two mutually perpendicular p orbitals, each overlapping sideways with a p orbital on one terminal carbon.",
        "B": "Hybrid orbitals point directly at their neighbours and so form sigma bonds only. A pi bond requires sideways overlap, which only unhybridized p orbitals provide.",
        "C": "The terminal carbons are not bonded to each other at all - the central carbon lies between them - so no overlap between them of any kind forms a bond here.",
        "D": "sp-sp overlap would be head-on between two hybrid orbitals, which produces a sigma bond. It cannot describe a pi bond."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A chain of three carbons drawn with two adjacent double bonds, with two hydrogen atoms on each end carbon."
  },
  {
    "question_id": "ch01_q20_orbital_overlap_single",
    "topic": "Sigma & Pi Bonding",
    "difficulty_level": "Medium",
    "question_text": "What type of orbital overlap describes the C-C single bond in propene (CH3-CH=CH2)?",
    "question_smiles": "CC=C",
    "options": [
      {
        "option_id": "A",
        "text": "\\(sp^3\\)-\\(sp^2\\)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "\\(sp^3\\)-\\(sp^3\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "\\(sp^2\\)-\\(sp^2\\)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "\\(sp^3\\)-\\(p\\)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A sigma bond is described by the two orbitals that overlap head-on to form it, one from each atom. So naming the overlap means assigning hybridization to both atoms separately and then reading the pair.",
      "approach": "Step 1: Identify the bond in question. In propene the C-C single bond joins the methyl carbon to the nearer alkene carbon.\nStep 2: Assign the methyl carbon. It bonds to three hydrogens and one carbon, so four groups and sp3.\nStep 3: Assign the alkene carbon it joins. That carbon has one C-H bond, the single bond to the methyl group, and the double bond to the terminal carbon - three groups, so sp2. The overlap is therefore sp3 with sp2.",
      "note": "The two carbons in a single bond need not be hybridized the same way, and the mismatch has consequences: bonds between more s-rich orbitals are shorter and stronger, so this bond is slightly shorter than the C-C bond in ethane.",
      "options": {
        "A": "Correct. The methyl carbon is sp3 with four groups and the alkene carbon it joins is sp2 with three, so the sigma bond is an sp3-sp2 overlap.",
        "B": "This would be right for the C-C bond in ethane or propane, where both carbons are saturated. Here one of the two carbons is part of the double bond and has only three groups.",
        "C": "sp2-sp2 would describe a bond between two alkene carbons. The methyl carbon is not part of the double bond and bonds to four things.",
        "D": "An unhybridized p orbital on the alkene carbon is used for the pi bond, not for this sigma bond. Sigma overlap here is between two hybrid orbitals."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-carbon chain with a single bond between the first two carbons and a double bond between the second and third."
  },
  {
    "question_id": "ch01_q21_bond_strength_order",
    "topic": "Bond Properties",
    "difficulty_level": "Medium",
    "question_text": "Which of the following correctly orders the carbon-carbon bonds in terms of increasing bond dissociation energy (weakest first)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Ethane < Ethylene < Acetylene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetylene < Ethylene < Ethane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethane < Acetylene < Ethylene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Ethylene < Ethane < Acetylene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Bond dissociation energy measures how much energy is needed to break a bond homolytically. Adding pi bonds between the same two atoms adds to the total that must be broken, so bond order and bond strength rise together.",
      "approach": "Step 1: Identify the carbon-carbon bond order in each molecule: ethane is a single bond, ethylene a double, acetylene a triple.\nStep 2: Recognise that each additional pi bond contributes further to holding the atoms together, so more bonds means more energy required to separate them.\nStep 3: Order from weakest to strongest by bond order: the single bond of ethane, then the double bond of ethylene, then the triple bond of acetylene.",
      "note": "The increments are not equal. Going from single to double adds far more than going from double to triple, because the second pi bond overlaps less effectively - which is part of why alkynes are more reactive than the raw bond energy suggests.",
      "options": {
        "A": "Correct. Bond order rises from single to double to triple across these three, and dissociation energy rises with it, so ethane is weakest and acetylene strongest.",
        "B": "This is the order exactly reversed. It would mean a triple bond is easier to break than a single one, which no amount of added pi bonding could produce.",
        "C": "This places acetylene's triple bond as weaker than ethylene's double bond. A triple bond has one more pi component and is the stronger of the two.",
        "D": "This places ethylene's double bond below ethane's single bond. Adding a pi bond to a single bond can only increase the energy needed to break the pair apart."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch01_q22_bond_length_order",
    "topic": "Bond Properties",
    "difficulty_level": "Medium",
    "question_text": "Which of the following correctly orders the carbon-carbon bonds in terms of increasing bond length (shortest first)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Acetylene < Ethylene < Ethane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethane < Ethylene < Acetylene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethylene < Acetylene < Ethane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acetylene < Ethane < Ethylene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Bond length runs opposite to bond order: the more bonds joining two atoms, the more strongly they are drawn together and the shorter the distance between them. Increasing s character in the hybrid orbitals pulls them closer still.",
      "approach": "Step 1: Assign bond order and hybridization: acetylene is a triple bond between sp carbons, ethylene a double bond between sp2 carbons, ethane a single bond between sp3 carbons.\nStep 2: Note that s orbitals sit closer to the nucleus than p, so a hybrid with more s character holds its electrons nearer the atom. That character falls from 50 percent in sp to 33 in sp2 to 25 in sp3.\nStep 3: Both effects point the same way, so length increases from acetylene to ethylene to ethane - roughly 1.20, 1.34 and 1.54 angstroms.",
      "note": "Because the two effects reinforce each other here, bond length is a reliable way to read hybridization off a structure. A carbon-carbon distance near 1.2 angstroms tells you the carbons are sp before you have looked at anything else.",
      "options": {
        "A": "Correct. The triple bond of acetylene is shortest and the single bond of ethane longest, with ethylene between them - about 1.20, 1.34 and 1.54 angstroms.",
        "B": "This is the reverse of the true order. It would mean a triple bond holds its atoms further apart than a single bond does.",
        "C": "This places ethylene's double bond as shorter than acetylene's triple bond. A triple bond is the shorter of the two, being both higher order and more s-rich.",
        "D": "This places ethane's single bond as shorter than ethylene's double bond. The single bond between two sp3 carbons is the longest of the three, not the middle one."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch01_q23_hybrid_character_length",
    "topic": "Bond Properties",
    "difficulty_level": "Hard",
    "question_text": "Why is the C-H bond in acetylene (HC#CH) shorter and stronger than the C-H bond in ethane (CH3CH3)?",
    "question_smiles": "C#C",
    "options": [
      {
        "option_id": "A",
        "text": "The carbon in acetylene is \\(sp\\) hybridized, which has more \\(s\\) character (50%), holding electrons closer to the nucleus.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetylene has a smaller steric number on carbon, reducing steric hindrance with hydrogen.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethane's carbon has a higher electronegativity, pushing hydrogen further away.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The hydrogen in acetylene is positively charged.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An s orbital has its greatest electron density at the nucleus, while a p orbital has a node there. A hybrid orbital's s character therefore controls how close to the nucleus it holds its electrons - and that distance is what bond length measures.",
      "approach": "Step 1: Assign the carbons. Acetylene's carbon is sp, built from one s and one p orbital, so it is 50 percent s in character. Ethane's is sp3, one s and three p, so 25 percent.\nStep 2: More s character means the bonding electrons sit closer to the carbon nucleus.\nStep 3: A shorter bond puts the nuclei nearer to the shared electrons and to each other, which also makes the bond harder to break. Both the shorter length and the greater strength follow from the same cause.",
      "note": "The same s character has a second consequence that pulls in a different direction: it makes the sp carbon effectively more electronegative, so it stabilises a negative charge left behind if the hydrogen leaves. That is why a terminal alkyne is far more acidic than an alkane despite having the stronger C-H bond.",
      "options": {
        "A": "Correct. An sp orbital is 50 percent s against sp3's 25 percent, so it holds the bonding electrons closer to the nucleus - a shorter and stronger bond.",
        "B": "Steric hindrance around a hydrogen atom is negligible in both molecules, and hybridization is not a steric effect. The difference here is in where the orbital holds its electrons.",
        "C": "This reverses the trend. The sp carbon of acetylene is the more electronegative of the two, precisely because of its higher s character.",
        "D": "The acetylenic hydrogen is indeed relatively acidic, but that is a consequence of the same s character rather than the cause of the short bond. A partial positive charge on hydrogen does not shorten a bond."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two carbon atoms joined by a triple bond, with one hydrogen atom on each carbon."
  },
  {
    "question_id": "ch01_q24_pi_bond_nature",
    "topic": "Sigma & Pi Bonding",
    "difficulty_level": "Medium",
    "question_text": "Which of the following statements best describes a pi (\\(\\pi\\)) bond?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "It is formed by the side-to-side overlap of parallel \\(p\\) orbitals, with electron density above and below the internuclear axis.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It is formed by head-on overlap of hybrid orbitals directly along the internuclear axis.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It is stronger than a sigma bond because of greater orbital overlap.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It allows free rotation of the bonded atoms.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sigma and pi bonds are distinguished by the geometry of the orbital overlap that forms them. Sigma overlap is head-on along the line joining the nuclei; pi overlap is sideways between orbitals parallel to each other and perpendicular to that line.",
      "approach": "Step 1: Recall where a pi bond comes from - two unhybridized p orbitals, one on each atom, left over after hybridization.\nStep 2: Those p orbitals stand parallel to each other and perpendicular to the internuclear axis, so they can only meet sideways.\nStep 3: Sideways overlap puts electron density in two lobes, one above and one below the axis, with a nodal plane containing the two nuclei.",
      "note": "That sideways geometry explains the properties as well as the shape. The overlap is poorer than head-on, so a pi bond is weaker; and twisting about the axis destroys the overlap, so rotation is blocked rather than free.",
      "options": {
        "A": "Correct. Two parallel p orbitals overlap sideways, placing electron density above and below the internuclear axis with a node along it.",
        "B": "This describes a sigma bond. Head-on overlap along the internuclear axis is exactly what distinguishes sigma from pi.",
        "C": "A pi bond is the weaker of the two. Sideways overlap is less effective than head-on, which is why the first bond between two atoms is always the sigma bond.",
        "D": "The opposite is true. Rotation would break the sideways overlap, so a pi bond restricts rotation - the basis of cis-trans isomerism."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch01_q25_homo_lumo_ethylene",
    "topic": "Molecular Orbital Theory",
    "difficulty_level": "Hard",
    "question_text": "In the molecular orbital description of the pi (\\(\\pi\\)) system of ethylene, what is the nature of the HOMO (Highest Occupied Molecular Orbital) in the ground state?",
    "question_smiles": "C=C",
    "options": [
      {
        "option_id": "A",
        "text": "A bonding \\(\\pi\\) orbital with zero vertical nodes between the carbons.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "An antibonding \\(\\pi^*\\) orbital with one vertical node.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A non-bonding orbital centered on one carbon.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A sigma bonding orbital.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Combining two atomic orbitals always produces two molecular orbitals: one bonding, lower in energy than the originals, and one antibonding, higher. In ethylene the two carbon p orbitals combine into a pi and a pi-star. The molecule's two pi electrons fill the lower one, so pi is the highest orbital that actually contains electrons.",
      "approach": "Step 1: Count the orbitals in the pi system. Two parallel p orbitals, one per carbon, give exactly two molecular orbitals.\nStep 2: Assign their character by nodes. In-phase combination gives pi, bonding, with electron density spread between the carbons and no node there. Out-of-phase gives pi-star, antibonding, with one node cutting between them.\nStep 3: Fill with the available electrons. A double bond supplies two pi electrons, which pair up in the lower orbital. That fills pi and leaves pi-star empty, so pi is the HOMO and pi-star is the LUMO.",
      "note": "This is not bookkeeping for its own sake. The HOMO is where a molecule keeps its most available electrons, so it is the electron pair the molecule donates - which is exactly why an alkene behaves as a nucleophile and attacks electrophiles in Chapter 8, rather than the other way round. Reactivity in the rest of the course reads off HOMO and LUMO.",
      "options": {
        "A": "Correct. The two pi electrons occupy the in-phase, bonding combination, which has no node between the carbons. It is filled and it is the highest such orbital, so it is the HOMO.",
        "B": "This describes the LUMO, not the HOMO. Pi-star is antibonding and does carry one node between the carbons, but in the ground state it is empty - and an empty orbital cannot be the highest *occupied* one.",
        "C": "A non-bonding orbital would have to sit on one carbon alone, but the two p orbitals here are equivalent and combine across both. A two-orbital pi system produces exactly one bonding and one antibonding orbital, with nothing non-bonding in between.",
        "D": "The sigma framework is occupied, but it lies well below the pi orbital in energy, so it is not the *highest* occupied one. The question asks specifically about the pi system, where sigma orbitals play no part."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two carbon atoms joined by a double bond, drawn as two parallel lines, with two hydrogen atoms on each carbon."
  },
  {
    "question_id": "ch01_q26_formal_charge_ammonium",
    "topic": "Formal Charges & Lewis Structures",
    "difficulty_level": "Easy",
    "question_text": "What is the formal charge on the nitrogen atom in the ammonium ion (NH4+)?",
    "question_smiles": "[NH4+]",
    "options": [
      {
        "option_id": "A",
        "text": "+1",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "0",
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
        "text": "+2",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Formal charge compares the electrons an atom actually has in a structure with the number it would own as a free atom. The arithmetic is: valence electrons, minus nonbonding electrons, minus the number of bonds.",
      "approach": "Step 1: Nitrogen's valence electron count is 5.\nStep 2: In the ammonium ion the nitrogen has no lone pairs, so its nonbonding electron count is 0.\nStep 3: It forms four N-H bonds. So the formal charge is 5 minus 0 minus 4, which is plus 1.",
      "note": "Worth committing to memory as a pattern rather than recomputing: a nitrogen with four bonds and no lone pair is always plus 1. Every quaternary ammonium salt and every protonated amine in this course shows it.",
      "options": {
        "A": "Correct. Five valence electrons, no lone pairs and four bonds give 5 minus 0 minus 4, which is plus 1.",
        "B": "A neutral nitrogen has three bonds and one lone pair. Adding a fourth bond and removing the lone pair changes the count, so this structure cannot be neutral.",
        "C": "A negative formal charge would require the nitrogen to hold more electrons than a free atom, which means lone pairs. This nitrogen has none.",
        "D": "Plus 2 would need a fifth bond or the loss of further electrons. Nitrogen cannot form five bonds; it has no d orbitals to expand its octet."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A nitrogen atom bonded to four hydrogen atoms, the whole ion drawn with a positive charge."
  },
  {
    "question_id": "ch01_q27_formal_charge_hydronium",
    "topic": "Formal Charges & Lewis Structures",
    "difficulty_level": "Easy",
    "question_text": "What is the formal charge on the oxygen atom in the hydronium ion (H3O+)?",
    "question_smiles": "[OH3+]",
    "options": [
      {
        "option_id": "A",
        "text": "+1",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "0",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "+2",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "-1",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The same formal-charge arithmetic applies to every atom: valence electrons minus nonbonding electrons minus bonds. What changes from atom to atom is the valence count and how many lone pairs survive in the structure.",
      "approach": "Step 1: Oxygen's valence electron count is 6.\nStep 2: In the hydronium ion the oxygen keeps one lone pair, which is 2 nonbonding electrons.\nStep 3: It forms three O-H bonds. The formal charge is 6 minus 2 minus 3, which is plus 1.",
      "note": "This is what a protonated alcohol or ether looks like too - an oxygen with three bonds and one lone pair carries plus 1. Recognising it on sight matters, because that is the intermediate in every acid-catalysed reaction of an alcohol you will meet.",
      "options": {
        "A": "Correct. Six valence electrons, one lone pair and three bonds give 6 minus 2 minus 3, which is plus 1.",
        "B": "Neutral oxygen has two bonds and two lone pairs. Here it has gained a third bond at the cost of a lone pair, so the count no longer balances at zero.",
        "C": "Plus 2 would require a fourth bond, leaving oxygen with no lone pairs at all. The structure shown has three bonds and retains one lone pair.",
        "D": "A negative charge would mean extra electrons relative to a free oxygen atom - three lone pairs and one bond, as in hydroxide. This oxygen has fewer, not more."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An oxygen atom bonded to three hydrogen atoms, the whole ion drawn with a positive charge."
  },
  {
    "question_id": "ch01_q28_formal_charge_nitromethane_N",
    "topic": "Formal Charges & Lewis Structures",
    "difficulty_level": "Medium",
    "question_text": "What is the formal charge on the nitrogen atom in nitromethane (CH3NO2)?",
    "question_smiles": "C[N+](=O)[O-]",
    "options": [
      {
        "option_id": "A",
        "text": "+1",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "0",
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
        "text": "+2",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Formal charge is assigned per atom from that atom's own bonds and lone pairs, independently of what the rest of the molecule is doing. A double bond counts as two bonds in the tally.",
      "approach": "Step 1: Nitrogen's valence electron count is 5.\nStep 2: In the nitro group the nitrogen carries no lone pair.\nStep 3: Count its bonds: one to the methyl carbon, two to the doubly bonded oxygen, and one to the singly bonded oxygen, making four. The formal charge is 5 minus 0 minus 4, which is plus 1.",
      "note": "There is no way to draw a nitro group with a neutral nitrogen. Giving it a second double bond would put ten electrons around a second-row atom, so the charge-separated form is not a stylistic choice but the only legitimate Lewis structure.",
      "options": {
        "A": "Correct. Four bonds and no lone pair on a five-valence-electron atom give 5 minus 0 minus 4, which is plus 1.",
        "B": "A neutral nitrogen needs three bonds and a lone pair. The nitro nitrogen has four bonds and none, and cannot be drawn otherwise without exceeding an octet.",
        "C": "A negative formal charge requires nonbonding electrons on the atom. This nitrogen has no lone pair to give it one.",
        "D": "Plus 2 would need five bonds to nitrogen, which a second-row element cannot form."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A methyl carbon bonded to a nitrogen, which is double bonded to one oxygen and single bonded to another; the nitrogen is drawn with a positive charge and the singly bonded oxygen with a negative charge."
  },
  {
    "question_id": "ch01_q29_formal_charge_nitromethane_O",
    "topic": "Formal Charges & Lewis Structures",
    "difficulty_level": "Medium",
    "question_text": "In the major resonance contributor of nitromethane (CH3NO2), what is the formal charge on the oxygen atom that is single-bonded to nitrogen?",
    "question_smiles": "C[N+](=O)[O-]",
    "options": [
      {
        "option_id": "A",
        "text": "-1",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "0",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "+1",
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
      "context": "The two oxygens of a nitro group are drawn differently in any single Lewis structure - one doubly bonded, one singly bonded - and they carry different formal charges. The question names the singly bonded one specifically.",
      "approach": "Step 1: Oxygen's valence electron count is 6.\nStep 2: The singly bonded oxygen carries three lone pairs, which is 6 nonbonding electrons.\nStep 3: It forms one bond to nitrogen. The formal charge is 6 minus 6 minus 1, which is minus 1. For comparison, the doubly bonded oxygen has two lone pairs and two bonds, giving 6 minus 4 minus 2, or zero.",
      "note": "In reality the two oxygens are identical: resonance exchanges the double bond between them, and measurement finds two equal N-O distances. Formal charge is bookkeeping on one contributor, not a claim that one oxygen truly carries a whole unit of negative charge.",
      "options": {
        "A": "Correct. Three lone pairs and one bond on a six-valence-electron atom give 6 minus 6 minus 1, which is minus 1.",
        "B": "Zero is the formal charge on the other oxygen, the doubly bonded one, which has two lone pairs and two bonds. The question asks about the singly bonded oxygen.",
        "C": "A positive formal charge on oxygen would require three bonds, as in hydronium. This oxygen has only one.",
        "D": "Minus 2 would mean four lone pairs and no bonds - a free oxide ion. This oxygen is bonded to the nitrogen."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A methyl carbon bonded to a nitrogen, which is double bonded to one oxygen and single bonded to another; the nitrogen is drawn with a positive charge and the singly bonded oxygen with a negative charge."
  },
  {
    "question_id": "ch01_q30_formal_charge_carbocation",
    "topic": "Formal Charges & Lewis Structures",
    "difficulty_level": "Easy",
    "question_text": "What is the formal charge on the central carbon in a methyl carbocation (CH3+)?",
    "question_smiles": "[CH3+]",
    "options": [
      {
        "option_id": "A",
        "text": "+1",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "0",
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
        "text": "+2",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Carbon normally has four bonds and no lone pairs, which gives it a formal charge of zero. Any departure from that pattern - a missing bond, or a lone pair in place of one - shows up as a formal charge.",
      "approach": "Step 1: Carbon's valence electron count is 4.\nStep 2: The methyl cation has no lone pair, so its nonbonding electron count is 0.\nStep 3: It forms three C-H bonds. The formal charge is 4 minus 0 minus 3, which is plus 1.",
      "note": "Three groups and no lone pair make this carbon sp2 and trigonal planar, with an empty p orbital standing perpendicular to that plane. That empty orbital is the whole reason carbocations are electrophilic, and it is where a nucleophile attacks in every SN1 reaction.",
      "options": {
        "A": "Correct. Four valence electrons, no lone pairs and three bonds give 4 minus 0 minus 3, which is plus 1.",
        "B": "A neutral carbon has four bonds. This one has three and no lone pair to make up the difference, so it is short of electrons relative to a free atom.",
        "C": "Minus 1 is the methyl carbanion, where the carbon keeps a lone pair alongside its three bonds. The cation has no such pair.",
        "D": "Plus 2 would require only two bonds and no lone pairs. The structure shown has three C-H bonds."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A carbon atom bonded to three hydrogen atoms, drawn with a positive charge and no lone pair."
  },
  {
    "question_id": "ch01_q31_formal_charge_carbanion",
    "topic": "Formal Charges & Lewis Structures",
    "difficulty_level": "Easy",
    "question_text": "What is the formal charge on the central carbon in a methyl carbanion (CH3:-)?",
    "question_smiles": "[CH3-]",
    "options": [
      {
        "option_id": "A",
        "text": "-1",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "0",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "+1",
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
      "context": "A lone pair contributes two nonbonding electrons to the formal-charge tally, and those electrons belong entirely to the atom holding them. That is what makes an atom with an unexpected lone pair carry negative charge.",
      "approach": "Step 1: Carbon's valence electron count is 4.\nStep 2: The methyl anion carries one lone pair, which is 2 nonbonding electrons.\nStep 3: It forms three C-H bonds. The formal charge is 4 minus 2 minus 3, which is minus 1.",
      "note": "With three bonds and a lone pair this carbon has four groups, so it is sp3 and pyramidal rather than planar - the geometry of ammonia rather than of the cation. The exposed lone pair is what makes carbanions strong nucleophiles and strong bases.",
      "options": {
        "A": "Correct. Four valence electrons minus two nonbonding electrons minus three bonds gives minus 1.",
        "B": "Zero would require four bonds and no lone pair. Here one of carbon's four groups is a lone pair rather than a bond.",
        "C": "Plus 1 is the methyl cation, which has three bonds and no lone pair. The lone pair drawn here is exactly what makes the difference.",
        "D": "Minus 2 would need two lone pairs alongside the three bonds, giving carbon ten electrons and breaking the octet rule."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A carbon atom bonded to three hydrogen atoms and carrying a lone pair, drawn with a negative charge."
  },
  {
    "question_id": "ch01_q32_formal_charge_radical",
    "topic": "Formal Charges & Lewis Structures",
    "difficulty_level": "Medium",
    "question_text": "What is the formal charge on the central carbon in a methyl radical (CH3.)?",
    "question_smiles": "[CH3]",
    "options": [
      {
        "option_id": "A",
        "text": "0 (neutral radical species)",
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
        "text": "+0.5",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The formal-charge formula subtracts the number of nonbonding electrons, not the number of nonbonding pairs. A single unpaired electron therefore contributes one to that subtraction, not two.",
      "approach": "Step 1: Carbon's valence electron count is 4.\nStep 2: The methyl radical carries one unpaired electron, so its nonbonding electron count is 1.\nStep 3: It forms three C-H bonds. The formal charge is 4 minus 1 minus 3, which is zero. The species is neutral even though it has an incomplete octet.",
      "note": "Neutral but electron-deficient is the combination that makes radicals distinctive. They are not attracted to charge the way ions are, which is why radical reactions follow chain mechanisms driven by making and breaking bonds rather than by electrostatic attraction, as Chapter 10 shows for halogenation.",
      "options": {
        "A": "Correct. Four valence electrons minus one nonbonding electron minus three bonds gives zero, so the radical is neutral despite having only seven electrons around carbon.",
        "B": "Plus 1 is the methyl cation, which has no nonbonding electron at all. The radical's single electron is what brings the count back to neutral.",
        "C": "Minus 1 is the methyl anion, which carries a full lone pair - two electrons - rather than one.",
        "D": "Formal charges are whole numbers by construction; the formula subtracts integers. A half-integer cannot result from it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A carbon atom bonded to three hydrogen atoms and carrying a single unpaired electron."
  },
  {
    "question_id": "ch01_q33_formal_charge_diazomethane",
    "topic": "Formal Charges & Lewis Structures",
    "difficulty_level": "Hard",
    "question_text": "In the standard Lewis representation of diazomethane (H2C=N+=N-), what are the formal charges on the carbon, central nitrogen, and terminal nitrogen, respectively?",
    "question_smiles": "C=[N+]=[N-]",
    "options": [
      {
        "option_id": "A",
        "text": "0, +1, -1",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "-1, +1, 0",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "0, 0, 0",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "-1, +2, -1",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "For a structure with several charged atoms, assign each one separately and then apply the check that the formal charges must sum to the overall charge on the species - zero for a neutral molecule.",
      "approach": "Step 1: The carbon has 4 valence electrons, no lone pair, and four bonds - two to hydrogen and two to the central nitrogen. That is 4 minus 0 minus 4, or zero.\nStep 2: The central nitrogen has 5 valence electrons, no lone pair, and four bonds - two to carbon and two to the terminal nitrogen. That is 5 minus 0 minus 4, or plus 1.\nStep 3: The terminal nitrogen has 5 valence electrons, two lone pairs, and two bonds. That is 5 minus 4 minus 2, or minus 1. The three sum to zero, matching a neutral molecule.",
      "note": "That summation is the check worth carrying forward: if the formal charges you assign do not add up to the overall charge, the Lewis structure is wrong somewhere and no amount of rechecking a single atom will find it.",
      "options": {
        "A": "Correct. Carbon comes out zero with four bonds, the central nitrogen plus 1 with four bonds and no lone pair, and the terminal nitrogen minus 1 with two bonds and two lone pairs.",
        "B": "This puts minus 1 on carbon, which would require it to hold a lone pair. The carbon here has four bonds and none, so it is neutral.",
        "C": "All-neutral would need three bonds on the central nitrogen rather than four. As drawn it has four, which forces a positive formal charge on it.",
        "D": "These sum to zero, so the check passes, but the individual assignments do not. Nitrogen cannot carry plus 2 here, and carbon with four bonds is neutral rather than negative."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A carbon atom with two hydrogens, double bonded to a nitrogen, which is in turn double bonded to a second nitrogen; the central nitrogen is drawn with a positive charge and the terminal nitrogen with a negative charge."
  },
  {
    "question_id": "ch01_q34_formal_charge_co",
    "topic": "Formal Charges & Lewis Structures",
    "difficulty_level": "Hard",
    "question_text": "What are the formal charges on carbon and oxygen in carbon monoxide (:C#O:)?",
    "question_smiles": "[C-]#[O+]",
    "options": [
      {
        "option_id": "A",
        "text": "-1 on Carbon, +1 on Oxygen",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "0 on Carbon, 0 on Oxygen",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "+1 on Carbon, -1 on Oxygen",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "-2 on Carbon, +2 on Oxygen",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Calculate formal charges for the stable Lewis structure of carbon monoxide.",
      "process": "Step 1: The stable octet structure is $:C\\equiv O:$.\nStep 2: Carbon has 1 lone pair (2 nonbonding) and a triple bond (3 bonding). Valence = 4. $FC = 4 - 2 - 3 = -1$.\nStep 3: Oxygen has 1 lone pair (2 nonbonding) and a triple bond (3 bonding). Valence = 6. $FC = 6 - 2 - 3 = +1$.",
      "result": "Carbon is -1 and oxygen is +1."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch01_q35_formal_charge_boron",
    "topic": "Formal Charges & Lewis Structures",
    "difficulty_level": "Medium",
    "question_text": "What is the formal charge on the boron atom in sodium borohydride (NaBH4)?",
    "question_smiles": "[BH4-]",
    "options": [
      {
        "option_id": "A",
        "text": "-1",
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
        "text": "0",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "-3",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Find the formal charge on boron in a tetrahydroborate anion.",
      "process": "Step 1: Boron has 3 valence electrons.\nStep 2: In $BH_4^-$, boron is bonded to 4 hydrogens (8 bonding electrons) and has 0 lone pairs.\nStep 3: Calculate: $3 - 0 - 4 = -1$.",
      "result": "The boron carries a -1 formal charge."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch01_q36_resonance_rule",
    "topic": "Resonance Theory",
    "difficulty_level": "Medium",
    "question_text": "Which of the following statements is a fundamental rule of drawing valid resonance structures?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Only pi (\\(\\pi\\)) electrons and lone pairs may move; sigma (\\(\\sigma\\)) bonds must remain intact.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Atoms can be moved to maximize bond stability.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The number of unpaired electrons can change between resonance structures.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Second-row elements can expand their octet to fit additional double bonds.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Review the rules of resonance representation.",
      "process": "Step 1: Resonance structures represent different layouts of the same molecule. The nuclear scaffold (positions of nuclei and $\\sigma$ bonds) must not change.\nStep 2: This means only non-bonding valence electrons (lone pairs) and $\\pi$ bonding electrons can be repositioned.\nStep 3: Total net charge and number of unpaired electrons must also remain constant.",
      "result": "Only $\\pi$ electrons and lone pairs can move."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch01_q37_resonance_stability",
    "topic": "Resonance Theory",
    "difficulty_level": "Hard",
    "question_text": "Which resonance structure is the major contributor to the hybrid of the conjugate base of acetone?",
    "question_smiles": "CC(=O)[CH2-]",
    "options": [
      {
        "option_id": "A",
        "text": "The enolate structure where the negative charge resides on oxygen: CH3-C(O-)=CH2",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The carbanion structure where the negative charge resides on carbon: CH3-CO-CH2-",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "They contribute equally because they are identical.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A carbocation contributor with separated charges.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determine the relative stability of resonance contributors for an enolate ion.",
      "process": "Step 1: Compare the electronegativity of carbon and oxygen. Oxygen (3.5) is more electronegative than carbon (2.5).\nStep 2: Structures placing negative formal charges on more electronegative atoms are more stable and contribute more to the overall resonance hybrid.\nStep 3: Therefore, the enolate structure ($CH_3-C(O^-)=CH_2$) is more stable than the carbanion ($CH_3-CO-CH_2^-$).",
      "result": "The oxygen-centered anion is the major contributor."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch01_q38_resonance_non_valid",
    "topic": "Resonance Theory",
    "difficulty_level": "Medium",
    "question_text": "Why is a structure with five bonds to carbon (such as a pentavalent carbon) an invalid resonance contributor?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Carbon is a second-row element and has a maximum of four valence orbitals, restricting it to 8 valence electrons.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Carbon cannot form sigma bonds with hydrogen in resonance structures.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Pentavalent carbons are highly positive.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It violates Hund's rule of spin conservation.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Understand the octet rule limitation for second-row elements.",
      "process": "Step 1: Carbon is in the second row of the periodic table, possessing only $2s$ and three $2p$ valence orbitals (4 total orbitals).\nStep 2: Each orbital can hold up to 2 electrons, limiting carbon to a maximum of 8 valence electrons (an octet).\nStep 3: Five covalent bonds would require 10 valence electrons, which carbon cannot accommodate since it lacks low-energy $d$ orbitals.",
      "result": "The correct choice is A."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch01_q39_electronegativity_polar",
    "topic": "Bond Properties",
    "difficulty_level": "Easy",
    "question_text": "Which of the following bonds is the most polar covalent bond?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "C-O",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "C-N",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "C-C",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "C-H",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Compare polarities based on electronegativity values ($C=2.5, H=2.1, N=3.0, O=3.5$).",
      "process": "Step 1: Calculate electronegativity difference (\\(\\Delta EN\\)) for each bond.\nStep 2: C-C = 0. C-H = 0.4. C-N = 0.5. C-O = 1.0.\nStep 3: The C-O bond has the largest difference in electronegativity, making it the most polar covalent bond.",
      "result": "The C-O bond is the most polar."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch01_q40_dipole_moment",
    "topic": "Bond Properties",
    "difficulty_level": "Medium",
    "question_text": "Which of the following molecules has a net dipole moment of zero?",
    "question_smiles": "ClC(Cl)(Cl)Cl",
    "options": [
      {
        "option_id": "A",
        "text": "Carbon tetrachloride (CCl4)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Dichloromethane (CH2Cl2)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Chloroform (CHCl3)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Chloromethane (CH3Cl)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identify how molecular symmetry affects net molecular dipole moments.",
      "process": "Step 1: Each C-Cl bond is polar due to the electronegativity difference between carbon (2.5) and chlorine (3.0).\nStep 2: In carbon tetrachloride ($CCl_4$), the four C-Cl polar bonds are arranged symmetrically in a tetrahedral geometry.\nStep 3: Because of this perfect tetrahedral symmetry, the four individual bond dipole vectors cancel each other out completely, resulting in a net dipole moment of zero.",
      "result": "Carbon tetrachloride has a net dipole moment of zero."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch01_q41_carbon_dioxide_dipole",
    "topic": "Bond Properties",
    "difficulty_level": "Medium",
    "question_text": "Why does carbon dioxide (CO2) have a net dipole moment of zero despite having highly polar C=O bonds?",
    "question_smiles": "O=C=O",
    "options": [
      {
        "option_id": "A",
        "text": "The molecule is linear, and the two polar C=O bond dipoles point in opposite directions, canceling each other out.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Carbon and oxygen have identical electronegativities.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The bond angles are tetrahedral, leading to cancellation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "CO2 forms ionic pairs which lack molecular dipoles.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Explain the zero net dipole in carbon dioxide.",
      "process": "Step 1: Carbon dioxide ($O=C=O$) contains a carbon double-bonded to two oxygens.\nStep 2: The hybridization of carbon is $sp$, making the geometry linear ($180^\\circ$ angle).\nStep 3: The two dipole vectors of the C=O bonds point in exact opposite directions along the linear axis, resulting in complete cancellation.",
      "result": "Linear geometry leads to cancellation of the dipoles."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch01_q42_formal_charge_oxygen_radical",
    "topic": "Formal Charges & Lewis Structures",
    "difficulty_level": "Medium",
    "question_text": "What is the formal charge on the oxygen atom in the hydroxyl radical (.OH)?",
    "question_smiles": "[OH]",
    "options": [
      {
        "option_id": "A",
        "text": "0",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "-1",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "+1",
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
      "context": "Calculate the formal charge on oxygen in the hydroxyl radical.",
      "process": "Step 1: Oxygen valence = 6.\nStep 2: In a hydroxyl radical, oxygen has 1 single bond to hydrogen (2 bonding electrons) and 5 non-bonding electrons (2 lone pairs and 1 unpaired electron).\nStep 3: Calculate: $6 - 5 - 1 = 0$.",
      "result": "The oxygen carries a formal charge of 0."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch01_q43_mo_antibonding",
    "topic": "Molecular Orbital Theory",
    "difficulty_level": "Medium",
    "question_text": "Which of the following is true regarding an antibonding molecular orbital?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "It is higher in energy than the starting atomic orbitals and contains a node between the nuclei.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It is lower in energy than the starting atomic orbitals.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It is formed by constructive interference of wave functions.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It can never be occupied by electrons.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Explain the concept of antibonding molecular orbitals.",
      "process": "Step 1: Antibonding orbitals are formed by destructive interference (subtraction) of atomic wave functions.\nStep 2: This destructive interference leads to a nodal plane (zero electron density) between the nuclei.\nStep 3: Electrons placed here experience repulsion between the nuclei, making the orbital less stable (higher in energy) than the initial isolated atomic orbitals.",
      "result": "An antibonding orbital is higher in energy and contains a node."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch01_q44_hybrid_oxygen_water",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Easy",
    "question_text": "What is the hybridization of the oxygen atom in water (H2O)?",
    "question_smiles": "O",
    "options": [
      {
        "option_id": "A",
        "text": "$sp^3$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$sp^2$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$sp$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Unhybridized",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determine oxygen's hybridization in water.",
      "process": "Step 1: Oxygen forms 2 single bonds to hydrogens and has 2 lone pairs.\nStep 2: Steric number = 2 (bonds) + 2 (lone pairs) = 4.\nStep 3: Steric number of 4 corresponds to $sp^3$ hybridization.",
      "result": "The oxygen in water is $sp^3$ hybridized."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch01_q45_skeletal_translation",
    "topic": "Drawing Chemical Structures",
    "difficulty_level": "Easy",
    "question_text": "What is the molecular formula of benzene (skeletal structure: a six-membered ring with three alternating double bonds)?",
    "question_smiles": "c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "C6H6",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "C6H12",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "C6H8",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "C6H10",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Translate the skeletal representation of benzene to its molecular formula.",
      "process": "Step 1: Benzene consists of 6 carbon atoms in a ring.\nStep 2: Each carbon forms 3 bonds within the ring (one double bond and one single bond). Therefore, each carbon requires exactly 1 bond to a hydrogen atom to satisfy its valency.\nStep 3: This results in 6 carbons and 6 hydrogens: $C_6H_6$.",
      "result": "The formula of benzene is $C_6H_6$."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch01_q46_skeletal_cyclohexane",
    "topic": "Drawing Chemical Structures",
    "difficulty_level": "Easy",
    "question_text": "What is the molecular formula of cyclohexane?",
    "question_smiles": "C1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "C6H12",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "C6H6",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "C6H14",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "C5H10",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Determine cyclohexane's molecular formula.",
      "process": "Step 1: Cyclohexane is a saturated cyclic alkane with 6 carbons.\nStep 2: Each carbon has 2 bonds to adjacent carbons in the ring, requiring 2 bonds to hydrogens to reach tetravalency.\nStep 3: Total hydrogens = 6 carbons * 2 hydrogens/carbon = 12 hydrogens. Molecular formula = $C_6H_{12}$.",
      "result": "The molecular formula is $C_6H_{12}$."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch01_q47_skeletal_diethyl_ether",
    "topic": "Drawing Chemical Structures",
    "difficulty_level": "Easy",
    "question_text": "What is the molecular formula of diethyl ether?",
    "question_smiles": "CCOCC",
    "options": [
      {
        "option_id": "A",
        "text": "C4H10O",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "C4H8O",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "C4H10O2",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "C3H8O",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Translate diethyl ether to its molecular formula.",
      "process": "Step 1: Diethyl ether ($CH_3-CH_2-O-CH_2-CH_3$) contains two ethyl groups attached to an oxygen.\nStep 2: Total carbons = 4. The carbon chain is fully saturated.\nStep 3: Count hydrogens: $(3 + 2) * 2 = 10$. Total formula = $C_4H_{10}O$.",
      "result": "The molecular formula is $C_4H_{10}O$."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch01_q48_sp2_nitrogen_pyridine",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Hard",
    "question_text": "In pyridine (C5H5N), in which orbital does the nitrogen lone pair reside?",
    "question_smiles": "c1ccncc1",
    "options": [
      {
        "option_id": "A",
        "text": "An \\(sp^2\\) hybrid orbital (in the plane of the ring)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "An unhybridized \\(2p\\) orbital (perpendicular to the ring)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "An \\(sp^3\\) hybrid orbital",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A \\(1s\\) core orbital",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Examine the orbital alignment and aromaticity of pyridine.",
      "process": "Step 1: Nitrogen in pyridine is part of a conjugated aromatic system. It is bonded to two carbons via one double and one single bond. Steric number = 3 ($sp^2$).\nStep 2: The nitrogen uses its unhybridized $2p$ orbital to contribute one electron to the $\\pi$ system, maintaining aromaticity.\nStep 3: Consequently, the lone pair must occupy one of the hybrid $sp^2$ orbitals, which lies in the plane of the ring, perpendicular to the aromatic $\\pi$ cloud.",
      "result": "The lone pair resides in an $sp^2$ hybrid orbital."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch01_q49_sp2_nitrogen_pyrrole",
    "topic": "Hybridization & Molecular Geometry",
    "difficulty_level": "Hard",
    "question_text": "In pyrrole (C4H5N, a five-membered heterocyclic ring), in which orbital does the nitrogen lone pair reside?",
    "question_smiles": "c1cc[nH]c1",
    "options": [
      {
        "option_id": "A",
        "text": "An unhybridized \\(2p\\) orbital (contributing to the aromatic pi cloud)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "An \\(sp^2\\) hybrid orbital (in the plane of the ring)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "An \\(sp^3\\) hybrid orbital",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A hybrid \\(sp\\) orbital",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Compare the lone pair localization in pyrrole vs. pyridine.",
      "process": "Step 1: Pyrrole contains a nitrogen bonded to 2 carbons and 1 hydrogen via single bonds. To make the 5-membered ring aromatic, we need 6 $\\pi$ electrons.\nStep 2: Each of the 4 carbons provides 1 $\\pi$ electron. Nitrogen must contribute its lone pair (2 electrons) to the aromatic cloud.\nStep 3: To do this, the nitrogen lone pair must reside in an unhybridized $p$ orbital perpendicular to the ring. Nitrogen adopts $sp^2$ hybridization.",
      "result": "The lone pair resides in an unhybridized $2p$ orbital."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch01_q50_huckel_rule_intro",
    "topic": "Molecular Orbital Theory",
    "difficulty_level": "Medium",
    "question_text": "What is the key orbital requirement for a planar, monocyclic ring to be aromatic according to Huckel's rule?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "It must have a continuous, overlapping ring of unhybridized \\(p\\) orbitals containing \\(4n + 2\\) pi electrons.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It must have exactly 6 carbons in the ring.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It must have alternating single and double bonds only.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It must consist entirely of \\(sp^3\\) hybridized carbons.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Introduce the orbital criteria for aromaticity.",
      "process": "Step 1: Check the electronic rules for aromaticity. The system must be cyclic, planar, and fully conjugated (continuous ring of $p$ orbitals).\nStep 2: The number of $\\pi$ electrons in the closed loop of overlapping $p$ orbitals must satisfy Huckel's formula: $4n+2$ where n is an integer (2, 6, 10, 14, etc.).\nStep 3: This allows for complete filling of all bonding molecular orbitals in the $\\pi$ system.",
      "result": "It must have a continuous ring of overlapping $p$ orbitals containing $4n+2$ $\\pi$ electrons."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch01_q_dynamic_hybridization",
    "topic": "Atomic Structure & Hybridization",
    "difficulty_level": "Medium",
    "question_text": "Match each carbon atom structure highlight to its correct orbital hybridization.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC#C",
        "correctAnswer": "sp"
      },
      {
        "smiles": "CC=C",
        "correctAnswer": "sp2"
      },
      {
        "smiles": "CCC",
        "correctAnswer": "sp3"
      },
      {
        "smiles": "C#CC#C",
        "correctAnswer": "sp"
      }
    ],
    "match_options": [
      "sp",
      "sp2",
      "sp3",
      "sp3d"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect hybridization assignments",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Assigning carbon atom hybridization based on bonds: single bonds are sp3, double bonds are sp2, triple bonds are sp.",
      "process": "Item 1 (propyne triple-bonded carbon) is sp.\nItem 2 (propene double-bonded carbon) is sp2.\nItem 3 (propane single-bonded carbon) is sp3.\nItem 4 (butadiyne carbon) is sp.",
      "result": "Hybridization is assigned based on the steric number of each carbon."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch01_q_dynamic_formal_charge",
    "topic": "Lewis Structures & Formal Charges",
    "difficulty_level": "Medium",
    "question_text": "Match each chemical species to its correct central atom formal charge.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "[NH4+]",
        "correctAnswer": "+1"
      },
      {
        "smiles": "[BH4-]",
        "correctAnswer": "-1"
      },
      {
        "smiles": "C[C+](C)C",
        "correctAnswer": "+1"
      },
      {
        "smiles": "[OH-]",
        "correctAnswer": "-1"
      }
    ],
    "match_options": [
      "+2",
      "+1",
      "0",
      "-1",
      "-2"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect formal charges",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Calculating formal charges: FC = Valence electrons - Lone pair electrons - 0.5 * Bonding electrons.",
      "process": "Ammonium nitrogen: 5 - 0 - 4 = +1.\nBorohydride boron: 3 - 0 - 4 = -1.\nt-Butyl carbocation: 4 - 0 - 3 = +1.\nHydroxide oxygen: 6 - 6 - 1 = -1.",
      "result": "Formal charge tracking is crucial for mechanism study."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch01_q_dynamic_functional_groups",
    "topic": "Functional Groups Matching",
    "difficulty_level": "Medium",
    "question_text": "Match each structural SMILES configuration below to its correct functional group category.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "CC(=O)C",
        "correctAnswer": "Ketone"
      },
      {
        "smiles": "CCOC(C)=O",
        "correctAnswer": "Ester"
      },
      {
        "smiles": "CC(=O)O",
        "correctAnswer": "Carboxylic Acid"
      },
      {
        "smiles": "CCN",
        "correctAnswer": "Amine"
      }
    ],
    "match_options": [
      "Ketone",
      "Ester",
      "Carboxylic Acid",
      "Amine",
      "Ether",
      "Amide"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect functional groups",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Identifying functional groups in organic molecules.",
      "process": "propan-2-one is a Ketone. ethyl acetate is an Ester. acetic acid is a Carboxylic Acid. ethylamine is an Amine.",
      "result": "Functional group recognition is key to predicting chemical reactivity."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch01_q_dynamic_mo_energy",
    "topic": "Molecular Orbitals & Bonding",
    "difficulty_level": "Hard",
    "question_text": "Consider the molecular orbital (MO) energy diagram for a homonuclear diatomic molecule. Identify the correct energy states for sigma and pi orbitals.",
    "energy_diagram": {
      "points": [
        {
          "state": "1s",
          "energy": -200
        },
        {
          "state": "sigma_1s",
          "energy": -300
        },
        {
          "state": "sigma_star_1s",
          "energy": -100
        },
        {
          "state": "2s",
          "energy": -50
        },
        {
          "state": "sigma_2s",
          "energy": -80
        },
        {
          "state": "sigma_star_2s",
          "energy": -20
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Bonding orbitals (sigma) are lower in energy than atomic orbitals, while antibonding (sigma*) are higher.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Bonding and antibonding orbitals have equal energy to atomic orbitals.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Antibonding orbitals are lower in energy than bonding orbitals.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Orbital mixing makes bonding orbitals higher in energy.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Analyzing molecular orbital energy levels relative to the starting atomic orbitals.",
      "process": "Bonding MOs result from constructive interference and are lower in energy (more stable). Antibonding MOs result from destructive interference and are higher in energy (less stable).",
      "result": "The energy of sigma_1s is lower than 1s, and sigma_star_1s is higher than 1s."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  }
];
