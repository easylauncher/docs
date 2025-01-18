console.log("Hello from GitHub Workflow!");

const mappings = [
  {
    inputId: "repo_url",
    targetText: "&lt;repo_url&gt;"
  },
  {
    inputId: "base_branch_name",
    targetText: "&lt;base_branch_name&gt;"
  }
];

// Iterate over each mapping and set up event listeners
mappings.forEach(mapping => {
  const inputElement = document.getElementById(mapping.inputId);

  if (inputElement) {
    inputElement.addEventListener("input", function () {
      const inputValue = this.value;

      console.log(`Input value: ${inputValue}`);

      // Find all elements containing the target text
      const codeElements = document.querySelectorAll(
        `.language-bash .highlight code`
      );

      codeElements.forEach(codeElement => {
        console.log("Code element: ", codeElement);

        // Retrieve the original text from the data attribute
        const originalText = codeElement.dataset.originalText || codeElement.innerHTML;

        // Save the original text if not already stored
        if (!codeElement.dataset.originalText) {
          codeElement.dataset.originalText = originalText;
        }

        // Replace the target text in the original template
        const updatedText = originalText.replace(
          new RegExp(mapping.targetText, "g"),
          inputValue || mapping.targetText
        );

        // Update the code block's inner HTML
        codeElement.innerHTML = updatedText;
      });
    });
  }
});
