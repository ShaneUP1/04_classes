const express = require('express');
const app = express();
const Stack = require('./stack/stack.js');

app.use(express.json());

//endpoints
// app.post('/lint'), (req, res) => {

// }

app.get('/lint', (req, res) => {
    console.log(req.body);
    res.send('hey there');
});

// listen
app.listen(3000, () => {
    console.log('started on 3000');
});