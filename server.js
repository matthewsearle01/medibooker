const express = require('express');
const routes = require('./Config/routes');
const cors = require('cors');
const bodyParser = require('body-parser');

require("dotenv").config()

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Add all routes to app
routes(app);

// PORT
const port = process.env.PORT || 3001;

const path = require("path")

app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => console.log(`Server listening to port ${port}`));
