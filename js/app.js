document.addEventListener("DOMContentLoaded", function(e){
  displayStudentList();
  bindListener();
});

var displayStudentList = function(){
   miniQuery.AjaxWrapper.request({
    url: "http://localhost:3000/students",
    type: 'GET'
  })
  .then(function(response){
    var student_data = JSON.parse(response);

    //grap the template script
    var theStudentsScript = $('#students-template').html();

    //compile the template
    var studentTemplate = Handlebars.compile(theStudentsScript);

    // Pass our data to the template
    var theCompliedHtml = studentTemplate({students:student_data});

    // Add the compiled html to the page
    $('.students-list').html(theCompliedHtml);
  })
}

var bindListener = function(){
  miniQuery.SweetSelector.select(".content-placeholder").onclick = showEachStudentBindListener
  miniQuery.SweetSelector.select(".content-placeholder").onclick = showEachStudentBindListener
}

var showEachStudentBindListener = function(event){
  event.preventDefault();
  event = event || window.event
  var target = event.target || event.srcElement;
  console.log(target);
}
