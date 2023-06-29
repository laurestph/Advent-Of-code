const fs = require('fs');
const path = require('path');

function getFiles(year, day, part, train=false) {

    let trainPath = train===true?"-train":""
    let name = part + trainPath

    const filePath = path.join(__dirname, "../files/"+year+"/"+day+"/aoc-"+name+".txt");

    const content = fs.readFileSync(filePath, 'utf-8');
    return content
}

module.exports = {
    getFiles
};
  