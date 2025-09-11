function isBalanced(simbolos) {
    
    let lista = [];
    
    for (let caracter of simbolos) {
        if (caracter === '(' || caracter === '{' || caracter === '[') {
            lista.push(caracter);
        }
        
        else if (caracter === ')' || caracter === '}' || caracter === ']') {
            if (lista.length === 0) return false;
            let top = lista[lista.length - 1];
            if ((caracter === ')' && top !== '(') ||
                (caracter === '}' && top !== '{') ||
                (caracter === ']' && top !== '[')) {
                return false;
            }
            
            lista.pop();
        }
    }
    
    return lista.length === 0;
}

let simbolos = "[()()]{}";
console.log(isBalanced(simbolos)?"true":"false");