window.onload = function() {
	var tabs = document.querySelector("#tabs");
	console.log(tabs);
	var cells = tabs.children;
	var arr = [document.querySelector(".clicked-tab")];
	var arrUnder = [document.querySelector(".clicked-under-tab")];

	function changeClass() {

		arr[0].className = "tab";
		this.className = "clicked-tab";
		arr[0] = this;
		arrUnder[0].className = "under-tab";
		document.querySelector("#under-tabs").children[this.i].className = "clicked-under-tab"
		arrUnder[0] = document.querySelector(".clicked-under-tab")
	}

	for (var i = 0; i < cells.length; i++) {
		console.log(cells[i]);
		cells[i].addEventListener("click", changeClass);
		cells[i].i = i;
	}

	var underTabs = $("#under-tabs")[0].children;


}

