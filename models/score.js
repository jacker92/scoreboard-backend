const mongoose = require('mongoose')

const scoreSchema = mongoose.Schema({
    score: {
        type: Number,
        default: 0
    },
    username: {
        type: String,
        required: true
    }
})

scoreSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Score', scoreSchema)