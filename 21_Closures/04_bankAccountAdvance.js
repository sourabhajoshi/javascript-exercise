// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

function personAccount(fname, lname, income, expense){
    let firstname = fname, lastName = lname, incomes = income, expenses = expense;

    function totalIncome(){
        return `my total income is ${incomes}`;
    }

    function accountInfo(){
        return `Account Details: 
                Name : ${firstname} ${lastName}`;
    }

    function addIncome(amount){
        return `Updated income is : ${amount + incomes}`;
    }

    // function addExpense(amount){
    //     if()
    // }
}