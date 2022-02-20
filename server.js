// import Express framework 
const express = require("express");

// instantiate the Express app
const app = express();

// set our server port
const port = 3000; 

// app.use(cors()); 

// Make Express use its own built-in body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Start server
app.listen(port, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", port))
  console.log("Visit 'http://localhost:3000/' to start playing!");
});

// READ (HTTP method GET) at root endpoint /app/ 
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

// READ at game endpoint /scramble/
app.get("/scramble", (req, res) => {
    res.sendFile(__dirname + '/scramble.html');
  });

app.get("/unscramble", (req, res) => {
    res.sendFile(__dirname + '/unscramble.html');
  });

// Default response for any other request
app.use(function (req, res) {
    res.json({ "message": "Endpoint not found. (404)" });
    res.status(404);
  });
