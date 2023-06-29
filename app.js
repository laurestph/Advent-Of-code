const express = require('express');
const app = express();
const {
  day1
} = require('./aoc/function/2015');

// Définition du répertoire des vues
app.set('views', './views');

// Configuration du moteur de rendu pour utiliser les fichiers HTML
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Définition de la route paramétrable
app.get('/:year/:day/:part', (req, res) => {
  const year = req.params.year;
  const day = req.params.day;
  const part = req.params.part;

  switch(year) {
    case "2015":
      switch(day){
        case "1":
          result = day1(year, day, part)
          result1 = result[0]
          result2 = result[1]
          break;
      }
      break;
  }

  res.render('aoc', {
    year: year,
    day: day,
    step: part,
    result1: result1,
    result2: result2,
  });
});

// Démarrage du serveur
app.listen(3000, () => {
  console.log('Le serveur est en écoute sur le port 3000');
});
