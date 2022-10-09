const express = require('express');
const app = express();

const allDataRoutes = require('./routes/allData');

// allDataRoutes create an end point "localhost:4000/repos"
// Which combines the data in "./data/repos.json" and
// "https://api.github.com/users/silverorange/repos"
app.use(allDataRoutes);

const portNumber = 4000 || process.env.PORT;
app.listen(portNumber, () => console.log(`Server is running on port ${portNumber}!`));