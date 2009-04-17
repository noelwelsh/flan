//
// Flapjax Effects
//

//
// Core functions
//

// slideDownE : Element -> EventStream Boolean
//
// Scrolls height of an element from 0 to 100%. Returned event fires when the animation ends.
function slideDownE(elt) {
  var height = elt.getHeight();
  var steps = 20;
  var interval = 20;
  var height_e = rangeE(0, height, steps, interval);

  insertValueB({style: {height: height_e.startsWith(0)}}, elt);
  return height_e.stopE;
}


// fadeInE : Element Int -> Unit
function fadeInE(elt) {
  var steps = 20;
  var interval = 20;

  var opacity_e = rangeE(0, 1.0, steps, steps, interval);

  insertValueB({style: {opacity: opacity_e.startsWith(0)}}, elt);
}

