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


// fadeInE : Element -> EventStream Boolean
function fadeInE(elt) {
  var steps = 20;
  var interval = 20;
  var opacity_e = rangeE(0, 1, steps, interval);
  insertValueB({style: {opacity: opacity_e.startsWith(0)}}, elt);
  return opacity_e.stopE;
}

// fadeOutE : Element -> EventStream Boolean
function fadeOutE(elt) {
  var steps = 20;
  var interval = 20;
  var opacity_e = rangeE(1, 0, steps, interval);
  insertValueB({style: {opacity: opacity_e.startsWith(1)}}, elt);
  return opacity_e.stopE;
}


function straightToE(elt, start, end, duration) {
  var steps = 100;
  var interval = 20;
  var x_e = rangeE(start.x, end.x, steps, interval);
  var x_b = x_e.startsWith(start.x);
  var y_e = rangeE(start.y, end.y, steps, interval);
  var y_b = y_e.startsWith(start.y);
  insertValueB({style: { position:"absolute", left: x_b, top: y_b }}, elt);
  return y_e.stopE;
}

/*
function straightToB(elt, start, end, duration) {
  var steps = 100;
  var interval = 20;
  var x_b = rangeB(start.x, end.x, steps, interval);
  var y_b = rangeB(start.y, end.y, steps, interval);

  insertValueB({style: { position:"absolute", left: x_b, top: y_b }}, elt);
  return;
}
*/

/*
 * show
 * hide
 * fadeTo(speed, opacity )
 * slideLeft(duration, steps)
 * slideRight(duration, steps)
 * straightTo(x, y, duration, steps, easing)
 * curveTo(x, y, duration, steps, easing)
 * shake$
 *
 elt.animate(
 params={
        width: "70%",
        opacity: 0.4,
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px"
      },
 duration = 1500,
 steps );
    });

 */