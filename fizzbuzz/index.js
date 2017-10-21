const number = 64

// try to FizzBuzz
const getFizzBuzazNumbers = OutputFizzBuzz(number);

/**
 * This function judge the input number and display "Fizz" or "Buzz" or "FizzBuzz" or simply number.  
 * @param inputNumber {number}
 */
function OutputFizzBuzz(inputNumber) {

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
            console.log('Number is,' + inputNumber);
        }
    }
}
