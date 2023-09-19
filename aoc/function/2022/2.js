const {
    getFiles
} = require('../commun');

function resultRPS1(letter1, letter2) {
    let aa = letter1+letter2

    let scoreRPS = {
        "X":1,
        "Y":2,
        "Z":3
    }

    switch (aa) {
        case "AX": 
        case "BY": 
        case "CZ": 
            return scoreRPS[letter2]+3
        case "AY": 
        case "BZ": 
        case "CX": 
            return scoreRPS[letter2]+6
        default :
            return scoreRPS[letter2]
    }
}

function resultRPS2(letter1, letter2) {

    switch (letter2) {
        case "X":
            switch (letter1) {
                case "A": return 3
                case "B": return 1
                case "C": return 2
            }
        case "Y":
            switch (letter1) {
                case "A": return 1 + 3 
                case "B": return 2 + 3
                case "C": return 3 + 3
            }
        case "Z":
            switch (letter1) {
                case "A": return 2 + 6
                case "B": return 3 + 6
                case "C": return 1 + 6
            }

    }
}

function year2022day2(year, day) {

    data = getFiles(year, day)

    // data = `A Y
    // B X
    // C Z`

    data = data.split(/\s+|\n+/);

    let score1 = 0
    let score2 = 0

    for (let i=0; i < data.length/2; i++) {
        let letter1 = data[2*i]
        let letter2 = data[2*i+1]
        score1 += resultRPS1(letter1, letter2)
        score2 += resultRPS2(letter1, letter2)
    }
    return [score1, score2]
}

module.exports = {
    year2022day2, 
};
  