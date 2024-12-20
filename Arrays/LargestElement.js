/*
Given an array of integers nums, return the value of the largest element in the array.

Example 1
Input: nums = [3, 3, 6, 1]

Output: 6

Explanation: The largest element in array is 6

--------------------------------------------------------------

Example 2
Input: nums = [3, 3, 0, 99, -40]

Output: 99

Explanation: The largest element in array is 99


--------------------------------------------------------------

Example 3
Input: nums = [-4, -3, 0, 1, -8]

Output : 1
--------------------------------------------------------------


*/

class Solution {
  largestElement(nums) {
    /*
    let largest = nums[0];
    for (const num of nums) {
        if(num > largest) {
            largest = num;
        }
    }
    return largest
    */
   
    // Approach 2
    return nums.sort((a,b) => b-a)[0]
  }
}

const solution = new Solution();
const result = solution.largestElement([3, 3, 6, 1]);
console.log(result);
