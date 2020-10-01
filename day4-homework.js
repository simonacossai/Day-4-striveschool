/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/
const area = (l1, l2)=> l1*l2 ;
console.log(area(2,3));

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/
let num1= 6;
let num2=6;

const crazySum=(num1, num2)=>{
    const result = (num1===num2)? (num1+num2)*3 : null;
    return result;
}
console.log(crazySum(num1, num2));

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/
let num= 19;
let givenNumber= 40;
const crazyDiff=(givenNumber, num)=>{
    const difference = givenNumber -num;
    if(givenNumber>19){
        return difference * 3;
    }
}
console.log(crazyDiff(givenNumber, num));

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

const boundary=(N)=>{
    if(N>20 && N<100 || N===400){
        return true;
    }else{
        return false;
    }
}
console.log(boundary(400));



/* EXERCISE 5
Write a function "strivify" which accepts a string S.
 Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/
/* WRITE YOUR CODE HERE */



/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
/* WRITE YOUR CODE HERE */
const check3and7=(number)=>{
    if(number%3===0 && number%7===0){
        return "multiple of both"
    }else if(number%7===0){
        return "multiple of 7"
    }else if(number%3===0){
        return "multiple of 3"
    }else{
        return "it's not a multiple of 3 or 7"
    }
}
console.log(check3and7(35));

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/
/* WRITE YOUR CODE HERE */
const reverseString=(givenString)=>{
    return givenString.split("").reverse().join("");
}
console.log(reverseString("hello"));
/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/
/* WRITE YOUR CODE HERE */
const upperFirst=(parameterString)=>{
    let splitString = parameterString.toLowerCase().split(' ');
    for (let i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);     
    }
        return splitString.join(' '); 
}
console.log(upperFirst("i am capitalizing the first letters of this sentence"));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.*/
/* WRITE YOUR CODE HERE */
const cutString=(givenWord)=>{
    let splitWord= givenWord.split("");
    splitWord.pop();
    splitWord.shift();
    return splitWord
}
console.log(cutString("Array"));

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
