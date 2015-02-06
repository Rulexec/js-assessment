if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      if (start > end) return {cancel: function(){}};

      var x = start;

      var timeoutId = null;
      f();

      return {cancel: function() {
        if (timeoutId !== null) {
          clearTimeout(timeoutId);
        }
      }};

      function f() {
        console.log(x);
        x++;
        
        if (x <= end) {
          timeoutId = setTimeout(f, 100);
        }
      }
    }
  };
});
