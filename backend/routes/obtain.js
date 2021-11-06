var express = require('express');
var router = express.Router();
const mysql = require('../mysql/mysql')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({ nombre: "Nicolas", apellido: "Oliva" });
});

module.exports = router;

router.post('/dataMotor', (req, res) => {
  const data = req.body;
  const { rpm, hp, peso, eficiencia, voltaje } = data
  console.log(rpm, hp, peso, eficiencia, voltaje)
  mysql.query("SELECT * FROM motores", (error, data) => {
    if (error) {
      console.log(error)
      res.json(error)
    }
    else {
      res.json(data)
    }
  })
})

router.post('/dataCotizacion', (req, res) => {
  const data = req.body;
  const { contactData, motorData } = data;
  console.log(contactData)
  console.log(motorData)
  res.json({ message: "datos recibidos" })
})


router.get('/obtainDataCotizacion/:ID', (req, res) => {
  const query = `SELECT nombre, apellido, empresa, telefono, correo, 
                 DATE_FORMAT(fecha_ingreso,'%d/%m/%Y %H:%i:%s') as fecha_ingreso, DATE_FORMAT(fecha_update,'%d/%m/%Y %H:%i:%s') as fecha_update, estado, 
                 precio_final, catalog_number,
                 Rut_cotizante FROM cotizacion, cotizante, detalle
                 WHERE cotizacion.id_cotizacion = ${req.params.ID} 
                 AND Rut_cotizante = cotizante.id_cotizante
                 AND detalle.id_cotizacion = cotizacion.id_cotizacion`;

  const query2 = "SELECT * FROM motores WHERE catalog_number = ?"

  mysql.query(query, (error, data1) => {
    if (error || data1[0] === undefined) {
      res.json([{ message: "error1" }])
    }
    else {
      mysql.query(query2, data1[0].catalog_number, (error, data2) => {
        if (error || data2[0] === undefined) {
          res.json([{ message: "error2" }])
        }
        else {
          mysql.query(`SELECT por, DATE_FORMAT(fecha_ingreso,'%d/%m/%Y %H:%i:%s') as fecha, pregunta FROM indicaciones WHERE id_cotizacion = ${req.params.ID} ORDER BY fecha`, (error, data3) => {
            if (data3[0] === undefined) {
              res.json([...data1, data2[0]])
            }
            else {
              res.json([...data1, data2[0], data3])
            }
          })
        }
      })
    }
  })
})


router.get('/prelCot', (req, res) => {
  const option = req.query.option

  const query = `SELECT id_cotizacion,  DATE_FORMAT(fecha_ingreso,'%d/%m/%Y %H:%i:%s') as fecha_ingreso,
                 DATE_FORMAT(fecha_update,'%d/%m/%Y %H:%i:%s') as fecha_update, nombre, apellido, estado
                 FROM cotizacion, cotizante
                 WHERE estado = '${option}' AND Rut_cotizante = id_cotizante`

  mysql.query(query, (error, data) => {
    if (error) {
      console.log(error)
    }
    else {
      res.json(data)
    }

  })
})