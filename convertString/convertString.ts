function convertString(s: string, t: string): boolean {
    let sArr: string[] = s.split('');
    let tArr: string[] = t.split('');

    let sHash: object = {};
    let i: number;

    for(i=0;i<sArr.length;i++) {
        let cE = s[i];
        if(!sHash.hasOwnProperty(cE)) sHash[cE] = 0;
        sHash[cE]++;
    }

    for(i=0;i<tArr.length;i++){
        let cE = t[i];
        if(sHash[cE]) sHash[cE]--;

        if(sHash[cE] < 0 || !sHash[cE]) return false;
    }

    return true;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
