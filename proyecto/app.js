const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const { error } = require('console');

const app = express();

// solicitudes de http
app.use(bodyParser.urlencoded({extended: false}));

// configuracion de el motor de plantillas
app.set('view engine','ejs');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user:'root',
    password:'123456',
    database: 'node_crud',
    port:3308
});

// verificar la conexion
db.connect(err=>{
    if(err){
        console.error('Error en servidor ',err);
    }else{
        console.log('Conexion con exito :)');
    }
});

const port = 3008;
app.listen(port,()=>{
    console.log(`Server http://localhost:${port}`);

});

// mostrar informacion en una lista ->index.ejs
app.get('/',(req,res)=>{
    // consulta
    const consulta = 'SELECT * FROM users';

    db.query(consulta,(err,results)=>{
        if(err){
            console.error('Error en recuperar datos',err);
            res.send('Error, no se recuperan datos');
        }else{
            res.render('index',{users: results});
        }
    });

});







