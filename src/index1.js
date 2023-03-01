//Initializing the inputs
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
//function for the submit button when its clicked
// console.log(form);
form.addEventListener("submit", (event) => {
  event.preventDefault();

  validateInputs(); //calling the validate Input in the eventListener function
  if (!form.classList.contains("invalid")) {
    window.location = "login.html";
  }

  //storing user data in localStorage
  let userDetails = {
    email: email.value,
    password: password.value,
  };
  console.log("user", userDetails);

  localStorage.setItem("User", JSON.stringify(userDetails));
  console.log(JSON.stringify(userDetails));
});


const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  form.classList.add("invalid");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
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
  // const password2Value = password2.value.trim();

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
    setError(password, "Password is required");
  } else if (passwordValue.length < 10) {
    setError(password, "Password must be at least 10 characters");
  } else {
    setSuccess(password);
  }

  // if (password2Value === "") {
  //   setError(password2, "Please confirm your password");
  // } else if (password2Value !== passwordValue) {
  //   setError(password, "Password doesn't match");
  // } else {
  //   setSuccess(password2);
  // }
};
