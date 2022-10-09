const fs = require('fs');
const path = require('path');

const dataFolderPath = path.join(__dirname, '..', 'data');
const dataFilePath = path.join(dataFolderPath, 'repos.json');

const getFileData = () => {
    const fileResponse = fs.readFileSync(dataFilePath);
    const fileData = JSON.parse(fileResponse);

    return fileData;
};

module.exports = getFileData;