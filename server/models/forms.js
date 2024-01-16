const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorizeSchema = require('./questions/categorize')
const ClozeSchema = require('./questions/cloze')
const ComprehensionSchema = require('./questions/comprehension')

const FormSchema = new Schema({
    heading: {
        type: String,
        required: true,
    },
    categorize: {
        type: [CategorizeSchema],
        validator: {
            validate: v => v.length,
        },
    },
    cloze: {
        type: [ClozeSchema],
        validator: {
            validate: v => v.length,
        },
    },
    comprehension: {
        type: [ComprehensionSchema],
        validator: {
            validate: v => v.length,
        },
    }
})


module.exports = mongoose.model('Form', FormSchema)