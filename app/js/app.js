// replacement for jquery document ready fxn
document.addEventListener("DOMContentLoaded", function(event){
  displayAllStudents()
  bindListeners()
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
      // => the complie fxn from Handlebars
    // now pass the context (parsed JSON) to the compile fxn
    var theCompiledHTML = theTemplate(context)
    // and replace the html on the DOM
    miniQuery.SweetSelector.select("#content-space").innerHTML = theCompiledHTML

  }).catch(function(error) {
    console.log("Error! " + error)
  })
}

var bindListeners = function() {
  // console.log("Listeners BOUND")
  // attach event handler to click of student link
  miniQuery.SweetSelector.select("#content-space").onclick = function(event) {
    event.preventDefault();
    event = event || window.event
    var target = event.target || event.srcElement

    if (target.nodeName != "A") {
      return;
    }
    var elementClass = target.getAttribute("class")
    console.log(elementClass)
    switch (elementClass) {
      case "single-student":
        console.log("clicked on single-student class")
        showStudent()
        break;
      case "home-btn":
        console.log("clicked on Home button")
        goHome()
        break;
      default:
        alert("Please click a link or button")
        break;
    }
  }

  // miniQuery.SweetSelectorr.select(".container").onsubmit = submitNewBadge
}

var showStudent = function() {
  event = event || window.event
  var target = event.target || event.srcElement
  // console.log(target)
  // a tag on which user clicked

  var student_id = target.getAttribute("id")
  // console.log(student_id)

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
  console.log("I Voted!")
  console.log(target)
}


// var theTemplateScript = miniQuery.SweetSelector.html("#list-all-studs")

// var theTemplate = Handlebars.compile(theTemplateScript)
// console.log(theTemplate)
// => the complie fxn from Handlebars

// now pass the context (parsed JSON) to the compile fxn
// var theCompiledHTML = theTemplate(context)

// and replace the html on the DOM
// miniQuery.SweetSelector.select("#student-list").innerHTML = theCompiledHTML



// table.onclick = function(event) {
//   event = event || window.event
//   var target = event.target || event.srcElement
//   // ...
// }