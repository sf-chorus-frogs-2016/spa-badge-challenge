miniQuery.AjaxWrapper.request({
  url: 'http://localhost:3000/members',
  type: 'GET'
  // Create student list
}).then(function(response){
  // iterate and display members
  // candidate for Handlebars conversion
  var members = JSON.parse(response);
  var memberList = miniQuery.SweetSelector.select('#member-list');
  for(var i = 0; i < members.length; i++){
    var newNode = document.createElement('li');
    newNode.innerHTML = "<a class='member-name' id='member-" + members[i].id + "' href='#'>" + members[i].name + "</a>";
    memberList.appendChild(newNode);
  };
  // Bind click on member to show badges
  miniQuery.EventDispatcher.on('.member-name', 'click', function(){
    var id = this.getAttribute('id').match(/\d+/)[0];
    // shoot a request to API to get one Member's info
    miniQuery.AjaxWrapper.request({
      url: 'http://localhost:3000/members/' + id,
      type: 'GET'
    }).then(function(response){
      var member = JSON.parse(response);
      // Switch to member screen
      miniQuery.DOM.show('.badge-page');
      miniQuery.DOM.hide('.main-page');
      // Show member name
      miniQuery.SweetSelector.select('.member-header')[0].innerHTML = member.name + "'s Badges";
      miniQuery.AjaxWrapper.request({
        url: 'http://localhost:3000/members/' + id + '/badges',
        type: 'GET',
      }).then(function(response){
        // iterate over Badges of Member and display
        var badges = JSON.parse(response);
        // find and clear previous badge list
        var badgeList = miniQuery.SweetSelector.select('#badge-list');
        badgeList.innerHTML = "";
        console.log(badges);
        // iterate over badges, input html as string
        // strong candidate for Handlebars conversion
        for(var i = 0; i < badges.length; i++){
          console.log(i);
          var badgeInfo = "<div id='" + badges[i].id + "' class='slogan'><div class='body'>" + (i + 1) + ") " + badges[i].title + "</div><div class='vote-on'><form class='up-vote' action='#'><input type='hidden' name='slogan_id' value=" + badges[i].id + "><input type='hidden' name='vote_type' value='up'><button class='up' type='submit' name='submit'><img src='img/upvote.gif' alt='upvote_image' /></button></form></div><div class='vote-on'><form class='down-vote' action='#'><input type='hidden' name='slogan_id' value=" + badges[i].id + "><input type='hidden' name='vote_type' value='down'><button class='down' type='submit' name='submit'><img src='img/downvote.gif' alt='downvote_image' /></button></form><p>" + badges[i].points + " Points!</p></div>";
          badgeList.innerHTML += badgeInfo;
        }
// this is where I recognize that this code is turning into The Pyramid of Doom, and continue on anyways
        miniQuery.EventDispatcher.on('.up-vote', 'submit', function(e){
          e.preventDefault();
          console.log("Baba Booey");
        });
        miniQuery.EventDispatcher.on('.down-vote', 'submit', function(e){
          e.preventDefault();
          console.log("Uh-oh!");
        });
      });
    })
  });

  // miniQuery.EventDispatcher.on('.up-vote', 'submit', function(e){
  //   e.preventDefault();
  //   console.log("Baba Booey");
  // });
  // var upvote = miniQuery.SweetSelector.select('.member-name');


});

miniQuery.DOM.hide('.badge-page');


// $(function () {
//   // Grab the template script
//   var theTemplateScript = $("#members-template").html();
//   // Compile the template
//   var theTemplate = Handlebars.compile(theTemplateScript);
//   // Define our data object
//   var context={
//     "name": "Baba Booey",
//   };
//   // Pass our data to the template
//   var theCompiledHtml = theTemplate(context);
//   // Add the compiled html to the page
//   $('.content-placeholder').html(theCompiledHtml);
// });

// $(function () {
//   // Grab the template script
//   var theTemplateScript = $("#members-template").html();
//   // Compile the template
//   var theTemplate = Handlebars.compile(theTemplateScript);
//   // Define our data object
//   var context={
//     "name": "Howard Stern",
//   };
//   // Pass our data to the template
//   var theCompiledHtml = theTemplate(context);
//   // Add the compiled html to the page
//   $('.second-placeholder').html(theCompiledHtml);
// });

// example from tutotorial for iteration
// $(function () {
//   // Grab the template script
//   var theTemplateScript = $("#example-template").html();

//   // Compile the template
//   var theTemplate = Handlebars.compile(theTemplateScript);

//   // This is the default context, which is passed to the template
//   var context = {
//     people: [
//       { firstName: 'Homer', lastName: 'Simpson' },
//       { firstName: 'Peter', lastName: 'Griffin' },
//       { firstName: 'Eric', lastName: 'Cartman' },
//       { firstName: 'Kenny', lastName: 'McCormick' },
//       { firstName: 'Bart', lastName: 'Simpson' }
//     ]
//   };

//   // Pass our data to the template
//   var theCompiledHtml = theTemplate(context);

//   // Add the compiled html to the page
//   $(document.body).append(theCompiledHtml);
// });

