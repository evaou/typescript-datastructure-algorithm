function intersection(nums1: number[], nums2: number[]): number[] {
    if (!nums1.length || !nums2.length) {
        return [];
    }

    let hashTable1 = buildHashTable(nums1);
    let hashTable2 = buildHashTable(nums2);

    for (let key in hashTable1) {
        if (!(key in hashTable2)) {
            delete hashTable1[key];
        }
    }

    return Object.keys(hashTable1).map((key) => +key);
}

function buildHashTable(arr: number[]): { [key: number]: boolean } {
    if (!arr.length) {
        return {};
    }

    let hashTable: { [key: number]: boolean } = {};
    for (let item of arr) {
        if (!(item in hashTable)) {
            hashTable[item] = true;
        }
    }

    return hashTable;
}

let nums1: number[];
let nums2: number[];

//nums1 = [1, 2, 2, 1];
//nums2 = [2, 2];
// [2]

nums1 = [4, 9, 5];
nums2 = [9, 4, 9, 8, 4];
// [4, 9]

console.log(intersection(nums1, nums2));
