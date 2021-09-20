const { Router } = require('express');
const router = Router();
const { addCharacter } = require('../controllers/characterController')

router.post("/add", addCharacter)

module.exports = router;