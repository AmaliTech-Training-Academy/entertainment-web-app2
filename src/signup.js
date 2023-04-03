//Initializing the inputs
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
//function for the submit button when its clicked

let userStorage = JSON.parse(localStorage.getItem("User"));


const getUserByEmail = (email) => {
  return userStorage.find((user) => user.email === email);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  validateInputs(); //calling the validate Input in the eventListener function
  if (!form.classList.contains("invalid")) {
    const userID = generateUserID();

    //storing user data in localStorage
    let userDetails = {
      email: email.value,
      password: password.value,
      userID: userID,
    };

    console.log(userStorage);
    if (userStorage) {
      const user = getUserByEmail(userDetails.email);
      console.log("user", user);
      if (user) {
        alert("User ID already exists");
        return;
      } else {
        userStorage.push(userDetails);
        localStorage.setItem("User", JSON.stringify(userStorage));
      }
    } else {
      // is empty
      localStorage.setItem("User", JSON.stringify([userDetails]));
    }
    sendConfirmationEmail(userID);
    alert("Confirmation email sent");
    window.location.replace("login.html");
    // } else {
    //   console.log(userDetails);
    //   localStorage.setItem("User", JSON.stringify([].push(userDetails)));
    // }
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
    Body: `We sent you a confirmation email ID  ${userID}`,
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
//   const us = JSON.parse(localStorage.getItem('users') || '{}');
//   userDetails[email] = { email, password };
//   localStorage.setItem('users', JSON.stringify(userDetails));
// }

const btn = document.querySelector('.light-dark');
const screenSwitch = document.querySelector('.switch-mode');
const body = document.querySelector("body");
screenSwitch.addEventListener('click', lightMode);

function lightMode() {
  let theme;
  if(btn.classList.contains('triggered')){
      btn.classList.remove('triggered');
      body.classList.remove('light');
      screenSwitch.classList.remove('light');
      // searchIcon.classList.remove('lightmode');
      // searchResults.classList.remove('light-theme');
      // searchQuery.classList.remove('light');
      // nav.classList.remove("light");
      // links.forEach(link => link.classList.remove('lightlinks'));
      // profile.classList.remove('border');
      // content.classList.remove('light-background');
      // modalOptions.forEach(option => option.classList.remove("light-background"));
      // categories.forEach(category => category.classList.remove('light-colour'));
      // ovals.forEach(oval => oval.classList.remove("light-theme"));
      // info.forEach(about => about.classList.remove("light-text"));
      theme = 'DARK';
  }else{
      btn.classList.add('triggered');
      body.classList.add('light');
      screenSwitch.classList.add('light');
      // searchIcon.classList.add('lightmode');
      // searchQuery.classList.add('light');
      // searchResults.classList.add('light-theme');
      // nav.classList.add('light');
      // links.forEach(link => link.classList.add('lightlinks'));
      // profile.classList.add('border');
      // modalOptions.forEach(option => option.classList.add("light-background"));
      // content.classList.add('light-background');
      // categories.forEach(category => category.classList.add('light-colour'));
      // ovals.forEach(oval => oval.classList.add("light-theme"));
      // info.forEach(about => about.classList.add("light-text"));
      theme = 'LIGHT';
  }
  localStorage.setItem("PageTheme", JSON.stringify(theme));
}
let getTheme = JSON.parse(localStorage.getItem("PageTheme"));
console.log(getTheme, "Hello");

if(getTheme === 'LIGHT'){
btn.classList.add('triggered');
      body.classList.add('light');
      screenSwitch.classList.add('light');
      // searchIcon.classList.add('lightmode');
      // searchQuery.classList.add('light');
      // searchResults.classList.add('light-theme');
      // nav.classList.add('light');
      // links.forEach(link => link.classList.add('lightlinks'));
      // profile.classList.add('border');
      // modalOptions.forEach(option => option.classList.add("light-background"));
      // content.classList.add('light-background');
      // categories.forEach(category => category.classList.add('light-colour'));
      // ovals.forEach(oval => oval.classList.add("light-theme"));
      // info.forEach(about => about.classList.add("light-text"));

}else if((getTheme === 'DARK')){
btn.classList.remove('triggered');
      body.classList.remove('light');
      screenSwitch.classList.remove('light');
      // searchIcon.classList.remove('lightmode');
      // searchQuery.classList.remove('light');
      // searchResults.classList.remove('light-theme');
      // nav.classList.remove("light");
      // links.forEach(link => link.classList.remove('lightlinks'));
      // profile.classList.remove('border');
      // modalOptions.forEach(option => option.classList.remove("light-background"));
      // content.classList.remove('light-background');
      // categories.forEach(category => category.classList.remove('light-colour'));
      // ovals.forEach(oval => oval.classList.remove("light-theme"));
      // info.forEach(about => about.classList.remove("light-text"));
}
