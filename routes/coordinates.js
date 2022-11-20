const express = require("express");
const router = express.Router();

const coordService = require('./../services/coordinates');

router.get("/", async (req, res, next) => {
    try {
        res.json(await coordService.getVehicles(req.body))
    } catch (e) {
        next (e);
    }
});

module.exports = router;
