
let moviesContainer = document.querySelector(".movies-items");

let json_url = "data.json";

fetch(json_url).then(Response => Response.json())
.then((data) => {
    let movies= '';
        for(i = 0; i < data.length; i++){
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
            +'<span style="background:url('+data[i].logo+')">'
            +'</span>' 
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
            +'</div>' ;
            }
        moviesContainer.innerHTML = movies;    
        }

        const recommendedMovies = document.querySelectorAll(".movie");

        recommendedMovies.forEach(movie => {
            const img = movie.querySelector(".movie-image");
            const play = movie.querySelector(".play");
            const bookmark = movie.querySelector(".bookmark-btn");
            const button = movie.querySelector("svg");

            img.addEventListener('mouseover', () => {
                img.classList.add('dark')
                play.classList.add('show')
            });
            img.addEventListener('mouseout', () => {
                img.classList.remove('dark')
                play.classList.remove('show')
            });
            play.addEventListener('mouseover', () => {
                img.classList.add('dark')
                play.classList.add('show')
            });
            // bookmark.addEventListener('mouseover', () => {
            //     img.classList.add('dark')
            //     play.classList.add('show')
            // });
            bookmark.addEventListener('mouseover', () => {
                button.classList.add('choice')
            })
            bookmark.addEventListener('mouseout', () => {
                button.classList.remove('choice');
            });
            bookmark.addEventListener('click', () => {
                if (button.classList.contains('keep')) {
                    button.classList.remove('keep')
                }
                else{
                    button.classList.add('keep')
                }
            });
        })

    })
    
