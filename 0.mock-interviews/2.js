/* Algorithm:
delcare left and right pointers
declare leftMax and rightMax as well
also water variable to trap the water

while loop for left and right
if left is than right then trap water and update leftMax else update water and rightMax;
at the end return the water;
*/

function trapWater(height) {
    let left = 0;
    let right = height.length - 1;

    let leftMax = 0;
    let rightMax = 0;
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax){
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if(height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }

    return water
}

let height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trapWater(height));

height = [4,2,0,3,2,5];
console.log(trapWater(height));
