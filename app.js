const express = require('express');
const app = express();
const browserSync = require('browser-sync').create();
const {
  day1,
  day2,
  day3,
  day4,
  day5,
} = require('./aoc/function/2015');

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
          result = day1(year, day)
          result1 = result[0]
          result2 = result[1]
          break;
        case "2":
          result = day2(year, day)
          result1 = result[0]
          result2 = result[1]
          break;
        case "3":
          result = day3(year, day)
          result1 = result[0]
          result2 = result[1]
          break;
        case "4":
          result = day4(year, day)
          result1 = result[0]
          result2 = result[1]
          break;
        case "5":
          result = day5(year, day)
          result1 = result[0]
          result2 = result[1]
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
