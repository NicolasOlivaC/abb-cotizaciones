var express = require('express');
var router = express.Router();
const mysql = require('../mysql/mysql')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({nombre: "Nicolas", apellido: "Oliva"});
});

module.exports = router;

router.post('/dataCotizacion', (req, res) => {
  const data = req.body;
  const {contactData, motorData} = data;
  console.log(contactData)
  console.log(motorData)
  res.json({message: "datos recibidos"})
})