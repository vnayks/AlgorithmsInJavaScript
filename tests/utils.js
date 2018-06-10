var utils = utils || {};

utils.checkIfSorted = function(nums, sortDescending){
  if( sortDescending || false){
    for(var i=0;i<nums.length-1;i++){
      if(nums[i]<nums[i+1])
        return false;
    }
  }
  for(var i=0;i<nums.length-1;i++){
    if(nums[i]>nums[i+1])
      return false;
  }

  return true;
}

utils.randomIntFromInterval =function(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
