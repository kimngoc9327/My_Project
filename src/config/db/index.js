const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/to_do_list_project', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connect Successfully');

    } catch (error) {
        console.log('Connect Failure');
    }
}

module.exports = { connect };