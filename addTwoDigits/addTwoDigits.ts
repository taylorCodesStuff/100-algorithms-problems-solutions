function addTwoDigits(n: any): number {
    // Ex. for n = 29
    let firstNum = Math.floor(n/10); // 2
    let stringOfN = n.toString(); // "29"
    let stringOfSecNum = stringOfN[1]; // "9"
    let secNum = parseInt(stringOfSecNum, 10); // 9

    return firstNum + secNum;
}

console.log(addTwoDigits(29));

console.log(addTwoDigits(23));

console.log(addTwoDigits(11));

function altAddTwoDigits(n: any): number {
    let nums = n.toString().split('');

    return parseInt(nums[0]) + parseInt(nums[1]);
}

console.log(altAddTwoDigits(29));

console.log(altAddTwoDigits(23));

console.log(altAddTwoDigits(11));