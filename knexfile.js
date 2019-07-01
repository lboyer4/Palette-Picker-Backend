// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/palettepicker',
    useNullAsDefault: true,
      migrations: {
        directory: './migrations'
    },
      seeds: {
        directory: './seeds'
      }
  },

  production: {
  client: 'pg',
  connection: process.env.DATABASE_URL + `?ssl=true`,
  migrations: {
    directory: './migrations'
  },
  seeds: {
    directory: './seeds'
  },
  useNullAsDefault: true
  }
};