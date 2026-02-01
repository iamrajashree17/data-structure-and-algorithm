
// Sieve of Eratosthenes: The Sieve of Eratosthenes is an efficient algorithm to find all prime numbers up to a given number n.

// Note: It is much faster than checking each number individually using the basic method.
function sieve(n) {
    let prime = new Array(n + 1).fill(true);

    prime[0] = prime[1] = false;

    for(let i = 2; i * i <= n; i++) {
        if (prime[i]) {
            for(let j = i * i; j <= n; j+=i) {
                prime[j] = false;
            }
        }

    }
    let res = [];

    for (let p = 2; p <= n; p++) {
        if (prime[p]) {
            res.push(p);
        }
    }

    return res;
}

console.log(sieve(30)); // true


// node efficient.js