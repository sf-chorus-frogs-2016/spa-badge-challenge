// replacement for jquery document ready fxn
document.addEventListener("DOMContentLoaded", function(event){
  displayAllStudents();
  bindClickListeners();
  bindSubmitListeners();
});

var displayAllStudents = function() {
  miniQuery.AjaxWrapper.request({
    url: 'http://localhost:3000/students',
    type: 'GET',
  }).then(function(response) {
    // console.log(response)
    // => JSON object of @students
    var context = {
      students: JSON.parse(response)
    }
    // console.log(context)
    // => parsed JSON - array of Objects
    var theTemplateScript = miniQuery.SweetSelector.html("#list-all-studs")
    var theTemplate = Handlebars.compile(theTemplateScript)
    // console.log(theTemplate)
      // => the compile fxn from Handlebars
    // now pass the context (parsed JSON) to the compile fxn
    var theCompiledHTML = theTemplate(context)
    // and replace the html on the DOM
    miniQuery.SweetSelector.select("#content-space").innerHTML = theCompiledHTML
  }).catch(function(error) {
    console.log("Error! " + error)
  })
}

var bindClickListeners = function() {
  // console.log("Listeners BOUND")
  // attach event handler to click of student link
  miniQuery.SweetSelector.select("#content-space").onclick = function(event) {
    event = event || window.event
    var target = event.target || event.srcElement

    // listening for 2 different click on link events here
    if (target.nodeName != "A") {
      return
    }
      // get the class of the link clicked to determine if we should
      // display student details or "go" home (display all students again)
      var elementClass = target.getAttribute("class")
      // console.log(elementClass)
      switch (elementClass) {
        case "single-student":
          // console.log("clicked on single-student class")
          showStudent(event)
          return false;
          break;
        case "home-btn":
          // console.log("clicked on Home button")
          goHome()
          return false;
          break;
        default:
          alert("Error! Default Case Hit!")
          return false;
          break;
      }
  }
};

var bindSubmitListeners = function() {
  // listening for 2 different submit form events here
  miniQuery.SweetSelector.select("#content-space").onsubmit = function(event) {
    event.preventDefault();
    event = event || window.event
    var target = event.target || event.srcElement
    // console.log(target)
    // => html element clicked on (form)

    if (target.nodeName != "FORM") {
      return;
    }
    var formClass = target.getAttribute("class")
    // console.log(formClass);
    // => vote or new-badge

    switch (formClass) {
      case "vote":
        voteOnBadge();
        return false;
        break;
      case "new-badge":
        submitNewBadge();
        return false;
        break
      default:
        alert("Error! Default Case Hit!")
        return false;
        break;
    }
  };
}

var showStudent = function(event) {
  event.preventDefault();
  event = event || window.event
  var target = event.target || event.srcElement
  // console.log(target)
  // a tag on which user clicked

  var student_id = target.getAttribute("id")

  var request = miniQuery.AjaxWrapper.request({
    url: 'http://localhost:3000/students/' + student_id,
    type: 'GET',
  }).then(function(response) {
    // console.log(response)
    // => JSON object of single student object AND JSON array of badge objects belonging to that student
    var context = {
      student: { first_name: JSON.parse(response).first_name, last_name: JSON.parse(response).last_name, id: JSON.parse(response).id },
      badges: JSON.parse(response).badges
    }
    var theTemplateScript = miniQuery.SweetSelector.html("#student-details")
    var theTemplate = Handlebars.compile(theTemplateScript)
    var theCompiledHTML = theTemplate(context)
    miniQuery.SweetSelector.select("#content-space").innerHTML = theCompiledHTML
  }).catch(function(error) {
    console.log("Error! " + error)
  })
}

var goHome = function() {
  console.log("Going Home!")
  displayAllStudents()
}

var voteOnBadge = function() {
  event = event || window.event
  var target = event.target || event.srcElement
  // console.log("I Voted!")
  // console.log(target)

  var thisClass = target.getAttribute("class")
  var voteType = target.childNodes[1].getAttribute("class")
  var badgeID = target.getAttribute("id")

}

var submitNewBadge = function() {
  console.log("submitted new badge!")
}