let shows = JSON.parse(localStorage.getItem("showDb"));

let bookmarkedMoviesContainer = document.querySelector("#bookmarked-movies");

const bookmarkedMovies = shows
  .filter((show) => show.isBookmarked && show.category === "Movie")
  .map((regular) => {
    let option = document.createElement("div");
    option.classList.add("regular");
    option.classList.add("show");

    let optionImage = document.createElement("div");
    optionImage.classList.add("regular-image");

    let large = document.createElement("div");
    large.classList.add("large");
    large.style.background = `url(${regular.thumbnail.regular.large})`;
    large.style.backgroundSize = "cover";
    optionImage.appendChild(large);

    let medium = document.createElement("div");
    medium.classList.add("medium");
    medium.style.background = `url(${regular.thumbnail.regular.medium})`;
    medium.style.backgroundSize = "cover";
    optionImage.appendChild(medium);
    option.appendChild(optionImage);

    let small = document.createElement("div");
    small.classList.add("small");
    small.style.background = `url(${regular.thumbnail.regular.small})`;
    small.style.backgroundSize = "cover";
    optionImage.appendChild(small);
    option.appendChild(optionImage);

    let optionInfo = document.createElement("div");
    optionInfo.classList.add("regular-info");

    let optionTitle = document.createElement("h3");
    optionTitle.classList.add("regular-title");
    optionTitle.innerHTML = regular.title;

    optionInfo.appendChild(optionTitle);

    let about = document.createElement("div");
    about.classList.add("about");
    about.innerHTML = `
  ${regular.year}
  <div class="oval"></div>
  <i class="category" style="background:url(${regular.logo})"></i>
  ${regular.category}
  <div class="oval"></div>
  ${regular.rating}
  `;
    optionInfo.appendChild(about);

    option.appendChild(optionInfo);

    let bookmarkBtn = document.createElement("div");
    bookmarkBtn.classList.add("bookmark-btn");

    let bookmarkFull = document.createElement("img");
    bookmarkFull.setAttribute("src", "/src/assets/icon-bookmark-full.svg");
    bookmarkFull.classList.add("full");
    bookmarkBtn.appendChild(bookmarkFull);

    option.appendChild(bookmarkBtn);

    let play = document.createElement("div");
    play.classList.add("play");

    let playBtn = document.createElement("div");
    playBtn.classList.add("play-btn");
    play.appendChild(playBtn);

    let playText = document.createElement("p");
    playText.textContent = "Play";
    play.appendChild(playText);

    option.appendChild(play);

    let overlay = document.createElement("div");
    overlay.classList.add("overlay");
    option.appendChild(overlay);

    bookmarkedMoviesContainer.appendChild(option);
    document.addEventListener("DOMContentLoaded", (evt) => {
      fetchBookmarks();
    });

    // Bookmarked Series

    let bookmarkedSeriesContainer =
      document.querySelector("#bookmarked-series");
    console.log(bookmarkedSeriesContainer);

    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
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
        profile.addEventListener("click", () => {
          wayOut.classList.add("wayout");
        });
        closeModal.addEventListener("click", () => {
          wayOut.classList.remove("wayout");
        });
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
            searchQuery.classList.remove("lmode");
            nav.classList.remove("light");
            content.classList.remove("light-background");
            modalOptions.forEach((option) =>
              option.classList.remove("light-background")
            );
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
            searchQuery.classList.add("lmode");
            nav.classList.add("light");
            content.classList.add("light-background");
            modalOptions.forEach((option) =>
              option.classList.add("light-background")
            );
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
        // console.log(getTheme, "Hello");

        if (getTheme === "LIGHT") {
          btn.classList.add("triggered");
          body.classList.add("light");
          screenSwitch.classList.add("light");
          searchIcon.classList.add("lightmode");
          searchResults.classList.add("light-theme");
          searchQuery.classList.add("light");
          searchQuery.classList.add("lmode");
          nav.classList.add("light");
          content.classList.add("light-background");
          modalOptions.forEach((option) =>
            option.classList.add("light-background")
          );
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
          searchQuery.classList.remove("lmode");
          nav.classList.remove("light");
          content.classList.remove("light-background");
          modalOptions.forEach((option) =>
            option.classList.remove("light-background")
          );
          links.forEach((link) => link.classList.remove("lightlinks"));
          ovals.forEach((oval) => oval.classList.remove("light-theme"));
          profile.classList.remove("border");
          Array.from(categories).forEach((category) =>
            category.classList.remove("light-colour")
          );
        }
      });
  });
