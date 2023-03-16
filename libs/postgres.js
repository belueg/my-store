const { Client } = require('pg')

async function getConnection() {
  try {
    const client = new Client({
      user: 'postgres',
      host: 'localhost',
      database: 'my_store',
      password: 'admin123',
      port: 5432,
    })
    await client.connect()

    return client
  } catch (error) {
    console.error(error)
  }

}
module.exports = getConnection
