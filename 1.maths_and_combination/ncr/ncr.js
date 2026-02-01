function ncr1(n, r) {
    if(r > n) return 0;
    if(r === 0 || r===n) return 1;


    return ncr1(n-1, r-1) + ncr1(n-1,r)
}

// [Better Approach - 1] Using Factorials - O(n) Time and O(1) Space
// The formula for nCr is n! / (r!(n-r)!).
// We can compute the factorial of n, r, and (n-r) separately and then apply the formula to get the result.
// This approach is more efficient than the recursive method, especially for larger values of n and r,
// as it avoids the exponential time complexity of recursion by using direct calculations.

function fact(n) {
    let res = 1;
    for(let i = 2; i <=n; i++) {
        res *= i;
    }
    return res;
}

function ncr2(n, r) {
    if(r > n) return 0;

    return fact(n) / (fact(n-r) * fact(r));
}

// [Better Approach - 2] Avoiding Factorial Computations - O(n) Time and O(1) Space
// The formula for nCr is n! / (r!(n-r)!).
// Instead of computing full factorials, we avoid redundant calculations by recognizing that r! and (n-r)! share common terms that cancel out.
// To optimize, we compute the product of numbers from r+1 to n and divide it by the product of numbers from 1 to (n-r).
// Here, r is chosen as the maximum of r and (n-r) to reduce the number of multiplications.
// This approach avoids large factorial values, reducing computational overhead and preventing integer overflow.

// Note: This approach may produce incorrect results due to integer overflow when handling large values of n and r.


function multiplier(s, e) {
    if(s === e) return s;

    let res = 1;
    while(s <= e) {
        res *= s;
        s++;
    }
    return res;
}


function ncr3(n, r) {

    if(r > n) return 0;
    if(r === n || r === 0) return 1;

    let max = Math.max(r, n - r);
    let min = Math.min(r, n - r);

    let num = multiplier(max + 1, n);
    let denom = multiplier(1, min);

    return Math.round(num/denom);
}

// [Expected Approach] By using Binomial Coefficient formula - O(r) Time and O(1) Space
// A binomial coefficient C(n, k) can be defined as the coefficient of Xk in the expansion of (1 + X)n.
// A binomial coefficient C(n, k) also gives the number of ways, disregarding order, that k objects can be chosen from among n objects; more formally, the number of k-element subsets (or k-combinations) of an n-element set.
// Iterative way of calculating nCr   using binomial coefficient formula.

function ncr4(n, r) {
    let sum = 1;

    for(let i = 1; i <= r; i++) {
        sum = sum * (n - r + i) / i;
    }

    return Math.floor(sum);
}

console.log(ncr1(5, 2)); // 10
console.log(ncr2(5, 2)); // 10
console.log(ncr3(5, 2)); // 10
console.log(ncr4(5, 2)); // 10