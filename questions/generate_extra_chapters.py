import os
import json
import random

questions_dir = r"C:\Users\easam\Documents\Gemini\OChemExamPrApp\questions"

# An expanded, high-fidelity database of 50 organic compounds with simulated spectroscopy data
compounds_db = [
    {"name": "Ethanol", "smiles": "CCO", "formula": "C2H6O", "mw": 46, "signals": [{"x": 1.2, "y": 3, "label": "triplet"}, {"x": 2.6, "y": 1, "label": "singlet"}, {"x": 3.7, "y": 2, "label": "quartet"}], "base_peak": 31, "parent_peak": 46, "dips": [{"xc": 3300, "w": 150, "d": 70}, {"xc": 2950, "w": 40, "d": 50}]},
    {"name": "Propan-2-ol", "smiles": "CC(O)C", "formula": "C3H8O", "mw": 60, "signals": [{"x": 1.2, "y": 6, "label": "doublet"}, {"x": 2.2, "y": 1, "label": "singlet"}, {"x": 4.0, "y": 1, "label": "septet"}], "base_peak": 45, "parent_peak": 60, "dips": [{"xc": 3300, "w": 150, "d": 70}, {"xc": 2950, "w": 40, "d": 50}]},
    {"name": "Ethyl acetate", "smiles": "CCOC(C)=O", "formula": "C4H8O2", "mw": 88, "signals": [{"x": 1.2, "y": 3, "label": "triplet"}, {"x": 2.0, "y": 3, "label": "singlet"}, {"x": 4.1, "y": 2, "label": "quartet"}], "base_peak": 43, "parent_peak": 88, "dips": [{"xc": 1735, "w": 20, "d": 85}, {"xc": 1240, "w": 50, "d": 70}, {"xc": 2950, "w": 40, "d": 50}]},
    {"name": "Acetone", "smiles": "CC(C)=O", "formula": "C3H6O", "mw": 58, "signals": [{"x": 2.1, "y": 6, "label": "singlet"}], "base_peak": 43, "parent_peak": 58, "dips": [{"xc": 1715, "w": 20, "d": 85}, {"xc": 2950, "w": 40, "d": 50}]},
    {"name": "Diethyl ether", "smiles": "CCOCC", "formula": "C4H10O", "mw": 74, "signals": [{"x": 1.2, "y": 6, "label": "triplet"}, {"x": 3.5, "y": 4, "label": "quartet"}], "base_peak": 59, "parent_peak": 74, "dips": [{"xc": 1120, "w": 50, "d": 75}, {"xc": 2950, "w": 40, "d": 50}]},
    {"name": "Acetaldehyde", "smiles": "CC=O", "formula": "C2H4O", "mw": 44, "signals": [{"x": 2.2, "y": 3, "label": "doublet"}, {"x": 9.8, "y": 1, "label": "quartet"}], "base_peak": 29, "parent_peak": 44, "dips": [{"xc": 1725, "w": 20, "d": 85}, {"xc": 2720, "w": 30, "d": 30}, {"xc": 2820, "w": 30, "d": 30}, {"xc": 2950, "w": 40, "d": 50}]},
    {"name": "Propanoic acid", "smiles": "CCC(=O)O", "formula": "C3H6O2", "mw": 74, "signals": [{"x": 1.1, "y": 3, "label": "triplet"}, {"x": 2.4, "y": 2, "label": "quartet"}, {"x": 11.5, "y": 1, "label": "singlet"}], "base_peak": 45, "parent_peak": 74, "dips": [{"xc": 3000, "w": 300, "d": 75}, {"xc": 1710, "w": 20, "d": 85}, {"xc": 1240, "w": 50, "d": 60}]},
    {"name": "Toluene", "smiles": "Cc1ccccc1", "formula": "C7H8", "mw": 92, "signals": [{"x": 2.3, "y": 3, "label": "singlet"}, {"x": 7.2, "y": 5, "label": "multiplet"}], "base_peak": 91, "parent_peak": 92, "dips": [{"xc": 3050, "w": 20, "d": 20}, {"xc": 2920, "w": 30, "d": 45}, {"xc": 1600, "w": 20, "d": 30}, {"xc": 1500, "w": 20, "d": 30}]},
    {"name": "Methyl acetate", "smiles": "COC(C)=O", "formula": "C3H6O2", "mw": 74, "signals": [{"x": 2.0, "y": 3, "label": "singlet"}, {"x": 3.6, "y": 3, "label": "singlet"}], "base_peak": 43, "parent_peak": 74, "dips": [{"xc": 1735, "w": 20, "d": 85}, {"xc": 1240, "w": 50, "d": 70}, {"xc": 2950, "w": 40, "d": 50}]},
    {"name": "Propionaldehyde", "smiles": "CCC=O", "formula": "C3H6O", "mw": 58, "signals": [{"x": 1.0, "y": 3, "label": "triplet"}, {"x": 2.4, "y": 2, "label": "multiplet"}, {"x": 9.7, "y": 1, "label": "triplet"}], "base_peak": 29, "parent_peak": 58, "dips": [{"xc": 1725, "w": 20, "d": 85}, {"xc": 2720, "w": 30, "d": 30}, {"xc": 2820, "w": 30, "d": 30}, {"xc": 2950, "w": 40, "d": 50}]},
    {"name": "1-Bromopropane", "smiles": "CCCBr", "formula": "C3H7Br", "mw": 122, "signals": [{"x": 1.0, "y": 3, "label": "triplet"}, {"x": 1.9, "y": 2, "label": "sextet"}, {"x": 3.4, "y": 2, "label": "triplet"}], "base_peak": 43, "parent_peak": 122, "dips": [{"xc": 2950, "w": 40, "d": 50}, {"xc": 650, "w": 40, "d": 40}]},
    {"name": "2-Bromopropane", "smiles": "CC(Br)C", "formula": "C3H7Br", "mw": 122, "signals": [{"x": 1.7, "y": 6, "label": "doublet"}, {"x": 4.3, "y": 1, "label": "septet"}], "base_peak": 43, "parent_peak": 122, "dips": [{"xc": 2950, "w": 40, "d": 50}, {"xc": 600, "w": 40, "d": 40}]},
    {"name": "Methanol", "smiles": "CO", "formula": "CH4O", "mw": 32, "signals": [{"x": 3.4, "y": 3, "label": "singlet"}, {"x": 4.8, "y": 1, "label": "singlet"}], "base_peak": 31, "parent_peak": 32, "dips": [{"xc": 3300, "w": 150, "d": 70}, {"xc": 2950, "w": 40, "d": 50}]},
    {"name": "Formic acid", "smiles": "HC(=O)O", "formula": "CH2O2", "mw": 46, "signals": [{"x": 8.0, "y": 1, "label": "singlet"}, {"x": 11.0, "y": 1, "label": "singlet"}], "base_peak": 29, "parent_peak": 46, "dips": [{"xc": 3000, "w": 300, "d": 75}, {"xc": 1710, "w": 20, "d": 85}]},
    {"name": "Acetic acid", "smiles": "CC(=O)O", "formula": "C2H4O2", "mw": 60, "signals": [{"x": 2.1, "y": 3, "label": "singlet"}, {"x": 11.8, "y": 1, "label": "singlet"}], "base_peak": 43, "parent_peak": 60, "dips": [{"xc": 3000, "w": 300, "d": 75}, {"xc": 1710, "w": 20, "d": 85}]},
    {"name": "Acetonitrile", "smiles": "CC#N", "formula": "C2H3N", "mw": 41, "signals": [{"x": 2.0, "y": 3, "label": "singlet"}], "base_peak": 40, "parent_peak": 41, "dips": [{"xc": 2250, "w": 15, "d": 60}, {"xc": 2950, "w": 40, "d": 50}]},
    {"name": "Benzaldehyde", "smiles": "O=Cc1ccccc1", "formula": "C7H6O", "mw": 106, "signals": [{"x": 7.5, "y": 2, "label": "triplet"}, {"x": 7.6, "y": 1, "label": "triplet"}, {"x": 7.9, "y": 2, "label": "doublet"}, {"x": 10.0, "y": 1, "label": "singlet"}], "base_peak": 105, "parent_peak": 106, "dips": [{"xc": 1700, "w": 20, "d": 85}, {"xc": 3050, "w": 20, "d": 20}, {"xc": 2720, "w": 30, "d": 30}, {"xc": 2820, "w": 30, "d": 30}, {"xc": 1600, "w": 20, "d": 30}, {"xc": 1500, "w": 20, "d": 30}]},
    {"name": "Nitrobenzene", "smiles": "[N+](=O)([O-])c1ccccc1", "formula": "C6H5NO2", "mw": 123, "signals": [{"x": 7.6, "y": 2, "label": "triplet"}, {"x": 7.7, "y": 1, "label": "triplet"}, {"x": 8.2, "y": 2, "label": "doublet"}], "base_peak": 77, "parent_peak": 123, "dips": [{"xc": 1530, "w": 30, "d": 80}, {"xc": 1350, "w": 30, "d": 80}, {"xc": 3050, "w": 20, "d": 20}, {"xc": 1600, "w": 20, "d": 30}]},
    {"name": "Aniline", "smiles": "Nc1ccccc1", "formula": "C6H7N", "mw": 93, "signals": [{"x": 3.6, "y": 2, "label": "singlet"}, {"x": 6.6, "y": 2, "label": "doublet"}, {"x": 6.7, "y": 1, "label": "triplet"}, {"x": 7.1, "y": 2, "label": "triplet"}], "base_peak": 93, "parent_peak": 93, "dips": [{"xc": 3400, "w": 30, "d": 40}, {"xc": 3300, "w": 30, "d": 40}, {"xc": 3050, "w": 20, "d": 20}, {"xc": 1600, "w": 20, "d": 30}]},
    {"name": "Phenol", "smiles": "Oc1ccccc1", "formula": "C6H6O", "mw": 94, "signals": [{"x": 5.0, "y": 1, "label": "singlet"}, {"x": 6.8, "y": 2, "label": "doublet"}, {"x": 6.9, "y": 1, "label": "triplet"}, {"x": 7.2, "y": 2, "label": "triplet"}], "base_peak": 94, "parent_peak": 94, "dips": [{"xc": 3300, "w": 150, "d": 70}, {"xc": 3050, "w": 20, "d": 20}, {"xc": 1600, "w": 20, "d": 30}]},
    {"name": "Cyclohexane", "smiles": "C1CCCCC1", "formula": "C6H12", "mw": 84, "signals": [{"x": 1.4, "y": 12, "label": "singlet"}], "base_peak": 56, "parent_peak": 84, "dips": [{"xc": 2920, "w": 40, "d": 65}, {"xc": 2850, "w": 40, "d": 65}]},
    {"name": "Cyclohexanone", "smiles": "C1CCCCC1=O", "formula": "C6H10O", "mw": 98, "signals": [{"x": 1.7, "y": 4, "label": "multiplet"}, {"x": 1.8, "y": 2, "label": "multiplet"}, {"x": 2.3, "y": 4, "label": "triplet"}], "base_peak": 55, "parent_peak": 98, "dips": [{"xc": 1715, "w": 20, "d": 85}, {"xc": 2920, "w": 40, "d": 55}, {"xc": 2850, "w": 40, "d": 55}]},
    {"name": "Benzene", "smiles": "c1ccccc1", "formula": "C6H6", "mw": 78, "signals": [{"x": 7.3, "y": 6, "label": "singlet"}], "base_peak": 78, "parent_peak": 78, "dips": [{"xc": 3030, "w": 20, "d": 25}, {"xc": 1600, "w": 20, "d": 30}, {"xc": 1500, "w": 20, "d": 30}]},
    {"name": "Chlorobenzene", "smiles": "Clc1ccccc1", "formula": "C6H5Cl", "mw": 112, "signals": [{"x": 7.3, "y": 5, "label": "multiplet"}], "base_peak": 77, "parent_peak": 112, "dips": [{"xc": 3050, "w": 20, "d": 20}, {"xc": 700, "w": 40, "d": 50}]},
    {"name": "Acetophenone", "smiles": "CC(=O)c1ccccc1", "formula": "C8H8O", "mw": 120, "signals": [{"x": 2.6, "y": 3, "label": "singlet"}, {"x": 7.5, "y": 3, "label": "multiplet"}, {"x": 7.9, "y": 2, "label": "doublet"}], "base_peak": 105, "parent_peak": 120, "dips": [{"xc": 1685, "w": 20, "d": 85}, {"xc": 3050, "w": 20, "d": 20}, {"xc": 1600, "w": 20, "d": 30}, {"xc": 1500, "w": 20, "d": 30}]},
    {"name": "Propene", "smiles": "CC=C", "formula": "C3H6", "mw": 42, "signals": [{"x": 1.7, "y": 3, "label": "doublet"}, {"x": 4.9, "y": 2, "label": "multiplet"}, {"x": 5.8, "y": 1, "label": "multiplet"}], "base_peak": 41, "parent_peak": 42, "dips": [{"xc": 3080, "w": 20, "d": 25}, {"xc": 1640, "w": 20, "d": 35}, {"xc": 2950, "w": 40, "d": 45}]},
    {"name": "Propyne", "smiles": "CC#C", "formula": "C3H4", "mw": 40, "signals": [{"x": 1.8, "y": 3, "label": "doublet"}, {"x": 2.1, "y": 1, "label": "triplet"}], "base_peak": 39, "parent_peak": 40, "dips": [{"xc": 3300, "w": 20, "d": 65}, {"xc": 2120, "w": 15, "d": 40}, {"xc": 2950, "w": 40, "d": 45}]},
    {"name": "Butanone", "smiles": "CCC(C)=O", "formula": "C4H8O", "mw": 72, "signals": [{"x": 1.0, "y": 3, "label": "triplet"}, {"x": 2.1, "y": 3, "label": "singlet"}, {"x": 2.4, "y": 2, "label": "quartet"}], "base_peak": 43, "parent_peak": 72, "dips": [{"xc": 1715, "w": 20, "d": 85}, {"xc": 2950, "w": 40, "d": 50}]},
    {"name": "Benzyl alcohol", "smiles": "OCc1ccccc1", "formula": "C7H8O", "mw": 108, "signals": [{"x": 2.4, "y": 1, "label": "singlet"}, {"x": 4.6, "y": 2, "label": "singlet"}, {"x": 7.3, "y": 5, "label": "multiplet"}], "base_peak": 91, "parent_peak": 108, "dips": [{"xc": 3300, "w": 150, "d": 70}, {"xc": 3050, "w": 20, "d": 20}, {"xc": 2920, "w": 30, "d": 45}, {"xc": 1600, "w": 20, "d": 30}]},
    {"name": "Tetrahydrofuran", "smiles": "C1CCOC1", "formula": "C4H8O", "mw": 72, "signals": [{"x": 1.8, "y": 4, "label": "multiplet"}, {"x": 3.7, "y": 4, "label": "multiplet"}], "base_peak": 42, "parent_peak": 72, "dips": [{"xc": 1070, "w": 40, "d": 70}, {"xc": 2950, "w": 40, "d": 50}]},
    {"name": "Dimethyl sulfoxide", "smiles": "CS(=O)C", "formula": "C2H6OS", "mw": 78, "signals": [{"x": 2.5, "y": 6, "label": "singlet"}], "base_peak": 63, "parent_peak": 78, "dips": [{"xc": 1050, "w": 40, "d": 85}, {"xc": 2950, "w": 40, "d": 40}]},
    {"name": "Dichloromethane", "smiles": "ClCCl", "formula": "CH2Cl2", "mw": 84, "signals": [{"x": 5.3, "y": 2, "label": "singlet"}], "base_peak": 49, "parent_peak": 84, "dips": [{"xc": 3000, "w": 30, "d": 30}, {"xc": 740, "w": 45, "d": 75}]},
    {"name": "Chloroform", "smiles": "ClC(Cl)Cl", "formula": "CHCl3", "mw": 119, "signals": [{"x": 7.2, "y": 1, "label": "singlet"}], "base_peak": 83, "parent_peak": 119, "dips": [{"xc": 3000, "w": 30, "d": 30}, {"xc": 760, "w": 45, "d": 80}]},
    {"name": "t-Butyl alcohol", "smiles": "CC(C)(C)O", "formula": "C4H10O", "mw": 74, "signals": [{"x": 1.2, "y": 9, "label": "singlet"}, {"x": 2.0, "y": 1, "label": "singlet"}], "base_peak": 59, "parent_peak": 74, "dips": [{"xc": 3300, "w": 150, "d": 70}, {"xc": 2950, "w": 40, "d": 55}]},
    {"name": "Isobutylene", "smiles": "CC(C)=C", "formula": "C4H8", "mw": 56, "signals": [{"x": 1.7, "y": 6, "label": "singlet"}, {"x": 4.6, "y": 2, "label": "singlet"}], "base_peak": 41, "parent_peak": 56, "dips": [{"xc": 3080, "w": 20, "d": 25}, {"xc": 1650, "w": 20, "d": 35}, {"xc": 2950, "w": 40, "d": 50}]},
    {"name": "Ethylbenzene", "smiles": "CCc1ccccc1", "formula": "C8H10", "mw": 106, "signals": [{"x": 1.2, "y": 3, "label": "triplet"}, {"x": 2.6, "y": 2, "label": "quartet"}, {"x": 7.2, "y": 5, "label": "multiplet"}], "base_peak": 91, "parent_peak": 106, "dips": [{"xc": 3050, "w": 20, "d": 20}, {"xc": 2950, "w": 40, "d": 50}, {"xc": 1600, "w": 20, "d": 30}]},
    {"name": "Anisole", "smiles": "COc1ccccc1", "formula": "C7H8O", "mw": 108, "signals": [{"x": 3.8, "y": 3, "label": "singlet"}, {"x": 6.9, "y": 3, "label": "multiplet"}, {"x": 7.3, "y": 2, "label": "multiplet"}], "base_peak": 93, "parent_peak": 108, "dips": [{"xc": 1250, "w": 40, "d": 80}, {"xc": 3050, "w": 20, "d": 20}, {"xc": 1600, "w": 20, "d": 30}]},
    {"name": "Benzoic acid", "smiles": "O=C(O)c1ccccc1", "formula": "C7H6O2", "mw": 122, "signals": [{"x": 7.5, "y": 3, "label": "multiplet"}, {"x": 8.1, "y": 2, "label": "doublet"}, {"x": 12.5, "y": 1, "label": "singlet"}], "base_peak": 105, "parent_peak": 122, "dips": [{"xc": 3000, "w": 300, "d": 75}, {"xc": 1690, "w": 20, "d": 85}, {"xc": 1600, "w": 20, "d": 30}]},
    {"name": "1-Propanol", "smiles": "CCCO", "formula": "C3H8O", "mw": 60, "signals": [{"x": 0.9, "y": 3, "label": "triplet"}, {"x": 1.5, "y": 2, "label": "sextet"}, {"x": 2.2, "y": 1, "label": "singlet"}, {"x": 3.5, "y": 2, "label": "triplet"}], "base_peak": 31, "parent_peak": 60, "dips": [{"xc": 3300, "w": 150, "d": 70}, {"xc": 2950, "w": 40, "d": 50}]},
    {"name": "2-Pentanone", "smiles": "CCCC(C)=O", "formula": "C5H10O", "mw": 86, "signals": [{"x": 0.9, "y": 3, "label": "triplet"}, {"x": 1.6, "y": 2, "label": "multiplet"}, {"x": 2.1, "y": 3, "label": "singlet"}, {"x": 2.4, "y": 2, "label": "triplet"}], "base_peak": 43, "parent_peak": 86, "dips": [{"xc": 1715, "w": 20, "d": 85}, {"xc": 2950, "w": 40, "d": 50}]},
    {"name": "3-Pentanone", "smiles": "CCC(=O)CC", "formula": "C5H10O", "mw": 86, "signals": [{"x": 1.0, "y": 6, "label": "triplet"}, {"x": 2.4, "y": 4, "label": "quartet"}], "base_peak": 57, "parent_peak": 86, "dips": [{"xc": 1715, "w": 20, "d": 85}, {"xc": 2950, "w": 40, "d": 50}]},
    {"name": "Cyclopentanone", "smiles": "O=C1CCCC1", "formula": "C5H8O", "mw": 84, "signals": [{"x": 2.0, "y": 4, "label": "multiplet"}, {"x": 2.2, "y": 4, "label": "multiplet"}], "base_peak": 55, "parent_peak": 84, "dips": [{"xc": 1740, "w": 20, "d": 85}, {"xc": 2950, "w": 40, "d": 50}]},
    {"name": "Cyclohexene", "smiles": "C1CCC=CC1", "formula": "C6H10", "mw": 82, "signals": [{"x": 1.6, "y": 4, "label": "multiplet"}, {"x": 2.0, "y": 4, "label": "multiplet"}, {"x": 5.6, "y": 2, "label": "multiplet"}], "base_peak": 67, "parent_peak": 82, "dips": [{"xc": 3020, "w": 20, "d": 25}, {"xc": 1650, "w": 20, "d": 20}, {"xc": 2920, "w": 40, "d": 50}]},
    {"name": "Cyclopentene", "smiles": "C1CC=CC1", "formula": "C5H8", "mw": 68, "signals": [{"x": 1.8, "y": 2, "label": "multiplet"}, {"x": 2.3, "y": 4, "label": "multiplet"}, {"x": 5.7, "y": 2, "label": "multiplet"}], "base_peak": 67, "parent_peak": 68, "dips": [{"xc": 3020, "w": 20, "d": 25}, {"xc": 1650, "w": 20, "d": 20}, {"xc": 2920, "w": 40, "d": 50}]},
    {"name": "Bromobenzene", "smiles": "Brc1ccccc1", "formula": "C6H5Br", "mw": 157, "signals": [{"x": 7.3, "y": 3, "label": "multiplet"}, {"x": 7.5, "y": 2, "label": "multiplet"}], "base_peak": 77, "parent_peak": 157, "dips": [{"xc": 3050, "w": 20, "d": 20}, {"xc": 650, "w": 40, "d": 50}]},
    {"name": "Benzoyl chloride", "smiles": "O=C(Cl)c1ccccc1", "formula": "C7H5ClO", "mw": 140, "signals": [{"x": 7.5, "y": 3, "label": "multiplet"}, {"x": 8.1, "y": 2, "label": "doublet"}], "base_peak": 105, "parent_peak": 140, "dips": [{"xc": 1790, "w": 20, "d": 85}, {"xc": 700, "w": 40, "d": 55}, {"xc": 1600, "w": 20, "d": 30}]},
    {"name": "Ethyl benzoate", "smiles": "CCOC(=O)c1ccccc1", "formula": "C9H10O2", "mw": 150, "signals": [{"x": 1.4, "y": 3, "label": "triplet"}, {"x": 4.4, "y": 2, "label": "quartet"}, {"x": 7.5, "y": 3, "label": "multiplet"}, {"x": 8.0, "y": 2, "label": "doublet"}], "base_peak": 105, "parent_peak": 150, "dips": [{"xc": 1720, "w": 20, "d": 85}, {"xc": 1270, "w": 40, "d": 80}, {"xc": 1600, "w": 20, "d": 30}]},
    {"name": "Dimethyl ether", "smiles": "COC", "formula": "C2H6O", "mw": 46, "signals": [{"x": 3.2, "y": 6, "label": "singlet"}], "base_peak": 45, "parent_peak": 46, "dips": [{"xc": 1120, "w": 50, "d": 75}, {"xc": 2950, "w": 40, "d": 45}]},
    {"name": "1-Butanol", "smiles": "CCCCO", "formula": "C4H10O", "mw": 74, "signals": [{"x": 0.9, "y": 3, "label": "triplet"}, {"x": 1.4, "y": 2, "label": "multiplet"}, {"x": 1.5, "y": 2, "label": "multiplet"}, {"x": 2.0, "y": 1, "label": "singlet"}, {"x": 3.6, "y": 2, "label": "triplet"}], "base_peak": 31, "parent_peak": 74, "dips": [{"xc": 3300, "w": 150, "d": 70}, {"xc": 2950, "w": 40, "d": 50}]},
    {"name": "Butyraldehyde", "smiles": "CCCC=O", "formula": "C4H8O", "mw": 72, "signals": [{"x": 0.9, "y": 3, "label": "triplet"}, {"x": 1.7, "y": 2, "label": "multiplet"}, {"x": 2.4, "y": 2, "label": "multiplet"}, {"x": 9.8, "y": 1, "label": "singlet"}], "base_peak": 44, "parent_peak": 72, "dips": [{"xc": 1725, "w": 20, "d": 85}, {"xc": 2720, "w": 30, "d": 30}, {"xc": 2820, "w": 30, "d": 30}, {"xc": 2950, "w": 40, "d": 50}]}
]

