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
        "smiles": "",
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
      "context": "The upper bound on stereoisomers is 2 raised to the number of stereocentres, because each centre independently takes one of two configurations. The whole job is counting the stereocentres honestly before raising two to that power.",
      "approach": "Step 1: Write the skeleton. 2,3,4-Trichlorohexane is CH3-CHCl-CHCl-CHCl-CH2CH3.\nStep 2: Test each substituted carbon for four different groups. C2 carries methyl, chlorine, hydrogen and the rest of the chain - four different, so it counts. C3 carries chlorine, hydrogen, a CHCl-CH3 arm on one side and a CHCl-CH2CH3 arm on the other; those two arms differ, so it counts. C4 carries chlorine, hydrogen, an ethyl and the CHCl-CHCl-CH3 arm - four different again.\nStep 3: Three stereocentres, so 2^3 = 8. Check that nothing collapses the count: the chain ends in a methyl on one side and an ethyl on the other, so no internal mirror plane can exist and no meso form removes any of the eight.",
      "note": "The word maximum is doing real work in the question. The 2^n figure is an upper bound that a symmetric skeleton pulls below - 2,3,4-trichloropentane, with a methyl at both ends, has only four stereoisomers instead of eight, because two of the labels name the same meso substance and C3 turns into a pseudoasymmetric centre. Check the ends of the chain before you trust the power of two.",
      "options": {
        "A": "Correct. C2, C3 and C4 are each stereocentres and the chain is unsymmetrical, so all 2^3 = 8 configurational combinations name distinct compounds.",
        "B": "Six would follow from three stereocentres if two of the eight combinations collapsed into meso forms, which happens only when the skeleton is symmetric. This chain has a methyl on one end and an ethyl on the other.",
        "C": "Four is 2^2 and would be right if only C2 and C4 counted. C3 is a genuine stereocentre because the arm reaching toward the methyl end differs from the arm reaching toward the ethyl end.",
        "D": "Sixteen is 2^4 and counts one stereocentre too many. C5 is a CH2 carrying two hydrogens, which can never be a stereocentre."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-carbon zig-zag chain carrying a chlorine on each of three consecutive interior carbons; every bond is drawn plain, with no wedges or dashes anywhere."
  },
  {
    "question_id": "ch05_q12_diastereomer_definition",
    "topic": "Diastereomers",
    "difficulty_level": "Medium",
    "question_text": "Which of the following pairs of compounds are diastereomers?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "(E)-2-Butene and (Z)-2-butene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(R)-2-Butanol and (S)-2-butanol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Butene and 2-butene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Butane and cyclobutane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Sorting a pair of compounds runs down a short decision tree. Same molecular formula? If not, they are not isomers at all. Same connectivity? If not, constitutional isomers. Same connectivity but different arrangement in space? Stereoisomers - and then mirror images are enantiomers while everything else is a diastereomer.",
      "approach": "Step 1: Check the formulas. Butane is C4H10 and cyclobutane is C4H8, so that pair falls out of the tree immediately - different formulas means not isomers.\nStep 2: Check the connectivity. 1-Butene and 2-butene share C4H8 but put the double bond between different carbons, so they are constitutional isomers rather than stereoisomers.\nStep 3: Among the two stereoisomeric pairs, ask whether they are mirror images. (R)- and (S)-2-butanol are reflections of one another, so they are enantiomers. (E)- and (Z)-2-butene have the same connectivity and differ only in the arrangement about the double bond, and no reflection converts one into the other - they are diastereomers.",
      "note": "Diastereomers do not require a tetrahedral stereocentre, which is the part most easily missed. (E)- and (Z)-2-butene contain no stereocentre at all, and cis- and trans-1,4-dimethylcyclohexane contain none either, yet both pairs are diastereomeric. Diastereomer is defined by exclusion - stereoisomers that are not mirror images - so anything that fixes a spatial arrangement without a mirror relationship qualifies.",
      "options": {
        "A": "Correct. The two differ only in the arrangement of groups about a fixed double bond, and neither is the mirror image of the other, which is exactly what a diastereomeric pair is.",
        "B": "These are enantiomers - non-superimposable mirror images. Every stereocentre is inverted between them, which places them in the other branch of the stereoisomer tree.",
        "C": "These are constitutional isomers. Both are C4H8, but the double bond joins a different pair of carbons, so the connectivity itself differs rather than the arrangement in space.",
        "D": "These are not isomers at all. Butane is C4H10 and cyclobutane is C4H8, and isomerism of any kind requires the same molecular formula."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
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
      "context": "Tartaric acid has two stereocentres carrying identical substituent sets, so it has three stereoisomers rather than four: an enantiomeric pair, (2R,3R) and (2S,3S), plus the meso form. Any pairing across that divide is diastereomeric.",
      "approach": "Step 1: List the three substances. (2R,3R) and (2S,3S) are mirror images of one another; (2R,3S), which is the same substance as (2S,3R), is the meso form.\nStep 2: Take each offered pair and ask whether one is the reflection of the other. (2R,3R) against (2S,3S) inverts both centres, so that pair is enantiomeric. So is (2S,3S) against its own mirror image, which is just the same statement worded differently.\nStep 3: (2R,3R) against the meso form inverts C3 but leaves C2 as R. Some centres match and others do not, so these are stereoisomers that are not mirror images - diastereomers.",
      "note": "The distinction shows up directly in the bottle. Meso-tartaric acid melts near 140 C and the (2R,3R) form near 170 C, and the two differ in water solubility as well - exactly what being diastereomers means physically. The (2R,3R) and (2S,3S) forms share every one of those numbers and part only in the sign of their rotation.",
      "options": {
        "A": "Correct. These two share the C2 descriptor and differ at C3, so they are stereoisomers that are not mirror images - the definition of a diastereomeric pair.",
        "B": "Inverting both stereocentres makes this an enantiomeric pair, not a diastereomeric one. The two rotate light equally and oppositely and match in every other physical property.",
        "C": "The mirror image of the (2S,3S) form is the (2R,3R) form, so this option describes the same enantiomeric pair as the previous one under different wording.",
        "D": "Only one of the three offered pairs is diastereomeric; the other two are the same enantiomeric pair stated twice, so a blanket choice cannot be right."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a carboxylic acid group at each end and a hydroxyl on each of the two interior carbons; every bond is drawn plain, so no configuration is shown."
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
      "context": "Separation by any ordinary physical method depends on the two substances differing in some bulk property. Diastereomers are genuinely different shapes, so they do; enantiomers are reflections, so in an achiral setting every bulk property they have is identical.",
      "approach": "Step 1: Compare the shapes. Diastereomers differ at some stereocentres and not others, so the distances between substituents, the dipole moment and the packing in a crystal all come out different.\nStep 2: Follow that into the laboratory. Different packing means different melting point and different solubility, which is what recrystallisation exploits; different shape and polarity mean different adsorption on silica, which is what chromatography exploits.\nStep 3: Run the same argument on enantiomers and it collapses. A reflection changes no distance and no energy in an achiral environment, so the two have identical melting points, identical solubilities and identical Rf values - there is nothing for the technique to grip.",
      "note": "Different is not the same as conveniently different. Two diastereomers that differ at a stereocentre buried in the middle of a long chain can have almost identical Rf values and take many column volumes to part, while two that differ next to a polar group separate on the first plate. The principle guarantees a difference exists; it promises nothing about its size.",
      "options": {
        "A": "Correct. Diastereomers are physically different shapes, so melting point, solubility and adsorption on silica all differ, and any of those differences can drive a separation.",
        "B": "Diastereomers are stereoisomers, so their connectivity is identical by definition. If the connectivity differed they would be constitutional isomers instead.",
        "C": "Neither half of this is required. Both members of a diastereomeric pair are often chiral, as with (2R,3R)- and (2R,3S)-tartaric acid, and chirality is not what makes the separation work.",
        "D": "Diastereomers usually do have stereocentres - and even when they have none, as with cis and trans alkenes, they are still separable because their shapes differ."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain in which one interior carbon carries a fluorine on a hashed bond going away from the viewer, and the carbon beside it carries a hydroxyl on a bold wedge coming toward the viewer."
  },
  {
    "question_id": "ch05_q15_epimer_definition",
    "topic": "Diastereomers",
    "difficulty_level": "Medium",
    "question_text": "Two aldohexoses have the same configuration at C3, C4 and C5 but opposite configurations at C2. Which statement about this pair is correct?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "They are diastereomers, and an ordinary achiral method such as recrystallization or silica chromatography can separate them.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "They are enantiomers, so their specific rotations are equal in magnitude and opposite in sign.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "They are the same compound, since the chain could simply have been numbered from the other end.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "They are constitutional isomers, because their hydroxyl groups occupy different positions along the chain.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Inverting one stereocentre out of several is the commonest way a pair of stereoisomers ends up neither identical nor mirror images. Everything that follows - separability, distinct melting points, distinct rotations with no relationship between them - comes straight from that classification.",
      "approach": "Step 1: Count what changed. Three stereocentres are untouched and one is inverted, so a reflection is out of the question: reflecting acts on every centre at once.\nStep 2: Confirm they are still isomers of the same constitution. Both are aldohexoses with hydroxyls on the same carbons; only the spatial arrangement at C2 differs, so they are stereoisomers rather than constitutional isomers.\nStep 3: Stereoisomers that are not mirror images are diastereomers, and diastereomers are physically different substances. Their crystal packing and their adsorption behaviour differ, so recrystallisation or a silica column will part them.",
      "note": "Carbohydrate chemistry gives this relationship its own name - two sugars differing at exactly one stereocentre are epimers, and D-glucose and D-mannose are C2 epimers of each other. The term is a convenience of nomenclature and not a new category: every epimeric pair is simply a diastereomeric pair, and McMurry introduces the word when the sugars arrive rather than here.",
      "options": {
        "A": "Correct. One centre inverted out of four makes them diastereomers, and diastereomers differ in melting point, solubility and adsorption, so achiral methods separate them.",
        "B": "Enantiomers require every stereocentre to be inverted. Three of the four are unchanged here, so no mirror operation relates these two and their rotations bear no fixed relationship.",
        "C": "Renumbering cannot help. An aldohexose has an aldehyde at one end and a CH2OH at the other, so the chain has a defined direction and C2 is unambiguous.",
        "D": "The hydroxyls sit on the same carbons in both compounds. What differs is which side of each carbon they occupy in space, which is a stereochemical difference, not a constitutional one."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
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
        "smiles": "O=C(O)[C@H](O)[C@H](O)C(=O)O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2R,3R)-Tartaric acid",
        "smiles": "O=C(O)[C@H](O)[C@@H](O)C(=O)O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2S,3S)-Tartaric acid",
        "smiles": "O=C(O)[C@@H](O)[C@H](O)C(=O)O",
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
      "context": "Tartaric acid is the standard meso example because its two stereocentres carry matching substituent sets - each bears a hydroxyl, a hydrogen, a carboxyl and the other CH(OH)COOH half - which is the structural precondition for an internal mirror plane.",
      "approach": "Step 1: Check the precondition. The molecule divides into two identical halves at the C2-C3 bond, so a mirror plane through that bond is at least geometrically conceivable.\nStep 2: Give the two centres opposite descriptors. In (2R,3S) the plane between C2 and C3 reflects the R half onto the S half, and the molecule maps onto its own mirror image.\nStep 3: Give them matching descriptors and the plane fails. (2R,3R) reflects into (2S,3S) and not into itself, so those two are a chiral pair and neither is meso.",
      "note": "Optically inactive and achiral are not the same claim, and tartaric acid demonstrates both. A fifty-fifty mixture of the (2R,3R) and (2S,3S) acids reads zero on a polarimeter, but every molecule in that flask is chiral and the rotations merely cancel. The meso acid also reads zero, but there the individual molecule is achiral - a pure substance that cannot rotate light at all.",
      "options": {
        "A": "Correct. Opposite descriptors at two stereocentres carrying identical substituent sets put an internal mirror plane through the C2-C3 bond, so this isomer is achiral.",
        "B": "(2R,3R)-Tartaric acid is chiral; its mirror image is the (2S,3S) acid, a different substance, and a pure sample of it rotates plane-polarised light.",
        "C": "(2S,3S)-Tartaric acid is the enantiomer of the (2R,3R) acid. Matching descriptors at both centres leave no plane that can reflect one half onto the other.",
        "D": "Tartaric acid is the textbook meso compound. Its two halves are constitutionally identical, which is exactly the symmetry a meso form needs."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
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
        "smiles": "C[C@@H](Cl)[C@@H](Cl)C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(2R,3R)-2,3-dichlorobutane",
        "smiles": "C[C@@H](Cl)[C@H](Cl)C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2R,3S)-2,3-dichloropentane",
        "smiles": "CC[C@H](Cl)[C@H](Cl)C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(2S,3S)-2,3-dichlorobutane",
        "smiles": "C[C@H](Cl)[C@@H](Cl)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two conditions have to hold together for a meso compound, and the distractors here are built to fail one each. The skeleton must be symmetric about the point where the mirror plane would sit, and the stereocentres it relates must carry opposite descriptors.",
      "approach": "Step 1: Test the skeleton first. In 2,3-dichlorobutane the C2-C3 bond has a CH3 and a Cl on each side, so the two halves are identical and a bisecting mirror plane is possible. In 2,3-dichloropentane one half ends in a methyl and the other in an ethyl, so no plane can relate them however the descriptors fall.\nStep 2: Test the descriptors on the symmetric skeleton. (2R,3S) gives opposite configurations and the plane reflects one half onto the other.\nStep 3: (2R,3R) and (2S,3S) give matching configurations on that same symmetric skeleton; those two are mirror images of each other rather than of themselves, so both are chiral.",
      "note": "The mirror plane is a property of a conformation, not of the drawing you happen to reach for. In fully eclipsed 2,3-dichlorobutane the plane is obvious; rotate about C2-C3 into the anti conformer and the plane is gone, replaced by a centre of inversion. Either element is enough - what matters is that some accessible conformation possesses one.",
      "options": {
        "A": "Correct. The skeleton is symmetric about the C2-C3 bond and the two stereocentres carry opposite descriptors, so an internal mirror relates the halves.",
        "B": "The skeleton is symmetric but both centres are R, so reflection gives the (2S,3S) compound rather than the original. This is one member of a chiral pair.",
        "C": "Opposite descriptors are not enough on their own. A methyl on one side of the C2-C3 bond and an ethyl on the other leave the halves different, so no mirror plane can pass between them.",
        "D": "The (2S,3S) compound is the enantiomer of the (2R,3R) compound. Matching descriptors on a symmetric skeleton always give a chiral pair, never a meso form."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
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
        "smiles": "",
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
      "context": "The stereocentres of a meso compound need not be adjacent. What is required is that a mirror plane can be drawn through the molecule with matching halves on either side, and in 2,4-pentanediol that plane runs through C3 rather than between two bonded stereocentres.",
      "approach": "Step 1: Identify the stereocentres. C2 and C4 each carry a methyl, a hydroxyl, a hydrogen and the CH2-CH(OH)-CH3 remainder, so both count. C3 carries two hydrogens and cannot be one.\nStep 2: Site the mirror plane. It passes through C3, perpendicular to the chain, with a CH(OH)CH3 arm on each side - the two halves are identical, so the precondition is met.\nStep 3: Assign. (2R,4S) puts opposite descriptors on the two arms, the plane reflects one onto the other, and the molecule is meso. (2R,4R) puts matching descriptors on them, no plane works, and that isomer is chiral - its mirror image is the (2S,4S) compound.",
      "note": "That C3 carries two hydrogens is exactly why it stays an ordinary carbon here. Replace one of them with a hydroxyl, as in 2,3,4-pentanetriol, and C3 becomes a pseudoasymmetric centre - a carbon whose two flanking arms are identical in constitution but opposite in configuration, needing the lower-case descriptors r and s. The intuition that a CH2 between two stereocentres is always inert stops holding the moment it stops being a CH2.",
      "options": {
        "A": "Correct. Opposite descriptors at C2 and C4 allow the mirror plane through C3, while matching descriptors do not, leaving the (2R,4R) isomer chiral.",
        "B": "The (2R,4R) isomer cannot be meso. Its reflection is the (2S,4S) compound, a different substance, so no internal mirror relates it to itself.",
        "C": "This reverses the two assignments. Opposite descriptors on identical arms are what a mirror plane needs; matching descriptors are what defeats it.",
        "D": "C3 being a methylene is what makes the meso form possible rather than what prevents it - the mirror plane passes straight through that carbon and its two identical hydrogens."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-carbon chain with a hydroxyl group on the second carbon and another on the fourth, the middle carbon carrying only hydrogens; every bond is drawn plain, so no configuration is shown."
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
      "context": "Achirality is not tied to a mirror plane specifically. A molecule is achiral when it possesses any improper symmetry element, and the anti conformer of meso-2,3-dichlorobutane makes the point by having no mirror plane at all.",
      "approach": "Step 1: Build the anti conformer. Sight along C2-C3 and place the two chlorines at 180 degrees to each other; the two methyls then also end up anti, and each stereocentre still carries its hydrogen.\nStep 2: Look for a mirror plane. There is none - the eclipsed conformation has one, but rotating into anti destroys it.\nStep 3: Test the midpoint of the C2-C3 bond as an inversion centre. Push each atom through that point and out the far side: the chlorine on C2 lands on the chlorine of C3, the methyl on the methyl, the hydrogen on the hydrogen. The molecule maps onto itself, so a centre of inversion is present and the conformation is achiral.",
      "note": "The general criterion is an improper axis S(n), and the familiar elements are special cases of it: a mirror plane is S(1) and a centre of inversion is S(2). A proper rotation axis is never enough on its own - the anti conformer of the chiral (2R,3R) isomer has a clean two-fold axis and is chiral all the same, which is why option C is a trap rather than a near miss.",
      "options": {
        "A": "Correct. Inversion through the midpoint of the C2-C3 bond carries each substituent onto its counterpart on the other stereocentre, so the anti conformer maps onto itself.",
        "B": "A mirror plane does relate the two halves in the eclipsed conformation, but rotating about C2-C3 into the anti arrangement destroys it. The question asks about that specific conformation.",
        "C": "A two-fold rotation axis is a proper element and never demonstrates achirality on its own - the chiral (2R,3R) isomer has one in its own anti conformer.",
        "D": "Time-averaging is the argument used for cis-1,2-dimethylcyclohexane, whose individual conformers really are chiral. Here the single anti conformer is achiral on its own, with no averaging needed."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
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
        "smiles": "",
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
      "context": "A sample rotates light only if it holds an excess of one handedness. cis-1,2-Dimethylcyclohexane holds none, because the ring flip generates its own mirror image faster than any measurement can catch either form alone.",
      "approach": "Step 1: Confirm the stereocentres are real. C1 and C2 each carry a methyl, a hydrogen and two different arcs of the ring, so both are stereocentres and the compound is not achiral by absence.\nStep 2: Draw both chairs. The cis relationship puts one methyl axial and the other equatorial, and flipping the ring exchanges those roles. The two conformers are non-superimposable mirror images of each other.\nStep 3: Count the population. Because the two are enantiomeric, they are exactly equal in energy and therefore exactly equal in abundance. Whatever rotation one contributes, the other cancels, and the polarimeter reads zero.",
      "note": "The trans isomer is the control experiment. Its ring flip converts a diequatorial chair into a diaxial one - a different conformer of the same enantiomer, not the mirror image - so trans-1,2-dimethylcyclohexane stays chiral, is resolvable, and rotates light. Same ring, same substituents, opposite verdict, decided entirely by what the flip produces.",
      "options": {
        "A": "Correct. The two chair conformers are enantiomers of equal energy, so they are present in exactly equal amounts and their rotations cancel completely.",
        "B": "Both chairs have identical connectivity - the same carbons bear the same methyls - so they are conformers of one compound, not constitutional isomers.",
        "C": "C1 and C2 are genuine stereocentres, each carrying four different groups. The compound is optically inactive despite having them, which is what makes it meso.",
        "D": "The cis arrangement makes a diequatorial chair geometrically impossible; one methyl must be axial. And equatorial placement has no bearing on optical activity in any case."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A hexagon representing the cyclohexane ring, with a methyl group on each of two neighbouring ring carbons; both are drawn on bold wedges, so both sit on the face of the ring nearer the viewer."
  },
  {
    "question_id": "ch05_q21_rs_simple_butanol",
    "topic": "R/S Assignment",
    "difficulty_level": "Easy",
    "question_text": "Assign the configuration at the stereocentre of the alcohol shown, and give its full IUPAC name.",
    "question_smiles": "CC[C@@H](O)C",
    "options": [
      {
        "option_id": "A",
        "text": "(S)-Butan-2-ol",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(R)-Butan-2-ol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(S)-Butan-3-ol",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(R)-Butan-3-ol",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A Cahn-Ingold-Prelog assignment is four moves in a fixed order: rank the four groups, find where the lowest-ranked one is pointing, trace the circle from priority one to three, and correct that reading if the lowest priority is facing you rather than away.",
      "approach": "Step 1: Rank at the carbon bearing the hydroxyl. Oxygen outranks every carbon, so the hydroxyl is first. Between the ethyl and the methyl, compare their first carbons: the ethyl's carries (C,H,H) and the methyl's carries (H,H,H), so ethyl beats methyl. Hydrogen is last. The order is OH > CH2CH3 > CH3 > H.\nStep 2: Locate the hydrogen. The hydroxyl is drawn on a hashed bond, and the two carbon chains lie in the plane of the page, which leaves the hydrogen pointing out of the page toward you.\nStep 3: Trace and correct. Reading OH at the upper left, then the ethyl to the right, then the methyl below runs clockwise on the page. Because the hydrogen is toward you rather than away, that reading is inverted: the centre is (S). Numbering the four-carbon chain from the nearer end puts the hydroxyl at C2, so the compound is (S)-butan-2-ol.",
      "note": "Forgetting the final correction is the single commonest error in this whole chapter, and it produces exactly the wrong answer rather than a confused one. Write down where the lowest priority points before you trace the circle, not after - deciding afterwards is how a student talks themselves into whichever descriptor they were already expecting. The correction rule also needs the lowest priority to be pointing squarely toward you or away; a group drawn in the plane of the page is a different case entirely.",
      "options": {
        "A": "Correct. The priorities run OH > ethyl > methyl > H, the circle reads clockwise on the page with the hydrogen facing the viewer, and inverting that gives (S) at C2.",
        "B": "This is the reading taken straight off the page without correcting for the hydrogen pointing toward the viewer - the commonest single error in CIP assignment.",
        "C": "The right molecule under the wrong name. Numbering from the far end of the chain puts the hydroxyl at C3, but the rules require the lower locant, and 2 beats 3.",
        "D": "Both errors at once: the numbering runs from the wrong end and the reading was not corrected for the hydrogen facing the viewer."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain drawn as a zig-zag, with a hydroxyl group on the second carbon on a hashed bond receding from the viewer, a methyl below that carbon, and the remaining two carbons running off to the right."
  },
  {
    "question_id": "ch05_q22_rs_isotope_deuterium",
    "topic": "R/S Assignment",
    "difficulty_level": "Medium",
    "question_text": "1-Deuterioethanol, CH3-CHD-OH, is chiral at C1. Under the Cahn-Ingold-Prelog rules, what is the priority order of the four groups at that carbon, from highest to lowest?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "-OH > -CH3 > -D > -H",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "-OH > -D > -CH3 > -H",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "-OH > -CH3 > -H > -D",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "-D > -OH > -CH3 > -H",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Isotopes are what make this carbon a stereocentre at all - swap the deuterium back for an ordinary hydrogen and the molecule is plain ethanol, with two identical hydrogens and no handedness. Ranking them correctly means knowing exactly where mass number enters the CIP rules.",
      "approach": "Step 1: Compare the atoms bonded directly to C1 by atomic number, which is always the first criterion. Oxygen is 8 and carbon is 6, so the hydroxyl leads and the methyl follows.\nStep 2: Turn to the deuterium and the hydrogen. Both are atomic number 1, so this criterion cannot separate them and the comparison passes to the next rule down.\nStep 3: Mass number breaks the tie, and the heavier isotope wins: deuterium at mass 2 outranks protium at mass 1. Assembling everything gives OH > CH3 > D > H. Note where the deuterium landed - below carbon, because mass number is consulted only after atomic number has already failed.",
      "note": "The tie-breakers form a strict ladder: atomic number first, then mass number for atoms of the same element, and finally - only for a pseudoasymmetric centre flanked by two arms identical except in configuration - the R/S descriptors themselves. Nothing lower on the ladder is ever allowed to overturn something higher. This same deuterium trick is how prochirality is demonstrated in the laboratory: label one of a CH2 group's two hydrogens and the enzyme's ability to tell them apart becomes visible.",
      "options": {
        "A": "Correct. Atomic number settles oxygen above carbon, and mass number then breaks the deuterium-hydrogen tie in favour of the heavier isotope.",
        "B": "This promotes deuterium above the methyl carbon. Mass number is only a tie-breaker between atoms of the same element; it never competes with a difference in atomic number, and carbon at 6 outranks any hydrogen isotope at 1.",
        "C": "The right instinct that the two isotopes must be ranked, applied in the wrong direction. The heavier isotope takes the higher priority, so deuterium sits above protium.",
        "D": "Putting deuterium at the very top inverts the ladder completely. Atomic number is consulted first and oxygen wins it outright; mass number never gets a hearing against a different element."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q23_rs_vinyl_vs_isopropyl",
    "topic": "R/S Assignment",
    "difficulty_level": "Hard",
    "question_text": "Under Cahn-Ingold-Prelog rules, what is the correct priority order (highest to lowest) for the following groups?\n-C≡CH, -CH=CH2, -CH(CH3)2, -CH2CH2CH3",
    "question_smiles": "",
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
      "context": "Every one of these four groups begins with a carbon, so the first atom decides nothing. Multiple bonds are handled by duplication - a doubly bonded partner is counted twice and a triply bonded partner three times - which turns the comparison of unsaturated groups into an ordinary set comparison.",
      "approach": "Step 1: Write the substituent set on each group's first carbon. The ethynyl carbon is bonded to the real second carbon plus two duplicates of it, giving (C,C,C). The vinyl carbon has a real neighbour, one duplicate and a hydrogen, giving (C,C,H). The isopropyl carbon has two real methyls and a hydrogen, also (C,C,H). The propyl carbon has one carbon and two hydrogens, (C,H,H).\nStep 2: Place what is already separated. (C,C,C) beats everything, so ethynyl leads; (C,H,H) trails everything, so propyl is last.\nStep 3: Break the tie between vinyl and isopropyl one sphere further out. Vinyl's highest-ranked branch is its real terminal carbon, which carries a duplicate carbon and two hydrogens - (C,H,H). Isopropyl's highest-ranked branch is a methyl, carrying (H,H,H). Carbon beats hydrogen at the first point of difference, so vinyl outranks isopropyl.",
      "note": "Duplicate atoms are phantoms: they have the right atomic number but no substituents of their own, so they carry a branch through one round of comparison and then lose the next. That is why an unsaturated group can win a tie at the first sphere and lose one at the second. Vinyl beating isopropyl is the case worth committing to memory, because the intuition that the bulkier, more branched group ranks higher points the wrong way here.",
      "options": {
        "A": "Correct. Ethynyl's (C,C,C) leads, propyl's (C,H,H) trails, and the (C,C,H) tie between vinyl and isopropyl breaks in vinyl's favour one sphere out.",
        "B": "This puts isopropyl above vinyl, which is the intuitive answer from counting real carbons rather than duplicated ones. Exploring outward, vinyl's terminal carbon carries (C,H,H) against isopropyl's methyl at (H,H,H).",
        "C": "Ethynyl cannot be second. Its triple bond duplicates the partner carbon twice, giving (C,C,C) at the first sphere, which no (C,C,H) group can match.",
        "D": "Isopropyl has (C,C,H) at its first carbon and so cannot outrank ethynyl's (C,C,C). Branching adds real neighbours but never enough to beat a triple bond's duplicates."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
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
      "context": "The (S) descriptor shared by nineteen amino acids is not a fact about their biology; it is the output of a CIP calculation that happens to come out the same way for nineteen different side chains. Change what the side chain is made of and the calculation can reorder.",
      "approach": "Step 1: Rank at the alpha carbon of a typical amino acid. Nitrogen outranks carbon, so the amino group is first. Between the carboxyl and the side chain, both start with carbon, so compare their substituent sets: the carboxyl carbon has (O,O,O) after duplicating the carbonyl oxygen, while a side chain like serine's CH2OH has (O,H,H). The carboxyl wins, and the L arrangement reads (S).\nStep 2: Repeat for cysteine, whose side chain is CH2SH. Its first carbon carries (S,H,H). Compare that with the carboxyl's (O,O,O), highest member first: sulfur is atomic number 16 against oxygen's 8, so the side chain wins on the very first comparison.\nStep 3: The order becomes NH2 > CH2SH > COOH > H. Priorities two and three have exchanged places relative to every other amino acid, and exchanging two priorities flips the descriptor - so the same spatial arrangement now reads (R).",
      "note": "Nothing about the molecule changed; only the bookkeeping did. L-Cysteine has the identical three-dimensional arrangement at its alpha carbon that L-serine has, and the descriptors differ purely because sulfur outranks oxygen. This is the sharpest argument for keeping D/L and R/S apart: D/L records a spatial relationship and stays constant across the whole set of amino acids, while R/S is recomputed from first principles for every structure and can swing on one atom.",
      "options": {
        "A": "Correct. Sulfur at atomic number 16 outranks the carboxyl's oxygens at 8, so the side chain takes priority two and the descriptor flips without the geometry changing.",
        "B": "L-Cysteine is an L amino acid like the rest. Its D/L assignment is unchanged; only the CIP descriptor differs, which is exactly why the two systems are not interchangeable.",
        "C": "Protonating the nitrogen would not help. Nitrogen already holds priority one in every amino acid, and adding a proton to it changes neither its atomic number nor its rank.",
        "D": "The carboxyl carbon carries (O,O,O) and a methyl carries (H,H,H), so the carboxyl outranks a methyl comfortably. What beats it here is sulfur, not a plain alkyl group."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A central carbon carrying a carboxylic acid written as HO-C=O on its left, an amino group on a bold wedge pointing toward the viewer, and a short side chain running to the lower right and ending in S-H."
  },
  {
    "question_id": "ch05_q25_rs_3_methylcyclohexene",
    "topic": "R/S Assignment",
    "difficulty_level": "Medium",
    "question_text": "Assign the configuration at the stereocentre of the cyclohexene shown, and give its full IUPAC name.",
    "question_smiles": "C1[C@@H](C)C=CCC1",
    "options": [
      {
        "option_id": "A",
        "text": "(R)-3-Methylcyclohexene",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "(S)-3-Methylcyclohexene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(R)-6-Methylcyclohexene",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "(S)-6-Methylcyclohexene",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A stereocentre inside a ring is ranked the same way as any other, except that two of its four groups are the two arcs of the ring itself. Those arcs have to be walked outward from the stereocentre until they differ.",
      "approach": "Step 1: Identify the four groups at the substituted ring carbon: the ring carbon belonging to the double bond, the ring carbon on the other side, the methyl, and a hydrogen.\nStep 2: Walk the two ring arcs one atom out. The doubly bonded neighbour has its partner duplicated, so it carries (C,C,H); the saturated neighbour on the other side carries (C,H,H). The alkene arc therefore outranks the saturated arc, the methyl at (H,H,H) comes third, and hydrogen is last.\nStep 3: The methyl is drawn on a bold wedge, so the hydrogen at that carbon points away from the viewer and the circle can be read directly off the page without correction. It runs clockwise, so the centre is (R). Numbering the ring so the double bond takes C1 and C2 and the substituent gets the lowest possible locant puts the methyl at C3.",
      "note": "The ring gives the numbering only one degree of freedom worth arguing about. The double bond must span C1 and C2, which fixes the pair, but either alkene carbon may be C1 - and the two choices send the numbering in opposite directions round the ring, putting the methyl at C3 one way and C6 the other. The lowest-locant rule settles it, and this is where a ring differs from a chain: the constraint comes from the double bond first, and the substituent only breaks the remaining tie.",
      "options": {
        "A": "Correct. The alkene arc outranks the saturated arc, the methyl sits on a wedge so no correction is needed, the circle reads clockwise, and the lowest locant puts the methyl at C3.",
        "B": "This is the reading obtained by reversing the circle unnecessarily. The correction applies only when the lowest-priority hydrogen faces the viewer, and here the methyl's wedge puts that hydrogen at the back.",
        "C": "The right molecule under the wrong name. Numbering round the ring in the other direction reaches the methyl at C6, but C3 is available and the lower locant is required.",
        "D": "Both errors together: the ring is numbered in the wrong direction and the circle is reversed when it should have been read as drawn."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered carbon ring containing one carbon-carbon double bond, with a methyl group on the ring carbon immediately next to that double bond, drawn on a bold wedge pointing toward the viewer."
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
      "context": "D/L and R/S answer different questions and are computed differently. The D label records how a molecule's arrangement compares with a reference compound; the R/S descriptor is worked out from atomic numbers with no reference to anything else, so converting between them means doing the full analysis.",
      "approach": "Step 1: Rank the four groups at C2. The hydroxyl is oxygen and takes priority one. The other two carbons both start with carbon, so compare their sets: the aldehyde carbon carries (O,O,H) once the carbonyl oxygen is duplicated, and the CH2OH carbon carries (O,H,H). They tie on the first member and part on the second, where oxygen beats hydrogen, so CHO outranks CH2OH. The hydrogen is last.\nStep 2: The order is OH > CHO > CH2OH > H.\nStep 3: The drawing puts the hydroxyl on a bold wedge, so the hydrogen at C2 points away from the viewer and the circle is read straight off the page with no correction. It runs clockwise, so D-glyceraldehyde is (R).",
      "note": "That D and R coincide here is a property of this one molecule, not a conversion rule. Glyceraldehyde is the reference against which every other D/L assignment is made, so its own labels line up by construction - and they come apart elsewhere. L-Cysteine is (R), and among the sugars, D-fructose is levorotatory. Three independent labels, three independent determinations.",
      "options": {
        "A": "Correct. The priorities run OH > CHO > CH2OH > H, the hydroxyl's wedge puts the hydrogen at the back, and the circle read directly off the page is clockwise.",
        "B": "This is the answer obtained by ranking CH2OH above CHO, or by reversing the circle when no reversal was called for. The aldehyde carbon's duplicated oxygen gives it (O,O,H) against the alcohol carbon's (O,H,H).",
        "C": "D is not a Cahn-Ingold-Prelog descriptor at all. It records the configuration relative to a reference compound and says nothing directly about the priority order at this carbon.",
        "D": "L is the other half of the same reference system, and it is in any case the wrong half - this molecule is the D enantiomer. Neither label answers a question about R or S."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A three-carbon chain with an aldehyde group at one end and a CH2OH at the other; the middle carbon carries a hydroxyl group on a bold wedge pointing toward the viewer."
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
      "context": "The rule that a clockwise circle means (R) carries a hidden condition: it holds only when the lowest-priority group is pointing directly away from you. Everything the question supplies is designed to test whether that condition gets checked.",
      "approach": "Step 1: Note where priority four is before doing anything else. The hydrogen is stated to be on a wedge, pointing out of the page toward the viewer - the exact opposite of the orientation the rule assumes.\nStep 2: Read the circle as given. Tracing chlorine to fluorine to methyl runs clockwise, which would be the answer directly if the hydrogen were at the back.\nStep 3: Apply the correction. Viewing a tetrahedral centre from the side the lowest-priority group occupies reverses the apparent sense of rotation, so the clockwise reading corresponds to counter-clockwise from the reference direction. The centre is (S).",
      "note": "The correction is nothing more mysterious than looking at the same object from the other side, and if the mnemonic ever feels unreliable a physical model settles it in seconds where argument does not. Note also what the rule requires: the lowest priority must be squarely toward you or squarely away. A group drawn flat in the plane of the page satisfies neither condition, and no simple reversal repairs it.",
      "options": {
        "A": "Correct. The circle reads clockwise, but it is being viewed from the side the hydrogen occupies, so the reading reverses and the centre is (S).",
        "B": "This is the circle taken at face value. Clockwise means (R) only when the lowest-priority group points away from the viewer, and here it is stated to point toward you.",
        "C": "The carbon carries a chlorine, a fluorine, a methyl and a hydrogen - four different groups - so it is a genuine stereocentre and the compound is chiral.",
        "D": "E and Z describe the arrangement about a double bond. This carbon is tetrahedral and singly bonded throughout, so those labels do not apply to it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A two-carbon fragment: a methyl group on the left joined to a carbon that carries a chlorine on a hashed bond receding from the viewer and a fluorine on a bold wedge coming toward the viewer."
  },
  {
    "question_id": "ch05_q28_rs_two_centers_assignment",
    "topic": "R/S Assignment",
    "difficulty_level": "Hard",
    "question_text": "Give the full IUPAC name, including stereochemical descriptors, for the compound shown.",
    "question_smiles": "C[C@@H](Br)[C@H](Cl)C",
    "options": [
      {
        "option_id": "A",
        "text": "(2R,3S)-2-Bromo-3-chlorobutane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "(2S,3R)-2-Bromo-3-chlorobutane",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "(2R,3R)-2-Bromo-3-chlorobutane",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "(2S,3S)-2-Bromo-3-chlorobutane",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Naming a stereoisomer is two jobs stacked on one another: settle the constitution and its numbering first, then assign each stereocentre on its own. The descriptors cannot be attached to locants that have not been fixed.",
      "approach": "Step 1: Number the chain. Four carbons with a halogen on each interior carbon gives the locant set 2,3 from either end, so that tie is broken by giving the lower locant to the substituent cited first alphabetically. Bromo precedes chloro, so the bromine takes C2 and the chlorine C3.\nStep 2: Assign C2. Its groups rank bromine first, then C3 - which carries a chlorine and so outranks a plain methyl - then the methyl, then hydrogen. The bromine is drawn on a hashed bond, which leaves the hydrogen pointing toward the viewer, so the circle read off the page must be reversed. That centre is R.\nStep 3: Assign C3 independently. Its groups rank chlorine first, then C2 - which carries a bromine - then the methyl, then hydrogen. Here the chlorine sits on a bold wedge, the hydrogen points away, and the circle is read directly. That centre is R as well, so the compound is (2R,3R)-2-bromo-3-chlorobutane.",
      "note": "Two centres coming out with the same letter is a coincidence of two separate calculations, not a symmetry of the molecule - at C2 the highest priority is a bromine and at C3 it is a chlorine, and the circles are read in opposite ways because one halogen is wedged and the other hashed. It follows that (2R,3S) is not this compound's mirror image but a diastereomer of it, differing at one centre only; the mirror image is (2S,3S).",
      "options": {
        "A": "This differs from the drawn compound at C3 only, which makes it a diastereomer rather than a misnaming of the same substance. The chlorine's bold wedge puts the hydrogen at the back, and the circle read directly gives R, not S.",
        "B": "Both descriptors are wrong, and the pair (2S,3R) is a diastereomer of the compound shown - it is the mirror image of option A, not of the drawn structure.",
        "C": "Correct. Bromine takes C2 on the alphabetical tie-break, and both centres work out as R once the hashed bromine bond is corrected for and the wedged chlorine bond is not.",
        "D": "This is the mirror image of the drawn compound - the enantiomer, obtained by inverting both centres. It arises from correcting the circle at the wedged centre as well as the hashed one."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon zig-zag chain in which one interior carbon carries a chlorine on a bold wedge pointing toward the viewer, and the carbon beside it carries a bromine on a hashed bond receding from the viewer."
  },
  {
    "question_id": "ch05_q29_rs_group_four_in_plane",
    "topic": "R/S Assignment",
    "difficulty_level": "Hard",
    "question_text": "If the lowest priority group (4) at a stereocenter lies in the plane of the page, what is the most reliable method to assign its R/S configuration?",
    "question_smiles": "",
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
      "context": "The wedge-and-dash reading rule assumes you are sighting down the bond to the lowest-priority group. When that group lies flat in the plane of the page it is neither toward you nor away, so the rule has nothing to say until the drawing is re-oriented.",
      "approach": "Step 1: Start from the one fact that makes any repair possible - exchanging any two groups at a tetrahedral centre inverts its configuration, turning the drawing into a drawing of the enantiomer.\nStep 2: Exchange twice rather than once. Two inversions cancel, so a pair of swaps chosen to move the lowest-priority group into the rear position leaves you with a picture of the same compound, now in the orientation the rule expects.\nStep 3: Read that repaired picture directly and stop. No correction is applied at the end, because the configuration was never altered - which is what makes this route hard to get wrong.",
      "note": "The single-swap route is also legitimate, but it carries two conditions the double swap does not: the swap has to land the lowest-priority group at the rear, and the final answer has to be inverted afterwards. Swapping specifically with the highest-priority group guarantees neither - if that group was itself drawn in the plane, the lowest priority simply moves to another in-plane position and nothing has been gained.",
      "options": {
        "A": "Correct. Two exchanges return the original configuration, so the redrawn structure is the same compound in a readable orientation and its circle can be traced without any further correction.",
        "B": "Reading directly is only valid with the lowest priority pointing away from the viewer. In the plane of the page it faces neither side, and the circle traced on paper bears no fixed relationship to the real configuration.",
        "C": "A single exchange does invert the configuration, so an inversion at the end would be needed - but swapping with the highest-priority group does not reliably move the lowest priority to the rear, and if it stays in the plane there is still nothing to read.",
        "D": "Where the highest-priority group is drawn carries no information by itself. The descriptor depends on the sense of rotation through all of priorities one, two and three, not on the placement of any single one of them."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch05_q30_rs_carboxyl_complex_priority",
    "topic": "R/S Assignment",
    "difficulty_level": "Medium",
    "question_text": "Using Cahn-Ingold-Prelog rules, what is the priority order (highest to lowest) of the following carbonyl and carboxyl derivatives?\n-COOCH3, -COOH, -CHO, -CH2OH",
    "question_smiles": "",
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
      "context": "All four of these groups begin with a carbon, so the first atom separates nothing. The ranking is decided entirely by what each of those carbons carries, and the duplicate atoms generated by the carbonyl double bonds do most of the work.",
      "approach": "Step 1: Write out each first carbon's substituent set, counting a doubly bonded oxygen twice. The ester carbon of -COOCH3 carries the carbonyl oxygen, its duplicate and the single-bonded oxygen: (O,O,O). The acid carbon of -COOH carries the same three: (O,O,O). The aldehyde carbon of -CHO carries the carbonyl oxygen, its duplicate and a hydrogen: (O,O,H). The alcohol carbon of -CH2OH carries (O,H,H).\nStep 2: Rank what is already separated. (O,O,O) beats (O,O,H) beats (O,H,H), so the ester and the acid occupy the top two places in some order, then the aldehyde, then the primary alcohol.\nStep 3: Break the (O,O,O) tie one sphere further out. In both groups the doubly bonded oxygen carries a duplicate carbon and the phantom duplicate carries nothing, so those match. They part at the single-bonded oxygen: the ester's is attached to a carbon and the acid's to a hydrogen. Carbon beats hydrogen, so -COOCH3 outranks -COOH.",
      "note": "The carboxylic acid is by far the more reactive and more familiar group, and neither fact enters the ranking at any point - the rules count atomic numbers outward from the stereocentre and are wholly indifferent to chemistry. The same indifference puts -CCl3 above -COOH, since chlorine at 17 beats oxygen at 8, and drops a bulky tert-butyl group below a plain -CH2OH, since a first-sphere (C,C,C) loses to (O,H,H) on the very first comparison.",
      "options": {
        "A": "Correct. Both -COOCH3 and -COOH show (O,O,O) at the first carbon, and the ester wins one sphere out because its single-bonded oxygen carries a carbon where the acid's carries a hydrogen.",
        "B": "This ranks the acid above the ester, which is what chemical reactivity would suggest and what the rules do not. The two tie at (O,O,O) and part on the substituent hanging off the single-bonded oxygen.",
        "C": "The aldehyde carbon carries only (O,O,H), because it has one oxygen and its duplicate but a hydrogen in the third position. It cannot outrank the acid's (O,O,O).",
        "D": "Putting -CHO first inverts the whole ordering. Its (O,O,H) set loses at the third member to both (O,O,O) groups, which have an oxygen there instead of a hydrogen."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
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
