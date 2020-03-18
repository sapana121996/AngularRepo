const insertData = require('../Gateway/gateway');
var temp;
var deviceId = 102;
var status;
var value = setInterval((low,high) =>{
    temp=Math.floor(Math.random() * (high - low + 1) + low);//math class random function generate random value which is in between some limit
    console.log("temp is  "+" "+temp);
    if(temp > 20 && temp < 25)
    status = 'min';
    else
    status = 'max';
    //insertData.insertData(deviceId,'temp',temp,'status',status);
    insertData.insertData(deviceId,'temp',temp);
},7000,20,35)
