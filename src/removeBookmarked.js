// export function removeBookmark() {
//     const bookMarkedButton = document.querySelectorAll(".bookmark-btn");
//     bookMarkedButton.forEach((btn) => (btn.onclick = () => {
//       const title = btn.previousElementSibling.children[1].textContent;
//       removeMovie(title);
      
//       btn.parentElement.remove() // Remove movie from the UI
//     }));
  
//     function removeMovie(movie) {
//       let bookmarkedMovies = JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
//       console.log(bookmarkedMovies);
//       bookmarkedMovies = bookmarkedMovies.filter(title => title !== movie);
//       console.log(bookmarkedMovies);
//       localStorage.setItem("bookmarkedMovies", JSON.stringify(bookmarkedMovies));
//     }
//   }
