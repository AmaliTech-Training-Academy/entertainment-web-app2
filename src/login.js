const form2 = document.getElementById("form2-login");

 //storing user data in localStorage
//  let userDetails = {
//     email: email.value,
//     password: password.value,
//   };

//   localStorage.setItem("User", JSON.stringify(userDetails));
//   if(localStorage.getItem(email.value && password.value == userID)){
//     alert('User ID already exists')
//   }

form2.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

//   if (email && password == userDetails) {
    // Make an API call or retrieve user data from a database
    const userDetails = {
      email: email,
      password: password,
    };

    // Check if the user's input email and password match the stored credentials
    if (email === userDetails.email && password === userDetails.password) {
      // Authentication successful
      window.location.href = "index.html";
      alert("Login successful");
    } else {
      // Authentication failed
      const error = document.getElementsByClassName("errorMessage");
      error.innerHTML = "Incorrect email or password";
    }
//   }
});
