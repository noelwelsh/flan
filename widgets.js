//
// Widgets

// InPlaceEditor
//     : String String
//    -> { id:      String
//         element: DOMElement
//         validE:  (Event boolean)
//         valueE:  (Event String) }
//
// Given the ID of a span in the DOM, creates an
// edit-in-place text field:
//
//  - click on the span to convert it to a text input;
//  - press enter or leave the field while editing to accept
//    any changes;
//  - press escape to cancel changes to the input.
//
function InPlaceEditor(id, initialValue) {
  this.validE = receiverE();
  this.valueE = receiverE();

  var base = DIV({id: id, className: "editinplace"});

  this.id = id;
  this.currentValue = initialValue;

  // The edit-in-place uses a SPAN or an INPUT depending on
  // what state it's in.
  this.inputElem = INPUT({value: initialValue});
  this.displayElem  = SPAN(initialValue);

  this.setupEventHandlers();
  this.insertDisplayElem();

  this.setupEventHandlers = function () {
    var focusHandler = this.makeDisplayFocusHandler();
    var displayElem = this.displayElem;
    var inputElem = this.inputElem;
    var validHandler = this.makeValidHandler();
    var setHandler = this.makeSetHandler();

    this.validE.lift_e(validHandler);
    this.setE.lift_e(setHandler);
    this.blurE = extractEvents_e(this.inputElem, 'blur');

    displayElem.onfocus = focusHandler;
    displayElem.onclick = focusHandler;

    inputElem.onkeyup = this.makeInputKeyupHandler();
    inputElem.onblur = this.makeInputBlurHandler();
  };

  this.makeDisplayFocusHandler = function() {
    var obj = this;

    return function() {
      obj.doDisplayFocused();
    };
  };

  this.makeInputKeyupHandler = function() {
    var obj = this;

    return function(e) {
    // Cross-browser support
      if (!e) var e = window.event;

      switch(e.keyCode) {
      case 13: /* Enter */
        obj.doInputEntered();
        break;
      case 27: /* Escape */
        obj.doInputCancelled();
        break;
      }
    };
  };

  this.makeSetHandler = function() {
    var obj = this;

    return function(value) {
      obj.setCurrentValue(value);
    }
  };

  this.makeInputBlurHandler = function () {
    var obj = this;

    return function() {
      obj.doInputEntered();
    }
  };

  this.makeValidHandler = function() {
    var obj = this;

    return function(valid) {
      if (valid) {
        obj.element.className = 'editinplace';
      } else {
        obj.element.className = 'editinplace invalid';
      }
    };
  };

  this.doDisplayFocused = function() {
    this.insertInputElem();
    this.inputElem.focus();
  };

  doInputEntered: function() {
    var newValue = this.inputElem.value;
    this.sendCurrentValue(newValue);
    this.insertDisplayElem();
  },

  doInputCancelled: function() {
    this.insertDisplayElem();
  },

  setCurrentValue: function(newValue) {
    this.currentValue = newValue;

    var node = this.displayElem;

    node.removeChild(node.childNodes[0]);
    node.appendChild(TEXT(this.currentValue));

    node = this.inputElem;
    node.value = this.currentValue;
  },

  sendCurrentValue: function(newValue) {
    this.setCurrentValue(newValue);
    this.valueE.sendEvent(newValue);
  },

  insertDisplayElem: function() {
    var node = this.element;
    var child = node.childNodes[0];

    if (child !== undefined) {
      node.removeChild(child);
    }
    node.appendChild(this.displayElem);
  },

  insertInputElem: function() {
    var node = this.element;
    var child = node.childNodes[0];

    if (child !== undefined) {
      node.removeChild(child);
    }
    node.appendChild(this.inputElem);
  }
}