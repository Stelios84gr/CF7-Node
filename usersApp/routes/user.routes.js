const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/', userController.findAll);
router.get('/:username', userController.findOne);    // κοιτάει για path parameter username
router.post('/', userController.create);

module.exports = router;