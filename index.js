const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//cookie-parser - what is this and why we need this?

require("./config/database").connect();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json());
const resumeApp = require('./routes/route');

app.use("/api/v1",resumeApp);



//activate
app.listen(PORT, () => {
    console.log(`APP is listening at ${PORT}`);
})