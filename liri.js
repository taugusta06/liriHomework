require("dotenv").config();
var Twitter = require("twitter");
var request = require('request');
var spotify = new Spotify(keys.spotify);
var Spotify = require("node-spotify-api");
var fs = require("fs");
var keys = require("./keys.js");






if (input === "my-tweets") {
    tweets();
}
else if (input === "spotify-this-song") {
    spotifyIt();
}
else if (input === "movie-this") {
    showMovie();
}
else if (input === "do-what-it-says") {
    simonSays();
}
else {
    console.log("Not a recognized command");
}

// spotify functionality

var spotifyIt = function (songName) {

    spotify.search(
        {
            type: "track",
            query: songName
        },
        function (err, data) {
            if (err) {
                console.log("Error occurred: " + err);
                return;
            }

            var songs = data.tracks.items;

            for (var i = 0; i < songs.length; i++) {
                console.log(i);
                console.log("artist(s): " + songs[i].artists.map(getArtistNames));
                console.log("song name: " + songs[i].name);
                console.log("preview song: " + songs[i].preview_url);
                console.log("album: " + songs[i].album.name);
                console.log("-----------------------------------");
            }
        }
    );
};

//   tweet functionality
var tweets = function () {
    var client = new Twitter(keys.twitter);

    var params = {
        screen_name: "cnn"
    };
    client.get("statuses/user_timeline", params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].created_at);
                console.log("");
                console.log(tweets[i].text);
            }
        }
    });
};

// Function for running a Movie Search
var showMovie = function (movieInput) {


    //ombd calls
    var movieInput = ""
    var title = movieInput;
    var queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";

    request(queryURL)
        .then(function (response) {
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
};

// simon says
var simonSays = function () {
    fs.readFile("random.txt", "utf8", function (error, data) {
        console.log(data);

        var dataArr = data.split(",");

        if (dataArr.length === 2) {
            pick(dataArr[0], dataArr[1]);
        }
        else if (dataArr.length === 1) {
            pick(dataArr[0]);
        }
    });
};

var runThis = function(argOne, argTwo) {
    pick(argOne, argTwo);
  };
runThis(process.argv[2], process.argv[3]);  






