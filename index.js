// Load environment variables from .env file
require('dotenv').config();

const express = require("express");
const app = express();


const PORT = process.env.PORT || 4000;
const dbConnect = require("./config/dbConnect");
const authRouter = require("./routes/authRouter");
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middlewares/errorHandler');


// Call dbConnect to establish MongoDB connection
dbConnect();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.use("/api/user", authRouter);
app.use(notFound)
app.use(errorHandler)



app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});