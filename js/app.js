miniQuery.AjaxWrapper.request({
  url: 'http://localhost:3000/students',
  type: 'GET'
  // Create student list
}).then(function(response){
  var students = JSON.parse(response);
  var studentList = miniQuery.SweetSelector.select('#student-list');
  for(var i = 0; i < students.length; i++){
    var newNode = document.createElement('li');
    newNode.innerHTML = "<a class='student-name' id='student-" + students[i].id + "' href='#'>" + students[i].name + "</a>";
    studentList.appendChild(newNode);
  };
  // Bind click on student to show badges
  miniQuery.EventDispatcher.on('.student-name', 'click', function(){
    var id = this.getAttribute('id').match(/\d+/)[0];
    miniQuery.AjaxWrapper.request({
      url: 'http://localhost:3000/students/' + id,
      type: 'GET'
    }).then(function(response){
      var student = JSON.parse(response);
      // Switch to student screen
      miniQuery.DOM.show('.badge-page');
      miniQuery.DOM.hide('.main-page');
      // Show student name
      miniQuery.SweetSelector.select('.student-header')[0].innerHTML = student.name + "'s Badges";
      miniQuery.AjaxWrapper.request({
        url: 'http://localhost:3000/students/' + id + '/badges',
        type: 'GET',
      }).then(function(response){
        // Print out badges
        var badges = JSON.parse(response);
        var badgeList = miniQuery.SweetSelector.select('#badge-list');
        badgeList.innerHTML = "";
        for(var i = 0; i < badges.length; i++){
          var badgeInfo = "<div id='" + badges[i].id + "' class='slogan'><div class='body'>" + (i + 1) + ") " + badges[i].text + "</div><div class='vote-on'><form action='#'><input type='hidden' name='slogan_id' value=" + badges[i].id + "><input type='hidden' name='vote_type' value='up'><button class='up' type='submit' name='submit'><img src='img/upvote.gif' alt='upvote_image' /></button></form></div><div class='vote-on'><form action='#'><input type='hidden' name='slogan_id' value=" + badges[i].id + "><input type='hidden' name='vote_type' value='down'><button class='down' type='submit' name='submit'><img src='img/downvote.gif' alt='downvote_image' /></button></form></div><div class='points-" + badges[i].id +"'>(0 points)</div>";
          badgeList.innerHTML += badgeInfo;
          //Get votes for badge
          miniQuery.AjaxWrapper.request({
            url: 'http://localhost:3000/badges/' + badges[i].id + "/votes",
            type: 'GET'
          }).then(function(response){
            var badgeVotes = JSON.parse(response);
            var points = 0;
            if (!!badgeVotes[0]) {
              for(var i = 0; i < badgeVotes.length; i++){
                if (badgeVotes[i].vote_type === "up") {
                  points++;
                } else if (badgeVotes[i].vote_type === "down") {
                  points--;
                };
              };
              // Set votes for badge
              var pointElement = miniQuery.SweetSelector.select('.points-' + badgeVotes[0].badge_id);
              pointElement[0].innerHTML = "(" + points + " points)";
            };
          });
        }
      });
    })
  });
});

miniQuery.DOM.hide('.badge-page');


