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
    badgeList = SweetSelector.select("#badges-list")
    nameHeader = document.createElement("H1");
    nameHeader.innerHTML=current_student.name;
    badgeList.appendChild(nameHeader);
    for (var i = 0; i < badges.length; i++){
      var x = document.createElement("LI");
      x.innerHTML = badges[i].text + "   <img class='upvote' id="+badges[i].id+" src='img/upvote.gif'><img class='downvote' id="+badges[i].id+" src='img/downvote.gif'> <span id='badge-votes-"+badges[i].id+"'> Vote Total:"+badges[i].vote_total+"</span>";
      badgeList.appendChild(x);
    };
    brTag = document.createElement("br")

    var NewBadgeForm = document.createElement("form");
    NewBadgeForm.class = "new-badge-form";
    showDiv.appendChild(NewBadgeForm);

    var newBadge = document.createElement("input");
    newBadge.class = 'newBadge';
    newBadge.name="badge";
    newBadge.type="text";
    NewBadgeForm.appendChild(newBadge);

    var submit = document.createElement("input");
    submit.id = 'submitButton';
    submit.type="submit";
    submit.value="Add New Badge!";
    NewBadgeForm.appendChild(submit);
    showDiv.appendChild(brTag);

    var homepageLink = document.createElement("a");
    homepageLink.id = 'returnHome';
    homepageLink.innerHTML="Return Home";
    showDiv.appendChild(homepageLink);
  });
})

$("#student-show-page").on('submit',function(e){
  e.preventDefault();
  var ourForm = SweetSelector.select("form")
  var y = ourForm.badge.value
  // newBadgeResponse = AjaxWrapper.request({type: 'POST', url: "http://localhost:3000/badges", data: y});
  var http = new XMLHttpRequest();
  var url = "http://localhost:3000/badges";
  var params = "badge="+y+"&student="+current_student.id;
  http.open("POST",url,true)
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  http.send(params);
  showResponse = AjaxWrapper.request({type: 'GET', url: "http://localhost:3000/students/"+student_id});
  showResponse.then(function(data){
    current_student = JSON.parse(data);
    badges = current_student.badges
    var z = document.createElement("LI");
    z.innerHTML = badges[badges.length-1].text + "   <img class='upvote' id="+badges[badges.length-1].id+" src='img/upvote.gif'><img class='downvote' id="+badges[badges.length-1].id+" src='img/downvote.gif'><span id='badge-votes-"+badges[badges.length-1].id+"'> Vote Total:"+badges[badges.length-1].vote_total+"</span>";
    badgeList.appendChild(z);
  });

});

$("#student-show-page").on('click',"#returnHome",function(e){
  e.preventDefault();
  DOM.hide("#badges-list");
  DOM.show("#student-list-div");
  SweetSelector.select("#student-show-page").innerHTML="<ul id='badges-list'> </ul>";
});

$("#student-show-page").on('click',".upvote",function(e){
  var upvoteLink = $(this);
  e.preventDefault();
  upvoteResponse = AjaxWrapper.request({type: 'POST', url: "http://localhost:3000/badges/"+upvoteLink.attr('id')});
  upvoteResponse.then(function(data){
    this_badge = JSON.parse(data);
    voteSpan = SweetSelector.select("#badge-votes-"+upvoteLink.attr('id'));
    voteSpan.innerHTML = "Vote Total: " + this_badge.vote_total});
  // var y = document.createElement("LI");

});

$("#student-show-page").on('click',".downvote",function(e){
  var downvoteLink = $(this);
  e.preventDefault();
  downvoteResponse = AjaxWrapper.request({type: 'POST', url: "http://localhost:3000/badges/downvote/"+downvoteLink.attr('id')});
  downvoteResponse.then(function(data){
    this_badge = JSON.parse(data);
    voteSpan = SweetSelector.select("#badge-votes-"+downvoteLink.attr('id'));
    voteSpan.innerHTML = "Vote Total: " + this_badge.vote_total});


});




});
