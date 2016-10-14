/*function x() {
	var i = new Date();
	console.clear();
	(function d() {

		console.log(i.getHours(), i.getMinutes(), i.getSeconds());


	})();



};


setInterval(x, 1000);*/

/*for (var i = 0; i < 10; i++) {
	(function() {
		var ind = i;

		function x() {
			console.log(ind)
		};
		setTimeout(x, ind * 1000)
	})()
}*/


/*function x() {
	var i = 0;

	return function f() {
		console.log(i++);
	}

}
var y = x();
y();
y();
y();*/

/*function consoleName(name) {
	return (function() {
		return "Hello " + name
	}());
}
var consoleTheName = consoleName("Vitaldo");
console.log(consoleTheName)*/


/*function viking() {
	var delta = "aa"
	delta = delta + delta;
	return function returnDelta() {
		delta = delta + delta;
		return delta;
	}

	// returnDelta();

	// returnDelta();
	// console.log(delta);
}
var hellen = viking();

console.log(hellen());
console.log(hellen());*/



/*var trune = function() {
	var delta = "Chicksa";
	return returnDelta;
}
console.log(trune())*/



/*function makeArmy() {

	var shooters = [];

	for (var i = 0; i < 10; i++) {
		(function(ind) {
			var shooter = function() { // функция-стрелок
				alert(ind); // выводит свой номер
			};
			shooters.push(shooter);
		})(i);
	}

	return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9*/

/*function xfunction() {
	var z = 0;
	return function hey(y) {
		return z = z + y;
	}
}

var get = xfunction();
console.log(get(3));
console.log(get(4));*/

function y() {
	var ff = 0;
	return function(с) {
		return ff += с;
	}
}


var cc = y();

var dd = y();

console.log(dd(6));
console.log(dd(6));
console.log(cc(5));