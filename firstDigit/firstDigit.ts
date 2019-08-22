function firstDigit(inputString: string): string {
    const nums = {
        '1': true, '2': true, '3': true, '4': true,
        '5': true, '6': true, '7': true, '8': true,
        '9': true, '0': true
    }

    const inputArr: string[] = inputString.split('');

    for(let i=0;i<inputArr.length;i++) {
        let cE = inputArr[i];
        if (nums[cE]) return cE;
    }

    return '-1';
}

console.log(firstDigit('var_1__Int')); // 1
console.log(firstDigit('q2q-q')); // 2
console.log(firstDigit('0ss')); // 0
