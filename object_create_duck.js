var man = {
	name: 'Andrew',
	age: 22,
	live: function () {
		alert('LIVE');
	}
}
var student = {
	study: function() {
		alert('I am a student');
	}
}
student.__proto__ = Object.create(man);

function duckType(obj) {
	return obj.study?'type Student':'type Man';
}
