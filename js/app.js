document.addEventListener("DOMContentLoaded", function(event) {

SweetSelector = {
  select: function(string){
    if(string[0] === "#"){
      return document.getElementById(string.slice(1))
    }
    else if(string[0] === "."){
      return document.getElementsByClassName(string.slice(1))[0]
    }
    else{
      return document.getElementsByTagName(string)[0]
    }
  }
};

DOM = {
  hide: function(element){
    return SweetSelector.select(element).style.display = "none";
  },
  show: function(element){
    return SweetSelector.select(element).style.display = "initial";
  },
  addClass: function(currentClass, addedClass){
    return SweetSelector.select(currentClass).className += (" " + addedClass);
  },
  removeClass: function(currentClass,removedClass){
    var theClass = SweetSelector.select(currentClass);
    var classes = theClass.className.split(" ");
    classes.splice(classes.indexOf("removedClass"));
    return theClass.className = classes.join(" ")
  }
};

EventDispatcher = {
  on: function(element, event, eventFunction){
    return SweetSelector.select(element).addEventListener(event, eventFunction);
  },
  trigger: function(element, event){
    var newEvent = new Event(event)
    return SweetSelector.select(element).dispatchEvent(newEvent);
  }
};

AjaxWrapper = {
  request: function(hash){
    var ourPromise = new Promise(function(resolve, reject){
      var xmlRequest = new XMLHttpRequest();
      xmlRequest.open(hash.type, hash.url, true);
      xmlRequest.send();
      xmlRequest.onload = function() {
        if (this.status >= 200 && this.status < 400) {
          resolve(this.response);
        } else {
          reject(this.statusText);
        }
      };
      xmlRequest.onerror = function() {
        reject(this.statusText);
      }
    })
    return ourPromise
  }
};


indexResponse = AjaxWrapper.request({type: 'GET', url: "http://localhost:3000/students"});
  indexResponse.then(function(data){
  students = JSON.parse(data);
  list = SweetSelector.select(".student_list");
  for (var i = 0; i < students.length; i++){
  var x = document.createElement("LI");
  x.innerHTML = "<a class='home-link' id='link-"+students[i].id+"' href='students/"+students[i].id+"'>"+students[i].name+"</a>";
  list.appendChild(x)}
});

EventDispatcher.on('a','home-link',function(){
  id =
  showResponse = AjaxWrapper.request({type: 'GET', url: "http://localhost:3000/students/:id"})
})



// showResponse = AjaxWrapper.request({type: 'GET', url: "http://localhost:3000/students/:id"});









});
