function calculo(A)
{
    let lista = [];

    for (let i = 0; i < A.length; i++)
    {
        if (posicao[i] != "+" && posicao[i] != "-" && posicao[i] != "/"
            && posicao[i] != "*") {
            lista.push(parseInt(posicao[i]));
            continue;
        }else {
            let b = parseInt(lista.pop());
            let a = parseInt(lista.pop());
            if (posicao[i] == "+")
                lista.push(a + b);
            else if (posicao[i] == "-")
                lista.push(a - b);
            else if (posicao[i] == "*")
                lista.push(a * b);
            else
                lista.push(parseInt(a / b));
        }
    }
    return parseInt(lista[lista.length-1]);
}

    let posicao = [ "10", "6", "9", "3", "+", "-11", "*",
            "/", "*", "17", "+", "5", "+" ];

    let resultado = calculo(posicao);
    console.log(resultado);
