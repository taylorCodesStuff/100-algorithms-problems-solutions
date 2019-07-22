function containsCloseNums(nums: number[], k: number): boolean {
    let obj = {};

    for(let i=0;i<nums.length;i++){
        if(!obj.hasOwnProperty(nums[i])){
            obj[nums[i]] = i;
        } else {
            let indexDiff = Math.abs(obj[nums[i]] - i);
            if(indexDiff <= k) return true;
        }
    }
    
    return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3)); // true
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2)); // false