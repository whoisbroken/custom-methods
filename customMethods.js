//forEach

Object.prototype.customForEach = function (callback, thisArg) {
  let array = this,
      currentValue;
      thisArg = this;

      
    
    for (let i = 0; i < array.length; i++) {
      currentValue = array[i];
      callback(currentValue, i, array, thisArg);
  }
}


// test 1
const test1 = [1, 2, 3, 4, 5];

test1.customForEach(function(currentValue, index, array) {
 console.log(currentValue, index, array);
});

// test 2
let test2 = [5, 10, 20, 40, 60];

test2.customForEach((currentValue, index, array) => {
 console.log(currentValue * 2, index * 2, array[index] * 3);
});

// filter

Object.prototype.customFilter = function (callback, thisArg) {
  let array = this,
      result = [],
      element;
      thisArg = this;

      
    
    for (let i = 0; i < array.length; i++) {
      element = array[i];
      if(callback(element, i, array, thisArg)) result.push(element);
    }
    return result;
}

// test 3
const test3 = [1, 2, 3, 4, 5];

console.log(test3.customFilter(el => el > 3));

// test 4
const test4 = ["apple", "orange", "banana", "pineapple", "kiwi"];

console.log(test4.customFilter(el => el.length > 5))

//test 5
const test5 = [22, 5, 3, 16, 9, 44, 31, 0, 19, 66, 2];

console.log(test5.customFilter((el, idx, arr) => el > arr[idx + 1]));

//findIndex

Object.prototype.customFindIndex = function (callback, thisArg) {
  let array = this,
      element;
      thisArg = this;
    
    for (let i = 0; i < array.length; i++) {
      element = array[i];
      if(callback(element, i, array, thisArg)) return i;
    }
    return -1;
};


// test 6
const test6 = [1, 2, 3, 4, 5];

console.log(test6.customFindIndex((el) => {
  if(el === 3) {
    console.log("true", el);
  } 
}));

// test 7
const test7 = ["apple", "orange", "banana", "pineapple", "kiwi"];

console.log(test7.customFindIndex((el) => {
  if(el === "kiwi") {
    console.log("true", el);
  }
}));