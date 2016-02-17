document.addEventListener("DOMContentLoaded", function(event) {

  indexResponse = AjaxWrapper.request({type: 'GET', url: "http://localhost:3000/students"});

  indexResponse.then(function(data){
    students = JSON.parse(data);
    list = SweetSelector.select(".student_list");
    for (var i = 0; i < students.length; i++){
    var x = document.createElement("LI");
    x.innerHTML = "<a class='home-link' id='"+students[i].id+"' href='students/"+students[i].id+"'>"+students[i].name+"</a>";
    list.appendChild(x)}
  });
})
