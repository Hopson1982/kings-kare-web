//MongoDB node driver works only on the server side and assumes you're working on the backend.
import nextConnect from 'next-connect';
import middleware from '../../middleware/dbConnection';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {

    let cursor = await req.db.collection('products').find()
    const doc = await cursor.toArray();
    // console.log(doc);
    res.json(doc);
});

export default handler;