amino_acids = [
    {"name": "Glycine", "smiles": "NCC(=O)O"},
    {"name": "Alanine", "smiles": "C[C@@H](C(=O)O)N"},
    {"name": "Valine", "smiles": "CC(C)[C@@H](C(=O)O)N"},
    {"name": "Leucine", "smiles": "CC(C)C[C@@H](C(=O)O)N"},
    {"name": "Isoleucine", "smiles": "CC[C@H](C)[C@@H](C(=O)O)N"},
    {"name": "Proline", "smiles": "C1C[C@H](NC1)C(=O)O"},
    {"name": "Phenylalanine", "smiles": "c1ccc(cc1)C[C@@H](C(=O)O)N"},
    {"name": "Tyrosine", "smiles": "c1cc(ccc1C[C@@H](C(=O)O)N)O"},
    {"name": "Tryptophan", "smiles": "c1ccc2c(c1)[nH]c(c2)C[C@@H](C(=O)O)N"},
    {"name": "Serine", "smiles": "OC[C@@H](C(=O)O)N"},
    {"name": "Threonine", "smiles": "C[C@@H](O)[C@@H](C(=O)O)N"},
    {"name": "Cysteine", "smiles": "CS[C@@H](C(=O)O)N"},
    {"name": "Methionine", "smiles": "CSCC[C@@H](C(=O)O)N"},
    {"name": "Asparagine", "smiles": "C(C(=O)N)[C@@H](C(=O)O)N"},
    {"name": "Glutamine", "smiles": "C(CC(=O)N)[C@@H](C(=O)O)N"},
    {"name": "Aspartic Acid", "smiles": "C(C(=O)O)[C@@H](C(=O)O)N"},
    {"name": "Glutamic Acid", "smiles": "C(CC(=O)O)[C@@H](C(=O)O)N"},
    {"name": "Lysine", "smiles": "NCCCC[C@@H](C(=O)O)N"},
    {"name": "Arginine", "smiles": "N=C(N)NCCC[C@@H](C(=O)O)N"},
    {"name": "Histidine", "smiles": "c1c(n[nH]c1)C[C@@H](C(=O)O)N"}
]

