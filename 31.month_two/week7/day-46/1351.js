/* 1351. Count Negative Numbers in a Sorted Matrix
Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise,
return the number of negative numbers in grid.

Example 1:
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.

Example 2:
Input: grid = [[3,2],[1,0]]
Output: 0
*/

function countNegatives(grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    let row = rows - 1;
    let col = 0;
    let count = 0;

    while(row >= 0 && col < cols) {
        if (grid[row][col] < 0) {
            count += cols - col;
            row--;
        } else {
            col++;
        }
    }
    return count;
}

let grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];
console.log(countNegatives(grid));

grid = [[3,2],[1,0]];
console.log(countNegatives(grid));