//Listening for form submit
const bookMarkedButton = document.querySelector('.bookmark-btn')



const JSON_URL = {
    Data: "data.json"
}

// Save Bookmarked function
function saveBookmark(e){
    e.preventDefault()
    //Getting form values
    var siteName = document.getElementById('siteName').value
    var siteUrl = document.getElementById('siteUrl').value

}