var exports = module.exports = {};

exports.sort=function(nums){

    if(nums===null || !(Array.isArray(nums)) || nums.length <=1)
        return nums;

    for(var i=1;i<nums.length;i++){
        var j=i-1;
        var key=nums[i];
        while(j>=0 && key<nums[j]){
            nums[j+1]=nums[j];
            j--;
        }
        nums[j]=key;
    }    
    return nums;    
}

exports.sortDescending=function(nums){

    if(nums===null || !(Array.isArray(nums)) || nums.length <=1)
        return nums;

    for(var i=1;i<nums.length;i++){
        var j=i-1;
        var key=nums[i];
        while(j>=0 && key>nums[j]){
            nums[j+1]=nums[j];
            j--;
        }
        nums[j]=key;
    }    
    return nums;    
}
