     const express = require('express');
     const bodyParser = require('body-parser');

     const app = express();
     const port = 3000;

     // Gunakan body-parser untuk mengambil data dari body permintaan
     app.use(bodyParser.json());

     // Data contoh untuk simulasi penyimpanan data
     let data = [
     { id: 1, name: 'Item 1' },
     { id: 2, name: 'Item 2' },
     ];

     // Endpoint untuk membaca data
     app.get('/items', (req, res) => {
     res.json(data);
     });

     // Endpoint untuk membuat data
     app.post('/items', (req, res) => {
     const newItem = req.body;
     data.push(newItem);
     res.json(newItem);
     });

     // Endpoint untuk memperbarui data
     app.put('/items/:id', (req, res) => {
     const itemId = parseInt(req.params.id);
     const updatedItem = req.body;

     data = data.map(item => (item.id === itemId ? updatedItem : item));

     res.json(updatedItem);
     });

     // Endpoint untuk menghapus data
     app.delete('/items/:id', (req, res) => {
     const itemId = parseInt(req.params.id);

     data = data.filter(item => item.id !== itemId);

     res.send(`Item dengan ID ${itemId} telah dihapus`);
     });

     // Jalankan server pada port yang telah ditentukan
     app.listen(port, () => {
     console.log(`Server berjalan di http://localhost:${port}`);
     });
