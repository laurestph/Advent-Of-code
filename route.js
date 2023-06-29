// routes.js
const express = require('express');
const router = express.Router();
const fs = require('fs');

// Route pour lire un fichier
router.get('/lire-fichier', (req, res) => {
  // Lire le fichier
  fs.readFile('files/2015/1/aoc1.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur lors de la lecture du fichier');
    }
    res.send(data);
  });
});

// Exporter le router pour le rendre accessible depuis d'autres fichiers
module.exports = router;
