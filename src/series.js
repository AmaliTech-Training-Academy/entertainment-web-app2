let seriesContainer = document.querySelector(".series-items");

let json_url = "data.json";

fetch(json_url).then(Response => Response.json())
.then((data) => {
    let series= '';

    for(i = 0; i < data.length; i++){
        if(data[i].category === 'TV Series'){
            series += 
        '<div class="series">' 
        +'<div class="series-image" >' 
        +'<img class="large" src="'+data[i].thumbnail.regular.large+'"/>'
        +'<img class="medium" src="'+data[i].thumbnail.regular.medium+'"/>'
        +'<img class="small" src="'+data[i].thumbnail.regular.small+'"/>'
        +'</div>' 
        +'<div class="series-info">' 
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
        +'<h3 class= "series-title">' 
        +data[i].title
        +'</h3>'
        +'</div>'
        +'<div class="bookmark-btn">'
        +'<div class="btn-overlay">'+'</div>' 
        +'</div>'
        +'</div>' ;
        }
        seriesContainer.innerHTML = series;    
    }
})

// let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//         let response = JSON.parse(xhttp.responseText);
//         let tvSeries = response;
//         let tvSeriesInfo = '';
//         for(i = 0; i < tvSeries.length; i++){
//           if(tvSeries[i].category === 'TV Series'){
//             tvSeriesInfo += 
//             '<div class="item">' + 
//               '<div class="item-image" >' +
//                 '<img src="' + tvSeries[i].thumbnail.regular.large+ '"' +'>' + 
//                 '<div class="bookmark-btn">'+
//                   '<div class="btn-overlay">'+'</div>' +
//                 '</div>' + 
//               '</div>' + 
//               '<div class="item-info">' + 
//                 '<div class="about">' +tvSeries[i].year + 
//                   '<div class="oval">'+
                     
//                   '</div>' + 
//                   '<span>'+
//                     // '<img src="'+assets.icon-category-tv.svg +'"'+'>'+
//                   '</span>' + tvSeries[i].category + 
//                   '<div class="oval">'+'</div>' + tvSeries[i].rating + 
//                 '</div>'+ 
//                   '<div class= "item-title">' +tvSeries[i].title+ 
//                   '</div>' +
//               '</div>' + 
//             '</div>' ;  
//           } 
//         }
//         document.getElementById("called").innerHTML = tvSeriesInfo;
//       }
//     };
//     xhttp.open("GET", "data.json", true);
//     xhttp.send();