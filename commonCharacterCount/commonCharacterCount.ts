function commonCharacterCount(s1: string, s2: string): number {
    let count = 0;
    let s1Arr = s1.split('');
    let s2Arr = s2.split('');
    let minObj = {};
    let maxLenArr = s1Arr.length >= s2Arr.length ? s1Arr : s2Arr;
    let minLenArr = s1Arr.length <= s2Arr.length ? s1Arr : s2Arr;

    for(let i=0;i<minLenArr.length;i++){
        let cE = minLenArr[i];
        if(!minObj[cE]) minObj[cE] = true;
    }

    
    for(let i=0;i<maxLenArr.length;i++){
        let cE = maxLenArr[i];
        if(minObj[cE]) {
            count++;
            minObj[cE] = false;
        }
    }

    return count;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));