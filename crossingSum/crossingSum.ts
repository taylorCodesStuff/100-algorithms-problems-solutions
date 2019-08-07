function crossingSum(matrix: number[][], a: number, b: number): number {
    let sum = 0;
    
    for(let i=0;i<matrix[a].length;i++){
        if(i !== b) {
            sum += matrix[a][i];
        }
    }

    for(let j=0;j<matrix.length;j++){
        sum += matrix[j][b];
    }

}

console.log(crossingSum([[1, 1, 1, 1], 
    [2, 2, 2, 2], 
    [3, 3, 3, 3]], 1, 3));