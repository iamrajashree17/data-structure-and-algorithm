/* Algorithm
First will sort the nums
then for each loop for the nums till n - 2;
declare left and right pointers while loop left and right pointer
check the target maches with the sum
if so push to the results or incremnt the left or right pointer based on the condition
*/

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    let result = [];

    for(let i = 0; i< nums.length - 2; i++) {
        if(i > 0 && nums[i] === nums[i-1]) continue;
        let left = i+1;
        let right = nums.length - 1;

        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if(sum > 0) {
                right--
            } else if(sum < 0) {
                left++
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                while(left < right && nums[left] === nums[left - 1]) left++;
                while(left < right && nums[right] === nums[right + 1]) right--;
            }
        }
    }
    return result;
}

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums))

nums = [0, 1, 1];
console.log(threeSum(nums))

nums = [0,0,0];
console.log(threeSum(nums))
