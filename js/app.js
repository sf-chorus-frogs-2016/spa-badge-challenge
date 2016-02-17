function sortBy(array, key) {
  return array.sort(function(a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}

$(document).ready(function(){
  $("#student-page").hide();

  var theBadgeScript = $('#badge-template').html();
  var badgeTemplate = Handlebars.compile(theBadgeScript);
  var theNameScript = $('#home-template').html();
  var nameTemplate = Handlebars.compile(theNameScript);
  var theIntroScript = $('#intro-template').html();
  var introTemplate = Handlebars.compile(theIntroScript);
  var theAddBadgeScript = $('#add-badge-template').html();
  var addBadgeTemplate = Handlebars.compile(theAddBadgeScript);

  $.ajax({
    method: "GET",
    url: "http://localhost:3000/index",
    dataType: "json"
  }).done(function(students){
    $('#list-names').html('');
    students.forEach(function(student){
      $('#list-names').append(nameTemplate(student));
    })
  })

  $("#home-page").on('click', 'a', function(e){
    e.preventDefault();
    var link = $(this).attr('href');
    $.ajax({
      method: "GET",
      url: link,
      dataType: "json"
    })
    .done(function(student){
      //render introduction section

      $('#intro-placeholder').html(introTemplate(student));

      //render badges
      $('#badges-placeholder').html('');
      student["badges"] = sortBy(student["badges"], "votes").reverse()
      student["badges"].forEach(function(badge){
        $('#badges-placeholder').append(badgeTemplate(badge));
      })

      //render add badge form

      $('.add-badge-placeholder').html(addBadgeTemplate(student));

    });

    //show student page and hide home page
    $('#student-page').show();
    $('#home-page').hide();
  });

  //home link hides student page and displays home page
  $('#home-link').on('click', function(e){
    e.preventDefault();
    $('#home-page').show();
    $('#student-page').hide();
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
    })
    .done(function(student){
      $('#badges-placeholder').html('');
      student["badges"] = sortBy(student["badges"], "votes").reverse()
      student["badges"].forEach(function(badge){
        $('#badges-placeholder').append(badgeTemplate(badge));
      });
    })
  })

  //form submission for adding a new badge
  $('.add-badge-placeholder').on('submit', 'form', function(e){
    e.preventDefault();
    var data = $(this).serialize();
    $.ajax({
      method: 'POST',
      url: "http://localhost:3000/badges/",
      data: data
    })
    .done(function(badge){
      $('#badges-placeholder').append(badgeTemplate(badge));
    })

  })

})
