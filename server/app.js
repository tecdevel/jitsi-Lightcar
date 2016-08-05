'use strict';
let express=require('express');
let app=express();
let mongoUtil = require('./mongoUtil');
mongoUtil.connect();
app.use( express.static(__dirname + "/../client") );

app.get('/usersDB/checkUserExist', (request, response)=>{
    let users= mongoUtil.users();

    users.find().toArray((err,docs)=>{
        if(err){
            response.sendStatus(400);
            
        }
        console.log(JSON.stringify(docs));
        response.json(docs);
        
    });
    
});


app.listen(8181, () => console.log( "Listening on 8181" ));
