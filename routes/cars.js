const express = require("express");
const router = express.Router();

const carsService = require('./../services/vehicles');

router.post("/", async (req, res, next) => {
    try {
        res.json(await carsService.createVehicle(req.body));
    } catch (err) {
        next(err);
    }
});

router.get("/", async (req, res, next) => {
    try {
        res.json(await carsService.getVehicles());
    } catch (e) {
        next(e);
    }
});

module.exports = router;