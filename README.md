# Assignment2TfT
This assignment is to build a simple Express.js application that performs  CRUD (Create, Read, Update, Delete) operations using body and query parameters.
Express.js CRUD Assignment
Objective: The goal of this assignment is to build a simple Express.js application that performs
CRUD (Create, Read, Update, Delete) operations using body and query parameters. The
operations will interact with an array of objects representing data (e.g., a list of books) to help
students practice Express.js fundamentals.
Instructions:
1. Setup:
o Create a new Node.js project.
o Install the necessary dependency: express.
2. Create an Express Server:
o Set up an Express server with the necessary middleware (express.json()) to
handle JSON data.
3. CRUD Operations:
o Create (POST):
 Implement a route POST /items that adds a new item to the array.
 The new item should be sent in the request body as JSON.
o Read (GET):
 Implement a route GET /items to return all items from the array.
 Implement a route GET /items/:id to return a single item by ID.
 Implement a route GET /items/search that allows searching items using
query parameters (e.g., /items/search?name=example).
o Update (PUT):
 Implement a route PUT /items/:id to update an existing item in the
array.
 The updated data should be sent in the request body.
o Delete (DELETE):
 Implement a route DELETE /items/:id to remove an item from the array.
4. Data Structure:
o Use an array of objects to store the items. Example structure:
let items = [
 { id: 1, name: "Book 1", description: "This is the first book."
},
 { id: 2, name: "Book 2", description: "This is the second
book." }
];
Example Routes:
 POST /items
 GET /items
 GET /items/:id
 GET /items/search?name=example
 PUT /items/:id
 DELETE /items/:id
Submission:
 Submit the complete project folder, including the initial array data in your code On
Github.
