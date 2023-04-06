const form2 = document.getElementById("form2-login");

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
  // Check if the user's input email and password match the stored credentials
  if (user) {
    if (user.password === userDetails.password) {
      alert("Login successful");
      // Authentication successful
      window.location.href = "index.html";
    } else {
      // Authentication failed
      const error = document.getElementsByClassName("error");
      error.innerHTML = "Incorrect email or password";
      alert("Incorrect email or password");
    }
  }
});

const load = async () => {
  throw
}

const btn = document.querySelector(".light-dark");
const screenSwitch = document.querySelector(".switch-mode");
const body = document.querySelector("body");
screenSwitch.addEventListener("click", lightMode);

function lightMode() {
  let theme;
  if (btn.classList.contains("triggered")) {
    btn.classList.remove("triggered");
    body.classList.remove("light");
    screenSwitch.classList.remove("light");
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
    theme = "DARK";
  } else {
    btn.classList.add("triggered");
    body.classList.add("light");
    screenSwitch.classList.add("light");
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
    theme = "LIGHT";
  }
  localStorage.setItem("PageTheme", JSON.stringify(theme));
}
let getTheme = JSON.parse(localStorage.getItem("PageTheme"));
console.log(getTheme, "Hello");

if (getTheme === "LIGHT") {
  btn.classList.add("triggered");
  body.classList.add("light");
  screenSwitch.classList.add("light");
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
} else if (getTheme === "DARK") {
  btn.classList.remove("triggered");
  body.classList.remove("light");
  screenSwitch.classList.remove("light");
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
