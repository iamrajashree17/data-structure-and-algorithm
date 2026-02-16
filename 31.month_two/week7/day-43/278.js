/* 278. First Bad Version
You are a product manager and currently leading a team to develop a new product. Unfortunately, 
the latest version of your product fails the quality check. Since each version is developed based on the previous version,
 all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one,
which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad.
Implement a function to find the first bad version. You should minimize the number of calls to the API.

Example 1:
Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
Example 2:

Input: n = 1, bad = 1
Output: 1
*/
let bad = 4
function isBadVersion(version) {
    // This is a mock implementation of the API for testing purposes.
    // In a real scenario, this function would be provided by the system.
    return version >= bad; // Assuming version 4 and above are bad for testing.
}
function solution(n) {
    let left = 1;
    let right = n;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (isBadVersion(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

let  n = 5;
console.log(solution(n))

n = 1;
console.log(solution(n))
