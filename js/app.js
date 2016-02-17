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

	miniQuery.DOM.hide('.student-page')

	// Links to each student page
	miniQuery.EventDispatcher.on('.student-name','click',function() {

		var studentId= this.getAttribute("id").match(/\d/)[0];

		miniQuery.AjaxWrapper.request({
			url: "http://localhost:3000/students/" + studentId,
			type: "GET"
		}).then(function(response) {
			var student = JSON.parse(response)
			console.log(student);
			miniQuery.DOM.hide('.index-page')
			miniQuery.SweetSelector.select('.badge-title')[0].innerHTML = student.name + "\'s Badges"
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