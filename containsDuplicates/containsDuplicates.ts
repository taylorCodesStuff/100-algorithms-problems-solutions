function containsDuplicates(a: number[]): boolean {
    let obj = {};

    for(let i=0;i<a.length;i++){
        if(!obj[a[i]]) {
            obj[a[i]] = true;
        } else return true
    }

    return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
console.log(containsDuplicates([3, 1, 2, 3, 4]));
console.log(containsDuplicates([1]));
console.log(containsDuplicates([]));
console.log(containsDuplicates([9, 8, 2, 5, 1, 2, 5, 3]));


