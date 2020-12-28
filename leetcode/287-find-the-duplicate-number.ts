function findDuplicate(nums: number[]): number {
    let map = new Map<number, number>();
    let key: number;

    for (let i = 0; i < nums.length; i++) {
        key = nums[i];
        if (!map.get(key)) {
            map.set(key, 1);
        } else {
            return key;
        }
    }

    return undefined;
}

var arr = [1, 3, 4, 2, 2];
console.log(findDuplicate(arr)); // 2

arr = [2, 5, 1, 2, 3, 5, 1, 2, 4];
console.log(findDuplicate(arr)); // 2

arr = [2, 1, 1, 2, 3, 5, 1, 2, 4];
console.log(findDuplicate(arr)); // 1

arr = [2, 3, 4, 5];
console.log(findDuplicate(arr)); // undefined
