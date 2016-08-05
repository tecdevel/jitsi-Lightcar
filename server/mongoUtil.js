'use strict';

let mongo = require("mongodb");
let client= mongo.MongoClient;
let _db;

module.exports={
    connect(){
        client.connect('mongodb://localhost:27017/users-db', (err,db)=>{
            if(err){
                console.log("Error Connecting to Mongo- check mongod connection");
                process.exit(1);
            }
            _db=db;
            console.log("Connected to Mongo");
        });
    },
    users(){
        return _db.collection('users');
    }

};
