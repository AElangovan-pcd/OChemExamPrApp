// Generated extra questions for Chapter 48
const CHAPTER_48_QUESTIONS = [
  {
    "question_id": "ch48_q1",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "[N+](=O)([O-])c1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "Nc1ccccc1",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "HNO3, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "Fe, HCl"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: toluene, B: nitrobenzene, C: phenol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: benzene, B: nitrobenzene, C: aniline",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: benzene, B: benzenesulfonic acid, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: benzene, B: chlorobenzene, C: aniline",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: nitrobenzene, C: aniline.",
      "result": "The labels correspond to A: benzene, B: nitrobenzene, C: aniline."
    }
  },
  {
    "question_id": "ch48_q2",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCC(=O)O",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CCCOC(CC)=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Na2Cr2O7, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1-propanol, H+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: 1-propanol, B: propanoic acid, C: ethyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: 1-propanol, B: propanoic acid, C: propyl propanoate",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: propan-2-ol, B: propanoic acid, C: isopropyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: 1-propanol, B: propanal, C: propyl acetate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: 1-propanol, B: propanoic acid, C: propyl propanoate.",
      "result": "The labels correspond to A: 1-propanol, B: propanoic acid, C: propyl propanoate."
    }
  },
  {
    "question_id": "ch48_q3",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "C=C",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C(Br)CBr",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "C#C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "2 NaNH2"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethane, B: bromoethane, C: ethylene",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethylene, B: 1,2-dibromoethane, C: acetylene",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: acetylene, B: 1,2-dibromoethane, C: ethylene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethylene, B: bromoethane, C: acetylene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethylene, B: 1,2-dibromoethane, C: acetylene.",
      "result": "The labels correspond to A: ethylene, B: 1,2-dibromoethane, C: acetylene."
    }
  },
  {
    "question_id": "ch48_q4",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
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
          "smiles": "CC(O)C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(=O)C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2O, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propane, B: 1-propanol, C: propanoic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: propyne, B: acetone, C: acetaldehyde",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: propene, B: 2-propanol, C: acetone",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: propene, B: 1-propanol, C: propanal",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: propene, B: 2-propanol, C: acetone.",
      "result": "The labels correspond to A: propene, B: 2-propanol, C: acetone."
    }
  },
  {
    "question_id": "ch48_q5",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C=C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2SO4, heat"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H2, Pd/C"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethanol, B: ethylene, C: ethane",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: acetaldehyde, B: ethylene, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethanol, B: ethyne, C: ethane",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: diethyl ether, B: ethylene, C: ethanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethanol, B: ethylene, C: ethane.",
      "result": "The labels correspond to A: ethanol, B: ethylene, C: ethane."
    }
  },
  {
    "question_id": "ch48_q6",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCC(=O)O",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CCCOC(CC)=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Na2Cr2O7, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1-propanol, H+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propan-2-ol, B: propanoic acid, C: isopropyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: 1-propanol, B: propanal, C: propyl acetate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: 1-propanol, B: propanoic acid, C: ethyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: 1-propanol, B: propanoic acid, C: propyl propanoate",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: 1-propanol, B: propanoic acid, C: propyl propanoate.",
      "result": "The labels correspond to A: 1-propanol, B: propanoic acid, C: propyl propanoate."
    }
  },
  {
    "question_id": "ch48_q7",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "C=C",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C(Br)CBr",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "C#C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "2 NaNH2"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethylene, B: bromoethane, C: acetylene",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: acetylene, B: 1,2-dibromoethane, C: ethylene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethylene, B: 1,2-dibromoethane, C: acetylene",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: ethane, B: bromoethane, C: ethylene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethylene, B: 1,2-dibromoethane, C: acetylene.",
      "result": "The labels correspond to A: ethylene, B: 1,2-dibromoethane, C: acetylene."
    }
  },
  {
    "question_id": "ch48_q8",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCC(=O)O",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CCCOC(CC)=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Na2Cr2O7, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1-propanol, H+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: 1-propanol, B: propanal, C: propyl acetate",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: 1-propanol, B: propanoic acid, C: propyl propanoate",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: propan-2-ol, B: propanoic acid, C: isopropyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: 1-propanol, B: propanoic acid, C: ethyl propanoate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: 1-propanol, B: propanoic acid, C: propyl propanoate.",
      "result": "The labels correspond to A: 1-propanol, B: propanoic acid, C: propyl propanoate."
    }
  },
  {
    "question_id": "ch48_q9",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCCBr",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CCCC#N",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "PBr3"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "NaCN, DMF"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: 1-propanol, B: 1-bromopropane, C: propionitrile",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: 1-propanol, B: 1-bromopropane, C: butanenitrile",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: propan-2-ol, B: 2-bromopropane, C: isobutyronitrile",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: 1-propanol, B: propane, C: butanenitrile",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: 1-propanol, B: 1-bromopropane, C: butanenitrile.",
      "result": "The labels correspond to A: 1-propanol, B: 1-bromopropane, C: butanenitrile."
    }
  },
  {
    "question_id": "ch48_q10",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    }
  },
  {
    "question_id": "ch48_q11",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
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
          "smiles": "CC(O)C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(=O)C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2O, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propane, B: 1-propanol, C: propanoic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: propene, B: 2-propanol, C: acetone",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: propene, B: 1-propanol, C: propanal",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: propyne, B: acetone, C: acetaldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: propene, B: 2-propanol, C: acetone.",
      "result": "The labels correspond to A: propene, B: 2-propanol, C: acetone."
    }
  },
  {
    "question_id": "ch48_q12",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
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
          "smiles": "CC(O)C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(=O)C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2O, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propane, B: 1-propanol, C: propanoic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: propene, B: 1-propanol, C: propanal",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: propene, B: 2-propanol, C: acetone",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: propyne, B: acetone, C: acetaldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: propene, B: 2-propanol, C: acetone.",
      "result": "The labels correspond to A: propene, B: 2-propanol, C: acetone."
    }
  },
  {
    "question_id": "ch48_q13",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCC(=O)O",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CCCOC(CC)=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Na2Cr2O7, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1-propanol, H+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: 1-propanol, B: propanoic acid, C: propyl propanoate",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: 1-propanol, B: propanal, C: propyl acetate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: propan-2-ol, B: propanoic acid, C: isopropyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: 1-propanol, B: propanoic acid, C: ethyl propanoate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: 1-propanol, B: propanoic acid, C: propyl propanoate.",
      "result": "The labels correspond to A: 1-propanol, B: propanoic acid, C: propyl propanoate."
    }
  },
  {
    "question_id": "ch48_q14",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "C=C",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C(Br)CBr",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "C#C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "2 NaNH2"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethane, B: bromoethane, C: ethylene",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethylene, B: bromoethane, C: acetylene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethylene, B: 1,2-dibromoethane, C: acetylene",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: acetylene, B: 1,2-dibromoethane, C: ethylene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethylene, B: 1,2-dibromoethane, C: acetylene.",
      "result": "The labels correspond to A: ethylene, B: 1,2-dibromoethane, C: acetylene."
    }
  },
  {
    "question_id": "ch48_q15",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "C=C",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C(Br)CBr",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "C#C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "2 NaNH2"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethylene, B: bromoethane, C: acetylene",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethane, B: bromoethane, C: ethylene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethylene, B: 1,2-dibromoethane, C: acetylene",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: acetylene, B: 1,2-dibromoethane, C: ethylene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethylene, B: 1,2-dibromoethane, C: acetylene.",
      "result": "The labels correspond to A: ethylene, B: 1,2-dibromoethane, C: acetylene."
    }
  },
  {
    "question_id": "ch48_q16",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
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
          "smiles": "CC1OC1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(O)CO",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "mCPBA"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propyne, B: propylene oxide, C: propan-2-ol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: propene, B: acetone, C: 1,2-propanediol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: propene, B: propylene glycol, C: acetone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: propene, B: propylene oxide, C: 1,2-propanediol",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: propene, B: propylene oxide, C: 1,2-propanediol.",
      "result": "The labels correspond to A: propene, B: propylene oxide, C: 1,2-propanediol."
    }
  },
  {
    "question_id": "ch48_q17",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "C=C",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C(Br)CBr",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "C#C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "2 NaNH2"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethylene, B: bromoethane, C: acetylene",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethylene, B: 1,2-dibromoethane, C: acetylene",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: ethane, B: bromoethane, C: ethylene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: acetylene, B: 1,2-dibromoethane, C: ethylene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethylene, B: 1,2-dibromoethane, C: acetylene.",
      "result": "The labels correspond to A: ethylene, B: 1,2-dibromoethane, C: acetylene."
    }
  },
  {
    "question_id": "ch48_q18",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    }
  },
  {
    "question_id": "ch48_q19",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "[N+](=O)([O-])c1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "Nc1ccccc1",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "HNO3, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "Fe, HCl"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: chlorobenzene, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: toluene, B: nitrobenzene, C: phenol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: benzene, B: nitrobenzene, C: aniline",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: benzene, B: benzenesulfonic acid, C: aniline",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: nitrobenzene, C: aniline.",
      "result": "The labels correspond to A: benzene, B: nitrobenzene, C: aniline."
    }
  },
  {
    "question_id": "ch48_q20",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    }
  },
  {
    "question_id": "ch48_q21",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C=C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2SO4, heat"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H2, Pd/C"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: diethyl ether, B: ethylene, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethanol, B: ethyne, C: ethane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: acetaldehyde, B: ethylene, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethanol, B: ethylene, C: ethane",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethanol, B: ethylene, C: ethane.",
      "result": "The labels correspond to A: ethanol, B: ethylene, C: ethane."
    }
  },
  {
    "question_id": "ch48_q22",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "C=C",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C(Br)CBr",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "C#C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "2 NaNH2"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: acetylene, B: 1,2-dibromoethane, C: ethylene",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethane, B: bromoethane, C: ethylene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethylene, B: 1,2-dibromoethane, C: acetylene",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: ethylene, B: bromoethane, C: acetylene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethylene, B: 1,2-dibromoethane, C: acetylene.",
      "result": "The labels correspond to A: ethylene, B: 1,2-dibromoethane, C: acetylene."
    }
  },
  {
    "question_id": "ch48_q23",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCC(=O)O",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CCCOC(CC)=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Na2Cr2O7, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1-propanol, H+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: 1-propanol, B: propanoic acid, C: ethyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: 1-propanol, B: propanal, C: propyl acetate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: 1-propanol, B: propanoic acid, C: propyl propanoate",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: propan-2-ol, B: propanoic acid, C: isopropyl propanoate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: 1-propanol, B: propanoic acid, C: propyl propanoate.",
      "result": "The labels correspond to A: 1-propanol, B: propanoic acid, C: propyl propanoate."
    }
  },
  {
    "question_id": "ch48_q24",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "C=C",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C(Br)CBr",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "C#C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "2 NaNH2"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethane, B: bromoethane, C: ethylene",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: acetylene, B: 1,2-dibromoethane, C: ethylene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethylene, B: 1,2-dibromoethane, C: acetylene",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: ethylene, B: bromoethane, C: acetylene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethylene, B: 1,2-dibromoethane, C: acetylene.",
      "result": "The labels correspond to A: ethylene, B: 1,2-dibromoethane, C: acetylene."
    }
  },
  {
    "question_id": "ch48_q25",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "Brc1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(O)(c1ccccc1)C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2, FeBr3"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1) Mg, ether\n2) Acetone\n3) H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: toluene, B: bromobenzene, C: benzoic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: benzene, B: chlorobenzene, C: benzyl alcohol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: benzene, B: bromobenzene, C: acetophenone",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol.",
      "result": "The labels correspond to A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol."
    }
  },
  {
    "question_id": "ch48_q26",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C=C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2SO4, heat"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H2, Pd/C"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: acetaldehyde, B: ethylene, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethanol, B: ethylene, C: ethane",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: ethanol, B: ethyne, C: ethane",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: diethyl ether, B: ethylene, C: ethanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethanol, B: ethylene, C: ethane.",
      "result": "The labels correspond to A: ethanol, B: ethylene, C: ethane."
    }
  },
  {
    "question_id": "ch48_q27",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C=C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2SO4, heat"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H2, Pd/C"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethanol, B: ethyne, C: ethane",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: diethyl ether, B: ethylene, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethanol, B: ethylene, C: ethane",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: acetaldehyde, B: ethylene, C: acetic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethanol, B: ethylene, C: ethane.",
      "result": "The labels correspond to A: ethanol, B: ethylene, C: ethane."
    }
  },
  {
    "question_id": "ch48_q28",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    }
  },
  {
    "question_id": "ch48_q29",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "Brc1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(O)(c1ccccc1)C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2, FeBr3"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1) Mg, ether\n2) Acetone\n3) H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: benzene, B: bromobenzene, C: acetophenone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: benzene, B: chlorobenzene, C: benzyl alcohol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: toluene, B: bromobenzene, C: benzoic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol.",
      "result": "The labels correspond to A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol."
    }
  },
  {
    "question_id": "ch48_q30",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCC(=O)O",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CCCOC(CC)=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Na2Cr2O7, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1-propanol, H+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propan-2-ol, B: propanoic acid, C: isopropyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: 1-propanol, B: propanoic acid, C: propyl propanoate",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: 1-propanol, B: propanoic acid, C: ethyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: 1-propanol, B: propanal, C: propyl acetate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: 1-propanol, B: propanoic acid, C: propyl propanoate.",
      "result": "The labels correspond to A: 1-propanol, B: propanoic acid, C: propyl propanoate."
    }
  },
  {
    "question_id": "ch48_q31",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C=C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2SO4, heat"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H2, Pd/C"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: acetaldehyde, B: ethylene, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: diethyl ether, B: ethylene, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethanol, B: ethyne, C: ethane",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethanol, B: ethylene, C: ethane",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethanol, B: ethylene, C: ethane.",
      "result": "The labels correspond to A: ethanol, B: ethylene, C: ethane."
    }
  },
  {
    "question_id": "ch48_q32",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C=C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2SO4, heat"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H2, Pd/C"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethanol, B: ethylene, C: ethane",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: acetaldehyde, B: ethylene, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethanol, B: ethyne, C: ethane",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: diethyl ether, B: ethylene, C: ethanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethanol, B: ethylene, C: ethane.",
      "result": "The labels correspond to A: ethanol, B: ethylene, C: ethane."
    }
  },
  {
    "question_id": "ch48_q33",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCCBr",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CCCC#N",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "PBr3"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "NaCN, DMF"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: 1-propanol, B: 1-bromopropane, C: propionitrile",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: 1-propanol, B: propane, C: butanenitrile",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: 1-propanol, B: 1-bromopropane, C: butanenitrile",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: propan-2-ol, B: 2-bromopropane, C: isobutyronitrile",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: 1-propanol, B: 1-bromopropane, C: butanenitrile.",
      "result": "The labels correspond to A: 1-propanol, B: 1-bromopropane, C: butanenitrile."
    }
  },
  {
    "question_id": "ch48_q34",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
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
          "smiles": "CC1OC1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(O)CO",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "mCPBA"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propene, B: acetone, C: 1,2-propanediol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: propene, B: propylene glycol, C: acetone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: propyne, B: propylene oxide, C: propan-2-ol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: propene, B: propylene oxide, C: 1,2-propanediol",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: propene, B: propylene oxide, C: 1,2-propanediol.",
      "result": "The labels correspond to A: propene, B: propylene oxide, C: 1,2-propanediol."
    }
  },
  {
    "question_id": "ch48_q35",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    }
  },
  {
    "question_id": "ch48_q36",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
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
          "smiles": "CC1OC1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(O)CO",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "mCPBA"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propyne, B: propylene oxide, C: propan-2-ol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: propene, B: propylene glycol, C: acetone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: propene, B: propylene oxide, C: 1,2-propanediol",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: propene, B: acetone, C: 1,2-propanediol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: propene, B: propylene oxide, C: 1,2-propanediol.",
      "result": "The labels correspond to A: propene, B: propylene oxide, C: 1,2-propanediol."
    }
  },
  {
    "question_id": "ch48_q37",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCCBr",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CCCC#N",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "PBr3"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "NaCN, DMF"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: 1-propanol, B: 1-bromopropane, C: propionitrile",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: propan-2-ol, B: 2-bromopropane, C: isobutyronitrile",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: 1-propanol, B: 1-bromopropane, C: butanenitrile",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: 1-propanol, B: propane, C: butanenitrile",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: 1-propanol, B: 1-bromopropane, C: butanenitrile.",
      "result": "The labels correspond to A: 1-propanol, B: 1-bromopropane, C: butanenitrile."
    }
  },
  {
    "question_id": "ch48_q38",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "[N+](=O)([O-])c1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "Nc1ccccc1",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "HNO3, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "Fe, HCl"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: chlorobenzene, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: benzene, B: benzenesulfonic acid, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: benzene, B: nitrobenzene, C: aniline",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: toluene, B: nitrobenzene, C: phenol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: nitrobenzene, C: aniline.",
      "result": "The labels correspond to A: benzene, B: nitrobenzene, C: aniline."
    }
  },
  {
    "question_id": "ch48_q39",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    }
  },
  {
    "question_id": "ch48_q40",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "[N+](=O)([O-])c1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "Nc1ccccc1",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "HNO3, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "Fe, HCl"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: nitrobenzene, C: aniline",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: toluene, B: nitrobenzene, C: phenol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: benzene, B: benzenesulfonic acid, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: benzene, B: chlorobenzene, C: aniline",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: nitrobenzene, C: aniline.",
      "result": "The labels correspond to A: benzene, B: nitrobenzene, C: aniline."
    }
  },
  {
    "question_id": "ch48_q41",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "Brc1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(O)(c1ccccc1)C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2, FeBr3"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1) Mg, ether\n2) Acetone\n3) H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: benzene, B: bromobenzene, C: acetophenone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: toluene, B: bromobenzene, C: benzoic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: benzene, B: chlorobenzene, C: benzyl alcohol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol.",
      "result": "The labels correspond to A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol."
    }
  },
  {
    "question_id": "ch48_q42",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "[N+](=O)([O-])c1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "Nc1ccccc1",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "HNO3, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "Fe, HCl"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: chlorobenzene, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: benzene, B: benzenesulfonic acid, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: toluene, B: nitrobenzene, C: phenol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: benzene, B: nitrobenzene, C: aniline",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: nitrobenzene, C: aniline.",
      "result": "The labels correspond to A: benzene, B: nitrobenzene, C: aniline."
    }
  },
  {
    "question_id": "ch48_q43",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    }
  },
  {
    "question_id": "ch48_q44",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CC#C",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CC(=O)C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(O)C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2O, H2SO4, HgSO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "NaBH4, MeOH"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propyne, B: acetone, C: propane",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: propyne, B: acetone, C: 2-propanol",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: propene, B: propanal, C: 1-propanol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: propyne, B: propanal, C: 2-propanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: propyne, B: acetone, C: 2-propanol.",
      "result": "The labels correspond to A: propyne, B: acetone, C: 2-propanol."
    }
  },
  {
    "question_id": "ch48_q45",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "C=C",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C(Br)CBr",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "C#C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "2 NaNH2"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethylene, B: bromoethane, C: acetylene",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethane, B: bromoethane, C: ethylene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethylene, B: 1,2-dibromoethane, C: acetylene",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: acetylene, B: 1,2-dibromoethane, C: ethylene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethylene, B: 1,2-dibromoethane, C: acetylene.",
      "result": "The labels correspond to A: ethylene, B: 1,2-dibromoethane, C: acetylene."
    }
  },
  {
    "question_id": "ch48_q46",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "C=C",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C(Br)CBr",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "C#C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "2 NaNH2"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethylene, B: 1,2-dibromoethane, C: acetylene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: acetylene, B: 1,2-dibromoethane, C: ethylene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethylene, B: bromoethane, C: acetylene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethane, B: bromoethane, C: ethylene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethylene, B: 1,2-dibromoethane, C: acetylene.",
      "result": "The labels correspond to A: ethylene, B: 1,2-dibromoethane, C: acetylene."
    }
  },
  {
    "question_id": "ch48_q47",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    }
  },
  {
    "question_id": "ch48_q48",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCCBr",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CCCC#N",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "PBr3"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "NaCN, DMF"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: 1-propanol, B: propane, C: butanenitrile",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: 1-propanol, B: 1-bromopropane, C: propionitrile",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: 1-propanol, B: 1-bromopropane, C: butanenitrile",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: propan-2-ol, B: 2-bromopropane, C: isobutyronitrile",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: 1-propanol, B: 1-bromopropane, C: butanenitrile.",
      "result": "The labels correspond to A: 1-propanol, B: 1-bromopropane, C: butanenitrile."
    }
  },
  {
    "question_id": "ch48_q49",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CC#C",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CC(=O)C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(O)C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2O, H2SO4, HgSO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "NaBH4, MeOH"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propyne, B: acetone, C: propane",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: propyne, B: acetone, C: 2-propanol",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: propene, B: propanal, C: 1-propanol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: propyne, B: propanal, C: 2-propanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: propyne, B: acetone, C: 2-propanol.",
      "result": "The labels correspond to A: propyne, B: acetone, C: 2-propanol."
    }
  },
  {
    "question_id": "ch48_q50",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
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
          "smiles": "CC1OC1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(O)CO",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "mCPBA"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propene, B: propylene glycol, C: acetone",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: propyne, B: propylene oxide, C: propan-2-ol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: propene, B: propylene oxide, C: 1,2-propanediol",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: propene, B: acetone, C: 1,2-propanediol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: propene, B: propylene oxide, C: 1,2-propanediol.",
      "result": "The labels correspond to A: propene, B: propylene oxide, C: 1,2-propanediol."
    }
  },
  {
    "question_id": "ch48_q51",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCCBr",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CCCC#N",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "PBr3"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "NaCN, DMF"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: 1-propanol, B: 1-bromopropane, C: butanenitrile",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: 1-propanol, B: 1-bromopropane, C: propionitrile",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: 1-propanol, B: propane, C: butanenitrile",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: propan-2-ol, B: 2-bromopropane, C: isobutyronitrile",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: 1-propanol, B: 1-bromopropane, C: butanenitrile.",
      "result": "The labels correspond to A: 1-propanol, B: 1-bromopropane, C: butanenitrile."
    }
  },
  {
    "question_id": "ch48_q52",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
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
          "smiles": "CC(O)C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(=O)C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2O, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propyne, B: acetone, C: acetaldehyde",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: propane, B: 1-propanol, C: propanoic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: propene, B: 2-propanol, C: acetone",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: propene, B: 1-propanol, C: propanal",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: propene, B: 2-propanol, C: acetone.",
      "result": "The labels correspond to A: propene, B: 2-propanol, C: acetone."
    }
  },
  {
    "question_id": "ch48_q53",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
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
          "smiles": "CC(O)C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(=O)C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2O, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propyne, B: acetone, C: acetaldehyde",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: propane, B: 1-propanol, C: propanoic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: propene, B: 2-propanol, C: acetone",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: propene, B: 1-propanol, C: propanal",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: propene, B: 2-propanol, C: acetone.",
      "result": "The labels correspond to A: propene, B: 2-propanol, C: acetone."
    }
  },
  {
    "question_id": "ch48_q54",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
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
          "smiles": "CC1OC1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(O)CO",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "mCPBA"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propene, B: propylene glycol, C: acetone",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: propene, B: acetone, C: 1,2-propanediol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: propene, B: propylene oxide, C: 1,2-propanediol",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: propyne, B: propylene oxide, C: propan-2-ol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: propene, B: propylene oxide, C: 1,2-propanediol.",
      "result": "The labels correspond to A: propene, B: propylene oxide, C: 1,2-propanediol."
    }
  },
  {
    "question_id": "ch48_q55",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "[N+](=O)([O-])c1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "Nc1ccccc1",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "HNO3, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "Fe, HCl"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: benzenesulfonic acid, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: benzene, B: nitrobenzene, C: aniline",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: toluene, B: nitrobenzene, C: phenol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: benzene, B: chlorobenzene, C: aniline",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: nitrobenzene, C: aniline.",
      "result": "The labels correspond to A: benzene, B: nitrobenzene, C: aniline."
    }
  },
  {
    "question_id": "ch48_q56",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C=C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2SO4, heat"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H2, Pd/C"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: diethyl ether, B: ethylene, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethanol, B: ethyne, C: ethane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethanol, B: ethylene, C: ethane",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: acetaldehyde, B: ethylene, C: acetic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethanol, B: ethylene, C: ethane.",
      "result": "The labels correspond to A: ethanol, B: ethylene, C: ethane."
    }
  },
  {
    "question_id": "ch48_q57",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "C=C",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C(Br)CBr",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "C#C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "2 NaNH2"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethylene, B: 1,2-dibromoethane, C: acetylene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: acetylene, B: 1,2-dibromoethane, C: ethylene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethylene, B: bromoethane, C: acetylene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethane, B: bromoethane, C: ethylene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethylene, B: 1,2-dibromoethane, C: acetylene.",
      "result": "The labels correspond to A: ethylene, B: 1,2-dibromoethane, C: acetylene."
    }
  },
  {
    "question_id": "ch48_q58",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
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
          "smiles": "CC1OC1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(O)CO",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "mCPBA"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propene, B: acetone, C: 1,2-propanediol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: propene, B: propylene glycol, C: acetone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: propyne, B: propylene oxide, C: propan-2-ol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: propene, B: propylene oxide, C: 1,2-propanediol",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: propene, B: propylene oxide, C: 1,2-propanediol.",
      "result": "The labels correspond to A: propene, B: propylene oxide, C: 1,2-propanediol."
    }
  },
  {
    "question_id": "ch48_q59",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    }
  },
  {
    "question_id": "ch48_q60",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    }
  },
  {
    "question_id": "ch48_q61",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCCBr",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CCCC#N",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "PBr3"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "NaCN, DMF"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: 1-propanol, B: 1-bromopropane, C: butanenitrile",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: 1-propanol, B: propane, C: butanenitrile",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: propan-2-ol, B: 2-bromopropane, C: isobutyronitrile",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: 1-propanol, B: 1-bromopropane, C: propionitrile",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: 1-propanol, B: 1-bromopropane, C: butanenitrile.",
      "result": "The labels correspond to A: 1-propanol, B: 1-bromopropane, C: butanenitrile."
    }
  },
  {
    "question_id": "ch48_q62",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "Brc1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(O)(c1ccccc1)C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2, FeBr3"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1) Mg, ether\n2) Acetone\n3) H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: benzene, B: bromobenzene, C: acetophenone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: benzene, B: chlorobenzene, C: benzyl alcohol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: toluene, B: bromobenzene, C: benzoic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol.",
      "result": "The labels correspond to A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol."
    }
  },
  {
    "question_id": "ch48_q63",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "[N+](=O)([O-])c1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "Nc1ccccc1",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "HNO3, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "Fe, HCl"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: benzenesulfonic acid, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: toluene, B: nitrobenzene, C: phenol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: benzene, B: nitrobenzene, C: aniline",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: benzene, B: chlorobenzene, C: aniline",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: nitrobenzene, C: aniline.",
      "result": "The labels correspond to A: benzene, B: nitrobenzene, C: aniline."
    }
  },
  {
    "question_id": "ch48_q64",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "Brc1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(O)(c1ccccc1)C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2, FeBr3"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1) Mg, ether\n2) Acetone\n3) H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: benzene, B: chlorobenzene, C: benzyl alcohol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: benzene, B: bromobenzene, C: acetophenone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: toluene, B: bromobenzene, C: benzoic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol.",
      "result": "The labels correspond to A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol."
    }
  },
  {
    "question_id": "ch48_q65",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "C=C",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C(Br)CBr",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "C#C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "2 NaNH2"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethylene, B: 1,2-dibromoethane, C: acetylene",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: ethane, B: bromoethane, C: ethylene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethylene, B: bromoethane, C: acetylene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: acetylene, B: 1,2-dibromoethane, C: ethylene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethylene, B: 1,2-dibromoethane, C: acetylene.",
      "result": "The labels correspond to A: ethylene, B: 1,2-dibromoethane, C: acetylene."
    }
  },
  {
    "question_id": "ch48_q66",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    }
  },
  {
    "question_id": "ch48_q67",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCC(=O)O",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CCCOC(CC)=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Na2Cr2O7, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1-propanol, H+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: 1-propanol, B: propanoic acid, C: ethyl propanoate",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: 1-propanol, B: propanal, C: propyl acetate",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: 1-propanol, B: propanoic acid, C: propyl propanoate",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: propan-2-ol, B: propanoic acid, C: isopropyl propanoate",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: 1-propanol, B: propanoic acid, C: propyl propanoate.",
      "result": "The labels correspond to A: 1-propanol, B: propanoic acid, C: propyl propanoate."
    }
  },
  {
    "question_id": "ch48_q68",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "Brc1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(O)(c1ccccc1)C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2, FeBr3"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1) Mg, ether\n2) Acetone\n3) H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: chlorobenzene, C: benzyl alcohol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: benzene, B: bromobenzene, C: acetophenone",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: toluene, B: bromobenzene, C: benzoic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol.",
      "result": "The labels correspond to A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol."
    }
  },
  {
    "question_id": "ch48_q69",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C=C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2SO4, heat"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H2, Pd/C"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: acetaldehyde, B: ethylene, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethanol, B: ethyne, C: ethane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: diethyl ether, B: ethylene, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethanol, B: ethylene, C: ethane",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethanol, B: ethylene, C: ethane.",
      "result": "The labels correspond to A: ethanol, B: ethylene, C: ethane."
    }
  },
  {
    "question_id": "ch48_q70",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "Brc1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(O)(c1ccccc1)C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2, FeBr3"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1) Mg, ether\n2) Acetone\n3) H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: toluene, B: bromobenzene, C: benzoic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: benzene, B: chlorobenzene, C: benzyl alcohol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: benzene, B: bromobenzene, C: acetophenone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol.",
      "result": "The labels correspond to A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol."
    }
  },
  {
    "question_id": "ch48_q71",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C=C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2SO4, heat"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H2, Pd/C"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethanol, B: ethyne, C: ethane",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: diethyl ether, B: ethylene, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: acetaldehyde, B: ethylene, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethanol, B: ethylene, C: ethane",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethanol, B: ethylene, C: ethane.",
      "result": "The labels correspond to A: ethanol, B: ethylene, C: ethane."
    }
  },
  {
    "question_id": "ch48_q72",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
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
          "smiles": "CC(O)C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(=O)C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2O, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propane, B: 1-propanol, C: propanoic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: propene, B: 2-propanol, C: acetone",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: propyne, B: acetone, C: acetaldehyde",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: propene, B: 1-propanol, C: propanal",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: propene, B: 2-propanol, C: acetone.",
      "result": "The labels correspond to A: propene, B: 2-propanol, C: acetone."
    }
  },
  {
    "question_id": "ch48_q73",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCOC(C)=O",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCO",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC=O",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "LiAlH4, ether"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethyl acetate, B: acetaldehyde, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: methyl acetate, B: methanol, C: formaldehyde",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethyl acetate, B: ethanol, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethyl acetate, B: ethanol, C: acetaldehyde",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethyl acetate, B: ethanol, C: acetaldehyde.",
      "result": "The labels correspond to A: ethyl acetate, B: ethanol, C: acetaldehyde."
    }
  },
  {
    "question_id": "ch48_q74",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C=C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2SO4, heat"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H2, Pd/C"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethanol, B: ethyne, C: ethane",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: diethyl ether, B: ethylene, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: acetaldehyde, B: ethylene, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethanol, B: ethylene, C: ethane",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethanol, B: ethylene, C: ethane.",
      "result": "The labels correspond to A: ethanol, B: ethylene, C: ethane."
    }
  },
  {
    "question_id": "ch48_q75",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C=C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2SO4, heat"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H2, Pd/C"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethanol, B: ethylene, C: ethane",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: acetaldehyde, B: ethylene, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: diethyl ether, B: ethylene, C: ethanol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethanol, B: ethyne, C: ethane",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethanol, B: ethylene, C: ethane.",
      "result": "The labels correspond to A: ethanol, B: ethylene, C: ethane."
    }
  },
  {
    "question_id": "ch48_q76",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
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
          "smiles": "CC1OC1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(O)CO",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "mCPBA"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propene, B: propylene glycol, C: acetone",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: propyne, B: propylene oxide, C: propan-2-ol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: propene, B: acetone, C: 1,2-propanediol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: propene, B: propylene oxide, C: 1,2-propanediol",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: propene, B: propylene oxide, C: 1,2-propanediol.",
      "result": "The labels correspond to A: propene, B: propylene oxide, C: 1,2-propanediol."
    }
  },
  {
    "question_id": "ch48_q77",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "Brc1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(O)(c1ccccc1)C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2, FeBr3"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1) Mg, ether\n2) Acetone\n3) H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: benzene, B: chlorobenzene, C: benzyl alcohol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: benzene, B: bromobenzene, C: acetophenone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: toluene, B: bromobenzene, C: benzoic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol.",
      "result": "The labels correspond to A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol."
    }
  },
  {
    "question_id": "ch48_q78",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CC#C",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CC(=O)C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(O)C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2O, H2SO4, HgSO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "NaBH4, MeOH"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propyne, B: acetone, C: 2-propanol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: propyne, B: acetone, C: propane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: propyne, B: propanal, C: 2-propanol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: propene, B: propanal, C: 1-propanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: propyne, B: acetone, C: 2-propanol.",
      "result": "The labels correspond to A: propyne, B: acetone, C: 2-propanol."
    }
  },
  {
    "question_id": "ch48_q79",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "C=C",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C(Br)CBr",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "C#C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "2 NaNH2"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: acetylene, B: 1,2-dibromoethane, C: ethylene",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethylene, B: 1,2-dibromoethane, C: acetylene",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: ethylene, B: bromoethane, C: acetylene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethane, B: bromoethane, C: ethylene",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethylene, B: 1,2-dibromoethane, C: acetylene.",
      "result": "The labels correspond to A: ethylene, B: 1,2-dibromoethane, C: acetylene."
    }
  },
  {
    "question_id": "ch48_q80",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CC#C",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CC(=O)C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(O)C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2O, H2SO4, HgSO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "NaBH4, MeOH"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propyne, B: acetone, C: 2-propanol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: propyne, B: propanal, C: 2-propanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: propene, B: propanal, C: 1-propanol",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: propyne, B: acetone, C: propane",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: propyne, B: acetone, C: 2-propanol.",
      "result": "The labels correspond to A: propyne, B: acetone, C: 2-propanol."
    }
  },
  {
    "question_id": "ch48_q81",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "[N+](=O)([O-])c1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "Nc1ccccc1",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "HNO3, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "Fe, HCl"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: benzenesulfonic acid, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: benzene, B: nitrobenzene, C: aniline",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: benzene, B: chlorobenzene, C: aniline",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: toluene, B: nitrobenzene, C: phenol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: nitrobenzene, C: aniline.",
      "result": "The labels correspond to A: benzene, B: nitrobenzene, C: aniline."
    }
  },
  {
    "question_id": "ch48_q82",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CC#C",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CC(=O)C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(O)C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2O, H2SO4, HgSO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "NaBH4, MeOH"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propyne, B: propanal, C: 2-propanol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: propene, B: propanal, C: 1-propanol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: propyne, B: acetone, C: propane",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: propyne, B: acetone, C: 2-propanol",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: propyne, B: acetone, C: 2-propanol.",
      "result": "The labels correspond to A: propyne, B: acetone, C: 2-propanol."
    }
  },
  {
    "question_id": "ch48_q83",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCCBr",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CCCC#N",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "PBr3"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "NaCN, DMF"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: 1-propanol, B: 1-bromopropane, C: propionitrile",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: propan-2-ol, B: 2-bromopropane, C: isobutyronitrile",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: 1-propanol, B: propane, C: butanenitrile",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: 1-propanol, B: 1-bromopropane, C: butanenitrile",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: 1-propanol, B: 1-bromopropane, C: butanenitrile.",
      "result": "The labels correspond to A: 1-propanol, B: 1-bromopropane, C: butanenitrile."
    }
  },
  {
    "question_id": "ch48_q84",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "C=C",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C(Br)CBr",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "C#C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "2 NaNH2"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethylene, B: bromoethane, C: acetylene",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: acetylene, B: 1,2-dibromoethane, C: ethylene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethane, B: bromoethane, C: ethylene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethylene, B: 1,2-dibromoethane, C: acetylene",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethylene, B: 1,2-dibromoethane, C: acetylene.",
      "result": "The labels correspond to A: ethylene, B: 1,2-dibromoethane, C: acetylene."
    }
  },
  {
    "question_id": "ch48_q85",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCCBr",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CCCC#N",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "PBr3"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "NaCN, DMF"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: 1-propanol, B: 1-bromopropane, C: butanenitrile",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: 1-propanol, B: propane, C: butanenitrile",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: propan-2-ol, B: 2-bromopropane, C: isobutyronitrile",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: 1-propanol, B: 1-bromopropane, C: propionitrile",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: 1-propanol, B: 1-bromopropane, C: butanenitrile.",
      "result": "The labels correspond to A: 1-propanol, B: 1-bromopropane, C: butanenitrile."
    }
  },
  {
    "question_id": "ch48_q86",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
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
          "smiles": "CC(O)C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(=O)C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2O, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propyne, B: acetone, C: acetaldehyde",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: propane, B: 1-propanol, C: propanoic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: propene, B: 2-propanol, C: acetone",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: propene, B: 1-propanol, C: propanal",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: propene, B: 2-propanol, C: acetone.",
      "result": "The labels correspond to A: propene, B: 2-propanol, C: acetone."
    }
  },
  {
    "question_id": "ch48_q87",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C=C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2SO4, heat"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H2, Pd/C"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: acetaldehyde, B: ethylene, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethanol, B: ethyne, C: ethane",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethanol, B: ethylene, C: ethane",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: diethyl ether, B: ethylene, C: ethanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethanol, B: ethylene, C: ethane.",
      "result": "The labels correspond to A: ethanol, B: ethylene, C: ethane."
    }
  },
  {
    "question_id": "ch48_q88",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
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
          "smiles": "CC(O)C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(=O)C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2O, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propyne, B: acetone, C: acetaldehyde",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: propene, B: 1-propanol, C: propanal",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: propene, B: 2-propanol, C: acetone",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: propane, B: 1-propanol, C: propanoic acid",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: propene, B: 2-propanol, C: acetone.",
      "result": "The labels correspond to A: propene, B: 2-propanol, C: acetone."
    }
  },
  {
    "question_id": "ch48_q89",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "c1ccccc1",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "Brc1ccccc1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(O)(c1ccccc1)C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2, FeBr3"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "1) Mg, ether\n2) Acetone\n3) H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol",
        "is_correct": true
      },
      {
        "option_id": "B",
        "text": "A: toluene, B: bromobenzene, C: benzoic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: benzene, B: bromobenzene, C: acetophenone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: benzene, B: chlorobenzene, C: benzyl alcohol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol.",
      "result": "The labels correspond to A: benzene, B: bromobenzene, C: 2-phenylpropan-2-ol."
    }
  },
  {
    "question_id": "ch48_q90",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
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
          "smiles": "CC1OC1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(O)CO",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "mCPBA"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propyne, B: propylene oxide, C: propan-2-ol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: propene, B: acetone, C: 1,2-propanediol",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: propene, B: propylene glycol, C: acetone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: propene, B: propylene oxide, C: 1,2-propanediol",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: propene, B: propylene oxide, C: 1,2-propanediol.",
      "result": "The labels correspond to A: propene, B: propylene oxide, C: 1,2-propanediol."
    }
  },
  {
    "question_id": "ch48_q91",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "CCCBr",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CCCC#N",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "PBr3"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "NaCN, DMF"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: 1-propanol, B: 1-bromopropane, C: propionitrile",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: 1-propanol, B: 1-bromopropane, C: butanenitrile",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: propan-2-ol, B: 2-bromopropane, C: isobutyronitrile",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: 1-propanol, B: propane, C: butanenitrile",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: 1-propanol, B: 1-bromopropane, C: butanenitrile.",
      "result": "The labels correspond to A: 1-propanol, B: 1-bromopropane, C: butanenitrile."
    }
  },
  {
    "question_id": "ch48_q92",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
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
          "smiles": "CC1OC1",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(O)CO",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "mCPBA"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H3O+"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propyne, B: propylene oxide, C: propan-2-ol",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: propene, B: propylene oxide, C: 1,2-propanediol",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: propene, B: propylene glycol, C: acetone",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: propene, B: acetone, C: 1,2-propanediol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: propene, B: propylene oxide, C: 1,2-propanediol.",
      "result": "The labels correspond to A: propene, B: propylene oxide, C: 1,2-propanediol."
    }
  },
  {
    "question_id": "ch48_q93",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "CCO",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C=C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2SO4, heat"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "H2, Pd/C"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: ethanol, B: ethyne, C: ethane",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: acetaldehyde, B: ethylene, C: acetic acid",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethanol, B: ethylene, C: ethane",
        "is_correct": true
      },
      {
        "option_id": "D",
        "text": "A: diethyl ether, B: ethylene, C: ethanol",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethanol, B: ethylene, C: ethane.",
      "result": "The labels correspond to A: ethanol, B: ethylene, C: ethane."
    }
  },
  {
    "question_id": "ch48_q94",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
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
          "smiles": "CC(O)C",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "CC(=O)C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "H2O, H2SO4"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "PCC"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: propane, B: 1-propanol, C: propanoic acid",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: propene, B: 2-propanol, C: acetone",
        "is_correct": true
      },
      {
        "option_id": "C",
        "text": "A: propene, B: 1-propanol, C: propanal",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: propyne, B: acetone, C: acetaldehyde",
        "is_correct": false
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: propene, B: 2-propanol, C: acetone.",
      "result": "The labels correspond to A: propene, B: 2-propanol, C: acetone."
    }
  },
  {
    "question_id": "ch48_q95",
    "topic": "Synthetic Roadmaps",
    "difficulty_level": "Hard",
    "question_text": "Examine the following multi-step synthetic pathway (retrosynthetic roadmap). Determine the correct compounds matching labels A, B, and C.",
    "synthetic_roadmap": {
      "nodes": [
        {
          "id": "A",
          "smiles": "C=C",
          "label": "Compound A",
          "x": 1,
          "y": 1
        },
        {
          "id": "B",
          "smiles": "C(Br)CBr",
          "label": "Compound B",
          "x": 2,
          "y": 1
        },
        {
          "id": "C",
          "smiles": "C#C",
          "label": "Compound C",
          "x": 3,
          "y": 1
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "reagents": "Br2"
        },
        {
          "from": "B",
          "to": "C",
          "reagents": "2 NaNH2"
        }
      ]
    },
    "options": [
      {
        "option_id": "A",
        "text": "A: acetylene, B: 1,2-dibromoethane, C: ethylene",
        "is_correct": false
      },
      {
        "option_id": "B",
        "text": "A: ethane, B: bromoethane, C: ethylene",
        "is_correct": false
      },
      {
        "option_id": "C",
        "text": "A: ethylene, B: bromoethane, C: acetylene",
        "is_correct": false
      },
      {
        "option_id": "D",
        "text": "A: ethylene, B: 1,2-dibromoethane, C: acetylene",
        "is_correct": true
      }
    ],
    "feedback": {
      "context": "Tracing reactions in a multi-step roadmap sequence.",
      "process": "Verify transformations: A: ethylene, B: 1,2-dibromoethane, C: acetylene.",
      "result": "The labels correspond to A: ethylene, B: 1,2-dibromoethane, C: acetylene."
    }
  }
];
