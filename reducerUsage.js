/* Introduction of reducer() function
The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value. source

The reduce() method reduces all the elements in an array into a single output value. The output value can be a number, object, or string. reduce() method has two arguments. The first one is a callback function and the second one is the initial value.

Callback function
The callback function is executed on each element of the array. The return value of the callback function is accumulated result and provided as an argument in the next call to the callback function. The callback function takes four arguments.

Accumulator
The accumulator accumulates return value of the callback function.

Current Value
The current element of the array is processed.

Current Index
The index of the current element of the array is processed.

Source Array
The array reduce() was called upon.

The Current Index and Source Array are optional.
Initial value
If the initial value is specified, the accumulator is set initialValue as the initial element. Otherwise, the accumulator is set as the first element of the array as the initial element.
arr.reduce(callback(accumulator, currentValue[,index[,array]])[, initialValue])

In the below code fragment, first accumulator is assigned the initial value 0. The currentValue is the element of the numbersArr array being processed. Here, currentValue is added to the accumulator. The return value is provided as an argument in the next call to the callback function.

*/
//Sum all the values of an array
const studentResult = [67, 90, 100, 37, 60];

const total = studentResult.reduce((accumulator, currentValue) => accumulator +currentValue, 0);

console.log(total);

//Sum of values in an object array
const studentResult = [
    { subject: 'Maths', marks: 78 },
    { subject: 'Physics', marks: 80 },
    { subject: 'Chemistry', marks: 93 }
];

const total = studentResult.reduce((accumulator, currentValue) => accumulator + currentValue.marks, 0);

console.log(total);

//Flatten an array of arrays
const twoDArr = [ [1,2], [3,4], [5,6], [7,8] , [9,10] ];

const oneDArr = twoDArr.reduce((accumulator, currentValue) => accumulator.concat(currentValue));

console.log(oneDArr);

//Grouping objects by a property
const result = [
    {subject: 'Physics', marks: 41},
    {subject: 'Chemistry', marks: 59},
    {subject: 'Pure Maths', marks: 36},
    {subject: 'Applied Maths', marks: 90},
    {subject: 'English', marks: 64},
];

let initialValue = {
    pass: [], 
    fail: []
}

const groupedResult = result.reduce((accumulator, current) => {
    (current.marks>=50) ? accumulator.pass.push(current) : accumulator.fail.push(current);
    return accumulator;
}, initialValue);

console.log(groupedResult);

//Remove duplicates in an array
const duplicatedsArr = [1, 5, 6, 5, 7, 1, 6, 8, 9, 7];

const removeDuplicatedArr = duplicatedsArr.reduce((accumulator, currentValue) => {
    if(!accumulator.includes(currentValue)){
        accumulator.push(currentValue);
    }
    return accumulator;
}, []);

console.log(removeDuplicatedArr);
//output [ 1, 5, 6, 7, 8, 9 ]

//Counting Occurrences of Items in an Array Using reduce()

const fruits = [ 'Banana', 'Orange', 'Apple', 'Orange', 'Pear', 'Banana']
const occurrences = fruits.reduce((acc, currFruit) => {
    return {...acc, [currFruit]: (acc[currFruit] || 0) + 1 }
}, {})
console.log(occurrences)
/* 
{ 
Apple: 1, 
Banana: 2, 
Orange: 2, 
Pear: 1 
} 
*/

//Converting Between Types Using reduce()
const students = [
    { name: "Kingsley", score: 70 },
    { name: "Jack", score: 80 },
    { name: "Joe", score: 63 },
    { name: "Beth", score: 75 },
    { name: "Kareem", score: 59 },
    { name: "Sarah", score: 93 }
]
const names = students.reduce((acc, student) => [...acc, student.name], [])
console.log(names)
// Prints ["Kingsley", "Jack", "Joe", "Beth", "Kareem", "Sarah"]

const studentsArray = [
    { name: "Kingsley", score: 70, position: "1st" },
    { name: "Jack", score: 80, position: "2nd" },
    { name: "Joe", score: 63, position: "3rd" },
    { name: "Beth", score: 75, position: "4rd" },
    { name: "Kareem", score: 59, position: "5th" },
    { name: "Sarah", score: 93, position: "6th" }
]
const studentObj = studentsArray.reduce((acc, student) => {
	return {...acc, [student.name]: student.position}
}, {})
console.log(studentObj)
/* 
{ 
Beth: "4rd", 
Jack: "2nd", 
Joe: "3rd", 
Kareem: "5th", 
Kingsley: "1st", 
Sarah: "6th" 
} 
*/

//Getting Max and Min Values From an Array Using reduce()

const students = [
    { name: "Kingsley", score: 70 },
    { name: "Jack", score: 80 },
    { name: "Joe", score: 63 },
    { name: "Beth", score: 75 },
    { name: "Kareem", score: 59 },
    { name: "Sarah", score: 93 }
]
const max = students.reduce((acc, student) => {
    if(acc === null || student.score > acc) 
        return student.score
    return acc
}, null)
console.log(max) // Prints 93
const min = students.reduce((acc, student) => {
    if (acc === null || student.score < acc) {
        return student.score
    } 
    return acc
}, null)
console.log(min) // Prints 59
