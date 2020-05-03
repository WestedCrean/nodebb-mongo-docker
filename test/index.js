const { MongoClient } = require("mongodb")

const user = "nodebb-pl"
const pass = process.env.NODEBB_PL_PASS

const url = `mongodb://${user}:${pass}@172.16.238.2`

async function main() {
  console.log("Connecting to " + url)
  const client = new MongoClient(url)

  try {
    await client.connect()
    console.log("connected")
    let res = await listDatabases(client)
    console.log({ databases: res })
  } catch (e) {
    console.error(e)
  }
}

main()
