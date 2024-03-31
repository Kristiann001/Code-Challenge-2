// Defining the arrays of numbers
let numbers = [16, 17, 18, 19, 20, 21];

numbers.forEach((number) => {
    let myPrime = true;
  
    if (number <= 1) {
        return myPrime = false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                myPrime = false;
                break;
            }
        }
    }
    // Check if the number is a prime number
    if (myPrime) {
        console.log(number + ' is Prime');
    } else {
        console.log(number + ' is not Prime');
    }
});
