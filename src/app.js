const express = require('express');
require("./push-notify");

const app = express();
app.use(express.static('public'));

module.exports = app;
