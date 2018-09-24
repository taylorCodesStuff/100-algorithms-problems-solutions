function alphabeticShift(inputString: string): string {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    let strArr = inputString.split('');
    
    for(let i=0;i<strArr.length;i++){
        let cE = strArr[i];
        if(alphabet.indexOf(cE) === 25) {
            strArr[i] = 'a';
        } else {
            strArr[i] = alphabet[alphabet.indexOf(cE) + 1]; 
        }
    }
    
    return strArr.join('');
}

console.log(alphabeticShift('crazy'));