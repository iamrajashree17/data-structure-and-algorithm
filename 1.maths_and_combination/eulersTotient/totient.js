function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function etf(n) {
    let res = 1;
    for (let i = 2; i < n; i++) {
        if (gcd(i, n) === 1) {
            res++;
        }
    }
    return res;
}



function etf2(n) {
    let result = n;

    for(let i = 2; i * i <= n; i++) {
        if(n%i === 0) {
            while(n % i === 0)
                n = Math.floor(n / i);

            result -= Math.floor(result / i);
            
        }
    }

    if (n > 1)
        result -= Math.floor(result / n);

    return result;
}

console.log(etf(11))
console.log(etf2(11));