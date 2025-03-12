/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map()

    arr.map((cur)=> {
        if(map.has(cur)){
            let count = map.get(cur)
            map.set(cur,count+1)
        }
        else{
            map.set(cur,1)
        }
    })
  
  const occurence = new Set()
  for(let i of map.values()){
    if(occurence.has(i)){
        return false
    }
    occurence.add(i)
  }

return true
    
};