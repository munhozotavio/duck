const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

const loginService = require('./services/login');
const carsService = require('./services/vehicles');

app.post("/login", async (req, res, next) => {
    try {
        res.json(await loginService.createUser(req.body));
    } catch (err) {
        next(err);
    }
});

app.get('/login', async (req, res, next) => {
    try {
        res.json(await loginService.executeLogin(req.body))
    } catch (err) {
        next (err);
    }
});

app.post("/cars", async (req, res, next) => {
    try {
        res.json(await carsService.createVehicle(req.body));
    } catch (err) {
        next(err);
    }
});

app.get("/cars", async (req, res, next) => {
    try {
        res.json(await carsService.getVehicles());
    } catch (e) {
        next(e);
    }
});

app.use("/", (req, res, next) => {
    res.send("Teste");
});

app.listen(8080, () => console.log("API IS RUNNING"));
