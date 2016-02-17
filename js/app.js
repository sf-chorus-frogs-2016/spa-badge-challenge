miniQuery.DOM.hide('.student-page')

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


