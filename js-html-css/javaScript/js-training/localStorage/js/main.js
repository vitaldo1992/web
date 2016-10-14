function saveName() {
	var userName = document.querySelector("#user_name").value;
	localStorage.setItem('name',userName);
}

function alertName() {
	alert(localStorage.getItem('name'))
}

function deleteName() {
	localStorage.removeItem("name");
}

function al () {
	alert("Vitaldo")
}


document.querySelector("#b1").addEventListener("click",saveName);
document.querySelector("#b2").addEventListener("click",alertName);
document.querySelector("#b3").addEventListener("click",deleteName);


	var div = document.querySelector("#mova");
	var table = document.createElement("table");
	div.appendChild(table);
	var tr = document.createElement("tr");
	table.appendChild(tr);
	table.style.border = "2px";
	table.id = "tabl9"



// var beer = document.querySelector("tabl9");
// console.log(table.style);

console.log([a=2])