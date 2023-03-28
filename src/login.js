const form2 = document.getElementById("form2-login");


// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector(".errorMessage");
  
//     form.classList.add("invalid");
//     errorDisplay.innerText = message;
//     inputControl.classList.add("error");
//     inputControl.classList.remove("success");
//   };
  
//   const setSuccess = (element) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector(".errorMessage");
//     console.log(inputControl);
//     form.classList.remove("invalid");
//     errorDisplay.innerText = "";
//     inputControl.classList.add("success");
//     inputControl.classList.remove("error");
//   };

const getUserByEmail = (email) => {
  return userStorage.find((user) => user.email === email);
};


const userStorage = JSON.parse(localStorage.getItem("User"));
// console.log(userStorage)

// const getUserByEmail = (email) => userStorage[email];

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

  let user = getUserByEmail(userDetails.email);

  console.log(userStorage);
  console.log(userDetails);
  // alert()
  // Check if the user's input email and password match the stored credentials
  if (user) {
    if ( user.password === userDetails.password ) {
        alert("Login successful");
      // Authentication successful
      window.location.href = "index.html";
    } else {
      // Authentication failed
      const error = document.getElementsByClassName("error");
        error.innerHTML = "Incorrect email or password";
        alert("Incorrect email or password")
    }
  }
});
