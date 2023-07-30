function findNewNumber(puzzleInput){
    let result = ""
    let numberValue = 1
    let pastNumber = ""

    puzzleInput.split("").map(
        (inputNumber, index)=> {
            console.log(inputNumber, pastNumber)
            if (index !== 0) {
                if (inputNumber === pastNumber ) {
                    numberValue += 1
                } else {
                    result += numberValue+''+pastNumber
                }
                pastNumber = inputNumber
            }
        }
    )

    return result
}
   
function year2015day10(year, day) {


    puzzleInput = "1113122113 "
    puzzleInput = "1211 "

    console.log("puzzleInput", puzzleInput)

    result = findNewNumber(puzzleInput)

    console.log("result", result)

    return [0,0]
}


module.exports = {
    year2015day10, 
};
  