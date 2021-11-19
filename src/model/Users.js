import {getConnection} from '../connection/getConnection';


export  const  getUsers = async (req,res)=>
{
    try{
        const pool = await getConnection();
        const rs = pool.request().query("select * from users")
        res.send({"server status":'Ready',"rs":(await rs).recordset})
        res.end();

    }catch(err){
            res.status(500);
            res.send(err);
    }
    
        
} 
export  const  createNewUser = async (req,res)=>
{
    try{
        const pool = await getConnection();
        const rs = pool.request().query("select * from users")
        res.send({"server status":'Ready',"rs":(await rs).recordset})
        res.end();

    }catch(err){
            res.status(500);
            res.send(err);
    }
    
        
} 
export  const loginUser = async (req,res)=>
{
    try{
        const pool = await getConnection();
        const rs = pool.request().query("select * from users")
        res.send({"server status":'Ready',"rs":(await rs).recordset})
        res.end();

    }catch(err){
            res.status(500);
            res.send(err);
    }
    
        
}
export  const  deleteUser = async (req,res)=>
{
    try{
        const pool = await getConnection();
        const rs = pool.request().query("select * from users")
        res.send({"server status":'Ready',"rs":(await rs).recordset})
        res.end();

    }catch(err){
            res.status(500);
            res.send(err);
    }
    
        
} 

