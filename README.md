# Organic Chemistry Exam PrApp: Student Guide 🧪

Welcome to the **Organic Chemistry Exam PrApp**! This interactive, premium web application is designed to help you prepare for standardized exams (such as the ACS Organic Chemistry exam) by practicing problems, visualizing structures, and taking timed mock exams.

---

## 🌟 Key Features

The platform operates in two distinct modes, accessible via the top switcher buttons:
1. **Practice Mode**: Focus on learning, with immediate feedback, detailed mechanism breakdowns, and topic-specific filtering.
2. **Mock Exam Mode**: Test your readiness in a simulated test environment that replicates official exam conditions.

---

## 📖 How to Use the App

### 1. Getting Started
* The application runs entirely in your web browser.
* Double-click `index.html` to open it, or run a local dev server (e.g., `npm run dev` or `http-server`) to start learning.
* All data (statistics, history) is saved locally in your browser's memory (`localStorage`), so your progress is preserved across sessions on the same machine.

---

### 2. Practice Mode (Self-Paced Study)
Designed for chapter-by-chapter mastery:
* **Study by Topic**: Use the **Study Topics** panel on the left sidebar to select a specific chapter or view "All Topics."
* **Immediate Explanations**: After choosing an answer and clicking **Submit Answer**, you will see whether you were correct, alongside three detailed tabs:
  * 📝 **Context Understanding**: Core concepts and principles behind the question.
  * 🔀 **Pathway & Mechanism**: A step-by-step description of electron-flow, intermediate states, and reaction coordinates.
  * 🏆 **Key Result**: The final chemical conclusion and main takeaway.
* **Track Your Performance**: The left panel shows your running count of correct answers, total attempted questions, and overall accuracy. You can clear this anytime using **Reset Statistics**.

---

### 3. Mock Exam Mode (Timed ACS Simulation)
Replicates the actual standardized exam conditions:
* **Exam Structure**: Consists of **70 multiple-choice questions** drawn across all chapters:
  * 4 questions balanced from each of Chapters 1 to 17.
  * 2 advanced spectroscopy questions from Chapter 18 (incorporating actual compound spectra).
* **Timing**: You have a strict countdown of **110 minutes** (replicates standard ACS pacing). If the timer runs out, the exam auto-submits.
* **No Immediate Feedback**: Correct answers and explanations are hidden during the exam so you can focus.
* **Question Map Grid**: The left sidebar renders a 70-node navigation map. Colors indicate status:
  * **Grey**: Unvisited questions.
  * **Blue Border**: The question you are currently viewing.
  * **Solid Blue**: Questions you have already answered.
  * **Yellow/Amber**: Questions you have **Flagged** to return to later.
* **Review Panel & Diagnostics**: Upon submitting, you will receive:
  * Your final score and accuracy percentage (60% is a passing score).
  * A detailed breakdown of your performance by topic (e.g., *Nomenclature, Stereochemistry, Thermodynamics*).
  * An interactive grid where you can click any question to review your answer, see the correct choice, and read the full feedback and mechanism explanations.
* **Attempt History**: Your scores and durations are saved in the database history at the bottom of the Mock Exam homepage. You can click **Review** on any past attempt to re-examine all 70 questions and explanations.

---

## 🛠️ Specialized Technical Elements

* **2D Molecular Structures**: Structures are rendered dynamically using **SMILES** notation, allowing you to zoom and hover over molecules to examine functional groups and stereocenters.
* **Spectroscopy Panel**: Chapter 18 questions provide real-world spectra (IR, $^1\text{H}$ decoupled $^{13}\text{C}$ NMR, $^1\text{H}$ NMR, mass spectrometry) to help you practice structural elucidation.
* **Chemical Formulas**: Formulas and mathematical expressions are rendered clearly using $\text{\KaTeX}$.

---

## 📤 Importing Custom Questions

If you or your instructor have custom question sets in JSON format:
1. Click the **Import Questions** button in the top right.
2. Paste the JSON question array (following the schema shown in the input box).
3. Click **Parse & Load Questions** to add them to your practice pool.

Good luck with your studies! 🎓🔬
