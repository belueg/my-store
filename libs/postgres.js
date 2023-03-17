const { Client } = require('pg')

async function getConnection() {
  try {
    const client = new Client({
      connectionString: process.env.PG_CONNECTION_STRING
    })
    await client.connect()

    return client
  } catch (error) {
    console.error(error)
  }

}
module.exports = getConnection
