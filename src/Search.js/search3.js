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

   
            
            const input = document.querySelector('input');
            input.addEventListener('keyup', () => {
              resultsContainer.style.display = "grid" 
               document.querySelector(".moviesContainer").style.display = "none";
               if (input.value === "") {
               document.querySelector(".moviesContainer").style.display = "grid"; 
               resultsContainer.style.display = "none" 
               }

                searchValue = input.value;
                console.log(searchValue);

                filterResult = searchByName(searchValue);
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
           for (i = 0; i < data.length; i++) {
                  if (data[i].category=== 'Movie' && data[i].title.toLowerCase().includes(title.toLowerCase())) {
                    results.push(data[i]);
                }
            }
            return results;
          };
})


// for (let i = 0; i < data.length; i++) {
//   if (data[i].title.toLowerCase().includes(title.toLowerCase())) {
//     results.push(data[i]);
//   }

      // input.addEventListener('keydown' ,function(event) {
        //     event.preventDefault();
        //     if (event.key === 'Enter') {
            //             window.location.href = "searchResults.html"
            //             const queryValue = input.value;
            //             console.log(queryValue);
            //             searchResults(queryValue);
            //     } 
            
            // });       
