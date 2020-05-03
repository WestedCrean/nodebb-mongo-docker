const { MongoClient } = require("mongodb")

const user = "nodebb-pl"
const pass = process.env.NODEBB_PL_PASS

const url = `mongodb://${user}:${pass}@172.18.0.2?authSource=${user}`

async function main() {
    console.log("Connecting to " + url)
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log("connected") 
        let res = await listDatabases(client);
        console.log({"databases": res})
        let i = 0
        while(true){
            i++
            setTimeout(() => { console.log("Waiting: " + i*3000 + " seconds")}, 3000);
        }
     
    } catch (e) {
        console.log("ERR ROR")
        console.error(e)
    }

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
