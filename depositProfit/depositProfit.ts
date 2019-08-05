function depositProfit(deposit: number, rate: number, threshold: number): number {
    console.log(20/100); 
    let year = 0;
    while(deposit < threshold) {
        deposit += deposit + (deposit * (rate/100));
        year += 1;
        console.log(deposit, year);
    }

    return year;
}

console.log(depositProfit(100, 20, 170))


function calculateGrowth(deposit: number, year: number, threshold: number, rate: number): number {
    while(deposit < threshold) {
        deposit += deposit + (deposit * (rate/100));
        year += 1;
        console.log(deposit, year);
    }
}