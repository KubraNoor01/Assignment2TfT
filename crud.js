const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());

let items = [
    { id: 1, name: "Inheritance of loss", author:"Kiran Desai" },
    { id: 2, name: "BadAss habbits", description: "xyz"}
];

// Create 
app.post('/items', (req, res) => {
    const newItem = req.body;
    newItem.id = items.length + 1; 
    items.push(newItem);
    res.status(201).json(newItem); 
});

// Read 
app.get('/items', (req, res) => {
    res.json(items); 
});


app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
    res.json(item); 
});






app.listen(PORT, () => {
    console.log("server is listening the port");
});
