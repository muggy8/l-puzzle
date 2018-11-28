const keypad = [
	[1,2,3],
	[4,5,6],
	[7,8,9],
	["*",0,"#"],
]

function findSequence(currentSequence, currentPosition, targetLength){
	var bigL = false
	if (currentPosition % 3 === 0){
		bigL = true
	}

	currentSequence += keypad[currentPosition[0]][currentPosition[1]]
	console.log(bigL, currentSequence)
}

findSequence("", [3, 1], 4)
