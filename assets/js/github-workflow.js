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

        if (codeElement) {
          // Replace all occurrences of the target text in the current element
          codeElement.innerHTML = codeElement.innerHTML.replace(
            new RegExp(mapping.targetText, "g"),
            inputValue || mapping.targetText
          );
        }
      });
    });
  }
});
