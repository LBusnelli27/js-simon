// ********** FUNCTION **********

/**
 * This function generate unique number so it don't generate a number twice
 * 
 * @param {*} numsBlacklist The blacklist of numbers to check
 * @param {*} min Minimum value
 * @param {*} max Maximum value
 * @returns A random generated integer which is not present in the blacklist
 */
function generateUniqueRandomNumber(numsBlacklist, min, max){
    let check = false;
    let randomInt;

    while ( !check ){
        randomInt  =  Math.floor(Math.random() * ((max + 1) - min) + min);
        if ( !numsBlacklist.includes(randomInt)  ){
            check = true;
        }
    }

    return randomInt;
}

// ********** END FUNCTION **********


const listOfNumbers = document.getElementById('list-number');
const scoreParagraph = document.getElementById('score-p');

let numbersArray = [];

for(let i = 0; i < 5; i++) {
    let currentNumber = generateUniqueRandomNumber(numbersArray, 1, 100);
    numbersArray.push(currentNumber);

    listOfNumbers.innerHTML += `<p>${currentNumber}</p>`
}

console.log(numbersArray);

setTimeout(() => {
    listOfNumbers.innerHTML = "";

    let points = 0;
    for (let index = 0; index < 5; index++) {
        let inputUserNumbers = parseInt(prompt("Insert the numbers that you remember"));
        if(numbersArray.includes(inputUserNumbers)) {
            points++;
        }
    }

    scoreParagraph.innerHTML = `You totalized ${points} points`
}, 30000);
