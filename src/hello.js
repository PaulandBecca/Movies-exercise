

const $ = require("jquery");

const loadGif = () => {
    $(".container").hide();
    $ ('#loader').html("<img src='/img/infitity-gif.gif'>");
};

// const deleteMovie =() => {
//     event.preventDefault();
//     event.target.getAttribute("movieList");
// };

module.exports = loadGif;
// module.exports = deleteMovie;