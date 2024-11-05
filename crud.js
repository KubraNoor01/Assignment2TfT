const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());

let items = [
    { id: 1, name: "Inheritance of loss", author:"Kiran Desai" },
    { id: 2, name: "BadAss habbits", description: "xyz"}
];

app.listen(PORT, () => {
    console.log("server is listening the port");
});
