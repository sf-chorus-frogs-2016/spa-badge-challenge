// var miniQuery = (function(){

//   var SweetSelector = {
//     select: function(selector) {
//       var element = selector.slice(0,1);
//       if (element === "#") {
//         return document.getElementById(selector.slice(1,selector.length));
//       } else if (element === ".") {
//         return document.getElementsByClassName(selector.slice(1,selector.length))[0]
//       } else {
//         return document.getElementsByTagName(selector)[0]
//       }
//     },
//   };

//   var DOM = (function() {
//     return {
//       hide: function(selector) {
//         return SweetSelector.select(selector).style.display="none";
//       },
//       show: function(selector) {
//         return SweetSelector.select(selector).style.display=null;
//       },
//       addClass: function(selector, newClass) {
//         return SweetSelector.select(selector).className = selector.slice(1,selector.length) + " " + newClass;
//       },
//       removeClass: function(selector, removeClass) {
//         return SweetSelector.select(selector).className = SweetSelector.select(selector).className.replace(removeClass, '').trim();
//       }
//     };
//   })();

//   var EventDispatcher = (function() {
//     return {
//       on: function(selector, event, eventFunction){
//         var element = SweetSelector.select(selector);
//         element.addEventListener(event, eventFunction);
//       },
//       trigger: function(selector, event){
//         var element = SweetSelector.select(selector);
//         var newEvent = new Event(event);
//         element.dispatchEvent(newEvent);
//       }
//     };
//   })();

//   var AjaxWrapper = (function(){
//     return {
//       request: function(ajaxRequest) {
//         var promise = new Promise(function(resolve, error){
//           var newReq = new XMLHttpRequest();
//           newReq.open(ajaxRequest.type, ajaxRequest.url);
//           newReq.send();

//           newReq.onload = function() {
//             if(this.status >= 200 && this.status < 300) {
//               resolve(this.response);
//             } else {
//               error(this.statusText);
//             }
//           };

//         });
//         return promise;
//       }
//     };
//   })();

//   return {
//     SweetSelector: SweetSelector,
//     DOM: DOM,
//     EventDispatcher: EventDispatcher,
//     AjaxWrapper: AjaxWrapper
//   }

// })();


//................................................................//

// var SweetSelector = (function() {

//   return {
//     select: function(css_param){


//     var classOrId = css_param.split("",1).toString();
//     var DOMElement = "hello"

//     if ( classOrId == "." ) {
//       var paramName = css_param.substring(1,css_param.length);
//       DOMElement = document.getElementsByClassName(paramName);
//     } else if ( classOrId == "#" ) {
//       var paramName = css_param.substring(1,css_param.length);
//       DOMElement = document.getElementById(paramName);
//     } else {
//       DOMElement = document.getElementsByTagName(css_param);
//     };

//     return DOMElement;

//     }
//   };

// })();

// var DOM = (function() {

//   return {
//     hide: function(css_param){

//       var classOrId = css_param.split("",1).toString();
//       var DOMElement = "hello"

//       debugger;

//       if ( classOrId == "." ) {
//         var paramName = css_param.substring(1,css_param.length);
//         document.getElementsByClassName(paramName)[0].style.display = "none";
//       } else if ( classOrId == "#" ) {
//         var paramName = css_param.substring(1,css_param.length);
//         document.getElementById(paramName).style.display = "none";
//       } else {
//         DOMElement = document.getElementsByTagName(css_param);
//       };

//     },

//     show: function(css_param){

//       var classOrId = css_param.split("",1).toString();
//       var DOMElement = "hello"

//       if ( classOrId == "." ) {
//         var paramName = css_param.substring(1,css_param.length);
//         document.getElementsByClassName(paramName)[0].style.display = "initial";
//       } else if ( classOrId == "#" ) {
//         var paramName = css_param.substring(1,css_param.length);
//         document.getElementById(paramName).style.display = "initial";
//       } else {
//         DOMElement = document.getElementsByTagName(css_param);
//       };

//     },

//     addClass: function(css_param, new_class){

//       var classOrId = css_param.split("",1).toString();
//       var DOMElement = "hello"

//       if ( classOrId == "." ) {
//         var paramName = css_param.substring(1,css_param.length);

//         document.getElementsByClassName(paramName)[0].setAttribute('class', paramName + ' ' + new_class);
//       } else if ( classOrId == "#" ) {
//         var paramName = css_param.substring(1,css_param.length);
//         document.getElementById(paramName).setAttribute('class', paramName + ' ' + new_class);
//       } else {
//         DOMElement = document.getElementsByTagName(css_param);
//       };

//     },

//     removeClass: function(css_param, new_class){

//       var classOrId = css_param.split("",1).toString();
//       var DOMElement = "hello"

//       if ( classOrId == "." ) {
//         var paramName = css_param.substring(1,css_param.length);

//         var x = document.getElementsByClassName(paramName)[0].className;

//         x = x.replace(" " + new_class, "");

//         document.getElementsByClassName(paramName)[0].setAttribute('class', x);
//       } else if ( classOrId == "#" ) {
//         console.log("Hello");
//       } else {
//         DOMElement = document.getElementsByTagName(css_param);
//       };

//     },

//     addContent: function(css_param, content){

//       var classOrId = css_param.split("",1).toString();
//       var DOMElement = "hello"

//       if ( classOrId == "." ) {
//         var paramName = css_param.substring(1,css_param.length);

//         var x = document.getElementsByClassName(paramName)[0].className;

//         x = x.replace(" " + new_class, "");

//         document.getElementsByClassName(paramName)[0].setAttribute('class', x);
//       } else if ( classOrId == "#" ) {
//         console.log("Hello");
//       } else {
//         DOMElement = document.getElementsByTagName(css_param);
//       };

//     }
//   };
// })();

// var EventDispatcher = (function() {

//   return {
//     on: function(className, secondClassName, ourFunction){
//       var y = SweetSelector.select(className);
//       y[0].addEventListener(secondClassName, ourFunction);
//     },

//     trigger: function(className, secondClassName){
//       var event = new Event(secondClassName);
//       var y = SweetSelector.select(className);

//       y[0].dispatchEvent(event);
//     }

//   };
// })();

// var AjaxWrapper = (function(){

//   return {

//     request: function(hash){
//       url = hash["url"];
//       type = hash["type"];

//       var promise = new Promise(function(resolve, reject){

//         var newRequest = new XMLHttpRequest();

//         newRequest.open(type, url, true);
//         newRequest.send(null);
//         newRequest.onreadystatechange = function(){
//           if(newRequest.readyState == 4){
//             resolve(this.response);
//           } else {
//             reject(this.statusText);
//           }

//         };
//       })

//     return promise;

//     },
//   };

// })();

// document.addEventListener("DOMContentLoaded", function(event) {
//   console.log("DOM fully loaded and parsed");

//   var personLink = SweetSelector.select("li");

//   debugger;

//   EventDispatcher.on('li', 'a', function() {

//     var currScope = this;

//     console.log(currScope);

//   });

//   EventDispatcher.trigger(personlink, 'a');
// });