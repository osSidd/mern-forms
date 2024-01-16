const express = require('express')
const router = express.Router()

const { getAllForms, getAForm, createForm} = require('../controllers/forms')

//get all forms
router.get('/', getAllForms)

//get a form
router.get('/:id', getAForm)

//create a form
router.post('/', createForm)

module.exports = router