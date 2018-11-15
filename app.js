const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.get('/', (req, res) => {
    res.send(`Hello from Here`)
})


app.get('/login', (req, res) => {
    res.send(`Login successful`)

})


const port = 5000 || process.env.port;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});