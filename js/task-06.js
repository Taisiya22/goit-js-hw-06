const validationInput = document.querySelector("#validation-input")


validationInput.addEventListener('blur', onValidationInput);

function onValidationInput(event) {
    if (event.currentTarget.value.length === +validationInput.dataset.length) {
        
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
          
    } else {
      validationInput.classList.remove('valid');
       validationInput.classList.add('invalid');
     }
       
        
    
}
