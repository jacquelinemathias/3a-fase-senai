let string = "Exercício...........";
let stack = [];
let invertido = "";
for (let i = 0; i < string.length; i++) {
    stack.push(string[i]);
}
while (stack.length > 0) {
    invertido += stack.pop();
}
console.log(invertido);