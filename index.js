const keypad = [
	[1,2,3],
	[4,5,6],
	[7,8,9],
	["*",0,"#"],
]

function findSequence(currentSequence, currentPosition, targetLength){
	if (currentSequence.length === targetLength){
		return
	}
	var bigL = false
	if (currentSequence.length % 3 === 0){
		bigL = true
	}

	currentSequence += keypad[currentPosition[0]][currentPosition[1]]
	console.log(bigL, currentSequence)
	findSequence(currentSequence, currentPosition, targetLength)
}

findSequence("", [3, 1], 4)
