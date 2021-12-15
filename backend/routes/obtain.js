var express = require('express');
var router = express.Router();
const mysql = require('../mysql/mysql')
const short = require('short-uuid');

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

  try {
    const data = req.body;
    const { contactData, selection, pregunta } = data;
    const myCodeTracking = short.generate();
    await mysql.beginTransaction()
    const rut = await mysql.query('SELECT * FROM cotizante WHERE id_cotizante = ?', [contactData.rut])
    if (rut.length === 0) {
      await mysql.query('INSERT INTO cotizante set id_cotizante = ?, nombre = ?, apellido = ?, empresa = ?, correo = ?, telefono = ? ', [contactData.rut, contactData.nombre, contactData.apellido, contactData.empresa, contactData.email, contactData.telefono]);
    }
    const dataCotizacion = await mysql.query('INSERT INTO cotizacion set id_cotizacion = ?, estado = ?, Rut_cotizante = ?', [myCodeTracking, "Nuevo", contactData.rut])
    for (let i = 0; i < selection.length; i++) {
      await mysql.query('INSERT INTO detalle set id_descuento = ?,id_cotizacion = ?, catalog_number = ?', [1, myCodeTracking, selection[i]])
    }
    await mysql.query('INSERT INTO indicaciones set pregunta = ?, id_cotizacion = ?, por = ?', [pregunta, myCodeTracking, contactData.nombre])
    await mysql.commit()
    res.json({ numeroSeg: `este es el ticket de cotizacion: ${myCodeTracking}` })
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
        res.json({ message: "Estado cambiado correctamente", nuevoEstado: options[choose] })
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

router.post('/addFuncionality', async (req, res) => {
  try {
    const { funcionality, ID, por } = req.body
    console.log(funcionality, ID, por)
    const dateTime = new Date();
    await mysql.beginTransaction()
    const inserted = await mysql.query('INSERT INTO indicaciones SET pregunta = ?, fecha_ingreso = ?, id_cotizacion = ?, por = ? ', [funcionality, dateTime, ID, por]);
    const dataUpdated = await mysql.query('UPDATE cotizacion SET fecha_update = ? WHERE id_cotizacion = ?', [dateTime, ID]);
    const dataSelect = await mysql.query(`SELECT por, DATE_FORMAT(fecha_ingreso,'%d/%m/%Y %H:%i:%s') as fecha_ingreso, pregunta FROM indicaciones WHERE id_indicaciones = ?`, [inserted.insertId]);
    await mysql.commit()
    res.json({ dataSelect })
  }

  catch (error) {
    console.log(error)
    await mysql.rollback()
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
    const dataDesct = await mysql.query('SELECT * FROM descuentos');
    

    if (dataCotizacion.length === 0 || dataDetail.length == 0) {
      throw new Error();
    }
    else {
      res.json([...dataCotizacion, dataDetail, dataIndicacion, dataDesct])
    }
  }

  catch (error) {
    res.status(404).json({
      title: "Cotización no encontrada",
      error: `No se encuentra la cotización correspondiente a la ID ${ID}`
    });
  }
})

router.get('/obtainDataCotizacion2/', async (req, res) => {

  const ID = req.query.ID

  const query = `SELECT por, DATE_FORMAT(fecha_ingreso,'%d/%m/%Y %H:%i:%s') as fecha, pregunta FROM indicaciones WHERE id_cotizacion = ? ORDER BY fecha`

  try {
    const dataCotizacion = await mysql.query('SELECT * FROM infoCotizacion WHERE id_cotizacion = ?', ID);
    const dataDetail = await mysql.query("select * from obtainDetail where id_cotizacion = ?", ID);
    const dataIndicacion = await mysql.query(query, ID);
    const detailCotizacion = await mysql.query('select precio_final, list_price, detalle.catalog_number from detalle, motores where id_cotizacion = ?  AND motores.catalog_number = detalle.catalog_number', ID)
    if (dataCotizacion.length === 0 || dataDetail.length == 0) {
      throw new Error();
    }
    else {
      res.json([...dataCotizacion, dataDetail, dataIndicacion, detailCotizacion])
    }
  }

  catch (error) {
    console.log(error)
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
                 WHERE estado = '${option}' AND Rut_cotizante = id_cotizante
                 ORDER BY fecha_ingreso ASC`

  mysql.query(query, (error, data) => {
    if (error) {
      console.log(error)
    }
    else {
      res.json(data)
    }
  })
})

router.post('/applyDesct', (req, res) => {
  const dateTime = new Date();
  const { price, idDesct, detailID, id_Cotizacion } = req.body

  mysql.query('UPDATE detalle SET fecha_update = ? , precio_final = ?, id_descuento = ? WHERE id_detalle = ? ', [dateTime, price, idDesct, detailID], (error, data) => {
    if (error) {
      res.json({ msg: "error" })
    }
    else {
      mysql.query('UPDATE cotizacion SET fecha_update = ? WHERE id_cotizacion = ?', [dateTime, id_Cotizacion], (error, data) =>{
        if(error){
          res.json({ msg: "error" })
        }
        else{
          res.json({ msg: "Precio actualizado" })
        }
      })
    }
  })
})