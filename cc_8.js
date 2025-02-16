//Task 1
function calculateSalary(baseSalary, bonus, taxRate){
    let net = (baseSalary + bonus) - (baseSalary * taxRate)
    return `Net Salary: $${net.toFixed(2)}`
} //Forumla to calculate net

//Test Data
console.log(calculateSalary(5000, 500, 0.1));
console.log(calculateSalary(7000, 1000, 0.15));

