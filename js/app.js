miniQuery.AjaxWrapper.request({
  url: 'http://localhost:3000/students',
  type: 'GET'
}).then(function(response){
  var students = JSON.parse(response);
  var studentList = miniQuery.SweetSelector.select('#student-list');
  for(var i = 0; i < students.length; i++){
    var newNode = document.createElement('li');
    newNode.innerHTML = "<a class='student-name' id='student-" + students[i].id + "' href='#'>" + students[i].name + "</a>";
    studentList.appendChild(newNode);
  };
  miniQuery.EventDispatcher.on('.student-name', 'click', function(){
    var id = this.getAttribute('id').match(/\d+/)[0];
    miniQuery.AjaxWrapper.request({
      url: 'http://localhost:3000/students/' + id,
      type: 'GET'
    }).then(function(response){
      var student = JSON.parse(response);
      var name = student.name;
      miniQuery.DOM.show('.badge-page');
      miniQuery.DOM.hide('.main-page');
      miniQuery.SweetSelector.select('.student-header')[0].innerHTML = student.name + "'s Badges";
    })
  });
});

miniQuery.DOM.hide('.badge-page');


