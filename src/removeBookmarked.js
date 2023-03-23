export function removeBookmark() {
    const bookMarkedButton = document.querySelectorAll(".bookmark-btn");
    bookMarkedButton.forEach((btn) => (btn.onclick = () => {
      const title = btn.previousElementSibling.children[1].textContent;
      removeMovie(title);
      
      btn.parentElement.remove() // Remove movie from the UI
    }));
  
    function removeMovie(movie) {
      const bookmarkedMovies = JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
      console.log(bookmarkedMovies);
      bookmarkedMovies.splice(bookmarkedMovies.indexOf(movie), 1);
      console.log(bookmarkedMovies);
      localStorage.setItem("bookmarkedMovies", JSON.stringify(bookmarkedMovies));
    }
  }

  export function removeMS() {
    const bookMarkedButton = document.querySelectorAll(".bookmark-btn");
    bookMarkedButton.forEach((btn) => (btn.onclick = () => {
      
      const title = btn.previousElementSibling.children[1].textContent;
      removeMovie(title);
      
      // btn.parentElement.remove() // Remove movie from the UI
    }));
  
    function removeMovie(movie) {
      const bookmarkedMovies = JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
      console.log(bookmarkedMovies);
      bookmarkedMovies.splice(bookmarkedMovies.indexOf(movie), 1);
      console.log(bookmarkedMovies);
      localStorage.setItem("bookmarkedMovies", JSON.stringify(bookmarkedMovies));
    }
  }

  // export function removeMS() {
  //   const bookmarkedBtn = document.querySelectorAll(".bookmark-btn");
  //   bookmarkedBtn.forEach((button) => (button.onclick = () => {
  
  //     // Check if the button is filled
  //     // if (button.classList.contains("keep")) {
  //       const titan = button.previousElementSibling.children[1].textContent;
  //       removeMovie(titan);
  //       // button.parentElement.remove(); // Remove movie from the UI
  //     // }
  //   }));
  
  //   function removeMovie(movie) {
  //     const bookmarkedMovies = JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
  //     console.log(bookmarkedMovies);
  //     bookmarkedMovies.splice(bookmarkedMovies.indexOf(movie), 1);
  //     console.log(bookmarkedMovies);
  //     localStorage.setItem("bookmarkedMovies", JSON.stringify(bookmarkedMovies));
  //   }
  // }
  
  


//   function removeBookmark() {
//     const bookMarkedButton = document.querySelectorAll(".bookmark-btn");
//     bookMarkedButton.forEach((btn) => (btn.onclick = () => {
//             const title = btn.previousElementSibling.children[1].textContent;
//             removeMovie(title);
//             btn.parentElement.parentElement.remove(); 
//         })
//     );

//     function removeMovie(movie) {
//         const bookmarkedMovies = JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
//         console.log(bookmarkedMovies);
//         bookmarkedMovies.splice(bookmarkedMovies.indexOf(movie), 1);
//         console.log(bookmarkedMovies);
//         localStorage.setItem("bookmarkedMovie", JSON.stringify(bookmarkedMovies));
//     }
// }

// export { removeBookmark };