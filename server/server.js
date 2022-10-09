const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({info: 1});
});

const portNumber = 4000 || process.env.PORT;
app.listen(portNumber, () => console.log(`Server is running on port ${portNumber}!`));