const Joi = require('joi');


//es importante que seguido de Join indiquemos primero el tipo de dato, luego la o las validaciones.
const id = Joi.string().uuid();
const name = Joi.string().min(3).max(20);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();  //uri es de url.


//definimos un esquema para la creacion productos, que reunira los campos definidos anteriormente. en los esquemas
//indicaremos a traves del metodo requerid() de Joi, si son requeridos.
const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
});

//definimos un esquema para la actualizacion de productos
const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
});

//esquema para la solicitud de un producto
//a pesar de que este esquema posee una sola propiedad, es buena practica que sea un un objeto.
const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = {createProductSchema, updateProductSchema, getProductSchema};
