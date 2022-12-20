const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const outputText = document.querySelector("#name-output").textContent;
 

textInput.addEventListener("input", onInputHandler);

function onInputHandler(event) {
    output.textContent = event.currentTarget.value;
    if (!textInput.value) {
        output.textContent = outputText;
     }

 }


    