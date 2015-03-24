var myFunctions = {

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  first: function(array, n) {
    if (n !== undefined) {
      return array.slice(0, n);
    }
    return array[0];
  },

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  last: function(array, n) {
    if (n !== undefined) {
      if (n === 0) {
        return [];
      }
      return array.slice(-n);
    }
    return array[array.length-1];
  },

  // Produce a duplicate-free version of the array.
  uniq: function(array) {
    var newArr = [];
    array.forEach(function(elem) {
      if (newArr.indexOf(elem) === -1) {
        newArr.push(elem);
      }
    });
    return newArr;
  },

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people objects
  // (which have a name and an age) and return an array of just their ages
  pluck: function(array, key) {
    var keyArr = [];
    array.forEach(function(obj) {
      keyArr.push(obj[key]);
    });
    return keyArr;
  },

 // Determine if the array contains a given value (using `===`).
 // TIP: There are multiple solutions to this problem, ranging from one line to using reduce();
  contains: function(array, target) {
    return array.indexOf(target) === -1 ? false : true;
  },

  // Turns a multidimensional array into a single array
  // flatten([1,2,[3,4,[5,6]]]) returns [1,2,3,4,5,6]
  // Hint: Use Array.isArray to check if something is an array
  // Also, you will need to use recursion
  // when you find an array inside of an array
  flatten: function(array) {
    var newArr = [];
    array.forEach(function(elem) {
      if (Array.isArray(elem)) {
        myFunctions.flatten(elem);
      }
      else {
        newArr.push(elem);
      }
    });
    return newArr;
  }
};
module.exports = myFunctions;
