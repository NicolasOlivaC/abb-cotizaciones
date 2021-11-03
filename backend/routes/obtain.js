var express = require('express');
var router = express.Router();
const mysql = require('../mysql/mysql')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({nombre: "Nicolas", apellido: "Oliva"});
});

module.exports = router;

router.post('/dataMotor', (req, res) =>{
  const data = req.body;
  const {rpm, hp, peso, eficiencia, voltaje} = data
  console.log(rpm, hp, peso, eficiencia, voltaje)
  mysql.query("SELECT * FROM motores", (error, data)=>{
    if(error){
      console.log(error)
      res.json(error)
    }
    else{
      res.json(data)
    }
  })
})

router.post('/dataCotizacion', (req, res) => {
  const data = req.body;
  const {contactData, motorData} = data;
  console.log(contactData)
  console.log(motorData)
  res.json({message: "datos recibidos"})
})