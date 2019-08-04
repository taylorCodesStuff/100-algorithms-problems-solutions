function convertString(s: string, t: string): boolean {
    let sArr: string[] = s.split('');
    let tArr: string[] = t.split('');

    let sHash: object = {};
    let i: number;

    for(i=0;i<sArr.length;i++) {
        let cE = s[i];
        if(!sHash.hasOwnProperty(cE)) {
            sHash[cE] = {};
            sHash[cE].index = i;
            sHash[cE].count = 0;
        }
        sHash[cE].count++;
        sHash[cE].index = i;
    }
    

    for(i=0;i<tArr.length;i++){
        let cE = t[i];
        if(sHash[cE]) sHash[cE].count--;

        if(sHash[cE].count < 0 || sHash[cE].index < i) return false;
    }

    return true;
}
// Index order matters 
console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights')); // true 
console.log(convertString('addbyca', 'abcd')); // false
