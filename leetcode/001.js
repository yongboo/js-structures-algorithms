// 两数之和

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let len = nums.length
    for(let i = 0; i < len; i++) {
        for(let j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     let len = nums.length
//     for(let i = 0; i < len; i++) {
//         let complement = target - num[i]
//         let idx = nums.lastIndexOf(complement)
//         if (idx > i) {
//             return[i, idx]
//         }
//     }
// };