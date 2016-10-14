window.onload = function() {

	var but = document.querySelector('#masha');
	console.log(but);

	but.onclick = function() {
		alert("Hello")
	}


	var myXhr = new XMLHttpRequest();
	myXhr.open('GET','dummy_2.json',true);
	var result;
	var sveta;
	// console.log(myXhr)
	but.onclick = function() {
		myXhr.send();
		console.log(myXhr.readyState);
	};
	myXhr.onreadystatechange = function() {
		console.log(myXhr.readyState);
		if (myXhr.readyState === 4) {
			result = JSON.parse(myXhr.responseText);
			console.log(result);

			sveta = document.querySelector('#sveta');
			var table = document.createElement("table");
			sveta.appendChild(table)
			console.log(sveta);
			var tr1 = document.createElement("tr");
			var tr2 = document.createElement("tr");
			table.appendChild(tr1);
			table.appendChild(tr2);

			for (var i=0; i<result.phones.length; i++) {
				
				var td1 = document.createElement("td");
				var td2 = document.createElement("td");
				console.log(result.phones[i].model);
				tr1.appendChild(td1);
				td1.textContent = ""+result.phones[i].model;
				tr2.appendChild(td2);
				td2.textContent = ""+result.phones[i].price;

				
				

			}

		}
	};
};

