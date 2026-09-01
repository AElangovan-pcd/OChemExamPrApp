// OChemStudyBuddy - McMurry Chapter 9
// Author: A. Elangovan, PhD
var CH09_QUESTIONS = [
  {
    "question_id": "ch09_q51_roadmap_alkene_to_alkyne",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Medium",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CC=C",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2, CH2Cl2"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1. excess NaNH2, NH3\n2. H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propene, B: 1,2-dibromopropane, C: propyne",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: propene, B: 2-bromopropane, C: propyne",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: propene, B: 1,2-dibromopropane, C: 2-bromoprop-1-ene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: propene, B: 2,2-dibromopropane, C: propyne",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Halogenation followed by double dehydrohalogenation is how an alkene is converted into an alkyne. Neither step is new on its own - the first is alkene chemistry and the second is the elimination from a vicinal dihalide - but together they move the molecule up a level of unsaturation.",
      "approach": "Bromine adds across propene's double bond, one bromine to each of the two alkene carbons, giving the vicinal dihalide 1,2-dibromopropane as B. Excess sodium amide then eliminates HBr twice: the first elimination gives a vinylic halide, and the second closes the triple bond between the same two carbons. The alkyne that results is terminal, so the excess amide deprotonates it, and the acidic workup gives back propyne as C.",
      "note": "The workup written on the second arrow is not decorative. A terminal alkyne is more acidic than ammonia, so a further equivalent of amide removes its proton as fast as the alkyne forms; without the acid at the end what you isolate is the acetylide salt rather than the alkyne itself.",
      "options": {
        "A": "Br2 gives the vicinal dihalide, and two eliminations followed by an acidic workup give the terminal alkyne.",
        "B": "2-Bromopropane is a monohalide, which is what one equivalent of HBr would give. Br2 delivers both bromines, one to each carbon of the double bond.",
        "C": "2-Bromoprop-1-ene is the vinylic halide left after the first elimination alone. Excess amide is specified precisely so the second elimination happens too.",
        "D": "2,2-Dibromopropane puts both bromines on one carbon, which is the pattern two equivalents of HBr give. Br2 across a double bond puts one on each."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch09_q52_roadmap_alkylation_hydration",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "C#C",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "1. NaNH2 (1 eq), NH3\n2. 1-bromopropane"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H2O, H2SO4, HgSO4"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: acetylene, B: pent-1-yne, C: pentan-2-one",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: acetylene, B: pent-1-yne, C: pentanal",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: acetylene, B: pent-2-yne, C: pentan-2-one",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: acetylene, B: hex-1-yne, C: hexan-2-one",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A terminal alkyne is a two-way junction: alkylate it and the chain grows, hydrate it and a carbonyl appears. This roadmap uses both, and the quantity of base in the first step is what keeps the alkyne terminal long enough for the second.",
      "approach": "One equivalent of amide deprotonates acetylene once, and the acetylide displaces bromide from 1-bromopropane in an SN2 reaction. Two carbons plus three gives pent-1-yne, still terminal, which is B. Mercury(II)-catalysed hydration then adds water with Markovnikov regiochemistry, putting the oxygen on the internal alkyne carbon; the enol tautomerises and C is the methyl ketone pentan-2-one.",
      "note": "Every quantity on the first arrow is doing work. Two equivalents of base and halide would alkylate both ends and give an internal alkyne, and hydrating an unsymmetrical internal alkyne returns a mixture of two ketones rather than one.",
      "options": {
        "A": "A single alkylation keeps the alkyne terminal, and Markovnikov hydration of a terminal alkyne gives the methyl ketone.",
        "B": "Pentanal is the hydroboration-oxidation product, which puts oxygen on the terminal carbon. Mercury(II) hydration puts it on the other one.",
        "C": "Pent-2-yne is internal. The acetylide bonds through its own carbon, so alkylating acetylene once leaves the triple bond at the end of the new chain.",
        "D": "Six carbons. Acetylene contributes two and 1-bromopropane contributes three, so the alkyne has five."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch09_q1_hybridization",
    "topic": "Alkyne Structure & Bonding",
    "difficulty_level": "Easy",
    "question_text": "What is the orbital hybridization and geometry of the carbon atoms in the triple bond of acetylene (ethyne)?",
    "question_smiles": "C#C",
    "options": [
      {
        "option_id": "A",
        "text": "sp, linear",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "sp², trigonal planar",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "sp³, tetrahedral",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "sp³d, linear",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hybridization is read off the sigma-bond count: a carbon needs one hybrid orbital for each sigma bond it makes and each lone pair it holds, and the geometry is whatever keeps those orbitals farthest apart.",
      "approach": "Each carbon in acetylene makes two sigma bonds - one to hydrogen, one to the other carbon - and holds no lone pair, so it needs exactly two hybrid orbitals. Mixing the 2s with one 2p produces two sp hybrids and leaves two 2p orbitals unhybridized. Two orbitals get farthest apart at 180 degrees, so the H-C-C angle is 180 degrees and the molecule is linear. The two untouched p orbitals go on to make the two pi bonds.",
      "note": "McMurry supplies the measurements that go with this picture: the carbon-carbon bond in acetylene is 120 pm long and about 965 kJ/mol strong, the shortest and strongest carbon-carbon bond of any kind.",
      "options": {
        "A": "Two sigma bonds and no lone pair call for two hybrid orbitals, and two orbitals set 180 degrees apart is a linear arrangement.",
        "B": "sp2 and trigonal planar describe a carbon making three sigma bonds. That is the alkene carbon of ethylene, not either carbon of a triple bond.",
        "C": "An sp3 carbon uses all four of its valence orbitals for sigma bonds and has no p orbital left, so it could not form even one pi bond, let alone the two a triple bond needs.",
        "D": "Second-row carbon has no accessible d orbitals, so sp3d is not available to it. The geometry named happens to be right, but it cannot arise this way."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two carbon atoms joined by a triple bond, each carrying a single hydrogen."
  },
  {
    "question_id": "ch09_q2_bond_properties",
    "topic": "Alkyne Structure & Bonding",
    "difficulty_level": "Easy",
    "question_text": "How does the carbon-carbon triple bond in propyne compare to the carbon-carbon double bond in propene in terms of bond length and bond strength?",
    "question_smiles": "CC#C",
    "options": [
      {
        "option_id": "A",
        "text": "The triple bond in propyne is shorter and stronger than the double bond in propene.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The triple bond in propyne is longer and stronger than the double bond in propene.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The triple bond in propyne is shorter and weaker than the double bond in propene.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The triple bond in propyne is longer and weaker than the double bond in propene.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Between the same two elements, bond order and s character push length and strength in the same direction - more shared pairs and more s character both draw the nuclei closer, and the shorter bond is the stronger one.",
      "approach": "The triple-bonded carbons of propyne are sp hybridized at 50 percent s character; the double-bonded carbons of propene are sp2 at 33 percent. Higher s character holds the bonding electrons nearer the nuclei, and the triple bond shares three electron pairs where the double bond shares two. McMurry's Table 1.2 puts numbers on both effects: the C=C bond is 134 pm and 728 kJ/mol, the C-C triple bond 120 pm and 965 kJ/mol.",
      "note": "The correlation is only safe within one pair of elements. Set a C-C bond beside a C-O or C-N bond and atomic size and electronegativity matter as much as bond order does, so the shorter bond is no longer reliably the stronger one.",
      "options": {
        "A": "Both halves hold: the third shared pair and the extra s character each shorten the bond, and at 965 against 728 kJ/mol the shorter bond is also the stronger.",
        "B": "The strength claim is right and the length claim is not. Nothing about adding a third shared pair between two carbons makes the bond longer.",
        "C": "The length claim is right and the strength claim is not. A bond drawn shorter by more shared electrons cannot simultaneously be weaker than the one it replaced.",
        "D": "Both halves are inverted. This is what you would predict if bond order and bond length rose together, which is the opposite of the measured trend."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-carbon chain: a methyl group attached to a carbon that is triple-bonded to a terminal carbon bearing one hydrogen."
  },
  {
    "question_id": "ch09_q3_orbital_overlap",
    "topic": "Alkyne Structure & Bonding",
    "difficulty_level": "Medium",
    "question_text": "What is the geometric relationship and origin of the two pi (π) bonds in a carbon-carbon triple bond?",
    "question_smiles": "C#C",
    "options": [
      {
        "option_id": "A",
        "text": "They are perpendicular to each other, formed by the overlap of two orthogonal pairs of unhybridized 2p orbitals.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "They are parallel to each other, formed by the overlap of sp hybrid orbitals.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "They are coplanar with the C-H sigma bonds, formed by sp² hybrid orbitals.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "They are oriented at 120° relative to each other, formed by unhybridized d orbitals.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An sp carbon spends its 2s and only one 2p orbital on hybrids, which leaves two 2p orbitals untouched. Those two orbitals are the entire supply from which pi bonds can be built, so where they point fixes where the pi bonds lie.",
      "approach": "Call the two surviving p orbitals py and pz. They are perpendicular to each other and to the C-C axis. The py orbital on one carbon overlaps sideways with the py orbital on the other to give one pi bond, and the pz pair does the same to give the second. Because py and pz stand 90 degrees apart, the two pi bonds do too, and together they wrap the sigma framework in a cylinder of electron density rather than a single slab.",
      "note": "McMurry's electrostatic potential map for acetylene shows that cylinder as a negative belt encircling the molecule. It is why an electrophile can approach an alkyne from any direction around the axis, unlike an alkene where the pi cloud has two faces.",
      "options": {
        "A": "Two orthogonal pairs of leftover 2p orbitals overlap sideways, and orbitals 90 degrees apart give pi bonds 90 degrees apart.",
        "B": "sp hybrids point along the bond axis and overlap end-on, which is how the sigma bond forms. A pi bond is built from unhybridized p orbitals, never from hybrids.",
        "C": "This describes the single pi bond of an alkene, where one p orbital per carbon survives hybridization. An sp carbon keeps two, and two perpendicular orbitals cannot both lie in the sigma plane.",
        "D": "Carbon has no 2d orbitals available to it, and 120 degrees is the angle between sp2 hybrids in a plane, not between two unhybridized p orbitals."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two carbons joined by a triple bond, one hydrogen on each - the same skeleton the question describes."
  },
  {
    "question_id": "ch09_q4_naming_terminal",
    "topic": "IUPAC Naming",
    "difficulty_level": "Easy",
    "question_text": "What is the systematic IUPAC name for the following terminal alkyne?",
    "question_smiles": "CC(C)C#C",
    "options": [
      {
        "option_id": "A",
        "text": "3-methylbut-1-yne",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-methylbut-3-yne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "isopropylacetylene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-methylbutyne",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An alkyne name is built on the longest chain that contains the triple bond, and that chain is numbered so the first carbon of the triple bond receives the lowest locant it can. Substituents are then cited at whatever locants that numbering leaves them.",
      "approach": "The longest chain through the triple bond runs four carbons, so the parent is butyne. Numbering from the alkyne end places the triple bond between C1 and C2 and so gives it the locant 1; numbering from the branched end would give it 3. With numbering fixed, the methyl branch falls on C3, and the pieces assemble as 3-methylbut-1-yne.",
      "note": "The triple bond wins the numbering over the branch because a chain is numbered for its unsaturation before its substituents. Only when the unsaturation locants come out equal from both ends does a substituent get to decide, which is the situation the enyne tie-breaker handles.",
      "options": {
        "A": "The four-carbon parent, the triple bond given the lower locant, and the methyl at the C3 that numbering leaves it on.",
        "B": "The right molecule numbered from the wrong end. That numbering hands the triple bond a 3 when a 1 was available to it.",
        "C": "A common name built on acetylene as the parent. It identifies the compound, but the question asks for the systematic name.",
        "D": "The right molecule with the triple bond's locant left off. 'Butyne' alone does not say whether the bond sits at C1 or C2, so the name is incomplete."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain carrying a triple bond at one end, with a methyl branch on the carbon next to the opposite end."
  },
  {
    "question_id": "ch09_q5_naming_enyne",
    "topic": "IUPAC Naming",
    "difficulty_level": "Medium",
    "question_text": "What is the systematic IUPAC name for the following enyne?",
    "question_smiles": "C=CC#CC",
    "options": [
      {
        "option_id": "A",
        "text": "pent-1-en-3-yne",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "pent-4-en-2-yne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "pent-3-yn-1-ene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-penten-3-yne",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When one chain carries both a double and a triple bond, the two are numbered as a single combined set. The chain is numbered to give that set the lowest locants, judged at the first point of difference, and nothing else is consulted until that comparison ties.",
      "approach": "The five-carbon chain holds both bonds, so the parent is a pentenyne. Numbering left to right puts the double bond at C1 and the triple bond at C3, the set {1,3}. Numbering right to left puts the triple bond at C2 and the double bond at C4, the set {2,4}. Compared term by term, 1 beats 2 at the first point of difference, so {1,3} wins and the name is pent-1-en-3-yne.",
      "note": "Whatever the locants turn out to be, 'ene' is always written before 'yne' in the assembled name. That ordering is fixed by the suffix rules and is not a claim that the double bond outranks the triple bond in numbering.",
      "options": {
        "A": "The lower locant set {1,3}, with the double bond cited before the triple bond as the suffix order requires.",
        "B": "The right molecule numbered from the wrong end, which produces the set {2,4} where {1,3} was available.",
        "C": "Cites the triple bond ahead of the double bond. However the chain is numbered, 'ene' precedes 'yne' in the name.",
        "D": "The right molecule and the right locants in the superseded style that collects locants at the front. Current practice sets each locant beside the bond it describes."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-carbon chain: a terminal CH2 double-bonded to the next carbon, which is single-bonded to a carbon triple-bonded to the fourth, and a methyl at the far end."
  },
  {
    "question_id": "ch09_q6_naming_enyne_tie",
    "topic": "IUPAC Naming",
    "difficulty_level": "Medium",
    "question_text": "What is the systematic IUPAC name for the following enyne?",
    "question_smiles": "C=CCC#C",
    "options": [
      {
        "option_id": "A",
        "text": "pent-1-en-4-yne",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "pent-4-en-1-yne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-penten-4-yne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4-pentyn-1-ene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Enyne numbering carries a tie-breaker of its own, and it is the one place in this chapter where a double bond outranks a triple bond. It is reached only after comparing the combined locant sets has failed to separate the two directions.",
      "approach": "Both bonds sit in the five-carbon chain. Numbering from the left gives the double bond C1 and the triple bond C4; numbering from the right gives the triple bond C1 and the double bond C4. Both directions produce the set {1,4}, so the set decides nothing. The rule for exactly this case is that the double bond takes the lower locant, which fixes numbering from the left and gives pent-1-en-4-yne.",
      "note": "Compare the enyne whose sets come out {1,3} against {2,4}: there the lower set settles the numbering and this tie-breaker is never reached. It is a last resort, not a standing priority for double bonds.",
      "options": {
        "A": "The tie in the locant set is broken in the double bond's favour, so the alkene takes C1 and the alkyne C4.",
        "B": "This is the numbering the tie-breaker rejects. It gives the triple bond the 1 and the double bond the 4, which is the choice the rule exists to rule out.",
        "C": "The right molecule and the right numbering, written in the superseded front-locant style rather than the systematic form the question asks for.",
        "D": "Treats the triple bond as the suffix and the double bond as secondary, and takes the numbering the tie-breaker rules out as well."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-carbon chain: a terminal CH2 double-bonded to the second carbon, then a CH2, then a triple bond to the terminal carbon at the far end."
  },
  {
    "question_id": "ch09_q7_naming_substituted",
    "topic": "IUPAC Naming",
    "difficulty_level": "Hard",
    "question_text": "What is the systematic IUPAC name for the following compound?",
    "question_smiles": "CC(Cl)C#CC(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "2-chloro-5-methylhex-3-yne",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "5-chloro-2-methylhex-3-yne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "5-chloro-2,2-dimethylpent-3-yne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-methyl-5-chlorohex-3-yne",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When numbering from either end gives the triple bond the same locant and the substituents the same set of locants, the tie falls to alphabetical order: the substituent cited first must be the one that receives the lower number.",
      "approach": "The chain through the triple bond is six carbons and the bond falls between C3 and C4 whichever direction is chosen, so the parent is hex-3-yne either way. Left to right the substituents land at C2 for chloro and C5 for methyl; right to left they land at C2 for methyl and C5 for chloro. The locant set is {2,5} both times, so the sets cannot decide. Chloro is cited first alphabetically, so chloro takes the 2, and the name is 2-chloro-5-methylhex-3-yne.",
      "note": "This alphabetical tie-break is a distinct rule from the first-point-of-difference comparison that picks the lower locant set. That comparison has already been exhausted by the time this tie appears, which is why alphabetical order is allowed to decide a number here and not elsewhere.",
      "options": {
        "A": "The tied locant set {2,5} is broken alphabetically, so the chloro that is cited first also takes the lower number.",
        "B": "The right molecule numbered from the wrong end. The locant set is identical either way, so alphabetical order applies and chloro must be the 2.",
        "C": "Names a five-carbon parent with a quaternary carbon this structure does not contain. The chain through the triple bond is six carbons long.",
        "D": "The right molecule with the substituents cited out of alphabetical order and the numbering chosen to suit it. Chloro is written before methyl whichever way the chain runs."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-carbon chain with an internal triple bond in the middle, a chlorine on the second carbon from one end and a methyl branch on the second carbon from the other."
  },
  {
    "question_id": "ch09_q8_naming_cyclohexyl",
    "topic": "IUPAC Naming",
    "difficulty_level": "Medium",
    "question_text": "Taking the chain that contains the triple bond as the parent, what is the systematic IUPAC name for the following compound?",
    "question_smiles": "C#CCC1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "3-cyclohexylprop-1-yne",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-cyclohexylprop-2-yne",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "3-cyclohexylpropyne",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "cyclohexylacetylene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A ring and a chain can each put themselves forward as the parent, and the choice has to be made before anything else. This question fixes it: the chain carrying the triple bond is the parent, which is the convention McMurry uses throughout and the one this course follows.",
      "approach": "The triple bond lies in a three-carbon chain, so the parent is propyne and the ring becomes a cyclohexyl prefix. Numbering the chain from the terminal alkyne carbon gives the triple bond the locant 1 and puts the ring-bearing carbon at C3. Assembled, that is 3-cyclohexylprop-1-yne.",
      "note": "Choosing the other parent is not an error, it is a different rulebook. The 2013 IUPAC recommendations select the ring when both are candidates, which makes prop-2-yn-1-ylcyclohexane the preferred IUPAC name for this same compound. Both names are unambiguous; what a question has to do is say which convention it wants.",
      "options": {
        "A": "Chain as parent, triple bond given the lower locant, and the ring cited as a cyclohexyl substituent on C3.",
        "B": "The right molecule numbered from the wrong end of the chain, which hands the triple bond a 2 when a 1 was available.",
        "C": "The right molecule with the triple bond's locant omitted. In a three-carbon chain the bond can only be at C1, but a systematic name still has to say so.",
        "D": "Names a different compound: the triple bond attached straight to the ring with no CH2 between them, one carbon shorter than the structure drawn."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered saturated ring joined through a CH2 group to a carbon that is triple-bonded to a terminal CH."
  },
  {
    "question_id": "ch09_q9_naming_diyne",
    "topic": "IUPAC Naming",
    "difficulty_level": "Medium",
    "question_text": "What is the systematic IUPAC name for the following diyne?",
    "question_smiles": "C#CCC#C",
    "options": [
      {
        "option_id": "A",
        "text": "penta-1,4-diyne",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "penta-1,3-diyne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "pentadiyne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,4-pentadiyne",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two triple bonds in one chain are handled with a multiplying prefix on the suffix and a locant for each bond. The chain is still numbered to give the unsaturation the lowest set of locants available.",
      "approach": "The five-carbon chain carries both triple bonds, so the parent is a pentadiyne. The molecule is symmetric about its central CH2, so numbering from either end lands the bonds on C1 and C4 and the set {1,4} is forced rather than chosen. The name is penta-1,4-diyne.",
      "note": "The final 'a' of the stem is dropped before a vowel and kept before a consonant, which is why one triple bond gives pent-1-yne and two give penta-1,4-diyne. It is a rule about sound, not about chemistry.",
      "options": {
        "A": "Five-carbon parent, two triple bonds, and the locant set {1,4} that the molecule's symmetry forces from either direction.",
        "B": "A different compound. Locants 1 and 3 put the two triple bonds in conjugation with no CH2 between them, and this structure has that CH2.",
        "C": "The right molecule with both locants omitted, which leaves the 1,3-isomer and the 1,4-isomer sharing one name.",
        "D": "The right molecule under the superseded style that gathers locants at the front of the name."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-carbon chain with a terminal triple bond at each end, separated by a single CH2 in the middle."
  },
  {
    "question_id": "ch09_q10_acidity_trend",
    "topic": "Alkyne Acidity & Acetylide Anions",
    "difficulty_level": "Medium",
    "question_text": "Arrange the following in order of increasing acidity (lowest acidity first, highest acidity last):",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "ethane < ethylene < ammonia < acetylene < ethanol",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "ethane < ammonia < ethylene < acetylene < ethanol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "ammonia < ethane < ethylene < ethanol < acetylene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "ethanol < acetylene < ethylene < ammonia < ethane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Acidity is a statement about the conjugate base: the acid whose anion holds the negative charge most comfortably is the strongest. For carbon acids that comfort is set almost entirely by the hybridization of the carbon that ends up charged.",
      "approach": "Rank by pKa, remembering that a lower pKa means a stronger acid, and read increasing acidity as running from the largest pKa down. McMurry's Table 9.1 gives an alkane 60, ethylene 44 and acetylene 25; ammonia sits at 35 and ethanol near 16. That produces alkane, then ethylene, then ammonia, then acetylene, then ethanol.",
      "note": "The three hydrocarbons span about 35 pKa units with no change of element at all. Only s character changes - 25 percent in sp3, 33 in sp2, 50 in sp - and an sp carbanion holds its lone pair in an orbital half of which is s, close to the nucleus. That single factor is the whole of the effect.",
      "options": {
        "A": "Runs alkane, ethylene, ammonia, acetylene, ethanol, matching the pKa sequence 60, 44, 35, 25, 16 from weakest acid to strongest.",
        "B": "Places ammonia after ethylene. Ammonia's pKa of 35 sits well below ethylene's 44, so ammonia is the stronger acid of that pair, not the weaker.",
        "C": "Puts ammonia at the least acidic end and acetylene beyond ethanol. Ammonia is more acidic than both hydrocarbons placed above it, and ethanol beats acetylene by roughly nine pKa units.",
        "D": "The entire series is reversed. This is the order of decreasing acidity, which is exactly what the question does not ask for."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch09_q11_base_selection",
    "topic": "Alkyne Acidity & Acetylide Anions",
    "difficulty_level": "Medium",
    "question_text": "Which of the following bases is strong enough to quantitatively deprotonate a terminal alkyne (pKa ≈ 25) in liquid ammonia?",
    "question_smiles": "CC#C",
    "options": [
      {
        "option_id": "A",
        "text": "Sodium amide (NaNH₂)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Sodium hydroxide (NaOH)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Sodium ethoxide (NaOEt)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Potassium tert-butoxide (KOtBu)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An acid-base reaction goes to completion only when it runs downhill, which means the proton must end up on the weaker base. In practice: the conjugate acid of the base must be a weaker acid than the substrate being deprotonated.",
      "approach": "A terminal alkyne has pKa about 25, so a base whose conjugate acid sits well above 25 will deprotonate it quantitatively. Amide ion's conjugate acid is ammonia at pKa 35 - ten units clear, an equilibrium constant of roughly ten billion on the acetylide's side. Hydroxide, ethoxide and tert-butoxide have conjugate acids near 16, 16 and 18 respectively, all below 25, so every one of those equilibria settles on the undeprotonated alkyne.",
      "note": "McMurry's phrasing is worth borrowing whole: acetylene can be deprotonated by the conjugate base of any acid whose pKa is greater than 25. The rule fixes where the equilibrium sits, and says nothing about how fast it gets there.",
      "options": {
        "A": "Ammonia's pKa of 35 clears the alkyne's 25 by ten units, so amide ion takes the proton essentially completely.",
        "B": "Water has pKa about 15.7, some nine units under the alkyne. The equilibrium favours the undeprotonated alkyne by around a billion to one.",
        "C": "Ethanol at pKa 16 is a far stronger acid than a terminal alkyne, which makes ethoxide the weaker base of the pair and unable to take the alkyne's proton.",
        "D": "tert-Butoxide is more basic than ethoxide, but its conjugate acid still sits near pKa 18, seven units short. Its bulk makes it a good base for E2 eliminations, not a stronger one on this scale."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Propyne: a methyl group bonded to a carbon that is triple-bonded to a terminal carbon carrying one hydrogen."
  },
  {
    "question_id": "ch09_q12_alkylation_primary",
    "topic": "Alkyne Acidity & Acetylide Anions",
    "difficulty_level": "Medium",
    "question_text": "Predict the major organic product when propyne is treated with sodium amide in liquid ammonia, followed by the addition of 1-bromobutane.",
    "question_smiles": "CC#C",
    "options": [
      {
        "option_id": "A",
        "text": "hept-2-yne",
        "smiles": "CCCCC#CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "hept-3-yne",
        "smiles": "CCCC#CCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "hex-2-yne",
        "smiles": "CCCC#CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-methylhex-3-yne",
        "smiles": "CC(C)C#CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An acetylide anion is a carbon nucleophile, and its reaction with an alkyl halide is an ordinary SN2 displacement. The new carbon-carbon bond forms at the halide's carbon, which is what makes this the chain-lengthening workhorse of the chapter.",
      "approach": "Sodium amide removes propyne's terminal hydrogen to give the propynyl anion, with the charge on the carbon that held it. That anion attacks the primary carbon of 1-bromobutane from the side opposite the bromide and displaces it. Three carbons from propyne plus four from the butyl group gives a seven-carbon chain, and the triple bond stays where it was - one carbon in from the methyl end. That is hept-2-yne.",
      "note": "McMurry restricts this reaction to primary halides. An acetylide is a strong base as well as a good nucleophile, so a secondary or tertiary halide sends it down the E2 path instead and returns the alkyne unchanged.",
      "options": {
        "A": "Seven carbons, with the triple bond at the position propyne already had it and the butyl chain attached at the carbon that carried the charge.",
        "B": "The right seven carbons with the triple bond one position further along. Reaching it would need the propynyl anion to bond through its methyl carbon, which carries no charge and no lone pair.",
        "C": "Six carbons, one short. This is what alkylation with 1-bromopropane would give.",
        "D": "A branched six-carbon skeleton - short by a carbon and branched besides. It would need a secondary halide, and an acetylide meeting one eliminates rather than substitutes."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-carbon chain with a triple bond at one end; the terminal alkyne carbon carries the single acidic hydrogen."
  },
  {
    "question_id": "ch09_q13_alkylation_tertiary",
    "topic": "Alkyne Acidity & Acetylide Anions",
    "difficulty_level": "Hard",
    "question_text": "What are the major organic products when sodium acetylide is treated with 2-bromo-2-methylpropane (tert-butyl bromide)?",
    "question_smiles": "C#C",
    "options": [
      {
        "option_id": "A",
        "text": "Acetylene and 2-methylpropene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3,3-dimethylbut-1-yne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,2-dimethylbut-3-yne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acetylene and 2-methylpropan-2-ol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An acetylide anion is a strong base as well as a good nucleophile, and the substrate decides which role it plays. Steric access at the carbon bearing the halide is what tips the balance.",
      "approach": "SN2 requires backside attack at the carbon holding the leaving group. In 2-bromo-2-methylpropane that carbon carries three methyl groups and there is simply no room behind it. With substitution shut off, the acetylide's basicity takes over: it removes a hydrogen from one of those methyls, bromide leaves, and 2-methylpropene forms by E2. The acetylide, now holding that proton, leaves the flask as acetylene.",
      "note": "This is the standing limit on acetylide alkylation. McMurry allows the reaction for primary halides; secondary halides give mixtures and tertiary ones give elimination alone, which is why a synthesis is arranged so the acetylide meets a primary carbon.",
      "options": {
        "A": "Elimination is all that is left once backside attack is blocked, and it returns the alkene plus the protonated acetylide.",
        "B": "The SN2 product, and the one outcome that is impossible here - a tertiary carbon offers no backside for the nucleophile to reach.",
        "C": "The same SN2 product under a name numbered from the wrong end, giving the triple bond a 3 where a 1 was available. It cannot form, for the same steric reason.",
        "D": "tert-Butyl alcohol would need water or hydroxide as the nucleophile. Neither is present, and an acetylide in liquid ammonia carries no oxygen to deliver."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Acetylene drawn as two triple-bonded carbons each carrying one hydrogen; the reagent is its sodium salt."
  },
  {
    "question_id": "ch09_q14_reaction_carbonyl",
    "topic": "Alkyne Acidity & Acetylide Anions",
    "difficulty_level": "Medium",
    "question_text": "What is the structure of the product obtained when sodium acetylide is reacted with acetone (propan-2-one), followed by aqueous acid workup?",
    "question_smiles": "CC(=O)C",
    "options": [
      {
        "option_id": "A",
        "text": "2-methylbut-3-yn-2-ol",
        "smiles": "CC(C)(O)C#C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-methylpent-3-yn-2-ol",
        "smiles": "CC(C)(O)C#CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-methylbut-3-en-2-ol",
        "smiles": "CC(C)(O)C=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "pent-3-yn-2-ol",
        "smiles": "CC(O)C#CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carbonyl carbon is electrophilic because oxygen draws density off it, and an acetylide anion is nucleophilic enough to add straight across the C=O without any catalyst. The result is a new carbon-carbon bond and an alkoxide sitting where the carbonyl was.",
      "approach": "Sodium acetylide adds to acetone's carbonyl carbon; the pi electrons shift onto oxygen and leave an alkoxide. Aqueous acid protonates that oxygen on workup. Count the carbons: two arrive from the acetylide and three from acetone, giving a five-carbon alcohol whose OH sits on the carbon that used to be the carbonyl. Numbering to give the OH the lower locant available makes it 2-methylbut-3-yn-2-ol.",
      "note": "The alcohol is tertiary because acetone already carries two alkyl groups on its carbonyl carbon. Run the same reaction on an aldehyde and the product is secondary; run it on formaldehyde and it is primary. The acetylide does not change - the carbonyl decides the class.",
      "options": {
        "A": "Two carbons from the acetylide, three from acetone, and the hydroxyl on the former carbonyl carbon, which was already carrying two methyls.",
        "B": "Six carbons rather than five. This is what a propynylide would deliver; sodium acetylide brings only acetylene's two carbons to the new bond.",
        "C": "The right skeleton with a double bond where the triple bond belongs. It is the vinyl anion's product, and nothing in these conditions reduces an alkyne.",
        "D": "A secondary alcohol on a five-carbon chain, which comes from propynylide adding to acetaldehyde rather than acetylide adding to acetone."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Acetone: a central carbon double-bonded to oxygen and carrying a methyl group on each side."
  },
  {
    "question_id": "ch09_q15_reaction_epoxide",
    "topic": "Alkyne Acidity & Acetylide Anions",
    "difficulty_level": "Hard",
    "question_text": "Predict the major organic product when sodium prop-1-yn-1-ylide is reacted with oxirane (ethylene oxide), followed by mild aqueous acid workup.",
    "question_smiles": "C1CO1",
    "options": [
      {
        "option_id": "A",
        "text": "pent-3-yn-1-ol",
        "smiles": "CC#CCCO",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "pent-4-yn-1-ol",
        "smiles": "C#CCCCO",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "pent-2-yn-1-ol",
        "smiles": "CCC#CCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-methylbut-3-yn-1-ol",
        "smiles": "C#CC(C)CO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An epoxide is strained enough that a strong nucleophile opens it without any acid catalysis, attacking a ring carbon in an SN2 sense while the oxygen leaves as an alkoxide. One step adds two carbons and an alcohol at the same time.",
      "approach": "The propynyl anion attacks a ring carbon from the side opposite the C-O bond that breaks. Oxirane is symmetric, so both carbons are equivalent and there is no regiochemical choice to make. The ring opens to an alkoxide two carbons long attached to the alkyne, and mild acid protonates it. Numbering the five-carbon product from the alcohol end puts the OH at C1 and the triple bond between C3 and C4: pent-3-yn-1-ol.",
      "note": "An epoxide always delivers exactly two carbons and an oxygen to whatever opens it. Compare the acetylide alkylations elsewhere in this chapter, where the chain grows by however many carbons the alkyl halide brings and no oxygen comes along at all.",
      "options": {
        "A": "Two carbons and an OH delivered by the ring, attached at the anion's charged carbon, which puts the triple bond two carbons from the alcohol.",
        "B": "The triple bond ends up at the far end from the alcohol. Getting there would need the anion to bond through its methyl carbon rather than its charged one.",
        "C": "Only one carbon separates the alcohol from the triple bond. A three-membered ring hands over two carbons when it opens, not one.",
        "D": "A branched product, from attack at a substituted ring carbon. Oxirane carries no substituents, so no carbon here could supply that methyl."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Oxirane: a three-membered ring of two carbons and one oxygen, each carbon carrying two hydrogens."
  },
  {
    "question_id": "ch09_q16_elimination_vicinal",
    "topic": "Alkyne Synthesis via Elimination",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product when 1,2-dibromobutane is treated with excess sodium amide (NaNH₂) in liquid ammonia, followed by a water workup?",
    "question_smiles": "CCC(Br)CBr",
    "options": [
      {
        "option_id": "A",
        "text": "but-1-yne",
        "smiles": "CCC#C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "but-2-yne",
        "smiles": "CC#CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "buta-1,3-diene",
        "smiles": "C=CC=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-bromobut-1-ene",
        "smiles": "CCC(Br)=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A vicinal dihalide loses two molecules of HX to a strong base and becomes an alkyne. The two eliminations happen in sequence, not together, and what sits between them is a vinylic halide.",
      "approach": "The first E2 takes a hydrogen and a bromide from the C1-C2 pair and gives 2-bromobut-1-ene. The second is harder, because a vinylic halide holds its halide more tightly, but excess amide forces it and the triple bond closes between C1 and C2. The product is terminal, so the excess amide immediately deprotonates it to the acetylide salt, and the water workup hands the proton back to give but-1-yne.",
      "note": "McMurry runs this pair of steps the other way round as a synthesis: add Br2 across an alkene, then treat with excess base. The sequence converts an alkene into an alkyne, which is why the vicinal dihalides are worth having.",
      "options": {
        "A": "The triple bond forms where the two bromides left, at C1 and C2, and the water workup reprotonates the acetylide the excess base had formed.",
        "B": "A triple bond between C2 and C3, but the bromides sit on C1 and C2 and the bond forms where they depart.",
        "C": "A conjugated diene would need a hydrogen and a bromide leaving from each end of the chain. Both bromides are on adjacent carbons, so both eliminations draw on the same C1-C2 pair.",
        "D": "The vinylic halide intermediate, caught after one elimination. Excess base is specified precisely so the second elimination happens too."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a bromine on the terminal carbon and a second bromine on the carbon next to it."
  },
  {
    "question_id": "ch09_q17_elimination_geminal",
    "topic": "Alkyne Synthesis via Elimination",
    "difficulty_level": "Hard",
    "question_text": "Predict the major product when 2,2-dichloropentane is treated with excess sodium amide (NaNH₂) in liquid ammonia, followed by water workup.",
    "question_smiles": "CCCC(Cl)(Cl)C",
    "options": [
      {
        "option_id": "A",
        "text": "pent-1-yne",
        "smiles": "CCCC#C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "pent-2-yne",
        "smiles": "CCC#CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "penta-1,2-diene",
        "smiles": "C=C=CCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "penta-1,3-diene",
        "smiles": "C=CC=CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A geminal dihalide eliminates twice from one carbon, so the triple bond forms between that carbon and whichever neighbour gives up the hydrogens. When the two neighbours differ, the terminal alkyne wins - and it wins on what happens after the elimination, not during it.",
      "approach": "Both chlorines are on C2. Eliminating toward C3 would give pent-2-yne; toward C1, pent-1-yne. Excess amide deprotonates any terminal alkyne it produces to the acetylide, and under these conditions that step does not run backwards; amide also walks an internal triple bond toward the chain end for the same reason. The acetylide accumulates, and the water workup delivers pent-1-yne.",
      "note": "McMurry's own treatment covers vicinal dihalides. The geminal case, and the base-driven march of a triple bond to the chain end, sit past the text but well inside ACS exam scope, so they are kept here rather than dropped.",
      "options": {
        "A": "The terminal alkyne, held there by the acetylide sink that excess amide creates and released by the water workup.",
        "B": "The direct elimination product toward C3, and it does form - but excess amide deprotonates and relocates it rather than leaving it to be isolated.",
        "C": "An allene, from eliminating once toward C1 and once toward C3. Allenes are less stable than alkynes, and amide moves them onward.",
        "D": "A conjugated diene needs hydrogen and halide leaving from separated carbons. Both chlorines share one carbon, so the unsaturation they create is concentrated at a single site."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-carbon chain with two chlorines on the same carbon, the second carbon in from one end."
  },
  {
    "question_id": "ch09_q18_base_internal_elimination",
    "topic": "Alkyne Synthesis via Elimination",
    "difficulty_level": "Medium",
    "question_text": "Which of the following reaction conditions is most suitable to synthesize the internal alkyne but-2-yne from 2,3-dibromobutane?",
    "question_smiles": "CC(Br)C(Br)C",
    "options": [
      {
        "option_id": "A",
        "text": "Molten KOH at high temperature (200 °C) or NaNH₂ (2 equivalents) in mineral oil with heat",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Sodium bicarbonate (NaHCO₃) in water at room temperature",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Sodium metal in liquid ammonia (Na / NH₃)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Dilute sulfuric acid in water (H₂SO₄ / H₂O)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The second elimination in a dihalide-to-alkyne sequence is the difficult one: a vinylic halide holds its halide tightly and the hydrogen it must lose is not acidic. What forces that step through depends on whether the alkyne being built is terminal or internal.",
      "approach": "But-2-yne is internal, so there is no terminal proton and no acetylide can form. That removes the one-way sink that pulls a terminal alkyne synthesis to completion, and the second elimination has to be forced thermally instead. Molten potassium hydroxide near 200 degrees, or two equivalents of sodium amide in mineral oil with heat, supply both the base strength and the temperature the step needs.",
      "note": "Two equivalents of amide are enough here, where making a terminal alkyne would consume a third in deprotonating the product. Counting the equivalents a scheme specifies is a reliable way to tell which of the two cases you are looking at.",
      "options": {
        "A": "Forcing conditions, because an internal alkyne offers no acidic proton and so no irreversible acetylide step to drive the second elimination.",
        "B": "Bicarbonate is far too weak. Its conjugate acid, carbonic acid, sits near pKa 6 - nowhere near enough to take a hydrogen from an alkyl or vinylic halide.",
        "C": "Sodium in ammonia is a dissolving-metal reduction, which turns an alkyne into a trans alkene. It reduces rather than eliminates, so it cannot build the triple bond at all.",
        "D": "Dilute acid supplies no base. Eliminating HX needs something to accept the proton, and water under these conditions is not it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a bromine on the second carbon and another on the third."
  },
  {
    "question_id": "ch09_q19_elimination_intermediate",
    "topic": "Alkyne Synthesis via Elimination",
    "difficulty_level": "Easy",
    "question_text": "What is the functional group of the intermediate that is formed after the first elimination step when a geminal or vicinal dihalide is treated with a base to form an alkyne?",
    "question_smiles": "CC(Br)C(Br)C",
    "options": [
      {
        "option_id": "A",
        "text": "Vinyl halide",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Allyl halide",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Haloalkyne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Allene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Double dehydrohalogenation is two E2 reactions one after the other, not a single concerted event. Naming the species in between is what makes the second step's difficulty comprehensible.",
      "approach": "The first elimination removes one hydrogen and one halide and forms a carbon-carbon double bond. The other halide is still in place, on a carbon that is now part of that double bond. A halogen bonded directly to a doubly bonded carbon is a vinylic halide by definition. It also explains what comes next: the C-X bond of a vinylic halide is shorter and stronger than the one in an alkyl halide, which is why the second elimination needs harsher conditions than the first.",
      "note": "McMurry runs the same reasoning backwards. If vinylic halides are the intermediates on the way to alkynes, then vinylic halides themselves ought to give alkynes with strong base - and the text confirms that they do.",
      "options": {
        "A": "One elimination leaves the surviving halogen attached to a carbon of the new double bond, which is exactly what defines this class.",
        "B": "An allylic halide carries its halogen one carbon away from the double bond, not on it. Eliminating across an adjacent pair does not produce that arrangement.",
        "C": "A haloalkyne has its halogen on a triple-bond carbon. No triple bond exists until the second elimination, so nothing at this stage can be one.",
        "D": "An allene has two cumulated double bonds and no halogen at all. It can arise from a different elimination pattern, but it is not what lies between the two steps here."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A vicinal dihalide: a four-carbon chain carrying a bromine on each of the two middle carbons."
  },
  {
    "question_id": "ch09_q20_hydrohalogenation_one_eq",
    "topic": "Electrophilic Additions",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product when pent-1-yne is treated with 1 equivalent of hydrobromic acid (HBr)?",
    "question_smiles": "CCCC#C",
    "options": [
      {
        "option_id": "A",
        "text": "2-bromopent-1-ene",
        "smiles": "CCCC(Br)=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(E)-1-bromopent-1-ene",
        "smiles": "CCC/C=C/Br",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,2-dibromopentane",
        "smiles": "CCCC(Br)(Br)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,2-dibromopentane",
        "smiles": "CCCC(Br)CBr",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "HX adds to an alkyne by Markovnikov's rule for the same reason it does to an alkene - the proton goes wherever it leaves the more stable cation behind. What differs is that the cation is vinylic, with its charge on an sp carbon.",
      "approach": "Protonating C1 of pent-1-yne leaves the charge on C2, a secondary vinylic cation carrying a propyl group. Protonating C2 would leave it on C1 as a primary vinylic cation, which McMurry describes as so difficult to form that there is no clear evidence it exists at all. So the proton adds at C1, bromide captures C2, and the result is the vinylic bromide 2-bromopent-1-ene: halogen on the more substituted carbon, hydrogen on the less.",
      "note": "McMurry's worked case is this same reaction on 1-hexyne, giving 2-bromo-1-hexene. One equivalent stops at the vinylic bromide; a second carries the addition on to the geminal dihalide.",
      "options": {
        "A": "Markovnikov addition puts bromide on C2, the more substituted carbon, because that is where the more stable vinylic cation carried the charge.",
        "B": "Anti-Markovnikov, with bromine on C1. Reaching it needs the primary vinylic cation McMurry says there is no clear evidence for. It is the peroxide-radical product, and no peroxide is present.",
        "C": "The two-equivalent product. The question supplies one equivalent, which stops at the vinylic bromide.",
        "D": "Bromines on adjacent carbons is what Br2 gives. Each equivalent of HBr delivers one bromine and one hydrogen, not two bromines."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Pent-1-yne: five carbons in a row with the triple bond between the first two, and one hydrogen on the end carbon."
  },
  {
    "question_id": "ch09_q21_hydrohalogenation_excess",
    "topic": "Electrophilic Additions",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product when pent-1-yne is treated with excess (2 equivalents) hydrobromic acid (HBr)?",
    "question_smiles": "CCCC#C",
    "options": [
      {
        "option_id": "A",
        "text": "2,2-dibromopentane",
        "smiles": "CCCC(Br)(Br)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1,2-dibromopentane",
        "smiles": "CCCC(Br)CBr",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,1-dibromopentane",
        "smiles": "CCCCC(Br)Br",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,3-dibromopentane",
        "smiles": "CCC(Br)C(Br)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The second equivalent of HX adds across the double bond the first equivalent left behind, and the regiochemistry of that second addition is decided by the halogen already in place rather than by the alkyl chain.",
      "approach": "The first equivalent gives 2-bromopent-1-ene. Protonating that alkene at C1 puts the cation on C2 - the carbon already carrying bromine - and a bromine lone pair delocalises into the empty orbital, making that cation much more stable than the alternative at C1. Bromide then captures C2, so both bromines finish on the same carbon and the product is the geminal dihalide 2,2-dibromopentane.",
      "note": "McMurry's parallel case is 1-hexyne with two equivalents of HBr giving 2,2-dibromohexane. Both halogens landing on one carbon is the signature of this route, and it is precisely the substitution pattern the vicinal-dihalide elimination of the preparation section cannot supply.",
      "options": {
        "A": "Both bromines on C2, because the first bromine stabilises the cation at its own carbon and steers the second bromide to the same place.",
        "B": "Bromines on adjacent carbons, which is the pattern halogen addition gives. Two equivalents of HBr put both halogens on one carbon.",
        "C": "Both bromines on C1. That needs the cation at C1, and neither the propyl chain nor the bromine already present favours it.",
        "D": "Bromines on C2 and C3, which would require the second addition to occur at a double bond this intermediate does not possess."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-carbon chain whose first two carbons are joined by a triple bond, the terminal one bearing a single hydrogen."
  },
  {
    "question_id": "ch09_q22_hydrohalogenation_peroxides",
    "topic": "Electrophilic Additions",
    "difficulty_level": "Hard",
    "question_text": "Predict the major product(s) when 1-hexyne is treated with HBr in the presence of organic peroxides (ROOR).",
    "question_smiles": "CCCCC#C",
    "options": [
      {
        "option_id": "A",
        "text": "A mixture of (E)- and (Z)-1-bromohex-1-ene",
        "smiles": "CCCCC=CBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-bromohex-1-ene",
        "smiles": "CCCCC(Br)=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,2-dibromohexane",
        "smiles": "CCCCC(Br)(Br)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,1-dibromohexane",
        "smiles": "CCCCCC(Br)Br",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Peroxides switch HBr addition from an ionic pathway to a radical chain, and the regiochemistry inverts with it. It is the bromine radical, not the proton, that adds first, so bromine goes wherever it leaves the more stable radical.",
      "approach": "A peroxide initiates homolysis of HBr to give a bromine radical. That radical adds to C1 of 1-hexyne, leaving a secondary vinylic radical at C2 rather than the primary alternative at C1. The radical abstracts a hydrogen atom from another molecule of HBr, which delivers 1-bromohex-1-ene and regenerates the chain carrier. Bromine ends on C1, the opposite carbon from the ionic reaction.",
      "note": "McMurry develops radical HBr addition for alkenes and does not carry it to alkynes; the extension is standard ACS exam material and is kept on that ground. Vinylic radicals invert faster than they abstract hydrogen, so the geometry set during addition does not survive - the answer really is a mixture, and the option draws the connectivity both isomers share rather than either one of them.",
      "options": {
        "A": "Bromine on C1, anti-Markovnikov, with the geometry left unfixed because the vinylic radical inverts faster than it can be trapped.",
        "B": "The ionic Markovnikov product, bromine on C2. It is what forms when peroxides are absent, which is the single condition this question changes.",
        "C": "The two-equivalent ionic product. A radical chain consumes one HBr per turn and stops at the vinylic bromide.",
        "D": "Both bromines on C1. Neither the ionic nor the radical route puts two halogens on the terminal carbon of a terminal alkyne."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Hex-1-yne: a six-carbon chain with the triple bond at one end, the terminal carbon carrying one hydrogen."
  },
  {
    "question_id": "ch09_q23_halogenation_one_eq",
    "topic": "Electrophilic Additions",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product when but-2-yne is treated with 1 equivalent of bromine (Br₂) in CH₂Cl₂ at low temperature?",
    "question_smiles": "CC#CC",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-2,3-dibromobut-2-ene",
        "smiles": "C/C(Br)=C(\\Br)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-2,3-dibromobut-2-ene",
        "smiles": "C/C(Br)=C(/Br)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2,2-dibromobutane",
        "smiles": "CC(Br)(Br)CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,2,3,3-tetrabromobutane",
        "smiles": "CC(Br)(Br)C(Br)(Br)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Halogens add across a triple bond through a cyclic halonium ion, exactly as they do across a double bond. The ring forces the second halide to arrive from the opposite face, and that anti delivery fixes the geometry of the alkene left behind.",
      "approach": "Bromine attacks one face of but-2-yne's triple bond and closes to a bromonium ion bridging C2 and C3. Bromide opens the ring by attacking the far side of one carbon, so the two bromines end on opposite sides of the new double bond. Each alkene carbon now carries one bromine and one methyl; bromine outranks methyl at both, so two bromines on opposite sides is the E descriptor.",
      "note": "McMurry's worked case is 1-butyne with Br2, which gives (E)-1,2-dibromo-1-butene by the same anti addition. Read the descriptor by ranking the groups on each carbon separately - anti addition does not always produce an E alkene, only one whose two added groups are trans.",
      "options": {
        "A": "Anti addition puts the bromines on opposite sides, and since bromine beats methyl on both carbons that arrangement is E.",
        "B": "The syn product. Nothing here delivers both bromines to one face; the bridging bromonium ion is exactly what prevents it.",
        "C": "Both bromines on a single carbon, which is the two-equivalent HBr pattern rather than anything Br2 produces.",
        "D": "The product of two equivalents of Br2. One equivalent stops at the dibromoalkene, and one is what the question supplies."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "But-2-yne: four carbons with an internal triple bond joining the middle two and a methyl group at each end."
  },
  {
    "question_id": "ch09_q24_halogenation_excess",
    "topic": "Electrophilic Additions",
    "difficulty_level": "Easy",
    "question_text": "What is the major product when hex-3-yne is treated with excess chlorine gas (Cl₂)?",
    "question_smiles": "CCC#CCC",
    "options": [
      {
        "option_id": "A",
        "text": "3,3,4,4-tetrachlorohexane",
        "smiles": "CCC(Cl)(Cl)C(Cl)(Cl)CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3,4-dichlorohex-3-ene",
        "smiles": "CCC(Cl)=C(Cl)CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,2,3,4-tetrachlorohexane",
        "smiles": "ClCC(Cl)C(Cl)C(Cl)CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2,2,3,3-tetrachlorohexane",
        "smiles": "CC(Cl)(Cl)C(Cl)(Cl)CCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A triple bond is consumed one pi bond at a time. A second equivalent of halogen adds across the double bond the first equivalent left, and each addition places one halogen on each of the two carbons involved.",
      "approach": "One equivalent of Cl2 adds anti across hex-3-yne to give 3,4-dichlorohex-3-ene. That alkene still holds a pi bond, and the second equivalent adds across it, putting another chlorine on C3 and another on C4. Both former alkyne carbons finish carrying two chlorines apiece, which is 3,3,4,4-tetrachlorohexane.",
      "note": "McMurry's example runs the same course on 1-butyne, which gives 1,1,2,2-tetrabromobutane with excess Br2. The tetrahalide always has its four halogens paired on the two carbons that were the triple bond; they never spread along the chain.",
      "options": {
        "A": "Two chlorines on each of C3 and C4, the two carbons where both additions took place.",
        "B": "The one-equivalent product. The question specifies excess chlorine, which carries the addition through to the saturated tetrahalide.",
        "C": "Four chlorines spread across four consecutive carbons. Both additions happen at the same pair of carbons, so the halogens cannot walk along the chain.",
        "D": "The right number of chlorines on the wrong pair of carbons. The triple bond lies between C3 and C4, so that is where all four must land."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Hex-3-yne: a six-carbon chain with the triple bond joining the two middle carbons and an ethyl group on each side."
  },
  {
    "question_id": "ch09_q25_reactivity_rational",
    "topic": "Electrophilic Additions",
    "difficulty_level": "Hard",
    "question_text": "Alkynes are generally less reactive than alkenes toward electrophilic addition, despite the higher density of pi electrons in a triple bond. What is the primary reason?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The intermediate vinylic carbocation is less stable than an alkyl carbocation, because the positive charge sits on an sp-hybridized carbon.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The triple bond is shorter, which sterically prevents electrophilic attack.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Breaking one of an alkyne's two pi bonds costs more energy than breaking the single pi bond of an alkene.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Electrophilic addition to alkynes is endothermic overall, while addition to alkenes is exothermic.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Reactivity toward electrophilic addition is a question about the rate-determining step, and for these additions that step is the one that builds the cation. Whichever substrate produces the less stable cation reacts more slowly, whatever its electron density.",
      "approach": "An electrophile adding to an alkene gives an alkyl carbocation with the charge on an sp2 carbon. The same electrophile adding to an alkyne gives a vinylic carbocation with the charge on an sp carbon. An sp carbon carries 50 percent s character and holds its electrons closer in, which makes it a poor place to put positive charge: McMurry notes that a secondary vinylic cation forms about as readily as a primary alkyl one, and that a primary vinylic cation may not exist at all. A higher barrier to that intermediate is the slower rate.",
      "note": "The premise in the stem is true and simply does not decide the outcome. A cylindrical pi cloud is the more electron-rich of the two and still reacts more slowly, which is a standing reminder that rates track transition-state energies rather than ground-state properties.",
      "options": {
        "A": "An sp carbon stabilises positive charge poorly, so the vinylic cation is high in energy and so is the transition state leading to it.",
        "B": "A shorter bond shields nothing here. The pi cloud of an alkyne wraps the whole axis, and an electrophile can approach from any direction around it.",
        "C": "McMurry's hydrogenation data run the other way: the first step, alkyne to alkene, is more exothermic than the second, so the alkyne's first pi bond is the easier one to break.",
        "D": "Both additions are exothermic overall. What separates the two substrates is a difference in rate, not in thermodynamic direction."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch09_q26_hydration_terminal",
    "topic": "Hydration",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product when hex-1-yne is treated with aqueous sulfuric acid in the presence of mercuric sulfate (HgSO₄)?",
    "question_smiles": "CCCCC#C",
    "options": [
      {
        "option_id": "A",
        "text": "hexan-2-one",
        "smiles": "CCCCC(=O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "hexanal",
        "smiles": "CCCCCC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "hexan-3-one",
        "smiles": "CCCC(=O)CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "hex-1-en-2-ol",
        "smiles": "CCCCC(O)=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Mercury(II)-catalysed hydration obeys Markovnikov's rule, so the OH lands on the more substituted alkyne carbon. What gets isolated is never the alcohol that produces, because an enol tautomerises to a carbonyl compound faster than it can be collected.",
      "approach": "Mercury(II) coordinates the triple bond of hex-1-yne and water attacks the more substituted carbon, C2. The acidic medium then replaces mercury with hydrogen - no borohydride step is needed here, unlike alkene oxymercuration - leaving the enol hex-1-en-2-ol. Tautomerisation moves that OH proton to C1 and turns the pi bond into a C=O at C2, giving the methyl ketone hexan-2-one.",
      "note": "McMurry runs this exact reaction on 1-hexyne and reports 2-hexanone in 78 percent yield. Hydration is most useful on a terminal alkyne precisely because only one ketone can result; the text's own point is that an unsymmetrical internal alkyne gives a mixture instead.",
      "options": {
        "A": "Markovnikov OH at C2, tautomerised to the ketone. A terminal alkyne hydrated by this route always yields a methyl ketone.",
        "B": "The aldehyde is what hydroboration-oxidation gives, putting oxygen on C1 instead. The two reactions are complementary, and this is not the one that produces it.",
        "C": "Oxygen at C3 would require water to attack a carbon that was never part of the triple bond.",
        "D": "The enol intermediate, offered as though it could be isolated. McMurry notes the keto-enol equilibrium lies almost entirely on the ketone side and that enols are essentially never collected."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-carbon chain with a triple bond between the first two carbons; the end carbon bears one hydrogen."
  },
  {
    "question_id": "ch09_q27_hydration_symmetrical",
    "topic": "Hydration",
    "difficulty_level": "Medium",
    "question_text": "Predict the major organic product when hex-3-yne is reacted with water, sulfuric acid, and mercuric sulfate.",
    "question_smiles": "CCC#CCC",
    "options": [
      {
        "option_id": "A",
        "text": "hexan-3-one",
        "smiles": "CCC(=O)CCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "hexan-2-one",
        "smiles": "CCCCC(=O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "hexanal",
        "smiles": "CCCCCC=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A mixture of hexan-2-one and hexan-3-one",
        "smiles": "CCCCC(=O)C.CCC(=O)CCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A symmetrical internal alkyne removes the regiochemical question entirely. Water can attack either alkyne carbon and arrive at the same enol, so there is only one product to predict and Markovnikov's rule never has to be applied.",
      "approach": "Hex-3-yne carries an ethyl group on each side of the triple bond, which makes C3 and C4 equivalent. Whichever one water attacks, the enol formed is hex-3-en-3-ol; tautomerisation shifts the OH proton to the neighbouring carbon and places the C=O at C3. Hexan-3-one is the only ketone the substrate can reach.",
      "note": "Symmetry is what makes this case clean. Hydration is synthetically useful either on a symmetrical internal alkyne, where both modes of attack converge, or on a terminal alkyne, where Markovnikov selectivity picks one carbon - and awkward on everything in between.",
      "options": {
        "A": "Both alkyne carbons are equivalent, so both routes converge on the same enol and the same ketone.",
        "B": "Oxygen at C2, which is not one of the alkyne carbons. Hydration can only put oxygen where the triple bond was.",
        "C": "The aldehyde form, which an internal alkyne cannot reach - neither carbon of its triple bond is at the end of the chain.",
        "D": "A mixture is what an unsymmetrical internal alkyne gives. Here the two carbons are identical, so there are not two products for a mixture to contain."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-carbon chain with an internal triple bond joining the third and fourth carbons, an ethyl group on each side."
  },
  {
    "question_id": "ch09_q28_hydration_unsymmetrical",
    "topic": "Hydration",
    "difficulty_level": "Hard",
    "question_text": "What is the outcome of reacting pent-2-yne with aqueous sulfuric acid in the presence of mercuric sulfate?",
    "question_smiles": "CCC#CC",
    "options": [
      {
        "option_id": "A",
        "text": "A roughly equal mixture of pentan-2-one and pentan-3-one",
        "smiles": "CCCC(=O)C.CCC(=O)CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "pentan-2-one only",
        "smiles": "CCCC(=O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "pentan-3-one only",
        "smiles": "CCC(=O)CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "pentanal only",
        "smiles": "CCCCC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Markovnikov's rule needs the two alkyne carbons to differ in substitution before it can choose between them. An unsymmetrical internal alkyne has an alkyl group on each, so the rule has nothing left to work with.",
      "approach": "Pent-2-yne carries a methyl on C2 and an ethyl on C3. Both alkyne carbons are internal and similarly substituted, so mercury-catalysed hydration shows no useful preference between them. Attack at C2 gives an enol that tautomerises to pentan-2-one; attack at C3 gives one that tautomerises to pentan-3-one. Roughly equal amounts of both come out of the flask.",
      "note": "McMurry states this outcome directly - a mixture of both possible ketones results from an unsymmetrically substituted internal alkyne - and draws the practical conclusion that the reaction is most useful on terminal alkynes. Knowing when a reaction is not synthetically useful is part of knowing the reaction.",
      "options": {
        "A": "Neither alkyne carbon is favoured, so both enols form and both tautomerise; the two ketones are drawn side by side.",
        "B": "Attack at C2 alone. Nothing about pent-2-yne makes C2 more electrophilic than C3, so this is half of the answer.",
        "C": "Attack at C3 alone, which is the other half of the same mixture.",
        "D": "An aldehyde needs oxygen on a terminal carbon, and pent-2-yne's triple bond does not reach either end of the chain."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-carbon chain with the triple bond between the second and third carbons: a methyl group on one side of it, an ethyl on the other."
  },
  {
    "question_id": "ch09_q29_hydroboration_terminal",
    "topic": "Hydration",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product of the hydroboration-oxidation of hex-1-yne using disiamylborane, followed by hydrogen peroxide and sodium hydroxide?",
    "question_smiles": "CCCCC#C",
    "options": [
      {
        "option_id": "A",
        "text": "hexanal",
        "smiles": "CCCCCC=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "hexan-2-one",
        "smiles": "CCCCC(=O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "hexan-1-ol",
        "smiles": "CCCCCCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "hexan-3-one",
        "smiles": "CCCC(=O)CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hydroboration-oxidation delivers water across a triple bond the opposite way round from mercury(II) catalysis, putting the oxygen on the less substituted carbon. Applied to a terminal alkyne it reaches an aldehyde, which the mercury route cannot.",
      "approach": "Disiamylborane is bulky enough that only one equivalent adds; plain BH3 would add twice to a terminal alkyne and ruin the reaction, which is why the hindered borane is specified. Boron goes to C1, the less hindered carbon, and hydrogen to C2. Basic peroxide then replaces boron with OH, giving the enol hex-1-en-1-ol, and tautomerisation leaves the oxygen on C1. The carbonyl therefore ends at the end of the chain: hexanal.",
      "note": "McMurry presents the two hydrations as a complementary pair. One terminal alkyne gives a methyl ketone with aqueous acid and mercury(II) sulfate and an aldehyde by hydroboration-oxidation - the reagent decides which, not the substrate.",
      "options": {
        "A": "Boron adds to C1, so the oxygen ends on C1, and tautomerisation puts the carbonyl at the end of the chain.",
        "B": "The methyl ketone, which is the mercury(II)-catalysed product. It is this reaction's complement rather than its result.",
        "C": "The alcohol an alkene would give under hydroboration-oxidation. Here the oxidation stops at an enol, which tautomerises rather than remaining an alcohol.",
        "D": "Oxygen at C3, on a carbon that was never part of the triple bond and so can never carry the new oxygen."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-carbon chain with the triple bond between the first two carbons, the terminal one carrying a single hydrogen."
  },
  {
    "question_id": "ch09_q30_hydroboration_intermediate",
    "topic": "Hydration",
    "difficulty_level": "Hard",
    "question_text": "What is the structure of the enol intermediate formed upon basic peroxide oxidation of the vinylborane intermediate in the hydroboration of propyne?",
    "question_smiles": "CC#C",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-prop-1-en-1-ol",
        "smiles": "C/C=C/O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "prop-1-en-2-ol",
        "smiles": "CC(O)=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "prop-2-en-1-ol",
        "smiles": "C=CCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "propan-1-ol",
        "smiles": "CCCO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hydroboration is a syn addition, so hydrogen and boron arrive on the same face of the triple bond. Oxidation then swaps boron for OH without disturbing the arrangement, which means the enol's geometry was fixed back at the addition step.",
      "approach": "Boron adds to propyne's terminal carbon and hydrogen to the internal one, both from the same side. The new hydrogen is therefore cis to boron, which puts boron trans to the methyl group across the new double bond. Basic peroxide replaces boron with OH with retention, so OH finishes trans to the methyl. Ranking OH over H on one carbon and methyl over H on the other makes this the E isomer of prop-1-en-1-ol.",
      "note": "The enol is an intermediate and not a product - it tautomerises to propanal before anything can be isolated. The question asks for it because its geometry is the surviving evidence that the addition was syn, which the aldehyde no longer records.",
      "options": {
        "A": "Oxygen on the terminal carbon from anti-Markovnikov boron delivery, and trans to the methyl because the addition was syn.",
        "B": "The Markovnikov enol, with oxygen on the internal carbon. That is the mercury(II) hydration intermediate, not the hydroboration one.",
        "C": "Allyl alcohol, with the oxygen on a saturated carbon and the double bond one position over. Hydroboration puts oxygen on a carbon that was part of the triple bond.",
        "D": "The saturated alcohol. Only one equivalent of borane adds here, and the oxidation replaces boron with OH rather than reducing anything."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Propyne: a methyl group bonded to one carbon of a triple bond whose other carbon carries a single hydrogen."
  },
  {
    "question_id": "ch09_q31_acid_tautomerism_mech",
    "topic": "Hydration",
    "difficulty_level": "Medium",
    "question_text": "Which of the following describes the first step of the mechanism for the acid-catalyzed tautomerization of the enol prop-1-en-2-ol to acetone?",
    "question_smiles": "CC(O)=C",
    "options": [
      {
        "option_id": "A",
        "text": "Protonation at the terminal CH2 of the double bond, giving a cation stabilized by donation from the oxygen lone pair.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Deprotonation of the oxygen atom by water to form an enolate.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Protonation of the oxygen atom to form a protonated enol.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Nucleophilic attack by water on the double bond.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Keto-enol tautomerism moves one hydrogen and shifts one pi bond, and acid and base perform those two operations in opposite orders. Under acid the carbon is protonated first and the oxygen deprotonated second.",
      "approach": "In acidic solution the enol's C=C is the nucleophile. It takes a proton at the terminal CH2, which leaves the positive charge on the carbon bearing the hydroxyl. Oxygen immediately donates a lone pair into that empty orbital, so the intermediate is really a protonated ketone rather than a bare carbocation - which is why the step is so easy. Water then removes the proton from oxygen, and acetone is what is left.",
      "note": "McMurry defers the full treatment of this equilibrium to the carbonyl chapters, but settles its direction here: with few exceptions it lies on the ketone side, and enols are essentially never isolated.",
      "options": {
        "A": "The alkene is the nucleophile under acid, and protonating it at the CH2 end places the charge next to oxygen where a lone pair can carry it.",
        "B": "Removing the O-H proton gives the enolate, which is the base-catalysed route. Acidic solution contains nothing basic enough to start that way.",
        "C": "Protonating oxygen does happen and is reversible, but it leads nowhere. It makes the enol a poorer nucleophile rather than moving it toward the ketone.",
        "D": "Water attacking the double bond would introduce a second oxygen. Tautomerism only rearranges the atoms already present."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An enol: a hydroxyl group on the middle carbon of a three-carbon fragment, that carbon double-bonded to a terminal CH2."
  },
  {
    "question_id": "ch09_q32_base_tautomerism_mech",
    "topic": "Hydration",
    "difficulty_level": "Medium",
    "question_text": "What is the key intermediate formed in the first step of the base-catalyzed tautomerization of an enol to its keto form?",
    "question_smiles": "CC(O)=C",
    "options": [
      {
        "option_id": "A",
        "text": "Enolate anion",
        "smiles": "CC([O-])=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Oxocarbocation",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Vinylic carbocation",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Vinylic radical",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Under base the two operations run in the reverse order from the acidic case: the oxygen loses its proton first and carbon gains one second. What sits in between carries a negative charge shared across carbon and oxygen.",
      "approach": "Hydroxide removes the O-H proton, the most acidic hydrogen the enol has. The anion that results is delocalised - the charge can be drawn on oxygen with a C=C alongside, or on the terminal carbon with a C=O alongside - and that delocalisation is what makes the deprotonation favourable in the first place. Protonating the carbon end of that anion then completes the move to the ketone.",
      "note": "The same anion is the reactive species behind the alpha-substitution and condensation chemistry of the carbonyl chapters. Meeting it here, as a tautomerisation intermediate, is the first of many appearances it makes.",
      "options": {
        "A": "Losing the O-H proton gives an anion delocalised between oxygen and the terminal carbon; protonating its carbon end finishes the tautomerisation.",
        "B": "A cation stabilised by oxygen is the acid-catalysed intermediate. Basic conditions supply no proton with which to make one.",
        "C": "A vinylic carbocation belongs to electrophilic addition across a triple bond, not to a proton transfer on an enol.",
        "D": "Radicals turn up in peroxide-initiated additions and in dissolving-metal reductions. A base-mediated proton transfer moves electrons in pairs throughout."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "The same enol drawn again: a three-carbon fragment with OH on the central carbon and a double bond to the terminal CH2."
  },
  {
    "question_id": "ch09_q33_complete_hydrogenation",
    "topic": "Reduction",
    "difficulty_level": "Easy",
    "question_text": "What is the major organic product when dec-4-yne is treated with excess hydrogen gas (H₂) in the presence of a palladium on carbon (Pd/C) catalyst?",
    "question_smiles": "CCCC#CCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "decane",
        "smiles": "CCCCCCCCCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-dec-4-ene",
        "smiles": "CCCCC/C=C\\CCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)-dec-4-ene",
        "smiles": "CCCCC/C=C/CCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "dec-4-yne (no reaction occurs)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hydrogenating an alkyne over an active catalyst does not stop halfway. The alkene produced in the first step is itself a substrate for the same catalyst and is consumed about as fast as it appears.",
      "approach": "Palladium on carbon is a fully active hydrogenation catalyst, so both pi bonds are reduced. The reaction does pass through dec-4-ene, and McMurry notes the first step is the more exothermic of the two, but the alkene never accumulates on this catalyst. Two equivalents of hydrogen are taken up and the ten-carbon skeleton emerges fully saturated as decane.",
      "note": "Stopping at the alkene requires deliberately spoiling the catalyst, and that is exactly what the Lindlar catalyst is: palladium precipitated onto calcium carbonate and then deactivated with lead acetate and quinoline. The substrate does not choose where to stop; the catalyst does.",
      "options": {
        "A": "Both pi bonds go on an active catalyst, so the ten carbons of the substrate come out as the saturated alkane.",
        "B": "The cis alkene is the Lindlar product. Pd/C is not deactivated and will not stop at the alkene stage.",
        "C": "The trans alkene comes from a dissolving-metal reduction, which uses solvated electrons in solution and no catalyst at all.",
        "D": "Alkynes are hydrogenated readily over Pd/C. This is among the reactions the catalyst does best, not one it fails at."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A ten-carbon chain with an internal triple bond four carbons in from one end."
  },
  {
    "question_id": "ch09_q34_lindlar_reduction",
    "topic": "Reduction",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product when hex-3-yne is reduced using hydrogen gas in the presence of Lindlar's catalyst?",
    "question_smiles": "CCC#CCC",
    "options": [
      {
        "option_id": "A",
        "text": "(Z)-hex-3-ene",
        "smiles": "CC/C=C\\CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(E)-hex-3-ene",
        "smiles": "CC/C=C/CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "hexane",
        "smiles": "CCCCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "hexan-3-ol",
        "smiles": "CCC(O)CCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A poisoned catalyst is how a hydrogenation is stopped at the alkene. Lindlar's is palladium precipitated on calcium carbonate and deactivated with lead acetate and quinoline - active enough to reduce the alkyne, not active enough to touch the alkene it makes.",
      "approach": "Hydrogen is delivered from the catalyst surface, so both hydrogen atoms reach the same face of the triple bond. Syn addition to hex-3-yne therefore puts the two new hydrogens cis, which leaves the two ethyl groups cis to each other as well. Ranking ethyl above hydrogen on each alkene carbon makes that the Z descriptor: (Z)-hex-3-ene.",
      "note": "McMurry records the industrial case that made this reaction matter. Hoffmann-LaRoche uses it in the commercial synthesis of vitamin A, where the cis isomer formed on hydrogenation is converted to the trans isomer afterwards by heating.",
      "options": {
        "A": "Syn delivery from the catalyst surface puts both new hydrogens on one face, which leaves the two ethyl groups cis.",
        "B": "The trans alkene, which needs the dissolving-metal route. A surface-catalysed hydrogenation cannot deliver its hydrogens to opposite faces.",
        "C": "Complete reduction is what an undeactivated catalyst such as Pd/C gives. The lead and quinoline on this catalyst exist precisely to prevent it.",
        "D": "An alcohol requires an oxygen source. Hydrogenation adds hydrogen only, and nothing in the flask can supply the oxygen."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-carbon chain with an internal triple bond between the third and fourth carbons."
  },
  {
    "question_id": "ch09_q35_dissolving_metal_reduction",
    "topic": "Reduction",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product when hex-3-yne is treated with sodium metal in liquid ammonia (Na / NH₃)?",
    "question_smiles": "CCC#CCC",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-hex-3-ene",
        "smiles": "CC/C=C/CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-hex-3-ene",
        "smiles": "CC/C=C\\CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "hexane",
        "smiles": "CCCCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-sodiohex-3-ene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The dissolving-metal reduction is the stereochemical complement of the Lindlar reaction: the same alkyne, the same alkene skeleton, the opposite geometry. It runs through anions and radicals in solution rather than on a metal surface.",
      "approach": "Sodium dissolves in liquid ammonia to give solvated electrons. One adds to hex-3-yne to make a radical anion, which takes a proton from ammonia to give a vinylic radical; a second electron makes a vinylic anion, and a second proton from ammonia completes the alkene. The vinylic anion prefers the arrangement holding its two ethyl groups apart, so the alkene comes out trans: (E)-hex-3-ene.",
      "note": "McMurry's illustration is 5-decyne giving trans-5-decene with lithium in ammonia, and sodium behaves the same way. Having this reaction and the Lindlar reduction both available is what makes an alkyne a controllable source of either alkene geometry.",
      "options": {
        "A": "Two electrons and two protons delivered from solution, with the geometry set by an anion that prefers its alkyl groups on opposite sides.",
        "B": "The cis alkene, which is the Lindlar product. Nothing in a solution-phase electron transfer holds the two new hydrogens on one face.",
        "C": "Reduction all the way to the alkane needs a hydrogenation catalyst. Solvated electrons stop at the alkene, which will not accept one.",
        "D": "A vinylic sodium species is genuinely on the pathway as the anion, but ammonia protonates it at once; nothing like it survives to be isolated."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Six carbons in a chain with the triple bond joining the middle pair, an ethyl group on each side of it."
  },
  {
    "question_id": "ch09_q36_metal_reduction_selectivity",
    "topic": "Reduction",
    "difficulty_level": "Hard",
    "question_text": "What is the key factor that determines the trans-stereoselectivity in the dissolving metal reduction of internal alkynes?",
    "question_smiles": "CC#CC",
    "options": [
      {
        "option_id": "A",
        "text": "The vinylic anion formed in the second reduction step is more stable in the trans arrangement, and vinylic anions equilibrate too slowly to lose that preference before they are protonated.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ammonia forces a stereochemical inversion at the carbon-carbon triple bond.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The vinylic radical formed after the first protonation is locked in the trans arrangement and cannot invert.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The reaction occurs on a metal surface that only allows anti-addition.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Both intermediates in a dissolving-metal reduction could in principle be cis or trans, so the real question is which one commits the product. It turns on which intermediate equilibrates faster than it reacts.",
      "approach": "An electron gives a radical anion, ammonia protonates it to a vinylic radical, a second electron gives a vinylic anion, and a second proton finishes the alkene. Vinylic radicals interconvert cis and trans rapidly, so nothing is settled while the radical exists. Vinylic anions interconvert far more slowly, so the more stable of the two - the trans one, holding its alkyl groups apart - is what forms and what gets protonated. The geometry is committed at that second reduction step.",
      "note": "This is McMurry's own account, and the transferable part is the contrast rather than the conclusion. Two intermediates can both have a preferred shape, and only the one that cannot escape its preference before reacting controls the product.",
      "options": {
        "A": "Stability plus slow equilibration is what commits a product. The vinylic anion has both, so the geometry is fixed at the step that forms it.",
        "B": "Ammonia is the solvent and the proton source. It does not invert a carbon-carbon bond, and no step of this mechanism inverts one.",
        "C": "The radical is precisely the intermediate that commits nothing. Vinylic radicals interconvert cis and trans faster than the second electron arrives.",
        "D": "A metal surface delivering both hydrogens to one face is the Lindlar reaction, and it gives the cis alkene. The sodium here is dissolved, not a surface."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "But-2-yne: a four-carbon chain with the triple bond joining the two middle carbons."
  },
  {
    "question_id": "ch09_q37_terminal_alkyne_metal_reduction",
    "topic": "Reduction",
    "difficulty_level": "Hard",
    "question_text": "What is the outcome when the terminal alkyne 1-hexyne is treated with sodium in liquid ammonia (Na / NH₃), followed by an aqueous workup?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The starting material (1-hexyne) is recovered largely unchanged.",
        "smiles": "CCCCC#C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-hexene is formed in high yield.",
        "smiles": "CCCCC=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Sodium hex-1-yn-1-ide is the isolated product; the alkyne is not recovered.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "hexane is formed.",
        "smiles": "CCCCCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A reagent that is both a reducing agent and a strong base does the acid-base reaction first whenever the substrate offers an acidic proton. Whether the reduction then happens at all depends on what that deprotonation leaves behind.",
      "approach": "Sodium in liquid ammonia produces solvated electrons and, with them, a strongly basic medium. 1-Hexyne's terminal hydrogen has pKa about 25, so it is removed immediately and the acetylide forms. That anion will not accept a further electron - adding negative charge to something already negative is strongly unfavourable - so the reduction stalls there. Aqueous workup returns the proton and the alkyne comes back out of the flask.",
      "note": "McMurry demonstrates this reduction on internal alkynes such as 5-decyne and does not raise the terminal case; the limitation is standard ACS material and is kept on that ground. It is also why a synthesis needing a trans alkene from a terminal alkyne alkylates first and reduces afterwards.",
      "options": {
        "A": "The acidic terminal hydrogen is removed before any reduction can begin, and the aqueous workup puts it back.",
        "B": "1-Hexene requires the reduction to proceed, and the negative charge on the acetylide is what prevents the second electron from arriving.",
        "C": "The acetylide really does form, and it is the reason no reduction happens - but the aqueous workup protonates it, so the neutral alkyne is what is isolated.",
        "D": "Hexane needs a hydrogenation catalyst. Solvated electrons do not reduce an alkene, let alone carry an alkyne the whole way to an alkane."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch09_q38_ozonolysis_internal",
    "topic": "Oxidative Cleavage",
    "difficulty_level": "Medium",
    "question_text": "What are the major organic products when oct-4-yne is treated with ozone (O₃), followed by a water workup (H₂O)?",
    "question_smiles": "CCCC#CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Two molecules of butanoic acid",
        "smiles": "CCCC(=O)O.CCCC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Two molecules of butanal",
        "smiles": "CCCC=O.CCCC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "One molecule of octan-4-one",
        "smiles": "CCCC(=O)CCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Octane-4,5-dione",
        "smiles": "CCCC(=O)C(=O)CCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Ozone cleaves a carbon-carbon triple bond right through - the sigma bond as well as both pi bonds. Each of the two alkyne carbons finishes as the carbon of a carboxyl group, so what comes out of the flask are carboxylic acids.",
      "approach": "Oct-4-yne is symmetric, with four carbons on each side of the triple bond between C4 and C5. Cleaving there produces two identical fragments: three carbons of propyl chain plus the former alkyne carbon, now a carboxyl carbon. That is butanoic acid, and two molecules of it are the whole of the answer.",
      "note": "McMurry mentions this reaction only for completeness and says plainly it is of little value - a triple bond is less reactive than a double bond and cleavage yields can be low. Its real use is backwards, as a structure-determination tool that locates a triple bond from the acids it produces.",
      "options": {
        "A": "A symmetric alkyne cleaves symmetrically: each alkyne carbon becomes a carboxyl carbon on its own three-carbon propyl group.",
        "B": "Aldehydes are where alkene ozonolysis with a reductive workup stops. An alkyne carbon has no hydrogen to keep, so an aqueous workup carries it on to the acid.",
        "C": "A single ketone leaves the two carbons still bonded to each other. Ozonolysis breaks that bond, so no eight-carbon product can survive it.",
        "D": "A vicinal diketone also keeps the two carbons joined. It is what mild neutral permanganate gives, not what ozone with a water workup gives."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An eight-carbon chain with an internal triple bond joining the fourth and fifth carbons, a propyl group on each side."
  },
  {
    "question_id": "ch09_q39_ozonolysis_terminal",
    "topic": "Oxidative Cleavage",
    "difficulty_level": "Hard",
    "question_text": "What are the major organic products when hex-1-yne is treated with ozone (O₃), followed by a water workup?",
    "question_smiles": "CCCCC#C",
    "options": [
      {
        "option_id": "A",
        "text": "Pentanoic acid and carbon dioxide (CO2)",
        "smiles": "CCCCC(=O)O.O=C=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Pentanoic acid and formic acid",
        "smiles": "CCCCC(=O)O.OC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Pentanal and formaldehyde",
        "smiles": "CCCCC=O.C=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Hexanoic acid, with no carbon lost",
        "smiles": "CCCCCC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A terminal alkyne cleaved by ozone gives two fragments of very unequal size. The internal carbon keeps the alkyl chain and becomes a carboxyl carbon; the terminal CH carbon has nothing to hold and leaves the flask as a gas.",
      "approach": "Hex-1-yne is cleaved between C1 and C2. C2 keeps the four-carbon butyl chain and becomes a carboxyl carbon, which makes a five-carbon acid, pentanoic acid. C1 carries only a hydrogen, so oxidation takes it past formic acid to carbonic acid, which is unstable and loses water to give carbon dioxide. One organic acid and one gas.",
      "note": "McMurry states the terminal case in a single clause: from a terminal alkyne, CO2 is formed as one product. Counting carbons is the check - five in the acid plus one in the CO2 recovers the six the substrate started with.",
      "options": {
        "A": "Five carbons in the acid and one leaving as CO2 account for all six, and both fragments are drawn.",
        "B": "Formic acid is what the terminal carbon would give if oxidation stopped there. It does not stop - the carbon goes on to carbonic acid, which decomposes.",
        "C": "Aldehydes are where alkene ozonolysis with a reductive workup halts. An aqueous workup on an alkyne oxidises both carbons past that point.",
        "D": "Six carbons in one acid means nothing was cleaved at all. Ozone breaks the carbon-carbon bond, so the skeleton cannot come through whole."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-carbon chain whose first two carbons are joined by a triple bond, the terminal one bearing a single hydrogen."
  },
  {
    "question_id": "ch09_q40_kmno4_harsh",
    "topic": "Oxidative Cleavage",
    "difficulty_level": "Medium",
    "question_text": "What are the major organic products when hept-3-yne is treated with hot, basic potassium permanganate (KMnO₄, NaOH, heat), followed by acid workup?",
    "question_smiles": "CCCC#CCC",
    "options": [
      {
        "option_id": "A",
        "text": "Propanoic acid and butanoic acid",
        "smiles": "CCC(=O)O.CCCC(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propanal and butanal",
        "smiles": "CCC=O.CCCC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Heptane-3,4-diol",
        "smiles": "CCC(O)C(O)CCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Heptane-3,4-dione",
        "smiles": "CCC(=O)C(=O)CCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hot basic permanganate does to an alkyne what ozone does - it breaks the triple bond right through and leaves each carbon as a carboxyl carbon. The acid workup at the end only protonates the carboxylate salts the basic medium has formed.",
      "approach": "Hept-3-yne carries an ethyl group on one side of the triple bond and a propyl on the other. Cleaving between C3 and C4 gives a two-carbon fragment plus its new carboxyl carbon, which is propanoic acid, and a three-carbon fragment plus its carboxyl carbon, which is butanoic acid. Three carbons and four carbons together account for the seven the substrate had.",
      "note": "An unsymmetrical alkyne is what makes this reaction worth running at all: two different acids come out, and their sizes locate the triple bond in the original chain. That structure-determination use is the only one McMurry allows it.",
      "options": {
        "A": "Cleavage between the alkyne carbons gives a three-carbon acid from the ethyl side and a four-carbon acid from the propyl side.",
        "B": "Aldehydes would need a reductive workup, and permanganate provides none. These conditions carry both carbons past the aldehyde stage.",
        "C": "Cold dilute permanganate gives a diol from an alkene. Hot basic permanganate on an alkyne cleaves the skeleton rather than hydroxylating it.",
        "D": "A diketone keeps the two carbons bonded to each other, which is the mild neutral permanganate outcome. Hot and basic, the bond breaks."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A seven-carbon chain with an internal triple bond between the third and fourth carbons: an ethyl group on one side, a propyl on the other."
  },
  {
    "question_id": "ch09_q41_kmno4_mild",
    "topic": "Oxidative Cleavage",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product when oct-4-yne is treated with aqueous potassium permanganate (KMnO₄) under mild, neutral conditions?",
    "question_smiles": "CCCC#CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "octane-4,5-dione",
        "smiles": "CCCC(=O)C(=O)CCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Two molecules of butanoic acid",
        "smiles": "CCCC(=O)O.CCCC(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)-oct-4-ene-4,5-diol",
        "smiles": "CCC/C(O)=C(\\O)CCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "octan-4-one",
        "smiles": "CCCC(=O)CCCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "What permanganate does to an alkyne depends on how hard the conditions are. Hot and basic, it cleaves the carbon skeleton; cold, dilute and neutral, it oxidises the triple bond without breaking the sigma bond between the two carbons.",
      "approach": "Under mild neutral conditions each alkyne carbon takes on an oxygen while the bond joining them survives. C4 and C5 of oct-4-yne each become a carbonyl carbon, giving the vicinal diketone octane-4,5-dione. All eight carbons remain in one chain, and that carbon count is the check that no cleavage occurred.",
      "note": "McMurry's treatment of alkyne oxidation is a single paragraph and does not include this milder variant; it is kept here because it is standard ACS exam material. The pairing worth carrying away is that harsher conditions cleave the skeleton and milder ones only oxidise it.",
      "options": {
        "A": "Both alkyne carbons oxidised to carbonyls with the bond between them intact, so all eight carbons stay in a single chain.",
        "B": "The cleavage products, which require the hot basic conditions this question deliberately withholds.",
        "C": "The ene-diol tautomer of the diketone. Like any enol it tautomerises to the carbonyl form, so it is not what is isolated.",
        "D": "A single ketone accounts for only one of the two oxygens taken up and leaves the other alkyne carbon unoxidised."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Eight carbons in a chain, the triple bond joining the fourth and fifth, with a propyl group either side."
  },
  {
    "question_id": "ch09_q42_synthesis_cis_alkene",
    "topic": "Synthesis",
    "difficulty_level": "Medium",
    "question_text": "Propyne is treated with sodium amide in liquid ammonia, then with 1-bromopropane. The product of that alkylation is finally hydrogenated over Lindlar's catalyst. What is the major product of the sequence?",
    "question_text_list": [
      "1. propyne + NaNH₂ in NH₃(l)",
      "2. 1-bromopropane",
      "3. H₂ / Lindlar's catalyst"
    ],
    "question_smiles": "CC#C",
    "options": [
      {
        "option_id": "A",
        "text": "(Z)-hex-2-ene",
        "smiles": "C/C=C\\CCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(E)-hex-2-ene",
        "smiles": "C/C=C/CCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "hexane",
        "smiles": "CCCCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(Z)-hex-3-ene",
        "smiles": "CC/C=C\\CC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This is a two-part synthesis. An acetylide alkylation builds the carbon skeleton, and a stereoselective reduction then chooses the alkene geometry. The alkyne is the hinge between them - it is where the chain is joined and where the geometry is decided.",
      "approach": "Amide removes propyne's terminal hydrogen, and the propynyl anion displaces bromide from 1-bromopropane by SN2. Three carbons plus three gives hex-2-yne, with the triple bond still one carbon in from the methyl end. Lindlar's catalyst then adds hydrogen with syn stereochemistry, putting both new hydrogens on the same face, which leaves the methyl and the propyl group cis to one another. The product is (Z)-hex-2-ene.",
      "note": "Exchanging only the last step for sodium in ammonia would give the E isomer from the very same alkyne. Building the skeleton and setting the geometry are independent decisions, and keeping them independent is what makes alkynes useful in synthesis.",
      "options": {
        "A": "Skeleton from the SN2 alkylation, geometry from the syn delivery of hydrogen on a poisoned catalyst.",
        "B": "The right skeleton with the wrong geometry. Trans would require the dissolving-metal reduction in place of Lindlar's catalyst.",
        "C": "Complete reduction, which needs an undeactivated catalyst such as Pd/C. The lead and quinoline on the Lindlar catalyst are there to prevent exactly this.",
        "D": "The double bond has moved one carbon along. The propynyl anion bonds through its charged carbon, so the unsaturation stays where propyne had it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Propyne, the starting material: a methyl group on one carbon of a triple bond whose other carbon carries a single hydrogen."
  },
  {
    "question_id": "ch09_q43_synthesis_trans_alkene",
    "topic": "Synthesis",
    "difficulty_level": "Medium",
    "question_text": "But-1-yne is treated with sodium amide in liquid ammonia, then with 1-bromopropane. The product of that alkylation is finally treated with sodium in liquid ammonia. What is the major product of the sequence?",
    "question_text_list": [
      "1. 1-butyne + NaNH₂ in NH₃(l)",
      "2. 1-bromopropane",
      "3. Na / liquid NH₃"
    ],
    "question_smiles": "CCC#C",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-hept-3-ene",
        "smiles": "CC/C=C/CCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(Z)-hept-3-ene",
        "smiles": "CC/C=C\\CCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "heptane",
        "smiles": "CCCCCCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(E)-hept-2-ene",
        "smiles": "C/C=C/CCCC",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The same two-part plan as the cis synthesis, with only the last step exchanged. Alkylation fixes the carbon skeleton; the reduction chosen at the end decides which of the two alkene geometries emerges.",
      "approach": "Amide deprotonates but-1-yne, and the resulting anion displaces bromide from 1-bromopropane, joining four carbons to three to give hept-3-yne. Sodium in liquid ammonia then reduces that alkyne through a radical anion, a vinylic radical and a vinylic anion; the anion prefers its two alkyl groups apart, so the alkene comes out trans as (E)-hept-3-ene.",
      "note": "The dissolving-metal reduction is not a concerted anti addition, whatever the trans product suggests. The two hydrogens arrive in separate steps from ammonia, and the geometry is committed at the vinylic anion rather than during any single addition event.",
      "options": {
        "A": "Seven carbons from the alkylation, and trans geometry from the vinylic anion the dissolving-metal reduction passes through.",
        "B": "The right skeleton with cis geometry, which would need Lindlar's catalyst rather than sodium in ammonia.",
        "C": "Complete reduction to the alkane. Solvated electrons stop at the alkene, because an alkene will not accept one.",
        "D": "The right carbon count with the double bond one position over. The butynyl anion bonds through its charged carbon, so the unsaturation stays three carbons in from that end."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "But-1-yne, the starting material: a four-carbon chain with the triple bond at one end and a single hydrogen on the terminal carbon."
  },
  {
    "question_id": "ch09_q44_synthesis_ketone",
    "topic": "Synthesis",
    "difficulty_level": "Medium",
    "question_text": "Propyne is treated with sodium amide in liquid ammonia, then with iodomethane. The product of that alkylation is finally treated with aqueous sulfuric acid and mercuric sulfate. What is the major product of the sequence?",
    "question_text_list": [
      "1. propyne + NaNH₂ in NH₃(l)",
      "2. iodomethane",
      "3. H₂O, H₂SO₄, HgSO₄"
    ],
    "question_smiles": "CC#C",
    "options": [
      {
        "option_id": "A",
        "text": "butan-2-one",
        "smiles": "CC(=O)CC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "butanal",
        "smiles": "CCCC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "but-2-en-2-ol",
        "smiles": "CC(O)=CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "acetone",
        "smiles": "CC(=O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Alkylation first, hydration second. Which alkyne you decide to build matters as much as which hydration conditions you choose, because an unsymmetrical internal alkyne would hand back a mixture of two ketones.",
      "approach": "The propynyl anion displaces iodide from iodomethane to give but-2-yne, which is symmetrical - a methyl on each side of the triple bond. Mercury(II)-catalysed hydration then adds water with Markovnikov regiochemistry, but the symmetry makes that choice irrelevant: either alkyne carbon leads to the same enol, but-2-en-2-ol, and that tautomerises to butan-2-one.",
      "note": "The alkylation is what makes this clean. Hydrating propyne directly would give acetone, and hydrating an unsymmetrical internal alkyne would give two ketones - deliberately building a symmetrical alkyne first is how that is avoided.",
      "options": {
        "A": "A symmetrical four-carbon alkyne hydrates to a single ketone whichever of its two alkyne carbons water attacks.",
        "B": "The aldehyde is the hydroboration-oxidation product and it needs a terminal alkyne. But-2-yne has no terminal carbon in its triple bond.",
        "C": "The enol intermediate, which tautomerises to the ketone almost instantly. McMurry's point is that enols are essentially never isolated.",
        "D": "Three carbons rather than four - this is what hydrating propyne itself would give if the alkylation step were skipped."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Propyne, the starting material: three carbons with a triple bond at one end and a methyl group at the other."
  },
  {
    "question_id": "ch09_q45_synthesis_aldehyde",
    "topic": "Synthesis",
    "difficulty_level": "Hard",
    "question_text": "Acetylene is treated with one equivalent of sodium amide in liquid ammonia, then with 1-bromobutane. The product of that alkylation is finally treated with disiamylborane, followed by hydrogen peroxide and sodium hydroxide. What is the major product of the sequence?",
    "question_text_list": [
      "1. acetylene + NaNH₂ in NH₃(l)",
      "2. 1-bromobutane",
      "3. disiamylborane, then H₂O₂, NaOH"
    ],
    "question_smiles": "C#C",
    "options": [
      {
        "option_id": "A",
        "text": "hexanal",
        "smiles": "CCCCCC=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "hexan-2-one",
        "smiles": "CCCCC(=O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "hexan-1-ol",
        "smiles": "CCCCCCO",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "pentanal",
        "smiles": "CCCCC=O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Acetylene has two acidic hydrogens, so the quantity of base specified decides whether one end or both ends get alkylated. One equivalent leaves a terminal alkyne, which is exactly what the second half of this sequence requires.",
      "approach": "One equivalent of amide gives sodium acetylide, which displaces bromide from 1-bromobutane to give hex-1-yne - two carbons from acetylene plus four from the butyl group, and still terminal. Disiamylborane is bulky enough to add only once and puts boron on C1. Basic peroxide replaces boron with OH, giving a terminal enol that tautomerises with the oxygen staying at C1, and the product is hexanal.",
      "note": "Both halves of this sequence depend on the alkyne remaining terminal. A second equivalent of base and halide would build an internal alkyne, and hydroboration-oxidation of an internal alkyne gives a ketone rather than an aldehyde.",
      "options": {
        "A": "Six carbons from the single alkylation, with the carbonyl at C1 because the bulky borane delivered boron there.",
        "B": "The methyl ketone, which is the mercury(II) hydration product. It comes from the same alkyne under the complementary set of reagents.",
        "C": "The alcohol is where hydroboration-oxidation of an alkene stops. From an alkyne the oxidation produces an enol, and an enol tautomerises.",
        "D": "Five carbons, one short. Alkylating with 1-bromopropane rather than 1-bromobutane would deliver this."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Acetylene, the starting material: two carbons joined by a triple bond, each carrying one hydrogen."
  },
  {
    "question_id": "ch09_q46_chemoselectivity_halogenation",
    "topic": "Electrophilic Additions",
    "difficulty_level": "Hard",
    "question_text": "What is the major organic product when 1-hexen-5-yne is treated with 1 equivalent of bromine (Br₂) in CH₂Cl₂ at low temperature?",
    "question_smiles": "C=CCCC#C",
    "options": [
      {
        "option_id": "A",
        "text": "5,6-dibromohex-1-yne",
        "smiles": "C#CCCC(Br)CBr",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(E)-5,6-dibromohexa-1,5-diene",
        "smiles": "C=CCC/C(Br)=C\\Br",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,2,5,6-tetrabromohexane",
        "smiles": "BrCC(Br)CCC(Br)CBr",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "5,6-dibromohex-1-ene",
        "smiles": "BrCC(Br)CCC=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When one molecule carries both an alkene and an alkyne, a limited amount of electrophile goes to whichever group reacts faster. The alkene wins, and for the same reason alkynes are slower in general.",
      "approach": "Bromine addition runs through a cation-like intermediate: bridged and alkyl at the alkene, vinylic and sp at the alkyne. The alkene therefore reacts faster, so one equivalent of Br2 is taken up by the C1-C2 double bond and the triple bond survives untouched. Naming the product, the chain is numbered to give the surviving triple bond the lower locant, which puts the two bromines on C5 and C6: 5,6-dibromohex-1-yne.",
      "note": "The numbering flips between substrate and product, and that is not a trick of the question. A chain is numbered for the unsaturation actually present: in the substrate the double bond claims C1, and in the product only the triple bond is left to claim it.",
      "options": {
        "A": "One equivalent goes to the faster-reacting double bond, and numbering the product from the surviving triple bond puts the bromines at C5 and C6.",
        "B": "Bromine added across the triple bond instead - the slower of the two additions, and the one chemoselectivity rules out when the electrophile is limited.",
        "C": "Both groups brominated, which needs at least three equivalents of Br2. Only one is supplied, and an alkyne brominated twice would put all four halogens on C5 and C6 anyway.",
        "D": "The bromines are in the right place, but the surviving group is drawn as a double bond. One equivalent of Br2 leaves the triple bond intact, not partly reduced."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-carbon chain with a double bond at one end and a terminal triple bond at the other, separated by two CH2 groups."
  },
  {
    "question_id": "ch09_q47_heat_of_hydrogenation",
    "topic": "Alkyne Structure & Bonding",
    "difficulty_level": "Hard",
    "question_text": "Which of the following isomeric hydrocarbons releases the greatest amount of heat (i.e. has the most exothermic heat of hydrogenation) upon complete catalytic hydrogenation to hexane?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "hex-1-yne",
        "smiles": "CCCCC#C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "hex-3-yne",
        "smiles": "CCC#CCC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)-hexa-1,3-diene",
        "smiles": "C=C/C=C/CC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "hexa-1,5-diene",
        "smiles": "C=CCCC=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Isomers that hydrogenate to a common product can be ranked directly by their heats of hydrogenation. Every one of them finishes at the same place, so the more heat released, the higher the starting material must have been sitting.",
      "approach": "All four of these C6H10 isomers give hexane on complete hydrogenation, so the heat released is a direct measure of each one's own energy. Conjugated dienes are stabilised by delocalisation and lie lowest; an isolated diene lies above them; alkynes lie above both isomeric dienes; and among the alkynes the terminal one is less stable than the internal, which carries alkyl groups on both sp carbons. Hex-1-yne is therefore the highest in energy and the most exothermic to hydrogenate.",
      "note": "The comparison only works because the product is shared. A heat of hydrogenation cannot rank two compounds that hydrogenate to different alkanes, which is why the text's own use of these numbers in the alkene chapter always stays inside one set of isomers.",
      "options": {
        "A": "The terminal alkyne is the least stable of the four, so its journey down to hexane releases the most heat.",
        "B": "An internal alkyne is more stable than its terminal isomer, so it starts lower and releases less heat reaching the same alkane.",
        "C": "The conjugated diene is the most stable of the four, held down by delocalisation across all four carbons, so it releases the least.",
        "D": "An isolated diene has no conjugation to stabilise it, but it still sits below either alkyne isomer."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch09_q48_enol_tautomer_identification",
    "topic": "Hydration",
    "difficulty_level": "Easy",
    "question_text": "What is the major keto tautomer of the enol 3-methylbut-2-en-2-ol?",
    "question_smiles": "CC(O)=C(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "3-methylbutan-2-one",
        "smiles": "CC(=O)C(C)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-methylbutanal",
        "smiles": "CC(C)CC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "pentan-2-one",
        "smiles": "CCCC(=O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "3-methylbut-3-en-2-one",
        "smiles": "CC(=O)C(=C)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tautomerising an enol is bookkeeping once the pattern is clear: the OH becomes a C=O, the carbon-carbon double bond disappears, and the hydrogen that leaves oxygen lands on the carbon at the far end of that double bond.",
      "approach": "3-Methylbut-2-en-2-ol carries its OH on C2 and its double bond between C2 and C3. Move the hydroxyl hydrogen to C3 and turn the C2-O single bond into a C=O. C2 becomes the carbonyl carbon; C3 gains a hydrogen and keeps its methyl branch. What comes out is 3-methylbutan-2-one, the same five carbons arranged in the same skeleton.",
      "note": "A tautomerisation never changes the carbon skeleton or the molecular formula - only a hydrogen and a pi bond move. Checking the formula of a candidate answer against the enol's is the quickest way to eliminate a wrong one here.",
      "options": {
        "A": "The OH becomes the carbonyl at C2 and its hydrogen moves to C3, which keeps its methyl branch. Same five carbons, same formula.",
        "B": "An aldehyde puts the carbonyl at the end of the chain. Tautomerisation cannot relocate the oxygen, and the oxygen was on C2.",
        "C": "The same formula but a rearranged skeleton, with the methyl branch absorbed into a straight chain. Tautomerism moves a hydrogen, never a carbon.",
        "D": "An enone. The carbonyl is in the right place but a carbon-carbon double bond has been kept as well, which costs two hydrogens - a different formula from the enol, so it cannot be its tautomer."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An enol with a hydroxyl on the second carbon of a four-carbon chain, that carbon double-bonded to the third, which carries a methyl branch."
  },
  {
    "question_id": "ch09_q49_retrosynthesis_cis",
    "topic": "Synthesis",
    "difficulty_level": "Hard",
    "question_text": "Which of the following sequences represents the most efficient synthesis of (Z)-hex-3-ene starting from acetylene?",
    "question_smiles": "CC/C=C\\CC",
    "options": [
      {
        "option_id": "A",
        "text": "1. NaNH₂ (2 eq); 2. bromoethane (2 eq); 3. H₂ / Lindlar's catalyst",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1. NaNH₂ (2 eq); 2. bromoethane (2 eq); 3. Na / liquid NH₃",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1. NaNH₂ (1 eq); 2. bromoethane (1 eq); 3. H₂ / Lindlar's catalyst",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1. bromoethane (2 eq); 2. H₂ / Pd-C",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Planning an alkene back to acetylene involves two separate decisions: how many carbons to attach at each end, and which reduction to finish with. Getting either one wrong changes the answer entirely.",
      "approach": "The target is six carbons with the double bond in the middle and cis geometry. Work backwards: cis points to Lindlar's catalyst, so the immediate precursor is hex-3-yne. Hex-3-yne is acetylene carrying a two-carbon group at each end, which takes two rounds of deprotonation and alkylation - two equivalents of amide and two of bromoethane. Hydrogen over the poisoned catalyst then delivers the Z alkene.",
      "note": "In the flask the two alkylations are run one after the other, deprotonating and alkylating one end before starting on the second; acetylene's dianion is not a species anyone makes. Writing two equivalents of each reagent is exam shorthand for that sequence rather than a claim about a double deprotonation.",
      "options": {
        "A": "Two alkylations build the six-carbon internal alkyne, and the poisoned catalyst delivers both hydrogens to one face for the cis product.",
        "B": "The right skeleton with the wrong reduction. Sodium in ammonia would deliver (E)-hex-3-ene from the same alkyne.",
        "C": "One alkylation gives but-1-yne, a terminal four-carbon alkyne. Lindlar would then give but-1-ene, which is neither the right size nor a stereoisomer of anything.",
        "D": "No base at all, so acetylene is never deprotonated and no alkylation can occur. Pd/C would also carry any alkyne it did meet all the way to the alkane."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "The target: a six-carbon chain with the double bond between the middle two carbons and both ethyl groups on the same side of it."
  },
  {
    "question_id": "ch09_q50_retrosynthesis_ozonolysis",
    "topic": "Oxidative Cleavage",
    "difficulty_level": "Hard",
    "question_text": "An unknown alkyne undergoes oxidative cleavage with ozone followed by water to yield propanoic acid and 2-methylpropanoic acid. What is the systematic IUPAC name of the starting alkyne?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "5-methylhex-3-yne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "2-methylhex-3-yne",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "2-methylhex-2-yne",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "hept-3-yne",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Oxidative cleavage read backwards is a structure-determination tool. Each acid fragment reports one half of the original alkyne, and the two carboxyl carbons are precisely the carbons that used to be the triple bond.",
      "approach": "Propanoic acid is CH3CH2-COOH and 2-methylpropanoic acid is (CH3)2CH-COOH. Strip the OH from each carboxyl and join the two carboxyl carbons with a triple bond: CH3CH2-C(triple)C-CH(CH3)2. The principal chain through that triple bond is six carbons with a methyl branch. The bond falls between C3 and C4 from either direction, so the branch settles the numbering - from the branched end it is C2, which beats C5.",
      "note": "Counting carbons before naming is the safeguard here. The two acids contain seven carbons between them, and since the two carboxyl carbons were the alkyne carbons, the alkyne has seven as well: a six-carbon chain plus one methyl branch.",
      "options": {
        "A": "The right molecule numbered from the wrong end, which hands the methyl branch a 5 when a 2 was available to it.",
        "B": "Seven carbons reassembled from the two acids, named as a six-carbon chain with the methyl branch at the lower of the two possible locants.",
        "C": "An impossible name. C2 would be one of the triple-bond carbons, and a carbon of a triple bond has no valence left to carry a methyl substituent.",
        "D": "An unbranched seven-carbon alkyne. It would cleave to propanoic acid and butanoic acid, and butanoic acid is straight-chained where the observed second acid is branched."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch09_q_dynamic_alkyne_hydration",
    "topic": "Hydration",
    "difficulty_level": "Medium",
    "question_text": "What is the major organic product formed in the following reaction sequence?",
    "reaction_scheme": {
      "reactants": [
        "CC#C"
      ],
      "reactant_alts": [
        "Propyne: a methyl group bonded to one carbon of a triple bond whose other carbon carries a single hydrogen."
      ],
      "reagents": "H2O, H2SO4, HgSO4",
      "conditions": "Hg(II) catalyst",
      "products": [
        "?"
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "acetone (propan-2-one)",
        "smiles": "CC(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "propanal",
        "smiles": "CCC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "propan-2-ol",
        "smiles": "CC(C)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "prop-1-en-2-ol",
        "smiles": "CC(O)=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Mercury(II)-catalysed hydration follows Markovnikov's rule, and on a terminal alkyne that sends the oxygen to the internal carbon. What is isolated is a ketone rather than the alcohol that regiochemistry first delivers.",
      "approach": "Mercury(II) activates propyne's triple bond and water attacks C2, the more substituted carbon. The acidic medium replaces the mercury with hydrogen, leaving the enol prop-1-en-2-ol. Keto-enol tautomerism then moves that hydroxyl hydrogen to C1 and installs a C=O at C2. On a three-carbon chain the methyl ketone that results is acetone.",
      "note": "Propyne is the smallest alkyne on which this regiochemistry can be seen at all. Acetylene itself has no more substituted carbon and gives acetaldehyde, the single case where Markovnikov hydration of an alkyne does not produce a ketone.",
      "options": {
        "A": "Water adds at the more substituted carbon and the enol tautomerises, giving the methyl ketone that three carbons allow.",
        "B": "Propanal is the hydroboration-oxidation product, which delivers oxygen to the terminal carbon instead. The two reactions are complements of each other.",
        "C": "Reaching the alcohol would need the ketone reduced afterwards, and nothing in this scheme supplies a hydride.",
        "D": "The enol intermediate. It genuinely forms and then tautomerises at once - the keto-enol equilibrium lies almost entirely on the ketone side."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  }
];
