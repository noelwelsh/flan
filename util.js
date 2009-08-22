//
// Curried functions
// makeCounter : () -> Any -> Number
function makeCounter() {
  var count = 0;
  return function(e) {
    var now = count;
    count++;
    //console.log(now)
    return now;
  };
}
// makeCounter : () -> Any -> Number
function makeCounter2(start, step) {
  var count = start;
  return function(e) {
    var now = count;
    count += step;
    return now;
  };
}

// makeCounter : () -> Any -> Number
function makeDownCounter(start, step) {
  var count = start;
  return function(e) {

    var now = count;
    count--;
    console.log(now)
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
    // console.log(start * step)
    return start * step;
  };
}
