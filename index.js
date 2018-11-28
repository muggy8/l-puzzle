const keypad = [
	[1,2,3],
	[4,5,6],
	[7,8,9],
	["*",0,"#"],
]

function isMoveBigL(lengthOfCurrentSequence){
	var isBigL = false
	if (lengthOfCurrentSequence % 3 === 0){
		isBigL = true
	}
	return isBigL
}

function viableNextMoves(bigL, currentPosition){

}

function findLittleLMoves(currentPosition){

}

function findBigLMoves(currentPosition){

}

function findSequence(currentSequence, currentPosition, targetLength){
	if (currentSequence.length === targetLength){
		return
	}
	var bigL = isMoveBigL(currentSequence.length)

	currentSequence += keypad[currentPosition[0]][currentPosition[1]]
	// console.log(bigL, currentSequence)
	// findSequence(currentSequence, currentPosition, targetLength)
}

findSequence("", [3, 1], 7)
