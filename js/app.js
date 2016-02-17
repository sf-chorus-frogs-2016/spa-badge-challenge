$(document).ready(function() {
  miniQuery.AjaxWrapper.request({
    url: "http://localhost:3000/students",
    type: 'GET'
  })
  .then(function(response){
    var students = JSON.parse(response);

    //grap the template script
    var theStudentsScript = $('#students-template').html();

    //compile the template
    var studentTemplate = Handlebars.compile(theStudentsScript);

    //define js data object
    for(var i=0; i< students.length; i++){
      var studentGroup = {
        "name": students[i].name
      }
    }

    // Pass our data to the template
    var theCompliedHtml = studentTemplate(studentGroup);

    // Add the compiled html to the page
    $('.content-placeholder').html(theCompliedHtml);
    console.log(studentGroup);
    console.log(theStudentsScript);
    console.log(studentTemplate);
    console.log(theCompliedHtml);
  })
})
