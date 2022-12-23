// const form = document.querySelector('form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) { 
//     event.preventDefault();

//     const email = event.currentTarget.elements.email.value;
//     const password = event.currentTarget.elements.password.value;

//     if (!email || !password) { 
//         alert("Please fill all fields");  
//     }

//     const value = {
//          email,
//          password
//     }

//     console.log(value);
     
//    event.currentTarget.reset();
    
// }


const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (!email.value || !password.value) {
    return alert("Please fill in all the fields!");
  }
const value = {
         email: email.value,
         password: password.value
    }

    console.log(value);
  
  // const formdata = new FormData(event.currentTarget);
  // formdata.forEach((value, name) => {
  //   console.log(name);
  //   console.log(value);
      
  // })
     
  
  event.currentTarget.reset();
}

