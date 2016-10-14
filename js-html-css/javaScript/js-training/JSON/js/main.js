var x = '[{"myCousin": "Igor", "myName": "Vitaldo"}]';
var b = JSON.parse(x);
console.log(b);
var c = JSON.stringify(b);
console.log(c);
var obj = '{\
	"gost": {\
		"name": "mario",\
		"height": "1.2"\
	},\
	"mobo": {\
		"name": "bern",\
		"height": "2"\
	}\
}';
var obj_json = JSON.parse(obj);
console.log(obj_json)
