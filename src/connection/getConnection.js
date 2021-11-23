import {configCredentials} from  '../../src/configCredentials';
import sql from 'mssql';

const dbSettings = {
    user:     configCredentials.db.username,
    password: configCredentials.db.password,
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
  export async function getConnection()
  {
    try{
      const pool = await sql.connect(dbSettings);
      return pool;
    }catch(err){
        console.log(err);
    }
      

  } 
  //getConnection();