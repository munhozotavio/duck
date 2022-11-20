const express = require("express");
const router = express.Router();

const carsService = require('./../services/vehicles');
const loginService = require('./../services/login');

router.post("/", async (req, res, next) => {
    try {
        if (loginService.checkToken(req.body)) res.json(await carsService.createVehicle(req.body));
        else res.send([]);
    } catch (err) {
        next(err);
    }
});

router.get("/", async (req, res, next) => {
    try {
        if (loginService.checkToken(req.body)) res.json(await carsService.getVehicles());
        else res.send([]);
    } catch (e) {
        next(e);
    }
});

module.exports = router;