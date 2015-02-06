if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var result = [];
      for (var name in obj) if (obj.hasOwnProperty(name)) {
        result.push(name + ': ' + obj[name]);
      }
      return result;
    }
  };
});
