import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';
import { ObjectID } from 'mongodb'

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {

    const { query: { id }, } = req
    const journal = await req.db.collection('journals').findOne({ _id: ObjectID(id) })

    if (journal)
        res.status(200).json(journal)
    else
        res.status(400).json({ error: `Could not find journal with id = ${id}` })

});

export default handler;