sugars = [
    {"name": "D-Allose", "smiles": "OC[C@@H](O)[C@@H](O)[C@@H](O)[C@@H](O)C=O"},
    {"name": "D-Altrose", "smiles": "OC[C@@H](O)[C@@H](O)[C@@H](O)[C@H](O)C=O"},
    {"name": "D-Glucose", "smiles": "OC[C@@H](O)[C@@H](O)[C@H](O)[C@@H](O)C=O"},
    {"name": "D-Mannose", "smiles": "OC[C@@H](O)[C@@H](O)[@H](O)[C@H](O)C=O"},
    {"name": "D-Gulose", "smiles": "OC[C@@H](O)[C@H](O)[C@@H](O)[C@@H](O)C=O"},
    {"name": "D-Idose", "smiles": "OC[C@@H](O)[C@H](O)[C@@H](O)[C@H](O)C=O"},
    {"name": "D-Galactose", "smiles": "OC[C@@H](O)[C@H](O)[C@H](O)[C@@H](O)C=O"},
    {"name": "D-Talose", "smiles": "OC[C@@H](O)[C@H](O)[C@H](O)[C@H](O)C=O"},
    {"name": "D-Ribose", "smiles": "OC[C@@H](O)[C@@H](O)[C@@H](O)C=O"},
    {"name": "D-Xylose", "smiles": "OC[C@@H](O)[C@H](O)[C@@H](O)C=O"},
    {"name": "D-Arabinose", "smiles": "OC[C@@H](O)[C@@H](O)[C@H](O)C=O"},
    {"name": "D-Lyxose", "smiles": "OC[C@@H](O)[C@H](O)[C@H](O)C=O"}
]

