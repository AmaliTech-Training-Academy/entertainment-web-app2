// const bookmarkedVideo = document.getElementById('.bookmark-btn');
// bookmarkedVideo.remove();

// function removeBookmark(bookmarkId) {
//     let bookmarks = JSON.parse(localStorage.getItem(".bookmark.btn")) || [];
//     bookmarks = bookmarks.filter(function(bookmark) {
//       return bookmark.id !== bookmarkId;
//     });
//     localStorage.setItem(".bookmark.btn", JSON.stringify(bookmarks));
//     const bookmarkLink = document.querySelector(`[href="#bookmark-${bookmarkId}"]`);
//     if (bookmarkLink) {
//       bookmarkLink.parentNode.remove();
//     }
//   }
function removeBookmark() {
    const bookMarkedButton = document.querySelectorAll(".bookmark-btn");
    bookMarkedButton.forEach(
        (btn) => (btn.onclick = () =>
        {
            const title = btn.previousElementSibling.children[1].textContent;
            removeMovie(title);
        })
    );

    function removeMovie(movie) {
        
    }
}

export { removeBookmark };

function addBookmark() {
    //Listening for form submit
    const bookMarkedButton = document.querySelectorAll(".bookmark-btn");
  
    bookMarkedButton.forEach(
      (btn) =>
        (btn.onclick = () => {
          const title = btn.previousElementSibling.children[1].textContent;
          addMovieToBookmark(title);
        })
    );
  
    function addMovieToBookmark(movie) {
      const bookmarkedMovies =
        JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
      console.log(bookmarkedMovies);
      bookmarkedMovies.push(movie);
      localStorage.setItem("bookmarkedMovies", JSON.stringify(bookmarkedMovies));
    }
  }
  
  export { addBookmark };