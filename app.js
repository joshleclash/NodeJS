const express = require('express');
const app = express();
const sql = require("mssql");
const bodyParser = require("body-parser");
const { config } = require('process');
const cryp = require("crypto-js");

var sqlConfig = {
    user:     "saTp",
    password: "1019002704",
    server:   "srvdesarrollo",
    database: "tp",
    port:1433,
    requestTimeout:60000,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
      },
      options: {
        encrypt: false, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
      }
  }
/*
    class dbSql extends sql {
        var sqlConfig;
            constructor(res)
            {
                sqlConfig = {
                    user:     "sa",
                    password: "1019002704",
                    server:   "localhost",
                    database: "teleperformance",
                    port:1433,
                    requestTimeout:60000,
                    pool: {
                        max: 10,
                        min: 0,
                        idleTimeoutMillis: 30000
                      },
                      options: {
                        encrypt: false, // for azure
                        trustServerCertificate: false // change to true for local dev / self-signed certs
                      }
                  }

            }
            executeSql(res,sqlQuery){
                sql.connect(config,function(){
                    var request = new sql.Request();
                    request.query(sqlQuery, function (err, recordset) {
                        if (err) 
                        {
                              console.log(err);
                              res.send({"error":err,"success":"false"});
                        }else{
                              res.send({"rs":recordset.recordset,"success":"true"});
                        }
          
                    });

                });
            }
    } */ 
    
  var executeSql = function(res,sqlQuery)
  {
   try {
       sql.connect(sqlConfig,function(){
          var request = new sql.Request();
          request.query(sqlQuery, function (err, recordset) {
              if (err) 
              {
                    console.log(err);
                    res.send({"error":err,"success":"false"});
              }else{
                    res.send({"rs":recordset.recordset,"success":"true"});
              }
                  

          });
      });
      } catch (err) {
       res.send(err);
      }
} 
app.use(express.json());
app.get('/', (req, res) => {
    res.send({"server status":'Ready'})
    res.end()
})
app.post('/api/createUser', (request, res) => {
        bodyRequest=
        {
            firstName:request.body.firstName,
            lastName:request.body.lastName,
            email: request.body.email,
            status :1,
            userPassword:request.body.userPassword//cryp.SHA256(request.body.userPassword).toString()
        }
        console.log(bodyRequest);
        var cnn =  sql.connect(sqlConfig,function(err)
        {

                        const ps = new sql.Request(cnn);
                        ps.input('firstName', sql.VarChar,bodyRequest.firstName);
                        ps.input('lastName', sql.VarChar,bodyRequest.lastName);
                        ps.input('email', sql.VarChar,bodyRequest.email);
                        ps.input('status', sql.Bit,bodyRequest.status);
                        ps.input('userPassword', sql.VarChar,bodyRequest.userPassword);
                        ps.execute('sp_insertUpUsers',function(err,result){
                            if(err)console.log("Errr:"+err);
                            else
                            res.send({"rs":result.recordset,"success":"true"});
                            /*ps.execute(bodyRequest, (err, result) => 
                                {
                                    if(err){
                                       console.log(err);     
                                    }else{
                                        console.log(bodyRequest); 
                                        console.log(result.recordset); // Returns number of affected rows in case of INSERT, UPDATE or DELETE statement.
                                        ps.unprepare(err => {
                                            console.log(err);
                                        });
                                    }
                                    
                                
                        
                                 });
                                 */
                            });
        });
                        
                            
        
    
    
    
}) 
app.post('/api/login', (request, res) => {
    //console.log(res);
    //console.log(req);
        //console.log(request.body.mail);
        executeSql(res,"select * from users where email ='"+request.body.email+"'");
    
    
    
})   
const PORT = process.env.PORT ||5000;
 
// Server Setup
/*
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});
*/
app.listen(PORT,console.log(`Server started on port ${PORT}`));