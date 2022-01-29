const boom = require('@hapi/boom');


//declaramos una fuccion validadora que retornara nuestro middleware, esto es un cloussure.

function validatorHandler(schema, property){

  return (req,res,next) => {

    const data = req[property];
    const { error } = schema.validate(data, {abortEarly: false});

    if( error ){
      next(boom.badRequest(error));
    }else{
      next();
    }

  }
}

module.exports = validatorHandler;


/* property es la propiedad que recibimos en el reques, ej : req.body   o req.params */

/* schema.validate(data) valida que la informacion recibida sea acorde a la reglas declaradas
en el schema, de no serlo devulve un objeto que posee una propiedad error, lo obtenemos mediante
destructuracion */

/* luego evaluamos si el error esta presente, si es asi eviamos un error mediante boom, lo hacemos mediante
  el metodo next, para que lo reciba directamente el siguiente middleware que sera el de errores con boom */

/* si el error no esta presente , entonces mediante next() permitimos que continue la ejecucion del servicio. */
