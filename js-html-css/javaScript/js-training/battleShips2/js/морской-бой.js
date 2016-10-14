createBatelfield = function() {
  this.batelField = new Array(10);
  for (var i=0;i < this.batelField.length;i++) {
    this.batelField[i]=new Array(10);
    for (var j=0;j <this.batelField.length; j++) {
      this.batelField[i][j] = {
        chip: false,
        bomb: false,
        x: j,
        y: i
      }
    }
  };
  this.makeChips = function() {
    for(var i=0;i<3;i++) {
      var position=Math.round(Math.random()*1)
      console.log(position);
      if (position == 0) {
        
      }
    }
  }
  // this.bombing = function() {
  //   var x = +prompt("Enter your x and y coordinates");
  //   var y = +prompt("Enter your x and y coordinates");
  //   if (x>=0&&x<10&&y>=0&&y<10&&(typeof x == "number")&&(typeof y == "number")) {
  //     this.batelField[x][y].bomb=true
  //   }
  //   else {
  //     console.log("You'v typed wrong coordinates");
  //     this.bombing();
  //   }
  // },
  console.table(this.batelField)
}
myBattele = new createBatelfield();
myBattele.makeChips();
// myBattele.bombing();
