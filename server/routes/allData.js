const express = require('express');
const router = express.Router();

const getAPIData = require('../util/getAPIData');
const getFileData = require('../util/getFileData');

const apiUrl = 'https://api.github.com/users/silverorange/repos';

router.get('/repos', async (req, res, next) => {

    const apiData = await getAPIData(apiUrl);
    const fileData = getFileData();

    const aggregatedData = [
        ...apiData,
        ...fileData
    ];

    const notForkedData = aggregatedData.filter(eachData => eachData.fork === false);

    res.json(notForkedData);
});

module.exports = router;