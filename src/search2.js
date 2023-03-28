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
                            +'<img class="search-item-img" src="'+element.thumbnail+'"/>'
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
        })
        // resultsContainer.innerHTML = results;
        resultsContainer.innerHTML = ""
    }

    const input = document.querySelector('input');
    input.addEventListener('keydown', function(event) {
        event.preventDefault();
        if (event.key === 'Enter') {
                window.location.href = "searchResults.html"
                const queryValue = input.value;
                console.log(queryValue);
                searchResults(queryValue);
        }
    });
});

