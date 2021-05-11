require('dotenv').config();

const mongoose = require('mongoose');

module.exports = async () => {
    await mongoose.connect(process.env.MONGODB_SRV, {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    return mongoose
}