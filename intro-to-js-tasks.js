/*
Task-1
You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

Input:
The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

Output:
Print the result.

Sample Input:
1000
700

Sample Output:
300

*/

/*

let moneyIhave = 1000;
let cost = 700;
let moneyReturn = moneyIhave - cost;
console.log(moneyIhave - cost);

*/

/*

Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04

*/


/*

let math = 75.25, biology = 65, chemistry = 80, physics = 35.45, bangla = 99.50;

let average = (math + biology + chemistry + physics + bangla) / 5;

console.log(average.toFixed(2));

*/

/*

Task-3
You task is to divide the given number by 5 and show the remainder as the output.

Input:
The first line of the input contains the number.

Output:
Print the remainder.

Sample Input:
119

Sample Output:
4

*/

/*

let number = 119;
let remainder = number % 5;
console.log(remainder);

*/

/*

Task-4
What will be the result of the following codes:

var a = isNaN(‘11’);

var a = isNaN(2-10);

Explain your answers.

*/

/*

var a = isNaN('11');
console.log(a); //isNaN function tells it's a number or not, after converting it to a number, the string '11' can be converted to the number 11, that's why it will return false. 

var b = isNaN(2 - 10);
console.log(b);// -8 is the number, to it will also return false.

*/