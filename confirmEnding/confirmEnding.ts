function confirmEnding(str: string, target: string) {
   return str.substr(target.length - 1) === target;
}

console.log(confirmEnding("Abstraction", "action")); // true
console.log(confirmEnding("Open sesame", "pen")); // false 