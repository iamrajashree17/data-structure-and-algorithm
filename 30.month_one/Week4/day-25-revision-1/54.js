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

    const res = [];

    while (top <= bottom && left <= right) {
        for (let c = left; c <= right; c++) {
            res.push(matrix[top][c]);
        }
        top++;

        for(let r = top; r <= bottom; r++) {
            res.push(matrix[r][right]);
        }
        right--;


        if (top <= bottom) {
            for(let c = right; c >= left; c--) {
                res.push(matrix[bottom][c]);
            }
            bottom--;
        }

        if(left <= right) {
            for(let r = bottom; r >= top; r--) {
                res.push(matrix[r][left]);
            }
            left++;
        }
    }
    return res;
}

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]

// node 54.js