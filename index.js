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

const littleLMoves = [
	[1,1],
	[1,-1],
	[-1,1],
	[-1,-1],
]
const bigLMoves = [
	[1,2],
	[1,-2],
	[-1,2],
	[-1,-2],
	[2,1],
	[2,-1],
	[-2,1],
	[-2,-1],
]
function findLMoves(currentPosition, possiableMoves){
	let viableMoves = possiableMoves.map(function(position){
		var newPosition = [position[0] + currentPosition[0], position[1] + currentPosition[1]]

		if (newPosition[0] < 0 || newPosition[0] > 3 || newPosition[1] < 0 || newPosition[1] > 2 ){ // early break point to get out of anything that isn't within the bounds
			return
		}
		if (typeof keypad[newPosition[0]][newPosition[1]] !== "number"){
			return
		}
		return newPosition
	}).filter(function(position){
		return !!position // only keep the non null options
	})
	return viableMoves
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

// findSequence("", [3, 1], 7)
