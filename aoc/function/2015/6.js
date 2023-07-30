const {
    getFiles
} = require('../commun');
   
function year2015day6(year, day) {

    datas = getFiles(year, day).split("\n")
    datasParse = []

    // datas = ["turn on 0,0 through 0,0", "toggle 0,0 through 999,999", "turn off 499,499 through 500,500"]

    datas.map(
        data=>{
            splitData = data.split(' ').flatMap(item => item.split(','));
            if (splitData[0] !== "turn") {
                datasParse.push([splitData[0],"",splitData[1],splitData[2],splitData[3],splitData[4],splitData[5]])
            } else {
                datasParse.push([splitData[0],splitData[1],splitData[2],splitData[3],splitData[4],splitData[5],splitData[6]])
            }
        }
    )

    grid = {}
    gridLight = {}
    
    for (let x = 0; x<1000; x++) {
        for (let y = 0; y<1000; y++) {
            gridLight[x+"-"+y] = 0
        }
    }

    datasParse.map(
        dataParse => {
            for (let x = parseInt(dataParse[2]); x<parseInt(dataParse[5])+1; x++) {
                for (let y = parseInt(dataParse[3]); y<parseInt(dataParse[6])+1; y++) {
                    if(dataParse[0] === "toggle") {
                        grid[x+"-"+y] = !grid[x+"-"+y]
                        gridLight[x+"-"+y] += 2
                    } else {
                        if(dataParse[1] === "on") {
                            grid[x+"-"+y] = true
                            gridLight[x+"-"+y] += 1
                        } else {
                            grid[x+"-"+y] = false
                            if (gridLight[x+"-"+y]!==0) {
                                gridLight[x+"-"+y] -= 1
                            }
                        }
                    }
                }
            }
        }
    )

    numberOn = 0
    totalBrightness = 0

    Object.keys(grid).map(
        (key)=>{
            if (grid[key]===true) {
                numberOn += 1
            }

            totalBrightness += gridLight[key]
        }
    )

    return [numberOn,totalBrightness]

}


module.exports = {
    year2015day6, 
};
  