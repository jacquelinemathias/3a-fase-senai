class Stack {
    constructor() {this.lista = [];}
    push(element) {this.lista.push(element);}

    pop()
    {
        if (this.isEmpty()) {
            return "Stack está vazio";
        }
        return this.lista.pop();
    }

    peek(){
        if (this.isEmpty()){
            return "Stack está vazio";
        }
        return this.lista[this.lista.length - 1];
    }

    isEmpty(){ return this.lista.length === 0; }

    print(){ console.log(this.lista); }
}

const stack = new Stack();

stack.push(17);
stack.push(25);
stack.push(27);
console.log(stack.peek());
console.log(stack.pop());
stack.print();