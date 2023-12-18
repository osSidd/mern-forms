const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorizeSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    categories: {
        type: [{
            name: {
                type: String,
                required: true,
            },
        }],
        validator: {
            validate: v => v.length
        },
    },
    items: {
        type: [{
            name: {
                type: String,
                required: true,
            },
            belongsTo:{
                type: String,
                required: true,
            }
        }],
        validator: {
            validate: v => v.length,
        },
    },
})
 
module.exports = CategorizeSchema