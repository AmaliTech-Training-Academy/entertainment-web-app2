let moviesContainer = document.querySelector(".movies-items");



let json_url = "data.json";

fetch(json_url).then(Response => Response.json())
.then((data) => {
    let movies= '';
        for(i = 0; i < data.length; i++){
            if(data[i].category==='Movie'){
            movies +=
            '<div class="movies">' 
            +'<div class="movies-image" >'  
            +'<img class="large" src="'+data[i].thumbnail.regular.large+'"/>'
            +'<img class="medium" src="'+data[i].thumbnail.regular.medium+'"/>'
            +'<img class="small" src="'+data[i].thumbnail.regular.small+'"/>'
            +'</div>' 
            +'<div class="movies-info">' 
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
            +'<h3 class= "movies-title">' 
            +data[i].title
            +'</h3>'
            +'</div>'
            +'<div class="bookmark-btn">'
            +'<div class="btn-overlay">'+'</div>' 
            +'</div>'
            +'</div>' ;
            }
        moviesContainer.innerHTML = movies;    
        }
    });
    
