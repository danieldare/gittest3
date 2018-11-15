const express = require('express');
const bodyParser = require('body-parser');

const app = express();




const port = 5000 || process.env.port;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});