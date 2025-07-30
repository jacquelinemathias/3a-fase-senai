export function somar(a,b) {
    if(typeof a !== "number" ?? || typeof b !== "number"){
        throw new Error("Erro ao somar")
    }
    return a + b;
}

console.log(somar(2, 2))