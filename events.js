//
// Events

// finiteTimerE : Number Number -> EventStream Number
function finiteTimerE(interval, ticks) {
  var timer = timerE(interval);
  var count = 0;
  var stop = receiverE();
  var counter = function(time) {
    if (count == ticks) {
      disableTimer(timer);
      stop.sendEvent(true);
    } else {
      count++;
    }
    return time;
  };

  var finiteTimer = timer.mapE(counter);
  finiteTimer.stopE = stop;

  return finiteTimer;
}

// countE : EventStream Any [Number] [Number] -> EventStream Number
function countE(baseE, start, step) {
  var counter = makeCounter(start, step);
  var evt = baseE.mapE(counter);
  return evt;
}

// rangeE : Number Number Number Number -> EventStream Number
// start > stop or start < stop
function rangeE(start, stop, steps, interval) {
  var step = (stop - start) / steps;
  var timer_e = finiteTimerE(interval, steps);
  var range_e;

  range_e = countE(timer_e, start, step);
  range_e.stopE = timer_e.stopE;
  return range_e;
}
