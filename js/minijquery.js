// RELEASE 0
var SweetSelector = (function(){
  return {
    select: function(element){
      if(element.includes('#')){
        var str = element.slice(1,element.length)
        return document.getElementById(str);
      }
      else if(element.includes('.')){
        var str2 = element.slice(1,element.length)
        return document.getElementsByClassName(str2)[0];
      }
      else{
        return document.getElementsByTagName(element)[0];
      }
    }
  };
})();

var DOM = (function(){
  return {
    hide: function(element){
      return SweetSelector.select(element).style.display = 'none';
    },
    show: function(element){
      return SweetSelector.select(element).style.removeProperty("display");
    },
    addClass: function(element, className){
      return SweetSelector.select(element).className += ' ' + className;
    },
    removeClass: function(element, className){
      return SweetSelector.select(element).classList.remove(className);
    }
  }
})();


var EventDispatcher = (function(){
  return {
    on: function(target, event, func){
      SweetSelector.select(target).addEventListener(event, func);
    },
    trigger: function(target, event){
      var newEvent = new Event(event);
      SweetSelector.select(target).dispatchEvent(newEvent);
    }
  }
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
  }
})();

AjaxWrapper.request({
 url: "http://www.hanahyendler.com/",
 type: 'GET'
})
.then(function(response) {
  console.log(response);
})
.catch(function(error) {
  console.log(error);
});
