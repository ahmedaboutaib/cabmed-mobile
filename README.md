# Expo Router Example

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
npx create-react-native-app -t with-router
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)
- [Request for Comments](https://github.com/expo/router/discussions/1)


  ```bash
  ssh -i .\.ssh\id_rsa_gcloud mahdibough6@34.123.87.230
   ```
   ```bash
  ssh -i .\.ssh\id_rsa_gcloud mahdibough6@34.123.87.230
   ```
Il semble que vous vouliez corriger les commandes et les écrire sur chaque ligne, avec une explication détaillée de chaque commande. Voici les commandes, corrigées et expliquées :

### 1. Connexion SSH au serveur distant
```bash
ssh -i ~/.ssh/id_rsa_gcloud mahdibough6@34.123.87.230
```
- `ssh`: Commande pour établir une connexion SSH.
- `-i ~/.ssh/id_rsa_gcloud`: Spécifie le chemin de la clé privée à utiliser pour l'authentification SSH.
- `mahdibough6@34.123.87.230`: Nom d'utilisateur et adresse IP du serveur auquel vous souhaitez vous connecter.

### 2. Mise à jour des paquets sur le serveur
```bash
sudo apt update
```
- `sudo`: Permet d'exécuter la commande en tant qu'administrateur.
- `apt update`: Met à jour la liste des paquets disponibles mais ne les installe pas.

### 3. Mise à niveau des paquets sur le serveur
```bash
sudo apt upgrade
```
- `sudo`: Permet d'exécuter la commande en tant qu'administrateur.
- `apt upgrade`: Met à niveau tous les paquets installés sur le système.

### 4. Installation de Node.js
```bash
sudo apt install nodejs
```
- `sudo`: Permet d'exécuter la commande en tant qu'administrateur.
- `apt install nodejs`: Installe Node.js, un environnement d'exécution JavaScript.

### 5. Installation de npm (Node Package Manager)
```bash
sudo apt install npm
```
```bash

```
- `sudo`: Permet d'exécuter la commande en tant qu'administrateur.
- `apt install npm`: Installe npm, un gestionnaire de paquets pour Node.js.

### 6. Clonage du dépôt GitHub
```bash
git clone https://github.com/ahmedaboutaib/cabmed/client
```
- `git clone`: Clone le dépôt GitHub spécifié.
- `https://github.com/ahmedaboutaib/cabmed/client`: URL du dépôt à cloner.

### 7. Accès au répertoire cloné
```bash
cd cabmed/client
```
- `cd`: Change le répertoire courant.
- `cabmed/client`: Chemin vers le répertoire cloné du dépôt GitHub.

### 8. Installation des dépendances du projet avec npm
```bash
npm install
```
- `npm install`: Installe toutes les dépendances spécifiées dans le fichier package.json du projet.

### 9. Configuration des variables d'environnement avec nano
```bash
nano .env
```
- `nano`: Ouvre l'éditeur de texte nano.
- `.env`: Fichier où vous pouvez définir les variables d'environnement nécessaires pour le projet.

### 10. Installation de Nginx
```bash
sudo apt install nginx
```
- `sudo`: Permet d'exécuter la commande en tant qu'administrateur.
- `apt install nginx`: Installe le serveur web Nginx.

### 11. Configuration de Nginx pour le projet React
```bash
sudo nano /etc/nginx/sites-available/react
```
- `sudo`: Permet d'exécuter la commande en tant qu'administrateur.
- `nano /etc/nginx/sites-available/react`: Ouvre le fichier de configuration Nginx pour le projet React.
- server {
    listen 80;
    server_name  52.224.10.116;

    root /home/mahdibough6/cabmed/client/dist;
    index index.html;

    location / {
        try_files $uri /index.html;
    }
}

### 12. Démarrage du service Nginx
```bash
sudo systemctl start nginx
```
- `sudo`: Permet d'exécuter la commande en tant qu'administrateur.
- `systemctl start nginx`: Démarre le service Nginx pour appliquer les nouvelles configurations.

Ces commandes vous aideront à préparer votre serveur, à cloner le dépôt GitHub, à installer les dépendances Node.js, à configurer les variables d'environnement, à installer et configurer Nginx pour servir votre application React. N'oubliez pas de remplacer les valeurs spécifiques (comme les chemins de fichiers, les URL GitHub, etc.) par les vôtres.

```bash
npm run build

```
```bash

```
```bash

```
