class Fila {
    constructor() {
        this.lista1 = [];
        this.lista2 = [];
    }

    enqueue(item) {
        while (this.lista1.length) {
            this.lista2.push(this.lista1.pop());
        }
        this.lista1.push(item);
        while (this.lista2.length) {
            this.lista1.push(this.lista2.pop());
        }
    }

    dequeue() {
        if (this.lista1.length === 0) {
            return -1;
        }
        let item = this.lista1.pop();
        return item;
    }
}

function funcao() {
    let novaLista = new Fila();
    novaLista.enqueue(1);
    novaLista.enqueue(2);
    novaLista.enqueue(3);

    console.log(novaLista.dequeue());
    console.log(novaLista.dequeue());
    console.log(novaLista.dequeue());
}

funcao();