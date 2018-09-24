function allLongestStrings(inputArray: string[]): string[] {
    let largStrLen = inputArray[0].length;
    
    for(let i=1;i<inputArray.length;i++){
        let currentLength = inputArray[i].length;
        largStrLen = currentLength > largStrLen ? currentLength : largStrLen;
    }

    let arr = [];
    for(i=0;i<inputArray.length;i++){
        let currElem = inputArray[i];
        let currElemLen = inputArray[i].length;
        if(currElemLen === largStrLen) arr.push(currElem);
    }

    return arr;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));