namespace leetcode217 {
    function containsDuplicate(nums: number[]): boolean {
        if (nums.length < 2) {
            return false;
        }

        let hash: { [key: number]: number } = {};

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] in hash) {
                return true;
            }

            hash[nums[i]] = 1;
        }

        return false;
    }

    let nums: number[];
    nums = [1, 2, 3, 1];

    console.log(containsDuplicate(nums));
}
