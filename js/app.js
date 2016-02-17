(function(){

  $.get('http://localhost:3000/cohorts/1/members/1').done(function(response){
    console.log(response);
    var cohort_script = $('#cohort').html();
    var cohort = Handlebars.compile(cohort_script);
    var cohort_data={
       "name" : response.first_name,
       "year" : response.last_name
     };

    var compiled = cohort(cohort_data);

    $('.test').html(compiled);

    console.log(response.name)
  })
})();
