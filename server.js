const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques dans un dossier "public"
app.use(express.static(path.join(__dirname, 'public')));

// Route par défaut pour la racine
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'web.html'));
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
