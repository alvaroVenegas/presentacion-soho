const express = require('express')
const {getAllCharacters, postNewCharacter, getCharacter, deleteCharacter, putCharacter} = require('../controllers/character.controller')

const router = express.Router();

router.get('/', getAllCharacters);
router.get('/:id', getCharacter)
router.post('/', postNewCharacter);
router.delete('/:id', deleteCharacter)
router.put('/:id', putCharacter)


module.exports = router