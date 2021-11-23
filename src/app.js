//console.log("Hola lindo te quiero");
const express = require('express');
const app = express();
//const sql = require("mssql");
const bodyParser = require("body-parser");
const { config } = require('process');
const cryp = require("crypto-js");
const userrouter = require('../src/routes/users_routes');
const productosRoute = require('../src/routes/productos_routes');

const PORT = process.env.PORT ||5000;
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

app.get('/ready',function(req,res){
    res.send({"server is ready":"OK"});
});
app.use("/api/user",userrouter);
app.use('/api/productos',productosRoute);
app.listen(PORT,console.log(`Server started on port ${PORT}`));

