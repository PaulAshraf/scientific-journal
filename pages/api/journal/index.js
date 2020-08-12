import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {

    const body = req.body
    const journal = await req.db.collection('journals').insertOne(body)
    if (journal)
        res.status(200).json({ id: journal.insertedId })
    else
        res.status(400).json({ error: `Could not insert journal` })

});

export default handler;