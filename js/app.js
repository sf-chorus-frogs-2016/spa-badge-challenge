var SweetSelector = (function() {

  return {
    select: function(css_param){


    var classOrId = css_param.split("",1).toString();
    var DOMElement = "hello"

    if ( classOrId == "." ) {
      var paramName = css_param.substring(1,css_param.length);
      DOMElement = document.getElementsByClassName(paramName);
    } else if ( classOrId == "#" ) {
      var paramName = css_param.substring(1,css_param.length);
      DOMElement = document.getElementById(paramName);
    } else {
      DOMElement = document.getElementsByTagName(css_param);
    };

    return DOMElement;

    }
  };

})();

var DOM = (function() {

  return {
    hide: function(css_param){

      var classOrId = css_param.split("",1).toString();
      var DOMElement = "hello"

      debugger;

      if ( classOrId == "." ) {
        var paramName = css_param.substring(1,css_param.length);
        document.getElementsByClassName(paramName)[0].style.display = "none";
      } else if ( classOrId == "#" ) {
        var paramName = css_param.substring(1,css_param.length);
        document.getElementById(paramName).style.display = "none";
      } else {
        DOMElement = document.getElementsByTagName(css_param);
      };

    },

    show: function(css_param){

      var classOrId = css_param.split("",1).toString();
      var DOMElement = "hello"

      if ( classOrId == "." ) {
        var paramName = css_param.substring(1,css_param.length);
        document.getElementsByClassName(paramName)[0].style.display = "initial";
      } else if ( classOrId == "#" ) {
        var paramName = css_param.substring(1,css_param.length);
        document.getElementById(paramName).style.display = "initial";
      } else {
        DOMElement = document.getElementsByTagName(css_param);
      };

    },

    addClass: function(css_param, new_class){

      var classOrId = css_param.split("",1).toString();
      var DOMElement = "hello"

      if ( classOrId == "." ) {
        var paramName = css_param.substring(1,css_param.length);

        document.getElementsByClassName(paramName)[0].setAttribute('class', paramName + ' ' + new_class);
      } else if ( classOrId == "#" ) {
        var paramName = css_param.substring(1,css_param.length);
        document.getElementById(paramName).setAttribute('class', paramName + ' ' + new_class);
      } else {
        DOMElement = document.getElementsByTagName(css_param);
      };

    },

    removeClass: function(css_param, new_class){

      var classOrId = css_param.split("",1).toString();
      var DOMElement = "hello"

      if ( classOrId == "." ) {
        var paramName = css_param.substring(1,css_param.length);

        var x = document.getElementsByClassName(paramName)[0].className;

        x = x.replace(" " + new_class, "");

        document.getElementsByClassName(paramName)[0].setAttribute('class', x);
      } else if ( classOrId == "#" ) {
        console.log("Hello");
      } else {
        DOMElement = document.getElementsByTagName(css_param);
      };

    },

    addContent: function(css_param, content){

      var classOrId = css_param.split("",1).toString();
      var DOMElement = "hello"

      if ( classOrId == "." ) {
        var paramName = css_param.substring(1,css_param.length);

        var x = document.getElementsByClassName(paramName)[0].className;

        x = x.replace(" " + new_class, "");

        document.getElementsByClassName(paramName)[0].setAttribute('class', x);
      } else if ( classOrId == "#" ) {
        console.log("Hello");
      } else {
        DOMElement = document.getElementsByTagName(css_param);
      };

    }
  };
})();

var EventDispatcher = (function() {

  return {
    on: function(className, secondClassName, ourFunction){
      var y = SweetSelector.select(className);
      y[0].addEventListener(secondClassName, ourFunction);
    },

    trigger: function(className, secondClassName){
      var event = new Event(secondClassName);
      var y = SweetSelector.select(className);

      y[0].dispatchEvent(event);
    }

  };
})();

var AjaxWrapper = (function(){

  return {

    request: function(hash){
      url = hash["url"];
      type = hash["type"];

      var promise = new Promise(function(resolve, reject){

        var newRequest = new XMLHttpRequest();

        newRequest.open(type, url, true);
        newRequest.send(null);
        newRequest.onreadystatechange = function(){
          if(newRequest.readyState == 4){
            resolve(this.response);
          } else {
            reject(this.statusText);
          }

        };
      })

    return promise;

    },
  };

})();

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  var personLink = SweetSelector.select("li");

  debugger;

  EventDispatcher.on('li', 'a', function() {

    var currScope = this;

    console.log(currScope);

  });

  EventDispatcher.trigger(personlink, 'a');
});

