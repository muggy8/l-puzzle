let fn
if (typeof require !== "undefined"){
	fn = require("./index.js").secretSequenceCounter
}
else {
	fn = secretSequenceCounter
}
console.log("n = 7 =>", fn(7))
console.log("n = 20 =>", fn(20))
console.log("n = 30 =>", fn(30))
console.log("n = 40 =>", fn(40))
console.log("n = 50 =>", fn(50))
console.log("n = 60 =>", fn(60))
console.log("n = 70 =>", fn(70))
console.log("n = 80 =>", fn(80))
console.log("n = 90 =>", fn(90))
console.log("n = 100 =>", fn(100))
