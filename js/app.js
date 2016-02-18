$(document).ready(function(){

miniQuery.AjaxWrapper.request({
 url: 'http://localhost:3000/students',
 type: 'GET'
}).then(function(response) {
	var students = JSON.parse(response)
	for(var i = 0; i < students.length; i++){
    	var node = document.createElement("li");
    	var a = document.createElement('a');
    	a.innerHTML = students[i].name
    	a.href = "/students/" + students[i].id;
    	a.setAttribute('id', students[i].id)
		node.appendChild(a)
		var element = miniQuery.SweetSelector.select('ul')[0]
		element.appendChild(node);	
	}

	setStudentListeners()

	});	
});

function setStudentListeners(){
	var selector = 'a';
	var event_to_listen = 'click';
	var eventFunction = function(e){
		e.preventDefault()
		var id = e.target.getAttribute("id")
		miniQuery.AjaxWrapper.request({
			url: 'http://localhost:3000/students/' + id,
			type: 'GET'
		}).then(function(response){
			var response = JSON.parse(response)
			miniQuery.DOM.hide('.container')
			miniQuery.SweetSelector.select('h2')[0].innerHTML = response.name
		})
	};
	miniQuery.EventDispatcher.on(selector, event_to_listen, eventFunction)
};

