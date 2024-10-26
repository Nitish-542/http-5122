//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
//2. Add the required properties to your object.
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
//4. Add your second method and test it.
//5. Create the required output to complete steps 6-10 of the lab.
//6. Once everything is working, tackle the Stretch Goal!


// Create a bank customer object
var bankCustomer = {
    lastName: 'Sharma',
    branchNumber: '1234',
    accountBalance: 500.25,
    interestRate: 1.03, // 3% interest rate
    multipleAccounts: false,
    makeDeposit: function(amount) {
        this.accountBalance += amount;
        return 'Thank you, your current balance is now ' + this.accountBalance.toFixed(2);
    },
    makeWithdrawal: function(amount) {
            this.accountBalance -= amount;
            return 'Thank you, your current balance is now ' + this.accountBalance.toFixed(2);
    },
    addInterest: function() {
        var temporaryInterestRate;
        if (this.multipleAccounts===true) {
            temporaryInterestRate = this.interestRate + 0.005;
        } else {
            temporaryInterestRate = this.interestRate;
        }
        this.accountBalance *= temporaryInterestRate;
        return 'Thank you, your current balance is now ' + this.accountBalance.toFixed(2);
    }

}; 


// Output the account starting balance
console.log('Account starting balance: ' + bankCustomer.accountBalance.toFixed(2));

// Make a deposit of $200
console.log(bankCustomer.makeDeposit(200));

// Make a withdrawal of $75
console.log(bankCustomer.makeWithdrawal(75));

console.log(bankCustomer.addInterest());