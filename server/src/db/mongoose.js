const mongoose = require('mongoose');

const connectToDb = () => {
    mongoose.set('strictQuery', false);
    mongoose
        .connect(process.env.ATLAS_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        .then(() => {
            console.log('Connected to MongoDb');
        });
    return mongoose;
};

module.exports = connectToDb;