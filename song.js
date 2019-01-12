/*================
 This file contains info about my favourite Song and artist.
 It also contains details of my favourite song and artist  
==================*/

// Name of my favourite song
var songName = "One God";

//my favourite artist name
var artist = "Zain Bhikha";

//my favourite song year of release
var yearOfrelease = "2011";

//my type of favourite song
var genre = "R&B/Soul";

//Duration of my favourite song
var durationInSeconds = 367;

//Love my favourite song
var loved = true;

// Youtube link of my favourite song. 
var youTubeLink = "https://www.youtube.com/watch?v=bKBL9hvBRtA";

// log my favourite and artist song to the console
console.log('my favourte song is:'+ songName + ' by ' + artist);

// log my favourite song artist to the console
console.log(artist);

// log my favourite song release year to the console
console.log(yearOfrelease);

// log my favourite song genre to the console
console.log(genre);

// log duration in seconds of my favourite song to the console
console.log(durationInSeconds);

// log youtube link of my favourite song to the console
console.log(youTubeLink);

// log whether my favourite song is loved or not to the console
console.log(loved);

// Details of my favourite song as object literal

var myFavouriteSong = {
  name: "One God",
  artist: "Zain Bhikha",
  yearOfrelease: "2011",
  genre:"R&B/Soul",
  durationInSeconds: 367,
  loved:true,
}

// Adding additional property/key to myFavouriteSong object.
myFavouriteSong.youTubeLink = "https://www.youtube.com/watch?v=bKBL9hvBRtA";

// Log my myFavouriteSong object to the console.
console.log(myFavouriteSong);

// Check if a particular property is in my object and log it to console
console.log('name' in myFavouriteSong);   // gives true or false.


// List of some other songs from my favourite artist
var artistOtherSongs = ["Get Up Again","C'mon Everybody", "Mohammed", "Heal the World", "Woman I Love"]

console.log(artistOtherSongs);

// console log the fifth item of the other songs from my favourite artist
console.log(artistOtherSongs[4]);


// Array of objects of details of some other songs from my favourite artist
 
var otherSongsDetails = [{
  name: "Get Up Again",
  artist: "Zain Bhikha",
  yearOfrelease: "2018",
  genre:"R&B/Soul",
  durationInSeconds: 297,
  loved:true,
},

{
  name: "C'mon Everybody",
  artist: "Zain Bhikha",
  yearOfrelease: "2013",
  genre:"R&B/Soul",
  durationInSeconds: 146,
  loved:false,
},

{
  name: "Mohammed",
  artist: "Zain Bhikha",
  yearOfrelease: "2009",
  genre:"R&B/Soul",
  durationInSeconds: 296,
  loved:true,
},

{
  name: "Heal the World",
  artist: "Zain Bhikha",
  yearOfrelease: "2011",
  genre:"R&B/Soul",
  durationInSeconds: 365,
  loved:true,
},

{
  name: "Woman I Love",
  artist: "Zain Bhikha",
  yearOfrelease: "2011",
  genre:"R&B/Soul",
  durationInSeconds: 274,
  loved:true,
},

]


/* console log the array of objects containing details about my favourite artist other songs.*/
console.log(otherSongsDetails);

// get year of release of the third song from the list of objects.
console.log(otherSongsDetails[2].yearOfrelease);




