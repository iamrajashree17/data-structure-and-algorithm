/* 441. Arranging Coins
You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. 
The last row of the staircase may be incomplete.
Given the integer n, return the number of complete rows of the staircase you will build.

Example 1:
Input: n = 5
Output: 2
Explanation: Because the 3rd row is incomplete, we return 2.

Example 2:
Input: n = 8
Output: 3
Explanation: Because the 4th row is incomplete, we return 3.
*/

function arrangeCoins(n) {
    let left = 1;
    let right = n; // 8

    while(left <= right) { // 1 <= 8 // 1 <= 3 // 3 <= 3
        let mid = Math.floor((left + right) / 2); // 4 // 2 // 3
        let coins = (mid * (mid + 1)) / 2; // 10 // 3 // 6
       
        if (coins === n) return mid;
        else if (coins < n) left = mid + 1; // 3 < 8 left = 3 // 6 < 8 left = 4;
        else right = mid - 1; // 3 // 2
    }

    return left - 1;
}

let n = 5
console.log(arrangeCoins(n));

n = 8
console.log(arrangeCoins(n));