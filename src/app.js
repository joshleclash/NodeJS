//console.log("Hola lindo te quiero");
const express = require('express');
const app = express();
//const sql = require("mssql");
const bodyParser = require("body-parser");
const { config } = require('process');
const cryp = require("crypto-js");
import {configCredentials} from  '../src/configCredentials'//{configCredentials} from './configCredentials'
import {usersRoutes} from './routes/users.routes'



async function validateCredentials(req,res)
{
    if(typeof req.headers.authorization =='undefined'){
        res.send({"error":"Basic autentication not send"});
        res.end();
    }else
    {
        if((req.headers.authorization.indexOf("Basic")==0))
        {
                const base64Credentials =  req.headers.authorization.split(' ')[1];
                const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
                const [username, password] = credentials.split(':');
                //console.log(configCredentials);
                if(configCredentials.username==username && configCredentials.password==password)
                return true;
                else{     
                        res.send({"error":"userAutorizacion error","msg":"credentials not found"});
                    } 
                    res.end();
        }
    }
    
}
const PORT = process.env.PORT ||5000;
 
// Server Setup

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

//app.use('/api',);
console.log(usersRoutes);

app.listen(PORT,console.log(`Server started on port ${PORT}`));
