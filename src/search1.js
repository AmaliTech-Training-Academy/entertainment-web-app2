// const resultsContainer = document.querySelector(".searchItems");


let json_link = "data.json";
fetch(json_link)
  .then(response => response.json())
  .then(data => {
    function searchResults(query){
        let results = "";
        data.forEach(element => {
            if(element.title.toLowerCase().includes(query.toLowerCase())){
                results +=  '<div class="search-item">'
                            +'<img class="search-item-img" src="'+ element.thumbnail.regular.large +'"/>'
                            +'<div class="search-item-info">'
                            +'<div class="search-item-title">'
                            +element.title
                            +'</div>'
                            +'<div class="search-item-year">'
                            +element.year
                            +'</div>'
                            +'</div>'
                            +'</div>';
            }
            // resultsContainer.innerHTML = results;
        })
    }

    const input = document.querySelector('input');
    input.focus();
        
    const queryValue = input.value;
    console.log(queryValue);
    searchResults(queryValue)
  })
