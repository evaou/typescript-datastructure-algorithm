namespace leetcode189 {
    function rotate(nums: number[], k: number): void {
        k %= nums.length;

        reverse(nums, 0, nums.length - 1);
        reverse(nums, 0, k - 1);
        reverse(nums, k, nums.length - 1);
    }

    function reverse(nums: number[], startIdx: number, endIdx: number): void {
        let tmp: number;

        while (startIdx < endIdx) {
            tmp = nums[startIdx];
            nums[startIdx] = nums[endIdx];
            nums[endIdx] = tmp;

            startIdx++;
            endIdx--;
        }
    }

    let nums: number[];
    let k: number;

    nums = [1, 2, 3, 4, 5, 6, 7]; // [5,6,7,1,2,3,4]
    k = 3;

    //nums = [-1, -100, 3, 99]; // [3,99,-1,-100]
    //k = 2;

    rotate(nums, k);
    console.log(nums);
}
