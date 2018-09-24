function alphabeticShift(inputString: string): string {
    // const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    // Use an object for faster lookup
    const alphabet: object = {
        'a': 'b', 'b': 'c', 'c': 'd', 'd': 'e', 'e': 'f',
        'f': 'g', 'g': 'h', 'h': 'i', 'j': 'k', 'k': 'l',
        'l': 'm', 'm': 'n', 'n': 'o', 'o': 'p', 'p': 'q',
        'q': 'r', 'r': 's', 's': 't', 't': 'u', 'u': 'v',
        'v': 'w', 'w': 'x', 'x': 'y', 'y': 'z', 'z': 'a' 
    };
    let strArr = inputString.split('');
    
    for(let i=0;i<strArr.length;i++){
        strArr[i] = alphabet[strArr[i]];
    }
    
    return strArr.join('');
}

console.log(alphabeticShift('crazy'));

console.log(alphabeticShift('zzz'));