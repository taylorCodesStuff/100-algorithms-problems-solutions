function areSimilar(a: number[], b: number[]): boolean {
    
    if(a.toString() === b.toString()) return true;

    let arr = [];
    let brr = [];
    let c = 0;
    for(let i=0;i<a.length;i++){
        if(a[i] !== b[i]){
            c++;
            arr.push(a[i]);
            brr.push(b[i]);
        }
    }

    return c < 3 && arr.sort().join('') === brr.sort().join('');
}

console.log(areSimilar([1, 2, 3], [1, 2, 3])); // true
console.log(areSimilar([1, 2, 3], [2, 1, 3])); // true
console.log(areSimilar([1, 2, 2], [2, 1, 1])); // false

console.log(areSimilar([4, 6, 3], [3, 4, 6])); // false

// if(a.length !== b.length) return false;

// let freqOfA = {};
// a.forEach(num => {
//     if(!freqOfA[num]) freqOfA[num] = 0;
//     freqOfA[num]++;
// });

// let freqOfB = {};
// b.forEach(num => {
//     if(!freqOfB[num]) freqOfB[num] = 0;
//     freqOfB[num]++;
// });

// for(let i=0;i<a.length;i++){
//     let aElem = a[i];
//     if(freqOfA[aElem] !== freqOfB[aElem]) return false;
// }

// return true;