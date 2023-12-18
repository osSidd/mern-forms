const Form = require('../models/forms')

//create a new form
const createForm = async (req, res) => {
    try{
        const form = await Form.create(req.body)
        return res.status(200).json(form)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

module.exports = {createForm}