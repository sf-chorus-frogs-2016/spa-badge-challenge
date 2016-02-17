miniQuery.EventDispatcher.on('.student-name','click',function() {

	var studentId= this.getAttribute("id").match(/\d/)[0];

	miniQuery.AjaxWrapper.request({
		url: "http://localhost:3000/students/" + studentId,
		type: "GET"
	}).then(function(response) {
		var student = JSON.parse(response)
		console.log(student);
	})


});

miniQuery.EventDispatcher.trigger('.student-name','click')

