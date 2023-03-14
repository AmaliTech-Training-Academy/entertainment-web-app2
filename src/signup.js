//Initializing the inputs
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
//function for the submit button when its clicked
// console.log(form);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("password", password.value);
  validateInputs(); //calling the validate Input in the eventListener function
  if (!form.classList.contains("invalid")) {
    const userID = generateUserID();
    // saveUserCredentials()

    // Store the user ID in local storage
    // localStorage.setItem('userID', userID);

    //storing user data in localStorage
    let userDetails = {
      email: email.value,
      password: password.value,
      userID: userID,
    };

    console.log(userDetails);
    let ls = JSON.parse(localStorage.getItem("User")) || [];
    if (ls.email === email.value) {
      alert("User ID already exists");
    } else {
      console.log("userDetails", userDetails);
      console.log(ls);
      localStorage.setItem("User", JSON.stringify(userDetails));
      sendConfirmationEmail(userID);
      alert("Confirmation email sent");
      console.log(window.location);
      window.location.replace("login.html");
      // return;
    }
  }
});

function sendConfirmationEmail(userID) {
  console.log(document.querySelector("#email").value);
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "whiy07@gmail.com",
    Password: "6C312FF56E8DBCD1FBA9C64145E0E4A5EC29",
    To: document.querySelector("#email").value,
    From: "whiy07@gmail.com",
    Subject: "Confimation Email",
    // Body: "We sent you a confirmation email",
    Body: `We sent you a confirmation email ID  ${userID}`
  });
  // .then((message) => alert('Confirmation email sent'))
  // .catch((err) => console.log(err));
}

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".errorMessage");

  form.classList.add("invalid");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".errorMessage");
  console.log(inputControl);
  form.classList.remove("invalid");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

//checking if email is valid function
const isValidEmail = (email) => {
  const repeat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return repeat.test(String(email).toLowerCase());
};

//validation input function
const validateInputs = () => {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (isValidEmail(emailValue)) {
    console.log(true);
    setSuccess(email);
  } else {
    console.log(false);
    setError(email, "Provide a valid email address");
  }

  if (passwordValue === "") {
    setError(password, "Can't be empty");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 characters");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Password doesn't matched");
  } else {
    setSuccess(password2);
  }
};

//Generating user ID
function generateUserID() {
  // const userID = Math.random().toString().slice(2, 8);
  const userID = Date.now().toString(36) + Math.random().toString(36).substr(2);
  return `${userID}`;
}


// //Saving userCredentials to localStorage (Database)
// function saveUserCredentials(email, password) {
//   const userDetails = JSON.parse(localStorage.getItem('users') || '{}');
//   userDetails[email] = { email, password };
//   localStorage.setItem('users', JSON.stringify(userDetails));
// }
