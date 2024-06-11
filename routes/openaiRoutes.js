const express= require('express');
const {generateImage} = require('../controllers/openaiController')
const router = express.Router();

// because we want to hit /openai/generateimage
router.post('/generateimage', generateImage) 
module.exports = router;