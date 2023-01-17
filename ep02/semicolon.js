/**
 *
 *
 * semicolon ( ; )
 */
let name = 'Leonardo' // no semicolon but new line
let surName = 'Rivaldo' // Semicolon omitted here
    ;[5, 3, 3, 1].forEach(e => console.log(e)) // Defensive ; keeps this statement separate
console.log([5, 2, 3, 4].reduce((p, n) => p += n, 0));
console.log("-----------");





/** exceptions */
// return and throw
function sum(a, b) {
    if (!a || !b) {
        throw new Error('missing a parameter');
    }


    return a + b;
}
console.log('2 + 2 :', sum(2, 2));


















/** IMPORTANT!
 *
 *
 *
 */

// whrote this
function foo() {
    return
    'bar';
}

//JS assumed this;
function foo2() {
    return; 'bar2';
}

//probably wanted this
function foo3() {
    return 'bar3';
}











console.log("-----------\nYield");




//Yield
function* nextPlayer(players) {
    while (players.length) {
        yield players.pop();
    }
}


let plays = 9;
let isOver = false;
let players = nextPlayer(['o', 'x']);
do {
    const round = players.next();

    if (plays === 0) {
        isOver = true;
        continue;
    }

    if (round.done) {
        players = nextPlayer(['o', 'x']);
        continue;
    }

    console.log('player turn:', round.value);
    console.log('plays:', plays);
    plays--;
} while (!isOver || plays > 0);



















console.log("-----------\nbreak");
//break
let last;
for (let i = 0; i <= 10; i++) {
    console.log({ i });

    if (i == 5) {
        last = i;
        break;
    }
}

console.log('sai no: ', last);





// ++ or --
let counter = 0;

//CERTO
--counter;
++counter;
counter--;
counter++

//ERRADO
/*
--
counter // --counter
counter // counter++
++
*/




// arrow functions

//CERTO
const foo = () => console.log("bar"); //same line
const foo2 =
    () => console.log("bar2"); //same line


/* ERRADO
const foo3 = ()
    => console.log("bar3");
*/






































