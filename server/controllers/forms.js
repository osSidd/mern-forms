const { default: mongoose } = require('mongoose')
const Form = require('../models/forms')

//get all forms
const getAllForms = async (req, res) => {
    try{    
        const forms = await Form.find()
        return res.status(200).json(forms)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//get a form
const getAForm = async (req, res) => {
    try{
        const id = req.params.id
        
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error: 'invalid id'})

        const form = await Form.findById(id)
        if(!form) return res.status(404).json({error: 'form not found'})

        return res.status(200).json(form)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//create a new form
const createForm = async (req, res) => {
    try{
        const form = await Form.create(req.body)
        return res.status(200).json(form)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

module.exports = {getAllForms, getAForm,  createForm}