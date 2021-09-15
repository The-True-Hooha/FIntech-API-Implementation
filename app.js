
const express = require("express");
const app = express();
require('dotenv').config()

app.use(express.json());

//want to push to github

const port = process.env.PORT || 2100;
app.listen(port, () => console.log(`listening on port ${port}...`));