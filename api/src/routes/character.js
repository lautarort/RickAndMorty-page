const { Router } = require('express');
const router = Router();
const { addCharacter, getCharacters, getCharacterById } = require('../controllers/characterController')

router.post("/add", addCharacter)
router.get("/", getCharacters)
router.get("/:id", getCharacterById)

//router.put("/updateCharacters",updateCharacters)

module.exports = router;