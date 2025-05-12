const express = require('express');
const userRoutes = require("./routes/user.route.js")
const errorHandler = require("./middlewares/errorHandler.js");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use(errorHandler);

module.exports = app;