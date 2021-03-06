const path = require('path');
const fs = require('fs');

const loadIn = (router) => {
    const normalizedPath = path.join(__dirname, './routes');

    fs.readdirSync(normalizedPath).forEach((file) => {
        if (file !== 'index.js') {
            require(`./routes/${file}`).loadIn(router);
        }
    });
}

module.exports = {
    loadIn
};