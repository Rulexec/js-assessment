if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      var deferred = $.Deferred();
      setTimeout(function() { deferred.resolve(value); }, 0);
      return deferred.promise();
    },

    manipulateRemoteData : function(url) {
      return $.get(url).then(function(data) {
        return data.people.map(function(x) { return x.name; }).sort();
      });
    }
  };
});
