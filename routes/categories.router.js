const express = require('express');

//creamos una variable router que contenga el metodo Router de express
const router = express.Router();

//En este ejemplo queremos un endpoint de categorias que nos retorne de los productos de esa categoria,
//un producto en especifico.

router.get('/:categoryId/products/:productId', (req,res) => {

  const {categoryId, productId} = req.params;

  res.json({
    categoryId,
    productId
  });

});

module.exports = router;
