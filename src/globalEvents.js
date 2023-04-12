const shows = document.querySelectorAll(".show");
    shows.forEach(show => {
        const overlay = show.querySelector(".overlay");
        const play = show.querySelector(".play");
        const bookmark = show.querySelector(".bookmark-btn");
        const bookmarkBtn = show.querySelector("img");

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
            bookmarkBtn.setAttribute('src', '/src/assets/icon-bookmark-choice.svg');
        });

        bookmark.addEventListener('mouseout', () => {
            if(bookmarkBtn.classList.contains('full')){
                bookmarkBtn.setAttribute('src', '/src/assets/icon-bookmark-full.svg');
            } 
            else{
                bookmarkBtn.setAttribute('src', '/src/assets/icon-bookmark-empty.svg');
            }
        });
        bookmark.addEventListener('click', ()=>{
            if(bookmarkBtn.classList.contains('full')){
                bookmarkBtn.classList.remove('full');
            bookmarkBtn.classList.add('empty');
            bookmarkBtn.setAttribute('src', '/src/assets/icon-bookmark-empty.svg');
            } 
            else{
                bookmarkBtn.classList.remove('empty');
            bookmarkBtn.classList.add('full');
            bookmarkBtn.setAttribute('src', '/src/assets/icon-bookmark-full.svg');
            }
            })
        });

         // const save = (index) => {
        //     let data = JSON.parse(localStorage.getItem('showDb'));
        //     data[index].isBookmarked = true;
        //     localStorage.setItem('showDb', JSON.stringify(data));
        //     bookmarkBtn.classList.remove('empty');
        //     bookmarkBtn.classList.add('full');
        //     bookmarkBtn.setAttribute('src', '/src/assets/icon-bookmark-full.svg');
        // }
    
        // const unsave = (index) => {
        //     let data = JSON.parse(localStorage.getItem('showDb'));
        //     data[index].isBookmarked = false;
        //     localStorage.setItem('showDb', JSON.stringify(data));
        //     bookmarkBtn.classList.remove('full');
        //     bookmarkBtn.classList.add('empty');
        //     bookmarkBtn.setAttribute('src', '/src/assets/icon-bookmark-empty.svg');
        // }


// function addBookmark() {
//   //Listening for form submit
//   const bookMarkedButton = document.querySelectorAll(".bookmark-btn");
//   let bookmarkedMovies = JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
//   bookMarkedButton.forEach((btn) => (btn.onclick = () => {
//         const title = btn.previousElementSibling.children[1].textContent;
//         if(bookmarkedMovies.includes(title)){
//           removeMovieFromBookMark(title);
//         } else {
//           addMovieToBookmark(title);
//         }
//         console.log(title);
//       })
//   );

//   function addMovieToBookmark(movie) {
//     console.log(bookmarkedMovies);
//     bookmarkedMovies.push(movie);
//     localStorage.setItem("bookmarkedMovies", JSON.stringify(bookmarkedMovies));
//   }

//   function removeMovieFromBookMark(title){
//     bookmarkedMovies = bookmarkedMovies.filter(movie => movie !== title);
//     localStorage.setItem("bookmarkedMovies", JSON.stringify(bookmarkedMovies));
//   }
// }

// export { addBookmark };

