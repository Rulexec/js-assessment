if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
      return function(s) {
        return str + ', ' + s;
      }
    },

    makeClosures : function(arr, fn) {
      return arr.map(function(x) { return function() { return fn(x); }; });
    },

    partial : function(fn, str1, str2) {
      return fn.bind(null, str1, str2);
    },

    useArguments : function() {
      return Array.prototype.reduce.call(arguments, function(a, b) { return a + b; });
    },

    callIt : function(fn) {
      return fn.apply(null, Array.prototype.slice.call(arguments, 1));
    },

    partialUsingArguments : function(fn) {
      return fn.bind.apply(fn, [null].concat(Array.prototype.slice.call(arguments, 1)));
    },

    curryIt : function curryIt(fn) {
      if (fn.length <= 1) return fn;
      else return function(x) { return curryIt(fn.bind(null, x)); };
    }
  };
});
