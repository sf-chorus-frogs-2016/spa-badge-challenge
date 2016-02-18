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
    // newNode.innerHTML = "<a class='student-name' id='student-" + students[i].id + "' href='#'>" + students[i].name + "</a>";
    $('.students-list').html(theCompliedHtml);
  })
}

var bindListener = function(){
  miniQuery.SweetSelector.select(".content-placeholder").onclick = showEachStudentBindListener
  // console.log(test);
}

var showEachStudentBindListener = function(event){
  event.preventDefault();
  event = event || window.event
  var target = event.target || event.srcElement
  console.log(target);
  console.log(event);
  console.log("hey");
  }
