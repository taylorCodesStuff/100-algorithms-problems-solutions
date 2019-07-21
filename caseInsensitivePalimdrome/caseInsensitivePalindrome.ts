function isCaseInsensitivePalindrome(inputString: string): boolean {
    console.log(inputString);
    const input = inputString.toLowerCase();;
    for(let i=0;i<Math.floor(input.length)/2;i++){
        if(input[i] !== input[input.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));