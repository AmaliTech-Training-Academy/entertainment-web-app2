let showDatabase = JSON.parse(localStorage.getItem('showDb'));

const searchBar = document.querySelector('input');

searchBar.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
    event.preventDefault();
    const query = event.target.value;
    const querySmall = query.toLowerCase();

    let searchResults; 
    if(window.location.href.includes('movies.html')){
        let searchResults = showDatabase.filter(show => 
            show.title.toLowerCase().includes(querySmall) && show.category === 'Movie');
            localStorage.setItem('Query', JSON.stringify(query));
            localStorage.setItem('Results', JSON.stringify(searchResults));
            window.location.href = 'searchResults.html';
    }
    else if(window.location.href = 'series.html'){
        let searchResults = showDatabase.filter(show =>
            show.title.toLowerCase().includes(querySmall) &&show.category === 'TV Series');
            localStorage.setItem('Query', JSON.stringify(query));
            localStorage.setItem('Results', JSON.stringify(searchResults));
            window.location.href = 'searchResults.html';
    }
    else {
        let searchResults = showDatabase.filter(show => 
            show.title.toLowerCase().includes(querySmall));
            localStorage.setItem('Query', JSON.stringify(query));
            localStorage.setItem('Results', JSON.stringify(searchResults));
            window.location.href = 'searchResults.html';
    }
    }
});


// let resultsContainer = document.querySelector(".searchItems");

// let json_link = "data.json";

// fetch(json_link).then(Response => Response.json())
// .then((data) => {
//     let searchList = "";
//     // const sname = document.getElementsByClassName("search-item-info");
//     for(i = 0; i < data.length; i++){
//         searchList += 
//         '<li>'
//         +'<img class="search-item-img" src="'+data[i].thumbnail.regular.small+'"/>'
//         +'<div class="search-item-info">'
//         +'<div class="search-item-title">'
//         +data[i].title
//         +'</div>'
//         +'<div class="search-item-year">'
//         +data[i].year
//         +'</div>'
//         +'</div>'
//         +'</li>';
//     }
//     resultsContainer.innerHTML = searchList;
    
//     const searchBar = document.querySelector("input");

//     const result = document.querySelectorAll("ul");
//     // console.log(searchBar)
//     // console.log(result)
    

//     searchBar.addEventListener('keyup', () => {
//         resultsContainer.classList.add('result');
//     })
    
//     searchBar.addEventListener('blur', () => {
//         resultsContainer.classList.remove('result');
//     })

//     searchBar.addEventListener('keyup', () => {
//         searchValue = searchBar.value;
//         console.log(searchValue);

//         filterResult = searchByName(searchValue);
//         console.log(filterResult);

//         filterList = "";
//         for(i = 0; i < filterResult.length; i++){
//            filterList += 
//             '<li>'
//             +'<img class="search-item-img" src="'+filterResult[i].thumbnail.regular.small+'"/>'
//             +'<div class="search-item-info">'
//             +'<div class="search-item-title">'
//             +filterResult[i].title
//             +'</div>'
//             +'<div class="search-item-year">'
//             +filterResult[i].year
//             +'</div>'
//             +'</div>'
//             +'</li>';
//         }
//         resultsContainer.innerHTML = filterList;
//     });

//     function searchByName(title) {
//         const results = [];
//         for (let i = 0; i < data.length; i++) {
//           if (data[i].title.toLowerCase().includes(title.toLowerCase())) {
//             results.push(data[i]);
//           }
//         }
//         return results;
//       }
// });
   
    
    
    






