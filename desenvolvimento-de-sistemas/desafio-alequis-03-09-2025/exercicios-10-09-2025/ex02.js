class Queue {
    constructor() {
      this.lista = [];
    }

    enqueue(element) {
      this.lista.push(element); 
    }

    dequeue() {
      return this.lista.shift();
    }

    front() {
      return this.lista[0];
    }

    size() {
      return this.lista.length;
    }

    print() {
      console.log(this.lista.join(" -> "));
    }
  }
  
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.print();
  console.log(queue.dequeue());
  console.log(queue.front()); 
  console.log(queue.size());