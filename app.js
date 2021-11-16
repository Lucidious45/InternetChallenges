
function GetPercentage(number, percentage) {
    let res = number * (percentage/100);
   return res;
}

//Triangular Number Sequence
/* his means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on.

Write a function that returns the number of dots when given its corresponding triangle number of the sequence.

Examples
triangle(1) ➞ 1

triangle(6) ➞ 21

triangle(215) ➞ 23220 */

function TriangularNumberSequence(number){
    return number = number * (number + 1)/2;
}


/* Create a function that multiplies two matricies (n x n each). 
[4, 2], [3, 1] 
[5, 6], [3, 8]

4 3 	5 3
2 1	    6 8

[26, 40], [18, 26]
	 
https://edabit.com/challenge/bqF3dphpBEKXE3miC
*/




let a = GetPercentage(100, 50);
let b = GetPercentage(777, 2);
let c = GetPercentage(500, 99);

let d = TriangularNumberSequence(1);
let e = TriangularNumberSequence(6);
let f = TriangularNumberSequence(215);

