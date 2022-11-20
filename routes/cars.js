const express = require("express");
const router = express.Router();

const carsService = require('./../services/vehicles');
const loginService = require('./../services/login');

router.post("/", async (req, res, next) => {
    try {
        if (req.body.access_token && await loginService.checkToken(req.body)) res.json(await carsService.createVehicle(req.body));
        else res.json("Erro ao cadastrar o veículo!");
    } catch (err) {
        
        res.json("Erro ao cadastrar o veículo!");
    }
});

router.get("/", async (req, res, next) => {
    try {
        if (req.query.access_token && await loginService.checkToken(req.query)) res.json(await carsService.getVehicles());
        else res.send([]);
    } catch (e) {
        next(e);
    }
});

module.exports = router;