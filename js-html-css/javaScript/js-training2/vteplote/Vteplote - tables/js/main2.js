window.onload = function() {
	var hover = document.querySelector('.table-dymohody');
	var trs = hover.querySelector("tbody").children;
	for (var i=2;i<trs.length;i++) {
		// console.log(trs[i].children)
		for (var j=0;j<trs[i].children.length;j++) {
			trs[i].children[j].className =""+j;
			trs[i].children[j].onmouseover = function() {
				console.log(document.getElementsByClassName(""+this.className));
				for (var g=0;g<3;g++) {
					document.getElementsByClassName(""+this.className)[g].bgColor = "#0088B5";
					console.log(document.getElementsByClassName(""+this.className)[g].children[0].color);
					
				}
			}
			
		}
	}
}
