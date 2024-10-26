//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 


/**
 * This function checks if the current temperature is safe for dog walking.
 * It expects to receive a number (currentTemp) as a parameter.
 * It returns a boolean value: true if the temperature is safe, false otherwise.
 */
function checkTemp(currentTemp) {
    if (currentTemp > 30 || currentTemp < -10) {
        return false;
    } else {
        return true;
    }
}

var userTemp = prompt("Please enter the current temperature:");
var isSafe = checkTemp(userTemp);

if (isSafe === true) {
    alert("You’re good, have a nice walk!");
} else {
    alert("Yikes! This is no weather for dog walking!");
}
