/* 74. Search a 2D Matrix
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.
Example 1:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
*/

function searchMatrix(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;

    let left = 0;
    let right = (m * n) - 1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        let row = Math.floor(mid/n);
        let col = mid % n;

        if(matrix[row][col] === target) return true;
        if(matrix[row][col] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
console.log(searchMatrix(matrix, target));

matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
console.log(searchMatrix(matrix, target));
