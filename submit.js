function customValidationJS(){
    
    const numOfConditionsInput = document.querySelector("#numOfConditions");
const generateBtn = document.querySelector("#generateBtn");
const codeOutput = document.querySelector("#codeOutput");

generateBtn.addEventListener("click", function() {
  let numOfConditions = numOfConditionsInput.value;
  let code = "";
  
  for (let i = 1; i <= numOfConditions; i++) {
    if (i === 1) {
      code += `if (condition${i}) {\n  // code to be executed\n}`;
    } else if (i < numOfConditions) {
      code += `else if (condition${i}) {\n  // code to be executed\n}`;
    } else {
      code += `else {\n  // code to be executed\n}`;
    }
  }
  
  codeOutput.textContent = code;
});

}