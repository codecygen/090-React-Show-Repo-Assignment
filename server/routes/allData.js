const express = require('express');
const router = express.Router();
// =======================================================================
// const getAPIData = require('../util/getAPIData');
// =======================================================================
const getFileData = require('../util/getFileData');

// =======================================================================
// const apiUrl = 'https://api.github.com/users/silverorange/repos';
const fs = require('fs');
const path = require('path');

const dataFolderPath = path.join(__dirname, '..', 'data');
const dataFilePath = path.join(dataFolderPath, 'internet.json');
// =======================================================================

router.get('/repos', (req, res, next) => {

    // =======================================================================
    // const apiData = await getAPIData(apiUrl);
    const fileResponse = fs.readFileSync(dataFilePath);
    const apiData = JSON.parse(fileResponse);
    // =======================================================================

    const fileData = getFileData();

    const aggregatedData = [
        ...apiData,
        ...fileData
    ];

    const notForkedData = aggregatedData.filter(eachData => eachData.fork === false);

    res.json(notForkedData);
});

module.exports = router;