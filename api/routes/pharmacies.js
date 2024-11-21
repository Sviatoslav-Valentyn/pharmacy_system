const express = require('express');
const Pharmacy = require('../models/Pharmacy');
const Good = require('../models/Good');

const router = express.Router();

router.get('/', async (req, res) => {
    const pharmacies = await Pharmacy.findAll({ include: Good });
    res.json(pharmacies);
});

router.post('/', async (req, res) => {
    const { name, street } = req.body;
    const pharmacy = await Pharmacy.create({ name, street });
    res.json(pharmacy);
});

module.exports = router;
