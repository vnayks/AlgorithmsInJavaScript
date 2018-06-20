var exports = module.exports = {};

exports.sort = function (nums) {
    if (nums == null || !Array.isArray(nums) || nums.length <= 1)
        return nums;

    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = nums.length - 1; j > i; j--) {
            if (nums[j] < nums[j - 1]) {
                var temp = nums[j];
                nums[j] = nums[j - 1];
                nums[j - 1] = nums[j];
            }
        }
    }

    return nums;
}

exports.sortDescending = function (nums) {

    if (nums == null || !Array.isArray(nums) || nums.length <= 1)
        return nums;

    for (var i = 0; i < nums.length; i++) {
        for (var j = nums.length; j > i; j--) {
            if (nums[j] > nums[j - 1]) {
                var temp = nums[j];
                nums[j] = nums[j - 1];
                nums[j - 1] = temp;
            }
        }
    }

    return nums;
}
