const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');


//Set up middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'client/dist')));


//Set up routes
app.get('/', (req, res) => {
    res.send("Hello world");
});

//Make app listen
const port = 8080;
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});