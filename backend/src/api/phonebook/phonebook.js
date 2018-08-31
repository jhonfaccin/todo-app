const restful = require('node-restful')
const mongoose = restful.mongoose

const phonebookSchema = new mongoose.Schema({
    name: {type: String, require: true},
    createdAt: {type: Date, default: Date.now}
})


module.exports = restful.model('Phonebook',phonebookSchema)