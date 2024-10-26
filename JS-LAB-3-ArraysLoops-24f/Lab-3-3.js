//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var shoppingCart = [];
var total = 0;
var threshold = 35;

//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while (total < threshold) {
	//GET ITEM COST FROM USER
	//CONVERT USER INPUT TO A NUMBER
    var itemPrice = parseInt(prompt("Enter the price of the item:"));
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
    total += itemPrice;
	//PUSH ITEM COST TO CART ARRAY
    shoppingCart.push(itemPrice);
}
	
	
	
//SEND POPUP MESSAGE TO USER
alert("Your shipping for this order will be free!");

//SEND OUTPUT TO CONSOLE

var message = "Item prices: ";
for (var i = 0; i < shoppingCart.length; i++) {
    message += shoppingCart[i];
    if (i < shoppingCart.length - 1) {
        message += " | ";
    }
}

console.log(message);
