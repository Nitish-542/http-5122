// Declare and initialize 7 variables with 7 movie names using var
var movie1 = "The Shawshank Redemption";
var movie2 = "The Godfather";
var movie3 = "The Dark Knight";
var movie4 = "Pulp Fiction";
var movie5 = "Schindler's List";
var movie6 = "Inception";
var movie7 = "Fight Club";

// Create an array to hold the movie variables
var movies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];

// Output all movies using the join() function
console.log("My Top 7 Movies: " + movies.join(", "));

// Declare a variable to store user input
var userChoice;

// Use a do...while loop to validate user input
do {
    userChoice = prompt("Which top 7 movie would you like?\nPick a number: 1-7");

    // Check if the input is a valid number between 1 and 7
    if (userChoice < 1 || userChoice > 7 || isNaN(userChoice)) {
        alert("Please enter a number between 1 and 7!");
    }

} while (userChoice < 1 || userChoice > 7 || isNaN(userChoice));

// Convert to integer
userChoice = parseInt(userChoice);

// Use a switch statement to display the selected movie
switch (userChoice) {
    case 1:
        alert("Number 1 on the list is \"" + movies[0] + "\"");
        break;
    case 2:
        alert("Number 2 on the list is \"" + movies[1] + "\"");
        break;
    case 3:
        alert("Number 3 on the list is \"" + movies[2] + "\"");
        break;
    case 4:
        alert("Number 4 on the list is \"" + movies[3] + "\"");
        break;
    case 5:
        alert("Number 5 on the list is \"" + movies[4] + "\"");
        break;
    case 6:
        alert("Number 6 on the list is \"" + movies[5] + "\"");
        break;
    case 7:
        alert("Number 7 on the list is \"" + movies[6] + "\"");
        break;
    default:
        alert("Something went wrong!");
}

// Output all movies with their number using a for loop with if-else
for (var i = 0; i < movies.length; i++) {
    if (i === 0) {
        console.log("Movie 1: " + movies[i]);
    } else {
        console.log("Movie " + (i + 1) + ": " + movies[i]);
    }
}
