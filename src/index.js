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
            +'<div class="trend-image">' 
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
            +'<svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"/></svg>'
            +'</div>'
            +'<div class="play">'
            +'<div class="play-btn"></div>'
            +'<p>Play</p>'
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
            +'<svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"/></svg>'
            +'</div>'
            +'<div class="play-items">'
            +'<div class="play">'
            +'<div class="play-btn"></div>'
            +'<p>Play</p>'
            +'</div>'
            +'</div>'
            +'</div>';
            }
        optionsContainer.innerHTML = options;    
        }
       
        const trends = document.querySelectorAll(".trend");

        trends.forEach(trend => {
            const img = trend.querySelector(".trend-image");
            const play = trend.querySelector(".play");
            const bookmark = trend.querySelector(".bookmark-btn");
            const about = trend.querySelector(".trend-info");
            const button = trend.querySelector("svg");
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
            bookmark.addEventListener('mouseover', () => {
                img.classList.add('dark')
                play.classList.add('show')
                button.classList.add('choice')
            });
            bookmark.addEventListener('mouseout', () => {
                button.classList.remove('choice')
            })
            bookmark.addEventListener('click', ()=>{
                if(button.classList.contains('keep')){
                    button.classList.remove('keep')
                }
                else{
                    button.classList.add('keep')
                }
            });
            about.addEventListener('mouseover', () => {
                img.classList.add('dark')
                play.classList.add('show')
            });
        });

        const recommended = document.querySelectorAll(".option");

        recommended.forEach(option => {
            const img = option.querySelector(".option-image");
            const play = option.querySelector(".play");
            const bookmark = option.querySelector(".bookmark-btn");
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
            bookmark.addEventListener('mouseover', () => {
                img.classList.add('dark')
                play.classList.add('show')
            });

        });

    });
    

   