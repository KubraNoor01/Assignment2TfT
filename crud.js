const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());

let items = [
    { id: 1, name: "Inheritance of loss", author:"Kiran Desai" },
    { id: 2, name: "BadAss habbits", author: "xyz"}
];

// create 
app.post('/items', (req, res) => {
    const newItem = req.body;
    newItem.id = items.length + 1; 
    items.push(newItem);
    res.status(201).json(newItem); 
});

// read : it will return all the item
app.get('/items', (req, res) => {
    res.json(items); 
});
//2:it will return a single item by id
app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
    res.json(item); 
});
//3: search by name 
app.get('/items/search', (req, res) => {
    const { name } = req.query;
    const searchedItems = items.filter(i => i.name.toLowerCase().includes(name.toLowerCase()));
    if (searchedItems.length === 0) return res.status(404).send('not found this item(book)');
    res.json(searchedItems);
}); 
// update: doing stuck somewhere , i am not getting 
// who i will i update after finding the item suppose 
// i find the book with the help of id but
// (sir , i will complete it soon IA)

//delete
app.delete('/items/delete', (req, res) => {
    const itemName = req.query.name; 
    const item = items.findIndex(i => i.name === itemName);
    if (item === -1) return res.status(404).send('Item not found');
    const deletedItem = items.splice(item, 1);
    res.json(deletedItem[0]); 
});




app.listen(PORT, () => {
    console.log("server is listening the port");
});
