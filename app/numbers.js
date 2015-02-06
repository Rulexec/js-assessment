if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      return (num >>> (bit - 1)) & 1;
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      var s = num.toString(2);
      if (s.length >= 8) return s;
      
      return Array(8 - s.length + 1).join('0') + s;
    },

    multiply: function(a, b) {
      var c = a * b,
          d = c - (c | 0);
      c -= d;
      d *= 100000;
      d |= 0;
      d /= 100000;
      c += d;
      return c;
    }
  };
});

