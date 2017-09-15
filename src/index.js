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
import $ from 'jquery';

import loadGif from './hello.js';

loadGif();

const getMovies = require('./getMovies.js');

getMovies().then((movies) => {
    document.getElementById("loading").innerHTML = 'Here are the movies:';
    movies.forEach(({title, rating}) => {
        addMovieToHtml(title, rating)

    });
    $(".container").show();
    $("#loader").hide();
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);

});

//here we have our stringify object
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

//event listener for button
document.getElementById("button").addEventListener("click", addMovie);

//add to html
function addMovieToHtml(title, rating) {
    document.getElementById("movieList").innerHTML += `<li>${title} - ${rating}</li>`
}





