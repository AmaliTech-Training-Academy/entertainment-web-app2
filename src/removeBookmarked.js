function removeBookmark() {
    const bookMarkedButton = document.querySelectorAll(".bookmark-btn");
    bookMarkedButton.forEach((btn) => (btn.onclick = () => {
      const title = btn.previousElementSibling.children[1].textContent;
      removeMovie(title);
      btn.parentElement.parentElement.remove(); // Remove movie from the UI
    }));
  
    function removeMovie(movie) {
      const bookmarkedMovies = JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
      console.log(bookmarkedMovies);
      bookmarkedMovies.splice(bookmarkedMovies.indexOf(movie), 1);
      localStorage.setItem("bookmarkedMovies", JSON.stringify(bookmarkedMovies));
    }
  }
  
  export { removeBookmark };