const resultsContainer = document.querySelector(".searchItems");
console.log(resultsContainer);

const input = document.querySelector('input');
input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        window.location.href = "searchResults.html"
    console.log('Enter key was pressed');
    }
});




let json_link = "data.json";

fetch(json_link).then(Response => Response.json())
.then((data) => {
    let results = "";
    input.addEventListener('keyup', () => {
        const queryValue = input.value;
        console.log(queryValue);
        searchResults(queryValue);
        })

    function searchResults(query){
        data.forEach(element => {
            if(element.title.toLowerCase().includes(query.toLowerCase())){
                window.location.href = "searchResults.html"
                results +=  '<li>'
                            +'<img class="search-item-img" src="'+element.thumbnail.regular.large+'"/>'
                            +'<div class="search-item-info">'
                            +'<div class="search-item-title">'
                            +element.title
                            +'</div>'
                            +'<div class="search-item-year">'
                            +element.year
                            +'</div>'
                            +'</div>'
                            +'</li>';
                        }
                        resultsContainer.innerHTML = results;
                })
            }
        });