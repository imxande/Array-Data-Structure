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
}

const newArr = new Arr();
newArr.push("a");
newArr.push("b");
newArr.push("c");
newArr.push("d");
newArr.push("e");

console.log(newArr);
