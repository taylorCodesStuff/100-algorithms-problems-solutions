function composeRanges(nums: number[]): string[] {
    let rangeOfStringArr: string[] = [];
    let runningRange: number[] = [];
    let isRunningRange: boolean = false;


    for(let i=0;i<nums.length;i++){
        let currElem = nums[i];
        let nextElem = nums[i+1];

        if(currElem + 1 === nextElem) {
            if(isRunningRange) {
                runningRange.push(nextElem);
            } else {
                runningRange.push(currElem);
                runningRange.push(nextElem);
                isRunningRange = true;
            }
        } else {
            isRunningRange = false;
            let stringRange: string;

            if(nextElem === undefined){
                runningRange.push(currElem)
            }
            let rangeCount = runningRange.length;

            if(rangeCount < 2){
                stringRange = buildStringRange([currElem]);
            } else {
                stringRange = buildStringRange([runningRange[0], runningRange[rangeCount - 1]]);
            }

            runningRange = [];
            rangeOfStringArr.push(stringRange);
        }
    }

    return rangeOfStringArr;
}

function buildStringRange(arr: number[]): string {
    let range = `${arr[0]}->${arr[1]}`
    let oneNumRange = arr[0].toString();

    return arr.length < 2 ? oneNumRange : range;
}


console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9])); // ["-1->2", "6->7", "9"]
console.log(composeRanges([-1, 0, 1, 2, 6, 7, 8, 9])); // ["-1->2", "6->9"]
