import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

import { mongoPassword } from '../config'

const uri = `mongodb+srv://PaulAshraf:${mongoPassword}@scientific-journal.o1jnn.mongodb.net/test?retryWrites=true&w=majority`

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function database(req, res, next) {
    if (!client.isConnected()) await client.connect();
    req.dbClient = client;
    req.db = client.db('test');
    return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;