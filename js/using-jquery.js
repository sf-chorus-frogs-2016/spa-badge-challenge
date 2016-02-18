$( document ).ready(function() {
  $("#person-page").hide();

  var theBadgeScript = $('#badge-template').html();
  var badgeTemplate = Handlebars.compile(theBadgeScript);


  var theIntroScript = $('#intro-template').html();
  var introTemplate = Handlebars.compile(theIntroScript);
  var theAddBadgeScript = $('#add-badge-template').html();
  var addBadgeTemplate = Handlebars.compile(theAddBadgeScript);

  // var displayAllNames = function() {
    $.ajax({
      method: "GET",
      url: "http://localhost:3000",
    }).done(function(responseOfGET){
      console.log("We have reached the .done. ^_^");
      console.log(arguments);
      // $('#all-persons-template').html('');
      // persons.forEach(function(person){
      //   $('#all-names').append(getAllNames(persons));
      // })
      getAllNames(responseOfGET);
    }).fail(function(responseOfGET) {
      // body...
      console.log("We have reached the .fail. v_v");
    });
  // };

  var listenForNames = function(){
    $('#all-names').off().on('click', 'a', function(e){
      e.preventDefault();
      var location = $(e.target);
      var id = parseInt(this.id);
      var clickedName = this.text;
      $('.container').toggle();
    })
  }

  var getAllNames = function(allPersons) {
    $("#the-index").show();
    var theNamesScript = $('#all-persons-template').html();
    var nameTemplate = Handlebars.compile(theNamesScript);
    for (var i = 0; i < allPersons.length; i++) {
      var context = {
        name: allPersons[i].name,
        id: allPersons[i].id,
      };
      var compiledHTML = nameTemplate(context);
      $('#all-names').append(compiledHTML);
      // listenForNames();
    }
  };

  $("#the-index").on('click', 'a', function(e){
    e.preventDefault();
    var link = $(this).attr('href');
    $.ajax({
      method: "GET",
      url: link,
      dataType: "json"
    }).done(function(person){
      //render introduction section

      $('#intro-placeholder').html(introTemplate(person));

      //render badges
      $('#badges-placeholder').html('');
      person["badges"].forEach(function(badge){
        $('#badges-placeholder').append(badgeTemplate(badge));
      })

      //render add badge form

      $('.add-badge-placeholder').html(addBadgeTemplate(person));
     });

    $('#person-page').show();
    $('#the-index').hide();
  });

  //home link hides person page and displays home page
  $('#home-link').on('click', function(e){
    e.preventDefault();
    $('#the-index').show();
    $('#person-page').hide();
  })

  //handling votes
  $('#badges-placeholder').on('submit', 'form', function(e){
    e.preventDefault();
    var badge_id = $(this).attr('value');
    var type = $(this).attr('class');
    $.ajax({
      method: 'PATCH',
      url: "http://localhost:3000/badges/" + badge_id,
      data: {type: type}
    }).done(function(person){
      $('#badges-placeholder').html('');
      person["badges"].forEach(function(badge){
        $('#badges-placeholder').append(badgeTemplate(badge));
      });
    })
  })

  //form submission to add new badge
  $('.add-badge-placeholder').on('submit', 'form', function(e){
    e.preventDefault();
    var data = $(this).serialize();
    $.ajax({
      method: 'POST',
      url: "http://localhost:3000/badges/",
      data: data
    }).done(function(badge){
      $('#badges-placeholder').append(badgeTemplate(badge));
    })
  })

});

