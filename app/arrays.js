if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      return arr.reduce(function(a, b) { return a + b; });
    },

    remove : function(arr, item) {
      return arr.filter(function(x) { return x !== item; });
    },

    removeWithoutCopy : function(arr, item) {
      for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === item) arr.splice(i, 1);
      }
      return arr;
    },

    append : function(arr, item) {
      return arr.push(item), arr;
    },

    truncate : function(arr) {
      return arr.pop(), arr;
    },

    prepend : function(arr, item) {
      return arr.unshift(item), arr;
    },

    curtail : function(arr) {
      return arr.shift(), arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      return arr.splice(index, 0, item), arr;
    },

    count : function(arr, item) {
      return arr.reduce(function(acc, x) { return x === item ? acc + 1 : acc; }, 0);
    },

    duplicates : function(arr) {
      var dups = {}, keys = {};
      arr.forEach(function(x) {
        if (x in dups) {
          dups[x]++;
        } else {
          dups[x] = 1;
          keys[x] = x;
        }
      });

      var dupsList = [];

      for (var key in dups) if (dups.hasOwnProperty(key)) {
        if (dups[key] > 1) dupsList.push(keys[key]);
      }

      return dupsList;
    },

    square : function(arr) {
      return arr.map(function(x) { return Math.pow(x, 2); });
    },

    findAllOccurrences : function(arr, target) {
      var occ = [];
      arr.forEach(function(x, i) { if (x === target) occ.push(i); });
      return occ;
    }
  };
});
