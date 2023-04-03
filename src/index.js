import { addBookmark } from "./bookmarked.js";

let resultsContainer = document.querySelector(".searchItems");

let trendsContainer = document.querySelector(".trending-items");
let optionsContainer = document.querySelector(".options");

let json_url = "data.json";
const bookmarkedMovies = JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
fetch(json_url).then(Response => Response.json())
.then((data) => {
    let trend= '';
    let options= '';
        for(let i = 0; i < data.length; i++){
            if(data[i].isTrending){
            trend +=
            '<div class="trend">' 
            +'<div class="trend-image">' 
            +'<div class="large" style="background:url('+data[i].thumbnail.trending.large+'); background-size:cover;"></div>'
            +'<div class="small" style="background:url('+data[i].thumbnail.trending.small+'); background-size:cover;"></div>'
            +'</div>' 
            +'<div class="trend-info">' 
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
            +'<h3 class= "trend-title">' 
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
            trendsContainer.innerHTML = trend;
        }

        for(let i = 0; i < data.length; i++){
            if(!data[i].isTrending){
                options += 
            '<div class="option">' 
            +'<div class="option-image" >' 
            +'<img class="large" src="'+data[i].thumbnail.regular.large+'"/>'
            +'<img class="medium" src="'+data[i].thumbnail.regular.medium+'"/>'
            +'<img class="small" src="'+data[i].thumbnail.regular.small+'"/>'
            +'</div>' 
            +'<div class="option-info">' 
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
            +'<h3 class= "option-title">' 
            +data[i].title
            +'</h3>'
            +'</div>'
            +'<div class="bookmark-btn">'
            +`<svg class="${bookmarkedMovies.includes(data[i].title) ? "keep" : ""}" width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"/></svg>`
            +'</div>'
            +'<div class="play-items">'
            +'<div class="play">'
            +'<div class="play-btn"></div>'
            +'<p>Play</p>'
            +'</div>'
            +'</div>'
            +'<div class="overlay"></div>'
            +'</div>';
            }
        optionsContainer.innerHTML = options;    
        }

        const trends = document.querySelectorAll(".trend");
        
        trends.forEach(trend => {
            const overlay = trend.querySelector(".overlay");
            const play = trend.querySelector(".play");
            const bookmark = trend.querySelector(".bookmark-btn");
            const about = trend.querySelector(".trend-info");
            const button = trend.querySelector("svg");
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
            about.addEventListener('mouseover', () => {
                overlay.classList.add('dark')
                play.classList.add('show')
            });
        });

    const recommended = document.querySelectorAll(".option");
        recommended.forEach(option => {
            const overlay = option.querySelector(".overlay");
            const play = option.querySelector(".play");
            const bookmark = option.querySelector(".bookmark-btn");
            const button = option.querySelector("svg");
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
        });

            const btn = document.querySelector('.light-dark');
            const screenSwitch = document.querySelector('.switch-mode');
            const body = document.querySelector("body");
            const searchIcon = document.querySelector(".search-icon");
            const searchQuery = document.querySelector("input");
            // const searchResults = document.querySelector("ul");  
            const nav = document.querySelector("nav");
            const links = document.querySelectorAll("a");
            const recommendedContainer = document.querySelector(".options");
            const ovals = recommendedContainer.querySelectorAll(".oval");
            const categories = recommendedContainer.querySelectorAll("i");
            const info = recommendedContainer.querySelectorAll(".about")
            const profile = document.querySelector(".user-avatar");
            screenSwitch.addEventListener('click', lightMode);
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
        
        function lightMode() {
                let theme;
                if(btn.classList.contains('triggered')){
                    btn.classList.remove('triggered');
                    body.classList.remove('light');
                    screenSwitch.classList.remove('light');
                    searchIcon.classList.remove('lightmode');
                    // searchResults.classList.remove('light-theme');
                    searchQuery.classList.remove('light');
                    searchQuery.classList.remove('lmode');
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
                    searchQuery.classList.add('light');
                    searchQuery.classList.add('lmode');
                    // searchResults.classList.add('light-theme');
                    nav.classList.add('light');
                    links.forEach(link => link.classList.add('lightlinks'));
                    profile.classList.add('border');
                    modalOptions.forEach(option => option.classList.add("light-background"));
                    content.classList.add('light-background');
                    categories.forEach(category => category.classList.add('light-colour'));
                    ovals.forEach(oval => oval.classList.add("light-theme"));
                    info.forEach(about => about.classList.add("light-text"));
                    theme = 'LIGHT';
                }
                localStorage.setItem("PageTheme", JSON.stringify(theme));
        }
            let getTheme = JSON.parse(localStorage.getItem("PageTheme"));
        // console.log(getTheme, "Hello");
        
        if(getTheme === 'LIGHT'){
            btn.classList.add('triggered');
                    body.classList.add('light');
                    screenSwitch.classList.add('light');
                    searchIcon.classList.add('lightmode');
                    searchQuery.classList.add('light');
                    searchQuery.classList.add('lmode');
                    // searchResults.classList.add('light-theme');
                    nav.classList.add('light');
                    links.forEach(link => link.classList.add('lightlinks'));
                    profile.classList.add('border');
                    modalOptions.forEach(option => option.classList.add("light-background"));
                    content.classList.add('light-background');
                    categories.forEach(category => category.classList.add('light-colour'));
                    ovals.forEach(oval => oval.classList.add("light-theme"));
                    info.forEach(about => about.classList.add("light-text"));
        
        }else if((getTheme === 'DARK')){
            btn.classList.remove('triggered');
                    body.classList.remove('light');
                    screenSwitch.classList.remove('light');
                    searchIcon.classList.remove('lightmode');
                    searchQuery.classList.remove('light');
                    searchQuery.classList.remove('lmode');
                    // searchResults.classList.remove('light-theme');
                    nav.classList.remove("light");
                    links.forEach(link => link.classList.remove('lightlinks'));
                    profile.classList.remove('border');
                    modalOptions.forEach(option => option.classList.remove("light-background"));
                    content.classList.remove('light-background');
                    categories.forEach(category => category.classList.remove('light-colour'));
                    ovals.forEach(oval => oval.classList.remove("light-theme"));
                    info.forEach(about => about.classList.remove("light-text"));
        }
    addBookmark();
});

    









//     const resultsContainer = document.querySelector(".searchItems");
// console.log(resultsContainer);

// const input = document.querySelector('input');
// input.addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         window.location.href = "searchResults.html"
//     console.log('Enter key was pressed');
//     }








// let results = "";
    // input.addEventListener('keyup', () => {
    //     const queryValue = input.value;
    //     console.log(queryValue);
    //     Results(queryValue);
    //     })

    // function Results(query){
    //     data.forEach(element => {
    //         if(element.title.toLowerCase().includes(query.toLowerCase())){
    //             window.location.href = "searchResults.html"
    //             results +=  '<li>'
    //                         +'<img class="search-item-img" src="'+element.thumbnail.regular.large+'"/>'
    //                         +'<div class="search-item-info">'
    //                         +'<div class="search-item-title">'
    //                         +element.title
    //                         +'</div>'
    //                         +'<div class="search-item-year">'
    //                         +element.year
    //                         +'</div>'
    //                         +'</div>'
    //                         +'</li>';
    //                     }
    //                     resultsContainer.innerHTML = results;
    //             })
    //         }
