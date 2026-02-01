function gcd(num1, num2) {
    let smallNum = Math.min(num1, num2);

    while (smallNum > 0) {
        if(num1 % smallNum === 0 && num2 % smallNum ===0) break;
        smallNum--;
    }

    return smallNum;
}

console.log(gcd(10,15));