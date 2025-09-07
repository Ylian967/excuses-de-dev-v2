const express = require('express');
const excuseController = require('../controllers/excuseController');

const router = express.Router();

router.get('/random', excuseController.getRandomExcuse);
router.get('/:code', excuseController.getExcuseByCode);
router.post('/', excuseController.createExcuse);

module.exports= router