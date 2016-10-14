angular.module('vitaldo', [])
.controller('DurakController', function() {
	controller = this;

  	// Getting data
  	var myXhr = new XMLHttpRequest();

  	myXhr.open('GET', 'dummy_1.json', true);
  	myXhr.send();

  	var result;

  	myXhr.onreadystatechange = function() {
  		if (myXhr.readyState === 4) {
  			result = JSON.parse(myXhr.responseText);
  			console.log(result);
  			
  			this.$apply();
  		}
  	};

  	this.phones = function() {
  		return result;
  	}

  });