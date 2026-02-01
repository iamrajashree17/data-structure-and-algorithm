
function factorsOfNumber(n) {
    let divisors = [];
    for(let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if(n / i === i) {
                divisors.push(i);
            } else {
                divisors.push(i);
                divisors.push(n / i);
            }
        }
    }

    return divisors;
}

console.log(factorsOfNumber(100)); // [ 1, 10, 2, 5 ]
console.log(factorsOfNumber(6));
// node factors.js