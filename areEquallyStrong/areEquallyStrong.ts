function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    let yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
    let yourWeakest = yourRight <= yourLeft ? yourRight : yourLeft;
    
    let friendsStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;
    let friendsWeakest = friendsRight <= friendsLeft ? friendsRight : friendsLeft;

    return yourStrongest === friendsStrongest && yourWeakest === friendsWeakest;
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))

console.log(areEquallyStrong(15, 10, 24, 1))
