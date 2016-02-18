$(document).ready(function(){
  $('person-page').hide();

  var badgeText = $('#badge-template').html();
  var badgeTemplate = Handlebars.compile(badgeText);
  var nameText = $('#home-template').html();
  var nameTemplate = Handlebars.compile(nameText);
  var introText = $('#intro-template').html();
  var introTemplate = Handlebars.compile(introText);
  var addBadgeText = $('#add-badge-template').html();
  var addBadgeTemplate = Handlebars.compile(addBadgeText);


  $.ajax({
    method: 'GET',
    url: 'httpL//localhost:3000/index',
    dataType: 'json'
  })
  .done(function(people){
    $('#list-names').html('');
    people.forEach(function(person){
      $('#list-names').append(nameTemplate(person))
    })

  })


  $('#home-page').on('click', 'a', function(event){
    event.preventDefault();
    var link = $(this).attr('href');
    $.ajax({
      method: 'GET',
      url: link,
      dataType: 'json'
    })
    .done(function(person){
      $('#intro-placeholder').html(introTemplate(person));

      $('#badges-placeholder').html('');
      person['badges'].forEach(function(badge){
      	$('#badges-placeholder').append(badgeTemplate(badge));
      })


      $('.add-badge-placeholder').html(addBadgeTemplate(person));
    });

    $('#home-link').on('click', function(event){
      event.preventDefault();
      $('#home-page').show();
      $('#home-page').hide();
    })

    $('#badges-placeholder').on('submit', 'form', function(event){
      event.preventDefault();
      var badgeId = $(this).attr('value');
      var dataType = $(this).attr('class');
      $.ajax({
      	method: 'PATCH',
      	url: 'http://localhost:3000/badges/' + badgeId,
      	data: {dataType: dataType}
      })
      .done(function(person){
      	$('#badges-placeholder').html('');
      	person['badges'].forEach(function(badge){
      	  $('#badges-placeholder').append(badgeTemplate(badge));

      	})
      })
    })

    $('.add-badge-placeholder').on('submit', 'form', function(event){
      event.preventDefault();
      var data = $(this).serialize();
      $.ajax({
      	method: 'POST',
      	url: 'http://localhost:3000/badges/',
      	data: data
      })
      .done(function(badge){
      	$('#badges-placeholder').append(badgeTemplate(badge));
      })
    })






  })










})