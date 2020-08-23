// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/shared/database/database.sqlite'
    },
    migrations: {
      directory: './src/shared/database/migrations'
    }
  }
}
