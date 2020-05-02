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
}

const newArr = new Arr();
newArr.push("a");
newArr.push("b");
newArr.push("c");
newArr.push("d");
newArr.push("e");

console.log(newArr);
console.log(newArr.get(2));

