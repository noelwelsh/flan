var testFiniteTimerE =
  testCase('testFiniteTimerE',
           function() {
             var counter = 0;
             var t = finiteTimerE(100,10);
             t.mapE(function(e) { counter++; });
             t.stopE.mapE(function() { checkEqual(counter, 10); });
           });

var testCountE =
  testCase('testCountE',
           function() {
             var counts = [];
             var t = finiteTimerE(100, 10);
             var c = countE(t);
             c.mapE(function(c) { counts.push(c); });
             t.stopE.mapE(function() {
                            checkEqual(counts, [0,1,2,3,4,5,6,7,8,9]);
                          });
           });

var testRangeE =
  testCase('testRangeE',
           function() {
             var counts = [];
             var r = rangeE(0, 100, 10, 10);
             r.mapE(function(c) { counts.push(c); });
             r.stopE.mapE(function() {
                            checkEqual(counts, [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
                          });
           });


var testMakeCounter =
  testCase('testMakeCounter',
           function() {
             var counter = makeCounter();
             checkEqual(counter(), 0);
             checkEqual(counter(), 1);
             checkEqual(counter(), 2);
             checkEqual(counter(), 3);
           });

var testMakeAdder =
  testCase('testMakeAdder',
           function() {
             var adder = makeAdder(0);
             checkEqual(adder(1), 1);
             checkEqual(adder(2), 2);
             checkEqual(adder(3), 3);
           });

var testMakeMultiplier =
  testCase('testMakeMultiplier',
           function() {
             var multiplier = makeMultiplier(1);
             checkEqual(multiplier(1), 1);
             checkEqual(multiplier(2), 2);
             checkEqual(multiplier(3), 3);
           });

function runTests() {
  testFiniteTimerE();
  testCountE();
  testRangeE();
  testMakeCounter();
  testMakeAdder();
  testMakeMultiplier();
}