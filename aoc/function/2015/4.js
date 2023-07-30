const {
    getFiles
} = require('../commun');
const crypto = require('crypto');
   
function year2015day4(year, day) {

    data = getFiles(year, day)

    whileCondition = true
    i = 0
    firstFind = false

    while (whileCondition) {
        let md5Hash = crypto.createHash('md5').update(data+i).digest('hex');

        if (md5Hash.substring(0,5)==="00000" && firstFind === false) {
            md5Number5 = i 
            firstFind = true
        }

        if (md5Hash.substring(0,6)==="000000") {
            md5Number6 = i 
            whileCondition = false
        }
        i++;
    }
    return [md5Number5,md5Number6]

}


module.exports = {
    year2015day4, 
};
  