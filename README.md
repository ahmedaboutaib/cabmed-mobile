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
 
Voici les commandes corrigées et expliquées, avec une explication détaillée de chacune :

1. Mise à jour des paquets sur le serveur (commande incorrecte) :
```bash
sudo apt update
```
- `sudo`: Permet d'exécuter la commande en tant qu'administrateur.
- `apt update`: Met à jour la liste des paquets disponibles mais ne les installe pas.

2. Installation de PostgreSQL (commande incorrecte) :
```bash
sudo apt install postgresql
```
- `sudo`: Permet d'exécuter la commande en tant qu'administrateur.
- `apt install postgresql`: Installe PostgreSQL, un système de gestion de base de données relationnelle.

3. Accès à PostgreSQL en tant qu'utilisateur `postgres` :
```bash
sudo -u postgres psql
```
- `sudo -u postgres`: Exécute la commande en tant qu'utilisateur `postgres`.
- `psql`: Ouvre l'interface en ligne de commande de PostgreSQL.

4. Création d'une base de données nommée `cabmed` :
```sql
CREATE DATABASE cabmed;
```
- `CREATE DATABASE cabmed;`: Crée une nouvelle base de données appelée `cabmed`.

5. Création d'un utilisateur `ahmed` avec un mot de passe chiffré `2002` :
```sql
CREATE USER ahmed WITH ENCRYPTED PASSWORD '2002';
```
- `CREATE USER ahmed WITH ENCRYPTED PASSWORD '2002';`: Crée un nouvel utilisateur `ahmed` avec le mot de passe chiffré `2002`.

6. Attribution de tous les privilèges sur la base de données `cabmed` à l'utilisateur `ahmed` :
```sql
GRANT ALL PRIVILEGES ON DATABASE cabmed TO ahmed;
```
- `GRANT ALL PRIVILEGES ON DATABASE cabmed TO ahmed;`: Donne à l'utilisateur `ahmed` tous les privilèges sur la base de données `cabmed`.

7. Exécution des migrations de la base de données avec Sequelize CLI :
```bash
npx sequelize-cli db:migrate
```
- `npx sequelize-cli db:migrate`: Utilise Sequelize CLI pour exécuter les migrations de base de données. Cela applique les changements de schéma spécifiés dans les fichiers de migration.

Ces commandes vous permettront de configurer une base de données PostgreSQL, de créer une base de données `cabmed`, un utilisateur `ahmed` avec les autorisations nécessaires, et d'exécuter les migrations de base de données pour votre application.

N'oubliez pas de remplacer les valeurs spécifiques (comme les noms d'utilisateur, les mots de passe, les noms de base de données, etc.) par les vôtres selon votre configuration.


```bash
nano .env
```
