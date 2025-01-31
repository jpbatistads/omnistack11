// Update with your config settings.
// Depois de pensar nas entidadades que sãoi as tabelas cria-se o db
//Faz as migrations - Estudar sobre
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/dbsqlite'
    },
    migrations:{
      directory: "./src/database/migrations"
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
