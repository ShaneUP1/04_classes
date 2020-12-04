const express = require('express');
const app = express();
const { Stack } = require('./stack/stack.js');
const { stripInput } = require('./utils.js');

app.use(express.json());

//endpoints
app.post('/lint', (req, res) => {
    const stack = new Stack();
    const brackets = stripInput(req.body.lint);
    let results = true;

    brackets.forEach(bracket => {
        if (bracket === '{' || bracket === '[' || bracket === '(') {
            stack.push(bracket);
        } else {
            const item = stack.peek();
            if (item === '{' && bracket === '}' ||
                item === '[' && bracket === ']' ||
                item === '(' && bracket === ')') {
                stack.pop();
            } else {
                results = `error: missing ${bracket}`;
            }
        }
    });

    res.send(results);
});

app.listen(3000, () => {
    console.log(`Listening at http://localhost:3000`);
});



