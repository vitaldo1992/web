			var myXhr = new XMLHttpRequest();
			// или get
			myXhr.open('GET', 'dummy.json', false); //рассмотри вариант с true
			myXhr.send();
			console.log(myXhr);



			var result = JSON.parse(myXhr.responseText);
			console.log(result);
			var str = JSON.stringify(result);
			console.log(myXhr.onreadystatechange);