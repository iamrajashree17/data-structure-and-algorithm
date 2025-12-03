// ProductOfArray
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function powerOfArray(arr) {
    if (arr.length === 0 ) return 1;
    return arr[0] * powerOfArray(arr.slice(1));
}

console.log(powerOfArray([1,2,3]));
console.log(powerOfArray([1,2,3,4]));

// node powerOfArray.js

// 1 * powerOfArray([2,3])
// 1 * 6
//             2 * powerOfArray([3])
//             2 *  3
//                     3 * powerOfArray([])
//                     3    *    1