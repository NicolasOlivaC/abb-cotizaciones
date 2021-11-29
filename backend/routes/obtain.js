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
  for (let i = 0; i < myData.length; i++) {
    if (i === 0) {
      myString += `${myData[i][0]} = '${myData[i][1]}'`
    }
    else {
      myString += ` AND ${myData[i][0]} = '${myData[i][1]}'`
    }
  }

  mysql.query(`SELECT * FROM motores WHERE ${myString} `, (error, data) => {
    if (error) {
      console.log(error)
      res.json(error)
    }
    else {
      res.json(data)
    }
  })
})


router.post('/dataCotizacion', async (req, res) => {
  const data = req.body;
  const { contactData, selection, pregunta } = data;

  try {
    await mysql.beginTransaction()
    const rut = await mysql.query('SELECT * FROM cotizante WHERE id_cotizante = ?', [contactData.rut])
    if (rut.length === 0) {
      mysql.query('INSERT INTO cotizante set id_cotizante = ?, nombre = ?, apellido = ?, empresa = ?, correo = ?, telefono = ? ', [contactData.rut, contactData.nombre, contactData.apellido, contactData.empresa, contactData.correo, contactData.telefono]);
    }
    const dataCotizacion = await mysql.query('INSERT INTO cotizacion set estado = ?, Rut_cotizante = ?', ["Nuevo", contactData.rut])
    for (let i = 0; i < selection.length; i++) {
      await mysql.query('INSERT INTO detalle set id_descuento = ?,id_cotizacion = ?, catalog_number = ?', [1, dataCotizacion.insertId, selection[i]])
    }
    await mysql.query('INSERT INTO indicaciones set pregunta = ?, id_cotizacion = ?, por = ?', [pregunta, dataCotizacion.insertId, contactData.nombre])
    await mysql.commit()
    res.json({ numeroSeg: "este es el ticket de cotizacion" })
  }

  catch (error) {
    await mysql.rollback()
    console.log(error)
    res.status(404).json({
      title: 'Error al ingresar la cotización',
      error: 'No se pudo ingresar la cotización, porfavor intentalo nuevamente'
    });
  }
})

router.post('/changeStatusCotizacion', (req, res) => {
  const { choose, ID } = req.body;
  const options = ["Aceptado", "Rechazado"]
  if (choose === 0 || choose === 1) {
    mysql.query('UPDATE COTIZACION SET estado = ? WHERE id_cotizacion = ?', [options[choose], ID], (error, data) => {
      if (error) {
        res.status(404).json({
          title: "Estado no cambiado",
          error: `Hubo un error al intentar cambiar el estado de la cotización ${ID}`
        });
      }
      else {
        res.json({message: "Estado cambiado correctamente", nuevoEstado: options[choose]})
      }
    })
  }

  else {
    res.status(404).json({
      title: "Mal input",
      error: `Uno o varios de los input ingresados son incorrectos`
    });
  }

})

router.post('/addFuncionality', async (req, res) =>{
  const {funcionality, ID, por} = req.body
  try{
    const inserted = await mysql.query('INSERT INTO indicaciones SET pregunta = ?, id_cotizacion = ?, por = ? ', [funcionality, ID, por])
    const dataSelect = await mysql.query(`SELECT por, DATE_FORMAT(fecha_ingreso,'%d/%m/%Y %H:%i:%s') as fecha_ingreso, pregunta FROM indicaciones WHERE id_indicaciones = ?`, [inserted.insertId])
    res.json({dataSelect})
  }

  catch (error) {
    res.status(404).json({
      title: "Error",
      error: `Ocurrió un problema al ingresar la pregunta de funcionalidad`
    });
  }
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
    else {
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