import { addBookmark } from "./bookmarked.js";
// import { removeBookmark } from "./removeBookmarked.js";

let moviesContainer = document.querySelector(".movies-items");
let json_url = "data.json";

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
            +'<svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"/></svg>' 
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
            const about = movie.querySelector(".movie-info");
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
        // removeBookmark();

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


    const resultsContainer = document.querySelector(".searchItems");


        let json_link = "data.json";
        fetch(json_link)
          .then(response => response.json())
          .then(data => {
            function searchResults(query){
                let results = "";
                data.forEach(element => {
                    if(element.title.toLowerCase().includes(query.toLowerCase())){
                        results +=  '<div class="search-item">'
                            // +'<img class="search-item-img" src="'+element.thumbnail+'"/>'
                            +'<div class="search-item-info">'
                            +'<div class="search-item-title">'
                            +element.title
                            +'</div>'
                            +'<div class="search-item-year">'
                            +element.year
                            +'</div>'
                            +'</div>'
                            +'<div class="bookmark-btn">'
                            +'<svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"/></svg>' 
                            +'</div>'
                            +'<div class="play">'
                            +'<div class="play-btn"></div>'
                            +'<p>Play</p>'
                            +'</div>'
                            +'<div class="overlay"></div>'
                            +'</div>';
            }
        })
        resultsContainer.innerHTML = results;
        
    }

    // input.addEventListener('keydown' ,function(event) {
        //     event.preventDefault();
        //     if (event.key === 'Enter') {
            //             window.location.href = "searchResults.html"
            //             const queryValue = input.value;
            //             console.log(queryValue);
            //             searchResults(queryValue);
            //     } 
            
            // });
            
            const input = document.querySelector('input');
            input.addEventListener('keyup', () => {
              resultsContainer.style.display = "grid" 
               document.querySelector(".moviesContainer").style.display = "none"; 
            //    document.querySelector(".options").style.display = "none"; 
               if (input.value === "") {
                // document.querySelector(".trending").style.display = "block"; 
               document.querySelector(".moviesContainer").style.display = "grid"; 
               resultsContainer.style.display = "none" 
               }
                searchInput = input.value;
                console.log(searchInput);

                filterResult = searchByName(searchInput);
                console.log(filterResult);

                filterList = "";
                for(i = 0; i < filterResult.length; i++){
                   filterList += 
                   '<div class="search-item">'
                   +'<img class="search-item-img" src="'+ filterResult[i].thumbnail.regular.large+ '"/>'
                //    console.log(searchValue.thumbnail);
                   +'<div class="search-item-info">'
                   +'<div class="search-item-title">'
                   +filterResult[i].title
                   +'</div>'
                   +'<div class="search-item-year">'
                   +filterResult[i].year
                   +'</div>'
                   +'</div>'
                   +'<div class="bookmark-btn">'
                  +'<svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"/></svg>' 
                  +'</div>'
                  +'<div class="play">'
                  +'<div class="play-btn"></div>'
                  +'<p>Play</p>'
                  +'</div>'
                  +'<div class="overlay"></div>'
                   +'</div>';
                }
                console.log(resultsContainer)
                resultsContainer.innerHTML = filterList;
            });


    function searchByName(title) {
                const results = [];
           for (let i = 0; i < data.length; i++) {
                  if (data[i].category=== 'Movie') {
                    results.push(data[i]);
                // return results;
                }
                console.log(results);
                }
              };
  })


// for (let i = 0; i < data.length; i++) {
//   if (data[i].title.toLowerCase().includes(title.toLowerCase())) {
//     results.push(data[i]);
//   }

            

    });
    
