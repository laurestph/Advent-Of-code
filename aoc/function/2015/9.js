const {
    getFiles
} = require('../commun');


function permutations(elements) {
    if (elements.length === 1) {
        return [elements];
    }
    const result = [];
    for (let i = 0; i < elements.length; i++) {
        const currentElement = elements[i];
        const remainingElements = elements.filter((_, index) => index !== i);
        const permutationsOfRemaining = permutations(remainingElements);

        for (let j = 0; j < permutationsOfRemaining.length; j++) {
        const permutation = [currentElement, ...permutationsOfRemaining[j]];
        result.push(permutation);
        }
    }
    return result;
}
   
function year2015day9(year, day) {

    datas = getFiles(year, day).split("\n")

    // datas = ["London to Dublin = 464","London to Belfast = 518", "Dublin to Belfast = 141"]

    cities = []
    distanceCities = {}

    datas.map(
        data => {
            dataSplit = data.split(" ")
            citie1 = dataSplit[0]
            citie2 = dataSplit[2]
            distance = dataSplit[4]
            if (!cities.includes(citie1)) {
                cities.push(citie1);
            }
            if (!cities.includes(citie2)) {
                cities.push(citie2);
            }
            distanceCities[citie1+"-"+citie2] = parseInt(distance)
            distanceCities[citie2+"-"+citie1] = parseInt(distance)
        }
    )

    let possibleTrajets = permutations(cities);

    let shortest = Infinity
    let longest = 0

    possibleTrajets.map(
        trajet => {
            trajetKm = 0
            trajet.map(
                (citie, indexCitie) => {
                    if (indexCitie!==0)  {
                        trajetKm += distanceCities[lastCitie+"-"+citie]
                    }
                    lastCitie = citie
                }
            )
            if (trajetKm < shortest) {
                shortest = trajetKm
            }
            if (trajetKm > longest) {
                longest = trajetKm
            }
        }
    )

    return [shortest,longest]

}


module.exports = {
    year2015day9, 
};
  