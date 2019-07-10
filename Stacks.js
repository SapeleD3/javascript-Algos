let Stack = function() {
    this.count = 0;
    this.storage = {};

    //create push function
    this.push = (value) => {
        //the storage obj adds value to index count
        this.storage[this.count] = value;
        this.count++;
    }

    //create pop function
    this.pop = () => {
        if(this.count === 0) {
            return undefined;
        }

        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    //function to check the size of a stack
    this.size = () => {
        return this.count;
    }

    //function to peek the end of the stack
    this.peek = () => {
        return this.storage[this.count-1];
        
    }
}

//create object for accessing functions from function Stack
let myStack = new Stack();

myStack.push("Moses did it");
myStack.push(1);
myStack.push("3");
myStack.push(5);

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.size());







let getPalindrom = (word) => {
    let myArray = [];
    let Rword = "";

    for(let i = 0; i < word.length; i++){
    push(word[i]) //is adding index letter to myArray
        myArray.push(word[i]);
    }

    for (let i = 0; i<word.length; i++){
        // pop method removes the last element from the array
        Rword = Rword + myArray.pop();
    }

    if (word === Rword) {
        console.log( word + ": is a palindrom ");
    } else {
        console.log( word + ": is not a palindrom ");
    }
}

getPalindrom("racecar");