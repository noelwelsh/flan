/// Make Everything Work (MEW)
/// A simple testing framework for Javascript
/// Copyright Noel Welsh 2009

/// Requires prototype

function insertTestFailure(name, e) {
  var results = $('testResults');
  if (results === undefined) {
    results = document.createElement('div');
    results.id = 'testResults';
    $$('body')[0].appendChild(results);
  }

  var p = document.createElement('div');
  p.className = 'testResult';
  p.innerHTML = "<p><strong>Test failure</strong>:" + name +"</p><p>" + e + "</p>";

  results.appendChild(p);
}

function insertTestSuccess(name) {
  var results = $('testResults');
  if (results === undefined) {
    results = document.createElement('div');
    results.id = 'testResults';
    $$('body')[0].appendChild(results);
  }

  var p = document.createElement('div');
  p.className = 'testResult';
  p.innerHTML = "<p><strong>Test success</strong> " +  name + "</p>";

  results.appendChild(p);
}

function defaultCheckAround(thunk) {
  try {
    thunk();
    insertTestSuccess("check");
  } catch (e) {
    insertTestFailure("check", e);
  }
}

var currentCheckAround = defaultCheckAround;

function failBinaryCheck(name, actual, expected) {
  throw name + ": " + actual + " " + expected;
}

// checkEqual : 'a 'a -> ()
//
// Same type and same properties
function checkEqual(actual, expected) {
  if (Object.isArray(actual) && Object.isArray(expected)) {
    currentCheckAround(function() {
                         if (actual.length === expected.length) {
                           for(var i=0; i < actual.length; i++) {
                             if(actual[i] !== expected[i]) {
                               return false;
                             }
                           }
                           return true;
                         } else {
                           return false;
                         }
                       });
  } else {
    currentCheckAround(function() {
                         if (!(actual === expected)) {
                           failBinaryCheck("checkEqual", actual, expected);                                            }
                       });
  }
}


function testCaseCheckAround(thunk) {
  // Throw any exceptions to the test case
  thunk();
}

function testCase(name, thunk) {
  return function() {
    var lastCheckAround = currentCheckAround;
    currentCheckAround = testCaseCheckAround;

    try {
      thunk();
      insertTestSuccess(name);
    } catch (e) {
      insertTestFailure(name, e);
    }

    currentCheckAround = lastCheckAround;
  };
}