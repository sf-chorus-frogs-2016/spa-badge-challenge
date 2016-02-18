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
    // console.log(compiledHtml);
    $("#all-the-peeps").append(compiledHtml);
    nameListener();
    };


var displayStudentPage = function(badges){
  $('.indi-student-container').show();
  var theTemplateScript = document.getElementById("#badges-handlebar").text;
  var theTemplate = Handlebars.compile(theTemplateScript);
  var badges = [];
  for (var i = 0; i < badgeObjects.length; i++){
    var context={

    };

};
};























