// OChemStudyBuddy - McMurry Chapter 12
// Author: A. Elangovan, PhD
var CH12_QUESTIONS = [
  {
    "question_id": "ch12_q4_base_peak",
    "topic": "Mass Spectrometry Basics",
    "difficulty_level": "Easy",
    "question_text": "The electron-ionization mass spectrum of 2-methylpropane (isobutane) is shown. Which statement correctly identifies the molecular ion and the base peak?",
    "question_smiles": "CC(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "The molecular ion is the weak peak at $m/z = 58$; the base peak at $m/z = 43$ is the isopropyl cation left when $M^{\\bullet+}$ loses a methyl radical.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The base peak at $m/z = 43$ is the molecular ion, since the most intense peak in a spectrum is always the intact molecule; the peak at 58 is an impurity.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The molecular ion at $m/z = 58$ is also the base peak, because the heaviest ion in a spectrum is always assigned 100% abundance.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The base peak at $m/z = 43$ is the tert-butyl cation, $(CH_3)_3C^+$, formed when the molecular ion loses a hydrogen atom.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two peaks anchor every EI spectrum. The molecular ion is the intact molecule minus one electron, so its m/z equals the molecular weight; the base peak is simply the tallest peak, rescaled to 100%. They coincide only when the molecular ion is unusually robust, which a branched alkane's is not.",
      "approach": "Step 1: Find the highest-mass peak of real intensity. That is m/z 58, which matches C4H10 (4 x 12 + 10 x 1). It is only about 3% tall because a branched alkane radical cation fragments almost as soon as it forms.\nStep 2: Find the tallest peak: m/z 43. It is the base peak by definition, whatever its identity.\nStep 3: Account for 43 from 58. The difference is 15, a methyl radical. Losing CH3 from the tertiary carbon leaves (CH3)2CH+, a secondary carbocation, which is why this cleavage dominates.\nStep 4: The 41 and 42 peaks are the isopropyl cation after losing H2 and H; the cluster at 27-29 is C2 fragments. None of this changes which peak is the molecular ion and which is the base peak.",
      "note": "A weak or missing molecular ion is normal for branched alkanes, tertiary alcohols and any molecule that gives a stable cation on fragmentation. When M is faint, confirm it with the M+1 (13C) shoulder beside it rather than assuming the tallest high-mass peak is the parent.",
      "options": {
        "A": "Correct. m/z 58 is C4H10 as a radical cation and m/z 43 is (CH3)2CH+, formed by loss of a methyl radical; the tallest peak is the base peak regardless of its mass.",
        "B": "The base peak is the most intense peak, not the intact molecule. A molecular ion can be weak or even absent, and the peak at 58 is not an impurity: it is exactly the mass of C4H10.",
        "C": "The base peak is defined by intensity, not by mass. The molecular ion at 58 is barely 3% tall here, because the branched radical cation cleaves so readily to give the 43 ion.",
        "D": "The tert-butyl cation is C4H9+, m/z 57, the small M-1 peak. The base peak at 43 has lost 15 mass units, a whole methyl group, and is the isopropyl cation."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A central carbon bearing three methyl groups and one hydrogen: a branched four-carbon alkane.",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 4
        },
        {
          "x": 27,
          "y": 28
        },
        {
          "x": 29,
          "y": 12
        },
        {
          "x": 39,
          "y": 16
        },
        {
          "x": 41,
          "y": 38
        },
        {
          "x": 42,
          "y": 33
        },
        {
          "x": 43,
          "y": 100
        },
        {
          "x": 57,
          "y": 2
        },
        {
          "x": 58,
          "y": 3
        }
      ]
    }
  },
  {
    "question_id": "ch12_q6_nitrogen_rule",
    "topic": "Molecular Ion Peak",
    "difficulty_level": "Medium",
    "question_text": "According to the Nitrogen Rule, what must be true for an organic compound containing only C, H, N, O, S, and halogens that has an odd molecular weight?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "It must contain an odd number of nitrogen atoms.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It must contain an even number of nitrogen atoms, or none.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It must contain nitrogen, but the number of nitrogen atoms cannot be deduced from the mass alone.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It cannot contain nitrogen; an odd molecular ion arises from the $^{13}C$ isotope peak.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The nitrogen rule follows from valence and atomic mass together. C, O and S have even masses and even valences; H and the halogens have odd masses and odd valences, so they always come in pairs. Nitrogen is the one common element with an even mass (14) and an odd valence (3), so it alone can make a molecular mass odd.",
      "approach": "Step 1: Build any formula from C, H, O, S and halogens only. Every element contributes an even mass, or an odd mass an even number of times (H2, Cl2, and so on). The nominal mass comes out even.\nStep 2: Add one nitrogen. Its mass is even, but its trivalence forces one extra hydrogen into the formula, and that unpaired hydrogen makes the molecular mass odd.\nStep 3: Add a second nitrogen and the extra hydrogens pair up again, restoring an even mass. So an odd M means an odd nitrogen count: 1, 3, 5.\nStep 4: Applied to a molecular ion at odd m/z: the compound contains one or three nitrogens, most often one.",
      "note": "The rule applies to the molecular ion only, never to fragments. An even-electron fragment such as CH2=NH2+ (m/z 30) from an amine has an even mass despite its one nitrogen, because a radical has been lost and the hydrogen count has changed.",
      "options": {
        "A": "Correct. An odd molecular ion means an odd number of nitrogens, most commonly one, because nitrogen's even mass and odd valence break the pairing that keeps every other common element's contribution even.",
        "B": "An even number of nitrogens, including zero, gives an even molecular mass. The two amine nitrogens of ethylenediamine, C2H8N2, give M = 60, even.",
        "C": "The rule does say something about the count: it must be odd. It cannot separate one nitrogen from three, but it excludes zero and two outright.",
        "D": "Odd molecular ions come from odd nitrogen counts, not from 13C. The 13C peak sits one unit above M at a small fraction of its height; it never becomes the molecular ion."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q7_nitrogen_rule_application",
    "topic": "Molecular Ion Peak",
    "difficulty_level": "Medium",
    "question_text": "A compound has a molecular ion peak ($M^{\\bullet+}$) at $m/z = 116$. Which of the following molecular formulas is inconsistent with this mass and the Nitrogen Rule?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "$C_5H_{12}N_2O$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "$C_6H_{16}N_2$",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$C_5H_{14}N_3$",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "$C_6H_{12}O_2$",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A molecular ion at an even m/z is compatible only with formulas holding an even number of nitrogens. Checking a candidate formula therefore means two arithmetic tests: does its nominal mass equal 116, and does its nitrogen count have the parity the mass demands?",
      "approach": "Step 1: Nominal masses. C5H12N2O = 60 + 12 + 28 + 16 = 116. C6H16N2 = 72 + 16 + 28 = 116. C5H14N3 = 60 + 14 + 42 = 116. C6H12O2 = 72 + 12 + 32 = 116. All four match the mass, so mass alone eliminates nothing.\nStep 2: Nitrogen parity. M = 116 is even, so the nitrogen count must be even: zero or two. C5H12N2O (2 N), C6H16N2 (2 N) and C6H12O2 (0 N) pass; C5H14N3 (3 N) fails.\nStep 3: Cross-check C5H14N3 with the unsaturation count: (2 x 5 + 2 + 3 - 14)/2 = 1.5. A non-integer means no closed-shell molecule has that formula at all, which is the nitrogen rule seen from the other side.",
      "note": "The unsaturation formula (2C + 2 + N - H - X)/2 and the nitrogen rule are the same bookkeeping. Whenever a proposed formula gives a half-integer, its nitrogen and hydrogen counts have the wrong relative parity and the formula can be discarded without computing anything else.",
      "options": {
        "A": "C5H12N2O has two nitrogens and mass 116. Even mass, even nitrogen count: fully consistent, so it is not the answer to a question asking for the inconsistent formula.",
        "B": "C6H16N2 has mass 116, two nitrogens, and (12 + 2 + 2 - 16)/2 = 0 rings or pi bonds: a saturated diamine such as hexane-1,6-diamine. Consistent.",
        "C": "Correct. Three nitrogens is an odd count, which forces an odd molecular mass; a formula with three nitrogens and mass 116 corresponds to no real molecule, as its unsaturation count of 1.5 confirms.",
        "D": "C6H12O2 has no nitrogen and mass 116. Zero is an even count, so an even molecular ion is exactly what it should show; an ester such as butyl acetate has this formula."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q8_hrms_formula",
    "topic": "Molecular Ion Peak",
    "difficulty_level": "Hard",
    "question_text": "A high-resolution mass spectrometer (HRMS) measures the molecular ion of an unknown organic compound to be $m/z = 84.0581$. Given the exact isotopic masses: $^{12}\\text{C} = 12.0000$, $^{1}\\text{H} = 1.0078$, $^{14}\\text{N} = 14.0031$, and $^{16}\\text{O} = 15.9949$, what is the molecular formula of the compound?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "$C_5H_8O$ (exact mass: 84.0573)",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$C_4H_8N_2$ (exact mass: 84.0686)",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$C_6H_{12}$ (exact mass: 84.0936)",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$C_3H_4N_2O$ (exact mass: 84.0323)",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Four formulas can share a nominal mass of 84 and still differ in their exact masses, because the isotopic masses of C, H, N and O are not integers. High-resolution MS reads the molecular ion to four decimal places, and only one formula reproduces that number within instrumental precision.",
      "approach": "Step 1: Compute each candidate from the exact masses given. C5H8O: 5(12.0000) + 8(1.0078) + 15.9949 = 84.0573. C4H8N2: 48.0000 + 8.0624 + 28.0062 = 84.0686. C6H12: 72.0000 + 12.0936 = 84.0936. C3H4N2O: 36.0000 + 4.0312 + 28.0062 + 15.9949 = 84.0323.\nStep 2: Compare with the measurement, 84.0581. The differences are 0.0008, 0.0105, 0.0355 and 0.0258. Only C5H8O falls within the few-thousandths precision of the instrument.\nStep 3: Sanity-check with the nitrogen rule: an even mass needs an even nitrogen count, which all four satisfy, so the exact mass has to do all the work here.",
      "note": "Hydrogen drives these differences: at 1.0078 each, every hydrogen adds 0.0078 above its nominal mass, which is why the hydrocarbon C6H12 sits highest and the nitrogen- and oxygen-rich C3H4N2O lowest. A formula with more hydrogens for the same nominal mass always has the larger exact mass.",
      "options": {
        "A": "Correct. 84.0573 is within 0.0008 of the measured 84.0581; the other three candidates miss by 0.01 to 0.04, far outside high-resolution precision.",
        "B": "84.0686 is 0.0105 above the measurement. Two nitrogens at 14.0031 each together with eight hydrogens push this formula too high.",
        "C": "84.0936 is 0.0355 above the measurement. Twelve hydrogens, each 0.0078 above its nominal mass, give the hydrocarbon the highest exact mass of the four.",
        "D": "84.0323 is 0.0258 below the measurement. Oxygen at 15.9949 and two nitrogens with only four hydrogens pull this formula well under the measured value."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q9_m_plus_one_abundance",
    "topic": "Molecular Ion Peak",
    "difficulty_level": "Medium",
    "question_text": "An unknown compound has a molecular ion peak ($M^{\\bullet+}$) at $m/z = 150$ with a relative intensity of 84.2%. The $M+1$ peak at $m/z = 151$ has a relative intensity of 10.2%. Estimate the number of carbon atoms present in this compound, assuming the $M+1$ peak is due solely to the natural abundance of $^{13}\\text{C}$ (1.11%).",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "11",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "9",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "7",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "13",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Each carbon in a molecule has a 1.1% chance of being 13C, so the M+1 peak carries about 1.1% of the M intensity per carbon. Reading the carbon count therefore means comparing M+1 to M itself, not to the base peak, and the intensities quoted are relative to the base peak.",
      "approach": "Step 1: Normalize M+1 to M: 10.2 / 84.2 = 0.121, so the M+1 peak is 12.1% of the molecular ion.\nStep 2: Divide by the per-carbon contribution: 12.1 / 1.1 = 11.0 carbons.\nStep 3: Check against the mass: eleven carbons account for 132 of the 150; the remaining 18 is H18, giving C11H18 with three degrees of unsaturation, a sensible molecule.",
      "note": "The method loses precision above about fifteen carbons and whenever nitrogen (15N, 0.37%) or sulfur (33S, 0.76%) is present, since they add to M+1 too. It is an estimate, and it needs a clean molecular ion that is not sitting on top of a fragment peak.",
      "options": {
        "A": "Correct. (10.2 / 84.2) x 100 = 12.1%, and 12.1 / 1.1 = 11 carbons.",
        "B": "Nine comes from dividing 10.2 directly by 1.1 without first normalizing to the molecular ion. The intensities are relative to the base peak, and M itself is only 84.2%.",
        "C": "Seven is 84 / 12, the number of carbons a mass of 84 could hold. The molecular mass is 150, and the question asks for the count read from the isotope peak, not from the mass.",
        "D": "Thirteen is roughly 150 / 12, the most carbons a mass of 150 could contain if the molecule were nothing but carbon. The isotope ratio says 11, and the remaining 18 mass units are hydrogen."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q10_deuterium_m_plus_one",
    "topic": "Molecular Ion Peak",
    "difficulty_level": "Medium",
    "question_text": "Why is the contribution of hydrogen isotopes ($^2\\text{H}$, deuterium) to the $M+1$ peak of a typical hydrocarbon generally ignored, while the contribution of carbon isotopes ($^{13}\\text{C}$) is heavily relied upon?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The natural abundance of deuterium is extremely low (~0.015%), making its contribution to $M+1$ negligible compared to $^{13}\\text{C}$ (~1.11%).",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Deuterium is lost as HD during ionization, so it never reaches the detector as part of the molecular ion.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Hydrocarbons contain more carbon atoms than hydrogen atoms, so the carbon isotope simply outnumbers the hydrogen one.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Deuterium contributes to the $M+2$ peak rather than $M+1$, because its mass is 2.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An isotope peak's size is the product of two things: how many atoms of the element are present and how often each one is the heavy isotope. Hydrogen loses on the second factor so badly that the first cannot rescue it, even in a molecule with twice as many hydrogens as carbons.",
      "approach": "Step 1: Natural abundances: 13C is 1.11% of carbon; 2H is 0.0156% of hydrogen, about 70 times rarer.\nStep 2: Count atoms in a typical hydrocarbon such as decane, C10H22. Carbon contributes 10 x 1.11 = 11.1% to M+1; hydrogen contributes 22 x 0.0156 = 0.34%.\nStep 3: Even with twice as many hydrogens as carbons, hydrogen supplies about 3% of the M+1 intensity. Rounding it away changes the estimated carbon count by less than half a carbon.\nStep 4: The same arithmetic is why 15N (0.37%) and 33S (0.76%) do matter when present: they are not 70-fold rarer than 13C.",
      "note": "Deuterium becomes important only when it is put there on purpose. A deuterium-labelled compound shows its M+1 or M+2 shift cleanly, which is exactly why labelling studies use it to trace which hydrogen moves in a rearrangement such as the McLafferty.",
      "options": {
        "A": "Correct. At 0.0156% versus 1.11%, each hydrogen is about 70 times less likely to be heavy than each carbon, so even a hydrogen-rich molecule's M+1 is almost entirely 13C.",
        "B": "Deuterium is a stable isotope bonded exactly like protium; nothing in electron ionization strips it selectively. Labelled compounds keep their deuterium in the molecular ion, which is what makes labelling useful.",
        "C": "Hydrocarbons have more hydrogens than carbons, not fewer, typically about twice as many. Carbon still dominates M+1 because its heavy isotope is 70 times more abundant per atom.",
        "D": "Deuterium is one mass unit heavier than protium (2 versus 1), so a single deuterium shifts M by one unit, into M+1. Its contribution is ignored for its rarity, not misplaced by its mass."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q11_monochloro_ratio",
    "topic": "Isotopes (Cl and Br ratios)",
    "difficulty_level": "Easy",
    "question_text": "A mass spectrum displays a molecular ion cluster with two peaks at $m/z = 78$ and $m/z = 80$ in a $3:1$ intensity ratio. What structural feature does this pattern indicate?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The presence of a single chlorine atom.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The presence of a single bromine atom.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The presence of two chlorine atoms.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The presence of a single sulfur atom.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Chlorine and bromine each have two abundant isotopes two mass units apart, so their molecular ions appear as clusters whose spacing and intensity ratio identify the halogen and count it. Sulfur and silicon also give M+2 peaks, but small ones that never rival the molecular ion.",
      "approach": "Step 1: Note the spacing: peaks two units apart, at 78 and 80. Only an element with isotopes two units apart produces this; 13C would give M+1.\nStep 2: Read the ratio, 3:1. 35Cl is 75.8% and 37Cl is 24.2% of natural chlorine, a 3:1 ratio, so a single chlorine gives M and M+2 in 3:1.\nStep 3: Exclude the alternatives by their own ratios: one bromine gives 1:1, two chlorines give 9:6:1 with an M+4 peak, and sulfur gives an M+2 of only 4.4%.\nStep 4: 78 fits C3H7Cl, a chloropropane, confirming the assignment.",
      "note": "The same 3:1 pattern follows any fragment that keeps the chlorine and vanishes from any fragment that has lost it. Watching which peaks carry the doublet tells you where the halogen was attached in the molecule.",
      "options": {
        "A": "Correct. A 3:1 pair two mass units apart is the fingerprint of one chlorine atom, matching the 75.8:24.2 abundance of 35Cl and 37Cl.",
        "B": "One bromine gives M and M+2 at almost exactly 1:1, because 79Br and 81Br are 50.7% and 49.3%. A 3:1 ratio is far from equal.",
        "C": "Two chlorines produce three peaks, M, M+2 and M+4, in a 9:6:1 ratio. Only two peaks appear here, and their ratio is 3:1, not 9:6.",
        "D": "Sulfur's 34S isotope gives an M+2 peak of only about 4.4% of M, a small shoulder rather than a peak one third the height of the molecular ion."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q12_monobromo_ratio",
    "topic": "Isotopes (Cl and Br ratios)",
    "difficulty_level": "Easy",
    "question_text": "If an organic compound contains exactly one bromine atom and no other halogens, what is the expected ratio of the molecular ion peak ($M$) to the $M+2$ peak in its mass spectrum?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Approximately $1:1$ (equal intensity).",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Approximately $3:1$.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Approximately $100:1$, the same small $M+2$ that $^{13}\\text{C}$ alone would give.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Approximately $1:2:1$ across $M$, $M+2$ and $M+4$.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Bromine's two isotopes, 79Br (50.7%) and 81Br (49.3%), are nearly equally abundant. A molecule with one bromine is therefore an almost equal mixture of two species two mass units apart, and its molecular ion shows two peaks of nearly the same height.",
      "approach": "Step 1: Write the two molecular species, R-79Br and R-81Br, present in the ratio 50.7:49.3.\nStep 2: Each gives its own molecular ion, so M and M+2 appear in that ratio, about 1:1.\nStep 3: Distinguish from chlorine: 35Cl:37Cl is 75.8:24.2, so one chlorine gives 3:1, a clearly unequal pair.\nStep 4: A second bromine would add an M+4 peak and change the pattern to 1:2:1, from expanding (1 + 1) squared.",
      "note": "Bromoalkanes often show a weak molecular ion, but the 1:1 doublet is so distinctive that even a faint pair at M and M+2 settles the question, and the same doublet reappears on every bromine-containing fragment further down the spectrum.",
      "options": {
        "A": "Correct. With 79Br and 81Br at 50.7% and 49.3%, the M and M+2 peaks are within a few percent of equal height.",
        "B": "A 3:1 ratio is one chlorine, from the 75.8:24.2 abundance of 35Cl and 37Cl. Bromine's isotopes are far closer to equal than that.",
        "C": "Bromine is not monoisotopic like fluorine or iodine; nearly half of all bromine atoms are 81Br, so M+2 is nearly as tall as M, not a trace peak.",
        "D": "1:2:1 across three peaks is the pattern of two bromines, obtained by expanding (1 + 1) squared. One bromine gives only two peaks."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q13_dibromo_ratio",
    "topic": "Isotopes (Cl and Br ratios)",
    "difficulty_level": "Hard",
    "question_text": "An organic compound contains exactly two bromine atoms. What is the expected intensity ratio of the molecular ion cluster peaks ($M : M+2 : M+4$)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Approximately $1:2:1$.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Approximately $9:6:1$.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Approximately $3:4:1$.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Approximately $1:1$ across $M$ and $M+2$ only; a second bromine does not change the pattern.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "With two bromines the molecular ion is a mixture of three species: both atoms light, one light and one heavy (two ways), or both heavy. Because 79Br and 81Br are nearly 50:50, the three combinations occur in binomial proportions, 1:2:1, at M, M+2 and M+4.",
      "approach": "Step 1: Treat each bromine as a coin with two faces of nearly equal weight, 79 and 81.\nStep 2: Two coins give the combinations 79/79, 79/81, 81/79 and 81/81. The middle two have the same mass, so the outcomes are M (one way), M+2 (two ways) and M+4 (one way).\nStep 3: Expand (1 + 1) squared = 1 + 2 + 1. That is the intensity ratio 1:2:1.\nStep 4: Check with a real compound: 1,2-dibromoethane shows m/z 186, 188 and 190 in that ratio.",
      "note": "The same expansion works for any number of halogens: (a + b) to the power n, with a:b = 1:1 for bromine and 3:1 for chlorine. Three bromines give 1:3:3:1 across M to M+6, and the width of the cluster alone counts the halogens.",
      "options": {
        "A": "Correct. Two bromines at nearly 50:50 give three peaks, M, M+2 and M+4, in the binomial ratio 1:2:1.",
        "B": "9:6:1 is the pattern for two chlorines, from expanding (3 + 1) squared. It is skewed toward M because 35Cl outweighs 37Cl three to one; bromine's pattern is symmetric.",
        "C": "3:4:1 is one chlorine plus one bromine, the product (3 + 1)(1 + 1). Two identical halogens give a symmetric pattern, and this one is not symmetric.",
        "D": "Each additional bromine adds a peak two units further up. Two bromines give three peaks; a 1:1 pair with nothing at M+4 would mean only one bromine."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q14_dichloro_ratio",
    "topic": "Isotopes (Cl and Br ratios)",
    "difficulty_level": "Hard",
    "question_text": "An organic compound contains exactly two chlorine atoms. What is the expected intensity ratio of the molecular ion cluster peaks ($M : M+2 : M+4$)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Approximately $9:6:1$.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Approximately $3:4:1$.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Approximately $1:2:1$.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Approximately $3:1$ across $M$ and $M+2$ only; the second chlorine merely reinforces the $M+2$ peak.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two chlorines produce three molecular-ion peaks, and because 35Cl outweighs 37Cl three to one the cluster leans heavily toward the all-light species. The ratio comes straight from expanding (3 + 1) squared, and the M+4 peak, though small, is the proof that there are two chlorines rather than one.",
      "approach": "Step 1: Assign each chlorine the weights 3 (35Cl) and 1 (37Cl).\nStep 2: Combine two of them. Both light: 3 x 3 = 9. One light, one heavy, in either order: 3 x 1 + 1 x 3 = 6. Both heavy: 1 x 1 = 1.\nStep 3: Read off M : M+2 : M+4 = 9 : 6 : 1. Relative to M as 100%, that is 100 : 67 : 11.\nStep 4: Confirm with dichloromethane: m/z 84, 86 and 88 appear in roughly 9:6:1.",
      "note": "The M+4 peak at one-ninth of M is easy to overlook in a noisy spectrum but is what separates Cl2 from Cl. A 3:1 doublet with a trace at M+4 is one chlorine plus 13C; a 9:6:1 triplet is two chlorines.",
      "options": {
        "A": "Correct. Expanding (3 + 1) squared gives 9:6:1 for M, M+2 and M+4, matching the observed clusters of dichloroalkanes.",
        "B": "3:4:1 is the pattern for one chlorine together with one bromine, from (3 + 1)(1 + 1). Two chlorines give a cluster that leans much more toward M.",
        "C": "1:2:1 is two bromines, whose isotopes are equal in abundance. Chlorine's 3:1 isotope ratio makes the two-chlorine cluster asymmetric, with M by far the tallest.",
        "D": "Every added chlorine extends the cluster by another peak two units higher. Two chlorines cannot stop at M+2; the M+4 peak, one-ninth of M, is what identifies the second chlorine."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q15_mixed_halogen_ratio",
    "topic": "Isotopes (Cl and Br ratios)",
    "difficulty_level": "Hard",
    "question_text": "A mass spectrum displays a molecular ion cluster with peaks at $M$, $M+2$, and $M+4$. If the compound contains exactly one chlorine atom and one bromine atom, what is the theoretical intensity ratio of these peaks ($M : M+2 : M+4$)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Approximately $3:4:1$.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Approximately $9:6:1$.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Approximately $1:2:1$.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Approximately $1:1$ across $M$ and $M+2$ only, because bromine's near-equal isotopes dominate the pattern.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When a molecule carries two different halogens the isotope pattern is the product of the two individual patterns, not their sum. Chlorine contributes a 3:1 pair and bromine a 1:1 pair; multiplying them gives a three-peak cluster that belongs to neither halogen alone.",
      "approach": "Step 1: Write the chlorine pattern as (3 + 1) and the bromine pattern as (1 + 1), each term two mass units apart.\nStep 2: Multiply: (3 + 1)(1 + 1) = 3 + 3 + 1 + 1, and collect terms at the same mass. All-light: 3. One heavy atom (either the Cl or the Br): 3 + 1 = 4. Both heavy: 1.\nStep 3: Read off M : M+2 : M+4 = 3 : 4 : 1. The M+2 peak is taller than M, which is unusual and diagnostic.\nStep 4: Confirm with 1-bromo-2-chloroethane: m/z 142, 144 and 146 in about 3:4:1.",
      "note": "A cluster whose M+2 exceeds M is a strong hint of bromine plus chlorine, since neither halogen alone, nor two of the same halogen, produces a middle peak taller than the first. Fragments that keep only one halogen revert to that halogen's own pattern.",
      "options": {
        "A": "Correct. (3 + 1)(1 + 1) gives 3:4:1, with the M+2 peak taller than the molecular ion itself.",
        "B": "9:6:1 is two chlorines, (3 + 1) squared. With one bromine present the heavy species are far more abundant than that.",
        "C": "1:2:1 is two bromines, (1 + 1) squared. Chlorine's 3:1 preference for the light isotope tilts the mixed pattern away from symmetry.",
        "D": "A second halogen always extends the cluster by another peak. Bromine's 1:1 pair combined with chlorine's 3:1 pair gives three peaks, and the chlorine's contribution is what makes M and M+2 unequal."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q16_sulfur_isotope",
    "topic": "Isotopes (Cl and Br ratios)",
    "difficulty_level": "Medium",
    "question_text": "A compound has a molecular ion peak at $m/z = 62$ with 100% relative abundance, and a peak at $m/z = 64$ with 4.4% relative abundance. What heteroatom is likely present?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Sulfur, due to the $^{34}\\text{S}$ isotope (natural abundance about 4.2%).",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Oxygen, due to the $^{18}\\text{O}$ isotope.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Chlorine, due to the $^{37}\\text{Cl}$ isotope.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Bromine, due to the $^{81}\\text{Br}$ isotope.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An M+2 peak comes from an element with an isotope two mass units above its lightest one. Chlorine and bromine give large M+2 peaks; sulfur and silicon give small ones; oxygen's 18O is so rare that its M+2 is usually invisible. The size of the M+2 peak is the tell.",
      "approach": "Step 1: Measure M+2 relative to M: 4.4%. That immediately rules out chlorine (32.5%) and bromine (98%), whose M+2 peaks are a third of, or equal to, the molecular ion.\nStep 2: Compare with the small-M+2 elements: 34S is 4.2% of sulfur, 30Si 3.1% of silicon, 18O only 0.2% of oxygen. A 4.4% M+2 fits one sulfur, with 13C from two carbons adding a little.\nStep 3: Check the mass: 62 fits C2H6S, which is ethanethiol or dimethyl sulfide, both with one sulfur.",
      "note": "Sulfur also has a 33S isotope (0.76%) that pads the M+1 peak. A compound whose M+1 is larger than its carbon count predicts, together with a 4% M+2, is the classic signature of one sulfur atom.",
      "options": {
        "A": "Correct. A 4.4% M+2 matches the 4.2% abundance of 34S plus a small 13C contribution, and m/z 62 fits C2H6S.",
        "B": "18O is only 0.2% of natural oxygen, so one oxygen adds an M+2 of about 0.2%, twenty times smaller than the peak observed. Oxygen is effectively monoisotopic in low-resolution work.",
        "C": "One chlorine gives an M+2 peak about one third the height of M, 32.5%. A 4.4% peak is far too small for chlorine.",
        "D": "One bromine gives an M+2 nearly equal to M, 98%. Bromine is also too heavy: a compound with one bromine and mass 62 would have no room for carbon."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q17_alkane_spacing",
    "topic": "Fragmentation patterns (alkanes)",
    "difficulty_level": "Medium",
    "question_text": "In the EI mass spectrum of undecane ($C_{11}H_{24}$), a series of peaks are observed at $m/z = 99, 85, 71, 57, 43$, and $29$. What is the cause of this pattern?",
    "question_smiles": "CCCCCCCCCCC",
    "options": [
      {
        "option_id": "A",
        "text": "Homolytic cleavage of the straight-chain alkane skeleton, resulting in the loss of successive alkyl radicals, leaving carbocations that differ by a $-CH_2-$ group (14 mass units).",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Stepwise loss of neutral methylene units ($:CH_2$) from the molecular ion, one carbon at a time.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Sequential loss of methyl radicals from the ends of the molecule.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Each peak is the molecular ion of a shorter alkane impurity, from heptane down to ethane.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A straight-chain alkane radical cation can break at any C-C bond, and every such break gives an alkyl cation of formula CnH2n+1 with mass 14n + 1. The spectrum is therefore a ladder of peaks 14 units apart: 29, 43, 57, 71, 85, 99, with the C3 and C4 members usually the tallest.",
      "approach": "Step 1: Note the masses: 99, 85, 71, 57, 43, 29. Each differs from the next by 14, the mass of CH2.\nStep 2: Identify them: 29 = C2H5+, 43 = C3H7+, 57 = C4H9+, 71 = C5H11+, 85 = C6H13+, 99 = C7H15+. Every one is CnH2n+1, an alkyl cation.\nStep 3: Each arises from one cleavage of the undecane radical cation, C11H24 (M = 156), losing the complementary alkyl radical. They form in parallel, not one from another.\nStep 4: Their odd masses show they are fragment cations, not intact alkanes, which would be CnH2n+2 and even.",
      "note": "The pattern is the same for every unbranched alkane; only the molecular ion moves. Branching announces itself by breaking the smooth ladder: a much taller peak where cleavage gives a secondary or tertiary cation, and a weaker molecular ion.",
      "options": {
        "A": "Correct. One C-C cleavage anywhere along the chain gives an alkyl cation CnH2n+1 and an alkyl radical; the family of cations sits 14 units apart.",
        "B": "Carbenes are not expelled from alkane radical cations; the fragments are formed by single-bond cleavages of the parent, each giving a cation plus an alkyl radical, not by peeling off CH2 units in sequence.",
        "C": "Losing methyl radicals would drop the mass by 15 each time and, done sequentially, would require a radical cation to lose a radical and remain a radical cation. The observed spacing is 14, from cleavage at different positions.",
        "D": "Alkane molecular ions have even masses (CnH2n+2 = 14n + 2). These peaks are all odd, which marks them as CnH2n+1 fragment cations of one compound, not molecular ions of several."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unbranched chain of eleven carbons, drawn as a zigzag with no substituents."
  },
  {
    "question_id": "ch12_q18_branched_vs_linear",
    "topic": "Fragmentation patterns (alkanes)",
    "difficulty_level": "Medium",
    "question_text": "Compare the mass spectra of hexane and its isomer, 2,2-dimethylbutane. Why is the molecular ion peak ($M^{\\bullet+} = 86$) much weaker in 2,2-dimethylbutane than in hexane?",
    "question_smiles": "CCCCCC.CCC(C)(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "2,2-Dimethylbutane has a quaternary carbon, which rapidly cleaves to yield a highly stable tertiary carbocation (tert-butyl cation, $m/z = 57$), making the molecular ion extremely short-lived.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2,2-Dimethylbutane undergoes a McLafferty rearrangement that hexane cannot undergo.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The branched isomer has a higher ionization energy, so far fewer molecular ions form in the first place.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Hexane's molecular ion is stabilized by hyperconjugation along its longer unbranched chain, so it survives to reach the detector.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The intensity of a molecular ion reflects how long it survives before fragmenting, and that depends on how good the available fragmentation is. A cleavage that produces a tertiary carbocation is fast and exothermic enough that the branched alkane's radical cation barely lasts to be detected.",
      "approach": "Step 1: Locate the weakest link in 2,2-dimethylbutane: the bond from the quaternary carbon to the ethyl group. Breaking it gives (CH3)3C+, a tertiary cation, plus an ethyl radical.\nStep 2: Compare with hexane, where any cleavage gives a primary cation. There is no low-energy exit, so the hexane radical cation survives long enough to give a visible M+ at 86.\nStep 3: Predict the spectra: 2,2-dimethylbutane shows a base peak at 57 and almost no 86; hexane shows a modest 86 with its base peak at 57 or 43 from ordinary chain cleavage.\nStep 4: Generalize: the more branched the alkane, the weaker its molecular ion and the more the spectrum is dominated by the one branched cation.",
      "note": "The same logic predicts which of two isomeric alkanes a mystery spectrum belongs to: a strong molecular ion points to the unbranched isomer, and a single dominant secondary or tertiary cation with a faint M+ points to the branched one.",
      "options": {
        "A": "Correct. Cleavage at the quaternary carbon gives the tert-butyl cation at 57, and a fragmentation that easy leaves almost no molecular ion at 86.",
        "B": "The McLafferty rearrangement needs a C=O or other pi bond to accept the transferred hydrogen. Neither alkane has one, so neither undergoes it.",
        "C": "The two isomers have nearly the same ionization energy; both form molecular ions readily at 70 eV. The difference is how long the ion lasts, which is set by the fragmentation available to it.",
        "D": "Hyperconjugation stabilizes cations, not radical cations of alkanes, and a longer chain does not add any special stability. Hexane's molecular ion survives because it has no especially good way to fragment."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two six-carbon alkanes side by side: an unbranched chain, and a four-carbon chain whose second carbon carries two methyl groups."
  },
  {
    "question_id": "ch12_q19_carbocation_stability",
    "topic": "Fragmentation patterns (alkanes)",
    "difficulty_level": "Medium",
    "question_text": "When 2-methylhexane is ionized, which C-C bond is most likely to cleave to yield the base peak at $m/z = 43$?",
    "question_smiles": "CCCCC(C)C",
    "options": [
      {
        "option_id": "A",
        "text": "The $C2-C3$ bond, giving the isopropyl cation ($m/z = 43$, a secondary carbocation) and a butyl radical.",
        "is_correct": true,
        "smiles": "C[CH+]C"
      },
      {
        "option_id": "B",
        "text": "The $C3-C4$ bond, with the charge on the three-carbon fragment: the propyl cation $CH_3CH_2CH_2^+$ ($m/z = 43$, a primary carbocation).",
        "is_correct": false,
        "smiles": "[CH2+]CC"
      },
      {
        "option_id": "C",
        "text": "The $C2-C3$ bond, with the charge retained on the four-carbon fragment, giving the butyl cation at $m/z = 57$.",
        "is_correct": false,
        "smiles": "[CH2+]CCC"
      },
      {
        "option_id": "D",
        "text": "The $C1-C2$ bond, losing a methyl radical to give the secondary 2-hexyl cation at $m/z = 85$.",
        "is_correct": false,
        "smiles": "CCCC[CH+]C"
      }
    ],
    "feedback": {
      "context": "A branched alkane fragments preferentially at the branch point, because the cleavage that gives the more substituted carbocation has the lowest energy cost. When one bond breaks, the charge goes to whichever fragment makes the more stable cation and the other fragment leaves as a radical.",
      "approach": "Step 1: Number the chain: C1 is a methyl, C2 carries the methyl branch, C3-C6 continue the chain. C2 is the only branched carbon.\nStep 2: List the cleavages at C2. Breaking C2-C3 gives a three-carbon fragment (C1, C2 and the branch methyl) and a four-carbon fragment (C3-C6). Breaking C1-C2 gives a methyl and a six-carbon fragment.\nStep 3: Put the charge where it is most stable. From C2-C3 cleavage the three-carbon piece is (CH3)2CH+, secondary, m/z 43; the alternative, a primary butyl cation at 57, is less stable and appears as a smaller peak.\nStep 4: Confirm the mass: C3H7+ = 36 + 7 = 43, matching the base peak.",
      "note": "Two fragments can share m/z 43: the isopropyl cation and the propyl cation are both C3H7+. The spectrum cannot tell them apart by mass alone; it is the stability argument, backed by the weakness of the 57 peak, that says which bond broke.",
      "options": {
        "A": "Correct. C2-C3 cleavage at the branch point gives the secondary isopropyl cation, m/z 43, with the charge on the more substituted fragment.",
        "B": "C3-C4 cleavage does produce a C3H7+ ion of the same mass, but it is the primary propyl cation. The secondary isopropyl cation from the branch point is formed far more readily and accounts for the base peak.",
        "C": "The bond is right, but the charge goes the wrong way. When C2-C3 breaks, the charge settles on the fragment that makes the more stable cation, the secondary isopropyl at 43; the butyl cation at 57 is the minor outcome.",
        "D": "Loss of a methyl radical does give a secondary cation, and a small M-15 peak at 85 is seen, but ejecting a 15-unit methyl is less favourable than the branch-point cleavage that releases a butyl radical and leaves the isopropyl cation."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-carbon chain with a methyl group on its second carbon; seven carbons in all."
  },
  {
    "question_id": "ch12_q20_tropylium_ion",
    "topic": "Fragmentation patterns (alkanes)",
    "difficulty_level": "Medium",
    "question_text": "In the mass spectrum of alkylbenzenes, such as propylbenzene, a prominent fragment is observed at $m/z = 91$. This fragment undergoes rearrangement to form a highly stable, aromatic species. What is the name and structure of this rearranged ion?",
    "question_smiles": "CCCc1ccccc1",
    "options": [
      {
        "option_id": "A",
        "text": "Tropylium ion; a cycloheptatrienyl cation ($C_7H_7^+$).",
        "is_correct": true,
        "smiles": "[C+]1=CC=CC=CC1"
      },
      {
        "option_id": "B",
        "text": "Benzyl carbocation; a phenylmethyl cation ($C_6H_5CH_2^+$) without rearrangement.",
        "is_correct": false,
        "smiles": "[CH2+]c1ccccc1"
      },
      {
        "option_id": "C",
        "text": "Phenyl cation ($C_6H_5^+$, $m/z = 77$), formed by loss of the whole side chain.",
        "is_correct": false,
        "smiles": "[c+]1ccccc1"
      },
      {
        "option_id": "D",
        "text": "A tolyl (methylphenyl) cation, $CH_3C_6H_4^+$, $m/z = 91$, formed by loss of an ethyl radical with a hydrogen shift onto the ring.",
        "is_correct": false,
        "smiles": "Cc1cc[c+]cc1"
      }
    ],
    "feedback": {
      "context": "Alkylbenzenes cleave at the benzylic bond because the resulting C7H7+ ion is exceptionally stable. The ion first formed is the benzyl cation, but it rearranges by ring expansion to the tropylium ion, a seven-membered aromatic ring in which the positive charge is shared over all seven carbons.",
      "approach": "Step 1: Find the benzylic bond in propylbenzene: the bond between the CH2 attached to the ring and the rest of the chain. Cleavage there expels an ethyl radical (29) from M = 120, leaving m/z 91.\nStep 2: Write the initial ion, C6H5CH2+, the benzyl cation, stabilized by resonance into the ring.\nStep 3: Let it rearrange: the CH2 inserts into the ring to give a planar seven-membered ring with six pi electrons, the tropylium ion. It is aromatic by Huckel's rule (4n + 2 with n = 1), which is why it is more stable still.\nStep 4: Recognize the pair of peaks that go with it: 91 is the base peak, and 65 (91 minus acetylene) is its characteristic daughter ion.",
      "note": "Any monoalkylbenzene with at least one hydrogen on the benzylic carbon shows m/z 91. A branched benzylic position gives a substituted tropylium instead, 105 for a methyl branch, so the mass of the tropylium peak reports the substitution at the benzylic carbon.",
      "options": {
        "A": "Correct. The benzyl cation formed by benzylic cleavage expands to the aromatic cycloheptatrienyl cation, m/z 91, the most stable C7H7+ isomer.",
        "B": "The benzyl cation is the ion formed first, and the question asks for the species after rearrangement. Ring expansion converts it to the tropylium ion, which is the form responsible for the peak's exceptional intensity.",
        "C": "The phenyl cation is C6H5+ at m/z 77, not 91, and it forms by cleaving the strong aryl-alkyl bond rather than the weak benzylic bond. It appears in alkylbenzene spectra only as a minor peak.",
        "D": "A tolyl cation has the right formula, C7H7+, but the positive charge would sit in an sp2 orbital on the ring, unstabilized by the pi system. Nothing so unstable accounts for a base peak; the aromatic tropylium does."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A benzene ring bearing an unbranched three-carbon chain."
  },
  {
    "question_id": "ch12_q21_allylic_cleavage",
    "topic": "Fragmentation patterns (alkanes)",
    "difficulty_level": "Medium",
    "question_text": "Alkenes undergo a characteristic fragmentation pathway known as allylic cleavage. For 1-pentene ($CH_2=CH-CH_2-CH_2-CH_3$), which bond is cleaved, and what is the $m/z$ value of the resulting resonance-stabilized cation?",
    "question_smiles": "C=CCCC",
    "options": [
      {
        "option_id": "A",
        "text": "The $C3-C4$ bond (allylic bond), yielding the allyl cation ($[CH_2=CH-CH_2]^+$) at $m/z = 41$.",
        "is_correct": true,
        "smiles": "C=C[CH2+]"
      },
      {
        "option_id": "B",
        "text": "The $C2-C3$ bond, yielding the vinyl cation ($[CH_2=CH]^+$) at $m/z = 27$.",
        "is_correct": false,
        "smiles": "[CH+]=C"
      },
      {
        "option_id": "C",
        "text": "The $C3-C4$ bond, with the charge retained on the two-carbon fragment, giving the ethyl cation at $m/z = 29$.",
        "is_correct": false,
        "smiles": "[CH2+]C"
      },
      {
        "option_id": "D",
        "text": "The $C4-C5$ bond, losing a methyl radical to give the but-3-enyl cation ($[CH_2=CH-CH_2-CH_2]^+$) at $m/z = 55$.",
        "is_correct": false,
        "smiles": "C=CC[CH2+]"
      }
    ],
    "feedback": {
      "context": "Alkenes fragment where the resulting cation is best stabilized, and nothing beats a cation that is conjugated with the double bond. Breaking the bond one removed from the alkene, the allylic C-C bond, leaves a carbocation that resonance spreads across two carbons, so allylic cleavage is the characteristic fragmentation of alkenes.",
      "approach": "Step 1: Number 1-pentene: C1=C2 is the double bond, C3 is the allylic carbon, C4 and C5 continue the chain.\nStep 2: Identify the allylic bond: C3-C4. It joins the allylic carbon to the rest of the chain.\nStep 3: Break it homolytically and place the charge on the three-carbon fragment: CH2=CH-CH2+, the allyl cation, C3H5+, m/z 41. The ethyl radical carries away the other two carbons.\nStep 4: Check the alternatives: the charge on the ethyl side would give 29, a primary cation with no resonance; cleaving C2-C3 would give a vinyl cation, which is worse still.",
      "note": "The 41 peak is the allyl signature, but terminal alkenes also show a strong 55 and, for 1-pentene, an even-mass 42 from hydrogen rearrangement, so alkene spectra are rarely as clean as the single allylic cleavage suggests. The test of an alkene is the 41 peak together with a molecular ion two units below the alkane's.",
      "options": {
        "A": "Correct. Cleaving the allylic C3-C4 bond gives the resonance-stabilized allyl cation, C3H5+, at m/z 41.",
        "B": "Breaking C2-C3 would leave the positive charge on an sp2 carbon of the double bond, a vinyl cation with no resonance stabilization. That is among the least favourable cleavages available.",
        "C": "The allylic bond is the right one to break, but the charge stays with the fragment that makes the more stable cation. The allyl cation is delocalized; the ethyl cation is primary and localized, so 29 is minor.",
        "D": "Losing a methyl radical gives a primary but-3-enyl cation whose charge is two bonds from the double bond, out of conjugation. A 55 peak is seen in 1-pentene, but it is not the resonance-stabilized ion the question describes."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-carbon chain with a double bond between its first two carbons."
  },
  {
    "question_id": "ch12_q22_alcohol_alpha_cleavage",
    "topic": "Fragmentation patterns (alcohols)",
    "difficulty_level": "Hard",
    "question_text": "Under electron ionization conditions, 2-butanol ($CH_3-CH(OH)-CH_2-CH_3$) undergoes $\\alpha$-cleavage. Which of the following describes the most favorable $\\alpha$-cleavage pathway and the $m/z$ of the resulting peak?",
    "question_smiles": "CCC(C)O",
    "options": [
      {
        "option_id": "A",
        "text": "Cleavage of the $C2-C3$ bond to lose an ethyl radical, yielding the resonance-stabilized oxocarbenium ion $[CH_3-CH=OH]^+$ at $m/z = 45$.",
        "is_correct": true,
        "smiles": "CC=[OH+]"
      },
      {
        "option_id": "B",
        "text": "Cleavage of the $C1-C2$ bond to lose a methyl radical, yielding the oxocarbenium ion $[CH_3CH_2-CH=OH]^+$ at $m/z = 59$.",
        "is_correct": false,
        "smiles": "CCC=[OH+]"
      },
      {
        "option_id": "C",
        "text": "Cleavage of the $C2-O$ bond to lose a hydroxyl radical, yielding the sec-butyl cation at $m/z = 57$.",
        "is_correct": false,
        "smiles": "C[CH+]CC"
      },
      {
        "option_id": "D",
        "text": "Cleavage of the $C2-H$ bond to lose a hydrogen atom, yielding the oxocarbenium ion $[CH_3CH_2C(CH_3)=OH]^+$ at $m/z = 73$.",
        "is_correct": false,
        "smiles": "CCC(C)=[OH+]"
      }
    ],
    "feedback": {
      "context": "An alcohol radical cation cleaves the bond between the carbinol carbon and one of its neighbours, because the oxygen lone pair then stabilizes the resulting cation as an oxocarbenium ion, C=OH+. When the carbinol carbon has two different alkyl neighbours, the larger alkyl group is lost preferentially.",
      "approach": "Step 1: Locate the carbinol carbon of 2-butanol, C2, and list its three non-hydrogen neighbours: a methyl (C1), an ethyl (C3-C4) and the OH oxygen.\nStep 2: Write the two alpha-cleavages. Losing the ethyl radical leaves CH3-CH=OH+ (m/z 45); losing the methyl radical leaves CH3CH2-CH=OH+ (m/z 59). Both are oxocarbenium ions.\nStep 3: Apply the rule that the largest alkyl radical is lost most readily, because the larger radical is the more stable one to expel. The 45 ion dominates and is the base peak; 59 is present but smaller.\nStep 4: Set aside the non-alpha cleavages: C-O cleavage to a secondary carbocation and C-H cleavage to an M-1 ion both occur, but neither competes with alpha-cleavage in intensity.",
      "note": "The same ordering distinguishes isomeric alcohols: 2-butanol gives 45 as its base peak, 1-butanol gives 31 (the only alpha-cleavage available to a primary alcohol), and 2-methyl-2-propanol gives 59. Reading the base peak of a C4H10O alcohol identifies which isomer it is.",
      "options": {
        "A": "Correct. Alpha-cleavage expelling the larger ethyl radical leaves the oxocarbenium ion CH3CH=OH+ at 45, the base peak of 2-butanol.",
        "B": "This is a genuine alpha-cleavage and the 59 ion is observed, but the expulsion of the smaller methyl radical is the less favourable of the two. It gives a peak roughly a fifth the height of 45.",
        "C": "Losing the hydroxyl radical gives a secondary carbocation with no oxygen to stabilize it. The C-O cleavage is a minor pathway, and it is not an alpha-cleavage at all.",
        "D": "Loss of the carbinol hydrogen gives an oxocarbenium ion, but the M-1 peak of secondary alcohols is small. A hydrogen atom is a poor leaving radical compared with an ethyl group."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain with a hydroxyl group on its second carbon."
  },
  {
    "question_id": "ch12_q23_primary_alcohol_alpha_cleavage",
    "topic": "Fragmentation patterns (alcohols)",
    "difficulty_level": "Medium",
    "question_text": "Primary, unbranched alcohols such as 1-butanol show a highly characteristic fragment peak at $m/z = 31$. What is the structure of the cation responsible for this peak?",
    "question_smiles": "CCCCO",
    "options": [
      {
        "option_id": "A",
        "text": "$[H_2C=OH]^+$ (oxocarbenium ion)",
        "is_correct": true,
        "smiles": "C=[OH+]"
      },
      {
        "option_id": "B",
        "text": "$[CH_3-O]^+$ (methoxyl cation)",
        "is_correct": false,
        "smiles": "C[O+]"
      },
      {
        "option_id": "C",
        "text": "$[CH_3-OH]^{\\bullet+}$ (methanol radical cation)",
        "is_correct": false,
        "smiles": "C[OH+]"
      },
      {
        "option_id": "D",
        "text": "$[CH_2-OH]^{\\bullet}$ (hydroxymethyl radical)",
        "is_correct": false,
        "smiles": "[CH2]O"
      }
    ],
    "feedback": {
      "context": "A primary alcohol has only one carbon-carbon bond at its carbinol carbon, so it has only one alpha-cleavage available: the C1-C2 bond breaks, the alkyl radical leaves, and the one-carbon fragment that keeps the oxygen becomes the cation. That fragment is the same for every unbranched primary alcohol, which is what makes m/z 31 diagnostic.",
      "approach": "Step 1: Draw 1-butanol's radical cation with the unpaired electron and charge on oxygen.\nStep 2: Break the C1-C2 bond, the only alpha C-C bond. The propyl radical (43) departs.\nStep 3: Write the remaining ion: the carbon keeps two hydrogens and the OH, and the oxygen lone pair forms a pi bond to it: CH2=OH+, formula CH3O+, mass 12 + 3 + 16 = 31.\nStep 4: Recognize the stabilization: the ion is a resonance hybrid of +CH2-OH and CH2=OH+, with the charge partly on oxygen. That is why alpha-cleavage wins over other cleavages.",
      "note": "Ethers and amines give the same kind of ion: alpha-cleavage of an ether leaves CH2=OR+, and of an amine leaves CH2=NR2+. The amine version, m/z 30 for a primary amine, is the nitrogen analogue of the alcohol's 31 and is just as diagnostic.",
      "options": {
        "A": "Correct. Alpha-cleavage of the C1-C2 bond leaves CH2=OH+, formula CH3O+, at m/z 31, stabilized by the oxygen lone pair.",
        "B": "A methoxyl cation, CH3-O+, has the right mass but puts the positive charge on an oxygen with only six electrons, an oxenium ion far less stable than the oxocarbenium ion. It is not what alpha-cleavage produces.",
        "C": "The methanol radical cation is CH4O+, mass 32, not 31, and it would need a hydrogen to migrate onto the fragment as well. No such rearrangement is involved in the 31 peak.",
        "D": "The hydroxymethyl radical is neutral, and a mass spectrometer detects only ions. Alpha-cleavage sends the radical character off with the propyl fragment and leaves the oxygen-bearing carbon as the cation."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unbranched four-carbon chain ending in a hydroxyl group."
  },
  {
    "question_id": "ch12_q24_alcohol_dehydration",
    "topic": "Fragmentation patterns (alcohols)",
    "difficulty_level": "Medium",
    "question_text": "The mass spectrum of 1-pentanol ($C_5H_{12}O$, MW = 88) displays a prominent peak at $m/z = 70$. Which of the following processes explains the formation of this fragment?",
    "question_smiles": "CCCCCO",
    "options": [
      {
        "option_id": "A",
        "text": "Elimination of water ($M-18$) via a cyclic transition state, yielding a pentene radical cation $[C_5H_{10}]^{\\bullet+}$.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Alpha-cleavage yielding the $[CH_2=OH]^+$ fragment at $m/z = 31$.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Loss of ethylene ($M-28$) by a McLafferty-type rearrangement, giving a fragment at $m/z = 60$.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Direct cleavage of the C-O bond to yield the pentyl cation $[C_5H_{11}]^+$ at $m/z = 71$.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Alcohols show two characteristic fragmentations: alpha-cleavage, which gives an oxygen-containing cation, and dehydration, which removes 18 mass units as water. Dehydration in the gas phase is a rearrangement, not a simple bond break: a hydrogen on a carbon down the chain is transferred to the oxygen through a cyclic transition state and water departs.",
      "approach": "Step 1: Do the arithmetic. M = 88 and the peak is at 70; the difference is 18, the mass of H2O.\nStep 2: Identify what is left: C5H12O minus H2O is C5H10, an alkene radical cation. It keeps the odd electron, which is why the fragment has an even mass.\nStep 3: Explain how the water forms. The hydrogen comes from C4 (a 1,4-elimination through a six-membered transition state) rather than from the carbon next to the carbinol, so the alkene formed is not simply the one an acid-catalysed dehydration would give.\nStep 4: Expect the companions: 1-pentanol also shows 31 from alpha-cleavage and 42 and 55 from further loss from the 70 ion. The molecular ion at 88 is weak, as it is for most primary alcohols beyond C3.",
      "note": "Because both alpha-cleavage and dehydration compete, the molecular ion of an alcohol is often tiny or absent, and the highest visible peak can be M-18. Mistaking an M-18 peak for the molecular ion is the commonest error in reading an alcohol spectrum, so look for a 31, 45 or 59 alpha-cleavage ion to confirm.",
      "options": {
        "A": "Correct. Loss of 18 mass units from 88 is loss of water, leaving the C5H10 radical cation at 70; the hydrogen is delivered to oxygen through a cyclic transition state.",
        "B": "Alpha-cleavage of 1-pentanol does give CH2=OH+ and it is a strong peak, but it appears at m/z 31, not 70. The question asks about the peak 18 units below the molecular ion.",
        "C": "A McLafferty rearrangement needs a pi bond, usually a carbonyl, to accept the transferred hydrogen; an alcohol has none. Loss of 28 from 88 would give 60, and 1-pentanol shows no significant peak there.",
        "D": "Losing the hydroxyl radical gives the primary pentyl cation at 71, a minor ion. The peak in question is at 70, one unit lower, an even mass that signals a radical cation formed by losing a neutral molecule, not a radical."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "An unbranched five-carbon chain ending in a hydroxyl group."
  },
  {
    "question_id": "ch12_q25_tertiary_alcohol_cleavage",
    "topic": "Fragmentation patterns (alcohols)",
    "difficulty_level": "Hard",
    "question_text": "In the mass spectrum of 2-methyl-2-butanol, what is the structure and $m/z$ value of the base peak formed via $\\alpha$-cleavage?",
    "question_smiles": "CCC(C)(C)O",
    "options": [
      {
        "option_id": "A",
        "text": "$[(CH_3)_2C=OH]^+$ at $m/z = 59$, formed by loss of an ethyl radical.",
        "is_correct": true,
        "smiles": "CC(C)=[OH+]"
      },
      {
        "option_id": "B",
        "text": "$[CH_3CH_2C(CH_3)=OH]^+$ at $m/z = 73$, formed by loss of a methyl radical.",
        "is_correct": false,
        "smiles": "CCC(C)=[OH+]"
      },
      {
        "option_id": "C",
        "text": "$[C_5H_{10}]^{\\bullet+}$ at $m/z = 70$, formed by loss of water.",
        "is_correct": false,
        "smiles": "C=C(C)CC"
      },
      {
        "option_id": "D",
        "text": "$[C_5H_{11}]^+$ at $m/z = 71$, the tert-pentyl cation formed by cleavage of the C-O bond.",
        "is_correct": false,
        "smiles": "CC[C+](C)C"
      }
    ],
    "feedback": {
      "context": "A tertiary alcohol has three alkyl groups on its carbinol carbon, so alpha-cleavage has three choices, and the one that expels the largest alkyl radical wins. The molecular ion of a tertiary alcohol is usually absent altogether, because these cleavages are so easy.",
      "approach": "Step 1: List the groups on the carbinol carbon of 2-methyl-2-butanol: two methyls and one ethyl, plus OH.\nStep 2: Write the alpha-cleavages. Losing ethyl (29) from M = 88 leaves (CH3)2C=OH+ at 59. Losing methyl (15) leaves CH3CH2C(CH3)=OH+ at 73.\nStep 3: Rank them: the ethyl radical is the larger and more stable radical to lose, so 59 is the base peak and 73 is a smaller companion.\nStep 4: Note the mass check: C3H7O+ = 36 + 7 + 16 = 59, an odd mass for an even-electron cation containing no nitrogen, as expected.",
      "note": "Every tertiary alcohol with two methyls on its carbinol carbon gives 59 as a prominent ion, and 2-methyl-2-propanol gives it as the base peak with no molecular ion at all. The absence of M+ together with a strong 59 is a reliable tertiary-alcohol signature.",
      "options": {
        "A": "Correct. Alpha-cleavage expelling the ethyl radical, the largest alkyl group on the carbinol carbon, leaves the dimethyl-substituted oxocarbenium ion at 59.",
        "B": "Loss of a methyl radical is a genuine alpha-cleavage and 73 is seen, but the methyl is the smaller group. Expelling the larger ethyl radical is preferred, so 73 is a minor peak beside the 59 base peak.",
        "C": "Dehydration does occur and a 70 peak is present, but it is not the base peak. Alpha-cleavage to the oxocarbenium ion is faster than the rearrangement that removes water.",
        "D": "The tert-pentyl cation is C5H11+ at 71, formed by loss of the hydroxyl radical. It is a tertiary carbocation but lacks the oxygen stabilization of the oxocarbenium ions, and it appears only weakly."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain whose second carbon carries both a methyl group and a hydroxyl group."
  },
  {
    "question_id": "ch12_q26_cyclohexanol_fragmentation",
    "topic": "Fragmentation patterns (alcohols)",
    "difficulty_level": "Hard",
    "question_text": "The EI mass spectrum of cyclohexanol ($M^{\\bullet+} = 100$) exhibits a significant peak at $m/z = 57$. Which of the following sequences of events explains the formation of this fragment?",
    "question_smiles": "OC1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Alpha-cleavage of a ring C-C bond next to the carbinol carbon, then a hydrogen shift and cleavage of a second C-C bond to lose a propyl radical, forming $[CH_2=CH-CH=OH]^+$.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Formation of the butyl cation $[C_4H_9]^+$, a hydrocarbon ion of the same nominal mass, by ejecting the carbinol carbon and its oxygen as a neutral fragment.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Loss of the carbinol hydrogen to give $m/z = 99$, followed by expulsion of propene (42) from that ion to give $m/z = 57$.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Loss of a propyl radical directly from the intact ring in a single step, with no ring-opening.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A cyclic alcohol cannot lose an alkyl radical by one bond cleavage, because one break only opens the ring. Its alpha-cleavage therefore produces a ring-opened distonic ion, and a second step, a hydrogen shift followed by a second cleavage, is needed before a neutral fragment can leave. The product is the oxygen-containing ion at 57, not the hydrocarbon of the same mass.",
      "approach": "Step 1: Alpha-cleavage: break the ring bond between the carbinol carbon and its neighbour. The ring opens to an oxocarbenium ion at one end and a primary radical at the other; nothing has been lost yet, so the mass is still 100.\nStep 2: Shift a hydrogen from the chain onto the radical end, relocating the radical next to the oxocarbenium carbon so that a second cleavage becomes possible.\nStep 3: Break the C-C bond beta to the oxocarbenium carbon: a propyl radical (C3H7, 43) leaves and the ion CH2=CH-CH=OH+ remains, C3H5O+ = 36 + 5 + 16 = 57.\nStep 4: Recognize the ion: a conjugated, oxygen-stabilized cation, which is why 57 is the base peak of cyclohexanol.",
      "note": "Cyclohexanol also shows M-18 (82) and the 44 ion from a different ring-opening path, and its molecular ion at 100 is weak. The 57 ion is C3H5O+, not C4H9+; a high-resolution instrument separates the two by 0.036 mass units, but at unit resolution only the mechanism tells you which one you have.",
      "options": {
        "A": "Correct. Ring-opening alpha-cleavage, a hydrogen shift and loss of a propyl radical give the conjugated oxocarbenium ion at 57.",
        "B": "C4H9+ has the same nominal mass, 57, but it is not what cyclohexanol forms. The fragmentation is driven by the oxygen: the cation that survives is the one stabilized by the oxygen lone pair, and high-resolution measurement confirms the formula C3H5O+.",
        "C": "The M-1 ion of cyclohexanol is minor, and an even-electron ion at 99 has no radical site to drive a ring-opening loss of propene. The odd-electron molecular ion is what undergoes the alpha-cleavage sequence.",
        "D": "A propyl radical cannot leave an intact ring in one step; the three carbons are held by two ring bonds and both must break. Ring-opening has to come first, which is what alpha-cleavage accomplishes."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered carbon ring with a single hydroxyl group attached to one ring carbon."
  },
  {
    "question_id": "ch12_q27_mclafferty_butanal",
    "topic": "Fragmentation patterns (ketones/aldehydes)",
    "difficulty_level": "Hard",
    "question_text": "Butanal ($CH_3CH_2CH_2CHO$, MW = 72) undergoes a McLafferty rearrangement. What are the structures and masses of the neutral alkene and the radical cation product formed?",
    "question_smiles": "CCCC=O",
    "options": [
      {
        "option_id": "A",
        "text": "Neutral ethylene ($CH_2=CH_2$, MW = 28) and the enol radical cation of acetaldehyde ($[CH_2=CH-OH]^{\\bullet+}$, $m/z = 44$).",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Neutral ethylene (MW = 28) and the acetaldehyde radical cation $[CH_3CH=O]^{\\bullet+}$ ($m/z = 44$), formed without any hydrogen transfer.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Neutral vinyl alcohol ($CH_2=CHOH$, MW = 44) and the ethylene radical cation $[CH_2=CH_2]^{\\bullet+}$ ($m/z = 28$).",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Neutral propene ($CH_3CH=CH_2$, MW = 42) and the formaldehyde radical cation $[CH_2=O]^{\\bullet+}$ ($m/z = 30$), by transfer of the gamma-hydrogen and cleavage of the $C1-C2$ bond.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The McLafferty rearrangement is a six-membered transfer of a hydrogen from the gamma carbon to the carbonyl oxygen, followed by cleavage of the bond between the alpha and beta carbons. The carbonyl fragment keeps the charge and the odd electron, as an enol radical cation, and the rest of the chain leaves as a neutral alkene.",
      "approach": "Step 1: Label butanal: C1 is the aldehyde carbon, C2 alpha, C3 beta, C4 gamma. The gamma carbon is the terminal methyl, and it has hydrogens, so the rearrangement is possible.\nStep 2: Transfer one C4 hydrogen to the carbonyl oxygen through a six-membered ring made of O, C1, C2, C3, C4 and that hydrogen.\nStep 3: Break the C2-C3 bond. C3 and C4 leave together as ethylene, CH2=CH2, mass 28.\nStep 4: Write what remains: C1 with its H and the OH, double-bonded to C2 which now has two hydrogens: CH2=CH-OH, the enol of acetaldehyde, as a radical cation. Its mass is 72 - 28 = 44, even, as an odd-electron ion should be.",
      "note": "Even-mass fragments are the tell-tale of a rearrangement in a compound without nitrogen, because simple bond cleavage always gives odd-mass even-electron ions. A 44 peak in an aldehyde, 58 in a methyl ketone, or 60 in a carboxylic acid is the McLafferty ion and marks a chain long enough to have a gamma hydrogen.",
      "options": {
        "A": "Correct. Gamma-hydrogen transfer to oxygen and alpha-beta cleavage expel ethylene and leave the acetaldehyde enol radical cation at 44.",
        "B": "The ion does have mass 44, but it cannot be the keto form. The hydrogen that migrated arrives on oxygen, not on carbon, and the carbon-carbon double bond forms where the beta carbon used to be attached; the product is the enol, not acetaldehyde itself.",
        "C": "The charge and odd electron stay with the oxygen-containing fragment, whose enol form is well stabilized. Ethylene has a higher ionization energy and leaves as the neutral; a 28 peak in butanal is minor.",
        "D": "This breaks the wrong bond. The bond cleaved in a McLafferty rearrangement is the one between the alpha and beta carbons, C2-C3, not the bond to the carbonyl carbon; cleaving C1-C2 would not close the six-membered transition state."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon chain ending in an aldehyde carbon that carries a double-bonded oxygen."
  },
  {
    "question_id": "ch12_q28_mclafferty_pentanone",
    "topic": "Fragmentation patterns (ketones/aldehydes)",
    "difficulty_level": "Hard",
    "question_text": "In the mass spectrum of 2-pentanone ($CH_3COCH_2CH_2CH_3$, MW = 86), a prominent peak is observed at $m/z = 58$. What is the identity of this fragment?",
    "question_smiles": "CCCC(C)=O",
    "options": [
      {
        "option_id": "A",
        "text": "The enol radical cation of acetone, $[CH_2=C(OH)CH_3]^{\\bullet+}$, formed by McLafferty rearrangement with loss of ethylene.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The acylium ion, $[CH_3CO]^+$, formed by alpha-cleavage.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The propyl carbocation, $[CH_3CH_2CH_2]^+$, formed by alpha-cleavage.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The enol radical cation of acetaldehyde, $[CH_2=CH(OH)]^{\\bullet+}$, formed by loss of propene.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Ketones fragment two ways: alpha-cleavage on either side of the carbonyl gives acylium ions of odd mass, and a chain long enough to carry a gamma hydrogen undergoes the McLafferty rearrangement to give an even-mass enol radical cation. The 58 peak of 2-pentanone is the second kind.",
      "approach": "Step 1: Do the mass arithmetic: 86 - 58 = 28, the mass of ethylene. An even-mass loss from an even-mass molecular ion means a neutral molecule left and the odd electron stayed behind.\nStep 2: Find the gamma hydrogen. On the propyl side, C3 is alpha, C4 beta, C5 gamma; C5 is a methyl with three hydrogens. The methyl on the other side is alpha only.\nStep 3: Transfer a C5 hydrogen to the carbonyl oxygen and break C3-C4. C4 and C5 depart as ethylene.\nStep 4: The remaining ion is CH2=C(OH)-CH3, the enol of acetone, as a radical cation: C3H6O = 58. It sits beside the alpha-cleavage ions at 43 (CH3CO+, the base peak) and 71 (C3H7CO+).",
      "note": "The pair of peaks 43 and 58 is the signature of a methyl ketone with at least a propyl chain: 43 says CH3C=O+, and 58 says a gamma hydrogen was available. 3-Pentanone, the isomer with two ethyl groups, has no gamma carbon and shows no 58 at all, so this one peak separates the two isomers.",
      "options": {
        "A": "Correct. Gamma-hydrogen transfer from C5 and cleavage of C3-C4 expel ethylene, leaving the acetone enol radical cation at 86 - 28 = 58.",
        "B": "The acetyl cation is m/z 43 and is the base peak of 2-pentanone, but it is an odd-mass even-electron ion from simple alpha-cleavage. The question asks about the even-mass peak at 58.",
        "C": "The propyl cation is also m/z 43, sharing that peak with CH3CO+. Neither is 58, and neither arises from a rearrangement; both come from breaking one bond at the carbonyl.",
        "D": "Losing propene (42) would give 86 - 42 = 44. That is the McLafferty ion of an aldehyde such as butanal, whose rearrangement leaves only the carbonyl carbon and one CH2 behind. In 2-pentanone the methyl on the carbonyl stays, giving 58."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-carbon chain with a carbonyl oxygen on its second carbon."
  },
  {
    "question_id": "ch12_q29_mclafferty_requirements",
    "topic": "Fragmentation patterns (ketones/aldehydes)",
    "difficulty_level": "Medium",
    "question_text": "Which of the following carbonyl compounds is structurally INCAPABLE of undergoing a McLafferty rearrangement?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "3-Methyl-2-butanone",
        "smiles": "CC(C)C(C)=O",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "3-Methylpentanal",
        "smiles": "CCC(C)CC=O",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Hexanone",
        "smiles": "CCCCC(C)=O",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Butanoic acid",
        "smiles": "CCCC(=O)O",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The McLafferty rearrangement has a structural prerequisite: a hydrogen on the gamma carbon, three carbons away from the carbonyl carbon, so that a six-membered transition state can deliver it to the oxygen. A carbonyl compound whose chains stop at the beta carbon on every side cannot rearrange, whatever its other features.",
      "approach": "Step 1: For each compound, walk out from the carbonyl carbon on every side: alpha, beta, gamma. Ask whether a gamma carbon exists and whether it carries hydrogen.\nStep 2: 3-Methyl-2-butanone, CH3-CO-CH(CH3)2. The methyl side is alpha only. The isopropyl side has an alpha CH and two beta methyls, and stops there. No gamma carbon anywhere.\nStep 3: 3-Methylpentanal: from the CHO, C2 is alpha, C3 beta, and C4 (and the methyl branch on C3) are gamma carbons with hydrogens. Capable.\nStep 4: 2-Hexanone: the butyl side reaches C5 as gamma. Capable, giving the 58 ion. Butanoic acid: C4 is gamma. Capable, giving the 60 ion characteristic of acids.",
      "note": "Ring size is what matters, not chain length as such: the hydrogen must be exactly three carbons from the carbonyl carbon. A hydrogen on a delta carbon is one atom too far for the six-membered transition state and does not rearrange in the same way, and a beta hydrogen is one too near.",
      "options": {
        "A": "Correct. Both chains of 3-methyl-2-butanone end at the beta position, so no gamma hydrogen exists and the six-membered transition state cannot form.",
        "B": "3-Methylpentanal has a gamma carbon on both the main chain and the branch at C3, each carrying hydrogens. It rearranges readily, expelling but-2-ene and giving the 44 ion.",
        "C": "2-Hexanone has an unbranched butyl chain on the carbonyl, with C5 as the gamma carbon. It is a textbook McLafferty substrate, giving the acetone enol radical cation at 58.",
        "D": "Butanoic acid's chain places a CH3 at the gamma position. Carboxylic acids rearrange like ketones, losing ethylene to give the acid enol radical cation at m/z 60."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q30_ketone_alpha_cleavage",
    "topic": "Fragmentation patterns (ketones/aldehydes)",
    "difficulty_level": "Medium",
    "question_text": "When 3-pentanone ($CH_3CH_2COCH_2CH_3$, MW = 86) undergoes electron ionization, it yields a major fragment peak at $m/z = 57$. What is the structure and name of this fragment?",
    "question_smiles": "CCC(=O)CC",
    "options": [
      {
        "option_id": "A",
        "text": "$[CH_3CH_2C\\equiv O]^+$; the propanoyl acylium ion.",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$[CH_3CH_2CH_2CH_2]^+$; the butyl carbocation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$[CH_2=C(OH)CH_3]^{\\bullet+}$; the acetone enol radical cation.",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$[CH_3CH_2]^+$; the ethyl carbocation.",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Alpha-cleavage of a ketone breaks a bond between the carbonyl carbon and an alkyl group, expelling that group as a radical and leaving an acylium ion, R-C=O+, which is stabilized by the oxygen lone pair (R-C triple bond O+ in its second resonance form). It gives an odd-mass, even-electron ion, and for a symmetrical ketone there is only one such ion.",
      "approach": "Step 1: Do the arithmetic: 86 - 57 = 29, the mass of an ethyl radical. An odd-mass fragment from an even-mass molecular ion means a radical was lost and the ion is even-electron.\nStep 2: Identify the cleavage: the bond between the carbonyl carbon and one ethyl group. Both sides of 3-pentanone are ethyl, so either bond gives the same ion.\nStep 3: Write the ion: CH3CH2-C=O+, the propanoyl acylium ion, C3H5O+ = 36 + 5 + 16 = 57.\nStep 4: Check what is absent: 3-pentanone has no gamma carbon (each chain is only alpha and beta), so there is no McLafferty peak at 58 or 72. The spectrum is dominated by 57, 29 and the molecular ion at 86.",
      "note": "The acylium ion is the ketone equivalent of the alcohol's oxocarbenium ion: in both cases the oxygen lone pair stabilizes a positive charge on the adjacent carbon. Acylium ions are so stable that 43 (acetyl) and 57 (propanoyl) are among the commonest peaks in the spectra of oxygen compounds.",
      "options": {
        "A": "Correct. Loss of an ethyl radical from the carbonyl carbon leaves the propanoyl acylium ion, CH3CH2C=O+, at 57.",
        "B": "The butyl cation is C4H9+ and also has mass 57, but forming it from 3-pentanone would require ejecting the carbonyl oxygen and a carbon as a neutral fragment. The oxygen-stabilized acylium ion is what alpha-cleavage actually gives.",
        "C": "The acetone enol radical cation is the McLafferty product of methyl ketones with a gamma hydrogen, mass 58. 3-Pentanone has no gamma carbon, so it cannot rearrange, and 58 is not 57 in any case.",
        "D": "The ethyl cation is the other possible product of the same bond cleavage, but the charge stays with the fragment better able to bear it. The acylium ion is oxygen-stabilized; the primary ethyl cation is not, so 29 is the smaller peak."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A five-carbon chain with a carbonyl oxygen on its middle carbon."
  },
  {
    "question_id": "ch12_q31_mclafferty_esters",
    "topic": "Fragmentation patterns (ketones/aldehydes)",
    "difficulty_level": "Hard",
    "question_text": "Ethyl butyrate ($CH_3CH_2CH_2COOCH_2CH_3$, MW = 116) can undergo a McLafferty rearrangement. Which of the following represents the $m/z$ and structure of the radical cation product formed when the rearrangement occurs on the acyl (butyrate) side of the ester?",
    "question_smiles": "CCCC(=O)OCC",
    "options": [
      {
        "option_id": "A",
        "text": "$m/z = 88$; the enol radical cation of ethyl acetate, $[CH_2=C(OH)OCH_2CH_3]^{\\bullet+}$.",
        "smiles": "CCOC(O)=C",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$m/z = 60$; the enol radical cation of acetic acid, $[CH_2=C(OH)OH]^{\\bullet+}$.",
        "smiles": "OC(O)=C",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$m/z = 74$; the enol radical cation of methyl acetate, $[CH_2=C(OH)OCH_3]^{\\bullet+}$.",
        "smiles": "COC(O)=C",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$m/z = 28$; the ethylene radical cation, $[CH_2=CH_2]^{\\bullet+}$.",
        "smiles": "C=C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An ester has two chains that can supply a gamma hydrogen: the acyl chain on the carbonyl carbon and the alkyl chain on the ester oxygen. A McLafferty rearrangement on the acyl side works exactly as it does in a ketone, transferring a hydrogen from the acyl gamma carbon to the carbonyl oxygen and expelling an alkene from the acyl chain.",
      "approach": "Step 1: Label the butyrate chain: the carbonyl carbon, then alpha (C2), beta (C3) and gamma (C4, a methyl with hydrogens).\nStep 2: Transfer a C4 hydrogen to the carbonyl oxygen and break the C2-C3 bond. C3 and C4 leave as ethylene, 28.\nStep 3: Write the ion: the carbonyl carbon keeps its OEt group and the new OH, and is double-bonded to C2, now a CH2: CH2=C(OH)OCH2CH3, the enol of ethyl acetate, as a radical cation. Mass 116 - 28 = 88.\nStep 4: Recognize the companions: alpha-cleavage gives the butanoyl acylium ion at 71 (the base peak) and 43; a second McLafferty loss of ethylene from 88, this time from the ethoxy side, gives 60.",
      "note": "Methyl esters, which have no gamma hydrogen on the alkoxy side, rearrange only on the acyl side and give the methyl acetate enol ion at 74. Ethyl and longer esters can rearrange on both sides, so their spectra show the acyl-side ion and, one ethylene lower, the doubly rearranged ion.",
      "options": {
        "A": "Correct. Acyl-side rearrangement expels ethylene from the butyrate chain and leaves the ethyl acetate enol radical cation at 88.",
        "B": "The acetic acid enol ion at 60 is real, but it is the product of two successive rearrangements: after the acyl-side loss of ethylene, the ethoxy group loses a second ethylene. The question asks for the first, acyl-side product.",
        "C": "The methyl acetate enol ion would need a methoxy group on the ester. Ethyl butyrate keeps its ethoxy group through the acyl-side rearrangement, so the ion is 14 units heavier, at 88.",
        "D": "Ethylene is the neutral molecule expelled, not the ion. The charge and odd electron stay on the oxygen-rich fragment, whose enol form is the more stable radical cation; a 28 peak is minor."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A four-carbon acyl chain joined through an ester oxygen to a two-carbon ethyl group."
  },
  {
    "question_id": "ch12_q32_cyclic_ketone_cleavage",
    "topic": "Fragmentation patterns (ketones/aldehydes)",
    "difficulty_level": "Hard",
    "question_text": "Cyclohexanone ($M^{\\bullet+} = 98$) undergoes alpha-cleavage followed by hydrogen transfer and fragmentation to yield a significant peak at $m/z = 55$. What is the structure of this ion?",
    "question_smiles": "O=C1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "$[CH_2=CH-C\\equiv O]^+$; the acryloyl cation.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$[C_4H_7]^+$, a hydrocarbon ion of the same nominal mass, formed by expelling the carbonyl carbon and its oxygen together with one hydrogen.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "$[CH_2=C(OH)CH_3]^{\\bullet+}$; the enol radical cation of acetone, $m/z = 58$, formed by McLafferty rearrangement.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$[C_4H_7]^+$; the cyclobutyl cation, formed by loss of carbon monoxide (28) followed by loss of a methyl radical (15).",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A cyclic ketone cannot expel an alkyl radical by one alpha-cleavage, because the alkyl group is part of the ring. Alpha-cleavage opens the ring to a distonic ion; a hydrogen shift then puts the radical where a second cleavage can eject a neutral alkyl radical, leaving an acylium ion that still carries the oxygen.",
      "approach": "Step 1: Alpha-cleavage: break one ring bond next to the carbonyl. The ring opens to an acylium ion at one end and a primary radical at the other end of a four-carbon chain; the mass is still 98.\nStep 2: Shift a hydrogen from the carbon next to the acylium group onto the radical end, relocating the radical beside the carbonyl.\nStep 3: Break the C-C bond beta to the acylium carbon: a propyl radical (43) leaves. The ion left is CH2=CH-C=O+, the acryloyl cation, C3H3O+ = 36 + 3 + 16 = 55.\nStep 4: Confirm with the arithmetic: 98 - 43 = 55, an odd mass for an even-electron ion, and the base peak of cyclohexanone.",
      "note": "Cyclohexanone also shows 42 (C3H6 radical cation from the same ring-opened ion), 69 and 70, and a clear molecular ion at 98. The 55 ion is C3H3O+, not C4H7+; both have nominal mass 55, and only high resolution (55.018 versus 55.055) or the mechanism separates them.",
      "options": {
        "A": "Correct. Ring-opening alpha-cleavage, a hydrogen shift and loss of a propyl radical leave the acryloyl cation, CH2=CH-C=O+, at 55.",
        "B": "A hydrocarbon C4H7+ has the same nominal mass, but forming it would discard the oxygen that drives every step of the fragmentation. The 55 ion of cyclohexanone retains the oxygen, as its exact mass shows.",
        "C": "A McLafferty rearrangement in a ring would give an even-mass ion at 70 (98 - 28) rather than 58, and the acetone enol ion at 58 needs a methyl on the carbonyl that cyclohexanone does not have. Either way, 58 is not 55.",
        "D": "The masses add up, but the sequence does not happen: loss of CO from an intact ketone radical cation is not a favourable first step, and the cyclobutyl cation is not especially stable. The oxygen stays in the 55 ion."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered carbon ring with a carbonyl oxygen on one ring carbon."
  },
  {
    "question_id": "ch12_q33_ir_active_dipole",
    "topic": "Infrared Spectroscopy Basics",
    "difficulty_level": "Easy",
    "question_text": "Why is the $C\\equiv C$ stretch of 3-hexyne, and likewise the $C=C$ stretch of trans-3-hexene, absent or extremely weak in the infrared spectrum?",
    "question_smiles": "CCC#CCC",
    "options": [
      {
        "option_id": "A",
        "text": "The vibration is symmetric: the molecular dipole moment does not change during the stretch, so the mode is IR-inactive.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The triple bond is too strong to be excited by infrared radiation.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The absorption falls in the fingerprint region, where it is obscured by C-C single-bond stretches.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Symmetrical alkenes and alkynes absorb only in the ultraviolet, where their pi electrons are excited.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Infrared light is absorbed only by a vibration that changes the molecule's dipole moment, because the oscillating electric field of the light must have an oscillating dipole to push against. The intensity of a band scales with the size of that dipole change, and for a perfectly symmetric stretch the change is zero.",
      "approach": "Step 1: Look at what sits on each end of the triple bond in 3-hexyne: an ethyl group on both sides. The molecule is symmetric about the centre of the bond.\nStep 2: Stretch the triple bond. Each half moves outward by the same amount, so any small bond dipoles cancel exactly before, during and after the motion. The net dipole stays zero.\nStep 3: Apply the selection rule: no change in dipole, no coupling to the light, no absorption. The mode is IR-inactive, though it is active in Raman spectroscopy.\nStep 4: Extend to trans-3-hexene: the same argument applies to its C=C stretch, which is why trans-disubstituted alkenes with identical groups show little or no band near 1670.",
      "note": "Break the symmetry and the band returns, weakly: 2-hexyne shows a small C-C triple bond stretch, and a terminal alkyne shows a medium one at 2120 plus a strong sharp C-H at 3300. Nitriles, with a large bond dipole, absorb strongly at 2250 for the same reason in reverse.",
      "options": {
        "A": "Correct. A symmetric stretch produces no change in dipole moment, so it cannot absorb infrared light; the band is missing for symmetrical internal alkynes and alkenes.",
        "B": "Bond strength sets the position of a band, not whether it exists. A triple bond absorbs near 2100 to 2260 whenever the stretch changes the dipole; 1-hexyne shows its triple-bond band clearly.",
        "C": "The triple-bond region, 2100 to 2260, lies well above the fingerprint region and is otherwise nearly empty. A band there would not be hidden by anything; it is simply not produced.",
        "D": "Ultraviolet absorption excites electrons, and the molecule absorbs there as well, but that has no bearing on whether its vibrations absorb in the infrared. The triple bond does vibrate; the vibration is just invisible to IR."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-carbon chain with a triple bond between its two central carbons, so that the two ends of the molecule are identical."
  },
  {
    "question_id": "ch12_q34_hookes_law_decrease",
    "topic": "Infrared Spectroscopy Basics",
    "difficulty_level": "Medium",
    "question_text": "According to Hooke's Law, the stretching vibrational frequency ($\\tilde{\\nu}$) of a diatomic system depends on the bond force constant ($f$) and the reduced mass ($\\mu$). Which of the following changes will result in a DECREASE in the stretching frequency?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Decreasing the bond strength (force constant $f$) or increasing the masses of the bonded atoms (increasing reduced mass $\\mu$).",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Increasing the bond strength or decreasing the masses of the bonded atoms.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Going from a C-C single bond to a C=C double bond between the same two carbons.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Diluting an alcohol in $CCl_4$ so that its hydrogen bonds are broken.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Hooke's law treats a bond as a spring between two masses: the frequency rises with the square root of the force constant and falls with the square root of the reduced mass. Every trend in the IR correlation chart, from the C-H stretches near 3000 down to C-Cl near 700, follows from these two variables.",
      "approach": "Step 1: Write the relation: wavenumber is proportional to the square root of f divided by the reduced mass.\nStep 2: Vary the force constant: a weaker bond has a smaller f and a lower wavenumber. This is why C-C (1200) sits below C=C (1650) sits below C-C triple bonds (2150).\nStep 3: Vary the mass: heavier atoms give a larger reduced mass and a lower wavenumber. This is why C-H (3000) sits far above C-C (1200), and C-Cl (700) below C-O (1100).\nStep 4: Combine them: anything that weakens the bond or adds mass lowers the frequency; anything that strengthens it or removes mass raises it.",
      "note": "The two effects can be separated experimentally. Replacing H by D changes only the mass and drops a C-H stretch from 2900 to about 2150. Hydrogen bonding changes only the force constant, weakening O-H and dropping its stretch from 3600 to about 3300 while broadening it.",
      "options": {
        "A": "Correct. A smaller force constant or a larger reduced mass both lower the square-root expression, so the stretching frequency decreases.",
        "B": "This is exactly reversed. A stiffer bond or lighter atoms raise the frequency; that is why the light hydrogen atom puts every X-H stretch at the high-wavenumber end of the spectrum.",
        "C": "A double bond is stiffer than a single bond, with a larger force constant, and it absorbs at a higher wavenumber: about 1650 against about 1200 for the single bond.",
        "D": "Breaking the hydrogen bonds strengthens the O-H bond, so its stretch moves up, from a broad band near 3300 to a sharp one near 3600. Hydrogen bonding is what lowers the frequency, not its removal."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q35_deuterium_shift",
    "topic": "Infrared Spectroscopy Basics",
    "difficulty_level": "Medium",
    "question_text": "Given that deuterium ($^{2}\\text{H}$ or $\\text{D}$) has twice the atomic mass of protium ($^{1}\\text{H}$), how does the stretching frequency of a $C-D$ bond compare to that of a $C-H$ bond, assuming their bond strengths are nearly identical?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The $C-D$ bond stretches at a lower wavenumber ($\\sim 2100-2200\\text{ cm}^{-1}$) compared to the $C-H$ bond ($\\sim 2850-3000\\text{ cm}^{-1}$) because of its larger reduced mass.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The $C-D$ bond stretches at a higher wavenumber ($\\sim 3900\\text{ cm}^{-1}$), because the heavier isotope makes the bond stronger.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both bonds stretch at the same wavenumber, because they have the same force constant.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The $C-D$ bond stretches at about $1450\\text{ cm}^{-1}$, half the $C-H$ value, because the mass of the hydrogen has doubled.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Isotopic substitution is the cleanest test of Hooke's law, because it changes the mass without touching the electrons that set the force constant. Doubling the mass of the light atom does not double the reduced mass, and the frequency depends on the square root of the reduced mass, so the shift is smaller than intuition suggests.",
      "approach": "Step 1: Compute the reduced masses. C-H: (12 x 1)/(12 + 1) = 0.923. C-D: (12 x 2)/(12 + 2) = 1.714.\nStep 2: Take the ratio of frequencies as the square root of the inverse ratio of reduced masses: the square root of (0.923/1.714) = the square root of 0.538 = 0.734.\nStep 3: Multiply: 2900 x 0.734 = about 2130. The C-D stretch lands near 2100 to 2200.\nStep 4: Note where that falls: in the otherwise empty triple-bond region, which is why a C-D band is so easy to spot.",
      "note": "This is the basis of using deuterated solvents in IR and NMR: CDCl3 has no C-H stretch to hide a sample's bands. It is also why a deuterium label can be followed by IR, since the labelled position moves its stretch out of the crowded 3000 region into a clear window.",
      "options": {
        "A": "Correct. The reduced mass nearly doubles, its square root rises by a factor of 1.36, and the frequency falls by that factor, from about 2900 to about 2130.",
        "B": "Isotopes share the same electrons, so the C-D and C-H bonds have essentially the same force constant. Extra mass lowers a vibrational frequency; it cannot raise it.",
        "C": "The force constants are indeed the same, but the frequency depends on mass as well. A heavier atom on the same spring vibrates more slowly, which is the whole content of Hooke's law.",
        "D": "The mass of the hydrogen doubles, but the reduced mass rises only from 0.923 to 1.714, and the frequency scales with the square root of that ratio, giving a factor of 0.73, not 0.5."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q36_stretching_vs_bending",
    "topic": "Infrared Spectroscopy Basics",
    "difficulty_level": "Easy",
    "question_text": "In infrared spectroscopy, why do stretching vibrations generally require higher energy (absorb at higher wavenumbers) than bending vibrations for the same group of atoms?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "It requires more energy to compress or stretch a chemical bond along its axis (greater force constant) than it does to change the bond angle (lower force constant).",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Bending vibrations involve a larger reduced mass, because more atoms move at once.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Stretching vibrations always produce a larger change in dipole moment.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Bending vibrations are overtones of the stretching vibrations, so they appear at lower energy.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A molecule vibrates in two families of motion: stretches, which change bond lengths, and bends, which change bond angles. Changing a bond length works directly against the bond's electrons, so the restoring force is large; changing an angle disturbs the bonding much less, so the restoring force is small, and in Hooke's law a smaller force constant means a lower frequency.",
      "approach": "Step 1: Pick one group, say a CH2 unit. Its C-H stretches absorb near 2850 to 2960; its scissoring bend absorbs near 1465.\nStep 2: Note that the same atoms are moving in both cases, so the reduced mass is not what differs. The force constant is.\nStep 3: Compare the force constants: a C-H stretch has a force constant roughly ten times that of an H-C-H bend, and the square root of ten is about 3, which is the ratio of the two wavenumbers.\nStep 4: Generalize: for any group, the bends lie below the stretches, which is why the region below 1500 is crowded with bending modes and the region above it holds the stretches.",
      "note": "The one place bends matter for identification is the fingerprint region and the out-of-plane C-H bends of alkenes and arenes near 700 to 1000, whose positions report the substitution pattern. Everywhere else the diagnostic bands are stretches.",
      "options": {
        "A": "Correct. Bond lengths resist change far more stiffly than bond angles, so stretching modes have the larger force constant and the higher frequency.",
        "B": "The same atoms take part in the stretch and the bend of a given group, so the reduced mass is essentially the same. The difference between them is entirely in the force constant.",
        "C": "The size of the dipole change sets how intense a band is, not where it appears. Some bends, such as the out-of-plane C-H bends of alkenes, are among the strongest bands in a spectrum, yet they sit below 1000.",
        "D": "Overtones appear at roughly twice the fundamental frequency, higher in energy, not lower, and they are weak. Bends are independent fundamental vibrations of the molecule, not harmonics of the stretches."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q38_hydroxyl_hydrogen_bonding",
    "topic": "Infrared stretching frequencies",
    "difficulty_level": "Medium",
    "question_text": "A dilute solution of cyclohexanol in carbon tetrachloride ($CCl_4$) exhibits a sharp IR absorption band at $3620\\text{ cm}^{-1}$. As the concentration of cyclohexanol is increased, a broad, intense band at $3300\\text{ cm}^{-1}$ emerges. Which statement correctly explains this observation?",
    "question_smiles": "OC1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "The band at $3620\\text{ cm}^{-1}$ corresponds to 'free' (non-hydrogen-bonded) O-H stretching, while the broad band at $3300\\text{ cm}^{-1}$ corresponds to hydrogen-bonded O-H stretching, which weakens the O-H bond.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The band at $3620\\text{ cm}^{-1}$ is the hydrogen-bonded O-H and the band at $3300\\text{ cm}^{-1}$ the free O-H: hydrogen bonding strengthens the O-H bond and raises its frequency.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The broad band at $3300\\text{ cm}^{-1}$ is water absorbed from the air by the more concentrated solution.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "At higher concentration cyclohexanol dehydrates to cyclohexene, and the broad band is the alkene C-H stretch.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The O-H stretch is the one band whose shape depends on the sample's surroundings. An isolated hydroxyl group gives a sharp band near 3600; a hydrogen-bonded one gives a broad, strong band centred near 3300. Hydrogen bonding lends some of the O-H bond's electron density to the acceptor, weakening the bond and lowering its force constant.",
      "approach": "Step 1: In dilute CCl4 solution, cyclohexanol molecules are far apart and CCl4 cannot accept a hydrogen bond. Each O-H is free, all in the same environment, so one sharp band appears at 3620.\nStep 2: Raise the concentration and molecules meet. O-H groups hydrogen-bond to neighbouring oxygens, the O-H bond weakens, and its stretch drops to about 3300.\nStep 3: Explain the width: the hydrogen bonds vary in length and angle from molecule to molecule, giving a spread of force constants and therefore a spread of frequencies that merge into one broad band.\nStep 4: Recognize the sample-dependence: the neat liquid or a KBr disc shows only the broad band, so a sharp 3620 band is itself evidence of a dilute, non-polar solvent.",
      "note": "The same reasoning explains why amines show sharper, weaker N-H bands (weaker hydrogen bonds) and why carboxylic acids, which form doubly hydrogen-bonded dimers, show an O-H band so broad it stretches from 2500 to 3300 and swallows the C-H stretches.",
      "options": {
        "A": "Correct. Dilution isolates the hydroxyl groups and gives the sharp free O-H band at 3620; association at higher concentration weakens the O-H bond and gives the broad hydrogen-bonded band at 3300.",
        "B": "The assignments are backwards. A hydrogen bond pulls electron density away from the O-H bond and weakens it, and a weaker bond has a lower force constant and a lower frequency, so the hydrogen-bonded O-H is the 3300 band.",
        "C": "Water in CCl4 would give its own bands, but they would not grow with the cyclohexanol concentration and they would not require any change in the alcohol's spectrum. The 3300 band tracks the alcohol, not the atmosphere.",
        "D": "Nothing dehydrates an alcohol at room temperature in CCl4, and an alkene C-H stretch is a sharp, weak band at 3020 to 3100, not a broad, strong one at 3300."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered ring drawn as a hexagon, with a hydroxyl group on one corner and no other substituents."
  },
  {
    "question_id": "ch12_q39_amine_stretching",
    "topic": "Infrared stretching frequencies",
    "difficulty_level": "Medium",
    "question_text": "How can IR spectroscopy be used to distinguish between a primary amine ($R-NH_2$) and a secondary amine ($R_2NH$)?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Primary amines show two distinct N-H stretching bands (symmetric and asymmetric) in the $3300-3500\\text{ cm}^{-1}$ region, whereas secondary amines show only a single N-H stretching band.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Primary amines show one N-H band and secondary amines two, because the second alkyl group adds a coupled vibration.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Primary amines absorb near $3300\\text{ cm}^{-1}$ and secondary amines near $1650\\text{ cm}^{-1}$.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "They cannot be distinguished by IR; only NMR integration of the N-H signal separates them.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two identical bonds on one atom do not vibrate independently; they couple into a symmetric stretch, in which both lengthen together, and an asymmetric stretch, in which one lengthens as the other shortens. The two modes have different energies and give two bands. One N-H bond can only stretch one way and gives one band; no N-H bond gives none.",
      "approach": "Step 1: Count the N-H bonds. A primary amine RNH2 has two; a secondary amine R2NH has one; a tertiary amine R3N has none.\nStep 2: Two N-H bonds couple into a symmetric and an asymmetric stretch, near 3300 and 3400, so a primary amine shows a pair of medium, moderately sharp bands.\nStep 3: One N-H bond gives a single band near 3300 to 3350, usually weak, for a secondary amine.\nStep 4: Confirm with the bending region: a primary amine also shows an N-H scissoring bend near 1600 that the secondary amine lacks, and a tertiary amine shows nothing in either place.",
      "note": "The same two-band rule identifies primary amides (two N-H bands beside the amide C=O) and helps with alcohols, whose single O-H gives one band. Amine N-H bands are sharper and weaker than the alcohol O-H band, because N-H hydrogen bonds are weaker than O-H ones.",
      "options": {
        "A": "Correct. The two N-H bonds of a primary amine couple into symmetric and asymmetric stretches, giving two bands; a secondary amine's single N-H gives one.",
        "B": "The count runs the other way. Bands come from N-H bonds, not from alkyl groups: two N-H bonds give two coupled stretches, one N-H bond gives one, and the alkyl groups contribute nothing in this region.",
        "C": "Both amine types have N-H stretches in the 3300 to 3500 region. The band near 1600 in a primary amine is its N-H scissoring bend, an additional feature, not a replacement for the stretch.",
        "D": "The number of N-H stretching bands in the 3300 to 3500 region separates them directly from the IR alone. NMR integration works too, but it is not needed."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q40_alkyne_stretching",
    "topic": "Infrared stretching frequencies",
    "difficulty_level": "Medium",
    "question_text": "An unknown compound shows a strong, sharp band at $3300\\text{ cm}^{-1}$ and a weaker sharp band at $2120\\text{ cm}^{-1}$. What functional group is indicated by these bands?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "A terminal alkyne (sp C-H stretch at $3300\\text{ cm}^{-1}$ and $C\\equiv C$ stretch at $2120\\text{ cm}^{-1}$).",
        "smiles": "C#CCC",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "An internal alkyne.",
        "smiles": "CC#CC",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A terminal alkene.",
        "smiles": "C=CCC",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A nitrile.",
        "smiles": "CC#N",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A terminal alkyne is identified by two bands together: the C-H stretch of the sp-hybridized carbon, which is strong and sharp near 3300, and the C-C triple bond stretch near 2120, which is weaker because the bond is only slightly polar. Either band alone is ambiguous; the pair is not.",
      "approach": "Step 1: Place the 3300 band. A strong, sharp band there is an sp C-H stretch; the alternatives near 3300, an O-H or N-H, would be broad or would come in pairs.\nStep 2: Place the 2120 band. Only triple bonds and cumulated double bonds absorb between 2100 and 2260, and a nitrile would sit higher, near 2250, and be much stronger.\nStep 3: Combine them: an sp C-H means the triple bond carries a hydrogen, so the compound is a terminal alkyne, R-C-C-H.\nStep 4: Check the internal alkyne: with no sp C-H there is no 3300 band, and a symmetrical internal alkyne shows no 2120 band at all.",
      "note": "The relative intensities are part of the identification: in a terminal alkyne the 3300 band is the strong one and the 2120 band the weak one, the reverse of what a student expecting the triple bond to dominate would guess. A nitrile inverts this too, with a strong 2250 band and nothing at 3300.",
      "options": {
        "A": "Correct. The sharp sp C-H stretch at 3300 together with the weak triple-bond stretch at 2120 is the signature of a terminal alkyne.",
        "B": "An internal alkyne has no hydrogen on an sp carbon and so nothing at 3300. Its triple-bond stretch is weak and, if the two substituents are identical, absent altogether.",
        "C": "A terminal alkene's =C-H stretch appears at 3080, not 3300, and its C=C stretch at 1640, not 2120. Neither of the observed bands fits an alkene.",
        "D": "A nitrile's triple bond absorbs near 2250, higher than 2120, and it gives a strong band because the C-N bond is polar. A nitrile also has no sp C-H, so it cannot produce the 3300 band."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q41_aldehyde_fermi_doublet",
    "topic": "Infrared stretching frequencies",
    "difficulty_level": "Hard",
    "question_text": "Which of the following sets of IR absorption bands is diagnostic for an aldehyde, distinguishing it from ketones, esters, and other carbonyl-containing compounds?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "A strong carbonyl stretch at $\\sim 1725\\text{ cm}^{-1}$ along with a doublet of weak-to-medium intensity bands at $\\sim 2720\\text{ cm}^{-1}$ and $\\sim 2820\\text{ cm}^{-1}$ (due to C-H stretching of the formyl group).",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A strong carbonyl stretch at $\\sim 1715\\text{ cm}^{-1}$ with no absorption above $3000\\text{ cm}^{-1}$ other than the sp3 C-H stretches.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A strong carbonyl stretch at $\\sim 1710\\text{ cm}^{-1}$ and a very broad band running from $2500$ to $3300\\text{ cm}^{-1}$.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A doublet of strong bands at $\\sim 1760$ and $\\sim 1820\\text{ cm}^{-1}$.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Every carbonyl compound shows a strong C=O stretch, so the carbonyl band alone cannot say which kind it is. Aldehydes are picked out by the C-H bond on the carbonyl carbon, whose stretch is split into two weak bands near 2720 and 2820, below the ordinary C-H region and in a window where nothing else absorbs.",
      "approach": "Step 1: Look at the carbonyl band: an unconjugated aldehyde absorbs near 1725, slightly above a ketone's 1715, but the difference is too small to rely on.\nStep 2: Look just below 3000. The aldehyde C-H stretch fundamental, near 2800, couples with the first overtone of the aldehyde C-H bend (2 x 1390) that happens to lie at nearly the same energy. The coupling, called Fermi resonance, pushes the two apart into bands near 2720 and 2820.\nStep 3: Check the alternatives: a ketone has no C-H on its carbonyl and shows nothing there; a carboxylic acid has its enormous O-H band across the same region; an ester has no C-H on the carbonyl either.\nStep 4: Confirm with the 2720 band in particular, which sits clear of the sp3 C-H stretches that begin at 2850 and is the cleaner of the two to spot.",
      "note": "Conjugation moves the carbonyl band of an aldehyde down to about 1700 (benzaldehyde 1705) but leaves the 2720/2820 doublet in place, so the doublet is the more reliable aldehyde marker. In NMR the same C-H appears as the singlet near 9.8 ppm, and the two techniques confirm each other.",
      "options": {
        "A": "Correct. The carbonyl stretch near 1725 plus the pair of weak formyl C-H bands at 2720 and 2820 is unique to aldehydes.",
        "B": "A carbonyl with nothing else above 3000 but sp3 C-H stretches describes a ketone. The aldehyde adds the formyl C-H pair at 2720 and 2820, which is the whole basis of the distinction.",
        "C": "A carbonyl band together with a very broad absorption from 2500 to 3300 is a carboxylic acid, whose hydrogen-bonded dimer O-H spreads across the entire C-H region. An aldehyde's C-H pair is weak and sharp, not broad.",
        "D": "Two strong carbonyl bands near 1760 and 1820 are the symmetric and asymmetric stretches of an acid anhydride, whose two carbonyls share one oxygen and couple. An aldehyde has one carbonyl and one C=O band."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q42_nitrile_vs_alkyne",
    "topic": "Infrared stretching frequencies",
    "difficulty_level": "Medium",
    "question_text": "An unknown compound is known to contain either a nitrile ($C\\equiv N$) or an alkyne ($C\\equiv C$) group. How can these two functional groups be differentiated by IR spectroscopy?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "The nitrile stretch occurs at a slightly higher frequency ($\\sim 2230-2260\\text{ cm}^{-1}$) and is much more intense because of the highly polar C-N bond, whereas the alkyne stretch occurs at $\\sim 2100-2260\\text{ cm}^{-1}$ and is weaker or inactive.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "They absorb in the same $2100-2260\\text{ cm}^{-1}$ window and cannot be told apart by IR; the molecular formula from mass spectrometry is needed.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The alkyne band is the more intense, because a $C\\equiv C$ bond is stiffer than a $C\\equiv N$ bond.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Only the nitrile shows a sharp band near $3300\\text{ cm}^{-1}$, from the C-H bond next to its triple bond.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Position and intensity are separate pieces of information. Position follows bond stiffness and mass through Hooke's law; intensity follows the change in dipole moment during the vibration. A nitrile and an alkyne have similar stiffness and land in the same triple-bond window, but the polar C-N bond gives a large dipole change and the nearly nonpolar C-C bond a small one.",
      "approach": "Step 1: Compare positions. C-N triple bonds absorb at 2230 to 2260; C-C triple bonds at 2100 to 2260, with terminal alkynes near 2120. The nitrile sits at the top of the window, the terminal alkyne near the bottom.\nStep 2: Compare intensities. The nitrile band is strong and sharp, often the most prominent band in the spectrum apart from C-H. The alkyne band is weak to medium, and vanishes for a symmetrical internal alkyne.\nStep 3: Use the companion band: a terminal alkyne adds a strong, sharp sp C-H stretch at 3300; a nitrile has no hydrogen on its triple bond and shows nothing there.\nStep 4: Put it together: a strong band near 2250 with nothing at 3300 is a nitrile; a weak band near 2120 with a sharp 3300 band is a terminal alkyne.",
      "note": "The nitrogen rule from mass spectrometry gives an independent check: a nitrile has one nitrogen and an odd molecular ion, while an alkyne's is even. When the IR is ambiguous, for instance a weak band at 2200 in an unsymmetrical internal alkyne, the parity of the molecular ion settles it.",
      "options": {
        "A": "Correct. The polar C-N bond makes the nitrile band strong and puts it near 2250; the nonpolar C-C triple bond gives a weak band nearer 2120, or none.",
        "B": "The two overlap in position but not in intensity, and the terminal alkyne carries an extra 3300 band the nitrile lacks. IR alone distinguishes them in nearly every case; mass spectrometry is confirmation, not a necessity.",
        "C": "Stiffness sets position, not intensity, and the two bonds are similar in stiffness anyway. Intensity comes from the dipole change, which is large for the polar C-N bond and small for C-C.",
        "D": "A sharp 3300 band comes from a hydrogen on an sp carbon, which is the terminal alkyne's feature, not the nitrile's. A nitrile carbon bears the nitrogen and the alkyl group, and no hydrogen."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q43_carbonyl_substituent_effects",
    "topic": "Effect of conjugation and substituents on carbonyls",
    "difficulty_level": "Hard",
    "question_text": "Substituents attached to a carbonyl group alter its stretching frequency by either inductive (electron-withdrawing) or resonance (electron-donating) effects. Arrange the following compounds in order of decreasing carbonyl stretching frequency ($C=O$ wavenumber, highest to lowest):\n  I. Ethyl acetate ($CH_3COOCH_2CH_3$)\n  II. Acetone ($CH_3COCH_3$)\n  III. N,N-Dimethylacetamide ($CH_3CON(CH_3)_2$)",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "I > II > III",
        "smiles": "",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "III > II > I",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "II > I > III",
        "smiles": "",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "I > III > II",
        "smiles": "",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A heteroatom on the carbonyl carbon pulls two ways at once. Inductively it withdraws electron density through the sigma bond, which strengthens the C=O bond and raises its frequency. By resonance it donates a lone pair into the C=O pi system, which adds single-bond character and lowers the frequency. Which effect wins depends on the atom: oxygen is a strong inductive withdrawer and a weak donor, nitrogen a weak withdrawer and a strong donor.",
      "approach": "Step 1: Set the reference: acetone, an unconjugated ketone with two alkyl groups, absorbs at 1715.\nStep 2: Ethyl acetate replaces one alkyl with OEt. Oxygen's inductive withdrawal outweighs its resonance donation, so the C=O is stiffer and absorbs higher, near 1735 to 1740.\nStep 3: N,N-Dimethylacetamide replaces the alkyl with NMe2. Nitrogen's lone pair is far more available, and resonance donation dominates, giving the C=O substantial single-bond character and a band near 1650.\nStep 4: Order them: ester (1735) > ketone (1715) > amide (1650), which is I > II > III.",
      "note": "The same ranking runs through the whole acyl series: acid chlorides (1800) and anhydrides (1760, 1820) sit above esters because chlorine and the second acyl group withdraw without donating, and amides sit at the bottom. The order is the same one that governs reactivity toward nucleophiles.",
      "options": {
        "A": "Correct. Inductive withdrawal by the ester oxygen raises the frequency above the ketone; resonance donation by the amide nitrogen lowers it well below.",
        "B": "This ranks the amide highest, as if nitrogen were the strongest withdrawer. Nitrogen is less electronegative than oxygen and donates its lone pair strongly by resonance, which weakens the C=O bond and puts the amide lowest.",
        "C": "This puts the ester below the ketone, treating the ester oxygen as a net donor like the amide nitrogen. Oxygen holds its lone pairs tightly; its inductive pull dominates and the ester absorbs above the ketone.",
        "D": "This places the amide above the ketone, as though nitrogen's inductive effect mattered more than its resonance donation. For nitrogen the resonance effect wins decisively, and amides show the lowest carbonyl frequency of the three."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q44_conjugation_shift",
    "topic": "Effect of conjugation on carbonyls",
    "difficulty_level": "Hard",
    "question_text": "Why does the carbonyl stretching frequency of 2-cyclohexenone ($1685\\text{ cm}^{-1}$) occur at a lower wavenumber than that of cyclohexanone ($1715\\text{ cm}^{-1}$)?",
    "question_smiles": "O=C1C=CCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "Conjugation with the C=C double bond allows resonance donation of $\\pi$-electrons, which increases the single-bond character of the C=O bond, thereby lowering its force constant.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The two additional sp2 carbons flatten the ring and relieve its strain, so the C=O bond needs less energy to stretch.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The reduced mass of the vibrating system is increased by the extra double bond.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Conjugation raises the electron density on oxygen, making the C=O bond more polar, and a more polar bond absorbs at lower energy.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "When a C=C is conjugated with a C=O, the pi electrons delocalize over all four atoms. The resonance form with a positive charge on the far alkene carbon and a negative charge on oxygen has a C-O single bond, and its contribution makes the real carbonyl bond a little longer and weaker. A weaker bond has a smaller force constant and a lower stretching frequency.",
      "approach": "Step 1: Draw 2-cyclohexenone and mark the conjugated system: O=C-C=C in one plane.\nStep 2: Push electrons: the C=C pi pair moves toward the carbonyl carbon and the C=O pi pair onto oxygen. The resulting form has C-O single-bond character and C=C shifted one position.\nStep 3: Translate to force constant: partial single-bond character lowers the C=O force constant, so the band drops from 1715 (cyclohexanone) to about 1685.\nStep 4: Note the size: conjugation with one alkene or an aryl ring lowers a carbonyl by about 20 to 30 wavenumbers, a reliable shift used to spot alpha,beta-unsaturated and aromatic carbonyls.",
      "note": "The same delocalization weakens the C=C bond too, so its stretch also moves down (from 1650 toward 1620) and becomes more intense because the conjugated bond is more polar. Both bands shifting together is a good check that the alkene is conjugated rather than isolated.",
      "options": {
        "A": "Correct. Delocalization of the alkene pi electrons into the carbonyl gives the C=O partial single-bond character, lowering its force constant and its frequency.",
        "B": "Ring strain in a six-membered ring is negligible whether it holds two sp2 carbons or four, and strain effects on a carbonyl run the other way in any case: a strained ring raises the C=O frequency, as cyclobutanone shows.",
        "C": "The reduced mass of the C=O oscillator is set by the carbon and oxygen atoms, which are the same in both compounds. Adding a double bond elsewhere in the ring does not change the masses that move in the carbonyl stretch.",
        "D": "Polarity governs a band's intensity, not its position. The frequency falls because the bond is weaker, and a weaker bond happens to be a more polar one here; the polarity is a consequence, not the cause."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A six-membered ring with a carbonyl oxygen on one carbon and a double bond between the two ring carbons that follow it."
  },
  {
    "question_id": "ch12_q45_ring_strain_ketones",
    "topic": "Effect of conjugation and substituents on carbonyls",
    "difficulty_level": "Hard",
    "question_text": "Consider the cyclic ketones: cyclohexanone, cyclopentanone, and cyclobutanone. What is the correct order of their carbonyl stretching frequencies, and what is the physical explanation?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Cyclobutanone ($1780\\text{ cm}^{-1}$) > cyclopentanone ($1745\\text{ cm}^{-1}$) > cyclohexanone ($1715\\text{ cm}^{-1}$); decreasing ring size increases the internal C-C-C angle compression, which increases the s-character of the C=O bond, making it stronger and harder to stretch.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclohexanone > cyclopentanone > cyclobutanone; the strain in the small rings weakens every bond in the molecule, including the C=O bond.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "All three absorb at about $1715\\text{ cm}^{-1}$; ring strain is stored in the ring C-C bonds and does not reach the exocyclic C=O.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclopentanone > cyclobutanone > cyclohexanone; the five-membered ring has the most torsional (eclipsing) strain.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carbonyl carbon is sp2 and wants 120 degree angles. Squeezing it into a small ring forces the internal angle below that, and the carbon responds by putting more p-character into the two ring bonds and more s-character into the exocyclic C=O sigma bond. A bond with more s-character is shorter and stiffer, so the C=O stretch moves to higher wavenumber as the ring shrinks.",
      "approach": "Step 1: Start with cyclohexanone: the internal angle is close to 120, no rehybridization is needed, and the band is at the ordinary ketone value, 1715.\nStep 2: Go to cyclopentanone: the internal angle is compressed to about 108. The ring bonds take extra p-character; the C=O bond gains s-character, stiffens, and absorbs at 1745.\nStep 3: Go to cyclobutanone: the angle is about 90, the effect is larger, and the band is at 1780.\nStep 4: Order by frequency: cyclobutanone > cyclopentanone > cyclohexanone, rising by about 30 wavenumbers per carbon removed.",
      "note": "The trend has nothing to do with the C=O bond being strained; it is the ring bonds that are strained, and the carbonyl bond is strengthened in compensation. Exocyclic alkenes follow the same pattern, and so do lactones and lactams, which is why a five-membered lactone absorbs near 1770 while a six-membered one sits at the open-chain ester value.",
      "options": {
        "A": "Correct. Angle compression in the smaller rings puts more s-character into the C=O sigma bond, stiffening it and raising the frequency from 1715 to 1745 to 1780.",
        "B": "Strain does not weaken every bond uniformly. It sits in the ring bonds, which take on more p-character; the exocyclic C=O gains s-character and gets stronger, so the order runs the opposite way.",
        "C": "The strain is stored in the ring bonds, but rehybridization at the carbonyl carbon passes its effect to the C=O bond. The three compounds differ by 65 wavenumbers, which is far outside experimental uncertainty.",
        "D": "Torsional strain is largest in cyclopentanone, but the carbonyl frequency responds to angle strain at the carbonyl carbon, which is largest in cyclobutanone. Cyclobutanone absorbs highest."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q46_lactone_ring_strain",
    "topic": "Effect of conjugation and substituents on carbonyls",
    "difficulty_level": "Hard",
    "question_text": "Compare the carbonyl stretching frequencies of $\\gamma$-butyrolactone (a 5-membered cyclic ester) and $\\delta$-valerolactone (a 6-membered cyclic ester). Which lactone has the higher stretching frequency and why?",
    "question_smiles": "O=C1CCCO1.O=C1CCCCO1",
    "options": [
      {
        "option_id": "A",
        "text": "$\\gamma$-Butyrolactone absorbs at a higher frequency ($\\sim 1770\\text{ cm}^{-1}$) than $\\delta$-valerolactone ($\\sim 1735\\text{ cm}^{-1}$) because of increased ring strain in the 5-membered ring.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "$\\delta$-Valerolactone absorbs at the higher frequency, because the strained five-membered ring weakens all of its bonds, including the C=O.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Both absorb at about $1735\\text{ cm}^{-1}$; the ester value is set by the O-C=O group and ring size does not change it.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "$\\gamma$-Butyrolactone absorbs at the lower frequency ($\\sim 1650\\text{ cm}^{-1}$), because the small ring forces the ring oxygen lone pair into stronger conjugation with the C=O.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A lactone is an ester whose carbonyl carbon sits in a ring, so it inherits two effects: the ester's own carbonyl value, about 1735, and the ring-size effect that raises a carbonyl frequency as the ring shrinks. A six-membered lactone is unstrained and stays at the ester value; a five-membered one is compressed at the carbonyl carbon and moves up.",
      "approach": "Step 1: Take the open-chain reference: an acyclic ester such as ethyl acetate absorbs near 1735.\nStep 2: Place delta-valerolactone: a six-membered ring, internal angle near 120 at the carbonyl carbon, no extra strain. It absorbs near 1735, the same as the open-chain ester.\nStep 3: Place gamma-butyrolactone: a five-membered ring compresses the angle at the carbonyl carbon; the exocyclic C=O gains s-character and stiffens, and the band moves to about 1770.\nStep 4: Compare: the five-membered lactone is higher by about 35 wavenumbers, the same step cyclopentanone takes over cyclohexanone.",
      "note": "The ring-size increment is additive with the other carbonyl effects: a four-membered beta-lactone is higher still, near 1840, and a conjugated five-membered lactone comes down by the usual 20 to 30 for conjugation. Reading a lactone band therefore means subtracting the ring effect before deciding what else is attached.",
      "options": {
        "A": "Correct. The five-membered ring compresses the angle at the carbonyl carbon and strengthens the exocyclic C=O, lifting gamma-butyrolactone to about 1770 while the unstrained six-membered lactone stays near 1735.",
        "B": "Strain does not weaken the C=O bond; it strengthens it, because the strained ring bonds take p-character and leave the carbonyl bond with more s-character. The strained lactone absorbs higher, not lower.",
        "C": "The O-C=O group sets the baseline, but ring size shifts it, exactly as ring size shifts a ketone from 1715 to 1745. A 35-wavenumber difference between the two lactones is routinely observed.",
        "D": "Resonance donation by the ring oxygen is present in both lactones, and it is no stronger in the smaller ring. A lactone at 1650 would be an amide value; nothing about a five-membered ring produces it."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "Two cyclic esters side by side: a five-membered ring and a six-membered ring, each containing one ring oxygen bonded to a carbonyl carbon."
  },
  {
    "question_id": "ch12_q47_conjugated_esters",
    "topic": "Effect of conjugation on carbonyls",
    "difficulty_level": "Hard",
    "question_text": "Which of the following compounds will exhibit the LOWEST carbonyl stretching frequency in its IR spectrum?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Methyl 4-aminobenzoate",
        "smiles": "COC(=O)C1=CC=C(N)C=C1",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methyl benzoate",
        "smiles": "COC(=O)c1ccccc1",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Methyl cyclohexanecarboxylate",
        "smiles": "COC(=O)C1CCCCC1",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyl acetate",
        "smiles": "COC(=O)C",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An ester carbonyl starts near 1735 to 1745 and moves down for every structural feature that donates electron density into it. Conjugation with an aromatic ring lowers it by about 20; a strong pi donor on that ring, positioned para so that its lone pair reaches the carbonyl through the ring, lowers it further still.",
      "approach": "Step 1: Sort the saturated esters. Methyl acetate and methyl cyclohexanecarboxylate have an sp3 carbon on the carbonyl and no conjugation: about 1745 and 1735.\nStep 2: Add conjugation. Methyl benzoate's carbonyl is conjugated with the ring; delocalization gives it single-bond character and the band drops to about 1725.\nStep 3: Add a para donor. In methyl 4-aminobenzoate the nitrogen lone pair pushes through the ring to the carbonyl oxygen, an extended push-pull resonance. The C=O takes on still more single-bond character and absorbs near 1690 to 1700.\nStep 4: The lowest is methyl 4-aminobenzoate.",
      "note": "Donor position matters: a meta amino group cannot deliver its lone pair to the carbonyl by resonance and shifts the band very little. The same para push-pull effect lowers the carbonyl of 4-aminoacetophenone and 4-methoxybenzaldehyde relative to their parent compounds.",
      "options": {
        "A": "Correct. Conjugation with the ring plus resonance donation from the para amino group gives this ester the most single-bond character in its C=O and the lowest frequency, near 1690 to 1700.",
        "B": "Methyl benzoate is conjugated and sits below the saturated esters, near 1725, but it has no donor on the ring to push electron density further into the carbonyl. The amino-substituted ester is lower.",
        "C": "The cyclohexane ring is saturated: an sp3 carbon on the carbonyl provides no conjugation, so this ester stays at the ordinary aliphatic value near 1735.",
        "D": "Methyl acetate is the simplest saturated ester and absorbs at the top of the range, about 1745. With nothing to donate into the carbonyl it has the highest frequency of the four."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q48_fingerprint_region",
    "topic": "Fingerprint region",
    "difficulty_level": "Easy",
    "question_text": "The IR spectrum of an organic molecule is typically divided into the functional group region and the fingerprint region. Which of the following correctly describes the fingerprint region?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "It spans from $400\\text{ cm}^{-1}$ to $1500\\text{ cm}^{-1}$ and contains complex bending and single-bond stretching vibrations that are unique to the specific compound's skeleton.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "It spans $1500$ to $4000\\text{ cm}^{-1}$ and contains the strong stretches (O-H, C=O, $C\\equiv N$) that are assigned group by group.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "It lies below $1500\\text{ cm}^{-1}$ and contains only C-H bending vibrations, so it carries no information about heteroatoms.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "It lies between $2000$ and $2500\\text{ cm}^{-1}$ and is nearly empty in most spectra, which makes it useful as a baseline.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An IR spectrum divides into a region above 1500 where individual bonds give bands that can be assigned one at a time, and a region below 1500 where single-bond stretches and bending modes of similar energy couple together across the skeleton. The coupled pattern is too complex to assign band by band but is unique to the molecule, hence its name.",
      "approach": "Step 1: Mark the boundary at about 1500. Above it lie the diagnostic stretches: X-H near 3000 to 3600, triple bonds near 2100 to 2260, double bonds near 1600 to 1800.\nStep 2: Below it, C-C, C-O, C-N and C-X single-bond stretches all fall between about 800 and 1300, and they share the region with the many bending modes.\nStep 3: Because their energies are similar, these vibrations mix, so a band there belongs to the whole framework rather than to one bond.\nStep 4: Use the region for what it is good at: comparing two spectra. Identical fingerprint regions mean identical compounds, which is how a reference match confirms an identity that the functional-group region only suggests.",
      "note": "A few fingerprint bands are still assignable and worth knowing: the strong C-O stretch of ethers, esters and alcohols near 1000 to 1300, the two nitro stretches near 1530 and 1350, C-Cl near 600 to 800, and the out-of-plane C-H bends of alkenes and benzene rings between 700 and 1000 that report substitution pattern.",
      "options": {
        "A": "Correct. The region below 1500 is a coupled pattern of single-bond stretches and bends that is unique to each compound, rather than assignable group by group.",
        "B": "This describes the functional-group region, the part above 1500, where each strong stretch can be assigned to one bond. The fingerprint region is the complex part below it.",
        "C": "The fingerprint region holds far more than C-H bends: the C-O stretch of an ether or ester near 1100 to 1250, the C-N stretch of an amine, and the C-Cl stretch all fall there and identify heteroatoms.",
        "D": "The nearly empty window between 2000 and 2500 is the triple-bond region, and it is empty precisely because only triple bonds and cumulated double bonds absorb there. That is not the fingerprint region."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q49_reaction_monitoring",
    "topic": "Fingerprint region and applications",
    "difficulty_level": "Medium",
    "question_text": "A student performs the oxidation of cyclohexanol to cyclohexanone using pyridinium chlorochromate (PCC). How can the student most easily confirm the completion of the reaction using IR spectroscopy?",
    "question_smiles": "OC1CCCCC1",
    "options": [
      {
        "option_id": "A",
        "text": "The disappearance of a broad O-H stretch at $\\sim 3300\\text{ cm}^{-1}$ and the appearance of a strong carbonyl stretch at $\\sim 1715\\text{ cm}^{-1}$.",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "The disappearance of a sharp sp3 C-H stretch at $2950\\text{ cm}^{-1}$ and the appearance of a C=C stretch at $1650\\text{ cm}^{-1}$.",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "The carbonyl band appearing at $\\sim 1685\\text{ cm}^{-1}$ rather than $1715\\text{ cm}^{-1}$, because the new C=O is conjugated with the ring.",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "The appearance of a broad carboxylic acid O-H band at $2500-3000\\text{ cm}^{-1}$.",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Following a reaction by IR means picking one band that only the starting material has and one that only the product has, then watching the first vanish and the second grow. An alcohol-to-ketone oxidation is the ideal case: the O-H stretch is strong, broad and unmistakable, and so is the C=O stretch that replaces it.",
      "approach": "Step 1: List the starting material's diagnostic band: cyclohexanol shows a broad, strong O-H stretch centred near 3300 and no carbonyl.\nStep 2: List the product's: cyclohexanone shows a strong C=O stretch at 1715 and no O-H. Its ring C-H stretches near 2850 to 2950 are the same as the alcohol's and are useless as a probe.\nStep 3: Take a spectrum of the crude mixture. Reaction is complete when the 3300 band is gone and the 1715 band is fully developed; a residual hump at 3300 means unreacted alcohol.\nStep 4: Note that PCC stops at the ketone; a secondary alcohol cannot be taken further, so no acid O-H band is expected.",
      "note": "The C-O single-bond stretch near 1070 in cyclohexanol also disappears on oxidation, but it sits in the fingerprint region among other bands and is a poorer probe than the O-H band. Choose the band that is strong, isolated and unique to one side of the reaction.",
      "options": {
        "A": "Correct. The alcohol's broad O-H stretch at 3300 vanishing while the ketone's C=O stretch at 1715 appears reports the oxidation directly.",
        "B": "The sp3 C-H stretches belong to the ring and survive the oxidation unchanged, and no C=C forms. Those bands would describe a dehydration to cyclohexene, not an oxidation to cyclohexanone.",
        "C": "The cyclohexanone carbonyl is attached to sp3 ring carbons on both sides and is not conjugated with anything, so it absorbs at the normal ketone value of 1715. A band at 1685 would suggest an enone, which PCC does not make from cyclohexanol.",
        "D": "A carboxylic acid would require cleaving the ring, which PCC does not do, and a secondary alcohol has no hydrogen left on the carbinol carbon after forming the ketone. The very broad 2500 to 3000 acid band never appears here."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original",
    "structure_alt": "A cyclohexane ring carrying one hydroxyl substituent: the starting alcohol for the oxidation."
  },
  {
    "question_id": "ch12_q50_isomer_differentiation",
    "topic": "Fingerprint region and applications",
    "difficulty_level": "Medium",
    "question_text": "An unknown compound of formula $C_5H_{10}O$ shows a strong, broad band at $3350\\text{ cm}^{-1}$, sharp bands at $3020$ and $1650\\text{ cm}^{-1}$, sp3 C-H stretches near $2950\\text{ cm}^{-1}$, and no absorption between $1650$ and $1800\\text{ cm}^{-1}$. Which isomer is it?",
    "question_smiles": "",
    "options": [
      {
        "option_id": "A",
        "text": "Pent-3-en-1-ol",
        "is_correct": true,
        "smiles": "C/C=C/CCO"
      },
      {
        "option_id": "B",
        "text": "3-Pentanone",
        "is_correct": false,
        "smiles": "CCC(=O)CC"
      },
      {
        "option_id": "C",
        "text": "Pentanal",
        "is_correct": false,
        "smiles": "CCCCC=O"
      },
      {
        "option_id": "D",
        "text": "Cyclopentanol",
        "is_correct": false,
        "smiles": "OC1CCCC1"
      }
    ],
    "feedback": {
      "context": "A molecular formula with one degree of unsaturation can be spent on a C=O, a C=C or a ring, and IR tells which. The carbonyl region between 1650 and 1800 answers the first question; a C=C stretch near 1650 with a =C-H stretch just above 3000 answers the second; and an O-H band says how the oxygen is bound.",
      "approach": "Step 1: Compute the unsaturation: (2 x 5 + 2 - 10)/2 = 1. One ring or one pi bond.\nStep 2: Read the carbonyl region: nothing between 1650 and 1800, so no C=O. That rules out the ketone and the aldehyde, which would each show a strong band near 1715 or 1725.\nStep 3: Read the O-H region: a broad, strong band at 3350 means a hydrogen-bonded alcohol. The oxygen is an OH group.\nStep 4: Read the alkene bands: 3020 is an sp2 C-H stretch and 1650 a C=C stretch. The one degree of unsaturation is a double bond, not a ring, so the compound is the unsaturated alcohol, pent-3-en-1-ol.",
      "note": "Cyclopentanol is the trap: it matches the formula and the O-H band, and only the two alkene bands separate it from the answer. An internal alkene like this one gives its =C-H stretch near 3020; a terminal alkene would appear near 3080 with a stronger 1640 band and a strong out-of-plane bend near 910 and 990.",
      "options": {
        "A": "Correct. No carbonyl, a broad O-H at 3350, and the =C-H and C=C bands at 3020 and 1650 identify an alcohol that spends its one degree of unsaturation on a C=C.",
        "B": "3-Pentanone would show a strong ketone C=O stretch at 1715 and no O-H band. The spectrum has neither feature.",
        "C": "Pentanal would show a strong C=O stretch near 1725 together with the aldehyde C-H doublet at 2720 and 2820, and no O-H. None of those bands is present.",
        "D": "Cyclopentanol accounts for the O-H band and the formula, but it spends its degree of unsaturation on the ring and has no C=C. It cannot produce the 3020 and 1650 bands."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q_dynamic_ir_dips",
    "topic": "Infrared Spectroscopy",
    "difficulty_level": "Medium",
    "question_text": "Match each functional group to its characteristic IR absorption wavenumber.",
    "interaction_type": "matching-list",
    "match_items": [
      {
        "smiles": "CCO",
        "correctAnswer": "Broad 3300 cm-1 (O-H stretch)",
        "alt": "A two-carbon chain ending in a hydroxyl group."
      },
      {
        "smiles": "CC(C)=O",
        "correctAnswer": "Sharp 1715 cm-1 (C=O stretch)",
        "alt": "A three-carbon chain whose middle carbon carries a double-bonded oxygen."
      },
      {
        "smiles": "CC#N",
        "correctAnswer": "Sharp 2250 cm-1 (C#N stretch)",
        "alt": "A methyl group attached to a carbon that is triple-bonded to nitrogen."
      },
      {
        "smiles": "CC#C",
        "correctAnswer": "Sharp 2120 cm-1 (C#C stretch)",
        "alt": "A methyl group attached to a carbon-carbon triple bond whose far end carries a hydrogen."
      }
    ],
    "match_options": [
      "Broad 3300 cm-1 (O-H stretch)",
      "Sharp 1715 cm-1 (C=O stretch)",
      "Sharp 2250 cm-1 (C#N stretch)",
      "Sharp 2120 cm-1 (C#C stretch)",
      "Sharp 1650 cm-1 (C=C stretch)"
    ],
    "options": [
      {
        "option_id": "A",
        "text": "All matched correctly",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Incorrect IR bands",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Each of these four structures owns one band that no other of the four can produce. The task is to find, for each structure, the bond that is polar enough and stiff enough to give a diagnostic absorption, and to place it by Hooke's law: triple bonds highest among the multiple bonds, then double bonds, with the X-H stretches above them all.",
      "approach": "Step 1: Ethanol has an O-H bond; hydrogen-bonded O-H gives a broad, strong band centred near 3300, the only broad band in the set.\nStep 2: Acetone has a C=O bond, strong and stiff, absorbing sharply at 1715, the value for an unstrained, unconjugated ketone.\nStep 3: Acetonitrile has a C-N triple bond: stiff, polar, and sharp at 2250, near the top of the triple-bond window.\nStep 4: Propyne has a C-C triple bond with a hydrogen on one end. Its triple-bond stretch sits lower, near 2120, because the bond is less polar and slightly less stiff than the nitrile; it also shows a sharp sp C-H band at 3300 that is not in this list.\nStep 5: The spare option, a C=C stretch at 1650, matches none of them: no structure here has a carbon-carbon double bond.",
      "note": "Ethanol also has a strong C-O stretch near 1050, and propyne a strong sp C-H stretch at 3300, so real spectra of these compounds carry more than the one band listed. The matching asks for the band that identifies the group, not for every band the molecule shows.",
      "options": {
        "A": "Correct. Broad 3300 is the alcohol O-H, 1715 the ketone C=O, 2250 the nitrile C-N triple bond and 2120 the alkyne C-C triple bond; the C=C option belongs to none of the four.",
        "B": "Work from bond type to region: X-H stretches above 3000, triple bonds between 2100 and 2260, double bonds between 1600 and 1800. The two triple bonds are separated by polarity and stiffness, with the nitrile the higher of the two."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q4",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Medium",
    "question_text": "The simulated electron-ionization mass spectrum of an unknown compound of formula $C_4H_{10}O$ is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 27,
          "y": 20
        },
        {
          "x": 29,
          "y": 60
        },
        {
          "x": 31,
          "y": 100
        },
        {
          "x": 43,
          "y": 10
        },
        {
          "x": 45,
          "y": 35
        },
        {
          "x": 59,
          "y": 40
        },
        {
          "x": 74,
          "y": 25
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Diethyl ether",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Butanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Butanol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Methyl-2-propanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The four saturated C4H10O compounds share a molecular weight, so telling them apart is about which fragments appear and whether the molecular ion survives. Ethers keep a visible molecular ion and lose an alkyl radical by alpha-cleavage; alcohols lose water and show only a trace of M+, and their base peak reports how many carbons sit on the carbinol carbon.",
      "approach": "Step 1: Check the molecular ion: 74 is clearly present at about a quarter of the base peak. An alcohol of this size would show almost nothing there.\nStep 2: Check for dehydration: no peak at 56 (M - 18). Alcohols of four carbons show a strong M - 18; this compound does not.\nStep 3: Read the alpha-cleavage ions: 59 is M - 15, loss of a methyl radical from an ethyl group, giving CH3CH2O=CH2+; 45 is CH3CH=OH+ after further rearrangement; and the base peak 31, CH2=OH+, arises from the 59 ion by loss of ethylene with a hydrogen transfer.\nStep 4: A visible M+, an M - 15, no M - 18 and a base peak at 31 is diethyl ether.",
      "note": "Ethers and primary alcohols can both give 31 as base peak, so the 31 alone does not settle it. The pair of observations that does is the molecular ion, which an ether keeps and a butanol nearly loses, and the M - 18 peak, which only the alcohol has.",
      "options": {
        "A": "Correct. A visible molecular ion at 74, an M - 15 at 59, no M - 18 and a base peak at 31 from the oxygen-stabilized CH2=OH+ ion is diethyl ether.",
        "B": "1-Butanol also gives 31 as base peak, but its molecular ion is less than 1% and it shows a strong M - 18 peak at 56 from dehydration. Here 74 is plainly present and 56 is absent.",
        "C": "2-Butanol's base peak is 45, from alpha-cleavage that loses the larger ethyl radical to give CH3CH=OH+, and its molecular ion is barely visible. The base peak here is 31.",
        "D": "2-Methyl-2-propanol shows no molecular ion at all and a base peak at 59 from loss of a methyl radical; it has no 31 of any strength. Here 59 is a secondary peak and 74 is present."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q1",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated electron-ionization mass spectrum of an unknown compound is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 35,
          "y": 12
        },
        {
          "x": 47,
          "y": 35
        },
        {
          "x": 48,
          "y": 15
        },
        {
          "x": 83,
          "y": 100
        },
        {
          "x": 85,
          "y": 65
        },
        {
          "x": 87,
          "y": 10
        },
        {
          "x": 118,
          "y": 3
        },
        {
          "x": 120,
          "y": 3
        },
        {
          "x": 122,
          "y": 1
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Chloroform",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Dichloromethane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Carbon tetrachloride",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1,2-Dichloroethane",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A polychlorinated compound is read from its clusters, and a fragment cluster is as informative as the molecular ion's. Each chlorine kept in an ion contributes a 3:1 pair two units apart; the shape of a cluster therefore counts the chlorines in that ion, and the difference between the molecular ion's count and the base peak's count says what was lost.",
      "approach": "Step 1: Find the highest cluster: 118, 120, 122 in about 3:3:1 with a trace at 124. Expanding (3 + 1) cubed gives 27:27:9:1, the pattern of three chlorines, so the molecular ion contains Cl3 and has mass 118.\nStep 2: Subtract: 118 - 3 x 35 = 13, which is CH. The formula is CHCl3, chloroform.\nStep 3: Read the base cluster: 83, 85, 87 in 9:6:1, the two-chlorine pattern. The base peak is CHCl2+, formed by losing one chlorine atom from the molecular ion, 118 - 35 = 83.\nStep 4: Confirm the lesser peaks: 47/49 is CCl+, and 35/37 is Cl+ itself.",
      "note": "Polyhalogenated molecular ions are weak because the C-Cl bond breaks so readily, and carbon tetrachloride shows no molecular ion at all. Reading the base cluster first and working upward is often more reliable than hunting for a faint M+.",
      "options": {
        "A": "Correct. A three-chlorine molecular-ion cluster at 118/120/122 and a two-chlorine base cluster at 83/85/87, formed by loss of one chlorine, is CHCl3.",
        "B": "Dichloromethane's molecular ion cluster is at 84/86/88 in 9:6:1, two chlorines, and its base peak is CH2Cl+ at 49/51. Neither cluster matches the observed ones.",
        "C": "Carbon tetrachloride shows no molecular ion; its highest cluster is CCl3+ at 117/119/121/123 with the three-chlorine 27:27:9:1 shape, and there is no peak at 83 because there is no hydrogen to leave in the fragment.",
        "D": "1,2-Dichloroethane has M at 98/100/102 and a base peak at 62/64, the C2H3Cl+ ion from loss of HCl. Its base cluster is a two-peak 3:1 pair, not the three-peak 9:6:1 seen here."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q5",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Medium",
    "question_text": "The simulated electron-ionization mass spectrum of an unknown compound is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 27,
          "y": 30
        },
        {
          "x": 39,
          "y": 10
        },
        {
          "x": 41,
          "y": 35
        },
        {
          "x": 43,
          "y": 100
        },
        {
          "x": 122,
          "y": 15
        },
        {
          "x": 124,
          "y": 15
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-Bromopropane",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Chloropropane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Iodopropane",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Bromobutane",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Alkyl halides give the simplest isotope problems: the molecular ion identifies the halogen by its isotope pattern, and the base peak is usually the alkyl cation left when the halogen atom departs. The mass of that cation counts the carbons, and the spacing between it and the molecular ion is the mass of the halogen.",
      "approach": "Step 1: Find the molecular ion: a pair of equal peaks at 122 and 124. Equal M and M+2 means one bromine.\nStep 2: Subtract the halogen: 122 - 79 = 43, so the alkyl part is C3H7. The compound is a bromopropane.\nStep 3: Read the base peak: 43, the propyl cation, formed by loss of a bromine atom. The 41 and 27 peaks are its further losses of H2 and CH4.\nStep 4: Among the options, 1-bromopropane is the C3H7Br compound.",
      "note": "This spectrum cannot distinguish 1-bromopropane from 2-bromopropane; both give the 122/124 pair and a base peak at 43, though the secondary isopropyl cation makes 2-bromopropane's 43 even more dominant. The NMR settles that question, not the MS.",
      "options": {
        "A": "Correct. A 1:1 pair at 122 and 124 is one bromine, 122 - 79 = 43 is C3H7, and the base peak at 43 is the propyl cation after loss of the bromine atom.",
        "B": "1-Chloropropane's molecular ion is a 3:1 pair at 78 and 80, not an equal pair near 122. Its base peak is also 43, but the molecular ion cluster is wrong in both mass and shape.",
        "C": "Iodine is monoisotopic, so 1-iodopropane shows a single molecular ion at 170 with no M+2 companion, and a characteristic I+ peak at 127. An equal pair rules it out.",
        "D": "1-Bromobutane has one bromine and a 1:1 pair, but at 136 and 138, and its base peak is the butyl cation at 57. The observed pair is 14 units lighter."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q7",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Medium",
    "question_text": "The simulated infrared spectrum of an unknown compound is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3060,
          "w": 20,
          "d": 20
        },
        {
          "xc": 1790,
          "w": 20,
          "d": 85
        },
        {
          "xc": 1600,
          "w": 20,
          "d": 30
        },
        {
          "xc": 1580,
          "w": 20,
          "d": 25
        },
        {
          "xc": 1450,
          "w": 20,
          "d": 35
        },
        {
          "xc": 700,
          "w": 40,
          "d": 55
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Benzoyl chloride",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzaldehyde",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetophenone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzoic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Among carbonyl compounds the position of the C=O band ranks the electron-withdrawing power of the group attached to it. An acid chloride sits at the top of the range, near 1800, because chlorine withdraws strongly and donates almost nothing by resonance; conjugation with a ring pulls it down only slightly.",
      "approach": "Step 1: Read above 3000: a weak band near 3060 and nothing broad. The compound has aromatic C-H and no O-H.\nStep 2: Read the carbonyl region: a strong band at 1790. That is far above a ketone (1685 if conjugated), an aldehyde (1705 conjugated) or an acid (1690), and sits where acid chlorides absorb.\nStep 3: Confirm the ring with the 1600/1580 pair and the strong band near 700 from the monosubstituted ring's out-of-plane bends.\nStep 4: Check for what is missing: no aldehyde C-H doublet at 2720 and 2820, no broad acid O-H. The only aromatic carbonyl compound left is the acid chloride.",
      "note": "Acyl chlorides also show a second, weaker band near 1740 from Fermi resonance with an overtone, so a real benzoyl chloride spectrum has a shoulder below the main band. The main band above 1770 is the diagnostic feature either way.",
      "options": {
        "A": "Correct. A carbonyl at 1790 with aromatic bands and no O-H is an aromatic acid chloride.",
        "B": "Benzaldehyde's conjugated carbonyl absorbs near 1705, not 1790, and it would show the aldehyde C-H doublet at 2720 and 2820, which this spectrum lacks.",
        "C": "Acetophenone's carbonyl is conjugated with the ring and absorbs near 1685, a hundred wavenumbers below the observed band, and it would add sp3 C-H stretches just below 3000 from its methyl group.",
        "D": "Benzoic acid would show a very broad O-H band from 2500 to 3300 and a carbonyl near 1690. This spectrum has nothing broad above 2500 and its carbonyl is far higher."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q9",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Medium",
    "question_text": "The simulated electron-ionization mass spectrum of an unknown compound is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 25
        },
        {
          "x": 45,
          "y": 30
        },
        {
          "x": 47,
          "y": 15
        },
        {
          "x": 63,
          "y": 100
        },
        {
          "x": 78,
          "y": 60
        },
        {
          "x": 80,
          "y": 3
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Dimethyl sulfoxide",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Dimethyl sulfide",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Tetrahydrofuran",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Dimethyl sulfone",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A small M+2 peak, a few percent of the molecular ion, points to sulfur, whose 34S isotope is 4.2% abundant. With the element identified, the molecular weight and the first fragment give the structure: a methyl loss from the molecular ion is the commonest first step for a compound with methyl groups on the heteroatom.",
      "approach": "Step 1: Find the molecular ion: 78, with a small companion at 80 of about 4%. An M+2 that size is one sulfur, and an even molecular weight means no nitrogen.\nStep 2: Fit a formula: C2H6OS is 78. Two methyls, one oxygen, one sulfur.\nStep 3: Read the base peak: 63 is M - 15, loss of a methyl radical, leaving CH3-S=O+. That requires the methyls to be on the sulfur, with the oxygen also on sulfur.\nStep 4: The 45 and 47 peaks are CHS+ and CH3S+. The compound is dimethyl sulfoxide.",
      "note": "Sulfur also has a 33S isotope at 0.76% that adds to M+1, so a sulfur compound's M+1 is larger than its carbon count alone predicts. Together, an oversized M+1 and a 4% M+2 are the sulfur signature, and they follow every sulfur-containing fragment as well.",
      "options": {
        "A": "Correct. M at 78 with a 4% M+2 is a one-sulfur compound of formula C2H6OS, and the base peak at 63 is loss of a methyl group from the sulfoxide.",
        "B": "Dimethyl sulfide has a molecular ion at 62, sixteen units lighter because it has no oxygen, and its base peak is either 62 itself or 47 from loss of a methyl. The observed M is 78.",
        "C": "Tetrahydrofuran has M at 72 and no sulfur, so no M+2 of any size; its base peak is 42. Neither the mass nor the isotope peak fits.",
        "D": "Dimethyl sulfone has a second oxygen and a molecular ion at 94, with its methyl-loss peak at 79. Every peak would sit sixteen units above the observed ones."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q11",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Medium",
    "question_text": "The simulated infrared spectrum of an unknown hydrocarbon is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3030,
          "w": 20,
          "d": 30
        },
        {
          "xc": 1600,
          "w": 20,
          "d": 30
        },
        {
          "xc": 1480,
          "w": 20,
          "d": 40
        },
        {
          "xc": 675,
          "w": 30,
          "d": 65
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Benzene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclohexane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Toluene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclohexene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The 3000 line is the first thing to check in any hydrocarbon spectrum: C-H stretches above it belong to sp2 or sp carbons, those below it to sp3 carbons. A molecule with no absorption below 3000 has no sp3 C-H at all, which for a six-carbon hydrocarbon leaves very few candidates.",
      "approach": "Step 1: Read the C-H region. One band at 3030 and nothing between 2850 and 2960. Every hydrogen is on an sp2 carbon; there are no CH2 or CH3 groups.\nStep 2: Read the double-bond region. Bands at 1600 and 1480, the pair that aromatic ring C=C stretches give, and no band near 1650 for an isolated alkene.\nStep 3: Read the low region. A strong band near 675 is the out-of-plane C-H bend of an unsubstituted benzene ring.\nStep 4: The only hydrocarbon with aromatic C-H, ring stretches and no sp3 C-H is benzene itself.",
      "note": "Benzene's ring stretches are weak because the molecule is so symmetric; substituted benzenes show the same pair more strongly, and their pattern of bands between 690 and 900 reports where the substituents sit. The absence of sp3 C-H is what rules out every alkylbenzene here.",
      "options": {
        "A": "Correct. Aromatic C-H at 3030, ring stretches at 1600 and 1480, a strong out-of-plane bend near 675 and no sp3 C-H is benzene.",
        "B": "Cyclohexane has only sp3 C-H, giving strong bands at 2920 and 2850 and nothing above 3000, and it has no C=C bands at all. This spectrum is the opposite in every respect.",
        "C": "Toluene shows the same aromatic bands but adds a methyl group, whose C-H stretches appear at 2920 and 2870, below 3000. The spectrum shows nothing there.",
        "D": "Cyclohexene has one sp2 C-H band near 3020 but four CH2 groups giving strong sp3 stretches below 3000, and its C=C appears at 1650 rather than as the 1600/1480 aromatic pair."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q15",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated electron-ionization mass spectrum of an unknown compound of formula $C_4H_8O$ is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 27,
          "y": 35
        },
        {
          "x": 29,
          "y": 30
        },
        {
          "x": 41,
          "y": 40
        },
        {
          "x": 43,
          "y": 60
        },
        {
          "x": 44,
          "y": 100
        },
        {
          "x": 57,
          "y": 15
        },
        {
          "x": 72,
          "y": 45
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Butanal",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Butanone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Methylpropanal",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Tetrahydrofuran",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Four C4H8O isomers share a molecular ion at 72, so the identification rests on the base peak and on one rule: an even-mass fragment from an even-mass molecular ion means a rearrangement expelled a neutral molecule. A base peak at 44 in a carbonyl compound is the McLafferty ion of an aldehyde, and it needs a chain with a gamma hydrogen.",
      "approach": "Step 1: Note the molecular ion at 72 and the base peak at 44, an even mass. 72 - 44 = 28, loss of ethylene: a McLafferty rearrangement.\nStep 2: Identify the ion: CH2=CH-OH radical cation, mass 44, the enol of acetaldehyde. That is what an aldehyde gives when its gamma hydrogen migrates and the alpha-beta bond breaks.\nStep 3: Ask which C4H8O has a gamma hydrogen next to an aldehyde: butanal, CH3CH2CH2CHO, with C4 as the gamma carbon.\nStep 4: Confirm with the rest: 43 is the propyl cation from alpha-cleavage, 57 is M - 15, and 29 is CHO+ and C2H5+.",
      "note": "The same reasoning distinguishes the ketone: butanone's McLafferty is impossible because neither chain reaches a gamma carbon, so it shows no 44 at all and gives 43 as its base peak from alpha-cleavage. The presence or absence of the even-mass ion is the whole story among these isomers.",
      "options": {
        "A": "Correct. An even-mass base peak at 44, 28 units below the molecular ion, is the McLafferty enol ion, and butanal is the only C4H8O aldehyde with a gamma hydrogen.",
        "B": "Butanone has no gamma carbon on either side of its carbonyl and cannot rearrange; its base peak is CH3CO+ at 43 with a strong 57 (M - 15), and it shows nothing at 44.",
        "C": "2-Methylpropanal is an aldehyde but its chain is branched at the alpha carbon and stops at the beta position, so it has no gamma hydrogen and no McLafferty ion. Its base peak is 43 or 41.",
        "D": "Tetrahydrofuran has no carbonyl; its base peak is 42, from loss of formaldehyde, with a strong 71 (M - 1) and 41. It shows no significant 44."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q17",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Medium",
    "question_text": "The simulated electron-ionization mass spectrum of an unknown aromatic compound is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 50,
          "y": 20
        },
        {
          "x": 51,
          "y": 45
        },
        {
          "x": 65,
          "y": 15
        },
        {
          "x": 77,
          "y": 100
        },
        {
          "x": 93,
          "y": 15
        },
        {
          "x": 123,
          "y": 60
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Nitrobenzene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Aniline",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzonitrile",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Toluene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An odd molecular ion is the nitrogen rule at work: the compound holds an odd number of nitrogens. The next question is what the nitrogen is attached to, and the losses from the molecular ion answer it. A loss of 46 is NO2, a loss of 30 is NO; both together are the fingerprint of a nitro group.",
      "approach": "Step 1: Find the molecular ion: 123, odd, so one nitrogen (or three). No M+2 of any size, so no halogen or sulfur.\nStep 2: Read the base peak: 77, the phenyl cation, C6H5+. 123 - 77 = 46, the mass of NO2. The nitrogen was in a nitro group on a benzene ring.\nStep 3: Confirm with the small 93 peak: 123 - 30 = 93, loss of NO to give the phenoxy cation, C6H5O+, the second characteristic nitro loss.\nStep 4: The 51 and 50 peaks are the usual fragments of the phenyl cation. The compound is nitrobenzene.",
      "note": "Aromatic compounds keep a strong molecular ion because the ring stabilizes the radical cation; 123 at 60% is typical. The phenyl cation at 77 with its 51 daughter appears in almost every monosubstituted benzene spectrum, so it is the losses from M, not the 77 itself, that identify the substituent.",
      "options": {
        "A": "Correct. An odd molecular ion at 123, a base peak at 77 from loss of NO2 and a small 93 from loss of NO is nitrobenzene.",
        "B": "Aniline has an odd molecular ion too, at 93, and that ion is its base peak; it loses HCN to give 66. The molecular ion here is 123, thirty units heavier.",
        "C": "Benzonitrile's molecular ion is 103, also odd and also its base peak, with a loss of HCN to 76. Nothing in this spectrum sits at 103.",
        "D": "Toluene has no nitrogen and an even molecular ion at 92, with the tropylium base peak at 91. Its spectrum has no 123 and no 77 base peak."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q19",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Medium",
    "question_text": "The simulated electron-ionization mass spectrum of an unknown aromatic compound is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 50,
          "y": 12
        },
        {
          "x": 51,
          "y": 20
        },
        {
          "x": 77,
          "y": 45
        },
        {
          "x": 112,
          "y": 100
        },
        {
          "x": 113,
          "y": 7
        },
        {
          "x": 114,
          "y": 32
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Chlorobenzene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Bromobenzene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Toluene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Fluorobenzene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Aryl halides keep their molecular ion as the base peak, because the aromatic radical cation is stable and the aryl-halogen bond is stronger than an alkyl-halogen bond. That makes the isotope pattern easy to read at full intensity, and the one major fragment, loss of the halogen atom to give the phenyl cation at 77, confirms the assignment.",
      "approach": "Step 1: Find the molecular ion: 112 is the base peak, with 114 at about one third of it. A 3:1 pair two units apart is one chlorine. The small 113 is the 13C peak.\nStep 2: Subtract the halogen: 112 - 35 = 77, so the rest is C6H5, a phenyl group. The compound is chlorobenzene.\nStep 3: Read the fragment: 77 is the phenyl cation from loss of the chlorine atom, and 51 and 50 are its daughters.\nStep 4: Note what is absent: no 91, so no benzylic carbon; no odd molecular ion, so no nitrogen.",
      "note": "Compare with an alkyl chloride, where the molecular ion is weak and the alkyl cation dominates: the aryl halide reverses this because the phenyl cation is not stabilized and the molecular ion is. A strong molecular ion with a halogen pattern is a good first hint that the halogen sits on an aromatic ring.",
      "options": {
        "A": "Correct. A 3:1 pair at 112/114 as the base peak is a one-chlorine aromatic compound of formula C6H5Cl, and 77 is the phenyl cation after loss of chlorine.",
        "B": "Bromobenzene shows a 1:1 pair at 156 and 158 and the same 77 fragment. The observed pair is 3:1 and 44 units lighter.",
        "C": "Toluene has no halogen and no M+2 pair; its molecular ion is 92 and its base peak the tropylium ion at 91. Nothing here is at 91 or 92.",
        "D": "Fluorine is monoisotopic, so fluorobenzene gives a single molecular ion at 96 with no M+2 companion. The 3:1 pair rules it out."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q20",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Easy",
    "question_text": "The simulated infrared spectrum of an unknown compound is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3000,
          "w": 300,
          "d": 75
        },
        {
          "xc": 1710,
          "w": 20,
          "d": 85
        },
        {
          "xc": 1290,
          "w": 40,
          "d": 50
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Acetic acid",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Ethanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetaldehyde",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyl acetate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A carboxylic acid is the one functional group that announces itself with two features at once: a strong carbonyl band near 1710 and an O-H band so broad, from the hydrogen-bonded dimer, that it spreads from about 2500 to 3300 and swallows the C-H stretches underneath it.",
      "approach": "Step 1: Look at the high region: a very broad absorption centred near 3000 and extending well below it. Only an acid O-H is this wide; an alcohol's O-H is broad but stops near 3200.\nStep 2: Look at the carbonyl region: a strong band at 1710, an acid or ketone value.\nStep 3: Put the two together. A carbonyl plus a broad acid-type O-H is a carboxylic acid; the band near 1290 is its C-O stretch.\nStep 4: Among the options, only acetic acid has both a carbonyl and an acidic O-H.",
      "note": "The acid O-H band is so broad that students sometimes miss it and read the spectrum as a ketone with a poor baseline. Look for whether the region from 2500 to 3300 returns to full transmittance; in an acid it never does.",
      "options": {
        "A": "Correct. The carbonyl at 1710 and the enormously broad O-H running below 3000 are the two-part signature of a carboxylic acid.",
        "B": "Ethanol has a broad O-H band, but it is centred at 3300 and does not extend below 3000, and ethanol has no carbonyl to give the 1710 band.",
        "C": "Acetaldehyde has a carbonyl near 1725 and the aldehyde C-H doublet at 2720 and 2820, but no O-H of any kind. The broad absorption here rules it out.",
        "D": "Methyl acetate has an ester carbonyl near 1745 and strong C-O bands, but its spectrum returns to baseline above 3000. It has no O-H."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q23",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Medium",
    "question_text": "The simulated infrared spectrum of an unknown compound is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3060,
          "w": 20,
          "d": 25
        },
        {
          "xc": 1580,
          "w": 20,
          "d": 30
        },
        {
          "xc": 1480,
          "w": 20,
          "d": 45
        },
        {
          "xc": 1090,
          "w": 30,
          "d": 45
        },
        {
          "xc": 740,
          "w": 30,
          "d": 55
        },
        {
          "xc": 690,
          "w": 30,
          "d": 45
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Chlorobenzene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Toluene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Phenol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzonitrile",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Reading a substituted benzene means confirming the ring first, then asking what the substituent contributes. If the substituent has no hydrogen, no multiple bond and no O or N, it adds only bands in the fingerprint region, and the identification rests as much on what is absent as on what is present.",
      "approach": "Step 1: Confirm the ring: aromatic C-H at 3060, ring stretches at 1580 and 1480, and the 740/690 pair of out-of-plane bends typical of a monosubstituted benzene.\nStep 2: Check for sp3 C-H: nothing between 2850 and 2960, so no alkyl group.\nStep 3: Check for heteroatom hydrogens and multiple bonds: no broad O-H, no N-H pair, no band in the triple-bond window near 2230, no carbonyl.\nStep 4: The remaining band, near 1090, is where an aryl C-Cl stretch appears. A benzene ring carrying only a chlorine fits every observation.",
      "note": "Aryl halide C-X stretches (C-Cl near 1000 to 1100, C-Br near 1000 to 1070) lie in the fingerprint region and are not reliable on their own; the safer reading is elimination of every other substituent type, followed by a check of the molecular ion's isotope pattern by mass spectrometry.",
      "options": {
        "A": "Correct. An aromatic ring with no sp3 C-H, no O-H, no N-H, no carbonyl and no triple bond, plus a C-Cl stretch near 1090, is chlorobenzene.",
        "B": "Toluene's methyl group would add sp3 C-H stretches at 2920 and 2870. The spectrum has no absorption below 3000.",
        "C": "Phenol would show a broad, strong O-H band centred near 3300 and a strong C-O stretch near 1230. Neither appears.",
        "D": "Benzonitrile has a strong, sharp band near 2230 from its C-N triple bond, in a region where this spectrum is empty."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q25",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Medium",
    "question_text": "The simulated infrared spectrum of an unknown compound is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 2960,
          "w": 40,
          "d": 55
        },
        {
          "xc": 2870,
          "w": 30,
          "d": 40
        },
        {
          "xc": 1460,
          "w": 20,
          "d": 30
        },
        {
          "xc": 650,
          "w": 40,
          "d": 45
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-Bromopropane",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Hexane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Propanol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propanal",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An alkyl halide has one of the least informative IR spectra of any functional-group compound: sp3 C-H stretches, a CH2 bend, and a C-X stretch at the low-wavenumber end. The identification is made by ruling out the groups that would have added a band, then noticing the one band an alkane would not have.",
      "approach": "Step 1: Read the C-H region: strong bands at 2960 and 2870, all below 3000, so every hydrogen is on sp3 carbon.\nStep 2: Scan for functional-group bands: nothing near 3300 (no O-H or N-H), nothing near 1700 (no carbonyl), nothing at 1650 or 2100 to 2260 (no C=C or triple bond).\nStep 3: Look at the low end: a band near 650. C-Br stretches appear between 500 and 700; a plain alkane has nothing there.\nStep 4: A saturated compound with only C-H bands and a C-Br stretch is a bromoalkane; among the options that is 1-bromopropane.",
      "note": "C-Cl stretches sit a little higher, near 600 to 800, and C-I lower still, near 500, at the very edge of a typical scan. The isotope pattern of the molecular ion in the mass spectrum is a far more certain way to identify which halogen is present.",
      "options": {
        "A": "Correct. Only sp3 C-H bands plus a C-Br stretch near 650, with no O-H, C=O or multiple-bond absorption, is a saturated bromoalkane.",
        "B": "Hexane would give the same sp3 C-H and CH2 bending bands but nothing at 650; an alkane's spectrum is empty below about 1300 apart from a weak rocking band near 720.",
        "C": "1-Propanol would show a broad, strong O-H stretch near 3300 and a strong C-O stretch near 1050. Both are missing.",
        "D": "Propanal would show a strong carbonyl near 1725 together with the aldehyde C-H doublet at 2720 and 2820. The carbonyl region here is empty."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q28",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Medium",
    "question_text": "The simulated electron-ionization mass spectrum of an unknown compound is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20
        },
        {
          "x": 29,
          "y": 10
        },
        {
          "x": 42,
          "y": 15
        },
        {
          "x": 43,
          "y": 100
        },
        {
          "x": 45,
          "y": 85
        },
        {
          "x": 60,
          "y": 60
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Acetic acid",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methyl formate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "1-Propanol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propanal",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A molecular ion at 60 can be C2H4O2 or C3H8O, and the fragments decide between them. A carboxylic acid shows two losses from its molecular ion that nothing else shows together: loss of OH (17) to the acylium ion and loss of the alkyl group (15 for acetic acid) to the COOH+ ion at 45.",
      "approach": "Step 1: Find the molecular ion: 60, even, present at 60%. A propanol would show almost no molecular ion; a small oxygenated molecule with a strong M+ is likely an acid or an ester.\nStep 2: Read the two strong fragments: 45 is M - 15, loss of a methyl radical, leaving COOH+; 43 is M - 17, loss of a hydroxyl radical, leaving CH3CO+, the base peak.\nStep 3: Only a molecule with both a CH3 and an OH on the same carbonyl gives both ions: acetic acid, CH3COOH.\nStep 4: The 15 peak is CH3+ and the 42 is ketene radical cation from loss of water. Everything fits acetic acid.",
      "note": "Acids larger than acetic acid add the McLafferty ion at 60 (the acetic acid enol) and a strong M - 17; formic acid shows 29 (CHO+) and 46 instead. The 45 COOH+ ion is the one to look for whenever a carboxylic acid is suspected.",
      "options": {
        "A": "Correct. A molecular ion at 60 with strong 45 (COOH+) and 43 (CH3CO+) ions from losses of CH3 and OH is acetic acid.",
        "B": "Methyl formate is an isomer with the same molecular ion, but it fragments to 31 (CH3O+) and 29 (HCO+) as its main ions and shows nothing significant at 43 or 45.",
        "C": "1-Propanol has M at 60 but shows it only faintly, with a base peak at 31 from alpha-cleavage and a strong 42 from dehydration. Its 45 and 43 are minor.",
        "D": "Propanal's molecular ion is 58, not 60, and its base peak is 29. The observed molecular ion is two units heavier."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q29",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Medium",
    "question_text": "The simulated infrared spectrum of an unknown compound is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3300,
          "w": 150,
          "d": 70
        },
        {
          "xc": 3050,
          "w": 20,
          "d": 20
        },
        {
          "xc": 1600,
          "w": 20,
          "d": 35
        },
        {
          "xc": 1500,
          "w": 20,
          "d": 40
        },
        {
          "xc": 1230,
          "w": 40,
          "d": 60
        },
        {
          "xc": 750,
          "w": 30,
          "d": 45
        },
        {
          "xc": 690,
          "w": 30,
          "d": 45
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Phenol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclohexanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Anisole",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzoic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two questions settle most oxygen-containing aromatics: is there an O-H, and is there a carbonyl? A broad band near 3300 answers the first; the region from 1650 to 1800 answers the second. An aromatic ring with an O-H and no carbonyl is a phenol.",
      "approach": "Step 1: Read the high region: a broad, strong band centred at 3300 is a hydrogen-bonded O-H, and the small band at 3050 says the compound also has aromatic C-H. Nothing appears below 3000, so there is no sp3 C-H.\nStep 2: Read the carbonyl region: empty. This is not an acid, ester or ketone.\nStep 3: Confirm the ring: 1600 and 1500 ring stretches and the 750/690 monosubstituted pattern.\nStep 4: The strong band near 1230 is the aryl C-O stretch, higher than an alcohol's 1050 because the C-O bond has partial double-bond character. Everything fits phenol.",
      "note": "Phenol's C-O stretch near 1230 and its aromatic bands separate it from alcohols, and its lack of a carbonyl separates it from benzoic acid. Acidity does the same job chemically: a phenol dissolves in NaOH but not in NaHCO3, an acid dissolves in both, an alcohol in neither.",
      "options": {
        "A": "Correct. A broad O-H at 3300, aromatic C-H and ring bands, an aryl C-O near 1230 and no carbonyl is a phenol.",
        "B": "Cyclohexanol has the broad O-H, but its C-H stretches are all sp3 and fall below 3000, it has no ring stretches at 1600 and 1500, and its C-O stretch is near 1070 rather than 1230.",
        "C": "Anisole has the aromatic bands and a strong C-O near 1250, but no O-H: its spectrum is flat above 3100. It also shows the methyl group's sp3 C-H stretches near 2950.",
        "D": "Benzoic acid would show a strong carbonyl near 1690 and an O-H so broad that it runs from 2500 to 3300. The carbonyl region here is empty and the O-H band, though broad, is the narrower alcohol type."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q31",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Medium",
    "question_text": "The simulated infrared spectrum of an unknown compound is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 2960,
          "w": 40,
          "d": 50
        },
        {
          "xc": 2820,
          "w": 30,
          "d": 30
        },
        {
          "xc": 2720,
          "w": 30,
          "d": 30
        },
        {
          "xc": 1725,
          "w": 20,
          "d": 85
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Butanal",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Butanone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Butanoic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Butanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Once a carbonyl band is found, the next step is to decide which carbonyl compound it belongs to, and for an aldehyde the answer lies just below the C-H region: the hydrogen on the carbonyl carbon gives a pair of weak bands near 2720 and 2820 that no other carbonyl compound has.",
      "approach": "Step 1: Find the carbonyl: a strong band at 1725, an unconjugated aldehyde or ketone value.\nStep 2: Look between 2700 and 2850: two weak bands at 2720 and 2820. That is the aldehyde C-H stretch, split by Fermi resonance with an overtone of the aldehyde C-H bend.\nStep 3: Check for an O-H: nothing broad near 3300 and nothing running below 3000, so neither an alcohol nor an acid.\nStep 4: A carbonyl with the aldehyde doublet and no O-H is an aldehyde; the four-carbon aldehyde is butanal.",
      "note": "The 2720 band is the one to look for, because it lies below the sp3 C-H stretches and cannot be confused with them; the 2820 band can sit on the shoulder of the 2870 CH3 stretch. Together with the carbonyl they make aldehydes among the easiest carbonyl compounds to recognize.",
      "options": {
        "A": "Correct. A carbonyl at 1725 plus the aldehyde C-H pair at 2720 and 2820, with no O-H, identifies butanal.",
        "B": "Butanone has the carbonyl, near 1715, but no hydrogen on its carbonyl carbon and therefore nothing at 2720 and 2820. The doublet is the difference between the two isomers.",
        "C": "Butanoic acid would show a very broad O-H band from 2500 to 3300 on top of the C-H stretches, and its carbonyl would sit near 1710. Nothing broad appears here.",
        "D": "1-Butanol has no carbonyl; it would show a broad O-H at 3300 and a C-O stretch near 1050 instead of the 1725 band."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q35",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Easy",
    "question_text": "The simulated infrared spectrum of an unknown compound is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3300,
          "w": 150,
          "d": 70
        },
        {
          "xc": 2950,
          "w": 40,
          "d": 45
        },
        {
          "xc": 1030,
          "w": 40,
          "d": 60
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Methanol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Acetic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Dimethyl ether",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methylamine",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The broad band near 3300 is the most recognizable feature in infrared spectroscopy, and its shape carries the assignment: one broad, rounded, strong band is a hydrogen-bonded O-H. Amine N-H bands are sharper and come as a pair for a primary amine; acid O-H bands are broader still and drag below 3000.",
      "approach": "Step 1: Read the high region: a single broad, strong band centred at 3300. A hydrogen-bonded alcohol O-H.\nStep 2: Note its width: it does not extend below about 3000, so it is not the dimer O-H of a carboxylic acid.\nStep 3: Read the carbonyl region: empty, confirming the compound is not an acid, and the sp3 C-H stretch at 2950 says the carbon bears hydrogens.\nStep 4: The strong band near 1030 is the C-O stretch of a primary alcohol. A one-carbon alcohol with these bands is methanol.",
      "note": "The C-O stretch position sorts alcohols by class: primary near 1050, secondary near 1100, tertiary near 1150, phenols near 1230. It is a fingerprint-region band, so treat it as confirmation rather than as the primary evidence.",
      "options": {
        "A": "Correct. One broad O-H at 3300, an sp3 C-H stretch, a C-O stretch near 1030 and no carbonyl is a simple alcohol.",
        "B": "Acetic acid has a carbonyl near 1710, and its O-H is far broader, spreading from 2500 to 3300. The carbonyl region here is empty and the O-H stops near 3000.",
        "C": "Dimethyl ether has no O-H, so its spectrum is flat above 3000 apart from C-H stretches; its strong C-O band near 1100 would be its only distinctive feature.",
        "D": "Methylamine would show two sharp N-H bands near 3300 and 3400, not one broad rounded band, and an N-H scissoring bend near 1600 that this spectrum lacks."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q38",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Easy",
    "question_text": "The simulated electron-ionization mass spectrum of an unknown compound is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20
        },
        {
          "x": 27,
          "y": 5
        },
        {
          "x": 42,
          "y": 6
        },
        {
          "x": 43,
          "y": 100
        },
        {
          "x": 58,
          "y": 35
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Acetone",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propanal",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Allyl alcohol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Butanone",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A ketone's spectrum is built from alpha-cleavage: the bond between the carbonyl carbon and an alkyl group breaks and the acylium ion keeps the charge. For a symmetrical ketone there is only one alkyl group to lose, so the spectrum is unusually clean: a molecular ion, one dominant acylium ion, and little else.",
      "approach": "Step 1: Find the molecular ion: 58, present at about a third of the base peak.\nStep 2: Read the base peak: 43, which is M - 15. A methyl radical has been lost from the carbonyl carbon, leaving CH3-C=O+, the acetyl cation.\nStep 3: Note the simplicity: no 29, no 57, no even-mass fragment. Both alkyl groups are methyl, so alpha-cleavage on either side gives the same ion and there is no gamma hydrogen for a rearrangement.\nStep 4: The small 15 is CH3+. A C3H6O compound giving only 58, 43 and 15 is acetone.",
      "note": "The acetyl cation at 43 is one of the commonest peaks in mass spectrometry, appearing for methyl ketones, acetates and acetic acid alike. It becomes diagnostic only together with the molecular ion, which says how large the rest of the molecule is.",
      "options": {
        "A": "Correct. A molecular ion at 58 with a single dominant fragment at 43, the acetyl cation from loss of one methyl, is acetone.",
        "B": "Propanal has the same molecular ion at 58, but its alpha-cleavage loses the ethyl group to give CHO+ at 29, and 29 is its base peak; it also shows 57 from loss of the aldehyde hydrogen. It has no strong 43.",
        "C": "Allyl alcohol is also C3H6O, but its base peak is 57 from loss of the hydroxyl hydrogen, with strong 31 and 29 from the alcohol's alpha-cleavage. A 43 base peak would be unexpected for it.",
        "D": "Butanone gives 43 as its base peak too, but its molecular ion is 72, and it shows a second acylium ion at 57 from losing the methyl instead of the ethyl. The observed molecular ion is 58."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q41",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Medium",
    "question_text": "The simulated electron-ionization mass spectrum of an unknown aromatic compound is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 50,
          "y": 20
        },
        {
          "x": 51,
          "y": 40
        },
        {
          "x": 77,
          "y": 90
        },
        {
          "x": 78,
          "y": 10
        },
        {
          "x": 105,
          "y": 95
        },
        {
          "x": 106,
          "y": 100
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Benzaldehyde",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzyl alcohol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetophenone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Toluene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An aromatic aldehyde gives a pair of tall peaks one unit apart: the molecular ion, strong because the ring stabilizes it, and M - 1, from loss of the aldehyde hydrogen to give the benzoyl cation, which is an acylium ion stabilized by both the oxygen and the ring. Loss of CO from that ion then gives the phenyl cation.",
      "approach": "Step 1: Find the molecular ion: 106, even, the base peak. An aromatic compound with a strong M+.\nStep 2: Read the peak beside it: 105 at nearly the same height is M - 1. Only a hydrogen bonded to a carbonyl carbon is lost this readily; the ion is C6H5-C=O+.\nStep 3: Read 77: it is 105 - 28, loss of carbon monoxide from the benzoyl cation to give the phenyl cation, whose daughters are 51 and 50.\nStep 4: 106 = C7H6O. A benzene ring with a CHO group is benzaldehyde.",
      "note": "Acetophenone shares the 105 and 77 peaks, because it forms the same benzoyl cation by losing its methyl group, but its molecular ion is 120 and it shows a 43 from the acetyl cation. The molecular ion, not the fragments, separates the two.",
      "options": {
        "A": "Correct. A strong molecular ion at 106 with an equally strong M - 1 at 105 (the benzoyl cation) and 77 (loss of CO) is benzaldehyde.",
        "B": "Benzyl alcohol has a molecular ion at 108 and fragments at 107, 79 and 77, with 79 or 107 usually the base peak. It shows no 105 and its molecular ion is two units heavier.",
        "C": "Acetophenone gives 105 and 77 as well, but from a molecular ion at 120 by loss of a methyl radical, and it adds the acetyl cation at 43. There is no 120 and no 43 here.",
        "D": "Toluene has no oxygen: its molecular ion is 92 and its base peak is the tropylium ion at 91. Neither appears in this spectrum."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q42",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Medium",
    "question_text": "The simulated infrared spectrum of an unknown compound is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3050,
          "w": 20,
          "d": 20
        },
        {
          "xc": 2950,
          "w": 30,
          "d": 30
        },
        {
          "xc": 1600,
          "w": 20,
          "d": 35
        },
        {
          "xc": 1500,
          "w": 20,
          "d": 45
        },
        {
          "xc": 1250,
          "w": 40,
          "d": 80
        },
        {
          "xc": 1040,
          "w": 30,
          "d": 50
        },
        {
          "xc": 750,
          "w": 30,
          "d": 45
        },
        {
          "xc": 690,
          "w": 30,
          "d": 45
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Anisole",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Phenol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Methyl benzoate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Toluene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An ether has no O-H and no carbonyl, so its only strong evidence is the C-O stretch, and for an aryl alkyl ether there are two of them: the aryl C-O near 1250 and the alkyl C-O near 1040. Finding those two strong bands in a spectrum that is otherwise just an alkyl-substituted benzene is the whole identification.",
      "approach": "Step 1: Read above 3000: a weak aromatic C-H at 3050 and sp3 C-H at 2950, so the ring carries a group with hydrogens on sp3 carbon. No O-H.\nStep 2: Read the carbonyl region: empty, so no ester, ketone or acid.\nStep 3: Read the fingerprint region: a very strong band at 1250 and a strong one at 1040. Two strong C-O stretches are an aryl alkyl ether.\nStep 4: Confirm the ring with the 1600/1500 pair and the 750/690 monosubstituted pattern. A methoxy group on a benzene ring is anisole.",
      "note": "The strength of an ether's C-O band is what makes it usable: a C-O stretch is one of the most intense bands in the fingerprint region because the bond is so polar. A plain alkyl ether shows one such band near 1100; the aryl ether's 1250 band is the higher of its two because the aryl C-O bond is strengthened by resonance.",
      "options": {
        "A": "Correct. Aromatic and sp3 C-H, no O-H, no carbonyl, and the strong 1250/1040 pair of C-O stretches identify a methoxybenzene.",
        "B": "Phenol has a strong C-O near 1230 too, but it also has a broad O-H band at 3300 and no sp3 C-H. This spectrum has sp3 C-H and nothing broad.",
        "C": "Methyl benzoate has a strong ester carbonyl near 1725 in addition to its C-O bands. The carbonyl region here is empty.",
        "D": "Toluene has the aromatic and sp3 C-H bands but no oxygen; without a C-O bond it cannot produce the strong bands at 1250 and 1040."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q44",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Medium",
    "question_text": "The simulated electron-ionization mass spectrum of an unknown compound of formula $C_3H_6O_2$ is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 15,
          "y": 20
        },
        {
          "x": 29,
          "y": 8
        },
        {
          "x": 42,
          "y": 10
        },
        {
          "x": 43,
          "y": 100
        },
        {
          "x": 59,
          "y": 10
        },
        {
          "x": 74,
          "y": 25
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Methyl acetate",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propanoic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Ethyl formate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Methyl propanoate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Esters fragment on both sides of the carbonyl: losing the alkoxy group gives an acylium ion that identifies the acid part, and losing the acyl group's alkyl chain gives an alkoxycarbonyl ion that identifies the alcohol part. Reading both losses from the molecular ion reconstructs the ester.",
      "approach": "Step 1: Find the molecular ion: 74, present at a quarter of the base peak; even, so no nitrogen.\nStep 2: Read the base peak: 43 is M - 31, loss of OCH3 as a radical, leaving CH3-C=O+. The acid part is acetate and the alcohol part is methanol.\nStep 3: Read 59: M - 15, loss of the acetyl methyl, leaving CH3O-C=O+, the methoxycarbonyl ion. That confirms the methoxy group.\nStep 4: An ester with an acetyl cation at 43 and a methoxycarbonyl ion at 59 is methyl acetate.",
      "note": "The two ions 43 and 59 are complementary: each is what remains after losing the group the other contains. Reading such a complementary pair, and checking that the two losses add to the molecular weight, is the standard way to place an ester's two halves.",
      "options": {
        "A": "Correct. M at 74, a base peak at 43 from loss of methoxy, and 59 from loss of the acetyl methyl are the two halves of methyl acetate.",
        "B": "Propanoic acid has the same molecular ion but fragments quite differently: its strongest peaks are 28, 74 itself, 45 (COOH+) and 57 (M - 17). It shows no dominant 43.",
        "C": "Ethyl formate is also C3H6O2, but its main ions are 31 (CH2=OH+ from the ethoxy group), 29 (HCO+) and 28; there is no acetyl cation at 43 because it has no acetyl group.",
        "D": "Methyl propanoate has one more carbon and a molecular ion at 88; its acylium ion is CH3CH2CO+ at 57 and its methoxycarbonyl ion at 59. The observed molecular ion is 74."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q47",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Easy",
    "question_text": "The simulated infrared spectrum of an unknown compound is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 2920,
          "w": 40,
          "d": 65
        },
        {
          "xc": 2850,
          "w": 40,
          "d": 60
        },
        {
          "xc": 1450,
          "w": 20,
          "d": 35
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Cyclohexane",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclohexene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Cyclohexanol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Diethyl ether",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A spectrum that shows only sp3 C-H stretches and a CH2 bend, and nothing else of any strength, belongs to a saturated hydrocarbon. Alkanes are identified by what they lack: no band above 3000, no O-H, no carbonyl, no C=C, no strong band in the fingerprint region.",
      "approach": "Step 1: Read the C-H region: strong bands at 2920 and 2850, the asymmetric and symmetric CH2 stretches, and nothing above 3000.\nStep 2: Scan for functional groups: nothing broad near 3300, nothing near 1700, nothing near 1650, nothing in the triple-bond window.\nStep 3: Read the fingerprint region: only the CH2 scissoring bend near 1450. No strong C-O band.\nStep 4: A compound made only of CH2 groups is a cycloalkane; cyclohexane fits.",
      "note": "An alkane's spectrum is nearly the same whatever its size, so IR cannot tell cyclohexane from hexane or decane with any confidence. It can only say the compound is saturated and functional-group free; the molecular ion from mass spectrometry gives the rest.",
      "options": {
        "A": "Correct. Only CH2 stretches at 2920 and 2850 and a CH2 bend at 1450, with no functional-group bands at all, is a cycloalkane.",
        "B": "Cyclohexene would add a sharp =C-H stretch near 3020 and a C=C stretch near 1650, both absent here.",
        "C": "Cyclohexanol would show a broad, strong O-H band at 3300 and a C-O stretch near 1070. The spectrum has neither.",
        "D": "Diethyl ether has sp3 C-H bands like these, but its strong C-O stretch near 1120 would dominate the fingerprint region, and no such band appears."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q48",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Medium",
    "question_text": "The simulated infrared spectrum of an unknown compound is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 2960,
          "w": 40,
          "d": 40
        },
        {
          "xc": 1715,
          "w": 20,
          "d": 85
        },
        {
          "xc": 1360,
          "w": 30,
          "d": 45
        },
        {
          "xc": 1220,
          "w": 30,
          "d": 40
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Acetone",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propanal",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Propanoic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "2-Propanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A ketone is identified by a strong carbonyl band at the unconjugated value, 1715, together with an absence: no aldehyde C-H doublet below 2850, no O-H anywhere, no strong C-O pair that would mark an ester. The carbonyl alone says carbonyl; the absences say ketone.",
      "approach": "Step 1: Find the carbonyl: a strong band at 1715, the value for a saturated, unstrained ketone.\nStep 2: Look between 2700 and 2850 for the aldehyde C-H pair: nothing, so the carbonyl carbon carries no hydrogen.\nStep 3: Look above 3000 for an O-H: nothing broad, so neither an alcohol nor an acid.\nStep 4: The remaining bands, sp3 C-H at 2960 and the methyl bends near 1360, fit a small ketone. Acetone is the three-carbon ketone.",
      "note": "Acetone's carbonyl is so intense that it is used as a reference band, and its methyl symmetric bend near 1360 is characteristic of a CH3 next to a carbonyl. Ketones and aldehydes share the carbonyl region; the 2720/2820 doublet is what separates them.",
      "options": {
        "A": "Correct. A carbonyl at 1715, no aldehyde C-H doublet and no O-H is a simple ketone.",
        "B": "Propanal has the carbonyl near 1725 but would also show the aldehyde C-H doublet at 2720 and 2820. The region below 2850 is empty here.",
        "C": "Propanoic acid would show a very broad O-H from 2500 to 3300 on top of the C-H stretches, with the carbonyl near 1710. Nothing broad appears above 2500.",
        "D": "2-Propanol has no carbonyl at all; its spectrum shows a broad O-H at 3300 and a C-O stretch near 1130, neither of which is present."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q52",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Medium",
    "question_text": "The simulated electron-ionization mass spectrum of an unknown compound of formula $C_3H_8O$ is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 27,
          "y": 15
        },
        {
          "x": 29,
          "y": 10
        },
        {
          "x": 43,
          "y": 20
        },
        {
          "x": 45,
          "y": 100
        },
        {
          "x": 59,
          "y": 3
        },
        {
          "x": 60,
          "y": 1
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-Propanol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Propanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Acetone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propanal",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An alcohol's base peak tells you what is attached to the carbinol carbon, because alpha-cleavage loses the largest alkyl group and keeps the oxygen-bearing fragment. A primary alcohol gives 31; a secondary alcohol with a methyl on the carbinol carbon gives 45; and the molecular ion is nearly absent in both because alpha-cleavage is so easy.",
      "approach": "Step 1: Look for the molecular ion: 60 is barely visible, about 1%, with a small 59 beside it. A weak M+ at 60 is typical of a C3 alcohol.\nStep 2: Read the base peak: 45, which is M - 15. A methyl radical was lost from the carbinol carbon, leaving CH3CH=OH+.\nStep 3: Deduce the structure: for alpha-cleavage to lose a methyl and leave a CH3CH=OH+ ion, the carbinol carbon must carry two methyls. That is 2-propanol.\nStep 4: Check the alternative: 1-propanol's alpha-cleavage would lose ethyl and give CH2=OH+ at 31, which is absent here.",
      "note": "The two propanols are the textbook pair for this rule: 31 for the primary alcohol, 45 for the secondary. The same rule extends to the butanols, where 1-butanol gives 31, 2-butanol 45 and 2-methyl-2-propanol 59, so the base peak alone classifies the alcohol.",
      "options": {
        "A": "Correct. A faint molecular ion at 60 and a base peak at 45 from loss of a methyl group at the carbinol carbon is 2-propanol.",
        "B": "1-Propanol also has a faint molecular ion at 60, but its base peak is 31, CH2=OH+, from losing the ethyl group; its 45 is minor. Here 31 is absent and 45 dominates.",
        "C": "Acetone has a molecular ion at 58, not 60, and it is clearly visible; its base peak is the acetyl cation at 43. Acetone is C3H6O, not C3H8O.",
        "D": "Propanal is also C3H6O with M at 58, and its base peak is 29. It has neither the formula nor the 45 base peak."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q58",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Medium",
    "question_text": "The simulated infrared spectrum of an unknown compound is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3430,
          "w": 30,
          "d": 40
        },
        {
          "xc": 3350,
          "w": 30,
          "d": 40
        },
        {
          "xc": 3050,
          "w": 20,
          "d": 20
        },
        {
          "xc": 1620,
          "w": 20,
          "d": 50
        },
        {
          "xc": 1500,
          "w": 20,
          "d": 45
        },
        {
          "xc": 750,
          "w": 30,
          "d": 45
        },
        {
          "xc": 690,
          "w": 30,
          "d": 45
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Aniline",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "N-Methylaniline",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Phenol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzonitrile",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Bands in the 3300 to 3500 region are counted, not just noticed. Two medium, fairly sharp bands are the symmetric and asymmetric stretches of an NH2 group; one band is a secondary amine's single N-H or, if broad, an alcohol; none means no N-H or O-H at all.",
      "approach": "Step 1: Read the high region: two medium bands at 3430 and 3350, sharp rather than broad. That is a primary amine's NH2 pair.\nStep 2: Note the aromatic C-H at 3050 and the absence of sp3 C-H below 3000: the nitrogen carries no alkyl group and neither does the ring.\nStep 3: Read the double-bond region: a band at 1620, stronger than a ring stretch alone, is the NH2 scissoring bend overlapping the ring stretch; 1500 is the second ring band.\nStep 4: The 750/690 pair confirms a monosubstituted ring. An NH2 on a benzene ring with nothing else is aniline.",
      "note": "Amine N-H bands are weaker and sharper than an alcohol O-H because N-H hydrogen bonds are weaker. The two-band pattern is the primary amine's fingerprint and is shared by primary amides, which add a carbonyl near 1650 that aniline lacks.",
      "options": {
        "A": "Correct. Two sharp N-H bands, aromatic C-H with no sp3 C-H, an NH2 bend near 1620 and a monosubstituted ring pattern is aniline.",
        "B": "N-Methylaniline has only one N-H and gives a single band near 3400, and its methyl group adds sp3 C-H stretches near 2900 that this spectrum does not show.",
        "C": "Phenol has one O-H, giving a single broad, rounded band near 3300 rather than two sharp ones, and it shows a strong C-O stretch near 1230.",
        "D": "Benzonitrile has no N-H at all; it would show a strong sharp band near 2230 from the C-N triple bond and nothing in the 3300 to 3500 region."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q60",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated electron-ionization mass spectrum of an unknown aromatic compound is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 50,
          "y": 10
        },
        {
          "x": 51,
          "y": 25
        },
        {
          "x": 77,
          "y": 50
        },
        {
          "x": 105,
          "y": 100
        },
        {
          "x": 140,
          "y": 25
        },
        {
          "x": 142,
          "y": 8
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Benzoyl chloride",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzaldehyde",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Chlorobenzene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Acetophenone",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Two independent readings meet in this spectrum: the isotope pattern of the molecular ion says a chlorine is present, and the fragment ions say a benzoyl group is present. A chlorine attached to a carbonyl is lost as an atom to leave the acylium ion, so the base peak carries no chlorine and no isotope pair, while the molecular ion does.",
      "approach": "Step 1: Find the molecular ion: 140 with 142 at about a third of its height, a 3:1 pair. One chlorine, and the molecular weight is 140.\nStep 2: Read the base peak: 105, with no isotope companion at 107. The chlorine has been lost: 140 - 35 = 105, leaving C6H5-C=O+, the benzoyl cation.\nStep 3: Read 77: 105 - 28, loss of CO from the benzoyl cation to the phenyl cation, with 51 and 50 below it.\nStep 4: A benzoyl group and one chlorine at mass 140 is benzoyl chloride, C7H5ClO.",
      "note": "Watch which peaks carry the isotope pair. Here only the molecular ion does; every fragment is chlorine-free, which places the chlorine on the group that is lost first. In chlorobenzene the opposite holds: the pair follows the molecular ion and the chlorine is lost only to give 77.",
      "options": {
        "A": "Correct. A 3:1 pair at 140/142 gives one chlorine, and the chlorine-free base peak at 105 is the benzoyl cation left when it departs; 77 follows by loss of CO.",
        "B": "Benzaldehyde has no chlorine and no M+2 pair; its molecular ion is 106 with an M - 1 at 105. The observed molecular ion is 140 with an isotope companion.",
        "C": "Chlorobenzene has the 3:1 pair, but at 112/114, and its molecular ion is the base peak. It has no carbonyl and cannot give the benzoyl cation at 105.",
        "D": "Acetophenone gives 105 and 77 from its molecular ion at 120 by loss of a methyl, and shows 43 for the acetyl cation. It contains no chlorine, so no M+2 pair, and no peak at 140."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q61",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated electron-ionization mass spectrum of an unknown aromatic compound is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 51,
          "y": 20
        },
        {
          "x": 77,
          "y": 55
        },
        {
          "x": 105,
          "y": 100
        },
        {
          "x": 122,
          "y": 50
        },
        {
          "x": 123,
          "y": 8
        },
        {
          "x": 150,
          "y": 35
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Ethyl benzoate",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Methyl benzoate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzoic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Phenyl acetate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An aromatic ester shows the benzoyl cation at 105 whatever its alcohol part, so the alcohol part has to be read from the molecular ion and from the losses that lead to 105. An ethyl ester adds one loss the methyl ester cannot make: loss of ethylene, 28 units, by a hydrogen transfer from the ethyl group to the carbonyl oxygen, which leaves the ionized acid.",
      "approach": "Step 1: Find the molecular ion: 150, even, at about a third of the base peak. Aromatic, no nitrogen.\nStep 2: Read the base peak: 105, the benzoyl cation, so the acid part is benzoic. 150 - 105 = 45, loss of an OCH2CH3 radical: the alcohol part is ethanol.\nStep 3: Read 122: 150 - 28, loss of ethylene by rearrangement to give the benzoic acid radical cation. This peak requires an ethyl (or larger) ester; a methyl ester cannot lose an alkene.\nStep 4: 77 and 51 are the usual phenyl fragments. Benzoic acid part plus ethyl alcohol part is ethyl benzoate, C9H10O2.",
      "note": "The 122 peak is the ester analogue of a McLafferty rearrangement on the alcohol side. Recognizing an M - 28 in an ester as loss of ethylene from an ethyl group, rather than loss of CO, comes from asking what neutral molecule the structure can actually expel.",
      "options": {
        "A": "Correct. M at 150, the benzoyl cation at 105 from loss of ethoxy, and 122 from loss of ethylene identify the ethyl ester of benzoic acid.",
        "B": "Methyl benzoate gives 105 and 77 as well, but from a molecular ion at 136 by loss of OCH3 (31), and it shows no 122 because a methyl group has no alkene to lose.",
        "C": "Benzoic acid has a molecular ion at 122, which is its strongest high-mass peak, with 105 from loss of OH and 77. There is no 150 in its spectrum; here 122 is a fragment below a molecular ion at 150.",
        "D": "Phenyl acetate has a molecular ion at 136 and fragments by losing ketene to give the phenol radical cation at 94 as its base peak, with 43 for the acetyl cation. It shows no 105 and no 150."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q67",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Hard",
    "question_text": "The simulated infrared spectrum of an unknown compound is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 2930,
          "w": 40,
          "d": 55
        },
        {
          "xc": 2860,
          "w": 40,
          "d": 45
        },
        {
          "xc": 1715,
          "w": 20,
          "d": 85
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Cyclohexanone",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclopentanone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Cyclohexenone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclohexanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "The exact position of a carbonyl band carries structural information beyond the functional group. A six-membered cyclic ketone absorbs at the same value as an open-chain ketone, 1715; a five-membered ring pushes the band up to 1745 through angle strain; conjugation with a C=C pulls it down to 1685. Reading the number to within 10 wavenumbers sorts these three.",
      "approach": "Step 1: Find the carbonyl: 1715, precisely the unstrained, unconjugated ketone value.\nStep 2: Check for strain: a five-membered cyclic ketone would sit at 1745, thirty wavenumbers higher. It does not.\nStep 3: Check for conjugation: an enone would sit near 1685 and would add a C=C band near 1620 and an sp2 C-H above 3000. None of these appears.\nStep 4: Check for an O-H: nothing broad near 3300. The compound is a saturated six-membered cyclic ketone, cyclohexanone.",
      "note": "This is the one item in the set where the distractors differ from the key by a shift rather than by the presence or absence of a band. It rewards reading the carbonyl position with care; a ketone at 1745 is either strained or has an electronegative substituent on the alpha carbon.",
      "options": {
        "A": "Correct. A carbonyl at exactly 1715 with only sp3 C-H and no other bands is an unstrained saturated ketone.",
        "B": "Cyclopentanone absorbs near 1745; angle compression in the five-membered ring gives its C=O more s-character and pushes the band up by about thirty wavenumbers from the observed position.",
        "C": "2-Cyclohexenone's conjugated carbonyl absorbs near 1685, and its spectrum would add a C=C stretch near 1620 and a sharp =C-H stretch above 3000. The observed band is at 1715 and no alkene bands are present.",
        "D": "Cyclohexanol has no carbonyl; it would show a broad O-H band at 3300 and a C-O stretch near 1070 in place of the strong 1715 band."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q73",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Medium",
    "question_text": "The simulated infrared spectrum of an unknown compound is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 2970,
          "w": 40,
          "d": 50
        },
        {
          "xc": 2870,
          "w": 30,
          "d": 45
        },
        {
          "xc": 1070,
          "w": 40,
          "d": 75
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Tetrahydrofuran",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "1-Butanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Butanone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Cyclopentane",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A saturated ether looks like an alkane with one addition: a strong C-O stretch in the fingerprint region near 1070 to 1150. Because the C-O bond is polar, that one band is intense enough to be the tallest peak in the spectrum, which is what separates an ether from a hydrocarbon of the same size.",
      "approach": "Step 1: Read the C-H region: sp3 stretches at 2970 and 2870, nothing above 3000.\nStep 2: Check for an O-H: nothing near 3300, so the oxygen is not a hydroxyl group.\nStep 3: Check the carbonyl region: empty, so the oxygen is not in a C=O.\nStep 4: Read the fingerprint region: a strong band at 1070 is a C-O single-bond stretch. An oxygen with no O-H and no C=O but a strong C-O is an ether; tetrahydrofuran is the cyclic ether among the options.",
      "note": "Alcohols also show a strong C-O band near 1050, so the C-O stretch alone does not distinguish an ether from an alcohol; the O-H band does. An ether's spectrum is a hydrocarbon spectrum plus one strong band, and that is all it will ever show.",
      "options": {
        "A": "Correct. Only sp3 C-H and one strong C-O stretch at 1070, with no O-H and no carbonyl, is a saturated ether.",
        "B": "1-Butanol shares the C-O band near 1050 but would also show a broad, strong O-H stretch centred at 3300. The spectrum is flat there.",
        "C": "Butanone would show a strong carbonyl at 1715, and the carbonyl region of this spectrum is empty.",
        "D": "Cyclopentane has the same sp3 C-H bands but no oxygen; without a C-O bond it cannot produce the strong 1070 band that dominates this spectrum."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q78",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Medium",
    "question_text": "The simulated infrared spectrum of an unknown hydrocarbon is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3020,
          "w": 20,
          "d": 25
        },
        {
          "xc": 2920,
          "w": 40,
          "d": 55
        },
        {
          "xc": 2850,
          "w": 40,
          "d": 45
        },
        {
          "xc": 1650,
          "w": 20,
          "d": 20
        },
        {
          "xc": 720,
          "w": 30,
          "d": 40
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Cyclohexene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Cyclohexane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Benzene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "1-Hexyne",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An alkene shows three modest bands that together are unmistakable: a sharp =C-H stretch just above 3000, a C=C stretch near 1650 whose intensity depends on how unsymmetrical the double bond is, and an out-of-plane C-H bend below 1000. A cycloalkene adds strong sp3 C-H stretches from its CH2 groups.",
      "approach": "Step 1: Read the C-H region: a small sharp band at 3020 above the 3000 line, and strong bands at 2920 and 2850 below it. The compound has both sp2 and sp3 C-H.\nStep 2: Read the double-bond region: a weak band at 1650, a C=C stretch. Weak because the cis-disubstituted double bond in a ring has only a small dipole change.\nStep 3: Check the alternatives: no 1600/1480 aromatic pair, no triple-bond band near 2120, no sp C-H at 3300.\nStep 4: A hydrocarbon with one C=C and several CH2 groups is a cycloalkene; cyclohexene fits, with the cis =C-H bend near 720.",
      "note": "IR does not distinguish cyclohexene from cyclopentene or from a cis internal acyclic alkene; all give the same three alkene bands. Ring size shows up in the mass spectrum (cyclohexene's retro-Diels-Alder loss of ethylene to give m/z 54) rather than in the IR.",
      "options": {
        "A": "Correct. An sp2 C-H at 3020, strong CH2 stretches, a weak C=C at 1650 and no aromatic or triple-bond bands is a cycloalkene.",
        "B": "Cyclohexane has no double bond: no band above 3000 and nothing at 1650. Its spectrum is only the CH2 stretches and bend.",
        "C": "Benzene has no sp3 C-H, so nothing below 3000, and it shows the 1600/1480 aromatic pair rather than a single C=C band at 1650.",
        "D": "1-Hexyne would show a strong, sharp sp C-H stretch at 3300 and a triple-bond band near 2120. Neither is present, and an alkyne has no band at 1650."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q85",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Medium",
    "question_text": "The simulated infrared spectrum of an unknown hydrocarbon is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3080,
          "w": 20,
          "d": 25
        },
        {
          "xc": 2950,
          "w": 40,
          "d": 45
        },
        {
          "xc": 1640,
          "w": 20,
          "d": 35
        },
        {
          "xc": 990,
          "w": 30,
          "d": 50
        },
        {
          "xc": 910,
          "w": 30,
          "d": 60
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Propene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Propane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Propyne",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Propanal",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A terminal alkene is the easiest alkene to recognize: its =CH2 group gives an sp2 C-H stretch near 3080, a C=C stretch near 1640 that is reasonably strong because the double bond is unsymmetrical, and two strong out-of-plane bends near 910 and 990 that no other substitution pattern produces.",
      "approach": "Step 1: Read the C-H region: a sharp band at 3080 above the 3000 line, plus sp3 C-H at 2950. Both types of carbon are present.\nStep 2: Read the double-bond region: a band at 1640, a C=C stretch. No carbonyl anywhere near 1700.\nStep 3: Read the low region: two strong bands at 910 and 990, the =CH2 and =CH out-of-plane bends of a monosubstituted alkene.\nStep 4: A monosubstituted alkene with one alkyl carbon is propene.",
      "note": "The out-of-plane bends are the part of an alkene spectrum that reports substitution: 910 and 990 for a terminal alkene, one band near 890 for a 1,1-disubstituted one, near 970 for a trans-disubstituted one, and near 700 for a cis. They lie in the fingerprint region but are strong enough to trust.",
      "options": {
        "A": "Correct. The sp2 C-H at 3080, the C=C at 1640 and the 910/990 pair of out-of-plane bends identify a terminal alkene.",
        "B": "Propane has no double bond and would show nothing above 3000, nothing at 1640 and nothing near 910 and 990. Its spectrum would be only sp3 C-H bands.",
        "C": "Propyne would show a strong, sharp sp C-H stretch at 3300 and a triple-bond band near 2120, with nothing at 1640. This spectrum has neither alkyne band.",
        "D": "Propanal would show a strong carbonyl near 1725 and the aldehyde C-H doublet at 2720 and 2820, and no alkene bands. The carbonyl region here is empty."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q86",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Medium",
    "question_text": "The simulated infrared spectrum of an unknown compound is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 3080,
          "w": 20,
          "d": 20
        },
        {
          "xc": 1600,
          "w": 20,
          "d": 30
        },
        {
          "xc": 1520,
          "w": 30,
          "d": 80
        },
        {
          "xc": 1350,
          "w": 30,
          "d": 80
        },
        {
          "xc": 700,
          "w": 30,
          "d": 45
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Nitrobenzene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Benzoic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Aniline",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Benzonitrile",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A nitro group is a pair of strong bands, not one: the asymmetric and symmetric N-O stretches near 1520 and 1350, both intense because the N-O bonds are very polar. Two strong bands in those positions, with no carbonyl and no N-H, is a nitro compound whatever else is present.",
      "approach": "Step 1: Read above 3000: only a weak aromatic C-H at 3080. No O-H, no N-H pair, no sp3 C-H.\nStep 2: Read the carbonyl region: empty, so no acid, ester or ketone.\nStep 3: Read the two strongest bands: 1520 and 1350. That pairing, both intense, is the NO2 group; the 1600 band beside them is a ring stretch.\nStep 4: The 700 band completes a monosubstituted benzene. A nitro group on a bare ring is nitrobenzene.",
      "note": "The nitro pair is sometimes mistaken for aromatic ring stretches, which also fall near 1500 and 1600, but the ring bands are weak to medium and the nitro bands are among the strongest in any spectrum. Intensity, not just position, makes the assignment.",
      "options": {
        "A": "Correct. Two very strong bands at 1520 and 1350 with aromatic C-H and no O-H, N-H or carbonyl is an aromatic nitro compound.",
        "B": "Benzoic acid would show a strong carbonyl near 1690 and a very broad O-H from 2500 to 3300. This spectrum has an empty carbonyl region and nothing broad.",
        "C": "Aniline would show two sharp N-H bands near 3400 and 3350 and an NH2 bend near 1620, and it has no bands anywhere near as strong as the 1520/1350 pair.",
        "D": "Benzonitrile's distinctive band is a strong, sharp absorption near 2230 from the C-N triple bond, and the triple-bond window in this spectrum is empty."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q90",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Medium",
    "question_text": "The simulated electron-ionization mass spectrum of an unknown compound of formula $C_4H_{10}O$ is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 27,
          "y": 45
        },
        {
          "x": 29,
          "y": 35
        },
        {
          "x": 31,
          "y": 100
        },
        {
          "x": 41,
          "y": 60
        },
        {
          "x": 42,
          "y": 30
        },
        {
          "x": 43,
          "y": 60
        },
        {
          "x": 56,
          "y": 85
        },
        {
          "x": 74,
          "y": 1
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "1-Butanol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "2-Butanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "2-Methyl-2-propanol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Diethyl ether",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "A primary alcohol is recognized by two peaks acting together: 31, the CH2=OH+ ion from alpha-cleavage, and M - 18, from loss of water. The molecular ion itself is almost invisible, so the highest clear peak is the dehydration product, and a student who takes it for the molecular ion will get the formula wrong by 18.",
      "approach": "Step 1: Look for the molecular ion at 74: it is a trace, about 1%. The compound fragments almost completely, which alcohols do.\nStep 2: Read the base peak: 31, CH2=OH+. Alpha-cleavage kept only one carbon with the oxygen, so the OH is on a CH2 at the end of the chain: a primary alcohol.\nStep 3: Read 56: 74 - 18, loss of water to give the butene radical cation. A strong M - 18 confirms an alcohol with a hydrogen available two or three carbons away.\nStep 4: 43 and 41 are C3 fragments of the chain and of the 56 ion. A primary C4 alcohol is 1-butanol.",
      "note": "Diethyl ether is the trap in this set, because it also gives 31 as its base peak. It differs in keeping a visible molecular ion at 74 and an M - 15 at 59, and in having no M - 18, since an ether has no hydroxyl to lose as water.",
      "options": {
        "A": "Correct. A trace molecular ion, a base peak at 31 from alpha-cleavage of a primary alcohol and a strong M - 18 at 56 from dehydration is 1-butanol.",
        "B": "2-Butanol's base peak is 45, from alpha-cleavage that loses the ethyl group and keeps CH3CH=OH+. It shows only a small 31 and its dehydration peak is weaker.",
        "C": "2-Methyl-2-propanol has no molecular ion and a base peak at 59 from loss of a methyl group; it cannot give 31 because its carbinol carbon carries no hydrogen to leave a CH2=OH+ fragment.",
        "D": "Diethyl ether shares the 31 base peak but keeps a clear molecular ion at 74 (about 25%) and an M - 15 at 59, and it shows nothing at 56 because it has no hydroxyl group to lose as water."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q_dynamic_ir_ester",
    "topic": "Dynamic Spectroscopy Analysis",
    "difficulty_level": "Medium",
    "question_text": "The simulated infrared spectrum of an unknown compound is shown. Which compound is consistent with it?",
    "dynamic_spectroscopy": {
      "spec_type": "ir",
      "dips": [
        {
          "xc": 2980,
          "w": 40,
          "d": 45
        },
        {
          "xc": 1740,
          "w": 20,
          "d": 85
        },
        {
          "xc": 1240,
          "w": 40,
          "d": 75
        },
        {
          "xc": 1045,
          "w": 40,
          "d": 55
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Ethyl acetate",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "Butanone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "Butanoic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "Diethyl ether",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "An ester combines a carbonyl with an ether-like C-O, and its spectrum shows both: a strong C=O near 1740, slightly above a ketone because the alkoxy oxygen withdraws inductively, and two strong C-O stretches in the fingerprint region, one near 1240 and one near 1050. The pair of strong C-O bands is what separates an ester from a ketone of the same carbonyl position.",
      "approach": "Step 1: Find the carbonyl: a strong band at 1740, at the top of the ketone-ester range. A value this high with no conjugation suggests an ester.\nStep 2: Check for an O-H: nothing broad above 3000, so not an acid and not an alcohol.\nStep 3: Read the fingerprint region: two strong bands, at 1240 and 1045. A ketone has nothing this intense there; these are the C-O stretches of the ester's C(=O)-O-C unit.\nStep 4: A carbonyl at 1740 with two strong C-O bands and no O-H is an ester; ethyl acetate is the ester among the options.",
      "note": "The carbonyl position alone is not decisive, because a ketone at 1715 and an ester at 1740 are only 25 wavenumbers apart and conjugation or ring strain can move either. The strong C-O bands are the reliable difference, and they are why esters are often described by three bands rather than one.",
      "options": {
        "A": "Correct. A carbonyl at 1740 plus two strong C-O stretches at 1240 and 1045, with no O-H, is the three-band pattern of an ester.",
        "B": "Butanone's carbonyl sits lower, near 1715, and a ketone has no C-O single bonds, so it cannot produce the strong 1240 and 1045 bands.",
        "C": "Butanoic acid would add an enormously broad O-H band from 2500 to 3300 over the C-H region, with the carbonyl near 1710. This spectrum returns to baseline above 3000.",
        "D": "Diethyl ether has a strong C-O stretch near 1120 but no carbonyl at all. The 1740 band rules it out."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q51_elucidation_butyl_acetate",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound X is a neutral liquid. Combustion analysis gives C 62.0% and H 10.4% by mass, the remainder being oxygen. Its mass spectrum is shown: a very weak molecular ion at $m/z = 116$, a base peak at 43, and peaks at 56, 61 and 73. IR: strong bands at $1740$ and $1240\\text{ cm}^{-1}$ and another at $1050\\text{ cm}^{-1}$; no absorption between $3200$ and $3600\\text{ cm}^{-1}$ and nothing below $2850$ other than sp3 C-H. $^1\\text{H}$ NMR ($\\delta$, ppm): 4.06 (t, 2H), 2.05 (s, 3H), 1.60 (m, 2H), 1.37 (m, 2H), 0.93 (t, 3H). X does not effervesce with aqueous $\\text{NaHCO}_3$ and gives no precipitate with 2,4-dinitrophenylhydrazine. Which structure is X?",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 27,
          "y": 15
        },
        {
          "x": 29,
          "y": 18
        },
        {
          "x": 41,
          "y": 28
        },
        {
          "x": 43,
          "y": 100
        },
        {
          "x": 56,
          "y": 55
        },
        {
          "x": 61,
          "y": 15
        },
        {
          "x": 73,
          "y": 25
        },
        {
          "x": 116,
          "y": 2
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "Butyl acetate",
        "is_correct": true,
        "smiles": "CCCCOC(C)=O"
      },
      {
        "option_id": "B",
        "text": "Ethyl butanoate",
        "is_correct": false,
        "smiles": "CCCC(=O)OCC"
      },
      {
        "option_id": "C",
        "text": "Hexanoic acid",
        "is_correct": false,
        "smiles": "CCCCCC(O)=O"
      },
      {
        "option_id": "D",
        "text": "Methyl pentanoate",
        "is_correct": false,
        "smiles": "CCCCC(=O)OC"
      }
    ],
    "feedback": {
      "context": "A structure problem is solved in a fixed order: formula first, from elemental analysis and the molecular ion; unsaturation count next, to learn how many rings or pi bonds to place; functional group next, from IR and any chemical tests; and the carbon skeleton last, from the NMR. Each step narrows the field before the next begins, and the mass spectrum's fragments confirm the final answer.",
      "approach": "Step 1: Empirical formula. Per 100 g: C 62.0/12.01 = 5.16 mol, H 10.4/1.008 = 10.3 mol, O 27.6/16.00 = 1.73 mol. Dividing by 1.73 gives C 2.99, H 5.98, O 1, so C3H6O, mass 58.\nStep 2: Molecular formula. M = 116 = 2 x 58, so C6H12O2. Unsaturation = (2 x 6 + 2 - 12)/2 = 1: one ring or one pi bond.\nStep 3: Functional group. IR 1740 is a carbonyl (that is the one unsaturation) and the two strong C-O bands at 1240 and 1050 mark an ester; no O-H band and no NaHCO3 effervescence exclude an acid; no 2,4-DNP precipitate excludes an aldehyde or ketone.\nStep 4: Skeleton from NMR. The 3H singlet at 2.05 is a CH3 on a carbonyl, so the acid part is acetate. The 2H triplet at 4.06 is an O-CH2 next to a CH2, so the alcohol part is an unbranched chain; 1.60, 1.37 and the 0.93 triplet complete a butyl group. X is butyl acetate.\nStep 5: Check the mass spectrum: 43 is CH3CO+, the acetate acylium ion; 56 is loss of acetic acid (M - 60) to the butene radical cation; 61 is protonated acetic acid from a double hydrogen transfer, typical of acetates of larger alcohols; 73 is CH3COOCH2+ from loss of a propyl radical.",
      "note": "The two negative chemical tests carry as much information as the positive spectra: a carbonyl compound that is neither an acid nor an aldehyde or ketone is an ester or an amide, and the formula has no nitrogen. In an unknowns lab this is exactly how the functional-group class is pinned down before any spectrum is run.",
      "options": {
        "A": "Correct. C6H12O2 with one unsaturation, an ester by IR and by the negative acid and carbonyl tests, an acetyl singlet at 2.05 and an O-CH2 triplet at 4.06 is butyl acetate; the 43 base peak is its acetyl cation.",
        "B": "Ethyl butanoate has the same formula and the same IR, but its O-CH2 would be a quartet near 4.12 coupled to a 3H triplet near 1.25, and its CH2 on the carbonyl a triplet near 2.28; there would be no singlet at 2.05. Its base peak would be 71, the butanoyl acylium ion.",
        "C": "Hexanoic acid has the formula but would show a very broad O-H band from 2500 to 3300, a carbonyl near 1710 rather than 1740, a 1H singlet near 12 ppm, and it would effervesce with NaHCO3. Its mass spectrum would show the McLafferty ion at 60.",
        "D": "Methyl pentanoate has the formula and the ester IR, but its only singlet would be the O-CH3 at 3.67, not at 2.05, and there would be no 2H triplet at 4.06. Its spectrum would show a McLafferty base peak at 74 and M - 31 at 85."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  },
  {
    "question_id": "ch12_q52_elucidation_tert_butyl_bromide",
    "topic": "Structure Elucidation: Multi-Spectral",
    "difficulty_level": "Hard",
    "question_text": "Compound Y contains only carbon, hydrogen and bromine: elemental analysis gives C 35.1%, H 6.6%, Br 58.3%. Its mass spectrum is shown: a very weak pair of molecular-ion peaks of equal height at $m/z = 136$ and $138$, and a base peak at 57. IR: bands at $2970$ and $2920\\text{ cm}^{-1}$ and a pair of bands at $1390$ and $1370\\text{ cm}^{-1}$; no absorption above $3000\\text{ cm}^{-1}$ and none between $1600$ and $1800\\text{ cm}^{-1}$. $^1\\text{H}$ NMR: a single peak at $\\delta$ 1.79 (s, 9H). Y gives an immediate precipitate of AgBr with ethanolic silver nitrate at room temperature. Which structure is Y?",
    "dynamic_spectroscopy": {
      "spec_type": "ms",
      "data_points": [
        {
          "x": 29,
          "y": 15
        },
        {
          "x": 39,
          "y": 12
        },
        {
          "x": 41,
          "y": 45
        },
        {
          "x": 57,
          "y": 100
        },
        {
          "x": 136,
          "y": 3
        },
        {
          "x": 138,
          "y": 3
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "2-Bromo-2-methylpropane",
        "is_correct": true,
        "smiles": "CC(C)(C)Br"
      },
      {
        "option_id": "B",
        "text": "1-Bromobutane",
        "is_correct": false,
        "smiles": "CCCCBr"
      },
      {
        "option_id": "C",
        "text": "2-Bromobutane",
        "is_correct": false,
        "smiles": "CCC(C)Br"
      },
      {
        "option_id": "D",
        "text": "1-Bromo-2-methylpropane",
        "is_correct": false,
        "smiles": "CC(C)CBr"
      }
    ],
    "feedback": {
      "context": "When the four candidates are isomers, the formula and the halogen are shared and the mass spectrum's job is to establish them; the skeleton then has to come from the NMR and from chemistry. A single NMR peak integrating to nine hydrogens is the tert-butyl group's signature, and a halide that precipitates AgBr at once is one that ionizes to a stable carbocation.",
      "approach": "Step 1: Empirical formula. Per 100 g: C 35.1/12.01 = 2.92 mol, H 6.6/1.008 = 6.55 mol, Br 58.3/79.90 = 0.730 mol. Dividing by 0.730 gives C 4.0, H 9.0, Br 1: C4H9Br.\nStep 2: Molecular ion. C4H9 with 79Br is 136 and with 81Br is 138; the equal-height pair confirms one bromine and shows the molecular formula is the empirical one. Unsaturation = (2 x 4 + 2 - 9 - 1)/2 = 0: fully saturated.\nStep 3: Functional group. IR shows only sp3 C-H, no O-H, no C=O, no C=C; the 1390/1370 pair is the gem-dimethyl bend, hinting at two or more methyls on one carbon. The bromine is the only functional group.\nStep 4: Skeleton. One singlet for all nine hydrogens means three equivalent methyls on a carbon that carries no hydrogen. That carbon must bear the bromine: (CH3)3C-Br.\nStep 5: Chemistry and MS agree. A tertiary bromide ionizes to the tert-butyl cation, so it precipitates AgBr immediately with AgNO3, and that same cation, C4H9+ at 57, is the base peak while the molecular ion is nearly absent.",
      "note": "Every C4H9Br isomer gives a 136/138 pair and most give 57 as the base peak, so the mass spectrum cannot choose among them; it is the NMR singlet and the silver nitrate test that do. The test is a reactivity probe: tertiary halides precipitate at once, secondary on warming, primary only slowly.",
      "options": {
        "A": "Correct. C4H9Br with no unsaturation, nine equivalent hydrogens in one singlet, a gem-dimethyl IR pair and instant AgBr precipitation is tert-butyl bromide; its molecular ion is faint because it loses bromine to the stable tert-butyl cation.",
        "B": "1-Bromobutane has the formula and the isotope pair, but its NMR shows four signals, including a 2H triplet near 3.4 for the CH2 bearing bromine, and as a primary halide it reacts only slowly with ethanolic silver nitrate.",
        "C": "2-Bromobutane would show a 1H multiplet near 4.1 for the CH-Br, a 3H doublet near 1.7, a 2H multiplet and a 3H triplet, not a single peak, and as a secondary halide it needs warming before AgBr appears.",
        "D": "1-Bromo-2-methylpropane has the gem-dimethyl IR pair but its NMR shows a 6H doublet near 1.0, a 1H multiplet near 2.0 and a 2H doublet near 3.3. Nine equivalent hydrogens require all three methyls on the same carbon."
      }
    },
    "key_status": "verified",
    "feedback_status": "tailored",
    "provenance": "original"
  }
];
