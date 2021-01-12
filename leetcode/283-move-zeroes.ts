namespace leetcode283 {
    function moveZeroes(nums: number[]): void {
        let readyIdx: number = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                nums[readyIdx++] = nums[i];
            }
        }

        while (readyIdx < nums.length) {
            nums[readyIdx++] = 0;
        }
    }

    let nums: number[];
    nums = [0, 1, 0, 3, 12]; // [1,3,12,0,0]

    moveZeroes(nums);
    console.log(nums);
}
