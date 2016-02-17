var Students = function () {
  this.container = $(".page-container");
}

Students.prototype.listAll = function(){
  var studentsObject = this;
  $.ajax({
      url: "http://localhost:3000/students"
  }).done(function(response) {
    studentsObject.container.empty();

    for (var i = 0; i < response.length; i++) {
        var $student = $('<div class="student">');
        $student.append('<a href="/students/' + response[i].id + '">' + response[i].name + '</a>' );
        studentsObject.container.append($student);
    }
  })
};

Students.prototype.bindListeners = function(){
  this.bindLinks();
  this.bindBack();
}

Students.prototype.bindBack = function(){
  $(document).on("click",".back", function(event){
    event.preventDefault();
    var studentsObject = this; 
  })
}

Students.prototype.bindLinks = function(){
  var studentsObject = this;
  // Event delegation without JQuery needed here
  $(document).on("click", "div.student a", function(event) {
      event.preventDefault();
      $.ajax({
        url:$(this).attr("href")
        }).done(function(response){
        studentsObject.container.empty();

        console.log(response);
        studentsObject.container.append(response.name);
        studentsObject.container.append('<a href="" class="back">back</a>');
      })
  })
}

var students = new Students;
students.listAll();
students.bindListeners();

