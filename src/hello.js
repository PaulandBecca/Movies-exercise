

const $ = require("jquery");

const loadGif = () => {
    $(".container").hide();
    $ ('#loader').html("<img src='/img/infitity-gif.gif'>");
};

module.exports = loadGif;