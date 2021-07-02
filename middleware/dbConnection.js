// to establish connection that can be passed for multiple api endpoints.
import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient('mongodb+srv://superUser:hyrule13@cluster0.k5of3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('kings-kare');

  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;