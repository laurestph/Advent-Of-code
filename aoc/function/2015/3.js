const {
    getFiles
} = require('../commun');

function day3Function(datas, houseDeliver) {
    x = 0
    y = 0
    houseDeliver[x+"-"+y] = 1
    
    datas.map(
        data => {
            if (data===">") {
                x+=1
            } else if(data==="<") {
                x-=1
            } else if(data==="^") {
                y+=1
            } else {
                y-=1
            }
            if (!houseDeliver[x+"-"+y]) {
                houseDeliver[x+"-"+y] = 0
            }
            houseDeliver[x+"-"+y] += 1
        }
    )

    return houseDeliver
}
   
function year2015day3(year, day) {

    datas = getFiles(year, day).split("")

    fileTest = "^v"

    houseDeliver = {}
    houseDeliver = day3Function(datas, houseDeliver)

    const santa = [];
    const robot = [];

    for (let i = 0; i < datas.length; i++) {
        if (i % 2 === 0) {
            santa.push(datas[i]);
        } else {
            robot.push(datas[i]);
        }
    }

    dictSanta = {}
    dictRobot = {}

    houseDeliverSanta = day3Function(santa, dictSanta)
    houseDeliverRobot = day3Function(robot, dictRobot)
    
    const fusion = Object.assign({}, houseDeliverSanta);

    for (const key in houseDeliverRobot) {
    if (fusion.hasOwnProperty(key)) {
        fusion[key] += houseDeliverRobot[key];
    } else {
        fusion[key] = houseDeliverRobot[key];
    }
    }
    return [Object.keys(houseDeliver).length,Object.keys(fusion).length]
}


module.exports = {
    year2015day3, 
};
  