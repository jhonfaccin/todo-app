const Phonebook = require ('./phonebook')

Phonebook.methods(['get','post','put','delete'])
Phonebook.updateOptions({new:true,runValidators:true})

module.exports = Phonebook