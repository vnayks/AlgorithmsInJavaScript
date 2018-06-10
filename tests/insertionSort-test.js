var assert = require('chai').assert;
var insertionSort = require('../src/sort/insertionSort.js')

describe('InsertionSort', function() {
  describe('BasicTests', function() {
    it('Should return true', function() {
      var nums=[3,1,5,4];
      var result=insertionSort.sort(nums);
      assert.isTrue(checkIfSorted(result), "sorted array is :" + result );      
    });
  });

  describe('longArrayTest', function() {
    it('Should return true', function() {
      this.timeout(20000)
      var nums=[];
      for(var i=0;i<1000;i++){
        nums.push(randomIntFromInterval(0,100000))
      }            
      var result=insertionSort.sort(nums);            
      assert.isTrue(checkIfSorted(result), "sorted array is :" + result );      
    });
  });
});

describe('InsertionSort Descending Tests', function() {
  describe('BasicTests', function() {
    it('Should return true', function() {
      var nums=[3,1,5,4];
      var result=insertionSort.sortDescending(nums);
      assert.isTrue(checkIfSorted(result,true), "sorted array is :" + result );      
    });
  });

  describe('longArrayTest', function() {
    it('Should return true', function() {
      this.timeout(20000)
      var nums=[];
      for(var i=0;i<1000;i++){
        nums.push(randomIntFromInterval(0,100000))
      }
      console.log("finished creating long array");
      var result=insertionSort.sortDescending(nums);            
      assert.isTrue(checkIfSorted(result,true), "sorted array is :" + result );      
    });
  });
});

var checkIfSorted = function(nums, sortDescending){
  if( sortDescending || false){
    for(var i=0;i<nums.length-1;i++){
      if(nums[i]<nums[i+1])
        return false;
    }
    return true;
  }
  for(var i=0;i<nums.length-1;i++){
    if(nums[i]>nums[i+1])
      return false;
  }

  return true;
}

var randomIntFromInterval =function(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
