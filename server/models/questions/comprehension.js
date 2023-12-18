const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ComprehensionSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    ques: {
        type: [{
            text: {
                type: String,
                required: true,
            },
            a: {
                type: String,
                required: true,
            },
            b: {
                type: String,
                required: true,
            },
            c: {
                type: String,
                required: true,
            },
            d: {
                type: String,
                required: true,
            },
        }],
        validator: {
            validate: v => v.length
        },
    },
})
 
module.exports = ComprehensionSchema