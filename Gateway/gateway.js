var awsIot = require('aws-iot-device-sdk');
var crud = require('../databaseCrud/crud');
var internetAvailable = require('internet-available');
//require('env');
require('dotenv').config();
// const dotenv = require('dotenv');
// dotenv.config();
console.log(process.env);

// device = awsIot.device({//Device is an instance returned by mqtt.Client()
// //   keyPath: 'C:/Users/sapana.vyavahare/Documents/nodecodes/poc11backend/certs/ff2a2676a9-private.pem.key',
// //  certPath: 'C:/Users/sapana.vyavahare/Documents/nodecodes/poc11backend/certs/ff2a2676a9-certificate.pem.crt',
// //    caPath:'C:/Users/sapana.vyavahare/Documents/nodecodes/poc11backend/certs/AmazonRootCA1.pem.txt',
// //  clientId: '',
// //      host:'a2umcqi5sq8b36-ats.iot.us-east-1.amazonaws.com'// AWS IoT endpoint
// keyPath: process.env.KEY_PATH,
// certPath: process.env.CERT_PATH,
//   caPath: process.env.CA_PATH,
// clientId: '',
//     host: process.env.HOST
// });//configured connection with aws-iot platform

// // function print(tableId,deviceId,propName,propValue,curTime)
// // {

// }
module.exports.insertData = (deviceId,propId1,prop1value)=>{
  console.log("deviceId "+deviceId +"  prop1 "+propId1+" value is "+prop1value);

  internetAvailable().then(() => {
    console.log("Internet available");
    crud.insertData(deviceId,propId1,prop1value);
    function print (tableId,deviceId,propName,propValue,curTime)
   {
     console.log(tableId+" "+deviceId+" "+propName+" "+propValue+" "+curTime);
     device.publish('$aws/things/ThingGateway/shadow/update', JSON.stringify({ "state": { 
        "desired":{"deviceId":deviceId,"property1Name":propName,"property1value":propValue}
       }
       }));
      console.log("sapna");
      crud.delete(tableId);
   }
   var row = crud.read(print);
}).catch(() => {
    console.log("No internet");
    crud.insertData(deviceId,propId1,prop1value);
});
  
 
  //  function print (tableId,deviceId,propName,propValue,curTime)
  //  {
  //    console.log(tableId+" "+deviceId+" "+propName+" "+propValue+" "+curTime);
  //    device.publish('$aws/things/ThingGateway/shadow/update', JSON.stringify({ "state": { 
  //       "desired":{"deviceId":deviceId,"property1Name":propName,"property1value":propValue}
  //      }
  //      }));
  //   console.log("sapna");
    
  //   crud.delete(tableId);
  //  }
  //  var row = crud.read(print);
   //crud.delete(tableId);
   //console.log("gateway row "+row);
  //
  // device.publish('$aws/things/ThingGateway/shadow/update', JSON.stringify({ "state": { 
  //   "desired":{"deviceId":deviceId,"property1Name":propId1,"property1value":prop1value}
  // }
  // }));
}


