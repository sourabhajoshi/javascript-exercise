// Scenario: A Bank Account System
// Imagine a simple bank account where you can deposit money, but the balance remains private and cannot be accessed directly.

function createBankAccount(initialBal){
    let balance = initialBal; // Private variable
    function deposit(amount){
        if(amount > 0){
            balance = balance + amount;
        }
        return balance;
    }
    return deposit;
}

const myAcc = createBankAccount(100);

console.log(myAcc(50)); //100
console.log(myAcc(150)); //250
