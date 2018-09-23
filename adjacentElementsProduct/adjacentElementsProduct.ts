function adjacentElementsProduct(inputArray: number[]): number {
    let largestProd = inputArray[0] * inputArray[1];
    
    for(let i=1;i<inputArray.length-1;i++){
        let cE = inputArray[i];
        let nE = inputArray[i+1];
        let prod = cE * nE;
        if(prod > largestProd){
            largestProd = prod;
        }

    }

    return largestProd;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));