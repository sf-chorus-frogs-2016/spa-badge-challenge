miniQuery.AjaxWrapper.request({
	url: "http://localhost:3000/students",
	type: "GET"
}).then(function(response) {

	// Display each student in students list
	var students = JSON.parse(response);
	for (var i =0; i < students.length; i++) {
		var studentList = miniQuery.SweetSelector.select('.students-list')[0];
		var node = document.createElement('li');
		node.innerHTML = "<a href='#' class='student-name' id='student" + students[i].id + "'>" + students[i].name + "</a>"
		studentList.appendChild(node);
	}

	// Initial hide of student page template
	miniQuery.DOM.hide('.student-page')

	// Links to each student page
	miniQuery.EventDispatcher.on('.student-name','click',function() {

		var studentId= this.getAttribute("id").match(/\d/)[0];

		miniQuery.AjaxWrapper.request({
			url: "http://localhost:3000/students/" + studentId,
			type: "GET"
		}).then(function(response) {
			var student = JSON.parse(response)
			miniQuery.DOM.hide('.index-page')
			miniQuery.SweetSelector.select('.badge-title')[0].innerHTML = student.name + "\'s Badges"
			
			miniQuery.AjaxWrapper.request({
				url: "http://localhost:3000/students/" + student.id + "/badges",
				type: "GET"
			}).then(function(response) {
				studentBadges = JSON.parse(response);

				var theTemplateScript = miniQuery.SweetSelector.select(".built-in-helpers-template")[0].innerHTML;

				var theTemplate = Handlebars.compile(theTemplateScript);

				var context = {
				    studentBadges: studentBadges
  			};

  			var theCompiledHtml = theTemplate(context);

  			miniQuery.SweetSelector.select('.badge-list')[0].innerHTML = theCompiledHtml;


			});


			miniQuery.DOM.show('.student-page')


		})

	});

	// Link to home page from student page
	miniQuery.EventDispatcher.on('.home-link', 'click', function() {
		miniQuery.AjaxWrapper.request({
			url: "http://localhost:3000/students",
			type: "GET"
		}).then(function(response) {
			miniQuery.DOM.hide('.student-page');
			miniQuery.DOM.show('.index-page');
		})
	});


})