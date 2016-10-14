var y = {};

function addY() {
  debugger;
  y.pr = prompt("YourName");
  if (isNaN(+y.pr)) {
    y.toString = function() {
      return "It must be number "
    }

  }
  else {
    y.toString = function() {

      console.log(typeof y.pr)
      return (+45);
    }
    y.pr=+y.pr;
    console.log(typeof y.pr)
  }

};
addY();
console.log(typeof y.pr)

alert(y+y.pr)
