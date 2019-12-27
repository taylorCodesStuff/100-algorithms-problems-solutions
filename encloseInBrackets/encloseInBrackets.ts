function encloseInBrackets(inputString: string): string {
    let strArr: string[] = inputString.split('');
    strArr.unshift('(');
    strArr.push(')');
    return strArr.join('');
}

console.log(encloseInBrackets('abacaba'));