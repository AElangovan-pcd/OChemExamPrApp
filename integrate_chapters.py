import os
import re

def main():
    workspace_dir = r"C:\Users\easam\Documents\Gemini\OChemExamPrApp"
    questions_dir = os.path.join(workspace_dir, "questions")
    
    # 1. Scan questions/ directory for chapter files
    files = os.listdir(questions_dir)
    chapter_files = []
    for f in files:
        m = re.match(r"chapter(\d+)\.js", f)
        if m:
            chapter_files.append((int(m.group(1)), f))
            
    # Sort numerically
    chapter_files.sort()
    
    print(f"Detected chapters: {[num for num, _ in chapter_files]}")

    # 2. Update index.html
    index_path = os.path.join(workspace_dir, "index.html")
    with open(index_path, 'r', encoding='utf-8') as f:
        index_content = f.read()

    # Generate script tags
    script_tags = []
    for num, filename in chapter_files:
        script_tags.append(f'  <script src="questions/{filename}"></script>')
    script_block = "\n".join(script_tags)

    # Replace block between "<!-- Load Data and Main Script -->" and "<script src="questions-data.js"></script>"
    pattern_index = r"(<!-- Load Data and Main Script -->\s*\n)(.*?)(\s*<script src=\"questions-data\.js\"></script>)"
    new_index_content, count = re.subn(pattern_index, rf"\1{script_block}\3", index_content, flags=re.DOTALL)
    
    if count > 0:
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(new_index_content)
        print("Successfully updated index.html script tags.")
    else:
        print("Error: Could not find script block in index.html.")

    # 3. Update app.js
    app_path = os.path.join(workspace_dir, "app.js")
    with open(app_path, 'r', encoding='utf-8') as f:
        app_content = f.read()

    # Generate merge block
    merge_blocks = []
    for num, _ in chapter_files:
        block = f"  if (typeof CHAPTER_{num}_QUESTIONS !== 'undefined') {{\n    state.questions = [...state.questions, ...CHAPTER_{num}_QUESTIONS];\n  }}"
        merge_blocks.append(block)
    merge_block_str = "\n".join(merge_blocks)

    # Replace block from the first "if (typeof CHAPTER_1_QUESTIONS" to the line before "// Initialize Smiles Drawer"
    pattern_app = r"(// Load Default Questions.*?\n)(.*?)(?=\s*// Initialize Smiles Drawer)"
    # We want to keep the load default questions block, which is:
    # if (typeof OCHEM_QUESTIONS !== 'undefined') { state.questions = [...OCHEM_QUESTIONS]; }
    # So let's write a regex that matches from if (typeof CHAPTER_1_QUESTIONS) to // Initialize Smiles Drawer
    pattern_app_v2 = r"(if \(typeof OCHEM_QUESTIONS !== 'neutral' && typeof OCHEM_QUESTIONS !== 'undefined'\) \{.*?\n\s*\}|if \(typeof OCHEM_QUESTIONS !== 'undefined'\) \{\s*\n\s*state\.questions = \[\.\.\.OCHEM_QUESTIONS\];\s*\n\s*\})(\s*\n)(.*?)(\s*// Initialize Smiles Drawer)"
    
    # Let's do a simpler replacement: find the exact stretch between "state.questions = [...OCHEM_QUESTIONS];\n  }" and "// Initialize Smiles Drawer"
    # Wait, the code in app.js lines 36-38:
    #   if (typeof OCHEM_QUESTIONS !== 'undefined') {
    #     state.questions = [...OCHEM_QUESTIONS];
    #   }
    pattern_app_v3 = r"(state\.questions = \[\.\.\.OCHEM_QUESTIONS\];\s*\n\s*\})(\s*\n)(.*?)(\s*// Initialize Smiles Drawer)"
    new_app_content, count_app = re.subn(pattern_app_v3, rf"\1\2{merge_block_str}\n\4", app_content, flags=re.DOTALL)

    if count_app > 0:
        with open(app_path, 'w', encoding='utf-8') as f:
            f.write(new_app_content)
        print("Successfully updated app.js question merge logic.")
    else:
        print("Error: Could not find merge block in app.js.")

if __name__ == "__main__":
    main()
