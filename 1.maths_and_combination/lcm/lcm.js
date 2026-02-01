function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}


function lcm(a,b) {
    return (a * b) / gcd(a, b);
}


console.log(lcm(10, 5));
console.log(lcm(2, 8));