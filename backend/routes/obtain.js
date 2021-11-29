var express = require('express');
var router = express.Router();
const mysql = require('../mysql/mysql')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({ nombre: "Nicolas", apellido: "Oliva" });
});

module.exports = router;

router.post('/dataMotor', (req, res) => {
  const val = (data) => {
    const arr = Object.entries(data);
    const arr2 = arr.filter(elemento => {
      return elemento[1].length > 0
    })
    return arr2
  }

  const myData = val(req.body)

  var myString = '';
  for(let i = 0; i < myData.length; i++) {
    if (i === 0){
      myString += `${myData[i][0]} = '${myData[i][1]}'`
    }
    else {
      myString += ` AND ${myData[i][0]} = '${myData[i][1]}'`
    }
  }

  mysql.query(`SELECT * FROM motores WHERE ${myString} `, (error, data) => {
    console.log(data)
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
  const { contactData, selection, pregunta } = data;
  console.log(contactData)
  console.log(selection)
  console.log(pregunta)
  res.json({ numeroSeg: "este es el ticket de cotizacion" })
})


router.get('/obtainDataCotizacion/', async (req, res) => {

  const ID = req.query.ID

  const query = `SELECT por, DATE_FORMAT(fecha_ingreso,'%d/%m/%Y %H:%i:%s') as fecha, pregunta FROM indicaciones WHERE id_cotizacion = ? ORDER BY fecha`

  try {

    const dataCotizacion = await mysql.query('SELECT * FROM infoCotizacion WHERE id_cotizacion = ?', ID);
    const dataDetail = await mysql.query("select * from obtainDetail where id_cotizacion = ?", ID);
    const dataIndicacion = await mysql.query(query, ID);

    if (dataCotizacion.length === 0 || dataDetail.length == 0) {
      throw new Error();
    }
    else{
      res.json([...dataCotizacion, dataDetail, dataIndicacion])
    }

  }

  catch (error) {

    res.status(404).json({
      title: "Cotización no encontrada",
      error: `No se encuentra la cotización correspondiente a la ID ${ID}`
    });
  }
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