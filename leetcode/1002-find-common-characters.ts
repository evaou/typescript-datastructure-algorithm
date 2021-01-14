//tsc leetcode/1002-find-common-characters.ts  --target es5

namespace leetcode1002 {
    function commonChars(A: string[]): string[] {
        let commonHashTable: { [key: string]: number } = {};
        let tmpHashTable: { [key: string]: number } = {};

        commonHashTable = buildHashTable(A[0]);

        for (let i = 1; i < A.length; i++) {
            tmpHashTable = buildHashTable(A[i]);

            for (let key in commonHashTable) {
                if (key in tmpHashTable) {
                    commonHashTable[key] = Math.min(
                        commonHashTable[key],
                        tmpHashTable[key]
                    );
                } else {
                    delete commonHashTable[key];
                }
            }
        }

        let result: string[] = [];
        for (let key in commonHashTable) {
            for (let i = 0; i < commonHashTable[key]; i++) {
                result.push(key);
            }
        }

        return result;
    }

    function buildHashTable(arr: string): { [key: string]: number } {
        let hashTable: { [key: string]: number } = {};

        for (let charStr of arr) {
            if (charStr in hashTable) {
                hashTable[charStr]++;
            } else {
                hashTable[charStr] = 1;
            }
        }

        return hashTable;
    }

    let input: string[];
    input = ["bella", "label", "roller"];

    console.log(commonChars(input));
}
