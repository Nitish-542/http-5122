// Object with 4 properties and 1 function representing a song by Billie Eilish.
var song = {
    title: "Bad Guy",
    artist: "Billie Eilish",
    releaseYear: 2019,
    genre: "Pop",
    // Function to modify title value
    updateTitle: function (newTitle) {
      song.title = newTitle;
      alert("Title of the song updated to: " + song.title);
    }
  };
  
  // Output the original song object to the console
  console.log("Original song object:", song);
  
  // Prompt the user for input to update the genre property of the song object
  song.genre = prompt("Enter the new genre for the song:", song.genre);
  
  // Prompt the user for input to update the artist property of the song object
  song.artist = prompt("Enter the new artist for the song:", song.artist);
  
  // Call the object's method to update the title property
  song.updateTitle("Bad Guy - Remix");
  
  // Output the modified song object to the console
  console.log("Modified song object:", song);
  