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

// slideUpE : Element -> EventStream Boolean
//
// Scrolls height of an element from 100% to 0. Returned event fires when the animation ends.
function slideUpE(elt) {
  var height = elt.getHeight();
  var steps = 20;
  var interval = 20;
  var height_e = rangeE(height, 0, steps, interval);

  insertValueB({style: {height: height_e.startsWith(height)}}, elt);
  return height_e.stopE;
}


// fadeInE : Element Int -> Unit
function fadeInE(elt) {
  var steps = 20;
  var interval = 100;

  var opacity_e = rangeE(0, 1, steps, interval);

  insertValueB({style: {opacity: opacity_e.startsWith(0)}}, elt);
}

// fadeOutE : Element Int -> Unit
function fadeOutE(elt) {
  var steps = 20;
  var interval = 100;

  var opacity_e = rangeE(1, 0, steps, interval);
  
  insertValueB({style: {opacity: opacity_e.startsWith(1)}}, elt);
}

