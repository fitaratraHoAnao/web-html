const express = require('express');
const app = express();
const PORT = 3000;

// Servir les fichiers statiques
app.use(express.static('public'));

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
