$(function() {
    getStudents();
    console.log("firing");
  });

var nameListener = function(){
  $('#all-the-peeps').off().on('click', 'a', function(e){
    e.preventDefault();
    var location = $(e.target);
    var id = parseInt(this.id);
    var clickedName = this.text;
    mainContainerToggle();
    displayStudentPage(id)
  })
}

var mainContainerToggle = function(){
  $('.main-container').toggle();
}

var studentContainerToggle = function(){
  $('.indi-student-container').toggle();
}


var getStudents = function() {
  $.ajax({
    url: 'http://localhost:3000/students',
    type: "GET"
  }).then(function(response){
    var studentObjects = response;
    displaySpaPage(studentObjects);
  });
}

var displaySpaPage = function(studentObjects){
  $('#student-names-holder').show()
  var studentNamesScript = document.getElementById("student-names-script").innerHTML;
  var template = Handlebars.compile(studentNamesScript);
  for (var i = 0; i < studentObjects.length; i++){
    context={
      name: studentObjects[i].name,
      id: studentObjects[i].id
    }
    var compiledHtml = template(context);
    $("#all-the-peeps").append(compiledHtml);
    nameListener();
    };


var displayStudentPage = function(id){
  $('.indi-student-container').show();
  for (var i = 0; i < studentObjects.length; i++){
    var context={
      name: studentObjects[i].name

    };
};
};






















