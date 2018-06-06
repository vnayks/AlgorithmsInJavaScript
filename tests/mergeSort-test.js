var assert = require('chai').assert;
var mergeSort = require('../src/sort/mergeSort.js')
var utils = require('../test/utils.js')

describe('InsertionSort', function() {
  describe('BasicTests', function() {
    it('Should return true', function() {
      var nums=[3,1,5,4];
      var result=mergeSort.sort(nums);
      assert.isTrue(utils.checkIfSorted(result), "sorted array is :" + result );      
    });
  });

  describe('longArrayTest', function() {
    it('Should return true', function() {
      this.timeout(20000)
      var nums=[];
      for(var i=0;i<100000;i++){
        nums.push(utils.randomIntFromInterval(0,100))
      }            
      var result=mergeSort.sort(nums);            
      assert.isTrue(utils.checkIfSorted(result), "sorted array is :" + result );      
    });
  });
});
