namespace leetcode136 {
    function singleNumber(nums: number[]): number {
        let singleNumberObj: { [key: number]: boolean } = {};

        for (let num of nums) {
            if (num in singleNumberObj) {
                delete singleNumberObj[num];
            } else {
                singleNumberObj[num] = true;
            }
        }

        return +Object.keys(singleNumberObj)[0];
    }

    let nums = [4, 1, 2, 1, 2];
    console.log(singleNumber(nums));
}
