function arrayConversion(inputArray: number[]): number {

    let isFinished = false;
    let j = 0;
    while(!isFinished) {
       
        let newArr = [];
        
        if(j % 2 === 0){
            // 1, 3, 5 = sum elems
            for(let i=0;i<inputArray.length-1;i+=2){
                let sum = inputArray[i] + inputArray[i+1];
                 newArr.push(sum);
            }
        } else {
            // 2, 4, 6 = multiply elems
            for(let i=0;i<inputArray.length-1;i+=2){
                let prod = inputArray[i] * inputArray[i+1];
                 newArr.push(prod);
            }
        }
        
        j++;
        inputArray = newArr;
        if(inputArray.length === 1){
            isFinished = true;
        }
    }

    return inputArray[0];
    
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8])); // 186

// We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186], so the answer is 186.
