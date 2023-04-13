const urlPageTitle = 'Entertainment web app'

document.addEventListener("click", (event) => {
  //pulling in, click information
  const { target } = event;
  if (!target.matches("nav a")) {
    return; 
  }
  event.preventDefault();
  urlRoute();
});

// // using the History API to manage the browser history and prevent users from accessing pages they shouldn't.
// defining an array for allowed routes
const allowedRoutes = {
  404: {
    template: "/entertainment-web-app2/src/404.html",
    title: "404 | " + urlPageTitle,
    description: "Page Not found",
  },

  home: {
    template: "/entertainment-web-app2/src/home.html",
    title: "home | " + urlPageTitle,
    description: "This is the homepage",
  },
  movies: {
    template: "/entertainment-web-app2/src/movies.html",
    title: "movies | " + urlPageTitle,
    description: "This is the moviespage",
  },
  series: {
    template: "/entertainment-web-app2/src/series.html",
    title: "series | " + urlPageTitle,
    description: "This is the moviespage",
  },
  bookmarked: {
    template: "/entertainment-web-app2/src/bookmarked.html",
    title: "bookmarked | " + urlPageTitle,
    description: "moviespage",
  },
};


// window.addEventListener('popstate', event => {
//     //getting the current URL
//     const currentUrl = window.location.pathname
//     console.log(currentUrl);
//     //checking whether the current Url is in the allowedRoutes array
//     if(!allowedRoutes.includes(currentUrl)) {
//         window.location.href = '/src/'
//     } else {

//     }
// })

// //using pushState to add a new entry to the browser history
// const newUrl = '/src/'
// window.history.pushState({ path: newUrl}, '', newUrl)




function getRoute (location) {
    let route;

    switch(true) {
        case location.includes("bookmark"):
            console.log('bookmark');
            route = allowedRoutes['bookmarked'];
            break;
        case location.includes("movies"):
            console.log('movies');
            route = allowedRoutes['movies'];
            break;
        case location.includes("home"):
            route = allowedRoutes['home'];
            break;
        case location.includes("series"):
            route = allowedRoutes['series'];
            break;
        default:
            route = allowedRoutes['404'];
            break;
    }
    return route;
}


//creating a function that is watching the URL
const urlRoute = (event) => {
  event = event || window.event; // this is saying something has being clicked on and this is where it want to go...
  event.preventDefault();
  window.history.pushState({}, "", event.target.href); //this is telling the browser which states its in
  urlLocationHandler();
};

let user = JSON.parse(localStorage.getItem('User')) || [];

//function that is grabbing the response that will be pushed out
const urlLocationHandler = async () => {
  //getting the URL path
  const location = window.location.pathname; // get the url path
	// if the path length is 0, set it to primary page route
	if (location.length === 0) {
		location = "/";
	}
    console.log(location);
	// get the route object from the urlRoutes object
    let route = getRoute(location);
    console.log(route);

    const html = await fetch(route.template).then((response) => response.text());
    console.log(html);
    if (user.length === 0) {
        window.location.href = '/entertainment-web-app2/src'
    } else {
        // document.body.innerHTML = html;
        // document.title = route.title;
        window.location.href = route.template;
    }
    // window.location.href = route.template;
	// const rowedRoutes or URL that will be equal to the location(window.location.href = '/')
    // const routes = allowedRute = allowedRoutes[location] || urlRoute["404"];
    // console.log(route);
    // getting the allooutes[(window.location.href = "/")] || allowedRoutes[404];



    // console.log(html);
};


// const urlLocationHandler = async () => {
//     const location = window.location.pathname
//     if(location.length == 0) {
//         location = '/src/'
//     }
    
//     const routes = allowedRoutes[location] || allowedRoutes[404]
//     console.log(routes)
//     const html = await fetch(routes.src).then((response) => response.text())
//     console.log(html);
//     document.querySelector('').innerHTML = html
//     document.title = routes.title
//     document.querySelector('meta[name="description"]').setAttribute("content", routes.description)
// }


window.onpopstate = urlLocationHandler;

window.route =urlRoute
urlLocationHandler();




