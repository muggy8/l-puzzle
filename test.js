let imported = {}
if (typeof require !== "undefined"){
	imported = require("./index.js")
}

with(imported){
	console.log("--- testing isMoveBigL ---")
	isMoveBigL(0) === true ? console.log("pass") : console.warn("fail")
	isMoveBigL(4) === false ? console.log("pass") : console.warn("fail")
	isMoveBigL(6) === true ? console.log("pass") : console.warn("fail")
	isMoveBigL(2) === false ? console.log("pass") : console.warn("fail")
	isMoveBigL(1) === false ? console.log("pass") : console.warn("fail")
	isMoveBigL(5) === false ? console.log("pass") : console.warn("fail")

	console.log("--- testing findLMoves littleLMoves ---")
	JSON.stringify(findLMoves([3, 1], littleLMoves).sort()) === "[[2,0],[2,2]]" ? console.log("pass") : console.warn("fail")
	JSON.stringify(findLMoves([0, 1], littleLMoves).sort()) === "[[1,0],[1,2]]" ? console.log("pass") : console.warn("fail")
	JSON.stringify(findLMoves([1, 1], littleLMoves).sort()) === "[[0,0],[0,2],[2,0],[2,2]]" ? console.log("pass") : console.warn("fail")
	JSON.stringify(findLMoves([2, 2], littleLMoves).sort()) === "[[1,1],[3,1]]" ? console.log("pass") : console.warn("fail")
	JSON.stringify(findLMoves([0, 0], littleLMoves).sort()) === "[[1,1]]" ? console.log("pass") : console.warn("fail")
	JSON.stringify(findLMoves([2, 1], littleLMoves).sort()) === "[[1,0],[1,2]]" ? console.log("pass") : console.warn("fail")

	console.log("--- testing findLMoves bigLMoves ---")
	JSON.stringify(findLMoves([3, 1], bigLMoves).sort()) === "[[1,0],[1,2]]" ? console.log("pass") : console.warn("fail")
	JSON.stringify(findLMoves([0, 1], bigLMoves).sort()) === "[[2,0],[2,2]]" ? console.log("pass") : console.warn("fail")
	JSON.stringify(findLMoves([1, 1], bigLMoves).sort()) === "[]" ? console.log("pass") : console.warn("fail")
	JSON.stringify(findLMoves([2, 2], bigLMoves).sort()) === "[[0,1],[1,0]]" ? console.log("pass") : console.warn("fail")
	JSON.stringify(findLMoves([0, 0], bigLMoves).sort()) === "[[1,2],[2,1]]" ? console.log("pass") : console.warn("fail")
	JSON.stringify(findLMoves([2, 1], bigLMoves).sort()) === "[[0,0],[0,2]]" ? console.log("pass") : console.warn("fail")

	console.log("--- testing findPossiableNextMoves true ---")
	JSON.stringify(findPossiableNextMoves(true, [[3, 1]]).sort()) === "[[1,0],[1,2]]" ? console.log("pass") : console.warn("fail")
	JSON.stringify(findPossiableNextMoves(true, [[3, 1],[1, 1]]).sort()) === "[[1,0],[1,2]]" ? console.log("pass") : console.warn("fail")
	JSON.stringify(findPossiableNextMoves(true, [[3, 1],[1, 1],[0, 0]]).sort()) === "[[1,0],[1,2],[2,1]]" ? console.log("pass") : console.warn("fail")

	console.log("--- testing findSequence to make sure this works ---")
	JSON.stringify(findSequence("", [3, 1], 4).sort()) === `["0424","0426","0484","0486","0624","0626","0684","0686"]` ? console.log("pass") : console.warn("fail")
	JSON.stringify(findSequence("", [3, 1], 3).sort()) === `["042","048","062","068"]` ? console.log("pass") : console.warn("fail")
	JSON.stringify(findSequence("", [3, 1], 2).sort()) === `["04","06"]` ? console.log("pass") : console.warn("fail")

	console.log("--- testing secretSequenceCounter based on findSequence ---")
	for(let i = 2; i < 17; i++){
		let seqLen, counterLen
		if ((seqLen = findSequence("", [3, 1], i).length) === (counterLen = secretSequenceCounter(i))){
			console.log("pass", i)
		}
		else {
			console.warn("fail?", i, seqLen, counterLen)
		}
	}
}
