let Queue = function () {
    queueSet = [];

    //function to get all the element in the queue
    this.print = () => {
        console.log(queueSet);
    };
    //function to add item to front of queue
    this.enqueue = (element) => {
        queueSet.push(element);
    };

    this.deQueue = () => {
        return queueSet.shift();
    };

    this.front = () => {
        return queueSet[0];
    };

    this.size = () => {
        return queueset.length;
    };

    this.isEmpty = () => {
        return (queueSet.length === 0);
    };
}

let myQueue = new Queue();
console.log(myQueue.isEmpty());