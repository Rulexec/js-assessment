if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      if (typeof num !== 'number') return false;
      
      if (num % 3 === 0) {
        if (num % 5 === 0) {
          return 'fizzbuzz';
        }

        return 'fizz';
      } else if (num % 5 === 0) {
        return 'buzz';
      } else {
        return num;
      }
    }
  };
});
