miniQuery.AjaxWrapper.request({
  url: 'http://localhost:3000/users',
  type: 'GET'
}).then(function(response){

  var student = JSON.parse(response);
  console.log("hello");
  var studentList = miniQuery.SweetSelector.select('#list');

  for(var i = 0; i < student.length; i++){
    var newNode = document.createElement('li');
    newNode.innerHTML = "<a class='student-name' id='student-" + student[i].id + "' href='#'>" + student[i].name + "</a>";
    studentList.appendChild(newNode);
  };

});
// my next step is to get the student names to click

miniQuery.EventDispatcher.on('.student-name', 'click', function(){
    var id = this.getAttribute('id').match(/\d+/)[0];
    miniQuery.AjaxWrapper.request({
      url: 'http://localhost:3000/students/' + id,
      type: 'GET'
     }).then(function(response){
      var student = JSON.parse(response);
      miniQuery.DOM.show('.badge-page');
      miniQuery.DOM.hide('.main-page');

	});
});