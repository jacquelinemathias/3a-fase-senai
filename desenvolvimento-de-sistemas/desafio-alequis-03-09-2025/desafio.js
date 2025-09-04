const numero = new Array(5);
numero[0] = 1;
numero[1] = 2;
numero[2] = 3;
numero[3] = 4;
numero[4] = 5;

function multiplicacao(numero) {
    var resultado = new Array(n).fill(1);
    for (var i = 0; i < numero.length; i++){
        for (let j = 0; j < numero[i].length; j++) {
            resultado *= numero[i][j];
        }
    return resultado;
}

console.log(multiplicacao(numero));
}