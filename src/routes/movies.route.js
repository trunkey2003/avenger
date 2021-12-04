const express = require('express');
const router = express.Router();
const moviesController = require('../app/controllers/movies.controller.js');

router.get('/:slug', moviesController.show);
// router.get('/', moviesController.show);

module.exports = router;

