const insertData = require('../Gateway/gateway');
var voltage ;
var dimness ;
const deviceId = 101 ;
require('dotenv').config();
//console.log(process.env.KEY_PATH);
var value = setInterval((low,high)=>{//give delay of some seconds to publish data
    voltage=Math.floor(Math.random() * (high - low + 1) + low);//math class random function generate random value which is in between some limit
   console.log("voltage is  "+" "+voltage);
  
//    if(voltage > 95 && voltage <110)
//    {
//        dimness = 'low';
//    }
//    else if (voltage > 110 && voltage <116 )
//    {
//        dimness = 'medium';
//    }else{
//        dimness = 'high';
//    }
   //insertData.insertData(deviceId,'voltage',voltage,'dimness',dimness);
   insertData.insertData(deviceId,'voltage',voltage);
  },5000,95,120);