fischer_sugars = [
    {"name": "D-Allose", "smiles": "FISCHER:D-Allose"},
    {"name": "D-Altrose", "smiles": "FISCHER:D-Altrose"},
    {"name": "D-Glucose", "smiles": "FISCHER:D-Glucose"},
    {"name": "D-Mannose", "smiles": "FISCHER:D-Mannose"},
    {"name": "D-Gulose", "smiles": "FISCHER:D-Gulose"},
    {"name": "D-Idose", "smiles": "FISCHER:D-Idose"},
    {"name": "D-Galactose", "smiles": "FISCHER:D-Galactose"},
    {"name": "D-Talose", "smiles": "FISCHER:D-Talose"},
    {"name": "D-Ribose", "smiles": "FISCHER:D-Ribose"},
    {"name": "D-Xylose", "smiles": "FISCHER:D-Xylose"},
    {"name": "D-Arabinose", "smiles": "FISCHER:D-Arabinose"},
    {"name": "D-Lyxose", "smiles": "FISCHER:D-Lyxose"}
]

haworth_sugars = [
    {"name": "α-D-Allopyranose", "smiles": "HAWORTH:alpha-D-Allose"},
    {"name": "β-D-Allopyranose", "smiles": "HAWORTH:beta-D-Allose"},
    {"name": "α-D-Altropyranose", "smiles": "HAWORTH:alpha-D-Altrose"},
    {"name": "β-D-Altropyranose", "smiles": "HAWORTH:beta-D-Altrose"},
    {"name": "α-D-Glucopyranose", "smiles": "HAWORTH:alpha-D-Glucose"},
    {"name": "β-D-Glucopyranose", "smiles": "HAWORTH:beta-D-Glucose"},
    {"name": "α-D-Mannopyranose", "smiles": "HAWORTH:alpha-D-Mannose"},
    {"name": "β-D-Mannopyranose", "smiles": "HAWORTH:beta-D-Mannose"},
    {"name": "α-D-Gulopyranose", "smiles": "HAWORTH:alpha-D-Gulose"},
    {"name": "β-D-Gulopyranose", "smiles": "HAWORTH:beta-D-Gulose"},
    {"name": "α-D-Idopyranose", "smiles": "HAWORTH:alpha-D-Idose"},
    {"name": "β-D-Idopyranose", "smiles": "HAWORTH:beta-D-Idose"},
    {"name": "α-D-Galactopyranose", "smiles": "HAWORTH:alpha-D-Galactose"},
    {"name": "β-D-Galactopyranose", "smiles": "HAWORTH:beta-D-Galactose"},
    {"name": "α-D-Talopyranose", "smiles": "HAWORTH:alpha-D-Talose"},
    {"name": "β-D-Talopyranose", "smiles": "HAWORTH:beta-D-Talose"}
]


