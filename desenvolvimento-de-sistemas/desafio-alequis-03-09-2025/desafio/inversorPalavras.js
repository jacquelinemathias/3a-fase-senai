function inverterPalavra(palavra) {
    const pilha = [];
    for (const c of palavra)
        pilha.push(c); 
    let resultado = "";

    while (pilha.length)
        resultado += pilha.pop();
    return resultado;
}

console.log(inverterPalavra("Coxinha"))