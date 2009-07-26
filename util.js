//
// Curried functions

// makeCounter : () -> Any -> Number
function makeCounter() {
  var count = 0;
  return function(e) {
    var now = count;
    count++;
    return now;
  };
}

// makeCounter : () -> Any -> Number
function makeDownCounter(start) {
  var count = start;
  return function(e) {
    var now = count;
    count--;
    return now;
  };
}

// makeAdder : Number -> Number -> Number
function makeAdder(start) {
  return function(step) {
    return start + step;
  };
}

// makeMultiplier : Number -> Number -> Number
function makeMultiplier(start) {
  return function(step) {
    return start * step;
  };
}
