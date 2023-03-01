let resultsContainer = document.querySelector(".searchItems");

let json_link = "data.json";

fetch(json_link).then(Response => Response.json())
.then((data) => {
    let searchList = "";
    for(i = 0; i < data.length; i++){
        searchList += 
        '<li>'
        +'<img class="search-item-img" src="'+data[i].thumbnail.regular.small+'"/>'
        +'<div class="search-item-info">'
        +'<div class="search-item-title">'
        +data[i].title
        +'</div>'
        +'<div class="search-item-year">'
        +data[i].year
        +'</div>'
        +'</div>'
        +'</li>';
    }
    resultsContainer.innerHTML = searchList;

    const searchBar = document.querySelector("input");
    const result = document.querySelector("ul");

    searchBar.addEventListener('click', () => {
        result.classList.add('result');
    })
})
