if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var list = [];

      if (dirName === undefined) {
        makeList(data.files);
      } else {
        var dir = findDir(data, dirName);
        if (dir !== null) makeList(dir.files);
      }

      return list;

      function makeList(files) {
        files.forEach(function(x) {
          if (typeof x === 'string') {
            list.push(x);
          } else {
            makeList(x.files);
          }
        });
      }

      function findDir(dir, s) {
        if (dir.dir === s) return dir;

        for (var i = 0; i < dir.files.length; i++) {
          var x = dir.files[i];

          if (typeof x === 'string') continue;

          var subfind = findDir(x, s);
          if (subfind !== null) return subfind;
        }

        return null;
      }
    },

    permute: function(arr) {
      if (arr.length === 0) return [];
      if (arr.length === 1) return [arr.slice()];

      var results = [];

      perm(0, arr.length - 1);

      return results;

      function perm(l, r) {
        var diff = r - l;
        if (diff === 1) {
          results.push(arr.slice());
          swap(l, r);
          results.push(arr.slice());
          swap(l, r);
        } else {
          perm(l + 1, r);
          for (var i = l + 1; i <= r; i++) {
            swap(l, i);
            perm(l + 1, r);
            swap(l, i);
          }
        }
      }

      function swap(a, b) {
        var tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
      }
    },

    fibonacci: function(n) {
      if (n <= 2) return 1;
      var a = 1, b = 1, c;

      while (--n > 1) {
        c = a + b;
        a = b;
        b = c;
      }

      return b;
    },

    validParentheses: function(n) {
      var results = [],
          str = Array(n);

      par(0, 0, 0);

      return results;

      function par(pos, open, close) {
        if (close === n) return void results.push(str.join(''));
        
        if (open > close) {
          str[pos] = ')';
          par(pos + 1, open, close + 1);
        }
        if (open < n) {
          str[pos] = '(';
          par(pos + 1, open + 1, close);
        }
      }
    }
  };
});
