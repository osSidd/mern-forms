const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClozeSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    options: {
        type: [{
            name: {
                type: String,
                required: true,
            },
            underlined: {
                type: Boolean,
                required: true,
            },
        }],
        validator: {
            validate: v => v.length
        },
    },
})
 
module.exports = ClozeSchema