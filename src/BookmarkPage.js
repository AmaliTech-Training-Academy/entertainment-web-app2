import { removeBookmark } from "./removeBookmarked.js";

document.addEventListener("DOMContentLoaded", (evt) => {
  fetchBookmarks();
});

const renderMovie = (movie) => `
    <div class="movie">
        <div class="movie-image">
            <img class="large" src="${movie.thumbnail.regular.large}">
            <img class="medium" src="${movie.thumbnail.regular.medium}">
            <img class="small" src="${movie.thumbnail.regular.small}">
        </div>
        <div class="movie-info">
            <div class="about">${movie.year}
                <div class="oval"></div>
                <i class="category" style="background:url(${movie.logo})"></i>${movie.category}
                <div class="oval"></div>${movie.rating}
            </div>
        <h3 class="movie-title">${movie.title}</h3>
        </div>
        <div class="bookmark-btn"><svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"></path></svg>
        </div>
        <div class="play">
            <div class="play-btn">
            </div><p>Play</p></div>
        <div class="overlay"></div>
</div>`;

function fetchBookmarks() {
  const movieItems = document.querySelector(".movies-items");
  const seriesItems = document.querySelector(".series-items");
  //Getting bookmarks from localStorage
  const bookmarks = JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
  //Getting output id

  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      data.filter((movie) => {
        if (bookmarks.indexOf(movie.title) !== -1) {
          if (movie.category === "Movie") {
            movieItems.innerHTML += renderMovie(movie);
          } else {
            seriesItems.innerHTML += renderMovie(movie);
          }
        }
      });
      const savedShows = document.querySelectorAll(".movie");
      savedShows.forEach((show) => {
        const overlay = show.querySelector(".overlay");
        const play = show.querySelector(".play");
        const bookmark = show.querySelector(".bookmark-btn");
        // console.log(bookmark);
        const button = show.querySelector("svg");
        overlay.addEventListener("mouseover", () => {
          overlay.classList.add("dark");
          play.classList.add("show");
        });
        overlay.addEventListener("mouseout", () => {
          overlay.classList.remove("dark");
          play.classList.remove("show");
        });
        play.addEventListener("mouseover", () => {
          overlay.classList.add("dark");
          play.classList.add("show");
        });
        bookmark.addEventListener("mouseover", () => {
          button.classList.add("choice");
        });
        bookmark.addEventListener("mouseout", () => {
          button.classList.remove("choice");
        });
        bookmark.addEventListener("click", () => {
          if (button.classList.contains("keep")) {
            button.classList.remove("keep");
          } else {
            button.classList.add("keep");
          }
        });
        // location.reload();
	});
	removeBookmark();

	const btn = document.querySelector(".light-dark");
	const screenSwitch = document.querySelector(".switch-mode");
	const body = document.querySelector("body");
	const searchIcon = document.querySelector(".search");
	const searchQuery = document.querySelector("input");
	const searchResults = document.querySelector("ul");
	const nav = document.querySelector("nav");
	const links = document.querySelectorAll("a");
	const ovals = document.querySelectorAll(".oval");
	const categories = document.getElementsByTagName("i");
	const profile = document.querySelector(".user-avatar");
  const wayOut = document.querySelector(".logoutModal");
  const content = wayOut.querySelector(".content");
  const modalOptions = wayOut.querySelectorAll(".opt");
  const closeModal = wayOut.querySelector(".one");
  profile.addEventListener('click', ()=>{
      wayOut.classList.add("wayout")
            });
      closeModal.addEventListener('click', ()=>{
      wayOut.classList.remove("wayout")
            })
	screenSwitch.addEventListener("click", lightMode);

      function lightMode() {
        let theme;
        if (btn.classList.contains("triggered")) {
          btn.classList.remove("triggered");
          body.classList.remove("light");
          screenSwitch.classList.remove("light");
          searchIcon.classList.remove("lightmode");
          searchResults.classList.remove("light-theme");
          searchQuery.classList.remove("light");
          nav.classList.remove("light");
          content.classList.remove('light-background');
          modalOptions.forEach(option => option.classList.remove("light-background"));
          links.forEach((link) => link.classList.remove("lightlinks"));
          ovals.forEach((oval) => oval.classList.remove("light-theme"));
          profile.classList.remove("border");
          Array.from(categories).forEach((category) =>
            category.classList.remove("light-colour")
          );
          theme = "DARK";
        } else {
          btn.classList.add("triggered");
          body.classList.add("light");
          screenSwitch.classList.add("light");
          searchIcon.classList.add("lightmode");
          searchResults.classList.add("light-theme");
          searchQuery.classList.add("light");
          nav.classList.add("light");
          content.classList.add('light-background');
          modalOptions.forEach(option => option.classList.add("light-background"));
          links.forEach((link) => link.classList.add("lightlinks"));
          ovals.forEach((oval) => oval.classList.add("light-theme"));
          profile.classList.add("border");
          Array.from(categories).forEach((category) =>
            category.classList.add("light-colour")
          );
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
        searchIcon.classList.add("lightmode");
        searchResults.classList.add("light-theme");
        searchQuery.classList.add("light");
        nav.classList.add("light");
        content.classList.add('light-background');
        modalOptions.forEach(option => option.classList.add("light-background"));
        links.forEach((link) => link.classList.add("lightlinks"));
        ovals.forEach((oval) => oval.classList.add("light-theme"));
        profile.classList.add("border");
        Array.from(categories).forEach((category) =>
          category.classList.add("light-colour")
        );
      } else if (getTheme === "DARK") {
        btn.classList.remove("triggered");
        body.classList.remove("light");
        screenSwitch.classList.remove("light");
        searchIcon.classList.remove("lightmode");
        searchResults.classList.remove("light-theme");
        searchQuery.classList.remove("light");
        nav.classList.remove("light");
        content.classList.remove('light-background');
        modalOptions.forEach(option => option.classList.remove("light-background"));
        links.forEach((link) => link.classList.remove("lightlinks"));
        ovals.forEach((oval) => oval.classList.remove("light-theme"));
        profile.classList.remove("border");
        Array.from(categories).forEach((category) =>
          category.classList.remove("light-colour")
        );
      }
    });
}
