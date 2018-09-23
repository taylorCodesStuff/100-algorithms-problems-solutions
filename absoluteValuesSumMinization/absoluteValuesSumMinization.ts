function absoluteValuesSumMinimization(a: number[]): number {
    a.sort();
    console.log(a);
    let midNum = Math.floor(a.length/2);
    return a.length % 2 === 0 ? a[midNum-1] : a[midNum];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));