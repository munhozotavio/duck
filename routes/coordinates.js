const express = require("express");
const router = express.Router();
require('dotenv').config();

const coordService = require('./../services/coordinates');
const loginService = require('./../services/login');

router.get("/", async (req, res, next) => {
    try {
        if (loginService.checkToken(req.body)) res.json(await coordService.getVehicles(req.headers.credentials));
        else res.send(false);
    } catch (e) {
        next (e);
    }
});

router.get("/api", async (rec, res, next) => {
    if (loginService.checkToken(req.body)) res.send({apiKey: process.env.GOOGLE_API_KEY});
    else res.send(0);
});

module.exports = router;
