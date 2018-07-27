require("dotenv").config();
var request = require('request');
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter)
var Spotify = require("node-spotify-api");
var Twitter = require("twitter");
var fs = require("fs");

// logic if/else for each command and its function
// `my-tweets`
// `spotify-this-song`
// `movie-this`
// `do-what-it-says`

if (input === "my-tweets"){
    tweets();
}
else if(input === "spotify-this-song"){
    spotifyIt();
}
else if(input === "movie-this"){
    showMovie();
}
else if(input === "do-what-it-says"){
    simonSays();
}
else{
    console.log("Not a recognized command");
}










//ombd calls
var movieInput = ""
var title = movieInput;
var queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";

    request(queryURL)
    .then(function(response) {
      console.log(response);
      console.log(response.Title);
      console.log(response.Released);
      console.log(response.Rated);
      console.log(response.Ratings[1]);
      console.log(response.Country);
      console.log(response.Language);
      console.log(response.Plot);
      console.log(response.Actors);
      
    });
