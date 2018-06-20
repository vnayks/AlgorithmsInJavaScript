var assert = require('chai').assert;
var bubbleSort = require('../src/sort/bubbleSort.js')
var utils = require('../tests/utils.js')

describe('BubbleSort', function() {
  describe('BasicTests', function() {
    it('Should return true', function() {
      var nums=[3,1,5,4];
      var result=bubbleSort.sort(nums);
      assert.isTrue(utils.checkIfSorted(result), "sorted array returned is :" + result );      
    });
  });

  describe('longArrayTest', function() {
    it('Should return true', function() {
      this.timeout(20000)
      var nums=[];
      for(var i=0;i<10000;i++){
        nums.push(utils.randomIntFromInterval(0,100000))
      }            
      var result=bubbleSort.sort(nums);            
      assert.isTrue(utils.checkIfSorted(result), "sorted array is :" + result );      
    });
  });

  describe('Negative integer input', function() {
    it('Should return true', function() {
      var nums=[-2,3,23,0,-99,-22,-12,-22222,-09,-234,-231,-929,-92];
      var result=bubbleSort.sort(nums);
      assert.isTrue(utils.checkIfSorted(result), "sorted array is :" + result );      
    });
  });

  describe('empty input', function() {
    it('Should return true', function() {
      var nums=[];
      var result=bubbleSort.sort(nums);
      assert.isTrue(utils.checkIfSorted(result), "sorted array is :" + result );      
    });
  });

  describe('Input all same elements', function() {
    it('Should return true', function() {
      var nums=[1,1,1,1,1,1,1,1,1,1,1,1];
      var result=bubbleSort.sort(nums);
      assert.isTrue(utils.checkIfSorted(result), "sorted array returned is :" + result );          
    });
  });

  describe('Invalid Input Test', function() {
    it('Invalid input should return back sameObject', function() {
      var nums=undefined;
      var result=bubbleSort.sort(nums);
      assert.equal(nums,result,"types are not equal");  
    });
  });
});

describe('BubbleSort Descending Tests', function() {
  describe('BasicTests', function() {
    it('Should return true', function() {
      var nums=[3,1,5,4];
      var result=bubbleSort.sortDescending(nums);
      assert.isTrue(utils.checkIfSorted(result,true), "sorted array is :" + result );      
    });
  });

  describe('longArrayTest', function() {
    it('Should return true', function() {
      this.timeout(20000)
      var nums=[];
      for(var i=0;i<10000;i++){
        nums.push(utils.randomIntFromInterval(0,100000))
      }
      var result=bubbleSort.sortDescending(nums);            
      assert.isTrue(utils.checkIfSorted(result,true), "sorted array is :" + result );      
    });
  });

  describe('Negative integer input', function() {
    it('Should return true', function() {
      var nums=[-2,3,23,0,-99,-22,-12,-22222,-09,-234,-231,-929,-92];
      var result=bubbleSort.sortDescending(nums);
      assert.isTrue(utils.checkIfSorted(result,true), "sorted array is :" + result );      
    });
  });

  describe('empty input', function() {
    it('Should return true', function() {
      var nums=[];
      var result=bubbleSort.sortDescending(nums);
      assert.isTrue(utils.checkIfSorted(result,true), "sorted array is :" + result );      
    });
  });

  describe('Input all same elements', function() {
    it('Should return true', function() {
      var nums=[1,1,1,1,1,1,1,1,1,1,1,1];
      var result=bubbleSort.sortDescending(nums);
      assert.isTrue(utils.checkIfSorted(result,true), "sorted array is :" + result );      
    });
  });

  describe('Invalid Input Test', function() {
    it('Invalid input should return back sameObject', function() {
      var nums=undefined;
      var result=bubbleSort.sortDescending(nums);
      assert.equal(nums,result,"types are not equal");  
    });

  });

});

