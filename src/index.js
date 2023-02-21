axios
    .get("https://entertainment-web-app-api.onrender.com/items")
    .then(response => {
        const media = response.data;
        const trending = document.querySelector(".trending");
        trending.innerHTML = media.map(
            
        )
        console.log(media);
    })
    .catch(error => console.error(error));

    
