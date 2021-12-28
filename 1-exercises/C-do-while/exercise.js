/*
    Sometimes when using loops, we'll want to execute the body of the loop at least once. We can make sure this happens by using a do-while loop.
        - If the condition in a while loop is initially false, the body of the loop will never execute
        - In a do-while loop, because the condition is checked after the body, we know that it will always execute at least once
    
    In the below example, we want to keep calling the random number generator until we get a value that is > 50.
    Implement this using a do-while loop.
*/

function generateRandomNumber() {
    console.log("Generating number...");
    return Math.round(Math.random() * 100);
}

function getRandomNumberGreaterThan50() {
    // TODO
}

// should always output a number greater than 50
console.log(getRandomNumberGreaterThan50());
console.log(getRandomNumberGreaterThan50());
console.log(getRandomNumberGreaterThan50());
console.log(getRandomNumberGreaterThan50());
console.log(getRandomNumberGreaterThan50());
