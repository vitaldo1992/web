//ctrl+al+f - Js Format

function doWork() {
	return function calculate(y) {
		return y + 1;
	}
}

var func = doWork();
var x = func(5);
document.write(x);