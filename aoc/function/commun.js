const fs = require('fs');
const path = require('path');

function getFiles(year, day, train=false) {

    let trainPath = train===true?"-train":""
    let name = day + trainPath

    const filePath = path.join(__dirname, "../files/"+year+"/aoc-"+name+".txt");

    const content = fs.readFileSync(filePath, 'utf-8');
    return content
}

module.exports = {
    getFiles
};
  