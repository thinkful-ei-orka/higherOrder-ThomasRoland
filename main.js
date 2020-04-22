'use strict';

//function repeat (fn, n)
//repeat -- loops n times
// each n, call fn
//create hello() goodbye();
function repeat (fn, n) {
    for(let i = 0; i < n; i++) {
        fn();
    }
}

function hello() {
    console.log('Hello world');
}

function goodbye() {
    console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);

function filter(arr, fn) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            newArr.push(arr[i]);
        }
    }
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;

    return function (location) {
        warningCounter++;
        console.log(`DANGER! there is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const floodsWarning = hazardWarningCreator('Flooding nearby');
const pokemonWarning = hazardWarningCreator('Pokemon in tall grass');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
floodsWarning('I-95');
floodsWarning('Capitol Hill');
pokemonWarning('Route-19');

//turtle steps: [3, 4] <-- steps forward, steps left
let turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

let stepFilter = turtleSteps.filter(step => step[0] >= 0 && step[1] >= 0);
let stepTotal = turtleSteps.map(steps => Math.abs(steps[0]) + Math.abs(steps[1]));
let stepCount = 1;
stepTotal.forEach(move => {
    let message =`Movement #${stepCount}: ${move} step`;
    if (move > 1 || move === 0) {
        message += 's';
    }
    stepCount++;
    console.log(message);
});

/*
[[0, 0],  <-- [0, 0]
 [0, 5],        -> 0
 [-1, -3],      -> 0
 [-3, 1],
 [2, -4],
 [3, 2]]
*/

let decodeString = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
let strSplit = decodeString.split(' ');
let message = strSplit.reduce((acc, word) => {
    if (word.length === 3) {
        return acc += ' ';
    } else {
        return acc += word[word.length - 1].toUpperCase();
    }
}, '');

console.log(message);