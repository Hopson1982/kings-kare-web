const MongoClient = require('mongodb').MongoClient;

async function main(){
    const uri = "mongodb+srv://superUser:hyrule13@cluster0.k5of3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try{
            await client.connect();

            // await listDatabases(client);
            await createProduct(client,
                {
                    name: "Hair Oil",
                    description: "Handmade hair oil made from high quality all natural ingrediants to keep your hair smooth and looking good.",
                    category: "Oils",
                    price: 7.00
                }
            );
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases: ");
    databasesList.databases.forEach(db => {
        console.log('- ' + db.name);
    });
}

async function createProduct(client, newProduct){
    const result = await client.db("kings-kare").collection("products").insertOne(newProduct);
    console.log(`New product created with the following id: ${result.insertedId}`);
}