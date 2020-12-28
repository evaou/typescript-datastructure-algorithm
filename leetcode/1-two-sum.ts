function twoSum(nums: number[], target: number): number[] {
    let hashTable: { [key: string]: number[] } = {};
    let key: string;
    let targetKey: string;

    for (let i = 0; i < nums.length; i++) {
        key = nums[i].toString();
        if (key in hashTable) {
            hashTable[key].push(i);
            return hashTable[key];
        } else {
            targetKey = (target - nums[i]).toString();
            hashTable[targetKey] = [i];
        }
    }
}

function twoSumByMap(nums: number[], target: number): number[] {
    let hashTable = new Map<number, number[]>();
    let key: number;

    for (let i = 0; i < nums.length; i++) {
        key = nums[i];
        if (hashTable.has(key)) {
            let arr: number[] = hashTable.get(key);
            arr.push(i);
            hashTable.set(key, arr);
            return hashTable.get(key);
        } else {
            hashTable.set(target - key, [i]);
        }
    }
}

var nums = [2, 7, 11, 15];
var target = 9;
console.log(twoSum(nums, target));
