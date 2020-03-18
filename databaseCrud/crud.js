const sqlite3 = require('sqlite3');
let db = new sqlite3.Database('./test.db',(err) =>{
    if(err)
    {
        console.log("error while creating database ");
        
    }
    else
    {
        console.log("database created successfully");
       
    }
})

 
 module.exports.insertData = (deviceId,propertyName,propertyValue)=>{
   console.log("inserting data into table");
   db.run("insert into property1(deviceId,propertyName,propertyValue,currentTime) values(?,?,?,datetime('now','localtime'))",[deviceId,propertyName,propertyValue]);;
}

module.exports.read = (callback) =>{
    console.log("reading data");
    db.all("select *  from property1",(err,rows)=>
    {
        if(err)
        {
            console.log("err while reading data "+err);
            
        }else{
            rows.forEach((row)=>{
            console.log(row);
            callback(row.tableId,row.deviceId,row.propertyName,row.propertyValue,row.currentTime);
    })
}
    })
    
}
module.exports.delete = (id) =>{
    console.log("deleting from database ");
    db.run(`delete from property1 where tableId = ${id}`);
}