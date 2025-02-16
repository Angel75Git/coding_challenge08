//Task 1
function calculateSalary(baseSalary, bonus, taxRate){
    let net = (baseSalary + bonus) - (baseSalary * taxRate)
    return `Net Salary: $${net.toFixed(2)}`
} //Forumla to calculate net

//Test Data
console.log(calculateSalary(5000, 500, 0.1));
console.log(calculateSalary(7000, 1000, 0.15));

//Task 2
//Using const to begin function expression
const calculateDiscount = function(price, discountRate){
    let finalPrice = price - (price * discountRate);
    return (`Final Price: $${finalPrice.toFixed(2)}`);   
}//Test Data
console.log(calculateDiscount(100, 0.2))
console.log(calculateDiscount(250, 0.15))

//Task 3
//Arrow Function
const calculateserviceFee = (amount, serviceType) => {
    let fee = 0; //Using if else to calculate fee
    if (serviceType === "Premium") 
        fee = amount * .15
    else if (serviceType === "Standard")
        fee = amount * 0.10
    else 
        fee = amount * 0.05
    return (`Service Fee: $${fee.toFixed(2)}`)
}
//Test Data output 30 and  50
console.log(calculateserviceFee(200, "Premium"))
console.log(calculateserviceFee(500, "Standard"))

//Task 4
function calculateRentalCost(days, carType, insurance = false){
    let plans = {"Economy": 40, "Standard": 60, "Luxury": 100}
    if (insurance) 
        return (plans[carType] * days) + (20 * days)
    else  //In case there is no insurance
        return (plans[carType] * days)
}//Test data
console.log(`Total Rental Cost: $${calculateRentalCost(3, "Economy", true)}`)
console.log(`Total Rental Cost: $${calculateRentalCost(5, "Luxury", false)}`)

//Task 5
//Simple function for loan payment
function calculateLoanPayment(principal, rate, time){
    return principal + (principal * rate * time)
}
console.log(`Total payment: $${calculateLoanPayment(1000, 0.05, 2).toFixed(2)}`);
console.log(`Total payment: $${calculateLoanPayment(5000, 0.07, 3).toFixed(2)}`);

//Task 6 Higher Order Function
//function to identify large transactions

function filterLargeTransactions(transactions, filterFunction){
    return transactions.filter(filterFunction)
}
// Function will spit out 1500, 3200, 2500
let transactions = [200, 1500, 3200, 800, 2500];
console.log(filterLargeTransactions(transactions, amount => amount > 1000));

//Task 7
//Closure Function
function createCartTracker(){
    let totalCart = 0
    return function(item){
        totalCart += item;
        return `Total Cart Value: $${totalCart}`;
    }
} //Very similar to Coding Challenge 8 Solution

let cart = createCartTracker();
console.log(cart(20));
console.log(cart(35));

