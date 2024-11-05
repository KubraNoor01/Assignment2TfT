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



app.listen(PORT, () => {
    console.log("server is listening the port");
});
