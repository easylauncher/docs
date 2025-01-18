
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
  console.log(inputElement);

  if (inputElement) {
    inputElement.addEventListener("input", function () {
      const inputValue = this.value;

      console.log(`Input value: ${inputValue}`);

      // Find the element containing the target text
      const codeElement = document.querySelector(
        `.language-bash .highlight code`
      );

      console.log("Code element: ", codeElement);

      if (codeElement) {
        // Update the target text with the input value
        codeElement.innerHTML = codeElement.innerHTML.replace(
          new RegExp(mapping.targetText, "g"),
          inputValue || mapping.targetText
        );
      }
    });
  }
});