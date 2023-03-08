// form.addEventListener('submit', (event) => {
    
    //   });

    const form2 = document.getElementById("form2-login");
    
    // login confirmation
//   function LoginConfirmation(event){
//     event.preventDefault();
  
    
//   }

  form2.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email && password) {
      // Make an API call or retrieve user data from a database
      const userDetails = {
        email: email,
        password: password,
      };
  
      // Check if the user's input email and password match the stored credentials
      if (email === userDetails.email && password === userDetails.password) {
        // Authentication successful
        window.location.href = 'index.html';
      } else {
        // Authentication failed
        const error = document.getElementsByClassName('errorMessage');
        error.innerHTML = 'Incorrect email or password';
      }
    }
    
  });
  
  