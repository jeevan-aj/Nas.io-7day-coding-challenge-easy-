/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 /**
 Approach : two pointer - Non-zero pointer(j) and tracking pointer(i)
 step 1 : loop till non-zero pointer is out the array length
 step 2 : loop till non-zero pointer finds a non-zero value
 step 3 : if non-zero value found and i and j are not at same position swap so that zero comes at right hand
 
  */
 var moveZeroes = function(nums) {
    let i = 0 ; 
    let j = 0 ; 
  const len= nums.length
    while(j<len){
      if(nums[j]!=0){
          if(i!=j){
          let temp = nums[j]
          nums[j] = nums[i]
          nums[i] = temp
          }
          i++
      }
      j++
    }
      
  };