function depositProfit(deposit: number, rate: number, threshold: number): number {
    console.log(20/100);
    console.log(threshold); 
    let year = 0;
    while(deposit < threshold) {
        deposit += (deposit * (rate/100));
        year += 1;
        console.log(deposit, year);
    }

    return year;
}

console.log(depositProfit(100, 20, 170))
