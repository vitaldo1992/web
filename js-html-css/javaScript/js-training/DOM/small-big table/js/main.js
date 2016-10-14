window.onload = function() {
  var table = document.createElement("table");
  document.body.appendChild(table)
  table.id = "small_table";
  table.style.position="absolute";
  table.style.left = "50%";
  table.style.top = "50%";
  table.onmouseover = function() {
    this.id = "big_table";
    // this.style.left = "27%";
    // this.style.top = "20%";
    // this.position = "absolute"
  }
  table.onmouseout = function() {
    this.id = "small_table";
  }

  for (var i = 0;i<10;i++) {
    var tr = document.createElement("tr");
    table.appendChild(tr);
    for (var j=0;j<10;j++) {
      var td = document.createElement("td");
      tr.appendChild(td)
    }
  }

  console.log(small_block);







}
