function candies(n: number, m: number): number {
    
    return n * Math.floor(m/n);
}

console.log(candies(3, 10)); // 9

console.log(candies(3, 6)); // 6

console.log(candies(3, 7)); // 6

console.log(candies(2, 7)); // 6

console.log(candies(2, 8)); // 8

console.log(candies(3, 8)); // 6

console.log(candies(4, 10)); // 8