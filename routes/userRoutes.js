const express = require('express');
const router = express.Router();

// controller imports
const {usersController} = require('../controllers/userControllers')


router.get('/',usersController)




module.exports = router;