class HashTable {
    size: number;
    data: any[][];

    constructor(size) {
        this.size = size;
        this.data = new Array(size);
    }

    _hash(key: string): number {
        var hash: number = 0;

        for (var i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.size;
        }

        return hash;
    }

    set(key: string, value: any): void {
        var hashValue: number = this._hash(key);
        var item: any[] = [key, value];

        if (!this.data[hashValue]) {
            this.data[hashValue] = [];
        } 

        this.data[hashValue].push(item);
    }

    get(key: string): any {
        var hashValue: number = this._hash(key);
        var currentBucket = this.data[hashValue];
        
        if (currentBucket) {
            for (var i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }

        return undefined;
    }

    keys(): string[] {
        var keyArray: string[] = [];
        var bucket: any[];

        for (var i = 0; i < this.size; i++) {
            bucket = [];
            if (this.data[i]) {
                bucket = this.data[i];
            }

            for (var j = 0; j < bucket.length; j++) {
                keyArray.push(bucket[j][0]);
            }
        }

        return keyArray;
    }
}

var newHashTable = new HashTable(2);
newHashTable.set("grapes", 1000);
newHashTable.set("apples", 300);
newHashTable.set("lemon", 900);
console.log(newHashTable.get("grapes"));
console.log(newHashTable.get("apples"));
console.log(newHashTable.get("lemon"));
console.log(newHashTable);
console.log(newHashTable.keys());