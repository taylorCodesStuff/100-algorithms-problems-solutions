function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let max = Math.abs(inputArray[0] - inputArray[1]);

    for(let i=1;i<inputArray.length-1;i++){
        let diff = Math.abs(inputArray[i] - inputArray[i+1]);
        max = diff > max ? diff : max;
    }

    return max;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));