const {
    getFiles
} = require('../commun');
   
function year2015day8(year, day) {

    datas = getFiles(year, day).split("\n")

    datas = ["", "abc", "aaa\"aaa", "\x27"]
    
    numberCaractersTotal = 0
    numberCaracters = 0
    datas.map(
        data=>{
            numberCaractersTotal+=getCodeLength(data);
            numberCaracters+=data.length
        }
    )

    return [numberCaractersTotal-numberCaracters,0]

}

function getCodeLength(line) {
    let count = 0;
    let i = 0;
  
    while (i < line.length) {
      const char = line[i];
  
      if (char === "\\") {
        if (line[i + 1] === "\\" || line[i + 1] === '"') {
          count += 1;
          i += 2;
        } else if (line[i + 1] === "x") {
          count += 1;
          i += 4;
        }
      } else {
        count += 1;
        i += 1;
      }
    }
  
    return count;
  }


module.exports = {
    year2015day8, 
};
  