module.exports = [{
  "name": "dev",
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "chizzy",
  "password": "",
  "database": "readyrides",
  "entities": ["dist/**/entities/*{.ts,.js}"],
  "synchronize": true,
  "migrations": ["dist/migrations/*{.ts,.js}"],
  "cli": {
    "migrationsDir": "src/migrations"
  }
},
{
  "name": "default",
  "type": "postgres",
  "host": process.env.NODE_ENV === "production" ? "postgresdb" : "localhost",
  "port": 5432,
  "username": process.env.NODE_ENV === "production" ? "root" : "chizzy",
  "password": process.env.NODE_ENV === "production" ? "pass123" : "",
  "database": "readyrides",
  "entities": ["dist/**/entities/*{.ts,.js}"],
  "synchronize": false,
  "migrations": ["dist/migrations/*{.ts,.js}"],
  "cli": {
    "migrationsDir": "src/migrations"
  }
},
{
  "name": "prod",
  "type": "postgres",
  "host": "postgresdb",
  "port": 5432,
  "username": "root",
  "password": "pass123",
  "database": "readyrides",
  "entities": ["dist/**/entities/*{.ts,.js}"],
  "synchronize": false,
  "migrations": ["dist/migrations/*{.ts,.js}"],
  "cli": {
    "migrationsDir": "dist/migrations"
  }
}]
