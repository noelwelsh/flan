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

//
// Parsing colours

// parseColour : String -> U({r: Number,  g: Number, b: Number}, undefined)
function parseColour(colour) {
  var m = color.match(/\#([0-9a-fA-F][0-9a-fA-F])([0-9a-fA-F][0-9a-fA-F])([0-9a-fA-F][0-9a-fA-F])/);

  if(m) {
    return {
      r: parseInt(m[1], 16);
      g: parseInt(m[2], 16);
      b: parseInt(m[3], 16);
    };
  }
}