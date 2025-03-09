/**
 * @param {string} s
 * @return {string}
 */

/**
Approach : two pointer from start and end
step 1 : both pointer move till it find a vowel
step 2 : create a temp and switch , continue till left and write cross
 */
var reverseVowels = function(s) {
    const ss = s.split("")

  const vowels =  new Set(["a","e","i","o","u","A","E",'I','O','U'])
  let left = 0 
  let right = ss.length - 1

  while(left < right){
    if(!vowels.has(ss[left])){
        left++
    }
    if(!vowels.has(ss[right])){
        right--
    }

    if(left<right && vowels.has(ss[left]) && vowels.has(ss[right])){
        //this technique is similar to temp swap value through destructuring
        [ss[left],ss[right]] = [ss[right],ss[left]]
        left++
        right--
    }
   
  }

  return ss.join('')


};