function alphabetSubsequence(s: string): boolean {
    let freq = {};
    let strArr = s.split('');

    strArr.forEach(char => {
        if(!freq[char]) freq[char] = 0
        freq[char]++;
    });

    let isSubSeq = true;

    strArr.forEach(char => {
        if(freq[char] > 1){
            isSubSeq = false
        }  
    });

    const alphabet: object = {
        'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5,
        'f': 6, 'g': 7, 'h': 8, 'j': 9, 'k': 10,
        'l': 11, 'm': 12, 'n': 13, 'o': 14, 'p': 15,
        'q': 16, 'r': 17, 's': 18, 't': 19, 'u': 20,
        'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25 
    };

    for(let i=0;i<strArr.length-1;i++){
        let currElem = strArr[i];
        let nextElem = strArr[i+1];
        if(alphabet[currElem] > alphabet[nextElem]) isSubSeq = false;
    }

    return isSubSeq;
}

console.log(alphabetSubsequence('zab')) // false
console.log(alphabetSubsequence('effg')) // false
console.log(alphabetSubsequence('cdce')) // false
console.log(alphabetSubsequence('ace')) // true
console.log(alphabetSubsequence('bxz')) // true

console.log(alphabetSubsequence('abze'))
console.log(alphabetSubsequence('abe'))

