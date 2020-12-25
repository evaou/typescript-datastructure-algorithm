class MyArray {
    data: {};
    length: number;

    constructor() {
        this.data = {}; 
        this.length = 0;
    }

    get(index: number): any {
        return this.data[index];
    } 

    push(item: any): number {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(): any {
        var lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index: number): any{
        var deletedItem = this.data[index];        
        this.shiftItems(index);
        return deletedItem;
    }

    shiftItems(index: number): void {
        for (var i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

var newArray = new MyArray();
newArray.push("hi");
newArray.push("you");
newArray.push("!");
newArray.delete(0);
console.log(newArray);
newArray.push("are");
newArray.push("nice");
newArray.delete(1);
console.log(newArray);