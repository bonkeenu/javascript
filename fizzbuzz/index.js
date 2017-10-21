// try to FizzBuzz
const number = -321;
OutputFizzBuzz(number);

/**
 * This function judge the input number and display "Fizz" or "Buzz" or "FizzBuzz" or simply number.  
 * @param inputNumber {number}
 */
function OutputFizzBuzz(inputNumber) {

    // string to int
    inputNumber = Number(inputNumber);
    // validate input number
    const isCorrectNum = checkCorrectNumber(inputNumber);
    if (isCorrectNum) {
        for (inputNumber; inputNumber <= 100; inputNumber++) {

            if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
                console.log("FizzBuzz");
            }
            else if (inputNumber % 3 === 0) {
                console.log("Fizz");
            }
            else if (inputNumber % 5 === 0) {
                console.log("Buzz");
            }
            else {
                console.log('Number is： ' + inputNumber);
            }
        }
    }
}

/**
 * find the inport number of uncorrect 
 * @param {number}
 * @return {boolean}
 */
function checkCorrectNumber(checkNum) {
    // imput number can not has flot
    if (Math.round(checkNum) !== checkNum) {
        console.log('Error ： Please imput a number of integer');

        return false;
    }

    // input number can only has 1 to 100 number of integer
    if (0 > checkNum || checkNum > 100) {
        console.log('Error ： Please input number of 1~100 and integer');

        return false;
    }
    return true;
}
