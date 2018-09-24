function alternatingSums(a: number[]): number[] {
    let team1Total = 0;
    let team2Total = 0;

    for(let i=0;i<a.length;i++){
        let currElem = a[i];
        if(i % 2 === 0){
            // team 1
            team1Total += currElem;
        } else {
            // team 2
            team2Total += currElem;
        }
    }


    return [team1Total, team2Total];
}

console.log(alternatingSums([50, 60, 60, 45, 70]))