var HR = 0;
var arr;
function makeBattle() {
  arr = new Array(10);
  for (var i = 0;i<10;i++) {
    arr[i] = new Array(10);
    for (var j=0;j<10;j++) {
      arr[i][j] = 0;
    }
  }



  var makeChips = function(number) {
    var x = Math.round(Math.random()*9);
    var y = Math.round(Math.random()*9);
    var choozedDirection = Math.round(Math.random());
    if (choozedDirection == 0 ) {
      if ((arr[x][y+number-1]!==undefined)&&(arr[x][y+1]!==undefined)) {
        makeCellChip(number,choozedDirection)
      }
      else {makeChips(number)}
    }
    else  {
      if (arr[x+number-1]!==undefined && arr[x+1]!==undefined) {
        makeCellChip(number,choozedDirection)
      }
      else {makeChips(number)}
    }


    function makeCellChip (number,choozedDirection) {
      for (var i=0; i<number; i++) {
        if (choozedDirection == 0  ) {
          if (arr[x][y+1]!==undefined ) {
            arr[x][y+i] = 1;
            arr[x][y-1]="x";
            arr[x][y+number] = "x";

            if (arr[x+1]) {
              arr[x+1][y+i] = "x";
              arr[x+1][y-1] = "x";
              arr[x+1][y+number] = "x";

              
            };
            if (arr[x-1]) {
              arr[x-1][y+i] = "x";
              arr[x-1][y-1] = "x";
              arr[x-1][y+number] = "x";
            };

          }
          else {
            makeChips(number)
          }
        }
        else {
          if (arr[x+1][y]!==undefined ) {
            arr[x+i][y] = 1;
            arr[x+i][y+1]="x";
            arr[x+i][y-1]="x";
            if (arr[x+number]) {
              arr[x+number][y] = "x";
              arr[x+number][y-1] = "x";
              arr[x+number][y+1] = "x"
            }
            if (arr[x-1]) {
              arr[x-1][y] = "x";
              arr[x-1][y-1] = "x";
              arr[x-1][y+1] = "x"
            }
          }
          else {
            makeChips(number)
          }
        }
      }
    }
  }

  makeChips(4);
  makeChips(3);
  makeChips(3);
  makeChips(2);
  makeChips(2);
  makeChips(2);
  makeChips(1);
  makeChips(1);
  makeChips(1);
  makeChips(1);

  (function checkI() {
    for (var i = 0;i<10;i++) {
      for (var j = 0;j<10;j++) {
        if (arr[i][j]===1) {
          HR++;
        }
      }
    }
  })();
  (function(){
    if (HR!==20) {
      HR=0;
      makeBattle();
    }
  })();
}
makeBattle();
console.table(arr);
