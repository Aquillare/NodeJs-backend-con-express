const express = require('express');

//creamos una variable router que contenga el metodo Router de expressç
const router = express.Router();



//veamos como recoger parametros query
//el parametro es opcional por lo que no vendra definido directamente en la ruta.ç

router.get('/users', (req, res) => {

  //los paramaetros query los recibimos mediante la propiedad .query de request
  const { limit , offset } = req.query;

  //establecemos un condicional para evaluar si estan presentes los valores limit y offset
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  }


});

module.exports = router;
