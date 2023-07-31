const {
    getFiles
} = require('../commun');


const getSum = (param) => {

    sum = 0

    data = param.replace(/[\[\]\{\}]/g, "");
    dataSplit = data.split(/[\s,:]+/);

    dataSplit.map(
        value => {
            sum += !isNaN(value) ? parseInt(value) : 0
        }
    )

    return sum
}

function sumNumbersWithoutRed(json) {
    let totalSum = 0;
  
    function traverse(obj) {
        if (Array.isArray(obj)) {
            obj.forEach(item => traverse(item));
        } else if (typeof obj === 'object') {
            // Check if the object contains any property with the value "red"
            let hasRedValue = false;
            for (let key in obj) {
                if (obj.hasOwnProperty(key) && obj[key] === 'red') {
                    hasRedValue = true;
                    break;
                }
            }
            if (!hasRedValue) {
                for (let key in obj) {
                    if (obj.hasOwnProperty(key)) {
                    traverse(obj[key]);
                    }
                }
            }
        } else if (typeof obj === 'number') {
            totalSum += obj;
        }
    }
  
    traverse(json);
    return totalSum;
}

function year2015day12(year, day){
    datas = getFiles(year, day).split("\n")

    datasTest = ["[1,2,3]", "{\"a\":2,\"b\":4}", "[[[3]]]", "{\"a\":{\"b\":4},\"c\":-1}", "{\"a\":[-1,1]}", "[-1,{\"a\":1}]", "[]", "{}"]
   
    datasTest.map(
        data => {
            getSum(data)
        }
    )

    datasTestRed = ["[1,2,3]", "[1,{\"c\":\"red\",\"b\":2},3]", "{\"d\":\"red\",\"e\":[1,2,3,4],\"f\":5}", "[1,\"red\",5]"]

    datasTestRed.map(
        data => {
            return 
            console.log(data, sumNumbersWithoutRed(JSON.parse(data)))
        }
    )

    sum = getSum(datas[0])
    redSum = sumNumbersWithoutRed(JSON.parse(datas[0]))

    return [sum, redSum]
}

module.exports = {
    year2015day12, 
};
  