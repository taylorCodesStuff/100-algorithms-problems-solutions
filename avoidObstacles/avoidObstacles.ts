function avoidObstacles(inputArray: number[]): number {
    // O(n^2) solution
    // Instead of sorting the array, we loop through and find the max value 
    // Could we do better? Maybe O(n) solution?
    let max = -10000;
    inputArray.forEach(num => {
        max = num > max ? num : max; 
    });
    
    let lastPossibleJump = max + 1;
    let i = 2;
    
    while(i < lastPossibleJump){
        let count = 0;
        for(let j=0;j<inputArray.length;j++){
            if(inputArray[j] % i !== 0) count++;
            if(count === inputArray.length) return i;
        }
        i++;
    }
    
    return lastPossibleJump;
}

console.log(avoidObstacles([5, 3, 6, 7, 9])); // 4

// O(n^2log(n)) solution

// inputArray.sort((a, b) => {
//     return a - b;
// });
// console.log(inputArray);
// let len = inputArray.length - 1;
// let lastPossibleJump = inputArray[len] + 1;
// let i = 2;

// while(i < lastPossibleJump){
//     let count = 0;
//     for(let j=0;j<inputArray.length;j++){
//         if(inputArray[j] % i !== 0){
//             count++;
//         }
//         if(count === inputArray.length) return i;
//     }

//     i++;
// }

// return lastPossibleJump;