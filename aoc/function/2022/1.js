const {
    getFiles
} = require('../commun');
   
function year2022day1(year, day) {

    data = getFiles(year, day)

    // data = `
    // 1000
    // 2000
    // 3000
    
    // 4000
    
    // 5000
    // 6000
    
    // 7000
    // 8000
    // 9000
    
    // 10000
    // `

    sum = []

    dataSplit = data.split("\n")

    sumValue = 0
    dataSplit.map(
        value => {
            if (parseInt(value) ) {
                sumValue += parseInt(value)
            } else {
                sum.push(sumValue)
                sumValue = 0
            }
        }
    )

    sum.sort((a, b) => b - a);

    return [sum[0],sum[0]+sum[1]+sum[2]]
}

module.exports = {
    year2022day1, 
};
  