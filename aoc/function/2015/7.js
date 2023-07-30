const {
    getFiles
} = require('../commun');
   
function year2015day7(year, day) {

    datas = getFiles(year, day).split("\n")

    datas = [
        "123 -> x",
        "456 -> y",
        "x AND y -> d",
        "x OR y -> e",
        "x LSHIFT 2 -> f",
        "y RSHIFT 2 -> g",
        "NOT x -> h",
        "NOT y -> i",
    ]

    dict = {}

    datas.map(
        data=>{
            value = data.split("->")
            dict[value[1].trim()] = value[0].trim().split(" ")
        }
    )

    console.log(dict)

    dictResolv = {}
    // A FAIRE
    letterRange = ["x", "y", "d", "e", "f","g","h","i"]

    letterRange.map(
        letter=>{
            switch (dict[letter].length) {
                case 1: 
                    dictResolv[letter] = parseInt(dict[letter])
                    break;
                case 2: 
                    dictResolv[letter] = dict[dict[letter][1]] ^ 0xFFFF
                    break;
                case 3: 
                    switch(dict[letter][1]) {
                        case "AND":
                            dictResolv[letter] = dict[dict[letter][0]] & dict[dict[letter][2]]
                            break;
                        case "OR":
                            dictResolv[letter] = dict[dict[letter][0]] | dict[dict[letter][2]]
                            break;
                        case "LSHIFT":
                            num = parseInt(dict[dict[letter][0]])
                            decalage = parseInt(dict[letter][2])
                            dictResolv[letter] = num << decalage
                            break;
                        case "RSHIFT":
                            num = parseInt(dict[dict[letter][0]])
                            decalage = parseInt(dict[letter][2])
                            dictResolv[letter] = num >> decalage
                            break;
                    }
                    break;
            }
        }
    )

    console.log(dictResolv)
    return [dict["a"],0]

}


module.exports = {
    year2015day7, 
};
  