// npm init --y
const express = require('express');
const app = express();
app.listen(3000, () => console.log('Server is running on port 3000'));

app.get('/', (req, res) => {
    res.send({
        name: 'Teo'
    })
})

app.get('/:name', (req, res) => {
    // let name = req.param('name')
    let name = req.params.name
    res.send({ name });
})