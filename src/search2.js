// const resultsContainer = document.querySelector(".searchItems");



// let json_link = "data.json";
// let data = [];

// fetch(json_link)
//   .then(response => response.json())
//   .then(jsonData => {
//     data = jsonData;

//     const input = document.querySelector('input');
//     input.addEventListener('keydown', (event)=> {
//     event.preventDefault();
//   if (event.key === 'Enter') {
//     const queryValue = input.value;
//     console.log(queryValue);
//     searchResults(queryValue);
//     window.location.href = "searchResults.html";
//   }
// });

// function searchResults(query){
//   let results = "";
//   data.forEach(element => {
//     if(element.title.toLowerCase().includes(query.toLowerCase())){
//       results +=  '<div class="search-item">'
//                   +'<img class="search-item-img" src="'+element.thumbnail.regular.large+'"/>'
//                   +'<div class="search-item-info">'
//                   +'<div class="search-item-title">'
//                   +element.title
//                   +'</div>'
//                   +'<div class="search-item-year">'
//                   +element.year
//                   +'</div>'
//                   +'</div>'
//                   +'</div>';
//     }
//   });
//   resultsContainer.innerHTML = results;
// }
//   })
//   .catch(error => {
//     console.error("Error loading data:", error);
//   });

  



    






//     // input.addEventListener('keyup', () => {
//     //     searchValue = input.value;
//     //     console.log(searchValue);

//     //     filterResult = searchByName(searchValue);
//     //     console.log(filterResult);

//     //     filterList = "";
//     //     for(i = 0; i < filterResult.length; i++){
//     //        filterList += 
//     //        '<div class="search-item">'
//     //        +'<img class="search-item-img" src="'+ filterResult[i].thumbnail.regular.large+ '"/>'
//     //     //    console.log(searchValue.thumbnail);
//     //        +'<div class="search-item-info">'
//     //        +'<div class="search-item-title">'
//     //        +filterResult[i].title
//     //        +'</div>'
//     //        +'<div class="search-item-year">'
//     //        +filterResult[i].year
//     //        +'</div>'
//     //        +'</div>'
//     //        +'</div>';
//     //     }
//     //     console.log(resultsContainer)
//     //     resultsContainer.innerHTML = filterList;
//     // });


//     // function searchByName(title) {
//     //             const results = [];
//     //             for (let i = 0; i < data.length; i++) {
//     //               if (data[i].title.toLowerCase().includes(title.toLowerCase())) {
//     //                 results.push(data[i]);
//     //               }
//     //             }
//     //             return results;
//     //           };
        




