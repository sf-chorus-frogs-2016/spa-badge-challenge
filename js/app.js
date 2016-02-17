$(document).ready(function(){

(function(){

  // $.get('http://localhost:3000/cohorts/1/members/1').done(function(response){
  //   console.log(response);
  //   var cohortScript = $('#cohort').html();
  //   var cohort = Handlebars.compile(cohortScript);
  //   var cohortData={
  //      "member" : {"firstName" : response.first_name,
  //                   "lastName" : response.last_name},
  //      "cohort" : response.cohort.name,
  //      "badges" : response.badges[0].description
  //     };
  //   Handlebars.registerHelper('fullName', function(member){
  //     return member.firstName + " " + member.lastName;
  //   })

  //   var compiled = cohort(cohortData);

  //   $('.test').html(compiled);
  // })

  // $('#test1').on('click', function(e){
  //   e.preventDefault();

  //   var url = $(this).attr('href');

  //   $.get(url).done(function(response){

  //     var script = $("#cohort").html();

  //     var template = Handlebars.compile(script);

  //     var context = {"cohort": response}

  //     var compiled = template(context);
  //     console.log(compiled);
  //     $('#cohort-name').append(compiled);
  //   })
  // })
getCohortIndex();
})();

    // Handlebars.registerHelper('fullName', function(member){
    //   return member.firstName + " " + member.lastName;
    // })
})

var getCohortIndex = function(){

  $.get('http://localhost:3000').done(function(response){

    var script = $('#cohort').html();
    var template = Handlebars.compile(script);
    var context = { "cohorts" : response };
    var compiled = template(context);

    $('#cohort-name').append(compiled);
  });
};

var getMemberIndex = function(){
  $('#cohort-name').on('click', 'a', function(e){


  })
}
