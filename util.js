//
// Curried functions

// makeCounter : [Number] [Number] -> Any -> Number
function makeCounter(start, step) {
  start = start || 0;
  step = step || 1;

  var count = start;
  return function(e) {
    var now = count;
    count += step;
    return now;
  };
}

// makeDownCounter : [Number] [Number] -> Any -> Number
function makeDownCounter(start, step) {
  start = start || 0;
  step = step || 1;

  return makeCounter(start, -step);
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
//
// Parse CSS colours in the #rrggbb format into an object with r, g, b components
// Formats we don't handle: #rgb, rgb(N, N, N), keywords like white, black, aqua.
function parseColour(colour) {
  var m = colour.match(/\#([0-9a-fA-F][0-9a-fA-F])([0-9a-fA-F][0-9a-fA-F])([0-9a-fA-F][0-9a-fA-F])/);

  if(m) {
    return {
      r: parseInt(m[1], 16),
      g: parseInt(m[2], 16),
      b: parseInt(m[3], 16)
    };
  }
}