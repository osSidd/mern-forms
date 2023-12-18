const express = require('express')
const router = express.Router()

const {createForm} = require('../controllers/forms')

//create a form
router.post('/', createForm)

module.exports = router