const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'repos.json');

const getFileData = () => {
    const fileResponse = fs.readFileSync(filePath);
    const fileData = JSON.parse(fileResponse);

    return fileData;
};

module.exports = getFileData;