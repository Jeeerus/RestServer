const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.send('Hello world!!');
});

app.get('/data', (req, res) => {
    res.send(' {sucess: true, message: "data you requested"} ');
});

app.get('/data/abcd', (req, res) => {
    res.send(' {sucess: true, message: "efgh"} ');
});

app.get('*', function(req, res) {
    res.status(400).send('{success: false, message: "unknown api endpoint"}');
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));