let trendsContainer = document.querySelector(".trending-items");

let optionsContainer = document.querySelector(".options"); 


let json_url = "data.json";

fetch(json_url).then(Response => Response.json())
.then((data) => {
    let trend= '';
    let options= '';
        for(i = 0; i < data.length; i++){
            if(data[i].isTrending){
            trend +=
            '<div class="trend">' 
            +'<div class="trend-image" >' 
            +'<div class="large" style="background:url('+data[i].thumbnail.trending.large+'); background-size:cover;"></div>'
            +'<div class="small" style="background:url('+data[i].thumbnail.trending.small+')"></div>'
            +'</div>' 
            +'<div class="trend-info">' 
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
            +'<h3 class= "trend-title">' 
            +data[i].title
            +'</h3>'
            +'</div>'
            +'<div class="bookmark-btn">'
            +'<div class="btn-overlay">'+'</div>' 
            +'</div>'
            +'</div>' ;
            }
        }
        trendsContainer.innerHTML = trend;

        for(i = 0; i < data.length; i++){
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
            +'<span style="background:url('+data[i].logo+')">'
            +'</span>' 
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
            +'<div class="btn-overlay">'+'</div>' 
            +'</div>'
            +'</div>' ;
            }
        optionsContainer.innerHTML = options;    
        }
    });
    
