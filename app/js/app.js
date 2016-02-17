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

// miniQuery.AjaxWrapper.request({
//  url: 'http://httpbin.org/',
//  type: 'GET'
// }).then(function(response) {
//   console.log("Success " + response);
// }).catch(function(error) {
//   console.log("Error " + error)
// });

var bindListeners = function() {
  console.log("Listeners BOUND")
}