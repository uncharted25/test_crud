const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const crud_controller = require('../controllers/crud.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', crud_controller.test);
module.exports = router;

router.post('/create', crud_controller.crud_create);