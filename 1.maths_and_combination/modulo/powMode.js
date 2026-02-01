function powMode(x, n, m) {
    let res = 1;

    while(n >= 1) {
        if(n % 2 === 1) {
            res = (res * x) % m;
            n--;
        } else {
            x = (x*x) % m;
            n /= 2;
        }
    }
    return res % m;
}

// node powMode.js