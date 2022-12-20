const form = document.querySelector('form');


form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) { 
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (!email || !password) { 
        alert("Please fill all fields");  
    }

    const value = {
         email,
         password
    }

    console.log(value);
    event.currentTarget.reset(); 
 
}


