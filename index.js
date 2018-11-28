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
	if (bigL){
		return findLMoves(currentPosition, bigLMoves)
	}
	else{
		return findLMoves(currentPosition, littleLMoves)
	}
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
		return [currentSequence]
	}
	if (typeof currentSequence !== "string"){
		currentSequence = currentSequence.toString()
	}
	let bigL = isMoveBigL(currentSequence.length)

	currentSequence += keypad[currentPosition[0]][currentPosition[1]]
	let allGeneratedNextMoves = viableNextMoves(bigL, currentPosition).reduce(function(sum, nextPositionToCheck){
		let foundSequence = findSequence(currentSequence, nextPositionToCheck, targetLength)
		Array.prototype.push.apply(sum, foundSequence)
		return sum
	}, [])

	let memory = {}
	return allGeneratedNextMoves.filter(function(combination){
		if (memory[combination]){
			return false
		}
		return memory[combination] = true
	})
	// findSequence(currentSequence, currentPosition, targetLength)
}

// findSequence("", [3, 1], 7)


/*
	... when n gets too big recursive solution isn't going to work but this does look like a combinatorics question aka how many possiable moves there are for the current posisitons and stuff and since we dont really need to find all the variations and we just need to find the length, we can maybe just multiply together a sequence of numbers to find the answer? all we'll have to do now is just generate that sequence of number to multiply togehter... in any case food first :3
*/

function makeNextMoves(bigL, currentMoves){
	return currentMoves.reduce(function(moveSum, knownCurrentMove){
		let nextMoves = viableNextMoves(bigL, knownCurrentMove)
		Array.prototype.push.apply(moveSum, nextMoves)
		return moveSum
	}, [])
}

function findPossiableNextMoves(bigL, currentMoves){
	let possiableNextMoves = makeNextMoves(bigL, currentMoves)
	let memory = {}
	return possiableNextMoves.filter(function(move){
		if (memory[JSON.stringify(move)]){
			return false
		}
		return memory[JSON.stringify(move)] = true
	})
}

function secretSequenceCounter(targetLength){
	let currentEndingSequence = [[3,1]]
	let counter = 0
	// let debugList = [currentValidConfig]
	while (counter < targetLength - 1){
		let bigL = isMoveBigL(counter)
		currentEndingSequence = makeNextMoves(bigL, currentEndingSequence)
		counter++
	}
	return currentEndingSequence.length
}

typeof module !== "undefined" && (module.exports = {
	secretSequenceCounter,
	findSequence,
	findPossiableNextMoves,
	findLMoves,
	isMoveBigL,
	littleLMoves,
	bigLMoves
})
