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