import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DATABASE_URL);

let clientPromise;

if (process.env.NODE_ENV === 'development') {
    
    let globalAny = global;
    if (!globalAny._mongoClientPromise) {
        globalAny._mongoClientPromise = client.connect();
    }
    clientPromise = globalAny._mongoClientPromise;
} else {
    clientPromise = client.connect();
}

export default clientPromise;
