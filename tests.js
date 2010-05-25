function testFiniteTimerE() {
  test('testFiniteTimerE',
       function() {
           var counter = 0;
           var t = finiteTimerE(100,10);
           t.mapE(function(e) { counter++; });
           t.stopE.mapE(function() { equals(counter, 10); });
       })};

function testCountE() {
  test('testCountE',
       function() {
           var counts = [];
           var t = finiteTimerE(100, 10);
           var c = countE(t);
           c.mapE(function(c) { counts.push(c); });
           t.stopE.mapE(function() {
               equals(counts, [0,1,2,3,4,5,6,7,8,9]);
           });
       })};

function testIncreasingRangeE() {
  test('testIncreasingRangeE',
       function() {
           var counts = [];
           var r = rangeE(0, 100, 10, 10);
           r.mapE(function(c) { counts.push(c); });
           r.stopE.delayE(10).mapE(function() {
               equals(counts, [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
           });
       })};


function testDecreasingRangeE() {
    test('testDecreasingRangeE',
         function() {
             // decreasing range
             var counts = [];
             var r = rangeE(100, 0, 10, 10);
             r.mapE(function(c) { counts.push(c); });
             r.stopE.delayE(10).mapE(function() {
                 equals(counts, [100, 90, 80, 70, 50, 60, 40, 30, 20, 10, 0]);
             });
         })};


function testMakeCounter() {
    test('testMakeCounter',
         function() {
             var counter = makeCounter();
             equals(counter(), 0);
             equals(counter(), 1);
             equals(counter(), 2);
             equals(counter(), 3);
         })};

function testMakeDownCounter() {
    test('testMakeDownCounter',
         function() {
             var counter = makeDownCounter(20);
             equals(counter(), 20);
             equals(counter(), 19);
             equals(counter(), 18);
             equals(counter(), 17);
         })};


function testMakeAdder() {
    test('testMakeAdder',
         function() {
             var adder = makeAdder(0);
             equals(adder(1), 1);
             equals(adder(2), 2);
             equals(adder(3), 3);
         })};

function testMakeMultiplier() {
    test('testMakeMultiplier',
         function() {
             var multiplier = makeMultiplier(1);
             equals(multiplier(1), 1);
             equals(multiplier(2), 2);
             equals(multiplier(3), 3);
         })};

function testParseColour() {
    test('testParseColour',
         function() {
             same(parseColour('#0a0c0e'), {r: 10, g: 12, b: 14});
             same(parseColour('#fafcfe'), {r: 250, g: 252, b: 254});
         })
}

function runTests() {
    testFiniteTimerE();
    testCountE();
    testIncreasingRangeE();
    testDecreasingRangeE();
    testMakeCounter();
    testMakeDownCounter();
    testMakeAdder();
    testMakeMultiplier();
    testParseColour();
}