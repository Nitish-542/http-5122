//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!

// Create a JavaScript object named meObject
var meObject = {
    name: 'Nitish',
    occupation: 'Student',
    age: 24,
    location: 'Scarborough',
    introduce: function() {
        alert ('My name is ' + this.name + ' and I am a ' + this.occupation + '.');
    }
};
 
// Call the method
console.log(meObject.name);
meObject.introduce();
//alert('My name is ' + this.name + ' and I am a ' + this.occupation + '.');

