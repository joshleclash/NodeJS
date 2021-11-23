import {getConnection} from '../connection/getConnection';


export  const  getProductos = async (req,res)=>
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
export  const  createProductos = async (req,res)=>
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
export  const deleteProductos = async (req,res)=>
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
export  const  modificarProductos = async (req,res)=>
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

