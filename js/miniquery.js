/*!
 * minQuery
 */

var miniQuery = (function(){

  var SweetSelector = {
    select: function(selector) {
      var element = selector.slice(0,1);
      if (element === "#") {
        return document.getElementById(selector.slice(1,selector.length));
      } else if (element === ".") {
        return document.getElementsByClassName(selector.slice(1,selector.length))[0]
      } else {
        return document.getElementsByTagName(selector)[0]
      }
    },
  };

  var DOM = (function() {
    return {
      hide: function(selector) {
        return SweetSelector.select(selector).style.display="none";
      },
      show: function(selector) {
        return SweetSelector.select(selector).style.display=null;
      },
      addClass: function(selector, newClass) {
        return SweetSelector.select(selector).className = selector.slice(1,selector.length) + " " + newClass;
      },
      removeClass: function(selector, removeClass) {
        return SweetSelector.select(selector).className = SweetSelector.select(selector).className.replace(removeClass, '').trim();
      }
    };
  })();

  var EventDispatcher = (function() {
    return {
      on: function(selector, event, eventFunction){
        var element = SweetSelector.select(selector);
        element.addEventListener(event, eventFunction);
      },
      trigger: function(selector, event){
        var element = SweetSelector.select(selector);
        var newEvent = new Event(event);
        element.dispatchEvent(newEvent);
      }
    };
  })();

  var AjaxWrapper = (function(){
    return {
      request: function(ajaxRequest) {
        var promise = new Promise(function(resolve, error){
          var newReq = new XMLHttpRequest();
          newReq.open(ajaxRequest.type, ajaxRequest.url);
          newReq.send();

          newReq.onload = function() {
            if(this.status >= 200 && this.status < 300) {
              resolve(this.response);
            } else {
              error(this.statusText);
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