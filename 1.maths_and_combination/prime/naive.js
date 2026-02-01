// Basic Primality Check: To check if a number n is prime, try dividing it by numbers from 2 to n-1. 
// If any number divides it, then n is not prime; otherwise, it is.


// Step-by-step explanation
// 1. Check if the number is 0 or 1
// if (n <= 1)
//     return false;
// 0 and 1 are not prime numbers
// So the function immediately returns false

// 2. Check if the number is 2 or 3
// if (n === 2 || n === 3)
//     return true;
// 2 and 3 are prime
// No need to check further

// 3. Check if the number is divisible by 2 or 3
// if (n % 2 === 0 || n % 3 === 0)
//     return false;
// If a number can be divided by 2 or 3, it is not prime
// This quickly removes many non-prime numbers

// 4. Check other possible divisors
// for (let i = 5; i <= Math.sqrt(n); i += 6)
//     if (n % i === 0 || n % (i + 2) === 0)
//         return false;

function isPrime(n) {
    if(n<= 1) return false;

    if(n==2 || n==3) return true;

    // check if n is divisiblt by 2 and 3
    if(n%2 === 0 || n%3 === 0) return false;


    for(let i = 5; i<=Math.sqrt(n); i+=6) {
        if(n % i === 0 || n % i+2 === 0) return false;
    }

    return true;
}


console.log(isPrime(11)); // true
console.log(isPrime(15)); // false
console.log(isPrime(2));  // true
console.log(isPrime(1));  // false
console.log(isPrime(25)); // true

// node naive.js