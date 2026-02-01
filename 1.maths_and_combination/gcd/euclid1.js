function euclid(a, b) {
    while(a !== b) {
        if(a > b) a = a - b;
        if(b > a) b = b - a;
    }
    return a;
}

console.log(euclid(12, 15))

// node euclid1.js