import { addBookmark } from "./bookmarked.js";

let seriesContainer = document.querySelector(".series-items");

let json_url = "data.json";

fetch(json_url)
  .then((Response) => Response.json())
  .then((data) => {
    let series = "";

    for (let i = 0; i < data.length; i++) {
      if (data[i].category === "TV Series") {
        series +=
          '<div class="series">' +
          '<div class="series-image" >' +
          '<img class="large" src="' +
          data[i].thumbnail.regular.large +
          '"/>' +
          '<img class="medium" src="' +
          data[i].thumbnail.regular.medium +
          '"/>' +
          '<img class="small" src="' +
          data[i].thumbnail.regular.small +
          '"/>' +
          "</div>" +
          '<div class="series-info">' +
          '<div class="about">' +
          data[i].year +
          '<div class="oval">' +
          "</div>" +
          '<i class="category" style="background:url(' +
          data[i].logo +
          ')">' +
          "</i>" +
          data[i].category +
          '<div class="oval">' +
          "</div>" +
          data[i].rating +
          "</div>" +
          '<h3 class= "series-title">' +
          data[i].title +
          "</h3>" +
          "</div>" +
          '<div class="bookmark-btn">' +
          '<svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"/></svg>' +
          "</div>" +
          '<div class="play">' +
          '<div class="play-btn"></div>' +
          "<p>Play</p>" +
          "</div>" +
          '<div class="overlay"></div>'+
          "</div>";
      }
      seriesContainer.innerHTML = series;
    }

    const bookmarkButton = document.querySelector(".bookmark-btn");
      window.addEventListener("load", () => {
      const bookmarkState = localStorage.getItem("bookmarkState");
      if (bookmarkState === "kept") {
          bookmarkButton.classList.add("keep");
      }
      });
    const contentContainer = document.querySelectorAll(".series");

    contentContainer.forEach((series) => {
            const overlay = series.querySelector(".overlay");
            const play = series.querySelector(".play");
            const bookmark = series.querySelector(".bookmark-btn");
            const about = series.querySelector(".series-info");
            const button = series.querySelector("svg");
            overlay.addEventListener('mouseover', () => {
                overlay.classList.add('dark')
                play.classList.add('show')
            });
            overlay.addEventListener('mouseout', () => {
                overlay.classList.remove('dark')
                play.classList.remove('show')
            });
            play.addEventListener('mouseover', () => {
                overlay.classList.add('dark')
                play.classList.add('show')
            });
            bookmark.addEventListener('mouseover', () => {
                button.classList.add('choice')
            });
            bookmark.addEventListener('mouseout', () => {
                button.classList.remove('choice')
            });
            bookmark.addEventListener('click', ()=>{
                if(button.classList.contains('keep')){
                    button.classList.remove('keep')
                    localStorage.setItem("bookmarkState", "not-kept");
                }
                else{
                    button.classList.add('keep')
                    localStorage.setItem("bookmarkState", "kept");
                }
            });
            about.addEventListener('mouseover', () => {
                overlay.classList.add('dark')
                play.classList.add('show')
            });
    });

    const btn = document.querySelector('.light-dark');
    const screenSwitch = document.querySelector('.switch-mode');
    const body = document.querySelector("body");
    const searchIcon = document.querySelector(".search");
    const searchQuery = document.querySelector("input");
    const searchResults = document.querySelector("ul");  
    const nav = document.querySelector("nav");
    const links = document.querySelectorAll("a");
    const recommendedContainer = document.querySelector(".series-items");
    const ovals = document.querySelectorAll(".oval");
    const categories = document.querySelectorAll("i");
    const info = recommendedContainer.querySelectorAll(".about")
    const profile = document.querySelector(".user-avatar");
    screenSwitch.addEventListener('click', lightMode);

function lightMode() {
        let theme;
        if(btn.classList.contains('triggered')){
            btn.classList.remove('triggered');
            body.classList.remove('light');
            screenSwitch.classList.remove('light');
            searchIcon.classList.remove('lightmode');
            searchResults.classList.remove('light-theme');
            searchQuery.classList.remove('light');
            nav.classList.remove("light");
            links.forEach(link => link.classList.remove('lightlinks'));
            profile.classList.remove('border');
            categories.forEach(category => category.classList.remove('light-colour'));
            ovals.forEach(oval => oval.classList.remove("light-theme"));
            info.forEach(about => about.classList.remove("light-text"));
            theme = 'DARK';
        }else{
            btn.classList.add('triggered');
            body.classList.add('light');
            screenSwitch.classList.add('light');
            searchIcon.classList.add('lightmode');
            searchResults.classList.add('light-theme');
            searchQuery.classList.add('light');
            nav.classList.add('light');
            links.forEach(link => link.classList.add('lightlinks'));
            profile.classList.add('border');
            categories.forEach(category => category.classList.add('light-colour'));
            ovals.forEach(oval => oval.classList.add("light-theme"));
            info.forEach(about => about.classList.add("light-text"));
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
            searchIcon.classList.add('lightmode');
            searchResults.classList.add('light-theme');
            searchQuery.classList.add('light');
            nav.classList.add('light');
            links.forEach(link => link.classList.add('lightlinks'));
            profile.classList.add('border');
            categories.forEach(category => category.classList.add('light-colour'));
            ovals.forEach(oval => oval.classList.add("light-theme"));
            info.forEach(about => about.classList.add("light-text"));

}else if((getTheme === 'DARK')){
    btn.classList.remove('triggered');
            body.classList.remove('light');
            screenSwitch.classList.remove('light');
            searchIcon.classList.remove('lightmode');
            searchResults.classList.remove('light-theme');
            searchQuery.classList.remove('light');
            nav.classList.remove("light");
            links.forEach(link => link.classList.remove('lightlinks'));
            profile.classList.remove('border');
            categories.forEach(category => category.classList.remove('light-colour'));
            ovals.forEach(oval => oval.classList.remove("light-theme"));
            info.forEach(about => about.classList.remove("light-text"));
}

    addBookmark();
  });
