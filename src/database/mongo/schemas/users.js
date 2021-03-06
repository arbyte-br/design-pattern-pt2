const loadIn = (database) => {
    const userSchema = new database.Schema({
        name: String
    }, {
        timestamps: true
    });

    database.model('User', userSchema);
};

module.exports = {
    loadIn
};