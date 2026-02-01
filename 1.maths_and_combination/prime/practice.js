function isPrime(n) {
    if(n <= 1) return false;

    if(n==2 || n==3) return true;

    if(n%2==0 || n%3==0) return false;

    for(let i = 5; i<=Math.sqrt(n); i+=6) {
        if(n % i === 0 || n % i+2 === 0) return false;
    }

    return true;
}


function sieve(n) {
    let prime = new Array(n+1).fill(true);

    prime[0] = prime[1] = false;

    for (let i = 2; i*i <= n; i++) {
        if (prime[i]) {
            for(let j = i*i; j<=n ; j+=i) {
                prime[j] = false;
            }
        }
    }

    let res = [];
    for(let i = 2; i<=n; i++) {
        if(prime[i]) res.push(i);
    }

    return res;
}

console.log(isPrime(25)); // false
console.log(sieve(20));