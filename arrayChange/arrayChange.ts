function arrayChange(inputArray: number[]): number {
    let arr = inputArray;
    let moves = 0;
    for(let i=0;i<arr.length-1;i++){
        let currElem = arr[i];
        let nextElem = arr[i+1];
        if(nextElem <= currElem){
            let absDiff = Math.abs(nextElem - currElem);
            let move = absDiff + 1
            arr[i+1] += move;
            moves += move;
        }
    }

    return moves;
}

console.log(arrayChange([1, 1, 1]));