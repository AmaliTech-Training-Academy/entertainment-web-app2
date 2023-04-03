function addBookmark() {
  //Listening for form submit
  const bookMarkedButton = document.querySelectorAll(".bookmark-btn");
  let bookmarkedMovies = JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
  bookMarkedButton.forEach((btn) => (btn.onclick = () => {
        const title = btn.previousElementSibling.children[1].textContent;
        if(bookmarkedMovies.includes(title)){
          removeMovieFromBookMark(title);
        } else {
          addMovieToBookmark(title);
        }
        console.log(title);
      })
  );

  function addMovieToBookmark(movie) {
    console.log(bookmarkedMovies);
    bookmarkedMovies.push(movie);
    localStorage.setItem("bookmarkedMovies", JSON.stringify(bookmarkedMovies));
  }

  function removeMovieFromBookMark(title){
    bookmarkedMovies = bookmarkedMovies.filter(movie => movie !== title);
    localStorage.setItem("bookmarkedMovies", JSON.stringify(bookmarkedMovies));
  }
}

export { addBookmark };

