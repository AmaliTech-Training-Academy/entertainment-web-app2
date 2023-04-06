let data = JSON.parse(localStorage.getItem('showDb'));

// Trending section

let trendsContainer = document.querySelector(".trending-items");

const trends = data.filter(show => show.isTrending)
.map(show => {
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

let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('width', '12');
svg.setAttribute('height', '14');

let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
path.setAttribute('d', 'm10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z');
svg.appendChild(path);

bookmarkBtn.appendChild(svg);

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

let optionsContainer = document.querySelector(".options")

const regulars = data.filter(show => !show.isTrending)
.map(regular => {

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
    
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '12');
    svg.setAttribute('height', '14');
    
    let path = document.createElement('path');
    if(regular.isBookmarked){
        path.setAttribute('d', "M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"); 
        path.setAttribute('fill', '#FFF');
    }
    else{
        path.setAttribute('d', 'm10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z');
        path.setAttribute('stroke', '#FFF');
        path.setAttribute('stroke-width', '1.5');
        path.setAttribute('fill', 'none');
        }

    svg.appendChild(path);
    
    bookmarkBtn.appendChild(svg);
    
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

document.addEventListener('DOMContentLoaded', () => {
    let data = JSON.parse(localStorage.getItem('showDb'));

    const recommendedShows = document.querySelectorAll(".show");
     // Setting Bookmarks
    const save = () => {
        data.forEach(show => {
        show.isBookmarked = true;
        });
        localStorage.setItem('showDb', JSON.stringify(data));
    }

    const unsave = () => {
        data.forEach(show => {
        show.isBookmarked = false;
        });
        localStorage.setItem('showDb', JSON.stringify(data));
    }

    recommendedShows.forEach(show => {
        const overlay = show.querySelector(".overlay");
        const play = show.querySelector(".play");
        const bookmark = show.querySelector(".bookmark-btn");
        const button = show.querySelector("svg");
        overlay.addEventListener('mouseover', () => {
            overlay.classList.add('dark')
            play.classList.add('show')
        });
        overlay.addEventListener('mouseout', () => {
            overlay.classList.remove('dark')
            play.classList.remove('show')
        });
        play.addEventListener('mouseover', () => {
            overlay.classList.add('dark')
            play.classList.add('show')
        });
        bookmark.addEventListener('mouseover', () => {
            button.classList.add('choice')
        });
        bookmark.addEventListener('mouseout', () => {
            button.classList.remove('choice')
        });
        bookmark.addEventListener('click', ()=>{
            if(button.classList.contains('keep')){
                button.classList.remove('keep');
                unsave();
            }
            else{
                button.classList.add('keep');
                save();
            };
        });
    });
});