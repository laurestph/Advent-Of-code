const {
    getFiles
} = require('../commun');

function day2(year, day) {

    file = getFiles(year, day)
    fileTest = '2x3x4\n1x1x10'

    let datas = file.split("\n")
    let squareFeet = 0
    let feetRibbon = 0
    datas.map(
        data => {

            lwh = data.split("x")
            lwh = lwh.map(value=>parseInt(value))
            lwh.sort((a, b) => a - b);
            let smallestValues = lwh.slice(0, 2);

            squareFeet += 2*lwh[0]*lwh[1] + 2*lwh[2]*lwh[1] + 2*lwh[0]*lwh[2]
            squareFeet += smallestValues[0] * smallestValues[1]

            feetRibbon += lwh[0]*lwh[1]*lwh[2]
            feetRibbon += lwh[0]+lwh[0]+lwh[1]+lwh[1]

        }
    )


    return [squareFeet,feetRibbon]
}

module.exports = {
    day2
};
  