const mongoose = require('mongoose');


async function connectToDB() {
    try {
        await mongoose.connect(process.env.ATLAS_DB_URL);
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database: ", error);
    }
}

module.exports = connectToDB;