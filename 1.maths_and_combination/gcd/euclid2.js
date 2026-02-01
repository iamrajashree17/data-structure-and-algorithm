function euclid(a, b) {
    if(b===0) return a;
    else return euclid(b, a%b)
}

console.log(euclid(12, 15))
console.log(euclid(10, 15))
console.log(gcd(12,15))
// node euclid2.js