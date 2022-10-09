const axios = require('axios');

const getAPIData = (url) => {
    apiData = axios.get(url).then(res => res.data).catch(err => console.error(err));
    return apiData;
};

module.exports = getAPIData;