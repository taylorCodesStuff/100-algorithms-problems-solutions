function almostIncreasingSequence(sequence: number[]): boolean {

   let count = 0;
   for(let i=0;i<sequence.length-1;i++){
       let cE = sequence[i];
       let nE = sequence[i+1];
       let pE = sequence[i-1];
       if(cE > nE) {
           count++;
           if(nE <= pE && sequence[i+2] <= cE) count++;
       }
   }

   return count < 2;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) // false
console.log(almostIncreasingSequence([1, 3, 2])) // true
console.log(almostIncreasingSequence([1, 3, 1, 1])) // false
console.log(almostIncreasingSequence([1, 2, 3, 4, 3, 6])) // true

// 