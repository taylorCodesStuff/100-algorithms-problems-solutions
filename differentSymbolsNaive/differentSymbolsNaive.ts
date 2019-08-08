function differentSymbolsNaive(s: string): number {
    let count = 0;
    let seen = {

    };
    let charArr = s.split('');
    for(let i=0;i<charArr.length;i++){
        let char = charArr[i];
        if(!seen[char]) {
            seen[char] = true;
            count++;
        }
    }

    return count;
}

console.log(differentSymbolsNaive('cabca')); // 3
