(function() {
  var root, x, y;

  root = typeof window !== "undefined" && window !== null ? window : this;

  console.log(root);

  x = 2;

  y = function(x) {
    return x * x;
  };

  (function() {
    return console.log(y(3));
  })();

}).call(this);
