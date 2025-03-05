import express from 'express';

const app = express();
const PORT = 3000;

// Ruta GET con parámetro de ruta
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    console.log(`ID del usuario recibido: ${userId}`);
    res.send(`Perfil del usuario con ID: ${userId}`);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
