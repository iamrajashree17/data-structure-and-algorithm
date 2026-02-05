/* 73. Set Matrix Zeroes
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
You must do it in place.

Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
*/

function setZeroes(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    let firstColZero = false;
    let firstRowZero = false;

    for (let c = 0; c < cols; c++) {
        if (matrix[0][c] === 0) firstRowZero = true;
    }

    for (let r = 0; r < rows; r++) {
        if (matrix[r][0] === 0) firstColZero = true;
    }


    for (let r = 1; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] === 0) {
                matrix[0][c] = 0;
                matrix[r][0] = 0;
            }
        }
    }

    for (let r = 1; r < rows; r++) {
        for (let c = 1; c < cols; c++) {
            if(matrix[0][c] == 0 || matrix[r][0] == 0) {
                matrix[r][c] = 0;
            }
        }
    }

    if (firstColZero) {
        for (let r = 0; r < rows; r++) {
            matrix[r][0] = 0;
        }
    }

    if (firstRowZero) {
        for (let c = 0; c < cols; c++) {
            matrix[0][c] = 0
        }
    }
    return matrix;
}

let matrix = [[1,1,1],[1,0,1],[1,1,1]]; // [ [ 1, 0, 1 ], [ 0, 0, 0 ], [ 1, 0, 1 ] ]
setZeroes(matrix);
console.log(matrix);

matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]; // [ [ 0, 0, 0, 0 ], [ 0, 4, 5, 0 ], [ 0, 3, 1, 0 ] ]
setZeroes(matrix);
console.log(matrix);