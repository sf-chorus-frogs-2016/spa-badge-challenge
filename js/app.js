document.addEventListener("DOMContentLoaded", function(event) {

$("#student-list-div").on('click','.home-link',function(e){
  e.preventDefault();
  DOM.hide("#student-list-div");
  DOM.show("#student-show-page")
  student_id = $(this).attr('id');
  showResponse = AjaxWrapper.request({type: 'GET', url: "http://localhost:3000/students/"+student_id});
  showResponse.then(function(data){
    current_student = JSON.parse(data);
    badges = current_student.badges;
    showDiv = SweetSelector.select("#student-show-page");
    nameHeader = document.createElement("H1");
    nameHeader.innerHTML=current_student.name;
    showDiv.appendChild(nameHeader);
    for (var i = 0; i < badges.length; i++){
      var x = document.createElement("LI");
      x.innerHTML = badges[i].text + "<img class='upvote' id="+badges[i].id+" src='img/upvote.gif'><img class='downvote' id="+badges[i].id+" src='img/downvote.gif'>";
      showDiv.appendChild(x);
    };
    brTag = document.createElement("br")

    newBadge = document.createElement("input");
    newBadge.class = 'newBadge';
    newBadge.type="text";
    showDiv.appendChild(newBadge);

    submit = document.createElement("input");
    submit.id = 'submitButton';
    submit.type="submit";
    submit.value="Add New Badge!";
    showDiv.appendChild(submit);
    showDiv.appendChild(brTag);

    homepageLink = document.createElement("a");
    homepageLink.id = 'returnHome';
    homepageLink.innerHTML="Return Home";
    showDiv.appendChild(homepageLink);
  });
})

$("#student-show-page").on('click',"#returnHome",function(e){
  e.preventDefault();
  DOM.hide("#student-show-page");
  DOM.show("#student-list-div");
  SweetSelector.select("#student-show-page").innerHTML = "";
});

$("#student-show-page").on('submit',function(e){
  debugger
  e.preventDefault();
  // DOM.hide("#student-show-page");
  // DOM.show("#student-list-div");
  // SweetSelector.select("#student-show-page").innerHTML = "";
});










});
