const express = require('express');
const router = express.Router();
const weaponsController = require('../app/controllers/weapons.controller');

router.get('/', weaponsController.index);

module.exports = router;

