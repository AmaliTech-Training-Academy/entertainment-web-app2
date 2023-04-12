let data = JSON.parse(localStorage.getItem('showDb'));

// Series

let optionsContainer = document.querySelector("#series-items")

const regulars = data.filter(show => show.category === 'TV Series')
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

//     const contentContainer = document.querySelectorAll(".series");

//     contentContainer.forEach((series) => {
//             const overlay = series.querySelector(".overlay");
//             const play = series.querySelector(".play");
//             const bookmark = series.querySelector(".bookmark-btn");
//             const button = series.querySelector("svg");
//             overlay.addEventListener('mouseover', () => {
//                 overlay.classList.add('dark')
//                 play.classList.add('show')
//             });
//             overlay.addEventListener('mouseout', () => {
//                 overlay.classList.remove('dark')
//                 play.classList.remove('show')
//             });
//             play.addEventListener('mouseover', () => {
//                 overlay.classList.add('dark')
//                 play.classList.add('show')
//             });
//             bookmark.addEventListener('mouseover', () => {
//                 button.classList.add('choice')
//             });
//             bookmark.addEventListener('mouseout', () => {
//                 button.classList.remove('choice')
//             });
//             bookmark.addEventListener('click', ()=>{
//                 if(button.classList.contains('keep')){
//                     button.classList.remove('keep')
//                 }
//                 else{
//                     button.classList.add('keep')
//                 }
//             });
//     });

//     const btn = document.querySelector('.light-dark');
//     const screenSwitch = document.querySelector('.switch-mode');
//     const body = document.querySelector("body");
//     const searchIcon = document.querySelector(".search");
//     const searchQuery = document.querySelector("input");
//     const nav = document.querySelector("nav");
//     const links = document.querySelectorAll("a");
//     const recommendedContainer = document.querySelector(".series-items");
//     const ovals = document.querySelectorAll(".oval");
//     const categories = document.querySelectorAll("i");
//     const info = recommendedContainer.querySelectorAll(".about")
//     const profile = document.querySelector(".user-avatar");
//     const wayOut = document.querySelector(".logoutModal");
//             const content = wayOut.querySelector(".content");
//             const modalOptions = wayOut.querySelectorAll(".opt");
//             const closeModal = wayOut.querySelector(".one");
//             profile.addEventListener('click', ()=>{
//                 wayOut.classList.add("wayout")
//             });
//             closeModal.addEventListener('click', ()=>{
//                 wayOut.classList.remove("wayout")
//             })
//     screenSwitch.addEventListener('click', lightMode);

// function lightMode() {
//         let theme;
//         if(btn.classList.contains('triggered')){
//             btn.classList.remove('triggered');
//             body.classList.remove('light');
//             screenSwitch.classList.remove('light');
//             searchIcon.classList.remove('lightmode');
//             searchQuery.classList.remove('light');
//             searchQuery.classList.remove('lmode');
//             nav.classList.remove("light");
//             content.classList.remove('light-background');
//             modalOptions.forEach(option => option.classList.remove("light-background"));
//             links.forEach(link => link.classList.remove('lightlinks'));
//             profile.classList.remove('border');
//             categories.forEach(category => category.classList.remove('light-colour'));
//             ovals.forEach(oval => oval.classList.remove("light-theme"));
//             info.forEach(about => about.classList.remove("light-text"));
//             theme = 'DARK';
//         }else{
//             btn.classList.add('triggered');
//             body.classList.add('light');
//             screenSwitch.classList.add('light');
//             searchIcon.classList.add('lightmode');
//             searchQuery.classList.add('light');
//             searchQuery.classList.add('lmode');
//             nav.classList.add('light');
//             content.classList.add('light-background');
//         modalOptions.forEach(option => option.classList.add("light-background"));
//             links.forEach(link => link.classList.add('lightlinks'));
//             profile.classList.add('border');
//             categories.forEach(category => category.classList.add('light-colour'));
//             ovals.forEach(oval => oval.classList.add("light-theme"));
//             info.forEach(about => about.classList.add("light-text"));
//             theme = 'LIGHT';
//         }
//         localStorage.setItem("PageTheme", JSON.stringify(theme));
// }
//     let getTheme = JSON.parse(localStorage.getItem("PageTheme"));
// console.log(getTheme, "Hello");

// if(getTheme === 'LIGHT'){
//     btn.classList.add('triggered');
//             body.classList.add('light');
//             screenSwitch.classList.add('light');
//             searchIcon.classList.add('lightmode');
//             searchQuery.classList.add('light');
//             searchQuery.classList.add('lmode');
//             nav.classList.add('light');
//             content.classList.add('light-background');
//         modalOptions.forEach(option => option.classList.add("light-background"));
//             links.forEach(link => link.classList.add('lightlinks'));
//             profile.classList.add('border');
//             categories.forEach(category => category.classList.add('light-colour'));
//             ovals.forEach(oval => oval.classList.add("light-theme"));
//             info.forEach(about => about.classList.add("light-text"));

// }else if((getTheme === 'DARK')){
//     btn.classList.remove('triggered');
//             body.classList.remove('light');
//             screenSwitch.classList.remove('light');
//             searchIcon.classList.remove('lightmode');
//             searchQuery.classList.remove('light');
//             searchQuery.classList.remove('lmode');
//             nav.classList.remove("light");
//             content.classList.remove('light-background');
//                     modalOptions.forEach(option => option.classList.remove("light-background"));
//             links.forEach(link => link.classList.remove('lightlinks'));
//             profile.classList.remove('border');
//             categories.forEach(category => category.classList.remove('light-colour'));
//             ovals.forEach(oval => oval.classList.remove("light-theme"));
//             info.forEach(about => about.classList.remove("light-text"));
// }

//     addBookmark();
//     });
