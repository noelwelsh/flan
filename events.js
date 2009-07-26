//
// Events

// finiteTimerE : Number Number -> EventStream Number
function finiteTimerE(interval, ticks) {
  var timer = timerE(interval);
  var count = 0;
  var stop = receiverE();
  var counter = function(time) {
    //console.log("counter " + count);
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

// countE : EventStream Any -> EventStream Number
function countE(baseE) {
  var counter = makeCounter();
  var evt = baseE.mapE(counter);
  return evt;
}

// countE : EventStream Any -> EventStream Number
function countDownE(baseE, start) {
  var counter = makeDownCounter(start);
  var evt = baseE.mapE(counter);
  return evt;
}

// rangeE : Number Number Number Number -> EventStream Number
// start > stop or start < stop
function rangeE(start, stop, steps, interval) {
  var step = (stop - start) / steps;
  var timer_e = finiteTimerE(interval, steps);
  var count_e;
  
  if(step > 0) {
    count_e = countE(timer_e);
  } else {
    step = -step;
    count_e = countDownE(timer_e, steps);
  }
  var range_e = count_e.mapE(makeMultiplier(step));
  range_e.stopE = timer_e.stopE;
  return range_e;
}

