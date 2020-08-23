const mongoose = require('mongoose');
const schemasConfig = require('./schemas');
const {
    MONGO: {
        SRV
    }
} = require('./../../helper/settings');

let models = null;
let mongo = null;

class Mongo {
    constructor() {
        mongo = mongo || mongoose.connect(SRV, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        this.database = mongo;
    }

    async models() {
        if (models) {
            return models;
        }

        const database = await this.database;
        schemasConfig.loadIn(database);
        models = database.models;

        return models;
    }

}

module.exports = Mongo;