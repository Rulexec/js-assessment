if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
      return {
        name: 'matt',
        greeting: 'hello',
        sayIt: function() {
          return this.greeting + ', ' + this.name;
        }
      };
    }
  };
});

