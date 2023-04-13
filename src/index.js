let data = JSON.parse(localStorage.getItem('showDb'));
console.log(data);

// Trending section

let trendsContainer = document.querySelector(".trending-items");

const trends = data.filter(show => show.isTrending);
console.log("trends::", trends);

trends.map(show => {
    let trend = document.createElement('div');
    trend.classList.add('trend');
    trend.classList.add('show');

    let trendImage = document.createElement('div');
    trendImage.classList.add('trend-image');

    let large = document.createElement('div');
    large.classList.add('large');
    large.style.background = `url(${show.thumbnail.trending.large})`;
    large.style.backgroundSize = 'cover';
    trendImage.appendChild(large);

    let small = document.createElement('div');
    small.classList.add('small');
    small.style.background = `url(${show.thumbnail.trending.small})`;
    small.style.backgroundSize = 'cover';
    trendImage.appendChild(small);

    trend.appendChild(trendImage);

    let trendInfo = document.createElement('div');
    trendInfo.classList.add('trend-info');

    let trendTitle = document.createElement('h3');
    trendTitle.classList.add('trend-title');
    trendTitle.innerHTML = show.title;

    trendInfo.appendChild(trendTitle);

    const about = document.createElement('div');
    about.classList.add('about');
    about.innerHTML = `
    ${show.year}
    <div class="oval"></div>
    <i class="category" style="background:url(${show.logo})"></i>
    ${show.category}
    <div class="oval"></div>
    ${show.rating}
`;
trendInfo.appendChild(about);

trend.appendChild(trendInfo);

let bookmarkBtn = document.createElement('div');
bookmarkBtn.classList.add('bookmark-btn');

let bookmarkEmpty = document.createElement('img');

if(show.isBookmarked){
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

trend.appendChild(bookmarkBtn);

let play = document.createElement('div');
play.classList.add('play');

let playBtn = document.createElement('div');
playBtn.classList.add('play-btn');
play.appendChild(playBtn);

let playText = document.createElement('p');
playText.textContent = 'Play';
play.appendChild(playText);

trend.appendChild(play);

let overlay = document.createElement('div');
overlay.classList.add('overlay');
trend.appendChild(overlay);

trendsContainer.appendChild(trend);
});

// Recommended section

let optionsContainer = document.querySelector("#all-items")

const regulars = data.filter(show => !show.isTrending);
regulars.map(regular => {
        let option = document.createElement('div');
        option.classList.add('regular');
        option.classList.add('show');
    
        let optionImage = document.createElement('div');
        optionImage.classList.add('regular-image');
    
        let large = document.createElement('div');
        large.classList.add('large');
        large.style.background = `url(${regular.thumbnail.regular.large})`;
        large.style.backgroundSize = 'cover';
        optionImage.appendChild(large);

        let medium = document.createElement('div');
        medium.classList.add('medium');
        medium.style.background = `url(${regular.thumbnail.regular.medium})`;
        medium.style.backgroundSize = 'cover';
        optionImage.appendChild(medium);
        option.appendChild(optionImage);
    
        let small = document.createElement('div');
        small.classList.add('small');
        small.style.background = `url(${regular.thumbnail.regular.small})`;
        small.style.backgroundSize = 'cover';
        optionImage.appendChild(small);
        option.appendChild(optionImage);
    
        let optionInfo = document.createElement('div');
        optionInfo.classList.add('regular-info');
    
        let optionTitle = document.createElement('h3');
        optionTitle.classList.add('regular-title');
        optionTitle.innerHTML = regular.title;
    
        optionInfo.appendChild(optionTitle);
    
        let about = document.createElement('div');
        about.classList.add('about');
        about.innerHTML = `
        ${regular.year}
        <div class="oval"></div>
        <i class="category" style="background:url(${regular.logo})"></i>
        ${regular.category}
        <div class="oval"></div>
        ${regular.rating}
    `;
    optionInfo.appendChild(about);
    
    option.appendChild(optionInfo);
    
    let bookmarkBtn = document.createElement('div');
    bookmarkBtn.classList.add('bookmark-btn');
    
    if(regular.isBookmarked){
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
    
    optionsContainer.appendChild(option);
});


