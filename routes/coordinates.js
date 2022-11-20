const express = require("express");
const router = express.Router();
require('dotenv').config();

const coordService = require('./../services/coordinates');
const loginService = require('./../services/login');

router.get("/", async (req, res, next) => {
    try {
        if (req.query.access_token && await loginService.checkToken(req.query) && req.query.plate) res.json(await coordService.getVehicles(req.query));
        else res.send(false);
    } catch (e) {
        next (e);
    }
});

router.get("/api", async (req, res, next) => {
    if (req.query.access_token && await loginService.checkToken(req.query)) res.send({apiKey: process.env.GOOGLE_API_KEY});
    else res.send(0);
});

module.exports = router;
