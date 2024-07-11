var express = require('express');
const router = express.Router();
const ctrlMain = require('../controller/main');
/* GET homepage. */
router.get('/', ctrlMain.index);
module.exports = router;