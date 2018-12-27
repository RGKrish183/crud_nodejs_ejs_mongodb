const ObjectID = require('mongodb').ObjectID;
const MongoClient = require('mongodb').MongoClient;
let state = null;

exports.dbutil = async function(callback){
    const url = `mongodb://localhost:27017`;
    if(state) {
        return callback(false, state);
    } else {
        // Use connect method to connect to the server
        MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
            console.log("Connected successfully to server");
            state = client;
            return callback(err, state);
        });
    }
};

exports.dbconnect = async function(callback){
    let db = state.db('quickbook'); // whatever your database name is
    return callback(db);
};

exports.dbclose = async function(){
    console.log("----Database disclosed----");
    return state.close();
};
