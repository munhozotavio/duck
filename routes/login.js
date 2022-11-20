const express = require("express");
const router = express.Router();

const loginService = require('./../services/login');

router.post("/create", async (req, res, next) => {
    try {
        res.json(await loginService.createUser(req.body));
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        res.json(await loginService.executeLogin(req.body))
    } catch (err) {
        next (err);
    }
});

module.exports = router;