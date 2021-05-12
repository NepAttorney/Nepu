const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true,
}

const suggestionsSchema = mongoose.Schema({
    serverID: reqString,
    channelID: reqString
})

module.exports = mongoose.model('suggestions-channels', suggestionsSchema);