function estValide(mot) {
    // Vérifier si le mot ne contient pas les lettres i, o ou l
    if (mot.includes('i') || mot.includes('o') || mot.includes('l')) {
        return false;
    }
    // Vérifier si le mot contient une suite de trois lettres consécutives
    let aUneSuite = false;
    for (let i = 0; i < mot.length - 2; i++) {
        const char1 = mot.charCodeAt(i);
        const char2 = mot.charCodeAt(i + 1);
        const char3 = mot.charCodeAt(i + 2);

        if (char2 === char1 + 1 && char3 === char2 + 1) {
            aUneSuite = true;
            break;
        }
    }
    if (!aUneSuite) {
        return false;
    }
    
    // Vérifier si le mot contient au moins deux paires de lettres identiques non superposées
    let paires = [];
    for (let i = 0; i < mot.length - 1; i++) {
        if (mot[i] === mot[i + 1]) {
            if (!paires.includes(mot[i])) {
                paires.push(mot[i]);
            }
        }
    }

    return paires.length >= 2;
}

function incrementerMot(mot) {
    let i = mot.length - 1;
    while (i >= 0) {
        if (mot[i] !== 'z') {
            let nouveauCaractere = String.fromCharCode(mot.charCodeAt(i) + 1);
            mot = mot.substring(0, i) + nouveauCaractere + mot.substring(i + 1);
            break;
        } else {
            mot = mot.substring(0, i) + 'a' + mot.substring(i + 1);
            i--;
        }
    }
    return mot;
}

function completerMot(mot) {
  while (mot.length < 8) {
    mot += 'a';
  }
  return mot;
}

function trouverProchainMotDePasse(mot) {
    do {
      mot = incrementerMot(mot);
    } while (!estValide(mot));
  
    return mot;
}

function year2015day11(){
    const motDePasseActuel = "cqjxjnds";
    const motComplet = completerMot(motDePasseActuel);
    const prochainMotDePasse = trouverProchainMotDePasse(motComplet);
    
    const motDePasseActuel2 = prochainMotDePasse;
    const motComplet2 = completerMot(motDePasseActuel2);
    const prochainMotDePasse2 = trouverProchainMotDePasse(motComplet2);

    return [prochainMotDePasse, prochainMotDePasse2]
}

module.exports = {
    year2015day11, 
};
  