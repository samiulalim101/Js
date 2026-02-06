/**

Free Drinks
    - Burger more than 500tk: free Coke
 
    - Else Coke: 30tk
*/
/*
let burgerPrice = 510;
let cokePrice = 30;

if(burgerPrice > 500){
    cokePrice = 0;
}

console.log("Coke is", cokePrice, "tk");

*/

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

/*
let weightInKg = 60;
let heightInMiter = 1.82;

let bmi = (weightInKg / heightInMiter ** 2).toFixed(2);
let message;

if(bmi < 18.5){
    message = "You are underweight";
}
else{
    if(bmi >= 18.5 && bmi <= 24.9){
        message = "You are normal";
    }

    else if(bmi >= 25 && bmi <= 29.9){
        message = "You are overweight";
    }
    
    else{
        message = "You are obese";
    }
}
console.log(bmi, message);

*/

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

/*
let number = 98;
let grade;
if(number >= 90 && number <= 100){
    grade = "A";
}

else if(number >= 80 && number <= 89){
    grade = "B";
}

else if(number >= 70 && number <= 79){
    grade = "C";
}

else if(number >= 60 && number <= 69){
    grade = "D";
}

else if(number >= 0 && number <= 59){
    grade = "F";

}

else{
    grade = "Invalid";
}

console.log(number, grade);

*/

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/


/*
let myMark = 90;
let frindsMark = 89;
let message;

if(myMark > 80){
    if(frindsMark > 80){
        message = "Let's go for a lunch.";
    }
    else if(frindsMark < 80 && frindsMark >= 60){
        message = "Good luck for the next time";
    }
    else if(frindsMark < 60 && frindsMark >= 40){
        message = "Unseen message";
    }
    else if(frindsMark < 40){
        message = "Block"
    }
}
else{
    message = "go home and sleep";
}

console.log(message);

*/

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */


/*
let num1 = 9, num2 = 22;
let result = num1 > num2 ? num1 * 2 : num1 + num2;
console.log(result);
*/

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 60;
let ticketPrice = 800;
let discount = 0;
if(age < 10){
    discount = ticketPrice;
}

else if(age > 10 && age < 20){
    discount = ticketPrice * 0.5;
}

else if( age >= 60){
    discount = ticketPrice * (15 / 100);
}

else{
    discount = 0;
}
ticketPrice = ticketPrice - discount;
console.log(ticketPrice);
