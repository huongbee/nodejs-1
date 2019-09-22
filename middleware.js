const express = require('express');
const app = express();
app.listen(3000, () => console.log('Server is running on port 3000'));

function kiemtraDangnhap(req, res, next) {
    const { username, password } = req.params;
    if (username !== 'admin') {
        res.send('Invalid username!');
        return;
    }
    if (password !== '123456') {
        res.send('Invalid password!');
        return;
    }
    next()
}
app.get('/login/:username/:password', kiemtraDangnhap, (req, res) => {
    res.send(`Hello ${req.params.username}`);
})

/**
 * cho đường dẫn: http://localhost:3000/login/:username/:password
 *
 * Yêu cầu:
 * - neu username = admin va password = 123456 => duoc phep di tiep
 * - Nếu sai => Error!
 */