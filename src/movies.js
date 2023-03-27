import { addBookmark } from "./bookmarked.js";

let moviesContainer = document.querySelector(".movies-items");
let json_url = "data.json";
const bookmarkedMovies = JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
fetch(json_url).then(Response => Response.json())
.then((data) => {
    let movies= '';
        for(let i = 0; i < data.length; i++){
            if(data[i].category==='Movie'){
            movies +=
            '<div class="movie">' 
            +'<div class="movie-image">'  
            +'<img class="large" src="'+data[i].thumbnail.regular.large+'"/>'
            +'<img class="medium" src="'+data[i].thumbnail.regular.medium+'"/>'
            +'<img class="small" src="'+data[i].thumbnail.regular.small+'"/>'
            +'</div>' 
            +'<div class="movie-info">' 
            +'<div class="about">' 
            +data[i].year 
            +'<div class="oval">'
            +'</div>' 
            +'<i class="category" style="background:url('+data[i].logo+')">'
            +'</i>' 
            + data[i].category 
            +'<div class="oval">'
            +'</div>' 
            + data[i].rating 
            +'</div>'
            +'<h3 class= "movie-title">' 
            +data[i].title
            +'</h3>'
            +'</div>'
            +'<div class="bookmark-btn">'
            +`<svg class="${bookmarkedMovies.includes(data[i].title) ? "keep" : ""}" width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"/></svg>` 
            +'</div>'
            +'<div class="play">'
            +'<div class="play-btn"></div>'
            +'<p>Play</p>'
            +'</div>'
            +'<div class="overlay"></div>'
            +'</div>' ;
            }
        moviesContainer.innerHTML = movies;    
        }

        const recommendedMovies = document.querySelectorAll(".movie");

        recommendedMovies.forEach(movie => {
            const overlay = movie.querySelector(".overlay");
            const play = movie.querySelector(".play");
            const bookmark = movie.querySelector(".bookmark-btn");
            const button = movie.querySelector("svg");
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
                }
                else{
                    button.classList.add('keep')
                }
            });
        })
        addBookmark();

        const btn = document.querySelector('.light-dark');
        const screenSwitch = document.querySelector('.switch-mode');
        const body = document.querySelector("body");
        const searchIcon = document.querySelector(".search");
        const nav = document.querySelector("nav");
        const links = document.querySelectorAll("a");
        const recommendedContainer = document.querySelector(".movies-items");
        const ovals = document.querySelectorAll(".oval");
        const categories = document.querySelectorAll("i");
        const info = recommendedContainer.querySelectorAll(".about")
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
        screenSwitch.addEventListener('click', lightMode);
    
    function lightMode() {
            let theme;
            if(btn.classList.contains('triggered')){
                btn.classList.remove('triggered');
                body.classList.remove('light');
                screenSwitch.classList.remove('light');
                searchIcon.classList.remove('lightmode');
                nav.classList.remove("light");
                links.forEach(link => link.classList.remove('lightlinks'));
                profile.classList.remove('border');
                content.classList.remove('light-background');
                    modalOptions.forEach(option => option.classList.remove("light-background"));
                categories.forEach(category => category.classList.remove('light-colour'));
                ovals.forEach(oval => oval.classList.remove("light-theme"));
                info.forEach(about => about.classList.remove("light-text"));
                theme = 'DARK';
            }else{
                btn.classList.add('triggered');
                body.classList.add('light');
                screenSwitch.classList.add('light');
                searchIcon.classList.add('lightmode');
                nav.classList.add('light');
                links.forEach(link => link.classList.add('lightlinks'));
                profile.classList.add('border');
                content.classList.add('light-background');
        modalOptions.forEach(option => option.classList.add("light-background"));
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
                nav.classList.add('light');
                content.classList.add('light-background');
        modalOptions.forEach(option => option.classList.add("light-background"));
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
                nav.classList.remove("light");
                content.classList.remove('light-background');
                    modalOptions.forEach(option => option.classList.remove("light-background"));
                links.forEach(link => link.classList.remove('lightlinks'));
                profile.classList.remove('border');
                categories.forEach(category => category.classList.remove('light-colour'));
                ovals.forEach(oval => oval.classList.remove("light-theme"));
                info.forEach(about => about.classList.remove("light-text"));
    }
    });
    
