/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 /** 

 Approach : Sliding window
 first calculate the sum of first k numbers  and assign it to sum
 start i from k till k < nums.length. in each iteration calculate sum of current k elements 
 by adding curent k to curent sum and  subracting one from end (i-k)

eg: curentSum += nums[i] - nums[i-k]
    1,2,3,4,5,6
    10 += 5 - 1 ==  10+5 - 1 == 14
    14 += 6 - 2 == 14+6 - 2 = 18

in each iteration if curentSum greater than maxSum the replace

at end return maxSum/k
 */
 
var findMaxAverage = function(nums, k) {
    // Calculate the sum of the first k elements
   let maxSum = 0;
   for (let i = 0; i < k; i++) {
       maxSum += nums[i];
   }

   let currentSum = maxSum;

   // Iterate over the array starting from the k-th element
   for (let i = k; i < nums.length; i++) {
       // Update the sum by sliding the window
       currentSum += nums[i] - nums[i - k];
       // Update the maximum sum if the current sum is greater
       if (currentSum > maxSum) {
           maxSum = currentSum;
       }
   }

   // Return the maximum average
   return maxSum / k;
   
};