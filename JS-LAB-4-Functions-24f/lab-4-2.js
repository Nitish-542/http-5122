//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
function calculateAverage(a, b, c, d, e) {
    var sum = a + b + c + d + e;
    var average = sum / 5;
    return average.toFixed(1);   
}
// TESTING FUNCTION
console.log(calculateAverage(5, 10, 15, 20, 25)); 


//ALL VARIABLES ARE DECLARED HERE
var HTTP5121 = 85;
var HTTP5122 = 78;
var IXD5106 = 92;
var HTTP5125 = 88;
var HTTP5126 = 74;


var programAverage = calculateAverage(HTTP5121, HTTP5122, IXD5106, HTTP5125, HTTP5125);


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
if (programAverage >= 70) {
    alert("Success! Your average is " + programAverage);
} else {
    alert("Review required. Your average is " + programAverage);
}
