const express = require('express');
const app = express();
const browserSync = require('browser-sync').create();
const {
  year2015day1,
  year2015day2,
  year2015day3,
  year2015day4,
  year2015day5,
  year2015day6,
  year2015day7,
  year2015day8,
  year2015day9,
  year2015day10,
  year2015day11,
  year2015day12,
  year2022day1,
} = require('./aoc/function/allFunctions');

// Définition du répertoire des vues
app.set('views', './views');

// Configuration du moteur de rendu pour utiliser les fichiers HTML
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Définition de la route paramétrable
app.get('/:year/:day', (req, res) => {
  const year = req.params.year;
  const day = req.params.day;

  switch(year) {
    case "2015":
      switch(day){
        case "1":
          [result1, result2]  = year2015day1(year, day)
          break;
        case "2":
          [result1, result2]  = year2015day2(year, day)
          break;
        case "3":
          [result1, result2]  = year2015day3(year, day)
          break;
        case "4":
          [result1, result2]  = year2015day4(year, day)
          break;
        case "5":
          [result1, result2]  = year2015day5(year, day)
          break;
        case "6":
          [result1, result2]  = year2015day6(year, day)
          break;
        case "7":
          [result1, result2]  = year2015day7(year, day)
          break;
        case "8":
          [result1, result2]  = year2015day8(year, day)
          break;
        case "9":
          [result1, result2]  = year2015day9(year, day)
          break;
        case "10":
          [result1, result2]  = year2015day10(year, day)
          break;
        case "11":
          [result1, result2]  = year2015day11(year, day)
          break;
        case "12":
          [result1, result2]  = year2015day12(year, day)
          break;
      }
      break;
      case "2022":
        switch(day){
          case "1":
            [result1, result2]  = year2022day1(year, day)
            break;
        }
        break;
  
  }

  res.render('aoc', {
    year: year,
    day: day,
    result1: result1,
    result2: result2,
  });
  
});

// Démarrage du serveur
app.listen(3000, () => {
  console.log('Le serveur est en écoute sur le port 3000');
});
