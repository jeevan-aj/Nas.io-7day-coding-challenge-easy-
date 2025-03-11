/**
 * @param {number[]} gain
 * @return {number}
 */


/** 
solution prefix sum method:
we need highest = 0 ,sum = 0  variables
We  iterate through gain,
we add curentvariable to sum if sum is greater than highest 
sum gets assigned to highest */


var largestAltitude = function(gain) {
    let highest = 0 
    let start = 0 
    let current = 0 
    for(let i = 0 ; i < gain.length ; i++){
        current += gain[i]
        if(current>highest) highest = current
        
    }

    return highest
};