reaction_templates = [
    # Addition
    {"type": "addition", "reactants": ["CC=C"], "reagents": "H2O, H2SO4", "conditions": "dil. H2SO4", "products": ["CC(O)C"], "topic": "Alkenes: Hydration", "desc": "Acid-catalyzed hydration of propene yields propan-2-ol (Markovnikov addition)."},
    {"type": "addition", "reactants": ["CC=C"], "reagents": "1) BH3, THF\n2) H2O2, NaOH", "conditions": "THF", "products": ["CCCO"], "topic": "Alkenes: Hydroboration-Oxidation", "desc": "Hydroboration-oxidation of propene yields 1-propanol (anti-Markovnikov addition)."},
    {"type": "addition", "reactants": ["CC=C"], "reagents": "Br2", "conditions": "CH2Cl2", "products": ["CC(Br)C(Br)"], "topic": "Alkenes: Halogenation", "desc": "Electrophilic halogenation of propene yields 1,2-dibromopropane."},
    {"type": "addition", "reactants": ["CC=C"], "reagents": "Br2, H2O", "conditions": "H2O", "products": ["CC(O)C(Br)"], "topic": "Alkenes: Halohydrin Formation", "desc": "Halohydrin formation from propene yields 1-bromo-2-propanol."},
    {"type": "addition", "reactants": ["CC=C"], "reagents": "mCPBA", "conditions": "CH2Cl2", "products": ["CC1OC1"], "topic": "Alkenes: Epoxidation", "desc": "Epoxidation of propene with mCPBA yields propylene oxide (methyloxirane)."},
    {"type": "addition", "reactants": ["CC=C"], "reagents": "H2, Pd/C", "conditions": "MeOH", "products": ["CCC"], "topic": "Alkenes: Hydrogenation", "desc": "Catalytic hydrogenation converts propene to propane."},
    {"type": "addition", "reactants": ["CC#C"], "reagents": "H2O, H2SO4, HgSO4", "conditions": "Hg(II) catalyst", "products": ["CC(C)=O"], "topic": "Alkynes: Hydration", "desc": "Hydration of propyne yields acetone via tautomerization of an enol intermediate."},
    {"type": "addition", "reactants": ["CC#C"], "reagents": "1) R2BH\n2) H2O2, NaOH", "conditions": "THF", "products": ["CCC=O"], "topic": "Alkynes: Hydroboration-Oxidation", "desc": "Hydroboration-oxidation of propyne yields propionaldehyde (anti-Markovnikov carbonyl formation)."},
    {"type": "addition", "reactants": ["C=C"], "reagents": "Br2", "conditions": "CH2Cl2", "products": ["C(Br)CBr"], "topic": "Alkenes: Halogenation", "desc": "Halogenation of ethylene with molecular bromine yields 1,2-dibromoethane."},

    # Substitution/Elimination
    {"type": "elimination", "reactants": ["CC(Br)C"], "reagents": "KOH, EtOH", "conditions": "heat", "products": ["CC=C"], "topic": "Elimination (E2)", "desc": "Dehydrohalogenation of 2-bromopropane with strong base KOH yields propene."},
    {"type": "elimination", "reactants": ["CC(C)(O)C"], "reagents": "H2SO4", "conditions": "heat", "products": ["CC(C)=C"], "topic": "Elimination (E1)", "desc": "Dehydration of t-butyl alcohol under acidic conditions yields isobutylene."},
    {"type": "substitution", "reactants": ["CC(Br)C"], "reagents": "NaCN", "conditions": "DMF", "products": ["CC(C#N)C"], "topic": "Substitution (SN2)", "desc": "Nucleophilic substitution of 2-bromopropane with NaCN in DMF yields isobutyronitrile via SN2."},
    {"type": "substitution", "reactants": ["CC(C)(Cl)C"], "reagents": "H2O", "conditions": "acetone", "products": ["CC(C)(O)C"], "topic": "Substitution (SN1)", "desc": "Solvolysis of t-butyl chloride in water yields t-butyl alcohol via SN1 path."},
    {"type": "substitution", "reactants": ["CCCO"], "reagents": "PBr3", "conditions": "ether", "products": ["CCCBr"], "topic": "Substitution (SN2)", "desc": "PBr3 converts 1-propanol into 1-bromopropane via SN2 substitution."},
    {"type": "substitution", "reactants": ["CO"], "reagents": "Na, then CCBr", "conditions": "THF", "products": ["COCC"], "topic": "Williamson Ether Synthesis", "desc": "Williamson ether synthesis of methoxide ion and ethyl bromide yields methyl ethyl ether."},

    # Oxidation/Reduction
    {"type": "oxidation", "reactants": ["CCO"], "reagents": "PCC", "conditions": "CH2Cl2", "products": ["CC=O"], "topic": "Oxidation", "desc": "PCC oxidation of primary alcohol ethanol yields acetaldehyde."},
    {"type": "oxidation", "reactants": ["CCCO"], "reagents": "Na2Cr2O7, H2SO4", "conditions": "H2O", "products": ["CCC(=O)O"], "topic": "Oxidation (Chromic Acid)", "desc": "Chromic acid oxidation of 1-propanol yields propanoic acid."},
    {"type": "reduction", "reactants": ["CC(C)=O"], "reagents": "NaBH4, MeOH", "conditions": "0 C", "products": ["CC(O)C"], "topic": "Reduction", "desc": "NaBH4 reduction of acetone yields propan-2-ol."},
    {"type": "reduction", "reactants": ["CC=O"], "reagents": "LiAlH4", "conditions": "1) THF, 2) H3O+", "products": ["CCO"], "topic": "Reduction (LiAlH4)", "desc": "LiAlH4 reduction of acetaldehyde yields ethanol."},

    # Carbonyl
    {"type": "carbonyl", "reactants": ["CC(=O)O", "CCO"], "reagents": "H+", "conditions": "heat, Dean-Stark", "products": ["CCOC(C)=O"], "topic": "Fischer Esterification", "desc": "Acid-catalyzed Fischer esterification of acetic acid and ethanol yields ethyl acetate."},
    {"type": "carbonyl", "reactants": ["CCOC(C)=O"], "reagents": "NaOH, H2O", "conditions": "heat, then H+", "products": ["CC(=O)O"], "topic": "Ester Hydrolysis", "desc": "Base-promoted saponification of ethyl acetate yields acetic acid (after acidic workup)."},
    {"type": "carbonyl", "reactants": ["CC=O"], "reagents": "NaOH", "conditions": "H2O", "products": ["CC(O)CC=O"], "topic": "Aldol Addition", "desc": "Base-catalyzed self-aldol reaction of acetaldehyde yields 3-hydroxybutanal."},

    # Aromatic
    {"type": "aromatic", "reactants": ["c1ccccc1"], "reagents": "HNO3, H2SO4", "conditions": "50 C", "products": ["[N+](=O)([O-])c1ccccc1"], "topic": "Electrophilic Aromatic Substitution", "desc": "Nitration of benzene yields nitrobenzene."},
    {"type": "aromatic", "reactants": ["c1ccccc1"], "reagents": "SO3, H2SO4", "conditions": "heat", "products": ["OS(=O)(=O)c1ccccc1"], "topic": "Electrophilic Aromatic Substitution", "desc": "Sulfonation of benzene yields benzenesulfonic acid."},
    {"type": "aromatic", "reactants": ["c1ccccc1"], "reagents": "CC(Cl)C, AlCl3", "conditions": "CH2Cl2", "products": ["CC(C)c1ccccc1"], "topic": "Friedel-Crafts Alkylation", "desc": "Friedel-Crafts alkylation of benzene with isopropyl chloride yields isopropylbenzene (cumene)."},
    {"type": "aromatic", "reactants": ["c1ccccc1"], "reagents": "CC(=O)Cl, AlCl3", "conditions": "CH2Cl2", "products": ["CC(=O)c1ccccc1"], "topic": "Friedel-Crafts Acylation", "desc": "Friedel-Crafts acylation of benzene with acetyl chloride yields acetophenone."},
    {"type": "aromatic", "reactants": ["c1ccccc1"], "reagents": "Br2, FeBr3", "conditions": "dark", "products": ["Brc1ccccc1"], "topic": "Aromatic Halogenation", "desc": "Electrophilic bromination of benzene yields bromobenzene."},

    # Organometallic (Grignard)
    {"type": "organometallic", "reactants": ["CC(C)=O"], "reagents": "1) CH3MgBr, ether\n2) H3O+", "conditions": "THF", "products": ["CC(C)(O)C"], "topic": "Grignard Addition", "desc": "Addition of methylmagnesium bromide to acetone yields t-butyl alcohol after acidic workup."},
    {"type": "organometallic", "reactants": ["CC=O"], "reagents": "1) CH3MgBr, ether\n2) H3O+", "conditions": "THF", "products": ["CC(O)C"], "topic": "Grignard Addition", "desc": "Addition of methylmagnesium bromide to acetaldehyde yields propan-2-ol."},
    {"type": "organometallic", "reactants": ["O=Cc1ccccc1"], "reagents": "1) CH3MgBr, ether\n2) H3O+", "conditions": "THF", "products": ["CC(O)c1ccccc1"], "topic": "Grignard Addition to Benzaldehyde", "desc": "Addition of methylmagnesium bromide to benzaldehyde yields 1-phenylethanol."},

    # Pericyclic (Diels-Alder)
    {"type": "pericyclic", "reactants": ["C=CC=C", "C=C"], "reagents": "heat", "conditions": "150 C", "products": ["C1CC=CCC1"], "topic": "Diels-Alder Reaction", "desc": "Diels-Alder [4+2] cycloaddition of 1,3-butadiene and ethylene yields cyclohexene."},
    {"type": "pericyclic", "reactants": ["C=CC=C", "C=CC=O"], "reagents": "heat", "conditions": "100 C", "products": ["O=CC1CC=CCC1"], "topic": "Diels-Alder Reaction", "desc": "Diels-Alder cycloaddition of 1,3-butadiene and acrolein yields cyclohex-3-ene-1-carboxaldehyde."},

    # Radical/Polymerization/Other
    {"type": "radical", "reactants": ["CC(C)C"], "reagents": "Br2, light", "conditions": "hv", "products": ["CC(Br)(C)C"], "topic": "Radical Halogenation", "desc": "Radical bromination of isobutane selectively yields t-butyl bromide at the tertiary C-H position."}
]

