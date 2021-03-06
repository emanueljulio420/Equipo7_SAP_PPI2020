const { Router } = require('express');
const router = Router();
const mysqlConnection = require('../db/db');


router.get('/', (req, res)=>{
    mysqlConnection.query('SELECT * FROM profesor', (err, rows, fields)=>{
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});

router.post('/profesor', (req, res)=>{
    const { nombre, apellido, contraseña, colegio,correo } = req.body;
  
    let alumno = [nombre, apellido, contraseña, colegio,correo ];
  
    let nuevoAlumno = `INSERT INTO profesor( nombre, apellido, contraseña, colegio,correo  ) 
    VALUES( ?,?,?,?,?)`;
    
    mysqlConnection.query(nuevoAlumno, alumno, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        } else{
            res.json({message: `se ha registrado otro profesor`})
        }
    });
  
  });



module.exports = router;