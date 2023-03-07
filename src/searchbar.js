let resultsContainer = document.querySelector(".searchItems");

let json_link = "data.json";

fetch(json_link).then(Response => Response.json())
.then((data) => {
    let searchList = "";
    // const sname = document.getElementsByClassName("search-item-info");
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
    const result = document.querySelectorAll("ul");
    // console.log(searchBar)
    // console.log(result)
    

    searchBar.addEventListener('click', () => {
        resultsContainer.classList.add('result');
    })
    
    searchBar.addEventListener('click', () => {
        if (!searchBar){
            resultsContainer.classList.remove('result');
        }
    })
    

    
    
    
    
})



// window.onclick = (evt) => {
//     console.log(evt.target);
//     if(evt.target === resultsContainer) {
//         resultsContainer.style.opacity = 0;
//     }
// }
/*
const closeSearchBar = (event) => {
    console.log(event.target);
    if (event.currentTarget.classList.contains('searchItems') && resultsContainer.classList.contains('result')) {
        resultsContainer.style.display = 'none';
        // resultContainer.style.opacity = "0";
        console.log(event.target.classList.contains('ul'))
    }
}

document.body.addEventListener('click', closeSearchBar);
*/
/*
document.body.onclick = (evt) => {
    console.log(evt.target);
    const target = evt.target;
    const searchInput = document.querySelector('input[type="search"]');
    if (!target.classList.contains('searchItems') || !target.classList.contains(searchInput)) {
        resultsContainer.style.display = 'none';    
        console.log('ere');
    }
}
*/