const fs = require('fs')
const csv = require('fast-csv')

var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/'

const stream = fs.createReadStream('courses.txt')

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("db_selpe")
    //const streamCsv
    csv
    .fromStream(
        stream, 
        {headers: true,
        quote: '"'})
    .on("data", function(data){        
        dbo.collection("course").insert(data);
    })
    .on("end", function(){
        db.close();
        console.log("done")
    });
})


