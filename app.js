const express = require('express');
const path = require('path');

const app = express();

const puerto = 3000;




app.listen(puerto, () => {
    console.log(`Servidor Corriendo Exitosamente en el puerto: ${puerto}`);
});

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/views/register.html', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/views/login.html', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.use(express.static(path.resolve(__dirname, './public')));



