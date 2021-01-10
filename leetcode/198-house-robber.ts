namespace leetcode198 {
    let cache: { [key: number]: number };

    function rob(nums: number[]): number {
        cache = {};

        return robRecursive(nums, 0);
    }

    function robRecursive(nums: number[], index: number): number {
        if (index >= nums.length) {
            return 0;
        }

        if (index in cache) {
            return cache[index];
        }

        let first = nums[index] + robRecursive(nums, index + 2);
        let second = robRecursive(nums, index + 1);

        cache[index] = Math.max(first, second);

        return cache[index];
    }

    let nums: number[];
    nums = [1, 2, 3, 1]; // 4
    //nums = [2, 7, 9, 3, 1]; // 12

    console.log(rob(nums));
}
