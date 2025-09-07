# Backend excuse de dev

API  pour gérer les excuses de développeurs avec codes HTTP personnalisés.

## L'installation et le démarrage 

### Etape 1 cloner le projet 

```bash
git clone [Url_du_repo]
cd excuse-de-dev-v2
cd backend
```

### Etape 2 installer les dépendances

```bash
npm install
```

### Etape 3 configurer la Base de données

#### installer PostGreSQL

Télécharger et installer PostgreSQL puis télécharger et installer un éditeur de BDD comme DBeaver par exemple

#### créer la BDD

Ouvrer l'éditeur de BDD et connectez-vous à PostgreSQL (localhost:5432).
Créer une nouvelle BDD nommée `excuses` puis exécuter le script se trouvant dans 
`database/init.sql`.

### configurer les variables d'environnement

Créer un fichier `.env` à la racine du backend avec les variables d'environnement envoyé


### démarrer le serveur
```bash
npm run dev
```