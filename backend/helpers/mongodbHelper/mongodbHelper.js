const MongoClient = require("mongodb").MongoClient;
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_ADDRESS}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const getAll = (callback) => {
  MongoClient.connect(url, connectionOptions, function (err, client) {
    const collection = client
      .db(process.env.DB_NAME)
      .collection(process.env.DB_COLLECTION);
    const cursor = collection
      .find({})
      .toArray()
      .then((result) => {
        callback(result);
      })
      .catch((err) => console.log(err));
    client.close();
  });
};

const getOneById = (id, callback) => {
  MongoClient.connect(url, connectionOptions, function (err, client) {
    const collection = client
      .db(process.env.DB_NAME)
      .collection(process.env.DB_COLLECTION);
    const cursor = collection
      .find({ id })
      .toArray()
      .then((result) => {
        callback(result[0]);
      })
      .catch((err) => console.log(err));
    client.close();
  });
};

const saveOne = (cake, callback) => {
  MongoClient.connect(url, connectionOptions, function (err, client) {
    const collection = client
      .db(process.env.DB_NAME)
      .collection(process.env.DB_COLLECTION);
    const cursor = collection
      .insertOne(cake)
      .then((result) => {
        callback(result.ops[0]);
      })
      .catch((err) => console.log(err));
    client.close();
  });
};

// TODO: expand functionality for PUT and DELETE requests.
// TODO: explore options to DRY above code.
