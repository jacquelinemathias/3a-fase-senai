function procurar(array, numero) {
    const tamanho = array.length;

    for (let i = 0; i < tamanho; i++)
        if (array[i] == numero)
            return i;
    return -1;
}
    let array = [ 2, 3, 4, 10, 40 ];
    let numero = 10;

    let resultado = procurar(array, numero);
    (resultado == -1)
        ? console.log("Número não está no array")
        : console.log("Número está no index " + resultado);