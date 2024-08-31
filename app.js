//Start Assignament No# 1 (Chapter 1-8)


let firstName, lastName;
firstName = "Muhammad"
lastName = "Essa"
var address = "main street"
address= "first street"

console.log(firstName);
console.log(lastName);
console.log(address);

//End Assignament No# 1  (Chapter 1-8)

// ______________________________________________________________________

//Start Assignament No# 2 (Chapter 9-11)

let street = "main bazar" 
let country = "Pakistan";

let maillingAddress = street + " " + country;

console.log(maillingAddress)


//End Assignament No# 2 (Chapter 9-11)

// ______________________________________________________________________

//Start Assignament No# 3 (Chapter 12-15)

const score1 = 45;
const score2 = 15;
const score3 = 50;

let totalScore = "Our Total Score is" + " " + (score1 + score2 + score3)

let avgScore = "Our Average Score is" + " " + (score1 + score2 + score3 / 3)

let plates = 20;
let people = 7;

let remaingPlates = plates % people;

remaingPlates + 1 ;

let message = `There are ${remaingPlates} plates avaiable `

console.log(totalScore);
console.log(avgScore);
console.log(remaingPlates);
console.log(message);


//End Assignament No# 3 (Chapter 12-15)

// ______________________________________________________________________

//Start Assignament No# 4 (Chapter 16-20)

let fruits = ["apples", "orange" ,"pineapple", "mango", 42]
console.log(fruits);
let istFruit = fruits[0];
console.log(istFruit);
fruits[4] = "grapes"
console.log(fruits);


//End Assignament No# 4 (Chapter 16-20)

// ______________________________________________________________________


//Start Assignament No# 5 (Chapter 21-25)

function calculateTotal(subTotal, tax) {
    return subTotal + tax;
}


let order1, order2, order3;
order1 = calculateTotal(100, 15); 
order2 = calculateTotal(200, 30); 
order3 = calculateTotal(300, 45); 

console.log("Order 1 Total:" + order1);
console.log("Order 2 Total:" + order2);
console.log("Order 3 Total:" + order3);

//End Assignament No# 5 (Chapter 21-25)

// ______________________________________________________________________