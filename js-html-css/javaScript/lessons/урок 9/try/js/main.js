/*var Vasiliy = {
	firtName: "Vasiliy",
	lastName: "Shkarta",
	age: 74,
	children: [
		Ella = {
			firtName: "Ella",
			lastName: "Shkarta",
			age: 45,
			children: [
				Vitaliy = {
					firtName: "Vitaliy",
					lastName: "Duvalko",
					age: 23,
				},
				Igor = {
					firtName: "Igor",
					lastName: "Duvalko",
					age: 15,
				}
			]
		},
		Poly = {
			firtName: "Poly",
			lastName: "Shkarta",
			age: 48,
			children: [
				Grisha = {
					firtName: "Grisha",
					lastName: "Shkarta",
					age: 21,
				},
				Misha = {
					firtName: "Misha",
					lastName: "Shkarta",
					age: 26,
				}
			]
		},
	]

}

console.log(Vasiliy.children);
var arrNames = [];

function SearchName(user) {
	for (var key in user) {
		if (key == "firtName") {
			arrNames.push(user);
		} else if (typeof user[key] == 'object') {
			SearchName(user[key])
		}

	}
}
SearchName(Vasiliy);
console.log(arrNames)*/

/*function Betta(x, y) {
	if (y == 1) {
		return x;
	}
	return x = x * (Betta(x, y - 1));
}
console.log(Betta(2, 4));*/

function Alfa(x) {
	debugger;
	if (x == 0) {
		return x;
	}
	return x = x + Alfa(x - 1);
}
console.log(Alfa(6))