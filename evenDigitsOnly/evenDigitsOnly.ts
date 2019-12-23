function evenDigitsOnly(n: number): boolean {
    const numStr: string = n.toString();
    const strArr: string[] = numStr.split('');
    let isOnlyEven = true;
    strArr.forEach((str: string) => {
        const num = parseInt(str);
        if (num % 2 !== 0) isOnlyEven = false;
    });

    return isOnlyEven;
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));