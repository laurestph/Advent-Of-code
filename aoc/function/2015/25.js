function genererCoordonneesDiagonales(n) {
    const coordonnees = [];
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j <= i; j++) {
        coordonnees.push([i - j, j]);
      }
    }
  
    return coordonnees;
  }
  
function year2015day25(year, day) {

    let row = 2981
    let column = 3075

    // Exemple d'utilisation :
    const n = 2*column+1;  // Vous pouvez choisir la taille de la séquence
    const sequence = genererCoordonneesDiagonales(n);

    let table = new Array(n).fill(null).map(() => []);

    let value = 20151125

    for (let i = 0; i<sequence.length; i++) {
        table[sequence[i][0]][sequence[i][1]] = value
        value = (value*252533)%33554393

    }

    let result1 = table[row-1][column-1]
    // console.table(table)

    return [result1,0]
}

module.exports = {
    year2015day25, 
};
  