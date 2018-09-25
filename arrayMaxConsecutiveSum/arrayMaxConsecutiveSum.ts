function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let max = 0;
    let sum = 0;

    for(let i=0;i<k;i++){
        sum += inputArray[i];
    }
    max = sum;

    for(let i=k;i<inputArray.length;i++){
        sum -= inputArray[i-k];
        sum += inputArray[i];
        max = sum > max ? sum : max;
    }

    return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2)); // 8

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3)); // 12 

// 2 + 3 + 5 = 10
// 3 + 5 + 1 = 9
// 5 + 1 + 6 = 12


// O(n^2) solution 

// let max = 0;
// for(let i=0; i<inputArray.length;i++){
//     let currSum = 0;
//     let j = 0;
//     let index = i;
//     while(j < k){
//         currSum += inputArray[index];
//         j++;
//         index++;
//     }

//     max = currSum > max ? currSum : max;
// }
// return max;