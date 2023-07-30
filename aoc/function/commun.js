const fs = require('fs');
const path = require('path');

function getFiles(year, day, train=false) {

    let trainPath = train===true?"-train":""
    let name = day + trainPath

    const filePath = path.join(__dirname, "../files/"+year+"/aoc-"+name+".txt");

    const content = fs.readFileSync(filePath, 'utf-8');
    return content
}

function minusculeAlphabet(){
    // Obtenir les lettres de l'alphabet en minuscules
    alphabet = []
    for (let i = 97; i <= 122; i++) {
        const letter = String.fromCharCode(i);
        alphabet.push(letter)
    }
    return alphabet
}

const clearConsole = () => {
    console.clear(); // Efface complètement la console (si disponible)
    process.stdout.write('\x1Bc'); // Efface la console en ajoutant des lignes vides
};
  

module.exports = {
    getFiles, 
    minusculeAlphabet,
    clearConsole
};
  