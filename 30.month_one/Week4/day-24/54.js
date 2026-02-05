/* 54. Spiral Matrix
Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

function spiralOrder(matrix) {
    let left = 0;
    let right = matrix[0].length - 1;
    let top = 0;
    let bottom = matrix.length - 1;

    const result = [];

    while (left <= right && top <= bottom) {
        for (let c = left; c <= right; c++) {
            result.push(matrix[top][c]);
        }
        top++;

        for (let r = top; r <= bottom; r++) {
            result.push(matrix[r][right]);
        }
        right--;

        if (top <= bottom) {
            for (let c = right; c >= left; c--) {
                result.push(matrix[bottom][c]);
            }
            bottom--;
        }

        if (left <= right) {
            for (let r = bottom; r >= top; r--) {
                result.push(matrix[r][left]);
            }
            left++;
        }
    }

    return result;
}

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]

// node 54.js