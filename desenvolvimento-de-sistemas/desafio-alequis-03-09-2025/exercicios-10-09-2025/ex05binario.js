let funcaoBinaria = function (array, numero) {

    let inicio = 0, fim = array.length - 1;

    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2);
        if (array[meio] === numero) return true;
        else if (array[meio] < numero)
            inicio = meio + 1;
        else
            fim = meio - 1;
    }
    return false;
}

let array = [1, 3, 5, 7, 8, 9];
let numero = 5;

if (funcaoBinaria(array, numero, 0, array.length - 1)) {
    console.log("Número encontrado :)");
}
else {
    console.log("Número não encontrado :(");
}

numero = 8;

if (funcaoBinaria(array, numero, 0, array.length - 1)) {
    console.log("Número encontrado :)");
}
else {
    console.log("Número não encontrado :(");
}