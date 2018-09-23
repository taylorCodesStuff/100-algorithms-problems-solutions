function addBorder(picture: string[]): string[] {
    let j = picture[0].length;
    console.log(j);
    let newPic = [];
    for(let k=0;k<picture.length;k++){
        let cE = picture[k];
        let newStr = "*" + cE + "*";
        newPic.push(newStr);
    }

    console.log(newPic); 
    let border = "";
    for(let i=0;i<j+2;i++){
        let ast = "*";
        border += ast;
    }
    console.log(border);

    newPic.unshift(border);
    newPic.push(border);

    console.log(newPic);
    return newPic;
    
}

console.log(addBorder(["abc", "ded"]));

// console.log(addBorder(['abcd', 'efgh']));