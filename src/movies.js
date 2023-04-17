let data = JSON.parse(localStorage.getItem('showDb'));

// Regular Movies

let moviesContainer = document.querySelector("#movies-items")

const regularMovies = data.filter(show => show.category === 'Movie');
regularMovies.map(movie => {
        let option = document.createElement('div');
        option.classList.add('regular');
        option.classList.add('show');
    
        let optionImage = document.createElement('div');
        optionImage.classList.add('regular-image');
    
        let large = document.createElement('div');
        large.classList.add('large');
        large.style.background = `url(${movie.thumbnail.regular.large})`;
        large.style.backgroundSize = 'cover';
        optionImage.appendChild(large);

        let medium = document.createElement('div');
        medium.classList.add('medium');
        medium.style.background = `url(${movie.thumbnail.regular.medium})`;
        medium.style.backgroundSize = 'cover';
        optionImage.appendChild(medium);
        option.appendChild(optionImage);
    
        let small = document.createElement('div');
        small.classList.add('small');
        small.style.background = `url(${movie.thumbnail.regular.small})`;
        small.style.backgroundSize = 'cover';
        optionImage.appendChild(small);
        option.appendChild(optionImage);
    
        let optionInfo = document.createElement('div');
        optionInfo.classList.add('regular-info');
    
        let optionTitle = document.createElement('h3');
        optionTitle.classList.add('regular-title');
        optionTitle.innerHTML = movie.title;
    
        optionInfo.appendChild(optionTitle);
    
        let about = document.createElement('div');
        about.classList.add('about');
        about.innerHTML = `
        ${movie.year}
        <div class="oval"></div>
        <i class="category" style="background:url(${movie.logo})"></i>
        ${movie.category}
        <div class="oval"></div>
        ${movie.rating}
    `;
    optionInfo.appendChild(about);
    
    option.appendChild(optionInfo);
    
    let bookmarkBtn = document.createElement('div');
    bookmarkBtn.classList.add('bookmark-btn'); 
    if(movie.isBookmarked){
        let bookmarkFull = document.createElement('img');
        bookmarkFull.setAttribute('src', '/src/assets/icon-bookmark-full.svg');
        bookmarkFull.classList.add('full');
        bookmarkBtn.appendChild(bookmarkFull);
    } 
    else{
        let bookmarkEmpty = document.createElement('img');
        bookmarkEmpty.classList.add('empty');
        bookmarkEmpty.setAttribute('src', '/src/assets/icon-bookmark-empty.svg');
        bookmarkBtn.appendChild(bookmarkEmpty);
    }
    
    option.appendChild(bookmarkBtn);
    
    let play = document.createElement('div');
    play.classList.add('play');
    
    let playBtn = document.createElement('div');
    playBtn.classList.add('play-btn');
    play.appendChild(playBtn);
    
    let playText = document.createElement('p');
    playText.textContent = 'Play';
    play.appendChild(playText);
    
    option.appendChild(play);
    
    let overlay = document.createElement('div');
    overlay.classList.add('overlay');
    option.appendChild(overlay);
    
    moviesContainer.appendChild(option);
});