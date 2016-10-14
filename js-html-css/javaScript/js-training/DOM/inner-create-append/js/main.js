
window.onload = function() {

  var link  = document.createElement('link');
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = 'css/style2.css';

  var head  = document.head;
  head.appendChild(link);

  // Вариант 1 - при помощи createElement и appendChild
  var table = document.createElement("table");
  document.body.appendChild(table);
  table.id="mogda";
  table.style.border = "2px solid blue";
  table.style.margin = "20px";

  for (var i = 0; i<10; i++ ) {
    var tr = document.createElement("tr");
    table.appendChild(tr);
    for (var j = 0; j<10; j++ ) {
      var td = document.createElement("td");
      tr.appendChild(td);
      td.innerHTML = String(i)+String(j)
    }
  }

// Вариант 2 - при помощи innerHTML
  var table2 = document.createElement("table");

  document.body.appendChild(table2);
  table2.id="volos";
  table2.style.border = "2px solid blue"
  table2.style.margin = "20px"
  for (var i = 0; i<3; i++ ) {
    var tr = document.createElement("tr");
    table2.appendChild(tr);
    for (var j = 0;j<3;j++) {
      tr.innerHTML = "<td>1</td><td>2</td><td>3</td>"
      // tr.innerHTML = ""

    }
  }

// Вариант 3 - при помощи createDocumentFragment
var table3 = document.createElement("table");
document.body.appendChild(table3);
table3.style.borderCollapse = "collapse";
for (var i = 0; i<10; i++) {
  var tr = document.createElement("tr");
  var frag = document.createDocumentFragment();
  tr.textContent = 'text'+i;
  frag.appendChild(tr)
  console.log(frag)
  table3.appendChild(frag);
  for (var j = 0;j<10;j++) {
    var td = document.createElement("td");
    fragTd = document.createDocumentFragment();
    td.textContent = i+"-"+j;
    fragTd.appendChild(td);
    tr.appendChild(fragTd);
    table3.children[i].children[j].style.border = "2px solid blue"
  }
}

}
