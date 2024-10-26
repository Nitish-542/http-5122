//====VARIABLES===============
// 2. CREATE NECESSARY VARIABLES
var movie1 = "Inception";
var movie2 = "The Matrix";
var movie3 = "Interstellar";
var movie4 = "The Dark Knight";
var movie5 = "3 Idiots";
var movie6 = "Lagaan";
var movie7 = "Sholay";

var topMovies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];

//====LOGIC===================
// 3. ASK THE USER TO PICK A MOVIE NUMBER
var userInput = prompt("Which top 7 movie would you like? Pick a number: 1-7");

// 4. VALIDATE THE USER INPUT WITH A WHILE LOOP
while (true) {
    var movieIndex = parseInt(userInput);
    
    // 5. CHECK IF THE INPUT IS VALID (NUMBER BETWEEN 1 AND 7)
    if (!isNaN(movieIndex) && movieIndex >= 1 && movieIndex <= 7) {
        // 6. IF VALID, SHOW THE SELECTED MOVIE
        alert("Number " + movieIndex + " on the list is " + topMovies[movieIndex - 1]);
        break; // Exit the loop once valid input is given
    } else {
        // 7. IF INVALID, PROMPT AGAIN UNTIL VALID INPUT IS ENTERED
        alert("Please enter a number between 1 and 7!");
        userInput = prompt("Which top 7 movie would you like? Pick a number: 1-7");
    }
}

// 8. OUTPUT ALL MOVIES WITH THEIR NUMBER TO THE CONSOLE
for (var i = 0; i < topMovies.length; i++) {
    console.log("Movie " + (i + 1) + ": " + topMovies[i]);
}
