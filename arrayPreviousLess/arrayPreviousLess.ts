function arrayPreviousLess(items: number[]): number[] {

    let newArr = [-1];
    let prevMin = items[0];
    for(let i=1;i<items.length;i++){
        let currElem = items[i];
        if(prevMin > currElem) newArr.push(-1);
        //else newArr.push(prevMin);
        prevMin = currElem < prevMin ? currElem : prevMin;
        for(let j=i-1;j>-1;j--){
            if(items[j] < currElem){
                newArr.push(items[j]);
                break;
            }
        }
    }

    return newArr;
}

// what if we started from the last element in the array and worked forward?

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
//                            [-1, 3, -1, 2, 4]

console.log(arrayPreviousLess([3,5,2,6,5]));
//                            [-1, 3, -1, 2, 2]

// First Solution O(n^2) ?        

// let newArr = [];
// //let prevMin = items[0];
// for(let i=0;i<items.length;i++){
//     let currElem = items[i];
//     //prevMin = currElem < prevMin ? currElem : prevMin;
//     let changed = false;
//     for(let j=i-1;j>-1;j--){
//         if(items[j] < currElem){
//             newArr.push(items[j]);
//             changed = true;
//             break;
//         }
//     }
//     if(!changed) newArr.push(-1);

// }

// return newArr;



