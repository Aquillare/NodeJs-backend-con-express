//importamos express
const express = require('express');

//inicializamos una varibale que contenga a express
const app = express();

//incializamos una variable con el puerto donde queremos que corra nuestra app
const puerto = 3000;

//definimos un ruta mediante el metodo get de express, el metodo get recibe la ruta como primer
//argumento y como sgundo un callback con el que definimos la respuesta para
//nuestro cliente, este calbback recibe dos parametros request y response.

app.get('/', (req,res) => {

  res.send('Hello world, this is my first server in express');

  //send es un metodo de responde
});

//creamos otra ruta

app.get('/nueva-ruta', (req,res) => {
  res.send('This is a new Route whit express');
})

//creemos otra ruta mas, tambien podemos enviar mediante el rsponse un objeto json, esto sera
//lo que mas enviaremos ya que crearemos un Api para comunicar datos al frontend.

app.get('/products', (req,res) => {
  res.json({
    name: 'product 1',
    price: 1000,
  })
})



//ahora para que todo esto funcione le decimos a express en que puerto escuchar, podemos pasar
//un segundo argumento al metodo listen que sea un callback en este caso nos devulve un console.log
//para saber que se esta ejecutando, recordemos que esto es para produccion en desarrollo no deben haber console.log s

app.listen(puerto, () =>{
  console.log(`listening in port ${puerto}`);
});

//ahora para correr esta app podemos usar el script configurado en neustro package.json para desarrollo



