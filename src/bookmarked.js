// Retrieve data from local storage and parse it
let showData = JSON.parse(localStorage.getItem('showDb')) || [];

const bookmarkButtons = document.querySelectorAll(".bookmark-btn");
bookmarkButtons.forEach((button) => {
    button.addEventListener("click", () => {
    const title = button.previousElementSibling.children[0].textContent;

    const show = showData.find(show => show.title === title);

    if (show) {
        show.isBookmarked = !show.isBookmarked;
        localStorage.setItem('showDb', JSON.stringify(showData));
    }
  });
});














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




