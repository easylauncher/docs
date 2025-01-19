console.log("Hello from GitHub Workflow!");

const mappings = [
  {
    inputId: "repo_url",
    targetText: "&lt;repo_url&gt;"
  },
  {
    inputId: "base_branch_name",
    targetText: "&lt;base_branch_name&gt;"
  },
  {
    inputId: "user_name",
    targetText: "&lt;user_name&gt;"
  },
  {
    inputId: "user_email",
    targetText: "&lt;user_email&gt;"
  },
  {
    inputId: "feature_name",
    targetText: "&lt;feature_name&gt;"
  }
];
// 1. Define mappings for each placeholder


// 2. Keep a global object of all current placeholder values
const mappingValues = {
  repo_url: "",
  base_branch_name: ""
};

// 3. Identify all code elements and store original text in data-original-text
const codeElements = document.querySelectorAll(".language-bash .highlight code");
codeElements.forEach((codeElement) => {
  // Store original text only once
  if (!codeElement.dataset.originalText) {
    codeElement.dataset.originalText = codeElement.innerHTML;
  }
});

// 4. Function to re-apply *all* placeholders for *all* code elements
function reapplyPlaceholders() {
  codeElements.forEach((codeElement) => {
    // Start from the original text each time
    let updatedHTML = codeElement.dataset.originalText;

    // Replace each mapping with its current value
    mappings.forEach((mapping) => {
      const currentValue = mappingValues[mapping.inputId];
      updatedHTML = updatedHTML.replace(
        new RegExp(mapping.targetText, "g"),
        currentValue || mapping.targetText
      );
    });

    // Update the code element
    codeElement.innerHTML = updatedHTML;
  });
}

// 5. For each mapping, update the global mappingValues and re-apply
mappings.forEach((mapping) => {
  const inputElement = document.getElementById(mapping.inputId);

  if (inputElement) {
    inputElement.addEventListener("input", function () {
      // Store the new value in our global object
      mappingValues[mapping.inputId] = this.value;

      console.log(`Updated ${mapping.inputId} to: ${this.value}`);

      // Re-apply all placeholders to all code elements
      reapplyPlaceholders();
    });
  }
});
