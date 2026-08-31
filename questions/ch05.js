// OChemStudyBuddy - McMurry Chapter 5
// Author: A. Elangovan, PhD
var CH05_QUESTIONS = [
  {
    "question_id": "ch05_q1_allene_chirality",
    "topic": "Chirality & Symmetry",
    "difficulty_level": "Hard",
    "question_text": "Which of the following substituted allenes is chiral and can be resolved into stable enantiomers?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "2,3-Pentadiene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Methyl-1,2-butadiene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1,2-Butadiene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,2-Propadiene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Chirality does not require a tetrahedral stereocentre. In an allene the central carbon is sp-hybridised and its two pi bonds are perpendicular, so the substituents on one end lie in a plane at right angles to those on the other, and that twisted arrangement can itself be non-superimposable on its mirror image.",
      "approach": "Step 1: Set up the geometry. In R2C=C=CR2 the middle carbon uses two perpendicular p orbitals, so the plane holding the groups on the left-hand carbon stands at right angles to the plane holding those on the right.\nStep 2: State the test. The molecule gains a mirror plane the moment either terminal carbon carries two identical groups; it is chiral only when both terminal carbons carry two different groups.\nStep 3: Apply it. 2,3-Pentadiene, CH3-CH=C=CH-CH3, has a methyl and a hydrogen at each end - two different groups at both termini, so neither a mirror plane nor a centre of inversion survives. 3-Methyl-1,2-butadiene puts two methyls on one end, 1,2-butadiene puts two hydrogens on one end, and 1,2-propadiene has two hydrogens at both ends; each of those has a mirror plane running through the duplicated pair.",
      "note": "The parity of the cumulated system decides which kind of isomerism you get. An odd number of cumulated carbons - three in an allene, five in a pentatetraene - twists the ends perpendicular and gives axial chirality, while an even number, as in butatriene, leaves the ends coplanar and gives ordinary cis-trans isomerism instead. The enantiomers can actually be bottled because interconverting them means breaking a pi bond, a barrier near 50 kcal/mol.",
      "options": {
        "A": "Correct. Both ends of the cumulated system carry a methyl and a hydrogen - two different groups at each terminus - so the perpendicular arrangement has neither a mirror plane nor a centre of inversion.",
        "B": "3-Methyl-1,2-butadiene is (CH3)2C=C=CH2. The two methyl groups on one terminal carbon are identical, which puts a mirror plane through that end and makes the molecule achiral.",
        "C": "1,2-Butadiene is CH2=C=CH-CH3. Its terminal CH2 carries two hydrogens, an identical pair, so a mirror plane runs through that carbon and no chirality axis survives.",
        "D": "1,2-Propadiene is bare allene, CH2=C=CH2, with two hydrogens at each end. It is the standard example of a cumulated diene that stays achiral despite the perpendicular geometry."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q2_biphenyl_atropisomerism",
    "topic": "Chirality & Symmetry",
    "difficulty_level": "Hard",
    "question_text": "Which of the following biphenyl derivatives is chiral at room temperature due to restricted rotation about the single bond (atropisomerism)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "6,6'-Dinitrobiphenyl-2,2'-dicarboxylic acid",
        "smiles": "OC(=O)c1cccc([N+](=O)[O-])c1-c1c(C(=O)O)cccc1[N+](=O)[O-]",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Biphenyl-2,2'-dicarboxylic acid",
        "smiles": "O=C(O)c1ccccc1-c2ccccc2C(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Biphenyl-4,4'-dicarboxylic acid",
        "smiles": "O=C(O)c1ccc(cc1)-c2ccc(cc2)C(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "4,4'-Dinitrobiphenyl",
        "smiles": "O=[N+]([O-])c1ccc(cc1)-c2ccc(cc2)[N+](=O)[O-]",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A stereogenic axis is at work here rather than a stereocentre, and two conditions have to hold at once. The twisted conformation must itself be chiral, and the barrier to rotation about the ring-to-ring bond must be high enough that the two twisted forms do not interconvert during the experiment.",
      "approach": "Step 1: Test the symmetry of the twisted form. Each ring must carry two different substituents in its two ortho positions; a ring with identical groups on both sides hands the perpendicular conformation a mirror plane, and no amount of slow rotation can rescue it.\nStep 2: Test the barrier. Ortho substituents are what raise it. A hydrogen at an ortho position is small enough that the rings sweep through coplanarity freely, and whatever handedness the twisted form had averages away in nanoseconds.\nStep 3: Read the substitution patterns off the four names. Only 6,6'-dinitrobiphenyl-2,2'-dicarboxylic acid carries a group at all four ortho positions, a nitro and a carboxyl flanking the axis on each ring, so it is the only candidate that clears both tests.",
      "note": "Atropisomerism is a matter of degree rather than of kind. The barrier sets a half-life, and the working convention is that the twisted form counts as a separable isomer once its half-life exceeds about 1000 seconds at the temperature of the measurement. Warm this compound and it racemises - the same molecule can be resolvable at 25 C and not at 100 C.",
      "options": {
        "A": "Correct. A nitro group and a carboxyl group flank the biaryl bond on each ring, so rotation is blocked, and neither ring carries a matched ortho pair, so the twisted form has no mirror plane.",
        "B": "The twisted conformation of biphenyl-2,2'-dicarboxylic acid genuinely is chiral, but only two ortho positions are substituted and the other two hold hydrogen. Rotation is fast and the handedness averages out.",
        "C": "Both carboxyl groups sit para to the biaryl bond, leaving all four ortho positions as hydrogen. Rotation is essentially free, and the coplanar conformation carries a mirror plane besides.",
        "D": "The nitro groups are para to the axis and so cannot hinder rotation at all, and each ring is symmetrically substituted about the bond. This one fails both tests rather than either."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q3_meso_butanediol",
    "topic": "Chirality & Symmetry",
    "difficulty_level": "Medium",
    "question_text": "Which of the following stereoisomers of 2,3-butanediol is achiral overall despite containing tetrahedral stereocenters?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "meso-2,3-Butanediol",
        "smiles": "C[C@H](O)[C@H](O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2R,3R)-2,3-Butanediol",
        "smiles": "C[C@@H](O)[C@H](O)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2S,3S)-2,3-Butanediol",
        "smiles": "C[C@H](O)[C@@H](O)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,4-Butanediol",
        "smiles": "OCCCCO",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A meso compound contains tetrahedral stereocentres and is achiral all the same, because an internal mirror plane relates one half of the molecule to the other and makes the whole thing superimposable on its own reflection.",
      "approach": "Step 1: Locate the stereocentres. C2 and C3 of 2,3-butanediol each carry a methyl, a hydroxyl, a hydrogen and the other CH(OH)CH3 fragment, so both qualify and the two halves are constitutionally identical.\nStep 2: Look for the internal mirror. In the (2R,3S) isomer a plane running between C2 and C3 reflects one half onto the other; the R half and the S half cancel, and the molecule maps onto its mirror image.\nStep 3: Check the alternatives. (2R,3R) and (2S,3S) have no such plane - reflecting either one gives the other, so those two form the chiral pair. 1,4-Butanediol has no stereocentre at all and never enters the comparison.",
      "note": "Counting 2^n stereoisomers over-counts whenever the constitution is symmetric: 2,3-butanediol has three stereoisomers, not four, because (2R,3S) and (2S,3R) name the same substance. And a meso compound is not a racemate - it is one pure substance that happens to be optically inactive, not a fifty-fifty mixture of two that cancel.",
      "options": {
        "A": "Correct. The (2R,3S) isomer has an internal mirror plane between C2 and C3, so the two stereocentres cancel and the compound is achiral and optically inactive.",
        "B": "(2R,3R)-2,3-Butanediol is chiral. Its mirror image is the (2S,3S) isomer, a different substance, and a pure sample of it rotates plane-polarised light.",
        "C": "(2S,3S)-2,3-Butanediol is the enantiomer of the (2R,3R) isomer rather than a meso form; both stereocentres share a descriptor, so no internal mirror plane exists.",
        "D": "1,4-Butanediol, HOCH2CH2CH2CH2OH, is indeed achiral - but it has no stereocentres at all, and the question asks for a compound achiral in spite of having them."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q4_cis_dimethylcyclohexane_conformations",
    "topic": "Chirality & Symmetry",
    "difficulty_level": "Medium",
    "question_text": "Which of the following conformations of cis-1,2-dimethylcyclohexane has an internal plane of symmetry, rendering it achiral in that specific geometry?",
    "question_smiles": "C1CC[C@@H](C)[C@@H](C)C1",
    "options": [
      {
        "option_id": "A",
        "text": "The planar conformation",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The chair conformation with one equatorial and one axial methyl group",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The twist-boat conformation",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "None of the above; all conformations are chiral",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "cis-1,2-Dimethylcyclohexane carries two stereocentres and is achiral all the same. Which conformation you draw decides whether that fact is visible, because a single conformation can be chiral even when the substance it represents is not.",
      "approach": "Step 1: Draw the ring flat, a plain hexagon with both methyl groups wedged toward the viewer. A mirror plane stands perpendicular to the ring, cutting the C1-C2 bond and the C4-C5 bond, and reflects one methyl group onto the other.\nStep 2: Draw a chair instead. The cis relationship forces one methyl axial and the other equatorial, and that arrangement has no mirror plane whatever - the individual chair conformer is chiral.\nStep 3: Draw a twist-boat. It keeps a two-fold rotation axis but no mirror plane, so it is chiral too. Of the three, only the flat drawing displays the symmetry directly.",
      "note": "The planar conformation is a drawing convention, not a geometry any molecule adopts - a flat cyclohexane costs far too much angle and torsional strain to be populated. The physical reason the substance is achiral is that its two chair conformers are enantiomers interconverting thousands of times a second by ring flip, so every sample holds them in exactly equal amounts and cannot rotate light. The flat drawing is the bookkeeping shortcut that reaches the same verdict without the ring flip.",
      "options": {
        "A": "Correct. In the flat hexagon a mirror plane bisects the C1-C2 and C4-C5 bonds and exchanges the two methyl groups, which is the symmetry that classes this compound as meso.",
        "B": "The cis relationship forces one methyl axial and one equatorial, and that chair has no mirror plane, so it is chiral. Its ring-flip partner is its mirror image, which is why the substance is not.",
        "C": "A twist-boat retains a two-fold rotation axis and no mirror plane, so this conformation is chiral as well. A rotation axis on its own never makes a molecule achiral.",
        "D": "Two of the three conformations named really are chiral, so the instinct behind this choice is half right - but the flat representation is not, and neither is the substance itself."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A plain hexagon standing for the cyclohexane ring, with a methyl group on each of two adjacent ring carbons; both methyls are drawn on bold wedges, pointing toward the viewer from the same face of the ring."
  },
  {
    "question_id": "ch05_q5_nitrogen_inversion",
    "topic": "Chirality & Symmetry",
    "difficulty_level": "Hard",
    "question_text": "Why is it generally impossible to resolve a tertiary amine such as ethylmethylpropylamine into stable enantiomers at room temperature?",
    "question_smiles": "CCN(C)CCC",
    "options": [
      {
        "option_id": "A",
        "text": "Rapid nitrogen pyramidal inversion interconverts the enantiomers.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The nitrogen atom is sp2-hybridized and flat, making the molecule achiral.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Tertiary amines form strong dimers that have a plane of symmetry.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The alkyl groups undergo rapid thermodynamic elimination at room temperature.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A trivalent nitrogen bearing three different groups is a stereocentre in principle: the lone pair acts as the fourth substituent, and the pyramid it completes can be built two ways that are mirror images of each other.",
      "approach": "Step 1: Count what surrounds the nitrogen in ethylmethylpropylamine - a methyl, an ethyl, a propyl and a lone pair. Four different things around an sp3 nitrogen means the two pyramidal forms are enantiomers.\nStep 2: Ask what interconverts them. The nitrogen flattens to an sp2 transition state with the lone pair in a p orbital, then re-pyramidalises the other way, turning inside out like an umbrella in the wind.\nStep 3: Put a number on it. The barrier for a simple trialkylamine is only about 6 kcal/mol, which at room temperature works out to something like 10^11 inversions per second. Any attempt to isolate one pyramid returns a racemate before the flask is capped.",
      "note": "The barrier, not the geometry, is what blocks the resolution - so raising the barrier makes the resolution work. Aziridines, whose three-membered ring resists the flattening, and phosphines, whose barrier runs near 30 kcal/mol, both give resolvable pyramidal centres. So does a quaternary ammonium salt bearing four different groups: with no lone pair, there is nothing left to invert.",
      "options": {
        "A": "Correct. Pyramidal inversion through a planar transition state costs only about 6 kcal/mol, so the two mirror-image pyramids interconvert far faster than any separation could be carried out.",
        "B": "Amine nitrogen is sp3 and pyramidal in its ground state, not flat. It becomes sp2 only at the top of the inversion barrier, and it is that fleeting transition state, not the ground state, that destroys the configuration.",
        "C": "Tertiary amines have no N-H and so cannot hydrogen-bond into dimers - and in any case a dimer would not change the configuration at a nitrogen sitting inside it.",
        "D": "Elimination requires a leaving group and a base under forcing conditions. A neutral trialkylamine standing at room temperature is not shedding alkyl groups at all."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A nitrogen atom at the junction of three plain bonds, carrying a one-carbon methyl group, a two-carbon ethyl chain and a three-carbon propyl chain; none of the bonds at nitrogen is drawn as a wedge or a dash."
  },
  {
    "question_id": "ch05_q6_enantiomer_relationship",
    "topic": "Enantiomers",
    "difficulty_level": "Easy",
    "question_text": "What is the stereochemical relationship between (2R,3S)-2-bromo-3-chlorobutane and (2S,3R)-2-bromo-3-chlorobutane?",
    "question_smiles": "C[C@@H](Br)[C@@H](Cl)C",
    "options": [
      {
        "option_id": "A",
        "text": "Enantiomers",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Diastereomers",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Meso compounds",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Constitutional isomers",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two stereoisomers of the same constitution are enantiomers when every stereocentre is inverted between them and diastereomers when some centres match while others do not. Comparing the descriptors one centre at a time settles the question mechanically.",
      "approach": "Step 1: Confirm the constitutions match. Both names are 2-bromo-3-chlorobutane, so the same atoms are joined in the same order and only the configurations are free to differ.\nStep 2: Compare centre by centre. C2 goes from R to S and C3 goes from S to R. Every stereocentre is inverted, which is precisely the definition of a mirror-image pair.\nStep 3: Rule out the meso reading before trusting that. A meso form needs the two stereocentres to carry identical substituent sets so an internal mirror can relate them; here one bears bromine and the other chlorine, so no internal mirror plane is available and the two labels really do name two distinct substances.",
      "note": "The all-inverted test is only trustworthy once step 3 has been done. Run the same comparison on 2,3-dibromobutane and (2R,3S) against (2S,3R) inverts both centres too - yet those two labels name a single meso substance, because the symmetric skeleton lets the molecule reflect onto itself. The symmetry of the constitution has to be checked before the descriptors are believed.",
      "options": {
        "A": "Correct. Both stereocentres are inverted and the skeleton carries no internal symmetry, so the two compounds are non-superimposable mirror images.",
        "B": "Diastereomers differ at some stereocentres but not at all of them. Here both C2 and C3 change descriptor together, which is exactly what rules a diastereomeric relationship out.",
        "C": "A meso compound needs two stereocentres carrying the same four substituents. A bromine on one carbon and a chlorine on the other makes an internal mirror plane geometrically impossible.",
        "D": "Constitutional isomers differ in which atoms are bonded to which. Both names describe the same 2-bromo-3-chlorobutane skeleton, so the connectivity is identical and only configuration is in play."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon zig-zag chain with a chlorine on one interior carbon and a bromine on the carbon next to it; both halogens are drawn on hashed bonds, receding away from the viewer."
  },
  {
    "question_id": "ch05_q7_enantiomer_rotation",
    "topic": "Enantiomers",
    "difficulty_level": "Easy",
    "question_text": "If a pure sample of the enantiomer (S)-lactic acid has a specific rotation of +3.8 degrees, what is the specific rotation of pure (R)-lactic acid under identical experimental conditions?",
    "question_smiles": "C[C@H](O)C(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "-3.8 degrees",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "+3.8 degrees",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "0.0 degrees",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "-7.6 degrees",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Specific rotation is a physical constant of a pure substance measured in an achiral environment, and enantiomers are related to one another by reflection - so their rotations come out equal in magnitude and opposite in sign.",
      "approach": "Step 1: Recall what plane-polarised light actually is - an equal superposition of a left-circularly and a right-circularly polarised component. A chiral medium slows one component more than the other, and the plane emerges rotated.\nStep 2: Reflect the medium. The mirror-image substance interacts with those two circular components in exactly the exchanged way, so the retardation swaps over and the sense of rotation reverses.\nStep 3: Note what reflection leaves alone. Concentration, path length, wavelength and temperature are all untouched, so the magnitude cannot change. (S)-Lactic acid at +3.8 therefore fixes (R)-lactic acid at -3.8 under the same conditions.",
      "note": "Nothing links the sign of rotation to the R/S descriptor. (S)-Lactic acid happens to be dextrorotatory while (S)-glyceraldehyde is levorotatory; the sign is measured in a polarimeter, never deduced from a Cahn-Ingold-Prelog analysis. That is why the sign is quoted alongside the configuration, as in (R)-(-)-lactic acid, instead of being left to be worked out.",
      "options": {
        "A": "Correct. Reflection reverses the sense of rotation while leaving the magnitude alone, so the enantiomer of a substance reading +3.8 reads -3.8 under identical conditions.",
        "B": "An identical rotation would mean the two samples are the same substance. Enantiomers are distinguishable in a polarimeter precisely because the sign differs between them.",
        "C": "Zero rotation belongs to a racemate or to an achiral compound. A pure sample of a single enantiomer is optically active by definition, so this cannot be the reading.",
        "D": "Doubling the magnitude would take doubling the concentration or the path length. Reflecting a molecule flips the sign of its rotation and changes nothing about the size."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-carbon fragment: a carboxylic acid written as HO-C=O on the left, joined to a central carbon that carries a hydroxyl group on a bold wedge toward the viewer and a methyl group on a plain bond below."
  },
  {
    "question_id": "ch05_q8_enantiomer_properties",
    "topic": "Enantiomers",
    "difficulty_level": "Medium",
    "question_text": "Which of the following physical properties differs between a pair of pure enantiomers under achiral conditions?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The direction of rotation of plane-polarized light",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Boiling point at 1 atm",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Solubility in water",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Retention factor (Rf) on standard silica gel thin-layer chromatography",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Enantiomers are identical in every property an achiral probe can measure. They come apart only when whatever does the measuring is itself chiral, and plane-polarised light is the one chiral probe among these four options.",
      "approach": "Step 1: Ask what each measurement puts the molecule up against. A boiling point reflects the intermolecular forces inside a pure sample of one enantiomer, and those forces are the exact mirror image of the other sample's, so they are equal in magnitude.\nStep 2: Notice that water is achiral and that ordinary silica gel is achiral. Solvation energy and adsorption strength therefore come out the same for both enantiomers, which is exactly why a racemate cannot be pulled apart on a standard TLC plate.\nStep 3: Turn to the light. Plane-polarised light decomposes into left- and right-circularly polarised components that are mirror images of each other, and that handedness is something the two enantiomers can tell apart - so they rotate the plane in opposite senses.",
      "note": "Make the environment chiral and every entry on this list starts to differ: a chiral HPLC column separates enantiomers, a chiral shift reagent pulls their NMR signals apart, and a receptor binds one and ignores the other. Watch one apparent exception - a racemate's melting point often differs from the pure enantiomer's, but that belongs to the mixture's crystal lattice, not to either enantiomer on its own.",
      "options": {
        "A": "Correct. Plane-polarised light carries handedness in its two circularly polarised components, so enantiomers rotate it by equal amounts in opposite directions.",
        "B": "Boiling point depends on the intermolecular forces within a pure sample, and those forces are the exact mirror image of the other enantiomer's - identical in magnitude, so the boiling points match.",
        "C": "Water is achiral, so it solvates the two enantiomers with identical energy. Their solubilities agree to the precision of any ordinary measurement.",
        "D": "Standard silica gel is achiral, so both enantiomers adsorb equally and travel the same distance up the plate. That is precisely why TLC cannot resolve a racemate."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q9_thalidomide_stereochemistry",
    "topic": "Enantiomers",
    "difficulty_level": "Medium",
    "question_text": "The drug thalidomide was prescribed in the 1950s as a sedative, but its enantiomer was a potent teratogen. Why did administering the pure, active (R)-enantiomer fail to prevent the birth defects?",
    "question_smiles": "O=C1CC[C@@H](N2C(=O)c3ccccc3C2=O)C(=O)N1",
    "options": [
      {
        "option_id": "A",
        "text": "The (R)-enantiomer racemizes rapidly in vivo under physiological conditions.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The active (R)-enantiomer was actually the teratogen, not the (S)-enantiomer.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The body converts the (R)-enantiomer into a meso compound.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The (R)-enantiomer is not absorbed by the body, whereas the (S)-enantiomer is.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Handing a patient a single enantiomer only helps if the stereocentre survives inside the body. Thalidomide's does not, so the distinction between its two enantiomers disappears within hours of the dose no matter how pure the tablet was.",
      "approach": "Step 1: Find the stereocentre. It is the ring carbon of the six-membered glutarimide that bears the phthalimide nitrogen - the only carbon in the molecule with four different groups on it.\nStep 2: Notice what flanks its hydrogen. That C-H sits alpha to a ring carbonyl, which makes it acidic enough to be removed at physiological pH, and the resulting enolate is planar and achiral.\nStep 3: Reprotonate. The planar intermediate is attacked from either face with equal probability, so every cycle scrambles the configuration. The racemisation half-life in blood runs on the order of hours, comfortably shorter than a dosing interval, and a pure (R) dose becomes a racemate in vivo.",
      "note": "The lesson generalises past this one drug: a stereocentre carrying a hydrogen alpha to a carbonyl is never assumed to be configurationally stable. The same chemistry runs in the 2-arylpropionic acid anti-inflammatories, where administered (R)-ibuprofen is converted to the active (S) form in the body. It is worth correcting the popular version of the story as well - the (S) enantiomer is the teratogen, but marketing pure (R) would not have prevented the harm.",
      "options": {
        "A": "Correct. The stereocentre's hydrogen is alpha to a carbonyl, so deprotonation and reprotonation through a planar enolate racemise the drug in the body within hours.",
        "B": "The teratogenic activity is associated with the (S) enantiomer, not the (R). Single-enantiomer dosing fails here because of racemisation, not because the two enantiomers were mixed up.",
        "C": "A meso compound needs at least two stereocentres for an internal mirror plane to relate. Thalidomide has exactly one stereocentre, so no meso form of it can exist.",
        "D": "Both enantiomers are absorbed. They have identical solubility and behave identically toward the achiral machinery of absorption, since enantiomers diverge only in chiral surroundings."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring fused to a five-membered ring that holds a nitrogen between two carbonyl groups; that nitrogen is joined, on a bold wedge toward the viewer, to a six-membered ring bearing two carbonyls of its own and an N-H."
  },
  {
    "question_id": "ch05_q10_mirror_image_assignment",
    "topic": "Enantiomers",
    "difficulty_level": "Medium",
    "question_text": "Which of the following corresponds to the enantiomer of (2R,3R)-3-chloro-2-butanol?",
    "question_smiles": "C[C@@H](O)[C@H](Cl)C",
    "options": [
      {
        "option_id": "A",
        "text": "(2S,3S)-3-chloro-2-butanol",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2S,3R)-3-chloro-2-butanol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2R,3S)-3-chloro-2-butanol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "meso-3-chloro-2-butanol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The enantiomer of a compound is its non-superimposable mirror image, and a reflection inverts every stereocentre at once. Change some of the descriptors but not all of them and you have named a diastereomer instead.",
      "approach": "Step 1: List the stereocentres of 3-chloro-2-butanol. C2 carries the hydroxyl and C3 carries the chlorine, so there are two of them and the compound has four stereoisomers in total.\nStep 2: Reflect the (2R,3R) isomer. Both centres invert together, which gives (2S,3S).\nStep 3: Confirm the alternatives are not mirror images. (2S,3R) inverts only C2 and (2R,3S) inverts only C3; each shares one descriptor with the original, which makes it a diastereomer rather than an enantiomer.",
      "note": "The four stereoisomers fall into two enantiomeric pairs, and the practical consequence is a separation problem. Any two isomers drawn from different pairs are diastereomers with genuinely different boiling points and Rf values, so distillation or silica chromatography will part them; the two members of a single pair will not come apart by any achiral method at all.",
      "options": {
        "A": "Correct. Reflection inverts both stereocentres at once, so the mirror image of the (2R,3R) isomer is the (2S,3S) isomer.",
        "B": "Inverting C2 while leaving C3 as R gives a diastereomer of the original, not its mirror image. A reflection cannot act on one stereocentre and spare another.",
        "C": "Inverting C3 while leaving C2 as R likewise produces a diastereomer; it still shares the C2 descriptor with the starting compound, so it is not the reflection.",
        "D": "3-Chloro-2-butanol has no meso form. Its two stereocentres carry different substituents - one a hydroxyl, the other a chlorine - so no internal mirror plane can relate them."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon zig-zag chain with a chlorine on one interior carbon drawn on a bold wedge toward the viewer, and a hydroxyl on the neighbouring carbon drawn on a hashed bond receding from the viewer."
  },
  {
    "question_id": "ch05_q11_max_stereoisomers",
    "topic": "Diastereomers",
    "difficulty_level": "Easy",
    "question_text": "What is the maximum number of stereoisomers possible for 2,3,4-trichlorohexane?",
    "question_smiles": "CCC(Cl)C(Cl)C(Cl)C",
    "options": [
      {
        "option_id": "A",
        "text": "8",
        "smiles": "CCC(Cl)C(Cl)C(Cl)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "6",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "4",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "16",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the application of the $2^n$ rule to determine the maximum number of stereoisomers.",
      "process": "Step 1: Identify the number of tetrahedral stereocenters ($n$) in 2,3,4-trichlorohexane. The stereocenters are C2, C3, and C4.\nStep 2: Evaluate the symmetry of the molecule. Since it is an unsymmetrical hexane chain (one end is methyl, the other is ethyl), there is no symmetry. Thus, no meso compounds can exist to reduce the number of stereoisomers.\nStep 3: Apply the formula $2^n$ where $n = 3$: $2^3 = 8$ stereoisomers.",
      "result": "There are 8 possible stereoisomers for 2,3,4-trichlorohexane because it has 3 stereocenters and lacks symmetry."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q12_diastereomer_definition",
    "topic": "Diastereomers",
    "difficulty_level": "Easy",
    "question_text": "Which statement best defines diastereomers?",
    "question_smiles": "C[C@@H](Cl)[C@H](Cl)C",
    "options": [
      {
        "option_id": "A",
        "text": "Stereoisomers that are not mirror images of each other.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Stereoisomers that are non-superimposable mirror images.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Isomers that differ only in the connectivity of their atoms.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Conformational variants that interconvert by rotation around single bonds.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the fundamental definition of diastereomers as a class of stereoisomers.",
      "process": "Step 1: Compare the definitions of isomers. Constitutional isomers have different connectivity. Stereoisomers have the same connectivity but different 3D arrangements.\nStep 2: Within stereoisomers, if they are mirror images, they are enantiomers.\nStep 3: If they are stereoisomers but NOT mirror images, they are diastereomers. This class includes cis/trans isomers and compounds with multiple stereocenters where some, but not all, centers are inverted.",
      "result": "Diastereomers are stereoisomers that are not mirror images of one another."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q13_tartaric_acid_diastereomers",
    "topic": "Diastereomers",
    "difficulty_level": "Medium",
    "question_text": "Which of the following pairs of tartaric acid stereoisomers are diastereomers?",
    "question_smiles": "O=C(O)C(O)C(O)C(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "(2R,3R)-Tartaric acid and meso-tartaric acid",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2R,3R)-Tartaric acid and (2S,3S)-Tartaric acid",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2S,3S)-Tartaric acid and its mirror image",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "All of the above are diastereomeric pairs",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests stereochemical relationships in the classic tartaric acid system.",
      "process": "Step 1: Identify the configurations. (2R,3R)-Tartaric acid has both centers in (R) configuration. meso-Tartaric acid has one (R) and one (S) configuration.\nStep 2: Compare the two structures. Since C2 is (R) in both, but C3 is (R) in the first and (S) in the second, they are stereoisomers that are not mirror images.\nStep 3: Thus, they are diastereomers. Comparing (2R,3R) and (2S,3S) shows they are enantiomers (mirror images).",
      "result": "(2R,3R)-Tartaric acid and meso-tartaric acid are diastereomers because they differ in configuration at one but not all stereocenters."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q14_diastereomer_separation",
    "topic": "Diastereomers",
    "difficulty_level": "Medium",
    "question_text": "Why can a mixture of diastereomers be separated by common physical techniques (such as recrystallization or column chromatography on silica gel), whereas enantiomers cannot?",
    "question_smiles": "C[C@H](O)[C@@H](F)C",
    "options": [
      {
        "option_id": "A",
        "text": "Diastereomers have different physical properties (boiling points, solubilities) because their shapes are different.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Diastereomers are constitutional isomers and have different connectivity.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "One diastereomer is always chiral while the other is always achiral.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Diastereomers do not have stereocenters.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the physical basis for separating diastereomers versus enantiomers.",
      "process": "Step 1: Enantiomers have identical physical properties in achiral environments because their spatial relationships between atoms are identical (just mirrored).\nStep 2: Diastereomers have different spatial arrangements of their atoms relative to one another (e.g. cis vs. trans, or R,R vs. R,S). Their dipole moments, molecular shapes, and intermolecular forces differ.\nStep 3: Consequently, they have different boiling points, melting points, solubilities, and chromatographic retention times, allowing easy separation.",
      "result": "Diastereomers have different physical properties because they have different 3D shapes and spatial arrangements of substituents."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q15_epimer_definition",
    "topic": "Diastereomers",
    "difficulty_level": "Medium",
    "question_text": "What is the term used to describe two diastereomers that differ in configuration at only one of several stereocenters?",
    "question_smiles": "OC[C@@H](O)[C@@H](O)[C@H](O)[C@@H](O)C=O",
    "options": [
      {
        "option_id": "A",
        "text": "Epimers",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Anomers",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Enantiomers",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Constitutional isomers",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests organic chemistry terminology related to carbohydrate and sugar stereochemistry.",
      "process": "Step 1: Diastereomers can differ at one or more stereocenters. If they differ at all stereocenters, they are enantiomers.\nStep 2: If they differ at only one stereocenter out of multiple, they are a special subclass of diastereomers known as epimers.\nStep 3: For example, D-glucose and D-galactose are C4-epimers. Anomers are a specific type of epimer at the hemiacetal/hemiketal carbon of cyclic sugars.",
      "result": "Two diastereomers that differ at only a single stereocenter are called epimers."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q16_meso_tartaric_acid",
    "topic": "Meso Compounds",
    "difficulty_level": "Medium",
    "question_text": "Which of the following configurations of tartaric acid represents a meso compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "(2R,3S)-Tartaric acid",
        "smiles": "O=C(O)[C@@H](O)[C@H](O)C(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2R,3R)-Tartaric acid",
        "smiles": "O=C(O)[C@@H](O)[C@@H](O)C(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2S,3S)-Tartaric acid",
        "smiles": "O=C(O)[C@H](O)[C@H](O)C(=O)O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "None of the above; tartaric acid cannot be meso",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the identification of the meso form of tartaric acid.",
      "process": "Step 1: Examine the structure of tartaric acid ($HOOC-CH(OH)-CH(OH)-COOH$). It is a symmetrical molecule with stereocenters at C2 and C3.\nStep 2: For a meso compound, the configurations must be opposite at the two equivalent stereocenters. Thus, one must be (R) and the other (S).\nStep 3: In (2R,3S)-tartaric acid, C2 is (R) and C3 is (S). This creates an internal plane of symmetry that bisects the C2-C3 bond, making the molecule achiral (meso).",
      "result": "(2R,3S)-Tartaric acid is a meso compound due to its internal symmetry, which cancels its optical activity."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q17_identify_meso_structure",
    "topic": "Meso Compounds",
    "difficulty_level": "Medium",
    "question_text": "Which of the following compounds is a meso compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "(2R,3S)-2,3-dichlorobutane",
        "smiles": "C[C@@H](Cl)[C@H](Cl)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2R,3R)-2,3-dichlorobutane",
        "smiles": "C[C@@H](Cl)[C@@H](Cl)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2R,3S)-2,3-dichloropentane",
        "smiles": "CC[C@H](Cl)[C@@H](Cl)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(2S,3S)-2,3-dichlorobutane",
        "smiles": "C[C@H](Cl)[C@H](Cl)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the ability to distinguish between meso compounds and chiral diastereomers.",
      "process": "Step 1: Check for asymmetric carbons (stereocenters). All options except the pentane have C2 and C3 as stereocenters.\nStep 2: Check for symmetry. (2R,3S)-2,3-dichlorobutane is symmetrical (both ends are $-CH_3$), and the stereocenters have opposite configurations (R and S), yielding a plane of symmetry.\nStep 3: Why is (2R,3S)-2,3-dichloropentane NOT meso? Although it has opposite configurations (R,S), it is unsymmetrical (one end is $-CH_3$, the other is $-CH_2CH_3$). Thus, it lacks a plane of symmetry and is chiral.",
      "result": "(2R,3S)-2,3-dichlorobutane is meso because it is symmetrical and has opposite stereochemical configurations that cancel each other out."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q18_symmetrical_diols",
    "topic": "Meso Compounds",
    "difficulty_level": "Hard",
    "question_text": "Which of the following statements is correct regarding the stereoisomers of 2,4-pentanediol?",
    "question_smiles": "CC(O)CC(O)C",
    "options": [
      {
        "option_id": "A",
        "text": "The (2R,4S) isomer is a meso compound, while the (2R,4R) isomer is chiral.",
        "smiles": "C[C@@H](O)C[C@H](O)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Both the (2R,4S) and (2R,4R) isomers are meso.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The (2R,4S) isomer is chiral, while the (2R,4R) isomer is meso.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "There are no meso isomers because C3 is a methylene group ($CH_2$).",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the stereocenter and symmetry relations in a 1,3-relationship (2,4-pentanediol).",
      "process": "Step 1: Identify the stereocenters of 2,4-pentanediol. They are C2 and C4. C3 is achiral because it has two identical hydrogen atoms.\nStep 2: Draw the (2R,4S) isomer. It has a plane of symmetry passing through C3 (splitting the C3 carbon and its two H atoms). Therefore, (2R,4S) is a meso compound.\nStep 3: Draw the (2R,4R) isomer. The two methyl ends are equivalent, but because both stereocenters have the same configuration, they do not mirror each other across C3. The molecule lacks symmetry and is chiral.",
      "result": "The (2R,4S)-2,4-pentanediol is a meso compound, while the (2R,4R) isomer is chiral."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q19_center_of_inversion_meso",
    "topic": "Meso Compounds",
    "difficulty_level": "Hard",
    "question_text": "In its anti conformation, meso-2,3-dichlorobutane is achiral. What symmetry element is present in this specific conformation that demonstrates its achirality?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "A center of inversion ($i$)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A plane of symmetry ($\\sigma$)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A C2 rotational axis of symmetry ($C_2$)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "No symmetry element is present; it is achiral only on a time-average.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests advanced symmetry concepts, specifically identifying a center of inversion ($i$) versus a plane of symmetry ($\\sigma$) in conformationally flexible systems.",
      "process": "Step 1: Look at the Newman projection of meso-2,3-dichlorobutane in the anti conformation (where the two $-CH_3$ groups are 180 degrees apart).\nStep 2: In this conformation, if you draw a line from any atom (e.g. Cl) through the center of the C2-C3 bond and extend it an equal distance on the other side, you find an identical atom (Cl). This is a center of inversion ($i$).\nStep 3: There is no plane of symmetry in this staggered conformation. (In the eclipsed conformation, there is a plane of symmetry but no center of inversion). Since it contains a symmetry element in every conformation, the molecule is achiral overall.",
      "result": "In the anti conformation, meso-2,3-dichlorobutane possesses a center of inversion ($i$) which renders it achiral."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q20_average_symmetry_cis_cyclohexane",
    "topic": "Meso Compounds",
    "difficulty_level": "Hard",
    "question_text": "Why is cis-1,2-dimethylcyclohexane optically inactive at room temperature?",
    "question_smiles": "C1CC[C@@H](C)[C@@H](C)C1",
    "options": [
      {
        "option_id": "A",
        "text": "It is a meso compound whose individual chair conformations rapidly interconvert, resulting in a time-averaged achiral mixture.",
        "smiles": "C1CC[C@@H](C)[C@@H](C)C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It is a mixture of two constitutional isomers in equilibrium.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It lacks stereocenters, so it cannot rotate plane-polarized light.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The methyl groups are in equatorial-equatorial positions, which cancels optical activity.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the relationship between conformational dynamics (ring flip) and optical activity in cis-cyclohexane systems.",
      "process": "Step 1: cis-1,2-Dimethylcyclohexane has two chair conformations. Each conformation has one axial methyl and one equatorial methyl group.\nStep 2: These two chair conformations are non-superimposable mirror images (enantiomers) of each other. Individual chair conformations are chiral.\nStep 3: However, ring flipping is extremely rapid at room temperature, meaning they interconvert instantly. Because they are equal in energy, they exist in a 50:50 ratio (a conformational racemate), resulting in a time-averaged plane of symmetry and optical inactivity.",
      "result": "cis-1,2-Dimethylcyclohexane is optically inactive because it undergoes rapid ring flipping to form a 50:50 conformational racemic mixture of chiral chairs."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q21_rs_simple_butanol",
    "topic": "R/S Assignment",
    "difficulty_level": "Easy",
    "question_text": "Determine the configuration of the stereocenter in (S)-2-butanol using the Cahn-Ingold-Prelog rules.",
    "question_smiles": "CC[C@@H](O)C",
    "options": [
      {
        "option_id": "A",
        "text": "(S)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(R)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(Z)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests basic R/S assignment on a standard secondary alcohol.",
      "process": "Step 1: Identify the four groups attached to the C2 stereocenter: $-OH$, $-CH_2CH_3$ (ethyl), $-CH_3$ (methyl), and $-H$.\nStep 2: Assign priorities based on atomic numbers: $-OH$ (priority 1, O=8), $-CH_2CH_3$ (priority 2, C bonded to C,H,H), $-CH_3$ (priority 3, C bonded to H,H,H), and $-H$ (priority 4, H=1).\nStep 3: With the lowest priority group ($-H$) pointing away (on a dash in `CC[C@@H](O)C`), trace the path from 1 -> 2 -> 3. The direction is counter-clockwise, which corresponds to (S) configuration.",
      "result": "The configuration is (S) because the priority path 1 ($-OH$) -> 2 ($-CH_2CH_3$) -> 3 ($-CH_3$) runs counter-clockwise with H pointing away."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q22_rs_isotope_deuterium",
    "topic": "R/S Assignment",
    "difficulty_level": "Medium",
    "question_text": "Assign the R/S configuration to the chiral center in the deuterated compound shown below: (R)-1-deuterioethanol.",
    "question_smiles": "O[C@@H]([2H])C",
    "options": [
      {
        "option_id": "A",
        "text": "(R)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(S)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Achiral",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(E)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests priority rules for isotopes under the Cahn-Ingold-Prelog system.",
      "process": "Step 1: The stereocenter has four groups: $-OH$, $-CH_3$, $-D$ (deuterium), and $-H$ (hydrogen).\nStep 2: Assign priorities. Oxygen has the highest atomic number (priority 1). Carbon (priority 2) beats deuterium and hydrogen. For the isotopes deuterium ($^2H$) and hydrogen ($^1H$), priority is determined by atomic mass: Deuterium is priority 3, and Hydrogen is priority 4.\nStep 3: Trace the path 1 ($-OH$) -> 2 ($-CH_3$) -> 3 ($-D$). In the (R) configuration with H in the back, the path runs clockwise.",
      "result": "The configuration is (R) because isotopes of the same element are prioritized by mass number (D > H), making D priority 3 and H priority 4."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q23_rs_vinyl_vs_isopropyl",
    "topic": "R/S Assignment",
    "difficulty_level": "Hard",
    "question_text": "Under Cahn-Ingold-Prelog rules, what is the correct priority order (highest to lowest) for the following groups?\n-C≡CH, -CH=CH2, -CH(CH3)2, -CH2CH2CH3",
    "question_smiles": "C[C@@H](C#C)C=C",
    "options": [
      {
        "option_id": "A",
        "text": "-C≡CH > -CH=CH2 > -CH(CH3)2 > -CH2CH2CH3",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "-C≡CH > -CH(CH3)2 > -CH=CH2 > -CH2CH2CH3",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "-CH=CH2 > -C≡CH > -CH(CH3)2 > -CH2CH2CH3",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "-CH(CH3)2 > -C≡CH > -CH=CH2 > -CH2CH2CH3",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests how double and triple bonds are treated when assigning CIP priorities.",
      "process": "Step 1: Convert multiple bonds to equivalent single bonds. A triple bond carbon $-C\\equiv CH$ is treated as bonded to three carbons: (C, C, C). A double bond carbon $-CH=CH_2$ is treated as bonded to two carbons and one hydrogen: (C, C, H).\nStep 2: Compare C1 atoms: $-C\\equiv CH$ is (C,C,C) vs. $-CH=CH_2$ which is (C,C,H) vs. $-CH(CH_3)_2$ which is (C,C,H) vs. $-CH_2CH_2CH_3$ which is (C,H,H).\nStep 3: Comparing: (C,C,C) wins immediately, so $-C\\equiv CH$ is priority 1. $-CH_2CH_2CH_3$ is (C,H,H), so it is priority 4.\nStep 4: Now compare $-CH=CH_2$ (vinyl) and $-CH(CH_3)_2$ (isopropyl). Both have C1 bonded to (C,C,H). Go to the next atoms: for vinyl, the next carbon is double bonded, treated as bonded to (C,H,H). For isopropyl, the methyl carbons are bonded to (H,H,H). Since (C,H,H) beats (H,H,H), vinyl has higher priority than isopropyl. Thus, priority is $-C\\equiv CH > -CH=CH_2 > -CH(CH_3)_2 > -CH_2CH_2CH_3$.",
      "result": "The priority order is -C≡CH > -CH=CH2 > -CH(CH3)2 > -CH2CH2CH3. Double and triple bonds are treated as multiple single bonds to phantom carbons."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q24_rs_cysteine_anomaly",
    "topic": "R/S Assignment",
    "difficulty_level": "Hard",
    "question_text": "Nineteen of the twenty standard amino acids have the (S) configuration at the alpha-carbon. However, L-cysteine is (R). Why?",
    "question_smiles": "N[C@@H](CS)C(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "The sulfur atom in the side chain (-CH2SH) gives it priority over the carboxyl group (-COOH).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cysteine is a D-amino acid, unlike the others.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The nitrogen atom is protonated, changing its priority.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The carboxylic acid group of cysteine has lower priority than a methyl group.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests a famous anomaly in biochem/organic stereochemistry: why cysteine is R while other L-amino acids are S.",
      "process": "Step 1: Identify the four groups on the alpha-carbon of L-cysteine: $-NH_2$, $-COOH$, $-CH_2SH$, and $-H$.\nStep 2: Assign priorities: Nitrogen (atomic number 7) is priority 1. Hydrogen is priority 4.\nStep 3: Compare $-COOH$ and $-CH_2SH$ at C-alpha. The carbon of $-COOH$ is bonded to (O, O, O) (treating the carbonyl as two single bonds). The C-beta of $-CH_2SH$ is bonded to (S, H, H). Since sulfur (atomic number 16) has a higher atomic number than oxygen (atomic number 8), the $-CH_2SH$ group has higher priority (priority 2) than the $-COOH$ group (priority 3). For other amino acids, the side chain carbon is bonded to (C,H,H) or (H,H,H), making $-COOH$ priority 2 and side chain priority 3.",
      "result": "L-Cysteine is (R) because the side chain carbon is bonded to sulfur, which has a higher atomic number (16) than oxygen (8), prioritizing -CH2SH over -COOH."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q25_rs_3_methylcyclohexene",
    "topic": "R/S Assignment",
    "difficulty_level": "Medium",
    "question_text": "Assign the R/S configuration to the stereocenter (C3) in (R)-3-methylcyclohexene.",
    "question_smiles": "C1[C@@H](C)C=CCC1",
    "options": [
      {
        "option_id": "A",
        "text": "(R)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(S)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(E)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(Z)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests R/S assignment on a stereocenter within a cycloalkene ring system.",
      "process": "Step 1: Identify the groups attached to C3: the methyl group ($-CH_3$), hydrogen ($-H$), C2 (part of the double bond), and C4 (part of the ring).\nStep 2: Assign priorities. C2 is an $sp^2$ carbon double-bonded to C1, so it is treated as bonded to (C,C,H). C4 is an $sp^3$ carbon bonded to C5, H, H, so it is treated as (C,H,H).\nStep 3: Comparing C2 and C4: (C,C,H) beats (C,H,H), so C2 has priority 1. C4 has priority 2. The methyl group ($-CH_3$) is bonded to (H,H,H), so it is priority 3. Hydrogen is priority 4.\nStep 4: Looking at `C1[C@@H](C)C=CCC1` (with the methyl group on a wedge, meaning H is in the back on a dash), tracing from C2 (1) -> C4 (2) -> Methyl (3) runs clockwise, which is (R).",
      "result": "C3 of the structure shown has the (R) configuration because the double-bonded C2 path has higher priority than the sp3 C4 path."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q26_rs_glyceraldehyde",
    "topic": "R/S Assignment",
    "difficulty_level": "Medium",
    "question_text": "What is the R/S configuration of the central carbon in D-glyceraldehyde?",
    "question_smiles": "OC[C@@H](O)C=O",
    "options": [
      {
        "option_id": "A",
        "text": "(R)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(S)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(D)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(L)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests configuration assignment for the reference monosaccharide glyceraldehyde.",
      "process": "Step 1: The chiral center C2 of glyceraldehyde is bonded to $-OH$, $-CHO$ (aldehyde), $-CH_2OH$ (hydroxymethyl), and $-H$.\nStep 2: Assign priorities: $-OH$ is priority 1. $-CHO$ carbon is bonded to (O,O,H). $-CH_2OH$ carbon is bonded to (O,H,H). Comparing (O,O,H) to (O,H,H), $-CHO$ is priority 2, and $-CH_2OH$ is priority 3. $-H$ is priority 4.\nStep 3: For D-glyceraldehyde, when drawn in standard Fischer projection, $-OH$ is on the right, $-H$ is on the left, $-CHO$ is at the top, and $-CH_2OH$ is at the bottom. This translates to the (R) configuration.",
      "result": "D-Glyceraldehyde has the (R) configuration because the aldehyde carbon (-CHO) has priority over the hydroxymethyl carbon (-CH2OH)."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q27_rs_wedge_h",
    "topic": "R/S Assignment",
    "difficulty_level": "Medium",
    "question_text": "Determine the configuration of the chiral center in a molecule where the priorities are 1: -Cl, 2: -F, 3: -CH3, 4: -H, and the hydrogen atom (-H) is on a wedge pointing towards you, and tracing 1 -> 2 -> 3 goes clockwise.",
    "question_smiles": "Cl[C@H](F)C",
    "options": [
      {
        "option_id": "A",
        "text": "(S)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(R)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Achiral",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(Z)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests how to handle a chiral center where the lowest priority group is pointing towards the viewer.",
      "process": "Step 1: The Cahn-Ingold-Prelog system requires the lowest priority group (4) to point away from the viewer (on a dash).\nStep 2: If group 4 is pointing towards the viewer (on a wedge), the apparent configuration obtained by tracing 1 -> 2 -> 3 must be reversed.\nStep 3: The apparent direction is clockwise (which would normally be R). Since H is on a wedge, reverse this result to get (S).",
      "result": "The configuration is (S) because the lowest priority group (-H) is on a wedge, meaning the clockwise apparent rotation must be inverted."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q28_rs_two_centers_assignment",
    "topic": "R/S Assignment",
    "difficulty_level": "Hard",
    "question_text": "Identify the IUPAC name, including stereochemical descriptors, for the compound represented by the SMILES `C[C@@H](Br)[C@H](Cl)C`.",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "(2R,3S)-2-bromo-3-chlorobutane",
        "smiles": "C[C@@H](Br)[C@H](Cl)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2S,3R)-2-bromo-3-chlorobutane",
        "smiles": "C[C@H](Br)[C@@H](Cl)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2R,3R)-2-bromo-3-chlorobutane",
        "smiles": "C[C@@H](Br)[C@@H](Cl)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(2S,3S)-2-bromo-3-chlorobutane",
        "smiles": "C[C@H](Br)[C@H](Cl)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests assignment of R/S configuration to multiple stereocenters in a single molecule.",
      "process": "Step 1: Number the chain to give substituents the lowest possible locants: C2 gets Br and C3 gets Cl (2-bromo-3-chlorobutane).\nStep 2: Assign C2 configuration. Groups are $-Br$ (1), C3 (2), $-CH_3$ (3), $-H$ (4). With H in the back, the path from $-Br$ (1) -> C3 (2) -> $-CH_3$ (3) is clockwise, which is (2R).\nStep 3: Assign C3 configuration. Groups are $-Cl$ (1), C2 (2), $-CH_3$ (3), $-H$ (4). In `C[C@@H](Br)[C@H](Cl)C`, C3 has Cl on a dash or wedge. Tracing 1 -> 2 -> 3 counter-clockwise with H in the back gives (3S).",
      "result": "The IUPAC name of the structure is (2R,3S)-2-bromo-3-chlorobutane."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q29_rs_group_four_in_plane",
    "topic": "R/S Assignment",
    "difficulty_level": "Hard",
    "question_text": "If the lowest priority group (4) at a stereocenter lies in the plane of the page, what is the most reliable method to assign its R/S configuration?",
    "question_smiles": "CC[C@H](C)O",
    "options": [
      {
        "option_id": "A",
        "text": "Perform a double swap of substituents to place group 4 in the back while keeping configuration intact, then assign.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Assign the configuration directly based on the apparent direction of 1 -> 2 -> 3, without adjusting.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Swap group 4 with group 1 and invert the final result.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Assume it is (R) if the highest priority group is on a wedge.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests 3D manipulation techniques for stereocenters, specifically handling groups in the plane.",
      "process": "Step 1: Swapping any two groups on a stereocenter inverts the configuration. Swapping a second pair inverts it again, returning it to the original configuration.\nStep 2: To keep the stereocenter intact, swap group 4 with the group currently in the back (on the dash). Then swap the remaining two groups (double swap).\nStep 3: Now, since group 4 is in the back, assign the configuration directly. This avoids spatial rotation mistakes.",
      "result": "A double swap of substituents is the most reliable method because it places group 4 in the back without altering the configuration."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q30_rs_carboxyl_complex_priority",
    "topic": "R/S Assignment",
    "difficulty_level": "Medium",
    "question_text": "Using Cahn-Ingold-Prelog rules, what is the priority order (highest to lowest) of the following carbonyl and carboxyl derivatives?\n-COOCH3, -COOH, -CHO, -CH2OH",
    "question_smiles": "CC(C)OC(=O)C",
    "options": [
      {
        "option_id": "A",
        "text": "-COOCH3 > -COOH > -CHO > -CH2OH",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "-COOH > -COOCH3 > -CHO > -CH2OH",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "-COOCH3 > -CHO > -COOH > -CH2OH",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "-CHO > -COOCH3 > -COOH > -CH2OH",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests CIP priority determination when multiple oxygenated carbon functional groups are compared.",
      "process": "Step 1: Analyze C1 of each group.\n- $-COOCH_3$ and $-COOH$ are carbonyl carbons bonded to a double bond O and a single bond O. They are treated as bonded to (O, O, O).\n- $-CHO$ (aldehyde) is a carbonyl carbon double bonded to O and single bonded to H. It is treated as bonded to (O, O, H).\n- $-CH_2OH$ is an $sp^3$ carbon bonded to (O, H, H).\nStep 2: Compare $(O, O, O)$ groups ($-COOCH_3$ vs $-COOH$) with $(O, O, H)$ ($-CHO$) and $(O, H, H)$ ($-CH_2OH$). Clearly, $-COOCH_3$ and $-COOH$ have higher priority than $-CHO$, which is higher than $-CH_2OH$.\nStep 3: Compare $-COOCH_3$ and $-COOH$. Go to the next atom: for $-COOCH_3$, it is Carbon (atomic number 6). For $-COOH$, it is Hydrogen (atomic number 1). Since Carbon beats Hydrogen, $-COOCH_3$ is priority 1 and $-COOH$ is priority 2.",
      "result": "The priority order is -COOCH3 > -COOH > -CHO > -CH2OH."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q31_fischer_lines",
    "topic": "Fischer Projections",
    "difficulty_level": "Easy",
    "question_text": "In a Fischer projection, what spatial orientation is represented by the horizontal and vertical bonds?",
    "question_smiles": "OC[C@@H](O)C=O",
    "options": [
      {
        "option_id": "A",
        "text": "Horizontal bonds point towards the viewer (wedges); vertical bonds point away from the viewer (dashes).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Horizontal bonds point away from the viewer; vertical bonds point towards the viewer.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "All bonds lie flat in the plane of the page.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Vertical bonds represent C-C bonds, and horizontal bonds represent C-H bonds only.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the 3D interpretation of Fischer projections.",
      "process": "Step 1: Recall the definition of a Fischer projection. It is a 2D representation of a 3D molecule.\nStep 2: By convention, horizontal lines represent bonds that project out of the page (wedges), resembling a bow tie.\nStep 3: Vertical lines represent bonds that project back into the page (dashes).",
      "result": "Horizontal bonds point towards the viewer (wedges), and vertical bonds point away from the viewer (dashes)."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q32_fischer_rotation_180",
    "topic": "Fischer Projections",
    "difficulty_level": "Medium",
    "question_text": "Which of the following operations on a Fischer projection preserves the original configuration of the stereocenter?",
    "question_smiles": "C[C@H](O)C(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "Rotating the projection 180 degrees in the plane of the page.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Rotating the projection 90 degrees in the plane of the page.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Flipping the projection over like a pancake (out of the page).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Swapping any two groups at a single stereocenter.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the rules of manipulating Fischer projections without altering stereochemistry.",
      "process": "Step 1: A 180-degree rotation keeps the vertical groups vertical and horizontal groups horizontal. Although their positions are inverted, the wedges remain wedges and dashes remain dashes, preserving configuration.\nStep 2: A 90-degree rotation swaps horizontal and vertical bonds. What was in the back is now in the front, which inverts the configuration.\nStep 3: Swapping two groups inverts the configuration. Flipping the projection out of the page is equivalent to a reflection (mirroring), which inverts the configuration.",
      "result": "Rotating a Fischer projection by 180 degrees in the plane of the page preserves the configuration, whereas 90-degree rotations or single swaps invert it."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q33_fischer_rs_assignment",
    "topic": "Fischer Projections",
    "difficulty_level": "Medium",
    "question_text": "Assign the R/S configuration to the chiral center in the following Fischer projection:\nTop = -CHO, Bottom = -CH2OH, Left = -H, Right = -OH.",
    "question_smiles": "OC[C@@H](O)C=O",
    "options": [
      {
        "option_id": "A",
        "text": "(R)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(S)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Achiral",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(D)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the method for assigning R/S configuration directly from a Fischer projection.",
      "process": "Step 1: Assign priorities to the groups: $-OH$ (1), $-CHO$ (2), $-CH_2OH$ (3), $-H$ (4).\nStep 2: Trace the path 1 -> 2 -> 3. From $-OH$ (right) -> $-CHO$ (top) -> $-CH_2OH$ (bottom), the path is counter-clockwise.\nStep 3: Identify the position of the lowest priority group ($-H$). It is on a horizontal bond. By Fischer rules, if group 4 is horizontal, the apparent configuration (S) is reversed. Thus, the configuration is (R).",
      "result": "The configuration is (R) because the apparent counter-clockwise direction is reversed since the lowest priority group (-H) is on a horizontal bond."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q34_fischer_rotation_90",
    "topic": "Fischer Projections",
    "difficulty_level": "Hard",
    "question_text": "What is the stereochemical relationship between a Fischer projection of a molecule and the structure obtained by rotating it 90 degrees in the plane of the page?",
    "question_smiles": "C[C@H](O)C(=O)O",
    "options": [
      {
        "option_id": "A",
        "text": "Enantiomers",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Diastereomers",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Identical compounds",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Constitutional isomers",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the stereochemical consequence of a 90-degree rotation of a Fischer projection.",
      "process": "Step 1: Understand that a 90-degree rotation in the plane of the page changes vertical groups (which project away) to horizontal groups (which project towards you), and vice versa.\nStep 2: This changes the spatial orientation of all substituents, effectively mirroring the chiral center and inverting its configuration.\nStep 3: Because the configuration is inverted and the molecule has a single chiral center, the resulting structure is the enantiomer.",
      "result": "A 90-degree rotation of a Fischer projection in the plane of the page inverts the configuration, producing the enantiomer."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q35_fischer_meso_identification",
    "topic": "Fischer Projections",
    "difficulty_level": "Medium",
    "question_text": "Which of the following Fischer projections represents an achiral (meso) diastereomer of 2,3-dibromobutane?",
    "question_smiles": "C[C@@H](Br)[C@@H](Br)C",
    "options": [
      {
        "option_id": "A",
        "text": "Top = -CH3, Bottom = -CH3; C2 has -H on left, -Br on right; C3 has -H on left, -Br on right.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Top = -CH3, Bottom = -CH3; C2 has -H on left, -Br on right; C3 has -Br on left, -H on right.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Top = -CH3, Bottom = -CH2CH3; C2 has -H on left, -Br on right; C3 has -H on left, -Br on right.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "None of the above are meso.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests how to recognize meso compounds in Fischer projections.",
      "process": "Step 1: For a Fischer projection to represent a meso compound, there must be a plane of symmetry that cuts the projection in half horizontally.\nStep 2: In Option A, the top and bottom groups are identical ($-CH_3$). C2 has H (left) and Br (right), and C3 has H (left) and Br (right). A horizontal line bisecting the C2-C3 bond reflects the top half onto the bottom half exactly. This is a meso compound.\nStep 3: Option B has H/Br on opposite sides, lacking a plane of symmetry (this is the chiral (2R,3R) or (2S,3S) isomer). Option C has different end groups ($-CH_3$ vs. $-CH_2CH_3$), so it cannot have a plane of symmetry.",
      "result": "The projection with identical substituents reflecting across a horizontal mirror plane represents the meso compound."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q36_specific_rotation_calc",
    "topic": "Optical Activity",
    "difficulty_level": "Medium",
    "question_text": "A solution of a pure chiral compound (concentration = 0.20 g/mL) placed in a 2.0 dm polarimeter tube exhibits an observed rotation of -6.0 degrees. Calculate the specific rotation $[\\alpha]_D$ of this compound.",
    "question_smiles": "CC(O)C",
    "options": [
      {
        "option_id": "A",
        "text": "-15 degrees",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "-6.0 degrees",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "-60 degrees",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "+15 degrees",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the calculation of specific rotation using the standard polarimetry equation.",
      "process": "Step 1: Write down the specific rotation formula: $[\\alpha] = \\alpha / (c \\cdot l)$, where $\\alpha$ is the observed rotation in degrees (-6.0), $c$ is the concentration in g/mL (0.20), and $l$ is the path length in decimeters (2.0).\nStep 2: Plug in the values: $[\\alpha] = -6.0 / (0.20 \\cdot 2.0) = -6.0 / 0.40$.\nStep 3: Solve the division: $-6.0 / 0.40 = -15$ degrees.",
      "result": "The specific rotation of the compound is -15 degrees."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q37_ee_enantiomeric_excess",
    "topic": "Optical Activity",
    "difficulty_level": "Easy",
    "question_text": "A sample of a chiral compound has an enantiomeric excess (ee) of 70% of the levorotatory (-) enantiomer. What is the actual percentage of the (+) and (-) enantiomers in the mixture?",
    "question_smiles": "CC(O)C",
    "options": [
      {
        "option_id": "A",
        "text": "85% (-) and 15% (+)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "70% (-) and 30% (+)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "90% (-) and 10% (+)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "75% (-) and 25% (+)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the calculation of individual enantiomer percentages from enantiomeric excess (ee).",
      "process": "Step 1: Enantiomeric excess (ee) is defined as the difference in percentages of the two enantiomers: $ee = \\% \\text{major} - \\% \\text{minor}$.\nStep 2: Let $x$ be the percentage of the (-) enantiomer and $y$ be the percentage of the (+) enantiomer. We have $x + y = 100\\%$ and $x - y = 70\\%$.\nStep 3: Add the two equations: $2x = 170\\% \\implies x = 85\\%$. Solve for $y$: $y = 15\\%$.",
      "result": "The mixture contains 85% of the (-) enantiomer and 15% of the (+) enantiomer."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q38_optical_purity_calc",
    "topic": "Optical Activity",
    "difficulty_level": "Medium",
    "question_text": "Pure (R)-2-bromobutane has a specific rotation of -23.1 degrees. A mixture of (R)- and (S)-2-bromobutane has a specific rotation of -11.55 degrees. What is the enantiomeric excess (ee) and composition of the mixture?",
    "question_smiles": "CC[C@H](Br)C",
    "options": [
      {
        "option_id": "A",
        "text": "50% ee of (R); composition is 75% (R) and 25% (S)",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "50% ee of (R); composition is 50% (R) and 50% (S)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "25% ee of (R); composition is 62.5% (R) and 37.5% (S)",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "75% ee of (R); composition is 87.5% (R) and 12.5% (S)",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the relationship between specific rotation, optical purity (ee), and molecular composition.",
      "process": "Step 1: Calculate the enantiomeric excess (optical purity): $ee = |\\text{observed rotation}| / |\\text{specific rotation of pure enantiomer}| = 11.55 / 23.1 = 0.50$ or $50\\%$.\nStep 2: Since the observed rotation is negative, the (R) enantiomer is in excess. So we have 50% ee of (R).\nStep 3: Calculate the composition. 50% of the mixture is pure (R), and the remaining 50% is a racemic mixture of (R) and (S) (which contains 25% R and 25% S). Thus, total (R) = 50% + 25% = 75%, and total (S) = 25%.",
      "result": "The mixture has a 50% ee of (R), corresponding to a composition of 75% (R) and 25% (S)."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q39_no_rs_polarimetry_correlation",
    "topic": "Optical Activity",
    "difficulty_level": "Easy",
    "question_text": "Which of the following statements is true regarding the relationship between the configuration (R/S) and the direction of optical rotation (+/-) of a molecule?",
    "question_smiles": "CC(O)C",
    "options": [
      {
        "option_id": "A",
        "text": "There is no direct correlation between R/S configuration and the direction of optical rotation.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "All (R)-enantiomers are dextrorotatory (+), and all (S)-enantiomers are levorotatory (-).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "An (R)-enantiomer can only be (-) if it contains a halogen atom.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The configuration must be (S) if the observed rotation is positive.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question clarifies the distinction between nomenclatural designation (R/S) and physical property (+/-).",
      "process": "Step 1: R/S configurations are determined by Cahn-Ingold-Prelog priority rules, which are based on atomic numbers and rules of nomenclature.\nStep 2: The direction of optical rotation (+/-) is an experimental physical property determined by how the molecule interacts with plane-polarized light in a polarimeter.\nStep 3: There is no mathematical or direct correlation between them. A molecule with (R) configuration can be either (+) or (-), depending on its structure, solvent, and temperature.",
      "result": "There is no direct correlation between the R/S configuration and the direction of optical rotation; they represent two different concepts."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q40_diastereomer_optical_rotation",
    "topic": "Optical Activity",
    "difficulty_level": "Medium",
    "question_text": "What is the relationship between the specific rotations of two diastereomers?",
    "question_smiles": "C[C@H](O)[C@@H](Cl)C",
    "options": [
      {
        "option_id": "A",
        "text": "They have different magnitudes and signs, with no simple relationship between them.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "They have equal magnitudes but opposite signs.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "They have the exact same magnitude and sign.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "One diastereomer is always optically active, while the other is always optically inactive.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests how diastereomeric relationships affect optical activity properties.",
      "process": "Step 1: Enantiomers must have equal and opposite optical rotations because they are mirror images.\nStep 2: Diastereomers are not mirror images. They have different physical properties including melting points, solubilities, and dipole moments.\nStep 3: Consequently, their interactions with plane-polarized light are completely different. Their specific rotations differ in both magnitude and direction, and there is no formula to predict one from the other.",
      "result": "Diastereomers have different specific rotations with no simple or predictable relationship between them."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q41_racemization_thermodynamics",
    "topic": "Racemic Mixtures & Resolution",
    "difficulty_level": "Medium",
    "question_text": "Thermodynamically, why is the spontaneous racemization of a pure enantiomer favored over time in solution?",
    "question_smiles": "CC(O)C",
    "options": [
      {
        "option_id": "A",
        "text": "It is driven by an increase in entropy (entropy of mixing, $\\Delta S > 0$).",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A racemic mixture has lower enthalpy than a pure enantiomer ($\\Delta H < 0$).",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The activation energy of racemization is always zero.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The racemic mixture forms stronger hydrogen bonds with the solvent.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the thermodynamic principles behind racemization.",
      "process": "Step 1: Racemization converts a pure enantiomer into a 50:50 mixture of enantiomers.\nStep 2: In terms of enthalpy ($\\Delta H$), enantiomers have identical bond energies and solvent interactions, so the enthalpy of mixing is close to zero ($\\Delta H \\approx 0$).\nStep 3: In terms of entropy ($\\Delta S$), mixing two different species (the two enantiomers) increases the disorder of the system, making $\\Delta S_\\text{mix} > 0$. Since $\\Delta G = \\Delta H - T\\Delta S$, a positive entropy change makes the free energy change negative ($\\Delta G < 0$), driving spontaneous racemization.",
      "result": "Spontaneous racemization is thermodynamically driven by the positive entropy of mixing."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q42_resolving_agent_mechanism",
    "topic": "Racemic Mixtures & Resolution",
    "difficulty_level": "Hard",
    "question_text": "How does a chiral resolving agent (such as (+)-tartaric acid) allow the separation of a racemic mixture of amines?",
    "question_smiles": "CC(N)c1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "It reacts with the enantiomeric amines to form a pair of diastereomeric salts that have different solubilities.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It selectively destroys the (-)-amine, leaving the (+)-amine untouched.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It acts as an achiral catalyst that speeds up the crystallization of one enantiomer.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It forms a covalent meso compound with both amines.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the chemical mechanism of resolving enantiomers via salt formation.",
      "process": "Step 1: Enantiomers cannot be separated by standard physical methods because they have identical physical properties.\nStep 2: Reacting a racemic mixture of amines, (±)-A, with a pure enantiomer of an acid, (+)-B, results in the formation of two salts: ((+)-A·(+)-B) and ((-)-A·(+)-B).\nStep 3: These two salts are diastereomers of each other (not mirror images). Because they are diastereomers, they have different solubilities, allowing them to be separated by selective recrystallization. The free amines are then recovered by adding a base.",
      "result": "Chiral resolving agents work by converting enantiomers into diastereomeric salts which possess different solubilities and can be separated by recrystallization."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q43_chiral_stationary_phase",
    "topic": "Racemic Mixtures & Resolution",
    "difficulty_level": "Hard",
    "question_text": "How does chiral HPLC (high-performance liquid chromatography) separate a racemic mixture of enantiomers without chemical modification?",
    "question_smiles": "CC(O)C",
    "options": [
      {
        "option_id": "A",
        "text": "The stationary phase is coated with a single pure enantiomer of a chiral selector, creating transient diastereomeric complexes with different binding affinities.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The mobile phase contains a chiral solvent that selectively dissolves one enantiomer.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The column packing contains a magnetic core that aligns one enantiomer.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The column physically separates enantiomers by their different molecular weights.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the physical principles of chromatographic resolution using a chiral stationary phase.",
      "process": "Step 1: In chiral HPLC, the column stationary phase is bonded to a single enantiomer of a chiral compound (the chiral selector).\nStep 2: When the racemic mixture passes through the column, each enantiomer interacts with the chiral selector. These interactions form transient, non-covalent diastereomeric complexes.\nStep 3: Because diastereomeric complexes have different stabilities and binding energies, one enantiomer binds more tightly and moves slower, while the other elutes faster, achieving separation.",
      "result": "Chiral HPLC separates enantiomers by utilizing a chiral stationary phase that forms diastereomeric complexes of differing stability with each enantiomer."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q44_kinetic_resolution_enzyme",
    "topic": "Racemic Mixtures & Resolution",
    "difficulty_level": "Hard",
    "question_text": "In a kinetic resolution of a racemic ester using a lipase enzyme, one enantiomer is hydrolyzed to an alcohol, while the other remains unreacted. What is the fundamental cause of this selectivity?",
    "question_smiles": "CC(OC(=O)C)C",
    "options": [
      {
        "option_id": "A",
        "text": "The transition states for the reaction of the two enantiomers with the chiral enzyme are diastereomeric and have different activation energies.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The enzyme is achiral and only reacts with the thermodynamic product.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "One enantiomer is a competitive inhibitor that permanently deactivates the enzyme.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The reaction is conducted under conditions where only one enantiomer is soluble in water.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the biochemical basis of kinetic resolution.",
      "process": "Step 1: Enzymes are chiral proteins that form chiral active sites.\nStep 2: When a racemic substrate binds to the active site, the transition states for the hydrolysis of the (R) and (S) enantiomers are diastereomeric.\nStep 3: Diastereomeric transition states have different free energies of activation ($\\Delta G^\\ddagger$). This causes one enantiomer to react much faster than the other, yielding selective hydrolysis.",
      "result": "Kinetic resolution relies on the difference in activation energy between the diastereomeric transition states formed when each enantiomer binds to the chiral enzyme."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q45_resolution_vs_separation",
    "topic": "Racemic Mixtures & Resolution",
    "difficulty_level": "Medium",
    "question_text": "Why is resolving enantiomers more difficult than separating diastereomers?",
    "question_smiles": "CC(O)C",
    "options": [
      {
        "option_id": "A",
        "text": "Enantiomers have identical physical properties in an achiral environment, whereas diastereomers have different physical properties.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Enantiomers are unstable and spontaneously explode when separated.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Diastereomers contain no carbon-carbon bonds, making them easier to break.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Enantiomers can only be separated by changing their elemental formula.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question compares the basic separation challenges of enantiomers vs. diastereomers.",
      "process": "Step 1: Diastereomers differ in their 3D shape and have different physical properties (boiling point, solubility, etc.). They can be separated by standard techniques like distillation.\nStep 2: Enantiomers are identical in all physical properties in an achiral environment. They have the same boiling point, melting point, density, and solubility in achiral solvents.\nStep 3: Consequently, separation of enantiomers (resolution) requires introducing a chiral environment (chiral auxiliary, chiral solvent, chiral column, or chiral resolving agent) to break the symmetry.",
      "result": "Enantiomers have identical physical properties in an achiral environment, making their resolution significantly more challenging than separating diastereomers."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q46_dimethylcyclohexane_1_2",
    "topic": "Stereocenters in Cycloalkanes",
    "difficulty_level": "Medium",
    "question_text": "Which of the following statements is correct regarding the isomerism of 1,2-dimethylcyclohexane?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The cis isomer is a meso compound, and the trans isomer is a pair of enantiomers.",
        "smiles": "C1CC[C@@H](C)[C@@H](C)C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The cis isomer is chiral, and the trans isomer is a meso compound.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both the cis and trans isomers are meso compounds.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both the cis and trans isomers are chiral and can be resolved.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests stereochemical relationships in 1,2-disubstituted cycloalkanes.",
      "process": "Step 1: Identify the stereocenters in 1,2-dimethylcyclohexane. They are C1 and C2.\nStep 2: Analyze cis-1,2-dimethylcyclohexane. Although the chair conformations are chiral, they interconvert rapidly by ring flipping. The time-averaged structure (or planar representation) has a plane of symmetry, making it an achiral meso compound.\nStep 3: Analyze trans-1,2-dimethylcyclohexane. It has no plane of symmetry or center of inversion. It exists as a pair of non-superimposable, stable enantiomers: (1R,2R) and (1S,2S).",
      "result": "For 1,2-dimethylcyclohexane, the cis isomer is a meso compound and the trans isomer exists as a pair of resolvable enantiomers."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q47_conformational_enantiomers",
    "topic": "Stereocenters in Cycloalkanes",
    "difficulty_level": "Hard",
    "question_text": "At -100 degrees Celsius, ring flipping in cis-1,2-dimethylcyclohexane is frozen. What would be observed under these conditions?",
    "question_smiles": "C1CC[C@@H](C)[C@@H](C)C1",
    "options": [
      {
        "option_id": "A",
        "text": "The mixture can be resolved into two stable, chiral enantiomers.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The compound remains an achiral, homogeneous meso compound.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The molecule decomposes into 1,2-dimethylcyclohexene.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The conformation changes to a planar structure to maintain symmetry.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests how temperature-dependent conformational mobility affects chirality and resolution.",
      "process": "Step 1: At room temperature, the two chair conformations of cis-1,2-dimethylcyclohexane interconvert rapidly. These conformations are enantiomers of each other.\nStep 2: At very low temperatures (like -100 °C), the thermal energy is insufficient to overcome the barrier for the chair flip, freezing the conformations.\nStep 3: This stops the interconversion, locking the molecules into their individual chiral chair forms. Under these conditions, the two enantiomers can theoretically be resolved and would rotate plane-polarized light.",
      "result": "Freezing the ring flip of cis-1,2-dimethylcyclohexane at low temperatures allows the isolation of the two stable, chiral chair conformers as enantiomers."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q48_dimethylcyclohexane_1_3",
    "topic": "Stereocenters in Cycloalkanes",
    "difficulty_level": "Medium",
    "question_text": "Which of the following statements is correct regarding the stereoisomers of 1,3-dimethylcyclohexane?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The cis isomer is a meso compound, and the trans isomer is a pair of enantiomers.",
        "smiles": "C1CC[C@@H](C)C[C@@H](C)1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The trans isomer is a meso compound, and the cis isomer is a pair of enantiomers.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both cis and trans isomers are chiral and can be resolved.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Both cis and trans isomers are achiral.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests stereochemical relationships in 1,3-disubstituted cycloalkanes.",
      "process": "Step 1: Identify the stereocenters in 1,3-dimethylcyclohexane. They are C1 and C3.\nStep 2: Analyze cis-1,3-dimethylcyclohexane. In the diequatorial conformation, a plane of symmetry passes directly through C2 and C5. Thus, the cis isomer has a plane of symmetry and is a meso compound.\nStep 3: Analyze trans-1,3-dimethylcyclohexane. The two methyl groups must be cis-trans relative to one another (one axial, one equatorial). This conformation lacks a plane of symmetry. It exists as a pair of enantiomers: (1R,3R) and (1S,3S).",
      "result": "For 1,3-dimethylcyclohexane, the cis isomer is meso because it has a plane of symmetry, and the trans isomer is chiral."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q49_dimethylcyclohexane_1_4",
    "topic": "Stereocenters in Cycloalkanes",
    "difficulty_level": "Hard",
    "question_text": "Why are both the cis and trans isomers of 1,4-dimethylcyclohexane achiral (optically inactive)?",
    "question_smiles": "CC1CCC(C)CC1",
    "options": [
      {
        "option_id": "A",
        "text": "The molecules possess planes of symmetry, and C1 and C4 are not asymmetric stereocenters.",
        "smiles": "CC1CCC(C)CC1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "They undergo rapid racemization via carbon-carbon bond cleavage.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "They exist as a pair of diastereomers that cancel each other's rotation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The methyl groups are placed 180 degrees apart, which destroys all carbons.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the criteria for asymmetric carbons and overall molecular chirality in 1,4-disubstituted cyclohexanes.",
      "process": "Step 1: Examine C1 and C4 of 1,4-dimethylcyclohexane. For a carbon to be an asymmetric stereocenter, it must be bonded to four different groups.\nStep 2: C1 is bonded to: 1) $-CH_3$, 2) $-H$, 3) the C2-C3 path around the ring, and 4) the C6-C5 path around the ring. Since the path from C1 to C4 is identical in both directions (C1-C2-C3-C4 vs C1-C6-C5-C4), paths 3 and 4 are identical.\nStep 3: Consequently, C1 and C4 are not stereocenters. Both the cis and trans isomers have planes of symmetry passing through C1 and C4 and contain no stereocenters, making them achiral.",
      "result": "Both cis and trans isomers of 1,4-dimethylcyclohexane are achiral because they possess planes of symmetry and lack asymmetric carbons."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q50_cyclopropane_isomers",
    "topic": "Stereocenters in Cycloalkanes",
    "difficulty_level": "Hard",
    "question_text": "How many stereoisomers exist for 1-bromo-2-chlorocyclopropane?",
    "question_smiles": "C1[C@@H](Br)[C@H](Cl)1",
    "options": [
      {
        "option_id": "A",
        "text": "4",
        "smiles": "C1[C@@H](Br)[C@H](Cl)1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "8",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "This question tests the number of stereoisomers for an unsymmetrically disubstituted cyclic system.",
      "process": "Step 1: Identify the stereocenters. The stereocenters are C1 (bonded to Br, H, and ring paths) and C2 (bonded to Cl, H, and ring paths).\nStep 2: Evaluate the symmetry of the molecule. Because the two substituents are different (Br and Cl), the molecule is unsymmetrical. There is no plane of symmetry in any isomer (neither cis nor trans).\nStep 3: Apply the $2^n$ rule where $n = 2$: $2^2 = 4$ stereoisomers. This corresponds to a pair of cis enantiomers: ((1R,2S) and (1S,2R)) and a pair of trans enantiomers: ((1R,2R) and (1S,2S)).",
      "result": "There are 4 stereoisomers of 1-bromo-2-chlorocyclopropane since there are two stereocenters and no internal symmetry is possible."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q_dynamic_rs_assign",
    "topic": "Stereochemistry: R/S Configurations",
    "difficulty_level": "Hard",
    "question_text": "Identify the stereocenter configurations for the following chiral molecules.",
    "interaction_type": "matching-grid",
    "grid_columns": 2,
    "match_items": [
      {
        "smiles": "C[C@@H](O)C(=O)O",
        "correctAnswer": "S-Lactic Acid"
      },
      {
        "smiles": "C[C@H](O)C(=O)O",
        "correctAnswer": "R-Lactic Acid"
      },
      {
        "smiles": "N[C@@H](C)C(=O)O",
        "correctAnswer": "S-Alanine"
      },
      {
        "smiles": "N[C@H](C)C(=O)O",
        "correctAnswer": "R-Alanine"
      }
    ],
    "match_options": [
      "S-Lactic Acid",
      "R-Lactic Acid",
      "S-Alanine",
      "R-Alanine",
      "Meso-Tartaric Acid"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect R/S assignments",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Assigning Cahn-Ingold-Prelog priorities to configure stereocenters.",
      "process": "For lactic acid, -OH is 1, -COOH is 2, -CH3 is 3, -H is 4. If the lowest priority group H is on a wedge, reverse configuration. This correctly yields S for C@@H and R for C@H.",
      "result": "Stereocenter configurations assigned."
    },
    "key_status": "unverified",
    "feedback_status": "unreviewed",
    "provenance": "original"
  }
];
