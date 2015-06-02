function Man(name, age) {		//Конструктор Man
	this.name = name;
	this.age = age;
}

Man.prototype.live = function() {		//Метод в Man
	alert( this.name + ' is a live' );
}

function Student() {
	Man.apply(this, arguments);
}

Student.prototype = Object.create(Man.prototype);		//Создаем наследование
Student.prototype.constructor = Student;

Student.prototype.study = function() {
	alert( this.name + ' want study in Binary Academy' );
}

var man = new Man('Andrew', 22);
var student = new Student('Sasha', 20);

function duckType(obj) {
	return obj.study?'type Student':'type Man';
}