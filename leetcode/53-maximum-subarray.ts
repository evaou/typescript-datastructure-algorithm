namespace leetcode53 {
    function maxSubArray(nums: number[]): number {
        if (nums.length === 1) {
            return nums[0];
        }

        let maxSubArraySum = nums[0];
        let maxSoFarSum = nums[0];
        let startIdx = 0;
        let endIdx = 0;

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i] + maxSoFarSum) {
                maxSoFarSum = nums[i];
                startIdx = i;
            } else {
                maxSoFarSum = nums[i] + maxSoFarSum;
            }

            if (maxSoFarSum > maxSubArraySum) {
                maxSubArraySum = maxSoFarSum;
                endIdx = i;
            }
        }

        console.log("sub array: " + nums.slice(startIdx, endIdx + 1));

        return maxSubArraySum;
    }

    let nums: number[];
    nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // 6
    //nums = [1]; // 1
    //nums = [0]; // 0
    //nums = [-1]; // -1
    //nums = [-100000]; // -100000
    //nums = [-2, -1]; // -1
    //nums = [-1, -2]; // -1

    console.log(maxSubArray(nums));
}
