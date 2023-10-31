import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = 3000;

//configurar pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home', { 
        titulo: 'Ejemplo Pug', 
        usuario_logeado: true,
        usuario: 'Alan',
        lista_hobbys: ["Cocinar", "Programar", "Dibujar"]
    })
})

app.listen(port, () => {
	console.log(`Servidor corriendo en el puerto: ${port}`);
});