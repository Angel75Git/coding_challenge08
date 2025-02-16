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