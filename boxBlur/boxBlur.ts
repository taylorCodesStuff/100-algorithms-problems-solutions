function boxBlur(image: number[][]): number[][] {
    let finalArr =[];
    for(let i=1;i<image.length-1;i++){
       let arr = [];
        for(let j=1;j<image[i].length-1;j++){
            let centerRow = image[i][j] + image[i][j-1] + image[i][j+1];
            let upperRow = image[i-1][j-1] + image[i-1][j] + image[i-1][j+1];
            let lowerRow = image[i+1][j-1] + image[i+1][j] + image[i+1][j+1];
            
            let sum = Math.floor((upperRow + centerRow + lowerRow)/9);
            arr.push(sum);
        }
        finalArr.push(arr);
    }
    
    return finalArr;
}

console.log(boxBlur([[1, 1, 1], 
                     [1, 7, 1], 
                     [1, 1, 1]])); // [[1]]

console.log(boxBlur([[36,0,18,9],
                     [27,54,9,0],
                     [81,63,72,45]])); // [[40,30]]