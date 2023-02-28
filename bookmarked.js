//Listening for form submit
const bookMarkedButton = document.querySelector('.bookmark-btn')

// Save Bookmarked function
function saveBookmark(e){
    e.preventDefault()
    const bookmarks = []
    //Getting form values
    // const siteName = document.getElementById('siteName').value
    // const siteUrl = document.getElementById('siteUrl').value
    // bookmarks.title
    if(localStorage.getItem(bookmarks) === null){
        bookmarks.push(bookmarks)

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    }else {
        const getBookmark = JSON.parse(localStorage.getItem('bookmarks'))
        //Add bookmark to array
        bookmarks.push(bookmarks)
        //Re-set back to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    }

}

//Display bookmark or fetch bookmark
function fetchBookmarks() {
    //Getting bookmarks from localStorage
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
    //Getting output id
    const bookmarkResults = document.querySelector('bookmarkResult')
    //Build output
    bookmarkResults.innerHTML = ''
    foreach(result){
        result.title.innerHTML += '<div class=bookmark-btn'
    }
}

function deleteBookmarks(){

}



/*
To add and remove movies from a bookmark list, you can use the same approach as adding and removing bookmarks. 
The main difference is that instead of storing the URL and title of the page, you will store the movie information such as its title, 
poster, and release date.

Here's an example of how to add a movie to a bookmark list:

function addMovieToBookmark(movie) {
  const bookmarkedMovies = JSON.parse(localStorage.getItem('bookmarkedMovies')) || [];
  bookmarkedMovies.push(movie);
  localStorage.setItem('bookmarkedMovies', JSON.stringify(bookmarkedMovies));
}

This function takes a movie object as a parameter and retrieves the list of bookmarked movies from localStorage. 
If there are no bookmarked movies, it initializes an empty array. 
It then adds the movie object to the list of bookmarked movies and stores the updated list back into localStorage.

To remove a movie from the bookmark list, you can use the filter method to filter out the movie that matches the 
ID of the movie to be removed. Here's an example:

function removeMovieFromBookmark(movieId) {
  let bookmarkedMovies = JSON.parse(localStorage.getItem('bookmarkedMovies')) || [];
  bookmarkedMovies = bookmarkedMovies.filter(movie => movie.id !== movieId);
  localStorage.setItem('bookmarkedMovies', JSON.stringify(bookmarkedMovies));
}