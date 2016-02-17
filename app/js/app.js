// replacement for jquery document ready fxn
document.addEventListener("DOMContentLoaded", function(event){
  displayAllStudents()
  bindListeners()
});

var displayAllStudents = function() {
  var request = miniQuery.AjaxWrapper.request({
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
    miniQuery.SweetSelector.select("#student-list").innerHTML = theCompiledHTML

  }).catch(function(error) {
    console.log("Error! " + error)
  })
}

var bindListeners = function() {
  // console.log("Listeners BOUND")

  // attach event handler to click of student link
  miniQuery.SweetSelector.select("#student-list").onclick = showStudent
  miniQuery.SweetSelector.select("#vote-on").onsubmit = voteOnBadge
}

var showStudent = function(event) {
  event.preventDefault();
  event = event || window.event
  var target = event.target || event.srcElement
  // console.log(target)
  // a tag on which user clicked

  var url = target.getAttribute("href")
  var student_id = url.match(/\d+/)[0]

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

var voteOnBadge = function(event) {
  event.preventDefault();
  console.log("I Voted!")
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