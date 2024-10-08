/**
 * @Crossorigin
 */
'use strict'
const express = require("express");
let dotenv = require('dotenv')
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require('fs')

const port = 8080;
const app = express();


app.use(cors());
app.set('trust proxy', true)

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));

// const routes = require("./routes");
// app.use('/api', routes);

const result = dotenv.config()
if (result.error) {
    throw result.error
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})