const {
    getFiles
} = require('./commun');
  

function day1(year, day, part) {

    file = getFiles(year, day, part)
    fileTrain = "()())"
    
    let floor = 0
    let firtEnter = false

    file.split("").map(
        (value,index) =>
        {
            if (value === "(") {
                floor += 1
            } else {
                floor -= 1
            }

            if (floor === -1 && !firtEnter) {
                basement = index+1
                firtEnter = true
            }

        }
    )

    return [floor, basement]
}
   

module.exports = {
    day1,
};
  