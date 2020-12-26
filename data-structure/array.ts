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

    reverse(str: string): string {
        if (str.length <= 1) {
            return str;
        }

        var arr = str.split("");
        var tmp: string;
        var index: number = 0;
        var targetIndex: number;

        while (index < arr.length / 2) {
            targetIndex = arr.length - 1 - index;
            tmp = arr[index];
            arr[index] = arr[targetIndex];
            arr[targetIndex] = tmp;
            index++;
        }

        return arr.join("");
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

var str = "Hi hello world!"
var newArray2 = new MyArray();
console.log(newArray2.reverse(str))