# Roadmap templates for chapters 41 & 48
roadmaps_templates = [
    {
        "nodes": [
            {"id": "A", "smiles": "CC=C", "label": "Compound A", "x": 1, "y": 1},
            {"id": "B", "smiles": "CC(O)C", "label": "Compound B", "x": 2, "y": 1},
            {"id": "C", "smiles": "CC(=O)C", "label": "Compound C", "x": 3, "y": 1}
        ],
        "edges": [
            {"from": "A", "to": "B", "reagents": "H2O, H2SO4"},
            {"from": "B", "to": "C", "reagents": "PCC"}
        ],
        "correct": "A: propene, B: 2-propanol, C: acetone",
        "wrong": [
            "A: propane, B: 1-propanol, C: propanoic acid",
            "A: propene, B: 1-propanol, C: propanal",
            "A: propyne, B: acetone, C: acetaldehyde"
        ]
    },
    {
        "nodes": [
            {"id": "A", "smiles": "CCO", "label": "Compound A", "x": 1, "y": 1},
            {"id": "B", "smiles": "C=C", "label": "Compound B", "x": 2, "y": 1},
            {"id": "C", "smiles": "CC", "label": "Compound C", "x": 3, "y": 1}
        ],
        "edges": [
            {"from": "A", "to": "B", "reagents": "H2SO4, heat"},
            {"from": "B", "to": "C", "reagents": "H2, Pd/C"}
        ],
        "correct": "A: ethanol, B: ethylene, C: ethane",
        "wrong": [
            "A: ethanol, B: ethyne, C: ethane",
            "A: diethyl ether, B: ethylene, C: ethanol",
            "A: acetaldehyde, B: ethylene, C: acetic acid"
        ]
    },
    {
        "nodes": [
            {"id": "A", "smiles": "c1ccccc1", "label": "Compound A", "x": 1, "y": 1},
            {"id": "B", "smiles": "[N+](=O)([O-])c1ccccc1", "label": "Compound B", "x": 2, "y": 1},
            {"id": "C", "smiles": "Nc1ccccc1", "label": "Compound C", "x": 3, "y": 1}
        ],
        "edges": [
            {"from": "A", "to": "B", "reagents": "HNO3, H2SO4"},
            {"from": "B", "to": "C", "reagents": "Fe, HCl"}
        ],
        "correct": "A: benzene, B: nitrobenzene, C: aniline",
        "wrong": [
            "A: benzene, B: chlorobenzene, C: aniline",
            "A: toluene, B: nitrobenzene, C: phenol",
            "A: benzene, B: benzenesulfonic acid, C: aniline"
        ]
    },
    {
        "nodes": [
            {"id": "A", "smiles": "CC#C", "label": "Compound A", "x": 1, "y": 1},
            {"id": "B", "smiles": "CC(=O)C", "label": "Compound B", "x": 2, "y": 1},
            {"id": "C", "smiles": "CC(O)C", "label": "Compound C", "x": 3, "y": 1}
        ],
        "edges": [
            {"from": "A", "to": "B", "reagents": "H2O, H2SO4, HgSO4"},
            {"from": "B", "to": "C", "reagents": "NaBH4, MeOH"}
        ],
        "correct": "A: propyne, B: acetone, C: 2-propanol",
        "wrong": [
            "A: propene, B: propanal, C: 1-propanol",
            "A: propyne, B: propanal, C: 2-propanol",
            "A: propyne, B: acetone, C: propane"
        ]
    },
    {
        "nodes": [
            {"id": "A", "smiles": "CCCO", "label": "Compound A", "x": 1, "y": 1},
            {"id": "B", "smiles": "CCCBr", "label": "Compound B", "x": 2, "y": 1},
            {"id": "C", "smiles": "CCCC#N", "label": "Compound C", "x": 3, "y": 1}
        ],
        "edges": [
            {"from": "A", "to": "B", "reagents": "PBr3"},
            {"from": "B", "to": "C", "reagents": "NaCN, DMF"}
        ],
        "correct": "A: 1-propanol, B: 1-bromopropane, C: butanenitrile",
        "wrong": [
            "A: propan-2-ol, B: 2-bromopropane, C: isobutyronitrile",
            "A: 1-propanol, B: 1-bromopropane, C: propionitrile",
            "A: 1-propanol, B: propane, C: butanenitrile"
        ]
    },
    {
        "nodes": [
            {"id": "A", "smiles": "CC=C", "label": "Compound A", "x": 1, "y": 1},
            {"id": "B", "smiles": "CC1OC1", "label": "Compound B", "x": 2, "y": 1},
            {"id": "C", "smiles": "CC(O)CO", "label": "Compound C", "x": 3, "y": 1}
        ],
        "edges": [
            {"from": "A", "to": "B", "reagents": "mCPBA"},
            {"from": "B", "to": "C", "reagents": "H3O+"}
        ],
        "correct": "A: propene, B: propylene oxide, C: 1,2-propanediol",
        "wrong": [
            "A: propene, B: acetone, C: 1,2-propanediol",
            "A: propyne, B: propylene oxide, C: propan-2-ol",
            "A: propene, B: propylene glycol, C: acetone"
        ]
    },
    {
        "nodes": [
            {"id": "A", "smiles": "C=C", "label": "Compound A", "x": 1, "y": 1},
            {"id": "B", "smiles": "C(Br)CBr", "label": "Compound B", "x": 2, "y": 1},
            {"id": "C", "smiles": "C#C", "label": "Compound C", "x": 3, "y": 1}
        ],
        "edges": [
            {"from": "A", "to": "B", "reagents": "Br2"},
            {"from": "B", "to": "C", "reagents": "2 NaNH2"}
        ],
        "correct": "A: ethylene, B: 1,2-dibromoethane, C: acetylene",
        "wrong": [
            "A: ethane, B: bromoethane, C: ethylene",
            "A: ethylene, B: bromoethane, C: acetylene",
            "A: acetylene, B: 1,2-dibromoethane, C: ethylene"
        ]
    },
    {
        "nodes": [
            {"id": "A", "smiles": "c1ccccc1", "label": "Compound A", "x": 1, "y": 1},
            {"id": "B", "smiles": "Brc1ccccc1", "label": "Compound B", "x": 2, "y": 1},
            {"id": "C", "smiles": "CC(O)(c1ccccc1)C", "label": "Compound C", "x": 3, "y": 1}
        ],
        "edges": [
            {"from": "A", "to": "B", "reagents": "Br2, FeBr3"},
            {"from": "B", "to": "C", "reagents": "1) Mg, ether\n2) Acetone\n3) H3O+"}
        ],
        "correct": "A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol",
        "wrong": [
            "A: benzene, B: chlorobenzene, C: benzyl alcohol",
            "A: toluene, B: bromobenzene, C: benzoic acid",
            "A: benzene, B: bromobenzene, C: acetophenone"
        ]
    },
    {
        "nodes": [
            {"id": "A", "smiles": "CCCO", "label": "Compound A", "x": 1, "y": 1},
            {"id": "B", "smiles": "CCC(=O)O", "label": "Compound B", "x": 2, "y": 1},
            {"id": "C", "smiles": "CCCOC(CC)=O", "label": "Compound C", "x": 3, "y": 1}
        ],
        "edges": [
            {"from": "A", "to": "B", "reagents": "Na2Cr2O7, H2SO4"},
            {"from": "B", "to": "C", "reagents": "1-propanol, H+"}
        ],
        "correct": "A: 1-propanol, B: propanoic acid, C: propyl propanoate",
        "wrong": [
            "A: propan-2-ol, B: propanoic acid, C: isopropyl propanoate",
            "A: 1-propanol, B: propanal, C: propyl acetate",
            "A: 1-propanol, B: propanoic acid, C: ethyl propanoate"
        ]
    },
    {
        "nodes": [
            {"id": "A", "smiles": "CCOC(C)=O", "label": "Compound A", "x": 1, "y": 1},
            {"id": "B", "smiles": "CCO", "label": "Compound B", "x": 2, "y": 1},
            {"id": "C", "smiles": "CC=O", "label": "Compound C", "x": 3, "y": 1}
        ],
        "edges": [
            {"from": "A", "to": "B", "reagents": "LiAlH4, ether"},
            {"from": "B", "to": "C", "reagents": "PCC"}
        ],
        "correct": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "wrong": [
            "A: methyl acetate, B: methanol, C: formaldehyde",
            "A: ethyl acetate, B: ethanol, C: acetic acid",
            "A: ethyl acetate, B: acetaldehyde, C: ethanol"
        ]
    }
]

