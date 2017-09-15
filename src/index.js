/**
 * es6 modules and imports
 */
//import sayHello from './hello';

//console.log(sayHello);
//sayHello('World');


// function onReady(callback) {
//     let intervalID = window.setInterval(checkReady, 1000);
//
//     function checkReady() {
//         if (document.getElementsByTagName('body')[0] !== undefined) {
//             window.clearInterval(intervalID);
//             callback.call(this);
//         }
//     }
// }
//
//
// function show(id, value) {
//     document.getElementById(id).style.display = value ? 'block' : 'none';
// }

// onReady(function () {
//     show('page', true);
//     show('loading', false);
// });


/**
 * require style imports
 */
//we can use jquery
import $ from 'jquery';

// Brings in the code from hello.js
import loadGif from './hello.js';

loadGif();

const getMovies = require('./getMovies.js');

// Brings in list of movies
getMovies().then((movies) => {
    document.getElementById("loading").innerHTML = 'Here are the movies:';
    movies.forEach(({title, rating}) => {
        addMovieToHtml(title, rating)

    });

    // Hides loader and shows html
    $(".container").show();
    $("#loader").hide();
}).catch((error) => {
    alert('Something went wrong');
    console.log(error);

});

// Grabbing json objects and adding the movies
function addMovie() {

    let movieTitle = document.getElementById("title").value;
    let movieRating = document.getElementById("rating").value;
    let header = new Headers({
        'content-Type': 'application/json'
    });

    let movieObj = {title: movieTitle, stars: movieRating};
    console.log(movieObj);
    let fetchOptions = {
        method: "POST",
        body: JSON.stringify(movieObj),
        headers: header
    };
    document.getElementById("title").value = "";
    document.getElementById("rating").value = "1";
    fetch("/api/movies", fetchOptions)
        .then((response) => response.json());
    addMovieToHtml(movieTitle, movieRating);

}

// Event listener for submit button
document.getElementById("button").addEventListener("click", addMovie);

// Adding to db.json file
function addMovieToHtml(title, rating) {
    document.getElementById("movieList").innerHTML += `<li>${title} - ${rating}</li>`
}





