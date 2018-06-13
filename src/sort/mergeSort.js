var exports = module.exports || {};

exports.sort = function (nums) {

    performMergeSort(nums, 0, nums.length - 1);
    return nums;
}

var performMergeSort = function (nums, start, end) {

    if (start < end) {
        var middle = Math.floor((start + end) / 2);
        performMergeSort(nums, start, middle);
        performMergeSort(nums, middle + 1, end);
        merge(nums, start, middle, end);
    }
}

var performMergeSortDescending = function (nums, start, end) {

    if (start < end) {
        var middle = Math.floor((start + end) / 2);
        performMergeSort(nums, start, middle);
        performMergeSort(nums, middle + 1, end);
        merge(nums, start, middle, end);
    }

}

var merge = function (nums, start, middle, end) {

    var leftArray = new Array(middle - start + 2);
    var rightArray = new Array(end - middle + 1);

    for (var i = 0; i < leftArray.length - 1; i++) {
        leftArray[i] = nums[start + i];
    }
    leftArray[leftArray.length - 1] = 999999;

    for (var j = 0; j < rightArray.length - 1; j++) {
        rightArray[j] = nums[middle + 1 + j];
    }
    rightArray[rightArray.length - 1] = 999999;

    var i = 0, j = 0;
    var k = start;

    while (i < leftArray.length - 1 || j < rightArray.length - 1) {
        if (leftArray[i] <= rightArray[j]) {
            nums[k] = leftArray[i];
            i++;
        }
        else {
            nums[k] = rightArray[j];
            j++;
        }
        k++;
    }

}
