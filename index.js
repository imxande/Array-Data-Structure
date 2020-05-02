class Arr {
    constructor(){
        this.length = 0;
        this.data = {}
    }
    // add elements to the data structure
    push(element){
        // data at specific length holds the item
        this.data[this.length] = element;
        // I need to increase length size
        this.length++;
        // i need to return the data
        return this.length;
    }
    // access to specific element of the data structure
    get(index){
        return this.data[index];
    }

    // delete
    delete(index){
        // save data of specific index
        const item = this.data[index]
        // shift items method, pass index
        this.shiftItems(index);
        // return the item
        return item;
    }

    // method to shift items
    shiftItems(index){
        // check for items in data starting from specific index
        for (let i = index; i < this.length; i++){
            // as it iterates over an item it becomes item next to it
            this.data[i] = this.data[i + 1]
        }
        // last item is deleted
        delete this.data[this.length - 1]
        // decrease length
        this.length--;
    }
}

const newArr = new Arr();
newArr.push("a");
newArr.push("b");
newArr.push("c");
newArr.push("d");
newArr.push("e");

// sanity check
console.log("**************Before Deleting item at index 2");
console.log(newArr);
console.log(newArr.get(2));

console.log("**************After Deleting item at index 2");
newArr.delete(2);
console.log(newArr.get(2));
console.log(newArr);


