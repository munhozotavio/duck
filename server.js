const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

const location = require("./routes/coordinates");
const cars = require("./routes/cars");
const login = require("./routes/login");

app.use("/location", location);

app.use("/cars", cars);

app.use("/login", login);

app.use("/", (req, res, next) => {
    res.send("There is nothing to do here");
});

app.listen(8080, () => console.log("API IS RUNNING"));
