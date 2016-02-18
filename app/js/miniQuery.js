var miniQuery = (function() {

  var SweetSelector = (function() {
    return {
      select: function(selector) {
        var element = selector.slice(0,1);

        if (element === "#") {
          return document.getElementById(selector.slice(1,selector.length))
        } else if (element === ".") {
          return document.getElementsByClassName(selector.slice(1,selector.length))[0]
        } else {
          return document.getElementsByTagName(selector)[0]
        }
      },
      html: function(selector) {
        return SweetSelector.select(selector).innerHTML;
      }
    }
  })();

  var DOM = (function() {
    return {
      hide: function(targetSelector) {
        return targetSelector.style.display = "none"
      },
      show: function(targetSelector) {
        return targetSelector.style.display = null
      },
      addClass: function(targetSelector, classToAdd) {
        return targetSelector.className = targetSelector.slice(1,targetSelector.length) + " " + classToAdd;
      },
      removeClass: function(targetSelector, classToRemove) {
        return targetSelector.classList.remove(classToRemove)
      }
    }
  })();

  var EventDispatcher = (function() {
    return {
      // attach an EventListener to the div that has both .klass and .shadi classes
      // store the function (console.log statement) to this event
      on: function(element, event, fxn) {
        element.addEventListener(event, fxn);
      },

      // this will actually TRIGGER the event and run the console.log statement stored above
      trigger: function(element, event) {
        // store a new event (see Mozilla blog post in challenge)
        var newEvent = new Event(event)
        // select the actual html element from the collection and execute the callback function
        // see docs!
        // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
        element.dispatchEvent(newEvent);
      }
    }
  })();

  var AjaxWrapper = (function() {
    return {
      request: function(args) {
        var promise = new Promise(function(resolve, reject){
          var req = new XMLHttpRequest();
          req.open(args.type, args.url, true);
          req.send(args.data);
          req.onload = function() {
            if (this.status >= 200 && this.status < 300) {
              // Performs the function "resolve" when this.status is equal to 2xx
              resolve(this.response);
            } else {
              // Performs the function "reject" when this.status is different than 2xx
              reject(this.statusText);
            }
          };
        });
        return promise;
      }
    };
  })();

  return {
    SweetSelector: SweetSelector,
    DOM: DOM,
    EventDispatcher: EventDispatcher,
    AjaxWrapper: AjaxWrapper
  }
})();