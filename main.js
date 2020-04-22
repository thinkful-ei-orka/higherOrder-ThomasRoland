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

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

console.log(filter(myNames));