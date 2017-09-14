/**
 * es6 modules and imports
 */
//import sayHello from './hello';

//console.log(sayHello);
//sayHello('World');


function onReady(callback) {
    let intervalID = window.setInterval(checkReady, 1000);
    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}


function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('page', true);
    show('loading', false);
});


/**
 * require style imports
 */
const getMovies = require('./getMovies.js');

getMovies().then((movies) => {
 document.getElementById("loading").innerHTML = 'Here are the movies:'
  movies.forEach(({title, rating, id}) => {
      addMovieToHtml(title, rating)

  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);

});

//here we have our stringify object
let movieTitle = document.getElementById("Title").value;
let movieRating = document.getElementById("rating").value;
let header = new Headers({
    'content-Type': 'application/json'
});

let movieObj = {title:movieTitle, rating: movieRating};
console.log(movieObj);
let fetchOptions ={
    method: "POST",
    body: JSON.stringify(movieObj),
    headers: header
};
document.getElementById("title").value = "";
document.getElementById("rating").value = "1";
fetch("/api/movies", fetchOptions)
    .then((response)=>console.log(response.json()));
addMovieToHtml(movieTitle,movieRating)

}
//event listener for button
document.getElementById("button").addEventListener("click, addAMovie");

//add to html
function addMovieToHtml ( title, rating){
    document.getElementById("movie-list").innerHTML += `<li>${title} - rating: ${rating}</li>`
}

//module.exports = getMovies;