# Helper to generate unique distractors
def get_distractors(correct_list, full_pool, count):
    distractors = []
    for item in full_pool:
        if item not in correct_list and item not in distractors:
            distractors.append(item)
    return random.sample(distractors, min(count, len(distractors)))

def generate_all_extra_chapters():
    # Ensure reproducible generations with standard seeds
    random.seed(1337)
    
    for ch in range(33, 49):
        questions = []
        
        for q_idx in range(1, 96):
            q_id = f"ch{ch}_q{q_idx}"
            
            # -------------------------------------------------------------
            # Chapter 33: Nomenclature Matching Lists
            # -------------------------------------------------------------
            if ch == 33:
                items = random.sample(compounds_db, 4)
                match_items = [{"smiles": it["smiles"], "correctAnswer": it["name"]} for it in items]
                
                # Correct names list
                correct_names = [it["name"] for it in items]
                # Sample 4 distractors from compounds database
                distractors = get_distractors(correct_names, [c["name"] for c in compounds_db], 4)
                
                # Build option choices and shuffle them
                match_options = list(set(correct_names + distractors))
                random.shuffle(match_options)
                
                q_text = "Match each chemical structure to its correct IUPAC name by selecting from the dropdowns."
                
                questions.append({
                    "question_id": q_id,
                    "topic": "Nomenclature Matching",
                    "difficulty_level": random.choice(["Easy", "Medium"]),
                    "question_text": q_text,
                    "interaction_type": "matching-list",
                    "match_items": match_items,
                    "match_options": match_options,
                    "options": [
                        {"option_id": "A", "text": "All matched correctly", "is_correct": True},
                        {"option_id": "B", "text": "Incorrect matches", "is_correct": False}
                    ],
                    "feedback": {
                        "context": "Matching basic chemical structures with their nomenclature terms.",
                        "process": "\n".join([f"Structure {i+1}: {it['smiles']} corresponds to {it['name']}." for i, it in enumerate(items)]),
                        "result": "All structures are correctly matched."
                    }
                })
                
            # -------------------------------------------------------------
            # Chapter 34: Stereochemistry Matching Grids
            # -------------------------------------------------------------
            elif ch == 34:
                items = random.sample(compounds_db, 4)
                match_items = [{"smiles": it["smiles"], "correctAnswer": it["name"]} for it in items]
                
                correct_names = [it["name"] for it in items]
                distractors = get_distractors(correct_names, [c["name"] for c in compounds_db], 4)
                match_options = list(set(correct_names + distractors))
                random.shuffle(match_options)
                
                q_text = "Identify the IUPAC name for each structural card in this matching grid."
                
                questions.append({
                    "question_id": q_id,
                    "topic": "Stereochemistry Grids",
                    "difficulty_level": random.choice(["Medium", "Hard"]),
                    "question_text": q_text,
                    "interaction_type": "matching-grid",
                    "grid_columns": 2,
                    "match_items": match_items,
                    "match_options": match_options,
                    "options": [
                        {"option_id": "A", "text": "All matched correctly", "is_correct": True},
                        {"option_id": "B", "text": "Incorrect grid matching", "is_correct": False}
                    ],
                    "feedback": {
                        "context": "Visualizing structures in a grid to determine configurations or IUPAC assignments.",
                        "process": "\n".join([f"Grid card {i+1}: {it['name']}." for i, it in enumerate(items)]),
                        "result": "Grid mapping successfully matched."
                    }
                })
                
            # -------------------------------------------------------------
            # Chapter 35: Dynamic Spectroscopy (NMR/MS/IR) via Chart.js
            # -------------------------------------------------------------
            elif ch == 35:
                comp = random.choice(compounds_db)
                spec_type = random.choice(["nmr", "ms", "ir"])
                
                if spec_type == "nmr":
                    q_text = f"Analyze the simulated $^1\\text{{H}}$ NMR spectrum below. Identify the organic compound corresponding to these chemical shifts."
                    spec_data = {
                        "spec_type": "nmr",
                        "data_points": comp["signals"]
                    }
                elif spec_type == "ms":
                    q_text = f"Analyze the simulated Mass Spectrum below. Identify the organic compound showing a molecular ion peak at $m/z = {comp['parent_peak']}$ and a base peak at $m/z = {comp['base_peak']}$."
                    spec_data = {
                        "spec_type": "ms",
                        "data_points": [
                            {"x": 15, "y": 20, "label": "methyl segment"},
                            {"x": comp["base_peak"], "y": 100, "label": "base peak"},
                            {"x": comp["parent_peak"], "y": 60, "label": "molecular ion [M+]"}
                        ]
                    }
                else:  # IR
                    q_text = f"Analyze the simulated Infrared (IR) spectrum. Determine the organic compound that exhibits the corresponding characteristic functional group absorption bands."
                    spec_data = {
                        "spec_type": "ir",
                        "dips": comp["dips"]
                    }
                
                options = [{"option_id": "A", "text": comp["name"], "is_correct": True}]
                others = [c["name"] for c in compounds_db if c["name"] != comp["name"]]
                wrong_choices = random.sample(others, 3)
                for i, wc in enumerate(wrong_choices):
                    options.append({"option_id": chr(66 + i), "text": wc, "is_correct": False})
                
                random.shuffle(options)
                for idx_opt, opt in enumerate(options):
                    opt["option_id"] = chr(65 + idx_opt)
                
                questions.append({
                    "question_id": q_id,
                    "topic": "Dynamic Spectroscopy Analysis",
                    "difficulty_level": "Hard",
                    "question_text": q_text,
                    "dynamic_spectroscopy": spec_data,
                    "options": options,
                    "feedback": {
                        "context": f"Elucidating organic structures from dynamic {spec_type.upper()} data.",
                        "process": f"Analyze coordinates/absorption features: target compound is {comp['name']}.",
                        "result": f"The compound is {comp['name']}."
                    }
                })
                
            # -------------------------------------------------------------
            # Chapters 36-39, 44-47: Dynamic Reaction Scheme MCQs
            # -------------------------------------------------------------
            elif ch in [36, 37, 38, 39, 44, 45, 46, 47]:
                # Map chapter to specific reaction categories
                if ch == 36:
                    ch_type = "addition"
                elif ch == 37:
                    ch_type = "substitution" if random.random() < 0.5 else "elimination"
                elif ch == 38:
                    ch_type = "reduction" if random.random() < 0.5 else "oxidation"
                elif ch == 39:
                    ch_type = "carbonyl"
                elif ch == 44:
                    ch_type = "aromatic"
                elif ch == 45:
                    ch_type = "organometallic"
                elif ch == 46:
                    ch_type = "pericyclic"
                else:
                    ch_type = "radical"
                
                templates = [t for t in reaction_templates if t["type"] == ch_type]
                if not templates:
                    templates = reaction_templates  # Fallback
                
                temp = random.choice(templates)
                q_text = f"What is the major organic product formed in the following reaction sequence?"
                
                scheme = {
                    "reactants": temp["reactants"],
                    "reagents": temp["reagents"],
                    "conditions": temp["conditions"],
                    "products": ["?"]
                }
                
                options = [
                    {"option_id": "A", "text": temp["products"][0], "smiles": temp["products"][0], "is_correct": True}
                ]
                
                # Gather wrong options
                all_wrong_products = list(set([t["products"][0] for t in reaction_templates if t["products"][0] != temp["products"][0]]))
                wrong_choices = random.sample(all_wrong_products, min(3, len(all_wrong_products)))
                while len(wrong_choices) < 3:
                    wrong_choices.append("CC(C)O")
                
                for i, wc in enumerate(wrong_choices):
                    options.append({"option_id": chr(66 + i), "text": wc, "smiles": wc, "is_correct": False})
                
                random.shuffle(options)
                for idx_opt, opt in enumerate(options):
                    opt["option_id"] = chr(65 + idx_opt)
                
                questions.append({
                    "question_id": q_id,
                    "topic": temp["topic"],
                    "difficulty_level": random.choice(["Medium", "Hard"]),
                    "question_text": q_text,
                    "reaction_scheme": scheme,
                    "options": options,
                    "feedback": {
                        "context": f"Studying reaction mechanisms: {temp['topic']}.",
                        "process": temp["desc"],
                        "result": f"The product is {temp['products'][0]}."
                    }
                })
                
            # -------------------------------------------------------------
            # Chapter 40: Thermodynamic Energy Coordinate Diagrams
            # -------------------------------------------------------------
            elif ch == 40:
                energy_val = random.randint(40, 95)
                int_val = random.randint(15, 35)
                act2_val = random.randint(20, 50)
                dh_val = random.choice([-35, -25, -15, 15, 25])
                
                react_e = 20
                ts1_e = react_e + energy_val
                int_e = react_e + int_val
                ts2_e = int_e + act2_val
                prod_e = react_e + dh_val
                
                q_text = f"Analyze the potential energy curve shown in the reaction coordinate diagram. Determine the activation energy ($E_a$) of the first step and the total reaction enthalpy change ($\\Delta H$)."
                
                diag = {
                    "points": [
                        {"state": "Reactants", "energy": react_e},
                        {"state": "TS1", "energy": ts1_e},
                        {"state": "Intermediate", "energy": int_e},
                        {"state": "TS2", "energy": ts2_e},
                        {"state": "Products", "energy": prod_e}
                    ]
                }
                
                options = [
                    {"option_id": "A", "text": f"Ea1 = {energy_val} kJ/mol, delta H = {dh_val} kJ/mol", "is_correct": True},
                    {"option_id": "B", "text": f"Ea1 = {energy_val + react_e} kJ/mol, delta H = {dh_val + 10} kJ/mol", "is_correct": False},
                    {"option_id": "C", "text": f"Ea1 = {energy_val} kJ/mol, delta H = {-dh_val} kJ/mol", "is_correct": False},
                    {"option_id": "D", "text": f"Ea1 = {int_val} kJ/mol, delta H = {dh_val} kJ/mol", "is_correct": False}
                ]
                random.shuffle(options)
                for idx_opt, opt in enumerate(options):
                    opt["option_id"] = chr(65 + idx_opt)
                    
                questions.append({
                    "question_id": q_id,
                    "topic": "Thermodynamics & Reaction Kinetics",
                    "difficulty_level": "Medium",
                    "question_text": q_text,
                    "energy_diagram": diag,
                    "options": options,
                    "feedback": {
                        "context": "Calculating kinetic and thermodynamic values from energy diagrams.",
                        "process": f"Reactant energy = {react_e} kJ/mol. Transition state 1 energy = {ts1_e} kJ/mol. Ea1 = {ts1_e} - {react_e} = {energy_val} kJ/mol. Product energy = {prod_e} kJ/mol. delta H = {prod_e} - {react_e} = {dh_val} kJ/mol.",
                        "result": f"Ea1 is {energy_val} kJ/mol, delta H is {dh_val} kJ/mol."
                    }
                })
                
            # -------------------------------------------------------------
            # Chapters 41, 48: Retrosynthetic Roadmaps
            # -------------------------------------------------------------
            elif ch in [41, 48]:
                temp = random.choice(roadmaps_templates)
                q_text = "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C."
                
                options = [
                    {"option_id": "A", "text": temp["correct"], "is_correct": True}
                ]
                for i, wc in enumerate(temp["wrong"]):
                    options.append({"option_id": chr(66 + i), "text": wc, "is_correct": False})
                    
                random.shuffle(options)
                for idx_opt, opt in enumerate(options):
                    opt["option_id"] = chr(65 + idx_opt)
                    
                questions.append({
                    "question_id": q_id,
                    "topic": "Synthetic Roadmaps",
                    "difficulty_level": "Hard",
                    "question_text": q_text,
                    "synthetic_roadmap": {
                        "nodes": temp["nodes"],
                        "edges": temp["edges"]
                    },
                    "options": options,
                    "feedback": {
                        "context": "Tracing reactions in a multi-step roadmap sequence.",
                        "process": f"Verify transformations: {temp['correct']}.",
                        "result": f"The labels correspond to {temp['correct']}."
                    }
                })
                
            # -------------------------------------------------------------
            # Chapter 42: Fischer Projections & Carbohydrates Grids
            # -------------------------------------------------------------
            elif ch == 42:
                if q_idx % 2 == 1:
                    # Fischer projection grid matching (4 items)
                    items = random.sample(fischer_sugars, 4)
                    match_items = [{"smiles": it["smiles"], "correctAnswer": it["name"]} for it in items]
                    
                    correct_names = [it["name"] for it in items]
                    distractors = get_distractors(correct_names, [s["name"] for s in fischer_sugars], 4)
                    match_options = list(set(correct_names + distractors))
                    random.shuffle(match_options)
                    
                    q_text = "Identify each D-aldohexose/aldopentose Fischer projection by selecting its name from the dropdown."
                    
                    questions.append({
                        "question_id": q_id,
                        "topic": "Carbohydrates & Fischer Projections",
                        "difficulty_level": "Hard",
                        "question_text": q_text,
                        "interaction_type": "matching-grid",
                        "grid_columns": 4,
                        "match_items": match_items,
                        "match_options": match_options,
                        "options": [
                            {"option_id": "A", "text": "All matched correctly", "is_correct": True},
                            {"option_id": "B", "text": "Incorrect carbohydrate matching", "is_correct": False}
                        ],
                        "feedback": {
                            "context": "Distinguishing carbohydrate configurations (D-aldohexoses and aldopentoses) using Fischer projection diagrams.",
                            "process": "\n".join([f"Sugar {i+1}: {it['name']}." for i, it in enumerate(items)]),
                            "result": "All carbohydrate configurations matched."
                        }
                    })
                else:
                    # Haworth projection grid matching (2 items)
                    items = random.sample(haworth_sugars, 2)
                    match_items = [{"smiles": it["smiles"], "correctAnswer": it["name"]} for it in items]
                    
                    correct_names = [it["name"] for it in items]
                    distractors = get_distractors(correct_names, [s["name"] for s in haworth_sugars], 4)
                    match_options = list(set(correct_names + distractors))
                    random.shuffle(match_options)
                    
                    q_text = "Identify each D-aldohexose Haworth projection by selecting its correct name from the dropdown."
                    
                    questions.append({
                        "question_id": q_id,
                        "topic": "Carbohydrates & Haworth Projections",
                        "difficulty_level": "Hard",
                        "question_text": q_text,
                        "interaction_type": "matching-grid",
                        "grid_columns": 2,
                        "match_items": match_items,
                        "match_options": match_options,
                        "options": [
                            {"option_id": "A", "text": "All matched correctly", "is_correct": True},
                            {"option_id": "B", "text": "Incorrect carbohydrate matching", "is_correct": False}
                        ],
                        "feedback": {
                            "context": "Analyzing stereocenter configurations in Haworth projections of pyranose rings.",
                            "process": "\n".join([f"Sugar {i+1}: {it['name']}." for i, it in enumerate(items)]),
                            "result": "All Haworth structures matched correctly."
                        }
                    })
                
            # -------------------------------------------------------------
            # Chapter 43: Amino Acids Matching Lists
            # -------------------------------------------------------------
            elif ch == 43:
                items = random.sample(amino_acids, 4)
                match_items = [{"smiles": it["smiles"], "correctAnswer": it["name"]} for it in items]
                
                correct_names = [it["name"] for it in items]
                distractors = get_distractors(correct_names, [a["name"] for a in amino_acids], 4)
                match_options = list(set(correct_names + distractors))
                random.shuffle(match_options)
                
                q_text = "Match each amino acid structure below to its correct name."
                
                questions.append({
                    "question_id": q_id,
                    "topic": "Amino Acids & Peptides",
                    "difficulty_level": "Medium",
                    "question_text": q_text,
                    "interaction_type": "matching-list",
                    "match_items": match_items,
                    "match_options": match_options,
                    "options": [
                        {"option_id": "A", "text": "All matched correctly", "is_correct": True},
                        {"option_id": "B", "text": "Incorrect amino acids matching", "is_correct": False}
                    ],
                    "feedback": {
                        "context": "Identifying amino acids by structure and side chains.",
                        "process": "\n".join([f"Amino Acid {i+1}: {it['name']}." for i, it in enumerate(items)]),
                        "result": "Amino acids matched successfully."
                    }
                })
        
        # Write output to questions/chapter{ch}.js
        out_path = os.path.join(questions_dir, f"chapter{ch}.js")
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(f"// Generated extra questions for Chapter {ch}\n")
            f.write(f"const CHAPTER_{ch}_QUESTIONS = ")
            json.dump(questions, f, indent=2)
            f.write(";\n")
            
        print(f"Generated {out_path} successfully (95 questions).")

if __name__ == "__main__":
    generate_all_extra_chapters()
