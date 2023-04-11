document.addEventListener("click", (event) => {
  //pulling in, click information
  const { target } = event;
  if (!target.matches("nav a")) {
    return;
  }
  event.preventDefault();
  urlRoute();
});

// defining an array for allowed routes
const allowedRoutes = {
  404: {
    template: "/src/404.html",
    title: "",
    description: " ",
  },
  home: {
    template: "/src/home.html",
    title: "",
    description: "",
  },
  movies: {
    template: "/src/movies.html",
    title: "",
    description: "",
  },
  series: {
    template: "/src/series.html",
    title: "",
    description: "",
  },
  bookmarked: {
    template: "/src/bookmarked.html",
    title: "",
    description: "",
  },
};

//creating a function that is watching the URL
const urlRoute = (event) => {
  event = event || window.event; // this is saying something has being clicked on and this is where it want to go...
  event.preventDefault();
  window.history.pushState({}, "", event.target.href); //this is telling the browser which states its in
  urlLocationHandler();
};

// function that is grabbing the response that will be pushed out
const urlLocationHandler = async () => {
  //getting the URL path
  const currentUrl = window.location.pathname;
  if (!allowedRoutes.includes(currentUrl)) {
    window.location.href = "/";
  }

  // getting the allowedRoutes or URL that will be equal to the location(window.location.href = '/')
  const routes =
    allowedRoutes[(window.location.href = "/")] || allowedRoutes[404];
  const html = await fetch(routes.src).then((response) => {
    response.text();
    document.querySelector("").innerHTML = html;
  });
};

urlLocationHandler();

// const urlLocationHandler = async () => {
//      const location = window.location.pathname
//      if(location.length == 0) {
//         location = '/src/'
//      }
// }

// // using the History API to manage the browser history and prevent users from accessing pages they shouldn't.

// // defining an array for allowed routes
// const allowedRoutes = [
//     '/login',
//     '/signup',
//     '/index'
// ]

// window.addEventListener('popstate', event => {
//     //getting the current URL
//     const currentUrl = window.location.pathname

//     //checking whether the current Url is in the allowedRoutes array
//     if(!allowedRoutes.includes(currentUrl)) {
//         window.location.href = '/login'
//     }
// })

// //using pushState to add a new entry to the browser history
// const newUrl = '/dashboard'
// window.history.pushState({ path: newUrl}, '', newUrl)
