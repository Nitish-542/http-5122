
//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
// Correct team number
var correctTeamNumber = 3;

// Individual variables for each team member's full name
var member1FirstName = "Abhiraj";
var member1FullName = "Abhiraj Abhiraj";

var member2FirstName = "Nitish";
var member2FullName = "Nitish Sharma";

var member3FirstName = "Rohit";
var member3FullName = "Rohit Kumar";

var member4FirstName = "Sumit";
var member4FullName = "Sumit Singh";

//====LOGIC===================
//3. CREATE POPUP BOX FOR TEAM NUMBER
var teamNumber = prompt("Please enter your team number:");

//4. CHECK IF PROVIDED TEAM NUMBER MATCHES THE STORED TEAM NUMBER
if (teamNumber == correctTeamNumber) {
    //5. CREATE POPUP BOX FOR FIRST NAME
    var firstName = prompt("Please enter your first name:");

    //6. CHECK IF PROVIDED FIRST NAME MATCHES ANY OF THE TEAM MEMBERS
    if (firstName === member1FirstName) {
        alert("Welcome, " + member1FullName + "!");
    } else if (firstName === member2FirstName) {
        alert("Welcome, " + member2FullName + "!");
    } else if (firstName === member3FirstName) {
        alert("Welcome, " + member3FullName + "!");
    } else if (firstName === member4FirstName) {
        alert("Welcome, " + member4FullName + "!");
    } else {
        //8. IF THEY DON'T MATCH, POPUP INVALID MESSAGE
        alert("Access denied!");
    }
} else {
    //9. IF TEAM NUMBER DOESN'T MATCH, POPUP INVALID MESSAGE
    alert("Incorrect team number. Access denied!");
}
