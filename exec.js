let fn
if (typeof require !== "undefined"){
	fn = require("./index.js").secretSequenceCounter
}
else {
	fn = secretSequenceCounter
}

for(let i = 1; i <= 10; i++){
	console.log(i + " => " + fn(i).toString())
}
console.log(100 + " => " + fn(100).toString())
