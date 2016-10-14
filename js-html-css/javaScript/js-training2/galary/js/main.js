window.onload = function() {

	var largeImg = document.querySelector("#larger");
	var mainImg = document.querySelector("#main-picture").children[0];

	mainImg.addEventListener("mousemove", showImage);
	mainImg.addEventListener("mouseout", hideImage);


	var secondPicture = document.querySelector("#second-picture").children[0];
	var thirdPicture = document.querySelector("#third-picture").children[0];

	secondPicture.addEventListener("click", makeMain);
	thirdPicture.addEventListener("click", makeMain);


	function makeMain() {

		var lag = this.src;
		this.src = mainImg.src;
		mainImg.src = lag;
	}


	function showImage() {

		largeImg.style.visibility = "visible";
		largeImg.style.backgroundImage = "url('"+mainImg.src+"')";
		var x = event.offsetX;
		var y = event.offsetY;
		largeImg.style.backgroundPosition = "-"+x+"px -"+y+"px";
	}

	function hideImage() {
		largeImg.style.visibility = "hidden";
	}
}

