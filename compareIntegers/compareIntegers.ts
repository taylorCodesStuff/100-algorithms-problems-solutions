function compareIntegers(a: string, b: string): string {
    const numA: number = Number(a); 
    const numB: number = Number(b);

    return numA > numB ? 'greater' : numA < numB ? 'less' : 'equal';
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));