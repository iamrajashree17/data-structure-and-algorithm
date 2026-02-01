// [Approach - 1] Division by 2 - O(log₂(n)) Time and O(log₂(n)) Space
// To convert a decimal number to binary, repeatedly divide it by 2 and record the remainders. 
// Reading these remainders in reverse gives the binary representation.

function decToBinary1(n) {
    let res = [];
    while(n > 0) {
        let rem = n % 2;
        res.push(rem);
        n = Math.floor(n / 2);
    }
    res.reverse();
    return res.join('');
}

function decToBinary2(n) {
    return n.toString(2);
}

function decToBinary(n, bin) {
    if(n === 0) return;

    decToBinary(Math.floor(n / 2), bin);

    bin.push(n % 2);
}

function decToBinary3(n) {
    let bin = [];
    decToBinary(n, bin);
    return bin.join('');
}

console.log(decToBinary1(10)); // 1010
console.log(decToBinary2(10)); // 1010
console.log(decToBinary3(10)); // 1010

// node dec_bin.js